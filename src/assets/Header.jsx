import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className='container-flex'>


                <nav className="navbar navbar-dark bg-lite pb-4 pt-4">
                    <div className="container justify-content-center">
                        <ul className="navbar-nav d-flex flex-row gap-4">
                            <Link to={"/"}>
                                <img src='https://coolfootwear.netlify.app/static/media/brand.1356b354e46d75d0c876.png' style={{ height: "50px" }} />
                            </Link>
                            <li className="nav-item">
                                <Link className="nav-link text-black" to="/">MAN</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-black" to="/about">WOMAN</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-black" to="/login">ALLPRODUCTS</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-black" to="/login">ABOUT</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-black" to="/login">CONTACT</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-black" to="/login">ADMIN LOGIN</Link>
                            </li>


                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header