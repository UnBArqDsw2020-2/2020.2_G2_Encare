# Diagrama de Sequência

Um diagrama de sequência mostra a colaboração dinâmica entre vários objetos de um sistema. O mais importante aspecto deste diagrama é que a partir dele percebe-se a sequência de mensagens enviadas entre os objetos [1].

O diagrama é representado em dois eixos. O eixo vertical representa o tempo, sendo lido de cima para baixo. O eixo horizontal representa os objetos disponíveis na interação, usualmente representados como retângulos(também podem ser usadas outras representações, como um usuário por exemplo). Cada um desses objetos apresentam alguns elementos, sendo eles:

- Linha de vida: Uma linha pontilhada na vertical abaixo de cada objeto.
- Execução: Retângulos sobre as linhas de vida que representam a execução daquele dado objeto.
- Mensagens: Representadas por setas e definem as interações entre os objetos, como chamadas de função, criação ou destruição de objetos. Podem ser síncronas ou assíncronas.

O diagrama também aceita o uso de estruturas chamadas de fragmentos de interação [2], que podem representar estruturas como condicinais, loops, ou mesmo referências para outros diagramas de sequência.

## Feed de estabelecimentos:

![Feed estabelecimentos](imagens/Diagrama_de_sequencia.png)

## Informações de estabelecimento:

![Informações de estabelecimento](imagens/diagrama_de_sequencia_estab_info.png)

## Referências

- [1] Linguagem de Modelagem Unificada Em Português. Disponível no material disponibilizado no moodle da disciplina.
- [2] UML Sequence Diagrams. Disponível em https://www.uml-diagrams.org/sequence-diagrams.html

## Versionamento 

| Data | Nome | Detalhe | Versão |
|------|------|---------|--------|
| 02/03/2021 | João Pedro Silva de Carvalho e Wagner Martins | Diagrama para feed de estabelecimentos | 0.1 |
| 02/03/2021 | João Pedro Silva de Carvalho e Wagner Martins | Diagrama das informações de estabelecimento | 0.2 |
| 07/03/2021 | João Pedro Silva de Carvalho e Wagner Martins | Adição de informações sobre o diagrama | 1.0 |