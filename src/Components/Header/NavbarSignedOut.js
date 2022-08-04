import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NavbarSignedOut({ setInputQuery }) {
	let navigate = useNavigate();
	const initialFormState = {
		input: '',
	};
	const [formState, setFormState] = useState(initialFormState);

	// function for the logo button to redirect to the home
	function logoButton(event) {
		event.preventDefault();
		navigate('/');
	}

	// function for change in input
	function handleChange(event) {
		setFormState({ ...formState, input: event.target.value });
		setInputQuery(event.target.value);
	}

	// // function for the login
	// function handleLogIn(event) {
	// 	event.preventDefault();
	// 	navigate('/login');
	// }

	// // function for signUp
	// function handleSignUp(event) {
	// 	event.preventDefault();
	// 	navigate('/signup');
	// }

	//function for new post
	function handleNewPost(event) {
		event.preventDefault();
		navigate('/newpost');
	}

	return (
		<Navbar className='form fluid-container navbar'>
			<Container className='fluid-container'>
				<Navbar.Brand className='d-flex align-items-center'>
					<div className='logo-container'>
						<img
							className='logo'
							src={require('../../images/saturn.png')}
							alt='saturn-logo'
							onClick={logoButton}
						/>
					</div>
				</Navbar.Brand>
				<Form>
					<Form.Control
						className='input search-bar'
						type='text'
						placeholder='Search Redo-it'
						onChange={handleChange}
						value={formState.input}
					/>
				</Form>
				<Nav className='d-flex align-items-center justify-content-center'>
					{/* <Nav.Link
						className='d-flex align-items-center justify-content-center'
						onClick={handleLogIn}>
						<button className='btn' type='submit'>
							Log In
						</button>
					</Nav.Link>

					<Nav.Link
						className='d-flex align-items-center justify-content-center'
						onClick={handleSignUp}>
						<button className='btn' type='submit'>
							Sign Up
						</button>
					</Nav.Link> */}

					<Nav.Link
						className='d-flex align-items-center justify-content-center'
						onClick={handleNewPost}>
						<button className='btn' type='submit'>
							Create a Post
						</button>
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default NavbarSignedOut;
