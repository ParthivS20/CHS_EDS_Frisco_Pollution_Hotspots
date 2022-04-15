import React, {useRef, useState} from 'react';
import netlifyIdentity from 'netlify-identity-widget'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    LogInBtn,
    Profile,
    ProfileImg,
    UserMenu,
    SignOutBtn,
    UserMenuExitBtn, UserMenuContent
} from "./NavBarElements";

import {ClickOutside} from "../../lib/ClickOutside";

import profile from './profile.png'

export default function NavBar({user}) {
    const [menuState, setMenuState] = useState(false);
    const [userMenuAnimation, setUserMenuAnimation] = useState('initial');

    const handleSignIn = () => {
        netlifyIdentity.open();
    }

    const handleSignOut = () => {
        netlifyIdentity.logout()
    }

    const closeUserMenu = () => {
        setMenuState(false);
        setUserMenuAnimation('setInvisible');
    }

    const toggleUserMenu = () => {
        setMenuState(!menuState);
        if(menuState) setUserMenuAnimation('setInvisible')
        else setUserMenuAnimation('setVisible')
    }

    const getProfilePic = () => {
        if(user && user.avatar_url) {
            return user.avatar_url;
        }
        return profile;
    }

    const menu = useRef(null);
    const profileBtn = useRef(null);

    ClickOutside(menu, closeUserMenu, [profileBtn])

    return (
        <Nav>
            <NavLink to={'/'} style={{justifySelf: "start"}}>
                <h1>Frisco Pollution Hotspots</h1>
            </NavLink>
            <Bars/>
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
            {user ?
                <>
                    <Profile onClick={toggleUserMenu} ref={profileBtn}>
                        <ProfileImg src={getProfilePic()} />
                    </Profile>
                    <UserMenu ref={menuState ? menu : null} className={userMenuAnimation}>
                        <UserMenuContent>
                            <h3>{`Welcome, ${user.full_name.split(" ")[0]}`}</h3>
                            <SignOutBtn onClick={handleSignOut}>
                                Sign Out
                            </SignOutBtn>
                            <UserMenuExitBtn onClick={closeUserMenu}>
                                <FontAwesomeIcon icon={faXmarkCircle} />
                            </UserMenuExitBtn>
                        </UserMenuContent>
                    </UserMenu>
                </>
                :
                <LogInBtn onClick={handleSignIn}>
                    Sign In
                </LogInBtn>
            }
        </Nav>
    )
}
