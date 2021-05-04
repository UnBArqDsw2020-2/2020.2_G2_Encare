import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    avatar: {
      height: 150,
      width: 150,
    },
    sideInfo: {
      display: "flex",
      "& span": {
        marginLeft: theme.spacing(1),
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    },
    title: {
      fontWeight: 700,
    },
    info: {
      backgroundColor: "#FFB037",
      padding: theme.spacing(2),
      paddingTop: theme.spacing(5),
      boxSizing: "border-box",
    },
    about: {
      borderTop: "3px solid #fff",
      backgroundColor: "#000",
      color: "#fff",
      padding: theme.spacing(2),
      boxSizing: "border-box",
    },
    aboutText: {
      textAlign: "justify",
    },
    middle: {
      backgroundColor: "#FFB037",
      borderTop: "3px solid #000",
      boxSizing: "border-box",
    },
  })
);

export default useStyles;
