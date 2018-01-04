import React, { Component } from 'react';
import '../App.scss';
import { connect } from 'react-redux';
import * as actions from '../actions';
class TextShow extends Component {
    render() {

        return (
            <div>
                <h1>Hola {this.props.userApp.userToShow.name}&nbsp;
                    de {this.props.userApp.userToShow.country}
                    , el dia {this.props.userApp.user.day}  &nbsp;
                        del {this.props.userApp.user.month}&nbsp;
                        tendrás {this.props.userApp.userToShow.age}</h1>
            </div>

        );
    }
}
const mapStateToProps = state => {
    return { userApp: state.userApp }
}
export default connect(mapStateToProps, actions)(TextShow)
