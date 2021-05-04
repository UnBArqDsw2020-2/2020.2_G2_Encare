// eslint-disable-next-line no-unused-vars
import { createStyles, makeStyles } from "@material-ui/core/styles";

const headerHeight = 70;
const sidebarWidth = 300;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingTop: headerHeight,
      marginLeft: sidebarWidth,
    },
  })
);

export default useStyles;
