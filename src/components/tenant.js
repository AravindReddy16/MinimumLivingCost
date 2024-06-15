import React from "react";
import "../styles/tenant.css";
import TenantItem from "./tenantitem.js";
import ImgArray from "../data/itemdata.js";

export default function Tenant() {
    return (
        <div className="tenantpage" id="tenant">
            <div className="tenantheader">
                <div className="headdiv">
                    <p>List Of Properties</p>
                    <hr></hr>
                </div>
                <div className="buttondiv">
                    <button>View All Property</button>
                </div>
            </div>
            <div className="tenantlistdiv">
                {ImgArray.map((item) => <TenantItem img={item.image} />)}
            </div>
            <div className="listpagesdiv">
                <div className="pagediv">
                    <button id="fbtn">First</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button id="nbtn">Next</button>
                </div>
            </div>
        </div>
    )
}