import { Grid } from '@mui/material';
import React from 'react';
import { useStyles } from './Styles';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import furniture1 from "../../Assets/Images/furniture1.jpeg";
import furniture2 from "../../Assets/Images/furniture2.jpeg";
import furniture3 from "../../Assets/Images/furniture3.jpeg";
import furniture4 from "../../Assets/Images/furniture4.jpeg";
import furniture5 from "../../Assets/Images/furniture5.jpeg";
import furniture6 from "../../Assets/Images/furniture6.jpeg";

const InteriorDisplay = () => {
    const classes = useStyles();

const products=[
    {
        title:"Interior Display",
        icon:<KeyboardDoubleArrowRightIcon/>,
        image:furniture1,
    },
    {
        title:"Interior Display",
        icon:<KeyboardDoubleArrowRightIcon/>,
        image:furniture2,
    },
    {
        title:"Interior Display",
        icon:<KeyboardDoubleArrowRightIcon/>,
        image:furniture3,
    },
    {
        title:"Interior Display",
        icon:<KeyboardDoubleArrowRightIcon/>,
        image:furniture4,
    },
    {
        title:"Interior Display",
        icon:<KeyboardDoubleArrowRightIcon/>,
        image:furniture5,
    },
    {
        title:"Interior Display",
        icon:<KeyboardDoubleArrowRightIcon/>,
        image:furniture6,
    },
]

    return (
        <Grid container spacing={2} item xs={12} >
            <Grid className={classes.DesignContainer}>
                {
                    products.map( (product) =>(
                        <Grid className={classes.cart}>
                            <div style={{display:"flex", justifyContent:"space-between", width:"300px", padding:"10px"}}>
                                <div>{product.title}</div>
                                <div>{product.icon}</div>
                            </div>
                            <div>
                                <img src={product.image} alt=""  style={{width:"350px", height:"200px", margin:"20px"}}/>
                            </div>
                        </Grid>
                    ))
                }
            </Grid>

        </Grid>
    );
};

export default InteriorDisplay;