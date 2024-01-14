import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import styled from "styled-components";

const StyledElementWrapper = styled.div`
  height: 20px;
  position: relative;
  width: 103px;

  & .text-wrapper-2 {
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

  & .vector {
    height: 12px;
    left: 97px;
    position: absolute;
    top: 6px;
    width: 7px;
  }

  & .prop-1-two {
    color: var(--variable-collection-BLACK);
  }

  & .prop-1-one {
    color: var(--variable-collection-RZD-RED);
  }
`;

export const ElementWrapper = ({ prop, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    prop: prop || "one"
  });

  return (
    <StyledElementWrapper
      className={`element-wrapper ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className={`text-wrapper-2 prop-1-${state.prop}`}>вакансии</div>
      <img className="vector" alt="Vector" src={state.prop === "two" ? "https://psb-eta.vercel.app/rgd/desktop/img/vector-28.svg" : "https://psb-eta.vercel.app/rgd/desktop/img/vector-29.svg"} />
    </StyledElementWrapper>
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

ElementWrapper.propTypes = {
  prop: PropTypes.oneOf(["two", "one"])
};
