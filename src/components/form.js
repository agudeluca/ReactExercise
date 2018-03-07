import React, { Component } from 'react';
//import '../App.scss';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import * as actions from '../actions';
import { Button } from 'react-bootstrap';
export class FormUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: undefined,
            age: undefined,
            country: "Afghanistan", //por props
            day: new Date().getDate(),
            month: (new Date().getMonth() + 1),
            date: new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear(),
            year: new Date().getFullYear()
        }
        this.countriesOptions = this.countriesOptions.bind(this);
    }

<<<<<<< HEAD

    countriesOptions = () => {
=======
    countriesOptions() {
>>>>>>> eace714bc2ff5b47c78d66378ef8bdb2d6e03f45
        return this.props.userApp.countries.map((element, index) => {
            return (
                <option key={index} value={element.name}>{element.name}</option>
            )
        })
    }
<<<<<<< HEAD
    handleSubmit() {
        this.props.setHistoric(this.state);
    }
    componentWillMount() {
        this.props.getCountries()
    }
    
   
    
=======

    handleSubmit() {
        this.props.setHistoric(this.state);
    }

    componentWillMount() {
        this.props.getCountries()
    }


>>>>>>> eace714bc2ff5b47c78d66378ef8bdb2d6e03f45
    render() {
        return (
            <form>
                <label className="clabel">
                    <Col className="cCol" md={4}><b>Name:</b></Col>
                    <Col md={8} className="cCol">
                        <input className="cInput" type="text"
                            onChange={(e) => this.setState({ name: e.target.value })}
                            value={this.state.name} />
                    </Col>
                </label>
                <label className="clabel">
                    <Col className="cCol" md={4}>
                        Pais:
                   </Col>
                    <Col md={8} className="cCol">
                        <select
                            onChange={(e) => this.setState({ country: e.target.value })}
                            value={this.state.country} className="cSelect">
                            {this.countriesOptions()}
                        </select>
                    </Col>
                </label>
                <label className="clabel">
                    <Col className="cCol" md={4}>Edad:</Col>
                    <Col md={8} className="cCol">
                        <input className="cInput" type="number"
                            onChange={(e) => this.setState({ age: e.target.value })}
                            value={this.state.age} />
                    </Col>
                </label>
                <Button className="cButton" onClick={(e) =>{this.handleSubmit(e)}} bsStyle="primary">Saludar</Button>
            </form>
        );
    }
}


// FormUser.Container.js

const mapStateToProps = state => {
    return { userApp: state.userApp }
}

export default connect(mapStateToProps, actions)(FormUser)
