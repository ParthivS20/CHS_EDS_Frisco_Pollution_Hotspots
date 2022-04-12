import React from 'react';

import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./NavBarElements";

export default function NavBar() {
    return(
        <Nav>
            <NavLink to={'/'}>
                <h1>Logo</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to={'/about'} activestyle={''}>
                    About
                </NavLink>
                <NavLink to={'/about1'} activestyle={''}>
                    About
                </NavLink>
                <NavLink to={'/about2'} activestyle={''}>
                    About
                </NavLink>
                <NavLink to={'/about3'} activestyle={''}>
                    About
                </NavLink>
            </NavMenu>
            <NavBtn activeStyle>
                <NavBtnLink to={'/signin'}>Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
    )
}
