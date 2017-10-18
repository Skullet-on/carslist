import React, { Component } from 'react';
import { Cars } from '../../mocks/cars';
import Car from './car'

export default class CarsList extends Component {
	constructor(props){
		super(props);
		this.handleSearch = this.handleSearch.bind(this); 
		this.state = {
			displayedcars: Cars
		};
	}
	handleSearch(e){
		var searchQuery = e.target.value.toLowerCase();
		var dc = Cars.filter(function(el) {
			var searchValue = el.brand.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1
		});
		
		this.setState({
			displayedcars: dc
		});
	}
	render(){
		return(
			<div>
				<input type='text' onChange={this.handleSearch} />
				<div className='list-group'>
					{ 
						this.state.displayedcars.map((car) =>
							<Car
								key={car.id}
								brand={car.brand} 
								model={car.model} 
								year={car.year}
								info={false} 
							/>
						)
					}
				</div>
			</div>
		);
	}
}
