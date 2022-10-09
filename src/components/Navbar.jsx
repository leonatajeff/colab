import React from "react";
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav class="p-2 mt-0 fixed w-full z-10 bottom-0">
            <div class="absolute text-white bottom-0 right-0 space-x-8 p-6 text-lg bg-white-500/50 backdrop-blur-sm bg-contain">
                <NavLink to='/'>Join Us</NavLink>
                <NavLink to='/mission'>Our Mission</NavLink>
                <NavLink to='/team'>Our Team</NavLink>
            </div>
        </nav>
    );
}