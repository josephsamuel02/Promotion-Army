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
            <HomePostersSlide />
            <div id="homepagebox">
                <div id="mainbtnbox">
                    <Link to={"registerbiz"}>
                        <button> Register a Busines</button>
                    </Link>

                    <Link to={"/registerpromoter"}>
                        <button>Register as a Promoter </button>
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

                <div className="prompbox">
                    <div className="boxbackground">
                        <p>Let's Hit that Target for You</p>
                    </div>
                </div>

                <div id="calltoactionbox">
                    <div id="calltoactionboxkground">
                        <div className="calltoaction">
                            <p>Promot Your Business </p>
                            <SiBrandfolder size={40} color="rgb(196, 9, 225)" />
                        </div>
                        <div className="calltoaction">
                            <p>Lets Drive Trafic to Your Business Website</p>
                            <MdWeb size={40} color="white" />
                        </div>
                        <div className="calltoaction">
                            <p>Promot Your Instagram Page</p>
                            <IoLogoInstagram
                                size={40}
                                color="rgb(243, 15, 228)"
                            />
                        </div>
                        <div className="calltoaction">
                            <p>100+ YouTub</p>
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

                <div className="prompbox">
                    <div className="boxbackground">
                        <p>
                            Create a Website for Your Business with free
                            Promotion for 3 months
                        </p>
                    </div>
                </div>

                <div className="contentbox">
                    <div className="addsCard">
                        <img
                            src="https://res.cloudinary.com/promotion-army/image/upload/v1653320533/Promotion%20Army%20Images/pexels-reafon-gates-1498332_ipkydn.jpg"
                            alt="microphone"
                        />
                    </div>
                    <div className="addsCard">
                        <img
                            src="https://res.cloudinary.com/promotion-army/image/upload/v1653299671/Promotion%20Army%20Images/pexels-monstera-9429449_t4yzkg.jpg"
                            alt="microphone"
                        />
                    </div>

                    <div className="addsCard">
                        <img
                            src="https://res.cloudinary.com/promotion-army/image/upload/v1653320548/Promotion%20Army%20Images/pexels-andrea-piacquadio-3765164_obytfp.jpg"
                            alt="microphone"
                        />
                    </div>

                    <div className="addsCard">
                        <img
                            src="https://res.cloudinary.com/promotion-army/image/upload/v1653320562/Promotion%20Army%20Images/pexels-ketut-subiyanto-4908621_tlozpz.jpg"
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
        </div>
    );
};

export default Homepage;
