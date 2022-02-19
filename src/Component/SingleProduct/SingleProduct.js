import React from 'react';
import {Button, Col} from "react-bootstrap";
import './SingleProduct.css'
import Loading from "../Loading/Loading";
import axios from "axios";

const SingleProduct = ({product, page, loading}) => {

    const saveToCart = (value) => {
        let arrayLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];

        if (!value.added) {
            localStorage.setItem('cart', JSON.stringify([...arrayLocalStorage, value]))
        } else {
            const index = JSON.parse(localStorage.getItem('cart')).findIndex((item) => {
                if (item.id === value.id) return true
            })
            arrayLocalStorage.splice(index, 1)
            localStorage.setItem('cart', JSON.stringify([...arrayLocalStorage]))
        }

        axios.put(`http://localhost:4000/product/${value.id}`, {
            "id": value.id,
            "img": value.img,
            "title": value.title,
            "price": value.price,
            "added": !value.added
        }).then(response => response.data).catch(error => console.log(error))
    }

    if (loading === true) {
        return <Loading/>
    } else {
        return (
            <>
                {
                    product.slice((page - 1) * 6, page * 6).map(value =>
                        <Col md={"4"} className="product">
                            <img src={value.img} alt=""/>
                            <p>{value.title}</p>
                            <div className="price">{`$${value.price}`}</div>
                            <Button
                                onClick={() => saveToCart(value)}>{value.added ? 'Remove From Cart' : 'Add To Cart'}</Button>
                        </Col>
                    )
                }
            </>
        );
    }
}

export default SingleProduct;