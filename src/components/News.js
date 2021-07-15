import React from 'react'
import './News.css'
import logo from './newspaper.svg'



const News = ({title,description,url}) => {

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



export default News