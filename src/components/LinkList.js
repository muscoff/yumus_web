import React from 'react'
import {Link} from 'react-router-dom'

export default function LinkList({list, standard}) {
    if(standard){
        const listItems = list.map((item, index)=>(
            <div key={index} style={{ marginBottom: '10px' }}>
                <Link to={item.link} className={item.class ? `white-text ${item.class}` : "white-text"}>
                    {item.name}
                </Link>
            </div>
        ))
        return <>{listItems}</>
    }

    const listItems = list.map((item, index)=>(
        <div key={index} style={{ marginBottom: '10px' }}>
            <Link 
                to={item.link} 
                className={index===0 ? item.class ? `${item.class} white-text font-futura`: "white-text font-futura" : item.class ? `${item.class} grey-link` : "grey-link"}
            >
                {item.name}
            </Link>
        </div>
    ))
  return (
    <>{listItems}</>
  )
}
