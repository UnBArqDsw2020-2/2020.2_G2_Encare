# Lazy Loading

O Lazy Loading ou *carregamento preguiçoso*, em tradução livre, é um padrão usado afim de otimizar a execução de um sistema, usado ao lado da função *Code Splitting* (que separa a demanda de carregamento), contribui para um fluxo de navegação mais amigável à aparelhos de baixo desempenho ou conexões lentas de internet.

O conceito gira entorno de separar a demanda de acordo com a ação do usuário, executando um determinado bloco de código apenas quando o usuário requisita uma ação direta relacionada ou indireta e dependente. Isso faz com que o tempo de resposta seja mínimo, como no caso de aplicações web.

Um dos frameworks que utiliza esse conceito é o Angular, que permite que os desenvolvedores decidam quais módulos irão executar assim que a aplicação iniciar. 


## Implementação

Para a aplicação no Encare, este padrão pode ser usado no Front-end pela função lazy do react, junto com o componente Suspense para exibir o status de _loading_. O carregamento do componente que mostra os dados do estabelecimento pode ser carregado depois, neste caso, assim que o usuário clicar para obter mais informações de determinado estabelecimento.

~~~typescript
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const Estabilishment = lazy(() => import('./routes/Estabilishment'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/estabilishment" component={Estabilishment}/>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
~~~


## Referências

[1] Site: Wikipedia - Lazy Loading. Disponível em: <https://en.wikipedia.org/wiki/Lazy_loading> Acesso 08/04/2021.

[2] Site: Medium - Code Splitting e Lazy Loading em React. Disponível em <https://medium.com/reactbrasil/code-splitting-e-lazy-loading-em-react-b1ce9870289f>

[3] Site: ReactJs Document - Dividindo o Código (Code-Splitting). Disponível em: <https://pt-br.reactjs.org/docs/code-splitting.html>. Acesso 08/04/2021

## Versionamento

|Autor|Data|Descrição|Versão|
|-----|:--:|:----:|---------|
|Hugo e Wagner|08/04/2021| Criação do documento e adição de conceitos | 0.1 |
|Hugo e Wagner|08/04/2021| Adição da implementação | 0.2 |