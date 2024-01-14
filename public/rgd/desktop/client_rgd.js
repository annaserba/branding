(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a2, prop, b[prop]);
      }
    return a2;
  };
  var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
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

  // ../../node_modules/react-dom/client.js
  var require_client = __commonJS({
    "../../node_modules/react-dom/client.js"(exports) {
      "use strict";
      var m2 = require_react_dom();
      if (false) {
        exports.createRoot = m2.createRoot;
        exports.hydrateRoot = m2.hydrateRoot;
      } else {
        i2 = m2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        exports.createRoot = function(c2, o2) {
          i2.usingClientEntryPoint = true;
          try {
            return m2.createRoot(c2, o2);
          } finally {
            i2.usingClientEntryPoint = false;
          }
        };
        exports.hydrateRoot = function(c2, h2, o2) {
          i2.usingClientEntryPoint = true;
          try {
            return m2.hydrateRoot(c2, h2, o2);
          } finally {
            i2.usingClientEntryPoint = false;
          }
        };
      }
      var i2;
    }
  });

  // node_modules/tslib/tslib.js
  var require_tslib = __commonJS({
    "node_modules/tslib/tslib.js"(exports, module) {
      var __extends2;
      var __assign2;
      var __rest2;
      var __decorate2;
      var __param2;
      var __esDecorate2;
      var __runInitializers2;
      var __propKey2;
      var __setFunctionName2;
      var __metadata2;
      var __awaiter2;
      var __generator2;
      var __exportStar2;
      var __values2;
      var __read2;
      var __spread2;
      var __spreadArrays2;
      var __spreadArray2;
      var __await2;
      var __asyncGenerator2;
      var __asyncDelegator2;
      var __asyncValues2;
      var __makeTemplateObject2;
      var __importStar2;
      var __importDefault2;
      var __classPrivateFieldGet2;
      var __classPrivateFieldSet2;
      var __classPrivateFieldIn2;
      var __createBinding2;
      (function(factory) {
        var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function(exports2) {
            factory(createExporter(root, createExporter(exports2)));
          });
        } else if (typeof module === "object" && typeof module.exports === "object") {
          factory(createExporter(root, createExporter(module.exports)));
        } else {
          factory(createExporter(root));
        }
        function createExporter(exports2, previous) {
          if (exports2 !== root) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports2, "__esModule", { value: true });
            } else {
              exports2.__esModule = true;
            }
          }
          return function(id, v2) {
            return exports2[id] = previous ? previous(id, v2) : v2;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b) {
          d2.__proto__ = b;
        } || function(d2, b) {
          for (var p2 in b)
            if (Object.prototype.hasOwnProperty.call(b, p2))
              d2[p2] = b[p2];
        };
        __extends2 = function(d2, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d2, b);
          function __() {
            this.constructor = d2;
          }
          d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
        __assign2 = Object.assign || function(t) {
          for (var s2, i2 = 1, n = arguments.length; i2 < n; i2++) {
            s2 = arguments[i2];
            for (var p2 in s2)
              if (Object.prototype.hasOwnProperty.call(s2, p2))
                t[p2] = s2[p2];
          }
          return t;
        };
        __rest2 = function(s2, e) {
          var t = {};
          for (var p2 in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p2) && e.indexOf(p2) < 0)
              t[p2] = s2[p2];
          if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
              if (e.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
                t[p2[i2]] = s2[p2[i2]];
            }
          return t;
        };
        __decorate2 = function(decorators, target, key, desc) {
          var c2 = arguments.length, r2 = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r2 = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i2 = decorators.length - 1; i2 >= 0; i2--)
              if (d2 = decorators[i2])
                r2 = (c2 < 3 ? d2(r2) : c2 > 3 ? d2(target, key, r2) : d2(target, key)) || r2;
          return c2 > 3 && r2 && Object.defineProperty(target, key, r2), r2;
        };
        __param2 = function(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        };
        __esDecorate2 = function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
          function accept(f2) {
            if (f2 !== void 0 && typeof f2 !== "function")
              throw new TypeError("Function expected");
            return f2;
          }
          var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
          var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
          var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
          var _2, done = false;
          for (var i2 = decorators.length - 1; i2 >= 0; i2--) {
            var context = {};
            for (var p2 in contextIn)
              context[p2] = p2 === "access" ? {} : contextIn[p2];
            for (var p2 in contextIn.access)
              context.access[p2] = contextIn.access[p2];
            context.addInitializer = function(f2) {
              if (done)
                throw new TypeError("Cannot add initializers after decoration has completed");
              extraInitializers.push(accept(f2 || null));
            };
            var result = (0, decorators[i2])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
              if (result === void 0)
                continue;
              if (result === null || typeof result !== "object")
                throw new TypeError("Object expected");
              if (_2 = accept(result.get))
                descriptor.get = _2;
              if (_2 = accept(result.set))
                descriptor.set = _2;
              if (_2 = accept(result.init))
                initializers.push(_2);
            } else if (_2 = accept(result)) {
              if (kind === "field")
                initializers.push(_2);
              else
                descriptor[key] = _2;
            }
          }
          if (target)
            Object.defineProperty(target, contextIn.name, descriptor);
          done = true;
        };
        __runInitializers2 = function(thisArg, initializers, value) {
          var useValue = arguments.length > 2;
          for (var i2 = 0; i2 < initializers.length; i2++) {
            value = useValue ? initializers[i2].call(thisArg, value) : initializers[i2].call(thisArg);
          }
          return useValue ? value : void 0;
        };
        __propKey2 = function(x2) {
          return typeof x2 === "symbol" ? x2 : "".concat(x2);
        };
        __setFunctionName2 = function(f2, name, prefix2) {
          if (typeof name === "symbol")
            name = name.description ? "[".concat(name.description, "]") : "";
          return Object.defineProperty(f2, "name", { configurable: true, value: prefix2 ? "".concat(prefix2, " ", name) : name });
        };
        __metadata2 = function(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter2 = function(thisArg, _arguments, P2, generator) {
          function adopt(value) {
            return value instanceof P2 ? value : new P2(function(resolve) {
              resolve(value);
            });
          }
          return new (P2 || (P2 = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        __generator2 = function(thisArg, body) {
          var _2 = { label: 0, sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          }, trys: [], ops: [] }, f2, y2, t, g2;
          return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
            return this;
          }), g2;
          function verb(n) {
            return function(v2) {
              return step([n, v2]);
            };
          }
          function step(op) {
            if (f2)
              throw new TypeError("Generator is already executing.");
            while (g2 && (g2 = 0, op[0] && (_2 = 0)), _2)
              try {
                if (f2 = 1, y2 && (t = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t = y2["return"]) && t.call(y2), 0) : y2.next) && !(t = t.call(y2, op[1])).done)
                  return t;
                if (y2 = 0, t)
                  op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _2.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _2.label++;
                    y2 = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _2.ops.pop();
                    _2.trys.pop();
                    continue;
                  default:
                    if (!(t = _2.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _2 = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                      _2.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _2.label < t[1]) {
                      _2.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _2.label < t[2]) {
                      _2.label = t[2];
                      _2.ops.push(op);
                      break;
                    }
                    if (t[2])
                      _2.ops.pop();
                    _2.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _2);
              } catch (e) {
                op = [6, e];
                y2 = 0;
              } finally {
                f2 = t = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
        __exportStar2 = function(m2, o2) {
          for (var p2 in m2)
            if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(o2, p2))
              __createBinding2(o2, m2, p2);
        };
        __createBinding2 = Object.create ? function(o2, m2, k2, k22) {
          if (k22 === void 0)
            k22 = k2;
          var desc = Object.getOwnPropertyDescriptor(m2, k2);
          if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function() {
              return m2[k2];
            } };
          }
          Object.defineProperty(o2, k22, desc);
        } : function(o2, m2, k2, k22) {
          if (k22 === void 0)
            k22 = k2;
          o2[k22] = m2[k2];
        };
        __values2 = function(o2) {
          var s2 = typeof Symbol === "function" && Symbol.iterator, m2 = s2 && o2[s2], i2 = 0;
          if (m2)
            return m2.call(o2);
          if (o2 && typeof o2.length === "number")
            return {
              next: function() {
                if (o2 && i2 >= o2.length)
                  o2 = void 0;
                return { value: o2 && o2[i2++], done: !o2 };
              }
            };
          throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read2 = function(o2, n) {
          var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
          if (!m2)
            return o2;
          var i2 = m2.call(o2), r2, ar = [], e;
          try {
            while ((n === void 0 || n-- > 0) && !(r2 = i2.next()).done)
              ar.push(r2.value);
          } catch (error) {
            e = { error };
          } finally {
            try {
              if (r2 && !r2.done && (m2 = i2["return"]))
                m2.call(i2);
            } finally {
              if (e)
                throw e.error;
            }
          }
          return ar;
        };
        __spread2 = function() {
          for (var ar = [], i2 = 0; i2 < arguments.length; i2++)
            ar = ar.concat(__read2(arguments[i2]));
          return ar;
        };
        __spreadArrays2 = function() {
          for (var s2 = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
            s2 += arguments[i2].length;
          for (var r2 = Array(s2), k2 = 0, i2 = 0; i2 < il; i2++)
            for (var a2 = arguments[i2], j2 = 0, jl = a2.length; j2 < jl; j2++, k2++)
              r2[k2] = a2[j2];
          return r2;
        };
        __spreadArray2 = function(to, from2, pack) {
          if (pack || arguments.length === 2)
            for (var i2 = 0, l2 = from2.length, ar; i2 < l2; i2++) {
              if (ar || !(i2 in from2)) {
                if (!ar)
                  ar = Array.prototype.slice.call(from2, 0, i2);
                ar[i2] = from2[i2];
              }
            }
          return to.concat(ar || Array.prototype.slice.call(from2));
        };
        __await2 = function(v2) {
          return this instanceof __await2 ? (this.v = v2, this) : new __await2(v2);
        };
        __asyncGenerator2 = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g2 = generator.apply(thisArg, _arguments || []), i2, q2 = [];
          return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
            return this;
          }, i2;
          function verb(n) {
            if (g2[n])
              i2[n] = function(v2) {
                return new Promise(function(a2, b) {
                  q2.push([n, v2, a2, b]) > 1 || resume(n, v2);
                });
              };
          }
          function resume(n, v2) {
            try {
              step(g2[n](v2));
            } catch (e) {
              settle(q2[0][3], e);
            }
          }
          function step(r2) {
            r2.value instanceof __await2 ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle(q2[0][2], r2);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f2, v2) {
            if (f2(v2), q2.shift(), q2.length)
              resume(q2[0][0], q2[0][1]);
          }
        };
        __asyncDelegator2 = function(o2) {
          var i2, p2;
          return i2 = {}, verb("next"), verb("throw", function(e) {
            throw e;
          }), verb("return"), i2[Symbol.iterator] = function() {
            return this;
          }, i2;
          function verb(n, f2) {
            i2[n] = o2[n] ? function(v2) {
              return (p2 = !p2) ? { value: __await2(o2[n](v2)), done: false } : f2 ? f2(v2) : v2;
            } : f2;
          }
        };
        __asyncValues2 = function(o2) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m2 = o2[Symbol.asyncIterator], i2;
          return m2 ? m2.call(o2) : (o2 = typeof __values2 === "function" ? __values2(o2) : o2[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
            return this;
          }, i2);
          function verb(n) {
            i2[n] = o2[n] && function(v2) {
              return new Promise(function(resolve, reject) {
                v2 = o2[n](v2), settle(resolve, reject, v2.done, v2.value);
              });
            };
          }
          function settle(resolve, reject, d2, v2) {
            Promise.resolve(v2).then(function(v3) {
              resolve({ value: v3, done: d2 });
            }, reject);
          }
        };
        __makeTemplateObject2 = function(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        };
        var __setModuleDefault = Object.create ? function(o2, v2) {
          Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
        } : function(o2, v2) {
          o2["default"] = v2;
        };
        __importStar2 = function(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result = {};
          if (mod != null) {
            for (var k2 in mod)
              if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
                __createBinding2(result, mod, k2);
          }
          __setModuleDefault(result, mod);
          return result;
        };
        __importDefault2 = function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        __classPrivateFieldGet2 = function(receiver, state, kind, f2) {
          if (kind === "a" && !f2)
            throw new TypeError("Private accessor was defined without a getter");
          if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
        };
        __classPrivateFieldSet2 = function(receiver, state, value, kind, f2) {
          if (kind === "m")
            throw new TypeError("Private method is not writable");
          if (kind === "a" && !f2)
            throw new TypeError("Private accessor was defined without a setter");
          if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state.set(receiver, value), value;
        };
        __classPrivateFieldIn2 = function(state, receiver) {
          if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
            throw new TypeError("Cannot use 'in' operator on non-object");
          return typeof state === "function" ? receiver === state : state.has(receiver);
        };
        exporter("__extends", __extends2);
        exporter("__assign", __assign2);
        exporter("__rest", __rest2);
        exporter("__decorate", __decorate2);
        exporter("__param", __param2);
        exporter("__esDecorate", __esDecorate2);
        exporter("__runInitializers", __runInitializers2);
        exporter("__propKey", __propKey2);
        exporter("__setFunctionName", __setFunctionName2);
        exporter("__metadata", __metadata2);
        exporter("__awaiter", __awaiter2);
        exporter("__generator", __generator2);
        exporter("__exportStar", __exportStar2);
        exporter("__createBinding", __createBinding2);
        exporter("__values", __values2);
        exporter("__read", __read2);
        exporter("__spread", __spread2);
        exporter("__spreadArrays", __spreadArrays2);
        exporter("__spreadArray", __spreadArray2);
        exporter("__await", __await2);
        exporter("__asyncGenerator", __asyncGenerator2);
        exporter("__asyncDelegator", __asyncDelegator2);
        exporter("__asyncValues", __asyncValues2);
        exporter("__makeTemplateObject", __makeTemplateObject2);
        exporter("__importStar", __importStar2);
        exporter("__importDefault", __importDefault2);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
        exporter("__classPrivateFieldIn", __classPrivateFieldIn2);
      });
    }
  });

  // ../../node_modules/@emotion/memoize/dist/emotion-memoize.cjs.dev.js
  var require_emotion_memoize_cjs_dev = __commonJS({
    "../../node_modules/@emotion/memoize/dist/emotion-memoize.cjs.dev.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function memoize(fn) {
        var cache = Object.create(null);
        return function(arg) {
          if (cache[arg] === void 0)
            cache[arg] = fn(arg);
          return cache[arg];
        };
      }
      exports["default"] = memoize;
    }
  });

  // ../../node_modules/@emotion/memoize/dist/emotion-memoize.cjs.js
  var require_emotion_memoize_cjs = __commonJS({
    "../../node_modules/@emotion/memoize/dist/emotion-memoize.cjs.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_emotion_memoize_cjs_dev();
      }
    }
  });

  // ../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.dev.js
  var require_emotion_is_prop_valid_cjs_dev = __commonJS({
    "../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.dev.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var memoize = require_emotion_memoize_cjs();
      function _interopDefault(e) {
        return e && e.__esModule ? e : { "default": e };
      }
      var memoize__default = /* @__PURE__ */ _interopDefault(memoize);
      var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
      var isPropValid = /* @__PURE__ */ memoize__default["default"](function(prop) {
        return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
      });
      exports["default"] = isPropValid;
    }
  });

  // ../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.js
  var require_emotion_is_prop_valid_cjs = __commonJS({
    "../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_emotion_is_prop_valid_cjs_dev();
      }
    }
  });

  // ../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.default.js
  var require_emotion_is_prop_valid_cjs_default = __commonJS({
    "../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.default.js"(exports) {
      exports._default = require_emotion_is_prop_valid_cjs().default;
    }
  });

  // ../../node_modules/shallowequal/index.js
  var require_shallowequal = __commonJS({
    "../../node_modules/shallowequal/index.js"(exports, module) {
      module.exports = function shallowEqual(objA, objB, compare, compareContext) {
        var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
        if (ret !== void 0) {
          return !!ret;
        }
        if (objA === objB) {
          return true;
        }
        if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
          return false;
        }
        var keysA = Object.keys(objA);
        var keysB = Object.keys(objB);
        if (keysA.length !== keysB.length) {
          return false;
        }
        var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
        for (var idx = 0; idx < keysA.length; idx++) {
          var key = keysA[idx];
          if (!bHasOwnProperty(key)) {
            return false;
          }
          var valueA = objA[key];
          var valueB = objB[key];
          ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
          if (ret === false || ret === void 0 && valueA !== valueB) {
            return false;
          }
        }
        return true;
      };
    }
  });

  // node_modules/@emotion/unitless/dist/emotion-unitless.cjs.dev.js
  var require_emotion_unitless_cjs_dev = __commonJS({
    "node_modules/@emotion/unitless/dist/emotion-unitless.cjs.dev.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var unitlessKeys = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1
      };
      exports.default = unitlessKeys;
    }
  });

  // node_modules/@emotion/unitless/dist/emotion-unitless.cjs.js
  var require_emotion_unitless_cjs = __commonJS({
    "node_modules/@emotion/unitless/dist/emotion-unitless.cjs.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_emotion_unitless_cjs_dev();
      }
    }
  });

  // ../../node_modules/react-is/cjs/react-is.development.js
  var require_react_is_development = __commonJS({
    "../../node_modules/react-is/cjs/react-is.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var hasSymbol = typeof Symbol === "function" && Symbol.for;
          var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
          var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
          var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
          var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
          var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
          var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
          var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
          var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
          var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
          var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
          var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
          var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
          var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
          var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
          var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
          var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
          var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
          var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
          function isValidElementType(type) {
            return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
          }
          function typeOf(object) {
            if (typeof object === "object" && object !== null) {
              var $$typeof = object.$$typeof;
              switch ($$typeof) {
                case REACT_ELEMENT_TYPE:
                  var type = object.type;
                  switch (type) {
                    case REACT_ASYNC_MODE_TYPE:
                    case REACT_CONCURRENT_MODE_TYPE:
                    case REACT_FRAGMENT_TYPE:
                    case REACT_PROFILER_TYPE:
                    case REACT_STRICT_MODE_TYPE:
                    case REACT_SUSPENSE_TYPE:
                      return type;
                    default:
                      var $$typeofType = type && type.$$typeof;
                      switch ($$typeofType) {
                        case REACT_CONTEXT_TYPE:
                        case REACT_FORWARD_REF_TYPE:
                        case REACT_LAZY_TYPE:
                        case REACT_MEMO_TYPE:
                        case REACT_PROVIDER_TYPE:
                          return $$typeofType;
                        default:
                          return $$typeof;
                      }
                  }
                case REACT_PORTAL_TYPE:
                  return $$typeof;
              }
            }
            return void 0;
          }
          var AsyncMode = REACT_ASYNC_MODE_TYPE;
          var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
          var ContextConsumer = REACT_CONTEXT_TYPE;
          var ContextProvider = REACT_PROVIDER_TYPE;
          var Element = REACT_ELEMENT_TYPE;
          var ForwardRef = REACT_FORWARD_REF_TYPE;
          var Fragment = REACT_FRAGMENT_TYPE;
          var Lazy = REACT_LAZY_TYPE;
          var Memo = REACT_MEMO_TYPE;
          var Portal = REACT_PORTAL_TYPE;
          var Profiler = REACT_PROFILER_TYPE;
          var StrictMode = REACT_STRICT_MODE_TYPE;
          var Suspense = REACT_SUSPENSE_TYPE;
          var hasWarnedAboutDeprecatedIsAsyncMode = false;
          function isAsyncMode(object) {
            {
              if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                hasWarnedAboutDeprecatedIsAsyncMode = true;
                console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
              }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
          }
          function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
          }
          function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
          }
          function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
          }
          function isElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
          }
          function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
          }
          function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
          }
          function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
          }
          function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
          }
          function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
          }
          function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
          }
          function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
          }
          exports.AsyncMode = AsyncMode;
          exports.ConcurrentMode = ConcurrentMode;
          exports.ContextConsumer = ContextConsumer;
          exports.ContextProvider = ContextProvider;
          exports.Element = Element;
          exports.ForwardRef = ForwardRef;
          exports.Fragment = Fragment;
          exports.Lazy = Lazy;
          exports.Memo = Memo;
          exports.Portal = Portal;
          exports.Profiler = Profiler;
          exports.StrictMode = StrictMode;
          exports.Suspense = Suspense;
          exports.isAsyncMode = isAsyncMode;
          exports.isConcurrentMode = isConcurrentMode;
          exports.isContextConsumer = isContextConsumer;
          exports.isContextProvider = isContextProvider;
          exports.isElement = isElement;
          exports.isForwardRef = isForwardRef;
          exports.isFragment = isFragment;
          exports.isLazy = isLazy;
          exports.isMemo = isMemo;
          exports.isPortal = isPortal;
          exports.isProfiler = isProfiler;
          exports.isStrictMode = isStrictMode;
          exports.isSuspense = isSuspense;
          exports.isValidElementType = isValidElementType;
          exports.typeOf = typeOf;
        })();
      }
    }
  });

  // ../../node_modules/react-is/index.js
  var require_react_is = __commonJS({
    "../../node_modules/react-is/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_is_development();
      }
    }
  });

  // ../../node_modules/object-assign/index.js
  var require_object_assign = __commonJS({
    "../../node_modules/object-assign/index.js"(exports, module) {
      "use strict";
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function toObject(val) {
        if (val === null || val === void 0) {
          throw new TypeError("Object.assign cannot be called with null or undefined");
        }
        return Object(val);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }
          var test1 = new String("abc");
          test1[5] = "de";
          if (Object.getOwnPropertyNames(test1)[0] === "5") {
            return false;
          }
          var test2 = {};
          for (var i2 = 0; i2 < 10; i2++) {
            test2["_" + String.fromCharCode(i2)] = i2;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
          });
          if (order2.join("") !== "0123456789") {
            return false;
          }
          var test3 = {};
          "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
            return false;
          }
          return true;
        } catch (err) {
          return false;
        }
      }
      module.exports = shouldUseNative() ? Object.assign : function(target, source) {
        var from2;
        var to = toObject(target);
        var symbols;
        for (var s2 = 1; s2 < arguments.length; s2++) {
          from2 = Object(arguments[s2]);
          for (var key in from2) {
            if (hasOwnProperty.call(from2, key)) {
              to[key] = from2[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from2);
            for (var i2 = 0; i2 < symbols.length; i2++) {
              if (propIsEnumerable.call(from2, symbols[i2])) {
                to[symbols[i2]] = from2[symbols[i2]];
              }
            }
          }
        }
        return to;
      };
    }
  });

  // ../../node_modules/prop-types/lib/ReactPropTypesSecret.js
  var require_ReactPropTypesSecret = __commonJS({
    "../../node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
      "use strict";
      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      module.exports = ReactPropTypesSecret;
    }
  });

  // ../../node_modules/prop-types/lib/has.js
  var require_has = __commonJS({
    "../../node_modules/prop-types/lib/has.js"(exports, module) {
      module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
    }
  });

  // ../../node_modules/prop-types/checkPropTypes.js
  var require_checkPropTypes = __commonJS({
    "../../node_modules/prop-types/checkPropTypes.js"(exports, module) {
      "use strict";
      var printWarning = function() {
      };
      if (true) {
        ReactPropTypesSecret = require_ReactPropTypesSecret();
        loggedTypeFailures = {};
        has = require_has();
        printWarning = function(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x2) {
          }
        };
      }
      var ReactPropTypesSecret;
      var loggedTypeFailures;
      var has;
      function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
        if (true) {
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  err.name = "Invariant Violation";
                  throw err;
                }
                error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
              } catch (ex) {
                error = ex;
              }
              if (error && !(error instanceof Error)) {
                printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
              }
              if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                loggedTypeFailures[error.message] = true;
                var stack = getStack ? getStack() : "";
                printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
              }
            }
          }
        }
      }
      checkPropTypes.resetWarningCache = function() {
        if (true) {
          loggedTypeFailures = {};
        }
      };
      module.exports = checkPropTypes;
    }
  });

  // ../../node_modules/prop-types/factoryWithTypeCheckers.js
  var require_factoryWithTypeCheckers = __commonJS({
    "../../node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
      "use strict";
      var ReactIs = require_react_is();
      var assign2 = require_object_assign();
      var ReactPropTypesSecret = require_ReactPropTypesSecret();
      var has = require_has();
      var checkPropTypes = require_checkPropTypes();
      var printWarning = function() {
      };
      if (true) {
        printWarning = function(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x2) {
          }
        };
      }
      function emptyFunctionThatReturnsNull() {
        return null;
      }
      module.exports = function(isValidElement, throwOnDirectAccess) {
        var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
          if (typeof iteratorFn === "function") {
            return iteratorFn;
          }
        }
        var ANONYMOUS = "<<anonymous>>";
        var ReactPropTypes = {
          array: createPrimitiveTypeChecker("array"),
          bigint: createPrimitiveTypeChecker("bigint"),
          bool: createPrimitiveTypeChecker("boolean"),
          func: createPrimitiveTypeChecker("function"),
          number: createPrimitiveTypeChecker("number"),
          object: createPrimitiveTypeChecker("object"),
          string: createPrimitiveTypeChecker("string"),
          symbol: createPrimitiveTypeChecker("symbol"),
          any: createAnyTypeChecker(),
          arrayOf: createArrayOfTypeChecker,
          element: createElementTypeChecker(),
          elementType: createElementTypeTypeChecker(),
          instanceOf: createInstanceTypeChecker,
          node: createNodeChecker(),
          objectOf: createObjectOfTypeChecker,
          oneOf: createEnumTypeChecker,
          oneOfType: createUnionTypeChecker,
          shape: createShapeTypeChecker,
          exact: createStrictShapeTypeChecker
        };
        function is(x2, y2) {
          if (x2 === y2) {
            return x2 !== 0 || 1 / x2 === 1 / y2;
          } else {
            return x2 !== x2 && y2 !== y2;
          }
        }
        function PropTypeError(message, data) {
          this.message = message;
          this.data = data && typeof data === "object" ? data : {};
          this.stack = "";
        }
        PropTypeError.prototype = Error.prototype;
        function createChainableTypeChecker(validate) {
          if (true) {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
          }
          function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
              if (throwOnDirectAccess) {
                var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                err.name = "Invariant Violation";
                throw err;
              } else if (typeof console !== "undefined") {
                var cacheKey = componentName + ":" + propName;
                if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                  printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
                  manualPropTypeCallCache[cacheKey] = true;
                  manualPropTypeWarningCount++;
                }
              }
            }
            if (props[propName] == null) {
              if (isRequired) {
                if (props[propName] === null) {
                  return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
                }
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
              }
              return null;
            } else {
              return validate(props, propName, componentName, location, propFullName);
            }
          }
          var chainedCheckType = checkType.bind(null, false);
          chainedCheckType.isRequired = checkType.bind(null, true);
          return chainedCheckType;
        }
        function createPrimitiveTypeChecker(expectedType) {
          function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
              var preciseType = getPreciseType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), { expectedType });
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createAnyTypeChecker() {
          return createChainableTypeChecker(emptyFunctionThatReturnsNull);
        }
        function createArrayOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") {
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
            }
            for (var i2 = 0; i2 < propValue.length; i2++) {
              var error = typeChecker(propValue, i2, componentName, location, propFullName + "[" + i2 + "]", ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createElementTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createElementTypeTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createInstanceTypeChecker(expectedClass) {
          function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
              var expectedClassName = expectedClass.name || ANONYMOUS;
              var actualClassName = getClassName(props[propName]);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createEnumTypeChecker(expectedValues) {
          if (!Array.isArray(expectedValues)) {
            if (true) {
              if (arguments.length > 1) {
                printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
              } else {
                printWarning("Invalid argument supplied to oneOf, expected an array.");
              }
            }
            return emptyFunctionThatReturnsNull;
          }
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for (var i2 = 0; i2 < expectedValues.length; i2++) {
              if (is(propValue, expectedValues[i2])) {
                return null;
              }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
              var type = getPreciseType(value);
              if (type === "symbol") {
                return String(value);
              }
              return value;
            });
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
          }
          return createChainableTypeChecker(validate);
        }
        function createObjectOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") {
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
            }
            for (var key in propValue) {
              if (has(propValue, key)) {
                var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                if (error instanceof Error) {
                  return error;
                }
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createUnionTypeChecker(arrayOfTypeCheckers) {
          if (!Array.isArray(arrayOfTypeCheckers)) {
            true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
            return emptyFunctionThatReturnsNull;
          }
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker = arrayOfTypeCheckers[i2];
            if (typeof checker !== "function") {
              printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i2 + ".");
              return emptyFunctionThatReturnsNull;
            }
          }
          function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for (var i3 = 0; i3 < arrayOfTypeCheckers.length; i3++) {
              var checker2 = arrayOfTypeCheckers[i3];
              var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
              if (checkerResult == null) {
                return null;
              }
              if (checkerResult.data && has(checkerResult.data, "expectedType")) {
                expectedTypes.push(checkerResult.data.expectedType);
              }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
          }
          return createChainableTypeChecker(validate);
        }
        function createNodeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function invalidValidatorError(componentName, location, propFullName, key, type) {
          return new PropTypeError((componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`.");
        }
        function createShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            }
            for (var key in shapeTypes) {
              var checker = shapeTypes[key];
              if (typeof checker !== "function") {
                return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
              }
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createStrictShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            }
            var allKeys = assign2({}, props[propName], shapeTypes);
            for (var key in allKeys) {
              var checker = shapeTypes[key];
              if (has(shapeTypes, key) && typeof checker !== "function") {
                return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
              }
              if (!checker) {
                return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
              }
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function isNode(propValue) {
          switch (typeof propValue) {
            case "number":
            case "string":
            case "undefined":
              return true;
            case "boolean":
              return !propValue;
            case "object":
              if (Array.isArray(propValue)) {
                return propValue.every(isNode);
              }
              if (propValue === null || isValidElement(propValue)) {
                return true;
              }
              var iteratorFn = getIteratorFn(propValue);
              if (iteratorFn) {
                var iterator = iteratorFn.call(propValue);
                var step;
                if (iteratorFn !== propValue.entries) {
                  while (!(step = iterator.next()).done) {
                    if (!isNode(step.value)) {
                      return false;
                    }
                  }
                } else {
                  while (!(step = iterator.next()).done) {
                    var entry = step.value;
                    if (entry) {
                      if (!isNode(entry[1])) {
                        return false;
                      }
                    }
                  }
                }
              } else {
                return false;
              }
              return true;
            default:
              return false;
          }
        }
        function isSymbol(propType, propValue) {
          if (propType === "symbol") {
            return true;
          }
          if (!propValue) {
            return false;
          }
          if (propValue["@@toStringTag"] === "Symbol") {
            return true;
          }
          if (typeof Symbol === "function" && propValue instanceof Symbol) {
            return true;
          }
          return false;
        }
        function getPropType(propValue) {
          var propType = typeof propValue;
          if (Array.isArray(propValue)) {
            return "array";
          }
          if (propValue instanceof RegExp) {
            return "object";
          }
          if (isSymbol(propType, propValue)) {
            return "symbol";
          }
          return propType;
        }
        function getPreciseType(propValue) {
          if (typeof propValue === "undefined" || propValue === null) {
            return "" + propValue;
          }
          var propType = getPropType(propValue);
          if (propType === "object") {
            if (propValue instanceof Date) {
              return "date";
            } else if (propValue instanceof RegExp) {
              return "regexp";
            }
          }
          return propType;
        }
        function getPostfixForTypeWarning(value) {
          var type = getPreciseType(value);
          switch (type) {
            case "array":
            case "object":
              return "an " + type;
            case "boolean":
            case "date":
            case "regexp":
              return "a " + type;
            default:
              return type;
          }
        }
        function getClassName(propValue) {
          if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
          }
          return propValue.constructor.name;
        }
        ReactPropTypes.checkPropTypes = checkPropTypes;
        ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
        ReactPropTypes.PropTypes = ReactPropTypes;
        return ReactPropTypes;
      };
    }
  });

  // ../../node_modules/prop-types/index.js
  var require_prop_types = __commonJS({
    "../../node_modules/prop-types/index.js"(exports, module) {
      if (true) {
        ReactIs = require_react_is();
        throwOnDirectAccess = true;
        module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
      } else {
        module.exports = null();
      }
      var ReactIs;
      var throwOnDirectAccess;
    }
  });

  // src/rgd/desktop/client_rgd.jsx
  var import_react65 = __toModule(require_react());
  var import_client = __toModule(require_client());

  // src/rgd/common/screens/RgdL/RgdL.jsx
  var import_react64 = __toModule(require_react());

  // node_modules/tslib/modules/index.js
  var import_tslib = __toModule(require_tslib());
  var {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __exportStar,
    __createBinding,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn
  } = import_tslib.default;

  // ../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.mjs
  var import_emotion_is_prop_valid_cjs = __toModule(require_emotion_is_prop_valid_cjs());
  var import_emotion_is_prop_valid_cjs_default = __toModule(require_emotion_is_prop_valid_cjs_default());

  // node_modules/styled-components/dist/styled-components.browser.esm.js
  var import_react = __toModule(require_react());
  var import_shallowequal = __toModule(require_shallowequal());

  // node_modules/stylis/src/Enum.js
  var MS = "-ms-";
  var MOZ = "-moz-";
  var WEBKIT = "-webkit-";
  var COMMENT = "comm";
  var RULESET = "rule";
  var DECLARATION = "decl";
  var IMPORT = "@import";
  var KEYFRAMES = "@keyframes";
  var LAYER = "@layer";

  // node_modules/stylis/src/Utility.js
  var abs = Math.abs;
  var from = String.fromCharCode;
  var assign = Object.assign;
  function hash(value, length2) {
    return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
  }
  function trim(value) {
    return value.trim();
  }
  function match(value, pattern) {
    return (value = pattern.exec(value)) ? value[0] : value;
  }
  function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
  }
  function indexof(value, search, position2) {
    return value.indexOf(search, position2);
  }
  function charat(value, index) {
    return value.charCodeAt(index) | 0;
  }
  function substr(value, begin, end) {
    return value.slice(begin, end);
  }
  function strlen(value) {
    return value.length;
  }
  function sizeof(value) {
    return value.length;
  }
  function append(value, array) {
    return array.push(value), value;
  }
  function combine(array, callback) {
    return array.map(callback).join("");
  }
  function filter(array, pattern) {
    return array.filter(function(value) {
      return !match(value, pattern);
    });
  }

  // node_modules/stylis/src/Tokenizer.js
  var line = 1;
  var column = 1;
  var length = 0;
  var position = 0;
  var character = 0;
  var characters = "";
  function node(value, root, parent, type, props, children, length2, siblings) {
    return { value, root, parent, type, props, children, line, column, length: length2, return: "", siblings };
  }
  function copy(root, props) {
    return assign(node("", null, null, "", null, null, 0, root.siblings), root, { length: -root.length }, props);
  }
  function lift(root) {
    while (root.root)
      root = copy(root.root, { children: [root] });
    append(root, root.siblings);
  }
  function char() {
    return character;
  }
  function prev() {
    character = position > 0 ? charat(characters, --position) : 0;
    if (column--, character === 10)
      column = 1, line--;
    return character;
  }
  function next() {
    character = position < length ? charat(characters, position++) : 0;
    if (column++, character === 10)
      column = 1, line++;
    return character;
  }
  function peek() {
    return charat(characters, position);
  }
  function caret() {
    return position;
  }
  function slice(begin, end) {
    return substr(characters, begin, end);
  }
  function token(type) {
    switch (type) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function alloc(value) {
    return line = column = 1, length = strlen(characters = value), position = 0, [];
  }
  function dealloc(value) {
    return characters = "", value;
  }
  function delimit(type) {
    return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
  }
  function whitespace(type) {
    while (character = peek())
      if (character < 33)
        next();
      else
        break;
    return token(type) > 2 || token(character) > 3 ? "" : " ";
  }
  function escaping(index, count) {
    while (--count && next())
      if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
        break;
    return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
  }
  function delimiter(type) {
    while (next())
      switch (character) {
        case type:
          return position;
        case 34:
        case 39:
          if (type !== 34 && type !== 39)
            delimiter(character);
          break;
        case 40:
          if (type === 41)
            delimiter(type);
          break;
        case 92:
          next();
          break;
      }
    return position;
  }
  function commenter(type, index) {
    while (next())
      if (type + character === 47 + 10)
        break;
      else if (type + character === 42 + 42 && peek() === 47)
        break;
    return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
  }
  function identifier(index) {
    while (!token(peek()))
      next();
    return slice(index, position);
  }

  // node_modules/stylis/src/Parser.js
  function compile(value) {
    return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
  }
  function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index = 0;
    var offset = 0;
    var length2 = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character2 = 0;
    var type = "";
    var props = rules;
    var children = rulesets;
    var reference = rule;
    var characters2 = type;
    while (scanning)
      switch (previous = character2, character2 = next()) {
        case 40:
          if (previous != 108 && charat(characters2, length2 - 1) == 58) {
            if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f", abs(index ? points[index - 1] : 0)) != -1)
              ampersand = -1;
            break;
          }
        case 34:
        case 39:
        case 91:
          characters2 += delimit(character2);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          characters2 += whitespace(previous);
          break;
        case 92:
          characters2 += escaping(caret() - 1, 7);
          continue;
        case 47:
          switch (peek()) {
            case 42:
            case 47:
              append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
              break;
            default:
              characters2 += "/";
          }
          break;
        case 123 * variable:
          points[index++] = strlen(characters2) * ampersand;
        case 125 * variable:
        case 59:
        case 0:
          switch (character2) {
            case 0:
            case 125:
              scanning = 0;
            case 59 + offset:
              if (ampersand == -1)
                characters2 = replace(characters2, /\f/g, "");
              if (property > 0 && strlen(characters2) - length2)
                append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
              break;
            case 59:
              characters2 += ";";
            default:
              append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2, rulesets), rulesets);
              if (character2 === 123)
                if (offset === 0)
                  parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
                else
                  switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2, children), children), rules, children, length2, points, rule ? props : children);
                      break;
                    default:
                      parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                  }
          }
          index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
          break;
        case 58:
          length2 = 1 + strlen(characters2), property = previous;
        default:
          if (variable < 1) {
            if (character2 == 123)
              --variable;
            else if (character2 == 125 && variable++ == 0 && prev() == 125)
              continue;
          }
          switch (characters2 += from(character2), character2 * variable) {
            case 38:
              ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
              break;
            case 44:
              points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
              break;
            case 64:
              if (peek() === 45)
                characters2 += delimit(next());
              atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
              break;
            case 45:
              if (previous === 45 && strlen(characters2) == 2)
                variable = 0;
          }
      }
    return rulesets;
  }
  function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2, siblings) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [""];
    var size = sizeof(rule);
    for (var i2 = 0, j2 = 0, k2 = 0; i2 < index; ++i2)
      for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j2 = points[i2])), z2 = value; x2 < size; ++x2)
        if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
          props[k2++] = z2;
    return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2, siblings);
  }
  function comment(value, root, parent, siblings) {
    return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
  }
  function declaration(value, root, parent, length2, siblings) {
    return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
  }

  // node_modules/stylis/src/Prefixer.js
  function prefix(value, length2, children) {
    switch (hash(value, length2)) {
      case 5103:
        return WEBKIT + "print-" + value + value;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return WEBKIT + value + value;
      case 4789:
        return MOZ + value + value;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return WEBKIT + value + MOZ + value + MS + value + value;
      case 5936:
        switch (charat(value, length2 + 11)) {
          case 114:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
          case 108:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
          case 45:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
        }
      case 6828:
      case 4268:
      case 2903:
        return WEBKIT + value + MS + value + value;
      case 6165:
        return WEBKIT + value + MS + "flex-" + value + value;
      case 5187:
        return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
      case 5443:
        return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/g, "") + (!match(value, /flex-|baseline/) ? MS + "grid-row-" + replace(value, /flex-|-self/g, "") : "") + value;
      case 4675:
        return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/g, "") + value;
      case 5548:
        return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
      case 5292:
        return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
      case 6060:
        return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
      case 4554:
        return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
      case 6187:
        return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
      case 5495:
      case 3959:
        return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
      case 4968:
        return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
      case 4200:
        if (!match(value, /flex-|baseline/))
          return MS + "grid-column-align" + substr(value, length2) + value;
        break;
      case 2592:
      case 3360:
        return MS + replace(value, "template-", "") + value;
      case 4384:
      case 3616:
        if (children && children.some(function(element, index) {
          return length2 = index, match(element.props, /grid-\w+-end/);
        })) {
          return ~indexof(value + (children = children[length2].value), "span", 0) ? value : MS + replace(value, "-start", "") + value + MS + "grid-row-span:" + (~indexof(children, "span", 0) ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ";";
        }
        return MS + replace(value, "-start", "") + value;
      case 4896:
      case 4128:
        return children && children.some(function(element) {
          return match(element.props, /grid-\w+-start/);
        }) ? value : MS + replace(replace(value, "-end", "-span"), "span ", "") + value;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (strlen(value) - 1 - length2 > 6)
          switch (charat(value, length2 + 1)) {
            case 109:
              if (charat(value, length2 + 4) !== 45)
                break;
            case 102:
              return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
            case 115:
              return ~indexof(value, "stretch", 0) ? prefix(replace(value, "stretch", "fill-available"), length2, children) + value : value;
          }
        break;
      case 5152:
      case 5920:
        return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_2, a2, b, c2, d2, e, f2) {
          return MS + a2 + ":" + b + f2 + (c2 ? MS + a2 + "-span:" + (d2 ? e : +e - +b) + f2 : "") + value;
        });
      case 4949:
        if (charat(value, length2 + 6) === 121)
          return replace(value, ":", ":" + WEBKIT) + value;
        break;
      case 6444:
        switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
          case 120:
            return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
          case 100:
            return replace(value, ":", ":" + MS) + value;
        }
        break;
      case 5719:
      case 2647:
      case 2135:
      case 3927:
      case 2391:
        return replace(value, "scroll-", "scroll-snap-") + value;
    }
    return value;
  }

  // node_modules/stylis/src/Serializer.js
  function serialize(children, callback) {
    var output = "";
    for (var i2 = 0; i2 < children.length; i2++)
      output += callback(children[i2], i2, children, callback) || "";
    return output;
  }
  function stringify(element, index, children, callback) {
    switch (element.type) {
      case LAYER:
        if (element.children.length)
          break;
      case IMPORT:
      case DECLARATION:
        return element.return = element.return || element.value;
      case COMMENT:
        return "";
      case KEYFRAMES:
        return element.return = element.value + "{" + serialize(element.children, callback) + "}";
      case RULESET:
        if (!strlen(element.value = element.props.join(",")))
          return "";
    }
    return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
  }

  // node_modules/stylis/src/Middleware.js
  function middleware(collection) {
    var length2 = sizeof(collection);
    return function(element, index, children, callback) {
      var output = "";
      for (var i2 = 0; i2 < length2; i2++)
        output += collection[i2](element, index, children, callback) || "";
      return output;
    };
  }
  function rulesheet(callback) {
    return function(element) {
      if (!element.root) {
        if (element = element.return)
          callback(element);
      }
    };
  }
  function prefixer(element, index, children, callback) {
    if (element.length > -1) {
      if (!element.return)
        switch (element.type) {
          case DECLARATION:
            element.return = prefix(element.value, element.length, children);
            return;
          case KEYFRAMES:
            return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
          case RULESET:
            if (element.length)
              return combine(children = element.props, function(value) {
                switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
                  case ":read-only":
                  case ":read-write":
                    lift(copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] }));
                    lift(copy(element, { props: [value] }));
                    assign(element, { props: filter(children, callback) });
                    break;
                  case "::placeholder":
                    lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }));
                    lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }));
                    lift(copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] }));
                    lift(copy(element, { props: [value] }));
                    assign(element, { props: filter(children, callback) });
                    break;
                }
                return "";
              });
        }
    }
  }

  // node_modules/styled-components/dist/styled-components.browser.esm.js
  var import_unitless = __toModule(require_emotion_unitless_cjs());
  var f = typeof process != "undefined" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled";
  var m = "active";
  var y = "data-styled-version";
  var v = "6.1.8";
  var g = "/*!sc*/\n";
  var S = typeof window != "undefined" && "HTMLElement" in window;
  var w = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process != "undefined" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process != "undefined" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : true);
  var E = /invalid hook call/i;
  var N = new Set();
  var P = function(t, n) {
    if (true) {
      var o2 = n ? ' with the id of "'.concat(n, '"') : "", s2 = "The component ".concat(t).concat(o2, " has been created dynamically.\n") + "You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.", i2 = console.error;
      try {
        var a2 = true;
        console.error = function(t2) {
          for (var n2 = [], o3 = 1; o3 < arguments.length; o3++)
            n2[o3 - 1] = arguments[o3];
          E.test(t2) ? (a2 = false, N.delete(s2)) : i2.apply(void 0, __spreadArray([t2], n2, false));
        }, (0, import_react.useRef)(), a2 && !N.has(s2) && (console.warn(s2), N.add(s2));
      } catch (e) {
        E.test(e.message) && N.delete(s2);
      } finally {
        console.error = i2;
      }
    }
  };
  var _ = Object.freeze([]);
  var C = Object.freeze({});
  function I(e, t, n) {
    return n === void 0 && (n = C), e.theme !== n.theme && e.theme || t || n.theme;
  }
  var A = new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]);
  var O = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
  var D = /(^-|-$)/g;
  function R(e) {
    return e.replace(O, "-").replace(D, "");
  }
  var T = /(a)(d)/gi;
  var k = 52;
  var j = function(e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
  function x(e) {
    var t, n = "";
    for (t = Math.abs(e); t > k; t = t / k | 0)
      n = j(t % k) + n;
    return (j(t % k) + n).replace(T, "$1-$2");
  }
  var V;
  var F = 5381;
  var M = function(e, t) {
    for (var n = t.length; n; )
      e = 33 * e ^ t.charCodeAt(--n);
    return e;
  };
  var $ = function(e) {
    return M(F, e);
  };
  function z(e) {
    return x($(e) >>> 0);
  }
  function B(e) {
    return typeof e == "string" && e || e.displayName || e.name || "Component";
  }
  function L(e) {
    return typeof e == "string" && e.charAt(0) === e.charAt(0).toLowerCase();
  }
  var G = typeof Symbol == "function" && Symbol.for;
  var Y = G ? Symbol.for("react.memo") : 60115;
  var W = G ? Symbol.for("react.forward_ref") : 60112;
  var q = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true };
  var H = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true };
  var U = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true };
  var J = ((V = {})[W] = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, V[Y] = U, V);
  function X(e) {
    return ("type" in (t = e) && t.type.$$typeof) === Y ? U : "$$typeof" in e ? J[e.$$typeof] : q;
    var t;
  }
  var Z = Object.defineProperty;
  var K = Object.getOwnPropertyNames;
  var Q = Object.getOwnPropertySymbols;
  var ee = Object.getOwnPropertyDescriptor;
  var te = Object.getPrototypeOf;
  var ne = Object.prototype;
  function oe(e, t, n) {
    if (typeof t != "string") {
      if (ne) {
        var o2 = te(t);
        o2 && o2 !== ne && oe(e, o2, n);
      }
      var r2 = K(t);
      Q && (r2 = r2.concat(Q(t)));
      for (var s2 = X(e), i2 = X(t), a2 = 0; a2 < r2.length; ++a2) {
        var c2 = r2[a2];
        if (!(c2 in H || n && n[c2] || i2 && c2 in i2 || s2 && c2 in s2)) {
          var l2 = ee(t, c2);
          try {
            Z(e, c2, l2);
          } catch (e2) {
          }
        }
      }
    }
    return e;
  }
  function re(e) {
    return typeof e == "function";
  }
  function se(e) {
    return typeof e == "object" && "styledComponentId" in e;
  }
  function ie(e, t) {
    return e && t ? "".concat(e, " ").concat(t) : e || t || "";
  }
  function ae(e, t) {
    if (e.length === 0)
      return "";
    for (var n = e[0], o2 = 1; o2 < e.length; o2++)
      n += t ? t + e[o2] : e[o2];
    return n;
  }
  function ce(e) {
    return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
  }
  function le(e, t, n) {
    if (n === void 0 && (n = false), !n && !ce(e) && !Array.isArray(e))
      return t;
    if (Array.isArray(t))
      for (var o2 = 0; o2 < t.length; o2++)
        e[o2] = le(e[o2], t[o2]);
    else if (ce(t))
      for (var o2 in t)
        e[o2] = le(e[o2], t[o2]);
    return e;
  }
  function ue(e, t) {
    Object.defineProperty(e, "toString", { value: t });
  }
  var pe = true ? { 1: "Cannot create styled-component for component: %s.\n\n", 2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n", 3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n", 4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n", 5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n", 6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n", 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: 'ThemeProvider: Please make your "theme" prop an object.\n\n', 9: "Missing document `<head>`\n\n", 10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n", 11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n", 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n", 14: 'ThemeProvider: "theme" prop is required.\n\n', 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n", 17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n", 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
  function de() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e[t] = arguments[t];
    for (var n = e[0], o2 = [], r2 = 1, s2 = e.length; r2 < s2; r2 += 1)
      o2.push(e[r2]);
    return o2.forEach(function(e2) {
      n = n.replace(/%[a-z]/, e2);
    }), n;
  }
  function he(t) {
    for (var n = [], o2 = 1; o2 < arguments.length; o2++)
      n[o2 - 1] = arguments[o2];
    return false ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(n.length > 0 ? " Args: ".concat(n.join(", ")) : "")) : new Error(de.apply(void 0, __spreadArray([pe[t]], n, false)).trim());
  }
  var fe = function() {
    function e(e2) {
      this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e2;
    }
    return e.prototype.indexOfGroup = function(e2) {
      for (var t = 0, n = 0; n < e2; n++)
        t += this.groupSizes[n];
      return t;
    }, e.prototype.insertRules = function(e2, t) {
      if (e2 >= this.groupSizes.length) {
        for (var n = this.groupSizes, o2 = n.length, r2 = o2; e2 >= r2; )
          if ((r2 <<= 1) < 0)
            throw he(16, "".concat(e2));
        this.groupSizes = new Uint32Array(r2), this.groupSizes.set(n), this.length = r2;
        for (var s2 = o2; s2 < r2; s2++)
          this.groupSizes[s2] = 0;
      }
      for (var i2 = this.indexOfGroup(e2 + 1), a2 = (s2 = 0, t.length); s2 < a2; s2++)
        this.tag.insertRule(i2, t[s2]) && (this.groupSizes[e2]++, i2++);
    }, e.prototype.clearGroup = function(e2) {
      if (e2 < this.length) {
        var t = this.groupSizes[e2], n = this.indexOfGroup(e2), o2 = n + t;
        this.groupSizes[e2] = 0;
        for (var r2 = n; r2 < o2; r2++)
          this.tag.deleteRule(n);
      }
    }, e.prototype.getGroup = function(e2) {
      var t = "";
      if (e2 >= this.length || this.groupSizes[e2] === 0)
        return t;
      for (var n = this.groupSizes[e2], o2 = this.indexOfGroup(e2), r2 = o2 + n, s2 = o2; s2 < r2; s2++)
        t += "".concat(this.tag.getRule(s2)).concat(g);
      return t;
    }, e;
  }();
  var me = new Map();
  var ye = new Map();
  var ve = 1;
  var ge = function(e) {
    if (me.has(e))
      return me.get(e);
    for (; ye.has(ve); )
      ve++;
    var t = ve++;
    if ((0 | t) < 0 || t > 1073741824)
      throw he(16, "".concat(t));
    return me.set(e, t), ye.set(t, e), t;
  };
  var Se = function(e, t) {
    ve = t + 1, me.set(e, t), ye.set(t, e);
  };
  var we = "style[".concat(f, "][").concat(y, '="').concat(v, '"]');
  var be = new RegExp("^".concat(f, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'));
  var Ee = function(e, t, n) {
    for (var o2, r2 = n.split(","), s2 = 0, i2 = r2.length; s2 < i2; s2++)
      (o2 = r2[s2]) && e.registerName(t, o2);
  };
  var Ne = function(e, t) {
    for (var n, o2 = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(g), r2 = [], s2 = 0, i2 = o2.length; s2 < i2; s2++) {
      var a2 = o2[s2].trim();
      if (a2) {
        var c2 = a2.match(be);
        if (c2) {
          var l2 = 0 | parseInt(c2[1], 10), u2 = c2[2];
          l2 !== 0 && (Se(u2, l2), Ee(e, u2, c2[3]), e.getTag().insertRules(l2, r2)), r2.length = 0;
        } else
          r2.push(a2);
      }
    }
  };
  function Pe() {
    return typeof __webpack_nonce__ != "undefined" ? __webpack_nonce__ : null;
  }
  var _e = function(e) {
    var t = document.head, n = e || t, o2 = document.createElement("style"), r2 = function(e2) {
      var t2 = Array.from(e2.querySelectorAll("style[".concat(f, "]")));
      return t2[t2.length - 1];
    }(n), s2 = r2 !== void 0 ? r2.nextSibling : null;
    o2.setAttribute(f, m), o2.setAttribute(y, v);
    var i2 = Pe();
    return i2 && o2.setAttribute("nonce", i2), n.insertBefore(o2, s2), o2;
  };
  var Ce = function() {
    function e(e2) {
      this.element = _e(e2), this.element.appendChild(document.createTextNode("")), this.sheet = function(e3) {
        if (e3.sheet)
          return e3.sheet;
        for (var t = document.styleSheets, n = 0, o2 = t.length; n < o2; n++) {
          var r2 = t[n];
          if (r2.ownerNode === e3)
            return r2;
        }
        throw he(17);
      }(this.element), this.length = 0;
    }
    return e.prototype.insertRule = function(e2, t) {
      try {
        return this.sheet.insertRule(t, e2), this.length++, true;
      } catch (e3) {
        return false;
      }
    }, e.prototype.deleteRule = function(e2) {
      this.sheet.deleteRule(e2), this.length--;
    }, e.prototype.getRule = function(e2) {
      var t = this.sheet.cssRules[e2];
      return t && t.cssText ? t.cssText : "";
    }, e;
  }();
  var Ie = function() {
    function e(e2) {
      this.element = _e(e2), this.nodes = this.element.childNodes, this.length = 0;
    }
    return e.prototype.insertRule = function(e2, t) {
      if (e2 <= this.length && e2 >= 0) {
        var n = document.createTextNode(t);
        return this.element.insertBefore(n, this.nodes[e2] || null), this.length++, true;
      }
      return false;
    }, e.prototype.deleteRule = function(e2) {
      this.element.removeChild(this.nodes[e2]), this.length--;
    }, e.prototype.getRule = function(e2) {
      return e2 < this.length ? this.nodes[e2].textContent : "";
    }, e;
  }();
  var Ae = function() {
    function e(e2) {
      this.rules = [], this.length = 0;
    }
    return e.prototype.insertRule = function(e2, t) {
      return e2 <= this.length && (this.rules.splice(e2, 0, t), this.length++, true);
    }, e.prototype.deleteRule = function(e2) {
      this.rules.splice(e2, 1), this.length--;
    }, e.prototype.getRule = function(e2) {
      return e2 < this.length ? this.rules[e2] : "";
    }, e;
  }();
  var Oe = S;
  var De = { isServer: !S, useCSSOMInjection: !w };
  var Re = function() {
    function e(e2, n, o2) {
      e2 === void 0 && (e2 = C), n === void 0 && (n = {});
      var r2 = this;
      this.options = __assign(__assign({}, De), e2), this.gs = n, this.names = new Map(o2), this.server = !!e2.isServer, !this.server && S && Oe && (Oe = false, function(e3) {
        for (var t = document.querySelectorAll(we), n2 = 0, o3 = t.length; n2 < o3; n2++) {
          var r3 = t[n2];
          r3 && r3.getAttribute(f) !== m && (Ne(e3, r3), r3.parentNode && r3.parentNode.removeChild(r3));
        }
      }(this)), ue(this, function() {
        return function(e3) {
          for (var t = e3.getTag(), n2 = t.length, o3 = "", r3 = function(n3) {
            var r4 = function(e4) {
              return ye.get(e4);
            }(n3);
            if (r4 === void 0)
              return "continue";
            var s3 = e3.names.get(r4), i2 = t.getGroup(n3);
            if (s3 === void 0 || i2.length === 0)
              return "continue";
            var a2 = "".concat(f, ".g").concat(n3, '[id="').concat(r4, '"]'), c2 = "";
            s3 !== void 0 && s3.forEach(function(e4) {
              e4.length > 0 && (c2 += "".concat(e4, ","));
            }), o3 += "".concat(i2).concat(a2, '{content:"').concat(c2, '"}').concat(g);
          }, s2 = 0; s2 < n2; s2++)
            r3(s2);
          return o3;
        }(r2);
      });
    }
    return e.registerId = function(e2) {
      return ge(e2);
    }, e.prototype.reconstructWithOptions = function(n, o2) {
      return o2 === void 0 && (o2 = true), new e(__assign(__assign({}, this.options), n), this.gs, o2 && this.names || void 0);
    }, e.prototype.allocateGSInstance = function(e2) {
      return this.gs[e2] = (this.gs[e2] || 0) + 1;
    }, e.prototype.getTag = function() {
      return this.tag || (this.tag = (e2 = function(e3) {
        var t = e3.useCSSOMInjection, n = e3.target;
        return e3.isServer ? new Ae(n) : t ? new Ce(n) : new Ie(n);
      }(this.options), new fe(e2)));
      var e2;
    }, e.prototype.hasNameForId = function(e2, t) {
      return this.names.has(e2) && this.names.get(e2).has(t);
    }, e.prototype.registerName = function(e2, t) {
      if (ge(e2), this.names.has(e2))
        this.names.get(e2).add(t);
      else {
        var n = new Set();
        n.add(t), this.names.set(e2, n);
      }
    }, e.prototype.insertRules = function(e2, t, n) {
      this.registerName(e2, t), this.getTag().insertRules(ge(e2), n);
    }, e.prototype.clearNames = function(e2) {
      this.names.has(e2) && this.names.get(e2).clear();
    }, e.prototype.clearRules = function(e2) {
      this.getTag().clearGroup(ge(e2)), this.clearNames(e2);
    }, e.prototype.clearTag = function() {
      this.tag = void 0;
    }, e;
  }();
  var Te = /&/g;
  var ke = /^\s*\/\/.*$/gm;
  function je(e, t) {
    return e.map(function(e2) {
      return e2.type === "rule" && (e2.value = "".concat(t, " ").concat(e2.value), e2.value = e2.value.replaceAll(",", ",".concat(t, " ")), e2.props = e2.props.map(function(e3) {
        return "".concat(t, " ").concat(e3);
      })), Array.isArray(e2.children) && e2.type !== "@keyframes" && (e2.children = je(e2.children, t)), e2;
    });
  }
  function xe(e) {
    var t, n, o2, r2 = e === void 0 ? C : e, s2 = r2.options, i2 = s2 === void 0 ? C : s2, a2 = r2.plugins, c2 = a2 === void 0 ? _ : a2, l2 = function(e2, o3, r3) {
      return r3.startsWith(n) && r3.endsWith(n) && r3.replaceAll(n, "").length > 0 ? ".".concat(t) : e2;
    }, u2 = c2.slice();
    u2.push(function(e2) {
      e2.type === RULESET && e2.value.includes("&") && (e2.props[0] = e2.props[0].replace(Te, n).replace(o2, l2));
    }), i2.prefix && u2.push(prefixer), u2.push(stringify);
    var p2 = function(e2, r3, s3, a3) {
      r3 === void 0 && (r3 = ""), s3 === void 0 && (s3 = ""), a3 === void 0 && (a3 = "&"), t = a3, n = r3, o2 = new RegExp("\\".concat(n, "\\b"), "g");
      var c3 = e2.replace(ke, ""), l3 = compile(s3 || r3 ? "".concat(s3, " ").concat(r3, " { ").concat(c3, " }") : c3);
      i2.namespace && (l3 = je(l3, i2.namespace));
      var p3 = [];
      return serialize(l3, middleware(u2.concat(rulesheet(function(e3) {
        return p3.push(e3);
      })))), p3;
    };
    return p2.hash = c2.length ? c2.reduce(function(e2, t2) {
      return t2.name || he(15), M(e2, t2.name);
    }, F).toString() : "", p2;
  }
  var Ve = new Re();
  var Fe = xe();
  var Me = import_react.default.createContext({ shouldForwardProp: void 0, styleSheet: Ve, stylis: Fe });
  var $e = Me.Consumer;
  var ze = import_react.default.createContext(void 0);
  function Be() {
    return (0, import_react.useContext)(Me);
  }
  function Le(e) {
    var t = (0, import_react.useState)(e.stylisPlugins), n = t[0], r2 = t[1], c2 = Be().styleSheet, l2 = (0, import_react.useMemo)(function() {
      var t2 = c2;
      return e.sheet ? t2 = e.sheet : e.target && (t2 = t2.reconstructWithOptions({ target: e.target }, false)), e.disableCSSOMInjection && (t2 = t2.reconstructWithOptions({ useCSSOMInjection: false })), t2;
    }, [e.disableCSSOMInjection, e.sheet, e.target, c2]), u2 = (0, import_react.useMemo)(function() {
      return xe({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: n });
    }, [e.enableVendorPrefixes, e.namespace, n]);
    (0, import_react.useEffect)(function() {
      (0, import_shallowequal.default)(n, e.stylisPlugins) || r2(e.stylisPlugins);
    }, [e.stylisPlugins]);
    var d2 = (0, import_react.useMemo)(function() {
      return { shouldForwardProp: e.shouldForwardProp, styleSheet: l2, stylis: u2 };
    }, [e.shouldForwardProp, l2, u2]);
    return import_react.default.createElement(Me.Provider, { value: d2 }, import_react.default.createElement(ze.Provider, { value: u2 }, e.children));
  }
  var Ge = function() {
    function e(e2, t) {
      var n = this;
      this.inject = function(e3, t2) {
        t2 === void 0 && (t2 = Fe);
        var o2 = n.name + t2.hash;
        e3.hasNameForId(n.id, o2) || e3.insertRules(n.id, o2, t2(n.rules, o2, "@keyframes"));
      }, this.name = e2, this.id = "sc-keyframes-".concat(e2), this.rules = t, ue(this, function() {
        throw he(12, String(n.name));
      });
    }
    return e.prototype.getName = function(e2) {
      return e2 === void 0 && (e2 = Fe), this.name + e2.hash;
    }, e;
  }();
  var Ye = function(e) {
    return e >= "A" && e <= "Z";
  };
  function We(e) {
    for (var t = "", n = 0; n < e.length; n++) {
      var o2 = e[n];
      if (n === 1 && o2 === "-" && e[0] === "-")
        return e;
      Ye(o2) ? t += "-" + o2.toLowerCase() : t += o2;
    }
    return t.startsWith("ms-") ? "-" + t : t;
  }
  var qe = function(e) {
    return e == null || e === false || e === "";
  };
  var He = function(t) {
    var n, o2, r2 = [];
    for (var s2 in t) {
      var i2 = t[s2];
      t.hasOwnProperty(s2) && !qe(i2) && (Array.isArray(i2) && i2.isCss || re(i2) ? r2.push("".concat(We(s2), ":"), i2, ";") : ce(i2) ? r2.push.apply(r2, __spreadArray(__spreadArray(["".concat(s2, " {")], He(i2), false), ["}"], false)) : r2.push("".concat(We(s2), ": ").concat((n = s2, (o2 = i2) == null || typeof o2 == "boolean" || o2 === "" ? "" : typeof o2 != "number" || o2 === 0 || n in import_unitless.default || n.startsWith("--") ? String(o2).trim() : "".concat(o2, "px")), ";")));
    }
    return r2;
  };
  function Ue(e, t, n, o2) {
    if (qe(e))
      return [];
    if (se(e))
      return [".".concat(e.styledComponentId)];
    if (re(e)) {
      if (!re(s2 = e) || s2.prototype && s2.prototype.isReactComponent || !t)
        return [e];
      var r2 = e(t);
      return typeof r2 != "object" || Array.isArray(r2) || r2 instanceof Ge || ce(r2) || r2 === null || console.error("".concat(B(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Ue(r2, t, n, o2);
    }
    var s2;
    return e instanceof Ge ? n ? (e.inject(n, o2), [e.getName(o2)]) : [e] : ce(e) ? He(e) : Array.isArray(e) ? Array.prototype.concat.apply(_, e.map(function(e2) {
      return Ue(e2, t, n, o2);
    })) : [e.toString()];
  }
  function Je(e) {
    for (var t = 0; t < e.length; t += 1) {
      var n = e[t];
      if (re(n) && !se(n))
        return false;
    }
    return true;
  }
  var Xe = $(v);
  var Ze = function() {
    function e(e2, t, n) {
      this.rules = e2, this.staticRulesId = "", this.isStatic = false, this.componentId = t, this.baseHash = M(Xe, t), this.baseStyle = n, Re.registerId(t);
    }
    return e.prototype.generateAndInjectStyles = function(e2, t, n) {
      var o2 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e2, t, n) : "";
      if (this.isStatic && !n.hash)
        if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId))
          o2 = ie(o2, this.staticRulesId);
        else {
          var r2 = ae(Ue(this.rules, e2, t, n)), s2 = x(M(this.baseHash, r2) >>> 0);
          if (!t.hasNameForId(this.componentId, s2)) {
            var i2 = n(r2, ".".concat(s2), void 0, this.componentId);
            t.insertRules(this.componentId, s2, i2);
          }
          o2 = ie(o2, s2), this.staticRulesId = s2;
        }
      else {
        for (var a2 = M(this.baseHash, n.hash), c2 = "", l2 = 0; l2 < this.rules.length; l2++) {
          var u2 = this.rules[l2];
          if (typeof u2 == "string")
            c2 += u2, a2 = M(a2, u2);
          else if (u2) {
            var p2 = ae(Ue(u2, e2, t, n));
            a2 = M(a2, p2 + l2), c2 += p2;
          }
        }
        if (c2) {
          var d2 = x(a2 >>> 0);
          t.hasNameForId(this.componentId, d2) || t.insertRules(this.componentId, d2, n(c2, ".".concat(d2), void 0, this.componentId)), o2 = ie(o2, d2);
        }
      }
      return o2;
    }, e;
  }();
  var Ke = import_react.default.createContext(void 0);
  var Qe = Ke.Consumer;
  var nt = {};
  var ot = new Set();
  function rt(e, r2, s2) {
    var i2 = se(e), a2 = e, c2 = !L(e), p2 = r2.attrs, d2 = p2 === void 0 ? _ : p2, h2 = r2.componentId, f2 = h2 === void 0 ? function(e2, t) {
      var n = typeof e2 != "string" ? "sc" : R(e2);
      nt[n] = (nt[n] || 0) + 1;
      var o2 = "".concat(n, "-").concat(z(v + n + nt[n]));
      return t ? "".concat(t, "-").concat(o2) : o2;
    }(r2.displayName, r2.parentComponentId) : h2, m2 = r2.displayName, y2 = m2 === void 0 ? function(e2) {
      return L(e2) ? "styled.".concat(e2) : "Styled(".concat(B(e2), ")");
    }(e) : m2, g2 = r2.displayName && r2.componentId ? "".concat(R(r2.displayName), "-").concat(r2.componentId) : r2.componentId || f2, S2 = i2 && a2.attrs ? a2.attrs.concat(d2).filter(Boolean) : d2, w2 = r2.shouldForwardProp;
    if (i2 && a2.shouldForwardProp) {
      var b = a2.shouldForwardProp;
      if (r2.shouldForwardProp) {
        var E2 = r2.shouldForwardProp;
        w2 = function(e2, t) {
          return b(e2, t) && E2(e2, t);
        };
      } else
        w2 = b;
    }
    var N2 = new Ze(s2, g2, i2 ? a2.componentStyle : void 0);
    function O2(e2, r3) {
      return function(e3, r4, s3) {
        var i3 = e3.attrs, a3 = e3.componentStyle, c3 = e3.defaultProps, p3 = e3.foldedComponentIds, d3 = e3.styledComponentId, h3 = e3.target, f3 = import_react.default.useContext(Ke), m3 = Be(), y3 = e3.shouldForwardProp || m3.shouldForwardProp;
        (0, import_react.useDebugValue)(d3);
        var v2 = I(r4, f3, c3) || C, g3 = function(e4, n, o2) {
          for (var r5, s4 = __assign(__assign({}, n), { className: void 0, theme: o2 }), i4 = 0; i4 < e4.length; i4 += 1) {
            var a4 = re(r5 = e4[i4]) ? r5(s4) : r5;
            for (var c4 in a4)
              s4[c4] = c4 === "className" ? ie(s4[c4], a4[c4]) : c4 === "style" ? __assign(__assign({}, s4[c4]), a4[c4]) : a4[c4];
          }
          return n.className && (s4.className = ie(s4.className, n.className)), s4;
        }(i3, r4, v2), S3 = g3.as || h3, w3 = {};
        for (var b2 in g3)
          g3[b2] === void 0 || b2[0] === "$" || b2 === "as" || b2 === "theme" && g3.theme === v2 || (b2 === "forwardedAs" ? w3.as = g3.forwardedAs : y3 && !y3(b2, S3) || (w3[b2] = g3[b2], y3 || false || (0, import_emotion_is_prop_valid_cjs_default._default)(b2) || ot.has(b2) || !A.has(S3) || (ot.add(b2), console.warn('styled-components: it looks like an unknown prop "'.concat(b2, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
        var E3 = function(e4, t) {
          var n = Be(), o2 = e4.generateAndInjectStyles(t, n.styleSheet, n.stylis);
          return (0, import_react.useDebugValue)(o2), o2;
        }(a3, g3);
        e3.warnTooManyClasses && e3.warnTooManyClasses(E3);
        var N3 = ie(p3, d3);
        return E3 && (N3 += " " + E3), g3.className && (N3 += " " + g3.className), w3[L(S3) && !A.has(S3) ? "class" : "className"] = N3, w3.ref = s3, (0, import_react.createElement)(S3, w3);
      }(D2, e2, r3);
    }
    O2.displayName = y2;
    var D2 = import_react.default.forwardRef(O2);
    return D2.attrs = S2, D2.componentStyle = N2, D2.displayName = y2, D2.shouldForwardProp = w2, D2.foldedComponentIds = i2 ? ie(a2.foldedComponentIds, a2.styledComponentId) : "", D2.styledComponentId = g2, D2.target = i2 ? a2.target : e, Object.defineProperty(D2, "defaultProps", { get: function() {
      return this._foldedDefaultProps;
    }, set: function(e2) {
      this._foldedDefaultProps = i2 ? function(e3) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        for (var o2 = 0, r3 = t; o2 < r3.length; o2++)
          le(e3, r3[o2], true);
        return e3;
      }({}, a2.defaultProps, e2) : e2;
    } }), P(y2, g2), D2.warnTooManyClasses = function(e2, t) {
      var n = {}, o2 = false;
      return function(r3) {
        if (!o2 && (n[r3] = true, Object.keys(n).length >= 200)) {
          var s3 = t ? ' with the id of "'.concat(t, '"') : "";
          console.warn("Over ".concat(200, " classes were generated for component ").concat(e2).concat(s3, ".\n") + "Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), o2 = true, n = {};
        }
      };
    }(y2, g2), ue(D2, function() {
      return ".".concat(D2.styledComponentId);
    }), c2 && oe(D2, e, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true }), D2;
  }
  function st(e, t) {
    for (var n = [e[0]], o2 = 0, r2 = t.length; o2 < r2; o2 += 1)
      n.push(t[o2], e[o2 + 1]);
    return n;
  }
  var it = function(e) {
    return Object.assign(e, { isCss: true });
  };
  function at(t) {
    for (var n = [], o2 = 1; o2 < arguments.length; o2++)
      n[o2 - 1] = arguments[o2];
    if (re(t) || ce(t))
      return it(Ue(st(_, __spreadArray([t], n, true))));
    var r2 = t;
    return n.length === 0 && r2.length === 1 && typeof r2[0] == "string" ? Ue(r2) : it(Ue(st(r2, n)));
  }
  function ct(n, o2, r2) {
    if (r2 === void 0 && (r2 = C), !o2)
      throw he(1, o2);
    var s2 = function(t) {
      for (var s3 = [], i2 = 1; i2 < arguments.length; i2++)
        s3[i2 - 1] = arguments[i2];
      return n(o2, r2, at.apply(void 0, __spreadArray([t], s3, false)));
    };
    return s2.attrs = function(e) {
      return ct(n, o2, __assign(__assign({}, r2), { attrs: Array.prototype.concat(r2.attrs, e).filter(Boolean) }));
    }, s2.withConfig = function(e) {
      return ct(n, o2, __assign(__assign({}, r2), e));
    }, s2;
  }
  var lt = function(e) {
    return ct(rt, e);
  };
  var ut = lt;
  A.forEach(function(e) {
    ut[e] = lt(e);
  });
  var pt = function() {
    function e(e2, t) {
      this.rules = e2, this.componentId = t, this.isStatic = Je(e2), Re.registerId(this.componentId + 1);
    }
    return e.prototype.createStyles = function(e2, t, n, o2) {
      var r2 = o2(ae(Ue(this.rules, t, n, o2)), ""), s2 = this.componentId + e2;
      n.insertRules(s2, s2, r2);
    }, e.prototype.removeStyles = function(e2, t) {
      t.clearRules(this.componentId + e2);
    }, e.prototype.renderStyles = function(e2, t, n, o2) {
      e2 > 2 && Re.registerId(this.componentId + e2), this.removeStyles(e2, n), this.createStyles(e2, t, n, o2);
    }, e;
  }();
  var mt = function() {
    function e() {
      var e2 = this;
      this._emitSheetCSS = function() {
        var t = e2.instance.toString(), n = Pe(), o2 = ae([n && 'nonce="'.concat(n, '"'), "".concat(f, '="true"'), "".concat(y, '="').concat(v, '"')].filter(Boolean), " ");
        return "<style ".concat(o2, ">").concat(t, "</style>");
      }, this.getStyleTags = function() {
        if (e2.sealed)
          throw he(2);
        return e2._emitSheetCSS();
      }, this.getStyleElement = function() {
        var n;
        if (e2.sealed)
          throw he(2);
        var r2 = ((n = {})[f] = "", n[y] = v, n.dangerouslySetInnerHTML = { __html: e2.instance.toString() }, n), s2 = Pe();
        return s2 && (r2.nonce = s2), [import_react.default.createElement("style", __assign({}, r2, { key: "sc-0-0" }))];
      }, this.seal = function() {
        e2.sealed = true;
      }, this.instance = new Re({ isServer: true }), this.sealed = false;
    }
    return e.prototype.collectStyles = function(e2) {
      if (this.sealed)
        throw he(2);
      return import_react.default.createElement(Le, { sheet: this.instance }, e2);
    }, e.prototype.interleaveWithNodeStream = function(e2) {
      throw he(3);
    }, e;
  }();
  typeof navigator != "undefined" && navigator.product === "ReactNative" && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");
  var vt = "__sc-".concat(f, "__");
  typeof window != "undefined" && (window[vt] || (window[vt] = 0), window[vt] === 1 && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window[vt] += 1);

  // src/rgd/common/screens/RgdL/sections/Adventiges/Adventiges.jsx
  var import_react7 = __toModule(require_react());

  // src/rgd/common/screens/RgdL/sections/Adventiges/sections/AdventigesGrid/AdventigesGrid.jsx
  var import_react6 = __toModule(require_react());

  // src/rgd/common/screens/RgdL/sections/Adventiges/sections/AdventigesGrid/sections/AdventigesComponent/AdventigesComponent.jsx
  var import_react2 = __toModule(require_react());
  var StyledAdventigesComponent = ut.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 10px;
  min-width: 45%;
  position: relative;

  & .image {
    height: 48.8px;
    margin-bottom: -2.25px;
    margin-top: -2.25px;
    position: relative;
    width: 50.13px;
  }

  & .view-2 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    width: 322px;
  }

  & .text-wrapper-20 {
    align-self: stretch;
    color: var(--variable-collection-BLACK);
    flex: 1;
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    margin-bottom: 10px
  }

  & .group {
    align-self: stretch;
    flex: 1;
    flex-grow: 1;
    margin-right: -4px;
    position: relative;
    width: 100%;
  }

  & .flexcontainer {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 303px;
  }

  & .text {
    align-self: stretch;
    color: #636363;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
    margin: 0;
    position: relative;
  }

  & .text-wrapper-21 {
    color: #636363;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
  }

  & .span-wrapper {
    align-self: stretch;
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-bottom: -44.34px;
    position: relative;
  }

  & .text-wrapper-22 {
    color: #000000;
    font-family: "Arial-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
  }

  & .text-2 {
    align-self: stretch;
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-bottom: -20.34px;
    position: relative;
  }
`;
  var AdventigesComponent = () => {
    return /* @__PURE__ */ import_react2.default.createElement(StyledAdventigesComponent, null, /* @__PURE__ */ import_react2.default.createElement("img", {
      className: "image",
      alt: "Image",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/7.png"
    }), /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "view-2"
    }, /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "text-wrapper-20"
    }, "\u041C\u0410\u0421\u0428\u0422\u0410\u0411"), /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "group"
    }, /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "flexcontainer"
    }, /* @__PURE__ */ import_react2.default.createElement("p", {
      className: "text"
    }, /* @__PURE__ */ import_react2.default.createElement("span", {
      className: "text-wrapper-21"
    }, /* @__PURE__ */ import_react2.default.createElement("span", {
      className: "text-wrapper-22"
    }, "\u25AA "), "\u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438")), /* @__PURE__ */ import_react2.default.createElement("p", {
      className: "text"
    }, /* @__PURE__ */ import_react2.default.createElement("span", {
      className: "text-wrapper-21"
    }, /* @__PURE__ */ import_react2.default.createElement("span", {
      className: "text-wrapper-22"
    }, "\u25AA "), "\u0437\u0430\u0434\u0430\u0447")), /* @__PURE__ */ import_react2.default.createElement("p", {
      className: "text"
    }, /* @__PURE__ */ import_react2.default.createElement("span", {
      className: "text-wrapper-21"
    }, /* @__PURE__ */ import_react2.default.createElement("span", {
      className: "text-wrapper-22"
    }, "\u25AA "), "\u0432\u043A\u043B\u0430\u0434\u0430 \u0432 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0443 \u0441\u0442\u0440\u0430\u043D\u044B"))))));
  };

  // src/rgd/common/screens/RgdL/sections/Adventiges/sections/AdventigesGrid/sections/AdventigesComponentWrapper/AdventigesComponentWrapper.jsx
  var import_react3 = __toModule(require_react());
  var StyledAdventigesComponentWrapper = ut.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 29px;
  min-width: 45%;
  position: relative;

  & .image-2 {
    height: 47.64px;
    margin-top: -2.25px;
    position: relative;
    width: 61.74px;
  }

  & .view-3 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 10px;
    position: relative;
  }

  & .text-wrapper-23 {
    color: var(--variable-collection-BLACK);
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    margin-top: -1px;
    position: relative;
    width: 299.83px;
  }

  & .group-2 {
    height: 90px;
    margin-right: -4px;
    position: relative;
    width: 326.29px;
  }

  & .flexcontainer {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 303px;
  }

  & .text-3 {
    align-self: stretch;
    color: #636363;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
    position: relative;
    margin: 0;
  }

  & .text-wrapper-24 {
    color: #636363;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
  }

  & .text-4 {
    align-self: stretch;
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
  }

  & .text-wrapper-25 {
    color: #000000;
    font-family: "Arial-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
  }
