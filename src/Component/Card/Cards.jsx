import React, { Component } from "react"
import './Cards.css'
import ImgCard from '../../Img/bde6d9beb1aff1d4c50c7fd4d90cb4bd.jpg'
import ImgCard2 from '../../Img/178d32f1d9ae922b089ab915291c193b.jpg'
import ImgCard3 from '../../Img/e1c249c1fe34126d3f4e64fe6f6c0be0.jpg'
import ImgCard4 from '../../Img/9081514486ed54d75781337149c6808f.jpg'
import ImgCard5 from '../../Img/54783a3a6907575e63224837cf88ad0d.jpg'
import ImgCard6 from '../../Img/9a4e74bc7ce9652ea81e693ef1acacdf.jpg'
class Cards extends Component {
    render() {
        return (
            <div className="cont">
                <div className="cards">
                    <div className="image">
                        <img src={ImgCard} />
                    </div>
                    <div className="title">
                        Title Name
                    </div>
                    <div className="des">
                        <p>Write your title Description Here ....</p>
                        <button>Read More...</button>
                    </div>
                </div>
                <div className="cards">
                    <div className="image">
                        <img src={ImgCard2} />
                    </div>
                    <div className="title">
                        Title Name
                    </div>
                    <div className="des">
                        <p>Write your title Description Here ....</p>
                        <button>Read More...</button>
                    </div>
                </div>
                <div className="cards">
                    <div className="image">
                        <img src={ImgCard3} />
                    </div>
                    <div className="title">
                        Title Name
                    </div>
                    <div className="des">
                        <p>Write your title Description Here ....</p>
                        <button>Read More...</button>
                    </div>
                </div>
                <div className="cards">
                    <div className="image">
                        <img src={ImgCard4} />
                    </div>
                    <div className="title">
                        Title Name
                    </div>
                    <div className="des">
                        <p>Write your title Description Here ....</p>
                        <button>Read More...</button>
                    </div>
                </div>
                <div className="cards">
                    <div className="image">
                        <img src={ImgCard5} />
                    </div>
                    <div className="title">
                        Title Name
                    </div>
                    <div className="des">
                        <p>Write your title Description Here ....</p>
                        <button>Read More...</button>
                    </div>
                </div>
                <div className="cards">
                    <div className="image">
                        <img src={ImgCard6} />
                    </div>
                    <div className="title">
                        Title Name
                    </div>
                    <div className="des">
                        <p>Write your title Description Here ....</p>
                        <button>Read More...</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cards;