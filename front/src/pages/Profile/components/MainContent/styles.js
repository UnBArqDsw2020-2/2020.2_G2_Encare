import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: theme.spacing(4),
      // marginTop: 100,
    },
    tabs: {
      "& .MuiTab-root": {
        textTransform: "initial",
        fontWeight: 700,
        fontSize: "1rem",
      },
      "& .MuiTabs-indicator": {
        backgroundColor: "#FFB037",
      },
    },
    map: {
      height: 600,
      borderRadius: 10,
    },
    addressText: {
      display: "flex",
      "& span": {
        marginLeft: theme.spacing(1),
      },
    },
    card: {
      height: 450,
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
