import React, {useEffect, useState} from 'react';
import {Button, Col} from "react-bootstrap";
import './SingleProduct.css'
import axios from "axios";

const SingleProduct = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/product').then(response => setData(response.data))
    }, [data])
    return (
        <>
            {
                data.slice(0,6).map(value =>
                    <Col md={"4"} className="product">
                        <img src={value.img} alt=""/>
                        <p>{value.title}</p>
                        <div className="price">{value.price}</div>
                        <Button>Add To Cart</Button>
                    </Col>
                )
            }
        </>
    );

}

export default SingleProduct;