import React from 'react';
import './Loading.css'
import {Col, Placeholder} from "react-bootstrap";

const Loading = () => {

    const itemLoading = [1, 2, 3, 4, 5, 6]

    return (
        <>
            {
                itemLoading.map(() =>
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
    );
};

export default Loading;