`;
  var AdventigesComponentWrapper = () => {
    return /* @__PURE__ */ import_react3.default.createElement(StyledAdventigesComponentWrapper, null, /* @__PURE__ */ import_react3.default.createElement("img", {
      className: "image-2",
      alt: "Image",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/5.svg"
    }), /* @__PURE__ */ import_react3.default.createElement("div", {
      className: "view-3"
    }, /* @__PURE__ */ import_react3.default.createElement("div", {
      className: "text-wrapper-23"
    }, "\u0422\u0415\u0425\u041D\u041E\u041B\u041E\u0413\u0418\u0427\u041D\u041E\u0421\u0422\u042C"), /* @__PURE__ */ import_react3.default.createElement("div", {
      className: "group-2"
    }, /* @__PURE__ */ import_react3.default.createElement("div", {
      className: "flexcontainer"
    }, /* @__PURE__ */ import_react3.default.createElement("p", {
      className: "text-3"
    }, /* @__PURE__ */ import_react3.default.createElement("span", {
      className: "text-wrapper-24"
    }, /* @__PURE__ */ import_react3.default.createElement("span", {
      className: "text-wrapper-25"
    }, "\u25AA "), " \u0432 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430\u0445 \u0438 \u0443\u0441\u043B\u0443\u0433\u0430\u0445")), /* @__PURE__ */ import_react3.default.createElement("p", {
      className: "text-3"
    }, /* @__PURE__ */ import_react3.default.createElement("span", {
      className: "text-wrapper-24"
    }, /* @__PURE__ */ import_react3.default.createElement("span", {
      className: "text-wrapper-25"
    }, "\u25AA "), " \u0432 \u0431\u0438\u0437\u043D\u0435\u0441-\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430\u0445")), /* @__PURE__ */ import_react3.default.createElement("p", {
      className: "text-3"
    }, /* @__PURE__ */ import_react3.default.createElement("span", {
      className: "text-wrapper-24"
    }, /* @__PURE__ */ import_react3.default.createElement("span", {
      className: "text-wrapper-25"
    }, "\u25AA "), " \u0432 \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0438"))))));
  };

  // src/rgd/common/screens/RgdL/sections/Adventiges/sections/AdventigesGrid/sections/Div/Div.jsx
  var import_react4 = __toModule(require_react());
  var StyledDiv = ut.div`
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-grow: 1;
  gap: 34px;
  min-width: 45%;
  position: relative;

  & .image-3 {
    height: 48px;
    margin-bottom: -1.69px;
    margin-top: -2.25px;
    position: relative;
    width: 56.53px;
  }

  & .view-4 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 10px;
    position: relative;
  }

  & .text-wrapper-26 {
    color: var(--variable-collection-BLACK);
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    margin-top: -1px;
    position: relative;
    width: 115.35px;
  }

  & .group-3 {
    width: 325px;
  }

  & .flexcontainer {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 302px;
  }

  & .text-5 {
    align-self: stretch;
    color: #636363;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
    position: relative;
    margin: 0;
  }

  & .text-wrapper-27 {
    color: #636363;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
  }

  & .text-6 {
    align-self: stretch;
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
  }

  & .text-wrapper-28 {
    color: #000000;
    font-family: "Arial-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
  }
