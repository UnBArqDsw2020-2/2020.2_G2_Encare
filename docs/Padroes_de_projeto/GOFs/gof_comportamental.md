# Padrões de projeto GOFs Comportamentais
## 1. Introdução
Os padrões comportamentais são voltados aos algoritmos e a designação de responsabilidades entre objetos.  

Os padrões comportamentais de classes utilizam a herança para distribuir o comportamento entre classes, e os padrões de comportamento de objeto utilizam a composição de objetos em contrapartida a herança. Alguns descrevem como grupos de objetos cooperam para a execução de uma tarefa que não poderia ser executada por um objeto sozinho.

## 2. Chain of Responsibility  
O Chain of Responsibility é um padrão de projeto comportamental que permite que você passe pedidos por uma corrente de handlers. Ao receber um pedido, cada handler decide se processa o pedido ou o passa adiante para o próximo handler na corrente.  

O Chain of Responsibility é aplicado quando é esperado que o programa processe diferentes tipos de pedidos em várias maneiras, mas os exatos tipos de pedidos e suas sequências são desconhecidos de antemão.

## Estrutura
1. Handler - declara a interface comum a todos os handlers concretos. Ele geralmente contém apenas um único método para lidar com pedidos, mas algumas vezes ele pode conter outro método para configurar o próximo handler da corrente.
2. Handler Base - é uma classe opcional onde você pode colocar o código padrão que é comum a todas as classes handler.
3. Handlers Concretos - contém o código real para processar pedidos. Ao receber um pedido, cada handler deve decidir se processa ele e, adicionalmente, se passa ele adiante na corrente. Os handlers são geralmente auto contidos e imutáveis, aceitando todos os dados necessários apenas uma vez através do construtor.
4. Client - pode compor correntes apenas uma vez ou compô-las dinamicamente, dependendo da lógica da aplicação.

### 2.1 Vantagens
-  Você pode controlar a ordem de tratamento dos pedidos.
-  Princípio de responsabilidade única. Você pode desacoplar classes que invocam operações de classes que realizam operações.
-  Princípio aberto/fechado. Você pode introduzir novos handlers na aplicação sem quebrar o código cliente existente.
### 2.2 Desvantagens
- Alguns pedidos podem acabar sem tratamento.

### 2.3 Aplicação no Projeto

- - -

## 3. Command

### 3.1 Vantagens

### 3.2 Desvantagens

### 3.3 Aplicação no Projeto

- - -

## 4. Iterator

### 4.1 Vantagens

### 4.2 Desvantagens

### 4.3 Aplicação no Projeto

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