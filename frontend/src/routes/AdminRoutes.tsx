import { Route } from 'react-router-dom';
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
import DeveloperPageLayout from '../pages/layouts/DeveloperPane';
import DeveloperHome from '../pages/developer/Home';


const AdminRoutes = [
    <Route path='/' element={<DeveloperPageLayout />}>
        <Route path="/" element={<DeveloperHome />} />
    </Route>,
    <Route path='/admin' element={<AdminPaneLayout />}>
        <Route path="/admin/" element={<AdminHome />} />
        <Route path="/admin/profiles" element={<Profiles />} />
        <Route path="/admin/seniorities" element={<Seniorities />} />
        <Route path="/admin/seniorities/create" element={<CreateSeniorty />} />
        <Route path="/admin/seniorities/:id" element={<SeniorityPage />} />
        <Route path="/admin/organization" element={<OrganizationPage />} />
        <Route path='/admin/organization/update' element={<UpdateOrganization />}/>
        <Route path="/admin/requirements" element={<Requirements />} />
        <Route path="/admin/requirements/create" element={<CreateRequirement />} />
        <Route path="/admin/requirements/:id" element={<RequirementPage />} />
        <Route path='/admin/*' element={<AdminNotFound />}/>
    </Route>
];

export default AdminRoutes;
