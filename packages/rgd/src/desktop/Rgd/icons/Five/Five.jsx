import React from "react";
import styled from "styled-components";

const StyledFive = styled.svg`
  &.five {
    fill: none;
    height: 102;
    viewBox: 0 0 149 102;
    width: 149;
  }

  & .path {
    stroke: #BEBEBE;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }
`;

export const Five = ({ className }) => {
  return (
    <StyledFive
      className={`five ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M3.65942 18.3096L14.6637 29.3109V37.4096L48.969 71.7149L90.9403 71.5382L102.383 82.9812H116.222L134.015 100.774H148.028"
      />
      <path
        className="path"
        d="M14.6635 29.3101L19.2059 24.7646"
      />
      <path
        className="path"
        d="M1.45996 30.3973L13.1473 18.707"
      />
      <path
        className="path"
        d="M7.07703 12.6367L31.164 36.7238"
      />
      <path className="path" d="M88.205 36.7236H31.1639" />
      <path
        className="path"
        d="M124.574 65.8447L122.101 63.3718V56.068L104.462 38.4281H89.9098L81.5374 30.0557"
      />
      <path
        className="path"
        d="M122.101 56.0688V24.2011L133.202 13.0996"
      />
      <path
        className="path"
        d="M99.5808 0.110352V38.4282"
      />
      <path
        className="path"
        d="M99.5807 9.70996H92.2445"
      />
      <path
        className="path"
        d="M54.5654 66.1182L48.9691 71.7145H25.9742"
      />
      <path
        className="path"
        d="M31.1639 71.7149V36.7236"
      />
      <path
        className="path"
        d="M31.1633 59.8604H26.9506L24.1892 62.6217"
      />
      <path
        className="path"
        d="M66.4681 71.641V55.2582L74.4343 47.292"
      />
      <path
        className="path"
        d="M98.7561 86.6014L108.662 76.6952V69.5062L114.797 63.3711H122.101"
      />
      <path
        className="path"
        d="M108.662 76.6963H116.246"
      />
      <path
        className="path"
        d="M108.662 69.5068H101.555V65.2734"
      />
      <path
        className="path"
        d="M61.9713 71.665L48.2174 85.4337"
      />
      <path
        className="path"
        d="M31.1638 42.6106C34.4156 42.6106 37.0516 39.9745 37.0516 36.7228C37.0516 33.471 34.4156 30.835 31.1638 30.835C27.9121 30.835 25.276 33.471 25.276 36.7228C25.276 39.9745 27.9121 42.6106 31.1638 42.6106Z"
        fill="#E6E6E6"
        stroke="#BEBEBE"
        strokeMiterlimit="10"
        strokeWidth="2.35512"
      />
    </StyledFive>
  );
};
