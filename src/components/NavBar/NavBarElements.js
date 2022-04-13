import styled from "styled-components";
import {NavLink as Link} from "react-router-dom";
import {FaBars} from "react-icons/fa"

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  gap: 15px;
  flex-direction: row;
  z-index: 10;
`

export const NavLink = styled(Link)`
  position: relative;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: #afafaf;
  }

  &.active {
    color: #15fc4b;
  }

  &.active&:hover {
    color: #b3ffc1;
  }
`
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  
  @media screen and (max-width: 818px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 818px) {
    display: none;
  }
`

export const NavBtn = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  margin-right: 1%;
  margin-left: auto;
  justify-self: flex-end;
  width: 100px;
  
  @media screen and (max-width: 818px) {
    display: none;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #02881f;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 100px;
  height: 40px;

  &:hover {
    background: #fff;
    color: #02881f;
  }
`
