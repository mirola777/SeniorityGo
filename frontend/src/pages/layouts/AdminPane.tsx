import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminSideBar from "../../components/admin/AdminSideBar";
import AppBackround from '../../assests/images/AppBackground.jpg';

function AdminPaneLayout() {

    return (
        <div className="w-full h-screen bg-center bg-cover" style={{ backgroundImage: `url(${AppBackround})` }}>
            <div className="w-full h-screen flex flex-col bg-gradient-to-r from-gray-900/95  to-dark-blue-900/95">
                <header className="z-10">
                    <AdminHeader />
                </header>
                <div className="w-full h-screen flex overflow-hidden max-w-screen-2xl mx-auto">
                    <aside>
                        <AdminSideBar />
                    </aside>
                    <div className="w-full flex flex-col overflow-y-auto scrollbar-none">
                        <main className="flex-1">
                            <Outlet />
                        </main>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default AdminPaneLayout;