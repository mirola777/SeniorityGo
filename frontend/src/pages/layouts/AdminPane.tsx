import { Outlet, Link } from "react-router-dom";

const AdminPaneLayout = () => {
    return <div>
        <nav>
            <ul>
                <li>
                    <Link to="/admin/">Home</Link>
                </li>
                <li>
                    <Link to="/admin/profiles">Profiles</Link>
                </li>
            </ul>
        </nav>
        <hr />
        <Outlet />
    </div>;
}

export default AdminPaneLayout;