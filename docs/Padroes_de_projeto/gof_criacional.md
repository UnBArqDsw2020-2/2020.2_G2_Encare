# Padrões de projeto GOFs Criacionais
## 1. Introdução

Os padrões de projeto criacionais abstraem o proceso de instaciação do objeto. Eles ajudam a fazer o sistema independente na maneira em que são criados, compostos e representados. Em outras palavras esse padrões se concentram em oferecer soluções para problemas recorrentes principalmente na criação/instanciação de objetos.

A seguir iremos apresentar os principais padrões criacionais e como eles se aplicam o projeto, explicando também o problema/solução. 

## 2. Factory method

O *factory method* (método de fábrica) consiste no instanciamento de um produto concreto que usa uma interface, por exemplo, uma aplicação que requer um objeto com uma interface específica para realizar as tarefas. 

### 2.1. Vantagens:

* Poder facilmente adicionar mais produtos concretos que utilizam a mesma interface.
* Evitar um alto grau de acoplamento no código.

### 2.2. Desvantagens:

* Caso seu uso seja excessivo pode acarretar a um grande número de subclasses e de arquivos dentro do software.

### 2.3. Aplicação no projeto:

O factory method não se encaixa bem no projeto atual. O maior problema que é resolvido com esse método é quando não se consegue antecipar para a classe qual é o objeto que será instanciado ou quando tem várias classes que implementam uma mesma interface/classe abstrata, coisas que não estão presentes na atual modelagem do projeto. 

## 3. Builder

O padrão de projeto *Builder* tem como objetivo separar a construção de objetos complexos da sua representação de modo que o mesmo processo de construção pode criar várias representações.

Seu funcionamento começa na classe *Director* que possui o método que chama o *ConcrectBuilder* específico, de acordo com os parâmetros especificados. Essa classe não é essencial nesse padrão, mas é importante. Outra parte desse processo são as classes *Builders*; a primeira é uma classe abstrata que declara os métodos que devem ser implementados por um *ConcrectBuilder*; esta classe é uma classe concreta que implementa os métodos necessários para a construção do produto e, por fim, a classe *Product* é o resutado da construção implementada no *ConcrectBuilder*. Tendo em vista esse processo, ess padrão de projeto é vantajoso somente se o processo de contrução do produto em sí é muito complexo, sendo necessário a separação de responsabilidades entre as classes.

### 3.1. Vantagens:

* Pode-se usar a mesma construção para diversas representações do produto. Em outras palavras favorece a reusabilidade do código.
* Pelo princípio da única responsabilidade, é separado a responsabilidade de construir o objeto de quem o usa.
* É possível criar uma construção de um objeto em etapas.
* Entrega um maior controle sobre a construção de um objeto.

### 3.2. Desvantagens:

* Aumenta a complexidade do código, ja que esse padrão requer a criação de múltiplas classes.
* Requer que a classe Builder seja mutável.

## 4. Singleton

## 5. Multiton

## 6. Object poll

## 7. Abstract factory

## 8. Conclusão:
## 9. Referências:

[1] - Design patterns: Elements of reusable object-oriented software
[2] - https://www.geeksforgeeks.org/factory-method-python-design-patterns/ acesso em 31/03/2021 as 15:22
[3] - https://www.geeksforgeeks.org/builder-method-python-design-patterns/ acesso em 31/03/2021 as 19:00

## 10. Versionamento:

|Data|Nome|Detalhes|Versão|
|----|---|---|---|
| 31/03/2021 | João Pedro Carvalho | Adicionando factory methodo e iniciando o documento | 0.1 |
| 31/03/2021 | João Pedro Carvalho | Adicionando builder  | 0.2 |