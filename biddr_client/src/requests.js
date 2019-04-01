// Requests

const BASE_URL = `http://localhost:3000/api/v1`;

// Create a module of Question related fetch request methods
const Auction = {
	// fetch all auctions from server
	all() {
		return fetch(`${BASE_URL}/auctions`, { credentials: 'include' }).then(
			(res) => res.json(),
		);
	},
	// fetch a single Auction
	one(id) {
		return fetch(`${BASE_URL}/auctions/${id}`, {
			credentials: 'include',
		}).then((res) => res.json());
	},
	// creating a Auction
	create(params) {
		// `params` is an object that represents a Auction
		return fetch(`${BASE_URL}/auctions`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(params),
		}).then((res) => res.json());
	},
	// updating a Auction
	update(id, params) {
		return fetch(`${BASE_URL}/auctions/${id}`, {
			method: 'PATCH',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(params),
		}).then((res) => res.json());
	},
	// Deleting a Auction
	delete(id) {
		return fetch(`${BASE_URL}/auctions/${id}`, {
		  method: "DELETE",
		  credentials: "include",
		}).then(res => res.json());
	}
};

// This is a helper module with methods associated with creating
// (and maybe later, destroying) a user session
const Session = {
	create(params) {
		// `params` is an object that represents a user
		// { email: 'some@email.com', password: 'some-password' }
		return fetch(`${BASE_URL}/session`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(params),
		}).then((res) => res.json());
	},
	destroy() {
		return fetch(`${BASE_URL}/session`, {
		  method: "DELETE",
		  credentials: "include"
		}).then(res => res.json());
	}
};

const User = {
	current() {
		return fetch(`${BASE_URL}/users/current`, {
			method: "GET",
			credentials: "include"
		}).then(res => res.json());
	}
};

export { Auction, Session, User };