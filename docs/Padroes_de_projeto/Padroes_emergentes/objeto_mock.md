# Objeto Mock

O *Objeto Mock* é um padrão utilizado para construir objetos protótipos que simulam o comportamento de objetos reais. Sua utilização mais popular é na implementação de *teste unitário*, onde o *mock* é usado na execução de uma parte do sistema afim de contribuir para que sejam gerados os resultados dos testes, podendo eles serem: 

- a velocidade de resposta do banco de dados;
- o desempenho do código no tratamento dos dados;
- a qualidade da entrega do resultado dos dados computados;

Algumas linguagens possuem bibliotecas específicas para auxiliar na criação de *mocks*, principalmente as direcionadas ao desenvolvimento WEB, o que facilita a visualização dos dados no *front-end*. Dentre alguns exemplos temos:

- Java: Easy Mock, Mockito, Jmock;
- Ruby: Mocha, RSpec e Flexmock;
- PHP: SimpleTest, SnapTest e PHPUnit

## Implementação

No exemplo a seguir, supomos que um banco de dados de produção será testado, o mesmo já possui uma quantidade relevante de registros e como consequência a busca se torna um processo lento. No caso atual, a classe *MockOrderRepositoryService* faz o papel de simular os dados do banco.

~~~ c#
public class Order
{
    public int Id { get; set; }

    public string Client { get; set; }

    public double Value { get; set; }
}

public interface IOrderRepositoryService
{
    void Add(Order order);
    Order Find(int id);
}

/// <summary>
/// classe que simula o SGBD
/// </summary>
public class MockOrderRepositoryService : IOrderRepositoryService
{
    private List<Order> orders;

    public MockOrderRepositoryService()
    {
        this.orders = new List<Order>();

        // para os testes é necessário que 
        // exista algum dado no banco
        this.orders.Add(new Order() { Id = 1, Value = 140.50, Client = "Lucas" });
        this.orders.Add(new Order() { Id = 2, Value = 95.40, Client = "Caroline" });
        this.orders.Add(new Order() { Id = 3, Value = 39.99, Client = "Bruna" });
    }

    public void Add(Order order)
    {
        this.orders.Add(order);
    }

    public Order Find(int id)
    {
        if (id == 1)
        {
            // simulando uma falha do SGBD ao pesquisar pelo pedido com ID = 1
            return null;
        }
        return this.orders
            .Where(x => x.Id == id)
            .FirstOrDefault();
    }
}

public class OrderRepository
{
    public IOrderRepositoryService Service { get; set; }

    public OrderRepository(IOrderRepositoryService service)
    {
        this.Service = service;
    }

    public void AddOrder(Order order)
    {
        this.Service.Add(order);
    }

    public Order FindOrder(int id)
    {
        return this.Service.Find(id);
    }
}
// Exemplo do artigo [1]
~~~
## Limitações e Comparações

Um dos cuidados a se ter ao usar *obejtos mock* é justamente na hora de implementar e interpretaros testes unitários, já que o *mock* geralmente é montado na forma ideal dos dados e em quantidades que facilitem a leitura e o processamento de dados. Uma consequência direta é a medição do teste obter um resultado de desempenho falso, já que a quantidade de dados utilizados na versão *mockada* é muito menor que a quantidade encontrada no banco real.

A nível de comparação das ferramentas, temos algumas mais completas como a *Mockito* do Java, por exemplo, que em comparação com a *EasyMock* e a *jMock*, possui mais funcionalidades como:

- injeção de mock;
- mocks declarativos para a classe de teste;
- um único arquivo jar no class path ser suficiente para usar a API.

## Referências

- [1] Site: Wikipedia - Objeto Mock. Disponível em <https://pt.wikipedia.org/wiki/Objeto_mock>. Acesso 07/04/2021

- [2] Freeman, Steve. Growing Object-Oriented Software, Guided By Tests.

- [3] Site: Devmedia - Mocks: Introdução a Automatização de Testes com Mock Object. Disponível em <https://www.devmedia.com.br/mocks-introducao-a-automatizacao-de-testes-com-mock-object/30641>. Acesso 08/04/2021.
## Versionamento

|Autor|Data|Descrição|Versão|
|-----|:--:|:----:|---------|
|Hugo Aragão|08/04/2021| Criação do documento e adição de conceitos | 0.1 |
|Hugo Aragão|08/04/2021| Adição de limitações, comparações e referências | 0.2 |