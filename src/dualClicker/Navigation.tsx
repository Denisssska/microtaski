import React from 'react';
import {NavLink} from "react-router-dom";


export const Navigation = () => {
    return (
        <nav>
            <div>
                <NavLink  style={({ isActive }) =>({color:isActive ? " white" : "yellow"})} to='/first'>First count</NavLink>
            </div>
            <div>
                <NavLink style={({ isActive }) =>({color: isActive ? 'white' : 'yellow'})} to='/second'>Second count</NavLink>
            </div>
        </nav>
    );
};

