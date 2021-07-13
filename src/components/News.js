import React from 'react'
import './News.css'
import logo from './newspaper.svg'


const News =()=>{

return(
    <div className="news-wrapper">
        <div className="news">
        <h3 className="news-title">Title</h3>
        <div className="text-icon-wrapper">
        <p className="news-description">
            Here will go a brief descriptions of the article
            Here will go a brief descriptions of the article
            Here will go a brief descriptions of the article
        </p>
        <img  className="news-icon" src={logo} alt="news-link"/><a></a></div>
        </div>
        <div className="news">
        <h3 className="news-title">Title</h3>
        <div className="text-icon-wrapper">
        <p className="news-description">
            Here will go a brief descriptions of the article
            Here will go a brief descriptions of the article
            Here will go a brief descriptions of the article
        </p>
        <img  className="news-icon" src={logo} alt="news-link"/></div>
        </div>
        <div className="news">
        <h3 className="news-title">Title</h3>
        <div className="text-icon-wrapper">
        <p className="news-description">
            Here will go a brief descriptions of the article
            Here will go a brief descriptions of the article
            Here will go a brief descriptions of the article
        </p>
        <img  className="news-icon" src={logo} alt="news-link"/></div>
        </div>
        <div className="news">
        <h3 className="news-title">Title</h3>
        <div className="text-icon-wrapper">
        <p className="news-description">
            Here will go a brief descriptions of the article
            Here will go a brief descriptions of the article
            Here will go a brief descriptions of the article
        </p>
        <img  className="news-icon" src={logo} alt="news-link"/></div>
        </div>
        <div className="news">
        <h3 className="news-title">Title</h3>
        <div className="text-icon-wrapper">
        <p className="news-description">
            Here will go a brief descriptions of the article
            Here will go a brief descriptions of the article
            Here will go a brief descriptions of the article
        </p>
        <img  className="news-icon" src={logo} alt="news-link"/></div>
        </div>
        
    </div>
)

}




export default News