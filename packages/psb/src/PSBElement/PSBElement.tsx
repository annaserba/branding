import React from "react";
import styled from "styled-components";
import { Bonus } from "./sections/Bonus";
import { JoinTeam } from "./sections/JoinTeam";
import { LiveCompany } from "./sections/LiveCompany";
import { Slider } from "./sections/Slider";
import { Why } from "./sections/Why";

const StyledElement = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  .div-2 {
    background-color: #ffffff;
    height: 9073px;
    position: relative;
    width: 1440px;
  }

  .bannerLogo {
    height: 997px;
    left: 95px;
    position: absolute;
    top: 148px;
    width: 1250px;
  }
`;

export const PSBElement = (): JSX.Element => {
  return (
    <StyledElement>
      <div className="div-2">
         <img className="logo" alt="PSB" src="https://psb-eta.vercel.app/psb/img/logo.png" />
        <Why />
        <LiveCompany />
        <JoinTeam />
        <Slider />
        <Bonus />
      </div>
    </StyledElement>
  );
};