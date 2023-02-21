import { Grid, Box, Menu, MenuItem } from '@mui/material';
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

    const products = [
        {
            title: "Futuristic living room",
            icon: <KeyboardDoubleArrowRightIcon />,
            image: furniture1,
        },
        {
            title: "Elegant Kitchen Designs",
            icon: <KeyboardDoubleArrowRightIcon />,
            image: furniture2,
        },
        {
            title: "Luxurious Bedroom Interiors",
            icon: <KeyboardDoubleArrowRightIcon />,
            image: furniture3,
        },
        {
            title: "Kids Bedroom Design",
            icon: <KeyboardDoubleArrowRightIcon />,
            image: furniture4,
        },
        {
            title: "Space Saving Designs",
            icon: <KeyboardDoubleArrowRightIcon />,
            image: furniture5,
        },
        {
            title: "Bathroom Designs",
            icon: <KeyboardDoubleArrowRightIcon />,
            image: furniture6,
        },
    ];
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMouseOver = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Grid container spacing={2} item xs={12} style={{ paddingTop: "10px" }}>
            <Grid className={classes.DesignContainer}>
                {
                    products.map((product) => (
                        <Grid className={classes.cart}>
                            <div className={classes.TextCart}>
                                <div>{product.title}</div>
                                <div style={{ paddingLeft: "15px" }} onMouseOver={handleMouseOver}>{product.icon}</div>
                                <Menu
                                // className={classes.dropdown}
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}>
                                <MenuItem onClick={handleClose}>Futuristic living room</MenuItem>
                                <MenuItem onClick={handleClose}>Elegant Kitchen Designs</MenuItem>
                                <MenuItem onClick={handleClose}>Luxurious Bedroom Interiors</MenuItem>
                                <MenuItem onClick={handleClose}>Kids Bedroom Design</MenuItem>
                                <MenuItem onClick={handleClose}>Space Saving Designs</MenuItem>
                                <MenuItem onClick={handleClose}>Bathroom Designs</MenuItem>
                            </Menu>
                            </div>
                            <div>
                                <img src={product.image} alt="" style={{ width: "370px", height: "230px", }} />
                            </div>
                        </Grid>
                    ))
                }
            </Grid>
            <Grid style={{width:"100%",height: "60px"}}>
                <Box style={{ display: "flex", justifyContent: "center", backgroundColor:"black", color:"white", borderRadius:"20px", margin:"auto", width:"35%" }}>
                    <div>
                        Explore 100’s of possibilities! schedule a call back
                    </div>
                    <div style={{paddingLeft:"25px"}}>
                        <KeyboardDoubleArrowRightIcon />
                    </div>
                </Box>
            </Grid>

        </Grid>
    );
};

export default InteriorDisplay;