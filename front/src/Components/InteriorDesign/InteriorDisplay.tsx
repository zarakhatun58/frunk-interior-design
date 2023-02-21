import { Grid, Box } from '@mui/material';
import React,{useState,useEffect} from 'react';
import { useStyles } from './Styles';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import furniture1 from "../../Assets/Images/furniture1.jpeg";
import furniture2 from "../../Assets/Images/furniture2.jpeg";
import furniture3 from "../../Assets/Images/furniture3.jpeg";
import furniture4 from "../../Assets/Images/furniture4.jpeg";
import furniture5 from "../../Assets/Images/furniture5.jpeg";
import furniture6 from "../../Assets/Images/furniture6.jpeg";
import axios from "axios";

const InteriorDisplay = () => {
    const classes = useStyles();
    const [productss, setProductss] = useState([]);


    useEffect(() => {
        const getProducts = async () => {
          try {
            const res = await axios.get(
             
               "http://localhost:4001/api/products"
            );
            // console.log(res)
            setProductss(res.data);
          } catch (err) {}
        };
        getProducts();
      }, []);
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
    ]

    return (
        <Grid container spacing={2} item xs={12} style={{ paddingTop: "10px" }}>
            <Grid className={classes.DesignContainer}>
                {
                  productss && productss.map((product:any) => (
                    <div key={product._id}>
                        <Grid className={classes.cart} >
                            <div className={classes.TextCart}>
                                <div>{product.title}</div>
                                <div style={{ paddingLeft: "15px" }}><KeyboardDoubleArrowRightIcon /></div>
                            </div>
                            <div>
                                <img src={product.img} alt="" style={{ width: "370px", height: "230px", }} />
                            </div>
                        </Grid>
                    </div>
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