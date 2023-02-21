import React from 'react';
import { Grid } from '@mui/material';
import { useStyles } from './Styles';
import kitchen from "../../Assets/Images/kitchen.png";
import bedroom from "../../Assets/Images/bedroom.png";
import dinnerTable from "../../Assets/Images/dinner-table.png";
import refurbish from "../../Assets/Images/building.png";
import interior from "../../Assets/Images/interior-design.png";


const Platform = () => {
    const classes = useStyles();
    const products = [
        {
            title: "Living/ Dining Room",
            icon:dinnerTable,
            details: "TV unit,TV Back Paneling Bar Unit,Book shelf Showcase",
        },
        {
            title: "Bedroom",
            icon: bedroom ,
            details: "TWardrobes,TV unit,Storage Bed,Dressing unit, Study Unit,Kids bunker beds.",
        },
        {
            title: "Kitchen",
            icon:kitchen,
            details: "Counter tops, Storages Paneling,accessories,Pantry pull out",
        },
        {
            title: "Interior Design",
            icon: interior,
            details: "Wall Paneling, Lighting also Ceiling, civil work furnishing, Appliances",
        },
        {
            title: "Home Refurbish",
            icon: refurbish,
            details: "Kitchen/ bathroom refurbish Tilling, plumbing, electrical Painting, Deep clean",
        },
    ]
    return (
        <div>
            <Grid container item xs={12} className={classes.root}>
                <Grid item xs={2}>
                    <div style={{ fontSize: "40px", fontWeight: "600", textAlign:"center", marginTop:"105px" }}>360<span>&deg;</span></div>
                </Grid>
                <Grid item xs={10} >
                    <div style={{textAlign:"left", marginLeft:"20px"}}>
                    Complete one stop full range home interior solution under one mega platform
                    </div>
                    <Grid className={classes.DesignContainer}>
                    {
                        products.map((product) => (
                            <Grid className={classes.boxDiv}>
                                <div style={{width:"70px", margin:"auto"}}>
                                    <img src={product.icon} alt=""  style={{width:"40px", textAlign:"center"}}/>
                                </div>
                                <div style={{width:"200px", margin:"1px"}}>
                                    <p style={{textAlign:"justify", margin:"2px 0px 10px 0px"}}>{product.title}</p>
                                    <p style={{margin:"0px", fontSize:"12px", textAlign:"left", color:"gray"}}>{product.details}</p>
                                </div>
                            </Grid>
                        ))
                    }
                    </Grid>

                </Grid>
            </Grid>
        </div>
    );
};

export default Platform;