# Requisitos do produto

## Storytelling  
Storytelling é um termo em inglês. "Story" significa história e "telling", contar. Mais que uma mera narrativa, Storytelling é a arte de contar histórias usando técnicas inspiradas em roteiristas e escritores para transmitir uma mensagem de forma inesquecível.

### Cliente procura novo estilo
Um cliente desejava mudar seu estilo, para isso procurou seu barbeiro de confiança, mas ao chegar ao estabelecimento percebeu que o mesmo estava fechado. O cliente então teve que procurar outro estabelecimento e informou ao barbeiro sua ideia de novo corte de cabelo. Após o procedimento, o cliente se sentiu frustrado, pois o resultado não era nem um pouco parecido com o pedido. 

### Cliente procura um procedimento estético já existe
Uma jovem ao navegar pelo Instagram gostou do corte de cabelo de uma atriz e da arte nas unhas dela. Buscando melhorar sua autoestima, e se sentir renovada, a jovem procurou em seu bairro um estabelecimento que a oferecesse o mesmo corte e arte nas unhas, que a deixassem bonita como a atriz nas fotos. A jovem então navegou pelo Google Maps buscando por um salão que parecesse competente, escolheu um que possuía boas avaliações e se dirigiu ao local para executar o mesmo procedimento estético. Mas como o procedimento era novo, as profissionais do salão não conseguiram atingir o resultado que a cliente desejou, as ferramentas de busca também não traziam informações que a dessem certeza de que as profissionais conseguiriam obter tal resultado.  

#### Resumo  
|Identificador|Descrição|
|-------------|---------|
|ST01| Deve ser possível saber o horário de funcionamento do estabelecimento|
|ST02| O sistema deve informar os serviços prestados pelo estabelecimento|
|ST03| O usuário deve ser capaz de analisar fotos de resultados de procedimentos feitos em outros clientes|
|ST04| O usuário deve conseguir buscar estabalecimentos que ofereçam o serviço desejado|
|ST05| O sistema deve fornecer um mapa para navegação e encontrar estabelecimentos|
|ST06| O usuário deve poder conseguir visualizar fotos do estabelecimento em si|
|ST07| O estabelecimento poderia informar quem são seus funcionários e suas capacidades técnicas|  

- - -  

### Introspecção  
É uma técnica rica e profunda que visa entender quais propriedades o sistema deve possuir. Demanda imaginação de quem está levantando os requisitos para estabelecer o que ele gostaria que estivesse no sistema, a fim de executar uma determinada tarefa. Apesar de ser uma técnica útil, a instrospeccção de um especialista, por exemplo, pode não ser reflitida na experiência real do usuário.  

#### Ao acessar o site  
- Visualizar uma mensagem de boas vindas;
- Ser apresentado ao sistema;
- Deve ser possível acessar de qualquer navegador;
- Deve ser possível acessar de dispositivos móveis e desktops;

#### Na tela principal
- Deve haver uma inteface agradável;
- A interface deve ser intuitiva;
- As funcionalidades devem estar claras;

#### Ao utilizar o mapa
- O sistema deve solicitar a minha permissão para acessar minha localização;
- Caso forneça minha localização, o mapa deve estar centralizado nela;
- Deve ser possível navegar pelo mapa;
- Os estabelecimentos devem estar marcados claramente no mapa;
- Deve ser possível definir o raio de busca do mapa;
- Deve ser possível selecionar o estabelecimento que aparece no mapa;

#### Ao aplicar filtros
- Deve ser possível filtrar estabeleciomentos pelo nome;
- Deve ser possível filtrar estabelecimentos pela distância/localização;
- Deve ser possível filtrar estabelecimentos pelos serviços oferecidos;
- Deve ser possível filtrar estabelecimentos por faixa de preço;

#### Ao selecionar um estabelecimento
- Deve estar evidente os dados do estabelecimento :
  - Nome
  - Endereço
  - Informações de contato
- Deve ser possível visualizar fotos do estabelecimento em si;
- O sistema deve fornecer fotos dos resultados dos serviços realizados pelo estabelecimento;

#### Resumo

|Identificador|Descrição|
|-------------|---------|
|INT01|Usuário deve ser capaz de visualizar o mapa a partir de sua localização|
|INT02|Usuário deve ser capaz de visualizar o mapa sem fornecer sua localização|
|INT03|Usuário deve ser capaz de identificar um estabelecimento no mapa|
|INT04|Usuário deve ser capaz de navegar pelo mapa|
|INT05|Usuário deve ser capaz de selecionar o estabelecimento no mapa|
|INT06|O sistema deve apresentar devidamente as informações do estabelecimento selecionado|
|INT07|O sistema deve listar todos os estabelecimentos cadastrados|
|INT08|Usuário deve filtrar os estabelecimentos no mapa|
|INT09|Usuário deve filtrar os etabelecimentos na lista|
|INT10|O sistema deve permitir filtragem por nome dos estabelecimentos, serviços oferecidos e localização|
|INT11| O usuário deve ser capaz de ver fotos do estabelecimento|
|INT12| O usuário deve ser capaz de ver fotos dos resultados dos serviços que o estabelecimento realiza|
|INT13|O usuário deve ser capaz de identificar os detalhes do estabelecimento escolhido|
|INT14|O sistema deve ser acessado em desktops|
|INT15|O sistema deve ser acessado em dispositivos móveis|
|INT16|O estabelecimento deve informar horários de funcionamento|
|INT17|O estabelecimento deve informar os preços|
|INT18|O sistema deve possuir uma interface agradável e intuitiva|  

- - -  
### Histórico de versão  

| Data | Nome | Detalhe | Versão |
|------|-------|--------|--------|
| 05/03/2021 | Hugo Aragão| Criação do documento e Storytelling | 0.1 |
| 05/03/2021 | Nícalo Ribeiro | Adição da introspecção e definição do storytelling | 0.2 |
|06/03/2021| Nícalo Ribeiro | Adição do resumo dos requisitos do storytelling| 0.3|