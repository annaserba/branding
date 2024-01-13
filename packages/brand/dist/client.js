(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // react-ns:react
  var require_react = __commonJS({
    "react-ns:react"(exports, module) {
      module.exports = React;
    }
  });

  // react-ns:react-dom
  var require_react_dom = __commonJS({
    "react-ns:react-dom"(exports, module) {
      module.exports = ReactDOM;
    }
  });

  // src/client.tsx
  var import_react2 = __toModule(require_react());
  var import_react_dom = __toModule(require_react_dom());

  // src/Count.tsx
  var import_react = __toModule(require_react());
  function Count() {
    const [count, setCount] = (0, import_react.useState)(0);
    const handleAdd = (0, import_react.useCallback)(() => setCount(count + 1), [count]);
    const handleSub = (0, import_react.useCallback)(() => setCount(count - 1), [count]);
    const btnStyle = { marginRight: 10, fontSize: 20, width: 40, textAlign: "center" };
    return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("h1", null, "Count : ", count), /* @__PURE__ */ import_react.default.createElement("button", {
      style: btnStyle,
      onClick: handleAdd
    }, "+"), /* @__PURE__ */ import_react.default.createElement("button", {
      style: btnStyle,
      onClick: handleSub
    }, "-"));
  }

  // src/client.tsx
  import_react_dom.default.render(/* @__PURE__ */ import_react2.default.createElement(Count, null), document.getElementById("app"));
})();
