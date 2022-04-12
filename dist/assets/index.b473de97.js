var Qa = Object.defineProperty,
	Ka = Object.defineProperties;
var Za = Object.getOwnPropertyDescriptors;
var Si = Object.getOwnPropertySymbols;
var Ga = Object.prototype.hasOwnProperty,
	Ya = Object.prototype.propertyIsEnumerable;
var Ei = (e, n, t) =>
		n in e
			? Qa(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t })
			: (e[n] = t),
	Re = (e, n) => {
		for (var t in n || (n = {})) Ga.call(n, t) && Ei(e, t, n[t]);
		if (Si) for (var t of Si(n)) Ya.call(n, t) && Ei(e, t, n[t]);
		return e;
	},
	_i = (e, n) => Ka(e, Za(n));
const Xa = function () {
	const n = document.createElement("link").relList;
	if (n && n.supports && n.supports("modulepreload")) return;
	for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
	new MutationObserver((l) => {
		for (const o of l)
			if (o.type === "childList")
				for (const i of o.addedNodes)
					i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
	}).observe(document, { childList: !0, subtree: !0 });
	function t(l) {
		const o = {};
		return (
			l.integrity && (o.integrity = l.integrity),
			l.referrerpolicy && (o.referrerPolicy = l.referrerpolicy),
			l.crossorigin === "use-credentials"
				? (o.credentials = "include")
				: l.crossorigin === "anonymous"
				? (o.credentials = "omit")
				: (o.credentials = "same-origin"),
			o
		);
	}
	function r(l) {
		if (l.ep) return;
		l.ep = !0;
		const o = t(l);
		fetch(l.href, o);
	}
};
Xa();
var Se = { exports: {} },
	I = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var Li = Object.getOwnPropertySymbols,
	Ja = Object.prototype.hasOwnProperty,
	qa = Object.prototype.propertyIsEnumerable;
function ba(e) {
	if (e == null) throw new TypeError("Object.assign cannot be called with null or undefined");
	return Object(e);
}
function ef() {
	try {
		if (!Object.assign) return !1;
		var e = new String("abc");
		if (((e[5] = "de"), Object.getOwnPropertyNames(e)[0] === "5")) return !1;
		for (var n = {}, t = 0; t < 10; t++) n["_" + String.fromCharCode(t)] = t;
		var r = Object.getOwnPropertyNames(n).map(function (o) {
			return n[o];
		});
		if (r.join("") !== "0123456789") return !1;
		var l = {};
		return (
			"abcdefghijklmnopqrst".split("").forEach(function (o) {
				l[o] = o;
			}),
			Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst"
		);
	} catch {
		return !1;
	}
}
var Vu = ef()
	? Object.assign
	: function (e, n) {
			for (var t, r = ba(e), l, o = 1; o < arguments.length; o++) {
				t = Object(arguments[o]);
				for (var i in t) Ja.call(t, i) && (r[i] = t[i]);
				if (Li) {
					l = Li(t);
					for (var u = 0; u < l.length; u++) qa.call(t, l[u]) && (r[l[u]] = t[l[u]]);
				}
			}
			return r;
	  };
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xo = Vu,
	Yn = 60103,
	Qu = 60106;
I.Fragment = 60107;
I.StrictMode = 60108;
I.Profiler = 60114;
var Ku = 60109,
	Zu = 60110,
	Gu = 60112;
I.Suspense = 60113;
var Yu = 60115,
	Xu = 60116;
