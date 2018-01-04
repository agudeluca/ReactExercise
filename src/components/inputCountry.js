import React, { Component } from 'react';
import '../App.scss';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';
import api from '../services/api'
class InputCountry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: [],
            country: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        api('https://restcountries.eu/rest/v2/all')
            .then(([response, json]) => {
                this.props.updateData(json[0].name, 'country');
                this.setState({
                    countries: json.map((element, index) => {
                        return (
                            <option key={index} value={element.name}>{element.name}</option>
                        )
                    })
                });

            }).catch((err) => console.log(err))
    }
    handleChange(event) {
        console.log(event.target.value)
        this.props.updateData(event.target.value, 'country');
        this.setState({country: event.target.value});
      }

    render() {
        console.log(this);
        return (
            
            <label className="clabel">
            
                <Col className="cCol" md={4}>
                    Pais:
                </Col>
                <Col md={8} className="cCol">
                    <select onChange={this.handleChange} value={this.state.country} className="cSelect">
                        {this.state.countries}
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
