import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import styled from "styled-components";

const StyledTeamRzdRu = styled.a`
  background-size: 100% 100%;
  height: 40px;
  position: relative;
  width: 178px;

  & .text-wrapper-4 {
    font-family: "RussianRail G Pro-Medium", Helvetica;
    font-size: 14px;
    font-weight: 500;
    left: 10px;
    letter-spacing: 0.7px;
    line-height: 22px;
    position: absolute;
    text-align: center;
    top: 9px;
    white-space: nowrap;
    width: 158px;
  }

  &.prop-5-two {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-76.svg);
  }

  &.prop-5-one {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-77.svg);
  }

  &.prop-5-two .text-wrapper-4 {
    color: var(--variable-collection-BLACK);
  }

  &.prop-5-one .text-wrapper-4 {
    color: var(--variable-collection-WHITE);
  }
`;

export const TeamRzdRu = ({ prop, className, href }) => {
  const [state, dispatch] = useReducer(reducer, {
    prop: prop || "one"
  });

  return (
    <StyledTeamRzdRu
      className={`TEAM-RZD-RU prop-5-${state.prop} ${className}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="text-wrapper-4">TEAM.RZD.RU 6+</div>
    </StyledTeamRzdRu>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        prop: "two"
      };

    case "mouse_leave":
      return {
        ...state,
        prop: "one"
      };
  }

  return state;
}

TeamRzdRu.propTypes = {
  prop: PropTypes.oneOf(["two", "one"]),
  href: PropTypes.string
};
