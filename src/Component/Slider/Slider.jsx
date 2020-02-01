import React, { Component } from "react"
import Slider1 from "../../Img/s1.jpg"
import Slider2 from "../../Img/s2.jpg"
import Slider3 from "../../Img/s3.jpg"
import "./Slider.css"
import { Slide } from "react-slideshow-image"
import slide from "react-slideshow-image/lib/components/slideshow/slide"

const propietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    color:'red',
    arrows: true
}
class Slider extends Component {
    render() {
        return (

            <div className="containerSlider">
                <Slide {...propietes}>
                    <div className="each-slide">
                        <div>
                            <img src={Slider1} alt="Slider1"/>
                            
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <img src={Slider2} alt="Slider2"/>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div>
                            <img src={Slider3} alt="Slider3"/>
                        </div>
                    </div>
                </Slide>
            </div>
        )
    }
}
export default Slider;