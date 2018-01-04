import React, { Component } from 'react';
import '../App.scss';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';

class InputCountry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: [],
            selectedCountry: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('https://restcountries.eu/rest/v2/all', { method: 'GET' })
            .then(response => Promise.all([response, response.json()]))
            .then(([response, json]) => {
                this.props.updateData(json[0].name, 'selectedCountry');
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
        this.props.updateData(event.target.value, 'selectedCountry');
        this.setState({selectedCountry: event.target.value});
      }

    render() {
        console.log(this);
        return (
            <label style={{ display: 'block' }}>
                <Col style={{ display: 'flex' }} md={4}>
                    Pais:
                </Col>
                <Col md={8} style={{ display: 'flex' }}>
                    <select onChange={this.handleChange} value={this.state.selectedCountry} style={{ flex: 1 }}>
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
