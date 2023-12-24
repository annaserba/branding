import React from "react";
import styled from "styled-components";
import { Eight } from "../../../../../../../../../../icons/Eight";
import { Five } from "../../../../../../../../../../icons/Five/Five";
import { Four } from "../../../../../../../../../../icons/Four/Four";
import { IconComponentNode } from "../../../../../../../../../../icons/IconComponentNode/IconComponentNode";
import { NamecandidateName4Score101 } from "../../../../../../../../../../icons/NamecandidateName4Score101/NamecandidateName4Score101";
import { NamecandidateName6Score101 } from "../../../../../../../../../../icons/NamecandidateName6Score101/NamecandidateName6Score101";
import { NamecandidateName7Score101 } from "../../../../../../../../../../icons/NamecandidateName7Score101/NamecandidateName7Score101";
import { Nine } from "../../../../../../../../../../icons/Nine/Nine";
import { One } from "../../../../../../../../../../icons/One/One";
import { Seven } from "../../../../../../../../../../icons/Seven/Seven";
import { Six } from "../../../../../../../../../../icons/Six/Six";
import { Sixteen } from "../../../../../../../../../../icons/Sixteen/Sixteen";
import { Ten } from "../../../../../../../../../../icons/Ten/Ten";
import { Three } from "../../../../../../../../../../icons/Three";
import { Twelve } from "../../../../../../../../../../icons/Twelve";
import { Two } from "../../../../../../../../../../icons/Two/Two";

const StyledOverlapWrapper = styled.div`
  height: 447px;
  left: 23px;
  position: absolute;
  top: 184px;
  width: 1121px;

  & .overlap-3 {
    height: 447px;
    position: relative;
    width: 1122px;

    & .overlap-4 {
      height: 447px;
      left: 14px;
      position: absolute;
      top: 0;
      width: 1108px;

      & .instance-7 {
        height: 181px !important;
        left: 69px !important;
        position: absolute !important;
        top: 0 !important;
        width: 192px !important;
      }

      & .instance-4 {
        height: 102px !important;
        left: 43px !important;
        position: absolute !important;
        top: 155px !important;
        width: 99px !important;
      }

      & .instance-5 {
        height: 102px !important;
        left: 131px !important;
        position: absolute !important;
        top: 192px !important;
        width: 147px !important;
      }

      & .instance-6 {
        height: 131px !important;
        left: 140px !important;
        position: absolute !important;
        top: 92px !important;
        width: 243px !important;
      }

      & .instance-10 {
        height: 143px !important;
        left: 0 !important;
        position: absolute !important;
        top: 302px !important;
        width: 84px !important;
      }

      & .instance-16 {
        height: 76px !important;
        left: 43px !important;
        position: absolute !important;
        top: 232px !important;
        width: 90px !important;
      }

      & .instance-3 {
        height: 117px !important;
        left: 66px !important;
        position: absolute !important;
        top: 285px !important;
        width: 107px !important;
      }

      & .instance-1 {
        height: 102px !important;
        left: 117px !important;
        position: absolute !important;
        top: 240px !important;
        width: 138px !important;
      }

      & .instance-9 {
        height: 168px !important;
        left: 254px !important;
        position: absolute !important;
        top: 195px !important;
        width: 211px !important;
      }

      & .instance-2-instance {
        height: 96px !important;
        left: 173px !important;
        position: absolute !important;
        top: 303px !important;
        width: 208px !important;
      }

      & .instance-8 {
        height: 118px !important;
        left: 380px !important;
        position: absolute !important;
        top: 325px !important;
        width: 166px !important;
      }

      & .instance-8-instance {
        height: 93px !important;
        left: 535px !important;
        position: absolute !important;
        top: 323px !important;
        width: 92px !important;
      }

      & .instance-7-instance {
        height: 163px !important;
        left: 624px !important;
        position: absolute !important;
        top: 284px !important;
        width: 193px !important;
      }

      & .instance-4-instance {
        height: 113px !important;
        left: 776px !important;
        position: absolute !important;
        top: 312px !important;
        width: 190px !important;
      }

      & .instance-6-instance {
        height: 189px !important;
        left: 817px !important;
        position: absolute !important;
        top: 242px !important;
        width: 291px !important;
      }
    }

    & .instance-12 {
      height: 31px !important;
      left: 0 !important;
      position: absolute !important;
      top: 60px !important;
      width: 45px !important;
    }
  }
`;

export const OverlapWrapper = () => {
  return (
    <StyledOverlapWrapper>
      <div className="overlap-3">
        <div className="overlap-4">
          <Seven className="instance-7" />
          <Four className="instance-4" />
          <Five className="instance-5" />
          <Six className="instance-6" />
          <Ten className="instance-10" />
          <Sixteen className="instance-16" />
          <Three className="instance-3" />
          <One className="instance-1" />
          <Nine className="instance-9" />
          <Two className="instance-2-instance" />
          <Eight className="instance-8" />
          <IconComponentNode className="instance-8-instance" />
          <NamecandidateName7Score101 className="instance-7-instance" />
          <NamecandidateName4Score101 className="instance-4-instance" />
          <NamecandidateName6Score101 className="instance-6-instance" />
        </div>
        <Twelve className="instance-12" color="#BEBEBE" />
      </div>
    </StyledOverlapWrapper>
  );
};