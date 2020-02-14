import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import store, {UPDATE_NAME, UPDATE_ADDRESS, UPDATE_STATE, UPDATE_ZIP} from '../store'

export default class StepOne extends Component {
    constructor(){
        super()
        
        this.state = {
            name: '',
            address: '',
            state: '',
            zipcode: 0
        }
        this.handleChange = this.handleChange.bind(this)
        // this.newPost = this.newPost.bind(this)
        this.saveChanges = this.saveChanges.bind(this)
    }
    handleChange(inp) {
        this.setState({[inp.target.name]: inp.target.value})
    }
    // newPost() {
    //     axios
    //         .post('/api/house', this.state)
    //         .then(<Redirect to='/' />)
    //         .catch(err => { console.log(err) })
    // }
    saveChanges(){
        store.dispatch({
            type:UPDATE_NAME,
            payload: this.state.name
        })
        store.dispatch({
            type:UPDATE_ADDRESS,
            payload: this.state.address
        })
        store.dispatch({
            type:UPDATE_STATE,
            payload: this.state.state
        })
        store.dispatch({
            type:UPDATE_ZIP,
            payload: this.state.zip
        })
    }
    render() {
        return (
            <div>
                <input
                    name='name'
                    type="text" 
                    placeholder='Name'
                    onChange={this.handleChange} />
                <input
                    name='address'
                    type="varchar" 
                    placeholder='Address'
                    onChange={this.handleChange} />
                <input
                    name='state'
                    type="text" 
                    placeholder='State'
                    onChange={this.handleChange} />
                <input
                    name='zipcode'
                    type="integer" 
                    placeholder='Zipcode'
                    onChange={this.handleChange} />

                <button onClick={this.newPost}>Add</button>
                <Link to='/'><button>Cancel</button></Link>
                <Link to='/step2'><button onChange={()=>this.saveChanges()}>Next</button></Link>
            </div>
        )
    }
}
