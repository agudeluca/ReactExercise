import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class TestComponent extends Component {
    constructor(props) {
        super(props)
    }
    _functionToTest = () =>  {
        return "stringTest"
    }
    render() {
        console.log(this)
        return (
            <div>
                <h1>Hola</h1>
                <h1>Hola</h1>
                <h1>Hola</h1>
            </div>
        );
    }
    
}
TestComponent.defaultProps = {
    name: 'Stranger'
    };
    
TestComponent.propTypes  = {
    age: PropTypes.number,
    objeto: PropTypes.object,
    name: PropTypes.string
}