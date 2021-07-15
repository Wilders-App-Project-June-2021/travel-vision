import userEvent from '@testing-library/user-event'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import News from './News'



const NewsList =(props)=>{

const [countryNews,setCountyNews]= useState([])


useEffect(()=>{
    axios.get(`https://newsapi.org/v2/everything?qInTitle=${props.countryName}&language=en&sortBy=popularity&pageSize=5&apiKey=${process.env.REACT_APP_API_NEWS}`)
    .then(res=>{
       setCountyNews(res.data.articles)
    })
},[])

// FOR HEALTHWATCH https://newsapi.org/v2/everything?qInTitle=(${props.countryName}%20AND%20coronaVirus)&pageSize=1&language=en&sortBy=relevancy&apiKey=862d686e64564ff38a69a93c176de68e

return(
    <div className="news-wrapper">
        { countryNews.length > 0 && countryNews.map((news,index)=>{ 
           return <News 
            key={index}
            id={index}
            title = {news.title}
            description = {news.description}
            url={news.url}
            />
        })}
    </div>
)

}




export default NewsList