`;
  var Div = () => {
    return /* @__PURE__ */ import_react4.default.createElement(StyledDiv, null, /* @__PURE__ */ import_react4.default.createElement("img", {
      className: "image-3",
      alt: "Image",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/3.svg"
    }), /* @__PURE__ */ import_react4.default.createElement("div", {
      className: "view-4"
    }, /* @__PURE__ */ import_react4.default.createElement("div", {
      className: "text-wrapper-26"
    }, "\u0417\u0410\u0411\u041E\u0422\u0410"), /* @__PURE__ */ import_react4.default.createElement("div", {
      className: "group-3"
    }, /* @__PURE__ */ import_react4.default.createElement("div", {
      className: "flexcontainer"
    }, /* @__PURE__ */ import_react4.default.createElement("p", {
      className: "text-5"
    }, /* @__PURE__ */ import_react4.default.createElement("span", {
      className: "text-wrapper-27"
    }, /* @__PURE__ */ import_react4.default.createElement("span", {
      className: "text-wrapper-28"
    }, "\u25AA "), "\u043E \u043B\u044E\u0434\u044F\u0445")), /* @__PURE__ */ import_react4.default.createElement("p", {
      className: "text-5"
    }, /* @__PURE__ */ import_react4.default.createElement("span", {
      className: "text-wrapper-27"
    }, /* @__PURE__ */ import_react4.default.createElement("span", {
      className: "text-wrapper-28"
    }, "\u25AA "), "\u043E\u0431 \u044D\u043A\u043E\u043B\u043E\u0433\u0438\u0438")), /* @__PURE__ */ import_react4.default.createElement("p", {
      className: "text-5"
    }, /* @__PURE__ */ import_react4.default.createElement("span", {
      className: "text-wrapper-27"
    }, " ", /* @__PURE__ */ import_react4.default.createElement("span", {
      className: "text-wrapper-28"
    }, "\u25AA "), "\u043E \u0431\u043B\u0430\u0433\u043E\u043F\u043E\u043B\u0443\u0447\u0438\u0438 (\u0437\u0434\u043E\u0440\u043E\u0432\u044C\u0435, \u0441\u0435\u043C\u044C\u044F, \u0434\u043E\u043C, \u043E\u0442\u0434\u044B\u0445, \u0441\u043F\u043E\u0440\u0442)"))))));
  };

  // src/rgd/common/screens/RgdL/sections/Adventiges/sections/AdventigesGrid/sections/SectionComponentNode/SectionComponentNode.jsx
  var import_react5 = __toModule(require_react());
  var StyledSectionComponentNode = ut.div`
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-grow: 1;
  gap: 10px;
  min-width: 45%;
  position: relative;

  & .image-4 {
    height: 45px;
    margin-bottom: -1.68px;
    margin-left: -1.5px;
    margin-top: -2.25px;
    position: relative;
    width: 49.76px;
  }

  & .view-5 {
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    gap: 12px;
    left: 89px;
    position: absolute;
    top: 0;
  }

  & .text-wrapper-29 {
    color: var(--variable-collection-BLACK);
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    margin-top: -1px;
    position: relative;
    width: 244.8px;
  }

  & .group-4 {
    height: 90px;
    margin-right: -4px;
    position: relative;
    width: 326.29px;
  }

  & .flexcontainer {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    left: 19px;
    top: 0;
    width: 303px;
  }

  & .text-7 {
    align-self: stretch;
    color: #636363;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
    position: relative;
    margin: 0;
  }

  & .text-wrapper-30 {
    color: #636363;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
  }


  & .text-8 {
    align-self: stretch;
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
  }

  & .text-wrapper-31 {
    color: #000000;
    font-family: "Arial-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0;
  }
`;
  var SectionComponentNode = () => {
    return /* @__PURE__ */ import_react5.default.createElement(StyledSectionComponentNode, null, /* @__PURE__ */ import_react5.default.createElement("img", {
      className: "image-4",
      alt: "Image",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/1.png"
    }), /* @__PURE__ */ import_react5.default.createElement("div", {
      className: "view-5"
    }, /* @__PURE__ */ import_react5.default.createElement("div", {
      className: "text-wrapper-29"
    }, "\u0412\u041E\u0417\u041C\u041E\u0416\u041D\u041E\u0421\u0422\u0418"), /* @__PURE__ */ import_react5.default.createElement("div", {
      className: "group-4"
    }, /* @__PURE__ */ import_react5.default.createElement("div", {
      className: "flexcontainer"
    }, /* @__PURE__ */ import_react5.default.createElement("p", {
      className: "text-7"
    }, /* @__PURE__ */ import_react5.default.createElement("span", {
      className: "text-wrapper-30"
    }, /* @__PURE__ */ import_react5.default.createElement("span", {
      className: "text-wrapper-31"
    }, "\u25AA "), " \u0441\u0430\u043C\u043E\u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438")), /* @__PURE__ */ import_react5.default.createElement("p", {
      className: "text-7"
    }, /* @__PURE__ */ import_react5.default.createElement("span", {
      className: "text-wrapper-30"
    }, /* @__PURE__ */ import_react5.default.createElement("span", {
      className: "text-wrapper-31"
    }, "\u25AA "), " \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0438 \u043A\u0430\u0440\u044C\u0435\u0440\u044B")), /* @__PURE__ */ import_react5.default.createElement("p", {
      className: "text-7"
    }, /* @__PURE__ */ import_react5.default.createElement("span", {
      className: "text-wrapper-30"
    }, /* @__PURE__ */ import_react5.default.createElement("span", {
      className: "text-wrapper-31"
    }, "\u25AA "), " \u0443\u0447\u0430\u0441\u0442\u0438\u044F \u0432 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F\u0445"))))));
  };

  // src/rgd/common/screens/RgdL/sections/Adventiges/sections/AdventigesGrid/AdventigesGrid.jsx
  var StyledAdventigesGrid = ut.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 125px 70px;
  position: relative;
  width: 100%;
`;
  var AdventigesGrid = () => {
    return /* @__PURE__ */ import_react6.default.createElement(StyledAdventigesGrid, null, /* @__PURE__ */ import_react6.default.createElement(AdventigesComponent, null), /* @__PURE__ */ import_react6.default.createElement(AdventigesComponentWrapper, null), /* @__PURE__ */ import_react6.default.createElement(Div, null), /* @__PURE__ */ import_react6.default.createElement(SectionComponentNode, null));
  };

  // src/rgd/common/screens/RgdL/sections/Adventiges/Adventiges.jsx
  var StyledAdventiges = ut.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 41px;
  max-width: 947px;
  position: relative;
  width: 100%;

  & .text-wrapper-44 {
    align-self: stretch;
    color: var(--variable-collection-BLACK);
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 50px;
    font-weight: 400;
    letter-spacing: 2.5px;
    line-height: 48.5px;
    margin-top: -1px;
    position: relative;
    margin: 0;
  }

  & .text-wrapper-45 {
    align-self: stretch;
    color: var(--variable-collection-BLACK);
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
    position: relative;
  }
