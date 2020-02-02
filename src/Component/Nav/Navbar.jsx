import React, { Component } from "react"
import './Navbar.css';

import logo from "../../Img/d1012755355a150d7a33eda7a154e145.jpg"
class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="header">
                        <div className="wrap-container">
                            <div className="header-images">
                                <h1>Logo</h1>
                            </div>
                            <div className="search-box">
                                <input className="search-txt" type="text" name="" placeholder="Type to search"/>
                                <a className="search-btn" href="#"></a>
                            </div>
                            <i class="fa fa-bars" ></i>
                            <div className="menu">
                                <ul>
                                    <a href=""><li>Home</li></a>
                                    <a href=""><li>About us</li></a>
                                    <a href=""><li>Services</li></a>
                                    <a href=""><li>Contact</li></a>
                                    <a href=""><li>Deals</li></a>
                                </ul>
                            </div>
                            <div className="menu2">
                                <ul className="ul2">
                                    <a href=""><li>Home</li></a>
                                    <a href=""><li>About us</li></a>
                                    <a href=""><li>Services</li></a>
                                    <a href=""><li>Contact</li></a>
                                    <a href=""><li>Deals</li></a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Navbar;