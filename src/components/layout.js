import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Cars from './cars/cars';

export default class Layout extends Component{
	render(){
		return(
			<div>
				<Header />
				<Cars />
				<Footer />
			</div>
		);
	}
}
