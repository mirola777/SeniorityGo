import { Outlet } from "react-router-dom";
import AdminSideBar from "../../components/admin/AdminSideBar";

function AdminPaneLayout() {
    return (
        <div className="flex h-screen overflow-hidden">
            <aside>
                <AdminSideBar />
            </aside>
            <main className="flex-1 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
}

export default AdminPaneLayout;