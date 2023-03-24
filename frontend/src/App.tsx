import { useState, useEffect } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import { Profile } from './models/profile';

function App() {
	const [data, setData] = useState<Profile[]>([]);

	useEffect(() => {
		axios.get('http://localhost:8000/api/profile/all').then((response) => {
			const profiles: Profile[] = response.data.map((json: any) => {
				const profile = new Profile(
					json.id,
					json.name,
					json.description,
					[],
					[]
				);

				return profile;
			});

			setData(profiles);
		});
	})

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>An Awesome Blog </h1>
				<h3>On Django, React, Postgres, and Docker </h3>
				{data.map((profile, index) => (
					<a data-index={index}>
						<p>{profile.getId()}</p>
						<p>{profile.getName()}</p>
						<p>{profile.getDescription()}</p>
					</a>
				))}
			</header>
		</div>
	);
}

export default App;
