import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class TestComponent extends Component {
    constructor(props) {
        super(props)
    }
    _functionToTest = () => {
        return "stringTest"
    }
    render() {

        return (
            <div>
                <h1>Componente</h1>
                <h1>a </h1>
                <h1>testear</h1>
            </div>
        );
    }

}
TestComponent.defaultProps = {
    name: 'Stranger'
};

TestComponent.propTypes = {
    age: PropTypes.number,
    object: PropTypes.object,
    name: PropTypes.string
}