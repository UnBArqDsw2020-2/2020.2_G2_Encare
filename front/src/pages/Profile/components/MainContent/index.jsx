import React from "react";

// Material
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

// Icons
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

// Components
import TabPanel from "../../../../components/TabPanel";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Styles
import useStyles from "./styles";

function MainContent({ establishmentData }) {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleChangeTab = (event, tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className={classes.root}>
      <Paper>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Tabs
              centered
              value={currentTab}
              onChange={handleChangeTab}
              className={classes.tabs}
            >
              <Tab label="Meus Trabalhos" />
              <Tab label="Veja no Mapa" />
            </Tabs>
          </Grid>
          <Grid item xs={12}>
            <TabPanel index={0} value={currentTab}>
              <Grid container spacing={2}>
                {establishmentData.services.map((service, index) => (
                  <Grid item key={index} xs={12} sm={12} md={6} lg={3} xl={3}>
                    <GridListTile className={classes.card}>
                      <img src={service.pictures[0]} alt={service.name} />
                      <GridListTileBar
                        title={service.name}
                        subtitle={
                          <span>{`R$ ${service.price.toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                          })}`}</span>
                        }
                        /* actionIcon={} */
                      />
                    </GridListTile>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel index={1} value={currentTab}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Typography className={classes.addressText}>
                    <RoomOutlinedIcon />
                    <span>{establishmentData.location.address}</span>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <MapContainer
                    zoom={16}
                    className={classes.map}
                    center={establishmentData.location.coordinates}
                  >
                    <TileLayer
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={establishmentData.location.coordinates}>
                      <Popup>{establishmentData.name}</Popup>
                    </Marker>
                  </MapContainer>
                </Grid>
              </Grid>
            </TabPanel>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export { MainContent };
export default MainContent;
