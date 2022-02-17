import React from 'react';
import {Button, Col, Placeholder} from "react-bootstrap";
import './SingleProduct.css'

const SingleProduct = ({product, page,loading}) => {

    if (loading === true) {

        const i = [1, 2, 3, 4, 5, 6]
        return (
            <>
                {
                    i.map(() =>
                        <Col md={4} aria-hidden={true} className={'placeholder-group'}>
                            <Placeholder as="p" animation="wave">
                                <Placeholder xs={8}/>
                            </Placeholder>
                            <Placeholder as="p" animation="wave">
                                <Placeholder xs={4}/>
                            </Placeholder>
                            <Placeholder as="p" animation="wave">
                                <Placeholder xs={3}/>
                            </Placeholder>
                            <Placeholder as="p" animation="wave">
                                <Placeholder xs={6}/>
                            </Placeholder>
                            <Placeholder as="p" animation="wave">
                                <Placeholder xs={10}/>
                            </Placeholder>
                        </Col>

                    )
                }
            </>
        )
    } else {
        return (
            <>
                {
                    product.slice((page - 1) * 6, page * 6).map(value =>
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
}

export default SingleProduct;