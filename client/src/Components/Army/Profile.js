import "./Profile.css";
import { IconContext } from "react-icons";
import { MdFacebook } from "react-icons/md";
import {
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoTwitter,
    IoLogoWhatsapp,
} from "react-icons/io";

const Profile = () => {
    return (
        <div id="profile">
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
                        <div className="list">
                            <h5> Name </h5> <span> Donald Samptson</span>
                        </div>
                        <div className="list">
                            <h5> Email </h5>
                            <span> donaldsamptson@gmail.com</span>
                        </div>
                        <div className="list">
                            <h5> Phone </h5> <span> 09073077717</span>
                        </div>
                    </div>

                    <h1 id="promoterinfoheader">Promoter Info</h1>

                    <div className="secbox">
                        <div className="list">
                            <h5> Account Type </h5> <span> promoter</span>
                        </div>

                        <div className="list">
                            <h5> State of Residence</h5> <span> Lagos</span>
                        </div>

                        <div className="list">
                            <div className="listside1">
                                <h4>
                                    <IoLogoWhatsapp color="limegreen" />
                                </h4>
                                <h5>WhatsApp Number</h5>
                                <span
                                    id="verifiednote"
                                    style={{
                                        color: "limegreen",
                                    }}
                                >
                                    verified
                                </span>
                            </div>

                            <span>09073077717</span>
                        </div>

                        <div className="list">
                            <div className="listside1">
                                <h4>
                                    <IoLogoFacebook />
                                </h4>
                                <h5>Facebook Link</h5>
                                <span
                                    id="verifiednote"
                                    style={{
                                        color: "limegreen",
                                    }}
                                >
                                    verified
                                </span>
                            </div>
                            <span> facebook.com/myaccount</span>
                        </div>

                        <div className="list">
                            <div className="listside1">
                                <h4>
                                    <IoLogoInstagram color="rgba(250, 18, 204, 0.711)" />
                                </h4>
                                <h5> Instagram Handle</h5>
                                <span
                                    id="verifiednote"
                                    style={{
                                        color: "limegreen",
                                    }}
                                >
                                    verified
                                </span>
                            </div>
                            <span> @minimouse34</span>
                        </div>
                        <div className="list">
                            <div className="listside1">
                                <h4>
                                    <IoLogoTwitter color="rgba(7, 202, 246, 0.875)" />
                                </h4>
                                <h5> Twitter Handle</h5>
                                <span
                                    id="verifiednote"
                                    style={{
                                        color: "limegreen",
                                    }}
                                >
                                    verified
                                </span>
                            </div>
                            <span> @mini_mouse</span>
                        </div>

                        <div className="list">
                            <h5> Invite Link:</h5>
                            <span>
                                <input
                                    type="text"
                                    value="https://website.com?invit=suernameswjrh34b4b"
                                    readOnly
                                />

                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                >
                                    copy
                                </button>
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

export default Profile;
