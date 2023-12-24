import React from "react";
import { NamecandidateNameViewScore10001 } from "./sections/NamecandidateNameViewScore10001";
import { NamecandidateNameViewScore10002 } from "./sections/NamecandidateNameViewScore10002";
import { NamecandidateNameViewScore10003 } from "./sections/NamecandidateNameViewScore10003/NamecandidateNameViewScore10003";
import { NamecandidateNameViewScore10004 } from "./sections/NamecandidateNameViewScore10004";
import styled from "styled-components";

const StyledRgdAdvantages = styled.div`
  height: 586px;
  left: 49px;
  width: 100%;
  position: relative;

  & .text-wrapper-29 {
    color: var(--variable-collection-BLACK);
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    left: 0;
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
    position: absolute;
    top: 108px;
    width: 947px;
  }

  & .text-wrapper-30 {
    color: var(--variable-collection-BLACK);
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 50px;
    font-weight: 400;
    left: 0;
    letter-spacing: 2.5px;
    line-height: 48.5px;
    position: absolute;
    top: 0;
    width: 668px;
  }
`;

export const RgdAdvantages = () => {
  return (
    <StyledRgdAdvantages>
      <NamecandidateNameViewScore10001 />
      <NamecandidateNameViewScore10002 />
      <NamecandidateNameViewScore10003 />
      <NamecandidateNameViewScore10004 />
      <p className="text-wrapper-29">
        Каждому нашему работнику мы стремимся обеспечить благоприятную и мотивирующую среду, вместе с каждым из них
        уверенно идем вперед и строим будущее Российских железных дорог.
      </p>
      <p className="text-wrapper-30">/ ПРЕИМУЩЕСТВА РАБОТЫ В РЖД</p>
    </StyledRgdAdvantages>
  );
};