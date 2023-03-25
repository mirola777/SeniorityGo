import { Route } from 'react-router-dom';
import AdminPaneLayout from '../pages/layouts/AdminPane';
import Home from '../pages/admin/Home';
import About from '../pages/admin/About';

export default [
    <Route path='/admin' element={<AdminPaneLayout />}>
        <Route path="/admin/" element={<Home />} />
        <Route path="/admin/profiles" element={<About />} />
    </Route>
];
