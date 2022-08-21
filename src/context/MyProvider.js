import React, { Component } from 'react'
import MyContext from './MyContext'

export default class MyProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <MyContext.Provider value={{  }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
