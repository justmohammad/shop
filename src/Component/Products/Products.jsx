import React from 'react';
import SingleProduct from "../SingleProduct/SingleProduct";
import useStyles from "./StyleProducts";

const Products = ({product, page}) => {

    const classes = useStyles()

    return (
        <div className={classes.products}>
            <SingleProduct product={product} page={page}/>
        </div>
    );
};

export default Products;