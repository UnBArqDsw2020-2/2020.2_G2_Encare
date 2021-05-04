import React from "react";

// Styles
import useStyles from "./styles";

function Header({ children, background, logoColor }) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ backgroundColor: background }}>
      <div>
        <span className={classes.logo} style={{ color: logoColor }}>
          Encare
        </span>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Header;
