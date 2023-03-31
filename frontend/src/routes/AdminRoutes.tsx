import { Route } from 'react-router-dom';
import AdminPaneLayout from '../pages/layouts/AdminPane';
import Home from '../pages/admin/Home';
import Profiles from '../pages/admin/Profiles';
import Seniorities from '../pages/admin/Seniorities';
import CreateSeniorty from '../pages/admin/CreateSeniority';

const AdminRoutes = [
    <Route path='/admin' element={<AdminPaneLayout />}>
        <Route path="/admin/" element={<Home />} />
        <Route path="/admin/profiles" element={<Profiles />} />
        <Route path="/admin/seniorities" element={<Seniorities />} />
        <Route path="/admin/seniorities/create" element={<CreateSeniorty />} />
    </Route>
];

export default AdminRoutes;
