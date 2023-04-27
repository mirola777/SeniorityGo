import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminSideBar from "../../components/admin/AdminSideBar";
import AppBackround from '../../assests/images/AppBackground.jpg';
import DeveloperHeader from "../../components/developer/DeveloperHeader";
import DeveloperFooter from "../../components/developer/DeveloperFooter";

function DeveloperPaneLayout() {

    return (
        <div className="w-full h-screen bg-center bg-cover" style={{ backgroundImage: `url(${AppBackround})` }}>
            <div className="w-full h-screen flex flex-col bg-gradient-to-r from-gray-900/95  to-dark-blue-900/95">
                <header className="z-10">
                    <DeveloperHeader />
                </header>
                <div className="w-full h-screen flex  overflow-hidden max-w-screen-2xl mx-auto">
                    <main>
                        <Outlet />
                    </main>
                </div>
                <footer>
                    <DeveloperFooter />
                </footer>
            </div>
        </div>

    );
}

export default DeveloperPaneLayout;