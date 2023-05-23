import { Route, Navigate } from 'react-router-dom';
import DeveloperLogin from '../pages/developer/Login';
import { ReactElement } from 'react';
import DeveloperRegister from '../pages/developer/Register';
import JustBackgroundLayout from '../pages/layouts/JustBackround';


const WithioutCredentialsRoute = ({ children }: { children: ReactElement }) => {
    if (localStorage.getItem('access_token') !== null) {
        return <Navigate to="/" replace />;
    }

    return children;
};


const WithioutCredentialsRoutes = [
    <Route path='/' element={
        <WithioutCredentialsRoute>
            <JustBackgroundLayout />
        </WithioutCredentialsRoute>
    }>
        <Route path='/login' element={<DeveloperLogin />} />
        <Route path='/register' element={<DeveloperRegister />} />
    </Route>
];

export default WithioutCredentialsRoutes;
