import "./Nav.css";
import { IconContext } from "react-icons";
import { MdViewSidebar, MdGMobiledata } from "react-icons/md";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav id="nav">
            <IconContext.Provider
                value={{
                    color: "white",
                    size: "25px",
                }}
            >
                <h1 id="logo">
                    <Link to={"/"}>
                        <img src="images/screencapture-log.jpg" alt="logo" />
                    </Link>
                </h1>
                <div id="loginAndNavWraper">
                    <h3
                        id="login"
                        onClick={() => window.location.replace("/login")}
                    >
                        Login
                    </h3>
                    <h1 id="navbtn">
                        <MdViewSidebar />
                    </h1>
                </div>
            </IconContext.Provider>
        </nav>
    );
};

export default Nav;
