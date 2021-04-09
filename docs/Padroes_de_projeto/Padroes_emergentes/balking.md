# Balking design pattern

## Descrição: 

O padrão de projeto balking executa uma ação sobre um objeto apenas quando esse se encontra em um estado específico. Por exemplo, um arquivo em zip pode ser usado somente se estiver aberto, caso ele não esteja aberto e o software deverá fazer um "balk" com a request.

Em outras palavras, esse padrão de projeto é usado para rejeitar uma ação quando um estado ou uma condição não é satisfeita.

## Uso:

* É muito vantajoso quando se trabalha com threads ou multiplos processos acessando um mesmo objeto ou um mesmo local de memória. 
* Quando o objeto a ser acessado precisa de um estado específico de projeto. 

## Implementação:

Aqui está uma implementação simples, mas que consegue mostrar em nível de código como o padrão de projeto baking se comporta. basicamente tenta realizar a ação e caso a condição de uso seja realizada a ação é permitida, caso contrário ocorre o *balking*. 

~~~python
class Exemple:
    def action():
        if working:
            return
        working = true
    
    def complete_action():
        working = false
~~~

## Referências:
[1] - https://en.wikipedia.org/wiki/Software_design_pattern Acesso em 29/03/2021, as 22:35
[2] - https://social.technet.microsoft.com/wiki/contents/articles/13235.balking-design-pattern.aspx Acesso em 29/03/2021

## Versionamento:

|Data|Nome|Detalhe|Versão|
|---|---|---|---|
|29/03/2021|João Pedro Carvalho|Adicionando Balking design pattern|1.0|