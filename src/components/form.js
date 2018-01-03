import React, { Component } from 'react';
import '../App.scss';
import { connect } from 'react-redux';
import InputName from './inputName'
import InputCountry from './inputCountry'
import InputYear from './inputYear'
import * as actions from '../actions';
class FormUser extends Component {
    render() {
        console.log(this);
        return (<form onSubmit={this.handleSubmit}>
            <InputName />
            <InputCountry />
            <InputYear />
            <input type="submit" value="Submit" />
        </form>
        );
    }
}
const mapStateToProps = state => {
    return { userData: state.userData }
}
export default connect(mapStateToProps, actions)(FormUser)
