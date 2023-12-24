import React from "react";
import styled from "styled-components";

const StyledNine = styled.svg`
  & .path {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }

  & .path:nth-child(1) {
    d: path("M38.3592 99.6238L20.2954 81.56H15.1848L11.708 78.0833V72.9727");
  }

  & .path:nth-child(2) {
    d: path("M69.4131 52.9814L74.3471 57.9154H105.446L110.38 52.9814");
  }

  & .path:nth-child(3) {
    d: path("M41.6045 80.791H51.3606L58.7792 88.2097");
  }

  & .path:nth-child(4) {
    d: path("M38.3584 99.6229V84.0379L72.7049 49.6885");
  }

  & .path:nth-child(5) {
    d: path("M60.1432 121.408L36.5095 97.7744H25.0342");
  }

  & .path:nth-child(6) {
    d: path("M86.4502 110.693H116.181L153.483 73.3906H173.94L188.771 88.222");
  }

  & .path:nth-child(7) {
    d: path("M86.4502 110.692V119.657L133.956 167.162");
  }

  & .path:nth-child(8) {
    d: path("M159.604 73.3903L210.674 22.3166V4.92693L207.198 1.4502H174.405");
  }

  & .path:nth-child(9) {
    d: path("M34.1191 113.778L52.5126 95.3846H79.2197L93.6919 80.9124V70.5439");
  }

  & .path:nth-child(10) {
    d: path("M86.4505 110.692L80.7158 104.58H43.3164");
  }

  & .path:nth-child(11) {
    d: path("M58.7803 53.5596L66.7582 61.5405V72.1474L58.7803 80.1254V104.58L39.3711 123.99");
  }

  & .path:nth-child(12) {
    d: path("M11.7071 72.9727L1.58008 62.8457");
  }

  & .path:nth-child(13) {
    d: path("M14.8018 69.8779L20.8691 75.9483H30.269L38.3589 84.0381");
  }

  & .path:nth-child(14) {
    d: path("M11.708 75.3719V72.9727");
  }

  & .path:nth-child(15) {
    d: path("M20.8613 107.807V106.842L29.9197 97.7834V75.9485V55.7415L24.3999 50.2188");
  }

  & .path:nth-child(16) {
    d: path("M29.9219 62.6484H22.0352L11.708 72.9727");
  }

  & .path:nth-child(17) {
    d: path("M94.7637 49.6885V57.9137");
  }

  & .path:nth-child(18) {
    d: path("M51.3604 80.791L55.4053 76.7461");
  }

  & .path:nth-child(19) {
    d: path("M43.3146 110.469C46.5663 110.469 49.2024 107.833 49.2024 104.581C49.2024 101.329 46.5663 98.6934 43.3146 98.6934C40.0628 98.6934 37.4268 101.329 37.4268 104.581C37.4268 107.833 40.0628 110.469 43.3146 110.469Z");
    fill: #e6e6e6;
  }
`;

export const Nine = ({ className }) => {
  return (
    <StyledNine
      className={`nine ${className}`}
      fill="none"
      height="168"
      viewBox="0 0 212 168"
      width="212"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" />
      <path className="path" />
      <path className="path" />
      <path className="path" />
      <path className="path" />
      <path className="path" />
      <path className="path" />
      <path className="path" />
      <path className="path" />
      <path className="path" />
      <path className="path" />
      <path className="path" />
      <path className="path" />
      <path className="path" />
      <path className="path" />
      <path className="path" />
      <path className="path" />
      <path className="path" />
    </StyledNine>
  );
};
