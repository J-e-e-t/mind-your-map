import React from 'react'
import { Button,AppBar,Toolbar,Grid} from "@mui/material";
import { spacing } from "@mui/system";

 const Header =() => {
    return (
        <>
        <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Grid container md={2} sx={{flexWrap: 'nowrap', color:'yellow'}}>
            Dashboard
          </Grid>
          <Grid container md={6} direction="row">
            <Grid item>
              <Button variant="text" color="inherit">
                save
              </Button>
            </Grid>
          </Grid>
          <Grid container md={4} direction="row-reverse" spacing={2}>
            <Grid item >
              <Button variant="contained" color="warning" >Log In</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="warning">Sign Up</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>   
        </>
    )
}
export default Header
