import React from "react";
import { WeComponent } from "../WeComponent/WeComponent";
import { WeComponent3 } from "../WeComponent3/WeComponent3";
import { WeComponent4 } from "../WeComponent4/WeComponent4";
import { WeComponent5 } from "../WeComponent5/WeComponent5";
import { WeComponent6 } from "../WeComponent6/WeComponent6";
import { WeComponentWrapper } from "../WeComponentWrapper/WeComponentWrapper";
import styled, {css} from "styled-components";

const StyledWe = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 70px;
  position: relative;
  width: 100%;

  & .grid {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 1;
    flex-grow: 1;
    flex-wrap: wrap;
    gap: 20px 73px;
    max-width: 1200px;
    position: relative;
    width: 100%;
  }

  & .we-component-1 {
    flex: 1 !important;
    flex-grow: 1 !important;
    height: 150.96px !important;
    min-width: 307px !important;
    width: unset !important;
  }

  & .we-component-2 {
    flex: 1 !important;
    flex-grow: 1 !important;
    height: 119.88px !important;
    min-width: 374px !important;
    width: unset !important;
  }

  & .we-component-instance {
    flex: 1 !important;
    flex-grow: 1 !important;
    height: 119.88px !important;
    min-width: 373px !important;
    width: unset !important;
  }

  & .we-component-4-instance {
    flex: 1 !important;
    flex-grow: 1 !important;
    min-width: 327px !important;
    width: unset !important;
  }

  & .we-component-5-instance {
    flex: 1 !important;
    flex-grow: 1 !important;
    min-width: 351px !important;
    width: unset !important;
  }

  & .we-component-6-instance {
    flex: 1 !important;
    flex-grow: 1 !important;
    height: 147.79px !important;
    min-width: 373px !important;
    width: unset !important;
  }
`;

const Title = styled.div`
    color: var(--variable-collection-BLACK);
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 50px;
    font-weight: 400;
    letter-spacing: 2.5px;
    line-height: 48.5px;
    margin-top: -1px;
    position: relative;
    margin:0;
  ${(props) => props.$mobile && css`
        font-size: 29px;
    font-weight: 400;
    height: 89px;
    letter-spacing: 1.6px;
    line-height: 31px;
  `}
`;
export const We = ({ isMobile }) => {
  return (
    <StyledWe>
      <Title $mobile={isMobile}>
        / МЫ ГОРДИМСЯ ТЕМ,
        ЧТО ДЕЛАЕМ
      </Title>
      <div className="grid">
        <WeComponent className="we-component-1" />
        <WeComponentWrapper className="we-component-2" />
        <WeComponent3 className="we-component-instance" />
        <WeComponent4 className="we-component-4-instance" />
        <WeComponent5 className="we-component-5-instance" />
        <WeComponent6 className="we-component-6-instance" />
      </div>
    </StyledWe>
  );
};