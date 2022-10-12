import React from "react";
import { link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div>
                <h1>
                    <link to="/" className="logo">
                        Shopping Cart
                    </link>
                </h1>
            </div>
            <div className="header-links">
                <ul>
                    <li>
                        <link to="/">Cart</link>
                    </li>
                </ul>
            </div>
        </header>
    )
};

export default Header;