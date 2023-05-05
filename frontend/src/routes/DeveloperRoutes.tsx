import { Route } from 'react-router-dom';
import DeveloperPageLayout from '../pages/layouts/DeveloperPane';
import DeveloperHome from '../pages/developer/Home';
import DeveloperAbout from '../pages/developer/About';
import NotFound from '../pages/developer/NotFound';
import Organizations from '../pages/developer/Organizations';


const DeveloperRoutes = [
    <Route path='/' element={<DeveloperPageLayout />}>
        <Route path="/" element={<DeveloperHome />} />
        <Route path='/about' element={<DeveloperAbout />} />
        <Route path='/organizations' element={<Organizations />} />
        <Route path='/*' element={<NotFound />} />
    </Route>
];

export default DeveloperRoutes;