import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import StepOne from './StepOne'
import Steptwo from './Steptwo'
import Stepthree from './Stepthree'

export default class Wizard extends Component {
    constructor() {
        super()

        // this.state = {
        //     name: '',
        //     address: '',
        //     state: '',
        //     zipcode: 0
        // }
        // this.handleChange = this.handleChange.bind(this)
        // this.newPost = this.newPost.bind(this)
    }
    // handleChange(inp) {
    //     this.setState({[inp.target.name]: inp.target.value})
    // }
    // newPost() {
    //     axios
    //         .post('/api/house', this.state)
    //         .then(<Redirect to='/' />)
    //         .catch(err => { console.log(err) })
    // }
    render() {
        return (
            <div>
                {/* <input
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
                <Link to='/'><button>Cancel</button></Link> */}
                <Link to='/step1'><button>Next</button></Link>
            </div>
        )
    }
}
