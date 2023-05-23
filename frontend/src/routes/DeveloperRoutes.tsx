import { Navigate, Route } from 'react-router-dom';
import DeveloperPageLayout from '../pages/layouts/DeveloperPane';
import { ReactElement } from 'react';
import DeveloperPage from '../pages/developer/DeveloperPage';
import DeveloperAvatar from '../pages/developer/DeveloperAvatar';
import RequirementValidatedPage from '../pages/developer/RequirementValidatedPage';


const ProtectedRoute = ({ children }: { children: ReactElement }) => {
    if (localStorage.getItem('access_token') === null) {
        return <Navigate to="/login" replace />;
    }

    if (localStorage.getItem('role') !== 'developer') {
        return <Navigate to="/" replace />;
    }

    return children;
};


const DeveloperRoutes = [
    <Route path='/' element={
        <ProtectedRoute>
            <DeveloperPageLayout />
        </ProtectedRoute>
    }>
        <Route path='/developer' element={<DeveloperPage />} />
        <Route path='/avatar' element={<DeveloperAvatar />} />
        <Route path='requirements/validated' element={<RequirementValidatedPage />} />
    </Route>
];

export default DeveloperRoutes;