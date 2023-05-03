import './App.css';
import { Routes } from 'react-router-dom';
import AdminRoutes from './routes/AdminRoutes';
import DeveloperRoutes from './routes/DeveloperRoutes';
import WithioutCredentialsRoutes from './routes/WithoutCredentialsRoutes';

function App() {
	return (
		<div>
			<Routes>
				{AdminRoutes},
				{DeveloperRoutes},
				{WithioutCredentialsRoutes}
			</Routes>
		</div>
	);
}

export default App;
