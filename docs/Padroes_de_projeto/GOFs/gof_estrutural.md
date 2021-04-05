# GOFs Estruturais
## 1. Introdução

Seguindo com os padrões de projeto GOFs temos os estruturais. Esses padrões focam em como classes e objetos se compõem para formar estruturas complexas. 

Sendo assim vamos apresentar os principais padrões, suas vantagens e desvantagens e como eles podem ou não ser aplicados no projeto.

#### 1.1. Siglas e acrônimos:

|Termo|Representação|
|---|---|
|GOF| Gang of Four (em referência aos 4 autores do livro em [1])|
|SRP| Single Responsibility Principle|
|OCP| Open Close Principle|
|DRF| Django REST Framework|
|SO| Sistema operacional|

## 2. Adapter

Converte a interface de uma classe em outra que o código cliente espera. Esse padrão permite que classes com interfaces compatíveis trabalhem juntas. Também é conhecida como Wrapper.

Sua implementação é constituído por uma interface que servirá a todas as classes *Adapter*, classes concretas *Adapter* e por fim os objetos/classes que serão adaptados. Observa-se então que o padrão de projeto se baseia na criação de um intermediador entre o código cliente e o objeto a ser utilizado.

Metaforicamente, o adapter é um adptador de tomada que permite que um plug se conecte a tomada sem ser compatível, comportando como um intermediador.

#### 2.1. Vantagens

- Desacopla o código da aplicação de terceiros.
- Aplica o SRP ao separar a conversão da interface da lógica da aplicação.
- Aplica o OCP ao permitir adicionar novos *adapters* no código exixtente.

#### 2.2. Desvantagens

- Aumenta a complexidade do código.

#### 2.3. Aplicação no projeto.

O próprio DRF aplica em algumas classes o padrão de projeto *Adapter* como podemos ver [aqui](https://davenathanaeld.medium.com/design-pattern-django-rest-framework-1e8c17946bce). Para o projeto, as classes entre si, não há problemas de compatibilidade; por outro lado, a adapter pode ser usada para conversar com o banco de dados e fazer as devidas requisições. 

Outro ponto interessante para o uso de *adapteres* é em relação as imagens que são recebidas por meio de requests em formato de bytes e tratadas no código como uma classe picture.

## 3. Bridge

O *Bridge* tem a intenção de desacoplar a abstração da sua implementação, de modo que as duas possam variar e evoluir independentemente. Outra utilização é separar uma classe grande ou um conjunto de classes intimidamente ligadas em duas hierarquias.

Segundo o livro Design Patterns [1], o padrão Bridge está sendo descrito como "Desacoplar a **abstração** da sua **implementação** então ambas podem variar independentemente.". Esses dois termos são chaves para o entendimento do padrão. Abstração é uma camada de controle de alto nível que não realiza o trabalho por si só e sim delega para uma camada de implementação. 

Um bom exemplo sobre abstração e implementação é a relação entre a GUI e as APIs de um SO. A GUI (asbtração) apenas transfere as ações do usuário para que a API (implementação) realize o trabalho.

#### 3.1. Vantagens

- Desacopla o código da abstração do código da implementação (SRP)
- Insere o OCP para novas abstrações/implementações para o código existente.
- Tem as mesmas vantagens do Adapter.

#### 3.2. Desvantagens

- Aumenta a complexidade do projeto quando aplicada em locais inapropriados.

#### 3.3. Aplicação no projeto.

Aplicar o Bridge no projeto irá aumentar a complexidade sem ter vantagens significativas, dado que poucos pontos do projeto tem essa relação abstração-implementação.

## 4. Composite
#### 4.1. Vantagens
#### 4.2. Desvantagens
#### 4.3. Aplicação no projeto.
## 5. Decorator
#### 5.1. Vantagens
#### 5.2. Desvantagens
#### 5.3. Aplicação no projeto.
## 6. Facade
#### 6.1. Vantagens
#### 6.2. Desvantagens
#### 6.3. Aplicação no projeto.
## 7. Flyweight
#### 7.1. Vantagens
#### 7.2. Desvantagens
#### 7.3. Aplicação no projeto.
## 8. Proxy
#### 8.1. Vantagens
#### 8.2. Desvantagens
#### 8.3. Aplicação no projeto.
## 9. Conclusão
## 10. Referências

[1] - GAMMA, Erich; HELM, Richard; JOHNSON, Ralph; VLISSIDES, John. Design Patterns: Elements of Reusable Object-Oriented Software. Indianapolis: [s. n.], 1994.
[2] - Design Pattern: Django REST Framework. Disponível em: https://davenathanaeld.medium.com/design-pattern-django-rest-framework-1e8c17946bce. Acesso em 4 abr. 2021.
[3] - Bridge. Disponível em: https://refactoring.guru/pt-br/design-patterns/bridge. Acesso em 05/04/2021.

## 11. Versionamento.

|Data|Nome|Detalhes|Versão|
|---|----|---|---|
|04/01/2021| João Pedro Carvalho| Adicionando adapter e o documento |0.1|