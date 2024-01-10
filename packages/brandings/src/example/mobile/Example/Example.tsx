import React from "react";
import styled from "styled-components";

const StyledElement = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  .logo {
    max-width: 100%;
    width: 100%;
  }
`;

export const Example = (): JSX.Element => {
  return (
    <StyledElement>
      <img className="logo" alt="PSB" src="https://psb-eta.vercel.app/example/mobile/img/logo.png" />
    </StyledElement>
  );
};