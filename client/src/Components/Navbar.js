import React from "react";
import { Link } from "react-router-dom";
import AuthenticationButton from "./authentication-button";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <nav>
            <div className="brand">
                <Link to="/">Musicality</Link>
                <form className="search-form">
                    <input type="text" placeholder="Search for independent music" />
                </form>
            </div>
            <ul>
                <li>
                    <Link to="/explore">Explore</Link>
                </li>
                {isAuthenticated ?
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li> : ''}
                <li>
                    <AuthenticationButton />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
