import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {Button, Card, Form} from "react-bootstrap";
import './DetailProduct.css';

const DetailProduct = () => {

    const {id} = useParams();
    const emailRef = useRef();
    const commentRef = useRef();
    const [data, setData] = useState({});
    const [email, setEmail] = useState(null);
    const [text, setText] = useState(null);
    const [comments, setComments] = useState([]);

    const submitComment = () => {
        axios.post('http://localhost:4000/comments', {
            email: email,
            text: text
        }).then()
        emailRef.current.value = null;
        commentRef.current.value = null;
    }

    useEffect(() => {
        axios.get(`http://localhost:4000/product/${id}`).then(response => setData(response.data)).catch(error => console.log(error))
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:4000/comments`).then(response => setComments(response.data)).catch(error => console.log(error))
    }, [comments])

    return (
        <div style={{height: '500px'}}>
            <Card className={'product'} style={{width: '18rem', display: "inline-block"}}>
                <Card.Img variant="top" src={`/${data.img}`}/>
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title
                        the card's content.
                    </Card.Text>
                    <div className="price">{`$${data.price}`}</div>
                </Card.Body>
            </Card>
            <div className="comment">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onChange={event => setEmail(event.target.value)} ref={emailRef}
                                      placeholder="name@example.com"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" onChange={event => setText(event.target.value)} ref={commentRef}
                                      rows={3}/>
                    </Form.Group>
                    <Button variant={'primary'} onClick={submitComment}>
                        send
                    </Button>
                </Form>
            </div>
            <div className="comment-list">
                {
                    !comments.length ? <div>No comment yet</div> :
                    comments.map(value =>
                        <div className={"single-comment"}>
                            <div className="email-comment">{value.email}</div>
                            <div className="text-comment">{value.text}</div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default DetailProduct;