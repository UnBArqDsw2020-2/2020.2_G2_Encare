import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: "#000",
      height: "100%",
      width: "100%",
      color: "white",
    },
    title: {
      textAlign: "center",
      fontWeight: 700,
    },
    container: {
      paddingTop: 100,
    },
    line: {
      height: 3,
      borderTop: "3px solid #FFB037",
    },
    containerCads: {
      padding: theme.spacing(5),
      paddingTop: theme.spacing(5),
    },
    card: {
      height: 450,
      margin: theme.spacing(2),
      listStyleType: "none",
      transition: "transform .2s",
      "& .MuiGridListTile-tile": {
        borderRadius: 10,
        boxShadow: "4px 4px 4px 0 rgba(0,0,0,0.4)",
      },
      "&:hover": {
        transform: "scale(1.03)",
        borderRadius: 10,
        "& .MuiGridListTile-tile": { boxShadow: "none" },
        boxShadow: "4px 4px 4px 0 #FFB037AA",
      },
      "& .MuiGridListTileBar-title": {
        fontWeight: 700,
      },
    },
  })
);

export default useStyles;
