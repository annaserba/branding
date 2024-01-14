import React from "react";
import styled from "styled-components";

const StyledSixteen = styled.svg`
  &.sixteen {
    fill: none;
    height: 97;
    viewBox: 0 0 208 97;
    width: 208;
  }

  & .path {
    stroke: #BEBEBE;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }
`;

export const Sixteen = ({ className }) => {
  return (
    <StyledSixteen
      className={`sixteen ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M108.289 29.0713H155.792L200.395 73.6714C202.217 75.4924 204.687 76.5153 207.263 76.5152H207.64"
      />
      <path
        className="path"
        d="M155.793 47.9712V29.0713"
      />
      <path
        className="path"
        d="M108.292 29.071L120.371 16.9922"
      />
      <path
        className="path"
        d="M95.99 16.7685L101.863 10.8924V0.80957"
      />
      <path
        className="path"
        d="M51.5795 74.124L70.3321 92.8796C71.2345 93.7816 72.3059 94.497 73.4848 94.985C74.6638 95.4729 75.9273 95.7238 77.2032 95.7234H86.4883"
      />
      <path
        className="path"
        d="M108.292 29.0706L81.5615 55.7983V70.6473L78.0848 74.1241H51.5896L48.1129 70.6473V53.1517L45.2161 50.2549H37.5148L15.8889 28.629C14.0655 26.8086 11.5944 25.7859 9.01786 25.7852H0.0595703"
      />
      <path
        className="path"
        d="M45.2073 50.2548V41.8529L48.3278 38.7354"
      />
      <path
        className="path"
        d="M37.5054 50.2559V67.8869"
      />
      <path
        className="path"
        d="M72.1372 46.375L81.5606 55.7984H91.2755"
      />
      <path
        className="path"
        d="M108.292 29.0715V13.6072L115.119 6.78027"
      />
      <path
        className="path"
        d="M69.9069 61.7739V48.6029L79.3421 39.1677L76.3687 36.1943"
      />
      <path
        className="path"
        d="M98.8651 19.6455L85.5527 32.9579"
      />
      <path
        className="path"
        d="M108.292 29.0711L95.9898 16.7686H82.6421"
      />
      <path
        className="path"
        d="M140.99 14.2686L155.792 29.0705"
      />
      <path
        className="path"
        d="M17.6756 30.4223V17.6516L16.6069 16.583"
      />
      <path
        className="path"
        d="M108.292 34.9582C111.543 34.9582 114.18 32.3222 114.18 29.0704C114.18 25.8187 111.543 23.1826 108.292 23.1826C105.04 23.1826 102.404 25.8187 102.404 29.0704C102.404 32.3222 105.04 34.9582 108.292 34.9582Z"
        fill="#E6E6E6"
        stroke="#BEBEBE"
        strokeMiterlimit="10"
        strokeWidth="2.35512"
      />
    </StyledSixteen>
  );
};
