# Backlog do produto
## Introdução:
### Abreviaçãoes e acrônimos:

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

## Níveis:
### User Stories:
### Requisitos:
### Tarefas:

|  Backlog    |                   01           |
|-------------|--------------------------------|  
|**Tarefa**|Entrar em contato com estabelecimentos| 
|**Descrição**| Entrar em contato (por meio de redes sociais preferencialmente) com estabelecimentos a fim de obter autorização e as informações necessárias para cadastrá-los no sistema|  

|  Backlog    |                   02           |
|-------------|--------------------------------|  
|**Tarefa**|Cadastrar serviços| 
|**Descrição**| Fazer o cadastro de serviços gerais para que possam ser reaproveitados no cadastro dos estabelecimentos|  

|  Backlog    |                   03           |
|-------------|--------------------------------|  
|**Tarefa**|Implementar um filtro de busca| 
|**Descrição**| Pensar e implementar a melhor maneira para se realizar a busca|  

|  Backlog    |                   04           |
|-------------|--------------------------------|  
|**Tarefa**|Elaborar um termo te poítica de privacidade| 
|**Descrição**| Para seguir os padrões da Lei Geral de Proteção de Dados Pessoais (LGPD), é importante criar esta política para deixar claro ao usuário e aos estabelecimentos o que faremos com seus dados. Em especial ao usuário, já que será requisitado a sua localização|  

|  Backlog    |                   05           |
|-------------|--------------------------------|  
|**Tarefa**|Ter acesso à localização do usuário| 
|**Descrição**| Solicitar acesso à localização do usuário, além de deixar claro as intenções da solicitação|  

|  Backlog    |                   06           |
|-------------|--------------------------------|  
|**Tarefa**|Definir a melhor opção para o mapa| 
|**Descrição**| Verificar se utilizar a api do google maps é viável, pois ela não é gratuita. É interessante buscar novas apis, apesar da do goole ser mais completa|  

|  Backlog    |                   07           |
|-------------|--------------------------------|  
|**Tarefa**|Planejar e elaborar o backend| 
|**Descrição**| Definir as tecnologias e o padrão a ser usado para a construção do backend|  

|  Backlog    |                   08           |
|-------------|--------------------------------| 
|**Tarefa**|Definir, modelar e implementar o banco de dados| 
|**Descrição**| Definir qual será o banco de dados utilizado, assim como realizar sua modelagem e implementação |  

|  Backlog    |                   09           |
|-------------|--------------------------------|
|**Tarefa**|Integrar o backend ao banco de dados| 
|**Descrição**| Realizar a integração do backend com o banco de dados, permitindo realizar as consultas, além de criar permissões para evitar problemas |  

|  Backlog    |                   10           |
|-------------|--------------------------------|  
|**Tarefa**|Disponibilizar uma API| 
|**Descrição**| Após a integração entre o backend e banco de dados, disponiblizar uma api para ser consumida pelo frontend |  

|  Backlog    |                   11           |
|-------------|--------------------------------| 
|**Tarefa**|Definir o guia de estilo| 
|**Descrição**| Definir o guia de estilo da aplicação para a criação da interface |  

|  Backlog    |                   12           |
|-------------|--------------------------------| 
|**Tarefa**|Elaborar as interfaces da aplicação| 
|**Descrição**| Criar as interfaces do sistema, seguindo os padrões estabelecidos no guia de estilo |  

|  Backlog    |                   13          |
|-------------|-------------------------------| 
|**Tarefa**|Implementar as interfaces| 
|**Descrição**| Implementar o frontend conforme planejado |  

|  Backlog    |                   14          |
|-------------|-------------------------------| 
|**Tarefa**|Integrar backend com frontend| 
|**Descrição**| Essa integração poderá ser feita durante ou após a implementação do frontend | 

|  Backlog    |                   15          |
|-------------|-------------------------------| 
|**Tarefa**|Tornar o site responsivo| 
|**Descrição**| Caso seja possível, tornar o site mais responsivo possível, a fim de não limitar o uso para usuários Web |  
## Tabela do backlog

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
        <td>----</td>
    </tr>
    <tr>
        <td>Requisito</td>
        <td>RF01</td>
        <td>O sistema deverá ter um feed de serviços</td>
        <td>----</td>
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
</table>

## Versionamento:
| Data | Nome | Descrição | Versão |
|------|------|-----------|--------|
| 01/03/2020 | João Pedro Silva de Carvalho | Documentando Brainstorm | 0.1 |
| 01/03/2020 | Nícalo Ribeiro | Complementando a documentação | 0.2 |
| 02/03/2020 | Nícalo Ribeiro | Adição de tarefas para o backlog | 0.3 |