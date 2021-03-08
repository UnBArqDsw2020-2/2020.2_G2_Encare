# Diagrama de Atividades

O diagrama de atividades é um diagrama de comportamento UML que mostra o fluxo de controle ou fluxo de objetos com ênfase na sequência e nas condições do fluxo. Além disso, diagramas de atividade ajudam a unir as pessoas das áreas de negócios e de desenvolvimento de uma organização para entender o mesmo processo e comportamento.

Diagramas de atividade oferecem uma série de benefícios para os usuários. Considere criar um diagrama de atividade para:

- Demonstrar a lógica de um algoritmo;
- Descrever as etapas realizadas em um caso de uso UML;
- Ilustrar um processo de negócio ou fluxo de trabalho entre usuários e o sistema;
- Simplificar e melhorar qualquer processo ao esclarecer casos de uso complicados;
- Modelar elementos de arquitetura de software, como método, função e operação.

A partir do que foi definido como escopo do projeto e reuniões com os membros da equipe, chemagos nos seguintes diagramas de atividades:

- Geral: representa as atividades da aplicação de um ponto de vista mais amplo.
- Filtrar: representa as atividades referentes a funcionalidade "filtrar estabelecimentos".

----
## Geral
Esse diagrama busca demonstrar o fluxo principal das atividades do usuário em interação com a aplicação. No fluxo pricipal temos a ação de decisão, onde o usuário pode escolher buscar no Feed de imagens por uma ideia nova ou executar uma busca completa (busca avançada), podendo assim rastrear exatamente o procedimento de estética desejado. A tarefa é finalizada após a visualização do estabelecimento e suas informações principais, onde o usuário decide por finalizar a busca ou retornar à escolha de filtros.

<p align="center">
    <img src="./imagens/diagrama_geral.png">
</p>

## Filtrar Estabelecimentos
No filtro de estabelecimentos, temos aqui representada no diagrama uma visão ampliada da tarefa. Nesse caso mais específico, as ações são referentes às consequências de cada decisão de busca feita pelo usuário. A tarefa é finalizada quando as opções de filtro desejadas são selecionadas e o usuário clica no botão de "executar ação", no caso "Filtrar".

<p align="center">
    <img src="./imagens/diagrama_atividades_filtrar.png">
</p>

----
## Referências

- Activity Diagrams. uml-diagrams.org. Disponível em: <https://www.uml-diagrams.org/activity-diagrams.html>. Acesso em: 06 de março de 2021.

- O que é diagrama de atividades UML ?. Lucidchart. Disponível em: <https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-atividades-uml>. Acesso em: 06 de março de 2021.

## Histórico de versão

|    Data    |              Nome              |               Detalhe                         | Versão |
|------------|--------------------------------|-----------------------------------------------|--------|
| 06/03/2021 | Gustavo Nogueira & Hugo Aragão | Adição da estrutura da página                 |   0.1  |
| 06/03/2021 | Gustavo Nogueira & Hugo Aragão | Adição do diagrama filtrar estabelecimento    |   0.2  |
| 06/03/2021 | Gustavo Nogueira & Hugo Aragão | Adição do diagrama Geral                      |   0.3  |
| 06/03/2021 | Gustavo Nogueira & Hugo Aragão | Descrição dos diagramas e padronização do doc |   0.4  |