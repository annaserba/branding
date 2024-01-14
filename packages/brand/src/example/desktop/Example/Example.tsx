import React from "react";
import styled from "styled-components";

const StyledElement = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  .div-2 {
    background-color: #ffffff;
    position: relative;
  }

  .logo {
    left: 95px;
    top: 148px;
  }
`;

export const Example = (): JSX.Element => {
  return (
    <StyledElement>
      <div className="div-2">
         <img className="logo" alt="PSB" src="https://psb-eta.vercel.app/example/desktop/img/logo.png" />
      </div>
    </StyledElement>
  );
};