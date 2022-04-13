import styled from "styled-components";
import {NavLink as Link} from "react-router-dom";
import {FaBars} from "react-icons/fa"

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
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

export const NavBtn = styled.button`
  position: relative;
  width: 100px;
  height: 40px;
  border-radius: 4px;
  background: #02881f;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  margin-right: 1%;
  margin-left: auto;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: #fff;
    color: #02881f;
  }
  
  @media screen and (max-width: 818px) {
    display: none;
  }
`
