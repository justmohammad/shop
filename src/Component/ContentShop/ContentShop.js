import React, {useEffect, useState} from 'react';
import {Container, Dropdown, Pagination} from "react-bootstrap";
import {BsChevronDown} from "react-icons/bs";
import Products from "../Products/Products";
import './ContentShop.css'
import axios from "axios";

const ContentShop = () => {

    const [product, setProduct] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get('http://localhost:4000/product').then(response => setProduct(response.data))
    }, [])

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
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                sort
                                <i>
                                    <BsChevronDown/>
                                </i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>Ascending</Dropdown.Item>
                                <Dropdown.Item>Descending</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <Products product={product} page={page}/>
                </div>

                <div className="pagination">
                    {
                        new Array(calculatePage(product)).fill(0).map((value, index) =>
                            <Pagination.Item onClick={() => setPage(index + 1)}>{index + 1}</Pagination.Item>
                        )
                    }
                </div>
            </Container>
        </section>
    );
};

export default ContentShop;