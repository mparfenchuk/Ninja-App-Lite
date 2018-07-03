import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getBalance } from '../actions/getBalance'
import { sendEther } from '../actions/sendEther'
import { sendToken } from '../actions/sendToken'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Row, Col, Form, FormGroup, FormControl, ControlLabel, Button, Radio, Alert } from 'react-bootstrap';

var ethereum_address = require('ethereum-address');

class WalletPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            radioValue: 'ether',
            copySuccess: false,
            inputAddress: '',
            inputValue: '',
            messageShow: false,
            messageText: '',
            errorShow: false
        }

        this.intervals = [];
    }

    componentDidMount(){

        let { dispatch, address, authorization } = this.props
        
        dispatch(getBalance(address, authorization))  
        
        let intervalId = setInterval(function() {

            dispatch(getBalance(address, authorization))  
        }, 5000);
    
        this.intervals.push(intervalId);      
    }

    copyToClipboard = () => {

        this.setState({ copySuccess: true });

        this.timeout = setTimeout(() => {
            this.setState({ copySuccess: false })
        }, 1500)
    }

    between = (x, min, max) => {
        return x >= min && x <= max;
    }

    handleDismiss = () => {
        this.setState({ messageShow: false, errorShow: false, messageText: '', inputAddress: '', inputValue: '' });
    }

    sendFormSubmit = (e) => {
        e.preventDefault()
        
        let { inputAddress, inputValue, radioValue } = this.state
        let { dispatch, authorization } = this.props

        if (!ethereum_address.isAddress(inputAddress)) {
            return this.setState({ messageShow: true, errorShow: true, messageText: 'Address is invalid.' })
        }
        
        if (!this.between(inputValue, 1, 1000)) {
            return this.setState({ messageShow: true, errorShow: true, messageText: 'Minimum value should be between 1 and 1000.' })
        }

        this.setState({ messageShow: false, errorShow: false, messageText: '' })

        if (radioValue === 'ether'){
            dispatch(sendEther(inputAddress, inputValue, authorization)) 
        } else {
            dispatch(sendToken(inputAddress, inputValue, authorization)) 
        }
    }

    componentWillUnmount(){

        this.intervals.forEach(function(intervalId){
          clearInterval(intervalId);
        });
    }

  render() {

    let { inputAddress, inputValue, radioValue, copySuccess, messageShow, messageText, errorShow } = this.state
    let { address, etherBalance, tokenBalance, isLoading, dispatch, transactionMessageShow, transactionError, transactionMessageText } = this.props
    
    return (
        <section className="outer-wrapper">
            <div className="inner-wrapper">
                <Row>
                    <Col sm={8} smOffset={2}>
                        <h1 className="wallet-info">
                            {etherBalance} | {tokenBalance} <br/>
                            <small>
                                <CopyToClipboard text={address} onCopy={this.copyToClipboard.bind(this)}>
                                    <span className="pointer">{address}</span>
                                </CopyToClipboard>
                                {copySuccess ? <span> ✓</span> : ''}
                            </small>
                        </h1>
                        <hr/>
                        <Col sm={6} smOffset={3}>
                            {transactionMessageShow ?
                                <Alert bsStyle={transactionError ? 'danger' : 'success'} onDismiss={(e) => {dispatch({type: 'CLEAR'}); this.setState({ inputAddress: '', inputValue: '' })}}>
                                    {transactionMessageText}
                                </Alert>
                            :
                                null
                            }
                            {messageShow ?
                                <Alert bsStyle={errorShow ? 'danger' : 'success'} onDismiss={this.handleDismiss.bind(this)}>
                                    {messageText}
                                </Alert>
                            :
                                null
                            }
                            <Form className="wallet-form" onSubmit={!isLoading ? this.sendFormSubmit.bind(this) : null} horizontal>
                                <FormGroup bsSize="large" controlId="formAddress">
                                    <ControlLabel>Address</ControlLabel>
                                    <FormControl type="text" placeholder="Address" value={inputAddress} onChange={(e) => this.setState({ inputAddress: e.target.value })} required />   
                                </FormGroup>
                                <FormGroup bsSize="large" controlId="formValue">
                                    <ControlLabel>Value</ControlLabel>
                                    <FormControl type="number" placeholder="Value" step='1' min='1' max="1000" value={inputValue} onChange={(e) => this.setState({ inputValue: e.target.value })} required />   
                                </FormGroup>
                                <FormGroup>
                                    <Radio name="radioGroup" value="ether" checked={radioValue === 'ether'} onChange={(e) => this.setState({ radioValue: e.target.value })} inline>
                                        Ether
                                    </Radio>{' '}
                                    <Radio name="radioGroup" value="token" checked={radioValue === 'token'} onChange={(e) => this.setState({ radioValue: e.target.value })} inline>
                                        Token
                                    </Radio>
                                </FormGroup>
                                <FormGroup>
                                    <Button type="submit" bsSize="large" block disabled={isLoading}>
                                        {isLoading ? 'LOADING...' : 'SEND'}
                                    </Button>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Col>
                </Row>
            </div>
        </section>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        address: state.user.data.address,
        authorization: state.user.data.authorization,
        etherBalance: state.user.data.etherBalance,
        tokenBalance: state.user.data.tokenBalance,
        isLoading: state.transaction.isLoading,
        transactionMessageShow: state.transaction.transactionMessageShow,
        transactionError: state.transaction.transactionError,
        transactionMessageText: state.transaction.transactionMessageText
    }
}

export default connect(mapStateToProps)(WalletPage)

WalletPage.propTypes = {
    authorization: PropTypes.string,
    token: PropTypes.string,
    etherBalance: PropTypes.string,
    tokenBalance: PropTypes.string,
    isLoading: PropTypes.bool,
    transactionError: PropTypes.bool,
    transactionMessageShow: PropTypes.bool,
    transactionMessageText: PropTypes.string,
    dispatch: PropTypes.func
}