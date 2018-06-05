import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../actions/login'
import { Row, Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class LoginPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            inputUsername: '',
            inputPassword: ''
        }
    }

    loginFormSubmit = (e) => {
        e.preventDefault()
        
        let { inputUsername, inputPassword } = this.state
        let { dispatch } = this.props

        dispatch(login(inputUsername, inputPassword))     
    }

  render() {
    
    let { inputUsername, inputPassword } = this.state

    return (
        <section className="outer-wrapper">
            <div className="inner-wrapper">
                <Row>
                    <Col sm={4} smOffset={4}>
                        <Form onSubmit={this.loginFormSubmit.bind(this)} horizontal>
                            <FormGroup bsSize="large" controlId="formUsername">
                                <ControlLabel>Username</ControlLabel>
                                <FormControl type="text" placeholder="Username" value={inputUsername} onChange={(e) => this.setState({ inputUsername: e.target.value })} required />   
                            </FormGroup>
                            <FormGroup bsSize="large" controlId="formPassword">
                                <ControlLabel>Password</ControlLabel>
                                <FormControl type="password" placeholder="Password" value={inputPassword} onChange={(e) => this.setState({ inputPassword: e.target.value })} required />   
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" bsSize="large" block>LOGIN</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </div>
        </section>
    );
  }
}

export default connect()(LoginPage)

LoginPage.propTypes = {
    dispatch: PropTypes.func
}