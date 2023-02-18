import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useStyles } from './Styles';
import { Grid } from '@mui/material';
import { Grid3x3Rounded } from '@mui/icons-material';


const Header = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.header}>
            <Box className={classes.upDiv}>
                <Grid className={classes.signPart}>
                    <p>Partner with us</p>
                    <p>Login/Register</p>
                </Grid>

            </Box>
            <Box>
                <Grid container spacing={2} item xs={12}>
                    <Grid item xs={2} >
                        <IconButton>
                            Frunk
                        </IconButton>
                    </Grid>
                    <Grid item xs={10} style={{ display: "flex", justifyContent: "flex-end" }}>
                        <div className={classes.menuPart}>
                            <p>
                            Home
                            </p>
                            <p>
                            Design Ideas
                            </p>
                            <p>
                            Home Interior
                            </p>
                            <p>
                            Home Interior 2
                            </p>
                            <p>
                            Home Interior 3
                            </p>
                            <p>
                            Home Interior 4
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
};

export default Header;