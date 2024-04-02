import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Formik, Form } from 'formik';

const LoginForm = () => {
	const handleSubmit = (evt) => {
		evt.preventDefault();
		const form = evt.target;
		const { login, password } = form.elements;
		console.log(login, password);
		console.log(login.value, password.value);
		form.reset();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" name="login" />
			<input type="password" name="password" />
			<button type="submit">Login</button>
		</form>
	);
};

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={reactLogo} className="App-logo" alt="logo" />
				<p>
					Edit <code>App.jsx</code> and save to reload.
				</p>
				<LoginForm />
			</header>
		</div>
	);
}

export default App;
