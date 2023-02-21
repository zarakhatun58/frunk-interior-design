import React from 'react';
import { Grid } from '@mui/material';
import { useStyles } from './Styles';

const ProductInfo = () => {
    const classes = useStyles();
    return (
        <Grid container item xs={12} >
            <Grid className={classes.mainCart}>

                Clickable
            </Grid>
            <Grid>
                <div className={classes.stickyIcon}>
                    <a href="https://www.instagram.com/?hl=en" className={classes.Whatsapp}><i className="fab fa-whatsapp"></i>  </a>
                    <a href="https://www.instagram.com/?hl=en" className={classes.Instagram}><i className="fab fa-instagram"></i>  </a>
                    <a href="https://www.facebook.com/" className={classes.Facebook}><i className="fab fa-facebook-f"> </i> </a>
                    <a href="https://aboutme.google.com/u/0/?referer=gplus" className={classes.Google}><i className="fab fa-google-plus-g"> </i>  </a>
                    <a href="https://www.youtube.com/" className={classes.Youtube}><i className="fab fa-youtube"></i> </a>
                    <a href="https://twitter.com/login" className={classes.Twitter}><i className="fab fa-twitter"> </i> </a>
                </div>
            </Grid>
        </Grid>
    );
};

export default ProductInfo;