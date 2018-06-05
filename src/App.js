import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Grid } from 'react-bootstrap';

import './App.css'

class App extends Component {
  render() {

    let { children } = this.props

    return (
      <Grid>
        {children}
      </Grid>
    );
  }
}

export default App;

App.propTypes = {
  children: PropTypes.element
}