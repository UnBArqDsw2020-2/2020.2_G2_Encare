# GOFs Estruturais
## 1. Introdução

Seguindo com os padrões de projeto GOFs temos os estruturais. Esses padrões focam em como classes e objetos se compõem para formar estruturas complexas. 

Sendo assim vamos apresentar os principais padrões, suas vantagens e desvantagens e como eles podem ou não ser aplicados no projeto.

#### 1.1. Siglas e acrônimos:

|Termo|Representação|
|GOF| Gang of Four (em referência aos 4 autores do livro em [1])|
|SRP| Single Responsibility Principle|
|OCP| Open Close Principle|
|DRF|Django REST Framework|

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

## 3. Bridge
#### 3.1. Vantagens
#### 3.2. Desvantagens
#### 3.3. Aplicação no projeto.
## 4. Composite
#### 4.1. Vantagens
#### 4.2. Desvantagens
#### 4.3. Aplicação no projeto.

## 5. Decorator

Decorators se tratam de classes que permitem a adição de funcionalidade sob
uma outra classe base em tempo de execução. Isto é feito a partir da composição 
de objetos do mesmo tipo ao invés da criação de uma cadeia de heranças e uma série
de estruturas condicionais. Este padrão permite que novas 
responsabilidades sejam atribuídas sem, necessariamente, atribuí-las ao objeto pesado.

Metaforicamente, decorators atribuem uma lista de responsabilidades dinâmicamente para
a classe base alvo.

#### 5.1. Vantagens

- Permite a adição e remoção de funcionalidades em tempo de execução.
- Evita heranças quando não existe uma grande necessidade para herança. 
- É possível separar o estado interno de cada uma das funcionalidades, cada qual com seu próprio conjunto de regras e propriedades, sem que elas interfiram umas nas outras, sem alongar a classe original e sem herança.

#### 5.2. Desvantagens

- É possível argumentar que, em certos contextos, decorators apresentam problemas semelhantes aos causados por herança múltipla - [problema do diamante](https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem). Neste sentido, se usados sem cuidado, podem causar uma refatoração geral das funcionalidades envolvidas.
- Caso muitas funcionalidades sejam adicionadas por meio de decorators, existe o risco de interferências entre si. Pelo fato de decorators separarem funcionalidades, fica mais difícil de depurar qual é a interação de dois ou mais decorators que causam o problema. Neste contexto, classes herdadadas seriam mais fáceis de serem consertadas.

#### 5.3. Aplicação no projeto.

Embora a arquitetura do projeto Encare não seja complexa o suficiente para se
considerar a necessidade de adicionar um decotarator no seu *stricto senso*, 
seu uso poderia ser feito considerando em um contexto onde cada estabelecimento
tenha um comportamento diferente quanto ao seu tipo:

```python
class Estabelecimento: ...

class BarbeariaDecorator(Estabelecimento: ...
class CabeleireiroDecorator(Estabelecimento): ...

def estabelecimento_factory(args):
    """
    Cria um novo estabelecimento a partir de keywords
    """

    estabelecimento = Estabelecimento()
    if 'cabeleireiro' in args:
        estabelecimento = CabeleireiroDecorator(estabelecimento)
    if 'barbearia' in args:
        estabelecimento = BarbeariaDecorator(estabelecimento)

    return estabelecimento
```

O conceito de decorators se provou tão útil que foi abstraído para mais
contextos do que apenas o que foi citado. Por exemplo, o feature da linguagem 
python chamado de "decorator" foi inspirado na dinamicidade que o design
pattern decorator provê. Um decorator do python **não** é um padrão de projeto,
mas foi inspirado no conceito. Este feature da linguagem pode vir a ser usado
no Backend do projeto, 

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

## 11. Versionamento.

|Data|Nome|Detalhes|Versão|
|---|----|---|---|