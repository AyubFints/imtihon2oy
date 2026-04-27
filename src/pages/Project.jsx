import React from 'react';
import "./style.css";
import { NavLink, Outlet } from 'react-router-dom'; 

function Project() {
    return (
        <div>
            <div style={{ paddingTop: "150px", paddingBottom: "100px", textAlign: "center" }} className='divin3'> 
                <h1 style={{ color: "#fff", marginBottom: "10px" }}>Projects</h1>
                <p style={{ color: "#fff" }}>
                    Quality and affordability are an integral part of Focil’s design and construction.
                </p>
            </div>

            <div className="ikkihil" style={{ textAlign: "center", marginTop: "30px", display:"flex", gap:30, justifyContent:"center"}}>
                <NavLink className="linkk" to="/Project/Images">Images</NavLink>
                <NavLink className="linkk" to="/Project/News">News</NavLink>
                <NavLink className="linkk" to="/Project/Gallery">Gallery</NavLink>
                <NavLink className="linkk" to="/Project/Videos">Videos</NavLink>
            </div>

            <div style={{ marginTop: "40px" }}>
                <Outlet />
            </div>
        </div>
    );
}

export default Project;