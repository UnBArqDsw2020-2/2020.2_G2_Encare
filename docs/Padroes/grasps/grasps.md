<style>
    p {
        text-align: justify;
    }
</style>

# GRASPs

Os padrões GRASP fornecem uma abordagem
sistemática para a atribuição de responsabilidades às
classes do projeto e englobam uma série de princípios baseados na Orientação a Objetos. Seu termo vem do inglês e significa <i>General Responsibility Assignment Software Patterns</i>.  
Dentre os tipos de GRASPs, temos :  
- Criador;
- Especialista;
- Alta Coesão;
- Baixo Acoplamento;
- Controladora;
- Polimorfismo;
- Invenção pura;
- Variações protegidas.

## Criador

Este princípio determina qual classe deve ser responsável pela criação certos objetos ou instâncias.

Para definir criadores, é importantes responder à problemática de quem deve ser responsável por criar uma nova instância de uma determinada classe. Para responder isso, existem algumas indagações a serem levandas em consideração, assim, deve-se atribir a uma classe B a responsabilidade de criar uma instância de A se
pelo menos uma dessas condições é verdadeira :
- B contém ou agrega A;
- B registra a existência de A;
- B usa A;
- B tem os dados necessários para a inicialização de A que
serão passados ao construtor de A.

Caso nenhuma dessas condições seja atendida, a própria classe é responsável por "se criar" ou por criar uma nova instância dela mesma.


### Aplicação no projeto

A versão 1 do diagrama de classes, mais especificamente a classe Estabilishment apresenta um baixo nível de coesão, com muitas responsabilidades de forma não especializada. Segue abaixo uma versão reduzida da mesma classe:

![Classe Establishment](SimpleClass.png)

#### OpeningTime

Os atributos minTime e maxTime representam respectivamente o horário de abertura e fechamento do estabelecimento. Estes atributos podem ser separados em outra classe, assim como seus respectivos métodos (_getMinTime()_, ou _getMaxTime()_ por exemplo). Um exemplo conceitual dessa separação pode ser visto abaixo:

![Classes Estabilishment e OpeningTime - modelo conceitual](SimpleClass01.png)

A palavra **contém** indica um forte relacionamento entre as classes. Uma vez que o horário de funcionamento de um estabelecimento só faz sentido existir se o seu respectivo estabelecimento existe. Essa relação é uma composição, criando as seguintes classes:

![Diagrama das Classes Estabilishment e OpeningTime](SimpleClass02.png)

Em suma, a classe Estabilishment é a responsável por criar uma instância da classe OpeningTime.

#### ContactData [escopo aumentado]

No caso da classe *ContactData* os atributos que definem os dados de contato da classe Estabilishment foram separados de modo a dividir suas respectivas responsabilidades. As classes *Phone* e *SocialNetwork* são responsáveis por armazenar as informações de telefone e redes sociais, respectivamente, com o objetivo de intermediar a coleta de dados, e atrinuíndo à classe *ContactData* a responsabilidade de armazenar e tratar os contatos dos estabelecimentos. Ao distribuir essa responsabilidade, a *Estabilishment* fica responsável apenas por armazenar os dados de contato compilados.

![Diagrama das Classes Estabilishment e OpeningTime](images/ContactData.png)

## Especialista

Este princípio determina quando devemos delegar a responsabilidade para um outro objeto que seja especialista naquele domínio.  

A problemática envolvida está relacionada à necessidade de um princípio para a  atribuição de responsabilidade a objetos, onde escolhas são necessárias durante um projeto para a atribuição de responsabilidades a classes.  
Como solução, atribui-se uma responsabilidade a uma classe que possui a informação necessária para cumpri-la, devendo-se deixar bem claro qual é essa responsabilidade.

### Aplicação no Projeto

Ainda utilizando o exemplo das classes Estabilishment e OpeningTime (agora com alguns seus métodos):

![Diagrama das Classes Estabilishment e Opening Time com métodos](SimpleClassE.png)

A responsabilidade de guardar os dados dos horários de abertura e fechamento, assim como de retornar eles está na classe OpeningTime. Essas responsabilidades são a **especialidade** da classe, o que aumenta a coesão do sistema.

## Controlador

 Este princípio atribui a responsabilidade por lidar com eventos do sistema a uma classe que não esteja relacionada a interface com o usuário.

 Ele surge da problemática de quem deve ser o responsável por lidar com um evento que ocorre na interface de usuáro (UI).  
 Para resolver isso, deve-se atribuir a responsabilidade de receber ou lidar com um evento do sistema a uma classe que representa todo o sistema, a um sub-sistema e a um cenário de caso de uso.     

 É interessante também seguir alguns princípios para a elaboração desse modelo, como não conectar objetos da UI com objetos não pertecentes da UI e não aplicar métodos lógicos, como algum tipo de cálculo, aos métodos de um objeto da UI, a fim de modularizar o desenvolvimento das camadas de apresentação e negócio e minimmizar, na camada de negócio, as alterações nos requisitos da UI.

### Aplicação no Projeto

Para este exemplo, consideraremos a primeira história de usuário, que diz respeito a visualização do feed de estabelecimentos.

Considerando uma controladora apenas para este caso de uso**, a FeedController é responsável por passar a requisição do feed para outros módulos ou classes mais especializadas. 

O exemplo abaixo mostra um diagrama conceitual de quais componentes participariam do processamento da requisição:

![FeedController](feedControllerConcept.png)

Para melhor entendimento da ordem de execução, segue um diagrama de sequência para este caso:

![SequenceFeed](SequenceFeed.png)

Este é um caso básico onde a classe FeedController apenas processa uma requisição. Entretanto, caso sejam adicionadas mais requisições relacionadas ao feed, esta controladora manteria a responsabilidade de direcionar o processamento à classe correta. 

<!-- ## Alta Coesão -->

<!-- ## Baixo Acoplamento -->

<!-- ## Polimorfismo -->

<!-- ## Indireção -->

<!-- ## Fabricação ou Invenção Pura -->

<!-- ## variações Protegidas -->

## Versionamento

|Autor(es)|Data|Versão|Descrição|
|---------|:--:|:----:|---------|
|Wagner Martins| 24/03/21 | 0.1 | Criação do documento |
|Wagner Martins| 24/03/21 | 0.2 | Adição de exemplos de aplicações no projeto para os GRASPs criador, especialista e controlador|
|Nícalo Ribeiro| 26/03/21 | 0.3 | Adição da definição de alguns conceitos|
|Nícalo Ribeiro| 26/03/21 | 0.4 | Adição da definição de controlador e complementação de especialista|
|Hugo Aragão   | 07/04/21 | 0.5 | Adição da classe ContactData |


## Referências

[1] Slides das aulas, disponível no moodle da disciplina.
