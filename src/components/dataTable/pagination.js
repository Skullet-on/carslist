import React, {Component} from 'react';

export default class Pagination extends Component{
	constructor(props){
		super(props);
		this.state = {
			page: 0
		};
	}
	handleClick(e){
		console.log(e);
	}
	render(){
		return(
			<div>
				<nav aria-label="Page navigation example">
				  <ul className="pagination">
				    <li className="page-item">
				      <a className="page-link" onClick={e => this.handleClick(e)} aria-label="First">
				        <span aria-hidden="true">&laquo;</span>
				        <span className="sr-only">First</span>
				      </a>
				    </li>
				    <li className="page-item">
				      <a
				      	role="button"
				      	className="page-link" 
				      	aria-label="Previous"
				      	onClick={e => this.handleClick(e)}
				      >
				        <span aria-hidden="true">prev</span>
				        <span className="sr-only">Previous</span>
				      </a>
				    </li>
				    <li className="page-item"><a className="page-link" onClick={e => this.handleClick(e)}>1</a></li>
				    <li className="page-item"><a className="page-link" onClick={e => this.handleClick(e)}>2</a></li>
				    <li className="page-item"><a className="page-link" onClick={e => this.handleClick(e)}>3</a></li>
				    <li className="page-item">
				      <a className="page-link" onClick={e => this.handleClick(e)} aria-label="Next">
				        <span aria-hidden="true">next</span>
				        <span className="sr-only">Next</span>
				      </a>
				    </li>
				    <li className="page-item">
				      <a className="page-link" onClick={e => this.handleClick(e)} aria-label="Last">
				        <span aria-hidden="true">&raquo;</span>
				        <span className="sr-only">Last</span>
				      </a>
				    </li>
				  </ul>
				</nav>
			</div>
		);
	}
}