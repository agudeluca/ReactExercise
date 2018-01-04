import React, { Component } from 'react';
import '../App.scss';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';
import api from '../services/api'
import _ from 'lodash';
class HistoricList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: [],
            country: ""
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        console.log("holaa")
    }
    handleClick(element) {
        console.log(element);
    }

    render() {
        console.log(this);
        return (
            <div className="container">
                    {this.props.userApp.historicUsers.map((element, index) => {
                        console.log(element)
                        return (
                            <a key={index} onClick={() => this.handleClick(element)}>
                            <option >casa</option>
                          </a>
                        )
                    })}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return { userApp: state.userApp }
}
export default connect(mapStateToProps, actions)(HistoricList)
