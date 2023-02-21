import React from 'react';
import { Grid, Box } from '@mui/material';
import { useStyles } from './Styles';

const About = () => {
    const classes = useStyles();
    return (
        <Grid >
            <Grid container item xs={12} style={{ margin: "auto" }}>
                <Grid item xs={12} >
                    <div className={classes.menuPart}>
                        <div className={classes.mainDiv}>
                            <p className={classes.headerText}>ABOUT US</p>
                            <p className={classes.subHeading}>We are interior design agency with
                                a distinctive individual approach</p>
                            <Grid className={classes.subHeading1}>
                                Furnka is a full range home interior design & Furniture company focused in creating great
                                experiences by a delicate balance of beauty, comfort & efficiency. Our philosophy is simple, no
                                matter the size of the project, the goal is always the same: To make your personal style shine.
                                We provide new inspiration and ideas, while incorporating elements of you into every concept
                                we present.
                            </Grid>
                            <Grid className={classes.subHeading2}>
                                Each project is designed with a non-compromising attitude and a close attention to detail
                                achieving a seamless flow through design, materials, fittings and finishes that is timelessly
                                on-trend, embracing simplicity, minimalism & functionality . So, don’t worry if you are unsure of
                                what you want. We’re here to help find your style and develop your project into a space that are
                                understated yet sophisticated, straightforward, elegant, functional and fun. Balance light, space
                                and color factor into every design, creating a timeless effect that you utterly adore
                            </Grid>
                            <Grid className={classes.subHeading3}>
                                With highly experienced designers & craftsmen throughout India, no project is too big or too
                                small. We welcome enquiries and would love to find out how we can help with your unique
                                project.
                            </Grid>
                        </div>
                        <div style={{marginRight:"50px"}}>
                            <Box className={classes.BoxContent}>
                                <Box className={classes.smallBox}></Box>
                                <Box className={classes.smallBox}></Box>
                                <Box className={classes.smallBox}></Box>
                                <Box className={classes.smallBox}></Box>
                            </Box>
                        </div>
                    </div>

                </Grid>
                {/* <Grid item xs={4}>
                    <Box className={classes.BoxContent}>
                        <Box className={classes.smallBox}></Box>
                        <Box className={classes.smallBox}></Box>
                        <Box className={classes.smallBox}></Box>
                        <Box className={classes.smallBox}></Box>
                    </Box>
                </Grid> */}
            </Grid>

        </Grid>
    );
};

export default About;