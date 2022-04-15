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

export const LogInBtn = styled.button`
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

export const Profile = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
  border-radius: 48px;
  border: solid 4px white;
  background: white;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  margin-right: 3%;
  margin-left: auto;
  cursor: pointer;
  border-spacing: -1px;
  border-collapse: collapse;
  padding: -1px;
  display: block;
  
  &:hover {
    border-color:  #15fc4b;
  }
  
  @media screen and (max-width: 818px) {
    display: none;
  }
`

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  transform: scale(1.02);
  border: none;
  
  @media screen and (max-width: 818px) {
    display: none;
  }
`

export const UserMenu = styled.div`
  position: fixed;
  z-index: 9;
  width: 275px;
  height: 300px;
  background: #343434;
  color: white;
  top: 80px;
  right: 1%;
  border-radius: 15px;
  box-shadow: 0 2px 7px black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  animation-fill-mode: forwards;
  display: flex;
  
  &.setVisible {
    animation: zoomOut 300ms;
    animation-fill-mode: forwards;
  }
  
  &.setInvisible {
    animation: zoomIn 300ms;
    animation-fill-mode: forwards;
  }
  
  &.initial {
    visibility: hidden;
    display: none;
  }
  
  @keyframes zoomOut {
    from {
      transform: scale(0);
      right: -20%;
      opacity: 0;
    }
    to {
      transform: scale(1);
      right: 1%;
      opacity: 100%;
      visibility: visible;
    }
  }

  @keyframes zoomIn {
    from {
      transform: scale(1);
      right: 1%;
      opacity: 100%;
    }
    to {
      transform: scale(0);
      right: -20%;
      opacity: 0;
      visibility: hidden;
    }
  }
`

export const UserMenuExitBtn = styled.div`
  position: absolute;
  top: 3%;
  right: 3%;
  color: white;
  transition-duration: 200ms;
  font-size: 20px;

  &:hover {
    color: #00ff3d;
  }
`

export const SignOutBtn = styled.button`
  width: 90px;
  height: 40px;
  border: none;
  background-color: red;
  color: white;
  font-size: 16px;
  padding: 7px;
  border-radius: 4px;
  transition-duration: 200ms;

  &:hover {
    background-color: #a90000;
  }
`
