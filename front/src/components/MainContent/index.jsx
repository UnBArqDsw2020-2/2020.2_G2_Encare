import React from "react";

// Styles
import useStyles from "./styles";

function MainContent(props) {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
}

export { MainContent };
export default MainContent;
