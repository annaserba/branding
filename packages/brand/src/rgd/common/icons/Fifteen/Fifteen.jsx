import React from "react";
import styled from "styled-components";

const StyledFifteen = styled.svg`
  & .path {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }

  & .path-fill {
    fill: #e6e6e6;
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }
`;

export const Fifteen = ({ className }) => {
  return (
    <StyledFifteen
      className={`fifteen ${className}`}
      fill="none"
      height="168"
      viewBox="0 0 212 168"
      width="212"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M38.3587 99.6238L20.2949 81.56H15.1843L11.7075 78.0833V72.9727"
      />
      <path
        className="path"
        d="M69.4132 52.9814L74.3472 57.9154H105.447L110.381 52.9814"
      />
      <path className="path" d="M41.6049 80.791H51.3609L58.7796 88.2097" />
      <path
        className="path"
        d="M38.3585 99.6229V84.0379L72.705 49.6885"
      />
      <path
        className="path"
        d="M60.1435 121.408L36.5099 97.7744H25.0345"
      />
      <path
        className="path"
        d="M86.4497 110.693H116.18L153.482 73.3906H173.94L188.771 88.222"
      />
      <path
        className="path"
        d="M86.4497 110.692V119.657L133.955 167.162"
      />
      <path
        className="path"
        d="M159.603 73.3903L210.674 22.3166V4.92693L207.197 1.4502H174.405"
      />
      <path
        className="path"
        d="M34.119 113.778L52.5125 95.3846H79.2196L93.6918 80.9124V70.5439"
      />
      <path
        className="path"
        d="M86.4502 110.692L80.7155 104.58H43.3162"
      />
      <path
        className="path"
        d="M58.7807 53.5596L66.7587 61.5405V72.1474L58.7807 80.1254V104.58L39.3716 123.99"
      />
      <path className="path" d="M11.7071 72.9727L1.58008 62.8457" />
      <path
        className="path"
        d="M14.8015 69.8779L20.8689 75.9483H30.2688L38.3586 84.0381"
      />
      <path className="path" d="M11.7075 75.3719V72.9727" />
      <path
        className="path"
        d="M20.8618 107.807V106.842L29.9202 97.7834V75.9485V55.7415L24.4004 50.2188"
      />
      <path
        className="path"
        d="M29.9214 62.6484H22.0347L11.7075 72.9727"
      />
      <path className="path" d="M94.7632 49.6885V57.9137" />
      <path className="path" d="M51.3607 80.791L55.4057 76.7461" />
      <path
        className="path"
        d="M43.3149 110.469C46.5667 110.469 49.2027 107.833 49.2027 104.581C49.2027 101.329 46.5667 98.6934 43.3149 98.6934C40.0632 98.6934 37.4271 101.329 37.4271 104.581C37.4271 107.833 40.0632 110.469 43.3149 110.469Z"
      />
    </StyledFifteen>
  );
};
