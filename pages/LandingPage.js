import { Container, Box, Typography } from "@mui/material";
import { border, typography } from "@mui/system";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import demopic from "../public/front_foot_map_image.jpg";
import demopicone from "../public/my_ss_mindmap_tag.png";
import demopictwo from "../public/my_ss_mindmap_tag.png";
import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import sysimagelearn from "../public/systematicimage.png";
import { makeStyles } from '@material-ui/core';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

// function ElevationScroll(props) {
//   const { children } = props;

//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//   });
// }

const useStyles = makeStyles(theme => ({


  Demopic: {
    position: "absolute",
    width: "20em",
    height: "30em",
    background: "url(.jpg)",
    borderRadius: "82px",
    transform: "matrix(-1, 0, 0, 1, 0, 0)",
  },
  MindmapHeading: {
    position: "absolute",
    width: "10em",
    height: '0em',
    marginTop: "-3em",
    fontFamily: "PT Serif Caption",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "48px",
    lineHeight: "64px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },

  MindmapPara: {
    position: "absolute",
    width: '25em',
    height: '20em',
    marginTop: '4em',
    marginRight: '5em',
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "24px",
    lineHeight: "36px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  StartedButton: {
    position: "absolute",
    width: "30em",
    height: "5em",
    marginTop: '15em',
    marginRight: "10em",
    background: "#FCCFCF",
    borderRadius: "52px",
  },
  demopicone: {
    background: "url(.png)",
    borderRadius: "24px",
    position: "absolute",
    width: '21em',
    height: '20em'
  },
  demopictwo: {
    background: "url(.png)",
    borderRadius: "60px",
    position: "absolute",
    width: '4em',
    height: '3em',
    opacity: '0.6'

  },
  caseStudies: {
    alignContent: 'center',
    position: "absolute",
    marginLeft: "-10rem",
    fontFamily: "PT Serif Caption",
    fontSize: '4rem'

  },
  Organiserevision: {
    fontFamily: "Poppins",
    marginLeft: "1rem",
    position: "absolute",
    marginTop: "16rem",
    direction: 'left',
    textAlign:'left',
    marginLeft:'-40rem',
    fontSize: '1.5rem',
    paddingRight:'1rem',
    paddingLeft:'1rem',
    backgroundColor:"#E1B1B1",
    borderRadius:'4rem'
  },
}))

function Content() {


  const Classes = useStyles();
  return (
    <>


      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{ padding: 'auto', marginTop: '10rem', height: '100vh', marginBottom: '-1rem' }}
      >

        <Grid item xs={4}>
          <Grid xs={6}>
            <Image src={demopictwo} alt="demopic2" sx={{ marginTop: '-2em' }} className={Classes.demopictwo} />
          </Grid>
          <Image src={demopic} alt="demopic" className={Classes.Demopic} />

        </Grid>
        <Grid item xs={4}>
          <Grid container direction="row" justify="centre" justifyContent="center" alignItems="center">
            <Grid item xs={12} >
              <h1 className={Classes.MindmapHeading}> Why Mindmap  </h1>
            </Grid>
            <Grid item xs={12} className={Classes.MindmapPara}>
              <p>Mind Maps not only highlight important facts, but also show the overall structure of a subject and the relative importance of individual parts of it. They are great when you need to think creatively, and can help you to make new connections between ideas. This is useful when you have problems to solve.</p>
            </Grid>

            <Grid item xs={12} >
              <Button variant="contained" sx={{ marginLeft: '-2em' }} className={Classes.StartedButton}><h2><strong>Get Started for Free <ArrowForwardIcon /> </strong></h2> </Button>

            </Grid>

          </Grid>
        </Grid>

      </Grid>

      <Grid xs={6}>
        <Image src={demopicone} alt="demopic1" className={Classes.demopicone} />
      </Grid>

      <Grid sx={{ height: '60rem' }}>

        <Grid sx={{ marginTop: '5rem' }}>
          <h1 className={Classes.caseStudies}>Case Studies</h1>
        </Grid>

        <Grid className={Classes.Organiserevision}>
          <h2 >Organise Your Revision</h2>
        </Grid >

      </Grid>


    </>

  );
}

export default Content;
