import React from 'react'
import './News.css'
import logo from './newspaper.svg'



const News = ({title,description,url, props}) => {
    const noNews =
    <div className="no-news"><h2>We could not find any current news articles for {`${props.countryName}`}.</h2></div>;
    
    if(!title){
        return noNews

    } else {
        return(

        <div className="news">
            <h3 className="news-title">{title}</h3>
                <div className="text-icon-wrapper">
                    <p className="news-description">
                    {description}
                    </p>
                    <a href={url} className="news-link"> 
                    <img  className="news-icon" src={logo} alt="news-link"/>
                    </a>
                </div>
        </div>
    )
}
}


export default News