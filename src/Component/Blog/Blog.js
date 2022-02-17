import React from 'react';
import {Button, Container} from "react-bootstrap";
import './Blog.css'

const Blog = () => {
    return (
        <section>
            <div className="blog">
                <Container>
                    <h2>Ready to take your next step?</h2>
                    <p>Grow your audience and build a profitable online business.</p>
                    <Button variant="outline-primary">Learn More</Button>
                    <Button>Get Started Today</Button>
                </Container>
            </div>
        </section>
    );
};

export default Blog;