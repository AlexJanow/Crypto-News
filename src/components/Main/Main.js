import React from 'react'
import News from '../News/News'
import { useState } from 'react'
import "./Main.css"

export default function Main() {

    const options = [ 
        {title: "Bitcoin",
         value: "bitcoin"},
        {title: "Ethereum",
         value: "ethereum"},
        {title: "Altcoin",
         value: "altcoin"},
        {title: "NFT",
         value: "nft"},
        {title: "Defi",
         value: "defi"},
        {title: "Blockchain",
         value: "blockchain"}
        ]

    const [selectedOption, setSelectedOption] = useState("")
    
    let handleSelectionChange = (e) => {
        setSelectedOption(e.target.value)
      }
      return (
        <div className="main__wrapper">
            <select onChange={handleSelectionChange}>
                
                <option value="Select a topic">-- Select a topic --</option>
                {options.map((option,index) => <option key={index} value={option.value}>{option.title}</option>)}
                </select>
            <News selectedOption={selectedOption} />
        </div>
    )
}
