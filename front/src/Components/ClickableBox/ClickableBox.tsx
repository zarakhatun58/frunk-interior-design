import React from 'react';
import { Grid } from '@mui/material';
import { useStyles } from './Styles';

const ClickableBox = () => {
    const classes=useStyles()
    return (
        <Grid className={classes.root}>
            <Grid container spacing={2} item xs={12} >
                <Grid item xs={6} className={classes.box}></Grid>
                <Grid item xs={6} className={classes.box}></Grid>
            </Grid>

        </Grid>
    );
};

export default ClickableBox;