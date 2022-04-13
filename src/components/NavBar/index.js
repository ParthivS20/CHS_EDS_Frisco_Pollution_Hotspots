import React from 'react';
import netlifyIdentity from 'netlify-identity-widget'

import {Nav, NavLink, Bars, NavMenu, NavBtn} from "./NavBarElements";

export default function NavBar() {
    return(
        <Nav>
            <NavLink to={'/'} style={{justifySelf: "start"}}>
                <h1>Frisco Pollution Hotspots</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to={'/mission'} activestyle={''}>
                    Mission
                </NavLink>
                <NavLink to={'/opportunities'} activestyle={''}>
                    Opportunities
                </NavLink>
                <NavLink to={'/contact'} activestyle={''}>
                    Contact
                </NavLink>
            </NavMenu>
            <NavBtn onClick={netlifyIdentity.open()}>
                Sign In
            </NavBtn>
        </Nav>
    )
}
