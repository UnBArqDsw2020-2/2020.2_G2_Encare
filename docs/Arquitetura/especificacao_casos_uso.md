# Especificação dos casos de Uso

Este documento tem como propósito prover maiores detalhes dos casos de uso do software Encare.

Os casos de uso especificados aqui são relacionados a usuários do tipo clientes e donos de estabelecimento.

![Casos de Uso](./img/diagrama_casos_uso_ne.png)

## UC01 - Cadastrar

|Descrição/Objetivo| Cadastrar usuário no Encare
|-----|----|
|**Ator**| Usuário que ainda não possui conta
|**Fluxo Principal**| Usuário clica em cadastrar-se<br>Usuário preenche formulário<br>Usuário clica em cadastar<br>Sistema checa dados do formulário<br>Usuário é cadastrado
|**Fluxo Alternativo 1**|Usuário clica em cadastrar-se<br>Usuário preenche formulário<br>Usuário clica em enviar<br>Sistema checa dados do formulário<br>Sistema exibe erro de cadastro<br>Sistema volta a tela do formulário
|**Fluxo de exceção**| Servidor está indisponível ou usuário está sem internet

## UC02 - Logar

|Descrição/Objetivo| Logar usuário no sistema
|-----|----|
|**Ator**| Usuário que possui cadastro no Encare
|**Fluxo Principal**| Usuário clica em login<br>Usuário informa dados de login<br>Usuário é redirecionado para a página inicial com sessão ativa 
|**Fluxo Alternativo 1**| Usuário clica em login<br> clica em esqueci a senha<br>Usuário recupera senha pelo email<br>Usuário tenta logar novamente
|**Fluxo de exceção**| Servidor está indisponível ou usuário sem internet.

## UC03 - Editar Perfil

|Descrição/Objetivo| Modificar informações de usuário
|-----|----|
|**Ator**| Usuário logado no sistema
|**Fluxo Principal**| Usuário clica em conta<br>Usuário clica em editar perfil<br>Usuário modifica as informações<br>Usuário clica em enviar<br>Sistema checa informações<br>Informações são atualizadas
|**Fluxo Alternativo 1**| Usuário clica em conta<br>Usuário clica em editar perfil<br>Usuário modifica as informações<br>Usuário clica em enviar<br>Sistema checa informações<br>Sistema exibe mensagem de erro<br>Sistema volta ao formulário de edição de perfil
|**Fluxo de exceção**| Servidor indisponível ou usuário sem internet

## UC04 - Visualizar Feed

|Descrição/Objetivo| Ver os estabelecimentos disponíveis
|-----|----|
|**Ator**| Usuário que deseja procurar serviços de cuidados pessoais (pode ou não estar logado)
|**Fluxo Principal**| Usuário abre o site<br>Sistema exibe serviços de estabelecimentos próximos
|**Fluxo Alternativo 1**| Usuário abre o site<br>Sistema exibe serviços de estabelecimentos próximos<br>Usuário seleciona filtros<br>Sistema exibe serviços de estabelecimentos filtrados
|**Fluxo de exceção**| Servidor indisponível ou usuário está sem internet.

## UC05 - Visualizar Estabelecimento

|Descrição/Objetivo| Visualizar dados de um estabelecimento
|-----|----|
|**Ator**| Usuário que deseja ver informações de um estabelecimento
|**Fluxo Principal**| Usuário clica em um estabelecimento<br>Sistema exibe página do estabelecimento<br>
|**Fluxo Alternativo 1**| -
|**Fluxo de exceção**| Servidor indisponível ou usuário está sem internet.

## UC06 - Cadastrar Estabelecimento

|Descrição/Objetivo| Cadastrar novo estabelecimento
|-----|----|
|**Ator**| Usuário (Dono de Estabelecimento)
|**Fluxo Principal**| Usuário clica em cadastrar estabelecimento<br>Usuário preenche formulário e clica em enviar<br>Sistema checa informações<br>Sistema exibe página do estabelecimento
|**Fluxo Alternativo 1**| Usuário clica em cadastrar estabelecimento<br>Usuário preenche formulário e clica em enviar<br>Sistema checa informações<br>Sistema exibe mensagem de erro<br>Sistema volta ao formulário de cadastro de estabelecimento
|**Fluxo de exceção**|Servidor indisponível ou usuário sem internet

