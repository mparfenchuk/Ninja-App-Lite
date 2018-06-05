import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { register } from '../actions/register'
import { Row, Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class RegistrationPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            inputUsername: '',
            inputFirstName: '',
            inputLastName: '',
            inputEmail: '',
            inputPassword: ''
        }
    }

    registrationFormSubmit = (e) => {
        e.preventDefault()
        
        let { inputUsername, inputFirstName, inputLastName, inputEmail, inputPassword } = this.state
        let { dispatch } = this.props

        dispatch(register(inputUsername, inputFirstName, inputLastName, inputEmail, inputPassword)) 
    }

  render() {

    let { inputUsername, inputFirstName, inputLastName, inputEmail, inputPassword } = this.state
    
    return (
        <section className="outer-wrapper">
            <div className="inner-wrapper">
                <Row>
                    <Col sm={4} smOffset={4}>
                        <Form onSubmit={this.registrationFormSubmit.bind(this)} horizontal>
                            <FormGroup bsSize="large" controlId="formUsername">
                                <ControlLabel>Username</ControlLabel>
                                <FormControl type="text" placeholder="Username" value={inputUsername} onChange={(e) => this.setState({ inputUsername: e.target.value })} required />   
                            </FormGroup>
                            <FormGroup bsSize="large" controlId="formFirstName">
                                <ControlLabel>First Name</ControlLabel>
                                <FormControl type="text" placeholder="FirstName" value={inputFirstName} onChange={(e) => this.setState({ inputFirstName: e.target.value })} required />   
                            </FormGroup>
                            <FormGroup bsSize="large" controlId="formLastName">
                                <ControlLabel>Last Name</ControlLabel>
                                <FormControl type="text" placeholder="LastName" value={inputLastName} onChange={(e) => this.setState({ inputLastName: e.target.value })} required />   
                            </FormGroup>
                            <FormGroup bsSize="large" controlId="formEmail">
                                <ControlLabel>Email</ControlLabel>
                                <FormControl type="email" placeholder="Email" value={inputEmail} onChange={(e) => this.setState({ inputEmail: e.target.value })} required />   
                            </FormGroup>
                            <FormGroup bsSize="large" controlId="formPassword">
                                <ControlLabel>Password</ControlLabel>
                                <FormControl type="password" placeholder="Password" value={inputPassword} onChange={(e) => this.setState({ inputPassword: e.target.value })} required />   
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" bsSize="large" block>REGISTER</Button>
                            </FormGroup>
                        </Form> 
                    </Col>
                </Row>
            </div>
        </section>
    );
  }
}

export default connect()(RegistrationPage)

RegistrationPage.propTypes = {
    dispatch: PropTypes.func
}