import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ filteredData, loading, error }) => {


    if (loading) {
        return (
            <div class="d-flex align-items-center justify-content-between">
                <strong>Loading...</strong>
                <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            </div>
        )
    }

    // Render error state
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // Render data if it exists

    function truncateText(text, maxWords) {
        const words = text.split(' ');
        const truncatedText = words.slice(0, maxWords).join(' ');
        return truncatedText + (words.length > maxWords ? '...' : '');
    }




    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center justify-content-around">
                {filteredData.map(item => (
                    <div key={item.id} className="card col-12 col-sm-6 col-lg-4" style={{ width: "18rem", height: "22em", margin: "10px", border: "1px solid #b6ebfc" }}>
                        <img src={item.thumbnail} className="card-img-top" style={{ height: "13em" }} alt={item.thumbnail} />
                        <div className="card-body">
                            <h5 className="card-title fs-6">{truncateText(item.title, 2)}</h5>
                            <p className='fw-bold'> Price: ₹{item.price}</p>
                            <Link to={`/productDitails/${item.id}`} className="btn btn-primary text-dark fw-bold">Details</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;


