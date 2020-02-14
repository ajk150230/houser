import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import House from './House'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
        this.deleteHouse = this.deleteHouse.bind(this)
        this.showChanges = this.showChanges.bind(this)
    }
    componentDidMount() {
        axios
            .get('/api/house')
            .then(res => this.setState({ list: res.data }))
            .catch(err => { console.log(err) })
    }
    deleteHouse(id) {
        axios
            .delete(`/api/house/${id}`)
            .then(this.showChanges)
            .catch(err => console.log(err))
    }
    showChanges(){
        axios
        .get('/api/house')
        .then(res => this.setState({ list: res.data }))
        .catch(err => { console.log(err) })
    }
    render() {
        const mapped = this.state.list.map((element, index) => {
            return (
                <section>
                    <House
                        name={element.name}
                        address={element.address}
                        state={element.state}
                        zipcode={element.zipcode}
                        img={element.img}
                        mortgage={element.mortgage}
                        rent={element.rent}
                        deleteHouse={()=>this.deleteHouse(element.house_id)}
                        id={element.house_id}
                    />
                    <h1>{this.props.match.params.list}</h1>
                </section>
            )
        }
        )
        return (
            <div>
                <Link to='/step1'><button>Add New House</button></Link>
                {mapped}
            </div>
        )
    }
}
