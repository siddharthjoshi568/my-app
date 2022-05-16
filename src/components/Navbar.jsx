import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

    const logout = () => {
        localStorage.removeItem("currentUser");
        window.location.reload();
    }

    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/edit-profile">Edit Profile</Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" onClick={logout}>Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;