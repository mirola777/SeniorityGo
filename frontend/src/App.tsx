import { useState, useEffect } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import {  Routes } from 'react-router-dom';
import AdminRoutes from './routes/AdminRoutes';

function App() {
	
	/*
	const [data, setData] = useState<Profile[]>([]);

	const apiUrl = process.env.REACT_APP_BACKEND_URL;
	useEffect(() => {
			axios.get(apiUrl +  'api/profile/all').then((response) => {
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

	*/
	

	return (
		<div>
			<Routes>
				{AdminRoutes}
			</Routes>
		</div>
	);
}

export default App;
