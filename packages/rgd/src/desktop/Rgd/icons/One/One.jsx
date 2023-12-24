import React from "react";
import styled from "styled-components";

const StyledOne = styled.svg`
  .path {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }

  .path.fill {
    fill: #e6e6e6;
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }
`;

export const One = ({ className }) => {
  return (
    <StyledOne
      className={`one ${className}`}
      fill="none"
      height="103"
      viewBox="0 0 139 103"
      width="139"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M29.7867 24.7217L15.4852 39.0231"
      />
      <path
        className="path"
        d="M51.0123 58.0009C48.8027 58.0009 46.6836 57.1231 45.1212 55.5607C43.5588 53.9983 42.681 51.8792 42.681 49.6696V38.9391L48.2744 33.3457"
      />
      <path
        className="path"
        d="M138.634 79.7732H112.934L92.7625 59.6016"
      />
      <path
        className="path"
        d="M132.362 99.2002L112.935 79.7734"
      />
      <path
        className="path"
        d="M104.317 101.741L112.934 93.124V79.7734"
      />
      <path
        className="path"
        d="M108.598 75.4375H68.4495"
      />
      <path
        className="path"
        d="M72.5997 79.5885L64.3804 71.3691"
      />
      <path
        className="path"
        d="M64.3839 71.3691H51.0127L44.8187 77.5631"
      />
      <path
        className="path"
        d="M43.214 65.7992L51.0124 58.0008V49.646L57.7922 42.8691"
      />
      <path
        className="path"
        d="M57.792 42.8681L62.2167 38.4404"
      />
      <path
        className="path"
        d="M64.3797 71.3683L51.0115 58"
      />
      <path
        className="path"
        d="M1.11035 1.70996L2.92086 3.52043V20.3478L37.7296 55.1535C38.6318 56.0561 39.7029 56.772 40.8819 57.2605C42.0609 57.7489 43.3245 58.0003 44.6006 58.0003H51.0154V71.3686"
      />
      <path
        className="path"
        d="M29.7874 24.7217L35.107 30.0383H44.9661L74.5259 59.601H92.7633"
      />
      <path
        className="path"
        d="M39.9723 24.7231H25.035L13.2211 12.9092"
      />
      <path
        className="path"
        d="M92.7625 59.6024L112.755 39.6104"
      />
      <path
        className="path"
        d="M7.53333 24.9618V18.1172"
      />
      <path
        className="path fill"
        d="M64.3811 77.2571C67.6328 77.2571 70.2689 74.621 70.2689 71.3693C70.2689 68.1175 67.6328 65.4814 64.3811 65.4814C61.1293 65.4814 58.4933 68.1175 58.4933 71.3693C58.4933 74.621 61.1293 77.2571 64.3811 77.2571Z"
      />
    </StyledOne>
  );
};
