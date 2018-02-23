import React, { Component } from 'react';
//import '../App.scss';
import { connect } from 'react-redux';
import  {updateDataToShow,getCountries}  from '../actions';
import TestComponent from './testComponent'
class HistoricList extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(element) {
        this.props.updateDataToShow(element);
    }
    render() {
        console.log(this);
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
                <div>
                    <TestComponent name="byprops" age={24} objeto={{'a':'1'}} />
                </div>
            </div>

        );
    }
}

function bindActions (dispatch) {
    return {
     updateDataToShow: () => dispatch(updateDataToShow()),
      getCountries: () => dispatch(getCountries()),
      };
  }

const mapStateToProps = state => {
    return { userApp: state.userApp }
}
export default connect(mapStateToProps, bindActions)(HistoricList)