`;
  var Adventiges = () => {
    return /* @__PURE__ */ import_react7.default.createElement(StyledAdventiges, null, /* @__PURE__ */ import_react7.default.createElement("p", {
      className: "text-wrapper-44"
    }, "/ \u041F\u0420\u0415\u0418\u041C\u0423\u0429\u0415\u0421\u0422\u0412\u0410 \u0420\u0410\u0411\u041E\u0422\u042B \u0412 \u0420\u0416\u0414"), /* @__PURE__ */ import_react7.default.createElement("p", {
      className: "text-wrapper-45"
    }, "\u041A\u0430\u0436\u0434\u043E\u043C\u0443 \u043D\u0430\u0448\u0435\u043C\u0443 \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u0443 \u043C\u044B \u0441\u0442\u0440\u0435\u043C\u0438\u043C\u0441\u044F \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0442\u044C \u0431\u043B\u0430\u0433\u043E\u043F\u0440\u0438\u044F\u0442\u043D\u0443\u044E \u0438 \u043C\u043E\u0442\u0438\u0432\u0438\u0440\u0443\u044E\u0449\u0443\u044E \u0441\u0440\u0435\u0434\u0443, \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u043A\u0430\u0436\u0434\u044B\u043C \u0438\u0437 \u043D\u0438\u0445 \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E \u0438\u0434\u0435\u043C \u0432\u043F\u0435\u0440\u0435\u0434 \u0438 \u0441\u0442\u0440\u043E\u0438\u043C \u0431\u0443\u0434\u0443\u0449\u0435\u0435 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0445 \u0436\u0435\u043B\u0435\u0437\u043D\u044B\u0445 \u0434\u043E\u0440\u043E\u0433."), /* @__PURE__ */ import_react7.default.createElement(AdventigesGrid, null));
  };

  // src/rgd/common/screens/RgdL/sections/Begin/Begin.jsx
  var import_react20 = __toModule(require_react());

  // src/rgd/common/components/AboutCompany/AboutCompany.jsx
  var import_react8 = __toModule(require_react());
  var StyledAboutCompany = ut.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 497px;
  position: relative;

  & .overlap-group-wrapper {
    align-self: stretch;
    flex: 1;
    flex-grow: 1;
    position: relative;
    width: 100%;
  }

  & .overlap {
    height: 497px;
    position: relative;
    width: 1250px;
  }

  & .background {
    height: 497px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1250px;
  }

  & .overlap-group-2 {
    height: 497px;
    position: relative;
  }

  & .img-2 {
    height: 414px;
    left: 0;
    position: absolute;
    top: 83px;
    width: 1250px;
  }

  & .img-3 {
    height: 448px;
    left: 0;
    position: absolute;
    top: 49px;
    width: 1250px;
  }

  & .img-4 {
    height: 497px;
    left: 0;
    mix-blend-mode: multiply;
    position: absolute;
    top: 0;
    width: 1250px;
  }

  & .digital {
    height: 395px;
    left: 573px;
    position: absolute;
    top: 50px;
    width: 511px;
  }

  & .element-2 {
    height: 77px;
    left: 0;
    position: absolute;
    top: 317px;
    width: 215px;
  }

  & .text-wrapper-4 {
    color: #ffffff;
    font-family: "Arial-Regular", Helvetica;
    font-size: 25px;
    font-weight: 400;
    left: 0;
    letter-spacing: 1.25px;
    line-height: 24.2px;
    position: absolute;
    top: 53px;
    white-space: nowrap;
  }

  & .element-3 {
    height: 43px;
    left: 5px;
    position: absolute;
    top: 0;
    width: 60px;
  }

  & .element-4 {
    height: 78px;
    left: 75px;
    position: absolute;
    top: 213px;
    width: 263px;
  }

  & .text-wrapper-5 {
    color: #ffffff;
    font-family: "Arial-Regular", Helvetica;
    font-size: 25px;
    font-weight: 400;
    left: 0;
    letter-spacing: 1.25px;
    line-height: 24.2px;
    position: absolute;
    top: 54px;
    white-space: nowrap;
  }

  & .element-5 {
    height: 45px;
    left: 7px;
    position: absolute;
    top: 0;
    width: 97px;
  }

  & .element-6 {
    height: 78px;
    left: 152px;
    position: absolute;
    top: 110px;
    width: 155px;
  }

  & .element-7 {
    height: 44px;
    left: 7px;
    position: absolute;
    top: 0;
    width: 146px;
  }

  & .element-8 {
    height: 78px;
    left: 231px;
    position: absolute;
    top: 7px;
    width: 278px;
  }

  & .element-9 {
    height: 44px;
    left: 7px;
    position: absolute;
    top: 0;
    width: 269px;
  }

  & .texts {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 12px;
    left: 43px;
    position: absolute;
    top: 0;
    width: 510px;
  }

  & .text-wrapper-6 {
    color: #000000;
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 50px;
    font-weight: 400;
    height: 148px;
    letter-spacing: 2.5px;
    line-height: 48.5px;
    margin-right: -0.2px;
    margin-top: -1px;
    position: relative;
    width: 510px;
  }

  & .p {
    color: transparent;
    font-family: "Arial-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    width: 272px;
  }

  & .span {
    color: #000000;
  }

  & .text-wrapper-7 {
    color: #999999;
  }
`;
  var AboutCompany = ({ className }) => {
    return /* @__PURE__ */ import_react8.default.createElement(StyledAboutCompany, {
      className: `about-company ${className}`
    }, /* @__PURE__ */ import_react8.default.createElement("div", {
      className: "overlap-group-wrapper"
    }, /* @__PURE__ */ import_react8.default.createElement("div", {
      className: "overlap"
    }, /* @__PURE__ */ import_react8.default.createElement("div", {
      className: "background"
    }, /* @__PURE__ */ import_react8.default.createElement("div", {
      className: "overlap-group-2"
    }, /* @__PURE__ */ import_react8.default.createElement("img", {
      className: "img-2",
      alt: "Img",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/2.svg"
    }), /* @__PURE__ */ import_react8.default.createElement("img", {
      className: "img-3",
      alt: "Img",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/5-2.svg"
    }), /* @__PURE__ */ import_react8.default.createElement("img", {
      className: "img-4",
      alt: "Img",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/image-7.svg"
    }))), /* @__PURE__ */ import_react8.default.createElement("div", {
      className: "digital"
    }, /* @__PURE__ */ import_react8.default.createElement("div", {
      className: "element-2"
    }, /* @__PURE__ */ import_react8.default.createElement("div", {
      className: "text-wrapper-4"
    }, "\u0440\u0435\u0433\u0438\u043E\u043D\u043E\u0432 \u0420\u043E\u0441\u0441\u0438\u0438"), /* @__PURE__ */ import_react8.default.createElement("img", {
      className: "element-3",
      alt: "Element",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/77.svg"
    })), /* @__PURE__ */ import_react8.default.createElement("div", {
      className: "element-4"
    }, /* @__PURE__ */ import_react8.default.createElement("div", {
      className: "text-wrapper-5"
    }, "\u043B\u0435\u0442 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0438 \u043E\u043F\u044B\u0442\u0430"), /* @__PURE__ */ import_react8.default.createElement("img", {
      className: "element-5",
      alt: "Element",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/185.svg"
    })), /* @__PURE__ */ import_react8.default.createElement("div", {
      className: "element-6"
    }, /* @__PURE__ */ import_react8.default.createElement("div", {
      className: "text-wrapper-5"
    }, "\u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0439"), /* @__PURE__ */ import_react8.default.createElement("img", {
      className: "element-7",
      alt: "Element",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/1-000.svg"
    })), /* @__PURE__ */ import_react8.default.createElement("div", {
      className: "element-8"
    }, /* @__PURE__ */ import_react8.default.createElement("div", {
      className: "text-wrapper-5"
    }, "\u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u043E\u0432"), /* @__PURE__ */ import_react8.default.createElement("img", {
      className: "element-9",
      alt: "Element",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/1-000-000.svg"
    }))))), /* @__PURE__ */ import_react8.default.createElement("div", {
      className: "texts"
    }, /* @__PURE__ */ import_react8.default.createElement("div", {
      className: "text-wrapper-6"
    }, "/ \u0420\u041E\u0421\u0421\u0418\u0419\u0421\u041A\u0418\u0415 \u0416\u0415\u041B\u0415\u0417\u041D\u042B\u0415 \u0414\u041E\u0420\u041E\u0413\u0418"), /* @__PURE__ */ import_react8.default.createElement("p", {
      className: "p"
    }, /* @__PURE__ */ import_react8.default.createElement("span", {
      className: "span"
    }, "\u041D\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043B\u0438\u0434\u0435\u0440 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0439 \u043E\u0442\u0440\u0430\u0441\u043B\u0438 \u0438 \u043E\u0434\u0438\u043D \u0438\u0437 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u0440\u0430\u0431\u043E\u0442\u043E\u0434\u0430\u0442\u0435\u043B\u0435\u0439 \u0441\u0442\u0440\u0430\u043D\u044B."), /* @__PURE__ */ import_react8.default.createElement("span", {
      className: "text-wrapper-7"
    }, "2"))));
  };

  // src/rgd/common/components/Component1820/Component1820.jsx
  var import_prop_types = __toModule(require_prop_types());
  var import_react9 = __toModule(require_react());
  var StyledComponent1820 = ut.img`
  height: 558px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1250px;
`;
  var Component1820 = ({
    prop,
    img = "https://psb-eta.vercel.app/rgd/desktop/img/image-3.svg",
    className,
    img1 = "https://psb-eta.vercel.app/rgd/desktop/img/image.svg",
    img2 = "https://psb-eta.vercel.app/rgd/desktop/img/1.svg",
    ITDigital = "https://psb-eta.vercel.app/rgd/desktop/img/it-digital.svg",
    img3 = "https://psb-eta.vercel.app/rgd/desktop/img/image-2.svg"
  }) => {
    return /* @__PURE__ */ import_react9.default.createElement(StyledComponent1820, {
      className: `component-1820 ${className}`,
      alt: "Img",
      src: prop === "two" ? img1 : prop === "three" ? img2 : prop === "IT-digital" ? ITDigital : prop === "four" ? img3 : img
    });
  };
  Component1820.propTypes = {
    prop: import_prop_types.default.oneOf(["IT-digital", "two", "three", "four", "one"]),
    img: import_prop_types.default.string,
    img1: import_prop_types.default.string,
    img2: import_prop_types.default.string,
    ITDigital: import_prop_types.default.string,
    img3: import_prop_types.default.string
  };

  // src/rgd/common/components/DivWrapper/DivWrapper.jsx
  var import_prop_types2 = __toModule(require_prop_types());
  var import_react10 = __toModule(require_react());
  var StyledDivWrapper = ut.div`
  height: 57px;
  position: relative;
  width: 326px;

  & .text-wrapper-3 {
    color: #000000;
    font-family: "Arial-Regular", Helvetica;
    font-size: 24px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: -1px;
    width: 326px;
  }
`;
  var DivWrapper = ({ prop, className }) => {
    return /* @__PURE__ */ import_react10.default.createElement(StyledDivWrapper, {
      className: `div-wrapper ${className}`
    }, /* @__PURE__ */ import_react10.default.createElement("div", {
      className: "text-wrapper-3"
    }, "\u0415\u0441\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0430", /* @__PURE__ */ import_react10.default.createElement("br", null), "\u043F\u043E \u0432\u0441\u0435\u0439 \u0441\u0442\u0440\u0430\u043D\u0435"));
  };
  DivWrapper.propTypes = {
    prop: import_prop_types2.default.oneOf(["one"])
  };

  // src/rgd/common/components/ElementWrapper/ElementWrapper.jsx
  var import_prop_types3 = __toModule(require_prop_types());
  var import_react11 = __toModule(require_react());
  var import_react12 = __toModule(require_react());
  var StyledElementWrapper = ut.div`
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
  var ElementWrapper = ({ prop, className }) => {
    const [state, dispatch] = (0, import_react12.useReducer)(reducer, {
      prop: prop || "one"
    });
    return /* @__PURE__ */ import_react11.default.createElement(StyledElementWrapper, {
      className: `element-wrapper ${className}`,
      onMouseLeave: () => {
        dispatch("mouse_leave");
      },
      onMouseEnter: () => {
        dispatch("mouse_enter");
      }
    }, /* @__PURE__ */ import_react11.default.createElement("div", {
      className: `text-wrapper-2 prop-1-${state.prop}`
    }, "\u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438"), /* @__PURE__ */ import_react11.default.createElement("img", {
      className: "vector",
      alt: "Vector",
      src: state.prop === "two" ? "https://psb-eta.vercel.app/rgd/desktop/img/vector-28.svg" : "https://psb-eta.vercel.app/rgd/desktop/img/vector-29.svg"
    }));
  };
  function reducer(state, action) {
    switch (action) {
      case "mouse_enter":
        return __spreadProps(__spreadValues({}, state), {
          prop: "two"
        });
      case "mouse_leave":
        return __spreadProps(__spreadValues({}, state), {
          prop: "one"
        });
    }
    return state;
  }
  ElementWrapper.propTypes = {
    prop: import_prop_types3.default.oneOf(["two", "one"])
  };

  // src/rgd/common/components/Raiting/Raiting.jsx
  var import_react15 = __toModule(require_react());

  // src/rgd/common/icons/Nine/Nine.jsx
  var import_react13 = __toModule(require_react());
  var StyledNine = ut.svg`
  .nine {
    fill: none;
    height: 28px;
    width: 202px;
  }

  .g .rect {
    fill: #e6e6e6;
    height: 27.6377px;
    transform: matrix(-1, 0, 0, 1, 209.648px, 0.15625px);
    width: 208.763px;
  }

  .g .path {
    clip-rule: evenodd;
    fill-rule: evenodd;
  }

  .g .path.path {
    fill: #f0f0f0;
  }

  .g .path.path.path {
    fill: white;
  }

  .g .path.path.path.path {
    fill: #e21a1a;
  }

  .g .path.path.path.path.path {
    fill: #e6e6e6;
  }
`;

  // src/rgd/common/icons/Five/Five.jsx
  var import_react14 = __toModule(require_react());
  var StyledFive = ut.svg`
  max-width: 100%;
`;
  var Five = ({}) => {
    return /* @__PURE__ */ import_react14.default.createElement(StyledFive, {
      className: "svg",
      width: "291",
      height: "55",
      viewBox: "0 0 291 55",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ import_react14.default.createElement("g", {
      clipPath: "url(#clip0_383_45089)"
    }, /* @__PURE__ */ import_react14.default.createElement("rect", {
      width: "270",
      height: "37",
      transform: "matrix(-1 0 0 1 281 10.9199)",
      fill: "#E6E6E6"
    }), /* @__PURE__ */ import_react14.default.createElement("g", {
      filter: "url(#filter0_f_383_45089)"
    }, /* @__PURE__ */ import_react14.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M339.317 116.309C353.485 95.9118 383.457 87.7241 389.949 63.7629C396.8 38.4719 387.372 10.9737 373.902 -11.352C359.879 -34.5919 340.359 -60.372 313.371 -63.151C286.001 -65.9694 268.2 -32.7123 241.728 -24.9623C218.961 -18.2971 188.015 -39.5834 172.185 -21.8179C155.896 -3.53704 180.611 26.1579 174.956 49.974C169.368 73.5136 138.437 88.0839 140.377 112.159C142.295 135.947 164.848 152.904 184.348 166.469C203.121 179.528 225.44 185.806 248.295 187.233C270.659 188.629 295.268 188.339 313.025 174.503C330.147 161.162 326.922 134.153 339.317 116.309Z",
      fill: "#F0F0F0"
    })), /* @__PURE__ */ import_react14.default.createElement("g", {
      filter: "url(#filter1_f_383_45089)"
    }, /* @__PURE__ */ import_react14.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M132.022 76.7786C133.63 62.3993 118.371 52.3466 112.434 39.2039C109.121 31.8713 107.031 24.537 104.912 16.7666C101.385 3.83841 105.191 -12.0123 95.8559 -21.5746C86.152 -31.5145 70.1491 -35.8935 56.5846 -32.7356C43.0853 -29.5929 35.686 -15.5797 26.2475 -5.36931C17.4214 4.17859 6.30643 12.4722 3.13926 25.0806C-0.0352164 37.7181 1.0258 52.7005 9.11664 62.828C16.941 72.6218 33.6718 68.0937 43.6021 75.7286C53.3311 83.2088 53.4903 99.5574 64.3411 105.288C76.5073 111.712 92.0072 113.377 104.739 108.014C117.715 102.549 130.456 90.79 132.022 76.7786Z",
      fill: "white"
    })), /* @__PURE__ */ import_react14.default.createElement("g", {
      filter: "url(#filter2_f_383_45089)"
    }, /* @__PURE__ */ import_react14.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M185.366 -88.5689C215.419 -127.693 302.147 -129.106 299.144 -178.233C296.114 -227.8 218.119 -229.334 175.262 -253.864C151.125 -267.679 126.174 -276.482 102.37 -290.862C72.3513 -308.996 52.4455 -352.06 17.398 -349.226C-16.8047 -346.461 -30.485 -302.545 -54.8588 -278.15C-78.5559 -254.432 -112.18 -239.244 -123.888 -207.816C-136.078 -175.098 -129.902 -138.591 -119.172 -105.521C-108.328 -72.0994 -90.3724 -40.7617 -62.7162 -19.2856C-35.1672 2.10711 0.0597847 7.27011 34.3665 13.7073C72.0091 20.7704 114.954 41.6358 146.844 20.0355C179.263 -1.92241 161.48 -57.4735 185.366 -88.5689Z",
      fill: "#E21A1A"
    })), /* @__PURE__ */ import_react14.default.createElement("g", {
      filter: "url(#filter3_f_383_45089)"
    }, /* @__PURE__ */ import_react14.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20.9169 79.1403C37.1052 61.0969 35.5715 31.8376 29.3433 8.34147C23.6074 -13.298 0.497779 -24.4781 -11.5611 -43.3862C-24.6073 -63.8422 -20.9905 -99.3156 -44.0938 -106.806C-67.7498 -114.475 -85.5581 -80.9457 -109.687 -75.199C-132.029 -69.8776 -162.512 -92.5809 -177.284 -75.0839C-192.754 -56.7605 -162.603 -28.067 -168.995 -4.94966C-175.78 19.5886 -212.37 29.8351 -213.336 55.2996C-214.281 80.1841 -197.248 108.852 -173.627 117.088C-148.789 125.748 -125.694 99.2359 -99.8124 94.8822C-82.9401 92.044 -66.4565 98.4178 -49.4871 96.2052C-25.0315 93.0164 4.50533 97.4325 20.9169 79.1403Z",
      fill: "#E6E6E6"
    })), /* @__PURE__ */ import_react14.default.createElement("g", {
      filter: "url(#filter4_f_383_45089)"
    }, /* @__PURE__ */ import_react14.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M205.426 108.583C216.42 94.2725 248.156 93.7628 247.053 75.7904C245.94 57.6569 217.399 57.0893 201.715 48.1115C192.881 43.0555 183.75 39.833 175.038 34.5704C164.052 27.934 156.764 12.1779 143.939 13.2116C131.424 14.2203 126.421 30.2851 117.504 39.2075C108.835 47.8822 96.5323 53.4354 92.2505 64.9317C87.7928 76.9 90.0557 90.2561 93.9849 102.355C97.956 114.583 104.529 126.048 114.651 133.907C124.734 141.736 137.625 143.628 150.18 145.985C163.955 148.573 179.671 156.209 191.339 148.31C203.2 140.28 196.688 119.956 205.426 108.583Z",
      fill: "#E21A1A"
    }))), /* @__PURE__ */ import_react14.default.createElement("g", {
      clipPath: "url(#clip1_383_45089)"
    }, /* @__PURE__ */ import_react14.default.createElement("path", {
      d: "M256.858 19.6839L255.286 35.3161H259.411L260.913 19.6839H256.858ZM256.858 19.6839L255.286 35.3161H259.411L260.913 19.6839H256.858ZM256.858 19.6839L255.286 35.3161H259.411L260.913 19.6839H256.858ZM256.858 19.6839L255.286 35.3161H259.411L260.913 19.6839H256.858ZM256.858 19.6839L255.286 35.3161H259.411L260.913 19.6839H256.858ZM256.858 19.6839L255.286 35.3161H259.411L260.913 19.6839H256.858ZM256.858 19.6839L255.286 35.3161H259.411L260.913 19.6839H256.858ZM256.858 19.6839L255.286 35.3161H259.411L260.913 19.6839H256.858ZM256.858 19.6839L255.286 35.3161H259.411L260.913 19.6839H256.858ZM256.858 19.6839L255.286 35.3161H259.411L260.913 19.6839H256.858ZM5.48677 0L0 55H285.994L291 0H5.48677ZM52.3448 26.9205L37.8068 35.3161H51.4837L50.6226 44.2862H11.6945L12.6056 35.3161L34.8531 23.7557L35.2836 19.7242H31.2286L30.8882 23.0804H13.8671L15.0987 10.7541H54.0369L52.3448 26.9205ZM98.0814 44.2762L99.0826 33.8244L93.6058 44.2762H86.2267L82.4119 34.1974L81.4107 44.2762H63.9792L67.2732 10.7138H84.7148L91.5132 28.9866L101.385 10.7138H118.767L115.473 44.2762H98.0814ZM156.383 23.7557L155.633 31.2342H136.769L136.379 35.2657H155.252L154.381 44.2762H118.807L122.141 10.7138H157.725L156.824 19.6839H137.911L137.53 23.7154L156.383 23.7557ZM197.785 25.2675H180.353L180.924 19.704H176.829L175.327 35.3363H179.332L179.953 29.3898H197.434L195.432 44.2762H157.725L161.059 10.7037H199.216L197.785 25.2675ZM229.404 19.704L226.991 44.2762H205.885L208.318 19.6738H201.659L202.561 10.7037H237.003L236.122 19.6738L229.404 19.704ZM275.981 44.2762H269.974H236.993L240.327 10.7037H279.245L275.981 44.2762ZM260.913 19.6839H256.908L255.336 35.3161H259.461L260.913 19.6839ZM256.908 19.6839L255.336 35.3161H259.461L260.963 19.6839H256.908ZM256.908 19.6839L255.336 35.3161H259.461L260.963 19.6839H256.908ZM256.908 19.6839L255.336 35.3161H259.461L260.963 19.6839H256.908ZM256.908 19.6839L255.336 35.3161H259.461L260.963 19.6839H256.908ZM256.908 19.6839L255.336 35.3161H259.461L260.963 19.6839H256.908ZM256.908 19.6839L255.336 35.3161H259.461L260.963 19.6839H256.908ZM256.908 19.6839L255.336 35.3161H259.461L260.963 19.6839H256.908ZM256.908 19.6839L255.336 35.3161H259.461L260.963 19.6839H256.908ZM256.908 19.6839L255.336 35.3161H259.461L260.963 19.6839H256.908ZM256.908 19.6839L255.336 35.3161H259.461L260.963 19.6839H256.908Z",
      fill: "white"
    })), /* @__PURE__ */ import_react14.default.createElement("defs", null, /* @__PURE__ */ import_react14.default.createElement("filter", {
      id: "filter0_f_383_45089",
      x: "40.29",
      y: "-163.32",
      width: "451.951",
      height: "451.104",
      filterUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB"
    }, /* @__PURE__ */ import_react14.default.createElement("feFlood", {
      floodOpacity: "0",
      result: "BackgroundImageFix"
    }), /* @__PURE__ */ import_react14.default.createElement("feBlend", {
      mode: "normal",
      in: "SourceGraphic",
      in2: "BackgroundImageFix",
      result: "shape"
    }), /* @__PURE__ */ import_react14.default.createElement("feGaussianBlur", {
      stdDeviation: "50",
      result: "effect1_foregroundBlur_383_45089"
    })), /* @__PURE__ */ import_react14.default.createElement("filter", {
      id: "filter1_f_383_45089",
      x: "-98.5205",
      y: "-133.747",
      width: "330.661",
      height: "344.97",
      filterUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB"
    }, /* @__PURE__ */ import_react14.default.createElement("feFlood", {
      floodOpacity: "0",
      result: "BackgroundImageFix"
    }), /* @__PURE__ */ import_react14.default.createElement("feBlend", {
      mode: "normal",
      in: "SourceGraphic",
      in2: "BackgroundImageFix",
      result: "shape"
    }), /* @__PURE__ */ import_react14.default.createElement("feGaussianBlur", {
      stdDeviation: "50",
      result: "effect1_foregroundBlur_383_45089"
    })), /* @__PURE__ */ import_react14.default.createElement("filter", {
      id: "filter2_f_383_45089",
      x: "-230.59",
      y: "-449.359",
      width: "629.81",
      height: "578.931",
      filterUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB"
    }, /* @__PURE__ */ import_react14.default.createElement("feFlood", {
      floodOpacity: "0",
      result: "BackgroundImageFix"
    }), /* @__PURE__ */ import_react14.default.createElement("feBlend", {
      mode: "normal",
      in: "SourceGraphic",
      in2: "BackgroundImageFix",
      result: "shape"
    }), /* @__PURE__ */ import_react14.default.createElement("feGaussianBlur", {
      stdDeviation: "50",
      result: "effect1_foregroundBlur_383_45089"
    })), /* @__PURE__ */ import_react14.default.createElement("filter", {
      id: "filter3_f_383_45089",
      x: "-313.374",
      y: "-207.939",
      width: "447.115",
      height: "426.754",
      filterUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB"
    }, /* @__PURE__ */ import_react14.default.createElement("feFlood", {
      floodOpacity: "0",
      result: "BackgroundImageFix"
    }), /* @__PURE__ */ import_react14.default.createElement("feBlend", {
      mode: "normal",
      in: "SourceGraphic",
      in2: "BackgroundImageFix",
      result: "shape"
    }), /* @__PURE__ */ import_react14.default.createElement("feGaussianBlur", {
      stdDeviation: "50",
      result: "effect1_foregroundBlur_383_45089"
    })), /* @__PURE__ */ import_react14.default.createElement("filter", {
      id: "filter4_f_383_45089",
      x: "-10.1982",
      y: "-86.8369",
      width: "357.279",
      height: "338.633",
      filterUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB"
    }, /* @__PURE__ */ import_react14.default.createElement("feFlood", {
      floodOpacity: "0",
      result: "BackgroundImageFix"
    }), /* @__PURE__ */ import_react14.default.createElement("feBlend", {
      mode: "normal",
      in: "SourceGraphic",
      in2: "BackgroundImageFix",
      result: "shape"
    }), /* @__PURE__ */ import_react14.default.createElement("feGaussianBlur", {
      stdDeviation: "50",
      result: "effect1_foregroundBlur_383_45089"
    })), /* @__PURE__ */ import_react14.default.createElement("clipPath", {
      id: "clip0_383_45089"
    }, /* @__PURE__ */ import_react14.default.createElement("rect", {
      width: "270",
      height: "37",
      fill: "white",
      transform: "matrix(-1 0 0 1 281 10.9199)"
    })), /* @__PURE__ */ import_react14.default.createElement("clipPath", {
      id: "clip1_383_45089"
    }, /* @__PURE__ */ import_react14.default.createElement("rect", {
      width: "291",
      height: "55",
      fill: "white"
    }))));
  };

  // src/rgd/common/components/Raiting/Raiting.jsx
  var StyledRaiting = ut.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 225px;
  position: relative;
  width: 225px;

  & .frame {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 6px;
    height: 79.08px;
    position: relative;
    width: 209.24px;
  }

  & .title {
    align-self: stretch;
    flex: 1;
    flex-grow: 1;
    position: relative;
    width: 100%;
  }

  & .overlap-group {
    height: 41px;
    position: relative;
    width: 209px;
  }

  & .img {
    height: 41px;
    left: 0;
    position: absolute;
    top: 0;
    width: 209px;
  }

  & .element {
    align-self: stretch;
    height: 32px;
    position: relative;
    width: 100%;
  }

  & .instance-9 {
    height: 28px !important;
    left: 9px !important;
    position: absolute !important;
    top: 8px !important;
    width: 201px !important;
  }
`;
  var Raiting = ({ className }) => {
    return /* @__PURE__ */ import_react15.default.createElement(StyledRaiting, {
      className: `raiting ${className}`
    }, /* @__PURE__ */ import_react15.default.createElement("div", {
      className: "frame"
    }, /* @__PURE__ */ import_react15.default.createElement("div", {
      className: "title"
    }, /* @__PURE__ */ import_react15.default.createElement(Five, null)), /* @__PURE__ */ import_react15.default.createElement("img", {
      className: "element",
      alt: "Element",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/1-1.svg"
    })));
  };

  // src/rgd/common/components/TeamRzdRu/TeamRzdRu.jsx
  var import_prop_types4 = __toModule(require_prop_types());
  var import_react16 = __toModule(require_react());
  var import_react17 = __toModule(require_react());
  var StyledTeamRzdRu = ut.a`
  background-size: 100% 100%;
  height: 40px;
  position: relative;
  width: 178px;

  & .text-wrapper {
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

  &.prop-two {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-26.svg);
  }

  &.prop-one {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-27.svg);
  }

  &.prop-two .text-wrapper {
    color: var(--variable-collection-BLACK);
  }

  &.prop-one .text-wrapper {
    color: var(--variable-collection-WHITE);
  }
`;
  var TeamRzdRu = ({ prop, className, href }) => {
    const [state, dispatch] = (0, import_react17.useReducer)(reducer2, {
      prop: prop || "one"
    });
    return /* @__PURE__ */ import_react16.default.createElement(StyledTeamRzdRu, {
      className: `TEAM-RZD-RU prop-${state.prop} ${className}`,
      href,
      rel: "noopener noreferrer",
      target: "_blank",
      onMouseLeave: () => {
        dispatch("mouse_leave");
      },
      onMouseEnter: () => {
        dispatch("mouse_enter");
      }
    }, /* @__PURE__ */ import_react16.default.createElement("div", {
      className: "text-wrapper"
    }, "TEAM.RZD.RU 6+"));
  };
  function reducer2(state, action) {
    switch (action) {
      case "mouse_enter":
        return __spreadProps(__spreadValues({}, state), {
          prop: "two"
        });
      case "mouse_leave":
        return __spreadProps(__spreadValues({}, state), {
          prop: "one"
        });
    }
    return state;
  }
  TeamRzdRu.propTypes = {
    prop: import_prop_types4.default.oneOf(["two", "one"]),
    href: import_prop_types4.default.string
  };

  // src/rgd/common/icons/Property101/Property101.jsx
  var import_react18 = __toModule(require_react());
  var StyledProperty101 = ut.svg`
  .path {
    fill: #e21a1a;
  }
`;
  var Property101 = ({ className }) => {
    return /* @__PURE__ */ import_react18.default.createElement(StyledProperty101, {
      className: `property-1-01 ${className}`,
      fill: "none",
      height: "7",
      viewBox: "0 0 93 7",
      width: "93",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ import_react18.default.createElement("path", {
      className: "path",
      d: "M20.9832 6.81633V0L-0.000112534 0V6.81633L20.9832 6.81633Z",
      fill: "#E21A1A"
    }), /* @__PURE__ */ import_react18.default.createElement("path", {
      className: "path",
      d: "M38.9778 6.81633V0L31.9834 0V6.81633H38.9778Z",
      fill: "#D9D9D9"
    }), /* @__PURE__ */ import_react18.default.createElement("path", {
      className: "path",
      d: "M56.9722 6.81633V0L49.9777 0V6.81633H56.9722Z",
      fill: "#D9D9D9"
    }), /* @__PURE__ */ import_react18.default.createElement("path", {
      className: "path",
      d: "M74.9666 6.81633V0L67.9721 0V6.81633H74.9666Z",
      fill: "#D9D9D9"
    }), /* @__PURE__ */ import_react18.default.createElement("path", {
      className: "path",
      d: "M92.9609 6.81633V0L85.9665 0V6.81633H92.9609Z",
      fill: "#D9D9D9"
    }));
  };

  // src/rgd/common/icons/Six/Six.jsx
  var import_prop_types5 = __toModule(require_prop_types());
  var import_react19 = __toModule(require_react());
  var StyledSix = ut.svg`
  &.path {
    fill: ${(props) => props.color};
  }
`;
  var Six = ({ color = "#E21A1A", className }) => {
    return /* @__PURE__ */ import_react19.default.createElement("span", {
      className
    }, /* @__PURE__ */ import_react19.default.createElement(StyledSix, {
      fill: "none",
      height: "165",
      viewBox: "0 0 255 165",
      width: "255",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ import_react19.default.createElement("path", {
      className: "path",
      d: "M99.5514 115.157L62.5223 164.515H37.731L74.7601 115.157H99.5514Z"
    }), /* @__PURE__ */ import_react19.default.createElement("path", {
      className: "path",
      d: "M78.5379 0L29.1618 65.8046H14.5007L63.8709 0H78.5379Z"
    }), /* @__PURE__ */ import_react19.default.createElement("path", {
      className: "path",
      d: "M255 65.793L205.575 131.616H199.988L249.406 65.793H255Z"
    }), /* @__PURE__ */ import_react19.default.createElement("path", {
      className: "path",
      d: "M103.769 33.0713L29.7107 131.787H0L74.0582 33.0713H103.769Z"
    })));
  };
  Six.propTypes = {
    color: import_prop_types5.default.string
  };

  // src/rgd/common/screens/RgdL/sections/Begin/Begin.jsx
  var StyledBegin = ut.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 64px;
  height: 1223.04px;
  position: relative;
  width: 100%;

  & .banner-slider {
    align-self: stretch;
    background-color: #f0f0f0;
    height: 558px;
    overflow: hidden;
    position: relative;
    width: 100%;

    & .overlap-8 {
      height: 558px;
      position: relative;
      width: 6250px;

      & .instance-6 {
        height: 432px !important;
        left: 438px !important;
        position: absolute !important;
        top: 45px !important;
        width: 669px !important;
      }

      & .view-20 {
        height: 558px;
        left: 0;
        position: absolute;
        top: 0;
        width: 6250px;

        & .component-1820-instance {
          left: 1250px !important;
          width: 1px !important;
        }

        & .overlap-group-4 {
          height: 558px;
          left: 16163px;
          position: absolute;
          top: -8821px;
          width: 3750px;

          & .image-8 {
            left: 1250px !important;
          }

          & .image-9 {
            left: 2500px !important;
          }
        }
      }

      & .view-21 {
        background: linear-gradient(180deg, rgb(240, 240, 240) 0%, rgba(217, 217, 217, 0) 100%);
        height: 558px;
        left: 0;
        position: absolute;
        top: 0;
        width: 438px;
      }

      & .image-10 {
        height: 42px;
        left: 1134px;
        position: absolute;
        top: 45px;
        width: 71px;
      }

      & .TEAM-RZD-RU-instance {
        left: 45px !important;
        position: absolute !important;
        top: 473px !important;
      }

      & .component-1822 {
        left: 241px !important;
        position: absolute !important;
        top: 483px !important;
      }

      & .image-11 {
        height: 41px;
        left: 1111px;
        position: absolute;
        top: 517px;
        width: 139px;
      }

      & .property-1-01 {
        height: 7px !important;
        left: 1157px !important;
        position: absolute !important;
        top: 551px !important;
        width: 93px !important;
      }

      & .component-1823 {
        left: 45px !important;
        position: absolute !important;
        top: 280px !important;
      }

      & .text-wrapper-37 {
        color: #000000;
        font-family: "RussianRail G Pro-Regular", Helvetica;
        font-size: 75px;
        font-weight: 400;
        left: 45px;
        letter-spacing: 3.75px;
        line-height: 72.7px;
        position: absolute;
        top: 40px;
        width: 375px;
      }
    }
  }

  & .raiting-instance {
    & .instance-5-instance {
      height: 28px !important;
      left: 9px !important;
      position: absolute !important;
      top: 8px !important;
      width: 201px !important;
    }
  }

  & .about-company-instance {
    align-self: stretch !important;
    height: 497.04px !important;
    margin-bottom: -39.08px !important;
    width: 100% !important;
  }
`;
  var Begin = () => {
    return /* @__PURE__ */ import_react20.default.createElement(StyledBegin, null, /* @__PURE__ */ import_react20.default.createElement("div", {
      className: "banner-slider"
    }, /* @__PURE__ */ import_react20.default.createElement("div", {
      className: "overlap-8"
    }, /* @__PURE__ */ import_react20.default.createElement(Six, {
      className: "instance-6"
    }), /* @__PURE__ */ import_react20.default.createElement("div", {
      className: "view-20"
    }, /* @__PURE__ */ import_react20.default.createElement(Component1820, {
      img: "https://psb-eta.vercel.app/rgd/desktop/img/25.svg",
      prop: "one"
    }), /* @__PURE__ */ import_react20.default.createElement(Component1820, {
      className: "component-1820-instance",
      img1: "https://psb-eta.vercel.app/rgd/desktop/img/29.png",
      prop: "two"
    }), /* @__PURE__ */ import_react20.default.createElement("div", {
      className: "overlap-group-4"
    }, /* @__PURE__ */ import_react20.default.createElement(Component1820, {
      img2: "https://psb-eta.vercel.app/rgd/desktop/img/26.png",
      prop: "three"
    }), /* @__PURE__ */ import_react20.default.createElement(Component1820, {
      ITDigital: "https://psb-eta.vercel.app/rgd/desktop/img/26.png",
      className: "image-8",
      prop: "IT-digital"
    }), /* @__PURE__ */ import_react20.default.createElement(Component1820, {
      className: "image-9",
      img3: "https://psb-eta.vercel.app/rgd/desktop/img/26.png",
      prop: "four"
    }))), /* @__PURE__ */ import_react20.default.createElement("div", {
      className: "view-21"
    }), /* @__PURE__ */ import_react20.default.createElement("img", {
      className: "image-10",
      alt: "Image",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/3.png"
    }), /* @__PURE__ */ import_react20.default.createElement(TeamRzdRu, {
      className: "TEAM-RZD-RU-instance",
      href: "http://team.rzd.ru?utm_source=rzd&utm_medium=hh_ru&utm_campaign=landing",
      prop: "one"
    }), /* @__PURE__ */ import_react20.default.createElement(ElementWrapper, {
      className: "component-1822",
      prop: "one"
    }), /* @__PURE__ */ import_react20.default.createElement("img", {
      className: "image-11",
      alt: "Image",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/1-2.svg"
    }), /* @__PURE__ */ import_react20.default.createElement(Property101, {
      className: "property-1-01"
    }), /* @__PURE__ */ import_react20.default.createElement(DivWrapper, {
      className: "component-1823",
      prop: "one"
    }), /* @__PURE__ */ import_react20.default.createElement("div", {
      className: "text-wrapper-37"
    }, "\u0414\u041B\u042F \u041B\u042E\u0414\u0415\u0419", /* @__PURE__ */ import_react20.default.createElement("br", null), "\u0414\u0415\u041B\u0410"))), /* @__PURE__ */ import_react20.default.createElement(Raiting, {
      className: "raiting-instance",
      icon: /* @__PURE__ */ import_react20.default.createElement(Five, {
        className: "instance-5-instance"
      })
    }), /* @__PURE__ */ import_react20.default.createElement(AboutCompany, {
      className: "about-company-instance"
    }));
  };

  // src/rgd/common/screens/RgdL/sections/Footer/Footer.jsx
  var import_react21 = __toModule(require_react());
  var StyledFooter = ut.p`
  align-self: stretch;
  color: var(--variable-collection-HOVERING);
  font-family: "Arial-Regular", Helvetica;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 11px;
  position: relative;

  & .text-wrapper-49 {
    color: #000000;
  }

  & .text-wrapper-50 {
    color: #999999;
  }
`;
  var Footer = () => {
    return /* @__PURE__ */ import_react21.default.createElement(StyledFooter, null, /* @__PURE__ */ import_react21.default.createElement("span", {
      className: "text-wrapper-49"
    }, "1"), /* @__PURE__ */ import_react21.default.createElement("span", {
      className: "text-wrapper-50"
    }, " ", "\u043F\u043E \u0434\u0430\u043D\u043D\u044B\u043C \u0412\u0441\u0435\u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0433\u043E \u0446\u0435\u043D\u0442\u0440\u0430 \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u044F \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u043C\u043D\u0435\u043D\u0438\u044F (\u0412\u0426\u0418\u041E\u041C) \u0437\u0430 2023 \u0433\u043E\u0434", /* @__PURE__ */ import_react21.default.createElement("br", null)), /* @__PURE__ */ import_react21.default.createElement("span", {
      className: "text-wrapper-49"
    }, "2"), /* @__PURE__ */ import_react21.default.createElement("span", {
      className: "text-wrapper-50"
    }, " ", "10 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u0432 \u0441\u0444\u0435\u0440\u0435 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430 \u0438 \u043B\u043E\u0433\u0438\u0441\u0442\u0438\u043A\u0438 \u0438\u0437 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0430 RAEX-600 2022 \u0433\u043E\u0434\u0430"));
  };

  // src/rgd/common/screens/RgdL/sections/Map/Map.jsx
  var import_react47 = __toModule(require_react());

  // src/rgd/common/screens/RgdL/sections/Map/sections/MapTexts/MapTexts.jsx
  var import_react22 = __toModule(require_react());
  var StyledMapTexts = ut.div`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  left: 0;
  position: absolute;
  top: 0;

  & .text-wrapper-35 {
    color: var(--variable-collection-BLACK);
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 50px;
    font-weight: 400;
    height: 80.82px;
    letter-spacing: 2.5px;
    line-height: 48.5px;
    margin-top: -1px;
    position: relative;
    width: 715.52px;
  }

  & .text-wrapper-36 {
    color: #000000;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    height: 38.73px;
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
    position: relative;
    width: 505.39px;
  }
`;
  var MapTexts = () => {
    return /* @__PURE__ */ import_react22.default.createElement(StyledMapTexts, null, /* @__PURE__ */ import_react22.default.createElement("div", {
      className: "text-wrapper-35"
    }, "/ \u0413\u0415\u041E\u0413\u0420\u0410\u0424\u0418\u042F", /* @__PURE__ */ import_react22.default.createElement("br", null), "\u0412\u0410\u041A\u0410\u041D\u0421\u0418\u0419"), /* @__PURE__ */ import_react22.default.createElement("p", {
      className: "text-wrapper-36"
    }, "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0432 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0430\u0445 \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u044B.", /* @__PURE__ */ import_react22.default.createElement("br", null), "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0434\u043E\u0440\u043E\u0433\u0443, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438."));
  };

  // src/rgd/common/screens/RgdL/sections/Map/sections/MapTextsValues/MapTextsValues.jsx
  var import_react23 = __toModule(require_react());
  var StyledMapTextsValues = ut.div`
  align-items: flex-start;
  display: inline-flex;
  gap: 85px;
  left: 0;
  position: absolute;
  top: 580px;

  & .element-10 {
    height: 66.53px;
    position: relative;
    width: 337.13px;
  }

  & .text-wrapper-33 {
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Regular", Helvetica;
    font-size: 25px;
    font-weight: 400;
    left: 0;
    letter-spacing: 1.25px;
    line-height: 24.2px;
    position: absolute;
    top: 46px;
    white-space: nowrap;
    width: 335px;
  }

  & .element-KM {
    height: 38px;
    left: 4px;
    position: absolute;
    top: 0;
    width: 293px;
  }

  & .element-11 {
    height: 66.38px;
    margin-right: -2px;
    position: relative;
    width: 220.75px;
  }

  & .text-wrapper-34 {
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Regular", Helvetica;
    font-size: 25px;
    font-weight: 400;
    left: 0;
    letter-spacing: 1.25px;
    line-height: 24.2px;
    position: absolute;
    top: 46px;
    white-space: nowrap;
    width: 219px;
  }

  & .element-12 {
    height: 37px;
    left: 8px;
    position: absolute;
    top: 0;
    width: 66px;
  }
`;
  var MapTextsValues = () => {
    return /* @__PURE__ */ import_react23.default.createElement(StyledMapTextsValues, null, /* @__PURE__ */ import_react23.default.createElement("div", {
      className: "element-10"
    }, /* @__PURE__ */ import_react23.default.createElement("div", {
      className: "text-wrapper-33"
    }, "\u0436\u0435\u043B\u0435\u0437\u043D\u043E\u0434\u043E\u0440\u043E\u0436\u043D\u044B\u0445 \u043F\u0443\u0442\u0435\u0439"), /* @__PURE__ */ import_react23.default.createElement("img", {
      className: "element-KM",
      alt: "Element KM",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/85-000-km.svg"
    })), /* @__PURE__ */ import_react23.default.createElement("div", {
      className: "element-11"
    }, /* @__PURE__ */ import_react23.default.createElement("div", {
      className: "text-wrapper-34"
    }, "\u0436\u0435\u043B\u0435\u0437\u043D\u044B\u0445 \u0434\u043E\u0440\u043E\u0433"), /* @__PURE__ */ import_react23.default.createElement("img", {
      className: "element-12",
      alt: "Element",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/16.svg"
    })));
  };

  // src/rgd/common/screens/RgdL/sections/Map/sections/MapVector/MapVector.jsx
  var import_react46 = __toModule(require_react());

  // src/rgd/common/components/Component1847/Component1847.jsx
  var import_react24 = __toModule(require_react());
  var StyledComponent1847 = ut.div`
  background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-59.svg);
  background-size: 100% 100%;
  height: 38px;
  position: relative;
  width: 78px;

  & .text-wrapper-18 {
    color: var(--variable-collection-BLACK);
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    left: 7px;
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    position: absolute;
    top: 3px;
  }

  &:hover {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-58.svg);
  }
