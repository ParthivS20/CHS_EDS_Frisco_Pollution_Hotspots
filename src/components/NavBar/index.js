import React from 'react';

import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./NavBarElements";

export default function NavBar() {
    return(
        <Nav>
            <NavLink to={'/'} style={{justifySelf: "start"}}>
                <h1>Frisco Pollution Hotspots</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to={'/Mission'} activestyle={''}>
                    Mission
                </NavLink>
                <NavLink to={'/Opportunities'} activestyle={''}>
                    Opportunities
                </NavLink>
                <NavLink to={'/Contact'} activestyle={''}>
                    Contact
                </NavLink>
            </NavMenu>
            <NavBtn activeStyle>
                <NavBtnLink to={'/signin'}>Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
    )
}
