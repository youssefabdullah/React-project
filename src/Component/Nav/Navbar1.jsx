import React, { Component } from "react"
// import './Navbar.css';
import './NavbarRespon.css';

class Navbar1 extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1 className="logo">Logo</h1>
                    <input type="checkbox" id ="nav-toggle" className="nav-toggle"/>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    <label for ="nav-toggle" className = "nav-toggle-label">
                        <span></span>
                    </label>
                </header>
            </div>
        );
    }
}
export default Navbar1;