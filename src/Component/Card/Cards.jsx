import React, { Component } from "react"
import './Cards.css'
import ImgCard from '../../Img/bde6d9beb1aff1d4c50c7fd4d90cb4bd.jpg'
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
            </div>
        )
    }
}
export default Cards;