import React from "react";
import { Eighteen } from "../../../../../../../../icons/Eighteen/Eighteen";
import { Fifteen } from "../../../../../../../../icons/Fifteen/Fifteen";
import { Four } from "../../../../../../../../icons/Four/Four";
import { Fourteen } from "../../../../../../../../icons/Fourteen/Fourteen";
import { IconComponentNode } from "../../../../../../../../icons/IconComponentNode/IconComponentNode";
import { NamecandidateName15Score101 } from "../../../../../../../../icons/NamecandidateName15Score101/NamecandidateName15Score101";
import { NamecandidateName4Score101 } from "../../../../../../../../icons/NamecandidateName4Score101/NamecandidateName4Score101";
import { Nineteen } from "../../../../../../../../icons/Nineteen/Nineteen";
import { One } from "../../../../../../../../icons/One";
import { Seventeen } from "../../../../../../../../icons/Seventeen";
import { Sixteen } from "../../../../../../../../icons/Sixteen/Sixteen";
import { Thirteen } from "../../../../../../../../icons/Thirteen/Thirteen";
import { ThirtyOne } from "../../../../../../../../icons/ThirtyOne/ThirtyOne";
import { Three } from "../../../../../../../../icons/Three/Three";
import { Twelve } from "../../../../../../../../icons/Twelve/Twelve";
import { Two } from "../../../../../../../../icons/Two/Two";
import styled from "styled-components";

const StyledOverlapWrapper = styled.div`
  height: 447px;
  left: 23px;
  position: absolute;
  top: 184px;
  width: 1121px;

  & .overlap-4 {
    height: 447px;
    position: relative;
    width: 1122px;

    & .overlap-5 {
      height: 447px;
      left: 14px;
      position: absolute;
      top: 0;
      width: 1108px;

      & .instance-3 {
        height: 181px !important;
        left: 69px !important;
        position: absolute !important;
        top: 0 !important;
        width: 192px !important;
      }

      & .instance-18 {
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

      & .instance-2 {
        height: 131px !important;
        left: 140px !important;
        position: absolute !important;
        top: 92px !important;
        width: 243px !important;
      }

      & .instance-4 {
        height: 143px !important;
        left: 0 !important;
        position: absolute !important;
        top: 302px !important;
        width: 84px !important;
      }

      & .instance-31 {
        height: 76px !important;
        left: 43px !important;
        position: absolute !important;
        top: 232px !important;
        width: 90px !important;
      }

      & .instance-17 {
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

      & .instance-15 {
        height: 168px !important;
        left: 254px !important;
        position: absolute !important;
        top: 195px !important;
        width: 211px !important;
      }

      & .instance-16 {
        height: 96px !important;
        left: 173px !important;
        position: absolute !important;
        top: 303px !important;
        width: 208px !important;
      }

      & .instance-14 {
        height: 118px !important;
        left: 380px !important;
        position: absolute !important;
        top: 325px !important;
        width: 166px !important;
      }

      & .instance-15-instance {
        height: 93px !important;
        left: 535px !important;
        position: absolute !important;
        top: 323px !important;
        width: 92px !important;
      }

      & .instance-13 {
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

      & .instance-12 {
        height: 189px !important;
        left: 817px !important;
        position: absolute !important;
        top: 242px !important;
        width: 291px !important;
      }
    }

    & .instance-19 {
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
      <div className="overlap-4">
        <div className="overlap-5">
          <Three className="instance-3" />
          <Eighteen className="instance-18" />
          <IconComponentNode className="instance-5" />
          <Two className="instance-2" />
          <Four className="instance-4" />
          <ThirtyOne className="instance-31" />
          <Seventeen className="instance-17" />
          <One className="instance-1" />
          <Fifteen className="instance-15" />
          <Sixteen className="instance-16" />
          <Fourteen className="instance-14" />
          <NamecandidateName15Score101 className="instance-15-instance" />
          <Thirteen className="instance-13" />
          <NamecandidateName4Score101 className="instance-4-instance" />
          <Twelve className="instance-12" />
        </div>
        <Nineteen className="instance-19" color="#BEBEBE" />
      </div>
    </StyledOverlapWrapper>
  );
};