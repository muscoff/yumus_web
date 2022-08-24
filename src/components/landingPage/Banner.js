import React from 'react'

export default function Banner({title, img}) {
  return (
    <>
        <div className="font-20 font-helvetica">{title ?? ''}</div>
        {title ? <><br /><br /></> : <div />}

        <div 
            className="width-100 height-100 height-l-80 height-m-70 height-s-70" 
            style={{ 
                backgroundImage: `url(${img ?? ''})`, 
                backgroundPosition: 'center center', 
                backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat'
            }}
        />
    </>
  )
}
