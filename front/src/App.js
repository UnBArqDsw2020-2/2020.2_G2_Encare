import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Profile from "./pages/Profile";
import Home from "./pages/Home/Home";
import CadastroEstabelecimento from "./pages/CadastroEstabelecimento/CadastroEstabelecimento";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/perfil" render={() => <Profile />} />
        <Route
          exact
          path="/cadastro"
          render={() => <CadastroEstabelecimento />}
        />
      </Switch>
    </Router>
  );
}

export default App;
