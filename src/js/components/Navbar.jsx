import React from "react";


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark ps-0">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">
                        Start Bootstrap
                    </a>
                    <button
                        className="navbar-toggler bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a
                                    className="nav-link active text-light"
                                    aria-current="page"
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">
                                    Service
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;