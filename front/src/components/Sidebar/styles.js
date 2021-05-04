// eslint-disable-next-line no-unused-vars
import { createStyles, makeStyles } from "@material-ui/core/styles";

const headerHeight = 70;
const sidebarWidth = 300;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: `calc(100% - ${headerHeight}px)`,
      left: 0,
      width: sidebarWidth,
      position: "fixed",
      zIndex: 1,
      top: headerHeight,
      overflowX: "hidden",
      overflowY: "hidden",
    },
  })
);

export default useStyles;
