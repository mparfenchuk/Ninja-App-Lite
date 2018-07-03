import React, { Component } from 'react';
import { Link } from 'react-router'
import { Row, Col } from 'react-bootstrap';

class StartPage extends Component {
  render() {
    
    return (
        <section className="outer-wrapper">
            <div className="inner-wrapper">
                <Row>
                    <Col sm={4} smOffset={4}>
                        <Link className="btn btn-lg btn-default btn-block" role="button" to="/ninja-app-lite/signin">   
                            SING IN
                        </Link>
                        <Link className="btn btn-lg btn-default btn-block" role="button" to="/ninja-app-lite/create-wallet">
                            CREATE WALLET
                        </Link> 
                    </Col>
                </Row>
            </div>
        </section>
    );
  }
}

export default StartPage;