`;
  var Component1847 = ({ className }) => {
    return /* @__PURE__ */ import_react24.default.createElement(StyledComponent1847, {
      className: `component-1847 ${className}`
    }, /* @__PURE__ */ import_react24.default.createElement("div", {
      className: "text-wrapper-18"
    }, "\u0411\u0410\u041C"));
  };

  // src/rgd/common/components/Component1848/Component1848.jsx
  var import_react25 = __toModule(require_react());
  var StyledComponent1848 = ut.div`
  background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-61.svg);
  background-size: 100% 100%;
  height: 38px;
  position: relative;
  width: 155px;

  & .text-wrapper-19 {
    color: var(--variable-collection-BLACK);
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    left: 7px;
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    position: absolute;
    top: 3px;
  }

  &:hover {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-60.svg);
  }
`;
  var Component1848 = ({ className }) => {
    return /* @__PURE__ */ import_react25.default.createElement(StyledComponent1848, {
      className: `component-1848 ${className}`
    }, /* @__PURE__ */ import_react25.default.createElement("div", {
      className: "text-wrapper-19"
    }, "\u0422\u0420\u0410\u041D\u0421\u0421\u0418\u0411"));
  };

  // src/rgd/common/screens/RgdL/sections/Map/sections/MapVector/sections/OverlapWrapper/OverlapWrapper.jsx
  var import_react42 = __toModule(require_react());

  // src/rgd/common/icons/Eighteen/Eighteen.jsx
  var import_react26 = __toModule(require_react());
  var StyledEighteen = ut.svg`
  .path {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }
