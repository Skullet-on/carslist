import React, {Component} from 'react';

export default class Pagination extends Component{
	constructor(props){
		super(props);
		this.state = {
			page: 0
		};
	}
	handleClick(e){
		console.log(e.target.value);
	}
	render(){
		return(
			<div>
				<nav aria-label="Page navigation example">
				  <ul className="pagination">
				    <li className="page-item">
				      <button 
				      	className="page-link" 
				      	onClick={e => this.handleClick(e)} 
				      	aria-label="First"
				      	value="first"
				      >
				        <span aria-hidden="true">&laquo;</span>
				        <span className="sr-only">First</span>
				      </button>
				    </li>
				    <li className="page-item">
				      <button
				      	className="page-link" 
				      	aria-label="Previous"
				      	onClick={e => this.handleClick(e)}
				      	value="prev"
				      >
				        <span className="sr-only">Previous</span>
				        <span aria-hidden="true">prev</span>
				      </button>
				    </li>
				    <li className="page-item"><button className="page-link" onClick={e => this.handleClick(e)} value="1">1</button></li>
				    <li className="page-item"><button className="page-link" onClick={e => this.handleClick(e)} value="2">2</button></li>
				    <li className="page-item"><button className="page-link" onClick={e => this.handleClick(e)} value="3">3</button></li>
				    <li className="page-item">
				      <button className="page-link" 
				      	onClick={e => this.handleClick(e)} 
				      	aria-label="Next"
				      	value="next"
				      >
				        <span aria-hidden="true">next</span>
				        <span className="sr-only">Next</span>
				      </button>
				    </li>
				    <li className="page-item">
				      <button className="page-link" 
				      	onClick={e => this.handleClick(e)} 
				      	aria-label="Last"
				      	value="last"
				      >
				        <span aria-hidden="true">&raquo;</span>
				        <span className="sr-only">Last</span>
				      </button>
				    </li>
				  </ul>
				</nav>
			</div>
		);
	}
}
