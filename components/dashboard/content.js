
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { ListItem } from '@mui/material';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Content() {
    const [open,setopen] =useState(true);

    return (
        <>
        {/* <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={()=> {}}>
            
        </IconButton> */}
        <Button onClick={()=> { setopen(true)}}> open</Button>
        <SwipeableDrawer
        anchor='left'
        open={open}
        onclose={()=> { setopen(false)}}
        onOpen={()=> { setopen(true)}}
        >
        <Box textAlign='center'>
        Components
        </Box>
        <List>
            <ListItem  >
                <Button onClick={()=> { setopen(false)}}> close</Button>
            </ListItem>
        </List>
           
        </SwipeableDrawer>

            
        </>
    )
}

export default Content
