import React from "react";
import styled from "styled-components";

const StyledFourteen = styled.svg`
  &.fourteen {
    fill: none;
    height: 119;
    viewBox: 0 0 167 119;
    width: 167;
  }

  & .path {
    stroke: #BEBEBE;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }
`;

export const Fourteen = ({ className }) => {
  return (
    <StyledFourteen
      className={`fourteen ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M165.163 93.1535L154.312 82.3022V73.5059"
      />
      <path
        className="path"
        d="M0.639648 54.5234H144.349L151.585 61.7595"
      />
      <path
        className="path"
        d="M7.95209 38.1699L45.219 75.4368C47.0424 77.2571 49.5135 78.2798 52.0901 78.2806H124.79"
      />
      <path
        className="path"
        d="M144.349 54.5241L149.274 49.599L144.349 44.6738"
      />
      <path
        className="path"
        d="M141.69 31.3701L147.213 36.8929V41.8092L141.729 47.2937H136.812L131.287 41.7709"
      />
      <path
        className="path"
        d="M166.187 82.1402H162.945L157.747 76.9413L147.075 66.2697L149.33 64.0146"
      />
      <path
        className="path"
        d="M101.095 54.5233L109.724 45.8947L127.167 45.8918L150.462 22.5967H155.808"
      />
      <path
        className="path"
        d="M125.662 87.6807L121.464 91.8816H82.3452L77.5673 96.6596"
      />
      <path
        className="path"
        d="M136.377 98.3966L125.661 87.6808V78.2603L112.569 65.1688C110.749 63.3469 109.726 60.8765 109.726 58.3006V54.2939"
      />
      <path
        className="path"
        d="M44.9895 54.5234L107.035 116.572C107.489 117.026 108.068 117.335 108.698 117.46C109.328 117.584 109.981 117.519 110.573 117.271C111.166 117.024 111.671 116.606 112.026 116.07C112.38 115.535 112.568 114.906 112.564 114.264L112.511 104.914C112.503 103.629 112.751 102.356 113.239 101.167C113.727 99.9788 114.446 98.8989 115.355 97.9902L151.585 61.7596L158.821 68.9957L154.311 73.5057"
      />
      <path
        className="path"
        d="M114.816 54.5231V45.8916"
      />
      <path
        className="path"
        d="M136.489 36.5718L130.851 30.9313V26.0444L137.661 19.2352V14.3483L124.793 1.48047"
      />
      <path className="path" d="M34.0029 64.5049H16.0029" strokeWidth="2.36" />
      <path
        className="path"
        d="M101.094 60.4123C104.346 60.4123 106.982 57.7763 106.982 54.5245C106.982 51.2728 104.346 48.6367 101.094 48.6367C97.8425 48.6367 95.2064 51.2728 95.2064 54.5245C95.2064 57.7763 97.8425 60.4123 101.094 60.4123Z"
        fill="#E6E6E6"
      />
    </StyledFourteen>
  );
};
