import { Navigate, Route } from 'react-router-dom';
import DeveloperPageLayout from '../pages/layouts/DeveloperPane';
import SelectProfilePage from '../pages/developer/SelectProfilePage';
import { ReactElement } from 'react';
import LeaderBoardPage from '../pages/developer/LeaderboardPage';
import ProfileDetailedPage from '../pages/developer/ProfileDetailedPage';
import DeveloperPage from '../pages/developer/DeveloperPage';
import DeveloperAvatar from '../pages/developer/DeveloperAvatar';


const ProtectedRoute = ({ children }: { children: ReactElement }) => {
    if (localStorage.getItem('access_token') === null) {
        return <Navigate to="/login" replace />;
    }

    return children;
};


const DeveloperRoutes = [
    <Route path='/' element={
        <ProtectedRoute>
            <DeveloperPageLayout />
        </ProtectedRoute>
    }>
        <Route path='/profiles' element={<SelectProfilePage />} />
        <Route path='/leaderboard' element={<LeaderBoardPage />} />
        <Route path="/profiles/:id" element={<ProfileDetailedPage />} />
        <Route path='/developer' element={<DeveloperPage />} />
        <Route path='/avatar' element={<DeveloperAvatar />} />
    </Route>
];

export default DeveloperRoutes;