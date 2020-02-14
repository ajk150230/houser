import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import store, {UPDATE_IMG} from '../store' 

export default class steptwo extends Component {
    constructor(){
        super()
        const reduxState = store.getState()
        this.state={
            img: reduxState.img
        }
        this.handleChange = this.handleChange.bind(this)
        this.saveImg = this.saveImg.bind(this)
    }
    handleChange(inp) {
        this.setState({[inp.target.name]: inp.target.value})
    }
    saveImg(){
        store.dispatch({
            type:UPDATE_IMG,
            payload: this.state.IMG
        })
    }
    render() {
        return (
            <div>
                <input 
                name='img'
                placeholder='Upload image URL'
                onChange={this.handleChange}/>
                <Link to='/step1'><button>Previous</button></Link>
                <Link to='/step3'><button onChange={()=>this.saveImg()}>Next</button></Link>
            </div>
        )
    }
}
