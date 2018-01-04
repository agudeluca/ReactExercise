import React, { Component } from 'react';
import '../App.scss';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';
class InputCountry extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.getCountries());
      }
    render() {
        console.log(this);
        return (
            <label style={{ display: 'block' }}>
                <Col style={{ display: 'flex' }} md={4}>
                    Pais:
                </Col>
                <Col md={8} style={{ display: 'flex' }}>
                    <select style={{ flex: 1}}> 
                        <option value="grapefruit">Grapefruit</option>
                        <option value="grapefruit">Grapefruit</option>
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
  