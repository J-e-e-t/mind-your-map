import { AppBar, Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { spacing } from "@mui/system";
import log from "../public/down-arrow.gif"
import dd from '../public/dropdown.png'
import Image from "next/image";
import { Label, LineStyle } from "@mui/icons-material";
import LanguageIcon from '@mui/icons-material/Language';
import LoginPage from "./LoginPage";
import Pricing from "./Pricing"
import SignUpPage from "./SignUpPage";
import Link from '@mui/material/Link';

import Content from "./LandingPage";
import { Select } from "@material-ui/core";

function Navbar() {
  
  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Grid container md={1} sx={{flexWrap: 'nowrap',marginLeft:'2em',marginRight:'2em'}}>
          <Link  style={{textDecoration:'none',color:'white'}} href="./">
             Mindled
               </Link>
          </Grid>
          
          <Grid container md={9} sx={{MarginLeft:'2em'}}>
            <Grid item sx={{marginLeft:'1.5em'}}>
              <Button variant="text" color="inherit">
                
                Features

                <Image src={dd} alt="dd" width="30em" height="30em" color="white" />
                
              </Button>
            </Grid>
            <Grid item sx={{marginLeft:'1.0em'}}>
              <Button variant="text" color="inherit">
                Case Studies
                <Image src={dd} alt="dd" width="30em" height="30em" color="white" />
              </Button>
            </Grid>
            <Grid item sx={{marginLeft:'1.0em',marginTop:'0.3em'}}>
              <Button variant="text" color="inherit" >
                <a href="./Conatct" alt="link">Help</a>
              </Button>
            </Grid>
            <Grid item sx={{marginLeft:'1.0em',marginTop:'0.3em'}}>
              <Button variant="text" color="inherit">
               <Link style={{textDecoration:'none',color:'white'}} href="../Pricing">
                 Pricing
               </Link>
              </Button>
            </Grid>
            <Grid item sx={{marginLeft:'1.0em',marginTop:'0.3em'}}>
              <Button variant="text" color="inherit">
                Community
              </Button>
            </Grid>
          </Grid>
          
          <Grid container   md={7} direction="row-reverse" sx={{flexWrap: 'nowrap'}}>
          <Grid item sx={{marginLeft:'0.6em',marginRight:'-0.8em'}}>
              <Button variant="contained"  color="warning">
              <Link  style={{textDecoration:'none',color:'white'}} href="./SignUpPage">
              Sign Up For free
               </Link>
               
                </Button>
            </Grid>
          <Grid item sx={{marginLeft:'0.6em'}}>
              <Button variant="contained"  color="warning" >
              <Link  style={{textDecoration:'none',color:'white'}} href="./LoginPage">
              Sign In
               </Link>
               
                </Button>
            </Grid>
            <Grid item sx={{marginRight:'0em'}}>
              
             <Button sx={{color:'white'}}> <LanguageIcon  /><>EN</></Button>
            </Grid>
            </Grid>


        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
