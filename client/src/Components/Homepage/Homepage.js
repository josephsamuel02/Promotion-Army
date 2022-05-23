import react from "react";
import "./Homepage.css";
import {
    IoLogoWhatsapp,
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoTwitter,
    IoLogoYoutube,
} from "react-icons/io";
import { MdWeb } from "react-icons/md";
import { SiBrandfolder } from "react-icons/si";

import { Link } from "react-router-dom";
import HomePostersSlide from "./HomePostersSlide";

const Homepage = () => {
    return (
        <div id="homepagebody">
            {/* <HomePostersSlide /> */}

            <img
                style={{
                    height: "100vh",
                    width: "100vw",
                    objectPosition: "center",
                    objectFit: "cover",
                }}
                src="images/pexels-polina-tankilevitch-8203158.jpg"
                // src="images/pexels-patrick-case-3420517.jpg"
                alt="photo"
            />

            <div id="mainbtnbox">
                <Link to={"/registerpromoter"}>
                    <button>Register as a Promoter </button>
                </Link>

                <Link to={"registerbiz"}>
                    <button> Register a Busines</button>
                </Link>
            </div>

            <div className="contentbox">
                <div className="addsCard">
                    <img
                        src="images/pexels-polina-tankilevitch-8203158.jpg"
                        alt="microphone"
                    />
                </div>
                <div className="addsCard">
                    <img
                        src="images/microphone-1209816_1920.jpg"
                        alt="microphone"
                    />
                </div>
                <div className="addsCard">
                    <img
                        src="images/pexels-polina-tankilevitch-8203156.jpg"
                        alt="microphone"
                    />
                </div>
            </div>
            <h1>Let's Meet The Target Together</h1>
            <div id="calltoactionbox">
                <div id="calltoactionboxkground">
                    <div className="calltoaction">
                        <p>Promot Your Youtube Chanell</p>
                        <SiBrandfolder size={40} color="rgb(196, 9, 225)" />
                    </div>
                    <div className="calltoaction">
                        <p>Promot Your Business Website</p>
                        <MdWeb size={40} color="white" />
                    </div>
                    <div className="calltoaction">
                        <p>Promot Your Instagram Page</p>
                        <IoLogoInstagram size={40} color="rgb(243, 15, 228)" />
                    </div>
                    <div className="calltoaction">
                        <p>Promot Your Youtube Chanell</p>
                        <IoLogoYoutube size={40} color="red" />
                    </div>
                    <div className="calltoaction">
                        <p>Promot Your Facebook Chanell</p>
                        <IoLogoFacebook size={40} color="blue" />
                    </div>
                </div>
            </div>

            <div id="promotbtnbox">
                <Link style={{ margin: "auto" }} to={"/registerbiz"}>
                    <button className="promotbtn">
                        Promote Your Bussiness
                    </button>
                </Link>
            </div>

            <div id="prompbox1">
                <div className="boxbackground">
                    <p>
                        Create a Website For Your Business Now and get free
                        promotion for 3 months
                    </p>
                </div>
            </div>

            <div className="contentbox">
                <div className="addsCard">
                    <img
                        src="images/WallpaperDog-996034.jpg"
                        alt="microphone"
                    />
                </div>

                <div className="addsCard">
                    <img
                        src="images/microphone-1209816_1920.jpg"
                        alt="microphone"
                    />
                </div>
                <div className="addsCard">
                    <img
                        src="images/microphone-1209816_1920.jpg"
                        alt="microphone"
                    />
                </div>
            </div>

            <div id="promotbtnbox">
                <Link style={{ margin: "auto" }} to={"/registerpromoter"}>
                    <button className="promotbtn">Become a Promoter</button>
                </Link>
            </div>
        </div>
    );
};

export default Homepage;
