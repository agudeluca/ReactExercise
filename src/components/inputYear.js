import React, { Component } from 'react';
import '../App.scss';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';
class InputName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            age: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.updateData(event.target.value, 'age');
        this.setState({ age: event.target.value });
    }
    render() {
        return (
            <label className="clabel">
                <Col className="cCol" md={4}>Edad:</Col>
                <Col md={8} className="cCol">
                    <input className="cInput" type="number" onChange={this.handleChange} value={this.state.age} />
                </Col>
            </label>
        );
    }
}
const mapStateToProps = state => {
    return { userApp: state.userApp }
}
export default connect(mapStateToProps, actions)(InputName)
