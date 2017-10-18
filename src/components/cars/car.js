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
		if(this.state.info){
			return(
				<button onClick={this.handleClick.bind(this)} className='list-group-item list-group-item-action flex-column align-items-start'>
					<h3 className="mb-1">{ this.props.brand }</h3>
					<h5 className="mb-1"><b>Brand:</b> { this.props.brand }</h5>
					<h5 className="mb-1"><b>Model:</b> { this.props.model }</h5>
					<h5 className="mb-1"><b>Year: </b>{ this.props.year }</h5>
				</button>
			);
		}
		else{
			return(
				<button onClick={this.handleClick.bind(this)} className='list-group-item list-group-item-action flex-column align-items-start'>
					<h3 className="mb-1">{ this.props.brand }</h3>
				</button>
			);
		}
	}
}
