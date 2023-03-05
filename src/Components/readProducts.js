import axios from "axios";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
    const [apidata, setApiData] = useState([]);
    const navigate = useNavigate();




    const callGetApi = async () => {
        const response = await axios.get('https://63be5b31e348cb07620d2464.mockapi.io/products');
        console.log('Response:',response);
        setApiData(response.data);
    }

    const deleteProduct = async (id) => {
        await axios.delete(`https://63be5b31e348cb07620d2464.mockapi.io/products/${id}`)
        callGetApi();    
    }

    const updateProduct = ({id, product, model, unit, price}) => {
        localStorage.setItem('id', id);
        localStorage.setItem('product', product);
        localStorage.setItem('model', model);
        localStorage.setItem('unit',unit);
        localStorage.setItem('price', price);
        navigate("/update");
    };
    // console.log('updateProduct:',updateProduct);


    useEffect(()=>{
        callGetApi();
    },[]);

    return(
        <>
            <div classmodel="center"><br/>
                <h4 className="align"><strong>Detials for products</strong></h4><br/>
            </div>
            <Table responsive="sm" classmodel="container">
                <thead>
                    <tr>
                        <th>SI.No</th>
                        <th>Product</th>
                        <th>Model</th>
                        <th>Unit</th>
                        <th>Price</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        apidata.map(values => (
                            <tr key={values.id}>
                                <td>{values.id}</td>
                                <td>{values.product}</td>
                                <td>{values.model}</td>
                                <td>{values.unit}</td>
                                <td>{values.price}</td>
                                <td><Button onClick={() => updateProduct(values)} variant="warning">Update</Button></td>
                                <td><Button onClick={() => deleteProduct(values.id)} variant="danger">Delete</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    );
};

export default AllProducts;