`;
  var Eighteen = ({ className }) => {
    return /* @__PURE__ */ import_react26.default.createElement(StyledEighteen, {
      className: `eighteen ${className}`,
      fill: "none",
      height: "104",
      viewBox: "0 0 99 104",
      width: "99",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M33.3605 65.8115L23.8752 75.2968L30.2988 81.7203L23.048 88.9682"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M39.2069 14.1409V9.81336L47.4675 1.5498"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M51.7245 4.9707L37.9618 18.7364V26.5672L24.6965 39.8324"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M9.76294 49.4323V31.9014"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M3.9187 49.4321V39.832"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M36.5372 39.8321L22.1357 25.4305H15.874L8.21985 17.7764"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M57.2892 56.6243L44.2771 43.6123"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M33.3667 14.1406V28.9219L44.2768 39.8321V62.8593L54.3803 72.9627"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M33.3674 14.1406L21.265 26.246V53.7126L33.3615 65.812V78.6622L40.9038 86.2044"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M8.87329 65.8061H50.8798L76.8539 39.832"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M31.1882 11.9619H14.0253"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M75.3821 39.8319V24.6973L70.7219 20.0371"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M86.6516 39.8319V24.6973L91.3118 20.0371"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M91.0648 38.4053H78.2823"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M76.8542 39.8325L51.1628 14.1411H33.3669L22.5569 3.33105"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M97.8617 43.4705L94.7471 40.3588L97.8617 37.2441"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M76.8539 41.501H85.9417L95.0796 50.6359"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M76.8536 39.832V55.5495L72.4642 59.9389V76.2392L66.2703 82.4332"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M81.5382 76.1201L68.4408 89.2175V90.7395"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M42.5548 14.1406V25.0978L57.289 39.8321V68.8795L75.1144 86.7049"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M87.2252 97.904L81.5376 92.2164V46.1855"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M76.8539 41.501L91.6617 56.3118"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M89.5008 54.4346L84.1753 59.7601"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M76.8533 39.832H0.0498047"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M81.5376 87.1877L89.4596 79.2656"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M81.5382 66.1719H72.4651"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M15.609 39.8322V31.9013L21.2643 26.2461"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M4.43762 83.3223V70.2396L15.6097 59.0675V45.4873L21.265 39.832"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M33.0496 94.0626L9.22749 70.2405H1.27307V62.3008"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M37.9687 83.2686L30.1115 91.1229"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M15.6083 54.3252H0.0498047"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M81.5376 103.112V99.544L85.2028 95.8818"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M54.3806 72.9623L61.1722 66.1707H66.2328L72.465 59.9385"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M57.5009 77.7536V76.0844L54.3803 72.9639L51.2568 76.0844V77.7536"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M81.0177 30.7908V26.9814"
    }), /* @__PURE__ */ import_react26.default.createElement("path", {
      className: "path",
      d: "M85.1793 30.792H76.8539C71.5699 30.792 67.2863 35.0756 67.2863 40.3597C67.2863 45.6438 71.5699 49.9274 76.8539 49.9274H85.1793C90.4634 49.9274 94.747 45.6438 94.747 40.3597C94.747 35.0756 90.4634 30.792 85.1793 30.792Z",
      fill: "#E6E6E6"
    }));
  };

  // src/rgd/common/icons/Fifteen/Fifteen.jsx
  var import_react27 = __toModule(require_react());
  var StyledFifteen = ut.svg`
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
  var Fifteen = ({ className }) => {
    return /* @__PURE__ */ import_react27.default.createElement(StyledFifteen, {
      className: `fifteen ${className}`,
      fill: "none",
      height: "168",
      viewBox: "0 0 212 168",
      width: "212",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ import_react27.default.createElement("path", {
      className: "path",
      d: "M38.3587 99.6238L20.2949 81.56H15.1843L11.7075 78.0833V72.9727"
    }), /* @__PURE__ */ import_react27.default.createElement("path", {
      className: "path",
      d: "M69.4132 52.9814L74.3472 57.9154H105.447L110.381 52.9814"
    }), /* @__PURE__ */ import_react27.default.createElement("path", {
      className: "path",
      d: "M41.6049 80.791H51.3609L58.7796 88.2097"
    }), /* @__PURE__ */ import_react27.default.createElement("path", {
      className: "path",
      d: "M38.3585 99.6229V84.0379L72.705 49.6885"
    }), /* @__PURE__ */ import_react27.default.createElement("path", {
      className: "path",
      d: "M60.1435 121.408L36.5099 97.7744H25.0345"
    }), /* @__PURE__ */ import_react27.default.createElement("path", {
      className: "path",
      d: "M86.4497 110.693H116.18L153.482 73.3906H173.94L188.771 88.222"
    }), /* @__PURE__ */ import_react27.default.createElement("path", {
      className: "path",
      d: "M86.4497 110.692V119.657L133.955 167.162"
    }), /* @__PURE__ */ import_react27.default.createElement("path", {
      className: "path",
      d: "M159.603 73.3903L210.674 22.3166V4.92693L207.197 1.4502H174.405"
    }), /* @__PURE__ */ import_react27.default.createElement("path", {
      className: "path",
      d: "M34.119 113.778L52.5125 95.3846H79.2196L93.6918 80.9124V70.5439"
    }), /* @__PURE__ */ import_react27.default.createElement("path", {
      className: "path",
      d: "M86.4502 110.692L80.7155 104.58H43.3162"
    }), /* @__PURE__ */ import_react27.default.createElement("path", {
      className: "path",
      d: "M58.7807 53.5596L66.7587 61.5405V72.1474L58.7807 80.1254V104.58L39.3716 123.99"
    }), /* @__PURE__ */ import_react27.default.createElement("path", {
      className: "path",
      d: "M11.7071 72.9727L1.58008 62.8457"
    }), /* @__PURE__ */ import_react27.default.createElement("path", {
      className: "path",
      d: "M14.8015 69.8779L20.8689 75.9483H30.2688L38.3586 84.0381"
    }), /* @__PURE__ */ import_react27.default.createElement("path", {
      className: "path",
      d: "M11.7075 75.3719V72.9727"
    }), /* @__PURE__ */ import_react27.default.createElement("path", {
      className: "path",
      d: "M20.8618 107.807V106.842L29.9202 97.7834V75.9485V55.7415L24.4004 50.2188"
    }), /* @__PURE__ */ import_react27.default.createElement("path", {
      className: "path",
      d: "M29.9214 62.6484H22.0347L11.7075 72.9727"
    }), /* @__PURE__ */ import_react27.default.createElement("path", {
      className: "path",
      d: "M94.7632 49.6885V57.9137"
    }), /* @__PURE__ */ import_react27.default.createElement("path", {
      className: "path",
      d: "M51.3607 80.791L55.4057 76.7461"
    }), /* @__PURE__ */ import_react27.default.createElement("path", {
      className: "path",
      d: "M43.3149 110.469C46.5667 110.469 49.2027 107.833 49.2027 104.581C49.2027 101.329 46.5667 98.6934 43.3149 98.6934C40.0632 98.6934 37.4271 101.329 37.4271 104.581C37.4271 107.833 40.0632 110.469 43.3149 110.469Z"
    }));
  };

  // src/rgd/common/icons/Four/Four.jsx
  var import_react28 = __toModule(require_react());
  var StyledFour = ut.svg`
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
  var Four = ({ className }) => {
    return /* @__PURE__ */ import_react28.default.createElement(StyledFour, {
      className: `four ${className}`,
      fill: "none",
      height: "144",
      viewBox: "0 0 84 144",
      width: "84",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M4.04785 44.854L13.2328 35.666H22.4414"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M22.4422 35.6663V26.7963L17.4994 21.8535"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M64.3156 24.8916V35.6663"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M50.4208 10.999L64.316 24.8913H66.2236"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M38.839 19.2681H49.7167L66.3027 2.6792V0.55957"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M61.3388 7.64324L57.5559 3.86328"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M38.8391 19.2683L30.3931 10.8223"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M51.4416 17.5407L47.6616 13.7578"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M38.839 19.2695L14.1544 43.9541"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M59.776 40.2036L38.839 19.2695"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M1.30957 31.1094L14.1538 43.9536H56.0249L64.7624 35.2191H67.9183"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M6.80408 62.4526V51.304L14.155 43.9531"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M4.03296 80.5729V65.2233L6.80317 62.4531H38.8387"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M14.9882 62.4531V70.4488"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M25.8393 62.4531V67.5402L21.0525 72.327"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M38.8395 33.3087L22.442 16.9111"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M42.2607 61.0307L49.1995 54.089V43.9531"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M30.0159 77.3076L21.9231 85.4004"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M51.9009 122.857V116.58L37.308 101.987L46.0013 93.2939"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M32.4948 110.358H39.4041L51.901 122.855H65.5371L69.0139 126.332V143.648"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M30.3551 118.572L32.145 116.782V107.15L37.3086 101.986"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M34.9795 104.315H27.6139"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M82.055 99.2754L58.4744 122.856"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M64.2359 117.095H57.6622L51.901 122.856"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M41.0415 88.3057L33.717 95.6301"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M72.385 65.2533H67.3804L59.0138 73.6228L56.1259 70.7349L49.7612 77.0995L55.9669 83.3141L45.993 93.2939L30.0076 77.3085L35.9837 71.3324C36.8862 70.4302 37.6022 69.3591 38.0906 68.1801C38.5791 67.0012 38.8305 65.7375 38.8304 64.4614V19.2695"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M49.7521 77.0897L44.8417 72.1763L43.2843 70.6219L47.5589 66.3503L34.4085 53.2029H23.4042L14.1544 43.9531"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M43.2848 70.6218L41.3124 68.6494"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path",
      d: "M83.1681 106.979L78.7582 102.572"
    }), /* @__PURE__ */ import_react28.default.createElement("path", {
      className: "path fill",
      d: "M38.8389 25.1574C42.0906 25.1574 44.7267 22.5214 44.7267 19.2696C44.7267 16.0179 42.0906 13.3818 38.8389 13.3818C35.5871 13.3818 32.951 16.0179 32.951 19.2696C32.951 22.5214 35.5871 25.1574 38.8389 25.1574Z"
    }));
  };

  // src/rgd/common/icons/Fourteen/Fourteen.jsx
  var import_react29 = __toModule(require_react());
  var StyledFourteen = ut.svg`
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
  var Fourteen = ({ className }) => {
    return /* @__PURE__ */ import_react29.default.createElement(StyledFourteen, {
      className: `fourteen ${className}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ import_react29.default.createElement("path", {
      className: "path",
      d: "M165.163 93.1535L154.312 82.3022V73.5059"
    }), /* @__PURE__ */ import_react29.default.createElement("path", {
      className: "path",
      d: "M0.639648 54.5234H144.349L151.585 61.7595"
    }), /* @__PURE__ */ import_react29.default.createElement("path", {
      className: "path",
      d: "M7.95209 38.1699L45.219 75.4368C47.0424 77.2571 49.5135 78.2798 52.0901 78.2806H124.79"
    }), /* @__PURE__ */ import_react29.default.createElement("path", {
      className: "path",
      d: "M144.349 54.5241L149.274 49.599L144.349 44.6738"
    }), /* @__PURE__ */ import_react29.default.createElement("path", {
      className: "path",
      d: "M141.69 31.3701L147.213 36.8929V41.8092L141.729 47.2937H136.812L131.287 41.7709"
    }), /* @__PURE__ */ import_react29.default.createElement("path", {
      className: "path",
      d: "M166.187 82.1402H162.945L157.747 76.9413L147.075 66.2697L149.33 64.0146"
    }), /* @__PURE__ */ import_react29.default.createElement("path", {
      className: "path",
      d: "M101.095 54.5233L109.724 45.8947L127.167 45.8918L150.462 22.5967H155.808"
    }), /* @__PURE__ */ import_react29.default.createElement("path", {
      className: "path",
      d: "M125.662 87.6807L121.464 91.8816H82.3452L77.5673 96.6596"
    }), /* @__PURE__ */ import_react29.default.createElement("path", {
      className: "path",
      d: "M136.377 98.3966L125.661 87.6808V78.2603L112.569 65.1688C110.749 63.3469 109.726 60.8765 109.726 58.3006V54.2939"
    }), /* @__PURE__ */ import_react29.default.createElement("path", {
      className: "path",
      d: "M44.9895 54.5234L107.035 116.572C107.489 117.026 108.068 117.335 108.698 117.46C109.328 117.584 109.981 117.519 110.573 117.271C111.166 117.024 111.671 116.606 112.026 116.07C112.38 115.535 112.568 114.906 112.564 114.264L112.511 104.914C112.503 103.629 112.751 102.356 113.239 101.167C113.727 99.9788 114.446 98.8989 115.355 97.9902L151.585 61.7596L158.821 68.9957L154.311 73.5057"
    }), /* @__PURE__ */ import_react29.default.createElement("path", {
      className: "path",
      d: "M114.816 54.5231V45.8916"
    }), /* @__PURE__ */ import_react29.default.createElement("path", {
      className: "path",
      d: "M136.489 36.5718L130.851 30.9313V26.0444L137.661 19.2352V14.3483L124.793 1.48047"
    }), /* @__PURE__ */ import_react29.default.createElement("path", {
      className: "path",
      d: "M34.0029 64.5049H16.0029",
      strokeWidth: "2.36"
    }), /* @__PURE__ */ import_react29.default.createElement("path", {
      className: "path",
      d: "M101.094 60.4123C104.346 60.4123 106.982 57.7763 106.982 54.5245C106.982 51.2728 104.346 48.6367 101.094 48.6367C97.8425 48.6367 95.2064 51.2728 95.2064 54.5245C95.2064 57.7763 97.8425 60.4123 101.094 60.4123Z",
      fill: "#E6E6E6"
    }));
  };

  // src/rgd/common/icons/IconComponentNode/IconComponentNode.jsx
  var import_react30 = __toModule(require_react());
  var StyledIconComponentNode = ut.svg`
  &.icon-component-node {
    fill: none;
    height: 7px;
    width: 97px;
  }

  & .path {
    fill: #f37e00;
  }
`;
  var IconComponentNode = ({ className }) => {
    return /* @__PURE__ */ import_react30.default.createElement(StyledIconComponentNode, {
      className: `icon-component-node ${className}`,
      viewBox: "0 0 97 7",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ import_react30.default.createElement("path", {
      className: "path",
      d: "M40.6772 7.25312V0.140625L18.7823 0.140625V7.25312L40.6772 7.25312Z"
    }), /* @__PURE__ */ import_react30.default.createElement("path", {
      className: "path",
      d: "M7.2981 7.25312L7.2981 0.140625L-0.000226974 0.140625L-0.000226974 7.25312H7.2981Z"
    }), /* @__PURE__ */ import_react30.default.createElement("path", {
      className: "path",
      d: "M59.447 7.25312V0.140625L52.1487 0.140625V7.25312H59.447Z"
    }), /* @__PURE__ */ import_react30.default.createElement("path", {
      className: "path",
      d: "M78.2241 7.25312V0.140625L70.9258 0.140625V7.25312H78.2241Z"
    }), /* @__PURE__ */ import_react30.default.createElement("path", {
      className: "path",
      d: "M97 7.25312V0.140625L89.7017 0.140625V7.25312H97Z"
    }));
  };

  // src/rgd/common/icons/NamecandidateName15Score101/NamecandidateName15Score101.jsx
  var import_react31 = __toModule(require_react());
  var StyledNamecandidateName15Score101 = ut.svg`
  .path {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }
`;
  var NamecandidateName15Score101 = ({ className }) => {
    return /* @__PURE__ */ import_react31.default.createElement(StyledNamecandidateName15Score101, {
      className: `namecandidate-name-15-score-10-1 ${className}`,
      fill: "none",
      height: "93",
      viewBox: "0 0 93 93",
      width: "93",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ import_react31.default.createElement("path", {
      className: "path",
      d: "M80.0234 24.0337V0.0732422"
    }), /* @__PURE__ */ import_react31.default.createElement("path", {
      className: "path",
      d: "M89.5349 24.0371H0.799805"
    }), /* @__PURE__ */ import_react31.default.createElement("path", {
      className: "path",
      d: "M69.502 40.7994H78.6281L91.4929 27.9346"
    }), /* @__PURE__ */ import_react31.default.createElement("path", {
      className: "path",
      d: "M69.5025 40.7988L29.5684 80.7329C28.6659 81.6351 27.9499 82.7063 27.4615 83.8852C26.973 85.0642 26.7216 86.3278 26.7217 87.6039V92.9707"
    }), /* @__PURE__ */ import_react31.default.createElement("path", {
      className: "path",
      d: "M69.502 40.7987V24.0332"
    }), /* @__PURE__ */ import_react31.default.createElement("path", {
      className: "path",
      d: "M6.01074 43.8818C6.01074 41.3053 7.03429 38.8343 8.85618 37.0124C10.6781 35.1905 13.1491 34.167 15.7256 34.167H23.58"
    }), /* @__PURE__ */ import_react31.default.createElement("path", {
      className: "path",
      d: "M23.5801 0.0732422V67.5887L33.1478 77.1564"
    }), /* @__PURE__ */ import_react31.default.createElement("path", {
      className: "path",
      d: "M11.1807 83.5789H22.6972C23.9734 83.5789 25.237 83.3276 26.4159 82.8391C27.5949 82.3507 28.6661 81.6347 29.5683 80.7322L32.3385 77.9619"
    }), /* @__PURE__ */ import_react31.default.createElement("path", {
      className: "path",
      d: "M56.587 29.924C59.8388 29.924 62.4748 27.288 62.4748 24.0362C62.4748 20.7845 59.8388 18.1484 56.587 18.1484C53.3353 18.1484 50.6992 20.7845 50.6992 24.0362C50.6992 27.288 53.3353 29.924 56.587 29.924Z",
      fill: "#E6E6E6",
      stroke: "#BEBEBE",
      strokeMiterlimit: "10",
      strokeWidth: "2.35512"
    }));
  };

  // src/rgd/common/icons/NamecandidateName4Score101/NamecandidateName4Score101.jsx
  var import_react32 = __toModule(require_react());
  var StyledNamecandidateName4Score101 = ut.svg`
  .path {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }
`;
  var NamecandidateName4Score101 = ({ className }) => {
    return /* @__PURE__ */ import_react32.default.createElement(StyledNamecandidateName4Score101, {
      className: `namecandidate-name-4-score-10-1 ${className}`,
      fill: "none",
      height: "114",
      viewBox: "0 0 191 114",
      width: "191",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ import_react32.default.createElement("path", {
      className: "path",
      d: "M1.33984 88.3588L80.8547 8.82922C85.1734 4.50757 91.9237 1.71973 98.05 1.71973H127.489C133.604 1.71973 140.345 4.50758 144.67 8.83217L170.638 34.8151C171.54 35.7179 172.612 36.4341 173.792 36.9226C174.971 37.411 176.235 37.6622 177.512 37.6618H190.353",
      stroke: "#BEBEBE",
      strokeMiterlimit: "10",
      strokeWidth: "2.35512"
    }), /* @__PURE__ */ import_react32.default.createElement("path", {
      className: "path",
      d: "M111.686 14.6169V1.72266",
      stroke: "#BEBEBE",
      strokeMiterlimit: "10",
      strokeWidth: "2.35512"
    }), /* @__PURE__ */ import_react32.default.createElement("path", {
      className: "path",
      d: "M152.152 34.6703L161.328 25.4941",
      stroke: "#BEBEBE",
      strokeMiterlimit: "10",
      strokeWidth: "2.35512"
    }), /* @__PURE__ */ import_react32.default.createElement("path", {
      className: "path",
      d: "M170.646 34.8154L161.47 43.9886",
      stroke: "#BEBEBE",
      strokeMiterlimit: "10",
      strokeWidth: "2.35512"
    }), /* @__PURE__ */ import_react32.default.createElement("path", {
      className: "path",
      d: "M53.4703 36.2225V23.6844L59.9115 17.2461",
      stroke: "#BEBEBE",
      strokeMiterlimit: "10",
      strokeWidth: "2.35512"
    }), /* @__PURE__ */ import_react32.default.createElement("path", {
      className: "path",
      d: "M42.3687 47.3232H55.6574",
      stroke: "#BEBEBE",
      strokeMiterlimit: "10",
      strokeWidth: "2.35512"
    }), /* @__PURE__ */ import_react32.default.createElement("path", {
      className: "path",
      d: "M144.678 8.83203H157.967",
      stroke: "#BEBEBE",
      strokeMiterlimit: "10",
      strokeWidth: "2.35512"
    }), /* @__PURE__ */ import_react32.default.createElement("path", {
      className: "path",
      d: "M60.6453 102.639H67.2338L81.3351 88.5381",
      stroke: "#BEBEBE",
      strokeMiterlimit: "10",
      strokeWidth: "2.35512"
    }), /* @__PURE__ */ import_react32.default.createElement("path", {
      className: "path",
      d: "M45.7474 87.7441V105.534L38.2846 112.994",
      stroke: "#BEBEBE",
      strokeMiterlimit: "10",
      strokeWidth: "2.35512"
    }), /* @__PURE__ */ import_react32.default.createElement("path", {
      className: "path",
      d: "M69.4462 111.443L30.7191 72.7158V58.9766",
      stroke: "#BEBEBE",
      strokeMiterlimit: "10",
      strokeWidth: "2.35512"
    }), /* @__PURE__ */ import_react32.default.createElement("path", {
      className: "path",
      d: "M14.811 80.7776C18.0628 80.7776 20.6988 78.1415 20.6988 74.8898C20.6988 71.638 18.0628 69.002 14.811 69.002C11.5593 69.002 8.92322 71.638 8.92322 74.8898C8.92322 78.1415 11.5593 80.7776 14.811 80.7776Z",
      fill: "#E6E6E6",
      stroke: "#BEBEBE",
      strokeMiterlimit: "10",
      strokeWidth: "2.35512"
    }));
  };

  // src/rgd/common/icons/Nineteen/Nineteen.jsx
  var import_prop_types6 = __toModule(require_prop_types());
  var import_react33 = __toModule(require_react());
  var StyledNineteen = ut.svg`
  & .path {
    stroke: ${(props) => props.color};
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }
`;
  var Nineteen = ({ color = "#BEBEBE", className }) => {
    return /* @__PURE__ */ import_react33.default.createElement(StyledNineteen, {
      className: `nineteen ${className}`,
      fill: "none",
      height: "32",
      viewBox: "0 0 45 32",
      width: "45",
      xmlns: "http://www.w3.org/2000/svg",
      color
    }, /* @__PURE__ */ import_react33.default.createElement("path", {
      className: "path",
      d: "M19.2383 9.61133L40.1959 30.5719"
    }), /* @__PURE__ */ import_react33.default.createElement("path", {
      className: "path",
      d: "M19.2384 9.61133L11.7373 17.1124"
    }), /* @__PURE__ */ import_react33.default.createElement("path", {
      className: "path",
      d: "M13.3506 9.61166L5.79654 2.05762H0"
    }), /* @__PURE__ */ import_react33.default.createElement("path", {
      className: "path",
      d: "M10.5566 2.05762H16.3532L18.1254 3.82983"
    }), /* @__PURE__ */ import_react33.default.createElement("path", {
      className: "path",
      d: "M19.2383 9.61133H30.5193L34.6967 13.7887L37.3021 11.1863L41.1262 15.0105L32.8833 23.2563H20.8869"
    }), /* @__PURE__ */ import_react33.default.createElement("path", {
      className: "path",
      d: "M41.125 15.0107L44.1396 18.0253"
    }), /* @__PURE__ */ import_react33.default.createElement("path", {
      className: "path",
      d: "M38.6772 29.0508H29.4922"
    }), /* @__PURE__ */ import_react33.default.createElement("path", {
      className: "path",
      d: "M23.5225 5.57565L27.0551 2.04297L27.6439 2.63175C28.5588 3.54507 29.2846 4.62988 29.7796 5.82408C30.2747 7.01827 30.5293 8.2984 30.5289 9.59114"
    }), /* @__PURE__ */ import_react33.default.createElement("path", {
      className: "path",
      d: "M19.2384 15.5002C22.4901 15.5002 25.1262 12.8642 25.1262 9.61241C25.1262 6.36067 22.4901 3.72461 19.2384 3.72461C15.9866 3.72461 13.3506 6.36067 13.3506 9.61241C13.3506 12.8642 15.9866 15.5002 19.2384 15.5002Z",
      fill: "#E6E6E6"
    }));
  };
  Nineteen.propTypes = {
    color: import_prop_types6.default.string
  };

  // src/rgd/common/icons/One/One.jsx
  var import_react34 = __toModule(require_react());
  var StyledOne = ut.svg`
  .path {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }

  .path:nth-child(1) {
    d: path("M29.7868 24.165L15.4854 38.4665");
  }

  .path:nth-child(2) {
    d: path("M51.0119 57.4442C48.8023 57.4442 46.6832 56.5665 45.1208 55.0041C43.5584 53.4417 42.6807 51.3226 42.6807 49.113V38.3825L48.2741 32.7891");
  }

  .path:nth-child(3) {
    d: path("M138.635 79.2165H112.934L92.7627 59.0449");
  }

  .path:nth-child(4) {
    d: path("M132.361 98.6436L112.935 79.2168");
  }

  .path:nth-child(5) {
    d: path("M104.317 101.184L112.934 92.5674V79.2168");
  }

  .path:nth-child(6) {
    d: path("M108.598 74.8809H68.4492");
  }

  .path:nth-child(7) {
    d: path("M72.5993 79.0319L64.3799 70.8125");
  }

  .path:nth-child(8) {
    d: path("M64.3835 70.8125H51.0123L44.8184 77.0065");
  }

  .path:nth-child(9) {
    d: path("M43.2139 65.2425L51.0123 57.4441V49.0893L57.7921 42.3125");
  }

  .path:nth-child(10) {
    d: path("M57.792 42.3114L62.2167 37.8838");
  }

  .path:nth-child(11) {
    d: path("M64.38 70.8116L51.0117 57.4434");
  }

  .path:nth-child(12) {
    d: path("M1.11035 1.15332L2.92086 2.96379V19.7911L37.7296 54.5969C38.6318 55.4994 39.7029 56.2154 40.8819 56.7038C42.0609 57.1923 43.3245 57.4437 44.6006 57.4437H51.0154V70.8119");
  }

  .path:nth-child(13) {
    d: path("M29.7871 24.165L35.1067 29.4817H44.9659L74.5256 59.0444H92.7631");
  }

  .path:nth-child(14) {
    d: path("M39.9719 24.1664H25.0346L13.2207 12.3525");
  }

  .path:nth-child(15) {
    d: path("M92.7627 59.0458L112.755 39.0537");
  }

  .path:nth-child(16) {
    d: path("M7.5332 24.4051V17.5605");
  }

  .path:nth-child(17) {
    d: path("M64.381 76.7004C67.6327 76.7004 70.2688 74.0644 70.2688 70.8126C70.2688 67.5609 67.6327 64.9248 64.381 64.9248C61.1292 64.9248 58.4932 67.5609 58.4932 70.8126C58.4932 74.0644 61.1292 76.7004 64.381 76.7004Z");
    fill: #e6e6e6;
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }
`;
  var One = ({ className }) => {
    return /* @__PURE__ */ import_react34.default.createElement(StyledOne, {
      className: `one ${className}`,
      fill: "none",
      height: "103",
      viewBox: "0 0 139 103",
      width: "139",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ import_react34.default.createElement("path", {
      className: "path",
      d: "M29.7868 24.165L15.4854 38.4665"
    }), /* @__PURE__ */ import_react34.default.createElement("path", {
      className: "path",
      d: "M51.0119 57.4442C48.8023 57.4442 46.6832 56.5665 45.1208 55.0041C43.5584 53.4417 42.6807 51.3226 42.6807 49.113V38.3825L48.2741 32.7891"
    }), /* @__PURE__ */ import_react34.default.createElement("path", {
      className: "path",
      d: "M138.635 79.2165H112.934L92.7627 59.0449"
    }), /* @__PURE__ */ import_react34.default.createElement("path", {
      className: "path",
      d: "M132.361 98.6436L112.935 79.2168"
    }), /* @__PURE__ */ import_react34.default.createElement("path", {
      className: "path",
      d: "M104.317 101.184L112.934 92.5674V79.2168"
    }), /* @__PURE__ */ import_react34.default.createElement("path", {
      className: "path",
      d: "M108.598 74.8809H68.4492"
    }), /* @__PURE__ */ import_react34.default.createElement("path", {
      className: "path",
      d: "M72.5993 79.0319L64.3799 70.8125"
    }), /* @__PURE__ */ import_react34.default.createElement("path", {
      className: "path",
      d: "M64.3835 70.8125H51.0123L44.8184 77.0065"
    }), /* @__PURE__ */ import_react34.default.createElement("path", {
      className: "path",
      d: "M43.2139 65.2425L51.0123 57.4441V49.0893L57.7921 42.3125"
    }), /* @__PURE__ */ import_react34.default.createElement("path", {
      className: "path",
      d: "M57.792 42.3114L62.2167 37.8838"
    }), /* @__PURE__ */ import_react34.default.createElement("path", {
      className: "path",
      d: "M64.38 70.8116L51.0117 57.4434"
    }), /* @__PURE__ */ import_react34.default.createElement("path", {
      className: "path",
      d: "M1.11035 1.15332L2.92086 2.96379V19.7911L37.7296 54.5969C38.6318 55.4994 39.7029 56.2154 40.8819 56.7038C42.0609 57.1923 43.3245 57.4437 44.6006 57.4437H51.0154V70.8119"
    }), /* @__PURE__ */ import_react34.default.createElement("path", {
      className: "path",
      d: "M29.7871 24.165L35.1067 29.4817H44.9659L74.5256 59.0444H92.7631"
    }), /* @__PURE__ */ import_react34.default.createElement("path", {
      className: "path",
      d: "M39.9719 24.1664H25.0346L13.2207 12.3525"
    }), /* @__PURE__ */ import_react34.default.createElement("path", {
      className: "path",
      d: "M92.7627 59.0458L112.755 39.0537"
    }), /* @__PURE__ */ import_react34.default.createElement("path", {
      className: "path",
      d: "M7.5332 24.4051V17.5605"
    }), /* @__PURE__ */ import_react34.default.createElement("path", {
      className: "path",
      d: "M64.381 76.7004C67.6327 76.7004 70.2688 74.0644 70.2688 70.8126C70.2688 67.5609 67.6327 64.9248 64.381 64.9248C61.1292 64.9248 58.4932 67.5609 58.4932 70.8126C58.4932 74.0644 61.1292 76.7004 64.381 76.7004Z"
    }));
  };

  // src/rgd/common/icons/Seventeen/Seventeen.jsx
  var import_react35 = __toModule(require_react());
  var StyledSeventeen = ut.svg`
  .path {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }

  .path:nth-child(1) {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }

  .path:nth-child(2) {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }

  .path:nth-child(3) {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }

  .path:nth-child(4) {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }

  .path:nth-child(5) {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }

  .path:nth-child(6) {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }

  .path:nth-child(7) {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }

  .path:nth-child(8) {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }

  .path:nth-child(9) {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }

  .path:nth-child(10) {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }

  .path:nth-child(11) {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }

  .path:nth-child(12) {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }

  .path:nth-child(13) {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }

  .path:nth-child(14) {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }

  .path:nth-child(15) {
    fill: #e6e6e6;
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }
`;
  var Seventeen = ({ className }) => {
    return /* @__PURE__ */ import_react35.default.createElement(StyledSeventeen, {
      className: `seventeen ${className}`,
      fill: "none",
      height: "118",
      viewBox: "0 0 108 118",
      width: "108",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ import_react35.default.createElement("path", {
      className: "path",
      d: "M63.1072 29.874L56.7189 36.2623L29.6262 63.355V102.694L16.0519 116.269"
    }), /* @__PURE__ */ import_react35.default.createElement("path", {
      className: "path",
      d: "M81.8303 48.601L55.1762 21.944V4.74567L51.8173 1.38965"
    }), /* @__PURE__ */ import_react35.default.createElement("path", {
      className: "path",
      d: "M69.1543 48.7009L62.0124 41.5619C60.6073 40.1564 59.818 38.2503 59.818 36.2629C59.818 34.2755 60.6073 32.3694 62.0124 30.9639"
    }), /* @__PURE__ */ import_react35.default.createElement("path", {
      className: "path",
      d: "M29.627 102.696V109.479"
    }), /* @__PURE__ */ import_react35.default.createElement("path", {
      className: "path",
      d: "M23.0854 40.2257H36.8982L55.1769 21.9441H93.062L94.216 20.79"
    }), /* @__PURE__ */ import_react35.default.createElement("path", {
      className: "path",
      d: "M95.8198 32.5537L87.8712 40.5022H73.7317"
    }), /* @__PURE__ */ import_react35.default.createElement("path", {
      className: "path",
      d: "M55.1761 9.78613H65.6594L97.4565 43.7882H107.057"
    }), /* @__PURE__ */ import_react35.default.createElement("path", {
      className: "path",
      d: "M55.1768 12.3438H46.6395"
    }), /* @__PURE__ */ import_react35.default.createElement("path", {
      className: "path",
      d: "M29.6268 63.3558L23.0854 56.8144V4.03613"
    }), /* @__PURE__ */ import_react35.default.createElement("path", {
      className: "path",
      d: "M33.9799 22.6475L44.2276 32.8952V39.2158"
    }), /* @__PURE__ */ import_react35.default.createElement("path", {
      className: "path",
      d: "M23.0848 52.2129H1.91516"
    }), /* @__PURE__ */ import_react35.default.createElement("path", {
      className: "path",
      d: "M19.5994 52.0285L9.45769 41.8867H0.219727"
    }), /* @__PURE__ */ import_react35.default.createElement("path", {
      className: "path",
      d: "M55.1759 27.8323C58.4276 27.8323 61.0637 25.1962 61.0637 21.9444C61.0637 18.6927 58.4276 16.0566 55.1759 16.0566C51.9241 16.0566 49.2881 18.6927 49.2881 21.9444C49.2881 25.1962 51.9241 27.8323 55.1759 27.8323Z"
    }));
  };

  // src/rgd/common/icons/Sixteen/Sixteen.jsx
  var import_react36 = __toModule(require_react());
  var StyledSixteen = ut.svg`
  &.sixteen {
    fill: none;
    height: 97;
    viewBox: 0 0 208 97;
    width: 208;
  }

  & .path {
    stroke: #BEBEBE;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }
`;
  var Sixteen = ({ className }) => {
    return /* @__PURE__ */ import_react36.default.createElement(StyledSixteen, {
      className: `sixteen ${className}`,
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ import_react36.default.createElement("path", {
      className: "path",
      d: "M108.289 29.0713H155.792L200.395 73.6714C202.217 75.4924 204.687 76.5153 207.263 76.5152H207.64"
    }), /* @__PURE__ */ import_react36.default.createElement("path", {
      className: "path",
      d: "M155.793 47.9712V29.0713"
    }), /* @__PURE__ */ import_react36.default.createElement("path", {
      className: "path",
      d: "M108.292 29.071L120.371 16.9922"
    }), /* @__PURE__ */ import_react36.default.createElement("path", {
      className: "path",
      d: "M95.99 16.7685L101.863 10.8924V0.80957"
    }), /* @__PURE__ */ import_react36.default.createElement("path", {
      className: "path",
      d: "M51.5795 74.124L70.3321 92.8796C71.2345 93.7816 72.3059 94.497 73.4848 94.985C74.6638 95.4729 75.9273 95.7238 77.2032 95.7234H86.4883"
    }), /* @__PURE__ */ import_react36.default.createElement("path", {
      className: "path",
      d: "M108.292 29.0706L81.5615 55.7983V70.6473L78.0848 74.1241H51.5896L48.1129 70.6473V53.1517L45.2161 50.2549H37.5148L15.8889 28.629C14.0655 26.8086 11.5944 25.7859 9.01786 25.7852H0.0595703"
    }), /* @__PURE__ */ import_react36.default.createElement("path", {
      className: "path",
      d: "M45.2073 50.2548V41.8529L48.3278 38.7354"
    }), /* @__PURE__ */ import_react36.default.createElement("path", {
      className: "path",
      d: "M37.5054 50.2559V67.8869"
    }), /* @__PURE__ */ import_react36.default.createElement("path", {
      className: "path",
      d: "M72.1372 46.375L81.5606 55.7984H91.2755"
    }), /* @__PURE__ */ import_react36.default.createElement("path", {
      className: "path",
      d: "M108.292 29.0715V13.6072L115.119 6.78027"
    }), /* @__PURE__ */ import_react36.default.createElement("path", {
      className: "path",
      d: "M69.9069 61.7739V48.6029L79.3421 39.1677L76.3687 36.1943"
    }), /* @__PURE__ */ import_react36.default.createElement("path", {
      className: "path",
      d: "M98.8651 19.6455L85.5527 32.9579"
    }), /* @__PURE__ */ import_react36.default.createElement("path", {
      className: "path",
      d: "M108.292 29.0711L95.9898 16.7686H82.6421"
    }), /* @__PURE__ */ import_react36.default.createElement("path", {
      className: "path",
      d: "M140.99 14.2686L155.792 29.0705"
    }), /* @__PURE__ */ import_react36.default.createElement("path", {
      className: "path",
      d: "M17.6756 30.4223V17.6516L16.6069 16.583"
    }), /* @__PURE__ */ import_react36.default.createElement("path", {
      className: "path",
      d: "M108.292 34.9582C111.543 34.9582 114.18 32.3222 114.18 29.0704C114.18 25.8187 111.543 23.1826 108.292 23.1826C105.04 23.1826 102.404 25.8187 102.404 29.0704C102.404 32.3222 105.04 34.9582 108.292 34.9582Z",
      fill: "#E6E6E6",
      stroke: "#BEBEBE",
      strokeMiterlimit: "10",
      strokeWidth: "2.35512"
    }));
  };

  // src/rgd/common/icons/Thirteen/Thirteen.jsx
  var import_react37 = __toModule(require_react());
  var StyledThirteen = ut.svg`
  & .path {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }
`;
  var Thirteen = ({ className }) => {
    return /* @__PURE__ */ import_react37.default.createElement(StyledThirteen, {
      className: `thirteen ${className}`,
      fill: "none",
      height: "164",
      viewBox: "0 0 194 164",
      width: "194",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ import_react37.default.createElement("path", {
      className: "path",
      d: "M38.7461 39.0723L59.8598 60.186C60.762 61.0885 61.8331 61.8045 63.0121 62.2929C64.191 62.7814 65.4547 63.0327 66.7308 63.0327H84.4561"
    }), /* @__PURE__ */ import_react37.default.createElement("path", {
      className: "path",
      d: "M0.540039 63.0352H15.863L71.7442 118.919C72.864 120.039 73.4931 121.558 73.4931 123.142C73.4931 124.726 72.864 126.245 71.7442 127.365L68.5059 130.604C67.9368 131.173 67.5494 131.899 67.3925 132.689C67.2356 133.479 67.3163 134.297 67.6244 135.041C67.9324 135.785 68.4541 136.422 69.1234 136.869C69.7927 137.317 70.5797 137.556 71.385 137.557H87.3763C88.6579 137.561 89.9277 137.312 91.1125 136.824C92.2973 136.335 93.3737 135.617 94.2798 134.71L107.492 121.492C108.395 120.589 109.468 119.872 110.648 119.384C111.829 118.895 113.094 118.644 114.372 118.646H146.46C147.738 118.646 149.004 118.395 150.184 117.906C151.365 117.417 152.437 116.7 153.34 115.796"
    }), /* @__PURE__ */ import_react37.default.createElement("path", {
      className: "path",
      d: "M126.957 118.654H117.207C114.631 118.654 112.16 119.678 110.338 121.5C108.516 123.322 107.492 125.793 107.492 128.369V163.929"
    }), /* @__PURE__ */ import_react37.default.createElement("path", {
      className: "path",
      d: "M193.505 1.77344L191.966 1.77344C190.69 1.77301 189.427 2.02395 188.248 2.51189C187.069 2.99984 185.997 3.71525 185.095 4.61726L129.53 60.1823C128.628 61.0858 127.556 61.8025 126.377 62.2914C125.197 62.7804 123.933 63.0321 122.656 63.032H15.8633"
    }), /* @__PURE__ */ import_react37.default.createElement("path", {
      className: "path",
      d: "M71.7471 127.364L84.1115 115"
    }), /* @__PURE__ */ import_react37.default.createElement("path", {
      className: "path",
      d: "M6.39772 63.0352L2.5 66.9329"
    }), /* @__PURE__ */ import_react37.default.createElement("path", {
      className: "path",
      d: "M68.7237 121.744C71.9755 121.744 74.6115 119.108 74.6115 115.857C74.6115 112.605 71.9755 109.969 68.7237 109.969C65.472 109.969 62.8359 112.605 62.8359 115.857C62.8359 119.108 65.472 121.744 68.7237 121.744Z",
      fill: "#E6E6E6",
      stroke: "#BEBEBE",
      strokeMiterlimit: "10",
      strokeWidth: "2.35512"
    }));
  };

  // src/rgd/common/icons/ThirtyOne/ThirtyOne.jsx
  var import_react38 = __toModule(require_react());
  var StyledThirtyOne = ut.svg`
  .path {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }
`;
  var ThirtyOne = ({ className }) => {
    return /* @__PURE__ */ import_react38.default.createElement(StyledThirtyOne, {
      className: `thirty-one ${className}`,
      fill: "none",
      height: "77",
      viewBox: "0 0 91 77",
      width: "91",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ import_react38.default.createElement("path", {
      className: "path",
      d: "M19.8794 15.1335L23.047 11.9658"
    }), /* @__PURE__ */ import_react38.default.createElement("path", {
      className: "path",
      d: "M38.394 32.5801L51.3384 19.6387H58.5303L62.7195 23.8249H68.4395"
    }), /* @__PURE__ */ import_react38.default.createElement("path", {
      className: "path",
      d: "M25.3342 29.5977V41.2526L14.2593 52.3276"
    }), /* @__PURE__ */ import_react38.default.createElement("path", {
      className: "path",
      d: "M20.5029 28.976L22.6078 26.8711"
    }), /* @__PURE__ */ import_react38.default.createElement("path", {
      className: "path",
      d: "M38.3934 32.5801V40.5169L23.303 55.6073L23.3 70.5564"
    }), /* @__PURE__ */ import_react38.default.createElement("path", {
      className: "path",
      d: "M46.0866 57.0376V54.8473L55.0596 45.8743V23.3594L40.9023 9.20215"
    }), /* @__PURE__ */ import_react38.default.createElement("path", {
      className: "path",
      d: "M74.8182 54.3907L68.4387 48.0112V13.7354"
    }), /* @__PURE__ */ import_react38.default.createElement("path", {
      className: "path",
      d: "M56.9811 75.6488L55.3738 74.0414L55.3767 69.1781L61.7503 62.8045V34.967L65.227 31.4902H68.4388"
    }), /* @__PURE__ */ import_react38.default.createElement("path", {
      className: "path",
      d: "M89.4878 47.0166L88.3985 48.1058H76.4492L61.7503 62.8048L47.072 48.1265H14.2593"
    }), /* @__PURE__ */ import_react38.default.createElement("path", {
      className: "path",
      d: "M40.9017 48.1055L33.4036 55.6066"
    }), /* @__PURE__ */ import_react38.default.createElement("path", {
      className: "path",
      d: "M33.4035 55.6064L28.7139 60.2961"
    }), /* @__PURE__ */ import_react38.default.createElement("path", {
      className: "path",
      d: "M38.0932 60.2961L33.4036 55.6064"
    }), /* @__PURE__ */ import_react38.default.createElement("path", {
      className: "path",
      d: "M51.2548 0.75V3.67626L25.3338 29.5973L22.6077 26.8712V17.86L19.8787 15.1339L8.94214 26.0676"
    }), /* @__PURE__ */ import_react38.default.createElement("path", {
      className: "path",
      d: "M33.047 17.0605L38.3931 22.4067V32.5808"
    }), /* @__PURE__ */ import_react38.default.createElement("path", {
      className: "path",
      d: "M4.43618 6.32031V13.8596L0.968262 17.3276"
    }), /* @__PURE__ */ import_react38.default.createElement("path", {
      className: "path",
      d: "M12.7925 22.2158H5.1001"
    }), /* @__PURE__ */ import_react38.default.createElement("path", {
      className: "path",
      d: "M4.43567 13.8584L12.7934 22.2161"
    }), /* @__PURE__ */ import_react38.default.createElement("path", {
      className: "path",
      d: "M8.82263 12.2129H0.0498047"
    }), /* @__PURE__ */ import_react38.default.createElement("path", {
      className: "path",
      d: "M48.0932 36.7515V32.6889V28.6264L45.2229 25.7531L42.3496 22.8799"
    }), /* @__PURE__ */ import_react38.default.createElement("path", {
      className: "path",
      d: "M72.6812 29.3736V23.2503L57.4995 8.06854V0.75"
    }), /* @__PURE__ */ import_react38.default.createElement("path", {
      className: "path",
      d: "M66.2689 5.43066L60.5665 11.1359"
    }), /* @__PURE__ */ import_react38.default.createElement("path", {
      className: "path",
      d: "M38.3939 38.467C41.6457 38.467 44.2817 35.831 44.2817 32.5792C44.2817 29.3275 41.6457 26.6914 38.3939 26.6914C35.1422 26.6914 32.5061 29.3275 32.5061 32.5792C32.5061 35.831 35.1422 38.467 38.3939 38.467Z",
      fill: "#E6E6E6",
      stroke: "#BEBEBE",
      strokeMiterlimit: "10",
      strokeWidth: "2.35512"
    }));
  };

  // src/rgd/common/icons/Three/Three.jsx
  var import_react39 = __toModule(require_react());
  var StyledThree = ut.svg`
  .path {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }
`;
  var Three = ({ className }) => {
    return /* @__PURE__ */ import_react39.default.createElement(StyledThree, {
      className: `three ${className}`,
      fill: "none",
      height: "181",
      viewBox: "0 0 192 181",
      width: "192",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M86.9126 111.541V79.3379"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M49.5811 157.787L44.2939 163.074L32.9598 151.74L25.7325 158.967"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M55.021 163.228L38.3762 146.583"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M44.7267 174.037L20.9989 150.307L20.9959 140.082L8.16344 127.25H0"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M55.0215 146.582H18.2286L7.37153 135.725H0"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M73.9035 165.465L14.6368 106.201"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M73.939 118.756H64.4802"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M70.2886 138.323H75.6877L78.8818 135.132"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M61.3684 91.7734L61.6334 92.0384C62.5359 92.9406 63.2519 94.0117 63.7403 95.1907C64.2288 96.3697 64.4802 97.6333 64.4801 98.9095V131.204L70.2826 137.012V169.066L65.3103 174.038"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M49.1339 85.2266L15.5881 118.775H2.06091"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M55.0222 91.1143L47.4976 98.6389V123.109"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M64.4799 131.204L60.8118 134.872H55.0211"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M79.9471 79.5068L74.2271 85.2268H55.0211"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M55.0211 180.983V85.4268"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M55.0217 85.4263H41.2973L38.3622 82.4912"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M44.5407 82.1818L41.6733 79.3174"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M55.0211 79.3379H46.6898L39.2035 87.519H34.8701L31.1902 91.1989"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M55.0211 79.3379H89.5914"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M66.797 79.3379L60.9092 85.2257"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M55.0216 85.2266L38.3944 101.854V113.98L16.6478 135.726H7.37159L0.998047 142.1"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M59.0544 89.46L71.0921 101.498C71.9946 102.4 72.7106 103.471 73.199 104.65C73.6875 105.829 73.9388 107.093 73.9388 108.369V130.189L92.244 148.491"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M70.2886 169.064L75.2608 174.037"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M75.2608 154.425L70.2886 159.397"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M20.9992 150.308L17.9052 153.405"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M73.9392 108.368H62.243L47.5058 123.108L29.3802 104.979"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M130.25 92.2856V73.0119C130.25 70.277 131.705 66.7531 133.636 64.819L190.983 7.45703"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M180.811 17.6393L168.538 5.36914H157.599"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M168.538 5.36967V0"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M166.133 32.2861L170.944 37.0965"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M166.63 22.2119L171.441 27.0223"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M94.8735 85.4268V94.282H104.173"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M133.635 64.8193L86.9125 111.542H73.9034"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M152.238 46.2199L133.185 27.1641"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M138.699 59.7551L119.646 40.7021"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M160.86 37.591L142.022 18.7529"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M119.31 60.9863L94.8729 85.4266H86.9126"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M122.222 76.2326L103.169 57.1797"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M104.847 75.4499L99.4447 70.0479"
    }), /* @__PURE__ */ import_react39.default.createElement("path", {
      className: "path",
      d: "M55.021 91.1135C58.2727 91.1135 60.9088 88.4774 60.9088 85.2257C60.9088 81.974 58.2727 79.3379 55.021 79.3379C51.7692 79.3379 49.1332 81.974 49.1332 85.2257C49.1332 88.4774 51.7692 91.1135 55.021 91.1135Z",
      fill: "#E6E6E6",
      stroke: "#BEBEBE",
      strokeMiterlimit: "10",
      strokeWidth: "2.35512"
    }));
  };

  // src/rgd/common/icons/Twelve/Twelve.jsx
  var import_react40 = __toModule(require_react());
  var StyledTwelve = ut.svg`
  & .path {
    stroke: #bebebe;
    stroke-miterlimit: 10;
    stroke-width: 2.35512;
  }
`;
  var Twelve = ({ className }) => {
    return /* @__PURE__ */ import_react40.default.createElement(StyledTwelve, {
      className: `twelve ${className}`,
      fill: "none",
      height: "191",
      viewBox: "0 0 292 191",
      width: "292",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ import_react40.default.createElement("path", {
      className: "path",
      d: "M273.92 96.7953V46.3839C273.92 43.808 272.897 41.3376 271.076 39.5158L262.766 31.1934"
    }), /* @__PURE__ */ import_react40.default.createElement("path", {
      className: "path",
      d: "M290.238 85.031V62.7162C290.238 61.44 289.986 60.1764 289.498 58.9974C289.009 57.8185 288.294 56.7473 287.391 55.8451L244.846 13.2998V0.953125"
    }), /* @__PURE__ */ import_react40.default.createElement("path", {
      className: "path",
      d: "M70.6944 71.1239V54.5468L27.4072 12.499"
    }), /* @__PURE__ */ import_react40.default.createElement("path", {
      className: "path",
      d: "M205.289 88.6755V54.5469"
    }), /* @__PURE__ */ import_react40.default.createElement("path", {
      className: "path",
      d: "M24.0049 54.4404L217.326 54.4404C219.67 54.44 221.991 54.9013 224.156 55.7979C226.321 56.6945 228.289 58.0088 229.947 59.6659L242.078 71.7977C243.9 73.6198 246.37 74.6437 248.946 74.6444H252.341"
    }), /* @__PURE__ */ import_react40.default.createElement("path", {
      className: "path",
      d: "M0.570688 44.7715L2.10952 44.7715C3.38546 44.7711 4.64897 45.022 5.82792 45.5099C7.00687 45.9979 8.07811 46.7133 8.98054 47.6153L13.4625 52.0973C14.9628 53.5976 16.9976 54.4404 19.1194 54.4404H25.0049"
    }), /* @__PURE__ */ import_react40.default.createElement("path", {
      className: "path",
      d: "M163.529 108.105H149.369"
    }), /* @__PURE__ */ import_react40.default.createElement("path", {
      className: "path",
      d: "M290.314 72.1934H273.923"
    }), /* @__PURE__ */ import_react40.default.createElement("path", {
      className: "path",
      d: "M233.577 152.378L232.399 153.555C231.497 154.458 230.425 155.173 229.246 155.661C228.067 156.149 226.804 156.4 225.528 156.399H218.804C217.528 156.4 216.265 156.149 215.086 155.661C213.907 155.173 212.835 154.458 211.933 153.555L211.462 153.082"
    }), /* @__PURE__ */ import_react40.default.createElement("path", {
      className: "path",
      d: "M206.846 162.78H220.788"
    }), /* @__PURE__ */ import_react40.default.createElement("path", {
      className: "path",
      d: "M178.858 96.9863V106.289L184.166 111.594"
    }), /* @__PURE__ */ import_react40.default.createElement("path", {
      className: "path",
      d: "M290.252 67.9182L285.139 62.8047"
    }), /* @__PURE__ */ import_react40.default.createElement("path", {
      className: "path",
      d: "M290.252 76.4668L285.139 81.5774"
    }), /* @__PURE__ */ import_react40.default.createElement("path", {
      className: "path",
      d: "M247.042 174.643L241.558 169.161L247.042 163.677"
    }), /* @__PURE__ */ import_react40.default.createElement("path", {
      className: "path",
      d: "M241.557 169.161H220.788"
    }), /* @__PURE__ */ import_react40.default.createElement("path", {
      className: "path",
      d: "M163.53 54.5469V108.105H163.716C166.292 108.105 168.763 107.081 170.584 105.259L184.323 91.5223C185.226 90.6182 186.299 89.9011 187.479 89.4121C188.66 88.9231 189.925 88.6718 191.203 88.6726H211.074C213.651 88.6726 216.122 89.6962 217.944 91.518C219.766 93.3399 220.789 95.8109 220.789 98.3875V181.921L215.999 186.708"
    }), /* @__PURE__ */ import_react40.default.createElement("path", {
      className: "path",
      d: "M228.286 169.161V179.609"
    }), /* @__PURE__ */ import_react40.default.createElement("path", {
      className: "path",
      d: "M235.782 169.161V179.609"
    }), /* @__PURE__ */ import_react40.default.createElement("path", {
      className: "path",
      d: "M220.788 181.927L228.286 189.425"
    }), /* @__PURE__ */ import_react40.default.createElement("path", {
      className: "path",
      d: "M205.289 94.5647C208.541 94.5647 211.177 91.9286 211.177 88.6769C211.177 85.4251 208.541 82.7891 205.289 82.7891C202.037 82.7891 199.401 85.4251 199.401 88.6769C199.401 91.9286 202.037 94.5647 205.289 94.5647Z",
      fill: "#E6E6E6",
      stroke: "#BEBEBE",
      strokeMiterlimit: "10",
      strokeWidth: "2.35512"
    }));
  };

  // src/rgd/common/icons/Two/Two.jsx
  var import_react41 = __toModule(require_react());
  var StyledTwo = ut.svg`
  .rect {
    fill: #e6e6e6;
  }

  .path {
    fill: #f0f0f0;
  }
`;
  var Two = ({ className }) => {
    return /* @__PURE__ */ import_react41.default.createElement(StyledTwo, {
      className: `two ${className}`,
      fill: "none",
      height: "28",
      viewBox: "0 0 202 28",
      width: "202",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ import_react41.default.createElement("g", {
      className: "g",
      clipPath: "url(#clip0_1186_14945)"
    }, /* @__PURE__ */ import_react41.default.createElement("rect", {
      className: "rect",
      fill: "#E6E6E6",
      height: "27.6377",
      transform: "matrix(-1 0 0 1 209.648 0.15625)",
      width: "208.763"
    }), /* @__PURE__ */ import_react41.default.createElement("g", {
      className: "g",
      filter: "url(#filter0_f_1186_14945)"
    }, /* @__PURE__ */ import_react41.default.createElement("path", {
      className: "path",
      clipRule: "evenodd",
      d: "M254.687 81.5507C265.63 65.7976 288.778 59.4741 293.792 40.9684C299.083 21.4356 291.802 0.198123 281.398 -17.0445C270.568 -34.9931 255.492 -54.9036 234.649 -57.0499C213.51 -59.2266 199.763 -33.5414 179.317 -27.556C161.734 -22.4083 137.834 -38.8482 125.608 -25.1275C113.028 -11.0088 132.115 11.9252 127.749 30.3189C123.432 48.4991 99.5434 59.752 101.042 78.3457C102.524 96.7177 119.942 109.814 135.002 120.29C149.501 130.377 166.738 135.225 184.389 136.327C201.662 137.405 220.668 137.181 234.382 126.495C247.605 116.191 245.115 95.3318 254.687 81.5507Z",
      fill: "#F0F0F0",
      fillRule: "evenodd"
    })), /* @__PURE__ */ import_react41.default.createElement("g", {
      className: "g",
      filter: "url(#filter1_f_1186_14945)"
    }, /* @__PURE__ */ import_react41.default.createElement("path", {
      className: "path",
      clipRule: "evenodd",
      d: "M94.5901 51.0201C95.8319 39.9146 84.047 32.1508 79.4615 22.0004C76.9032 16.3372 75.2888 10.6728 73.6519 4.67155C70.9284 -5.31315 73.8678 -17.555 66.658 -24.9401C59.1634 -32.617 46.8041 -35.999 36.328 -33.5601C25.9021 -31.1328 20.1875 -20.3102 12.8979 -12.4245C6.08136 -5.05042 -2.50295 1.3549 -4.94902 11.0927C-7.40074 20.8529 -6.58129 32.4241 -0.33256 40.2457C5.71033 47.8097 18.6319 44.3126 26.3013 50.2092C33.8152 55.9863 33.9381 68.6127 42.3185 73.0382C51.7147 78.0001 63.6856 79.286 73.5189 75.144C83.5402 70.9228 93.38 61.8414 94.5901 51.0201Z",
      fill: "white",
      fillRule: "evenodd"
    })), /* @__PURE__ */ import_react41.default.createElement("g", {
      className: "g",
      filter: "url(#filter2_f_1186_14945)"
    }, /* @__PURE__ */ import_react41.default.createElement("path", {
      className: "path",
      clipRule: "evenodd",
      d: "M135.788 -76.6812C158.999 -106.897 225.98 -107.989 223.661 -145.931C221.321 -184.213 161.084 -185.397 127.985 -204.342C109.343 -215.012 90.0734 -221.811 71.6887 -232.916C48.5046 -246.921 33.131 -280.181 6.06298 -277.993C-20.3524 -275.857 -30.918 -241.939 -49.7424 -223.098C-68.0442 -204.781 -94.0126 -193.051 -103.055 -168.779C-112.47 -143.51 -107.7 -115.314 -99.4133 -89.7739C-91.0379 -63.9615 -77.1704 -39.7588 -55.8108 -23.1723C-34.5342 -6.65025 -7.32766 -2.66276 19.1681 2.3088C48.2403 7.76379 81.4076 23.8786 106.037 7.19624C131.075 -9.76234 117.341 -52.6656 135.788 -76.6812Z",
      fill: "#E21A1A",
      fillRule: "evenodd"
    })), /* @__PURE__ */ import_react41.default.createElement("g", {
      className: "g",
      filter: "url(#filter3_f_1186_14945)"
    }, /* @__PURE__ */ import_react41.default.createElement("path", {
      className: "path",
      clipRule: "evenodd",
      d: "M8.78116 52.8447C21.2838 38.9094 20.0992 16.3119 15.2891 -1.83473C10.8591 -18.5473 -6.98893 -27.182 -16.3023 -41.7851C-26.3781 -57.5837 -23.5848 -84.9805 -41.4279 -90.7654C-59.698 -96.6886 -73.4517 -70.7931 -92.0868 -66.3548C-109.343 -62.245 -132.885 -79.7792 -144.294 -66.2659C-156.241 -52.1144 -132.955 -29.9538 -137.892 -12.0998C-143.132 6.85164 -171.391 14.7653 -172.138 34.432C-172.867 53.6508 -159.712 75.7915 -141.469 82.1523C-122.287 88.8407 -104.449 68.365 -84.4606 65.0025C-71.4298 62.8105 -58.6991 67.7331 -45.5933 66.0243C-26.7057 63.5615 -3.89381 66.9721 8.78116 52.8447Z",
      fill: "#E6E6E6",
      fillRule: "evenodd"
    })), /* @__PURE__ */ import_react41.default.createElement("g", {
      className: "g",
      filter: "url(#filter4_f_1186_14945)"
    }, /* @__PURE__ */ import_react41.default.createElement("path", {
      className: "path",
      clipRule: "evenodd",
      d: "M151.281 75.5832C159.772 64.5312 184.282 64.1375 183.43 50.2571C182.571 36.2522 160.528 35.8138 148.414 28.8801C141.592 24.9752 134.54 22.4864 127.812 18.422C119.327 13.2966 113.698 1.12781 103.793 1.92612C94.1273 2.70518 90.264 15.1124 83.3772 22.0033C76.6816 28.703 67.18 32.9918 63.873 41.8707C60.4303 51.114 62.1779 61.4293 65.2125 70.7733C68.2795 80.217 73.3562 89.0724 81.1737 95.142C88.9608 101.188 98.9169 102.649 108.613 104.47C119.252 106.468 131.39 112.366 140.401 106.266C149.562 100.064 144.532 84.3673 151.281 75.5832Z",
      fill: "#E21A1A",
      fillRule: "evenodd"
    }))), /* @__PURE__ */ import_react41.default.createElement("defs", {
      className: "defs"
    }, /* @__PURE__ */ import_react41.default.createElement("filter", {
      className: "filter",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      height: "348.398",
      id: "filter0_f_1186_14945",
      width: "349.052",
      x: "23.7425",
      y: "-134.413"
    }, /* @__PURE__ */ import_react41.default.createElement("feFlood", {
      className: "fe-flood",
      floodOpacity: "0",
      result: "BackgroundImageFix"
    }), /* @__PURE__ */ import_react41.default.createElement("feBlend", {
      className: "fe-blend",
      in: "SourceGraphic",
      in2: "BackgroundImageFix",
      mode: "normal",
      result: "shape"
    }), /* @__PURE__ */ import_react41.default.createElement("feGaussianBlur", {
      className: "fe-gaussian-blur",
      result: "effect1_foregroundBlur_1186_14945",
      stdDeviation: "38.6161"
    })), /* @__PURE__ */ import_react41.default.createElement("filter", {
      className: "filter",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      height: "266.427",
      id: "filter1_f_1186_14945",
      width: "255.376",
      x: "-83.4626",
      y: "-111.573"
    }, /* @__PURE__ */ import_react41.default.createElement("feFlood", {
      className: "fe-flood",
      floodOpacity: "0",
      result: "BackgroundImageFix"
    }), /* @__PURE__ */ import_react41.default.createElement("feBlend", {
      className: "fe-blend",
      in: "SourceGraphic",
      in2: "BackgroundImageFix",
      mode: "normal",
      result: "shape"
    }), /* @__PURE__ */ import_react41.default.createElement("feGaussianBlur", {
      className: "fe-gaussian-blur",
      result: "effect1_foregroundBlur_1186_14945",
      stdDeviation: "38.6161"
    })), /* @__PURE__ */ import_react41.default.createElement("filter", {
      className: "filter",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      height: "447.12",
      id: "filter2_f_1186_14945",
      width: "486.414",
      x: "-185.463",
      y: "-355.328"
    }, /* @__PURE__ */ import_react41.default.createElement("feFlood", {
      className: "fe-flood",
      floodOpacity: "0",
      result: "BackgroundImageFix"
    }), /* @__PURE__ */ import_react41.default.createElement("feBlend", {
      className: "fe-blend",
      in: "SourceGraphic",
      in2: "BackgroundImageFix",
      mode: "normal",
      result: "shape"
    }), /* @__PURE__ */ import_react41.default.createElement("feGaussianBlur", {
      className: "fe-gaussian-blur",
      result: "effect1_foregroundBlur_1186_14945",
      stdDeviation: "38.6161"
    })), /* @__PURE__ */ import_react41.default.createElement("filter", {
      className: "filter",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      height: "329.591",
      id: "filter3_f_1186_14945",
      width: "345.316",
      x: "-249.398",
      y: "-168.874"
    }, /* @__PURE__ */ import_react41.default.createElement("feFlood", {
      className: "fe-flood",
      floodOpacity: "0",
      result: "BackgroundImageFix"
    }), /* @__PURE__ */ import_react41.default.createElement("feBlend", {
      className: "fe-blend",
      in: "SourceGraphic",
      in2: "BackgroundImageFix",
      mode: "normal",
      result: "shape"
    }), /* @__PURE__ */ import_react41.default.createElement("feGaussianBlur", {
      className: "fe-gaussian-blur",
      result: "effect1_foregroundBlur_1186_14945",
      stdDeviation: "38.6161"
    })), /* @__PURE__ */ import_react41.default.createElement("filter", {
      className: "filter",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      height: "261.534",
      id: "filter4_f_1186_14945",
      width: "275.935",
      x: "-15.2507",
      y: "-75.3434"
    }, /* @__PURE__ */ import_react41.default.createElement("feFlood", {
      className: "fe-flood",
      floodOpacity: "0",
      result: "BackgroundImageFix"
    }), /* @__PURE__ */ import_react41.default.createElement("feBlend", {
      className: "fe-blend",
      in: "SourceGraphic",
      in2: "BackgroundImageFix",
      mode: "normal",
      result: "shape"
    }), /* @__PURE__ */ import_react41.default.createElement("feGaussianBlur", {
      className: "fe-gaussian-blur",
      result: "effect1_foregroundBlur_1186_14945",
      stdDeviation: "38.6161"
    })), /* @__PURE__ */ import_react41.default.createElement("clipPath", {
      className: "clip-path",
      id: "clip0_1186_14945"
    }, /* @__PURE__ */ import_react41.default.createElement("rect", {
      className: "rect",
      fill: "white",
      height: "27.6377",
      transform: "matrix(-1 0 0 1 209.648 0.15625)",
      width: "208.763"
    }))));
  };

  // src/rgd/common/screens/RgdL/sections/Map/sections/MapVector/sections/OverlapWrapper/OverlapWrapper.jsx
  var StyledOverlapWrapper = ut.div`
  height: 447px;
  left: 23px;
  position: absolute;
  top: 184px;
  width: 1121px;

  & .overlap-4 {
    height: 447px;
    position: relative;
    width: 1122px;

    & .overlap-5 {
      height: 447px;
      left: 14px;
      position: absolute;
      top: 0;
      width: 1108px;

      & .instance-3 {
        height: 181px !important;
        left: 69px !important;
        position: absolute !important;
        top: 0 !important;
        width: 192px !important;
      }

      & .instance-18 {
        height: 102px !important;
        left: 43px !important;
        position: absolute !important;
        top: 155px !important;
        width: 99px !important;
      }

      & .instance-5 {
        height: 102px !important;
        left: 131px !important;
        position: absolute !important;
        top: 192px !important;
        width: 147px !important;
      }

      & .instance-2 {
        height: 131px !important;
        left: 140px !important;
        position: absolute !important;
        top: 92px !important;
        width: 243px !important;
      }

      & .instance-4 {
        height: 143px !important;
        left: 0 !important;
        position: absolute !important;
        top: 302px !important;
        width: 84px !important;
      }

      & .instance-31 {
        height: 76px !important;
        left: 43px !important;
        position: absolute !important;
        top: 232px !important;
        width: 90px !important;
      }

      & .instance-17 {
        height: 117px !important;
        left: 66px !important;
        position: absolute !important;
        top: 285px !important;
        width: 107px !important;
      }

      & .instance-1 {
        height: 102px !important;
        left: 117px !important;
        position: absolute !important;
        top: 240px !important;
        width: 138px !important;
      }

      & .instance-15 {
        height: 168px !important;
        left: 254px !important;
        position: absolute !important;
        top: 195px !important;
        width: 211px !important;
      }

      & .instance-16 {
        height: 96px !important;
        left: 173px !important;
        position: absolute !important;
        top: 303px !important;
        width: 208px !important;
      }

      & .instance-14 {
        height: 118px !important;
        left: 380px !important;
        position: absolute !important;
        top: 325px !important;
        width: 166px !important;
      }

      & .instance-15-instance {
        height: 93px !important;
        left: 535px !important;
        position: absolute !important;
        top: 323px !important;
        width: 92px !important;
      }

      & .instance-13 {
        height: 163px !important;
        left: 624px !important;
        position: absolute !important;
        top: 284px !important;
        width: 193px !important;
      }

      & .instance-4-instance {
        height: 113px !important;
        left: 776px !important;
        position: absolute !important;
        top: 312px !important;
        width: 190px !important;
      }

      & .instance-12 {
        height: 189px !important;
        left: 817px !important;
        position: absolute !important;
        top: 242px !important;
        width: 291px !important;
      }
    }

    & .instance-19 {
      height: 31px !important;
      left: 0 !important;
      position: absolute !important;
      top: 60px !important;
      width: 45px !important;
    }
  }
`;
  var OverlapWrapper = () => {
    return /* @__PURE__ */ import_react42.default.createElement(StyledOverlapWrapper, null, /* @__PURE__ */ import_react42.default.createElement("div", {
      className: "overlap-4"
    }, /* @__PURE__ */ import_react42.default.createElement("div", {
      className: "overlap-5"
    }, /* @__PURE__ */ import_react42.default.createElement(Three, {
      className: "instance-3"
    }), /* @__PURE__ */ import_react42.default.createElement(Eighteen, {
      className: "instance-18"
    }), /* @__PURE__ */ import_react42.default.createElement(IconComponentNode, {
      className: "instance-5"
    }), /* @__PURE__ */ import_react42.default.createElement(Two, {
      className: "instance-2"
    }), /* @__PURE__ */ import_react42.default.createElement(Four, {
      className: "instance-4"
    }), /* @__PURE__ */ import_react42.default.createElement(ThirtyOne, {
      className: "instance-31"
    }), /* @__PURE__ */ import_react42.default.createElement(Seventeen, {
      className: "instance-17"
    }), /* @__PURE__ */ import_react42.default.createElement(One, {
      className: "instance-1"
    }), /* @__PURE__ */ import_react42.default.createElement(Fifteen, {
      className: "instance-15"
    }), /* @__PURE__ */ import_react42.default.createElement(Sixteen, {
      className: "instance-16"
    }), /* @__PURE__ */ import_react42.default.createElement(Fourteen, {
      className: "instance-14"
    }), /* @__PURE__ */ import_react42.default.createElement(NamecandidateName15Score101, {
      className: "instance-15-instance"
    }), /* @__PURE__ */ import_react42.default.createElement(Thirteen, {
      className: "instance-13"
    }), /* @__PURE__ */ import_react42.default.createElement(NamecandidateName4Score101, {
      className: "instance-4-instance"
    }), /* @__PURE__ */ import_react42.default.createElement(Twelve, {
      className: "instance-12"
    })), /* @__PURE__ */ import_react42.default.createElement(Nineteen, {
      className: "instance-19",
      color: "#BEBEBE"
    })));
  };

  // src/rgd/common/screens/RgdL/sections/Map/sections/MapVector/sections/View/View.jsx
  var import_react43 = __toModule(require_react());
  var StyledView = ut.div`
  height: 560px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1247px;

  & .overlap-group-3 {
    height: 560px;
    position: relative;
  }

  & .image-5 {
    height: 32px;
    left: 23px;
    position: absolute;
    top: 206px;
    width: 56px;
  }

  & .image-6 {
    height: 76px;
    left: 445px;
    position: absolute;
    top: 141px;
    width: 113px;
  }

  & .subtract {
    height: 560px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1239px;
  }

  & .image-7 {
    height: 100px;
    left: 1153px;
    position: absolute;
    top: 353px;
    width: 93px;
  }
`;
  var View = () => {
    return /* @__PURE__ */ import_react43.default.createElement(StyledView, null, /* @__PURE__ */ import_react43.default.createElement("div", {
      className: "overlap-group-3"
    }, /* @__PURE__ */ import_react43.default.createElement("img", {
      className: "image-5",
      alt: "Image",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/1-4.svg"
    }), /* @__PURE__ */ import_react43.default.createElement("img", {
      className: "image-6",
      alt: "Image",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/image-6.svg"
    }), /* @__PURE__ */ import_react43.default.createElement("img", {
      className: "subtract",
      alt: "Subtract",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/subtract.svg"
    }), /* @__PURE__ */ import_react43.default.createElement("img", {
      className: "image-7",
      alt: "Image",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/image-4.svg"
    })));
  };

  // src/rgd/common/screens/RgdL/sections/Map/sections/MapVector/sections/ViewWrapper/ViewWrapper.jsx
  var import_react45 = __toModule(require_react());

  // src/rgd/common/components/Component1846/Component1846.jsx
  var import_prop_types7 = __toModule(require_prop_types());
  var import_react44 = __toModule(require_react());
  var StyledComponent1846 = ut.div`
  & .div-3 {
    color: #ffffff;
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    left: 6px;
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    position: absolute;
    top: 4px;
  }

  &.prop-2-ten {
    height: 22px;
    width: 60px;
  }

  &.prop-2-fourteen {
    height: 23px;
    width: 54px;
  }

  &.prop-2-five {
    height: 23px;
    width: 39px;
  }

  &.prop-2-four {
    height: 22px;
    width: 57px;
  }

  &.prop-2-thirteen {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-45.svg);
    background-size: 100% 100%;
    height: 22px;
    position: relative;
    width: 48px;
  }

  &.prop-2-three {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-55.svg);
    background-size: 100% 100%;
    height: 22px;
    position: relative;
    width: 55px;
  }

  &.prop-2-nine {
    height: 22px;
    width: 44px;
  }

  &.prop-2-eleven {
    height: 22px;
    width: 48px;
  }

  &.prop-2-one {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-57.svg);
    background-size: 100% 100%;
    height: 22px;
    position: relative;
    width: 49px;
  }

  &.prop-2-six {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-52.svg);
    background-size: 100% 100%;
    height: 22px;
    position: relative;
    width: 53px;
  }

  &.prop-2-sixteen {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-42.svg);
    background-size: 100% 100%;
    height: 22px;
    position: relative;
    width: 60px;
  }

  &.prop-2-fifteen {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-43.svg);
    background-size: 100% 100%;
    height: 22px;
    position: relative;
    width: 39px;
  }

  &.prop-2-two {
    height: 23px;
    width: 41px;
  }

  &.prop-2-twelve {
    height: 22px;
    width: 54px;
  }

  &.prop-2-seven {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-51.svg);
    background-size: 100% 100%;
    height: 22px;
    position: relative;
    width: 67px;
  }

  &.prop-2-eight {
    height: 23px;
    width: 52px;
  }

  &.prop-2-ten .div-5 {
    background-image: url(../img/vector-32.svg);
    background-size: 100% 100%;
    height: 558px;
    position: relative;
    width: 6250px;
  }

  &.prop-2-fourteen .div-5 {
    background-image: url(../img/vector-32.svg);
    background-size: 100% 100%;
    height: 558px;
    position: relative;
    width: 6250px;
  }

  &.prop-2-five .div-5 {
    background-image: url(../img/vector-32.svg);
    background-size: 100% 100%;
    height: 558px;
    position: relative;
    width: 6250px;
  }

  &.prop-2-four .div-5 {
    background-image: url(../img/vector-32.svg);
    background-size: 100% 100%;
    height: 558px;
    position: relative;
    width: 6250px;
  }

  &.prop-2-thirteen .div-5 {
    color: #ffffff;
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    left: 6px;
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    position: absolute;
    top: 4px;
    width: 37px;
  }

  &.prop-2-three .div-5 {
    color: #ffffff;
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    left: 6px;
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    position: absolute;
    top: 3px;
    width: 43px;
  }

  &.prop-2-nine .div-5 {
    background-image: url(../img/vector-32.svg);
    background-size: 100% 100%;
    height: 558px;
    position: relative;
    width: 6250px;
  }

  &.prop-2-eleven .div-5 {
    background-image: url(../img/vector-32.svg);
    background-size: 100% 100%;
    height: 558px;
    position: relative;
    width: 6250px;
  }

  &.prop-2-one .div-5 {
    color: #ffffff;
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    left: 6px;
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    position: absolute;
    top: 4px;
    width: 38px;
  }

  &.prop-2-six .div-5 {
    color: #ffffff;
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    left: 6px;
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    position: absolute;
    top: 3px;
    width: 42px;
  }

  &.prop-2-sixteen .div-5 {
    color: #ffffff;
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    left: 6px;
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    position: absolute;
    top: 4px;
    width: 48px;
  }

  &.prop-2-fifteen .div-5 {
    color: #ffffff;
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    left: 6px;
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    position: absolute;
    top: 3px;
    width: 28px;
  }

  &.prop-2-two .div-5 {
    background-image: url(../img/vector-32.svg);
    background-size: 100% 100%;
    height: 558px;
    position: relative;
    width: 6250px;
  }

  &.prop-2-twelve .div-5 {
    background-image: url(../img/vector-32.svg);
    background-size: 100% 100%;
    height: 558px;
    position: relative;
    width: 6250px;
  }

  &.prop-2-seven .div-5 {
    color: #ffffff;
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    left: 6px;
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    position: absolute;
    top: 4px;
    width: 55px;
  }

  &.prop-2-eight .div-5 {
    background-image: url(../img/vector-32.svg);
    background-size: 100% 100%;
    height: 558px;
    position: relative;
    width: 6250px;
  }

  &.prop-2-ten .div-3 {
    width: 47px;
  }

  &.prop-2-fourteen .div-3 {
    width: 43px;
  }

  &.prop-2-five .div-3 {
    width: 28px;
  }

  &.prop-2-four .div-3 {
    width: 46px;
  }

  &.prop-2-thirteen .div-3 {
    width: 28px;
  }

  &.prop-2-three .div-3 {
    width: 28px;
  }

  &.prop-2-nine .div-3 {
    width: 34px;
  }

  &.prop-2-eleven .div-3 {
    width: 36px;
  }

  &.prop-2-one .div-3 {
    width: 28px;
  }

  &.prop-2-six .div-3 {
    width: 28px;
  }

  &.prop-2-sixteen .div-3 {
    width: 28px;
  }

  &.prop-2-fifteen .div-3 {
    width: 28px;
  }

  &.prop-2-two .div-3 {
    width: 28px;
  }

  &.prop-2-twelve .div-3 {
    width: 42px;
  }

  &.prop-2-seven .div-3 {
    width: 28px;
  }

  &.prop-2-eight .div-3 {
    width: 40px;
  }
