import React from "react";
import { WeComponent } from "../../../../components/WeComponent/WeComponent";
import { WeComponent3 } from "../../../../components/WeComponent3/WeComponent3";
import { WeComponent4 } from "../../../../components/WeComponent4/WeComponent4";
import { WeComponent5 } from "../../../../components/WeComponent5/WeComponent5";
import { WeComponent6 } from "../../../../components/WeComponent6/WeComponent6";
import { WeComponentWrapper } from "../../../../components/WeComponentWrapper/WeComponentWrapper";
import styled from "styled-components";

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

  & .text-wrapper-38 {
    color: var(--variable-collection-BLACK);
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 50px;
    font-weight: 400;
    letter-spacing: 2.5px;
    line-height: 48.5px;
    margin-top: -1px;
    position: relative;
    width: 1248.17px;
  }

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

export const We = () => {
  return (
    <StyledWe>
      <p className="text-wrapper-38">
        / МЫ ГОРДИМСЯ ТЕМ,
        <br />
        ЧТО ДЕЛАЕМ
      </p>
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