import React, { Component } from 'react';
//import '../App.scss';
import { connect } from 'react-redux';
import * as actions from '../actions';
class HistoricList extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(element) {
        this.props.updateDataToShow(element);
    }
    render() {
        return (
            <div className="container">
                <b>Visitantes anteriores</b>
                {this.props.userApp.historicUsers.map((element, index) => {
                    return (
                        <a key={index} onClick={() => this.handleClick(element)}>
                            <option >{element.name} {element.country} {element.date}</option>
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
