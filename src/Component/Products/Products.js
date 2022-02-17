import React from 'react';
import SingleProduct from "../SingleProduct/SingleProduct";
import './Products.css'

const Products = ({product}) => {
    return (
        <div className="products">
            <SingleProduct product={product}/>
        </div>
    );
};

export default Products;