import React, { Component } from 'react';
import '../App.scss';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';
class InputName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.updateData(event.target.value, 'name');
        this.setState({ name: event.target.value });
    }
    render() {
        return (
            <label className="clabel">
                <Col className="cCol" md={4}><b>Name:</b></Col>
                <Col md={8} className="cCol">
                    <input style={{ flex: 1 }} type="text" onChange={this.handleChange} value={this.state.name} />
                </Col>
            </label>
        );
    }
}
const mapStateToProps = state => {
    return { userApp: state.userApp }
}
export default connect(mapStateToProps, actions)(InputName)
