import React, {useContext} from 'react';
import {Button, Card, Col} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {BsSuitHeart, BsSuitHeartFill} from "react-icons/bs";
import ThemeContext from "../../Contexts/ThemeContext";
import useStyles from "./StyleSingleProduct";

const SingleProduct = ({product, page}) => {

    const {t} = useTranslation()
    const themeValues = useContext(ThemeContext)
    const classes = useStyles(themeValues.theme)
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
            "added": !value.added,
            "like": value.like
        }).then(response => response.data).catch(error => console.log(error))
    }

    const setLike = (value) => {
        axios.put(`http://localhost:4000/product/${value.id}`, {
            "id": value.id,
            "img": value.img,
            "title": value.title,
            "price": value.price,
            "added": value.added,
            "like": !value.like
        }).then(response => response.data).catch(error => console.log(error))
    }

    return (
        <>
            {
                product.slice((page - 1) * 8, page * 8).map(value =>
                    <Col md={"3"} className={classes.product}>
                        <Card style={{width: '18rem'}}>
                            <Link to={`/detailProduct/${value.id}`}>
                                <Card.Img variant="top" src={value.img}/>
                            </Link>
                            <Card.Body>
                                <Card.Title className={classes.cardTitle}>{value.title}
                                    <button onClick={() => setLike(value)}>
                                        <i>
                                            {value.like ? <BsSuitHeartFill/> : <BsSuitHeart/>}
                                        </i>
                                    </button>
                                </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title
                                    the card's content.
                                </Card.Text>
                                <div className={classes.price}>{`$${value.price}`}</div>
                                <Button variant={classes.buttonSell}
                                        onClick={() => saveToCart(value)}>{value.added ? t('Button Product Remove') : t('Button Product Add')}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            }
        </>
    );
}

export default SingleProduct;