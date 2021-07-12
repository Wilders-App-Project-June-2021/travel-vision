import React from 'react'
import './News.css'
import logo from './news-logo.png'


const News =()=>{

return(
    <div className="news-wrapper">
        <div className="news">
        <h3>Title</h3>
        <p>Here will go a brief descriptions of the article</p>
        <div className="img-wrapper">
            <img src={logo} alt="news-link"/></div>
        </div>
        <div className="news">
        <h3>Title</h3>
        <p>Here will go a brief descriptions of the article</p>
        <div className="img-wrapper">
            <img src={logo} alt="news-link"/></div>
        </div>
        <div className="news">
        <h3>Title</h3>
        <p>Here will go a brief descriptions of the article</p>
        <div className="img-wrapper">
            <img src={logo} alt="news-link"/></div>
        </div>
        <div className="news">
        <h3>Title</h3>
        <p>Here will go a brief descriptions of the article</p>
        <div className="img-wrapper">
            <img src={logo} alt="news-link"/></div>
        </div>
        <div className="news">
        <h3>Title</h3>
        <p>Here will go a brief descriptions of the article</p>
        <div className="img-wrapper">
            <img src={logo} alt="news-link"/></div>
        </div>
        
    </div>
)

}




export default News