import { AppBar, Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { spacing } from "@mui/system";
function Navbar() {
  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar >
          <Grid container md={2} sx={{flexWrap: 'nowrap'}}>
            LOGO
          </Grid>
          <Grid container md={8} direction="row-reverse">
            <Grid item>
              <Button variant="text" color="inherit">
                Features
              </Button>
            </Grid>
            <Grid item>
              <Button variant="text" color="inherit">
                Case Studies
              </Button>
            </Grid>
            <Grid item>
              <Button variant="text" color="inherit">
                Help
              </Button>
            </Grid>
            <Grid item>
              <Button variant="text" color="inherit">
                Pricing
              </Button>
            </Grid>
          </Grid>
          <Grid container md={2} direction="row-reverse">
            <Grid item>
              <Button variant="contained" color="warning" >Log In</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="warning">Sign Up</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
