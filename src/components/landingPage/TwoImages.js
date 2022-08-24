import React from 'react'
import LinkBtn from '../LinkBtn'

export default function TwoImages({list, title}) {
    const imageList = list.map(({img, title, url, text}, index)=>(
        <React.Fragment key={index}>
            <div className="col-6 col-l-12 col-m-12 col-s-12 padding-all-5">
                <div className="width-100 height-70 relative" style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                    <div className="width-100 absolute bottom-10">
                        <div className="width-90 margin-auto">
                            <div className="white-text">{title}</div>
                            <br /><br />
                            <LinkBtn url={url} className="white" text={text} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    ))
  return (
    <div className="font-helvetica">
        <div className="font-20 capitalize">{title}</div>
        <br /><br />

        <div className="row">{imageList}</div>
    </div>
  )
}
