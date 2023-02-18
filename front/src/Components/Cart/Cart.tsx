import { Grid, Box } from '@mui/material';
import React from 'react';
import { useStyles } from './Styles';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Cart = () => {
    const classes = useStyles();
    const items=[
        {
            title:"Home Interior",
            icon:<ArrowCircleRightIcon/>,
            details:"Elegant affordable home interior solutions"
        },
        {
            title:"Home Interior",
            icon:<ArrowCircleRightIcon/>,
            details:"Elegant affordable home interior solutions"
        },
        {
            title:"Home Interior",
            icon:<ArrowCircleRightIcon/>,
            details:"Elegant affordable home interior solutions"
        },
        {
            title:"Home Interior",
            icon:<ArrowCircleRightIcon/>,
            details:"Elegant affordable home interior solutions"
        },
    ]
    return (
        <div>
            <Grid container spacing={2} item xs={12} >
                <Grid className={classes.mainCart}>
                    <Box className={classes.menuPart}>
                        {
                            items.map( (item) =>(
                                <Box className={classes.yellowCart}>
                                <div>
                                    <Grid className={classes.HeadText}>
                                        {item.title}
                                    </Grid>
                                    <p className={classes.pText}> {item.details}</p>
                                </div>
                                <div style={{ marginTop: "30px" }}>
                                    {item.icon} 
                                </div>
                            </Box>
                            ))
                        }
                      
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cart;