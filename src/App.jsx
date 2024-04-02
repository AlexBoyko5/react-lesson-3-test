import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Formik, Form } from 'formik';

//!======== КОМПОНЕНТ ФОРМА ===========================

// const LoginForm = () => {
// 	const handleSubmit = (evt) => {
// 		evt.preventDefault();
// 		const form = evt.target;
// 		const { login, password } = form.elements;
// 		console.log(login, password);
// 		console.log(login.value, password.value);
// 		form.reset();
// 	};

// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<input type="text" name="login" />
// 			<input type="password" name="password" />
// 			<button type="submit">Login</button>
// 		</form>
// 	);
// };

// const LoginForm = ({ onLogin }) => {
// 	const handleSubmit = (evt) => {
// 		evt.preventDefault();

// 		const form = evt.target;
// 		const { login, password } = form.elements;

// 		// Викликаємо пропс onLogin
// 		onLogin({
// 			login: login.value,
// 			password: password.value,
// 		});

// 		form.reset();
// 	};

// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<input type="text" name="login" />
// 			<input type="password" name="password" />
// 			<button type="submit">Login</button>
// 		</form>
// 	);
// };

//!======== КОМПОНЕНТ SearchBar ===========================
const SearchBar = () => {
	const [inputValue, setInputValue] = useState('');

	const handleChange = (evt) => {
		setInputValue(evt.target.value);
	};

	return (
		<div>
			<input type="text" value={inputValue} onChange={handleChange} />
			<p>{inputValue}</p>
		</div>
	);
};
//!======== КОМПОНЕНТ АРР ===========================

// function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={reactLogo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>App.jsx</code> and save to reload.
// 				</p>
// 				<LoginForm />
// 			</header>
// 		</div>
// 	);
// }

const App = () => {
	// Колбек-функція для обробки сабміту форми
	const handleLogin = (userData) => {
		// Виконуємо необхідні операції з даними
		console.log(userData);
	};

	return (
		<div>
			<h1>Please login to your account!</h1>
			{/* Передаємо колбек як пропс форми */}
			{/* <LoginForm onLogin={handleLogin} /> */}
			<SearchBar />
		</div>
	);
};

export default App;

// 23527
// 12197
// 5682
