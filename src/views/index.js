
import React, { Component } from 'react';
import '../App.scss';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import FormUser from '../components/form';
import * as actions from '../actions';
class ViewMain extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        console.log(this.props.userApp.currentViewer);
        return (
        <div className="App">
        <Col md={6} style={{ padding: '50px' }}>
            <div style={{ background: 'white', padding: '20px' }}>
                <FormUser />
            </div>
        </Col>
        <Col md={6} style={{ padding: '50px' }}>
            <div style={{background: 'white', display: 'flex', padding: '20px' }}>
            <p>cas {this.props.userApp.currentViewer}</p>
      </div>
      <div className="casa">
                casa <p>{this.props.userApp.temp}</p>
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
