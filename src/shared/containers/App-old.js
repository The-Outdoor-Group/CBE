import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions';

// const AppOld = () => (<h1>I am the App Container</h1>);
//
// export default AppOld;

const mapStateToProps = (state) => ({
  counter: state.counter
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(CounterActions, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
