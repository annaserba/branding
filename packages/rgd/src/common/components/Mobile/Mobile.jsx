import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledMobile = styled.div`
  height: 472px;
  position: relative;
  width: 295px;

  & .element-png {
    position: absolute;
  }

  & .property-1-IT {
    height: 269px;
    left: 0;
    top: 203px;
    width: 295px;
  }

  & .property-1-two {
    height: 254px;
    left: 0;
    top: 218px;
    width: 295px;
  }

  & .property-1-four {
    height: 259px;
    left: 0;
    object-fit: cover;
    top: 213px;
    width: 295px;
  }

  & .property-1-one {
    height: 276px;
    left: 26px;
    object-fit: cover;
    top: 196px;
    width: 265px;
  }

  & .property-1-three {
    height: 270px;
    left: 0;
    object-fit: cover;
    top: 202px;
    width: 260px;
  }
`;

export const Mobile = ({
  property1,
  className,
  elementPng = "https://psb-eta.vercel.app/rgd/mobile/img/01-png-1.png",
  elementPngClassName,
  img = "https://psb-eta.vercel.app/rgd/mobile/img/02-png-1.png",
  elementPng1 = "https://psb-eta.vercel.app/rgd/mobile/img/03-png-1.png",
  elementPng2 = "https://psb-eta.vercel.app/rgd/mobile/img/04-png-1.png",
  elementPng3 = "https://psb-eta.vercel.app/rgd/mobile/img/05-png-1.png"
}) => {
  return (
    <StyledMobile className={`MOBILE ${className}`}>
      <img
        className={`element-png property-1-${property1} ${elementPngClassName}`}
        alt="Element png"
        src={
          property1 === "two"
            ? img
            : property1 === "three"
            ? elementPng1
            : property1 === "IT"
            ? elementPng2
            : property1 === "four"
            ? elementPng3
            : elementPng
        }
      />
    </StyledMobile>
  );
};

Mobile.propTypes = {
  property1: PropTypes.oneOf(["two", "three", "four", "one", "IT"]),
  elementPng: PropTypes.string,
  img: PropTypes.string,
  elementPng1: PropTypes.string,
  elementPng2: PropTypes.string,
  elementPng3: PropTypes.string
};
