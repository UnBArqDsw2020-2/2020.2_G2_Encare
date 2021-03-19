# Priorização e Backlog do Produto

## 1. Introdução:

Este documento contém a priorização dos documentos elicitados e, a partir deles, a criação do backlog do produto com base na prioridade dos requisitos. Além disso, dividimos em 3 níveis de elicitação: User stories, requisitos e tarefas, que serão explicados individualmente. Esse documento será a base para todo desenvolvimento, indicando qual a ordem adequada para o desenvolvimento da aplicação.

### 1.2. Abreviaçãoes e acrônimos:

<table>
    <tr>
        <th>Abreviação</th>
        <th>Significado</th>
    </tr>
    <tr>
        <td>RF</td>
        <td>Requisito funcional</td>
    </tr>
    <tr>
        <td>RNF</td>
        <td>Requisito não funcional</td>
    </tr>
    <tr>
        <td>US</td>
        <td>User storie</td>
    </tr> 
    <tr>
        <td>T</td>
        <td>Tarefa</td>
    </tr>
</table>

## 2. Níveis:

Para a criação do backlog do produto, optamos por dividi-lo em 3 níveis diferentes visando uma melhor compreensão e análise. Em nosso primeiro momento, elicitamos os **requisitos** e, a partir deles, vamos agrupar em **User stories**, para dar uma visão do usuário acerca dos requisitos, e em **tarefas** menores, para devida atribuição em issues.

### 2.1. User Stories:

