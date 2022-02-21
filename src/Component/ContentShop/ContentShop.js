import React, {useEffect, useState} from 'react';
import {Col, Container, Dropdown, Pagination, Row} from "react-bootstrap";
import {BsChevronDown, BsFillCartFill} from "react-icons/bs";
import Products from "../Products/Products";
import axios from "axios";
import {useTranslation} from "react-i18next";
import './ContentShop.css'

const ContentShop = () => {

    const {t} = useTranslation()
    const [product, setProduct] = useState([]);
    const [page, setPage] = useState(1);
    const [stateSort, setStateSort] = useState('ASC');

    useEffect(() => {
        axios.get('http://localhost:4000/product').then(response => setProduct(response.data))
    }, [product])

    const productWithSort = (state) => {
        if (state === 'ASC') {
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
                <Row>
                    <div className="content-shop">
                        <div className="header-shop">
                            <h1>{t('PageContent Title')}</h1>
                        </div>
                        <div className="header-content-shop">
                                <p>{t('PageContent Showing Detail')}</p>
                                <Dropdown>
                                    <i>
                                        <BsFillCartFill/>
                                    </i>
                                    <span>{JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).length : 0}</span>
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                        {stateSort === 'ASC' ? t('PageContent Sort ASC') : t('PageContent Sort DES')}
                                        <i>
                                            <BsChevronDown/>
                                        </i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item
                                            onClick={() => setStateSort('ASC')}>{t('PageContent Sort ASC')}</Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => setStateSort('DES')}>{t('PageContent Sort DES')}</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
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
                </Row>
            </Container>
        </section>
    );
};

export default ContentShop;