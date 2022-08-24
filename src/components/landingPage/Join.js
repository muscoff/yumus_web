import React from 'react'
import img from '../../images/img7.webp'
import LinkBtn from '../LinkBtn'

export default function Join() {
  return (
    <>
        <div className="font-helveitca font-25">Join Us</div>
        <br />

        <div className="width-100 height-50 media-hide-join" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
            <div className="padding-all-20" />
            <div className="width-90 margin-auto">
                <div className="font-20 font-helvetica uppercase">Member highlight</div>
                <br />
                <div className="font-helvetica">Find out what's happening in the world of Nike Membership</div>
                <br /><br />
                <LinkBtn url="/" text="Learn More" />
            </div>
        </div>

        <div className="width-100 height-50 media-show-join">
            <div className="padding-all-20" />
            <div className="width-90 margin-auto">
                <div className="font-20 font-helvetica uppercase">Member highlight</div>
                <br />
                <div className="font-helvetica">Find out what's happening in the world of Nike Membership</div>
                <br /><br />
                <LinkBtn url="/" text="Learn More" />
            </div>
        </div>
    </>
  )
}
