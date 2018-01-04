
import React, { Component } from 'react';
import '../App.scss';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import FormUser from '../components/form';
import * as actions from '../actions';
import TextShow from '../components/textShow'
class ViewMain extends Component {
    render() {
        return (
            <div className="App">
                <Col md={6} className="cColpad">
                    <div className="cContainer">
                        <FormUser />
                    </div>
                    {this.props.userApp.user.ready ? (
                        <TextShow />
                    ) : (null)}
                </Col>
                <Col md={6} className="cColpad">
                    <div className="listHistoric cContainer">
                        <p>cas {this.props.userApp.user.name}</p>
                    </div>
                </Col>
            </div>

        );
    }
}
const mapStateToProps = state => {
    return { userApp: state.userApp }
}
export default connect(mapStateToProps, actions)(ViewMain)
