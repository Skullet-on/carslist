import React, { Component } from 'react';
import { Users } from '../mocks/users';

class UsersList extends Component {
	render() {
		return (
			<div>
				<h1>Users</h1>
				<table className="table table-striped table-hover">
					<thead>
						<tr>
							<th>ID</th>
							<th>First Name</th>
							<th>Last Name</th>
						</tr>
					</thead>
					<tbody>
						{Users.map((user) => this.getRow(user))}
					</tbody>
				</table>
			</div>
		);
	}
	getRow(data) {
		return(
			<tr>
				<td>{data.id}</td>
				<td>{data.name}</td>
				<td>{data.surname}</td>
			</tr>
		);
	}
}

export default UsersList;
