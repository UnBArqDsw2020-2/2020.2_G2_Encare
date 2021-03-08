# Priorização e Backlog do produto

## 1. Introdução:

Este documento contém a priorização dos documentos elicitados e, a partir deles, a criação do backlog do produto com base na prioridade dos requisitos. Além disso dividimos em 3 níveis de elicitação: User stories, requisitos e tarefas, que serão explicadas individualmente. Esse documento será a base para todo desenvolvimento indicando qual a ordem adequada para o desenvolvimento da aplicação.

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

Para a criação do backlog do produto escolhemos dividir em 3 níveis diferentes, para melhor compreensão e análise. Para o nosso primeiro momento elicitamos os **requisitos** a partir dele vamos agrupar em **User stories** par adar uma visão do usuário em cima dos requisitos e dividir em **tarefas** menores para atribuição em issues.

### 2.1. User Stories:

Segundo [1](https://k21.global/tudo-sobre/agilidade/user-stories/o-que-e-user-story#:~:text=User%20Story%20ou%20%E2%80%9Chist%C3%B3ria%20de,ponto%20de%20vista%20desse%20usu%C3%A1rio.) User story é uma descrição das necessidades do usuário sobre um ponto de vista do usuário e esse é um dos seus principais princípios: representar integralmente o produto sobre o ponto de vista do usuário.

### 2.2. Requisitos:

O site [DevMedia](https://www.devmedia.com.br/introducao-a-requisitos-de-software/29580) tem a seguinte definição para requisitos: __"Requisitos são, além de funções, objetivos, propriedades, restrições que o sistema deve possuir para satisfazer contratos, padrões ou especificações de acordo com o(s) usuário(s). De forma mais geral um requisito é uma condição necessária para satisfazer um objetivo."__ [2]

Como a user story é uma descrição baseada na visão do usuário, vários requisitos podem fazer parte de apenas uma user story, então será utilidada nesse documento como uma subdivisão das US's.

Dentro de requisitos temos duas principais classificações:

#### 2.2.1. Requisitos funcionais:

Se refere a o que o sistema faz como funções e informações [2]. 

#### 2.2.2. Requisitos não funcionais:

Se refere a como o sistema faz, geralmente atribuído a métricas de qualidade, como usabilidade e confiabilidade[2]. 

### 2.3. Tarefas:

É um meio de "quebrar" tantos os requisitos, como as Histórias de usuário, de forma que seja de tamanho pequeno e que tenha um escopo bem definido, sendo as tarefas que serão realizadas pela equipe.

## 3. Priorização dos requisitos por meio do MoSCoW 

Esta técnica consiste em dividir os requisitos em quatro níveis de prioridade definidos de acordo com as letras que compõem o MoSCoW, sendo eles:  

* **Must**: Nesta categoria são atribuídos os itens que devem necessariamente ser realizados. São considerados obrigatórios, vitais, essenciais e inegociáveis;

* **Should**: Nesta categoria estão os itens necessários, importantes e valorosos; porém não obrigatórios e negociáveis. São itens de segunda prioridade que podem ser realizados num segundo momento;

* **Could**: Nesta categoria estão inseridos os itens desejados, mas com menor impacto ou menor valor para o objetivo estratégico. São itens de terceira prioridade que não apresentam problemas caso não sejam realizados;

* **Would**: São os itens de menor prioridade. Podem ser reconsiderados no futuro, mas não ocuparão os recursos da organização no momento atual.

|Identificador|Descrição|Prioridade|
|-------------|---------|----------|
|US01| Eu como usuário desejo encontrar um estabelecimento com o procedimento estético que eu queira | -- |  
|RF01| Feed de serviços | **Must** |
|RF02| Feed de estabelecimentos | **Must** |
|RF03| Fornecer a visualização de um mapa (interno ou externo) | **Must** |
|RF04| Interação no mapa | **Could** |
|RF05| Identificação dos estabelecimentos no mapa | **Should** |
|RF06| Filtrar estabelecimentos por distância | **Should** |
|RF07| Filtrar estabelecimentos por serviço | **Must** |
|RF08| Filtrar estabelecimento por nome | **Should** |
|RF09| Mostar no mapa os estabelecimentos filtrados | **Could** |
|RF10| Mostar no feed os estabelecimentos filtrados | **Must** |
|RF11| Calcular a distância até o estabelecimento desejado | **Would** |
|RF12| Cadastrar estabelecimentos | **Must** |
|RF13| Recuperar as informações dos estabelecimentos| **Must** |
|RF14| Recuperar fotos do estabelecimento no Instagram| **Must** |
|RF15| Possuir um perfil para o estabelecimento| **Must** | 
|RF16| Exibir no perfil do estabelecimento suas informações básicas (nome, endereço, contato e horário de funcionamento) | **Must** |
|RF17| Exibir no perfil do estabeleceimento os serviços que ele oferece| **Must** |
|RF18| Exibir no perfil do estabelecimento as fotos de seus serviços |  **Must** |
|RNF01| Solicitar acesso à localização do usuário | **Should** |
|RBF02| Informar ao usuário como sua localização será utilizada | **Should** |
|RNF03| Uso do sistema intuitivo |  **Should** |
|RNF04| Plataforma responsiva |  **Could** |

Resumo :  
|Prioridade| Quantidade |
|----------|------------|
|Must|12|
|Should|6|
|Could|3|
|Would|1|

Apesar de termos um escopo que aparenta ser pequeno, muitos requisitos são vitais ao sistema para que ele seja concluído.

## 4. Product Backlog:

Após analisar os requisitos e suas prioridades, foram definidas as seguintes atividades para que os requisitos essenciais sejam atendidos e entregues.  
Eventualmente, novas tarefas podem ser criadas.

|Tarefa|Descrição|
|------|---------|  
|Criar feed de serviços| Elaborar como será o feed e como as informações estarão dispostas|
|Entrar em contato com estabelecimentos|Entrar em contato (por meio de redes sociais preferencialmente) com estabelecimentos a fim de obter autorização e as informações necessárias para cadastrá-los no sistema|  
|Cadastrar os serviços | Pode ser considerada uma sub-tarefa do feed de serviços. É necessário cadastrar serviços gerais que serão atribuídos aos estabelecimentos|
|Atribuir o serviço ao estabelecimento | Pode ser considerada uma sub-tarefa do feed de serviços. Os serviços devem ser atribuídos aos estabelecimentos que a executam|
|Cadastrar estabelecimentos|Após entrar em contato com o estabelecimento, cadastrá-lo no sistema com base nas informações coletadas|  
|Criar feed de estabelecimentos| Após cadastrar os estabelecimentos, elaborar como será o feed |
|Disponibilizar um mapa| Pensar como será a utilização do mapa : Se será feito dentro do sistema ou se será externo (Abrir no google maps p.ex.)|
|Implementar um filtro de busca|Pensar e implementar a melhor maneira para se realizar a busca que, inicalmente, será por serviço|  
|Criar componentes para visualizar os estabelecimentos| É importante a criação de componentes que exibam os detalhes do estabelecimento selecionado pelo usuário|  
|Caso, utilize a localização do usuário, elaborar um termo de poítica de privacidade|Para seguir os padrões da Lei Geral de Proteção de Dados Pessoais (LGPD), é importante criar esta política para deixar claro ao usuário e aos estabelecimentos o que faremos com seus dados. Em especial ao usuário, já que será requisitado a sua localização|  
|Planejar e elaborar o backend|Definir as tecnologias e o padrão a ser usado para a construção do backend|  
|Definir, modelar e implementar o banco de dados|Definir qual será o banco de dados utilizado, assim como realizar sua modelagem e implementação |  
|Integrar o backend ao banco de dados| Realizar a integração do backend com o banco de dados, permitindo realizar as consultas, além de criar permissões para evitar problemas |  
|Disponibilizar uma API| Após a integração entre o backend e banco de dados, disponiblizar uma api para ser consumida pelo frontend |
|Definir o guia de estilo|Definir o guia de estilo da aplicação para a criação da interface |  
|Elaborar as interfaces da aplicação|Criar as interfaces do sistema, seguindo os padrões estabelecidos no guia de estilo |  
|Implementar as interfaces|Implementar o frontend conforme planejado |  
|Integrar backend com frontend|Essa integração poderá ser feita durante ou após a implementação do frontend | 


<!-- ## Tabela do backlog

<table>
    <tr>
        <th>Nível</th>
        <th>Nome</th>
        <th>Descrição</th>
        <th>Prioridade</th>
    </tr>
    <tr>
        <td>User storie</td>
        <td>US01</td>
        <td>Eu como usuário gostaria de encontrar um estabelecimento que ofereça um serviço de estética que eu busco.</td>
        <td>Must</td>
    </tr>
    <tr>
        <td>Requisito</td>
        <td>RF01</td>
        <td>O sistema deverá ter um feed de serviços</td>
        <td>Must</td>
    </tr>
    <tr>
        <td>Requisito</td>
        <td>RF02</td>
        <td>O sistema deverá ter um filtro dos serviços por: localização (distância) e tipo </td>
        <td>----</td>
    </tr>
    <tr>
        <td>Requisito</td>
        <td>RF03</td>
        <td>O sistema deverá solicitar a localização do usuário</td>
        <td>----</td>
    </tr>
    <tr>
        <td>Requisito</td>
        <td>RNF01</td>
        <td>O sistema deverá ter disponivel em um banco de dados, todos os dados dos estabelecimentos</td>
        <td>----</td>
    </tr>
    <tr>
        <td>Requisito</td>
        <td>RNF02</td>
        <td>O sistema deverá ter uma api para consumir os dados dos estabelecimentos</td>
        <td>----</td>
    </tr>
    <tr>
        <td>User storie</td>
        <td>US02</td>
        <td>Eu como usuário gostaria de poder acessar as informações dos estabelecimentos.</td>
        <td>----</td>
    </tr>
    <tr>
        <td>Requisito</td>
        <td>RF04</td>
        <td>O sistema deverá ter um perfil para o estabelecimento com informações pertinentes</td>
        <td>----</td>
    </tr>
    <tr>
        <td>Requisito</td>
        <td>RF05</td>
        <td>O sistema deverá permitir que o usuário acesse no google maps a localização do estabelecimento.</td>
        <td>----</td>
    </tr>
    <tr>
        <td>Requisito</td>
        <td>RNF03</td>
        <td>O sistema deverá consumir a api do google maps para calculo de distância</td>
        <td>----</td>
    </tr>
    <tr>
        <td>User storie</td>
        <td>US03</td>
        <td>Eu como usuário gostaria de obter feedbacks sobre os estabelecimentos.</td>
        <td>----</td>
    </tr>
    <tr>
        <td>Requisito</td>
        <td>RF06</td>
        <td>O sistema deverá disponibilizar comentários feitos por outros usuários sobre os estabelecimentos.</td>
        <td>----</td>
    </tr>
    <tr>
        <td>Requisito</td>
        <td>RF07</td>
        <td>O sistema deverá permitir visualizar a nota média de avaliação do estabelecimento</td>
        <td>----</td>
    </tr>
    <tr>
        <td>Requisito</td>
        <td>RNF04</td>
        <td>O sistema deverá recuperar do banco de dados os comentários respectivos ao estabelecimento</td>
        <td>----</td>
    </tr>
    <tr>
        <td>Requisito</td>
        <td>RNF05</td>
        <td>O sistema deverá recuperar do banco de dados as notas respectivos ao estabelecimento e calcular uma média</td>
        <td>----</td>
    </tr>
    <tr>
        <td>User storie</td>
        <td>US04</td>
        <td>Eu como usuário gostaria de compartilhar minha experiência no estabelecimento.</td>
        <td>----</td>
    </tr>
    <tr>
        <td>Requisito</td>
        <td>RF08</td>
        <td>O sistema deverá permitir avaliar o estabelecimento com uma nota</td>
        <td>----</td>
    </tr>
    <tr>
        <td>Requisito</td>
        <td>RNF06</td>
        <td>O sistema deverá recuperar do banco de dados as notas respectivos ao estabelecimento e calcular uma média</td>
        <td>----</td>
    </tr>
    <tr>
        <td>User storie</td>
        <td>US05</td>
        <td>Eu como usuário gostaria de ver fotos do estabelecimento e de seus serviços.</td>
        <td>----</td>
    </tr>
    <tr>
        <td>Requisito</td>
        <td>RF09</td>
        <td>O sistema deverá permitir visualizar fotos dos estabelecimentos</td>
        <td>----</td>
    </tr>
    <tr>
        <td>Requisito</td>
        <td>RF10</td>
        <td>O sistema deverá permitir visualizar fotos dos resultados dos serviços oferecidos</td>
        <td>----</td>
    </tr>
    <tr>
        <td>Requisito</td>
        <td>RNF07</td>
        <td>O sistema deverá buscar fotos do estabelecimento no Instagram</td>
        <td>----</td>
    </tr>
</table> -->

## 5. Referências:

[1] - https://k21.global/tudo-sobre/agilidade/user-stories/o-que-e-user-story#:~:text=User%20Story%20ou%20%E2%80%9Chist%C3%B3ria%20de,ponto%20de%20vista%20desse%20usu%C3%A1rio. 
[2] - https://www.devmedia.com.br/introducao-a-requisitos-de-software/29580
[3] - https://www.pluralsight.com/guides/break-down-agile-user-stories-into-tasks-and-estimate-level-of-effort

## 6. Versionamento:
| Data | Nome | Descrição | Versão |
|------|------|-----------|--------|
| 01/03/2021 | João Pedro Silva de Carvalho | Documentando Brainstorm | 0.1 |
| 01/03/2021 | Nícalo Ribeiro | Complementando a documentação | 0.2 |
| 02/03/2021 | Nícalo Ribeiro | Adição de tarefas para o backlog | 0.3 |
| 02/03/2021 | Nícalo Ribeiro | Ajustes na tabela de tarefas e adição de novas | 0.4 |
| 07/03/2021 | Nícalo Ribeiro | Refatoração do documento; Adição da priorização e tarefas do backlog | 0.5 |
| 01/03/2021 | João Pedro Silva de Carvalho | Adicionando definições de termos | 0.6 |
