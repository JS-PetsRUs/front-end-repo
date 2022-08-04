import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavbarSignedIn from '../src/Components/Header/NavbarSignedIn';
import NavbarSignedOut from '../src/Components/Header/NavbarSignedOut';
import Footer from '../src/Components/Footer';
import Homepage from '../src/Components/Main/Homepage';
import LoginPage from './Components/Main/LoginPage';
import SignupPage from './Components/Main/SignupPage';
import EditPost from './Components/Main/Homepage/EditPost';
import CommentsPage from './Components/Main/Homepage/CommentsPage';
import CreatePost from './Components/Main/Homepage/CreatePost';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [inputQuery, setInputQuery] = useState('');

	return (
		<>
			<header>
				{loggedIn ? (
					<NavbarSignedIn
						setInputQuery={setInputQuery}
						inputQuery={inputQuery}
						setLoggedIn={setLoggedIn}
					/>
				) : (
					<NavbarSignedOut
						setInputQuery={setInputQuery}
						inputQuery={inputQuery}
					/>
				)}
			</header>
			<main>
				<Routes>
					<Route path='/' element={<Homepage inputQuery={inputQuery} />} />
					<Route
						path='/login'
						element={<LoginPage setLoggedIn={setLoggedIn} />}
					/>
					<Route path='/signup' element={<SignupPage />} />
					<Route path='/newpost' element={<CreatePost />} />
					<Route path='/editpost/:id' element={<EditPost />} />
					<Route path='/comments/:id' element={<CommentsPage />} />
				</Routes>
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
