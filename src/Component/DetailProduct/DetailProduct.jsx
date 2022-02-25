import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import {Button, Card, Form} from "react-bootstrap";
import useStyles from "./StyleDetailProduct";
import InnerImageZoom from "react-inner-image-zoom";

const DetailProduct = () => {

    const classes = useStyles();
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
    }, [])

    return (
        <div style={{height: '500px'}}>
            <Card style={{width: '18rem', display: "inline-block"}}>
                <InnerImageZoom className={classes.iiz__hint}
                    src={`/${data.img}`}
                    zoomSrc={`/${data.img}`}
                    zoomType="hover"
                    zoomPreload={true}
                />
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title
                        the card's content.
                    </Card.Text>
                    <div>{`$${data.price}`}</div>
                </Card.Body>
            </Card>
            <div className={classes.comment}>
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
            <div className={classes.commentList}>
                {
                    !comments.length ? <div>No comment yet</div> :
                    comments.map(value =>
                        <div className={classes.singleComment}>
                            <div className={classes.emailComment}>{value.email}</div>
                            <div className={classes.textComment}>{value.text}</div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default DetailProduct;