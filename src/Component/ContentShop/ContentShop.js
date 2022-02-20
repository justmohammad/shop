import React, {useEffect, useState} from 'react';
import {Col, Container, Dropdown, Pagination} from "react-bootstrap";
import {BsChevronDown, BsFillCartFill} from "react-icons/bs";
import Products from "../Products/Products";
import './ContentShop.css'
import axios from "axios";
import {useTranslation} from "react-i18next";

const ContentShop = () => {

    const {t} = useTranslation()
    const [product, setProduct] = useState([]);
    const [page, setPage] = useState(1);
    const [stateSort, setStateSort] = useState(t('PageContent Sort ASC'));

    useEffect(() => {
        axios.get('http://localhost:4000/product').then(response => setProduct(response.data))
    }, [product])

    const productWithSort = (state) => {
        if (state === t('PageContent Sort ASC')) {
            return product.sort((a, b) => a.price - b.price)
        } else {
            return product.sort((a, b) => b.price - a.price)
        }
    }

    const calculatePage = (product) => {
        if (product.length % 8 === 0) {
            return product.length / 8;
        } else {
            return Math.floor((product.length) / 8 + 1);
        }
    }

    return (
        <section>
            <Container>
                <div className="content-shop">
                    <div className="header-shop">
                        <h1>{t('PageContent Title')}</h1>
                    </div>
                    <div className="header-content-shop">
                        <Col sm={8}>
                            <p>{t('PageContent Showing Detail')}</p>
                        </Col>
                        <Col sm={4}>
                            <Dropdown>
                                <i>
                                    <BsFillCartFill/>
                                </i>
                                <span>{JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).length : 0}</span>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    {stateSort}
                                    <i>
                                        <BsChevronDown/>
                                    </i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        onClick={() => setStateSort(t('PageContent Sort ASC'))}>{t('PageContent Sort ASC')}</Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={() => setStateSort(t('PageContent Sort DES'))}>{t('PageContent Sort DES')}</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </div>
                    <Products product={productWithSort(stateSort)} page={page}/>
                </div>

                <div className="pagination">
                    {
                        new Array(calculatePage(product)).fill(0).map((value, index) =>
                            <Pagination.Item active={(index + 1) === page}
                                             onClick={() => setPage(index + 1)}>{index + 1}</Pagination.Item>
                        )
                    }
                </div>
            </Container>
        </section>
    );
};

export default ContentShop;