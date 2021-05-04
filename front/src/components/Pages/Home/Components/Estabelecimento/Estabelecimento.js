import React, {useState} from 'react';
import './Estabelecimento.css';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#FFB037',
    color: 'black'
  },
  formControl: {
    minWidth: '100%',
  },
}));


function Estabelecimento(props) {
  const [servico, setServico] = useState('');
  const classes = useStyles();
  return (
    <div>
      <div className="estabelecimento">
        <div>
          <div className="header2">
            <span className="encare">Encare</span>
            <span className="title">Novo Estabelecimento</span>
          </div>
        </div>
      </div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Cadastre seu negócio
        </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="fname"
                  name="telefone"
                  variant="outlined"
                  required
                  fullWidth
                  id="telefone"
                  label="Telefone"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="endereco"
                  label="Endereço"
                  name="endereco"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Tipo de serviço</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={servico}
                    onChange={(event) => setServico(event.target.value)}
                  >
                    <MenuItem value={"barba"}>Barba</MenuItem>
                    <MenuItem value={"cabelo"}>Cabelo</MenuItem>
                    <MenuItem value={"unha"}>Unha</MenuItem>
                    <MenuItem value={"estetica"}>Estética</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="time"
                  type="time"
                  defaultValue="07:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="time"
                  type="time"
                  defaultValue="07:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Aceito os termos de política e privacidade."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Cadastrar
          </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Já possui uma conta? Faça seu login.
              </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default Estabelecimento;