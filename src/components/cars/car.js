import React, {Component} from 'react';

export default class Car extends Component{
	constructor(props){
		super(props);
		this.state = {
			info: false
		};
	}
	handleClick(){
		this.setState({
			info: !this.state.info
		});
	}
	render(){
		let car = this.props.car
		if(this.state.info){
			return(
				<button onClick={(e) => this.handleClick(e)} className='list-group-item list-group-item-action flex-column align-items-start'>
					<img src={ car.image } alt={ car.brand } className="img-thumbnail" />
					<h3 className="mb-1">{ car.brand }</h3>
					<h5 className="mb-1"><b>Brand:</b> { car.brand }</h5>
					<h5 className="mb-1"><b>Model:</b> { car.model }</h5>
					<h5 className="mb-1"><b>Year: </b>{ car.year }</h5>
				</button>
			);
		}
		else{
			return(
				<button onClick={(e) => this.handleClick(e)} className='list-group-item list-group-item-action flex-column align-items-start'>
					<h3 className="mb-1">{ car.brand }</h3>
				</button>
			);
		}
	}
}