`;
  var Component1846 = ({ prop, className, overlapClassName }) => {
    return /* @__PURE__ */ import_react44.default.createElement(StyledComponent1846, {
      className: `component-1846 prop-2-${prop} ${className}`
    }, /* @__PURE__ */ import_react44.default.createElement("div", {
      className: `div-5 ${overlapClassName}`
    }, prop === "one" && /* @__PURE__ */ import_react44.default.createElement(import_react44.default.Fragment, null, "\u041A\u041B\u041D\u0413"), (prop === "eight" || prop === "eleven" || prop === "five" || prop === "four" || prop === "fourteen" || prop === "nine" || prop === "ten" || prop === "twelve" || prop === "two") && /* @__PURE__ */ import_react44.default.createElement("div", {
      className: "div-3"
    }, prop === "two" && /* @__PURE__ */ import_react44.default.createElement(import_react44.default.Fragment, null, "\u041E\u041A\u0422"), prop === "four" && /* @__PURE__ */ import_react44.default.createElement(import_react44.default.Fragment, null, "\u0413\u041E\u0420\u042C\u041A"), prop === "five" && /* @__PURE__ */ import_react44.default.createElement(import_react44.default.Fragment, null, "\u0421\u0415\u0412"), prop === "eight" && /* @__PURE__ */ import_react44.default.createElement(import_react44.default.Fragment, null, "\u041F\u0420\u0418\u0412"), prop === "nine" && /* @__PURE__ */ import_react44.default.createElement(import_react44.default.Fragment, null, "\u041A\u0411\u0428"), prop === "ten" && /* @__PURE__ */ import_react44.default.createElement(import_react44.default.Fragment, null, "\u0421\u0412\u0415\u0420\u0414"), prop === "eleven" && /* @__PURE__ */ import_react44.default.createElement(import_react44.default.Fragment, null, "\u042E-\u0423\u0420"), prop === "twelve" && /* @__PURE__ */ import_react44.default.createElement(import_react44.default.Fragment, null, "\u0417-\u0421\u0418\u0411"), prop === "fourteen" && /* @__PURE__ */ import_react44.default.createElement(import_react44.default.Fragment, null, "\u0412-\u0421\u0418\u0411")), prop === "three" && /* @__PURE__ */ import_react44.default.createElement(import_react44.default.Fragment, null, "\u041C\u041E\u0421\u041A"), prop === "six" && /* @__PURE__ */ import_react44.default.createElement(import_react44.default.Fragment, null, "\u0421-\u041A\u0410\u0412"), prop === "seven" && /* @__PURE__ */ import_react44.default.createElement(import_react44.default.Fragment, null, "\u042E-\u0412\u041E\u0421\u0422"), prop === "thirteen" && /* @__PURE__ */ import_react44.default.createElement(import_react44.default.Fragment, null, "\u041A\u0420\u0410\u0421"), prop === "fifteen" && /* @__PURE__ */ import_react44.default.createElement(import_react44.default.Fragment, null, "\u0417\u0410\u0411"), prop === "sixteen" && /* @__PURE__ */ import_react44.default.createElement(import_react44.default.Fragment, null, "\u0414\u0412\u041E\u0421\u0422")));
  };
  Component1846.propTypes = {
    prop: import_prop_types7.default.oneOf([
      "fourteen",
      "thirteen",
      "sixteen",
      "seven",
      "fifteen",
      "two",
      "ten",
      "twelve",
      "three",
      "nine",
      "four",
      "eleven",
      "one",
      "five",
      "eight",
      "six"
    ])
  };

  // src/rgd/common/screens/RgdL/sections/Map/sections/MapVector/sections/ViewWrapper/ViewWrapper.jsx
  var StyledViewWrapper = ut.div`
  height: 391px;
  left: 23px;
  position: absolute;
  top: 228px;
  width: 1031px;

  & .component-1846 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-17.svg) !important;
    left: 36px !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .component-1846-instance {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-16.svg) !important;
    height: 22px !important;
    width: unset !important;
  }

  & .design-component-instance-node {
    left: 71px !important;
    position: absolute !important;
    top: 25px !important;
  }

  & .view-6 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-15.svg) !important;
    left: 0 !important;
    position: absolute !important;
    top: 149px !important;
  }

  & .component-1846-2 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-14.svg) !important;
    left: 52px !important;
    position: absolute !important;
    top: 234px !important;
  }

  & .component-1846-3 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-13.svg) !important;
    left: 93px !important;
    position: absolute !important;
    top: 369px !important;
  }

  & .view-7 {
    left: 122px !important;
    position: absolute !important;
    top: 299px !important;
  }

  & .view-8 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-12.svg) !important;
    height: 22px !important;
    width: unset !important;
  }

  & .view-9 {
    left: 200px !important;
    position: absolute !important;
    top: 241px !important;
  }

  & .view-10 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-11.svg) !important;
    height: 22px !important;
    width: unset !important;
  }

  & .view-11 {
    left: 181px !important;
    position: absolute !important;
    top: 190px !important;
  }

  & .view-12 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-10.svg) !important;
    height: 22px !important;
    width: 58px !important;
  }

  & .view-13 {
    left: 202px !important;
    position: absolute !important;
    top: 130px !important;
  }

  & .view-14 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-9.svg) !important;
    height: 22px !important;
    width: unset !important;
  }

  & .view-15 {
    left: 319px !important;
    position: absolute !important;
    top: 255px !important;
  }

  & .view-16 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-8.svg) !important;
    height: 22px !important;
    width: unset !important;
  }

  & .component-1846-4 {
    left: 288px !important;
    position: absolute !important;
    top: 297px !important;
  }

  & .component-1846-5 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-7.svg) !important;
    height: 22px !important;
    width: unset !important;
  }

  & .component-1846-6 {
    left: 437px !important;
    position: absolute !important;
    top: 307px !important;
  }

  & .component-1846-7 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-6.svg) !important;
    height: 22px !important;
    width: unset !important;
  }

  & .view-17 {
    height: 22px;
    left: 580px;
    position: absolute;
    top: 328px;
    width: 48px;
  }

  & .overlap-6 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-5.svg);
    background-size: 100% 100%;
    height: 22px;
    position: relative;
  }

  & .text-wrapper-32 {
    color: #ffffff;
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    left: 6px;
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    position: absolute;
    top: 4px;
    width: 37px;
  }

  & .component-1846-8 {
    left: 642px !important;
    position: absolute !important;
    top: 351px !important;
  }

  & .component-1846-9 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-4.svg) !important;
    height: 22px !important;
    width: unset !important;
  }

  & .view-18 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-3.svg) !important;
    left: 755px !important;
    position: absolute !important;
    top: 328px !important;
  }

  & .view-19 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-2.svg) !important;
    left: 971px !important;
    position: absolute !important;
    top: 257px !important;
  }
`;
  var ViewWrapper = () => {
    return /* @__PURE__ */ import_react45.default.createElement(StyledViewWrapper, null, /* @__PURE__ */ import_react45.default.createElement(Component1846, {
      className: "component-1846",
      prop: "one"
    }), /* @__PURE__ */ import_react45.default.createElement(Component1846, {
      className: "design-component-instance-node",
      overlapClassName: "component-1846-instance",
      prop: "two"
    }), /* @__PURE__ */ import_react45.default.createElement(Component1846, {
      className: "view-6",
      prop: "three"
    }), /* @__PURE__ */ import_react45.default.createElement(Component1846, {
      className: "component-1846-2",
      prop: "seven"
    }), /* @__PURE__ */ import_react45.default.createElement(Component1846, {
      className: "component-1846-3",
      prop: "six"
    }), /* @__PURE__ */ import_react45.default.createElement(Component1846, {
      className: "view-7",
      overlapClassName: "view-8",
      prop: "eight"
    }), /* @__PURE__ */ import_react45.default.createElement(Component1846, {
      className: "view-9",
      overlapClassName: "view-10",
      prop: "nine"
    }), /* @__PURE__ */ import_react45.default.createElement(Component1846, {
      className: "view-11",
      overlapClassName: "view-12",
      prop: "four"
    }), /* @__PURE__ */ import_react45.default.createElement(Component1846, {
      className: "view-13",
      overlapClassName: "view-14",
      prop: "five"
    }), /* @__PURE__ */ import_react45.default.createElement(Component1846, {
      className: "view-15",
      overlapClassName: "view-16",
      prop: "ten"
    }), /* @__PURE__ */ import_react45.default.createElement(Component1846, {
      className: "component-1846-4",
      overlapClassName: "component-1846-5",
      prop: "eleven"
    }), /* @__PURE__ */ import_react45.default.createElement(Component1846, {
      className: "component-1846-6",
      overlapClassName: "component-1846-7",
      prop: "twelve"
    }), /* @__PURE__ */ import_react45.default.createElement("div", {
      className: "view-17"
    }, /* @__PURE__ */ import_react45.default.createElement("div", {
      className: "overlap-6"
    }, /* @__PURE__ */ import_react45.default.createElement("div", {
      className: "text-wrapper-32"
    }, "\u041A\u0420\u0410\u0421"))), /* @__PURE__ */ import_react45.default.createElement(Component1846, {
      className: "component-1846-8",
      overlapClassName: "component-1846-9",
      prop: "fourteen"
    }), /* @__PURE__ */ import_react45.default.createElement(Component1846, {
      className: "view-18",
      prop: "fifteen"
    }), /* @__PURE__ */ import_react45.default.createElement(Component1846, {
      className: "view-19",
      prop: "sixteen"
    }));
  };

  // src/rgd/common/screens/RgdL/sections/Map/sections/MapVector/MapVector.jsx
  var StyledMapVector = ut.div`
  height: 647px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1250px;

  & .overlap-7 {
    height: 631px;
    left: 2px;
    position: relative;
    width: 1247px;
  }

  & .component-1847-instance {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-1.svg) !important;
    left: 993px !important;
    position: absolute !important;
    top: 561px !important;
  }

  & .component-1848-instance {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector.svg) !important;
    left: 1091px !important;
    position: absolute !important;
    top: 561px !important;
  }
