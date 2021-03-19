# Priorização e Backlog do produto

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

### 4.1 Tabela User Stories
<table>
	<thead>
		<tr>
			<th>US</th>
			<th>Descrição</th>
			<th>Prioridade</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>US01</td>
			<td>Eu como usuário desejo encontrar um estabelecimento com o procedimento estético que eu queira</td>
			<td>Must</td>
		</tr>
		<tr>
			<td>US02</td>
			<td>Eu como usuário desejo ver as informações do estabelecimento.</td>
			<td>Must</td>
		</tr>
		<tr>
			<td>US03</td>
			<td>Eu como usuário desejo que o sistema obedeça critérios de portabilidade e usabilidade</td>
			<td>Should</td>
		</tr>
	</tbody>
</table>

### 4.2 Tabela Requisitos
<table>
	<thead>
		<tr>
			<th>Requisito</th>
			<th>Descrição</th>
            <th>Prioridade</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>RF01</td>
			<td>Criar feed de serviços.</td>
			<td>Must</td>
		</tr>
		<tr>
			<td>RF02</td>
			<td>Criar um feed de estabelecimentos.</td>
			<td>Must</td>
		</tr>
		<tr>
			<td>RF03</td>
			<td>Criar um mapa interativo.</td>
			<td>Should</td>
		</tr>
		<tr>
			<td>RF04</td>
			<td>Criar um filtro para o feed de serviços.</td>
			<td>Must</td>
		</tr>
		<tr>
			<td>RF05</td>
			<td>O sistema deverá ser capaz de calcular a distância entre o usuário e um estabelecimento.</td>
			<td>Must</td>
		</tr>
		<tr>
			<td>RF06</td>
			<td>O sistema deverá permitir que o usuário admin cadastre os estabelecimentos.</td>
            <td>Must</td>
		</tr>
		<tr>
			<td>RF07</td>
			<td>O sistema deverá ser capaz de coletar a localização do usuário.</td>
            <td>Must</td>
		</tr>
		<tr>
			<td>RF08</td>
			<td>O sistema deverá fornecer um link para que o usuário possa acessar a localização do estabelecimento.</td>
            <td>Must</td>
		</tr>
		<tr>
			<td>RF09</td>
			<td>O sistema deverá ter um perfil do estabelecimento com informações básicas de contato, funcionamento e localização.</td>
            <td>Must</td>
		</tr>
		<tr>
			<td>RF10</td>
			<td>O sistema deverá listar dentro do perfil do estabelecimento, os serviços que ele oferece.</td>
            <td>Must</td>
		</tr>
		<tr>
			<td>RNF01</td>
			<td>Avaliar a usabilidade por meio do tempo necessário para a realização das principais tarefas.</td>
            <td>Should</td>
		</tr>
		<tr>
			<td>RNF02</td>
			<td>O sistema deverá ter portabilidade para uso em mobile e desktop.</td>
            <td>Should</td>
		</tr>
	</tbody>
</table>

