import React, {useContext, useEffect, useReducer} from 'react';
import {Button, Card, Col} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {BsSuitHeart, BsSuitHeartFill} from "react-icons/bs";
import ThemeContext from "../../Contexts/ThemeContext";
import useStyles from "./StyleSingleProduct";
import 'aos/dist/aos.css'
import AOS from 'aos'
import LikeReducer from "../../Reducers/LikeReducer";
import CartContext from "../../Contexts/CartContext";

const SingleProduct = ({product, page}) => {

    const {t} = useTranslation()
    const {theme} = useContext(ThemeContext)
    const {carts,dispatchCart} = useContext(CartContext)
    const [state, dispatchLike] = useReducer(LikeReducer, {likes: JSON.parse(localStorage.getItem('likes'))|| []})
    const classes = useStyles(theme);

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    const saveToCart = (value) => {
        if (!carts.includes(value.id)) {
        dispatchCart({
            type: 'ADD_TO_CART',
            id: value.id
        })
        } else {
            dispatchCart({
                type: 'REMOVE_FROM_CART',
                id: value.id
            })
        }
    }

    const setLike = (value) => {
        if (!state.likes.includes(value.id)) {
            dispatchLike({
                type: 'LIKE',
                id: value.id
            })
        } else {
            dispatchLike({
                type: 'DISLIKE',
                id: value.id
            })
        }
    }

    return (
        <>
            {
                product.slice((page - 1) * 8, page * 8).map(value =>
                    <Col md={"3"} className={classes.product} data-aos="fade-up">
                        <Card style={{width: '18rem'}}>
                            <Link to={`/detailProduct/${value.id}`}>
                                <Card.Img variant="top" src={value.img}/>
                            </Link>
                            <Card.Body>
                                <Card.Title className={classes.cardTitle}>{value.title}
                                    <button onClick={() => setLike(value)}>
                                        <i>
                                            {state.likes.includes(value.id) ? <BsSuitHeartFill/> : <BsSuitHeart/>}
                                        </i>
                                    </button>
                                </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title
                                    the card's content.
                                </Card.Text>
                                <div className={classes.price}>{`$${value.price}`}</div>
                                <Button variant={classes.buttonSell}
                                        onClick={() => saveToCart(value)}>{carts.includes(value.id) ? t('Button Product Remove') : t('Button Product Add')}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            }
        </>
    );
}

export default SingleProduct;