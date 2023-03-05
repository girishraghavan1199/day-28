import { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mock_API } from "../URLData";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const UpdateProduct = () => {
    const [id, setId] = useState('');
    const [product, setProduct] = useState('');
    const [model, setModel] = useState('');
    const [unit, setUnit] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    const updateProduct = () => {
        Axios.put(Mock_API+"/"+ id, {id}, {id, product, model, unit, price});
        navigate('/read');   
    };
    // console.log('updateProduct:', updateProduct);

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setProduct(localStorage.getItem('product'));
        setModel(localStorage.getItem('model'));
        setUnit(localStorage.getItem('unit'));
        setPrice(localStorage.getItem('price'));
    },[]);

    return(
        <>
            <div className="center">
                <h2>Update Users</h2>
            </div>
            <br/>
            <Form className="container form">
                <Form.Group className="mb-3 col-md-4">
                    <Form.Label for="category">Product</Form.Label>
                    <Form.Control type="text" id="category" placeholder="product" value={product} onChange={event => setProduct(event.target.value)} required/>
                </Form.Group>

                <Form.Group className="mb-3 col-md-4">
                    <Form.Label>Model</Form.Label>
                    <Form.Control type="text" placeholder="Enter model" value={model} onChange={event => setModel(event.target.value)} required/>
                </Form.Group>

                <Form.Group className="mb-3 col-md-4">
                    <Form.Label>Units</Form.Label>
                    <Form.Control type="number" placeholder="Enter unit" value={unit} onChange={event => setUnit(event.target.value)} required/>
                </Form.Group>

                <Form.Group className="mb-3 col-md-4">
                    <Form.Label for="cost">Price</Form.Label>
                    <Form.Control type="text" id="cost" placeholder="Eg:10,000/INR" value={price} onChange={event => setPrice(event.target.value)} required/>
                </Form.Group>

                <Button variant="primary" onClick={updateProduct}>
                    Submit
                </Button><br/>

            </Form>
        </>
    );
};

export default UpdateProduct;