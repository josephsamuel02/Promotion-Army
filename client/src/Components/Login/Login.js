import "./Login.css";

const Login = () => {
    return (
        <div id="loginpage">
            <br /> <br /> <br />
            <form id="loginform">
                <input type="number" placeholder="phone number" />
                <input type="password" placeholder="password" />

                <button onClick={(e) => e.preventDefault()}>Login</button>
                <p id="referencetext">
                    Don't have an account?
                    <span
                        onClick={() =>
                            window.location.replace("/registerpromoter")
                        }
                    >
                        {""} Register Here
                    </span>
                </p>

                <p id="forgotpass">Forgot Password</p>
            </form>
        </div>
    );
};

export default Login;
