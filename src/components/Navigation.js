import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return(
        <div>
        <NavLink className="navbar logoName" to="/">JaneDoe</NavLink>
        <NavLink className="navbar" to="/">Home</NavLink>
        <NavLink className="navbar" to="/About">About</NavLink>
        <NavLink className="navbar" to="/Contact">Contact</NavLink>
        </div>
    );
};

export default Navigation;