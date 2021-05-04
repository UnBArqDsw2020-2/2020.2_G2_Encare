import React from "react";

// Styles
import useStyles from "./styles";

function Sidebar(props) {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
}

export { Sidebar };
export default Sidebar;
