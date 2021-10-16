import React from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListAltIcon from "@mui/icons-material/ListAlt";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Paper } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import Header from "./header";
import { paperClasses } from "@mui/material";
function content() {
  return (
    <>
      <Grid container>
        <Divider />
        <Grid container item md={3} direction="column">
          <Divider />
          <Grid sx={{ padding: 3 }}>YOUR DASHBOARD</Grid>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="Work Spaces"
            >
              <Typography>Work Spaces</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem button key={""}>
                  <ListItemText primary={"PHYSICS"} />
                </ListItem>
                <ListItem button key={""}>
                  <ListItemText primary={"MATH"} />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <List>
            <ListItem button key={"todo"}>
              <ListItemText primary={"TO-DO"} />
              <ListItemIcon>
                <ListAltIcon></ListAltIcon>
              </ListItemIcon>
            </ListItem>
            <Divider />
            <ListItem button key={"notes"}>
              <ListItemText primary={"NOTES"} />
              <ListItemIcon>
                <NoteAltIcon></NoteAltIcon>
              </ListItemIcon>
            </ListItem>
          </List>
          <Divider />
        </Grid>
        <Grid container item md={9} direction="column">
          <Grid item>
            <Paper sx={{ padding: 2 }}>XYZ WORKPLACE</Paper>
          </Grid>
          <Grid item container spacing={3}>
            <Grid item>
              <Card sx={{ margin: 2 }}>
                <CardMedia
                  component="img"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="Theme 1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    THEME 1
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Create</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item>
              <Card sx={{ margin: 2 }}>
                <CardMedia
                  component="img"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="THEME 2"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    THEME 2
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Create</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Grid item>
            
          </Grid>
          <Grid item>

          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default content;
