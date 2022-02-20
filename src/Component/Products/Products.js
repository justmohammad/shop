import React from 'react';
import SingleProduct from "../SingleProduct/SingleProduct";
import './Products.css'

const Products = ({product, page}) => {

    return (
        <div className="products">
            <SingleProduct product={product} page={page}/>
        </div>
    );
};

export default Products;