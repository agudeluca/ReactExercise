import React, { Component } from 'react';
import '../App.scss';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';
class InputName extends Component {
    constructor(props){
        super(props)
        this.state = {
            age: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        console.log(event.target.value)
        this.props.updateData(event.target.value, 'age');
        this.setState({age: event.target.value});
      }
    render() {
        console.log(this);
        return (
            <label style={{ display: 'block' }}>
                <Col style={{ display: 'flex' }} md={4}>Name:</Col>
                <Col md={8} style={{ display: 'flex' }}>
                    <input style={{flex: 1}} type="number" onChange={this.handleChange} value={this.state.age}  />
                </Col>
            </label>
        );
    }
}
const mapStateToProps = state => {
    return { userApp: state.userApp }
  }
  export default connect(mapStateToProps, actions)(InputName)
  