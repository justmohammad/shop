import React from 'react';
import {Button, Container} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import useStyles from "./StyleBlog";

const Blog = () => {

    const classes = useStyles()
    const {t} = useTranslation()
    return (
        <section>
            <div className={classes.blog}>
                <Container>
                    <h2>{t('Blog Title')}</h2>
                    <p>{t('Blog Description')}</p>
                    <Button variant="outline-primary">{t('Blog Button 1')}</Button>
                    <Button>{t('Blog Button 2')}</Button>
                </Container>
            </div>
        </section>
    );
};

export default Blog;