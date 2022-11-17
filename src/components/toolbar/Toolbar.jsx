import React from "react";
import {AppBar, Button, IconButton, Toolbar as MuiToolbar} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Toolbar = () => {

    return(<AppBar position="static">
        <MuiToolbar sx={{justifyContent: 'space-between'}}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <span>Takahan</span>
            <Button color="inherit">Login</Button>
        </MuiToolbar>
    </AppBar>)
}

export default Toolbar;
