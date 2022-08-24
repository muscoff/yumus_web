import React from 'react'
import {Link} from 'react-router-dom'

export default function LinkBtn({url, className, text}) {
  return (
    <Link to={url} className={className ? `nike-black-btn ${className}` : 'nike-black-btn'}>{text}</Link>
  )
}
