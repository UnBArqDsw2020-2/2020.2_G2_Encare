import React from 'react';
import './Styles.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        color: 'black',
        fontWeight:'bold',
        backgroundColor: '#FFB037'
    },
  });

function MudeSeuEstilo() {
    const classes = useStyles();
    return (
        <div className="conteudo">
            <div className="bloco">
                <p className="titulo">Mude seu estilo !</p>
                <p className="descricao">Encontre em nosso site diversas opções de estabelecimentos que vão te ajudar a dar aquela repaginada no visual!</p>
                <Button variant="outlined" classes={{root: classes.root}}>Comece agora !</Button>
            </div>
        </div >
    );
}

export default MudeSeuEstilo;
