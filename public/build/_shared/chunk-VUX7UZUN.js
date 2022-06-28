import {
  require_react_dom
} from "/build/_shared/chunk-IUNTHZX3.js";
import {
  Link,
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM,
  _extends,
  init_extends,
  init_react,
  require_object_assign,
  require_react,
  useLocation
} from "/build/_shared/chunk-JUKOGOL5.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    init_react();
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
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal2 = REACT_PORTAL_TYPE;
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
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal2;
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

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    init_react();
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    init_react();
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    init_react();
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    init_react();
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
        } catch (x) {
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
            var error2;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                err.name = "Invariant Violation";
                throw err;
              }
              error2 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error2 = ex;
            }
            if (error2 && !(error2 instanceof Error)) {
              printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error2 + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
            }
            if (error2 instanceof Error && !(error2.message in loggedTypeFailures)) {
              loggedTypeFailures[error2.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning("Failed " + location + " type: " + error2.message + (stack != null ? stack : ""));
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

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    init_react();
    var ReactIs = require_react_is();
    var assign = require_object_assign();
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
        } catch (x) {
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
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
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
          for (var i = 0; i < propValue.length; i++) {
            var error2 = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error2 instanceof Error) {
              return error2;
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
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
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
              var error2 = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error2 instanceof Error) {
                return error2;
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
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + ".");
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
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
            var error2 = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error2) {
              return error2;
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
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
            }
            var error2 = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error2) {
              return error2;
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

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    init_react();
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

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    init_react();
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames25() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner2 = classNames25.apply(null, arg);
              if (inner2) {
                classes.push(inner2);
              }
            }
          } else if (argType === "object") {
            if (arg.toString === Object.prototype.toString) {
              for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                  classes.push(key);
                }
              }
            } else {
              classes.push(arg.toString());
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames25.default = classNames25;
        module.exports = classNames25;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames25;
        });
      } else {
        window.classNames = classNames25;
      }
    })();
  }
});

// node_modules/object-keys/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/object-keys/isArguments.js"(exports, module) {
    "use strict";
    init_react();
    var toStr = Object.prototype.toString;
    module.exports = function isArguments(value) {
      var str = toStr.call(value);
      var isArgs = str === "[object Arguments]";
      if (!isArgs) {
        isArgs = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toStr.call(value.callee) === "[object Function]";
      }
      return isArgs;
    };
  }
});

// node_modules/object-keys/implementation.js
var require_implementation = __commonJS({
  "node_modules/object-keys/implementation.js"(exports, module) {
    "use strict";
    init_react();
    var keysShim;
    if (!Object.keys) {
      has = Object.prototype.hasOwnProperty;
      toStr = Object.prototype.toString;
      isArgs = require_isArguments();
      isEnumerable = Object.prototype.propertyIsEnumerable;
      hasDontEnumBug = !isEnumerable.call({ toString: null }, "toString");
      hasProtoEnumBug = isEnumerable.call(function() {
      }, "prototype");
      dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
      ];
      equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
      };
      excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
      };
      hasAutomationEqualityBug = function() {
        if (typeof window === "undefined") {
          return false;
        }
        for (var k in window) {
          try {
            if (!excludedKeys["$" + k] && has.call(window, k) && window[k] !== null && typeof window[k] === "object") {
              try {
                equalsConstructorPrototype(window[k]);
              } catch (e) {
                return true;
              }
            }
          } catch (e) {
            return true;
          }
        }
        return false;
      }();
      equalsConstructorPrototypeIfNotBuggy = function(o) {
        if (typeof window === "undefined" || !hasAutomationEqualityBug) {
          return equalsConstructorPrototype(o);
        }
        try {
          return equalsConstructorPrototype(o);
        } catch (e) {
          return false;
        }
      };
      keysShim = function keys(object) {
        var isObject3 = object !== null && typeof object === "object";
        var isFunction4 = toStr.call(object) === "[object Function]";
        var isArguments = isArgs(object);
        var isString2 = isObject3 && toStr.call(object) === "[object String]";
        var theKeys = [];
        if (!isObject3 && !isFunction4 && !isArguments) {
          throw new TypeError("Object.keys called on a non-object");
        }
        var skipProto = hasProtoEnumBug && isFunction4;
        if (isString2 && object.length > 0 && !has.call(object, 0)) {
          for (var i = 0; i < object.length; ++i) {
            theKeys.push(String(i));
          }
        }
        if (isArguments && object.length > 0) {
          for (var j = 0; j < object.length; ++j) {
            theKeys.push(String(j));
          }
        } else {
          for (var name in object) {
            if (!(skipProto && name === "prototype") && has.call(object, name)) {
              theKeys.push(String(name));
            }
          }
        }
        if (hasDontEnumBug) {
          var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
          for (var k = 0; k < dontEnums.length; ++k) {
            if (!(skipConstructor && dontEnums[k] === "constructor") && has.call(object, dontEnums[k])) {
              theKeys.push(dontEnums[k]);
            }
          }
        }
        return theKeys;
      };
    }
    var has;
    var toStr;
    var isArgs;
    var isEnumerable;
    var hasDontEnumBug;
    var hasProtoEnumBug;
    var dontEnums;
    var equalsConstructorPrototype;
    var excludedKeys;
    var hasAutomationEqualityBug;
    var equalsConstructorPrototypeIfNotBuggy;
    module.exports = keysShim;
  }
});

// node_modules/object-keys/index.js
var require_object_keys = __commonJS({
  "node_modules/object-keys/index.js"(exports, module) {
    "use strict";
    init_react();
    var slice = Array.prototype.slice;
    var isArgs = require_isArguments();
    var origKeys = Object.keys;
    var keysShim = origKeys ? function keys(o) {
      return origKeys(o);
    } : require_implementation();
    var originalKeys = Object.keys;
    keysShim.shim = function shimObjectKeys() {
      if (Object.keys) {
        var keysWorksWithArguments = function() {
          var args = Object.keys(arguments);
          return args && args.length === arguments.length;
        }(1, 2);
        if (!keysWorksWithArguments) {
          Object.keys = function keys(object) {
            if (isArgs(object)) {
              return originalKeys(slice.call(object));
            }
            return originalKeys(object);
          };
        }
      } else {
        Object.keys = keysShim;
      }
      return Object.keys || keysShim;
    };
    module.exports = keysShim;
  }
});

// node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "node_modules/has-symbols/shams.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/has-tostringtag/shams.js
var require_shams2 = __commonJS({
  "node_modules/has-tostringtag/shams.js"(exports, module) {
    "use strict";
    init_react();
    var hasSymbols = require_shams();
    module.exports = function hasToStringTagShams() {
      return hasSymbols() && !!Symbol.toStringTag;
    };
  }
});

// node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "node_modules/has-symbols/index.js"(exports, module) {
    "use strict";
    init_react();
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// node_modules/function-bind/implementation.js
var require_implementation2 = __commonJS({
  "node_modules/function-bind/implementation.js"(exports, module) {
    "use strict";
    init_react();
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var slice = Array.prototype.slice;
    var toStr = Object.prototype.toString;
    var funcType = "[object Function]";
    module.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slice.call(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(this, args.concat(slice.call(arguments)));
          if (Object(result) === result) {
            return result;
          }
          return this;
        } else {
          return target.apply(that, args.concat(slice.call(arguments)));
        }
      };
      var boundLength = Math.max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs.push("$" + i);
      }
      bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "node_modules/function-bind/index.js"(exports, module) {
    "use strict";
    init_react();
    var implementation = require_implementation2();
    module.exports = Function.prototype.bind || implementation;
  }
});

// node_modules/has/src/index.js
var require_src = __commonJS({
  "node_modules/has/src/index.js"(exports, module) {
    "use strict";
    init_react();
    var bind = require_function_bind();
    module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
  }
});

// node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "node_modules/get-intrinsic/index.js"(exports, module) {
    "use strict";
    init_react();
    var undefined2;
    var $SyntaxError = SyntaxError;
    var $Function = Function;
    var $TypeError = TypeError;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e) {
        $gOPD = null;
      }
    }
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = Object.getPrototypeOf || function(x) {
      return x.__proto__;
    };
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    };
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_src();
    var $concat = bind.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
    var $replace = bind.call(Function.call, String.prototype.replace);
    var $strSlice = bind.call(Function.call, String.prototype.slice);
    var $exec = bind.call(Function.call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/g, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "node_modules/call-bind/index.js"(exports, module) {
    "use strict";
    init_react();
    var bind = require_function_bind();
    var GetIntrinsic = require_get_intrinsic();
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var $max = GetIntrinsic("%Math.max%");
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = null;
      }
    }
    module.exports = function callBind(originalFunction) {
      var func = $reflectApply(bind, $call, arguments);
      if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, "length");
        if (desc.configurable) {
          $defineProperty(func, "length", { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) });
        }
      }
      return func;
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module.exports, "apply", { value: applyBind });
    } else {
      module.exports.apply = applyBind;
    }
  }
});

// node_modules/call-bind/callBound.js
var require_callBound = __commonJS({
  "node_modules/call-bind/callBound.js"(exports, module) {
    "use strict";
    init_react();
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});

// node_modules/is-arguments/index.js
var require_is_arguments = __commonJS({
  "node_modules/is-arguments/index.js"(exports, module) {
    "use strict";
    init_react();
    var hasToStringTag = require_shams2()();
    var callBound = require_callBound();
    var $toString = callBound("Object.prototype.toString");
    var isStandardArguments = function isArguments(value) {
      if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) {
        return false;
      }
      return $toString(value) === "[object Arguments]";
    };
    var isLegacyArguments = function isArguments(value) {
      if (isStandardArguments(value)) {
        return true;
      }
      return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $toString(value) !== "[object Array]" && $toString(value.callee) === "[object Function]";
    };
    var supportsStandardArguments = function() {
      return isStandardArguments(arguments);
    }();
    isStandardArguments.isLegacyArguments = isLegacyArguments;
    module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
  }
});

// node_modules/has-property-descriptors/index.js
var require_has_property_descriptors = __commonJS({
  "node_modules/has-property-descriptors/index.js"(exports, module) {
    "use strict";
    init_react();
    var GetIntrinsic = require_get_intrinsic();
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var hasPropertyDescriptors = function hasPropertyDescriptors2() {
      if ($defineProperty) {
        try {
          $defineProperty({}, "a", { value: 1 });
          return true;
        } catch (e) {
          return false;
        }
      }
      return false;
    };
    hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
      if (!hasPropertyDescriptors()) {
        return null;
      }
      try {
        return $defineProperty([], "length", { value: 1 }).length !== 1;
      } catch (e) {
        return true;
      }
    };
    module.exports = hasPropertyDescriptors;
  }
});

// node_modules/define-properties/index.js
var require_define_properties = __commonJS({
  "node_modules/define-properties/index.js"(exports, module) {
    "use strict";
    init_react();
    var keys = require_object_keys();
    var hasSymbols = typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
    var toStr = Object.prototype.toString;
    var concat = Array.prototype.concat;
    var origDefineProperty = Object.defineProperty;
    var isFunction4 = function(fn) {
      return typeof fn === "function" && toStr.call(fn) === "[object Function]";
    };
    var hasPropertyDescriptors = require_has_property_descriptors()();
    var supportsDescriptors = origDefineProperty && hasPropertyDescriptors;
    var defineProperty2 = function(object, name, value, predicate) {
      if (name in object && (!isFunction4(predicate) || !predicate())) {
        return;
      }
      if (supportsDescriptors) {
        origDefineProperty(object, name, {
          configurable: true,
          enumerable: false,
          value,
          writable: true
        });
      } else {
        object[name] = value;
      }
    };
    var defineProperties = function(object, map3) {
      var predicates = arguments.length > 2 ? arguments[2] : {};
      var props = keys(map3);
      if (hasSymbols) {
        props = concat.call(props, Object.getOwnPropertySymbols(map3));
      }
      for (var i = 0; i < props.length; i += 1) {
        defineProperty2(object, props[i], map3[props[i]], predicates[props[i]]);
      }
    };
    defineProperties.supportsDescriptors = !!supportsDescriptors;
    module.exports = defineProperties;
  }
});

// node_modules/object-is/implementation.js
var require_implementation3 = __commonJS({
  "node_modules/object-is/implementation.js"(exports, module) {
    "use strict";
    init_react();
    var numberIsNaN = function(value) {
      return value !== value;
    };
    module.exports = function is(a, b) {
      if (a === 0 && b === 0) {
        return 1 / a === 1 / b;
      }
      if (a === b) {
        return true;
      }
      if (numberIsNaN(a) && numberIsNaN(b)) {
        return true;
      }
      return false;
    };
  }
});

// node_modules/object-is/polyfill.js
var require_polyfill = __commonJS({
  "node_modules/object-is/polyfill.js"(exports, module) {
    "use strict";
    init_react();
    var implementation = require_implementation3();
    module.exports = function getPolyfill() {
      return typeof Object.is === "function" ? Object.is : implementation;
    };
  }
});

// node_modules/object-is/shim.js
var require_shim = __commonJS({
  "node_modules/object-is/shim.js"(exports, module) {
    "use strict";
    init_react();
    var getPolyfill = require_polyfill();
    var define2 = require_define_properties();
    module.exports = function shimObjectIs() {
      var polyfill2 = getPolyfill();
      define2(Object, { is: polyfill2 }, {
        is: function testObjectIs() {
          return Object.is !== polyfill2;
        }
      });
      return polyfill2;
    };
  }
});

// node_modules/object-is/index.js
var require_object_is = __commonJS({
  "node_modules/object-is/index.js"(exports, module) {
    "use strict";
    init_react();
    var define2 = require_define_properties();
    var callBind = require_call_bind();
    var implementation = require_implementation3();
    var getPolyfill = require_polyfill();
    var shim = require_shim();
    var polyfill2 = callBind(getPolyfill(), Object);
    define2(polyfill2, {
      getPolyfill,
      implementation,
      shim
    });
    module.exports = polyfill2;
  }
});

// node_modules/is-regex/index.js
var require_is_regex = __commonJS({
  "node_modules/is-regex/index.js"(exports, module) {
    "use strict";
    init_react();
    var callBound = require_callBound();
    var hasToStringTag = require_shams2()();
    var has;
    var $exec;
    var isRegexMarker;
    var badStringifier;
    if (hasToStringTag) {
      has = callBound("Object.prototype.hasOwnProperty");
      $exec = callBound("RegExp.prototype.exec");
      isRegexMarker = {};
      throwRegexMarker = function() {
        throw isRegexMarker;
      };
      badStringifier = {
        toString: throwRegexMarker,
        valueOf: throwRegexMarker
      };
      if (typeof Symbol.toPrimitive === "symbol") {
        badStringifier[Symbol.toPrimitive] = throwRegexMarker;
      }
    }
    var throwRegexMarker;
    var $toString = callBound("Object.prototype.toString");
    var gOPD = Object.getOwnPropertyDescriptor;
    var regexClass = "[object RegExp]";
    module.exports = hasToStringTag ? function isRegex(value) {
      if (!value || typeof value !== "object") {
        return false;
      }
      var descriptor = gOPD(value, "lastIndex");
      var hasLastIndexDataProperty = descriptor && has(descriptor, "value");
      if (!hasLastIndexDataProperty) {
        return false;
      }
      try {
        $exec(value, badStringifier);
      } catch (e) {
        return e === isRegexMarker;
      }
    } : function isRegex(value) {
      if (!value || typeof value !== "object" && typeof value !== "function") {
        return false;
      }
      return $toString(value) === regexClass;
    };
  }
});

// node_modules/functions-have-names/index.js
var require_functions_have_names = __commonJS({
  "node_modules/functions-have-names/index.js"(exports, module) {
    "use strict";
    init_react();
    var functionsHaveNames = function functionsHaveNames2() {
      return typeof function f() {
      }.name === "string";
    };
    var gOPD = Object.getOwnPropertyDescriptor;
    if (gOPD) {
      try {
        gOPD([], "length");
      } catch (e) {
        gOPD = null;
      }
    }
    functionsHaveNames.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {
      if (!functionsHaveNames() || !gOPD) {
        return false;
      }
      var desc = gOPD(function() {
      }, "name");
      return !!desc && !!desc.configurable;
    };
    var $bind = Function.prototype.bind;
    functionsHaveNames.boundFunctionsHaveNames = function boundFunctionsHaveNames() {
      return functionsHaveNames() && typeof $bind === "function" && function f() {
      }.bind().name !== "";
    };
    module.exports = functionsHaveNames;
  }
});

// node_modules/regexp.prototype.flags/implementation.js
var require_implementation4 = __commonJS({
  "node_modules/regexp.prototype.flags/implementation.js"(exports, module) {
    "use strict";
    init_react();
    var functionsHaveConfigurableNames = require_functions_have_names().functionsHaveConfigurableNames();
    var $Object = Object;
    var $TypeError = TypeError;
    module.exports = function flags() {
      if (this != null && this !== $Object(this)) {
        throw new $TypeError("RegExp.prototype.flags getter called on non-object");
      }
      var result = "";
      if (this.hasIndices) {
        result += "d";
      }
      if (this.global) {
        result += "g";
      }
      if (this.ignoreCase) {
        result += "i";
      }
      if (this.multiline) {
        result += "m";
      }
      if (this.dotAll) {
        result += "s";
      }
      if (this.unicode) {
        result += "u";
      }
      if (this.sticky) {
        result += "y";
      }
      return result;
    };
    if (functionsHaveConfigurableNames && Object.defineProperty) {
      Object.defineProperty(module.exports, "name", { value: "get flags" });
    }
  }
});

// node_modules/regexp.prototype.flags/polyfill.js
var require_polyfill2 = __commonJS({
  "node_modules/regexp.prototype.flags/polyfill.js"(exports, module) {
    "use strict";
    init_react();
    var implementation = require_implementation4();
    var supportsDescriptors = require_define_properties().supportsDescriptors;
    var $gOPD = Object.getOwnPropertyDescriptor;
    module.exports = function getPolyfill() {
      if (supportsDescriptors && /a/mig.flags === "gim") {
        var descriptor = $gOPD(RegExp.prototype, "flags");
        if (descriptor && typeof descriptor.get === "function" && typeof RegExp.prototype.dotAll === "boolean" && typeof RegExp.prototype.hasIndices === "boolean") {
          var calls = "";
          var o = {};
          Object.defineProperty(o, "hasIndices", {
            get: function() {
              calls += "d";
            }
          });
          Object.defineProperty(o, "sticky", {
            get: function() {
              calls += "y";
            }
          });
          if (calls === "dy") {
            return descriptor.get;
          }
        }
      }
      return implementation;
    };
  }
});

// node_modules/regexp.prototype.flags/shim.js
var require_shim2 = __commonJS({
  "node_modules/regexp.prototype.flags/shim.js"(exports, module) {
    "use strict";
    init_react();
    var supportsDescriptors = require_define_properties().supportsDescriptors;
    var getPolyfill = require_polyfill2();
    var gOPD = Object.getOwnPropertyDescriptor;
    var defineProperty2 = Object.defineProperty;
    var TypeErr = TypeError;
    var getProto = Object.getPrototypeOf;
    var regex = /a/;
    module.exports = function shimFlags() {
      if (!supportsDescriptors || !getProto) {
        throw new TypeErr("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
      }
      var polyfill2 = getPolyfill();
      var proto = getProto(regex);
      var descriptor = gOPD(proto, "flags");
      if (!descriptor || descriptor.get !== polyfill2) {
        defineProperty2(proto, "flags", {
          configurable: true,
          enumerable: false,
          get: polyfill2
        });
      }
      return polyfill2;
    };
  }
});

// node_modules/regexp.prototype.flags/index.js
var require_regexp_prototype = __commonJS({
  "node_modules/regexp.prototype.flags/index.js"(exports, module) {
    "use strict";
    init_react();
    var define2 = require_define_properties();
    var callBind = require_call_bind();
    var implementation = require_implementation4();
    var getPolyfill = require_polyfill2();
    var shim = require_shim2();
    var flagsBound = callBind(getPolyfill());
    define2(flagsBound, {
      getPolyfill,
      implementation,
      shim
    });
    module.exports = flagsBound;
  }
});

// node_modules/is-date-object/index.js
var require_is_date_object = __commonJS({
  "node_modules/is-date-object/index.js"(exports, module) {
    "use strict";
    init_react();
    var getDay = Date.prototype.getDay;
    var tryDateObject = function tryDateGetDayCall(value) {
      try {
        getDay.call(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var toStr = Object.prototype.toString;
    var dateClass = "[object Date]";
    var hasToStringTag = require_shams2()();
    module.exports = function isDateObject(value) {
      if (typeof value !== "object" || value === null) {
        return false;
      }
      return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
    };
  }
});

// node_modules/deep-equal/index.js
var require_deep_equal = __commonJS({
  "node_modules/deep-equal/index.js"(exports, module) {
    init_react();
    var objectKeys2 = require_object_keys();
    var isArguments = require_is_arguments();
    var is = require_object_is();
    var isRegex = require_is_regex();
    var flags = require_regexp_prototype();
    var isDate2 = require_is_date_object();
    var getTime = Date.prototype.getTime;
    function deepEqual2(actual, expected, options) {
      var opts = options || {};
      if (opts.strict ? is(actual, expected) : actual === expected) {
        return true;
      }
      if (!actual || !expected || typeof actual !== "object" && typeof expected !== "object") {
        return opts.strict ? is(actual, expected) : actual == expected;
      }
      return objEquiv(actual, expected, opts);
    }
    function isUndefinedOrNull(value) {
      return value === null || value === void 0;
    }
    function isBuffer(x) {
      if (!x || typeof x !== "object" || typeof x.length !== "number") {
        return false;
      }
      if (typeof x.copy !== "function" || typeof x.slice !== "function") {
        return false;
      }
      if (x.length > 0 && typeof x[0] !== "number") {
        return false;
      }
      return true;
    }
    function objEquiv(a, b, opts) {
      var i, key;
      if (typeof a !== typeof b) {
        return false;
      }
      if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) {
        return false;
      }
      if (a.prototype !== b.prototype) {
        return false;
      }
      if (isArguments(a) !== isArguments(b)) {
        return false;
      }
      var aIsRegex = isRegex(a);
      var bIsRegex = isRegex(b);
      if (aIsRegex !== bIsRegex) {
        return false;
      }
      if (aIsRegex || bIsRegex) {
        return a.source === b.source && flags(a) === flags(b);
      }
      if (isDate2(a) && isDate2(b)) {
        return getTime.call(a) === getTime.call(b);
      }
      var aIsBuffer = isBuffer(a);
      var bIsBuffer = isBuffer(b);
      if (aIsBuffer !== bIsBuffer) {
        return false;
      }
      if (aIsBuffer || bIsBuffer) {
        if (a.length !== b.length) {
          return false;
        }
        for (i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
            return false;
          }
        }
        return true;
      }
      if (typeof a !== typeof b) {
        return false;
      }
      try {
        var ka = objectKeys2(a);
        var kb = objectKeys2(b);
      } catch (e) {
        return false;
      }
      if (ka.length !== kb.length) {
        return false;
      }
      ka.sort();
      kb.sort();
      for (i = ka.length - 1; i >= 0; i--) {
        if (ka[i] != kb[i]) {
          return false;
        }
      }
      for (i = ka.length - 1; i >= 0; i--) {
        key = ka[i];
        if (!deepEqual2(a[key], b[key], opts)) {
          return false;
        }
      }
      return true;
    }
    module.exports = deepEqual2;
  }
});

// node_modules/gud/index.js
var require_gud = __commonJS({
  "node_modules/gud/index.js"(exports, module) {
    "use strict";
    init_react();
    var key = "__global_unique_id__";
    module.exports = function() {
      return globalThis[key] = (globalThis[key] || 0) + 1;
    };
  }
});

// node_modules/warning/warning.js
var require_warning = __commonJS({
  "node_modules/warning/warning.js"(exports, module) {
    "use strict";
    init_react();
    var __DEV__ = true;
    var warning2 = function() {
    };
    if (__DEV__) {
      printWarning = function printWarning2(format2, args) {
        var len = arguments.length;
        args = new Array(len > 1 ? len - 1 : 0);
        for (var key = 1; key < len; key++) {
          args[key - 1] = arguments[key];
        }
        var argIndex = 0;
        var message = "Warning: " + format2.replace(/%s/g, function() {
          return args[argIndex++];
        });
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
      warning2 = function(condition, format2, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
          args[key - 2] = arguments[key];
        }
        if (format2 === void 0) {
          throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
        }
        if (!condition) {
          printWarning.apply(null, [format2].concat(args));
        }
      };
    }
    var printWarning;
    module.exports = warning2;
  }
});

// node_modules/@hypnosphi/create-react-context/lib/implementation.js
var require_implementation5 = __commonJS({
  "node_modules/@hypnosphi/create-react-context/lib/implementation.js"(exports, module) {
    "use strict";
    init_react();
    exports.__esModule = true;
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var _gud = require_gud();
    var _gud2 = _interopRequireDefault(_gud);
    var _warning = require_warning();
    var _warning2 = _interopRequireDefault(_warning);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self2, call) {
      if (!self2) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self2;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var MAX_SIGNED_31_BIT_INT = 1073741823;
    function objectIs(x, y) {
      if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
      } else {
        return x !== x && y !== y;
      }
    }
    function createEventEmitter(value) {
      var handlers = [];
      return {
        on: function on(handler) {
          handlers.push(handler);
        },
        off: function off(handler) {
          handlers = handlers.filter(function(h) {
            return h !== handler;
          });
        },
        get: function get() {
          return value;
        },
        set: function set(newValue, changedBits) {
          value = newValue;
          handlers.forEach(function(handler) {
            return handler(value, changedBits);
          });
        }
      };
    }
    function onlyChild(children) {
      return Array.isArray(children) ? children[0] : children;
    }
    function createReactContext(defaultValue, calculateChangedBits) {
      var _Provider$childContex, _Consumer$contextType;
      var contextProp = "__create-react-context-" + (0, _gud2.default)() + "__";
      var Provider = function(_Component) {
        _inherits(Provider2, _Component);
        function Provider2() {
          var _temp, _this, _ret;
          _classCallCheck(this, Provider2);
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
        }
        Provider2.prototype.getChildContext = function getChildContext() {
          var _ref;
          return _ref = {}, _ref[contextProp] = this.emitter, _ref;
        };
        Provider2.prototype.componentWillReceiveProps = function componentWillReceiveProps2(nextProps) {
          if (this.props.value !== nextProps.value) {
            var oldValue = this.props.value;
            var newValue = nextProps.value;
            var changedBits = void 0;
            if (objectIs(oldValue, newValue)) {
              changedBits = 0;
            } else {
              changedBits = typeof calculateChangedBits === "function" ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
              if (true) {
                (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, "calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s", changedBits);
              }
              changedBits |= 0;
              if (changedBits !== 0) {
                this.emitter.set(nextProps.value, changedBits);
              }
            }
          }
        };
        Provider2.prototype.render = function render() {
          return this.props.children;
        };
        return Provider2;
      }(_react.Component);
      Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);
      var Consumer = function(_Component2) {
        _inherits(Consumer2, _Component2);
        function Consumer2() {
          var _temp2, _this2, _ret2;
          _classCallCheck(this, Consumer2);
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
            value: _this2.getValue()
          }, _this2.onUpdate = function(newValue, changedBits) {
            var observedBits = _this2.observedBits | 0;
            if ((observedBits & changedBits) !== 0) {
              _this2.setState({ value: _this2.getValue() });
            }
          }, _temp2), _possibleConstructorReturn(_this2, _ret2);
        }
        Consumer2.prototype.componentWillReceiveProps = function componentWillReceiveProps2(nextProps) {
          var observedBits = nextProps.observedBits;
          this.observedBits = observedBits === void 0 || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
        };
        Consumer2.prototype.componentDidMount = function componentDidMount() {
          if (this.context[contextProp]) {
            this.context[contextProp].on(this.onUpdate);
          }
          var observedBits = this.props.observedBits;
          this.observedBits = observedBits === void 0 || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
        };
        Consumer2.prototype.componentWillUnmount = function componentWillUnmount() {
          if (this.context[contextProp]) {
            this.context[contextProp].off(this.onUpdate);
          }
        };
        Consumer2.prototype.getValue = function getValue() {
          if (this.context[contextProp]) {
            return this.context[contextProp].get();
          } else {
            return defaultValue;
          }
        };
        Consumer2.prototype.render = function render() {
          return onlyChild(this.props.children)(this.state.value);
        };
        return Consumer2;
      }(_react.Component);
      Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);
      return {
        Provider,
        Consumer
      };
    }
    exports.default = createReactContext;
    module.exports = exports["default"];
  }
});

// node_modules/@hypnosphi/create-react-context/lib/index.js
var require_lib = __commonJS({
  "node_modules/@hypnosphi/create-react-context/lib/index.js"(exports, module) {
    "use strict";
    init_react();
    exports.__esModule = true;
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _implementation = require_implementation5();
    var _implementation2 = _interopRequireDefault(_implementation);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _react2.default.createContext || _implementation2.default;
    module.exports = exports["default"];
  }
});

// node_modules/@babel/runtime/helpers/interopRequireDefault.js
var require_interopRequireDefault = __commonJS({
  "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
    init_react();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/dom-helpers/class/hasClass.js
var require_hasClass = __commonJS({
  "node_modules/dom-helpers/class/hasClass.js"(exports, module) {
    "use strict";
    init_react();
    exports.__esModule = true;
    exports.default = hasClass;
    function hasClass(element, className) {
      if (element.classList)
        return !!className && element.classList.contains(className);
      else
        return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
    }
    module.exports = exports["default"];
  }
});

// node_modules/dom-helpers/class/addClass.js
var require_addClass = __commonJS({
  "node_modules/dom-helpers/class/addClass.js"(exports, module) {
    "use strict";
    init_react();
    var _interopRequireDefault = require_interopRequireDefault();
    exports.__esModule = true;
    exports.default = addClass;
    var _hasClass = _interopRequireDefault(require_hasClass());
    function addClass(element, className) {
      if (element.classList)
        element.classList.add(className);
      else if (!(0, _hasClass.default)(element, className))
        if (typeof element.className === "string")
          element.className = element.className + " " + className;
        else
          element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
    }
    module.exports = exports["default"];
  }
});

// node_modules/dom-helpers/class/removeClass.js
var require_removeClass = __commonJS({
  "node_modules/dom-helpers/class/removeClass.js"(exports, module) {
    "use strict";
    init_react();
    function replaceClassName(origClass, classToRemove) {
      return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
    }
    module.exports = function removeClass(element, className) {
      if (element.classList)
        element.classList.remove(className);
      else if (typeof element.className === "string")
        element.className = replaceClassName(element.className, className);
      else
        element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
    };
  }
});

// node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
var react_lifecycles_compat_es_exports = {};
__export(react_lifecycles_compat_es_exports, {
  polyfill: () => polyfill
});
function componentWillMount() {
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== void 0) {
    this.setState(state);
  }
}
function componentWillReceiveProps(nextProps) {
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== void 0 ? state : null;
  }
  this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}
function polyfill(Component6) {
  var prototype = Component6.prototype;
  if (!prototype || !prototype.isReactComponent) {
    throw new Error("Can only polyfill class components");
  }
  if (typeof Component6.getDerivedStateFromProps !== "function" && typeof prototype.getSnapshotBeforeUpdate !== "function") {
    return Component6;
  }
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === "function") {
    foundWillMountName = "componentWillMount";
  } else if (typeof prototype.UNSAFE_componentWillMount === "function") {
    foundWillMountName = "UNSAFE_componentWillMount";
  }
  if (typeof prototype.componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "componentWillReceiveProps";
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
  }
  if (typeof prototype.componentWillUpdate === "function") {
    foundWillUpdateName = "componentWillUpdate";
  } else if (typeof prototype.UNSAFE_componentWillUpdate === "function") {
    foundWillUpdateName = "UNSAFE_componentWillUpdate";
  }
  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component6.displayName || Component6.name;
    var newApiName = typeof Component6.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + componentName + " uses " + newApiName + " but also contains the following legacy lifecycles:" + (foundWillMountName !== null ? "\n  " + foundWillMountName : "") + (foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "") + (foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks");
  }
  if (typeof Component6.getDerivedStateFromProps === "function") {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }
  if (typeof prototype.getSnapshotBeforeUpdate === "function") {
    if (typeof prototype.componentDidUpdate !== "function") {
      throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
    }
    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;
    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }
  return Component6;
}
var init_react_lifecycles_compat_es = __esm({
  "node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js"() {
    init_react();
    componentWillMount.__suppressDeprecationWarning = true;
    componentWillReceiveProps.__suppressDeprecationWarning = true;
    componentWillUpdate.__suppressDeprecationWarning = true;
  }
});

// node_modules/react-transition-group/utils/PropTypes.js
var require_PropTypes = __commonJS({
  "node_modules/react-transition-group/utils/PropTypes.js"(exports) {
    "use strict";
    init_react();
    exports.__esModule = true;
    exports.classNamesShape = exports.timeoutsShape = void 0;
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var timeoutsShape = true ? _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
      enter: _propTypes.default.number,
      exit: _propTypes.default.number,
      appear: _propTypes.default.number
    }).isRequired]) : null;
    exports.timeoutsShape = timeoutsShape;
    var classNamesShape = true ? _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
      enter: _propTypes.default.string,
      exit: _propTypes.default.string,
      active: _propTypes.default.string
    }), _propTypes.default.shape({
      enter: _propTypes.default.string,
      enterDone: _propTypes.default.string,
      enterActive: _propTypes.default.string,
      exit: _propTypes.default.string,
      exitDone: _propTypes.default.string,
      exitActive: _propTypes.default.string
    })]) : null;
    exports.classNamesShape = classNamesShape;
  }
});

// node_modules/react-transition-group/TransitionGroupContext.js
var require_TransitionGroupContext = __commonJS({
  "node_modules/react-transition-group/TransitionGroupContext.js"(exports, module) {
    "use strict";
    init_react();
    exports.__esModule = true;
    exports.default = void 0;
    var _react = _interopRequireDefault(require_react());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var _default = _react.default.createContext(null);
    exports.default = _default;
    module.exports = exports["default"];
  }
});

// node_modules/react-transition-group/Transition.js
var require_Transition = __commonJS({
  "node_modules/react-transition-group/Transition.js"(exports) {
    "use strict";
    init_react();
    exports.__esModule = true;
    exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;
    var PropTypes28 = _interopRequireWildcard(require_prop_types());
    var _react = _interopRequireDefault(require_react());
    var _reactDom = _interopRequireDefault(require_react_dom());
    var _reactLifecyclesCompat = (init_react_lifecycles_compat_es(), __toCommonJS(react_lifecycles_compat_es_exports));
    var _PropTypes = require_PropTypes();
    var _TransitionGroupContext = _interopRequireDefault(require_TransitionGroupContext());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
              if (desc.get || desc.set) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _objectWithoutPropertiesLoose2(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function _inheritsLoose2(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    var UNMOUNTED = "unmounted";
    exports.UNMOUNTED = UNMOUNTED;
    var EXITED = "exited";
    exports.EXITED = EXITED;
    var ENTERING = "entering";
    exports.ENTERING = ENTERING;
    var ENTERED = "entered";
    exports.ENTERED = ENTERED;
    var EXITING = "exiting";
    exports.EXITING = EXITING;
    var Transition3 = /* @__PURE__ */ function(_React$Component) {
      _inheritsLoose2(Transition4, _React$Component);
      function Transition4(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var parentGroup = context;
        var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
        var initialStatus;
        _this.appearStatus = null;
        if (props.in) {
          if (appear) {
            initialStatus = EXITED;
            _this.appearStatus = ENTERING;
          } else {
            initialStatus = ENTERED;
          }
        } else {
          if (props.unmountOnExit || props.mountOnEnter) {
            initialStatus = UNMOUNTED;
          } else {
            initialStatus = EXITED;
          }
        }
        _this.state = {
          status: initialStatus
        };
        _this.nextCallback = null;
        return _this;
      }
      Transition4.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
        var nextIn = _ref.in;
        if (nextIn && prevState.status === UNMOUNTED) {
          return {
            status: EXITED
          };
        }
        return null;
      };
      var _proto = Transition4.prototype;
      _proto.componentDidMount = function componentDidMount() {
        this.updateStatus(true, this.appearStatus);
      };
      _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        var nextStatus = null;
        if (prevProps !== this.props) {
          var status = this.state.status;
          if (this.props.in) {
            if (status !== ENTERING && status !== ENTERED) {
              nextStatus = ENTERING;
            }
          } else {
            if (status === ENTERING || status === ENTERED) {
              nextStatus = EXITING;
            }
          }
        }
        this.updateStatus(false, nextStatus);
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        this.cancelNextCallback();
      };
      _proto.getTimeouts = function getTimeouts() {
        var timeout = this.props.timeout;
        var exit, enter, appear;
        exit = enter = appear = timeout;
        if (timeout != null && typeof timeout !== "number") {
          exit = timeout.exit;
          enter = timeout.enter;
          appear = timeout.appear !== void 0 ? timeout.appear : enter;
        }
        return {
          exit,
          enter,
          appear
        };
      };
      _proto.updateStatus = function updateStatus(mounting, nextStatus) {
        if (mounting === void 0) {
          mounting = false;
        }
        if (nextStatus !== null) {
          this.cancelNextCallback();
          var node = _reactDom.default.findDOMNode(this);
          if (nextStatus === ENTERING) {
            this.performEnter(node, mounting);
          } else {
            this.performExit(node);
          }
        } else if (this.props.unmountOnExit && this.state.status === EXITED) {
          this.setState({
            status: UNMOUNTED
          });
        }
      };
      _proto.performEnter = function performEnter(node, mounting) {
        var _this2 = this;
        var enter = this.props.enter;
        var appearing = this.context ? this.context.isMounting : mounting;
        var timeouts = this.getTimeouts();
        var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
        if (!mounting && !enter) {
          this.safeSetState({
            status: ENTERED
          }, function() {
            _this2.props.onEntered(node);
          });
          return;
        }
        this.props.onEnter(node, appearing);
        this.safeSetState({
          status: ENTERING
        }, function() {
          _this2.props.onEntering(node, appearing);
          _this2.onTransitionEnd(node, enterTimeout, function() {
            _this2.safeSetState({
              status: ENTERED
            }, function() {
              _this2.props.onEntered(node, appearing);
            });
          });
        });
      };
      _proto.performExit = function performExit(node) {
        var _this3 = this;
        var exit = this.props.exit;
        var timeouts = this.getTimeouts();
        if (!exit) {
          this.safeSetState({
            status: EXITED
          }, function() {
            _this3.props.onExited(node);
          });
          return;
        }
        this.props.onExit(node);
        this.safeSetState({
          status: EXITING
        }, function() {
          _this3.props.onExiting(node);
          _this3.onTransitionEnd(node, timeouts.exit, function() {
            _this3.safeSetState({
              status: EXITED
            }, function() {
              _this3.props.onExited(node);
            });
          });
        });
      };
      _proto.cancelNextCallback = function cancelNextCallback() {
        if (this.nextCallback !== null) {
          this.nextCallback.cancel();
          this.nextCallback = null;
        }
      };
      _proto.safeSetState = function safeSetState(nextState, callback) {
        callback = this.setNextCallback(callback);
        this.setState(nextState, callback);
      };
      _proto.setNextCallback = function setNextCallback(callback) {
        var _this4 = this;
        var active = true;
        this.nextCallback = function(event) {
          if (active) {
            active = false;
            _this4.nextCallback = null;
            callback(event);
          }
        };
        this.nextCallback.cancel = function() {
          active = false;
        };
        return this.nextCallback;
      };
      _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
        this.setNextCallback(handler);
        var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
        if (!node || doesNotHaveTimeoutOrListener) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          this.props.addEndListener(node, this.nextCallback);
        }
        if (timeout != null) {
          setTimeout(this.nextCallback, timeout);
        }
      };
      _proto.render = function render() {
        var status = this.state.status;
        if (status === UNMOUNTED) {
          return null;
        }
        var _this$props = this.props, children = _this$props.children, childProps = _objectWithoutPropertiesLoose2(_this$props, ["children"]);
        delete childProps.in;
        delete childProps.mountOnEnter;
        delete childProps.unmountOnExit;
        delete childProps.appear;
        delete childProps.enter;
        delete childProps.exit;
        delete childProps.timeout;
        delete childProps.addEndListener;
        delete childProps.onEnter;
        delete childProps.onEntering;
        delete childProps.onEntered;
        delete childProps.onExit;
        delete childProps.onExiting;
        delete childProps.onExited;
        if (typeof children === "function") {
          return _react.default.createElement(_TransitionGroupContext.default.Provider, {
            value: null
          }, children(status, childProps));
        }
        var child = _react.default.Children.only(children);
        return _react.default.createElement(_TransitionGroupContext.default.Provider, {
          value: null
        }, _react.default.cloneElement(child, childProps));
      };
      return Transition4;
    }(_react.default.Component);
    Transition3.contextType = _TransitionGroupContext.default;
    Transition3.propTypes = true ? {
      children: PropTypes28.oneOfType([PropTypes28.func.isRequired, PropTypes28.element.isRequired]).isRequired,
      in: PropTypes28.bool,
      mountOnEnter: PropTypes28.bool,
      unmountOnExit: PropTypes28.bool,
      appear: PropTypes28.bool,
      enter: PropTypes28.bool,
      exit: PropTypes28.bool,
      timeout: function timeout(props) {
        var pt = _PropTypes.timeoutsShape;
        if (!props.addEndListener)
          pt = pt.isRequired;
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        return pt.apply(void 0, [props].concat(args));
      },
      addEndListener: PropTypes28.func,
      onEnter: PropTypes28.func,
      onEntering: PropTypes28.func,
      onEntered: PropTypes28.func,
      onExit: PropTypes28.func,
      onExiting: PropTypes28.func,
      onExited: PropTypes28.func
    } : {};
    function noop2() {
    }
    Transition3.defaultProps = {
      in: false,
      mountOnEnter: false,
      unmountOnExit: false,
      appear: false,
      enter: true,
      exit: true,
      onEnter: noop2,
      onEntering: noop2,
      onEntered: noop2,
      onExit: noop2,
      onExiting: noop2,
      onExited: noop2
    };
    Transition3.UNMOUNTED = 0;
    Transition3.EXITED = 1;
    Transition3.ENTERING = 2;
    Transition3.ENTERED = 3;
    Transition3.EXITING = 4;
    var _default = (0, _reactLifecyclesCompat.polyfill)(Transition3);
    exports.default = _default;
  }
});

// node_modules/react-transition-group/CSSTransition.js
var require_CSSTransition = __commonJS({
  "node_modules/react-transition-group/CSSTransition.js"(exports, module) {
    "use strict";
    init_react();
    exports.__esModule = true;
    exports.default = void 0;
    var PropTypes28 = _interopRequireWildcard(require_prop_types());
    var _addClass = _interopRequireDefault(require_addClass());
    var _removeClass = _interopRequireDefault(require_removeClass());
    var _react = _interopRequireDefault(require_react());
    var _Transition = _interopRequireDefault(require_Transition());
    var _PropTypes = require_PropTypes();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
              if (desc.get || desc.set) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
    function _extends3() {
      _extends3 = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends3.apply(this, arguments);
    }
    function _inheritsLoose2(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    var addClass = function addClass2(node, classes) {
      return node && classes && classes.split(" ").forEach(function(c) {
        return (0, _addClass.default)(node, c);
      });
    };
    var removeClass = function removeClass2(node, classes) {
      return node && classes && classes.split(" ").forEach(function(c) {
        return (0, _removeClass.default)(node, c);
      });
    };
    var CSSTransition = /* @__PURE__ */ function(_React$Component) {
      _inheritsLoose2(CSSTransition2, _React$Component);
      function CSSTransition2() {
        var _this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
        _this.onEnter = function(node, appearing) {
          var _this$getClassNames = _this.getClassNames(appearing ? "appear" : "enter"), className = _this$getClassNames.className;
          _this.removeClasses(node, "exit");
          addClass(node, className);
          if (_this.props.onEnter) {
            _this.props.onEnter(node, appearing);
          }
        };
        _this.onEntering = function(node, appearing) {
          var _this$getClassNames2 = _this.getClassNames(appearing ? "appear" : "enter"), activeClassName = _this$getClassNames2.activeClassName;
          _this.reflowAndAddClass(node, activeClassName);
          if (_this.props.onEntering) {
            _this.props.onEntering(node, appearing);
          }
        };
        _this.onEntered = function(node, appearing) {
          var appearClassName = _this.getClassNames("appear").doneClassName;
          var enterClassName = _this.getClassNames("enter").doneClassName;
          var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;
          _this.removeClasses(node, appearing ? "appear" : "enter");
          addClass(node, doneClassName);
          if (_this.props.onEntered) {
            _this.props.onEntered(node, appearing);
          }
        };
        _this.onExit = function(node) {
          var _this$getClassNames3 = _this.getClassNames("exit"), className = _this$getClassNames3.className;
          _this.removeClasses(node, "appear");
          _this.removeClasses(node, "enter");
          addClass(node, className);
          if (_this.props.onExit) {
            _this.props.onExit(node);
          }
        };
        _this.onExiting = function(node) {
          var _this$getClassNames4 = _this.getClassNames("exit"), activeClassName = _this$getClassNames4.activeClassName;
          _this.reflowAndAddClass(node, activeClassName);
          if (_this.props.onExiting) {
            _this.props.onExiting(node);
          }
        };
        _this.onExited = function(node) {
          var _this$getClassNames5 = _this.getClassNames("exit"), doneClassName = _this$getClassNames5.doneClassName;
          _this.removeClasses(node, "exit");
          addClass(node, doneClassName);
          if (_this.props.onExited) {
            _this.props.onExited(node);
          }
        };
        _this.getClassNames = function(type) {
          var classNames25 = _this.props.classNames;
          var isStringClassNames = typeof classNames25 === "string";
          var prefix = isStringClassNames && classNames25 ? classNames25 + "-" : "";
          var className = isStringClassNames ? prefix + type : classNames25[type];
          var activeClassName = isStringClassNames ? className + "-active" : classNames25[type + "Active"];
          var doneClassName = isStringClassNames ? className + "-done" : classNames25[type + "Done"];
          return {
            className,
            activeClassName,
            doneClassName
          };
        };
        return _this;
      }
      var _proto = CSSTransition2.prototype;
      _proto.removeClasses = function removeClasses(node, type) {
        var _this$getClassNames6 = this.getClassNames(type), className = _this$getClassNames6.className, activeClassName = _this$getClassNames6.activeClassName, doneClassName = _this$getClassNames6.doneClassName;
        className && removeClass(node, className);
        activeClassName && removeClass(node, activeClassName);
        doneClassName && removeClass(node, doneClassName);
      };
      _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
        if (className) {
          node && node.scrollTop;
          addClass(node, className);
        }
      };
      _proto.render = function render() {
        var props = _extends3({}, this.props);
        delete props.classNames;
        return _react.default.createElement(_Transition.default, _extends3({}, props, {
          onEnter: this.onEnter,
          onEntered: this.onEntered,
          onEntering: this.onEntering,
          onExit: this.onExit,
          onExiting: this.onExiting,
          onExited: this.onExited
        }));
      };
      return CSSTransition2;
    }(_react.default.Component);
    CSSTransition.defaultProps = {
      classNames: ""
    };
    CSSTransition.propTypes = true ? _extends3({}, _Transition.default.propTypes, {
      classNames: _PropTypes.classNamesShape,
      onEnter: PropTypes28.func,
      onEntering: PropTypes28.func,
      onEntered: PropTypes28.func,
      onExit: PropTypes28.func,
      onExiting: PropTypes28.func,
      onExited: PropTypes28.func
    }) : {};
    var _default = CSSTransition;
    exports.default = _default;
    module.exports = exports["default"];
  }
});

// node_modules/react-transition-group/utils/ChildMapping.js
var require_ChildMapping = __commonJS({
  "node_modules/react-transition-group/utils/ChildMapping.js"(exports) {
    "use strict";
    init_react();
    exports.__esModule = true;
    exports.getChildMapping = getChildMapping;
    exports.mergeChildMappings = mergeChildMappings;
    exports.getInitialChildMapping = getInitialChildMapping;
    exports.getNextChildMapping = getNextChildMapping;
    var _react = require_react();
    function getChildMapping(children, mapFn) {
      var mapper = function mapper2(child) {
        return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
      };
      var result = /* @__PURE__ */ Object.create(null);
      if (children)
        _react.Children.map(children, function(c) {
          return c;
        }).forEach(function(child) {
          result[child.key] = mapper(child);
        });
      return result;
    }
    function mergeChildMappings(prev, next) {
      prev = prev || {};
      next = next || {};
      function getValueForKey(key) {
        return key in next ? next[key] : prev[key];
      }
      var nextKeysPending = /* @__PURE__ */ Object.create(null);
      var pendingKeys = [];
      for (var prevKey in prev) {
        if (prevKey in next) {
          if (pendingKeys.length) {
            nextKeysPending[prevKey] = pendingKeys;
            pendingKeys = [];
          }
        } else {
          pendingKeys.push(prevKey);
        }
      }
      var i;
      var childMapping = {};
      for (var nextKey in next) {
        if (nextKeysPending[nextKey]) {
          for (i = 0; i < nextKeysPending[nextKey].length; i++) {
            var pendingNextKey = nextKeysPending[nextKey][i];
            childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
          }
        }
        childMapping[nextKey] = getValueForKey(nextKey);
      }
      for (i = 0; i < pendingKeys.length; i++) {
        childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
      }
      return childMapping;
    }
    function getProp(child, prop, props) {
      return props[prop] != null ? props[prop] : child.props[prop];
    }
    function getInitialChildMapping(props, onExited) {
      return getChildMapping(props.children, function(child) {
        return (0, _react.cloneElement)(child, {
          onExited: onExited.bind(null, child),
          in: true,
          appear: getProp(child, "appear", props),
          enter: getProp(child, "enter", props),
          exit: getProp(child, "exit", props)
        });
      });
    }
    function getNextChildMapping(nextProps, prevChildMapping, onExited) {
      var nextChildMapping = getChildMapping(nextProps.children);
      var children = mergeChildMappings(prevChildMapping, nextChildMapping);
      Object.keys(children).forEach(function(key) {
        var child = children[key];
        if (!(0, _react.isValidElement)(child))
          return;
        var hasPrev = key in prevChildMapping;
        var hasNext = key in nextChildMapping;
        var prevChild = prevChildMapping[key];
        var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in;
        if (hasNext && (!hasPrev || isLeaving)) {
          children[key] = (0, _react.cloneElement)(child, {
            onExited: onExited.bind(null, child),
            in: true,
            exit: getProp(child, "exit", nextProps),
            enter: getProp(child, "enter", nextProps)
          });
        } else if (!hasNext && hasPrev && !isLeaving) {
          children[key] = (0, _react.cloneElement)(child, {
            in: false
          });
        } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
          children[key] = (0, _react.cloneElement)(child, {
            onExited: onExited.bind(null, child),
            in: prevChild.props.in,
            exit: getProp(child, "exit", nextProps),
            enter: getProp(child, "enter", nextProps)
          });
        }
      });
      return children;
    }
  }
});

// node_modules/react-transition-group/TransitionGroup.js
var require_TransitionGroup = __commonJS({
  "node_modules/react-transition-group/TransitionGroup.js"(exports, module) {
    "use strict";
    init_react();
    exports.__esModule = true;
    exports.default = void 0;
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireDefault(require_react());
    var _reactLifecyclesCompat = (init_react_lifecycles_compat_es(), __toCommonJS(react_lifecycles_compat_es_exports));
    var _TransitionGroupContext = _interopRequireDefault(require_TransitionGroupContext());
    var _ChildMapping = require_ChildMapping();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _objectWithoutPropertiesLoose2(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function _extends3() {
      _extends3 = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends3.apply(this, arguments);
    }
    function _inheritsLoose2(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    function _assertThisInitialized2(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    var values = Object.values || function(obj) {
      return Object.keys(obj).map(function(k) {
        return obj[k];
      });
    };
    var defaultProps25 = {
      component: "div",
      childFactory: function childFactory(child) {
        return child;
      }
    };
    var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
      _inheritsLoose2(TransitionGroup2, _React$Component);
      function TransitionGroup2(props, context) {
        var _this;
        _this = _React$Component.call(this, props, context) || this;
        var handleExited = _this.handleExited.bind(_assertThisInitialized2(_assertThisInitialized2(_this)));
        _this.state = {
          contextValue: {
            isMounting: true
          },
          handleExited,
          firstRender: true
        };
        return _this;
      }
      var _proto = TransitionGroup2.prototype;
      _proto.componentDidMount = function componentDidMount() {
        this.mounted = true;
        this.setState({
          contextValue: {
            isMounting: false
          }
        });
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
      };
      TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
        var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
        return {
          children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
          firstRender: false
        };
      };
      _proto.handleExited = function handleExited(child, node) {
        var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
        if (child.key in currentChildMapping)
          return;
        if (child.props.onExited) {
          child.props.onExited(node);
        }
        if (this.mounted) {
          this.setState(function(state) {
            var children = _extends3({}, state.children);
            delete children[child.key];
            return {
              children
            };
          });
        }
      };
      _proto.render = function render() {
        var _this$props = this.props, Component6 = _this$props.component, childFactory = _this$props.childFactory, props = _objectWithoutPropertiesLoose2(_this$props, ["component", "childFactory"]);
        var contextValue = this.state.contextValue;
        var children = values(this.state.children).map(childFactory);
        delete props.appear;
        delete props.enter;
        delete props.exit;
        if (Component6 === null) {
          return _react.default.createElement(_TransitionGroupContext.default.Provider, {
            value: contextValue
          }, children);
        }
        return _react.default.createElement(_TransitionGroupContext.default.Provider, {
          value: contextValue
        }, _react.default.createElement(Component6, props, children));
      };
      return TransitionGroup2;
    }(_react.default.Component);
    TransitionGroup.propTypes = true ? {
      component: _propTypes.default.any,
      children: _propTypes.default.node,
      appear: _propTypes.default.bool,
      enter: _propTypes.default.bool,
      exit: _propTypes.default.bool,
      childFactory: _propTypes.default.func
    } : {};
    TransitionGroup.defaultProps = defaultProps25;
    var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup);
    exports.default = _default;
    module.exports = exports["default"];
  }
});

// node_modules/react-transition-group/ReplaceTransition.js
var require_ReplaceTransition = __commonJS({
  "node_modules/react-transition-group/ReplaceTransition.js"(exports, module) {
    "use strict";
    init_react();
    exports.__esModule = true;
    exports.default = void 0;
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _react = _interopRequireDefault(require_react());
    var _reactDom = require_react_dom();
    var _TransitionGroup = _interopRequireDefault(require_TransitionGroup());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _objectWithoutPropertiesLoose2(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function _inheritsLoose2(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    var ReplaceTransition = /* @__PURE__ */ function(_React$Component) {
      _inheritsLoose2(ReplaceTransition2, _React$Component);
      function ReplaceTransition2() {
        var _this;
        for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
          _args[_key] = arguments[_key];
        }
        _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
        _this.handleEnter = function() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return _this.handleLifecycle("onEnter", 0, args);
        };
        _this.handleEntering = function() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          return _this.handleLifecycle("onEntering", 0, args);
        };
        _this.handleEntered = function() {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          return _this.handleLifecycle("onEntered", 0, args);
        };
        _this.handleExit = function() {
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }
          return _this.handleLifecycle("onExit", 1, args);
        };
        _this.handleExiting = function() {
          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }
          return _this.handleLifecycle("onExiting", 1, args);
        };
        _this.handleExited = function() {
          for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
          }
          return _this.handleLifecycle("onExited", 1, args);
        };
        return _this;
      }
      var _proto = ReplaceTransition2.prototype;
      _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
        var _child$props;
        var children = this.props.children;
        var child = _react.default.Children.toArray(children)[idx];
        if (child.props[handler])
          (_child$props = child.props)[handler].apply(_child$props, originalArgs);
        if (this.props[handler])
          this.props[handler]((0, _reactDom.findDOMNode)(this));
      };
      _proto.render = function render() {
        var _this$props = this.props, children = _this$props.children, inProp = _this$props.in, props = _objectWithoutPropertiesLoose2(_this$props, ["children", "in"]);
        var _React$Children$toArr = _react.default.Children.toArray(children), first = _React$Children$toArr[0], second = _React$Children$toArr[1];
        delete props.onEnter;
        delete props.onEntering;
        delete props.onEntered;
        delete props.onExit;
        delete props.onExiting;
        delete props.onExited;
        return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
          key: "first",
          onEnter: this.handleEnter,
          onEntering: this.handleEntering,
          onEntered: this.handleEntered
        }) : _react.default.cloneElement(second, {
          key: "second",
          onEnter: this.handleExit,
          onEntering: this.handleExiting,
          onEntered: this.handleExited
        }));
      };
      return ReplaceTransition2;
    }(_react.default.Component);
    ReplaceTransition.propTypes = true ? {
      in: _propTypes.default.bool.isRequired,
      children: function children(props, propName) {
        if (_react.default.Children.count(props[propName]) !== 2)
          return new Error('"' + propName + '" must be exactly two transition components.');
        return null;
      }
    } : {};
    var _default = ReplaceTransition;
    exports.default = _default;
    module.exports = exports["default"];
  }
});

// node_modules/react-transition-group/index.js
var require_react_transition_group = __commonJS({
  "node_modules/react-transition-group/index.js"(exports, module) {
    "use strict";
    init_react();
    var _CSSTransition = _interopRequireDefault(require_CSSTransition());
    var _ReplaceTransition = _interopRequireDefault(require_ReplaceTransition());
    var _TransitionGroup = _interopRequireDefault(require_TransitionGroup());
    var _Transition = _interopRequireDefault(require_Transition());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    module.exports = {
      Transition: _Transition.default,
      TransitionGroup: _TransitionGroup.default,
      ReplaceTransition: _ReplaceTransition.default,
      CSSTransition: _CSSTransition.default
    };
  }
});

// node_modules/axios/lib/helpers/bind.js
var require_bind = __commonJS({
  "node_modules/axios/lib/helpers/bind.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function bind(fn, thisArg) {
      return function wrap() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
      };
    };
  }
});

// node_modules/axios/lib/utils.js
var require_utils = __commonJS({
  "node_modules/axios/lib/utils.js"(exports, module) {
    "use strict";
    init_react();
    var bind = require_bind();
    var toString = Object.prototype.toString;
    function isArray3(val) {
      return toString.call(val) === "[object Array]";
    }
    function isUndefined2(val) {
      return typeof val === "undefined";
    }
    function isBuffer(val) {
      return val !== null && !isUndefined2(val) && val.constructor !== null && !isUndefined2(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
    }
    function isArrayBuffer(val) {
      return toString.call(val) === "[object ArrayBuffer]";
    }
    function isFormData(val) {
      return typeof FormData !== "undefined" && val instanceof FormData;
    }
    function isArrayBufferView(val) {
      var result;
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
      } else {
        result = val && val.buffer && val.buffer instanceof ArrayBuffer;
      }
      return result;
    }
    function isString2(val) {
      return typeof val === "string";
    }
    function isNumber2(val) {
      return typeof val === "number";
    }
    function isObject3(val) {
      return val !== null && typeof val === "object";
    }
    function isPlainObject(val) {
      if (toString.call(val) !== "[object Object]") {
        return false;
      }
      var prototype = Object.getPrototypeOf(val);
      return prototype === null || prototype === Object.prototype;
    }
    function isDate2(val) {
      return toString.call(val) === "[object Date]";
    }
    function isFile(val) {
      return toString.call(val) === "[object File]";
    }
    function isBlob(val) {
      return toString.call(val) === "[object Blob]";
    }
    function isFunction4(val) {
      return toString.call(val) === "[object Function]";
    }
    function isStream(val) {
      return isObject3(val) && isFunction4(val.pipe);
    }
    function isURLSearchParams(val) {
      return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
    }
    function trim(str) {
      return str.replace(/^\s*/, "").replace(/\s*$/, "");
    }
    function isStandardBrowserEnv() {
      if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
        return false;
      }
      return typeof window !== "undefined" && typeof document !== "undefined";
    }
    function forEach(obj, fn) {
      if (obj === null || typeof obj === "undefined") {
        return;
      }
      if (typeof obj !== "object") {
        obj = [obj];
      }
      if (isArray3(obj)) {
        for (var i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn.call(null, obj[key], key, obj);
          }
        }
      }
    }
    function merge() {
      var result = {};
      function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) {
          result[key] = merge(result[key], val);
        } else if (isPlainObject(val)) {
          result[key] = merge({}, val);
        } else if (isArray3(val)) {
          result[key] = val.slice();
        } else {
          result[key] = val;
        }
      }
      for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
      }
      return result;
    }
    function extend(a, b, thisArg) {
      forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === "function") {
          a[key] = bind(val, thisArg);
        } else {
          a[key] = val;
        }
      });
      return a;
    }
    function stripBOM(content) {
      if (content.charCodeAt(0) === 65279) {
        content = content.slice(1);
      }
      return content;
    }
    module.exports = {
      isArray: isArray3,
      isArrayBuffer,
      isBuffer,
      isFormData,
      isArrayBufferView,
      isString: isString2,
      isNumber: isNumber2,
      isObject: isObject3,
      isPlainObject,
      isUndefined: isUndefined2,
      isDate: isDate2,
      isFile,
      isBlob,
      isFunction: isFunction4,
      isStream,
      isURLSearchParams,
      isStandardBrowserEnv,
      forEach,
      merge,
      extend,
      trim,
      stripBOM
    };
  }
});

// node_modules/axios/lib/helpers/buildURL.js
var require_buildURL = __commonJS({
  "node_modules/axios/lib/helpers/buildURL.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    function encode2(val) {
      return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    module.exports = function buildURL(url, params, paramsSerializer) {
      if (!params) {
        return url;
      }
      var serializedParams;
      if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
      } else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
      } else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
          if (val === null || typeof val === "undefined") {
            return;
          }
          if (utils.isArray(val)) {
            key = key + "[]";
          } else {
            val = [val];
          }
          utils.forEach(val, function parseValue(v) {
            if (utils.isDate(v)) {
              v = v.toISOString();
            } else if (utils.isObject(v)) {
              v = JSON.stringify(v);
            }
            parts.push(encode2(key) + "=" + encode2(v));
          });
        });
        serializedParams = parts.join("&");
      }
      if (serializedParams) {
        var hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
      }
      return url;
    };
  }
});

// node_modules/axios/lib/core/InterceptorManager.js
var require_InterceptorManager = __commonJS({
  "node_modules/axios/lib/core/InterceptorManager.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    function InterceptorManager() {
      this.handlers = [];
    }
    InterceptorManager.prototype.use = function use(fulfilled, rejected) {
      this.handlers.push({
        fulfilled,
        rejected
      });
      return this.handlers.length - 1;
    };
    InterceptorManager.prototype.eject = function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    };
    InterceptorManager.prototype.forEach = function forEach(fn) {
      utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    };
    module.exports = InterceptorManager;
  }
});

// node_modules/axios/lib/core/transformData.js
var require_transformData = __commonJS({
  "node_modules/axios/lib/core/transformData.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    module.exports = function transformData(data, headers, fns) {
      utils.forEach(fns, function transform(fn) {
        data = fn(data, headers);
      });
      return data;
    };
  }
});

// node_modules/axios/lib/cancel/isCancel.js
var require_isCancel = __commonJS({
  "node_modules/axios/lib/cancel/isCancel.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function isCancel(value) {
      return !!(value && value.__CANCEL__);
    };
  }
});

// node_modules/axios/lib/helpers/normalizeHeaderName.js
var require_normalizeHeaderName = __commonJS({
  "node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    module.exports = function normalizeHeaderName(headers, normalizedName) {
      utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name];
        }
      });
    };
  }
});

// node_modules/axios/lib/core/enhanceError.js
var require_enhanceError = __commonJS({
  "node_modules/axios/lib/core/enhanceError.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function enhanceError(error2, config, code, request, response) {
      error2.config = config;
      if (code) {
        error2.code = code;
      }
      error2.request = request;
      error2.response = response;
      error2.isAxiosError = true;
      error2.toJSON = function toJSON() {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code
        };
      };
      return error2;
    };
  }
});

// node_modules/axios/lib/core/createError.js
var require_createError = __commonJS({
  "node_modules/axios/lib/core/createError.js"(exports, module) {
    "use strict";
    init_react();
    var enhanceError = require_enhanceError();
    module.exports = function createError(message, config, code, request, response) {
      var error2 = new Error(message);
      return enhanceError(error2, config, code, request, response);
    };
  }
});

// node_modules/axios/lib/core/settle.js
var require_settle = __commonJS({
  "node_modules/axios/lib/core/settle.js"(exports, module) {
    "use strict";
    init_react();
    var createError = require_createError();
    module.exports = function settle(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
      }
    };
  }
});

// node_modules/axios/lib/helpers/cookies.js
var require_cookies = __commonJS({
  "node_modules/axios/lib/helpers/cookies.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + "=" + encodeURIComponent(value));
          if (utils.isNumber(expires)) {
            cookie.push("expires=" + new Date(expires).toGMTString());
          }
          if (utils.isString(path)) {
            cookie.push("path=" + path);
          }
          if (utils.isString(domain)) {
            cookie.push("domain=" + domain);
          }
          if (secure === true) {
            cookie.push("secure");
          }
          document.cookie = cookie.join("; ");
        },
        read: function read(name) {
          var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      };
    }() : function nonStandardBrowserEnv() {
      return {
        write: function write() {
        },
        read: function read() {
          return null;
        },
        remove: function remove() {
        }
      };
    }();
  }
});

// node_modules/axios/lib/helpers/isAbsoluteURL.js
var require_isAbsoluteURL = __commonJS({
  "node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function isAbsoluteURL(url) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
    };
  }
});

// node_modules/axios/lib/helpers/combineURLs.js
var require_combineURLs = __commonJS({
  "node_modules/axios/lib/helpers/combineURLs.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function combineURLs(baseURL, relativeURL) {
      return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
    };
  }
});

// node_modules/axios/lib/core/buildFullPath.js
var require_buildFullPath = __commonJS({
  "node_modules/axios/lib/core/buildFullPath.js"(exports, module) {
    "use strict";
    init_react();
    var isAbsoluteURL = require_isAbsoluteURL();
    var combineURLs = require_combineURLs();
    module.exports = function buildFullPath(baseURL, requestedURL) {
      if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
      }
      return requestedURL;
    };
  }
});

// node_modules/axios/lib/helpers/parseHeaders.js
var require_parseHeaders = __commonJS({
  "node_modules/axios/lib/helpers/parseHeaders.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    var ignoreDuplicateOf = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent"
    ];
    module.exports = function parseHeaders(headers) {
      var parsed = {};
      var key;
      var val;
      var i;
      if (!headers) {
        return parsed;
      }
      utils.forEach(headers.split("\n"), function parser(line) {
        i = line.indexOf(":");
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }
          if (key === "set-cookie") {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        }
      });
      return parsed;
    };
  }
});

// node_modules/axios/lib/helpers/isURLSameOrigin.js
var require_isURLSameOrigin = __commonJS({
  "node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    module.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement("a");
      var originURL;
      function resolveURL(url) {
        var href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }() : function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    }();
  }
});

// node_modules/axios/lib/adapters/xhr.js
var require_xhr = __commonJS({
  "node_modules/axios/lib/adapters/xhr.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    var settle = require_settle();
    var cookies = require_cookies();
    var buildURL = require_buildURL();
    var buildFullPath = require_buildFullPath();
    var parseHeaders = require_parseHeaders();
    var isURLSameOrigin = require_isURLSameOrigin();
    var createError = require_createError();
    module.exports = function xhrAdapter(config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        if (utils.isFormData(requestData)) {
          delete requestHeaders["Content-Type"];
        }
        var request = new XMLHttpRequest();
        if (config.auth) {
          var username = config.auth.username || "";
          var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
          requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        request.timeout = config.timeout;
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
            return;
          }
          var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
          var responseData = !config.responseType || config.responseType === "text" ? request.responseText : request.response;
          var response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config,
            request
          };
          settle(resolve, reject, response);
          request = null;
        };
        request.onabort = function handleAbort() {
          if (!request) {
            return;
          }
          reject(createError("Request aborted", config, "ECONNABORTED", request));
          request = null;
        };
        request.onerror = function handleError() {
          reject(createError("Network Error", config, null, request));
          request = null;
        };
        request.ontimeout = function handleTimeout() {
          var timeoutErrorMessage = "timeout of " + config.timeout + "ms exceeded";
          if (config.timeoutErrorMessage) {
            timeoutErrorMessage = config.timeoutErrorMessage;
          }
          reject(createError(timeoutErrorMessage, config, "ECONNABORTED", request));
          request = null;
        };
        if (utils.isStandardBrowserEnv()) {
          var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
          if (xsrfValue) {
            requestHeaders[config.xsrfHeaderName] = xsrfValue;
          }
        }
        if ("setRequestHeader" in request) {
          utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
              delete requestHeaders[key];
            } else {
              request.setRequestHeader(key, val);
            }
          });
        }
        if (!utils.isUndefined(config.withCredentials)) {
          request.withCredentials = !!config.withCredentials;
        }
        if (config.responseType) {
          try {
            request.responseType = config.responseType;
          } catch (e) {
            if (config.responseType !== "json") {
              throw e;
            }
          }
        }
        if (typeof config.onDownloadProgress === "function") {
          request.addEventListener("progress", config.onDownloadProgress);
        }
        if (typeof config.onUploadProgress === "function" && request.upload) {
          request.upload.addEventListener("progress", config.onUploadProgress);
        }
        if (config.cancelToken) {
          config.cancelToken.promise.then(function onCanceled(cancel) {
            if (!request) {
              return;
            }
            request.abort();
            reject(cancel);
            request = null;
          });
        }
        if (!requestData) {
          requestData = null;
        }
        request.send(requestData);
      });
    };
  }
});

// node_modules/axios/lib/defaults.js
var require_defaults = __commonJS({
  "node_modules/axios/lib/defaults.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    var normalizeHeaderName = require_normalizeHeaderName();
    var DEFAULT_CONTENT_TYPE = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    function setContentTypeIfUnset(headers, value) {
      if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
        headers["Content-Type"] = value;
      }
    }
    function getDefaultAdapter() {
      var adapter;
      if (typeof XMLHttpRequest !== "undefined") {
        adapter = require_xhr();
      } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
        adapter = require_xhr();
      }
      return adapter;
    }
    var defaults = {
      adapter: getDefaultAdapter(),
      transformRequest: [function transformRequest(data, headers) {
        normalizeHeaderName(headers, "Accept");
        normalizeHeaderName(headers, "Content-Type");
        if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
          return data;
        }
        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils.isURLSearchParams(data)) {
          setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
          return data.toString();
        }
        if (utils.isObject(data)) {
          setContentTypeIfUnset(headers, "application/json;charset=utf-8");
          return JSON.stringify(data);
        }
        return data;
      }],
      transformResponse: [function transformResponse(data) {
        if (typeof data === "string") {
          try {
            data = JSON.parse(data);
          } catch (e) {
          }
        }
        return data;
      }],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      }
    };
    defaults.headers = {
      common: {
        "Accept": "application/json, text/plain, */*"
      }
    };
    utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
      defaults.headers[method] = {};
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
    });
    module.exports = defaults;
  }
});

// node_modules/axios/lib/core/dispatchRequest.js
var require_dispatchRequest = __commonJS({
  "node_modules/axios/lib/core/dispatchRequest.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    var transformData = require_transformData();
    var isCancel = require_isCancel();
    var defaults = require_defaults();
    function throwIfCancellationRequested(config) {
      if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
      }
    }
    module.exports = function dispatchRequest(config) {
      throwIfCancellationRequested(config);
      config.headers = config.headers || {};
      config.data = transformData(config.data, config.headers, config.transformRequest);
      config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
      utils.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
        delete config.headers[method];
      });
      var adapter = config.adapter || defaults.adapter;
      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        response.data = transformData(response.data, response.headers, config.transformResponse);
        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);
          if (reason && reason.response) {
            reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
          }
        }
        return Promise.reject(reason);
      });
    };
  }
});

// node_modules/axios/lib/core/mergeConfig.js
var require_mergeConfig = __commonJS({
  "node_modules/axios/lib/core/mergeConfig.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    module.exports = function mergeConfig(config1, config2) {
      config2 = config2 || {};
      var config = {};
      var valueFromConfig2Keys = ["url", "method", "data"];
      var mergeDeepPropertiesKeys = ["headers", "auth", "proxy", "params"];
      var defaultToConfig2Keys = [
        "baseURL",
        "transformRequest",
        "transformResponse",
        "paramsSerializer",
        "timeout",
        "timeoutMessage",
        "withCredentials",
        "adapter",
        "responseType",
        "xsrfCookieName",
        "xsrfHeaderName",
        "onUploadProgress",
        "onDownloadProgress",
        "decompress",
        "maxContentLength",
        "maxBodyLength",
        "maxRedirects",
        "transport",
        "httpAgent",
        "httpsAgent",
        "cancelToken",
        "socketPath",
        "responseEncoding"
      ];
      var directMergeKeys = ["validateStatus"];
      function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
          return utils.merge(target, source);
        } else if (utils.isPlainObject(source)) {
          return utils.merge({}, source);
        } else if (utils.isArray(source)) {
          return source.slice();
        }
        return source;
      }
      function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) {
          config[prop] = getMergedValue(config1[prop], config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          config[prop] = getMergedValue(void 0, config1[prop]);
        }
      }
      utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          config[prop] = getMergedValue(void 0, config2[prop]);
        }
      });
      utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
      utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          config[prop] = getMergedValue(void 0, config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          config[prop] = getMergedValue(void 0, config1[prop]);
        }
      });
      utils.forEach(directMergeKeys, function merge(prop) {
        if (prop in config2) {
          config[prop] = getMergedValue(config1[prop], config2[prop]);
        } else if (prop in config1) {
          config[prop] = getMergedValue(void 0, config1[prop]);
        }
      });
      var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
      var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key) {
        return axiosKeys.indexOf(key) === -1;
      });
      utils.forEach(otherKeys, mergeDeepProperties);
      return config;
    };
  }
});

// node_modules/axios/lib/core/Axios.js
var require_Axios = __commonJS({
  "node_modules/axios/lib/core/Axios.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    var buildURL = require_buildURL();
    var InterceptorManager = require_InterceptorManager();
    var dispatchRequest = require_dispatchRequest();
    var mergeConfig = require_mergeConfig();
    function Axios(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    Axios.prototype.request = function request(config) {
      if (typeof config === "string") {
        config = arguments[1] || {};
        config.url = arguments[0];
      } else {
        config = config || {};
      }
      config = mergeConfig(this.defaults, config);
      if (config.method) {
        config.method = config.method.toLowerCase();
      } else if (this.defaults.method) {
        config.method = this.defaults.method.toLowerCase();
      } else {
        config.method = "get";
      }
      var chain = [dispatchRequest, void 0];
      var promise = Promise.resolve(config);
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });
      while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
      }
      return promise;
    };
    Axios.prototype.getUri = function getUri(config) {
      config = mergeConfig(this.defaults, config);
      return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
    };
    utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
      Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          url,
          data: (config || {}).data
        }));
      };
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      Axios.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          url,
          data
        }));
      };
    });
    module.exports = Axios;
  }
});

// node_modules/axios/lib/cancel/Cancel.js
var require_Cancel = __commonJS({
  "node_modules/axios/lib/cancel/Cancel.js"(exports, module) {
    "use strict";
    init_react();
    function Cancel(message) {
      this.message = message;
    }
    Cancel.prototype.toString = function toString() {
      return "Cancel" + (this.message ? ": " + this.message : "");
    };
    Cancel.prototype.__CANCEL__ = true;
    module.exports = Cancel;
  }
});

// node_modules/axios/lib/cancel/CancelToken.js
var require_CancelToken = __commonJS({
  "node_modules/axios/lib/cancel/CancelToken.js"(exports, module) {
    "use strict";
    init_react();
    var Cancel = require_Cancel();
    function CancelToken(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      var token = this;
      executor(function cancel(message) {
        if (token.reason) {
          return;
        }
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
      });
    }
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    };
    CancelToken.source = function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    };
    module.exports = CancelToken;
  }
});

// node_modules/axios/lib/helpers/spread.js
var require_spread = __commonJS({
  "node_modules/axios/lib/helpers/spread.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    };
  }
});

// node_modules/axios/lib/helpers/isAxiosError.js
var require_isAxiosError = __commonJS({
  "node_modules/axios/lib/helpers/isAxiosError.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function isAxiosError(payload) {
      return typeof payload === "object" && payload.isAxiosError === true;
    };
  }
});

// node_modules/axios/lib/axios.js
var require_axios = __commonJS({
  "node_modules/axios/lib/axios.js"(exports, module) {
    "use strict";
    init_react();
    var utils = require_utils();
    var bind = require_bind();
    var Axios = require_Axios();
    var mergeConfig = require_mergeConfig();
    var defaults = require_defaults();
    function createInstance(defaultConfig) {
      var context = new Axios(defaultConfig);
      var instance = bind(Axios.prototype.request, context);
      utils.extend(instance, Axios.prototype, context);
      utils.extend(instance, context);
      return instance;
    }
    var axios2 = createInstance(defaults);
    axios2.Axios = Axios;
    axios2.create = function create(instanceConfig) {
      return createInstance(mergeConfig(axios2.defaults, instanceConfig));
    };
    axios2.Cancel = require_Cancel();
    axios2.CancelToken = require_CancelToken();
    axios2.isCancel = require_isCancel();
    axios2.all = function all(promises) {
      return Promise.all(promises);
    };
    axios2.spread = require_spread();
    axios2.isAxiosError = require_isAxiosError();
    module.exports = axios2;
    module.exports.default = axios2;
  }
});

// node_modules/axios/index.js
var require_axios2 = __commonJS({
  "node_modules/axios/index.js"(exports, module) {
    init_react();
    module.exports = require_axios();
  }
});

// node_modules/@sanity/image-url/lib/browser/image-url.umd.js
var require_image_url_umd = __commonJS({
  "node_modules/@sanity/image-url/lib/browser/image-url.umd.js"(exports, module) {
    init_react();
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = global2 || self, global2.SanityImageUrlBuilder = factory());
    })(exports, function() {
      function _extends3() {
        _extends3 = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends3.apply(this, arguments);
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _createForOfIteratorHelperLoose(o) {
        var i = 0;
        if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
          if (Array.isArray(o) || (o = _unsupportedIterableToArray(o)))
            return function() {
              if (i >= o.length)
                return {
                  done: true
                };
              return {
                done: false,
                value: o[i++]
              };
            };
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        i = o[Symbol.iterator]();
        return i.next.bind(i);
      }
      var example = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
      function parseAssetId(ref) {
        var _ref$split = ref.split("-"), id = _ref$split[1], dimensionString = _ref$split[2], format2 = _ref$split[3];
        if (!id || !dimensionString || !format2) {
          throw new Error("Malformed asset _ref '" + ref + `'. Expected an id like "` + example + '".');
        }
        var _dimensionString$spli = dimensionString.split("x"), imgWidthStr = _dimensionString$spli[0], imgHeightStr = _dimensionString$spli[1];
        var width = +imgWidthStr;
        var height = +imgHeightStr;
        var isValidAssetId = isFinite(width) && isFinite(height);
        if (!isValidAssetId) {
          throw new Error("Malformed asset _ref '" + ref + `'. Expected an id like "` + example + '".');
        }
        return {
          id,
          width,
          height,
          format: format2
        };
      }
      var isRef = function isRef2(src) {
        var source = src;
        return source ? typeof source._ref === "string" : false;
      };
      var isAsset = function isAsset2(src) {
        var source = src;
        return source ? typeof source._id === "string" : false;
      };
      var isAssetStub = function isAssetStub2(src) {
        var source = src;
        return source && source.asset ? typeof source.asset.url === "string" : false;
      };
      function parseSource(source) {
        if (!source) {
          return null;
        }
        var image;
        if (typeof source === "string" && isUrl(source)) {
          image = {
            asset: {
              _ref: urlToId(source)
            }
          };
        } else if (typeof source === "string") {
          image = {
            asset: {
              _ref: source
            }
          };
        } else if (isRef(source)) {
          image = {
            asset: source
          };
        } else if (isAsset(source)) {
          image = {
            asset: {
              _ref: source._id || ""
            }
          };
        } else if (isAssetStub(source)) {
          image = {
            asset: {
              _ref: urlToId(source.asset.url)
            }
          };
        } else if (typeof source.asset === "object") {
          image = source;
        } else {
          return null;
        }
        var img = source;
        if (img.crop) {
          image.crop = img.crop;
        }
        if (img.hotspot) {
          image.hotspot = img.hotspot;
        }
        return applyDefaults(image);
      }
      function isUrl(url) {
        return /^https?:\/\//.test("" + url);
      }
      function urlToId(url) {
        var parts = url.split("/").slice(-1);
        return ("image-" + parts[0]).replace(/\.([a-z]+)$/, "-$1");
      }
      function applyDefaults(image) {
        if (image.crop && image.hotspot) {
          return image;
        }
        var result = _extends3({}, image);
        if (!result.crop) {
          result.crop = {
            left: 0,
            top: 0,
            bottom: 0,
            right: 0
          };
        }
        if (!result.hotspot) {
          result.hotspot = {
            x: 0.5,
            y: 0.5,
            height: 1,
            width: 1
          };
        }
        return result;
      }
      var SPEC_NAME_TO_URL_NAME_MAPPINGS = [["width", "w"], ["height", "h"], ["format", "fm"], ["download", "dl"], ["blur", "blur"], ["sharpen", "sharp"], ["invert", "invert"], ["orientation", "or"], ["minHeight", "min-h"], ["maxHeight", "max-h"], ["minWidth", "min-w"], ["maxWidth", "max-w"], ["quality", "q"], ["fit", "fit"], ["crop", "crop"], ["saturation", "sat"], ["auto", "auto"], ["dpr", "dpr"], ["pad", "pad"]];
      function urlForImage(options) {
        var spec = _extends3({}, options || {});
        var source = spec.source;
        delete spec.source;
        var image = parseSource(source);
        if (!image) {
          return null;
        }
        var id = image.asset._ref || image.asset._id || "";
        var asset = parseAssetId(id);
        var cropLeft = Math.round(image.crop.left * asset.width);
        var cropTop = Math.round(image.crop.top * asset.height);
        var crop = {
          left: cropLeft,
          top: cropTop,
          width: Math.round(asset.width - image.crop.right * asset.width - cropLeft),
          height: Math.round(asset.height - image.crop.bottom * asset.height - cropTop)
        };
        var hotSpotVerticalRadius = image.hotspot.height * asset.height / 2;
        var hotSpotHorizontalRadius = image.hotspot.width * asset.width / 2;
        var hotSpotCenterX = image.hotspot.x * asset.width;
        var hotSpotCenterY = image.hotspot.y * asset.height;
        var hotspot = {
          left: hotSpotCenterX - hotSpotHorizontalRadius,
          top: hotSpotCenterY - hotSpotVerticalRadius,
          right: hotSpotCenterX + hotSpotHorizontalRadius,
          bottom: hotSpotCenterY + hotSpotVerticalRadius
        };
        if (!(spec.rect || spec.focalPoint || spec.ignoreImageParams || spec.crop)) {
          spec = _extends3(_extends3({}, spec), fit({
            crop,
            hotspot
          }, spec));
        }
        return specToImageUrl(_extends3(_extends3({}, spec), {}, {
          asset
        }));
      }
      function specToImageUrl(spec) {
        var cdnUrl = spec.baseUrl || "https://cdn.sanity.io";
        var filename = spec.asset.id + "-" + spec.asset.width + "x" + spec.asset.height + "." + spec.asset.format;
        var baseUrl = cdnUrl + "/images/" + spec.projectId + "/" + spec.dataset + "/" + filename;
        var params = [];
        if (spec.rect) {
          var _spec$rect = spec.rect, left = _spec$rect.left, top = _spec$rect.top, width = _spec$rect.width, height = _spec$rect.height;
          var isEffectiveCrop = left !== 0 || top !== 0 || height !== spec.asset.height || width !== spec.asset.width;
          if (isEffectiveCrop) {
            params.push("rect=" + left + "," + top + "," + width + "," + height);
          }
        }
        if (spec.bg) {
          params.push("bg=" + spec.bg);
        }
        if (spec.focalPoint) {
          params.push("fp-x=" + spec.focalPoint.x);
          params.push("fp-y=" + spec.focalPoint.y);
        }
        var flip2 = [spec.flipHorizontal && "h", spec.flipVertical && "v"].filter(Boolean).join("");
        if (flip2) {
          params.push("flip=" + flip2);
        }
        SPEC_NAME_TO_URL_NAME_MAPPINGS.forEach(function(mapping) {
          var specName = mapping[0], param = mapping[1];
          if (typeof spec[specName] !== "undefined") {
            params.push(param + "=" + encodeURIComponent(spec[specName]));
          } else if (typeof spec[param] !== "undefined") {
            params.push(param + "=" + encodeURIComponent(spec[param]));
          }
        });
        if (params.length === 0) {
          return baseUrl;
        }
        return baseUrl + "?" + params.join("&");
      }
      function fit(source, spec) {
        var cropRect;
        var imgWidth = spec.width;
        var imgHeight = spec.height;
        if (!(imgWidth && imgHeight)) {
          return {
            width: imgWidth,
            height: imgHeight,
            rect: source.crop
          };
        }
        var crop = source.crop;
        var hotspot = source.hotspot;
        var desiredAspectRatio = imgWidth / imgHeight;
        var cropAspectRatio = crop.width / crop.height;
        if (cropAspectRatio > desiredAspectRatio) {
          var height = crop.height;
          var width = height * desiredAspectRatio;
          var top = crop.top;
          var hotspotXCenter = (hotspot.right - hotspot.left) / 2 + hotspot.left;
          var left = hotspotXCenter - width / 2;
          if (left < crop.left) {
            left = crop.left;
          } else if (left + width > crop.left + crop.width) {
            left = crop.left + crop.width - width;
          }
          cropRect = {
            left: Math.round(left),
            top: Math.round(top),
            width: Math.round(width),
            height: Math.round(height)
          };
        } else {
          var _width = crop.width;
          var _height = _width / desiredAspectRatio;
          var _left = crop.left;
          var hotspotYCenter = (hotspot.bottom - hotspot.top) / 2 + hotspot.top;
          var _top = hotspotYCenter - _height / 2;
          if (_top < crop.top) {
            _top = crop.top;
          } else if (_top + _height > crop.top + crop.height) {
            _top = crop.top + crop.height - _height;
          }
          cropRect = {
            left: Math.max(0, Math.floor(_left)),
            top: Math.max(0, Math.floor(_top)),
            width: Math.round(_width),
            height: Math.round(_height)
          };
        }
        return {
          width: imgWidth,
          height: imgHeight,
          rect: cropRect
        };
      }
      var validFits = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"];
      var validCrops = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"];
      var validAutoModes = ["format"];
      function isSanityClientLike(client) {
        return client ? typeof client.clientConfig === "object" : false;
      }
      function rewriteSpecName(key) {
        var specs = SPEC_NAME_TO_URL_NAME_MAPPINGS;
        for (var _iterator = _createForOfIteratorHelperLoose(specs), _step; !(_step = _iterator()).done; ) {
          var entry = _step.value;
          var specName = entry[0], param = entry[1];
          if (key === specName || key === param) {
            return specName;
          }
        }
        return key;
      }
      function urlBuilder(options) {
        var client = options;
        if (isSanityClientLike(client)) {
          var _client$clientConfig = client.clientConfig, apiUrl = _client$clientConfig.apiHost, projectId = _client$clientConfig.projectId, dataset = _client$clientConfig.dataset;
          var apiHost = apiUrl || "https://api.sanity.io";
          return new ImageUrlBuilder(null, {
            baseUrl: apiHost.replace(/^https:\/\/api\./, "https://cdn."),
            projectId,
            dataset
          });
        }
        return new ImageUrlBuilder(null, options);
      }
      var ImageUrlBuilder = /* @__PURE__ */ function() {
        function ImageUrlBuilder2(parent, options) {
          this.options = parent ? _extends3(_extends3({}, parent.options || {}), options || {}) : _extends3({}, options || {});
        }
        var _proto = ImageUrlBuilder2.prototype;
        _proto.withOptions = function withOptions(options) {
          var baseUrl = options.baseUrl || this.options.baseUrl;
          var newOptions = {
            baseUrl
          };
          for (var key in options) {
            if (options.hasOwnProperty(key)) {
              var specKey = rewriteSpecName(key);
              newOptions[specKey] = options[key];
            }
          }
          return new ImageUrlBuilder2(this, _extends3({
            baseUrl
          }, newOptions));
        };
        _proto.image = function image(source) {
          return this.withOptions({
            source
          });
        };
        _proto.dataset = function dataset(_dataset) {
          return this.withOptions({
            dataset: _dataset
          });
        };
        _proto.projectId = function projectId(_projectId) {
          return this.withOptions({
            projectId: _projectId
          });
        };
        _proto.bg = function bg(_bg) {
          return this.withOptions({
            bg: _bg
          });
        };
        _proto.dpr = function dpr(_dpr) {
          return this.withOptions({
            dpr: _dpr
          });
        };
        _proto.width = function width(_width) {
          return this.withOptions({
            width: _width
          });
        };
        _proto.height = function height(_height) {
          return this.withOptions({
            height: _height
          });
        };
        _proto.focalPoint = function focalPoint(x, y) {
          return this.withOptions({
            focalPoint: {
              x,
              y
            }
          });
        };
        _proto.maxWidth = function maxWidth(_maxWidth) {
          return this.withOptions({
            maxWidth: _maxWidth
          });
        };
        _proto.minWidth = function minWidth(_minWidth) {
          return this.withOptions({
            minWidth: _minWidth
          });
        };
        _proto.maxHeight = function maxHeight(_maxHeight) {
          return this.withOptions({
            maxHeight: _maxHeight
          });
        };
        _proto.minHeight = function minHeight(_minHeight) {
          return this.withOptions({
            minHeight: _minHeight
          });
        };
        _proto.size = function size(width, height) {
          return this.withOptions({
            width,
            height
          });
        };
        _proto.blur = function blur(_blur) {
          return this.withOptions({
            blur: _blur
          });
        };
        _proto.sharpen = function sharpen(_sharpen) {
          return this.withOptions({
            sharpen: _sharpen
          });
        };
        _proto.rect = function rect(left, top, width, height) {
          return this.withOptions({
            rect: {
              left,
              top,
              width,
              height
            }
          });
        };
        _proto.format = function format2(_format) {
          return this.withOptions({
            format: _format
          });
        };
        _proto.invert = function invert(_invert) {
          return this.withOptions({
            invert: _invert
          });
        };
        _proto.orientation = function orientation(_orientation) {
          return this.withOptions({
            orientation: _orientation
          });
        };
        _proto.quality = function quality(_quality) {
          return this.withOptions({
            quality: _quality
          });
        };
        _proto.forceDownload = function forceDownload(download) {
          return this.withOptions({
            download
          });
        };
        _proto.flipHorizontal = function flipHorizontal() {
          return this.withOptions({
            flipHorizontal: true
          });
        };
        _proto.flipVertical = function flipVertical() {
          return this.withOptions({
            flipVertical: true
          });
        };
        _proto.ignoreImageParams = function ignoreImageParams() {
          return this.withOptions({
            ignoreImageParams: true
          });
        };
        _proto.fit = function fit2(value) {
          if (validFits.indexOf(value) === -1) {
            throw new Error('Invalid fit mode "' + value + '"');
          }
          return this.withOptions({
            fit: value
          });
        };
        _proto.crop = function crop(value) {
          if (validCrops.indexOf(value) === -1) {
            throw new Error('Invalid crop mode "' + value + '"');
          }
          return this.withOptions({
            crop: value
          });
        };
        _proto.saturation = function saturation(_saturation) {
          return this.withOptions({
            saturation: _saturation
          });
        };
        _proto.auto = function auto(value) {
          if (validAutoModes.indexOf(value) === -1) {
            throw new Error('Invalid auto mode "' + value + '"');
          }
          return this.withOptions({
            auto: value
          });
        };
        _proto.pad = function pad(_pad) {
          return this.withOptions({
            pad: _pad
          });
        };
        _proto.url = function url() {
          return urlForImage(this.options);
        };
        _proto.toString = function toString() {
          return this.url();
        };
        return ImageUrlBuilder2;
      }();
      return urlBuilder;
    });
  }
});

// node_modules/@sanity/observable/node_modules/rxjs/internal/util/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/@sanity/observable/node_modules/rxjs/internal/util/isFunction.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    function isFunction4(x) {
      return typeof x === "function";
    }
    exports.isFunction = isFunction4;
  }
});

// node_modules/@sanity/observable/node_modules/rxjs/internal/config.js
var require_config = __commonJS({
  "node_modules/@sanity/observable/node_modules/rxjs/internal/config.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var _enable_super_gross_mode_that_will_cause_bad_things = false;
    exports.config = {
      Promise: void 0,
      set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
          var error2 = new Error();
          console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + error2.stack);
        } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
          console.log("RxJS: Back to a better error behavior. Thank you. <3");
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
      },
      get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
      }
    };
  }
});

// node_modules/@sanity/observable/node_modules/rxjs/internal/util/hostReportError.js
var require_hostReportError = __commonJS({
  "node_modules/@sanity/observable/node_modules/rxjs/internal/util/hostReportError.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    function hostReportError(err) {
      setTimeout(function() {
        throw err;
      }, 0);
    }
    exports.hostReportError = hostReportError;
  }
});

// node_modules/@sanity/observable/node_modules/rxjs/internal/Observer.js
var require_Observer = __commonJS({
  "node_modules/@sanity/observable/node_modules/rxjs/internal/Observer.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var config_1 = require_config();
    var hostReportError_1 = require_hostReportError();
    exports.empty = {
      closed: true,
      next: function(value) {
      },
      error: function(err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw err;
        } else {
          hostReportError_1.hostReportError(err);
        }
      },
      complete: function() {
      }
    };
  }
});

// node_modules/@sanity/observable/node_modules/rxjs/internal/util/isArray.js
var require_isArray = __commonJS({
  "node_modules/@sanity/observable/node_modules/rxjs/internal/util/isArray.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isArray = function() {
      return Array.isArray || function(x) {
        return x && typeof x.length === "number";
      };
    }();
  }
});

// node_modules/@sanity/observable/node_modules/rxjs/internal/util/isObject.js
var require_isObject = __commonJS({
  "node_modules/@sanity/observable/node_modules/rxjs/internal/util/isObject.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    function isObject3(x) {
      return x !== null && typeof x === "object";
    }
    exports.isObject = isObject3;
  }
});

// node_modules/@sanity/observable/node_modules/rxjs/internal/util/UnsubscriptionError.js
var require_UnsubscriptionError = __commonJS({
  "node_modules/@sanity/observable/node_modules/rxjs/internal/util/UnsubscriptionError.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var UnsubscriptionErrorImpl = function() {
      function UnsubscriptionErrorImpl2(errors2) {
        Error.call(this);
        this.message = errors2 ? errors2.length + " errors occurred during unsubscription:\n" + errors2.map(function(err, i) {
          return i + 1 + ") " + err.toString();
        }).join("\n  ") : "";
        this.name = "UnsubscriptionError";
        this.errors = errors2;
        return this;
      }
      UnsubscriptionErrorImpl2.prototype = Object.create(Error.prototype);
      return UnsubscriptionErrorImpl2;
    }();
    exports.UnsubscriptionError = UnsubscriptionErrorImpl;
  }
});

// node_modules/@sanity/observable/node_modules/rxjs/internal/Subscription.js
var require_Subscription = __commonJS({
  "node_modules/@sanity/observable/node_modules/rxjs/internal/Subscription.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var isArray_1 = require_isArray();
    var isObject_1 = require_isObject();
    var isFunction_1 = require_isFunction();
    var UnsubscriptionError_1 = require_UnsubscriptionError();
    var Subscription = function() {
      function Subscription2(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
          this._ctorUnsubscribe = true;
          this._unsubscribe = unsubscribe;
        }
      }
      Subscription2.prototype.unsubscribe = function() {
        var errors2;
        if (this.closed) {
          return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription2) {
          _parentOrParents.remove(this);
        } else if (_parentOrParents !== null) {
          for (var index = 0; index < _parentOrParents.length; ++index) {
            var parent_1 = _parentOrParents[index];
            parent_1.remove(this);
          }
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
          if (_ctorUnsubscribe) {
            this._unsubscribe = void 0;
          }
          try {
            _unsubscribe.call(this);
          } catch (e) {
            errors2 = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
          }
        }
        if (isArray_1.isArray(_subscriptions)) {
          var index = -1;
          var len = _subscriptions.length;
          while (++index < len) {
            var sub = _subscriptions[index];
            if (isObject_1.isObject(sub)) {
              try {
                sub.unsubscribe();
              } catch (e) {
                errors2 = errors2 || [];
                if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                  errors2 = errors2.concat(flattenUnsubscriptionErrors(e.errors));
                } else {
                  errors2.push(e);
                }
              }
            }
          }
        }
        if (errors2) {
          throw new UnsubscriptionError_1.UnsubscriptionError(errors2);
        }
      };
      Subscription2.prototype.add = function(teardown) {
        var subscription = teardown;
        if (!teardown) {
          return Subscription2.EMPTY;
        }
        switch (typeof teardown) {
          case "function":
            subscription = new Subscription2(teardown);
          case "object":
            if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== "function") {
              return subscription;
            } else if (this.closed) {
              subscription.unsubscribe();
              return subscription;
            } else if (!(subscription instanceof Subscription2)) {
              var tmp = subscription;
              subscription = new Subscription2();
              subscription._subscriptions = [tmp];
            }
            break;
          default: {
            throw new Error("unrecognized teardown " + teardown + " added to Subscription.");
          }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
          subscription._parentOrParents = this;
        } else if (_parentOrParents instanceof Subscription2) {
          if (_parentOrParents === this) {
            return subscription;
          }
          subscription._parentOrParents = [_parentOrParents, this];
        } else if (_parentOrParents.indexOf(this) === -1) {
          _parentOrParents.push(this);
        } else {
          return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
          this._subscriptions = [subscription];
        } else {
          subscriptions.push(subscription);
        }
        return subscription;
      };
      Subscription2.prototype.remove = function(subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
          var subscriptionIndex = subscriptions.indexOf(subscription);
          if (subscriptionIndex !== -1) {
            subscriptions.splice(subscriptionIndex, 1);
          }
        }
      };
      Subscription2.EMPTY = function(empty) {
        empty.closed = true;
        return empty;
      }(new Subscription2());
      return Subscription2;
    }();
    exports.Subscription = Subscription;
    function flattenUnsubscriptionErrors(errors2) {
      return errors2.reduce(function(errs, err) {
        return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
      }, []);
    }
  }
});

// node_modules/@sanity/observable/node_modules/rxjs/internal/symbol/rxSubscriber.js
var require_rxSubscriber = __commonJS({
  "node_modules/@sanity/observable/node_modules/rxjs/internal/symbol/rxSubscriber.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.rxSubscriber = function() {
      return typeof Symbol === "function" ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random();
    }();
    exports.$$rxSubscriber = exports.rxSubscriber;
  }
});

// node_modules/@sanity/observable/node_modules/rxjs/internal/Subscriber.js
var require_Subscriber = __commonJS({
  "node_modules/@sanity/observable/node_modules/rxjs/internal/Subscriber.js"(exports) {
    "use strict";
    init_react();
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var isFunction_1 = require_isFunction();
    var Observer_1 = require_Observer();
    var Subscription_1 = require_Subscription();
    var rxSubscriber_1 = require_rxSubscriber();
    var config_1 = require_config();
    var hostReportError_1 = require_hostReportError();
    var Subscriber = function(_super) {
      __extends(Subscriber2, _super);
      function Subscriber2(destinationOrNext, error2, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
          case 0:
            _this.destination = Observer_1.empty;
            break;
          case 1:
            if (!destinationOrNext) {
              _this.destination = Observer_1.empty;
              break;
            }
            if (typeof destinationOrNext === "object") {
              if (destinationOrNext instanceof Subscriber2) {
                _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                _this.destination = destinationOrNext;
                destinationOrNext.add(_this);
              } else {
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext);
              }
              break;
            }
          default:
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_this, destinationOrNext, error2, complete);
            break;
        }
        return _this;
      }
      Subscriber2.prototype[rxSubscriber_1.rxSubscriber] = function() {
        return this;
      };
      Subscriber2.create = function(next, error2, complete) {
        var subscriber = new Subscriber2(next, error2, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
      };
      Subscriber2.prototype.next = function(value) {
        if (!this.isStopped) {
          this._next(value);
        }
      };
      Subscriber2.prototype.error = function(err) {
        if (!this.isStopped) {
          this.isStopped = true;
          this._error(err);
        }
      };
      Subscriber2.prototype.complete = function() {
        if (!this.isStopped) {
          this.isStopped = true;
          this._complete();
        }
      };
      Subscriber2.prototype.unsubscribe = function() {
        if (this.closed) {
          return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
      };
      Subscriber2.prototype._next = function(value) {
        this.destination.next(value);
      };
      Subscriber2.prototype._error = function(err) {
        this.destination.error(err);
        this.unsubscribe();
      };
      Subscriber2.prototype._complete = function() {
        this.destination.complete();
        this.unsubscribe();
      };
      Subscriber2.prototype._unsubscribeAndRecycle = function() {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
      };
      return Subscriber2;
    }(Subscription_1.Subscription);
    exports.Subscriber = Subscriber;
    var SafeSubscriber = function(_super) {
      __extends(SafeSubscriber2, _super);
      function SafeSubscriber2(_parentSubscriber, observerOrNext, error2, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
          next = observerOrNext;
        } else if (observerOrNext) {
          next = observerOrNext.next;
          error2 = observerOrNext.error;
          complete = observerOrNext.complete;
          if (observerOrNext !== Observer_1.empty) {
            context = Object.create(observerOrNext);
            if (isFunction_1.isFunction(context.unsubscribe)) {
              _this.add(context.unsubscribe.bind(context));
            }
            context.unsubscribe = _this.unsubscribe.bind(_this);
          }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error2;
        _this._complete = complete;
        return _this;
      }
      SafeSubscriber2.prototype.next = function(value) {
        if (!this.isStopped && this._next) {
          var _parentSubscriber = this._parentSubscriber;
          if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
            this.__tryOrUnsub(this._next, value);
          } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
            this.unsubscribe();
          }
        }
      };
      SafeSubscriber2.prototype.error = function(err) {
        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;
          var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
          if (this._error) {
            if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(this._error, err);
              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, this._error, err);
              this.unsubscribe();
            }
          } else if (!_parentSubscriber.syncErrorThrowable) {
            this.unsubscribe();
            if (useDeprecatedSynchronousErrorHandling) {
              throw err;
            }
            hostReportError_1.hostReportError(err);
          } else {
            if (useDeprecatedSynchronousErrorHandling) {
              _parentSubscriber.syncErrorValue = err;
              _parentSubscriber.syncErrorThrown = true;
            } else {
              hostReportError_1.hostReportError(err);
            }
            this.unsubscribe();
          }
        }
      };
      SafeSubscriber2.prototype.complete = function() {
        var _this = this;
        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;
          if (this._complete) {
            var wrappedComplete = function() {
              return _this._complete.call(_this._context);
            };
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(wrappedComplete);
              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, wrappedComplete);
              this.unsubscribe();
            }
          } else {
            this.unsubscribe();
          }
        }
      };
      SafeSubscriber2.prototype.__tryOrUnsub = function(fn, value) {
        try {
          fn.call(this._context, value);
        } catch (err) {
          this.unsubscribe();
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
          } else {
            hostReportError_1.hostReportError(err);
          }
        }
      };
      SafeSubscriber2.prototype.__tryOrSetError = function(parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw new Error("bad call");
        }
        try {
          fn.call(this._context, value);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
          } else {
            hostReportError_1.hostReportError(err);
            return true;
          }
        }
        return false;
      };
      SafeSubscriber2.prototype._unsubscribe = function() {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
      };
      return SafeSubscriber2;
    }(Subscriber);
    exports.SafeSubscriber = SafeSubscriber;
  }
});

// node_modules/@sanity/observable/node_modules/rxjs/internal/operators/filter.js
var require_filter = __commonJS({
  "node_modules/@sanity/observable/node_modules/rxjs/internal/operators/filter.js"(exports) {
    "use strict";
    init_react();
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = require_Subscriber();
    function filter(predicate, thisArg) {
      return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
      };
    }
    exports.filter = filter;
    var FilterOperator = function() {
      function FilterOperator2(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
      }
      FilterOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
      };
      return FilterOperator2;
    }();
    var FilterSubscriber = function(_super) {
      __extends(FilterSubscriber2, _super);
      function FilterSubscriber2(destination, predicate, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.count = 0;
        return _this;
      }
      FilterSubscriber2.prototype._next = function(value) {
        var result;
        try {
          result = this.predicate.call(this.thisArg, value, this.count++);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        if (result) {
          this.destination.next(value);
        }
      };
      return FilterSubscriber2;
    }(Subscriber_1.Subscriber);
  }
});

// node_modules/@sanity/observable/operators/filter.js
var require_filter2 = __commonJS({
  "node_modules/@sanity/observable/operators/filter.js"(exports) {
    init_react();
    exports.filter = require_filter().filter;
  }
});

// node_modules/@sanity/observable/node_modules/rxjs/internal/operators/map.js
var require_map = __commonJS({
  "node_modules/@sanity/observable/node_modules/rxjs/internal/operators/map.js"(exports) {
    "use strict";
    init_react();
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = require_Subscriber();
    function map3(project, thisArg) {
      return function mapOperation(source) {
        if (typeof project !== "function") {
          throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
        }
        return source.lift(new MapOperator(project, thisArg));
      };
    }
    exports.map = map3;
    var MapOperator = function() {
      function MapOperator2(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
      }
      MapOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
      };
      return MapOperator2;
    }();
    exports.MapOperator = MapOperator;
    var MapSubscriber = function(_super) {
      __extends(MapSubscriber2, _super);
      function MapSubscriber2(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
      }
      MapSubscriber2.prototype._next = function(value) {
        var result;
        try {
          result = this.project.call(this.thisArg, value, this.count++);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        this.destination.next(result);
      };
      return MapSubscriber2;
    }(Subscriber_1.Subscriber);
  }
});

// node_modules/@sanity/observable/operators/map.js
var require_map2 = __commonJS({
  "node_modules/@sanity/observable/operators/map.js"(exports) {
    init_react();
    exports.map = require_map().map;
  }
});

// node_modules/is-obj/index.js
var require_is_obj = __commonJS({
  "node_modules/is-obj/index.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function(x) {
      var type = typeof x;
      return x !== null && (type === "object" || type === "function");
    };
  }
});

// node_modules/deep-assign/index.js
var require_deep_assign = __commonJS({
  "node_modules/deep-assign/index.js"(exports, module) {
    "use strict";
    init_react();
    var isObj = require_is_obj();
    var hasOwnProperty3 = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Sources cannot be null or undefined");
      }
      return Object(val);
    }
    function assignKey(to, from, key) {
      var val = from[key];
      if (val === void 0 || val === null) {
        return;
      }
      if (hasOwnProperty3.call(to, key)) {
        if (to[key] === void 0 || to[key] === null) {
          throw new TypeError("Cannot convert undefined or null to object (" + key + ")");
        }
      }
      if (!hasOwnProperty3.call(to, key) || !isObj(val)) {
        to[key] = val;
      } else {
        to[key] = assign(Object(to[key]), from[key]);
      }
    }
    function assign(to, from) {
      if (to === from) {
        return to;
      }
      from = Object(from);
      for (var key in from) {
        if (hasOwnProperty3.call(from, key)) {
          assignKey(to, from, key);
        }
      }
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            assignKey(to, from, symbols[i]);
          }
        }
      }
      return to;
    }
    module.exports = function deepAssign(target) {
      target = toObject(target);
      for (var s = 1; s < arguments.length; s++) {
        assign(target, arguments[s]);
      }
      return target;
    };
  }
});

// node_modules/@sanity/client/lib/util/getSelection.js
var require_getSelection = __commonJS({
  "node_modules/@sanity/client/lib/util/getSelection.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function getSelection(sel) {
      if (typeof sel === "string" || Array.isArray(sel)) {
        return {
          id: sel
        };
      }
      if (sel && sel.query) {
        return "params" in sel ? {
          query: sel.query,
          params: sel.params
        } : {
          query: sel.query
        };
      }
      var selectionOpts = ["* Document ID (<docId>)", "* Array of document IDs", "* Object containing `query`"].join("\n");
      throw new Error("Unknown selection - must be one of:\n\n".concat(selectionOpts));
    };
  }
});

// node_modules/@sanity/client/lib/validators.js
var require_validators = __commonJS({
  "node_modules/@sanity/client/lib/validators.js"(exports) {
    "use strict";
    init_react();
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    var VALID_ASSET_TYPES = ["image", "file"];
    var VALID_INSERT_LOCATIONS = ["before", "after", "replace"];
    exports.dataset = function(name) {
      if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(name)) {
        throw new Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters");
      }
    };
    exports.projectId = function(id) {
      if (!/^[-a-z0-9]+$/i.test(id)) {
        throw new Error("`projectId` can only contain only a-z, 0-9 and dashes");
      }
    };
    exports.validateAssetType = function(type) {
      if (VALID_ASSET_TYPES.indexOf(type) === -1) {
        throw new Error("Invalid asset type: ".concat(type, ". Must be one of ").concat(VALID_ASSET_TYPES.join(", ")));
      }
    };
    exports.validateObject = function(op, val) {
      if (val === null || _typeof(val) !== "object" || Array.isArray(val)) {
        throw new Error("".concat(op, "() takes an object of properties"));
      }
    };
    exports.requireDocumentId = function(op, doc) {
      if (!doc._id) {
        throw new Error("".concat(op, '() requires that the document contains an ID ("_id" property)'));
      }
      exports.validateDocumentId(op, doc._id);
    };
    exports.validateDocumentId = function(op, id) {
      if (typeof id !== "string" || !/^[a-z0-9_.-]+$/i.test(id)) {
        throw new Error("".concat(op, '(): "').concat(id, '" is not a valid document ID'));
      }
    };
    exports.validateInsert = function(at, selector, items) {
      var signature = "insert(at, selector, items)";
      if (VALID_INSERT_LOCATIONS.indexOf(at) === -1) {
        var valid = VALID_INSERT_LOCATIONS.map(function(loc) {
          return '"'.concat(loc, '"');
        }).join(", ");
        throw new Error("".concat(signature, ' takes an "at"-argument which is one of: ').concat(valid));
      }
      if (typeof selector !== "string") {
        throw new Error("".concat(signature, ' takes a "selector"-argument which must be a string'));
      }
      if (!Array.isArray(items)) {
        throw new Error("".concat(signature, ' takes an "items"-argument which must be an array'));
      }
    };
    exports.hasDataset = function(config) {
      if (!config.gradientMode && !config.dataset) {
        throw new Error("`dataset` must be provided to perform queries");
      }
      return config.dataset || "";
    };
    exports.requestTag = function(tag) {
      if (typeof tag !== "string" || !/^[a-z0-9._-]{1,75}$/i.test(tag)) {
        throw new Error("Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.");
      }
      return tag;
    };
  }
});

// node_modules/@sanity/client/lib/data/patch.js
var require_patch = __commonJS({
  "node_modules/@sanity/client/lib/data/patch.js"(exports, module) {
    "use strict";
    init_react();
    function _defineProperty2(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var deepAssign = require_deep_assign();
    var assign = require_object_assign();
    var getSelection = require_getSelection();
    var validate = require_validators();
    var validateObject = validate.validateObject;
    var validateInsert = validate.validateInsert;
    function Patch(selection) {
      var operations = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var client = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      this.selection = selection;
      this.operations = assign({}, operations);
      this.client = client;
    }
    assign(Patch.prototype, {
      clone: function clone() {
        return new Patch(this.selection, assign({}, this.operations), this.client);
      },
      merge: function merge(props) {
        validateObject("merge", props);
        var stack = new Error().stack.toString().split("\n").filter(function(str) {
          return str.trim();
        }).slice(2);
        console.warn('The "merge" patch has been deprecated and will be removed in the future\n'.concat(stack.join("\n")));
        return this._assign("merge", deepAssign(this.operations.merge || {}, props));
      },
      set: function set(props) {
        return this._assign("set", props);
      },
      diffMatchPatch: function diffMatchPatch(props) {
        validateObject("diffMatchPatch", props);
        return this._assign("diffMatchPatch", props);
      },
      unset: function unset(attrs) {
        if (!Array.isArray(attrs)) {
          throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");
        }
        this.operations = assign({}, this.operations, {
          unset: attrs
        });
        return this;
      },
      setIfMissing: function setIfMissing(props) {
        return this._assign("setIfMissing", props);
      },
      replace: function replace(props) {
        validateObject("replace", props);
        return this._set("set", {
          $: props
        });
      },
      inc: function inc(props) {
        return this._assign("inc", props);
      },
      dec: function dec(props) {
        return this._assign("dec", props);
      },
      insert: function insert(at, selector, items) {
        var _this$_assign;
        validateInsert(at, selector, items);
        return this._assign("insert", (_this$_assign = {}, _defineProperty2(_this$_assign, at, selector), _defineProperty2(_this$_assign, "items", items), _this$_assign));
      },
      append: function append(selector, items) {
        return this.insert("after", "".concat(selector, "[-1]"), items);
      },
      prepend: function prepend(selector, items) {
        return this.insert("before", "".concat(selector, "[0]"), items);
      },
      splice: function splice(selector, start, deleteCount, items) {
        var delAll = typeof deleteCount === "undefined" || deleteCount === -1;
        var startIndex = start < 0 ? start - 1 : start;
        var delCount = delAll ? -1 : Math.max(0, start + deleteCount);
        var delRange = startIndex < 0 && delCount >= 0 ? "" : delCount;
        var rangeSelector = "".concat(selector, "[").concat(startIndex, ":").concat(delRange, "]");
        return this.insert("replace", rangeSelector, items || []);
      },
      ifRevisionId: function ifRevisionId(rev) {
        this.operations.ifRevisionID = rev;
        return this;
      },
      serialize: function serialize() {
        return assign(getSelection(this.selection), this.operations);
      },
      toJSON: function toJSON() {
        return this.serialize();
      },
      commit: function commit() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (!this.client) {
          throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
        }
        var returnFirst = typeof this.selection === "string";
        var opts = assign({
          returnFirst,
          returnDocuments: true
        }, options);
        return this.client.mutate({
          patch: this.serialize()
        }, opts);
      },
      reset: function reset() {
        this.operations = {};
        return this;
      },
      _set: function _set(op, props) {
        return this._assign(op, props, false);
      },
      _assign: function _assign(op, props) {
        var merge = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
        validateObject(op, props);
        this.operations = assign({}, this.operations, _defineProperty2({}, op, assign({}, merge && this.operations[op] || {}, props)));
        return this;
      }
    });
    module.exports = Patch;
  }
});

// node_modules/@sanity/client/lib/data/transaction.js
var require_transaction = __commonJS({
  "node_modules/@sanity/client/lib/data/transaction.js"(exports, module) {
    "use strict";
    init_react();
    function _defineProperty2(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var assign = require_object_assign();
    var validators = require_validators();
    var Patch = require_patch();
    var defaultMutateOptions = {
      returnDocuments: false
    };
    function Transaction() {
      var operations = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var client = arguments.length > 1 ? arguments[1] : void 0;
      var transactionId = arguments.length > 2 ? arguments[2] : void 0;
      this.trxId = transactionId;
      this.operations = operations;
      this.client = client;
    }
    assign(Transaction.prototype, {
      clone: function clone() {
        return new Transaction(this.operations.slice(0), this.client, this.trxId);
      },
      create: function create(doc) {
        validators.validateObject("create", doc);
        return this._add({
          create: doc
        });
      },
      createIfNotExists: function createIfNotExists(doc) {
        var op = "createIfNotExists";
        validators.validateObject(op, doc);
        validators.requireDocumentId(op, doc);
        return this._add(_defineProperty2({}, op, doc));
      },
      createOrReplace: function createOrReplace(doc) {
        var op = "createOrReplace";
        validators.validateObject(op, doc);
        validators.requireDocumentId(op, doc);
        return this._add(_defineProperty2({}, op, doc));
      },
      delete: function _delete(documentId) {
        validators.validateDocumentId("delete", documentId);
        return this._add({
          delete: {
            id: documentId
          }
        });
      },
      patch: function patch(documentId, patchOps) {
        var isBuilder = typeof patchOps === "function";
        var isPatch = documentId instanceof Patch;
        if (isPatch) {
          return this._add({
            patch: documentId.serialize()
          });
        }
        if (isBuilder) {
          var patch2 = patchOps(new Patch(documentId, {}, this.client));
          if (!(patch2 instanceof Patch)) {
            throw new Error("function passed to `patch()` must return the patch");
          }
          return this._add({
            patch: patch2.serialize()
          });
        }
        return this._add({
          patch: assign({
            id: documentId
          }, patchOps)
        });
      },
      transactionId: function transactionId(id) {
        if (!id) {
          return this.trxId;
        }
        this.trxId = id;
        return this;
      },
      serialize: function serialize() {
        return this.operations.slice();
      },
      toJSON: function toJSON() {
        return this.serialize();
      },
      commit: function commit(options) {
        if (!this.client) {
          throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
        }
        return this.client.mutate(this.serialize(), assign({
          transactionId: this.trxId
        }, defaultMutateOptions, options || {}));
      },
      reset: function reset() {
        this.operations = [];
        return this;
      },
      _add: function _add(mut) {
        this.operations.push(mut);
        return this;
      }
    });
    module.exports = Transaction;
  }
});

// node_modules/@sanity/client/lib/data/encodeQueryString.js
var require_encodeQueryString = __commonJS({
  "node_modules/@sanity/client/lib/data/encodeQueryString.js"(exports, module) {
    "use strict";
    init_react();
    var _excluded24 = ["tag"];
    function _objectWithoutProperties(source, excluded) {
      if (source == null)
        return {};
      var target = _objectWithoutPropertiesLoose2(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    function _objectWithoutPropertiesLoose2(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    var enc = encodeURIComponent;
    module.exports = function(_ref) {
      var query = _ref.query, _ref$params = _ref.params, params = _ref$params === void 0 ? {} : _ref$params, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options;
      var tag = options.tag, opts = _objectWithoutProperties(options, _excluded24);
      var q = "query=".concat(enc(query));
      var base2 = tag ? "?tag=".concat(enc(tag), "&").concat(q) : "?".concat(q);
      var qString = Object.keys(params).reduce(function(qs, param) {
        return "".concat(qs, "&").concat(enc("$".concat(param)), "=").concat(enc(JSON.stringify(params[param])));
      }, base2);
      return Object.keys(opts).reduce(function(qs, option) {
        return options[option] ? "".concat(qs, "&").concat(enc(option), "=").concat(enc(options[option])) : qs;
      }, qString);
    };
  }
});

// node_modules/@sanity/observable/node_modules/rxjs/internal/util/canReportError.js
var require_canReportError = __commonJS({
  "node_modules/@sanity/observable/node_modules/rxjs/internal/util/canReportError.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = require_Subscriber();
    function canReportError(observer) {
      while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
          return false;
        } else if (destination && destination instanceof Subscriber_1.Subscriber) {
          observer = destination;
        } else {
          observer = null;
        }
      }
      return true;
    }
    exports.canReportError = canReportError;
  }
});

// node_modules/@sanity/observable/node_modules/rxjs/internal/util/toSubscriber.js
var require_toSubscriber = __commonJS({
  "node_modules/@sanity/observable/node_modules/rxjs/internal/util/toSubscriber.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = require_Subscriber();
    var rxSubscriber_1 = require_rxSubscriber();
    var Observer_1 = require_Observer();
    function toSubscriber(nextOrObserver, error2, complete) {
      if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
          return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
          return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
      }
      if (!nextOrObserver && !error2 && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
      }
      return new Subscriber_1.Subscriber(nextOrObserver, error2, complete);
    }
    exports.toSubscriber = toSubscriber;
  }
});

// node_modules/@sanity/observable/node_modules/rxjs/internal/symbol/observable.js
var require_observable = __commonJS({
  "node_modules/@sanity/observable/node_modules/rxjs/internal/symbol/observable.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.observable = function() {
      return typeof Symbol === "function" && Symbol.observable || "@@observable";
    }();
  }
});

// node_modules/@sanity/observable/node_modules/rxjs/internal/util/identity.js
var require_identity = __commonJS({
  "node_modules/@sanity/observable/node_modules/rxjs/internal/util/identity.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    function identity(x) {
      return x;
    }
    exports.identity = identity;
  }
});

// node_modules/@sanity/observable/node_modules/rxjs/internal/util/pipe.js
var require_pipe = __commonJS({
  "node_modules/@sanity/observable/node_modules/rxjs/internal/util/pipe.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var identity_1 = require_identity();
    function pipe() {
      var fns = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
      }
      return pipeFromArray(fns);
    }
    exports.pipe = pipe;
    function pipeFromArray(fns) {
      if (fns.length === 0) {
        return identity_1.identity;
      }
      if (fns.length === 1) {
        return fns[0];
      }
      return function piped(input) {
        return fns.reduce(function(prev, fn) {
          return fn(prev);
        }, input);
      };
    }
    exports.pipeFromArray = pipeFromArray;
  }
});

// node_modules/@sanity/observable/node_modules/rxjs/internal/Observable.js
var require_Observable = __commonJS({
  "node_modules/@sanity/observable/node_modules/rxjs/internal/Observable.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var canReportError_1 = require_canReportError();
    var toSubscriber_1 = require_toSubscriber();
    var observable_1 = require_observable();
    var pipe_1 = require_pipe();
    var config_1 = require_config();
    var Observable = function() {
      function Observable2(subscribe) {
        this._isScalar = false;
        if (subscribe) {
          this._subscribe = subscribe;
        }
      }
      Observable2.prototype.lift = function(operator) {
        var observable = new Observable2();
        observable.source = this;
        observable.operator = operator;
        return observable;
      };
      Observable2.prototype.subscribe = function(observerOrNext, error2, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error2, complete);
        if (operator) {
          sink.add(operator.call(sink, this.source));
        } else {
          sink.add(this.source || config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
              throw sink.syncErrorValue;
            }
          }
        }
        return sink;
      };
      Observable2.prototype._trySubscribe = function(sink) {
        try {
          return this._subscribe(sink);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
          }
          if (canReportError_1.canReportError(sink)) {
            sink.error(err);
          } else {
            console.warn(err);
          }
        }
      };
      Observable2.prototype.forEach = function(next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
          var subscription;
          subscription = _this.subscribe(function(value) {
            try {
              next(value);
            } catch (err) {
              reject(err);
              if (subscription) {
                subscription.unsubscribe();
              }
            }
          }, reject, resolve);
        });
      };
      Observable2.prototype._subscribe = function(subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
      };
      Observable2.prototype[observable_1.observable] = function() {
        return this;
      };
      Observable2.prototype.pipe = function() {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
          return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
      };
      Observable2.prototype.toPromise = function(promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
          var value;
          _this.subscribe(function(x) {
            return value = x;
          }, function(err) {
            return reject(err);
          }, function() {
            return resolve(value);
          });
        });
      };
      Observable2.create = function(subscribe) {
        return new Observable2(subscribe);
      };
      return Observable2;
    }();
    exports.Observable = Observable;
    function getPromiseCtor(promiseCtor) {
      if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
      }
      if (!promiseCtor) {
        throw new Error("no Promise impl found");
      }
      return promiseCtor;
    }
  }
});

// node_modules/@sanity/observable/node_modules/rxjs/internal/operators/scan.js
var require_scan = __commonJS({
  "node_modules/@sanity/observable/node_modules/rxjs/internal/operators/scan.js"(exports) {
    "use strict";
    init_react();
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = require_Subscriber();
    function scan(accumulator, seed) {
      var hasSeed = false;
      if (arguments.length >= 2) {
        hasSeed = true;
      }
      return function scanOperatorFunction(source) {
        return source.lift(new ScanOperator(accumulator, seed, hasSeed));
      };
    }
    exports.scan = scan;
    var ScanOperator = function() {
      function ScanOperator2(accumulator, seed, hasSeed) {
        if (hasSeed === void 0) {
          hasSeed = false;
        }
        this.accumulator = accumulator;
        this.seed = seed;
        this.hasSeed = hasSeed;
      }
      ScanOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
      };
      return ScanOperator2;
    }();
    var ScanSubscriber = function(_super) {
      __extends(ScanSubscriber2, _super);
      function ScanSubscriber2(destination, accumulator, _seed, hasSeed) {
        var _this = _super.call(this, destination) || this;
        _this.accumulator = accumulator;
        _this._seed = _seed;
        _this.hasSeed = hasSeed;
        _this.index = 0;
        return _this;
      }
      Object.defineProperty(ScanSubscriber2.prototype, "seed", {
        get: function() {
          return this._seed;
        },
        set: function(value) {
          this.hasSeed = true;
          this._seed = value;
        },
        enumerable: true,
        configurable: true
      });
      ScanSubscriber2.prototype._next = function(value) {
        if (!this.hasSeed) {
          this.seed = value;
          this.destination.next(value);
        } else {
          return this._tryNext(value);
        }
      };
      ScanSubscriber2.prototype._tryNext = function(value) {
        var index = this.index++;
        var result;
        try {
          result = this.accumulator(this.seed, value, index);
        } catch (err) {
          this.destination.error(err);
        }
        this.seed = result;
        this.destination.next(result);
      };
      return ScanSubscriber2;
    }(Subscriber_1.Subscriber);
  }
});

// node_modules/@sanity/observable/node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js
var require_ArgumentOutOfRangeError = __commonJS({
  "node_modules/@sanity/observable/node_modules/rxjs/internal/util/ArgumentOutOfRangeError.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var ArgumentOutOfRangeErrorImpl = function() {
      function ArgumentOutOfRangeErrorImpl2() {
        Error.call(this);
        this.message = "argument out of range";
        this.name = "ArgumentOutOfRangeError";
        return this;
      }
      ArgumentOutOfRangeErrorImpl2.prototype = Object.create(Error.prototype);
      return ArgumentOutOfRangeErrorImpl2;
    }();
    exports.ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
  }
});

// node_modules/@sanity/observable/node_modules/rxjs/internal/observable/empty.js
var require_empty = __commonJS({
  "node_modules/@sanity/observable/node_modules/rxjs/internal/observable/empty.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Observable_1 = require_Observable();
    exports.EMPTY = new Observable_1.Observable(function(subscriber) {
      return subscriber.complete();
    });
    function empty(scheduler) {
      return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
    }
    exports.empty = empty;
    function emptyScheduled(scheduler) {
      return new Observable_1.Observable(function(subscriber) {
        return scheduler.schedule(function() {
          return subscriber.complete();
        });
      });
    }
  }
});

// node_modules/@sanity/observable/node_modules/rxjs/internal/operators/takeLast.js
var require_takeLast = __commonJS({
  "node_modules/@sanity/observable/node_modules/rxjs/internal/operators/takeLast.js"(exports) {
    "use strict";
    init_react();
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = require_Subscriber();
    var ArgumentOutOfRangeError_1 = require_ArgumentOutOfRangeError();
    var empty_1 = require_empty();
    function takeLast(count) {
      return function takeLastOperatorFunction(source) {
        if (count === 0) {
          return empty_1.empty();
        } else {
          return source.lift(new TakeLastOperator(count));
        }
      };
    }
    exports.takeLast = takeLast;
    var TakeLastOperator = function() {
      function TakeLastOperator2(total) {
        this.total = total;
        if (this.total < 0) {
          throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
        }
      }
      TakeLastOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
      };
      return TakeLastOperator2;
    }();
    var TakeLastSubscriber = function(_super) {
      __extends(TakeLastSubscriber2, _super);
      function TakeLastSubscriber2(destination, total) {
        var _this = _super.call(this, destination) || this;
        _this.total = total;
        _this.ring = new Array();
        _this.count = 0;
        return _this;
      }
      TakeLastSubscriber2.prototype._next = function(value) {
        var ring = this.ring;
        var total = this.total;
        var count = this.count++;
        if (ring.length < total) {
          ring.push(value);
        } else {
          var index = count % total;
          ring[index] = value;
        }
      };
      TakeLastSubscriber2.prototype._complete = function() {
        var destination = this.destination;
        var count = this.count;
        if (count > 0) {
          var total = this.count >= this.total ? this.total : this.count;
          var ring = this.ring;
          for (var i = 0; i < total; i++) {
            var idx = count++ % total;
            destination.next(ring[idx]);
          }
        }
        destination.complete();
      };
      return TakeLastSubscriber2;
    }(Subscriber_1.Subscriber);
  }
});

// node_modules/@sanity/observable/node_modules/rxjs/internal/operators/defaultIfEmpty.js
var require_defaultIfEmpty = __commonJS({
  "node_modules/@sanity/observable/node_modules/rxjs/internal/operators/defaultIfEmpty.js"(exports) {
    "use strict";
    init_react();
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = require_Subscriber();
    function defaultIfEmpty(defaultValue) {
      if (defaultValue === void 0) {
        defaultValue = null;
      }
      return function(source) {
        return source.lift(new DefaultIfEmptyOperator(defaultValue));
      };
    }
    exports.defaultIfEmpty = defaultIfEmpty;
    var DefaultIfEmptyOperator = function() {
      function DefaultIfEmptyOperator2(defaultValue) {
        this.defaultValue = defaultValue;
      }
      DefaultIfEmptyOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
      };
      return DefaultIfEmptyOperator2;
    }();
    var DefaultIfEmptySubscriber = function(_super) {
      __extends(DefaultIfEmptySubscriber2, _super);
      function DefaultIfEmptySubscriber2(destination, defaultValue) {
        var _this = _super.call(this, destination) || this;
        _this.defaultValue = defaultValue;
        _this.isEmpty = true;
        return _this;
      }
      DefaultIfEmptySubscriber2.prototype._next = function(value) {
        this.isEmpty = false;
        this.destination.next(value);
      };
      DefaultIfEmptySubscriber2.prototype._complete = function() {
        if (this.isEmpty) {
          this.destination.next(this.defaultValue);
        }
        this.destination.complete();
      };
      return DefaultIfEmptySubscriber2;
    }(Subscriber_1.Subscriber);
  }
});

// node_modules/@sanity/observable/node_modules/rxjs/internal/operators/reduce.js
var require_reduce = __commonJS({
  "node_modules/@sanity/observable/node_modules/rxjs/internal/operators/reduce.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var scan_1 = require_scan();
    var takeLast_1 = require_takeLast();
    var defaultIfEmpty_1 = require_defaultIfEmpty();
    var pipe_1 = require_pipe();
    function reduce(accumulator, seed) {
      if (arguments.length >= 2) {
        return function reduceOperatorFunctionWithSeed(source) {
          return pipe_1.pipe(scan_1.scan(accumulator, seed), takeLast_1.takeLast(1), defaultIfEmpty_1.defaultIfEmpty(seed))(source);
        };
      }
      return function reduceOperatorFunction(source) {
        return pipe_1.pipe(scan_1.scan(function(acc, value, index) {
          return accumulator(acc, value, index + 1);
        }), takeLast_1.takeLast(1))(source);
      };
    }
    exports.reduce = reduce;
  }
});

// node_modules/@sanity/observable/operators/reduce.js
var require_reduce2 = __commonJS({
  "node_modules/@sanity/observable/operators/reduce.js"(exports) {
    init_react();
    exports.reduce = require_reduce().reduce;
  }
});

// node_modules/@sanity/observable/lib/SanityObservableMinimal.js
var require_SanityObservableMinimal = __commonJS({
  "node_modules/@sanity/observable/lib/SanityObservableMinimal.js"(exports, module) {
    "use strict";
    init_react();
    var _require = require_Observable();
    var Observable = _require.Observable;
    var assign = require_object_assign();
    var _require2 = require_map2();
    var map3 = _require2.map;
    var _require3 = require_filter2();
    var filter = _require3.filter;
    var _require4 = require_reduce2();
    var reduce = _require4.reduce;
    function SanityObservableMinimal() {
      Observable.apply(this, arguments);
    }
    SanityObservableMinimal.prototype = Object.create(assign(/* @__PURE__ */ Object.create(null), Observable.prototype));
    Object.defineProperty(SanityObservableMinimal.prototype, "constructor", {
      value: SanityObservableMinimal,
      enumerable: false,
      writable: true,
      configurable: true
    });
    SanityObservableMinimal.prototype.lift = function lift(operator) {
      var observable = new SanityObservableMinimal();
      observable.source = this;
      observable.operator = operator;
      return observable;
    };
    function createDeprecatedMemberOp(name, op) {
      var hasWarned = false;
      return function deprecatedOperator() {
        if (!hasWarned) {
          hasWarned = true;
          console.warn(new Error("Calling observable.".concat(name, "(...) is deprecated. Please use observable.pipe(").concat(name, "(...)) instead")));
        }
        return this.pipe(op.apply(this, arguments));
      };
    }
    SanityObservableMinimal.prototype.map = createDeprecatedMemberOp("map", map3);
    SanityObservableMinimal.prototype.filter = createDeprecatedMemberOp("filter", filter);
    SanityObservableMinimal.prototype.reduce = createDeprecatedMemberOp("filter", reduce);
    module.exports = SanityObservableMinimal;
  }
});

// node_modules/@sanity/observable/minimal.js
var require_minimal = __commonJS({
  "node_modules/@sanity/observable/minimal.js"(exports, module) {
    init_react();
    module.exports = require_SanityObservableMinimal();
  }
});

// node_modules/@rexxars/eventsource-polyfill/src/eventsource.js
var require_eventsource = __commonJS({
  "node_modules/@rexxars/eventsource-polyfill/src/eventsource.js"(exports, module) {
    init_react();
    (function(root, factory) {
      if (typeof define === "function" && define.amd) {
        define([], factory);
      } else if (typeof module === "object" && module.exports) {
        module.exports = factory();
      } else {
        if (globalThis.EventSource && !globalThis._eventSourceImportPrefix) {
          return;
        }
        var evsImportName = (root._eventSourceImportPrefix || "") + "EventSource";
        root[evsImportName] = factory();
      }
    })(typeof self === "undefined" ? exports : self, function() {
      var EventSource = function(url, options) {
        if (!url || typeof url != "string") {
          throw new SyntaxError("Not enough arguments");
        }
        this.URL = url;
        this.setOptions(options);
        var evs = this;
        setTimeout(function() {
          evs.poll();
        }, 0);
      };
      EventSource.prototype = {
        CONNECTING: 0,
        OPEN: 1,
        CLOSED: 2,
        defaultOptions: {
          loggingEnabled: false,
          loggingPrefix: "eventsource",
          interval: 500,
          bufferSizeLimit: 256 * 1024,
          silentTimeout: 3e5,
          getArgs: {
            evs_buffer_size_limit: 256 * 1024
          },
          xhrHeaders: {
            Accept: "text/event-stream",
            "Cache-Control": "no-cache",
            "X-Requested-With": "XMLHttpRequest"
          }
        },
        setOptions: function(options) {
          var defaults2 = this.defaultOptions;
          var option;
          for (option in defaults2) {
            if (defaults2.hasOwnProperty(option)) {
              this[option] = defaults2[option];
            }
          }
          for (option in options) {
            if (option in defaults2 && options.hasOwnProperty(option)) {
              this[option] = options[option];
            }
          }
          if (this.getArgs && this.bufferSizeLimit) {
            this.getArgs.evs_buffer_size_limit = this.bufferSizeLimit;
          }
          if (typeof console === "undefined" || typeof console.log === "undefined") {
            this.loggingEnabled = false;
          }
        },
        log: function(message) {
          if (this.loggingEnabled) {
            console.log("[" + this.loggingPrefix + "]:" + message);
          }
        },
        poll: function() {
          try {
            if (this.readyState == this.CLOSED) {
              return;
            }
            this.cleanup();
            this.readyState = this.CONNECTING;
            this.cursor = 0;
            this.cache = "";
            this._xhr = new this.XHR(this);
            this.resetNoActivityTimer();
          } catch (err) {
            this.log("There were errors inside the pool try-catch");
            this.dispatchEvent("error", { type: "error", data: err.message });
          }
        },
        pollAgain: function(interval) {
          var evs = this;
          evs.readyState = evs.CONNECTING;
          evs.dispatchEvent("error", {
            type: "error",
            data: "Reconnecting "
          });
          this._pollTimer = setTimeout(function() {
            evs.poll();
          }, interval || 0);
        },
        cleanup: function() {
          this.log("evs cleaning up");
          if (this._pollTimer) {
            clearInterval(this._pollTimer);
            this._pollTimer = null;
          }
          if (this._noActivityTimer) {
            clearInterval(this._noActivityTimer);
            this._noActivityTimer = null;
          }
          if (this._xhr) {
            this._xhr.abort();
            this._xhr = null;
          }
        },
        resetNoActivityTimer: function() {
          if (this.silentTimeout) {
            if (this._noActivityTimer) {
              clearInterval(this._noActivityTimer);
            }
            var evs = this;
            this._noActivityTimer = setTimeout(function() {
              evs.log("Timeout! silentTImeout:" + evs.silentTimeout);
              evs.pollAgain();
            }, this.silentTimeout);
          }
        },
        close: function() {
          this.readyState = this.CLOSED;
          this.log("Closing connection. readyState: " + this.readyState);
          this.cleanup();
        },
        _onxhrdata: function() {
          var request = this._xhr;
          if (request.isReady() && !request.hasError()) {
            this.resetNoActivityTimer();
            if (this.readyState == this.CONNECTING) {
              this.readyState = this.OPEN;
              this.dispatchEvent("open", { type: "open" });
            }
            var buffer = request.getBuffer();
            if (buffer.length > this.bufferSizeLimit) {
              this.log("buffer.length > this.bufferSizeLimit");
              this.pollAgain();
            }
            if (this.cursor == 0 && buffer.length > 0) {
              if (buffer.substring(0, 1) == "\uFEFF") {
                this.cursor = 1;
              }
            }
            var lastMessageIndex = this.lastMessageIndex(buffer);
            if (lastMessageIndex[0] >= this.cursor) {
              var newcursor = lastMessageIndex[1];
              var toparse = buffer.substring(this.cursor, newcursor);
              this.parseStream(toparse);
              this.cursor = newcursor;
            }
            if (request.isDone()) {
              this.log("request.isDone(). reopening the connection");
              this.pollAgain(this.interval);
            }
          } else if (this.readyState !== this.CLOSED) {
            this.log("this.readyState !== this.CLOSED");
            this.pollAgain(this.interval);
          }
        },
        parseStream: function(chunk) {
          chunk = this.cache + this.normalizeToLF(chunk);
          var events = chunk.split("\n\n");
          var i, j, eventType, datas, line, retry;
          for (i = 0; i < events.length - 1; i++) {
            eventType = "message";
            datas = [];
            var parts = events[i].split("\n");
            for (j = 0; j < parts.length; j++) {
              line = this.trimWhiteSpace(parts[j]);
              if (line.indexOf("event") == 0) {
                eventType = line.replace(/event:?\s*/, "");
              } else if (line.indexOf("retry") == 0) {
                retry = parseInt(line.replace(/retry:?\s*/, ""), 10);
                if (!isNaN(retry)) {
                  this.interval = retry;
                }
              } else if (line.indexOf("data") == 0) {
                datas.push(line.replace(/data:?\s*/, ""));
              } else if (line.indexOf("id:") == 0) {
                this.lastEventId = line.replace(/id:?\s*/, "");
              } else if (line.indexOf("id") == 0) {
                this.lastEventId = null;
              }
            }
            if (datas.length && this.readyState != this.CLOSED) {
              var event = new MessageEvent(eventType, datas.join("\n"), typeof window !== "undefined" && typeof window.location !== "undefined" ? window.location.origin : null, this.lastEventId);
              this.dispatchEvent(eventType, event);
            }
          }
          this.cache = events[events.length - 1];
        },
        dispatchEvent: function(type, event) {
          var handlers = this["_" + type + "Handlers"];
          if (handlers) {
            for (var i = 0; i < handlers.length; i++) {
              handlers[i].call(this, event);
            }
          }
          if (this["on" + type]) {
            this["on" + type].call(this, event);
          }
        },
        addEventListener: function(type, handler) {
          if (!this["_" + type + "Handlers"]) {
            this["_" + type + "Handlers"] = [];
          }
          this["_" + type + "Handlers"].push(handler);
        },
        removeEventListener: function(type, handler) {
          var handlers = this["_" + type + "Handlers"];
          if (!handlers) {
            return;
          }
          for (var i = handlers.length - 1; i >= 0; --i) {
            if (handlers[i] === handler) {
              handlers.splice(i, 1);
              break;
            }
          }
        },
        _pollTimer: null,
        _noactivityTimer: null,
        _xhr: null,
        lastEventId: null,
        cache: "",
        cursor: 0,
        onerror: null,
        onmessage: null,
        onopen: null,
        readyState: 0,
        urlWithParams: function(baseURL, params) {
          var encodedArgs = [];
          if (params) {
            var key, urlarg;
            var urlize = encodeURIComponent;
            for (key in params) {
              if (params.hasOwnProperty(key)) {
                urlarg = urlize(key) + "=" + urlize(params[key]);
                encodedArgs.push(urlarg);
              }
            }
          }
          if (encodedArgs.length > 0) {
            if (baseURL.indexOf("?") == -1)
              return baseURL + "?" + encodedArgs.join("&");
            return baseURL + "&" + encodedArgs.join("&");
          }
          return baseURL;
        },
        lastMessageIndex: function(text) {
          var ln2 = text.lastIndexOf("\n\n");
          var lr2 = text.lastIndexOf("\r\r");
          var lrln2 = text.lastIndexOf("\r\n\r\n");
          if (lrln2 > Math.max(ln2, lr2)) {
            return [lrln2, lrln2 + 4];
          }
          return [Math.max(ln2, lr2), Math.max(ln2, lr2) + 2];
        },
        trimWhiteSpace: function(str) {
          var reTrim = /^(\s|\u00A0)+|(\s|\u00A0)+$/g;
          return str.replace(reTrim, "");
        },
        normalizeToLF: function(str) {
          return str.replace(/\r\n|\r/g, "\n");
        }
      };
      if (isOldIE()) {
        EventSource.isPolyfill = "IE_8-9";
        var defaults = EventSource.prototype.defaultOptions;
        defaults.xhrHeaders = null;
        defaults.getArgs.evs_preamble = 2048 + 8;
        EventSource.prototype.XHR = function(evs) {
          var request = new XDomainRequest();
          this._request = request;
          request.onprogress = function() {
            request._ready = true;
            evs._onxhrdata();
          };
          request.onload = function() {
            this._loaded = true;
            evs._onxhrdata();
          };
          request.onerror = function() {
            this._failed = true;
            evs.readyState = evs.CLOSED;
            evs.dispatchEvent("error", {
              type: "error",
              data: "XDomainRequest error"
            });
          };
          request.ontimeout = function() {
            this._failed = true;
            evs.readyState = evs.CLOSED;
            evs.dispatchEvent("error", {
              type: "error",
              data: "XDomainRequest timed out"
            });
          };
          var reqGetArgs = {};
          if (evs.getArgs) {
            var defaultArgs = evs.getArgs;
            for (var key in defaultArgs) {
              if (defaultArgs.hasOwnProperty(key)) {
                reqGetArgs[key] = defaultArgs[key];
              }
            }
            if (evs.lastEventId) {
              reqGetArgs.evs_last_event_id = evs.lastEventId;
            }
          }
          request.open("GET", evs.urlWithParams(evs.URL, reqGetArgs));
          request.send();
        };
        EventSource.prototype.XHR.prototype = {
          useXDomainRequest: true,
          _request: null,
          _ready: false,
          _loaded: false,
          _failed: false,
          isReady: function() {
            return this._request._ready;
          },
          isDone: function() {
            return this._request._loaded;
          },
          hasError: function() {
            return this._request._failed;
          },
          getBuffer: function() {
            var rv = "";
            try {
              rv = this._request.responseText || "";
            } catch (err) {
            }
            return rv;
          },
          abort: function() {
            if (this._request) {
              this._request.abort();
            }
          }
        };
      } else {
        EventSource.isPolyfill = "XHR";
        EventSource.prototype.XHR = function(evs) {
          var request = new XMLHttpRequest();
          this._request = request;
          evs._xhr = this;
          request.onreadystatechange = function() {
            if (request.readyState > 1 && evs.readyState != evs.CLOSED) {
              if (request.status == 200 || request.status >= 300 && request.status < 400) {
                evs._onxhrdata();
              } else {
                request._failed = true;
                evs.readyState = evs.CLOSED;
                evs.dispatchEvent("error", {
                  type: "error",
                  data: "The server responded with " + request.status
                });
                evs.close();
              }
            }
          };
          request.onprogress = function() {
          };
          request.open("GET", evs.urlWithParams(evs.URL, evs.getArgs), true);
          var headers = evs.xhrHeaders;
          for (var header in headers) {
            if (headers.hasOwnProperty(header)) {
              request.setRequestHeader(header, headers[header]);
            }
          }
          if (evs.lastEventId) {
            request.setRequestHeader("Last-Event-Id", evs.lastEventId);
          }
          request.send();
        };
        EventSource.prototype.XHR.prototype = {
          useXDomainRequest: false,
          _request: null,
          _failed: false,
          isReady: function() {
            return this._request.readyState >= 2;
          },
          isDone: function() {
            return this._request.readyState == 4;
          },
          hasError: function() {
            return this._failed || this._request.status >= 400;
          },
          getBuffer: function() {
            var rv = "";
            try {
              rv = this._request.responseText || "";
            } catch (err) {
            }
            return rv;
          },
          abort: function() {
            if (this._request) {
              this._request.abort();
            }
          }
        };
      }
      function MessageEvent(type, data, origin, lastEventId) {
        this.bubbles = false;
        this.cancelBubble = false;
        this.cancelable = false;
        this.data = data || null;
        this.origin = origin || "";
        this.lastEventId = lastEventId || "";
        this.type = type || "message";
      }
      function isOldIE() {
        return Boolean(typeof window !== "undefined" && window.XDomainRequest && window.XMLHttpRequest && new XMLHttpRequest().responseType === void 0);
      }
      return EventSource;
    });
  }
});

// node_modules/@sanity/eventsource/browser.js
var require_browser = __commonJS({
  "node_modules/@sanity/eventsource/browser.js"(exports, module) {
    init_react();
    var evs = require_eventsource();
    module.exports = typeof window === "undefined" || !window.EventSource ? evs.EventSource : window.EventSource;
  }
});

// node_modules/@sanity/generate-help-url/index.js
var require_generate_help_url = __commonJS({
  "node_modules/@sanity/generate-help-url/index.js"(exports, module) {
    init_react();
    var baseUrl = "https://docs.sanity.io/help/";
    module.exports = function generateHelpUrl(slug) {
      return baseUrl + slug;
    };
  }
});

// node_modules/@sanity/client/lib/util/pick.js
var require_pick = __commonJS({
  "node_modules/@sanity/client/lib/util/pick.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function(obj, props) {
      return props.reduce(function(selection, prop) {
        if (typeof obj[prop] === "undefined") {
          return selection;
        }
        selection[prop] = obj[prop];
        return selection;
      }, {});
    };
  }
});

// node_modules/@sanity/client/lib/util/once.js
var require_once = __commonJS({
  "node_modules/@sanity/client/lib/util/once.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function(fn) {
      var didCall = false;
      var returnValue;
      return function() {
        if (didCall) {
          return returnValue;
        }
        returnValue = fn.apply(void 0, arguments);
        didCall = true;
        return returnValue;
      };
    };
  }
});

// node_modules/@sanity/client/lib/util/defaults.js
var require_defaults2 = __commonJS({
  "node_modules/@sanity/client/lib/util/defaults.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function(obj, defaults) {
      return Object.keys(defaults).concat(Object.keys(obj)).reduce(function(target, prop) {
        target[prop] = typeof obj[prop] === "undefined" ? defaults[prop] : obj[prop];
        return target;
      }, {});
    };
  }
});

// node_modules/@sanity/client/lib/data/listen.js
var require_listen = __commonJS({
  "node_modules/@sanity/client/lib/data/listen.js"(exports, module) {
    "use strict";
    init_react();
    function ownKeys6(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread6(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        i % 2 ? ownKeys6(Object(source), true).forEach(function(key) {
          _defineProperty2(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys6(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty2(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var assign = require_object_assign();
    var Observable = require_minimal();
    var polyfilledEventSource = require_browser();
    var generateHelpUrl = require_generate_help_url();
    var pick2 = require_pick();
    var once = require_once();
    var defaults = require_defaults2();
    var encodeQueryString = require_encodeQueryString();
    var MAX_URL_LENGTH = 16e3 - 1200;
    var tokenWarning = ["Using token with listeners is not supported in browsers. ", "For more info, see ".concat(generateHelpUrl("js-client-listener-tokens-browser"), ".")];
    var printTokenWarning = once(function() {
      return console.warn(tokenWarning.join(" "));
    });
    var isWindowEventSource = Boolean(typeof window !== "undefined" && window.EventSource);
    var EventSource = isWindowEventSource ? window.EventSource : polyfilledEventSource;
    var possibleOptions = ["includePreviousRevision", "includeResult", "visibility", "effectFormat", "tag"];
    var defaultOptions = {
      includeResult: true
    };
    module.exports = function listen(query, params) {
      var opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var _this$clientConfig = this.clientConfig, url = _this$clientConfig.url, token = _this$clientConfig.token, withCredentials = _this$clientConfig.withCredentials, requestTagPrefix = _this$clientConfig.requestTagPrefix;
      var tag = opts.tag && requestTagPrefix ? [requestTagPrefix, opts.tag].join(".") : opts.tag;
      var options = _objectSpread6(_objectSpread6({}, defaults(opts, defaultOptions)), {}, {
        tag
      });
      var listenOpts = pick2(options, possibleOptions);
      var qs = encodeQueryString({
        query,
        params,
        options: listenOpts,
        tag
      });
      var uri = "".concat(url).concat(this.getDataUrl("listen", qs));
      if (uri.length > MAX_URL_LENGTH) {
        return new Observable(function(observer) {
          return observer.error(new Error("Query too large for listener"));
        });
      }
      var listenFor = options.events ? options.events : ["mutation"];
      var shouldEmitReconnect = listenFor.indexOf("reconnect") !== -1;
      if (token && isWindowEventSource) {
        printTokenWarning();
      }
      var esOptions = {};
      if (token || withCredentials) {
        esOptions.withCredentials = true;
      }
      if (token) {
        esOptions.headers = {
          Authorization: "Bearer ".concat(token)
        };
      }
      return new Observable(function(observer) {
        var es = getEventSource();
        var reconnectTimer;
        var stopped = false;
        function onError() {
          if (stopped) {
            return;
          }
          emitReconnect();
          if (stopped) {
            return;
          }
          if (es.readyState === EventSource.CLOSED) {
            unsubscribe();
            clearTimeout(reconnectTimer);
            reconnectTimer = setTimeout(open, 100);
          }
        }
        function onChannelError(err) {
          observer.error(cooerceError(err));
        }
        function onMessage(evt) {
          var event = parseEvent(evt);
          return event instanceof Error ? observer.error(event) : observer.next(event);
        }
        function onDisconnect(evt) {
          stopped = true;
          unsubscribe();
          observer.complete();
        }
        function unsubscribe() {
          es.removeEventListener("error", onError, false);
          es.removeEventListener("channelError", onChannelError, false);
          es.removeEventListener("disconnect", onDisconnect, false);
          listenFor.forEach(function(type) {
            return es.removeEventListener(type, onMessage, false);
          });
          es.close();
        }
        function emitReconnect() {
          if (shouldEmitReconnect) {
            observer.next({
              type: "reconnect"
            });
          }
        }
        function getEventSource() {
          var evs = new EventSource(uri, esOptions);
          evs.addEventListener("error", onError, false);
          evs.addEventListener("channelError", onChannelError, false);
          evs.addEventListener("disconnect", onDisconnect, false);
          listenFor.forEach(function(type) {
            return evs.addEventListener(type, onMessage, false);
          });
          return evs;
        }
        function open() {
          es = getEventSource();
        }
        function stop() {
          stopped = true;
          unsubscribe();
        }
        return stop;
      });
    };
    function parseEvent(event) {
      try {
        var data = event.data && JSON.parse(event.data) || {};
        return assign({
          type: event.type
        }, data);
      } catch (err) {
        return err;
      }
    }
    function cooerceError(err) {
      if (err instanceof Error) {
        return err;
      }
      var evt = parseEvent(err);
      return evt instanceof Error ? evt : new Error(extractErrorMessage(evt));
    }
    function extractErrorMessage(err) {
      if (!err.error) {
        return err.message || "Unknown listener error";
      }
      if (err.error.description) {
        return err.error.description;
      }
      return typeof err.error === "string" ? err.error : JSON.stringify(err.error, null, 2);
    }
  }
});

// node_modules/@sanity/client/lib/data/dataMethods.js
var require_dataMethods = __commonJS({
  "node_modules/@sanity/client/lib/data/dataMethods.js"(exports, module) {
    "use strict";
    init_react();
    function _defineProperty2(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var assign = require_object_assign();
    var _require = require_filter2();
    var filter = _require.filter;
    var _require2 = require_map2();
    var map3 = _require2.map;
    var validators = require_validators();
    var getSelection = require_getSelection();
    var encodeQueryString = require_encodeQueryString();
    var Transaction = require_transaction();
    var Patch = require_patch();
    var listen = require_listen();
    var excludeFalsey = function excludeFalsey2(param, defValue) {
      var value = typeof param === "undefined" ? defValue : param;
      return param === false ? void 0 : value;
    };
    var getMutationQuery = function getMutationQuery2() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return {
        returnIds: true,
        returnDocuments: excludeFalsey(options.returnDocuments, true),
        visibility: options.visibility || "sync"
      };
    };
    var isResponse = function isResponse2(event) {
      return event.type === "response";
    };
    var getBody = function getBody2(event) {
      return event.body;
    };
    var indexBy = function indexBy2(docs, attr) {
      return docs.reduce(function(indexed, doc) {
        indexed[attr(doc)] = doc;
        return indexed;
      }, /* @__PURE__ */ Object.create(null));
    };
    var toPromise = function toPromise2(observable) {
      return observable.toPromise();
    };
    var getQuerySizeLimit = 11264;
    module.exports = {
      listen,
      getDataUrl: function getDataUrl(operation, path) {
        var config = this.clientConfig;
        var catalog = config.gradientMode ? config.namespace : validators.hasDataset(config);
        var baseUri = "/".concat(operation, "/").concat(catalog);
        var uri = path ? "".concat(baseUri, "/").concat(path) : baseUri;
        return (this.clientConfig.gradientMode ? uri : "/data".concat(uri)).replace(/\/($|\?)/, "$1");
      },
      fetch: function fetch2(query, params) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var mapResponse = options.filterResponse === false ? function(res) {
          return res;
        } : function(res) {
          return res.result;
        };
        var observable = this._dataRequest("query", {
          query,
          params
        }, options).pipe(map3(mapResponse));
        return this.isPromiseAPI() ? toPromise(observable) : observable;
      },
      getDocument: function getDocument(id) {
        var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var options = {
          uri: this.getDataUrl("doc", id),
          json: true,
          tag: opts.tag
        };
        var observable = this._requestObservable(options).pipe(filter(isResponse), map3(function(event) {
          return event.body.documents && event.body.documents[0];
        }));
        return this.isPromiseAPI() ? toPromise(observable) : observable;
      },
      getDocuments: function getDocuments(ids) {
        var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var options = {
          uri: this.getDataUrl("doc", ids.join(",")),
          json: true,
          tag: opts.tag
        };
        var observable = this._requestObservable(options).pipe(filter(isResponse), map3(function(event) {
          var indexed = indexBy(event.body.documents || [], function(doc) {
            return doc._id;
          });
          return ids.map(function(id) {
            return indexed[id] || null;
          });
        }));
        return this.isPromiseAPI() ? toPromise(observable) : observable;
      },
      create: function create(doc, options) {
        return this._create(doc, "create", options);
      },
      createIfNotExists: function createIfNotExists(doc, options) {
        validators.requireDocumentId("createIfNotExists", doc);
        return this._create(doc, "createIfNotExists", options);
      },
      createOrReplace: function createOrReplace(doc, options) {
        validators.requireDocumentId("createOrReplace", doc);
        return this._create(doc, "createOrReplace", options);
      },
      patch: function patch(selector, operations) {
        return new Patch(selector, operations, this);
      },
      delete: function _delete(selection, options) {
        return this.dataRequest("mutate", {
          mutations: [{
            delete: getSelection(selection)
          }]
        }, options);
      },
      mutate: function mutate(mutations, options) {
        var mut = mutations instanceof Patch || mutations instanceof Transaction ? mutations.serialize() : mutations;
        var muts = Array.isArray(mut) ? mut : [mut];
        var transactionId = options && options.transactionId;
        return this.dataRequest("mutate", {
          mutations: muts,
          transactionId
        }, options);
      },
      transaction: function transaction(operations) {
        return new Transaction(operations, this);
      },
      dataRequest: function dataRequest(endpoint, body) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var request = this._dataRequest(endpoint, body, options);
        return this.isPromiseAPI() ? toPromise(request) : request;
      },
      _dataRequest: function _dataRequest(endpoint, body) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var isMutation = endpoint === "mutate";
        var isQuery = endpoint === "query";
        var strQuery = !isMutation && encodeQueryString(body);
        var useGet = !isMutation && strQuery.length < getQuerySizeLimit;
        var stringQuery = useGet ? strQuery : "";
        var returnFirst = options.returnFirst;
        var timeout = options.timeout, token = options.token, tag = options.tag;
        var uri = this.getDataUrl(endpoint, stringQuery);
        var reqOptions = {
          method: useGet ? "GET" : "POST",
          uri,
          json: true,
          body: useGet ? void 0 : body,
          query: isMutation && getMutationQuery(options),
          timeout,
          token,
          tag,
          canUseCdn: isQuery
        };
        return this._requestObservable(reqOptions).pipe(filter(isResponse), map3(getBody), map3(function(res) {
          if (!isMutation) {
            return res;
          }
          var results = res.results || [];
          if (options.returnDocuments) {
            return returnFirst ? results[0] && results[0].document : results.map(function(mut) {
              return mut.document;
            });
          }
          var key = returnFirst ? "documentId" : "documentIds";
          var ids = returnFirst ? results[0] && results[0].id : results.map(function(mut) {
            return mut.id;
          });
          return _defineProperty2({
            transactionId: res.transactionId,
            results
          }, key, ids);
        }));
      },
      _create: function _create(doc, op) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var mutation = _defineProperty2({}, op, doc);
        var opts = assign({
          returnFirst: true,
          returnDocuments: true
        }, options);
        return this.dataRequest("mutate", {
          mutations: [mutation]
        }, opts);
      }
    };
  }
});

// node_modules/@sanity/client/lib/datasets/datasetsClient.js
var require_datasetsClient = __commonJS({
  "node_modules/@sanity/client/lib/datasets/datasetsClient.js"(exports, module) {
    "use strict";
    init_react();
    var assign = require_object_assign();
    var validate = require_validators();
    function DatasetsClient(client) {
      this.request = client.request.bind(client);
    }
    assign(DatasetsClient.prototype, {
      create: function create(name, options) {
        return this._modify("PUT", name, options);
      },
      edit: function edit(name, options) {
        return this._modify("PATCH", name, options);
      },
      delete: function _delete(name) {
        return this._modify("DELETE", name);
      },
      list: function list() {
        return this.request({
          uri: "/datasets"
        });
      },
      _modify: function _modify(method, name, body) {
        validate.dataset(name);
        return this.request({
          method,
          uri: "/datasets/".concat(name),
          body
        });
      }
    });
    module.exports = DatasetsClient;
  }
});

// node_modules/@sanity/client/lib/projects/projectsClient.js
var require_projectsClient = __commonJS({
  "node_modules/@sanity/client/lib/projects/projectsClient.js"(exports, module) {
    "use strict";
    init_react();
    var assign = require_object_assign();
    function ProjectsClient(client) {
      this.client = client;
    }
    assign(ProjectsClient.prototype, {
      list: function list() {
        return this.client.request({
          uri: "/projects"
        });
      },
      getById: function getById(id) {
        return this.client.request({
          uri: "/projects/".concat(id)
        });
      }
    });
    module.exports = ProjectsClient;
  }
});

// node_modules/@sanity/client/lib/http/queryString.js
var require_queryString = __commonJS({
  "node_modules/@sanity/client/lib/http/queryString.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function(params) {
      var qs = [];
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          qs.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(params[key])));
        }
      }
      return qs.length > 0 ? "?".concat(qs.join("&")) : "";
    };
  }
});

// node_modules/@sanity/client/lib/assets/assetsClient.js
var require_assetsClient = __commonJS({
  "node_modules/@sanity/client/lib/assets/assetsClient.js"(exports, module) {
    "use strict";
    init_react();
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _iterableToArrayLimit(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null)
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    var assign = require_object_assign();
    var _require = require_map2();
    var map3 = _require.map;
    var _require2 = require_filter2();
    var filter = _require2.filter;
    var queryString = require_queryString();
    var validators = require_validators();
    function AssetsClient(client) {
      this.client = client;
    }
    function toDocument(body) {
      var document2 = body.document;
      Object.defineProperty(document2, "document", {
        enumerable: false,
        get: function get() {
          console.warn("The promise returned from client.asset.upload(...) now resolves with the asset document");
          return document2;
        }
      });
      return document2;
    }
    function optionsFromFile(opts, file) {
      if (typeof window === "undefined" || !(file instanceof window.File)) {
        return opts;
      }
      return assign({
        filename: opts.preserveFilename === false ? void 0 : file.name,
        contentType: file.type
      }, opts);
    }
    assign(AssetsClient.prototype, {
      upload: function upload(assetType, body) {
        var opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        validators.validateAssetType(assetType);
        var meta = opts.extract || void 0;
        if (meta && !meta.length) {
          meta = ["none"];
        }
        var dataset = validators.hasDataset(this.client.clientConfig);
        var assetEndpoint = assetType === "image" ? "images" : "files";
        var options = optionsFromFile(opts, body);
        var tag = options.tag, label = options.label, title = options.title, description = options.description, creditLine = options.creditLine, filename = options.filename, source = options.source;
        var query = {
          label,
          title,
          description,
          filename,
          meta,
          creditLine
        };
        if (source) {
          query.sourceId = source.id;
          query.sourceName = source.name;
          query.sourceUrl = source.url;
        }
        var observable = this.client._requestObservable({
          tag,
          method: "POST",
          timeout: options.timeout || 0,
          uri: "/assets/".concat(assetEndpoint, "/").concat(dataset),
          headers: options.contentType ? {
            "Content-Type": options.contentType
          } : {},
          query,
          body
        });
        return this.client.isPromiseAPI() ? observable.pipe(filter(function(event) {
          return event.type === "response";
        }), map3(function(event) {
          return toDocument(event.body);
        })).toPromise() : observable;
      },
      delete: function _delete(type, id) {
        console.warn("client.assets.delete() is deprecated, please use client.delete(<document-id>)");
        var docId = id || "";
        if (!/^(image|file)-/.test(docId)) {
          docId = "".concat(type, "-").concat(docId);
        } else if (type._id) {
          docId = type._id;
        }
        validators.hasDataset(this.client.clientConfig);
        return this.client.delete(docId);
      },
      getImageUrl: function getImageUrl(ref, query) {
        var id = ref._ref || ref;
        if (typeof id !== "string") {
          throw new Error("getImageUrl() needs either an object with a _ref, or a string with an asset document ID");
        }
        if (!/^image-[A-Za-z0-9_]+-\d+x\d+-[a-z]{1,5}$/.test(id)) {
          throw new Error('Unsupported asset ID "'.concat(id, '". URL generation only works for auto-generated IDs.'));
        }
        var _id$split = id.split("-"), _id$split2 = _slicedToArray(_id$split, 4), assetId = _id$split2[1], size = _id$split2[2], format2 = _id$split2[3];
        validators.hasDataset(this.client.clientConfig);
        var _this$client$clientCo = this.client.clientConfig, projectId = _this$client$clientCo.projectId, dataset = _this$client$clientCo.dataset;
        var qs = query ? queryString(query) : "";
        return "https://cdn.sanity.io/images/".concat(projectId, "/").concat(dataset, "/").concat(assetId, "-").concat(size, ".").concat(format2).concat(qs);
      }
    });
    module.exports = AssetsClient;
  }
});

// node_modules/@sanity/client/lib/users/usersClient.js
var require_usersClient = __commonJS({
  "node_modules/@sanity/client/lib/users/usersClient.js"(exports, module) {
    "use strict";
    init_react();
    var assign = require_object_assign();
    function UsersClient(client) {
      this.client = client;
    }
    assign(UsersClient.prototype, {
      getById: function getById(id) {
        return this.client.request({
          uri: "/users/".concat(id)
        });
      }
    });
    module.exports = UsersClient;
  }
});

// node_modules/@sanity/client/lib/auth/authClient.js
var require_authClient = __commonJS({
  "node_modules/@sanity/client/lib/auth/authClient.js"(exports, module) {
    "use strict";
    init_react();
    var assign = require_object_assign();
    function AuthClient(client) {
      this.client = client;
    }
    assign(AuthClient.prototype, {
      getLoginProviders: function getLoginProviders() {
        return this.client.request({
          uri: "/auth/providers"
        });
      },
      logout: function logout() {
        return this.client.request({
          uri: "/auth/logout",
          method: "POST"
        });
      }
    });
    module.exports = AuthClient;
  }
});

// node_modules/nano-pubsub/index.js
var require_nano_pubsub = __commonJS({
  "node_modules/nano-pubsub/index.js"(exports, module) {
    init_react();
    module.exports = function Pubsub() {
      var subscribers = [];
      return {
        subscribe,
        publish
      };
      function subscribe(subscriber) {
        subscribers.push(subscriber);
        return function unsubscribe() {
          var idx = subscribers.indexOf(subscriber);
          if (idx > -1) {
            subscribers.splice(idx, 1);
          }
        };
      }
      function publish() {
        for (var i = 0; i < subscribers.length; i++) {
          subscribers[i].apply(null, arguments);
        }
      }
    };
  }
});

// node_modules/get-it/lib/util/middlewareReducer.js
var require_middlewareReducer = __commonJS({
  "node_modules/get-it/lib/util/middlewareReducer.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function(middleware) {
      var applyMiddleware = function applyMiddleware2(hook, defaultValue) {
        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }
        var bailEarly = hook === "onError";
        var value = defaultValue;
        for (var i = 0; i < middleware[hook].length; i++) {
          var handler = middleware[hook][i];
          value = handler.apply(void 0, [value].concat(args));
          if (bailEarly && !value) {
            break;
          }
        }
        return value;
      };
      return applyMiddleware;
    };
  }
});

// node_modules/requires-port/index.js
var require_requires_port = __commonJS({
  "node_modules/requires-port/index.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function required(port, protocol) {
      protocol = protocol.split(":")[0];
      port = +port;
      if (!port)
        return false;
      switch (protocol) {
        case "http":
        case "ws":
          return port !== 80;
        case "https":
        case "wss":
          return port !== 443;
        case "ftp":
          return port !== 21;
        case "gopher":
          return port !== 70;
        case "file":
          return false;
      }
      return port !== 0;
    };
  }
});

// node_modules/querystringify/index.js
var require_querystringify = __commonJS({
  "node_modules/querystringify/index.js"(exports) {
    "use strict";
    init_react();
    var has = Object.prototype.hasOwnProperty;
    var undef;
    function decode(input) {
      try {
        return decodeURIComponent(input.replace(/\+/g, " "));
      } catch (e) {
        return null;
      }
    }
    function encode2(input) {
      try {
        return encodeURIComponent(input);
      } catch (e) {
        return null;
      }
    }
    function querystring(query) {
      var parser = /([^=?#&]+)=?([^&]*)/g, result = {}, part;
      while (part = parser.exec(query)) {
        var key = decode(part[1]), value = decode(part[2]);
        if (key === null || value === null || key in result)
          continue;
        result[key] = value;
      }
      return result;
    }
    function querystringify(obj, prefix) {
      prefix = prefix || "";
      var pairs = [], value, key;
      if (typeof prefix !== "string")
        prefix = "?";
      for (key in obj) {
        if (has.call(obj, key)) {
          value = obj[key];
          if (!value && (value === null || value === undef || isNaN(value))) {
            value = "";
          }
          key = encode2(key);
          value = encode2(value);
          if (key === null || value === null)
            continue;
          pairs.push(key + "=" + value);
        }
      }
      return pairs.length ? prefix + pairs.join("&") : "";
    }
    exports.stringify = querystringify;
    exports.parse = querystring;
  }
});

// node_modules/url-parse/index.js
var require_url_parse = __commonJS({
  "node_modules/url-parse/index.js"(exports, module) {
    "use strict";
    init_react();
    var required = require_requires_port();
    var qs = require_querystringify();
    var controlOrWhitespace = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/;
    var CRHTLF = /[\n\r\t]/g;
    var slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;
    var port = /:\d+$/;
    var protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i;
    var windowsDriveLetter = /^[a-zA-Z]:/;
    function trimLeft(str) {
      return (str ? str : "").toString().replace(controlOrWhitespace, "");
    }
    var rules = [
      ["#", "hash"],
      ["?", "query"],
      function sanitize(address, url) {
        return isSpecial(url.protocol) ? address.replace(/\\/g, "/") : address;
      },
      ["/", "pathname"],
      ["@", "auth", 1],
      [NaN, "host", void 0, 1, 1],
      [/:(\d*)$/, "port", void 0, 1],
      [NaN, "hostname", void 0, 1, 1]
    ];
    var ignore = { hash: 1, query: 1 };
    function lolcation(loc) {
      var globalVar;
      if (typeof window !== "undefined")
        globalVar = window;
      else if (typeof globalThis !== "undefined")
        globalVar = globalThis;
      else if (typeof self !== "undefined")
        globalVar = self;
      else
        globalVar = {};
      var location = globalVar.location || {};
      loc = loc || location;
      var finaldestination = {}, type = typeof loc, key;
      if (loc.protocol === "blob:") {
        finaldestination = new Url2(unescape(loc.pathname), {});
      } else if (type === "string") {
        finaldestination = new Url2(loc, {});
        for (key in ignore)
          delete finaldestination[key];
      } else if (type === "object") {
        for (key in loc) {
          if (key in ignore)
            continue;
          finaldestination[key] = loc[key];
        }
        if (finaldestination.slashes === void 0) {
          finaldestination.slashes = slashes.test(loc.href);
        }
      }
      return finaldestination;
    }
    function isSpecial(scheme) {
      return scheme === "file:" || scheme === "ftp:" || scheme === "http:" || scheme === "https:" || scheme === "ws:" || scheme === "wss:";
    }
    function extractProtocol(address, location) {
      address = trimLeft(address);
      address = address.replace(CRHTLF, "");
      location = location || {};
      var match = protocolre.exec(address);
      var protocol = match[1] ? match[1].toLowerCase() : "";
      var forwardSlashes = !!match[2];
      var otherSlashes = !!match[3];
      var slashesCount = 0;
      var rest;
      if (forwardSlashes) {
        if (otherSlashes) {
          rest = match[2] + match[3] + match[4];
          slashesCount = match[2].length + match[3].length;
        } else {
          rest = match[2] + match[4];
          slashesCount = match[2].length;
        }
      } else {
        if (otherSlashes) {
          rest = match[3] + match[4];
          slashesCount = match[3].length;
        } else {
          rest = match[4];
        }
      }
      if (protocol === "file:") {
        if (slashesCount >= 2) {
          rest = rest.slice(2);
        }
      } else if (isSpecial(protocol)) {
        rest = match[4];
      } else if (protocol) {
        if (forwardSlashes) {
          rest = rest.slice(2);
        }
      } else if (slashesCount >= 2 && isSpecial(location.protocol)) {
        rest = match[4];
      }
      return {
        protocol,
        slashes: forwardSlashes || isSpecial(protocol),
        slashesCount,
        rest
      };
    }
    function resolve(relative, base2) {
      if (relative === "")
        return base2;
      var path = (base2 || "/").split("/").slice(0, -1).concat(relative.split("/")), i = path.length, last = path[i - 1], unshift = false, up = 0;
      while (i--) {
        if (path[i] === ".") {
          path.splice(i, 1);
        } else if (path[i] === "..") {
          path.splice(i, 1);
          up++;
        } else if (up) {
          if (i === 0)
            unshift = true;
          path.splice(i, 1);
          up--;
        }
      }
      if (unshift)
        path.unshift("");
      if (last === "." || last === "..")
        path.push("");
      return path.join("/");
    }
    function Url2(address, location, parser) {
      address = trimLeft(address);
      address = address.replace(CRHTLF, "");
      if (!(this instanceof Url2)) {
        return new Url2(address, location, parser);
      }
      var relative, extracted, parse3, instruction, index, key, instructions = rules.slice(), type = typeof location, url = this, i = 0;
      if (type !== "object" && type !== "string") {
        parser = location;
        location = null;
      }
      if (parser && typeof parser !== "function")
        parser = qs.parse;
      location = lolcation(location);
      extracted = extractProtocol(address || "", location);
      relative = !extracted.protocol && !extracted.slashes;
      url.slashes = extracted.slashes || relative && location.slashes;
      url.protocol = extracted.protocol || location.protocol || "";
      address = extracted.rest;
      if (extracted.protocol === "file:" && (extracted.slashesCount !== 2 || windowsDriveLetter.test(address)) || !extracted.slashes && (extracted.protocol || extracted.slashesCount < 2 || !isSpecial(url.protocol))) {
        instructions[3] = [/(.*)/, "pathname"];
      }
      for (; i < instructions.length; i++) {
        instruction = instructions[i];
        if (typeof instruction === "function") {
          address = instruction(address, url);
          continue;
        }
        parse3 = instruction[0];
        key = instruction[1];
        if (parse3 !== parse3) {
          url[key] = address;
        } else if (typeof parse3 === "string") {
          index = parse3 === "@" ? address.lastIndexOf(parse3) : address.indexOf(parse3);
          if (~index) {
            if (typeof instruction[2] === "number") {
              url[key] = address.slice(0, index);
              address = address.slice(index + instruction[2]);
            } else {
              url[key] = address.slice(index);
              address = address.slice(0, index);
            }
          }
        } else if (index = parse3.exec(address)) {
          url[key] = index[1];
          address = address.slice(0, index.index);
        }
        url[key] = url[key] || (relative && instruction[3] ? location[key] || "" : "");
        if (instruction[4])
          url[key] = url[key].toLowerCase();
      }
      if (parser)
        url.query = parser(url.query);
      if (relative && location.slashes && url.pathname.charAt(0) !== "/" && (url.pathname !== "" || location.pathname !== "")) {
        url.pathname = resolve(url.pathname, location.pathname);
      }
      if (url.pathname.charAt(0) !== "/" && isSpecial(url.protocol)) {
        url.pathname = "/" + url.pathname;
      }
      if (!required(url.port, url.protocol)) {
        url.host = url.hostname;
        url.port = "";
      }
      url.username = url.password = "";
      if (url.auth) {
        index = url.auth.indexOf(":");
        if (~index) {
          url.username = url.auth.slice(0, index);
          url.username = encodeURIComponent(decodeURIComponent(url.username));
          url.password = url.auth.slice(index + 1);
          url.password = encodeURIComponent(decodeURIComponent(url.password));
        } else {
          url.username = encodeURIComponent(decodeURIComponent(url.auth));
        }
        url.auth = url.password ? url.username + ":" + url.password : url.username;
      }
      url.origin = url.protocol !== "file:" && isSpecial(url.protocol) && url.host ? url.protocol + "//" + url.host : "null";
      url.href = url.toString();
    }
    function set(part, value, fn) {
      var url = this;
      switch (part) {
        case "query":
          if (typeof value === "string" && value.length) {
            value = (fn || qs.parse)(value);
          }
          url[part] = value;
          break;
        case "port":
          url[part] = value;
          if (!required(value, url.protocol)) {
            url.host = url.hostname;
            url[part] = "";
          } else if (value) {
            url.host = url.hostname + ":" + value;
          }
          break;
        case "hostname":
          url[part] = value;
          if (url.port)
            value += ":" + url.port;
          url.host = value;
          break;
        case "host":
          url[part] = value;
          if (port.test(value)) {
            value = value.split(":");
            url.port = value.pop();
            url.hostname = value.join(":");
          } else {
            url.hostname = value;
            url.port = "";
          }
          break;
        case "protocol":
          url.protocol = value.toLowerCase();
          url.slashes = !fn;
          break;
        case "pathname":
        case "hash":
          if (value) {
            var char = part === "pathname" ? "/" : "#";
            url[part] = value.charAt(0) !== char ? char + value : value;
          } else {
            url[part] = value;
          }
          break;
        case "username":
        case "password":
          url[part] = encodeURIComponent(value);
          break;
        case "auth":
          var index = value.indexOf(":");
          if (~index) {
            url.username = value.slice(0, index);
            url.username = encodeURIComponent(decodeURIComponent(url.username));
            url.password = value.slice(index + 1);
            url.password = encodeURIComponent(decodeURIComponent(url.password));
          } else {
            url.username = encodeURIComponent(decodeURIComponent(value));
          }
      }
      for (var i = 0; i < rules.length; i++) {
        var ins = rules[i];
        if (ins[4])
          url[ins[1]] = url[ins[1]].toLowerCase();
      }
      url.auth = url.password ? url.username + ":" + url.password : url.username;
      url.origin = url.protocol !== "file:" && isSpecial(url.protocol) && url.host ? url.protocol + "//" + url.host : "null";
      url.href = url.toString();
      return url;
    }
    function toString(stringify2) {
      if (!stringify2 || typeof stringify2 !== "function")
        stringify2 = qs.stringify;
      var query, url = this, host = url.host, protocol = url.protocol;
      if (protocol && protocol.charAt(protocol.length - 1) !== ":")
        protocol += ":";
      var result = protocol + (url.protocol && url.slashes || isSpecial(url.protocol) ? "//" : "");
      if (url.username) {
        result += url.username;
        if (url.password)
          result += ":" + url.password;
        result += "@";
      } else if (url.password) {
        result += ":" + url.password;
        result += "@";
      } else if (url.protocol !== "file:" && isSpecial(url.protocol) && !host && url.pathname !== "/") {
        result += "@";
      }
      if (host[host.length - 1] === ":" || port.test(url.hostname) && !url.port) {
        host += ":";
      }
      result += host + url.pathname;
      query = typeof url.query === "object" ? stringify2(url.query) : url.query;
      if (query)
        result += query.charAt(0) !== "?" ? "?" + query : query;
      if (url.hash)
        result += url.hash;
      return result;
    }
    Url2.prototype = { set, toString };
    Url2.extractProtocol = extractProtocol;
    Url2.location = lolcation;
    Url2.trimLeft = trimLeft;
    Url2.qs = qs;
    module.exports = Url2;
  }
});

// node_modules/get-it/lib/middleware/defaultOptionsProcessor.js
var require_defaultOptionsProcessor = __commonJS({
  "node_modules/get-it/lib/middleware/defaultOptionsProcessor.js"(exports, module) {
    "use strict";
    init_react();
    var objectAssign = require_object_assign();
    var urlParse2 = require_url_parse();
    var isReactNative = typeof navigator === "undefined" ? false : navigator.product === "ReactNative";
    var has = Object.prototype.hasOwnProperty;
    var defaultOptions = { timeout: isReactNative ? 6e4 : 12e4 };
    module.exports = function(opts) {
      var options = typeof opts === "string" ? objectAssign({ url: opts }, defaultOptions) : objectAssign({}, defaultOptions, opts);
      var url = urlParse2(options.url, {}, true);
      options.timeout = normalizeTimeout(options.timeout);
      if (options.query) {
        url.query = objectAssign({}, url.query, removeUndefined(options.query));
      }
      options.method = options.body && !options.method ? "POST" : (options.method || "GET").toUpperCase();
      options.url = url.toString(stringifyQueryString);
      return options;
    };
    function stringifyQueryString(obj) {
      var pairs = [];
      for (var key in obj) {
        if (has.call(obj, key)) {
          push(key, obj[key]);
        }
      }
      return pairs.length ? pairs.join("&") : "";
      function push(key2, val) {
        if (Array.isArray(val)) {
          val.forEach(function(item) {
            return push(key2, item);
          });
        } else {
          pairs.push([key2, val].map(encodeURIComponent).join("="));
        }
      }
    }
    function normalizeTimeout(time) {
      if (time === false || time === 0) {
        return false;
      }
      if (time.connect || time.socket) {
        return time;
      }
      var delay = Number(time);
      if (isNaN(delay)) {
        return normalizeTimeout(defaultOptions.timeout);
      }
      return { connect: delay, socket: delay };
    }
    function removeUndefined(obj) {
      var target = {};
      for (var key in obj) {
        if (obj[key] !== void 0) {
          target[key] = obj[key];
        }
      }
      return target;
    }
  }
});

// node_modules/get-it/lib/middleware/defaultOptionsValidator.js
var require_defaultOptionsValidator = __commonJS({
  "node_modules/get-it/lib/middleware/defaultOptionsValidator.js"(exports, module) {
    "use strict";
    init_react();
    var validUrl = /^https?:\/\//i;
    module.exports = function(options) {
      if (!validUrl.test(options.url)) {
        throw new Error('"' + options.url + '" is not a valid URL');
      }
    };
  }
});

// node-modules-polyfills:punycode
function error(type) {
  throw new RangeError(errors[type]);
}
function map(array, fn) {
  var length = array.length;
  var result = [];
  while (length--) {
    result[length] = fn(array[length]);
  }
  return result;
}
function mapDomain(string, fn) {
  var parts = string.split("@");
  var result = "";
  if (parts.length > 1) {
    result = parts[0] + "@";
    string = parts[1];
  }
  string = string.replace(regexSeparators, ".");
  var labels = string.split(".");
  var encoded = map(labels, fn).join(".");
  return result + encoded;
}
function ucs2decode(string) {
  var output = [], counter = 0, length = string.length, value, extra;
  while (counter < length) {
    value = string.charCodeAt(counter++);
    if (value >= 55296 && value <= 56319 && counter < length) {
      extra = string.charCodeAt(counter++);
      if ((extra & 64512) == 56320) {
        output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}
function digitToBasic(digit, flag) {
  return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
}
function adapt(delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  for (; delta > baseMinusTMin * tMax >> 1; k += base) {
    delta = floor(delta / baseMinusTMin);
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
}
function encode(input) {
  var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], inputLength, handledCPCountPlusOne, baseMinusT, qMinusT;
  input = ucs2decode(input);
  inputLength = input.length;
  n = initialN;
  delta = 0;
  bias = initialBias;
  for (j = 0; j < inputLength; ++j) {
    currentValue = input[j];
    if (currentValue < 128) {
      output.push(stringFromCharCode(currentValue));
    }
  }
  handledCPCount = basicLength = output.length;
  if (basicLength) {
    output.push(delimiter);
  }
  while (handledCPCount < inputLength) {
    for (m = maxInt, j = 0; j < inputLength; ++j) {
      currentValue = input[j];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }
    handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      error("overflow");
    }
    delta += (m - n) * handledCPCountPlusOne;
    n = m;
    for (j = 0; j < inputLength; ++j) {
      currentValue = input[j];
      if (currentValue < n && ++delta > maxInt) {
        error("overflow");
      }
      if (currentValue == n) {
        for (q = delta, k = base; ; k += base) {
          t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
          if (q < t) {
            break;
          }
          qMinusT = q - t;
          baseMinusT = base - t;
          output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
          q = floor(qMinusT / baseMinusT);
        }
        output.push(stringFromCharCode(digitToBasic(q, 0)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        ++handledCPCount;
      }
    }
    ++delta;
    ++n;
  }
  return output.join("");
}
function toASCII(input) {
  return mapDomain(input, function(string) {
    return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
  });
}
var maxInt, base, tMin, tMax, skew, damp, initialBias, initialN, delimiter, regexNonASCII, regexSeparators, errors, baseMinusTMin, floor, stringFromCharCode;
var init_punycode = __esm({
  "node-modules-polyfills:punycode"() {
    init_react();
    maxInt = 2147483647;
    base = 36;
    tMin = 1;
    tMax = 26;
    skew = 38;
    damp = 700;
    initialBias = 72;
    initialN = 128;
    delimiter = "-";
    regexNonASCII = /[^\x20-\x7E]/;
    regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
    errors = {
      "overflow": "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    };
    baseMinusTMin = base - tMin;
    floor = Math.floor;
    stringFromCharCode = String.fromCharCode;
  }
});

// node-modules-polyfills:process
function defaultSetTimout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
var cachedSetTimeout, cachedClearTimeout, performance, performanceNow, startTime;
var init_process = __esm({
  "node-modules-polyfills:process"() {
    init_react();
    cachedSetTimeout = defaultSetTimout;
    cachedClearTimeout = defaultClearTimeout;
    if (typeof globalThis.setTimeout === "function") {
      cachedSetTimeout = setTimeout;
    }
    if (typeof globalThis.clearTimeout === "function") {
      cachedClearTimeout = clearTimeout;
    }
    Item.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    performance = globalThis.performance || {};
    performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function() {
      return new Date().getTime();
    };
    startTime = new Date();
  }
});

// node_modules/rollup-plugin-node-polyfills/polyfills/inherits.js
var inherits;
var init_inherits = __esm({
  "node_modules/rollup-plugin-node-polyfills/polyfills/inherits.js"() {
    init_react();
    if (typeof Object.create === "function") {
      inherits = function inherits2(ctor, superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      };
    } else {
      inherits = function inherits2(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      };
    }
  }
});

// node-modules-polyfills:util
function inspect(obj, opts) {
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  if (arguments.length >= 3)
    ctx.depth = arguments[2];
  if (arguments.length >= 4)
    ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    ctx.showHidden = opts;
  } else if (opts) {
    _extend(ctx, opts);
  }
  if (isUndefined(ctx.showHidden))
    ctx.showHidden = false;
  if (isUndefined(ctx.depth))
    ctx.depth = 2;
  if (isUndefined(ctx.colors))
    ctx.colors = false;
  if (isUndefined(ctx.customInspect))
    ctx.customInspect = true;
  if (ctx.colors)
    ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];
  if (style) {
    return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
  } else {
    return str;
  }
}
function stylizeNoColor(str, styleType) {
  return str;
}
function arrayToHash(array) {
  var hash = {};
  array.forEach(function(val, idx) {
    hash[val] = true;
  });
  return hash;
}
function formatValue(ctx, value, recurseTimes) {
  if (ctx.customInspect && value && isFunction3(value.inspect) && value.inspect !== inspect && !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);
  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }
  if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
    return formatError(value);
  }
  if (keys.length === 0) {
    if (isFunction3(value)) {
      var name = value.name ? ": " + value.name : "";
      return ctx.stylize("[Function" + name + "]", "special");
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), "date");
    }
    if (isError(value)) {
      return formatError(value);
    }
  }
  var base2 = "", array = false, braces = ["{", "}"];
  if (isArray(value)) {
    array = true;
    braces = ["[", "]"];
  }
  if (isFunction3(value)) {
    var n = value.name ? ": " + value.name : "";
    base2 = " [Function" + n + "]";
  }
  if (isRegExp(value)) {
    base2 = " " + RegExp.prototype.toString.call(value);
  }
  if (isDate(value)) {
    base2 = " " + Date.prototype.toUTCString.call(value);
  }
  if (isError(value)) {
    base2 = " " + formatError(value);
  }
  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base2 + braces[1];
  }
  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
    } else {
      return ctx.stylize("[Object]", "special");
    }
  }
  ctx.seen.push(value);
  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }
  ctx.seen.pop();
  return reduceToSingleString(output, base2, braces);
}
function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize("undefined", "undefined");
  if (isString(value)) {
    var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
    return ctx.stylize(simple, "string");
  }
  if (isNumber(value))
    return ctx.stylize("" + value, "number");
  if (isBoolean(value))
    return ctx.stylize("" + value, "boolean");
  if (isNull(value))
    return ctx.stylize("null", "null");
}
function formatError(value) {
  return "[" + Error.prototype.toString.call(value) + "]";
}
function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push("");
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}
function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize("[Getter/Setter]", "special");
    } else {
      str = ctx.stylize("[Getter]", "special");
    }
  } else {
    if (desc.set) {
      str = ctx.stylize("[Setter]", "special");
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = "[" + key + "]";
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf("\n") > -1) {
        if (array) {
          str = str.split("\n").map(function(line) {
            return "  " + line;
          }).join("\n").substr(2);
        } else {
          str = "\n" + str.split("\n").map(function(line) {
            return "   " + line;
          }).join("\n");
        }
      }
    } else {
      str = ctx.stylize("[Circular]", "special");
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify("" + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, "name");
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, "string");
    }
  }
  return name + ": " + str;
}
function reduceToSingleString(output, base2, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf("\n") >= 0)
      numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
  }, 0);
  if (length > 60) {
    return braces[0] + (base2 === "" ? "" : base2 + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
  }
  return braces[0] + base2 + " " + output.join(", ") + " " + braces[1];
}
function isArray(ar) {
  return Array.isArray(ar);
}
function isBoolean(arg) {
  return typeof arg === "boolean";
}
function isNull(arg) {
  return arg === null;
}
function isNullOrUndefined(arg) {
  return arg == null;
}
function isNumber(arg) {
  return typeof arg === "number";
}
function isString(arg) {
  return typeof arg === "string";
}
function isUndefined(arg) {
  return arg === void 0;
}
function isRegExp(re) {
  return isObject2(re) && objectToString(re) === "[object RegExp]";
}
function isObject2(arg) {
  return typeof arg === "object" && arg !== null;
}
function isDate(d) {
  return isObject2(d) && objectToString(d) === "[object Date]";
}
function isError(e) {
  return isObject2(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
}
function isFunction3(arg) {
  return typeof arg === "function";
}
function objectToString(o) {
  return Object.prototype.toString.call(o);
}
function _extend(origin, add) {
  if (!add || !isObject2(add))
    return origin;
  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
var init_util = __esm({
  "node-modules-polyfills:util"() {
    init_react();
    init_process();
    init_inherits();
    inspect.colors = {
      "bold": [1, 22],
      "italic": [3, 23],
      "underline": [4, 24],
      "inverse": [7, 27],
      "white": [37, 39],
      "grey": [90, 39],
      "black": [30, 39],
      "blue": [34, 39],
      "cyan": [36, 39],
      "green": [32, 39],
      "magenta": [35, 39],
      "red": [31, 39],
      "yellow": [33, 39]
    };
    inspect.styles = {
      "special": "cyan",
      "number": "yellow",
      "boolean": "yellow",
      "undefined": "grey",
      "null": "bold",
      "string": "green",
      "date": "magenta",
      "regexp": "red"
    };
  }
});

// node-modules-polyfills:querystring
function hasOwnProperty2(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
function stringifyPrimitive(v) {
  switch (typeof v) {
    case "string":
      return v;
    case "boolean":
      return v ? "true" : "false";
    case "number":
      return isFinite(v) ? v : "";
    default:
      return "";
  }
}
function stringify(obj, sep, eq, name) {
  sep = sep || "&";
  eq = eq || "=";
  if (obj === null) {
    obj = void 0;
  }
  if (typeof obj === "object") {
    return map2(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray2(obj[k])) {
        return map2(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);
  }
  if (!name)
    return "";
  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
}
function map2(xs, f) {
  if (xs.map)
    return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}
function parse(qs, sep, eq, options) {
  sep = sep || "&";
  eq = eq || "=";
  var obj = {};
  if (typeof qs !== "string" || qs.length === 0) {
    return obj;
  }
  var regexp = /\+/g;
  qs = qs.split(sep);
  var maxKeys = 1e3;
  if (options && typeof options.maxKeys === "number") {
    maxKeys = options.maxKeys;
  }
  var len = qs.length;
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }
  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, "%20"), idx = x.indexOf(eq), kstr, vstr, k, v;
    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = "";
    }
    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);
    if (!hasOwnProperty2(obj, k)) {
      obj[k] = v;
    } else if (isArray2(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }
  return obj;
}
var isArray2, objectKeys;
var init_querystring = __esm({
  "node-modules-polyfills:querystring"() {
    init_react();
    isArray2 = Array.isArray || function(xs) {
      return Object.prototype.toString.call(xs) === "[object Array]";
    };
    objectKeys = Object.keys || function(obj) {
      var res = [];
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          res.push(key);
      }
      return res;
    };
  }
});

// node-modules-polyfills:url
var url_exports = {};
__export(url_exports, {
  Url: () => Url,
  default: () => url_default,
  format: () => urlFormat,
  parse: () => urlParse,
  resolve: () => urlResolve,
  resolveObject: () => urlResolveObject
});
function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}
function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && isObject2(url) && url instanceof Url)
    return url;
  var u = new Url();
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}
function parse2(self2, url, parseQueryString, slashesDenoteHost) {
  if (!isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }
  var queryIndex = url.indexOf("?"), splitter = queryIndex !== -1 && queryIndex < url.indexOf("#") ? "?" : "#", uSplit = url.split(splitter), slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, "/");
  url = uSplit.join(splitter);
  var rest = url;
  rest = rest.trim();
  if (!slashesDenoteHost && url.split("#").length === 1) {
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      self2.path = rest;
      self2.href = rest;
      self2.pathname = simplePath[1];
      if (simplePath[2]) {
        self2.search = simplePath[2];
        if (parseQueryString) {
          self2.query = parse(self2.search.substr(1));
        } else {
          self2.query = self2.search.substr(1);
        }
      } else if (parseQueryString) {
        self2.search = "";
        self2.query = {};
      }
      return self2;
    }
  }
  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    self2.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === "//";
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      self2.slashes = true;
    }
  }
  var i, hec, l, p;
  if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
    var hostEnd = -1;
    for (i = 0; i < hostEndingChars.length; i++) {
      hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    var auth, atSign;
    if (hostEnd === -1) {
      atSign = rest.lastIndexOf("@");
    } else {
      atSign = rest.lastIndexOf("@", hostEnd);
    }
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      self2.auth = decodeURIComponent(auth);
    }
    hostEnd = -1;
    for (i = 0; i < nonHostChars.length; i++) {
      hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    if (hostEnd === -1)
      hostEnd = rest.length;
    self2.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);
    parseHost(self2);
    self2.hostname = self2.hostname || "";
    var ipv6Hostname = self2.hostname[0] === "[" && self2.hostname[self2.hostname.length - 1] === "]";
    if (!ipv6Hostname) {
      var hostparts = self2.hostname.split(/\./);
      for (i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part)
          continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = "";
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              newpart += "x";
            } else {
              newpart += part[j];
            }
          }
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = "/" + notHost.join(".") + rest;
            }
            self2.hostname = validParts.join(".");
            break;
          }
        }
      }
    }
    if (self2.hostname.length > hostnameMaxLen) {
      self2.hostname = "";
    } else {
      self2.hostname = self2.hostname.toLowerCase();
    }
    if (!ipv6Hostname) {
      self2.hostname = toASCII(self2.hostname);
    }
    p = self2.port ? ":" + self2.port : "";
    var h = self2.hostname || "";
    self2.host = h + p;
    self2.href += self2.host;
    if (ipv6Hostname) {
      self2.hostname = self2.hostname.substr(1, self2.hostname.length - 2);
      if (rest[0] !== "/") {
        rest = "/" + rest;
      }
    }
  }
  if (!unsafeProtocol[lowerProto]) {
    for (i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }
  var hash = rest.indexOf("#");
  if (hash !== -1) {
    self2.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf("?");
  if (qm !== -1) {
    self2.search = rest.substr(qm);
    self2.query = rest.substr(qm + 1);
    if (parseQueryString) {
      self2.query = parse(self2.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    self2.search = "";
    self2.query = {};
  }
  if (rest)
    self2.pathname = rest;
  if (slashedProtocol[lowerProto] && self2.hostname && !self2.pathname) {
    self2.pathname = "/";
  }
  if (self2.pathname || self2.search) {
    p = self2.pathname || "";
    var s = self2.search || "";
    self2.path = p + s;
  }
  self2.href = format(self2);
  return self2;
}
function urlFormat(obj) {
  if (isString(obj))
    obj = parse2({}, obj);
  return format(obj);
}
function format(self2) {
  var auth = self2.auth || "";
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ":");
    auth += "@";
  }
  var protocol = self2.protocol || "", pathname = self2.pathname || "", hash = self2.hash || "", host = false, query = "";
  if (self2.host) {
    host = auth + self2.host;
  } else if (self2.hostname) {
    host = auth + (self2.hostname.indexOf(":") === -1 ? self2.hostname : "[" + this.hostname + "]");
    if (self2.port) {
      host += ":" + self2.port;
    }
  }
  if (self2.query && isObject2(self2.query) && Object.keys(self2.query).length) {
    query = stringify(self2.query);
  }
  var search = self2.search || query && "?" + query || "";
  if (protocol && protocol.substr(-1) !== ":")
    protocol += ":";
  if (self2.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = "//" + (host || "");
    if (pathname && pathname.charAt(0) !== "/")
      pathname = "/" + pathname;
  } else if (!host) {
    host = "";
  }
  if (hash && hash.charAt(0) !== "#")
    hash = "#" + hash;
  if (search && search.charAt(0) !== "?")
    search = "?" + search;
  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace("#", "%23");
  return protocol + host + pathname + search + hash;
}
function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}
function urlResolveObject(source, relative) {
  if (!source)
    return relative;
  return urlParse(source, false, true).resolveObject(relative);
}
function parseHost(self2) {
  var host = self2.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ":") {
      self2.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host)
    self2.hostname = host;
}
var url_default, protocolPattern, portPattern, simplePathPattern, delims, unwise, autoEscape, nonHostChars, hostEndingChars, hostnameMaxLen, hostnamePartPattern, hostnamePartStart, unsafeProtocol, hostlessProtocol, slashedProtocol;
var init_url = __esm({
  "node-modules-polyfills:url"() {
    init_react();
    init_punycode();
    init_util();
    init_querystring();
    url_default = {
      parse: urlParse,
      resolve: urlResolve,
      resolveObject: urlResolveObject,
      format: urlFormat,
      Url
    };
    protocolPattern = /^([a-z0-9.+-]+:)/i;
    portPattern = /:[0-9]*$/;
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
    delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"];
    unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims);
    autoEscape = ["'"].concat(unwise);
    nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape);
    hostEndingChars = ["/", "?", "#"];
    hostnameMaxLen = 255;
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
    unsafeProtocol = {
      "javascript": true,
      "javascript:": true
    };
    hostlessProtocol = {
      "javascript": true,
      "javascript:": true
    };
    slashedProtocol = {
      "http": true,
      "https": true,
      "ftp": true,
      "gopher": true,
      "file": true,
      "http:": true,
      "https:": true,
      "ftp:": true,
      "gopher:": true,
      "file:": true
    };
    Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
      return parse2(this, url, parseQueryString, slashesDenoteHost);
    };
    Url.prototype.format = function() {
      return format(this);
    };
    Url.prototype.resolve = function(relative) {
      return this.resolveObject(urlParse(relative, false, true)).format();
    };
    Url.prototype.resolveObject = function(relative) {
      if (isString(relative)) {
        var rel = new Url();
        rel.parse(relative, false, true);
        relative = rel;
      }
      var result = new Url();
      var tkeys = Object.keys(this);
      for (var tk = 0; tk < tkeys.length; tk++) {
        var tkey = tkeys[tk];
        result[tkey] = this[tkey];
      }
      result.hash = relative.hash;
      if (relative.href === "") {
        result.href = result.format();
        return result;
      }
      if (relative.slashes && !relative.protocol) {
        var rkeys = Object.keys(relative);
        for (var rk = 0; rk < rkeys.length; rk++) {
          var rkey = rkeys[rk];
          if (rkey !== "protocol")
            result[rkey] = relative[rkey];
        }
        if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
          result.path = result.pathname = "/";
        }
        result.href = result.format();
        return result;
      }
      var relPath;
      if (relative.protocol && relative.protocol !== result.protocol) {
        if (!slashedProtocol[relative.protocol]) {
          var keys = Object.keys(relative);
          for (var v = 0; v < keys.length; v++) {
            var k = keys[v];
            result[k] = relative[k];
          }
          result.href = result.format();
          return result;
        }
        result.protocol = relative.protocol;
        if (!relative.host && !hostlessProtocol[relative.protocol]) {
          relPath = (relative.pathname || "").split("/");
          while (relPath.length && !(relative.host = relPath.shift()))
            ;
          if (!relative.host)
            relative.host = "";
          if (!relative.hostname)
            relative.hostname = "";
          if (relPath[0] !== "")
            relPath.unshift("");
          if (relPath.length < 2)
            relPath.unshift("");
          result.pathname = relPath.join("/");
        } else {
          result.pathname = relative.pathname;
        }
        result.search = relative.search;
        result.query = relative.query;
        result.host = relative.host || "";
        result.auth = relative.auth;
        result.hostname = relative.hostname || relative.host;
        result.port = relative.port;
        if (result.pathname || result.search) {
          var p = result.pathname || "";
          var s = result.search || "";
          result.path = p + s;
        }
        result.slashes = result.slashes || relative.slashes;
        result.href = result.format();
        return result;
      }
      var isSourceAbs = result.pathname && result.pathname.charAt(0) === "/", isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === "/", mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname, removeAllDots = mustEndAbs, srcPath = result.pathname && result.pathname.split("/") || [], psychotic = result.protocol && !slashedProtocol[result.protocol];
      relPath = relative.pathname && relative.pathname.split("/") || [];
      if (psychotic) {
        result.hostname = "";
        result.port = null;
        if (result.host) {
          if (srcPath[0] === "")
            srcPath[0] = result.host;
          else
            srcPath.unshift(result.host);
        }
        result.host = "";
        if (relative.protocol) {
          relative.hostname = null;
          relative.port = null;
          if (relative.host) {
            if (relPath[0] === "")
              relPath[0] = relative.host;
            else
              relPath.unshift(relative.host);
          }
          relative.host = null;
        }
        mustEndAbs = mustEndAbs && (relPath[0] === "" || srcPath[0] === "");
      }
      var authInHost;
      if (isRelAbs) {
        result.host = relative.host || relative.host === "" ? relative.host : result.host;
        result.hostname = relative.hostname || relative.hostname === "" ? relative.hostname : result.hostname;
        result.search = relative.search;
        result.query = relative.query;
        srcPath = relPath;
      } else if (relPath.length) {
        if (!srcPath)
          srcPath = [];
        srcPath.pop();
        srcPath = srcPath.concat(relPath);
        result.search = relative.search;
        result.query = relative.query;
      } else if (!isNullOrUndefined(relative.search)) {
        if (psychotic) {
          result.hostname = result.host = srcPath.shift();
          authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
          if (authInHost) {
            result.auth = authInHost.shift();
            result.host = result.hostname = authInHost.shift();
          }
        }
        result.search = relative.search;
        result.query = relative.query;
        if (!isNull(result.pathname) || !isNull(result.search)) {
          result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
        }
        result.href = result.format();
        return result;
      }
      if (!srcPath.length) {
        result.pathname = null;
        if (result.search) {
          result.path = "/" + result.search;
        } else {
          result.path = null;
        }
        result.href = result.format();
        return result;
      }
      var last = srcPath.slice(-1)[0];
      var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === "." || last === "..") || last === "";
      var up = 0;
      for (var i = srcPath.length; i >= 0; i--) {
        last = srcPath[i];
        if (last === ".") {
          srcPath.splice(i, 1);
        } else if (last === "..") {
          srcPath.splice(i, 1);
          up++;
        } else if (up) {
          srcPath.splice(i, 1);
          up--;
        }
      }
      if (!mustEndAbs && !removeAllDots) {
        for (; up--; up) {
          srcPath.unshift("..");
        }
      }
      if (mustEndAbs && srcPath[0] !== "" && (!srcPath[0] || srcPath[0].charAt(0) !== "/")) {
        srcPath.unshift("");
      }
      if (hasTrailingSlash && srcPath.join("/").substr(-1) !== "/") {
        srcPath.push("");
      }
      var isAbsolute = srcPath[0] === "" || srcPath[0] && srcPath[0].charAt(0) === "/";
      if (psychotic) {
        result.hostname = result.host = isAbsolute ? "" : srcPath.length ? srcPath.shift() : "";
        authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
        if (authInHost) {
          result.auth = authInHost.shift();
          result.host = result.hostname = authInHost.shift();
        }
      }
      mustEndAbs = mustEndAbs || result.host && srcPath.length;
      if (mustEndAbs && !isAbsolute) {
        srcPath.unshift("");
      }
      if (!srcPath.length) {
        result.pathname = null;
        result.path = null;
      } else {
        result.pathname = srcPath.join("/");
      }
      if (!isNull(result.pathname) || !isNull(result.search)) {
        result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
      }
      result.auth = relative.auth || result.auth;
      result.slashes = result.slashes || relative.slashes;
      result.href = result.format();
      return result;
    };
    Url.prototype.parseHost = function() {
      return parseHost(this);
    };
  }
});

// node-modules-polyfills-commonjs:url
var require_url = __commonJS({
  "node-modules-polyfills-commonjs:url"(exports, module) {
    init_react();
    var polyfill2 = (init_url(), __toCommonJS(url_exports));
    if (polyfill2 && polyfill2.default) {
      module.exports = polyfill2.default;
      for (let k in polyfill2) {
        module.exports[k] = polyfill2[k];
      }
    } else if (polyfill2) {
      module.exports = polyfill2;
    }
  }
});

// node_modules/same-origin/index.js
var require_same_origin = __commonJS({
  "node_modules/same-origin/index.js"(exports, module) {
    "use strict";
    init_react();
    var url = require_url();
    module.exports = function(uri1, uri2, ieMode) {
      if (uri1 === uri2) {
        return true;
      }
      var url1 = url.parse(uri1, false, true);
      var url2 = url.parse(uri2, false, true);
      var url1Port = url1.port | 0 || (url1.protocol === "https" ? 443 : 80);
      var url2Port = url2.port | 0 || (url2.protocol === "https" ? 443 : 80);
      var match = {
        proto: url1.protocol === url2.protocol,
        hostname: url1.hostname === url2.hostname,
        port: url1Port === url2Port
      };
      return match.proto && match.hostname && (match.port || ieMode);
    };
  }
});

// node_modules/parse-headers/parse-headers.js
var require_parse_headers = __commonJS({
  "node_modules/parse-headers/parse-headers.js"(exports, module) {
    init_react();
    var trim = function(string) {
      return string.replace(/^\s+|\s+$/g, "");
    };
    var isArray3 = function(arg) {
      return Object.prototype.toString.call(arg) === "[object Array]";
    };
    module.exports = function(headers) {
      if (!headers)
        return {};
      var result = {};
      var headersArr = trim(headers).split("\n");
      for (var i = 0; i < headersArr.length; i++) {
        var row = headersArr[i];
        var index = row.indexOf(":"), key = trim(row.slice(0, index)).toLowerCase(), value = trim(row.slice(index + 1));
        if (typeof result[key] === "undefined") {
          result[key] = value;
        } else if (isArray3(result[key])) {
          result[key].push(value);
        } else {
          result[key] = [result[key], value];
        }
      }
      return result;
    };
  }
});

// node_modules/get-it/lib/request/browser/fetchXhr.js
var require_fetchXhr = __commonJS({
  "node_modules/get-it/lib/request/browser/fetchXhr.js"(exports, module) {
    "use strict";
    init_react();
    function FetchXhr() {
      this.readyState = 0;
    }
    FetchXhr.prototype.open = function(method, url) {
      this._method = method;
      this._url = url;
      this._resHeaders = "";
      this.readyState = 1;
      this.onreadystatechange();
    };
    FetchXhr.prototype.abort = function() {
      if (this._controller) {
        this._controller.abort();
      }
    };
    FetchXhr.prototype.getAllResponseHeaders = function() {
      return this._resHeaders;
    };
    FetchXhr.prototype.setRequestHeader = function(key, value) {
      this._headers = this._headers || {};
      this._headers[key] = value;
    };
    FetchXhr.prototype.send = function(body) {
      var _this = this;
      var ctrl = this._controller = typeof AbortController === "function" && new AbortController();
      var textBody = this.responseType !== "arraybuffer";
      var options = {
        method: this._method,
        headers: this._headers,
        signal: ctrl && ctrl.signal,
        body
      };
      if (typeof window !== "undefined") {
        options.credentials = this.withCredentials ? "include" : "omit";
      }
      fetch(this._url, options).then(function(res) {
        res.headers.forEach(function(value, key) {
          _this._resHeaders += key + ": " + value + "\r\n";
        });
        _this.status = res.status;
        _this.statusText = res.statusText;
        _this.readyState = 3;
        return textBody ? res.text() : res.arrayBuffer();
      }).then(function(resBody) {
        if (textBody) {
          _this.responseText = resBody;
        } else {
          _this.response = resBody;
        }
        _this.readyState = 4;
        _this.onreadystatechange();
      }).catch(function(err) {
        if (err.name === "AbortError") {
          _this.onabort();
          return;
        }
        _this.onerror(err);
      });
    };
    module.exports = FetchXhr;
  }
});

// node_modules/get-it/lib/request/browser-request.js
var require_browser_request = __commonJS({
  "node_modules/get-it/lib/request/browser-request.js"(exports, module) {
    "use strict";
    init_react();
    var sameOrigin = require_same_origin();
    var parseHeaders = require_parse_headers();
    var FetchXhr = require_fetchXhr();
    var noop2 = function noop3() {
    };
    var win = typeof window === "undefined" ? void 0 : window;
    var adapter = win ? "xhr" : "fetch";
    var XmlHttpRequest = typeof XMLHttpRequest === "function" ? XMLHttpRequest : noop2;
    var hasXhr2 = "withCredentials" in new XmlHttpRequest();
    var XDR = typeof XDomainRequest === "undefined" ? void 0 : XDomainRequest;
    var CrossDomainRequest = hasXhr2 ? XmlHttpRequest : XDR;
    if (!win) {
      XmlHttpRequest = FetchXhr;
      CrossDomainRequest = FetchXhr;
    }
    module.exports = function(context, callback) {
      var opts = context.options;
      var options = context.applyMiddleware("finalizeOptions", opts);
      var timers = {};
      var cors = win && win.location && !sameOrigin(win.location.href, options.url);
      var injectedResponse = context.applyMiddleware("interceptRequest", void 0, {
        adapter,
        context
      });
      if (injectedResponse) {
        var cbTimer = setTimeout(callback, 0, null, injectedResponse);
        var cancel = function cancel2() {
          return clearTimeout(cbTimer);
        };
        return { abort: cancel };
      }
      var xhr = cors ? new CrossDomainRequest() : new XmlHttpRequest();
      var isXdr = win && win.XDomainRequest && xhr instanceof win.XDomainRequest;
      var headers = options.headers;
      var delays = options.timeout;
      var aborted = false;
      var loaded = false;
      var timedOut = false;
      xhr.onerror = onError;
      xhr.ontimeout = onError;
      xhr.onabort = function() {
        aborted = true;
      };
      xhr.onprogress = function() {
      };
      var loadEvent = isXdr ? "onload" : "onreadystatechange";
      xhr[loadEvent] = function() {
        resetTimers();
        if (aborted || xhr.readyState !== 4 && !isXdr) {
          return;
        }
        if (xhr.status === 0) {
          return;
        }
        onLoad();
      };
      xhr.open(options.method, options.url, true);
      xhr.withCredentials = !!options.withCredentials;
      if (headers && xhr.setRequestHeader) {
        for (var key in headers) {
          if (headers.hasOwnProperty(key)) {
            xhr.setRequestHeader(key, headers[key]);
          }
        }
      } else if (headers && isXdr) {
        throw new Error("Headers cannot be set on an XDomainRequest object");
      }
      if (options.rawBody) {
        xhr.responseType = "arraybuffer";
      }
      context.applyMiddleware("onRequest", { options, adapter, request: xhr, context });
      xhr.send(options.body || null);
      if (delays) {
        timers.connect = setTimeout(function() {
          return timeoutRequest("ETIMEDOUT");
        }, delays.connect);
      }
      return { abort };
      function abort() {
        aborted = true;
        if (xhr) {
          xhr.abort();
        }
      }
      function timeoutRequest(code) {
        timedOut = true;
        xhr.abort();
        var error2 = new Error(code === "ESOCKETTIMEDOUT" ? "Socket timed out on request to " + options.url : "Connection timed out on request to " + options.url);
        error2.code = code;
        context.channels.error.publish(error2);
      }
      function resetTimers() {
        if (!delays) {
          return;
        }
        stopTimers();
        timers.socket = setTimeout(function() {
          return timeoutRequest("ESOCKETTIMEDOUT");
        }, delays.socket);
      }
      function stopTimers() {
        if (aborted || xhr.readyState >= 2 && timers.connect) {
          clearTimeout(timers.connect);
        }
        if (timers.socket) {
          clearTimeout(timers.socket);
        }
      }
      function onError(error2) {
        if (loaded) {
          return;
        }
        stopTimers();
        loaded = true;
        xhr = null;
        var err = error2 || new Error("Network error while attempting to reach " + options.url);
        err.isNetworkError = true;
        err.request = options;
        callback(err);
      }
      function reduceResponse() {
        var statusCode = xhr.status;
        var statusMessage = xhr.statusText;
        if (isXdr && statusCode === void 0) {
          statusCode = 200;
        } else if (statusCode > 12e3 && statusCode < 12156) {
          return onError();
        } else {
          statusCode = xhr.status === 1223 ? 204 : xhr.status;
          statusMessage = xhr.status === 1223 ? "No Content" : statusMessage;
        }
        return {
          body: xhr.response || xhr.responseText,
          url: options.url,
          method: options.method,
          headers: isXdr ? {} : parseHeaders(xhr.getAllResponseHeaders()),
          statusCode,
          statusMessage
        };
      }
      function onLoad() {
        if (aborted || loaded || timedOut) {
          return;
        }
        if (xhr.status === 0) {
          onError(new Error("Unknown XHR error"));
          return;
        }
        stopTimers();
        loaded = true;
        callback(null, reduceResponse());
      }
    };
  }
});

// node_modules/get-it/lib/request/index.js
var require_request = __commonJS({
  "node_modules/get-it/lib/request/index.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = require_browser_request();
  }
});

// node_modules/get-it/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/get-it/lib/index.js"(exports, module) {
    "use strict";
    init_react();
    var pubsub = require_nano_pubsub();
    var middlewareReducer = require_middlewareReducer();
    var processOptions = require_defaultOptionsProcessor();
    var validateOptions = require_defaultOptionsValidator();
    var httpRequester = require_request();
    var channelNames = ["request", "response", "progress", "error", "abort"];
    var middlehooks = ["processOptions", "validateOptions", "interceptRequest", "finalizeOptions", "onRequest", "onResponse", "onError", "onReturn", "onHeaders"];
    module.exports = function createRequester() {
      var initMiddleware = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var httpRequest = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : httpRequester;
      var loadedMiddleware = [];
      var middleware = middlehooks.reduce(function(ware, name) {
        ware[name] = ware[name] || [];
        return ware;
      }, {
        processOptions: [processOptions],
        validateOptions: [validateOptions]
      });
      function request(opts) {
        var channels = channelNames.reduce(function(target, name) {
          target[name] = pubsub();
          return target;
        }, {});
        var applyMiddleware = middlewareReducer(middleware);
        var options = applyMiddleware("processOptions", opts);
        applyMiddleware("validateOptions", options);
        var context = {
          options,
          channels,
          applyMiddleware
        };
        var ongoingRequest = null;
        var unsubscribe = channels.request.subscribe(function(ctx) {
          ongoingRequest = httpRequest(ctx, function(err, res) {
            return onResponse(err, res, ctx);
          });
        });
        channels.abort.subscribe(function() {
          unsubscribe();
          if (ongoingRequest) {
            ongoingRequest.abort();
          }
        });
        var returnValue = applyMiddleware("onReturn", channels, context);
        if (returnValue === channels) {
          channels.request.publish(context);
        }
        return returnValue;
        function onResponse(reqErr, res, ctx) {
          var error2 = reqErr;
          var response = res;
          if (!error2) {
            try {
              response = applyMiddleware("onResponse", res, ctx);
            } catch (err) {
              response = null;
              error2 = err;
            }
          }
          error2 = error2 && applyMiddleware("onError", error2, ctx);
          if (error2) {
            channels.error.publish(error2);
          } else if (response) {
            channels.response.publish(response);
          }
        }
      }
      request.use = function use(newMiddleware) {
        if (!newMiddleware) {
          throw new Error("Tried to add middleware that resolved to falsey value");
        }
        if (typeof newMiddleware === "function") {
          throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
        }
        if (newMiddleware.onReturn && middleware.onReturn.length > 0) {
          throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
        }
        middlehooks.forEach(function(key) {
          if (newMiddleware[key]) {
            middleware[key].push(newMiddleware[key]);
          }
        });
        loadedMiddleware.push(newMiddleware);
        return request;
      };
      request.clone = function clone() {
        return createRequester(loadedMiddleware);
      };
      initMiddleware.forEach(request.use);
      return request;
    };
  }
});

// node_modules/get-it/index.js
var require_get_it = __commonJS({
  "node_modules/get-it/index.js"(exports, module) {
    init_react();
    module.exports = require_lib2();
  }
});

// node_modules/get-it/lib/util/global.js
var require_global = __commonJS({
  "node_modules/get-it/lib/util/global.js"(exports, module) {
    "use strict";
    init_react();
    if (typeof window !== "undefined") {
      module.exports = window;
    } else if (typeof globalThis !== "undefined") {
      module.exports = globalThis;
    } else if (typeof self !== "undefined") {
      module.exports = self;
    } else {
      module.exports = {};
    }
  }
});

// node_modules/get-it/lib/middleware/observable.js
var require_observable2 = __commonJS({
  "node_modules/get-it/lib/middleware/observable.js"(exports, module) {
    "use strict";
    init_react();
    var global2 = require_global();
    var objectAssign = require_object_assign();
    module.exports = function() {
      var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var Observable = opts.implementation || global2.Observable;
      if (!Observable) {
        throw new Error("`Observable` is not available in global scope, and no implementation was passed");
      }
      return {
        onReturn: function onReturn(channels, context) {
          return new Observable(function(observer) {
            channels.error.subscribe(function(err) {
              return observer.error(err);
            });
            channels.progress.subscribe(function(event) {
              return observer.next(objectAssign({ type: "progress" }, event));
            });
            channels.response.subscribe(function(response) {
              observer.next(objectAssign({ type: "response" }, response));
              observer.complete();
            });
            channels.request.publish(context);
            return function() {
              return channels.abort.publish();
            };
          });
        }
      };
    };
  }
});

// node_modules/isobject/index.js
var require_isobject = __commonJS({
  "node_modules/isobject/index.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function isObject3(val) {
      return val != null && typeof val === "object" && Array.isArray(val) === false;
    };
  }
});

// node_modules/is-plain-object/index.js
var require_is_plain_object = __commonJS({
  "node_modules/is-plain-object/index.js"(exports, module) {
    "use strict";
    init_react();
    var isObject3 = require_isobject();
    function isObjectObject(o) {
      return isObject3(o) === true && Object.prototype.toString.call(o) === "[object Object]";
    }
    module.exports = function isPlainObject(o) {
      var ctor, prot;
      if (isObjectObject(o) === false)
        return false;
      ctor = o.constructor;
      if (typeof ctor !== "function")
        return false;
      prot = ctor.prototype;
      if (isObjectObject(prot) === false)
        return false;
      if (prot.hasOwnProperty("isPrototypeOf") === false) {
        return false;
      }
      return true;
    };
  }
});

// node_modules/get-it/lib/middleware/jsonRequest.js
var require_jsonRequest = __commonJS({
  "node_modules/get-it/lib/middleware/jsonRequest.js"(exports, module) {
    "use strict";
    init_react();
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var objectAssign = require_object_assign();
    var isPlainObject = require_is_plain_object();
    var serializeTypes = ["boolean", "string", "number"];
    var isBuffer = function isBuffer2(obj) {
      return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
    };
    module.exports = function() {
      return {
        processOptions: function processOptions(options) {
          var body = options.body;
          if (!body) {
            return options;
          }
          var isStream = typeof body.pipe === "function";
          var shouldSerialize = !isStream && !isBuffer(body) && (serializeTypes.indexOf(typeof body === "undefined" ? "undefined" : _typeof(body)) !== -1 || Array.isArray(body) || isPlainObject(body));
          if (!shouldSerialize) {
            return options;
          }
          return objectAssign({}, options, {
            body: JSON.stringify(options.body),
            headers: objectAssign({}, options.headers, {
              "Content-Type": "application/json"
            })
          });
        }
      };
    };
  }
});

// node_modules/get-it/lib/middleware/jsonResponse.js
var require_jsonResponse = __commonJS({
  "node_modules/get-it/lib/middleware/jsonResponse.js"(exports, module) {
    "use strict";
    init_react();
    var objectAssign = require_object_assign();
    module.exports = function(opts) {
      return {
        onResponse: function onResponse(response) {
          var contentType = response.headers["content-type"] || "";
          var shouldDecode = opts && opts.force || contentType.indexOf("application/json") !== -1;
          if (!response.body || !contentType || !shouldDecode) {
            return response;
          }
          return objectAssign({}, response, { body: tryParse(response.body) });
        },
        processOptions: function processOptions(options) {
          return objectAssign({}, options, {
            headers: objectAssign({ Accept: "application/json" }, options.headers)
          });
        }
      };
    };
    function tryParse(body) {
      try {
        return JSON.parse(body);
      } catch (err) {
        err.message = "Failed to parsed response body as JSON: " + err.message;
        throw err;
      }
    }
  }
});

// node_modules/get-it/lib/middleware/progress/browser-progress.js
var require_browser_progress = __commonJS({
  "node_modules/get-it/lib/middleware/progress/browser-progress.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function() {
      return {
        onRequest: function onRequest(evt) {
          if (evt.adapter !== "xhr") {
            return;
          }
          var xhr = evt.request;
          var context = evt.context;
          if ("upload" in xhr && "onprogress" in xhr.upload) {
            xhr.upload.onprogress = handleProgress("upload");
          }
          if ("onprogress" in xhr) {
            xhr.onprogress = handleProgress("download");
          }
          function handleProgress(stage) {
            return function(event) {
              var percent = event.lengthComputable ? event.loaded / event.total * 100 : -1;
              context.channels.progress.publish({
                stage,
                percent,
                total: event.total,
                loaded: event.loaded,
                lengthComputable: event.lengthComputable
              });
            };
          }
        }
      };
    };
  }
});

// node_modules/get-it/lib/middleware/progress/index.js
var require_progress = __commonJS({
  "node_modules/get-it/lib/middleware/progress/index.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = require_browser_progress();
  }
});

// node_modules/make-error/index.js
var require_make_error = __commonJS({
  "node_modules/make-error/index.js"(exports, module) {
    "use strict";
    init_react();
    var construct = typeof Reflect !== "undefined" ? Reflect.construct : void 0;
    var defineProperty2 = Object.defineProperty;
    var captureStackTrace = Error.captureStackTrace;
    if (captureStackTrace === void 0) {
      captureStackTrace = function captureStackTrace2(error2) {
        var container = new Error();
        defineProperty2(error2, "stack", {
          configurable: true,
          get: function getStack() {
            var stack = container.stack;
            defineProperty2(this, "stack", {
              configurable: true,
              value: stack,
              writable: true
            });
            return stack;
          },
          set: function setStack(stack) {
            defineProperty2(error2, "stack", {
              configurable: true,
              value: stack,
              writable: true
            });
          }
        });
      };
    }
    function BaseError(message) {
      if (message !== void 0) {
        defineProperty2(this, "message", {
          configurable: true,
          value: message,
          writable: true
        });
      }
      var cname = this.constructor.name;
      if (cname !== void 0 && cname !== this.name) {
        defineProperty2(this, "name", {
          configurable: true,
          value: cname,
          writable: true
        });
      }
      captureStackTrace(this, this.constructor);
    }
    BaseError.prototype = Object.create(Error.prototype, {
      constructor: {
        configurable: true,
        value: BaseError,
        writable: true
      }
    });
    var setFunctionName = function() {
      function setFunctionName2(fn, name) {
        return defineProperty2(fn, "name", {
          configurable: true,
          value: name
        });
      }
      try {
        var f = function() {
        };
        setFunctionName2(f, "foo");
        if (f.name === "foo") {
          return setFunctionName2;
        }
      } catch (_) {
      }
    }();
    function makeError(constructor, super_) {
      if (super_ == null || super_ === Error) {
        super_ = BaseError;
      } else if (typeof super_ !== "function") {
        throw new TypeError("super_ should be a function");
      }
      var name;
      if (typeof constructor === "string") {
        name = constructor;
        constructor = construct !== void 0 ? function() {
          return construct(super_, arguments, this.constructor);
        } : function() {
          super_.apply(this, arguments);
        };
        if (setFunctionName !== void 0) {
          setFunctionName(constructor, name);
          name = void 0;
        }
      } else if (typeof constructor !== "function") {
        throw new TypeError("constructor should be either a string or a function");
      }
      constructor.super_ = constructor["super"] = super_;
      var properties = {
        constructor: {
          configurable: true,
          value: constructor,
          writable: true
        }
      };
      if (name !== void 0) {
        properties.name = {
          configurable: true,
          value: name,
          writable: true
        };
      }
      constructor.prototype = Object.create(super_.prototype, properties);
      return constructor;
    }
    exports = module.exports = makeError;
    exports.BaseError = BaseError;
  }
});

// node_modules/@sanity/client/lib/http/errors.js
var require_errors = __commonJS({
  "node_modules/@sanity/client/lib/http/errors.js"(exports) {
    "use strict";
    init_react();
    var makeError = require_make_error();
    var assign = require_object_assign();
    function ClientError(res) {
      var props = extractErrorProps(res);
      ClientError.super.call(this, props.message);
      assign(this, props);
    }
    function ServerError(res) {
      var props = extractErrorProps(res);
      ServerError.super.call(this, props.message);
      assign(this, props);
    }
    function extractErrorProps(res) {
      var body = res.body;
      var props = {
        response: res,
        statusCode: res.statusCode,
        responseBody: stringifyBody(body, res)
      };
      if (body.error && body.message) {
        props.message = "".concat(body.error, " - ").concat(body.message);
        return props;
      }
      if (body.error && body.error.description) {
        props.message = body.error.description;
        props.details = body.error;
        return props;
      }
      props.message = body.error || body.message || httpErrorMessage(res);
      return props;
    }
    function httpErrorMessage(res) {
      var statusMessage = res.statusMessage ? " ".concat(res.statusMessage) : "";
      return "".concat(res.method, "-request to ").concat(res.url, " resulted in HTTP ").concat(res.statusCode).concat(statusMessage);
    }
    function stringifyBody(body, res) {
      var contentType = (res.headers["content-type"] || "").toLowerCase();
      var isJson = contentType.indexOf("application/json") !== -1;
      return isJson ? JSON.stringify(body, null, 2) : body;
    }
    makeError(ClientError);
    makeError(ServerError);
    exports.ClientError = ClientError;
    exports.ServerError = ServerError;
  }
});

// node_modules/@sanity/client/lib/http/browserMiddleware.js
var require_browserMiddleware = __commonJS({
  "node_modules/@sanity/client/lib/http/browserMiddleware.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = [];
  }
});

// node_modules/@sanity/client/lib/http/request.js
var require_request2 = __commonJS({
  "node_modules/@sanity/client/lib/http/request.js"(exports, module) {
    "use strict";
    init_react();
    var getIt = require_get_it();
    var assign = require_object_assign();
    var observable = require_observable2();
    var jsonRequest = require_jsonRequest();
    var jsonResponse = require_jsonResponse();
    var progress = require_progress();
    var Observable = require_minimal();
    var _require = require_errors();
    var ClientError = _require.ClientError;
    var ServerError = _require.ServerError;
    var httpError = {
      onResponse: function onResponse(res) {
        if (res.statusCode >= 500) {
          throw new ServerError(res);
        } else if (res.statusCode >= 400) {
          throw new ClientError(res);
        }
        return res;
      }
    };
    var printWarnings = {
      onResponse: function onResponse(res) {
        var warn = res.headers["x-sanity-warning"];
        var warnings = Array.isArray(warn) ? warn : [warn];
        warnings.filter(Boolean).forEach(function(msg) {
          return console.warn(msg);
        });
        return res;
      }
    };
    var envSpecific = require_browserMiddleware();
    var middleware = envSpecific.concat([printWarnings, jsonRequest(), jsonResponse(), progress(), httpError, observable({
      implementation: Observable
    })]);
    var request = getIt(middleware);
    function httpRequest(options) {
      var requester = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : request;
      return requester(assign({
        maxRedirects: 0
      }, options));
    }
    httpRequest.defaultRequester = request;
    httpRequest.ClientError = ClientError;
    httpRequest.ServerError = ServerError;
    module.exports = httpRequest;
  }
});

// node_modules/@sanity/client/lib/http/requestOptions.js
var require_requestOptions = __commonJS({
  "node_modules/@sanity/client/lib/http/requestOptions.js"(exports, module) {
    "use strict";
    init_react();
    var assign = require_object_assign();
    var projectHeader = "X-Sanity-Project-ID";
    module.exports = function(config) {
      var overrides = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var headers = {};
      var token = overrides.token || config.token;
      if (token) {
        headers.Authorization = "Bearer ".concat(token);
      }
      if (!overrides.useGlobalApi && !config.useProjectHostname && config.projectId) {
        headers[projectHeader] = config.projectId;
      }
      var withCredentials = Boolean(typeof overrides.withCredentials === "undefined" ? config.token || config.withCredentials : overrides.withCredentials);
      var timeout = typeof overrides.timeout === "undefined" ? config.timeout : overrides.timeout;
      return assign({}, overrides, {
        headers: assign({}, headers, overrides.headers || {}),
        timeout: typeof timeout === "undefined" ? 5 * 60 * 1e3 : timeout,
        proxy: overrides.proxy || config.proxy,
        json: true,
        withCredentials
      });
    };
  }
});

// node_modules/@sanity/client/lib/warnings.js
var require_warnings = __commonJS({
  "node_modules/@sanity/client/lib/warnings.js"(exports) {
    "use strict";
    init_react();
    var generateHelpUrl = require_generate_help_url();
    var once = require_once();
    var createWarningPrinter = function createWarningPrinter2(message) {
      return once(function() {
        var _console;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return (_console = console).warn.apply(_console, [message.join(" ")].concat(args));
      });
    };
    exports.printCdnWarning = createWarningPrinter(["You are not using the Sanity CDN. That means your data is always fresh, but the CDN is faster and", "cheaper. Think about it! For more info, see ".concat(generateHelpUrl("js-client-cdn-configuration"), "."), "To hide this warning, please set the `useCdn` option to either `true` or `false` when creating", "the client."]);
    exports.printBrowserTokenWarning = createWarningPrinter(["You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.", "See ".concat(generateHelpUrl("js-client-browser-token"), " for more information and how to hide this warning.")]);
    exports.printCdnTokenWarning = createWarningPrinter(["You have set `useCdn` to `true` while also specifying a token. This is usually not what you", "want. The CDN cannot be used with an authorization token, since private data cannot be cached.", "See ".concat(generateHelpUrl("js-client-usecdn-token"), " for more information.")]);
    exports.printNoApiVersionSpecifiedWarning = createWarningPrinter(["Using the Sanity client without specifying an API version is deprecated.", "See ".concat(generateHelpUrl("js-client-api-version"))]);
  }
});

// node_modules/@sanity/client/lib/config.js
var require_config2 = __commonJS({
  "node_modules/@sanity/client/lib/config.js"(exports) {
    "use strict";
    init_react();
    var generateHelpUrl = require_generate_help_url();
    var assign = require_object_assign();
    var validate = require_validators();
    var warnings = require_warnings();
    var defaultCdnHost = "apicdn.sanity.io";
    var defaultConfig = {
      apiHost: "https://api.sanity.io",
      apiVersion: "1",
      useProjectHostname: true,
      gradientMode: false,
      isPromiseAPI: true
    };
    var LOCALHOSTS = ["localhost", "127.0.0.1", "0.0.0.0"];
    var isLocal = function isLocal2(host) {
      return LOCALHOSTS.indexOf(host) !== -1;
    };
    exports.defaultConfig = defaultConfig;
    exports.initConfig = function(config, prevConfig) {
      var specifiedConfig = assign({}, prevConfig, config);
      if (!specifiedConfig.apiVersion) {
        warnings.printNoApiVersionSpecifiedWarning();
      }
      var newConfig = assign({}, defaultConfig, specifiedConfig);
      var gradientMode = newConfig.gradientMode;
      var projectBased = !gradientMode && newConfig.useProjectHostname;
      if (typeof Promise === "undefined") {
        var helpUrl = generateHelpUrl("js-client-promise-polyfill");
        throw new Error("No native Promise-implementation found, polyfill needed - see ".concat(helpUrl));
      }
      if (gradientMode && !newConfig.namespace) {
        throw new Error("Configuration must contain `namespace` when running in gradient mode");
      }
      if (projectBased && !newConfig.projectId) {
        throw new Error("Configuration must contain `projectId`");
      }
      var isBrowser2 = typeof window !== "undefined" && window.location && window.location.hostname;
      var isLocalhost = isBrowser2 && isLocal(window.location.hostname);
      if (isBrowser2 && isLocalhost && newConfig.token && newConfig.ignoreBrowserTokenWarning !== true) {
        warnings.printBrowserTokenWarning();
      } else if ((!isBrowser2 || isLocalhost) && newConfig.useCdn && newConfig.token) {
        warnings.printCdnTokenWarning();
      } else if (typeof newConfig.useCdn === "undefined") {
        warnings.printCdnWarning();
      }
      if (projectBased) {
        validate.projectId(newConfig.projectId);
      }
      if (!gradientMode && newConfig.dataset) {
        validate.dataset(newConfig.dataset, newConfig.gradientMode);
      }
      if ("requestTagPrefix" in newConfig) {
        newConfig.requestTagPrefix = newConfig.requestTagPrefix ? validate.requestTag(newConfig.requestTagPrefix).replace(/\.+$/, "") : void 0;
      }
      newConfig.apiVersion = "".concat(newConfig.apiVersion).replace(/^v/, "");
      newConfig.isDefaultApi = newConfig.apiHost === defaultConfig.apiHost;
      newConfig.useCdn = Boolean(newConfig.useCdn) && !newConfig.token && !newConfig.withCredentials;
      exports.validateApiVersion(newConfig.apiVersion);
      if (newConfig.gradientMode) {
        newConfig.url = newConfig.apiHost;
        newConfig.cdnUrl = newConfig.apiHost;
      } else {
        var hostParts = newConfig.apiHost.split("://", 2);
        var protocol = hostParts[0];
        var host = hostParts[1];
        var cdnHost = newConfig.isDefaultApi ? defaultCdnHost : host;
        if (newConfig.useProjectHostname) {
          newConfig.url = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(host, "/v").concat(newConfig.apiVersion);
          newConfig.cdnUrl = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(cdnHost, "/v").concat(newConfig.apiVersion);
        } else {
          newConfig.url = "".concat(newConfig.apiHost, "/v").concat(newConfig.apiVersion);
          newConfig.cdnUrl = newConfig.url;
        }
      }
      return newConfig;
    };
    exports.validateApiVersion = function validateApiVersion(apiVersion) {
      if (apiVersion === "1" || apiVersion === "X") {
        return;
      }
      var apiDate = new Date(apiVersion);
      var apiVersionValid = /^\d{4}-\d{2}-\d{2}$/.test(apiVersion) && apiDate instanceof Date && apiDate.getTime() > 0;
      if (!apiVersionValid) {
        throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`");
      }
    };
  }
});

// node_modules/@sanity/client/lib/sanityClient.js
var require_sanityClient = __commonJS({
  "node_modules/@sanity/client/lib/sanityClient.js"(exports, module) {
    "use strict";
    init_react();
    function ownKeys6(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread6(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        i % 2 ? ownKeys6(Object(source), true).forEach(function(key) {
          _defineProperty2(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys6(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty2(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var assign = require_object_assign();
    var _require = require_filter2();
    var filter = _require.filter;
    var _require2 = require_map2();
    var map3 = _require2.map;
    var Patch = require_patch();
    var Transaction = require_transaction();
    var dataMethods = require_dataMethods();
    var DatasetsClient = require_datasetsClient();
    var ProjectsClient = require_projectsClient();
    var AssetsClient = require_assetsClient();
    var UsersClient = require_usersClient();
    var AuthClient = require_authClient();
    var httpRequest = require_request2();
    var getRequestOptions = require_requestOptions();
    var _require3 = require_config2();
    var defaultConfig = _require3.defaultConfig;
    var initConfig = _require3.initConfig;
    var validate = require_validators();
    var toPromise = function toPromise2(observable) {
      return observable.toPromise();
    };
    function SanityClient2() {
      var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultConfig;
      if (!(this instanceof SanityClient2)) {
        return new SanityClient2(config);
      }
      this.config(config);
      this.assets = new AssetsClient(this);
      this.datasets = new DatasetsClient(this);
      this.projects = new ProjectsClient(this);
      this.users = new UsersClient(this);
      this.auth = new AuthClient(this);
      if (this.clientConfig.isPromiseAPI) {
        var observableConfig = assign({}, this.clientConfig, {
          isPromiseAPI: false
        });
        this.observable = new SanityClient2(observableConfig);
      }
    }
    assign(SanityClient2.prototype, dataMethods);
    assign(SanityClient2.prototype, {
      clone: function clone() {
        return new SanityClient2(this.config());
      },
      config: function config(newConfig) {
        if (typeof newConfig === "undefined") {
          return assign({}, this.clientConfig);
        }
        if (this.observable) {
          var observableConfig = assign({}, newConfig, {
            isPromiseAPI: false
          });
          this.observable.config(observableConfig);
        }
        this.clientConfig = initConfig(newConfig, this.clientConfig || {});
        return this;
      },
      withConfig: function withConfig(newConfig) {
        return this.clone().config(newConfig);
      },
      getUrl: function getUrl(uri) {
        var useCdn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var base2 = useCdn ? this.clientConfig.cdnUrl : this.clientConfig.url;
        return "".concat(base2, "/").concat(uri.replace(/^\//, ""));
      },
      isPromiseAPI: function isPromiseAPI() {
        return this.clientConfig.isPromiseAPI;
      },
      _requestObservable: function _requestObservable(options) {
        var uri = options.url || options.uri;
        var canUseCdn = typeof options.canUseCdn === "undefined" ? ["GET", "HEAD"].indexOf(options.method || "GET") >= 0 && uri.indexOf("/data/") === 0 : options.canUseCdn;
        var useCdn = this.clientConfig.useCdn && canUseCdn;
        var tag = options.tag && this.clientConfig.requestTagPrefix ? [this.clientConfig.requestTagPrefix, options.tag].join(".") : options.tag || this.clientConfig.requestTagPrefix;
        if (tag) {
          options.query = _objectSpread6({
            tag: validate.requestTag(tag)
          }, options.query);
        }
        var reqOptions = getRequestOptions(this.clientConfig, assign({}, options, {
          url: this.getUrl(uri, useCdn)
        }));
        return httpRequest(reqOptions, this.clientConfig.requester);
      },
      request: function request(options) {
        var observable = this._requestObservable(options).pipe(filter(function(event) {
          return event.type === "response";
        }), map3(function(event) {
          return event.body;
        }));
        return this.isPromiseAPI() ? toPromise(observable) : observable;
      }
    });
    SanityClient2.Patch = Patch;
    SanityClient2.Transaction = Transaction;
    SanityClient2.ClientError = httpRequest.ClientError;
    SanityClient2.ServerError = httpRequest.ServerError;
    SanityClient2.requester = httpRequest.defaultRequester;
    module.exports = SanityClient2;
  }
});

// app/old-app/components/button.js
init_react();
var import_react = __toESM(require_react());
var Button = (props) => {
  const size = () => {
    return props.size === "small" ? "sm" : props.size === "medium" ? "md" : props.size === "large" ? "lg" : "";
  };
  return /* @__PURE__ */ import_react.default.createElement("a", {
    target: props.link?.includes("churchcenter") ? "_blank" : null,
    rel: "noreferrer",
    href: props.link ?? "#0"
  }, /* @__PURE__ */ import_react.default.createElement("button", {
    type: props.type ?? "",
    className: `button ${size()} ${props.color} `,
    onClick: props.buttonFunc
  }, props.title));
};
var button_default = Button;

// node_modules/reactstrap/es/Spinner.js
init_react();
init_extends();

// node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
init_react();
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/reactstrap/es/Spinner.js
var import_react2 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
var import_classnames = __toESM(require_classnames());

// node_modules/reactstrap/es/utils.js
init_react();
var import_prop_types = __toESM(require_prop_types());
function getScrollbarWidth() {
  var scrollDiv = document.createElement("div");
  scrollDiv.style.position = "absolute";
  scrollDiv.style.top = "-9999px";
  scrollDiv.style.width = "50px";
  scrollDiv.style.height = "50px";
  scrollDiv.style.overflow = "scroll";
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? padding + "px" : null;
}
function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth;
}
function getOriginalBodyPadding() {
  var style = window.getComputedStyle(document.body, null);
  return parseInt(style && style.getPropertyValue("padding-right") || 0, 10);
}
function conditionallyUpdateScrollbar() {
  var scrollbarWidth = getScrollbarWidth();
  var fixedContent = document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0];
  var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;
  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}
var globalCssModule;
function mapToCssModules(className, cssModule) {
  if (className === void 0) {
    className = "";
  }
  if (cssModule === void 0) {
    cssModule = globalCssModule;
  }
  if (!cssModule)
    return className;
  return className.split(" ").map(function(c) {
    return cssModule[c] || c;
  }).join(" ");
}
function omit(obj, omitKeys2) {
  var result = {};
  Object.keys(obj).forEach(function(key) {
    if (omitKeys2.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}
function pick(obj, keys) {
  var pickKeys = Array.isArray(keys) ? keys : [keys];
  var length = pickKeys.length;
  var key;
  var result = {};
  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }
  return result;
}
var Element = typeof window === "object" && window.Element || function() {
};
function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error("Invalid prop `" + propName + "` supplied to `" + componentName + "`. Expected prop to be an instance of Element. Validation failed.");
  }
}
var targetPropType = import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func, DOMElement, import_prop_types.default.shape({
  current: import_prop_types.default.any
})]);
var tagPropType = import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.string, import_prop_types.default.shape({
  $$typeof: import_prop_types.default.symbol,
  render: import_prop_types.default.func
}), import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.string, import_prop_types.default.shape({
  $$typeof: import_prop_types.default.symbol,
  render: import_prop_types.default.func
})]))]);
var TransitionTimeouts = {
  Fade: 150,
  Collapse: 350,
  Modal: 300,
  Carousel: 600
};
var TransitionPropTypeKeys = ["in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"];
var TransitionStatuses = {
  ENTERING: "entering",
  ENTERED: "entered",
  EXITING: "exiting",
  EXITED: "exited"
};
var keyCodes = {
  esc: 27,
  space: 32,
  enter: 13,
  tab: 9,
  up: 38,
  down: 40,
  home: 36,
  end: 35,
  n: 78,
  p: 80
};
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function isReactRefObj(target) {
  if (target && typeof target === "object") {
    return "current" in target;
  }
  return false;
}
function getTag(value) {
  if (value == null) {
    return value === void 0 ? "[object Undefined]" : "[object Null]";
  }
  return Object.prototype.toString.call(value);
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type === "object" || type === "function");
}
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = getTag(value);
  return tag === "[object Function]" || tag === "[object AsyncFunction]" || tag === "[object GeneratorFunction]" || tag === "[object Proxy]";
}
function findDOMElements(target) {
  if (isReactRefObj(target)) {
    return target.current;
  }
  if (isFunction(target)) {
    return target();
  }
  if (typeof target === "string" && canUseDOM) {
    var selection = document.querySelectorAll(target);
    if (!selection.length) {
      selection = document.querySelectorAll("#" + target);
    }
    if (!selection.length) {
      throw new Error("The target '" + target + "' could not be identified in the dom, tip: check spelling");
    }
    return selection;
  }
  return target;
}
function isArrayOrNodeList(els) {
  if (els === null) {
    return false;
  }
  return Array.isArray(els) || canUseDOM && typeof els.length === "number";
}
function getTarget(target, allElements) {
  var els = findDOMElements(target);
  if (allElements) {
    if (isArrayOrNodeList(els)) {
      return els;
    }
    if (els === null) {
      return [];
    }
    return [els];
  } else {
    if (isArrayOrNodeList(els)) {
      return els[0];
    }
    return els;
  }
}
var focusableElements = ["a[href]", "area[href]", "input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "object", "embed", "[tabindex]:not(.modal)", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'];

// node_modules/reactstrap/es/Spinner.js
var _excluded = ["className", "cssModule", "type", "size", "color", "children", "tag"];
var propTypes = {
  tag: tagPropType,
  type: import_prop_types2.default.string,
  size: import_prop_types2.default.string,
  color: import_prop_types2.default.string,
  className: import_prop_types2.default.string,
  cssModule: import_prop_types2.default.object,
  children: import_prop_types2.default.string
};
var defaultProps = {
  tag: "div",
  type: "border",
  children: "Loading..."
};
var Spinner = function Spinner2(props) {
  var className = props.className, cssModule = props.cssModule, type = props.type, size = props.size, color = props.color, children = props.children, Tag = props.tag, attributes = _objectWithoutPropertiesLoose(props, _excluded);
  var classes = mapToCssModules((0, import_classnames.default)(className, size ? "spinner-" + type + "-" + size : false, "spinner-" + type, color ? "text-" + color : false), cssModule);
  return /* @__PURE__ */ import_react2.default.createElement(Tag, _extends({
    role: "status"
  }, attributes, {
    className: classes
  }), children && /* @__PURE__ */ import_react2.default.createElement("span", {
    className: mapToCssModules("sr-only", cssModule)
  }, children));
};
Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;
var Spinner_default = Spinner;

// node_modules/reactstrap/es/index.js
init_react();

// node_modules/reactstrap/es/Navbar.js
init_react();
init_extends();
var import_react3 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());
var import_classnames2 = __toESM(require_classnames());
var _excluded2 = ["expand", "className", "cssModule", "light", "dark", "fixed", "sticky", "color", "tag"];
var propTypes2 = {
  light: import_prop_types3.default.bool,
  dark: import_prop_types3.default.bool,
  full: import_prop_types3.default.bool,
  fixed: import_prop_types3.default.string,
  sticky: import_prop_types3.default.string,
  color: import_prop_types3.default.string,
  role: import_prop_types3.default.string,
  tag: tagPropType,
  className: import_prop_types3.default.string,
  cssModule: import_prop_types3.default.object,
  expand: import_prop_types3.default.oneOfType([import_prop_types3.default.bool, import_prop_types3.default.string])
};
var defaultProps2 = {
  tag: "nav",
  expand: false
};
var getExpandClass = function getExpandClass2(expand) {
  if (expand === false) {
    return false;
  } else if (expand === true || expand === "xs") {
    return "navbar-expand";
  }
  return "navbar-expand-" + expand;
};
var Navbar = function Navbar2(props) {
  var _classNames;
  var expand = props.expand, className = props.className, cssModule = props.cssModule, light = props.light, dark = props.dark, fixed = props.fixed, sticky = props.sticky, color = props.color, Tag = props.tag, attributes = _objectWithoutPropertiesLoose(props, _excluded2);
  var classes = mapToCssModules((0, import_classnames2.default)(className, "navbar", getExpandClass(expand), (_classNames = {
    "navbar-light": light,
    "navbar-dark": dark
  }, _classNames["bg-" + color] = color, _classNames["fixed-" + fixed] = fixed, _classNames["sticky-" + sticky] = sticky, _classNames)), cssModule);
  return /* @__PURE__ */ import_react3.default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};
Navbar.propTypes = propTypes2;
Navbar.defaultProps = defaultProps2;
var Navbar_default = Navbar;

// node_modules/reactstrap/es/NavbarBrand.js
init_react();
init_extends();
var import_react4 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());
var import_classnames3 = __toESM(require_classnames());
var _excluded3 = ["className", "cssModule", "tag"];
var propTypes3 = {
  tag: tagPropType,
  className: import_prop_types4.default.string,
  cssModule: import_prop_types4.default.object
};
var defaultProps3 = {
  tag: "a"
};
var NavbarBrand = function NavbarBrand2(props) {
  var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = _objectWithoutPropertiesLoose(props, _excluded3);
  var classes = mapToCssModules((0, import_classnames3.default)(className, "navbar-brand"), cssModule);
  return /* @__PURE__ */ import_react4.default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};
NavbarBrand.propTypes = propTypes3;
NavbarBrand.defaultProps = defaultProps3;
var NavbarBrand_default = NavbarBrand;

// node_modules/reactstrap/es/NavbarToggler.js
init_react();
init_extends();
var import_react5 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());
var import_classnames4 = __toESM(require_classnames());
var _excluded4 = ["className", "cssModule", "children", "tag"];
var propTypes4 = {
  tag: tagPropType,
  type: import_prop_types5.default.string,
  className: import_prop_types5.default.string,
  cssModule: import_prop_types5.default.object,
  children: import_prop_types5.default.node
};
var defaultProps4 = {
  tag: "button",
  type: "button"
};
var NavbarToggler = function NavbarToggler2(props) {
  var className = props.className, cssModule = props.cssModule, children = props.children, Tag = props.tag, attributes = _objectWithoutPropertiesLoose(props, _excluded4);
  var classes = mapToCssModules((0, import_classnames4.default)(className, "navbar-toggler"), cssModule);
  return /* @__PURE__ */ import_react5.default.createElement(Tag, _extends({
    "aria-label": "Toggle navigation"
  }, attributes, {
    className: classes
  }), children || /* @__PURE__ */ import_react5.default.createElement("span", {
    className: mapToCssModules("navbar-toggler-icon", cssModule)
  }));
};
NavbarToggler.propTypes = propTypes4;
NavbarToggler.defaultProps = defaultProps4;
var NavbarToggler_default = NavbarToggler;

// node_modules/reactstrap/es/Nav.js
init_react();
init_extends();
var import_react6 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());
var import_classnames5 = __toESM(require_classnames());
var _excluded5 = ["className", "cssModule", "tabs", "pills", "vertical", "horizontal", "justified", "fill", "navbar", "card", "tag"];
var propTypes5 = {
  tabs: import_prop_types6.default.bool,
  pills: import_prop_types6.default.bool,
  vertical: import_prop_types6.default.oneOfType([import_prop_types6.default.bool, import_prop_types6.default.string]),
  horizontal: import_prop_types6.default.string,
  justified: import_prop_types6.default.bool,
  fill: import_prop_types6.default.bool,
  navbar: import_prop_types6.default.bool,
  card: import_prop_types6.default.bool,
  tag: tagPropType,
  className: import_prop_types6.default.string,
  cssModule: import_prop_types6.default.object
};
var defaultProps5 = {
  tag: "ul",
  vertical: false
};
var getVerticalClass = function getVerticalClass2(vertical) {
  if (vertical === false) {
    return false;
  } else if (vertical === true || vertical === "xs") {
    return "flex-column";
  }
  return "flex-" + vertical + "-column";
};
var Nav = function Nav2(props) {
  var className = props.className, cssModule = props.cssModule, tabs = props.tabs, pills = props.pills, vertical = props.vertical, horizontal = props.horizontal, justified = props.justified, fill = props.fill, navbar = props.navbar, card = props.card, Tag = props.tag, attributes = _objectWithoutPropertiesLoose(props, _excluded5);
  var classes = mapToCssModules((0, import_classnames5.default)(className, navbar ? "navbar-nav" : "nav", horizontal ? "justify-content-" + horizontal : false, getVerticalClass(vertical), {
    "nav-tabs": tabs,
    "card-header-tabs": card && tabs,
    "nav-pills": pills,
    "card-header-pills": card && pills,
    "nav-justified": justified,
    "nav-fill": fill
  }), cssModule);
  return /* @__PURE__ */ import_react6.default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};
Nav.propTypes = propTypes5;
Nav.defaultProps = defaultProps5;
var Nav_default = Nav;

// node_modules/reactstrap/es/NavItem.js
init_react();
init_extends();
var import_react7 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());
var import_classnames6 = __toESM(require_classnames());
var _excluded6 = ["className", "cssModule", "active", "tag"];
var propTypes6 = {
  tag: tagPropType,
  active: import_prop_types7.default.bool,
  className: import_prop_types7.default.string,
  cssModule: import_prop_types7.default.object
};
var defaultProps6 = {
  tag: "li"
};
var NavItem = function NavItem2(props) {
  var className = props.className, cssModule = props.cssModule, active = props.active, Tag = props.tag, attributes = _objectWithoutPropertiesLoose(props, _excluded6);
  var classes = mapToCssModules((0, import_classnames6.default)(className, "nav-item", active ? "active" : false), cssModule);
  return /* @__PURE__ */ import_react7.default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};
NavItem.propTypes = propTypes6;
NavItem.defaultProps = defaultProps6;
var NavItem_default = NavItem;

// node_modules/reactstrap/es/NavLink.js
init_react();
init_extends();

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
init_react();
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
init_react();

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
init_react();
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// node_modules/reactstrap/es/NavLink.js
var import_react8 = __toESM(require_react());
var import_prop_types8 = __toESM(require_prop_types());
var import_classnames7 = __toESM(require_classnames());
var _excluded7 = ["className", "cssModule", "active", "tag", "innerRef"];
var propTypes7 = {
  tag: tagPropType,
  innerRef: import_prop_types8.default.oneOfType([import_prop_types8.default.object, import_prop_types8.default.func, import_prop_types8.default.string]),
  disabled: import_prop_types8.default.bool,
  active: import_prop_types8.default.bool,
  className: import_prop_types8.default.string,
  cssModule: import_prop_types8.default.object,
  onClick: import_prop_types8.default.func,
  href: import_prop_types8.default.any
};
var defaultProps7 = {
  tag: "a"
};
var NavLink = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(NavLink2, _React$Component);
  function NavLink2(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = NavLink2.prototype;
  _proto.onClick = function onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }
    if (this.props.href === "#") {
      e.preventDefault();
    }
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, className = _this$props.className, cssModule = _this$props.cssModule, active = _this$props.active, Tag = _this$props.tag, innerRef = _this$props.innerRef, attributes = _objectWithoutPropertiesLoose(_this$props, _excluded7);
    var classes = mapToCssModules((0, import_classnames7.default)(className, "nav-link", {
      disabled: attributes.disabled,
      active
    }), cssModule);
    return /* @__PURE__ */ import_react8.default.createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      onClick: this.onClick,
      className: classes
    }));
  };
  return NavLink2;
}(import_react8.default.Component);
NavLink.propTypes = propTypes7;
NavLink.defaultProps = defaultProps7;
var NavLink_default = NavLink;

// node_modules/reactstrap/es/Button.js
init_react();
init_extends();
var import_react9 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());
var import_classnames8 = __toESM(require_classnames());
var _excluded8 = ["active", "aria-label", "block", "className", "close", "cssModule", "color", "outline", "size", "tag", "innerRef"];
var propTypes8 = {
  active: import_prop_types9.default.bool,
  "aria-label": import_prop_types9.default.string,
  block: import_prop_types9.default.bool,
  color: import_prop_types9.default.string,
  disabled: import_prop_types9.default.bool,
  outline: import_prop_types9.default.bool,
  tag: tagPropType,
  innerRef: import_prop_types9.default.oneOfType([import_prop_types9.default.object, import_prop_types9.default.func, import_prop_types9.default.string]),
  onClick: import_prop_types9.default.func,
  size: import_prop_types9.default.string,
  children: import_prop_types9.default.node,
  className: import_prop_types9.default.string,
  cssModule: import_prop_types9.default.object,
  close: import_prop_types9.default.bool
};
var defaultProps8 = {
  color: "secondary",
  tag: "button"
};
var Button2 = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Button3, _React$Component);
  function Button3(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = Button3.prototype;
  _proto.onClick = function onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }
    if (this.props.onClick) {
      return this.props.onClick(e);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, active = _this$props.active, ariaLabel = _this$props["aria-label"], block = _this$props.block, className = _this$props.className, close = _this$props.close, cssModule = _this$props.cssModule, color = _this$props.color, outline = _this$props.outline, size = _this$props.size, Tag = _this$props.tag, innerRef = _this$props.innerRef, attributes = _objectWithoutPropertiesLoose(_this$props, _excluded8);
    if (close && typeof attributes.children === "undefined") {
      attributes.children = /* @__PURE__ */ import_react9.default.createElement("span", {
        "aria-hidden": true
      }, "\xD7");
    }
    var btnOutlineColor = "btn" + (outline ? "-outline" : "") + "-" + color;
    var classes = mapToCssModules((0, import_classnames8.default)(className, {
      close
    }, close || "btn", close || btnOutlineColor, size ? "btn-" + size : false, block ? "btn-block" : false, {
      active,
      disabled: this.props.disabled
    }), cssModule);
    if (attributes.href && Tag === "button") {
      Tag = "a";
    }
    var defaultAriaLabel = close ? "Close" : null;
    return /* @__PURE__ */ import_react9.default.createElement(Tag, _extends({
      type: Tag === "button" && attributes.onClick ? "button" : void 0
    }, attributes, {
      className: classes,
      ref: innerRef,
      onClick: this.onClick,
      "aria-label": ariaLabel || defaultAriaLabel
    }));
  };
  return Button3;
}(import_react9.default.Component);
Button2.propTypes = propTypes8;
Button2.defaultProps = defaultProps8;
var Button_default = Button2;

// node_modules/reactstrap/es/Dropdown.js
init_react();
init_extends();
var import_react11 = __toESM(require_react());
var import_prop_types10 = __toESM(require_prop_types());

// node_modules/react-popper/lib/esm/index.js
init_react();

// node_modules/react-popper/lib/esm/Popper.js
init_react();
init_extends();

// node_modules/@babel/runtime/helpers/esm/defineProperty.js
init_react();
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// node_modules/react-popper/lib/esm/Popper.js
var import_deep_equal = __toESM(require_deep_equal());
var React12 = __toESM(require_react());

// node_modules/popper.js/dist/esm/popper.js
init_react();
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && typeof navigator !== "undefined";
var timeoutDuration = function() {
  var longerTimeoutBrowsers = ["Edge", "Trident", "Firefox"];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();
function microtaskDebounce(fn) {
  var called = false;
  return function() {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function() {
      called = false;
      fn();
    });
  };
}
function taskDebounce(fn) {
  var scheduled = false;
  return function() {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function() {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}
var supportsMicroTasks = isBrowser && window.Promise;
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
function isFunction2(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === "[object Function]";
}
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  var window2 = element.ownerDocument.defaultView;
  var css = window2.getComputedStyle(element, null);
  return property ? css[property] : css;
}
function getParentNode(element) {
  if (element.nodeName === "HTML") {
    return element;
  }
  return element.parentNode || element.host;
}
function getScrollParent(element) {
  if (!element) {
    return document.body;
  }
  switch (element.nodeName) {
    case "HTML":
    case "BODY":
      return element.ownerDocument.body;
    case "#document":
      return element.body;
  }
  var _getStyleComputedProp = getStyleComputedProperty(element), overflow = _getStyleComputedProp.overflow, overflowX = _getStyleComputedProp.overflowX, overflowY = _getStyleComputedProp.overflowY;
  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }
  return getScrollParent(getParentNode(element));
}
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}
var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }
  var noOffsetParent = isIE(10) ? document.body : null;
  var offsetParent = element.offsetParent || null;
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }
  var nodeName = offsetParent && offsetParent.nodeName;
  if (!nodeName || nodeName === "BODY" || nodeName === "HTML") {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }
  if (["TH", "TD", "TABLE"].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, "position") === "static") {
    return getOffsetParent(offsetParent);
  }
  return offsetParent;
}
function isOffsetContainer(element) {
  var nodeName = element.nodeName;
  if (nodeName === "BODY") {
    return false;
  }
  return nodeName === "HTML" || getOffsetParent(element.firstElementChild) === element;
}
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }
  return node;
}
function findCommonOffsetParent(element1, element2) {
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;
  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }
    return getOffsetParent(commonAncestorContainer);
  }
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top";
  var upperSide = side === "top" ? "scrollTop" : "scrollLeft";
  var nodeName = element.nodeName;
  if (nodeName === "BODY" || nodeName === "HTML") {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }
  return element[upperSide];
}
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var scrollTop = getScroll(element, "top");
  var scrollLeft = getScroll(element, "left");
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
function getBordersSize(styles2, axis) {
  var sideA = axis === "x" ? "Left" : "Top";
  var sideB = sideA === "Left" ? "Right" : "Bottom";
  return parseFloat(styles2["border" + sideA + "Width"]) + parseFloat(styles2["border" + sideB + "Width"]);
}
function getSize(axis, body, html, computedStyle) {
  return Math.max(body["offset" + axis], body["scroll" + axis], html["client" + axis], html["offset" + axis], html["scroll" + axis], isIE(10) ? parseInt(html["offset" + axis]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Top" : "Left")]) + parseInt(computedStyle["margin" + (axis === "Height" ? "Bottom" : "Right")]) : 0);
}
function getWindowSizes(document2) {
  var body = document2.body;
  var html = document2.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize("Height", body, html, computedStyle),
    width: getSize("Width", body, html, computedStyle)
  };
}
var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var createClass = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var defineProperty = function(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
};
var _extends2 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function getClientRect(offsets) {
  return _extends2({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
function getBoundingClientRect(element) {
  var rect = {};
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, "top");
      var scrollLeft = getScroll(element, "left");
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {
  }
  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };
  var sizes = element.nodeName === "HTML" ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;
  if (horizScrollbar || vertScrollbar) {
    var styles2 = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles2, "x");
    vertScrollbar -= getBordersSize(styles2, "y");
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }
  return getClientRect(result);
}
function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var isIE102 = isIE(10);
  var isHTML = parent.nodeName === "HTML";
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles2 = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles2.borderTopWidth);
  var borderLeftWidth = parseFloat(styles2.borderLeftWidth);
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;
  if (!isIE102 && isHTML) {
    var marginTop = parseFloat(styles2.marginTop);
    var marginLeft = parseFloat(styles2.marginLeft);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }
  if (isIE102 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== "BODY") {
    offsets = includeScroll(offsets, parent);
  }
  return offsets;
}
function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, "left") : 0;
  var offset2 = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width,
    height
  };
  return getClientRect(offset2);
}
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === "BODY" || nodeName === "HTML") {
    return false;
  }
  if (getStyleComputedProperty(element, "position") === "fixed") {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}
function getFixedPositionOffsetParent(element) {
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, "transform") === "none") {
    el = el.parentElement;
  }
  return el || document.documentElement;
}
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  if (boundariesElement === "viewport") {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    var boundariesNode = void 0;
    if (boundariesElement === "scrollParent") {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === "BODY") {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === "window") {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }
    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
    if (boundariesNode.nodeName === "HTML" && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument), height = _getWindowSizes.height, width = _getWindowSizes.width;
      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      boundaries = offsets;
    }
  }
  padding = padding || 0;
  var isPaddingNumber = typeof padding === "number";
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}
function getArea(_ref) {
  var width = _ref.width, height = _ref.height;
  return width * height;
}
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  if (placement.indexOf("auto") === -1) {
    return placement;
  }
  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function(key) {
    return _extends2({
      key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function(a, b) {
    return b.area - a.area;
  });
  var filteredAreas = sortedAreas.filter(function(_ref2) {
    var width = _ref2.width, height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split("-")[1];
  return computedPlacement + (variation ? "-" + variation : "");
}
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
function getOuterSizes(element) {
  var window2 = element.ownerDocument.defaultView;
  var styles2 = window2.getComputedStyle(element);
  var x = parseFloat(styles2.marginTop || 0) + parseFloat(styles2.marginBottom || 0);
  var y = parseFloat(styles2.marginLeft || 0) + parseFloat(styles2.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}
function getOppositePlacement(placement) {
  var hash = { left: "right", right: "left", bottom: "top", top: "bottom" };
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split("-")[0];
  var popperRect = getOuterSizes(popper);
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };
  var isHoriz = ["right", "left"].indexOf(placement) !== -1;
  var mainSide = isHoriz ? "top" : "left";
  var secondarySide = isHoriz ? "left" : "top";
  var measurement = isHoriz ? "height" : "width";
  var secondaryMeasurement = !isHoriz ? "height" : "width";
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }
  return popperOffsets;
}
function find(arr, check) {
  if (Array.prototype.find) {
    return arr.find(check);
  }
  return arr.filter(check)[0];
}
function findIndex(arr, prop, value) {
  if (Array.prototype.findIndex) {
    return arr.findIndex(function(cur) {
      return cur[prop] === value;
    });
  }
  var match = find(arr, function(obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}
function runModifiers(modifiers2, data, ends) {
  var modifiersToRun = ends === void 0 ? modifiers2 : modifiers2.slice(0, findIndex(modifiers2, "name", ends));
  modifiersToRun.forEach(function(modifier) {
    if (modifier["function"]) {
      console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
    }
    var fn = modifier["function"] || modifier.fn;
    if (modifier.enabled && isFunction2(fn)) {
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}
function update() {
  if (this.state.isDestroyed) {
    return;
  }
  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed;
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute";
  data = runModifiers(this.modifiers, data);
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}
function isModifierEnabled(modifiers2, modifierName) {
  return modifiers2.some(function(_ref) {
    var name = _ref.name, enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}
function getSupportedPropertyName(property) {
  var prefixes = [false, "ms", "Webkit", "Moz", "O"];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? "" + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== "undefined") {
      return toCheck;
    }
  }
  return null;
}
function destroy() {
  this.state.isDestroyed = true;
  if (isModifierEnabled(this.modifiers, "applyStyle")) {
    this.popper.removeAttribute("x-placement");
    this.popper.style.position = "";
    this.popper.style.top = "";
    this.popper.style.left = "";
    this.popper.style.right = "";
    this.popper.style.bottom = "";
    this.popper.style.willChange = "";
    this.popper.style[getSupportedPropertyName("transform")] = "";
  }
  this.disableEventListeners();
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}
function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === "BODY";
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });
  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}
function setupEventListeners(reference, options, state, updateBound) {
  state.updateBound = updateBound;
  getWindow(reference).addEventListener("resize", state.updateBound, { passive: true });
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, "scroll", state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
function removeEventListeners(reference, state) {
  getWindow(reference).removeEventListener("resize", state.updateBound);
  state.scrollParents.forEach(function(target) {
    target.removeEventListener("scroll", state.updateBound);
  });
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
function isNumeric(n) {
  return n !== "" && !isNaN(parseFloat(n)) && isFinite(n);
}
function setStyles(element, styles2) {
  Object.keys(styles2).forEach(function(prop) {
    var unit = "";
    if (["width", "height", "top", "right", "bottom", "left"].indexOf(prop) !== -1 && isNumeric(styles2[prop])) {
      unit = "px";
    }
    element.style[prop] = styles2[prop] + unit;
  });
}
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function(prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}
function applyStyle(data) {
  setStyles(data.instance.popper, data.styles);
  setAttributes(data.instance.popper, data.attributes);
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }
  return data;
}
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper.setAttribute("x-placement", placement);
  setStyles(popper, { position: options.positionFixed ? "fixed" : "absolute" });
  return options;
}
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
  var round = Math.round, floor2 = Math.floor;
  var noRound = function noRound2(v) {
    return v;
  };
  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);
  var isVertical = ["left", "right"].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf("-") !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor2;
  var verticalToInteger = !shouldRound ? noRound : round;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}
var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
function computeStyle(data, options) {
  var x = options.x, y = options.y;
  var popper = data.offsets.popper;
  var legacyGpuAccelerationOption = find(data.instance.modifiers, function(modifier) {
    return modifier.name === "applyStyle";
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== void 0) {
    console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== void 0 ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);
  var styles2 = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === "bottom" ? "top" : "bottom";
  var sideB = y === "right" ? "left" : "right";
  var prefixedProperty = getSupportedPropertyName("transform");
  var left = void 0, top = void 0;
  if (sideA === "bottom") {
    if (offsetParent.nodeName === "HTML") {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === "right") {
    if (offsetParent.nodeName === "HTML") {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles2[prefixedProperty] = "translate3d(" + left + "px, " + top + "px, 0)";
    styles2[sideA] = 0;
    styles2[sideB] = 0;
    styles2.willChange = "transform";
  } else {
    var invertTop = sideA === "bottom" ? -1 : 1;
    var invertLeft = sideB === "right" ? -1 : 1;
    styles2[sideA] = top * invertTop;
    styles2[sideB] = left * invertLeft;
    styles2.willChange = sideA + ", " + sideB;
  }
  var attributes = {
    "x-placement": data.placement
  };
  data.attributes = _extends2({}, attributes, data.attributes);
  data.styles = _extends2({}, styles2, data.styles);
  data.arrowStyles = _extends2({}, data.offsets.arrow, data.arrowStyles);
  return data;
}
function isModifierRequired(modifiers2, requestingName, requestedName) {
  var requesting = find(modifiers2, function(_ref) {
    var name = _ref.name;
    return name === requestingName;
  });
  var isRequired = !!requesting && modifiers2.some(function(modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });
  if (!isRequired) {
    var _requesting = "`" + requestingName + "`";
    var requested = "`" + requestedName + "`";
    console.warn(requested + " modifier is required by " + _requesting + " modifier in order to work, be sure to include it before " + _requesting + "!");
  }
  return isRequired;
}
function arrow(data, options) {
  var _data$offsets$arrow;
  if (!isModifierRequired(data.instance.modifiers, "arrow", "keepTogether")) {
    return data;
  }
  var arrowElement = options.element;
  if (typeof arrowElement === "string") {
    arrowElement = data.instance.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return data;
    }
  } else {
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn("WARNING: `arrow.element` must be child of its popper element!");
      return data;
    }
  }
  var placement = data.placement.split("-")[0];
  var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
  var isVertical = ["left", "right"].indexOf(placement) !== -1;
  var len = isVertical ? "height" : "width";
  var sideCapitalized = isVertical ? "Top" : "Left";
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? "left" : "top";
  var opSide = isVertical ? "bottom" : "right";
  var arrowElementSize = getOuterSizes(arrowElement)[len];
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css["margin" + sideCapitalized]);
  var popperBorderSide = parseFloat(css["border" + sideCapitalized + "Width"]);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ""), _data$offsets$arrow);
  return data;
}
function getOppositeVariation(variation) {
  if (variation === "end") {
    return "start";
  } else if (variation === "start") {
    return "end";
  }
  return variation;
}
var placements = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"];
var validPlacements = placements.slice(3);
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}
var BEHAVIORS = {
  FLIP: "flip",
  CLOCKWISE: "clockwise",
  COUNTERCLOCKWISE: "counterclockwise"
};
function flip(data, options) {
  if (isModifierEnabled(data.instance.modifiers, "inner")) {
    return data;
  }
  if (data.flipped && data.placement === data.originalPlacement) {
    return data;
  }
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  var placement = data.placement.split("-")[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split("-")[1] || "";
  var flipOrder = [];
  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }
  flipOrder.forEach(function(step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }
    placement = data.placement.split("-")[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;
    var floor2 = Math.floor;
    var overlapsRef = placement === "left" && floor2(popperOffsets.right) > floor2(refOffsets.left) || placement === "right" && floor2(popperOffsets.left) < floor2(refOffsets.right) || placement === "top" && floor2(popperOffsets.bottom) > floor2(refOffsets.top) || placement === "bottom" && floor2(popperOffsets.top) < floor2(refOffsets.bottom);
    var overflowsLeft = floor2(popperOffsets.left) < floor2(boundaries.left);
    var overflowsRight = floor2(popperOffsets.right) > floor2(boundaries.right);
    var overflowsTop = floor2(popperOffsets.top) < floor2(boundaries.top);
    var overflowsBottom = floor2(popperOffsets.bottom) > floor2(boundaries.bottom);
    var overflowsBoundaries = placement === "left" && overflowsLeft || placement === "right" && overflowsRight || placement === "top" && overflowsTop || placement === "bottom" && overflowsBottom;
    var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === "start" && overflowsLeft || isVertical && variation === "end" && overflowsRight || !isVertical && variation === "start" && overflowsTop || !isVertical && variation === "end" && overflowsBottom);
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === "start" && overflowsRight || isVertical && variation === "end" && overflowsLeft || !isVertical && variation === "start" && overflowsBottom || !isVertical && variation === "end" && overflowsTop);
    var flippedVariation = flippedVariationByRef || flippedVariationByContent;
    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      data.flipped = true;
      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }
      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }
      data.placement = placement + (variation ? "-" + variation : "");
      data.offsets.popper = _extends2({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, "flip");
    }
  });
  return data;
}
function keepTogether(data) {
  var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
  var placement = data.placement.split("-")[0];
  var floor2 = Math.floor;
  var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
  var side = isVertical ? "right" : "bottom";
  var opSide = isVertical ? "left" : "top";
  var measurement = isVertical ? "width" : "height";
  if (popper[side] < floor2(reference[opSide])) {
    data.offsets.popper[opSide] = floor2(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor2(reference[side])) {
    data.offsets.popper[opSide] = floor2(reference[side]);
  }
  return data;
}
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];
  if (!value) {
    return str;
  }
  if (unit.indexOf("%") === 0) {
    var element = void 0;
    switch (unit) {
      case "%p":
        element = popperOffsets;
        break;
      case "%":
      case "%r":
      default:
        element = referenceOffsets;
    }
    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === "vh" || unit === "vw") {
    var size = void 0;
    if (unit === "vh") {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    return value;
  }
}
function parseOffset(offset2, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];
  var useHeight = ["right", "left"].indexOf(basePlacement) !== -1;
  var fragments = offset2.split(/(\+|\-)/).map(function(frag) {
    return frag.trim();
  });
  var divider = fragments.indexOf(find(fragments, function(frag) {
    return frag.search(/,|\s/) !== -1;
  }));
  if (fragments[divider] && fragments[divider].indexOf(",") === -1) {
    console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
  }
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];
  ops = ops.map(function(op, index) {
    var measurement = (index === 1 ? !useHeight : useHeight) ? "height" : "width";
    var mergeWithPrevious = false;
    return op.reduce(function(a, b) {
      if (a[a.length - 1] === "" && ["+", "-"].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, []).map(function(str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });
  ops.forEach(function(op, index) {
    op.forEach(function(frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === "-" ? -1 : 1);
      }
    });
  });
  return offsets;
}
function offset(data, _ref) {
  var offset2 = _ref.offset;
  var placement = data.placement, _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
  var basePlacement = placement.split("-")[0];
  var offsets = void 0;
  if (isNumeric(+offset2)) {
    offsets = [+offset2, 0];
  } else {
    offsets = parseOffset(offset2, popper, reference, basePlacement);
  }
  if (basePlacement === "left") {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === "right") {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === "top") {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === "bottom") {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }
  data.popper = popper;
  return data;
}
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }
  var transformProp = getSupportedPropertyName("transform");
  var popperStyles = data.instance.popper.style;
  var top = popperStyles.top, left = popperStyles.left, transform = popperStyles[transformProp];
  popperStyles.top = "";
  popperStyles.left = "";
  popperStyles[transformProp] = "";
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;
  options.boundaries = boundaries;
  var order = options.priority;
  var popper = data.offsets.popper;
  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === "right" ? "left" : "top";
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === "right" ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };
  order.forEach(function(placement) {
    var side = ["left", "top"].indexOf(placement) !== -1 ? "primary" : "secondary";
    popper = _extends2({}, popper, check[side](placement));
  });
  data.offsets.popper = popper;
  return data;
}
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split("-")[0];
  var shiftvariation = placement.split("-")[1];
  if (shiftvariation) {
    var _data$offsets = data.offsets, reference = _data$offsets.reference, popper = _data$offsets.popper;
    var isVertical = ["bottom", "top"].indexOf(basePlacement) !== -1;
    var side = isVertical ? "left" : "top";
    var measurement = isVertical ? "width" : "height";
    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };
    data.offsets.popper = _extends2({}, popper, shiftOffsets[shiftvariation]);
  }
  return data;
}
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, "hide", "preventOverflow")) {
    return data;
  }
  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function(modifier) {
    return modifier.name === "preventOverflow";
  }).boundaries;
  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    if (data.hide === true) {
      return data;
    }
    data.hide = true;
    data.attributes["x-out-of-boundaries"] = "";
  } else {
    if (data.hide === false) {
      return data;
    }
    data.hide = false;
    data.attributes["x-out-of-boundaries"] = false;
  }
  return data;
}
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split("-")[0];
  var _data$offsets = data.offsets, popper = _data$offsets.popper, reference = _data$offsets.reference;
  var isHoriz = ["left", "right"].indexOf(basePlacement) !== -1;
  var subtractLength = ["top", "left"].indexOf(basePlacement) === -1;
  popper[isHoriz ? "left" : "top"] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? "width" : "height"] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);
  return data;
}
var modifiers = {
  shift: {
    order: 100,
    enabled: true,
    fn: shift
  },
  offset: {
    order: 200,
    enabled: true,
    fn: offset,
    offset: 0
  },
  preventOverflow: {
    order: 300,
    enabled: true,
    fn: preventOverflow,
    priority: ["left", "right", "top", "bottom"],
    padding: 5,
    boundariesElement: "scrollParent"
  },
  keepTogether: {
    order: 400,
    enabled: true,
    fn: keepTogether
  },
  arrow: {
    order: 500,
    enabled: true,
    fn: arrow,
    element: "[x-arrow]"
  },
  flip: {
    order: 600,
    enabled: true,
    fn: flip,
    behavior: "flip",
    padding: 5,
    boundariesElement: "viewport",
    flipVariations: false,
    flipVariationsByContent: false
  },
  inner: {
    order: 700,
    enabled: false,
    fn: inner
  },
  hide: {
    order: 800,
    enabled: true,
    fn: hide
  },
  computeStyle: {
    order: 850,
    enabled: true,
    fn: computeStyle,
    gpuAcceleration: true,
    x: "bottom",
    y: "right"
  },
  applyStyle: {
    order: 900,
    enabled: true,
    fn: applyStyle,
    onLoad: applyStyleOnLoad,
    gpuAcceleration: void 0
  }
};
var Defaults = {
  placement: "bottom",
  positionFixed: false,
  eventsEnabled: true,
  removeOnDestroy: false,
  onCreate: function onCreate() {
  },
  onUpdate: function onUpdate() {
  },
  modifiers
};
var Popper = function() {
  function Popper3(reference, popper) {
    var _this = this;
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    classCallCheck(this, Popper3);
    this.scheduleUpdate = function() {
      return requestAnimationFrame(_this.update);
    };
    this.update = debounce(this.update.bind(this));
    this.options = _extends2({}, Popper3.Defaults, options);
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;
    this.options.modifiers = {};
    Object.keys(_extends2({}, Popper3.Defaults.modifiers, options.modifiers)).forEach(function(name) {
      _this.options.modifiers[name] = _extends2({}, Popper3.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });
    this.modifiers = Object.keys(this.options.modifiers).map(function(name) {
      return _extends2({
        name
      }, _this.options.modifiers[name]);
    }).sort(function(a, b) {
      return a.order - b.order;
    });
    this.modifiers.forEach(function(modifierOptions) {
      if (modifierOptions.enabled && isFunction2(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });
    this.update();
    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      this.enableEventListeners();
    }
    this.state.eventsEnabled = eventsEnabled;
  }
  createClass(Popper3, [{
    key: "update",
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: "destroy",
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: "enableEventListeners",
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: "disableEventListeners",
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }
  }]);
  return Popper3;
}();
Popper.Utils = (typeof window !== "undefined" ? window : globalThis).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
var popper_default = Popper;

// node_modules/react-popper/lib/esm/Manager.js
init_react();
var React11 = __toESM(require_react());
var import_create_react_context = __toESM(require_lib());
var ManagerReferenceNodeContext = (0, import_create_react_context.default)();
var ManagerReferenceNodeSetterContext = (0, import_create_react_context.default)();
var Manager = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Manager2, _React$Component);
  function Manager2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "referenceNode", void 0);
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setReferenceNode", function(newReferenceNode) {
      if (newReferenceNode && _this.referenceNode !== newReferenceNode) {
        _this.referenceNode = newReferenceNode;
        _this.forceUpdate();
      }
    });
    return _this;
  }
  var _proto = Manager2.prototype;
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.referenceNode = null;
  };
  _proto.render = function render() {
    return React11.createElement(ManagerReferenceNodeContext.Provider, {
      value: this.referenceNode
    }, React11.createElement(ManagerReferenceNodeSetterContext.Provider, {
      value: this.setReferenceNode
    }, this.props.children));
  };
  return Manager2;
}(React11.Component);

// node_modules/react-popper/lib/esm/utils.js
init_react();
var unwrapArray = function unwrapArray2(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
var safeInvoke = function safeInvoke2(fn) {
  if (typeof fn === "function") {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return fn.apply(void 0, args);
  }
};
var shallowEqual = function shallowEqual2(objA, objB) {
  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);
  if (bKeys.length !== aKeys.length) {
    return false;
  }
  for (var i = 0; i < bKeys.length; i++) {
    var key = aKeys[i];
    if (objA[key] !== objB[key]) {
      return false;
    }
  }
  return true;
};
var setRef = function setRef2(ref, node) {
  if (typeof ref === "function") {
    return safeInvoke(ref, node);
  } else if (ref != null) {
    ref.current = node;
  }
};

// node_modules/react-popper/lib/esm/Popper.js
var initialStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  opacity: 0,
  pointerEvents: "none"
};
var initialArrowStyle = {};
var InnerPopper = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(InnerPopper2, _React$Component);
  function InnerPopper2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      data: void 0,
      placement: void 0
    });
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "popperInstance", void 0);
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "popperNode", null);
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "arrowNode", null);
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setPopperNode", function(popperNode) {
      if (!popperNode || _this.popperNode === popperNode)
        return;
      setRef(_this.props.innerRef, popperNode);
      _this.popperNode = popperNode;
      _this.updatePopperInstance();
    });
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setArrowNode", function(arrowNode) {
      _this.arrowNode = arrowNode;
    });
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateStateModifier", {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        var placement = data.placement;
        _this.setState({
          data,
          placement
        });
        return data;
      }
    });
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getOptions", function() {
      return {
        placement: _this.props.placement,
        eventsEnabled: _this.props.eventsEnabled,
        positionFixed: _this.props.positionFixed,
        modifiers: _extends({}, _this.props.modifiers, {
          arrow: _extends({}, _this.props.modifiers && _this.props.modifiers.arrow, {
            enabled: !!_this.arrowNode,
            element: _this.arrowNode
          }),
          applyStyle: {
            enabled: false
          },
          updateStateModifier: _this.updateStateModifier
        })
      };
    });
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPopperStyle", function() {
      return !_this.popperNode || !_this.state.data ? initialStyle : _extends({
        position: _this.state.data.offsets.popper.position
      }, _this.state.data.styles);
    });
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getPopperPlacement", function() {
      return !_this.state.data ? void 0 : _this.state.placement;
    });
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getArrowStyle", function() {
      return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
    });
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getOutOfBoundariesState", function() {
      return _this.state.data ? _this.state.data.hide : void 0;
    });
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "destroyPopperInstance", function() {
      if (!_this.popperInstance)
        return;
      _this.popperInstance.destroy();
      _this.popperInstance = null;
    });
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updatePopperInstance", function() {
      _this.destroyPopperInstance();
      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)), popperNode = _assertThisInitialize.popperNode;
      var referenceElement = _this.props.referenceElement;
      if (!referenceElement || !popperNode)
        return;
      _this.popperInstance = new popper_default(referenceElement, popperNode, _this.getOptions());
    });
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scheduleUpdate", function() {
      if (_this.popperInstance) {
        _this.popperInstance.scheduleUpdate();
      }
    });
    return _this;
  }
  var _proto = InnerPopper2.prototype;
  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.props.placement !== prevProps.placement || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed || !(0, import_deep_equal.default)(this.props.modifiers, prevProps.modifiers, {
      strict: true
    })) {
      if (true) {
        if (this.props.modifiers !== prevProps.modifiers && this.props.modifiers != null && prevProps.modifiers != null && shallowEqual(this.props.modifiers, prevProps.modifiers)) {
          console.warn("'modifiers' prop reference updated even though all values appear the same.\nConsider memoizing the 'modifiers' object to avoid needless rendering.");
        }
      }
      this.updatePopperInstance();
    } else if (this.props.eventsEnabled !== prevProps.eventsEnabled && this.popperInstance) {
      this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners();
    }
    if (prevState.placement !== this.state.placement) {
      this.scheduleUpdate();
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    setRef(this.props.innerRef, null);
    this.destroyPopperInstance();
  };
  _proto.render = function render() {
    return unwrapArray(this.props.children)({
      ref: this.setPopperNode,
      style: this.getPopperStyle(),
      placement: this.getPopperPlacement(),
      outOfBoundaries: this.getOutOfBoundariesState(),
      scheduleUpdate: this.scheduleUpdate,
      arrowProps: {
        ref: this.setArrowNode,
        style: this.getArrowStyle()
      }
    });
  };
  return InnerPopper2;
}(React12.Component);
_defineProperty(InnerPopper, "defaultProps", {
  placement: "bottom",
  eventsEnabled: true,
  referenceElement: void 0,
  positionFixed: false
});
var placements2 = popper_default.placements;
function Popper2(_ref) {
  var referenceElement = _ref.referenceElement, props = _objectWithoutPropertiesLoose(_ref, ["referenceElement"]);
  return React12.createElement(ManagerReferenceNodeContext.Consumer, null, function(referenceNode) {
    return React12.createElement(InnerPopper, _extends({
      referenceElement: referenceElement !== void 0 ? referenceElement : referenceNode
    }, props));
  });
}

// node_modules/react-popper/lib/esm/Reference.js
init_react();
init_extends();
var React13 = __toESM(require_react());
var import_warning = __toESM(require_warning());
var InnerReference = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(InnerReference2, _React$Component);
  function InnerReference2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "refHandler", function(node) {
      setRef(_this.props.innerRef, node);
      safeInvoke(_this.props.setReferenceNode, node);
    });
    return _this;
  }
  var _proto = InnerReference2.prototype;
  _proto.componentWillUnmount = function componentWillUnmount() {
    setRef(this.props.innerRef, null);
  };
  _proto.render = function render() {
    (0, import_warning.default)(Boolean(this.props.setReferenceNode), "`Reference` should not be used outside of a `Manager` component.");
    return unwrapArray(this.props.children)({
      ref: this.refHandler
    });
  };
  return InnerReference2;
}(React13.Component);
function Reference(props) {
  return React13.createElement(ManagerReferenceNodeSetterContext.Consumer, null, function(setReferenceNode) {
    return React13.createElement(InnerReference, _extends({
      setReferenceNode
    }, props));
  });
}

// node_modules/reactstrap/es/Dropdown.js
var import_classnames9 = __toESM(require_classnames());

// node_modules/reactstrap/es/DropdownContext.js
init_react();
var import_react10 = __toESM(require_react());
var DropdownContext = /* @__PURE__ */ import_react10.default.createContext({});

// node_modules/reactstrap/es/Dropdown.js
var _excluded9 = ["className", "cssModule", "direction", "isOpen", "group", "size", "nav", "setActiveFromChild", "active", "addonType", "tag", "menuRole"];
var propTypes9 = {
  a11y: import_prop_types10.default.bool,
  disabled: import_prop_types10.default.bool,
  direction: import_prop_types10.default.oneOf(["up", "down", "left", "right"]),
  group: import_prop_types10.default.bool,
  isOpen: import_prop_types10.default.bool,
  nav: import_prop_types10.default.bool,
  active: import_prop_types10.default.bool,
  addonType: import_prop_types10.default.oneOfType([import_prop_types10.default.bool, import_prop_types10.default.oneOf(["prepend", "append"])]),
  size: import_prop_types10.default.string,
  tag: tagPropType,
  toggle: import_prop_types10.default.func,
  children: import_prop_types10.default.node,
  className: import_prop_types10.default.string,
  cssModule: import_prop_types10.default.object,
  inNavbar: import_prop_types10.default.bool,
  setActiveFromChild: import_prop_types10.default.bool,
  menuRole: import_prop_types10.default.oneOf(["listbox", "menu"])
};
var defaultProps9 = {
  a11y: true,
  isOpen: false,
  direction: "down",
  nav: false,
  active: false,
  addonType: false,
  inNavbar: false,
  setActiveFromChild: false
};
var preventDefaultKeys = [keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down, keyCodes.end, keyCodes.home];
var Dropdown = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Dropdown2, _React$Component);
  function Dropdown2(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.addEvents = _this.addEvents.bind(_assertThisInitialized(_this));
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.removeEvents = _this.removeEvents.bind(_assertThisInitialized(_this));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.handleMenuRef = _this.handleMenuRef.bind(_assertThisInitialized(_this));
    _this.containerRef = /* @__PURE__ */ import_react11.default.createRef();
    _this.menuRef = /* @__PURE__ */ import_react11.default.createRef();
    return _this;
  }
  var _proto = Dropdown2.prototype;
  _proto.handleMenuRef = function handleMenuRef(menuRef) {
    this.menuRef.current = menuRef;
  };
  _proto.getContextValue = function getContextValue() {
    return {
      toggle: this.toggle,
      isOpen: this.props.isOpen,
      direction: this.props.direction === "down" && this.props.dropup ? "up" : this.props.direction,
      inNavbar: this.props.inNavbar,
      disabled: this.props.disabled,
      onMenuRef: this.handleMenuRef,
      menuRole: this.props.menuRole
    };
  };
  _proto.componentDidMount = function componentDidMount() {
    this.handleProps();
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.handleProps();
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.removeEvents();
  };
  _proto.getContainer = function getContainer() {
    return this.containerRef.current;
  };
  _proto.getMenu = function getMenu() {
    return this.menuRef.current;
  };
  _proto.getMenuCtrl = function getMenuCtrl() {
    if (this._$menuCtrl)
      return this._$menuCtrl;
    this._$menuCtrl = this.getContainer().querySelector("[aria-expanded]");
    return this._$menuCtrl;
  };
  _proto.getItemType = function getItemType() {
    if (this.context.menuRole === "listbox") {
      return "option";
    }
    return "menuitem";
  };
  _proto.getMenuItems = function getMenuItems() {
    var menuContainer = this.getMenu() || this.getContainer();
    return [].slice.call(menuContainer.querySelectorAll('[role="' + this.getItemType() + '"]'));
  };
  _proto.addEvents = function addEvents() {
    var _this2 = this;
    ["click", "touchstart", "keyup"].forEach(function(event) {
      return document.addEventListener(event, _this2.handleDocumentClick, true);
    });
  };
  _proto.removeEvents = function removeEvents() {
    var _this3 = this;
    ["click", "touchstart", "keyup"].forEach(function(event) {
      return document.removeEventListener(event, _this3.handleDocumentClick, true);
    });
  };
  _proto.handleDocumentClick = function handleDocumentClick(e) {
    if (e && (e.which === 3 || e.type === "keyup" && e.which !== keyCodes.tab))
      return;
    var container = this.getContainer();
    var menu = this.getMenu();
    var clickIsInContainer = container.contains(e.target) && container !== e.target;
    var clickIsInMenu = menu && menu.contains(e.target) && menu !== e.target;
    if ((clickIsInContainer || clickIsInMenu) && (e.type !== "keyup" || e.which === keyCodes.tab)) {
      return;
    }
    this.toggle(e);
  };
  _proto.handleKeyDown = function handleKeyDown(e) {
    var _this4 = this;
    var isTargetMenuItem = e.target.getAttribute("role") === "menuitem" || e.target.getAttribute("role") === "option";
    var isTargetMenuCtrl = this.getMenuCtrl() === e.target;
    var isTab = keyCodes.tab === e.which;
    if (/input|textarea/i.test(e.target.tagName) || isTab && !this.props.a11y || isTab && !(isTargetMenuItem || isTargetMenuCtrl)) {
      return;
    }
    if (preventDefaultKeys.indexOf(e.which) !== -1 || e.which >= 48 && e.which <= 90) {
      e.preventDefault();
    }
    if (this.props.disabled)
      return;
    if (isTargetMenuCtrl) {
      if ([keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down].indexOf(e.which) > -1) {
        if (!this.props.isOpen) {
          this.toggle(e);
        }
        setTimeout(function() {
          return _this4.getMenuItems()[0].focus();
        });
      } else if (this.props.isOpen && isTab) {
        e.preventDefault();
        this.getMenuItems()[0].focus();
      } else if (this.props.isOpen && e.which === keyCodes.esc) {
        this.toggle(e);
      }
    }
    if (this.props.isOpen && isTargetMenuItem) {
      if ([keyCodes.tab, keyCodes.esc].indexOf(e.which) > -1) {
        this.toggle(e);
        this.getMenuCtrl().focus();
      } else if ([keyCodes.space, keyCodes.enter].indexOf(e.which) > -1) {
        e.target.click();
        this.getMenuCtrl().focus();
      } else if ([keyCodes.down, keyCodes.up].indexOf(e.which) > -1 || [keyCodes.n, keyCodes.p].indexOf(e.which) > -1 && e.ctrlKey) {
        var $menuitems = this.getMenuItems();
        var index = $menuitems.indexOf(e.target);
        if (keyCodes.up === e.which || keyCodes.p === e.which && e.ctrlKey) {
          index = index !== 0 ? index - 1 : $menuitems.length - 1;
        } else if (keyCodes.down === e.which || keyCodes.n === e.which && e.ctrlKey) {
          index = index === $menuitems.length - 1 ? 0 : index + 1;
        }
        $menuitems[index].focus();
      } else if (keyCodes.end === e.which) {
        var _$menuitems = this.getMenuItems();
        _$menuitems[_$menuitems.length - 1].focus();
      } else if (keyCodes.home === e.which) {
        var _$menuitems2 = this.getMenuItems();
        _$menuitems2[0].focus();
      } else if (e.which >= 48 && e.which <= 90) {
        var _$menuitems3 = this.getMenuItems();
        var charPressed = String.fromCharCode(e.which).toLowerCase();
        for (var i = 0; i < _$menuitems3.length; i += 1) {
          var firstLetter = _$menuitems3[i].textContent && _$menuitems3[i].textContent[0].toLowerCase();
          if (firstLetter === charPressed) {
            _$menuitems3[i].focus();
            break;
          }
        }
      }
    }
  };
  _proto.handleProps = function handleProps() {
    if (this.props.isOpen) {
      this.addEvents();
    } else {
      this.removeEvents();
    }
  };
  _proto.toggle = function toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }
    return this.props.toggle(e);
  };
  _proto.render = function render() {
    var _classNames, _ref;
    var _omit = omit(this.props, ["toggle", "disabled", "inNavbar", "a11y"]), className = _omit.className, cssModule = _omit.cssModule, direction = _omit.direction, isOpen = _omit.isOpen, group = _omit.group, size = _omit.size, nav = _omit.nav, setActiveFromChild = _omit.setActiveFromChild, active = _omit.active, addonType = _omit.addonType, tag = _omit.tag, menuRole = _omit.menuRole, attrs = _objectWithoutPropertiesLoose(_omit, _excluded9);
    var Tag = tag || (nav ? "li" : "div");
    var subItemIsActive = false;
    if (setActiveFromChild) {
      import_react11.default.Children.map(this.props.children[1].props.children, function(dropdownItem) {
        if (dropdownItem && dropdownItem.props.active)
          subItemIsActive = true;
      });
    }
    var classes = mapToCssModules((0, import_classnames9.default)(className, direction !== "down" && "drop" + direction, nav && active ? "active" : false, setActiveFromChild && subItemIsActive ? "active" : false, (_classNames = {}, _classNames["input-group-" + addonType] = addonType, _classNames["btn-group"] = group, _classNames["btn-group-" + size] = !!size, _classNames.dropdown = !group && !addonType, _classNames.show = isOpen, _classNames["nav-item"] = nav, _classNames)), cssModule);
    return /* @__PURE__ */ import_react11.default.createElement(DropdownContext.Provider, {
      value: this.getContextValue()
    }, /* @__PURE__ */ import_react11.default.createElement(Manager, null, /* @__PURE__ */ import_react11.default.createElement(Tag, _extends({}, attrs, (_ref = {}, _ref[typeof Tag === "string" ? "ref" : "innerRef"] = this.containerRef, _ref), {
      onKeyDown: this.handleKeyDown,
      className: classes
    }))));
  };
  return Dropdown2;
}(import_react11.default.Component);
Dropdown.propTypes = propTypes9;
Dropdown.defaultProps = defaultProps9;
var Dropdown_default = Dropdown;

// node_modules/reactstrap/es/DropdownItem.js
init_react();
init_extends();
var import_react12 = __toESM(require_react());
var import_prop_types11 = __toESM(require_prop_types());
var import_classnames10 = __toESM(require_classnames());
var _excluded10 = ["className", "cssModule", "divider", "tag", "header", "active", "text"];
var propTypes10 = {
  children: import_prop_types11.default.node,
  active: import_prop_types11.default.bool,
  disabled: import_prop_types11.default.bool,
  divider: import_prop_types11.default.bool,
  tag: tagPropType,
  header: import_prop_types11.default.bool,
  onClick: import_prop_types11.default.func,
  className: import_prop_types11.default.string,
  cssModule: import_prop_types11.default.object,
  toggle: import_prop_types11.default.bool,
  text: import_prop_types11.default.bool
};
var defaultProps10 = {
  tag: "button",
  toggle: true
};
var DropdownItem = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(DropdownItem2, _React$Component);
  function DropdownItem2(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.getTabIndex = _this.getTabIndex.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = DropdownItem2.prototype;
  _proto.getRole = function getRole() {
    if (this.context.menuRole === "listbox") {
      return "option";
    }
    return "menuitem";
  };
  _proto.onClick = function onClick(e) {
    var _this$props = this.props, disabled = _this$props.disabled, header = _this$props.header, divider = _this$props.divider, text = _this$props.text;
    if (disabled || header || divider || text) {
      e.preventDefault();
      return;
    }
    if (this.props.onClick) {
      this.props.onClick(e);
    }
    if (this.props.toggle) {
      this.context.toggle(e);
    }
  };
  _proto.getTabIndex = function getTabIndex() {
    var _this$props2 = this.props, disabled = _this$props2.disabled, header = _this$props2.header, divider = _this$props2.divider, text = _this$props2.text;
    if (disabled || header || divider || text) {
      return "-1";
    }
    return "0";
  };
  _proto.render = function render() {
    var tabIndex = this.getTabIndex();
    var role = tabIndex > -1 ? this.getRole() : void 0;
    var _omit = omit(this.props, ["toggle"]), className = _omit.className, cssModule = _omit.cssModule, divider = _omit.divider, Tag = _omit.tag, header = _omit.header, active = _omit.active, text = _omit.text, props = _objectWithoutPropertiesLoose(_omit, _excluded10);
    var classes = mapToCssModules((0, import_classnames10.default)(className, {
      disabled: props.disabled,
      "dropdown-item": !divider && !header && !text,
      active,
      "dropdown-header": header,
      "dropdown-divider": divider,
      "dropdown-item-text": text
    }), cssModule);
    if (Tag === "button") {
      if (header) {
        Tag = "h6";
      } else if (divider) {
        Tag = "div";
      } else if (props.href) {
        Tag = "a";
      } else if (text) {
        Tag = "span";
      }
    }
    return /* @__PURE__ */ import_react12.default.createElement(Tag, _extends({
      type: Tag === "button" && (props.onClick || this.props.toggle) ? "button" : void 0
    }, props, {
      tabIndex,
      role,
      className: classes,
      onClick: this.onClick
    }));
  };
  return DropdownItem2;
}(import_react12.default.Component);
DropdownItem.propTypes = propTypes10;
DropdownItem.defaultProps = defaultProps10;
DropdownItem.contextType = DropdownContext;
var DropdownItem_default = DropdownItem;

// node_modules/reactstrap/es/DropdownMenu.js
init_react();
init_extends();
var import_react13 = __toESM(require_react());
var import_prop_types12 = __toESM(require_prop_types());
var import_react_dom = __toESM(require_react_dom());
var import_classnames11 = __toESM(require_classnames());
var _excluded11 = ["className", "cssModule", "right", "tag", "flip", "modifiers", "persist", "positionFixed", "container"];
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var propTypes11 = {
  tag: tagPropType,
  children: import_prop_types12.default.node.isRequired,
  right: import_prop_types12.default.bool,
  flip: import_prop_types12.default.bool,
  modifiers: import_prop_types12.default.object,
  className: import_prop_types12.default.string,
  cssModule: import_prop_types12.default.object,
  persist: import_prop_types12.default.bool,
  positionFixed: import_prop_types12.default.bool,
  container: targetPropType
};
var defaultProps11 = {
  tag: "div",
  flip: true
};
var noFlipModifier = {
  flip: {
    enabled: false
  }
};
var directionPositionMap = {
  up: "top",
  left: "left",
  right: "right",
  down: "bottom"
};
var DropdownMenu = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(DropdownMenu2, _React$Component);
  function DropdownMenu2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = DropdownMenu2.prototype;
  _proto.getRole = function getRole() {
    if (this.context.menuRole === "listbox") {
      return "listbox";
    }
    return "menu";
  };
  _proto.render = function render() {
    var _this = this;
    var _this$props = this.props, className = _this$props.className, cssModule = _this$props.cssModule, right = _this$props.right, tag = _this$props.tag, flip2 = _this$props.flip, modifiers2 = _this$props.modifiers, persist = _this$props.persist, positionFixed = _this$props.positionFixed, container = _this$props.container, attrs = _objectWithoutPropertiesLoose(_this$props, _excluded11);
    var classes = mapToCssModules((0, import_classnames11.default)(className, "dropdown-menu", {
      "dropdown-menu-right": right,
      show: this.context.isOpen
    }), cssModule);
    var Tag = tag;
    if (persist || this.context.isOpen && !this.context.inNavbar) {
      var position1 = directionPositionMap[this.context.direction] || "bottom";
      var position2 = right ? "end" : "start";
      var poperPlacement = position1 + "-" + position2;
      var poperModifiers = !flip2 ? _objectSpread(_objectSpread({}, modifiers2), noFlipModifier) : modifiers2;
      var popperPositionFixed = !!positionFixed;
      var popper = /* @__PURE__ */ import_react13.default.createElement(Popper2, {
        placement: poperPlacement,
        modifiers: poperModifiers,
        positionFixed: popperPositionFixed
      }, function(_ref) {
        var ref = _ref.ref, style = _ref.style, placement = _ref.placement;
        var combinedStyle = _objectSpread(_objectSpread({}, _this.props.style), style);
        var handleRef = function handleRef2(tagRef) {
          ref(tagRef);
          var onMenuRef = _this.context.onMenuRef;
          if (onMenuRef)
            onMenuRef(tagRef);
        };
        return /* @__PURE__ */ import_react13.default.createElement(Tag, _extends({
          tabIndex: "-1",
          role: _this.getRole(),
          ref: handleRef
        }, attrs, {
          style: combinedStyle,
          "aria-hidden": !_this.context.isOpen,
          className: classes,
          "x-placement": placement
        }));
      });
      if (container) {
        return /* @__PURE__ */ import_react_dom.default.createPortal(popper, getTarget(container));
      } else {
        return popper;
      }
    }
    return /* @__PURE__ */ import_react13.default.createElement(Tag, _extends({
      tabIndex: "-1",
      role: this.getRole()
    }, attrs, {
      "aria-hidden": !this.context.isOpen,
      className: classes,
      "x-placement": attrs.placement
    }));
  };
  return DropdownMenu2;
}(import_react13.default.Component);
DropdownMenu.propTypes = propTypes11;
DropdownMenu.defaultProps = defaultProps11;
DropdownMenu.contextType = DropdownContext;
var DropdownMenu_default = DropdownMenu;

// node_modules/reactstrap/es/DropdownToggle.js
init_react();
init_extends();
var import_react14 = __toESM(require_react());
var import_prop_types13 = __toESM(require_prop_types());
var import_classnames12 = __toESM(require_classnames());
var _excluded12 = ["className", "color", "cssModule", "caret", "split", "nav", "tag", "innerRef"];
var propTypes12 = {
  caret: import_prop_types13.default.bool,
  color: import_prop_types13.default.string,
  children: import_prop_types13.default.node,
  className: import_prop_types13.default.string,
  cssModule: import_prop_types13.default.object,
  disabled: import_prop_types13.default.bool,
  onClick: import_prop_types13.default.func,
  "aria-haspopup": import_prop_types13.default.bool,
  split: import_prop_types13.default.bool,
  tag: tagPropType,
  nav: import_prop_types13.default.bool
};
var defaultProps12 = {
  color: "secondary",
  "aria-haspopup": true
};
var DropdownToggle = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(DropdownToggle2, _React$Component);
  function DropdownToggle2(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = DropdownToggle2.prototype;
  _proto.onClick = function onClick(e) {
    if (this.props.disabled || this.context.disabled) {
      e.preventDefault();
      return;
    }
    if (this.props.nav && !this.props.tag) {
      e.preventDefault();
    }
    if (this.props.onClick) {
      this.props.onClick(e);
    }
    this.context.toggle(e);
  };
  _proto.getRole = function getRole() {
    return this.context.menuRole || this.props["aria-haspopup"];
  };
  _proto.render = function render() {
    var _this2 = this;
    var _this$props = this.props, className = _this$props.className, color = _this$props.color, cssModule = _this$props.cssModule, caret = _this$props.caret, split = _this$props.split, nav = _this$props.nav, tag = _this$props.tag, innerRef = _this$props.innerRef, props = _objectWithoutPropertiesLoose(_this$props, _excluded12);
    var ariaLabel = props["aria-label"] || "Toggle Dropdown";
    var classes = mapToCssModules((0, import_classnames12.default)(className, {
      "dropdown-toggle": caret || split,
      "dropdown-toggle-split": split,
      "nav-link": nav
    }), cssModule);
    var children = typeof props.children !== "undefined" ? props.children : /* @__PURE__ */ import_react14.default.createElement("span", {
      className: "sr-only"
    }, ariaLabel);
    var Tag;
    if (nav && !tag) {
      Tag = "a";
      props.href = "#";
    } else if (!tag) {
      Tag = Button_default;
      props.color = color;
      props.cssModule = cssModule;
    } else {
      Tag = tag;
    }
    if (this.context.inNavbar) {
      return /* @__PURE__ */ import_react14.default.createElement(Tag, _extends({}, props, {
        className: classes,
        onClick: this.onClick,
        "aria-expanded": this.context.isOpen,
        "aria-haspopup": this.getRole(),
        children
      }));
    }
    return /* @__PURE__ */ import_react14.default.createElement(Reference, {
      innerRef
    }, function(_ref) {
      var _ref2;
      var ref = _ref.ref;
      return /* @__PURE__ */ import_react14.default.createElement(Tag, _extends({}, props, (_ref2 = {}, _ref2[typeof Tag === "string" ? "ref" : "innerRef"] = ref, _ref2), {
        className: classes,
        onClick: _this2.onClick,
        "aria-expanded": _this2.context.isOpen,
        "aria-haspopup": _this2.getRole(),
        children
      }));
    });
  };
  return DropdownToggle2;
}(import_react14.default.Component);
DropdownToggle.propTypes = propTypes12;
DropdownToggle.defaultProps = defaultProps12;
DropdownToggle.contextType = DropdownContext;
var DropdownToggle_default = DropdownToggle;

// node_modules/reactstrap/es/Fade.js
init_react();
init_extends();
var import_react15 = __toESM(require_react());
var import_prop_types14 = __toESM(require_prop_types());
var import_classnames13 = __toESM(require_classnames());
var import_react_transition_group = __toESM(require_react_transition_group());
var _excluded13 = ["tag", "baseClass", "baseClassActive", "className", "cssModule", "children", "innerRef"];
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys2(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var propTypes13 = _objectSpread2(_objectSpread2({}, import_react_transition_group.Transition.propTypes), {}, {
  children: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.node), import_prop_types14.default.node]),
  tag: tagPropType,
  baseClass: import_prop_types14.default.string,
  baseClassActive: import_prop_types14.default.string,
  className: import_prop_types14.default.string,
  cssModule: import_prop_types14.default.object,
  innerRef: import_prop_types14.default.oneOfType([import_prop_types14.default.object, import_prop_types14.default.string, import_prop_types14.default.func])
});
var defaultProps13 = _objectSpread2(_objectSpread2({}, import_react_transition_group.Transition.defaultProps), {}, {
  tag: "div",
  baseClass: "fade",
  baseClassActive: "show",
  timeout: TransitionTimeouts.Fade,
  appear: true,
  enter: true,
  exit: true,
  in: true
});
function Fade(props) {
  var Tag = props.tag, baseClass = props.baseClass, baseClassActive = props.baseClassActive, className = props.className, cssModule = props.cssModule, children = props.children, innerRef = props.innerRef, otherProps = _objectWithoutPropertiesLoose(props, _excluded13);
  var transitionProps = pick(otherProps, TransitionPropTypeKeys);
  var childProps = omit(otherProps, TransitionPropTypeKeys);
  return /* @__PURE__ */ import_react15.default.createElement(import_react_transition_group.Transition, transitionProps, function(status) {
    var isActive = status === "entered";
    var classes = mapToCssModules((0, import_classnames13.default)(className, baseClass, isActive && baseClassActive), cssModule);
    return /* @__PURE__ */ import_react15.default.createElement(Tag, _extends({
      className: classes
    }, childProps, {
      ref: innerRef
    }), children);
  });
}
Fade.propTypes = propTypes13;
Fade.defaultProps = defaultProps13;
var Fade_default = Fade;

// node_modules/reactstrap/es/Card.js
init_react();
init_extends();
var import_react16 = __toESM(require_react());
var import_prop_types15 = __toESM(require_prop_types());
var import_classnames14 = __toESM(require_classnames());
var _excluded14 = ["className", "cssModule", "color", "body", "inverse", "outline", "tag", "innerRef"];
var propTypes14 = {
  tag: tagPropType,
  inverse: import_prop_types15.default.bool,
  color: import_prop_types15.default.string,
  body: import_prop_types15.default.bool,
  outline: import_prop_types15.default.bool,
  className: import_prop_types15.default.string,
  cssModule: import_prop_types15.default.object,
  innerRef: import_prop_types15.default.oneOfType([import_prop_types15.default.object, import_prop_types15.default.string, import_prop_types15.default.func])
};
var defaultProps14 = {
  tag: "div"
};
var Card = function Card2(props) {
  var className = props.className, cssModule = props.cssModule, color = props.color, body = props.body, inverse = props.inverse, outline = props.outline, Tag = props.tag, innerRef = props.innerRef, attributes = _objectWithoutPropertiesLoose(props, _excluded14);
  var classes = mapToCssModules((0, import_classnames14.default)(className, "card", inverse ? "text-white" : false, body ? "card-body" : false, color ? (outline ? "border" : "bg") + "-" + color : false), cssModule);
  return /* @__PURE__ */ import_react16.default.createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};
Card.propTypes = propTypes14;
Card.defaultProps = defaultProps14;
var Card_default = Card;

// node_modules/reactstrap/es/CardBody.js
init_react();
init_extends();
var import_react17 = __toESM(require_react());
var import_prop_types16 = __toESM(require_prop_types());
var import_classnames15 = __toESM(require_classnames());
var _excluded15 = ["className", "cssModule", "innerRef", "tag"];
var propTypes15 = {
  tag: tagPropType,
  className: import_prop_types16.default.string,
  cssModule: import_prop_types16.default.object,
  innerRef: import_prop_types16.default.oneOfType([import_prop_types16.default.object, import_prop_types16.default.string, import_prop_types16.default.func])
};
var defaultProps15 = {
  tag: "div"
};
var CardBody = function CardBody2(props) {
  var className = props.className, cssModule = props.cssModule, innerRef = props.innerRef, Tag = props.tag, attributes = _objectWithoutPropertiesLoose(props, _excluded15);
  var classes = mapToCssModules((0, import_classnames15.default)(className, "card-body"), cssModule);
  return /* @__PURE__ */ import_react17.default.createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
};
CardBody.propTypes = propTypes15;
CardBody.defaultProps = defaultProps15;
var CardBody_default = CardBody;

// node_modules/reactstrap/es/CardImg.js
init_react();
init_extends();
var import_react18 = __toESM(require_react());
var import_prop_types17 = __toESM(require_prop_types());
var import_classnames16 = __toESM(require_classnames());
var _excluded16 = ["className", "cssModule", "top", "bottom", "tag"];
var propTypes16 = {
  tag: tagPropType,
  top: import_prop_types17.default.bool,
  bottom: import_prop_types17.default.bool,
  className: import_prop_types17.default.string,
  cssModule: import_prop_types17.default.object
};
var defaultProps16 = {
  tag: "img"
};
var CardImg = function CardImg2(props) {
  var className = props.className, cssModule = props.cssModule, top = props.top, bottom = props.bottom, Tag = props.tag, attributes = _objectWithoutPropertiesLoose(props, _excluded16);
  var cardImgClassName = "card-img";
  if (top) {
    cardImgClassName = "card-img-top";
  }
  if (bottom) {
    cardImgClassName = "card-img-bottom";
  }
  var classes = mapToCssModules((0, import_classnames16.default)(className, cardImgClassName), cssModule);
  return /* @__PURE__ */ import_react18.default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};
CardImg.propTypes = propTypes16;
CardImg.defaultProps = defaultProps16;
var CardImg_default = CardImg;

// node_modules/reactstrap/es/CardSubtitle.js
init_react();
init_extends();
var import_react19 = __toESM(require_react());
var import_prop_types18 = __toESM(require_prop_types());
var import_classnames17 = __toESM(require_classnames());
var _excluded17 = ["className", "cssModule", "tag"];
var propTypes17 = {
  tag: tagPropType,
  className: import_prop_types18.default.string,
  cssModule: import_prop_types18.default.object
};
var defaultProps17 = {
  tag: "div"
};
var CardSubtitle = function CardSubtitle2(props) {
  var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = _objectWithoutPropertiesLoose(props, _excluded17);
  var classes = mapToCssModules((0, import_classnames17.default)(className, "card-subtitle"), cssModule);
  return /* @__PURE__ */ import_react19.default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};
CardSubtitle.propTypes = propTypes17;
CardSubtitle.defaultProps = defaultProps17;
var CardSubtitle_default = CardSubtitle;

// node_modules/reactstrap/es/CardText.js
init_react();
init_extends();
var import_react20 = __toESM(require_react());
var import_prop_types19 = __toESM(require_prop_types());
var import_classnames18 = __toESM(require_classnames());
var _excluded18 = ["className", "cssModule", "tag"];
var propTypes18 = {
  tag: tagPropType,
  className: import_prop_types19.default.string,
  cssModule: import_prop_types19.default.object
};
var defaultProps18 = {
  tag: "p"
};
var CardText = function CardText2(props) {
  var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = _objectWithoutPropertiesLoose(props, _excluded18);
  var classes = mapToCssModules((0, import_classnames18.default)(className, "card-text"), cssModule);
  return /* @__PURE__ */ import_react20.default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};
CardText.propTypes = propTypes18;
CardText.defaultProps = defaultProps18;
var CardText_default = CardText;

// node_modules/reactstrap/es/CardTitle.js
init_react();
init_extends();
var import_react21 = __toESM(require_react());
var import_prop_types20 = __toESM(require_prop_types());
var import_classnames19 = __toESM(require_classnames());
var _excluded19 = ["className", "cssModule", "tag"];
var propTypes19 = {
  tag: tagPropType,
  className: import_prop_types20.default.string,
  cssModule: import_prop_types20.default.object
};
var defaultProps19 = {
  tag: "div"
};
var CardTitle = function CardTitle2(props) {
  var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = _objectWithoutPropertiesLoose(props, _excluded19);
  var classes = mapToCssModules((0, import_classnames19.default)(className, "card-title"), cssModule);
  return /* @__PURE__ */ import_react21.default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};
CardTitle.propTypes = propTypes19;
CardTitle.defaultProps = defaultProps19;
var CardTitle_default = CardTitle;

// node_modules/reactstrap/es/Modal.js
init_react();
init_extends();
var import_react23 = __toESM(require_react());
var import_prop_types22 = __toESM(require_prop_types());
var import_classnames20 = __toESM(require_classnames());

// node_modules/reactstrap/es/Portal.js
init_react();
var import_react22 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());
var import_prop_types21 = __toESM(require_prop_types());
var propTypes20 = {
  children: import_prop_types21.default.node.isRequired,
  node: import_prop_types21.default.any
};
var Portal = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Portal2, _React$Component);
  function Portal2() {
    return _React$Component.apply(this, arguments) || this;
  }
  var _proto = Portal2.prototype;
  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode);
    }
    this.defaultNode = null;
  };
  _proto.render = function render() {
    if (!canUseDOM) {
      return null;
    }
    if (!this.props.node && !this.defaultNode) {
      this.defaultNode = document.createElement("div");
      document.body.appendChild(this.defaultNode);
    }
    return /* @__PURE__ */ import_react_dom2.default.createPortal(this.props.children, this.props.node || this.defaultNode);
  };
  return Portal2;
}(import_react22.default.Component);
Portal.propTypes = propTypes20;
var Portal_default = Portal;

// node_modules/reactstrap/es/Modal.js
function ownKeys3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys3(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys3(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function noop() {
}
var FadePropTypes = import_prop_types22.default.shape(Fade_default.propTypes);
var propTypes21 = {
  isOpen: import_prop_types22.default.bool,
  autoFocus: import_prop_types22.default.bool,
  centered: import_prop_types22.default.bool,
  scrollable: import_prop_types22.default.bool,
  size: import_prop_types22.default.string,
  toggle: import_prop_types22.default.func,
  keyboard: import_prop_types22.default.bool,
  role: import_prop_types22.default.string,
  labelledBy: import_prop_types22.default.string,
  backdrop: import_prop_types22.default.oneOfType([import_prop_types22.default.bool, import_prop_types22.default.oneOf(["static"])]),
  onEnter: import_prop_types22.default.func,
  onExit: import_prop_types22.default.func,
  onOpened: import_prop_types22.default.func,
  onClosed: import_prop_types22.default.func,
  children: import_prop_types22.default.node,
  className: import_prop_types22.default.string,
  wrapClassName: import_prop_types22.default.string,
  modalClassName: import_prop_types22.default.string,
  backdropClassName: import_prop_types22.default.string,
  contentClassName: import_prop_types22.default.string,
  external: import_prop_types22.default.node,
  fade: import_prop_types22.default.bool,
  cssModule: import_prop_types22.default.object,
  zIndex: import_prop_types22.default.oneOfType([import_prop_types22.default.number, import_prop_types22.default.string]),
  backdropTransition: FadePropTypes,
  modalTransition: FadePropTypes,
  innerRef: import_prop_types22.default.oneOfType([import_prop_types22.default.object, import_prop_types22.default.string, import_prop_types22.default.func]),
  unmountOnClose: import_prop_types22.default.bool,
  returnFocusAfterClose: import_prop_types22.default.bool,
  container: targetPropType,
  trapFocus: import_prop_types22.default.bool
};
var propsToOmit = Object.keys(propTypes21);
var defaultProps20 = {
  isOpen: false,
  autoFocus: true,
  centered: false,
  scrollable: false,
  role: "dialog",
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: noop,
  onClosed: noop,
  modalTransition: {
    timeout: TransitionTimeouts.Modal
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: TransitionTimeouts.Fade
  },
  unmountOnClose: true,
  returnFocusAfterClose: true,
  container: "body",
  trapFocus: false
};
var Modal = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Modal2, _React$Component);
  function Modal2(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this._element = null;
    _this._originalBodyPadding = null;
    _this.getFocusableChildren = _this.getFocusableChildren.bind(_assertThisInitialized(_this));
    _this.handleBackdropClick = _this.handleBackdropClick.bind(_assertThisInitialized(_this));
    _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind(_assertThisInitialized(_this));
    _this.handleEscape = _this.handleEscape.bind(_assertThisInitialized(_this));
    _this.handleStaticBackdropAnimation = _this.handleStaticBackdropAnimation.bind(_assertThisInitialized(_this));
    _this.handleTab = _this.handleTab.bind(_assertThisInitialized(_this));
    _this.onOpened = _this.onOpened.bind(_assertThisInitialized(_this));
    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
    _this.manageFocusAfterClose = _this.manageFocusAfterClose.bind(_assertThisInitialized(_this));
    _this.clearBackdropAnimationTimeout = _this.clearBackdropAnimationTimeout.bind(_assertThisInitialized(_this));
    _this.trapFocus = _this.trapFocus.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: false,
      showStaticBackdropAnimation: false
    };
    return _this;
  }
  var _proto = Modal2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props, isOpen = _this$props.isOpen, autoFocus = _this$props.autoFocus, onEnter = _this$props.onEnter;
    if (isOpen) {
      this.init();
      this.setState({
        isOpen: true
      });
      if (autoFocus) {
        this.setFocus();
      }
    }
    if (onEnter) {
      onEnter();
    }
    document.addEventListener("focus", this.trapFocus, true);
    this._isMounted = true;
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpen && !prevProps.isOpen) {
      this.init();
      this.setState({
        isOpen: true
      });
      return;
    }
    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
      this.setFocus();
    }
    if (this._element && prevProps.zIndex !== this.props.zIndex) {
      this._element.style.zIndex = this.props.zIndex;
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearBackdropAnimationTimeout();
    if (this.props.onExit) {
      this.props.onExit();
    }
    if (this._element) {
      this.destroy();
      if (this.props.isOpen || this.state.isOpen) {
        this.close();
      }
    }
    document.removeEventListener("focus", this.trapFocus, true);
    this._isMounted = false;
  };
  _proto.trapFocus = function trapFocus(ev) {
    if (!this.props.trapFocus) {
      return;
    }
    if (!this._element)
      return;
    if (this._dialog && this._dialog.parentNode === ev.target)
      return;
    if (this.modalIndex < Modal2.openCount - 1)
      return;
    var children = this.getFocusableChildren();
    for (var i = 0; i < children.length; i++) {
      if (children[i] === ev.target)
        return;
    }
    if (children.length > 0) {
      ev.preventDefault();
      ev.stopPropagation();
      children[0].focus();
    }
  };
  _proto.onOpened = function onOpened(node, isAppearing) {
    this.props.onOpened();
    (this.props.modalTransition.onEntered || noop)(node, isAppearing);
  };
  _proto.onClosed = function onClosed(node) {
    var unmountOnClose = this.props.unmountOnClose;
    this.props.onClosed();
    (this.props.modalTransition.onExited || noop)(node);
    if (unmountOnClose) {
      this.destroy();
    }
    this.close();
    if (this._isMounted) {
      this.setState({
        isOpen: false
      });
    }
  };
  _proto.setFocus = function setFocus() {
    if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === "function") {
      this._dialog.parentNode.focus();
    }
  };
  _proto.getFocusableChildren = function getFocusableChildren() {
    return this._element.querySelectorAll(focusableElements.join(", "));
  };
  _proto.getFocusedChild = function getFocusedChild() {
    var currentFocus;
    var focusableChildren = this.getFocusableChildren();
    try {
      currentFocus = document.activeElement;
    } catch (err) {
      currentFocus = focusableChildren[0];
    }
    return currentFocus;
  };
  _proto.handleBackdropClick = function handleBackdropClick(e) {
    if (e.target === this._mouseDownElement) {
      e.stopPropagation();
      var backdrop = this._dialog ? this._dialog.parentNode : null;
      if (backdrop && e.target === backdrop && this.props.backdrop === "static") {
        this.handleStaticBackdropAnimation();
      }
      if (!this.props.isOpen || this.props.backdrop !== true)
        return;
      if (backdrop && e.target === backdrop && this.props.toggle) {
        this.props.toggle(e);
      }
    }
  };
  _proto.handleTab = function handleTab(e) {
    if (e.which !== 9)
      return;
    if (this.modalIndex < Modal2.openCount - 1)
      return;
    var focusableChildren = this.getFocusableChildren();
    var totalFocusable = focusableChildren.length;
    if (totalFocusable === 0)
      return;
    var currentFocus = this.getFocusedChild();
    var focusedIndex = 0;
    for (var i = 0; i < totalFocusable; i += 1) {
      if (focusableChildren[i] === currentFocus) {
        focusedIndex = i;
        break;
      }
    }
    if (e.shiftKey && focusedIndex === 0) {
      e.preventDefault();
      focusableChildren[totalFocusable - 1].focus();
    } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
      e.preventDefault();
      focusableChildren[0].focus();
    }
  };
  _proto.handleBackdropMouseDown = function handleBackdropMouseDown(e) {
    this._mouseDownElement = e.target;
  };
  _proto.handleEscape = function handleEscape(e) {
    if (this.props.isOpen && e.keyCode === keyCodes.esc && this.props.toggle) {
      if (this.props.keyboard) {
        e.preventDefault();
        e.stopPropagation();
        this.props.toggle(e);
      } else if (this.props.backdrop === "static") {
        e.preventDefault();
        e.stopPropagation();
        this.handleStaticBackdropAnimation();
      }
    }
  };
  _proto.handleStaticBackdropAnimation = function handleStaticBackdropAnimation() {
    var _this2 = this;
    this.clearBackdropAnimationTimeout();
    this.setState({
      showStaticBackdropAnimation: true
    });
    this._backdropAnimationTimeout = setTimeout(function() {
      _this2.setState({
        showStaticBackdropAnimation: false
      });
    }, 100);
  };
  _proto.init = function init() {
    try {
      this._triggeringElement = document.activeElement;
    } catch (err) {
      this._triggeringElement = null;
    }
    if (!this._element) {
      this._element = document.createElement("div");
      this._element.setAttribute("tabindex", "-1");
      this._element.style.position = "relative";
      this._element.style.zIndex = this.props.zIndex;
      this._mountContainer = getTarget(this.props.container);
      this._mountContainer.appendChild(this._element);
    }
    this._originalBodyPadding = getOriginalBodyPadding();
    conditionallyUpdateScrollbar();
    if (Modal2.openCount === 0) {
      document.body.className = (0, import_classnames20.default)(document.body.className, mapToCssModules("modal-open", this.props.cssModule));
    }
    this.modalIndex = Modal2.openCount;
    Modal2.openCount += 1;
  };
  _proto.destroy = function destroy2() {
    if (this._element) {
      this._mountContainer.removeChild(this._element);
      this._element = null;
    }
    this.manageFocusAfterClose();
  };
  _proto.manageFocusAfterClose = function manageFocusAfterClose() {
    if (this._triggeringElement) {
      var returnFocusAfterClose = this.props.returnFocusAfterClose;
      if (this._triggeringElement.focus && returnFocusAfterClose)
        this._triggeringElement.focus();
      this._triggeringElement = null;
    }
  };
  _proto.close = function close() {
    if (Modal2.openCount <= 1) {
      var modalOpenClassName = mapToCssModules("modal-open", this.props.cssModule);
      var modalOpenClassNameRegex = new RegExp("(^| )" + modalOpenClassName + "( |$)");
      document.body.className = document.body.className.replace(modalOpenClassNameRegex, " ").trim();
    }
    this.manageFocusAfterClose();
    Modal2.openCount = Math.max(0, Modal2.openCount - 1);
    setScrollbarWidth(this._originalBodyPadding);
  };
  _proto.renderModalDialog = function renderModalDialog() {
    var _classNames, _this3 = this;
    var attributes = omit(this.props, propsToOmit);
    var dialogBaseClass = "modal-dialog";
    return /* @__PURE__ */ import_react23.default.createElement("div", _extends({}, attributes, {
      className: mapToCssModules((0, import_classnames20.default)(dialogBaseClass, this.props.className, (_classNames = {}, _classNames["modal-" + this.props.size] = this.props.size, _classNames[dialogBaseClass + "-centered"] = this.props.centered, _classNames[dialogBaseClass + "-scrollable"] = this.props.scrollable, _classNames)), this.props.cssModule),
      role: "document",
      ref: function ref(c) {
        _this3._dialog = c;
      }
    }), /* @__PURE__ */ import_react23.default.createElement("div", {
      className: mapToCssModules((0, import_classnames20.default)("modal-content", this.props.contentClassName), this.props.cssModule)
    }, this.props.children));
  };
  _proto.render = function render() {
    var unmountOnClose = this.props.unmountOnClose;
    if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
      var isModalHidden = !!this._element && !this.state.isOpen && !unmountOnClose;
      this._element.style.display = isModalHidden ? "none" : "block";
      var _this$props2 = this.props, wrapClassName = _this$props2.wrapClassName, modalClassName = _this$props2.modalClassName, backdropClassName = _this$props2.backdropClassName, cssModule = _this$props2.cssModule, isOpen = _this$props2.isOpen, backdrop = _this$props2.backdrop, role = _this$props2.role, labelledBy = _this$props2.labelledBy, external = _this$props2.external, innerRef = _this$props2.innerRef;
      var modalAttributes = {
        onClick: this.handleBackdropClick,
        onMouseDown: this.handleBackdropMouseDown,
        onKeyUp: this.handleEscape,
        onKeyDown: this.handleTab,
        style: {
          display: "block"
        },
        "aria-labelledby": labelledBy,
        role,
        tabIndex: "-1"
      };
      var hasTransition = this.props.fade;
      var modalTransition = _objectSpread3(_objectSpread3(_objectSpread3({}, Fade_default.defaultProps), this.props.modalTransition), {}, {
        baseClass: hasTransition ? this.props.modalTransition.baseClass : "",
        timeout: hasTransition ? this.props.modalTransition.timeout : 0
      });
      var backdropTransition = _objectSpread3(_objectSpread3(_objectSpread3({}, Fade_default.defaultProps), this.props.backdropTransition), {}, {
        baseClass: hasTransition ? this.props.backdropTransition.baseClass : "",
        timeout: hasTransition ? this.props.backdropTransition.timeout : 0
      });
      var Backdrop = backdrop && (hasTransition ? /* @__PURE__ */ import_react23.default.createElement(Fade_default, _extends({}, backdropTransition, {
        in: isOpen && !!backdrop,
        cssModule,
        className: mapToCssModules((0, import_classnames20.default)("modal-backdrop", backdropClassName), cssModule)
      })) : /* @__PURE__ */ import_react23.default.createElement("div", {
        className: mapToCssModules((0, import_classnames20.default)("modal-backdrop", "show", backdropClassName), cssModule)
      }));
      return /* @__PURE__ */ import_react23.default.createElement(Portal_default, {
        node: this._element
      }, /* @__PURE__ */ import_react23.default.createElement("div", {
        className: mapToCssModules(wrapClassName)
      }, /* @__PURE__ */ import_react23.default.createElement(Fade_default, _extends({}, modalAttributes, modalTransition, {
        in: isOpen,
        onEntered: this.onOpened,
        onExited: this.onClosed,
        cssModule,
        className: mapToCssModules((0, import_classnames20.default)("modal", modalClassName, this.state.showStaticBackdropAnimation && "modal-static"), cssModule),
        innerRef
      }), external, this.renderModalDialog()), Backdrop));
    }
    return null;
  };
  _proto.clearBackdropAnimationTimeout = function clearBackdropAnimationTimeout() {
    if (this._backdropAnimationTimeout) {
      clearTimeout(this._backdropAnimationTimeout);
      this._backdropAnimationTimeout = void 0;
    }
  };
  return Modal2;
}(import_react23.default.Component);
Modal.propTypes = propTypes21;
Modal.defaultProps = defaultProps20;
Modal.openCount = 0;
var Modal_default = Modal;

// node_modules/reactstrap/es/ModalHeader.js
init_react();
init_extends();
var import_react24 = __toESM(require_react());
var import_prop_types23 = __toESM(require_prop_types());
var import_classnames21 = __toESM(require_classnames());
var _excluded20 = ["className", "cssModule", "children", "toggle", "tag", "wrapTag", "closeAriaLabel", "charCode", "close"];
var propTypes22 = {
  tag: tagPropType,
  wrapTag: tagPropType,
  toggle: import_prop_types23.default.func,
  className: import_prop_types23.default.string,
  cssModule: import_prop_types23.default.object,
  children: import_prop_types23.default.node,
  closeAriaLabel: import_prop_types23.default.string,
  charCode: import_prop_types23.default.oneOfType([import_prop_types23.default.string, import_prop_types23.default.number]),
  close: import_prop_types23.default.object
};
var defaultProps21 = {
  tag: "h5",
  wrapTag: "div",
  closeAriaLabel: "Close",
  charCode: 215
};
var ModalHeader = function ModalHeader2(props) {
  var closeButton;
  var className = props.className, cssModule = props.cssModule, children = props.children, toggle = props.toggle, Tag = props.tag, WrapTag = props.wrapTag, closeAriaLabel = props.closeAriaLabel, charCode = props.charCode, close = props.close, attributes = _objectWithoutPropertiesLoose(props, _excluded20);
  var classes = mapToCssModules((0, import_classnames21.default)(className, "modal-header"), cssModule);
  if (!close && toggle) {
    var closeIcon = typeof charCode === "number" ? String.fromCharCode(charCode) : charCode;
    closeButton = /* @__PURE__ */ import_react24.default.createElement("button", {
      type: "button",
      onClick: toggle,
      className: mapToCssModules("close", cssModule),
      "aria-label": closeAriaLabel
    }, /* @__PURE__ */ import_react24.default.createElement("span", {
      "aria-hidden": "true"
    }, closeIcon));
  }
  return /* @__PURE__ */ import_react24.default.createElement(WrapTag, _extends({}, attributes, {
    className: classes
  }), /* @__PURE__ */ import_react24.default.createElement(Tag, {
    className: mapToCssModules("modal-title", cssModule)
  }, children), close || closeButton);
};
ModalHeader.propTypes = propTypes22;
ModalHeader.defaultProps = defaultProps21;
var ModalHeader_default = ModalHeader;

// node_modules/reactstrap/es/ModalBody.js
init_react();
init_extends();
var import_react25 = __toESM(require_react());
var import_prop_types24 = __toESM(require_prop_types());
var import_classnames22 = __toESM(require_classnames());
var _excluded21 = ["className", "cssModule", "tag"];
var propTypes23 = {
  tag: tagPropType,
  className: import_prop_types24.default.string,
  cssModule: import_prop_types24.default.object
};
var defaultProps22 = {
  tag: "div"
};
var ModalBody = function ModalBody2(props) {
  var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = _objectWithoutPropertiesLoose(props, _excluded21);
  var classes = mapToCssModules((0, import_classnames22.default)(className, "modal-body"), cssModule);
  return /* @__PURE__ */ import_react25.default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};
ModalBody.propTypes = propTypes23;
ModalBody.defaultProps = defaultProps22;
var ModalBody_default = ModalBody;

// node_modules/reactstrap/es/ModalFooter.js
init_react();
init_extends();
var import_react26 = __toESM(require_react());
var import_prop_types25 = __toESM(require_prop_types());
var import_classnames23 = __toESM(require_classnames());
var _excluded22 = ["className", "cssModule", "tag"];
var propTypes24 = {
  tag: tagPropType,
  className: import_prop_types25.default.string,
  cssModule: import_prop_types25.default.object
};
var defaultProps23 = {
  tag: "div"
};
var ModalFooter = function ModalFooter2(props) {
  var className = props.className, cssModule = props.cssModule, Tag = props.tag, attributes = _objectWithoutPropertiesLoose(props, _excluded22);
  var classes = mapToCssModules((0, import_classnames23.default)(className, "modal-footer"), cssModule);
  return /* @__PURE__ */ import_react26.default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};
ModalFooter.propTypes = propTypes24;
ModalFooter.defaultProps = defaultProps23;
var ModalFooter_default = ModalFooter;

// node_modules/reactstrap/es/Collapse.js
init_react();
init_extends();
var import_react27 = __toESM(require_react());
var import_prop_types26 = __toESM(require_prop_types());
var import_classnames24 = __toESM(require_classnames());
var import_react_transition_group2 = __toESM(require_react_transition_group());
var _excluded23 = ["tag", "isOpen", "className", "navbar", "cssModule", "children", "innerRef"];
var _transitionStatusToCl;
function ownKeys4(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys4(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys4(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var propTypes25 = _objectSpread4(_objectSpread4({}, import_react_transition_group2.Transition.propTypes), {}, {
  isOpen: import_prop_types26.default.bool,
  children: import_prop_types26.default.oneOfType([import_prop_types26.default.arrayOf(import_prop_types26.default.node), import_prop_types26.default.node]),
  tag: tagPropType,
  className: import_prop_types26.default.node,
  navbar: import_prop_types26.default.bool,
  cssModule: import_prop_types26.default.object,
  innerRef: import_prop_types26.default.oneOfType([import_prop_types26.default.func, import_prop_types26.default.string, import_prop_types26.default.object])
});
var defaultProps24 = _objectSpread4(_objectSpread4({}, import_react_transition_group2.Transition.defaultProps), {}, {
  isOpen: false,
  appear: false,
  enter: true,
  exit: true,
  tag: "div",
  timeout: TransitionTimeouts.Collapse
});
var transitionStatusToClassHash = (_transitionStatusToCl = {}, _transitionStatusToCl[TransitionStatuses.ENTERING] = "collapsing", _transitionStatusToCl[TransitionStatuses.ENTERED] = "collapse show", _transitionStatusToCl[TransitionStatuses.EXITING] = "collapsing", _transitionStatusToCl[TransitionStatuses.EXITED] = "collapse", _transitionStatusToCl);
function getTransitionClass(status) {
  return transitionStatusToClassHash[status] || "collapse";
}
function getHeight(node) {
  return node.scrollHeight;
}
var Collapse = /* @__PURE__ */ function(_Component) {
  _inheritsLoose(Collapse2, _Component);
  function Collapse2(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.state = {
      height: null
    };
    ["onEntering", "onEntered", "onExit", "onExiting", "onExited"].forEach(function(name) {
      _this[name] = _this[name].bind(_assertThisInitialized(_this));
    });
    return _this;
  }
  var _proto = Collapse2.prototype;
  _proto.onEntering = function onEntering(node, isAppearing) {
    this.setState({
      height: getHeight(node)
    });
    this.props.onEntering(node, isAppearing);
  };
  _proto.onEntered = function onEntered(node, isAppearing) {
    this.setState({
      height: null
    });
    this.props.onEntered(node, isAppearing);
  };
  _proto.onExit = function onExit(node) {
    this.setState({
      height: getHeight(node)
    });
    this.props.onExit(node);
  };
  _proto.onExiting = function onExiting(node) {
    var _unused = node.offsetHeight;
    this.setState({
      height: 0
    });
    this.props.onExiting(node);
  };
  _proto.onExited = function onExited(node) {
    this.setState({
      height: null
    });
    this.props.onExited(node);
  };
  _proto.render = function render() {
    var _this2 = this;
    var _this$props = this.props, Tag = _this$props.tag, isOpen = _this$props.isOpen, className = _this$props.className, navbar = _this$props.navbar, cssModule = _this$props.cssModule, children = _this$props.children, innerRef = _this$props.innerRef, otherProps = _objectWithoutPropertiesLoose(_this$props, _excluded23);
    var height = this.state.height;
    var transitionProps = pick(otherProps, TransitionPropTypeKeys);
    var childProps = omit(otherProps, TransitionPropTypeKeys);
    return /* @__PURE__ */ import_react27.default.createElement(import_react_transition_group2.Transition, _extends({}, transitionProps, {
      in: isOpen,
      onEntering: this.onEntering,
      onEntered: this.onEntered,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }), function(status) {
      var collapseClass = getTransitionClass(status);
      var classes = mapToCssModules((0, import_classnames24.default)(className, collapseClass, navbar && "navbar-collapse"), cssModule);
      var style = height === null ? null : {
        height
      };
      return /* @__PURE__ */ import_react27.default.createElement(Tag, _extends({}, childProps, {
        style: _objectSpread4(_objectSpread4({}, childProps.style), style),
        className: classes,
        ref: _this2.props.innerRef
      }), children);
    });
  };
  return Collapse2;
}(import_react27.Component);
Collapse.propTypes = propTypes25;
Collapse.defaultProps = defaultProps24;
var Collapse_default = Collapse;

// node_modules/reactstrap/es/UncontrolledDropdown.js
init_react();
init_extends();
var import_react28 = __toESM(require_react());
var import_prop_types27 = __toESM(require_prop_types());
function ownKeys5(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys5(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys5(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var omitKeys = ["defaultOpen"];
var UncontrolledDropdown = /* @__PURE__ */ function(_Component) {
  _inheritsLoose(UncontrolledDropdown2, _Component);
  function UncontrolledDropdown2(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = UncontrolledDropdown2.prototype;
  _proto.toggle = function toggle(e) {
    var _this2 = this;
    var isOpen = !this.state.isOpen;
    this.setState({
      isOpen
    }, function() {
      if (_this2.props.onToggle) {
        _this2.props.onToggle(e, isOpen);
      }
    });
  };
  _proto.render = function render() {
    return /* @__PURE__ */ import_react28.default.createElement(Dropdown_default, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys)));
  };
  return UncontrolledDropdown2;
}(import_react28.Component);
UncontrolledDropdown.propTypes = _objectSpread5({
  defaultOpen: import_prop_types27.default.bool,
  onToggle: import_prop_types27.default.func
}, Dropdown_default.propTypes);

// app/old-app/util/index.js
init_react();
var import_axios = __toESM(require_axios2());
var import_image_url = __toESM(require_image_url_umd());
var SanityClient = require_sanityClient();
var sanity = new SanityClient({
  projectId: "bhphg9ym",
  dataset: "production",
  useCdn: true
});
var builder = (0, import_image_url.default)(sanity);
function sanityUrlFor(source) {
  return builder.image(source);
}
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }
  if (/android/i.test(userAgent)) {
    return "Android";
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }
  return "unknown";
}
async function getVideos(vimeoFolder) {
  const options = {
    url: `https://api.vimeo.com/me/projects/${vimeoFolder}/videos?direction=desc`,
    headers: {
      Authorization: process.env.REACT_APP_VIMEO_KEY
    }
  };
  return (0, import_axios.default)(options);
}
function isOver(date) {
  const end = new Date();
  const dateArr = date.split("-");
  end.setFullYear(dateArr[0]);
  end.setMonth(dateArr[1] - 1);
  end.setDate(dateArr[2]);
  return end.getTime() < Date.now();
}
function livestreamHappeningNow() {
  const getCstOffset = () => {
    const stdTimezoneOffset = () => {
      var jan = new Date(0, 1);
      var jul = new Date(6, 1);
      return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
    };
    var today = new Date();
    const isDstObserved = (today2) => {
      return today2.getTimezoneOffset() < stdTimezoneOffset();
    };
    if (isDstObserved(today)) {
      return -5;
    } else {
      return -6;
    }
  };
  const d = new Date();
  const localTime = d.getTime();
  const localOffset = d.getTimezoneOffset() * 60 * 1e3;
  const utcTime = localTime + localOffset;
  const cstOffset = getCstOffset();
  const usa = utcTime + 60 * 60 * 1e3 * cstOffset;
  const nd = new Date(usa);
  if (process.env.REACT_APP_STREAM !== "none") {
    return process.env.REACT_APP_STREAM;
  } else {
    if (nd.getDay() === 3 && nd.getHours() >= 18 && nd.getHours() <= 21) {
      return "wednesday";
    } else if (nd.getDay() === 0 && nd.getHours() >= 10 && nd.getHours() <= 13) {
      return "sunday";
    }
  }
  return null;
}
function nthWeekdayOfMonth(weekday, n, testDate = new Date()) {
  if (typeof weekday !== "number" || typeof n !== "number") {
    throw new Error("Function nthWeekdayOfMonth Usage Error: nthWeekdayOfMonth(<weeekday 0-6>, <n>, [testDate])");
  }
  weekday = Math.floor(weekday % 7);
  n = Math.floor(n);
  let monthBegin = new Date(testDate.getFullYear(), testDate.getMonth(), 1);
  let monthBeginWeekday = monthBegin.getDay();
  let daysUntilFirstWeekday = (weekday - monthBeginWeekday + 7) % 7;
  let nthWeekdayDate = 1 + daysUntilFirstWeekday + 7 * (n - 1);
  return new Date(testDate.getFullYear(), testDate.getMonth(), nthWeekdayDate);
}
function nthSundayHasCome(n, testDate = new Date()) {
  if (typeof n !== "number") {
    throw new Error("Function nthSundayHasCome Usage Error: nthSundayHasCome(<n>, [testDate])");
  }
  return testDate.getTime() >= nthWeekdayOfMonth(0, n, testDate).getTime();
}
function getOrdinalNum(number) {
  let selector;
  if (number <= 0) {
    selector = 4;
  } else if (number > 3 && number < 21 || number % 10 > 3) {
    selector = 0;
  } else {
    selector = number % 10;
  }
  return number + ["th", "st", "nd", "rd", ""][selector];
}

// app/old-app/components/alert-bubble.js
init_react();
var import_react29 = __toESM(require_react());
function AlertBubble() {
  const [announcement, setAnnouncement] = (0, import_react29.useState)();
  let page = useLocation();
  const announcementQuery = `*[_type == "specialAnnouncement" && expirationDate > $now && $currentPage in whereToDisplay ] {
        title,
        body,
        expirationDate,
        alertBubbleText,
        whereToDisplay,
        _id
    }`;
  const params = { currentPage: page.pathname };
  (0, import_react29.useEffect)(() => {
    sanity.fetch(announcementQuery, params).then((result) => {
      setAnnouncement(result[0]);
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  return /* @__PURE__ */ import_react29.default.createElement("div", {
    className: `alert-bubble ${announcement != null ? "active" : "hidden"}`
  }, announcement?.alertBubbleText, " ", /* @__PURE__ */ import_react29.default.createElement(Link, {
    to: `${announcement?._id}`
  }, "Read more"));
}

export {
  button_default,
  _objectWithoutPropertiesLoose,
  require_react_is,
  require_prop_types,
  require_classnames,
  Navbar_default,
  NavbarBrand_default,
  NavbarToggler_default,
  Nav_default,
  NavItem_default,
  _inheritsLoose,
  NavLink_default,
  Button_default,
  _defineProperty,
  DropdownItem_default,
  DropdownMenu_default,
  DropdownToggle_default,
  require_interopRequireDefault,
  Card_default,
  CardBody_default,
  CardImg_default,
  CardSubtitle_default,
  CardText_default,
  CardTitle_default,
  Modal_default,
  ModalHeader_default,
  ModalBody_default,
  ModalFooter_default,
  Collapse_default,
  UncontrolledDropdown,
  Spinner_default,
  require_axios2 as require_axios,
  require_image_url_umd,
  sanity,
  sanityUrlFor,
  getMobileOperatingSystem,
  getVideos,
  isOver,
  livestreamHappeningNow,
  nthWeekdayOfMonth,
  nthSundayHasCome,
  getOrdinalNum,
  AlertBubble
};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/*! https://mths.be/punycode v1.4.1 by @mathias */
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
//# sourceMappingURL=/build/_shared/chunk-VUX7UZUN.js.map
