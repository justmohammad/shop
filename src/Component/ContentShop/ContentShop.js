import React from 'react';
import {Container, Dropdown, Pagination} from "react-bootstrap";
import {BsChevronDown} from "react-icons/bs";
import Products from "../Products/Products";
import './ContentShop.css'

const ContentShop = () => {

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
                    <Products/>
                </div>

                <div className="pagination">
                            <Pagination.Item>1</Pagination.Item>
                            <Pagination.Item>1</Pagination.Item>
                            <Pagination.Item>1</Pagination.Item>
                            <Pagination.Item>1</Pagination.Item>
                            <Pagination.Item>1</Pagination.Item>
                </div>
            </Container>
        </section>
    );
};

export default ContentShop;