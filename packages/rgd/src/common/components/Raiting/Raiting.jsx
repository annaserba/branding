import React from "react";
import styled from "styled-components";
import { Nine } from "../../icons/Nine";

const StyledRaiting = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 225px;
  position: relative;
  width: 225px;

  & .frame {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 6px;
    height: 79.08px;
    position: relative;
    width: 209.24px;
  }

  & .II-MECTO {
    align-self: stretch;
    flex: 1;
    flex-grow: 1;
    position: relative;
    width: 100%;
  }

  & .overlap-group {
    height: 41px;
    position: relative;
    width: 209px;
  }

  & .img {
    height: 41px;
    left: 0;
    position: absolute;
    top: 0;
    width: 209px;
  }

  & .element {
    align-self: stretch;
    height: 32px;
    position: relative;
    width: 100%;
  }

  & .instance-9 {
    height: 28px !important;
    left: 9px !important;
    position: absolute !important;
    top: 8px !important;
    width: 201px !important;
  }
`;

export const Raiting = ({ className, icon = <Nine className="instance-9" /> }) => {
  return (
    <StyledRaiting className={`raiting ${className}`}>
      <div className="frame">
        <div className="II-MECTO">
          <div className="overlap-group">
            {icon}
            <img className="img" alt="Img" src="https://psb-eta.vercel.app/rgd/desktop/img/8.png" />
          </div>
        </div>
        <img className="element" alt="Element" src="https://psb-eta.vercel.app/rgd/desktop/img/1-1.svg" />
      </div>
    </StyledRaiting>
  );
};
