import React from 'react';
import { Grid } from '@mui/material';
import { useStyles } from './Styles';

const ProductInfo = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={2} item xs={12} className={classes.mainCart}>
            Clickable
        </Grid>
    );
};

export default ProductInfo;