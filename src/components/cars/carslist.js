import React, { Component } from 'react';
import Car from './car';
import Pagination from '../dataTable/pagination';


export default class CarsList extends Component {
	constructor(props){
		super(props);
		this.state = {
			cars: [],
		}
	}
	componentWillMount() {
		fetch('/cars')
			.then(res => res.json())
			.then(cars => this.setState({ cars }));
	}
	render(){
		return(
			<div>
				<div className='list-group'>
					{ 
						this.state.cars.map((car) =>
							<Car
								key={car.id}
								car={car}
							/>
						)
					}
				</div>
			</div>
		);
	}
}
