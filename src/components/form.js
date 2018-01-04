import React, { Component } from 'react';
import '../App.scss';
import { connect } from 'react-redux';
import InputName from './inputName'
import InputCountry from './inputCountry'
import InputYear from './inputYear'
import * as actions from '../actions';
import { Button } from 'react-bootstrap';
class FormUser extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        this.props.setHistoric();
    }
    render() {
        return (
            <form>
                <InputName />
                <InputCountry />
                <InputYear />
                <Button className="cButton" onClick={this.handleSubmit} bsStyle="primary">Saludar</Button>
            </form>
        );
    }
}
const mapStateToProps = state => {
    return { userApp: state.userApp }
}
export default connect(mapStateToProps, actions)(FormUser)
