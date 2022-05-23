import "./Dashboard.css";
import {
    IoLogoWhatsapp,
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoTwitter,
    IoLogoYoutube,
} from "react-icons/io";
import { BiRadioCircle } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import React, { useState } from "react";

const Dashboard = () => {
    const [displaybox, setDisplaybox] = useState("whatsapp");

    return (
        <div id="body">
            <IconContext.Provider
                value={{
                    size: 23,
                }}
            >
                <div id="dashboardnav">
                    <h1 id="pheader">Promoter Dashboard </h1>

                    <div id="totaltasks">
                        <p onClick={() => setDisplaybox("whatsapp")}>
                            <IoLogoWhatsapp color=" rgb(6, 214, 6)" />
                            <span>2</span>
                        </p>
                        <p onClick={() => setDisplaybox("facebook")}>
                            <IoLogoFacebook color="blue" /> <span>3</span>
                        </p>
                        <p onClick={() => setDisplaybox("instagram")}>
                            <IoLogoInstagram color="rgb(243, 13, 201)" />
                            <span>2</span>
                        </p>
                        <p onClick={() => setDisplaybox("twitter")}>
                            <IoLogoTwitter color="rgb(6, 113, 214)" />
                            <span>2</span>
                        </p>
                        <p onClick={() => setDisplaybox("youtube")}>
                            <IoLogoYoutube color="red" />
                            <span>2</span>
                        </p>
                    </div>
                </div>

                <div id="contentboxview">
                    <div id="contentbox">
                        {displaybox == "whatsapp" && (
                            <div className="whatsapptask">
                                <div
                                    className="wspnav"
                                    onClick={() => setDisplaybox("none")}
                                >
                                    Whatsapp
                                </div>

                                <div className="scrollview">
                                    <div className="taskitem">
                                        <img src="images/nature.jpg" alt="" />
                                        <div className="itemstats">
                                            <p className="status">
                                                Status:
                                                <span className="indicator">
                                                    <BiRadioCircle
                                                        color="yellow"
                                                        size={10}
                                                    />
                                                </span>
                                                <span>pending</span>
                                            </p>
                                            <p className="timecount">
                                                Time remaining:
                                                <span> 18:34: 23 </span>
                                            </p>
                                        </div>
                                        <button>
                                            <h3>
                                                <IoLogoWhatsapp
                                                    size={24}
                                                    color="white"
                                                />
                                            </h3>
                                            Post
                                        </button>
                                    </div>
                                    <div className="taskitem">
                                        <img src="images/nature.jpg" alt="" />
                                        <div className="itemstats">
                                            <p className="status">
                                                Status:
                                                <span className="indicator">
                                                    <BiRadioCircle
                                                        color="yellow"
                                                        size={10}
                                                    />
                                                </span>
                                                <span>pending</span>
                                            </p>
                                            <p className="timecount">
                                                Time remaining:
                                                <span> 18:34: 23 </span>
                                            </p>
                                        </div>
                                        <button>
                                            <h3>
                                                <IoLogoWhatsapp
                                                    size={24}
                                                    color="white"
                                                />
                                            </h3>
                                            Post
                                        </button>
                                    </div>
                                    <div className="taskitem">
                                        <img src="images/nature.jpg" alt="" />
                                        <div className="itemstats">
                                            <p className="status">
                                                Status:
                                                <span className="indicator">
                                                    <BiRadioCircle
                                                        color="yellow"
                                                        size={10}
                                                    />
                                                </span>
                                                <span>pending</span>
                                            </p>
                                            <p className="timecount">
                                                Time remaining:
                                                <span> 18:34: 23 </span>
                                            </p>
                                        </div>
                                        <button>
                                            <h3>
                                                <IoLogoWhatsapp
                                                    size={24}
                                                    color="white"
                                                />
                                            </h3>
                                            Post
                                        </button>
                                    </div>
                                    <div className="taskitem">
                                        <img src="images/nature.jpg" alt="" />
                                        <div className="itemstats">
                                            <p className="status">
                                                Status:
                                                <span className="indicator">
                                                    <BiRadioCircle
                                                        color="yellow"
                                                        size={10}
                                                    />
                                                </span>
                                                <span>pending</span>
                                            </p>
                                            <p className="timecount">
                                                Time remaining:
                                                <span> 18:34: 23 </span>
                                            </p>
                                        </div>
                                        <button>
                                            <h3>
                                                <IoLogoWhatsapp
                                                    size={24}
                                                    color="white"
                                                />
                                            </h3>
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {displaybox == "facebook" && (
                            <div id="facebooktask">
                                <div
                                    className="fbnav"
                                    onClick={() => setDisplaybox("none")}
                                >
                                    Facebook
                                </div>
                                <div className="scrollview">
                                    <div className="fbtaskitem">
                                        <img src="images/nature.jpg" alt="" />
                                        <div className="itemstats">
                                            <p className="status">
                                                Status:
                                                <span className="indicator">
                                                    <BiRadioCircle
                                                        color="yellow"
                                                        size={15}
                                                    />
                                                </span>
                                                <span>pending</span>
                                            </p>
                                            <p className="timecount">
                                                Time remaining:
                                                <span> 18:34: 23 </span>
                                            </p>
                                        </div>
                                        <button>
                                            <h3>
                                                <IoLogoFacebook color="white" />
                                            </h3>
                                            Post
                                        </button>
                                    </div>
                                    <div className="fbtaskitem">
                                        <img src="images/nature.jpg" alt="" />
                                        <div className="itemstats">
                                            <p className="status">
                                                Status:
                                                <span className="indicator">
                                                    <BiRadioCircle
                                                        color="yellow"
                                                        size={15}
                                                    />
                                                </span>
                                                <span>pending</span>
                                            </p>
                                            <p className="timecount">
                                                Time remaining:
                                                <span> 18:34: 23 </span>
                                            </p>
                                        </div>
                                        <button>
                                            <h3>
                                                <IoLogoFacebook color="white" />
                                            </h3>
                                            Post
                                        </button>
                                    </div>
                                    <div className="fbtaskitem">
                                        <img src="images/nature.jpg" alt="" />
                                        <div className="itemstats">
                                            <p className="status">
                                                Status:
                                                <span className="indicator">
                                                    <BiRadioCircle
                                                        color="yellow"
                                                        size={15}
                                                    />
                                                </span>
                                                <span>pending</span>
                                            </p>
                                            <p className="timecount">
                                                Time remaining:
                                                <span> 18:34: 23 </span>
                                            </p>
                                        </div>
                                        <button>
                                            <h3>
                                                <IoLogoFacebook color="white" />
                                            </h3>
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {displaybox == "instagram" && (
                            <div id="instagramtask">
                                <div
                                    className="instanav"
                                    onClick={() => setDisplaybox("none")}
                                >
                                    Instagram
                                </div>
                                <div className="scrollview">
                                    <div className="instataskitem">
                                        <img src="images/nature.jpg" alt="" />
                                        <div className="itemstats">
                                            <p className="status">
                                                Status:
                                                <span className="indicator">
                                                    <BiRadioCircle
                                                        color="yellow"
                                                        size={15}
                                                    />
                                                </span>
                                                <span>pending</span>
                                            </p>
                                            <p className="timecount">
                                                Time remaining:
                                                <span> 18:34: 23 </span>
                                            </p>
                                        </div>
                                        <button>
                                            <h3>
                                                <IoLogoInstagram color="white" />
                                            </h3>
                                            Post
                                        </button>
                                    </div>{" "}
                                    <div className="instataskitem">
                                        <img src="images/nature.jpg" alt="" />
                                        <div className="itemstats">
                                            <p className="status">
                                                Status:
                                                <span className="indicator">
                                                    <BiRadioCircle
                                                        color="yellow"
                                                        size={15}
                                                    />
                                                </span>
                                                <span>pending</span>
                                            </p>
                                            <p className="timecount">
                                                Time remaining:
                                                <span> 18:34: 23 </span>
                                            </p>
                                        </div>
                                        <button>
                                            <h3>
                                                <IoLogoInstagram color="white" />
                                            </h3>
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {displaybox == "twitter" && (
                            <div id="twittertask">
                                <div
                                    className="twtnav"
                                    onClick={() => setDisplaybox("none")}
                                >
                                    Twitter
                                </div>
                                <div className="scrollview">
                                    <div className="twttaskitem">
                                        <img src="images/nature.jpg" alt="" />
                                        <div className="itemstats">
                                            <p className="status">
                                                Status:
                                                <span className="indicator">
                                                    <BiRadioCircle
                                                        color="yellow"
                                                        size={15}
                                                    />
                                                </span>
                                                <span>pending</span>
                                            </p>
                                            <p className="timecount">
                                                Time remaining:
                                                <span> 18:34: 23 </span>
                                            </p>
                                        </div>
                                        <button>
                                            <h3>
                                                <IoLogoTwitter color="white" />
                                            </h3>
                                            Post
                                        </button>
                                    </div>
                                    <div className="twttaskitem">
                                        <img src="images/nature.jpg" alt="" />
                                        <div className="itemstats">
                                            <p className="status">
                                                Status:
                                                <span className="indicator">
                                                    <BiRadioCircle
                                                        color="yellow"
                                                        size={15}
                                                    />
                                                </span>
                                                <span>pending</span>
                                            </p>
                                            <p className="timecount">
                                                Time remaining:
                                                <span> 18:34: 23 </span>
                                            </p>
                                        </div>
                                        <button>
                                            <h3>
                                                <IoLogoTwitter color="white" />
                                            </h3>
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {displaybox == "youtube" && (
                            <div id="youtubetask">
                                <div
                                    className="yutnav"
                                    onClick={() => setDisplaybox("none")}
                                >
                                    Youtube
                                </div>

                                <div className="scrollview">
                                    <div className="yuttaskitem">
                                        <img src="images/nature.jpg" alt="" />
                                        <div className="itemstats">
                                            <p className="status">
                                                Status:
                                                <span className="indicator">
                                                    <BiRadioCircle
                                                        color="yellow"
                                                        size={15}
                                                    />
                                                </span>
                                                <span>pending</span>
                                            </p>
                                            <p className="timecount">
                                                Time remaining:
                                                <span> 18:34: 23 </span>
                                            </p>
                                        </div>
                                        <button>
                                            <h3>
                                                <IoLogoYoutube color="white" />
                                            </h3>
                                            Post
                                        </button>
                                    </div>
                                    <div className="yuttaskitem">
                                        <img src="images/nature.jpg" alt="" />
                                        <div className="itemstats">
                                            <p className="status">
                                                Status:
                                                <span className="indicator">
                                                    <BiRadioCircle
                                                        color="yellow"
                                                        size={15}
                                                    />
                                                </span>
                                                <span>pending</span>
                                            </p>
                                            <p className="timecount">
                                                Time remaining:
                                                <span> 18:34: 23 </span>
                                            </p>
                                        </div>
                                        <button>
                                            <h3>
                                                <IoLogoYoutube color="white" />
                                            </h3>
                                            Post
                                        </button>
                                    </div>
                                    <div className="yuttaskitem">
                                        <img src="images/nature.jpg" alt="" />
                                        <div className="itemstats">
                                            <p className="status">
                                                Status:
                                                <span className="indicator">
                                                    <BiRadioCircle
                                                        color="yellow"
                                                        size={15}
                                                    />
                                                </span>
                                                <span>pending</span>
                                            </p>
                                            <p className="timecount">
                                                Time remaining:
                                                <span> 18:34: 23 </span>
                                            </p>
                                        </div>
                                        <button>
                                            <h3>
                                                <IoLogoYoutube color="white" />
                                            </h3>
                                            Post
                                        </button>
                                    </div>
                                    <div className="yuttaskitem">
                                        <img src="images/nature.jpg" alt="" />
                                        <div className="itemstats">
                                            <p className="status">
                                                Status:
                                                <span className="indicator">
                                                    <BiRadioCircle
                                                        color="yellow"
                                                        size={15}
                                                    />
                                                </span>
                                                <span>pending</span>
                                            </p>
                                            <p className="timecount">
                                                Time remaining:
                                                <span> 18:34: 23 </span>
                                            </p>
                                        </div>
                                        <button>
                                            <h3>
                                                <IoLogoYoutube color="white" />
                                            </h3>
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* CONTENST END HERE */}
                </div>
            </IconContext.Provider>
        </div>
    );
};

export default Dashboard;
