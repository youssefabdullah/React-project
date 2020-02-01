import React, { Component } from "react"
import './Footer.css'
class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <div className="inner-footer">
                        <div className="footer-items">
                            <h1>Computers & Codes</h1>
                            <p>
                                sdasdaflaflkkasfksas kakfskdfkasfkspa kapk pk pakfpkaspfa kpkfapsfkpsakfpsak  pkp aksfka p kafpkaspfk
                            </p>
                        </div>
                        <div className="footer-items">
                            <h2>Quick Links</h2>
                            <div className="border"></div>
                            <ul>
                                <a href=""><li>Home</li></a>
                                <a href=""><li>About us</li></a>
                                <a href=""><li>Services</li></a>
                                <a href=""><li>Portfolio</li></a>
                                <a href=""><li>Contact Us</li></a>
                            </ul>
                        </div>
                        <div className="footer-items">
                            <h2>Tutorials</h2>
                            <div className="border"></div>
                            <ul>
                                <a href=""><li>HTML/CSS</li></a>
                                <a href=""><li>JavaScript</li></a>
                                <a href=""><li>PHP</li></a>
                                <a href=""><li>C++</li></a>
                                <a href=""><li>Java</li></a>
                            </ul>
                        </div>
                        <div className="footer-items">
                            <h2>Contact Us</h2>
                            <div className="border"></div>
                            <ul>
                                <li><i class="material-icons" >add_location</i> 1, x sstreet</li>
                                <li><i class="material-icons">phone_android</i>01110232101</li>
                                <li><i class="material-icons">account_circle</i>Youssef Abdullah</li>
                            </ul>
                            <div className="social-media">
                            <a href="#" class="fa fa-facebook"></a>
                            <a href="#" class="fa fa-twitter"></a>
                            <a href="#" class="fa fa-instagram"></a>
                            <a href="#" class="fa fa-google-plus"></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        Copyright &copy; Computers & codes 2019. All Right
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;