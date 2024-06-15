import React, {useState} from "react";
import Logo from "../assests/logo.png";
import "../styles/navbar.css";
import { Link } from "react-scroll";

export default function Navbar() {
    let [size, setSize] = useState(window.innerWidth)
    let [inView, setInView] = useState(false)

    window.addEventListener('resize', () => {
        setSize(window.innerWidth)
    })

    function getInView() {
        setInView(!inView)
    }

    return (
        <div className="navbarpage">
            <div className="logodiv">
                <img src={Logo} alt="logo" />
            </div>
            {size >= 991 && (
                <div className="navlistdiv">
                    <div className="navitem">
                        <Link to="home" smooth={true} offset={0} duration={800}>Home</Link>
                    </div>
                    <div className="navitem">
                        <Link to="landlord" smooth={true} offset={0} duration={800}>Landloard</Link>
                    </div>
                    <div className="navitem">
                        <Link to="tenant" smooth={true} offset={0} duration={800}>Tenants</Link>
                    </div>
                    <div className="navitem">
                        <Link to="contact" smooth={true} offset={0} duration={800}>Contact Us</Link>
                    </div>
                </div>
            )}
            {size < 991 && (
                <>
                    <div className="navlistlogo">
                        {inView ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="2rem" onClick={getInView}><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" fill="white" /></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="2rem" onClick={getInView}><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" fill="white" /></svg>
                        )}
                    </div>
                    {inView && (
                        <div className="navitemsdiv" onClick={getInView}>
                            <Link to="home" smooth={true} offset={0} duration={800} onClick={getInView}>Home</Link>
                            <Link to="landlord" smooth={true} offset={0} duration={800} onClick={getInView}>Landloard</Link>
                            <Link to="tenant" smooth={true} offset={0} duration={800} onClick={getInView}>Tenants</Link>
                            <Link to="contact" smooth={true} offset={0} duration={800} onClick={getInView}>Contact Us</Link>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}