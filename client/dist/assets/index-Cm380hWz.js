function jy(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function Dy(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var th = { exports: {} },
  Qo = {},
  nh = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bi = Symbol.for("react.element"),
  Uy = Symbol.for("react.portal"),
  zy = Symbol.for("react.fragment"),
  Fy = Symbol.for("react.strict_mode"),
  $y = Symbol.for("react.profiler"),
  By = Symbol.for("react.provider"),
  Vy = Symbol.for("react.context"),
  Hy = Symbol.for("react.forward_ref"),
  Wy = Symbol.for("react.suspense"),
  Gy = Symbol.for("react.memo"),
  qy = Symbol.for("react.lazy"),
  Ed = Symbol.iterator;
function Ky(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ed && e[Ed]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var rh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ih = Object.assign,
  sh = {};
function Dr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = sh),
    (this.updater = n || rh);
}
Dr.prototype.isReactComponent = {};
Dr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Dr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function oh() {}
oh.prototype = Dr.prototype;
function zu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = sh),
    (this.updater = n || rh);
}
var Fu = (zu.prototype = new oh());
Fu.constructor = zu;
ih(Fu, Dr.prototype);
Fu.isPureReactComponent = !0;
var Td = Array.isArray,
  ah = Object.prototype.hasOwnProperty,
  $u = { current: null },
  lh = { key: !0, ref: !0, __self: !0, __source: !0 };
function uh(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      ah.call(t, r) && !lh.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Bi,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: $u.current,
  };
}
function Xy(e, t) {
  return {
    $$typeof: Bi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Bu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Bi;
}
function Yy(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Cd = /\/+/g;
function Ca(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Yy("" + e.key)
    : t.toString(36);
}
function Rs(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Bi:
          case Uy:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + Ca(o, 0) : r),
      Td(i)
        ? ((n = ""),
          e != null && (n = e.replace(Cd, "$&/") + "/"),
          Rs(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Bu(i) &&
            (i = Xy(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Cd, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Td(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + Ca(s, l);
      o += Rs(s, t, n, a, i);
    }
  else if (((a = Ky(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + Ca(s, l++)), (o += Rs(s, t, n, a, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function os(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Rs(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function Qy(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ce = { current: null },
  Ls = { transition: null },
  Jy = {
    ReactCurrentDispatcher: Ce,
    ReactCurrentBatchConfig: Ls,
    ReactCurrentOwner: $u,
  };
function ch() {
  throw Error("act(...) is not supported in production builds of React.");
}
U.Children = {
  map: os,
  forEach: function (e, t, n) {
    os(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      os(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      os(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Bu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
U.Component = Dr;
U.Fragment = zy;
U.Profiler = $y;
U.PureComponent = zu;
U.StrictMode = Fy;
U.Suspense = Wy;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jy;
U.act = ch;
U.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ih({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = $u.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      ah.call(t, a) &&
        !lh.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Bi, type: e.type, key: i, ref: s, props: r, _owner: o };
};
U.createContext = function (e) {
  return (
    (e = {
      $$typeof: Vy,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: By, _context: e }),
    (e.Consumer = e)
  );
};
U.createElement = uh;
U.createFactory = function (e) {
  var t = uh.bind(null, e);
  return (t.type = e), t;
};
U.createRef = function () {
  return { current: null };
};
U.forwardRef = function (e) {
  return { $$typeof: Hy, render: e };
};
U.isValidElement = Bu;
U.lazy = function (e) {
  return { $$typeof: qy, _payload: { _status: -1, _result: e }, _init: Qy };
};
U.memo = function (e, t) {
  return { $$typeof: Gy, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function (e) {
  var t = Ls.transition;
  Ls.transition = {};
  try {
    e();
  } finally {
    Ls.transition = t;
  }
};
U.unstable_act = ch;
U.useCallback = function (e, t) {
  return Ce.current.useCallback(e, t);
};
U.useContext = function (e) {
  return Ce.current.useContext(e);
};
U.useDebugValue = function () {};
U.useDeferredValue = function (e) {
  return Ce.current.useDeferredValue(e);
};
U.useEffect = function (e, t) {
  return Ce.current.useEffect(e, t);
};
U.useId = function () {
  return Ce.current.useId();
};
U.useImperativeHandle = function (e, t, n) {
  return Ce.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function (e, t) {
  return Ce.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function (e, t) {
  return Ce.current.useLayoutEffect(e, t);
};
U.useMemo = function (e, t) {
  return Ce.current.useMemo(e, t);
};
U.useReducer = function (e, t, n) {
  return Ce.current.useReducer(e, t, n);
};
U.useRef = function (e) {
  return Ce.current.useRef(e);
};
U.useState = function (e) {
  return Ce.current.useState(e);
};
U.useSyncExternalStore = function (e, t, n) {
  return Ce.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function () {
  return Ce.current.useTransition();
};
U.version = "18.3.1";
nh.exports = U;
var C = nh.exports;
const V = Dy(C),
  Sl = jy({ __proto__: null, default: V }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zy = C,
  e0 = Symbol.for("react.element"),
  t0 = Symbol.for("react.fragment"),
  n0 = Object.prototype.hasOwnProperty,
  r0 = Zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  i0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function dh(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) n0.call(t, r) && !i0.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: e0,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: r0.current,
  };
}
Qo.Fragment = t0;
Qo.jsx = dh;
Qo.jsxs = dh;
th.exports = Qo;
var m = th.exports,
  xl = {},
  fh = { exports: {} },
  We = {},
  ph = { exports: {} },
  hh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, A) {
    var j = O.length;
    O.push(A);
    e: for (; 0 < j; ) {
      var Q = (j - 1) >>> 1,
        se = O[Q];
      if (0 < i(se, A)) (O[Q] = A), (O[j] = se), (j = Q);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var A = O[0],
      j = O.pop();
    if (j !== A) {
      O[0] = j;
      e: for (var Q = 0, se = O.length, is = se >>> 1; Q < is; ) {
        var Pn = 2 * (Q + 1) - 1,
          Ta = O[Pn],
          In = Pn + 1,
          ss = O[In];
        if (0 > i(Ta, j))
          In < se && 0 > i(ss, Ta)
            ? ((O[Q] = ss), (O[In] = j), (Q = In))
            : ((O[Q] = Ta), (O[Pn] = j), (Q = Pn));
        else if (In < se && 0 > i(ss, j)) (O[Q] = ss), (O[In] = j), (Q = In);
        else break e;
      }
    }
    return A;
  }
  function i(O, A) {
    var j = O.sortIndex - A.sortIndex;
    return j !== 0 ? j : O.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    v = !1,
    y = !1,
    _ = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(O) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= O)
        r(u), (A.sortIndex = A.expirationTime), t(a, A);
      else break;
      A = n(u);
    }
  }
  function w(O) {
    if (((_ = !1), h(O), !y))
      if (n(a) !== null) (y = !0), me(x);
      else {
        var A = n(u);
        A !== null && bn(w, A.startTime - O);
      }
  }
  function x(O, A) {
    (y = !1), _ && ((_ = !1), p(b), (b = -1)), (v = !0);
    var j = f;
    try {
      for (
        h(A), d = n(a);
        d !== null && (!(d.expirationTime > A) || (O && !N()));

      ) {
        var Q = d.callback;
        if (typeof Q == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var se = Q(d.expirationTime <= A);
          (A = e.unstable_now()),
            typeof se == "function" ? (d.callback = se) : d === n(a) && r(a),
            h(A);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var is = !0;
      else {
        var Pn = n(u);
        Pn !== null && bn(w, Pn.startTime - A), (is = !1);
      }
      return is;
    } finally {
      (d = null), (f = j), (v = !1);
    }
  }
  var E = !1,
    P = null,
    b = -1,
    I = 5,
    T = -1;
  function N() {
    return !(e.unstable_now() - T < I);
  }
  function L() {
    if (P !== null) {
      var O = e.unstable_now();
      T = O;
      var A = !0;
      try {
        A = P(!0, O);
      } finally {
        A ? M() : ((E = !1), (P = null));
      }
    } else E = !1;
  }
  var M;
  if (typeof g == "function")
    M = function () {
      g(L);
    };
  else if (typeof MessageChannel < "u") {
    var F = new MessageChannel(),
      G = F.port2;
    (F.port1.onmessage = L),
      (M = function () {
        G.postMessage(null);
      });
  } else
    M = function () {
      S(L, 0);
    };
  function me(O) {
    (P = O), E || ((E = !0), M());
  }
  function bn(O, A) {
    b = S(function () {
      O(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), me(x));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (I = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (O) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = f;
      }
      var j = f;
      f = A;
      try {
        return O();
      } finally {
        f = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, A) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var j = f;
      f = O;
      try {
        return A();
      } finally {
        f = j;
      }
    }),
    (e.unstable_scheduleCallback = function (O, A, j) {
      var Q = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? Q + j : Q))
          : (j = Q),
        O)
      ) {
        case 1:
          var se = -1;
          break;
        case 2:
          se = 250;
          break;
        case 5:
          se = 1073741823;
          break;
        case 4:
          se = 1e4;
          break;
        default:
          se = 5e3;
      }
      return (
        (se = j + se),
        (O = {
          id: c++,
          callback: A,
          priorityLevel: O,
          startTime: j,
          expirationTime: se,
          sortIndex: -1,
        }),
        j > Q
          ? ((O.sortIndex = j),
            t(u, O),
            n(a) === null &&
              O === n(u) &&
              (_ ? (p(b), (b = -1)) : (_ = !0), bn(w, j - Q)))
          : ((O.sortIndex = se), t(a, O), y || v || ((y = !0), me(x))),
        O
      );
    }),
    (e.unstable_shouldYield = N),
    (e.unstable_wrapCallback = function (O) {
      var A = f;
      return function () {
        var j = f;
        f = A;
        try {
          return O.apply(this, arguments);
        } finally {
          f = j;
        }
      };
    });
})(hh);
ph.exports = hh;
var s0 = ph.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var o0 = C,
  Be = s0;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var mh = new Set(),
  wi = {};
function Jn(e, t) {
  br(e, t), br(e + "Capture", t);
}
function br(e, t) {
  for (wi[e] = t, e = 0; e < t.length; e++) mh.add(t[e]);
}
var Mt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  El = Object.prototype.hasOwnProperty,
  a0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  bd = {},
  Pd = {};
function l0(e) {
  return El.call(Pd, e)
    ? !0
    : El.call(bd, e)
    ? !1
    : a0.test(e)
    ? (Pd[e] = !0)
    : ((bd[e] = !0), !1);
}
function u0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function c0(e, t, n, r) {
  if (t === null || typeof t > "u" || u0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function be(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var he = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    he[e] = new be(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  he[t] = new be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  he[e] = new be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  he[e] = new be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    he[e] = new be(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  he[e] = new be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  he[e] = new be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  he[e] = new be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  he[e] = new be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Vu = /[\-:]([a-z])/g;
function Hu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Vu, Hu);
    he[t] = new be(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Vu, Hu);
    he[t] = new be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Vu, Hu);
  he[t] = new be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  he[e] = new be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
he.xlinkHref = new be(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  he[e] = new be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Wu(e, t, n, r) {
  var i = he.hasOwnProperty(t) ? he[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (c0(t, n, i, r) && (n = null),
    r || i === null
      ? l0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var $t = o0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  as = Symbol.for("react.element"),
  ir = Symbol.for("react.portal"),
  sr = Symbol.for("react.fragment"),
  Gu = Symbol.for("react.strict_mode"),
  Tl = Symbol.for("react.profiler"),
  gh = Symbol.for("react.provider"),
  vh = Symbol.for("react.context"),
  qu = Symbol.for("react.forward_ref"),
  Cl = Symbol.for("react.suspense"),
  bl = Symbol.for("react.suspense_list"),
  Ku = Symbol.for("react.memo"),
  Gt = Symbol.for("react.lazy"),
  yh = Symbol.for("react.offscreen"),
  Id = Symbol.iterator;
function qr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Id && e[Id]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ee = Object.assign,
  ba;
function ni(e) {
  if (ba === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ba = (t && t[1]) || "";
    }
  return (
    `
` +
    ba +
    e
  );
}
var Pa = !1;
function Ia(e, t) {
  if (!e || Pa) return "";
  Pa = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && i[o] !== s[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== s[l])) {
                var a =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (Pa = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ni(e) : "";
}
function d0(e) {
  switch (e.tag) {
    case 5:
      return ni(e.type);
    case 16:
      return ni("Lazy");
    case 13:
      return ni("Suspense");
    case 19:
      return ni("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ia(e.type, !1)), e;
    case 11:
      return (e = Ia(e.type.render, !1)), e;
    case 1:
      return (e = Ia(e.type, !0)), e;
    default:
      return "";
  }
}
function Pl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case sr:
      return "Fragment";
    case ir:
      return "Portal";
    case Tl:
      return "Profiler";
    case Gu:
      return "StrictMode";
    case Cl:
      return "Suspense";
    case bl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case vh:
        return (e.displayName || "Context") + ".Consumer";
      case gh:
        return (e._context.displayName || "Context") + ".Provider";
      case qu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ku:
        return (
          (t = e.displayName || null), t !== null ? t : Pl(e.type) || "Memo"
        );
      case Gt:
        (t = e._payload), (e = e._init);
        try {
          return Pl(e(t));
        } catch {}
    }
  return null;
}
function f0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Pl(t);
    case 8:
      return t === Gu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function vn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function wh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function p0(e) {
  var t = wh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ls(e) {
  e._valueTracker || (e._valueTracker = p0(e));
}
function _h(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = wh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ro(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Il(e, t) {
  var n = t.checked;
  return ee({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function kd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = vn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Sh(e, t) {
  (t = t.checked), t != null && Wu(e, "checked", t, !1);
}
function kl(e, t) {
  Sh(e, t);
  var n = vn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Nl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Nl(e, t.type, vn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Nd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Nl(e, t, n) {
  (t !== "number" || ro(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ri = Array.isArray;
function gr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + vn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ol(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return ee({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Od(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (ri(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: vn(n) };
}
function xh(e, t) {
  var n = vn(t.value),
    r = vn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Rd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Eh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Rl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Eh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var us,
  Th = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        us = us || document.createElement("div"),
          us.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = us.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function _i(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ai = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  h0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ai).forEach(function (e) {
  h0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ai[t] = ai[e]);
  });
});
function Ch(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ai.hasOwnProperty(e) && ai[e])
    ? ("" + t).trim()
    : t + "px";
}
function bh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Ch(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var m0 = ee(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ll(e, t) {
  if (t) {
    if (m0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Al(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ml = null;
function Xu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var jl = null,
  vr = null,
  yr = null;
function Ld(e) {
  if ((e = Wi(e))) {
    if (typeof jl != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = na(t)), jl(e.stateNode, e.type, t));
  }
}
function Ph(e) {
  vr ? (yr ? yr.push(e) : (yr = [e])) : (vr = e);
}
function Ih() {
  if (vr) {
    var e = vr,
      t = yr;
    if (((yr = vr = null), Ld(e), t)) for (e = 0; e < t.length; e++) Ld(t[e]);
  }
}
function kh(e, t) {
  return e(t);
}
function Nh() {}
var ka = !1;
function Oh(e, t, n) {
  if (ka) return e(t, n);
  ka = !0;
  try {
    return kh(e, t, n);
  } finally {
    (ka = !1), (vr !== null || yr !== null) && (Nh(), Ih());
  }
}
function Si(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = na(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var Dl = !1;
if (Mt)
  try {
    var Kr = {};
    Object.defineProperty(Kr, "passive", {
      get: function () {
        Dl = !0;
      },
    }),
      window.addEventListener("test", Kr, Kr),
      window.removeEventListener("test", Kr, Kr);
  } catch {
    Dl = !1;
  }
function g0(e, t, n, r, i, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var li = !1,
  io = null,
  so = !1,
  Ul = null,
  v0 = {
    onError: function (e) {
      (li = !0), (io = e);
    },
  };
function y0(e, t, n, r, i, s, o, l, a) {
  (li = !1), (io = null), g0.apply(v0, arguments);
}
function w0(e, t, n, r, i, s, o, l, a) {
  if ((y0.apply(this, arguments), li)) {
    if (li) {
      var u = io;
      (li = !1), (io = null);
    } else throw Error(k(198));
    so || ((so = !0), (Ul = u));
  }
}
function Zn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Rh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ad(e) {
  if (Zn(e) !== e) throw Error(k(188));
}
function _0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Zn(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Ad(i), e;
        if (s === r) return Ad(i), t;
        s = s.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function Lh(e) {
  return (e = _0(e)), e !== null ? Ah(e) : null;
}
function Ah(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ah(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Mh = Be.unstable_scheduleCallback,
  Md = Be.unstable_cancelCallback,
  S0 = Be.unstable_shouldYield,
  x0 = Be.unstable_requestPaint,
  re = Be.unstable_now,
  E0 = Be.unstable_getCurrentPriorityLevel,
  Yu = Be.unstable_ImmediatePriority,
  jh = Be.unstable_UserBlockingPriority,
  oo = Be.unstable_NormalPriority,
  T0 = Be.unstable_LowPriority,
  Dh = Be.unstable_IdlePriority,
  Jo = null,
  mt = null;
function C0(e) {
  if (mt && typeof mt.onCommitFiberRoot == "function")
    try {
      mt.onCommitFiberRoot(Jo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ot = Math.clz32 ? Math.clz32 : I0,
  b0 = Math.log,
  P0 = Math.LN2;
function I0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((b0(e) / P0) | 0)) | 0;
}
var cs = 64,
  ds = 4194304;
function ii(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ao(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = ii(l)) : ((s &= o), s !== 0 && (r = ii(s)));
  } else (o = n & ~i), o !== 0 ? (r = ii(o)) : s !== 0 && (r = ii(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ot(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function k0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function N0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - ot(s),
      l = 1 << o,
      a = i[o];
    a === -1
      ? (!(l & n) || l & r) && (i[o] = k0(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function zl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Uh() {
  var e = cs;
  return (cs <<= 1), !(cs & 4194240) && (cs = 64), e;
}
function Na(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Vi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ot(t)),
    (e[t] = n);
}
function O0(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - ot(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function Qu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ot(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var B = 0;
function zh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Fh,
  Ju,
  $h,
  Bh,
  Vh,
  Fl = !1,
  fs = [],
  sn = null,
  on = null,
  an = null,
  xi = new Map(),
  Ei = new Map(),
  Kt = [],
  R0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function jd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      sn = null;
      break;
    case "dragenter":
    case "dragleave":
      on = null;
      break;
    case "mouseover":
    case "mouseout":
      an = null;
      break;
    case "pointerover":
    case "pointerout":
      xi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ei.delete(t.pointerId);
  }
}
function Xr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = Wi(t)), t !== null && Ju(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function L0(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (sn = Xr(sn, e, t, n, r, i)), !0;
    case "dragenter":
      return (on = Xr(on, e, t, n, r, i)), !0;
    case "mouseover":
      return (an = Xr(an, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return xi.set(s, Xr(xi.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Ei.set(s, Xr(Ei.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Hh(e) {
  var t = Ln(e.target);
  if (t !== null) {
    var n = Zn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Rh(n)), t !== null)) {
          (e.blockedOn = t),
            Vh(e.priority, function () {
              $h(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function As(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = $l(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ml = r), n.target.dispatchEvent(r), (Ml = null);
    } else return (t = Wi(n)), t !== null && Ju(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Dd(e, t, n) {
  As(e) && n.delete(t);
}
function A0() {
  (Fl = !1),
    sn !== null && As(sn) && (sn = null),
    on !== null && As(on) && (on = null),
    an !== null && As(an) && (an = null),
    xi.forEach(Dd),
    Ei.forEach(Dd);
}
function Yr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Fl ||
      ((Fl = !0),
      Be.unstable_scheduleCallback(Be.unstable_NormalPriority, A0)));
}
function Ti(e) {
  function t(i) {
    return Yr(i, e);
  }
  if (0 < fs.length) {
    Yr(fs[0], e);
    for (var n = 1; n < fs.length; n++) {
      var r = fs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    sn !== null && Yr(sn, e),
      on !== null && Yr(on, e),
      an !== null && Yr(an, e),
      xi.forEach(t),
      Ei.forEach(t),
      n = 0;
    n < Kt.length;
    n++
  )
    (r = Kt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Kt.length && ((n = Kt[0]), n.blockedOn === null); )
    Hh(n), n.blockedOn === null && Kt.shift();
}
var wr = $t.ReactCurrentBatchConfig,
  lo = !0;
function M0(e, t, n, r) {
  var i = B,
    s = wr.transition;
  wr.transition = null;
  try {
    (B = 1), Zu(e, t, n, r);
  } finally {
    (B = i), (wr.transition = s);
  }
}
function j0(e, t, n, r) {
  var i = B,
    s = wr.transition;
  wr.transition = null;
  try {
    (B = 4), Zu(e, t, n, r);
  } finally {
    (B = i), (wr.transition = s);
  }
}
function Zu(e, t, n, r) {
  if (lo) {
    var i = $l(e, t, n, r);
    if (i === null) Fa(e, t, r, uo, n), jd(e, r);
    else if (L0(i, e, t, n, r)) r.stopPropagation();
    else if ((jd(e, r), t & 4 && -1 < R0.indexOf(e))) {
      for (; i !== null; ) {
        var s = Wi(i);
        if (
          (s !== null && Fh(s),
          (s = $l(e, t, n, r)),
          s === null && Fa(e, t, r, uo, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Fa(e, t, r, null, n);
  }
}
var uo = null;
function $l(e, t, n, r) {
  if (((uo = null), (e = Xu(r)), (e = Ln(e)), e !== null))
    if (((t = Zn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Rh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (uo = e), null;
}
function Wh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (E0()) {
        case Yu:
          return 1;
        case jh:
          return 4;
        case oo:
        case T0:
          return 16;
        case Dh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var en = null,
  ec = null,
  Ms = null;
function Gh() {
  if (Ms) return Ms;
  var e,
    t = ec,
    n = t.length,
    r,
    i = "value" in en ? en.value : en.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Ms = i.slice(e, 1 < r ? 1 - r : void 0));
}
function js(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ps() {
  return !0;
}
function Ud() {
  return !1;
}
function Ge(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? ps
        : Ud),
      (this.isPropagationStopped = Ud),
      this
    );
  }
  return (
    ee(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ps));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ps));
      },
      persist: function () {},
      isPersistent: ps,
    }),
    t
  );
}
var Ur = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  tc = Ge(Ur),
  Hi = ee({}, Ur, { view: 0, detail: 0 }),
  D0 = Ge(Hi),
  Oa,
  Ra,
  Qr,
  Zo = ee({}, Hi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: nc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Qr &&
            (Qr && e.type === "mousemove"
              ? ((Oa = e.screenX - Qr.screenX), (Ra = e.screenY - Qr.screenY))
              : (Ra = Oa = 0),
            (Qr = e)),
          Oa);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ra;
    },
  }),
  zd = Ge(Zo),
  U0 = ee({}, Zo, { dataTransfer: 0 }),
  z0 = Ge(U0),
  F0 = ee({}, Hi, { relatedTarget: 0 }),
  La = Ge(F0),
  $0 = ee({}, Ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  B0 = Ge($0),
  V0 = ee({}, Ur, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  H0 = Ge(V0),
  W0 = ee({}, Ur, { data: 0 }),
  Fd = Ge(W0),
  G0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  q0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  K0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function X0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = K0[e]) ? !!t[e] : !1;
}
function nc() {
  return X0;
}
var Y0 = ee({}, Hi, {
    key: function (e) {
      if (e.key) {
        var t = G0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = js(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? q0[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: nc,
    charCode: function (e) {
      return e.type === "keypress" ? js(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? js(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Q0 = Ge(Y0),
  J0 = ee({}, Zo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  $d = Ge(J0),
  Z0 = ee({}, Hi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nc,
  }),
  ew = Ge(Z0),
  tw = ee({}, Ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  nw = Ge(tw),
  rw = ee({}, Zo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  iw = Ge(rw),
  sw = [9, 13, 27, 32],
  rc = Mt && "CompositionEvent" in window,
  ui = null;
Mt && "documentMode" in document && (ui = document.documentMode);
var ow = Mt && "TextEvent" in window && !ui,
  qh = Mt && (!rc || (ui && 8 < ui && 11 >= ui)),
  Bd = " ",
  Vd = !1;
function Kh(e, t) {
  switch (e) {
    case "keyup":
      return sw.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Xh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var or = !1;
function aw(e, t) {
  switch (e) {
    case "compositionend":
      return Xh(t);
    case "keypress":
      return t.which !== 32 ? null : ((Vd = !0), Bd);
    case "textInput":
      return (e = t.data), e === Bd && Vd ? null : e;
    default:
      return null;
  }
}
function lw(e, t) {
  if (or)
    return e === "compositionend" || (!rc && Kh(e, t))
      ? ((e = Gh()), (Ms = ec = en = null), (or = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return qh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var uw = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Hd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!uw[e.type] : t === "textarea";
}
function Yh(e, t, n, r) {
  Ph(r),
    (t = co(t, "onChange")),
    0 < t.length &&
      ((n = new tc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ci = null,
  Ci = null;
function cw(e) {
  am(e, 0);
}
function ea(e) {
  var t = ur(e);
  if (_h(t)) return e;
}
function dw(e, t) {
  if (e === "change") return t;
}
var Qh = !1;
if (Mt) {
  var Aa;
  if (Mt) {
    var Ma = "oninput" in document;
    if (!Ma) {
      var Wd = document.createElement("div");
      Wd.setAttribute("oninput", "return;"),
        (Ma = typeof Wd.oninput == "function");
    }
    Aa = Ma;
  } else Aa = !1;
  Qh = Aa && (!document.documentMode || 9 < document.documentMode);
}
function Gd() {
  ci && (ci.detachEvent("onpropertychange", Jh), (Ci = ci = null));
}
function Jh(e) {
  if (e.propertyName === "value" && ea(Ci)) {
    var t = [];
    Yh(t, Ci, e, Xu(e)), Oh(cw, t);
  }
}
function fw(e, t, n) {
  e === "focusin"
    ? (Gd(), (ci = t), (Ci = n), ci.attachEvent("onpropertychange", Jh))
    : e === "focusout" && Gd();
}
function pw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ea(Ci);
}
function hw(e, t) {
  if (e === "click") return ea(t);
}
function mw(e, t) {
  if (e === "input" || e === "change") return ea(t);
}
function gw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ut = typeof Object.is == "function" ? Object.is : gw;
function bi(e, t) {
  if (ut(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!El.call(t, i) || !ut(e[i], t[i])) return !1;
  }
  return !0;
}
function qd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Kd(e, t) {
  var n = qd(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = qd(n);
  }
}
function Zh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Zh(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function em() {
  for (var e = window, t = ro(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ro(e.document);
  }
  return t;
}
function ic(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function vw(e) {
  var t = em(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Zh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ic(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Kd(n, s));
        var o = Kd(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var yw = Mt && "documentMode" in document && 11 >= document.documentMode,
  ar = null,
  Bl = null,
  di = null,
  Vl = !1;
function Xd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Vl ||
    ar == null ||
    ar !== ro(r) ||
    ((r = ar),
    "selectionStart" in r && ic(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (di && bi(di, r)) ||
      ((di = r),
      (r = co(Bl, "onSelect")),
      0 < r.length &&
        ((t = new tc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ar))));
}
function hs(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var lr = {
    animationend: hs("Animation", "AnimationEnd"),
    animationiteration: hs("Animation", "AnimationIteration"),
    animationstart: hs("Animation", "AnimationStart"),
    transitionend: hs("Transition", "TransitionEnd"),
  },
  ja = {},
  tm = {};
Mt &&
  ((tm = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete lr.animationend.animation,
    delete lr.animationiteration.animation,
    delete lr.animationstart.animation),
  "TransitionEvent" in window || delete lr.transitionend.transition);
function ta(e) {
  if (ja[e]) return ja[e];
  if (!lr[e]) return e;
  var t = lr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in tm) return (ja[e] = t[n]);
  return e;
}
var nm = ta("animationend"),
  rm = ta("animationiteration"),
  im = ta("animationstart"),
  sm = ta("transitionend"),
  om = new Map(),
  Yd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Sn(e, t) {
  om.set(e, t), Jn(t, [e]);
}
for (var Da = 0; Da < Yd.length; Da++) {
  var Ua = Yd[Da],
    ww = Ua.toLowerCase(),
    _w = Ua[0].toUpperCase() + Ua.slice(1);
  Sn(ww, "on" + _w);
}
Sn(nm, "onAnimationEnd");
Sn(rm, "onAnimationIteration");
Sn(im, "onAnimationStart");
Sn("dblclick", "onDoubleClick");
Sn("focusin", "onFocus");
Sn("focusout", "onBlur");
Sn(sm, "onTransitionEnd");
br("onMouseEnter", ["mouseout", "mouseover"]);
br("onMouseLeave", ["mouseout", "mouseover"]);
br("onPointerEnter", ["pointerout", "pointerover"]);
br("onPointerLeave", ["pointerout", "pointerover"]);
Jn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Jn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Jn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Jn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var si =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Sw = new Set("cancel close invalid load scroll toggle".split(" ").concat(si));
function Qd(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), w0(r, t, void 0, e), (e.currentTarget = null);
}
function am(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && i.isPropagationStopped())) break e;
          Qd(i, l, u), (s = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== s && i.isPropagationStopped())
          )
            break e;
          Qd(i, l, u), (s = a);
        }
    }
  }
  if (so) throw ((e = Ul), (so = !1), (Ul = null), e);
}
function q(e, t) {
  var n = t[Kl];
  n === void 0 && (n = t[Kl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (lm(t, e, 2, !1), n.add(r));
}
function za(e, t, n) {
  var r = 0;
  t && (r |= 4), lm(n, e, r, t);
}
var ms = "_reactListening" + Math.random().toString(36).slice(2);
function Pi(e) {
  if (!e[ms]) {
    (e[ms] = !0),
      mh.forEach(function (n) {
        n !== "selectionchange" && (Sw.has(n) || za(n, !1, e), za(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ms] || ((t[ms] = !0), za("selectionchange", !1, t));
  }
}
function lm(e, t, n, r) {
  switch (Wh(t)) {
    case 1:
      var i = M0;
      break;
    case 4:
      i = j0;
      break;
    default:
      i = Zu;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Dl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Fa(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = Ln(l)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Oh(function () {
    var u = s,
      c = Xu(n),
      d = [];
    e: {
      var f = om.get(e);
      if (f !== void 0) {
        var v = tc,
          y = e;
        switch (e) {
          case "keypress":
            if (js(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Q0;
            break;
          case "focusin":
            (y = "focus"), (v = La);
            break;
          case "focusout":
            (y = "blur"), (v = La);
            break;
          case "beforeblur":
          case "afterblur":
            v = La;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = zd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = z0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = ew;
            break;
          case nm:
          case rm:
          case im:
            v = B0;
            break;
          case sm:
            v = nw;
            break;
          case "scroll":
            v = D0;
            break;
          case "wheel":
            v = iw;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = H0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = $d;
        }
        var _ = (t & 4) !== 0,
          S = !_ && e === "scroll",
          p = _ ? (f !== null ? f + "Capture" : null) : f;
        _ = [];
        for (var g = u, h; g !== null; ) {
          h = g;
          var w = h.stateNode;
          if (
            (h.tag === 5 &&
              w !== null &&
              ((h = w),
              p !== null && ((w = Si(g, p)), w != null && _.push(Ii(g, w, h)))),
            S)
          )
            break;
          g = g.return;
        }
        0 < _.length &&
          ((f = new v(f, y, null, n, c)), d.push({ event: f, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Ml &&
            (y = n.relatedTarget || n.fromElement) &&
            (Ln(y) || y[jt]))
        )
          break e;
        if (
          (v || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          v
            ? ((y = n.relatedTarget || n.toElement),
              (v = u),
              (y = y ? Ln(y) : null),
              y !== null &&
                ((S = Zn(y)), y !== S || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((v = null), (y = u)),
          v !== y)
        ) {
          if (
            ((_ = zd),
            (w = "onMouseLeave"),
            (p = "onMouseEnter"),
            (g = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((_ = $d),
              (w = "onPointerLeave"),
              (p = "onPointerEnter"),
              (g = "pointer")),
            (S = v == null ? f : ur(v)),
            (h = y == null ? f : ur(y)),
            (f = new _(w, g + "leave", v, n, c)),
            (f.target = S),
            (f.relatedTarget = h),
            (w = null),
            Ln(c) === u &&
              ((_ = new _(p, g + "enter", y, n, c)),
              (_.target = h),
              (_.relatedTarget = S),
              (w = _)),
            (S = w),
            v && y)
          )
            t: {
              for (_ = v, p = y, g = 0, h = _; h; h = tr(h)) g++;
              for (h = 0, w = p; w; w = tr(w)) h++;
              for (; 0 < g - h; ) (_ = tr(_)), g--;
              for (; 0 < h - g; ) (p = tr(p)), h--;
              for (; g--; ) {
                if (_ === p || (p !== null && _ === p.alternate)) break t;
                (_ = tr(_)), (p = tr(p));
              }
              _ = null;
            }
          else _ = null;
          v !== null && Jd(d, f, v, _, !1),
            y !== null && S !== null && Jd(d, S, y, _, !0);
        }
      }
      e: {
        if (
          ((f = u ? ur(u) : window),
          (v = f.nodeName && f.nodeName.toLowerCase()),
          v === "select" || (v === "input" && f.type === "file"))
        )
          var x = dw;
        else if (Hd(f))
          if (Qh) x = mw;
          else {
            x = pw;
            var E = fw;
          }
        else
          (v = f.nodeName) &&
            v.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (x = hw);
        if (x && (x = x(e, u))) {
          Yh(d, x, n, c);
          break e;
        }
        E && E(e, f, u),
          e === "focusout" &&
            (E = f._wrapperState) &&
            E.controlled &&
            f.type === "number" &&
            Nl(f, "number", f.value);
      }
      switch (((E = u ? ur(u) : window), e)) {
        case "focusin":
          (Hd(E) || E.contentEditable === "true") &&
            ((ar = E), (Bl = u), (di = null));
          break;
        case "focusout":
          di = Bl = ar = null;
          break;
        case "mousedown":
          Vl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Vl = !1), Xd(d, n, c);
          break;
        case "selectionchange":
          if (yw) break;
        case "keydown":
        case "keyup":
          Xd(d, n, c);
      }
      var P;
      if (rc)
        e: {
          switch (e) {
            case "compositionstart":
              var b = "onCompositionStart";
              break e;
            case "compositionend":
              b = "onCompositionEnd";
              break e;
            case "compositionupdate":
              b = "onCompositionUpdate";
              break e;
          }
          b = void 0;
        }
      else
        or
          ? Kh(e, n) && (b = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b &&
        (qh &&
          n.locale !== "ko" &&
          (or || b !== "onCompositionStart"
            ? b === "onCompositionEnd" && or && (P = Gh())
            : ((en = c),
              (ec = "value" in en ? en.value : en.textContent),
              (or = !0))),
        (E = co(u, b)),
        0 < E.length &&
          ((b = new Fd(b, e, null, n, c)),
          d.push({ event: b, listeners: E }),
          P ? (b.data = P) : ((P = Xh(n)), P !== null && (b.data = P)))),
        (P = ow ? aw(e, n) : lw(e, n)) &&
          ((u = co(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Fd("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = P)));
    }
    am(d, t);
  });
}
function Ii(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function co(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Si(e, n)),
      s != null && r.unshift(Ii(e, s, i)),
      (s = Si(e, t)),
      s != null && r.push(Ii(e, s, i))),
      (e = e.return);
  }
  return r;
}
function tr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Jd(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = Si(n, s)), a != null && o.unshift(Ii(n, a, l)))
        : i || ((a = Si(n, s)), a != null && o.push(Ii(n, a, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var xw = /\r\n?/g,
  Ew = /\u0000|\uFFFD/g;
function Zd(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      xw,
      `
`
    )
    .replace(Ew, "");
}
function gs(e, t, n) {
  if (((t = Zd(t)), Zd(e) !== t && n)) throw Error(k(425));
}
function fo() {}
var Hl = null,
  Wl = null;
function Gl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ql = typeof setTimeout == "function" ? setTimeout : void 0,
  Tw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ef = typeof Promise == "function" ? Promise : void 0,
  Cw =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ef < "u"
      ? function (e) {
          return ef.resolve(null).then(e).catch(bw);
        }
      : ql;
function bw(e) {
  setTimeout(function () {
    throw e;
  });
}
function $a(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Ti(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Ti(t);
}
function ln(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function tf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var zr = Math.random().toString(36).slice(2),
  ft = "__reactFiber$" + zr,
  ki = "__reactProps$" + zr,
  jt = "__reactContainer$" + zr,
  Kl = "__reactEvents$" + zr,
  Pw = "__reactListeners$" + zr,
  Iw = "__reactHandles$" + zr;
function Ln(e) {
  var t = e[ft];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[jt] || n[ft])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = tf(e); e !== null; ) {
          if ((n = e[ft])) return n;
          e = tf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Wi(e) {
  return (
    (e = e[ft] || e[jt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ur(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function na(e) {
  return e[ki] || null;
}
var Xl = [],
  cr = -1;
function xn(e) {
  return { current: e };
}
function K(e) {
  0 > cr || ((e.current = Xl[cr]), (Xl[cr] = null), cr--);
}
function W(e, t) {
  cr++, (Xl[cr] = e.current), (e.current = t);
}
var yn = {},
  _e = xn(yn),
  Oe = xn(!1),
  $n = yn;
function Pr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return yn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Re(e) {
  return (e = e.childContextTypes), e != null;
}
function po() {
  K(Oe), K(_e);
}
function nf(e, t, n) {
  if (_e.current !== yn) throw Error(k(168));
  W(_e, t), W(Oe, n);
}
function um(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(k(108, f0(e) || "Unknown", i));
  return ee({}, n, r);
}
function ho(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || yn),
    ($n = _e.current),
    W(_e, e),
    W(Oe, Oe.current),
    !0
  );
}
function rf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = um(e, t, $n)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      K(Oe),
      K(_e),
      W(_e, e))
    : K(Oe),
    W(Oe, n);
}
var Ct = null,
  ra = !1,
  Ba = !1;
function cm(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
function kw(e) {
  (ra = !0), cm(e);
}
function En() {
  if (!Ba && Ct !== null) {
    Ba = !0;
    var e = 0,
      t = B;
    try {
      var n = Ct;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ct = null), (ra = !1);
    } catch (i) {
      throw (Ct !== null && (Ct = Ct.slice(e + 1)), Mh(Yu, En), i);
    } finally {
      (B = t), (Ba = !1);
    }
  }
  return null;
}
var dr = [],
  fr = 0,
  mo = null,
  go = 0,
  Ke = [],
  Xe = 0,
  Bn = null,
  Pt = 1,
  It = "";
function kn(e, t) {
  (dr[fr++] = go), (dr[fr++] = mo), (mo = e), (go = t);
}
function dm(e, t, n) {
  (Ke[Xe++] = Pt), (Ke[Xe++] = It), (Ke[Xe++] = Bn), (Bn = e);
  var r = Pt;
  e = It;
  var i = 32 - ot(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - ot(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Pt = (1 << (32 - ot(t) + i)) | (n << i) | r),
      (It = s + e);
  } else (Pt = (1 << s) | (n << i) | r), (It = e);
}
function sc(e) {
  e.return !== null && (kn(e, 1), dm(e, 1, 0));
}
function oc(e) {
  for (; e === mo; )
    (mo = dr[--fr]), (dr[fr] = null), (go = dr[--fr]), (dr[fr] = null);
  for (; e === Bn; )
    (Bn = Ke[--Xe]),
      (Ke[Xe] = null),
      (It = Ke[--Xe]),
      (Ke[Xe] = null),
      (Pt = Ke[--Xe]),
      (Ke[Xe] = null);
}
var $e = null,
  Ue = null,
  Y = !1,
  it = null;
function fm(e, t) {
  var n = Ye(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function sf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), ($e = e), (Ue = ln(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), ($e = e), (Ue = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Bn !== null ? { id: Pt, overflow: It } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ye(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            ($e = e),
            (Ue = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Yl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ql(e) {
  if (Y) {
    var t = Ue;
    if (t) {
      var n = t;
      if (!sf(e, t)) {
        if (Yl(e)) throw Error(k(418));
        t = ln(n.nextSibling);
        var r = $e;
        t && sf(e, t)
          ? fm(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Y = !1), ($e = e));
      }
    } else {
      if (Yl(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (Y = !1), ($e = e);
    }
  }
}
function of(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  $e = e;
}
function vs(e) {
  if (e !== $e) return !1;
  if (!Y) return of(e), (Y = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Gl(e.type, e.memoizedProps))),
    t && (t = Ue))
  ) {
    if (Yl(e)) throw (pm(), Error(k(418)));
    for (; t; ) fm(e, t), (t = ln(t.nextSibling));
  }
  if ((of(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ue = ln(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ue = null;
    }
  } else Ue = $e ? ln(e.stateNode.nextSibling) : null;
  return !0;
}
function pm() {
  for (var e = Ue; e; ) e = ln(e.nextSibling);
}
function Ir() {
  (Ue = $e = null), (Y = !1);
}
function ac(e) {
  it === null ? (it = [e]) : it.push(e);
}
var Nw = $t.ReactCurrentBatchConfig;
function Jr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            o === null ? delete l[s] : (l[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function ys(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function af(e) {
  var t = e._init;
  return t(e._payload);
}
function hm(e) {
  function t(p, g) {
    if (e) {
      var h = p.deletions;
      h === null ? ((p.deletions = [g]), (p.flags |= 16)) : h.push(g);
    }
  }
  function n(p, g) {
    if (!e) return null;
    for (; g !== null; ) t(p, g), (g = g.sibling);
    return null;
  }
  function r(p, g) {
    for (p = new Map(); g !== null; )
      g.key !== null ? p.set(g.key, g) : p.set(g.index, g), (g = g.sibling);
    return p;
  }
  function i(p, g) {
    return (p = fn(p, g)), (p.index = 0), (p.sibling = null), p;
  }
  function s(p, g, h) {
    return (
      (p.index = h),
      e
        ? ((h = p.alternate),
          h !== null
            ? ((h = h.index), h < g ? ((p.flags |= 2), g) : h)
            : ((p.flags |= 2), g))
        : ((p.flags |= 1048576), g)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, g, h, w) {
    return g === null || g.tag !== 6
      ? ((g = Xa(h, p.mode, w)), (g.return = p), g)
      : ((g = i(g, h)), (g.return = p), g);
  }
  function a(p, g, h, w) {
    var x = h.type;
    return x === sr
      ? c(p, g, h.props.children, w, h.key)
      : g !== null &&
        (g.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === Gt &&
            af(x) === g.type))
      ? ((w = i(g, h.props)), (w.ref = Jr(p, g, h)), (w.return = p), w)
      : ((w = Vs(h.type, h.key, h.props, null, p.mode, w)),
        (w.ref = Jr(p, g, h)),
        (w.return = p),
        w);
  }
  function u(p, g, h, w) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== h.containerInfo ||
      g.stateNode.implementation !== h.implementation
      ? ((g = Ya(h, p.mode, w)), (g.return = p), g)
      : ((g = i(g, h.children || [])), (g.return = p), g);
  }
  function c(p, g, h, w, x) {
    return g === null || g.tag !== 7
      ? ((g = Un(h, p.mode, w, x)), (g.return = p), g)
      : ((g = i(g, h)), (g.return = p), g);
  }
  function d(p, g, h) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (g = Xa("" + g, p.mode, h)), (g.return = p), g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case as:
          return (
            (h = Vs(g.type, g.key, g.props, null, p.mode, h)),
            (h.ref = Jr(p, null, g)),
            (h.return = p),
            h
          );
        case ir:
          return (g = Ya(g, p.mode, h)), (g.return = p), g;
        case Gt:
          var w = g._init;
          return d(p, w(g._payload), h);
      }
      if (ri(g) || qr(g))
        return (g = Un(g, p.mode, h, null)), (g.return = p), g;
      ys(p, g);
    }
    return null;
  }
  function f(p, g, h, w) {
    var x = g !== null ? g.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return x !== null ? null : l(p, g, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case as:
          return h.key === x ? a(p, g, h, w) : null;
        case ir:
          return h.key === x ? u(p, g, h, w) : null;
        case Gt:
          return (x = h._init), f(p, g, x(h._payload), w);
      }
      if (ri(h) || qr(h)) return x !== null ? null : c(p, g, h, w, null);
      ys(p, h);
    }
    return null;
  }
  function v(p, g, h, w, x) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (p = p.get(h) || null), l(g, p, "" + w, x);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case as:
          return (p = p.get(w.key === null ? h : w.key) || null), a(g, p, w, x);
        case ir:
          return (p = p.get(w.key === null ? h : w.key) || null), u(g, p, w, x);
        case Gt:
          var E = w._init;
          return v(p, g, h, E(w._payload), x);
      }
      if (ri(w) || qr(w)) return (p = p.get(h) || null), c(g, p, w, x, null);
      ys(g, w);
    }
    return null;
  }
  function y(p, g, h, w) {
    for (
      var x = null, E = null, P = g, b = (g = 0), I = null;
      P !== null && b < h.length;
      b++
    ) {
      P.index > b ? ((I = P), (P = null)) : (I = P.sibling);
      var T = f(p, P, h[b], w);
      if (T === null) {
        P === null && (P = I);
        break;
      }
      e && P && T.alternate === null && t(p, P),
        (g = s(T, g, b)),
        E === null ? (x = T) : (E.sibling = T),
        (E = T),
        (P = I);
    }
    if (b === h.length) return n(p, P), Y && kn(p, b), x;
    if (P === null) {
      for (; b < h.length; b++)
        (P = d(p, h[b], w)),
          P !== null &&
            ((g = s(P, g, b)), E === null ? (x = P) : (E.sibling = P), (E = P));
      return Y && kn(p, b), x;
    }
    for (P = r(p, P); b < h.length; b++)
      (I = v(P, p, b, h[b], w)),
        I !== null &&
          (e && I.alternate !== null && P.delete(I.key === null ? b : I.key),
          (g = s(I, g, b)),
          E === null ? (x = I) : (E.sibling = I),
          (E = I));
    return (
      e &&
        P.forEach(function (N) {
          return t(p, N);
        }),
      Y && kn(p, b),
      x
    );
  }
  function _(p, g, h, w) {
    var x = qr(h);
    if (typeof x != "function") throw Error(k(150));
    if (((h = x.call(h)), h == null)) throw Error(k(151));
    for (
      var E = (x = null), P = g, b = (g = 0), I = null, T = h.next();
      P !== null && !T.done;
      b++, T = h.next()
    ) {
      P.index > b ? ((I = P), (P = null)) : (I = P.sibling);
      var N = f(p, P, T.value, w);
      if (N === null) {
        P === null && (P = I);
        break;
      }
      e && P && N.alternate === null && t(p, P),
        (g = s(N, g, b)),
        E === null ? (x = N) : (E.sibling = N),
        (E = N),
        (P = I);
    }
    if (T.done) return n(p, P), Y && kn(p, b), x;
    if (P === null) {
      for (; !T.done; b++, T = h.next())
        (T = d(p, T.value, w)),
          T !== null &&
            ((g = s(T, g, b)), E === null ? (x = T) : (E.sibling = T), (E = T));
      return Y && kn(p, b), x;
    }
    for (P = r(p, P); !T.done; b++, T = h.next())
      (T = v(P, p, b, T.value, w)),
        T !== null &&
          (e && T.alternate !== null && P.delete(T.key === null ? b : T.key),
          (g = s(T, g, b)),
          E === null ? (x = T) : (E.sibling = T),
          (E = T));
    return (
      e &&
        P.forEach(function (L) {
          return t(p, L);
        }),
      Y && kn(p, b),
      x
    );
  }
  function S(p, g, h, w) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === sr &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case as:
          e: {
            for (var x = h.key, E = g; E !== null; ) {
              if (E.key === x) {
                if (((x = h.type), x === sr)) {
                  if (E.tag === 7) {
                    n(p, E.sibling),
                      (g = i(E, h.props.children)),
                      (g.return = p),
                      (p = g);
                    break e;
                  }
                } else if (
                  E.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === Gt &&
                    af(x) === E.type)
                ) {
                  n(p, E.sibling),
                    (g = i(E, h.props)),
                    (g.ref = Jr(p, E, h)),
                    (g.return = p),
                    (p = g);
                  break e;
                }
                n(p, E);
                break;
              } else t(p, E);
              E = E.sibling;
            }
            h.type === sr
              ? ((g = Un(h.props.children, p.mode, w, h.key)),
                (g.return = p),
                (p = g))
              : ((w = Vs(h.type, h.key, h.props, null, p.mode, w)),
                (w.ref = Jr(p, g, h)),
                (w.return = p),
                (p = w));
          }
          return o(p);
        case ir:
          e: {
            for (E = h.key; g !== null; ) {
              if (g.key === E)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === h.containerInfo &&
                  g.stateNode.implementation === h.implementation
                ) {
                  n(p, g.sibling),
                    (g = i(g, h.children || [])),
                    (g.return = p),
                    (p = g);
                  break e;
                } else {
                  n(p, g);
                  break;
                }
              else t(p, g);
              g = g.sibling;
            }
            (g = Ya(h, p.mode, w)), (g.return = p), (p = g);
          }
          return o(p);
        case Gt:
          return (E = h._init), S(p, g, E(h._payload), w);
      }
      if (ri(h)) return y(p, g, h, w);
      if (qr(h)) return _(p, g, h, w);
      ys(p, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        g !== null && g.tag === 6
          ? (n(p, g.sibling), (g = i(g, h)), (g.return = p), (p = g))
          : (n(p, g), (g = Xa(h, p.mode, w)), (g.return = p), (p = g)),
        o(p))
      : n(p, g);
  }
  return S;
}
var kr = hm(!0),
  mm = hm(!1),
  vo = xn(null),
  yo = null,
  pr = null,
  lc = null;
function uc() {
  lc = pr = yo = null;
}
function cc(e) {
  var t = vo.current;
  K(vo), (e._currentValue = t);
}
function Jl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function _r(e, t) {
  (yo = e),
    (lc = pr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ne = !0), (e.firstContext = null));
}
function Je(e) {
  var t = e._currentValue;
  if (lc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), pr === null)) {
      if (yo === null) throw Error(k(308));
      (pr = e), (yo.dependencies = { lanes: 0, firstContext: e });
    } else pr = pr.next = e;
  return t;
}
var An = null;
function dc(e) {
  An === null ? (An = [e]) : An.push(e);
}
function gm(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), dc(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Dt(e, r)
  );
}
function Dt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var qt = !1;
function fc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function vm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Lt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function un(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), $ & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Dt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), dc(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Dt(e, n)
  );
}
function Ds(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Qu(e, n);
  }
}
function lf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function wo(e, t, n, r) {
  var i = e.updateQueue;
  qt = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), o === null ? (s = u) : (o.next = u), (o = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var d = i.baseState;
    (o = 0), (c = u = a = null), (l = s);
    do {
      var f = l.lane,
        v = l.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            _ = l;
          switch (((f = t), (v = n), _.tag)) {
            case 1:
              if (((y = _.payload), typeof y == "function")) {
                d = y.call(v, d, f);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = _.payload),
                (f = typeof y == "function" ? y.call(v, d, f) : y),
                f == null)
              )
                break e;
              d = ee({}, d, f);
              break e;
            case 2:
              qt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [l]) : f.push(l));
      } else
        (v = {
          eventTime: v,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = v), (a = d)) : (c = c.next = v),
          (o |= f);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (f = l),
          (l = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = d),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (Hn |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function uf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(k(191, i));
        i.call(r);
      }
    }
}
var Gi = {},
  gt = xn(Gi),
  Ni = xn(Gi),
  Oi = xn(Gi);
function Mn(e) {
  if (e === Gi) throw Error(k(174));
  return e;
}
function pc(e, t) {
  switch ((W(Oi, t), W(Ni, e), W(gt, Gi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Rl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Rl(t, e));
  }
  K(gt), W(gt, t);
}
function Nr() {
  K(gt), K(Ni), K(Oi);
}
function ym(e) {
  Mn(Oi.current);
  var t = Mn(gt.current),
    n = Rl(t, e.type);
  t !== n && (W(Ni, e), W(gt, n));
}
function hc(e) {
  Ni.current === e && (K(gt), K(Ni));
}
var J = xn(0);
function _o(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Va = [];
function mc() {
  for (var e = 0; e < Va.length; e++)
    Va[e]._workInProgressVersionPrimary = null;
  Va.length = 0;
}
var Us = $t.ReactCurrentDispatcher,
  Ha = $t.ReactCurrentBatchConfig,
  Vn = 0,
  Z = null,
  ae = null,
  ue = null,
  So = !1,
  fi = !1,
  Ri = 0,
  Ow = 0;
function ge() {
  throw Error(k(321));
}
function gc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ut(e[n], t[n])) return !1;
  return !0;
}
function vc(e, t, n, r, i, s) {
  if (
    ((Vn = s),
    (Z = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Us.current = e === null || e.memoizedState === null ? Mw : jw),
    (e = n(r, i)),
    fi)
  ) {
    s = 0;
    do {
      if (((fi = !1), (Ri = 0), 25 <= s)) throw Error(k(301));
      (s += 1),
        (ue = ae = null),
        (t.updateQueue = null),
        (Us.current = Dw),
        (e = n(r, i));
    } while (fi);
  }
  if (
    ((Us.current = xo),
    (t = ae !== null && ae.next !== null),
    (Vn = 0),
    (ue = ae = Z = null),
    (So = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function yc() {
  var e = Ri !== 0;
  return (Ri = 0), e;
}
function dt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ue === null ? (Z.memoizedState = ue = e) : (ue = ue.next = e), ue;
}
function Ze() {
  if (ae === null) {
    var e = Z.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = ue === null ? Z.memoizedState : ue.next;
  if (t !== null) (ue = t), (ae = e);
  else {
    if (e === null) throw Error(k(310));
    (ae = e),
      (e = {
        memoizedState: ae.memoizedState,
        baseState: ae.baseState,
        baseQueue: ae.baseQueue,
        queue: ae.queue,
        next: null,
      }),
      ue === null ? (Z.memoizedState = ue = e) : (ue = ue.next = e);
  }
  return ue;
}
function Li(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Wa(e) {
  var t = Ze(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = ae,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var l = (o = null),
      a = null,
      u = s;
    do {
      var c = u.lane;
      if ((Vn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = d), (o = r)) : (a = a.next = d),
          (Z.lanes |= c),
          (Hn |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (o = r) : (a.next = l),
      ut(r, t.memoizedState) || (Ne = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (Z.lanes |= s), (Hn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ga(e) {
  var t = Ze(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    ut(s, t.memoizedState) || (Ne = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function wm() {}
function _m(e, t) {
  var n = Z,
    r = Ze(),
    i = t(),
    s = !ut(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Ne = !0)),
    (r = r.queue),
    wc(Em.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ue !== null && ue.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ai(9, xm.bind(null, n, r, i, t), void 0, null),
      ce === null)
    )
      throw Error(k(349));
    Vn & 30 || Sm(n, t, i);
  }
  return i;
}
function Sm(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function xm(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Tm(t) && Cm(e);
}
function Em(e, t, n) {
  return n(function () {
    Tm(t) && Cm(e);
  });
}
function Tm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ut(e, n);
  } catch {
    return !0;
  }
}
function Cm(e) {
  var t = Dt(e, 1);
  t !== null && at(t, e, 1, -1);
}
function cf(e) {
  var t = dt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Li,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Aw.bind(null, Z, e)),
    [t.memoizedState, e]
  );
}
function Ai(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function bm() {
  return Ze().memoizedState;
}
function zs(e, t, n, r) {
  var i = dt();
  (Z.flags |= e),
    (i.memoizedState = Ai(1 | t, n, void 0, r === void 0 ? null : r));
}
function ia(e, t, n, r) {
  var i = Ze();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ae !== null) {
    var o = ae.memoizedState;
    if (((s = o.destroy), r !== null && gc(r, o.deps))) {
      i.memoizedState = Ai(t, n, s, r);
      return;
    }
  }
  (Z.flags |= e), (i.memoizedState = Ai(1 | t, n, s, r));
}
function df(e, t) {
  return zs(8390656, 8, e, t);
}
function wc(e, t) {
  return ia(2048, 8, e, t);
}
function Pm(e, t) {
  return ia(4, 2, e, t);
}
function Im(e, t) {
  return ia(4, 4, e, t);
}
function km(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Nm(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ia(4, 4, km.bind(null, t, e), n)
  );
}
function _c() {}
function Om(e, t) {
  var n = Ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Rm(e, t) {
  var n = Ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Lm(e, t, n) {
  return Vn & 21
    ? (ut(n, t) || ((n = Uh()), (Z.lanes |= n), (Hn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ne = !0)), (e.memoizedState = n));
}
function Rw(e, t) {
  var n = B;
  (B = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ha.transition;
  Ha.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = n), (Ha.transition = r);
  }
}
function Am() {
  return Ze().memoizedState;
}
function Lw(e, t, n) {
  var r = dn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Mm(e))
  )
    jm(t, n);
  else if (((n = gm(e, t, n, r)), n !== null)) {
    var i = Te();
    at(n, e, r, i), Dm(n, t, r);
  }
}
function Aw(e, t, n) {
  var r = dn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Mm(e)) jm(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), ut(l, o))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), dc(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = gm(e, t, i, r)),
      n !== null && ((i = Te()), at(n, e, r, i), Dm(n, t, r));
  }
}
function Mm(e) {
  var t = e.alternate;
  return e === Z || (t !== null && t === Z);
}
function jm(e, t) {
  fi = So = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Dm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Qu(e, n);
  }
}
var xo = {
    readContext: Je,
    useCallback: ge,
    useContext: ge,
    useEffect: ge,
    useImperativeHandle: ge,
    useInsertionEffect: ge,
    useLayoutEffect: ge,
    useMemo: ge,
    useReducer: ge,
    useRef: ge,
    useState: ge,
    useDebugValue: ge,
    useDeferredValue: ge,
    useTransition: ge,
    useMutableSource: ge,
    useSyncExternalStore: ge,
    useId: ge,
    unstable_isNewReconciler: !1,
  },
  Mw = {
    readContext: Je,
    useCallback: function (e, t) {
      return (dt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Je,
    useEffect: df,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        zs(4194308, 4, km.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return zs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return zs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = dt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = dt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Lw.bind(null, Z, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = dt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: cf,
    useDebugValue: _c,
    useDeferredValue: function (e) {
      return (dt().memoizedState = e);
    },
    useTransition: function () {
      var e = cf(!1),
        t = e[0];
      return (e = Rw.bind(null, e[1])), (dt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Z,
        i = dt();
      if (Y) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), ce === null)) throw Error(k(349));
        Vn & 30 || Sm(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        df(Em.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Ai(9, xm.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = dt(),
        t = ce.identifierPrefix;
      if (Y) {
        var n = It,
          r = Pt;
        (n = (r & ~(1 << (32 - ot(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ri++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Ow++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  jw = {
    readContext: Je,
    useCallback: Om,
    useContext: Je,
    useEffect: wc,
    useImperativeHandle: Nm,
    useInsertionEffect: Pm,
    useLayoutEffect: Im,
    useMemo: Rm,
    useReducer: Wa,
    useRef: bm,
    useState: function () {
      return Wa(Li);
    },
    useDebugValue: _c,
    useDeferredValue: function (e) {
      var t = Ze();
      return Lm(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Wa(Li)[0],
        t = Ze().memoizedState;
      return [e, t];
    },
    useMutableSource: wm,
    useSyncExternalStore: _m,
    useId: Am,
    unstable_isNewReconciler: !1,
  },
  Dw = {
    readContext: Je,
    useCallback: Om,
    useContext: Je,
    useEffect: wc,
    useImperativeHandle: Nm,
    useInsertionEffect: Pm,
    useLayoutEffect: Im,
    useMemo: Rm,
    useReducer: Ga,
    useRef: bm,
    useState: function () {
      return Ga(Li);
    },
    useDebugValue: _c,
    useDeferredValue: function (e) {
      var t = Ze();
      return ae === null ? (t.memoizedState = e) : Lm(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Ga(Li)[0],
        t = Ze().memoizedState;
      return [e, t];
    },
    useMutableSource: wm,
    useSyncExternalStore: _m,
    useId: Am,
    unstable_isNewReconciler: !1,
  };
function nt(e, t) {
  if (e && e.defaultProps) {
    (t = ee({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Zl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ee({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var sa = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Zn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      i = dn(e),
      s = Lt(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = un(e, s, i)),
      t !== null && (at(t, e, i, r), Ds(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      i = dn(e),
      s = Lt(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = un(e, s, i)),
      t !== null && (at(t, e, i, r), Ds(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Te(),
      r = dn(e),
      i = Lt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = un(e, i, r)),
      t !== null && (at(t, e, r, n), Ds(t, e, r));
  },
};
function ff(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !bi(n, r) || !bi(i, s)
      : !0
  );
}
function Um(e, t, n) {
  var r = !1,
    i = yn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Je(s))
      : ((i = Re(t) ? $n : _e.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Pr(e, i) : yn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = sa),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function pf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && sa.enqueueReplaceState(t, t.state, null);
}
function eu(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), fc(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = Je(s))
    : ((s = Re(t) ? $n : _e.current), (i.context = Pr(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Zl(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && sa.enqueueReplaceState(i, i.state, null),
      wo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Or(e, t) {
  try {
    var n = "",
      r = t;
    do (n += d0(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function qa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function tu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Uw = typeof WeakMap == "function" ? WeakMap : Map;
function zm(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      To || ((To = !0), (du = r)), tu(e, t);
    }),
    n
  );
}
function Fm(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        tu(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        tu(e, t),
          typeof r != "function" &&
            (cn === null ? (cn = new Set([this])) : cn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function hf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Uw();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Jw.bind(null, e, t, n)), t.then(e, e));
}
function mf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function gf(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Lt(-1, 1)), (t.tag = 2), un(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var zw = $t.ReactCurrentOwner,
  Ne = !1;
function Ee(e, t, n, r) {
  t.child = e === null ? mm(t, null, n, r) : kr(t, e.child, n, r);
}
function vf(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    _r(t, i),
    (r = vc(e, t, n, r, s, i)),
    (n = yc()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Ut(e, t, i))
      : (Y && n && sc(t), (t.flags |= 1), Ee(e, t, r, i), t.child)
  );
}
function yf(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Ic(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), $m(e, t, s, r, i))
      : ((e = Vs(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : bi), n(o, r) && e.ref === t.ref)
    )
      return Ut(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = fn(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function $m(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (bi(s, r) && e.ref === t.ref)
      if (((Ne = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ne = !0);
      else return (t.lanes = e.lanes), Ut(e, t, i);
  }
  return nu(e, t, n, r, i);
}
function Bm(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        W(mr, je),
        (je |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          W(mr, je),
          (je |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        W(mr, je),
        (je |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      W(mr, je),
      (je |= r);
  return Ee(e, t, i, n), t.child;
}
function Vm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function nu(e, t, n, r, i) {
  var s = Re(n) ? $n : _e.current;
  return (
    (s = Pr(t, s)),
    _r(t, i),
    (n = vc(e, t, n, r, s, i)),
    (r = yc()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Ut(e, t, i))
      : (Y && r && sc(t), (t.flags |= 1), Ee(e, t, n, i), t.child)
  );
}
function wf(e, t, n, r, i) {
  if (Re(n)) {
    var s = !0;
    ho(t);
  } else s = !1;
  if ((_r(t, i), t.stateNode === null))
    Fs(e, t), Um(t, n, r), eu(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var a = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Je(u))
      : ((u = Re(n) ? $n : _e.current), (u = Pr(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && pf(t, o, r, u)),
      (qt = !1);
    var f = t.memoizedState;
    (o.state = f),
      wo(t, r, o, i),
      (a = t.memoizedState),
      l !== r || f !== a || Oe.current || qt
        ? (typeof c == "function" && (Zl(t, n, c, r), (a = t.memoizedState)),
          (l = qt || ff(t, n, l, r, f, a, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = u),
          (r = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      vm(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : nt(t.type, l)),
      (o.props = u),
      (d = t.pendingProps),
      (f = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Je(a))
        : ((a = Re(n) ? $n : _e.current), (a = Pr(t, a)));
    var v = n.getDerivedStateFromProps;
    (c =
      typeof v == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== d || f !== a) && pf(t, o, r, a)),
      (qt = !1),
      (f = t.memoizedState),
      (o.state = f),
      wo(t, r, o, i);
    var y = t.memoizedState;
    l !== d || f !== y || Oe.current || qt
      ? (typeof v == "function" && (Zl(t, n, v, r), (y = t.memoizedState)),
        (u = qt || ff(t, n, u, r, f, y, a) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = a),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ru(e, t, n, r, s, i);
}
function ru(e, t, n, r, i, s) {
  Vm(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && rf(t, n, !1), Ut(e, t, s);
  (r = t.stateNode), (zw.current = t);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = kr(t, e.child, null, s)), (t.child = kr(t, null, l, s)))
      : Ee(e, t, l, s),
    (t.memoizedState = r.state),
    i && rf(t, n, !0),
    t.child
  );
}
function Hm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? nf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && nf(e, t.context, !1),
    pc(e, t.containerInfo);
}
function _f(e, t, n, r, i) {
  return Ir(), ac(i), (t.flags |= 256), Ee(e, t, n, r), t.child;
}
var iu = { dehydrated: null, treeContext: null, retryLane: 0 };
function su(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Wm(e, t, n) {
  var r = t.pendingProps,
    i = J.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    W(J, i & 1),
    e === null)
  )
    return (
      Ql(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = la(o, r, 0, null)),
              (e = Un(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = su(n)),
              (t.memoizedState = iu),
              e)
            : Sc(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Fw(e, t, o, r, l, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = fn(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (s = fn(l, s)) : ((s = Un(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? su(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = iu),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = fn(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Sc(e, t) {
  return (
    (t = la({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ws(e, t, n, r) {
  return (
    r !== null && ac(r),
    kr(t, e.child, null, n),
    (e = Sc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Fw(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = qa(Error(k(422)))), ws(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = la({ mode: "visible", children: r.children }, i, 0, null)),
        (s = Un(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && kr(t, e.child, null, o),
        (t.child.memoizedState = su(o)),
        (t.memoizedState = iu),
        s);
  if (!(t.mode & 1)) return ws(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(k(419))), (r = qa(s, r, void 0)), ws(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), Ne || l)) {
    if (((r = ce), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), Dt(e, i), at(r, e, i, -1));
    }
    return Pc(), (r = qa(Error(k(421)))), ws(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Zw.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Ue = ln(i.nextSibling)),
      ($e = t),
      (Y = !0),
      (it = null),
      e !== null &&
        ((Ke[Xe++] = Pt),
        (Ke[Xe++] = It),
        (Ke[Xe++] = Bn),
        (Pt = e.id),
        (It = e.overflow),
        (Bn = t)),
      (t = Sc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Sf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Jl(e.return, t, n);
}
function Ka(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Gm(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Ee(e, t, r.children, n), (r = J.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Sf(e, n, t);
        else if (e.tag === 19) Sf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((W(J, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && _o(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ka(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && _o(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ka(t, !0, n, null, s);
        break;
      case "together":
        Ka(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Fs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ut(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Hn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = fn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = fn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function $w(e, t, n) {
  switch (t.tag) {
    case 3:
      Hm(t), Ir();
      break;
    case 5:
      ym(t);
      break;
    case 1:
      Re(t.type) && ho(t);
      break;
    case 4:
      pc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      W(vo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (W(J, J.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Wm(e, t, n)
          : (W(J, J.current & 1),
            (e = Ut(e, t, n)),
            e !== null ? e.sibling : null);
      W(J, J.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Gm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        W(J, J.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Bm(e, t, n);
  }
  return Ut(e, t, n);
}
var qm, ou, Km, Xm;
qm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ou = function () {};
Km = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Mn(gt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Il(e, i)), (r = Il(e, r)), (s = []);
        break;
      case "select":
        (i = ee({}, i, { value: void 0 })),
          (r = ee({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = Ol(e, i)), (r = Ol(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = fo);
    }
    Ll(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (wi.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                l[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (s = s || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (wi.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && q("scroll", e),
                  s || l === a || (s = []))
                : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Xm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Zr(e, t) {
  if (!Y)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Bw(e, t, n) {
  var r = t.pendingProps;
  switch ((oc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ve(t), null;
    case 1:
      return Re(t.type) && po(), ve(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Nr(),
        K(Oe),
        K(_e),
        mc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (vs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), it !== null && (hu(it), (it = null)))),
        ou(e, t),
        ve(t),
        null
      );
    case 5:
      hc(t);
      var i = Mn(Oi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Km(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return ve(t), null;
        }
        if (((e = Mn(gt.current)), vs(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[ft] = t), (r[ki] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              q("cancel", r), q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              q("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < si.length; i++) q(si[i], r);
              break;
            case "source":
              q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              q("error", r), q("load", r);
              break;
            case "details":
              q("toggle", r);
              break;
            case "input":
              kd(r, s), q("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                q("invalid", r);
              break;
            case "textarea":
              Od(r, s), q("invalid", r);
          }
          Ll(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      gs(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      gs(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : wi.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  q("scroll", r);
            }
          switch (n) {
            case "input":
              ls(r), Nd(r, s, !0);
              break;
            case "textarea":
              ls(r), Rd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = fo);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Eh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[ft] = t),
            (e[ki] = r),
            qm(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Al(n, r)), n)) {
              case "dialog":
                q("cancel", e), q("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                q("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < si.length; i++) q(si[i], e);
                i = r;
                break;
              case "source":
                q("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                q("error", e), q("load", e), (i = r);
                break;
              case "details":
                q("toggle", e), (i = r);
                break;
              case "input":
                kd(e, r), (i = Il(e, r)), q("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ee({}, r, { value: void 0 })),
                  q("invalid", e);
                break;
              case "textarea":
                Od(e, r), (i = Ol(e, r)), q("invalid", e);
                break;
              default:
                i = r;
            }
            Ll(n, i), (l = i);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? bh(e, a)
                  : s === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Th(e, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && _i(e, a)
                    : typeof a == "number" && _i(e, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (wi.hasOwnProperty(s)
                      ? a != null && s === "onScroll" && q("scroll", e)
                      : a != null && Wu(e, s, a, o));
              }
            switch (n) {
              case "input":
                ls(e), Nd(e, r, !1);
                break;
              case "textarea":
                ls(e), Rd(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + vn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? gr(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      gr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = fo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ve(t), null;
    case 6:
      if (e && t.stateNode != null) Xm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = Mn(Oi.current)), Mn(gt.current), vs(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ft] = t),
            (s = r.nodeValue !== n) && ((e = $e), e !== null))
          )
            switch (e.tag) {
              case 3:
                gs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  gs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ft] = t),
            (t.stateNode = r);
      }
      return ve(t), null;
    case 13:
      if (
        (K(J),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Y && Ue !== null && t.mode & 1 && !(t.flags & 128))
          pm(), Ir(), (t.flags |= 98560), (s = !1);
        else if (((s = vs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(k(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(k(317));
            s[ft] = t;
          } else
            Ir(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ve(t), (s = !1);
        } else it !== null && (hu(it), (it = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || J.current & 1 ? le === 0 && (le = 3) : Pc())),
          t.updateQueue !== null && (t.flags |= 4),
          ve(t),
          null);
    case 4:
      return (
        Nr(), ou(e, t), e === null && Pi(t.stateNode.containerInfo), ve(t), null
      );
    case 10:
      return cc(t.type._context), ve(t), null;
    case 17:
      return Re(t.type) && po(), ve(t), null;
    case 19:
      if ((K(J), (s = t.memoizedState), s === null)) return ve(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Zr(s, !1);
        else {
          if (le !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = _o(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Zr(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return W(J, (J.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            re() > Rr &&
            ((t.flags |= 128), (r = !0), Zr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = _o(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Zr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !Y)
            )
              return ve(t), null;
          } else
            2 * re() - s.renderingStartTime > Rr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Zr(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = re()),
          (t.sibling = null),
          (n = J.current),
          W(J, r ? (n & 1) | 2 : n & 1),
          t)
        : (ve(t), null);
    case 22:
    case 23:
      return (
        bc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? je & 1073741824 && (ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ve(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Vw(e, t) {
  switch ((oc(t), t.tag)) {
    case 1:
      return (
        Re(t.type) && po(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Nr(),
        K(Oe),
        K(_e),
        mc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return hc(t), null;
    case 13:
      if ((K(J), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        Ir();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return K(J), null;
    case 4:
      return Nr(), null;
    case 10:
      return cc(t.type._context), null;
    case 22:
    case 23:
      return bc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var _s = !1,
  ye = !1,
  Hw = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function hr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ne(e, t, r);
      }
    else n.current = null;
}
function au(e, t, n) {
  try {
    n();
  } catch (r) {
    ne(e, t, r);
  }
}
var xf = !1;
function Ww(e, t) {
  if (((Hl = lo), (e = em()), ic(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var v;
              d !== n || (i !== 0 && d.nodeType !== 3) || (l = o + i),
                d !== s || (r !== 0 && d.nodeType !== 3) || (a = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (v = d.firstChild) !== null;

            )
              (f = d), (d = v);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === i && (l = o),
                f === s && ++c === r && (a = o),
                (v = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = v;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Wl = { focusedElem: e, selectionRange: n }, lo = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var _ = y.memoizedProps,
                    S = y.memoizedState,
                    p = t.stateNode,
                    g = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? _ : nt(t.type, _),
                      S
                    );
                  p.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (w) {
          ne(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (y = xf), (xf = !1), y;
}
function pi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && au(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function oa(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function lu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ym(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ym(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ft], delete t[ki], delete t[Kl], delete t[Pw], delete t[Iw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Qm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ef(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Qm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function uu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = fo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (uu(e, t, n), e = e.sibling; e !== null; ) uu(e, t, n), (e = e.sibling);
}
function cu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (cu(e, t, n), e = e.sibling; e !== null; ) cu(e, t, n), (e = e.sibling);
}
var fe = null,
  rt = !1;
function Ht(e, t, n) {
  for (n = n.child; n !== null; ) Jm(e, t, n), (n = n.sibling);
}
function Jm(e, t, n) {
  if (mt && typeof mt.onCommitFiberUnmount == "function")
    try {
      mt.onCommitFiberUnmount(Jo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ye || hr(n, t);
    case 6:
      var r = fe,
        i = rt;
      (fe = null),
        Ht(e, t, n),
        (fe = r),
        (rt = i),
        fe !== null &&
          (rt
            ? ((e = fe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : fe.removeChild(n.stateNode));
      break;
    case 18:
      fe !== null &&
        (rt
          ? ((e = fe),
            (n = n.stateNode),
            e.nodeType === 8
              ? $a(e.parentNode, n)
              : e.nodeType === 1 && $a(e, n),
            Ti(e))
          : $a(fe, n.stateNode));
      break;
    case 4:
      (r = fe),
        (i = rt),
        (fe = n.stateNode.containerInfo),
        (rt = !0),
        Ht(e, t, n),
        (fe = r),
        (rt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ye &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && au(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      Ht(e, t, n);
      break;
    case 1:
      if (
        !ye &&
        (hr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          ne(n, t, l);
        }
      Ht(e, t, n);
      break;
    case 21:
      Ht(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ye = (r = ye) || n.memoizedState !== null), Ht(e, t, n), (ye = r))
        : Ht(e, t, n);
      break;
    default:
      Ht(e, t, n);
  }
}
function Tf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Hw()),
      t.forEach(function (r) {
        var i = e_.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function et(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (fe = l.stateNode), (rt = !1);
              break e;
            case 3:
              (fe = l.stateNode.containerInfo), (rt = !0);
              break e;
            case 4:
              (fe = l.stateNode.containerInfo), (rt = !0);
              break e;
          }
          l = l.return;
        }
        if (fe === null) throw Error(k(160));
        Jm(s, o, i), (fe = null), (rt = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        ne(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Zm(t, e), (t = t.sibling);
}
function Zm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((et(t, e), ct(e), r & 4)) {
        try {
          pi(3, e, e.return), oa(3, e);
        } catch (_) {
          ne(e, e.return, _);
        }
        try {
          pi(5, e, e.return);
        } catch (_) {
          ne(e, e.return, _);
        }
      }
      break;
    case 1:
      et(t, e), ct(e), r & 512 && n !== null && hr(n, n.return);
      break;
    case 5:
      if (
        (et(t, e),
        ct(e),
        r & 512 && n !== null && hr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          _i(i, "");
        } catch (_) {
          ne(e, e.return, _);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && Sh(i, s),
              Al(l, o);
            var u = Al(l, s);
            for (o = 0; o < a.length; o += 2) {
              var c = a[o],
                d = a[o + 1];
              c === "style"
                ? bh(i, d)
                : c === "dangerouslySetInnerHTML"
                ? Th(i, d)
                : c === "children"
                ? _i(i, d)
                : Wu(i, c, d, u);
            }
            switch (l) {
              case "input":
                kl(i, s);
                break;
              case "textarea":
                xh(i, s);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var v = s.value;
                v != null
                  ? gr(i, !!s.multiple, v, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? gr(i, !!s.multiple, s.defaultValue, !0)
                      : gr(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[ki] = s;
          } catch (_) {
            ne(e, e.return, _);
          }
      }
      break;
    case 6:
      if ((et(t, e), ct(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (_) {
          ne(e, e.return, _);
        }
      }
      break;
    case 3:
      if (
        (et(t, e), ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ti(t.containerInfo);
        } catch (_) {
          ne(e, e.return, _);
        }
      break;
    case 4:
      et(t, e), ct(e);
      break;
    case 13:
      et(t, e),
        ct(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Tc = re())),
        r & 4 && Tf(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ye = (u = ye) || c), et(t, e), (ye = u)) : et(t, e),
        ct(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (R = e, c = e.child; c !== null; ) {
            for (d = R = c; R !== null; ) {
              switch (((f = R), (v = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  pi(4, f, f.return);
                  break;
                case 1:
                  hr(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (_) {
                      ne(r, n, _);
                    }
                  }
                  break;
                case 5:
                  hr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    bf(d);
                    continue;
                  }
              }
              v !== null ? ((v.return = f), (R = v)) : bf(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = d.stateNode),
                      (a = d.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Ch("display", o)));
              } catch (_) {
                ne(e, e.return, _);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (_) {
                ne(e, e.return, _);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      et(t, e), ct(e), r & 4 && Tf(e);
      break;
    case 21:
      break;
    default:
      et(t, e), ct(e);
  }
}
function ct(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Qm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (_i(i, ""), (r.flags &= -33));
          var s = Ef(e);
          cu(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = Ef(e);
          uu(e, l, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (a) {
      ne(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Gw(e, t, n) {
  (R = e), eg(e);
}
function eg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var i = R,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || _s;
      if (!o) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || ye;
        l = _s;
        var u = ye;
        if (((_s = o), (ye = a) && !u))
          for (R = i; R !== null; )
            (o = R),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Pf(i)
                : a !== null
                ? ((a.return = o), (R = a))
                : Pf(i);
        for (; s !== null; ) (R = s), eg(s), (s = s.sibling);
        (R = i), (_s = l), (ye = u);
      }
      Cf(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (R = s)) : Cf(e);
  }
}
function Cf(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ye || oa(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ye)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : nt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && uf(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                uf(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Ti(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        ye || (t.flags & 512 && lu(t));
      } catch (f) {
        ne(t, t.return, f);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function bf(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Pf(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            oa(4, t);
          } catch (a) {
            ne(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ne(t, i, a);
            }
          }
          var s = t.return;
          try {
            lu(t);
          } catch (a) {
            ne(t, s, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            lu(t);
          } catch (a) {
            ne(t, o, a);
          }
      }
    } catch (a) {
      ne(t, t.return, a);
    }
    if (t === e) {
      R = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (R = l);
      break;
    }
    R = t.return;
  }
}
var qw = Math.ceil,
  Eo = $t.ReactCurrentDispatcher,
  xc = $t.ReactCurrentOwner,
  Qe = $t.ReactCurrentBatchConfig,
  $ = 0,
  ce = null,
  oe = null,
  pe = 0,
  je = 0,
  mr = xn(0),
  le = 0,
  Mi = null,
  Hn = 0,
  aa = 0,
  Ec = 0,
  hi = null,
  ke = null,
  Tc = 0,
  Rr = 1 / 0,
  Tt = null,
  To = !1,
  du = null,
  cn = null,
  Ss = !1,
  tn = null,
  Co = 0,
  mi = 0,
  fu = null,
  $s = -1,
  Bs = 0;
function Te() {
  return $ & 6 ? re() : $s !== -1 ? $s : ($s = re());
}
function dn(e) {
  return e.mode & 1
    ? $ & 2 && pe !== 0
      ? pe & -pe
      : Nw.transition !== null
      ? (Bs === 0 && (Bs = Uh()), Bs)
      : ((e = B),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Wh(e.type))),
        e)
    : 1;
}
function at(e, t, n, r) {
  if (50 < mi) throw ((mi = 0), (fu = null), Error(k(185)));
  Vi(e, n, r),
    (!($ & 2) || e !== ce) &&
      (e === ce && (!($ & 2) && (aa |= n), le === 4 && Xt(e, pe)),
      Le(e, r),
      n === 1 && $ === 0 && !(t.mode & 1) && ((Rr = re() + 500), ra && En()));
}
function Le(e, t) {
  var n = e.callbackNode;
  N0(e, t);
  var r = ao(e, e === ce ? pe : 0);
  if (r === 0)
    n !== null && Md(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Md(n), t === 1))
      e.tag === 0 ? kw(If.bind(null, e)) : cm(If.bind(null, e)),
        Cw(function () {
          !($ & 6) && En();
        }),
        (n = null);
    else {
      switch (zh(r)) {
        case 1:
          n = Yu;
          break;
        case 4:
          n = jh;
          break;
        case 16:
          n = oo;
          break;
        case 536870912:
          n = Dh;
          break;
        default:
          n = oo;
      }
      n = lg(n, tg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function tg(e, t) {
  if ((($s = -1), (Bs = 0), $ & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (Sr() && e.callbackNode !== n) return null;
  var r = ao(e, e === ce ? pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = bo(e, r);
  else {
    t = r;
    var i = $;
    $ |= 2;
    var s = rg();
    (ce !== e || pe !== t) && ((Tt = null), (Rr = re() + 500), Dn(e, t));
    do
      try {
        Yw();
        break;
      } catch (l) {
        ng(e, l);
      }
    while (!0);
    uc(),
      (Eo.current = s),
      ($ = i),
      oe !== null ? (t = 0) : ((ce = null), (pe = 0), (t = le));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = zl(e)), i !== 0 && ((r = i), (t = pu(e, i)))), t === 1)
    )
      throw ((n = Mi), Dn(e, 0), Xt(e, r), Le(e, re()), n);
    if (t === 6) Xt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Kw(i) &&
          ((t = bo(e, r)),
          t === 2 && ((s = zl(e)), s !== 0 && ((r = s), (t = pu(e, s)))),
          t === 1))
      )
        throw ((n = Mi), Dn(e, 0), Xt(e, r), Le(e, re()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Nn(e, ke, Tt);
          break;
        case 3:
          if (
            (Xt(e, r), (r & 130023424) === r && ((t = Tc + 500 - re()), 10 < t))
          ) {
            if (ao(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Te(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ql(Nn.bind(null, e, ke, Tt), t);
            break;
          }
          Nn(e, ke, Tt);
          break;
        case 4:
          if ((Xt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - ot(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = re() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * qw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ql(Nn.bind(null, e, ke, Tt), r);
            break;
          }
          Nn(e, ke, Tt);
          break;
        case 5:
          Nn(e, ke, Tt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Le(e, re()), e.callbackNode === n ? tg.bind(null, e) : null;
}
function pu(e, t) {
  var n = hi;
  return (
    e.current.memoizedState.isDehydrated && (Dn(e, t).flags |= 256),
    (e = bo(e, t)),
    e !== 2 && ((t = ke), (ke = n), t !== null && hu(t)),
    e
  );
}
function hu(e) {
  ke === null ? (ke = e) : ke.push.apply(ke, e);
}
function Kw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!ut(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Xt(e, t) {
  for (
    t &= ~Ec,
      t &= ~aa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ot(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function If(e) {
  if ($ & 6) throw Error(k(327));
  Sr();
  var t = ao(e, 0);
  if (!(t & 1)) return Le(e, re()), null;
  var n = bo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = zl(e);
    r !== 0 && ((t = r), (n = pu(e, r)));
  }
  if (n === 1) throw ((n = Mi), Dn(e, 0), Xt(e, t), Le(e, re()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Nn(e, ke, Tt),
    Le(e, re()),
    null
  );
}
function Cc(e, t) {
  var n = $;
  $ |= 1;
  try {
    return e(t);
  } finally {
    ($ = n), $ === 0 && ((Rr = re() + 500), ra && En());
  }
}
function Wn(e) {
  tn !== null && tn.tag === 0 && !($ & 6) && Sr();
  var t = $;
  $ |= 1;
  var n = Qe.transition,
    r = B;
  try {
    if (((Qe.transition = null), (B = 1), e)) return e();
  } finally {
    (B = r), (Qe.transition = n), ($ = t), !($ & 6) && En();
  }
}
function bc() {
  (je = mr.current), K(mr);
}
function Dn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Tw(n)), oe !== null))
    for (n = oe.return; n !== null; ) {
      var r = n;
      switch ((oc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && po();
          break;
        case 3:
          Nr(), K(Oe), K(_e), mc();
          break;
        case 5:
          hc(r);
          break;
        case 4:
          Nr();
          break;
        case 13:
          K(J);
          break;
        case 19:
          K(J);
          break;
        case 10:
          cc(r.type._context);
          break;
        case 22:
        case 23:
          bc();
      }
      n = n.return;
    }
  if (
    ((ce = e),
    (oe = e = fn(e.current, null)),
    (pe = je = t),
    (le = 0),
    (Mi = null),
    (Ec = aa = Hn = 0),
    (ke = hi = null),
    An !== null)
  ) {
    for (t = 0; t < An.length; t++)
      if (((n = An[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    An = null;
  }
  return e;
}
function ng(e, t) {
  do {
    var n = oe;
    try {
      if ((uc(), (Us.current = xo), So)) {
        for (var r = Z.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        So = !1;
      }
      if (
        ((Vn = 0),
        (ue = ae = Z = null),
        (fi = !1),
        (Ri = 0),
        (xc.current = null),
        n === null || n.return === null)
      ) {
        (le = 1), (Mi = t), (oe = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          l = n,
          a = t;
        if (
          ((t = pe),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = mf(o);
          if (v !== null) {
            (v.flags &= -257),
              gf(v, o, l, s, t),
              v.mode & 1 && hf(s, u, t),
              (t = v),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var _ = new Set();
              _.add(a), (t.updateQueue = _);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              hf(s, u, t), Pc();
              break e;
            }
            a = Error(k(426));
          }
        } else if (Y && l.mode & 1) {
          var S = mf(o);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              gf(S, o, l, s, t),
              ac(Or(a, l));
            break e;
          }
        }
        (s = a = Or(a, l)),
          le !== 4 && (le = 2),
          hi === null ? (hi = [s]) : hi.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var p = zm(s, a, t);
              lf(s, p);
              break e;
            case 1:
              l = a;
              var g = s.type,
                h = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof g.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (cn === null || !cn.has(h))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var w = Fm(s, l, t);
                lf(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      sg(n);
    } catch (x) {
      (t = x), oe === n && n !== null && (oe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function rg() {
  var e = Eo.current;
  return (Eo.current = xo), e === null ? xo : e;
}
function Pc() {
  (le === 0 || le === 3 || le === 2) && (le = 4),
    ce === null || (!(Hn & 268435455) && !(aa & 268435455)) || Xt(ce, pe);
}
function bo(e, t) {
  var n = $;
  $ |= 2;
  var r = rg();
  (ce !== e || pe !== t) && ((Tt = null), Dn(e, t));
  do
    try {
      Xw();
      break;
    } catch (i) {
      ng(e, i);
    }
  while (!0);
  if ((uc(), ($ = n), (Eo.current = r), oe !== null)) throw Error(k(261));
  return (ce = null), (pe = 0), le;
}
function Xw() {
  for (; oe !== null; ) ig(oe);
}
function Yw() {
  for (; oe !== null && !S0(); ) ig(oe);
}
function ig(e) {
  var t = ag(e.alternate, e, je);
  (e.memoizedProps = e.pendingProps),
    t === null ? sg(e) : (oe = t),
    (xc.current = null);
}
function sg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Vw(n, t)), n !== null)) {
        (n.flags &= 32767), (oe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (le = 6), (oe = null);
        return;
      }
    } else if (((n = Bw(n, t, je)), n !== null)) {
      oe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      oe = t;
      return;
    }
    oe = t = e;
  } while (t !== null);
  le === 0 && (le = 5);
}
function Nn(e, t, n) {
  var r = B,
    i = Qe.transition;
  try {
    (Qe.transition = null), (B = 1), Qw(e, t, n, r);
  } finally {
    (Qe.transition = i), (B = r);
  }
  return null;
}
function Qw(e, t, n, r) {
  do Sr();
  while (tn !== null);
  if ($ & 6) throw Error(k(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (O0(e, s),
    e === ce && ((oe = ce = null), (pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ss ||
      ((Ss = !0),
      lg(oo, function () {
        return Sr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Qe.transition), (Qe.transition = null);
    var o = B;
    B = 1;
    var l = $;
    ($ |= 4),
      (xc.current = null),
      Ww(e, n),
      Zm(n, e),
      vw(Wl),
      (lo = !!Hl),
      (Wl = Hl = null),
      (e.current = n),
      Gw(n),
      x0(),
      ($ = l),
      (B = o),
      (Qe.transition = s);
  } else e.current = n;
  if (
    (Ss && ((Ss = !1), (tn = e), (Co = i)),
    (s = e.pendingLanes),
    s === 0 && (cn = null),
    C0(n.stateNode),
    Le(e, re()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (To) throw ((To = !1), (e = du), (du = null), e);
  return (
    Co & 1 && e.tag !== 0 && Sr(),
    (s = e.pendingLanes),
    s & 1 ? (e === fu ? mi++ : ((mi = 0), (fu = e))) : (mi = 0),
    En(),
    null
  );
}
function Sr() {
  if (tn !== null) {
    var e = zh(Co),
      t = Qe.transition,
      n = B;
    try {
      if (((Qe.transition = null), (B = 16 > e ? 16 : e), tn === null))
        var r = !1;
      else {
        if (((e = tn), (tn = null), (Co = 0), $ & 6)) throw Error(k(331));
        var i = $;
        for ($ |= 4, R = e.current; R !== null; ) {
          var s = R,
            o = s.child;
          if (R.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (R = u; R !== null; ) {
                  var c = R;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pi(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (R = d);
                  else
                    for (; R !== null; ) {
                      c = R;
                      var f = c.sibling,
                        v = c.return;
                      if ((Ym(c), c === u)) {
                        R = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = v), (R = f);
                        break;
                      }
                      R = v;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var _ = y.child;
                if (_ !== null) {
                  y.child = null;
                  do {
                    var S = _.sibling;
                    (_.sibling = null), (_ = S);
                  } while (_ !== null);
                }
              }
              R = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (R = o);
          else
            e: for (; R !== null; ) {
              if (((s = R), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    pi(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                (p.return = s.return), (R = p);
                break e;
              }
              R = s.return;
            }
        }
        var g = e.current;
        for (R = g; R !== null; ) {
          o = R;
          var h = o.child;
          if (o.subtreeFlags & 2064 && h !== null) (h.return = o), (R = h);
          else
            e: for (o = g; R !== null; ) {
              if (((l = R), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      oa(9, l);
                  }
                } catch (x) {
                  ne(l, l.return, x);
                }
              if (l === o) {
                R = null;
                break e;
              }
              var w = l.sibling;
              if (w !== null) {
                (w.return = l.return), (R = w);
                break e;
              }
              R = l.return;
            }
        }
        if (
          (($ = i), En(), mt && typeof mt.onPostCommitFiberRoot == "function")
        )
          try {
            mt.onPostCommitFiberRoot(Jo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (B = n), (Qe.transition = t);
    }
  }
  return !1;
}
function kf(e, t, n) {
  (t = Or(n, t)),
    (t = zm(e, t, 1)),
    (e = un(e, t, 1)),
    (t = Te()),
    e !== null && (Vi(e, 1, t), Le(e, t));
}
function ne(e, t, n) {
  if (e.tag === 3) kf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        kf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (cn === null || !cn.has(r)))
        ) {
          (e = Or(n, e)),
            (e = Fm(t, e, 1)),
            (t = un(t, e, 1)),
            (e = Te()),
            t !== null && (Vi(t, 1, e), Le(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Jw(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Te()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ce === e &&
      (pe & n) === n &&
      (le === 4 || (le === 3 && (pe & 130023424) === pe && 500 > re() - Tc)
        ? Dn(e, 0)
        : (Ec |= n)),
    Le(e, t);
}
function og(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ds), (ds <<= 1), !(ds & 130023424) && (ds = 4194304))
      : (t = 1));
  var n = Te();
  (e = Dt(e, t)), e !== null && (Vi(e, t, n), Le(e, n));
}
function Zw(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), og(e, n);
}
function e_(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), og(e, n);
}
var ag;
ag = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Oe.current) Ne = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ne = !1), $w(e, t, n);
      Ne = !!(e.flags & 131072);
    }
  else (Ne = !1), Y && t.flags & 1048576 && dm(t, go, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Fs(e, t), (e = t.pendingProps);
      var i = Pr(t, _e.current);
      _r(t, n), (i = vc(null, t, r, e, i, n));
      var s = yc();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Re(r) ? ((s = !0), ho(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            fc(t),
            (i.updater = sa),
            (t.stateNode = i),
            (i._reactInternals = t),
            eu(t, r, e, n),
            (t = ru(null, t, r, !0, s, n)))
          : ((t.tag = 0), Y && s && sc(t), Ee(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Fs(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = n_(r)),
          (e = nt(r, e)),
          i)
        ) {
          case 0:
            t = nu(null, t, r, e, n);
            break e;
          case 1:
            t = wf(null, t, r, e, n);
            break e;
          case 11:
            t = vf(null, t, r, e, n);
            break e;
          case 14:
            t = yf(null, t, r, nt(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : nt(r, i)),
        nu(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : nt(r, i)),
        wf(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Hm(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          vm(e, t),
          wo(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = Or(Error(k(423)), t)), (t = _f(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Or(Error(k(424)), t)), (t = _f(e, t, r, n, i));
            break e;
          } else
            for (
              Ue = ln(t.stateNode.containerInfo.firstChild),
                $e = t,
                Y = !0,
                it = null,
                n = mm(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ir(), r === i)) {
            t = Ut(e, t, n);
            break e;
          }
          Ee(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ym(t),
        e === null && Ql(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Gl(r, i) ? (o = null) : s !== null && Gl(r, s) && (t.flags |= 32),
        Vm(e, t),
        Ee(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Ql(t), null;
    case 13:
      return Wm(e, t, n);
    case 4:
      return (
        pc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = kr(t, null, r, n)) : Ee(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : nt(r, i)),
        vf(e, t, r, i, n)
      );
    case 7:
      return Ee(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ee(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ee(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          W(vo, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (ut(s.value, o)) {
            if (s.children === i.children && !Oe.current) {
              t = Ut(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = Lt(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      Jl(s.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(k(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  Jl(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Ee(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        _r(t, n),
        (i = Je(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ee(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = nt(r, t.pendingProps)),
        (i = nt(r.type, i)),
        yf(e, t, r, i, n)
      );
    case 15:
      return $m(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : nt(r, i)),
        Fs(e, t),
        (t.tag = 1),
        Re(r) ? ((e = !0), ho(t)) : (e = !1),
        _r(t, n),
        Um(t, r, i),
        eu(t, r, i, n),
        ru(null, t, r, !0, e, n)
      );
    case 19:
      return Gm(e, t, n);
    case 22:
      return Bm(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function lg(e, t) {
  return Mh(e, t);
}
function t_(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ye(e, t, n, r) {
  return new t_(e, t, n, r);
}
function Ic(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function n_(e) {
  if (typeof e == "function") return Ic(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === qu)) return 11;
    if (e === Ku) return 14;
  }
  return 2;
}
function fn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ye(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Vs(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) Ic(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case sr:
        return Un(n.children, i, s, t);
      case Gu:
        (o = 8), (i |= 8);
        break;
      case Tl:
        return (
          (e = Ye(12, n, t, i | 2)), (e.elementType = Tl), (e.lanes = s), e
        );
      case Cl:
        return (e = Ye(13, n, t, i)), (e.elementType = Cl), (e.lanes = s), e;
      case bl:
        return (e = Ye(19, n, t, i)), (e.elementType = bl), (e.lanes = s), e;
      case yh:
        return la(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case gh:
              o = 10;
              break e;
            case vh:
              o = 9;
              break e;
            case qu:
              o = 11;
              break e;
            case Ku:
              o = 14;
              break e;
            case Gt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ye(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function Un(e, t, n, r) {
  return (e = Ye(7, e, r, t)), (e.lanes = n), e;
}
function la(e, t, n, r) {
  return (
    (e = Ye(22, e, r, t)),
    (e.elementType = yh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Xa(e, t, n) {
  return (e = Ye(6, e, null, t)), (e.lanes = n), e;
}
function Ya(e, t, n) {
  return (
    (t = Ye(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function r_(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Na(0)),
    (this.expirationTimes = Na(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Na(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function kc(e, t, n, r, i, s, o, l, a) {
  return (
    (e = new r_(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Ye(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fc(s),
    e
  );
}
function i_(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ir,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ug(e) {
  if (!e) return yn;
  e = e._reactInternals;
  e: {
    if (Zn(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Re(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Re(n)) return um(e, n, t);
  }
  return t;
}
function cg(e, t, n, r, i, s, o, l, a) {
  return (
    (e = kc(n, r, !0, e, i, s, o, l, a)),
    (e.context = ug(null)),
    (n = e.current),
    (r = Te()),
    (i = dn(n)),
    (s = Lt(r, i)),
    (s.callback = t ?? null),
    un(n, s, i),
    (e.current.lanes = i),
    Vi(e, i, r),
    Le(e, r),
    e
  );
}
function ua(e, t, n, r) {
  var i = t.current,
    s = Te(),
    o = dn(i);
  return (
    (n = ug(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Lt(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = un(i, t, o)),
    e !== null && (at(e, i, o, s), Ds(e, i, o)),
    o
  );
}
function Po(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Nf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Nc(e, t) {
  Nf(e, t), (e = e.alternate) && Nf(e, t);
}
function s_() {
  return null;
}
var dg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Oc(e) {
  this._internalRoot = e;
}
ca.prototype.render = Oc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  ua(e, t, null, null);
};
ca.prototype.unmount = Oc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Wn(function () {
      ua(null, e, null, null);
    }),
      (t[jt] = null);
  }
};
function ca(e) {
  this._internalRoot = e;
}
ca.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Bh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++);
    Kt.splice(n, 0, e), n === 0 && Hh(e);
  }
};
function Rc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function da(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Of() {}
function o_(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = Po(o);
        s.call(u);
      };
    }
    var o = cg(t, r, e, 0, null, !1, !1, "", Of);
    return (
      (e._reactRootContainer = o),
      (e[jt] = o.current),
      Pi(e.nodeType === 8 ? e.parentNode : e),
      Wn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Po(a);
      l.call(u);
    };
  }
  var a = kc(e, 0, !1, null, null, !1, !1, "", Of);
  return (
    (e._reactRootContainer = a),
    (e[jt] = a.current),
    Pi(e.nodeType === 8 ? e.parentNode : e),
    Wn(function () {
      ua(t, a, n, r);
    }),
    a
  );
}
function fa(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = Po(o);
        l.call(a);
      };
    }
    ua(t, o, e, i);
  } else o = o_(n, t, e, i, r);
  return Po(o);
}
Fh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ii(t.pendingLanes);
        n !== 0 &&
          (Qu(t, n | 1), Le(t, re()), !($ & 6) && ((Rr = re() + 500), En()));
      }
      break;
    case 13:
      Wn(function () {
        var r = Dt(e, 1);
        if (r !== null) {
          var i = Te();
          at(r, e, 1, i);
        }
      }),
        Nc(e, 1);
  }
};
Ju = function (e) {
  if (e.tag === 13) {
    var t = Dt(e, 134217728);
    if (t !== null) {
      var n = Te();
      at(t, e, 134217728, n);
    }
    Nc(e, 134217728);
  }
};
$h = function (e) {
  if (e.tag === 13) {
    var t = dn(e),
      n = Dt(e, t);
    if (n !== null) {
      var r = Te();
      at(n, e, t, r);
    }
    Nc(e, t);
  }
};
Bh = function () {
  return B;
};
Vh = function (e, t) {
  var n = B;
  try {
    return (B = e), t();
  } finally {
    B = n;
  }
};
jl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((kl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = na(r);
            if (!i) throw Error(k(90));
            _h(r), kl(r, i);
          }
        }
      }
      break;
    case "textarea":
      xh(e, n);
      break;
    case "select":
      (t = n.value), t != null && gr(e, !!n.multiple, t, !1);
  }
};
kh = Cc;
Nh = Wn;
var a_ = { usingClientEntryPoint: !1, Events: [Wi, ur, na, Ph, Ih, Cc] },
  ei = {
    findFiberByHostInstance: Ln,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  l_ = {
    bundleType: ei.bundleType,
    version: ei.version,
    rendererPackageName: ei.rendererPackageName,
    rendererConfig: ei.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: $t.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Lh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ei.findFiberByHostInstance || s_,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var xs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xs.isDisabled && xs.supportsFiber)
    try {
      (Jo = xs.inject(l_)), (mt = xs);
    } catch {}
}
We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = a_;
We.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Rc(t)) throw Error(k(200));
  return i_(e, t, null, n);
};
We.createRoot = function (e, t) {
  if (!Rc(e)) throw Error(k(299));
  var n = !1,
    r = "",
    i = dg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = kc(e, 1, !1, null, null, n, !1, r, i)),
    (e[jt] = t.current),
    Pi(e.nodeType === 8 ? e.parentNode : e),
    new Oc(t)
  );
};
We.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = Lh(t)), (e = e === null ? null : e.stateNode), e;
};
We.flushSync = function (e) {
  return Wn(e);
};
We.hydrate = function (e, t, n) {
  if (!da(t)) throw Error(k(200));
  return fa(null, e, t, !0, n);
};
We.hydrateRoot = function (e, t, n) {
  if (!Rc(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = dg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = cg(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[jt] = t.current),
    Pi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new ca(t);
};
We.render = function (e, t, n) {
  if (!da(t)) throw Error(k(200));
  return fa(null, e, t, !1, n);
};
We.unmountComponentAtNode = function (e) {
  if (!da(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (Wn(function () {
        fa(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[jt] = null);
        });
      }),
      !0)
    : !1;
};
We.unstable_batchedUpdates = Cc;
We.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!da(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return fa(e, t, n, !1, r);
};
We.version = "18.3.1-next-f1338f8080-20240426";
function fg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fg);
    } catch (e) {
      console.error(e);
    }
}
fg(), (fh.exports = We);
var u_ = fh.exports,
  Rf = u_;
(xl.createRoot = Rf.createRoot), (xl.hydrateRoot = Rf.hydrateRoot);
/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ji() {
  return (
    (ji = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ji.apply(this, arguments)
  );
}
var nn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(nn || (nn = {}));
const Lf = "popstate";
function c_(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: o, hash: l } = r.location;
    return mu(
      "",
      { pathname: s, search: o, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Io(i);
  }
  return f_(t, n, null, e);
}
function ie(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function pg(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function d_() {
  return Math.random().toString(36).substr(2, 8);
}
function Af(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function mu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ji(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Fr(t) : t,
      { state: n, key: (t && t.key) || r || d_() }
    )
  );
}
function Io(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Fr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function f_(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    l = nn.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), o.replaceState(ji({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    l = nn.Pop;
    let S = c(),
      p = S == null ? null : S - u;
    (u = S), a && a({ action: l, location: _.location, delta: p });
  }
  function f(S, p) {
    l = nn.Push;
    let g = mu(_.location, S, p);
    u = c() + 1;
    let h = Af(g, u),
      w = _.createHref(g);
    try {
      o.pushState(h, "", w);
    } catch (x) {
      if (x instanceof DOMException && x.name === "DataCloneError") throw x;
      i.location.assign(w);
    }
    s && a && a({ action: l, location: _.location, delta: 1 });
  }
  function v(S, p) {
    l = nn.Replace;
    let g = mu(_.location, S, p);
    u = c();
    let h = Af(g, u),
      w = _.createHref(g);
    o.replaceState(h, "", w),
      s && a && a({ action: l, location: _.location, delta: 0 });
  }
  function y(S) {
    let p = i.location.origin !== "null" ? i.location.origin : i.location.href,
      g = typeof S == "string" ? S : Io(S);
    return (
      (g = g.replace(/ $/, "%20")),
      ie(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          g
      ),
      new URL(g, p)
    );
  }
  let _ = {
    get action() {
      return l;
    },
    get location() {
      return e(i, o);
    },
    listen(S) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Lf, d),
        (a = S),
        () => {
          i.removeEventListener(Lf, d), (a = null);
        }
      );
    },
    createHref(S) {
      return t(i, S);
    },
    createURL: y,
    encodeLocation(S) {
      let p = y(S);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: f,
    replace: v,
    go(S) {
      return o.go(S);
    },
  };
  return _;
}
var Mf;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Mf || (Mf = {}));
function p_(e, t, n) {
  return n === void 0 && (n = "/"), h_(e, t, n, !1);
}
function h_(e, t, n, r) {
  let i = typeof t == "string" ? Fr(t) : t,
    s = Lc(i.pathname || "/", n);
  if (s == null) return null;
  let o = hg(e);
  m_(o);
  let l = null;
  for (let a = 0; l == null && a < o.length; ++a) {
    let u = b_(s);
    l = T_(o[a], u, r);
  }
  return l;
}
function hg(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, l) => {
    let a = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    a.relativePath.startsWith("/") &&
      (ie(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = pn([r, a.relativePath]),
      c = n.concat(a);
    s.children &&
      s.children.length > 0 &&
      (ie(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      hg(s.children, t, c, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: x_(u, s.index), routesMeta: c });
  };
  return (
    e.forEach((s, o) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) i(s, o);
      else for (let a of mg(s.path)) i(s, o, a);
    }),
    t
  );
}
function mg(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = mg(r.join("/")),
    l = [];
  return (
    l.push(...o.map((a) => (a === "" ? s : [s, a].join("/")))),
    i && l.push(...o),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function m_(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : E_(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const g_ = /^:[\w-]+$/,
  v_ = 3,
  y_ = 2,
  w_ = 1,
  __ = 10,
  S_ = -2,
  jf = (e) => e === "*";
function x_(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(jf) && (r += S_),
    t && (r += y_),
    n
      .filter((i) => !jf(i))
      .reduce((i, s) => i + (g_.test(s) ? v_ : s === "" ? w_ : __), r)
  );
}
function E_(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function T_(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    s = "/",
    o = [];
  for (let l = 0; l < r.length; ++l) {
    let a = r[l],
      u = l === r.length - 1,
      c = s === "/" ? t : t.slice(s.length) || "/",
      d = Df(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        c
      ),
      f = a.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = Df(
          { path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
          c
        )),
      !d)
    )
      return null;
    Object.assign(i, d.params),
      o.push({
        params: i,
        pathname: pn([s, d.pathname]),
        pathnameBase: N_(pn([s, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== "/" && (s = pn([s, d.pathnameBase]));
  }
  return o;
}
function Df(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = C_(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: v } = c;
      if (f === "*") {
        let _ = l[d] || "";
        o = s.slice(0, s.length - _.length).replace(/(.)\/+$/, "$1");
      }
      const y = l[d];
      return (
        v && !y ? (u[f] = void 0) : (u[f] = (y || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function C_(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    pg(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function b_(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      pg(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Lc(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function P_(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Fr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : I_(n, t)) : t,
    search: O_(r),
    hash: R_(i),
  };
}
function I_(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Qa(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function k_(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Ac(e, t) {
  let n = k_(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Mc(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Fr(e))
    : ((i = ji({}, e)),
      ie(
        !i.pathname || !i.pathname.includes("?"),
        Qa("?", "pathname", "search", i)
      ),
      ie(
        !i.pathname || !i.pathname.includes("#"),
        Qa("#", "pathname", "hash", i)
      ),
      ie(!i.search || !i.search.includes("#"), Qa("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    l;
  if (o == null) l = n;
  else {
    let d = t.length - 1;
    if (!r && o.startsWith("..")) {
      let f = o.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      i.pathname = f.join("/");
    }
    l = d >= 0 ? t[d] : "/";
  }
  let a = P_(i, l),
    u = o && o !== "/" && o.endsWith("/"),
    c = (s || o === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a;
}
const pn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  N_ = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  O_ = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  R_ = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function L_(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const gg = ["post", "put", "patch", "delete"];
new Set(gg);
const A_ = ["get", ...gg];
new Set(A_);
/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Di() {
  return (
    (Di = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Di.apply(this, arguments)
  );
}
const jc = C.createContext(null),
  M_ = C.createContext(null),
  Tn = C.createContext(null),
  pa = C.createContext(null),
  wt = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  vg = C.createContext(null);
function j_(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  $r() || ie(!1);
  let { basename: r, navigator: i } = C.useContext(Tn),
    { hash: s, pathname: o, search: l } = _g(e, { relative: n }),
    a = o;
  return (
    r !== "/" && (a = o === "/" ? r : pn([r, o])),
    i.createHref({ pathname: a, search: l, hash: s })
  );
}
function $r() {
  return C.useContext(pa) != null;
}
function qi() {
  return $r() || ie(!1), C.useContext(pa).location;
}
function yg(e) {
  C.useContext(Tn).static || C.useLayoutEffect(e);
}
function Bt() {
  let { isDataRoute: e } = C.useContext(wt);
  return e ? Q_() : D_();
}
function D_() {
  $r() || ie(!1);
  let e = C.useContext(jc),
    { basename: t, future: n, navigator: r } = C.useContext(Tn),
    { matches: i } = C.useContext(wt),
    { pathname: s } = qi(),
    o = JSON.stringify(Ac(i, n.v7_relativeSplatPath)),
    l = C.useRef(!1);
  return (
    yg(() => {
      l.current = !0;
    }),
    C.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = Mc(u, JSON.parse(o), s, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : pn([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, o, s, e]
    )
  );
}
const U_ = C.createContext(null);
function z_(e) {
  let t = C.useContext(wt).outlet;
  return t && C.createElement(U_.Provider, { value: e }, t);
}
function wg() {
  let { matches: e } = C.useContext(wt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function _g(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = C.useContext(Tn),
    { matches: i } = C.useContext(wt),
    { pathname: s } = qi(),
    o = JSON.stringify(Ac(i, r.v7_relativeSplatPath));
  return C.useMemo(() => Mc(e, JSON.parse(o), s, n === "path"), [e, o, s, n]);
}
function F_(e, t) {
  return $_(e, t);
}
function $_(e, t, n, r) {
  $r() || ie(!1);
  let { navigator: i } = C.useContext(Tn),
    { matches: s } = C.useContext(wt),
    o = s[s.length - 1],
    l = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : "/";
  o && o.route;
  let u = qi(),
    c;
  if (t) {
    var d;
    let S = typeof t == "string" ? Fr(t) : t;
    a === "/" || ((d = S.pathname) != null && d.startsWith(a)) || ie(!1),
      (c = S);
  } else c = u;
  let f = c.pathname || "/",
    v = f;
  if (a !== "/") {
    let S = a.replace(/^\//, "").split("/");
    v = "/" + f.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let y = p_(e, { pathname: v }),
    _ = G_(
      y &&
        y.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, l, S.params),
            pathname: pn([
              a,
              i.encodeLocation
                ? i.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? a
                : pn([
                    a,
                    i.encodeLocation
                      ? i.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
  return t && _
    ? C.createElement(
        pa.Provider,
        {
          value: {
            location: Di(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: nn.Pop,
          },
        },
        _
      )
    : _;
}
function B_() {
  let e = Y_(),
    t = L_(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: i }, n) : null,
    null
  );
}
const V_ = C.createElement(B_, null);
class H_ extends C.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? C.createElement(
          wt.Provider,
          { value: this.props.routeContext },
          C.createElement(vg.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function W_(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = C.useContext(jc);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(wt.Provider, { value: t }, r)
  );
}
function G_(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if ((s = n) != null && s.errors) e = n.matches;
    else return null;
  }
  let o = e,
    l = (i = n) == null ? void 0 : i.errors;
  if (l != null) {
    let c = o.findIndex(
      (d) => d.route.id && (l == null ? void 0 : l[d.route.id]) !== void 0
    );
    c >= 0 || ie(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let d = o[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: f, errors: v } = n,
          y =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!v || v[d.route.id] === void 0);
        if (d.route.lazy || y) {
          (a = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((c, d, f) => {
    let v,
      y = !1,
      _ = null,
      S = null;
    n &&
      ((v = l && d.route.id ? l[d.route.id] : void 0),
      (_ = d.route.errorElement || V_),
      a &&
        (u < 0 && f === 0
          ? ((y = !0), (S = null))
          : u === f &&
            ((y = !0), (S = d.route.hydrateFallbackElement || null))));
    let p = t.concat(o.slice(0, f + 1)),
      g = () => {
        let h;
        return (
          v
            ? (h = _)
            : y
            ? (h = S)
            : d.route.Component
            ? (h = C.createElement(d.route.Component, null))
            : d.route.element
            ? (h = d.route.element)
            : (h = c),
          C.createElement(W_, {
            match: d,
            routeContext: { outlet: c, matches: p, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? C.createElement(H_, {
          location: n.location,
          revalidation: n.revalidation,
          component: _,
          error: v,
          children: g(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : g();
  }, null);
}
var Sg = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Sg || {}),
  ko = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(ko || {});
function q_(e) {
  let t = C.useContext(jc);
  return t || ie(!1), t;
}
function K_(e) {
  let t = C.useContext(M_);
  return t || ie(!1), t;
}
function X_(e) {
  let t = C.useContext(wt);
  return t || ie(!1), t;
}
function xg(e) {
  let t = X_(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ie(!1), n.route.id;
}
function Y_() {
  var e;
  let t = C.useContext(vg),
    n = K_(ko.UseRouteError),
    r = xg(ko.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Q_() {
  let { router: e } = q_(Sg.UseNavigateStable),
    t = xg(ko.UseNavigateStable),
    n = C.useRef(!1);
  return (
    yg(() => {
      n.current = !0;
    }),
    C.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Di({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
function J_(e) {
  let { to: t, replace: n, state: r, relative: i } = e;
  $r() || ie(!1);
  let { future: s, static: o } = C.useContext(Tn),
    { matches: l } = C.useContext(wt),
    { pathname: a } = qi(),
    u = Bt(),
    c = Mc(t, Ac(l, s.v7_relativeSplatPath), a, i === "path"),
    d = JSON.stringify(c);
  return (
    C.useEffect(
      () => u(JSON.parse(d), { replace: n, state: r, relative: i }),
      [u, d, i, n, r]
    ),
    null
  );
}
function Z_(e) {
  return z_(e.context);
}
function tt(e) {
  ie(!1);
}
function eS(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = nn.Pop,
    navigator: s,
    static: o = !1,
    future: l,
  } = e;
  $r() && ie(!1);
  let a = t.replace(/^\/*/, "/"),
    u = C.useMemo(
      () => ({
        basename: a,
        navigator: s,
        static: o,
        future: Di({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, s, o]
    );
  typeof r == "string" && (r = Fr(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: v = null,
      key: y = "default",
    } = r,
    _ = C.useMemo(() => {
      let S = Lc(c, a);
      return S == null
        ? null
        : {
            location: { pathname: S, search: d, hash: f, state: v, key: y },
            navigationType: i,
          };
    }, [a, c, d, f, v, y, i]);
  return _ == null
    ? null
    : C.createElement(
        Tn.Provider,
        { value: u },
        C.createElement(pa.Provider, { children: n, value: _ })
      );
}
function tS(e) {
  let { children: t, location: n } = e;
  return F_(gu(t), n);
}
new Promise(() => {});
function gu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    C.Children.forEach(e, (r, i) => {
      if (!C.isValidElement(r)) return;
      let s = [...t, i];
      if (r.type === C.Fragment) {
        n.push.apply(n, gu(r.props.children, s));
        return;
      }
      r.type !== tt && ie(!1), !r.props.index || !r.props.children || ie(!1);
      let o = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = gu(r.props.children, s)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function vu() {
  return (
    (vu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vu.apply(this, arguments)
  );
}
function nS(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function rS(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function iS(e, t) {
  return e.button === 0 && (!t || t === "_self") && !rS(e);
}
const sS = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  oS = "6";
try {
  window.__reactRouterVersion = oS;
} catch {}
const aS = "startTransition",
  Uf = Sl[aS];
function lS(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    s = C.useRef();
  s.current == null && (s.current = c_({ window: i, v5Compat: !0 }));
  let o = s.current,
    [l, a] = C.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    c = C.useCallback(
      (d) => {
        u && Uf ? Uf(() => a(d)) : a(d);
      },
      [a, u]
    );
  return (
    C.useLayoutEffect(() => o.listen(c), [o, c]),
    C.createElement(eS, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: o,
      future: r,
    })
  );
}
const uS =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  cS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  we = C.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: l,
        target: a,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = t,
      f = nS(t, sS),
      { basename: v } = C.useContext(Tn),
      y,
      _ = !1;
    if (typeof u == "string" && cS.test(u) && ((y = u), uS))
      try {
        let h = new URL(window.location.href),
          w = u.startsWith("//") ? new URL(h.protocol + u) : new URL(u),
          x = Lc(w.pathname, v);
        w.origin === h.origin && x != null
          ? (u = x + w.search + w.hash)
          : (_ = !0);
      } catch {}
    let S = j_(u, { relative: i }),
      p = dS(u, {
        replace: o,
        state: l,
        target: a,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: d,
      });
    function g(h) {
      r && r(h), h.defaultPrevented || p(h);
    }
    return C.createElement(
      "a",
      vu({}, f, { href: y || S, onClick: _ || s ? r : g, ref: n, target: a })
    );
  });
var zf;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(zf || (zf = {}));
var Ff;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Ff || (Ff = {}));
function dS(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    a = Bt(),
    u = qi(),
    c = _g(e, { relative: o });
  return C.useCallback(
    (d) => {
      if (iS(d, n)) {
        d.preventDefault();
        let f = r !== void 0 ? r : Io(u) === Io(c);
        a(e, {
          replace: f,
          state: i,
          preventScrollReset: s,
          relative: o,
          unstable_viewTransition: l,
        });
      }
    },
    [u, a, c, r, i, n, e, s, o, l]
  );
}
function $f(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function Dc(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : $f(t[n]) &&
          $f(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          Dc(e[n], t[n]);
    });
}
const Eg = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function Br() {
  const e = typeof document < "u" ? document : {};
  return Dc(e, Eg), e;
}
const fS = {
  document: Eg,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function qe() {
  const e = typeof window < "u" ? window : {};
  return Dc(e, fS), e;
}
function pS(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  );
}
function hS(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function yu(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function No() {
  return Date.now();
}
function mS(e) {
  const t = qe();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function gS(e, t) {
  t === void 0 && (t = "x");
  const n = qe();
  let r, i, s;
  const o = mS(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = o.transform || o.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((l) => l.replace(",", "."))
            .join(", ")),
        (s = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((s =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = s.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = s.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = s.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function Es(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function vS(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function De() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (r != null && !vS(r)) {
      const i = Object.keys(Object(r)).filter((s) => t.indexOf(s) < 0);
      for (let s = 0, o = i.length; s < o; s += 1) {
        const l = i[s],
          a = Object.getOwnPropertyDescriptor(r, l);
        a !== void 0 &&
          a.enumerable &&
          (Es(e[l]) && Es(r[l])
            ? r[l].__swiper__
              ? (e[l] = r[l])
              : De(e[l], r[l])
            : !Es(e[l]) && Es(r[l])
            ? ((e[l] = {}), r[l].__swiper__ ? (e[l] = r[l]) : De(e[l], r[l]))
            : (e[l] = r[l]));
      }
    }
  }
  return e;
}
function Ts(e, t, n) {
  e.style.setProperty(t, n);
}
function Tg(e) {
  let { swiper: t, targetPosition: n, side: r } = e;
  const i = qe(),
    s = -t.translate;
  let o = null,
    l;
  const a = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID);
  const u = n > s ? "next" : "prev",
    c = (f, v) => (u === "next" && f >= v) || (u === "prev" && f <= v),
    d = () => {
      (l = new Date().getTime()), o === null && (o = l);
      const f = Math.max(Math.min((l - o) / a, 1), 0),
        v = 0.5 - Math.cos(f * Math.PI) / 2;
      let y = s + v * (n - s);
      if ((c(y, n) && (y = n), t.wrapperEl.scrollTo({ [r]: y }), c(y, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: y });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(d);
    };
  d();
}
function pt(e, t) {
  return t === void 0 && (t = ""), [...e.children].filter((n) => n.matches(t));
}
function Oo(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function Ro(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : pS(t))), n;
}
function yS(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function wS(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function rn(e, t) {
  return qe().getComputedStyle(e, null).getPropertyValue(t);
}
function Bf(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function _S(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) n.push(r), (r = r.parentElement);
  return n;
}
function Vf(e, t, n) {
  const r = qe();
  return (
    e[t === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
    ) +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
    )
  );
}
function St(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t);
}
let Ja;
function SS() {
  const e = qe(),
    t = Br();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function Cg() {
  return Ja || (Ja = SS()), Ja;
}
let Za;
function xS(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = Cg(),
    r = qe(),
    i = r.navigator.platform,
    s = t || r.navigator.userAgent,
    o = { ios: !1, android: !1 },
    l = r.screen.width,
    a = r.screen.height,
    u = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = s.match(/(iPad).*OS\s([\d_]+)/);
  const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    f = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    v = i === "Win32";
  let y = i === "MacIntel";
  const _ = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !c &&
      y &&
      n.touch &&
      _.indexOf(`${l}x${a}`) >= 0 &&
      ((c = s.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (y = !1)),
    u && !v && ((o.os = "android"), (o.android = !0)),
    (c || f || d) && ((o.os = "ios"), (o.ios = !0)),
    o
  );
}
function bg(e) {
  return e === void 0 && (e = {}), Za || (Za = xS(e)), Za;
}
let el;
function ES() {
  const e = qe(),
    t = bg();
  let n = !1;
  function r() {
    const l = e.navigator.userAgent.toLowerCase();
    return (
      l.indexOf("safari") >= 0 &&
      l.indexOf("chrome") < 0 &&
      l.indexOf("android") < 0
    );
  }
  if (r()) {
    const l = String(e.navigator.userAgent);
    if (l.includes("Version/")) {
      const [a, u] = l
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((c) => Number(c));
      n = a < 16 || (a === 16 && u < 2);
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
    s = r(),
    o = s || (i && t.ios);
  return {
    isSafari: n || s,
    needPerspectiveFix: n,
    need3dFix: o,
    isWebView: i,
  };
}
function TS() {
  return el || (el = ES()), el;
}
function CS(e) {
  let { swiper: t, on: n, emit: r } = e;
  const i = qe();
  let s = null,
    o = null;
  const l = () => {
      !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
    },
    a = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((s = new ResizeObserver((d) => {
          o = i.requestAnimationFrame(() => {
            const { width: f, height: v } = t;
            let y = f,
              _ = v;
            d.forEach((S) => {
              let { contentBoxSize: p, contentRect: g, target: h } = S;
              (h && h !== t.el) ||
                ((y = g ? g.width : (p[0] || p).inlineSize),
                (_ = g ? g.height : (p[0] || p).blockSize));
            }),
              (y !== f || _ !== v) && l();
          });
        })),
        s.observe(t.el));
    },
    u = () => {
      o && i.cancelAnimationFrame(o),
        s && s.unobserve && t.el && (s.unobserve(t.el), (s = null));
    },
    c = () => {
      !t || t.destroyed || !t.initialized || r("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      a();
      return;
    }
    i.addEventListener("resize", l), i.addEventListener("orientationchange", c);
  }),
    n("destroy", () => {
      u(),
        i.removeEventListener("resize", l),
        i.removeEventListener("orientationchange", c);
    });
}
function bS(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const s = [],
    o = qe(),
    l = function (c, d) {
      d === void 0 && (d = {});
      const f = o.MutationObserver || o.WebkitMutationObserver,
        v = new f((y) => {
          if (t.__preventObserver__) return;
          if (y.length === 1) {
            i("observerUpdate", y[0]);
            return;
          }
          const _ = function () {
            i("observerUpdate", y[0]);
          };
          o.requestAnimationFrame
            ? o.requestAnimationFrame(_)
            : o.setTimeout(_, 0);
        });
      v.observe(c, {
        attributes: typeof d.attributes > "u" ? !0 : d.attributes,
        childList: t.isElement || (typeof d.childList > "u" ? !0 : d).childList,
        characterData: typeof d.characterData > "u" ? !0 : d.characterData,
      }),
        s.push(v);
    },
    a = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const c = _S(t.hostEl);
          for (let d = 0; d < c.length; d += 1) l(c[d]);
        }
        l(t.hostEl, { childList: t.params.observeSlideChildren }),
          l(t.wrapperEl, { attributes: !1 });
      }
    },
    u = () => {
      s.forEach((c) => {
        c.disconnect();
      }),
        s.splice(0, s.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r("init", a),
    r("destroy", u);
}
var PS = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((s) => {
        r.eventsListeners[s] || (r.eventsListeners[s] = []),
          r.eventsListeners[s][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i() {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var s = arguments.length, o = new Array(s), l = 0; l < s; l++)
        o[l] = arguments[l];
      t.apply(r, o);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, s) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(s, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, r;
    for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
      s[o] = arguments[o];
    return (
      typeof s[0] == "string" || Array.isArray(s[0])
        ? ((t = s[0]), (n = s.slice(1, s.length)), (r = e))
        : ((t = s[0].events), (n = s[0].data), (r = s[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((a) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((u) => {
            u.apply(r, [a, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[a] &&
            e.eventsListeners[a].forEach((u) => {
              u.apply(r, n);
            });
      }),
      e
    );
  },
};
function IS() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(rn(r, "padding-left") || 0, 10) -
        parseInt(rn(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(rn(r, "padding-top") || 0, 10) -
        parseInt(rn(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function kS() {
  const e = this;
  function t(T, N) {
    return parseFloat(T.getPropertyValue(e.getDirectionLabel(N)) || 0);
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: i, size: s, rtlTranslate: o, wrongRTL: l } = e,
    a = e.virtual && n.virtual.enabled,
    u = a ? e.virtual.slides.length : e.slides.length,
    c = pt(i, `.${e.params.slideClass}, swiper-slide`),
    d = a ? e.virtual.slides.length : c.length;
  let f = [];
  const v = [],
    y = [];
  let _ = n.slidesOffsetBefore;
  typeof _ == "function" && (_ = n.slidesOffsetBefore.call(e));
  let S = n.slidesOffsetAfter;
  typeof S == "function" && (S = n.slidesOffsetAfter.call(e));
  const p = e.snapGrid.length,
    g = e.slidesGrid.length;
  let h = n.spaceBetween,
    w = -_,
    x = 0,
    E = 0;
  if (typeof s > "u") return;
  typeof h == "string" && h.indexOf("%") >= 0
    ? (h = (parseFloat(h.replace("%", "")) / 100) * s)
    : typeof h == "string" && (h = parseFloat(h)),
    (e.virtualSize = -h),
    c.forEach((T) => {
      o ? (T.style.marginLeft = "") : (T.style.marginRight = ""),
        (T.style.marginBottom = ""),
        (T.style.marginTop = "");
    }),
    n.centeredSlides &&
      n.cssMode &&
      (Ts(r, "--swiper-centered-offset-before", ""),
      Ts(r, "--swiper-centered-offset-after", ""));
  const P = n.grid && n.grid.rows > 1 && e.grid;
  P ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
  let b;
  const I =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (T) => typeof n.breakpoints[T].slidesPerView < "u"
    ).length > 0;
  for (let T = 0; T < d; T += 1) {
    b = 0;
    let N;
    if (
      (c[T] && (N = c[T]),
      P && e.grid.updateSlide(T, N, c),
      !(c[T] && rn(N, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        I && (c[T].style[e.getDirectionLabel("width")] = "");
        const L = getComputedStyle(N),
          M = N.style.transform,
          F = N.style.webkitTransform;
        if (
          (M && (N.style.transform = "none"),
          F && (N.style.webkitTransform = "none"),
          n.roundLengths)
        )
          b = e.isHorizontal() ? Vf(N, "width") : Vf(N, "height");
        else {
          const G = t(L, "width"),
            me = t(L, "padding-left"),
            bn = t(L, "padding-right"),
            O = t(L, "margin-left"),
            A = t(L, "margin-right"),
            j = L.getPropertyValue("box-sizing");
          if (j && j === "border-box") b = G + O + A;
          else {
            const { clientWidth: Q, offsetWidth: se } = N;
            b = G + me + bn + O + A + (se - Q);
          }
        }
        M && (N.style.transform = M),
          F && (N.style.webkitTransform = F),
          n.roundLengths && (b = Math.floor(b));
      } else
        (b = (s - (n.slidesPerView - 1) * h) / n.slidesPerView),
          n.roundLengths && (b = Math.floor(b)),
          c[T] && (c[T].style[e.getDirectionLabel("width")] = `${b}px`);
      c[T] && (c[T].swiperSlideSize = b),
        y.push(b),
        n.centeredSlides
          ? ((w = w + b / 2 + x / 2 + h),
            x === 0 && T !== 0 && (w = w - s / 2 - h),
            T === 0 && (w = w - s / 2 - h),
            Math.abs(w) < 1 / 1e3 && (w = 0),
            n.roundLengths && (w = Math.floor(w)),
            E % n.slidesPerGroup === 0 && f.push(w),
            v.push(w))
          : (n.roundLengths && (w = Math.floor(w)),
            (E - Math.min(e.params.slidesPerGroupSkip, E)) %
              e.params.slidesPerGroup ===
              0 && f.push(w),
            v.push(w),
            (w = w + b + h)),
        (e.virtualSize += b + h),
        (x = b),
        (E += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, s) + S),
    o &&
      l &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (r.style.width = `${e.virtualSize + h}px`),
    n.setWrapperSize &&
      (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + h}px`),
    P && e.grid.updateWrapperSize(b, f),
    !n.centeredSlides)
  ) {
    const T = [];
    for (let N = 0; N < f.length; N += 1) {
      let L = f[N];
      n.roundLengths && (L = Math.floor(L)),
        f[N] <= e.virtualSize - s && T.push(L);
    }
    (f = T),
      Math.floor(e.virtualSize - s) - Math.floor(f[f.length - 1]) > 1 &&
        f.push(e.virtualSize - s);
  }
  if (a && n.loop) {
    const T = y[0] + h;
    if (n.slidesPerGroup > 1) {
      const N = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup
        ),
        L = T * n.slidesPerGroup;
      for (let M = 0; M < N; M += 1) f.push(f[f.length - 1] + L);
    }
    for (let N = 0; N < e.virtual.slidesBefore + e.virtual.slidesAfter; N += 1)
      n.slidesPerGroup === 1 && f.push(f[f.length - 1] + T),
        v.push(v[v.length - 1] + T),
        (e.virtualSize += T);
  }
  if ((f.length === 0 && (f = [0]), h !== 0)) {
    const T =
      e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
    c.filter((N, L) =>
      !n.cssMode || n.loop ? !0 : L !== c.length - 1
    ).forEach((N) => {
      N.style[T] = `${h}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let T = 0;
    y.forEach((L) => {
      T += L + (h || 0);
    }),
      (T -= h);
    const N = T - s;
    f = f.map((L) => (L <= 0 ? -_ : L > N ? N + S : L));
  }
  if (n.centerInsufficientSlides) {
    let T = 0;
    y.forEach((L) => {
      T += L + (h || 0);
    }),
      (T -= h);
    const N = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0);
    if (T + N < s) {
      const L = (s - T - N) / 2;
      f.forEach((M, F) => {
        f[F] = M - L;
      }),
        v.forEach((M, F) => {
          v[F] = M + L;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: c,
      snapGrid: f,
      slidesGrid: v,
      slidesSizesGrid: y,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    Ts(r, "--swiper-centered-offset-before", `${-f[0]}px`),
      Ts(
        r,
        "--swiper-centered-offset-after",
        `${e.size / 2 - y[y.length - 1] / 2}px`
      );
    const T = -e.snapGrid[0],
      N = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((L) => L + T)),
      (e.slidesGrid = e.slidesGrid.map((L) => L + N));
  }
  if (
    (d !== u && e.emit("slidesLengthChange"),
    f.length !== p &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    v.length !== g && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !a && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const T = `${n.containerModifierClass}backface-hidden`,
      N = e.el.classList.contains(T);
    d <= n.maxBackfaceHiddenSlides
      ? N || e.el.classList.add(T)
      : N && e.el.classList.remove(T);
  }
}
function NS(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    s;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const o = (l) => (r ? t.slides[t.getSlideIndexByData(l)] : t.slides[l]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((l) => {
        n.push(l);
      });
    else
      for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
        const l = t.activeIndex + s;
        if (l > t.slides.length && !r) break;
        n.push(o(l));
      }
  else n.push(o(t.activeIndex));
  for (s = 0; s < n.length; s += 1)
    if (typeof n[s] < "u") {
      const l = n[s].offsetHeight;
      i = l > i ? l : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function OS() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
const Hf = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function RS(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: s } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let o = -e;
  i && (o = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
  let l = n.spaceBetween;
  typeof l == "string" && l.indexOf("%") >= 0
    ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
    : typeof l == "string" && (l = parseFloat(l));
  for (let a = 0; a < r.length; a += 1) {
    const u = r[a];
    let c = u.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
    const d =
        (o + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + l),
      f =
        (o - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + l),
      v = -(o - c),
      y = v + t.slidesSizesGrid[a],
      _ = v >= 0 && v <= t.size - t.slidesSizesGrid[a],
      S =
        (v >= 0 && v < t.size - 1) ||
        (y > 1 && y <= t.size) ||
        (v <= 0 && y >= t.size);
    S && (t.visibleSlides.push(u), t.visibleSlidesIndexes.push(a)),
      Hf(u, S, n.slideVisibleClass),
      Hf(u, _, n.slideFullyVisibleClass),
      (u.progress = i ? -d : d),
      (u.originalProgress = i ? -f : f);
  }
}
function LS(e) {
  const t = this;
  if (typeof e > "u") {
    const c = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * c) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: s, isEnd: o, progressLoop: l } = t;
  const a = s,
    u = o;
  if (r === 0) (i = 0), (s = !0), (o = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const c = Math.abs(e - t.minTranslate()) < 1,
      d = Math.abs(e - t.maxTranslate()) < 1;
    (s = c || i <= 0), (o = d || i >= 1), c && (i = 0), d && (i = 1);
  }
  if (n.loop) {
    const c = t.getSlideIndexByData(0),
      d = t.getSlideIndexByData(t.slides.length - 1),
      f = t.slidesGrid[c],
      v = t.slidesGrid[d],
      y = t.slidesGrid[t.slidesGrid.length - 1],
      _ = Math.abs(e);
    _ >= f ? (l = (_ - f) / y) : (l = (_ + y - v) / y), l > 1 && (l -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: l, isBeginning: s, isEnd: o }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    s && !a && t.emit("reachBeginning toEdge"),
    o && !u && t.emit("reachEnd toEdge"),
    ((a && !s) || (u && !o)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
const tl = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function AS() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    s = e.virtual && n.virtual.enabled,
    o = e.grid && n.grid && n.grid.rows > 1,
    l = (d) => pt(r, `.${n.slideClass}${d}, swiper-slide${d}`)[0];
  let a, u, c;
  if (s)
    if (n.loop) {
      let d = i - e.virtual.slidesBefore;
      d < 0 && (d = e.virtual.slides.length + d),
        d >= e.virtual.slides.length && (d -= e.virtual.slides.length),
        (a = l(`[data-swiper-slide-index="${d}"]`));
    } else a = l(`[data-swiper-slide-index="${i}"]`);
  else
    o
      ? ((a = t.filter((d) => d.column === i)[0]),
        (c = t.filter((d) => d.column === i + 1)[0]),
        (u = t.filter((d) => d.column === i - 1)[0]))
      : (a = t[i]);
  a &&
    (o ||
      ((c = wS(a, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !c && (c = t[0]),
      (u = yS(a, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u === 0 && (u = t[t.length - 1]))),
    t.forEach((d) => {
      tl(d, d === a, n.slideActiveClass),
        tl(d, d === c, n.slideNextClass),
        tl(d, d === u, n.slidePrevClass);
    }),
    e.emitSlidesClasses();
}
const Hs = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      r = t.closest(n());
    if (r) {
      let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
      !i &&
        e.isElement &&
        (r.shadowRoot
          ? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot &&
                ((i = r.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`
                )),
                i && i.remove());
            })),
        i && i.remove();
    }
  },
  nl = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  wu = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const o = i,
        l = [o - t];
      l.push(...Array.from({ length: t }).map((a, u) => o + r + u)),
        e.slides.forEach((a, u) => {
          l.includes(a.column) && nl(e, u);
        });
      return;
    }
    const s = i + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let o = i - t; o <= s + t; o += 1) {
        const l = ((o % n) + n) % n;
        (l < i || l > s) && nl(e, l);
      }
    else
      for (let o = Math.max(i - t, 0); o <= Math.min(s + t, n - 1); o += 1)
        o !== i && (o > s || o < i) && nl(e, o);
  };
function MS(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let s = 0; s < t.length; s += 1)
    typeof t[s + 1] < "u"
      ? r >= t[s] && r < t[s + 1] - (t[s + 1] - t[s]) / 2
        ? (i = s)
        : r >= t[s] && r < t[s + 1] && (i = s + 1)
      : r >= t[s] && (i = s);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function jS(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: s, realIndex: o, snapIndex: l } = t;
  let a = e,
    u;
  const c = (v) => {
    let y = v - t.virtual.slidesBefore;
    return (
      y < 0 && (y = t.virtual.slides.length + y),
      y >= t.virtual.slides.length && (y -= t.virtual.slides.length),
      y
    );
  };
  if ((typeof a > "u" && (a = MS(t)), r.indexOf(n) >= 0)) u = r.indexOf(n);
  else {
    const v = Math.min(i.slidesPerGroupSkip, a);
    u = v + Math.floor((a - v) / i.slidesPerGroup);
  }
  if ((u >= r.length && (u = r.length - 1), a === s && !t.params.loop)) {
    u !== l && ((t.snapIndex = u), t.emit("snapIndexChange"));
    return;
  }
  if (a === s && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = c(a);
    return;
  }
  const d = t.grid && i.grid && i.grid.rows > 1;
  let f;
  if (t.virtual && i.virtual.enabled && i.loop) f = c(a);
  else if (d) {
    const v = t.slides.filter((_) => _.column === a)[0];
    let y = parseInt(v.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(y) && (y = Math.max(t.slides.indexOf(v), 0)),
      (f = Math.floor(y / i.grid.rows));
  } else if (t.slides[a]) {
    const v = t.slides[a].getAttribute("data-swiper-slide-index");
    v ? (f = parseInt(v, 10)) : (f = a);
  } else f = a;
  Object.assign(t, {
    previousSnapIndex: l,
    snapIndex: u,
    previousRealIndex: o,
    realIndex: f,
    previousIndex: s,
    activeIndex: a,
  }),
    t.initialized && wu(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (o !== f && t.emit("realIndexChange"), t.emit("slideChange"));
}
function DS(e, t) {
  const n = this,
    r = n.params;
  let i = e.closest(`.${r.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((l) => {
      !i && l.matches && l.matches(`.${r.slideClass}, swiper-slide`) && (i = l);
    });
  let s = !1,
    o;
  if (i) {
    for (let l = 0; l < n.slides.length; l += 1)
      if (n.slides[l] === i) {
        (s = !0), (o = l);
        break;
      }
  }
  if (i && s)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (n.clickedIndex = o);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  r.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var US = {
  updateSize: IS,
  updateSlides: kS,
  updateAutoHeight: NS,
  updateSlidesOffset: OS,
  updateSlidesProgress: RS,
  updateProgress: LS,
  updateSlidesClasses: AS,
  updateActiveIndex: jS,
  updateClickedSlide: DS,
};
function zS(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: s } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let o = gS(s, e);
  return (o += t.cssOverflowAdjustment()), r && (o = -o), o || 0;
}
function FS(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: s, progress: o } = n;
  let l = 0,
    a = 0;
  const u = 0;
  n.isHorizontal() ? (l = r ? -e : e) : (a = e),
    i.roundLengths && ((l = Math.floor(l)), (a = Math.floor(a))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? l : a),
    i.cssMode
      ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -l
          : -a)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (l -= n.cssOverflowAdjustment())
          : (a -= n.cssOverflowAdjustment()),
        (s.style.transform = `translate3d(${l}px, ${a}px, ${u}px)`));
  let c;
  const d = n.maxTranslate() - n.minTranslate();
  d === 0 ? (c = 0) : (c = (e - n.minTranslate()) / d),
    c !== o && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function $S() {
  return -this.snapGrid[0];
}
function BS() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function VS(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0);
  const s = this,
    { params: o, wrapperEl: l } = s;
  if (s.animating && o.preventInteractionOnTransition) return !1;
  const a = s.minTranslate(),
    u = s.maxTranslate();
  let c;
  if (
    (r && e > a ? (c = a) : r && e < u ? (c = u) : (c = e),
    s.updateProgress(c),
    o.cssMode)
  ) {
    const d = s.isHorizontal();
    if (t === 0) l[d ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!s.support.smoothScroll)
        return (
          Tg({ swiper: s, targetPosition: -c, side: d ? "left" : "top" }), !0
        );
      l.scrollTo({ [d ? "left" : "top"]: -c, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (s.setTransition(0),
        s.setTranslate(c),
        n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionEnd")))
      : (s.setTransition(t),
        s.setTranslate(c),
        n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionStart")),
        s.animating ||
          ((s.animating = !0),
          s.onTranslateToWrapperTransitionEnd ||
            (s.onTranslateToWrapperTransitionEnd = function (f) {
              !s ||
                s.destroyed ||
                (f.target === this &&
                  (s.wrapperEl.removeEventListener(
                    "transitionend",
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  (s.onTranslateToWrapperTransitionEnd = null),
                  delete s.onTranslateToWrapperTransitionEnd,
                  (s.animating = !1),
                  n && s.emit("transitionEnd")));
            }),
          s.wrapperEl.addEventListener(
            "transitionend",
            s.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var HS = {
  getTranslate: zS,
  setTranslate: FS,
  minTranslate: $S,
  maxTranslate: BS,
  translateTo: VS,
};
function WS(e, t) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t);
}
function Pg(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
  const { activeIndex: s, previousIndex: o } = t;
  let l = r;
  if (
    (l || (s > o ? (l = "next") : s < o ? (l = "prev") : (l = "reset")),
    t.emit(`transition${i}`),
    n && s !== o)
  ) {
    if (l === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`),
      l === "next"
        ? t.emit(`slideNextTransition${i}`)
        : t.emit(`slidePrevTransition${i}`);
  }
}
function GS(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    Pg({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function qS(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      Pg({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var KS = { setTransition: WS, transitionStart: GS, transitionEnd: qS };
function XS(e, t, n, r, i) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const s = this;
  let o = e;
  o < 0 && (o = 0);
  const {
    params: l,
    snapGrid: a,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: d,
    rtlTranslate: f,
    wrapperEl: v,
    enabled: y,
  } = s;
  if (
    (!y && !r && !i) ||
    s.destroyed ||
    (s.animating && l.preventInteractionOnTransition)
  )
    return !1;
  typeof t > "u" && (t = s.params.speed);
  const _ = Math.min(s.params.slidesPerGroupSkip, o);
  let S = _ + Math.floor((o - _) / s.params.slidesPerGroup);
  S >= a.length && (S = a.length - 1);
  const p = -a[S];
  if (l.normalizeSlideIndex)
    for (let h = 0; h < u.length; h += 1) {
      const w = -Math.floor(p * 100),
        x = Math.floor(u[h] * 100),
        E = Math.floor(u[h + 1] * 100);
      typeof u[h + 1] < "u"
        ? w >= x && w < E - (E - x) / 2
          ? (o = h)
          : w >= x && w < E && (o = h + 1)
        : w >= x && (o = h);
    }
  if (
    s.initialized &&
    o !== d &&
    ((!s.allowSlideNext &&
      (f
        ? p > s.translate && p > s.minTranslate()
        : p < s.translate && p < s.minTranslate())) ||
      (!s.allowSlidePrev &&
        p > s.translate &&
        p > s.maxTranslate() &&
        (d || 0) !== o))
  )
    return !1;
  o !== (c || 0) && n && s.emit("beforeSlideChangeStart"), s.updateProgress(p);
  let g;
  if (
    (o > d ? (g = "next") : o < d ? (g = "prev") : (g = "reset"),
    (f && -p === s.translate) || (!f && p === s.translate))
  )
    return (
      s.updateActiveIndex(o),
      l.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      l.effect !== "slide" && s.setTranslate(p),
      g !== "reset" && (s.transitionStart(n, g), s.transitionEnd(n, g)),
      !1
    );
  if (l.cssMode) {
    const h = s.isHorizontal(),
      w = f ? p : -p;
    if (t === 0) {
      const x = s.virtual && s.params.virtual.enabled;
      x &&
        ((s.wrapperEl.style.scrollSnapType = "none"),
        (s._immediateVirtual = !0)),
        x && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
          ? ((s._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              v[h ? "scrollLeft" : "scrollTop"] = w;
            }))
          : (v[h ? "scrollLeft" : "scrollTop"] = w),
        x &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType = ""), (s._immediateVirtual = !1);
          });
    } else {
      if (!s.support.smoothScroll)
        return (
          Tg({ swiper: s, targetPosition: w, side: h ? "left" : "top" }), !0
        );
      v.scrollTo({ [h ? "left" : "top"]: w, behavior: "smooth" });
    }
    return !0;
  }
  return (
    s.setTransition(t),
    s.setTranslate(p),
    s.updateActiveIndex(o),
    s.updateSlidesClasses(),
    s.emit("beforeTransitionStart", t, r),
    s.transitionStart(n, g),
    t === 0
      ? s.transitionEnd(n, g)
      : s.animating ||
        ((s.animating = !0),
        s.onSlideToWrapperTransitionEnd ||
          (s.onSlideToWrapperTransitionEnd = function (w) {
            !s ||
              s.destroyed ||
              (w.target === this &&
                (s.wrapperEl.removeEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                ),
                (s.onSlideToWrapperTransitionEnd = null),
                delete s.onSlideToWrapperTransitionEnd,
                s.transitionEnd(n, g)));
          }),
        s.wrapperEl.addEventListener(
          "transitionend",
          s.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function YS(e, t, n, r) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  if (i.destroyed) return;
  typeof t > "u" && (t = i.params.speed);
  const s = i.grid && i.params.grid && i.params.grid.rows > 1;
  let o = e;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) o = o + i.virtual.slidesBefore;
    else {
      let l;
      if (s) {
        const f = o * i.params.grid.rows;
        l = i.slides.filter(
          (v) => v.getAttribute("data-swiper-slide-index") * 1 === f
        )[0].column;
      } else l = i.getSlideIndexByData(o);
      const a = s
          ? Math.ceil(i.slides.length / i.params.grid.rows)
          : i.slides.length,
        { centeredSlides: u } = i.params;
      let c = i.params.slidesPerView;
      c === "auto"
        ? (c = i.slidesPerViewDynamic())
        : ((c = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
          u && c % 2 === 0 && (c = c + 1));
      let d = a - l < c;
      if (
        (u && (d = d || l < Math.ceil(c / 2)),
        r && u && i.params.slidesPerView !== "auto" && !s && (d = !1),
        d)
      ) {
        const f = u
          ? l < i.activeIndex
            ? "prev"
            : "next"
          : l - i.activeIndex - 1 < i.params.slidesPerView
          ? "next"
          : "prev";
        i.loopFix({
          direction: f,
          slideTo: !0,
          activeSlideIndex: f === "next" ? l + 1 : l - a + 1,
          slideRealIndex: f === "next" ? i.realIndex : void 0,
        });
      }
      if (s) {
        const f = o * i.params.grid.rows;
        o = i.slides.filter(
          (v) => v.getAttribute("data-swiper-slide-index") * 1 === f
        )[0].column;
      } else o = i.getSlideIndexByData(o);
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(o, t, n, r);
    }),
    i
  );
}
function QS(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    { enabled: i, params: s, animating: o } = r;
  if (!i || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  let l = s.slidesPerGroup;
  s.slidesPerView === "auto" &&
    s.slidesPerGroup === 1 &&
    s.slidesPerGroupAuto &&
    (l = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const a = r.activeIndex < s.slidesPerGroupSkip ? 1 : l,
    u = r.virtual && s.virtual.enabled;
  if (s.loop) {
    if (o && !u && s.loopPreventsSliding) return !1;
    if (
      (r.loopFix({ direction: "next" }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && s.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + a, e, t, n);
        }),
        !0
      );
  }
  return s.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + a, e, t, n);
}
function JS(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    {
      params: i,
      snapGrid: s,
      slidesGrid: o,
      rtlTranslate: l,
      enabled: a,
      animating: u,
    } = r;
  if (!a || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  const c = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (u && !c && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const d = l ? r.translate : -r.translate;
  function f(p) {
    return p < 0 ? -Math.floor(Math.abs(p)) : Math.floor(p);
  }
  const v = f(d),
    y = s.map((p) => f(p));
  let _ = s[y.indexOf(v) - 1];
  if (typeof _ > "u" && i.cssMode) {
    let p;
    s.forEach((g, h) => {
      v >= g && (p = h);
    }),
      typeof p < "u" && (_ = s[p > 0 ? p - 1 : p]);
  }
  let S = 0;
  if (
    (typeof _ < "u" &&
      ((S = o.indexOf(_)),
      S < 0 && (S = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((S = S - r.slidesPerViewDynamic("previous", !0) + 1),
        (S = Math.max(S, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const p =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(p, e, t, n);
  } else if (i.loop && r.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(S, e, t, n);
      }),
      !0
    );
  return r.slideTo(S, e, t, n);
}
function ZS(e, t, n) {
  t === void 0 && (t = !0);
  const r = this;
  if (!r.destroyed)
    return (
      typeof e > "u" && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, n)
    );
}
function e1(e, t, n, r) {
  t === void 0 && (t = !0), r === void 0 && (r = 0.5);
  const i = this;
  if (i.destroyed) return;
  typeof e > "u" && (e = i.params.speed);
  let s = i.activeIndex;
  const o = Math.min(i.params.slidesPerGroupSkip, s),
    l = o + Math.floor((s - o) / i.params.slidesPerGroup),
    a = i.rtlTranslate ? i.translate : -i.translate;
  if (a >= i.snapGrid[l]) {
    const u = i.snapGrid[l],
      c = i.snapGrid[l + 1];
    a - u > (c - u) * r && (s += i.params.slidesPerGroup);
  } else {
    const u = i.snapGrid[l - 1],
      c = i.snapGrid[l];
    a - u <= (c - u) * r && (s -= i.params.slidesPerGroup);
  }
  return (
    (s = Math.max(s, 0)),
    (s = Math.min(s, i.slidesGrid.length - 1)),
    i.slideTo(s, e, t, n)
  );
}
function t1() {
  const e = this;
  if (e.destroyed) return;
  const { params: t, slidesEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    s;
  const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (s = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              pt(n, `${o}[data-swiper-slide-index="${s}"]`)[0]
            )),
            yu(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            pt(n, `${o}[data-swiper-slide-index="${s}"]`)[0]
          )),
          yu(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var n1 = {
  slideTo: XS,
  slideToLoop: YS,
  slideNext: QS,
  slidePrev: JS,
  slideReset: ZS,
  slideToClosest: e1,
  slideToClickedSlide: t1,
};
function r1(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  const i = () => {
      pt(r, `.${n.slideClass}, swiper-slide`).forEach((d, f) => {
        d.setAttribute("data-swiper-slide-index", f);
      });
    },
    s = t.grid && n.grid && n.grid.rows > 1,
    o = n.slidesPerGroup * (s ? n.grid.rows : 1),
    l = t.slides.length % o !== 0,
    a = s && t.slides.length % n.grid.rows !== 0,
    u = (c) => {
      for (let d = 0; d < c; d += 1) {
        const f = t.isElement
          ? Ro("swiper-slide", [n.slideBlankClass])
          : Ro("div", [n.slideClass, n.slideBlankClass]);
        t.slidesEl.append(f);
      }
    };
  if (l) {
    if (n.loopAddBlankSlides) {
      const c = o - (t.slides.length % o);
      u(c), t.recalcSlides(), t.updateSlides();
    } else
      Oo(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else if (a) {
    if (n.loopAddBlankSlides) {
      const c = n.grid.rows - (t.slides.length % n.grid.rows);
      u(c), t.recalcSlides(), t.updateSlides();
    } else
      Oo(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else i();
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : "next",
  });
}
function i1(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: i,
    activeSlideIndex: s,
    byController: o,
    byMousewheel: l,
  } = e === void 0 ? {} : e;
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
      slides: u,
      allowSlidePrev: c,
      allowSlideNext: d,
      slidesEl: f,
      params: v,
    } = a,
    { centeredSlides: y } = v;
  if (
    ((a.allowSlidePrev = !0),
    (a.allowSlideNext = !0),
    a.virtual && v.virtual.enabled)
  ) {
    n &&
      (!v.centeredSlides && a.snapIndex === 0
        ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
        : v.centeredSlides && a.snapIndex < v.slidesPerView
        ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
        : a.snapIndex === a.snapGrid.length - 1 &&
          a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
      (a.allowSlidePrev = c),
      (a.allowSlideNext = d),
      a.emit("loopFix");
    return;
  }
  let _ = v.slidesPerView;
  _ === "auto"
    ? (_ = a.slidesPerViewDynamic())
    : ((_ = Math.ceil(parseFloat(v.slidesPerView, 10))),
      y && _ % 2 === 0 && (_ = _ + 1));
  const S = v.slidesPerGroupAuto ? _ : v.slidesPerGroup;
  let p = S;
  p % S !== 0 && (p += S - (p % S)),
    (p += v.loopAdditionalSlides),
    (a.loopedSlides = p);
  const g = a.grid && v.grid && v.grid.rows > 1;
  u.length < _ + p
    ? Oo(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : g &&
      v.grid.fill === "row" &&
      Oo(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const h = [],
    w = [];
  let x = a.activeIndex;
  typeof s > "u"
    ? (s = a.getSlideIndex(
        u.filter((M) => M.classList.contains(v.slideActiveClass))[0]
      ))
    : (x = s);
  const E = r === "next" || !r,
    P = r === "prev" || !r;
  let b = 0,
    I = 0;
  const T = g ? Math.ceil(u.length / v.grid.rows) : u.length,
    L = (g ? u[s].column : s) + (y && typeof i > "u" ? -_ / 2 + 0.5 : 0);
  if (L < p) {
    b = Math.max(p - L, S);
    for (let M = 0; M < p - L; M += 1) {
      const F = M - Math.floor(M / T) * T;
      if (g) {
        const G = T - F - 1;
        for (let me = u.length - 1; me >= 0; me -= 1)
          u[me].column === G && h.push(me);
      } else h.push(T - F - 1);
    }
  } else if (L + _ > T - p) {
    I = Math.max(L - (T - p * 2), S);
    for (let M = 0; M < I; M += 1) {
      const F = M - Math.floor(M / T) * T;
      g
        ? u.forEach((G, me) => {
            G.column === F && w.push(me);
          })
        : w.push(F);
    }
  }
  if (
    ((a.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      a.__preventObserver__ = !1;
    }),
    P &&
      h.forEach((M) => {
        (u[M].swiperLoopMoveDOM = !0),
          f.prepend(u[M]),
          (u[M].swiperLoopMoveDOM = !1);
      }),
    E &&
      w.forEach((M) => {
        (u[M].swiperLoopMoveDOM = !0),
          f.append(u[M]),
          (u[M].swiperLoopMoveDOM = !1);
      }),
    a.recalcSlides(),
    v.slidesPerView === "auto"
      ? a.updateSlides()
      : g &&
        ((h.length > 0 && P) || (w.length > 0 && E)) &&
        a.slides.forEach((M, F) => {
          a.grid.updateSlide(F, M, a.slides);
        }),
    v.watchSlidesProgress && a.updateSlidesOffset(),
    n)
  ) {
    if (h.length > 0 && P) {
      if (typeof t > "u") {
        const M = a.slidesGrid[x],
          G = a.slidesGrid[x + b] - M;
        l
          ? a.setTranslate(a.translate - G)
          : (a.slideTo(x + Math.ceil(b), 0, !1, !0),
            i &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - G),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - G)));
      } else if (i) {
        const M = g ? h.length / v.grid.rows : h.length;
        a.slideTo(a.activeIndex + M, 0, !1, !0),
          (a.touchEventsData.currentTranslate = a.translate);
      }
    } else if (w.length > 0 && E)
      if (typeof t > "u") {
        const M = a.slidesGrid[x],
          G = a.slidesGrid[x - I] - M;
        l
          ? a.setTranslate(a.translate - G)
          : (a.slideTo(x - I, 0, !1, !0),
            i &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - G),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - G)));
      } else {
        const M = g ? w.length / v.grid.rows : w.length;
        a.slideTo(a.activeIndex - M, 0, !1, !0);
      }
  }
  if (
    ((a.allowSlidePrev = c),
    (a.allowSlideNext = d),
    a.controller && a.controller.control && !o)
  ) {
    const M = {
      slideRealIndex: t,
      direction: r,
      setTranslate: i,
      activeSlideIndex: s,
      byController: !0,
    };
    Array.isArray(a.controller.control)
      ? a.controller.control.forEach((F) => {
          !F.destroyed &&
            F.params.loop &&
            F.loopFix({
              ...M,
              slideTo: F.params.slidesPerView === v.slidesPerView ? n : !1,
            });
        })
      : a.controller.control instanceof a.constructor &&
        a.controller.control.params.loop &&
        a.controller.control.loopFix({
          ...M,
          slideTo:
            a.controller.control.params.slidesPerView === v.slidesPerView
              ? n
              : !1,
        });
  }
  a.emit("loopFix");
}
function s1() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const s =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    r[s] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var o1 = { loopCreate: r1, loopFix: i1, loopDestroy: s1 };
function a1(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function l1() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var u1 = { setGrabCursor: a1, unsetGrabCursor: l1 };
function c1(e, t) {
  t === void 0 && (t = this);
  function n(r) {
    if (!r || r === Br() || r === qe()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function Wf(e, t, n) {
  const r = qe(),
    { params: i } = e,
    s = i.edgeSwipeDetection,
    o = i.edgeSwipeThreshold;
  return s && (n <= o || n >= r.innerWidth - o)
    ? s === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0;
}
function d1(e) {
  const t = this,
    n = Br();
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  const i = t.touchEventsData;
  if (r.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== r.pointerId) return;
    i.pointerId = r.pointerId;
  } else
    r.type === "touchstart" &&
      r.targetTouches.length === 1 &&
      (i.touchId = r.targetTouches[0].identifier);
  if (r.type === "touchstart") {
    Wf(t, r, r.targetTouches[0].pageX);
    return;
  }
  const { params: s, touches: o, enabled: l } = t;
  if (
    !l ||
    (!s.simulateTouch && r.pointerType === "mouse") ||
    (t.animating && s.preventInteractionOnTransition)
  )
    return;
  !t.animating && s.cssMode && s.loop && t.loopFix();
  let a = r.target;
  if (
    (s.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(a)) ||
    ("which" in r && r.which === 3) ||
    ("button" in r && r.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const u = !!s.noSwipingClass && s.noSwipingClass !== "",
    c = r.composedPath ? r.composedPath() : r.path;
  u && r.target && r.target.shadowRoot && c && (a = c[0]);
  const d = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    f = !!(r.target && r.target.shadowRoot);
  if (s.noSwiping && (f ? c1(d, a) : a.closest(d))) {
    t.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !a.closest(s.swipeHandler)) return;
  (o.currentX = r.pageX), (o.currentY = r.pageY);
  const v = o.currentX,
    y = o.currentY;
  if (!Wf(t, r, v)) return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = v),
    (o.startY = y),
    (i.touchStartTime = No()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    s.threshold > 0 && (i.allowThresholdMove = !1);
  let _ = !0;
  a.matches(i.focusableElements) &&
    ((_ = !1), a.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== a &&
      n.activeElement.blur();
  const S = _ && t.allowTouchMove && s.touchStartPreventDefault;
  (s.touchStartForcePreventDefault || S) &&
    !a.isContentEditable &&
    r.preventDefault(),
    s.freeMode &&
      s.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !s.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", r);
}
function f1(e) {
  const t = Br(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: s, rtlTranslate: o, enabled: l } = n;
  if (!l || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let a = e;
  if (
    (a.originalEvent && (a = a.originalEvent),
    a.type === "pointermove" &&
      (r.touchId !== null || a.pointerId !== r.pointerId))
  )
    return;
  let u;
  if (a.type === "touchmove") {
    if (
      ((u = [...a.changedTouches].filter((E) => E.identifier === r.touchId)[0]),
      !u || u.identifier !== r.touchId)
    )
      return;
  } else u = a;
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", a);
    return;
  }
  const c = u.pageX,
    d = u.pageY;
  if (a.preventedByNestedSwiper) {
    (s.startX = c), (s.startY = d);
    return;
  }
  if (!n.allowTouchMove) {
    a.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(s, { startX: c, startY: d, currentX: c, currentY: d }),
        (r.touchStartTime = No()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (d < s.startY && n.translate <= n.maxTranslate()) ||
        (d > s.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (c < s.startX && n.translate <= n.maxTranslate()) ||
      (c > s.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    a.target === t.activeElement &&
    a.target.matches(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  r.allowTouchCallbacks && n.emit("touchMove", a),
    (s.previousX = s.currentX),
    (s.previousY = s.currentY),
    (s.currentX = c),
    (s.currentY = d);
  const f = s.currentX - s.startX,
    v = s.currentY - s.startY;
  if (n.params.threshold && Math.sqrt(f ** 2 + v ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let E;
    (n.isHorizontal() && s.currentY === s.startY) ||
    (n.isVertical() && s.currentX === s.startX)
      ? (r.isScrolling = !1)
      : f * f + v * v >= 25 &&
        ((E = (Math.atan2(Math.abs(v), Math.abs(f)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? E > i.touchAngle
          : 90 - E > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", a),
    typeof r.startMoving > "u" &&
      (s.currentX !== s.startX || s.currentY !== s.startY) &&
      (r.startMoving = !0),
    r.isScrolling ||
      (a.type === "touchmove" && r.preventTouchMoveFromPointerMove))
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && a.cancelable && a.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && a.stopPropagation();
  let y = n.isHorizontal() ? f : v,
    _ = n.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
  i.oneWayMovement &&
    ((y = Math.abs(y) * (o ? 1 : -1)), (_ = Math.abs(_) * (o ? 1 : -1))),
    (s.diff = y),
    (y *= i.touchRatio),
    o && ((y = -y), (_ = -_));
  const S = n.touchesDirection;
  (n.swipeDirection = y > 0 ? "prev" : "next"),
    (n.touchesDirection = _ > 0 ? "prev" : "next");
  const p = n.params.loop && !i.cssMode,
    g =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev);
  if (!r.isMoved) {
    if (
      (p && g && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const E = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      n.wrapperEl.dispatchEvent(E);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", a);
  }
  let h;
  if (
    (new Date().getTime(),
    r.isMoved &&
      r.allowThresholdMove &&
      S !== n.touchesDirection &&
      p &&
      g &&
      Math.abs(y) >= 1)
  ) {
    Object.assign(s, {
      startX: c,
      startY: d,
      currentX: c,
      currentY: d,
      startTranslate: r.currentTranslate,
    }),
      (r.loopSwapReset = !0),
      (r.startTranslate = r.currentTranslate);
    return;
  }
  n.emit("sliderMove", a),
    (r.isMoved = !0),
    (r.currentTranslate = y + r.startTranslate);
  let w = !0,
    x = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (x = 0),
    y > 0
      ? (p &&
          g &&
          !h &&
          r.allowThresholdMove &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1]
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((w = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + y) ** x)))
      : y < 0 &&
        (p &&
          g &&
          !h &&
          r.allowThresholdMove &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1]
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((w = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - y) ** x))),
    w && (a.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(y) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (s.startX = s.currentX),
          (s.startY = s.currentY),
          (r.currentTranslate = r.startTranslate),
          (s.diff = n.isHorizontal()
            ? s.currentX - s.startX
            : s.currentY - s.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function p1(e) {
  const t = this,
    n = t.touchEventsData;
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  let i;
  if (r.type === "touchend" || r.type === "touchcancel") {
    if (
      ((i = [...r.changedTouches].filter((x) => x.identifier === n.touchId)[0]),
      !i || i.identifier !== n.touchId)
    )
      return;
  } else {
    if (n.touchId !== null || r.pointerId !== n.pointerId) return;
    i = r;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      r.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(r.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return;
  (n.pointerId = null), (n.touchId = null);
  const {
    params: o,
    touches: l,
    rtlTranslate: a,
    slidesGrid: u,
    enabled: c,
  } = t;
  if (!c || (!o.simulateTouch && r.pointerType === "mouse")) return;
  if (
    (n.allowTouchCallbacks && t.emit("touchEnd", r),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && o.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  o.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const d = No(),
    f = d - n.touchStartTime;
  if (t.allowClick) {
    const x = r.path || (r.composedPath && r.composedPath());
    t.updateClickedSlide((x && x[0]) || r.target, x),
      t.emit("tap click", r),
      f < 300 &&
        d - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", r);
  }
  if (
    ((n.lastClickTime = No()),
    yu(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (l.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let v;
  if (
    (o.followFinger
      ? (v = a ? t.translate : -t.translate)
      : (v = -n.currentTranslate),
    o.cssMode)
  )
    return;
  if (o.freeMode && o.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: v });
    return;
  }
  const y = v >= -t.maxTranslate() && !t.params.loop;
  let _ = 0,
    S = t.slidesSizesGrid[0];
  for (
    let x = 0;
    x < u.length;
    x += x < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
  ) {
    const E = x < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof u[x + E] < "u"
      ? (y || (v >= u[x] && v < u[x + E])) && ((_ = x), (S = u[x + E] - u[x]))
      : (y || v >= u[x]) && ((_ = x), (S = u[u.length - 1] - u[u.length - 2]));
  }
  let p = null,
    g = null;
  o.rewind &&
    (t.isBeginning
      ? (g =
          o.virtual && o.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (p = 0));
  const h = (v - u[_]) / S,
    w = _ < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (f > o.longSwipesMs) {
    if (!o.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (h >= o.longSwipesRatio
        ? t.slideTo(o.rewind && t.isEnd ? p : _ + w)
        : t.slideTo(_)),
      t.swipeDirection === "prev" &&
        (h > 1 - o.longSwipesRatio
          ? t.slideTo(_ + w)
          : g !== null && h < 0 && Math.abs(h) > o.longSwipesRatio
          ? t.slideTo(g)
          : t.slideTo(_));
  } else {
    if (!o.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(_ + w)
        : t.slideTo(_)
      : (t.swipeDirection === "next" && t.slideTo(p !== null ? p : _ + w),
        t.swipeDirection === "prev" && t.slideTo(g !== null ? g : _));
  }
}
function Gf() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: s } = e,
    o = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const l = o && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !l
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !o
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
}
function h1(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function m1() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const s = e.maxTranslate() - e.minTranslate();
  s === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / s),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function g1(e) {
  const t = this;
  Hs(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
function v1() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const Ig = (e, t) => {
  const n = Br(),
    { params: r, el: i, wrapperEl: s, device: o } = e,
    l = !!r.nested,
    a = t === "on" ? "addEventListener" : "removeEventListener",
    u = t;
  !i ||
    typeof i == "string" ||
    (n[a]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: l }),
    i[a]("touchstart", e.onTouchStart, { passive: !1 }),
    i[a]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[a]("touchmove", e.onTouchMove, { passive: !1, capture: l }),
    n[a]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
    n[a]("touchend", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[a]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[a]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[a]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[a]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[a]("click", e.onClick, !0),
    r.cssMode && s[a]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[u](
          o.ios || o.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Gf,
          !0
        )
      : e[u]("observerUpdate", Gf, !0),
    i[a]("load", e.onLoad, { capture: !0 }));
};
function y1() {
  const e = this,
    { params: t } = e;
  (e.onTouchStart = d1.bind(e)),
    (e.onTouchMove = f1.bind(e)),
    (e.onTouchEnd = p1.bind(e)),
    (e.onDocumentTouchStart = v1.bind(e)),
    t.cssMode && (e.onScroll = m1.bind(e)),
    (e.onClick = h1.bind(e)),
    (e.onLoad = g1.bind(e)),
    Ig(e, "on");
}
function w1() {
  Ig(this, "off");
}
var _1 = { attachEvents: y1, detachEvents: w1 };
const qf = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function S1() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    s = r.breakpoints;
  if (!s || (s && Object.keys(s).length === 0)) return;
  const o = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
  if (!o || e.currentBreakpoint === o) return;
  const a = (o in s ? s[o] : void 0) || e.originalParams,
    u = qf(e, r),
    c = qf(e, a),
    d = e.params.grabCursor,
    f = a.grabCursor,
    v = r.enabled;
  u && !c
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !u &&
      c &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((a.grid.fill && a.grid.fill === "column") ||
        (!a.grid.fill && r.grid.fill === "column")) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    d && !f ? e.unsetGrabCursor() : !d && f && e.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((h) => {
      if (typeof a[h] > "u") return;
      const w = r[h] && r[h].enabled,
        x = a[h] && a[h].enabled;
      w && !x && e[h].disable(), !w && x && e[h].enable();
    });
  const y = a.direction && a.direction !== r.direction,
    _ = r.loop && (a.slidesPerView !== r.slidesPerView || y),
    S = r.loop;
  y && n && e.changeDirection(), De(e.params, a);
  const p = e.params.enabled,
    g = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    v && !p ? e.disable() : !v && p && e.enable(),
    (e.currentBreakpoint = o),
    e.emit("_beforeBreakpoint", a),
    n &&
      (_
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !S && g
        ? (e.loopCreate(t), e.updateSlides())
        : S && !g && e.loopDestroy()),
    e.emit("breakpoint", a);
}
function x1(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let r = !1;
  const i = qe(),
    s = t === "window" ? i.innerHeight : n.clientHeight,
    o = Object.keys(e).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const a = parseFloat(l.substr(1));
        return { value: s * a, point: l };
      }
      return { value: l, point: l };
    });
  o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
  for (let l = 0; l < o.length; l += 1) {
    const { point: a, value: u } = o[l];
    t === "window"
      ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = a)
      : u <= n.clientWidth && (r = a);
  }
  return r || "max";
}
var E1 = { setBreakpoint: S1, getBreakpoint: x1 };
function T1(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function C1() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: s } = e,
    o = T1(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: s.android },
        { ios: s.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...o), i.classList.add(...t), e.emitContainerClasses();
}
function b1() {
  const e = this,
    { el: t, classNames: n } = e;
  !t ||
    typeof t == "string" ||
    (t.classList.remove(...n), e.emitContainerClasses());
}
var P1 = { addClasses: C1, removeClasses: b1 };
function I1() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      s = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > s;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var k1 = { checkOverflow: I1 },
  _u = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function N1(e, t) {
  return function (r) {
    r === void 0 && (r = {});
    const i = Object.keys(r)[0],
      s = r[i];
    if (typeof s != "object" || s === null) {
      De(t, r);
      return;
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === "navigation" &&
        e[i] &&
        e[i].enabled &&
        !e[i].prevEl &&
        !e[i].nextEl &&
        (e[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] &&
        e[i].enabled &&
        !e[i].el &&
        (e[i].auto = !0),
      !(i in e && "enabled" in s))
    ) {
      De(t, r);
      return;
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      De(t, r);
  };
}
const rl = {
    eventsEmitter: PS,
    update: US,
    translate: HS,
    transition: KS,
    slide: n1,
    loop: o1,
    grabCursor: u1,
    events: _1,
    breakpoints: E1,
    checkOverflow: k1,
    classes: P1,
  },
  il = {};
let Ki = class Et {
  constructor() {
    let t, n;
    for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
      i[s] = arguments[s];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = De({}, n)),
      t && !n.el && (n.el = t);
    const o = Br();
    if (
      n.el &&
      typeof n.el == "string" &&
      o.querySelectorAll(n.el).length > 1
    ) {
      const c = [];
      return (
        o.querySelectorAll(n.el).forEach((d) => {
          const f = De({}, n, { el: d });
          c.push(new Et(f));
        }),
        c
      );
    }
    const l = this;
    (l.__swiper__ = !0),
      (l.support = Cg()),
      (l.device = bg({ userAgent: n.userAgent })),
      (l.browser = TS()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      n.modules && Array.isArray(n.modules) && l.modules.push(...n.modules);
    const a = {};
    l.modules.forEach((c) => {
      c({
        params: n,
        swiper: l,
        extendParams: N1(n, a),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      });
    });
    const u = De({}, _u, a);
    return (
      (l.params = De({}, u, il, n)),
      (l.originalParams = De({}, l.params)),
      (l.passedParams = De({}, n)),
      l.params &&
        l.params.on &&
        Object.keys(l.params.on).forEach((c) => {
          l.on(c, l.params.on[c]);
        }),
      l.params && l.params.onAny && l.onAny(l.params.onAny),
      Object.assign(l, {
        enabled: l.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return l.params.direction === "horizontal";
        },
        isVertical() {
          return l.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      l.emit("_swiper"),
      l.params.init && l.init(),
      l
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = pt(n, `.${r.slideClass}, swiper-slide`),
      s = Bf(i[0]);
    return Bf(t) - s;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t
      )[0]
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = pt(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      o = (r.maxTranslate() - i) * t + i;
    r.translateTo(o, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const r = this,
      {
        params: i,
        slides: s,
        slidesGrid: o,
        slidesSizesGrid: l,
        size: a,
        activeIndex: u,
      } = r;
    let c = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let d = s[u] ? Math.ceil(s[u].swiperSlideSize) : 0,
        f;
      for (let v = u + 1; v < s.length; v += 1)
        s[v] &&
          !f &&
          ((d += Math.ceil(s[v].swiperSlideSize)), (c += 1), d > a && (f = !0));
      for (let v = u - 1; v >= 0; v -= 1)
        s[v] &&
          !f &&
          ((d += s[v].swiperSlideSize), (c += 1), d > a && (f = !0));
    } else if (t === "current")
      for (let d = u + 1; d < s.length; d += 1)
        (n ? o[d] + l[d] - o[u] < a : o[d] - o[u] < a) && (c += 1);
    else for (let d = u - 1; d >= 0; d -= 1) o[u] - o[d] < a && (c += 1);
    return c;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && Hs(t, o);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const o = t.rtlTranslate ? t.translate * -1 : t.translate,
        l = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
      t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let s;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      i(), r.autoHeight && t.updateAutoHeight();
    else {
      if (
        (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
        t.isEnd &&
        !r.centeredSlides
      ) {
        const o = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
        s = t.slideTo(o.length - 1, 0, !1, !0);
      } else s = t.slideTo(t.activeIndex, 0, !1, !0);
      s || i();
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((s) => {
          t === "vertical" ? (s.style.width = "") : (s.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r))
      return !1;
    (r.swiper = n),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName ===
          n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o =
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : pt(r, i())[0];
    return (
      !o &&
        n.params.createElements &&
        ((o = Ro("div", n.params.wrapperClass)),
        r.append(o),
        pt(r, `.${n.params.slideClass}`).forEach((l) => {
          o.append(l);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: o,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : o,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || rn(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || rn(r, "direction") === "rtl"),
        wrongRTL: rn(o, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((s) => {
        s.complete
          ? Hs(n, s)
          : s.addEventListener("load", (o) => {
              Hs(n, o.target);
            });
      }),
      wu(n),
      (n.initialized = !0),
      wu(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const r = this,
      { params: i, el: s, wrapperEl: o, slides: l } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          s && typeof s != "string" && s.removeAttribute("style"),
          o && o.removeAttribute("style"),
          l &&
            l.length &&
            l.forEach((a) => {
              a.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                a.removeAttribute("style"),
                a.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((a) => {
          r.off(a);
        }),
        t !== !1 &&
          (r.el && typeof r.el != "string" && (r.el.swiper = null), hS(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    De(il, t);
  }
  static get extendedDefaults() {
    return il;
  }
  static get defaults() {
    return _u;
  }
  static installModule(t) {
    Et.prototype.__modules__ || (Et.prototype.__modules__ = []);
    const n = Et.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => Et.installModule(n)), Et)
      : (Et.installModule(t), Et);
  }
};
Object.keys(rl).forEach((e) => {
  Object.keys(rl[e]).forEach((t) => {
    Ki.prototype[t] = rl[e][t];
  });
});
Ki.use([CS, bS]);
const kg = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function Gn(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  );
}
function xr(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : Gn(t[r]) && Gn(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : xr(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function Ng(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function Og(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function Rg(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function Lg(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
function O1(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function R1(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: i,
    nextEl: s,
    prevEl: o,
    scrollbarEl: l,
    paginationEl: a,
  } = e;
  const u = i.filter(
      (I) => I !== "children" && I !== "direction" && I !== "wrapperClass"
    ),
    {
      params: c,
      pagination: d,
      navigation: f,
      scrollbar: v,
      virtual: y,
      thumbs: _,
    } = t;
  let S, p, g, h, w, x, E, P;
  i.includes("thumbs") &&
    r.thumbs &&
    r.thumbs.swiper &&
    c.thumbs &&
    !c.thumbs.swiper &&
    (S = !0),
    i.includes("controller") &&
      r.controller &&
      r.controller.control &&
      c.controller &&
      !c.controller.control &&
      (p = !0),
    i.includes("pagination") &&
      r.pagination &&
      (r.pagination.el || a) &&
      (c.pagination || c.pagination === !1) &&
      d &&
      !d.el &&
      (g = !0),
    i.includes("scrollbar") &&
      r.scrollbar &&
      (r.scrollbar.el || l) &&
      (c.scrollbar || c.scrollbar === !1) &&
      v &&
      !v.el &&
      (h = !0),
    i.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || o) &&
      (r.navigation.nextEl || s) &&
      (c.navigation || c.navigation === !1) &&
      f &&
      !f.prevEl &&
      !f.nextEl &&
      (w = !0);
  const b = (I) => {
    t[I] &&
      (t[I].destroy(),
      I === "navigation"
        ? (t.isElement && (t[I].prevEl.remove(), t[I].nextEl.remove()),
          (c[I].prevEl = void 0),
          (c[I].nextEl = void 0),
          (t[I].prevEl = void 0),
          (t[I].nextEl = void 0))
        : (t.isElement && t[I].el.remove(),
          (c[I].el = void 0),
          (t[I].el = void 0)));
  };
  i.includes("loop") &&
    t.isElement &&
    (c.loop && !r.loop ? (x = !0) : !c.loop && r.loop ? (E = !0) : (P = !0)),
    u.forEach((I) => {
      if (Gn(c[I]) && Gn(r[I]))
        Object.assign(c[I], r[I]),
          (I === "navigation" || I === "pagination" || I === "scrollbar") &&
            "enabled" in r[I] &&
            !r[I].enabled &&
            b(I);
      else {
        const T = r[I];
        (T === !0 || T === !1) &&
        (I === "navigation" || I === "pagination" || I === "scrollbar")
          ? T === !1 && b(I)
          : (c[I] = r[I]);
      }
    }),
    u.includes("controller") &&
      !p &&
      t.controller &&
      t.controller.control &&
      c.controller &&
      c.controller.control &&
      (t.controller.control = c.controller.control),
    i.includes("children") && n && y && c.virtual.enabled
      ? ((y.slides = n), y.update(!0))
      : i.includes("virtual") &&
        y &&
        c.virtual.enabled &&
        (n && (y.slides = n), y.update(!0)),
    i.includes("children") && n && c.loop && (P = !0),
    S && _.init() && _.update(!0),
    p && (t.controller.control = c.controller.control),
    g &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-pagination"),
        a.part.add("pagination"),
        t.el.appendChild(a)),
      a && (c.pagination.el = a),
      d.init(),
      d.render(),
      d.update()),
    h &&
      (t.isElement &&
        (!l || typeof l == "string") &&
        ((l = document.createElement("div")),
        l.classList.add("swiper-scrollbar"),
        l.part.add("scrollbar"),
        t.el.appendChild(l)),
      l && (c.scrollbar.el = l),
      v.init(),
      v.updateSize(),
      v.setTranslate()),
    w &&
      (t.isElement &&
        ((!s || typeof s == "string") &&
          ((s = document.createElement("div")),
          s.classList.add("swiper-button-next"),
          (s.innerHTML = t.hostEl.constructor.nextButtonSvg),
          s.part.add("button-next"),
          t.el.appendChild(s)),
        (!o || typeof o == "string") &&
          ((o = document.createElement("div")),
          o.classList.add("swiper-button-prev"),
          (o.innerHTML = t.hostEl.constructor.prevButtonSvg),
          o.part.add("button-prev"),
          t.el.appendChild(o))),
      s && (c.navigation.nextEl = s),
      o && (c.navigation.prevEl = o),
      f.init(),
      f.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") && t.changeDirection(r.direction, !1),
    (x || P) && t.loopDestroy(),
    (E || P) && t.loopCreate(),
    t.update();
}
function L1(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    r = {},
    i = {};
  xr(n, _u), (n._emitClasses = !0), (n.init = !1);
  const s = {},
    o = kg.map((a) => a.replace(/_/, "")),
    l = Object.assign({}, e);
  return (
    Object.keys(l).forEach((a) => {
      typeof e[a] > "u" ||
        (o.indexOf(a) >= 0
          ? Gn(e[a])
            ? ((n[a] = {}), (i[a] = {}), xr(n[a], e[a]), xr(i[a], e[a]))
            : ((n[a] = e[a]), (i[a] = e[a]))
          : a.search(/on[A-Z]/) === 0 && typeof e[a] == "function"
          ? t
            ? (r[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
            : (n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
          : (s[a] = e[a]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((a) => {
      n[a] === !0 && (n[a] = {}), n[a] === !1 && delete n[a];
    }),
    { params: n, passedParams: i, rest: s, events: r }
  );
}
function A1(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: i,
    paginationEl: s,
    scrollbarEl: o,
    swiper: l,
  } = e;
  Ng(t) &&
    r &&
    i &&
    ((l.params.navigation.nextEl = r),
    (l.originalParams.navigation.nextEl = r),
    (l.params.navigation.prevEl = i),
    (l.originalParams.navigation.prevEl = i)),
    Og(t) &&
      s &&
      ((l.params.pagination.el = s), (l.originalParams.pagination.el = s)),
    Rg(t) &&
      o &&
      ((l.params.scrollbar.el = o), (l.originalParams.scrollbar.el = o)),
    l.init(n);
}
function M1(e, t, n, r, i) {
  const s = [];
  if (!t) return s;
  const o = (a) => {
    s.indexOf(a) < 0 && s.push(a);
  };
  if (n && r) {
    const a = r.map(i),
      u = n.map(i);
    a.join("") !== u.join("") && o("children"),
      r.length !== n.length && o("children");
  }
  return (
    kg
      .filter((a) => a[0] === "_")
      .map((a) => a.replace(/_/, ""))
      .forEach((a) => {
        if (a in e && a in t)
          if (Gn(e[a]) && Gn(t[a])) {
            const u = Object.keys(e[a]),
              c = Object.keys(t[a]);
            u.length !== c.length
              ? o(a)
              : (u.forEach((d) => {
                  e[a][d] !== t[a][d] && o(a);
                }),
                c.forEach((d) => {
                  e[a][d] !== t[a][d] && o(a);
                }));
          } else e[a] !== t[a] && o(a);
      }),
    s
  );
}
const j1 = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function Lo() {
  return (
    (Lo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Lo.apply(this, arguments)
  );
}
function Ag(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function Mg(e) {
  const t = [];
  return (
    V.Children.toArray(e).forEach((n) => {
      Ag(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          Mg(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function D1(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    V.Children.toArray(e).forEach((r) => {
      if (Ag(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = Mg(r.props.children);
        i.length > 0 ? i.forEach((s) => t.push(s)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function U1(e, t, n) {
  if (!n) return null;
  const r = (c) => {
      let d = c;
      return (
        c < 0 ? (d = t.length + c) : d >= t.length && (d = d - t.length), d
      );
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: s, to: o } = n,
    l = e.params.loop ? -t.length : 0,
    a = e.params.loop ? t.length * 2 : t.length,
    u = [];
  for (let c = l; c < a; c += 1) c >= s && c <= o && u.push(t[r(c)]);
  return u.map((c, d) =>
    V.cloneElement(c, {
      swiper: e,
      style: i,
      key: c.props.virtualIndex || c.key || `slide-${d}`,
    })
  );
}
function gi(e, t) {
  return typeof window > "u" ? C.useEffect(e, t) : C.useLayoutEffect(e, t);
}
const Kf = C.createContext(null),
  z1 = C.createContext(null),
  Uc = C.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = "div",
        wrapperTag: i = "div",
        children: s,
        onSwiper: o,
        ...l
      } = e === void 0 ? {} : e,
      a = !1;
    const [u, c] = C.useState("swiper"),
      [d, f] = C.useState(null),
      [v, y] = C.useState(!1),
      _ = C.useRef(!1),
      S = C.useRef(null),
      p = C.useRef(null),
      g = C.useRef(null),
      h = C.useRef(null),
      w = C.useRef(null),
      x = C.useRef(null),
      E = C.useRef(null),
      P = C.useRef(null),
      { params: b, passedParams: I, rest: T, events: N } = L1(l),
      { slides: L, slots: M } = D1(s),
      F = () => {
        y(!v);
      };
    Object.assign(b.on, {
      _containerClasses(A, j) {
        c(j);
      },
    });
    const G = () => {
      Object.assign(b.on, N), (a = !0);
      const A = { ...b };
      if (
        (delete A.wrapperClass,
        (p.current = new Ki(A)),
        p.current.virtual && p.current.params.virtual.enabled)
      ) {
        p.current.virtual.slides = L;
        const j = {
          cache: !1,
          slides: L,
          renderExternal: f,
          renderExternalUpdate: !1,
        };
        xr(p.current.params.virtual, j),
          xr(p.current.originalParams.virtual, j);
      }
    };
    S.current || G(), p.current && p.current.on("_beforeBreakpoint", F);
    const me = () => {
        a ||
          !N ||
          !p.current ||
          Object.keys(N).forEach((A) => {
            p.current.on(A, N[A]);
          });
      },
      bn = () => {
        !N ||
          !p.current ||
          Object.keys(N).forEach((A) => {
            p.current.off(A, N[A]);
          });
      };
    C.useEffect(() => () => {
      p.current && p.current.off("_beforeBreakpoint", F);
    }),
      C.useEffect(() => {
        !_.current &&
          p.current &&
          (p.current.emitSlidesClasses(), (_.current = !0));
      }),
      gi(() => {
        if ((t && (t.current = S.current), !!S.current))
          return (
            p.current.destroyed && G(),
            A1(
              {
                el: S.current,
                nextEl: w.current,
                prevEl: x.current,
                paginationEl: E.current,
                scrollbarEl: P.current,
                swiper: p.current,
              },
              b
            ),
            o && !p.current.destroyed && o(p.current),
            () => {
              p.current && !p.current.destroyed && p.current.destroy(!0, !1);
            }
          );
      }, []),
      gi(() => {
        me();
        const A = M1(I, g.current, L, h.current, (j) => j.key);
        return (
          (g.current = I),
          (h.current = L),
          A.length &&
            p.current &&
            !p.current.destroyed &&
            R1({
              swiper: p.current,
              slides: L,
              passedParams: I,
              changedParams: A,
              nextEl: w.current,
              prevEl: x.current,
              scrollbarEl: P.current,
              paginationEl: E.current,
            }),
          () => {
            bn();
          }
        );
      }),
      gi(() => {
        j1(p.current);
      }, [d]);
    function O() {
      return b.virtual
        ? U1(p.current, L, d)
        : L.map((A, j) =>
            V.cloneElement(A, { swiper: p.current, swiperSlideIndex: j })
          );
    }
    return V.createElement(
      r,
      Lo({ ref: S, className: Lg(`${u}${n ? ` ${n}` : ""}`) }, T),
      V.createElement(
        z1.Provider,
        { value: p.current },
        M["container-start"],
        V.createElement(
          i,
          { className: O1(b.wrapperClass) },
          M["wrapper-start"],
          O(),
          M["wrapper-end"]
        ),
        Ng(b) &&
          V.createElement(
            V.Fragment,
            null,
            V.createElement("div", { ref: x, className: "swiper-button-prev" }),
            V.createElement("div", { ref: w, className: "swiper-button-next" })
          ),
        Rg(b) &&
          V.createElement("div", { ref: P, className: "swiper-scrollbar" }),
        Og(b) &&
          V.createElement("div", { ref: E, className: "swiper-pagination" }),
        M["container-end"]
      )
    );
  });
Uc.displayName = "Swiper";
const zc = C.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: s,
    zoom: o,
    lazy: l,
    virtualIndex: a,
    swiperSlideIndex: u,
    ...c
  } = e === void 0 ? {} : e;
  const d = C.useRef(null),
    [f, v] = C.useState("swiper-slide"),
    [y, _] = C.useState(!1);
  function S(w, x, E) {
    x === d.current && v(E);
  }
  gi(() => {
    if (
      (typeof u < "u" && (d.current.swiperSlideIndex = u),
      t && (t.current = d.current),
      !(!d.current || !s))
    ) {
      if (s.destroyed) {
        f !== "swiper-slide" && v("swiper-slide");
        return;
      }
      return (
        s.on("_slideClass", S),
        () => {
          s && s.off("_slideClass", S);
        }
      );
    }
  }),
    gi(() => {
      s && d.current && !s.destroyed && v(s.getSlideClasses(d.current));
    }, [s]);
  const p = {
      isActive: f.indexOf("swiper-slide-active") >= 0,
      isVisible: f.indexOf("swiper-slide-visible") >= 0,
      isPrev: f.indexOf("swiper-slide-prev") >= 0,
      isNext: f.indexOf("swiper-slide-next") >= 0,
    },
    g = () => (typeof r == "function" ? r(p) : r),
    h = () => {
      _(!0);
    };
  return V.createElement(
    n,
    Lo(
      {
        ref: d,
        className: Lg(`${f}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": a,
        onLoad: h,
      },
      c
    ),
    o &&
      V.createElement(
        Kf.Provider,
        { value: p },
        V.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof o == "number" ? o : void 0,
          },
          g(),
          l &&
            !y &&
            V.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !o &&
      V.createElement(
        Kf.Provider,
        { value: p },
        g(),
        l &&
          !y &&
          V.createElement("div", { className: "swiper-lazy-preloader" })
      )
  );
});
zc.displayName = "SwiperSlide";
function F1(e, t, n, r) {
  return (
    e.params.createElements &&
      Object.keys(r).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let s = pt(e.el, `.${r[i]}`)[0];
          s || ((s = Ro("div", r[i])), (s.className = r[i]), e.el.append(s)),
            (n[i] = s),
            (t[i] = s);
        }
      }),
    n
  );
}
function jg(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  n({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (t.navigation = { nextEl: null, prevEl: null });
  function s(y) {
    let _;
    return y &&
      typeof y == "string" &&
      t.isElement &&
      ((_ = t.el.querySelector(y)), _)
      ? _
      : (y &&
          (typeof y == "string" && (_ = [...document.querySelectorAll(y)]),
          t.params.uniqueNavElements &&
          typeof y == "string" &&
          _ &&
          _.length > 1 &&
          t.el.querySelectorAll(y).length === 1
            ? (_ = t.el.querySelector(y))
            : _ && _.length === 1 && (_ = _[0])),
        y && !_ ? y : _);
  }
  function o(y, _) {
    const S = t.params.navigation;
    (y = St(y)),
      y.forEach((p) => {
        p &&
          (p.classList[_ ? "add" : "remove"](...S.disabledClass.split(" ")),
          p.tagName === "BUTTON" && (p.disabled = _),
          t.params.watchOverflow &&
            t.enabled &&
            p.classList[t.isLocked ? "add" : "remove"](S.lockClass));
      });
  }
  function l() {
    const { nextEl: y, prevEl: _ } = t.navigation;
    if (t.params.loop) {
      o(_, !1), o(y, !1);
      return;
    }
    o(_, t.isBeginning && !t.params.rewind), o(y, t.isEnd && !t.params.rewind);
  }
  function a(y) {
    y.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), i("navigationPrev"));
  }
  function u(y) {
    y.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) &&
        (t.slideNext(), i("navigationNext"));
  }
  function c() {
    const y = t.params.navigation;
    if (
      ((t.params.navigation = F1(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(y.nextEl || y.prevEl))
    )
      return;
    let _ = s(y.nextEl),
      S = s(y.prevEl);
    Object.assign(t.navigation, { nextEl: _, prevEl: S }),
      (_ = St(_)),
      (S = St(S));
    const p = (g, h) => {
      g && g.addEventListener("click", h === "next" ? u : a),
        !t.enabled && g && g.classList.add(...y.lockClass.split(" "));
    };
    _.forEach((g) => p(g, "next")), S.forEach((g) => p(g, "prev"));
  }
  function d() {
    let { nextEl: y, prevEl: _ } = t.navigation;
    (y = St(y)), (_ = St(_));
    const S = (p, g) => {
      p.removeEventListener("click", g === "next" ? u : a),
        p.classList.remove(...t.params.navigation.disabledClass.split(" "));
    };
    y.forEach((p) => S(p, "next")), _.forEach((p) => S(p, "prev"));
  }
  r("init", () => {
    t.params.navigation.enabled === !1 ? v() : (c(), l());
  }),
    r("toEdge fromEdge lock unlock", () => {
      l();
    }),
    r("destroy", () => {
      d();
    }),
    r("enable disable", () => {
      let { nextEl: y, prevEl: _ } = t.navigation;
      if (((y = St(y)), (_ = St(_)), t.enabled)) {
        l();
        return;
      }
      [...y, ..._]
        .filter((S) => !!S)
        .forEach((S) => S.classList.add(t.params.navigation.lockClass));
    }),
    r("click", (y, _) => {
      let { nextEl: S, prevEl: p } = t.navigation;
      (S = St(S)), (p = St(p));
      const g = _.target;
      let h = p.includes(g) || S.includes(g);
      if (t.isElement && !h) {
        const w = _.path || (_.composedPath && _.composedPath());
        w && (h = w.find((x) => S.includes(x) || p.includes(x)));
      }
      if (t.params.navigation.hideOnClick && !h) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === g || t.pagination.el.contains(g))
        )
          return;
        let w;
        S.length
          ? (w = S[0].classList.contains(t.params.navigation.hiddenClass))
          : p.length &&
            (w = p[0].classList.contains(t.params.navigation.hiddenClass)),
          i(w === !0 ? "navigationShow" : "navigationHide"),
          [...S, ...p]
            .filter((x) => !!x)
            .forEach((x) =>
              x.classList.toggle(t.params.navigation.hiddenClass)
            );
      }
    });
  const f = () => {
      t.el.classList.remove(
        ...t.params.navigation.navigationDisabledClass.split(" ")
      ),
        c(),
        l();
    },
    v = () => {
      t.el.classList.add(
        ...t.params.navigation.navigationDisabledClass.split(" ")
      ),
        d();
    };
  Object.assign(t.navigation, {
    enable: f,
    disable: v,
    update: l,
    init: c,
    destroy: d,
  });
}
var Dg = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Xf = V.createContext && V.createContext(Dg),
  $1 = ["attr", "size", "title"];
function B1(e, t) {
  if (e == null) return {};
  var n = V1(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function V1(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Ao() {
  return (
    (Ao = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ao.apply(this, arguments)
  );
}
function Yf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Mo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Yf(Object(n), !0).forEach(function (r) {
          H1(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Yf(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function H1(e, t, n) {
  return (
    (t = W1(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function W1(e) {
  var t = G1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function G1(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ug(e) {
  return (
    e &&
    e.map((t, n) => V.createElement(t.tag, Mo({ key: n }, t.attr), Ug(t.child)))
  );
}
function Cn(e) {
  return (t) =>
    V.createElement(q1, Ao({ attr: Mo({}, e.attr) }, t), Ug(e.child));
}
function q1(e) {
  var t = (n) => {
    var { attr: r, size: i, title: s } = e,
      o = B1(e, $1),
      l = i || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      V.createElement(
        "svg",
        Ao(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: a,
            style: Mo(Mo({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        s && V.createElement("title", null, s),
        e.children
      )
    );
  };
  return Xf !== void 0
    ? V.createElement(Xf.Consumer, null, (n) => t(n))
    : t(Dg);
}
function K1(e) {
  return Cn({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z",
        },
        child: [],
      },
    ],
  })(e);
}
function Ws({ listing: e }) {
  return m.jsx("div", {
    className:
      "bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]",
    children: m.jsxs(we, {
      to: `/listing/${e._id}`,
      children: [
        m.jsx("img", {
          src: e.imageUrls[0],
          alt: "listing-cover",
          className:
            "h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300",
        }),
        m.jsxs("div", {
          className: "p-3 flex flex-col gap-2 w-full",
          children: [
            m.jsx("p", {
              className: "text-lg text-slate-700 font-semibold truncate",
              children: e.name,
            }),
            m.jsxs("div", {
              className: "flex items-center gap-1",
              children: [
                m.jsx(K1, { className: "h-4 w-4 text-green-700" }),
                m.jsx("p", {
                  className: "text-sm text-gray-600 truncate",
                  children: e.address,
                }),
              ],
            }),
            m.jsx("p", {
              className: "text-sm text-gray-600 line-clamp-2",
              children: e.description,
            }),
            m.jsxs("p", {
              className: "text-slate-500 mt-2 font-semibold flex items-center",
              children: [
                "$",
                " ",
                e.offer
                  ? e.discountPrice.toLocaleString("en-US")
                  : e.regularPrice.toLocaleString("en-US"),
                e.type === "rent" && "/Month",
              ],
            }),
            m.jsxs("div", {
              className: "text-slate-700 flex gap-4   ",
              children: [
                m.jsx("div", {
                  className: "font-bold text-xs",
                  children:
                    e.bedrooms > 1 ? `${e.bedrooms} Beds` : `${e.bedrooms} Bed`,
                }),
                m.jsx("div", {
                  className: "font-bold text-xs",
                  children:
                    e.bathrooms > 1
                      ? `${e.bedrooms} Baths`
                      : `${e.bedrooms} Bath`,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function X1() {
  const [e, t] = C.useState([]),
    [n, r] = C.useState([]),
    [i, s] = C.useState([]);
  return (
    Ki.use([jg]),
    console.log(e),
    C.useEffect(() => {
      const o = async () => {
          try {
            const c = await (
              await fetch("api/listing/get?offer=true&limit=4")
            ).json();
            t(c), l();
          } catch (u) {
            console.log(u);
          }
        },
        l = async () => {
          try {
            const c = await (
              await fetch("api/listing/get?type=rent&limit=4")
            ).json();
            s(c), a();
          } catch (u) {
            console.log(u);
          }
        },
        a = async () => {
          try {
            const c = await (
              await fetch("api/listing/get?type=sell&limit=4")
            ).json();
            r(c);
          } catch (u) {
            console.log(u);
          }
        };
      o();
    }, []),
    m.jsxs("div", {
      children: [
        m.jsxs("div", {
          className: "flex flex-col gap-6 py-28 px-3 max-w-6xl mx-auto",
          children: [
            m.jsxs("h1", {
              className: "text-slate-700 font-bold text-3xl lg:text-6xl",
              children: [
                "Find Your Next ",
                " ",
                m.jsx("span", {
                  className: "text-slate-500",
                  children: "Perfact Place",
                }),
                m.jsx("br", {}),
                " With ease",
              ],
            }),
            m.jsxs("div", {
              className: "text-gray-700 text-xs sm:text-sm",
              children: [
                '"Welcome to ',
                m.jsx("span", {
                  className: "text-slate-800",
                  children: "The Realtor",
                }),
                ", your one-stop destination for buying, selling, and renting properties. Discover a wide range of homes and commercial spaces tailored to your needs. Experience seamless transactions and expert guidance every step of the way.",
              ],
            }),
            m.jsx(we, {
              to: "/search",
              className:
                "text-xs sm:text-sm text-blue-800 font-bold hover:underline",
              children: "Lets get Started now",
            }),
          ],
        }),
        m.jsx(Uc, {
          navigation: !0,
          children:
            e &&
            e.length > 0 &&
            e.map((o) =>
              m.jsx(zc, {
                children: m.jsx(
                  "div",
                  {
                    className: "h-[500px]",
                    style: {
                      background: `url(${o.imageUrls[0]}) center no-repeat`,
                      backgroundSize: "cover",
                    },
                  },
                  o._id
                ),
              })
            ),
        }),
        m.jsx("div", {
          className: "max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10",
          children:
            e &&
            e.length > 0 &&
            m.jsxs("div", {
              children: [
                m.jsxs("div", {
                  className: "my-3",
                  children: [
                    m.jsx("h2", {
                      className: "text-2xl font-semibold text-slate-600",
                      children: "Recent Offers",
                    }),
                    m.jsx(we, {
                      className: "text-sm text-blue-800 hover:underline",
                      to: "/search?offer=true",
                      children: "Show More Offer",
                    }),
                  ],
                }),
                m.jsx("div", {
                  className: "flex flex-wrap gap-4",
                  children: e.map((o) => m.jsx(Ws, { listing: o }, o._id)),
                }),
              ],
            }),
        }),
        m.jsx("div", {
          className: "max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10",
          children:
            i &&
            i.length > 0 &&
            m.jsxs("div", {
              children: [
                m.jsxs("div", {
                  className: "my-3",
                  children: [
                    m.jsx("h2", {
                      className: "text-2xl font-semibold text-slate-600",
                      children: "Recent Places for Rent",
                    }),
                    m.jsx(we, {
                      className: "text-sm text-blue-800 hover:underline",
                      to: "/search?type=rent",
                      children: "Show More Places for Rent",
                    }),
                  ],
                }),
                m.jsx("div", {
                  className: "flex flex-wrap gap-4",
                  children: i.map((o) => m.jsx(Ws, { listing: o }, o._id)),
                }),
              ],
            }),
        }),
        m.jsx("div", {
          className: "max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10",
          children:
            n &&
            n.length > 0 &&
            m.jsxs("div", {
              children: [
                m.jsxs("div", {
                  className: "my-3",
                  children: [
                    m.jsx("h2", {
                      className: "text-2xl font-semibold text-slate-600",
                      children: "Recent Offers for Sale",
                    }),
                    m.jsx(we, {
                      className: "text-sm text-blue-800 hover:underline",
                      to: "/search?type=sell",
                      children: "Show More Places for Sale",
                    }),
                  ],
                }),
                m.jsx("div", {
                  className: "flex flex-wrap gap-4",
                  children: n.map((o) => m.jsx(Ws, { listing: o }, o._id)),
                }),
              ],
            }),
        }),
      ],
    })
  );
}
function Y1() {
  return m.jsxs("div", {
    className: "py-20 px-4 max-w-6xl mx-auto",
    children: [
      m.jsx("h1", {
        className: "text-3xl font-bold mb-4 text-slate-900",
        children: "About The Realtor",
      }),
      m.jsx("p", {
        className: "mb-4 text-slate-700",
        children: "Welcome to The Realtor!",
      }),
      m.jsx("p", {
        className: "mb-4 text-slate-700",
        children:
          "At The Realtor, we are dedicated to transforming the real estate experience for buyers, sellers, and renters alike. Our platform offers a comprehensive and user-friendly solution for all your property needs, ensuring a seamless and efficient process from start to finish.",
      }),
      m.jsx("p", {
        className: "mb-4 text-slate-700",
        children:
          "Our mission is to simplify real estate transactions by providing a reliable, transparent, and accessible platform. Whether you're looking to buy your dream home, sell a property, or find the perfect rental, we are here to guide you every step of the way.",
      }),
      m.jsx("p", {
        className: "mb-4 text-slate-700",
        children:
          "Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience , and we are dedicated to making that a reality for each and every one of our clients.",
      }),
    ],
  });
}
var Qf = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const zg = function (e) {
    const t = [];
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      let i = e.charCodeAt(r);
      i < 128
        ? (t[n++] = i)
        : i < 2048
        ? ((t[n++] = (i >> 6) | 192), (t[n++] = (i & 63) | 128))
        : (i & 64512) === 55296 &&
          r + 1 < e.length &&
          (e.charCodeAt(r + 1) & 64512) === 56320
        ? ((i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023)),
          (t[n++] = (i >> 18) | 240),
          (t[n++] = ((i >> 12) & 63) | 128),
          (t[n++] = ((i >> 6) & 63) | 128),
          (t[n++] = (i & 63) | 128))
        : ((t[n++] = (i >> 12) | 224),
          (t[n++] = ((i >> 6) & 63) | 128),
          (t[n++] = (i & 63) | 128));
    }
    return t;
  },
  Q1 = function (e) {
    const t = [];
    let n = 0,
      r = 0;
    for (; n < e.length; ) {
      const i = e[n++];
      if (i < 128) t[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const s = e[n++];
        t[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63));
      } else if (i > 239 && i < 365) {
        const s = e[n++],
          o = e[n++],
          l = e[n++],
          a =
            (((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (l & 63)) -
            65536;
        (t[r++] = String.fromCharCode(55296 + (a >> 10))),
          (t[r++] = String.fromCharCode(56320 + (a & 1023)));
      } else {
        const s = e[n++],
          o = e[n++];
        t[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((s & 63) << 6) | (o & 63)
        );
      }
    }
    return t.join("");
  },
  Fg = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(e, t) {
      if (!Array.isArray(e))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < e.length; i += 3) {
        const s = e[i],
          o = i + 1 < e.length,
          l = o ? e[i + 1] : 0,
          a = i + 2 < e.length,
          u = a ? e[i + 2] : 0,
          c = s >> 2,
          d = ((s & 3) << 4) | (l >> 4);
        let f = ((l & 15) << 2) | (u >> 6),
          v = u & 63;
        a || ((v = 64), o || (f = 64)), r.push(n[c], n[d], n[f], n[v]);
      }
      return r.join("");
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(e)
        : this.encodeByteArray(zg(e), t);
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(e)
        : Q1(this.decodeStringToByteArray(e, t));
    },
    decodeStringToByteArray(e, t) {
      this.init_();
      const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < e.length; ) {
        const s = n[e.charAt(i++)],
          l = i < e.length ? n[e.charAt(i)] : 0;
        ++i;
        const u = i < e.length ? n[e.charAt(i)] : 64;
        ++i;
        const d = i < e.length ? n[e.charAt(i)] : 64;
        if ((++i, s == null || l == null || u == null || d == null))
          throw new J1();
        const f = (s << 2) | (l >> 4);
        if ((r.push(f), u !== 64)) {
          const v = ((l << 4) & 240) | (u >> 2);
          if ((r.push(v), d !== 64)) {
            const y = ((u << 6) & 192) | d;
            r.push(y);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let e = 0; e < this.ENCODED_VALS.length; e++)
          (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
            (this.charToByteMap_[this.byteToCharMap_[e]] = e),
            (this.byteToCharMapWebSafe_[e] =
              this.ENCODED_VALS_WEBSAFE.charAt(e)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
            e >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e));
      }
    },
  };
class J1 extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const Z1 = function (e) {
    const t = zg(e);
    return Fg.encodeByteArray(t, !0);
  },
  jo = function (e) {
    return Z1(e).replace(/\./g, "");
  },
  $g = function (e) {
    try {
      return Fg.decodeString(e, !0);
    } catch (t) {
      console.error("base64Decode failed: ", t);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ex() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const tx = () => ex().__FIREBASE_DEFAULTS__,
  nx = () => {
    if (typeof process > "u" || typeof Qf > "u") return;
    const e = Qf.__FIREBASE_DEFAULTS__;
    if (e) return JSON.parse(e);
  },
  rx = () => {
    if (typeof document > "u") return;
    let e;
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const t = e && $g(e[1]);
    return t && JSON.parse(t);
  },
  Fc = () => {
    try {
      return tx() || nx() || rx();
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
      return;
    }
  },
  Bg = (e) => {
    var t, n;
    return (n =
      (t = Fc()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[e];
  },
  ix = (e) => {
    const t = Bg(e);
    if (!t) return;
    const n = t.lastIndexOf(":");
    if (n <= 0 || n + 1 === t.length)
      throw new Error(`Invalid host ${t} with no separate hostname and port!`);
    const r = parseInt(t.substring(n + 1), 10);
    return t[0] === "[" ? [t.substring(1, n - 1), r] : [t.substring(0, n), r];
  },
  Vg = () => {
    var e;
    return (e = Fc()) === null || e === void 0 ? void 0 : e.config;
  },
  Hg = (e) => {
    var t;
    return (t = Fc()) === null || t === void 0 ? void 0 : t[`_${e}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sx {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, n) => {
        (this.resolve = t), (this.reject = n);
      }));
  }
  wrapCallback(t) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof t == "function" &&
          (this.promise.catch(() => {}), t.length === 1 ? t(n) : t(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ox(e, t) {
  if (e.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
    );
  const n = { alg: "none", type: "JWT" },
    r = t || "demo-project",
    i = e.iat || 0,
    s = e.sub || e.user_id;
  if (!s)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const o = Object.assign(
    {
      iss: `https://securetoken.google.com/${r}`,
      aud: r,
      iat: i,
      exp: i + 3600,
      auth_time: i,
      sub: s,
      user_id: s,
      firebase: { sign_in_provider: "custom", identities: {} },
    },
    e
  );
  return [jo(JSON.stringify(n)), jo(JSON.stringify(o)), ""].join(".");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Se() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function ax() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())
  );
}
function lx() {
  const e =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
      ? browser.runtime
      : void 0;
  return typeof e == "object" && e.id !== void 0;
}
function ux() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function cx() {
  const e = Se();
  return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
}
function dx() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function fx() {
  return new Promise((e, t) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        i = self.indexedDB.open(r);
      (i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          var s;
          t(
            ((s = i.error) === null || s === void 0 ? void 0 : s.message) || ""
          );
        });
    } catch (n) {
      t(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const px = "FirebaseError";
class Vt extends Error {
  constructor(t, n, r) {
    super(n),
      (this.code = t),
      (this.customData = r),
      (this.name = px),
      Object.setPrototypeOf(this, Vt.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, Xi.prototype.create);
  }
}
class Xi {
  constructor(t, n, r) {
    (this.service = t), (this.serviceName = n), (this.errors = r);
  }
  create(t, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${t}`,
      s = this.errors[t],
      o = s ? hx(s, r) : "Error",
      l = `${this.serviceName}: ${o} (${i}).`;
    return new Vt(i, l, r);
  }
}
function hx(e, t) {
  return e.replace(mx, (n, r) => {
    const i = t[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const mx = /\{\$([^}]+)}/g;
function gx(e) {
  for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
  return !0;
}
function Do(e, t) {
  if (e === t) return !0;
  const n = Object.keys(e),
    r = Object.keys(t);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const s = e[i],
      o = t[i];
    if (Jf(s) && Jf(o)) {
      if (!Do(s, o)) return !1;
    } else if (s !== o) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function Jf(e) {
  return e !== null && typeof e == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Yi(e) {
  const t = [];
  for (const [n, r] of Object.entries(e))
    Array.isArray(r)
      ? r.forEach((i) => {
          t.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
        })
      : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return t.length ? "&" + t.join("&") : "";
}
function vx(e, t) {
  const n = new yx(e, t);
  return n.subscribe.bind(n);
}
class yx {
  constructor(t, n) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = n),
      this.task
        .then(() => {
          t(this);
        })
        .catch((r) => {
          this.error(r);
        });
  }
  next(t) {
    this.forEachObserver((n) => {
      n.next(t);
    });
  }
  error(t) {
    this.forEachObserver((n) => {
      n.error(t);
    }),
      this.close(t);
  }
  complete() {
    this.forEachObserver((t) => {
      t.complete();
    }),
      this.close();
  }
  subscribe(t, n, r) {
    let i;
    if (t === void 0 && n === void 0 && r === void 0)
      throw new Error("Missing Observer.");
    wx(t, ["next", "error", "complete"])
      ? (i = t)
      : (i = { next: t, error: n, complete: r }),
      i.next === void 0 && (i.next = sl),
      i.error === void 0 && (i.error = sl),
      i.complete === void 0 && (i.complete = sl);
    const s = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? i.error(this.finalError) : i.complete();
          } catch {}
        }),
      this.observers.push(i),
      s
    );
  }
  unsubscribeOne(t) {
    this.observers === void 0 ||
      this.observers[t] === void 0 ||
      (delete this.observers[t],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(t) {
    if (!this.finalized)
      for (let n = 0; n < this.observers.length; n++) this.sendOne(n, t);
  }
  sendOne(t, n) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[t] !== void 0)
        try {
          n(this.observers[t]);
        } catch (r) {
          typeof console < "u" && console.error && console.error(r);
        }
    });
  }
  close(t) {
    this.finalized ||
      ((this.finalized = !0),
      t !== void 0 && (this.finalError = t),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function wx(e, t) {
  if (typeof e != "object" || e === null) return !1;
  for (const n of t) if (n in e && typeof e[n] == "function") return !0;
  return !1;
}
function sl() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _t(e) {
  return e && e._delegate ? e._delegate : e;
}
class qn {
  constructor(t, n, r) {
    (this.name = t),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(t) {
    return (this.instantiationMode = t), this;
  }
  setMultipleInstances(t) {
    return (this.multipleInstances = t), this;
  }
  setServiceProps(t) {
    return (this.serviceProps = t), this;
  }
  setInstanceCreatedCallback(t) {
    return (this.onInstanceCreated = t), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const On = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let _x = class {
  constructor(t, n) {
    (this.name = t),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(t) {
    const n = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(n)) {
      const r = new sx();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n });
          i && r.resolve(i);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(t) {
    var n;
    const r = this.normalizeInstanceIdentifier(
        t == null ? void 0 : t.identifier
      ),
      i =
        (n = t == null ? void 0 : t.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (s) {
        if (i) return null;
        throw s;
      }
    else {
      if (i) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = t), !!this.shouldAutoInitialize())) {
      if (xx(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: On });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: i });
          r.resolve(s);
        } catch {}
      }
    }
  }
  clearInstance(t = On) {
    this.instancesDeferred.delete(t),
      this.instancesOptions.delete(t),
      this.instances.delete(t);
  }
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...t.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = On) {
    return this.instances.has(t);
  }
  getOptions(t = On) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: n = {} } = t,
      r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n,
    });
    for (const [s, o] of this.instancesDeferred.entries()) {
      const l = this.normalizeInstanceIdentifier(s);
      r === l && o.resolve(i);
    }
    return i;
  }
  onInit(t, n) {
    var r;
    const i = this.normalizeInstanceIdentifier(n),
      s =
        (r = this.onInitCallbacks.get(i)) !== null && r !== void 0
          ? r
          : new Set();
    s.add(t), this.onInitCallbacks.set(i, s);
    const o = this.instances.get(i);
    return (
      o && t(o, i),
      () => {
        s.delete(t);
      }
    );
  }
  invokeOnInitCallbacks(t, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const i of r)
        try {
          i(t, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
    let r = this.instances.get(t);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: Sx(t),
        options: n,
      })),
      this.instances.set(t, r),
      this.instancesOptions.set(t, n),
      this.invokeOnInitCallbacks(r, t),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, t, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(t = On) {
    return this.component ? (this.component.multipleInstances ? t : On) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
};
function Sx(e) {
  return e === On ? void 0 : e;
}
function xx(e) {
  return e.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ex {
  constructor(t) {
    (this.name = t), (this.providers = new Map());
  }
  addComponent(t) {
    const n = this.getProvider(t.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${t.name} has already been registered with ${this.name}`
      );
    n.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
      this.addComponent(t);
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t);
    const n = new _x(t, this);
    return this.providers.set(t, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var H;
(function (e) {
  (e[(e.DEBUG = 0)] = "DEBUG"),
    (e[(e.VERBOSE = 1)] = "VERBOSE"),
    (e[(e.INFO = 2)] = "INFO"),
    (e[(e.WARN = 3)] = "WARN"),
    (e[(e.ERROR = 4)] = "ERROR"),
    (e[(e.SILENT = 5)] = "SILENT");
})(H || (H = {}));
const Tx = {
    debug: H.DEBUG,
    verbose: H.VERBOSE,
    info: H.INFO,
    warn: H.WARN,
    error: H.ERROR,
    silent: H.SILENT,
  },
  Cx = H.INFO,
  bx = {
    [H.DEBUG]: "log",
    [H.VERBOSE]: "log",
    [H.INFO]: "info",
    [H.WARN]: "warn",
    [H.ERROR]: "error",
  },
  Px = (e, t, ...n) => {
    if (t < e.logLevel) return;
    const r = new Date().toISOString(),
      i = bx[t];
    if (i) console[i](`[${r}]  ${e.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`
      );
  };
class Wg {
  constructor(t) {
    (this.name = t),
      (this._logLevel = Cx),
      (this._logHandler = Px),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in H))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = typeof t == "string" ? Tx[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if (typeof t != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, H.DEBUG, ...t),
      this._logHandler(this, H.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, H.VERBOSE, ...t),
      this._logHandler(this, H.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, H.INFO, ...t),
      this._logHandler(this, H.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, H.WARN, ...t),
      this._logHandler(this, H.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, H.ERROR, ...t),
      this._logHandler(this, H.ERROR, ...t);
  }
}
const Ix = (e, t) => t.some((n) => e instanceof n);
let Zf, ep;
function kx() {
  return (
    Zf ||
    (Zf = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function Nx() {
  return (
    ep ||
    (ep = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const Gg = new WeakMap(),
  Su = new WeakMap(),
  qg = new WeakMap(),
  ol = new WeakMap(),
  $c = new WeakMap();
function Ox(e) {
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener("success", s), e.removeEventListener("error", o);
      },
      s = () => {
        n(hn(e.result)), i();
      },
      o = () => {
        r(e.error), i();
      };
    e.addEventListener("success", s), e.addEventListener("error", o);
  });
  return (
    t
      .then((n) => {
        n instanceof IDBCursor && Gg.set(n, e);
      })
      .catch(() => {}),
    $c.set(t, e),
    t
  );
}
function Rx(e) {
  if (Su.has(e)) return;
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener("complete", s),
          e.removeEventListener("error", o),
          e.removeEventListener("abort", o);
      },
      s = () => {
        n(), i();
      },
      o = () => {
        r(e.error || new DOMException("AbortError", "AbortError")), i();
      };
    e.addEventListener("complete", s),
      e.addEventListener("error", o),
      e.addEventListener("abort", o);
  });
  Su.set(e, t);
}
let xu = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === "done") return Su.get(e);
      if (t === "objectStoreNames") return e.objectStoreNames || qg.get(e);
      if (t === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return hn(e[t]);
  },
  set(e, t, n) {
    return (e[t] = n), !0;
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === "done" || t === "store")
      ? !0
      : t in e;
  },
};
function Lx(e) {
  xu = e(xu);
}
function Ax(e) {
  return e === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (t, ...n) {
        const r = e.call(al(this), t, ...n);
        return qg.set(r, t.sort ? t.sort() : [t]), hn(r);
      }
    : Nx().includes(e)
    ? function (...t) {
        return e.apply(al(this), t), hn(Gg.get(this));
      }
    : function (...t) {
        return hn(e.apply(al(this), t));
      };
}
function Mx(e) {
  return typeof e == "function"
    ? Ax(e)
    : (e instanceof IDBTransaction && Rx(e),
      Ix(e, kx()) ? new Proxy(e, xu) : e);
}
function hn(e) {
  if (e instanceof IDBRequest) return Ox(e);
  if (ol.has(e)) return ol.get(e);
  const t = Mx(e);
  return t !== e && (ol.set(e, t), $c.set(t, e)), t;
}
const al = (e) => $c.get(e);
function jx(e, t, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(e, t),
    l = hn(o);
  return (
    r &&
      o.addEventListener("upgradeneeded", (a) => {
        r(hn(o.result), a.oldVersion, a.newVersion, hn(o.transaction), a);
      }),
    n && o.addEventListener("blocked", (a) => n(a.oldVersion, a.newVersion, a)),
    l
      .then((a) => {
        s && a.addEventListener("close", () => s()),
          i &&
            a.addEventListener("versionchange", (u) =>
              i(u.oldVersion, u.newVersion, u)
            );
      })
      .catch(() => {}),
    l
  );
}
const Dx = ["get", "getKey", "getAll", "getAllKeys", "count"],
  Ux = ["put", "add", "delete", "clear"],
  ll = new Map();
function tp(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
  if (ll.get(t)) return ll.get(t);
  const n = t.replace(/FromIndex$/, ""),
    r = t !== n,
    i = Ux.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || Dx.includes(n))
  )
    return;
  const s = async function (o, ...l) {
    const a = this.transaction(o, i ? "readwrite" : "readonly");
    let u = a.store;
    return (
      r && (u = u.index(l.shift())),
      (await Promise.all([u[n](...l), i && a.done]))[0]
    );
  };
  return ll.set(t, s), s;
}
Lx((e) => ({
  ...e,
  get: (t, n, r) => tp(t, n) || e.get(t, n, r),
  has: (t, n) => !!tp(t, n) || e.has(t, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zx {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (Fx(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function Fx(e) {
  const t = e.getComponent();
  return (t == null ? void 0 : t.type) === "VERSION";
}
const Eu = "@firebase/app",
  np = "0.10.6";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Kn = new Wg("@firebase/app"),
  $x = "@firebase/app-compat",
  Bx = "@firebase/analytics-compat",
  Vx = "@firebase/analytics",
  Hx = "@firebase/app-check-compat",
  Wx = "@firebase/app-check",
  Gx = "@firebase/auth",
  qx = "@firebase/auth-compat",
  Kx = "@firebase/database",
  Xx = "@firebase/database-compat",
  Yx = "@firebase/functions",
  Qx = "@firebase/functions-compat",
  Jx = "@firebase/installations",
  Zx = "@firebase/installations-compat",
  eE = "@firebase/messaging",
  tE = "@firebase/messaging-compat",
  nE = "@firebase/performance",
  rE = "@firebase/performance-compat",
  iE = "@firebase/remote-config",
  sE = "@firebase/remote-config-compat",
  oE = "@firebase/storage",
  aE = "@firebase/storage-compat",
  lE = "@firebase/firestore",
  uE = "@firebase/vertexai-preview",
  cE = "@firebase/firestore-compat",
  dE = "firebase",
  fE = "10.12.3";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Tu = "[DEFAULT]",
  pE = {
    [Eu]: "fire-core",
    [$x]: "fire-core-compat",
    [Vx]: "fire-analytics",
    [Bx]: "fire-analytics-compat",
    [Wx]: "fire-app-check",
    [Hx]: "fire-app-check-compat",
    [Gx]: "fire-auth",
    [qx]: "fire-auth-compat",
    [Kx]: "fire-rtdb",
    [Xx]: "fire-rtdb-compat",
    [Yx]: "fire-fn",
    [Qx]: "fire-fn-compat",
    [Jx]: "fire-iid",
    [Zx]: "fire-iid-compat",
    [eE]: "fire-fcm",
    [tE]: "fire-fcm-compat",
    [nE]: "fire-perf",
    [rE]: "fire-perf-compat",
    [iE]: "fire-rc",
    [sE]: "fire-rc-compat",
    [oE]: "fire-gcs",
    [aE]: "fire-gcs-compat",
    [lE]: "fire-fst",
    [cE]: "fire-fst-compat",
    [uE]: "fire-vertex",
    "fire-js": "fire-js",
    [dE]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Uo = new Map(),
  hE = new Map(),
  Cu = new Map();
function rp(e, t) {
  try {
    e.container.addComponent(t);
  } catch (n) {
    Kn.debug(
      `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
      n
    );
  }
}
function Lr(e) {
  const t = e.name;
  if (Cu.has(t))
    return (
      Kn.debug(`There were multiple attempts to register component ${t}.`), !1
    );
  Cu.set(t, e);
  for (const n of Uo.values()) rp(n, e);
  for (const n of hE.values()) rp(n, e);
  return !0;
}
function Bc(e, t) {
  const n = e.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), e.container.getProvider(t);
}
function kt(e) {
  return e.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const mE = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment":
      "FirebaseServerApp is not for use in browser environments.",
  },
  mn = new Xi("app", "Firebase", mE);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gE {
  constructor(t, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new qn("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  checkDestroyed() {
    if (this.isDeleted) throw mn.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Vr = fE;
function Kg(e, t = {}) {
  let n = e;
  typeof t != "object" && (t = { name: t });
  const r = Object.assign({ name: Tu, automaticDataCollectionEnabled: !1 }, t),
    i = r.name;
  if (typeof i != "string" || !i)
    throw mn.create("bad-app-name", { appName: String(i) });
  if ((n || (n = Vg()), !n)) throw mn.create("no-options");
  const s = Uo.get(i);
  if (s) {
    if (Do(n, s.options) && Do(r, s.config)) return s;
    throw mn.create("duplicate-app", { appName: i });
  }
  const o = new Ex(i);
  for (const a of Cu.values()) o.addComponent(a);
  const l = new gE(n, r, o);
  return Uo.set(i, l), l;
}
function Xg(e = Tu) {
  const t = Uo.get(e);
  if (!t && e === Tu && Vg()) return Kg();
  if (!t) throw mn.create("no-app", { appName: e });
  return t;
}
function gn(e, t, n) {
  var r;
  let i = (r = pE[e]) !== null && r !== void 0 ? r : e;
  n && (i += `-${n}`);
  const s = i.match(/\s|\//),
    o = t.match(/\s|\//);
  if (s || o) {
    const l = [`Unable to register library "${i}" with version "${t}":`];
    s &&
      l.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`
      ),
      s && o && l.push("and"),
      o &&
        l.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`
        ),
      Kn.warn(l.join(" "));
    return;
  }
  Lr(new qn(`${i}-version`, () => ({ library: i, version: t }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const vE = "firebase-heartbeat-database",
  yE = 1,
  Ui = "firebase-heartbeat-store";
let ul = null;
function Yg() {
  return (
    ul ||
      (ul = jx(vE, yE, {
        upgrade: (e, t) => {
          switch (t) {
            case 0:
              try {
                e.createObjectStore(Ui);
              } catch (n) {
                console.warn(n);
              }
          }
        },
      }).catch((e) => {
        throw mn.create("idb-open", { originalErrorMessage: e.message });
      })),
    ul
  );
}
async function wE(e) {
  try {
    const n = (await Yg()).transaction(Ui),
      r = await n.objectStore(Ui).get(Qg(e));
    return await n.done, r;
  } catch (t) {
    if (t instanceof Vt) Kn.warn(t.message);
    else {
      const n = mn.create("idb-get", {
        originalErrorMessage: t == null ? void 0 : t.message,
      });
      Kn.warn(n.message);
    }
  }
}
async function ip(e, t) {
  try {
    const r = (await Yg()).transaction(Ui, "readwrite");
    await r.objectStore(Ui).put(t, Qg(e)), await r.done;
  } catch (n) {
    if (n instanceof Vt) Kn.warn(n.message);
    else {
      const r = mn.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      Kn.warn(r.message);
    }
  }
}
function Qg(e) {
  return `${e.name}!${e.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _E = 1024,
  SE = 30 * 24 * 60 * 60 * 1e3;
class xE {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new TE(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    var t, n;
    const i = this.container
        .getProvider("platform-logger")
        .getImmediate()
        .getPlatformInfoString(),
      s = sp();
    if (
      !(
        ((t = this._heartbeatsCache) === null || t === void 0
          ? void 0
          : t.heartbeats) == null &&
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        ((n = this._heartbeatsCache) === null || n === void 0
          ? void 0
          : n.heartbeats) == null)
      ) &&
      !(
        this._heartbeatsCache.lastSentHeartbeatDate === s ||
        this._heartbeatsCache.heartbeats.some((o) => o.date === s)
      )
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: s, agent: i }),
        (this._heartbeatsCache.heartbeats =
          this._heartbeatsCache.heartbeats.filter((o) => {
            const l = new Date(o.date).valueOf();
            return Date.now() - l <= SE;
          })),
        this._storage.overwrite(this._heartbeatsCache)
      );
  }
  async getHeartbeatsHeader() {
    var t;
    if (
      (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
      ((t = this._heartbeatsCache) === null || t === void 0
        ? void 0
        : t.heartbeats) == null ||
        this._heartbeatsCache.heartbeats.length === 0)
    )
      return "";
    const n = sp(),
      { heartbeatsToSend: r, unsentEntries: i } = EE(
        this._heartbeatsCache.heartbeats
      ),
      s = jo(JSON.stringify({ version: 2, heartbeats: r }));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = n),
      i.length > 0
        ? ((this._heartbeatsCache.heartbeats = i),
          await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []),
          this._storage.overwrite(this._heartbeatsCache)),
      s
    );
  }
}
function sp() {
  return new Date().toISOString().substring(0, 10);
}
function EE(e, t = _E) {
  const n = [];
  let r = e.slice();
  for (const i of e) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if ((s.dates.push(i.date), op(n) > t)) {
        s.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), op(n) > t)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class TE {
  constructor(t) {
    (this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return dx()
      ? fx()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await wE(this.app);
      return n != null && n.heartbeats ? n : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return ip(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    } else return;
  }
  async add(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return ip(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...t.heartbeats],
      });
    } else return;
  }
}
function op(e) {
  return jo(JSON.stringify({ version: 2, heartbeats: e })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function CE(e) {
  Lr(new qn("platform-logger", (t) => new zx(t), "PRIVATE")),
    Lr(new qn("heartbeat", (t) => new xE(t), "PRIVATE")),
    gn(Eu, np, e),
    gn(Eu, np, "esm2017"),
    gn("fire-js", "");
}
CE("");
function Vc(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function Jg() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const bE = Jg,
  Zg = new Xi("auth", "Firebase", Jg());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const zo = new Wg("@firebase/auth");
function PE(e, ...t) {
  zo.logLevel <= H.WARN && zo.warn(`Auth (${Vr}): ${e}`, ...t);
}
function Gs(e, ...t) {
  zo.logLevel <= H.ERROR && zo.error(`Auth (${Vr}): ${e}`, ...t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function yt(e, ...t) {
  throw Wc(e, ...t);
}
function lt(e, ...t) {
  return Wc(e, ...t);
}
function Hc(e, t, n) {
  const r = Object.assign(Object.assign({}, bE()), { [t]: n });
  return new Xi("auth", "Firebase", r).create(t, { appName: e.name });
}
function zn(e) {
  return Hc(
    e,
    "operation-not-supported-in-this-environment",
    "Operations that alter the current user are not supported in conjunction with FirebaseServerApp"
  );
}
function IE(e, t, n) {
  const r = n;
  if (!(t instanceof r))
    throw (
      (r.name !== t.constructor.name && yt(e, "argument-error"),
      Hc(
        e,
        "argument-error",
        `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`
      ))
    );
}
function Wc(e, ...t) {
  if (typeof e != "string") {
    const n = t[0],
      r = [...t.slice(1)];
    return r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r);
  }
  return Zg.create(e, ...t);
}
function D(e, t, ...n) {
  if (!e) throw Wc(t, ...n);
}
function Nt(e) {
  const t = "INTERNAL ASSERTION FAILED: " + e;
  throw (Gs(t), new Error(t));
}
function zt(e, t) {
  e || Nt(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bu() {
  var e;
  return (
    (typeof self < "u" &&
      ((e = self.location) === null || e === void 0 ? void 0 : e.href)) ||
    ""
  );
}
function kE() {
  return ap() === "http:" || ap() === "https:";
}
function ap() {
  var e;
  return (
    (typeof self < "u" &&
      ((e = self.location) === null || e === void 0 ? void 0 : e.protocol)) ||
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function NE() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (kE() || lx() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function OE() {
  if (typeof navigator > "u") return null;
  const e = navigator;
  return (e.languages && e.languages[0]) || e.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qi {
  constructor(t, n) {
    (this.shortDelay = t),
      (this.longDelay = n),
      zt(n > t, "Short delay should be less than long delay!"),
      (this.isMobile = ax() || ux());
  }
  get() {
    return NE()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Gc(e, t) {
  zt(e.emulator, "Emulator should always be set here");
  const { url: n } = e.emulator;
  return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ev {
  static initialize(t, n, r) {
    (this.fetchImpl = t),
      n && (this.headersImpl = n),
      r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self) return self.fetch;
    if (typeof globalThis < "u" && globalThis.fetch) return globalThis.fetch;
    if (typeof fetch < "u") return fetch;
    Nt(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    if (typeof globalThis < "u" && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < "u") return Headers;
    Nt(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    if (typeof globalThis < "u" && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < "u") return Response;
    Nt(
      "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const RE = {
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  MISSING_CUSTOM_TOKEN: "internal-error",
  INVALID_IDENTIFIER: "invalid-email",
  MISSING_CONTINUE_URI: "internal-error",
  INVALID_PASSWORD: "wrong-password",
  MISSING_PASSWORD: "missing-password",
  INVALID_LOGIN_CREDENTIALS: "invalid-credential",
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  MISSING_REQ_TYPE: "internal-error",
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  MISSING_OOB_CODE: "internal-error",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type",
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const LE = new Qi(3e4, 6e4);
function qc(e, t) {
  return e.tenantId && !t.tenantId
    ? Object.assign(Object.assign({}, t), { tenantId: e.tenantId })
    : t;
}
async function Hr(e, t, n, r, i = {}) {
  return tv(e, i, async () => {
    let s = {},
      o = {};
    r && (t === "GET" ? (o = r) : (s = { body: JSON.stringify(r) }));
    const l = Yi(Object.assign({ key: e.config.apiKey }, o)).slice(1),
      a = await e._getAdditionalHeaders();
    return (
      (a["Content-Type"] = "application/json"),
      e.languageCode && (a["X-Firebase-Locale"] = e.languageCode),
      ev.fetch()(
        nv(e, e.config.apiHost, n, l),
        Object.assign(
          { method: t, headers: a, referrerPolicy: "no-referrer" },
          s
        )
      )
    );
  });
}
async function tv(e, t, n) {
  e._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, RE), t);
  try {
    const i = new ME(e),
      s = await Promise.race([n(), i.promise]);
    i.clearNetworkTimeout();
    const o = await s.json();
    if ("needConfirmation" in o)
      throw Cs(e, "account-exists-with-different-credential", o);
    if (s.ok && !("errorMessage" in o)) return o;
    {
      const l = s.ok ? o.errorMessage : o.error.message,
        [a, u] = l.split(" : ");
      if (a === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw Cs(e, "credential-already-in-use", o);
      if (a === "EMAIL_EXISTS") throw Cs(e, "email-already-in-use", o);
      if (a === "USER_DISABLED") throw Cs(e, "user-disabled", o);
      const c = r[a] || a.toLowerCase().replace(/[_\s]+/g, "-");
      if (u) throw Hc(e, c, u);
      yt(e, c);
    }
  } catch (i) {
    if (i instanceof Vt) throw i;
    yt(e, "network-request-failed", { message: String(i) });
  }
}
async function AE(e, t, n, r, i = {}) {
  const s = await Hr(e, t, n, r, i);
  return (
    "mfaPendingCredential" in s &&
      yt(e, "multi-factor-auth-required", { _serverResponse: s }),
    s
  );
}
function nv(e, t, n, r) {
  const i = `${t}${n}?${r}`;
  return e.config.emulator ? Gc(e.config, i) : `${e.config.apiScheme}://${i}`;
}
class ME {
  constructor(t) {
    (this.auth = t),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(
          () => r(lt(this.auth, "network-request-failed")),
          LE.get()
        );
      }));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function Cs(e, t, n) {
  const r = { appName: e.name };
  n.email && (r.email = n.email),
    n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const i = lt(e, t, r);
  return (i.customData._tokenResponse = n), i;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function jE(e, t) {
  return Hr(e, "POST", "/v1/accounts:delete", t);
}
async function rv(e, t) {
  return Hr(e, "POST", "/v1/accounts:lookup", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function vi(e) {
  if (e)
    try {
      const t = new Date(Number(e));
      if (!isNaN(t.getTime())) return t.toUTCString();
    } catch {}
}
async function DE(e, t = !1) {
  const n = _t(e),
    r = await n.getIdToken(t),
    i = Kc(r);
  D(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
  const s = typeof i.firebase == "object" ? i.firebase : void 0,
    o = s == null ? void 0 : s.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: vi(cl(i.auth_time)),
    issuedAtTime: vi(cl(i.iat)),
    expirationTime: vi(cl(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null,
  };
}
function cl(e) {
  return Number(e) * 1e3;
}
function Kc(e) {
  const [t, n, r] = e.split(".");
  if (t === void 0 || n === void 0 || r === void 0)
    return Gs("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = $g(n);
    return i
      ? JSON.parse(i)
      : (Gs("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return (
      Gs(
        "Caught error parsing JWT payload as JSON",
        i == null ? void 0 : i.toString()
      ),
      null
    );
  }
}
function lp(e) {
  const t = Kc(e);
  return (
    D(t, "internal-error"),
    D(typeof t.exp < "u", "internal-error"),
    D(typeof t.iat < "u", "internal-error"),
    Number(t.exp) - Number(t.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function zi(e, t, n = !1) {
  if (n) return t;
  try {
    return await t;
  } catch (r) {
    throw (
      (r instanceof Vt &&
        UE(r) &&
        e.auth.currentUser === e &&
        (await e.auth.signOut()),
      r)
    );
  }
}
function UE({ code: e }) {
  return e === "auth/user-disabled" || e === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zE {
  constructor(t) {
    (this.user = t),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(t) {
    var n;
    if (t) {
      const r = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r;
    } else {
      this.errorBackoff = 3e4;
      const i =
        ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0
          ? n
          : 0) -
        Date.now() -
        3e5;
      return Math.max(0, i);
    }
  }
  schedule(t = !1) {
    if (!this.isRunning) return;
    const n = this.getInterval(t);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, n);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (t) {
      (t == null ? void 0 : t.code) === "auth/network-request-failed" &&
        this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Pu {
  constructor(t, n) {
    (this.createdAt = t), (this.lastLoginAt = n), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = vi(this.lastLoginAt)),
      (this.creationTime = vi(this.createdAt));
  }
  _copy(t) {
    (this.createdAt = t.createdAt),
      (this.lastLoginAt = t.lastLoginAt),
      this._initializeTime();
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Fo(e) {
  var t;
  const n = e.auth,
    r = await e.getIdToken(),
    i = await zi(e, rv(n, { idToken: r }));
  D(i == null ? void 0 : i.users.length, n, "internal-error");
  const s = i.users[0];
  e._notifyReloadListener(s);
  const o =
      !((t = s.providerUserInfo) === null || t === void 0) && t.length
        ? iv(s.providerUserInfo)
        : [],
    l = $E(e.providerData, o),
    a = e.isAnonymous,
    u = !(e.email && s.passwordHash) && !(l != null && l.length),
    c = a ? u : !1,
    d = {
      uid: s.localId,
      displayName: s.displayName || null,
      photoURL: s.photoUrl || null,
      email: s.email || null,
      emailVerified: s.emailVerified || !1,
      phoneNumber: s.phoneNumber || null,
      tenantId: s.tenantId || null,
      providerData: l,
      metadata: new Pu(s.createdAt, s.lastLoginAt),
      isAnonymous: c,
    };
  Object.assign(e, d);
}
async function FE(e) {
  const t = _t(e);
  await Fo(t),
    await t.auth._persistUserIfCurrent(t),
    t.auth._notifyListenersIfCurrent(t);
}
function $E(e, t) {
  return [
    ...e.filter((r) => !t.some((i) => i.providerId === r.providerId)),
    ...t,
  ];
}
function iv(e) {
  return e.map((t) => {
    var { providerId: n } = t,
      r = Vc(t, ["providerId"]);
    return {
      providerId: n,
      uid: r.rawId || "",
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null,
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function BE(e, t) {
  const n = await tv(e, {}, async () => {
    const r = Yi({ grant_type: "refresh_token", refresh_token: t }).slice(1),
      { tokenApiHost: i, apiKey: s } = e.config,
      o = nv(e, i, "/v1/token", `key=${s}`),
      l = await e._getAdditionalHeaders();
    return (
      (l["Content-Type"] = "application/x-www-form-urlencoded"),
      ev.fetch()(o, { method: "POST", headers: l, body: r })
    );
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token,
  };
}
async function VE(e, t) {
  return Hr(e, "POST", "/v2/accounts:revokeToken", qc(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Er {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(t) {
    D(t.idToken, "internal-error"),
      D(typeof t.idToken < "u", "internal-error"),
      D(typeof t.refreshToken < "u", "internal-error");
    const n =
      "expiresIn" in t && typeof t.expiresIn < "u"
        ? Number(t.expiresIn)
        : lp(t.idToken);
    this.updateTokensAndExpiration(t.idToken, t.refreshToken, n);
  }
  updateFromIdToken(t) {
    D(t.length !== 0, "internal-error");
    const n = lp(t);
    this.updateTokensAndExpiration(t, null, n);
  }
  async getToken(t, n = !1) {
    return !n && this.accessToken && !this.isExpired
      ? this.accessToken
      : (D(this.refreshToken, t, "user-token-expired"),
        this.refreshToken
          ? (await this.refresh(t, this.refreshToken), this.accessToken)
          : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(t, n) {
    const { accessToken: r, refreshToken: i, expiresIn: s } = await BE(t, n);
    this.updateTokensAndExpiration(r, i, Number(s));
  }
  updateTokensAndExpiration(t, n, r) {
    (this.refreshToken = n || null),
      (this.accessToken = t || null),
      (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(t, n) {
    const { refreshToken: r, accessToken: i, expirationTime: s } = n,
      o = new Er();
    return (
      r &&
        (D(typeof r == "string", "internal-error", { appName: t }),
        (o.refreshToken = r)),
      i &&
        (D(typeof i == "string", "internal-error", { appName: t }),
        (o.accessToken = i)),
      s &&
        (D(typeof s == "number", "internal-error", { appName: t }),
        (o.expirationTime = s)),
      o
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(t) {
    (this.accessToken = t.accessToken),
      (this.refreshToken = t.refreshToken),
      (this.expirationTime = t.expirationTime);
  }
  _clone() {
    return Object.assign(new Er(), this.toJSON());
  }
  _performRefresh() {
    return Nt("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Wt(e, t) {
  D(typeof e == "string" || typeof e > "u", "internal-error", { appName: t });
}
class Ot {
  constructor(t) {
    var { uid: n, auth: r, stsTokenManager: i } = t,
      s = Vc(t, ["uid", "auth", "stsTokenManager"]);
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new zE(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = n),
      (this.auth = r),
      (this.stsTokenManager = i),
      (this.accessToken = i.accessToken),
      (this.displayName = s.displayName || null),
      (this.email = s.email || null),
      (this.emailVerified = s.emailVerified || !1),
      (this.phoneNumber = s.phoneNumber || null),
      (this.photoURL = s.photoURL || null),
      (this.isAnonymous = s.isAnonymous || !1),
      (this.tenantId = s.tenantId || null),
      (this.providerData = s.providerData ? [...s.providerData] : []),
      (this.metadata = new Pu(s.createdAt || void 0, s.lastLoginAt || void 0));
  }
  async getIdToken(t) {
    const n = await zi(this, this.stsTokenManager.getToken(this.auth, t));
    return (
      D(n, this.auth, "internal-error"),
      this.accessToken !== n &&
        ((this.accessToken = n),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      n
    );
  }
  getIdTokenResult(t) {
    return DE(this, t);
  }
  reload() {
    return FE(this);
  }
  _assign(t) {
    this !== t &&
      (D(this.uid === t.uid, this.auth, "internal-error"),
      (this.displayName = t.displayName),
      (this.photoURL = t.photoURL),
      (this.email = t.email),
      (this.emailVerified = t.emailVerified),
      (this.phoneNumber = t.phoneNumber),
      (this.isAnonymous = t.isAnonymous),
      (this.tenantId = t.tenantId),
      (this.providerData = t.providerData.map((n) => Object.assign({}, n))),
      this.metadata._copy(t.metadata),
      this.stsTokenManager._assign(t.stsTokenManager));
  }
  _clone(t) {
    const n = new Ot(
      Object.assign(Object.assign({}, this), {
        auth: t,
        stsTokenManager: this.stsTokenManager._clone(),
      })
    );
    return n.metadata._copy(this.metadata), n;
  }
  _onReload(t) {
    D(!this.reloadListener, this.auth, "internal-error"),
      (this.reloadListener = t),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null));
  }
  _notifyReloadListener(t) {
    this.reloadListener ? this.reloadListener(t) : (this.reloadUserInfo = t);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(t, n = !1) {
    let r = !1;
    t.idToken &&
      t.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(t), (r = !0)),
      n && (await Fo(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (kt(this.auth.app)) return Promise.reject(zn(this.auth));
    const t = await this.getIdToken();
    return (
      await zi(this, jE(this.auth, { idToken: t })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((t) => Object.assign({}, t)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId,
        },
        this.metadata.toJSON()
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name }
    );
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(t, n) {
    var r, i, s, o, l, a, u, c;
    const d = (r = n.displayName) !== null && r !== void 0 ? r : void 0,
      f = (i = n.email) !== null && i !== void 0 ? i : void 0,
      v = (s = n.phoneNumber) !== null && s !== void 0 ? s : void 0,
      y = (o = n.photoURL) !== null && o !== void 0 ? o : void 0,
      _ = (l = n.tenantId) !== null && l !== void 0 ? l : void 0,
      S = (a = n._redirectEventId) !== null && a !== void 0 ? a : void 0,
      p = (u = n.createdAt) !== null && u !== void 0 ? u : void 0,
      g = (c = n.lastLoginAt) !== null && c !== void 0 ? c : void 0,
      {
        uid: h,
        emailVerified: w,
        isAnonymous: x,
        providerData: E,
        stsTokenManager: P,
      } = n;
    D(h && P, t, "internal-error");
    const b = Er.fromJSON(this.name, P);
    D(typeof h == "string", t, "internal-error"),
      Wt(d, t.name),
      Wt(f, t.name),
      D(typeof w == "boolean", t, "internal-error"),
      D(typeof x == "boolean", t, "internal-error"),
      Wt(v, t.name),
      Wt(y, t.name),
      Wt(_, t.name),
      Wt(S, t.name),
      Wt(p, t.name),
      Wt(g, t.name);
    const I = new Ot({
      uid: h,
      auth: t,
      email: f,
      emailVerified: w,
      displayName: d,
      isAnonymous: x,
      photoURL: y,
      phoneNumber: v,
      tenantId: _,
      stsTokenManager: b,
      createdAt: p,
      lastLoginAt: g,
    });
    return (
      E &&
        Array.isArray(E) &&
        (I.providerData = E.map((T) => Object.assign({}, T))),
      S && (I._redirectEventId = S),
      I
    );
  }
  static async _fromIdTokenResponse(t, n, r = !1) {
    const i = new Er();
    i.updateFromServerResponse(n);
    const s = new Ot({
      uid: n.localId,
      auth: t,
      stsTokenManager: i,
      isAnonymous: r,
    });
    return await Fo(s), s;
  }
  static async _fromGetAccountInfoResponse(t, n, r) {
    const i = n.users[0];
    D(i.localId !== void 0, "internal-error");
    const s = i.providerUserInfo !== void 0 ? iv(i.providerUserInfo) : [],
      o = !(i.email && i.passwordHash) && !(s != null && s.length),
      l = new Er();
    l.updateFromIdToken(r);
    const a = new Ot({
        uid: i.localId,
        auth: t,
        stsTokenManager: l,
        isAnonymous: o,
      }),
      u = {
        uid: i.localId,
        displayName: i.displayName || null,
        photoURL: i.photoUrl || null,
        email: i.email || null,
        emailVerified: i.emailVerified || !1,
        phoneNumber: i.phoneNumber || null,
        tenantId: i.tenantId || null,
        providerData: s,
        metadata: new Pu(i.createdAt, i.lastLoginAt),
        isAnonymous: !(i.email && i.passwordHash) && !(s != null && s.length),
      };
    return Object.assign(a, u), a;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const up = new Map();
function Rt(e) {
  zt(e instanceof Function, "Expected a class definition");
  let t = up.get(e);
  return t
    ? (zt(t instanceof e, "Instance stored in cache mismatched with class"), t)
    : ((t = new e()), up.set(e, t), t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sv {
  constructor() {
    (this.type = "NONE"), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(t, n) {
    this.storage[t] = n;
  }
  async _get(t) {
    const n = this.storage[t];
    return n === void 0 ? null : n;
  }
  async _remove(t) {
    delete this.storage[t];
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
sv.type = "NONE";
const cp = sv;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function qs(e, t, n) {
  return `firebase:${e}:${t}:${n}`;
}
class Tr {
  constructor(t, n, r) {
    (this.persistence = t), (this.auth = n), (this.userKey = r);
    const { config: i, name: s } = this.auth;
    (this.fullUserKey = qs(this.userKey, i.apiKey, s)),
      (this.fullPersistenceKey = qs("persistence", i.apiKey, s)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(t) {
    return this.persistence._set(this.fullUserKey, t.toJSON());
  }
  async getCurrentUser() {
    const t = await this.persistence._get(this.fullUserKey);
    return t ? Ot._fromJSON(this.auth, t) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type
    );
  }
  async setPersistence(t) {
    if (this.persistence === t) return;
    const n = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = t), n))
      return this.setCurrentUser(n);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(t, n, r = "authUser") {
    if (!n.length) return new Tr(Rt(cp), t, r);
    const i = (
      await Promise.all(
        n.map(async (u) => {
          if (await u._isAvailable()) return u;
        })
      )
    ).filter((u) => u);
    let s = i[0] || Rt(cp);
    const o = qs(r, t.config.apiKey, t.name);
    let l = null;
    for (const u of n)
      try {
        const c = await u._get(o);
        if (c) {
          const d = Ot._fromJSON(t, c);
          u !== s && (l = d), (s = u);
          break;
        }
      } catch {}
    const a = i.filter((u) => u._shouldAllowMigration);
    return !s._shouldAllowMigration || !a.length
      ? new Tr(s, t, r)
      : ((s = a[0]),
        l && (await s._set(o, l.toJSON())),
        await Promise.all(
          n.map(async (u) => {
            if (u !== s)
              try {
                await u._remove(o);
              } catch {}
          })
        ),
        new Tr(s, t, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function dp(e) {
  const t = e.toLowerCase();
  if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
    return "Opera";
  if (lv(t)) return "IEMobile";
  if (t.includes("msie") || t.includes("trident/")) return "IE";
  if (t.includes("edge/")) return "Edge";
  if (ov(t)) return "Firefox";
  if (t.includes("silk/")) return "Silk";
  if (cv(t)) return "Blackberry";
  if (dv(t)) return "Webos";
  if (Xc(t)) return "Safari";
  if ((t.includes("chrome/") || av(t)) && !t.includes("edge/")) return "Chrome";
  if (uv(t)) return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = e.match(n);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return "Other";
}
function ov(e = Se()) {
  return /firefox\//i.test(e);
}
function Xc(e = Se()) {
  const t = e.toLowerCase();
  return (
    t.includes("safari/") &&
    !t.includes("chrome/") &&
    !t.includes("crios/") &&
    !t.includes("android")
  );
}
function av(e = Se()) {
  return /crios\//i.test(e);
}
function lv(e = Se()) {
  return /iemobile/i.test(e);
}
function uv(e = Se()) {
  return /android/i.test(e);
}
function cv(e = Se()) {
  return /blackberry/i.test(e);
}
function dv(e = Se()) {
  return /webos/i.test(e);
}
function ha(e = Se()) {
  return (
    /iphone|ipad|ipod/i.test(e) || (/macintosh/i.test(e) && /mobile/i.test(e))
  );
}
function HE(e = Se()) {
  var t;
  return (
    ha(e) &&
    !!(!((t = window.navigator) === null || t === void 0) && t.standalone)
  );
}
function WE() {
  return cx() && document.documentMode === 10;
}
function fv(e = Se()) {
  return ha(e) || uv(e) || dv(e) || cv(e) || /windows phone/i.test(e) || lv(e);
}
function GE() {
  try {
    return !!(window && window !== window.top);
  } catch {
    return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function pv(e, t = []) {
  let n;
  switch (e) {
    case "Browser":
      n = dp(Se());
      break;
    case "Worker":
      n = `${dp(Se())}-${e}`;
      break;
    default:
      n = e;
  }
  const r = t.length ? t.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${Vr}/${r}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qE {
  constructor(t) {
    (this.auth = t), (this.queue = []);
  }
  pushCallback(t, n) {
    const r = (s) =>
      new Promise((o, l) => {
        try {
          const a = t(s);
          o(a);
        } catch (a) {
          l(a);
        }
      });
    (r.onAbort = n), this.queue.push(r);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(t) {
    if (this.auth.currentUser === t) return;
    const n = [];
    try {
      for (const r of this.queue) await r(t), r.onAbort && n.push(r.onAbort);
    } catch (r) {
      n.reverse();
      for (const i of n)
        try {
          i();
        } catch {}
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: r == null ? void 0 : r.message,
      });
    }
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function KE(e, t = {}) {
  return Hr(e, "GET", "/v2/passwordPolicy", qc(e, t));
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const XE = 6;
class YE {
  constructor(t) {
    var n, r, i, s;
    const o = t.customStrengthOptions;
    (this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        (n = o.minPasswordLength) !== null && n !== void 0 ? n : XE),
      o.maxPasswordLength &&
        (this.customStrengthOptions.maxPasswordLength = o.maxPasswordLength),
      o.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter =
          o.containsLowercaseCharacter),
      o.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter =
          o.containsUppercaseCharacter),
      o.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter =
          o.containsNumericCharacter),
      o.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter =
          o.containsNonAlphanumericCharacter),
      (this.enforcementState = t.enforcementState),
      this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" &&
        (this.enforcementState = "OFF"),
      (this.allowedNonAlphanumericCharacters =
        (i =
          (r = t.allowedNonAlphanumericCharacters) === null || r === void 0
            ? void 0
            : r.join("")) !== null && i !== void 0
          ? i
          : ""),
      (this.forceUpgradeOnSignin =
        (s = t.forceUpgradeOnSignin) !== null && s !== void 0 ? s : !1),
      (this.schemaVersion = t.schemaVersion);
  }
  validatePassword(t) {
    var n, r, i, s, o, l;
    const a = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(t, a),
      this.validatePasswordCharacterOptions(t, a),
      a.isValid &&
        (a.isValid =
          (n = a.meetsMinPasswordLength) !== null && n !== void 0 ? n : !0),
      a.isValid &&
        (a.isValid =
          (r = a.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0),
      a.isValid &&
        (a.isValid =
          (i = a.containsLowercaseLetter) !== null && i !== void 0 ? i : !0),
      a.isValid &&
        (a.isValid =
          (s = a.containsUppercaseLetter) !== null && s !== void 0 ? s : !0),
      a.isValid &&
        (a.isValid =
          (o = a.containsNumericCharacter) !== null && o !== void 0 ? o : !0),
      a.isValid &&
        (a.isValid =
          (l = a.containsNonAlphanumericCharacter) !== null && l !== void 0
            ? l
            : !0),
      a
    );
  }
  validatePasswordLengthOptions(t, n) {
    const r = this.customStrengthOptions.minPasswordLength,
      i = this.customStrengthOptions.maxPasswordLength;
    r && (n.meetsMinPasswordLength = t.length >= r),
      i && (n.meetsMaxPasswordLength = t.length <= i);
  }
  validatePasswordCharacterOptions(t, n) {
    this.updatePasswordCharacterOptionsStatuses(n, !1, !1, !1, !1);
    let r;
    for (let i = 0; i < t.length; i++)
      (r = t.charAt(i)),
        this.updatePasswordCharacterOptionsStatuses(
          n,
          r >= "a" && r <= "z",
          r >= "A" && r <= "Z",
          r >= "0" && r <= "9",
          this.allowedNonAlphanumericCharacters.includes(r)
        );
  }
  updatePasswordCharacterOptionsStatuses(t, n, r, i, s) {
    this.customStrengthOptions.containsLowercaseLetter &&
      (t.containsLowercaseLetter || (t.containsLowercaseLetter = n)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (t.containsUppercaseLetter || (t.containsUppercaseLetter = r)),
      this.customStrengthOptions.containsNumericCharacter &&
        (t.containsNumericCharacter || (t.containsNumericCharacter = i)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (t.containsNonAlphanumericCharacter ||
          (t.containsNonAlphanumericCharacter = s));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class QE {
  constructor(t, n, r, i) {
    (this.app = t),
      (this.heartbeatServiceProvider = n),
      (this.appCheckServiceProvider = r),
      (this.config = i),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new fp(this)),
      (this.idTokenSubscription = new fp(this)),
      (this.beforeStateQueue = new qE(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = Zg),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this._projectPasswordPolicy = null),
      (this._tenantPasswordPolicies = {}),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = t.name),
      (this.clientVersion = i.sdkClientVersion);
  }
  _initializeWithPersistence(t, n) {
    return (
      n && (this._popupRedirectResolver = Rt(n)),
      (this._initializationPromise = this.queue(async () => {
        var r, i;
        if (
          !this._deleted &&
          ((this.persistenceManager = await Tr.create(this, t)), !this._deleted)
        ) {
          if (
            !((r = this._popupRedirectResolver) === null || r === void 0) &&
            r._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(n),
            (this.lastNotifiedUid =
              ((i = this.currentUser) === null || i === void 0
                ? void 0
                : i.uid) || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const t = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !t)) {
      if (this.currentUser && t && this.currentUser.uid === t.uid) {
        this._currentUser._assign(t), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(t, !0);
    }
  }
  async initializeCurrentUserFromIdToken(t) {
    try {
      const n = await rv(this, { idToken: t }),
        r = await Ot._fromGetAccountInfoResponse(this, n, t);
      await this.directlySetCurrentUser(r);
    } catch (n) {
      console.warn(
        "FirebaseServerApp could not login user with provided authIdToken: ",
        n
      ),
        await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(t) {
    var n;
    if (kt(this.app)) {
      const o = this.app.settings.authIdToken;
      return o
        ? new Promise((l) => {
            setTimeout(() =>
              this.initializeCurrentUserFromIdToken(o).then(l, l)
            );
          })
        : this.directlySetCurrentUser(null);
    }
    const r = await this.assertedPersistence.getCurrentUser();
    let i = r,
      s = !1;
    if (t && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const o =
          (n = this.redirectUser) === null || n === void 0
            ? void 0
            : n._redirectEventId,
        l = i == null ? void 0 : i._redirectEventId,
        a = await this.tryRedirectSignIn(t);
      (!o || o === l) && a != null && a.user && ((i = a.user), (s = !0));
    }
    if (!i) return this.directlySetCurrentUser(null);
    if (!i._redirectEventId) {
      if (s)
        try {
          await this.beforeStateQueue.runMiddleware(i);
        } catch (o) {
          (i = r),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(o)
            );
        }
      return i
        ? this.reloadAndSetCurrentUserOrClear(i)
        : this.directlySetCurrentUser(null);
    }
    return (
      D(this._popupRedirectResolver, this, "argument-error"),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === i._redirectEventId
        ? this.directlySetCurrentUser(i)
        : this.reloadAndSetCurrentUserOrClear(i)
    );
  }
  async tryRedirectSignIn(t) {
    let n = null;
    try {
      n = await this._popupRedirectResolver._completeRedirectFn(this, t, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return n;
  }
  async reloadAndSetCurrentUserOrClear(t) {
    try {
      await Fo(t);
    } catch (n) {
      if ((n == null ? void 0 : n.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(t);
  }
  useDeviceLanguage() {
    this.languageCode = OE();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(t) {
    if (kt(this.app)) return Promise.reject(zn(this));
    const n = t ? _t(t) : null;
    return (
      n &&
        D(
          n.auth.config.apiKey === this.config.apiKey,
          this,
          "invalid-user-token"
        ),
      this._updateCurrentUser(n && n._clone(this))
    );
  }
  async _updateCurrentUser(t, n = !1) {
    if (!this._deleted)
      return (
        t && D(this.tenantId === t.tenantId, this, "tenant-id-mismatch"),
        n || (await this.beforeStateQueue.runMiddleware(t)),
        this.queue(async () => {
          await this.directlySetCurrentUser(t), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return kt(this.app)
      ? Promise.reject(zn(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0));
  }
  setPersistence(t) {
    return kt(this.app)
      ? Promise.reject(zn(this))
      : this.queue(async () => {
          await this.assertedPersistence.setPersistence(Rt(t));
        });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(t) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
    const n = this._getPasswordPolicyInternal();
    return n.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(
          this._errorFactory.create(
            "unsupported-password-policy-schema-version",
            {}
          )
        )
      : n.validatePassword(t);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const t = await KE(this),
      n = new YE(t);
    this.tenantId === null
      ? (this._projectPasswordPolicy = n)
      : (this._tenantPasswordPolicies[this.tenantId] = n);
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(t) {
    this._errorFactory = new Xi("auth", "Firebase", t());
  }
  onAuthStateChanged(t, n, r) {
    return this.registerStateListener(this.authStateSubscription, t, n, r);
  }
  beforeAuthStateChanged(t, n) {
    return this.beforeStateQueue.pushCallback(t, n);
  }
  onIdTokenChanged(t, n, r) {
    return this.registerStateListener(this.idTokenSubscription, t, n, r);
  }
  authStateReady() {
    return new Promise((t, n) => {
      if (this.currentUser) t();
      else {
        const r = this.onAuthStateChanged(() => {
          r(), t();
        }, n);
      }
    });
  }
  async revokeAccessToken(t) {
    if (this.currentUser) {
      const n = await this.currentUser.getIdToken(),
        r = {
          providerId: "apple.com",
          tokenType: "ACCESS_TOKEN",
          token: t,
          idToken: n,
        };
      this.tenantId != null && (r.tenantId = this.tenantId), await VE(this, r);
    }
  }
  toJSON() {
    var t;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser:
        (t = this._currentUser) === null || t === void 0 ? void 0 : t.toJSON(),
    };
  }
  async _setRedirectUser(t, n) {
    const r = await this.getOrInitRedirectPersistenceManager(n);
    return t === null ? r.removeCurrentUser() : r.setCurrentUser(t);
  }
  async getOrInitRedirectPersistenceManager(t) {
    if (!this.redirectPersistenceManager) {
      const n = (t && Rt(t)) || this._popupRedirectResolver;
      D(n, this, "argument-error"),
        (this.redirectPersistenceManager = await Tr.create(
          this,
          [Rt(n._redirectPersistence)],
          "redirectUser"
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(t) {
    var n, r;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((n = this._currentUser) === null || n === void 0
        ? void 0
        : n._redirectEventId) === t
        ? this._currentUser
        : ((r = this.redirectUser) === null || r === void 0
            ? void 0
            : r._redirectEventId) === t
        ? this.redirectUser
        : null
    );
  }
  async _persistUserIfCurrent(t) {
    if (t === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(t));
  }
  _notifyListenersIfCurrent(t) {
    t === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var t, n;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const r =
      (n = (t = this.currentUser) === null || t === void 0 ? void 0 : t.uid) !==
        null && n !== void 0
        ? n
        : null;
    this.lastNotifiedUid !== r &&
      ((this.lastNotifiedUid = r),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(t, n, r, i) {
    if (this._deleted) return () => {};
    const s = typeof n == "function" ? n : n.next.bind(n);
    let o = !1;
    const l = this._isInitialized
      ? Promise.resolve()
      : this._initializationPromise;
    if (
      (D(l, this, "internal-error"),
      l.then(() => {
        o || s(this.currentUser);
      }),
      typeof n == "function")
    ) {
      const a = t.addObserver(n, r, i);
      return () => {
        (o = !0), a();
      };
    } else {
      const a = t.addObserver(n);
      return () => {
        (o = !0), a();
      };
    }
  }
  async directlySetCurrentUser(t) {
    this.currentUser &&
      this.currentUser !== t &&
      this._currentUser._stopProactiveRefresh(),
      t && this.isProactiveRefreshEnabled && t._startProactiveRefresh(),
      (this.currentUser = t),
      t
        ? await this.assertedPersistence.setCurrentUser(t)
        : await this.assertedPersistence.removeCurrentUser();
  }
  queue(t) {
    return (this.operations = this.operations.then(t, t)), this.operations;
  }
  get assertedPersistence() {
    return (
      D(this.persistenceManager, this, "internal-error"),
      this.persistenceManager
    );
  }
  _logFramework(t) {
    !t ||
      this.frameworks.includes(t) ||
      (this.frameworks.push(t),
      this.frameworks.sort(),
      (this.clientVersion = pv(
        this.config.clientPlatform,
        this._getFrameworks()
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var t;
    const n = { "X-Client-Version": this.clientVersion };
    this.app.options.appId && (n["X-Firebase-gmpid"] = this.app.options.appId);
    const r = await ((t = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getHeartbeatsHeader());
    r && (n["X-Firebase-Client"] = r);
    const i = await this._getAppCheckToken();
    return i && (n["X-Firebase-AppCheck"] = i), n;
  }
  async _getAppCheckToken() {
    var t;
    const n = await ((t = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getToken());
    return (
      n != null &&
        n.error &&
        PE(`Error while retrieving App Check token: ${n.error}`),
      n == null ? void 0 : n.token
    );
  }
}
function ma(e) {
  return _t(e);
}
class fp {
  constructor(t) {
    (this.auth = t),
      (this.observer = null),
      (this.addObserver = vx((n) => (this.observer = n)));
  }
  get next() {
    return (
      D(this.observer, this.auth, "internal-error"),
      this.observer.next.bind(this.observer)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Yc = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: "",
};
function JE(e) {
  Yc = e;
}
function ZE(e) {
  return Yc.loadJS(e);
}
function eT() {
  return Yc.gapiScript;
}
function tT(e) {
  return `__${e}${Math.floor(Math.random() * 1e6)}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function nT(e, t) {
  const n = Bc(e, "auth");
  if (n.isInitialized()) {
    const i = n.getImmediate(),
      s = n.getOptions();
    if (Do(s, t ?? {})) return i;
    yt(i, "already-initialized");
  }
  return n.initialize({ options: t });
}
function rT(e, t) {
  const n = (t == null ? void 0 : t.persistence) || [],
    r = (Array.isArray(n) ? n : [n]).map(Rt);
  t != null && t.errorMap && e._updateErrorMap(t.errorMap),
    e._initializeWithPersistence(
      r,
      t == null ? void 0 : t.popupRedirectResolver
    );
}
function iT(e, t, n) {
  const r = ma(e);
  D(r._canInitEmulator, r, "emulator-config-failed"),
    D(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
  const i = !1,
    s = hv(t),
    { host: o, port: l } = sT(t),
    a = l === null ? "" : `:${l}`;
  (r.config.emulator = { url: `${s}//${o}${a}/` }),
    (r.settings.appVerificationDisabledForTesting = !0),
    (r.emulatorConfig = Object.freeze({
      host: o,
      port: l,
      protocol: s.replace(":", ""),
      options: Object.freeze({ disableWarnings: i }),
    })),
    oT();
}
function hv(e) {
  const t = e.indexOf(":");
  return t < 0 ? "" : e.substr(0, t + 1);
}
function sT(e) {
  const t = hv(e),
    n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
  if (!n) return { host: "", port: null };
  const r = n[2].split("@").pop() || "",
    i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    const s = i[1];
    return { host: s, port: pp(r.substr(s.length + 1)) };
  } else {
    const [s, o] = r.split(":");
    return { host: s, port: pp(o) };
  }
}
function pp(e) {
  if (!e) return null;
  const t = Number(e);
  return isNaN(t) ? null : t;
}
function oT() {
  function e() {
    const t = document.createElement("p"),
      n = t.style;
    (t.innerText =
      "Running in emulator mode. Do not use with production credentials."),
      (n.position = "fixed"),
      (n.width = "100%"),
      (n.backgroundColor = "#ffffff"),
      (n.border = ".1em solid #000000"),
      (n.color = "#b50000"),
      (n.bottom = "0px"),
      (n.left = "0px"),
      (n.margin = "0px"),
      (n.zIndex = "10000"),
      (n.textAlign = "center"),
      t.classList.add("firebase-emulator-warning"),
      document.body.appendChild(t);
  }
  typeof console < "u" &&
    typeof console.info == "function" &&
    console.info(
      "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."
    ),
    typeof window < "u" &&
      typeof document < "u" &&
      (document.readyState === "loading"
        ? window.addEventListener("DOMContentLoaded", e)
        : e());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mv {
  constructor(t, n) {
    (this.providerId = t), (this.signInMethod = n);
  }
  toJSON() {
    return Nt("not implemented");
  }
  _getIdTokenResponse(t) {
    return Nt("not implemented");
  }
  _linkToIdToken(t, n) {
    return Nt("not implemented");
  }
  _getReauthenticationResolver(t) {
    return Nt("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Cr(e, t) {
  return AE(e, "POST", "/v1/accounts:signInWithIdp", qc(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const aT = "http://localhost";
class Xn extends mv {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(t) {
    const n = new Xn(t.providerId, t.signInMethod);
    return (
      t.idToken || t.accessToken
        ? (t.idToken && (n.idToken = t.idToken),
          t.accessToken && (n.accessToken = t.accessToken),
          t.nonce && !t.pendingToken && (n.nonce = t.nonce),
          t.pendingToken && (n.pendingToken = t.pendingToken))
        : t.oauthToken && t.oauthTokenSecret
        ? ((n.accessToken = t.oauthToken), (n.secret = t.oauthTokenSecret))
        : yt("argument-error"),
      n
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(t) {
    const n = typeof t == "string" ? JSON.parse(t) : t,
      { providerId: r, signInMethod: i } = n,
      s = Vc(n, ["providerId", "signInMethod"]);
    if (!r || !i) return null;
    const o = new Xn(r, i);
    return (
      (o.idToken = s.idToken || void 0),
      (o.accessToken = s.accessToken || void 0),
      (o.secret = s.secret),
      (o.nonce = s.nonce),
      (o.pendingToken = s.pendingToken || null),
      o
    );
  }
  _getIdTokenResponse(t) {
    const n = this.buildRequest();
    return Cr(t, n);
  }
  _linkToIdToken(t, n) {
    const r = this.buildRequest();
    return (r.idToken = n), Cr(t, r);
  }
  _getReauthenticationResolver(t) {
    const n = this.buildRequest();
    return (n.autoCreate = !1), Cr(t, n);
  }
  buildRequest() {
    const t = { requestUri: aT, returnSecureToken: !0 };
    if (this.pendingToken) t.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (t.postBody = Yi(n));
    }
    return t;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qc {
  constructor(t) {
    (this.providerId = t),
      (this.defaultLanguageCode = null),
      (this.customParameters = {});
  }
  setDefaultLanguage(t) {
    this.defaultLanguageCode = t;
  }
  setCustomParameters(t) {
    return (this.customParameters = t), this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ji extends Qc {
  constructor() {
    super(...arguments), (this.scopes = []);
  }
  addScope(t) {
    return this.scopes.includes(t) || this.scopes.push(t), this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Yt extends Ji {
  constructor() {
    super("facebook.com");
  }
  static credential(t) {
    return Xn._fromParams({
      providerId: Yt.PROVIDER_ID,
      signInMethod: Yt.FACEBOOK_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return Yt.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Yt.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return Yt.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Yt.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Yt.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bt extends Ji {
  constructor() {
    super("google.com"), this.addScope("profile");
  }
  static credential(t, n) {
    return Xn._fromParams({
      providerId: bt.PROVIDER_ID,
      signInMethod: bt.GOOGLE_SIGN_IN_METHOD,
      idToken: t,
      accessToken: n,
    });
  }
  static credentialFromResult(t) {
    return bt.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return bt.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthIdToken: n, oauthAccessToken: r } = t;
    if (!n && !r) return null;
    try {
      return bt.credential(n, r);
    } catch {
      return null;
    }
  }
}
bt.GOOGLE_SIGN_IN_METHOD = "google.com";
bt.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qt extends Ji {
  constructor() {
    super("github.com");
  }
  static credential(t) {
    return Xn._fromParams({
      providerId: Qt.PROVIDER_ID,
      signInMethod: Qt.GITHUB_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return Qt.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Qt.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return Qt.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Qt.GITHUB_SIGN_IN_METHOD = "github.com";
Qt.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Jt extends Ji {
  constructor() {
    super("twitter.com");
  }
  static credential(t, n) {
    return Xn._fromParams({
      providerId: Jt.PROVIDER_ID,
      signInMethod: Jt.TWITTER_SIGN_IN_METHOD,
      oauthToken: t,
      oauthTokenSecret: n,
    });
  }
  static credentialFromResult(t) {
    return Jt.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Jt.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = t;
    if (!n || !r) return null;
    try {
      return Jt.credential(n, r);
    } catch {
      return null;
    }
  }
}
Jt.TWITTER_SIGN_IN_METHOD = "twitter.com";
Jt.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ar {
  constructor(t) {
    (this.user = t.user),
      (this.providerId = t.providerId),
      (this._tokenResponse = t._tokenResponse),
      (this.operationType = t.operationType);
  }
  static async _fromIdTokenResponse(t, n, r, i = !1) {
    const s = await Ot._fromIdTokenResponse(t, r, i),
      o = hp(r);
    return new Ar({
      user: s,
      providerId: o,
      _tokenResponse: r,
      operationType: n,
    });
  }
  static async _forOperation(t, n, r) {
    await t._updateTokensIfNecessary(r, !0);
    const i = hp(r);
    return new Ar({
      user: t,
      providerId: i,
      _tokenResponse: r,
      operationType: n,
    });
  }
}
function hp(e) {
  return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $o extends Vt {
  constructor(t, n, r, i) {
    var s;
    super(n.code, n.message),
      (this.operationType = r),
      (this.user = i),
      Object.setPrototypeOf(this, $o.prototype),
      (this.customData = {
        appName: t.name,
        tenantId: (s = t.tenantId) !== null && s !== void 0 ? s : void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r,
      });
  }
  static _fromErrorAndOperation(t, n, r, i) {
    return new $o(t, n, r, i);
  }
}
function gv(e, t, n, r) {
  return (
    t === "reauthenticate"
      ? n._getReauthenticationResolver(e)
      : n._getIdTokenResponse(e)
  ).catch((s) => {
    throw s.code === "auth/multi-factor-auth-required"
      ? $o._fromErrorAndOperation(e, s, t, r)
      : s;
  });
}
async function lT(e, t, n = !1) {
  const r = await zi(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
  return Ar._forOperation(e, "link", r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function uT(e, t, n = !1) {
  const { auth: r } = e;
  if (kt(r.app)) return Promise.reject(zn(r));
  const i = "reauthenticate";
  try {
    const s = await zi(e, gv(r, i, t, e), n);
    D(s.idToken, r, "internal-error");
    const o = Kc(s.idToken);
    D(o, r, "internal-error");
    const { sub: l } = o;
    return D(e.uid === l, r, "user-mismatch"), Ar._forOperation(e, i, s);
  } catch (s) {
    throw (
      ((s == null ? void 0 : s.code) === "auth/user-not-found" &&
        yt(r, "user-mismatch"),
      s)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function cT(e, t, n = !1) {
  if (kt(e.app)) return Promise.reject(zn(e));
  const r = "signIn",
    i = await gv(e, r, t),
    s = await Ar._fromIdTokenResponse(e, r, i);
  return n || (await e._updateCurrentUser(s.user)), s;
}
function dT(e, t, n, r) {
  return _t(e).onIdTokenChanged(t, n, r);
}
function fT(e, t, n) {
  return _t(e).beforeAuthStateChanged(t, n);
}
const Bo = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vv {
  constructor(t, n) {
    (this.storageRetriever = t), (this.type = n);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(Bo, "1"),
          this.storage.removeItem(Bo),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(t, n) {
    return this.storage.setItem(t, JSON.stringify(n)), Promise.resolve();
  }
  _get(t) {
    const n = this.storage.getItem(t);
    return Promise.resolve(n ? JSON.parse(n) : null);
  }
  _remove(t) {
    return this.storage.removeItem(t), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function pT() {
  const e = Se();
  return Xc(e) || ha(e);
}
const hT = 1e3,
  mT = 10;
class yv extends vv {
  constructor() {
    super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (t, n) => this.onStorageEvent(t, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.safariLocalStorageNotSynced = pT() && GE()),
      (this.fallbackToPolling = fv()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(t) {
    for (const n of Object.keys(this.listeners)) {
      const r = this.storage.getItem(n),
        i = this.localCache[n];
      r !== i && t(n, i, r);
    }
  }
  onStorageEvent(t, n = !1) {
    if (!t.key) {
      this.forAllChangedKeys((o, l, a) => {
        this.notifyListeners(o, a);
      });
      return;
    }
    const r = t.key;
    if (
      (n ? this.detachListener() : this.stopPolling(),
      this.safariLocalStorageNotSynced)
    ) {
      const o = this.storage.getItem(r);
      if (t.newValue !== o)
        t.newValue !== null
          ? this.storage.setItem(r, t.newValue)
          : this.storage.removeItem(r);
      else if (this.localCache[r] === t.newValue && !n) return;
    }
    const i = () => {
        const o = this.storage.getItem(r);
        (!n && this.localCache[r] === o) || this.notifyListeners(r, o);
      },
      s = this.storage.getItem(r);
    WE() && s !== t.newValue && t.newValue !== t.oldValue
      ? setTimeout(i, mT)
      : i();
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const i of Array.from(r)) i(n && JSON.parse(n));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((t, n, r) => {
          this.onStorageEvent(
            new StorageEvent("storage", { key: t, oldValue: n, newValue: r }),
            !0
          );
        });
      }, hT));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(t, n) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[t] ||
        ((this.listeners[t] = new Set()),
        (this.localCache[t] = this.storage.getItem(t))),
      this.listeners[t].add(n);
  }
  _removeListener(t, n) {
    this.listeners[t] &&
      (this.listeners[t].delete(n),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling());
  }
  async _set(t, n) {
    await super._set(t, n), (this.localCache[t] = JSON.stringify(n));
  }
  async _get(t) {
    const n = await super._get(t);
    return (this.localCache[t] = JSON.stringify(n)), n;
  }
  async _remove(t) {
    await super._remove(t), delete this.localCache[t];
  }
}
yv.type = "LOCAL";
const gT = yv;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wv extends vv {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
wv.type = "SESSION";
const _v = wv;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function vT(e) {
  return Promise.all(
    e.map(async (t) => {
      try {
        return { fulfilled: !0, value: await t };
      } catch (n) {
        return { fulfilled: !1, reason: n };
      }
    })
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ga {
  constructor(t) {
    (this.eventTarget = t),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(t) {
    const n = this.receivers.find((i) => i.isListeningto(t));
    if (n) return n;
    const r = new ga(t);
    return this.receivers.push(r), r;
  }
  isListeningto(t) {
    return this.eventTarget === t;
  }
  async handleEvent(t) {
    const n = t,
      { eventId: r, eventType: i, data: s } = n.data,
      o = this.handlersMap[i];
    if (!(o != null && o.size)) return;
    n.ports[0].postMessage({ status: "ack", eventId: r, eventType: i });
    const l = Array.from(o).map(async (u) => u(n.origin, s)),
      a = await vT(l);
    n.ports[0].postMessage({
      status: "done",
      eventId: r,
      eventType: i,
      response: a,
    });
  }
  _subscribe(t, n) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener("message", this.boundEventHandler),
      this.handlersMap[t] || (this.handlersMap[t] = new Set()),
      this.handlersMap[t].add(n);
  }
  _unsubscribe(t, n) {
    this.handlersMap[t] && n && this.handlersMap[t].delete(n),
      (!n || this.handlersMap[t].size === 0) && delete this.handlersMap[t],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
ga.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Jc(e = "", t = 10) {
  let n = "";
  for (let r = 0; r < t; r++) n += Math.floor(Math.random() * 10);
  return e + n;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yT {
  constructor(t) {
    (this.target = t), (this.handlers = new Set());
  }
  removeMessageHandler(t) {
    t.messageChannel &&
      (t.messageChannel.port1.removeEventListener("message", t.onMessage),
      t.messageChannel.port1.close()),
      this.handlers.delete(t);
  }
  async _send(t, n, r = 50) {
    const i = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!i) throw new Error("connection_unavailable");
    let s, o;
    return new Promise((l, a) => {
      const u = Jc("", 20);
      i.port1.start();
      const c = setTimeout(() => {
        a(new Error("unsupported_event"));
      }, r);
      (o = {
        messageChannel: i,
        onMessage(d) {
          const f = d;
          if (f.data.eventId === u)
            switch (f.data.status) {
              case "ack":
                clearTimeout(c),
                  (s = setTimeout(() => {
                    a(new Error("timeout"));
                  }, 3e3));
                break;
              case "done":
                clearTimeout(s), l(f.data.response);
                break;
              default:
                clearTimeout(c),
                  clearTimeout(s),
                  a(new Error("invalid_response"));
                break;
            }
        },
      }),
        this.handlers.add(o),
        i.port1.addEventListener("message", o.onMessage),
        this.target.postMessage({ eventType: t, eventId: u, data: n }, [
          i.port2,
        ]);
    }).finally(() => {
      o && this.removeMessageHandler(o);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function vt() {
  return window;
}
function wT(e) {
  vt().location.href = e;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Sv() {
  return (
    typeof vt().WorkerGlobalScope < "u" &&
    typeof vt().importScripts == "function"
  );
}
async function _T() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function ST() {
  var e;
  return (
    ((e = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    e === void 0
      ? void 0
      : e.controller) || null
  );
}
function xT() {
  return Sv() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const xv = "firebaseLocalStorageDb",
  ET = 1,
  Vo = "firebaseLocalStorage",
  Ev = "fbase_key";
class Zi {
  constructor(t) {
    this.request = t;
  }
  toPromise() {
    return new Promise((t, n) => {
      this.request.addEventListener("success", () => {
        t(this.request.result);
      }),
        this.request.addEventListener("error", () => {
          n(this.request.error);
        });
    });
  }
}
function va(e, t) {
  return e.transaction([Vo], t ? "readwrite" : "readonly").objectStore(Vo);
}
function TT() {
  const e = indexedDB.deleteDatabase(xv);
  return new Zi(e).toPromise();
}
function Iu() {
  const e = indexedDB.open(xv, ET);
  return new Promise((t, n) => {
    e.addEventListener("error", () => {
      n(e.error);
    }),
      e.addEventListener("upgradeneeded", () => {
        const r = e.result;
        try {
          r.createObjectStore(Vo, { keyPath: Ev });
        } catch (i) {
          n(i);
        }
      }),
      e.addEventListener("success", async () => {
        const r = e.result;
        r.objectStoreNames.contains(Vo)
          ? t(r)
          : (r.close(), await TT(), t(await Iu()));
      });
  });
}
async function mp(e, t, n) {
  const r = va(e, !0).put({ [Ev]: t, value: n });
  return new Zi(r).toPromise();
}
async function CT(e, t) {
  const n = va(e, !1).get(t),
    r = await new Zi(n).toPromise();
  return r === void 0 ? null : r.value;
}
function gp(e, t) {
  const n = va(e, !0).delete(t);
  return new Zi(n).toPromise();
}
const bT = 800,
  PT = 3;
class Tv {
  constructor() {
    (this.type = "LOCAL"),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {}
        ));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await Iu()), this.db);
  }
  async _withRetries(t) {
    let n = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await t(r);
      } catch (r) {
        if (n++ > PT) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return Sv() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = ga._getInstance(xT())),
      this.receiver._subscribe("keyChanged", async (t, n) => ({
        keyProcessed: (await this._poll()).includes(n.key),
      })),
      this.receiver._subscribe("ping", async (t, n) => ["keyChanged"]);
  }
  async initializeSender() {
    var t, n;
    if (((this.activeServiceWorker = await _T()), !this.activeServiceWorker))
      return;
    this.sender = new yT(this.activeServiceWorker);
    const r = await this.sender._send("ping", {}, 800);
    r &&
      !((t = r[0]) === null || t === void 0) &&
      t.fulfilled &&
      !((n = r[0]) === null || n === void 0) &&
      n.value.includes("keyChanged") &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(t) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        ST() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          "keyChanged",
          { key: t },
          this.serviceWorkerReceiverAvailable ? 800 : 50
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const t = await Iu();
      return await mp(t, Bo, "1"), await gp(t, Bo), !0;
    } catch {}
    return !1;
  }
  async _withPendingWrite(t) {
    this.pendingWrites++;
    try {
      await t();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(t, n) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => mp(r, t, n)),
        (this.localCache[t] = n),
        this.notifyServiceWorker(t)
      )
    );
  }
  async _get(t) {
    const n = await this._withRetries((r) => CT(r, t));
    return (this.localCache[t] = n), n;
  }
  async _remove(t) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((n) => gp(n, t)),
        delete this.localCache[t],
        this.notifyServiceWorker(t)
      )
    );
  }
  async _poll() {
    const t = await this._withRetries((i) => {
      const s = va(i, !1).getAll();
      return new Zi(s).toPromise();
    });
    if (!t) return [];
    if (this.pendingWrites !== 0) return [];
    const n = [],
      r = new Set();
    if (t.length !== 0)
      for (const { fbase_key: i, value: s } of t)
        r.add(i),
          JSON.stringify(this.localCache[i]) !== JSON.stringify(s) &&
            (this.notifyListeners(i, s), n.push(i));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] &&
        !r.has(i) &&
        (this.notifyListeners(i, null), n.push(i));
    return n;
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const i of Array.from(r)) i(n);
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), bT));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(t, n) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[t] || ((this.listeners[t] = new Set()), this._get(t)),
      this.listeners[t].add(n);
  }
  _removeListener(t, n) {
    this.listeners[t] &&
      (this.listeners[t].delete(n),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
Tv.type = "LOCAL";
const IT = Tv;
new Qi(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Cv(e, t) {
  return t
    ? Rt(t)
    : (D(e._popupRedirectResolver, e, "argument-error"),
      e._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zc extends mv {
  constructor(t) {
    super("custom", "custom"), (this.params = t);
  }
  _getIdTokenResponse(t) {
    return Cr(t, this._buildIdpRequest());
  }
  _linkToIdToken(t, n) {
    return Cr(t, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(t) {
    return Cr(t, this._buildIdpRequest());
  }
  _buildIdpRequest(t) {
    const n = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return t && (n.idToken = t), n;
  }
}
function kT(e) {
  return cT(e.auth, new Zc(e), e.bypassAuthState);
}
function NT(e) {
  const { auth: t, user: n } = e;
  return D(n, t, "internal-error"), uT(n, new Zc(e), e.bypassAuthState);
}
async function OT(e) {
  const { auth: t, user: n } = e;
  return D(n, t, "internal-error"), lT(n, new Zc(e), e.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bv {
  constructor(t, n, r, i, s = !1) {
    (this.auth = t),
      (this.resolver = r),
      (this.user = i),
      (this.bypassAuthState = s),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(n) ? n : [n]);
  }
  execute() {
    return new Promise(async (t, n) => {
      this.pendingPromise = { resolve: t, reject: n };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(t) {
    const {
      urlResponse: n,
      sessionId: r,
      postBody: i,
      tenantId: s,
      error: o,
      type: l,
    } = t;
    if (o) {
      this.reject(o);
      return;
    }
    const a = {
      auth: this.auth,
      requestUri: n,
      sessionId: r,
      tenantId: s || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(l)(a));
    } catch (u) {
      this.reject(u);
    }
  }
  onError(t) {
    this.reject(t);
  }
  getIdpTask(t) {
    switch (t) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return kT;
      case "linkViaPopup":
      case "linkViaRedirect":
        return OT;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return NT;
      default:
        yt(this.auth, "internal-error");
    }
  }
  resolve(t) {
    zt(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.resolve(t),
      this.unregisterAndCleanUp();
  }
  reject(t) {
    zt(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.reject(t),
      this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const RT = new Qi(2e3, 1e4);
async function LT(e, t, n) {
  if (kt(e.app))
    return Promise.reject(lt(e, "operation-not-supported-in-this-environment"));
  const r = ma(e);
  IE(e, t, Qc);
  const i = Cv(r, n);
  return new jn(r, "signInViaPopup", t, i).executeNotNull();
}
class jn extends bv {
  constructor(t, n, r, i, s) {
    super(t, n, i, s),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      jn.currentPopupAction && jn.currentPopupAction.cancel(),
      (jn.currentPopupAction = this);
  }
  async executeNotNull() {
    const t = await this.execute();
    return D(t, this.auth, "internal-error"), t;
  }
  async onExecution() {
    zt(this.filter.length === 1, "Popup operations only handle one event");
    const t = Jc();
    (this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      t
    )),
      (this.authWindow.associatedEvent = t),
      this.resolver._originValidation(this.auth).catch((n) => {
        this.reject(n);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
        n || this.reject(lt(this.auth, "web-storage-unsupported"));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var t;
    return (
      ((t = this.authWindow) === null || t === void 0
        ? void 0
        : t.associatedEvent) || null
    );
  }
  cancel() {
    this.reject(lt(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (jn.currentPopupAction = null);
  }
  pollUserCancellation() {
    const t = () => {
      var n, r;
      if (
        !(
          (r =
            (n = this.authWindow) === null || n === void 0
              ? void 0
              : n.window) === null || r === void 0
        ) &&
        r.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null),
            this.reject(lt(this.auth, "popup-closed-by-user"));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(t, RT.get());
    };
    t();
  }
}
jn.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const AT = "pendingRedirect",
  Ks = new Map();
class MT extends bv {
  constructor(t, n, r = !1) {
    super(
      t,
      ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"],
      n,
      void 0,
      r
    ),
      (this.eventId = null);
  }
  async execute() {
    let t = Ks.get(this.auth._key());
    if (!t) {
      try {
        const r = (await jT(this.resolver, this.auth))
          ? await super.execute()
          : null;
        t = () => Promise.resolve(r);
      } catch (n) {
        t = () => Promise.reject(n);
      }
      Ks.set(this.auth._key(), t);
    }
    return (
      this.bypassAuthState ||
        Ks.set(this.auth._key(), () => Promise.resolve(null)),
      t()
    );
  }
  async onAuthEvent(t) {
    if (t.type === "signInViaRedirect") return super.onAuthEvent(t);
    if (t.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (t.eventId) {
      const n = await this.auth._redirectUserForId(t.eventId);
      if (n) return (this.user = n), super.onAuthEvent(t);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function jT(e, t) {
  const n = zT(t),
    r = UT(e);
  if (!(await r._isAvailable())) return !1;
  const i = (await r._get(n)) === "true";
  return await r._remove(n), i;
}
function DT(e, t) {
  Ks.set(e._key(), t);
}
function UT(e) {
  return Rt(e._redirectPersistence);
}
function zT(e) {
  return qs(AT, e.config.apiKey, e.name);
}
async function FT(e, t, n = !1) {
  if (kt(e.app)) return Promise.reject(zn(e));
  const r = ma(e),
    i = Cv(r, t),
    o = await new MT(r, i, n).execute();
  return (
    o &&
      !n &&
      (delete o.user._redirectEventId,
      await r._persistUserIfCurrent(o.user),
      await r._setRedirectUser(null, t)),
    o
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $T = 10 * 60 * 1e3;
class BT {
  constructor(t) {
    (this.auth = t),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now());
  }
  registerConsumer(t) {
    this.consumers.add(t),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, t) &&
        (this.sendToConsumer(this.queuedRedirectEvent, t),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null));
  }
  unregisterConsumer(t) {
    this.consumers.delete(t);
  }
  onEvent(t) {
    if (this.hasEventBeenHandled(t)) return !1;
    let n = !1;
    return (
      this.consumers.forEach((r) => {
        this.isEventForConsumer(t, r) &&
          ((n = !0), this.sendToConsumer(t, r), this.saveEventToCache(t));
      }),
      this.hasHandledPotentialRedirect ||
        !VT(t) ||
        ((this.hasHandledPotentialRedirect = !0),
        n || ((this.queuedRedirectEvent = t), (n = !0))),
      n
    );
  }
  sendToConsumer(t, n) {
    var r;
    if (t.error && !Pv(t)) {
      const i =
        ((r = t.error.code) === null || r === void 0
          ? void 0
          : r.split("auth/")[1]) || "internal-error";
      n.onError(lt(this.auth, i));
    } else n.onAuthEvent(t);
  }
  isEventForConsumer(t, n) {
    const r = n.eventId === null || (!!t.eventId && t.eventId === n.eventId);
    return n.filter.includes(t.type) && r;
  }
  hasEventBeenHandled(t) {
    return (
      Date.now() - this.lastProcessedEventTime >= $T &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(vp(t))
    );
  }
  saveEventToCache(t) {
    this.cachedEventUids.add(vp(t)), (this.lastProcessedEventTime = Date.now());
  }
}
function vp(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId]
    .filter((t) => t)
    .join("-");
}
function Pv({ type: e, error: t }) {
  return (
    e === "unknown" && (t == null ? void 0 : t.code) === "auth/no-auth-event"
  );
}
function VT(e) {
  switch (e.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Pv(e);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function HT(e, t = {}) {
  return Hr(e, "GET", "/v1/projects", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const WT = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  GT = /^https?/;
async function qT(e) {
  if (e.config.emulator) return;
  const { authorizedDomains: t } = await HT(e);
  for (const n of t)
    try {
      if (KT(n)) return;
    } catch {}
  yt(e, "unauthorized-domain");
}
function KT(e) {
  const t = bu(),
    { protocol: n, hostname: r } = new URL(t);
  if (e.startsWith("chrome-extension://")) {
    const o = new URL(e);
    return o.hostname === "" && r === ""
      ? n === "chrome-extension:" &&
          e.replace("chrome-extension://", "") ===
            t.replace("chrome-extension://", "")
      : n === "chrome-extension:" && o.hostname === r;
  }
  if (!GT.test(n)) return !1;
  if (WT.test(e)) return r === e;
  const i = e.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const XT = new Qi(3e4, 6e4);
function yp() {
  const e = vt().___jsl;
  if (e != null && e.H) {
    for (const t of Object.keys(e.H))
      if (
        ((e.H[t].r = e.H[t].r || []),
        (e.H[t].L = e.H[t].L || []),
        (e.H[t].r = [...e.H[t].L]),
        e.CP)
      )
        for (let n = 0; n < e.CP.length; n++) e.CP[n] = null;
  }
}
function YT(e) {
  return new Promise((t, n) => {
    var r, i, s;
    function o() {
      yp(),
        gapi.load("gapi.iframes", {
          callback: () => {
            t(gapi.iframes.getContext());
          },
          ontimeout: () => {
            yp(), n(lt(e, "network-request-failed"));
          },
          timeout: XT.get(),
        });
    }
    if (
      !(
        (i = (r = vt().gapi) === null || r === void 0 ? void 0 : r.iframes) ===
          null || i === void 0
      ) &&
      i.Iframe
    )
      t(gapi.iframes.getContext());
    else if (!((s = vt().gapi) === null || s === void 0) && s.load) o();
    else {
      const l = tT("iframefcb");
      return (
        (vt()[l] = () => {
          gapi.load ? o() : n(lt(e, "network-request-failed"));
        }),
        ZE(`${eT()}?onload=${l}`).catch((a) => n(a))
      );
    }
  }).catch((t) => {
    throw ((Xs = null), t);
  });
}
let Xs = null;
function QT(e) {
  return (Xs = Xs || YT(e)), Xs;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const JT = new Qi(5e3, 15e3),
  ZT = "__/auth/iframe",
  eC = "emulator/auth/iframe",
  tC = {
    style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
    "aria-hidden": "true",
    tabindex: "-1",
  },
  nC = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function rC(e) {
  const t = e.config;
  D(t.authDomain, e, "auth-domain-config-required");
  const n = t.emulator ? Gc(t, eC) : `https://${e.config.authDomain}/${ZT}`,
    r = { apiKey: t.apiKey, appName: e.name, v: Vr },
    i = nC.get(e.config.apiHost);
  i && (r.eid = i);
  const s = e._getFrameworks();
  return s.length && (r.fw = s.join(",")), `${n}?${Yi(r).slice(1)}`;
}
async function iC(e) {
  const t = await QT(e),
    n = vt().gapi;
  return (
    D(n, e, "internal-error"),
    t.open(
      {
        where: document.body,
        url: rC(e),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: tC,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (i, s) => {
          await r.restyle({ setHideOnLeave: !1 });
          const o = lt(e, "network-request-failed"),
            l = vt().setTimeout(() => {
              s(o);
            }, JT.get());
          function a() {
            vt().clearTimeout(l), i(r);
          }
          r.ping(a).then(a, () => {
            s(o);
          });
        })
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const sC = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  },
  oC = 500,
  aC = 600,
  lC = "_blank",
  uC = "http://localhost";
class wp {
  constructor(t) {
    (this.window = t), (this.associatedEvent = null);
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function cC(e, t, n, r = oC, i = aC) {
  const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let l = "";
  const a = Object.assign(Object.assign({}, sC), {
      width: r.toString(),
      height: i.toString(),
      top: s,
      left: o,
    }),
    u = Se().toLowerCase();
  n && (l = av(u) ? lC : n), ov(u) && ((t = t || uC), (a.scrollbars = "yes"));
  const c = Object.entries(a).reduce((f, [v, y]) => `${f}${v}=${y},`, "");
  if (HE(u) && l !== "_self") return dC(t || "", l), new wp(null);
  const d = window.open(t || "", l, c);
  D(d, e, "popup-blocked");
  try {
    d.focus();
  } catch {}
  return new wp(d);
}
function dC(e, t) {
  const n = document.createElement("a");
  (n.href = e), (n.target = t);
  const r = document.createEvent("MouseEvent");
  r.initMouseEvent(
    "click",
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null
  ),
    n.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const fC = "__/auth/handler",
  pC = "emulator/auth/handler",
  hC = encodeURIComponent("fac");
async function _p(e, t, n, r, i, s) {
  D(e.config.authDomain, e, "auth-domain-config-required"),
    D(e.config.apiKey, e, "invalid-api-key");
  const o = {
    apiKey: e.config.apiKey,
    appName: e.name,
    authType: n,
    redirectUrl: r,
    v: Vr,
    eventId: i,
  };
  if (t instanceof Qc) {
    t.setDefaultLanguage(e.languageCode),
      (o.providerId = t.providerId || ""),
      gx(t.getCustomParameters()) ||
        (o.customParameters = JSON.stringify(t.getCustomParameters()));
    for (const [c, d] of Object.entries({})) o[c] = d;
  }
  if (t instanceof Ji) {
    const c = t.getScopes().filter((d) => d !== "");
    c.length > 0 && (o.scopes = c.join(","));
  }
  e.tenantId && (o.tid = e.tenantId);
  const l = o;
  for (const c of Object.keys(l)) l[c] === void 0 && delete l[c];
  const a = await e._getAppCheckToken(),
    u = a ? `#${hC}=${encodeURIComponent(a)}` : "";
  return `${mC(e)}?${Yi(l).slice(1)}${u}`;
}
function mC({ config: e }) {
  return e.emulator ? Gc(e, pC) : `https://${e.authDomain}/${fC}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dl = "webStorageSupport";
class gC {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = _v),
      (this._completeRedirectFn = FT),
      (this._overrideRedirectResult = DT);
  }
  async _openPopup(t, n, r, i) {
    var s;
    zt(
      (s = this.eventManagers[t._key()]) === null || s === void 0
        ? void 0
        : s.manager,
      "_initialize() not called before _openPopup()"
    );
    const o = await _p(t, n, r, bu(), i);
    return cC(t, o, Jc());
  }
  async _openRedirect(t, n, r, i) {
    await this._originValidation(t);
    const s = await _p(t, n, r, bu(), i);
    return wT(s), new Promise(() => {});
  }
  _initialize(t) {
    const n = t._key();
    if (this.eventManagers[n]) {
      const { manager: i, promise: s } = this.eventManagers[n];
      return i
        ? Promise.resolve(i)
        : (zt(s, "If manager is not set, promise should be"), s);
    }
    const r = this.initAndGetManager(t);
    return (
      (this.eventManagers[n] = { promise: r }),
      r.catch(() => {
        delete this.eventManagers[n];
      }),
      r
    );
  }
  async initAndGetManager(t) {
    const n = await iC(t),
      r = new BT(t);
    return (
      n.register(
        "authEvent",
        (i) => (
          D(i == null ? void 0 : i.authEvent, t, "invalid-auth-event"),
          { status: r.onEvent(i.authEvent) ? "ACK" : "ERROR" }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      ),
      (this.eventManagers[t._key()] = { manager: r }),
      (this.iframes[t._key()] = n),
      r
    );
  }
  _isIframeWebStorageSupported(t, n) {
    this.iframes[t._key()].send(
      dl,
      { type: dl },
      (i) => {
        var s;
        const o =
          (s = i == null ? void 0 : i[0]) === null || s === void 0
            ? void 0
            : s[dl];
        o !== void 0 && n(!!o), yt(t, "internal-error");
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(t) {
    const n = t._key();
    return (
      this.originValidationPromises[n] ||
        (this.originValidationPromises[n] = qT(t)),
      this.originValidationPromises[n]
    );
  }
  get _shouldInitProactively() {
    return fv() || Xc() || ha();
  }
}
const vC = gC;
var Sp = "@firebase/auth",
  xp = "1.7.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yC {
  constructor(t) {
    (this.auth = t), (this.internalListeners = new Map());
  }
  getUid() {
    var t;
    return (
      this.assertAuthConfigured(),
      ((t = this.auth.currentUser) === null || t === void 0 ? void 0 : t.uid) ||
        null
    );
  }
  async getToken(t) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(t) }
        : null
    );
  }
  addAuthTokenListener(t) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(t))) return;
    const n = this.auth.onIdTokenChanged((r) => {
      t((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(t, n), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(t) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(t);
    n && (this.internalListeners.delete(t), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    D(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function wC(e) {
  switch (e) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    case "WebExtension":
      return "web-extension";
    default:
      return;
  }
}
function _C(e) {
  Lr(
    new qn(
      "auth",
      (t, { options: n }) => {
        const r = t.getProvider("app").getImmediate(),
          i = t.getProvider("heartbeat"),
          s = t.getProvider("app-check-internal"),
          { apiKey: o, authDomain: l } = r.options;
        D(o && !o.includes(":"), "invalid-api-key", { appName: r.name });
        const a = {
            apiKey: o,
            authDomain: l,
            clientPlatform: e,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: pv(e),
          },
          u = new QE(r, i, s, a);
        return rT(u, n), u;
      },
      "PUBLIC"
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((t, n, r) => {
        t.getProvider("auth-internal").initialize();
      })
  ),
    Lr(
      new qn(
        "auth-internal",
        (t) => {
          const n = ma(t.getProvider("auth").getImmediate());
          return ((r) => new yC(r))(n);
        },
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    gn(Sp, xp, wC(e)),
    gn(Sp, xp, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const SC = 5 * 60,
  xC = Hg("authIdTokenMaxAge") || SC;
let Ep = null;
const EC = (e) => async (t) => {
  const n = t && (await t.getIdTokenResult()),
    r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > xC) return;
  const i = n == null ? void 0 : n.token;
  Ep !== i &&
    ((Ep = i),
    await fetch(e, {
      method: i ? "POST" : "DELETE",
      headers: i ? { Authorization: `Bearer ${i}` } : {},
    }));
};
function TC(e = Xg()) {
  const t = Bc(e, "auth");
  if (t.isInitialized()) return t.getImmediate();
  const n = nT(e, { popupRedirectResolver: vC, persistence: [IT, gT, _v] }),
    r = Hg("authTokenSyncURL");
  if (r && typeof isSecureContext == "boolean" && isSecureContext) {
    const s = new URL(r, location.origin);
    if (location.origin === s.origin) {
      const o = EC(s.toString());
      fT(n, o, () => o(n.currentUser)), dT(n, (l) => o(l));
    }
  }
  const i = Bg("auth");
  return i && iT(n, `http://${i}`), n;
}
function CC() {
  var e, t;
  return (t =
    (e = document.getElementsByTagName("head")) === null || e === void 0
      ? void 0
      : e[0]) !== null && t !== void 0
    ? t
    : document;
}
JE({
  loadJS(e) {
    return new Promise((t, n) => {
      const r = document.createElement("script");
      r.setAttribute("src", e),
        (r.onload = t),
        (r.onerror = (i) => {
          const s = lt("internal-error");
          (s.customData = i), n(s);
        }),
        (r.type = "text/javascript"),
        (r.charset = "UTF-8"),
        CC().appendChild(r);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript:
    "https://www.google.com/recaptcha/enterprise.js?render=",
});
_C("Browser");
var bC = "firebase",
  PC = "10.12.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ gn(bC, PC, "app");
var IC = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const kC = {
    apiKey: IC.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-db5ad.firebaseapp.com",
    projectId: "mern-estate-db5ad",
    storageBucket: "mern-estate-db5ad.appspot.com",
    messagingSenderId: "349288157569",
    appId: "1:349288157569:web:8c046677b37e9f7b791880",
  },
  ya = Kg(kC);
var Iv = { exports: {} },
  kv = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var es = C;
function NC(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var OC = typeof Object.is == "function" ? Object.is : NC,
  RC = es.useSyncExternalStore,
  LC = es.useRef,
  AC = es.useEffect,
  MC = es.useMemo,
  jC = es.useDebugValue;
kv.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var s = LC(null);
  if (s.current === null) {
    var o = { hasValue: !1, value: null };
    s.current = o;
  } else o = s.current;
  s = MC(
    function () {
      function a(v) {
        if (!u) {
          if (((u = !0), (c = v), (v = r(v)), i !== void 0 && o.hasValue)) {
            var y = o.value;
            if (i(y, v)) return (d = y);
          }
          return (d = v);
        }
        if (((y = d), OC(c, v))) return y;
        var _ = r(v);
        return i !== void 0 && i(y, _) ? y : ((c = v), (d = _));
      }
      var u = !1,
        c,
        d,
        f = n === void 0 ? null : n;
      return [
        function () {
          return a(t());
        },
        f === null
          ? void 0
          : function () {
              return a(f());
            },
      ];
    },
    [t, n, r, i]
  );
  var l = RC(e, s[0], s[1]);
  return (
    AC(
      function () {
        (o.hasValue = !0), (o.value = l);
      },
      [l]
    ),
    jC(l),
    l
  );
};
Iv.exports = kv;
var DC = Iv.exports,
  ze = "default" in Sl ? V : Sl,
  Tp = Symbol.for("react-redux-context"),
  Cp = typeof globalThis < "u" ? globalThis : {};
function UC() {
  if (!ze.createContext) return {};
  const e = Cp[Tp] ?? (Cp[Tp] = new Map());
  let t = e.get(ze.createContext);
  return t || ((t = ze.createContext(null)), e.set(ze.createContext, t)), t;
}
var wn = UC(),
  zC = () => {
    throw new Error("uSES not initialized!");
  };
function ed(e = wn) {
  return function () {
    return ze.useContext(e);
  };
}
var Nv = ed(),
  Ov = zC,
  FC = (e) => {
    Ov = e;
  },
  $C = (e, t) => e === t;
function BC(e = wn) {
  const t = e === wn ? Nv : ed(e),
    n = (r, i = {}) => {
      const { equalityFn: s = $C, devModeChecks: o = {} } =
          typeof i == "function" ? { equalityFn: i } : i,
        {
          store: l,
          subscription: a,
          getServerState: u,
          stabilityCheck: c,
          identityFunctionCheck: d,
        } = t();
      ze.useRef(!0);
      const f = ze.useCallback(
          {
            [r.name](y) {
              return r(y);
            },
          }[r.name],
          [r, c, o.stabilityCheck]
        ),
        v = Ov(a.addNestedSub, l.getState, u || l.getState, f, s);
      return ze.useDebugValue(v), v;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var er = BC();
function VC(e) {
  e();
}
function HC() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      VC(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const i = (t = { callback: n, next: null, prev: t });
      return (
        i.prev ? (i.prev.next = i) : (e = i),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (e = i.next));
        }
      );
    },
  };
}
var bp = { notify() {}, get: () => [] };
function WC(e, t) {
  let n,
    r = bp,
    i = 0,
    s = !1;
  function o(_) {
    c();
    const S = r.subscribe(_);
    let p = !1;
    return () => {
      p || ((p = !0), S(), d());
    };
  }
  function l() {
    r.notify();
  }
  function a() {
    y.onStateChange && y.onStateChange();
  }
  function u() {
    return s;
  }
  function c() {
    i++, n || ((n = e.subscribe(a)), (r = HC()));
  }
  function d() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = bp));
  }
  function f() {
    s || ((s = !0), c());
  }
  function v() {
    s && ((s = !1), d());
  }
  const y = {
    addNestedSub: o,
    notifyNestedSubs: l,
    handleChangeWrapper: a,
    isSubscribed: u,
    trySubscribe: f,
    tryUnsubscribe: v,
    getListeners: () => r,
  };
  return y;
}
var GC =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  qC = typeof navigator < "u" && navigator.product === "ReactNative",
  KC = GC || qC ? ze.useLayoutEffect : ze.useEffect;
function XC({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  identityFunctionCheck: s = "once",
}) {
  const o = ze.useMemo(() => {
      const u = WC(e);
      return {
        store: e,
        subscription: u,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        identityFunctionCheck: s,
      };
    }, [e, r, i, s]),
    l = ze.useMemo(() => e.getState(), [e]);
  KC(() => {
    const { subscription: u } = o;
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      l !== e.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0);
      }
    );
  }, [o, l]);
  const a = t || wn;
  return ze.createElement(a.Provider, { value: o }, n);
}
var YC = XC;
function Rv(e = wn) {
  const t = e === wn ? Nv : ed(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var QC = Rv();
function JC(e = wn) {
  const t = e === wn ? QC : Rv(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var Ho = JC();
FC(DC.useSyncExternalStoreWithSelector);
function de(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var ZC = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  Pp = ZC,
  fl = () => Math.random().toString(36).substring(7).split("").join("."),
  eb = {
    INIT: `@@redux/INIT${fl()}`,
    REPLACE: `@@redux/REPLACE${fl()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${fl()}`,
  },
  Wo = eb;
function td(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Lv(e, t, n) {
  if (typeof e != "function") throw new Error(de(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(de(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(de(1));
    return n(Lv)(e, t);
  }
  let r = e,
    i = t,
    s = new Map(),
    o = s,
    l = 0,
    a = !1;
  function u() {
    o === s &&
      ((o = new Map()),
      s.forEach((S, p) => {
        o.set(p, S);
      }));
  }
  function c() {
    if (a) throw new Error(de(3));
    return i;
  }
  function d(S) {
    if (typeof S != "function") throw new Error(de(4));
    if (a) throw new Error(de(5));
    let p = !0;
    u();
    const g = l++;
    return (
      o.set(g, S),
      function () {
        if (p) {
          if (a) throw new Error(de(6));
          (p = !1), u(), o.delete(g), (s = null);
        }
      }
    );
  }
  function f(S) {
    if (!td(S)) throw new Error(de(7));
    if (typeof S.type > "u") throw new Error(de(8));
    if (typeof S.type != "string") throw new Error(de(17));
    if (a) throw new Error(de(9));
    try {
      (a = !0), (i = r(i, S));
    } finally {
      a = !1;
    }
    return (
      (s = o).forEach((g) => {
        g();
      }),
      S
    );
  }
  function v(S) {
    if (typeof S != "function") throw new Error(de(10));
    (r = S), f({ type: Wo.REPLACE });
  }
  function y() {
    const S = d;
    return {
      subscribe(p) {
        if (typeof p != "object" || p === null) throw new Error(de(11));
        function g() {
          const w = p;
          w.next && w.next(c());
        }
        return g(), { unsubscribe: S(g) };
      },
      [Pp]() {
        return this;
      },
    };
  }
  return (
    f({ type: Wo.INIT }),
    { dispatch: f, subscribe: d, getState: c, replaceReducer: v, [Pp]: y }
  );
}
function tb(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: Wo.INIT }) > "u") throw new Error(de(12));
    if (typeof n(void 0, { type: Wo.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(de(13));
  });
}
function Av(e) {
  const t = Object.keys(e),
    n = {};
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    typeof e[o] == "function" && (n[o] = e[o]);
  }
  const r = Object.keys(n);
  let i;
  try {
    tb(n);
  } catch (s) {
    i = s;
  }
  return function (o = {}, l) {
    if (i) throw i;
    let a = !1;
    const u = {};
    for (let c = 0; c < r.length; c++) {
      const d = r[c],
        f = n[d],
        v = o[d],
        y = f(v, l);
      if (typeof y > "u") throw (l && l.type, new Error(de(14)));
      (u[d] = y), (a = a || y !== v);
    }
    return (a = a || r.length !== Object.keys(o).length), a ? u : o;
  };
}
function Go(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, n) =>
          (...r) =>
            t(n(...r))
      );
}
function nb(...e) {
  return (t) => (n, r) => {
    const i = t(n, r);
    let s = () => {
      throw new Error(de(15));
    };
    const o = { getState: i.getState, dispatch: (a, ...u) => s(a, ...u) },
      l = e.map((a) => a(o));
    return (s = Go(...l)(i.dispatch)), { ...i, dispatch: s };
  };
}
function rb(e) {
  return td(e) && "type" in e && typeof e.type == "string";
}
var Mv = Symbol.for("immer-nothing"),
  Ip = Symbol.for("immer-draftable"),
  Ve = Symbol.for("immer-state");
function st(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Mr = Object.getPrototypeOf;
function _n(e) {
  return !!e && !!e[Ve];
}
function Ft(e) {
  var t;
  return e
    ? jv(e) ||
        Array.isArray(e) ||
        !!e[Ip] ||
        !!((t = e.constructor) != null && t[Ip]) ||
        _a(e) ||
        Sa(e)
    : !1;
}
var ib = Object.prototype.constructor.toString();
function jv(e) {
  if (!e || typeof e != "object") return !1;
  const t = Mr(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === ib;
}
function qo(e, t) {
  wa(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function wa(e) {
  const t = e[Ve];
  return t ? t.type_ : Array.isArray(e) ? 1 : _a(e) ? 2 : Sa(e) ? 3 : 0;
}
function ku(e, t) {
  return wa(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Dv(e, t, n) {
  const r = wa(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function sb(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function _a(e) {
  return e instanceof Map;
}
function Sa(e) {
  return e instanceof Set;
}
function Rn(e) {
  return e.copy_ || e.base_;
}
function Nu(e, t) {
  if (_a(e)) return new Map(e);
  if (Sa(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const n = jv(e);
  if (t === !0 || (t === "class_only" && !n)) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[Ve];
    let i = Reflect.ownKeys(r);
    for (let s = 0; s < i.length; s++) {
      const o = i[s],
        l = r[o];
      l.writable === !1 && ((l.writable = !0), (l.configurable = !0)),
        (l.get || l.set) &&
          (r[o] = {
            configurable: !0,
            writable: !0,
            enumerable: l.enumerable,
            value: e[o],
          });
    }
    return Object.create(Mr(e), r);
  } else {
    const r = Mr(e);
    if (r !== null && n) return { ...e };
    const i = Object.create(r);
    return Object.assign(i, e);
  }
}
function nd(e, t = !1) {
  return (
    xa(e) ||
      _n(e) ||
      !Ft(e) ||
      (wa(e) > 1 && (e.set = e.add = e.clear = e.delete = ob),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => nd(r, !0))),
    e
  );
}
function ob() {
  st(2);
}
function xa(e) {
  return Object.isFrozen(e);
}
var ab = {};
function Yn(e) {
  const t = ab[e];
  return t || st(0, e), t;
}
var Fi;
function Uv() {
  return Fi;
}
function lb(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function kp(e, t) {
  t &&
    (Yn("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function Ou(e) {
  Ru(e), e.drafts_.forEach(ub), (e.drafts_ = null);
}
function Ru(e) {
  e === Fi && (Fi = e.parent_);
}
function Np(e) {
  return (Fi = lb(Fi, e));
}
function ub(e) {
  const t = e[Ve];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Op(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[Ve].modified_ && (Ou(t), st(4)),
        Ft(e) && ((e = Ko(t, e)), t.parent_ || Xo(t, e)),
        t.patches_ &&
          Yn("Patches").generateReplacementPatches_(
            n[Ve].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = Ko(t, n, [])),
    Ou(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== Mv ? e : void 0
  );
}
function Ko(e, t, n) {
  if (xa(t)) return t;
  const r = t[Ve];
  if (!r) return qo(t, (i, s) => Rp(e, r, t, i, s, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return Xo(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const i = r.copy_;
    let s = i,
      o = !1;
    r.type_ === 3 && ((s = new Set(i)), i.clear(), (o = !0)),
      qo(s, (l, a) => Rp(e, r, i, l, a, n, o)),
      Xo(e, i, !1),
      n &&
        e.patches_ &&
        Yn("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function Rp(e, t, n, r, i, s, o) {
  if (_n(i)) {
    const l =
        s && t && t.type_ !== 3 && !ku(t.assigned_, r) ? s.concat(r) : void 0,
      a = Ko(e, i, l);
    if ((Dv(n, r, a), _n(a))) e.canAutoFreeze_ = !1;
    else return;
  } else o && n.add(i);
  if (Ft(i) && !xa(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    Ko(e, i),
      (!t || !t.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        Xo(e, i);
  }
}
function Xo(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && nd(t, n);
}
function cb(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : Uv(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let i = r,
    s = rd;
  n && ((i = [r]), (s = $i));
  const { revoke: o, proxy: l } = Proxy.revocable(i, s);
  return (r.draft_ = l), (r.revoke_ = o), l;
}
var rd = {
    get(e, t) {
      if (t === Ve) return e;
      const n = Rn(e);
      if (!ku(n, t)) return db(e, n, t);
      const r = n[t];
      return e.finalized_ || !Ft(r)
        ? r
        : r === pl(e.base_, t)
        ? (hl(e), (e.copy_[t] = Au(r, e)))
        : r;
    },
    has(e, t) {
      return t in Rn(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Rn(e));
    },
    set(e, t, n) {
      const r = zv(Rn(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const i = pl(Rn(e), t),
          s = i == null ? void 0 : i[Ve];
        if (s && s.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (sb(n, i) && (n !== void 0 || ku(e.base_, t))) return !0;
        hl(e), Lu(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        pl(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), hl(e), Lu(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = Rn(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      st(11);
    },
    getPrototypeOf(e) {
      return Mr(e.base_);
    },
    setPrototypeOf() {
      st(12);
    },
  },
  $i = {};
qo(rd, (e, t) => {
  $i[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
$i.deleteProperty = function (e, t) {
  return $i.set.call(this, e, t, void 0);
};
$i.set = function (e, t, n) {
  return rd.set.call(this, e[0], t, n, e[0]);
};
function pl(e, t) {
  const n = e[Ve];
  return (n ? Rn(n) : e)[t];
}
function db(e, t, n) {
  var i;
  const r = zv(t, n);
  return r
    ? "value" in r
      ? r.value
      : (i = r.get) == null
      ? void 0
      : i.call(e.draft_)
    : void 0;
}
function zv(e, t) {
  if (!(t in e)) return;
  let n = Mr(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = Mr(n);
  }
}
function Lu(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && Lu(e.parent_));
}
function hl(e) {
  e.copy_ || (e.copy_ = Nu(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var fb = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const s = n;
          n = t;
          const o = this;
          return function (a = s, ...u) {
            return o.produce(a, (c) => n.call(this, c, ...u));
          };
        }
        typeof n != "function" && st(6),
          r !== void 0 && typeof r != "function" && st(7);
        let i;
        if (Ft(t)) {
          const s = Np(this),
            o = Au(t, void 0);
          let l = !0;
          try {
            (i = n(o)), (l = !1);
          } finally {
            l ? Ou(s) : Ru(s);
          }
          return kp(s, r), Op(i, s);
        } else if (!t || typeof t != "object") {
          if (
            ((i = n(t)),
            i === void 0 && (i = t),
            i === Mv && (i = void 0),
            this.autoFreeze_ && nd(i, !0),
            r)
          ) {
            const s = [],
              o = [];
            Yn("Patches").generateReplacementPatches_(t, i, s, o), r(s, o);
          }
          return i;
        } else st(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (o, ...l) => this.produceWithPatches(o, (a) => t(a, ...l));
        let r, i;
        return [
          this.produce(t, n, (o, l) => {
            (r = o), (i = l);
          }),
          r,
          i,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Ft(e) || st(8), _n(e) && (e = Fv(e));
    const t = Np(this),
      n = Au(e, void 0);
    return (n[Ve].isManual_ = !0), Ru(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Ve];
    (!n || !n.isManual_) && st(9);
    const { scope_: r } = n;
    return kp(r, t), Op(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const i = t[n];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = Yn("Patches").applyPatches_;
    return _n(e) ? r(e, t) : this.produce(e, (i) => r(i, t));
  }
};
function Au(e, t) {
  const n = _a(e)
    ? Yn("MapSet").proxyMap_(e, t)
    : Sa(e)
    ? Yn("MapSet").proxySet_(e, t)
    : cb(e, t);
  return (t ? t.scope_ : Uv()).drafts_.push(n), n;
}
function Fv(e) {
  return _n(e) || st(10, e), $v(e);
}
function $v(e) {
  if (!Ft(e) || xa(e)) return e;
  const t = e[Ve];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = Nu(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = Nu(e, !0);
  return (
    qo(n, (r, i) => {
      Dv(n, r, $v(i));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var He = new fb(),
  Bv = He.produce;
He.produceWithPatches.bind(He);
He.setAutoFreeze.bind(He);
He.setUseStrictShallowCopy.bind(He);
He.applyPatches.bind(He);
He.createDraft.bind(He);
He.finishDraft.bind(He);
function pb(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function") throw new TypeError(t);
}
function hb(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object") throw new TypeError(t);
}
function mb(
  e,
  t = "expected all items to be functions, instead received the following types: "
) {
  if (!e.every((n) => typeof n == "function")) {
    const n = e
      .map((r) =>
        typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
      )
      .join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var Lp = (e) => (Array.isArray(e) ? e : [e]);
function gb(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return (
    mb(
      t,
      "createSelector expects all input-selectors to be functions, but received the following types: "
    ),
    t
  );
}
function vb(e, t) {
  const n = [],
    { length: r } = e;
  for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
  return n;
}
var yb = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  },
  wb = typeof WeakRef < "u" ? WeakRef : yb,
  _b = 0,
  Ap = 1;
function bs() {
  return { s: _b, v: void 0, o: null, p: null };
}
function id(e, t = {}) {
  let n = bs();
  const { resultEqualityCheck: r } = t;
  let i,
    s = 0;
  function o() {
    var d;
    let l = n;
    const { length: a } = arguments;
    for (let f = 0, v = a; f < v; f++) {
      const y = arguments[f];
      if (typeof y == "function" || (typeof y == "object" && y !== null)) {
        let _ = l.o;
        _ === null && (l.o = _ = new WeakMap());
        const S = _.get(y);
        S === void 0 ? ((l = bs()), _.set(y, l)) : (l = S);
      } else {
        let _ = l.p;
        _ === null && (l.p = _ = new Map());
        const S = _.get(y);
        S === void 0 ? ((l = bs()), _.set(y, l)) : (l = S);
      }
    }
    const u = l;
    let c;
    if (l.s === Ap) c = l.v;
    else if (((c = e.apply(null, arguments)), s++, r)) {
      const f =
        ((d = i == null ? void 0 : i.deref) == null ? void 0 : d.call(i)) ?? i;
      f != null && r(f, c) && ((c = f), s !== 0 && s--),
        (i =
          (typeof c == "object" && c !== null) || typeof c == "function"
            ? new wb(c)
            : c);
    }
    return (u.s = Ap), (u.v = c), c;
  }
  return (
    (o.clearCache = () => {
      (n = bs()), o.resetResultsCount();
    }),
    (o.resultsCount = () => s),
    (o.resetResultsCount = () => {
      s = 0;
    }),
    o
  );
}
function Vv(e, ...t) {
  const n = typeof e == "function" ? { memoize: e, memoizeOptions: t } : e,
    r = (...i) => {
      let s = 0,
        o = 0,
        l,
        a = {},
        u = i.pop();
      typeof u == "object" && ((a = u), (u = i.pop())),
        pb(
          u,
          `createSelector expects an output function after the inputs, but received: [${typeof u}]`
        );
      const c = { ...n, ...a },
        {
          memoize: d,
          memoizeOptions: f = [],
          argsMemoize: v = id,
          argsMemoizeOptions: y = [],
          devModeChecks: _ = {},
        } = c,
        S = Lp(f),
        p = Lp(y),
        g = gb(i),
        h = d(function () {
          return s++, u.apply(null, arguments);
        }, ...S),
        w = v(function () {
          o++;
          const E = vb(g, arguments);
          return (l = h.apply(null, E)), l;
        }, ...p);
      return Object.assign(w, {
        resultFunc: u,
        memoizedResultFunc: h,
        dependencies: g,
        dependencyRecomputations: () => o,
        resetDependencyRecomputations: () => {
          o = 0;
        },
        lastResult: () => l,
        recomputations: () => s,
        resetRecomputations: () => {
          s = 0;
        },
        memoize: d,
        argsMemoize: v,
      });
    };
  return Object.assign(r, { withTypes: () => r }), r;
}
var Sb = Vv(id),
  xb = Object.assign(
    (e, t = Sb) => {
      hb(
        e,
        `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
      );
      const n = Object.keys(e),
        r = n.map((s) => e[s]);
      return t(r, (...s) => s.reduce((o, l, a) => ((o[n[a]] = l), o), {}));
    },
    { withTypes: () => xb }
  );
function Hv(e) {
  return ({ dispatch: n, getState: r }) =>
    (i) =>
    (s) =>
      typeof s == "function" ? s(n, r, e) : i(s);
}
var Eb = Hv(),
  Tb = Hv,
  Cb = (...e) => {
    const t = Vv(...e),
      n = Object.assign(
        (...r) => {
          const i = t(...r),
            s = (o, ...l) => i(_n(o) ? Fv(o) : o, ...l);
          return Object.assign(s, i), s;
        },
        { withTypes: () => n }
      );
    return n;
  };
Cb(id);
var bb =
  typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (arguments.length !== 0)
          return typeof arguments[0] == "object"
            ? Go
            : Go.apply(null, arguments);
      };
function jr(e, t) {
  function n(...r) {
    if (t) {
      let i = t(...r);
      if (!i) throw new Error(Ae(0));
      return {
        type: e,
        payload: i.payload,
        ...("meta" in i && { meta: i.meta }),
        ...("error" in i && { error: i.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => rb(r) && r.type === e),
    n
  );
}
var Wv = class oi extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, oi.prototype);
  }
  static get [Symbol.species]() {
    return oi;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new oi(...t[0].concat(this))
      : new oi(...t.concat(this));
  }
};
function Mp(e) {
  return Ft(e) ? Bv(e, () => {}) : e;
}
function jp(e, t, n) {
  if (e.has(t)) {
    let i = e.get(t);
    return n.update && ((i = n.update(i, t, e)), e.set(t, i)), i;
  }
  if (!n.insert) throw new Error(Ae(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function Pb(e) {
  return typeof e == "boolean";
}
var Ib = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: s = !0,
      } = t ?? {};
      let o = new Wv();
      return n && (Pb(n) ? o.push(Eb) : o.push(Tb(n.extraArgument))), o;
    },
  kb = "RTK_autoBatch",
  Gv = (e) => (t) => {
    setTimeout(t, e);
  },
  Nb =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : Gv(10),
  Ob =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let i = !0,
        s = !1,
        o = !1;
      const l = new Set(),
        a =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
            ? Nb
            : e.type === "callback"
            ? e.queueNotification
            : Gv(e.timeout),
        u = () => {
          (o = !1), s && ((s = !1), l.forEach((c) => c()));
        };
      return Object.assign({}, r, {
        subscribe(c) {
          const d = () => i && c(),
            f = r.subscribe(d);
          return (
            l.add(c),
            () => {
              f(), l.delete(c);
            }
          );
        },
        dispatch(c) {
          var d;
          try {
            return (
              (i = !((d = c == null ? void 0 : c.meta) != null && d[kb])),
              (s = !i),
              s && (o || ((o = !0), a(u))),
              r.dispatch(c)
            );
          } finally {
            i = !0;
          }
        },
      });
    },
  Rb = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let i = new Wv(e);
      return r && i.push(Ob(typeof r == "object" ? r : void 0)), i;
    },
  Lb = !0;
function Ab(e) {
  const t = Ib(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: i = !0,
      preloadedState: s = void 0,
      enhancers: o = void 0,
    } = e || {};
  let l;
  if (typeof n == "function") l = n;
  else if (td(n)) l = Av(n);
  else throw new Error(Ae(1));
  let a;
  typeof r == "function" ? (a = r(t)) : (a = t());
  let u = Go;
  i && (u = bb({ trace: !Lb, ...(typeof i == "object" && i) }));
  const c = nb(...a),
    d = Rb(c);
  let f = typeof o == "function" ? o(d) : d();
  const v = u(...f);
  return Lv(l, s, v);
}
function qv(e) {
  const t = {},
    n = [];
  let r;
  const i = {
    addCase(s, o) {
      const l = typeof s == "string" ? s : s.type;
      if (!l) throw new Error(Ae(28));
      if (l in t) throw new Error(Ae(29));
      return (t[l] = o), i;
    },
    addMatcher(s, o) {
      return n.push({ matcher: s, reducer: o }), i;
    },
    addDefaultCase(s) {
      return (r = s), i;
    },
  };
  return e(i), [t, n, r];
}
function Mb(e) {
  return typeof e == "function";
}
function jb(e, t) {
  let [n, r, i] = qv(t),
    s;
  if (Mb(e)) s = () => Mp(e());
  else {
    const l = Mp(e);
    s = () => l;
  }
  function o(l = s(), a) {
    let u = [
      n[a.type],
      ...r.filter(({ matcher: c }) => c(a)).map(({ reducer: c }) => c),
    ];
    return (
      u.filter((c) => !!c).length === 0 && (u = [i]),
      u.reduce((c, d) => {
        if (d)
          if (_n(c)) {
            const v = d(c, a);
            return v === void 0 ? c : v;
          } else {
            if (Ft(c)) return Bv(c, (f) => d(f, a));
            {
              const f = d(c, a);
              if (f === void 0) {
                if (c === null) return c;
                throw new Error(Ae(9));
              }
              return f;
            }
          }
        return c;
      }, l)
    );
  }
  return (o.getInitialState = s), o;
}
var Db = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  Ub = (e = 21) => {
    let t = "",
      n = e;
    for (; n--; ) t += Db[(Math.random() * 64) | 0];
    return t;
  },
  zb = Symbol.for("rtk-slice-createasyncthunk");
function Fb(e, t) {
  return `${e}/${t}`;
}
function $b({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[zb];
  return function (i) {
    const { name: s, reducerPath: o = s } = i;
    if (!s) throw new Error(Ae(11));
    typeof process < "u";
    const l =
        (typeof i.reducers == "function" ? i.reducers(Hb()) : i.reducers) || {},
      a = Object.keys(l),
      u = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      c = {
        addCase(h, w) {
          const x = typeof h == "string" ? h : h.type;
          if (!x) throw new Error(Ae(12));
          if (x in u.sliceCaseReducersByType) throw new Error(Ae(13));
          return (u.sliceCaseReducersByType[x] = w), c;
        },
        addMatcher(h, w) {
          return u.sliceMatchers.push({ matcher: h, reducer: w }), c;
        },
        exposeAction(h, w) {
          return (u.actionCreators[h] = w), c;
        },
        exposeCaseReducer(h, w) {
          return (u.sliceCaseReducersByName[h] = w), c;
        },
      };
    a.forEach((h) => {
      const w = l[h],
        x = {
          reducerName: h,
          type: Fb(s, h),
          createNotation: typeof i.reducers == "function",
        };
      Gb(w) ? Kb(x, w, c, t) : Wb(x, w, c);
    });
    function d() {
      const [h = {}, w = [], x = void 0] =
          typeof i.extraReducers == "function"
            ? qv(i.extraReducers)
            : [i.extraReducers],
        E = { ...h, ...u.sliceCaseReducersByType };
      return jb(i.initialState, (P) => {
        for (let b in E) P.addCase(b, E[b]);
        for (let b of u.sliceMatchers) P.addMatcher(b.matcher, b.reducer);
        for (let b of w) P.addMatcher(b.matcher, b.reducer);
        x && P.addDefaultCase(x);
      });
    }
    const f = (h) => h,
      v = new Map();
    let y;
    function _(h, w) {
      return y || (y = d()), y(h, w);
    }
    function S() {
      return y || (y = d()), y.getInitialState();
    }
    function p(h, w = !1) {
      function x(P) {
        let b = P[h];
        return typeof b > "u" && w && (b = S()), b;
      }
      function E(P = f) {
        const b = jp(v, w, { insert: () => new WeakMap() });
        return jp(b, P, {
          insert: () => {
            const I = {};
            for (const [T, N] of Object.entries(i.selectors ?? {}))
              I[T] = Bb(N, P, S, w);
            return I;
          },
        });
      }
      return {
        reducerPath: h,
        getSelectors: E,
        get selectors() {
          return E(x);
        },
        selectSlice: x,
      };
    }
    const g = {
      name: s,
      reducer: _,
      actions: u.actionCreators,
      caseReducers: u.sliceCaseReducersByName,
      getInitialState: S,
      ...p(o),
      injectInto(h, { reducerPath: w, ...x } = {}) {
        const E = w ?? o;
        return (
          h.inject({ reducerPath: E, reducer: _ }, x), { ...g, ...p(E, !0) }
        );
      },
    };
    return g;
  };
}
function Bb(e, t, n, r) {
  function i(s, ...o) {
    let l = t(s);
    return typeof l > "u" && r && (l = n()), e(l, ...o);
  }
  return (i.unwrapped = e), i;
}
var Vb = $b();
function Hb() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: n,
        };
      },
      asyncThunk: e,
    }
  );
}
function Wb({ type: e, reducerName: t, createNotation: n }, r, i) {
  let s, o;
  if ("reducer" in r) {
    if (n && !qb(r)) throw new Error(Ae(17));
    (s = r.reducer), (o = r.prepare);
  } else s = r;
  i.addCase(e, s)
    .exposeCaseReducer(t, s)
    .exposeAction(t, o ? jr(e, o) : jr(e));
}
function Gb(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function qb(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Kb({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw new Error(Ae(18));
  const {
      payloadCreator: s,
      fulfilled: o,
      pending: l,
      rejected: a,
      settled: u,
      options: c,
    } = n,
    d = i(e, s, c);
  r.exposeAction(t, d),
    o && r.addCase(d.fulfilled, o),
    l && r.addCase(d.pending, l),
    a && r.addCase(d.rejected, a),
    u && r.addMatcher(d.settled, u),
    r.exposeCaseReducer(t, {
      fulfilled: o || Ps,
      pending: l || Ps,
      rejected: a || Ps,
      settled: u || Ps,
    });
}
function Ps() {}
var Xb = (e, t) => {
    if (typeof e != "function") throw new Error(Ae(32));
  },
  sd = "listenerMiddleware",
  Yb = (e) => {
    let { type: t, actionCreator: n, matcher: r, predicate: i, effect: s } = e;
    if (t) i = jr(t).match;
    else if (n) (t = n.type), (i = n.match);
    else if (r) i = r;
    else if (!i) throw new Error(Ae(21));
    return Xb(s), { predicate: i, type: t, effect: s };
  },
  Qb = Object.assign(
    (e) => {
      const { type: t, predicate: n, effect: r } = Yb(e);
      return {
        id: Ub(),
        effect: r,
        type: t,
        predicate: n,
        pending: new Set(),
        unsubscribe: () => {
          throw new Error(Ae(22));
        },
      };
    },
    { withTypes: () => Qb }
  ),
  Jb = Object.assign(jr(`${sd}/add`), { withTypes: () => Jb });
jr(`${sd}/removeAll`);
var Zb = Object.assign(jr(`${sd}/remove`), { withTypes: () => Zb });
function Ae(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const eP = { currentUser: null, error: null, loading: !1 },
  Kv = Vb({
    name: "user",
    initialState: eP,
    reducers: {
      signInStart: (e) => {
        e.loading = !0;
      },
      signInSuccess: (e, t) => {
        (e.currentUser = t.payload), (e.loading = !1), (e.error = null);
      },
      signInFailure: (e, t) => {
        (e.error = t.payload), (e.loading = !1);
      },
      updateUserStart: (e) => {
        e.loading = !0;
      },
      updateUserSuccess: (e, t) => {
        (e.currentUser = t.payload), (e.error = null), (e.loading = !1);
      },
      updateUserFailure: (e, t) => {
        (e.error = t.payload), (e.loading = !1);
      },
      deleteUserStart: (e) => {
        e.loading = !0;
      },
      deleteUserSuccess: (e, t) => {
        (e.currentUser = null), (e.error = null), (e.loading = !1);
      },
      deleteUserFailure: (e, t) => {
        (e.error = t.payload), (e.loading = !1);
      },
      signoutUserStart: (e) => {
        e.loading = !0;
      },
      signoutUserSuccess: (e, t) => {
        (e.currentUser = null), (e.error = null), (e.loading = !1);
      },
      signoutUserFailure: (e, t) => {
        (e.error = t.payload), (e.loading = !1);
      },
    },
  }),
  {
    signInStart: tP,
    signInSuccess: Xv,
    signInFailure: Dp,
    updateUserStart: nP,
    updateUserSuccess: rP,
    updateUserFailure: Up,
    deleteUserStart: iP,
    deleteUserSuccess: zp,
    deleteUserFailure: Is,
    signoutUserStart: sP,
    signoutUserSuccess: $k,
    signoutUserFailure: Bk,
  } = Kv.actions,
  oP = Kv.reducer;
function Yv() {
  const e = Ho(),
    t = Bt(),
    n = async () => {
      try {
        const r = new bt(),
          i = TC(ya),
          s = await LT(i, r),
          l = await (
            await fetch("/api/auth/google", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: s.user.displayName,
                email: s.user.email,
                photo: s.user.photoURL,
              }),
            })
          ).json();
        e(Xv(l)), t("/");
      } catch (r) {
        console.log("Could not sign in with the google", r);
      }
    };
  return m.jsx("button", {
    onClick: n,
    type: "button",
    className: `bg-red-700 text-white p-3 rounded-lg 
    uppercase hover:opacity-95`,
    children: "Continue With Google",
  });
}
function aP() {
  const [e, t] = C.useState({}),
    [n, r] = C.useState(null),
    [i, s] = C.useState(!1),
    o = Bt(),
    l = (u) => {
      t({ ...e, [u.target.id]: u.target.value });
    },
    a = async (u) => {
      u.preventDefault();
      try {
        s(!0);
        const d = await (
          await fetch("/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(e),
          })
        ).json();
        if (d.success === !1) {
          r(d.message), s(!1);
          return;
        }
        s(!1), r(null), o("/sign-in");
      } catch (c) {
        s(!1), r(c.message);
      }
      console.log(n);
    };
  return m.jsxs("div", {
    className: "p-3 max-w-lg mx-auto",
    children: [
      m.jsx("h1", {
        className: "text-3xl text-center font-semibold my-7",
        children: "Sign Up",
      }),
      m.jsxs("form", {
        onSubmit: a,
        className: "flex flex-col gap-4",
        children: [
          m.jsx("input", {
            type: "text",
            placeholder: "Username",
            className: "border p-3 rounded-lg",
            id: "username",
            onChange: l,
          }),
          m.jsx("input", {
            type: "email",
            placeholder: "E-mail",
            className: "border p-3 rounded-lg",
            id: "email",
            onChange: l,
          }),
          m.jsx("input", {
            type: "password",
            placeholder: "Password",
            className: "border p-3 rounded-lg",
            id: "password",
            onChange: l,
          }),
          m.jsx("button", {
            disabled: i,
            className:
              "bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80",
            children: i ? "Loading ..." : "Sign Up",
          }),
          m.jsx(Yv, {}),
        ],
      }),
      m.jsxs("div", {
        className: "flex gap-2 mt-5",
        children: [
          m.jsx("p", { children: "Have an Account?" }),
          m.jsx(we, {
            to: "/sign-in",
            children: m.jsx("span", {
              className: "text-blue-700",
              children: "Sign In",
            }),
          }),
        ],
      }),
      n && m.jsx("p", { className: "text-red-500 mt-5", children: n }),
    ],
  });
}
function lP() {
  const [e, t] = C.useState({}),
    { loading: n, error: r } = er((a) => a.user),
    i = Bt(),
    s = Ho();
  console.log(r);
  const o = (a) => {
      t({ ...e, [a.target.id]: a.target.value });
    },
    l = async (a) => {
      a.preventDefault();
      try {
        s(tP());
        const c = await (
          await fetch("/api/auth/signin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(e),
          })
        ).json();
        if (c.success === !1) {
          s(Dp(c.message));
          return;
        }
        s(Xv(c)), i("/");
      } catch (u) {
        s(Dp(u.message));
        return;
      }
    };
  return m.jsxs("div", {
    className: "p-3 max-w-lg mx-auto",
    children: [
      m.jsx("h1", {
        className: "text-3xl text-center font-semibold my-7",
        children: "Sign In",
      }),
      m.jsxs("form", {
        onSubmit: l,
        className: "flex flex-col gap-4",
        children: [
          m.jsx("input", {
            type: "email",
            placeholder: "E-mail",
            className: "border p-3 rounded-lg",
            id: "email",
            onChange: o,
          }),
          m.jsx("input", {
            type: "password",
            placeholder: "Password",
            className: "border p-3 rounded-lg",
            id: "password",
            onChange: o,
          }),
          m.jsx("button", {
            disabled: n,
            className:
              "bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80",
            children: n ? "Loading ..." : "Sign In",
          }),
          m.jsx(Yv, {}),
        ],
      }),
      m.jsxs("div", {
        className: "flex gap-2 mt-5",
        children: [
          m.jsx("p", { children: "Dont Have an Account?" }),
          m.jsx(we, {
            to: "/sign-up",
            children: m.jsx("span", {
              className: "text-blue-700",
              children: "Sign Up",
            }),
          }),
        ],
      }),
      r && m.jsx("p", { className: "text-red-500 mt-5", children: r }),
    ],
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Qv = "firebasestorage.googleapis.com",
  Jv = "storageBucket",
  uP = 2 * 60 * 1e3,
  cP = 10 * 60 * 1e3,
  dP = 1e3;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class te extends Vt {
  constructor(t, n, r = 0) {
    super(ml(t), `Firebase Storage: ${n} (${ml(t)})`),
      (this.status_ = r),
      (this.customData = { serverResponse: null }),
      (this._baseMessage = this.message),
      Object.setPrototypeOf(this, te.prototype);
  }
  get status() {
    return this.status_;
  }
  set status(t) {
    this.status_ = t;
  }
  _codeEquals(t) {
    return ml(t) === this.code;
  }
  get serverResponse() {
    return this.customData.serverResponse;
  }
  set serverResponse(t) {
    (this.customData.serverResponse = t),
      this.customData.serverResponse
        ? (this.message = `${this._baseMessage}
${this.customData.serverResponse}`)
        : (this.message = this._baseMessage);
  }
}
var X;
(function (e) {
  (e.UNKNOWN = "unknown"),
    (e.OBJECT_NOT_FOUND = "object-not-found"),
    (e.BUCKET_NOT_FOUND = "bucket-not-found"),
    (e.PROJECT_NOT_FOUND = "project-not-found"),
    (e.QUOTA_EXCEEDED = "quota-exceeded"),
    (e.UNAUTHENTICATED = "unauthenticated"),
    (e.UNAUTHORIZED = "unauthorized"),
    (e.UNAUTHORIZED_APP = "unauthorized-app"),
    (e.RETRY_LIMIT_EXCEEDED = "retry-limit-exceeded"),
    (e.INVALID_CHECKSUM = "invalid-checksum"),
    (e.CANCELED = "canceled"),
    (e.INVALID_EVENT_NAME = "invalid-event-name"),
    (e.INVALID_URL = "invalid-url"),
    (e.INVALID_DEFAULT_BUCKET = "invalid-default-bucket"),
    (e.NO_DEFAULT_BUCKET = "no-default-bucket"),
    (e.CANNOT_SLICE_BLOB = "cannot-slice-blob"),
    (e.SERVER_FILE_WRONG_SIZE = "server-file-wrong-size"),
    (e.NO_DOWNLOAD_URL = "no-download-url"),
    (e.INVALID_ARGUMENT = "invalid-argument"),
    (e.INVALID_ARGUMENT_COUNT = "invalid-argument-count"),
    (e.APP_DELETED = "app-deleted"),
    (e.INVALID_ROOT_OPERATION = "invalid-root-operation"),
    (e.INVALID_FORMAT = "invalid-format"),
    (e.INTERNAL_ERROR = "internal-error"),
    (e.UNSUPPORTED_ENVIRONMENT = "unsupported-environment");
})(X || (X = {}));
function ml(e) {
  return "storage/" + e;
}
function od() {
  const e =
    "An unknown error occurred, please check the error payload for server response.";
  return new te(X.UNKNOWN, e);
}
function fP(e) {
  return new te(X.OBJECT_NOT_FOUND, "Object '" + e + "' does not exist.");
}
function pP(e) {
  return new te(
    X.QUOTA_EXCEEDED,
    "Quota for bucket '" +
      e +
      "' exceeded, please view quota on https://firebase.google.com/pricing/."
  );
}
function hP() {
  const e =
    "User is not authenticated, please authenticate using Firebase Authentication and try again.";
  return new te(X.UNAUTHENTICATED, e);
}
function mP() {
  return new te(
    X.UNAUTHORIZED_APP,
    "This app does not have permission to access Firebase Storage on this project."
  );
}
function gP(e) {
  return new te(
    X.UNAUTHORIZED,
    "User does not have permission to access '" + e + "'."
  );
}
function Zv() {
  return new te(
    X.RETRY_LIMIT_EXCEEDED,
    "Max retry time for operation exceeded, please try again."
  );
}
function ey() {
  return new te(X.CANCELED, "User canceled the upload/download.");
}
function vP(e) {
  return new te(X.INVALID_URL, "Invalid URL '" + e + "'.");
}
function yP(e) {
  return new te(
    X.INVALID_DEFAULT_BUCKET,
    "Invalid default bucket '" + e + "'."
  );
}
function wP() {
  return new te(
    X.NO_DEFAULT_BUCKET,
    "No default bucket found. Did you set the '" +
      Jv +
      "' property when initializing the app?"
  );
}
function ty() {
  return new te(
    X.CANNOT_SLICE_BLOB,
    "Cannot slice blob for upload. Please retry the upload."
  );
}
function _P() {
  return new te(
    X.SERVER_FILE_WRONG_SIZE,
    "Server recorded incorrect upload file size, please retry the upload."
  );
}
function SP() {
  return new te(
    X.NO_DOWNLOAD_URL,
    "The given file does not have any download URLs."
  );
}
function xP(e) {
  return new te(
    X.UNSUPPORTED_ENVIRONMENT,
    `${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`
  );
}
function Mu(e) {
  return new te(X.INVALID_ARGUMENT, e);
}
function ny() {
  return new te(X.APP_DELETED, "The Firebase app was deleted.");
}
function EP(e) {
  return new te(
    X.INVALID_ROOT_OPERATION,
    "The operation '" +
      e +
      "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png')."
  );
}
function yi(e, t) {
  return new te(
    X.INVALID_FORMAT,
    "String does not match format '" + e + "': " + t
  );
}
function ti(e) {
  throw new te(X.INTERNAL_ERROR, "Internal error: " + e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fe {
  constructor(t, n) {
    (this.bucket = t), (this.path_ = n);
  }
  get path() {
    return this.path_;
  }
  get isRoot() {
    return this.path.length === 0;
  }
  fullServerUrl() {
    const t = encodeURIComponent;
    return "/b/" + t(this.bucket) + "/o/" + t(this.path);
  }
  bucketOnlyServerUrl() {
    return "/b/" + encodeURIComponent(this.bucket) + "/o";
  }
  static makeFromBucketSpec(t, n) {
    let r;
    try {
      r = Fe.makeFromUrl(t, n);
    } catch {
      return new Fe(t, "");
    }
    if (r.path === "") return r;
    throw yP(t);
  }
  static makeFromUrl(t, n) {
    let r = null;
    const i = "([A-Za-z0-9.\\-_]+)";
    function s(w) {
      w.path.charAt(w.path.length - 1) === "/" &&
        (w.path_ = w.path_.slice(0, -1));
    }
    const o = "(/(.*))?$",
      l = new RegExp("^gs://" + i + o, "i"),
      a = { bucket: 1, path: 3 };
    function u(w) {
      w.path_ = decodeURIComponent(w.path);
    }
    const c = "v[A-Za-z0-9_]+",
      d = n.replace(/[.]/g, "\\."),
      f = "(/([^?#]*).*)?$",
      v = new RegExp(`^https?://${d}/${c}/b/${i}/o${f}`, "i"),
      y = { bucket: 1, path: 3 },
      _ = n === Qv ? "(?:storage.googleapis.com|storage.cloud.google.com)" : n,
      S = "([^?#]*)",
      p = new RegExp(`^https?://${_}/${i}/${S}`, "i"),
      h = [
        { regex: l, indices: a, postModify: s },
        { regex: v, indices: y, postModify: u },
        { regex: p, indices: { bucket: 1, path: 2 }, postModify: u },
      ];
    for (let w = 0; w < h.length; w++) {
      const x = h[w],
        E = x.regex.exec(t);
      if (E) {
        const P = E[x.indices.bucket];
        let b = E[x.indices.path];
        b || (b = ""), (r = new Fe(P, b)), x.postModify(r);
        break;
      }
    }
    if (r == null) throw vP(t);
    return r;
  }
}
class TP {
  constructor(t) {
    this.promise_ = Promise.reject(t);
  }
  getPromise() {
    return this.promise_;
  }
  cancel(t = !1) {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function CP(e, t, n) {
  let r = 1,
    i = null,
    s = null,
    o = !1,
    l = 0;
  function a() {
    return l === 2;
  }
  let u = !1;
  function c(...S) {
    u || ((u = !0), t.apply(null, S));
  }
  function d(S) {
    i = setTimeout(() => {
      (i = null), e(v, a());
    }, S);
  }
  function f() {
    s && clearTimeout(s);
  }
  function v(S, ...p) {
    if (u) {
      f();
      return;
    }
    if (S) {
      f(), c.call(null, S, ...p);
      return;
    }
    if (a() || o) {
      f(), c.call(null, S, ...p);
      return;
    }
    r < 64 && (r *= 2);
    let h;
    l === 1 ? ((l = 2), (h = 0)) : (h = (r + Math.random()) * 1e3), d(h);
  }
  let y = !1;
  function _(S) {
    y ||
      ((y = !0),
      f(),
      !u &&
        (i !== null ? (S || (l = 2), clearTimeout(i), d(0)) : S || (l = 1)));
  }
  return (
    d(0),
    (s = setTimeout(() => {
      (o = !0), _(!0);
    }, n)),
    _
  );
}
function bP(e) {
  e(!1);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function PP(e) {
  return e !== void 0;
}
function IP(e) {
  return typeof e == "function";
}
function kP(e) {
  return typeof e == "object" && !Array.isArray(e);
}
function Ea(e) {
  return typeof e == "string" || e instanceof String;
}
function Fp(e) {
  return ad() && e instanceof Blob;
}
function ad() {
  return typeof Blob < "u";
}
function $p(e, t, n, r) {
  if (r < t) throw Mu(`Invalid value for '${e}'. Expected ${t} or greater.`);
  if (r > n) throw Mu(`Invalid value for '${e}'. Expected ${n} or less.`);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ts(e, t, n) {
  let r = t;
  return n == null && (r = `https://${t}`), `${n}://${r}/v0${e}`;
}
function ry(e) {
  const t = encodeURIComponent;
  let n = "?";
  for (const r in e)
    if (e.hasOwnProperty(r)) {
      const i = t(r) + "=" + t(e[r]);
      n = n + i + "&";
    }
  return (n = n.slice(0, -1)), n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Fn;
(function (e) {
  (e[(e.NO_ERROR = 0)] = "NO_ERROR"),
    (e[(e.NETWORK_ERROR = 1)] = "NETWORK_ERROR"),
    (e[(e.ABORT = 2)] = "ABORT");
})(Fn || (Fn = {}));
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function iy(e, t) {
  const n = e >= 500 && e < 600,
    i = [408, 429].indexOf(e) !== -1,
    s = t.indexOf(e) !== -1;
  return n || i || s;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class NP {
  constructor(t, n, r, i, s, o, l, a, u, c, d, f = !0) {
    (this.url_ = t),
      (this.method_ = n),
      (this.headers_ = r),
      (this.body_ = i),
      (this.successCodes_ = s),
      (this.additionalRetryCodes_ = o),
      (this.callback_ = l),
      (this.errorCallback_ = a),
      (this.timeout_ = u),
      (this.progressCallback_ = c),
      (this.connectionFactory_ = d),
      (this.retry = f),
      (this.pendingConnection_ = null),
      (this.backoffId_ = null),
      (this.canceled_ = !1),
      (this.appDelete_ = !1),
      (this.promise_ = new Promise((v, y) => {
        (this.resolve_ = v), (this.reject_ = y), this.start_();
      }));
  }
  start_() {
    const t = (r, i) => {
        if (i) {
          r(!1, new ks(!1, null, !0));
          return;
        }
        const s = this.connectionFactory_();
        this.pendingConnection_ = s;
        const o = (l) => {
          const a = l.loaded,
            u = l.lengthComputable ? l.total : -1;
          this.progressCallback_ !== null && this.progressCallback_(a, u);
        };
        this.progressCallback_ !== null && s.addUploadProgressListener(o),
          s
            .send(this.url_, this.method_, this.body_, this.headers_)
            .then(() => {
              this.progressCallback_ !== null &&
                s.removeUploadProgressListener(o),
                (this.pendingConnection_ = null);
              const l = s.getErrorCode() === Fn.NO_ERROR,
                a = s.getStatus();
              if (!l || (iy(a, this.additionalRetryCodes_) && this.retry)) {
                const c = s.getErrorCode() === Fn.ABORT;
                r(!1, new ks(!1, null, c));
                return;
              }
              const u = this.successCodes_.indexOf(a) !== -1;
              r(!0, new ks(u, s));
            });
      },
      n = (r, i) => {
        const s = this.resolve_,
          o = this.reject_,
          l = i.connection;
        if (i.wasSuccessCode)
          try {
            const a = this.callback_(l, l.getResponse());
            PP(a) ? s(a) : s();
          } catch (a) {
            o(a);
          }
        else if (l !== null) {
          const a = od();
          (a.serverResponse = l.getErrorText()),
            this.errorCallback_ ? o(this.errorCallback_(l, a)) : o(a);
        } else if (i.canceled) {
          const a = this.appDelete_ ? ny() : ey();
          o(a);
        } else {
          const a = Zv();
          o(a);
        }
      };
    this.canceled_
      ? n(!1, new ks(!1, null, !0))
      : (this.backoffId_ = CP(t, n, this.timeout_));
  }
  getPromise() {
    return this.promise_;
  }
  cancel(t) {
    (this.canceled_ = !0),
      (this.appDelete_ = t || !1),
      this.backoffId_ !== null && bP(this.backoffId_),
      this.pendingConnection_ !== null && this.pendingConnection_.abort();
  }
}
class ks {
  constructor(t, n, r) {
    (this.wasSuccessCode = t), (this.connection = n), (this.canceled = !!r);
  }
}
function OP(e, t) {
  t !== null && t.length > 0 && (e.Authorization = "Firebase " + t);
}
function RP(e, t) {
  e["X-Firebase-Storage-Version"] = "webjs/" + (t ?? "AppManager");
}
function LP(e, t) {
  t && (e["X-Firebase-GMPID"] = t);
}
function AP(e, t) {
  t !== null && (e["X-Firebase-AppCheck"] = t);
}
function MP(e, t, n, r, i, s, o = !0) {
  const l = ry(e.urlParams),
    a = e.url + l,
    u = Object.assign({}, e.headers);
  return (
    LP(u, t),
    OP(u, n),
    RP(u, s),
    AP(u, r),
    new NP(
      a,
      e.method,
      u,
      e.body,
      e.successCodes,
      e.additionalRetryCodes,
      e.handler,
      e.errorHandler,
      e.timeout,
      e.progressCallback,
      i,
      o
    )
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function jP() {
  return typeof BlobBuilder < "u"
    ? BlobBuilder
    : typeof WebKitBlobBuilder < "u"
    ? WebKitBlobBuilder
    : void 0;
}
function DP(...e) {
  const t = jP();
  if (t !== void 0) {
    const n = new t();
    for (let r = 0; r < e.length; r++) n.append(e[r]);
    return n.getBlob();
  } else {
    if (ad()) return new Blob(e);
    throw new te(
      X.UNSUPPORTED_ENVIRONMENT,
      "This browser doesn't seem to support creating Blobs"
    );
  }
}
function UP(e, t, n) {
  return e.webkitSlice
    ? e.webkitSlice(t, n)
    : e.mozSlice
    ? e.mozSlice(t, n)
    : e.slice
    ? e.slice(t, n)
    : null;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function zP(e) {
  if (typeof atob > "u") throw xP("base-64");
  return atob(e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ht = {
  RAW: "raw",
  BASE64: "base64",
  BASE64URL: "base64url",
  DATA_URL: "data_url",
};
class gl {
  constructor(t, n) {
    (this.data = t), (this.contentType = n || null);
  }
}
function FP(e, t) {
  switch (e) {
    case ht.RAW:
      return new gl(sy(t));
    case ht.BASE64:
    case ht.BASE64URL:
      return new gl(oy(e, t));
    case ht.DATA_URL:
      return new gl(BP(t), VP(t));
  }
  throw od();
}
function sy(e) {
  const t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    if (r <= 127) t.push(r);
    else if (r <= 2047) t.push(192 | (r >> 6), 128 | (r & 63));
    else if ((r & 64512) === 55296)
      if (!(n < e.length - 1 && (e.charCodeAt(n + 1) & 64512) === 56320))
        t.push(239, 191, 189);
      else {
        const s = r,
          o = e.charCodeAt(++n);
        (r = 65536 | ((s & 1023) << 10) | (o & 1023)),
          t.push(
            240 | (r >> 18),
            128 | ((r >> 12) & 63),
            128 | ((r >> 6) & 63),
            128 | (r & 63)
          );
      }
    else
      (r & 64512) === 56320
        ? t.push(239, 191, 189)
        : t.push(224 | (r >> 12), 128 | ((r >> 6) & 63), 128 | (r & 63));
  }
  return new Uint8Array(t);
}
function $P(e) {
  let t;
  try {
    t = decodeURIComponent(e);
  } catch {
    throw yi(ht.DATA_URL, "Malformed data URL.");
  }
  return sy(t);
}
function oy(e, t) {
  switch (e) {
    case ht.BASE64: {
      const i = t.indexOf("-") !== -1,
        s = t.indexOf("_") !== -1;
      if (i || s)
        throw yi(
          e,
          "Invalid character '" +
            (i ? "-" : "_") +
            "' found: is it base64url encoded?"
        );
      break;
    }
    case ht.BASE64URL: {
      const i = t.indexOf("+") !== -1,
        s = t.indexOf("/") !== -1;
      if (i || s)
        throw yi(
          e,
          "Invalid character '" +
            (i ? "+" : "/") +
            "' found: is it base64 encoded?"
        );
      t = t.replace(/-/g, "+").replace(/_/g, "/");
      break;
    }
  }
  let n;
  try {
    n = zP(t);
  } catch (i) {
    throw i.message.includes("polyfill") ? i : yi(e, "Invalid character found");
  }
  const r = new Uint8Array(n.length);
  for (let i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
  return r;
}
class ay {
  constructor(t) {
    (this.base64 = !1), (this.contentType = null);
    const n = t.match(/^data:([^,]+)?,/);
    if (n === null)
      throw yi(
        ht.DATA_URL,
        "Must be formatted 'data:[<mediatype>][;base64],<data>"
      );
    const r = n[1] || null;
    r != null &&
      ((this.base64 = HP(r, ";base64")),
      (this.contentType = this.base64 ? r.substring(0, r.length - 7) : r)),
      (this.rest = t.substring(t.indexOf(",") + 1));
  }
}
function BP(e) {
  const t = new ay(e);
  return t.base64 ? oy(ht.BASE64, t.rest) : $P(t.rest);
}
function VP(e) {
  return new ay(e).contentType;
}
function HP(e, t) {
  return e.length >= t.length ? e.substring(e.length - t.length) === t : !1;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zt {
  constructor(t, n) {
    let r = 0,
      i = "";
    Fp(t)
      ? ((this.data_ = t), (r = t.size), (i = t.type))
      : t instanceof ArrayBuffer
      ? (n
          ? (this.data_ = new Uint8Array(t))
          : ((this.data_ = new Uint8Array(t.byteLength)),
            this.data_.set(new Uint8Array(t))),
        (r = this.data_.length))
      : t instanceof Uint8Array &&
        (n
          ? (this.data_ = t)
          : ((this.data_ = new Uint8Array(t.length)), this.data_.set(t)),
        (r = t.length)),
      (this.size_ = r),
      (this.type_ = i);
  }
  size() {
    return this.size_;
  }
  type() {
    return this.type_;
  }
  slice(t, n) {
    if (Fp(this.data_)) {
      const r = this.data_,
        i = UP(r, t, n);
      return i === null ? null : new Zt(i);
    } else {
      const r = new Uint8Array(this.data_.buffer, t, n - t);
      return new Zt(r, !0);
    }
  }
  static getBlob(...t) {
    if (ad()) {
      const n = t.map((r) => (r instanceof Zt ? r.data_ : r));
      return new Zt(DP.apply(null, n));
    } else {
      const n = t.map((o) => (Ea(o) ? FP(ht.RAW, o).data : o.data_));
      let r = 0;
      n.forEach((o) => {
        r += o.byteLength;
      });
      const i = new Uint8Array(r);
      let s = 0;
      return (
        n.forEach((o) => {
          for (let l = 0; l < o.length; l++) i[s++] = o[l];
        }),
        new Zt(i, !0)
      );
    }
  }
  uploadData() {
    return this.data_;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ly(e) {
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return null;
  }
  return kP(t) ? t : null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function WP(e) {
  if (e.length === 0) return null;
  const t = e.lastIndexOf("/");
  return t === -1 ? "" : e.slice(0, t);
}
function GP(e, t) {
  const n = t
    .split("/")
    .filter((r) => r.length > 0)
    .join("/");
  return e.length === 0 ? n : e + "/" + n;
}
function uy(e) {
  const t = e.lastIndexOf("/", e.length - 2);
  return t === -1 ? e : e.slice(t + 1);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function qP(e, t) {
  return t;
}
class xe {
  constructor(t, n, r, i) {
    (this.server = t),
      (this.local = n || t),
      (this.writable = !!r),
      (this.xform = i || qP);
  }
}
let Ns = null;
function KP(e) {
  return !Ea(e) || e.length < 2 ? e : uy(e);
}
function cy() {
  if (Ns) return Ns;
  const e = [];
  e.push(new xe("bucket")),
    e.push(new xe("generation")),
    e.push(new xe("metageneration")),
    e.push(new xe("name", "fullPath", !0));
  function t(s, o) {
    return KP(o);
  }
  const n = new xe("name");
  (n.xform = t), e.push(n);
  function r(s, o) {
    return o !== void 0 ? Number(o) : o;
  }
  const i = new xe("size");
  return (
    (i.xform = r),
    e.push(i),
    e.push(new xe("timeCreated")),
    e.push(new xe("updated")),
    e.push(new xe("md5Hash", null, !0)),
    e.push(new xe("cacheControl", null, !0)),
    e.push(new xe("contentDisposition", null, !0)),
    e.push(new xe("contentEncoding", null, !0)),
    e.push(new xe("contentLanguage", null, !0)),
    e.push(new xe("contentType", null, !0)),
    e.push(new xe("metadata", "customMetadata", !0)),
    (Ns = e),
    Ns
  );
}
function XP(e, t) {
  function n() {
    const r = e.bucket,
      i = e.fullPath,
      s = new Fe(r, i);
    return t._makeStorageReference(s);
  }
  Object.defineProperty(e, "ref", { get: n });
}
function YP(e, t, n) {
  const r = {};
  r.type = "file";
  const i = n.length;
  for (let s = 0; s < i; s++) {
    const o = n[s];
    r[o.local] = o.xform(r, t[o.server]);
  }
  return XP(r, e), r;
}
function dy(e, t, n) {
  const r = ly(t);
  return r === null ? null : YP(e, r, n);
}
function QP(e, t, n, r) {
  const i = ly(t);
  if (i === null || !Ea(i.downloadTokens)) return null;
  const s = i.downloadTokens;
  if (s.length === 0) return null;
  const o = encodeURIComponent;
  return s.split(",").map((u) => {
    const c = e.bucket,
      d = e.fullPath,
      f = "/b/" + o(c) + "/o/" + o(d),
      v = ts(f, n, r),
      y = ry({ alt: "media", token: u });
    return v + y;
  })[0];
}
function fy(e, t) {
  const n = {},
    r = t.length;
  for (let i = 0; i < r; i++) {
    const s = t[i];
    s.writable && (n[s.server] = e[s.local]);
  }
  return JSON.stringify(n);
}
class Wr {
  constructor(t, n, r, i) {
    (this.url = t),
      (this.method = n),
      (this.handler = r),
      (this.timeout = i),
      (this.urlParams = {}),
      (this.headers = {}),
      (this.body = null),
      (this.errorHandler = null),
      (this.progressCallback = null),
      (this.successCodes = [200]),
      (this.additionalRetryCodes = []);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function At(e) {
  if (!e) throw od();
}
function ld(e, t) {
  function n(r, i) {
    const s = dy(e, i, t);
    return At(s !== null), s;
  }
  return n;
}
function JP(e, t) {
  function n(r, i) {
    const s = dy(e, i, t);
    return At(s !== null), QP(s, i, e.host, e._protocol);
  }
  return n;
}
function ns(e) {
  function t(n, r) {
    let i;
    return (
      n.getStatus() === 401
        ? n.getErrorText().includes("Firebase App Check token is invalid")
          ? (i = mP())
          : (i = hP())
        : n.getStatus() === 402
        ? (i = pP(e.bucket))
        : n.getStatus() === 403
        ? (i = gP(e.path))
        : (i = r),
      (i.status = n.getStatus()),
      (i.serverResponse = r.serverResponse),
      i
    );
  }
  return t;
}
function py(e) {
  const t = ns(e);
  function n(r, i) {
    let s = t(r, i);
    return (
      r.getStatus() === 404 && (s = fP(e.path)),
      (s.serverResponse = i.serverResponse),
      s
    );
  }
  return n;
}
function ZP(e, t, n) {
  const r = t.fullServerUrl(),
    i = ts(r, e.host, e._protocol),
    s = "GET",
    o = e.maxOperationRetryTime,
    l = new Wr(i, s, ld(e, n), o);
  return (l.errorHandler = py(t)), l;
}
function eI(e, t, n) {
  const r = t.fullServerUrl(),
    i = ts(r, e.host, e._protocol),
    s = "GET",
    o = e.maxOperationRetryTime,
    l = new Wr(i, s, JP(e, n), o);
  return (l.errorHandler = py(t)), l;
}
function tI(e, t) {
  return (e && e.contentType) || (t && t.type()) || "application/octet-stream";
}
function hy(e, t, n) {
  const r = Object.assign({}, n);
  return (
    (r.fullPath = e.path),
    (r.size = t.size()),
    r.contentType || (r.contentType = tI(null, t)),
    r
  );
}
function nI(e, t, n, r, i) {
  const s = t.bucketOnlyServerUrl(),
    o = { "X-Goog-Upload-Protocol": "multipart" };
  function l() {
    let h = "";
    for (let w = 0; w < 2; w++) h = h + Math.random().toString().slice(2);
    return h;
  }
  const a = l();
  o["Content-Type"] = "multipart/related; boundary=" + a;
  const u = hy(t, r, i),
    c = fy(u, n),
    d =
      "--" +
      a +
      `\r
Content-Type: application/json; charset=utf-8\r
\r
` +
      c +
      `\r
--` +
      a +
      `\r
Content-Type: ` +
      u.contentType +
      `\r
\r
`,
    f =
      `\r
--` +
      a +
      "--",
    v = Zt.getBlob(d, r, f);
  if (v === null) throw ty();
  const y = { name: u.fullPath },
    _ = ts(s, e.host, e._protocol),
    S = "POST",
    p = e.maxUploadRetryTime,
    g = new Wr(_, S, ld(e, n), p);
  return (
    (g.urlParams = y),
    (g.headers = o),
    (g.body = v.uploadData()),
    (g.errorHandler = ns(t)),
    g
  );
}
class Yo {
  constructor(t, n, r, i) {
    (this.current = t),
      (this.total = n),
      (this.finalized = !!r),
      (this.metadata = i || null);
  }
}
function ud(e, t) {
  let n = null;
  try {
    n = e.getResponseHeader("X-Goog-Upload-Status");
  } catch {
    At(!1);
  }
  return At(!!n && (t || ["active"]).indexOf(n) !== -1), n;
}
function rI(e, t, n, r, i) {
  const s = t.bucketOnlyServerUrl(),
    o = hy(t, r, i),
    l = { name: o.fullPath },
    a = ts(s, e.host, e._protocol),
    u = "POST",
    c = {
      "X-Goog-Upload-Protocol": "resumable",
      "X-Goog-Upload-Command": "start",
      "X-Goog-Upload-Header-Content-Length": `${r.size()}`,
      "X-Goog-Upload-Header-Content-Type": o.contentType,
      "Content-Type": "application/json; charset=utf-8",
    },
    d = fy(o, n),
    f = e.maxUploadRetryTime;
  function v(_) {
    ud(_);
    let S;
    try {
      S = _.getResponseHeader("X-Goog-Upload-URL");
    } catch {
      At(!1);
    }
    return At(Ea(S)), S;
  }
  const y = new Wr(a, u, v, f);
  return (
    (y.urlParams = l),
    (y.headers = c),
    (y.body = d),
    (y.errorHandler = ns(t)),
    y
  );
}
function iI(e, t, n, r) {
  const i = { "X-Goog-Upload-Command": "query" };
  function s(u) {
    const c = ud(u, ["active", "final"]);
    let d = null;
    try {
      d = u.getResponseHeader("X-Goog-Upload-Size-Received");
    } catch {
      At(!1);
    }
    d || At(!1);
    const f = Number(d);
    return At(!isNaN(f)), new Yo(f, r.size(), c === "final");
  }
  const o = "POST",
    l = e.maxUploadRetryTime,
    a = new Wr(n, o, s, l);
  return (a.headers = i), (a.errorHandler = ns(t)), a;
}
const Bp = 256 * 1024;
function sI(e, t, n, r, i, s, o, l) {
  const a = new Yo(0, 0);
  if (
    (o
      ? ((a.current = o.current), (a.total = o.total))
      : ((a.current = 0), (a.total = r.size())),
    r.size() !== a.total)
  )
    throw _P();
  const u = a.total - a.current;
  let c = u;
  i > 0 && (c = Math.min(c, i));
  const d = a.current,
    f = d + c;
  let v = "";
  c === 0
    ? (v = "finalize")
    : u === c
    ? (v = "upload, finalize")
    : (v = "upload");
  const y = {
      "X-Goog-Upload-Command": v,
      "X-Goog-Upload-Offset": `${a.current}`,
    },
    _ = r.slice(d, f);
  if (_ === null) throw ty();
  function S(w, x) {
    const E = ud(w, ["active", "final"]),
      P = a.current + c,
      b = r.size();
    let I;
    return (
      E === "final" ? (I = ld(t, s)(w, x)) : (I = null),
      new Yo(P, b, E === "final", I)
    );
  }
  const p = "POST",
    g = t.maxUploadRetryTime,
    h = new Wr(n, p, S, g);
  return (
    (h.headers = y),
    (h.body = _.uploadData()),
    (h.progressCallback = l || null),
    (h.errorHandler = ns(e)),
    h
  );
}
const Ie = {
  RUNNING: "running",
  PAUSED: "paused",
  SUCCESS: "success",
  CANCELED: "canceled",
  ERROR: "error",
};
function vl(e) {
  switch (e) {
    case "running":
    case "pausing":
    case "canceling":
      return Ie.RUNNING;
    case "paused":
      return Ie.PAUSED;
    case "success":
      return Ie.SUCCESS;
    case "canceled":
      return Ie.CANCELED;
    case "error":
      return Ie.ERROR;
    default:
      return Ie.ERROR;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oI {
  constructor(t, n, r) {
    if (IP(t) || n != null || r != null)
      (this.next = t),
        (this.error = n ?? void 0),
        (this.complete = r ?? void 0);
    else {
      const s = t;
      (this.next = s.next),
        (this.error = s.error),
        (this.complete = s.complete);
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function nr(e) {
  return (...t) => {
    Promise.resolve().then(() => e(...t));
  };
}
class aI {
  constructor() {
    (this.sent_ = !1),
      (this.xhr_ = new XMLHttpRequest()),
      this.initXhr(),
      (this.errorCode_ = Fn.NO_ERROR),
      (this.sendPromise_ = new Promise((t) => {
        this.xhr_.addEventListener("abort", () => {
          (this.errorCode_ = Fn.ABORT), t();
        }),
          this.xhr_.addEventListener("error", () => {
            (this.errorCode_ = Fn.NETWORK_ERROR), t();
          }),
          this.xhr_.addEventListener("load", () => {
            t();
          });
      }));
  }
  send(t, n, r, i) {
    if (this.sent_) throw ti("cannot .send() more than once");
    if (((this.sent_ = !0), this.xhr_.open(n, t, !0), i !== void 0))
      for (const s in i)
        i.hasOwnProperty(s) && this.xhr_.setRequestHeader(s, i[s].toString());
    return (
      r !== void 0 ? this.xhr_.send(r) : this.xhr_.send(), this.sendPromise_
    );
  }
  getErrorCode() {
    if (!this.sent_) throw ti("cannot .getErrorCode() before sending");
    return this.errorCode_;
  }
  getStatus() {
    if (!this.sent_) throw ti("cannot .getStatus() before sending");
    try {
      return this.xhr_.status;
    } catch {
      return -1;
    }
  }
  getResponse() {
    if (!this.sent_) throw ti("cannot .getResponse() before sending");
    return this.xhr_.response;
  }
  getErrorText() {
    if (!this.sent_) throw ti("cannot .getErrorText() before sending");
    return this.xhr_.statusText;
  }
  abort() {
    this.xhr_.abort();
  }
  getResponseHeader(t) {
    return this.xhr_.getResponseHeader(t);
  }
  addUploadProgressListener(t) {
    this.xhr_.upload != null &&
      this.xhr_.upload.addEventListener("progress", t);
  }
  removeUploadProgressListener(t) {
    this.xhr_.upload != null &&
      this.xhr_.upload.removeEventListener("progress", t);
  }
}
class lI extends aI {
  initXhr() {
    this.xhr_.responseType = "text";
  }
}
function rr() {
  return new lI();
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uI {
  constructor(t, n, r = null) {
    (this._transferred = 0),
      (this._needToFetchStatus = !1),
      (this._needToFetchMetadata = !1),
      (this._observers = []),
      (this._error = void 0),
      (this._uploadUrl = void 0),
      (this._request = void 0),
      (this._chunkMultiplier = 1),
      (this._resolve = void 0),
      (this._reject = void 0),
      (this._ref = t),
      (this._blob = n),
      (this._metadata = r),
      (this._mappings = cy()),
      (this._resumable = this._shouldDoResumable(this._blob)),
      (this._state = "running"),
      (this._errorHandler = (i) => {
        if (
          ((this._request = void 0),
          (this._chunkMultiplier = 1),
          i._codeEquals(X.CANCELED))
        )
          (this._needToFetchStatus = !0), this.completeTransitions_();
        else {
          const s = this.isExponentialBackoffExpired();
          if (iy(i.status, []))
            if (s) i = Zv();
            else {
              (this.sleepTime = Math.max(this.sleepTime * 2, dP)),
                (this._needToFetchStatus = !0),
                this.completeTransitions_();
              return;
            }
          (this._error = i), this._transition("error");
        }
      }),
      (this._metadataErrorHandler = (i) => {
        (this._request = void 0),
          i._codeEquals(X.CANCELED)
            ? this.completeTransitions_()
            : ((this._error = i), this._transition("error"));
      }),
      (this.sleepTime = 0),
      (this.maxSleepTime = this._ref.storage.maxUploadRetryTime),
      (this._promise = new Promise((i, s) => {
        (this._resolve = i), (this._reject = s), this._start();
      })),
      this._promise.then(null, () => {});
  }
  isExponentialBackoffExpired() {
    return this.sleepTime > this.maxSleepTime;
  }
  _makeProgressCallback() {
    const t = this._transferred;
    return (n) => this._updateProgress(t + n);
  }
  _shouldDoResumable(t) {
    return t.size() > 256 * 1024;
  }
  _start() {
    this._state === "running" &&
      this._request === void 0 &&
      (this._resumable
        ? this._uploadUrl === void 0
          ? this._createResumable()
          : this._needToFetchStatus
          ? this._fetchStatus()
          : this._needToFetchMetadata
          ? this._fetchMetadata()
          : (this.pendingTimeout = setTimeout(() => {
              (this.pendingTimeout = void 0), this._continueUpload();
            }, this.sleepTime))
        : this._oneShotUpload());
  }
  _resolveToken(t) {
    Promise.all([
      this._ref.storage._getAuthToken(),
      this._ref.storage._getAppCheckToken(),
    ]).then(([n, r]) => {
      switch (this._state) {
        case "running":
          t(n, r);
          break;
        case "canceling":
          this._transition("canceled");
          break;
        case "pausing":
          this._transition("paused");
          break;
      }
    });
  }
  _createResumable() {
    this._resolveToken((t, n) => {
      const r = rI(
          this._ref.storage,
          this._ref._location,
          this._mappings,
          this._blob,
          this._metadata
        ),
        i = this._ref.storage._makeRequest(r, rr, t, n);
      (this._request = i),
        i.getPromise().then((s) => {
          (this._request = void 0),
            (this._uploadUrl = s),
            (this._needToFetchStatus = !1),
            this.completeTransitions_();
        }, this._errorHandler);
    });
  }
  _fetchStatus() {
    const t = this._uploadUrl;
    this._resolveToken((n, r) => {
      const i = iI(this._ref.storage, this._ref._location, t, this._blob),
        s = this._ref.storage._makeRequest(i, rr, n, r);
      (this._request = s),
        s.getPromise().then((o) => {
          (o = o),
            (this._request = void 0),
            this._updateProgress(o.current),
            (this._needToFetchStatus = !1),
            o.finalized && (this._needToFetchMetadata = !0),
            this.completeTransitions_();
        }, this._errorHandler);
    });
  }
  _continueUpload() {
    const t = Bp * this._chunkMultiplier,
      n = new Yo(this._transferred, this._blob.size()),
      r = this._uploadUrl;
    this._resolveToken((i, s) => {
      let o;
      try {
        o = sI(
          this._ref._location,
          this._ref.storage,
          r,
          this._blob,
          t,
          this._mappings,
          n,
          this._makeProgressCallback()
        );
      } catch (a) {
        (this._error = a), this._transition("error");
        return;
      }
      const l = this._ref.storage._makeRequest(o, rr, i, s, !1);
      (this._request = l),
        l.getPromise().then((a) => {
          this._increaseMultiplier(),
            (this._request = void 0),
            this._updateProgress(a.current),
            a.finalized
              ? ((this._metadata = a.metadata), this._transition("success"))
              : this.completeTransitions_();
        }, this._errorHandler);
    });
  }
  _increaseMultiplier() {
    Bp * this._chunkMultiplier * 2 < 32 * 1024 * 1024 &&
      (this._chunkMultiplier *= 2);
  }
  _fetchMetadata() {
    this._resolveToken((t, n) => {
      const r = ZP(this._ref.storage, this._ref._location, this._mappings),
        i = this._ref.storage._makeRequest(r, rr, t, n);
      (this._request = i),
        i.getPromise().then((s) => {
          (this._request = void 0),
            (this._metadata = s),
            this._transition("success");
        }, this._metadataErrorHandler);
    });
  }
  _oneShotUpload() {
    this._resolveToken((t, n) => {
      const r = nI(
          this._ref.storage,
          this._ref._location,
          this._mappings,
          this._blob,
          this._metadata
        ),
        i = this._ref.storage._makeRequest(r, rr, t, n);
      (this._request = i),
        i.getPromise().then((s) => {
          (this._request = void 0),
            (this._metadata = s),
            this._updateProgress(this._blob.size()),
            this._transition("success");
        }, this._errorHandler);
    });
  }
  _updateProgress(t) {
    const n = this._transferred;
    (this._transferred = t), this._transferred !== n && this._notifyObservers();
  }
  _transition(t) {
    if (this._state !== t)
      switch (t) {
        case "canceling":
        case "pausing":
          (this._state = t),
            this._request !== void 0
              ? this._request.cancel()
              : this.pendingTimeout &&
                (clearTimeout(this.pendingTimeout),
                (this.pendingTimeout = void 0),
                this.completeTransitions_());
          break;
        case "running":
          const n = this._state === "paused";
          (this._state = t), n && (this._notifyObservers(), this._start());
          break;
        case "paused":
          (this._state = t), this._notifyObservers();
          break;
        case "canceled":
          (this._error = ey()), (this._state = t), this._notifyObservers();
          break;
        case "error":
          (this._state = t), this._notifyObservers();
          break;
        case "success":
          (this._state = t), this._notifyObservers();
          break;
      }
  }
  completeTransitions_() {
    switch (this._state) {
      case "pausing":
        this._transition("paused");
        break;
      case "canceling":
        this._transition("canceled");
        break;
      case "running":
        this._start();
        break;
    }
  }
  get snapshot() {
    const t = vl(this._state);
    return {
      bytesTransferred: this._transferred,
      totalBytes: this._blob.size(),
      state: t,
      metadata: this._metadata,
      task: this,
      ref: this._ref,
    };
  }
  on(t, n, r, i) {
    const s = new oI(n || void 0, r || void 0, i || void 0);
    return (
      this._addObserver(s),
      () => {
        this._removeObserver(s);
      }
    );
  }
  then(t, n) {
    return this._promise.then(t, n);
  }
  catch(t) {
    return this.then(null, t);
  }
  _addObserver(t) {
    this._observers.push(t), this._notifyObserver(t);
  }
  _removeObserver(t) {
    const n = this._observers.indexOf(t);
    n !== -1 && this._observers.splice(n, 1);
  }
  _notifyObservers() {
    this._finishPromise(),
      this._observers.slice().forEach((n) => {
        this._notifyObserver(n);
      });
  }
  _finishPromise() {
    if (this._resolve !== void 0) {
      let t = !0;
      switch (vl(this._state)) {
        case Ie.SUCCESS:
          nr(this._resolve.bind(null, this.snapshot))();
          break;
        case Ie.CANCELED:
        case Ie.ERROR:
          const n = this._reject;
          nr(n.bind(null, this._error))();
          break;
        default:
          t = !1;
          break;
      }
      t && ((this._resolve = void 0), (this._reject = void 0));
    }
  }
  _notifyObserver(t) {
    switch (vl(this._state)) {
      case Ie.RUNNING:
      case Ie.PAUSED:
        t.next && nr(t.next.bind(t, this.snapshot))();
        break;
      case Ie.SUCCESS:
        t.complete && nr(t.complete.bind(t))();
        break;
      case Ie.CANCELED:
      case Ie.ERROR:
        t.error && nr(t.error.bind(t, this._error))();
        break;
      default:
        t.error && nr(t.error.bind(t, this._error))();
    }
  }
  resume() {
    const t = this._state === "paused" || this._state === "pausing";
    return t && this._transition("running"), t;
  }
  pause() {
    const t = this._state === "running";
    return t && this._transition("pausing"), t;
  }
  cancel() {
    const t = this._state === "running" || this._state === "pausing";
    return t && this._transition("canceling"), t;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qn {
  constructor(t, n) {
    (this._service = t),
      n instanceof Fe
        ? (this._location = n)
        : (this._location = Fe.makeFromUrl(n, t.host));
  }
  toString() {
    return "gs://" + this._location.bucket + "/" + this._location.path;
  }
  _newRef(t, n) {
    return new Qn(t, n);
  }
  get root() {
    const t = new Fe(this._location.bucket, "");
    return this._newRef(this._service, t);
  }
  get bucket() {
    return this._location.bucket;
  }
  get fullPath() {
    return this._location.path;
  }
  get name() {
    return uy(this._location.path);
  }
  get storage() {
    return this._service;
  }
  get parent() {
    const t = WP(this._location.path);
    if (t === null) return null;
    const n = new Fe(this._location.bucket, t);
    return new Qn(this._service, n);
  }
  _throwIfRoot(t) {
    if (this._location.path === "") throw EP(t);
  }
}
function cI(e, t, n) {
  return e._throwIfRoot("uploadBytesResumable"), new uI(e, new Zt(t), n);
}
function dI(e) {
  e._throwIfRoot("getDownloadURL");
  const t = eI(e.storage, e._location, cy());
  return e.storage.makeRequestWithTokens(t, rr).then((n) => {
    if (n === null) throw SP();
    return n;
  });
}
function fI(e, t) {
  const n = GP(e._location.path, t),
    r = new Fe(e._location.bucket, n);
  return new Qn(e.storage, r);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function pI(e) {
  return /^[A-Za-z]+:\/\//.test(e);
}
function hI(e, t) {
  return new Qn(e, t);
}
function my(e, t) {
  if (e instanceof cd) {
    const n = e;
    if (n._bucket == null) throw wP();
    const r = new Qn(n, n._bucket);
    return t != null ? my(r, t) : r;
  } else return t !== void 0 ? fI(e, t) : e;
}
function mI(e, t) {
  if (t && pI(t)) {
    if (e instanceof cd) return hI(e, t);
    throw Mu(
      "To use ref(service, url), the first argument must be a Storage instance."
    );
  } else return my(e, t);
}
function Vp(e, t) {
  const n = t == null ? void 0 : t[Jv];
  return n == null ? null : Fe.makeFromBucketSpec(n, e);
}
function gI(e, t, n, r = {}) {
  (e.host = `${t}:${n}`), (e._protocol = "http");
  const { mockUserToken: i } = r;
  i &&
    (e._overrideAuthToken =
      typeof i == "string" ? i : ox(i, e.app.options.projectId));
}
class cd {
  constructor(t, n, r, i, s) {
    (this.app = t),
      (this._authProvider = n),
      (this._appCheckProvider = r),
      (this._url = i),
      (this._firebaseVersion = s),
      (this._bucket = null),
      (this._host = Qv),
      (this._protocol = "https"),
      (this._appId = null),
      (this._deleted = !1),
      (this._maxOperationRetryTime = uP),
      (this._maxUploadRetryTime = cP),
      (this._requests = new Set()),
      i != null
        ? (this._bucket = Fe.makeFromBucketSpec(i, this._host))
        : (this._bucket = Vp(this._host, this.app.options));
  }
  get host() {
    return this._host;
  }
  set host(t) {
    (this._host = t),
      this._url != null
        ? (this._bucket = Fe.makeFromBucketSpec(this._url, t))
        : (this._bucket = Vp(t, this.app.options));
  }
  get maxUploadRetryTime() {
    return this._maxUploadRetryTime;
  }
  set maxUploadRetryTime(t) {
    $p("time", 0, Number.POSITIVE_INFINITY, t), (this._maxUploadRetryTime = t);
  }
  get maxOperationRetryTime() {
    return this._maxOperationRetryTime;
  }
  set maxOperationRetryTime(t) {
    $p("time", 0, Number.POSITIVE_INFINITY, t),
      (this._maxOperationRetryTime = t);
  }
  async _getAuthToken() {
    if (this._overrideAuthToken) return this._overrideAuthToken;
    const t = this._authProvider.getImmediate({ optional: !0 });
    if (t) {
      const n = await t.getToken();
      if (n !== null) return n.accessToken;
    }
    return null;
  }
  async _getAppCheckToken() {
    const t = this._appCheckProvider.getImmediate({ optional: !0 });
    return t ? (await t.getToken()).token : null;
  }
  _delete() {
    return (
      this._deleted ||
        ((this._deleted = !0),
        this._requests.forEach((t) => t.cancel()),
        this._requests.clear()),
      Promise.resolve()
    );
  }
  _makeStorageReference(t) {
    return new Qn(this, t);
  }
  _makeRequest(t, n, r, i, s = !0) {
    if (this._deleted) return new TP(ny());
    {
      const o = MP(t, this._appId, r, i, n, this._firebaseVersion, s);
      return (
        this._requests.add(o),
        o.getPromise().then(
          () => this._requests.delete(o),
          () => this._requests.delete(o)
        ),
        o
      );
    }
  }
  async makeRequestWithTokens(t, n) {
    const [r, i] = await Promise.all([
      this._getAuthToken(),
      this._getAppCheckToken(),
    ]);
    return this._makeRequest(t, n, r, i).getPromise();
  }
}
const Hp = "@firebase/storage",
  Wp = "0.12.6";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const gy = "storage";
function dd(e, t, n) {
  return (e = _t(e)), cI(e, t, n);
}
function fd(e) {
  return (e = _t(e)), dI(e);
}
function pd(e, t) {
  return (e = _t(e)), mI(e, t);
}
function hd(e = Xg(), t) {
  e = _t(e);
  const r = Bc(e, gy).getImmediate({ identifier: t }),
    i = ix("storage");
  return i && vI(r, ...i), r;
}
function vI(e, t, n, r = {}) {
  gI(e, t, n, r);
}
function yI(e, { instanceIdentifier: t }) {
  const n = e.getProvider("app").getImmediate(),
    r = e.getProvider("auth-internal"),
    i = e.getProvider("app-check-internal");
  return new cd(n, r, i, t, Vr);
}
function wI() {
  Lr(new qn(gy, yI, "PUBLIC").setMultipleInstances(!0)),
    gn(Hp, Wp, ""),
    gn(Hp, Wp, "esm2017");
}
wI();
function _I() {
  const { currentUser: e, loading: t, error: n } = er((T) => T.user),
    r = C.useRef(null),
    [i, s] = C.useState(void 0),
    [o, l] = C.useState(0),
    [a, u] = C.useState(!1),
    [c, d] = C.useState({}),
    f = Ho(),
    [v, y] = C.useState(!1),
    [_, S] = C.useState(!1),
    [p, g] = C.useState([]);
  C.useEffect(() => {
    i && h(i);
  }, [i]);
  const h = (T) => {
      const N = hd(ya),
        L = new Date().getTime() + T.name,
        M = pd(N, L),
        F = dd(M, T);
      F.on(
        "state_changed",
        (G) => {
          const me = (G.bytesTransferred / G.totalBytes) * 100;
          l(Math.round(me));
        },
        (G) => {
          u(!0);
        },
        () => {
          fd(F.snapshot.ref).then((G) => {
            d({ ...c, avatar: G });
          });
        }
      );
    },
    w = (T) => {
      d({ ...c, [T.target.id]: T.target.value }), console.log(c);
    },
    x = async (T) => {
      T.preventDefault();
      try {
        f(nP());
        const L = await (
          await fetch(`/api/user/update/${e._id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(c),
          })
        ).json();
        if (L.success === !1) {
          f(Up(L.message));
          return;
        }
        f(rP(L)), y(!0);
      } catch (N) {
        f(Up(N.message));
      }
    },
    E = async () => {
      try {
        f(iP());
        const N = await (
          await fetch(`/api/user/delete/${e._id}`, { method: "DELETE" })
        ).json();
        if (N.success === !1) {
          f(Is(N.message));
          return;
        }
        f(zp(N));
      } catch (T) {
        f(Is(T.message));
      }
    },
    P = async () => {
      try {
        f(sP());
        const N = await (await fetch("/api/auth/signout")).json();
        if (N.success === !1) {
          f(Is(N.message));
          return;
        }
        f(zp(N));
      } catch {
        f(Is(data.message));
      }
    },
    b = async () => {
      try {
        S(!1);
        const N = await (await fetch(`/api/user/listings/${e._id}`)).json();
        if (N.success === !1) {
          S(!0);
          return;
        }
        g(N);
      } catch {
        S(!0);
      }
    },
    I = async (T) => {
      try {
        const L = (
          await fetch(`/api/listing/delete/${T}`, { method: "DELETE" })
        ).json();
        if (L.success === !1) {
          console.log(L.message);
          return;
        }
        g((M) => M.filter((F) => F._id !== T));
      } catch (N) {
        console.log(N);
      }
    };
  return m.jsxs("div", {
    className: "p-3 max-w-lg mx-auto",
    children: [
      m.jsx("h1", {
        className: "text-3xl font-semibold text-center my-7",
        children: "Profile",
      }),
      m.jsxs("form", {
        onSubmit: x,
        className: "flex flex-col gap-4",
        children: [
          m.jsx("input", {
            onChange: (T) => s(T.target.files[0]),
            type: "file",
            ref: r,
            hidden: !0,
            accept: "image/*",
          }),
          m.jsx("img", {
            onClick: () => r.current.click(),
            src: c.avatar || e.avatar,
            alt: "profile",
            className:
              "rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2",
          }),
          m.jsx("p", {
            className: "text-sm self-center",
            children: a
              ? m.jsx("span", {
                  className: "text-red-700",
                  children: "Error Image Upload(Image Must be less than 2Mb)",
                })
              : o > 0 && o < 100
              ? m.jsx("span", {
                  className: "text-slate-700",
                  children: `Uploading ${o}%`,
                })
              : o === 100
              ? m.jsx("span", {
                  className: "text-green-700",
                  children: "Image Uploaded Successfully",
                })
              : "",
          }),
          m.jsx("input", {
            type: "text",
            id: "username",
            defaultValue: e.username,
            placeholder: "Username",
            className: "border p-3 rounded-lg",
            onChange: w,
          }),
          m.jsx("input", {
            type: "text",
            id: "email",
            defaultValue: e.email,
            placeholder: "E-mail",
            className: "border p-3 rounded-lg",
            onChange: w,
          }),
          m.jsx("input", {
            type: "password",
            id: "password",
            placeholder: "Password",
            className: "border p-3 rounded-lg",
          }),
          m.jsx("button", {
            disabled: t,
            className:
              "bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-85",
            children: t ? "Loading..." : "Update",
          }),
          m.jsx(we, {
            to: "/create-listing",
            children: m.jsx("button", {
              className:
                "bg-green-700 text-white p-3 w-full rounded-lg uppercase text-center hover:opacity-95",
              children: "Create Listing",
            }),
          }),
        ],
      }),
      m.jsxs("div", {
        className: "flex justify-between mt-5",
        children: [
          m.jsx("span", {
            onClick: E,
            className: "text-red-700 cursor-pointer",
            children: "Delete Account",
          }),
          m.jsx("span", {
            onClick: P,
            className: "text-red-700 cursor-pointer",
            children: "Sign Out",
          }),
        ],
      }),
      m.jsx("p", {
        className: "text-red-700 mt-5",
        children: n ? n.message : "",
      }),
      m.jsx("p", {
        className: "text-green-700 mt-5",
        children: v ? "User is Updated Successfully" : "",
      }),
      m.jsx("button", {
        onClick: b,
        className: "text-green-700 w-full",
        children: "Show Listing",
      }),
      m.jsx("p", {
        className: "text-red-700 mt-5",
        children: _ ? "Error Showing Listing" : "",
      }),
      p &&
        p.length > 0 &&
        m.jsxs("div", {
          className: "flex flex-col gap-4",
          children: [
            m.jsx("h1", {
              className: "text-center mt-7 text-2xl font-semibold",
              children: "Your Listing",
            }),
            p.map((T) =>
              m.jsxs(
                "div",
                {
                  className:
                    "flex border rounded-lg p-3 justify-between items-center gap-4",
                  children: [
                    m.jsx(we, {
                      to: `/listing/${T._id}`,
                      children: m.jsx("img", {
                        src: T.imageUrls[0],
                        className: "h-16 w-16 object-contain",
                        alt: "listing cover",
                      }),
                    }),
                    m.jsx(we, {
                      className:
                        "flex-1 text-slate-700 font-semibold hover:underline truncate",
                      to: `/listing/${T._id}`,
                      children: m.jsx("p", { children: T.name }),
                    }),
                    m.jsxs("div", {
                      className: "flex flex-col items-center",
                      children: [
                        m.jsx("button", {
                          onClick: () => I(T._id),
                          className: "text-red-700 uppercase",
                          children: "Delete",
                        }),
                        m.jsx(we, {
                          to: `/update-listing/${T._id}`,
                          children: m.jsx("button", {
                            className: "text-red-700 uppercase",
                            children: "Edit",
                          }),
                        }),
                      ],
                    }),
                  ],
                },
                T._id
              )
            ),
          ],
        }),
    ],
  });
}
function SI(e) {
  return Cn({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z",
        },
        child: [],
      },
    ],
  })(e);
}
function xI(e) {
  return Cn({
    tag: "svg",
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z",
        },
        child: [],
      },
    ],
  })(e);
}
function EI(e) {
  return Cn({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M112 128c0-29.5 16.2-55 40-68.9V256h48V48h48v208h48V59.1c23.8 13.9 40 39.4 40 68.9v128h48V128C384 57.3 326.7 0 256 0h-64C121.3 0 64 57.3 64 128v128h48zm334.3 213.9l-10.7-32c-4.4-13.1-16.6-21.9-30.4-21.9H42.7c-13.8 0-26 8.8-30.4 21.9l-10.7 32C-5.2 362.6 10.2 384 32 384v112c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V384h256v112c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V384c21.8 0 37.2-21.4 30.3-42.1z",
        },
        child: [],
      },
    ],
  })(e);
}
function TI(e) {
  return Cn({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z",
        },
        child: [],
      },
    ],
  })(e);
}
function CI(e) {
  return Cn({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM240 320h-48v48c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h96c52.9 0 96 43.1 96 96s-43.1 96-96 96zm0-128h-48v64h48c17.6 0 32-14.4 32-32s-14.4-32-32-32z",
        },
        child: [],
      },
    ],
  })(e);
}
function bI(e) {
  return Cn({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",
        },
        child: [],
      },
    ],
  })(e);
}
function PI(e) {
  return Cn({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z",
        },
        child: [],
      },
    ],
  })(e);
}
function II() {
  const { currentUser: e } = er((s) => s.user),
    [t, n] = C.useState(""),
    r = Bt(),
    i = (s) => {
      s.preventDefault();
      const o = new URLSearchParams(window.location.search);
      o.set("searchTerm", t);
      const l = o.toString();
      r(`/search?${l}`);
    };
  return (
    C.useEffect(() => {
      const o = new URLSearchParams(window.location.search).get("searchTerm");
      o && n(o);
    }, [location.search]),
    m.jsx("header", {
      className: "bg-slate-200 shadow-md",
      children: m.jsxs("div", {
        className: "flex justify-between items-center max-w-6xl mx-auto p-3",
        children: [
          m.jsx(we, {
            to: "/",
            children: m.jsxs("h1", {
              className: "font-bold text-sm sm:text-xl flex flex-wrap",
              children: [
                m.jsx("span", { className: "text-slate-500", children: "THE" }),
                m.jsx("span", {
                  className: "text-slate-700",
                  children: "Realtor",
                }),
              ],
            }),
          }),
          m.jsxs("form", {
            onSubmit: i,
            className: "bg-slate-100 p-3 rounded-lg flex items-center",
            children: [
              m.jsx("input", {
                type: "text",
                placeholder: "Serch...",
                className: "bg-transparent focus:outline-none w-24 sm:w-64",
                value: t,
                onChange: (s) => n(s.target.value),
              }),
              m.jsx("button", {
                children: m.jsx(bI, { className: "text-slate-600" }),
              }),
            ],
          }),
          m.jsxs("ul", {
            className: "flex gap-4",
            children: [
              m.jsx(we, {
                to: "/",
                children: m.jsx("li", {
                  className: "hidden sm:inline text-slate-700 hover:underline",
                  children: "Home",
                }),
              }),
              m.jsx(we, {
                to: "/about",
                children: m.jsx("li", {
                  className: "hidden sm:inline text-slate-700 hover:underline",
                  children: "About",
                }),
              }),
              m.jsx(we, {
                to: "/profile",
                children: e
                  ? m.jsx("img", {
                      className: "rounded-full h-7 w-7 object-cover",
                      src: e.avatar,
                      alt: "profile",
                    })
                  : m.jsx("li", {
                      className: "text-slate-700 hover:underline",
                      children: "Sign In",
                    }),
              }),
            ],
          }),
        ],
      }),
    })
  );
}
function kI() {
  const { currentUser: e } = er((t) => t.user);
  return e ? m.jsx(Z_, {}) : m.jsx(J_, { to: "/sign-in" });
}
function NI() {
  const { currentUser: e } = er((h) => h.user),
    t = Bt(),
    [n, r] = C.useState([]),
    [i, s] = C.useState({
      imageUrls: [],
      name: "",
      description: "",
      address: "",
      type: "rent",
      bedrooms: 1,
      bathrooms: 1,
      regularPrice: 50,
      discountPrice: 0,
      offer: !1,
      parking: !1,
      furnished: !1,
    }),
    [o, l] = C.useState(!1),
    [a, u] = C.useState(!1),
    [c, d] = C.useState(!1),
    [f, v] = C.useState(!1);
  console.log(i);
  const y = (h) => {
      if (n.length > 0 && n.length + i.imageUrls.length < 7) {
        u(!0), l(!1);
        const w = [];
        for (let x = 0; x < n.length; x++) w.push(_(n[x]));
        Promise.all(w)
          .then((x) => {
            s({ ...i, imageUrls: i.imageUrls.concat(x) }), l(!1), u(!1);
          })
          .catch((x) => {
            l("Image Upload failed (2 mb max per image"), u(!1);
          });
      } else l("You Can Only Upload 6 Images per Listing"), u(!1);
    },
    _ = async (h) =>
      new Promise((w, x) => {
        const E = hd(ya),
          P = new Date().getTime() + h.name,
          b = pd(E, P),
          I = dd(b, h);
        I.on(
          "state_changed",
          (T) => {
            const N = (T.bytesTransferred / T.totalBytes) * 100;
            console.log(`Upload is ${N}% done`);
          },
          (T) => {
            x(T);
          },
          () => {
            fd(I.snapshot.ref).then((T) => {
              w(T);
            });
          }
        );
      }),
    S = (h) => {
      s({ ...i, imageUrls: i.imageUrls.filter((w, x) => x !== h) });
    },
    p = (h) => {
      (h.target.id === "sell" || h.target.id === "rent") &&
        s({ ...i, type: h.target.id }),
        (h.target.id === "parking" ||
          h.target.id === "furnished" ||
          h.target.id === "offer") &&
          s({ ...i, [h.target.id]: h.target.checked }),
        (h.target.type === "number" ||
          h.target.type === "text" ||
          h.target.type === "textarea") &&
          s({ ...i, [h.target.id]: h.target.value });
    },
    g = async (h) => {
      h.preventDefault();
      try {
        if (i.imageUrls.length < 1)
          return d("You must upload at least One Image");
        if (+i.regularPrice < +i.discountPrice)
          return d("Discount Price must be lower than regular price");
        v(!0), d(!1);
        const x = await (
          await fetch("/api/listing/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...i, userRef: e._id }),
          })
        ).json();
        v(!1), x.success === !1 && d(x.message), t(`/listing/${x._id}`);
      } catch (w) {
        d(w.message), v(!1);
      }
    };
  return m.jsxs("main", {
    className: "p-3 max-w-4xl mx-auto",
    children: [
      m.jsx("h1", {
        className: "text-3xl font-semibold text-center my-7",
        children: "Create a Listing",
      }),
      m.jsxs("form", {
        onSubmit: g,
        className: "flex flex-col sm:flex-row gap-4",
        children: [
          m.jsxs("div", {
            className: "flex flex-col gap-4 flex-1",
            children: [
              m.jsx("input", {
                onChange: p,
                value: i.name,
                type: "text",
                placeholder: "Name",
                className: "border p-3 rounded-lg",
                id: "name",
                maxLength: "62",
                minLength: "10",
                required: !0,
              }),
              m.jsx("input", {
                onChange: p,
                value: i.description,
                type: "text",
                placeholder: "Desciption",
                className: "border p-3 rounded-lg",
                id: "description",
                required: !0,
              }),
              m.jsx("input", {
                onChange: p,
                value: i.address,
                type: "text",
                placeholder: "Address",
                className: "border p-3 rounded-lg",
                id: "address",
                required: !0,
              }),
              m.jsxs("div", {
                className: "flex gap-6 flex-wraps",
                children: [
                  m.jsxs("div", {
                    className: "flex gap-2 items-center",
                    children: [
                      m.jsx("input", {
                        type: "checkbox",
                        id: "sell",
                        className: "w-5",
                        onChange: p,
                        checked: i.type === "sell",
                      }),
                      m.jsx("span", { children: "Sell" }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex gap-2 items-center",
                    children: [
                      m.jsx("input", {
                        type: "checkbox",
                        id: "rent",
                        className: "w-5",
                        onChange: p,
                        checked: i.type === "rent",
                      }),
                      m.jsx("span", { children: "Rent" }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex gap-2 items-center",
                    children: [
                      m.jsx("input", {
                        type: "checkbox",
                        id: "parking",
                        className: "w-5",
                        onChange: p,
                        checked: i.parking,
                      }),
                      m.jsx("span", { children: "Parking Spot" }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex gap-2 items-center",
                    children: [
                      m.jsx("input", {
                        type: "checkbox",
                        id: "furnished",
                        className: "w-5",
                        onChange: p,
                        checked: i.furnished,
                      }),
                      m.jsx("span", { children: "Furnished" }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex gap-2 items-center",
                    children: [
                      m.jsx("input", {
                        type: "checkbox",
                        id: "offer",
                        className: "w-5",
                        onChange: p,
                        checked: i.offer,
                      }),
                      m.jsx("span", { children: "Offer" }),
                    ],
                  }),
                ],
              }),
              m.jsxs("div", {
                className: "flex flex-wrap gap-6",
                children: [
                  m.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      m.jsx("input", {
                        onChange: p,
                        value: i.bedrooms,
                        className: "p-3 border border-gray-300 rounded-lg",
                        type: "number",
                        id: "bedrooms",
                        min: "1",
                        max: "20",
                        required: !0,
                      }),
                      m.jsx("span", { children: "Beds" }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      m.jsx("input", {
                        onChange: p,
                        value: i.bathrooms,
                        className: "p-3 border border-gray-300 rounded-lg",
                        type: "number",
                        id: "bathrooms",
                        min: "1",
                        max: "20",
                        required: !0,
                      }),
                      m.jsx("span", { children: "Bathrooms" }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      m.jsx("input", {
                        onChange: p,
                        value: i.regularPrice,
                        className: "p-3 border w-24 border-gray-300 rounded-lg",
                        type: "number",
                        id: "regularPrice",
                        min: "50",
                        max: "5000000",
                        required: !0,
                      }),
                      m.jsxs("div", {
                        className: "flex flex-col items-center",
                        children: [
                          m.jsx("span", { children: "Regular Price" }),
                          i.type === "rent" &&
                            m.jsx("span", {
                              className: "text-xs",
                              children: "($ / month)",
                            }),
                        ],
                      }),
                    ],
                  }),
                  i.offer &&
                    m.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        m.jsx("input", {
                          onChange: p,
                          value: i.discountPrice,
                          className:
                            "p-3 border w-24 border-gray-300 rounded-lg",
                          type: "number",
                          id: "discountPrice",
                          min: "0",
                          max: "5000000",
                          required: !0,
                        }),
                        m.jsxs("div", {
                          className: "flex flex-col items-center",
                          children: [
                            m.jsx("span", { children: "Discounted Price" }),
                            i.type === "rent" &&
                              m.jsx("span", {
                                className: "text-xs",
                                children: "($ / month)",
                              }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
          m.jsxs("div", {
            className: "flex flex-col flex-1 gap-4",
            children: [
              m.jsxs("p", {
                className: "font-semibold",
                children: [
                  "Images:",
                  m.jsx("span", {
                    className: "font-normal text-gray-600 ml-2",
                    children: "The First Image will be the cover(max 6)",
                  }),
                ],
              }),
              m.jsxs("div", {
                className: "flex gap-4",
                children: [
                  m.jsx("input", {
                    onChange: (h) => r(h.target.files),
                    className: "p-3 border border-gray-300 rounded w-full",
                    type: "file",
                    id: "images",
                    accept: "image/*",
                    multiple: !0,
                  }),
                  m.jsx("button", {
                    type: "button",
                    onClick: y,
                    className:
                      "p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80",
                    disabled: a,
                    children: a ? "Uploading..." : "Upload",
                  }),
                ],
              }),
              m.jsx("p", {
                className: "text-red-700 text-sm",
                children: o && o,
              }),
              i.imageUrls.length > 0 &&
                i.imageUrls.map((h, w) =>
                  m.jsxs(
                    "div",
                    {
                      className: "flex justify-between p-3 border items-center",
                      children: [
                        m.jsx("img", {
                          src: h,
                          alt: "listing image",
                          className: "w-20 h-20 object-contain rounded-lg",
                        }),
                        m.jsx("button", {
                          type: "button",
                          onClick: () => S(w),
                          className:
                            "p-3 text-red-700 rounded-lg uppercase hover:opacity-75",
                          children: "Delete",
                        }),
                      ],
                    },
                    h
                  )
                ),
              m.jsx("button", {
                disabled: f || a,
                className:
                  "p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80",
                children: f ? "Creating..." : "Create Listing",
              }),
              c &&
                m.jsx("p", { className: "text-red-700 text-sm", children: c }),
            ],
          }),
        ],
      }),
    ],
  });
}
function OI() {
  const { currentUser: e } = er((w) => w.user),
    t = Bt(),
    [n, r] = C.useState([]),
    [i, s] = C.useState({
      imageUrls: [],
      name: "",
      description: "",
      address: "",
      type: "rent",
      bedrooms: 1,
      bathrooms: 1,
      regularPrice: 50,
      discountPrice: 0,
      offer: !1,
      parking: !1,
      furnished: !1,
    }),
    [o, l] = C.useState(!1),
    [a, u] = C.useState(!1),
    [c, d] = C.useState(!1),
    [f, v] = C.useState(!1),
    y = wg();
  C.useEffect(() => {
    (async () => {
      const x = y.listingId,
        P = await (await fetch(`/api/listing/get/${x}`)).json();
      if (P.success === !1) {
        console.log(P.message);
        return;
      }
      s(P);
    })();
  }, []);
  const _ = (w) => {
      if (n.length > 0 && n.length + i.imageUrls.length < 7) {
        u(!0), l(!1);
        const x = [];
        for (let E = 0; E < n.length; E++) x.push(S(n[E]));
        Promise.all(x)
          .then((E) => {
            s({ ...i, imageUrls: i.imageUrls.concat(E) }), l(!1), u(!1);
          })
          .catch((E) => {
            l("Image Upload failed (2 mb max per image"), u(!1);
          });
      } else l("You Can Only Upload 6 Images per Listing"), u(!1);
    },
    S = async (w) =>
      new Promise((x, E) => {
        const P = hd(ya),
          b = new Date().getTime() + w.name,
          I = pd(P, b),
          T = dd(I, w);
        T.on(
          "state_changed",
          (N) => {
            const L = (N.bytesTransferred / N.totalBytes) * 100;
            console.log(`Upload is ${L}% done`);
          },
          (N) => {
            E(N);
          },
          () => {
            fd(T.snapshot.ref).then((N) => {
              x(N);
            });
          }
        );
      }),
    p = (w) => {
      s({ ...i, imageUrls: i.imageUrls.filter((x, E) => E !== w) });
    },
    g = (w) => {
      (w.target.id === "sell" || w.target.id === "rent") &&
        s({ ...i, type: w.target.id }),
        (w.target.id === "parking" ||
          w.target.id === "furnished" ||
          w.target.id === "offer") &&
          s({ ...i, [w.target.id]: w.target.checked }),
        (w.target.type === "number" ||
          w.target.type === "text" ||
          w.target.type === "textarea") &&
          s({ ...i, [w.target.id]: w.target.value });
    },
    h = async (w) => {
      w.preventDefault();
      try {
        if (i.imageUrls.length < 1)
          return d("You must upload at least One Image");
        if (+i.regularPrice < +i.discountPrice)
          return d("Discount Price must be lower than regular price");
        v(!0), d(!1);
        const E = await (
          await fetch(`/api/listing/update/${y.listingId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...i, userRef: e._id }),
          })
        ).json();
        v(!1), E.success === !1 && d(E.message), t(`/listing/${E._id}`);
      } catch (x) {
        d(x.message), v(!1);
      }
    };
  return m.jsxs("main", {
    className: "p-3 max-w-4xl mx-auto",
    children: [
      m.jsx("h1", {
        className: "text-3xl font-semibold text-center my-7",
        children: "Update a Listing",
      }),
      m.jsxs("form", {
        onSubmit: h,
        className: "flex flex-col sm:flex-row gap-4",
        children: [
          m.jsxs("div", {
            className: "flex flex-col gap-4 flex-1",
            children: [
              m.jsx("input", {
                onChange: g,
                value: i.name,
                type: "text",
                placeholder: "Name",
                className: "border p-3 rounded-lg",
                id: "name",
                maxLength: "62",
                minLength: "10",
                required: !0,
              }),
              m.jsx("input", {
                onChange: g,
                value: i.description,
                type: "text",
                placeholder: "Desciption",
                className: "border p-3 rounded-lg",
                id: "description",
                required: !0,
              }),
              m.jsx("input", {
                onChange: g,
                value: i.address,
                type: "text",
                placeholder: "Address",
                className: "border p-3 rounded-lg",
                id: "address",
                required: !0,
              }),
              m.jsxs("div", {
                className: "flex gap-6 flex-wraps",
                children: [
                  m.jsxs("div", {
                    className: "flex gap-2 items-center",
                    children: [
                      m.jsx("input", {
                        type: "checkbox",
                        id: "sell",
                        className: "w-5",
                        onChange: g,
                        checked: i.type === "sell",
                      }),
                      m.jsx("span", { children: "Sell" }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex gap-2 items-center",
                    children: [
                      m.jsx("input", {
                        type: "checkbox",
                        id: "rent",
                        className: "w-5",
                        onChange: g,
                        checked: i.type === "rent",
                      }),
                      m.jsx("span", { children: "Rent" }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex gap-2 items-center",
                    children: [
                      m.jsx("input", {
                        type: "checkbox",
                        id: "parking",
                        className: "w-5",
                        onChange: g,
                        checked: i.parking,
                      }),
                      m.jsx("span", { children: "Parking Spot" }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex gap-2 items-center",
                    children: [
                      m.jsx("input", {
                        type: "checkbox",
                        id: "furnished",
                        className: "w-5",
                        onChange: g,
                        checked: i.furnished,
                      }),
                      m.jsx("span", { children: "Furnished" }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex gap-2 items-center",
                    children: [
                      m.jsx("input", {
                        type: "checkbox",
                        id: "offer",
                        className: "w-5",
                        onChange: g,
                        checked: i.offer,
                      }),
                      m.jsx("span", { children: "Offer" }),
                    ],
                  }),
                ],
              }),
              m.jsxs("div", {
                className: "flex flex-wrap gap-6",
                children: [
                  m.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      m.jsx("input", {
                        onChange: g,
                        value: i.bedrooms,
                        className: "p-3 border border-gray-300 rounded-lg",
                        type: "number",
                        id: "bedrooms",
                        min: "1",
                        max: "20",
                        required: !0,
                      }),
                      m.jsx("span", { children: "Beds" }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      m.jsx("input", {
                        onChange: g,
                        value: i.bathrooms,
                        className: "p-3 border border-gray-300 rounded-lg",
                        type: "number",
                        id: "bathrooms",
                        min: "1",
                        max: "20",
                        required: !0,
                      }),
                      m.jsx("span", { children: "Bathrooms" }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      m.jsx("input", {
                        onChange: g,
                        value: i.regularPrice,
                        className: "p-3 border w-24 border-gray-300 rounded-lg",
                        type: "number",
                        id: "regularPrice",
                        min: "50",
                        max: "5000000",
                        required: !0,
                      }),
                      m.jsxs("div", {
                        className: "flex flex-col items-center",
                        children: [
                          m.jsx("span", { children: "Regular Price" }),
                          i.type === "rent" &&
                            m.jsx("span", {
                              className: "text-xs",
                              children: "($ / month)",
                            }),
                        ],
                      }),
                    ],
                  }),
                  i.offer &&
                    m.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        m.jsx("input", {
                          onChange: g,
                          value: i.discountPrice,
                          className:
                            "p-3 border w-24 border-gray-300 rounded-lg",
                          type: "number",
                          id: "discountPrice",
                          min: "0",
                          max: "5000000",
                          required: !0,
                        }),
                        m.jsxs("div", {
                          className: "flex flex-col items-center",
                          children: [
                            m.jsx("span", { children: "Discounted Price" }),
                            i.type === "rent" &&
                              m.jsx("span", {
                                className: "text-xs",
                                children: "($ / month)",
                              }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
          m.jsxs("div", {
            className: "flex flex-col flex-1 gap-4",
            children: [
              m.jsxs("p", {
                className: "font-semibold",
                children: [
                  "Images:",
                  m.jsx("span", {
                    className: "font-normal text-gray-600 ml-2",
                    children: "The First Image will be the cover(max 6)",
                  }),
                ],
              }),
              m.jsxs("div", {
                className: "flex gap-4",
                children: [
                  m.jsx("input", {
                    onChange: (w) => r(w.target.files),
                    className: "p-3 border border-gray-300 rounded w-full",
                    type: "file",
                    id: "images",
                    accept: "image/*",
                    multiple: !0,
                  }),
                  m.jsx("button", {
                    type: "button",
                    onClick: _,
                    className:
                      "p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80",
                    disabled: a,
                    children: a ? "Uploading..." : "Upload",
                  }),
                ],
              }),
              m.jsx("p", {
                className: "text-red-700 text-sm",
                children: o && o,
              }),
              i.imageUrls.length > 0 &&
                i.imageUrls.map((w, x) =>
                  m.jsxs(
                    "div",
                    {
                      className: "flex justify-between p-3 border items-center",
                      children: [
                        m.jsx("img", {
                          src: w,
                          alt: "listing image",
                          className: "w-20 h-20 object-contain rounded-lg",
                        }),
                        m.jsx("button", {
                          type: "button",
                          onClick: () => p(x),
                          className:
                            "p-3 text-red-700 rounded-lg uppercase hover:opacity-75",
                          children: "Delete",
                        }),
                      ],
                    },
                    w
                  )
                ),
              m.jsx("button", {
                disabled: f || a,
                className:
                  "p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80",
                children: f ? "Updating..." : "Update Listing",
              }),
              c &&
                m.jsx("p", { className: "text-red-700 text-sm", children: c }),
            ],
          }),
        ],
      }),
    ],
  });
}
function RI({ listing: e }) {
  const [t, n] = C.useState({}),
    [r, i] = C.useState("");
  C.useEffect(() => {
    (async () => {
      try {
        const a = await (await fetch(`/api/user/${e.userRef}`)).json();
        n(a);
      } catch (l) {
        console.log(l);
      }
    })();
  }, [e.userRef]);
  const s = (o) => {
    i(o.target.value);
  };
  return m.jsx(m.Fragment, {
    children:
      t &&
      m.jsxs("div", {
        className: "flex flex-col gap-2",
        children: [
          m.jsxs("p", {
            className: "",
            children: [
              "Contact ",
              m.jsx("span", {
                className: "font-semibold",
                children: t.username,
              }),
              " for ",
              m.jsx("span", {
                className: "font-semibold",
                children: e.name.toLowerCase(),
              }),
            ],
          }),
          m.jsx("textarea", {
            name: "message",
            id: "message",
            rows: "2",
            value: r,
            onChange: s,
            placeholder: "Enter your message here ..",
            className: "w-full border p-3 rounded-lg",
          }),
          m.jsx(we, {
            to: `mailto:${t.email}?subject=Regarding ${e.name}&body=${r}`,
            className:
              "bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95",
            children: "Send Message",
          }),
        ],
      }),
  });
}
function LI() {
  Ki.use([jg]);
  const { currentUser: e } = er((f) => f.user),
    t = wg(),
    [n, r] = C.useState({}),
    [i, s] = C.useState(!0),
    [o, l] = C.useState(!1),
    [a, u] = C.useState(!1),
    [c, d] = C.useState(!1);
  return (
    C.useEffect(() => {
      (async () => {
        try {
          s(!0);
          const y = await (
            await fetch(`/api/listing/get/${t.listingId}`)
          ).json();
          if (y.success === !1) {
            l(!0), s(!1);
            return;
          }
          r(y), s(!1), l(!1);
        } catch {
          l(!0), s(!1);
        }
      })();
    }, [t.listingId]),
    m.jsxs("main", {
      children: [
        i &&
          m.jsx("p", {
            className: "text-center my-7 text-2xl",
            children: "Loading....",
          }),
        o &&
          m.jsx("p", {
            className: "text-center my-7 text-2xl",
            children: "Something Went Wrong :(",
          }),
        n &&
          !o &&
          !i &&
          m.jsxs(m.Fragment, {
            children: [
              m.jsx(Uc, {
                navigation: !0,
                children: n.imageUrls.map((f) =>
                  m.jsx(
                    zc,
                    {
                      children: m.jsx("div", {
                        className: "h-[500px]",
                        style: {
                          background: `url(${f}) center no-repeat`,
                          backgroundSize: "cover",
                        },
                      }),
                    },
                    f
                  )
                ),
              }),
              m.jsx("div", {
                className:
                  "fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer",
                children: m.jsx(PI, {
                  className: "text-slate-500",
                  onClick: () => {
                    navigator.clipboard.writeText(window.location.href),
                      u(!0),
                      setTimeout(() => {
                        u(!1);
                      }, 2e3);
                  },
                }),
              }),
              a &&
                m.jsx("p", {
                  className:
                    "fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2",
                  children: "Link copied!",
                }),
              m.jsxs("div", {
                className: "flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4",
                children: [
                  m.jsxs("p", {
                    className: "text-2xl font-semibold",
                    children: [
                      n.name,
                      " - $",
                      " ",
                      n.offer
                        ? n.discountPrice.toLocaleString("en-US")
                        : n.regularPrice.toLocaleString("en-US"),
                      n.type === "rent" && " / month",
                    ],
                  }),
                  m.jsxs("p", {
                    className:
                      "flex items-center mt-6 gap-2 text-slate-600 text-lg",
                    children: [
                      m.jsx(TI, { className: "text-green-700" }),
                      n.address,
                    ],
                  }),
                  m.jsxs("div", {
                    className: "flex gap-4",
                    children: [
                      m.jsx("p", {
                        className:
                          "bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md",
                        children: n.type === "rent" ? "For Rent" : "For Sale ",
                      }),
                      n.offer
                        ? m.jsxs("p", {
                            className:
                              "bg-green-900 w-full max-w-[200px] text-white text-center p-1 rounded-md",
                            children: [
                              "$",
                              +n.regularPrice - +n.discountPrice,
                              " Discount ",
                            ],
                          })
                        : "",
                    ],
                  }),
                  m.jsxs("p", {
                    className: "text-slate-800",
                    children: [
                      m.jsxs("span", {
                        className: "font-semibold text-black",
                        children: ["Desription - ", " "],
                      }),
                      n.description,
                    ],
                  }),
                  m.jsxs("ul", {
                    className:
                      "flex flex-wrap gap-4 text-green-900 font-semibold items-cente sm:gap-6",
                    children: [
                      m.jsxs("li", {
                        className: "flex items-center gap-1 whitespace-nowrap ",
                        children: [
                          m.jsx(xI, { className: "text-lg" }),
                          n.bedrooms > 1
                            ? `${n.bedrooms} beds`
                            : `${n.bedrooms} Bed`,
                        ],
                      }),
                      m.jsxs("li", {
                        className: "flex items-center gap-1 whitespace-nowrap",
                        children: [
                          m.jsx(SI, { className: "text-lg" }),
                          n.bathrooms > 1
                            ? `${n.bedrooms} Baths`
                            : `${n.bedrooms} Bath`,
                        ],
                      }),
                      m.jsxs("li", {
                        className: "flex items-center gap-1 whitespace-nowrap",
                        children: [
                          m.jsx(CI, { className: "text-lg" }),
                          n.parking ? "Parking" : "No Parking",
                        ],
                      }),
                      m.jsxs("li", {
                        className: "flex items-center gap-1 whitespace-nowrap",
                        children: [
                          m.jsx(EI, { className: "text-lg" }),
                          n.furnished ? "Furnished" : "Not Furnished ",
                        ],
                      }),
                    ],
                  }),
                  e &&
                    n.userRef !== e._id &&
                    !c &&
                    m.jsxs("button", {
                      onClick: () => d(!0),
                      className:
                        "bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3",
                      children: [
                        "Contact ",
                        n.type === "rent" ? "Landlord" : "Owner",
                      ],
                    }),
                  c && m.jsx(RI, { listing: n }),
                ],
              }),
            ],
          }),
      ],
    })
  );
}
function AI() {
  const e = Bt(),
    [t, n] = C.useState({
      searchTerm: "",
      type: "all",
      parking: !1,
      furnished: !1,
      offer: !1,
      sort: "created_at",
      order: "desc",
    }),
    [r, i] = C.useState(!1),
    [s, o] = C.useState([]),
    [l, a] = C.useState(!1);
  C.useEffect(() => {
    const f = new URLSearchParams(location.search),
      v = f.get("searchTerm"),
      y = f.get("type"),
      _ = f.get("parking"),
      S = f.get("furnished"),
      p = f.get("offer"),
      g = f.get("sort"),
      h = f.get("order");
    (v || y || _ || S || p || g || h) &&
      n({
        searchTerm: v || "",
        type: y || "all",
        parking: _ === "true",
        furnished: S === "true",
        offer: p === "true",
        sort: g || "created_at",
        order: h || "desc",
      }),
      (async () => {
        try {
          i(!0), a(!1);
          const x = f.toString(),
            P = await (await fetch(`/api/listing/get?${x}`)).json();
          if ((P.length > 8 ? a(!0) : a(!1), P.success === !1)) {
            console.log(P.message), i(!1);
            return;
          }
          o(P), i(!1);
        } catch (x) {
          next(x);
        }
      })();
  }, [location.search]);
  const u = (f) => {
      if (
        ((f.target.id === "all" ||
          f.target.id === "sell" ||
          f.target.id === "rent") &&
          n({ ...t, type: f.target.id }),
        f.target.id === "searchTerm" && n({ ...t, searchTerm: f.target.value }),
        (f.target.id === "parking" ||
          f.target.id === "furnished" ||
          f.target.id === "offer") &&
          n({
            ...t,
            [f.target.id]: !!(f.target.checked || f.target.checked === "true"),
          }),
        f.target.id === "sort_order")
      ) {
        const v = f.target.value.split("_")[0] || "created_at",
          y = f.target.value.split("_")[1] || "desc";
        n({ ...t, sort: v, order: y });
      }
    },
    c = (f) => {
      f.preventDefault();
      const v = new URLSearchParams();
      v.set("searchTerm", t.searchTerm),
        v.set("type", t.type),
        v.set("parking", t.parking),
        v.set("furnished", t.furnished),
        v.set("offer", t.offer),
        v.set("sort", t.sort),
        v.set("order", t.order);
      const y = v.toString();
      e(`/search?${y}`);
    },
    d = async () => {
      const v = s.length,
        y = new URLSearchParams(location.search);
      y.set("startIndex", v);
      const _ = y.toString(),
        p = await (await fetch(`/api/listing/get?${_}`)).json();
      p.length < 9 && a(!1), o([...s, ...p]);
    };
  return m.jsxs("div", {
    className: "flex flex-col md:flex-row",
    children: [
      m.jsx("div", {
        className: "p-7 border-b-2 md:border-r-2 md:min-h-screen",
        children: m.jsxs("form", {
          onSubmit: c,
          className: "flex flex-col gap-8",
          children: [
            m.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                m.jsx("label", {
                  className: "font-semibold whitespace-nowrap",
                  children: " Search Term",
                }),
                m.jsx("input", {
                  type: "text",
                  id: "searchTerm",
                  placeholder: "Search...",
                  className: "border rounded-lg p-3 w-full",
                  value: t.searchTerm,
                  onChange: u,
                }),
              ],
            }),
            m.jsxs("div", {
              className: "flex gap-2 flex-wrap items-center",
              children: [
                m.jsx("label", {
                  className: "font-semibold",
                  children: "Type:",
                }),
                m.jsxs("div", {
                  className: "flex gap-2 items-center",
                  children: [
                    m.jsx("input", {
                      type: "checkbox",
                      id: "all",
                      className: "h-5",
                      checked: t.type === "all",
                      onChange: u,
                    }),
                    m.jsx("span", { children: "Rent & Sell" }),
                  ],
                }),
                m.jsxs("div", {
                  className: "flex gap-2 items-center",
                  children: [
                    m.jsx("input", {
                      type: "checkbox",
                      id: "sell",
                      className: "h-5",
                      checked: t.type === "sell",
                      onChange: u,
                    }),
                    m.jsx("span", { children: "Sell" }),
                  ],
                }),
                m.jsxs("div", {
                  className: "flex gap-2 items-center",
                  children: [
                    m.jsx("input", {
                      type: "checkbox",
                      id: "rent",
                      className: "h-5",
                      checked: t.type === "rent",
                      onChange: u,
                    }),
                    m.jsx("span", { children: "Rent" }),
                  ],
                }),
                m.jsxs("div", {
                  className: "flex gap-2 items-center",
                  children: [
                    m.jsx("input", {
                      type: "checkbox",
                      id: "offer",
                      className: "h-5",
                      checked: t.offer,
                      onChange: u,
                    }),
                    m.jsx("span", { children: "Offer" }),
                  ],
                }),
              ],
            }),
            m.jsxs("div", {
              className: "flex gap-2 flex-wrap items-center",
              children: [
                m.jsx("label", {
                  className: "font-semibold",
                  children: "Amenities:",
                }),
                m.jsxs("div", {
                  className: "flex gap-2 items-center",
                  children: [
                    m.jsx("input", {
                      type: "checkbox",
                      id: "parking",
                      className: "h-5",
                      checked: t.parking,
                      onChange: u,
                    }),
                    m.jsx("span", { children: "Parking" }),
                  ],
                }),
                m.jsxs("div", {
                  className: "flex gap-2 items-center",
                  children: [
                    m.jsx("input", {
                      type: "checkbox",
                      id: "furnished",
                      className: "h-5",
                      checked: t.furnished,
                      onChange: u,
                    }),
                    m.jsx("span", { children: "Furnished" }),
                  ],
                }),
              ],
            }),
            m.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                m.jsx("label", {
                  className: "font-semibold",
                  children: "Sort:",
                }),
                m.jsxs("select", {
                  onChange: u,
                  defaultValue: "created_at_desc",
                  id: "sort_order",
                  className: "border rounded-lg p-3",
                  children: [
                    m.jsx("option", {
                      value: "regularPrice_desc",
                      children: "Price High to Low",
                    }),
                    m.jsx("option", {
                      value: "regularPrice_asc",
                      children: "Price Low to High",
                    }),
                    m.jsx("option", {
                      value: "createdAt_desc",
                      children: "Latest",
                    }),
                    m.jsx("option", {
                      value: "createdAt_asc",
                      children: "Oldest",
                    }),
                  ],
                }),
              ],
            }),
            m.jsx("button", {
              className:
                "bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95",
              children: "Search",
            }),
          ],
        }),
      }),
      m.jsxs("div", {
        className: "flex-1",
        children: [
          m.jsx("h1", {
            className:
              "text-3xl font-semibold border-b p-3 text-slate-700 mt-5",
            children: "Listing Results:",
          }),
          m.jsxs("div", {
            className: "p-7 flex flex-wrap gap-4",
            children: [
              !r &&
                s.length === 0 &&
                m.jsx("p", {
                  className: "text-lg text-slate-700",
                  children: "No Listing Found!",
                }),
              r &&
                m.jsx("p", {
                  className: "text-lg text-center text-slate-700 w-full",
                  children: "Loading....",
                }),
              !r && s && s.map((f) => m.jsx(Ws, { listing: f }, f._id)),
              l &&
                m.jsx("button", {
                  onClick: d,
                  className:
                    "text-green-700 hover:underline p-7 text-center w-full",
                  children: "Show More",
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function MI() {
  return m.jsxs(lS, {
    children: [
      m.jsx(II, {}),
      m.jsxs(tS, {
        children: [
          m.jsx(tt, { path: "/", element: m.jsx(X1, {}) }),
          m.jsx(tt, { path: "/sign-in", element: m.jsx(lP, {}) }),
          m.jsx(tt, { path: "/sign-up", element: m.jsx(aP, {}) }),
          m.jsx(tt, { path: "/about", element: m.jsx(Y1, {}) }),
          m.jsx(tt, { path: "/listing/:listingId", element: m.jsx(LI, {}) }),
          m.jsx(tt, { path: "/search", element: m.jsx(AI, {}) }),
          m.jsxs(tt, {
            element: m.jsx(kI, {}),
            children: [
              m.jsx(tt, { path: "/profile", element: m.jsx(_I, {}) }),
              m.jsx(tt, { path: "/create-listing", element: m.jsx(NI, {}) }),
              m.jsx(tt, {
                path: "/update-listing/:listingId",
                element: m.jsx(OI, {}),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var md = "persist:",
  vy = "persist/FLUSH",
  gd = "persist/REHYDRATE",
  yy = "persist/PAUSE",
  wy = "persist/PERSIST",
  _y = "persist/PURGE",
  Sy = "persist/REGISTER",
  jI = -1;
function Ys(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Ys = function (n) {
          return typeof n;
        })
      : (Ys = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Ys(e)
  );
}
function Gp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function DI(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Gp(n, !0).forEach(function (r) {
          UI(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Gp(n).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function UI(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function zI(e, t, n, r) {
  r.debug;
  var i = DI({}, n);
  return (
    e &&
      Ys(e) === "object" &&
      Object.keys(e).forEach(function (s) {
        s !== "_persist" && t[s] === n[s] && (i[s] = e[s]);
      }),
    i
  );
}
function FI(e) {
  var t = e.blacklist || null,
    n = e.whitelist || null,
    r = e.transforms || [],
    i = e.throttle || 0,
    s = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : md).concat(e.key),
    o = e.storage,
    l;
  e.serialize === !1
    ? (l = function (x) {
        return x;
      })
    : typeof e.serialize == "function"
    ? (l = e.serialize)
    : (l = $I);
  var a = e.writeFailHandler || null,
    u = {},
    c = {},
    d = [],
    f = null,
    v = null,
    y = function (x) {
      Object.keys(x).forEach(function (E) {
        p(E) && u[E] !== x[E] && d.indexOf(E) === -1 && d.push(E);
      }),
        Object.keys(u).forEach(function (E) {
          x[E] === void 0 &&
            p(E) &&
            d.indexOf(E) === -1 &&
            u[E] !== void 0 &&
            d.push(E);
        }),
        f === null && (f = setInterval(_, i)),
        (u = x);
    };
  function _() {
    if (d.length === 0) {
      f && clearInterval(f), (f = null);
      return;
    }
    var w = d.shift(),
      x = r.reduce(function (E, P) {
        return P.in(E, w, u);
      }, u[w]);
    if (x !== void 0)
      try {
        c[w] = l(x);
      } catch (E) {
        console.error(
          "redux-persist/createPersistoid: error serializing state",
          E
        );
      }
    else delete c[w];
    d.length === 0 && S();
  }
  function S() {
    Object.keys(c).forEach(function (w) {
      u[w] === void 0 && delete c[w];
    }),
      (v = o.setItem(s, l(c)).catch(g));
  }
  function p(w) {
    return !(
      (n && n.indexOf(w) === -1 && w !== "_persist") ||
      (t && t.indexOf(w) !== -1)
    );
  }
  function g(w) {
    a && a(w);
  }
  var h = function () {
    for (; d.length !== 0; ) _();
    return v || Promise.resolve();
  };
  return { update: y, flush: h };
}
function $I(e) {
  return JSON.stringify(e);
}
function BI(e) {
  var t = e.transforms || [],
    n = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : md).concat(e.key),
    r = e.storage;
  e.debug;
  var i;
  return (
    e.deserialize === !1
      ? (i = function (o) {
          return o;
        })
      : typeof e.deserialize == "function"
      ? (i = e.deserialize)
      : (i = VI),
    r.getItem(n).then(function (s) {
      if (s)
        try {
          var o = {},
            l = i(s);
          return (
            Object.keys(l).forEach(function (a) {
              o[a] = t.reduceRight(function (u, c) {
                return c.out(u, a, l);
              }, i(l[a]));
            }),
            o
          );
        } catch (a) {
          throw a;
        }
      else return;
    })
  );
}
function VI(e) {
  return JSON.parse(e);
}
function HI(e) {
  var t = e.storage,
    n = "".concat(e.keyPrefix !== void 0 ? e.keyPrefix : md).concat(e.key);
  return t.removeItem(n, WI);
}
function WI(e) {}
function qp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function xt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qp(n, !0).forEach(function (r) {
          GI(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : qp(n).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function GI(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function qI(e, t) {
  if (e == null) return {};
  var n = KI(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function KI(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var XI = 5e3;
function YI(e, t) {
  var n = e.version !== void 0 ? e.version : jI;
  e.debug;
  var r = e.stateReconciler === void 0 ? zI : e.stateReconciler,
    i = e.getStoredState || BI,
    s = e.timeout !== void 0 ? e.timeout : XI,
    o = null,
    l = !1,
    a = !0,
    u = function (d) {
      return d._persist.rehydrated && o && !a && o.update(d), d;
    };
  return function (c, d) {
    var f = c || {},
      v = f._persist,
      y = qI(f, ["_persist"]),
      _ = y;
    if (d.type === wy) {
      var S = !1,
        p = function (b, I) {
          S || (d.rehydrate(e.key, b, I), (S = !0));
        };
      if (
        (s &&
          setTimeout(function () {
            !S &&
              p(
                void 0,
                new Error(
                  'redux-persist: persist timed out for persist key "'.concat(
                    e.key,
                    '"'
                  )
                )
              );
          }, s),
        (a = !1),
        o || (o = FI(e)),
        v)
      )
        return xt({}, t(_, d), { _persist: v });
      if (typeof d.rehydrate != "function" || typeof d.register != "function")
        throw new Error(
          "redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution."
        );
      return (
        d.register(e.key),
        i(e).then(
          function (P) {
            var b =
              e.migrate ||
              function (I, T) {
                return Promise.resolve(I);
              };
            b(P, n).then(
              function (I) {
                p(I);
              },
              function (I) {
                p(void 0, I);
              }
            );
          },
          function (P) {
            p(void 0, P);
          }
        ),
        xt({}, t(_, d), { _persist: { version: n, rehydrated: !1 } })
      );
    } else {
      if (d.type === _y)
        return (l = !0), d.result(HI(e)), xt({}, t(_, d), { _persist: v });
      if (d.type === vy)
        return d.result(o && o.flush()), xt({}, t(_, d), { _persist: v });
      if (d.type === yy) a = !0;
      else if (d.type === gd) {
        if (l) return xt({}, _, { _persist: xt({}, v, { rehydrated: !0 }) });
        if (d.key === e.key) {
          var g = t(_, d),
            h = d.payload,
            w = r !== !1 && h !== void 0 ? r(h, c, g, e) : g,
            x = xt({}, w, { _persist: xt({}, v, { rehydrated: !0 }) });
          return u(x);
        }
      }
    }
    if (!v) return t(c, d);
    var E = t(_, d);
    return E === _ ? c : u(xt({}, E, { _persist: v }));
  };
}
function Me(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var QI = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  Kp = QI,
  yl = () => Math.random().toString(36).substring(7).split("").join("."),
  JI = {
    INIT: `@@redux/INIT${yl()}`,
    REPLACE: `@@redux/REPLACE${yl()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${yl()}`,
  },
  Xp = JI;
function ZI(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function xy(e, t, n) {
  if (typeof e != "function") throw new Error(Me(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Me(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(Me(1));
    return n(xy)(e, t);
  }
  let r = e,
    i = t,
    s = new Map(),
    o = s,
    l = 0,
    a = !1;
  function u() {
    o === s &&
      ((o = new Map()),
      s.forEach((S, p) => {
        o.set(p, S);
      }));
  }
  function c() {
    if (a) throw new Error(Me(3));
    return i;
  }
  function d(S) {
    if (typeof S != "function") throw new Error(Me(4));
    if (a) throw new Error(Me(5));
    let p = !0;
    u();
    const g = l++;
    return (
      o.set(g, S),
      function () {
        if (p) {
          if (a) throw new Error(Me(6));
          (p = !1), u(), o.delete(g), (s = null);
        }
      }
    );
  }
  function f(S) {
    if (!ZI(S)) throw new Error(Me(7));
    if (typeof S.type > "u") throw new Error(Me(8));
    if (typeof S.type != "string") throw new Error(Me(17));
    if (a) throw new Error(Me(9));
    try {
      (a = !0), (i = r(i, S));
    } finally {
      a = !1;
    }
    return (
      (s = o).forEach((g) => {
        g();
      }),
      S
    );
  }
  function v(S) {
    if (typeof S != "function") throw new Error(Me(10));
    (r = S), f({ type: Xp.REPLACE });
  }
  function y() {
    const S = d;
    return {
      subscribe(p) {
        if (typeof p != "object" || p === null) throw new Error(Me(11));
        function g() {
          const w = p;
          w.next && w.next(c());
        }
        return g(), { unsubscribe: S(g) };
      },
      [Kp]() {
        return this;
      },
    };
  }
  return (
    f({ type: Xp.INIT }),
    { dispatch: f, subscribe: d, getState: c, replaceReducer: v, [Kp]: y }
  );
}
function Yp(e) {
  return nk(e) || tk(e) || ek();
}
function ek() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function tk(e) {
  if (
    Symbol.iterator in Object(e) ||
    Object.prototype.toString.call(e) === "[object Arguments]"
  )
    return Array.from(e);
}
function nk(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
    return n;
  }
}
function Qp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ju(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Qp(n, !0).forEach(function (r) {
          rk(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Qp(n).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function rk(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var Ey = { registry: [], bootstrapped: !1 },
  ik = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ey,
      n = arguments.length > 1 ? arguments[1] : void 0;
    switch (n.type) {
      case Sy:
        return ju({}, t, { registry: [].concat(Yp(t.registry), [n.key]) });
      case gd:
        var r = t.registry.indexOf(n.key),
          i = Yp(t.registry);
        return (
          i.splice(r, 1),
          ju({}, t, { registry: i, bootstrapped: i.length === 0 })
        );
      default:
        return t;
    }
  };
function sk(e, t, n) {
  var r = xy(ik, Ey, void 0),
    i = function (a) {
      r.dispatch({ type: Sy, key: a });
    },
    s = function (a, u, c) {
      var d = { type: gd, payload: u, err: c, key: a };
      e.dispatch(d), r.dispatch(d);
    },
    o = ju({}, r, {
      purge: function () {
        var a = [];
        return (
          e.dispatch({
            type: _y,
            result: function (c) {
              a.push(c);
            },
          }),
          Promise.all(a)
        );
      },
      flush: function () {
        var a = [];
        return (
          e.dispatch({
            type: vy,
            result: function (c) {
              a.push(c);
            },
          }),
          Promise.all(a)
        );
      },
      pause: function () {
        e.dispatch({ type: yy });
      },
      persist: function () {
        e.dispatch({ type: wy, register: i, rehydrate: s });
      },
    });
  return o.persist(), o;
}
var vd = {},
  yd = {};
yd.__esModule = !0;
yd.default = lk;
function Qs(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Qs = function (n) {
          return typeof n;
        })
      : (Qs = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Qs(e)
  );
}
function wl() {}
var ok = { getItem: wl, setItem: wl, removeItem: wl };
function ak(e) {
  if ((typeof self > "u" ? "undefined" : Qs(self)) !== "object" || !(e in self))
    return !1;
  try {
    var t = self[e],
      n = "redux-persist ".concat(e, " test");
    t.setItem(n, "test"), t.getItem(n), t.removeItem(n);
  } catch {
    return !1;
  }
  return !0;
}
function lk(e) {
  var t = "".concat(e, "Storage");
  return ak(t) ? self[t] : ok;
}
vd.__esModule = !0;
vd.default = dk;
var uk = ck(yd);
function ck(e) {
  return e && e.__esModule ? e : { default: e };
}
function dk(e) {
  var t = (0, uk.default)(e);
  return {
    getItem: function (r) {
      return new Promise(function (i, s) {
        i(t.getItem(r));
      });
    },
    setItem: function (r, i) {
      return new Promise(function (s, o) {
        s(t.setItem(r, i));
      });
    },
    removeItem: function (r) {
      return new Promise(function (i, s) {
        i(t.removeItem(r));
      });
    },
  };
}
var Ty = void 0,
  fk = pk(vd);
function pk(e) {
  return e && e.__esModule ? e : { default: e };
}
var hk = (0, fk.default)("local");
Ty = hk;
const mk = Av({ user: oP }),
  gk = { key: "root", storage: Ty, version: 1 },
  vk = YI(gk, mk),
  Cy = Ab({ reducer: vk, middleware: (e) => e({ serializableCheck: !1 }) }),
  yk = sk(Cy);
var by = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rs = Symbol.for("react.element"),
  wk = Symbol.for("react.portal"),
  _k = Symbol.for("react.fragment"),
  Sk = Symbol.for("react.strict_mode"),
  xk = Symbol.for("react.profiler"),
  Ek = Symbol.for("react.provider"),
  Tk = Symbol.for("react.context"),
  Ck = Symbol.for("react.forward_ref"),
  bk = Symbol.for("react.suspense"),
  Pk = Symbol.for("react.memo"),
  Ik = Symbol.for("react.lazy"),
  Jp = Symbol.iterator;
function kk(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Jp && e[Jp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Py = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Iy = Object.assign,
  ky = {};
function Gr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ky),
    (this.updater = n || Py);
}
Gr.prototype.isReactComponent = {};
Gr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Gr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ny() {}
Ny.prototype = Gr.prototype;
function wd(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ky),
    (this.updater = n || Py);
}
var _d = (wd.prototype = new Ny());
_d.constructor = wd;
Iy(_d, Gr.prototype);
_d.isPureReactComponent = !0;
var Zp = Array.isArray,
  Oy = Object.prototype.hasOwnProperty,
  Sd = { current: null },
  Ry = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ly(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Oy.call(t, r) && !Ry.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: rs,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Sd.current,
  };
}
function Nk(e, t) {
  return {
    $$typeof: rs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function xd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === rs;
}
function Ok(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var eh = /\/+/g;
function _l(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ok("" + e.key)
    : t.toString(36);
}
function Js(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case rs:
          case wk:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + _l(o, 0) : r),
      Zp(i)
        ? ((n = ""),
          e != null && (n = e.replace(eh, "$&/") + "/"),
          Js(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (xd(i) &&
            (i = Nk(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(eh, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Zp(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + _l(s, l);
      o += Js(s, t, n, a, i);
    }
  else if (((a = kk(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + _l(s, l++)), (o += Js(s, t, n, a, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Os(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Js(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function Rk(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Pe = { current: null },
  Zs = { transition: null },
  Lk = {
    ReactCurrentDispatcher: Pe,
    ReactCurrentBatchConfig: Zs,
    ReactCurrentOwner: Sd,
  };
function Ay() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = {
  map: Os,
  forEach: function (e, t, n) {
    Os(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Os(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Os(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!xd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = Gr;
z.Fragment = _k;
z.Profiler = xk;
z.PureComponent = wd;
z.StrictMode = Sk;
z.Suspense = bk;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lk;
z.act = Ay;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Iy({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = Sd.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Oy.call(t, a) &&
        !Ry.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: rs, type: e.type, key: i, ref: s, props: r, _owner: o };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: Tk,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ek, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = Ly;
z.createFactory = function (e) {
  var t = Ly.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: Ck, render: e };
};
z.isValidElement = xd;
z.lazy = function (e) {
  return { $$typeof: Ik, _payload: { _status: -1, _result: e }, _init: Rk };
};
z.memo = function (e, t) {
  return { $$typeof: Pk, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = Zs.transition;
  Zs.transition = {};
  try {
    e();
  } finally {
    Zs.transition = t;
  }
};
z.unstable_act = Ay;
z.useCallback = function (e, t) {
  return Pe.current.useCallback(e, t);
};
z.useContext = function (e) {
  return Pe.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return Pe.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return Pe.current.useEffect(e, t);
};
z.useId = function () {
  return Pe.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return Pe.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return Pe.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return Pe.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return Pe.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return Pe.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return Pe.current.useRef(e);
};
z.useState = function (e) {
  return Pe.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return Pe.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return Pe.current.useTransition();
};
z.version = "18.3.1";
by.exports = z;
var Ak = by.exports;
function eo(e) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (eo = function (n) {
          return typeof n;
        })
      : (eo = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    eo(e)
  );
}
function Mk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function jk(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function Dk(e, t, n) {
  return t && jk(e.prototype, t), e;
}
function Uk(e, t) {
  return t && (eo(t) === "object" || typeof t == "function") ? t : to(e);
}
function Du(e) {
  return (
    (Du = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Du(e)
  );
}
function to(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function zk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Uu(e, t);
}
function Uu(e, t) {
  return (
    (Uu =
      Object.setPrototypeOf ||
      function (r, i) {
        return (r.__proto__ = i), r;
      }),
    Uu(e, t)
  );
}
function no(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var My = (function (e) {
  zk(t, e);
  function t() {
    var n, r;
    Mk(this, t);
    for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
      s[o] = arguments[o];
    return (
      (r = Uk(this, (n = Du(t)).call.apply(n, [this].concat(s)))),
      no(to(r), "state", { bootstrapped: !1 }),
      no(to(r), "_unsubscribe", void 0),
      no(to(r), "handlePersistorState", function () {
        var l = r.props.persistor,
          a = l.getState(),
          u = a.bootstrapped;
        u &&
          (r.props.onBeforeLift
            ? Promise.resolve(r.props.onBeforeLift()).finally(function () {
                return r.setState({ bootstrapped: !0 });
              })
            : r.setState({ bootstrapped: !0 }),
          r._unsubscribe && r._unsubscribe());
      }),
      r
    );
  }
  return (
    Dk(t, [
      {
        key: "componentDidMount",
        value: function () {
          (this._unsubscribe = this.props.persistor.subscribe(
            this.handlePersistorState
          )),
            this.handlePersistorState();
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          this._unsubscribe && this._unsubscribe();
        },
      },
      {
        key: "render",
        value: function () {
          return typeof this.props.children == "function"
            ? this.props.children(this.state.bootstrapped)
            : this.state.bootstrapped
            ? this.props.children
            : this.props.loading;
        },
      },
    ]),
    t
  );
})(Ak.PureComponent);
no(My, "defaultProps", { children: null, loading: null });
xl.createRoot(document.getElementById("root")).render(
  m.jsx(YC, {
    store: Cy,
    children: m.jsx(My, {
      loading: null,
      persistor: yk,
      children: m.jsx(MI, {}),
    }),
  })
);
