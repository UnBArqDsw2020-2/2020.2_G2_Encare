import React from 'react';
import './Styles.css';


function Header(props) {
    return (
        <div className="header">
            <div><span className="encare">Encare</span>
            </div>
            <div>{props.children}</div>
        </div>
    )
}

export default Header;