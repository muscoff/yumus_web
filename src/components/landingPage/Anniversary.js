import React from 'react'
import LinkBtn from '../LinkBtn'

export default function Anniversary({subtitle,title, description, links}) {
    const buttons = !links ? <div /> : links.map((item, index)=>(
        <div className="padding-all-5" key={index}>
            <LinkBtn url={item.url} text={item.text} />
            <div className="padding-all-10" />
        </div>
    ))
  return (
    <div className="width-80 margin-auto font-helvetica">
        <div className="padding-all-20" />

        <div className="center-text">
            <div className="">{subtitle ?? ''}</div>

            <div className="font-futura font-70 font-l-50 font-m-40 font-s-40 width-80 width-m-100 width-s-100 margin-auto">{title ?? ''}</div>
            <br /><br />

            <div className="font-20 font-l-18 font-m-18 font-s-18">{description ?? ''}</div>
            <br /><br />

            <div className="row align-items-center justify-content-center">
                {buttons}
            </div>
        </div>

        <div className="padding-all-20" />
    </div>
  )
}
