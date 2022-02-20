import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const DetailProduct = () => {

    const {id} = useParams();
    const [data,setData] = useState({})

    axios.get(`http://localhost:4000/product/${id}`).then(response => setData(response.data)).catch(error => console.log(error))

    return (
        <div>
            <p>{data.id}</p><br/>
            <p>{data.img}</p><br/>
            <p>{data.title}</p><br/>
            <p>{data.price}</p><br/>
        </div>
    );
};

export default DetailProduct;