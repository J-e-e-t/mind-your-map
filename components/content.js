import { Container, Box } from "@mui/material";
import { typography } from "@mui/system";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import demopic from "../public/1.png";

function Content() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Image src={demopic} alt="demopic" width="300em" height="300em" />
        </Grid>
        <Grid item xs={6}>
          <Grid
            container
            direction="row"
            justify="centre"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} >
              <h1> Why Mindmap</h1>
            </Grid>
            <Grid item xs={12}>
              <p>lorem ipsum</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Content;
