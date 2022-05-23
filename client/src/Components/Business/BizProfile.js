import "./BizProfile.css";
import { IconContext } from "react-icons";
import { MdFacebook } from "react-icons/md";
import {
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoTwitter,
    IoLogoWhatsapp,
} from "react-icons/io";

const BizProfile = () => {
    return (
        <div id="bizprofile">
            <br /> <br />
            <IconContext.Provider
                value={{
                    color: "blue",
                    size: "20px",
                }}
            >
                <div id="profilepphotobox">
                    <img src="logo512.png" alt="profile" />
                </div>

                <section>
                    <div className="secbox">
                        <h1 id="promoterinfoheader">Flex Systems & Sofware</h1>

                        <div className="list">
                            <h5> Company Type </h5>
                            <span> Software Company</span>
                        </div>
                        <div className="list">
                            <h5> Email </h5>
                            <span> donaldsamptson@gmail.com</span>
                        </div>
                        <div className="list">
                            <h5> Phone </h5> <span> 09073077717</span>
                        </div>
                        <div className="list">
                            <h5> State </h5> <span> Oyo</span>
                        </div>
                        <div className="list">
                            <h5> Office Addrss </h5>
                            <span>
                                3, lagbaye street oposit sherif guid house, oke
                                mopo
                            </span>
                        </div>
                    </div>

                    <button
                        id="edditprofilebtn"
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        Eddit Profile
                    </button>
                </section>
            </IconContext.Provider>
        </div>
    );
};

export default BizProfile;
