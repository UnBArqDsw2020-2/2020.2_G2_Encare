# Especificação dos casos de Uso

Este documento tem como propósito prover maiores detalhes dos casos de uso do software Encare.

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

|Descrição/Objetivo| a
|-----|----|
|**Ator**|
|**Fluxo Principal**|
|**Fluxo Alternativo**|
|**Fluxo de exceção**|

## UC07 - Editar dados do Estabelecimento

|Descrição/Objetivo| a
|-----|----|
|**Ator**|
|**Fluxo Principal**|
|**Fluxo Alternativo**|
|**Fluxo de exceção**|

## UC08 - Cadastrar Serviço

|Descrição/Objetivo| a
|-----|----|
|**Ator**|
|**Fluxo Principal**|
|**Fluxo Alternativo**|
|**Fluxo de exceção**|

## UC09 - Editar Serviços

|Descrição/Objetivo| a
|-----|----|
|**Ator**|
|**Fluxo Principal**|
|**Fluxo Alternativo**|
|**Fluxo de exceção**|

## UC10 - Excluir serviço

|Descrição/Objetivo| a
|-----|----|
|**Ator**|
|**Fluxo Principal**|
|**Fluxo Alternativo**|
|**Fluxo de exceção**|


## Versionamento

|Data|Nome|Detalhes|Versão|
|----|---|---|---|
| 27/04/21 | Wagner Martins | Criação do documento e adição dos casos de uso 01-05 | 0.1 |