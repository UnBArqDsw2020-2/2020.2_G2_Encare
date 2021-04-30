# Reutilização no Front-end

A reutilização de software baseia-se no uso de conceitos, produtos ou soluções previamentes elaboradas ou adiquiridas para a criação de um novo software, com o objetivo de melhorar a qualidade, produtividade e reduzir tempo e custos de projeto.

Reusar um produto significa poder reutilizar partes (ou o todo) de um sistema desenvolvido anteriormente, como: especificações, módulos de um projeto, arquitetura e código fonte.

## _Frameworks_

### React

Como definido por seus criadores, React é “uma biblioteca JavaScript declarativa, eficiente e flexível para a criação de interfaces de usuário (UI)”.  
Entre um de seus objetivos, temos o de facilitar a conexão entre diferentes partes de uma página, onde funcionamento acontece através de componentes.    

### Next.js

Next.js é um framework para React, busca reunir diversas funcionalidades como renderização hibrida e estática de conteúdo, suporte a TypeScript, pre-fetching, sistema de rotas e pacotes de funcionalidades. Caso seja implementado no projeto, será com o foco de Server Side Rendering.

## Bibliotecas

### Material-UI

É alguma biblioteca de componentes React para um desenvolvimento, será utilizada para padronizar alguns componentes básicos, como por exemplo botões e ícones, que irão compor componentes mais complexos do sistema. 

#### Aplicação no projeto

O código a seguir é um exemplo de uma página de login, onde diversos componentes do Material-UI estão sendo usados para compor o componente de SignIn.

```javascript
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
```
## Serviços

- se for utilizado/implementado algum

## Componentes

- se for utilizado/implementado algum

## Referências

- Reutilização de Software - Revista Engenharia de Software Magazine 39 . Disponível em: <https://www.devmedia.com.br/reutilizacao-de-software-revista-engenharia-de-software-magazine-39/21956>. Acesso em: 21 de abril de 2021.
- React – Uma biblioteca JavaScript para criar interfaces de usuário. Disponível em: <https://pt-br.reactjs.org/>.
- Material-UI: Um framework popular de React UI. Disponível em: <https://material-ui.com/pt/>.
- Next.js by Vercel - The React Framework. Disponível em: <https://nextjs.org/>.‌

## Versionamento

| Data | Nome | Detalhes | Versão |
| ---- | ---- | -------- | ------ |
| 21/04/2021 | João Baraky, Nícalo Ribeiro e Gustavo Nogueira | Criação do documento | 0.1 |
| 30/04/2021 | João Baraky, Nícalo Ribeiro e Gustavo Nogueira | Adição do conteúdo | 0.2 |


