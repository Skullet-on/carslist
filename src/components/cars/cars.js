import React, { Component } from 'react';
import { Cars } from '../../mocks/cars';

export default class CarsList extends Component {
	constructor(){
		super();
		this.state = {
			info: false,
		};
	}
	changeBrand(brand){
		this.setState({brand});
	}
	render(){
		return(
			<div>
				{ this.getCarsList(Cars) }
			</div>
		);
	}
	getCarsList(cars){
		return(
			<div>
				<ul>
					{ cars.map((car) => this.rendInfo(car)) }
				</ul>
			</div>
		);
	}
	showCar(car){
		return(
			<li>
				{car.brand}
			</li>
		);
	}
	rendInfo(car){
		return(
			<div>
				{car.brand}
				<p>Brand: {car.brand}</p>
				<p>Model: {car.model}</p>
				<p>Year: {car.year}</p>
			</div>
		);
	}
	rendNoInfo(car){
		return(
			<div>
				{car.brand}
			</div>
		);
	}
}
