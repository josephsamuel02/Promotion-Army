import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Homepage from "./Components/Homepage/Homepage";
import Login from "./Components/Login/Login";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Registerpromoter from "./Components/Army/Registerpromoter";
import RegisterBiz from "./Components/Business/RegisterBiz";
import Profile from "./Components/Army/Profile";
import BizProfile from "./Components/Business/BizProfile";
import Dashboard from "./Components/Army/Dashboard";
function App() {
    const theuser = false;

    return (
        <div className="App">
            <Router>
                <Nav />

                <Routes>
                    <Route
                        path="/registerbiz"
                        element={
                            theuser ? (
                                <Navigate replace to="/" />
                            ) : (
                                <RegisterBiz />
                            )
                        }
                    />
                    <Route
                        path="/registerpromoter"
                        element={
                            theuser ? (
                                <Navigate replace to="/" />
                            ) : (
                                <Registerpromoter />
                            )
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            theuser ? <Navigate replace to="/" /> : <Login />
                        }
                    />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/bizprofile" element={<BizProfile />} />

                    <Route path="/pdashboard" element={<Dashboard />} />
                    {/* <Route path="/bdashboard" element={<Product />} /> */}
                    {/* <Route path="/categoryList" element={<CategoryList />} /> */}
                    <Route path="/" element={<Homepage />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
