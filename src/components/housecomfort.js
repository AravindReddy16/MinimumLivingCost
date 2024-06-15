import React from "react";
import "../styles/housecomfort.css";
import Com1 from "../assests/comfort1.jpeg";
import Com2 from "../assests/comfort2.jpeg";
import Com3 from "../assests/comfort3.jpeg";
import Com4 from "../assests/comfort4.jpeg";

export default function HouseComfort() {
    return (
        <div className="housecomfortpage">
            <div className="comfortimgdiv">
                <div className="imgtop">
                    <div className="f firstdiv">
                        <img src={Com1} alt="comfort" />
                        <div className="imgname">
                            <p>Flexible Leases</p>
                        </div>
                    </div>
                    <div className="f seconddiv">
                        <img src={Com2} alt="comfort" />
                        <div className="imgname">
                            <p>7-Day Happiness Guaranteed</p>
                        </div>
                    </div>
                </div>
                <div className="imgbottom">
                    <div className="f thirddiv">
                        <img src={Com3} alt="comfort" />
                        <div className="imgname">
                            <p>Monthly House Cleaning</p>
                        </div>
                    </div>
                    <div className="f forthdiv">
                        <img src={Com4} alt="comfort" />
                        <div className="imgname">
                            <p>Choose Your Own Roommate</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="comfortdetails">
                <p>Flexibility and options to suit your lifestyle.</p>
                <span>You need it? We got it. We make finding your next home easy, comfortable, and simple. From our happiness guarantee to our selective roommate finder option. We provide you the flexibility that you most desire.</span>
                <button>Search Rooms</button>
            </div>
        </div>
    )
}