# Padrões de projeto GOFs Comportamentais

## 1. Introdução
Os padrões comportamentais são voltados aos algoritmos e a designação de responsabilidades entre objetos.  

Os padrões comportamentais de classes utilizam a herança para distribuir o comportamento entre classes, e os padrões de comportamento de objeto utilizam a composição de objetos em contrapartida a herança. Alguns descrevem como grupos de objetos cooperam para a execução de uma tarefa que não poderia ser executada por um objeto sozinho.

O documento apresenta uma visão geral dos GOFs Comportamentais, com descrição do o que é, a estrutura, vantagens e desvantagens e aplicação no projeto. Para a maioria são apresentadas apenas ideias da aplicação. Os padrões que apresentados com exemplos de implementação foram:

- [Iterator](#4-iterator)
- [Command](#3-command)

## 2. Chain of Responsibility  
O Chain of Responsibility é um padrão de projeto comportamental que permite que você passe pedidos por uma corrente de handlers. Ao receber um pedido, cada handler decide se processa o pedido ou o passa adiante para o próximo handler na corrente.  

O Chain of Responsibility é aplicado quando é esperado que o programa processe diferentes tipos de pedidos em várias maneiras, mas os exatos tipos de pedidos e suas sequências são desconhecidos de antemão.

## Estrutura
1. Handler - declara a interface comum a todos os handlers concretos. Ele geralmente contém apenas um único método para lidar com pedidos, mas algumas vezes ele pode conter outro método para configurar o próximo handler da corrente.
2. Handler Base - é uma classe opcional onde é possível colocar o código padrão que é comum a todas as classes handler.
3. Handlers Concretos - contém o código real para processar pedidos. Ao receber um pedido, cada handler deve decidir se processa ele e, adicionalmente, se passa ele adiante na corrente. Os handlers são geralmente auto contidos e imutáveis, aceitando todos os dados necessários apenas uma vez através do construtor.
4. Client - pode compor correntes apenas uma vez ou compô-las dinamicamente, dependendo da lógica da aplicação.

### 2.1 Vantagens
-  É possível controlar a ordem de tratamento dos pedidos.
-  Princípio de responsabilidade única. É possível desacoplar classes que invocam operações de classes que realizam operações.
-  Princípio aberto/fechado. É possível introduzir novos handlers na aplicação sem quebrar o código cliente existente.
### 2.2 Desvantagens
- Alguns pedidos podem acabar sem tratamento.

### 2.3 Aplicação no Projeto

O padrão chain of responsability pode ser exemplificado no QueryBuilder usado pela classe Filtro para a filtragem dos estabelecimentos de acordo com parâmetros como distância, serviços procurados e avaliação. A classe abstrata QueryBuilder contém a definição básica para a chaining, enquanto que suas concretas RatingQuery, GeolocationQuery e ServiceQuery são responsáveis por montar, em ordem, o pedido que será feito ao banco de dados.

O chain of responsability poderia ser também aplicado na camada de controle da aplicação, de forma a realizar operações de logging e autorização, por exemplo, antes de seguir para a lógica de negócio propriamente. Entretanto, essas operações geralmente já são implementadas por frameworks.

## 3. Command
O Command é um padrão de projeto comportamental que transforma um pedido em um objeto independente que contém toda a informação sobre o pedido. Essa transformação permite que você parametrize métodos com diferentes pedidos, atrase ou coloque a execução do pedido em uma fila, e suporte operações que não podem ser feitas.

## Estrutura
1. Classe Remetente ou Invocadora (Invoker) - responsável por iniciar os pedidos. Essa classe deve ter um campo para armazenar a referência para um objeto comando. O remetente aciona aquele comando ao invés de enviar o pedido diretamente para o destinatário. Observe que o remetente não é responsável por criar o objeto comando. Geralmente ele é pré criado através de um construtor do cliente.
2. Interface Comando (Command) - geralmente declara apenas um único método para executar o comando.
3. Comandos Concretos (Concrete Command) - implementam vários tipos de pedidos. Um comando concreto não deve realizar o trabalho por conta própria, mas passar a chamada para um dos objetos da lógica do negócio.
4. Classe Destinatária (Receiver) - contém a lógica do negócio. Quase qualquer objeto pode servir como um destinatário. A maioria dos comandos apenas lida com os detalhes de como um pedido é passado para o destinatário, enquanto que o destinatário em si executa o verdadeiro trabalho.
5. Cliente (Client) - cria e configura objetos comando concretos. O cliente deve passar todos os parâmetros do pedido, incluindo uma instância do destinatário, para o construtor do comando. Após isso, o comando resultante pode ser associado com um ou múltiplos destinatários.

### 3.1 Vantagens
-  Princípio de responsabilidade única. É possível desacoplar classes que invocam operações de classes que fazem essas operações.
-  Princípio aberto/fechado. É possível introduzir novos comandos na aplicação sem quebrar o código cliente existente.
-  É possível implementar desfazer/refazer.
-  É possível implementar a execução adiada de operações.
-  É possível montar um conjunto de comandos simples em um complexo.

### 3.2 Desvantagens

O código pode ficar mais complicado uma vez que você está introduzindo uma nova camada entre remetentes e destinatários.

### 3.3 Aplicação no Projeto

**Exemplo toy ([Escopo estendido]())**

O padrão command pode ser aplicado em locais que precisam da requisição a API do Back-end. Neste exemplo, aplicamos o padrão command no envio da avaliação de um estabelecimento por parte do usuário.

![Modelagem do exemplo Command](images/Command.png)

Abaixo os códigos do exemplo, feitos em typescript:

~~~typescript
function App() {

  const requestHandler: RequestHandler = new RequestHandler();

  const ratingSender: RatingSender = new RatingSender("Session User", "Target Estabilishment", requestHandler);

  return (
    <div>
      <select name="rating" id="ratingNumber">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <br/>
      <textarea name="estabilishmentReview" id="ratingComment" defaultValue="Some Placeholder text"></textarea>
      <br/>
      <button onClick={ratingSender.getCommandFunction()}>Send Review</button>
    </div>
  );
}
~~~

A própria aplicação é a cliente que usa a command.

O botão é a invoker, responsável por chamar a função de execução da command.

~~~typescript
class RequestHandler {

    public constructor() {
        return this;
    }

    public sendGetRequest(path:string): any {
        console.log(`Request to ${path}`);
    }

    public sendPostRequest(path:string, data:any): any {
        console.log(`Request to ${path} with`)
        console.log(data)
    }
}
~~~

RequestHandler é a receiver. Neste caso responsável pelas requisições. Por se tratar de um exemplo toy, as funções apenas logam no console os objetos que seriam passados pela requisição.

~~~typescript
interface RequestSender {
    execute: {
        (data: any): any
    }
}
~~~

~~~typescript
class RatingSender implements RequestSender {
    private user: string;
    private estabilishment: string;
    private handler: RequestHandler;


    public constructor(user: string, estabilishment: string, handler: RequestHandler) {
        this.user = user;
        this.estabilishment = estabilishment;
        this.handler = handler;
    }

    public execute(): any {
        let rating = this.getFormData();
        
        let data = {
            rating: rating.number,
            comment: rating.comment,
            user: this.user,
            estabilishment: this.estabilishment,
        }

        return this.handler.sendPostRequest(`establishment/sendrating`, data);
    }

    public getCommandFunction() {
        return () => {
            this.execute();
        }
    }

    private getFormData = () => {
        let number: HTMLInputElement = document.getElementById("ratingNumber") as HTMLInputElement;
        let comment: HTMLInputElement = document.getElementById("ratingComment") as HTMLInputElement;
        
        let rating = {
          number: number.value,
          comment: comment.value
        }
        
        return rating;
      }

}
~~~

RequestSender é a interface do command. Suas implementações concretas (neste caso a RatingSender) são responsáveis por fazer modificações nos dados e pedir para a receiver executar a requisição.

## 4. Iterator
O Iterator é um padrão de projeto comportamental que permite a você percorrer elementos de uma coleção sem expor as representações dele (lista, pilha, árvore, etc.)
Além de implementar o algoritmo em si, um objeto iterador encapsula todos os detalhes da travessia, tais como a posição atual e quantos elementos faltam para chegar ao fim. Por causa disso, alguns iteradores podem averiguar a mesma coleção ao mesmo tempo, independentemente um do outro.

O Iterator é utilizado quando se quer que o código seja capaz de percorrer diferentes estruturas de dados ou quando os tipos dessas estruturas são desconhecidos de antemão.

### Estrutura
1. Interface Iterador - declara as operações necessárias para percorrer uma coleção: buscar o próximo elemento, pegar a posição atual, recomeçar a iteração e outras
2. Iteradores Concretos - implementam algoritmos específicos para percorrer uma coleção. O objeto iterador deve monitorar o progresso da travessia por conta própria. Isso permite que diversos iteradores percorram a mesma coleção independentemente de cada um.
3. Interface Coleção - declara um ou mais métodos para obter os iteradores compatíveis com a coleção.
4. Coleções Concretas - retornam novas instâncias de uma classe iterador concreta em particular cada vez que o cliente pede por uma.
5. Client - trabalha tanto com as coleções como os iteradores através de suas interfaces. Dessa forma o cliente não fica acoplado a suas classes concretas, permitindo usar várias coleções e iteradores com o mesmo código client.
   
### 4.1 Vantagens
- Princípio de responsabilidade única. é possível limpar o código cliente e as coleções ao extrair os pesados algoritmos de travessia para classes separadas.
- Princípio aberto/fechado. é possível implementar novos tipos de coleções e iteradores e passá-los para o código existente sem quebrar coisa alguma.
- É possível iterar sobre a mesma coleção em paralelo porque cada objeto iterador contém seu próprio estado de iteração.
- Pelas mesmas razões, é possível atrasar uma iteração e continuá-la quando necessário.

### 4.2 Desvantagens
- Aplicar o padrão pode ser um preciosismo se sua aplicação só trabalha com coleções simples.
- Usar um iterador pode ser menos eficiente que percorrer elementos de algumas coleções especializadas diretamente.
### 4.3 Aplicação no Projeto
No nosso projeto, vários tipos de listas serão obtidas do *backend*, a princípio por meio de um objeto JSON, para serem tratadas exibidas ao usuário no *frontend*.  
Com isso, a construção de um Iterator se torna interessante devido à variedade das listas, assim como seu tamanho, permitindo reúso.

Abaixo temos um trecho de código escrito em JavaScript, que será usado pelo React, com a implementação de um Iterator :
~~~javascript
const Iterator = function (items) {
    this.index = 0;
    this.items = items;
}

Iterator.prototype = {
    first: function() {
        this.reset();
        return this.next();
    },
    next: function() {
        return this.items[this.index++];
    },
    hasNext: function() {
        return this.index <= this.items.length;
    },
    reset: function() {
        this.index = 0;
    },
    each: function(callback) {
        for (var item = this.first(); this.hasNext(); item = this.next()) {
            callback(item);
        }
    }
}

module.exports = Iterator;
~~~

Abaixo, temos um exemplo do uso do Iterator no React, onde uma lista, independente do que se trata, será iterada e seus objetos serão adicionados a um state.
A função *useEffect* executa a função de percorrer a lista quando o componente em questão é montado.

~~~javascript
const [ data, setData ] = useState([]);

const loadData = () => {
    let iter = new Iterator(list);
    for(let item = iter.first(); iter.hasNext(); item = iter.next()){
        setData(data => [...data, item]);
    }
}
useEffect(() => { loadData() }, []); 
~~~
- - -

## 5. Mediator
O Mediator é um padrão de projeto comportamental que permite que você reduza as dependências caóticas entre objetos. O padrão restringe comunicações diretas entre objetos e os força a colaborar apenas através do objeto mediador.

## Estrutura
1. Componentes - são várias classes que contém alguma lógica de negócio. Cada componente tem uma referência a um mediador, declarada com o tipo de interface do mediador. O componente não está ciente da classe atual do mediador, então é possível reutilizar o componente em outros programas ao ligá-lo com um mediador diferente.
2. Interface do Mediador - declara métodos de comunicação com os componentes, os quais geralmente incluem apenas um método de notificação. Os componentes podem passar qualquer contexto como argumentos desse método, incluindo seus próprios objetos, mas apenas de tal forma que nenhum acoplamento ocorra entre um componente destinatário e a classe remetente.
3. Mediadores Concretos - encapsulam as relações entre vários componentes. Os mediadores concretos quase sempre mantém referências de todos os componentes os quais gerenciam e, algumas vezes, até gerenciam o ciclo de vida deles.
4. Componentes não devem estar cientes de outros componentes - se algo importante acontece dentro ou para um componente, ele deve apenas notificar o mediador. Quando o mediador recebe a notificação, ele pode facilmente identificar o remetente, o que é suficiente para decidir que componente deve ser acionado em retorno. Da perspectiva de um componente, tudo parece como uma caixa preta. O remetente não sabe quem vai acabar lidando com o seu pedido, e o destinatário não sabe quem enviou o pedido em primeiro lugar.

### 5.1 Vantagens
- Princípio de responsabilidade única. É possível extrair as comunicações entre vários componentes para um único lugar, tornando as de mais fácil entendimento e manutenção.
- Princípio aberto/fechado. É possível introduzir novos mediadores sem ter que mudar os próprios componentes.
- É possível reduzir o acoplamento entre os vários componentes de um programa.
- É possível reutilizar componentes individuais mais facilmente.

### 5.2 Desvantagens
- Com o tempo um mediador pode evoluir para um Objeto Deus. Na programação orientada a objetos, um Objeto Deus é um objeto que sabe demais ou faz demais. O objeto deus é um exemplo de um antipadrão em projetos de software.

### 5.3 Aplicação no Projeto

No escopo estendido da aplicação, o mediator pode se caracterizar como um mediador entre um usuário cliente (Customer) e um usuário dono de estabelecimento (Owner), por meio de um componente de chat.

## 6. Memento
O Memento é um padrão de projeto comportamental que permite que você salve e restaure o estado anterior de um objeto sem revelar os detalhes de sua implementação.
O padrão Memento é usado quando se quer produzir retratos do estado de um objeto para ser capaz de restaurar um estado anterior do objeto.

## Estrutura  
1. Classe Originadora - pode produzir retratos de seu próprio estado, bem como restaurar seu estado de retratos quando necessário.
2. Memento - é um objeto de valor que age como um retrato do estado da originadora. É uma prática comum fazer o memento imutável e passar os dados para ele apenas uma vez, através do construtor.
3. Cuidadora - sabe não só “quando” e “por quê” capturar o estado da originadora, mas também quando o estado deve ser restaurado.
4. Nessa implementação, a classe memento está aninhada dentro da originadora. Isso permite que a originadora acesse os campos e métodos do memento, mesmo que eles tenham sido declarados privados. Por outro lado, a cuidadora tem um acesso muito limitado aos campos do memento, que permite ela armazenar os mementos em uma pilha, mas não permite mexer com seu estado.

### 6.1 Vantagens
- É possível produzir retratos do estado de um objeto sem violar seu encapsulamento.
- É possível simplificar o código da originadora permitindo que a cuidadora mantenha o histórico do estado da originadora.
### 6.2 Desvantagens
- A aplicação pode consumir muita RAM se os clientes criarem mementos com muita frequência.
- Cuidadoras devem acompanhar o ciclo de vida da originadora para serem capazes de destruir mementos obsoletos.
- A maioria das linguagens de programação dinâmicas, tais como PHP, Python, e JavaScript, não conseguem garantir que o estado dentro do memento permaneça intacto.
### 6.3 Aplicação no Projeto

Esse comportamento pode ser usado em componentes de escrita, como no chat ou avaliação do estabelecimento. As tags de entreda do HTML contêm mecânismos de um memento.

## 7. Observer
O Observer é um padrão de projeto comportamental que permite que você defina um mecanismo de assinatura para notificar múltiplos objetos sobre quaisquer eventos que aconteçam com o objeto que eles estão observando. Também pode ser conhecido como Observador, Assinante do evento, Event-Subscriber, Escutador, Listener.
O padrão Observer pode ser usado quando mudanças no estado de um objeto podem precisar mudar outros objetos, e o atual conjunto de objetos é desconhecido de antemão ou muda dinamicamente.

## Estrutura
1. Publicadora - manda eventos de interesse para outros objetos. Esses eventos ocorrem quando a publicadora muda seu estado ou executa algum comportamento. As publicadoras contêm uma infraestrutura de inscrição que permite novos assinantes se juntar aos atuais assinantes ou deixar a lista.
2. Quando um novo evento acontece, a publicadora percorre a lista de assinantes e chama o método de notificação declarado na interface do assinante em cada objeto assinante.
3. Interface Assinante - declara a interface de notificação. Na maioria dos casos ela consiste de um único método atualizar. O método pode ter vários parâmetros que permite que a publicadora passe alguns detalhes do evento junto com a atualização.
4. Assinantes Concretos - realizam algumas ações em resposta às notificações enviadas pela publicadora. Todas essas classes devem implementar a mesma interface para que a publicadora não fique acoplada à classes concretas.
5. Geralmente, assinantes precisam de alguma informação contextual para lidar com a atualização corretamente. Por esse motivo, as publicadoras quase sempre passam algum dado de contexto como argumentos do método de notificação. A publicadora pode passar a si mesmo como um argumento, permitindo que o assinante recupere quaisquer dados diretamente.
6. Cliente - cria a publicadora e os objetos assinantes separadamente e então registra os assinantes para as atualizações da publicadora.

### 7.1 Vantagens
- Princípio aberto/fechado. É possível introduzir novas classes assinantes sem ter que mudar o código da publicadora (e vice versa se existe uma interface publicadora).
- É possível estabelecer relações entre objetos durante a execução.

### 7.2 Desvantagens
- Assinantes são notificados em ordem aleatória
  
### 7.3 Aplicação no Projeto

O chat, além de um mediator, também aplica o padrão de Observer, uma vez que ele precisa manter uma lista dos usuários participantes, e precisa escutar os eventos de conexão, desconexão e envio de mensagens entre os usuários.

## 8. State
O State é um padrão de projeto comportamental que permite que um objeto altere seu comportamento quando seu estado interno muda. É como se o objeto mudasse de classe.
O padrão State pode ser usado quando se tem um objeto que se comporta de maneira diferente dependendo do seu estado atual, quando o número de estados é enorme, e quando o código estado específico muda com frequência.

## Estrutura
1. Contexto - armazena uma referência a um dos objetos concretos de estado e delega a eles todos os trabalhos específicos de estado. O contexto se comunica com o objeto estado através da interface do estado. O contexto expõe um setter para passar a ele um novo objeto de estado.
2. Interface do Estado - declara métodos específicos a estados. Esses métodos devem fazer sentido para todos os estados concretos porque você não quer alguns dos seus estados tendo métodos inúteis que nunca irão ser chamados.
3. Estados Concretos - fornecem suas próprias implementações para os métodos específicos de estados. Objetos de estado podem armazenar referências retroativas para o objeto de contexto.Através dessa referência o estado pode buscar qualquer informação desejada do objeto contexto, assim como iniciar transições de estado.
4. Ambos os estados de contexto e concretos podem configurar o próximo estado do contexto e realizar a atual transição de estado ao substituir o objeto estado ligado ao contexto.

### 8.1 Vantagens
- Princípio de responsabilidade única. Organiza o código relacionado a estados particulares em classes separadas.
- Princípio aberto/fechado. Introduz novos estados sem mudar classes de estado ou contexto existentes.
- Simplifica o código de contexto ao eliminar condicionais de máquinas de estado pesadas
### 8.2 Desvantagens
- Aplicar o padrão pode ser um exagero se a máquina de estado só tem alguns estados ou raramente muda eles.
### 8.3 Aplicação no Projeto

O gerenciamento de estado de componentes é muito utilizado no frontend. Um exemplo disso pode ser a mudança de contexto entre a tela inicial e a visualização de algum estabelecimento específico. 

## 9. Strategy
O Strategy é um padrão de projeto comportamental que permite que você defina uma família de algoritmos, coloque-os em classes separadas, e faça os objetos deles intercambiáveis. O padrão Strategy sugere que se pegue uma classe que faz algo específico em diversas maneiras diferentes e extraia todos esses algoritmos para classes separadas chamadas estratégias.
Pode ser utilizado quando se tem muitas classes parecidas que somente diferem na forma que elas executam algum comportamento.

## Estrutura
1. Contexto - mantém uma referência para uma das estratégias concretas e se comunica com esse objeto através da interface da estratégia.
2. Interface Estratégia - é comum à todas as estratégias concretas. Ela declara um método que o contexto usa para executar uma estratégia.
3. Estratégias Concretas - implementam diferentes variações de um algoritmo que o contexto usa.
4. O contexto chama o método de execução no objeto estratégia ligado cada vez que ele precisa rodar um algoritmo. O contexto não sabe qual tipo de estratégia ele está trabalhando ou como o algoritmo é executado.
5. Client - cria um objeto estratégia específico e passa ele para o contexto. O contexto expõe um setter que permite o cliente mudar a estratégia associada com contexto durante a execução.

### 9.1 Vantagens
- É possível trocar algoritmos usados dentro de um objeto durante a execução.
- É possível isolar os detalhes de implementação de um algoritmo do código que usa ele.
- É possível substituir a herança por composição.
- Princípio aberto/fechado. É possível introduzir novas estratégias sem mudar o contexto.

### 9.2 Desvantagens
- Se existe só tem um par de algoritmos e eles raramente mudam, não há motivo real para deixar o programa mais complicado com novas classes e interfaces que vêm junto com o padrão.
- Os Clientes devem estar cientes das diferenças entre as estratégias para serem capazes de selecionar a adequada.
- Muitas linguagens de programação modernas tem suporte do tipo funcional que permite que implemente diferentes versões de um algoritmo dentro de um conjunto de funções anônimas. Então é possível usar essas funções exatamente como se estivesse usando objetos estratégia, mas sem inchar seu código com classes e interfaces adicionais.
  
### 9.3 Aplicação no Projeto

As classes User, Estabilishment e Service precisam ter instâncias salvas, atualizadas ou apagadas. Uma aplicação de Strategy nesse caso poderia usar uma interface Register, cujas classes concretas se encarregam dessas operações de forma especializada para cada entidade que necessita dessas operações.

## 10. Template Method
Também conhecido como Método padrão, é um padrão de projeto comportamental que define o esqueleto de um algoritmo na superclasse mas deixa as subclasses sobrescreverem etapas específicas do algoritmo sem modificar sua estrutura.
Pode ser utilizade quando se tem várias classes que contém algoritmos quase idênticos com algumas diferenças menores. Como resultado, é possível querer modificar todas as classes quando o algoritmo muda.

## Estrutura
1. Classe Abstrata - declara métodos que agem como etapas de um algoritmo, bem como o próprio método padrão que chama esses métodos em uma ordem específica. Os passos podem ser declarados como abstratos ou ter alguma implementação padrão.
2. Classes Concretas - podem sobrescrever todas as etapas, mas não o próprio método padrão.

### 10.1 Vantagens
- É possível deixar clientes sobrescrever apenas certas partes de um algoritmo grande, tornando-os menos afetados por mudanças que acontece por outras partes do algoritmo.
- É possível elevar o código duplicado para uma superclasse.

### 10.2 Desvantagens
- Alguns clientes podem ser limitados ao fornecer o esqueleto de um algoritmo.
- Implementações do padrão Template Method tendem a ser mais difíceis de se manter quanto mais etapas eles tiverem.
### 10.3 Aplicação no Projeto

Não foram identificados casos que o Template Method precise ser implementado no projeto. Entretanto esse padrão pode ser observado em funções muito usadas como filter ou order no Javascript, que recebem funções para controlar os elementos internos de coleções.

## 11. Visitor
O Visitor é um padrão de projeto comportamental que permite que você separe algoritmos dos objetos nos quais eles operam. O padrão Visitor sugere que você coloque o novo comportamento em uma classe separada chamada visitante, ao invés de tentar integrá-lo em classes já existentes.
É possível utilizar o Visitor quando se quer fazer uma operação em todos os elementos de uma estrutura de objetos complexa.

## Estrutura
1. Interface Visitante - declara um conjunto de métodos visitantes que podem receber elementos concretos de uma estrutura de objetos como argumentos. Esses métodos podem ter os mesmos nomes se o programa é escrito em uma linguagem que suporta sobrecarregamento, mas o tipo dos parâmetros devem ser diferentes.
2. Visitante Concreto - implementa diversas versões do mesmo comportamento, feitos sob medida para diferentes elementos concretos de classes.
3. A interface Elemento - declara um método para “aceitar” visitantes. Esse método deve ter um parâmetro declarado com o tipo da interface do visitante.
4. Elemento Concreto - deve implementar o método de aceitação. O propósito desse método é redirecionar a chamada para o método visitante apropriado que corresponde com a atual classe elemento. Esteja atento que mesmo se uma classe elemento base implemente esse método, todas as subclasses deve ainda sobrescrever esse método em suas próprias classes e chamar o método apropriado no objeto visitante.
5. Cliente - geralmente representa uma coleção de outros objetos complexos. Geralmente, os clientes não estão cientes de todos as classes elemento concretas porque eles trabalham com objetos daquele coleção através de uma interface abstrata.

### 11.1 Vantagens
- Princípio aberto/fechado. É possível introduzir um novo comportamento que pode funcionar com objetos de diferentes classes sem mudar essas classes.
- Princípio de responsabilidade única. É possível mover múltiplas versões do mesmo comportamento para dentro da mesma classe.
- Um objeto visitante pode acumular algumas informações úteis enquanto trabalha com vários objetos. Isso pode ser interessante quando se quer percorrer algum objeto de estrutura complexa e aplicar o visitante para cada objeto da estrutura.
  
### 11.2 Desvantagens
- É necessário atualizar todos os visitantes a cada vez que a classe é adicionada ou removida da hierarquia de elementos.
- Visitantes podem não ter seu acesso permitido para campos e métodos privados dos elementos que eles deveriam estar trabalhando.

### 11.3 Aplicação no Projeto

Não foram identificadas aplicações para este padrão.

<!-- ## 12. Conclusão -->

## 13. Referências

[1] - Padrões de projeto comportamentais. Disponível em: <https://refactoring.guru/pt-br/design-patterns/behavioral-patterns>.  

[2] - ALESSANDRO FERREIRA LEITE. Conheça os Padrões de Projeto. Disponível em: <https://www.devmedia.com.br/conheca-os-padroes-de-projeto/957>.

‌
‌
- - -

## 14. Versionamento
|Data|Nome|Detalhes|Versão|
|----|----|--------|------|
|03/04/2021|Nícalo Ribeiro| Criação da estrutura base do documento| 0.1|
|03/04/2021|Nícalo, Wagner, Hugo| Adição dos conceitos de Chain of Responsibility | 0.2 |
|03/04/2021|Nícalo, Wagner, Hugo| Adição dos conceitos de Command e Iterator | 0.3 |
|03/04/2021|Nícalo, Wagner, Hugo| Adição dos conceitos de Mediator, Memento, Observer e State | 0.4 |
|03/04/2021|Nícalo, Wagner, Hugo| Adição dos conceitos de Strategy, Template Method e Visitor | 0.5 |
|08/04/2021|Wagner Martins| Adição da modelagem e código do padrão command | 0.6 |
|08/04/2021|Nícalo Ribeiro| Adição do código do padrão Iterator | 0.7 |
|08/04/2021|Wagner Martins| Adição de ideias de aplicação no projeto para os outros padrões | 0.8 |