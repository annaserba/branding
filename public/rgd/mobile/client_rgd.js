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

  // src/rgd/mobile/client_rgd.jsx
  var import_react28 = __toModule(require_react());
  var import_client = __toModule(require_client());

  // src/rgd/common/screens/RgdS/RgdS.jsx
  var import_react27 = __toModule(require_react());

  // src/rgd/common/components/Raiting/Raiting.jsx
  var import_react4 = __toModule(require_react());

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

  // src/rgd/common/icons/Nine/Nine.jsx
  var import_react2 = __toModule(require_react());
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
  var import_react3 = __toModule(require_react());
  var StyledFive = ut.svg`
  max-width: 100%;
`;
  var Five = ({}) => {
    return /* @__PURE__ */ import_react3.default.createElement(StyledFive, {
      className: "svg",
      width: "291",
      height: "55",
      viewBox: "0 0 291 55",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ import_react3.default.createElement("g", {
      clipPath: "url(#clip0_383_45089)"
    }, /* @__PURE__ */ import_react3.default.createElement("rect", {
      width: "270",
      height: "37",
      transform: "matrix(-1 0 0 1 281 10.9199)",
      fill: "#E6E6E6"
    }), /* @__PURE__ */ import_react3.default.createElement("g", {
      filter: "url(#filter0_f_383_45089)"
    }, /* @__PURE__ */ import_react3.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M339.317 116.309C353.485 95.9118 383.457 87.7241 389.949 63.7629C396.8 38.4719 387.372 10.9737 373.902 -11.352C359.879 -34.5919 340.359 -60.372 313.371 -63.151C286.001 -65.9694 268.2 -32.7123 241.728 -24.9623C218.961 -18.2971 188.015 -39.5834 172.185 -21.8179C155.896 -3.53704 180.611 26.1579 174.956 49.974C169.368 73.5136 138.437 88.0839 140.377 112.159C142.295 135.947 164.848 152.904 184.348 166.469C203.121 179.528 225.44 185.806 248.295 187.233C270.659 188.629 295.268 188.339 313.025 174.503C330.147 161.162 326.922 134.153 339.317 116.309Z",
      fill: "#F0F0F0"
    })), /* @__PURE__ */ import_react3.default.createElement("g", {
      filter: "url(#filter1_f_383_45089)"
    }, /* @__PURE__ */ import_react3.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M132.022 76.7786C133.63 62.3993 118.371 52.3466 112.434 39.2039C109.121 31.8713 107.031 24.537 104.912 16.7666C101.385 3.83841 105.191 -12.0123 95.8559 -21.5746C86.152 -31.5145 70.1491 -35.8935 56.5846 -32.7356C43.0853 -29.5929 35.686 -15.5797 26.2475 -5.36931C17.4214 4.17859 6.30643 12.4722 3.13926 25.0806C-0.0352164 37.7181 1.0258 52.7005 9.11664 62.828C16.941 72.6218 33.6718 68.0937 43.6021 75.7286C53.3311 83.2088 53.4903 99.5574 64.3411 105.288C76.5073 111.712 92.0072 113.377 104.739 108.014C117.715 102.549 130.456 90.79 132.022 76.7786Z",
      fill: "white"
    })), /* @__PURE__ */ import_react3.default.createElement("g", {
      filter: "url(#filter2_f_383_45089)"
    }, /* @__PURE__ */ import_react3.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M185.366 -88.5689C215.419 -127.693 302.147 -129.106 299.144 -178.233C296.114 -227.8 218.119 -229.334 175.262 -253.864C151.125 -267.679 126.174 -276.482 102.37 -290.862C72.3513 -308.996 52.4455 -352.06 17.398 -349.226C-16.8047 -346.461 -30.485 -302.545 -54.8588 -278.15C-78.5559 -254.432 -112.18 -239.244 -123.888 -207.816C-136.078 -175.098 -129.902 -138.591 -119.172 -105.521C-108.328 -72.0994 -90.3724 -40.7617 -62.7162 -19.2856C-35.1672 2.10711 0.0597847 7.27011 34.3665 13.7073C72.0091 20.7704 114.954 41.6358 146.844 20.0355C179.263 -1.92241 161.48 -57.4735 185.366 -88.5689Z",
      fill: "#E21A1A"
    })), /* @__PURE__ */ import_react3.default.createElement("g", {
      filter: "url(#filter3_f_383_45089)"
    }, /* @__PURE__ */ import_react3.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20.9169 79.1403C37.1052 61.0969 35.5715 31.8376 29.3433 8.34147C23.6074 -13.298 0.497779 -24.4781 -11.5611 -43.3862C-24.6073 -63.8422 -20.9905 -99.3156 -44.0938 -106.806C-67.7498 -114.475 -85.5581 -80.9457 -109.687 -75.199C-132.029 -69.8776 -162.512 -92.5809 -177.284 -75.0839C-192.754 -56.7605 -162.603 -28.067 -168.995 -4.94966C-175.78 19.5886 -212.37 29.8351 -213.336 55.2996C-214.281 80.1841 -197.248 108.852 -173.627 117.088C-148.789 125.748 -125.694 99.2359 -99.8124 94.8822C-82.9401 92.044 -66.4565 98.4178 -49.4871 96.2052C-25.0315 93.0164 4.50533 97.4325 20.9169 79.1403Z",
      fill: "#E6E6E6"
    })), /* @__PURE__ */ import_react3.default.createElement("g", {
      filter: "url(#filter4_f_383_45089)"
    }, /* @__PURE__ */ import_react3.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M205.426 108.583C216.42 94.2725 248.156 93.7628 247.053 75.7904C245.94 57.6569 217.399 57.0893 201.715 48.1115C192.881 43.0555 183.75 39.833 175.038 34.5704C164.052 27.934 156.764 12.1779 143.939 13.2116C131.424 14.2203 126.421 30.2851 117.504 39.2075C108.835 47.8822 96.5323 53.4354 92.2505 64.9317C87.7928 76.9 90.0557 90.2561 93.9849 102.355C97.956 114.583 104.529 126.048 114.651 133.907C124.734 141.736 137.625 143.628 150.18 145.985C163.955 148.573 179.671 156.209 191.339 148.31C203.2 140.28 196.688 119.956 205.426 108.583Z",
      fill: "#E21A1A"
    }))), /* @__PURE__ */ import_react3.default.createElement("g", {
      clipPath: "url(#clip1_383_45089)"
    }, /* @__PURE__ */ import_react3.default.createElement("path", {
      d: "M256.858 19.6839L255.286 35.3161H259.411L260.913 19.6839H256.858ZM256.858 19.6839L255.286 35.3161H259.411L260.913 19.6839H256.858ZM256.858 19.6839L255.286 35.3161H259.411L260.913 19.6839H256.858ZM256.858 19.6839L255.286 35.3161H259.411L260.913 19.6839H256.858ZM256.858 19.6839L255.286 35.3161H259.411L260.913 19.6839H256.858ZM256.858 19.6839L255.286 35.3161H259.411L260.913 19.6839H256.858ZM256.858 19.6839L255.286 35.3161H259.411L260.913 19.6839H256.858ZM256.858 19.6839L255.286 35.3161H259.411L260.913 19.6839H256.858ZM256.858 19.6839L255.286 35.3161H259.411L260.913 19.6839H256.858ZM256.858 19.6839L255.286 35.3161H259.411L260.913 19.6839H256.858ZM5.48677 0L0 55H285.994L291 0H5.48677ZM52.3448 26.9205L37.8068 35.3161H51.4837L50.6226 44.2862H11.6945L12.6056 35.3161L34.8531 23.7557L35.2836 19.7242H31.2286L30.8882 23.0804H13.8671L15.0987 10.7541H54.0369L52.3448 26.9205ZM98.0814 44.2762L99.0826 33.8244L93.6058 44.2762H86.2267L82.4119 34.1974L81.4107 44.2762H63.9792L67.2732 10.7138H84.7148L91.5132 28.9866L101.385 10.7138H118.767L115.473 44.2762H98.0814ZM156.383 23.7557L155.633 31.2342H136.769L136.379 35.2657H155.252L154.381 44.2762H118.807L122.141 10.7138H157.725L156.824 19.6839H137.911L137.53 23.7154L156.383 23.7557ZM197.785 25.2675H180.353L180.924 19.704H176.829L175.327 35.3363H179.332L179.953 29.3898H197.434L195.432 44.2762H157.725L161.059 10.7037H199.216L197.785 25.2675ZM229.404 19.704L226.991 44.2762H205.885L208.318 19.6738H201.659L202.561 10.7037H237.003L236.122 19.6738L229.404 19.704ZM275.981 44.2762H269.974H236.993L240.327 10.7037H279.245L275.981 44.2762ZM260.913 19.6839H256.908L255.336 35.3161H259.461L260.913 19.6839ZM256.908 19.6839L255.336 35.3161H259.461L260.963 19.6839H256.908ZM256.908 19.6839L255.336 35.3161H259.461L260.963 19.6839H256.908ZM256.908 19.6839L255.336 35.3161H259.461L260.963 19.6839H256.908ZM256.908 19.6839L255.336 35.3161H259.461L260.963 19.6839H256.908ZM256.908 19.6839L255.336 35.3161H259.461L260.963 19.6839H256.908ZM256.908 19.6839L255.336 35.3161H259.461L260.963 19.6839H256.908ZM256.908 19.6839L255.336 35.3161H259.461L260.963 19.6839H256.908ZM256.908 19.6839L255.336 35.3161H259.461L260.963 19.6839H256.908ZM256.908 19.6839L255.336 35.3161H259.461L260.963 19.6839H256.908ZM256.908 19.6839L255.336 35.3161H259.461L260.963 19.6839H256.908Z",
      fill: "white"
    })), /* @__PURE__ */ import_react3.default.createElement("defs", null, /* @__PURE__ */ import_react3.default.createElement("filter", {
      id: "filter0_f_383_45089",
      x: "40.29",
      y: "-163.32",
      width: "451.951",
      height: "451.104",
      filterUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB"
    }, /* @__PURE__ */ import_react3.default.createElement("feFlood", {
      floodOpacity: "0",
      result: "BackgroundImageFix"
    }), /* @__PURE__ */ import_react3.default.createElement("feBlend", {
      mode: "normal",
      in: "SourceGraphic",
      in2: "BackgroundImageFix",
      result: "shape"
    }), /* @__PURE__ */ import_react3.default.createElement("feGaussianBlur", {
      stdDeviation: "50",
      result: "effect1_foregroundBlur_383_45089"
    })), /* @__PURE__ */ import_react3.default.createElement("filter", {
      id: "filter1_f_383_45089",
      x: "-98.5205",
      y: "-133.747",
      width: "330.661",
      height: "344.97",
      filterUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB"
    }, /* @__PURE__ */ import_react3.default.createElement("feFlood", {
      floodOpacity: "0",
      result: "BackgroundImageFix"
    }), /* @__PURE__ */ import_react3.default.createElement("feBlend", {
      mode: "normal",
      in: "SourceGraphic",
      in2: "BackgroundImageFix",
      result: "shape"
    }), /* @__PURE__ */ import_react3.default.createElement("feGaussianBlur", {
      stdDeviation: "50",
      result: "effect1_foregroundBlur_383_45089"
    })), /* @__PURE__ */ import_react3.default.createElement("filter", {
      id: "filter2_f_383_45089",
      x: "-230.59",
      y: "-449.359",
      width: "629.81",
      height: "578.931",
      filterUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB"
    }, /* @__PURE__ */ import_react3.default.createElement("feFlood", {
      floodOpacity: "0",
      result: "BackgroundImageFix"
    }), /* @__PURE__ */ import_react3.default.createElement("feBlend", {
      mode: "normal",
      in: "SourceGraphic",
      in2: "BackgroundImageFix",
      result: "shape"
    }), /* @__PURE__ */ import_react3.default.createElement("feGaussianBlur", {
      stdDeviation: "50",
      result: "effect1_foregroundBlur_383_45089"
    })), /* @__PURE__ */ import_react3.default.createElement("filter", {
      id: "filter3_f_383_45089",
      x: "-313.374",
      y: "-207.939",
      width: "447.115",
      height: "426.754",
      filterUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB"
    }, /* @__PURE__ */ import_react3.default.createElement("feFlood", {
      floodOpacity: "0",
      result: "BackgroundImageFix"
    }), /* @__PURE__ */ import_react3.default.createElement("feBlend", {
      mode: "normal",
      in: "SourceGraphic",
      in2: "BackgroundImageFix",
      result: "shape"
    }), /* @__PURE__ */ import_react3.default.createElement("feGaussianBlur", {
      stdDeviation: "50",
      result: "effect1_foregroundBlur_383_45089"
    })), /* @__PURE__ */ import_react3.default.createElement("filter", {
      id: "filter4_f_383_45089",
      x: "-10.1982",
      y: "-86.8369",
      width: "357.279",
      height: "338.633",
      filterUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB"
    }, /* @__PURE__ */ import_react3.default.createElement("feFlood", {
      floodOpacity: "0",
      result: "BackgroundImageFix"
    }), /* @__PURE__ */ import_react3.default.createElement("feBlend", {
      mode: "normal",
      in: "SourceGraphic",
      in2: "BackgroundImageFix",
      result: "shape"
    }), /* @__PURE__ */ import_react3.default.createElement("feGaussianBlur", {
      stdDeviation: "50",
      result: "effect1_foregroundBlur_383_45089"
    })), /* @__PURE__ */ import_react3.default.createElement("clipPath", {
      id: "clip0_383_45089"
    }, /* @__PURE__ */ import_react3.default.createElement("rect", {
      width: "270",
      height: "37",
      fill: "white",
      transform: "matrix(-1 0 0 1 281 10.9199)"
    })), /* @__PURE__ */ import_react3.default.createElement("clipPath", {
      id: "clip1_383_45089"
    }, /* @__PURE__ */ import_react3.default.createElement("rect", {
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
    return /* @__PURE__ */ import_react4.default.createElement(StyledRaiting, {
      className: `raiting ${className}`
    }, /* @__PURE__ */ import_react4.default.createElement("div", {
      className: "frame"
    }, /* @__PURE__ */ import_react4.default.createElement("div", {
      className: "title"
    }, /* @__PURE__ */ import_react4.default.createElement(Five, null)), /* @__PURE__ */ import_react4.default.createElement("img", {
      className: "element",
      alt: "Element",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/1-1.svg"
    })));
  };

  // src/rgd/common/screens/RgdS/sections/AboutMobile/AboutMobile.jsx
  var import_react5 = __toModule(require_react());
  var StyledAboutMobile = ut.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 492.27px;
  overflow: hidden;
  position: relative;
  width: 100%;

  & .frame-3 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 15px;
    padding: 10px 0px;
    position: relative;
    width: 100%;

    & .text-wrapper-8 {
      align-self: stretch;
      color: #000000;
      font-family: "RussianRail G Pro-Regular", Helvetica;
      font-size: 32px;
      font-weight: 400;
      height: 89px;
      letter-spacing: 1.6px;
      line-height: 31px;
      margin-top: -1px;
      position: relative;
    }
  }

  & .p {
    color: transparent;
    font-family: "Arial-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 22.4px;
    position: relative;
    width: fit-content;

    & .span {
      color: #000000;
      font-family: var(--MOBILE-01-font-family);
      font-size: var(--MOBILE-01-font-size);
      font-style: var(--MOBILE-01-font-style);
      font-weight: var(--MOBILE-01-font-weight);
      letter-spacing: var(--MOBILE-01-letter-spacing);
      line-height: var(--MOBILE-01-line-height);
    }
  }

  & .text-wrapper-9 {
    color: #999999;
  }

  & .frame-4 {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 10px;
    max-width: 290px;
    min-height: 273px;
    position: relative;
    width: 100%;

    & .image {
      height: 272.27px;
      position: relative;
      width: 290px;
    }

    & .view-2 {
      height: 216px;
      left: 7px;
      overflow: hidden;
      position: absolute;
      top: 28px;
      width: 280px;

      & .element-2 {
        height: 44px;
        left: 0;
        position: absolute;
        top: 174px;
        width: 122px;

        & .text-wrapper-10 {
          color: #ffffff;
          font-family: "Arial-Regular", Helvetica;
          font-size: 14px;
          font-weight: 400;
          left: 0;
          letter-spacing: 0.7px;
          line-height: 13.6px;
          position: absolute;
          top: 30px;
          white-space: nowrap;
        }

        & .element-3 {
          height: 23px;
          left: 3px;
          position: absolute;
          top: 0;
          width: 33px;
        }
      }

      & .element-4 {
        height: 44px;
        left: 41px;
        position: absolute;
        top: 117px;
        width: 148px;

        & .text-wrapper-10 {
          color: #ffffff;
          font-family: "Arial-Regular", Helvetica;
          font-size: 14px;
          font-weight: 400;
          left: 0;
          letter-spacing: 0.7px;
          line-height: 13.6px;
          position: absolute;
          top: 30px;
          white-space: nowrap;
        }

        & .element-5 {
          height: 24px;
          left: 4px;
          position: absolute;
          top: 0;
          width: 53px;
        }
      }

      & .element-6 {
        height: 44px;
        left: 83px;
        position: absolute;
        top: 60px;
        width: 86px;

        & .text-wrapper-10 {
          color: #ffffff;
          font-family: "Arial-Regular", Helvetica;
          font-size: 14px;
          font-weight: 400;
          left: 0;
          letter-spacing: 0.7px;
          line-height: 13.6px;
          position: absolute;
          top: 30px;
          white-space: nowrap;
        }

        & .element-7 {
          height: 24px;
          left: 4px;
          position: absolute;
          top: 0;
          width: 80px;
        }
      }

      & .element-8 {
        height: 44px;
        left: 127px;
        position: absolute;
        top: 4px;
        width: 153px;

        & .text-wrapper-10 {
          color: #ffffff;
          font-family: "Arial-Regular", Helvetica;
          font-size: 14px;
          font-weight: 400;
          left: 0;
          letter-spacing: 0.7px;
          line-height: 13.6px;
          position: absolute;
          top: 30px;
          white-space: nowrap;
        }

        & .element-9 {
          height: 24px;
          left: 4px;
          position: absolute;
          top: 0;
          width: 147px;
        }
      }
    }
  }
`;
  var AboutMobile = () => {
    return /* @__PURE__ */ import_react5.default.createElement(StyledAboutMobile, null, /* @__PURE__ */ import_react5.default.createElement("div", {
      className: "frame-3"
    }, /* @__PURE__ */ import_react5.default.createElement("div", {
      className: "text-wrapper-8"
    }, "/ \u0420\u041E\u0421\u0421\u0418\u0419\u0421\u041A\u0418\u0415 \u0416\u0415\u041B\u0415\u0417\u041D\u042B\u0415 \u0414\u041E\u0420\u041E\u0413\u0418"), /* @__PURE__ */ import_react5.default.createElement("p", {
      className: "p"
    }, /* @__PURE__ */ import_react5.default.createElement("span", {
      className: "span"
    }, "\u041D\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043B\u0438\u0434\u0435\u0440 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0439 \u043E\u0442\u0440\u0430\u0441\u043B\u0438 \u0438 \u043E\u0434\u0438\u043D \u0438\u0437 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u0440\u0430\u0431\u043E\u0442\u043E\u0434\u0430\u0442\u0435\u043B\u0435\u0439 \u0441\u0442\u0440\u0430\u043D\u044B."), /* @__PURE__ */ import_react5.default.createElement("span", {
      className: "text-wrapper-9"
    }, "2"))), /* @__PURE__ */ import_react5.default.createElement("div", {
      className: "frame-4"
    }, /* @__PURE__ */ import_react5.default.createElement("img", {
      className: "image",
      alt: "Image",
      src: "https://psb-eta.vercel.app/rgd/mobile/img/6.svg"
    }), /* @__PURE__ */ import_react5.default.createElement("div", {
      className: "view-2"
    }, /* @__PURE__ */ import_react5.default.createElement("div", {
      className: "element-2"
    }, /* @__PURE__ */ import_react5.default.createElement("div", {
      className: "text-wrapper-10"
    }, "\u0440\u0435\u0433\u0438\u043E\u043D\u043E\u0432 \u0420\u043E\u0441\u0441\u0438\u0438"), /* @__PURE__ */ import_react5.default.createElement("img", {
      className: "element-3",
      alt: "Element",
      src: "https://psb-eta.vercel.app/rgd/mobile/img/77.svg"
    })), /* @__PURE__ */ import_react5.default.createElement("div", {
      className: "element-4"
    }, /* @__PURE__ */ import_react5.default.createElement("div", {
      className: "text-wrapper-10"
    }, "\u043B\u0435\u0442 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0438 \u043E\u043F\u044B\u0442\u0430"), /* @__PURE__ */ import_react5.default.createElement("img", {
      className: "element-5",
      alt: "Element",
      src: "https://psb-eta.vercel.app/rgd/mobile/img/185.svg"
    })), /* @__PURE__ */ import_react5.default.createElement("div", {
      className: "element-6"
    }, /* @__PURE__ */ import_react5.default.createElement("div", {
      className: "text-wrapper-10"
    }, "\u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u0439"), /* @__PURE__ */ import_react5.default.createElement("img", {
      className: "element-7",
      alt: "Element",
      src: "https://psb-eta.vercel.app/rgd/mobile/img/1-000.svg"
    })), /* @__PURE__ */ import_react5.default.createElement("div", {
      className: "element-8"
    }, /* @__PURE__ */ import_react5.default.createElement("div", {
      className: "text-wrapper-10"
    }, "\u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u043E\u0432"), /* @__PURE__ */ import_react5.default.createElement("img", {
      className: "element-9",
      alt: "Element",
      src: "https://psb-eta.vercel.app/rgd/mobile/img/1-000-000.svg"
    })))));
  };

  // src/rgd/common/screens/RgdS/sections/FootterMobile/FootterMobile.jsx
  var import_react6 = __toModule(require_react());
  var StyledFootterMobile = ut.div`
  height: 49px;
  position: relative;
  width: 300px;

  & .flexcontainer-2 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 49px;
    position: relative;
    top: -1px;
    width: 300px;
  }

  & .text-2 {
    align-self: stretch;
    color: var(--variable-collection-HOVERING-duplicate);
    font-family: "Arial-Regular", Helvetica;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 11px;
    position: relative;
  }

  & .text-wrapper-25 {
    color: #000000;
  }

  & .text-wrapper-26 {
    color: #999999;
  }
`;
  var FootterMobile = () => {
    return /* @__PURE__ */ import_react6.default.createElement(StyledFootterMobile, null, /* @__PURE__ */ import_react6.default.createElement("div", {
      className: "flexcontainer-2"
    }, /* @__PURE__ */ import_react6.default.createElement("p", {
      className: "text-2"
    }, /* @__PURE__ */ import_react6.default.createElement("span", {
      className: "text-wrapper-25"
    }, "1"), /* @__PURE__ */ import_react6.default.createElement("span", {
      className: "text-wrapper-26"
    }, " ", "\u043F\u043E \u0434\u0430\u043D\u043D\u044B\u043C \u0412\u0441\u0435\u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0433\u043E \u0446\u0435\u043D\u0442\u0440\u0430 \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u044F \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u043C\u043D\u0435\u043D\u0438\u044F (\u0412\u0426\u0418\u041E\u041C) \u0437\u0430 2023 \u0433\u043E\u0434", /* @__PURE__ */ import_react6.default.createElement("br", null))), /* @__PURE__ */ import_react6.default.createElement("p", {
      className: "text-2"
    }, /* @__PURE__ */ import_react6.default.createElement("span", {
      className: "text-wrapper-25"
    }, "2"), /* @__PURE__ */ import_react6.default.createElement("span", {
      className: "text-wrapper-26"
    }, " ", "10 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u0432 \u0441\u0444\u0435\u0440\u0435 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0430 \u0438 \u043B\u043E\u0433\u0438\u0441\u0442\u0438\u043A\u0438 \u0438\u0437 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0430 RAEX-600 2022 \u0433\u043E\u0434\u0430"))));
  };

  // src/rgd/common/screens/RgdS/sections/PeopleMobile/PeopleMobile.jsx
  var import_react7 = __toModule(require_react());
  var StyledPeopleMobile = ut.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 700.39px;
  overflow: hidden;
  position: relative;
  width: 100%;

  & .frame-wrapper {
    align-self: stretch;
    background-image: url(https://psb-eta.vercel.app/rgd/mobile/img/bg.svg);
    background-size: 100% 100%;
    height: 669.39px;
    position: relative;
    width: 100%;
  }

  & .frame-5 {
    align-items: center;
    display: inline-flex;
    flex-direction: column;
    gap: 23px;
    position: relative;
    top: 18px;
  }

  & .text-wrapper-16 {
    color: var(--variable-collection-BLACK-duplicate);
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 32px;
    font-weight: 400;
    height: 89px;
    letter-spacing: 1.6px;
    line-height: 31px;
    margin-top: -1px;
    position: relative;
    width: 250px;
  }

  & .div-3 {
    color: transparent;
    font-family: var(--ARIAL-font-family);
    font-size: var(--ARIAL-font-size);
    font-style: var(--ARIAL-font-style);
    font-weight: var(--ARIAL-font-weight);
    letter-spacing: var(--ARIAL-letter-spacing);
    line-height: var(--ARIAL-line-height);
    position: relative;
    width: 250px;
  }

  & .text-wrapper-17 {
    color: #000000;
    font-family: var(--ARIAL-font-family);
    font-size: var(--ARIAL-font-size);
    font-style: var(--ARIAL-font-style);
    font-weight: var(--ARIAL-font-weight);
    letter-spacing: var(--ARIAL-letter-spacing);
    line-height: var(--ARIAL-line-height);
  }

  & .text-wrapper-18 {
    color: #e21a1a;
    font-family: var(--ARIAL-font-family);
    font-size: var(--ARIAL-font-size);
    font-style: var(--ARIAL-font-style);
    font-weight: var(--ARIAL-font-weight);
    letter-spacing: var(--ARIAL-letter-spacing);
    line-height: var(--ARIAL-line-height);
  }

  & .flexcontainer {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 250px;
  }

  & .text {
    align-self: stretch;
    color: var(--variable-collection-BLACK-duplicate);
    font-family: var(--MOBILE-01-font-family);
    font-size: var(--MOBILE-01-font-size);
    font-style: var(--MOBILE-01-font-style);
    font-weight: var(--MOBILE-01-font-weight);
    letter-spacing: var(--MOBILE-01-letter-spacing);
    line-height: var(--MOBILE-01-line-height);
    position: relative;
  }

  & .text-wrapper-19 {
    color: #000000;
    font-family: var(--MOBILE-01-font-family);
    font-size: var(--MOBILE-01-font-size);
    font-style: var(--MOBILE-01-font-style);
    font-weight: var(--MOBILE-01-font-weight);
    letter-spacing: var(--MOBILE-01-letter-spacing);
    line-height: var(--MOBILE-01-line-height);
  }

  & .text-wrapper-20 {
    color: #e21a1a;
    font-family: var(--MOBILE-01-font-family);
    font-size: var(--MOBILE-01-font-size);
    font-style: var(--MOBILE-01-font-style);
    font-weight: var(--MOBILE-01-font-weight);
    letter-spacing: var(--MOBILE-01-letter-spacing);
    line-height: var(--MOBILE-01-line-height);
  }

  & .MOBILE-6 {
    height: 237px;
    object-fit: cover;
    position: relative;
    width: 289px;
  }

  & .view-4 {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 1;
    flex-grow: 1;
    gap: 10px;
    position: relative;
    width: 100%;
  }

  & .text-wrapper-21 {
    color: var(--variable-collection-RZD-RED-duplicate);
    font-family: "Arial-Regular", Helvetica;
    font-size: 14px;
    font-weight: 400;
    height: 15.63px;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -0.81px;
    position: relative;
    text-align: right;
    white-space: nowrap;
    width: 179.86px;
  }

  & .vector-3 {
    height: 8.06px;
    position: relative;
    width: 11.6px;
  }
`;
  var PeopleMobile = () => {
    return /* @__PURE__ */ import_react7.default.createElement(StyledPeopleMobile, null, /* @__PURE__ */ import_react7.default.createElement("div", {
      className: "frame-wrapper"
    }, /* @__PURE__ */ import_react7.default.createElement("div", {
      className: "frame-5"
    }, /* @__PURE__ */ import_react7.default.createElement("p", {
      className: "text-wrapper-16"
    }, "/ \u0412 \u0420\u0416\u0414 \u0420\u0410\u0411\u041E\u0422\u0410\u042E\u0422 \u041B\u042E\u0414\u0418 \u0414\u0415\u041B\u0410"), /* @__PURE__ */ import_react7.default.createElement("p", {
      className: "div-3"
    }, /* @__PURE__ */ import_react7.default.createElement("span", {
      className: "text-wrapper-17"
    }, "\u041E\u0441\u043D\u043E\u0432\u0430 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438,\u0435\u0435 \u0433\u043B\u0430\u0432\u043D\u044B\u0439 \u0430\u043A\u0442\u0438\u0432\u0438 \u043D\u0430\u0438\u0431\u043E\u043B\u044C\u0448\u0430\u044F \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u2013 "), /* @__PURE__ */ import_react7.default.createElement("span", {
      className: "text-wrapper-18"
    }, "\u044D\u0442\u043E \u043B\u044E\u0434\u0438")), /* @__PURE__ */ import_react7.default.createElement("div", {
      className: "flexcontainer"
    }, /* @__PURE__ */ import_react7.default.createElement("p", {
      className: "text"
    }, /* @__PURE__ */ import_react7.default.createElement("span", {
      className: "text-wrapper-19"
    }, "\u0420\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0435\u043B\u0430 \u043B\u0435\u0436\u0430\u0442 \u0432 \u043E\u0441\u043D\u043E\u0432\u0435 \u0432\u0441\u0435\u0439 \u043D\u0430\u0448\u0435\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u043E\u043D\u0438 \u043D\u0430\u043F\u043E\u043B\u043D\u044F\u044E\u0442 \u0435\u0435 \u0441\u043C\u044B\u0441\u043B\u043E\u043C.", /* @__PURE__ */ import_react7.default.createElement("br", null))), /* @__PURE__ */ import_react7.default.createElement("p", {
      className: "text"
    }, /* @__PURE__ */ import_react7.default.createElement("span", {
      className: "text-wrapper-19"
    }, "\u0410 \u044D\u0442\u043E \u0437\u043D\u0430\u0447\u0438\u0442, \u0447\u0442\u043E \u0432 \u0420\u0416\u0414 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0442\u0435, \u043A\u0442\u043E "), /* @__PURE__ */ import_react7.default.createElement("span", {
      className: "text-wrapper-20"
    }, "\u043B\u044E\u0431\u0438\u0442 \u0434\u0435\u043B\u043E"), /* @__PURE__ */ import_react7.default.createElement("span", {
      className: "text-wrapper-19"
    }, ", \u0434\u043B\u044F \u043A\u043E\u0433\u043E \u0436\u0438\u0437\u043D\u0435\u043D\u043D\u043E \u0432\u0430\u0436\u043D\u043E \u0438\u0434\u0442\u0438 \u0432\u043F\u0435\u0440\u0435\u0434 \u0438 \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u0443."))), /* @__PURE__ */ import_react7.default.createElement("img", {
      className: "MOBILE-6",
      alt: "Mobile",
      src: "https://psb-eta.vercel.app/rgd/mobile/img/mobile-1.png"
    }))), /* @__PURE__ */ import_react7.default.createElement("div", {
      className: "view-4"
    }, /* @__PURE__ */ import_react7.default.createElement("div", {
      className: "text-wrapper-21"
    }, "\u043F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u044C\u0441\u044F \u043A \u043A\u043E\u043C\u0430\u043D\u0434\u0435"), /* @__PURE__ */ import_react7.default.createElement("img", {
      className: "vector-3",
      alt: "Vector",
      src: "https://psb-eta.vercel.app/rgd/mobile/img/vector-6.svg"
    })));
  };

  // src/rgd/common/screens/RgdS/sections/PrincipiesMobile/PrincipiesMobile.jsx
  var import_react10 = __toModule(require_react());

  // src/rgd/common/components/ElementWrapper/ElementWrapper.jsx
  var import_prop_types = __toModule(require_prop_types());
  var import_react8 = __toModule(require_react());
  var import_react9 = __toModule(require_react());
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
    const [state, dispatch] = (0, import_react9.useReducer)(reducer, {
      prop: prop || "one"
    });
    return /* @__PURE__ */ import_react8.default.createElement(StyledElementWrapper, {
      className: `element-wrapper ${className}`,
      onMouseLeave: () => {
        dispatch("mouse_leave");
      },
      onMouseEnter: () => {
        dispatch("mouse_enter");
      }
    }, /* @__PURE__ */ import_react8.default.createElement("div", {
      className: `text-wrapper-2 prop-1-${state.prop}`
    }, "\u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438"), /* @__PURE__ */ import_react8.default.createElement("img", {
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
    prop: import_prop_types.default.oneOf(["two", "one"])
  };

  // src/rgd/common/screens/RgdS/sections/PrincipiesMobile/PrincipiesMobile.jsx
  var StyledPrincipiesMobile = ut.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 584px;
  position: relative;
  width: 100%;

  & .text-wrapper-22 {
    color: #000000;
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 32px;
    font-weight: 400;
    letter-spacing: 1.6px;
    line-height: 31px;
    margin-top: -1px;
    position: relative;
    width: fit-content;
  }

  & .two-MOBILE {
    align-self: stretch !important;
    flex: 1 !important;
    flex-grow: 1 !important;
    height: unset !important;
    left: unset !important;
    position: relative !important;
    top: unset !important;
    width: 100% !important;
  }
`;
  var PrincipiesMobile = () => {
    return /* @__PURE__ */ import_react10.default.createElement(StyledPrincipiesMobile, null, /* @__PURE__ */ import_react10.default.createElement("div", {
      className: "text-wrapper-22"
    }, "/ \u041D\u0410\u0428\u0418 \u041F\u0420\u0418\u041D\u0426\u0418\u041F\u042B"), /* @__PURE__ */ import_react10.default.createElement(ElementWrapper, {
      className: "two-MOBILE",
      element: "https://psb-eta.vercel.app/rgd/mobile/img/02-mobile.svg",
      prop: "one"
    }));
  };

  // src/rgd/common/screens/RgdS/sections/SliderMobile/SliderMobile.jsx
  var import_react16 = __toModule(require_react());

  // src/rgd/common/components/ElementMobile/ElementMobile.jsx
  var import_prop_types5 = __toModule(require_prop_types());
  var import_react15 = __toModule(require_react());

  // src/rgd/common/icons/IconComponentNode/IconComponentNode.jsx
  var import_react11 = __toModule(require_react());
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
    return /* @__PURE__ */ import_react11.default.createElement(StyledIconComponentNode, {
      className: `icon-component-node ${className}`,
      viewBox: "0 0 97 7",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ import_react11.default.createElement("path", {
      className: "path",
      d: "M40.6772 7.25312V0.140625L18.7823 0.140625V7.25312L40.6772 7.25312Z"
    }), /* @__PURE__ */ import_react11.default.createElement("path", {
      className: "path",
      d: "M7.2981 7.25312L7.2981 0.140625L-0.000226974 0.140625L-0.000226974 7.25312H7.2981Z"
    }), /* @__PURE__ */ import_react11.default.createElement("path", {
      className: "path",
      d: "M59.447 7.25312V0.140625L52.1487 0.140625V7.25312H59.447Z"
    }), /* @__PURE__ */ import_react11.default.createElement("path", {
      className: "path",
      d: "M78.2241 7.25312V0.140625L70.9258 0.140625V7.25312H78.2241Z"
    }), /* @__PURE__ */ import_react11.default.createElement("path", {
      className: "path",
      d: "M97 7.25312V0.140625L89.7017 0.140625V7.25312H97Z"
    }));
  };

  // src/rgd/common/icons/Six/Six.jsx
  var import_prop_types2 = __toModule(require_prop_types());
  var import_react12 = __toModule(require_react());
  var StyledSix = ut.svg`
  &.path {
    fill: ${(props) => props.color};
  }
`;
  var Six = ({ color = "#E21A1A", className }) => {
    return /* @__PURE__ */ import_react12.default.createElement("span", {
      className
    }, /* @__PURE__ */ import_react12.default.createElement(StyledSix, {
      fill: "none",
      height: "165",
      viewBox: "0 0 255 165",
      width: "255",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ import_react12.default.createElement("path", {
      className: "path",
      d: "M99.5514 115.157L62.5223 164.515H37.731L74.7601 115.157H99.5514Z"
    }), /* @__PURE__ */ import_react12.default.createElement("path", {
      className: "path",
      d: "M78.5379 0L29.1618 65.8046H14.5007L63.8709 0H78.5379Z"
    }), /* @__PURE__ */ import_react12.default.createElement("path", {
      className: "path",
      d: "M255 65.793L205.575 131.616H199.988L249.406 65.793H255Z"
    }), /* @__PURE__ */ import_react12.default.createElement("path", {
      className: "path",
      d: "M103.769 33.0713L29.7107 131.787H0L74.0582 33.0713H103.769Z"
    })));
  };
  Six.propTypes = {
    color: import_prop_types2.default.string
  };

  // src/rgd/common/components/Mobile/Mobile.jsx
  var import_prop_types3 = __toModule(require_prop_types());
  var import_react13 = __toModule(require_react());
  var StyledMobile = ut.div`
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
  var Mobile = ({
    property1,
    className,
    elementPng = "https://psb-eta.vercel.app/rgd/mobile/img/01-png-1.png",
    elementPngClassName,
    img = "https://psb-eta.vercel.app/rgd/mobile/img/02-png-1.png",
    elementPng1 = "https://psb-eta.vercel.app/rgd/mobile/img/03-png-1.png",
    elementPng2 = "https://psb-eta.vercel.app/rgd/mobile/img/04-png-1.png",
    elementPng3 = "https://psb-eta.vercel.app/rgd/mobile/img/05-png-1.png"
  }) => {
    return /* @__PURE__ */ import_react13.default.createElement(StyledMobile, {
      className: `MOBILE ${className}`
    }, /* @__PURE__ */ import_react13.default.createElement("img", {
      className: `element-png property-1-${property1} ${elementPngClassName}`,
      alt: "Element png",
      src: property1 === "two" ? img : property1 === "three" ? elementPng1 : property1 === "IT" ? elementPng2 : property1 === "four" ? elementPng3 : elementPng
    }));
  };
  Mobile.propTypes = {
    property1: import_prop_types3.default.oneOf(["two", "three", "four", "one", "IT"]),
    elementPng: import_prop_types3.default.string,
    img: import_prop_types3.default.string,
    elementPng1: import_prop_types3.default.string,
    elementPng2: import_prop_types3.default.string,
    elementPng3: import_prop_types3.default.string
  };

  // src/rgd/common/components/PropertyWrapper/PropertyWrapper.jsx
  var import_prop_types4 = __toModule(require_prop_types());
  var import_react14 = __toModule(require_react());
  var StyledPropertyWrapper = ut.div`
  height: 22px;
  position: relative;
  width: 258px;

  & .text-wrapper {
    color: #000000;
    font-family: var(--MOBILE-01-font-family);
    font-size: var(--MOBILE-01-font-size);
    font-style: var(--MOBILE-01-font-style);
    font-weight: var(--MOBILE-01-font-weight);
    left: 0;
    letter-spacing: var(--MOBILE-01-letter-spacing);
    line-height: var(--MOBILE-01-line-height);
    position: absolute;
    top: -1px;
    width: 258px;
  }
`;
  var PropertyWrapper = ({ property1, className }) => {
    return /* @__PURE__ */ import_react14.default.createElement(StyledPropertyWrapper, {
      className: `property-wrapper ${className}`
    }, /* @__PURE__ */ import_react14.default.createElement("p", {
      className: "text-wrapper"
    }, "\u0415\u0441\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0430 \u043F\u043E \u0432\u0441\u0435\u0439 \u0441\u0442\u0440\u0430\u043D\u0435"));
  };
  PropertyWrapper.propTypes = {
    property1: import_prop_types4.default.oneOf(["one"])
  };

  // src/rgd/common/components/ElementMobile/ElementMobile.jsx
  var StyledElementMobile = ut.div`
  background-color: #f0f0f0;
  height: 472px;
  overflow: hidden;

  & .overlap-group {
    height: 472px;
    left: -296px;
    position: relative;
    width: 1475px;
  }

  & .class {
    height: 165px !important;
    left: 20px !important;
    position: absolute !important;
    top: 227px !important;
    width: 255px !important;
  }

  & .class-2 {
    height: 165px !important;
    left: 316px !important;
    position: absolute !important;
    top: 227px !important;
    width: 255px !important;
  }

  & .div {
    height: 472px;
    left: 0;
    position: absolute;
    top: 0;
    width: 1475px;
  }

  & .class-3 {
    height: 331px !important;
    left: -3254px !important;
    top: -9159px !important;
  }

  & .class-4 {
    left: 0 !important;
    overflow: hidden !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .class-5 {
    left: 0 !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .class-6 {
    left: 1px !important;
    width: 294px !important;
  }

  & .class-7 {
    width: 1px !important;
  }

  & .MOBILE-instance {
    left: 295px !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .class-8 {
    left: 590px !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .class-9 {
    left: 590px !important;
    overflow: hidden !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .instance-node {
    left: 885px !important;
    overflow: hidden !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .MOBILE-2 {
    left: 1180px !important;
    overflow: hidden !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .text-wrapper-2 {
    color: #000000;
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 45px;
    font-weight: 400;
    left: 319px;
    letter-spacing: 2.25px;
    line-height: 43.6px;
    position: absolute;
    top: 19px;
    width: 244px;
  }

  & .img {
    position: absolute;
  }

  & .MOBILE-3 {
    height: 22px;
    left: 318px;
    position: absolute;
    top: 160px;
    width: 258px;
  }

  & .text-wrapper-3 {
    color: #000000;
    font-family: var(--MOBILE-01-font-family);
    font-size: var(--MOBILE-01-font-size);
    font-style: var(--MOBILE-01-font-style);
    font-weight: var(--MOBILE-01-font-weight);
    left: 0;
    letter-spacing: var(--MOBILE-01-letter-spacing);
    line-height: var(--MOBILE-01-line-height);
    position: absolute;
    top: -1px;
    width: 258px;
  }

  & .img-2 {
    height: 24px;
    left: 468px;
    position: absolute;
    top: 448px;
    width: 123px;
  }

  & .instance-2 {
    height: 7px !important;
    left: 494px !important;
    position: absolute !important;
    top: 465px !important;
    width: 97px !important;
  }

  & .instance-5 {
    height: 7px !important;
    left: 198px !important;
    position: absolute !important;
    top: 465px !important;
    width: 97px !important;
  }

  & .text-wrapper-4 {
    color: #000000;
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 45px;
    font-weight: 400;
    left: 23px;
    letter-spacing: 2.25px;
    line-height: 43.6px;
    position: absolute;
    top: 19px;
    width: 244px;
  }

  & .img-3 {
    height: 30px;
    left: 224px;
    position: absolute;
    top: 20px;
    width: 51px;
  }

  & .MOBILE-4 {
    left: 22px !important;
    position: absolute !important;
    top: 160px !important;
  }

  & .property-1-0-one {
    height: 24px;
    left: 172px;
    top: 448px;
    width: 123px;
  }

  & .property-1-0-two {
    height: 30px;
    left: 520px;
    top: 20px;
    width: 51px;
  }
`;
  var ElementMobile = ({
    property1,
    className,
    overlapGroupClassName,
    MOBILEElementPng = "https://psb-eta.vercel.app/rgd/mobile/img/01-png-1.png",
    MOBILEImg = "https://psb-eta.vercel.app/rgd/mobile/img/05-png-2.png",
    MOBILEElementPngClassName,
    MOBILEElementPng1 = "https://psb-eta.vercel.app/rgd/mobile/img/05-png-2.png",
    MOBILEElementPngClassNameOverride,
    MOBILEElementPng2 = "https://psb-eta.vercel.app/rgd/mobile/img/05-png-2.png",
    MOBILEImgClassName,
    img = "https://psb-eta.vercel.app/rgd/mobile/img/1.svg",
    img1 = "https://psb-eta.vercel.app/rgd/mobile/img/3.png"
  }) => {
    return /* @__PURE__ */ import_react15.default.createElement(StyledElementMobile, {
      className: `element-MOBILE ${className}`
    }, /* @__PURE__ */ import_react15.default.createElement("div", {
      className: `overlap-group ${overlapGroupClassName}`
    }, /* @__PURE__ */ import_react15.default.createElement(Six, {
      className: `${property1 === "one" ? "class" : "class-2"}`,
      color: property1 === "one" ? "#E21A1A" : "#F37E00"
    }), /* @__PURE__ */ import_react15.default.createElement("div", {
      className: "div"
    }, /* @__PURE__ */ import_react15.default.createElement(Mobile, {
      className: `${property1 === "two" ? "class-4" : "class-5"}`,
      elementPng: MOBILEElementPng,
      elementPngClassName: `${property1 === "two" && "class-3"}`,
      property1: "one"
    }), /* @__PURE__ */ import_react15.default.createElement(Mobile, {
      className: "MOBILE-instance",
      elementPngClassName: `${property1 === "two" ? "class-6" : "class-7"}`,
      img: property1 === "two" ? "https://psb-eta.vercel.app/rgd/mobile/img/02-png-2.png" : "https://psb-eta.vercel.app/rgd/mobile/img/02-png-3.png",
      property1: "two"
    }), /* @__PURE__ */ import_react15.default.createElement(Mobile, {
      className: `${property1 === "two" ? "class-8" : "class-9"}`,
      elementPng1: MOBILEImg,
      elementPngClassName: MOBILEElementPngClassName,
      property1: "three"
    }), /* @__PURE__ */ import_react15.default.createElement(Mobile, {
      className: "instance-node",
      elementPng2: MOBILEElementPng1,
      elementPngClassName: MOBILEElementPngClassNameOverride,
      property1: "IT"
    }), /* @__PURE__ */ import_react15.default.createElement(Mobile, {
      className: "MOBILE-2",
      elementPng3: MOBILEElementPng2,
      elementPngClassName: MOBILEImgClassName,
      property1: "four"
    })), property1 === "two" && /* @__PURE__ */ import_react15.default.createElement("div", {
      className: "text-wrapper-2"
    }, "\u0414\u041B\u042F \u041B\u042E\u0414\u0415\u0419", /* @__PURE__ */ import_react15.default.createElement("br", null), "\u0414\u0415\u041B\u0410"), /* @__PURE__ */ import_react15.default.createElement("img", {
      className: `img property-1-0-${property1}`,
      alt: "Img",
      src: property1 === "two" ? "https://psb-eta.vercel.app/rgd/mobile/img/3.png" : img
    }), property1 === "two" && /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, /* @__PURE__ */ import_react15.default.createElement("div", {
      className: "MOBILE-3"
    }, /* @__PURE__ */ import_react15.default.createElement("div", {
      className: "text-wrapper-3"
    }, "\u0420\u0430\u0431\u043E\u0442\u0430\u0439 \u0441 \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C\u044E")), /* @__PURE__ */ import_react15.default.createElement("img", {
      className: "img-2",
      alt: "Img",
      src: "https://psb-eta.vercel.app/rgd/mobile/img/1.svg"
    }), /* @__PURE__ */ import_react15.default.createElement(IconComponentNode, {
      className: "instance-2"
    })), property1 === "one" && /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, /* @__PURE__ */ import_react15.default.createElement("div", {
      className: "text-wrapper-4"
    }, "\u0414\u041B\u042F \u041B\u042E\u0414\u0415\u0419", /* @__PURE__ */ import_react15.default.createElement("br", null), "\u0414\u0415\u041B\u0410"), /* @__PURE__ */ import_react15.default.createElement("img", {
      className: "img-3",
      alt: "Img",
      src: img1
    }), /* @__PURE__ */ import_react15.default.createElement(PropertyWrapper, {
      className: "MOBILE-4",
      property1: "one"
    }))));
  };
  ElementMobile.propTypes = {
    property1: import_prop_types5.default.oneOf(["two", "one"]),
    MOBILEElementPng: import_prop_types5.default.string,
    MOBILEImg: import_prop_types5.default.string,
    MOBILEElementPng1: import_prop_types5.default.string,
    MOBILEElementPng2: import_prop_types5.default.string,
    img: import_prop_types5.default.string,
    img1: import_prop_types5.default.string
  };

  // src/rgd/common/screens/RgdS/sections/SliderMobile/SliderMobile.jsx
  var StyledSliderMobile = ut.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 512px;
  position: relative;
  width: 295px;

  & .one-MOBILE {
    align-self: stretch !important;
    flex: 1 !important;
    flex-grow: 1 !important;
    height: unset !important;
    position: relative !important;
    width: 100% !important;
  }

  & .element-MOBILE-instance {
    left: unset !important;
  }

  & .one-MOBILE-instance {
    height: 334px !important;
    left: 9984px !important;
    top: -8807px !important;
    width: 267px !important;
  }

  & .design-component-instance-node {
    height: 465px !important;
    left: 9626px !important;
    top: -8806px !important;
    width: 370px !important;
  }

  & .MOBILE-5 {
    height: 406px !important;
    left: 9386px !important;
    top: -8796px !important;
    width: 323px !important;
  }

  & .frame-2 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    gap: 20px;
    height: 30px;
    position: relative;
    width: 100%;
  }

  & .TEAM-RZD-RU {
    height: 30.13px;
    margin-bottom: -0.13px;
    position: relative;
    width: 168.62px;
  }

  & .overlap-group-4 {
    background-image: url(https://psb-eta.vercel.app/rgd/mobile/img/vector-8.svg);
    background-size: 100% 100%;
    height: 30px;
    position: relative;
    width: 167px;
  }

  & .text-wrapper-6 {
    color: var(--variable-collection-WHITE-duplicate);
    font-family: "RussianRail G Pro-Medium", Helvetica;
    font-size: 10px;
    font-weight: 500;
    left: 14px;
    letter-spacing: 0.5px;
    line-height: 22px;
    position: absolute;
    text-align: center;
    top: 5px;
    white-space: nowrap;
    width: 139px;
  }

  & .view {
    flex: 1;
    flex-grow: 1;
    height: 16px;
    margin-right: -2px;
    position: relative;
  }

  & .text-wrapper-7 {
    color: var(--variable-collection-RZD-RED-duplicate);
    font-family: "Arial-Regular", Helvetica;
    font-size: 14px;
    font-weight: 400;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: right;
    top: 0;
    width: 31px;
  }

  & .vector-2 {
    height: 8px;
    left: 106px;
    position: absolute;
    top: 6px;
    width: 2px;
  }
`;
  var SliderMobile = () => {
    return /* @__PURE__ */ import_react16.default.createElement(StyledSliderMobile, null, /* @__PURE__ */ import_react16.default.createElement(ElementMobile, {
      MOBILEElementPng: "https://psb-eta.vercel.app/rgd/mobile/img/01-png.png",
      MOBILEElementPng1: "https://psb-eta.vercel.app/rgd/mobile/img/01-png-2.png",
      MOBILEElementPng2: "https://psb-eta.vercel.app/rgd/mobile/img/01-png-2.png",
      MOBILEElementPngClassName: "one-MOBILE-instance",
      MOBILEElementPngClassNameOverride: "design-component-instance-node",
      MOBILEImg: "https://psb-eta.vercel.app/rgd/mobile/img/01-png-2.png",
      MOBILEImgClassName: "MOBILE-5",
      className: "one-MOBILE",
      img: "https://psb-eta.vercel.app/rgd/mobile/img/image-2.svg",
      img1: "https://psb-eta.vercel.app/rgd/mobile/img/2x.png",
      overlapGroupClassName: "element-MOBILE-instance",
      property1: "one"
    }), /* @__PURE__ */ import_react16.default.createElement("div", {
      className: "frame-2"
    }, /* @__PURE__ */ import_react16.default.createElement("a", {
      className: "TEAM-RZD-RU",
      href: "team.rzd.ru",
      rel: "noopener noreferrer",
      target: "_blank"
    }, /* @__PURE__ */ import_react16.default.createElement("div", {
      className: "overlap-group-4"
    }, /* @__PURE__ */ import_react16.default.createElement("div", {
      className: "text-wrapper-6"
    }, "TEAM.RZD.RU 6+"))), /* @__PURE__ */ import_react16.default.createElement("div", {
      className: "view"
    }, /* @__PURE__ */ import_react16.default.createElement("div", {
      className: "text-wrapper-7"
    }, "\u0432\u0430\u043A\u0430\u043D\u0441\u0438\u0438"), /* @__PURE__ */ import_react16.default.createElement("img", {
      className: "vector-2",
      alt: "Vector",
      src: "https://psb-eta.vercel.app/rgd/mobile/img/vector-7.svg"
    }))));
  };

  // src/rgd/common/screens/RgdS/sections/VectorsMobile/VectorsMobile.jsx
  var import_react19 = __toModule(require_react());

  // src/rgd/common/components/ConcreteComponentNode/ConcreteComponentNode.jsx
  var import_prop_types6 = __toModule(require_prop_types());
  var import_react17 = __toModule(require_react());
  var StyledConcreteComponentNode = ut.div`
  height: 39px;

  & .group {
    height: 39px;
  }

  & .overlap-group-3 {
    background-size: 100% 100%;
    height: 39px;
    position: relative;
  }

  & .div-2 {
    font-family: var(--MOBILE-font-family);
    font-size: var(--MOBILE-font-size);
    font-style: var(--MOBILE-font-style);
    font-weight: var(--MOBILE-font-weight);
    left: 13px;
    letter-spacing: var(--MOBILE-letter-spacing);
    line-height: var(--MOBILE-line-height);
    position: absolute;
    top: 9px;
    white-space: nowrap;
  }

  &.property-1-1-one {
    width: 189px;
  }

  &.property-1-1-IT-digital {
    width: 146px;
  }

  &.property-1-1-three {
    width: 210px;
  }

  &.property-1-1-two {
    width: 90px;
  }

  &.property-1-1-one .group {
    width: 191px;
  }

  &.property-1-1-IT-digital .group {
    width: 148px;
  }

  &.property-1-1-three .group {
    width: 212px;
  }

  &.property-1-1-two .group {
    width: 92px;
  }

  &.property-1-1-one .overlap-group-3 {
    background-image: url(https://psb-eta.vercel.app/rgd/mobile/img/vector-13.svg);
    width: 189px;
  }

  &.property-1-1-IT-digital .overlap-group-3 {
    background-image: url(https://psb-eta.vercel.app/rgd/mobile/img/vector-11.svg);
    width: 146px;
  }

  &.property-1-1-three .overlap-group-3 {
    background-image: url(https://psb-eta.vercel.app/rgd/mobile/img/vector-10.svg);
    width: 210px;
  }

  &.property-1-1-two .overlap-group-3 {
    background-image: url(https://psb-eta.vercel.app/rgd/mobile/img/vector-12.svg);
    width: 90px;
  }

  &.property-1-1-one .div-2 {
    color: var(--variable-collection-WHITE-duplicate);
  }

  &.property-1-1-IT-digital .div-2 {
    color: var(--variable-collection-BLACK-duplicate);
  }

  &.property-1-1-three .div-2 {
    color: var(--variable-collection-BLACK-duplicate);
  }

  &.property-1-1-two .div-2 {
    color: var(--variable-collection-BLACK-duplicate);
  }
`;
  var ConcreteComponentNode = ({ property1, className, overlapGroupClassName }) => {
    return /* @__PURE__ */ import_react17.default.createElement(StyledConcreteComponentNode, {
      className: `concrete-component-node property-1-1-${property1} ${className}`
    }, /* @__PURE__ */ import_react17.default.createElement("div", {
      className: "group"
    }, /* @__PURE__ */ import_react17.default.createElement("div", {
      className: `overlap-group-3 ${overlapGroupClassName}`
    }, /* @__PURE__ */ import_react17.default.createElement("div", {
      className: "div-2"
    }, property1 === "one" && /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, "\u041F\u0420\u041E\u0418\u0417\u0412\u041E\u0414\u0421\u0422\u0412\u041E"), property1 === "two" && /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, "\u041E\u0424\u0418\u0421"), property1 === "IT-digital" && /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, "IT \u0418 DIGITAL"), property1 === "three" && /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, "\u041D\u0410\u0427\u0410\u041B\u041E \u041A\u0410\u0420\u042C\u0415\u0420\u042B")))));
  };
  ConcreteComponentNode.propTypes = {
    property1: import_prop_types6.default.oneOf(["two", "three", "IT-digital", "one"])
  };

  // src/rgd/common/components/DivWrapper/DivWrapper.jsx
  var import_prop_types7 = __toModule(require_prop_types());
  var import_react18 = __toModule(require_react());
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
    return /* @__PURE__ */ import_react18.default.createElement(StyledDivWrapper, {
      className: `div-wrapper ${className}`
    }, /* @__PURE__ */ import_react18.default.createElement("div", {
      className: "text-wrapper-3"
    }, "\u0415\u0441\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0430", /* @__PURE__ */ import_react18.default.createElement("br", null), "\u043F\u043E \u0432\u0441\u0435\u0439 \u0441\u0442\u0440\u0430\u043D\u0435"));
  };
  DivWrapper.propTypes = {
    prop: import_prop_types7.default.oneOf(["one"])
  };

  // src/rgd/common/screens/RgdS/sections/VectorsMobile/VectorsMobile.jsx
  var StyledVectorsMobile = ut.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 584px;
  position: relative;
  width: 100%;

  & .text-wrapper-23 {
    color: #000000;
    font-family: "RussianRail G Pro-Regular", Helvetica;
    font-size: 32px;
    font-weight: 400;
    letter-spacing: 1.6px;
    line-height: 31px;
    margin-top: -1px;
    position: relative;
    width: fit-content;
  }

  & .MOBILE-7 {
    align-self: stretch;
    background-color: #ffffff;
    flex: 1;
    flex-grow: 1;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  & .overlap-group-wrapper {
    height: 338px;
    left: 15px;
    position: absolute;
    top: 177px;
    width: 278px;
  }

  & .overlap-group-5 {
    height: 338px;
    position: relative;
  }

  & .flexcontainer-wrapper {
    height: 338px;
    left: 0;
    position: absolute;
    top: 0;
    width: 278px;
  }

  & .flexcontainer-i {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 338px;
    position: relative;
    top: -1px;
    width: 278px;
  }

  & .text-i {
    align-self: stretch;
    color: var(--variable-collection-BLACK-duplicate);
    font-family: var(--MOBILE-01-font-family);
    font-size: var(--MOBILE-01-font-size);
    font-style: var(--MOBILE-01-font-style);
    font-weight: var(--MOBILE-01-font-weight);
    letter-spacing: var(--MOBILE-01-letter-spacing);
    line-height: var(--MOBILE-01-line-height);
    position: relative;
  }

  & .text-wrapper-24 {
    color: #000000;
    font-family: var(--MOBILE-01-font-family);
    font-size: var(--MOBILE-01-font-size);
    font-style: var(--MOBILE-01-font-style);
    font-weight: var(--MOBILE-01-font-weight);
    letter-spacing: var(--MOBILE-01-letter-spacing);
    line-height: var(--MOBILE-01-line-height);
  }

  & .MOBILE-8 {
    left: 0 !important;
    position: absolute !important;
    top: 321px !important;
  }

  & .MOBILE-9 {
    left: 16px !important;
    position: absolute !important;
    top: 0 !important;
  }

  & .MOBILE-10 {
    background-image: url(https://psb-eta.vercel.app/rgd/mobile/img/vector-4.svg) !important;
  }

  & .MOBILE-11 {
    left: 15px !important;
    position: absolute !important;
    top: 54px !important;
  }

  & .MOBILE-12 {
    background-image: url(https://psb-eta.vercel.app/rgd/mobile/img/vector-3.svg) !important;
  }

  & .MOBILE-13 {
    left: 120px !important;
    position: absolute !important;
    top: 54px !important;
  }

  & .MOBILE-14 {
    background-image: url(https://psb-eta.vercel.app/rgd/mobile/img/vector-2.svg) !important;
  }

  & .MOBILE-15 {
    left: 15px !important;
    position: absolute !important;
    top: 108px !important;
  }

  & .MOBILE-16 {
    background-image: url(https://psb-eta.vercel.app/rgd/mobile/img/vector-1.svg) !important;
  }
`;
  var VectorsMobile = () => {
    return /* @__PURE__ */ import_react19.default.createElement(StyledVectorsMobile, null, /* @__PURE__ */ import_react19.default.createElement("div", {
      className: "text-wrapper-23"
    }, "/ \u0420\u0410\u0411\u041E\u0422\u0410 \u0414\u041B\u042F \u041A\u0410\u0416\u0414\u041E\u0413\u041E"), /* @__PURE__ */ import_react19.default.createElement("div", {
      className: "MOBILE-7"
    }, /* @__PURE__ */ import_react19.default.createElement("div", {
      className: "overlap-group-wrapper"
    }, /* @__PURE__ */ import_react19.default.createElement("div", {
      className: "overlap-group-5"
    }, /* @__PURE__ */ import_react19.default.createElement("div", {
      className: "flexcontainer-wrapper"
    }, /* @__PURE__ */ import_react19.default.createElement("div", {
      className: "flexcontainer-i"
    }, /* @__PURE__ */ import_react19.default.createElement("p", {
      className: "text-i"
    }, /* @__PURE__ */ import_react19.default.createElement("span", {
      className: "text-wrapper-24"
    }, "\u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0435 \u0436\u0435\u043B\u0435\u0437\u043D\u044B\u0435 \u0434\u043E\u0440\u043E\u0433\u0438 \u2013 \u044D\u0442\u043E \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0435\u0437\u0434\u0430.", /* @__PURE__ */ import_react19.default.createElement("br", null))), /* @__PURE__ */ import_react19.default.createElement("p", {
      className: "text-i"
    }, /* @__PURE__ */ import_react19.default.createElement("span", {
      className: "text-wrapper-24"
    }, "\u041C\u044B \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0435\u043C \u0432 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u043D\u044B\u0445 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u0445, \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0435\u043C \u0440\u0435\u0433\u0438\u043E\u043D\u044B, \u0441\u0442\u0440\u043E\u0438\u043C \u0432\u0430\u0436\u043D\u0435\u0439\u0448\u0438\u0435 \u043E\u0431\u044A\u0435\u043A\u0442\u044B \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u2013 \u043F\u0443\u0442\u0438 \u0438 \u0442\u043E\u043D\u043D\u0435\u043B\u0438, \u043C\u043E\u0441\u0442\u044B \u0438 \u0432\u043E\u043A\u0437\u0430\u043B\u044B, \u0436\u0438\u043B\u044B\u0435 \u0434\u043E\u043C\u0430 \u0438 \u0448\u043A\u043E\u043B\u044B, \u043F\u043E\u043B\u0438\u043A\u043B\u0438\u043D\u0438\u043A\u0438 \u0438 \u0431\u043E\u043B\u044C\u043D\u0438\u0446\u044B.", /* @__PURE__ */ import_react19.default.createElement("br", null))), /* @__PURE__ */ import_react19.default.createElement("p", {
      className: "text-i"
    }, /* @__PURE__ */ import_react19.default.createElement("span", {
      className: "text-wrapper-24"
    }, "\u041D\u0430\u0448\u0430 \u0440\u0430\u0431\u043E\u0442\u0430 \u2013 \u044D\u0442\u043E \u0432\u043A\u043B\u0430\u0434 \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u0435 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0438\u0437 \u043D\u0430\u0441, \u0432 \u043F\u0440\u043E\u0446\u0432\u0435\u0442\u0430\u043D\u0438\u0435 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u0438 \u0432\u0441\u0435\u0439 \u0441\u0442\u0440\u0430\u043D\u044B.", /* @__PURE__ */ import_react19.default.createElement("br", null))), /* @__PURE__ */ import_react19.default.createElement("p", {
      className: "text-i"
    }, /* @__PURE__ */ import_react19.default.createElement("span", {
      className: "text-wrapper-24"
    }, "\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0439\u0441\u044F \u043A \u043A\u043E\u043C\u0430\u043D\u0434\u0435 \u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u0439 \u0441 \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C\u044E!")))), /* @__PURE__ */ import_react19.default.createElement(DivWrapper, {
      className: "MOBILE-8",
      property1: "one",
      vector: "https://psb-eta.vercel.app/rgd/mobile/img/vector-5.svg"
    }))), /* @__PURE__ */ import_react19.default.createElement(ConcreteComponentNode, {
      className: "MOBILE-9",
      overlapGroupClassName: "MOBILE-10",
      property1: "one"
    }), /* @__PURE__ */ import_react19.default.createElement(ConcreteComponentNode, {
      className: "MOBILE-11",
      overlapGroupClassName: "MOBILE-12",
      property1: "two"
    }), /* @__PURE__ */ import_react19.default.createElement(ConcreteComponentNode, {
      className: "MOBILE-13",
      overlapGroupClassName: "MOBILE-14",
      property1: "IT-digital"
    }), /* @__PURE__ */ import_react19.default.createElement(ConcreteComponentNode, {
      className: "MOBILE-15",
      overlapGroupClassName: "MOBILE-16",
      property1: "three"
    })));
  };

  // src/rgd/common/components/We/We.jsx
  var import_react26 = __toModule(require_react());

  // src/rgd/common/components/WeComponent/WeComponent.jsx
  var import_react20 = __toModule(require_react());
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
    return /* @__PURE__ */ import_react20.default.createElement(StyledWeComponent, {
      className: `we-component ${className}`
    }, /* @__PURE__ */ import_react20.default.createElement("div", {
      className: "text-wrapper-8"
    }, "\u041F\u0430\u0441\u0441\u0430\u0436\u0438\u0440\u0441\u043A\u0438\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438"), /* @__PURE__ */ import_react20.default.createElement("img", {
      className: "img-5",
      alt: "Img",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/19.png"
    }));
  };

  // src/rgd/common/components/WeComponent3/WeComponent3.jsx
  var import_react21 = __toModule(require_react());
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
    return /* @__PURE__ */ import_react21.default.createElement(StyledWeComponent3, {
      className: `we-component-3 ${className}`
    }, /* @__PURE__ */ import_react21.default.createElement("div", {
      className: "text-wrapper-10"
    }, "\u0418\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430"), /* @__PURE__ */ import_react21.default.createElement("img", {
      className: "img-7",
      alt: "Img",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/15.png"
    }));
  };

  // src/rgd/common/components/WeComponent4/WeComponent4.jsx
  var import_react22 = __toModule(require_react());
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
    return /* @__PURE__ */ import_react22.default.createElement(StyledWeComponent4, {
      className: `we-component-4 ${className}`
    }, /* @__PURE__ */ import_react22.default.createElement("div", {
      className: "text-wrapper-11"
    }, "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E"), /* @__PURE__ */ import_react22.default.createElement("img", {
      className: "img-8",
      alt: "Img",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/13.png"
    }));
  };

  // src/rgd/common/components/WeComponent5/WeComponent5.jsx
  var import_react23 = __toModule(require_react());
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
    return /* @__PURE__ */ import_react23.default.createElement(StyledWeComponent5, {
      className: `we-component-5 ${className}`
    }, /* @__PURE__ */ import_react23.default.createElement("div", {
      className: "text-wrapper-12"
    }, "\u0421\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0444\u0435\u0440\u0430"), /* @__PURE__ */ import_react23.default.createElement("img", {
      className: "img-9",
      alt: "Img",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/11.png"
    }));
  };

  // src/rgd/common/components/WeComponent6/WeComponent6.jsx
  var import_react24 = __toModule(require_react());
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
    return /* @__PURE__ */ import_react24.default.createElement(StyledWeComponent6, {
      className: `we-component-6 ${className}`
    }, /* @__PURE__ */ import_react24.default.createElement("div", {
      className: "text-wrapper-13"
    }, "\u041D\u0430\u0443\u043A\u0430"), /* @__PURE__ */ import_react24.default.createElement("img", {
      className: "img-10",
      alt: "Img",
      src: "https://psb-eta.vercel.app/rgd/desktop/img/9.png"
    }));
  };

  // src/rgd/common/components/WeComponentWrapper/WeComponentWrapper.jsx
  var import_react25 = __toModule(require_react());
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
    return /* @__PURE__ */ import_react25.default.createElement(StyledWeComponentWrapper, {
      className: `we-component-wrapper ${className}`
    }, /* @__PURE__ */ import_react25.default.createElement("div", {
      className: "text-wrapper-9"
    }, "\u0413\u0440\u0443\u0437\u043E\u0432\u044B\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438"), /* @__PURE__ */ import_react25.default.createElement("img", {
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
    return /* @__PURE__ */ import_react26.default.createElement(StyledWe, null, /* @__PURE__ */ import_react26.default.createElement(Title, {
      $mobile: isMobile
    }, "/ \u041C\u042B \u0413\u041E\u0420\u0414\u0418\u041C\u0421\u042F \u0422\u0415\u041C, \u0427\u0422\u041E \u0414\u0415\u041B\u0410\u0415\u041C"), /* @__PURE__ */ import_react26.default.createElement("div", {
      className: "grid"
    }, /* @__PURE__ */ import_react26.default.createElement(WeComponent, {
      className: "we-component-1"
    }), /* @__PURE__ */ import_react26.default.createElement(WeComponentWrapper, {
      className: "we-component-2"
    }), /* @__PURE__ */ import_react26.default.createElement(WeComponent3, {
      className: "we-component-instance"
    }), /* @__PURE__ */ import_react26.default.createElement(WeComponent4, {
      className: "we-component-4-instance"
    }), /* @__PURE__ */ import_react26.default.createElement(WeComponent5, {
      className: "we-component-5-instance"
    }), /* @__PURE__ */ import_react26.default.createElement(WeComponent6, {
      className: "we-component-6-instance"
    })));
  };

  // src/rgd/common/screens/RgdS/RgdS.jsx
  var StyledHhS = ut.div`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  gap: 49px;
  max-width: 300px;
  position: relative;
`;
  var RgdS = () => {
    return /* @__PURE__ */ import_react27.default.createElement(StyledHhS, null, /* @__PURE__ */ import_react27.default.createElement(SliderMobile, null), /* @__PURE__ */ import_react27.default.createElement(Raiting, null), /* @__PURE__ */ import_react27.default.createElement(AboutMobile, null), /* @__PURE__ */ import_react27.default.createElement(We2, {
      isMobile: true
    }), /* @__PURE__ */ import_react27.default.createElement(PeopleMobile, null), /* @__PURE__ */ import_react27.default.createElement(PrincipiesMobile, null), /* @__PURE__ */ import_react27.default.createElement(VectorsMobile, null), /* @__PURE__ */ import_react27.default.createElement(FootterMobile, null));
  };

  // src/rgd/mobile/client_rgd.jsx
  var div = document.getElementById("rgd_prod");
  if (div && div.childNodes.length > 0) {
    import_client.default.hydrateRoot(div, /* @__PURE__ */ import_react28.default.createElement(RgdS, null));
  } else if (div) {
    const root = import_client.default.createRoot(div);
    root.render(/* @__PURE__ */ import_react28.default.createElement(RgdS, null));
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
