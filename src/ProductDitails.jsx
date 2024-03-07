import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from './Untils';

const ProductDetails = ({ addToCart }) => {
    const { id } = useParams();
    const [data, setData] = useState({}); // Initialize data as an object
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [thumbnail, setThumbnail] = useState(data.thumbnail);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}products/${id}`);
                setData(response.data); // Set data to the fetched object
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        console.log(data);
    }, [id]); // Ensure useEffect runs when id changes

    // Render loading state
    if (loading) {
        return <div>Loading...</div>;
    }

    // Render error state
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // Render product details
    return (
        <div className='container-fluid d-flex m-3'>
            <div className='row d-flex'>
                <div className='col-12 col-sm-6'>
                    <img src={!thumbnail? data.thumbnail :thumbnail  } className='col-12' alt={data.title} style={{ maxWidth: "100%", height: "auto", maxHeight: "25em",border: "1px solid #b6ebfc" }} />

                    <div className='d-flex flex-wrap'>
                        {data.images.map((img, index) => (
                            <img
                                key={index}
                                className='col-3 images_img' // Adjust the column size based on your design
                                // style={{ maxWidth: "100%", margin: "5px", border: "1px solid #0394c0", borderRadius: "4px", maxHeight: "5em" }}
                                src={img}
                                alt=""
                                onMouseEnter={() => setThumbnail(img)} // Change main thumbnail on mouse enter
                            />
                        ))}
                    </div>
                </div>
                <div className='col-12 col-sm-6'>
                    <h1>{data.title}</h1>
                    <p><span className='text-dark fw-bold'> BRAND:</span> {data.brand}</p>
                    <p><span className='text-dark fw-bold'> CATEGORY: </span>{data.category}</p>
                    <p><span className='text-dark fw-bold'> RATING:</span> {data.rating}</p>
                    <p className='text-dark fw-bold'>% {data.discountPercentage}</p>
                    <p>{data.description}</p>
                    <p className='text-primary fw-bold'><span className='text-dark fw-bold'>PRICE: ₹ </span>{data.price}</p>
                    {/* Add more details here as needed */}
                    <button className='addToCart btn btn-primary text-dark fw-bold' onClick={() => addToCart(data)}>Add Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
