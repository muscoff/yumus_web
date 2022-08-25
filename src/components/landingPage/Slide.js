import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

import Script from '../../script/Script'

export default function Slide({title, list, className}) {
    const script = new Script()

    useEffect(()=>{
        script.setSlide(className)
    }, [])

    const slideImages = !list ? <div /> : list.map((item, index)=>(
        <React.Fragment key={index}>
            <div className="padding-all-10 item">
                <Link to="/product">
                    <img src={item.img} alt="" className="max-img" />
                    <br />
                    <div className="flex-row justify-content-space-between">
                        <div className="col-10">
                            <div className="product-name" title={item.name.toUpperCase()}>{item.name}</div>
                            <div className="product-category">{item.category}</div>
                        </div>
                        <div className="col-2">
                            <div className="flex-row-reverse">${item.price}</div>
                        </div>
                    </div>
                </Link>
            </div>
        </React.Fragment>
    ))
  return (
    <>
        <div className="font-helvetica">
            <div className="row justify-content-space-between">
                <div className="font-20">{title ?? ''}</div>
                <div></div>
            </div>

            {title ? <><br /><br /></> : <div />}

            <div className="width-100 overflow-hidden">
                <div className={className ?? ''}>
                    <div className="flex-row">{slideImages}</div>
                </div>
            </div>
        </div>
    </>
  )
}
