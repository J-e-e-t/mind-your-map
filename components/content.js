import { Container, Box } from "@mui/material";
import { typography } from "@mui/system";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import demopic from "../public/1.png";
import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Content() {
  return (
    <>
      <div>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item xs={4}  >
            <Image src={demopic} alt="demopic" width="300em" height="300em" />
          </Grid>
          <Grid item xs={6}>
            <Grid container direction="row" justify="centre" justifyContent="center" alignItems="center">
              <Grid item xs={12} >
                <h1> Why Mindmap : Manage Key Points : Enrich your Mind : Better your Revision : Better to Manage :  </h1>
              </Grid>
              <Grid item xs={12}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...</p>
              </Grid>
              
              <p alignItems="center"> To know more .. </p>
              <hr />
              <hr /><hr />
              <hr />
              <Grid item xs={12} sx={{marginLeft:'14em'}}>
                <Button variant="contained" sx={{width:'24em'}} color="inherit"><h2><strong>Get Started for Free <ArrowForwardIcon sx={{position: "absolute"}} /> </strong></h2> </Button>
                
              </Grid>
            
            </Grid>
          </Grid>
        </Grid>
        </div>


        <div>
      <p>hello</p>
        </div>
    </>
  );
}

export default Content;// contenet branch file 
