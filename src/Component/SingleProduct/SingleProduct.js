import React from 'react';
import {Button, Col} from "react-bootstrap";
import './SingleProduct.css'

const SingleProduct = ({product,page}) => {

    return (
        <>
            {
                product.slice((page-1)*6,page*6).map(value =>
                     <Col md={"4"} className="product">
                        <img src={value.img} alt=""/>
                        <p>{value.title}</p>
                        <div className="price">{`$${value.price}`}</div>
                        <Button>Add To Cart</Button>
                    </Col>
                )
            }
        </>
    );

}

export default SingleProduct;