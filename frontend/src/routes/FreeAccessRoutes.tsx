import { Route } from 'react-router-dom';
import Organizations from '../pages/developer/Organizations';
import DeveloperAbout from '../pages/developer/About';
import DeveloperHome from '../pages/developer/Home';
import DeveloperPaneLayout from '../pages/layouts/DeveloperPane';
import NotFound from '../pages/developer/NotFound';
import PokemonsPage from '../pages/developer/PokemonsPage';


const FreeAccessRoutes = [
    <Route path='/' element={
        <DeveloperPaneLayout />
    }>
        <Route path="/" element={<DeveloperHome />} />
        <Route path='/about' element={<DeveloperAbout />} />
        <Route path='/organizations' element={<Organizations />} />
        <Route path='/pokemons' element={<PokemonsPage />} />
        <Route path='/*' element={<NotFound />} />
    </Route>
];

export default FreeAccessRoutes;
