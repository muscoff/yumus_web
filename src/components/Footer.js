import React from 'react'
import LinkList from './LinkList'
import {Link} from 'react-router-dom'

import data from '../data/footer'

const {list1, list2, list3, list4} = data

export default function Footer() {
    const yr = new Date().getFullYear()
  return (
    <div className="black-bg">
        <div className="padding-all-10" />

        <div className="width-95 margin-auto">
            <div className="row">
                <div className="col-9 col-lx-12 col-l-12 col-m-12 col-s-12">
                    <div className="row">
                        <div className="col-3 col-l-6 col-m-6 col-s-12 padding-all-10 font-futura">
                            <LinkList list={list1} standard />
                        </div>
                        <div className="col-3 col-l-6 col-m-6 col-s-12 padding-all-10 font-futura">
                            <LinkList list={list2} />
                        </div>
                        <div className="col-3 col-l-6 col-m-6 col-s-12 padding-all-10 font-futura">
                            <LinkList list={list3} />
                        </div>
                        <div className="col-3 col-l-6 col-m-6 col-s-12 padding-all-10 font-futura">
                            <LinkList list={list4} />
                        </div>
                    </div>
                </div>

                <div className="col-3 col-lx-12 col-l-12 col-m-12 col-s-12"></div>
            </div>

            <div className="row">
                <div className="col-6 col-lx-12 col-l-12 col-m-12 col-s-12">
                    <div className="flex-row align-items-center">
                        <div className="font-helveitca font-11 white-text cursor-pointer" style={{ marginRight: '20px' }}>Canada</div>
                        <div className="font-helveitca font-11 grey-color">&copy; {yr} Nike, Inc. All Rights Reserved</div>
                    </div>
                </div>
                <div className="col-6 col-lx-12 col-l-12 col-m-12 col-s-12">
                    <div className="row">
                        <div className="col-lx-2 col-l-4 col-m-6 col-s-6 footer-guide">
                            <Link to="/" className="grey-link font-11">Guides</Link>
                        </div>
                        <div className="col-lx-2 col-l-4 col-m-6 col-s-6 footer-guide">
                            <Link to="/" className="grey-link font-11">Terms of Use</Link>
                        </div>
                        <div className="col-lx-2 col-l-4 col-m-6 col-s-6 footer-guide">
                            <Link to="/" className="grey-link font-11">Terms of Sale</Link>
                        </div>
                        <div className="col-lx-2 col-l-4 col-m-6 col-s-6 footer-guide">
                            <Link to="/" className="grey-link font-11">Company Details</Link>
                        </div>
                        <div className="col-lx-2 col-l-4 col-m-6 col-s-6 footer-guide">
                            <Link to="/" className="grey-link font-11">Privacy and Cookie Policy</Link>
                        </div>
                        <div className="col-lx-2 col-l-4 col-m-6 col-s-6">
                            <Link to="/" className="grey-link font-11">Cookie Settings</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="padding-all-10" />
    </div>
  )
}
