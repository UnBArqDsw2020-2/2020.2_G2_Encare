import React from 'react';
import './Styles.css';

function MudeSeuEstilo() {
    return (
        <div className="conteudoDesc">
        <div className="descMap">
            <div className="desc">
                <div className="yellouLine"></div>
                <p className="desctitle">Descubra um novo estilo</p>
                <p className="desccontent">Seja livre para escolher o que mais combina com a sua atitude perto da sua casa!</p>
            </div>
            <div className="mapdiv">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491463.62229066424!2d-48.077274704783!3d-15.774422801689116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3d18e45b91a3%3A0x24e8d3620bd85d7f!2sBras%C3%ADlia%20-%20DF!5e0!3m2!1spt-BR!2sbr!4v1619929863446!5m2!1spt-BR!2sbr" width="600" style={{borderWidth: 0}} height="450" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
        </div >
    );
}

export default MudeSeuEstilo;
