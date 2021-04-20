# DAS - Documento de Arquitetura de Software

## 1. Introdução

### 1.1 Finalidade

Este documento tem como finalidade especificar e documentar as decisões arquiteturais do software Encare, usando diferentes visões arquiteturais para detalhar diferentes aspectos do sistema.

### 1.2 Escopo

O escopo desse documento de arquitetura abrange todo a arquitetura do software em diferentes níveis a ser desenvolvido na disciplina. 

### 1.3 Definições, Acrônimos e Abreviações

|Sigla|Descrição|
|---|---|
|DAS|Documento de Arquitetura de Software| 
|MTV|Model Template View|

### 1.4 Visão Geral

O projeto trata de uma aplicação web que tem como objetivo facilitar a procura por serviços de cuidados pessoais. Para isso o projeto contará com uma API que utilizará o framework django e um frontend em ReactJS

## 2. Representação Arquitetural

### 2.1. Diagrama de relação:
### 2.2. Python Django:

A ferramenta escolhida para compor o backend da aplicação é o python com o framework django que facilita principalmente quando trata-se das requisições. Essa ferramenta adota no backend a arquitetura MTV como padrão. As principais modelagens arquiteturais feitas envolvem essa ferramenta.

### 2.3. ReactJS:

Para o frontend, a equipe decidiu pela utilização do ReactJS, uma biblioteca JavaScript bastante popular e voltada a desenvolvimento web. As suas principais caracteristicas são:
 - Baseado em componentes 
 - Pode ser renderizado no servidor através do servidor.
 - Dados são passsados das classes mães para as classes filhas por meio das props. 
 - Um componente por usar plugins externos. 


### 2.4. MySQL:

## 3. Metas Arquiteturais e Restrições

## 4. Visão de Casos de Uso

## 5. Visão Lógica

## 6. Visão de Processos

## 7. Visão de Implantação

## 8. Visão de Implementação

## 9. Visão de Dados (Opcional)

## 10. Tamanho e Desempenho

## 11. Qualidade

## Referências

[1] Template do [documento de arquitetura de software](https://github.com/UnBArqDsw2020-2/2020.2_G2_Encare/files/6305164/Software.Architecture.Document.pdf). Disponibilizado no moodle da disciplina.
[2] React: Uma biblioteca JavaScript para criar interfaces para usuários. Disponível em: <https://pt-br.reactjs.org/>. Aceso em 19 abr. 2021.

## Versionamento

|Data|Nome|Detalhes|Versão|
|----|---|---|---|
| 16/04/21 | Wagner Martins | Criação do documento | 0.1 |
| 16/04/21 | Wagner Martins | Adição da finalidade | 0.2 |
| 19/04/21 | João Pedro Carvalho | Adição da visão geral e das siglas  | 0.3 |