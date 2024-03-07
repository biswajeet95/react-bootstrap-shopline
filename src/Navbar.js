import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Navbar = ({ cartCount, handleSearchChange, searchTerm }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">  <img style={{ width: "5em" }} src="https://361dc.com/product/wp-content/uploads/2022/10/SHOPLINE-LOGO-e1666071627669-768x269.png" alt="SOPLINE" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-dark fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    PRODUCTS
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                               

                                    <li><Link className="dropdown-item" to="/">Best Sellers</Link></li>
                                    <li><Link className="dropdown-item" to="/">New Releases</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/cart">Carts</Link></li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-4 "
                                type="search"
                                aria-label="Search"
                                placeholder="Search by title"
                                value={searchTerm}
                                onChange={handleSearchChange} />

                            <ul className="navbar-nav me-auto">
                                <li>
                                    <Link className="nav-link d-flex" to="/cart">
                                        <i className="bi bi-bag-fill position-relative text-dark"></i>
                                        <div className='position-absolute cartCount '>

                                            <p>{cartCount}</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </form>




                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;


