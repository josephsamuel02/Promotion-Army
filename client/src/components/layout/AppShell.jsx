import PropTypes from 'prop-types';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';

const AppShell = ({ children }) => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <Navbar />
            <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
                {children}
            </main>
            <Footer />
        </div>
    );
};

AppShell.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppShell;
