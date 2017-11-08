import React, { Component } from 'react';
import Car from './car';
import { connect } from 'react-redux';
import { loadCars } from '../../actions/actionCars'
import { bindActionCreators } from 'redux';
//import Pagination from '../dataTable/pagination';


class CarsList extends Component {
	constructor(props){
		super(props);
		this.props.loadCars();
	}
	handleClick(){
    this.props.loadCars();
  }
	render(){
		return(
			<div className='list-group'>
				{
					this.props.cars.map((car) => <Car
						key = {car.id}
						car = {car} />)
				}
			</div>
		);
	}
}

//export default connect(mapStateToProps, mapDispatchToProps)(CarsList);
export default connect(
  (state) => {return {cars: state.cars};},
  (dispatch) => bindActionCreators({loadCars}, dispatch)  
)(CarsList);

