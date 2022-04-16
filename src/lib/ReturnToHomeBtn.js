import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeftLong} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

const HomeButton = styled.button`
  border: none;
  background-color: #1d8835;
  height: 50px;
  width: 190px;
  border-radius: 10px;
  font-size: 18px;
  margin-top: 30px;
  color: white;
  transition-duration: 150ms;

  &:hover {
    background-color: #10561e;
    color: white;
  }
`

export default function ReturnToHomeBtn() {
    let navigate = useNavigate();
    return (
        <HomeButton onClick={() => navigate('/')}>
            <FontAwesomeIcon icon={faArrowLeftLong} style={{marginRight: "10px"}}/>
            {"Return to home"}
        </HomeButton>
    )
}