Segundo [1](https://k21.global/tudo-sobre/agilidade/user-stories/o-que-e-user-story#:~:text=User%20Story%20ou%20%E2%80%9Chist%C3%B3ria%20de,ponto%20de%20vista%20desse%20usu%C3%A1rio.) , User story é uma descrição das necessidades do usuário sobre um ponto de vista do usuário, sendo esse um dos seus principais princípios: representar integralmente o produto sobre o ponto de vista do usuário.

### 2.2. Requisitos:

O site [DevMedia](https://www.devmedia.com.br/introducao-a-requisitos-de-software/29580) tem a seguinte definição para requisitos: __"Requisitos são, além de funções, objetivos, propriedades, restrições que o sistema deve possuir para satisfazer contratos, padrões ou especificações de acordo com o(s) usuário(s). De forma mais geral um requisito é uma condição necessária para satisfazer um objetivo."__ [2]

Como a user story é uma descrição baseada na visão do usuário e vários requisitos podem fazer parte da mesma user story, os requisitos serão abordados nesse documento como uma subdivisão das US's.

Dentro de requisitos, temos duas principais classificações:

#### 2.2.1. Requisitos funcionais:

Se refere a o que o sistema faz, como funções e informações [2]. 

#### 2.2.2. Requisitos não funcionais:

Se refere a como o sistema faz, geralmente atribuído a métricas de qualidade, como usabilidade e confiabilidade[2]. 

### 2.3. Tarefas:

É um meio de "quebrar" tanto os requisitos quanto as Histórias de usuário de forma que seja de tamanho pequeno e que tenha um escopo bem definido, sendo essas as tarefas que serão realizadas pela equipe.

## 3. Priorização dos requisitos por meio do MoSCoW 

Esta técnica consiste em dividir os requisitos em quatro níveis de prioridade definidos de acordo com as letras que compõem o MoSCoW, sendo eles:  

* **Must**: Nesta categoria são atribuídos os itens que devem necessariamente ser realizados. São considerados obrigatórios, vitais, essenciais e inegociáveis;

* **Should**: Nesta categoria estão os itens necessários, importantes e valorosos porém não obrigatórios e negociáveis. São itens de segunda prioridade que podem ser realizados num segundo momento;

* **Could**: Nesta categoria estão inseridos os itens desejados, mas com menor impacto ou menor valor para o objetivo estratégico. São itens de terceira prioridade que não apresentam problemas caso não sejam realizados;

* **Would**: São os itens de menor prioridade. Podem ser reconsiderados no futuro, mas não ocuparão os recursos da organização no momento atual.

## 4. Product Backlog:

|Identificador|Descrição|Prioridade|
|-------------|---------|----------|
|US01| Eu como usuário desejo encontrar um estabelecimento com o procedimento estético que eu queira | **Must** |  
|RF01| Criar um feed de serviços | **Must** |
|T01| Criar página para apresentação dos serviços | **Must**|
|T02| Desenvolver endpoint para consumo dos dados dos serviços | **Must**|
|T03| Desenvolver estabelecimentos no backend | **Must** |
|RF02| Criar um feed de estabelecimentos | **Would** |
|T03| Criar página para apresentação dos estabelecimentos | **Would**|
|T04| Consumir lista de estabelecimentos no backend | **Would** |
|RF04| O usuário deverá ter interação no mapa | **Could** |
|T05| Integrar mapa que o usuário possa interagir | **Could** |
|RF05| Identificação dos estabelecimentos no mapa | **Could** |
|T06| Alimentar o mapa com os dados dos estabelecimentos | **Could** |
|RF06| Filtrar estabelecimentos por distância | **Must** |
|T07| Criar endpoint para cálculo das distâncias | **Must** |
|T08| Criar componente para aplicação do filtro no frontend | **Must** |
|T09| Criar endpoint para fornecimento dos serviços filtrados| **Must** |
|RF07| Filtrar estabelecimentos por serviço | **Must** |
|T10| Criar componente para aplicação do filtro no frontend | **Must** |
|T11| Criar endpoint para fornecimento dos serviços filtrados| **Must** |
|RF08| Filtrar estabelecimento por nome | **Must** |
|T12| Criar componente para aplicação do filtro no frontend | **Must** |
|T13| Criar endpoint para fornecimento dos serviços filtrados| **Must** |
|RF09| Mostar no mapa os estabelecimentos filtrados | **Could** |
|T14| Apresentar os dados filtrados no mapa | **Could** |
|RF10| Mostar no feed os estabelecimentos filtrados | **Must** | 
|T15| Mostrar no frontend o resultado dos filtros | **Must** |
|RF11| Calcular a distância até o estabelecimento desejado | **Must** |
|T16| Criar endpoint que retorna o valor da distância | **Must**|
|RF12| Cadastrar estabelecimentos pelo admin | **Must** |
|T17| Criar crud de estabelecimentos no backend | **Must** |
|T18| Criar formulario de cadastro no frontend | **Must**|
|T19| Restringir o cadastro a apenas os administradores do sistema | **Must** |
|RNF01| Solicitar acesso à localização do usuário | **Should** | 
|T20| Criar componente para solicitar a localização e guardar a informação | **Should**|
|RNF02| Informar ao usuário como sua localização será utilizada | **Should** |
|T21| Criar texto explicando como será usada | **Should**|
|T22| Apresentar o texto para o usuário | **Should** |
|US02| Eu como usuário desejo acessar as informações dos estabelecimentos | **Must** |
|RF03| Fornecer a localização do estabelecimento no mapa (externo à aplicação) | **Must** |
|T23| Preencher a aplicação com os dados dos estabelecimentos obtidos| **Must** |
|RF13| Recuperar as informações dos estabelecimentos| **Must** | 
|T24| Consumir as informações específicas do estabelecimento no backend | **Must** |
|T25| Mostrar os dados no front | **Must** |
|RF14| Recuperar fotos dos estabelecimentos | **Must** | 
|T26| Criar componente para exibir as fotos dos serviços no front| **Must** |
|RF15| Possuir um perfil para o estabelecimento| **Must** | 
|T27| Criar página de perfil no front | **Must**|
|RF16| Exibir no perfil do estabelecimento suas informações básicas | **Must** |
|T28| Exibir os dados recuperados no front | **Must**|
|RF17| Exibir no perfil do estabeleceimento os serviços que ele oferece| **Must** |
|T29| Exibir os serviços oferecidos na página de perfil | **Must** |
|RF18| Exibir no perfil do estabelecimento as fotos de seus serviços |  **Must** |
|T30| Exibir as imagens do serviço no componente | **Must** |
|US03| Eu como usuário desejo que o sistema atenda critérios de usabilidade e portabilidade | **Should** |
|RNF03| Avaliar usabilidade por meio do tempo necessário para realização das funcionalidades |  **Should** | 
|T31| Elaborar teste para medir o tempo de utilização | **Should**|
|T32| Executar teste | **Should** |
|RNF04| Plataforma responsiva que possa ser usada em mobile e desktop |  **Should** | 
|T33| Elaborar método de avaliação de portabilidade| **Should**|
|T34| Executar método de avaliação selecionando | **Should** |


Apesar de termos um escopo que aparenta ser pequeno, muitos requisitos são vitais ao sistema para que ele seja concluído.

## 5. Referências:

- [1] - https://k21.global/tudo-sobre/agilidade/user-stories/o-que-e-user-story#:~:text=User%20Story%20ou%20%E2%80%9Chist%C3%B3ria%20de,ponto%20de%20vista%20desse%20usu%C3%A1rio.  
- [2] - https://www.devmedia.com.br/introducao-a-requisitos-de-software/29580  
- [3] - https://www.pluralsight.com/guides/break-down-agile-user-stories-into-tasks-and-estimate-level-of-effort  

## 6. Versionamento:
| Data | Nome | Descrição | Versão |
|------|------|-----------|--------|
| 01/03/2021 | João Pedro Silva de Carvalho | Documentando Brainstorm | 0.1 |
| 01/03/2021 | Nícalo Ribeiro | Complementando a documentação | 0.2 |
| 02/03/2021 | Nícalo Ribeiro | Adição de tarefas para o backlog | 0.3 |
| 02/03/2021 | Nícalo Ribeiro | Ajustes na tabela de tarefas e adição de novas | 0.4 |
| 07/03/2021 | Nícalo Ribeiro | Refatoração do documento; Adição da priorização e tarefas do backlog | 0.5 |
| 07/03/2021 | João Pedro Silva de Carvalho | Adicionando definições de termos | 0.6 |
| 08/03/2021 | João Pedro Silva de Carvalho | Dividindo requisitos em tarefas | 0.7 |
| 08/03/2021 | Nícalo Ribeiro | Revisão e ajustes | 0.8 |

