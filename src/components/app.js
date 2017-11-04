import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import CarsList from './cars/carslist';

import { connect } from 'react-redux';
import setCarsAction from '../actions/actionCars'

class App extends Component{
	render(){
		return(
			<div>
				<Header />
				<CarsList cars={this.props.cars} setCars={this.props.setCarsFunction} />
				<Footer />
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		cars: state.carsList.cars
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setCarsFunction: cars => {
			dispatch(setCarsAction(cars))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
