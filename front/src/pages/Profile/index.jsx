import React from "react";

// Material
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Components
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/MainContent";
import { SidebarContent, MainContent } from "./components";

// Mocks
import ESTABLISHMENTS_MOCKS from "../../mocks/establishments";

// Styles
import useStyles from "./styles";

function Profile() {
  const classes = useStyles();

  return (
    <div>
      <Header background="#000" logoColor="#fff" />
      <Sidebar>
        <SidebarContent establishmentData={ESTABLISHMENTS_MOCKS[0]} />
      </Sidebar>
      <Main>
        <MainContent establishmentData={ESTABLISHMENTS_MOCKS[0]} />
      </Main>
    </div>
  );
}

export { Profile };
export default Profile;