if (typeof Symbol == "function" && Symbol.for) {
	var ge = Symbol.for;
	(Yn = ge("react.element")),
		(Qu = ge("react.portal")),
		(I.Fragment = ge("react.fragment")),
		(I.StrictMode = ge("react.strict_mode")),
		(I.Profiler = ge("react.profiler")),
		(Ku = ge("react.provider")),
		(Zu = ge("react.context")),
		(Gu = ge("react.forward_ref")),
		(I.Suspense = ge("react.suspense")),
		(Yu = ge("react.memo")),
		(Xu = ge("react.lazy"));
}
var xi = typeof Symbol == "function" && Symbol.iterator;
function nf(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (xi && e[xi]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
function Zt(e) {
	for (
		var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1;
		t < arguments.length;
		t++
	)
		n += "&args[]=" + encodeURIComponent(arguments[t]);
	return (
		"Minified React error #" +
		e +
		"; visit " +
		n +
		" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	);
}
var Ju = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {}
	},
	qu = {};
function Xn(e, n, t) {
	(this.props = e), (this.context = n), (this.refs = qu), (this.updater = t || Ju);
}
Xn.prototype.isReactComponent = {};
Xn.prototype.setState = function (e, n) {
	if (typeof e != "object" && typeof e != "function" && e != null) throw Error(Zt(85));
	this.updater.enqueueSetState(this, e, n, "setState");
};
Xn.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function bu() {}
bu.prototype = Xn.prototype;
function Co(e, n, t) {
	(this.props = e), (this.context = n), (this.refs = qu), (this.updater = t || Ju);
}
var Po = (Co.prototype = new bu());
Po.constructor = Co;
xo(Po, Xn.prototype);
Po.isPureReactComponent = !0;
var No = { current: null },
	es = Object.prototype.hasOwnProperty,
	ns = { key: !0, ref: !0, __self: !0, __source: !0 };
function ts(e, n, t) {
	var r,
		l = {},
		o = null,
		i = null;
	if (n != null)
		for (r in (n.ref !== void 0 && (i = n.ref), n.key !== void 0 && (o = "" + n.key), n))
			es.call(n, r) && !ns.hasOwnProperty(r) && (l[r] = n[r]);
	var u = arguments.length - 2;
	if (u === 1) l.children = t;
	else if (1 < u) {
		for (var s = Array(u), d = 0; d < u; d++) s[d] = arguments[d + 2];
		l.children = s;
	}
	if (e && e.defaultProps) for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
	return { $$typeof: Yn, type: e, key: o, ref: i, props: l, _owner: No.current };
}
function tf(e, n) {
	return { $$typeof: Yn, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
}
function jo(e) {
	return typeof e == "object" && e !== null && e.$$typeof === Yn;
}
function rf(e) {
	var n = { "=": "=0", ":": "=2" };
	return (
		"$" +
		e.replace(/[=:]/g, function (t) {
			return n[t];
		})
	);
}
var Ci = /\/+/g;
function hl(e, n) {
	return typeof e == "object" && e !== null && e.key != null ? rf("" + e.key) : n.toString(36);
}
function mr(e, n, t, r, l) {
	var o = typeof e;
	(o === "undefined" || o === "boolean") && (e = null);
	var i = !1;
	if (e === null) i = !0;
	else
		switch (o) {
			case "string":
			case "number":
				i = !0;
				break;
			case "object":
				switch (e.$$typeof) {
					case Yn:
					case Qu:
						i = !0;
				}
		}
	if (i)
		return (
			(i = e),
			(l = l(i)),
			(e = r === "" ? "." + hl(i, 0) : r),
			Array.isArray(l)
				? ((t = ""),
				  e != null && (t = e.replace(Ci, "$&/") + "/"),
				  mr(l, n, t, "", function (d) {
						return d;
				  }))
				: l != null &&
				  (jo(l) &&
						(l = tf(
							l,
							t +
								(!l.key || (i && i.key === l.key)
									? ""
									: ("" + l.key).replace(Ci, "$&/") + "/") +
								e
						)),
				  n.push(l)),
			1
		);
	if (((i = 0), (r = r === "" ? "." : r + ":"), Array.isArray(e)))
		for (var u = 0; u < e.length; u++) {
			o = e[u];
			var s = r + hl(o, u);
			i += mr(o, n, t, s, l);
		}
	else if (((s = nf(e)), typeof s == "function"))
		for (e = s.call(e), u = 0; !(o = e.next()).done; )
			(o = o.value), (s = r + hl(o, u++)), (i += mr(o, n, t, s, l));
	else if (o === "object")
		throw (
			((n = "" + e),
			Error(
				Zt(
					31,
					n === "[object Object]"
						? "object with keys {" + Object.keys(e).join(", ") + "}"
						: n
				)
			))
		);
	return i;
}
function rr(e, n, t) {
	if (e == null) return e;
	var r = [],
		l = 0;
	return (
		mr(e, r, "", "", function (o) {
			return n.call(t, o, l++);
		}),
		r
	);
}
function lf(e) {
	if (e._status === -1) {
		var n = e._result;
		(n = n()),
			(e._status = 0),
			(e._result = n),
			n.then(
				function (t) {
					e._status === 0 && ((t = t.default), (e._status = 1), (e._result = t));
				},
				function (t) {
					e._status === 0 && ((e._status = 2), (e._result = t));
				}
			);
	}
	if (e._status === 1) return e._result;
	throw e._result;
}
var rs = { current: null };
function Ie() {
	var e = rs.current;
	if (e === null) throw Error(Zt(321));
	return e;
}
var of = {
	ReactCurrentDispatcher: rs,
	ReactCurrentBatchConfig: { transition: 0 },
	ReactCurrentOwner: No,
	IsSomeRendererActing: { current: !1 },
	assign: xo
};
I.Children = {
	map: rr,
	forEach: function (e, n, t) {
		rr(
			e,
			function () {
				n.apply(this, arguments);
			},
			t
		);
	},
	count: function (e) {
		var n = 0;
		return (
			rr(e, function () {
				n++;
			}),
			n
		);
	},
	toArray: function (e) {
		return (
			rr(e, function (n) {
				return n;
			}) || []
		);
	},
	only: function (e) {
		if (!jo(e)) throw Error(Zt(143));
		return e;
	}
};
I.Component = Xn;
I.PureComponent = Co;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = of;
I.cloneElement = function (e, n, t) {
	if (e == null) throw Error(Zt(267, e));
	var r = xo({}, e.props),
		l = e.key,
		o = e.ref,
		i = e._owner;
	if (n != null) {
		if (
			(n.ref !== void 0 && ((o = n.ref), (i = No.current)),
			n.key !== void 0 && (l = "" + n.key),
			e.type && e.type.defaultProps)
		)
			var u = e.type.defaultProps;
		for (s in n)
			es.call(n, s) &&
				!ns.hasOwnProperty(s) &&
				(r[s] = n[s] === void 0 && u !== void 0 ? u[s] : n[s]);
	}
	var s = arguments.length - 2;
	if (s === 1) r.children = t;
	else if (1 < s) {
		u = Array(s);
		for (var d = 0; d < s; d++) u[d] = arguments[d + 2];
		r.children = u;
	}
	return { $$typeof: Yn, type: e.type, key: l, ref: o, props: r, _owner: i };
};
I.createContext = function (e, n) {
	return (
		n === void 0 && (n = null),
		(e = {
			$$typeof: Zu,
			_calculateChangedBits: n,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}),
		(e.Provider = { $$typeof: Ku, _context: e }),
		(e.Consumer = e)
	);
};
I.createElement = ts;
I.createFactory = function (e) {
	var n = ts.bind(null, e);
	return (n.type = e), n;
};
I.createRef = function () {
	return { current: null };
};
I.forwardRef = function (e) {
	return { $$typeof: Gu, render: e };
};
I.isValidElement = jo;
I.lazy = function (e) {
	return { $$typeof: Xu, _payload: { _status: -1, _result: e }, _init: lf };
};
I.memo = function (e, n) {
	return { $$typeof: Yu, type: e, compare: n === void 0 ? null : n };
};
I.useCallback = function (e, n) {
	return Ie().useCallback(e, n);
};
I.useContext = function (e, n) {
	return Ie().useContext(e, n);
};
I.useDebugValue = function () {};
I.useEffect = function (e, n) {
	return Ie().useEffect(e, n);
};
I.useImperativeHandle = function (e, n, t) {
	return Ie().useImperativeHandle(e, n, t);
};
I.useLayoutEffect = function (e, n) {
	return Ie().useLayoutEffect(e, n);
};
I.useMemo = function (e, n) {
	return Ie().useMemo(e, n);
};
I.useReducer = function (e, n, t) {
	return Ie().useReducer(e, n, t);
};
I.useRef = function (e) {
	return Ie().useRef(e);
};
I.useState = function (e) {
	return Ie().useState(e);
};
I.version = "17.0.2";
Se.exports = I;
var ls = { exports: {} },
	ve = {},
	os = { exports: {} },
	is = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	var n, t, r, l;
	if (typeof performance == "object" && typeof performance.now == "function") {
		var o = performance;
		e.unstable_now = function () {
			return o.now();
		};
	} else {
		var i = Date,
			u = i.now();
		e.unstable_now = function () {
			return i.now() - u;
		};
	}
	if (typeof window == "undefined" || typeof MessageChannel != "function") {
		var s = null,
			d = null,
			g = function () {
				if (s !== null)
					try {
						var w = e.unstable_now();
						s(!0, w), (s = null);
					} catch (T) {
						throw (setTimeout(g, 0), T);
					}
			};
		(n = function (w) {
			s !== null ? setTimeout(n, 0, w) : ((s = w), setTimeout(g, 0));
		}),
			(t = function (w, T) {
				d = setTimeout(w, T);
			}),
			(r = function () {
				clearTimeout(d);
			}),
			(e.unstable_shouldYield = function () {
				return !1;
			}),
			(l = e.unstable_forceFrameRate = function () {});
	} else {
		var C = window.setTimeout,
			y = window.clearTimeout;
		if (typeof console != "undefined") {
			var E = window.cancelAnimationFrame;
			typeof window.requestAnimationFrame != "function" &&
				console.error(
					"This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
				),
				typeof E != "function" &&
					console.error(
						"This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
					);
		}
		var L = !1,
			_ = null,
			c = -1,
			a = 5,
			f = 0;
		(e.unstable_shouldYield = function () {
			return e.unstable_now() >= f;
		}),
			(l = function () {}),
			(e.unstable_forceFrameRate = function (w) {
				0 > w || 125 < w
					? console.error(
							"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
					  )
					: (a = 0 < w ? Math.floor(1e3 / w) : 5);
			});
		var h = new MessageChannel(),
			m = h.port2;
		(h.port1.onmessage = function () {
			if (_ !== null) {
				var w = e.unstable_now();
				f = w + a;
				try {
					_(!0, w) ? m.postMessage(null) : ((L = !1), (_ = null));
				} catch (T) {
					throw (m.postMessage(null), T);
				}
			} else L = !1;
		}),
			(n = function (w) {
				(_ = w), L || ((L = !0), m.postMessage(null));
			}),
			(t = function (w, T) {
				c = C(function () {
					w(e.unstable_now());
				}, T);
			}),
			(r = function () {
				y(c), (c = -1);
			});
	}
	function N(w, T) {
		var z = w.length;
		w.push(T);
		e: for (;;) {
			var B = (z - 1) >>> 1,
				G = w[B];
			if (G !== void 0 && 0 < M(G, T)) (w[B] = T), (w[z] = G), (z = B);
			else break e;
		}
	}
	function k(w) {
		return (w = w[0]), w === void 0 ? null : w;
	}
	function P(w) {
		var T = w[0];
		if (T !== void 0) {
			var z = w.pop();
			if (z !== T) {
				w[0] = z;
				e: for (var B = 0, G = w.length; B < G; ) {
					var rn = 2 * (B + 1) - 1,
						ln = w[rn],
						rt = rn + 1,
						xn = w[rt];
					if (ln !== void 0 && 0 > M(ln, z))
						xn !== void 0 && 0 > M(xn, ln)
							? ((w[B] = xn), (w[rt] = z), (B = rt))
							: ((w[B] = ln), (w[rn] = z), (B = rn));
					else if (xn !== void 0 && 0 > M(xn, z)) (w[B] = xn), (w[rt] = z), (B = rt);
					else break e;
				}
			}
			return T;
		}
		return null;
	}
	function M(w, T) {
		var z = w.sortIndex - T.sortIndex;
		return z !== 0 ? z : w.id - T.id;
	}
	var x = [],
		Z = [],
		fl = 1,
		ce = null,
		q = 3,
		tr = !1,
		tn = !1,
		tt = !1;
	function cl(w) {
		for (var T = k(Z); T !== null; ) {
			if (T.callback === null) P(Z);
			else if (T.startTime <= w) P(Z), (T.sortIndex = T.expirationTime), N(x, T);
			else break;
			T = k(Z);
		}
	}
	function dl(w) {
		if (((tt = !1), cl(w), !tn))
			if (k(x) !== null) (tn = !0), n(pl);
			else {
				var T = k(Z);
				T !== null && t(dl, T.startTime - w);
			}
	}
	function pl(w, T) {
		(tn = !1), tt && ((tt = !1), r()), (tr = !0);
		var z = q;
		try {
			for (
				cl(T), ce = k(x);
				ce !== null && (!(ce.expirationTime > T) || (w && !e.unstable_shouldYield()));

			) {
				var B = ce.callback;
				if (typeof B == "function") {
					(ce.callback = null), (q = ce.priorityLevel);
					var G = B(ce.expirationTime <= T);
					(T = e.unstable_now()),
						typeof G == "function" ? (ce.callback = G) : ce === k(x) && P(x),
						cl(T);
				} else P(x);
				ce = k(x);
			}
			if (ce !== null) var rn = !0;
			else {
				var ln = k(Z);
				ln !== null && t(dl, ln.startTime - T), (rn = !1);
			}
			return rn;
		} finally {
			(ce = null), (q = z), (tr = !1);
		}
	}
	var Va = l;
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (w) {
			w.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			tn || tr || ((tn = !0), n(pl));
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return q;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return k(x);
		}),
		(e.unstable_next = function (w) {
			switch (q) {
				case 1:
				case 2:
				case 3:
					var T = 3;
					break;
				default:
					T = q;
			}
			var z = q;
			q = T;
			try {
				return w();
			} finally {
				q = z;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = Va),
		(e.unstable_runWithPriority = function (w, T) {
			switch (w) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					w = 3;
			}
			var z = q;
			q = w;
			try {
				return T();
			} finally {
				q = z;
			}
		}),
		(e.unstable_scheduleCallback = function (w, T, z) {
			var B = e.unstable_now();
			switch (
				(typeof z == "object" && z !== null
					? ((z = z.delay), (z = typeof z == "number" && 0 < z ? B + z : B))
					: (z = B),
				w)
			) {
				case 1:
					var G = -1;
					break;
				case 2:
					G = 250;
					break;
				case 5:
					G = 1073741823;
					break;
				case 4:
					G = 1e4;
					break;
				default:
					G = 5e3;
			}
			return (
				(G = z + G),
				(w = {
					id: fl++,
					callback: T,
					priorityLevel: w,
					startTime: z,
					expirationTime: G,
					sortIndex: -1
				}),
				z > B
					? ((w.sortIndex = z),
					  N(Z, w),
					  k(x) === null && w === k(Z) && (tt ? r() : (tt = !0), t(dl, z - B)))
					: ((w.sortIndex = G), N(x, w), tn || tr || ((tn = !0), n(pl))),
				w
			);
		}),
		(e.unstable_wrapCallback = function (w) {
			var T = q;
			return function () {
				var z = q;
				q = T;
				try {
					return w.apply(this, arguments);
				} finally {
					q = z;
				}
			};
		});
})(is);
os.exports = is;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yr = Se.exports,
	U = Vu,
	K = os.exports;
function v(e) {
	for (
		var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1;
		t < arguments.length;
		t++
	)
		n += "&args[]=" + encodeURIComponent(arguments[t]);
	return (
		"Minified React error #" +
		e +
		"; visit " +
		n +
		" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	);
}
if (!Yr) throw Error(v(227));
var us = new Set(),
	zt = {};
function yn(e, n) {
	Qn(e, n), Qn(e + "Capture", n);
}
function Qn(e, n) {
	for (zt[e] = n, e = 0; e < n.length; e++) us.add(n[e]);
}
var ze = !(
		typeof window == "undefined" ||
		typeof window.document == "undefined" ||
		typeof window.document.createElement == "undefined"
	),
	uf =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Pi = Object.prototype.hasOwnProperty,
	Ni = {},
	ji = {};
function sf(e) {
	return Pi.call(ji, e)
		? !0
		: Pi.call(Ni, e)
		? !1
		: uf.test(e)
		? (ji[e] = !0)
		: ((Ni[e] = !0), !1);
}
function af(e, n, t, r) {
	if (t !== null && t.type === 0) return !1;
	switch (typeof n) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return r
				? !1
				: t !== null
				? !t.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
		default:
			return !1;
	}
}
function ff(e, n, t, r) {
	if (n === null || typeof n == "undefined" || af(e, n, t, r)) return !0;
	if (r) return !1;
	if (t !== null)
		switch (t.type) {
			case 3:
				return !n;
			case 4:
				return n === !1;
			case 5:
				return isNaN(n);
			case 6:
				return isNaN(n) || 1 > n;
		}
	return !1;
}
function le(e, n, t, r, l, o, i) {
	(this.acceptsBooleans = n === 2 || n === 3 || n === 4),
		(this.attributeName = r),
		(this.attributeNamespace = l),
		(this.mustUseProperty = t),
		(this.propertyName = e),
		(this.type = n),
		(this.sanitizeURL = o),
		(this.removeEmptyString = i);
}
var J = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
	.split(" ")
	.forEach(function (e) {
		J[e] = new le(e, 0, !1, e, null, !1, !1);
	});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"]
].forEach(function (e) {
	var n = e[0];
	J[n] = new le(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
	J[e] = new le(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
	J[e] = new le(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
	.split(" ")
	.forEach(function (e) {
		J[e] = new le(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
	J[e] = new le(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
	J[e] = new le(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
	J[e] = new le(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
	J[e] = new le(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var To = /[\-:]([a-z])/g;
function Mo(e) {
	return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
	.split(" ")
	.forEach(function (e) {
		var n = e.replace(To, Mo);
		J[n] = new le(n, 1, !1, e, null, !1, !1);
	});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
	.split(" ")
	.forEach(function (e) {
		var n = e.replace(To, Mo);
		J[n] = new le(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
	var n = e.replace(To, Mo);
	J[n] = new le(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
	J[e] = new le(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
J.xlinkHref = new le("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
	J[e] = new le(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Oo(e, n, t, r) {
	var l = J.hasOwnProperty(n) ? J[n] : null,
		o =
			l !== null
				? l.type === 0
				: r
				? !1
				: !(
						!(2 < n.length) ||
						(n[0] !== "o" && n[0] !== "O") ||
						(n[1] !== "n" && n[1] !== "N")
				  );
	o ||
		(ff(n, t, l, r) && (t = null),
		r || l === null
			? sf(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
			: l.mustUseProperty
			? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
			: ((n = l.attributeName),
			  (r = l.attributeNamespace),
			  t === null
					? e.removeAttribute(n)
					: ((l = l.type),
					  (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
					  r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var vn = Yr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	yt = 60103,
	un = 60106,
	De = 60107,
	zo = 60108,
	St = 60114,
	Io = 60109,
	Ro = 60110,
	Xr = 60112,
	Et = 60113,
	Cr = 60120,
	Jr = 60115,
	Wo = 60116,
	Do = 60121,
	Fo = 60128,
	ss = 60129,
	Uo = 60130,
	Fl = 60131;
if (typeof Symbol == "function" && Symbol.for) {
	var Q = Symbol.for;
	(yt = Q("react.element")),
		(un = Q("react.portal")),
		(De = Q("react.fragment")),
		(zo = Q("react.strict_mode")),
		(St = Q("react.profiler")),
		(Io = Q("react.provider")),
		(Ro = Q("react.context")),
		(Xr = Q("react.forward_ref")),
		(Et = Q("react.suspense")),
		(Cr = Q("react.suspense_list")),
		(Jr = Q("react.memo")),
		(Wo = Q("react.lazy")),
		(Do = Q("react.block")),
		Q("react.scope"),
		(Fo = Q("react.opaque.id")),
		(ss = Q("react.debug_trace_mode")),
		(Uo = Q("react.offscreen")),
		(Fl = Q("react.legacy_hidden"));
}
var Ti = typeof Symbol == "function" && Symbol.iterator;
function lt(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Ti && e[Ti]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var ml;
function vt(e) {
	if (ml === void 0)
		try {
			throw Error();
		} catch (t) {
			var n = t.stack.trim().match(/\n( *(at )?)/);
			ml = (n && n[1]) || "";
		}
	return (
		`
` +
		ml +
		e
	);
}
var yl = !1;
function lr(e, n) {
	if (!e || yl) return "";
	yl = !0;
	var t = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (n)
			if (
				((n = function () {
					throw Error();
				}),
				Object.defineProperty(n.prototype, "props", {
					set: function () {
						throw Error();
					}
				}),
				typeof Reflect == "object" && Reflect.construct)
			) {
				try {
					Reflect.construct(n, []);
				} catch (s) {
					var r = s;
				}
				Reflect.construct(e, [], n);
			} else {
				try {
					n.call();
				} catch (s) {
					r = s;
				}
				e.call(n.prototype);
			}
		else {
			try {
				throw Error();
			} catch (s) {
				r = s;
			}
			e();
		}
	} catch (s) {
		if (s && r && typeof s.stack == "string") {
			for (
				var l = s.stack.split(`
`),
					o = r.stack.split(`
`),
					i = l.length - 1,
					u = o.length - 1;
				1 <= i && 0 <= u && l[i] !== o[u];

			)
				u--;
			for (; 1 <= i && 0 <= u; i--, u--)
				if (l[i] !== o[u]) {
					if (i !== 1 || u !== 1)
						do
							if ((i--, u--, 0 > u || l[i] !== o[u]))
								return (
									`
` + l[i].replace(" at new ", " at ")
								);
						while (1 <= i && 0 <= u);
					break;
				}
		}
	} finally {
		(yl = !1), (Error.prepareStackTrace = t);
	}
	return (e = e ? e.displayName || e.name : "") ? vt(e) : "";
}
function cf(e) {
	switch (e.tag) {
		case 5:
			return vt(e.type);
		case 16:
			return vt("Lazy");
		case 13:
			return vt("Suspense");
		case 19:
			return vt("SuspenseList");
		case 0:
		case 2:
		case 15:
			return (e = lr(e.type, !1)), e;
		case 11:
			return (e = lr(e.type.render, !1)), e;
		case 22:
			return (e = lr(e.type._render, !1)), e;
		case 1:
			return (e = lr(e.type, !0)), e;
		default:
			return "";
	}
}
function Rn(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case De:
			return "Fragment";
		case un:
			return "Portal";
		case St:
			return "Profiler";
		case zo:
			return "StrictMode";
		case Et:
			return "Suspense";
		case Cr:
			return "SuspenseList";
	}
	if (typeof e == "object")
		switch (e.$$typeof) {
			case Ro:
				return (e.displayName || "Context") + ".Consumer";
			case Io:
				return (e._context.displayName || "Context") + ".Provider";
			case Xr:
				var n = e.render;
				return (
					(n = n.displayName || n.name || ""),
					e.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")
				);
			case Jr:
				return Rn(e.type);
			case Do:
				return Rn(e._render);
			case Wo:
				(n = e._payload), (e = e._init);
				try {
					return Rn(e(n));
				} catch {}
		}
	return null;
}
function Ye(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "object":
		case "string":
		case "undefined":
			return e;
		default:
			return "";
	}
}
function as(e) {
	var n = e.type;
	return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}
function df(e) {
	var n = as(e) ? "checked" : "value",
		t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
		r = "" + e[n];
	if (
		!e.hasOwnProperty(n) &&
		typeof t != "undefined" &&
		typeof t.get == "function" &&
		typeof t.set == "function"
	) {
		var l = t.get,
			o = t.set;
		return (
			Object.defineProperty(e, n, {
				configurable: !0,
				get: function () {
					return l.call(this);
				},
				set: function (i) {
					(r = "" + i), o.call(this, i);
				}
			}),
			Object.defineProperty(e, n, { enumerable: t.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (i) {
					r = "" + i;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[n];
				}
			}
		);
	}
}
function or(e) {
	e._valueTracker || (e._valueTracker = df(e));
}
function fs(e) {
	if (!e) return !1;
	var n = e._valueTracker;
	if (!n) return !0;
	var t = n.getValue(),
		r = "";
	return (
		e && (r = as(e) ? (e.checked ? "true" : "false") : e.value),
		(e = r),
		e !== t ? (n.setValue(e), !0) : !1
	);
}
function Pr(e) {
	if (((e = e || (typeof document != "undefined" ? document : void 0)), typeof e == "undefined"))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function Ul(e, n) {
	var t = n.checked;
	return U({}, n, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: t != null ? t : e._wrapperState.initialChecked
	});
}
function Mi(e, n) {
	var t = n.defaultValue == null ? "" : n.defaultValue,
		r = n.checked != null ? n.checked : n.defaultChecked;
	(t = Ye(n.value != null ? n.value : t)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: t,
			controlled:
				n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null
		});
}
function cs(e, n) {
	(n = n.checked), n != null && Oo(e, "checked", n, !1);
}
function $l(e, n) {
	cs(e, n);
	var t = Ye(n.value),
		r = n.type;
	if (t != null)
		r === "number"
			? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
			: e.value !== "" + t && (e.value = "" + t);
	else if (r === "submit" || r === "reset") {
		e.removeAttribute("value");
		return;
	}
	n.hasOwnProperty("value")
		? Al(e, n.type, t)
		: n.hasOwnProperty("defaultValue") && Al(e, n.type, Ye(n.defaultValue)),
		n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}
function Oi(e, n, t) {
	if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
		var r = n.type;
		if (!((r !== "submit" && r !== "reset") || (n.value !== void 0 && n.value !== null)))
			return;
		(n = "" + e._wrapperState.initialValue),
			t || n === e.value || (e.value = n),
			(e.defaultValue = n);
	}
	(t = e.name),
		t !== "" && (e.name = ""),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		t !== "" && (e.name = t);
}
function Al(e, n, t) {
	(n !== "number" || Pr(e.ownerDocument) !== e) &&
		(t == null
			? (e.defaultValue = "" + e._wrapperState.initialValue)
			: e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
function pf(e) {
	var n = "";
	return (
		Yr.Children.forEach(e, function (t) {
			t != null && (n += t);
		}),
		n
	);
}
function Bl(e, n) {
	return (e = U({ children: void 0 }, n)), (n = pf(n.children)) && (e.children = n), e;
}
function Wn(e, n, t, r) {
	if (((e = e.options), n)) {
		n = {};
		for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
		for (t = 0; t < e.length; t++)
			(l = n.hasOwnProperty("$" + e[t].value)),
				e[t].selected !== l && (e[t].selected = l),
				l && r && (e[t].defaultSelected = !0);
	} else {
		for (t = "" + Ye(t), n = null, l = 0; l < e.length; l++) {
			if (e[l].value === t) {
				(e[l].selected = !0), r && (e[l].defaultSelected = !0);
				return;
			}
			n !== null || e[l].disabled || (n = e[l]);
		}
		n !== null && (n.selected = !0);
	}
}
function Hl(e, n) {
	if (n.dangerouslySetInnerHTML != null) throw Error(v(91));
	return U({}, n, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue
	});
}
function zi(e, n) {
	var t = n.value;
	if (t == null) {
		if (((t = n.children), (n = n.defaultValue), t != null)) {
			if (n != null) throw Error(v(92));
			if (Array.isArray(t)) {
				if (!(1 >= t.length)) throw Error(v(93));
				t = t[0];
			}
			n = t;
		}
		n == null && (n = ""), (t = n);
	}
	e._wrapperState = { initialValue: Ye(t) };
}
function ds(e, n) {
	var t = Ye(n.value),
		r = Ye(n.defaultValue);
	t != null &&
		((t = "" + t),
		t !== e.value && (e.value = t),
		n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
		r != null && (e.defaultValue = "" + r);
}
function Ii(e) {
	var n = e.textContent;
	n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
var Vl = {
	html: "http://www.w3.org/1999/xhtml",
	mathml: "http://www.w3.org/1998/Math/MathML",
	svg: "http://www.w3.org/2000/svg"
};
function ps(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml";
	}
}
function Ql(e, n) {
	return e == null || e === "http://www.w3.org/1999/xhtml"
		? ps(n)
		: e === "http://www.w3.org/2000/svg" && n === "foreignObject"
		? "http://www.w3.org/1999/xhtml"
		: e;
}
var ir,
	hs = (function (e) {
		return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction
			? function (n, t, r, l) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(n, t, r, l);
					});
			  }
			: e;
	})(function (e, n) {
		if (e.namespaceURI !== Vl.svg || "innerHTML" in e) e.innerHTML = n;
		else {
			for (
				ir = ir || document.createElement("div"),
					ir.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
					n = ir.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; n.firstChild; ) e.appendChild(n.firstChild);
		}
	});
function It(e, n) {
	if (n) {
		var t = e.firstChild;
		if (t && t === e.lastChild && t.nodeType === 3) {
			t.nodeValue = n;
			return;
		}
	}
	e.textContent = n;
}
var _t = {
		animationIterationCount: !0,
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
		strokeWidth: !0
	},
	hf = ["Webkit", "ms", "Moz", "O"];
Object.keys(_t).forEach(function (e) {
	hf.forEach(function (n) {
		(n = n + e.charAt(0).toUpperCase() + e.substring(1)), (_t[n] = _t[e]);
	});
});
function ms(e, n, t) {
	return n == null || typeof n == "boolean" || n === ""
		? ""
		: t || typeof n != "number" || n === 0 || (_t.hasOwnProperty(e) && _t[e])
		? ("" + n).trim()
		: n + "px";
}
function ys(e, n) {
	e = e.style;
	for (var t in n)
		if (n.hasOwnProperty(t)) {
			var r = t.indexOf("--") === 0,
				l = ms(t, n[t], r);
			t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
		}
}
var mf = U(
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
		wbr: !0
	}
);
function Kl(e, n) {
	if (n) {
		if (mf[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
			throw Error(v(137, e));
		if (n.dangerouslySetInnerHTML != null) {
			if (n.children != null) throw Error(v(60));
			if (
				!(
					typeof n.dangerouslySetInnerHTML == "object" &&
					"__html" in n.dangerouslySetInnerHTML
				)
			)
				throw Error(v(61));
		}
		if (n.style != null && typeof n.style != "object") throw Error(v(62));
	}
}
function Zl(e, n) {
	if (e.indexOf("-") === -1) return typeof n.is == "string";
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
function $o(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var Gl = null,
	Dn = null,
	Fn = null;
function Ri(e) {
	if ((e = Yt(e))) {
		if (typeof Gl != "function") throw Error(v(280));
		var n = e.stateNode;
		n && ((n = rl(n)), Gl(e.stateNode, e.type, n));
	}
}
function vs(e) {
	Dn ? (Fn ? Fn.push(e) : (Fn = [e])) : (Dn = e);
}
function gs() {
	if (Dn) {
		var e = Dn,
			n = Fn;
		if (((Fn = Dn = null), Ri(e), n)) for (e = 0; e < n.length; e++) Ri(n[e]);
	}
}
function Ao(e, n) {
	return e(n);
}
function ks(e, n, t, r, l) {
	return e(n, t, r, l);
}
function Bo() {}
var ws = Ao,
	sn = !1,
	vl = !1;
function Ho() {
	(Dn !== null || Fn !== null) && (Bo(), gs());
}
function yf(e, n, t) {
	if (vl) return e(n, t);
	vl = !0;
	try {
		return ws(e, n, t);
	} finally {
		(vl = !1), Ho();
	}
}
function Rt(e, n) {
	var t = e.stateNode;
	if (t === null) return null;
	var r = rl(t);
	if (r === null) return null;
	t = r[n];
	e: switch (n) {
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
				(r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
				(e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (t && typeof t != "function") throw Error(v(231, n, typeof t));
	return t;
}
var Yl = !1;
if (ze)
	try {
		var ot = {};
		Object.defineProperty(ot, "passive", {
			get: function () {
				Yl = !0;
			}
		}),
			window.addEventListener("test", ot, ot),
			window.removeEventListener("test", ot, ot);
	} catch {
		Yl = !1;
	}
function vf(e, n, t, r, l, o, i, u, s) {
	var d = Array.prototype.slice.call(arguments, 3);
	try {
		n.apply(t, d);
	} catch (g) {
		this.onError(g);
	}
}
var Lt = !1,
	Nr = null,
	jr = !1,
	Xl = null,
	gf = {
		onError: function (e) {
			(Lt = !0), (Nr = e);
		}
	};
function kf(e, n, t, r, l, o, i, u, s) {
	(Lt = !1), (Nr = null), vf.apply(gf, arguments);
}
function wf(e, n, t, r, l, o, i, u, s) {
	if ((kf.apply(this, arguments), Lt)) {
		if (Lt) {
			var d = Nr;
			(Lt = !1), (Nr = null);
		} else throw Error(v(198));
		jr || ((jr = !0), (Xl = d));
	}
}
function gn(e) {
	var n = e,
		t = e;
	if (e.alternate) for (; n.return; ) n = n.return;
	else {
		e = n;
		do (n = e), (n.flags & 1026) !== 0 && (t = n.return), (e = n.return);
		while (e);
	}
	return n.tag === 3 ? t : null;
}
function Ss(e) {
	if (e.tag === 13) {
		var n = e.memoizedState;
		if ((n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)), n !== null))
			return n.dehydrated;
	}
	return null;
}
function Wi(e) {
	if (gn(e) !== e) throw Error(v(188));
}
function Sf(e) {
	var n = e.alternate;
	if (!n) {
		if (((n = gn(e)), n === null)) throw Error(v(188));
		return n !== e ? null : e;
	}
	for (var t = e, r = n; ; ) {
		var l = t.return;
		if (l === null) break;
		var o = l.alternate;
		if (o === null) {
			if (((r = l.return), r !== null)) {
				t = r;
				continue;
			}
			break;
		}
		if (l.child === o.child) {
			for (o = l.child; o; ) {
				if (o === t) return Wi(l), e;
				if (o === r) return Wi(l), n;
				o = o.sibling;
			}
			throw Error(v(188));
		}
		if (t.return !== r.return) (t = l), (r = o);
		else {
			for (var i = !1, u = l.child; u; ) {
				if (u === t) {
					(i = !0), (t = l), (r = o);
					break;
				}
				if (u === r) {
					(i = !0), (r = l), (t = o);
					break;
				}
				u = u.sibling;
			}
			if (!i) {
				for (u = o.child; u; ) {
					if (u === t) {
						(i = !0), (t = o), (r = l);
						break;
					}
					if (u === r) {
						(i = !0), (r = o), (t = l);
						break;
					}
					u = u.sibling;
				}
				if (!i) throw Error(v(189));
			}
		}
		if (t.alternate !== r) throw Error(v(190));
	}
	if (t.tag !== 3) throw Error(v(188));
	return t.stateNode.current === t ? e : n;
}
function Es(e) {
	if (((e = Sf(e)), !e)) return null;
	for (var n = e; ; ) {
		if (n.tag === 5 || n.tag === 6) return n;
		if (n.child) (n.child.return = n), (n = n.child);
		else {
			if (n === e) break;
			for (; !n.sibling; ) {
				if (!n.return || n.return === e) return null;
				n = n.return;
			}
			(n.sibling.return = n.return), (n = n.sibling);
		}
	}
	return null;
}
function Di(e, n) {
	for (var t = e.alternate; n !== null; ) {
		if (n === e || n === t) return !0;
		n = n.return;
	}
	return !1;
}
var _s,
	Vo,
	Ls,
	xs,
	Jl = !1,
	Ee = [],
	Ae = null,
	Be = null,
	He = null,
	Wt = new Map(),
	Dt = new Map(),
	it = [],
	Fi =
		"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
			" "
		);
function ql(e, n, t, r, l) {
	return {
		blockedOn: e,
		domEventName: n,
		eventSystemFlags: t | 16,
		nativeEvent: l,
		targetContainers: [r]
	};
}
function Ui(e, n) {
	switch (e) {
		case "focusin":
		case "focusout":
			Ae = null;
			break;
		case "dragenter":
		case "dragleave":
			Be = null;
			break;
		case "mouseover":
		case "mouseout":
			He = null;
			break;
		case "pointerover":
		case "pointerout":
			Wt.delete(n.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			Dt.delete(n.pointerId);
	}
}
function ut(e, n, t, r, l, o) {
	return e === null || e.nativeEvent !== o
		? ((e = ql(n, t, r, l, o)), n !== null && ((n = Yt(n)), n !== null && Vo(n)), e)
		: ((e.eventSystemFlags |= r),
		  (n = e.targetContainers),
		  l !== null && n.indexOf(l) === -1 && n.push(l),
		  e);
}
function Ef(e, n, t, r, l) {
	switch (n) {
		case "focusin":
			return (Ae = ut(Ae, e, n, t, r, l)), !0;
		case "dragenter":
			return (Be = ut(Be, e, n, t, r, l)), !0;
		case "mouseover":
			return (He = ut(He, e, n, t, r, l)), !0;
		case "pointerover":
			var o = l.pointerId;
			return Wt.set(o, ut(Wt.get(o) || null, e, n, t, r, l)), !0;
		case "gotpointercapture":
			return (o = l.pointerId), Dt.set(o, ut(Dt.get(o) || null, e, n, t, r, l)), !0;
	}
	return !1;
}
function _f(e) {
	var n = an(e.target);
	if (n !== null) {
		var t = gn(n);
		if (t !== null) {
			if (((n = t.tag), n === 13)) {
				if (((n = Ss(t)), n !== null)) {
					(e.blockedOn = n),
						xs(e.lanePriority, function () {
							K.unstable_runWithPriority(e.priority, function () {
								Ls(t);
							});
						});
					return;
				}
			} else if (n === 3 && t.stateNode.hydrate) {
				e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function yr(e) {
	if (e.blockedOn !== null) return !1;
	for (var n = e.targetContainers; 0 < n.length; ) {
		var t = Go(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
		if (t !== null) return (n = Yt(t)), n !== null && Vo(n), (e.blockedOn = t), !1;
		n.shift();
	}
	return !0;
}
function $i(e, n, t) {
	yr(e) && t.delete(n);
}
function Lf() {
	for (Jl = !1; 0 < Ee.length; ) {
		var e = Ee[0];
		if (e.blockedOn !== null) {
			(e = Yt(e.blockedOn)), e !== null && _s(e);
			break;
		}
		for (var n = e.targetContainers; 0 < n.length; ) {
			var t = Go(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
			if (t !== null) {
				e.blockedOn = t;
				break;
			}
			n.shift();
		}
		e.blockedOn === null && Ee.shift();
	}
	Ae !== null && yr(Ae) && (Ae = null),
		Be !== null && yr(Be) && (Be = null),
		He !== null && yr(He) && (He = null),
		Wt.forEach($i),
		Dt.forEach($i);
}
function st(e, n) {
	e.blockedOn === n &&
		((e.blockedOn = null),
		Jl || ((Jl = !0), K.unstable_scheduleCallback(K.unstable_NormalPriority, Lf)));
}
function Cs(e) {
	function n(l) {
		return st(l, e);
	}
	if (0 < Ee.length) {
		st(Ee[0], e);
		for (var t = 1; t < Ee.length; t++) {
			var r = Ee[t];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		Ae !== null && st(Ae, e),
			Be !== null && st(Be, e),
			He !== null && st(He, e),
			Wt.forEach(n),
			Dt.forEach(n),
			t = 0;
		t < it.length;
		t++
	)
		(r = it[t]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < it.length && ((t = it[0]), t.blockedOn === null); )
		_f(t), t.blockedOn === null && it.shift();
}
function ur(e, n) {
	var t = {};
	return (
		(t[e.toLowerCase()] = n.toLowerCase()),
		(t["Webkit" + e] = "webkit" + n),
		(t["Moz" + e] = "moz" + n),
		t
	);
}
var jn = {
		animationend: ur("Animation", "AnimationEnd"),
		animationiteration: ur("Animation", "AnimationIteration"),
		animationstart: ur("Animation", "AnimationStart"),
		transitionend: ur("Transition", "TransitionEnd")
	},
	gl = {},
	Ps = {};
ze &&
	((Ps = document.createElement("div").style),
	"AnimationEvent" in window ||
		(delete jn.animationend.animation,
		delete jn.animationiteration.animation,
		delete jn.animationstart.animation),
	"TransitionEvent" in window || delete jn.transitionend.transition);
function qr(e) {
	if (gl[e]) return gl[e];
	if (!jn[e]) return e;
	var n = jn[e],
		t;
	for (t in n) if (n.hasOwnProperty(t) && t in Ps) return (gl[e] = n[t]);
	return e;
}
var Ns = qr("animationend"),
	js = qr("animationiteration"),
	Ts = qr("animationstart"),
	Ms = qr("transitionend"),
	Os = new Map(),
	Qo = new Map(),
	xf = [
		"abort",
		"abort",
		Ns,
		"animationEnd",
		js,
		"animationIteration",
		Ts,
		"animationStart",
		"canplay",
		"canPlay",
		"canplaythrough",
		"canPlayThrough",
		"durationchange",
		"durationChange",
		"emptied",
		"emptied",
		"encrypted",
		"encrypted",
		"ended",
		"ended",
		"error",
		"error",
		"gotpointercapture",
		"gotPointerCapture",
		"load",
		"load",
		"loadeddata",
		"loadedData",
		"loadedmetadata",
		"loadedMetadata",
		"loadstart",
		"loadStart",
		"lostpointercapture",
		"lostPointerCapture",
		"playing",
		"playing",
		"progress",
		"progress",
		"seeking",
		"seeking",
		"stalled",
		"stalled",
		"suspend",
		"suspend",
		"timeupdate",
		"timeUpdate",
		Ms,
		"transitionEnd",
		"waiting",
		"waiting"
	];
function Ko(e, n) {
	for (var t = 0; t < e.length; t += 2) {
		var r = e[t],
			l = e[t + 1];
		(l = "on" + (l[0].toUpperCase() + l.slice(1))), Qo.set(r, n), Os.set(r, l), yn(l, [r]);
	}
}
var Cf = K.unstable_now;
Cf();
var W = 8;
function Pn(e) {
	if ((1 & e) !== 0) return (W = 15), 1;
	if ((2 & e) !== 0) return (W = 14), 2;
	if ((4 & e) !== 0) return (W = 13), 4;
	var n = 24 & e;
	return n !== 0
		? ((W = 12), n)
		: (e & 32) !== 0
		? ((W = 11), 32)
		: ((n = 192 & e),
		  n !== 0
				? ((W = 10), n)
				: (e & 256) !== 0
				? ((W = 9), 256)
				: ((n = 3584 & e),
				  n !== 0
						? ((W = 8), n)
						: (e & 4096) !== 0
						? ((W = 7), 4096)
						: ((n = 4186112 & e),
						  n !== 0
								? ((W = 6), n)
								: ((n = 62914560 & e),
								  n !== 0
										? ((W = 5), n)
										: e & 67108864
										? ((W = 4), 67108864)
										: (e & 134217728) !== 0
										? ((W = 3), 134217728)
										: ((n = 805306368 & e),
										  n !== 0
												? ((W = 2), n)
												: (1073741824 & e) !== 0
												? ((W = 1), 1073741824)
												: ((W = 8), e))))));
}
function Pf(e) {
	switch (e) {
		case 99:
			return 15;
		case 98:
			return 10;
		case 97:
		case 96:
			return 8;
		case 95:
			return 2;
		default:
			return 0;
	}
}
function Nf(e) {
	switch (e) {
		case 15:
		case 14:
			return 99;
		case 13:
		case 12:
		case 11:
		case 10:
			return 98;
		case 9:
		case 8:
		case 7:
		case 6:
		case 4:
		case 5:
			return 97;
		case 3:
		case 2:
		case 1:
			return 95;
		case 0:
			return 90;
		default:
			throw Error(v(358, e));
	}
}
function Ft(e, n) {
	var t = e.pendingLanes;
	if (t === 0) return (W = 0);
	var r = 0,
		l = 0,
		o = e.expiredLanes,
		i = e.suspendedLanes,
		u = e.pingedLanes;
	if (o !== 0) (r = o), (l = W = 15);
	else if (((o = t & 134217727), o !== 0)) {
		var s = o & ~i;
		s !== 0 ? ((r = Pn(s)), (l = W)) : ((u &= o), u !== 0 && ((r = Pn(u)), (l = W)));
	} else (o = t & ~i), o !== 0 ? ((r = Pn(o)), (l = W)) : u !== 0 && ((r = Pn(u)), (l = W));
	if (r === 0) return 0;
	if (
		((r = 31 - Xe(r)),
		(r = t & (((0 > r ? 0 : 1 << r) << 1) - 1)),
		n !== 0 && n !== r && (n & i) === 0)
	) {
		if ((Pn(n), l <= W)) return n;
		W = l;
	}
	if (((n = e.entangledLanes), n !== 0))
		for (e = e.entanglements, n &= r; 0 < n; )
			(t = 31 - Xe(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
	return r;
}
function zs(e) {
	return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Tr(e, n) {
	switch (e) {
		case 15:
			return 1;
		case 14:
			return 2;
		case 12:
			return (e = Nn(24 & ~n)), e === 0 ? Tr(10, n) : e;
		case 10:
			return (e = Nn(192 & ~n)), e === 0 ? Tr(8, n) : e;
		case 8:
			return (
				(e = Nn(3584 & ~n)), e === 0 && ((e = Nn(4186112 & ~n)), e === 0 && (e = 512)), e
			);
		case 2:
			return (n = Nn(805306368 & ~n)), n === 0 && (n = 268435456), n;
	}
	throw Error(v(358, e));
}
function Nn(e) {
	return e & -e;
}
function kl(e) {
	for (var n = [], t = 0; 31 > t; t++) n.push(e);
	return n;
}
function br(e, n, t) {
	e.pendingLanes |= n;
	var r = n - 1;
	(e.suspendedLanes &= r), (e.pingedLanes &= r), (e = e.eventTimes), (n = 31 - Xe(n)), (e[n] = t);
}
var Xe = Math.clz32 ? Math.clz32 : Mf,
	jf = Math.log,
	Tf = Math.LN2;
function Mf(e) {
	return e === 0 ? 32 : (31 - ((jf(e) / Tf) | 0)) | 0;
}
var Of = K.unstable_UserBlockingPriority,
	zf = K.unstable_runWithPriority,
	vr = !0;
function If(e, n, t, r) {
	sn || Bo();
	var l = Zo,
		o = sn;
	sn = !0;
	try {
		ks(l, e, n, t, r);
	} finally {
		(sn = o) || Ho();
	}
}
function Rf(e, n, t, r) {
	zf(Of, Zo.bind(null, e, n, t, r));
}
function Zo(e, n, t, r) {
	if (vr) {
		var l;
		if ((l = (n & 4) === 0) && 0 < Ee.length && -1 < Fi.indexOf(e))
			(e = ql(null, e, n, t, r)), Ee.push(e);
		else {
			var o = Go(e, n, t, r);
			if (o === null) l && Ui(e, r);
			else {
				if (l) {
					if (-1 < Fi.indexOf(e)) {
						(e = ql(o, e, n, t, r)), Ee.push(e);
						return;
					}
					if (Ef(o, e, n, t, r)) return;
					Ui(e, r);
				}
				Ks(e, n, r, null, t);
			}
		}
	}
}
function Go(e, n, t, r) {
	var l = $o(r);
	if (((l = an(l)), l !== null)) {
		var o = gn(l);
		if (o === null) l = null;
		else {
			var i = o.tag;
			if (i === 13) {
				if (((l = Ss(o)), l !== null)) return l;
				l = null;
			} else if (i === 3) {
				if (o.stateNode.hydrate) return o.tag === 3 ? o.stateNode.containerInfo : null;
				l = null;
			} else o !== l && (l = null);
		}
	}
	return Ks(e, n, r, l, t), null;
}
var Fe = null,
	Yo = null,
	gr = null;
function Is() {
	if (gr) return gr;
	var e,
		n = Yo,
		t = n.length,
		r,
		l = "value" in Fe ? Fe.value : Fe.textContent,
		o = l.length;
	for (e = 0; e < t && n[e] === l[e]; e++);
	var i = t - e;
	for (r = 1; r <= i && n[t - r] === l[o - r]; r++);
	return (gr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function kr(e) {
	var n = e.keyCode;
	return (
		"charCode" in e ? ((e = e.charCode), e === 0 && n === 13 && (e = 13)) : (e = n),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function sr() {
	return !0;
}
function Ai() {
	return !1;
}
function fe(e) {
	function n(t, r, l, o, i) {
		(this._reactName = t),
			(this._targetInst = l),
			(this.type = r),
			(this.nativeEvent = o),
			(this.target = i),
			(this.currentTarget = null);
		for (var u in e) e.hasOwnProperty(u) && ((t = e[u]), (this[u] = t ? t(o) : o[u]));
		return (
			(this.isDefaultPrevented = (
				o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
			)
				? sr
				: Ai),
			(this.isPropagationStopped = Ai),
			this
		);
	}
	return (
		U(n.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var t = this.nativeEvent;
				t &&
					(t.preventDefault
						? t.preventDefault()
						: typeof t.returnValue != "unknown" && (t.returnValue = !1),
					(this.isDefaultPrevented = sr));
			},
			stopPropagation: function () {
				var t = this.nativeEvent;
				t &&
					(t.stopPropagation
						? t.stopPropagation()
						: typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
					(this.isPropagationStopped = sr));
			},
			persist: function () {},
			isPersistent: sr
		}),
		n
	);
}
var Jn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	},
	Xo = fe(Jn),
	Gt = U({}, Jn, { view: 0, detail: 0 }),
	Wf = fe(Gt),
	wl,
	Sl,
	at,
	el = U({}, Gt, {
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
		getModifierState: Jo,
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
				: (e !== at &&
						(at && e.type === "mousemove"
							? ((wl = e.screenX - at.screenX), (Sl = e.screenY - at.screenY))
							: (Sl = wl = 0),
						(at = e)),
				  wl);
		},
		movementY: function (e) {
			return "movementY" in e ? e.movementY : Sl;
		}
	}),
	Bi = fe(el),
	Df = U({}, el, { dataTransfer: 0 }),
	Ff = fe(Df),
	Uf = U({}, Gt, { relatedTarget: 0 }),
	El = fe(Uf),
	$f = U({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Af = fe($f),
	Bf = U({}, Jn, {
		clipboardData: function (e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData;
		}
	}),
	Hf = fe(Bf),
	Vf = U({}, Jn, { data: 0 }),
	Hi = fe(Vf),
	Qf = {
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
		MozPrintableKey: "Unidentified"
	},
	Kf = {
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
		224: "Meta"
	},
	Zf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Gf(e) {
	var n = this.nativeEvent;
	return n.getModifierState ? n.getModifierState(e) : (e = Zf[e]) ? !!n[e] : !1;
}
function Jo() {
	return Gf;
}
var Yf = U({}, Gt, {
		key: function (e) {
			if (e.key) {
				var n = Qf[e.key] || e.key;
				if (n !== "Unidentified") return n;
			}
			return e.type === "keypress"
				? ((e = kr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
				: e.type === "keydown" || e.type === "keyup"
				? Kf[e.keyCode] || "Unidentified"
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
		getModifierState: Jo,
		charCode: function (e) {
			return e.type === "keypress" ? kr(e) : 0;
		},
		keyCode: function (e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === "keypress"
				? kr(e)
				: e.type === "keydown" || e.type === "keyup"
				? e.keyCode
				: 0;
		}
	}),
	Xf = fe(Yf),
	Jf = U({}, el, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	}),
	Vi = fe(Jf),
	qf = U({}, Gt, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Jo
	}),
	bf = fe(qf),
	ec = U({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	nc = fe(ec),
	tc = U({}, el, {
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
		deltaMode: 0
	}),
	rc = fe(tc),
	lc = [9, 13, 27, 32],
	qo = ze && "CompositionEvent" in window,
	xt = null;
ze && "documentMode" in document && (xt = document.documentMode);
var oc = ze && "TextEvent" in window && !xt,
	Rs = ze && (!qo || (xt && 8 < xt && 11 >= xt)),
	Qi = String.fromCharCode(32),
	Ki = !1;
function Ws(e, n) {
	switch (e) {
		case "keyup":
			return lc.indexOf(n.keyCode) !== -1;
		case "keydown":
			return n.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1;
	}
}
function Ds(e) {
	return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Tn = !1;
function ic(e, n) {
	switch (e) {
		case "compositionend":
			return Ds(n);
		case "keypress":
			return n.which !== 32 ? null : ((Ki = !0), Qi);
		case "textInput":
			return (e = n.data), e === Qi && Ki ? null : e;
		default:
			return null;
	}
}
function uc(e, n) {
	if (Tn)
		return e === "compositionend" || (!qo && Ws(e, n))
			? ((e = Is()), (gr = Yo = Fe = null), (Tn = !1), e)
			: null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
				if (n.char && 1 < n.char.length) return n.char;
				if (n.which) return String.fromCharCode(n.which);
			}
			return null;
		case "compositionend":
			return Rs && n.locale !== "ko" ? null : n.data;
		default:
			return null;
	}
}
var sc = {
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
	week: !0
};
function Zi(e) {
	var n = e && e.nodeName && e.nodeName.toLowerCase();
	return n === "input" ? !!sc[e.type] : n === "textarea";
}
function Fs(e, n, t, r) {
	vs(r),
		(n = Mr(n, "onChange")),
		0 < n.length &&
			((t = new Xo("onChange", "change", null, t, r)), e.push({ event: t, listeners: n }));
}
var Ct = null,
	Ut = null;
function ac(e) {
	Hs(e, 0);
}
function nl(e) {
	var n = On(e);
	if (fs(n)) return e;
}
function fc(e, n) {
	if (e === "change") return n;
}
var Us = !1;
if (ze) {
	var _l;
	if (ze) {
		var Ll = "oninput" in document;
		if (!Ll) {
			var Gi = document.createElement("div");
			Gi.setAttribute("oninput", "return;"), (Ll = typeof Gi.oninput == "function");
		}
		_l = Ll;
	} else _l = !1;
	Us = _l && (!document.documentMode || 9 < document.documentMode);
}
function Yi() {
	Ct && (Ct.detachEvent("onpropertychange", $s), (Ut = Ct = null));
}
function $s(e) {
	if (e.propertyName === "value" && nl(Ut)) {
		var n = [];
		if ((Fs(n, Ut, e, $o(e)), (e = ac), sn)) e(n);
		else {
			sn = !0;
			try {
				Ao(e, n);
			} finally {
				(sn = !1), Ho();
			}
		}
	}
}
function cc(e, n, t) {
	e === "focusin"
		? (Yi(), (Ct = n), (Ut = t), Ct.attachEvent("onpropertychange", $s))
		: e === "focusout" && Yi();
}
function dc(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown") return nl(Ut);
}
function pc(e, n) {
	if (e === "click") return nl(n);
}
function hc(e, n) {
	if (e === "input" || e === "change") return nl(n);
}
function mc(e, n) {
	return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var de = typeof Object.is == "function" ? Object.is : mc,
	yc = Object.prototype.hasOwnProperty;
function $t(e, n) {
	if (de(e, n)) return !0;
	if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
	var t = Object.keys(e),
		r = Object.keys(n);
	if (t.length !== r.length) return !1;
	for (r = 0; r < t.length; r++) if (!yc.call(n, t[r]) || !de(e[t[r]], n[t[r]])) return !1;
	return !0;
}
function Xi(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function Ji(e, n) {
	var t = Xi(e);
	e = 0;
	for (var r; t; ) {
		if (t.nodeType === 3) {
			if (((r = e + t.textContent.length), e <= n && r >= n))
				return { node: t, offset: n - e };
			e = r;
		}
		e: {
			for (; t; ) {
				if (t.nextSibling) {
					t = t.nextSibling;
					break e;
				}
				t = t.parentNode;
			}
			t = void 0;
		}
		t = Xi(t);
	}
}
function As(e, n) {
	return e && n
		? e === n
			? !0
			: e && e.nodeType === 3
			? !1
			: n && n.nodeType === 3
			? As(e, n.parentNode)
			: "contains" in e
			? e.contains(n)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(n) & 16)
			: !1
		: !1;
}
function qi() {
	for (var e = window, n = Pr(); n instanceof e.HTMLIFrameElement; ) {
		try {
			var t = typeof n.contentWindow.location.href == "string";
		} catch {
			t = !1;
		}
		if (t) e = n.contentWindow;
		else break;
		n = Pr(e.document);
	}
	return n;
}
function bl(e) {
	var n = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		n &&
		((n === "input" &&
			(e.type === "text" ||
				e.type === "search" ||
				e.type === "tel" ||
				e.type === "url" ||
				e.type === "password")) ||
			n === "textarea" ||
			e.contentEditable === "true")
	);
}
var vc = ze && "documentMode" in document && 11 >= document.documentMode,
	Mn = null,
	eo = null,
	Pt = null,
	no = !1;
function bi(e, n, t) {
	var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
	no ||
		Mn == null ||
		Mn !== Pr(r) ||
		((r = Mn),
		"selectionStart" in r && bl(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset
			  })),
		(Pt && $t(Pt, r)) ||
			((Pt = r),
			(r = Mr(eo, "onSelect")),
			0 < r.length &&
				((n = new Xo("onSelect", "select", null, n, t)),
				e.push({ event: n, listeners: r }),
				(n.target = Mn))));
}
Ko(
	"cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
		" "
	),
	0
);
Ko(
	"drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
		" "
	),
	1
);
Ko(xf, 2);
for (
	var eu =
			"change selectionchange textInput compositionstart compositionend compositionupdate".split(
				" "
			),
		xl = 0;
	xl < eu.length;
	xl++
)
	Qo.set(eu[xl], 0);
Qn("onMouseEnter", ["mouseout", "mouseover"]);
Qn("onMouseLeave", ["mouseout", "mouseover"]);
Qn("onPointerEnter", ["pointerout", "pointerover"]);
Qn("onPointerLeave", ["pointerout", "pointerover"]);
yn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
yn(
	"onSelect",
	"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
		" "
	)
);
yn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
yn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
yn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
yn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var gt =
		"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
			" "
		),
	Bs = new Set("cancel close invalid load scroll toggle".split(" ").concat(gt));
function nu(e, n, t) {
	var r = e.type || "unknown-event";
	(e.currentTarget = t), wf(r, n, void 0, e), (e.currentTarget = null);
}
function Hs(e, n) {
	n = (n & 4) !== 0;
	for (var t = 0; t < e.length; t++) {
		var r = e[t],
			l = r.event;
		r = r.listeners;
		e: {
			var o = void 0;
			if (n)
				for (var i = r.length - 1; 0 <= i; i--) {
					var u = r[i],
						s = u.instance,
						d = u.currentTarget;
					if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
					nu(l, u, d), (o = s);
				}
			else
				for (i = 0; i < r.length; i++) {
					if (
						((u = r[i]),
						(s = u.instance),
						(d = u.currentTarget),
						(u = u.listener),
						s !== o && l.isPropagationStopped())
					)
						break e;
					nu(l, u, d), (o = s);
				}
		}
	}
	if (jr) throw ((e = Xl), (jr = !1), (Xl = null), e);
}
function D(e, n) {
	var t = Gs(n),
		r = e + "__bubble";
	t.has(r) || (Qs(n, e, 2, !1), t.add(r));
}
var tu = "_reactListening" + Math.random().toString(36).slice(2);
function Vs(e) {
	e[tu] ||
		((e[tu] = !0),
		us.forEach(function (n) {
			Bs.has(n) || ru(n, !1, e, null), ru(n, !0, e, null);
		}));
}
function ru(e, n, t, r) {
	var l = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
		o = t;
	if (
		(e === "selectionchange" && t.nodeType !== 9 && (o = t.ownerDocument),
		r !== null && !n && Bs.has(e))
	) {
		if (e !== "scroll") return;
		(l |= 2), (o = r);
	}
	var i = Gs(o),
		u = e + "__" + (n ? "capture" : "bubble");
	i.has(u) || (n && (l |= 4), Qs(o, e, l, n), i.add(u));
}
function Qs(e, n, t, r) {
	var l = Qo.get(n);
	switch (l === void 0 ? 2 : l) {
		case 0:
			l = If;
			break;
		case 1:
			l = Rf;
			break;
		default:
			l = Zo;
	}
	(t = l.bind(null, n, t, e)),
		(l = void 0),
		!Yl || (n !== "touchstart" && n !== "touchmove" && n !== "wheel") || (l = !0),
		r
			? l !== void 0
				? e.addEventListener(n, t, { capture: !0, passive: l })
				: e.addEventListener(n, t, !0)
			: l !== void 0
			? e.addEventListener(n, t, { passive: l })
			: e.addEventListener(n, t, !1);
}
function Ks(e, n, t, r, l) {
	var o = r;
	if ((n & 1) === 0 && (n & 2) === 0 && r !== null)
		e: for (;;) {
			if (r === null) return;
			var i = r.tag;
			if (i === 3 || i === 4) {
				var u = r.stateNode.containerInfo;
				if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
				if (i === 4)
					for (i = r.return; i !== null; ) {
						var s = i.tag;
						if (
							(s === 3 || s === 4) &&
							((s = i.stateNode.containerInfo),
							s === l || (s.nodeType === 8 && s.parentNode === l))
						)
							return;
						i = i.return;
					}
				for (; u !== null; ) {
					if (((i = an(u)), i === null)) return;
					if (((s = i.tag), s === 5 || s === 6)) {
						r = o = i;
						continue e;
					}
					u = u.parentNode;
				}
			}
			r = r.return;
		}
	yf(function () {
		var d = o,
			g = $o(t),
			C = [];
		e: {
			var y = Os.get(e);
			if (y !== void 0) {
				var E = Xo,
					L = e;
				switch (e) {
					case "keypress":
						if (kr(t) === 0) break e;
					case "keydown":
					case "keyup":
						E = Xf;
						break;
					case "focusin":
						(L = "focus"), (E = El);
						break;
					case "focusout":
						(L = "blur"), (E = El);
						break;
					case "beforeblur":
					case "afterblur":
						E = El;
						break;
					case "click":
						if (t.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						E = Bi;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						E = Ff;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						E = bf;
						break;
					case Ns:
					case js:
					case Ts:
						E = Af;
						break;
					case Ms:
						E = nc;
						break;
					case "scroll":
						E = Wf;
						break;
					case "wheel":
						E = rc;
						break;
					case "copy":
					case "cut":
					case "paste":
						E = Hf;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						E = Vi;
				}
				var _ = (n & 4) !== 0,
					c = !_ && e === "scroll",
					a = _ ? (y !== null ? y + "Capture" : null) : y;
				_ = [];
				for (var f = d, h; f !== null; ) {
					h = f;
					var m = h.stateNode;
					if (
						(h.tag === 5 &&
							m !== null &&
							((h = m),
							a !== null && ((m = Rt(f, a)), m != null && _.push(At(f, m, h)))),
						c)
					)
						break;
					f = f.return;
				}
				0 < _.length && ((y = new E(y, L, null, t, g)), C.push({ event: y, listeners: _ }));
			}
		}
		if ((n & 7) === 0) {
			e: {
				if (
					((y = e === "mouseover" || e === "pointerover"),
					(E = e === "mouseout" || e === "pointerout"),
					y &&
						(n & 16) === 0 &&
						(L = t.relatedTarget || t.fromElement) &&
						(an(L) || L[qn]))
				)
					break e;
				if (
					(E || y) &&
					((y =
						g.window === g
							? g
							: (y = g.ownerDocument)
							? y.defaultView || y.parentWindow
							: window),
					E
						? ((L = t.relatedTarget || t.toElement),
						  (E = d),
						  (L = L ? an(L) : null),
						  L !== null &&
								((c = gn(L)), L !== c || (L.tag !== 5 && L.tag !== 6)) &&
								(L = null))
						: ((E = null), (L = d)),
					E !== L)
				) {
					if (
						((_ = Bi),
						(m = "onMouseLeave"),
						(a = "onMouseEnter"),
						(f = "mouse"),
						(e === "pointerout" || e === "pointerover") &&
							((_ = Vi),
							(m = "onPointerLeave"),
							(a = "onPointerEnter"),
							(f = "pointer")),
						(c = E == null ? y : On(E)),
						(h = L == null ? y : On(L)),
						(y = new _(m, f + "leave", E, t, g)),
						(y.target = c),
						(y.relatedTarget = h),
						(m = null),
						an(g) === d &&
							((_ = new _(a, f + "enter", L, t, g)),
							(_.target = h),
							(_.relatedTarget = c),
							(m = _)),
						(c = m),
						E && L)
					)
						n: {
							for (_ = E, a = L, f = 0, h = _; h; h = Cn(h)) f++;
							for (h = 0, m = a; m; m = Cn(m)) h++;
							for (; 0 < f - h; ) (_ = Cn(_)), f--;
							for (; 0 < h - f; ) (a = Cn(a)), h--;
							for (; f--; ) {
								if (_ === a || (a !== null && _ === a.alternate)) break n;
								(_ = Cn(_)), (a = Cn(a));
							}
							_ = null;
						}
					else _ = null;
					E !== null && lu(C, y, E, _, !1),
						L !== null && c !== null && lu(C, c, L, _, !0);
				}
			}
			e: {
				if (
					((y = d ? On(d) : window),
					(E = y.nodeName && y.nodeName.toLowerCase()),
					E === "select" || (E === "input" && y.type === "file"))
				)
					var N = fc;
				else if (Zi(y))
					if (Us) N = hc;
					else {
						N = dc;
						var k = cc;
					}
				else
					(E = y.nodeName) &&
						E.toLowerCase() === "input" &&
						(y.type === "checkbox" || y.type === "radio") &&
						(N = pc);
				if (N && (N = N(e, d))) {
					Fs(C, N, t, g);
					break e;
				}
				k && k(e, y, d),
					e === "focusout" &&
						(k = y._wrapperState) &&
						k.controlled &&
						y.type === "number" &&
						Al(y, "number", y.value);
			}
			switch (((k = d ? On(d) : window), e)) {
				case "focusin":
					(Zi(k) || k.contentEditable === "true") && ((Mn = k), (eo = d), (Pt = null));
					break;
				case "focusout":
					Pt = eo = Mn = null;
					break;
				case "mousedown":
					no = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					(no = !1), bi(C, t, g);
					break;
				case "selectionchange":
					if (vc) break;
				case "keydown":
				case "keyup":
					bi(C, t, g);
			}
			var P;
			if (qo)
				e: {
					switch (e) {
						case "compositionstart":
							var M = "onCompositionStart";
							break e;
						case "compositionend":
							M = "onCompositionEnd";
							break e;
						case "compositionupdate":
							M = "onCompositionUpdate";
							break e;
					}
					M = void 0;
				}
			else
				Tn
					? Ws(e, t) && (M = "onCompositionEnd")
					: e === "keydown" && t.keyCode === 229 && (M = "onCompositionStart");
			M &&
				(Rs &&
					t.locale !== "ko" &&
					(Tn || M !== "onCompositionStart"
						? M === "onCompositionEnd" && Tn && (P = Is())
						: ((Fe = g), (Yo = "value" in Fe ? Fe.value : Fe.textContent), (Tn = !0))),
				(k = Mr(d, M)),
				0 < k.length &&
					((M = new Hi(M, e, null, t, g)),
					C.push({ event: M, listeners: k }),
					P ? (M.data = P) : ((P = Ds(t)), P !== null && (M.data = P)))),
				(P = oc ? ic(e, t) : uc(e, t)) &&
					((d = Mr(d, "onBeforeInput")),
					0 < d.length &&
						((g = new Hi("onBeforeInput", "beforeinput", null, t, g)),
						C.push({ event: g, listeners: d }),
						(g.data = P)));
		}
		Hs(C, n);
	});
}
function At(e, n, t) {
	return { instance: e, listener: n, currentTarget: t };
}
function Mr(e, n) {
	for (var t = n + "Capture", r = []; e !== null; ) {
		var l = e,
			o = l.stateNode;
		l.tag === 5 &&
			o !== null &&
			((l = o),
			(o = Rt(e, t)),
			o != null && r.unshift(At(e, o, l)),
			(o = Rt(e, n)),
			o != null && r.push(At(e, o, l))),
			(e = e.return);
	}
	return r;
}
function Cn(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function lu(e, n, t, r, l) {
	for (var o = n._reactName, i = []; t !== null && t !== r; ) {
		var u = t,
			s = u.alternate,
			d = u.stateNode;
		if (s !== null && s === r) break;
		u.tag === 5 &&
			d !== null &&
			((u = d),
			l
				? ((s = Rt(t, o)), s != null && i.unshift(At(t, s, u)))
				: l || ((s = Rt(t, o)), s != null && i.push(At(t, s, u)))),
			(t = t.return);
	}
	i.length !== 0 && e.push({ event: n, listeners: i });
}
function Or() {}
var Cl = null,
	Pl = null;
function Zs(e, n) {
	switch (e) {
		case "button":
		case "input":
		case "select":
		case "textarea":
			return !!n.autoFocus;
	}
	return !1;
}
function to(e, n) {
	return (
		e === "textarea" ||
		e === "option" ||
		e === "noscript" ||
		typeof n.children == "string" ||
		typeof n.children == "number" ||
		(typeof n.dangerouslySetInnerHTML == "object" &&
			n.dangerouslySetInnerHTML !== null &&
			n.dangerouslySetInnerHTML.__html != null)
	);
}
var ou = typeof setTimeout == "function" ? setTimeout : void 0,
	gc = typeof clearTimeout == "function" ? clearTimeout : void 0;
function bo(e) {
	e.nodeType === 1
		? (e.textContent = "")
		: e.nodeType === 9 && ((e = e.body), e != null && (e.textContent = ""));
}
function Un(e) {
	for (; e != null; e = e.nextSibling) {
		var n = e.nodeType;
		if (n === 1 || n === 3) break;
	}
	return e;
}
function iu(e) {
	e = e.previousSibling;
	for (var n = 0; e; ) {
		if (e.nodeType === 8) {
			var t = e.data;
			if (t === "$" || t === "$!" || t === "$?") {
				if (n === 0) return e;
				n--;
			} else t === "/$" && n++;
		}
		e = e.previousSibling;
	}
	return null;
}
var Nl = 0;
function kc(e) {
	return { $$typeof: Fo, toString: e, valueOf: e };
}
var tl = Math.random().toString(36).slice(2),
	Ue = "__reactFiber$" + tl,
	zr = "__reactProps$" + tl,
	qn = "__reactContainer$" + tl,
	uu = "__reactEvents$" + tl;
function an(e) {
	var n = e[Ue];
	if (n) return n;
	for (var t = e.parentNode; t; ) {
		if ((n = t[qn] || t[Ue])) {
			if (((t = n.alternate), n.child !== null || (t !== null && t.child !== null)))
				for (e = iu(e); e !== null; ) {
					if ((t = e[Ue])) return t;
					e = iu(e);
				}
			return n;
		}
		(e = t), (t = e.parentNode);
	}
	return null;
}
function Yt(e) {
	return (
		(e = e[Ue] || e[qn]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function On(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(v(33));
}
function rl(e) {
	return e[zr] || null;
}
function Gs(e) {
	var n = e[uu];
	return n === void 0 && (n = e[uu] = new Set()), n;
}
var ro = [],
	zn = -1;
function en(e) {
	return { current: e };
}
function F(e) {
	0 > zn || ((e.current = ro[zn]), (ro[zn] = null), zn--);
}
function A(e, n) {
	zn++, (ro[zn] = e.current), (e.current = n);
}
var Je = {},
	te = en(Je),
	ue = en(!1),
	pn = Je;
function Kn(e, n) {
	var t = e.type.contextTypes;
	if (!t) return Je;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
		return r.__reactInternalMemoizedMaskedChildContext;
	var l = {},
		o;
	for (o in t) l[o] = n[o];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = n),
			(e.__reactInternalMemoizedMaskedChildContext = l)),
		l
	);
}
function se(e) {
	return (e = e.childContextTypes), e != null;
}
function Ir() {
	F(ue), F(te);
}
function su(e, n, t) {
	if (te.current !== Je) throw Error(v(168));
	A(te, n), A(ue, t);
}
function Ys(e, n, t) {
	var r = e.stateNode;
	if (((e = n.childContextTypes), typeof r.getChildContext != "function")) return t;
	r = r.getChildContext();
	for (var l in r) if (!(l in e)) throw Error(v(108, Rn(n) || "Unknown", l));
	return U({}, t, r);
}
function wr(e) {
	return (
		(e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Je),
		(pn = te.current),
		A(te, e),
		A(ue, ue.current),
		!0
	);
}
function au(e, n, t) {
	var r = e.stateNode;
	if (!r) throw Error(v(169));
	t
		? ((e = Ys(e, n, pn)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  F(ue),
		  F(te),
		  A(te, e))
		: F(ue),
		A(ue, t);
}
var ei = null,
	dn = null,
	wc = K.unstable_runWithPriority,
	ni = K.unstable_scheduleCallback,
	lo = K.unstable_cancelCallback,
	Sc = K.unstable_shouldYield,
	fu = K.unstable_requestPaint,
	oo = K.unstable_now,
	Ec = K.unstable_getCurrentPriorityLevel,
	ll = K.unstable_ImmediatePriority,
	Xs = K.unstable_UserBlockingPriority,
	Js = K.unstable_NormalPriority,
	qs = K.unstable_LowPriority,
	bs = K.unstable_IdlePriority,
	jl = {},
	_c = fu !== void 0 ? fu : function () {},
	Ne = null,
	Sr = null,
	Tl = !1,
	cu = oo(),
	ee =
		1e4 > cu
			? oo
			: function () {
					return oo() - cu;
			  };
function Zn() {
	switch (Ec()) {
		case ll:
			return 99;
		case Xs:
			return 98;
		case Js:
			return 97;
		case qs:
			return 96;
		case bs:
			return 95;
		default:
			throw Error(v(332));
	}
}
function ea(e) {
	switch (e) {
		case 99:
			return ll;
		case 98:
			return Xs;
		case 97:
			return Js;
		case 96:
			return qs;
		case 95:
			return bs;
		default:
			throw Error(v(332));
	}
}
function hn(e, n) {
	return (e = ea(e)), wc(e, n);
}
function Bt(e, n, t) {
	return (e = ea(e)), ni(e, n, t);
}
function Pe() {
	if (Sr !== null) {
		var e = Sr;
		(Sr = null), lo(e);
	}
	na();
}
function na() {
	if (!Tl && Ne !== null) {
		Tl = !0;
		var e = 0;
		try {
			var n = Ne;
			hn(99, function () {
				for (; e < n.length; e++) {
					var t = n[e];
					do t = t(!0);
					while (t !== null);
				}
			}),
				(Ne = null);
		} catch (t) {
			throw (Ne !== null && (Ne = Ne.slice(e + 1)), ni(ll, Pe), t);
		} finally {
			Tl = !1;
		}
	}
}
var Lc = vn.ReactCurrentBatchConfig;
function ke(e, n) {
	if (e && e.defaultProps) {
		(n = U({}, n)), (e = e.defaultProps);
		for (var t in e) n[t] === void 0 && (n[t] = e[t]);
		return n;
	}
	return n;
}
var Rr = en(null),
	Wr = null,
	In = null,
	Dr = null;
function ti() {
	Dr = In = Wr = null;
}
function ri(e) {
	var n = Rr.current;
	F(Rr), (e.type._context._currentValue = n);
}
function ta(e, n) {
	for (; e !== null; ) {
		var t = e.alternate;
		if ((e.childLanes & n) === n) {
			if (t === null || (t.childLanes & n) === n) break;
			t.childLanes |= n;
		} else (e.childLanes |= n), t !== null && (t.childLanes |= n);
		e = e.return;
	}
}
function $n(e, n) {
	(Wr = e),
		(Dr = In = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			((e.lanes & n) !== 0 && (we = !0), (e.firstContext = null));
}
function me(e, n) {
	if (Dr !== e && n !== !1 && n !== 0)
		if (
			((typeof n != "number" || n === 1073741823) && ((Dr = e), (n = 1073741823)),
			(n = { context: e, observedBits: n, next: null }),
			In === null)
		) {
			if (Wr === null) throw Error(v(308));
			(In = n), (Wr.dependencies = { lanes: 0, firstContext: n, responders: null });
		} else In = In.next = n;
	return e._currentValue;
}
var We = !1;
function li(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null },
		effects: null
	};
}
function ra(e, n) {
	(e = e.updateQueue),
		n.updateQueue === e &&
			(n.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects
			});
}
function Ve(e, n) {
	return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
}
function Qe(e, n) {
	if (((e = e.updateQueue), e !== null)) {
		e = e.shared;
		var t = e.pending;
		t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)), (e.pending = n);
	}
}
function du(e, n) {
	var t = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), t === r)) {
		var l = null,
			o = null;
		if (((t = t.firstBaseUpdate), t !== null)) {
			do {
				var i = {
					eventTime: t.eventTime,
					lane: t.lane,
					tag: t.tag,
					payload: t.payload,
					callback: t.callback,
					next: null
				};
				o === null ? (l = o = i) : (o = o.next = i), (t = t.next);
			} while (t !== null);
			o === null ? (l = o = n) : (o = o.next = n);
		} else l = o = n;
		(t = {
			baseState: r.baseState,
			firstBaseUpdate: l,
			lastBaseUpdate: o,
			shared: r.shared,
			effects: r.effects
		}),
			(e.updateQueue = t);
		return;
	}
	(e = t.lastBaseUpdate),
		e === null ? (t.firstBaseUpdate = n) : (e.next = n),
		(t.lastBaseUpdate = n);
}
function Ht(e, n, t, r) {
	var l = e.updateQueue;
	We = !1;
	var o = l.firstBaseUpdate,
		i = l.lastBaseUpdate,
		u = l.shared.pending;
	if (u !== null) {
		l.shared.pending = null;
		var s = u,
			d = s.next;
		(s.next = null), i === null ? (o = d) : (i.next = d), (i = s);
		var g = e.alternate;
		if (g !== null) {
			g = g.updateQueue;
			var C = g.lastBaseUpdate;
			C !== i &&
				(C === null ? (g.firstBaseUpdate = d) : (C.next = d), (g.lastBaseUpdate = s));
		}
	}
	if (o !== null) {
		(C = l.baseState), (i = 0), (g = d = s = null);
		do {
			u = o.lane;
			var y = o.eventTime;
			if ((r & u) === u) {
				g !== null &&
					(g = g.next =
						{
							eventTime: y,
							lane: 0,
							tag: o.tag,
							payload: o.payload,
							callback: o.callback,
							next: null
						});
				e: {
					var E = e,
						L = o;
					switch (((u = n), (y = t), L.tag)) {
						case 1:
							if (((E = L.payload), typeof E == "function")) {
								C = E.call(y, C, u);
								break e;
							}
							C = E;
							break e;
						case 3:
							E.flags = (E.flags & -4097) | 64;
						case 0:
							if (
								((E = L.payload),
								(u = typeof E == "function" ? E.call(y, C, u) : E),
								u == null)
							)
								break e;
							C = U({}, C, u);
							break e;
						case 2:
							We = !0;
					}
				}
				o.callback !== null &&
					((e.flags |= 32), (u = l.effects), u === null ? (l.effects = [o]) : u.push(o));
			} else
				(y = {
					eventTime: y,
					lane: u,
					tag: o.tag,
					payload: o.payload,
					callback: o.callback,
					next: null
				}),
					g === null ? ((d = g = y), (s = C)) : (g = g.next = y),
					(i |= u);
			if (((o = o.next), o === null)) {
				if (((u = l.shared.pending), u === null)) break;
				(o = u.next), (u.next = null), (l.lastBaseUpdate = u), (l.shared.pending = null);
			}
		} while (1);
		g === null && (s = C),
			(l.baseState = s),
			(l.firstBaseUpdate = d),
			(l.lastBaseUpdate = g),
			(Jt |= i),
			(e.lanes = i),
			(e.memoizedState = C);
	}
}
function pu(e, n, t) {
	if (((e = n.effects), (n.effects = null), e !== null))
		for (n = 0; n < e.length; n++) {
			var r = e[n],
				l = r.callback;
			if (l !== null) {
				if (((r.callback = null), (r = t), typeof l != "function")) throw Error(v(191, l));
				l.call(r);
			}
		}
}
var la = new Yr.Component().refs;
function Fr(e, n, t, r) {
	(n = e.memoizedState),
		(t = t(r, n)),
		(t = t == null ? n : U({}, n, t)),
		(e.memoizedState = t),
		e.lanes === 0 && (e.updateQueue.baseState = t);
}
var ol = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? gn(e) === e : !1;
	},
	enqueueSetState: function (e, n, t) {
		e = e._reactInternals;
		var r = ae(),
			l = Ke(e),
			o = Ve(r, l);
		(o.payload = n), t != null && (o.callback = t), Qe(e, o), Ze(e, l, r);
	},
	enqueueReplaceState: function (e, n, t) {
		e = e._reactInternals;
		var r = ae(),
			l = Ke(e),
			o = Ve(r, l);
		(o.tag = 1), (o.payload = n), t != null && (o.callback = t), Qe(e, o), Ze(e, l, r);
	},
	enqueueForceUpdate: function (e, n) {
		e = e._reactInternals;
		var t = ae(),
			r = Ke(e),
			l = Ve(t, r);
		(l.tag = 2), n != null && (l.callback = n), Qe(e, l), Ze(e, r, t);
	}
};
function hu(e, n, t, r, l, o, i) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == "function"
			? e.shouldComponentUpdate(r, o, i)
			: n.prototype && n.prototype.isPureReactComponent
			? !$t(t, r) || !$t(l, o)
			: !0
	);
}
function oa(e, n, t) {
	var r = !1,
		l = Je,
		o = n.contextType;
	return (
		typeof o == "object" && o !== null
			? (o = me(o))
			: ((l = se(n) ? pn : te.current),
			  (r = n.contextTypes),
			  (o = (r = r != null) ? Kn(e, l) : Je)),
		(n = new n(t, o)),
		(e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
		(n.updater = ol),
		(e.stateNode = n),
		(n._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = l),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		n
	);
}
function mu(e, n, t, r) {
	(e = n.state),
		typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r),
		typeof n.UNSAFE_componentWillReceiveProps == "function" &&
			n.UNSAFE_componentWillReceiveProps(t, r),
		n.state !== e && ol.enqueueReplaceState(n, n.state, null);
}
function io(e, n, t, r) {
	var l = e.stateNode;
	(l.props = t), (l.state = e.memoizedState), (l.refs = la), li(e);
	var o = n.contextType;
	typeof o == "object" && o !== null
		? (l.context = me(o))
		: ((o = se(n) ? pn : te.current), (l.context = Kn(e, o))),
		Ht(e, t, l, r),
		(l.state = e.memoizedState),
		(o = n.getDerivedStateFromProps),
		typeof o == "function" && (Fr(e, n, o, t), (l.state = e.memoizedState)),
		typeof n.getDerivedStateFromProps == "function" ||
			typeof l.getSnapshotBeforeUpdate == "function" ||
			(typeof l.UNSAFE_componentWillMount != "function" &&
				typeof l.componentWillMount != "function") ||
			((n = l.state),
			typeof l.componentWillMount == "function" && l.componentWillMount(),
			typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
			n !== l.state && ol.enqueueReplaceState(l, l.state, null),
			Ht(e, t, l, r),
			(l.state = e.memoizedState)),
		typeof l.componentDidMount == "function" && (e.flags |= 4);
}
var ar = Array.isArray;
function ft(e, n, t) {
	if (((e = t.ref), e !== null && typeof e != "function" && typeof e != "object")) {
		if (t._owner) {
			if (((t = t._owner), t)) {
				if (t.tag !== 1) throw Error(v(309));
				var r = t.stateNode;
			}
			if (!r) throw Error(v(147, e));
			var l = "" + e;
			return n !== null &&
				n.ref !== null &&
				typeof n.ref == "function" &&
				n.ref._stringRef === l
				? n.ref
				: ((n = function (o) {
						var i = r.refs;
						i === la && (i = r.refs = {}), o === null ? delete i[l] : (i[l] = o);
				  }),
				  (n._stringRef = l),
				  n);
		}
		if (typeof e != "string") throw Error(v(284));
		if (!t._owner) throw Error(v(290, e));
	}
	return e;
}
function fr(e, n) {
	if (e.type !== "textarea")
		throw Error(
			v(
				31,
				Object.prototype.toString.call(n) === "[object Object]"
					? "object with keys {" + Object.keys(n).join(", ") + "}"
					: n
			)
		);
}
function ia(e) {
	function n(c, a) {
		if (e) {
			var f = c.lastEffect;
			f !== null
				? ((f.nextEffect = a), (c.lastEffect = a))
				: (c.firstEffect = c.lastEffect = a),
				(a.nextEffect = null),
				(a.flags = 8);
		}
	}
	function t(c, a) {
		if (!e) return null;
		for (; a !== null; ) n(c, a), (a = a.sibling);
		return null;
	}
	function r(c, a) {
		for (c = new Map(); a !== null; )
			a.key !== null ? c.set(a.key, a) : c.set(a.index, a), (a = a.sibling);
		return c;
	}
	function l(c, a) {
		return (c = be(c, a)), (c.index = 0), (c.sibling = null), c;
	}
	function o(c, a, f) {
		return (
			(c.index = f),
			e
				? ((f = c.alternate),
				  f !== null ? ((f = f.index), f < a ? ((c.flags = 2), a) : f) : ((c.flags = 2), a))
				: a
		);
	}
	function i(c) {
		return e && c.alternate === null && (c.flags = 2), c;
	}
	function u(c, a, f, h) {
		return a === null || a.tag !== 6
			? ((a = Rl(f, c.mode, h)), (a.return = c), a)
			: ((a = l(a, f)), (a.return = c), a);
	}
	function s(c, a, f, h) {
		return a !== null && a.elementType === f.type
			? ((h = l(a, f.props)), (h.ref = ft(c, a, f)), (h.return = c), h)
			: ((h = xr(f.type, f.key, f.props, null, c.mode, h)),
			  (h.ref = ft(c, a, f)),
			  (h.return = c),
			  h);
	}
	function d(c, a, f, h) {
		return a === null ||
			a.tag !== 4 ||
			a.stateNode.containerInfo !== f.containerInfo ||
			a.stateNode.implementation !== f.implementation
			? ((a = Wl(f, c.mode, h)), (a.return = c), a)
			: ((a = l(a, f.children || [])), (a.return = c), a);
	}
	function g(c, a, f, h, m) {
		return a === null || a.tag !== 7
			? ((a = Vn(f, c.mode, h, m)), (a.return = c), a)
			: ((a = l(a, f)), (a.return = c), a);
	}
	function C(c, a, f) {
		if (typeof a == "string" || typeof a == "number")
			return (a = Rl("" + a, c.mode, f)), (a.return = c), a;
		if (typeof a == "object" && a !== null) {
			switch (a.$$typeof) {
				case yt:
					return (
						(f = xr(a.type, a.key, a.props, null, c.mode, f)),
						(f.ref = ft(c, null, a)),
						(f.return = c),
						f
					);
				case un:
					return (a = Wl(a, c.mode, f)), (a.return = c), a;
			}
			if (ar(a) || lt(a)) return (a = Vn(a, c.mode, f, null)), (a.return = c), a;
			fr(c, a);
		}
		return null;
	}
	function y(c, a, f, h) {
		var m = a !== null ? a.key : null;
		if (typeof f == "string" || typeof f == "number")
			return m !== null ? null : u(c, a, "" + f, h);
		if (typeof f == "object" && f !== null) {
			switch (f.$$typeof) {
				case yt:
					return f.key === m
						? f.type === De
							? g(c, a, f.props.children, h, m)
							: s(c, a, f, h)
						: null;
				case un:
					return f.key === m ? d(c, a, f, h) : null;
			}
			if (ar(f) || lt(f)) return m !== null ? null : g(c, a, f, h, null);
			fr(c, f);
		}
		return null;
	}
	function E(c, a, f, h, m) {
		if (typeof h == "string" || typeof h == "number")
			return (c = c.get(f) || null), u(a, c, "" + h, m);
		if (typeof h == "object" && h !== null) {
			switch (h.$$typeof) {
				case yt:
					return (
						(c = c.get(h.key === null ? f : h.key) || null),
						h.type === De ? g(a, c, h.props.children, m, h.key) : s(a, c, h, m)
					);
				case un:
					return (c = c.get(h.key === null ? f : h.key) || null), d(a, c, h, m);
			}
			if (ar(h) || lt(h)) return (c = c.get(f) || null), g(a, c, h, m, null);
			fr(a, h);
		}
		return null;
	}
	function L(c, a, f, h) {
		for (
			var m = null, N = null, k = a, P = (a = 0), M = null;
			k !== null && P < f.length;
			P++
		) {
			k.index > P ? ((M = k), (k = null)) : (M = k.sibling);
			var x = y(c, k, f[P], h);
			if (x === null) {
				k === null && (k = M);
				break;
			}
			e && k && x.alternate === null && n(c, k),
				(a = o(x, a, P)),
				N === null ? (m = x) : (N.sibling = x),
				(N = x),
				(k = M);
		}
		if (P === f.length) return t(c, k), m;
		if (k === null) {
			for (; P < f.length; P++)
				(k = C(c, f[P], h)),
					k !== null &&
						((a = o(k, a, P)), N === null ? (m = k) : (N.sibling = k), (N = k));
			return m;
		}
		for (k = r(c, k); P < f.length; P++)
			(M = E(k, c, P, f[P], h)),
				M !== null &&
					(e && M.alternate !== null && k.delete(M.key === null ? P : M.key),
					(a = o(M, a, P)),
					N === null ? (m = M) : (N.sibling = M),
					(N = M));
		return (
			e &&
				k.forEach(function (Z) {
					return n(c, Z);
				}),
			m
		);
	}
	function _(c, a, f, h) {
		var m = lt(f);
		if (typeof m != "function") throw Error(v(150));
		if (((f = m.call(f)), f == null)) throw Error(v(151));
		for (
			var N = (m = null), k = a, P = (a = 0), M = null, x = f.next();
			k !== null && !x.done;
			P++, x = f.next()
		) {
			k.index > P ? ((M = k), (k = null)) : (M = k.sibling);
			var Z = y(c, k, x.value, h);
			if (Z === null) {
				k === null && (k = M);
				break;
			}
			e && k && Z.alternate === null && n(c, k),
				(a = o(Z, a, P)),
				N === null ? (m = Z) : (N.sibling = Z),
				(N = Z),
				(k = M);
		}
		if (x.done) return t(c, k), m;
		if (k === null) {
			for (; !x.done; P++, x = f.next())
				(x = C(c, x.value, h)),
					x !== null &&
						((a = o(x, a, P)), N === null ? (m = x) : (N.sibling = x), (N = x));
			return m;
		}
		for (k = r(c, k); !x.done; P++, x = f.next())
			(x = E(k, c, P, x.value, h)),
				x !== null &&
					(e && x.alternate !== null && k.delete(x.key === null ? P : x.key),
					(a = o(x, a, P)),
					N === null ? (m = x) : (N.sibling = x),
					(N = x));
		return (
			e &&
				k.forEach(function (fl) {
					return n(c, fl);
				}),
			m
		);
	}
	return function (c, a, f, h) {
		var m = typeof f == "object" && f !== null && f.type === De && f.key === null;
		m && (f = f.props.children);
		var N = typeof f == "object" && f !== null;
		if (N)
			switch (f.$$typeof) {
				case yt:
					e: {
						for (N = f.key, m = a; m !== null; ) {
							if (m.key === N) {
								switch (m.tag) {
									case 7:
										if (f.type === De) {
											t(c, m.sibling),
												(a = l(m, f.props.children)),
												(a.return = c),
												(c = a);
											break e;
										}
										break;
									default:
										if (m.elementType === f.type) {
											t(c, m.sibling),
												(a = l(m, f.props)),
												(a.ref = ft(c, m, f)),
												(a.return = c),
												(c = a);
											break e;
										}
								}
								t(c, m);
								break;
							} else n(c, m);
							m = m.sibling;
						}
						f.type === De
							? ((a = Vn(f.props.children, c.mode, h, f.key)),
							  (a.return = c),
							  (c = a))
							: ((h = xr(f.type, f.key, f.props, null, c.mode, h)),
							  (h.ref = ft(c, a, f)),
							  (h.return = c),
							  (c = h));
					}
					return i(c);
				case un:
					e: {
						for (m = f.key; a !== null; ) {
							if (a.key === m)
								if (
									a.tag === 4 &&
									a.stateNode.containerInfo === f.containerInfo &&
									a.stateNode.implementation === f.implementation
								) {
									t(c, a.sibling),
										(a = l(a, f.children || [])),
										(a.return = c),
										(c = a);
									break e;
								} else {
									t(c, a);
									break;
								}
							else n(c, a);
							a = a.sibling;
						}
						(a = Wl(f, c.mode, h)), (a.return = c), (c = a);
					}
					return i(c);
			}
		if (typeof f == "string" || typeof f == "number")
			return (
				(f = "" + f),
				a !== null && a.tag === 6
					? (t(c, a.sibling), (a = l(a, f)), (a.return = c), (c = a))
					: (t(c, a), (a = Rl(f, c.mode, h)), (a.return = c), (c = a)),
				i(c)
			);
		if (ar(f)) return L(c, a, f, h);
		if (lt(f)) return _(c, a, f, h);
		if ((N && fr(c, f), typeof f == "undefined" && !m))
			switch (c.tag) {
				case 1:
				case 22:
				case 0:
				case 11:
				case 15:
					throw Error(v(152, Rn(c.type) || "Component"));
			}
		return t(c, a);
	};
}
var Ur = ia(!0),
	ua = ia(!1),
	Xt = {},
	xe = en(Xt),
	Vt = en(Xt),
	Qt = en(Xt);
function fn(e) {
	if (e === Xt) throw Error(v(174));
	return e;
}
function uo(e, n) {
	switch ((A(Qt, n), A(Vt, e), A(xe, Xt), (e = n.nodeType), e)) {
		case 9:
		case 11:
			n = (n = n.documentElement) ? n.namespaceURI : Ql(null, "");
			break;
		default:
			(e = e === 8 ? n.parentNode : n),
				(n = e.namespaceURI || null),
				(e = e.tagName),
				(n = Ql(n, e));
	}
	F(xe), A(xe, n);
}
function Gn() {
	F(xe), F(Vt), F(Qt);
}
function yu(e) {
	fn(Qt.current);
	var n = fn(xe.current),
		t = Ql(n, e.type);
	n !== t && (A(Vt, e), A(xe, t));
}
function oi(e) {
	Vt.current === e && (F(xe), F(Vt));
}
var $ = en(0);
function $r(e) {
	for (var n = e; n !== null; ) {
		if (n.tag === 13) {
			var t = n.memoizedState;
			if (
				t !== null &&
				((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
			)
				return n;
		} else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
			if ((n.flags & 64) !== 0) return n;
		} else if (n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === e) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === e) return null;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
	return null;
}
var Te = null,
	$e = null,
	Ce = !1;
function sa(e, n) {
	var t = pe(5, null, null, 0);
	(t.elementType = "DELETED"),
		(t.type = "DELETED"),
		(t.stateNode = n),
		(t.return = e),
		(t.flags = 8),
		e.lastEffect !== null
			? ((e.lastEffect.nextEffect = t), (e.lastEffect = t))
			: (e.firstEffect = e.lastEffect = t);
}
function vu(e, n) {
	switch (e.tag) {
		case 5:
			var t = e.type;
			return (
				(n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n),
				n !== null ? ((e.stateNode = n), !0) : !1
			);
		case 6:
			return (
				(n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
				n !== null ? ((e.stateNode = n), !0) : !1
			);
		case 13:
			return !1;
		default:
			return !1;
	}
}
function so(e) {
	if (Ce) {
		var n = $e;
		if (n) {
			var t = n;
			if (!vu(e, n)) {
				if (((n = Un(t.nextSibling)), !n || !vu(e, n))) {
					(e.flags = (e.flags & -1025) | 2), (Ce = !1), (Te = e);
					return;
				}
				sa(Te, t);
			}
			(Te = e), ($e = Un(n.firstChild));
		} else (e.flags = (e.flags & -1025) | 2), (Ce = !1), (Te = e);
	}
}
function gu(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
	Te = e;
}
function cr(e) {
	if (e !== Te) return !1;
	if (!Ce) return gu(e), (Ce = !0), !1;
	var n = e.type;
	if (e.tag !== 5 || (n !== "head" && n !== "body" && !to(n, e.memoizedProps)))
		for (n = $e; n; ) sa(e, n), (n = Un(n.nextSibling));
	if ((gu(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(v(317));
		e: {
			for (e = e.nextSibling, n = 0; e; ) {
				if (e.nodeType === 8) {
					var t = e.data;
					if (t === "/$") {
						if (n === 0) {
							$e = Un(e.nextSibling);
							break e;
						}
						n--;
					} else (t !== "$" && t !== "$!" && t !== "$?") || n++;
				}
				e = e.nextSibling;
			}
			$e = null;
		}
	} else $e = Te ? Un(e.stateNode.nextSibling) : null;
	return !0;
}
function Ml() {
	($e = Te = null), (Ce = !1);
}
var An = [];
function ii() {
	for (var e = 0; e < An.length; e++) An[e]._workInProgressVersionPrimary = null;
	An.length = 0;
}
var Nt = vn.ReactCurrentDispatcher,
	he = vn.ReactCurrentBatchConfig,
	Kt = 0,
	H = null,
	b = null,
	Y = null,
	Ar = !1,
	jt = !1;
function oe() {
	throw Error(v(321));
}
function ui(e, n) {
	if (n === null) return !1;
	for (var t = 0; t < n.length && t < e.length; t++) if (!de(e[t], n[t])) return !1;
	return !0;
}
function si(e, n, t, r, l, o) {
	if (
		((Kt = o),
		(H = n),
		(n.memoizedState = null),
		(n.updateQueue = null),
		(n.lanes = 0),
		(Nt.current = e === null || e.memoizedState === null ? Cc : Pc),
		(e = t(r, l)),
		jt)
	) {
		o = 0;
		do {
			if (((jt = !1), !(25 > o))) throw Error(v(301));
			(o += 1), (Y = b = null), (n.updateQueue = null), (Nt.current = Nc), (e = t(r, l));
		} while (jt);
	}
	if (
		((Nt.current = Qr),
		(n = b !== null && b.next !== null),
		(Kt = 0),
		(Y = b = H = null),
		(Ar = !1),
		n)
	)
		throw Error(v(300));
	return e;
}
function cn() {
	var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
	return Y === null ? (H.memoizedState = Y = e) : (Y = Y.next = e), Y;
}
function kn() {
	if (b === null) {
		var e = H.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = b.next;
	var n = Y === null ? H.memoizedState : Y.next;
	if (n !== null) (Y = n), (b = e);
	else {
		if (e === null) throw Error(v(310));
		(b = e),
			(e = {
				memoizedState: b.memoizedState,
				baseState: b.baseState,
				baseQueue: b.baseQueue,
				queue: b.queue,
				next: null
			}),
			Y === null ? (H.memoizedState = Y = e) : (Y = Y.next = e);
	}
	return Y;
}
function _e(e, n) {
	return typeof n == "function" ? n(e) : n;
}
function ct(e) {
	var n = kn(),
		t = n.queue;
	if (t === null) throw Error(v(311));
	t.lastRenderedReducer = e;
	var r = b,
		l = r.baseQueue,
		o = t.pending;
	if (o !== null) {
		if (l !== null) {
			var i = l.next;
			(l.next = o.next), (o.next = i);
		}
		(r.baseQueue = l = o), (t.pending = null);
	}
	if (l !== null) {
		(l = l.next), (r = r.baseState);
		var u = (i = o = null),
			s = l;
		do {
			var d = s.lane;
			if ((Kt & d) === d)
				u !== null &&
					(u = u.next =
						{
							lane: 0,
							action: s.action,
							eagerReducer: s.eagerReducer,
							eagerState: s.eagerState,
							next: null
						}),
					(r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
			else {
				var g = {
					lane: d,
					action: s.action,
					eagerReducer: s.eagerReducer,
					eagerState: s.eagerState,
					next: null
				};
				u === null ? ((i = u = g), (o = r)) : (u = u.next = g), (H.lanes |= d), (Jt |= d);
			}
			s = s.next;
		} while (s !== null && s !== l);
		u === null ? (o = r) : (u.next = i),
			de(r, n.memoizedState) || (we = !0),
			(n.memoizedState = r),
			(n.baseState = o),
			(n.baseQueue = u),
			(t.lastRenderedState = r);
	}
	return [n.memoizedState, t.dispatch];
}
function dt(e) {
	var n = kn(),
		t = n.queue;
	if (t === null) throw Error(v(311));
	t.lastRenderedReducer = e;
	var r = t.dispatch,
		l = t.pending,
		o = n.memoizedState;
	if (l !== null) {
		t.pending = null;
		var i = (l = l.next);
		do (o = e(o, i.action)), (i = i.next);
		while (i !== l);
		de(o, n.memoizedState) || (we = !0),
			(n.memoizedState = o),
			n.baseQueue === null && (n.baseState = o),
			(t.lastRenderedState = o);
	}
	return [o, r];
}
function ku(e, n, t) {
	var r = n._getVersion;
	r = r(n._source);
	var l = n._workInProgressVersionPrimary;
	if (
		(l !== null
			? (e = l === r)
			: ((e = e.mutableReadLanes),
			  (e = (Kt & e) === e) && ((n._workInProgressVersionPrimary = r), An.push(n))),
		e)
	)
		return t(n._source);
	throw (An.push(n), Error(v(350)));
}
function aa(e, n, t, r) {
	var l = re;
	if (l === null) throw Error(v(349));
	var o = n._getVersion,
		i = o(n._source),
		u = Nt.current,
		s = u.useState(function () {
			return ku(l, n, t);
		}),
		d = s[1],
		g = s[0];
	s = Y;
	var C = e.memoizedState,
		y = C.refs,
		E = y.getSnapshot,
		L = C.source;
	C = C.subscribe;
	var _ = H;
	return (
		(e.memoizedState = { refs: y, source: n, subscribe: r }),
		u.useEffect(
			function () {
				(y.getSnapshot = t), (y.setSnapshot = d);
				var c = o(n._source);
				if (!de(i, c)) {
					(c = t(n._source)),
						de(g, c) || (d(c), (c = Ke(_)), (l.mutableReadLanes |= c & l.pendingLanes)),
						(c = l.mutableReadLanes),
						(l.entangledLanes |= c);
					for (var a = l.entanglements, f = c; 0 < f; ) {
						var h = 31 - Xe(f),
							m = 1 << h;
						(a[h] |= c), (f &= ~m);
					}
				}
			},
			[t, n, r]
		),
		u.useEffect(
			function () {
				return r(n._source, function () {
					var c = y.getSnapshot,
						a = y.setSnapshot;
					try {
						a(c(n._source));
						var f = Ke(_);
						l.mutableReadLanes |= f & l.pendingLanes;
					} catch (h) {
						a(function () {
							throw h;
						});
					}
				});
			},
			[n, r]
		),
		(de(E, t) && de(L, n) && de(C, r)) ||
			((e = { pending: null, dispatch: null, lastRenderedReducer: _e, lastRenderedState: g }),
			(e.dispatch = d = ci.bind(null, H, e)),
			(s.queue = e),
			(s.baseQueue = null),
			(g = ku(l, n, t)),
			(s.memoizedState = s.baseState = g)),
		g
	);
}
function fa(e, n, t) {
	var r = kn();
	return aa(r, e, n, t);
}
function pt(e) {
	var n = cn();
	return (
		typeof e == "function" && (e = e()),
		(n.memoizedState = n.baseState = e),
		(e = n.queue =
			{ pending: null, dispatch: null, lastRenderedReducer: _e, lastRenderedState: e }),
		(e = e.dispatch = ci.bind(null, H, e)),
		[n.memoizedState, e]
	);
}
function Br(e, n, t, r) {
	return (
		(e = { tag: e, create: n, destroy: t, deps: r, next: null }),
		(n = H.updateQueue),
		n === null
			? ((n = { lastEffect: null }), (H.updateQueue = n), (n.lastEffect = e.next = e))
			: ((t = n.lastEffect),
			  t === null
					? (n.lastEffect = e.next = e)
					: ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
		e
	);
}
function wu(e) {
	var n = cn();
	return (e = { current: e }), (n.memoizedState = e);
}
function Hr() {
	return kn().memoizedState;
}
function ao(e, n, t, r) {
	var l = cn();
	(H.flags |= e), (l.memoizedState = Br(1 | n, t, void 0, r === void 0 ? null : r));
}
function ai(e, n, t, r) {
	var l = kn();
	r = r === void 0 ? null : r;
	var o = void 0;
	if (b !== null) {
		var i = b.memoizedState;
		if (((o = i.destroy), r !== null && ui(r, i.deps))) {
			Br(n, t, o, r);
			return;
		}
	}
	(H.flags |= e), (l.memoizedState = Br(1 | n, t, o, r));
}
function Su(e, n) {
	return ao(516, 4, e, n);
}
function Vr(e, n) {
	return ai(516, 4, e, n);
}
function ca(e, n) {
	return ai(4, 2, e, n);
}
function da(e, n) {
	if (typeof n == "function")
		return (
			(e = e()),
			n(e),
			function () {
				n(null);
			}
		);
	if (n != null)
		return (
			(e = e()),
			(n.current = e),
			function () {
				n.current = null;
			}
		);
}
function pa(e, n, t) {
	return (t = t != null ? t.concat([e]) : null), ai(4, 2, da.bind(null, n, e), t);
}
function fi() {}
function ha(e, n) {
	var t = kn();
	n = n === void 0 ? null : n;
	var r = t.memoizedState;
	return r !== null && n !== null && ui(n, r[1]) ? r[0] : ((t.memoizedState = [e, n]), e);
}
function ma(e, n) {
	var t = kn();
	n = n === void 0 ? null : n;
	var r = t.memoizedState;
	return r !== null && n !== null && ui(n, r[1])
		? r[0]
		: ((e = e()), (t.memoizedState = [e, n]), e);
}
function xc(e, n) {
	var t = Zn();
	hn(98 > t ? 98 : t, function () {
		e(!0);
	}),
		hn(97 < t ? 97 : t, function () {
			var r = he.transition;
			he.transition = 1;
			try {
				e(!1), n();
			} finally {
				he.transition = r;
			}
		});
}
function ci(e, n, t) {
	var r = ae(),
		l = Ke(e),
		o = { lane: l, action: t, eagerReducer: null, eagerState: null, next: null },
		i = n.pending;
	if (
		(i === null ? (o.next = o) : ((o.next = i.next), (i.next = o)),
		(n.pending = o),
		(i = e.alternate),
		e === H || (i !== null && i === H))
	)
		jt = Ar = !0;
	else {
		if (
			e.lanes === 0 &&
			(i === null || i.lanes === 0) &&
			((i = n.lastRenderedReducer), i !== null)
		)
			try {
				var u = n.lastRenderedState,
					s = i(u, t);
				if (((o.eagerReducer = i), (o.eagerState = s), de(s, u))) return;
			} catch {
			} finally {
			}
		Ze(e, l, r);
	}
}
var Qr = {
		readContext: me,
		useCallback: oe,
		useContext: oe,
		useEffect: oe,
		useImperativeHandle: oe,
		useLayoutEffect: oe,
		useMemo: oe,
		useReducer: oe,
		useRef: oe,
		useState: oe,
		useDebugValue: oe,
		useDeferredValue: oe,
		useTransition: oe,
		useMutableSource: oe,
		useOpaqueIdentifier: oe,
		unstable_isNewReconciler: !1
	},
	Cc = {
		readContext: me,
		useCallback: function (e, n) {
			return (cn().memoizedState = [e, n === void 0 ? null : n]), e;
		},
		useContext: me,
		useEffect: Su,
		useImperativeHandle: function (e, n, t) {
			return (t = t != null ? t.concat([e]) : null), ao(4, 2, da.bind(null, n, e), t);
		},
		useLayoutEffect: function (e, n) {
			return ao(4, 2, e, n);
		},
		useMemo: function (e, n) {
			var t = cn();
			return (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e;
		},
		useReducer: function (e, n, t) {
			var r = cn();
			return (
				(n = t !== void 0 ? t(n) : n),
				(r.memoizedState = r.baseState = n),
				(e = r.queue =
					{
						pending: null,
						dispatch: null,
						lastRenderedReducer: e,
						lastRenderedState: n
					}),
				(e = e.dispatch = ci.bind(null, H, e)),
				[r.memoizedState, e]
			);
		},
		useRef: wu,
		useState: pt,
		useDebugValue: fi,
		useDeferredValue: function (e) {
			var n = pt(e),
				t = n[0],
				r = n[1];
			return (
				Su(
					function () {
						var l = he.transition;
						he.transition = 1;
						try {
							r(e);
						} finally {
							he.transition = l;
						}
					},
					[e]
				),
				t
			);
		},
		useTransition: function () {
			var e = pt(!1),
				n = e[0];
			return (e = xc.bind(null, e[1])), wu(e), [e, n];
		},
		useMutableSource: function (e, n, t) {
			var r = cn();
			return (
				(r.memoizedState = {
					refs: { getSnapshot: n, setSnapshot: null },
					source: e,
					subscribe: t
				}),
				aa(r, e, n, t)
			);
		},
		useOpaqueIdentifier: function () {
			if (Ce) {
				var e = !1,
					n = kc(function () {
						throw (e || ((e = !0), t("r:" + (Nl++).toString(36))), Error(v(355)));
					}),
					t = pt(n)[1];
				return (
					(H.mode & 2) === 0 &&
						((H.flags |= 516),
						Br(
							5,
							function () {
								t("r:" + (Nl++).toString(36));
							},
							void 0,
							null
						)),
					n
				);
			}
			return (n = "r:" + (Nl++).toString(36)), pt(n), n;
		},
		unstable_isNewReconciler: !1
	},
	Pc = {
		readContext: me,
		useCallback: ha,
		useContext: me,
		useEffect: Vr,
		useImperativeHandle: pa,
		useLayoutEffect: ca,
		useMemo: ma,
		useReducer: ct,
		useRef: Hr,
		useState: function () {
			return ct(_e);
		},
		useDebugValue: fi,
		useDeferredValue: function (e) {
			var n = ct(_e),
				t = n[0],
				r = n[1];
			return (
				Vr(
					function () {
						var l = he.transition;
						he.transition = 1;
						try {
							r(e);
						} finally {
							he.transition = l;
						}
					},
					[e]
				),
				t
			);
		},
		useTransition: function () {
			var e = ct(_e)[0];
			return [Hr().current, e];
		},
		useMutableSource: fa,
		useOpaqueIdentifier: function () {
			return ct(_e)[0];
		},
		unstable_isNewReconciler: !1
	},
	Nc = {
		readContext: me,
		useCallback: ha,
		useContext: me,
		useEffect: Vr,
		useImperativeHandle: pa,
		useLayoutEffect: ca,
		useMemo: ma,
		useReducer: dt,
		useRef: Hr,
		useState: function () {
			return dt(_e);
		},
		useDebugValue: fi,
		useDeferredValue: function (e) {
			var n = dt(_e),
				t = n[0],
				r = n[1];
			return (
				Vr(
					function () {
						var l = he.transition;
						he.transition = 1;
						try {
							r(e);
						} finally {
							he.transition = l;
						}
					},
					[e]
				),
				t
			);
		},
		useTransition: function () {
			var e = dt(_e)[0];
			return [Hr().current, e];
		},
		useMutableSource: fa,
		useOpaqueIdentifier: function () {
			return dt(_e)[0];
		},
		unstable_isNewReconciler: !1
	},
	jc = vn.ReactCurrentOwner,
	we = !1;
function ie(e, n, t, r) {
	n.child = e === null ? ua(n, null, t, r) : Ur(n, e.child, t, r);
}
function Eu(e, n, t, r, l) {
	t = t.render;
	var o = n.ref;
	return (
		$n(n, l),
		(r = si(e, n, t, r, o, l)),
		e !== null && !we
			? ((n.updateQueue = e.updateQueue), (n.flags &= -517), (e.lanes &= ~l), Me(e, n, l))
			: ((n.flags |= 1), ie(e, n, r, l), n.child)
	);
}
function _u(e, n, t, r, l, o) {
	if (e === null) {
		var i = t.type;
		return typeof i == "function" &&
			!vi(i) &&
			i.defaultProps === void 0 &&
			t.compare === null &&
			t.defaultProps === void 0
			? ((n.tag = 15), (n.type = i), ya(e, n, i, r, l, o))
			: ((e = xr(t.type, null, r, n, n.mode, o)),
			  (e.ref = n.ref),
			  (e.return = n),
			  (n.child = e));
	}
	return (
		(i = e.child),
		(l & o) === 0 &&
		((l = i.memoizedProps),
		(t = t.compare),
		(t = t !== null ? t : $t),
		t(l, r) && e.ref === n.ref)
			? Me(e, n, o)
			: ((n.flags |= 1), (e = be(i, r)), (e.ref = n.ref), (e.return = n), (n.child = e))
	);
}
function ya(e, n, t, r, l, o) {
	if (e !== null && $t(e.memoizedProps, r) && e.ref === n.ref)
		if (((we = !1), (o & l) !== 0)) (e.flags & 16384) !== 0 && (we = !0);
		else return (n.lanes = e.lanes), Me(e, n, o);
	return fo(e, n, t, r, o);
}
function Ol(e, n, t) {
	var r = n.pendingProps,
		l = r.children,
		o = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding")
		if ((n.mode & 4) === 0) (n.memoizedState = { baseLanes: 0 }), pr(n, t);
		else if ((t & 1073741824) !== 0)
			(n.memoizedState = { baseLanes: 0 }), pr(n, o !== null ? o.baseLanes : t);
		else
			return (
				(e = o !== null ? o.baseLanes | t : t),
				(n.lanes = n.childLanes = 1073741824),
				(n.memoizedState = { baseLanes: e }),
				pr(n, e),
				null
			);
	else o !== null ? ((r = o.baseLanes | t), (n.memoizedState = null)) : (r = t), pr(n, r);
	return ie(e, n, l, t), n.child;
}
function va(e, n) {
	var t = n.ref;
	((e === null && t !== null) || (e !== null && e.ref !== t)) && (n.flags |= 128);
}
function fo(e, n, t, r, l) {
	var o = se(t) ? pn : te.current;
	return (
		(o = Kn(n, o)),
		$n(n, l),
		(t = si(e, n, t, r, o, l)),
		e !== null && !we
			? ((n.updateQueue = e.updateQueue), (n.flags &= -517), (e.lanes &= ~l), Me(e, n, l))
			: ((n.flags |= 1), ie(e, n, t, l), n.child)
	);
}
function Lu(e, n, t, r, l) {
	if (se(t)) {
		var o = !0;
		wr(n);
	} else o = !1;
	if (($n(n, l), n.stateNode === null))
		e !== null && ((e.alternate = null), (n.alternate = null), (n.flags |= 2)),
			oa(n, t, r),
			io(n, t, r, l),
			(r = !0);
	else if (e === null) {
		var i = n.stateNode,
			u = n.memoizedProps;
		i.props = u;
		var s = i.context,
			d = t.contextType;
		typeof d == "object" && d !== null
			? (d = me(d))
			: ((d = se(t) ? pn : te.current), (d = Kn(n, d)));
		var g = t.getDerivedStateFromProps,
			C = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function";
		C ||
			(typeof i.UNSAFE_componentWillReceiveProps != "function" &&
				typeof i.componentWillReceiveProps != "function") ||
			((u !== r || s !== d) && mu(n, i, r, d)),
			(We = !1);
		var y = n.memoizedState;
		(i.state = y),
			Ht(n, r, i, l),
			(s = n.memoizedState),
			u !== r || y !== s || ue.current || We
				? (typeof g == "function" && (Fr(n, t, g, r), (s = n.memoizedState)),
				  (u = We || hu(n, t, u, r, y, s, d))
						? (C ||
								(typeof i.UNSAFE_componentWillMount != "function" &&
									typeof i.componentWillMount != "function") ||
								(typeof i.componentWillMount == "function" &&
									i.componentWillMount(),
								typeof i.UNSAFE_componentWillMount == "function" &&
									i.UNSAFE_componentWillMount()),
						  typeof i.componentDidMount == "function" && (n.flags |= 4))
						: (typeof i.componentDidMount == "function" && (n.flags |= 4),
						  (n.memoizedProps = r),
						  (n.memoizedState = s)),
				  (i.props = r),
				  (i.state = s),
				  (i.context = d),
				  (r = u))
				: (typeof i.componentDidMount == "function" && (n.flags |= 4), (r = !1));
	} else {
		(i = n.stateNode),
			ra(e, n),
			(u = n.memoizedProps),
			(d = n.type === n.elementType ? u : ke(n.type, u)),
			(i.props = d),
			(C = n.pendingProps),
			(y = i.context),
			(s = t.contextType),
			typeof s == "object" && s !== null
				? (s = me(s))
				: ((s = se(t) ? pn : te.current), (s = Kn(n, s)));
		var E = t.getDerivedStateFromProps;
		(g = typeof E == "function" || typeof i.getSnapshotBeforeUpdate == "function") ||
			(typeof i.UNSAFE_componentWillReceiveProps != "function" &&
				typeof i.componentWillReceiveProps != "function") ||
			((u !== C || y !== s) && mu(n, i, r, s)),
			(We = !1),
			(y = n.memoizedState),
			(i.state = y),
			Ht(n, r, i, l);
		var L = n.memoizedState;
		u !== C || y !== L || ue.current || We
			? (typeof E == "function" && (Fr(n, t, E, r), (L = n.memoizedState)),
			  (d = We || hu(n, t, d, r, y, L, s))
					? (g ||
							(typeof i.UNSAFE_componentWillUpdate != "function" &&
								typeof i.componentWillUpdate != "function") ||
							(typeof i.componentWillUpdate == "function" &&
								i.componentWillUpdate(r, L, s),
							typeof i.UNSAFE_componentWillUpdate == "function" &&
								i.UNSAFE_componentWillUpdate(r, L, s)),
					  typeof i.componentDidUpdate == "function" && (n.flags |= 4),
					  typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 256))
					: (typeof i.componentDidUpdate != "function" ||
							(u === e.memoizedProps && y === e.memoizedState) ||
							(n.flags |= 4),
					  typeof i.getSnapshotBeforeUpdate != "function" ||
							(u === e.memoizedProps && y === e.memoizedState) ||
							(n.flags |= 256),
					  (n.memoizedProps = r),
					  (n.memoizedState = L)),
			  (i.props = r),
			  (i.state = L),
			  (i.context = s),
			  (r = d))
			: (typeof i.componentDidUpdate != "function" ||
					(u === e.memoizedProps && y === e.memoizedState) ||
					(n.flags |= 4),
			  typeof i.getSnapshotBeforeUpdate != "function" ||
					(u === e.memoizedProps && y === e.memoizedState) ||
					(n.flags |= 256),
			  (r = !1));
	}
	return co(e, n, t, r, o, l);
}
function co(e, n, t, r, l, o) {
	va(e, n);
	var i = (n.flags & 64) !== 0;
	if (!r && !i) return l && au(n, t, !1), Me(e, n, o);
	(r = n.stateNode), (jc.current = n);
	var u = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
	return (
		(n.flags |= 1),
		e !== null && i
			? ((n.child = Ur(n, e.child, null, o)), (n.child = Ur(n, null, u, o)))
			: ie(e, n, u, o),
		(n.memoizedState = r.state),
		l && au(n, t, !0),
		n.child
	);
}
function xu(e) {
	var n = e.stateNode;
	n.pendingContext
		? su(e, n.pendingContext, n.pendingContext !== n.context)
		: n.context && su(e, n.context, !1),
		uo(e, n.containerInfo);
}
var dr = { dehydrated: null, retryLane: 0 };
function Cu(e, n, t) {
	var r = n.pendingProps,
		l = $.current,
		o = !1,
		i;
	return (
		(i = (n.flags & 64) !== 0) ||
			(i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
		i
			? ((o = !0), (n.flags &= -65))
			: (e !== null && e.memoizedState === null) ||
			  r.fallback === void 0 ||
			  r.unstable_avoidThisFallback === !0 ||
			  (l |= 1),
		A($, l & 1),
		e === null
			? (r.fallback !== void 0 && so(n),
			  (e = r.children),
			  (l = r.fallback),
			  o
					? ((e = Pu(n, e, l, t)),
					  (n.child.memoizedState = { baseLanes: t }),
					  (n.memoizedState = dr),
					  e)
					: typeof r.unstable_expectedLoadTime == "number"
					? ((e = Pu(n, e, l, t)),
					  (n.child.memoizedState = { baseLanes: t }),
					  (n.memoizedState = dr),
					  (n.lanes = 33554432),
					  e)
					: ((t = gi({ mode: "visible", children: e }, n.mode, t, null)),
					  (t.return = n),
					  (n.child = t)))
			: e.memoizedState !== null
			? o
				? ((r = ju(e, n, r.children, r.fallback, t)),
				  (o = n.child),
				  (l = e.child.memoizedState),
				  (o.memoizedState =
						l === null ? { baseLanes: t } : { baseLanes: l.baseLanes | t }),
				  (o.childLanes = e.childLanes & ~t),
				  (n.memoizedState = dr),
				  r)
				: ((t = Nu(e, n, r.children, t)), (n.memoizedState = null), t)
			: o
			? ((r = ju(e, n, r.children, r.fallback, t)),
			  (o = n.child),
			  (l = e.child.memoizedState),
			  (o.memoizedState = l === null ? { baseLanes: t } : { baseLanes: l.baseLanes | t }),
			  (o.childLanes = e.childLanes & ~t),
			  (n.memoizedState = dr),
			  r)
			: ((t = Nu(e, n, r.children, t)), (n.memoizedState = null), t)
	);
}
function Pu(e, n, t, r) {
	var l = e.mode,
		o = e.child;
	return (
		(n = { mode: "hidden", children: n }),
		(l & 2) === 0 && o !== null
			? ((o.childLanes = 0), (o.pendingProps = n))
			: (o = gi(n, l, 0, null)),
		(t = Vn(t, l, r, null)),
		(o.return = e),
		(t.return = e),
		(o.sibling = t),
		(e.child = o),
		t
	);
}
function Nu(e, n, t, r) {
	var l = e.child;
	return (
		(e = l.sibling),
		(t = be(l, { mode: "visible", children: t })),
		(n.mode & 2) === 0 && (t.lanes = r),
		(t.return = n),
		(t.sibling = null),
		e !== null && ((e.nextEffect = null), (e.flags = 8), (n.firstEffect = n.lastEffect = e)),
		(n.child = t)
	);
}
function ju(e, n, t, r, l) {
	var o = n.mode,
		i = e.child;
	e = i.sibling;
	var u = { mode: "hidden", children: t };
	return (
		(o & 2) === 0 && n.child !== i
			? ((t = n.child),
			  (t.childLanes = 0),
			  (t.pendingProps = u),
			  (i = t.lastEffect),
			  i !== null
					? ((n.firstEffect = t.firstEffect), (n.lastEffect = i), (i.nextEffect = null))
					: (n.firstEffect = n.lastEffect = null))
			: (t = be(i, u)),
		e !== null ? (r = be(e, r)) : ((r = Vn(r, o, l, null)), (r.flags |= 2)),
		(r.return = n),
		(t.return = n),
		(t.sibling = r),
		(n.child = t),
		r
	);
}
function Tu(e, n) {
	e.lanes |= n;
	var t = e.alternate;
	t !== null && (t.lanes |= n), ta(e.return, n);
}
function zl(e, n, t, r, l, o) {
	var i = e.memoizedState;
	i === null
		? (e.memoizedState = {
				isBackwards: n,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: t,
				tailMode: l,
				lastEffect: o
		  })
		: ((i.isBackwards = n),
		  (i.rendering = null),
		  (i.renderingStartTime = 0),
		  (i.last = r),
		  (i.tail = t),
		  (i.tailMode = l),
		  (i.lastEffect = o));
}
function Mu(e, n, t) {
	var r = n.pendingProps,
		l = r.revealOrder,
		o = r.tail;
	if ((ie(e, n, r.children, t), (r = $.current), (r & 2) !== 0))
		(r = (r & 1) | 2), (n.flags |= 64);
	else {
		if (e !== null && (e.flags & 64) !== 0)
			e: for (e = n.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && Tu(e, t);
				else if (e.tag === 19) Tu(e, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === n) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === n) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		r &= 1;
	}
	if ((A($, r), (n.mode & 2) === 0)) n.memoizedState = null;
	else
		switch (l) {
			case "forwards":
				for (t = n.child, l = null; t !== null; )
					(e = t.alternate), e !== null && $r(e) === null && (l = t), (t = t.sibling);
				(t = l),
					t === null
						? ((l = n.child), (n.child = null))
						: ((l = t.sibling), (t.sibling = null)),
					zl(n, !1, l, t, o, n.lastEffect);
				break;
			case "backwards":
				for (t = null, l = n.child, n.child = null; l !== null; ) {
					if (((e = l.alternate), e !== null && $r(e) === null)) {
						n.child = l;
						break;
					}
					(e = l.sibling), (l.sibling = t), (t = l), (l = e);
				}
				zl(n, !0, t, null, o, n.lastEffect);
				break;
			case "together":
				zl(n, !1, null, null, void 0, n.lastEffect);
				break;
			default:
				n.memoizedState = null;
		}
	return n.child;
}
function Me(e, n, t) {
	if (
		(e !== null && (n.dependencies = e.dependencies), (Jt |= n.lanes), (t & n.childLanes) !== 0)
	) {
		if (e !== null && n.child !== e.child) throw Error(v(153));
		if (n.child !== null) {
			for (
				e = n.child, t = be(e, e.pendingProps), n.child = t, t.return = n;
				e.sibling !== null;

			)
				(e = e.sibling), (t = t.sibling = be(e, e.pendingProps)), (t.return = n);
			t.sibling = null;
		}
		return n.child;
	}
	return null;
}
var ga, po, ka, wa;
ga = function (e, n) {
	for (var t = n.child; t !== null; ) {
		if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
		else if (t.tag !== 4 && t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === n) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === n) return;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
};
po = function () {};
ka = function (e, n, t, r) {
	var l = e.memoizedProps;
	if (l !== r) {
		(e = n.stateNode), fn(xe.current);
		var o = null;
		switch (t) {
			case "input":
				(l = Ul(e, l)), (r = Ul(e, r)), (o = []);
				break;
			case "option":
				(l = Bl(e, l)), (r = Bl(e, r)), (o = []);
				break;
			case "select":
				(l = U({}, l, { value: void 0 })), (r = U({}, r, { value: void 0 })), (o = []);
				break;
			case "textarea":
				(l = Hl(e, l)), (r = Hl(e, r)), (o = []);
				break;
			default:
				typeof l.onClick != "function" &&
					typeof r.onClick == "function" &&
					(e.onclick = Or);
		}
		Kl(t, r);
		var i;
		t = null;
		for (d in l)
			if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
				if (d === "style") {
					var u = l[d];
					for (i in u) u.hasOwnProperty(i) && (t || (t = {}), (t[i] = ""));
				} else
					d !== "dangerouslySetInnerHTML" &&
						d !== "children" &&
						d !== "suppressContentEditableWarning" &&
						d !== "suppressHydrationWarning" &&
						d !== "autoFocus" &&
						(zt.hasOwnProperty(d) ? o || (o = []) : (o = o || []).push(d, null));
		for (d in r) {
			var s = r[d];
			if (
				((u = l != null ? l[d] : void 0),
				r.hasOwnProperty(d) && s !== u && (s != null || u != null))
			)
				if (d === "style")
					if (u) {
						for (i in u)
							!u.hasOwnProperty(i) ||
								(s && s.hasOwnProperty(i)) ||
								(t || (t = {}), (t[i] = ""));
						for (i in s)
							s.hasOwnProperty(i) && u[i] !== s[i] && (t || (t = {}), (t[i] = s[i]));
					} else t || (o || (o = []), o.push(d, t)), (t = s);
				else
					d === "dangerouslySetInnerHTML"
						? ((s = s ? s.__html : void 0),
						  (u = u ? u.__html : void 0),
						  s != null && u !== s && (o = o || []).push(d, s))
						: d === "children"
						? (typeof s != "string" && typeof s != "number") ||
						  (o = o || []).push(d, "" + s)
						: d !== "suppressContentEditableWarning" &&
						  d !== "suppressHydrationWarning" &&
						  (zt.hasOwnProperty(d)
								? (s != null && d === "onScroll" && D("scroll", e),
								  o || u === s || (o = []))
								: typeof s == "object" && s !== null && s.$$typeof === Fo
								? s.toString()
								: (o = o || []).push(d, s));
		}
		t && (o = o || []).push("style", t);
		var d = o;
		(n.updateQueue = d) && (n.flags |= 4);
	}
};
wa = function (e, n, t, r) {
	t !== r && (n.flags |= 4);
};
function ht(e, n) {
	if (!Ce)
		switch (e.tailMode) {
			case "hidden":
				n = e.tail;
				for (var t = null; n !== null; ) n.alternate !== null && (t = n), (n = n.sibling);
				t === null ? (e.tail = null) : (t.sibling = null);
				break;
			case "collapsed":
				t = e.tail;
				for (var r = null; t !== null; ) t.alternate !== null && (r = t), (t = t.sibling);
				r === null
					? n || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null);
		}
}
function Tc(e, n, t) {
	var r = n.pendingProps;
	switch (n.tag) {
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
			return null;
		case 1:
			return se(n.type) && Ir(), null;
		case 3:
			return (
				Gn(),
				F(ue),
				F(te),
				ii(),
				(r = n.stateNode),
				r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(cr(n) ? (n.flags |= 4) : r.hydrate || (n.flags |= 256)),
				po(n),
				null
			);
		case 5:
			oi(n);
			var l = fn(Qt.current);
			if (((t = n.type), e !== null && n.stateNode != null))
				ka(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 128);
			else {
				if (!r) {
					if (n.stateNode === null) throw Error(v(166));
					return null;
				}
				if (((e = fn(xe.current)), cr(n))) {
					(r = n.stateNode), (t = n.type);
					var o = n.memoizedProps;
					switch (((r[Ue] = n), (r[zr] = o), t)) {
						case "dialog":
							D("cancel", r), D("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							D("load", r);
							break;
						case "video":
						case "audio":
							for (e = 0; e < gt.length; e++) D(gt[e], r);
							break;
						case "source":
							D("error", r);
							break;
						case "img":
						case "image":
						case "link":
							D("error", r), D("load", r);
							break;
						case "details":
							D("toggle", r);
							break;
						case "input":
							Mi(r, o), D("invalid", r);
							break;
						case "select":
							(r._wrapperState = { wasMultiple: !!o.multiple }), D("invalid", r);
							break;
						case "textarea":
							zi(r, o), D("invalid", r);
					}
					Kl(t, o), (e = null);
					for (var i in o)
						o.hasOwnProperty(i) &&
							((l = o[i]),
							i === "children"
								? typeof l == "string"
									? r.textContent !== l && (e = ["children", l])
									: typeof l == "number" &&
									  r.textContent !== "" + l &&
									  (e = ["children", "" + l])
								: zt.hasOwnProperty(i) &&
								  l != null &&
								  i === "onScroll" &&
								  D("scroll", r));
					switch (t) {
						case "input":
							or(r), Oi(r, o, !0);
							break;
						case "textarea":
							or(r), Ii(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof o.onClick == "function" && (r.onclick = Or);
					}
					(r = e), (n.updateQueue = r), r !== null && (n.flags |= 4);
				} else {
					switch (
						((i = l.nodeType === 9 ? l : l.ownerDocument),
						e === Vl.html && (e = ps(t)),
						e === Vl.html
							? t === "script"
								? ((e = i.createElement("div")),
								  (e.innerHTML = "<script></script>"),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == "string"
								? (e = i.createElement(t, { is: r.is }))
								: ((e = i.createElement(t)),
								  t === "select" &&
										((i = e),
										r.multiple
											? (i.multiple = !0)
											: r.size && (i.size = r.size)))
							: (e = i.createElementNS(e, t)),
						(e[Ue] = n),
						(e[zr] = r),
						ga(e, n, !1, !1),
						(n.stateNode = e),
						(i = Zl(t, r)),
						t)
					) {
						case "dialog":
							D("cancel", e), D("close", e), (l = r);
							break;
						case "iframe":
						case "object":
						case "embed":
							D("load", e), (l = r);
							break;
						case "video":
						case "audio":
							for (l = 0; l < gt.length; l++) D(gt[l], e);
							l = r;
							break;
						case "source":
							D("error", e), (l = r);
							break;
						case "img":
						case "image":
						case "link":
							D("error", e), D("load", e), (l = r);
							break;
						case "details":
							D("toggle", e), (l = r);
							break;
						case "input":
							Mi(e, r), (l = Ul(e, r)), D("invalid", e);
							break;
						case "option":
							l = Bl(e, r);
							break;
						case "select":
							(e._wrapperState = { wasMultiple: !!r.multiple }),
								(l = U({}, r, { value: void 0 })),
								D("invalid", e);
							break;
						case "textarea":
							zi(e, r), (l = Hl(e, r)), D("invalid", e);
							break;
						default:
							l = r;
					}
					Kl(t, l);
					var u = l;
					for (o in u)
						if (u.hasOwnProperty(o)) {
							var s = u[o];
							o === "style"
								? ys(e, s)
								: o === "dangerouslySetInnerHTML"
								? ((s = s ? s.__html : void 0), s != null && hs(e, s))
								: o === "children"
								? typeof s == "string"
									? (t !== "textarea" || s !== "") && It(e, s)
									: typeof s == "number" && It(e, "" + s)
								: o !== "suppressContentEditableWarning" &&
								  o !== "suppressHydrationWarning" &&
								  o !== "autoFocus" &&
								  (zt.hasOwnProperty(o)
										? s != null && o === "onScroll" && D("scroll", e)
										: s != null && Oo(e, o, s, i));
						}
					switch (t) {
						case "input":
							or(e), Oi(e, r, !1);
							break;
						case "textarea":
							or(e), Ii(e);
							break;
						case "option":
							r.value != null && e.setAttribute("value", "" + Ye(r.value));
							break;
						case "select":
							(e.multiple = !!r.multiple),
								(o = r.value),
								o != null
									? Wn(e, !!r.multiple, o, !1)
									: r.defaultValue != null &&
									  Wn(e, !!r.multiple, r.defaultValue, !0);
							break;
						default:
							typeof l.onClick == "function" && (e.onclick = Or);
					}
					Zs(t, r) && (n.flags |= 4);
				}
				n.ref !== null && (n.flags |= 128);
			}
			return null;
		case 6:
			if (e && n.stateNode != null) wa(e, n, e.memoizedProps, r);
			else {
				if (typeof r != "string" && n.stateNode === null) throw Error(v(166));
				(t = fn(Qt.current)),
					fn(xe.current),
					cr(n)
						? ((r = n.stateNode),
						  (t = n.memoizedProps),
						  (r[Ue] = n),
						  r.nodeValue !== t && (n.flags |= 4))
						: ((r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
						  (r[Ue] = n),
						  (n.stateNode = r));
			}
			return null;
		case 13:
			return (
				F($),
				(r = n.memoizedState),
				(n.flags & 64) !== 0
					? ((n.lanes = t), n)
					: ((r = r !== null),
					  (t = !1),
					  e === null
							? n.memoizedProps.fallback !== void 0 && cr(n)
							: (t = e.memoizedState !== null),
					  r &&
							!t &&
							(n.mode & 2) !== 0 &&
							((e === null && n.memoizedProps.unstable_avoidThisFallback !== !0) ||
							($.current & 1) !== 0
								? X === 0 && (X = 3)
								: ((X === 0 || X === 3) && (X = 4),
								  re === null ||
										((Jt & 134217727) === 0 && (et & 134217727) === 0) ||
										Bn(re, ne))),
					  (r || t) && (n.flags |= 4),
					  null)
			);
		case 4:
			return Gn(), po(n), e === null && Vs(n.stateNode.containerInfo), null;
		case 10:
			return ri(n), null;
		case 17:
			return se(n.type) && Ir(), null;
		case 19:
			if ((F($), (r = n.memoizedState), r === null)) return null;
			if (((o = (n.flags & 64) !== 0), (i = r.rendering), i === null))
				if (o) ht(r, !1);
				else {
					if (X !== 0 || (e !== null && (e.flags & 64) !== 0))
						for (e = n.child; e !== null; ) {
							if (((i = $r(e)), i !== null)) {
								for (
									n.flags |= 64,
										ht(r, !1),
										o = i.updateQueue,
										o !== null && ((n.updateQueue = o), (n.flags |= 4)),
										r.lastEffect === null && (n.firstEffect = null),
										n.lastEffect = r.lastEffect,
										r = t,
										t = n.child;
									t !== null;

								)
									(o = t),
										(e = r),
										(o.flags &= 2),
										(o.nextEffect = null),
										(o.firstEffect = null),
										(o.lastEffect = null),
										(i = o.alternate),
										i === null
											? ((o.childLanes = 0),
											  (o.lanes = e),
											  (o.child = null),
											  (o.memoizedProps = null),
											  (o.memoizedState = null),
											  (o.updateQueue = null),
											  (o.dependencies = null),
											  (o.stateNode = null))
											: ((o.childLanes = i.childLanes),
											  (o.lanes = i.lanes),
											  (o.child = i.child),
											  (o.memoizedProps = i.memoizedProps),
											  (o.memoizedState = i.memoizedState),
											  (o.updateQueue = i.updateQueue),
											  (o.type = i.type),
											  (e = i.dependencies),
											  (o.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext
														  })),
										(t = t.sibling);
								return A($, ($.current & 1) | 2), n.child;
							}
							e = e.sibling;
						}
					r.tail !== null &&
						ee() > ko &&
						((n.flags |= 64), (o = !0), ht(r, !1), (n.lanes = 33554432));
				}
			else {
				if (!o)
					if (((e = $r(i)), e !== null)) {
						if (
							((n.flags |= 64),
							(o = !0),
							(t = e.updateQueue),
							t !== null && ((n.updateQueue = t), (n.flags |= 4)),
							ht(r, !0),
							r.tail === null && r.tailMode === "hidden" && !i.alternate && !Ce)
						)
							return (
								(n = n.lastEffect = r.lastEffect),
								n !== null && (n.nextEffect = null),
								null
							);
					} else
						2 * ee() - r.renderingStartTime > ko &&
							t !== 1073741824 &&
							((n.flags |= 64), (o = !0), ht(r, !1), (n.lanes = 33554432));
				r.isBackwards
					? ((i.sibling = n.child), (n.child = i))
					: ((t = r.last), t !== null ? (t.sibling = i) : (n.child = i), (r.last = i));
			}
			return r.tail !== null
				? ((t = r.tail),
				  (r.rendering = t),
				  (r.tail = t.sibling),
				  (r.lastEffect = n.lastEffect),
				  (r.renderingStartTime = ee()),
				  (t.sibling = null),
				  (n = $.current),
				  A($, o ? (n & 1) | 2 : n & 1),
				  t)
				: null;
		case 23:
		case 24:
			return (
				yi(),
				e !== null &&
					(e.memoizedState !== null) != (n.memoizedState !== null) &&
					r.mode !== "unstable-defer-without-hiding" &&
					(n.flags |= 4),
				null
			);
	}
	throw Error(v(156, n.tag));
}
function Mc(e) {
	switch (e.tag) {
		case 1:
			se(e.type) && Ir();
			var n = e.flags;
			return n & 4096 ? ((e.flags = (n & -4097) | 64), e) : null;
		case 3:
			if ((Gn(), F(ue), F(te), ii(), (n = e.flags), (n & 64) !== 0)) throw Error(v(285));
			return (e.flags = (n & -4097) | 64), e;
		case 5:
			return oi(e), null;
		case 13:
			return F($), (n = e.flags), n & 4096 ? ((e.flags = (n & -4097) | 64), e) : null;
		case 19:
			return F($), null;
		case 4:
			return Gn(), null;
		case 10:
			return ri(e), null;
		case 23:
		case 24:
			return yi(), null;
		default:
			return null;
	}
}
function di(e, n) {
	try {
		var t = "",
			r = n;
		do (t += cf(r)), (r = r.return);
		while (r);
		var l = t;
	} catch (o) {
		l =
			`
Error generating stack: ` +
			o.message +
			`
` +
			o.stack;
	}
	return { value: e, source: n, stack: l };
}
function ho(e, n) {
	try {
		console.error(n.value);
	} catch (t) {
		setTimeout(function () {
			throw t;
		});
	}
}
var Oc = typeof WeakMap == "function" ? WeakMap : Map;
function Sa(e, n, t) {
	(t = Ve(-1, t)), (t.tag = 3), (t.payload = { element: null });
	var r = n.value;
	return (
		(t.callback = function () {
			Zr || ((Zr = !0), (wo = r)), ho(e, n);
		}),
		t
	);
}
function Ea(e, n, t) {
	(t = Ve(-1, t)), (t.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var l = n.value;
		t.payload = function () {
			return ho(e, n), r(l);
		};
	}
	var o = e.stateNode;
	return (
		o !== null &&
			typeof o.componentDidCatch == "function" &&
			(t.callback = function () {
				typeof r != "function" &&
					(Le === null ? (Le = new Set([this])) : Le.add(this), ho(e, n));
				var i = n.stack;
				this.componentDidCatch(n.value, { componentStack: i !== null ? i : "" });
			}),
		t
	);
}
var zc = typeof WeakSet == "function" ? WeakSet : Set;
function Ou(e) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function")
			try {
				n(null);
			} catch (t) {
				Ge(e, t);
			}
		else n.current = null;
}
function Ic(e, n) {
	switch (n.tag) {
		case 0:
		case 11:
		case 15:
		case 22:
			return;
		case 1:
			if (n.flags & 256 && e !== null) {
				var t = e.memoizedProps,
					r = e.memoizedState;
				(e = n.stateNode),
					(n = e.getSnapshotBeforeUpdate(
						n.elementType === n.type ? t : ke(n.type, t),
						r
					)),
					(e.__reactInternalSnapshotBeforeUpdate = n);
			}
			return;
		case 3:
			n.flags & 256 && bo(n.stateNode.containerInfo);
			return;
		case 5:
		case 6:
		case 4:
		case 17:
			return;
	}
	throw Error(v(163));
}
function Rc(e, n, t) {
	switch (t.tag) {
		case 0:
		case 11:
		case 15:
		case 22:
			if (((n = t.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)) {
				e = n = n.next;
				do {
					if ((e.tag & 3) === 3) {
						var r = e.create;
						e.destroy = r();
					}
					e = e.next;
				} while (e !== n);
			}
			if (((n = t.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)) {
				e = n = n.next;
				do {
					var l = e;
					(r = l.next),
						(l = l.tag),
						(l & 4) !== 0 && (l & 1) !== 0 && (Ma(t, e), Hc(t, e)),
						(e = r);
				} while (e !== n);
			}
			return;
		case 1:
			(e = t.stateNode),
				t.flags & 4 &&
					(n === null
						? e.componentDidMount()
						: ((r =
								t.elementType === t.type
									? n.memoizedProps
									: ke(t.type, n.memoizedProps)),
						  e.componentDidUpdate(
								r,
								n.memoizedState,
								e.__reactInternalSnapshotBeforeUpdate
						  ))),
				(n = t.updateQueue),
				n !== null && pu(t, n, e);
			return;
		case 3:
			if (((n = t.updateQueue), n !== null)) {
				if (((e = null), t.child !== null))
					switch (t.child.tag) {
						case 5:
							e = t.child.stateNode;
							break;
						case 1:
							e = t.child.stateNode;
					}
				pu(t, n, e);
			}
			return;
		case 5:
			(e = t.stateNode),
				n === null && t.flags & 4 && Zs(t.type, t.memoizedProps) && e.focus();
			return;
		case 6:
			return;
		case 4:
			return;
		case 12:
			return;
		case 13:
			t.memoizedState === null &&
				((t = t.alternate),
				t !== null &&
					((t = t.memoizedState),
					t !== null && ((t = t.dehydrated), t !== null && Cs(t))));
			return;
		case 19:
		case 17:
		case 20:
		case 21:
		case 23:
		case 24:
			return;
	}
	throw Error(v(163));
}
function zu(e, n) {
	for (var t = e; ; ) {
		if (t.tag === 5) {
			var r = t.stateNode;
			if (n)
				(r = r.style),
					typeof r.setProperty == "function"
						? r.setProperty("display", "none", "important")
						: (r.display = "none");
			else {
				r = t.stateNode;
				var l = t.memoizedProps.style;
				(l = l != null && l.hasOwnProperty("display") ? l.display : null),
					(r.style.display = ms("display", l));
			}
		} else if (t.tag === 6) t.stateNode.nodeValue = n ? "" : t.memoizedProps;
		else if (
			((t.tag !== 23 && t.tag !== 24) || t.memoizedState === null || t === e) &&
			t.child !== null
		) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
}
function Iu(e, n) {
	if (dn && typeof dn.onCommitFiberUnmount == "function")
		try {
			dn.onCommitFiberUnmount(ei, n);
		} catch {}
	switch (n.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
		case 22:
			if (((e = n.updateQueue), e !== null && ((e = e.lastEffect), e !== null))) {
				var t = (e = e.next);
				do {
					var r = t,
						l = r.destroy;
					if (((r = r.tag), l !== void 0))
						if ((r & 4) !== 0) Ma(n, t);
						else {
							r = n;
							try {
								l();
							} catch (o) {
								Ge(r, o);
							}
						}
					t = t.next;
				} while (t !== e);
			}
			break;
		case 1:
			if ((Ou(n), (e = n.stateNode), typeof e.componentWillUnmount == "function"))
				try {
					(e.props = n.memoizedProps),
						(e.state = n.memoizedState),
						e.componentWillUnmount();
				} catch (o) {
					Ge(n, o);
				}
			break;
		case 5:
			Ou(n);
			break;
		case 4:
			_a(e, n);
	}
}
function Ru(e) {
	(e.alternate = null),
		(e.child = null),
		(e.dependencies = null),
		(e.firstEffect = null),
		(e.lastEffect = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.return = null),
		(e.updateQueue = null);
}
function Wu(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Du(e) {
	e: {
		for (var n = e.return; n !== null; ) {
			if (Wu(n)) break e;
			n = n.return;
		}
		throw Error(v(160));
	}
	var t = n;
	switch (((n = t.stateNode), t.tag)) {
		case 5:
			var r = !1;
			break;
		case 3:
			(n = n.containerInfo), (r = !0);
			break;
		case 4:
			(n = n.containerInfo), (r = !0);
			break;
		default:
			throw Error(v(161));
	}
	t.flags & 16 && (It(n, ""), (t.flags &= -17));
	e: n: for (t = e; ; ) {
		for (; t.sibling === null; ) {
			if (t.return === null || Wu(t.return)) {
				t = null;
				break e;
			}
			t = t.return;
		}
		for (
			t.sibling.return = t.return, t = t.sibling;
			t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

		) {
			if (t.flags & 2 || t.child === null || t.tag === 4) continue n;
			(t.child.return = t), (t = t.child);
		}
		if (!(t.flags & 2)) {
			t = t.stateNode;
			break e;
		}
	}
	r ? mo(e, t, n) : yo(e, t, n);
}
function mo(e, n, t) {
	var r = e.tag,
		l = r === 5 || r === 6;
	if (l)
		(e = l ? e.stateNode : e.stateNode.instance),
			n
				? t.nodeType === 8
					? t.parentNode.insertBefore(e, n)
					: t.insertBefore(e, n)
				: (t.nodeType === 8
						? ((n = t.parentNode), n.insertBefore(e, t))
						: ((n = t), n.appendChild(e)),
				  (t = t._reactRootContainer),
				  t != null || n.onclick !== null || (n.onclick = Or));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (mo(e, n, t), e = e.sibling; e !== null; ) mo(e, n, t), (e = e.sibling);
}
function yo(e, n, t) {
	var r = e.tag,
		l = r === 5 || r === 6;
	if (l)
		(e = l ? e.stateNode : e.stateNode.instance), n ? t.insertBefore(e, n) : t.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (yo(e, n, t), e = e.sibling; e !== null; ) yo(e, n, t), (e = e.sibling);
}
function _a(e, n) {
	for (var t = n, r = !1, l, o; ; ) {
		if (!r) {
			r = t.return;
			e: for (;;) {
				if (r === null) throw Error(v(160));
				switch (((l = r.stateNode), r.tag)) {
					case 5:
						o = !1;
						break e;
					case 3:
						(l = l.containerInfo), (o = !0);
						break e;
					case 4:
						(l = l.containerInfo), (o = !0);
						break e;
				}
				r = r.return;
			}
			r = !0;
		}
		if (t.tag === 5 || t.tag === 6) {
			e: for (var i = e, u = t, s = u; ; )
				if ((Iu(i, s), s.child !== null && s.tag !== 4))
					(s.child.return = s), (s = s.child);
				else {
					if (s === u) break e;
					for (; s.sibling === null; ) {
						if (s.return === null || s.return === u) break e;
						s = s.return;
					}
					(s.sibling.return = s.return), (s = s.sibling);
				}
			o
				? ((i = l),
				  (u = t.stateNode),
				  i.nodeType === 8 ? i.parentNode.removeChild(u) : i.removeChild(u))
				: l.removeChild(t.stateNode);
		} else if (t.tag === 4) {
			if (t.child !== null) {
				(l = t.stateNode.containerInfo), (o = !0), (t.child.return = t), (t = t.child);
				continue;
			}
		} else if ((Iu(e, t), t.child !== null)) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === n) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === n) return;
			(t = t.return), t.tag === 4 && (r = !1);
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
}
function Il(e, n) {
	switch (n.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
		case 22:
			var t = n.updateQueue;
			if (((t = t !== null ? t.lastEffect : null), t !== null)) {
				var r = (t = t.next);
				do
					(r.tag & 3) === 3 &&
						((e = r.destroy), (r.destroy = void 0), e !== void 0 && e()),
						(r = r.next);
				while (r !== t);
			}
			return;
		case 1:
			return;
		case 5:
			if (((t = n.stateNode), t != null)) {
				r = n.memoizedProps;
				var l = e !== null ? e.memoizedProps : r;
				e = n.type;
				var o = n.updateQueue;
				if (((n.updateQueue = null), o !== null)) {
					for (
						t[zr] = r,
							e === "input" && r.type === "radio" && r.name != null && cs(t, r),
							Zl(e, l),
							n = Zl(e, r),
							l = 0;
						l < o.length;
						l += 2
					) {
						var i = o[l],
							u = o[l + 1];
						i === "style"
							? ys(t, u)
							: i === "dangerouslySetInnerHTML"
							? hs(t, u)
							: i === "children"
							? It(t, u)
							: Oo(t, i, u, n);
					}
					switch (e) {
						case "input":
							$l(t, r);
							break;
						case "textarea":
							ds(t, r);
							break;
						case "select":
							(e = t._wrapperState.wasMultiple),
								(t._wrapperState.wasMultiple = !!r.multiple),
								(o = r.value),
								o != null
									? Wn(t, !!r.multiple, o, !1)
									: e !== !!r.multiple &&
									  (r.defaultValue != null
											? Wn(t, !!r.multiple, r.defaultValue, !0)
											: Wn(t, !!r.multiple, r.multiple ? [] : "", !1));
					}
				}
			}
			return;
		case 6:
			if (n.stateNode === null) throw Error(v(162));
			n.stateNode.nodeValue = n.memoizedProps;
			return;
		case 3:
			(t = n.stateNode), t.hydrate && ((t.hydrate = !1), Cs(t.containerInfo));
			return;
		case 12:
			return;
		case 13:
			n.memoizedState !== null && ((mi = ee()), zu(n.child, !0)), Fu(n);
			return;
		case 19:
			Fu(n);
			return;
		case 17:
			return;
		case 23:
		case 24:
			zu(n, n.memoizedState !== null);
			return;
	}
	throw Error(v(163));
}
function Fu(e) {
	var n = e.updateQueue;
	if (n !== null) {
		e.updateQueue = null;
		var t = e.stateNode;
		t === null && (t = e.stateNode = new zc()),
			n.forEach(function (r) {
				var l = Kc.bind(null, e, r);
				t.has(r) || (t.add(r), r.then(l, l));
			});
	}
}
function Wc(e, n) {
	return e !== null && ((e = e.memoizedState), e === null || e.dehydrated !== null)
		? ((n = n.memoizedState), n !== null && n.dehydrated === null)
		: !1;
}
var Dc = Math.ceil,
	Kr = vn.ReactCurrentDispatcher,
	pi = vn.ReactCurrentOwner,
	j = 0,
	re = null,
	V = null,
	ne = 0,
	mn = 0,
	vo = en(0),
	X = 0,
	il = null,
	bn = 0,
	Jt = 0,
	et = 0,
	hi = 0,
	go = null,
	mi = 0,
	ko = 1 / 0;
function nt() {
	ko = ee() + 500;
}
var S = null,
	Zr = !1,
	wo = null,
	Le = null,
	qe = !1,
	Tt = null,
	kt = 90,
	So = [],
	Eo = [],
	Oe = null,
	Mt = 0,
	_o = null,
	Er = -1,
	je = 0,
	_r = 0,
	Ot = null,
	Lr = !1;
function ae() {
	return (j & 48) !== 0 ? ee() : Er !== -1 ? Er : (Er = ee());
}
function Ke(e) {
	if (((e = e.mode), (e & 2) === 0)) return 1;
	if ((e & 4) === 0) return Zn() === 99 ? 1 : 2;
	if ((je === 0 && (je = bn), Lc.transition !== 0)) {
		_r !== 0 && (_r = go !== null ? go.pendingLanes : 0), (e = je);
		var n = 4186112 & ~_r;
		return (n &= -n), n === 0 && ((e = 4186112 & ~e), (n = e & -e), n === 0 && (n = 8192)), n;
	}
	return (
		(e = Zn()), (j & 4) !== 0 && e === 98 ? (e = Tr(12, je)) : ((e = Pf(e)), (e = Tr(e, je))), e
	);
}
function Ze(e, n, t) {
	if (50 < Mt) throw ((Mt = 0), (_o = null), Error(v(185)));
	if (((e = ul(e, n)), e === null)) return null;
	br(e, n, t), e === re && ((et |= n), X === 4 && Bn(e, ne));
	var r = Zn();
	n === 1
		? (j & 8) !== 0 && (j & 48) === 0
			? Lo(e)
			: (ye(e, t), j === 0 && (nt(), Pe()))
		: ((j & 4) === 0 ||
				(r !== 98 && r !== 99) ||
				(Oe === null ? (Oe = new Set([e])) : Oe.add(e)),
		  ye(e, t)),
		(go = e);
}
function ul(e, n) {
	e.lanes |= n;
	var t = e.alternate;
	for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
		(e.childLanes |= n),
			(t = e.alternate),
			t !== null && (t.childLanes |= n),
			(t = e),
			(e = e.return);
	return t.tag === 3 ? t.stateNode : null;
}
function ye(e, n) {
	for (
		var t = e.callbackNode,
			r = e.suspendedLanes,
			l = e.pingedLanes,
			o = e.expirationTimes,
			i = e.pendingLanes;
		0 < i;

	) {
		var u = 31 - Xe(i),
			s = 1 << u,
			d = o[u];
		if (d === -1) {
			if ((s & r) === 0 || (s & l) !== 0) {
				(d = n), Pn(s);
				var g = W;
				o[u] = 10 <= g ? d + 250 : 6 <= g ? d + 5e3 : -1;
			}
		} else d <= n && (e.expiredLanes |= s);
		i &= ~s;
	}
	if (((r = Ft(e, e === re ? ne : 0)), (n = W), r === 0))
		t !== null && (t !== jl && lo(t), (e.callbackNode = null), (e.callbackPriority = 0));
	else {
		if (t !== null) {
			if (e.callbackPriority === n) return;
			t !== jl && lo(t);
		}
		n === 15
			? ((t = Lo.bind(null, e)),
			  Ne === null ? ((Ne = [t]), (Sr = ni(ll, na))) : Ne.push(t),
			  (t = jl))
			: n === 14
			? (t = Bt(99, Lo.bind(null, e)))
			: ((t = Nf(n)), (t = Bt(t, La.bind(null, e)))),
			(e.callbackPriority = n),
			(e.callbackNode = t);
	}
}
function La(e) {
	if (((Er = -1), (_r = je = 0), (j & 48) !== 0)) throw Error(v(327));
	var n = e.callbackNode;
	if (nn() && e.callbackNode !== n) return null;
	var t = Ft(e, e === re ? ne : 0);
	if (t === 0) return null;
	var r = t,
		l = j;
	j |= 16;
	var o = Na();
	(re !== e || ne !== r) && (nt(), Hn(e, r));
	do
		try {
			$c();
			break;
		} catch (u) {
			Pa(e, u);
		}
	while (1);
	if (
		(ti(),
		(Kr.current = o),
		(j = l),
		V !== null ? (r = 0) : ((re = null), (ne = 0), (r = X)),
		(bn & et) !== 0)
	)
		Hn(e, 0);
	else if (r !== 0) {
		if (
			(r === 2 &&
				((j |= 64),
				e.hydrate && ((e.hydrate = !1), bo(e.containerInfo)),
				(t = zs(e)),
				t !== 0 && (r = wt(e, t))),
			r === 1)
		)
			throw ((n = il), Hn(e, 0), Bn(e, t), ye(e, ee()), n);
		switch (((e.finishedWork = e.current.alternate), (e.finishedLanes = t), r)) {
			case 0:
			case 1:
				throw Error(v(345));
			case 2:
				on(e);
				break;
			case 3:
				if ((Bn(e, t), (t & 62914560) === t && ((r = mi + 500 - ee()), 10 < r))) {
					if (Ft(e, 0) !== 0) break;
					if (((l = e.suspendedLanes), (l & t) !== t)) {
						ae(), (e.pingedLanes |= e.suspendedLanes & l);
						break;
					}
					e.timeoutHandle = ou(on.bind(null, e), r);
					break;
				}
				on(e);
				break;
			case 4:
				if ((Bn(e, t), (t & 4186112) === t)) break;
				for (r = e.eventTimes, l = -1; 0 < t; ) {
					var i = 31 - Xe(t);
					(o = 1 << i), (i = r[i]), i > l && (l = i), (t &= ~o);
				}
				if (
					((t = l),
					(t = ee() - t),
					(t =
						(120 > t
							? 120
							: 480 > t
							? 480
							: 1080 > t
							? 1080
							: 1920 > t
							? 1920
							: 3e3 > t
							? 3e3
							: 4320 > t
							? 4320
							: 1960 * Dc(t / 1960)) - t),
					10 < t)
				) {
					e.timeoutHandle = ou(on.bind(null, e), t);
					break;
				}
				on(e);
				break;
			case 5:
				on(e);
				break;
			default:
				throw Error(v(329));
		}
	}
	return ye(e, ee()), e.callbackNode === n ? La.bind(null, e) : null;
}
function Bn(e, n) {
	for (
		n &= ~hi, n &= ~et, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes;
		0 < n;

	) {
		var t = 31 - Xe(n),
			r = 1 << t;
		(e[t] = -1), (n &= ~r);
	}
}
function Lo(e) {
	if ((j & 48) !== 0) throw Error(v(327));
	if ((nn(), e === re && (e.expiredLanes & ne) !== 0)) {
		var n = ne,
			t = wt(e, n);
		(bn & et) !== 0 && ((n = Ft(e, n)), (t = wt(e, n)));
	} else (n = Ft(e, 0)), (t = wt(e, n));
	if (
		(e.tag !== 0 &&
			t === 2 &&
			((j |= 64),
			e.hydrate && ((e.hydrate = !1), bo(e.containerInfo)),
			(n = zs(e)),
			n !== 0 && (t = wt(e, n))),
		t === 1)
	)
		throw ((t = il), Hn(e, 0), Bn(e, n), ye(e, ee()), t);
	return (e.finishedWork = e.current.alternate), (e.finishedLanes = n), on(e), ye(e, ee()), null;
}
function Fc() {
	if (Oe !== null) {
		var e = Oe;
		(Oe = null),
			e.forEach(function (n) {
				(n.expiredLanes |= 24 & n.pendingLanes), ye(n, ee());
			});
	}
	Pe();
}
function xa(e, n) {
	var t = j;
	j |= 1;
	try {
		return e(n);
	} finally {
		(j = t), j === 0 && (nt(), Pe());
	}
}
function Ca(e, n) {
	var t = j;
	(j &= -2), (j |= 8);
	try {
		return e(n);
	} finally {
		(j = t), j === 0 && (nt(), Pe());
	}
}
function pr(e, n) {
	A(vo, mn), (mn |= n), (bn |= n);
}
function yi() {
	(mn = vo.current), F(vo);
}
function Hn(e, n) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var t = e.timeoutHandle;
	if ((t !== -1 && ((e.timeoutHandle = -1), gc(t)), V !== null))
		for (t = V.return; t !== null; ) {
			var r = t;
			switch (r.tag) {
				case 1:
					(r = r.type.childContextTypes), r != null && Ir();
					break;
				case 3:
					Gn(), F(ue), F(te), ii();
					break;
				case 5:
					oi(r);
					break;
				case 4:
					Gn();
					break;
				case 13:
					F($);
					break;
				case 19:
					F($);
					break;
				case 10:
					ri(r);
					break;
				case 23:
				case 24:
					yi();
			}
			t = t.return;
		}
	(re = e),
		(V = be(e.current, null)),
		(ne = mn = bn = n),
		(X = 0),
		(il = null),
		(hi = et = Jt = 0);
}
function Pa(e, n) {
	do {
		var t = V;
		try {
			if ((ti(), (Nt.current = Qr), Ar)) {
				for (var r = H.memoizedState; r !== null; ) {
					var l = r.queue;
					l !== null && (l.pending = null), (r = r.next);
				}
				Ar = !1;
			}
			if (
				((Kt = 0),
				(Y = b = H = null),
				(jt = !1),
				(pi.current = null),
				t === null || t.return === null)
			) {
				(X = 1), (il = n), (V = null);
				break;
			}
			e: {
				var o = e,
					i = t.return,
					u = t,
					s = n;
				if (
					((n = ne),
					(u.flags |= 2048),
					(u.firstEffect = u.lastEffect = null),
					s !== null && typeof s == "object" && typeof s.then == "function")
				) {
					var d = s;
					if ((u.mode & 2) === 0) {
						var g = u.alternate;
						g
							? ((u.updateQueue = g.updateQueue),
							  (u.memoizedState = g.memoizedState),
							  (u.lanes = g.lanes))
							: ((u.updateQueue = null), (u.memoizedState = null));
					}
					var C = ($.current & 1) !== 0,
						y = i;
					do {
						var E;
						if ((E = y.tag === 13)) {
							var L = y.memoizedState;
							if (L !== null) E = L.dehydrated !== null;
							else {
								var _ = y.memoizedProps;
								E =
									_.fallback === void 0
										? !1
										: _.unstable_avoidThisFallback !== !0
										? !0
										: !C;
							}
						}
						if (E) {
							var c = y.updateQueue;
							if (c === null) {
								var a = new Set();
								a.add(d), (y.updateQueue = a);
							} else c.add(d);
							if ((y.mode & 2) === 0) {
								if (
									((y.flags |= 64),
									(u.flags |= 16384),
									(u.flags &= -2981),
									u.tag === 1)
								)
									if (u.alternate === null) u.tag = 17;
									else {
										var f = Ve(-1, 1);
										(f.tag = 2), Qe(u, f);
									}
								u.lanes |= 1;
								break e;
							}
							(s = void 0), (u = n);
							var h = o.pingCache;
							if (
								(h === null
									? ((h = o.pingCache = new Oc()), (s = new Set()), h.set(d, s))
									: ((s = h.get(d)),
									  s === void 0 && ((s = new Set()), h.set(d, s))),
								!s.has(u))
							) {
								s.add(u);
								var m = Qc.bind(null, o, d, u);
								d.then(m, m);
							}
							(y.flags |= 4096), (y.lanes = n);
							break e;
						}
						y = y.return;
					} while (y !== null);
					s = Error(
						(Rn(u.type) || "A React component") +
							` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`
					);
				}
				X !== 5 && (X = 2), (s = di(s, u)), (y = i);
				do {
					switch (y.tag) {
						case 3:
							(o = s), (y.flags |= 4096), (n &= -n), (y.lanes |= n);
							var N = Sa(y, o, n);
							du(y, N);
							break e;
						case 1:
							o = s;
							var k = y.type,
								P = y.stateNode;
							if (
								(y.flags & 64) === 0 &&
								(typeof k.getDerivedStateFromError == "function" ||
									(P !== null &&
										typeof P.componentDidCatch == "function" &&
										(Le === null || !Le.has(P))))
							) {
								(y.flags |= 4096), (n &= -n), (y.lanes |= n);
								var M = Ea(y, o, n);
								du(y, M);
								break e;
							}
					}
					y = y.return;
				} while (y !== null);
			}
			Ta(t);
		} catch (x) {
			(n = x), V === t && t !== null && (V = t = t.return);
			continue;
		}
		break;
	} while (1);
}
function Na() {
	var e = Kr.current;
	return (Kr.current = Qr), e === null ? Qr : e;
}
function wt(e, n) {
	var t = j;
	j |= 16;
	var r = Na();
	(re === e && ne === n) || Hn(e, n);
	do
		try {
			Uc();
			break;
		} catch (l) {
			Pa(e, l);
		}
	while (1);
	if ((ti(), (j = t), (Kr.current = r), V !== null)) throw Error(v(261));
	return (re = null), (ne = 0), X;
}
function Uc() {
	for (; V !== null; ) ja(V);
}
function $c() {
	for (; V !== null && !Sc(); ) ja(V);
}
function ja(e) {
	var n = Oa(e.alternate, e, mn);
	(e.memoizedProps = e.pendingProps), n === null ? Ta(e) : (V = n), (pi.current = null);
}
function Ta(e) {
	var n = e;
	do {
		var t = n.alternate;
		if (((e = n.return), (n.flags & 2048) === 0)) {
			if (((t = Tc(t, n, mn)), t !== null)) {
				V = t;
				return;
			}
			if (
				((t = n),
				(t.tag !== 24 && t.tag !== 23) ||
					t.memoizedState === null ||
					(mn & 1073741824) !== 0 ||
					(t.mode & 4) === 0)
			) {
				for (var r = 0, l = t.child; l !== null; )
					(r |= l.lanes | l.childLanes), (l = l.sibling);
				t.childLanes = r;
			}
			e !== null &&
				(e.flags & 2048) === 0 &&
				(e.firstEffect === null && (e.firstEffect = n.firstEffect),
				n.lastEffect !== null &&
					(e.lastEffect !== null && (e.lastEffect.nextEffect = n.firstEffect),
					(e.lastEffect = n.lastEffect)),
				1 < n.flags &&
					(e.lastEffect !== null ? (e.lastEffect.nextEffect = n) : (e.firstEffect = n),
					(e.lastEffect = n)));
		} else {
			if (((t = Mc(n)), t !== null)) {
				(t.flags &= 2047), (V = t);
				return;
			}
			e !== null && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
		}
		if (((n = n.sibling), n !== null)) {
			V = n;
			return;
		}
		V = n = e;
	} while (n !== null);
	X === 0 && (X = 5);
}
function on(e) {
	var n = Zn();
	return hn(99, Ac.bind(null, e, n)), null;
}
function Ac(e, n) {
	do nn();
	while (Tt !== null);
	if ((j & 48) !== 0) throw Error(v(327));
	var t = e.finishedWork;
	if (t === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current)) throw Error(v(177));
	e.callbackNode = null;
	var r = t.lanes | t.childLanes,
		l = r,
		o = e.pendingLanes & ~l;
	(e.pendingLanes = l),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= l),
		(e.mutableReadLanes &= l),
		(e.entangledLanes &= l),
		(l = e.entanglements);
	for (var i = e.eventTimes, u = e.expirationTimes; 0 < o; ) {
		var s = 31 - Xe(o),
			d = 1 << s;
		(l[s] = 0), (i[s] = -1), (u[s] = -1), (o &= ~d);
	}
	if (
		(Oe !== null && (r & 24) === 0 && Oe.has(e) && Oe.delete(e),
		e === re && ((V = re = null), (ne = 0)),
		1 < t.flags
			? t.lastEffect !== null
				? ((t.lastEffect.nextEffect = t), (r = t.firstEffect))
				: (r = t)
			: (r = t.firstEffect),
		r !== null)
	) {
		if (((l = j), (j |= 32), (pi.current = null), (Cl = vr), (i = qi()), bl(i))) {
			if ("selectionStart" in i) u = { start: i.selectionStart, end: i.selectionEnd };
			else
				e: if (
					((u = ((u = i.ownerDocument) && u.defaultView) || window),
					(d = u.getSelection && u.getSelection()) && d.rangeCount !== 0)
				) {
					(u = d.anchorNode),
						(o = d.anchorOffset),
						(s = d.focusNode),
						(d = d.focusOffset);
					try {
						u.nodeType, s.nodeType;
					} catch {
						u = null;
						break e;
					}
					var g = 0,
						C = -1,
						y = -1,
						E = 0,
						L = 0,
						_ = i,
						c = null;
					n: for (;;) {
						for (
							var a;
							_ !== u || (o !== 0 && _.nodeType !== 3) || (C = g + o),
								_ !== s || (d !== 0 && _.nodeType !== 3) || (y = g + d),
								_.nodeType === 3 && (g += _.nodeValue.length),
								(a = _.firstChild) !== null;

						)
							(c = _), (_ = a);
						for (;;) {
							if (_ === i) break n;
							if (
								(c === u && ++E === o && (C = g),
								c === s && ++L === d && (y = g),
								(a = _.nextSibling) !== null)
							)
								break;
							(_ = c), (c = _.parentNode);
						}
						_ = a;
					}
					u = C === -1 || y === -1 ? null : { start: C, end: y };
				} else u = null;
			u = u || { start: 0, end: 0 };
		} else u = null;
		(Pl = { focusedElem: i, selectionRange: u }), (vr = !1), (Ot = null), (Lr = !1), (S = r);
		do
			try {
				Bc();
			} catch (x) {
				if (S === null) throw Error(v(330));
				Ge(S, x), (S = S.nextEffect);
			}
		while (S !== null);
		(Ot = null), (S = r);
		do
			try {
				for (i = e; S !== null; ) {
					var f = S.flags;
					if ((f & 16 && It(S.stateNode, ""), f & 128)) {
						var h = S.alternate;
						if (h !== null) {
							var m = h.ref;
							m !== null && (typeof m == "function" ? m(null) : (m.current = null));
						}
					}
					switch (f & 1038) {
						case 2:
							Du(S), (S.flags &= -3);
							break;
						case 6:
							Du(S), (S.flags &= -3), Il(S.alternate, S);
							break;
						case 1024:
							S.flags &= -1025;
							break;
						case 1028:
							(S.flags &= -1025), Il(S.alternate, S);
							break;
						case 4:
							Il(S.alternate, S);
							break;
						case 8:
							(u = S), _a(i, u);
							var N = u.alternate;
							Ru(u), N !== null && Ru(N);
					}
					S = S.nextEffect;
				}
			} catch (x) {
				if (S === null) throw Error(v(330));
				Ge(S, x), (S = S.nextEffect);
			}
		while (S !== null);
		if (
			((m = Pl),
			(h = qi()),
			(f = m.focusedElem),
			(i = m.selectionRange),
			h !== f && f && f.ownerDocument && As(f.ownerDocument.documentElement, f))
		) {
			for (
				i !== null &&
					bl(f) &&
					((h = i.start),
					(m = i.end),
					m === void 0 && (m = h),
					("selectionStart" in f)
						? ((f.selectionStart = h), (f.selectionEnd = Math.min(m, f.value.length)))
						: ((m = ((h = f.ownerDocument || document) && h.defaultView) || window),
						  m.getSelection &&
								((m = m.getSelection()),
								(u = f.textContent.length),
								(N = Math.min(i.start, u)),
								(i = i.end === void 0 ? N : Math.min(i.end, u)),
								!m.extend && N > i && ((u = i), (i = N), (N = u)),
								(u = Ji(f, N)),
								(o = Ji(f, i)),
								u &&
									o &&
									(m.rangeCount !== 1 ||
										m.anchorNode !== u.node ||
										m.anchorOffset !== u.offset ||
										m.focusNode !== o.node ||
										m.focusOffset !== o.offset) &&
									((h = h.createRange()),
									h.setStart(u.node, u.offset),
									m.removeAllRanges(),
									N > i
										? (m.addRange(h), m.extend(o.node, o.offset))
										: (h.setEnd(o.node, o.offset), m.addRange(h)))))),
					h = [],
					m = f;
				(m = m.parentNode);

			)
				m.nodeType === 1 && h.push({ element: m, left: m.scrollLeft, top: m.scrollTop });
			for (typeof f.focus == "function" && f.focus(), f = 0; f < h.length; f++)
				(m = h[f]), (m.element.scrollLeft = m.left), (m.element.scrollTop = m.top);
		}
		(vr = !!Cl), (Pl = Cl = null), (e.current = t), (S = r);
		do
			try {
				for (f = e; S !== null; ) {
					var k = S.flags;
					if ((k & 36 && Rc(f, S.alternate, S), k & 128)) {
						h = void 0;
						var P = S.ref;
						if (P !== null) {
							var M = S.stateNode;
							switch (S.tag) {
								case 5:
									h = M;
									break;
								default:
									h = M;
							}
							typeof P == "function" ? P(h) : (P.current = h);
						}
					}
					S = S.nextEffect;
				}
			} catch (x) {
				if (S === null) throw Error(v(330));
				Ge(S, x), (S = S.nextEffect);
			}
		while (S !== null);
		(S = null), _c(), (j = l);
	} else e.current = t;
	if (qe) (qe = !1), (Tt = e), (kt = n);
	else
		for (S = r; S !== null; )
			(n = S.nextEffect),
				(S.nextEffect = null),
				S.flags & 8 && ((k = S), (k.sibling = null), (k.stateNode = null)),
				(S = n);
	if (
		((r = e.pendingLanes),
		r === 0 && (Le = null),
		r === 1 ? (e === _o ? Mt++ : ((Mt = 0), (_o = e))) : (Mt = 0),
		(t = t.stateNode),
		dn && typeof dn.onCommitFiberRoot == "function")
	)
		try {
			dn.onCommitFiberRoot(ei, t, void 0, (t.current.flags & 64) === 64);
		} catch {}
	if ((ye(e, ee()), Zr)) throw ((Zr = !1), (e = wo), (wo = null), e);
	return (j & 8) !== 0 || Pe(), null;
}
function Bc() {
	for (; S !== null; ) {
		var e = S.alternate;
		Lr ||
			Ot === null ||
			((S.flags & 8) !== 0
				? Di(S, Ot) && (Lr = !0)
				: S.tag === 13 && Wc(e, S) && Di(S, Ot) && (Lr = !0));
		var n = S.flags;
		(n & 256) !== 0 && Ic(e, S),
			(n & 512) === 0 ||
				qe ||
				((qe = !0),
				Bt(97, function () {
					return nn(), null;
				})),
			(S = S.nextEffect);
	}
}
function nn() {
	if (kt !== 90) {
		var e = 97 < kt ? 97 : kt;
		return (kt = 90), hn(e, Vc);
	}
	return !1;
}
function Hc(e, n) {
	So.push(n, e),
		qe ||
			((qe = !0),
			Bt(97, function () {
				return nn(), null;
			}));
}
function Ma(e, n) {
	Eo.push(n, e),
		qe ||
			((qe = !0),
			Bt(97, function () {
				return nn(), null;
			}));
}
function Vc() {
	if (Tt === null) return !1;
	var e = Tt;
	if (((Tt = null), (j & 48) !== 0)) throw Error(v(331));
	var n = j;
	j |= 32;
	var t = Eo;
	Eo = [];
	for (var r = 0; r < t.length; r += 2) {
		var l = t[r],
			o = t[r + 1],
			i = l.destroy;
		if (((l.destroy = void 0), typeof i == "function"))
			try {
				i();
			} catch (s) {
				if (o === null) throw Error(v(330));
				Ge(o, s);
			}
	}
	for (t = So, So = [], r = 0; r < t.length; r += 2) {
		(l = t[r]), (o = t[r + 1]);
		try {
			var u = l.create;
			l.destroy = u();
		} catch (s) {
			if (o === null) throw Error(v(330));
			Ge(o, s);
		}
	}
	for (u = e.current.firstEffect; u !== null; )
		(e = u.nextEffect),
			(u.nextEffect = null),
			u.flags & 8 && ((u.sibling = null), (u.stateNode = null)),
			(u = e);
	return (j = n), Pe(), !0;
}
function Uu(e, n, t) {
	(n = di(t, n)),
		(n = Sa(e, n, 1)),
		Qe(e, n),
		(n = ae()),
		(e = ul(e, 1)),
		e !== null && (br(e, 1, n), ye(e, n));
}
function Ge(e, n) {
	if (e.tag === 3) Uu(e, e, n);
	else
		for (var t = e.return; t !== null; ) {
			if (t.tag === 3) {
				Uu(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == "function" ||
					(typeof r.componentDidCatch == "function" && (Le === null || !Le.has(r)))
				) {
					e = di(n, e);
					var l = Ea(t, e, 1);
					if ((Qe(t, l), (l = ae()), (t = ul(t, 1)), t !== null)) br(t, 1, l), ye(t, l);
					else if (
						typeof r.componentDidCatch == "function" &&
						(Le === null || !Le.has(r))
					)
						try {
							r.componentDidCatch(n, e);
						} catch {}
					break;
				}
			}
			t = t.return;
		}
}
function Qc(e, n, t) {
	var r = e.pingCache;
	r !== null && r.delete(n),
		(n = ae()),
		(e.pingedLanes |= e.suspendedLanes & t),
		re === e &&
			(ne & t) === t &&
			(X === 4 || (X === 3 && (ne & 62914560) === ne && 500 > ee() - mi)
				? Hn(e, 0)
				: (hi |= t)),
		ye(e, n);
}
function Kc(e, n) {
	var t = e.stateNode;
	t !== null && t.delete(n),
		(n = 0),
		n === 0 &&
			((n = e.mode),
			(n & 2) === 0
				? (n = 1)
				: (n & 4) === 0
				? (n = Zn() === 99 ? 1 : 2)
				: (je === 0 && (je = bn), (n = Nn(62914560 & ~je)), n === 0 && (n = 4194304))),
		(t = ae()),
		(e = ul(e, n)),
		e !== null && (br(e, n, t), ye(e, t));
}
var Oa;
Oa = function (e, n, t) {
	var r = n.lanes;
	if (e !== null)
		if (e.memoizedProps !== n.pendingProps || ue.current) we = !0;
		else if ((t & r) !== 0) we = (e.flags & 16384) !== 0;
		else {
			switch (((we = !1), n.tag)) {
				case 3:
					xu(n), Ml();
					break;
				case 5:
					yu(n);
					break;
				case 1:
					se(n.type) && wr(n);
					break;
				case 4:
					uo(n, n.stateNode.containerInfo);
					break;
				case 10:
					r = n.memoizedProps.value;
					var l = n.type._context;
					A(Rr, l._currentValue), (l._currentValue = r);
					break;
				case 13:
					if (n.memoizedState !== null)
						return (t & n.child.childLanes) !== 0
							? Cu(e, n, t)
							: (A($, $.current & 1),
							  (n = Me(e, n, t)),
							  n !== null ? n.sibling : null);
					A($, $.current & 1);
					break;
				case 19:
					if (((r = (t & n.childLanes) !== 0), (e.flags & 64) !== 0)) {
						if (r) return Mu(e, n, t);
						n.flags |= 64;
					}
					if (
						((l = n.memoizedState),
						l !== null &&
							((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
						A($, $.current),
						r)
					)
						break;
					return null;
				case 23:
				case 24:
					return (n.lanes = 0), Ol(e, n, t);
			}
			return Me(e, n, t);
		}
	else we = !1;
	switch (((n.lanes = 0), n.tag)) {
		case 2:
			if (
				((r = n.type),
				e !== null && ((e.alternate = null), (n.alternate = null), (n.flags |= 2)),
				(e = n.pendingProps),
				(l = Kn(n, te.current)),
				$n(n, t),
				(l = si(null, n, r, e, l, t)),
				(n.flags |= 1),
				typeof l == "object" &&
					l !== null &&
					typeof l.render == "function" &&
					l.$$typeof === void 0)
			) {
				if (((n.tag = 1), (n.memoizedState = null), (n.updateQueue = null), se(r))) {
					var o = !0;
					wr(n);
				} else o = !1;
				(n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null), li(n);
				var i = r.getDerivedStateFromProps;
				typeof i == "function" && Fr(n, r, i, e),
					(l.updater = ol),
					(n.stateNode = l),
					(l._reactInternals = n),
					io(n, r, e, t),
					(n = co(null, n, r, !0, o, t));
			} else (n.tag = 0), ie(null, n, l, t), (n = n.child);
			return n;
		case 16:
			l = n.elementType;
			e: {
				switch (
					(e !== null && ((e.alternate = null), (n.alternate = null), (n.flags |= 2)),
					(e = n.pendingProps),
					(o = l._init),
					(l = o(l._payload)),
					(n.type = l),
					(o = n.tag = Gc(l)),
					(e = ke(l, e)),
					o)
				) {
					case 0:
						n = fo(null, n, l, e, t);
						break e;
					case 1:
						n = Lu(null, n, l, e, t);
						break e;
					case 11:
						n = Eu(null, n, l, e, t);
						break e;
					case 14:
						n = _u(null, n, l, ke(l.type, e), r, t);
						break e;
				}
				throw Error(v(306, l, ""));
			}
			return n;
		case 0:
			return (
				(r = n.type),
				(l = n.pendingProps),
				(l = n.elementType === r ? l : ke(r, l)),
				fo(e, n, r, l, t)
			);
		case 1:
			return (
				(r = n.type),
				(l = n.pendingProps),
				(l = n.elementType === r ? l : ke(r, l)),
				Lu(e, n, r, l, t)
			);
		case 3:
			if ((xu(n), (r = n.updateQueue), e === null || r === null)) throw Error(v(282));
			if (
				((r = n.pendingProps),
				(l = n.memoizedState),
				(l = l !== null ? l.element : null),
				ra(e, n),
				Ht(n, r, null, t),
				(r = n.memoizedState.element),
				r === l)
			)
				Ml(), (n = Me(e, n, t));
			else {
				if (
					((l = n.stateNode),
					(o = l.hydrate) &&
						(($e = Un(n.stateNode.containerInfo.firstChild)), (Te = n), (o = Ce = !0)),
					o)
				) {
					if (((e = l.mutableSourceEagerHydrationData), e != null))
						for (l = 0; l < e.length; l += 2)
							(o = e[l]), (o._workInProgressVersionPrimary = e[l + 1]), An.push(o);
					for (t = ua(n, null, r, t), n.child = t; t; )
						(t.flags = (t.flags & -3) | 1024), (t = t.sibling);
				} else ie(e, n, r, t), Ml();
				n = n.child;
			}
			return n;
		case 5:
			return (
				yu(n),
				e === null && so(n),
				(r = n.type),
				(l = n.pendingProps),
				(o = e !== null ? e.memoizedProps : null),
				(i = l.children),
				to(r, l) ? (i = null) : o !== null && to(r, o) && (n.flags |= 16),
				va(e, n),
				ie(e, n, i, t),
				n.child
			);
		case 6:
			return e === null && so(n), null;
		case 13:
			return Cu(e, n, t);
		case 4:
			return (
				uo(n, n.stateNode.containerInfo),
				(r = n.pendingProps),
				e === null ? (n.child = Ur(n, null, r, t)) : ie(e, n, r, t),
				n.child
			);
		case 11:
			return (
				(r = n.type),
				(l = n.pendingProps),
				(l = n.elementType === r ? l : ke(r, l)),
				Eu(e, n, r, l, t)
			);
		case 7:
			return ie(e, n, n.pendingProps, t), n.child;
		case 8:
			return ie(e, n, n.pendingProps.children, t), n.child;
		case 12:
			return ie(e, n, n.pendingProps.children, t), n.child;
		case 10:
			e: {
				(r = n.type._context), (l = n.pendingProps), (i = n.memoizedProps), (o = l.value);
				var u = n.type._context;
				if ((A(Rr, u._currentValue), (u._currentValue = o), i !== null))
					if (
						((u = i.value),
						(o = de(u, o)
							? 0
							: (typeof r._calculateChangedBits == "function"
									? r._calculateChangedBits(u, o)
									: 1073741823) | 0),
						o === 0)
					) {
						if (i.children === l.children && !ue.current) {
							n = Me(e, n, t);
							break e;
						}
					} else
						for (u = n.child, u !== null && (u.return = n); u !== null; ) {
							var s = u.dependencies;
							if (s !== null) {
								i = u.child;
								for (var d = s.firstContext; d !== null; ) {
									if (d.context === r && (d.observedBits & o) !== 0) {
										u.tag === 1 &&
											((d = Ve(-1, t & -t)), (d.tag = 2), Qe(u, d)),
											(u.lanes |= t),
											(d = u.alternate),
											d !== null && (d.lanes |= t),
											ta(u.return, t),
											(s.lanes |= t);
										break;
									}
									d = d.next;
								}
							} else i = u.tag === 10 && u.type === n.type ? null : u.child;
							if (i !== null) i.return = u;
							else
								for (i = u; i !== null; ) {
									if (i === n) {
										i = null;
										break;
									}
									if (((u = i.sibling), u !== null)) {
										(u.return = i.return), (i = u);
										break;
									}
									i = i.return;
								}
							u = i;
						}
				ie(e, n, l.children, t), (n = n.child);
			}
			return n;
		case 9:
			return (
				(l = n.type),
				(o = n.pendingProps),
				(r = o.children),
				$n(n, t),
				(l = me(l, o.unstable_observedBits)),
				(r = r(l)),
				(n.flags |= 1),
				ie(e, n, r, t),
				n.child
			);
		case 14:
			return (
				(l = n.type), (o = ke(l, n.pendingProps)), (o = ke(l.type, o)), _u(e, n, l, o, r, t)
			);
		case 15:
			return ya(e, n, n.type, n.pendingProps, r, t);
		case 17:
			return (
				(r = n.type),
				(l = n.pendingProps),
				(l = n.elementType === r ? l : ke(r, l)),
				e !== null && ((e.alternate = null), (n.alternate = null), (n.flags |= 2)),
				(n.tag = 1),
				se(r) ? ((e = !0), wr(n)) : (e = !1),
				$n(n, t),
				oa(n, r, l),
				io(n, r, l, t),
				co(null, n, r, !0, e, t)
			);
		case 19:
			return Mu(e, n, t);
		case 23:
			return Ol(e, n, t);
		case 24:
			return Ol(e, n, t);
	}
	throw Error(v(156, n.tag));
};
function Zc(e, n, t, r) {
	(this.tag = e),
		(this.key = t),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = n),
		(this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
		(this.mode = r),
		(this.flags = 0),
		(this.lastEffect = this.firstEffect = this.nextEffect = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function pe(e, n, t, r) {
	return new Zc(e, n, t, r);
}
function vi(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Gc(e) {
	if (typeof e == "function") return vi(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === Xr)) return 11;
		if (e === Jr) return 14;
	}
	return 2;
}
function be(e, n) {
	var t = e.alternate;
	return (
		t === null
			? ((t = pe(e.tag, n, e.key, e.mode)),
			  (t.elementType = e.elementType),
			  (t.type = e.type),
			  (t.stateNode = e.stateNode),
			  (t.alternate = e),
			  (e.alternate = t))
			: ((t.pendingProps = n),
			  (t.type = e.type),
			  (t.flags = 0),
			  (t.nextEffect = null),
			  (t.firstEffect = null),
			  (t.lastEffect = null)),
		(t.childLanes = e.childLanes),
		(t.lanes = e.lanes),
		(t.child = e.child),
		(t.memoizedProps = e.memoizedProps),
		(t.memoizedState = e.memoizedState),
		(t.updateQueue = e.updateQueue),
		(n = e.dependencies),
		(t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
		(t.sibling = e.sibling),
		(t.index = e.index),
		(t.ref = e.ref),
		t
	);
}
function xr(e, n, t, r, l, o) {
	var i = 2;
	if (((r = e), typeof e == "function")) vi(e) && (i = 1);
	else if (typeof e == "string") i = 5;
	else
		e: switch (e) {
			case De:
				return Vn(t.children, l, o, n);
			case ss:
				(i = 8), (l |= 16);
				break;
			case zo:
				(i = 8), (l |= 1);
				break;
			case St:
				return (
					(e = pe(12, t, n, l | 8)), (e.elementType = St), (e.type = St), (e.lanes = o), e
				);
			case Et:
				return (e = pe(13, t, n, l)), (e.type = Et), (e.elementType = Et), (e.lanes = o), e;
			case Cr:
				return (e = pe(19, t, n, l)), (e.elementType = Cr), (e.lanes = o), e;
			case Uo:
				return gi(t, l, o, n);
			case Fl:
				return (e = pe(24, t, n, l)), (e.elementType = Fl), (e.lanes = o), e;
			default:
				if (typeof e == "object" && e !== null)
					switch (e.$$typeof) {
						case Io:
							i = 10;
							break e;
						case Ro:
							i = 9;
							break e;
						case Xr:
							i = 11;
							break e;
						case Jr:
							i = 14;
							break e;
						case Wo:
							(i = 16), (r = null);
							break e;
						case Do:
							i = 22;
							break e;
					}
				throw Error(v(130, e == null ? e : typeof e, ""));
		}
	return (n = pe(i, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = o), n;
}
function Vn(e, n, t, r) {
	return (e = pe(7, e, r, n)), (e.lanes = t), e;
}
function gi(e, n, t, r) {
	return (e = pe(23, e, r, n)), (e.elementType = Uo), (e.lanes = t), e;
}
function Rl(e, n, t) {
	return (e = pe(6, e, null, n)), (e.lanes = t), e;
}
function Wl(e, n, t) {
	return (
		(n = pe(4, e.children !== null ? e.children : [], e.key, n)),
		(n.lanes = t),
		(n.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}),
		n
	);
}
function Yc(e, n, t) {
	(this.tag = n),
		(this.containerInfo = e),
		(this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
		(this.timeoutHandle = -1),
		(this.pendingContext = this.context = null),
		(this.hydrate = t),
		(this.callbackNode = null),
		(this.callbackPriority = 0),
		(this.eventTimes = kl(0)),
		(this.expirationTimes = kl(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = kl(0)),
		(this.mutableSourceEagerHydrationData = null);
}
function Xc(e, n, t) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: un,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: n,
		implementation: t
	};
}
function Gr(e, n, t, r) {
	var l = n.current,
		o = ae(),
		i = Ke(l);
	e: if (t) {
		t = t._reactInternals;
		n: {
			if (gn(t) !== t || t.tag !== 1) throw Error(v(170));
			var u = t;
			do {
				switch (u.tag) {
					case 3:
						u = u.stateNode.context;
						break n;
					case 1:
						if (se(u.type)) {
							u = u.stateNode.__reactInternalMemoizedMergedChildContext;
							break n;
						}
				}
				u = u.return;
			} while (u !== null);
			throw Error(v(171));
		}
		if (t.tag === 1) {
			var s = t.type;
			if (se(s)) {
				t = Ys(t, s, u);
				break e;
			}
		}
		t = u;
	} else t = Je;
	return (
		n.context === null ? (n.context = t) : (n.pendingContext = t),
		(n = Ve(o, i)),
		(n.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (n.callback = r),
		Qe(l, n),
		Ze(l, i, o),
		i
	);
}
function Dl(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function $u(e, n) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var t = e.retryLane;
		e.retryLane = t !== 0 && t < n ? t : n;
	}
}
function ki(e, n) {
	$u(e, n), (e = e.alternate) && $u(e, n);
}
function Jc() {
	return null;
}
function wi(e, n, t) {
	var r = (t != null && t.hydrationOptions != null && t.hydrationOptions.mutableSources) || null;
	if (
		((t = new Yc(e, n, t != null && t.hydrate === !0)),
		(n = pe(3, null, null, n === 2 ? 7 : n === 1 ? 3 : 0)),
		(t.current = n),
		(n.stateNode = t),
		li(n),
		(e[qn] = t.current),
		Vs(e.nodeType === 8 ? e.parentNode : e),
		r)
	)
		for (e = 0; e < r.length; e++) {
			n = r[e];
			var l = n._getVersion;
			(l = l(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, l])
					: t.mutableSourceEagerHydrationData.push(n, l);
		}
	this._internalRoot = t;
}
wi.prototype.render = function (e) {
	Gr(e, this._internalRoot, null, null);
};
wi.prototype.unmount = function () {
	var e = this._internalRoot,
		n = e.containerInfo;
	Gr(null, e, null, function () {
		n[qn] = null;
	});
};
function qt(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
	);
}
function qc(e, n) {
	if (
		(n ||
			((n = e ? (e.nodeType === 9 ? e.documentElement : e.firstChild) : null),
			(n = !(!n || n.nodeType !== 1 || !n.hasAttribute("data-reactroot")))),
		!n)
	)
		for (var t; (t = e.lastChild); ) e.removeChild(t);
	return new wi(e, 0, n ? { hydrate: !0 } : void 0);
}
function sl(e, n, t, r, l) {
	var o = t._reactRootContainer;
	if (o) {
		var i = o._internalRoot;
		if (typeof l == "function") {
			var u = l;
			l = function () {
				var d = Dl(i);
				u.call(d);
			};
		}
		Gr(n, i, e, l);
	} else {
		if (
			((o = t._reactRootContainer = qc(t, r)), (i = o._internalRoot), typeof l == "function")
		) {
			var s = l;
			l = function () {
				var d = Dl(i);
				s.call(d);
			};
		}
		Ca(function () {
			Gr(n, i, e, l);
		});
	}
	return Dl(i);
}
_s = function (e) {
	if (e.tag === 13) {
		var n = ae();
		Ze(e, 4, n), ki(e, 4);
	}
};
Vo = function (e) {
	if (e.tag === 13) {
		var n = ae();
		Ze(e, 67108864, n), ki(e, 67108864);
	}
};
Ls = function (e) {
	if (e.tag === 13) {
		var n = ae(),
			t = Ke(e);
		Ze(e, t, n), ki(e, t);
	}
};
xs = function (e, n) {
	return n();
};
Gl = function (e, n, t) {
	switch (n) {
		case "input":
			if (($l(e, t), (n = t.name), t.type === "radio" && n != null)) {
				for (t = e; t.parentNode; ) t = t.parentNode;
				for (
					t = t.querySelectorAll(
						"input[name=" + JSON.stringify("" + n) + '][type="radio"]'
					),
						n = 0;
					n < t.length;
					n++
				) {
					var r = t[n];
					if (r !== e && r.form === e.form) {
						var l = rl(r);
						if (!l) throw Error(v(90));
						fs(r), $l(r, l);
					}
				}
			}
			break;
		case "textarea":
			ds(e, t);
			break;
		case "select":
			(n = t.value), n != null && Wn(e, !!t.multiple, n, !1);
	}
};
Ao = xa;
ks = function (e, n, t, r, l) {
	var o = j;
	j |= 4;
	try {
		return hn(98, e.bind(null, n, t, r, l));
	} finally {
		(j = o), j === 0 && (nt(), Pe());
	}
};
Bo = function () {
	(j & 49) === 0 && (Fc(), nn());
};
ws = function (e, n) {
	var t = j;
	j |= 2;
	try {
		return e(n);
	} finally {
		(j = t), j === 0 && (nt(), Pe());
	}
};
function za(e, n) {
	var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!qt(n)) throw Error(v(200));
	return Xc(e, n, null, t);
}
var bc = { Events: [Yt, On, rl, vs, gs, nn, { current: !1 }] },
	mt = {
		findFiberByHostInstance: an,
		bundleType: 0,
		version: "17.0.2",
		rendererPackageName: "react-dom"
	},
	ed = {
		bundleType: mt.bundleType,
		version: mt.version,
		rendererPackageName: mt.rendererPackageName,
		rendererConfig: mt.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: vn.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = Es(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: mt.findFiberByHostInstance || Jc,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
	var hr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!hr.isDisabled && hr.supportsFiber)
		try {
			(ei = hr.inject(ed)), (dn = hr);
		} catch {}
}
ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bc;
ve.createPortal = za;
ve.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var n = e._reactInternals;
	if (n === void 0)
		throw typeof e.render == "function" ? Error(v(188)) : Error(v(268, Object.keys(e)));
	return (e = Es(n)), (e = e === null ? null : e.stateNode), e;
};
ve.flushSync = function (e, n) {
	var t = j;
	if ((t & 48) !== 0) return e(n);
	j |= 1;
	try {
		if (e) return hn(99, e.bind(null, n));
	} finally {
		(j = t), Pe();
	}
};
ve.hydrate = function (e, n, t) {
	if (!qt(n)) throw Error(v(200));
	return sl(null, e, n, !0, t);
};
ve.render = function (e, n, t) {
	if (!qt(n)) throw Error(v(200));
	return sl(null, e, n, !1, t);
};
ve.unmountComponentAtNode = function (e) {
	if (!qt(e)) throw Error(v(40));
	return e._reactRootContainer
		? (Ca(function () {
				sl(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[qn] = null);
				});
		  }),
		  !0)
		: !1;
};
ve.unstable_batchedUpdates = xa;
ve.unstable_createPortal = function (e, n) {
	return za(e, n, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
ve.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
	if (!qt(t)) throw Error(v(200));
	if (e == null || e._reactInternals === void 0) throw Error(v(38));
	return sl(e, n, t, !1, r);
};
ve.version = "17.0.2";
function Ia() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ia);
		} catch (e) {
			console.error(e);
		}
}
Ia(), (ls.exports = ve);
var nd = ls.exports;
var Ra = Se.exports.createContext({
		color: "currentColor",
		size: "1em",
		weight: "regular",
		mirrored: !1
	}),
	bt = function (n, t, r) {
		var l = r.get(n);
		return l
			? l(t)
			: (console.error(
					'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
			  ),
			  null);
	};
function Au(e, n) {
	if (e == null) return {};
	var t = {},
		r = Object.keys(e),
		l,
		o;
	for (o = 0; o < r.length; o++) (l = r[o]), !(n.indexOf(l) >= 0) && (t[l] = e[l]);
	return t;
}
var al = { exports: {} },
	er = {};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var td = Se.exports,
	Wa = 60103;
er.Fragment = 60107;
if (typeof Symbol == "function" && Symbol.for) {
	var Bu = Symbol.for;
	(Wa = Bu("react.element")), (er.Fragment = Bu("react.fragment"));
}
var rd = td.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	ld = Object.prototype.hasOwnProperty,
	od = { key: !0, ref: !0, __self: !0, __source: !0 };
function Da(e, n, t) {
	var r,
		l = {},
		o = null,
		i = null;
	t !== void 0 && (o = "" + t),
		n.key !== void 0 && (o = "" + n.key),
		n.ref !== void 0 && (i = n.ref);
	for (r in n) ld.call(n, r) && !od.hasOwnProperty(r) && (l[r] = n[r]);
	if (e && e.defaultProps) for (r in ((n = e.defaultProps), n)) l[r] === void 0 && (l[r] = n[r]);
	return { $$typeof: Wa, type: e, key: o, ref: i, props: l, _owner: rd.current };
}
er.jsx = Da;
er.jsxs = Da;
al.exports = er;
const p = al.exports.jsx,
	O = al.exports.jsxs,
	R = al.exports.Fragment;
var Fa = Se.exports.forwardRef(function (e, n) {
	var t = e.alt,
		r = e.color,
		l = e.size,
		o = e.weight,
		i = e.mirrored,
		u = e.children,
		s = e.renderPath,
		d = Au(e, ["alt", "color", "size", "weight", "mirrored", "children", "renderPath"]),
		g = Se.exports.useContext(Ra),
		C = g.color,
		y = C === void 0 ? "currentColor" : C,
		E = g.size,
		L = g.weight,
		_ = L === void 0 ? "regular" : L,
		c = g.mirrored,
		a = c === void 0 ? !1 : c,
		f = Au(g, ["color", "size", "weight", "mirrored"]);
	return O(
		"svg",
		_i(
			Re(
				{},
				Object.assign(
					{
						ref: n,
						xmlns: "http://www.w3.org/2000/svg",
						width: l != null ? l : E,
						height: l != null ? l : E,
						fill: r != null ? r : y,
						viewBox: "0 0 256 256",
						transform: i || a ? "scale(-1, 1)" : void 0
					},
					f,
					d
				)
			),
			{
				children: [
					!!t && p("title", { children: t }),
					u,
					p("rect", { width: "256", height: "256", fill: "none" }),
					s(o != null ? o : _, r != null ? r : y)
				]
			}
		)
	);
});
Fa.displayName = "IconBase";
var nr = Fa,
	wn = new Map();
wn.set("bold", function (e) {
	return p(R, {
		children: p("path", {
			d: "M209.5,80.4,175.9,112l32,88-24,24-47.8-70-24.2,22v24l-24,24L73.7,182.1,31.9,168l24-24h24l24-24-72-48,24-24,88,32,31.7-33.5-.7.5a24,24,0,0,1,34,34Z",
			fill: "none",
			stroke: e,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: "24"
		})
	});
});
wn.set("duotone", function (e) {
	return O(R, {
		children: [
			p("path", {
				d: "M209.5,80.4,175.9,112l32,88-24,24-47.8-70-24.2,22v24l-24,24L73.7,182.1,31.9,168l24-24h24l24-24-72-48,24-24,88,32,31.7-33.5-.7.5a24,24,0,0,1,34,34Z",
				opacity: "0.2"
			}),
			p("path", {
				d: "M209.5,80.4,175.9,112l32,88-24,24-47.8-70-24.2,22v24l-24,24L73.7,182.1,31.9,168l24-24h24l24-24-72-48,24-24,88,32,31.7-33.5-.7.5a24,24,0,0,1,34,34Z",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "16"
			})
		]
	});
});
wn.set("fill", function () {
	return p(R, {
		children: p("path", {
			d: "M215,86.2l-29.8,28,30.2,83.1a8,8,0,0,1-1.9,8.4l-24,24a8.2,8.2,0,0,1-6.4,2.3,8.1,8.1,0,0,1-5.8-3.5l-42.6-62.3-18.8,17.3V204a8.2,8.2,0,0,1-2.4,5.7l-20,20a7.9,7.9,0,0,1-5.6,2.3l-1.8-.2a8,8,0,0,1-5.8-5.2L67.4,188.5,29.3,175.6a8,8,0,0,1-5.2-5.8,8.3,8.3,0,0,1,2.1-7.5l20-20a8.1,8.1,0,0,1,5.7-2.3H72.6l18.7-18.8L27.4,78.7a8.7,8.7,0,0,1-3.5-5.9,8.2,8.2,0,0,1,2.3-6.5l24-24a7.9,7.9,0,0,1,8.4-1.8l83.1,30.2,26.6-28.2a5.2,5.2,0,0,1,1-1.1,32,32,0,0,1,47,43.3A6.4,6.4,0,0,1,215,86.2Z"
		})
	});
});
wn.set("light", function (e) {
	return p(R, {
		children: p("path", {
			d: "M209.5,80.4,175.9,112l32,88-24,24-47.8-70-24.2,22v24l-24,24L73.7,182.1,31.9,168l24-24h24l24-24-72-48,24-24,88,32,31.7-33.5-.7.5a24,24,0,0,1,34,34Z",
			fill: "none",
			stroke: e,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: "12"
		})
	});
});
wn.set("thin", function (e) {
	return p(R, {
		children: p("path", {
			d: "M209.5,80.4,175.9,112l32,88-24,24-47.8-70-24.2,22v24l-24,24L73.7,182.1,31.9,168l24-24h24l24-24-72-48,24-24,88,32,31.7-33.5-.7.5a24,24,0,0,1,34,34Z",
			fill: "none",
			stroke: e,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: "8"
		})
	});
});
wn.set("regular", function (e) {
	return p(R, {
		children: p("path", {
			d: "M209.5,80.4,175.9,112l32,88-24,24-47.8-70-24.2,22v24l-24,24L73.7,182.1,31.9,168l24-24h24l24-24-72-48,24-24,88,32,31.7-33.5-.7.5a24,24,0,0,1,34,34Z",
			fill: "none",
			stroke: e,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			strokeWidth: "16"
		})
	});
});
var id = function (n, t) {
		return bt(n, t, wn);
	},
	Ua = Se.exports.forwardRef(function (e, n) {
		return p(nr, Re({}, Object.assign({ ref: n }, e, { renderPath: id })));
	});
Ua.displayName = "AirplaneTilt";
var ud = Ua,
	Sn = new Map();
Sn.set("bold", function (e) {
	return O(R, {
		children: [
			p("circle", {
				cx: "128",
				cy: "128",
				r: "96",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "24"
			}),
			p("path", {
				d: "M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "24"
			}),
			p("path", {
				d: "M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "24"
			}),
			p("path", {
				d: "M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "24"
			})
		]
	});
});
Sn.set("duotone", function (e) {
	return O(R, {
		children: [
			p("path", {
				d: "M130.2,224a96.3,96.3,0,0,0,84-53.6h0L159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224Z",
				opacity: "0.2"
			}),
			p("path", {
				d: "M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1l5.4,1.1,8.3-19.7a8.1,8.1,0,0,1,7.4-4.9h21.4a8.6,8.6,0,0,0,3.8-1l12.3-6.8a7.2,7.2,0,0,0,1.5-1.1l26.9-24.3a8.1,8.1,0,0,0,1.6-9.8l-9.3-16.8h0A98.5,98.5,0,0,0,128,32,95.4,95.4,0,0,0,65,55.6Z",
				opacity: "0.2"
			}),
			p("circle", {
				cx: "128",
				cy: "128",
				r: "96",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "16"
			}),
			p("path", {
				d: "M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "16"
			}),
			p("path", {
				d: "M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "16"
			}),
			p("path", {
				d: "M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "16"
			})
		]
	});
});
Sn.set("fill", function () {
	return p(R, {
		children: p("path", {
			d: "M221.6,173.3A102.9,102.9,0,0,0,232,128,104.2,104.2,0,0,0,154.8,27.5h-.5A103.8,103.8,0,0,0,60.4,49l-1.3,1.2A103.9,103.9,0,0,0,128,232h2.4A104.3,104.3,0,0,0,221,174.6h0ZM216,128a89.3,89.3,0,0,1-5.5,30.7l-46.4-28.5a16,16,0,0,0-6.3-2.3l-22.8-3a16.1,16.1,0,0,0-15.3,6.8h-8.6l-3.8-7.9a16.2,16.2,0,0,0-11-8.7l-6.6-1.4,2.5-5.9a8.1,8.1,0,0,1,7.4-4.9h16.1a16.1,16.1,0,0,0,7.7-2l12.2-6.8a16.1,16.1,0,0,0,3-2.1l26.9-24.4A15.7,15.7,0,0,0,170,50.7,88,88,0,0,1,216,128ZM40,128a87.1,87.1,0,0,1,9.5-39.7l10.4,27.9a16.1,16.1,0,0,0,11.6,10l5.5,1.2h.1l12,2.6a7.8,7.8,0,0,1,5.5,4.3l2.1,4.4a16.1,16.1,0,0,0,14.4,9h1.2l-7.7,17.2a15.9,15.9,0,0,0,2.8,17.4l16.1,17.4a8.3,8.3,0,0,1,2,6.9l-1.8,9.3A88.1,88.1,0,0,1,40,128Z"
		})
	});
});
Sn.set("light", function (e) {
	return O(R, {
		children: [
			p("circle", {
				cx: "128",
				cy: "128",
				r: "96",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "12"
			}),
			p("path", {
				d: "M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "12"
			}),
			p("path", {
				d: "M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "12"
			}),
			p("path", {
				d: "M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "12"
			})
		]
	});
});
Sn.set("thin", function (e) {
	return O(R, {
		children: [
			p("circle", {
				cx: "128",
				cy: "128",
				r: "96",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "8"
			}),
			p("path", {
				d: "M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "8"
			}),
			p("path", {
				d: "M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "8"
			}),
			p("path", {
				d: "M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "8"
			})
		]
	});
});
Sn.set("regular", function (e) {
	return O(R, {
		children: [
			p("circle", {
				cx: "128",
				cy: "128",
				r: "96",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "16"
			}),
			p("path", {
				d: "M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "16"
			}),
			p("path", {
				d: "M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "16"
			}),
			p("path", {
				d: "M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "16"
			})
		]
	});
});
var sd = function (n, t) {
		return bt(n, t, Sn);
	},
	$a = Se.exports.forwardRef(function (e, n) {
		return p(nr, Re({}, Object.assign({ ref: n }, e, { renderPath: sd })));
	});
$a.displayName = "GlobeHemisphereWest";
var ad = $a,
	En = new Map();
En.set("bold", function (e) {
	return O(R, {
		children: [
			p("circle", {
				cx: "128",
				cy: "128",
				r: "96",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "24"
			}),
			p("polyline", {
				points: "120 124 128 124 128 176 136 176",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "24"
			}),
			p("circle", { cx: "126", cy: "84", r: "16" })
		]
	});
});
En.set("duotone", function (e) {
	return O(R, {
		children: [
			p("circle", { cx: "128", cy: "128", r: "96", opacity: "0.2" }),
			p("circle", {
				cx: "128",
				cy: "128",
				r: "96",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "16"
			}),
			p("polyline", {
				points: "120 120 128 120 128 176 136 176",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "16"
			}),
			p("circle", { cx: "126", cy: "84", r: "12" })
		]
	});
});
En.set("fill", function () {
	return p(R, {
		children: p("path", {
			d: "M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm-2,48a12,12,0,1,1-12,12A12,12,0,0,1,126,72Zm10,112h-8a8,8,0,0,1-8-8V128a8,8,0,0,1,0-16h8a8,8,0,0,1,8,8v48a8,8,0,0,1,0,16Z"
		})
	});
});
En.set("light", function (e) {
	return O(R, {
		children: [
			p("circle", {
				cx: "128",
				cy: "128",
				r: "96",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "12"
			}),
			p("polyline", {
				points: "120 120 128 120 128 176 136 176",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "12"
			}),
			p("circle", { cx: "126", cy: "84", r: "10" })
		]
	});
});
En.set("thin", function (e) {
	return O(R, {
		children: [
			p("circle", {
				cx: "128",
				cy: "128",
				r: "96",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "8"
			}),
			p("polyline", {
				points: "120 120 128 120 128 176 136 176",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "8"
			}),
			p("circle", { cx: "126", cy: "84", r: "8" })
		]
	});
});
En.set("regular", function (e) {
	return O(R, {
		children: [
			p("circle", {
				cx: "128",
				cy: "128",
				r: "96",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "16"
			}),
			p("polyline", {
				points: "120 120 128 120 128 176 136 176",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "16"
			}),
			p("circle", { cx: "126", cy: "84", r: "12" })
		]
	});
});
var fd = function (n, t) {
		return bt(n, t, En);
	},
	Aa = Se.exports.forwardRef(function (e, n) {
		return p(nr, Re({}, Object.assign({ ref: n }, e, { renderPath: fd })));
	});
Aa.displayName = "Info";
var cd = Aa,
	_n = new Map();
_n.set("bold", function (e) {
	return O(R, {
		children: [
			p("line", {
				x1: "56",
				y1: "232",
				x2: "200",
				y2: "232",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "24"
			}),
			p("circle", {
				cx: "128",
				cy: "104",
				r: "32",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "24"
			}),
			p("path", {
				d: "M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "24"
			})
		]
	});
});
_n.set("duotone", function (e) {
	return O(R, {
		children: [
			p("path", {
				d: "M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z",
				opacity: "0.2"
			}),
			p("line", {
				x1: "56",
				y1: "232",
				x2: "200",
				y2: "232",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "16"
			}),
			p("circle", {
				cx: "128",
				cy: "104",
				r: "32",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "16"
			}),
			p("path", {
				d: "M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "16"
			})
		]
	});
});
_n.set("fill", function () {
	return p(R, {
		children: p("path", {
			d: "M200,224H150.5A253.6,253.6,0,0,0,174,200.2c27.5-31.5,42-64.8,42-96.2a88,88,0,0,0-176,0c0,31.4,14.5,64.7,42,96.2A253.6,253.6,0,0,0,105.5,224H56a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16ZM128,72a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"
		})
	});
});
_n.set("light", function (e) {
	return O(R, {
		children: [
			p("line", {
				x1: "56",
				y1: "232",
				x2: "200",
				y2: "232",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "12"
			}),
			p("circle", {
				cx: "128",
				cy: "104",
				r: "32",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "12"
			}),
			p("path", {
				d: "M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "12"
			})
		]
	});
});
_n.set("thin", function (e) {
	return O(R, {
		children: [
			p("line", {
				x1: "56",
				y1: "232",
				x2: "200",
				y2: "232",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "8"
			}),
			p("circle", {
				cx: "128",
				cy: "104",
				r: "32",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "8"
			}),
			p("path", {
				d: "M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "8"
			})
		]
	});
});
_n.set("regular", function (e) {
	return O(R, {
		children: [
			p("line", {
				x1: "56",
				y1: "232",
				x2: "200",
				y2: "232",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "16"
			}),
			p("circle", {
				cx: "128",
				cy: "104",
				r: "32",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "16"
			}),
			p("path", {
				d: "M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "16"
			})
		]
	});
});
var dd = function (n, t) {
		return bt(n, t, _n);
	},
	Ba = Se.exports.forwardRef(function (e, n) {
		return p(nr, Re({}, Object.assign({ ref: n }, e, { renderPath: dd })));
	});
Ba.displayName = "MapPinLine";
var Hu = Ba,
	Ln = new Map();
Ln.set("bold", function (e) {
	return O(R, {
		children: [
			p("polyline", {
				points: "96 184 32 200 32 56 96 40",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "24"
			}),
			p("polygon", {
				points: "160 216 96 184 96 40 160 72 160 216",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "24"
			}),
			p("polyline", {
				points: "160 72 224 56 224 200 160 216",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "24"
			})
		]
	});
});
Ln.set("duotone", function (e) {
	return O(R, {
		children: [
			p("polygon", { points: "160 216 96 184 96 40 160 72 160 216", opacity: "0.2" }),
			p("polyline", {
				points: "96 184 32 200 32 56 96 40",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "16"
			}),
			p("polygon", {
				points: "160 216 96 184 96 40 160 72 160 216",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "16"
			}),
			p("polyline", {
				points: "160 72 224 56 224 200 160 216",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "16"
			})
		]
	});
});
Ln.set("fill", function () {
	return p(R, {
		children: p("path", {
			d: "M228.9,49.7a8,8,0,0,0-6.8-1.5L160.9,63.5,99.6,32.8h-.1l-.8-.3h-.2l-.7-.2h-.3l-.7-.2H94.1l-64,16A8,8,0,0,0,24,56V200a7.8,7.8,0,0,0,3.1,6.3A7.9,7.9,0,0,0,32,208l1.9-.2,61.2-15.3,61.3,30.7h.1l.7.3h.1l.8.3h3.8l64-16A8,8,0,0,0,232,200V56A7.8,7.8,0,0,0,228.9,49.7ZM152,203.1l-48-24V52.9l48,24Z"
		})
	});
});
Ln.set("light", function (e) {
	return O(R, {
		children: [
			p("polyline", {
				points: "96 184 32 200 32 56 96 40",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "12"
			}),
			p("polygon", {
				points: "160 216 96 184 96 40 160 72 160 216",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "12"
			}),
			p("polyline", {
				points: "160 72 224 56 224 200 160 216",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "12"
			})
		]
	});
});
Ln.set("thin", function (e) {
	return O(R, {
		children: [
			p("polyline", {
				points: "96 184 32 200 32 56 96 40",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "8"
			}),
			p("polygon", {
				points: "160 216 96 184 96 40 160 72 160 216",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "8"
			}),
			p("polyline", {
				points: "160 72 224 56 224 200 160 216",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "8"
			})
		]
	});
});
Ln.set("regular", function (e) {
	return O(R, {
		children: [
			p("polyline", {
				points: "96 184 32 200 32 56 96 40",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "16"
			}),
			p("polygon", {
				points: "160 216 96 184 96 40 160 72 160 216",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "16"
			}),
			p("polyline", {
				points: "160 72 224 56 224 200 160 216",
				fill: "none",
				stroke: e,
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "16"
			})
		]
	});
});
var pd = function (n, t) {
		return bt(n, t, Ln);
	},
	Ha = Se.exports.forwardRef(function (e, n) {
		return p(nr, Re({}, Object.assign({ ref: n }, e, { renderPath: pd })));
	});
Ha.displayName = "MapTrifold";
var hd = Ha;
const md = () =>
		O("header", {
			className: "header",
			children: [
				p(ad, { size: 32, color: "var(--darker-white)", weight: "duotone" }),
				p("h1", { className: "header__title", children: "Travel Plans" })
			]
		}),
	yd = (e) =>
		p("section", {
			className: "places__item",
			children: O(Ra.Provider, {
				value: { size: 24, color: "var(--primary)", weight: "duotone" },
				children: [
					O("div", {
						className: "places__image",
						children: [
							p("img", { src: `./src/imgs/${e.image}`, alt: e.city }),
							p("div", {
								className: "places__image__location--desktop",
								children: O("div", {
									className: "places__extraInfo__span-items",
									children: [
										p(Hu, {}),
										O("p", {
											children: [
												e.city,
												", ",
												e.country,
												p("a", {
													href: e.googleMapsUrl,
													target: "_blank",
													rel: "noopener noreferrer",
													children: "Google Maps"
												})
											]
										})
									]
								})
							})
						]
					}),
					O("div", {
						className: "places__textContent",
						children: [
							p("h2", { children: e.city }),
							p("p", { children: e.description }),
							p("div", {
								className: "places__extraInfo",
								children: O("div", {
									className: "places__extraInfo__span-items",
									children: [
										p(hd, {}),
										O("p", {
											children: [
												p("b", { children: "Go to:" }),
												" ",
												p("span", {
													children: e.pointsOfInterest.join(", ")
												})
											]
										})
									]
								})
							}),
							p("div", {
								className: "places__extraInfo--mobile",
								children: O("div", {
									className: "places__extraInfo__span-items",
									children: [
										p(Hu, {}),
										O("p", {
											children: [
												e.city,
												", ",
												e.country,
												p("a", {
													href: e.googleMapsUrl,
													target: "_blank",
													rel: "noopener noreferrer",
													children: "Google Maps"
												})
											]
										})
									]
								})
							}),
							O("div", {
								className: "places__extraInfo",
								children: [
									O("div", {
										className: "places__extraInfo__normal-items",
										children: [
											p(cd, {}),
											O("p", {
												children: [
													p("b", { children: "Info:" }),
													p("a", {
														href: e.japanGuide,
														target: "_blank",
														rel: "noopener noreferrer",
														children: "Japan Guide"
													})
												]
											})
										]
									}),
									O("div", {
										className: "places__extraInfo__span-items",
										children: [
											p(ud, {}),
											O("p", {
												children: [
													p("b", { children: "Itinerary:" }),
													p("a", {
														href: e.nerdNomads,
														target: "_blank",
														rel: "noopener noreferrer",
														children: "NerdNomads"
													})
												]
											})
										]
									})
								]
							})
						]
					})
				]
			})
		});
var vd = [
	{
		id: 1,
		city: "Himeji",
		country: "Japan",
		description: `Himeji (\u59EB\u8DEF) is most famous for its magnificent castle, Himeji Castle, widely considered to be Japan's most beautiful surviving feudal castle. The castle is designated both a national treasure and a UNESCO world heritage site. 
            
        With half a million inhabitants, Himeji is the second largest city of Hyogo Prefecture after Kobe.It can be reached in less than one hour from Osaka or Kyoto and is also a popular stopover on journeys along the Sanyo Shinkansen.`,
		image: "himeji_small.jpg",
		googleMapsUrl: "https://www.google.com/maps/place/Himeji,+",
		pointsOfInterest: ["Himeji Castle"],
		nerdNomads: "https://nerdnomads.com/himeji-castle",
		japanGuide: "https://www.japan-guide.com/e/e3500.html"
	},
	{
		id: 2,
		city: "Tokyo",
		country: "Japan",
		description: `Tokyo (\u6771\u4EAC, T\u014Dky\u014D) is Japan's capital and the world's most populous metropolis.
        
        Prior to 1868, Tokyo was known as Edo. A small castle town in the 16th century, Edo became Japan's political center in 1603 when Tokugawa Ieyasu established his feudal government there. A few decades later, Edo had grown into one of the world's most populous cities. 

        Today, Tokyo offers a seemingly unlimited choice of shopping, entertainment, culture and dining to its visitors. The city's history can be appreciated in districts such as Asakusa and in many excellent museums, historic temples and gardens.
        `,
		image: "tokyo_small.jpg",
		googleMapsUrl: "https://www.google.com/maps/place/Tokyo,+",
		pointsOfInterest: [
			"Senso-ji Temple",
			"Shibuya Crossing",
			"DisneySea",
			"TeamLab Borderless"
		],
		nerdNomads: "https://nerdnomads.com/what-to-do-in-tokyo",
		japanGuide: "https://www.japan-guide.com/e/e2164.html"
	},
	{
		id: 3,
		city: "Kyoto",
		country: "Japan",
		description: `Kyoto (\u4EAC\u90FD, Ky\u014Dto) served as Japan's capital and the emperor's residence from 794 until 1868. It is one of the country's ten largest cities with a population of 1.5 million people and a modern face.

        Over the centuries, Kyoto was destroyed by many wars and fires, but due to its exceptional historic value, the city was dropped from the list of target cities for the atomic bomb and escaped destruction during World War II. Countless temples, shrines and other historically priceless structures survive in the city today.`,
		image: "kyoto_small.jpg",
		googleMapsUrl: "https://www.google.com/maps/place/Kyoto,+",
		pointsOfInterest: [
			"Shoren-in Temple",
			"Fushimi Inari Temple",
			"Ginkaku-ji Temple",
			"Kiyomizu-dera"
		],
		nerdNomads: "https://nerdnomads.com/kyoto-itinerary",
		japanGuide: "https://www.japan-guide.com/e/e2158.html"
	},
	{
		id: 4,
		city: "Osaka",
		country: "Japan",
		description:
			"Osaka (\u5927\u962A, \u014Csaka) is Japan's second largest metropolitan area after Tokyo. It has been the economic powerhouse of the Kansai Region for many centuries. Osaka was formerly known as Naniwa. Before the Nara Period, when the capital used to be moved with the reign of each new emperor, Naniwa was once Japan's capital city, the first one ever known.",
		image: "osaka_small.jpg",
		googleMapsUrl: "https://www.google.com/maps/place/Osaka,+",
		pointsOfInterest: ["Osaka Castle", "Universal Studios", "Minami (Namba Station)"],
		nerdNomads: "https://nerdnomads.com/osaka-itinerary",
		japanGuide: "https://www.japan-guide.com/e/e2157.html"
	},
	{
		id: 5,
		city: "Kanazawa",
		country: "Japan",
		description: `During the Edo Period, Kanazawa (\u91D1\u6CA2) grew to become a town of great cultural achievements, rivaling Kyoto and Edo (Tokyo).
        
        Today, The city boasts many historical attractions such as restored residences and districts, as well as modern museums. But Kanazawa's unchallenged main attraction is Kenrokuen, one of Japan's "three best landscape gardens" and by many considered the most beautiful of them all.

        During World War Two, Kanazawa was Japan's second largest city (after Kyoto) to escape destruction by air raids. Consequently, parts of the old castle town, such as the Nagamachi samurai district and chaya entertainment districts, have survived in pretty good condition.`,
		image: "kanazawa.jpg",
		googleMapsUrl: "https://www.google.com/maps/place/Kanazawa,+",
		pointsOfInterest: ["Kanazawa Castle", "Kenrokuen Garden", "Ninjadera"],
		nerdNomads: "https://nerdnomads.com/kanazawa",
		japanGuide: "https://www.japan-guide.com/e/e2167.html"
	}
];
function gd() {
	const e = vd.map((n) => p(yd, Re({}, n), n.id));
	return O("div", { children: [p(md, {}), p("main", { className: "places", children: e })] });
}
nd.render(p(gd, {}), document.getElementById("root"));
