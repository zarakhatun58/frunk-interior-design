import React from 'react';
import { Grid, Box } from '@mui/material';
import { useStyles } from './Styles';
import furniture8 from "../../Assets/Images/furniture8.jpeg";
import ImageGallery from './ImageGallery';

const Display = () => {
    const classes = useStyles()
    return (
        <Grid>
            <Grid container spacing={2} item xs={12} className={classes.menuPart}>
                    <Box className={classes.displayBox}>
                        {/* <img src={furniture8} alt=""  className={classes.displayImg} /> */}
                        <ImageGallery/>
                    </Box>
                    <Box>
                    <Box className={classes.menuPart}>
                        <Box className={classes.bigBox}></Box>
                        <Box className={classes.smallBox}></Box>
                    </Box>
                    <Box className={classes.menuPart}>
                    <Box className={classes.smallBox}></Box>
                        <Box className={classes.bigBox}></Box>
                    </Box>
                    </Box>
                
            </Grid>
        </Grid>
    );
};

export default Display;