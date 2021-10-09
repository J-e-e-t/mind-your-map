import React from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";

function Header() {
  return (
    <>
      <AppBar position="fixed" color="primary">
        <toolbar>
          <Grid container md={6} sx={{ flexWrap: "nowrap" }}>
            LOGO
          </Grid>
          <Grid container md={6} direction="row-reverse">
            <Grid item>
              <Button variant="text" color="inherit">
                open drawer
              </Button>
            </Grid>
          </Grid>
        </toolbar>
      </AppBar>
    </>
  );
}

export default Header;
