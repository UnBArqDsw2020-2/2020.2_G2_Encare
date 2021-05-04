// eslint-disable-next-line no-unused-vars
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      top: 0,
      left: 0,
      margin: 0,
      height: 50,
      padding: 10,
      zIndex: 1000,
      width: "100%",
      position: "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
    logo: {
      fontWeight: "bold",
      fontSize: 42,
    },
  })
);

export default useStyles;
