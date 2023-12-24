import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import styled from "styled-components";

const StyledComponent1539 = styled.div`
  height: 20px;
  position: relative;
  width: 103px;

  & .text-wrapper-5 {
    font-family: "Arial-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
    left: 2px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: right;
    top: -1px;
    white-space: nowrap;
  }

  & .img {
    height: 12px;
    left: 97px;
    position: absolute;
    top: 6px;
    width: 7px;
  }

  & .prop-7-two {
    color: var(--variable-collection-BLACK);
  }

  & .prop-7-one {
    color: var(--variable-collection-RZD-RED);
  }
`;

export const Component1539 = ({ prop, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    prop: prop || "one"
  });

  return (
    <StyledComponent1539
      className={`component-1539 ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className={`text-wrapper-5 prop-7-${state.prop}`}>вакансии</div>
      <img className="img" alt="Vector" src={state.prop === "two" ? "https://psb-eta.vercel.app/rgd/desktop/vector-78.svg" : "https://psb-eta.vercel.app/rgd/desktop/vector-79.svg"} />
    </StyledComponent1539>
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

Component1539.propTypes = {
  prop: PropTypes.oneOf(["two", "one"])
};
