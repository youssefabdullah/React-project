import React, { Component } from "react"
import img1 from "../Img/178d32f1d9ae922b089ab915291c193b.jpg";
import img2 from "../Img/bde6d9beb1aff1d4c50c7fd4d90cb4bd.jpg";
class GridMob extends Component {
    render() {
        return (
            <div>
                <nav className="site-nav grid">
                    <h1> Cosmo junkie</h1>
                    <ul>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <section id="welcome" className="grid">
                    <div className="welcome-text">
                        <h2>Space Enthusiast<br />& javaScript Developer</h2>
                        <p className="leading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo consequat.</p>
                        <a href="#portfolio" className="button">View my work</a>
                    </div>
                    <div className="welcome-img">
                        <img src={img1} alt="Pic of planet" />
                    </div>
                </section>

                <section className="portfolo">
                    <h3>Some of my projects</h3>
                    <div className="projects grid">
                        <a href="">
                            <img src={img2} alt="Space race img" />
                            <h4>Space Race Game</h4>
                        </a>
                        <a href="">
                            <img src={img2} alt="Space race img" />
                            <h4>Space Race Game</h4>
                        </a>
                        <a href="">
                            <img src={img2} alt="Space race img" />
                            <h4>Space Race Game</h4>
                        </a>
                    </div>
                </section>

                <section id="skills">
                    <h3>Things I can Do</h3>
                    <ul className="grid">
                        <li>
                            <img src={img1} alt="comet" />
                            <h4>javaScript</h4>
                        </li>
                        <li>
                            <img src={img2} alt="comet" />
                            <h4>javaScript</h4>
                        </li>
                        <li>
                            <img src={img1} alt="comet" />
                            <h4>javaScript</h4>
                        </li>
                        <li>
                            <img src={img2} alt="comet" />
                            <h4>javaScript</h4>
                        </li>
                    </ul>
                </section>
                <section id="contact">
                    <h3>Get in touch</h3>
                    <p className="leading">Lorem ipsum dolor</p>
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <textarea placeholder="Your Massage"></textarea>
                        <button className="button">Sand Flare</button>
                    </form>
                </section>
                <footer>
                    <div className="grid">
                        <p className="copyright">copyright 2020</p>
                        <ul className="social">
                            <li><a href=""><img src={img1} alt="face" /></a></li>
                            <li><a href=""><img src={img1} alt="face" /></a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        );
    }
}
export default GridMob;