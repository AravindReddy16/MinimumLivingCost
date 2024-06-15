import React from "react";
import "../styles/customer.css";

export default function Customer() {
    return (
        <div className="customerpage">
            <p>Your property with us and be Confident that Your Room will be Filled Out!</p>
            <div className="formdiv">
                <p>Add A New Property</p>
                <div className="firstform">
                    <div className="first">
                        <p>Name <span>*</span></p>
                        <input type="text" placeholder="Enter Name" />
                    </div>
                    <div className="first">
                        <p>Address <span>*</span></p>
                        <input type="text" placeholder="Enter Address" />
                    </div>
                    <div className="first">
                        <p>Unit Number <span>*</span></p>
                        <input type="text" placeholder="Enter Unit" />
                    </div>
                </div>
                <div className="secondform">
                    <div className="second">
                        <p>City <span>*</span></p>
                        <select>
                            <option>Select City</option>
                        </select>
                    </div>
                    <div className="second">
                        <p>State <span>*</span></p>
                        <select>
                            <option>Select State</option>
                        </select>
                    </div>
                    <div className="second">
                        <p>Room Type <span>*</span></p>
                        <select>
                            <option>Select Room Type</option>
                        </select>
                    </div>
                </div>
                <div className="thirdform">
                    <div className="third">
                        <p>Price <span>*</span></p>
                        <input type="text" placeholder="Enter Price" />
                    </div>
                    <div className="third">
                        <p>Room Type <span>*</span></p>
                        <select>
                            <option>Select Room Type</option>
                        </select>
                    </div>
                </div>
                <div className="forthform">
                    <p>Description <span>*</span></p>
                    <textarea placeholder="Enter Description"></textarea>
                </div>
                <div className="fifthform">
                    <p>Upload Photos</p>
                    <div className="dragdrop">
                        <p id="dragtop">Drag your images here, or <span>browse</span></p>
                        <p id="dragbottom">Supported:  JPG, JPEG, PNG</p>
                    </div>
                </div>
                <div className="formbtn">
                    <button>Add New Property</button>
                </div>
            </div>
        </div>
    )
}