import React from 'react';
import { useStyles } from './Styles';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';

const LetterNews = () => {
    // const classes=useStyles();
    return (
        <Grid container item xs={12}>
            <Grid style={{ width: "100%", height: "150px", margin: "auto" }}>
                <Box style={{ border: "1px solid gray", borderRadius: "20px", height: "80px", width: "80%", margin: "auto", padding: "6px" }}>
                    <div style={{ display: "flex", justifyContent: "center",height: "80px" }}>
                        <div style={{
                            width: '30%', margin: "10px 10px 10px 10px", height: "80px"
                        }}>
                            <h5 style={{ margin: "0px", textAlign: "justify", color: "black", fontSize:"15px" }}>Newsletter Sign Up</h5>
                            <p style={{ margin: "3px", textAlign: "justify",color: "gray", fontSize:"14px"}}>
                                Sign up and stay updated on the latest in interior
                                decor, events & Discounts & offers
                            </p>
                        </div>
                        <div style={{ width: '50%', margin: "auto" }}>
                            <input type="search" placeholder='Your Email Id' style={{ width: "300px", height: " 35px ", color: "gray" }} />
                            <button style={{
                                backgroundColor: "yellow", color: "black", margin: "10px", padding: "7px",
                                border: " 3px solid yellow", borderRadius: "6px", fontSize:"12px"
                            }}>SUBSCRIBE</button>
                        </div>
                    </div>
                </Box>

            </Grid>
        </Grid >
    );
};

export default LetterNews;