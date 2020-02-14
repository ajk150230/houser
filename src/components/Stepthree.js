import React, { Component } from 'react'
import store, { UPDATE_MORT, UPDATE_RENT, update_listing } from '../store'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

export default class stepthree extends Component {
    constructor() {
        super()
        this.state = {
            mortgage: 0,
            rent: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.saveStep3 = this.saveStep3.bind(this)
        this.newPost = this.newPost.bind(this)
    }
    handleChange(inp) {
        this.setState({ [inp.target.name]: inp.target.value })
    }
    newPost() {
        axios
            .post('/api/house', store.getState().post)
            .then(<Redirect to='/' />)
            .catch(err => { console.log(err) })
        console.log(store.getState())
    }
    saveStep3() {
        store.dispatch({
            type: UPDATE_MORT,
            payload: this.state.mortgage
        })
        store.dispatch({
            type: UPDATE_RENT,
            payload: this.state.rent
        })
        store.dispatch({
            type: update_listing
        })
    }
    render() {
        return (
            <div>
                <input
                    name='mortgage'
                    placeholder='Monthly Mortgage'
                    onChange={this.handleChange} />
                <input
                    name='rent'
                    placeholder='Desired Rent'
                    onChange={this.handleChange} />
                <Link to='/step2'><button>Previous</button></Link>
                <Link to='/'><button onClick={()=>this.newPost()}>Add</button></Link>
            </div>
        )
    }
}
