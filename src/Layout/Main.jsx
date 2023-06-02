import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

function Main() {
    return (
        <div>
            <Header />
            <div style={{ minHeight: 'calc(100vh - 160px)' }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Main;
