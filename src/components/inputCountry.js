import React, { Component } from 'react';
//import '../App.scss';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';
import api from '../services/api'
class InputCountry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: []
        }
        this.props.getCountries()
        this.handleChange = this.handleChange.bind(this);
        this.CountriesOptions = this.CountriesOptions.bind(this);
    }

    CountriesOptions() {
        return this.props.userApp.countries.map((element, index) => {
            return (
                <option key={index} value={element.name}>{element.name}</option>
            )
        })
    }

    handleChange(event) {
        this.props.updateData(event.target.value, 'country');
    }

    render() {
        return (
            <label className="clabel">
                <Col className="cCol" md={4}>
                    Pais:
                </Col>
                <Col md={8} className="cCol">
                    <select onChange={this.handleChange} value={this.state.country} className="cSelect">
                        <this.CountriesOptions />
                    </select>
                </Col>
            </label>

        );
    }
}
const mapStateToProps = state => {
    return { userApp: state.userApp }
}
export default connect(mapStateToProps, actions)(InputCountry)
