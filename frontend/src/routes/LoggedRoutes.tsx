import { Navigate, Route } from 'react-router-dom';
import DeveloperPageLayout from '../pages/layouts/DeveloperPane';
import SelectProfilePage from '../pages/developer/SelectProfilePage';
import { ReactElement } from 'react';
import LeaderBoardPage from '../pages/developer/LeaderboardPage';
import ProfileDetailedPage from '../pages/developer/ProfileDetailedPage';


const ProtectedRoute = ({ children }: { children: ReactElement }) => {
    if (localStorage.getItem('access_token') === null) {
        return <Navigate to="/login" replace />;
    }

    return children;
};


const LoggedRoutes = [
    <Route path='/' element={
        <ProtectedRoute>
            <DeveloperPageLayout />
        </ProtectedRoute>
    }>
        <Route path='/profiles' element={<SelectProfilePage />} />
        <Route path='/leaderboard' element={<LeaderBoardPage />} />
        <Route path="/profiles/:id" element={<ProfileDetailedPage />} />
    </Route>
];

export default LoggedRoutes;