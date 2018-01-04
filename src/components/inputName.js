import React, { Component } from 'react';
import '../App.scss';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';
class InputName extends Component {
    render() {
        console.log(this);
        return (
            <label style={{ display: 'block' }}>
                <Col style={{ display: 'flex' }} md={4}>Name:</Col>
                <Col md={8} style={{ display: 'flex' }}>
                    <input style={{flex: 1}} type="text"  />
                </Col>
            </label>
        );
    }
}
const mapStateToProps = state => {
    return { userApp: state.userApp }
  }
  export default connect(mapStateToProps, actions)(InputName)
  