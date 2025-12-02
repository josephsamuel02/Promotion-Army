import { Navigate, Route, Routes } from 'react-router-dom';
import AppShell from './components/layout/AppShell.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import BizProfile from './pages/BizProfile.jsx';
import PromoterProfile from './pages/PromoterProfile.jsx';
import RegisterBusiness from './pages/RegisterBusiness.jsx';
import RegisterPromoter from './pages/RegisterPromoter.jsx';

const App = () => {
    const isAuthenticated = false;

    return (
        <AppShell>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/login"
                    element={
                        isAuthenticated ? (
                            <Navigate replace to="/" />
                        ) : (
                            <Login />
                        )
                    }
                />
                <Route
                    path="/registerpromoter"
                    element={<RegisterPromoter />}
                />
                <Route path="/registerbiz" element={<RegisterBusiness />} />
                <Route path="/profile" element={<PromoterProfile />} />
                <Route path="/bizprofile" element={<BizProfile />} />
                <Route path="/pdashboard" element={<Dashboard />} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </AppShell>
    );
};

export default App;
