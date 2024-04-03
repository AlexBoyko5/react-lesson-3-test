import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './FeedbackForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';

//!======== FeedbackForm ===========================
const FeedbackSchema = Yup.object().shape({
	username: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	email: Yup.string().email('Must be a valid email!').required('Required'),
	message: Yup.string()
		.min(3, 'Too short')
		.max(256, 'Too long')
		.required('Required'),
	level: Yup.string().oneOf(['good', 'neutral', 'bad']).required('Required'),
});

const initialValues = {
	username: '',
	email: '',
	message: '',
	level: 'good',
};

const FeedbackForm = () => {
	const nameFieldId = useId();
	const emailFieldId = useId();
	const msgFieldId = useId();
	const levelFieldId = useId();

	const handleSubmit = (values, actions) => {
		console.log(values);
		actions.resetForm();
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={FeedbackSchema}
		>
			<Form>
				<div>
					<label htmlFor={nameFieldId}>Username</label>
					<Field type="text" name="username" id={nameFieldId} />
					<ErrorMessage name="username" as="span" />
				</div>

				<div>
					<label htmlFor={emailFieldId}>Email</label>
					<Field type="email" name="email" id={emailFieldId} />
					<ErrorMessage name="email" as="span" />
				</div>

				<div>
					<label htmlFor={msgFieldId}>Message</label>
					<Field as="textarea" name="message" id={msgFieldId} rows="5" />
					<ErrorMessage name="message" as="span" />
				</div>

				<div>
					<label htmlFor={levelFieldId}>Service satisfaction level</label>
					<Field as="select" name="level" id={levelFieldId}>
						<option value="good">Good</option>
						<option value="neutral">Neutral</option>
						<option value="bad">Bad</option>
					</Field>
					<ErrorMessage name="level" as="span" />
				</div>

				<button type="submit">Submit</button>
			</Form>
		</Formik>
	);
};

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
// const SearchBar = () => {
// 	const [inputValue, setInputValue] = useState('');

// 	const handleChange = (evt) => {
// 		setInputValue(evt.target.value);
// 	};

// 	return (
// 		<div>
// 			<input type="text" value={inputValue} onChange={handleChange} />
// 			<p>{inputValue}</p>
// 		</div>
// 	);
// };
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
	// const handleLogin = (userData) => {
	// 	// Виконуємо необхідні операції з даними
	// 	console.log(userData);
	// };

	return (
		<div>
			<h1>Please login to your account!</h1>
			{/* Передаємо колбек як пропс форми */}
			{/* <LoginForm onLogin={handleLogin} /> */}
			{/* <SearchBar /> */}
			{/* <LoginForm /> */}
			<FeedbackForm />
		</div>
	);
};

export default App;

// 23527
// 12197
// 5682
