import React from 'react';
import useStyles from "./stylePage404";

const Page404 = () => {

    const classes = useStyles()
    return (
        <div className={classes['page404']}>
            404
        </div>
    );
};

export default Page404;