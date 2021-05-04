import React from "react";

// Material
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";

// Icons
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";

// Styles
import useStyles from "./styles";

function SidebarContent({ establishmentData }) {
  const classes = useStyles();

  return (
    <Box height="100%">
      <Box height="50%" className={classes.info}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Avatar
              src={establishmentData.profilePicture}
              className={classes.avatar}
            />
          </Grid>
          <Grid item xs={12} />
          <Grid item>
            <Typography variant="h6" className={classes.title}>
              {establishmentData.name}
            </Typography>
          </Grid>
          <Grid item xs={12} />
          <Grid item xs={12}>
            <Typography className={classes.sideInfo}>
              <WhatsAppIcon />
              <span>{establishmentData.phone}</span>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.sideInfo}>
              <QueryBuilderIcon />
              <span>
                {`${establishmentData.openingHours.startAt} - ${establishmentData.openingHours.endAt}`}
              </span>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.sideInfo}>
              <RoomOutlinedIcon />
              <span>{establishmentData.location.address}</span>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box height="4%" className={classes.middle} />
      <Box height="46%" className={classes.about}>
        <Grid container spacing={1} justify="center">
          <Grid item>
            <Typography variant="h6" className={classes.title}>
              Quem somos ?
            </Typography>
          </Grid>
          <Grid item xs={12} />
          <Grid item>
            <p className={classes.aboutText}>{establishmentData.about}</p>
          </Grid>
          <Grid item xs={12} />
          <Grid item>
            <IconButton
              color="inherit"
              target="_blank"
              href={establishmentData.social.instagram}
            >
              <InstagramIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              color="inherit"
              target="_blank"
              href={establishmentData.social.facebook}
            >
              <FacebookIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              color="inherit"
              target="_blank"
              href={establishmentData.social.youtube}
            >
              <YouTubeIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export { SidebarContent };
export default SidebarContent;