### 4.3 Tabela Tarefas
<table>
	<thead>
		<tr>
			<th rowspan="3">US</th>
			<th rowspan="3">Requisito</th>
			<th rowspan="3">Prioridade</th>
			<th>Tarefa</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td rowspan="19">US01</td>
			<td rowspan="4">RF01</td>
			<td rowspan="4">Must</td>
			<td> T01: Criar página de apresentação de serviços no front</td>
		</tr>
		<tr>
			<td>T02: Criar componente que mostre um serviço no feed</td>
		</tr>
		<tr>
			<td>T03: Desenvolver endpoint para consumo dos dados dos serviços</td>
		</tr>
		<tr>
			<td>T04: Desenvolver estabelecimentos no backend</td>
		</tr>
		<tr>
			<td rowspan="2">RF02</td>
			<td rowspan="2">Would</td>
			<td>T05: Criar página para apresentar os estabelecimentos</td>
		</tr>
		<tr>
			<td>T06: Consumir dados dos estabelecimentos no backend</td>
		</tr>
		<tr>
			<td rowspan="5">RF03</td>
			<td rowspan="5">Could</td>
			<td>T07: Integrar um mapa do site</td>
		</tr>
		<tr>
			<td>T08: Permitir interação do usuário com o mapa</td>
		</tr>
		<tr>
			<td>T09: Alimentar o mapa com os dados dos estabelecimentos</td>
		</tr>
		<tr>
			<td>T10: Identificar os estabelecimentos no mapa</td>
		</tr>
		<tr>
			<td>T11: Poder acessar o perfil de um estabelecimento no mapa</td>
		</tr>
		<tr>
			<td rowspan="3">RF04</td>
			<td rowspan="3">Must</td>
			<td>T12: Criar componente para abrigar os filtros</td>
		</tr>
		<tr>
			<td>T13: Criar endpoint que recebe os filtros e retorna os dados equivalentes</td>
		</tr>
		<tr>
			<td>T14: Exibir dados filtrados</td>
		</tr>
		<tr>
			<td rowspan="1">RF05</td>
			<td rowspan="1">Must</td>
			<td>T15: Criar endpoint que receba a localização do usuário e calcule a distância</td>
		</tr>
		<tr>
			<td rowspan="2">RF06</td>
			<td rowspan="2">Must</td>
			<td>T16: Criar um CRUD de estabelecimentos no backend</td>
		</tr>
		<tr>
			<td>T17: Criar uma página para cadastro dos estabelecimentos no front</td>
		</tr>
		<tr>
			<td rowspan="2">RF07</td>
			<td rowspan="2">Must</td>
			<td>T18: Solicitar localização exata</td>
		</tr>
		<tr>
			<td>T19: Conseguir localização aproximada (caso o usuário não forneça a localização)</td>
		</tr>
		<tr>
			<td rowspan="7">US02</td>
			<td rowspan="1">RF08</td>
			<td rowspan="1">Must</td>
			<td>T20: Gerar link do mapa com a localização do estabelecimento</td>
		</tr>
		<tr>
			<td rowspan="3">RF09</td>
			<td rowspan="3">Must</td>
			<td>T21: Criar página de perfil no frontend</td>
		</tr>
		<tr>
			<td>T22: Criar endpoint no backend para consumo desses dados</td>
		</tr>
		<tr>
			<td>T23: Exibir os dados corretamente no frontend</td>
		</tr>
		<tr>
			<td rowspan="3">RF10</td>
			<td rowspan="3">Must</td>
			<td>T24: Consumir a lista de serviços no backend</td>
		</tr>
		<tr>
			<td>T25: Exibir os dados no frontend</td>
		</tr>
		<tr>
			<td>T26: Possibilitar melhor visualização (aproximação) das fotos</td>
		</tr>
		<tr>
			<td rowspan="4">US03</td>
			<td rowspan="2">RNF01</td>
			<td rowspan="2">Should</td>
			<td>T27: Elaborar método de avaliação da usabilidade com relação ao tempo (inspeção, observação, investigação)</td>
		</tr>
		<tr>
			<td>T28: Aplicar método escolhido para a avaliação</td>
		</tr>
		<tr>
			<td rowspan="3">RNF02</td>
			<td rowspan="3">Should</td>
			<td>T29: Elaborar método de avaliação da portabilidade</td>
		</tr>
		<tr>
			<td>T30: Aplicar método escolhido para a avaliação</td>
		</tr>
	</tbody>
</table>

Apesar de termos um escopo que aparenta ser pequeno, muitos requisitos são vitais ao sistema para que ele seja concluído.

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
| 07/03/2021 | João Pedro Silva de Carvalho | Adicionando definições de termos | 0.6 |
| 08/03/2021 | João Pedro Silva de Carvalho | Dividindo requisitos em tarefas | 0.7 |
| 08/03/2021 | Nícalo Ribeiro | Revisão e ajustes | 0.8 |
| 18/03/2021 | João Luis Baraky e João Pedro Silva | Substitui tabela do Backlog para 3 tabelas melhores organizadas e coerentes | 0.9 |
| 18/03/2020 | João Pedro Silva e João Luis Baraky | Adicionando priorização nos requisitos |1.0|
| 19/03/2020 | João Pedro Silva e Gustavo Nogueira | Adicionando revisão do PR |1.1 |

