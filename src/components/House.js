import React, { Component } from 'react'

export default class House extends Component {
    render() {
        const {name, address, state, zipcode, id, img, mortgage, rent } = this.props
        return (
            <div>
                <img src={img}/>
                {id}
                {name}
                {address}
                {state}
                {zipcode}
                {mortgage}
                {rent}
                <button onClick={this.props.deleteHouse}>Delete</button>
            </div>
        )
    }
}
