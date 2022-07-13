import './CreatePost.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreatePost(props) {
	const navigate = useNavigate();
	const initialPostState = {
		title: '',
		body: '',
	};

	const [postState, setPostState] = useState(initialPostState);

	function handleChange(event) {
		setPostState({ ...postState, [event.target.id]: event.target.value });
	}
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post(
				'https://redoit-api.herokuapp.com/api/posts',
				postState
			);
			// const response = await fetch('http://localhost:3111/icecreams', {
			// 	method: 'POST',
			// 	body: JSON.stringify(flavor),
			// 	headers:{
			// 		'Content-type': 'application/json'
			// 	}
			// });
			console.log(response);
			if (response.status === 201) {
				navigate('/');
				console.log(response);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Form
			className='create-post d-flex flex-column align-items-center p-3 gap-3 mt-5'
			onSubmit={handleSubmit}>
			<Form.Group controlId='title'>
				<Form.Control
					className='title-input'
					type='text'
					placeholder='Title'
					value={postState.title}
					onChange={handleChange}
				/>
			</Form.Group>

			<Form.Group controlId='body'>
				<Form.Control
					className='body-input d-flex justify-content-start'
					type='text'
					placeholder='Your Text'
					onChange={handleChange}
					value={postState.body}
				/>
			</Form.Group>

			<div className='bottom-button-container d-flex justify-content-end gap-2'>
				<button className='btn'>Cancel</button>
				<button className='btn'>Post</button>
			</div>
		</Form>
	);
}

export default CreatePost;
