import React from 'react';
import SingleProduct from "../SingleProduct/SingleProduct";
import './Products.css'

const Products = ({product, page, loading}) => {

    return (
        <div className="products">
            <SingleProduct product={product} page={page} loading={loading}/>
        </div>
    );
};

export default Products;