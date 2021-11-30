import React from 'react'
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import "./News.css"
export default function News({selectedOption}) {
  
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    fetchNews()
   
  }, [selectedOption])

  


    async function fetchNews(){
    const options = {
        method: 'GET',
        url: `https://crypto-news11.p.rapidapi.com/cryptonews/${selectedOption ? selectedOption : "bitcoin"}`,
        headers: {
          'x-rapidapi-host': 'crypto-news11.p.rapidapi.com',
          'x-rapidapi-key': '974496369bmsh518fe63edecb1dcp189d1djsn44eb955518ed'
        }
      };
     setIsLoading(true)
     await axios.request(options).then(function (response) {
       
        
        setNews(response.data.articles)
        setIsLoading(false)
    }).catch(function (error) {
        console.error(error);
    });
  }


  
   
   


    return (
        <div className="news__wrapper">          
            <div>{isLoading? <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>: ""}</div>
            {news && news.map((story) => (
                <div className="news__card" key={uuidv4()} >
                    <a target="_blank" rel="noopener noreferrer" href={story.url}>
                    <h2>{story.title}</h2>
                    <p>{story.source}</p>
                    </a>
                </div>
            )
            
            
            )}
        </div>
    )
}
