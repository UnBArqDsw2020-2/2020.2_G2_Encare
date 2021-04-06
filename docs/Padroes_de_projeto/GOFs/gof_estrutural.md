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
|ISP|Interface segregation principle|

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

Composite é um padrão que permite que componha objetos em estruturas de árvores e então trabalhar com essas estruturas como se ela fosse objetos individuais. Esse padrão só faz sentido se a estrutura central pode ser representada como uma árvore. 

Simplificando, a *Composite* pode ser descrita como uma classe que represente toda a estrutura de árvore. Um bom exemplo para ilustrar é quando temos uma compra e a compra tem caixas que podem guardar tanto caixas quanto produtos. Essa situação pode gerar uma árvore com os produtos sendo as folhas e as caixas sendo os demais vértices. Calcular o preço nessa estrutura pode ser uma tarefa árdua e nesse caso o *Composite* se torna bastante vantajoso de ser aplicado no código.

#### 4.1. Vantagens

- Facilidae para criar objetos complexos por composição.
- Facilidade para gerar uma hierarquia de objetos.
- Facilidade de usar polimorfismo e recursão.
- Aplicação do OCP.

#### 4.2. Desvantagens

- Dependendo da estrutura pode quebrar o ISP em estruturas folhas que podem não usar alguns de seus métodos.

#### 4.3. Aplicação no projeto.

Uma possível aplicação é com relação a estrutura englobada pela classe owner, estabeliciment e suas filhas. Essa estrutura se assemelha a uma árvore, entretanto, possui várias funções distintas, sendo assim, aplicar esse padrão nesse caso acima fere o ISP.

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

class BarbeariaDecorator(Estabelecimento): ...
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
no Backend do projeto.

## 6. Facade

Esse padrão promove uma interface unificada para um conjunto de interfaces em um sub sistema. *Facade* define uma interface de maior nível facilitando assim o uso do sistema. 

É importante ressaltar que o objetivo não é o desacoplamento e sim facilitar o uso do sistema por parte do código cliente. Outro ponto importe é com relação a classes que tem muitas responsabilidades; o uso excessivo desse padrão concentrado em poucas clases *Facade* pode quebrar o SRP e também o ISP, pois muitas funções podem torna a classe de propósito geral. Por mais que seja bem simples o seu uso, esse padrão requer um pouco de atenção em sua aplicação.

#### 6.1. Vantagens

- Isola o código complexo do código cliente.
- Facilita o uso do sistema 
- Cria pontos de entrada para camadas da aplicação e serviços de terceiros.

#### 6.2. Desvantagens

- O ISP e o RSP pode ser facilmente quebrados.

#### 6.3. Aplicação no projeto.

É um interessante padrão de simples implementação. O principal caso que poderá ser usada no projeto é para o acesso a APIs de cálculo de distâncias. Outro ponto que pode ser criado, são para os endpoints do backend para consumo do front. 

## 7. Flyweight

Esse padrão de projeto tem como intenção usar compatilhamento para suportar um grande número de objetos de baixa granularidade. Usado quando existem uma grande quantidade de objetos semelhantes e a partir desse ponto é dividido essa classe entre um objeto que é repetido com mais frequência com um que é mais único, podendo assim existir o compartilhamento e melhorando questões de desempenho. 

É um padrão de otimização que visa principalmente economizar memória RAM diminuindo o número de objetos. Deve ser usado somente se a aplicação estiver com alto consumo de RAM.

No livro Design pattern [1], os autores listam uma série de fatores para o uso do *flyweight*:

- A aplicação usa uma grande quantidade de objetos.
- Os custos de armazenamento são altos (memória e tempo de processamento).
- A maioria dos estados dos objetos podem ser compartilhados.
- Muitos objetos podem ser substituidos por poucos objetos compatilhados.
- A aplicaçaõ nãi depende da identidade dos objetos.

#### 7.1. Vantagens

- Pode economizar RAM.

#### 7.2. Desvantagens

- Muito complexo em nível de código.

#### 7.3. Aplicação no projeto.

Esse padrão é usado em uma situação bem específica e possui várias condições que precisam ser atendidas para que seja vantasojo ou mesmo seja possível aplicar no projeto. No caso do projeto Encare, a quantidade de objetos não é grande em nenhum dos casos e não pode ser notado nenhum consumo excessivo de memória nesse estágio do desenvolvimento (modelagem), portanto é inviário o uso desse padrão de projeto.

## 8. Proxy
#### 8.1. Vantagens
#### 8.2. Desvantagens
#### 8.3. Aplicação no projeto.
## 9. Conclusão
## 10. Referências

[1] - GAMMA, Erich; HELM, Richard; JOHNSON, Ralph; VLISSIDES, John. Design Patterns: Elements of Reusable Object-Oriented Software. Indianapolis: [s. n.], 1994.
[2] - Design Pattern: Django REST Framework. Disponível em: https://davenathanaeld.medium.com/design-pattern-django-rest-framework-1e8c17946bce. Acesso em 4 abr. 2021.
[3] - Bridge. Disponível em: https://refactoring.guru/pt-br/design-patterns/bridge. Acesso em 5 abr. 2021.
[4] - Composite. Disponível em: https://refactoring.guru/pt-br/design-patterns/composite. acesso em 5 abr. 2021.

## 11. Versionamento.

|Data|Nome|Detalhes|Versão|
|---|----|---|---|
| 4/4/2021 | João Pedro Carvalho | Adiciona padrão Adapter | 0.1 |
| 4/4/2021 | Renato Britto Araujo | Adiciona padrão Decorator | 0.2 |
| 4/4/2021 | João Pedro Carvalho| Adiciona padrão Bridge | 0.3 |
| 5/4/2021 | João Pedro Carvalho| Adiciona padrão Composite | 0.4 |
| 5/4/2021 | João Pedro Carvalho| Adiciona padrão Facade | 0.5 |
| 6/4/2021 | João Pedro Carvalho| Adiciona padrão Flyweight | 0.6 |
