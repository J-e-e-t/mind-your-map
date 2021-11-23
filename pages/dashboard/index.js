import React from "react";
import Header from "../../components/dashboard/header";
import Content from "../../components/dashboard/content";
import Grid from "@mui/material/Grid";

function index() {
  return (
    <div>
      <Grid container direction="column">
        <Grid item>
          <Header></Header>
        </Grid>
        <Grid item>
          <Content></Content>
        </Grid>
      </Grid>
    </div>
  );
}

export default index;
