# Padrões de projeto GOFs Comportamentais
## 1. Introdução
Os padrões comportamentais são voltados aos algoritmos e a designação de responsabilidades entre objetos.  

Os padrões comportamentais de classes utilizam a herança para distribuir o comportamento entre classes, e os padrões de comportamento de objeto utilizam a composição de objetos em contrapartida a herança. Alguns descrevem como grupos de objetos cooperam para a execução de uma tarefa que não poderia ser executada por um objeto sozinho.

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
-- A PRINCIPIO NÃO É APLICÁVEL --
- - -

## 3. Command
O Command é um padrão de projeto comportamental que transforma um pedido em um objeto independente que contém toda a informação sobre o pedido. Essa transformação permite que você parametrize métodos com diferentes pedidos, atrase ou coloque a execução do pedido em uma fila, e suporte operações que não podem ser feitas.

## Estrutura
1. Classe Remetente - responsável por iniciar os pedidos. Essa classe deve ter um campo para armazenar a referência para um objeto comando. O remetente aciona aquele comando ao invés de enviar o pedido diretamente para o destinatário. Observe que o remetente não é responsável por criar o objeto comando. Geralmente ele é pré criado através de um construtor do cliente.
2. Interface Comando - geralmente declara apenas um único método para executar o comando.
3. Comandos Concretos - implementam vários tipos de pedidos. Um comando concreto não deve realizar o trabalho por conta própria, mas passar a chamada para um dos objetos da lógica do negócio.
4. Classe Destinatária - contém a lógica do negócio. Quase qualquer objeto pode servir como um destinatário. A maioria dos comandos apenas lida com os detalhes de como um pedido é passado para o destinatário, enquanto que o destinatário em si executa o verdadeiro trabalho.
5. Client - cria e configura objetos comando concretos. O cliente deve passar todos os parâmetros do pedido, incluindo uma instância do destinatário, para o construtor do comando. Após isso, o comando resultante pode ser associado com um ou múltiplos destinatários.

### 3.1 Vantagens
-  Princípio de responsabilidade única. É possível desacoplar classes que invocam operações de classes que fazem essas operações.
-  Princípio aberto/fechado. É possível introduzir novos comandos na aplicação sem quebrar o código cliente existente.
-  É possível implementar desfazer/refazer.
-  É possível implementar a execução adiada de operações.
-  É possível montar um conjunto de comandos simples em um complexo.

### 3.2 Desvantagens

O código pode ficar mais complicado uma vez que você está introduzindo uma nova camada entre remetentes e destinatários.

### 3.3 Aplicação no Projeto
-- APLICÁVEL EM "RATING"
- - -

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
-- APLICÁVEL EM "PICTURE" --
- - -

## 5. Mediator

### 5.1 Vantagens

### 5.2 Desvantagens

### 5.3 Aplicação no Projeto

- - -

## 6. Memento

### 6.1 Vantagens

### 6.2 Desvantagens

### 6.3 Aplicação no Projeto

- - -

## 7. Observer

### 7.1 Vantagens

### 7.2 Desvantagens

### 7.3 Aplicação no Projeto

- - -

## 8. State

### 8.1 Vantagens

### 8.2 Desvantagens

### 8.3 Aplicação no Projeto

- - -

## 9. Strategy

### 9.1 Vantagens

### 9.2 Desvantagens

### 9.3 Aplicação no Projeto

- - -

## 10. Template Method

### 10.1 Vantagens

### 10.2 Desvantagens

### 10.3 Aplicação no Projeto

- - -

## 11. Visitor

### 11.1 Vantagens

### 11.2 Desvantagens

### 11.3 Aplicação no Projeto

- - -

## 12. Conclusão

- - -

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