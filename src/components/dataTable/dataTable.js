import React, {Component} from 'react';
import Pagination from './pagination';

export default class dataTable extends Component{
	render(){
		return(
			<div>
				<label>Page size: </label>
				<select>
					<option>5</option>
					<option>10</option>
					<option>20</option>
				</select>
				<Pagination />
			</div>
		);
	}
}
