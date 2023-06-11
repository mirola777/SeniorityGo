import { Route, Navigate } from 'react-router-dom';
import AdminPaneLayout from '../pages/layouts/AdminPane';
import AdminHome from '../pages/admin/Home';
import Profiles from '../pages/admin/profile/Profiles';
import Seniorities from '../pages/admin/seniority/Seniorities';
import CreateSeniorty from '../pages/admin/seniority/CreateSeniority';
import SeniorityPage from '../pages/admin/seniority/SeniorityPage';
import AdminNotFound from '../pages/admin/AdminNotFound';
import OrganizationPage from '../pages/admin/organization/OrganizationPage';
import UpdateOrganization from '../pages/admin/organization/UpdateOrganization';
import Requirements from '../pages/admin/requirement/Requirements';
import CreateRequirement from '../pages/admin/requirement/CreateRequirement';
import RequirementPage from '../pages/admin/requirement/RequirementPage';
import { ReactElement } from 'react';
import Users from '../pages/admin/user/Users';
import ValidateRequirementRequestsPage from '../pages/admin/request/ValidateRequirementRequestsPage';
import JoinProfileRequestsPage from '../pages/admin/request/JoinProfileRequestsPage';


const ProtectedRoute = ({ children }: { children: ReactElement }) => {
    if (localStorage.getItem('access_token') === null) {
        return <Navigate to="/login" replace />;
    }
    
    if (localStorage.getItem('role') !== 'admin') {
        return <Navigate to="/" replace />;
    }

    return children;
};


const AdminRoutes = [
    <Route path='/admin' element={
        <ProtectedRoute>
            <AdminPaneLayout />
        </ProtectedRoute>
    }>
        <Route path="/admin/" element={<AdminHome />} />
        <Route path="/admin/profiles" element={<Profiles />} />
        <Route path="/admin/seniorities" element={<Seniorities />} />
        <Route path="/admin/seniorities/create" element={<CreateSeniorty />} />
        <Route path="/admin/seniorities/:id" element={<SeniorityPage />} />
        <Route path="/admin/organization" element={<OrganizationPage />} />
        <Route path='/admin/organization/update' element={<UpdateOrganization />} />
        <Route path="/admin/requirements" element={<Requirements />} />
        <Route path="/admin/requirements/create" element={<CreateRequirement />} />
        <Route path="/admin/requirements/:id" element={<RequirementPage />} />
        <Route path='/admin/*' element={<AdminNotFound />} />
        <Route path='/admin/users' element={<Users />} />
        <Route path='/admin/requests/requirements' element={<ValidateRequirementRequestsPage />} />
        <Route path='/admin/requests/profiles' element={<JoinProfileRequestsPage />} />
    </Route>
];

export default AdminRoutes;