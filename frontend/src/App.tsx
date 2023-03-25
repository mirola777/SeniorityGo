import './App.css';
import { Routes } from 'react-router-dom';
import AdminRoutes from './routes/AdminRoutes';

function App() {
	return (
		<div>
			<Routes>
				{AdminRoutes}
			</Routes>
		</div>
	);
}

export default App;
