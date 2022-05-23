import "./RegisterBiz.css";
import { Link } from "react-router-dom";

const RegisterBiz = () => {
    return (
        <div id="body">
            <br /> <br /> <br /> <br />
            <Link to={"/registerpromoter"}>
                <p id="promoterRegLink">Register as a Promoter</p>
            </Link>
            <h3 id="bizFormHeader">Business Registration Form</h3>
            <form id="registerBizform">
                <input type="text" placeholder="Business Name" />

                <input type="text" placeholder="Office Address" />

                <input type="email" placeholder="Email" />

                <input type="number" placeholder="Phone Line" />

                <input type="password" placeholder="Chose Password" />

                <input type="password" placeholder="Re-enter Password" />

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

export default RegisterBiz;
