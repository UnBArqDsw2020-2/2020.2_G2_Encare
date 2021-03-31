# Padrões de projeto GOFs Criacionais
## 1. Introdução

Os padrões de projeto criacionais abstraem o proceso de instaciação do objeto. Eles ajudam a fazer o sistema independente na maneira em que são criados, compostos e representados. Em outras palavras esse padrões se concentram em oferecer soluções para problemas recorrentes principalmente na criação/instanciação de objetos.

A seguir iremos apresentar os principais padrões criacionais e como eles se aplicam o projeto, explicando tbm o problema/solução. 

## 2. Padrões:
### 2.1. Factory method

O *factory method* (método de fábrica) consiste no instanciamento de um produto concreto que usa uma interface, por exemplo, uma aplicação que requer um objeto com uma interface específica para realizar as tarefas. 

#### 2.1.1. Vantagens:

* Poder facilmente adicionar mais produtos concretos que utilizam a mesma interface.
* Evitar um alto grau de acoplamento no código.

#### 2.1.2. Desvantagens:

* Caso seu uso seja excessivo pode acarretar a um grande número de subclasses e de arquivos dentro do software.

#### 2.1.3. Aplicação no projeto:

O factory method não se encaixa bem no projeto atual. O maior problema que é resolvido com esse método é quando não se consegue antecipar para a classe qual é o objeto que será instanciado ou quando tem várias classes que implementam uma mesma interface/classe abstrata, coisas que não estão presentes na atual modelagem do projeto. 

## 3. Conclusão:
## 4. Referências:

[1] - Design patterns: Elements of reusable object-oriented software
[2] - https://www.geeksforgeeks.org/factory-method-python-design-patterns/ acesso em 31/03/2021 as 15:22

## 5. Versionamento:

|Data|Nome|Detalhes|Versão|
|----|---|---|---|
| 31/03/2021 | João Pedro Carvalho | Adicionando factory metodo e iniciando o documento | 0.1 |