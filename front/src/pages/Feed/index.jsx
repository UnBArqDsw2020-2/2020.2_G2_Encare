import React from "react";

// Material
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

// Mocks
import ESTABLISHMENTS_MOCKS from "../../mocks/establishments";

// Styles
import useStyles from "./styles";

function Feed() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center" className={classes.container}>
        <Grid item xs={1} className={classes.line} />
        <Grid item xs={12}>
          <Typography variant="h2" className={classes.title}>
            <span
              style={{ height: 3, width: 30, borderTop: "3px solid #FFB037" }}
            />
            Do Padrão à Arte
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container className={classes.containerCads}>
            {ESTABLISHMENTS_MOCKS.map((establishment, index) => (
              <Grid item key={index} xs={12} sm={12} md={6} lg={3} xl={3}>
                <GridListTile className={classes.card}>
                  <img
                    src={establishment.services[0].pictures[0]}
                    alt={establishment.name}
                  />
                  <GridListTileBar
                    title={establishment.name}
                    subtitle={<span>{establishment.services[0].name}</span>}
                    /* actionIcon={} */
                  />
                </GridListTile>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export { Feed };
export default Feed;
