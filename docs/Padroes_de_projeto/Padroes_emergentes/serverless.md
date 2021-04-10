## Padrões de projetos emergentes - Serverless

Não acredito que serverless seja um "padrão de arquitetura emergente" no sentido que esta issue pede, mas é, com certeza, um padrão emergente que poderíamos usar para aprender e para diminuir qualquer possível custo de hospedagem.  

Poderíamos usar um framework como o [serverless](https://www.serverless.com/) para implementar diversas [funções lambdas](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) sem fazer nenhuma manutenção de instancias. Aqui temos um vídeo comentando sobre alguns [padrões de arquitetura voltados ao serverless](https://youtu.be/TuZZIGSbFfQ). 

O serverless funciona da seguinte forma: ao invés de levantar um servidor monolito, contendo toda as regras de negócios, sistemas, subssistemas e outros, é possível usar um serviço como os lambdas da amazon que funcionam dentro de um servidor coletivo. Quando algum usuário faz alguma request ao endpoint da função, o que é rodado é uma função em determinada linguagem para atender aquela request. Essa função poderá chamar outros módulos e métodos afim de gerar o resultado final para o usuário. A persistência de dados vem de bases de dados como DynamoDB, GraphQL, PostgresQL, MongoDB entre outros, todos serviços remotos, configuráveis e escaláveis.

Sobre a vantagens, podemos citar: em questão de funcionalidade, lambdas são capazes de implementar exatamente o mesmo que alguma API monolito conseguiria em contextos tradicionais. Os custos de operação são drásticamente reduzidos, bem como custos relacionados ao preço de processamento de dados (o que permite fazer mais features pesados mais rápido). Além disso, por segregar em seu próprio ambiente todos os serviços, você pode ter um endpoint GET rodando flask, o POST do mesmo recurso rodando node e o PUT rodando ruby sem que nenhuma atrapalhe o outro. A vantagem disso é que separa os trabalho e os problemas, o que permite que cada time trabalhe separado como é no caso dos microsserviços.

Sobre as desvantagens: o custo disso é criar código *from scratch* serverless representa um aumento de tempo de desenvolvimento; é uma tecnologia nova que, senão utilizada com profissionalismo, pode gerar diversos problemas de custos ainda mais altos ou problemas com segurança devido ao mal uso; Gera uma dependência em atores externos para levantar o serviço, como a Amazon, Google ou Microsoft; requer um conhecimento elevado para ser usado de forma apropriada; não existem frameworks bons quanto os de servidores monolito para se trabalhar com serverless ainda.

No geral, serverless está aqui para ficar bem como todos os serviços de cloud. Esta nova forma de se fazer deploys está ficando cada vez mais popular e o futuro da área, possivelmente, será como a eletricidade: você pluga a energia na tomada e, exceto em casos de falha geral no sistema, você tem sua eletricidade. A interface é simples, rápida e barata, e você paga pelo quanto você usou no final do mês.

Embora o tópico seja fora do escopo da matéria (ou do escopo de qualquer matéria que não seja focada nisso) é uma arquitetura interessante e que está vindo a ser usada cada vez mais com o fim de cortar custos e facilitar implementação de microsserviços.

## Histórico de Versão

| Data | Nome | Detalhe | Versão |
| - | - | - | - |
| 24/03/2021 | Renato Britto Araujo | Cria arquivo `serverless.md` | 1.0 |