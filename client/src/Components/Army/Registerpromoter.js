import "./Registerpromoter.css";
import { Link } from "react-router-dom";
const Registerpromoter = () => {
    return (
        <div id="body">
            <br /> <br /> <br /> <br />
            <Link to={"/registerbiz"}>
                <p id="bizRegLink">Register a Business </p>
            </Link>
            <h3 id="promoterFormHeader">Promoter Registration Form</h3>
            <form id="registerPform">
                <input type="text" placeholder="full name" />

                <input type="email" placeholder="Email" />

                <input type="number" placeholder="phone number" />

                <input type="password" placeholder="chose password" />

                <input type="password" placeholder="re-enter password" />

                <button onClick={(e) => e.preventDefault()}>Submit</button>
                <p id="refaretext">
                    Already have an account?
                    <span onClick={() => window.location.replace("/login")}>
                        {""} Login
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Registerpromoter;
