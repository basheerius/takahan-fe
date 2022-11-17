import React from "react";
import {AppBar, Button, IconButton, Toolbar as MuiToolbar} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import firebase from "../../firebase/firebase";

const Toolbar = () => {

    const logout = () => {
        firebase.logout()
    }

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
            <Button color="inherit" onClick={logout}>Logout</Button>
        </MuiToolbar>
    </AppBar>)
}

export default Toolbar;
