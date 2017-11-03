import React, { Component } from 'react';
import { Cars } from '../../mocks/cars';
import Car from './car';
import Pagination from '../dataTable/pagination';

export default class CarsList extends Component {
	constructor(props){
		super(props);
		let carsList = Cars;
		this.state = {
			cars: Cars,
			displayedcars: carsList.slice(0, 5),
			pagesize: 5,
			page: 1
		};
	}
	handleSearch(e){
		var searchQuery = e.target.value.toLowerCase();
		var filteredCarsList = Cars.filter(function(el) {
			var searchValue = el.brand.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1
		});
		
		this.setState({
			cars: filteredCarsList,
			displayedcars: filteredCarsList.slice(0, this.state.pagesize)
		});
	}
	onPageSizeChange(e){
		let carsList = this.state.cars.slice(0, e.target.value);
		this.setState({
			displayedcars: carsList,
			pagesize: e.target.value
		});
	}
	render(){
		return(
			<div>
				<div>
					<label htmlFor="page-menu">Page size: </label>
					<select
						id="page-menu"
						value={this.state.pagesize}
						onChange={e => this.onPageSizeChange(e)}
						>
						<option value="5">5</option>
						<option value="10">10</option>
						<option value="20">20</option>
						<option value="40">40</option>
					</select>
					<Pagination />
				</div>
				Search: <input type='text' onChange={e => this.handleSearch(e)} />
				<div className='list-group'>
					{ 
						this.state.displayedcars.map((car) =>
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
