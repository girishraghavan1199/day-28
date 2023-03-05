import React  from "react";
import '../App.css';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import axios from 'axios';
import {useNavigate } from "react-router-dom";
import { useFormik} from "formik";
import * as Yup from 'yup';

const CreateProduct =() => {
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            product: '',
            model:'',
            price: '',
            unit: ''
        },
        validationSchema: Yup.object({
            product:Yup.string().required("Enter the product name"),
            model:Yup.string().required('Enter the product model'),
            price:Yup.string().required("Enter the product price"),
            unit:Yup.number().required("Enter the product unit")
        }),
        onSubmit: values => {
            postProduct(values);
            console.log("Values data:",values);
        }
    });

    const postProduct = async(value) => {
        let response = await axios.post("https://63be5b31e348cb07620d2464.mockapi.io/products", value);
        // console.log('value:', value);
        if(response.status===201){
            navigate("/all");
        };
    };
        

    return(
        <>
            <div className="center">
                <h2>Create Products</h2>
            </div>
            <br/>
            <Form className="container form" onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3 col-md-4">
                    <Form.Label for="product">Product</Form.Label>
                    <input
                        id="product"
                        name="product"
                        type="text"
                        className="form-control"
                        placeholder="Enter the product name"
                        onChange={formik.handleChange}
                        value={formik.values.product}
                    />
                    {formik.touched.product && formik.errors.product?(<div style={{color:'red'}}>{formik.errors.product}</div>):null}
                </Form.Group>

                <Form.Group className="mb-3 col-md-4">
                    <Form.Label for="model">Model</Form.Label>
                    <input
                        id="model"
                        name="model"
                        type="text"
                        className="form-control"
                        placeholder="Enter the product model"
                        onChange={formik.handleChange}
                        value={formik.values.model}
                    />
                    {formik.touched.model && formik.errors.model?(<div style={{color:'red'}}>{formik.errors.model}</div>):null}
                </Form.Group>

                <Form.Group className="mb-3 col-md-4">
                    <Form.Label for="unit">Units</Form.Label>
                    <input
                        id="unit"
                        name="unit"
                        type="number"
                        className="form-control"
                        placeholder="Enter the product quantity"
                        onChange={formik.handleChange}
                        value={formik.values.unit}
                    />
                    {formik.touched.unit && formik.errors.unit?(<div style={{color:'red'}}>{formik.errors.unit}</div>):null}
                </Form.Group>

                <Form.Group className="mb-3 col-md-4">
                    <Form.Label for="price">Price</Form.Label>
                    <input
                        id="price"
                        name="price"
                        type="text"
                        className="form-control"
                        placeholder="Enter the product price"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                    />
                    {formik.touched.price && formik.errors.price?(<div style={{color:'red'}}>{formik.errors.price}</div>):null}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button><br/>

            </Form>


        </>
    );
};

export default CreateProduct;