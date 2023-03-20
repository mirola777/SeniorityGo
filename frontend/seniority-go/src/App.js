import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from "react";


function App() {
	const [post, setPost] = React.useState(null);

	React.useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/').then((response) => {
			setPost(response.data);
		});
	}, []);

	if (!post) return null;

	return (
		<div>
			<h1>{post}</h1>
		</div>
	);
}

export default App;
