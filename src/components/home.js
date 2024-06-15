import React from "react";
import "../styles/home.css";
import Bg from "../assests/background.png";
import Navbar from "./navbar.js";
import Map from "../assests/map.jpeg";

export default function Home() {
    return (
        <div className="homepage" id="home">
            <img src={Bg} alt="background" />
            <div className="homediv">
                <div className="navdiv">
                    <Navbar />
                </div>
                <div className="homecontent">
                    <div className="leftcontent">
                        <p>The Most Affortable Place To Stay In The San Franciso Bay Area</p>
                    </div>
                    <div className="rightcontent">
                        <div className="mapdiv">
                            <img src={Map} alt="map" />
                        </div>
                        <div className="locationdiv">
                            <div className="innerlocation">
                                <select>
                                    <option>All Type</option>
                                </select>
                                <select>
                                    <option>Neighbourhood</option>
                                </select>
                                <div className="locationsearch">
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9901 10.3188L16.2939 14.6226C16.4452 14.7739 16.5301 14.9792 16.53 15.1932C16.53 15.4072 16.4449 15.6124 16.2935 15.7637C16.1421 15.915 15.9368 15.9999 15.7228 15.9998C15.5088 15.9998 15.3036 15.9147 15.1523 15.7633L10.8485 11.4595C9.56197 12.456 7.9441 12.9249 6.32406 12.7709C4.70401 12.6169 3.20349 11.8515 2.12774 10.6304C1.05199 9.40936 0.481819 7.82433 0.533226 6.19779C0.584633 4.57125 1.25375 3.02539 2.40446 1.87468C3.55517 0.723966 5.10104 0.0548478 6.72757 0.00344105C8.35411 -0.0479657 9.93914 0.522201 11.1602 1.59795C12.3813 2.6737 13.1467 4.17423 13.3007 5.79427C13.4547 7.41432 12.9858 9.03219 11.9893 10.3188H11.9901ZM6.93033 11.1995C8.20331 11.1995 9.42415 10.6938 10.3243 9.7937C11.2244 8.89356 11.7301 7.67272 11.7301 6.39974C11.7301 5.12676 11.2244 3.90592 10.3243 3.00579C9.42415 2.10565 8.20331 1.59997 6.93033 1.59997C5.65735 1.59997 4.43651 2.10565 3.53637 3.00579C2.63624 3.90592 2.13055 5.12676 2.13055 6.39974C2.13055 7.67272 2.63624 8.89356 3.53637 9.7937C4.43651 10.6938 5.65735 11.1995 6.93033 11.1995Z" fill="white"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}