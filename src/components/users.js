import React, { Component } from 'react';
import { Users } from '../mocks/users'

class UsersList extends Component {
	constructor(){
		super();
		this.state = {
			data: Users
		}
	}
  render() {
    return (
      <div>
        <Header/>
        <table className="table table-striped table-hover">
        	<thead>
				    <tr>
				      <th>ID</th>
				      <th>First Name</th>
				      <th>Last Name</th>
				    </tr>
				  </thead>
        	<tbody>
        	 	{this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
        	</tbody>
        </table>
      </div>
    );
  }
}
class Header extends Component{
	render(){
		return(
			<div>
				<h1> Users List </h1>
			</div>
		);
	}
}
class TableRow extends Component{
	render(){
		return(
			<tr>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.name}</td>
				<td>{this.props.data.surname}</td>
			</tr>
		);
	}
}

export default UsersList;