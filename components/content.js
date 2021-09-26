import { Container, Box } from "@mui/material";
import { typography } from "@mui/system";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function Content() {
  return (
    <>
      <Container>
        <Grid container>
          <Grid item>
              <a>Hello</a>
          </Grid>
        </Grid>
        <Grid container>
         <a> world</a>
        </Grid>
      </Container>
    </>
  );
}

export default Content;
