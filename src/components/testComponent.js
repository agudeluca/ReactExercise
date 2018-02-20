import React, { Component } from 'react';
export default class TestComponent extends Component {
    constructor(props) {
        super(props)
    }
    _functionToTest = () =>  {
        return "stringTest"
    }
    render() {
        return (
            <div>
                <h1>Hola</h1>
                <h1>Hola</h1>
                <h1>Hola</h1>
            </div>
        );
    }
}
