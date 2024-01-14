"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const StyledElement = styled_components_1.default.div `
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  .logo {
    max-width: 100%;
    width: 100%;
  }
`;
const Example = () => {
    return (react_1.default.createElement(StyledElement, null,
        react_1.default.createElement("img", { className: "logo", alt: "PSB", src: "https://psb-eta.vercel.app/example/mobile/img/logo.png" })));
};
exports.Example = Example;
