import React, {useEffect, useState} from 'react';
import {Container, Dropdown, Pagination} from "react-bootstrap";
import {BsChevronDown, BsFillCartFill} from "react-icons/bs";
import Products from "../Products/Products";
import './ContentShop.css'
import axios from "axios";

const ContentShop = () => {

    const [product, setProduct] = useState([]);
    const [page, setPage] = useState(1);
    const [stateSort, setStateSort] = useState('Ascending');
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            axios.get('http://localhost:4000/product').then(response => setProduct(response.data))
            setLoading(false)
        }, 1000);
    }, [product])

    const productWithSort = (state) => {
        if (state === 'Ascending') {
            return product.sort((a, b) => a.price - b.price)
        } else {
            return product.sort((a, b) => b.price - a.price)
        }
    }

    const calculatePage = (product) => {
        if (product.length % 6 === 0) {
            return product.length / 6;
        } else {
            return product.length / 6 + 1;
        }
    }

    return (
        <section>
            <Container>
                <div className="content-shop">
                    <div className="header-shop">
                        <h1>SHOP</h1>
                    </div>
                    <div className="header-content-shop">
                        <p>Showing 1–6 of 9 results</p>
                        <Dropdown>
                            <i>
                                <BsFillCartFill/>
                            </i>
                            <span>{JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).length : 0}</span>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {stateSort}
                                <i>
                                    <BsChevronDown/>
                                </i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setStateSort('Ascending')}>Ascending</Dropdown.Item>
                                <Dropdown.Item onClick={() => setStateSort('Descending')}>Descending</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <Products product={productWithSort(stateSort)} page={page} loading={loading}/>
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