`;
  var MapVector = () => {
    return /* @__PURE__ */ import_react46.default.createElement(StyledMapVector, null, /* @__PURE__ */ import_react46.default.createElement("div", {
      className: "overlap-7"
    }, /* @__PURE__ */ import_react46.default.createElement(View, null), /* @__PURE__ */ import_react46.default.createElement(OverlapWrapper, null), /* @__PURE__ */ import_react46.default.createElement(ViewWrapper, null), /* @__PURE__ */ import_react46.default.createElement(Component1847, {
      className: "component-1847-instance"
    }), /* @__PURE__ */ import_react46.default.createElement(Component1848, {
      className: "component-1848-instance"
    })));
  };

  // src/rgd/common/screens/RgdL/sections/Map/Map.jsx
  var StyledMap = ut.div`
  height: 646.56px;
  position: relative;
  width: 1250px;

  & .overlap-9 {
    height: 647px;
    position: relative;
  }
`;
  var Map2 = () => {
    return /* @__PURE__ */ import_react47.default.createElement(StyledMap, null, /* @__PURE__ */ import_react47.default.createElement("div", {
      className: "overlap-9"
    }, /* @__PURE__ */ import_react47.default.createElement(MapTextsValues, null), /* @__PURE__ */ import_react47.default.createElement(MapVector, null), /* @__PURE__ */ import_react47.default.createElement(MapTexts, null)));
  };

  // src/rgd/common/screens/RgdL/sections/People/People.jsx
  var import_react48 = __toModule(require_react());
  var StyledPeople = ut.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 35px;
  position: relative;
  width: 100%;

  & .people-banner {
    height: 715.29px;
    position: relative;
    width: 100%;
  }

  & .overlap-group-5 {
    height: 715px;
    position: relative;
  }

  & .element-png-wrapper {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/bg.svg);
    background-size: cover;
    height: 715px;
  }

  & .element-png {
    height: 403px;
    left: 191px;
    object-fit: cover;
    position: absolute;
    top: 312px;
    width: 869px;
  }

  & .texts-2 {
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    gap: 37px;
    left: 45px;
    position: absolute;
    top: 50px;
  }

  & .text-wrapper-39 {
    color: var(--variable-collection-BLACK);
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    margin-top: -1px;
    position: relative;
    width: 590px;
  }

  & .frame-2 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 46px;
    position: relative;
  }

  & .div-4 {
    color: transparent;
    font-family: "Arial-Regular", Helvetica;
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    width: 544px;
  }

  & .text-wrapper-40 {
    color: #000000;
  }

  & .text-wrapper-41 {
    color: #e21a1a;
  }

  & .flexcontainer-9 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 547px;
  }

  & .text-9 {
    align-self: stretch;
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
  }

  & .text-wrapper-42 {
    color: #000000;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
  }

  & .join-link {
    height: 23px;
    position: relative;
    width: 267px;
  }

  & .text-wrapper-43 {
    color: var(--variable-collection-RZD-RED);
    font-family: "Arial-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: right;
    top: 0;
    white-space: nowrap;
  }

  & .vector-3 {
    height: 12px;
    left: 259px;
    position: absolute;
    top: 6px;
    width: 7px;
  }
`;
  var People = () => {
    return /* @__PURE__ */ import_react48.default.createElement(StyledPeople, null, /* @__PURE__ */ import_react48.default.createElement("div", {
      className: "people-banner"
    }, /* @__PURE__ */ import_react48.default.createElement("div", {
      className: "overlap-group-5"
    }, /* @__PURE__ */ import_react48.default.createElement("div", {
      className: "element-png-wrapper"
    }, /* @__PURE__ */ import_react48.default.createElement("img", {
      className: "element-png",
      alt: "Element png",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/02-png.png"
    })), /* @__PURE__ */ import_react48.default.createElement("div", {
      className: "texts-2"
    }, /* @__PURE__ */ import_react48.default.createElement("p", {
      className: "text-wrapper-39"
    }, "/ \u0412 \u0420\u0416\u0414 \u0420\u0410\u0411\u041E\u0422\u0410\u042E\u0422 \u041B\u042E\u0414\u0418 \u0414\u0415\u041B\u0410"), /* @__PURE__ */ import_react48.default.createElement("div", {
      className: "frame-2"
    }, /* @__PURE__ */ import_react48.default.createElement("p", {
      className: "div-4"
    }, /* @__PURE__ */ import_react48.default.createElement("span", {
      className: "text-wrapper-40"
    }, "\u041E\u0441\u043D\u043E\u0432\u0430 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438,\u0435\u0435 \u0433\u043B\u0430\u0432\u043D\u044B\u0439 \u0430\u043A\u0442\u0438\u0432 \u0438 \u043D\u0430\u0438\u0431\u043E\u043B\u044C\u0448\u0430\u044F \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u2013", " "), /* @__PURE__ */ import_react48.default.createElement("span", {
      className: "text-wrapper-41"
    }, "\u044D\u0442\u043E \u043B\u044E\u0434\u0438")), /* @__PURE__ */ import_react48.default.createElement("div", {
      className: "flexcontainer-9"
    }, /* @__PURE__ */ import_react48.default.createElement("p", {
      className: "text-9"
    }, /* @__PURE__ */ import_react48.default.createElement("span", {
      className: "text-wrapper-40"
    }, "\u0420\u0435\u0430\u043B\u044C\u043D\u044B\u0435"), /* @__PURE__ */ import_react48.default.createElement("span", {
      className: "text-wrapper-42"
    }, " ", "\u0434\u0435\u043B\u0430 \u043B\u0435\u0436\u0430\u0442 \u0432 \u043E\u0441\u043D\u043E\u0432\u0435 \u0432\u0441\u0435\u0439 \u043D\u0430\u0448\u0435\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u043E\u043D\u0438 \u043D\u0430\u043F\u043E\u043B\u043D\u044F\u044E\u0442 \u0435\u0435 \u0441\u043C\u044B\u0441\u043B\u043E\u043C.", /* @__PURE__ */ import_react48.default.createElement("br", null))), /* @__PURE__ */ import_react48.default.createElement("p", {
      className: "text-9"
    }, /* @__PURE__ */ import_react48.default.createElement("span", {
      className: "text-wrapper-42"
    }, "\u0410 \u044D\u0442\u043E \u0437\u043D\u0430\u0447\u0438\u0442, \u0447\u0442\u043E \u0432 \u0420\u0416\u0414 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442"), /* @__PURE__ */ import_react48.default.createElement("span", {
      className: "text-wrapper-40"
    }, " \u0442\u0435, \u043A\u0442\u043E "), /* @__PURE__ */ import_react48.default.createElement("span", {
      className: "text-wrapper-41"
    }, "\u043B\u044E\u0431\u0438\u0442 \u0434\u0435\u043B\u043E"), /* @__PURE__ */ import_react48.default.createElement("span", {
      className: "text-wrapper-40"
    }, ",\u0434\u043B\u044F \u043A\u043E\u0433\u043E \u0436\u0438\u0437\u043D\u0435\u043D\u043D\u043E \u0432\u0430\u0436\u043D\u043E \u0438\u0434\u0442\u0438 \u0432\u043F\u0435\u0440\u0435\u0434 \u0438 \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u0443."))))))), /* @__PURE__ */ import_react48.default.createElement("div", {
      className: "join-link"
    }, /* @__PURE__ */ import_react48.default.createElement("div", {
      className: "text-wrapper-43"
    }, "\u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F \u043A \u043A\u043E\u043C\u0430\u043D\u0434\u0435"), /* @__PURE__ */ import_react48.default.createElement("img", {
      className: "vector-3",
      alt: "Vector",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/vector-23.svg"
    })));
  };

  // src/rgd/common/screens/RgdL/sections/Principies/Principies.jsx
  var import_react50 = __toModule(require_react());

  // src/rgd/common/components/ImgWrapper/ImgWrapper.jsx
  var import_prop_types8 = __toModule(require_prop_types());
  var import_react49 = __toModule(require_react());
  var StyledImgWrapper = ut.img`
  height: 659px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1250px;
`;
  var ImgWrapper = ({ prop, className, element = "https://psb-eta.vercel.app/rgd/desktop/img/1-3.svg" }) => {
    return /* @__PURE__ */ import_react49.default.createElement(StyledImgWrapper, {
      className: `img-wrapper ${className}`,
      alt: "Element",
      src: element
    });
  };
  ImgWrapper.propTypes = {
    prop: import_prop_types8.default.oneOf(["thirteen"]),
    element: import_prop_types8.default.string
  };

  // src/rgd/common/screens/RgdL/sections/Principies/Principies.jsx
  var StyledPrincipies = ut.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 70px;
  position: relative;
  width: 100%;

  & .text-wrapper-46 {
    color: var(--variable-collection-BLACK);
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 50px;
    font-weight: 400;
    letter-spacing: 2.5px;
    line-height: 48.5px;
    margin-top: -1px;
    position: relative;
    width: 668px;
  }

  & .component-1838 {
    left: unset !important;
    position: relative !important;
    top: unset !important;
  }
`;
  var Principies = () => {
    return /* @__PURE__ */ import_react50.default.createElement(StyledPrincipies, null, /* @__PURE__ */ import_react50.default.createElement("div", {
      className: "text-wrapper-46"
    }, "/ \u041D\u0410\u0428\u0418 \u041F\u0420\u0418\u041D\u0426\u0418\u041F\u042B"), /* @__PURE__ */ import_react50.default.createElement(ImgWrapper, {
      className: "component-1838",
      element: "https://psb-eta.vercel.app/rgd/desktop/img/image-5.svg",
      prop: "thirteen"
    }));
  };

  // src/rgd/common/screens/RgdL/sections/Vectors/Vectors.jsx
  var import_react56 = __toModule(require_react());

  // src/rgd/common/components/Component1843/Component1843.jsx
  var import_prop_types9 = __toModule(require_prop_types());
  var import_react51 = __toModule(require_react());
  var StyledComponent1843 = ut.div`
  height: 20px;
  width: 213px;

  & .div-2 {
    height: 23px;
    position: relative;
    width: 215px;
  }

  & .text-wrapper-17 {
    color: var(--variable-collection-RZD-WORKER);
    font-family: "Arial-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: right;
    top: 0;
    white-space: nowrap;
  }

  & .vector-2 {
    height: 12px;
    left: 207px;
    position: absolute;
    top: 6px;
    width: 7px;
  }
`;
  var Component1843 = ({ prop, className, vector = "https://psb-eta.vercel.app/rgd/desktop/img/vector-36.svg" }) => {
    return /* @__PURE__ */ import_react51.default.createElement(StyledComponent1843, {
      className: `component-1843 ${className}`
    }, /* @__PURE__ */ import_react51.default.createElement("div", {
      className: "div-2"
    }, /* @__PURE__ */ import_react51.default.createElement("div", {
      className: "text-wrapper-17"
    }, "\u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438"), /* @__PURE__ */ import_react51.default.createElement("img", {
      className: "vector-2",
      alt: "Vector",
      src: vector
    })));
  };
  Component1843.propTypes = {
    prop: import_prop_types9.default.oneOf(["one"]),
    vector: import_prop_types9.default.string
  };

  // src/rgd/common/components/Tab/Tab.jsx
  var import_react52 = __toModule(require_react());
  var StyledTab = ut.div`
  background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-33.svg);
  background-size: 100% 100%;
  height: 50px;
  position: relative;
  width: 119px;

  & .text-wrapper-15 {
    color: var(--variable-collection-BLACK);
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    left: 13px;
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    position: absolute;
    top: 9px;
    width: 84px;
  }
`;
  var Tab = ({ className }) => {
    return /* @__PURE__ */ import_react52.default.createElement(StyledTab, {
      className: `tab ${className}`
    }, /* @__PURE__ */ import_react52.default.createElement("div", {
      className: "text-wrapper-15"
    }, "\u041E\u0424\u0418\u0421"));
  };

  // src/rgd/common/components/Tab4/Tab4.jsx
  var import_react53 = __toModule(require_react());
  var StyledTab4 = ut.div`
  height: 50px;
  width: 286px;

  & .overlap-3 {
    background-image: url(../img/vector-32.svg);
    background-size: 100% 100%;
    height: 558px;
    position: relative;
    width: 6250px;
  }

  & .text-wrapper-16 {
    color: var(--variable-collection-BLACK);
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    left: 13px;
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    position: absolute;
    top: 9px;
    width: 250px;
  }
`;
  var Tab4 = ({ className, overlapClassName }) => {
    return /* @__PURE__ */ import_react53.default.createElement(StyledTab4, {
      className: `tab-4 ${className}`
    }, /* @__PURE__ */ import_react53.default.createElement("div", {
      className: `overlap-3 ${overlapClassName}`
    }, /* @__PURE__ */ import_react53.default.createElement("div", {
      className: "text-wrapper-16"
    }, "\u041D\u0410\u0427\u0410\u041B\u041E \u041A\u0410\u0420\u042C\u0415\u0420\u042B")));
  };

  // src/rgd/common/components/TabActive/TabActive.jsx
  var import_react54 = __toModule(require_react());
  var StyledTabActive = ut.div`
  height: 50px;
  width: 255px;

  & .overlap-2 {
    background-image: url(../img/vector-32.svg);
    background-size: 100% 100%;
    height: 558px;
    position: relative;
    width: 6250px;
  }

  & .text-wrapper-14 {
    color: var(--variable-collection-WHITE);
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    left: 13px;
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    position: absolute;
    top: 9px;
    width: 228px;
  }
`;
  var TabActive = ({ className, overlapClassName }) => {
    return /* @__PURE__ */ import_react54.default.createElement(StyledTabActive, {
      className: `tab-active ${className}`
    }, /* @__PURE__ */ import_react54.default.createElement("div", {
      className: `overlap-2 ${overlapClassName}`
    }, /* @__PURE__ */ import_react54.default.createElement("div", {
      className: "text-wrapper-14"
    }, "\u041F\u0420\u041E\u0418\u0417\u0412\u041E\u0414\u0421\u0422\u0412\u041E")));
  };

  // src/rgd/common/components/TabWrapper/TabWrapper.jsx
  var import_react55 = __toModule(require_react());
  var StyledTabWrapper = ut.div`
  height: 50px;
  width: 197px;

  & .IT-digital-wrapper {
    background-image: url(../img/vector-32.svg);
    background-size: 100% 100%;
    height: 558px;
    position: relative;
    width: 6250px;
  }

  & .IT-digital {
    color: var(--variable-collection-BLACK);
    font-family: var(---font-family);
    font-size: var(---font-size);
    font-style: var(---font-style);
    font-weight: var(---font-weight);
    left: 13px;
    letter-spacing: var(---letter-spacing);
    line-height: var(---line-height);
    position: absolute;
    top: 9px;
    width: 165px;
  }
`;
  var TabWrapper = ({ className, overlapClassName }) => {
    return /* @__PURE__ */ import_react55.default.createElement(StyledTabWrapper, {
      className: `tab-wrapper ${className}`
    }, /* @__PURE__ */ import_react55.default.createElement("div", {
      className: `IT-digital-wrapper ${overlapClassName}`
    }, /* @__PURE__ */ import_react55.default.createElement("div", {
      className: "IT-digital"
    }, "IT \u0418 DIGITAL")));
  };

  // src/rgd/common/screens/RgdL/sections/Vectors/Vectors.jsx
  var StyledVectors = ut.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 70px;
  position: relative;

  & .text-wrapper-47 {
    color: var(--variable-collection-BLACK);
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 50px;
    font-weight: 400;
    letter-spacing: 2.5px;
    line-height: 48.5px;
    margin-top: -1px;
    position: relative;
    width: 668px;
  }

  & .view-22 {
    height: 260px;
    position: relative;
    width: 1169px;
  }

  & .tabs {
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    gap: 20px;
    left: 0;
    position: absolute;
    top: 0;
  }

  & .tab-2 {
    position: relative !important;
  }

  & .tab-active-1 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-22.svg) !important;
    height: 50px !important;
    width: 256px !important;
  }

  & .tab-instance {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-21.svg) !important;
  }

  & .tab-3 {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-20.svg) !important;
    height: 50px !important;
    width: 198px !important;
  }

  & .tab-4-instance {
    background-image: url(https://psb-eta.vercel.app/rgd/desktop/img/vector-19.svg) !important;
    height: 50px !important;
    width: unset !important;
  }

  & .component-1843-instance {
    left: 409px !important;
    position: absolute !important;
    top: 205px !important;
  }

  & .flexcontainer-wrapper {
    height: 190px;
    left: 409px;
    position: absolute;
    top: 0;
    width: 760px;
  }

  & .flexcontainer-i {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 191px;
    position: relative;
    top: -1px;
    width: 712px;
  }

  & .text-i {
    align-self: stretch;
    color: var(--variable-collection-BLACK);
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
    position: relative;
  }

  & .text-wrapper-48 {
    color: #000000;
    font-family: var(--01-font-family);
    font-size: var(--01-font-size);
    font-style: var(--01-font-style);
    font-weight: var(--01-font-weight);
    letter-spacing: var(--01-letter-spacing);
    line-height: var(--01-line-height);
  }
`;
  var Vectors = () => {
    return /* @__PURE__ */ import_react56.default.createElement(StyledVectors, null, /* @__PURE__ */ import_react56.default.createElement("div", {
      className: "text-wrapper-47"
    }, "/ \u0420\u0410\u0411\u041E\u0422\u0410 \u0414\u041B\u042F \u041A\u0410\u0416\u0414\u041E\u0413\u041E"), /* @__PURE__ */ import_react56.default.createElement("div", {
      className: "view-22"
    }, /* @__PURE__ */ import_react56.default.createElement("div", {
      className: "tabs"
    }, /* @__PURE__ */ import_react56.default.createElement(TabActive, {
      className: "tab-2",
      overlapClassName: "tab-active-1"
    }), /* @__PURE__ */ import_react56.default.createElement(Tab, {
      className: "tab-instance"
    }), /* @__PURE__ */ import_react56.default.createElement(TabWrapper, {
      className: "tab-2",
      overlapClassName: "tab-3"
    }), /* @__PURE__ */ import_react56.default.createElement(Tab4, {
      className: "tab-2",
      overlapClassName: "tab-4-instance"
    })), /* @__PURE__ */ import_react56.default.createElement(Component1843, {
      className: "component-1843-instance",
      prop: "one",
      vector: "https://psb-eta.vercel.app/rgd/desktop/img/vector-18.svg"
    }), /* @__PURE__ */ import_react56.default.createElement("div", {
      className: "flexcontainer-wrapper"
    }, /* @__PURE__ */ import_react56.default.createElement("div", {
      className: "flexcontainer-i"
    }, /* @__PURE__ */ import_react56.default.createElement("p", {
      className: "text-i"
    }, /* @__PURE__ */ import_react56.default.createElement("span", {
      className: "text-wrapper-48"
    }, "\u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0435 \u0436\u0435\u043B\u0435\u0437\u043D\u044B\u0435 \u0434\u043E\u0440\u043E\u0433\u0438 \u2013 \u044D\u0442\u043E \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0435\u0437\u0434\u0430.", /* @__PURE__ */ import_react56.default.createElement("br", null))), /* @__PURE__ */ import_react56.default.createElement("p", {
      className: "text-i"
    }, /* @__PURE__ */ import_react56.default.createElement("span", {
      className: "text-wrapper-48"
    }, "\u041C\u044B \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0435\u043C \u0432 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u043D\u044B\u0445 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u0445, \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0435\u043C \u0440\u0435\u0433\u0438\u043E\u043D\u044B, \u0441\u0442\u0440\u043E\u0438\u043C \u0432\u0430\u0436\u043D\u0435\u0439\u0448\u0438\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u044B \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u2013 \u043F\u0443\u0442\u0438 \u0438 \u0442\u043E\u043D\u043D\u0435\u043B\u0438, \u043C\u043E\u0441\u0442\u044B \u0438 \u0432\u043E\u043A\u0437\u0430\u043B\u044B, \u0436\u0438\u043B\u044B\u0435 \u0434\u043E\u043C\u0430 \u0438 \u0448\u043A\u043E\u043B\u044B, \u043F\u043E\u043B\u0438\u043A\u043B\u0438\u043D\u0438\u043A\u0438 \u0438 \u0431\u043E\u043B\u044C\u043D\u0438\u0446\u044B.", /* @__PURE__ */ import_react56.default.createElement("br", null))), /* @__PURE__ */ import_react56.default.createElement("p", {
      className: "text-i"
    }, /* @__PURE__ */ import_react56.default.createElement("span", {
      className: "text-wrapper-48"
    }, "\u041D\u0430\u0448\u0430 \u0440\u0430\u0431\u043E\u0442\u0430 \u2013 \u044D\u0442\u043E \u0432\u043A\u043B\u0430\u0434 \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u0435 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0438\u0437 \u043D\u0430\u0441, \u0432 \u043F\u0440\u043E\u0446\u0432\u0435\u0442\u0430\u043D\u0438\u0435 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u0438 \u0432\u0441\u0435\u0439 \u0441\u0442\u0440\u0430\u043D\u044B.", /* @__PURE__ */ import_react56.default.createElement("br", null))), /* @__PURE__ */ import_react56.default.createElement("p", {
      className: "text-i"
    }, /* @__PURE__ */ import_react56.default.createElement("span", {
      className: "text-wrapper-48"
    }, "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0439\u0441\u044F \u043A \u043A\u043E\u043C\u0430\u043D\u0434\u0435 \u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u0439 \u0441 \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C\u044E!"))))));
  };

  // src/rgd/common/components/We/We.jsx
  var import_react63 = __toModule(require_react());

  // src/rgd/common/components/WeComponent/WeComponent.jsx
  var import_react57 = __toModule(require_react());
  var StyledWeComponent = ut.div`
  height: 151px;
  position: relative;
  width: 387px;

  & .text-wrapper-8 {
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Regular", Helvetica;
    font-size: 28px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 86px;
    width: 387px;
    margin: 0;
  }

  & .img-5 {
    height: 60px;
    left: 0;
    position: absolute;
    top: -2px;
    width: 181px;
  }
`;
  var WeComponent = ({ className }) => {
    return /* @__PURE__ */ import_react57.default.createElement(StyledWeComponent, {
      className: `we-component ${className}`
    }, /* @__PURE__ */ import_react57.default.createElement("div", {
      className: "text-wrapper-8"
    }, "\u041F\u0430\u0441\u0441\u0430\u0436\u0438\u0440\u0441\u043A\u0438\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438"), /* @__PURE__ */ import_react57.default.createElement("img", {
      className: "img-5",
      alt: "Img",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/19.png"
    }));
  };

  // src/rgd/common/components/WeComponent3/WeComponent3.jsx
  var import_react58 = __toModule(require_react());
  var StyledWeComponent3 = ut.div`
  height: 120px;
  position: relative;
  width: 387px;

  & .text-wrapper-10 {
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Regular", Helvetica;
    font-size: 28px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 87px;
    width: 387px;
  }

  & .img-7 {
    height: 61px;
    left: 0;
    position: absolute;
    top: -2px;
    width: 149px;
  }
`;
  var WeComponent3 = ({ className }) => {
    return /* @__PURE__ */ import_react58.default.createElement(StyledWeComponent3, {
      className: `we-component-3 ${className}`
    }, /* @__PURE__ */ import_react58.default.createElement("div", {
      className: "text-wrapper-10"
    }, "\u0418\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430"), /* @__PURE__ */ import_react58.default.createElement("img", {
      className: "img-7",
      alt: "Img",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/15.png"
    }));
  };

  // src/rgd/common/components/WeComponent4/WeComponent4.jsx
  var import_react59 = __toModule(require_react());
  var StyledWeComponent4 = ut.div`
  height: 132px;
  position: relative;
  width: 387px;

  & .text-wrapper-11 {
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Regular", Helvetica;
    font-size: 28px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 102px;
    white-space: nowrap;
    width: 387px;
  }

  & .img-8 {
    height: 75px;
    left: 0;
    position: absolute;
    top: -2px;
    width: 87px;
  }
`;
  var WeComponent4 = ({ className }) => {
    return /* @__PURE__ */ import_react59.default.createElement(StyledWeComponent4, {
      className: `we-component-4 ${className}`
    }, /* @__PURE__ */ import_react59.default.createElement("div", {
      className: "text-wrapper-11"
    }, "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E"), /* @__PURE__ */ import_react59.default.createElement("img", {
      className: "img-8",
      alt: "Img",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/13.png"
    }));
  };

  // src/rgd/common/components/WeComponent5/WeComponent5.jsx
  var import_react60 = __toModule(require_react());
  var StyledWeComponent5 = ut.div`
  height: 132px;
  position: relative;
  width: 387px;

  & .text-wrapper-12 {
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Regular", Helvetica;
    font-size: 28px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 101px;
    white-space: nowrap;
    width: 387px;
  }

  & .img-9 {
    height: 66px;
    left: -1px;
    position: absolute;
    top: 0;
    width: 123px;
  }
`;
  var WeComponent5 = ({ className }) => {
    return /* @__PURE__ */ import_react60.default.createElement(StyledWeComponent5, {
      className: `we-component-5 ${className}`
    }, /* @__PURE__ */ import_react60.default.createElement("div", {
      className: "text-wrapper-12"
    }, "\u0421\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0444\u0435\u0440\u0430"), /* @__PURE__ */ import_react60.default.createElement("img", {
      className: "img-9",
      alt: "Img",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/11.png"
    }));
  };

  // src/rgd/common/components/WeComponent6/WeComponent6.jsx
  var import_react61 = __toModule(require_react());
  var StyledWeComponent6 = ut.div`
  height: 148px;
  position: relative;
  width: 387px;

  & .text-wrapper-13 {
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Regular", Helvetica;
    font-size: 28px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 115px;
    width: 387px;
  }

  & .img-10 {
    height: 86px;
    left: -2px;
    position: absolute;
    top: 0;
    width: 86px;
  }
`;
  var WeComponent6 = ({ className }) => {
    return /* @__PURE__ */ import_react61.default.createElement(StyledWeComponent6, {
      className: `we-component-6 ${className}`
    }, /* @__PURE__ */ import_react61.default.createElement("div", {
      className: "text-wrapper-13"
    }, "\u041D\u0430\u0443\u043A\u0430"), /* @__PURE__ */ import_react61.default.createElement("img", {
      className: "img-10",
      alt: "Img",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/9.png"
    }));
  };

  // src/rgd/common/components/WeComponentWrapper/WeComponentWrapper.jsx
  var import_react62 = __toModule(require_react());
  var StyledWeComponentWrapper = ut.div`
  height: 120px;
  position: relative;
  width: 387px;

  & .text-wrapper-9 {
    color: var(--variable-collection-BLACK);
    font-family: "Arial-Regular", Helvetica;
    font-size: 28px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 87px;
    width: 387px;
  }

  & .img-6 {
    height: 61px;
    left: 0;
    position: absolute;
    top: -2px;
    width: 148px;
  }
`;
  var WeComponentWrapper = ({ className }) => {
    return /* @__PURE__ */ import_react62.default.createElement(StyledWeComponentWrapper, {
      className: `we-component-wrapper ${className}`
    }, /* @__PURE__ */ import_react62.default.createElement("div", {
      className: "text-wrapper-9"
    }, "\u0413\u0440\u0443\u0437\u043E\u0432\u044B\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438"), /* @__PURE__ */ import_react62.default.createElement("img", {
      className: "img-6",
      alt: "Img",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/17.png"
    }));
  };

  // src/rgd/common/components/We/We.jsx
  var StyledWe = ut.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 70px;
  position: relative;
  width: 100%;

  & .grid {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 1;
    flex-grow: 1;
    flex-wrap: wrap;
    gap: 20px 73px;
    max-width: 1200px;
    position: relative;
    width: 100%;
  }

  & .we-component-1 {
    flex: 1 !important;
    flex-grow: 1 !important;
    height: 150.96px !important;
    min-width: 307px !important;
    width: unset !important;
  }

  & .we-component-2 {
    flex: 1 !important;
    flex-grow: 1 !important;
    height: 119.88px !important;
    min-width: 374px !important;
    width: unset !important;
  }

  & .we-component-instance {
    flex: 1 !important;
    flex-grow: 1 !important;
    height: 119.88px !important;
    min-width: 373px !important;
    width: unset !important;
  }

  & .we-component-4-instance {
    flex: 1 !important;
    flex-grow: 1 !important;
    min-width: 327px !important;
    width: unset !important;
  }

  & .we-component-5-instance {
    flex: 1 !important;
    flex-grow: 1 !important;
    min-width: 351px !important;
    width: unset !important;
  }

  & .we-component-6-instance {
    flex: 1 !important;
    flex-grow: 1 !important;
    height: 147.79px !important;
    min-width: 373px !important;
    width: unset !important;
  }
`;
  var Title = ut.div`
    color: var(--variable-collection-BLACK);
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 50px;
    font-weight: 400;
    letter-spacing: 2.5px;
    line-height: 48.5px;
    margin-top: -1px;
    position: relative;
    margin:0;
  ${(props) => props.$mobile && at`
        font-size: 29px;
    font-weight: 400;
    height: 89px;
    letter-spacing: 1.6px;
    line-height: 31px;
  `}
`;
  var We2 = ({ isMobile }) => {
    return /* @__PURE__ */ import_react63.default.createElement(StyledWe, null, /* @__PURE__ */ import_react63.default.createElement(Title, {
      $mobile: isMobile
    }, "/ \u041C\u042B \u0413\u041E\u0420\u0414\u0418\u041C\u0421\u042F \u0422\u0415\u041C, \u0427\u0422\u041E \u0414\u0415\u041B\u0410\u0415\u041C"), /* @__PURE__ */ import_react63.default.createElement("div", {
      className: "grid"
    }, /* @__PURE__ */ import_react63.default.createElement(WeComponent, {
      className: "we-component-1"
    }), /* @__PURE__ */ import_react63.default.createElement(WeComponentWrapper, {
      className: "we-component-2"
    }), /* @__PURE__ */ import_react63.default.createElement(WeComponent3, {
      className: "we-component-instance"
    }), /* @__PURE__ */ import_react63.default.createElement(WeComponent4, {
      className: "we-component-4-instance"
    }), /* @__PURE__ */ import_react63.default.createElement(WeComponent5, {
      className: "we-component-5-instance"
    }), /* @__PURE__ */ import_react63.default.createElement(WeComponent6, {
      className: "we-component-6-instance"
    })));
  };

  // src/rgd/common/screens/RgdL/RgdL.jsx
  var StyledHhL = ut.div`
  align-items: flex-start;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 123px;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
`;
  var RgdL = () => {
    return /* @__PURE__ */ import_react64.default.createElement(StyledHhL, null, /* @__PURE__ */ import_react64.default.createElement(Begin, null), /* @__PURE__ */ import_react64.default.createElement(We2, null), /* @__PURE__ */ import_react64.default.createElement(People, null), /* @__PURE__ */ import_react64.default.createElement(Adventiges, null), /* @__PURE__ */ import_react64.default.createElement(Principies, null), /* @__PURE__ */ import_react64.default.createElement(Vectors, null), /* @__PURE__ */ import_react64.default.createElement(Map2, null), /* @__PURE__ */ import_react64.default.createElement(Footer, null));
  };

  // src/rgd/desktop/client_rgd.jsx
  var div = document.getElementById("rgd_prod");
  if (div && div.childNodes.length > 0) {
    import_client.default.hydrateRoot(div, /* @__PURE__ */ import_react65.default.createElement(RgdL, null));
  } else if (div) {
    const root = import_client.default.createRoot(div);
    root.render(/* @__PURE__ */ import_react65.default.createElement(RgdL, null));
  }
})();
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
