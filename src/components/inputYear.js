import React, { Component } from 'react';
import '../App.css';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';
class InputYear extends Component {
    render() {
        console.log(this);
        return (
            <label style={{ display: 'block' }}>
                <Col style={{ display: 'flex' }} md={4}>Year:</Col>
                <Col md={8} style={{ display: 'flex' }}>
                    <input style={{ flex: 1 }} type="number" />
                </Col>
            </label>
        );
    }
}
const mapStateToProps = state => {
    return { userData: state.userData }
}
export default connect(mapStateToProps, actions)(InputYear)