## UC07 - Editar dados do Estabelecimento

|Descrição/Objetivo| Modificar informações do estabelecimento
|-----|----|
|**Ator**| Usuário (Dono de Estabelecimento)
|**Fluxo Principal**| Usuário clica no estabelecimento em seu perfil<br>Usuário clica em editar estabelecimento<br>Usuário preenche formulário e clica em enviar<br>Sistema checa informações<br>Estabelecimento é atualizado
|**Fluxo Alternativo 1**| Usuário clica no estabelecimento em seu perfil<br>Usuário clica em editar estabelecimento<br>Usuário preenche formulário e clica em enviar<br>Sistema checa informações<br>Sistema exibe mensagem de erro<br>Sistema retorna a tela do formulário de edição de estabelecimento
|**Fluxo de exceção**|Servidor indisponível ou usuário sem internet

## UC08 - Cadastrar Serviço

|Descrição/Objetivo| Cadastrar novo serviço em um estabelecimento
|-----|----|
|**Ator**| Usuário (Dono de Estabelecimento)
|**Fluxo Principal**| Usuário clica no estabelecimento em seu perfil<br>Usuário clica em adicionar serviço<br>Usuário preenche formulário do serviço<br>Usuário adiciona imagens para o serviço<br>Sistema checa informações do formulário e imagens<br>Serviço criado e salvo
|**Fluxo Alternativo 1**| Usuário clica no estabelecimento em seu perfil<br>Usuário clica em adicionar serviço<br>Usuário preenche formulário do serviço<br>Usuário adiciona imagens para o serviço<br>Sistema checa informações do formulário e imagens<br>Sistema exibe mensagem de erro<br>Sistema volta à tela do formulário
|**Fluxo de exceção**|Servidor indisponível ou usuário sem internet

## UC09 - Editar Serviço

|Descrição/Objetivo| Modificar informações de um serviço
|-----|----|
|**Ator**| Usuário (Dono de Estabelecimento)
|**Fluxo Principal**| Usuário clica no estabelecimento em seu perfil<br>Usuário clica em um serviço existente<br>Usuário clica em editar serviço<br>Usuário modifica informações em um formulário e clica em enviar<br>Sistema checa informações<br>Informações são atualizadas
|**Fluxo Alternativo 1**| Usuário clica no estabelecimento em seu perfil<br>Usuário clica em um serviço existente<br>Usuário clica em editar serviço<br>Usuário modifica informações em um formulário e clica em enviar<br>Sistema checa informações<br>Sistema exibe mensagem de erro<br>Sistema volta à tela do formulário de edição de serviço
|**Fluxo de exceção**|Servidor indisponível ou usuário sem internet

## UC10 - Excluir serviço

|Descrição/Objetivo| Excluir serviço de eu estabelecimento
|-----|----|
|**Ator**| Usuário (Dono de Estabelecimento)
|**Fluxo Principal**| Usuário clica no estabelecimento em seu perfil<br>Usuário clica em um serviço existente<br>Usuário clica em excluir serviço<br>Sistema exibe tela de confirmação<br>Usuário clica em sim<br>Serviço é excluído
|**Fluxo Alternativo 1**|Usuário clica na estabelecimento em seu perfil<br>Usuário clica em um serviço existente<br>Usuário clica em excluir serviço<br>Sistema exibe tela de confirmação<br>Usuário clica em não<br>Sistema retorna à tela do serviço
|**Fluxo de exceção**|Servidor indisponível ou usuário sem internet


## Referências

[1] Diagrama de Casos de Uso do Guardiões da Saúde. Disponível em <https://requisitos-de-software.github.io/2020.1-GuardioesdaSaude/modelagem/dcu/>. Acesso em 27 Abr. 2021.

## Versionamento

|Data|Nome|Detalhes|Versão|
|----|---|---|---|
| 27/04/21 | Wagner Martins | Criação do documento e adição dos casos de uso 01-05 | 0.1 |
| 27/04/21 | Wagner Martins | Adição dos casos de uso 06-10 | 0.2 |