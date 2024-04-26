(function() {
    "use strict";
    var require, define;
    ! function() {
        var e = {},
            r = {};
        require = function(i) {
            var n = e[i];
            return n && (r[i] = n[1].apply(void 0, n[0].map(require)), e[i] = void 0), r[i]
        }, (define = function(r, i, n) {
            if ("function" == typeof r) return r();
            e[r] = [i, n]
        }).amd = !0
    }();
    /*!
     * https://github.com/paulmillr/es6-shim
     * @license es6-shim Copyright 2013-2016 by Paul Miller (http://paulmillr.com)
     *   and contributors,  MIT License
     * es6-shim: v0.35.4
     * see https://github.com/paulmillr/es6-shim/blob/0.35.3/LICENSE
     * Details and documentation:
     * https://github.com/paulmillr/es6-shim/
     */
    (function(e, t) {
        if (typeof define === "function" && define.amd) {
            define(t)
        } else if (typeof exports === "object") {
            module.exports = t()
        } else {
            e.returnExports = t()
        }
    })(this, function() {
        "use strict";
        var e = Function.call.bind(Function.apply);
        var t = Function.call.bind(Function.call);
        var r = Array.isArray;
        var n = Object.keys;
        var o = function notThunker(t) {
            return function notThunk() {
                return !e(t, this, arguments)
            }
        };
        var i = function(e) {
            try {
                e();
                return false
            } catch (t) {
                return true
            }
        };
        var a = function valueOrFalseIfThrows(e) {
            try {
                return e()
            } catch (t) {
                return false
            }
        };
        var u = o(i);
        var f = function() {
            return !i(function() {
                return Object.defineProperty({}, "x", {
                    get: function() {}
                })
            })
        };
        var s = !!Object.defineProperty && f();
        var c = function foo() {}.name === "foo";
        var l = Function.call.bind(Array.prototype.forEach);
        var p = Function.call.bind(Array.prototype.reduce);
        var v = Function.call.bind(Array.prototype.filter);
        var y = Function.call.bind(Array.prototype.some);
        var h = function(e, t, r, n) {
            if (!n && t in e) {
                return
            }
            if (s) {
                Object.defineProperty(e, t, {
                    configurable: true,
                    enumerable: false,
                    writable: true,
                    value: r
                })
            } else {
                e[t] = r
            }
        };
        var b = function(e, t, r) {
            l(n(t), function(n) {
                var o = t[n];
                h(e, n, o, !!r)
            })
        };
        var g = Function.call.bind(Object.prototype.toString);
        var d = typeof /abc/ === "function" ? function IsCallableSlow(e) {
            return typeof e === "function" && g(e) === "[object Function]"
        } : function IsCallableFast(e) {
            return typeof e === "function"
        };
        var m = {
            getter: function(e, t, r) {
                if (!s) {
                    throw new TypeError("getters require true ES5 support")
                }
                Object.defineProperty(e, t, {
                    configurable: true,
                    enumerable: false,
                    get: r
                })
            },
            proxy: function(e, t, r) {
                if (!s) {
                    throw new TypeError("getters require true ES5 support")
                }
                var n = Object.getOwnPropertyDescriptor(e, t);
                Object.defineProperty(r, t, {
                    configurable: n.configurable,
                    enumerable: n.enumerable,
                    get: function getKey() {
                        return e[t]
                    },
                    set: function setKey(r) {
                        e[t] = r
                    }
                })
            },
            redefine: function(e, t, r) {
                if (s) {
                    var n = Object.getOwnPropertyDescriptor(e, t);
                    n.value = r;
                    Object.defineProperty(e, t, n)
                } else {
                    e[t] = r
                }
            },
            defineByDescriptor: function(e, t, r) {
                if (s) {
                    Object.defineProperty(e, t, r)
                } else if ("value" in r) {
                    e[t] = r.value
                }
            },
            preserveToString: function(e, t) {
                if (t && d(t.toString)) {
                    h(e, "toString", t.toString.bind(t), true)
                }
            }
        };
        var O = Object.create || function(e, t) {
            var r = function Prototype() {};
            r.prototype = e;
            var o = new r;
            if (typeof t !== "undefined") {
                n(t).forEach(function(e) {
                    m.defineByDescriptor(o, e, t[e])
                })
            }
            return o
        };
        var w = function(e, t) {
            if (!Object.setPrototypeOf) {
                return false
            }
            return a(function() {
                var r = function Subclass(t) {
                    var r = new e(t);
                    Object.setPrototypeOf(r, Subclass.prototype);
                    return r
                };
                Object.setPrototypeOf(r, e);
                r.prototype = O(e.prototype, {
                    constructor: {
                        value: r
                    }
                });
                return t(r)
            })
        };
        var j = function() {
            if (typeof self !== "undefined") {
                return self
            }
            if (typeof window !== "undefined") {
                return window
            }
            if (typeof global !== "undefined") {
                return global
            }
            throw new Error("unable to locate global object")
        };
        var S = j();
        var T = S.isFinite;
        var I = Function.call.bind(String.prototype.indexOf);
        var E = Function.apply.bind(Array.prototype.indexOf);
        var P = Function.call.bind(Array.prototype.concat);
        var C = Function.call.bind(String.prototype.slice);
        var M = Function.call.bind(Array.prototype.push);
        var x = Function.apply.bind(Array.prototype.push);
        var N = Function.call.bind(Array.prototype.join);
        var A = Function.call.bind(Array.prototype.shift);
        var R = Math.max;
        var _ = Math.min;
        var k = Math.floor;
        var L = Math.abs;
        var F = Math.exp;
        var D = Math.log;
        var z = Math.sqrt;
        var q = Function.call.bind(Object.prototype.hasOwnProperty);
        var W;
        var G = function() {};
        var H = S.Map;
        var V = H && H.prototype["delete"];
        var B = H && H.prototype.get;
        var U = H && H.prototype.has;
        var $ = H && H.prototype.set;
        var J = S.Symbol || {};
        var X = J.species || "@@species";
        var K = Number.isNaN || function isNaN(e) {
            return e !== e
        };
        var Z = Number.isFinite || function isFinite(e) {
            return typeof e === "number" && T(e)
        };
        var Y = d(Math.sign) ? Math.sign : function sign(e) {
            var t = Number(e);
            if (t === 0) {
                return t
            }
            if (K(t)) {
                return t
            }
            return t < 0 ? -1 : 1
        };
        var Q = function log1p(e) {
            var t = Number(e);
            if (t < -1 || K(t)) {
                return NaN
            }
            if (t === 0 || t === Infinity) {
                return t
            }
            if (t === -1) {
                return -Infinity
            }
            return 1 + t - 1 === 0 ? t : t * (D(1 + t) / (1 + t - 1))
        };
        var ee = function isArguments(e) {
            return g(e) === "[object Arguments]"
        };
        var te = function isArguments(e) {
            return e !== null && typeof e === "object" && typeof e.length === "number" && e.length >= 0 && g(e) !== "[object Array]" && g(e.callee) === "[object Function]"
        };
        var re = ee(arguments) ? ee : te;
        var ne = {
            primitive: function(e) {
                return e === null || typeof e !== "function" && typeof e !== "object"
            },
            string: function(e) {
                return g(e) === "[object String]"
            },
            regex: function(e) {
                return g(e) === "[object RegExp]"
            },
            symbol: function(e) {
                return typeof S.Symbol === "function" && typeof e === "symbol"
            }
        };
        var oe = function overrideNative(e, t, r) {
            var n = e[t];
            h(e, t, r, true);
            m.preserveToString(e[t], n)
        };
        var ie = typeof J === "function" && typeof J["for"] === "function" && ne.symbol(J());
        var ae = ne.symbol(J.iterator) ? J.iterator : "_es6-shim iterator_";
        if (S.Set && typeof(new S.Set)["@@iterator"] === "function") {
            ae = "@@iterator"
        }
        if (!S.Reflect) {
            h(S, "Reflect", {}, true)
        }
        var ue = S.Reflect;
        var fe = String;
        var se = typeof document === "undefined" || !document ? null : document.all;
        var ce = se == null ? function isNullOrUndefined(e) {
            return e == null
        } : function isNullOrUndefinedAndNotDocumentAll(e) {
            return e == null && e !== se
        };
        var le = {
            Call: function Call(t, r) {
                var n = arguments.length > 2 ? arguments[2] : [];
                if (!le.IsCallable(t)) {
                    throw new TypeError(t + " is not a function")
                }
                return e(t, r, n)
            },
            RequireObjectCoercible: function(e, t) {
                if (ce(e)) {
                    throw new TypeError(t || "Cannot call method on " + e)
                }
                return e
            },
            TypeIsObject: function(e) {
                if (e === void 0 || e === null || e === true || e === false) {
                    return false
                }
                return typeof e === "function" || typeof e === "object" || e === se
            },
            ToObject: function(e, t) {
                return Object(le.RequireObjectCoercible(e, t))
            },
            IsCallable: d,
            IsConstructor: function(e) {
                return le.IsCallable(e)
            },
            ToInt32: function(e) {
                return le.ToNumber(e) >> 0
            },
            ToUint32: function(e) {
                return le.ToNumber(e) >>> 0
            },
            ToNumber: function(e) {
                if (ie && g(e) === "[object Symbol]") {
                    throw new TypeError("Cannot convert a Symbol value to a number")
                }
                return +e
            },
            ToInteger: function(e) {
                var t = le.ToNumber(e);
                if (K(t)) {
                    return 0
                }
                if (t === 0 || !Z(t)) {
                    return t
                }
                return (t > 0 ? 1 : -1) * k(L(t))
            },
            ToLength: function(e) {
                var t = le.ToInteger(e);
                if (t <= 0) {
                    return 0
                }
                if (t > Number.MAX_SAFE_INTEGER) {
                    return Number.MAX_SAFE_INTEGER
                }
                return t
            },
            SameValue: function(e, t) {
                if (e === t) {
                    if (e === 0) {
                        return 1 / e === 1 / t
                    }
                    return true
                }
                return K(e) && K(t)
            },
            SameValueZero: function(e, t) {
                return e === t || K(e) && K(t)
            },
            GetIterator: function(e) {
                if (re(e)) {
                    return new W(e, "value")
                }
                var t = le.GetMethod(e, ae);
                if (!le.IsCallable(t)) {
                    throw new TypeError("value is not an iterable")
                }
                var r = le.Call(t, e);
                if (!le.TypeIsObject(r)) {
                    throw new TypeError("bad iterator")
                }
                return r
            },
            GetMethod: function(e, t) {
                var r = le.ToObject(e)[t];
                if (ce(r)) {
                    return void 0
                }
                if (!le.IsCallable(r)) {
                    throw new TypeError("Method not callable: " + t)
                }
                return r
            },
            IteratorComplete: function(e) {
                return !!e.done
            },
            IteratorClose: function(e, t) {
                var r = le.GetMethod(e, "return");
                if (r === void 0) {
                    return
                }
                var n, o;
                try {
                    n = le.Call(r, e)
                } catch (i) {
                    o = i
                }
                if (t) {
                    return
                }
                if (o) {
                    throw o
                }
                if (!le.TypeIsObject(n)) {
                    throw new TypeError("Iterator's return method returned a non-object.")
                }
            },
            IteratorNext: function(e) {
                var t = arguments.length > 1 ? e.next(arguments[1]) : e.next();
                if (!le.TypeIsObject(t)) {
                    throw new TypeError("bad iterator")
                }
                return t
            },
            IteratorStep: function(e) {
                var t = le.IteratorNext(e);
                var r = le.IteratorComplete(t);
                return r ? false : t
            },
            Construct: function(e, t, r, n) {
                var o = typeof r === "undefined" ? e : r;
                if (!n && ue.construct) {
                    return ue.construct(e, t, o)
                }
                var i = o.prototype;
                if (!le.TypeIsObject(i)) {
                    i = Object.prototype
                }
                var a = O(i);
                var u = le.Call(e, a, t);
                return le.TypeIsObject(u) ? u : a
            },
            SpeciesConstructor: function(e, t) {
                var r = e.constructor;
                if (r === void 0) {
                    return t
                }
                if (!le.TypeIsObject(r)) {
                    throw new TypeError("Bad constructor")
                }
                var n = r[X];
                if (ce(n)) {
                    return t
                }
                if (!le.IsConstructor(n)) {
                    throw new TypeError("Bad @@species")
                }
                return n
            },
            CreateHTML: function(e, t, r, n) {
                var o = le.ToString(e);
                var i = "<" + t;
                if (r !== "") {
                    var a = le.ToString(n);
                    var u = a.replace(/"/g, "&quot;");
                    i += " " + r + '="' + u + '"'
                }
                var f = i + ">";
                var s = f + o;
                return s + "</" + t + ">"
            },
            IsRegExp: function IsRegExp(e) {
                if (!le.TypeIsObject(e)) {
                    return false
                }
                var t = e[J.match];
                if (typeof t !== "undefined") {
                    return !!t
                }
                return ne.regex(e)
            },
            ToString: function ToString(e) {
                if (ie && g(e) === "[object Symbol]") {
                    throw new TypeError("Cannot convert a Symbol value to a number")
                }
                return fe(e)
            }
        };
        if (s && ie) {
            var pe = function defineWellKnownSymbol(e) {
                if (ne.symbol(J[e])) {
                    return J[e]
                }
                var t = J["for"]("Symbol." + e);
                Object.defineProperty(J, e, {
                    configurable: false,
                    enumerable: false,
                    writable: false,
                    value: t
                });
                return t
            };
            if (!ne.symbol(J.search)) {
                var ve = pe("search");
                var ye = String.prototype.search;
                h(RegExp.prototype, ve, function search(e) {
                    return le.Call(ye, e, [this])
                });
                var he = function search(e) {
                    var t = le.RequireObjectCoercible(this);
                    if (!ce(e)) {
                        var r = le.GetMethod(e, ve);
                        if (typeof r !== "undefined") {
                            return le.Call(r, e, [t])
                        }
                    }
                    return le.Call(ye, t, [le.ToString(e)])
                };
                oe(String.prototype, "search", he)
            }
            if (!ne.symbol(J.replace)) {
                var be = pe("replace");
                var ge = String.prototype.replace;
                h(RegExp.prototype, be, function replace(e, t) {
                    return le.Call(ge, e, [this, t])
                });
                var de = function replace(e, t) {
                    var r = le.RequireObjectCoercible(this);
                    if (!ce(e)) {
                        var n = le.GetMethod(e, be);
                        if (typeof n !== "undefined") {
                            return le.Call(n, e, [r, t])
                        }
                    }
                    return le.Call(ge, r, [le.ToString(e), t])
                };
                oe(String.prototype, "replace", de)
            }
            if (!ne.symbol(J.split)) {
                var me = pe("split");
                var Oe = String.prototype.split;
                h(RegExp.prototype, me, function split(e, t) {
                    return le.Call(Oe, e, [this, t])
                });
                var we = function split(e, t) {
                    var r = le.RequireObjectCoercible(this);
                    if (!ce(e)) {
                        var n = le.GetMethod(e, me);
                        if (typeof n !== "undefined") {
                            return le.Call(n, e, [r, t])
                        }
                    }
                    return le.Call(Oe, r, [le.ToString(e), t])
                };
                oe(String.prototype, "split", we)
            }
            var je = ne.symbol(J.match);
            var Se = je && function() {
                var e = {};
                e[J.match] = function() {
                    return 42
                };
                return "a".match(e) !== 42
            }();
            if (!je || Se) {
                var Te = pe("match");
                var Ie = String.prototype.match;
                h(RegExp.prototype, Te, function match(e) {
                    return le.Call(Ie, e, [this])
                });
                var Ee = function match(e) {
                    var t = le.RequireObjectCoercible(this);
                    if (!ce(e)) {
                        var r = le.GetMethod(e, Te);
                        if (typeof r !== "undefined") {
                            return le.Call(r, e, [t])
                        }
                    }
                    return le.Call(Ie, t, [le.ToString(e)])
                };
                oe(String.prototype, "match", Ee)
            }
        }
        var Pe = function wrapConstructor(e, t, r) {
            m.preserveToString(t, e);
            if (Object.setPrototypeOf) {
                Object.setPrototypeOf(e, t)
            }
            if (s) {
                l(Object.getOwnPropertyNames(e), function(n) {
                    if (n in G || r[n]) {
                        return
                    }
                    m.proxy(e, n, t)
                })
            } else {
                l(Object.keys(e), function(n) {
                    if (n in G || r[n]) {
                        return
                    }
                    t[n] = e[n]
                })
            }
            t.prototype = e.prototype;
            m.redefine(e.prototype, "constructor", t)
        };
        var Ce = function() {
            return this
        };
        var Me = function(e) {
            if (s && !q(e, X)) {
                m.getter(e, X, Ce)
            }
        };
        var xe = function(e, t) {
            var r = t || function iterator() {
                return this
            };
            h(e, ae, r);
            if (!e[ae] && ne.symbol(ae)) {
                e[ae] = r
            }
        };
        var Ne = function createDataProperty(e, t, r) {
            if (s) {
                Object.defineProperty(e, t, {
                    configurable: true,
                    enumerable: true,
                    writable: true,
                    value: r
                })
            } else {
                e[t] = r
            }
        };
        var Ae = function createDataPropertyOrThrow(e, t, r) {
            Ne(e, t, r);
            if (!le.SameValue(e[t], r)) {
                throw new TypeError("property is nonconfigurable")
            }
        };
        var Re = function(e, t, r, n) {
            if (!le.TypeIsObject(e)) {
                throw new TypeError("Constructor requires `new`: " + t.name)
            }
            var o = t.prototype;
            if (!le.TypeIsObject(o)) {
                o = r
            }
            var i = O(o);
            for (var a in n) {
                if (q(n, a)) {
                    var u = n[a];
                    h(i, a, u, true)
                }
            }
            return i
        };
        if (String.fromCodePoint && String.fromCodePoint.length !== 1) {
            var _e = String.fromCodePoint;
            oe(String, "fromCodePoint", function fromCodePoint(e) {
                return le.Call(_e, this, arguments)
            })
        }
        var ke = {
            fromCodePoint: function fromCodePoint(e) {
                var t = [];
                var r;
                for (var n = 0, o = arguments.length; n < o; n++) {
                    r = Number(arguments[n]);
                    if (!le.SameValue(r, le.ToInteger(r)) || r < 0 || r > 1114111) {
                        throw new RangeError("Invalid code point " + r)
                    }
                    if (r < 65536) {
                        M(t, String.fromCharCode(r))
                    } else {
                        r -= 65536;
                        M(t, String.fromCharCode((r >> 10) + 55296));
                        M(t, String.fromCharCode(r % 1024 + 56320))
                    }
                }
                return N(t, "")
            },
            raw: function raw(e) {
                var t = arguments.length - 1;
                var r = le.ToObject(e, "bad template");
                var raw = le.ToObject(r.raw, "bad raw value");
                var n = raw.length;
                var o = le.ToLength(n);
                if (o <= 0) {
                    return ""
                }
                var i = [];
                var a = 0;
                var u, f, s, c;
                while (a < o) {
                    u = le.ToString(a);
                    s = le.ToString(raw[u]);
                    M(i, s);
                    if (a + 1 >= o) {
                        break
                    }
                    f = a + 1 < arguments.length ? arguments[a + 1] : "";
                    c = le.ToString(f);
                    M(i, c);
                    a += 1
                }
                return N(i, "")
            }
        };
        if (String.raw && String.raw({
                raw: {
                    0: "x",
                    1: "y",
                    length: 2
                }
            }) !== "xy") {
            oe(String, "raw", ke.raw)
        }
        b(String, ke);
        var Le = function repeat(e, t) {
            if (t < 1) {
                return ""
            }
            if (t % 2) {
                return repeat(e, t - 1) + e
            }
            var r = repeat(e, t / 2);
            return r + r
        };
        var Fe = Infinity;
        var De = {
            repeat: function repeat(e) {
                var t = le.ToString(le.RequireObjectCoercible(this));
                var r = le.ToInteger(e);
                if (r < 0 || r >= Fe) {
                    throw new RangeError("repeat count must be less than infinity and not overflow maximum string size")
                }
                return Le(t, r)
            },
            startsWith: function startsWith(e) {
                var t = le.ToString(le.RequireObjectCoercible(this));
                if (le.IsRegExp(e)) {
                    throw new TypeError('Cannot call method "startsWith" with a regex')
                }
                var r = le.ToString(e);
                var n;
                if (arguments.length > 1) {
                    n = arguments[1]
                }
                var o = R(le.ToInteger(n), 0);
                return C(t, o, o + r.length) === r
            },
            endsWith: function endsWith(e) {
                var t = le.ToString(le.RequireObjectCoercible(this));
                if (le.IsRegExp(e)) {
                    throw new TypeError('Cannot call method "endsWith" with a regex')
                }
                var r = le.ToString(e);
                var n = t.length;
                var o;
                if (arguments.length > 1) {
                    o = arguments[1]
                }
                var i = typeof o === "undefined" ? n : le.ToInteger(o);
                var a = _(R(i, 0), n);
                return C(t, a - r.length, a) === r
            },
            includes: function includes(e) {
                if (le.IsRegExp(e)) {
                    throw new TypeError('"includes" does not accept a RegExp')
                }
                var t = le.ToString(e);
                var r;
                if (arguments.length > 1) {
                    r = arguments[1]
                }
                return I(this, t, r) !== -1
            },
            codePointAt: function codePointAt(e) {
                var t = le.ToString(le.RequireObjectCoercible(this));
                var r = le.ToInteger(e);
                var n = t.length;
                if (r >= 0 && r < n) {
                    var o = t.charCodeAt(r);
                    var i = r + 1 === n;
                    if (o < 55296 || o > 56319 || i) {
                        return o
                    }
                    var a = t.charCodeAt(r + 1);
                    if (a < 56320 || a > 57343) {
                        return o
                    }
                    return (o - 55296) * 1024 + (a - 56320) + 65536
                }
            }
        };
        if (String.prototype.includes && "a".includes("a", Infinity) !== false) {
            oe(String.prototype, "includes", De.includes)
        }
        if (String.prototype.startsWith && String.prototype.endsWith) {
            var ze = i(function() {
                return "/a/".startsWith(/a/)
            });
            var qe = a(function() {
                return "abc".startsWith("a", Infinity) === false
            });
            if (!ze || !qe) {
                oe(String.prototype, "startsWith", De.startsWith);
                oe(String.prototype, "endsWith", De.endsWith)
            }
        }
        if (ie) {
            var We = a(function() {
                var e = /a/;
                e[J.match] = false;
                return "/a/".startsWith(e)
            });
            if (!We) {
                oe(String.prototype, "startsWith", De.startsWith)
            }
            var Ge = a(function() {
                var e = /a/;
                e[J.match] = false;
                return "/a/".endsWith(e)
            });
            if (!Ge) {
                oe(String.prototype, "endsWith", De.endsWith)
            }
            var He = a(function() {
                var e = /a/;
                e[J.match] = false;
                return "/a/".includes(e)
            });
            if (!He) {
                oe(String.prototype, "includes", De.includes)
            }
        }
        b(String.prototype, De);
        var Ve = ["\t\n\x0B\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003", "\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028", "\u2029\ufeff"].join("");
        var Be = new RegExp("(^[" + Ve + "]+)|([" + Ve + "]+$)", "g");
        var Ue = function trim() {
            return le.ToString(le.RequireObjectCoercible(this)).replace(Be, "")
        };
        var $e = ["\x85", "\u200b", "\ufffe"].join("");
        var Je = new RegExp("[" + $e + "]", "g");
        var Xe = /^[-+]0x[0-9a-f]+$/i;
        var Ke = $e.trim().length !== $e.length;
        h(String.prototype, "trim", Ue, Ke);
        var Ze = function(e) {
            return {
                value: e,
                done: arguments.length === 0
            }
        };
        var Ye = function(e) {
            le.RequireObjectCoercible(e);
            h(this, "_s", le.ToString(e));
            h(this, "_i", 0)
        };
        Ye.prototype.next = function() {
            var e = this._s;
            var t = this._i;
            if (typeof e === "undefined" || t >= e.length) {
                this._s = void 0;
                return Ze()
            }
            var r = e.charCodeAt(t);
            var n, o;
            if (r < 55296 || r > 56319 || t + 1 === e.length) {
                o = 1
            } else {
                n = e.charCodeAt(t + 1);
                o = n < 56320 || n > 57343 ? 1 : 2
            }
            this._i = t + o;
            return Ze(e.substr(t, o))
        };
        xe(Ye.prototype);
        xe(String.prototype, function() {
            return new Ye(this)
        });
        var Qe = {
            from: function from(e) {
                var r = this;
                var n;
                if (arguments.length > 1) {
                    n = arguments[1]
                }
                var o, i;
                if (typeof n === "undefined") {
                    o = false
                } else {
                    if (!le.IsCallable(n)) {
                        throw new TypeError("Array.from: when provided, the second argument must be a function")
                    }
                    if (arguments.length > 2) {
                        i = arguments[2]
                    }
                    o = true
                }
                var a = typeof(re(e) || le.GetMethod(e, ae)) !== "undefined";
                var u, f, s;
                if (a) {
                    f = le.IsConstructor(r) ? Object(new r) : [];
                    var c = le.GetIterator(e);
                    var l, p;
                    s = 0;
                    while (true) {
                        l = le.IteratorStep(c);
                        if (l === false) {
                            break
                        }
                        p = l.value;
                        try {
                            if (o) {
                                p = typeof i === "undefined" ? n(p, s) : t(n, i, p, s)
                            }
                            f[s] = p
                        } catch (v) {
                            le.IteratorClose(c, true);
                            throw v
                        }
                        s += 1
                    }
                    u = s
                } else {
                    var y = le.ToObject(e);
                    u = le.ToLength(y.length);
                    f = le.IsConstructor(r) ? Object(new r(u)) : new Array(u);
                    var h;
                    for (s = 0; s < u; ++s) {
                        h = y[s];
                        if (o) {
                            h = typeof i === "undefined" ? n(h, s) : t(n, i, h, s)
                        }
                        Ae(f, s, h)
                    }
                }
                f.length = u;
                return f
            },
            of: function of() {
                var e = arguments.length;
                var t = this;
                var n = r(t) || !le.IsCallable(t) ? new Array(e) : le.Construct(t, [e]);
                for (var o = 0; o < e; ++o) {
                    Ae(n, o, arguments[o])
                }
                n.length = e;
                return n
            }
        };
        b(Array, Qe);
        Me(Array);
        W = function(e, t) {
            h(this, "i", 0);
            h(this, "array", e);
            h(this, "kind", t)
        };
        b(W.prototype, {
            next: function() {
                var e = this.i;
                var t = this.array;
                if (!(this instanceof W)) {
                    throw new TypeError("Not an ArrayIterator")
                }
                if (typeof t !== "undefined") {
                    var r = le.ToLength(t.length);
                    if (e < r) {
                        var n = this.kind;
                        var o;
                        if (n === "key") {
                            o = e
                        } else if (n === "value") {
                            o = t[e]
                        } else if (n === "entry") {
                            o = [e, t[e]]
                        }
                        this.i = e + 1;
                        return Ze(o)
                    }
                }
                this.array = void 0;
                return Ze()
            }
        });
        xe(W.prototype);
        var et = Array.of === Qe.of || function() {
            var e = function Foo(e) {
                this.length = e
            };
            e.prototype = [];
            var t = Array.of.apply(e, [1, 2]);
            return t instanceof e && t.length === 2
        }();
        if (!et) {
            oe(Array, "of", Qe.of)
        }
        var tt = {
            copyWithin: function copyWithin(e, t) {
                var r = le.ToObject(this);
                var n = le.ToLength(r.length);
                var o = le.ToInteger(e);
                var i = le.ToInteger(t);
                var a = o < 0 ? R(n + o, 0) : _(o, n);
                var u = i < 0 ? R(n + i, 0) : _(i, n);
                var f;
                if (arguments.length > 2) {
                    f = arguments[2]
                }
                var s = typeof f === "undefined" ? n : le.ToInteger(f);
                var c = s < 0 ? R(n + s, 0) : _(s, n);
                var l = _(c - u, n - a);
                var p = 1;
                if (u < a && a < u + l) {
                    p = -1;
                    u += l - 1;
                    a += l - 1
                }
                while (l > 0) {
                    if (u in r) {
                        r[a] = r[u]
                    } else {
                        delete r[a]
                    }
                    u += p;
                    a += p;
                    l -= 1
                }
                return r
            },
            fill: function fill(e) {
                var t;
                if (arguments.length > 1) {
                    t = arguments[1]
                }
                var r;
                if (arguments.length > 2) {
                    r = arguments[2]
                }
                var n = le.ToObject(this);
                var o = le.ToLength(n.length);
                t = le.ToInteger(typeof t === "undefined" ? 0 : t);
                r = le.ToInteger(typeof r === "undefined" ? o : r);
                var i = t < 0 ? R(o + t, 0) : _(t, o);
                var a = r < 0 ? o + r : r;
                for (var u = i; u < o && u < a; ++u) {
                    n[u] = e
                }
                return n
            },
            find: function find(e) {
                var r = le.ToObject(this);
                var n = le.ToLength(r.length);
                if (!le.IsCallable(e)) {
                    throw new TypeError("Array#find: predicate must be a function")
                }
                var o = arguments.length > 1 ? arguments[1] : null;
                for (var i = 0, a; i < n; i++) {
                    a = r[i];
                    if (o) {
                        if (t(e, o, a, i, r)) {
                            return a
                        }
                    } else if (e(a, i, r)) {
                        return a
                    }
                }
            },
            findIndex: function findIndex(e) {
                var r = le.ToObject(this);
                var n = le.ToLength(r.length);
                if (!le.IsCallable(e)) {
                    throw new TypeError("Array#findIndex: predicate must be a function")
                }
                var o = arguments.length > 1 ? arguments[1] : null;
                for (var i = 0; i < n; i++) {
                    if (o) {
                        if (t(e, o, r[i], i, r)) {
                            return i
                        }
                    } else if (e(r[i], i, r)) {
                        return i
                    }
                }
                return -1
            },
            keys: function keys() {
                return new W(this, "key")
            },
            values: function values() {
                return new W(this, "value")
            },
            entries: function entries() {
                return new W(this, "entry")
            }
        };
        if (Array.prototype.keys && !le.IsCallable([1].keys().next)) {
            delete Array.prototype.keys
        }
        if (Array.prototype.entries && !le.IsCallable([1].entries().next)) {
            delete Array.prototype.entries
        }
        if (Array.prototype.keys && Array.prototype.entries && !Array.prototype.values && Array.prototype[ae]) {
            b(Array.prototype, {
                values: Array.prototype[ae]
            });
            if (ne.symbol(J.unscopables)) {
                Array.prototype[J.unscopables].values = true
            }
        }
        if (c && Array.prototype.values && Array.prototype.values.name !== "values") {
            var rt = Array.prototype.values;
            oe(Array.prototype, "values", function values() {
                return le.Call(rt, this, arguments)
            });
            h(Array.prototype, ae, Array.prototype.values, true)
        }
        b(Array.prototype, tt);
        if (1 / [true].indexOf(true, -0) < 0) {
            h(Array.prototype, "indexOf", function indexOf(e) {
                var t = E(this, arguments);
                if (t === 0 && 1 / t < 0) {
                    return 0
                }
                return t
            }, true)
        }
        xe(Array.prototype, function() {
            return this.values()
        });
        if (Object.getPrototypeOf) {
            var nt = Object.getPrototypeOf([].values());
            if (nt) {
                xe(nt)
            }
        }
        var ot = function() {
            return a(function() {
                return Array.from({
                    length: -1
                }).length === 0
            })
        }();
        var it = function() {
            var e = Array.from([0].entries());
            return e.length === 1 && r(e[0]) && e[0][0] === 0 && e[0][1] === 0
        }();
        if (!ot || !it) {
            oe(Array, "from", Qe.from)
        }
        var at = function() {
            return a(function() {
                return Array.from([0], void 0)
            })
        }();
        if (!at) {
            var ut = Array.from;
            oe(Array, "from", function from(e) {
                if (arguments.length > 1 && typeof arguments[1] !== "undefined") {
                    return le.Call(ut, this, arguments)
                }
                return t(ut, this, e)
            })
        }
        var ft = -(Math.pow(2, 32) - 1);
        var st = function(e, r) {
            var n = {
                length: ft
            };
            n[r ? (n.length >>> 0) - 1 : 0] = true;
            return a(function() {
                t(e, n, function() {
                    throw new RangeError("should not reach here")
                }, []);
                return true
            })
        };
        if (!st(Array.prototype.forEach)) {
            var ct = Array.prototype.forEach;
            oe(Array.prototype, "forEach", function forEach(e) {
                return le.Call(ct, this.length >= 0 ? this : [], arguments)
            })
        }
        if (!st(Array.prototype.map)) {
            var lt = Array.prototype.map;
            oe(Array.prototype, "map", function map(e) {
                return le.Call(lt, this.length >= 0 ? this : [], arguments)
            })
        }
        if (!st(Array.prototype.filter)) {
            var pt = Array.prototype.filter;
            oe(Array.prototype, "filter", function filter(e) {
                return le.Call(pt, this.length >= 0 ? this : [], arguments)
            })
        }
        if (!st(Array.prototype.some)) {
            var vt = Array.prototype.some;
            oe(Array.prototype, "some", function some(e) {
                return le.Call(vt, this.length >= 0 ? this : [], arguments)
            })
        }
        if (!st(Array.prototype.every)) {
            var yt = Array.prototype.every;
            oe(Array.prototype, "every", function every(e) {
                return le.Call(yt, this.length >= 0 ? this : [], arguments)
            })
        }
        if (!st(Array.prototype.reduce)) {
            var ht = Array.prototype.reduce;
            oe(Array.prototype, "reduce", function reduce(e) {
                return le.Call(ht, this.length >= 0 ? this : [], arguments)
            })
        }
        if (!st(Array.prototype.reduceRight, true)) {
            var bt = Array.prototype.reduceRight;
            oe(Array.prototype, "reduceRight", function reduceRight(e) {
                return le.Call(bt, this.length >= 0 ? this : [], arguments)
            })
        }
        var gt = Number("0o10") !== 8;
        var dt = Number("0b10") !== 2;
        var mt = y($e, function(e) {
            return Number(e + 0 + e) === 0
        });
        if (gt || dt || mt) {
            var Ot = Number;
            var wt = /^0b[01]+$/i;
            var jt = /^0o[0-7]+$/i;
            var St = wt.test.bind(wt);
            var Tt = jt.test.bind(jt);
            var It = function(e, t) {
                var r;
                if (typeof e.valueOf === "function") {
                    r = e.valueOf();
                    if (ne.primitive(r)) {
                        return r
                    }
                }
                if (typeof e.toString === "function") {
                    r = e.toString();
                    if (ne.primitive(r)) {
                        return r
                    }
                }
                throw new TypeError("No default value")
            };
            var Et = Je.test.bind(Je);
            var Pt = Xe.test.bind(Xe);
            var Ct = function() {
                var e = function Number(t) {
                    var r;
                    if (arguments.length > 0) {
                        r = ne.primitive(t) ? t : It(t, "number")
                    } else {
                        r = 0
                    }
                    if (typeof r === "string") {
                        r = le.Call(Ue, r);
                        if (St(r)) {
                            r = parseInt(C(r, 2), 2)
                        } else if (Tt(r)) {
                            r = parseInt(C(r, 2), 8)
                        } else if (Et(r) || Pt(r)) {
                            r = NaN
                        }
                    }
                    var n = this;
                    var o = a(function() {
                        Ot.prototype.valueOf.call(n);
                        return true
                    });
                    if (n instanceof e && !o) {
                        return new Ot(r)
                    }
                    return Ot(r)
                };
                return e
            }();
            Pe(Ot, Ct, {});
            b(Ct, {
                NaN: Ot.NaN,
                MAX_VALUE: Ot.MAX_VALUE,
                MIN_VALUE: Ot.MIN_VALUE,
                NEGATIVE_INFINITY: Ot.NEGATIVE_INFINITY,
                POSITIVE_INFINITY: Ot.POSITIVE_INFINITY
            });
            Number = Ct;
            m.redefine(S, "Number", Ct)
        }
        var Mt = Math.pow(2, 53) - 1;
        b(Number, {
            MAX_SAFE_INTEGER: Mt,
            MIN_SAFE_INTEGER: -Mt,
            EPSILON: 2.220446049250313e-16,
            parseInt: S.parseInt,
            parseFloat: S.parseFloat,
            isFinite: Z,
            isInteger: function isInteger(e) {
                return Z(e) && le.ToInteger(e) === e
            },
            isSafeInteger: function isSafeInteger(e) {
                return Number.isInteger(e) && L(e) <= Number.MAX_SAFE_INTEGER
            },
            isNaN: K
        });
        h(Number, "parseInt", S.parseInt, Number.parseInt !== S.parseInt);
        if ([, 1].find(function() {
                return true
            }) === 1) {
            oe(Array.prototype, "find", tt.find)
        }
        if ([, 1].findIndex(function() {
                return true
            }) !== 0) {
            oe(Array.prototype, "findIndex", tt.findIndex)
        }
        var xt = Function.bind.call(Function.bind, Object.prototype.propertyIsEnumerable);
        var Nt = function ensureEnumerable(e, t) {
            if (s && xt(e, t)) {
                Object.defineProperty(e, t, {
                    enumerable: false
                })
            }
        };
        var At = function sliceArgs() {
            var e = Number(this);
            var t = arguments.length;
            var r = t - e;
            var n = new Array(r < 0 ? 0 : r);
            for (var o = e; o < t; ++o) {
                n[o - e] = arguments[o]
            }
            return n
        };
        var Rt = function assignTo(e) {
            return function assignToSource(t, r) {
                t[r] = e[r];
                return t
            }
        };
        var _t = function(e, t) {
            var r = n(Object(t));
            var o;
            if (le.IsCallable(Object.getOwnPropertySymbols)) {
                o = v(Object.getOwnPropertySymbols(Object(t)), xt(t))
            }
            return p(P(r, o || []), Rt(t), e)
        };
        var kt = {
            assign: function(e, t) {
                var r = le.ToObject(e, "Cannot convert undefined or null to object");
                return p(le.Call(At, 1, arguments), _t, r)
            },
            is: function is(e, t) {
                return le.SameValue(e, t)
            }
        };
        var Lt = Object.assign && Object.preventExtensions && function() {
            var e = Object.preventExtensions({
                1: 2
            });
            try {
                Object.assign(e, "xy")
            } catch (t) {
                return e[1] === "y"
            }
        }();
        if (Lt) {
            oe(Object, "assign", kt.assign)
        }
        b(Object, kt);
        if (s) {
            var Ft = {
                setPrototypeOf: function(e, r) {
                    var n;
                    var o = function(e, t) {
                        if (!le.TypeIsObject(e)) {
                            throw new TypeError("cannot set prototype on a non-object")
                        }
                        if (!(t === null || le.TypeIsObject(t))) {
                            throw new TypeError("can only set prototype to an object or null" + t)
                        }
                    };
                    var i = function(e, r) {
                        o(e, r);
                        t(n, e, r);
                        return e
                    };
                    try {
                        n = e.getOwnPropertyDescriptor(e.prototype, r).set;
                        t(n, {}, null)
                    } catch (a) {
                        if (e.prototype !== {} [r]) {
                            return
                        }
                        n = function(e) {
                            this[r] = e
                        };
                        i.polyfill = i(i({}, null), e.prototype) instanceof e
                    }
                    return i
                }(Object, "__proto__")
            };
            b(Object, Ft)
        }
        if (Object.setPrototypeOf && Object.getPrototypeOf && Object.getPrototypeOf(Object.setPrototypeOf({}, null)) !== null && Object.getPrototypeOf(Object.create(null)) === null) {
            (function() {
                var e = Object.create(null);
                var t = Object.getPrototypeOf;
                var r = Object.setPrototypeOf;
                Object.getPrototypeOf = function(r) {
                    var n = t(r);
                    return n === e ? null : n
                };
                Object.setPrototypeOf = function(t, n) {
                    var o = n === null ? e : n;
                    return r(t, o)
                };
                Object.setPrototypeOf.polyfill = false
            })()
        }
        var Dt = !i(function() {
            return Object.keys("foo")
        });
        if (!Dt) {
            var zt = Object.keys;
            oe(Object, "keys", function keys(e) {
                return zt(le.ToObject(e))
            });
            n = Object.keys
        }
        var qt = i(function() {
            return Object.keys(/a/g)
        });
        if (qt) {
            var Wt = Object.keys;
            oe(Object, "keys", function keys(e) {
                if (ne.regex(e)) {
                    var t = [];
                    for (var r in e) {
                        if (q(e, r)) {
                            M(t, r)
                        }
                    }
                    return t
                }
                return Wt(e)
            });
            n = Object.keys
        }
        if (Object.getOwnPropertyNames) {
            var Gt = !i(function() {
                return Object.getOwnPropertyNames("foo")
            });
            if (!Gt) {
                var Ht = typeof window === "object" ? Object.getOwnPropertyNames(window) : [];
                var Vt = Object.getOwnPropertyNames;
                oe(Object, "getOwnPropertyNames", function getOwnPropertyNames(e) {
                    var t = le.ToObject(e);
                    if (g(t) === "[object Window]") {
                        try {
                            return Vt(t)
                        } catch (r) {
                            return P([], Ht)
                        }
                    }
                    return Vt(t)
                })
            }
        }
        if (Object.getOwnPropertyDescriptor) {
            var Bt = !i(function() {
                return Object.getOwnPropertyDescriptor("foo", "bar")
            });
            if (!Bt) {
                var Ut = Object.getOwnPropertyDescriptor;
                oe(Object, "getOwnPropertyDescriptor", function getOwnPropertyDescriptor(e, t) {
                    return Ut(le.ToObject(e), t)
                })
            }
        }
        if (Object.seal) {
            var $t = !i(function() {
                return Object.seal("foo")
            });
            if (!$t) {
                var Jt = Object.seal;
                oe(Object, "seal", function seal(e) {
                    if (!le.TypeIsObject(e)) {
                        return e
                    }
                    return Jt(e)
                })
            }
        }
        if (Object.isSealed) {
            var Xt = !i(function() {
                return Object.isSealed("foo")
            });
            if (!Xt) {
                var Kt = Object.isSealed;
                oe(Object, "isSealed", function isSealed(e) {
                    if (!le.TypeIsObject(e)) {
                        return true
                    }
                    return Kt(e)
                })
            }
        }
        if (Object.freeze) {
            var Zt = !i(function() {
                return Object.freeze("foo")
            });
            if (!Zt) {
                var Yt = Object.freeze;
                oe(Object, "freeze", function freeze(e) {
                    if (!le.TypeIsObject(e)) {
                        return e
                    }
                    return Yt(e)
                })
            }
        }
        if (Object.isFrozen) {
            var Qt = !i(function() {
                return Object.isFrozen("foo")
            });
            if (!Qt) {
                var er = Object.isFrozen;
                oe(Object, "isFrozen", function isFrozen(e) {
                    if (!le.TypeIsObject(e)) {
                        return true
                    }
                    return er(e)
                })
            }
        }
        if (Object.preventExtensions) {
            var tr = !i(function() {
                return Object.preventExtensions("foo")
            });
            if (!tr) {
                var rr = Object.preventExtensions;
                oe(Object, "preventExtensions", function preventExtensions(e) {
                    if (!le.TypeIsObject(e)) {
                        return e
                    }
                    return rr(e)
                })
            }
        }
        if (Object.isExtensible) {
            var nr = !i(function() {
                return Object.isExtensible("foo")
            });
            if (!nr) {
                var or = Object.isExtensible;
                oe(Object, "isExtensible", function isExtensible(e) {
                    if (!le.TypeIsObject(e)) {
                        return false
                    }
                    return or(e)
                })
            }
        }
        if (Object.getPrototypeOf) {
            var ir = !i(function() {
                return Object.getPrototypeOf("foo")
            });
            if (!ir) {
                var ar = Object.getPrototypeOf;
                oe(Object, "getPrototypeOf", function getPrototypeOf(e) {
                    return ar(le.ToObject(e))
                })
            }
        }
        var ur = s && function() {
            var e = Object.getOwnPropertyDescriptor(RegExp.prototype, "flags");
            return e && le.IsCallable(e.get)
        }();
        if (s && !ur) {
            var fr = function flags() {
                if (!le.TypeIsObject(this)) {
                    throw new TypeError("Method called on incompatible type: must be an object.")
                }
                var e = "";
                if (this.global) {
                    e += "g"
                }
                if (this.ignoreCase) {
                    e += "i"
                }
                if (this.multiline) {
                    e += "m"
                }
                if (this.unicode) {
                    e += "u"
                }
                if (this.sticky) {
                    e += "y"
                }
                return e
            };
            m.getter(RegExp.prototype, "flags", fr)
        }
        var sr = s && a(function() {
            return String(new RegExp(/a/g, "i")) === "/a/i"
        });
        var cr = ie && s && function() {
            var e = /./;
            e[J.match] = false;
            return RegExp(e) === e
        }();
        var lr = a(function() {
            return RegExp.prototype.toString.call({
                source: "abc"
            }) === "/abc/"
        });
        var pr = lr && a(function() {
            return RegExp.prototype.toString.call({
                source: "a",
                flags: "b"
            }) === "/a/b"
        });
        if (!lr || !pr) {
            var vr = RegExp.prototype.toString;
            h(RegExp.prototype, "toString", function toString() {
                var e = le.RequireObjectCoercible(this);
                if (ne.regex(e)) {
                    return t(vr, e)
                }
                var r = fe(e.source);
                var n = fe(e.flags);
                return "/" + r + "/" + n
            }, true);
            m.preserveToString(RegExp.prototype.toString, vr)
        }
        if (s && (!sr || cr)) {
            var yr = Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get;
            var hr = Object.getOwnPropertyDescriptor(RegExp.prototype, "source") || {};
            var br = function() {
                return this.source
            };
            var gr = le.IsCallable(hr.get) ? hr.get : br;
            var dr = RegExp;
            var mr = function() {
                return function RegExp(e, t) {
                    var r = le.IsRegExp(e);
                    var n = this instanceof RegExp;
                    if (!n && r && typeof t === "undefined" && e.constructor === RegExp) {
                        return e
                    }
                    var o = e;
                    var i = t;
                    if (ne.regex(e)) {
                        o = le.Call(gr, e);
                        i = typeof t === "undefined" ? le.Call(yr, e) : t;
                        return new RegExp(o, i)
                    } else if (r) {
                        o = e.source;
                        i = typeof t === "undefined" ? e.flags : t
                    }
                    return new dr(e, t)
                }
            }();
            Pe(dr, mr, {
                $input: true
            });
            RegExp = mr;
            m.redefine(S, "RegExp", mr)
        }
        if (s) {
            var Or = {
                input: "$_",
                lastMatch: "$&",
                lastParen: "$+",
                leftContext: "$`",
                rightContext: "$'"
            };
            l(n(Or), function(e) {
                if (e in RegExp && !(Or[e] in RegExp)) {
                    m.getter(RegExp, Or[e], function get() {
                        return RegExp[e]
                    })
                }
            })
        }
        Me(RegExp);
        var wr = 1 / Number.EPSILON;
        var jr = function roundTiesToEven(e) {
            return e + wr - wr
        };
        var Sr = Math.pow(2, -23);
        var Tr = Math.pow(2, 127) * (2 - Sr);
        var Ir = Math.pow(2, -126);
        var Er = Math.E;
        var Pr = Math.LOG2E;
        var Cr = Math.LOG10E;
        var Mr = Number.prototype.clz;
        delete Number.prototype.clz;
        var xr = {
            acosh: function acosh(e) {
                var t = Number(e);
                if (K(t) || e < 1) {
                    return NaN
                }
                if (t === 1) {
                    return 0
                }
                if (t === Infinity) {
                    return t
                }
                var r = 1 / (t * t);
                if (t < 2) {
                    return Q(t - 1 + z(1 - r) * t)
                }
                var n = t / 2;
                return Q(n + z(1 - r) * n - 1) + 1 / Pr
            },
            asinh: function asinh(e) {
                var t = Number(e);
                if (t === 0 || !T(t)) {
                    return t
                }
                var r = L(t);
                var n = r * r;
                var o = Y(t);
                if (r < 1) {
                    return o * Q(r + n / (z(n + 1) + 1))
                }
                return o * (Q(r / 2 + z(1 + 1 / n) * r / 2 - 1) + 1 / Pr)
            },
            atanh: function atanh(e) {
                var t = Number(e);
                if (t === 0) {
                    return t
                }
                if (t === -1) {
                    return -Infinity
                }
                if (t === 1) {
                    return Infinity
                }
                if (K(t) || t < -1 || t > 1) {
                    return NaN
                }
                var r = L(t);
                return Y(t) * Q(2 * r / (1 - r)) / 2
            },
            cbrt: function cbrt(e) {
                var t = Number(e);
                if (t === 0) {
                    return t
                }
                var r = t < 0;
                var n;
                if (r) {
                    t = -t
                }
                if (t === Infinity) {
                    n = Infinity
                } else {
                    n = F(D(t) / 3);
                    n = (t / (n * n) + 2 * n) / 3
                }
                return r ? -n : n
            },
            clz32: function clz32(e) {
                var t = Number(e);
                var r = le.ToUint32(t);
                if (r === 0) {
                    return 32
                }
                return Mr ? le.Call(Mr, r) : 31 - k(D(r + .5) * Pr)
            },
            cosh: function cosh(e) {
                var t = Number(e);
                if (t === 0) {
                    return 1
                }
                if (K(t)) {
                    return NaN
                }
                if (!T(t)) {
                    return Infinity
                }
                var r = F(L(t) - 1);
                return (r + 1 / (r * Er * Er)) * (Er / 2)
            },
            expm1: function expm1(e) {
                var t = Number(e);
                if (t === -Infinity) {
                    return -1
                }
                if (!T(t) || t === 0) {
                    return t
                }
                if (L(t) > .5) {
                    return F(t) - 1
                }
                var r = t;
                var n = 0;
                var o = 1;
                while (n + r !== n) {
                    n += r;
                    o += 1;
                    r *= t / o
                }
                return n
            },
            hypot: function hypot(e, t) {
                var r = 0;
                var n = 0;
                for (var o = 0; o < arguments.length; ++o) {
                    var i = L(Number(arguments[o]));
                    if (n < i) {
                        r *= n / i * (n / i);
                        r += 1;
                        n = i
                    } else {
                        r += i > 0 ? i / n * (i / n) : i
                    }
                }
                return n === Infinity ? Infinity : n * z(r)
            },
            log2: function log2(e) {
                return D(e) * Pr
            },
            log10: function log10(e) {
                return D(e) * Cr
            },
            log1p: Q,
            sign: Y,
            sinh: function sinh(e) {
                var t = Number(e);
                if (!T(t) || t === 0) {
                    return t
                }
                var r = L(t);
                if (r < 1) {
                    var n = Math.expm1(r);
                    return Y(t) * n * (1 + 1 / (n + 1)) / 2
                }
                var o = F(r - 1);
                return Y(t) * (o - 1 / (o * Er * Er)) * (Er / 2)
            },
            tanh: function tanh(e) {
                var t = Number(e);
                if (K(t) || t === 0) {
                    return t
                }
                if (t >= 20) {
                    return 1
                }
                if (t <= -20) {
                    return -1
                }
                return (Math.expm1(t) - Math.expm1(-t)) / (F(t) + F(-t))
            },
            trunc: function trunc(e) {
                var t = Number(e);
                return t < 0 ? -k(-t) : k(t)
            },
            imul: function imul(e, t) {
                var r = le.ToUint32(e);
                var n = le.ToUint32(t);
                var o = r >>> 16 & 65535;
                var i = r & 65535;
                var a = n >>> 16 & 65535;
                var u = n & 65535;
                return i * u + (o * u + i * a << 16 >>> 0) | 0
            },
            fround: function fround(e) {
                var t = Number(e);
                if (t === 0 || t === Infinity || t === -Infinity || K(t)) {
                    return t
                }
                var r = Y(t);
                var n = L(t);
                if (n < Ir) {
                    return r * jr(n / Ir / Sr) * Ir * Sr
                }
                var o = (1 + Sr / Number.EPSILON) * n;
                var i = o - (o - n);
                if (i > Tr || K(i)) {
                    return r * Infinity
                }
                return r * i
            }
        };
        var Nr = function withinULPDistance(e, t, r) {
            return L(1 - e / t) / Number.EPSILON < (r || 8)
        };
        b(Math, xr);
        h(Math, "sinh", xr.sinh, Math.sinh(710) === Infinity);
        h(Math, "cosh", xr.cosh, Math.cosh(710) === Infinity);
        h(Math, "log1p", xr.log1p, Math.log1p(-1e-17) !== -1e-17);
        h(Math, "asinh", xr.asinh, Math.asinh(-1e7) !== -Math.asinh(1e7));
        h(Math, "asinh", xr.asinh, Math.asinh(1e300) === Infinity);
        h(Math, "atanh", xr.atanh, Math.atanh(1e-300) === 0);
        h(Math, "tanh", xr.tanh, Math.tanh(-2e-17) !== -2e-17);
        h(Math, "acosh", xr.acosh, Math.acosh(Number.MAX_VALUE) === Infinity);
        h(Math, "acosh", xr.acosh, !Nr(Math.acosh(1 + Number.EPSILON), Math.sqrt(2 * Number.EPSILON)));
        h(Math, "cbrt", xr.cbrt, !Nr(Math.cbrt(1e-300), 1e-100));
        h(Math, "sinh", xr.sinh, Math.sinh(-2e-17) !== -2e-17);
        var Ar = Math.expm1(10);
        h(Math, "expm1", xr.expm1, Ar > 22025.465794806718 || Ar < 22025.465794806718);
        h(Math, "hypot", xr.hypot, Math.hypot(Infinity, NaN) !== Infinity);
        var Rr = Math.round;
        var _r = Math.round(.5 - Number.EPSILON / 4) === 0 && Math.round(-.5 + Number.EPSILON / 3.99) === 1;
        var kr = wr + 1;
        var Lr = 2 * wr - 1;
        var Fr = [kr, Lr].every(function(e) {
            return Math.round(e) === e
        });
        h(Math, "round", function round(e) {
            var t = k(e);
            var r = t === -1 ? -0 : t + 1;
            return e - t < .5 ? t : r
        }, !_r || !Fr);
        m.preserveToString(Math.round, Rr);
        var Dr = Math.imul;
        if (Math.imul(4294967295, 5) !== -5) {
            Math.imul = xr.imul;
            m.preserveToString(Math.imul, Dr)
        }
        if (Math.imul.length !== 2) {
            oe(Math, "imul", function imul(e, t) {
                return le.Call(Dr, Math, arguments)
            })
        }
        var zr = function() {
            var e = S.setTimeout;
            if (typeof e !== "function" && typeof e !== "object") {
                return
            }
            le.IsPromise = function(e) {
                if (!le.TypeIsObject(e)) {
                    return false
                }
                if (typeof e._promise === "undefined") {
                    return false
                }
                return true
            };
            var r = function(e) {
                if (!le.IsConstructor(e)) {
                    throw new TypeError("Bad promise constructor")
                }
                var t = this;
                var r = function(e, r) {
                    if (t.resolve !== void 0 || t.reject !== void 0) {
                        throw new TypeError("Bad Promise implementation!")
                    }
                    t.resolve = e;
                    t.reject = r
                };
                t.resolve = void 0;
                t.reject = void 0;
                t.promise = new e(r);
                if (!(le.IsCallable(t.resolve) && le.IsCallable(t.reject))) {
                    throw new TypeError("Bad promise constructor")
                }
            };
            var n;
            if (typeof window !== "undefined" && le.IsCallable(window.postMessage)) {
                n = function() {
                    var e = [];
                    var t = "zero-timeout-message";
                    var r = function(r) {
                        M(e, r);
                        window.postMessage(t, "*")
                    };
                    var n = function(r) {
                        if (r.source === window && r.data === t) {
                            r.stopPropagation();
                            if (e.length === 0) {
                                return
                            }
                            var n = A(e);
                            n()
                        }
                    };
                    window.addEventListener("message", n, true);
                    return r
                }
            }
            var o = function() {
                var e = S.Promise;
                var t = e && e.resolve && e.resolve();
                return t && function(e) {
                    return t.then(e)
                }
            };
            var i = le.IsCallable(S.setImmediate) ? S.setImmediate : typeof process === "object" && process.nextTick ? process.nextTick : o() || (le.IsCallable(n) ? n() : function(t) {
                e(t, 0)
            });
            var a = function(e) {
                return e
            };
            var u = function(e) {
                throw e
            };
            var f = 0;
            var s = 1;
            var c = 2;
            var l = 0;
            var p = 1;
            var v = 2;
            var y = {};
            var h = function(e, t, r) {
                i(function() {
                    g(e, t, r)
                })
            };
            var g = function(e, t, r) {
                var n, o;
                if (t === y) {
                    return e(r)
                }
                try {
                    n = e(r);
                    o = t.resolve
                } catch (i) {
                    n = i;
                    o = t.reject
                }
                o(n)
            };
            var d = function(e, t) {
                var r = e._promise;
                var n = r.reactionLength;
                if (n > 0) {
                    h(r.fulfillReactionHandler0, r.reactionCapability0, t);
                    r.fulfillReactionHandler0 = void 0;
                    r.rejectReactions0 = void 0;
                    r.reactionCapability0 = void 0;
                    if (n > 1) {
                        for (var o = 1, i = 0; o < n; o++, i += 3) {
                            h(r[i + l], r[i + v], t);
                            e[i + l] = void 0;
                            e[i + p] = void 0;
                            e[i + v] = void 0
                        }
                    }
                }
                r.result = t;
                r.state = s;
                r.reactionLength = 0
            };
            var m = function(e, t) {
                var r = e._promise;
                var n = r.reactionLength;
                if (n > 0) {
                    h(r.rejectReactionHandler0, r.reactionCapability0, t);
                    r.fulfillReactionHandler0 = void 0;
                    r.rejectReactions0 = void 0;
                    r.reactionCapability0 = void 0;
                    if (n > 1) {
                        for (var o = 1, i = 0; o < n; o++, i += 3) {
                            h(r[i + p], r[i + v], t);
                            e[i + l] = void 0;
                            e[i + p] = void 0;
                            e[i + v] = void 0
                        }
                    }
                }
                r.result = t;
                r.state = c;
                r.reactionLength = 0
            };
            var O = function(e) {
                var t = false;
                var r = function(r) {
                    var n;
                    if (t) {
                        return
                    }
                    t = true;
                    if (r === e) {
                        return m(e, new TypeError("Self resolution"))
                    }
                    if (!le.TypeIsObject(r)) {
                        return d(e, r)
                    }
                    try {
                        n = r.then
                    } catch (o) {
                        return m(e, o)
                    }
                    if (!le.IsCallable(n)) {
                        return d(e, r)
                    }
                    i(function() {
                        j(e, r, n)
                    })
                };
                var n = function(r) {
                    if (t) {
                        return
                    }
                    t = true;
                    return m(e, r)
                };
                return {
                    resolve: r,
                    reject: n
                }
            };
            var w = function(e, r, n, o) {
                if (e === I) {
                    t(e, r, n, o, y)
                } else {
                    t(e, r, n, o)
                }
            };
            var j = function(e, t, r) {
                var n = O(e);
                var o = n.resolve;
                var i = n.reject;
                try {
                    w(r, t, o, i)
                } catch (a) {
                    i(a)
                }
            };
            var T, I;
            var E = function() {
                var e = function Promise(t) {
                    if (!(this instanceof e)) {
                        throw new TypeError('Constructor Promise requires "new"')
                    }
                    if (this && this._promise) {
                        throw new TypeError("Bad construction")
                    }
                    if (!le.IsCallable(t)) {
                        throw new TypeError("not a valid resolver")
                    }
                    var r = Re(this, e, T, {
                        _promise: {
                            result: void 0,
                            state: f,
                            reactionLength: 0,
                            fulfillReactionHandler0: void 0,
                            rejectReactionHandler0: void 0,
                            reactionCapability0: void 0
                        }
                    });
                    var n = O(r);
                    var o = n.reject;
                    try {
                        t(n.resolve, o)
                    } catch (i) {
                        o(i)
                    }
                    return r
                };
                return e
            }();
            T = E.prototype;
            var P = function(e, t, r, n) {
                var o = false;
                return function(i) {
                    if (o) {
                        return
                    }
                    o = true;
                    t[e] = i;
                    if (--n.count === 0) {
                        var a = r.resolve;
                        a(t)
                    }
                }
            };
            var C = function(e, t, r) {
                var n = e.iterator;
                var o = [];
                var i = {
                    count: 1
                };
                var a, u;
                var f = 0;
                while (true) {
                    try {
                        a = le.IteratorStep(n);
                        if (a === false) {
                            e.done = true;
                            break
                        }
                        u = a.value
                    } catch (s) {
                        e.done = true;
                        throw s
                    }
                    o[f] = void 0;
                    var c = t.resolve(u);
                    var l = P(f, o, r, i);
                    i.count += 1;
                    w(c.then, c, l, r.reject);
                    f += 1
                }
                if (--i.count === 0) {
                    var p = r.resolve;
                    p(o)
                }
                return r.promise
            };
            var x = function(e, t, r) {
                var n = e.iterator;
                var o, i, a;
                while (true) {
                    try {
                        o = le.IteratorStep(n);
                        if (o === false) {
                            e.done = true;
                            break
                        }
                        i = o.value
                    } catch (u) {
                        e.done = true;
                        throw u
                    }
                    a = t.resolve(i);
                    w(a.then, a, r.resolve, r.reject)
                }
                return r.promise
            };
            b(E, {
                all: function all(e) {
                    var t = this;
                    if (!le.TypeIsObject(t)) {
                        throw new TypeError("Promise is not object")
                    }
                    var n = new r(t);
                    var o, i;
                    try {
                        o = le.GetIterator(e);
                        i = {
                            iterator: o,
                            done: false
                        };
                        return C(i, t, n)
                    } catch (a) {
                        var u = a;
                        if (i && !i.done) {
                            try {
                                le.IteratorClose(o, true)
                            } catch (f) {
                                u = f
                            }
                        }
                        var s = n.reject;
                        s(u);
                        return n.promise
                    }
                },
                race: function race(e) {
                    var t = this;
                    if (!le.TypeIsObject(t)) {
                        throw new TypeError("Promise is not object")
                    }
                    var n = new r(t);
                    var o, i;
                    try {
                        o = le.GetIterator(e);
                        i = {
                            iterator: o,
                            done: false
                        };
                        return x(i, t, n)
                    } catch (a) {
                        var u = a;
                        if (i && !i.done) {
                            try {
                                le.IteratorClose(o, true)
                            } catch (f) {
                                u = f
                            }
                        }
                        var s = n.reject;
                        s(u);
                        return n.promise
                    }
                },
                reject: function reject(e) {
                    var t = this;
                    if (!le.TypeIsObject(t)) {
                        throw new TypeError("Bad promise constructor")
                    }
                    var n = new r(t);
                    var o = n.reject;
                    o(e);
                    return n.promise
                },
                resolve: function resolve(e) {
                    var t = this;
                    if (!le.TypeIsObject(t)) {
                        throw new TypeError("Bad promise constructor")
                    }
                    if (le.IsPromise(e)) {
                        var n = e.constructor;
                        if (n === t) {
                            return e
                        }
                    }
                    var o = new r(t);
                    var i = o.resolve;
                    i(e);
                    return o.promise
                }
            });
            b(T, {
                "catch": function(e) {
                    return this.then(null, e)
                },
                then: function then(e, t) {
                    var n = this;
                    if (!le.IsPromise(n)) {
                        throw new TypeError("not a promise")
                    }
                    var o = le.SpeciesConstructor(n, E);
                    var i;
                    var b = arguments.length > 2 && arguments[2] === y;
                    if (b && o === E) {
                        i = y
                    } else {
                        i = new r(o)
                    }
                    var g = le.IsCallable(e) ? e : a;
                    var d = le.IsCallable(t) ? t : u;
                    var m = n._promise;
                    var O;
                    if (m.state === f) {
                        if (m.reactionLength === 0) {
                            m.fulfillReactionHandler0 = g;
                            m.rejectReactionHandler0 = d;
                            m.reactionCapability0 = i
                        } else {
                            var w = 3 * (m.reactionLength - 1);
                            m[w + l] = g;
                            m[w + p] = d;
                            m[w + v] = i
                        }
                        m.reactionLength += 1
                    } else if (m.state === s) {
                        O = m.result;
                        h(g, i, O)
                    } else if (m.state === c) {
                        O = m.result;
                        h(d, i, O)
                    } else {
                        throw new TypeError("unexpected Promise state")
                    }
                    return i.promise
                }
            });
            y = new r(E);
            I = T.then;
            return E
        }();
        if (S.Promise) {
            delete S.Promise.accept;
            delete S.Promise.defer;
            delete S.Promise.prototype.chain
        }
        if (typeof zr === "function") {
            b(S, {
                Promise: zr
            });
            var qr = w(S.Promise, function(e) {
                return e.resolve(42).then(function() {}) instanceof e
            });
            var Wr = !i(function() {
                return S.Promise.reject(42).then(null, 5).then(null, G)
            });
            var Gr = i(function() {
                return S.Promise.call(3, G)
            });
            var Hr = function(e) {
                var t = e.resolve(5);
                t.constructor = {};
                var r = e.resolve(t);
                try {
                    r.then(null, G).then(null, G)
                } catch (n) {
                    return true
                }
                return t === r
            }(S.Promise);
            var Vr = s && function() {
                var e = 0;
                var t = Object.defineProperty({}, "then", {
                    get: function() {
                        e += 1
                    }
                });
                Promise.resolve(t);
                return e === 1
            }();
            var Br = function BadResolverPromise(e) {
                var t = new Promise(e);
                e(3, function() {});
                this.then = t.then;
                this.constructor = BadResolverPromise
            };
            Br.prototype = Promise.prototype;
            Br.all = Promise.all;
            var Ur = a(function() {
                return !!Br.all([1, 2])
            });
            if (!qr || !Wr || !Gr || Hr || !Vr || Ur) {
                Promise = zr;
                oe(S, "Promise", zr)
            }
            if (Promise.all.length !== 1) {
                var $r = Promise.all;
                oe(Promise, "all", function all(e) {
                    return le.Call($r, this, arguments)
                })
            }
            if (Promise.race.length !== 1) {
                var Jr = Promise.race;
                oe(Promise, "race", function race(e) {
                    return le.Call(Jr, this, arguments)
                })
            }
            if (Promise.resolve.length !== 1) {
                var Xr = Promise.resolve;
                oe(Promise, "resolve", function resolve(e) {
                    return le.Call(Xr, this, arguments)
                })
            }
            if (Promise.reject.length !== 1) {
                var Kr = Promise.reject;
                oe(Promise, "reject", function reject(e) {
                    return le.Call(Kr, this, arguments)
                })
            }
            Nt(Promise, "all");
            Nt(Promise, "race");
            Nt(Promise, "resolve");
            Nt(Promise, "reject");
            Me(Promise)
        }
        var Zr = function(e) {
            var t = n(p(e, function(e, t) {
                e[t] = true;
                return e
            }, {}));
            return e.join(":") === t.join(":")
        };
        var Yr = Zr(["z", "a", "bb"]);
        var Qr = Zr(["z", 1, "a", "3", 2]);
        if (s) {
            var en = function fastkey(e, t) {
                if (!t && !Yr) {
                    return null
                }
                if (ce(e)) {
                    return "^" + le.ToString(e)
                } else if (typeof e === "string") {
                    return "$" + e
                } else if (typeof e === "number") {
                    if (!Qr) {
                        return "n" + e
                    }
                    return e
                } else if (typeof e === "boolean") {
                    return "b" + e
                }
                return null
            };
            var tn = function emptyObject() {
                return Object.create ? Object.create(null) : {}
            };
            var rn = function addIterableToMap(e, n, o) {
                if (r(o) || ne.string(o)) {
                    l(o, function(e) {
                        if (!le.TypeIsObject(e)) {
                            throw new TypeError("Iterator value " + e + " is not an entry object")
                        }
                        n.set(e[0], e[1])
                    })
                } else if (o instanceof e) {
                    t(e.prototype.forEach, o, function(e, t) {
                        n.set(t, e)
                    })
                } else {
                    var i, a;
                    if (!ce(o)) {
                        a = n.set;
                        if (!le.IsCallable(a)) {
                            throw new TypeError("bad map")
                        }
                        i = le.GetIterator(o)
                    }
                    if (typeof i !== "undefined") {
                        while (true) {
                            var u = le.IteratorStep(i);
                            if (u === false) {
                                break
                            }
                            var f = u.value;
                            try {
                                if (!le.TypeIsObject(f)) {
                                    throw new TypeError("Iterator value " + f + " is not an entry object")
                                }
                                t(a, n, f[0], f[1])
                            } catch (s) {
                                le.IteratorClose(i, true);
                                throw s
                            }
                        }
                    }
                }
            };
            var nn = function addIterableToSet(e, n, o) {
                if (r(o) || ne.string(o)) {
                    l(o, function(e) {
                        n.add(e)
                    })
                } else if (o instanceof e) {
                    t(e.prototype.forEach, o, function(e) {
                        n.add(e)
                    })
                } else {
                    var i, a;
                    if (!ce(o)) {
                        a = n.add;
                        if (!le.IsCallable(a)) {
                            throw new TypeError("bad set")
                        }
                        i = le.GetIterator(o)
                    }
                    if (typeof i !== "undefined") {
                        while (true) {
                            var u = le.IteratorStep(i);
                            if (u === false) {
                                break
                            }
                            var f = u.value;
                            try {
                                t(a, n, f)
                            } catch (s) {
                                le.IteratorClose(i, true);
                                throw s
                            }
                        }
                    }
                }
            };
            var on = {
                Map: function() {
                    var e = {};
                    var r = function MapEntry(e, t) {
                        this.key = e;
                        this.value = t;
                        this.next = null;
                        this.prev = null
                    };
                    r.prototype.isRemoved = function isRemoved() {
                        return this.key === e
                    };
                    var n = function isMap(e) {
                        return !!e._es6map
                    };
                    var o = function requireMapSlot(e, t) {
                        if (!le.TypeIsObject(e) || !n(e)) {
                            throw new TypeError("Method Map.prototype." + t + " called on incompatible receiver " + le.ToString(e))
                        }
                    };
                    var i = function MapIterator(e, t) {
                        o(e, "[[MapIterator]]");
                        h(this, "head", e._head);
                        h(this, "i", this.head);
                        h(this, "kind", t)
                    };
                    i.prototype = {
                        isMapIterator: true,
                        next: function next() {
                            if (!this.isMapIterator) {
                                throw new TypeError("Not a MapIterator")
                            }
                            var e = this.i;
                            var t = this.kind;
                            var r = this.head;
                            if (typeof this.i === "undefined") {
                                return Ze()
                            }
                            while (e.isRemoved() && e !== r) {
                                e = e.prev
                            }
                            var n;
                            while (e.next !== r) {
                                e = e.next;
                                if (!e.isRemoved()) {
                                    if (t === "key") {
                                        n = e.key
                                    } else if (t === "value") {
                                        n = e.value
                                    } else {
                                        n = [e.key, e.value]
                                    }
                                    this.i = e;
                                    return Ze(n)
                                }
                            }
                            this.i = void 0;
                            return Ze()
                        }
                    };
                    xe(i.prototype);
                    var a;
                    var u = function Map() {
                        if (!(this instanceof Map)) {
                            throw new TypeError('Constructor Map requires "new"')
                        }
                        if (this && this._es6map) {
                            throw new TypeError("Bad construction")
                        }
                        var e = Re(this, Map, a, {
                            _es6map: true,
                            _head: null,
                            _map: H ? new H : null,
                            _size: 0,
                            _storage: tn()
                        });
                        var t = new r(null, null);
                        t.next = t.prev = t;
                        e._head = t;
                        if (arguments.length > 0) {
                            rn(Map, e, arguments[0])
                        }
                        return e
                    };
                    a = u.prototype;
                    m.getter(a, "size", function() {
                        if (typeof this._size === "undefined") {
                            throw new TypeError("size method called on incompatible Map")
                        }
                        return this._size
                    });
                    b(a, {
                        get: function get(e) {
                            o(this, "get");
                            var t;
                            var r = en(e, true);
                            if (r !== null) {
                                t = this._storage[r];
                                if (t) {
                                    return t.value
                                }
                                return
                            }
                            if (this._map) {
                                t = B.call(this._map, e);
                                if (t) {
                                    return t.value
                                }
                                return
                            }
                            var n = this._head;
                            var i = n;
                            while ((i = i.next) !== n) {
                                if (le.SameValueZero(i.key, e)) {
                                    return i.value
                                }
                            }
                        },
                        has: function has(e) {
                            o(this, "has");
                            var t = en(e, true);
                            if (t !== null) {
                                return typeof this._storage[t] !== "undefined"
                            }
                            if (this._map) {
                                return U.call(this._map, e)
                            }
                            var r = this._head;
                            var n = r;
                            while ((n = n.next) !== r) {
                                if (le.SameValueZero(n.key, e)) {
                                    return true
                                }
                            }
                            return false
                        },
                        set: function set(e, t) {
                            o(this, "set");
                            var n = this._head;
                            var i = n;
                            var a;
                            var u = en(e, true);
                            if (u !== null) {
                                if (typeof this._storage[u] !== "undefined") {
                                    this._storage[u].value = t;
                                    return this
                                }
                                a = this._storage[u] = new r(e, t);
                                i = n.prev
                            } else if (this._map) {
                                if (U.call(this._map, e)) {
                                    B.call(this._map, e).value = t
                                } else {
                                    a = new r(e, t);
                                    $.call(this._map, e, a);
                                    i = n.prev
                                }
                            }
                            while ((i = i.next) !== n) {
                                if (le.SameValueZero(i.key, e)) {
                                    i.value = t;
                                    return this
                                }
                            }
                            a = a || new r(e, t);
                            if (le.SameValue(-0, e)) {
                                a.key = +0
                            }
                            a.next = this._head;
                            a.prev = this._head.prev;
                            a.prev.next = a;
                            a.next.prev = a;
                            this._size += 1;
                            return this
                        },
                        "delete": function(t) {
                            o(this, "delete");
                            var r = this._head;
                            var n = r;
                            var i = en(t, true);
                            if (i !== null) {
                                if (typeof this._storage[i] === "undefined") {
                                    return false
                                }
                                n = this._storage[i].prev;
                                delete this._storage[i]
                            } else if (this._map) {
                                if (!U.call(this._map, t)) {
                                    return false
                                }
                                n = B.call(this._map, t).prev;
                                V.call(this._map, t)
                            }
                            while ((n = n.next) !== r) {
                                if (le.SameValueZero(n.key, t)) {
                                    n.key = e;
                                    n.value = e;
                                    n.prev.next = n.next;
                                    n.next.prev = n.prev;
                                    this._size -= 1;
                                    return true
                                }
                            }
                            return false
                        },
                        clear: function clear() {
                            o(this, "clear");
                            this._map = H ? new H : null;
                            this._size = 0;
                            this._storage = tn();
                            var t = this._head;
                            var r = t;
                            var n = r.next;
                            while ((r = n) !== t) {
                                r.key = e;
                                r.value = e;
                                n = r.next;
                                r.next = r.prev = t
                            }
                            t.next = t.prev = t
                        },
                        keys: function keys() {
                            o(this, "keys");
                            return new i(this, "key")
                        },
                        values: function values() {
                            o(this, "values");
                            return new i(this, "value")
                        },
                        entries: function entries() {
                            o(this, "entries");
                            return new i(this, "key+value")
                        },
                        forEach: function forEach(e) {
                            o(this, "forEach");
                            var r = arguments.length > 1 ? arguments[1] : null;
                            var n = this.entries();
                            for (var i = n.next(); !i.done; i = n.next()) {
                                if (r) {
                                    t(e, r, i.value[1], i.value[0], this)
                                } else {
                                    e(i.value[1], i.value[0], this)
                                }
                            }
                        }
                    });
                    xe(a, a.entries);
                    return u
                }(),
                Set: function() {
                    var e = function isSet(e) {
                        return e._es6set && typeof e._storage !== "undefined"
                    };
                    var r = function requireSetSlot(t, r) {
                        if (!le.TypeIsObject(t) || !e(t)) {
                            throw new TypeError("Set.prototype." + r + " called on incompatible receiver " + le.ToString(t))
                        }
                    };
                    var o;
                    var i = function Set() {
                        if (!(this instanceof Set)) {
                            throw new TypeError('Constructor Set requires "new"')
                        }
                        if (this && this._es6set) {
                            throw new TypeError("Bad construction")
                        }
                        var e = Re(this, Set, o, {
                            _es6set: true,
                            "[[SetData]]": null,
                            _storage: tn()
                        });
                        if (!e._es6set) {
                            throw new TypeError("bad set")
                        }
                        if (arguments.length > 0) {
                            nn(Set, e, arguments[0])
                        }
                        return e
                    };
                    o = i.prototype;
                    var a = function(e) {
                        var t = e;
                        if (t === "^null") {
                            return null
                        } else if (t === "^undefined") {
                            return void 0
                        }
                        var r = t.charAt(0);
                        if (r === "$") {
                            return C(t, 1)
                        } else if (r === "n") {
                            return +C(t, 1)
                        } else if (r === "b") {
                            return t === "btrue"
                        }
                        return +t
                    };
                    var u = function ensureMap(e) {
                        if (!e["[[SetData]]"]) {
                            var t = new on.Map;
                            e["[[SetData]]"] = t;
                            l(n(e._storage), function(e) {
                                var r = a(e);
                                t.set(r, r)
                            });
                            e["[[SetData]]"] = t
                        }
                        e._storage = null
                    };
                    m.getter(i.prototype, "size", function() {
                        r(this, "size");
                        if (this._storage) {
                            return n(this._storage).length
                        }
                        u(this);
                        return this["[[SetData]]"].size
                    });
                    b(i.prototype, {
                        has: function has(e) {
                            r(this, "has");
                            var t;
                            if (this._storage && (t = en(e)) !== null) {
                                return !!this._storage[t]
                            }
                            u(this);
                            return this["[[SetData]]"].has(e)
                        },
                        add: function add(e) {
                            r(this, "add");
                            var t;
                            if (this._storage && (t = en(e)) !== null) {
                                this._storage[t] = true;
                                return this
                            }
                            u(this);
                            this["[[SetData]]"].set(e, e);
                            return this
                        },
                        "delete": function(e) {
                            r(this, "delete");
                            var t;
                            if (this._storage && (t = en(e)) !== null) {
                                var n = q(this._storage, t);
                                return delete this._storage[t] && n
                            }
                            u(this);
                            return this["[[SetData]]"]["delete"](e)
                        },
                        clear: function clear() {
                            r(this, "clear");
                            if (this._storage) {
                                this._storage = tn()
                            }
                            if (this["[[SetData]]"]) {
                                this["[[SetData]]"].clear()
                            }
                        },
                        values: function values() {
                            r(this, "values");
                            u(this);
                            return new f(this["[[SetData]]"].values())
                        },
                        entries: function entries() {
                            r(this, "entries");
                            u(this);
                            return new f(this["[[SetData]]"].entries())
                        },
                        forEach: function forEach(e) {
                            r(this, "forEach");
                            var n = arguments.length > 1 ? arguments[1] : null;
                            var o = this;
                            u(o);
                            this["[[SetData]]"].forEach(function(r, i) {
                                if (n) {
                                    t(e, n, i, i, o)
                                } else {
                                    e(i, i, o)
                                }
                            })
                        }
                    });
                    h(i.prototype, "keys", i.prototype.values, true);
                    xe(i.prototype, i.prototype.values);
                    var f = function SetIterator(e) {
                        h(this, "it", e)
                    };
                    f.prototype = {
                        isSetIterator: true,
                        next: function next() {
                            if (!this.isSetIterator) {
                                throw new TypeError("Not a SetIterator")
                            }
                            return this.it.next()
                        }
                    };
                    xe(f.prototype);
                    return i
                }()
            };
            var an = S.Set && !Set.prototype["delete"] && Set.prototype.remove && Set.prototype.items && Set.prototype.map && Array.isArray((new Set).keys);
            if (an) {
                S.Set = on.Set
            }
            if (S.Map || S.Set) {
                var un = a(function() {
                    return new Map([
                        [1, 2]
                    ]).get(1) === 2
                });
                if (!un) {
                    S.Map = function Map() {
                        if (!(this instanceof Map)) {
                            throw new TypeError('Constructor Map requires "new"')
                        }
                        var e = new H;
                        if (arguments.length > 0) {
                            rn(Map, e, arguments[0])
                        }
                        delete e.constructor;
                        Object.setPrototypeOf(e, S.Map.prototype);
                        return e
                    };
                    S.Map.prototype = O(H.prototype);
                    h(S.Map.prototype, "constructor", S.Map, true);
                    m.preserveToString(S.Map, H)
                }
                var fn = new Map;
                var sn = function() {
                    var e = new Map([
                        [1, 0],
                        [2, 0],
                        [3, 0],
                        [4, 0]
                    ]);
                    e.set(-0, e);
                    return e.get(0) === e && e.get(-0) === e && e.has(0) && e.has(-0)
                }();
                var cn = fn.set(1, 2) === fn;
                if (!sn || !cn) {
                    oe(Map.prototype, "set", function set(e, r) {
                        t($, this, e === 0 ? 0 : e, r);
                        return this
                    })
                }
                if (!sn) {
                    b(Map.prototype, {
                        get: function get(e) {
                            return t(B, this, e === 0 ? 0 : e)
                        },
                        has: function has(e) {
                            return t(U, this, e === 0 ? 0 : e)
                        }
                    }, true);
                    m.preserveToString(Map.prototype.get, B);
                    m.preserveToString(Map.prototype.has, U)
                }
                var ln = new Set;
                var pn = Set.prototype["delete"] && Set.prototype.add && Set.prototype.has && function(e) {
                    e["delete"](0);
                    e.add(-0);
                    return !e.has(0)
                }(ln);
                var vn = ln.add(1) === ln;
                if (!pn || !vn) {
                    var yn = Set.prototype.add;
                    Set.prototype.add = function add(e) {
                        t(yn, this, e === 0 ? 0 : e);
                        return this
                    };
                    m.preserveToString(Set.prototype.add, yn)
                }
                if (!pn) {
                    var hn = Set.prototype.has;
                    Set.prototype.has = function has(e) {
                        return t(hn, this, e === 0 ? 0 : e)
                    };
                    m.preserveToString(Set.prototype.has, hn);
                    var bn = Set.prototype["delete"];
                    Set.prototype["delete"] = function SetDelete(e) {
                        return t(bn, this, e === 0 ? 0 : e)
                    };
                    m.preserveToString(Set.prototype["delete"], bn)
                }
                var gn = w(S.Map, function(e) {
                    var t = new e([]);
                    t.set(42, 42);
                    return t instanceof e
                });
                var dn = Object.setPrototypeOf && !gn;
                var mn = function() {
                    try {
                        return !(S.Map() instanceof S.Map)
                    } catch (e) {
                        return e instanceof TypeError
                    }
                }();
                if (S.Map.length !== 0 || dn || !mn) {
                    S.Map = function Map() {
                        if (!(this instanceof Map)) {
                            throw new TypeError('Constructor Map requires "new"')
                        }
                        var e = new H;
                        if (arguments.length > 0) {
                            rn(Map, e, arguments[0])
                        }
                        delete e.constructor;
                        Object.setPrototypeOf(e, Map.prototype);
                        return e
                    };
                    S.Map.prototype = H.prototype;
                    h(S.Map.prototype, "constructor", S.Map, true);
                    m.preserveToString(S.Map, H)
                }
                var On = w(S.Set, function(e) {
                    var t = new e([]);
                    t.add(42, 42);
                    return t instanceof e
                });
                var wn = Object.setPrototypeOf && !On;
                var jn = function() {
                    try {
                        return !(S.Set() instanceof S.Set)
                    } catch (e) {
                        return e instanceof TypeError
                    }
                }();
                if (S.Set.length !== 0 || wn || !jn) {
                    var Sn = S.Set;
                    S.Set = function Set() {
                        if (!(this instanceof Set)) {
                            throw new TypeError('Constructor Set requires "new"')
                        }
                        var e = new Sn;
                        if (arguments.length > 0) {
                            nn(Set, e, arguments[0])
                        }
                        delete e.constructor;
                        Object.setPrototypeOf(e, Set.prototype);
                        return e
                    };
                    S.Set.prototype = Sn.prototype;
                    h(S.Set.prototype, "constructor", S.Set, true);
                    m.preserveToString(S.Set, Sn)
                }
                var Tn = new S.Map;
                var In = !a(function() {
                    return Tn.keys().next().done
                });
                if (typeof S.Map.prototype.clear !== "function" || (new S.Set).size !== 0 || Tn.size !== 0 || typeof S.Map.prototype.keys !== "function" || typeof S.Set.prototype.keys !== "function" || typeof S.Map.prototype.forEach !== "function" || typeof S.Set.prototype.forEach !== "function" || u(S.Map) || u(S.Set) || typeof Tn.keys().next !== "function" || In || !gn) {
                    b(S, {
                        Map: on.Map,
                        Set: on.Set
                    }, true)
                }
                if (S.Set.prototype.keys !== S.Set.prototype.values) {
                    h(S.Set.prototype, "keys", S.Set.prototype.values, true)
                }
                xe(Object.getPrototypeOf((new S.Map).keys()));
                xe(Object.getPrototypeOf((new S.Set).keys()));
                if (c && S.Set.prototype.has.name !== "has") {
                    var En = S.Set.prototype.has;
                    oe(S.Set.prototype, "has", function has(e) {
                        return t(En, this, e)
                    })
                }
            }
            b(S, on);
            Me(S.Map);
            Me(S.Set)
        }
        var Pn = function throwUnlessTargetIsObject(e) {
            if (!le.TypeIsObject(e)) {
                throw new TypeError("target must be an object")
            }
        };
        var Cn = {
            apply: function apply() {
                return le.Call(le.Call, null, arguments)
            },
            construct: function construct(e, t) {
                if (!le.IsConstructor(e)) {
                    throw new TypeError("First argument must be a constructor.")
                }
                var r = arguments.length > 2 ? arguments[2] : e;
                if (!le.IsConstructor(r)) {
                    throw new TypeError("new.target must be a constructor.")
                }
                return le.Construct(e, t, r, "internal")
            },
            deleteProperty: function deleteProperty(e, t) {
                Pn(e);
                if (s) {
                    var r = Object.getOwnPropertyDescriptor(e, t);
                    if (r && !r.configurable) {
                        return false
                    }
                }
                return delete e[t]
            },
            has: function has(e, t) {
                Pn(e);
                return t in e
            }
        };
        if (Object.getOwnPropertyNames) {
            Object.assign(Cn, {
                ownKeys: function ownKeys(e) {
                    Pn(e);
                    var t = Object.getOwnPropertyNames(e);
                    if (le.IsCallable(Object.getOwnPropertySymbols)) {
                        x(t, Object.getOwnPropertySymbols(e))
                    }
                    return t
                }
            })
        }
        var Mn = function ConvertExceptionToBoolean(e) {
            return !i(e)
        };
        if (Object.preventExtensions) {
            Object.assign(Cn, {
                isExtensible: function isExtensible(e) {
                    Pn(e);
                    return Object.isExtensible(e)
                },
                preventExtensions: function preventExtensions(e) {
                    Pn(e);
                    return Mn(function() {
                        return Object.preventExtensions(e)
                    })
                }
            })
        }
        if (s) {
            var xn = function get(e, t, r) {
                var n = Object.getOwnPropertyDescriptor(e, t);
                if (!n) {
                    var o = Object.getPrototypeOf(e);
                    if (o === null) {
                        return void 0
                    }
                    return xn(o, t, r)
                }
                if ("value" in n) {
                    return n.value
                }
                if (n.get) {
                    return le.Call(n.get, r)
                }
                return void 0
            };
            var Nn = function set(e, r, n, o) {
                var i = Object.getOwnPropertyDescriptor(e, r);
                if (!i) {
                    var a = Object.getPrototypeOf(e);
                    if (a !== null) {
                        return Nn(a, r, n, o)
                    }
                    i = {
                        value: void 0,
                        writable: true,
                        enumerable: true,
                        configurable: true
                    }
                }
                if ("value" in i) {
                    if (!i.writable) {
                        return false
                    }
                    if (!le.TypeIsObject(o)) {
                        return false
                    }
                    var u = Object.getOwnPropertyDescriptor(o, r);
                    if (u) {
                        return ue.defineProperty(o, r, {
                            value: n
                        })
                    }
                    return ue.defineProperty(o, r, {
                        value: n,
                        writable: true,
                        enumerable: true,
                        configurable: true
                    })
                }
                if (i.set) {
                    t(i.set, o, n);
                    return true
                }
                return false
            };
            Object.assign(Cn, {
                defineProperty: function defineProperty(e, t, r) {
                    Pn(e);
                    return Mn(function() {
                        return Object.defineProperty(e, t, r)
                    })
                },
                getOwnPropertyDescriptor: function getOwnPropertyDescriptor(e, t) {
                    Pn(e);
                    return Object.getOwnPropertyDescriptor(e, t)
                },
                get: function get(e, t) {
                    Pn(e);
                    var r = arguments.length > 2 ? arguments[2] : e;
                    return xn(e, t, r)
                },
                set: function set(e, t, r) {
                    Pn(e);
                    var n = arguments.length > 3 ? arguments[3] : e;
                    return Nn(e, t, r, n)
                }
            })
        }
        if (Object.getPrototypeOf) {
            var An = Object.getPrototypeOf;
            Cn.getPrototypeOf = function getPrototypeOf(e) {
                Pn(e);
                return An(e)
            }
        }
        if (Object.setPrototypeOf && Cn.getPrototypeOf) {
            var Rn = function(e, t) {
                var r = t;
                while (r) {
                    if (e === r) {
                        return true
                    }
                    r = Cn.getPrototypeOf(r)
                }
                return false
            };
            Object.assign(Cn, {
                setPrototypeOf: function setPrototypeOf(e, t) {
                    Pn(e);
                    if (t !== null && !le.TypeIsObject(t)) {
                        throw new TypeError("proto must be an object or null")
                    }
                    if (t === ue.getPrototypeOf(e)) {
                        return true
                    }
                    if (ue.isExtensible && !ue.isExtensible(e)) {
                        return false
                    }
                    if (Rn(e, t)) {
                        return false
                    }
                    Object.setPrototypeOf(e, t);
                    return true
                }
            })
        }
        var _n = function(e, t) {
            if (!le.IsCallable(S.Reflect[e])) {
                h(S.Reflect, e, t)
            } else {
                var r = a(function() {
                    S.Reflect[e](1);
                    S.Reflect[e](NaN);
                    S.Reflect[e](true);
                    return true
                });
                if (r) {
                    oe(S.Reflect, e, t)
                }
            }
        };
        Object.keys(Cn).forEach(function(e) {
            _n(e, Cn[e])
        });
        var kn = S.Reflect.getPrototypeOf;
        if (c && kn && kn.name !== "getPrototypeOf") {
            oe(S.Reflect, "getPrototypeOf", function getPrototypeOf(e) {
                return t(kn, S.Reflect, e)
            })
        }
        if (S.Reflect.setPrototypeOf) {
            if (a(function() {
                    S.Reflect.setPrototypeOf(1, {});
                    return true
                })) {
                oe(S.Reflect, "setPrototypeOf", Cn.setPrototypeOf)
            }
        }
        if (S.Reflect.defineProperty) {
            if (!a(function() {
                    var e = !S.Reflect.defineProperty(1, "test", {
                        value: 1
                    });
                    var t = typeof Object.preventExtensions !== "function" || !S.Reflect.defineProperty(Object.preventExtensions({}), "test", {});
                    return e && t
                })) {
                oe(S.Reflect, "defineProperty", Cn.defineProperty)
            }
        }
        if (S.Reflect.construct) {
            if (!a(function() {
                    var e = function F() {};
                    return S.Reflect.construct(function() {}, [], e) instanceof e
                })) {
                oe(S.Reflect, "construct", Cn.construct)
            }
        }
        if (String(new Date(NaN)) !== "Invalid Date") {
            var Ln = Date.prototype.toString;
            var Fn = function toString() {
                var e = +this;
                if (e !== e) {
                    return "Invalid Date"
                }
                return le.Call(Ln, this)
            };
            oe(Date.prototype, "toString", Fn)
        }
        var Dn = {
            anchor: function anchor(e) {
                return le.CreateHTML(this, "a", "name", e)
            },
            big: function big() {
                return le.CreateHTML(this, "big", "", "")
            },
            blink: function blink() {
                return le.CreateHTML(this, "blink", "", "")
            },
            bold: function bold() {
                return le.CreateHTML(this, "b", "", "")
            },
            fixed: function fixed() {
                return le.CreateHTML(this, "tt", "", "")
            },
            fontcolor: function fontcolor(e) {
                return le.CreateHTML(this, "font", "color", e)
            },
            fontsize: function fontsize(e) {
                return le.CreateHTML(this, "font", "size", e)
            },
            italics: function italics() {
                return le.CreateHTML(this, "i", "", "")
            },
            link: function link(e) {
                return le.CreateHTML(this, "a", "href", e)
            },
            small: function small() {
                return le.CreateHTML(this, "small", "", "")
            },
            strike: function strike() {
                return le.CreateHTML(this, "strike", "", "")
            },
            sub: function sub() {
                return le.CreateHTML(this, "sub", "", "")
            },
            sup: function sub() {
                return le.CreateHTML(this, "sup", "", "")
            }
        };
        l(Object.keys(Dn), function(e) {
            var r = String.prototype[e];
            var n = false;
            if (le.IsCallable(r)) {
                var o = t(r, "", ' " ');
                var i = P([], o.match(/"/g)).length;
                n = o !== o.toLowerCase() || i > 2
            } else {
                n = true
            }
            if (n) {
                oe(String.prototype, e, Dn[e])
            }
        });
        var zn = function() {
            if (!ie) {
                return false
            }
            var e = typeof JSON === "object" && typeof JSON.stringify === "function" ? JSON.stringify : null;
            if (!e) {
                return false
            }
            if (typeof e(J()) !== "undefined") {
                return true
            }
            if (e([J()]) !== "[null]") {
                return true
            }
            var t = {
                a: J()
            };
            t[J()] = true;
            if (e(t) !== "{}") {
                return true
            }
            return false
        }();
        var qn = a(function() {
            if (!ie) {
                return true
            }
            return JSON.stringify(Object(J())) === "{}" && JSON.stringify([Object(J())]) === "[{}]"
        });
        if (zn || !qn) {
            var Wn = JSON.stringify;
            oe(JSON, "stringify", function stringify(e) {
                if (typeof e === "symbol") {
                    return
                }
                var n;
                if (arguments.length > 1) {
                    n = arguments[1]
                }
                var o = [e];
                if (!r(n)) {
                    var i = le.IsCallable(n) ? n : null;
                    var a = function(e, r) {
                        var n = i ? t(i, this, e, r) : r;
                        if (typeof n !== "symbol") {
                            if (ne.symbol(n)) {
                                return Rt({})(n)
                            }
                            return n
                        }
                    };
                    o.push(a)
                } else {
                    o.push(n)
                }
                if (arguments.length > 2) {
                    o.push(arguments[2])
                }
                return Wn.apply(this, o)
            })
        }
        return S
    });
    //# sourceMappingURL=es6-shim.map
    /*! jQuery v3.6.3 | (c) OpenJS Foundation and other contributors | jquery.org/license */
    ! function(e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(C, e) {
        "use strict";
        var t = [],
            r = Object.getPrototypeOf,
            s = t.slice,
            g = t.flat ? function(e) {
                return t.flat.call(e)
            } : function(e) {
                return t.concat.apply([], e)
            },
            u = t.push,
            i = t.indexOf,
            n = {},
            o = n.toString,
            y = n.hasOwnProperty,
            a = y.toString,
            l = a.call(Object),
            v = {},
            m = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
            },
            x = function(e) {
                return null != e && e === e.window
            },
            S = C.document,
            c = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function b(e, t, n) {
            var r, i, o = (n = n || S).createElement("script");
            if (o.text = e, t)
                for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o)
        }

        function w(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
        }
        var f = "3.6.3",
            E = function(e, t) {
                return new E.fn.init(e, t)
            };

        function p(e) {
            var t = !!e && "length" in e && e.length,
                n = w(e);
            return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
        }
        E.fn = E.prototype = {
            jquery: f,
            constructor: E,
            length: 0,
            toArray: function() {
                return s.call(this)
            },
            get: function(e) {
                return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = E.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return E.each(this, e)
            },
            map: function(n) {
                return this.pushStack(E.map(this, function(e, t) {
                    return n.call(e, t, e)
                }))
            },
            slice: function() {
                return this.pushStack(s.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(E.grep(this, function(e, t) {
                    return (t + 1) % 2
                }))
            },
            odd: function() {
                return this.pushStack(E.grep(this, function(e, t) {
                    return t % 2
                }))
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: u,
            sort: t.sort,
            splice: t.splice
        }, E.extend = E.fn.extend = function() {
            var e, t, n, r, i, o, a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (E.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {}, i = !1, a[t] = E.extend(l, o, r)) : void 0 !== r && (a[t] = r));
            return a
        }, E.extend({
            expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = y.call(t, "constructor") && t.constructor) && a.call(n) === l)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function(e, t, n) {
                b(e, {
                    nonce: t && t.nonce
                }, n)
            },
            each: function(e, t) {
                var n, r = 0;
                if (p(e)) {
                    for (n = e.length; r < n; r++)
                        if (!1 === t.call(e[r], r, e[r])) break
                } else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r])) break;
                return e
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (p(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : i.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                return r
            },
            map: function(e, t, n) {
                var r, i, o = 0,
                    a = [];
                if (p(e))
                    for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                else
                    for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return g(a)
            },
            guid: 1,
            support: v
        }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            n["[object " + t + "]"] = t.toLowerCase()
        });
        var d = function(n) {
            var e, d, b, o, i, h, f, g, w, u, l, T, C, a, S, y, s, c, v, E = "sizzle" + 1 * new Date,
                p = n.document,
                k = 0,
                r = 0,
                m = ue(),
                x = ue(),
                A = ue(),
                N = ue(),
                j = function(e, t) {
                    return e === t && (l = !0), 0
                },
                D = {}.hasOwnProperty,
                t = [],
                q = t.pop,
                L = t.push,
                H = t.push,
                O = t.slice,
                P = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                M = "[\\x20\\t\\r\\n\\f]",
                I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
                F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
                $ = new RegExp(M + "+", "g"),
                B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
                _ = new RegExp("^" + M + "*," + M + "*"),
                z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                U = new RegExp(M + "|>"),
                X = new RegExp(F),
                V = new RegExp("^" + I + "$"),
                G = {
                    ID: new RegExp("^#(" + I + ")"),
                    CLASS: new RegExp("^\\.(" + I + ")"),
                    TAG: new RegExp("^(" + I + "|[*])"),
                    ATTR: new RegExp("^" + W),
                    PSEUDO: new RegExp("^" + F),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + R + ")$", "i"),
                    needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
                },
                Y = /HTML$/i,
                Q = /^(?:input|select|textarea|button)$/i,
                J = /^h\d$/i,
                K = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ee = /[+~]/,
                te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
                ne = function(e, t) {
                    var n = "0x" + e.slice(1) - 65536;
                    return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                },
                re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                ie = function(e, t) {
                    return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                oe = function() {
                    T()
                },
                ae = be(function(e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
            } catch (e) {
                H = {
                    apply: t.length ? function(e, t) {
                        L.apply(e, O.call(t))
                    } : function(e, t) {
                        var n = e.length,
                            r = 0;
                        while (e[n++] = t[r++]);
                        e.length = n - 1
                    }
                }
            }

            function se(t, e, n, r) {
                var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                    p = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
                if (!r && (T(e), e = e || C, S)) {
                    if (11 !== p && (u = Z.exec(t)))
                        if (i = u[1]) {
                            if (9 === p) {
                                if (!(a = e.getElementById(i))) return n;
                                if (a.id === i) return n.push(a), n
                            } else if (f && (a = f.getElementById(i)) && v(e, a) && a.id === i) return n.push(a), n
                        } else {
                            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                            if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                        } if (d.qsa && !N[t + " "] && (!y || !y.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                        if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                            (f = ee.test(t) && ve(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = E)), o = (l = h(t)).length;
                            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                            c = l.join(",")
                        }
                        try {
                            if (d.cssSupportsSelector && !CSS.supports("selector(:is(" + c + "))")) throw new Error;
                            return H.apply(n, f.querySelectorAll(c)), n
                        } catch (e) {
                            N(t, !0)
                        } finally {
                            s === E && e.removeAttribute("id")
                        }
                    }
                }
                return g(t.replace(B, "$1"), e, n, r)
            }

            function ue() {
                var r = [];
                return function e(t, n) {
                    return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
                }
            }

            function le(e) {
                return e[E] = !0, e
            }

            function ce(e) {
                var t = C.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function fe(e, t) {
                var n = e.split("|"),
                    r = n.length;
                while (r--) b.attrHandle[n[r]] = t
            }

            function pe(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r) return r;
                if (n)
                    while (n = n.nextSibling)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function de(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function he(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }

            function ge(t) {
                return function(e) {
                    return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
                }
            }

            function ye(a) {
                return le(function(o) {
                    return o = +o, le(function(e, t) {
                        var n, r = a([], e.length, o),
                            i = r.length;
                        while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                    })
                })
            }

            function ve(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }
            for (e in d = se.support = {}, i = se.isXML = function(e) {
                    var t = e && e.namespaceURI,
                        n = e && (e.ownerDocument || e).documentElement;
                    return !Y.test(t || n && n.nodeName || "HTML")
                }, T = se.setDocument = function(e) {
                    var t, n, r = e ? e.ownerDocument || e : p;
                    return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, S = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) {
                        return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                    }), d.cssSupportsSelector = ce(function() {
                        return CSS.supports("selector(*)") && C.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))")
                    }), d.attributes = ce(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), d.getElementsByTagName = ce(function(e) {
                        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                    }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) {
                        return a.appendChild(e).id = E, !C.getElementsByName || !C.getElementsByName(E).length
                    }), d.getById ? (b.filter.ID = function(e) {
                        var t = e.replace(te, ne);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }, b.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && S) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (b.filter.ID = function(e) {
                        var n = e.replace(te, ne);
                        return function(e) {
                            var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return t && t.value === n
                        }
                    }, b.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && S) {
                            var n, r, i, o = t.getElementById(e);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                i = t.getElementsByName(e), r = 0;
                                while (o = i[r++])
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                            }
                            return []
                        }
                    }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            while (n = o[i++]) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                        if ("undefined" != typeof t.getElementsByClassName && S) return t.getElementsByClassName(e)
                    }, s = [], y = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                        var t;
                        a.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + E + "-]").length || y.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || y.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + E + "+*").length || y.push(".#.+[+~]"), e.querySelectorAll("\\\f"), y.push("[\\r\\n\\f]")
                    }), ce(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = C.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
                    })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
                    }), d.cssSupportsSelector || y.push(":has"), y = y.length && new RegExp(y.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), v = t || K.test(a.contains) ? function(e, t) {
                        var n = 9 === e.nodeType && e.documentElement || e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            while (t = t.parentNode)
                                if (t === e) return !0;
                        return !1
                    }, j = t ? function(e, t) {
                        if (e === t) return l = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && v(p, e) ? -1 : t == C || t.ownerDocument == p && v(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return l = !0, 0;
                        var n, r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            s = [t];
                        if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                        if (i === o) return pe(e, t);
                        n = e;
                        while (n = n.parentNode) a.unshift(n);
                        n = t;
                        while (n = n.parentNode) s.unshift(n);
                        while (a[r] === s[r]) r++;
                        return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                    }), C
                }, se.matches = function(e, t) {
                    return se(e, null, null, t)
                }, se.matchesSelector = function(e, t) {
                    if (T(e), d.matchesSelector && S && !N[t + " "] && (!s || !s.test(t)) && (!y || !y.test(t))) try {
                        var n = c.call(e, t);
                        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                    } catch (e) {
                        N(t, !0)
                    }
                    return 0 < se(t, C, null, [e]).length
                }, se.contains = function(e, t) {
                    return (e.ownerDocument || e) != C && T(e), v(e, t)
                }, se.attr = function(e, t) {
                    (e.ownerDocument || e) != C && T(e);
                    var n = b.attrHandle[t.toLowerCase()],
                        r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !S) : void 0;
                    return void 0 !== r ? r : d.attributes || !S ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, se.escape = function(e) {
                    return (e + "").replace(re, ie)
                }, se.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, se.uniqueSort = function(e) {
                    var t, n = [],
                        r = 0,
                        i = 0;
                    if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
                        while (t = e[i++]) t === e[i] && (r = n.push(i));
                        while (r--) e.splice(n[r], 1)
                    }
                    return u = null, e
                }, o = se.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                        } else if (3 === i || 4 === i) return e.nodeValue
                    } else
                        while (t = e[r++]) n += o(t);
                    return n
                }, (b = se.selectors = {
                    cacheLength: 50,
                    createPseudo: le,
                    match: G,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = m[e + " "];
                            return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(n, r, i) {
                            return function(e) {
                                var t = se.attr(e, n);
                                return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace($, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(h, e, t, g, y) {
                            var v = "nth" !== h.slice(0, 3),
                                m = "last" !== h.slice(-4),
                                x = "of-type" === e;
                            return 1 === g && 0 === y ? function(e) {
                                return !!e.parentNode
                            } : function(e, t, n) {
                                var r, i, o, a, s, u, l = v !== m ? "nextSibling" : "previousSibling",
                                    c = e.parentNode,
                                    f = x && e.nodeName.toLowerCase(),
                                    p = !n && !x,
                                    d = !1;
                                if (c) {
                                    if (v) {
                                        while (l) {
                                            a = e;
                                            while (a = a[l])
                                                if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                            u = l = "only" === h && !u && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                        d = (s = (r = (i = (o = (a = c)[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                        while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                            if (1 === a.nodeType && ++d && a === e) {
                                                i[h] = [k, s, d];
                                                break
                                            }
                                    } else if (p && (d = s = (r = (i = (o = (a = e)[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                        while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                            if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                    return (d -= y) === g || d % g == 0 && 0 <= d / g
                                }
                            }
                        },
                        PSEUDO: function(e, o) {
                            var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                            return a[E] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                                var n, r = a(e, o),
                                    i = r.length;
                                while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                            }) : function(e) {
                                return a(e, 0, t)
                            }) : a
                        }
                    },
                    pseudos: {
                        not: le(function(e) {
                            var r = [],
                                i = [],
                                s = f(e.replace(B, "$1"));
                            return s[E] ? le(function(e, t, n, r) {
                                var i, o = s(e, null, r, []),
                                    a = e.length;
                                while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                            }) : function(e, t, n) {
                                return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                            }
                        }),
                        has: le(function(t) {
                            return function(e) {
                                return 0 < se(t, e).length
                            }
                        }),
                        contains: le(function(t) {
                            return t = t.replace(te, ne),
                                function(e) {
                                    return -1 < (e.textContent || o(e)).indexOf(t)
                                }
                        }),
                        lang: le(function(n) {
                            return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                                function(e) {
                                    var t;
                                    do {
                                        if (t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var t = n.location && n.location.hash;
                            return t && t.slice(1) === e.id
                        },
                        root: function(e) {
                            return e === a
                        },
                        focus: function(e) {
                            return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: ge(!1),
                        disabled: ge(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !b.pseudos.empty(e)
                        },
                        header: function(e) {
                            return J.test(e.nodeName)
                        },
                        input: function(e) {
                            return Q.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: ye(function() {
                            return [0]
                        }),
                        last: ye(function(e, t) {
                            return [t - 1]
                        }),
                        eq: ye(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: ye(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: ye(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: ye(function(e, t, n) {
                            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                            return e
                        }),
                        gt: ye(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }).pseudos.nth = b.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) b.pseudos[e] = de(e);
            for (e in {
                    submit: !0,
                    reset: !0
                }) b.pseudos[e] = he(e);

            function me() {}

            function xe(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r
            }

            function be(s, e, t) {
                var u = e.dir,
                    l = e.next,
                    c = l || u,
                    f = t && "parentNode" === c,
                    p = r++;
                return e.first ? function(e, t, n) {
                    while (e = e[u])
                        if (1 === e.nodeType || f) return s(e, t, n);
                    return !1
                } : function(e, t, n) {
                    var r, i, o, a = [k, p];
                    if (n) {
                        while (e = e[u])
                            if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                    } else
                        while (e = e[u])
                            if (1 === e.nodeType || f)
                                if (i = (o = e[E] || (e[E] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                                else {
                                    if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                                    if ((i[c] = a)[2] = s(e, t, n)) return !0
                                } return !1
                }
            }

            function we(i) {
                return 1 < i.length ? function(e, t, n) {
                    var r = i.length;
                    while (r--)
                        if (!i[r](e, t, n)) return !1;
                    return !0
                } : i[0]
            }

            function Te(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                return a
            }

            function Ce(d, h, g, y, v, e) {
                return y && !y[E] && (y = Ce(y)), v && !v[E] && (v = Ce(v, e)), le(function(e, t, n, r) {
                    var i, o, a, s = [],
                        u = [],
                        l = t.length,
                        c = e || function(e, t, n) {
                            for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                            return n
                        }(h || "*", n.nodeType ? [n] : n, []),
                        f = !d || !e && h ? c : Te(c, s, d, n, r),
                        p = g ? v || (e ? d : l || y) ? [] : t : f;
                    if (g && g(f, p, n, r), y) {
                        i = Te(p, u), y(i, [], n, r), o = i.length;
                        while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                    }
                    if (e) {
                        if (v || d) {
                            if (v) {
                                i = [], o = p.length;
                                while (o--)(a = p[o]) && i.push(f[o] = a);
                                v(null, p = [], i, r)
                            }
                            o = p.length;
                            while (o--)(a = p[o]) && -1 < (i = v ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                        }
                    } else p = Te(p === t ? p.splice(l, p.length) : p), v ? v(null, t, p, r) : H.apply(t, p)
                })
            }

            function Se(e) {
                for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                        return e === i
                    }, a, !0), l = be(function(e) {
                        return -1 < P(i, e)
                    }, a, !0), c = [function(e, t, n) {
                        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                        return i = null, r
                    }]; s < r; s++)
                    if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                    else {
                        if ((t = b.filter[e[s].type].apply(null, e[s].matches))[E]) {
                            for (n = ++s; n < r; n++)
                                if (b.relative[e[n].type]) break;
                            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(B, "$1"), t, s < n && Se(e.slice(s, n)), n < r && Se(e = e.slice(n)), n < r && xe(e))
                        }
                        c.push(t)
                    } return we(c)
            }
            return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
                var n, r, i, o, a, s, u, l = x[e + " "];
                if (l) return t ? 0 : l.slice(0);
                a = e, s = [], u = b.preFilter;
                while (a) {
                    for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                            value: n,
                            type: r[0].replace(B, " ")
                        }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                        value: n,
                        type: o,
                        matches: r
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
            }, f = se.compile = function(e, t) {
                var n, y, v, m, x, r, i = [],
                    o = [],
                    a = A[e + " "];
                if (!a) {
                    t || (t = h(e)), n = t.length;
                    while (n--)(a = Se(t[n]))[E] ? i.push(a) : o.push(a);
                    (a = A(e, (y = o, m = 0 < (v = i).length, x = 0 < y.length, r = function(e, t, n, r, i) {
                        var o, a, s, u = 0,
                            l = "0",
                            c = e && [],
                            f = [],
                            p = w,
                            d = e || x && b.find.TAG("*", i),
                            h = k += null == p ? 1 : Math.random() || .1,
                            g = d.length;
                        for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                            if (x && o) {
                                a = 0, t || o.ownerDocument == C || (T(o), n = !S);
                                while (s = y[a++])
                                    if (s(o, t || C, n)) {
                                        r.push(o);
                                        break
                                    } i && (k = h)
                            }
                            m && ((o = !s && o) && u--, e && c.push(o))
                        }
                        if (u += l, m && l !== u) {
                            a = 0;
                            while (s = v[a++]) s(c, f, t, n);
                            if (e) {
                                if (0 < u)
                                    while (l--) c[l] || f[l] || (f[l] = q.call(r));
                                f = Te(f)
                            }
                            H.apply(r, f), i && !e && 0 < f.length && 1 < u + v.length && se.uniqueSort(r)
                        }
                        return i && (k = h, w = p), c
                    }, m ? le(r) : r))).selector = e
                }
                return a
            }, g = se.select = function(e, t, n, r) {
                var i, o, a, s, u, l = "function" == typeof e && e,
                    c = !r && h(e = l.selector || e);
                if (n = n || [], 1 === c.length) {
                    if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && S && b.relative[o[1].type]) {
                        if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                        l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    i = G.needsContext.test(e) ? 0 : o.length;
                    while (i--) {
                        if (a = o[i], b.relative[s = a.type]) break;
                        if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ve(t.parentNode) || t))) {
                            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                            break
                        }
                    }
                }
                return (l || f(e, c))(r, t, !S, n, !t || ee.test(e) && ve(t.parentNode) || t), n
            }, d.sortStable = E.split("").sort(j).join("") === E, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) {
                return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
            }), ce(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || fe("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), d.attributes && ce(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || fe("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), ce(function(e) {
                return null == e.getAttribute("disabled")
            }) || fe(R, function(e, t, n) {
                var r;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }), se
        }(C);
        E.find = d, E.expr = d.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = d.uniqueSort, E.text = d.getText, E.isXMLDoc = d.isXML, E.contains = d.contains, E.escapeSelector = d.escape;
        var h = function(e, t, n) {
                var r = [],
                    i = void 0 !== n;
                while ((e = e[t]) && 9 !== e.nodeType)
                    if (1 === e.nodeType) {
                        if (i && E(e).is(n)) break;
                        r.push(e)
                    } return r
            },
            T = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            k = E.expr.match.needsContext;

        function A(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function j(e, n, r) {
            return m(n) ? E.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== r
            }) : n.nodeType ? E.grep(e, function(e) {
                return e === n !== r
            }) : "string" != typeof n ? E.grep(e, function(e) {
                return -1 < i.call(n, e) !== r
            }) : E.filter(n, e, r)
        }
        E.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, E.fn.extend({
            find: function(e) {
                var t, n, r = this.length,
                    i = this;
                if ("string" != typeof e) return this.pushStack(E(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (E.contains(i[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
                return 1 < r ? E.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(j(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(j(this, e || [], !0))
            },
            is: function(e) {
                return !!j(this, "string" == typeof e && k.test(e) ? E(e) : e || [], !1).length
            }
        });
        var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (E.fn.init = function(e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || D, "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : S, !0)), N.test(r[1]) && E.isPlainObject(t))
                        for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (i = S.getElementById(r[2])) && (this[0] = i, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
        }).prototype = E.fn, D = E(S);
        var L = /^(?:parents|prev(?:Until|All))/,
            H = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function O(e, t) {
            while ((e = e[t]) && 1 !== e.nodeType);
            return e
        }
        E.fn.extend({
            has: function(e) {
                var t = E(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (E.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var n, r = 0,
                    i = this.length,
                    o = [],
                    a = "string" != typeof e && E(e);
                if (!k.test(e))
                    for (; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            } return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? i.call(E(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), E.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return h(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return h(e, "parentNode", n)
            },
            next: function(e) {
                return O(e, "nextSibling")
            },
            prev: function(e) {
                return O(e, "previousSibling")
            },
            nextAll: function(e) {
                return h(e, "nextSibling")
            },
            prevAll: function(e) {
                return h(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return h(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return h(e, "previousSibling", n)
            },
            siblings: function(e) {
                return T((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return T(e.firstChild)
            },
            contents: function(e) {
                return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
            }
        }, function(r, i) {
            E.fn[r] = function(e, t) {
                var n = E.map(this, i, e);
                return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (H[r] || E.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
            }
        });
        var P = /[^\x20\t\r\n\f]+/g;

        function R(e) {
            return e
        }

        function M(e) {
            throw e
        }

        function I(e, t, n, r) {
            var i;
            try {
                e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        E.Callbacks = function(r) {
            var e, n;
            r = "string" == typeof r ? (e = r, n = {}, E.each(e.match(P) || [], function(e, t) {
                n[t] = !0
            }), n) : E.extend({}, r);
            var i, t, o, a, s = [],
                u = [],
                l = -1,
                c = function() {
                    for (a = a || r.once, o = i = !0; u.length; l = -1) {
                        t = u.shift();
                        while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                    }
                    r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
                },
                f = {
                    add: function() {
                        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                            E.each(e, function(e, t) {
                                m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                            })
                        }(arguments), t && !i && c()), this
                    },
                    remove: function() {
                        return E.each(arguments, function(e, t) {
                            var n;
                            while (-1 < (n = E.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                        }), this
                    },
                    has: function(e) {
                        return e ? -1 < E.inArray(e, s) : 0 < s.length
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return a = u = [], s = t = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return a = u = [], t || i || (s = t = ""), this
                    },
                    locked: function() {
                        return !!a
                    },
                    fireWith: function(e, t) {
                        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                    },
                    fire: function() {
                        return f.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!o
                    }
                };
            return f
        }, E.extend({
            Deferred: function(e) {
                var o = [
                        ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                        ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    a = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this
                        },
                        "catch": function(e) {
                            return a.then(null, e)
                        },
                        pipe: function() {
                            var i = arguments;
                            return E.Deferred(function(r) {
                                E.each(o, function(e, t) {
                                    var n = m(i[t[4]]) && i[t[4]];
                                    s[t[1]](function() {
                                        var e = n && n.apply(this, arguments);
                                        e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                    })
                                }), i = null
                            }).promise()
                        },
                        then: function(t, n, r) {
                            var u = 0;

                            function l(i, o, a, s) {
                                return function() {
                                    var n = this,
                                        r = arguments,
                                        e = function() {
                                            var e, t;
                                            if (!(i < u)) {
                                                if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                                t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                            }
                                        },
                                        t = s ? e : function() {
                                            try {
                                                e()
                                            } catch (e) {
                                                E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                                            }
                                        };
                                    i ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()), C.setTimeout(t))
                                }
                            }
                            return E.Deferred(function(e) {
                                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? E.extend(e, a) : a
                        }
                    },
                    s = {};
                return E.each(o, function(e, t) {
                    var n = t[2],
                        r = t[5];
                    a[t[1]] = n.add, r && n.add(function() {
                        i = r
                    }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                        return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                    }, s[t[0] + "With"] = n.fireWith
                }), a.promise(s), e && e.call(s, s), s
            },
            when: function(e) {
                var n = arguments.length,
                    t = n,
                    r = Array(t),
                    i = s.call(arguments),
                    o = E.Deferred(),
                    a = function(t) {
                        return function(e) {
                            r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                        }
                    };
                if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
                while (t--) I(i[t], a(t), o.reject);
                return o.promise()
            }
        });
        var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        E.Deferred.exceptionHook = function(e, t) {
            C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, E.readyException = function(e) {
            C.setTimeout(function() {
                throw e
            })
        };
        var F = E.Deferred();

        function $() {
            S.removeEventListener("DOMContentLoaded", $), C.removeEventListener("load", $), E.ready()
        }
        E.fn.ready = function(e) {
            return F.then(e)["catch"](function(e) {
                E.readyException(e)
            }), this
        }, E.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || F.resolveWith(S, [E])
            }
        }), E.ready.then = F.then, "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? C.setTimeout(E.ready) : (S.addEventListener("DOMContentLoaded", $), C.addEventListener("load", $));
        var B = function(e, t, n, r, i, o, a) {
                var s = 0,
                    u = e.length,
                    l = null == n;
                if ("object" === w(n))
                    for (s in i = !0, n) B(e, t, s, n[s], !0, o, a);
                else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                        return l.call(E(e), n)
                    })), t))
                    for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
            },
            _ = /^-ms-/,
            z = /-([a-z])/g;

        function U(e, t) {
            return t.toUpperCase()
        }

        function X(e) {
            return e.replace(_, "ms-").replace(z, U)
        }
        var V = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function G() {
            this.expando = E.expando + G.uid++
        }
        G.uid = 1, G.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t) i[X(t)] = n;
                else
                    for (r in t) i[X(r)] = t[r];
                return i
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                        while (n--) delete r[t[n]]
                    }(void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !E.isEmptyObject(t)
            }
        };
        var Y = new G,
            Q = new G,
            J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            K = /[A-Z]/g;

        function Z(e, t, n) {
            var r, i;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                    try {
                        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                    } catch (e) {}
                    Q.set(e, t, n)
                } else n = void 0;
            return n
        }
        E.extend({
            hasData: function(e) {
                return Q.hasData(e) || Y.hasData(e)
            },
            data: function(e, t, n) {
                return Q.access(e, t, n)
            },
            removeData: function(e, t) {
                Q.remove(e, t)
            },
            _data: function(e, t, n) {
                return Y.access(e, t, n)
            },
            _removeData: function(e, t) {
                Y.remove(e, t)
            }
        }), E.fn.extend({
            data: function(n, e) {
                var t, r, i, o = this[0],
                    a = o && o.attributes;
                if (void 0 === n) {
                    if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                        t = a.length;
                        while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                        Y.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof n ? this.each(function() {
                    Q.set(this, n)
                }) : B(this, function(e) {
                    var t;
                    if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                    this.each(function() {
                        Q.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Q.remove(this, e)
                })
            }
        }), E.extend({
            queue: function(e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, E.makeArray(n)) : r.push(n)), r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = E.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = E._queueHooks(e, t);
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                    E.dequeue(e, t)
                }, o)), !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Y.get(e, n) || Y.access(e, n, {
                    empty: E.Callbacks("once memory").add(function() {
                        Y.remove(e, [t + "queue", n])
                    })
                })
            }
        }), E.fn.extend({
            queue: function(t, n) {
                var e = 2;
                return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                    var e = E.queue(this, t, n);
                    E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    E.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1,
                    i = E.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --r || i.resolveWith(o, [o])
                    };
                "string" != typeof e && (t = e, e = void 0), e = e || "fx";
                while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t)
            }
        });
        var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
            ne = ["Top", "Right", "Bottom", "Left"],
            re = S.documentElement,
            ie = function(e) {
                return E.contains(e.ownerDocument, e)
            },
            oe = {
                composed: !0
            };
        re.getRootNode && (ie = function(e) {
            return E.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
        });
        var ae = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === E.css(e, "display")
        };

        function se(e, t, n, r) {
            var i, o, a = 20,
                s = r ? function() {
                    return r.cur()
                } : function() {
                    return E.css(e, t, "")
                },
                u = s(),
                l = n && n[3] || (E.cssNumber[t] ? "" : "px"),
                c = e.nodeType && (E.cssNumber[t] || "px" !== l && +u) && te.exec(E.css(e, t));
            if (c && c[3] !== l) {
                u /= 2, l = l || c[3], c = +u || 1;
                while (a--) E.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
                c *= 2, E.style(e, t, c + l), n = n || []
            }
            return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
        }
        var ue = {};

        function le(e, t) {
            for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = E.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
            for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
            return e
        }
        E.fn.extend({
            show: function() {
                return le(this, !0)
            },
            hide: function() {
                return le(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    ae(this) ? E(this).show() : E(this).hide()
                })
            }
        });
        var ce, fe, pe = /^(?:checkbox|radio)$/i,
            de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            he = /^$|^module$|\/(?:java|ecma)script/i;
        ce = S.createDocumentFragment().appendChild(S.createElement("div")), (fe = S.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), v.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", v.option = !!ce.lastChild;
        var ge = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

        function ye(e, t) {
            var n;
            return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? E.merge([e], n) : n
        }

        function ve(e, t) {
            for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
        }
        ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, v.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
        var me = /<|&#?\w+;/;

        function xe(e, t, n, r, i) {
            for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                if ((o = e[d]) || 0 === o)
                    if ("object" === w(o)) E.merge(p, o.nodeType ? [o] : o);
                    else if (me.test(o)) {
                a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2], c = u[0];
                while (c--) a = a.lastChild;
                E.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
            } else p.push(t.createTextNode(o));
            f.textContent = "", d = 0;
            while (o = p[d++])
                if (r && -1 < E.inArray(o, r)) i && i.push(o);
                else if (l = ie(o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
                c = 0;
                while (o = a[c++]) he.test(o.type || "") && n.push(o)
            }
            return f
        }
        var be = /^([^.]*)(?:\.(.+)|)/;

        function we() {
            return !0
        }

        function Te() {
            return !1
        }

        function Ce(e, t) {
            return e === function() {
                try {
                    return S.activeElement
                } catch (e) {}
            }() == ("focus" === t)
        }

        function Se(e, t, n, r, i, o) {
            var a, s;
            if ("object" == typeof t) {
                for (s in "string" != typeof n && (r = r || n, n = void 0), t) Se(e, s, n, r, t[s], o);
                return e
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
            else if (!i) return e;
            return 1 === o && (a = i, (i = function(e) {
                return E().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = E.guid++)), e.each(function() {
                E.event.add(this, t, i, r, n)
            })
        }

        function Ee(e, i, o) {
            o ? (Y.set(e, i, !1), E.event.add(e, i, {
                namespace: !1,
                handler: function(e) {
                    var t, n, r = Y.get(this, i);
                    if (1 & e.isTrigger && this[i]) {
                        if (r.length)(E.event.special[i] || {}).delegateType && e.stopPropagation();
                        else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                    } else r.length && (Y.set(this, i, {
                        value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this)
                    }), e.stopImmediatePropagation())
                }
            })) : void 0 === Y.get(e, i) && E.event.add(e, i, we)
        }
        E.event = {
            global: {},
            add: function(t, e, n, r, i) {
                var o, a, s, u, l, c, f, p, d, h, g, y = Y.get(t);
                if (V(t)) {
                    n.handler && (n = (o = n).handler, i = o.selector), i && E.find.matchesSelector(re, i), n.guid || (n.guid = E.guid++), (u = y.events) || (u = y.events = Object.create(null)), (a = y.handle) || (a = y.handle = function(e) {
                        return "undefined" != typeof E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
                    }), l = (e = (e || "").match(P) || [""]).length;
                    while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = E.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = E.event.special[d] || {}, c = E.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && E.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), E.event.global[d] = !0)
                }
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, u, l, c, f, p, d, h, g, y = Y.hasData(e) && Y.get(e);
                if (y && (u = y.events)) {
                    l = (t = (t || "").match(P) || [""]).length;
                    while (l--)
                        if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                            f = E.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                            while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || E.removeEvent(e, d, y.handle), delete u[d])
                        } else
                            for (d in u) E.event.remove(e, d + t[l], n, r, !0);
                    E.isEmptyObject(u) && Y.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, i, o, a, s = new Array(arguments.length),
                    u = E.event.fix(e),
                    l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                    c = E.event.special[u.type] || {};
                for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                    a = E.event.handlers.call(this, u, l), t = 0;
                    while ((i = a[t++]) && !u.isPropagationStopped()) {
                        u.currentTarget = i.elem, n = 0;
                        while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                    }
                    return c.postDispatch && c.postDispatch.call(this, u), u.result
                }
            },
            handlers: function(e, t) {
                var n, r, i, o, a, s = [],
                    u = t.delegateCount,
                    l = e.target;
                if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                            for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < E(i, this).index(l) : E.find(i, this, null, [l]).length), a[i] && o.push(r);
                            o.length && s.push({
                                elem: l,
                                handlers: o
                            })
                        } return l = this, u < t.length && s.push({
                    elem: l,
                    handlers: t.slice(u)
                }), s
            },
            addProp: function(t, e) {
                Object.defineProperty(E.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: m(e) ? function() {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[t]
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(e) {
                return e[E.expando] ? e : new E.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        var t = this || e;
                        return pe.test(t.type) && t.click && A(t, "input") && Ee(t, "click", we), !1
                    },
                    trigger: function(e) {
                        var t = this || e;
                        return pe.test(t.type) && t.click && A(t, "input") && Ee(t, "click"), !0
                    },
                    _default: function(e) {
                        var t = e.target;
                        return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, E.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, E.Event = function(e, t) {
            if (!(this instanceof E.Event)) return new E.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
        }, E.Event.prototype = {
            constructor: E.Event,
            isDefaultPrevented: Te,
            isPropagationStopped: Te,
            isImmediatePropagationStopped: Te,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, E.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            "char": !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0
        }, E.event.addProp), E.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            E.event.special[t] = {
                setup: function() {
                    return Ee(this, t, Ce), !1
                },
                trigger: function() {
                    return Ee(this, t), !0
                },
                _default: function(e) {
                    return Y.get(e.target, t)
                },
                delegateType: e
            }
        }), E.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, i) {
            E.event.special[e] = {
                delegateType: i,
                bindType: i,
                handle: function(e) {
                    var t, n = e.relatedTarget,
                        r = e.handleObj;
                    return n && (n === this || E.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
                }
            }
        }), E.fn.extend({
            on: function(e, t, n, r) {
                return Se(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return Se(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function() {
                    E.event.remove(this, e, n, t)
                })
            }
        });
        var ke = /<script|<style|<link/i,
            Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

        function je(e, t) {
            return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
        }

        function De(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function qe(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function Le(e, t) {
            var n, r, i, o, a, s;
            if (1 === t.nodeType) {
                if (Y.hasData(e) && (s = Y.get(e).events))
                    for (i in Y.remove(t, "handle events"), s)
                        for (n = 0, r = s[i].length; n < r; n++) E.event.add(t, i, s[i][n]);
                Q.hasData(e) && (o = Q.access(e), a = E.extend({}, o), Q.set(t, a))
            }
        }

        function He(n, r, i, o) {
            r = g(r);
            var e, t, a, s, u, l, c = 0,
                f = n.length,
                p = f - 1,
                d = r[0],
                h = m(d);
            if (h || 1 < f && "string" == typeof d && !v.checkClone && Ae.test(d)) return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o)
            });
            if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
                for (s = (a = E.map(ye(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = E.clone(u, !0, !0), s && E.merge(a, ye(u, "script"))), i.call(n[c], u, c);
                if (s)
                    for (l = a[a.length - 1].ownerDocument, E.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && E.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, l) : b(u.textContent.replace(Ne, ""), u, l))
            }
            return n
        }

        function Oe(e, t, n) {
            for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(ye(r)), r.parentNode && (n && ie(r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
            return e
        }
        E.extend({
            htmlPrefilter: function(e) {
                return e
            },
            clone: function(e, t, n) {
                var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                    f = ie(e);
                if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                    for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
                if (t)
                    if (n)
                        for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
                    else Le(e, c);
                return 0 < (a = ye(c, "script")).length && ve(a, !f && ye(e, "script")), c
            },
            cleanData: function(e) {
                for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (V(n)) {
                        if (t = n[Y.expando]) {
                            if (t.events)
                                for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                            n[Y.expando] = void 0
                        }
                        n[Q.expando] && (n[Q.expando] = void 0)
                    }
            }
        }), E.fn.extend({
            detach: function(e) {
                return Oe(this, e, !0)
            },
            remove: function(e) {
                return Oe(this, e)
            },
            text: function(e) {
                return B(this, function(e) {
                    return void 0 === e ? E.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return He(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return He(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = je(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return He(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return He(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(ye(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return E.clone(this, e, t)
                })
            },
            html: function(e) {
                return B(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = E.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(ye(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var n = [];
                return He(this, arguments, function(e) {
                    var t = this.parentNode;
                    E.inArray(this, n) < 0 && (E.cleanData(ye(this)), t && t.replaceChild(e, this))
                }, n)
            }
        }), E.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, a) {
            E.fn[e] = function(e) {
                for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), E(r[o])[a](t), u.apply(n, t.get());
                return this.pushStack(n)
            }
        });
        var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
            Re = /^--/,
            Me = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = C), t.getComputedStyle(e)
            },
            Ie = function(e, t, n) {
                var r, i, o = {};
                for (i in t) o[i] = e.style[i], e.style[i] = t[i];
                for (i in r = n.call(e), t) e.style[i] = o[i];
                return r
            },
            We = new RegExp(ne.join("|"), "i"),
            Fe = "[\\x20\\t\\r\\n\\f]",
            $e = new RegExp("^" + Fe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Fe + "+$", "g");

        function Be(e, t, n) {
            var r, i, o, a, s = Re.test(t),
                u = e.style;
            return (n = n || Me(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace($e, "$1") || void 0), "" !== a || ie(e) || (a = E.style(e, t)), !v.pixelBoxStyles() && Pe.test(a) && We.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
        }

        function _e(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            function e() {
                if (l) {
                    u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                    var e = C.getComputedStyle(l);
                    n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }
            var n, r, i, o, a, s, u = S.createElement("div"),
                l = S.createElement("div");
            l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, E.extend(v, {
                boxSizingReliable: function() {
                    return e(), r
                },
                pixelBoxStyles: function() {
                    return e(), o
                },
                pixelPosition: function() {
                    return e(), n
                },
                reliableMarginLeft: function() {
                    return e(), s
                },
                scrollboxSize: function() {
                    return e(), i
                },
                reliableTrDimensions: function() {
                    var e, t, n, r;
                    return null == a && (e = S.createElement("table"), t = S.createElement("tr"), n = S.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a
                }
            }))
        }();
        var ze = ["Webkit", "Moz", "ms"],
            Ue = S.createElement("div").style,
            Xe = {};

        function Ve(e) {
            var t = E.cssProps[e] || Xe[e];
            return t || (e in Ue ? e : Xe[e] = function(e) {
                var t = e[0].toUpperCase() + e.slice(1),
                    n = ze.length;
                while (n--)
                    if ((e = ze[n] + t) in Ue) return e
            }(e) || e)
        }
        var Ge = /^(none|table(?!-c[ea]).+)/,
            Ye = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Qe = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function Je(e, t, n) {
            var r = te.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function Ke(e, t, n, r, i, o) {
            var a = "width" === t ? 1 : 0,
                s = 0,
                u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2) "margin" === n && (u += E.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= E.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= E.css(e, "border" + ne[a] + "Width", !0, i))) : (u += E.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += E.css(e, "border" + ne[a] + "Width", !0, i) : s += E.css(e, "border" + ne[a] + "Width", !0, i));
            return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
        }

        function Ze(e, t, n) {
            var r = Me(e),
                i = (!v.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r),
                o = i,
                a = Be(e, t, r),
                s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Pe.test(a)) {
                if (!n) return a;
                a = "auto"
            }
            return (!v.boxSizingReliable() && i || !v.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
        }

        function et(e, t, n, r, i) {
            return new et.prototype.init(e, t, n, r, i)
        }
        E.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Be(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, s = X(t),
                        u = Re.test(t),
                        l = e.style;
                    if (u || (t = Ve(s)), a = E.cssHooks[t] || E.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                    "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (E.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
                }
            },
            css: function(e, t, n, r) {
                var i, o, a, s = X(t);
                return Re.test(t) || (t = Ve(s)), (a = E.cssHooks[t] || E.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
            }
        }), E.each(["height", "width"], function(e, u) {
            E.cssHooks[u] = {
                get: function(e, t, n) {
                    if (t) return !Ge.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : Ie(e, Ye, function() {
                        return Ze(e, u, n)
                    })
                },
                set: function(e, t, n) {
                    var r, i = Me(e),
                        o = !v.scrollboxSize() && "absolute" === i.position,
                        a = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i),
                        s = n ? Ke(e, u, n, a, i) : 0;
                    return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = E.css(e, u)), Je(0, t, s)
                }
            }
        }), E.cssHooks.marginLeft = _e(v.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - Ie(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), E.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(i, o) {
            E.cssHooks[i + o] = {
                expand: function(e) {
                    for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                    return n
                }
            }, "margin" !== i && (E.cssHooks[i + o].set = Je)
        }), E.fn.extend({
            css: function(e, t) {
                return B(this, function(e, t, n) {
                    var r, i, o = {},
                        a = 0;
                    if (Array.isArray(t)) {
                        for (r = Me(e), i = t.length; a < i; a++) o[t[a]] = E.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
                }, e, t, 1 < arguments.length)
            }
        }), ((E.Tween = et).prototype = {
            constructor: et,
            init: function(e, t, n, r, i, o) {
                this.elem = e, this.prop = n, this.easing = i || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (E.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = et.propHooks[this.prop];
                return e && e.get ? e.get(this) : et.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = et.propHooks[this.prop];
                return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
            }
        }).init.prototype = et.prototype, (et.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }).scrollTop = et.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, E.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, E.fx = et.prototype.init, E.fx.step = {};
        var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
            at = /queueHooks$/;

        function st() {
            nt && (!1 === S.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, E.fx.interval), E.fx.tick())
        }

        function ut() {
            return C.setTimeout(function() {
                tt = void 0
            }), tt = Date.now()
        }

        function lt(e, t) {
            var n, r = 0,
                i = {
                    height: e
                };
            for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function ct(e, t, n) {
            for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                if (r = i[o].call(n, t, e)) return r
        }

        function ft(o, e, t) {
            var n, a, r = 0,
                i = ft.prefilters.length,
                s = E.Deferred().always(function() {
                    delete u.elem
                }),
                u = function() {
                    if (a) return !1;
                    for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                    return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
                },
                l = s.promise({
                    elem: o,
                    props: E.extend({}, e),
                    opts: E.extend(!0, {
                        specialEasing: {},
                        easing: E.easing._default
                    }, t),
                    originalProperties: e,
                    originalOptions: t,
                    startTime: tt || ut(),
                    duration: t.duration,
                    tweens: [],
                    createTween: function(e, t) {
                        var n = E.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                        return l.tweens.push(n), n
                    },
                    stop: function(e) {
                        var t = 0,
                            n = e ? l.tweens.length : 0;
                        if (a) return this;
                        for (a = !0; t < n; t++) l.tweens[t].run(1);
                        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                    }
                }),
                c = l.props;
            for (! function(e, t) {
                    var n, r, i, o, a;
                    for (n in e)
                        if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = E.cssHooks[r]) && "expand" in a)
                            for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                        else t[r] = i
                }(c, l.opts.specialEasing); r < i; r++)
                if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (E._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
            return E.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), E.fx.timer(E.extend(u, {
                elem: o,
                anim: l,
                queue: l.opts.queue
            })), l
        }
        E.Animation = E.extend(ft, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return se(n.elem, e, te.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                m(e) ? (t = e, e = ["*"]) : e = e.match(P);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                    p = this,
                    d = {},
                    h = e.style,
                    g = e.nodeType && ae(e),
                    y = Y.get(e, "fxshow");
                for (r in n.queue || (null == (a = E._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || s()
                    }), a.unqueued++, p.always(function() {
                        p.always(function() {
                            a.unqueued--, E.queue(e, "fx").length || a.empty.fire()
                        })
                    })), t)
                    if (i = t[r], ot.test(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                            if ("show" !== i || !y || void 0 === y[r]) continue;
                            g = !0
                        }
                        d[r] = y && y[r] || E.style(e, r)
                    } if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(d))
                    for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = Y.get(e, "display")), "none" === (c = E.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = E.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === E.css(e, "float") && (u || (p.done(function() {
                            h.display = l
                        }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                        })), u = !1, d) u || (y ? "hidden" in y && (g = y.hidden) : y = Y.access(e, "fxshow", {
                        display: l
                    }), o && (y.hidden = !g), g && le([e], !0), p.done(function() {
                        for (r in g || le([e]), Y.remove(e, "fxshow"), d) E.style(e, r, d[r])
                    })), u = ct(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
            }],
            prefilter: function(e, t) {
                t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
            }
        }), E.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? E.extend({}, e) : {
                complete: n || !n && t || m(e) && e,
                duration: e,
                easing: n && t || t && !m(t) && t
            };
            return E.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                m(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue)
            }, r
        }, E.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(ae).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(t, e, n, r) {
                var i = E.isEmptyObject(t),
                    o = E.speed(e, n, r),
                    a = function() {
                        var e = ft(this, E.extend({}, t), o);
                        (i || Y.get(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(i, e, o) {
                var a = function(e) {
                    var t = e.stop;
                    delete e.stop, t(o)
                };
                return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
                    var e = !0,
                        t = null != i && i + "queueHooks",
                        n = E.timers,
                        r = Y.get(this);
                    if (t) r[t] && r[t].stop && a(r[t]);
                    else
                        for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
                    for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                    !e && o || E.dequeue(this, i)
                })
            },
            finish: function(a) {
                return !1 !== a && (a = a || "fx"), this.each(function() {
                    var e, t = Y.get(this),
                        n = t[a + "queue"],
                        r = t[a + "queueHooks"],
                        i = E.timers,
                        o = n ? n.length : 0;
                    for (t.finish = !0, E.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                    for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete t.finish
                })
            }
        }), E.each(["toggle", "show", "hide"], function(e, r) {
            var i = E.fn[r];
            E.fn[r] = function(e, t, n) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
            }
        }), E.each({
            slideDown: lt("show"),
            slideUp: lt("hide"),
            slideToggle: lt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, r) {
            E.fn[e] = function(e, t, n) {
                return this.animate(r, e, t, n)
            }
        }), E.timers = [], E.fx.tick = function() {
            var e, t = 0,
                n = E.timers;
            for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || E.fx.stop(), tt = void 0
        }, E.fx.timer = function(e) {
            E.timers.push(e), E.fx.start()
        }, E.fx.interval = 13, E.fx.start = function() {
            nt || (nt = !0, st())
        }, E.fx.stop = function() {
            nt = null
        }, E.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, E.fn.delay = function(r, e) {
            return r = E.fx && E.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
                var n = C.setTimeout(e, r);
                t.stop = function() {
                    C.clearTimeout(n)
                }
            })
        }, rt = S.createElement("input"), it = S.createElement("select").appendChild(S.createElement("option")), rt.type = "checkbox", v.checkOn = "" !== rt.value, v.optSelected = it.selected, (rt = S.createElement("input")).value = "t", rt.type = "radio", v.radioValue = "t" === rt.value;
        var pt, dt = E.expr.attrHandle;
        E.fn.extend({
            attr: function(e, t) {
                return B(this, E.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    E.removeAttr(this, e)
                })
            }
        }), E.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!v.radioValue && "radio" === t && A(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                    i = t && t.match(P);
                if (i && 1 === e.nodeType)
                    while (n = i[r++]) e.removeAttribute(n)
            }
        }), pt = {
            set: function(e, t, n) {
                return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var a = dt[t] || E.find.attr;
            dt[t] = function(e, t, n) {
                var r, i, o = t.toLowerCase();
                return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r
            }
        });
        var ht = /^(?:input|select|textarea|button)$/i,
            gt = /^(?:a|area)$/i;

        function yt(e) {
            return (e.match(P) || []).join(" ")
        }

        function vt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function mt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
        }
        E.fn.extend({
            prop: function(e, t) {
                return B(this, E.prop, e, t, 1 < arguments.length)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[E.propFix[e] || e]
                })
            }
        }), E.extend({
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = E.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), v.optSelected || (E.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            E.propFix[this.toLowerCase()] = this
        }), E.fn.extend({
            addClass: function(t) {
                var e, n, r, i, o, a;
                return m(t) ? this.each(function(e) {
                    E(this).addClass(t.call(this, e, vt(this)))
                }) : (e = mt(t)).length ? this.each(function() {
                    if (r = vt(this), n = 1 === this.nodeType && " " + yt(r) + " ") {
                        for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                        a = yt(n), r !== a && this.setAttribute("class", a)
                    }
                }) : this
            },
            removeClass: function(t) {
                var e, n, r, i, o, a;
                return m(t) ? this.each(function(e) {
                    E(this).removeClass(t.call(this, e, vt(this)))
                }) : arguments.length ? (e = mt(t)).length ? this.each(function() {
                    if (r = vt(this), n = 1 === this.nodeType && " " + yt(r) + " ") {
                        for (o = 0; o < e.length; o++) {
                            i = e[o];
                            while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ")
                        }
                        a = yt(n), r !== a && this.setAttribute("class", a)
                    }
                }) : this : this.attr("class", "")
            },
            toggleClass: function(t, n) {
                var e, r, i, o, a = typeof t,
                    s = "string" === a || Array.isArray(t);
                return m(t) ? this.each(function(e) {
                    E(this).toggleClass(t.call(this, e, vt(this), n), n)
                }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = mt(t), this.each(function() {
                    if (s)
                        for (o = E(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                    else void 0 !== t && "boolean" !== a || ((r = vt(this)) && Y.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : Y.get(this, "__className__") || ""))
                }))
            },
            hasClass: function(e) {
                var t, n, r = 0;
                t = " " + e + " ";
                while (n = this[r++])
                    if (1 === n.nodeType && -1 < (" " + yt(vt(n)) + " ").indexOf(t)) return !0;
                return !1
            }
        });
        var xt = /\r/g;
        E.fn.extend({
            val: function(n) {
                var r, e, i, t = this[0];
                return arguments.length ? (i = m(n), this.each(function(e) {
                    var t;
                    1 === this.nodeType && (null == (t = i ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = E.map(t, function(e) {
                        return null == e ? "" : e + ""
                    })), (r = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
                })) : t ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
            }
        }), E.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = E.find.attr(e, "value");
                        return null != t ? t : yt(E.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                if (t = E(n).val(), a) return t;
                                s.push(t)
                            } return s
                    },
                    set: function(e, t) {
                        var n, r, i = e.options,
                            o = E.makeArray(t),
                            a = i.length;
                        while (a--)((r = i[a]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), E.each(["radio", "checkbox"], function() {
            E.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = -1 < E.inArray(E(e).val(), t)
                }
            }, v.checkOn || (E.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), v.focusin = "onfocusin" in C;
        var bt = /^(?:focusinfocus|focusoutblur)$/,
            wt = function(e) {
                e.stopPropagation()
            };
        E.extend(E.event, {
            trigger: function(e, t, n, r) {
                var i, o, a, s, u, l, c, f, p = [n || S],
                    d = y.call(e, "type") ? e.type : e,
                    h = y.call(e, "namespace") ? e.namespace.split(".") : [];
                if (o = f = a = n = n || S, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + E.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[E.expando] ? e : new E.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), c = E.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                    if (!r && !c.noBubble && !x(n)) {
                        for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                        a === (n.ownerDocument || S) && p.push(a.defaultView || a.parentWindow || C)
                    }
                    i = 0;
                    while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                    return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), E.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), E.event.triggered = void 0, a && (n[u] = a)), e.result
                }
            },
            simulate: function(e, t, n) {
                var r = E.extend(new E.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                E.event.trigger(r, null, t)
            }
        }), E.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    E.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return E.event.trigger(e, t, n, !0)
            }
        }), v.focusin || E.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, r) {
            var i = function(e) {
                E.event.simulate(r, e.target, E.event.fix(e))
            };
            E.event.special[r] = {
                setup: function() {
                    var e = this.ownerDocument || this.document || this,
                        t = Y.access(e, r);
                    t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
                },
                teardown: function() {
                    var e = this.ownerDocument || this.document || this,
                        t = Y.access(e, r) - 1;
                    t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
                }
            }
        });
        var Tt = C.location,
            Ct = {
                guid: Date.now()
            },
            St = /\?/;
        E.parseXML = function(e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new C.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {}
            return n = t && t.getElementsByTagName("parsererror")[0], t && !n || E.error("Invalid XML: " + (n ? E.map(n.childNodes, function(e) {
                return e.textContent
            }).join("\n") : e)), t
        };
        var Et = /\[\]$/,
            kt = /\r?\n/g,
            At = /^(?:submit|button|image|reset|file)$/i,
            Nt = /^(?:input|select|textarea|keygen)/i;

        function jt(n, e, r, i) {
            var t;
            if (Array.isArray(e)) E.each(e, function(e, t) {
                r || Et.test(n) ? i(n, t) : jt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
            else if (r || "object" !== w(e)) i(n, e);
            else
                for (t in e) jt(n + "[" + t + "]", e[t], r, i)
        }
        E.param = function(e, t) {
            var n, r = [],
                i = function(e, t) {
                    var n = m(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function() {
                i(this.name, this.value)
            });
            else
                for (n in e) jt(n, e[n], t, i);
            return r.join("&")
        }, E.fn.extend({
            serialize: function() {
                return E.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = E.prop(this, "elements");
                    return e ? E.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !E(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
                }).map(function(e, t) {
                    var n = E(this).val();
                    return null == n ? null : Array.isArray(n) ? E.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(kt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(kt, "\r\n")
                    }
                }).get()
            }
        });
        var Dt = /%20/g,
            qt = /#.*$/,
            Lt = /([?&])_=[^&]*/,
            Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ot = /^(?:GET|HEAD)$/,
            Pt = /^\/\//,
            Rt = {},
            Mt = {},
            It = "*/".concat("*"),
            Wt = S.createElement("a");

        function Ft(o) {
            return function(e, t) {
                "string" != typeof e && (t = e, e = "*");
                var n, r = 0,
                    i = e.toLowerCase().match(P) || [];
                if (m(t))
                    while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
            }
        }

        function $t(t, i, o, a) {
            var s = {},
                u = t === Mt;

            function l(e) {
                var r;
                return s[e] = !0, E.each(t[e] || [], function(e, t) {
                    var n = t(i, o, a);
                    return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
                }), r
            }
            return l(i.dataTypes[0]) || !s["*"] && l("*")
        }

        function Bt(e, t) {
            var n, r, i = E.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && E.extend(!0, e, r), e
        }
        Wt.href = Tt.href, E.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Tt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": It,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": E.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Bt(Bt(e, E.ajaxSettings), t) : Bt(E.ajaxSettings, e)
            },
            ajaxPrefilter: Ft(Rt),
            ajaxTransport: Ft(Mt),
            ajax: function(e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var c, f, p, n, d, r, h, g, i, o, y = E.ajaxSetup({}, t),
                    v = y.context || y,
                    m = y.context && (v.nodeType || v.jquery) ? E(v) : E.event,
                    x = E.Deferred(),
                    b = E.Callbacks("once memory"),
                    w = y.statusCode || {},
                    a = {},
                    s = {},
                    u = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (h) {
                                if (!n) {
                                    n = {};
                                    while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                                }
                                t = n[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return h ? p : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == h && (y.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (h) T.always(e[T.status]);
                                else
                                    for (t in e) w[t] = [w[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || u;
                            return c && c.abort(t), l(0, t), this
                        }
                    };
                if (x.promise(T), y.url = ((e || y.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), y.type = t.method || t.type || y.method || y.type, y.dataTypes = (y.dataType || "*").toLowerCase().match(P) || [""], null == y.crossDomain) {
                    r = S.createElement("a");
                    try {
                        r.href = y.url, r.href = r.href, y.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                    } catch (e) {
                        y.crossDomain = !0
                    }
                }
                if (y.data && y.processData && "string" != typeof y.data && (y.data = E.param(y.data, y.traditional)), $t(Rt, y, t, T), h) return T;
                for (i in (g = E.event && y.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), y.type = y.type.toUpperCase(), y.hasContent = !Ot.test(y.type), f = y.url.replace(qt, ""), y.hasContent ? y.data && y.processData && 0 === (y.contentType || "").indexOf("application/x-www-form-urlencoded") && (y.data = y.data.replace(Dt, "+")) : (o = y.url.slice(f.length), y.data && (y.processData || "string" == typeof y.data) && (f += (St.test(f) ? "&" : "?") + y.data, delete y.data), !1 === y.cache && (f = f.replace(Lt, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), y.url = f + o), y.ifModified && (E.lastModified[f] && T.setRequestHeader("If-Modified-Since", E.lastModified[f]), E.etag[f] && T.setRequestHeader("If-None-Match", E.etag[f])), (y.data && y.hasContent && !1 !== y.contentType || t.contentType) && T.setRequestHeader("Content-Type", y.contentType), T.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + ("*" !== y.dataTypes[0] ? ", " + It + "; q=0.01" : "") : y.accepts["*"]), y.headers) T.setRequestHeader(i, y.headers[i]);
                if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h)) return T.abort();
                if (u = "abort", b.add(y.complete), T.done(y.success), T.fail(y.error), c = $t(Mt, y, t, T)) {
                    if (T.readyState = 1, g && m.trigger("ajaxSend", [T, y]), h) return T;
                    y.async && 0 < y.timeout && (d = C.setTimeout(function() {
                        T.abort("timeout")
                    }, y.timeout));
                    try {
                        h = !1, c.send(a, l)
                    } catch (e) {
                        if (h) throw e;
                        l(-1, e)
                    }
                } else l(-1, "No Transport");

                function l(e, t, n, r) {
                    var i, o, a, s, u, l = t;
                    h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                        var r, i, o, a, s = e.contents,
                            u = e.dataTypes;
                        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (i in s)
                                if (s[i] && s[i].test(r)) {
                                    u.unshift(i);
                                    break
                                } if (u[0] in n) o = u[0];
                        else {
                            for (i in n) {
                                if (!u[0] || e.converters[i + " " + u[0]]) {
                                    o = i;
                                    break
                                }
                                a || (a = i)
                            }
                            o = o || a
                        }
                        if (o) return o !== u[0] && u.unshift(o), n[o]
                    }(y, T, n)), !i && -1 < E.inArray("script", y.dataTypes) && E.inArray("json", y.dataTypes) < 0 && (y.converters["text script"] = function() {}), s = function(e, t, n, r) {
                        var i, o, a, s, u, l = {},
                            c = e.dataTypes.slice();
                        if (c[1])
                            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                        o = c.shift();
                        while (o)
                            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                                if ("*" === o) o = u;
                                else if ("*" !== u && u !== o) {
                            if (!(a = l[u + " " + o] || l["* " + o]))
                                for (i in l)
                                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                        break
                                    } if (!0 !== a)
                                if (a && e["throws"]) t = a(t);
                                else try {
                                    t = a(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: a ? e : "No conversion from " + u + " to " + o
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(y, s, T, i), i ? (y.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (E.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (E.etag[f] = u)), 204 === e || "HEAD" === y.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, y, i ? o : a]), b.fireWith(v, [T, l]), g && (m.trigger("ajaxComplete", [T, y]), --E.active || E.event.trigger("ajaxStop")))
                }
                return T
            },
            getJSON: function(e, t, n) {
                return E.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return E.get(e, void 0, t, "script")
            }
        }), E.each(["get", "post"], function(e, i) {
            E[i] = function(e, t, n, r) {
                return m(t) && (r = r || n, n = t, t = void 0), E.ajax(E.extend({
                    url: e,
                    type: i,
                    dataType: r,
                    data: t,
                    success: n
                }, E.isPlainObject(e) && e))
            }
        }), E.ajaxPrefilter(function(e) {
            var t;
            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
        }), E._evalUrl = function(e, t, n) {
            return E.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    E.globalEval(e, t, n)
                }
            })
        }, E.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (m(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstElementChild) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function(n) {
                return m(n) ? this.each(function(e) {
                    E(this).wrapInner(n.call(this, e))
                }) : this.each(function() {
                    var e = E(this),
                        t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n)
                })
            },
            wrap: function(t) {
                var n = m(t);
                return this.each(function(e) {
                    E(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    E(this).replaceWith(this.childNodes)
                }), this
            }
        }), E.expr.pseudos.hidden = function(e) {
            return !E.expr.pseudos.visible(e)
        }, E.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, E.ajaxSettings.xhr = function() {
            try {
                return new C.XMLHttpRequest
            } catch (e) {}
        };
        var _t = {
                0: 200,
                1223: 204
            },
            zt = E.ajaxSettings.xhr();
        v.cors = !!zt && "withCredentials" in zt, v.ajax = zt = !!zt, E.ajaxTransport(function(i) {
            var o, a;
            if (v.cors || zt && !i.crossDomain) return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                        for (n in i.xhrFields) r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && C.setTimeout(function() {
                            o && a()
                        })
                    }, o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o) throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
        }), E.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), E.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return E.globalEval(e), e
                }
            }
        }), E.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), E.ajaxTransport("script", function(n) {
            var r, i;
            if (n.crossDomain || n.scriptAttrs) return {
                send: function(e, t) {
                    r = E("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                    }), S.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
        });
        var Ut, Xt = [],
            Vt = /(=)\?(?=&|$)|\?\?/;
        E.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Xt.pop() || E.expando + "_" + Ct.guid++;
                return this[e] = !0, e
            }
        }), E.ajaxPrefilter("json jsonp", function(e, t, n) {
            var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return o || E.error(r + " was not called"), o[0]
            }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
                o = arguments
            }, n.always(function() {
                void 0 === i ? E(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0
            }), "script"
        }), v.createHTMLDocument = ((Ut = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), E.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href, t.head.appendChild(r)) : t = S), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && E(o).remove(), E.merge([], i.childNodes)));
            var r, i, o
        }, E.fn.load = function(e, t, n) {
            var r, i, o, a = this,
                s = e.indexOf(" ");
            return -1 < s && (r = yt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && E.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments, a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }), this
        }, E.expr.pseudos.animated = function(t) {
            return E.grep(E.timers, function(e) {
                return t === e.elem
            }).length
        }, E.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, a, s, u, l = E.css(e, "position"),
                    c = E(e),
                    f = {};
                "static" === l && (e.style.position = "relative"), s = c.offset(), o = E.css(e, "top"), u = E.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, E.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
            }
        }, E.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    E.offset.setOffset(this, t, e)
                });
                var e, n, r = this[0];
                return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                        while (e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position")) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0), i.left += E.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - i.top - E.css(r, "marginTop", !0),
                        left: t.left - i.left - E.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var e = this.offsetParent;
                    while (e && "static" === E.css(e, "position")) e = e.offsetParent;
                    return e || re
                })
            }
        }), E.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, i) {
            var o = "pageYOffset" === i;
            E.fn[t] = function(e) {
                return B(this, function(e, t, n) {
                    var r;
                    if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                    r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
                }, t, e, arguments.length)
            }
        }), E.each(["top", "left"], function(e, n) {
            E.cssHooks[n] = _e(v.pixelPosition, function(e, t) {
                if (t) return t = Be(e, n), Pe.test(t) ? E(e).position()[n] + "px" : t
            })
        }), E.each({
            Height: "height",
            Width: "width"
        }, function(a, s) {
            E.each({
                padding: "inner" + a,
                content: s,
                "": "outer" + a
            }, function(r, o) {
                E.fn[o] = function(e, t) {
                    var n = arguments.length && (r || "boolean" != typeof e),
                        i = r || (!0 === e || !0 === t ? "margin" : "border");
                    return B(this, function(e, t, n) {
                        var r;
                        return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i)
                    }, s, n ? e : void 0, n)
                }
            })
        }), E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            E.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), E.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
            E.fn[n] = function(e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
            }
        });
        var Gt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        E.proxy = function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }).guid = e.guid = e.guid || E.guid++, i
        }, E.holdReady = function(e) {
            e ? E.readyWait++ : E.ready(!0)
        }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = A, E.isFunction = m, E.isWindow = x, E.camelCase = X, E.type = w, E.now = Date.now, E.isNumeric = function(e) {
            var t = E.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, E.trim = function(e) {
            return null == e ? "" : (e + "").replace(Gt, "$1")
        }, "function" == typeof define && define.amd && define("jquery", [], function() {
            return E
        });
        var Yt = C.jQuery,
            Qt = C.$;
        return E.noConflict = function(e) {
            return C.$ === E && (C.$ = Qt), e && C.jQuery === E && (C.jQuery = Yt), E
        }, "undefined" == typeof e && (C.jQuery = C.$ = E), E
    });
    "use strict";

    function _slicedToArray(e, t) {
        return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest()
    }

    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function _iterableToArrayLimit(e, t) {
        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != n) {
            var r, a, o, i, s = [],
                c = !0,
                l = !1;
            try {
                if (o = (n = n.call(e)).next, 0 === t) {
                    if (Object(n) !== n) return;
                    c = !1
                } else
                    for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
            } catch (e) {
                l = !0, a = e
            } finally {
                try {
                    if (!c && null != n.return && (i = n.return(), Object(i) !== i)) return
                } finally {
                    if (l) throw a
                }
            }
            return s
        }
    }

    function _arrayWithHoles(e) {
        if (Array.isArray(e)) return e
    }

    function ownKeys(t, e) {
        var n, r = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), r.push.apply(r, n)), r
    }

    function _objectSpread(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? ownKeys(Object(n), !0).forEach(function(e) {
                _defineProperty(t, e, n[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return t
    }

    function _defineProperty(e, t, n) {
        return (t = _toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _toPropertyKey(e) {
        e = _toPrimitive(e, "string");
        return "symbol" === _typeof(e) ? e : String(e)
    }

    function _toPrimitive(e, t) {
        if ("object" !== _typeof(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 === n) return ("string" === t ? String : Number)(e);
        n = n.call(e, t || "default");
        if ("object" !== _typeof(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }

    function _toConsumableArray(e) {
        return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread()
    }

    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function _iterableToArray(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }

    function _arrayWithoutHoles(e) {
        if (Array.isArray(e)) return _arrayLikeToArray(e)
    }

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _createForOfIteratorHelper(e, t) {
        var n, r, a, o, i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (i) return r = !(n = !0), {
            s: function() {
                i = i.call(e)
            },
            n: function() {
                var e = i.next();
                return n = e.done, e
            },
            e: function(e) {
                r = !0, a = e
            },
            f: function() {
                try {
                    n || null == i.return || i.return()
                } finally {
                    if (r) throw a
                }
            }
        };
        if (Array.isArray(e) || (i = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) return i && (e = i), o = 0, {
            s: t = function() {},
            n: function() {
                return o >= e.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: e[o++]
                }
            },
            e: function(e) {
                throw e
            },
            f: t
        };
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function _unsupportedIterableToArray(e, t) {
        var n;
        if (e) return "string" == typeof e ? _arrayLikeToArray(e, t) : "Map" === (n = "Object" === (n = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0
    }

    function _arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    define("engine", ["jquery", "utils", "state", "section", "passages"], function(N, j, P, R, I) {
        var t, V = j.impossible,
            M = j.passageSelector,
            D = j.transitionOut,
            F = j.options;

        function L(e, t, n) {
            var r, a, o;
            if (n ? (n = n.get("name"), (a = I.getTree(n)).children.length && (r = {
                    type: "include",
                    tag: t,
                    name: n,
                    children: a.children,
                    text: a.text
                })) : r = I.getTree(t), r) {
                for (;
                    (o = e[e.length - 1]) && ("root" === o.type || "include" === o.type) && o.children.some(function(e) {
                        return e.type.startsWith("unclosed")
                    });) e[e.length - 1] = Object.create(o), e = e[e.length - 1].children = o.children.slice();
                e.push(r)
            }
        }

        function n(e) {
            var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                r = n.loadedGame,
                a = I.get(e),
                o = j.storyElement,
                i = o.parent(),
                s = n.stretch,
                n = n.transition,
                n = void 0 === n ? {} : n,
                c = n.depart,
                c = void 0 === c ? "instant" : c,
                l = n.arrive,
                l = void 0 === l ? "dissolve" : l,
                u = n.departOrigin,
                p = n.arriveOrigin,
                n = n.time,
                d = (i.findAndFilter("tw-enchantment").each(function(e, t) {
                    var n = (t = N(t)).data("enchantedProperties");
                    n && o.css(n.reduce(function(e, t) {
                        return e[t] = "", e
                    }, {})), t[0] === i[0] && (i = o.unwrap().parent())
                }), I.hasValid(e) || V("Engine.showPassage", "There's no passage with the name \"" + e + '"!'), o.children(M).not(".transition-out, .transition-out *")),
                a = (a.get("tags") || []).join(" "),
                f = (t = N("<tw-passage><tw-sidebar>"), f = t.children("tw-sidebar"), h = N('<tw-icon tabindex=0 alt="Undo" title="Undo">&#8630;</tw-icon>'), g = N('<tw-icon tabindex=0 alt="Redo" title="Redo">&#8631;</tw-icon>'), P.pastLength <= 0 && h.css("visibility", "hidden"), P.futureLength <= 0 && g.css("visibility", "hidden"), f.append(h, g), t),
                h = ("function" == typeof u && (u = u.call(d)), "function" == typeof p && (p = p.call(f)), !s && c),
                m = h && d.css("width"),
                g = (j.detachStoryElement(), f.appendTo(o).attr({
                    tags: a
                }), h && (D(d, c, n, 0, 0, 0, u), d.css({
                    position: "absolute",
                    width: function() {
                        return "0px" !== m ? m : "100%"
                    }
                })), o.attr({
                    tags: a
                }), R.create(f)),
                y = (r && (g.loadedGame = !0), []);
            if (P.pastLength <= 0 && 1 === P.turns) {
                var b, v = _createForOfIteratorHelper(I.getTagged("startup"));
                try {
                    for (v.s(); !(b = v.n()).done;) L(y, "startup", b.value)
                } catch (e) {
                    v.e(e)
                } finally {
                    v.f()
                }
                if (F.debug) {
                    var w, k = _createForOfIteratorHelper(I.getTagged("debug-startup"));
                    try {
                        for (k.s(); !(w = k.n()).done;) L(y, "debug-startup", w.value)
                    } catch (e) {
                        k.e(e)
                    } finally {
                        k.f()
                    }
                }
            }
            var S, T = _createForOfIteratorHelper(I.getTagged("header"));
            try {
                for (T.s(); !(S = T.n()).done;) L(y, "header", S.value)
            } catch (e) {
                T.e(e)
            } finally {
                T.f()
            }
            if (F.debug) {
                var _, x = _createForOfIteratorHelper(I.getTagged("debug-header"));
                try {
                    for (x.s(); !(_ = x.n()).done;) L(y, "debug-header", _.value)
                } catch (e) {
                    x.e(e)
                } finally {
                    x.f()
                }
            }
            L(y, e);
            var O, A = _createForOfIteratorHelper(I.getTagged("footer"));
            try {
                for (A.s(); !(O = A.n()).done;) L(y, "footer", O.value)
            } catch (e) {
                A.e(e)
            } finally {
                A.f()
            }
            if (F.debug) {
                var C, E = _createForOfIteratorHelper(I.getTagged("debug-footer"));
                try {
                    for (E.s(); !(C = E.n()).done;) L(y, "debug-footer", C.value)
                } catch (e) {
                    E.e(e)
                } finally {
                    E.f()
                }
            }
            g.renderInto(y, f, {
                transition: l,
                transitionTime: n,
                transitionOrigin: p
            }), g.loadedGame = !1, j.reattachStoryElement(), scroll(0, s ? f.offset().top - .05 * N(window).height() : o[0].getBoundingClientRect().top + document.body.scrollTop)
        }
        return Object.freeze({
            goBack: function(e) {
                P.rewind() && n(P.passage, e)
            },
            goForward: function(e) {
                P.fastForward() && n(P.passage, e)
            },
            goToPassage: function(e, t) {
                P.play(e), n(e, t)
            },
            redirect: function(e, t) {
                P.redirect(e), n(e, t)
            },
            toggleFullscreen: function() {
                var e = document.documentElement;
                document.fullscreenElement ? document.exitFullscreen() : document.msFullscreenElement ? document.msExitFullscreen() : (e.msRequestFullscreen || e.requestFullscreen).call(e)
            },
            showPassage: n,
            enableDebugMode: function() {
                t && t()
            },
            registerDebugMode: function(e) {
                t = t || e
            }
        })
    }), define("harlowe", ["jquery", "debugmode/mode", "renderer", "state", "section", "engine", "passages", "utils", "utils/renderutils", "internaltypes/varscope", "internaltypes/twineerror", "macros", "macrolib/values", "macrolib/commands", "macrolib/datastructures", "macrolib/stylechangers", "macrolib/enchantments", "macrolib/metadata", "macrolib/patterns", "macrolib/links", "macrolib/custommacros", "utils/jqueryplugins", "repl"], function($, DebugMode, Renderer, State, Section, Engine, Passages, Utils, _ref, VarScope) {
        var dialog = _ref.dialog;

        function __HarloweEval(text) {
            eval(text + "")
        }

        function printJSError(e) {
            var t, n = "".concat(e.name, ": ").concat(e.message);
            return e.stack && (t = (e = e.stack.split("\n")).findIndex(function(e) {
                return e.includes("__HarloweEval")
            }), n += "\n".concat(e.slice(0, t).join("\n").replace(/\([^)]+\)/g, ""))), "<div style='font-family:monospace;overflow-y:scroll;max-height:30vh'>```" + n + "```</div>"
        }! function(o) {
            window.onerror = function(e, t, n, r, a) {
                window.onerror = o, Utils.storyElement.parent().append(dialog({
                    message: "Sorry to interrupt, but this page's code has got itself in a mess.\n\n".concat(printJSError(a), "\n(This is probably due to a bug in the Harlowe game engine.)")
                }).addClass("harlowe-crash")), "function" == typeof o && o.apply(void 0, arguments)
            }
        }(window.onerror), Utils.onStartup(function() {
            var n, e, t, r, a = $("tw-storydata");
            0 !== a.length && (Utils.options.ifid = a.attr("ifid"), (a.attr("tags") || "").split(/\s/).forEach(function(e) {
                "uncompressed-pure-values" !== e && "uncompressed-saves" !== e || (Utils.options.uncompressedPureValues = !0), "uncompressed-structures" !== e && "uncompressed-saves" !== e || (Utils.options.uncompressedStructures = !0)
            }), (a.attr("options") || "").split(/\s/).forEach(function(e) {
                e && (Utils.options[e] = !0), "debug" === e && DebugMode()
            }), a = (a = a.attr("startnode")) || [].reduce.call($("tw-passagedata"), function(e, t) {
                t = t.getAttribute("pid");
                return t < e ? t : e
            }, 1 / 0), a = $("tw-passagedata[pid='" + a + "']").attr("name"), $(document.documentElement).on("keydown", function(e) {
                13 === e.which && "0" === e.target.getAttribute("tabindex") && $(e.target).trigger("click")
            }), n = !1, $("[role=script]").each(function(t) {
                try {
                    __HarloweEval($(this).html())
                } catch (e) {
                    n || (n = !0, dialog({
                        parent: Utils.storyElement.parent(),
                        message: "There is a problem with this story's " + Utils.nth(t + 1) + " script:\n\n" + printJSError(e)
                    }))
                }
            }), $("[role=stylesheet]").each(function(e, t) {
                $(document.head).append("<style data-title=\"Story stylesheet '".concat(e + 1, "'\">").concat($(t).html()))
            }), (e = Section.create()).stack = [{
                tempVariables: Object.create(VarScope)
            }], (r = Passages.loadMetadata(e)).length && (t = dialog({
                parent: Utils.storyElement.parent(),
                message: "These errors occurred when running the `(metadata:)` macro calls in this story's passages:<p></p>"
            }), r.forEach(function(e) {
                return t.find("p").append(e.render())
            })), (r = !Utils.options.debug && State.hasSessionStorage && sessionStorage.getItem("Saved Session")) && !0 === State.deserialise(e, r) ? Engine.showPassage(State.passage) : Engine.goToPassage(a))
        })
    }), define("macros", ["utils/naturalsort", "utils", "utils/operationutils", "datatypes/changercommand", "datatypes/custommacro", "datatypes/lambda", "datatypes/codehook", "internaltypes/changedescriptor", "internaltypes/twineerror"], function(g, e, t, o, r, y, b, p, v) {
        var w = e.insensitiveName,
            k = e.nth,
            S = e.andList,
            T = t.objectName,
            _ = t.typeName,
            d = t.toSource,
            x = Array.isArray,
            i = {};

        function O(e) {
            return e === s.TypeSignature.Any || (x(e.innerType) ? e.innerType.some(O) : !!e.innerType && O(e.innerType))
        }

        function a(e, t, n, r) {
            var a, o, i, s, c, l, u, p, d = t.fn,
                f = t.typeSignature,
                h = t.returnType,
                m = (r = function(e) {
                    for (var t, n, r, a = [], o = 0; o < e.length; o += 1) o in e && (!0 === (null == (t = e[o]) ? void 0 : t.spreader) ? (n = t.value, (r = v.containsError(n)) ? a.push(r) : x(n) || "string" == typeof n ? a.push.apply(a, _toConsumableArray(n)) : n instanceof Set ? a.push.apply(a, _toConsumableArray(Array.from(n).sort(g("en")))) : a.push(v.create("operation", "I can't spread out " + T(n) + ", because it is not a string, dataset, or array."))) : a.push(t));
                    return a
                }(r), "string" != typeof e && (a = e, e = ""), a ? "" : "(" + (x(e) && 1 < e.length ? e[0] : e) + ":)");
            for (e = a ? a.TwineScript_KnownName ? "the custom macro, ".concat(a.TwineScript_KnownName) : "an unnamed custom macro" : "the ".concat(m, " macro"), o = 0 < f.length ? 1 === f.length && O(f[0]) ? 1 === r.length ? "That value can't be given to macros as-is." : "Give only a single value to this macro." : e + " must only be given " + S(f.map(_)) + (1 < f.length ? ", in that order" : ".") : e + " must not be given any data." + (a ? "" : " Just write " + m), s = 0, c = Math.max(r.length, f.length); s < c; s += 1) {
                if (p = f[s], l = r[s], v.containsError(l)) return l;
                if (s >= f.length && !i) return v.create("datatype", r.length - f.length + " too many values were given to " + e + ".", o);
                if (!(p = p || i).innerType || "rest" !== p.pattern && "zero or more" !== p.pattern || (i = p.innerType, "rest" === p.pattern && (p = p.innerType)), ! function e(t, n) {
                        if (null === n) return void 0 === t;
                        var r = _typeof(t);
                        if ("function" != typeof n && n.pattern) {
                            if ("optional" === n.pattern || "zero or more" === n.pattern) return void 0 === t || e(t, n.innerType);
                            if ("either" === n.pattern) {
                                for (var a = 0; a < n.innerType.length; a += 1)
                                    if (e(t, n.innerType[a])) return !0;
                                return !1
                            }
                            if ("lambda" === n.pattern && e(t, n.innerType)) return n.clauses.includes("where") === ("where" in t || "each" in t) && n.clauses.includes("making") === "making" in t && n.clauses.includes("via") === "via" in t && n.clauses.includes("with") === "with" in t;
                            if ("insensitive set" === n.pattern) return n.innerType.includes(w(t));
                            if ("range" === n.pattern) return n.range(t);
                            if ("wrapped" === n.pattern) return e(t, n.innerType)
                        }
                        return (void 0 === n || void 0 !== t) && ("anything" === n.TwineScript_TypeName && void 0 !== t && !t.TwineScript_Unstorable || "everything" === n.TwineScript_TypeName && void 0 !== t || (n === String ? "string" === r : n === Boolean ? "boolean" === r : n === parseInt ? "number" === r && !Number.isNaN(t) && !(t + "").includes(".") : n === Number ? "number" === r && !Number.isNaN(t) : n === Array ? x(t) : n === Map || n === Set ? t instanceof n : Object.isPrototypeOf.call(n, t)))
                    }(l, p)) return void 0 === l ? (u = f.filter(function(e) {
                    return !("optional" === e.pattern || "zero or more" === e.pattern)
                }).length, v.create("datatype", "".concat(e, " was given ").concat(r.length ? S(r.map(T)) : "nothing", ", but needs ").concat(u - s, " more value").concat(1 < u - s ? "s" : "", "."), o)) : null != (u = l) && u.TwineScript_Unstorable && O(p) ? v.create("datatype", e + "'s " + k(s + 1) + " value, " + T(l) + ", is not valid data for this macro.", o) : b.isPrototypeOf(l) && "Changer" === h ? v.create("syntax", "Please put this hook outside the parentheses of " + e + ", not inside it.", "Hooks should appear after a macro" + (a ? "." : ": " + m + "[Some text]")) : l && y.isPrototypeOf(l) && "lambda" === p.pattern ? v.create("datatype", e + "'s " + k(s + 1) + " value (a lambda) should have " + S(["where", "when", "making", "via", "with"].filter(function(e) {
                    return p.clauses.includes(e)
                }).map(function(e) {
                    return "a '" + e + "' clause"
                })) + ", not " + S(["where", "when", "making", "via", "with"].filter(function(e) {
                    return e in l
                }).map(function(e) {
                    return "a '" + e + "' clause"
                })) + ".") : "insensitive set" === p.pattern ? v.create("datatype", T(l) + " is not a valid name string for " + e + ".", "Only the following names are recognised (capitalisation and hyphens ignored): " + S(p.innerType) + ".") : v.create("datatype", "".concat(e, "'s ").concat(k(s + 1), " value is ").concat(T(l), ", but should be ").concat(_(p), "."), p.message || o)
            }
            return d.apply(null, [n].concat(r))
        }

        function f(e, t, n, r) {
            var a = {
                fn: n,
                typeSignature: r = [].concat(r || []),
                returnType: t
            };
            Object.freeze(a), [].concat(e).forEach(function(e) {
                return Object.defineProperty(i, w(e), {
                    value: a
                })
            })
        }
        var s = {
            has: function(e) {
                return e = w(e), hasOwnProperty.call(i, e)
            },
            get: function(e) {
                return e = w(e), hasOwnProperty.call(i, e) && i[e]
            },
            add: function e(t, n, r, a) {
                return f(t, n, r, a), e
            },
            addChanger: function e(t, n, r, a) {
                return f(t, "Changer", n, a), o.register(x(t) ? t[0] : t, r), e
            },
            addCommand: function e(t, n, r, a) {
                var s, c, l, u, o = !(4 < arguments.length && void 0 !== arguments[4]) || arguments[4],
                    i = [].concat(t)[0];
                return f(t, "Command", (s = i, c = n, l = r, u = o, function(e) {
                    for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    var a, o, i = c.apply(void 0, n);
                    return i || (a = p.create(), o = _objectSpread({
                        TwineScript_TypeID: "command",
                        TwineScript_ObjectName: "a (".concat(s, ":) command"),
                        TwineScript_TypeName: "a (".concat(s, ":) command"),
                        TwineScript_Print: function() {
                            return "`[A (".concat(s, ":) command]`")
                        },
                        TwineScript_ToSource: function() {
                            return "(".concat(s, ":").concat(n.map(d), ")")
                        },
                        TwineScript_is: function(e) {
                            return d(this) === d(e)
                        }
                    }, u ? {
                        TwineScript_Attach: function(e, t) {
                            return a.section = e, t.run(a), o
                        },
                        TwineScript_Run: function(e) {
                            e = l.apply(void 0, [a, e].concat(n));
                            return a = p.create(), e
                        }
                    } : {
                        TwineScript_Run: function(e) {
                            return l.apply(void 0, [e].concat(n))
                        }
                    }))
                }), a), e
            },
            TypeSignature: {
                optional: function(e) {
                    return {
                        pattern: "optional",
                        innerType: e
                    }
                },
                zeroOrMore: function(e) {
                    return {
                        pattern: "zero or more",
                        innerType: e
                    }
                },
                either: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return {
                        pattern: "either",
                        innerType: t
                    }
                },
                rest: function(e) {
                    return {
                        pattern: "rest",
                        innerType: e
                    }
                },
                insensitiveSet: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return {
                        pattern: "insensitive set",
                        innerType: t
                    }
                },
                numberRange: function() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                        n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
                    return {
                        pattern: "range",
                        min: t,
                        max: n,
                        range: function(e) {
                            return "number" == typeof e && !Number.isNaN(e) && t <= e && e <= n
                        }
                    }
                },
                nonNegativeInteger: {
                    pattern: "range",
                    integer: !0,
                    min: 0,
                    max: 1 / 0,
                    range: function(e) {
                        return "number" == typeof e && !Number.isNaN(e) && 0 <= e && !(e + "").includes(".")
                    }
                },
                positiveInteger: {
                    pattern: "range",
                    integer: !0,
                    min: 1,
                    max: 1 / 0,
                    range: function(e) {
                        return "number" == typeof e && !Number.isNaN(e) && 1 <= e && !(e + "").includes(".")
                    }
                },
                wrapped: function(e, t) {
                    return {
                        pattern: "wrapped",
                        innerType: e,
                        message: t
                    }
                },
                Any: {
                    TwineScript_TypeName: "anything"
                },
                Everything: {
                    TwineScript_TypeName: "everything"
                }
            },
            run: function(e, t, n) {
                return s.has(e) ? a(e, s.get(e), t, n) : v.create("macrocall", "I can't run the macro '" + e + "' because it doesn't exist.", "Did you mean to run a macro? If you have a word written like (this:), it is regarded as a macro name.")
            },
            runCustom: function(e, t, n) {
                return r.isPrototypeOf(e) ? a(e, e, t, n) : v.containsError(e) ? e : v.create("macrocall", "I can't call ".concat(T(e), " because it isn't a custom macro."))
            }
        };
        return Object.assign(s.TypeSignature, {
            positiveNumber: s.TypeSignature.numberRange(Math.pow(2, -52), 1 / 0),
            nonNegativeNumber: s.TypeSignature.numberRange(0, 1 / 0),
            percent: s.TypeSignature.numberRange(0, 1)
        }), Object.freeze(s)
    }), define("passages", ["jquery", "utils/naturalsort", "utils", "markup", "internaltypes/twineerror"], function(t, s, e, c, l) {
        var u = e.insensitiveName,
            p = e.unescape,
            n = e.onStartup,
            o = e.impossible,
            d = Object.assign,
            f = RegExp(c.Patterns.macroFront + c.Patterns.macroName, "ig");

        function r(e) {
            var t, r, a, o, n = e.attr("name"),
                i = p(e.html()),
                s = (t = n, o = ["metadata", "storylet", "exclusivity", "urgency"], ((s = i).match(f) || []).some(function(t) {
                    return o.some(function(e) {
                        return u(t.slice(1, -1)) === e
                    })
                }) ? (r = !1, a = {}, c.lex(s, t).children.forEach(function e(t) {
                    if ("macro" === t.type) {
                        var n = u(t.name);
                        if (o.some(function(e) {
                                return n === e
                            })) {
                            if (l.isPrototypeOf(a[n])) return;
                            if (r) return void(a[n] = l.create("syntax", "The (".concat(t.name, ":) macro can't appear after non-metadata macros.")));
                            if (a[n]) return void(a[n] = l.create("syntax", "There is more than one (".concat(t.name, ":) macro.")));
                            a[n] = t
                        } else r = !0;
                        t.children.forEach(function e(t) {
                            var n = u(t.name);
                            "macro" === t.type && o.some(function(e) {
                                return n === e
                            }) ? a[n] = l.create("syntax", "The (".concat(t.name, ":) macro can't be inside another macro.")) : t.children.forEach(e)
                        })
                    } else t.children.forEach(e)
                }), a) : {});
            return d(new Map([
                ["source", i],
                ["tags", (e.attr("tags") || "").split(/\s/) || []],
                ["name", n]
            ]), {
                TwineScript_TypeName: "a passage datamap",
                TwineScript_ObjectName: "a passage datamap",
                metadata: s,
                tree: null
            })
        }
        var a = Object.create(null),
            i = [],
            h = null,
            m = d(new Map, {
                TwineScript_ObjectName: "the Passages datamap",
                getTagged: function(n) {
                    var e, r;
                    return a[n] || (e = s("en", function(e) {
                        return e.get("name")
                    }), r = [], this.forEach(function(e) {
                        var t = e instanceof Map && e.get("tags");
                        Array.isArray(t) && t.includes(n) && r.push(e)
                    }), r.sort(e), a[n] = r)
                },
                clearTagCache: function() {
                    a = Object.create(null)
                },
                clear: function() {
                    Map.prototype.clear.call(this), this.clearTagCache(), this.clearTreeCache(), this.clearStoryletCache()
                },
                delete: function() {
                    var e;
                    (e = Map.prototype.delete).call.apply(e, [this].concat(Array.prototype.slice.call(arguments))), this.clearTagCache(), this.clearTreeCache(), this.clearStoryletCache()
                },
                getTree: function(e) {
                    if (!this.has(e)) return o("Passages.getTree", "No passage name?"), [];
                    var t = this.get(e),
                        n = t.get("tags");
                    if (n.includes("header") || n.includes("footer") || n.includes("debug-header") || n.includes("debug-footer")) return t.tree || (t.tree = c.lex(t.get("source"), e)), t.tree;
                    for (var r, a = 0; a < i.length; a += 1)
                        if (i[a] && i[a].place === e) return r = i.splice(a, 1)[0], i.unshift(r), r;
                    n = c.lex(t.get("source"), e);
                    return i.unshift(n), 16 < i.length && i.pop(), n
                },
                clearTreeCache: function() {
                    i = []
                },
                getStorylets: function(r, e) {
                    var a, o, i, e = e ? e.filter(r, _toConsumableArray(m.values())) : _toConsumableArray(m.values());
                    return l.containsError(e) ? e : (a = [], o = -1 / 0, e.reduce(function(e, t) {
                        if (e) return e;
                        e = t.get("storylet");
                        if (e) {
                            var n = r.speculate(e, t.get("name"), "a (storylet:) macro");
                            if (l.containsError(n)) return n.message = "There's an error in the storylet passage \"" + t.get("name") + '":\n' + n.message, n.source = e.TwineScript_ToSource(), n;
                            n && (e = t.get("exclusivity"), o = Math.max(o, "number" == typeof e ? e : 0), a.push(t))
                        }
                    }, void 0) || (i = s("en"), a.filter(function(e) {
                        e = e.get("exclusivity");
                        return ("number" == typeof e ? e : 0) === o
                    }).sort(function(e, t) {
                        var n = e.get("urgency"),
                            r = t.get("urgency");
                        return (n = "number" == typeof n ? n : 0) !== (r = "number" == typeof r ? r : 0) ? r - n : i(e.get("name"), t.get("name"))
                    })))
                },
                allStorylets: function() {
                    return h = h || _toConsumableArray(m.values()).filter(function(e) {
                        return e.get("storylet")
                    })
                },
                clearStoryletCache: function() {
                    h = null
                },
                loadMetadata: function(i) {
                    var s = [];
                    return m.forEach(function(o) {
                        o.metadata && Object.keys(o.metadata).forEach(function(e) {
                            var t, n, r;

                            function a(e, t) {
                                o.has(e) ? s.push(l.create("syntax", "This passage's datamap already has a '" + JSON.stringify(e) + "' data name.")) : o.set(e, t)
                            }
                            l.containsError(o.metadata[e]) ? s.push(o.metadata[e]) : (t = o.metadata[e], n = i.speculate(t, o.get("name"), "a (" + e + ":) macro"), r = 'In "' + o.get("name") + '":\n', l.containsError(n) ? (n.message = r + n.message, n.source = t.text, s.push(n)) : n instanceof Map ? n.forEach(function(e, t) {
                                return a(t, e)
                            }) : a(e, n))
                        }), o.metadata = void 0
                    }), s
                },
                hasValid: function(e) {
                    e = this.get(e);
                    return e && e instanceof Map && e.has("source")
                },
                create: r
            });
        return n(function() {
            t("tw-storydata > tw-passagedata").get().forEach(function(e) {
                e = t(e), m.set(e.attr("name"), new r(e))
            })
        }), m
    }), define("renderer", ["jquery", "utils", "markup", "internaltypes/twineerror"], function(a, e, S, T) {
        var _ = e.escape,
            x = e.insensitiveName,
            O = e.options;

        function A(e, t, n) {
            n = 2 < arguments.length && void 0 !== n ? n : "";
            return "<" + t + (n ? " " + n : "") + ">" + e + "</" + t + ">"
        }
        var C = "text-align: center; max-width:50%; ";

        function E(m, g) {
            function y(e, t, n) {
                e = E(e.children, g);
                return e && A(e, t, n)
            }
            var b = "",
                v = [];
            if (m)
                for (var w = (m = Array.isArray(m) ? m : [m]).length, k = 0; k < w; k += 1) {
                    var e = function(e) {
                        var n = m[e];
                        switch (n.type) {
                            case "include":
                                b += y(n, "tw-" + n.type, 'type="'.concat(n.tag, '" name="').concat(n.name, '"'));
                                break;
                            case "error":
                                b += T.create("syntax", n.message, n.explanation).render(_(n.text))[0].outerHTML;
                                break;
                            case "numbered":
                            case "bulleted":
                                for (var t = "numbered" === n.type ? "ol" : "ul", r = (b += "<" + t + ">", 1); e < w && m[e];) {
                                    if ("br" === m[e].type) {
                                        if (b += "</li>", !m[e + 1] || m[e + 1].type !== n.type) break
                                    } else m[e].type === n.type ? (b = (b += ("<" + t + ">").repeat(Math.max(0, m[e].depth - r))) + ("</" + t + ">").repeat(Math.max(0, r - m[e].depth)) + "<li>", r = m[e].depth) : b += E([m[e]], g);
                                    e += 1
                                }
                                b += ("</" + t + ">").repeat(r + 1);
                                break;
                            case "align":
                                for (; n && "align" === n.type;) {
                                    var a = n.align,
                                        o = e += 1;
                                    if ("left" === a) {
                                        --e;
                                        break
                                    }
                                    for (; e < w && m[e] && "align" !== m[e].type;) e += 1;
                                    var o = E(m.slice(o, e), g),
                                        i = "";
                                    switch (a) {
                                        case "center":
                                            i += C + "margin-left: auto; margin-right: auto;";
                                            break;
                                        case "justify":
                                        case "right":
                                            i += "text-align: " + a + ";";
                                            break;
                                        default:
                                            +a && (i += C + "margin-left: " + a + "%;")
                                    }
                                    b += "<tw-align " + (i ? 'style="' + i + '"' : "") + ">" + o + "</tw-align>\n", n = m[e]
                                }
                                break;
                            case "column":
                                for (var s, c = []; n && "column" === n.type;) {
                                    var l = n.column,
                                        u = e += 1;
                                    if ("none" === l) {
                                        --e;
                                        break
                                    }
                                    for (; e < w && m[e] && "column" !== m[e].type;) e += 1;
                                    c.push({
                                        text: n.text,
                                        type: l,
                                        body: E(m.slice(u, e), g),
                                        width: n.width,
                                        marginLeft: n.marginLeft,
                                        marginRight: n.marginRight
                                    }), n = m[e]
                                }
                                c.length && (s = c.reduce(function(e, t) {
                                    return e + t.width
                                }, 0), b += "<tw-columns>" + c.map(function(e) {
                                    return "<tw-column type=".concat(e.type, " ", ' style="width:').concat(e.width / s * 100, "%; margin-left: ").concat(e.marginLeft, "em; margin-right: ").concat(e.marginRight, 'em;">').concat(e.body, "</tw-column>\n")
                                }).join("") + "</tw-columns>");
                                break;
                            case "heading":
                                for (b += "<h" + n.depth + ">"; ++e < w && m[e];) {
                                    if ("br" === m[e].type) {
                                        b += "</h" + n.depth + ">";
                                        break
                                    }
                                    b += E([m[e]], g)
                                }
                                break;
                            case "br":
                                if (!v.length || /td|th/.test(v[0])) {
                                    b += "<br>";
                                    for (var p = m[e + 1]; p && ("br" === p.type || "tag" === p.type && /^<br\b/i.test(p.text));) b += "<tw-consecutive-br" + ("tag" === p.type ? " data-raw" : "") + "></tw-consecutive-br>", p = m[(e += 1) + 1]
                                }
                                break;
                            case "hr":
                                b += "<hr>";
                                break;
                            case "escapedLine":
                            case "comment":
                                break;
                            case "inlineUrl":
                                b += '<a class="link" href="' + _(n.text) + '">' + n.text + "</a>";
                                break;
                            case "scriptStyleTag":
                            case "tag":
                                var d = n.text.toLowerCase();
                                /^<\/?(?:table|thead|tbody|tr|tfoot|td|th|svg)\b/.test(d) && !n.text.endsWith("/>") && v[n.text.startsWith("</") ? "shift" : "unshift"](d), b += n.text.startsWith("</") ? n.text : n.text.replace(/(\/)?>$/, function(e, t) {
                                    return " data-raw".concat(t ? "></".concat(n.text.match(/[\w-]+/)) : "", ">")
                                });
                                break;
                            case "sub":
                            case "sup":
                            case "strong":
                            case "em":
                                b += y(n, n.type);
                                break;
                            case "strike":
                                b += y(n, "s");
                                break;
                            case "bold":
                                b += y(n, "b");
                                break;
                            case "italic":
                                b += y(n, "i");
                                break;
                            case "twineLink":
                                d = _slicedToArray(S.lex("(link-goto:" + JSON.stringify(n.innerText) + "," + JSON.stringify(n.passage) + ")").children, 1)[0];
                                b += '<tw-expression type="macro" name="link-goto"' + (O.debug ? ' title="' + _(n.text) + '"' : "") + ' code="' + g.code.length + '"></tw-expression>', g.code.push(d);
                                break;
                            case "hook":
                                b += "<tw-hook " + (n.hidden ? "hidden " : "") + (n.name ? 'name="' + x(n.name) + '"' : "") + (O.debug && n.name ? ' title="Hook: ?' + n.name + '"' : "") + ' source="' + g.source.length + '"></tw-hook>', g.source.push(n.children);
                                break;
                            case "unclosedHook":
                                return b += "<tw-hook " + (n.hidden ? "hidden " : "") + (n.name ? 'name="' + x(n.name) + '"' : "") + 'source="' + g.source.length + '"></tw-hook>', g.source.push(m.slice(e + 1, w)), {
                                    v: b
                                };
                            case "verbatim":
                                b += A(_(n.innerText).replace(/\n/g, "<br>"), "tw-verbatim");
                                break;
                            case "collapsed":
                                b += y(n, "tw-collapsed");
                                break;
                            case "unclosedCollapsed":
                                return {
                                    v: b += "<tw-collapsed>" + E(m.slice(e + 1, w), g) + "</tw-collapsed>"
                                };
                            case "variable":
                            case "tempVariable":
                            case "macro":
                                var f = [],
                                    h = [];
                                if ("macro" === n.type && ! function e(t) {
                                        "string" !== t.type && "hook" !== t.type && t.children.every(e);
                                        var n = x(t.name);
                                        if ("macro" !== t.type || "prompt" !== n && "confirm" !== n) {
                                            if ("hook" === t.type && !t.everyLeaf(function(e) {
                                                    return "error" !== e.type || (h.push(e), !1)
                                                })) return !1
                                        } else f.push(t);
                                        return !0
                                    }(n), h.length) return {
                                    v: T.create("syntax", "This code hook's markup contained " + h.length + " error" + (h.length ? "s" : "") + ":<br>\u2014" + h.map(function(e) {
                                        return e.message
                                    }).join("<br>\u2014")).render(_(n.text))[0].outerHTML
                                };
                                d = f.map(function(e) {
                                    return e.blockerTree = g.blockers.length, g.blockers.push(e), e.blockerTree
                                });
                                b += '<tw-expression type="' + n.type + '" name="' + _(n.name || n.text) + '"' + (O.debug ? ' title="' + _(n.text) + '"' : "") + (d.length ? ' blockers="' + d + '"' : "") + ' code="' + g.code.length + '"></tw-expression>', g.code.push(n);
                                break;
                            default:
                                b += n.children && n.children.length ? E(n.children, g) : n.text
                        }
                        k = e
                    }(k);
                    if ("object" === _typeof(e)) return e.v
                }
            return b
        }
        return Object.freeze({
            exec: function(e) {
                var r = {
                        code: [],
                        blockers: [],
                        source: []
                    },
                    e = E(e = "string" == typeof e ? S.lex(e).children : e, r),
                    e = a(a.parseHTML(e, document, !0));
                return e.findAndFilter("script:not([src])").each(function(e, t) {
                    var n = t.getAttribute("type");
                    n && "text/javascript" !== n.toLowerCase() || t.setAttribute("type", "application/x-harlowe")
                }), r.blockers = r.blockers.map(function(e) {
                    e.blockedValue = !0;
                    e = Object.create(e);
                    return e.blockedValue = !1, e
                }), e.findAndFilter("tw-expression[code]:not([data-raw]), tw-expression[blockers]:not([data-raw]), tw-hook[source]:not([data-raw])").each(function(e, t) {
                    var n;
                    (t = a(t)).attr("blockers") && (n = t.popAttr("blockers").split(",").map(function(e) {
                        return r.blockers[e]
                    }), t.data("blockers", n)), t.attr("source") && t.data("source", r.source[t.popAttr("source")]), t.attr("code") && t.data("code", r.code[t.popAttr("code")])
                }), e
            }
        })
    }), define("repl", ["utils", "markup", "section"], function(e, t, n) {
        e.onStartup(function() {
            return setTimeout(function() {
                e.options.debug && (window.REPL = function(e) {
                    e = n.create().eval(t.lex("(print:" + e + ")"));
                    return e.TwineScript_Run ? e.TwineScript_Run().source : e
                }, window.LEX = function(e) {
                    e = t.lex(e);
                    return 1 === e.length ? e[0] : e
                })
            })
        })
    }), define("section", ["jquery", "utils", "twinescript/runner", "twinescript/operations", "state", "utils/operationutils", "utils/renderutils", "utils/scripttag", "datatypes/changercommand", "datatypes/colour", "datatypes/lambda", "datatypes/codehook", "internaltypes/changedescriptor", "internaltypes/varscope", "internaltypes/twineerror", "internaltypes/twinenotifier"], function(p, f, a, u, r, e, t, i, d, h, o, m, g, y, b, v) {
        var w = e.printBuiltinValue,
            k = e.objectName,
            S = e.typeID,
            T = e.isObject,
            s = t.collapse,
            _ = Object.assign,
            x = Object.create,
            O = Object.keys;

        function A(e, t, n) {
            if (t && "object" === _typeof(t) && d.isPrototypeOf(t)) {
                var r = n.popData("source") || (null == (r = n[0].cachedData) ? void 0 : r.source),
                    a = (null != (a = n[0]) && a.cachedData && (n[0].cachedData.source = void 0), n.data("originalSource", r), g.create({
                        target: n,
                        source: r,
                        section: this,
                        append: "append"
                    })),
                    o = t.run(a);
                if (b.containsError(o) && e.replaceWith(o.render(e.attr("title"))), !this.renderInto(r, null, a)) return o = f.insensitiveName(e.attr("name")), ["if", "elseif", "unless", "else", "testfalse"].includes(o) && (e.addClass("false"), "elseif" !== o) && (this.stackTop.lastHookShown = !1), n.data("live") && function(t, n, r) {
                    function a(e) {
                        p && (d -= (e - p) * (f.options.debug && void 0 !== f.options.speedMultiplier ? f.options.speedMultiplier : 1)), p = e, 0 < d ? requestAnimationFrame(a) : (d = s, o())
                    }
                    var o, i = this,
                        e = r.data("live"),
                        s = e.delay,
                        c = e.event,
                        l = ((n = _objectSpread(_objectSpread({}, n), {}, {
                            append: "replace",
                            transitionDeferred: !1,
                            enabled: !0
                        })).data = _objectSpread(_objectSpread({}, n.data), {}, {
                            live: void 0
                        }), r.data("originalSource") || ""),
                        u = this.stackTop.tempVariables,
                        p = null,
                        d = s;
                    o = this.whenUnblocked.bind(this, function() {
                        var e;
                        i.inDOM() && (e = null == c ? void 0 : c.filter(i, [!0], u), b.containsError(e) ? e.render(i, t.attr("title")).replaceAll(t) : c && !e[0] ? requestAnimationFrame(a) : (i.renderInto(l, r, n, u), e || r.find("tw-expression[name='stop']").length || i.inDOM() && requestAnimationFrame(a)))
                    }), requestAnimationFrame(a)
                }.call(this, e, a, n), !0
            } else {
                if (!1 === t) return o = n.popData("source") || (null == (r = n[0].cachedData) ? void 0 : r.source), null != (a = n[0]) && a.cachedData && (n[0].cachedData.source = void 0), o && (n.cachedData && (n.cachedData.source = void 0), n.data("originalSource", o), n.data("hidden", !0)), e.addClass("false"), !(this.stackTop.lastHookShown = !1);
                if (!0 !== t) return !1
            }
            return this.stackTop.lastHookShown = !0
        }

        function C(e) {
            var t, n, e = (e instanceof p ? e[0] : e).nextSibling;
            return e && (e instanceof Text && !e.textContent.trim() || ["br", "tw-consecutive-br"].includes((e.tagName || "").toLowerCase())) ? (t = (n = C(e)).whitespace, n = n.nextElem, {
                whitespace: p(e).add(t),
                nextElem: n
            }) : {
                whitespace: p(),
                nextElem: p(e)
            }
        }

        function E(e) {
            if (null != e && e.length) return p("<tw-open-button replay label='\ud83d\udd0d'>").data("evalReplay", e)
        }

        function c(e, t) {
            var n = this.eval(t);
            e.append(E(this.evalReplay)), e.append(function(e, t) {
                if (/a \((go-to|undo|redirect|restart):\) command/.exec(null == t ? void 0 : t.TwineScript_TypeName)) return p("<tw-open-button goto label='GO'>").data("goto", {
                    section: e,
                    command: t
                })
            }(this, n)), this.stackTop.evaluateOnly && n && (d.isPrototypeOf(n) || "function" == typeof n.TwineScript_Run) && (n = b.create("syntax", "I can't work out what ".concat(this.stackTop.evaluateOnly, " should evaluate to, because it contains a ").concat(d.isPrototypeOf(n) ? "changer." : "command."), "Please rewrite this without putting changers or commands here."));
            var r = p();
            for (i = e; d.isPrototypeOf(n);) {
                var a = C(i),
                    o = a.whitespace;
                if ((i = a.nextElem)[0] && i[0].nodeType === Node.TEXT_NODE && "+" === i[0].textContent.trim()) {
                    var i, a = i,
                        s = C(a),
                        c = s.whitespace;
                    if ((i = s.nextElem).is("tw-expression")) {
                        var s = i.popData("code") || (null == (s = i[0]) || null == (s = s.cachedData) ? void 0 : s.code),
                            l = (null != (l = i[0]) && l.cachedData && (i[0].cachedData.code = void 0), this.eval(s));
                        if (b.containsError(l)) {
                            n = l;
                            break
                        }
                        s = u["+"](n, l);
                        p(o).add(a).add(c).remove(), n = b.containsError(s) ? b.create("operation", "I can't combine " + k(n) + " with " + k(l) + ".", "function" == typeof l.TwineScript_Run ? "If you want to attach this changer to ".concat(k(l), ", remove the + between them.") : "Changers can only be added to other changers.") : s;
                        continue
                    }
                }
                if (i.is("tw-expression")) {
                    l = i.popData("code") || (null == (a = i[0]) || null == (c = a.cachedData) ? void 0 : c.code), a = (null != (s = i[0]) && s.cachedData && (i[0].cachedData.code = void 0), this.eval(l));
                    if (i.append(E(this.evalReplay)), b.containsError(a)) {
                        n = a;
                        break
                    }
                    if (a && "object" === _typeof(a) && "function" == typeof a.TwineScript_Attach) {
                        n = a.TwineScript_Attach(this, n);
                        break
                    }
                    return d.isPrototypeOf(a) ? void e.replaceWith(b.create("operation", "Changers like (".concat(n.macroName, ":) need to be combined using + between them."), "Place the + between the changer macros, or the variables holding them. The + is absent only between a changer and its attached hook or command.").render(e.attr("title"))) : void e.replaceWith(b.create("operation", "".concat(k(a), " can't have changers like (").concat(n.macroName, ":) attached."), "Changers placed just before hooks, links and commands will attempt to attach, but in this case it didn't work.").render(e.attr("title")))
                }
                if (i.is("tw-hook")) {
                    o.remove(), r = i;
                    break
                }
                n.macroName || f.impossible("Section.runExpression", "changer has no macroName");
                a = e.attr("title") || "(" + n.macroName + ": ...)";
                return void e.replaceWith(b.create("syntax", "The (".concat(n.macroName, ":) changer should be stored in a variable or attached to a hook."), "Macros like this should appear before a hook: ".concat(a, "[Some text]")).render(e.attr("title")))
            }
            e.attr("return", S(n)), r = r.length ? r : C(e).nextElem.filter("tw-hook"), (t = b.containsError(n)) ? e.replaceWith(t.render(e.attr("title")).append(E(this.evalReplay))) : v.isPrototypeOf(n) ? e.append(n.render()) : n && "function" == typeof n.TwineScript_Run ? (n = n.TwineScript_Run(this), b.containsError(n) ? e.replaceWith(n.render(e.attr("title"))) : g.isPrototypeOf(n) ? null != (t = n.data) && t.live ? e.replaceWith(b.create("unimplemented", "I currently can't attach (live:) or (event:) macros to commands - only hooks.").render(e.attr("title"))) : (n.section = this, n.target = i, this.renderInto("", i, n)) : T(n) && n.blocked ? (this.stackTop.blocked = n.blocked, e.data("code", {
                type: "macro",
                blockedValue: !0,
                text: e.attr("title") || "",
                start: 0,
                end: (e.attr("title") || "").length
            })) : n && f.impossible("Section.runExpression", "TwineScript_Run() returned a non-ChangeDescriptor ".concat(_typeof(n), ': "').concat(n, '"'))) : r.length && A.call(this, e, n, r) || ("string" == typeof n || "number" == typeof n || n instanceof Map || n instanceof Set || Array.isArray(n) || h.isPrototypeOf(n) || m.isPrototypeOf(n) || n && "function" == typeof n.TwineScript_Print && !d.isPrototypeOf(n) ? (n = w(n), b.containsError(n) ? e.replaceWith(n.render(e.attr("title"))) : "string" == typeof n || Array.isArray(n) ? this.renderInto(n, e) : f.impossible("printBuiltinValue() produced a non-string non-array ".concat(_typeof(n)))) : d.isPrototypeOf(n) || "boolean" == typeof n || f.impossible("Section.runExpression", "The expression evaluated to an unknown value: ".concat(n)))
        }
        var l = {
            add: [],
            remove: []
        };
        return Object.preventExtensions({
            create: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : f.storyElement,
                    n = _(x(this), {
                        timestamp: Date.now(),
                        dom: e,
                        stack: [],
                        enchantments: [],
                        unblockCallbacks: [],
                        freeVariables: null,
                        evalReplay: null,
                        loadedGame: !1,
                        Identifiers: {
                            TwineScript_Identifiers: !0,
                            it: 0,
                            get time() {
                                var e;
                                return null != (e = n.stackTop) && e.evaluateOnly ? b.create("operation", "'time' can't be used in ".concat(n.stackTop.evaluateOnly, ".")) : (Date.now() - n.timestamp) * (f.options.debug && void 0 !== f.options.speedMultiplier ? f.options.speedMultiplier : 1)
                            },
                            get turns() {
                                return r.turns
                            },
                            get turn() {
                                return r.turns
                            },
                            get visits() {
                                var t = n.stackTop.speculativePassage;
                                return r.history().filter(function(e) {
                                    return e === (t || r.passage)
                                }).length + (!t || t === r.passage)
                            },
                            get visit() {
                                return n.Identifiers.visits
                            },
                            get exits() {
                                var e;
                                return null != (e = n.stackTop) && e.evaluateOnly ? b.create("operation", "'exit' and 'exits' can't be used in ".concat(n.stackTop.evaluateOnly, ".")) : n.dom.find("tw-enchantment, tw-link").filter(function(e, t) {
                                    return (t = p(t)).data("enchantmentEvent") || t.parent().data("linkPassageName") || t.parent().data("clickEvent")
                                }).length
                            },
                            get exit() {
                                return n.Identifiers.exits
                            },
                            get pos() {
                                return n.stackTop && !n.stackTop.evaluateOnly && n.stackTop.lambdaPos ? +n.stackTop.lambdaPos || 1 : b.create("operation", "'pos' can only be used in lambdas that aren't 'when' lambdas.")
                            }
                        }
                    });
                return n
            },
            eval: function(t) {
                var e, n;
                f.options.debug && f.options.evalReplay && (n = Array.isArray(t) ? t.reduce(function(e, t) {
                    return e + t.text
                }, "") : t.text || "", this.evalReplay = [{
                    code: n,
                    fromCode: n,
                    basis: (Array.isArray(t) ? t[0] : t).start,
                    start: 0,
                    end: n.length,
                    diff: 0
                }]);
                try {
                    e = a(this, t)
                } catch (e) {
                    return null != (n = window.console) && n.error(e), this.evalReplay = null, b.create("", "An internal error occurred while trying to run ".concat([].concat(t).map(function(e) {
                        return e.text
                    }).join(""), "."), 'The error was "'.concat(e.message, '".\nIf this is the latest version of Harlowe, please consider reporting a bug (see the documentation).'))
                }
                return this.evalReplay && 2 === this.evalReplay.length && this.evalReplay.shift(), e
            },
            get stackTop() {
                return this.stack[0]
            },
            inDOM: function() {
                return 0 < f.storyElement.find(this.dom).length
            },
            evaluateTwineMarkup: function(e, t) {
                var n = p("<p>");
                return this.stack.unshift({
                    desc: g.create({
                        target: n,
                        source: e,
                        section: this,
                        append: "append"
                    }),
                    tempVariables: this.stackTop.tempVariables,
                    evaluateOnly: t,
                    finalIter: !0
                }), this.execute(), 0 < (e = n.find("tw-error")).length ? e : n
            },
            speculate: function(e, t, n) {
                this.stack.unshift({
                    evaluateOnly: n,
                    finalIter: !0,
                    tempVariables: _(x(y), {
                        TwineScript_VariableStore: {
                            type: "temp",
                            name: n
                        }
                    }),
                    speculativePassage: t
                });
                var r, n = this.evalReplay;
                return this.evalReplay = null, o.isPrototypeOf(e) ? r = e.apply(this, {
                    fail: !1,
                    pass: !0
                }) : e && (r = a(this, e)), this.stack.shift(), this.evalReplay = n, r
            },
            renderInto: function(e, a, t) {
                var o = this,
                    r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                    i = g.create({
                        target: a,
                        source: e,
                        section: this,
                        append: "append"
                    });
                if (t)
                    if (d.isPrototypeOf(t)) {
                        var e = t.run(i);
                        if (b.containsError(e)) return e.render(a.attr("title")).replaceAll(a), !1
                    } else _(i, t);
                if ((a = i.target, 50 <= this.stack.length) && 50 <= this.stack.reduce(function(e, t) {
                        return e + !!t.finalIter
                    }, 0)) return b.create("infinite", "Printing this expression may have trapped me in an infinite loop.").render(a.attr("title")).replaceAll(a), !1;
                var s = function(e, t, n) {
                        var r = a instanceof p && a.is("tw-hook") && 0 < a.parents("tw-collapsed,[collapsing=true]").length;
                        o.stack.unshift({
                            desc: e,
                            finalIter: n,
                            tempVariables: t,
                            collapses: r,
                            evaluateOnly: o.stackTop && o.stackTop.evaluateOnly
                        })
                    },
                    r = r || x(this.stack.length ? this.stackTop.tempVariables : y),
                    t = (hasOwnProperty.call(r, "TwineScript_VariableStore") || (t = null == (e = a) ? void 0 : e.tag(), r.TwineScript_VariableStore = {
                        type: "temp",
                        name: "tw-hook" === t ? a.attr("name") ? "?" + a.attr("name") : "an unnamed hook" : "tw-expression" === t ? "a " + a.attr("type") + " expression" : "tw-passage" === t ? "this passage" : "an unknown scope"
                    }), null == (e = this.stackTop) ? void 0 : e.blocked);
                if (O(i.loopVars).length) {
                    var c = _objectSpread({}, i.loopVars),
                        l = Math.min.apply(Math, _toConsumableArray(O(c).map(function(e) {
                            return c[e].length
                        })));
                    if (v.create(l + " loop" + (1 !== l ? "s" : "")).render().prependTo(a), l) {
                        for (var n = l - 1; 0 <= n; --n) ! function(n) {
                            s(i, O(c).reduce(function(e, t) {
                                return e[t] = c[t][n], e
                            }, x(r), n === l - 1))
                        }(n);
                        for (var u = l - 1; 0 <= u && !this.stackTop.blocked; --u) this.execute()
                    }
                } else s(i, r, !0), this.execute();
                return (0 === this.stack.length || !t && null != (e = this.stackTop) && e.blocked) && this.updateEnchantments(), i.enabled
            },
            execute: function() {
                var a = this,
                    e = this.stackTop,
                    t = e.desc,
                    n = e.dom,
                    r = e.collapses,
                    o = e.evaluateOnly;
                t && !n && (n = t.render(), this.stackTop.dom = n, this.stackTop.desc = void 0), n.findAndFilter('tw-hook,tw-expression,script[type="application/x-harlowe"]').each(function(e, t) {
                    var n = p(t).data();
                    t.cachedData = {
                        blockers: n.blockers,
                        code: n.code,
                        source: n.source
                    }
                }).each(function(e, t) {
                    if (a.stackTop.blocked) return !1;
                    var n = t.cachedData;
                    switch (n && (t.cachedData = void 0), (t = p(t)).tag()) {
                        case "tw-hook":
                            var r = t.popData("source") || (null == n ? void 0 : n.source);
                            (r && t.data("originalSource", r), t.data("tempVariables", a.stackTop.tempVariables), t.popAttr("hidden")) ? t.data("hidden", !0): r && a.renderInto(r, t);
                            break;
                        case "tw-expression":
                            var r = t.data("blockers") || (null == n ? void 0 : n.blockers);
                            if (r) {
                                if (o) return void t.removeData("blockers").removeData("code").replaceWith(b.create("syntax", "I can't use a macro like (prompt:) or (confirm:) in ".concat(o, "."), "Please rewrite this without putting such macros here.").render(t.attr("title"), t));
                                if (r.length) return a.stackTop.blocked = !0, r = a.eval(r.shift()), b.containsError(r) && (a.stackTop.blocked = !1, t.removeData("blockers").replaceWith(r.render(t.attr("title"), t))), !1;
                                t.removeData("blockers")
                            }
                            r = t.popData("code") || (null == n ? void 0 : n.code);
                            r && c.call(a, t, r);
                            break;
                        case "script":
                            if (f.reattachStoryElement(), t.text()) try {
                                i(t.text(), a.stackTop.tempVariables)
                            } catch (e) {
                                b.isPrototypeOf(e) ? t.replaceWith(e.render(t.text(), t)) : (null != (r = window.console) && r.error(e), t.replaceWith(b.create("", "A Javascript error occurred while running this <script> element.", 'The error was "'.concat(e, '". Check the browser console for more details.')).render(t.text(), t)))
                            }
                    }
                }), this.stackTop.blocked || (n.length && r && s(n), n.findAndFilter("tw-collapsed,[collapsing=true]").each(function() {
                    s(p(this))
                }), setTimeout(function() {
                    return n.find("input, textarea").first().focus()
                }, 100), this.stack.shift())
            },
            updateEnchantments: function() {
                this.enchantments.forEach(function(e) {
                    e.disenchant(), e.enchantScope()
                })
            },
            on: function(e, t) {
                return l[e].push(t), this
            },
            addEnchantment: function(t) {
                var n = this;
                this.enchantments.push(t), l.add.forEach(function(e) {
                    return e(n, t)
                })
            },
            removeEnchantment: function(t) {
                var n = this,
                    e = this.enchantments.indexOf(t);
                this.enchantments.splice(e, 1), t.disenchant(), l.remove.forEach(function(e) {
                    return e(n, t)
                })
            },
            unblock: function(e) {
                for (this.stack.length || f.impossible("Section.unblock", "stack is empty"), this.stackTop.blocked = !1, void 0 !== e && (this.stackTop.blockedValues = (this.stackTop.blockedValues || []).concat(e)); this.stack.length && !this.stackTop.blocked;) this.execute();
                if (!this.stack.length)
                    for (; 0 < this.unblockCallbacks.length;) {
                        var t;
                        if (this.unblockCallbacks.shift()(), null != (t = this.stackTop) && t.blocked) return
                    }
            },
            whenUnblocked: function(e, t) {
                this.stack.length && this.stackTop.blocked ? this.unblockCallbacks = this.unblockCallbacks.concat(e) : (t || e)()
            },
            blockedValue: function() {
                var e = this.stackTop;
                return e ? e.blockedValues && e.blockedValues.length ? e.blockedValues.shift() : (f.impossible("Section.blockedValue", "blockedValues is missing or empty"), 0) : (f.impossible("Section.blockedValue", "stack is empty"), 0)
            }
        })
    }), define("state", ["jquery", "utils", "passages", "datatypes/customcommand", "utils/operationutils", "markup"], function(n, y, b, v, e, t) {
        var i, w, C = e.toSource,
            E = e.is,
            k = t.lex,
            o = Object.assign,
            h = Object.create,
            e = Object.defineProperty,
            N = Array.isArray,
            s = Math.imul,
            t = (e(Map.prototype, "toJSON", {
                value: void 0
            }), e(Set.prototype, "toJSON", {
                value: void 0
            }), ["localStorage", "sessionStorage"].map(function(e) {
                try {
                    return !!window[e] && (window[e].setItem("test", "1"), window[e].removeItem("test"), !0)
                } catch (e) {
                    return !1
                }
            }));

        function S(e, t) {
            var n = 0 < arguments.length && void 0 !== e ? e : String.fromCodePoint(Date.now() % 1114112),
                e = 1 < arguments.length && void 0 !== t ? t : 0;
            i.seedIter = e, i.seed = n;
            for (var r, a = 0, o = 2166136261; a < n.length; a += 1) r = s(n.charCodeAt(a), 3432918353), o ^= s(r << 15 | r >>> 17, 461845907), o = s(o = o << 13 | o >>> 19, 5) + 3864292196 | 0;
            return o ^= n.length, o = s(o ^= o >>> 16, 2246822507), o = s(o ^= o >>> 13, 3266489909), o = ((o ^= o >>> 16) >>> 0) + 1831565813 * e,
                function() {
                    i.seedIter += 1;
                    var e = o += 1831565813,
                        e = s(e ^ e >>> 15, 1 | e);
                    return (((e ^= e + s(e ^ e >>> 7, 61 | e)) ^ e >>> 14) >>> 0) / 4294967296
                }
        }

        function r(e, t) {
            for (var n, r = t.variables, a = h(null), o = e.length - 1; 0 <= o; --o) {
                for (var i, s, c = e[o], l = 0, u = ["mockVisits", "mockTurns", "seed", "seedIter"]; l < u.length; l++) {
                    var p = u[l];
                    hasOwnProperty.call(c, p) && !hasOwnProperty.call(t, p) && (t[p] = c[p])
                }
                for (i in c.forgetVisits && (t.forgetVisits = Math.max(t.forgetVisits || 0, c.forgetVisits)), void 0 !== c.turns && (t.turns = (t.turns || 0) + c.turns), t.pastVisits || (t.pastVisits = []), o !== e.length - 1 && (void 0 !== e[o + 1].visits && Array.isArray(t.pastVisits[0]) ? t.pastVisits[0] : t.pastVisits).unshift(c.passage), void 0 !== c.pastVisits && t.pastVisits.unshift(c.pastVisits), void 0 !== c.visits && t.pastVisits.unshift(c.visits), c.variables)
                    if ("TwineScript_TypeDefs" === i)
                        for (var d in r[i] || (r[i] = h(null)), c.variables[i]) r[i][d] || (r[i][d] = c.variables[i][d]);
                    else i.startsWith("TwineScript_") || i in r || (null === c.variables[i] && (a[i] = !0), a[i]) || (r[i] = c.variables[i], !(s = c.valueRefs[i])) || "via" in s || t.valueRefs[i] || (t.valueRefs[i] = s)
            }
            for (n in t.valueRefs) {
                var f = t.valueRefs[n];
                f && "via" in f && delete t.valueRefs[n]
            }
        }
        var a, c = {
                passage: "",
                variables: h(null),
                visits: void 0,
                turns: void 0,
                seed: void 0,
                seedIter: void 0,
                mockVisits: void 0,
                mockTurns: void 0,
                forgetVisits: void 0,
                create: function(e) {
                    var t = h(c);
                    return t.passage = e || "", t.variables = h(null), t.valueRefs = h(null), t
                }
            },
            l = {
                forward: [],
                back: [],
                load: [],
                beforeForward: [],
                beforeBack: [],
                beforeLoad: [],
                forgetUndos: []
            },
            u = [],
            p = -1,
            d = c.create(),
            f = "";

        function m() {
            i.history = i.pastVisits.slice(i.forgetVisits).reduce(function(e, t) {
                return e.concat(t)
            }, []), i.mockVisits && (i.history = i.mockVisits.concat(i.history))
        }

        function g() {
            var e = c.create();
            e.pastVisits = [], o(e.variables, {
                TwineScript_ObjectName: "this story's variables",
                TwineScript_TypeDefs: h(null),
                TwineScript_VariableStore: {
                    type: "global",
                    name: "this story's variables"
                },
                TwineScript_Delete: function(e) {
                    delete this[e], d.variables[e] = null, delete d.valueRefs[e]
                },
                TwineScript_Set: function(e, t, n) {
                    if (this[e] = t, d.variables[e] = t, n) d.valueRefs[e] = n;
                    else if ((N(t) || t instanceof Map || t instanceof Set || "string" == typeof t) && !y.options.uncompressedStructures)
                        for (var r = p; 0 <= r; --r) {
                            var a = u[r].variables[e];
                            if (void 0 !== a) {
                                a = function e(t, n, r) {
                                    var a = "it" === r ? "its" : r + "'s",
                                        o = "";
                                    if (N(n) && N(t) && n.length) {
                                        for (var i = n.length === t.length, o = "(a:", s = 0; s < n.length; s += 1) {
                                            var c, l, u, p = n[s];
                                            E(p, t[s]) ? (c = C(p), l = "".concat(a, " ").concat(s + 1, "th"), o += (c.length < l.length ? c : l) + ",") : (i = !1, -1 < (c = t.indexOf(p)) ? (l = C(p), u = "".concat(a, " ").concat(c + 1, "th"), o += (l.length < u.length ? l : u) + ",") : o += e(t[s], p, "".concat(a, " ").concat(s + 1, "th")) + ",")
                                        }
                                        o = i ? r : o.slice(0, -1) + ")"
                                    } else if (n instanceof Map && t instanceof Map && n.size) {
                                        var d, f = n.size === t.size,
                                            h = (o = "(dm:", _createForOfIteratorHelper(n.entries()));
                                        try {
                                            for (h.s(); !(d = h.n()).done;) {
                                                var m, g, y = _slicedToArray(d.value, 2),
                                                    b = y[0],
                                                    v = y[1];
                                                o += "".concat(C(b), ","), E(v, t.get(b)) ? (m = C(v), g = "".concat(a, " (").concat(C(b), ")"), o += (m.length < g.length ? m : g) + ",") : (f = !1, o += e(t.get(b), v, "".concat(a, " (").concat(C(b), ")")) + ",")
                                            }
                                        } catch (e) {
                                            h.e(e)
                                        } finally {
                                            h.f()
                                        }
                                        o = f ? r : o.slice(0, -1) + ")"
                                    } else if (n instanceof Set && t instanceof Set && n.size) {
                                        var w, k = new Set,
                                            S = new Set,
                                            T = _createForOfIteratorHelper(t);
                                        try {
                                            for (T.s(); !(w = T.n()).done;) {
                                                var _ = w.value;
                                                n.has(_) || k.add(_)
                                            }
                                        } catch (e) {
                                            T.e(e)
                                        } finally {
                                            T.f()
                                        }
                                        var x, O = _createForOfIteratorHelper(n);
                                        try {
                                            for (O.s(); !(x = O.n()).done;) {
                                                var A = x.value;
                                                t.has(A) || S.add(A)
                                            }
                                        } catch (e) {
                                            O.e(e)
                                        } finally {
                                            O.f()
                                        }
                                        k.size || S.size || (o = r), o = k.size + S.size > n.size ? C(n) : r + (S.size ? "+" + C(S) : "") + (k.size ? "-" + C(k) : "")
                                    } else "string" == typeof n && "string" == typeof t && n && (n.startsWith(t) ? o = r + "+" + C(n.slice(t.length)) : n.endsWith(t) && (o = C(n.slice(0, n.length - t.length)) + "+" + r));
                                    return o ? "it" === r ? {
                                        via: o
                                    } : o : "it" === r ? void 0 : C(n)
                                }(a, t, "it");
                                a && ("it" === a.via ? delete d.variables[e] : d.valueRefs[e] = a);
                                break
                            }
                        }
                },
                TwineScript_GetProperty: function(e) {
                    return this[e]
                },
                TwineScript_DefineType: function(e, t) {
                    this.TwineScript_TypeDefs[e] = t, hasOwnProperty.call(d.variables, "TwineScript_TypeDefs") || (d.variables.TwineScript_TypeDefs = h(null)), d.variables.TwineScript_TypeDefs[e] = t
                }
            }), r(u.slice(0, p + 1), e), i = e, m(), w = S(e.seed, e.seedIter)
        }

        function T(e) {
            d = c.create(e);
            e = a.serialise(!0), f = e.past, e = e.pastAndPresent;
            if (a.hasSessionStorage && "string" == typeof e) try {
                sessionStorage.setItem("Saved Session", e)
            } catch (e) {}
        }

        function _(e, t, n, r) {
            for (var a in r)
                if (hasOwnProperty.call(r, a) && !a.startsWith("TwineScript_"))
                    if ("object" === _typeof(r[a]))
                        if (hasOwnProperty.call(r[a], "at")) {
                            n.valueRefs[a] = r[a];
                            var o = r[a],
                                i = o.at,
                                s = o.from,
                                c = o.to,
                                l = o.hash,
                                u = o.seed,
                                p = o.seedIter,
                                o = o.blockedValues;
                            if (!b.has(i)) throw Error('The data refers to a passage named `"'.concat(n.passage, "\"`, but it isn't in this story."));
                            var d = b.get(i).get("source"),
                                f = d.slice(s, c);
                            if (void 0 !== l)
                                for (var h = 0, m = c - s; y.hash(f).toString(16) !== l;) {
                                    if (h + m >= d.length) throw Error("The value (or type) of the variable `$".concat(a, "` couldn't be found in the passage `\"").concat(i, '"`.'));
                                    (h += 1) === s && (h += 1), f = d.slice(h, h + m)
                                }
                            c = k(f, "", "macro");
                            void 0 !== u && void 0 !== p && (w = S(u, p)), void 0 !== o && (e.stackTop.blockedValues = o, c.forEach(function e(t) {
                                var n;
                                "string" !== t.type && "hook" !== t.type && t.children.every(e), "macro" !== t.type || "prompt" !== (n = y.insensitiveName(t.name)) && "confirm" !== n || (t.blockedValue = !0)
                            })), r[a] = e.eval(c)
                        } else if (hasOwnProperty.call(r[a], "via")) {
                for (var g = t.length - 1; 0 <= g; --g)
                    if (hasOwnProperty.call(t[g].variables, a)) {
                        e.Identifiers.it = t[g].variables[a];
                        break
                    } r[a] = e.eval(k(r[a].via, "", "macro")), e.Identifiers.it = 0
            } else hasOwnProperty.call(r[a], "changer") && (r[a].changer = e.eval(k(r[a].changer, "", "macro")), r[a].hook = e.eval(k(r[a].hook, "", "macro")), _(e, t, n, r[a].variables), r[a] = v.create(r[a]));
            else r[a] = e.eval(k(r[a], "", "macro"));
            else "TwineScript_MockVisits" === a && (n.mockVisits = r[a])
        }
        return g(), d.seed = i.seed, d.seedIter = 0, (a = {
            get passage() {
                return d.passage
            },
            get variables() {
                return i.variables
            },
            get pastLength() {
                return p
            },
            get turns() {
                return p + 1 + (i.turns || 0) + (i.mockTurns || 0)
            },
            get futureLength() {
                return u.length - 1 - p
            },
            get mockVisits() {
                return i.mockVisits || []
            },
            set mockVisits(e) {
                i.mockVisits = e, d.mockVisits = e, m()
            },
            get mockTurns() {
                return i.mockTurns || 0
            },
            set mockTurns(e) {
                i.mockTurns = e, d.mockTurns = e
            },
            history: function() {
                return i.history
            },
            forgetUndos: function(e) {
                e < 0 && (e = u.length + e);
                var t, e = u.splice(0, Math.min(u.length - 1, e));
                e.length && (p = u.length - 1, t = u[0], r(e, t), t.pastVisits.push(e[e.length - 1].passage), t.turns = (t.turns || 0) + e.length, i.turns = (i.turns || 0) + e.length, t.forgetVisits && (t.pastVisits = t.pastVisits.slice(t.forgetVisits - t.turns), t.forgetVisits -= t.turns), f = "", 0 === p && n("tw-link[undo], tw-icon[alt='Undo']", y.storyElement).each(function(e, t) {
                    (n(t).closest("tw-expression, tw-hook").data("forgetUndosEvent") || Object)(t)
                }), l.forgetUndos.forEach(function(e) {
                    return e()
                }))
            },
            forgetVisits: function(e) {
                (e = e < 0 ? u.length + e : e) > p + i.turns && (e = p + i.turns), d.forgetVisits = i.forgetVisits = Math.max(i.forgetVisits || 0, e), m()
            },
            passageNameVisited: function(e) {
                var t = 0;
                if (!b.get(e)) return 0;
                for (var n = 0; n < i.history.length; n++) t += +(e === i.history[n]);
                return t
            },
            get timeline() {
                return u
            },
            play: function(t) {
                var e;
                d || y.impossible("State.play", "present is undefined!"), l.beforeForward.forEach(function(e) {
                    return e()
                }), d.passage && ((null != (e = d.visits) && e.length && Array.isArray(i.pastVisits[i.pastVisits.length - 1]) ? i.pastVisits[i.pastVisits.length - 1] : i.pastVisits).push(d.passage), i.history.push(d.passage)), d.passage = t, u = u.slice(0, p + 1).concat(d), p += 1, T(t), l.forward.forEach(function(e) {
                    return e(t)
                })
            },
            redirect: function(e) {
                var t;
                d || y.impossible("State.redirect", "present is undefined!"), d.passage && (null != (t = d.visits) && t.length && Array.isArray(i.pastVisits[i.pastVisits.length - 1]) ? i.pastVisits[i.pastVisits.length - 1].push(d.passage) : i.pastVisits.push([d.passage]), i.history.push(d.passage)), d.visits = (d.visits || []).concat(e), d.passage = e
            },
            rewind: function(e) {
                for (var t = void 0 !== e ? e : 1, n = !1; 0 < t && 0 < p; t--) n = !0, --p;
                return n && (l.beforeBack.forEach(function(e) {
                    return e()
                }), f = "", T(u[p].passage), g(), l.back.forEach(function(e) {
                    return e()
                })), n
            },
            fastForward: function(e) {
                var t = 1,
                    n = !1;
                for ("number" == typeof e && (t = e); 0 < t && 0 < u.length; t--) n = !0, p += 1;
                return n && (l.beforeForward.forEach(function(e) {
                    return e()
                }), T(u[p].passage), g(), l.forward.forEach(function(e) {
                    return e(u[p].passage, "fastForward")
                })), n
            },
            on: function(e, t) {
                if (e in l) return "function" != typeof t || l[e].includes(t) || l[e].push(t), a;
                y.impossible("State.on", "invalid event name")
            },
            reset: function() {
                l.beforeLoad.forEach(function(e) {
                    return e()
                }), u = [], p = -1, g(), (d = c.create()).seed = i.seed, d.seedIter = 0, f = "", w = S(), l.load.forEach(function(e) {
                    return e(u)
                })
            },
            hasStorage: t[0],
            hasSessionStorage: t[1],
            setSeed: function(e) {
                w = S(e), d.seed = i.seed, d.seedIter = 0
            },
            get seed() {
                return i.seed
            },
            get seedIter() {
                return i.seedIter
            },
            random: function() {
                var e = w();
                return d.seedIter = i.seedIter, e
            },
            shuffled: function() {
                for (var a = this, e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var r = t.reduce(function(e, t, n) {
                    var r = a.random() * (n + 1) | 0;
                    return r === n ? e.push(t) : (e.push(e[r]), e[r] = t), e
                }, []);
                return d.seedIter = i.seedIter, r
            }
        }).serialise = function(e) {
            function o(e, t) {
                if ("TwineScript_TypeDefs" === t) {
                    var n, r = {};
                    for (n in e[t]) r[n] = C(e[t][n]);
                    return r
                }
                var a;
                return null === e[t] ? null : e[t] && hasOwnProperty.call(e[t], "TwineScript_CustomCommand") ? (a = e[t].TwineScript_CustomCommand(), {
                    changer: C(a.changer),
                    toSource: a.toSource,
                    hook: C(a.hook),
                    variables: Object.keys(a.variables).reduce(function(e, t) {
                        return e[t] = o(a.variables, t), e
                    }, {})
                }) : C(e[t])
            }

            function t(e, t) {
                if (c.isPrototypeOf(t) && void 0 === t.visits && void 0 === t.turns && void 0 === t.mockVisits && void 0 === t.forgetVisits && void 0 === t.pastVisits && void 0 === t.mockTurns && void 0 === t.seed && void 0 === t.seedIter && Object.keys(t.variables).every(function(e) {
                        return e.startsWith("TwineScript_")
                    })) return t.passage;
                if (!c.isPrototypeOf(this) || "valueRefs" !== e) {
                    if (c.isPrototypeOf(this) && "variables" === e) {
                        var n, r = {};
                        for (n in this.variables) this.valueRefs[n] ? r[n] = this.valueRefs[n] : r[n] = o(this.variables, n);
                        return r
                    }
                    return t
                }
            }
            var e = u.slice(f ? e ? p - 1 : p : 0, p + 1),
                n = e.slice(0, -1),
                r = f;
            try {
                return {
                    past: r = n.length ? (r ? r.slice(0, -1) + "," : "[") + JSON.stringify(n, t).slice(1) : r,
                    pastAndPresent: r.slice(0, -1) + (r ? "," : "[") + JSON.stringify(e.slice(-1), t).slice(1)
                }
            } catch (e) {
                return {
                    past: !1,
                    pastAndPresent: !1
                }
            }
        }, a.deserialise = function(e, t) {
            var n;
            try {
                n = JSON.parse(t)
            } catch (e) {
                return Error("The save data is unintelligible.")
            }
            if (!N(n)) return Error("The save data isn't a sequence of past turns.");
            for (var r = 0; r < n.length; r += 1) {
                var a = n[r];
                if ("string" == typeof a) a = {
                    passage: a,
                    variables: {}
                };
                else if ("object" !== _typeof(a) || !hasOwnProperty.call(a, "variables")) {
                    n.splice(r--, 1);
                    continue
                }
                if (a.valueRefs = h(null), a.variables = o(h(null), a.variables), !b.hasValid(a.passage)) return Error('The data refers to a passage named `"'.concat(a.passage, "\"`, but it isn't in this story."));
                if (hasOwnProperty.call(a.variables, "TwineScript_TypeDefs")) try {
                    _(e, n.slice(0, r), a, a.variables.TwineScript_TypeDefs)
                } catch (e) {
                    return Error("The variable types on turn ".concat(r + 1, " couldn't be reconstructed.").concat(e.message ? " (".concat(e.message, ")") : ""))
                }
                try {
                    _(e, n.slice(0, r), a, a.variables)
                } catch (e) {
                    return Error("The variables on turn ".concat(r + 1, " couldn't be reconstructed.").concat(e.message ? " (".concat(e.message, ")") : ""))
                }
                n[r] = o(h(c), a)
            }
            return p = (u = n).length - 1, l.load.forEach(function(e) {
                return e(u)
            }), f = "", g(), T(u[p].passage), !0
        }, Object.seal(c), Object.freeze(a)
    }), define("utils", ["jquery", "markup", "utils/polyfills"], function(d) {
        var r = String.fromCharCode,
            n = "audio,blockquote,canvas,div,h1,h2,h3,h4,h5,hr,ol,p,pre,table,ul,video,tw-align,tw-story,tw-passage,tw-sidebar,tw-columns,tw-column,tw-meter".split(","),
            a = "a,b,i,em,strong,sup,sub,abbr,acronym,s,strike,del,big,small,script,img,button,input,tw-link,tw-broken-link,tw-verbatim,tw-collapsed,tw-error,tw-colour,tw-icon".split(","),
            f = ["audio"],
            e = _slicedToArray([function(e) {
                return r(e) !== r(e).toLowerCase()
            }, function(e) {
                return r(e) !== r(e).toUpperCase()
            }, function(e) {
                return r(e).toLowerCase() !== r(e).toUpperCase()
            }].map(function(e) {
                return "[" + Array.from(Array(57343)).map(function(e, t) {
                    return t
                }).filter(e).map(function(e, t, n) {
                    return e === n[t - 1] + 1 && e === n[t + 1] - 1 ? "-" : r(e)
                }).join("").replace(/-+/g, "-") + "]"
            }), 3),
            t = e[0],
            o = e[1],
            e = e[2];

        function s(e) {
            return "instant" === e ? 0 : 800
        }
        var i, c, l = [],
            u = {},
            p = 0,
            h = {},
            m = 0,
            g = {};

        function y(n, r, e, a, o) {
            var i = null,
                s = 0,
                c = r + e;

            function l(e) {
                var t;
                1 & n[0].compareDocumentPosition(document) && (c = 0), i && (c -= t = e - i), i = e, 0 < a && 0 < p + m && n.data("expediteAnim")(a), c <= r && (s += t || 0, "paused" === n.css("animation-play-state")) && n.css({
                    visibility: "",
                    "animation-play-state": "running"
                }), c <= 0 ? (n.removeData("expediteAnim"), o()) : requestAnimationFrame(l)
            }
            n.data("expediteAnim", function(e) {
                var t;
                c -= e = void 0 === e ? s : e, "running" === n.css("animation-play-state") && n.css("animation-delay", (("ms" === (t = (t = n.css("animation-delay")).toLowerCase()).slice(-2) ? +t.slice(0, -2) || 0 : "s" === t.slice(-1) && 1e3 * +t.slice(0, -1) || 0) || 0) - e + "ms")
            }), c ? requestAnimationFrame(l) : l()
        }
        d(document.documentElement).on("keydown keyup mousedown mouseup", function(e) {
            var t = e.key,
                n = e.button,
                e = e.type.includes("down"),
                r = t ? u : h,
                n = t && v.insensitiveName(t) || n;
            r[n] && !e ? t ? p = Math.max(p - 1, 0) : m = Math.max(m - 1, 0) : !r[n] && e && (t ? p += 1 : m += 1), r[n] = e
        }).on("mousemove", function(e) {
            var t = e.pageX,
                e = e.pageY;
            g.x = t, g.y = e
        });
        var b = /-|_/g,
            v = {
                hash: function(e) {
                    for (var t = 9, n = e.length; 0 < n;) --n, t = Math.imul(t ^ e.charCodeAt(n), Math.pow(9, 9));
                    return (t ^ t >>> 9) >>> 0
                },
                permutations: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    for (var r, a, o = t.length, i = [
                            [].concat(t)
                        ], s = Array(o).fill(0), c = 1; c < o;) s[c] < c ? (r = c % 2 && s[c], a = t[c], t[c] = t[r], t[r] = a, ++s[c], c = 1, i.push([].concat(t))) : (s[c] = 0, ++c);
                    return i
                },
                nth: function(e) {
                    var t = +e + "";
                    return e + ("1" !== t[t.length - 1] || 1 !== t.length && "1" === t[t.length - 2] ? "2" !== t[t.length - 1] || 1 !== t.length && "1" === t[t.length - 2] ? "3" !== t[t.length - 1] || 1 !== t.length && "1" === t[t.length - 2] ? "th" : "rd" : "nd" : "st")
                },
                plural: function(e, t, n) {
                    return e + " " + (1 !== Math.abs(e) ? n || t + "s" : t)
                },
                andList: function(e) {
                    return e.length <= 1 ? e[0] : e.slice(0, -1).join(", ") + " and " + e[e.length - 1]
                },
                realWhitespace: "[ \\n\\r\\f\\t\\v\\u00a0\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000]",
                anyRealLetter: "[\\dA-Za-z\\u00c0-\\u00de\\u00df-\\u00ff\\u0150\\u0170\\u0151\\u0171\\uD800-\\uDFFF]",
                anyUppercase: t,
                anyLowercase: o,
                anyCasedLetter: e,
                anyNewline: "(?:\\n|\\r|\\r\\n)",
                unescape: function(e) {
                    return e.replace(/&(?:amp|lt|gt|quot|nbsp|zwnj|#39|#96);/g, function(e) {
                        return {
                            "&amp;": "&",
                            "&gt;": ">",
                            "&lt;": "<",
                            "&quot;": '"',
                            "&#39;": "'",
                            "&nbsp;": String.fromCharCode(160),
                            "&zwnj;": String.fromCharCode(8204)
                        } [e]
                    })
                },
                escape: function(e) {
                    return e.replace(/[&><"']/g, function(e) {
                        return {
                            "&": "&amp;",
                            ">": "&gt;",
                            "<": "&lt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        } [e]
                    })
                },
                insensitiveName: function(e) {
                    return (e + "").toLowerCase().replace(b, "")
                },
                allKeysDown: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.every(function(e) {
                        return u[e]
                    })
                },
                someKeysDown: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.some(function(e) {
                        return u[e]
                    })
                },
                buttonsDown: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.every(function(e) {
                        return h[e]
                    })
                },
                anyInputDown: function() {
                    return 0 < p + m
                },
                mouseCoords: g,
                parentColours: function(e) {
                    for (var t, n = {
                            colour: null,
                            backgroundColour: null
                        }, r = /^\w+a\(.+?,\s*0\s*\)$|^transparent$/; e.length && e[0] !== document; e = e.parent())
                        if (n.backgroundColour || (t = e.css("background-color")).match(r) || (n.backgroundColour = t), n.colour || (t = e.css("color")).match(r) || (n.colour = t), n.colour && n.backgroundColour) return n;
                    return {
                        colour: "#fff",
                        backgroundColour: "#000"
                    }
                },
                childrenProbablyInline: function(e) {
                    var t = [];
                    return [].every.call(e.findAndFilter("*"), function(e) {
                        if (!(e.hidden || /none|inline/.test(e.style.display) || /display: (none|inline)/.test(e.getAttribute("style")))) {
                            if (n.includes(e.tagName.toLowerCase()) || /display: (?!none|inline|inherit|unset)/.test(e.getAttribute("style"))) return !1;
                            a.includes(e.tagName.toLowerCase()) || t.push(e)
                        }
                        return !0
                    }) && t.every(function(e) {
                        return /inline|none/.test(window.getComputedStyle(e).display)
                    })
                },
                transitionOut: function(e, t, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0,
                        a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
                        o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0,
                        i = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : void 0;
                    0 !== e.length && (n = n || s(t), !(1 < e.length) && v.childrenProbablyInline(e) && ["tw-hook", "tw-passage", "tw-sidebar", "tw-expression"].includes(e.tag()) || (e = e.wrapAll("<tw-transition-container>").parent()), i && e.css("transform-origin", i), e.attr("data-t8n", t).addClass("transition-out").css({
                        "animation-duration": "".concat(n, "ms"),
                        "animation-delay": "".concat(-o, "ms"),
                        "animation-play-state": "paused"
                    }), requestAnimationFrame(function() {
                        v.childrenProbablyInline(e) ? e.css("display", "inline") : e.parent().is("tw-backdrop,tw-story") || e[0].setAttribute("style", e[0].getAttribute("style") + "display:block !important;width:100%")
                    }), y(e, n, r - o, a, function() {
                        e.remove()
                    }))
                },
                transitionIn: function(u, e, t) {
                    var p, n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0,
                        r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
                        a = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0,
                        o = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : void 0;
                    0 !== u.length && (t = t || s(e), (p = 1 < u.length || !v.childrenProbablyInline(u) || !["tw-hook", "tw-passage", "tw-sidebar", "tw-expression"].includes(u.tag())) && (u = u.wrapAll("<tw-transition-container>").parent()), o && u.css("transform-origin", o), u.attr("data-t8n", e).addClass("transition-in").css(_objectSpread({
                        "animation-duration": "".concat(t, "ms"),
                        "animation-delay": "".concat(-a, "ms")
                    }, n - a ? {
                        visibility: "hidden",
                        "animation-play-state": "paused"
                    } : {})), requestAnimationFrame(function() {
                        v.childrenProbablyInline(u) ? u.css("display", "inline") : u.parent().is("tw-backdrop,tw-story") || u[0].setAttribute("style", u[0].getAttribute("style") + "display:block !important;width:100%")
                    }), y(u, t, n - a, r, function() {
                        var e = 0 === u.filter(f.join(",")).length;
                        if (p && e) {
                            u.find("tw-transition-container, .transition-in, .transition-out").each(function(e, t) {
                                ((t = d(t)).data("expediteAnim") || Object)()
                            });
                            for (var t = [], n = u.find("*"), r = 0; r < n.length; r += 1) {
                                var a = n[r];
                                0 === a.scrollTop && 0 === a.scrollLeft || t.push([a, a.scrollLeft, a.scrollTop])
                            }
                            e = u.find(document.activeElement);
                            u.contents().unwrap();
                            for (var o = 0, i = t; o < i.length; o++) {
                                var s = _slicedToArray(i[o], 3),
                                    c = s[0],
                                    l = s[1],
                                    s = s[2];
                                c.scrollLeft = l, c.scrollTop = s
                            }
                            e.length && e[0].focus()
                        } else u.removeClass("transition-in").removeAttr("data-t8n")
                    }))
                },
                debounce: function(e) {
                    function t() {
                        300 < Date.now() - l || s <= u ? (u = n = 0, p = !i, o ? (e(c), c = []) : e.apply(void 0, _toConsumableArray(c)), p = !1) : n = requestAnimationFrame(t)
                    }
                    var n, r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        a = r.batch,
                        o = void 0 !== a && a,
                        a = r.recur,
                        i = void 0 !== a && a,
                        a = r.maxWait,
                        s = void 0 === a ? 1 / 0 : a,
                        c = [],
                        l = 0,
                        u = 0,
                        p = !1;
                    return function() {
                        var e;
                        p || (e = Date.now(), u += e - l, l = e, o ? c.push(arguments) : c = arguments, n && cancelAnimationFrame(n), n = requestAnimationFrame(t))
                    }
                },
                impossible: function(e, t) {
                    window.console && console.error(e + "(): " + t)
                },
                onStartup: function(e) {
                    l ? l.push(e) : e()
                },
                get storyElement() {
                    return i
                },
                detachStoryElement: function() {
                    document.documentElement.contains(i[0]) && (c = i.parent(), i.detach())
                },
                reattachStoryElement: function() {
                    document.documentElement.contains(i[0]) || (c || d(document.body)).append(i.parents().length ? i.parents().last() : i)
                },
                options: {
                    speedMultiplier: 1
                }
            };
        return d(function() {
            i = d("tw-story"), l.forEach(function(e) {
                return e()
            }), l = null
        }), Object.freeze(v)
    }), define("datatypes/assignmentrequest", ["utils/operationutils", "datatypes/typedvar", "datatypes/datatype", "internaltypes/varref", "internaltypes/twineerror"], function(e, y, b, v, w) {
        var k = e.objectName,
            S = e.matches,
            t = e.toSource;
        return Object.freeze({
            assignmentRequest: !0,
            TwineScript_TypeName: "a VariableToValue (a 'to' or 'into' expression)",
            TwineScript_ObjectName: "a VariableToValue (a 'to' or 'into' expression)",
            TwineScript_ToSource: function() {
                return "into" === this.operator ? "".concat(t(this.src), " ").concat(this.operator, " ").concat(t(this.dest)) : "".concat(t(this.dest), " ").concat(this.operator, " ").concat(t(this.src))
            },
            TwineScript_Unstorable: !0,
            set: function() {
                var e, t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                    n = [],
                    r = function e(t, n, r) {
                        var a = !(2 < arguments.length && void 0 !== r) || r,
                            o = [],
                            i = n && v.isPrototypeOf(n) ? n.get() : n;
                        if (w.containsError(i)) return i;
                        if (Array.isArray(i) && Array.isArray(t)) {
                            for (var s = 0, c = 0; s < t.length && c < i.length;) {
                                var l = t[s],
                                    u = i[c];
                                if (y.isPrototypeOf(l) && l.datatype.rest || b.isPrototypeOf(l) && l.rest) {
                                    for (var p = c; c < i.length && S(l, u);) u = i[c += 1];
                                    y.isPrototypeOf(l) ? l.datatype = [l.datatype] : b.isPrototypeOf(l) && (l = b.create("array")), o = o.concat(e(l, v.isPrototypeOf(n) ? v.create(n, {
                                        first: p + 1,
                                        last: c + 1
                                    }) : i.slice(p, c)))
                                } else o = o.concat(e(l, v.isPrototypeOf(n) ? v.create(n, c + 1) : u)), c += 1;
                                s += 1
                            }
                            return s < t.length ? a && w.create("operation", "I can't unpack this array because it needs ".concat(t.length - s, " more value").concat(0 < t.length - s ? "s" : "", ".")) : o
                        }
                        if (t instanceof Map && i instanceof Map) {
                            var d, f = _createForOfIteratorHelper(t.entries());
                            try {
                                for (f.s(); !(d = f.n()).done;) {
                                    var h = _slicedToArray(d.value, 2),
                                        m = h[0],
                                        g = h[1];
                                    if (!i.has(m)) return a && w.create("operation", "I can't unpack this datamap because it needs a '" + m + "' data name.");
                                    o = o.concat(e(g, v.isPrototypeOf(n) ? v.create(n, m) : i.get(m)))
                                }
                            } catch (e) {
                                f.e(e)
                            } finally {
                                f.f()
                            }
                            return o
                        }
                        if (y.isPrototypeOf(t)) {
                            if ("function" == typeof t.datatype.destructure) return [{
                                dest: t,
                                value: i,
                                src: n
                            }].concat(t.datatype.destructure(i));
                            if (!S(i, t.datatype)) return a && w.create("operation", "I can't put ".concat(k(i), " into ").concat(t.varRef.TwineScript_ToSource(), " because it doesn't match ").concat(t.varRef.TwineScript_ToSource(), "'s datatype, ").concat(k(t.datatype), "."));
                            o = o.concat(e(t.datatype, i))
                        }
                        return v.isPrototypeOf(t) || y.isPrototypeOf(t) ? o.concat({
                            dest: t,
                            value: i,
                            src: n
                        }) : "function" == typeof t.destructure ? o.concat(t.destructure(i)) : S(i, t) ? o : a && w.create("operation", "I tried to unpack, but " + k(t) + " in the pattern didn't match " + k(i) + ".")
                    }(this.dest, this.src);
                if (e = w.containsError(r)) return e;
                if (!r.length) return w.create("operation", "I can't store a new value inside " + k(this.dest) + " that isn't in a variable.", "You need a variable, or a data structure containing variables at certain positions, to store the value.");
                var a, o = _createForOfIteratorHelper(r.reverse());
                try {
                    for (o.s(); !(a = o.n()).done;) {
                        var i = a.value,
                            s = i.dest,
                            c = i.value,
                            l = i.src;
                        if (y.isPrototypeOf(s)) {
                            if (e = w.containsError(s.defineType())) return e;
                            s = s.varRef
                        }
                        if (e = s.set(c, this.srcRef), w.isPrototypeOf(e)) return e;
                        t && l && l.delete(), n.shift(k(s) + " is now " + k(c))
                    }
                } catch (e) {
                    o.e(e)
                } finally {
                    o.f()
                }
                return n.join("; ")
            },
            create: function(e, t, n, r) {
                return w.containsError(e) ? e : w.containsError(t) ? t : Object.assign(Object.create(this), {
                    dest: e,
                    src: t,
                    operator: n,
                    srcRef: r
                })
            }
        })
    }), define("datatypes/changercommand", ["utils", "utils/operationutils", "internaltypes/changedescriptor", "internaltypes/twineerror"], function(e, t, n, r) {
        var i = e.plural,
            a = e.impossible,
            o = t.is,
            s = t.toSource,
            c = {},
            l = {
                TwineScript_TypeID: "changer",
                TwineScript_TypeName: "a changer",
                TwineScript_Print: function() {
                    return "`[A (" + this.macroName + ":) changer]`"
                },
                TwineScript_ToSource: function() {
                    return "(" + this.macroName + ":" + ("else" === this.name ? "" : this.params.map(s)) + ")" + (this.next ? "+" + this.next.TwineScript_ToSource() : "")
                },
                get TwineScript_ObjectName() {
                    1 === this.params.length && 36 < (e = s(this.params[0])).length && (e = void 0);
                    for (var e, t = "a (".concat(this.macroName, ":").concat(e || "", ") changer"), n = this.next, r = (n && (t += " combined with "), 0); n && t.length < 48;) {
                        var a = "(".concat(n.macroName, ":)");
                        t += (0 < r && !n.next ? " and " : "") + a + (n.next ? ", " : ""), n = n.next, r += 1
                    }
                    for (var o = 0; n && o < 99;) n = n.next, o += 1;
                    return 0 < o && (t += "".concat(0 < r ? " and " : "").concat(i(o, "other changer"))), t
                },
                summary: function() {
                    var e = n.create();
                    return this.run(e), e.summary()
                },
                create: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
                        n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                        r = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3];
                    return Array.isArray(t) || a("ChangerCommand.create", "params was not an array but " + t), Object.assign(Object.create(this), {
                        macroName: e,
                        params: t,
                        next: n,
                        canEnchant: r
                    })
                },
                "TwineScript_+": function(e) {
                    for (var t = this.TwineScript_Clone(), n = t; n.next;) n = n.next;
                    return n.next = e, t.canEnchant = this.canEnchant && e.canEnchant, t
                },
                TwineScript_is: function(e) {
                    if (l.isPrototypeOf(e)) return this.macroName === e.macroName && o(this.params, e.params) && o(this.next, e.next)
                },
                TwineScript_Clone: function() {
                    for (var e = l.create(this.macroName, this.params, this.next), t = e; t.next;) t = t.next = t.next.TwineScript_Clone();
                    return e.canEnchant = this.canEnchant, e
                },
                run: function(e, t) {
                    var n = "output" === this.macroName ? [t || this] : this.params,
                        n = c[this.macroName].apply(c, [e].concat(_toConsumableArray(n)));
                    if (r.containsError(n)) return n;
                    this.next && this.next.run(e, t || this)
                },
                register: function(e, t) {
                    c[e] = t
                }
            };
        return Object.freeze(l)
    }), define("datatypes/codehook", [], function() {
        var t = Object.freeze({
            TwineScript_TypeName: "a code hook",
            TwineScript_ObjectName: "a code hook",
            TwineScript_ToSource: function() {
                return this.source
            },
            TwineScript_Print: function() {
                return this.code
            },
            TwineScript_toString: function() {
                return this.source
            },
            TwineScript_is: function(e) {
                return t.isPrototypeOf(e) && this.source === e.source
            },
            TwineScript_Clone: function() {
                return t.create(this.code, this.source)
            },
            create: function(e, t) {
                return Object.assign(Object.create(this), {
                    code: e,
                    source: t
                })
            }
        });
        return t
    }), define("datatypes/colour", ["jquery"], function(c) {
        var l = Math.max,
            u = Math.min,
            a = Math.sin,
            o = Math.cos,
            i = Math.pow,
            p = Math.round,
            d = Math.floor,
            s = Math.atan2,
            f = Math.cbrt,
            h = Math.sqrt,
            m = Math.PI,
            g = Object.assign,
            y = Object.create,
            b = /^([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
            t = /^([\da-fA-F])([\da-fA-F])([\da-fA-F])([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
            v = y(null);

        function w(e, t) {
            for (var n = arguments.length, r = new Array(2 < n ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
            if (0 < r.length) return w.apply(void 0, [w(e, t)].concat(r));
            if (!t) return e;
            for (var o = [], i = 0; i < e.length; i++) {
                o[i] = [];
                for (var s = 0; s < t[0].length; s++) {
                    for (var c = 0, l = 0; l < e[0].length; l++) c += e[i][l] * t[l][s];
                    o[i][s] = c
                }
            }
            return o
        }

        function n(e) {
            var t, n = e.r,
                r = e.g,
                a = e.b,
                e = e.a,
                o = l(n /= 255, r /= 255, a /= 255),
                i = u(n, r, a),
                s = (o + i) / 2,
                c = o - i;
            if (o === i) return {
                h: 0,
                s: 0,
                l: s
            };
            switch (o) {
                case n:
                    t = (r - a) / c + (r < a ? 6 : 0);
                    break;
                case r:
                    t = (a - n) / c + 2;
                    break;
                case a:
                    t = (n - r) / c + 4
            }
            return {
                h: t = p(60 * t),
                s: .5 < s ? c / (2 - o - i) : c / (o + i),
                l: s,
                a: e
            }
        }
        var k = [.9642956764295677, 1, .8251046025104602],
            S = 24389 / 27,
            T = 216 / 24389,
            _ = function(e) {
                return e.map(function(e) {
                    return [e]
                })
            },
            x = function(e) {
                return e.map(function(e) {
                    return e[0]
                })
            };

        function O(e) {
            var t = e.l,
                n = e.c,
                r = e.h,
                e = e.a,
                n = [t *= 100, n * o(r * m / 180), n * a(r * m / 180)],
                r = [];
            r[1] = (n[0] + 16) / 116, r[0] = n[1] / 500 + r[1], r[2] = r[1] - n[2] / 200;
            n = [i(r[0], 3) > T ? i(r[0], 3) : (116 * r[0] - 16) / S, S * T < t ? i((16 + t) / 116, 3) : t / S, i(r[2], 3) > T ? i(r[2], 3) : (116 * r[2] - 16) / S].map(function(e, t) {
                return e * k[t]
            }), t = _slicedToArray(x(w([
                [3.2409699419045226, -1.537383177570094, -.4986107602930034],
                [-.9692436362808796, 1.8759675015077202, .04155505740717559],
                [.05563007969699366, -.20397695888897652, 1.0569715142428786]
            ], w([
                [.9554734527042182, -.023098536874261423, .0632593086610217],
                [-.028369706963208136, 1.0099954580058226, .021041398966943008],
                [.012314001688319899, -.020507696433477912, 1.3303659366080753]
            ], _(n)))).map(function(e) {
                return u(255, l(0, 255 * (.0031308 < (e = e) ? 1.055 * i(e, 1 / 2.4) - .055 : 12.92 * e)))
            }), 3);
            return {
                r: t[0],
                g: t[1],
                b: t[2],
                a: e
            }
        }

        function e(e) {
            function t(e) {
                return 1e-5 <= n[e] && n[e] <= 255 - 1e-5
            }
            var n = O(e);
            if (Object.keys(n).every(t)) return n;
            var r = (e = _objectSpread({}, e)).c,
                a = 0;
            for (e.c /= 2; 1e-5 < r - a;) n = O(e), Object.keys(n).every(t) ? a = e.c : r = e.c, e.c = (r + a) / 2;
            return O(e)
        }
        var A = Object.freeze({
            TwineScript_TypeID: "colour",
            TwineScript_TypeName: "a colour",
            TwineScript_ObjectName: "a colour",
            TwineScript_DebugName: function() {
                return "a colour " + this.TwineScript_Print()
            },
            "TwineScript_+": function(e) {
                var t = this.toRGBA(),
                    e = e.toRGBA();
                return A.create({
                    r: u(p(.6 * (t.r + e.r)), 255),
                    g: u(p(.6 * (t.g + e.g)), 255),
                    b: u(p(.6 * (t.b + e.b)), 255),
                    a: (t.a + e.a) / 2
                })
            },
            TwineScript_Print: function() {
                var e = this.toRGBA();
                return "<tw-colour style='background-color:rgba(" + [e.r, e.g, e.b, e.a] + ");'></tw-colour>"
            },
            TwineScript_is: function(e) {
                var t;
                return !!A.isPrototypeOf(e) && (e.lcha && this.lcha ? e.lcha.l === this.lcha.l && e.lcha.c === this.lcha.c && e.lcha.h === this.lcha.h && e.a === this.a : (t = this.toRGBA(), (e = e.toRGBA()).r === t.r && e.g === t.g && e.b === t.b && e.a === t.a))
            },
            TwineScript_Clone: function() {
                return A.create(this)
            },
            toRGBAString: function() {
                var e = this.toRGBA(),
                    t = e.r,
                    n = e.g,
                    r = e.b,
                    e = e.a;
                return "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(e, ")")
            },
            toHSLA: function() {
                return n(this.toRGBA())
            },
            toRGBA: function() {
                return this.lch ? e(_objectSpread({
                    a: this.a
                }, this.lch)) : this
            },
            toLCHA: function() {
                return this.lch ? _objectSpread({
                    a: this.a
                }, this.lch) : (t = (e = this).r, n = e.g, r = e.b, e = e.a, n = [116 * (t = x(w([
                    [1.0479298208405488, .022946793341019088, -.05019222954313557],
                    [.029627815688159344, .990434484573249, -.01707382502938514],
                    [-.009243058152591178, .015055144896577895, .7518742899580008]
                ], w([
                    [.41239079926595934, .357584339383878, .1804807884018343],
                    [.21263900587151027, .715168678767756, .07219231536073371],
                    [.01933081871559182, .11919477979462598, .9505321522496607]
                ], _([t / 255, n / 255, r / 255].map(function(e) {
                    return e < .04045 ? e / 12.92 : i((e + .055) / 1.055, 2.4)
                }))))).map(function(e, t) {
                    return e / k[t]
                }).map(function(e) {
                    return T < e ? f(e) : (S * e + 16) / 116
                }))[1] - 16, 500 * (t[0] - t[1]), 200 * (t[1] - t[2])], r = 180 * s(n[2], n[1]) / m, {
                    l: n[0] / 100,
                    c: h(i(n[1], 2) + i(n[2], 2)),
                    h: 0 <= r ? r : 360 + r,
                    a: e
                });
                var e, t, n, r
            },
            LCHRotate: function(e) {
                e < 0 && (e = 360 + e);
                var t = this.toLCHA();
                return t.h = (t.h + e) % 360, A.create(t)
            },
            TwineScript_GetProperty: function(e) {
                var t;
                return "lch" === e ? (t = this.toLCHA(), new Map([
                    ["l", t.l],
                    ["c", t.c],
                    ["h", t.h]
                ])) : (t = this.toRGBA(), "h" === e || "s" === e || "l" === e ? n(t)[e] : "r" === e || "g" === e || "b" === e || "a" === e ? t[e] : void 0)
            },
            TwineScript_Properties: ["h", "s", "l", "r", "g", "b", "a", "lch"],
            TwineScript_ToSource: function() {
                if (0 === this.a) return "transparent";
                var e = !this.lch && n(this);
                if (1 === e.l && !e.h && !e.s) return "white";
                if (0 === e.l && !e.h && !e.s) return "black";
                if (.5 <= e.l && e.l < .5334 && 0 === e.s) return "gray";
                if (.5 === e.l && .8 <= e.s && e.s < .804) {
                    var t = {
                        0: "red",
                        30: "orange",
                        60: "yellow",
                        90: "lime",
                        120: "green",
                        180: "cyan",
                        210: "blue",
                        240: "navy",
                        270: "purple",
                        300: "magenta"
                    } [e.h];
                    if (t) return t
                }
                return "(".concat(this.lch ? "lch" : "hsl", ":").concat(this.lch ? [this.lch.l, this.lch.c, this.lch.h] : [e.h, e.s, e.l]).concat(1 !== this.a ? "," + this.a : "", ")")
            },
            create: function(e) {
                var t, n, r, a, o, i;
                return "string" == typeof e ? this.create((A.isHexString(e) ? function(e) {
                    return "string" != typeof e ? e : (e = (e = e.replace("#", "")).replace(b, "$1$1$2$2$3$3"), {
                        r: parseInt(e.slice(0, 2), 16),
                        g: parseInt(e.slice(2, 4), 16),
                        b: parseInt(e.slice(4, 6), 16)
                    })
                } : function(e) {
                    var t;
                    return e in v ? v[e] : (t = "transparent" === (t = c("<p>").css("background-color", e).css("background-color")) ? {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0
                    } : t.startsWith("rgb") ? t.match(/\d+/g).reduce(function(e, t, n) {
                        return e["rgb" [n]] = +t, e
                    }, {}) : {
                        r: 192,
                        g: 192,
                        b: 192
                    }, v[e] = t)
                })(e)) : !("h" in e && "s" in e && "l" in e) || "r" in e || "g" in e || "b" in e ? ("a" in e && "number" == typeof e.a || (e.a = 1), "h" in e && "c" in e && !("s" in e) && "l" in e ? g(y(this), {
                    a: e.a,
                    lch: {
                        l: e.l,
                        c: e.c,
                        h: e.h
                    }
                }) : g(y(this), e)) : this.create((a = (t = e).h, o = e.s, i = e.l, t = e.a, 0 === o ? {
                    r: e = d(255 * i),
                    g: e,
                    b: e
                } : (r = 2 * i - (n = i < .5 ? i * (1 + o) : i + o - i * o), {
                    r: d(255 * s((a /= 360) + 1 / 3)),
                    g: d(255 * s(a)),
                    b: d(255 * s(a - 1 / 3)),
                    a: t
                })));

                function s(e) {
                    return e < 0 && (e += 1), 1 < e && --e, e < 1 / 6 ? r + 6 * (n - r) * e : e < .5 ? n : e < 2 / 3 ? r + (n - r) * (2 / 3 - e) * 6 : r
                }
            },
            isHexString: function(e) {
                return "string" == typeof e && "#" === e[0] && (e.slice(1).match(b) || e.slice(1).match(t))
            },
            isCSS3Function: function(e) {
                return "string" == typeof e && /^(?:rgb|hsl)a?\(\s*\d+(?:\.\d+)?\s*,\s*\d+(?:\.\d+)?%?\s*,\s*\d+(?:\.\d+)?%?(?:,\s*\d+(?:\.\d+)?\s*)?\)$/.test(e)
            }
        });
        return A
    }), define("datatypes/customcommand", ["internaltypes/changedescriptor", "internaltypes/twineerror"], function(l, u) {
        var p = Object.assign,
            d = Object.create;
        return Object.seal({
            TwineScript_TypeID: "command",
            TwineScript_ObjectName: "a custom command",
            TwineScript_TypeName: "a custom command",
            TwineScript_Print: function() {
                return "`[a custom command]`"
            },
            create: function(e) {
                var t, n = e.toSource,
                    r = e.changer,
                    a = e.hook,
                    o = e.variables,
                    i = {};
                for (t in o) i[t] = [o[t]];
                var s, c = l.create({
                    source: a,
                    loopVars: i
                }, r);
                return u.containsError(c) ? c : s = p(d(this), {
                    TwineScript_Attach: function(e, t) {
                        c.section = e;
                        e = t.run(c);
                        return u.containsError(e) ? e : s
                    },
                    TwineScript_Run: function(e) {
                        c.section = e;
                        e = c;
                        return c = l.create({
                            source: a,
                            loopVars: i
                        }, r), e
                    },
                    TwineScript_ToSource: function() {
                        return n
                    },
                    TwineScript_CustomCommand: function() {
                        return e
                    }
                })
            }
        })
    }), define("datatypes/custommacro", ["jquery", "utils", "renderer", "utils/operationutils", "datatypes/customcommand", "internaltypes/varref", "internaltypes/varscope", "internaltypes/twineerror", "internaltypes/twinenotifier"], function(w, e, k, t, S, T, _, x, O) {
        function n(v) {
            return function(e) {
                v.called += 1;
                for (var t = v.varNames, n = v.params, r = v.body, a = E(N(_), {
                        TwineScript_VariableStore: {
                            type: "temp",
                            name: v.TwineScript_ObjectName + " call #" + v.called
                        },
                        TwineScript_TypeDefs: N(null)
                    }), o = [], i = 0, s = !1, c = arguments.length, l = new Array(1 < c ? c - 1 : 0), u = 1; u < c; u++) l[u - 1] = arguments[u];
                for (var p = 0; p < l.length; p += 1) {
                    var d = l[p],
                        f = t[i],
                        h = (a.TwineScript_TypeDefs[f] = n[i].datatype.rest ? n[i].datatype.create("array") : n[i].datatype, T.create(a, f));
                    if (x.containsError(h)) return h;
                    if (n[i].datatype.rest) {
                        var s = !0,
                            m = (a[f] || []).concat([d]);
                        if (p < l.length - 1) {
                            a[f] = m;
                            continue
                        }
                        h.set(m)
                    } else h.set(d), i += 1;
                    o.push(O.create(A(h) + " is now " + A(a[f])))
                }
                if (!s && null != (g = n[i]) && g.datatype.rest) {
                    var g = T.create(a, t[i]);
                    if (x.containsError(g)) return g;
                    g.set([]), a.TwineScript_TypeDefs[name] = n[i].datatype.create("array")
                }
                var y, g = w("<p>").append(k.exec(r.code)),
                    b = e.stack.length,
                    r = (e.stack.unshift({
                        tempVariables: a,
                        dom: g,
                        output: function(e) {
                            y = e
                        }
                    }), e.evalReplay);
                for (e.evalReplay = null, e.execute(); e.stack.length > b;) e.stack.shift();
                e.evalReplay = r;
                r = g.find("tw-error");
                return r.length ? (g.prepend(o.map(function(e) {
                    return e.render()
                }), "<br>"), x.create("propagated", "".concat(r.length, " error").concat(1 < r.length ? "s" : "", " occurred when running ").concat(v.TwineScript_ObjectName, "."), void 0, g)) : void 0 === y ? x.create("custommacro", "".concat(v.TwineScript_ObjectName, " didn't output any data or hooks using (output:) or (output-data:).")) : "object" === _typeof(y) && "changer" in y ? S.create(E(y, {
                    toSource: "(".concat(v.TwineScript_KnownName || "unnamed", ":").concat(l.map(C), ")")
                })) : y
            }
        }
        var r = e.andList,
            A = t.objectName,
            a = t.typeName,
            o = t.matches,
            C = t.toSource,
            E = Object.assign,
            N = Object.create,
            i = Object.seal({
                TwineScript_TypeID: "macro",
                TwineScript_TypeName: "a custom macro",
                TwineScript_GetProperty: function(e) {
                    if ("params" === e) return _toConsumableArray(this.params)
                },
                TwineScript_Properties: ["params"],
                TwineScript_Print: function() {
                    return "`[" + this.TwineScript_ObjectName + "]`"
                },
                TwineScript_Clone: function() {
                    var e = E(N(i), this);
                    return e.fn = n(e), e
                },
                TwineScript_ToSource: function() {
                    return "(macro:" + this.params.map(function(e) {
                        return e.TwineScript_ToSource()
                    }).concat("") + this.body.TwineScript_ToSource() + ")"
                },
                createFromFn: function(e, t, n, r) {
                    return E(N(i), {
                        params: [],
                        fn: e,
                        typeSignature: r,
                        TwineScript_ObjectName: t,
                        TwineScript_ToSource: n,
                        TwineScript_KnownName: ""
                    })
                },
                create: function(e, t) {
                    t = E(N(i), {
                        params: e,
                        called: 0,
                        varNames: e.map(function(e) {
                            return e.varRef.propertyChain[0]
                        }),
                        typeSignature: e.map(function(t) {
                            var e = t.datatype.toTypeSignatureObject ? t.datatype.toTypeSignatureObject({
                                rest: t.rest
                            }) : {
                                pattern: "range",
                                range: function(e) {
                                    return o(t.datatype, e)
                                },
                                name: a(t.datatype)
                            };
                            return t.rest ? {
                                pattern: "zero or more",
                                innerType: e
                            } : e
                        }),
                        body: t,
                        TwineScript_KnownName: "",
                        TwineScript_ObjectName: "a custom macro (with ".concat(e.length ? r(e.map(C)) : "no params", ")")
                    });
                    return t.fn = n(t), t
                }
            });
        return i
    }), define("datatypes/datatype", ["utils", "utils/operationutils", "datatypes/changercommand", "datatypes/colour", "datatypes/gradient", "datatypes/lambda", "datatypes/custommacro", "datatypes/codehook", "internaltypes/twineerror"], function(e, t, n, r, a, o, i, s, c) {
        var l = e.realWhitespace,
            u = e.anyRealLetter,
            p = e.anyCasedLetter,
            d = e.anyNewline,
            f = t.objectName,
            e = Object.seal,
            h = Object.keys,
            m = Math.floor,
            g = Math.abs,
            y = {
                TwineScript_TypeID: "datatype",
                TwineScript_TypeName: "a datatype",
                TwineScript_Print: function() {
                    return "`[" + this.TwineScript_ObjectName + "]`"
                },
                get TwineScript_ObjectName() {
                    return "the " + (this.rest ? "..." : "") + this.name + " datatype"
                },
                TwineScript_is: function(e) {
                    return y.isPrototypeOf(e) && e.name === this.name
                },
                TwineScript_Clone: function() {
                    return this.rest ? this : Object.create(this)
                },
                TwineScript_ToSource: function() {
                    return (this.rest ? "..." : "") + this.name
                },
                TwineScript_IsTypeOf: function(e) {
                    var t = this.name,
                        n = this.rest;
                    return !!v[t] && v[t](e, n)
                },
                toTypeSignatureObject: function() {
                    var e = this.name,
                        e = {
                            pattern: "range",
                            range: v[e],
                            name: "a " + ("dm" === e ? "datamap" : "ds" === e ? "dataset" : "num" === e ? e + "ber" : "str" === e ? e + "ing" : "color" === e ? "colour" : "bool" === e ? e + "ean" : "alnum" === e ? "alphanumeric character" : "int" === e ? e + "eger" : "even" === e || "odd" === e ? e + " number" : e.endsWith("case") || "whitespace" === e ? e + " character" : "empty" === e ? e + " value" : e)
                        };
                    return this.rest ? {
                        pattern: "zero or more",
                        innerType: e
                    } : e
                },
                create: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                        n = (e = "datamap" === e ? "dm" : "dataset" === e ? "ds" : "number" === e ? "num" : "string" === e ? "str" : "color" === e ? "colour" : "boolean" === e ? "bool" : "alphanumeric" === e ? "alnum" : "integer" === e ? "int" : "newline" === e ? "linebreak" : e, Object.create(this));
                    return n.name = e, n.rest = t, n
                },
                from: function(t) {
                    var e = h(b).find(function(e) {
                        return b[e](t)
                    });
                    return e ? y.create(e) : c.create("datatype", f(t) + " doesn't correspond to a datatype value.")
                }
            },
            b = {
                array: Array.isArray,
                dm: function(e) {
                    return e instanceof Map
                },
                ds: function(e) {
                    return e instanceof Set
                },
                datatype: function(e) {
                    return y.isPrototypeOf(e)
                },
                changer: function(e) {
                    return n.isPrototypeOf(e)
                },
                colour: function(e) {
                    return r.isPrototypeOf(e)
                },
                gradient: function(e) {
                    return a.isPrototypeOf(e)
                },
                lambda: function(e) {
                    return o.isPrototypeOf(e)
                },
                macro: function(e) {
                    return i.isPrototypeOf(e)
                },
                codehook: function(e) {
                    return s.isPrototypeOf(e)
                },
                command: function(e) {
                    return e && "command" === e.TwineScript_TypeID
                },
                str: function(e) {
                    return "string" == typeof e
                },
                num: function(e) {
                    return "number" == typeof e
                },
                bool: function(e) {
                    return "boolean" == typeof e
                }
            },
            v = _objectSpread(_objectSpread({}, b), {}, {
                even: function(e) {
                    return !isNaN(e) && m(g(e)) % 2 == 0
                },
                odd: function(e) {
                    return !isNaN(e) && m(g(e)) % 2 == 1
                },
                empty: function(e) {
                    return e instanceof Map || e instanceof Set ? !e.size : !(!Array.isArray(e) && "string" != typeof e || e.length)
                },
                int: function(e) {
                    return "number" == typeof e && e === (0 | e)
                },
                uppercase: function(e) {
                    return "string" == typeof e && 1 === _toConsumableArray(e).length && _toConsumableArray(e).every(function(e) {
                        return e !== e.toLowerCase()
                    })
                },
                lowercase: function(e) {
                    return "string" == typeof e && 1 === _toConsumableArray(e).length && _toConsumableArray(e).every(function(e) {
                        return e !== e.toUpperCase()
                    })
                },
                whitespace: function(e) {
                    return "string" == typeof e && !!e.match("^" + l + "$")
                },
                digit: function(e) {
                    return "string" == typeof e && !!e.match("^\\d$")
                },
                alnum: function(e) {
                    return "string" == typeof e && !!e.match("^" + u + "$")
                },
                anycase: function(e) {
                    return "string" == typeof e && !!e.match("^" + p + "$")
                },
                linebreak: function(e) {
                    return "string" == typeof e && !!e.match("^" + d + "$")
                },
                any: function() {
                    return !0
                },
                const: function() {
                    return !0
                }
            });
        return e(y)
    }), define("datatypes/gradient", ["utils/operationutils"], function(e) {
        var t = e.toSource,
            n = Object.freeze({
                TwineScript_TypeID: "gradient",
                TwineScript_TypeName: "a gradient",
                TwineScript_ObjectName: "a gradient",
                TwineScript_DebugName: function() {
                    return "a gradient " + this.TwineScript_Print()
                },
                TwineScript_GetProperty: function(e) {
                    var t = this;
                    return "angle" === e ? this.angle : "stops" === e ? this.stops.map(function(e) {
                        return new Map([
                            [t.repeating ? "pixels" : "percent", e.stop],
                            ["colour", e.colour.TwineScript_Clone()]
                        ])
                    }) : void 0
                },
                TwineScript_Properties: ["angle", "stops"],
                TwineScript_ToSource: function() {
                    return "(gradient:" + this.angle + "," + this.stops.map(function(e) {
                        return t(e.stop) + "," + t(e.colour)
                    }) + ")"
                },
                TwineScript_is: function(e) {
                    var r = this;
                    return e.angle === this.angle && e.stops.length === this.stops.length && e.stops.every(function(e, t) {
                        var n = e.colour,
                            e = e.stop;
                        return r.stops[t].stop === e && r.stops[t].colour.TwineScript_is(n)
                    })
                },
                TwineScript_Clone: function() {
                    return n.create(this.angle, _toConsumableArray(this.stops))
                },
                TwineScript_Print: function() {
                    return "<tw-colour style='background:" + this.toLinearGradientString() + "'></tw-colour>"
                },
                create: function(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                    return Object.assign(Object.create(this), {
                        angle: e,
                        stops: t.sort(function(e, t) {
                            return e.stop - t.stop
                        }),
                        repeating: n
                    })
                },
                multiply: function(t) {
                    return n.create(this.angle, this.stops.map(function(e) {
                        return {
                            colour: e.colour,
                            stop: e.stop * t
                        }
                    }))
                },
                toLinearGradientString: function() {
                    var r = this;
                    return (this.repeating ? "repeating-" : "") + "linear-gradient(".concat(this.angle, "deg, ").concat(this.stops.reduce(function(e, t) {
                        var n = t.colour,
                            t = t.stop;
                        return e + n.toRGBAString() + " " + t * (r.repeating ? 1 : 100) + (r.repeating ? "px," : "%,")
                    }, "").slice(0, -1), ")")
                }
            });
        return n
    }), define("datatypes/hookset", ["jquery", "utils", "utils/renderutils", "utils/operationutils"], function(g, s, e, t) {
        var y = e.textNodeToChars,
            b = e.realWhitespace,
            c = e.findTextInNodes,
            r = t.toSource;

        function l(e) {
            function t(n, e) {
                if (Array.isArray(e)) return e.reduce(function(e, t) {
                    return e.add(n.get(t))
                }, g());
                if (e && "object" === _typeof(e) && "first" in e && "last" in e) {
                    for (var t = e.first, r = e.last, a = n.length, o = (t < 0 && (t += a), r < 0 && (r += a), [n.get(t)]); t !== r;) t += Math.sign(r - t), o.push(n.get(t));
                    return g(o)
                }
                if ("string" == typeof e) {
                    if ("chars" === e) {
                        var i, s = [],
                            c = _createForOfIteratorHelper(n.textNodes(m));
                        try {
                            for (c.s(); !(i = c.n()).done;) {
                                var l, u = i.value,
                                    p = _createForOfIteratorHelper(y(u));
                                try {
                                    for (p.s(); !(l = p.n()).done;) {
                                        var d = l.value;
                                        d.textContent.match(b) || s.push(d)
                                    }
                                } catch (e) {
                                    p.e(e)
                                } finally {
                                    p.f()
                                }
                            }
                        } catch (e) {
                            c.e(e)
                        } finally {
                            c.f()
                        }
                        return g(s)
                    }
                    if ("links" === e) return n.findAndFilter("tw-link, .enchantment-link");
                    if ("visited" === e) return n.findAndFilter("tw-link.visited");
                    var f, h;
                    if ("lines" === e) return f = n.findAndFilter("br:not(tw-sidebar *),tw-consecutive-br:not(tw-sidebar *)").get(), h = [
                        []
                    ], n.contents().each(function e(t, n) {
                        var r = (n.tagName || "").toLowerCase();
                        if ("tw-sidebar" !== r)
                            if ("tw-passage" === r || "tw-transition-container" === r) g(n).contents().each(e);
                            else {
                                if (f.length) {
                                    if (n === f[0]) return f.shift(), void h.push([]);
                                    if (16 & n.compareDocumentPosition(f[0])) return h.push([]), g(n).contents().each(e), void h.push([])
                                }
                                h[h.length - 1].push(n)
                            }
                    }), g(h.map(function(e) {
                        return !!e.length && g(e).wrapAll("<tw-pseudo-hook>").parent()[0]
                    }).filter(Boolean))
                }
                return g(n.get(e))
            }
            var n, r, a = e.dom,
                m = ":not(tw-error, tw-error *)",
                o = g();
            this.next && (o = o.add(l.call(this.next, e)));
            if (this.selector) {
                if ("string" === this.selector.type) i = this.selector.data, n = c((n = a).textNodes(), i), r = g(), n.forEach(function(e) {
                    r = r.add(g(e).wrapAll("<tw-pseudo-hook>").parent())
                }), i = r;
                else {
                    if ("base" === this.selector.type) return o.add(t(l.call(this.selector.data, e), this.property));
                    n = this.selector.data, e = 'tw-hook[name="' + (n = s.insensitiveName(n).replace(/"/g, "&quot;")) + '"],tw-enchantment[name="' + n + '"]';
                    var e = e += {
                            page: ", tw-story",
                            passage: ", tw-passage",
                            sidebar: ", tw-sidebar",
                            link: ", tw-link, .enchantment-link"
                        } [n] || "",
                        i = a.findAndFilter(e).add(a.parentsUntil(s.storyElement.parent())).filter(e)
                }
                o = this.property ? o.add(t(i, this.property)) : o.add(i)
            }
            return o = o.get().reduce(function(e, t) {
                return t = g(t), e.add(t.is("tw-enchantment") && t.contents().length <= 1 ? t.contents() : t)
            }, g())
        }

        function a(e) {
            var t, n;
            return e ? (t = e.selector, n = e.property, e = e.next, [JSON.stringify(["base" === t.type ? a(t.data) : s.insensitiveName(t.data), n])].concat(_toConsumableArray(a(e))).sort()) : []
        }
        var o = Object.freeze({
            forEach: function(e, n) {
                var t = l.call(this, e).each(function(e, t) {
                    return n(g(t), e)
                });
                return e.dom.findAndFilter("tw-pseudo-hook").contents().unwrap(), t
            },
            hooks: function(e) {
                return l.call(this, e)
            },
            get TwineScript_ObjectName() {
                return "the hook name ".concat(this.TwineScript_ToSource())
            },
            TwineScript_TypeID: "hookName",
            TwineScript_TypeName: "a hook name (like ?this)",
            TwineScript_Unstorable: !0,
            TwineScript_ToSource: function() {
                var e = "",
                    t = this.selector,
                    n = t.type,
                    t = t.data;
                return "name" === n ? t.match(RegExp("^" + s.anyRealLetter + "+$")) ? e += "?" + t : e += "(hooks-named:" + JSON.stringify(t) + ")" : "string" === n ? e += JSON.stringify(t) : "base" === n && (e += t.TwineScript_ToSource() + "'s " + r(this.property, "property")), this.next && (e += " + " + this.next.TwineScript_ToSource()), e
            },
            "TwineScript_+": function(e) {
                for (var t = this.TwineScript_Clone(), n = t; n.next;) n = n.next;
                return n.next = e, t
            },
            TwineScript_is: function(e) {
                return a(this) + "" == a(e) + ""
            },
            TwineScript_GetProperty: function(e) {
                return o.create({
                    type: "base",
                    data: this
                }, e, void 0)
            },
            TwineScript_Properties: ["chars", "links", "lines", "visited"],
            TwineScript_Clone: function() {
                return o.create(this.selector, this.property, this.next)
            },
            create: function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0;
                return Object.assign(Object.create(this || o), {
                    selector: Object.freeze(e),
                    property: t,
                    next: n
                })
            },
            from: function(e) {
                return o.isPrototypeOf(e) || "string" == typeof e || s.impossible("HookSet.from() was given a non-HookSet non-string."), o.isPrototypeOf(e) ? e : o.create({
                    type: "string",
                    data: e
                })
            }
        });
        return o
    }), define("datatypes/lambda", ["utils/operationutils", "internaltypes/varscope", "internaltypes/varref", "internaltypes/twineerror"], function(e, h, s, m) {
        var g = e.objectName;
        var c = Object.freeze({
            TwineScript_TypeID: "lambda",
            TwineScript_TypeName: "a lambda",
            get TwineScript_ObjectName() {
                return 'a "' + ("making" in this ? "making ... " : "") + ("each" in this ? "each ... " : "") + ("where" in this ? "where ... " : "") + ("when" in this ? "when ... " : "") + ("via" in this ? "via ... " : "") + '" lambda'
            },
            TwineScript_Print: function() {
                return "`[A lambda]`"
            },
            TwineScript_is: function(e) {
                return e === this
            },
            TwineScript_ToSource: function() {
                return this.source
            },
            TypeSignature: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return {
                    pattern: "lambda",
                    innerType: c,
                    clauses: t,
                    typeName: 'a "' + t.concat("").join(" ...") + '" lambda'
                }
            },
            TwineScript_Clone: function() {
                return Object.assign(Object.create(c), this)
            },
            create: function(e, t, n, r) {
                var a, o = "temp variable, or typed temp variable";

                function i(e) {
                    e = e && e.varRef ? e.varRef : e;
                    return void 0 === e || e && s.isPrototypeOf(e) && h.isPrototypeOf(e.object) && 1 === e.propertyChain.length
                }
                if (m.containsError(n)) return n;
                if ("making" === t && !i(n)) return m.create("syntax", "I need a " + o + ", to the right of '" + t + "', not " + g(n) + ".");
                if (m.containsError(e)) return e;
                if (c.isPrototypeOf(e)) {
                    if ("when" === t || "when" in e) return m.create("syntax", "A 'when' lambda cannot have any other clauses, such as '" + t + "'.");
                    if (t in e) return m.create("syntax", "This lambda has two '" + t + "' clauses.");
                    a = e
                } else {
                    if ("when" === t && void 0 !== e) return m.create("syntax", "A 'when' lambda shouldn't begin with a temp variable (just use 'when' followed by the condition).");
                    if (!i(e)) return m.create("syntax", "This lambda needs to start with a single " + o + ", not " + g(e) + ".");
                    (a = Object.create(this)).loop = e || ""
                }
                return a.source = r.trim(), a[t] = n, a.making && a.making.getName() === (a.loop && a.loop.getName()) ? m.create("syntax", "This lambda has two variables named '" + a.loop.getName() + "'.", "Lambdas should have all-unique parameter names.") : a
            },
            apply: function(e, t) {
                var n = t.loop,
                    r = t.pos,
                    a = t.making,
                    o = t.ignoreVia;

                function i(e, t) {
                    if (e) {
                        var n, r;
                        if ("datatype" in e && "varRef" in e) return n = e.varRef.create(s, e.varRef.propertyChain), m.containsError(n) ? n : (r = n.defineType(e.datatype), m.containsError(r) || (r = n.set(t), m.containsError(r)) ? r : void 0);
                        s[e.getName()] = t
                    }
                }
                var s = (s = t.tempVariables) || Object.create(e.stack.length ? e.stackTop.tempVariables : h),
                    t = i(this.loop, n) || i(this.making, a);
                if (m.containsError(t)) return t;
                e.stack.unshift(Object.assign(Object.create(e.stackTop || null), {
                    tempVariables: s,
                    lambdaPos: this.when ? void 0 : r
                })), !n || this.making || this.when ? e.Identifiers.it = m.create("operation", "I can't use 'it', or an implied 'it', in " + this.TwineScript_ObjectName) : e.Identifiers.it = n;
                var c, l, u, p, d, t = !o && this.via,
                    o = "where" in this || "when" in this,
                    f = e.evalReplay;
                return e.evalReplay = f ? [] : null, o ? (c = e.eval(this.where || this.when), l = e.evalReplay, e.evalReplay = l && t ? [] : null, !n || this.making || this.when || (e.Identifiers.it = n), u = c, p = !t || e.eval(t), d = null, u = m.containsError(u) || ("boolean" != typeof u ? m.create("operation", "This lambda's 'where' clause must evaluate to true or false, not " + g(u) + ".") : u ? p : d)) : c = u = !t || e.eval(t), p = t ? e.evalReplay : null, e.stack.shift(), (e.evalReplay = f) && (o || t) && (((d = f[f.length - 1]) || {}).lambda && d.lambda.obj === this || ((d = {
                    lambda: {
                        obj: this,
                        loops: []
                    },
                    code: (f[f.length - 1] || {}).code || ""
                }).fromCode = d.code, f.push(d)), d.lambda.loops.push(_objectSpread(_objectSpread(_objectSpread({
                    it: n,
                    pos: r
                }, void 0 !== a && {
                    making: a
                }), t && {
                    viaReplay: p,
                    viaResult: u
                }), o && {
                    whereReplay: l,
                    whereResult: null !== c && c
                }))), u
            },
            filter: function(r, e) {
                var a, o = this,
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                return e.reduce(function(e, t, n) {
                    return a || (n = o.apply(r, {
                        loop: t,
                        pos: n + 1,
                        ignoreVia: !0,
                        tempVariables: i
                    }), a = m.containsError(n)) || e.concat(n ? [t] : [])
                }, [])
            }
        });
        return c
    }), define("datatypes/typedvar", ["utils/operationutils", "internaltypes/varref", "internaltypes/twineerror"], function(e, a, o) {
        var i = e.typeName,
            t = e.matches,
            n = e.toSource,
            s = e.unstorableValue,
            e = Object.freeze,
            c = Object.assign,
            l = Object.create,
            u = e({
                TwineScript_TypeName: "a TypedVar (typed variable name)",
                get TwineScript_ObjectName() {
                    var e = n(this.datatype);
                    return "the ".concat(e.length < 24 ? e + "-" : "", "typed variable name, ").concat(this.varRef.TwineScript_ToSource())
                },
                TwineScript_Print: function() {
                    return "`[A typed variable name]`"
                },
                TwineScript_Unstorable: !0,
                TwineScript_Clone: function() {
                    return c(l(u), {
                        datatype: this.datatype.TwineScript_Clone(),
                        varRef: this.varRef
                    })
                },
                TwineScript_ToSource: function() {
                    return n(this.datatype) + "-type " + this.varRef.TwineScript_ToSource()
                },
                TwineScript_GetProperty: function(e) {
                    return "name" === e ? this.getName() : this[e]
                },
                TwineScript_Properties: ["datatype", "name"],
                TwineScript_IsTypeOf: function(e) {
                    return t(this.datatype, e)
                },
                get: function() {
                    var e;
                    return (e = this.varRef).get.apply(e, arguments)
                },
                getName: function() {
                    return this.varRef.getName()
                },
                defineType: function() {
                    if ("any" !== this.datatype.name) return this.varRef.defineType(this.datatype)
                },
                create: function(e, t) {
                    var n, r;
                    return (n = o.containsError(t) || o.containsError(e) || t.error) || (a.isPrototypeOf(t) ? (n = t.object, r = t.compiledPropertyChain, n && n.TwineScript_VariableStore && 1 === r.length && n.TwineScript_TypeDefs ? (r = s(e)) && !u.isPrototypeOf(r) ? o.create("syntax", "The -type syntax can't have " + i(r) + " to its left.") : c(l(this), {
                        datatype: e,
                        varRef: t
                    }) : o.create("unimplemented", "I can only restrict the datatypes of variables, not data names or anything else.")) : o.create("syntax", "The -type syntax must have a variable to its right."))
                }
            });
        return u
    }), define("datatypes/varbind", ["jquery", "utils", "utils/operationutils", "internaltypes/varref", "internaltypes/twineerror"], function(o, e, t, n, r) {
        var a = t.objectName;
        return n.on("set", function(r, a) {
            r.TwineScript_VariableStore && e.storyElement.find("[data-2bind]").each(function(e, t) {
                var n = (t = o(t)).data("twoWayBindEvent");
                "function" == typeof n && n(t, r, a)
            })
        }), Object.freeze({
            TwineScript_TypeName: "a VarBind (bound variable name)",
            get TwineScript_ObjectName() {
                return "a ".concat(this.bind, " bind to ").concat(this.varRef.TwineScript_ToSource())
            },
            TwineScript_Print: function() {
                return "`[A bound variable name]`"
            },
            TwineScript_Unstorable: !0,
            TwineScript_ToSource: function() {
                return ("two way" === this.bind ? "2" : "") + "bind " + this.varRef.TwineScript_ToSource()
            },
            set: function(e) {
                var e = this.varRef.set(e);
                if (e = r.containsError(e)) return e
            },
            create: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "one way";
                return r.containsError(e) ? e : n.isPrototypeOf(e) ? e.error || Object.assign(Object.create(this), {
                    varRef: e,
                    bind: t
                }) : r.create("operation", "I can only 'bind' a variable, not " + a(e) + ".")
            }
        })
    }), define("debugmode/highlight", ["jquery", "utils", "utils/typecolours", "macros", "lexer"], function(u, e, t, p, n) {
        var d = e.insensitiveName,
            f = t.versionClass,
            h = n.lex;
        return function(e, t, n, r) {
            if (9999 < e.length) return [u("<span>").text(e)];
            for (var a = h(e, "", t || "macro"), o = [], i = "", s = a, c = a.start; c < a.end; c += 1) {
                var l = a.pathAt(c);
                l[0] !== s[0] && (o.length && (o[o.length - 1].textContent = i), i = "", s = l, o.push(u("<".concat(r && n <= c && c < r ? "mark" : "span", ' class="').concat(function(e) {
                    for (var t = {}, n = "", r = 0; r < e.length; r += 1) {
                        var a = e[r],
                            o = a.type,
                            i = a.text,
                            s = ("verbatim" !== o && "comment" !== o || (n = ""), f + o);
                        switch (t[s] = (t[s] || 0) + 1, 1 < t[s] && (s += "-" + t[s]), o) {
                            case "text":
                                i.trim() && e.slice(r + 1).reduce(function(e, t) {
                                    return void 0 === e ? "macro" === t.type || "hook" !== t.type && e : e
                                }, void 0) && (s += " ".concat(f, "error"));
                                break;
                            case "macroName":
                                var c, l = e[r].text[0];
                                "_" !== l && "$" !== l ? (c = d(e[r].text.slice(0, -1)), p.has(c) ? s += "-" + p.get(c).returnType.toLowerCase() : s += " ".concat(f, "error")) : s += " ".concat(f, "customMacro ").concat(f + ("_" === l ? "tempV" : "v"), "ariable")
                        }
                        n += s + " "
                    }
                    return n
                }(s), '">'))[0])), i += a.text[c - a.start]
            }
            return o.length && (o[o.length - 1].textContent = i), o
        }
    }), define("debugmode/mode", ["jquery", "utils", "utils/naturalsort", "state", "engine", "internaltypes/varref", "internaltypes/twineerror", "utils/operationutils", "utils/renderutils", "passages", "section", "debugmode/panel", "debugmode/highlight", "utils/typecolours"], function(I, V, M, D, F, L, H, e, t, z, q, W, B, n) {
        var U = e.objectName,
            $ = e.isObject,
            G = e.toSource,
            Y = e.typeID,
            J = t.dialog,
            X = n.CSS,
            K = function(e, t) {
                var f = V.escape,
                    i = V.nth,
                    n = V.debounce,
                    r = I(document.documentElement),
                    a = M(),
                    o = {
                        darkMode: !0,
                        fadePanel: !0,
                        evalReplay: !0,
                        width: null,
                        maxHeight: 400
                    };
                if (D.hasStorage) try {
                    var s = localStorage.getItem("(Debug Options " + V.options.ifid + ")");
                    s && (o = JSON.parse(s))
                } catch (e) {}

                function c() {
                    if (D.hasStorage) try {
                        localStorage.setItem("(Debug Options " + V.options.ifid + ")", JSON.stringify(o))
                    } catch (e) {}
                }
                W.defaultMaxHeight = o.maxHeight;

                function l(e) {
                    return n(function() {
                        if (V.options.debug) return e.apply(this, arguments)
                    }, {
                        maxWait: 2e3
                    })
                }
                var h = I('<tw-debugger class="'.concat([o.darkMode ? "theme-dark" : "", o.fadePanel ? "fade-panel" : ""].join(" "), '" style="').concat(o.width ? "width:" + o.width + "px" : "", "\">\n<div class='panel panel-errors' hidden><table></table></div>\n<div class='tabs'></div>\n<label style='user-select:none'>Turns: </label><select class='turns' disabled></select>\n<button class='show-invisibles'>\ud83d\udd0d Debug View</button>\n<button class='show-dom'><span style=\"vertical-align:text-top\">&lt;</span><span style=\"vertical-align:text-bottom\">&gt;</span> DOM View</button>\n<button class='close'>\u2716</button>\n<div class='resizer-h'>\n</tw-debugger>")),
                    s = h.find(".tabs"),
                    u = h.find(".show-dom"),
                    p = h.find(".show-invisibles"),
                    d = h.find(".close"),
                    m = h.find(".turns");
                I(document.documentElement).on("click", "tw-expression, tw-error, tw-eval-explanation", n(function(e) {
                    var r, a, o, i, l, u, p, d, t = I(e.target).data("evalReplay");

                    function n() {
                        var e, s, c = r[a],
                            t = o.find("tw-eval-explanation").empty(),
                            n = o.find("tw-eval-code");
                        c.toCode || c.toDesc || c.error || c.lambda ? (o.find("tw-eval-code").empty().append(B(c.code, "macro", 0 < a && c.start, 0 < a && c.end + c.diff)), t.append(c.lambda ? "" : "<code class='".concat(56 < c.fromCode.length ? "from-block" : "from-inline", "'></code>"), c.error ? "<span> caused an error: </span>" : c.lambda ? "<span>The lambda <code class='to-lambda'></code> was run, producing these results.</span>" : "<span> became".concat(c.ToDesc ? "\u2026" : "", " </span>").concat(c.toDesc ? "<span class='to-desc'>".concat(f(c.toDesc), ".</span>") : "<code class='to-code'></code>")), c.error ? t.append(c.error) : c.lambda ? (s = function(e, t) {
                            return I("<".concat(e, "><code></").concat(e, ">")).find("code").append(B(t, "macro")).end()
                        }, t.find(".to-lambda").append(B(c.lambda.obj.source, "macro")).end().append((e = I("<table>")).append.apply(e, [I("<tr>").append(s("th", "pos"), c.lambda.obj.loop ? s("th", "_" + c.lambda.obj.loop.getName()).append(" / ", I("<code>").append(B("it", "macro"))) : s("th", "it"), c.lambda.obj.making && s("th", "_" + c.lambda.obj.making.getName()), c.lambda.obj.where && s("th", "where").append(" result"), c.lambda.obj.via && s("th", "via").append(" result"))].concat(_toConsumableArray(c.lambda.loops.map(function(e) {
                            var t = e.it,
                                n = e.pos,
                                r = e.making,
                                a = e.whereResult,
                                o = e.whereReplay,
                                i = e.viaResult,
                                e = e.viaReplay;
                            return I("<tr>").append(s("td", G(n)), s("td", G(t)), void 0 !== r && s("td", G(r)), null != a && (H.containsError(a) ? I("<td>").append(a.render(c.lambda.obj.source, !0)) : s("td", G(a))).append(o && I("<tw-open-button replay label='\ud83d\udd0d'>").data("evalReplay", o)), null != i && (H.containsError(i) ? I("<td>").append(i.render(c.lambda.obj.source, !0)) : s("td", G(i))).append(e && I("<tw-open-button replay label='\ud83d\udd0d'>").data("evalReplay", e)))
                        })))))) : c.toDesc || t.find(".to-code").append(B(c.toCode, "macro")), t.next().html(c.itIdentifier ? '(The <code class="cm-harlowe-3-identifier">it</code> identifier now refers to '.concat(f(c.itIdentifier), ".)") : "").next().text(c.reason || "")) : (n.html(B(c.code, "macro")), t.html("<center>First, there was <code></code>.</center>").next().empty().next().empty()), c.lambda || t.find("code").first().append(B(c.fromCode, "macro")), o.find("mark").each(function(e, t) {
                            t.scrollIntoView()
                        }), i.css("visibility", a <= 9 ? "hidden" : "visible"), l.css("visibility", a <= 0 ? "hidden" : "visible"), p.css("visibility", a >= r.length - 1 ? "hidden" : "visible"), d.css("visibility", a >= r.length - 10 ? "hidden" : "visible"), u.html("( ".concat(a + 1, "/").concat(r.length, " )"))
                    }
                    t && (r = t, t = J({
                        buttons: [{
                            name: "Understood",
                            confirm: !(a = 0),
                            callback: function() {
                                return !h.find("tw-backdrop").length && h.removeClass("show-dialog")
                            }
                        }]
                    }).addClass("eval-replay"), o = I("<tw-eval-replay>".concat(1 === r.length ? "" : "<tw-eval-code></tw-eval-code>", "<tw-eval-explanation></tw-eval-explanation><tw-eval-it></tw-eval-it><tw-eval-reason></tw-eval-reason>").concat(1 === r.length ? "" : "<tw-dialog-links><tw-link style='visibility:hidden'>\u2190 10</tw-link><tw-link style='visibility:hidden'>\u2190 \u2190</tw-link><b></b><tw-link>\u2192 \u2192</tw-link><tw-link>10 \u2192</tw-link></tw-dialog-links>", "</tw-eval-replay>")), t.find("tw-dialog").css({
                        width: "75vw",
                        "max-width": "75vw"
                    }).prepend(o), i = o.find("tw-link:first-of-type"), l = i.next(), u = l.next(), p = u.next(), d = p.next(), n(), i.on("click", function() {
                        a = Math.max(0, a - 10), n()
                    }), l.on("click", function() {
                        a = Math.max(0, a - 1), n()
                    }), p.on("click", function() {
                        a = Math.min(r.length - 1, a + 1), n()
                    }), d.on("click", function() {
                        a = Math.min(r.length - 1, a + 10), n()
                    }), h.find("tw-backdrop").length ? h.find("tw-backdrop").before(t) : h.addClass("show-dialog").append(t));
                    var s, t = I(e.target).data("goto");
                    t && (s = V.options.ignoreGotos, V.options.ignoreGotos = !1, t.command.TwineScript_Run(t.section), V.options.ignoreGotos = s), e.stopPropagation()
                })), h.find(".resizer-h").mousedown(function(e) {
                    if (1 !== e.which) return !0;
                    e.stopPropagation();
                    var t = e.pageX,
                        n = h.width();
                    r.on("mousemove.debugger-resizer-h", function(e) {
                        e = e.pageX;
                        h.width("".concat(n + t - e | 0, "px"))
                    }).on("mouseup.debugger-resizer-h", function() {
                        r.off(".debugger-resizer-h"), o.width = h.width(), c()
                    })
                }), h.on("mousedown", ".resizer-v", function(e) {
                    if (1 !== e.which) return !0;
                    e.stopPropagation();
                    var t = e.pageY,
                        n = I(e.target.parentNode).height();
                    r.on("mousemove.debugger-resizer-v", function(e) {
                        e = e.pageY;
                        h.find(".panel").css("maxHeight", "".concat(n + t - (0 | e), "px"))
                    }).on("mouseup.debugger-resizer-v", function() {
                        r.off(".debugger-resizer-v"), o.maxHeight = h.find(".panel").css("maxHeight"), c()
                    })
                }), p.click(function() {
                    r.toggleClass("debug-mode").removeClass("dom-debug-mode"), p.toggleClass("enabled"), u.removeClass("enabled")
                }), u.click(function() {
                    r.toggleClass("dom-debug-mode").removeClass("debug-mode"), u.toggleClass("enabled"), p.removeClass("enabled")
                }), d.click(function() {
                    r.removeClass("debug-mode dom-debug-mode"), h.detach(), Object.assign(V.options, {
                        debug: !1,
                        speedMultiplier: 1,
                        ignoreClickEvents: !1,
                        ignoreGotos: !1
                    })
                });

                function g(e) {
                    (e = e.parents(".variable-row, .enchantment-row, .source-row")).next(".panel-row-source").find("td").empty().append(B(e.data("value") || G(e.data("enchantment").changer), e.is("source-row") ? "markup" : "macro"))
                }

                function y() {
                    return k = new Set
                }

                function b() {
                    I(document.body).append(h), V.options.debug = !0, V.options.evalReplay = o.evalReplay, V.options.speedMultiplier = 1, V.options.ignoreClickEvents = !1, V.options.ignoreGotos = !1, R()
                }
                var v, w = l(function() {
                        var r = m.children().get(),
                            e = D.timeline,
                            a = 0;
                        e.forEach(function(e, t) {
                            var n = e.turns,
                                e = e.passage,
                                n = (a += 1 + (void 0 === n ? 0 : n)) + ": " + e;
                            r[t] ? r[t].textContent = n : m.append("<option value='".concat(t, "'>").concat(n, "</option>"))
                        }), e.length < r.length && I(r.slice(e.length)).remove(), m[1 <= e.length ? "removeAttr" : "attr"]("disabled"), m.val(D.pastLength)
                    }),
                    k = (m.change(function(e) {
                        e = e.target.value - D.pastLength;
                        0 != e && (D[e < 0 ? "rewind" : "fastForward"](Math.abs(e)), F.showPassage(D.passage))
                    }), w(), D.on("forward", w).on("load", w).on("forgetUndos", function() {
                        return w
                    }).on("back", function() {
                        D.pastLength <= 1 && m.attr("disabled"), m.find("[selected]").removeAttr("selected"), m.val(D.pastLength)
                    }), new Set),
                    S = W.create({
                        className: "variables",
                        tabName: "Variable",
                        rowWrite: function(e, t) {
                            var n, r = e.name,
                                a = e.dataset,
                                o = e.path,
                                i = e.value,
                                s = e.tempScope,
                                e = e.type,
                                c = i && 48 < i.length && !i.TwineScript_DebugName,
                                l = $(i) && i.TwineScript_DebugName ? i.TwineScript_DebugName() : f(U(i)),
                                u = "",
                                a = (o.length && (u = o.reduce(function(e, t) {
                                    return e + t + "'s "
                                }, "")), a && (r = "???"), e ? G(e) : ""),
                                e = "object" === _typeof(i) || c;
                            return t ? (t[0].firstChild.innerHTML = a || "", u && I(t[0].firstChild).children(".variable-path").html((s ? "_" : "$") + f(u)), t[0].childNodes[1].lastChild.textContent = (u ? "" : s ? "_" : "$") + f(r + ""), t[0].childNodes[2].textContent = s || "", t[0].childNodes[3].innerHTML = l, n = (c = I(t[0].lastChild.firstChild)).is(".open"), c[e ? "show" : "hide"](), c = t.next(".panel-row-source"), n && c.find("td").empty().append(B(G(i))), t.data("value", G(i)), t.add(c)) : I('<div class="variable-row">').attr("data-name", r).attr("data-path", o + "").attr("data-scope", s || "").css("padding-left", Math.min(5, o.length) + "em").append("<td class='variable-type'>".concat(a || "", "</td>"), "<td class='variable-name cm-harlowe-3-" + (s ? "tempV" : "v") + "ariable'><span class='variable-path'>" + (u ? (s ? "_" : "$") + f(u) : "") + "</span> " + (u ? "" : s ? "_" : "$") + f(r + "") + "</td>", "<td class='temporary-variable-scope'>".concat(s || "", "</td>"), "<td class='variable-value cm-harlowe-3-macroName-" + Y(i) + "'>" + l + "</td><td class='panel-row-buttons'><tw-folddown tabindex=0 style='display:" + (e ? "visible" : "none") + "'>(source:) </tw-folddown></td>").data("value", G(i)).find("tw-folddown").data("folddown", g).end().add("<tr class='variable-row panel-row-source' style='display:none'><td colspan='5'></td></tr>")
                        },
                        rowCheck: function(e, t) {
                            var n = e.name,
                                r = e.path,
                                e = e.tempScope;
                            return t[0] && t[0].getAttribute("data-name") === n && t[0].getAttribute("data-path") === r + "" && t[0].getAttribute("data-scope") === e
                        },
                        columnHead: function() {
                            return '<tr class="panel-head"><th data-col="variable-type">Type</th><th data-col="variable-name">Name</th><th data-col="temporary-variable-scope">Scope</th><th data-col="variable-value">Value</th></tr>'
                        },
                        rowSort: function(e, t, n) {
                            if ("variable-value" === e) return a(t.attr("class"), n.attr("class")) || a(t.parent().data("value"), n.parent().data("value"))
                        }
                    }),
                    T = l(function() {
                        var e, t, o = [],
                            n = D.variables,
                            r = o.length;
                        for (e in n) e.startsWith("TwineScript") || (r += 1, function n(e) {
                            var r, t, a;
                            500 < o.length || (o.push(e), r = e.path.concat(e.name), t = e.value, a = e.tempScope, r.length <= 4 && (Array.isArray(t) ? t.forEach(function(e, t) {
                                return n({
                                    name: i(t + 1),
                                    path: r,
                                    value: e,
                                    tempScope: a
                                })
                            }) : t instanceof Map ? _toConsumableArray(t).forEach(function(e) {
                                var t = (e = _slicedToArray(e, 2))[0],
                                    e = e[1];
                                return n({
                                    name: t,
                                    path: r,
                                    value: e,
                                    tempScope: a
                                })
                            }) : t instanceof Set && _toConsumableArray(t).forEach(function(e, t) {
                                return n({
                                    name: t,
                                    dataset: !0,
                                    path: r,
                                    value: e,
                                    tempScope: a
                                })
                            })))
                        }({
                            name: e,
                            path: [],
                            value: n[e],
                            tempScope: "",
                            type: null == (t = n.TwineScript_TypeDefs) ? void 0 : t[e]
                        }));
                        o.push.apply(o, _toConsumableArray(k)), r += k.size, S.update(o, r), 0 === r !== S.panel[0].classList.contains("panel-variables-empty") && S.panel.toggleClass("panel-variables-empty")
                    }),
                    _ = (L.on("set", function(e, t, n) {
                        var r, a;
                        e === D.variables || "temp" !== (null == (a = e.TwineScript_VariableStore) ? void 0 : a.type) || null != (a = e.TwineScript_VariableStore) && a.name.match(/#\d+$/) || (r = null == (a = e.TwineScript_VariableStore) ? void 0 : a.name, e = null == (a = e.TwineScript_TypeDefs) ? void 0 : a[t], (a = _toConsumableArray(k).find(function(e) {
                            return e.name === t && e.tempScope === r
                        })) ? a.value = n : k.add({
                            name: t,
                            path: [],
                            value: n,
                            tempScope: r,
                            type: e
                        })), T(), v()
                    }).on("delete", function() {
                        T(), v()
                    }), S.panel.append("<div class='panel-variables-bottom'>\n\t\t\t<button class='panel-variables-copy'>Copy $ variables as (set:) call</button>\n\t\t\t<input class='clipboard' type=\"text\" style='opacity:0;pointer-events:none;position:absolute;'></input>\n\t\t</div>").removeAttr("hidden"), S.tab.addClass("enabled"), S.panel.find(".clipboard")),
                    x = (r.on("click", ".panel-variables-copy", function() {
                        var e, t = [];
                        for (e in D.variables) e.startsWith("TwineScript") || t.push("$" + e + " to " + G(D.variables[e]));
                        _.val("(set:" + t + ")")[0].select(), document.execCommand("copy")
                    }), W.create({
                        className: "enchantments",
                        tabName: "Enchantment",
                        rowWrite: function(e, t) {
                            var n = e.scope,
                                r = e.changer,
                                a = e.lambda,
                                o = e.name,
                                i = e.localHook,
                                a = r ? f(U(r)) : a ? f(G(a)) : "<em>enchanted with (" + o + ":)</em>";
                            return t || I('<div class="enchantment-row">').data("enchantment", e).append("<td><span class='enchantment-name'>" + G(n) + (i ? "</span><span class='enchantment-local cm-harlowe-3-hookName'>" + ("function" == typeof i.TwineScript_ToSource ? i.TwineScript_ToSource() : i.attr("name") ? "?" + i.attr("name") : "an unnamed hook") : "") + "</span></td><td class='enchantment-value cm-harlowe-3-macroName-" + (r ? "changer" : "command") + " '>" + a + "</td>" + (r ? "<td class='panel-row-buttons'><tw-folddown tabindex=0>(source:)</tw-folddown></td>" : "")).find("tw-folddown").data("folddown", g).end().add(r ? I("<tr class='panel-row-source' style='display:none'><td colspan='3'></td></tr>") : "")
                        },
                        rowCheck: function(e, t) {
                            return t.data("enchantment") === e
                        },
                        columnHead: function() {
                            return '<tr class="panel-head"><th data-col="enchantment-name">Scope</th><th data-col="enchantment-value">Value</th></div>'
                        }
                    })),
                    d = l(function(e) {
                        x.update(e.enchantments, e.enchantments.length)
                    }),
                    O = (q.on("add", d).on("remove", d), q.create()),
                    A = W.create({
                        className: "storylets",
                        tabName: "Storylet",
                        rowWrite: function(e, t) {
                            var n = e.name,
                                r = e.active,
                                a = e.storyletSource,
                                o = e.exclusive,
                                e = e.urgent;
                            return t ? (t.toggleClass("storylet-closed", !r), t[0].firstChild.textContent = r ? "\u2713" : "") : (t = I('<tr class="storylet-row '.concat(r ? "" : "storylet-closed", '">')).attr("data-name", n).append("<td class='storylet-open'>" + (r ? "\u2713" : "") + "</td><td class='storylet-name'>" + n + "</td><td class='storylet-lambda'></td><td class='storylet-exclusive'>" + o + "</td><td class='storylet-urgent'>" + e + "</td>")).find(".storylet-lambda").append(B(a.replace(/^when\s+/i, ""))), t
                        },
                        rowCheck: function(e, t) {
                            e = e.name;
                            return t[0].getAttribute("data-name") === f(e + "")
                        },
                        columnHead: function() {
                            return '<tr class="panel-head"><th data-col="storylet-open" data-order="desc">Open</th><th data-col="storylet-name">Name</th><th data-col="storylet-lambda">Condition</th><th data-col="storylet-exclusive" class=\'storylet-exclusive\'>Exclusivity</th><th data-col="storylet-urgent" class=\'storylet-urgent\'>Urgency</th></tr>'
                        }
                    }),
                    C = (A.tab.hide(), v = l(function() {
                        var r, a, o = z.getStorylets(O),
                            i = H.containsError(o),
                            e = z.allStorylets();
                        A.update(e.map(function(t) {
                            var e = "number" == typeof t.get("exclusivity") ? t.get("exclusivity") : 0,
                                n = "number" == typeof t.get("urgency") ? t.get("urgency") : 0;
                            return r = r || e, a = a || e, {
                                name: t.get("name"),
                                storyletSource: t.get("storylet").TwineScript_ToSource(),
                                active: !i && o.some(function(e) {
                                    return e.get("name") === t.get("name")
                                }),
                                exclusive: e,
                                urgent: n
                            }
                        }), i ? 0 : o.length), A.panel.toggleClass("storylet-error", i), A.panel.toggleClass("panel-exclusive", r), A.panel.toggleClass("panel-urgent", a), e.length && A.tab.show()
                    }), W.create({
                        className: "source",
                        tabName: "Source",
                        tabNameCounter: !1,
                        rowWrite: function(e, t) {
                            var n = e.name,
                                e = e.tag;
                            return t ? t.add(t.next(".panel-row-source")) : (t = z.get(n).get("source"), I('<div class="source-row" data-tag="'.concat(e, '">')).data("value", t).append('<td class="source-name">'.concat(n, '</td><td class="source-tags">').concat(e, "</td><td class='panel-row-buttons'><tw-folddown class='").concat(e ? "" : "open", "' tabindex=0></tw-folddown></td>")).find("tw-folddown").data("folddown", g).end().add(I("<tr class='panel-row-source' style='".concat(e ? "display:none" : "", "'><td colspan='3'></td></tr>")).find("td").append(!e && B(t, "markup")).end()))
                        },
                        rowCheck: function(e, t) {
                            e = e.name;
                            return t[0].firstChild.textContent === f(e + "")
                        },
                        tabUpdate: I.noop,
                        columnHead: I.noop
                    })),
                    E = ["debug-startup", "startup", "header", "debug-header", "footer", "debug-footer"].reduce(function(e, t) {
                        return e.concat(z.getTagged(t).map(function(e) {
                            return {
                                name: e.get("name"),
                                tag: t
                            }
                        }))
                    }, []),
                    N = W.create({
                        className: "errors",
                        tabName: "Error",
                        rowWrite: I.noop,
                        rowCheck: I.noop,
                        columnHead: I.noop,
                        tabUpdate: function(e) {
                            return N.tab.css({
                                background: e ? "rgba(230,101,204,0.3)" : ""
                            }).text("".concat(e, " Error").concat(1 !== e ? "s" : ""))
                        }
                    }),
                    d = n(function(e) {
                        var t;
                        V.options.debug && (N.panelRows.append(e.reduce(function(e, t) {
                            var t = _slicedToArray(t, 2),
                                n = t[0],
                                t = t[1];
                            return "propagated" === n.type ? e : e + '<tr class="error-row"><td class="error-passage">' + D.passage + '</td><td class="error-message" title="' + f(t) + '">' + n.message + "</td></tr>"
                        }, "")), 500 < (t = (e = N.panelRows.children()).length) && I(Array.prototype.slice.call(N.panelRows[0].childNodes, 0, t - 500)).remove(), N.tabUpdate(Math.min(500, e.length)))
                    }, {
                        batch: !0
                    }),
                    j = (H.on(d), N.panel.append("<div class='panel-errors-bottom'>\n\t\t\t<button class='panel-errors-clean'>\ud83e\uddf9 Clear this panel</button>\n\t\t</div>"), r.on("click", ".panel-errors-clean", function() {
                        N.panelRows.empty(), N.tabUpdate(0)
                    }), W.create({
                        className: "tools",
                        tabName: "Tools",
                        tabNameCounter: !1,
                        rowWrite: function(e, t) {
                            var n = e.id,
                                r = e.type,
                                a = e.label,
                                o = e.dropdownItems,
                                i = e.dropdownValue;
                            return "checkbox" === r ? t ? t.find("input").prop("checked", !1) : I('<span><input id="debug-'.concat(n, '" type="checkbox"></input><label for="debug-').concat(n, '">').concat(a, "</label></span>")) : "dropdown" === r ? t ? t.find("input").prop("checked", !1) : I("<span>".concat(a, '<select style="width:3em" data-default="').concat(i, '" id="debug-').concat(n, '"></span>')).find("select").append(o.map(function(e) {
                                return "<option value='".concat(e, "' ").concat(e === i ? "selected" : "", ">").concat(e, "x</option>")
                            })).end() : void 0
                        },
                        rowCheck: I.noop,
                        columnHead: I.noop,
                        tabUpdate: function(e) {
                            return j.tab.css({
                                background: e ? "hsla(210, 72%, 65%, .3)" : ""
                            })
                        }
                    })),
                    P = (r.on("click, change", '.panel-tools [type="checkbox"], .panel-tools select', function(e) {
                        var e = e.target,
                            t = (e = I(e)).attr("id"),
                            n = e.is(":checked") || e.is("select") && e.val() !== +e.attr("data-default");
                        "debug-peekBehindDialogs" === t && r.toggleClass("debug-dialogs", n), "debug-ignoreClickEvents" === t && (V.options.ignoreClickEvents = n), "debug-ignoreGotos" === t && (V.options.ignoreGotos = n), "debug-speedMultiplier" === t && (V.options.speedMultiplier = +e.val()), j.tabUpdate(n)
                    }), j.update([{
                        id: "peekBehindDialogs",
                        type: "checkbox",
                        label: "See through and click through <code>(dialog:)</code> boxes"
                    }, {
                        id: "ignoreClickEvents",
                        type: "checkbox",
                        label: "Stop links, <code>(click:)</code> and <code>(hover-style:)</code> from activating"
                    }, {
                        id: "ignoreGotos",
                        type: "checkbox",
                        label: "Stop <code>(go-to:)</code>, <code>(undo:)</code>, <code>(redirect:)</code> and <code>(restart:)</code> from activating<br><small>(Click 'GO' buttons in Debug View to activate later)</small>"
                    }, {
                        id: "speedMultiplier",
                        label: "Speed of timed events (<code>time</code>, <code>(live:)</code>, <code>(after:)</code>): ",
                        type: "dropdown",
                        dropdownValue: 1,
                        dropdownItems: [.25, .5, .75, 1, 1.25, 1.5, 1.75, 2, 3, 5, 10]
                    }]), W.create({
                        className: "options",
                        tabName: "\u2699\ufe0f",
                        tabNameCounter: !1,
                        rowWrite: function(e, t) {
                            var n = e.name,
                                e = e.label,
                                r = {
                                    darkMode: o.darkMode,
                                    fadePanel: o.fadePanel,
                                    evalReplay: o.evalReplay
                                } [n];
                            return t ? t.find("input").prop("checked", r) : I('<span><input id="debug-'.concat(n, '" type="checkbox" ').concat(r ? "checked" : "", '></input><label for="debug-').concat(n, '">').concat(e, "</label></span>"))
                        },
                        rowCheck: I.noop,
                        tabUpdate: I.noop,
                        columnHead: I.noop
                    })),
                    R = (r.on("click", '.panel-options [type="checkbox"]', function(e) {
                        var e = e.target,
                            t = (e = I(e)).attr("id"),
                            e = e.is(":checked");
                        "debug-darkMode" === t && (o.darkMode = e, h.toggleClass("theme-dark", e)), "debug-fadePanel" === t && (o.fadePanel = e, h.toggleClass("fade-panel", e)), "debug-evalReplay" === t && (V.options.evalReplay = o.evalReplay = e), c()
                    }), P.update([{
                        name: "darkMode",
                        label: "Debug panel is dark"
                    }, {
                        name: "fadePanel",
                        label: "Debug panel is transparent unless the cursor is over it"
                    }, {
                        name: "evalReplay",
                        label: "Record expression replays (viewable via \ud83d\udd0d buttons in Debug View; slower)"
                    }]), h.prepend(S.panel, x.panel, N.panel, A.panel, C.panel, j.panel, P.panel), s.prepend(S.tab, x.tab, N.tab, A.tab, C.tab, j.tab, P.tab), D.on("beforeForward", y).on("beforeBack", y).on("beforeLoad", y), l(function() {
                        T(), v(), x.panelRows.empty(), x.tabUpdate(0), D.passage && z.get(D.passage) && (C.update(E.concat({
                            name: D.passage,
                            tag: ""
                        })), C.panel.find('[data-tag=""], [data-tag=""] + .panel-row-source').insertBefore(C.panel.find('[data-tag="footer"]').first()))
                    }));
                D.on("forward", R).on("back", R).on("load", R);
                K = b, I(document.head).append(I("<style>").html(X)), b(), e && d(e, t)
            };
        return F.registerDebugMode(function(e, t) {
            return !V.options.debug && K(e, t)
        }), K
    }), define("debugmode/panel", ["jquery", "utils/naturalsort"], function(d, e) {
        var i = e();
        return Object.seal({
            create: function(e) {
                var n, t = e.className,
                    r = e.rowWrite,
                    a = e.rowCheck,
                    o = e.rowSort,
                    i = e.columnHead,
                    s = e.tabName,
                    c = e.tabNameCounter,
                    l = void 0 === c || c,
                    c = e.tabUpdate,
                    u = d("<div class='panel panel-".concat(t, "' style='").concat(this.defaultMaxHeight ? "max-height:" + this.defaultMaxHeight + "px" : "", "' hidden><div class=\"resizer-v\"></div><table class='panel-rows'></table></div>")),
                    p = d("<button class='tab tab-".concat(t, "'>").concat(l ? "0 ".concat(s, "s") : s, "</button>"));
                return p.click(function() {
                    p.toggleClass("enabled"), p.parent().siblings(".panel").attr("hidden", ""), p.is(".enabled") && (p.siblings(".tab:not(.tab-" + t + ")").removeClass("enabled"), u.removeAttr("hidden"))
                }), u.on("click", "th", function(e) {
                    var e = e.target,
                        t = "desc" === (e = d(e)).attr("data-order") ? "asc" : "desc";
                    n.sort(e.attr("data-col"), t), u.find("th[data-order]").removeAttr("data-order"), e.attr("data-order", t)
                }), c = c || function(e) {
                    return p.text(l ? "".concat(e, " ").concat(s).concat(1 !== e ? "s" : "") : s)
                }, n = Object.assign(Object.create(this), {
                    tabName: s,
                    tab: p,
                    panel: u,
                    panelRows: u.find(".panel-rows"),
                    rowWrite: r,
                    rowSort: o,
                    rowCheck: a,
                    columnHead: i,
                    tabUpdate: c
                })
            },
            sort: function(r, a) {
                var o = this;
                this.panelRows.children(":not(.panel-head, .panel-row-source)").get().sort(function(e, t) {
                    var n;
                    return "desc" === a && (e = (n = [t, e])[0], t = n[1]), e = e.querySelector("." + r), t = t.querySelector("." + r), o.rowSort && o.rowSort(r, d(e), d(t)) || i(e.textContent, t.textContent)
                }).forEach(function(e) {
                    var t = d(e).next(".panel-row-source").get();
                    o.panelRows.append(e, t)
                })
            },
            update: function(e, t) {
                var r = this.rowCheck,
                    a = this.rowWrite,
                    o = this.panelRows,
                    n = this.columnHead,
                    i = this.panel,
                    s = [],
                    c = o.children(),
                    e = (e.forEach(function(t) {
                        var e = c.get().filter(function(e) {
                                return r(t, d(e))
                            }),
                            n = a(t, e.length && d(e));
                        e.length || o.append(n), s.push.apply(s, _toConsumableArray(n.get()))
                    }), c.filter(function(e, t) {
                        return !s.includes(t) && !t.className.includes("panel-head")
                    }).remove(), this.tabUpdate(t), 0 < t && !o.find(".panel-head").length ? o.prepend(n()) : 0 === t && o.find(".panel-head").remove(), i.find("th[data-order]"));
                e.length && this.sort(e.attr("data-col"), e.attr("data-order"))
            },
            defaultMaxHeight: 300
        })
    }), define("internaltypes/changedescriptor", ["jquery", "utils", "renderer", "datatypes/hookset", "internaltypes/twineerror"], function(b, e, t, v, n) {
        function w(e) {
            return ("string" == typeof e ? e : e.map(function(e) {
                return e.text
            }).join("")).split(/\n/g).reduce(function(e, t, n, r) {
                r = r.length;
                return e.concat(document.createTextNode(t), n !== r - 1 && document.createElement(t.length ? "br" : "tw-consecutive-br"))
            }, [])
        }
        var k = e.impossible,
            S = e.transitionIn,
            T = t.exec,
            r = Object.assign,
            p = Object.keys,
            a = Object.create,
            e = Object.seal,
            _ = Array.isArray,
            x = {
                source: "",
                appendSource: null,
                enabled: !0,
                enablers: null,
                verbatim: !1,
                target: null,
                append: "",
                newTargets: null,
                transition: "",
                transitionTime: null,
                transitionDeferred: !1,
                transitionDelay: 0,
                transitionSkip: 0,
                transitionOrigin: null,
                loopVars: null,
                styles: null,
                attr: null,
                data: null,
                innerEnchantments: null,
                section: null,
                timestamp: 0,
                output: !1,
                summary: function() {
                    var t = this;
                    return ["source", "appendSource", "enabled", "verbatim", "target", "append", "newTargets", "transition", "transitionTime", "transitionDeferred", "transitionDelay", "transitionSkip", "transitionOrigin", "innerEnchantments", "enablers", "output"].filter(function(e) {
                        return hasOwnProperty.call(t, e)
                    }).concat([this.attr.length && "attr", this.styles.length && "styles", p(this.loopVars).length && "loopVars", p(this.data).length && "data"].filter(Boolean))
                },
                create: function(e, t) {
                    e = r(a(this), {
                        attr: this.attr ? this.attr.slice() : [],
                        styles: this.styles ? this.styles.slice() : [],
                        loopVars: this.loopVars || {},
                        data: this.data || {}
                    }, e);
                    if (t) {
                        t = t.run(e);
                        if (n.containsError(t)) return t
                    }
                    return e
                },
                update: function() {
                    function e(t) {
                        var e, n, r;
                        _(a.styles) && 0 < a.styles.length && (n = (e = _slicedToArray(a.styles.reduce(function(n, r) {
                            return p(r).forEach(function(e) {
                                var t = r[e];
                                n[+("function" == typeof t)].push(_defineProperty({}, e, t))
                            }), n
                        }, [
                            [],
                            []
                        ]), 2))[0], r = e[1], n.forEach(function(e) {
                            return t.css(e)
                        }), setTimeout(function() {
                            r.forEach(function(e) {
                                return t.css(e)
                            })
                        })), a.attr && a.attr.forEach(function(e) {
                            return t.attr(e)
                        }), a.data && t.data(a.data)
                    }
                    var a = this,
                        t = this.section,
                        n = this.newTargets,
                        r = this.transition,
                        o = this.transitionDeferred,
                        i = this.append,
                        s = this.target;
                    "function" == typeof s && (s = s());
                    if (_(n) && n.length && (s = n.map(function(e) {
                            return e.target
                        })), _(s))
                        for (var c = 0; c < s.length; c += 1) v.isPrototypeOf(s[c]) ? s[c].forEach(t, e) : e(s[c]);
                    else v.isPrototypeOf(s) ? s.forEach(t, e) : e(s);
                    if (r && !o && !i) {
                        for (var l, u = s;
                            (l = u.data("timestamp")) || (u = u.parent()), !l && u.length;);
                        S(s, r, this.transitionTime, this.transitionDelay, this.transitionSkip, l ? Date.now() - l : 0, this.transitionOrigin)
                    }
                },
                render: function() {
                    var e, r = this,
                        t = this.source,
                        n = this.transition,
                        a = this.transitionTime,
                        o = this.transitionDeferred,
                        i = this.enabled,
                        s = this.enablers,
                        c = this.data,
                        l = this.section,
                        u = this.newTargets,
                        p = this.innerEnchantments,
                        d = this.appendSource,
                        f = this.output,
                        h = this.target,
                        m = this.target,
                        g = this.append;
                    if ("function" == typeof h && (h = h()), !g) return k("ChangeDescriptor.render", "This doesn't have an 'append' method chosen."), b();
                    if (f) return b();
                    if (null != s && s.length) return s = (f = s[0]).descriptor, f = f.changer, s = s.render(), f && (e = x.create({
                        section: l,
                        target: s
                    }), f.run(e), e.update()), s;
                    if (!i || void 0 !== h.attr("hidden")) return x.create({
                        target: h,
                        attr: this.attr.filter(function(e) {
                            return !("style" in e)
                        }),
                        data: _objectSpread(_objectSpread({}, c), {}, {
                            originalSource: t,
                            hidden: !0
                        })
                    }).update(), b();
                    if (!(h = _(u) && u.length ? u : h)) return k("ChangeDescriptor.render", "ChangeDescriptor has source but not a target!"), b();
                    var y = b();
                    if ([].concat(h).filter(function(e) {
                            return !e.jquery
                        }).map(function(e) {
                            var t, n, r = g;
                            return e.target && e.append && (r = (t = e).append, n = t.before, e = e.target), {
                                elements: e.hooks(l, m).filter(function() {
                                    return !(n && 1 & this.compareDocumentPosition(document) && 2 & this.compareDocumentPosition(m[0]))
                                }),
                                append: r
                            }
                        }, []).forEach(function(e) {
                            var t = e.elements,
                                n = e.append;
                            t.each(function(e, t) {
                                t = b(t), y = y.add(r.create({
                                    target: t,
                                    append: n,
                                    newTargets: null
                                }).render()), t.filter("tw-pseudo-hook").contents().unwrap()
                            })
                        }), !(y.length || _(h) || v.isPrototypeOf(h))) {
                        f = g;
                        if (!(f in h)) {
                            if ("replace" !== f) return k("ChangeDescriptor.render", "The target doesn't have a '" + f + "' method."), b();
                            f = h[0] instanceof Text ? "replaceWith" : (h.empty(), "append")
                        }
                        h[0] instanceof Text && "prepend" === (f = "append" === f ? "after" : f) && (f = "before"), y = b(t && (this.verbatim ? w : T)(t)), _(d) && d.forEach(function(e) {
                            var t = e.source,
                                e = e.append,
                                t = b((r.verbatim ? w : T)(t));
                            y = "append" === e ? y.add(t) : "prepend" === e ? t.add(y) : t
                        }), h[f](y.length ? y : void 0), h.data("timestamp", Date.now()), this.update(), n && !o && S("replace" === g ? h : y, n, a, this.transitionDelay, this.transitionSkip, this.expedite, this.transitionOrigin), p && p.map(function(e) {
                            return e(h)
                        }).forEach(function(e) {
                            return l.addEnchantment(e)
                        })
                    }
                    return y
                }
            };
        return e(x)
    }), define("internaltypes/enchantment", ["jquery", "utils", "internaltypes/changedescriptor", "datatypes/changercommand", "utils/operationutils", "internaltypes/twineerror", "utils/renderutils"], function(g, y, b, v, e, w, t) {
        var k = e.objectName,
            S = e.toSource,
            T = t.collapse;
        return Object.freeze({
            create: function(e) {
                return Object.assign(Object.create(this), {
                    enchantments: g()
                }, e)
            },
            enchantScope: function() {
                var i = this,
                    s = this.attr,
                    c = this.data,
                    l = this.functions,
                    u = this.section,
                    p = this.scope,
                    d = this.localHook,
                    f = this.lambda,
                    h = [],
                    m = 0;
                p.forEach(u, function(e, t) {
                    if (d) {
                        d = d.jquery ? d : d.hooks(u);
                        var n = e.find(d);
                        if (n.length) e = n;
                        else if (!d.has(e[0]).length) return
                    }
                    var r, a, o;
                    (!e.is(":empty") || e.data("source") && e.data("source").length) && (m += 1, f ? (o = f.apply(u, {
                        loop: p.TwineScript_GetProperty(t),
                        pos: m
                    }), w.containsError(o) ? (e.replaceWith(o.render()), f = o = null) : v.isPrototypeOf(o) ? o.canEnchant || (e.replaceWith(w.create("macrocall", 'The lambda "'.concat(S(f), "\" can't be or include a revision, enchantment, or interaction changer like (replace:), (click:), or (link:).")).render()), f = o = null) : (e.replaceWith(w.create("macrocall", 'The lambda "'.concat(S(f), '" must return a changer, not ').concat(k(o), ".")).render()), f = o = null)) : o = i.changer, n = !s && !c && (!o || o.summary().every(function(e) {
                        return e.startsWith("transition")
                    })), r = n ? e : e.wrap("<tw-enchantment>").parent(), s && r.attr(s), c && r.data(c), l && l.forEach(function(e) {
                        return e(r)
                    }), o && (t = b.create({
                        section: u,
                        target: r
                    }), o.run(t), t.update(), e.is(y.storyElement) ? (a = Object.keys(Object.assign.apply(Object, [{}].concat(_toConsumableArray(t.styles)))), e.css(a.reduce(function(e, t) {
                        return "background-color" === t || "background-image" === t ? (e["background-color"] = "transparent", e["background-image"] = "none", a.push("background-".concat("background-color" === t ? "image" : "color"))) : e[t] = "inherit", e
                    }, {})), r.data({
                        enchantedProperties: a
                    })) : e.is("tw-passage") && t.styles.some(function(e) {
                        return "margin-left" in e || "margin" in e || "margin-right" in e
                    }) && (o = "padding-right", y.storyElement.css(t = "padding-left", "0px").css(o, "0px"), r.data({
                        enchantedProperties: [t, o]
                    }))), e.is(y.storyElement) && r.css({
                        "min-width": "100%",
                        "min-height": "100%"
                    }), "true" === r.attr("collapsing") && (r.find("[collapsing=false]").each(function() {
                        g(this).removeAttr("collapsing")
                    }), T(r)), n || h.push(r))
                }), this.enchantments = g(h)
            },
            disenchant: function() {
                this.enchantments.each(function(e, t) {
                    (t = g(t)).contents().unwrap();
                    t = t.data("enchantedProperties");
                    t && y.storyElement.css(t.reduce(function(e, t) {
                        return e[t] = "", e
                    }, {}))
                })
            }
        })
    }), define("internaltypes/twineerror", ["jquery", "utils"], function(i, s) {
        var a = s.impossible,
            c = s.escape,
            l = (i(document.documentElement).on("click", "tw-folddown", function(e) {
                var t = e.target,
                    e = ((t = i(t)).toggleClass("open"), t.popData("folddown"));
                for ("function" == typeof e && e(t); t && !t.next().length;) t = t.parent();
                null != (e = t) && e.next().toggle()
            }), {
                syntax: "The markup seems to contain a mistake.",
                saving: "I tried to save or load the game, but I couldn't do it.",
                operation: "I tried to perform an operation on some data, but the data's type was incorrect.",
                macrocall: "I tried to use a macro, but its call wasn't written correctly.",
                datatype: "I tried to use a macro, but was given the wrong type of data to it.",
                custommacro: "I tried to use a custom macro, but its code hook had a mistake in it.",
                infinite: "I almost ended up doing the same thing over and over, forever.",
                property: "I tried to access a value in a string/array/datamap, but I couldn't find it.",
                unimplemented: "I currently don't have this particular feature. I'm sorry.",
                propagated: "Click the 'Open' button to see the code hook as it was executed.",
                user: "This is a custom error created by (error:). It usually means you used a custom macro incorrectly.",
                assertion: "This command exists to provide a helpful error if a certain important condition wasn't true.",
                debugonly: "This macro is not meant to be used outside of debugging your story."
            }),
            u = [],
            n = {
                TwineError: !0,
                create: function(e, t, n, r) {
                    return t && "string" == typeof t || a("TwineError.create", "has a bad message string"), n || e in l || a("TwineError.create", "no error explanation given"), "user" !== e && (t = t[0].toUpperCase() + t.slice(1)), Object.assign(Object.create(this), {
                        type: e,
                        message: t,
                        explanation: n,
                        source: void 0,
                        innerDOM: r,
                        appendTitleText: !1
                    })
                },
                containsError: function() {
                    for (var e = 0; e < arguments.length; e += 1) {
                        var t = arguments[e];
                        if (n.isPrototypeOf(t)) return t;
                        if (Array.isArray(t)) {
                            t = n.containsError.apply(n, t);
                            if (t) return t
                        }
                    }
                    return !1
                },
                createWarning: function(e, t) {
                    return Object.assign(this.create(e, t), {
                        warning: !0
                    })
                },
                render: function(t) {
                    var n = this,
                        e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                        r = (t = "string" == typeof t ? t : this.source || "", i("<tw-error class='" + (this.warning ? "warning" : "error") + "' title='" + c(t) + "'>" + c(this.message + (this.appendTitleText ? " " + t : "")) + "</tw-error>")),
                        a = i("<tw-error-explanation>").text(this.explanation || l[this.type]).hide(),
                        o = i("<tw-folddown tabindex=0>");
                    return this.innerDOM && i("<tw-open-button label='Open'>").on("click", function() {
                        var e = i("<tw-backdrop><tw-dialog></tw-backdrop>");
                        e.find("tw-dialog").prepend(n.innerDOM, i("<tw-link tabindex=0>OK</tw-link>").on("click", function() {
                            n.innerDOM.detach(), e.remove()
                        }).wrap("<tw-dialog-links>").parent()), s.storyElement.prepend(e)
                    }).appendTo(r), r.append(o).append(a), r.data("TwineError", this), e || u.forEach(function(e) {
                        return e(n, t)
                    }), r
                },
                on: function(e) {
                    return "function" != typeof e || u.includes(e) || u.push(e), n
                }
            };
        return Object.preventExtensions(n)
    }), define("internaltypes/twinenotifier", ["jquery", "utils"], function(e, t) {
        var n = t.impossible,
            r = {
                create: function(e) {
                    return e || n("TwineNotifier.create", "called with only 1 string."), Object.assign(Object.create(r), {
                        message: e
                    })
                },
                render: function() {
                    return e("<tw-notifier>").attr("message", this.message)
                }
            };
        return Object.preventExtensions(r)
    }), define("internaltypes/varref", ["state", "internaltypes/twineerror", "utils", "utils/operationutils", "datatypes/hookset"], function(u, p, e, t, i) {
        var c, n = e.impossible,
            s = e.andList,
            r = e.nth,
            o = t.is,
            d = t.isObject,
            f = t.toSource,
            h = t.isSequential,
            m = t.objectName,
            l = t.typeName,
            g = t.clone,
            y = t.isValidDatamapName,
            b = t.subset,
            v = t.collectionType,
            w = t.unstorableValue,
            a = t.matches,
            k = Array.isArray,
            S = {
                set: [],
                delete: []
            },
            T = "You can only access position strings/numbers ('4th', 'last', '2ndlast', (2), etc.), slices ('1stTo2ndlast', '3rdTo5th'), ",
            _ = "You can't access the '0th' or '0thlast' position of ";

        function x(e, t) {
            if (p.containsError(t)) return n;
            if (e instanceof Map && (n = p.containsError(y(e, t)))) return n;
            if (h(e))
                if ("number" == typeof t) {
                    if (0 === t) return p.create("property", "You can't access elements at position 0 of ".concat(m(e), "."), "Only positive and negative position values exist.");
                    0 < t && --t
                } else if ("string" == typeof t && (r = /^(\d+)(?:st|[nr]d|th)last$/i.exec(t))) {
                if ("0" === r[1]) return p.create("property", _ + m(e) + ".");
                t = -r[1]
            } else if ("string" == typeof t && (r = /^(\d+)(?:st|[nr]d|th)$/i.exec(t))) {
                if ("0" === r[1]) return p.create("property", _ + m(e) + ".");
                t = r[1] - 1
            } else if ("string" == typeof t && (r = /^(?:(\d+)(?:st|[nr]d|th)(last)?|last)to(?:(\d+)(?:st|[nr]d|th)(last)?|last)$/i.exec(t))) {
                var n = _slicedToArray(r, 5),
                    r = n[1],
                    r = void 0 === r ? 0 : r,
                    a = n[2],
                    o = n[3],
                    o = void 0 === o ? 0 : o;
                t = {
                    last: n[4] ? -o : o - 1,
                    first: a ? -r : r - 1
                }
            } else if ("last" === t) t = -1;
            else if ("random" === t) {
                if (!e.length) return p.create("property", "I can't get a random value from ".concat(m(e), ", because it's empty."));
                t = u.random() * Array.from(e).length | 0
            } else {
                if (i.isPrototypeOf(e) && !i.TwineScript_Properties.includes(t)) return p.create("property", "".concat(T + s(i.TwineScript_Properties.map(function(e) {
                    return "'" + e + "'"
                })), " of ").concat(m(e), ", not ").concat(("string" == typeof t ? f : m)(t), "."));
                if (!["length", "some", "any", "all", "start", "end", "random"].includes(t) && !i.isPrototypeOf(e)) return p.create("property", "".concat(T, "'length', 'some', 'any', 'all', 'start', 'end', and 'random' of ").concat(m(e), ", not ").concat(("string" == typeof t ? f : m)(t), "."))
            } else if (e instanceof Set) {
                if (!["length", "some", "any", "all"].includes(t)) return p.create("property", "".concat(T, "'length', 'some', 'any', and 'all' of ").concat(m(e), "."), "You can't access specific individual data values from datasets.");
                "length" === t && (t = "size")
            } else {
                if (k(e.TwineScript_Properties) && !e.TwineScript_Properties.includes(t)) return p.create("property", "You can only get the ".concat(s(e.TwineScript_Properties.map(function(e) {
                    return "'" + e + "'"
                })), " of ").concat(m(e), ", not ").concat(("string" == typeof t ? f : m)(t), "."));
                if ("number" == typeof e || "boolean" == typeof e) return p.create("property", "You can't get any data values, let alone ".concat(m(t), ", from ").concat(m(e)))
            }
            return t
        }

        function O(e, t) {
            return +t < 0 && Math.abs(t) <= e.length ? e.length + +t : t
        }
        var A = /[^\uD801-\uDFFF]/,
            C = new Map;

        function E(e, t) {
            var n, r, a;
            return void 0 === e ? e : e instanceof Map ? e.get(t) : "some" !== t && "any" !== t && "all" !== t && "start" !== t && "end" !== t || e.TwineScript_VariableStore ? ("string" == typeof e && (C.has(e) ? e = C.get(e) : A.test(e) ? (a = _toConsumableArray(e), C.set(e, a), e = a) : C.set(e, e)), h(e) && Number.isFinite(t) && (t = O(e, t)), e.TwineScript_GetProperty ? e.TwineScript_GetProperty(t) : "function" != typeof(a = e[t]) ? a : void 0) : (n = e, r = t, a = '"'.concat(r, " value").concat("any" === r ? "" : "s", '" of '), {
                determiner: r,
                determined: n,
                array: _toConsumableArray(n),
                string: "string" == typeof n && n,
                TwineScript_ObjectName: a + m(n),
                TwineScript_ToSource: function() {
                    return "".concat(r, " of ").concat(f(n))
                },
                TwineScript_TypeName: a + "a data structure",
                TwineScript_Unstorable: !0,
                TwineScript_Print: function() {
                    return "`[" + this.TwineScript_TypeName + "]`"
                }
            })
        }

        function N(e) {
            var t;
            return e.computed ? (t = e.value, "string" == typeof(t = c.isPrototypeOf(t) ? t.get() : t) ? "('" + t + "')" : "(" + t + ")") : "number" == typeof e ? r(e) : "'" + e + "'"
        }

        function j(t, e, n) {
            if (t.TwineScript_VariableStore) {
                if (t.TwineScript_TypeDefs && e in t.TwineScript_TypeDefs) {
                    var r = t.TwineScript_TypeDefs[e];
                    if ("const" === r.name) {
                        if (void 0 !== t[e]) return p.create("operation", "I can't alter ".concat(t === u.variables ? "$" : "_").concat(e, " because it's been restricted to a constant value."), "This variable can't be changed for the rest of the story.")
                    } else if (!a(r, n)) return p.create("operation", "I can't set ".concat(t === u.variables ? "$" : "_").concat(e, " to ").concat(l(n), " because it's been restricted to ").concat(f(r), "-type data."), "You can restrict a variable or data name by giving a typed variable to (set:) or (put:).")
                }
                return !0
            }
            return k(e) ? e.map(function(e) {
                return j(t, e)
            }) : t instanceof Map ? "string" == typeof e || p.create("operation", "".concat(m(t), " can only have string data names, not ").concat(m(e), ".")) : h(t) ? ["length", "random", "some", "any", "all", "start", "end"].includes(e) ? p.create("operation", "I can't forcibly alter the '" + e + "' of " + m(t) + ".", "start" === e || "end" === e ? "Alter the values at actual positions, like 1st or 2ndlast, rather than just the '" + e + "'." : void 0) : +e == (0 | e) || p.create("property", m(t) + " can only have position keys ('3rd', '1st', (5), etc.), not " + N(e) + ".") : t.TwineScript_Identifiers && e in t ? p.create("keyword", "I can't alter the value of the '" + e + "' identifier.", "You can only alter data in variables, not fixed identifiers.") : p.create("operation", "I can't modify " + m(t), t instanceof Set ? "You should use an (array:) if you need to modify the data inside this dataset." : i.isPrototypeOf(t) ? "You should alter hooks indirectly using macros like (replace:) or (enchant:)." : void 0)
        }

        function P(t, e, n, r) {
            var a = e;
            t instanceof Map ? t.set(e, n) : (h(t) && (e = O(t, e)), t.TwineScript_Set ? t.TwineScript_Set(e, n, r) : t[e] = n), S.set.forEach(function(e) {
                return e(t, a, n)
            })
        }

        function R(t, e) {
            var n = e;
            h(t) && (e = O(t, e)), k(t) && /^(?:[1-9]\d*|0)$/.exec(e) ? t.splice(e, 1) : t instanceof Map || t instanceof Set ? t.delete(e) : t.TwineScript_Delete ? t.TwineScript_Delete(e) : delete t[e], S.delete.forEach(function(e) {
                return e(t, n)
            })
        }

        function I(t, e) {
            var n, r, a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : e,
                o = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
            return e && "object" === _typeof(e) && "last" in e && "first" in e ? i.isPrototypeOf(t) ? t.TwineScript_GetProperty(e) : (n = e.first, r = e.last, b(t, n + (0 <= n), r + (0 <= r))) : k(e) ? i.isPrototypeOf(t) ? t.TwineScript_GetProperty(e) : e.map(function(e) {
                return I(t, e, e)
            })["string" == typeof t ? "join" : "valueOf"]("") : void 0 !== (n = E(t, e)) || o ? n : t === u.variables ? 0 : "temp" === (null == (r = t.TwineScript_VariableStore) ? void 0 : r.type) ? p.create("property", "There isn't a temp variable named _".concat(a, " in this place."), "Temp variables only exist inside the same passage, hook, or lambda in which they're created.") : k(t) && "number" == typeof e ? p.create("property", "This array of ".concat(t.length, " elements doesn't have a ").concat(N(a + ("number" == typeof a ? 1 : "")), " element."), t.length ? "It contains: ".concat(s(t.map(m)), ".") : "The array is empty.") : (o = Array.from("function" == typeof t.keys && t.keys()), p.create("property", "I can't find a ".concat(N(a), " data name in ").concat(m(t)), t instanceof Map && o.length ? "Its names include: ".concat(s(o), ".") : void 0))
        }

        function V(e, t) {
            var r = this,
                e = this.compiledPropertyChain.reduce(function(e, t) {
                    var n = 0 === e.length ? r.object : I.apply(void 0, _toConsumableArray(e[e.length - 1]));
                    return e.push([n, t]) && e
                }, []).reduceRight(e, t);
            return p.containsError(e) ? e : void 0
        }
        return c = Object.freeze({
            get: function() {
                for (var e = this.object, t = 0; t < this.compiledPropertyChain.length - 1; t += 1)
                    if (e = I(e, this.compiledPropertyChain[t]), p.containsError(e)) return e;
                return I(e, this.compiledPropertyChain.slice(-1)[0], this.propertyChain.slice(-1)[0])
            },
            has: function() {
                for (var e = this.object, t = 0; t < this.compiledPropertyChain.length - 1; t += 1)
                    if (void 0 === (e = I(e, this.compiledPropertyChain[t], void 0, !0)) || p.containsError(e)) return !1;
                return void 0 !== I(e, this.compiledPropertyChain.slice(-1)[0], void 0, !0)
            },
            set: function(e, c) {
                var l = this;
                return !this.object || this.object.TwineScript_VariableStore || this.object.TwineScript_Identifiers ? V.call(this, function(n, e, t) {
                    var e = _slicedToArray(e, 2),
                        r = e[0],
                        a = e[1];
                    if (e = p.containsError(n, r, a) || p.containsError(j(r, a, n))) return e;
                    if (e = w(n)) return p.create("operation", "".concat(m(n), " can't be stored").concat(!n.TwineScript_Unstorable && v(n) ? " because it holds ".concat(m(e)) : "", "."));
                    if (0 < t) r = g(r);
                    else if ("temp" === (null == (e = r.TwineScript_VariableStore) ? void 0 : e.type) && r !== u.variables) {
                        for (var o = r;
                            "temp" === (null == (i = o.TwineScript_VariableStore) ? void 0 : i.type) && !hasOwnProperty.call(o, a);) var i, o = Object.getPrototypeOf(o);
                        "temp" === (null == (t = o.TwineScript_VariableStore) ? void 0 : t.type) && (r = o)
                    }
                    if ("string" == typeof r) {
                        if ("string" != typeof n) return p.create("datatype", "I can't put this non-string value, ".concat(m(n), ", in a string."));
                        if (n.length !== (k(a) ? a.length : 1)) return p.create("datatype", "".concat(m(n), "is not the right length to fit into this string location."));
                        var r = _toConsumableArray(r),
                            s = _toConsumableArray(n);
                        [].concat(a).forEach(function(e) {
                            0 + e < 0 && (e = r.length + (0 + e)), r = [].concat(_toConsumableArray(r.slice(0, e)), [s.shift()], _toConsumableArray(r.slice(e + 1)))
                        }), r = r.join("")
                    } else d(r) && (void 0 !== n.TwineScript_KnownName && ((n = "" !== n.TwineScript_KnownName ? g(n) : n).TwineScript_KnownName = f(l)), k(a) && h(n) ? ("string" == typeof n && (n = _toConsumableArray(n)), a.map(function(e, t) {
                        return [e, n[t]]
                    }).forEach(function(e) {
                        var e = _slicedToArray(e, 2),
                            t = e[0],
                            e = e[1];
                        return P(r, t, e, c)
                    })) : P(r, a, n, c));
                    return r
                }, e) : p.create("macrocall", "I can't (set:) ".concat(m(this), ", if the ").concat((m(this.object).match(/ (.+$)/) || ["", "value"])[1], " isn't stored in a variable."), "Modifying data structures that aren't in variables won't change the game state at all.")
            },
            delete: function() {
                return V.call(this, function(e, t, n) {
                    var r, t = _slicedToArray(t, 2),
                        a = t[0],
                        t = t[1];
                    return (r = p.containsError(e, a, t) || p.containsError(j(a, t))) || (0 < n && (a = g(a)), null === e ? ((r = "string" == typeof a) && (a = _toConsumableArray(a)), k(t) ? (h(a) && (t = _toConsumableArray(new Set(t))).sort(function(e, t) {
                        return O(a, t) - O(a, e)
                    }), t.forEach(function(e) {
                        return R(a, e)
                    })) : R(a, t), r && (a = a.join(""))) : P(a, t, e, !1), a)
                }, null)
            },
            defineType: function(e) {
                var t = this.object,
                    n = this.compiledPropertyChain[0],
                    r = (hasOwnProperty.call(t, "TwineScript_TypeDefs") || (t.TwineScript_TypeDefs = Object.create(t.TwineScript_TypeDefs || null)), t.TwineScript_TypeDefs),
                    a = r[n];
                if (a && !o(a, e)) return p.create("operation", "I can't redefine the type of " + m(this) + " to " + (e.TwineScript_ObjectName || l(e)) + ", as it is already " + (a.TwineScript_ObjectName || l(a)) + ".");
                t.TwineScript_DefineType ? t.TwineScript_DefineType(n, e) : r[n] = e, "const" === e.name && (t[n] = void 0)
            },
            matches: function(e, t) {
                return this.object === e && this.compiledPropertyChain[0] === t
            },
            getName: function() {
                return this.compiledPropertyChain[0]
            },
            create: function(e, t) {
                var n;
                if (n = p.containsError(e)) return n;
                Array.isArray(t) || (t = [].concat(t)), c.isPrototypeOf(e) && (t = e.propertyChain.concat(t), e = e.object);
                var r = function(e, t) {
                    for (var n, r = [], a = 0; a < t.length; a += 1) {
                        var o = t[a];
                        if (o.computed && (o = o.value), c.isPrototypeOf(o) && (o = o.get()), k(o)) {
                            for (var i = [], s = 0; s < o.length; s += 1) i[s] = x(e, o[s]);
                            o = i
                        } else o = x(e, o);
                        if (n = p.containsError(o)) return n;
                        a < t.length - 1 && (e = I(e, o)), r.push(o)
                    }
                    return r
                }(e, t);
                return (n = p.containsError(r)) || Object.assign(Object.create(c), {
                    object: e,
                    propertyChain: t,
                    compiledPropertyChain: r
                })
            },
            TwineScript_ToSource: function() {
                function r(e, t) {
                    return !t && n.object.TwineScript_VariableStore ? e : N(e)
                }
                var e, n = this;
                return (this.object === u.variables ? "$" : "temp" === (null == (e = this.object.TwineScript_VariableStore) ? void 0 : e.type) ? "_" : f(this.object) + "'s ") + (1 === this.propertyChain.length ? r(this.propertyChain[0]) : this.propertyChain.reduce(function(e, t, n) {
                    return e + "'s " + r(t, n)
                }))
            },
            get TwineScript_ObjectName() {
                var e;
                return this.object.TwineScript_VariableStore ? "the ".concat("temp" === (null == (e = this.object.TwineScript_VariableStore) ? void 0 : e.type) ? "temp " : "", "variable ").concat(this.TwineScript_ToSource()) : m(this.object) + "'s " + (1 === this.propertyChain.length ? N(this.propertyChain[0]) : this.propertyChain.reduce(function(e, t, n) {
                    return e + "'s " + N(t)
                }))
            },
            on: function(e, t) {
                if (e in S) return "function" != typeof t || S[e].includes(t) || S[e].push(t), c;
                n("VarRef.on", "invalid event name")
            }
        })
    }), define("internaltypes/varscope", [], function() {
        return Object.seal({
            TwineScript_ObjectName: "the temporary variables",
            TwineScript_VariableStore: {
                type: "temp",
                name: "an unknown scope"
            },
            TwineScript_TypeDefs: Object.create(null)
        })
    }), define("macrolib/commands", ["jquery", "macros", "utils", "state", "passages", "engine", "internaltypes/twineerror", "internaltypes/twinenotifier", "datatypes/assignmentrequest", "datatypes/hookset", "datatypes/codehook", "datatypes/colour", "datatypes/gradient", "internaltypes/varref", "datatypes/typedvar", "datatypes/varbind", "utils/operationutils", "utils/renderutils"], function(u, n, y, c, l, a, b, M, e, o, t, p, d, i, s, v, r, f) {
        var h = r.printBuiltinValue,
            m = r.objectName,
            g = r.clone,
            w = r.toSource,
            k = f.dialog,
            S = f.geomParse,
            D = f.geomStringRegExp,
            r = n.TypeSignature,
            f = r.Any,
            F = r.Everything,
            T = r.rest,
            _ = r.either,
            x = r.optional,
            O = r.zeroOrMore,
            L = r.percent,
            H = r.nonNegativeInteger,
            A = r.positiveInteger,
            r = r.positiveNumber,
            C = Object.assign,
            E = Math.floor,
            N = Math.ceil,
            j = Math.abs,
            z = Math.max,
            q = Math.min,
            P = u.noop;

        function R(e) {
            return "(".concat(e, " ").concat(y.options.ifid, ") ")
        } ["set", "put", "unpack"].forEach(function(r) {
            return n.add(r, "Instant", function(e) {
                for (var t = 0; t < (arguments.length <= 1 ? 0 : arguments.length - 1); t += 1) {
                    var n = t + 1 < 1 || arguments.length <= t + 1 ? void 0 : arguments[t + 1];
                    if ("into" === n.operator && "set" === r) return b.create("macrocall", "Please say 'to' when using the (set:) macro.");
                    if ("to" === n.operator && "set" !== r) return b.create("macrocall", "Please say 'into' when using the (put:) or (unpack:) macro.");
                    if ((i.isPrototypeOf(n.dest) || s.isPrototypeOf(n.dest)) === ("unpack" === r)) return b.create("macrocall", "unpack" === r ? "Please use the (unpack:) macro with arrays, datamaps or (p:) patterns containing variables to the right of 'into'." : "Please use the (".concat(r, ":) macro with just single variables and typed variables to the ").concat("set" === r ? "left of 'to'." : "right of 'into'."), "You may wish to change this to the (".concat("unpack" !== r ? "unpack" : "to" === n.operator ? "set" : "put", ":) macro."));
                    n = n.set();
                    if (b.containsError(n)) return n
                }
                return {
                    TwineScript_TypeID: "instant",
                    TwineScript_TypeName: "a (".concat(r, ":) operation"),
                    TwineScript_ObjectName: "a (".concat(r, ":) operation"),
                    TwineScript_Unstorable: !0,
                    TwineScript_Print: function() {
                        return y.options.debug, ""
                    }
                }
            }, [T(e)])
        }), n.add("move", "Instant", function(e) {
            for (var t = 0; t < (arguments.length <= 1 ? 0 : arguments.length - 1); t += 1) {
                var n = t + 1 < 1 || arguments.length <= t + 1 ? void 0 : arguments[t + 1];
                if ("into" !== n.operator) return b.create("macrocall", "Please say 'into' when using the (move:) macro.");
                n = n.set(!0);
                if (b.containsError(n)) return n
            }
            return {
                TwineScript_TypeID: "instant",
                TwineScript_TypeName: "a (move:) operation",
                TwineScript_ObjectName: "a (move:) operation",
                TwineScript_Unstorable: !0,
                TwineScript_Print: function() {
                    return y.options.debug, ""
                }
            }
        }, [T(e)]), n.addCommand("display", function(e) {
            if (!l.hasValid(e)) return b.create("macrocall", "I can't (display:) the passage '".concat(e, "' because it doesn't exist."))
        }, function(e, t, n) {
            return e.source = l.getTree(n), e
        }, [String])("print", P, function(e, t, n) {
            return C(e, {
                source: h(n)
            })
        }, [f])(["verbatim-print", "v6m-print"], P, function(e, t, n) {
            return C(e, {
                verbatim: !0,
                source: h(n)
            })
        }, [f])(["verbatim-source", "v6m-source"], function(e) {
            if ("command" === (null == e ? void 0 : e.TwineScript_TypeID) && !e.TwineScript_ToSource) return b.create("datatype", "I can't construct the source code of a command created by a custom macro.")
        }, function(e, t, n) {
            return C(e, {
                verbatim: !0,
                source: h(w(n))
            })
        }, [f])("go-to", function(e) {
            if (!l.hasValid(e)) return b.create("macrocall", "I can't (go-to:) to the passage '".concat(e, "' because it doesn't exist."), "Check that you didn't mistype the passage name, or rename the passage to something else.")
        }, function(e, t, n) {
            if (!y.options.ignoreGotos) return requestAnimationFrame(function() {
                return a.goToPassage(n, {
                    transition: e.data.passageT8n
                })
            }), {
                blocked: !0
            }
        }, [String])("redirect", function(e) {
            if (!l.hasValid(e)) return b.create("macrocall", "I can't (redirect:) to the passage '".concat(e, "' because it doesn't exist."), "Check that you didn't mistype the passage name, or rename the passage to something else.")
        }, function(e, t, n) {
            if (!y.options.ignoreGotos) return requestAnimationFrame(function() {
                return a.redirect(n, {
                    transition: e.data.passageT8n
                })
            }), {
                blocked: !0
            }
        }, [String])("undo", P, function(e, t, n) {
            return c.pastLength < 1 ? C(e, {
                source: n
            }) : y.options.ignoreGotos ? void 0 : (requestAnimationFrame(function() {
                return a.goBack({
                    transition: e.data.passageT8n
                })
            }), {
                blocked: !0
            })
        }, [x(String)])("debug", P, a.enableDebugMode, [], !1), y.onStartup(function() {
            return y.storyElement.on("click.icon", "tw-icon", function(e) {
                var t = u(this),
                    n = t.data("clickEvent"),
                    r = t.attr("alt");
                n && n(t), "Undo" === r && (e.stopPropagation(), a.goBack()), "Redo" === r && (e.stopPropagation(), a.goForward()), "Fullscreen" === r && (e.stopPropagation(), a.toggleFullscreen()), "Restart" === r && (c.hasSessionStorage && sessionStorage.removeItem("Saved Session"), window.location.reload())
            })
        }), [
            ["Undo", "&#8630;", function() {
                return 0 < c.pastLength
            }],
            ["Redo", "&#8631;", function() {
                return 0 < c.futureLength
            }],
            ["Fullscreen", "&#9974;", function() {
                return document.fullscreenEnabled || document.msFullscreenEnabled
            }],
            ["Restart", "&#10226;", Object]
        ].forEach(function(e) {
            var e = _slicedToArray(e, 3),
                o = e[0],
                i = e[1],
                s = e[2];
            n.addCommand("icon-".concat(o.toLowerCase()), function(e, t) {
                if ("string" == typeof e && "string" == typeof t) return e = _toConsumableArray(e).length, t = _toConsumableArray(t).length, 1 < e && 1 < t ? b.create("datatype", "One of the two strings given to (icon-".concat(o.toLowerCase(), ":) should be 1 character long, for its icon.")) : 1 === e && 1 === t ? b.create("datatype", "One of the two strings given to (icon-".concat(o.toLowerCase(), ":) should be 2 or more characters long, for its label.")) : void 0
            }, function(t, e, n, r) {
                var a;
                return ("string" == typeof r && 1 === _toConsumableArray(r).length || "string" == typeof n && 1 < _toConsumableArray(n).length) && (n = (a = [r, n])[0], r = a[1]), "Undo" === o && (t.data.forgetUndosEvent = function(e) {
                    t.section.whenUnblocked(function() {
                        return u(e).css("visibility", "hidden")
                    })
                }), C(t, {
                    source: '<tw-icon tabindex=0 alt="'.concat(o, '" ').concat(r ? 'data-label="'.concat(r.replace('"', "&quot;"), '"') : "", ' title="').concat(o, '" ').concat(s() ? "" : 'style="visibility:hidden"', ">").concat(n || i, "</tw-icon>")
                })
            }, [x(String), x(String)])
        }), n.addCommand("icon-counter", function(e, t, n) {
            var r = " label string given to (icon-counter:) can't be empty or only whitespace.";
            return t && t.trim() ? "string" != typeof n || n.trim() ? void 0 : b.create("datatype", "The 2nd " + r) : b.create("datatype", "The 1st " + r)
        }, function(r, e, a, o, i) {
            r.attr.push({
                "data-2bind": !0
            }), r.data.twoWayBindEvent = function(e, t, n) {
                a.varRef.matches(t, n) && "number" == typeof(t = a.varRef.get()) && r.target.children("tw-icon").text((0 < t ? E : N)(t)).attr("data-label", 1 !== j(t) && void 0 !== i ? i : o)
            };
            var t = a.varRef.get();
            return "number" != typeof t ? b.create("datatype", "(icon-counter:) can only be bound to a variable holding a number, not ".concat(m(t), ".")) : C(r, {
                source: '<tw-icon data-label="'.concat(y.escape(1 !== j(t) && void 0 !== i ? i : o), '">').concat((0 < t ? E : N)(t), "</tw-icon>")
            })
        }, [v, String, x(String)]), n.addCommand("meter", function(e, t, n, r) {
            return "two way" === e.bind ? b.create("datatype", "(meter:) shouldn't be given two-way bound variables.", 'Change the "2bind" keyword to just "bind".') : "string" != typeof r || r.trim() ? -1 === n.search(D) || !n.includes("=") && 1 < n.length ? b.create("datatype", 'The (meter:) macro requires a sizing line("==X==", "==X", "=XXXX=" etc.) be provided, not ' + JSON.stringify(n) + ".") : void 0 : b.create("datatype", "The label string given to (meter:) can't be empty or only whitespace.")
        }, function(r, e, a, n, t, o, i) {
            o && "string" != typeof o && (i = o, o = void 0), i = i || p.create({
                h: 0,
                s: 0,
                l: .5,
                a: .5
            }), p.isPrototypeOf(i) && (i = d.create(90, [{
                colour: i,
                stop: 0
            }, {
                colour: i,
                stop: 1
            }]));

            function s(e) {
                var t = z(0, q(1, e / n)),
                    e = i.repeating ? i : i.multiply(n / e);
                return "height:100%;background-repeat:no-repeat;background-image:".concat((l ? C(e, e.repeating ? {} : {
                    angle: 270
                }).toLinearGradientString() + ", " : "") + C(e, e.repeating ? {} : {
                    angle: l || 0 === c ? 90 : 270
                }).toLinearGradientString(), ";background-size:").concat(l ? Array(2).fill(50 * t + "%") : 100 * t + "%", ";background-position-x:").concat(l ? -100 / (2 - t) + 100 + "%," + 100 / (2 - t) + "%" : 0 === c ? "left" : "right", ";text-align:").concat(l ? "center" : 0 === c ? "left" : "right")
            }
            var t = S(t),
                c = t.marginLeft,
                t = t.size,
                l = 0 < c && Math.ceil(c + t) < 100,
                u = (r.styles.push({
                    "margin-left": c + "%",
                    width: t + "%",
                    height: "1.5em",
                    display: "block"
                }), r.attr.push({
                    "data-2bind": !0
                }), o && e.stackTop.tempVariables),
                t = (r.data.twoWayBindEvent = function(e, t, n) {
                    a.varRef.matches(t, n) && "number" == typeof(t = a.varRef.get()) && ((n = r.target.children("tw-meter")).attr("style", s(t)), o) && r.section.renderInto("", null, {
                        source: o,
                        target: n,
                        append: "replace",
                        transitionDeferred: !1
                    }, u)
                }, a.varRef.get());
            return "number" != typeof t ? b.create("datatype", "(meter:) can only be bound to a variable holding a number, not ".concat(m(t), ".")) : C(r, {
                source: '<tw-meter style="'.concat(s(t), '">').concat(o || "", "</tw-meter>")
            })
        }, [v, r, String, x(_(String, p, d)), x(_(p, d))]), [
            ["cycling-link"],
            ["seq-link", "sequence-link"]
        ].forEach(function(t, u) {
            return n.addCommand(t, function() {
                var e;
                return "" === (arguments.length <= 0 ? void 0 : arguments[0]) ? b.create("datatype", "The first string in a (" + t[0] + ":) can't be empty.") : arguments.length <= (v.isPrototypeOf(arguments.length <= 0 ? void 0 : arguments[0]) ? 2 : 1) ? b.create("datatype", "I need two or more strings to " + (u ? "sequence" : "cycle") + " through, not just '" + ((e = arguments.length - 1) < 0 || arguments.length <= e ? void 0 : arguments[e]) + "'.") : void 0
            }, function(a, e) {
                for (var o, t = arguments.length, i = new Array(2 < t ? t - 2 : 0), n = 2; n < t; n++) i[n - 2] = arguments[n];
                v.isPrototypeOf(i[0]) && (o = i.shift());
                var s = 0,
                    c = ("two way" === (null == (l = o) ? void 0 : l.bind) && (a.attr.push({
                        "data-2bind": !0
                    }), -1 < (l = i.indexOf(o.varRef.get()))) && (s = l), e.stackTop.tempVariables);

                function r(e, t) {
                    var n = s >= i.length - 1 && u,
                        r = "" === i[s] ? "" : n ? i[s] : "<tw-link>".concat(i[s], "</tw-link>");
                    if (n && (a.data.clickEvent = void 0), o && !t) {
                        n = o.set(i[s]);
                        if (b.containsError(n)) return void e.replaceWith(n.render(i[s]))
                    }
                    t = _objectSpread(_objectSpread({}, a), {}, {
                        source: r,
                        transitionDeferred: !1
                    });
                    a.section.renderInto("", null, t, c)
                }
                i[s] && (a.data.clickEvent = function(e) {
                    s = (s + 1) % i.length, r(e, !1)
                }, a.data.twoWayBindEvent = function(e, t, n) {
                    o.varRef.matches(t, n) && (t = o.varRef.get(), -1 < (n = i.indexOf(t))) && n !== s && (s = n, r(e, !0))
                });
                var l = "<tw-link>".concat(i[s], "</tw-link>");
                if (o) {
                    e = o.set(i[s]);
                    if (b.containsError(e)) return e
                }
                return C(a, {
                    source: l,
                    append: "replace",
                    transitionDeferred: !0
                })
            }, [_(v, String), T(String)])
        }), y.onStartup(function() {
            return y.storyElement.on("change.dropdown-macro", "select", function() {
                var e = u(this),
                    t = e.closest("tw-expression, tw-hook").data("dropdownEvent");
                t && t(e)
            })
        }), n.addCommand("dropdown", function(e) {
            var t;
            return "" === (arguments.length <= 1 ? void 0 : arguments[1]) || "" === ((t = (arguments.length <= 1 ? 0 : arguments.length - 1) - 1 + 1) < 1 || arguments.length <= t ? void 0 : arguments[t]) ? b.create("datatype", "The first or last strings in a (dropdown:) can't be empty.", "Because empty strings create separators within (dropdown:)s, having them at the start or end doesn't make sense.") : (arguments.length <= 1 ? 0 : arguments.length - 1) <= 1 ? b.create("datatype", "I need two or more strings to create a (dropdown:) menu, not just " + (arguments.length <= 1 ? 0 : arguments.length - 1) + ".") : void 0
        }, function(e, t, r) {
            for (var n = arguments.length, a = new Array(3 < n ? n - 3 : 0), o = 3; o < n; o++) a[o - 3] = arguments[o];
            var i = 0,
                s = ("two way" === r.bind && (e.attr.push({
                    "data-2bind": !0
                }), -1 < (c = a.indexOf(r.varRef.get()))) && (i = c), Math.max.apply(Math, _toConsumableArray(a.map(function(e) {
                    return _toConsumableArray(e).length
                })))),
                c = "<select>" + a.map(function(e, t) {
                    return "<option".concat(t === i ? " selected" : "").concat("" === e ? " disabled" : "", ">").concat(y.escape(e || "\u2500".repeat(s)), "</option>")
                }).join("\n") + "</select>",
                l = (e.data.dropdownEvent = function(e) {
                    var t = e.val(),
                        n = r.set(t);
                    b.containsError(n) && e.replaceWith(n.render(t))
                }, e.data.twoWayBindEvent = function(e, t, n) {
                    r.varRef.matches(t, n) && (t = r.varRef.get(), -1 < (n = a.indexOf(t))) && n !== i && (e.find("select").val(t), i = n)
                }, e.styles.push({
                    "background-color": function() {
                        return y.parentColours(u(this)).backgroundColour
                    }
                }), r.set(a[i]));
            return b.containsError(l) ? l : C(e, {
                source: c,
                append: "replace"
            })
        }, [v, String, T(String)]), y.onStartup(function() {
            return y.storyElement.on("input.checkbox-macro", "input[type=checkbox]", function() {
                var e = u(this),
                    t = e.closest("tw-expression").data("checkboxEvent");
                t && t(e)
            })
        });

        function I(e) {
            return ["I can't use a dialog macro in " + e + ".", "Please rewrite this without putting such macros here."]
        }
        var V = 1;
        n.addCommand("checkbox", function() {}, function(e, t, r, n) {
            var a = !1,
                o = "checkbox-" + ++V,
                i = ("two way" === r.bind && (e.attr.push({
                    "data-2bind": !0
                }), "boolean" == typeof(i = r.varRef.get()) && (a = i), e.data.twoWayBindEvent = function(e, t, n) {
                    r.varRef.matches(t, n) && "boolean" == typeof(t = r.varRef.get()) && e.children("input[type=checkbox]").prop("checked", t)
                }), e.data.checkboxEvent = function(e) {
                    var t = e.is(":checked"),
                        t = r.set(t);
                    b.containsError(t) && e.replaceWith(t.render(""))
                }, r.set(a));
            return b.containsError(i) ? i : C(e, {
                source: '<input id="'.concat(o, '" type="checkbox" ').concat(a ? "checked" : "", '><label for="').concat(o, '">').concat(n, "</label>"),
                append: "replace"
            })
        }, [v, String]), y.onStartup(function() {
            return u(document).on("fullscreenchange", function() {
                u("input[type=checkbox][id^=fullscreen]", y.storyElement).each(function(e, t) {
                    (u(t).closest("tw-expression").data("fullscreenEvent") || Object)(t)
                })
            })
        }), n.addCommand("checkbox-fullscreen", function() {}, function(e, t, n) {
            var r = "fullscreenCheckbox-" + ++V;
            return e.data.fullscreenEvent = function(e) {
                return u(e).prop("checked", !(!document.fullscreenElement && !document.msFullscreenElement))
            }, e.data.checkboxEvent = function() {
                return a.toggleFullscreen()
            }, C(e, {
                source: '<input id="'.concat(r, '" type="checkbox" ').concat(document.fullscreenEnabled || document.msFullscreenEnabled ? " " : "disabled ").concat(document.fullscreenElement || document.msFullscreenElement ? "checked" : "", '><label for="').concat(r, '">').concat(n, "</label>"),
                append: "replace"
            })
        }, [String]), y.onStartup(function() {
            return y.storyElement.on("input.input-box-macro", "textarea, input[type=text]", function() {
                var e = u(this),
                    t = e.closest("tw-expression").data("inputBoxEvent");
                t && t(e)
            })
        }), ["input", "force-input", "input-box", "force-input-box"].forEach(function(g) {
            return n.addCommand(g, function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var r = g.endsWith("box"),
                    a = v.isPrototypeOf(t[0]),
                    o = "string" == typeof t[+a],
                    r = r && "number" == typeof t[o + a],
                    i = o ? t[+a] : t[a + r],
                    s = 0 < S(i).size,
                    o = s ? t[a + r + o] : i;
                return g.startsWith("force") && "string" != typeof o ? b.create("datatype", "The (".concat(g, ":) macro requires a string of text to forcibly input.")) : t.length > a + r + s + ("string" == typeof o) ? b.create("datatype", "An incorrect combination of values was given to this (".concat(g, ":) macro.")) : void 0
            }, function(e, t) {
                for (var n = arguments.length, r = new Array(2 < n ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
                var o = g.startsWith("force"),
                    i = g.endsWith("box"),
                    s = v.isPrototypeOf(r[0]),
                    c = "string" == typeof r[+s],
                    l = i && "number" == typeof r[c + s],
                    u = s && r[0],
                    p = l ? r[1 + s] : 3,
                    d = c ? S(r[+s]) : {},
                    f = d.marginLeft,
                    d = d.size,
                    h = (d ? r[s + l + c] : c && r[+s]) || "",
                    l = o ? "" : h,
                    c = !1;
                if ("two way" === u.bind) {
                    e.attr.push({
                        "data-2bind": !0
                    });
                    s = u.varRef.get();
                    if ("string" == typeof s) {
                        l = o ? h.slice(0, s.length) : s, s = u.set(l), c = !0;
                        if (b.containsError(s)) return s
                    }
                    e.data.twoWayBindEvent = function(e, t, n) {
                        u.varRef.matches(t, n) && "string" == typeof(t = u.varRef.get()) && e.find(i ? "textarea" : "input").val(o ? h.slice(0, t.length) : t)
                    }
                }
                if (u && !c) {
                    s = u.set(o ? "" : h);
                    if (b.containsError(s)) return s
                }!o && u && (e.data.inputBoxEvent = function(e) {
                    var t = e.val(),
                        t = u.set(t);
                    b.containsError(t) && e.replaceWith(t.render(""))
                });
                var m, c = "<".concat(i ? "textarea" : "input type=text", ' style="width:100%" ').concat(i ? "rows=".concat(p, ">") : 'value="').concat(y.escape(l)).concat(i ? "</textarea>" : '">');
                return o && (m = Array.from(h), e.data.inputBoxEvent = function(e) {
                    var t = e.val().length,
                        t = m.slice(0, t).join("");
                    return e.val(t), u && (t = u.set(t), b.containsError(t)) && e.replaceWith(t.render("")), !0
                }), e.styles.push({
                    display: "block",
                    "margin-left": d ? f + "%" : void 0,
                    width: d ? d + "%" : "100%",
                    "border-style": function() {
                        return this.style.borderStyle || "solid"
                    }
                }), C(e, {
                    source: c,
                    append: "replace"
                })
            }, g.endsWith("box") ? [_(v, String), x(_(A, String)), x(_(A, String)), x(String)] : [x(_(v, String)), x(String), x(String)])
        }), ["show", "rerun"].forEach(function(s) {
            return n.addCommand(s, function() {
                for (var r, e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t.some(function e(t) {
                    var n = t.selector,
                        t = t.next;
                    return "name" === n.type && "page" === n.data ? (r = b.create("macrocall", "You can't (hide:) the ?page. Sorry."), !0) : !!("base" === n.type && e(n.data) || t && e(t)) || void 0
                }), r
            }, function(o, i) {
                for (var e = arguments.length, t = new Array(2 < e ? e - 2 : 0), n = 2; n < e; n++) t[n - 2] = arguments[n];
                return t.forEach(function(e) {
                    return e.forEach(i, function(e) {
                        var t, n, r, a = e.data("hidden");
                        void 0 !== a != ("rerun" === s) && (e.removeData("hidden"), a instanceof u ? e.empty().append(a) : (a = e.data("tempVariables"), n = (t = "tw-passage" === e.tag()) ? l.getTree(c.passage) : e.data("originalSource") || "", t && (r = e.find("tw-sidebar").detach()), i.renderInto("", null, _objectSpread(_objectSpread({}, o), {}, {
                            append: "replace",
                            source: n,
                            target: e
                        }), a && Object.create(a)), r && e.prepend(r)))
                    })
                }), o
            }, [T(o)])
        });
        n.addCommand("hide", function() {
            for (var r, e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return t.some(function e(t) {
                var n = t.selector,
                    t = t.next;
                return "name" === n.type && "page" === n.data ? (r = b.create("macrocall", "You can't (hide:) the ?page. Sorry."), !0) : !!("base" === n.type && e(n.data) || t && e(t)) || void 0
            }), r
        }, function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            for (var a = 0, o = n; a < o.length; a++) o[a].forEach(e, function(e) {
                e.data("hidden") || e.data("hidden", e.contents().detach())
            })
        }, [T(o)], !1)("scroll", P, function(h, e, m) {
            var g = "number" == typeof m && m;
            requestAnimationFrame(function() {
                e.forEach(h, function(e) {
                    if (!1 !== g) {
                        var t, n;
                        null != (t = (n = (e = e[0] === y.storyElement[0] && e[0].scrollHeight === e[0].clientHeight ? [document.body] : e)[0]).scrollTo) && t.call(n, 0, (e[0].scrollHeight - e[0].clientHeight) * g)
                    } else {
                        var r, a = _createForOfIteratorHelper(m.hooks(h).get());
                        try {
                            for (a.s(); !(r = a.n()).done;) {
                                var o = r.value;
                                if (e.find(o)) {
                                    for (var i = [], s = e[0];
                                        (s = s.parentNode) && s !== document.body;) i.push([s, s.scrollLeft, s.scrollTop]);
                                    o.scrollIntoView();
                                    for (var c = 0, l = i; c < l.length; c++) {
                                        var u = _slicedToArray(l[c], 3),
                                            p = u[0],
                                            d = u[1],
                                            f = u[2];
                                        p.scrollLeft = d, p.scrollTop = f
                                    }
                                    break
                                }
                            }
                        } catch (e) {
                            a.e(e)
                        } finally {
                            a.f()
                        }
                    }
                })
            })
        }, [o, _(L, o)], !1)("stop", P, P, [], !1)("load-game", P, function(e, t) {
            var n, r;
            return e.loadedGame ? b.create("infinite", "I can't use (load-game:) immediately after loading a game.") : (n = localStorage.getItem(R("Saved Game") + t)) ? (n = c.deserialise(e, n)) instanceof Error ? {
                blocked: r = k({
                    message: "Sorry to interrupt... The story tried to load saved data, but there was a problem.\n" + n.message + "\n\nThat data might have been saved from a different version of this story. Should I delete it?\n(Type 'delete' and choose Yes to delete it.)\n\nEither way, the story will now continue without loading the data.",
                    defaultValue: "",
                    buttons: [{
                        name: "Yes",
                        confirm: !0,
                        callback: function() {
                            "delete" === r.find("input").last().val() && localStorage.removeItem(R("Saved Game") + t), e.unblock("")
                        }
                    }, {
                        name: "No",
                        cancel: !0,
                        callback: function() {
                            return e.unblock()
                        }
                    }]
                })
            } : void requestAnimationFrame(a.showPassage.bind(a, c.passage, {
                loadedGame: !0
            })) : b.create("saving", "I can't find a save slot named '" + t + "'!")
        }, [String], !1)("forget-undos", P, function(e, t) {
            c.futureLength || c.forgetUndos(t)
        }, [parseInt], !1)("forget-visits", P, function(e, t) {
            c.forgetVisits(t)
        }, [parseInt], !1)("mock-visits", function() {
            if (!y.options.debug) return b.create("debugonly", "(mock-visits:) cannot be used outside of debug mode.");
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var r = t.find(function(e) {
                return !l.hasValid(e)
            });
            return r ? b.create("datatype", "I can't mock-visit '" + r + "' because no passage with that name exists.") : void 0
        }, function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            c.mockVisits = g(n)
        }, [T(String)], !1)("mock-turns", function() {
            if (!y.options.debug) return b.create("debugonly", "(mock-turns:) cannot be used outside of debug mode.")
        }, function(e, t) {
            c.mockTurns = t
        }, [H], !1)("seed", P, function(e, t) {
            c.setSeed(t)
        }, [String], !1)(["dialog", "alert"], function(e, t) {
            for (var n = arguments.length, r = new Array(2 < n ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
            if (v.isPrototypeOf(e)) {
                if ("two way" === e.bind) return b.create("datatype", "(dialog:) shouldn't be given two-way bound variables.", 'Change the "2bind" keyword to just "bind".');
                if (void 0 === t) return b.create("datatype", "(dialog:) needs a message string or codehook to display.")
            } else void 0 !== t && r.unshift(t);
            e = r.findIndex(function(e) {
                return "" === e
            });
            if (-1 < e) return b.create("datatype", "(dialog:)'s ".concat(y.nth(e + 1), " link text shouldn't be an empty string."))
        }, function(e, n, r, t) {
            for (var a = arguments.length, o = new Array(4 < a ? a - 4 : 0), i = 4; i < a; i++) o[i - 4] = arguments[i];
            return v.isPrototypeOf(r) || (void 0 !== t && o.unshift(t), t = r, r = void 0), o.length || (o = ["OK"]), {
                blocked: k({
                    section: n,
                    message: t,
                    cd: e,
                    buttons: o.map(function(t) {
                        return {
                            name: t,
                            callback: function() {
                                var e;
                                n.unblock((null == (e = r) ? void 0 : e.set(t)) || "")
                            }
                        }
                    })
                })
            }
        }, [_(v, String, t), x(_(t, String)), O(String)])("open-url", P, function(e, t) {
            window.open(t, "")
        }, [String], !1)(["restart", "reload"], P, function() {
            if (!y.options.ignoreGotos) {
                if (c.turns <= 1) return b.create("infinite", "I mustn't (restart:) the story in the starting passage.");
                c.hasSessionStorage && sessionStorage.removeItem("Saved Session"), window.location.reload()
            }
        }, [], !1)("goto-url", P, function(e, t) {
            window.location.assign(t)
        }, [String], !1)("ignore", P, P, [O(F)])("assert-exists", function(e) {
            if ("" === e) return b.create("datatype", "(assert-exists:) mustn't be given an empty string.")
        }, function(e, t, n) {
            var r = 0;
            return ("string" == typeof n ? o.create({
                type: "string",
                data: n
            }) : n).forEach(t, function() {
                ++r
            }), r ? e : b.create("assertion", "I didn't see any ".concat("string" == typeof n ? "text occurrences of" : "hooks matching", " ").concat(w(n), " in this passage."))
        }, [_(o, String)]), n.add("assert", "Instant", function(e, t) {
            return t ? {
                TwineScript_TypeID: "instant",
                TwineScript_TypeName: "an (assert:) operation",
                TwineScript_ObjectName: "an (assert:) operation",
                TwineScript_Unstorable: !0,
                TwineScript_Print: function() {
                    return ""
                }
            } : C(b.create("assertion", "An assertion failed: "), {
                appendTitleText: !0
            })
        }, [Boolean])("save-game", "Boolean", function(e, t, n) {
            if (n = n || "", !c.hasStorage) return !1;
            var r = c.serialise(!1).pastAndPresent;
            if (b.containsError(r)) return r;
            if (!1 === r) return !1;
            try {
                return localStorage.setItem(R("Saved Game") + t, r), localStorage.setItem(R("Saved Game Filename") + t, n), !0
            } catch (e) {
                return !1
            }
        }, [String, x(String)])("prompt", "String", function(e, t, n, r, a) {
            var o, i;
            return null != (o = e.stackTop) && o.evaluateOnly ? b.create.apply(b, ["macrocall"].concat(_toConsumableArray(I(e.stackTop.evaluateOnly)))) : "" === a ? b.create("datatype", "The text for (prompt:)'s confirm link can't be blank.") : (i = k({
                section: e,
                message: t,
                defaultValue: n,
                buttons: [{
                    name: a || "OK",
                    confirm: !0,
                    callback: function() {
                        return e.unblock(i.find("input").last().val())
                    }
                }].concat("" === r ? [] : {
                    name: r || "Cancel",
                    cancel: !0,
                    callback: function() {
                        return e.unblock(n)
                    }
                })
            }), e.stackTop.blocked = i, 0)
        }, [_(String, t), String, x(String), x(String)])("confirm", "Boolean", function(e, t, n, r) {
            var a;
            return null != (a = e.stackTop) && a.evaluateOnly ? b.create.apply(b, ["macrocall"].concat(_toConsumableArray(I(e.stackTop.evaluateOnly)))) : "" === r ? b.create("datatype", "The text for (confirm:)'s confirm link can't be blank.") : (a = k({
                section: e,
                message: t,
                defaultValue: !1,
                buttons: [{
                    name: r || "OK",
                    confirm: !0,
                    callback: function() {
                        return e.unblock(!0)
                    }
                }].concat("" === n ? [] : {
                    name: n || "Cancel",
                    cancel: !0,
                    callback: function() {
                        return e.unblock(!1)
                    }
                })
            }), e.stackTop.blocked = a, 0)
        }, [_(String, t), x(String), x(String)])("page-url", "String", function() {
            return window.location.href
        }, [])
    }), define("macrolib/custommacros", ["utils", "macros", "state", "utils/operationutils", "datatypes/changercommand", "datatypes/custommacro", "datatypes/codehook", "datatypes/typedvar", "internaltypes/twineerror"], function(c, l, u, e, t, p, n, d, f) {
        function s(e, t, n) {
            if (!t.some(function(e) {
                    if ("function" == typeof e.output) return e.output(n), !0
                })) return f.create("macrocall", "(" + e + ":) should only be used inside a code hook passed to (macro:).")
        }
        var h = e.objectName,
            m = e.toSource,
            e = l.add,
            r = l.addChanger,
            a = l.addCommand,
            o = l.TypeSignature,
            i = o.rest,
            g = o.either,
            y = o.Any,
            b = o.Everything,
            o = o.zeroOrMore;
        e("macro", "CustomMacro", function(e) {
            for (var t, n = [], r = arguments.length, a = new Array(1 < r ? r - 1 : 0), o = 1; o < r; o++) a[o - 1] = arguments[o];
            for (t = 0; t < a.length; t += 1) {
                var i = t === a.length - 1;
                if (d.isPrototypeOf(a[t]) === i) return f.create("datatype", "The " + (i ? "" : c.nth(a.length - t + 1) + "-") + "last value given to (macro:) should be a " + (i ? "code hook" : "datatyped variable") + ", not " + h(a[t]));
                if (!i) {
                    i = "A custom macro";
                    if (a[t].varRef.object === u.variables) return f.create("datatype", i + "'s typed variables must be temp variables (with a '_'), not global variables (with a '$').", "Write them with a _ symbol at the start instead of a $ symbol.");
                    if (1 < a[t].varRef.propertyChain.length) return f.create("datatype", i + "'s typed variables can't be properties inside a data structure.");
                    if (a[t].datatype.rest && t !== a.length - 2) return f.create("datatype", i + " can only have one spread variable, and it must be its last variable.");
                    var s = a[t].varRef.propertyChain[0];
                    if (n.includes(s)) return f.create("datatype", i + "'s typed variables can't both be named '" + s + "'.");
                    n.push(s)
                }
            }
            return p.create(a.slice(0, -1), a[a.length - 1])
        }, [i(g(d, n))]);
        a(["output-data", "out-data"], function() {}, function(e, t) {
            e = e.stack;
            return s("output-data", e, t) || {
                blocked: !0
            }
        }, [y], !1), r(["output", "out"], function() {
            return Object.assign(t.create("output", []))
        }, function(e, t) {
            if (e.section) {
                var n, r = e.section,
                    a = r.stack,
                    o = r.stackTop,
                    i = {};
                for (n in o.tempVariables) n.startsWith("TwineScript_") || (i[n] = o.tempVariables[n]);
                s("output", a, {
                    changer: t,
                    variables: i,
                    hook: Array.isArray(e.source) ? "[" + e.source.map(function(e) {
                        return e.text
                    }).join("") + "]" : e.source
                }), e.output = !0, o.blocked = !0
            }
        }, []), a("error", function(e) {
            if (!e) return f.create("datatype", "This (error:) macro was given an empty string.")
        }, function(e, t) {
            e = e.stack;
            return s("error", e, f.create("user", t)) || {
                blocked: !0
            }
        }, [String], !1), e("partial", "CustomMacro", function(e, a) {
            for (var t = arguments.length, o = new Array(2 < t ? t - 2 : 0), n = 2; n < t; n++) o[n - 2] = arguments[n];
            var r = "string" != typeof a && a,
                i = !r && a;
            if (!r) {
                if (!l.has(i)) return f.create("macrocall", 'The macro name given to (partial:), "'.concat(a, "\", isn't the name of a built-in macro."));
                if ("Metadata" === l.get(i).returnType) return f.create("macrocall", "(partial:) can't be used with metadata macros such as (".concat(a, ":)"))
            }
            var s = "(partial:".concat(m(a), ",").concat(o.map(function(e) {
                    return m(e)
                }), ")"),
                c = p.createFromFn(function(e) {
                    for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    e = l["string" == typeof a ? "run" : "runCustom"](a, e, o.concat(n));
                    return f.containsError(e) && (e.message = "An error occurred while running the (partial:)-created macro, ".concat(c.TwineScript_ObjectName, ":\n") + e.message), e
                }, "a (partial:) custom macro of ".concat(i || r.TwineScript_KnownName ? "(".concat(i || r.TwineScript_KnownName, ":").concat(o.map(function(e) {
                    return m(e)
                }), ")") : "another unnamed custom macro"), function() {
                    return s
                }, (i ? l.get(i) : r).typeSignature.filter(function(e, t) {
                    return t >= o.length || "rest" === e.pattern || "zero or more" === e.pattern
                }));
            return c
        }, [g(String, p), o(b)])
    }), define("macrolib/datastructures", ["utils", "utils/naturalsort", "macros", "utils/operationutils", "state", "engine", "passages", "datatypes/lambda", "datatypes/typedvar", "internaltypes/twineerror"], function(e, i, t, n, s, r, a, c, o, l) {
        var u = e.permutations,
            p = e.options,
            d = n.objectName,
            f = n.subset,
            h = n.collectionType,
            m = n.isValidDatamapName,
            g = n.is,
            y = n.unique,
            b = n.clone,
            v = n.range,
            e = t.TypeSignature,
            n = e.optional,
            w = e.rest,
            k = e.either,
            S = e.zeroOrMore,
            T = e.Any,
            e = e.nonNegativeInteger,
            _ = i("en");
        t.add(["a", "array"], "Array", function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return n
        }, S(k(o, T)))("range", "Array", function(e, t, n) {
            return v(t, n)
        }, [parseInt, parseInt])("subarray", "Array", function(e, t, n, r) {
            return f(t, n, r)
        }, [Array, parseInt, parseInt])("reversed", "Array", function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return n.reverse().map(b)
        }, S(T))("shuffled", "Array", function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return s.shuffled.apply(s, n).map(b)
        }, [S(T)])("sorted", "Array", function(e) {
            for (var t, n = arguments.length, r = new Array(1 < n ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
            if (!c.isPrototypeOf(r[0])) return (t = r.filter(function(e) {
                return "string" != typeof e && "number" != typeof e
            })) && t.length ? 1 === t.length && Array.isArray(t[0]) ? l.create("macrocall", "Please give multiple numbers or strings to (sorted:), not a single array.", "You can use the spread ... syntax to spread out the array's values into (sorted:).") : l.create("datatype", "If (sorted:) isn't given a 'via' lambda, it must be given only numbers and strings, not ".concat(d(t[0]), ".")) : r.sort(_);
            var o = r.shift();
            if ("making" in o || "where" in o || "when" in o || !("via" in o)) return l.create("datatype", "The optional lambda given to (sorted:) must be a 'via' lambda, not ".concat(d(o), "."));
            for (var i = 0; i < r.length; i += 1) {
                var s = o.apply(e, {
                    loop: r[i],
                    pos: i + 1
                });
                if (l.containsError(s)) return s;
                if ("string" != typeof s && "number" != typeof s) return l.create("datatype", 'The "via" lambda given to (sorted:) couldn\'t convert '.concat(d(r[i]), " into a string or number."));
                r[i] = [r[i], s]
            }
            return r.sort(function(e, t) {
                return _(e[1], t[1])
            }).map(function(e) {
                return e[0]
            })
        }, [S(T)])("rotated", "Array", function(e, t) {
            if (0 === t) return l.create("macrocall", "I can't rotate these values by 0 positions.");
            for (var n = arguments.length, r = new Array(2 < n ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
            t = -1 * (t = Math.abs(t) % r.length * Math.sign(t));
            return r.slice(t).concat(r.slice(0, t)).map(b)
        }, [parseInt, S(T)])("rotated-to", "Array", function(e, t) {
            for (var n = arguments.length, r = new Array(2 < n ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
            t = t.filter(e, r);
            return l.containsError(t) ? t : t.length ? (e = r.indexOf(t[0]), r.slice(e).concat(r.slice(0, e)).map(b)) : l.create("macrocall", "None of these " + r.length + " values matched the lambda, so I can't rotate them.")
        }, [c.TypeSignature("where"), w(T)])("repeated", "Array", function(e, t) {
            for (var n = [], r = arguments.length, a = new Array(2 < r ? r - 2 : 0), o = 2; o < r; o++) a[o - 2] = arguments[o];
            if (!a.length) return n;
            for (; 0 < t--;) n.push.apply(n, a);
            return n.map(b)
        }, [e, w(T)])("interlaced", "Array", function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            for (var a = Math.min.apply(Math, _toConsumableArray(n.map(function(e) {
                    return e.length
                }))), o = [], i = 0; i < a; i += 1)
                for (var s = 0; s < n.length; s += 1) o.push(b(n[s][i]));
            return o
        }, [Array, w(Array)])("permutations", "Array", function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return n.length ? u.apply(void 0, n) : []
        }, [S(T)])("unique", "Array", function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return n.filter(y)
        }, [S(T)])("altered", "Array", function(n, r) {
            for (var e = arguments.length, t = new Array(2 < e ? e - 2 : 0), a = 2; a < e; a++) t[a - 2] = arguments[a];
            return t.map(function(e, t) {
                t = r.apply(n, {
                    loop: e,
                    pos: t + 1
                });
                return null === t ? e : t
            })
        }, [k(c.TypeSignature("via"), c.TypeSignature("where", "via")), S(T)])("find", "Array", function(e, t) {
            for (var n = arguments.length, r = new Array(2 < n ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
            return t.filter(e, r)
        }, [c.TypeSignature("where"), S(T)])(["all-pass", "pass"], "Boolean", function(e, t) {
            for (var n = arguments.length, r = new Array(2 < n ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
            t = t.filter(e, r);
            return l.containsError(t) || t.length === r.length
        }, [c.TypeSignature("where"), S(T)])("some-pass", "Boolean", function(e, t) {
            for (var n = arguments.length, r = new Array(2 < n ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
            t = t.filter(e, r);
            return l.containsError(t) || 0 < t.length
        }, [c.TypeSignature("where"), S(T)])("none-pass", "Boolean", function(e, t) {
            for (var n = arguments.length, r = new Array(2 < n ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
            t = t.filter(e, r);
            return l.containsError(t) || 0 === t.length
        }, [c.TypeSignature("where"), S(T)])("folded", "Any", function(r, a) {
            for (var e = arguments.length, t = new Array(2 < e ? e - 2 : 0), n = 2; n < e; n++) t[n - 2] = arguments[n];
            return "where" in a && (t = [t[0]].concat(_toConsumableArray(a.filter(r, t.slice(1))))), l.containsError(t) || t.reduce(function(e, t, n) {
                return a.apply(r, {
                    making: e,
                    loop: t,
                    pos: n + 1
                })
            })
        }, [k(c.TypeSignature("where", "via", "making"), c.TypeSignature("via", "making")), w(T)])(["dm-names", "datamap-names", "datanames"], "Array", function(e, t) {
            return Array.from(t.keys()).sort(i("en"))
        }, [Map])(["dm-values", "datamap-values", "datavalues"], "Array", function(e, t) {
            return Array.from(t.entries()).sort(i("en", function(e) {
                return String(e[0])
            })).map(function(e) {
                return b(e[1])
            })
        }, [Map])(["dm-entries", "datamap-entries", "dataentries"], "Array", function(e, t) {
            return Array.from(t.entries()).sort(function(e, t) {
                return [e[0], t[0]].sort(i("en"))[0] === e[0] ? -1 : 1
            }).map(function(e) {
                return new Map([
                    ["name", e[0]],
                    ["value", b(e[1])]
                ])
            })
        }, [Map])(["dm-altered", "datamap-altered"], "Datamap", function(a, o, e) {
            return Array.from(e.entries()).sort(function(e, t) {
                return [e[0], t[0]].sort(i("en"))[0] === e[0] ? -1 : 1
            }).reduce(function(e, t, n) {
                if (!l.containsError(e)) {
                    var r = new Map([
                            ["name", t[0]],
                            ["value", b(t[1])]
                        ]),
                        r = o.apply(a, {
                            loop: r,
                            pos: n + 1
                        });
                    if (l.containsError(r)) return r;
                    e.set(t[0], null === r ? t[1] : r)
                }
                return e
            }, new Map)
        }, [k(c.TypeSignature("via"), c.TypeSignature("where", "via")), Map])("history", "Array", function(e, t) {
            var n = s.history();
            return t ? (t = t.filter(e, n.map(function(e) {
                return a.get(e)
            })), l.containsError(t) ? t : t.map(function(e) {
                return e.get("name")
            })) : n
        }, [n(c.TypeSignature("where"))])("visited", "Boolean", function(e, t) {
            var n;
            return "string" == typeof t ? a.has(t) ? 0 < s.passageNameVisited(t) || s.passage === t : l.create("macrocall", "There's no passage named '" + t + "' in this story.") : (n = s.history(), n = t.filter(e, n.concat(s.passage).map(function(e) {
                return a.get(e)
            })), l.containsError(n) ? n : 0 < n.length)
        }, [k(String, c.TypeSignature("where"))])("passage", "Datamap", function(e, t) {
            return b(a.get(t || s.passage)) || l.create("macrocall", "There's no passage named '" + t + "' in this story.")
        }, [n(String)])("passages", "Array", function(e, t) {
            var n = i("en"),
                r = _toConsumableArray(a.values()).map(function(e) {
                    return b(e)
                }),
                t = t ? t.filter(e, r) : r,
                e = l.containsError(t);
            return e || t.sort(function(e, t) {
                return n(e.get("name"), t.get("name"))
            })
        }, [n(c.TypeSignature("where"))])("open-storylets", "Array", function(e, t) {
            return e.stackTop.evaluateOnly ? l.create("macrocall", "(open-storylets:) can't be used in " + e.stackTop.evaluateOnly + ".") : (e = a.getStorylets(e, t), l.containsError(e) || e.map(b))
        }, [n(c.TypeSignature("where"))])("savedgames", "Datamap", function() {
            function e(e) {
                return "(" + e + " " + p.ifid + ") "
            }
            var t, n, r = 0,
                a = new Map;
            do {
                if (!s.hasStorage) break;
                t = localStorage.key(r), r += 1;
                var o = e("Saved Game")
            } while (null != (n = t) && n.startsWith(o) && (t = t.slice(o.length), a.set(t, localStorage.getItem(e("Saved Game Filename") + t))), t);
            return a
        }, [])(["datamap", "dm"], "Datamap", function(e) {
            for (var r, a = new Map, t = arguments.length, n = new Array(1 < t ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
            var i = n.reduce(function(e, t) {
                var n;
                if (!l.containsError(e))
                    if (void 0 === r) r = t;
                    else {
                        if (n = l.containsError(m(a, r))) return n;
                        if (a.has(r)) return l.create("macrocall", "You used the same data name (" + d(r) + ") twice in the same (datamap:) call.");
                        a.set(r, b(t)), r = void 0
                    } return e
            }, !0);
            return l.containsError(i) ? i : void 0 !== r ? l.create("macrocall", "This datamap has a data name without a value.") : a
        }, S(k(o, T)))(["dataset", "ds"], "Dataset", function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return new Set(n.filter(y).map(b))
        }, S(T))("count", "Number", function t(n, r) {
            for (var e, a = arguments.length, o = new Array(2 < a ? a - 2 : 0), i = 2; i < a; i++) o[i - 2] = arguments[i];
            if (1 < o.length) return e = o.map(function(e) {
                return t(n, r, e)
            }), l.containsError(e) || e.reduce(function(e, t) {
                return e + t
            }, 0);
            var s = o[0];
            switch (h(r)) {
                case "dataset":
                case "datamap":
                    return l.create("macrocall", "(count:) shouldn't be given a datamap or dataset.", "You should use the 'contains' operator instead. For instance, write: $variable contains 'value'.");
                case "string":
                    return "string" != typeof s ? l.create("macrocall", d(r) + " can't contain  " + d(s) + " because it isn't also a string.") : s ? r.split(s).length - 1 : 0;
                case "array":
                    return r.reduce(function(e, t) {
                        return e + g(t, s)
                    }, 0);
                default:
                    return l.create("macrocall", d(r) + " can't contain values, let alone " + d(s) + ".")
            }
        }, [T, w(T)])
    }), define("macrolib/enchantments", ["jquery", "utils", "utils/operationutils", "engine", "state", "passages", "macros", "datatypes/hookset", "datatypes/codehook", "datatypes/changercommand", "datatypes/lambda", "internaltypes/changedescriptor", "internaltypes/enchantment", "internaltypes/twineerror"], function(c, r, e, l, s, n, u, p, a, d, t, i, f, h) {
        var m = e.is,
            e = u.TypeSignature,
            g = e.either,
            y = e.rest,
            o = e.optional,
            b = Object.assign;

        function v(e, t) {
            if (d.isPrototypeOf(t) && !t.canEnchant) return h.create("datatype", "The changer given to (".concat(e, ":) can't include a revision, enchantment, or interaction changer like (replace:), (click:), or (link:)."))
        } ["enchant", "change"].forEach(function(o) {
            u.addCommand(o, function(e, t) {
                t = v(o, t);
                if (t) return t
            }, function(t, n, e) {
                n = p.from(n);
                var r, a = [];
                return d.isPrototypeOf(e) && (r = i.create({
                    section: t
                }), e.run(r), 0 < (r.innerEnchantments || []).length) && (r = r.innerEnchantments.map(function(e) {
                    return e(n)
                }), a.push.apply(a, _toConsumableArray(r))), a.push(f.create((_defineProperty(r = {
                    scope: n
                }, d.isPrototypeOf(e) ? "changer" : "lambda", e), _defineProperty(r, "section", t), r))), a.forEach(function(e) {
                    "enchant" === o ? (t.addEnchantment(e), t.updateEnchantments()) : e.enchantScope()
                }), ""
            }, [g(p, String), g(d, t.TypeSignature("via"))], !1)
        }), u.addChanger("enchant-in", function(e, t, n) {
            var r = v("enchant-in", n);
            return r || d.create("enchant-in", [t, n])
        }, function(t, n, r) {
            return t.innerEnchantments = (t.innerEnchantments || []).concat(function(e) {
                return f.create((_defineProperty(e = {
                    scope: p.from(n),
                    localHook: e
                }, d.isPrototypeOf(r) ? "changer" : "lambda", r), _defineProperty(e, "section", t.section), e))
            }), t
        }, [g(p, String), g(d, t.TypeSignature("via"))]), [
            ["link-style", p.create({
                type: "name",
                data: "link"
            })],
            ["line-style", p.create({
                type: "base",
                data: p.create({
                    type: "name",
                    data: "page"
                })
            }, "lines", void 0)],
            ["char-style", p.create({
                type: "base",
                data: p.create({
                    type: "name",
                    data: "page"
                })
            }, "chars", void 0)]
        ].forEach(function(e) {
            var e = _slicedToArray(e, 2),
                r = e[0],
                a = e[1];
            u.addChanger(r, function(e, t) {
                var n = v(r, t);
                return n || d.create(r, [t])
            }, function(t, n) {
                return t.innerEnchantments = (t.innerEnchantments || []).concat(function(e) {
                    return f.create((_defineProperty(e = {
                        scope: a,
                        localHook: e
                    }, d.isPrototypeOf(n) ? "changer" : "lambda", n), _defineProperty(e, "section", t.section), e))
                }), t
            }, [g(d, t.TypeSignature("via"))])
        });
        e = ["replace", "append", "prepend"];

        function w(i, s) {
            return r.onStartup(function() {
                var e = i.classList.replace(/ /g, "."),
                    t = i.blockClassList ? i.blockClassList.replace(/ /g, ".") : "",
                    n = "." + e + (t ? ",." + t : "");
                r.storyElement.on(i.event.map(function(e) {
                    return e + ".enchantment"
                }).join(" "), n, function() {
                    var e, t = c(this);
                    r.options.debug && r.options.ignoreClickEvents && !t.is("tw-backdrop.eval-replay *, tw-backdrop.harlowe-crash *") || t.is("tw-open-button") || (e = (t = c(Array.from(t.parents(n).add(this)).sort(function(e, t) {
                        return 8 & e.compareDocumentPosition(t) ? 1 : -1
                    })[0])).data("enchantmentEvent")) && e(t)
                })
            }), [function(e, t, n) {
                    if (!t) return h.create("datatype", "A string given to this (" + s + ":) macro was empty.");
                    if (n) {
                        var r = v(s, n);
                        if (r) return r
                    }
                    return d.create(s, [p.from(t)].concat(n ? [n] : []))
                }, function(t, e, n) {
                    t.enabled = !1, t.transitionDeferred = !0, i.rerender && (t.newTargets = (t.newTargets || []).concat({
                        target: e,
                        append: i.rerender
                    }));
                    var r, a = null != (r = t.section) && r.stackTop ? t.section.stackTop.tempVariables : Object.create(null),
                        o = f.create(_defineProperty({
                            functions: [function(e) {
                                e.attr("class", e.children().is("tw-story, tw-sidebar, tw-passage") || ["block", "flex"].includes(e.children().css("display")) ? i.blockClassList : i.classList), e.attr({
                                    tabIndex: "0"
                                })
                            }],
                            data: {
                                enchantmentEvent: function() {
                                    var e;
                                    null != (e = t.section.stackTop) && e.blocked || (i.once && t.section.removeEnchantment(o), i.goto ? l.goToPassage(i.goto, {
                                        transition: i.transition
                                    }) : i.undo ? l.goBack({
                                        transition: i.transition
                                    }) : t.section.renderInto(t.source, null, _objectSpread(_objectSpread({}, t), {}, {
                                        append: i.once ? "append" : "replace",
                                        enabled: !0,
                                        transitionDeferred: !1
                                    }), a))
                                }
                            },
                            scope: e,
                            section: t.section,
                            name: s
                        }, d.isPrototypeOf(n) ? "changer" : "lambda", n));
                    return t.section && (t.section.addEnchantment(o), o.enchantScope()), t
                },
                [g(p, String), o(g(d, t.TypeSignature("via")))]
            ]
        }
        e.forEach(function(o) {
            u.addChanger(o, function(e) {
                for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return n.every(Boolean) ? d.create(o, n.map(p.from), null, !1) : h.create("datatype", "A string given to this (".concat(o, ":) macro was empty."))
            }, function(e) {
                var t;
                0 < c(e.target).parents().filter("tw-collapsed,[collapsing=true]").length || e.attr.some(function(e) {
                    return e.collapsing
                }) || (e.attr = [].concat(_toConsumableArray(e.attr), [{
                    collapsing: !1
                }])), e.newTargets = e.newTargets || [];
                for (var n = arguments.length, r = new Array(1 < n ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                return (t = e.newTargets).push.apply(t, _toConsumableArray(r.filter(function(n) {
                    return !e.newTargets.some(function(e) {
                        var t = e.target,
                            e = e.append;
                        return m(n, t) && o === e
                    })
                }).map(function(e) {
                    return {
                        target: e,
                        append: o,
                        before: !0
                    }
                }))), e
            }, y(g(p, String)))(o + "-with", function(e, t) {
                return d.create(o + "-with", [t], null, !1)
            }, function(e, t) {
                return a.isPrototypeOf(t) && (t = t.code), e.appendSource = (e.appendSource || []).concat({
                    source: t,
                    append: o
                }), e
            }, g(a, String))
        });
        var k = "ontouchstart" in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints,
            S = [{
                name: "click",
                enchantDesc: {
                    event: ["click"],
                    once: !0,
                    rerender: "",
                    classList: "link enchantment-link",
                    blockClassList: "enchantment-clickblock"
                }
            }, {
                name: "mouseover",
                enchantDesc: {
                    event: ["mouseenter", k ? "click" : ""].filter(Boolean),
                    once: !0,
                    rerender: "",
                    classList: "link enchantment-mouseover",
                    blockClassList: "enchantment-mouseoverblock"
                }
            }, {
                name: "mouseout",
                enchantDesc: {
                    event: ["mouseleave", k ? "click" : ""].filter(Boolean),
                    once: !0,
                    rerender: "",
                    classList: "link enchantment-mouseout",
                    blockClassList: "enchantment-mouseoutblock"
                }
            }, {
                name: "doubleclick",
                enchantDesc: {
                    event: ["dblclick"],
                    once: !0,
                    rerender: "",
                    classList: "link enchantment-dblclick",
                    blockClassList: "enchantment-dblclickblock"
                }
            }];
        S.forEach(function(e) {
            "doubleclick" !== e.name && (u.addChanger.apply(u, [e.name].concat(_toConsumableArray(w(e.enchantDesc, e.name)))), "click" === e.name) && u.addChanger.apply(u, [e.name + "-rerun"].concat(_toConsumableArray(w(_objectSpread(_objectSpread({}, e.enchantDesc), {}, {
                once: !1
            }), e.name + "-rerun"))))
        }), r.onStartup(function() {
            S.forEach(function(e) {
                var n = e.enchantDesc;
                n.blockClassList && r.storyElement.on(n.event.map(function(e) {
                    return e + ".enchantment"
                }).join(" "), function() {
                    var e, t = c(this);
                    r.options.debug && r.options.ignoreClickEvents && !t.is("tw-backdrop.eval-replay *, tw-backdrop.harlowe-crash *") || t.is("tw-open-button") || (e = (t = c(Array.from(t.parents("." + n.blockClassList.replace(/ /g, "."))).sort(function(e, t) {
                        return 8 & e.compareDocumentPosition(t) ? 1 : -1
                    })[0])).data("enchantmentEvent")) && e(t)
                })
            })
        }), e.forEach(function(n) {
            S.forEach(function(e) {
                var t;
                "doubleclick" !== e && (t = _objectSpread(_objectSpread({}, e.enchantDesc), {}, {
                    rerender: n
                }), e = e.name + "-" + n, u.addChanger.apply(u, [e].concat(_toConsumableArray(w(t, e)))))
            })
        }), S.forEach(function(i) {
            "doubleclick" !== i && ["goto", "undo"].forEach(function(a) {
                var o = i.name + "-" + a;
                u.addCommand(o, function(e, t) {
                    return !e || !t && "goto" === a ? h.create("datatype", "A string given to this (" + o + ":) macro was empty.") : "goto" !== a || n.hasValid(t) ? void 0 : h.create("macrocall", "I can't (" + o + ":) the passage '" + t + "' because it doesn't exist.")
                }, function(e, t, n, r) {
                    return "undo" === a && s.pastLength < 1 ? h.create("macrocall", "I can't (undo:) on the first turn.") : ((0, _slicedToArray(w(_objectSpread(_objectSpread({}, i.enchantDesc), {}, {
                        transition: e.data.passageT8n
                    }, "undo" === a ? {
                        undo: !0
                    } : {
                        goto: r
                    }), o), 2)[1])({
                        section: t
                    }, p.from(n)), b(e, {
                        source: ""
                    }))
                }, [g(p, String)].concat("undo" === a ? [] : String))
            })
        })
    }), define("macrolib/links", ["jquery", "macros", "utils", "state", "passages", "engine", "datatypes/changercommand", "internaltypes/changedescriptor", "datatypes/hookset", "datatypes/lambda", "internaltypes/twineerror"], function(i, e, c, l, u, p, a, d, t, f, h) {
        var n = e.TypeSignature,
            r = n.optional,
            o = n.rest,
            n = n.either,
            m = ["Links can't have empty strings for their displayed text.", "In the link syntax, a link's displayed text is inside the [[ and ]], and on the non-pointy side of the -> or <- arrow if it's there."],
            g = Object.assign;

        function s(e, t, n) {
            n = n || t;
            var r, a = u.hasValid(t) && t === n,
                e = e.evaluateTwineMarkup(c.unescape(n), "a link's passage name");
            return a ? t = (a = 0 < e.children().length ? "`".repeat((n.match(/`+/) || []).reduce(function(e, t) {
                return Math.max(e, t.length + 1)
            }, 1)) : "") + "\0".repeat(!!a) + t + "\0".repeat(!!a) + a : (e.findAndFilter("tw-error").length && (r = e.findAndFilter("tw-error").data("TwineError")), n = e.text()), {
                text: t,
                passage: n,
                error: r
            }
        }
        c.onStartup(function() {
            var e = "ontouchstart" in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints;

            function t(e) {
                var t = i(this),
                    n = t.closest("tw-expression"),
                    r = t.closest("tw-expression, tw-hook"),
                    a = r.data("clickEvent"),
                    r = r.data("section");
                if ((!c.options.debug || !c.options.ignoreClickEvents || t.is("tw-backdrop.eval-replay *, tw-backdrop.harlowe-crash *")) && !t.is("tw-open-button") && (null == r || !r.stackTop || !r.stackTop.blocked || r.stackTop.blocked instanceof i && r.stackTop.blocked.find(t).length)) {
                    if (a) return 0 < t.find("tw-error").length ? void 0 : (e.stopPropagation(), void a(t));
                    var r = n.data("linkPassageName"),
                        o = _objectSpread({}, n.data("passageT8n") || {});
                    n.find("tw-enchantment").each(function(e, t) {
                        Object.assign(o, i(t).data("passageT8n") || {})
                    }), r ? (e.stopPropagation(), p.goToPassage(r, {
                        transition: o
                    })) : t.is("[undo]") ? (e.stopPropagation(), p.goBack({
                        transition: o
                    })) : t.is("[fullscreen]") && (e.stopPropagation(), p.toggleFullscreen())
                }
            }
            c.storyElement.on("click.passage-link", "tw-link" + (e ? "" : ":not(.enchantment-mouseover):not(.enchantment-mouseout):not(.enchantment-dblclick)"), t).on("mouseover.passage-link", "tw-link.enchantment-mouseover, tw-expression.enchantment-mouseover > tw-link", t).on("mouseout.passage-link", "tw-link.enchantment-mouseout, tw-expression.enchantment-mouseout > tw-link", t).on("dblclick.passage-link", "tw-link.enchantment-dblclick, tw-expression.enchantment-dblclick > tw-link", t), i(document).on("fullscreenchange", function() {
                i("tw-link[fullscreen]", c.storyElement).each(function(e, t) {
                    (i(t).closest("tw-expression, tw-hook").data("fullscreenEvent") || Object)(t)
                })
            })
        }), [
            ["link", "link-replace"],
            ["link-reveal", "link-append"],
            ["link-repeat"],
            ["link-rerun"]
        ].forEach(function(s) {
            return e.addChanger(s, function(e, t, n) {
                return t ? n && !n.canEnchant ? h.create("datatype", "The changer given to (".concat(s[0], ":) can't be (or include) a revision, enchantment, or interaction changer like (replace:), (click:), or (link:).")) : a.create(s[0], [t].concat(n || []), null, !0) : h.create("datatype", m[0])
            }, function(r, e, t) {
                var n, a = s[0],
                    o = null != (n = r.section) && n.stackTop ? r.section.stackTop.tempVariables : Object.create(null),
                    i = d.create({
                        source: "<tw-link tabindex=0>" + e + "</tw-link>",
                        target: function() {
                            return r.target
                        },
                        append: "replace",
                        data: {
                            section: r.section,
                            clickEvent: function(e) {
                                r.enablers = r.enablers.filter(function(e) {
                                    return e.descriptor !== i
                                }), "link-reveal" === a && e.contents().unwrap();
                                var t, n = e.parentsUntil(":not(tw-enchantment)").parent();
                                n.length || (n = e.parent()), "link-rerun" === a && (t = e.parentsUntil(":not(tw-enchantment)"), e.detach(), t.remove()), "link" !== a && "link-rerun" !== a || n.empty(), r.section.renderInto("", null, r, o), "link-rerun" === a && n.prepend(e)
                            }
                        }
                    });
                return r.enablers = (r.enablers || []).concat({
                    descriptor: i,
                    changer: t
                }), r
            }, [String, r(a)])
        }), e.addCommand("link-goto", function(e) {
            if (!e) return h.create.apply(h, ["datatype"].concat(m))
        }, function(e, t, n, r) {
            var a, o = s(t, n, r);
            return n = o.text, r = o.passage, (o = o.error) || (e.transition ? h.create("datatype", "Please attach (" + (o = "transition") + "-depart:) or (" + o + "-arrive:) to a passage link, not (" + o + ":).") : (a = (a = u.hasValid(r) ? a : '<tw-broken-link passage-name="' + c.escape(r) + '">' + n + "</tw-broken-link>") || "<tw-link tabindex=0 " + (0 < l.passageNameVisited(r) ? 'class="visited" ' : "") + ">" + n + "</tw-link>", e.data.linkPassageName = r, e.data.section = t, g(e, {
                source: a,
                transitionDeferred: !0
            })))
        }, [String, r(String)])("link-storylet", function() {
            var e = (e = 1 === arguments.length || "string" != typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? 0 : 1) < 0 || arguments.length <= e ? void 0 : arguments[e];
            if (!e || "string" == typeof e) return h.create("datatype", "(link-storylet:) should be given one index number or one 'where' lambda, after the optional link text string.")
        }, function(e, t) {
            var n = (n = 2 + ("string" == typeof(arguments.length <= 2 ? void 0 : arguments[2]) ? 1 : 0)) < 2 || arguments.length <= n ? void 0 : arguments[n],
                r = "string" == typeof(arguments.length <= 2 ? void 0 : arguments[2]) && (arguments.length <= 2 ? void 0 : arguments[2]),
                a = ((a = (arguments.length <= 2 ? 0 : arguments.length - 2) - 1 + 2) < 2 || arguments.length <= a ? void 0 : arguments[a]) !== n && ((a = (arguments.length <= 2 ? 0 : arguments.length - 2) - 1 + 2) < 2 || arguments.length <= a ? void 0 : arguments[a]);
            if (e.transition) return h.create("datatype", "Please attach (".concat(o = "transition", "-depart:) or (").concat(o, "-arrive:) to (link-storylet:), not (").concat(o, ":)."));
            var o = f.isPrototypeOf(n),
                i = u.getStorylets(t, o && n),
                s = h.containsError(i);
            if (s) return s;
            var c, s = i[o ? 0 : n < 0 ? i.length + n : n - 1];
            if (s) s = s.get("name"), r = r || s, c = c || "<tw-link tabindex=0 " + (0 < l.passageNameVisited(s) ? 'class="visited" ' : "") + ">" + r + "</tw-link>", e.data.linkPassageName = s, e.data.section = t;
            else {
                if (!a) return e;
                c = a
            }
            return g(e, {
                source: c,
                transitionDeferred: !0
            })
        }, [n(parseInt, String, f.TypeSignature("where")), r(n(parseInt, String, f.TypeSignature("where"))), r(String)])("link-undo", function(e) {
            if (!e) return h.create("datatype", m[0])
        }, function(t, e, n) {
            var r, a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "";
            return l.pastLength < 1 ? g(t, {
                source: a
            }) : (r = (t.data.section = e).stackTop.tempVariables, t.data.forgetUndosEvent = function() {
                return t.data.section.whenUnblocked(function() {
                    var e = _objectSpread(_objectSpread({}, t), {}, {
                        append: "replace",
                        source: a,
                        transitionDeferred: !1
                    });
                    t.section.renderInto("", null, e, r)
                })
            }, g(t, {
                source: "<tw-link tabindex=0 undo>" + n + "</tw-link>",
                transitionDeferred: !0
            }))
        }, [String, r(String)])("link-show", function(e) {
            if (!e) return h.create("datatype", m[0])
        }, function(r, a, e) {
            for (var t = arguments.length, n = new Array(3 < t ? t - 3 : 0), o = 3; o < t; o++) n[o - 3] = arguments[o];
            return r.data.section = a, r.data.clickEvent = function(e) {
                e.contents().unwrap(), n.forEach(function(e) {
                    return e.forEach(a, function(e) {
                        var t = e.data("originalSource") || "",
                            n = e.data("hidden");
                        n && (e.removeData("hidden"), n instanceof i ? e.empty().append(n) : (n = e.data("tempVariables"), a.renderInto("", null, _objectSpread(_objectSpread({}, r), {}, {
                            source: t,
                            target: e,
                            transitionDeferred: !1
                        }), n && Object.create(n))))
                    })
                })
            }, g(r, {
                source: "<tw-link tabindex=0>" + e + "</tw-link>",
                transitionDeferred: !0
            })
        }, [String, o(t)])("link-fullscreen", function(e, t) {
            if (!e || !t) return h.create("datatype", m[0])
        }, function(t, e, n, r) {
            function a() {
                return document.fullscreenEnabled || document.msFullscreenEnabled ? "<tw-link tabindex=0 fullscreen>" + (document.fullscreenElement || document.msFullscreenElement ? r : n) + "</tw-link>" : r ? "<tw-broken-link>" + r + "</tw-broken-link>" : ""
            }
            var o = e.stackTop.tempVariables;
            return t.data.section = e, t.data.fullscreenEvent = function() {
                (document.fullscreenEnabled || document.msFullscreenEnabled) && t.data.section.whenUnblocked(function() {
                    var e = _objectSpread(_objectSpread({}, t), {}, {
                        append: "replace",
                        source: a(),
                        transitionDeferred: !1
                    });
                    t.section.renderInto("", null, e, o)
                })
            }, g(t, {
                source: a(),
                transitionDeferred: !0
            })
        }, [String, String, r(String)]), e.addChanger(["link-reveal-goto"], function(e, t, n, r) {
            if (!t) return h.create.apply(h, ["datatype"].concat(m));
            if (a.isPrototypeOf(n)) {
                if (a.isPrototypeOf(r)) return h.create("datatype", "You mustn't give two changers to (link-reveal-goto:)");
                r = n, n = void 0
            }
            return r && !r.canEnchant ? h.create("datatype", "The changer given to (link-reveal-goto:) can't include a revision, enchantment, or interaction changer like (replace:), (click:), or (link:).") : (t = (e = s(e, t, n)).text, n = e.passage, e.error || a.create("link-reveal-goto", [t, n, r].filter(function(e) {
                return void 0 !== e
            }), null, !1))
        }, function(t, e, n, r) {
            var a, o, i, s;
            if (u.hasValid(n)) return o = l.passageNameVisited(n), i = null != (a = t.section) && a.stackTop ? t.section.stackTop.tempVariables : Object.create(null), s = d.create({
                source: "<tw-link tabindex=0 " + (0 < o ? 'class="visited" ' : "") + ">" + e + "</tw-link>",
                target: t.target,
                append: "replace",
                data: {
                    section: t.section,
                    append: "replace",
                    clickEvent: function(e) {
                        t.enablers = t.enablers.filter(function(e) {
                            return e.descriptor !== s
                        }), e.contents().unwrap(), t.section.renderInto("", null, t, i), t.section.whenUnblocked(function() {
                            return p.goToPassage(n, {
                                transition: t.data.passageT8n
                            })
                        })
                    }
                }
            }), t.enablers = (t.enablers || []).concat({
                descriptor: s,
                changer: r
            }), t;
            t.source = '<tw-broken-link passage-name="' + c.escape(n) + '">' + e + "</tw-broken-link>"
        }, [String, r(n(a, String)), r(a)])
    }), define("macrolib/metadata", ["macros", "utils/operationutils", "datatypes/lambda", "internaltypes/twineerror"], function(t, e, n, s) {
        function c(e) {
            return {
                TwineScript_TypeName: "a (" + e + ":) macro",
                TwineScript_ObjectName: "a (" + e + ":) macro",
                TwineScript_Unstorable: !0,
                TwineScript_Print: function() {
                    return ""
                }
            }
        }
        var l = e.clone,
            u = e.objectName,
            p = e.isValidDatamapName,
            e = t.TypeSignature,
            r = e.zeroOrMore,
            e = e.Any;
        [
            ["storylet", n.TypeSignature("when")],
            ["urgency", Number],
            ["exclusivity", Number]
        ].forEach(function(e) {
            var e = _slicedToArray(e, 2),
                n = e[0],
                e = e[1];
            t.add(n, "Metadata", function(e, t) {
                return e.stackTop.speculativePassage ? t : c(n)
            }, e)
        }), t.add("metadata", "Metadata", function(e) {
            for (var r, a = new Map, t = arguments.length, n = new Array(1 < t ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
            var i = n.reduce(function(e, t) {
                var n;
                if (!s.containsError(e))
                    if (void 0 === r) r = t;
                    else {
                        if (n = s.containsError(p(a, r))) return n;
                        if (a.has(r)) return s.create("macrocall", "You used the same data name (" + u(r) + ") twice in the same (metadata:) call.");
                        a.set(r, l(t)), r = void 0
                    } return e
            }, !0);
            return s.containsError(i) ? i : void 0 !== r ? s.create("macrocall", "This (metadata:) macro has a data name without a value.") : e.stackTop.speculativePassage ? a : c("metadata")
        }, r(e))
    }), define("macrolib/patterns", ["macros", "utils", "utils/operationutils", "datatypes/lambda", "datatypes/datatype", "datatypes/typedvar", "internaltypes/twineerror", "internaltypes/varscope"], function(e, t, n, y, b, h, v, w) {
        function k(e) {
            var r, t, a = e.name,
                n = e.fullArgs,
                o = e.args,
                i = e.makeRegExpString,
                s = void 0 === i ? function(e) {
                    return e.join("")
                } : i,
                c = void 0 !== (i = e.insensitive) && i,
                l = void 0 === (i = e.canContainTypedVars) || i,
                u = void 0 === (i = e.canBeUsedAlone) || i,
                p = void 0 === (i = e.canContainTypedGlobals) || i,
                d = o || n,
                f = E(null),
                e = d.map(function e(t) {
                    if (h.isPrototypeOf(t)) {
                        var n = t.varRef;
                        if (!l) return v.create("operation", "Optional string patterns, like (".concat(a, ":)").concat("p-many" === a ? " with a minimum of 0 matches" : "", ", can't have typed variables inside them."));
                        if (!p && !w.isPrototypeOf(n.object)) return v.create("operation", "Only typed temp variables can be used in patterns given to (".concat(a, ":)"));
                        n = n.getName();
                        if (n in f) return v.create("operation", "There's already a typed temp variable named _".concat(n, " inside this (").concat(a, ":) call."));
                        f[n] = !0;
                        n = e(t.datatype);
                        return v.containsError(n) ? n : "(" + n + ")"
                    }
                    if (b.isPrototypeOf(t)) {
                        if (!(l && p || "function" != typeof t.typedVars)) {
                            n = t.typedVars();
                            if (!l && n.length) return v.create("operation", "(".concat(a, ":) can't have typed variables inside its pattern."));
                            if (!p && n.some(function(e) {
                                    return !w.isPrototypeOf(e.varRef.object)
                                })) return v.create("operation", "Only typed temp variables can be used in patterns given to (".concat(a, ":)"))
                        }
                        var r;
                        return t.regExp ? (t.rest ? "(?:" : "") + (c ? t.insensitive() : t).regExp + (t.rest ? ")*" : "") : (n = t.name, r = t.rest ? "*" : "", "alnum" === n ? m + r : "whitespace" === n ? _ + r : "uppercase" === n ? (c ? T : g) + r : "lowercase" === n ? (c ? T : S) + r : "anycase" === n ? T + r : "digit" === n ? "\\d" + r : "linebreak" === n ? "(?:\\r|\\n|\\r\\n)" + r : "str" === n ? ".*?" : ["even", "odd", "int", "num"].includes(n) ? v.create("datatype", "Please use string datatypes like 'digit' in (".concat(a, ":) instead of number datatypes.")) : v.create("datatype", "The (".concat(a, ":) macro must only be given string-related datatypes, not ").concat(O(t), ".")))
                    }
                    return "string" == typeof t ? (t = t.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"), c ? t.replace(RegExp("(".concat(g, "|").concat(S, ")"), "g"), function(e) {
                        return "[" + e.toUpperCase() + e.toLowerCase() + "]"
                    }) : t) : (x("createPattern", "mapper() was given a non-string non-datatype " + t), "")
                });
            return (i = v.containsError(e)) || (r = s(e), t = C(E(b), {
                name: a,
                regExp: r,
                insensitive: function() {
                    return c ? t : k({
                        name: a,
                        fullArgs: n,
                        args: d.map(function(e) {
                            return b.isPrototypeOf(e) && "function" == typeof e.insensitive ? e.insensitive() : e
                        }),
                        makeRegExpString: s,
                        insensitive: !0,
                        canContainTypedVars: l,
                        canBeUsedAlone: u
                    })
                },
                typedVars: function() {
                    return d.reduce(function(e, t) {
                        return h.isPrototypeOf(t) && (e = e.concat(c ? h.create(k({
                            name: "p-ins",
                            fullArgs: [t.datatype],
                            insensitive: !0
                        }), t.varRef) : t), t = t.datatype), e = b.isPrototypeOf(t) && "function" == typeof t.typedVars ? e.concat(t.typedVars()) : e
                    }, [])
                },
                destructure: function(e) {
                    var n, t;
                    return "string" != typeof e ? [v.create("operation", "I can't put ".concat(O(e), " into ").concat(this.TwineScript_ToSource(), " because it isn't a string."))] : (n = this.typedVars()).length ? (t = (RegExp("^" + (this.rest ? "(?:" : "") + r + (this.rest ? ")*" : "") + "$").exec(e) || []).slice(1)).length ? t.map(function(e, t) {
                        t = n[t];
                        if (t) return t.datatype.rest && !t.datatype.regExp && ((t = t.TwineScript_Clone()).datatype = k({
                            name: "p",
                            fullArgs: [t.datatype]
                        })), {
                            dest: t,
                            value: e || "",
                            src: void 0
                        }
                    }).filter(Boolean) : [v.create("operation", "I can't put ".concat(O(e), " because it doesn't match the pattern ").concat(this.TwineScript_ToSource(), "."))] : []
                },
                TwineScript_IsTypeOf: function(e) {
                    return u ? "string" == typeof e && !!e.match("^" + (this.rest ? "(?:" : "") + r + (this.rest ? ")*" : "") + "$") : v.create("operation", "A (".concat(a, ":) datatype must only be used with a (p:) macro."))
                },
                TwineScript_toTypeSignatureObject: function() {
                    var t = this;
                    return {
                        pattern: "range",
                        name: a,
                        range: function(e) {
                            return t.TwineScript_IsTypeOf(e)
                        }
                    }
                },
                TwineScript_ToSource: function() {
                    return (this.rest ? "..." : "") + "(" + a + ":" + n.map(A) + ")"
                }
            }), Object.defineProperty(t, "TwineScript_ObjectName", {
                get: function() {
                    return "a (".concat(a, ":) datatype")
                }
            }), t)
        }
        var m = t.anyRealLetter,
            g = t.anyUppercase,
            S = t.anyLowercase,
            T = t.anyCasedLetter,
            _ = t.realWhitespace,
            x = t.impossible,
            O = n.objectName,
            A = n.toSource,
            t = e.TypeSignature,
            n = t.rest,
            r = t.either,
            a = t.optional,
            t = t.nonNegativeInteger,
            C = Object.assign,
            E = Object.create,
            o = n(r(String, b, h));
        e.add(["p", "pattern"], "Datatype", function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return k({
                name: "p",
                fullArgs: n
            })
        }, o)(["p-either", "pattern-either"], "Datatype", function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return k({
                name: "p-either",
                fullArgs: n,
                canContainTypedVars: !1,
                makeRegExpString: function(e) {
                    return "(?:" + e.join("|") + ")"
                }
            })
        }, o)(["p-opt", "pattern-opt", "p-optional", "pattern-optional"], "Datatype", function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return k({
                name: "p-opt",
                fullArgs: n,
                canContainTypedVars: !1,
                makeRegExpString: function(e) {
                    return "(?:" + e.join("") + ")?"
                }
            })
        }, o)(["p-not", "pattern-not"], "Datatype", function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return n.find(function(e) {
                return "string" == typeof e ? 1 !== _toConsumableArray(e).length : e.rest || e.regExp || ["str", "empty"].includes(e.name)
            }) ? v.create("datatype", "(p-not:) should only be given single characters, or datatypes that match single characters") : k({
                name: "p-not",
                fullArgs: n,
                canContainTypedVars: !1,
                makeRegExpString: function(e) {
                    return "[^" + e.map(function(e) {
                        return e.startsWith("[") && e.endsWith("]") ? e.slice(1, -1) : e
                    }).join("") + "]"
                }
            })
        }, o)(["p-not-before", "pattern-not-before"], "Datatype", function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return k({
                name: "p-not-before",
                fullArgs: n,
                canContainTypedVars: !1,
                makeRegExpString: function(e) {
                    return "(?!" + e.join("") + ")"
                }
            })
        }, o)(["p-before", "pattern-before"], "Datatype", function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return k({
                name: "p-before",
                fullArgs: n,
                canContainTypedVars: !1,
                makeRegExpString: function(e) {
                    return "(?=" + e.join("") + ")"
                }
            })
        }, o)(["p-start", "pattern-start"], "Datatype", function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return k({
                name: "p-start",
                fullArgs: n,
                makeRegExpString: function(e) {
                    return "^(?:" + e.join("") + ")"
                }
            })
        }, o)(["p-end", "pattern-end"], "Datatype", function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return k({
                name: "p-end",
                fullArgs: n,
                makeRegExpString: function(e) {
                    return "(?:" + e.join("") + ")$"
                }
            })
        }, o)(["p-many", "pattern-many"], "Datatype", function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            var a, o, i, s = n.slice();
            return "number" == typeof n[0] && (a = n.shift(), o = "number" == typeof n[0] ? n.shift() : 1 / 0), !(void 0 !== o && o < a) && n.length ? (i = n.find(function(e) {
                return "string" != typeof e && !b.isPrototypeOf(e) && !h.isPrototypeOf(e)
            })) ? v.create("datatype", "This (p-many:) macro can only be given a min and max number followed by datatypes or strings, but was also given " + O(i) + ".") : k({
                name: "p-many",
                args: n,
                fullArgs: s,
                canContainTypedVars: 0 < a,
                makeRegExpString: function(e) {
                    return "(?:" + e.join("") + ")" + (void 0 !== a ? "{" + a + (o === 1 / 0 ? "," : o !== a ? "," + o : "") + "}" : "+")
                }
            }) : v.create("datatype", "The (p-many:) macro needs to be given string patterns, not just min and max numbers.")
        }, [n(r(t, String, b, h))])(["p-ins", "pattern-ins", "p-insensitive", "pattern-insensitive"], "Datatype", function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return k({
                name: "p-ins",
                fullArgs: n,
                insensitive: !0
            })
        }, o)(["split", "splitted"], "Array", function(e, t, n) {
            if (t = k({
                    name: "split",
                    fullArgs: [t],
                    canContainTypedVars: !1
                }), v.containsError(t)) return t;
            if (!n) return [""];
            if (!t.regExp) return _toConsumableArray(n);
            for (var r, a = RegExp(t.regExp), o = []; n && (r = a.exec(n));) {
                if (r.index + r[0].length === 0) return o;
                o.push(n.slice(0, r.index)), n = n.slice(r.index + r[0].length)
            }
            return o.concat(n || [])
        }, [r(String, b), String])("trimmed", "String", function(e, t, n) {
            return void 0 === n || b.isPrototypeOf(t) && "whitespace" === t.name ? t.trim() : (t = k({
                name: "trimmed",
                fullArgs: [t],
                canContainTypedVars: !1
            }), v.containsError(t) ? t : t.regExp ? n.replace(RegExp("^(" + t.regExp + ")*|(" + t.regExp + ")*$", "g"), "") : n)
        }, [r(String, b), a(String)])(["str-find", "string-find"], "String", function(e, t, n) {
            if (t = k({
                    name: "str-find",
                    fullArgs: [t],
                    canContainTypedGlobals: !1
                }), v.containsError(t)) return t;
            for (var r, a = t.typedVars(), o = RegExp(t.regExp, "g"), i = [], s = o.lastIndex;
                (r = o.exec(n)) && s !== o.lastIndex;)
                if (s = o.lastIndex, a.length) {
                    for (var c = new Map, l = 0; l < a.length; l += 1) {
                        if ("match" === a[l].varRef.getName()) return v.create("macrocall", "There was a typed temp variable named _match in the pattern given to (str-find:)", "The variable _match is reserved, and can't be used inside (str-find:)'s pattern.");
                        c.set(a[l].varRef.getName(), r[l + 1]), c.set("match", r[0])
                    }
                    i.push(c)
                } else i.push(r[0]);
            return i
        }, [b, String])(["str-replaced", "string-replaced", "replaced"], "String", function(e, t, n, r, a) {
            if ("number" != typeof t) {
                if (void 0 !== a) return v.create("macrocall", "1 too many values were given to (str-replaced:).", "If this is given 5 values, the first value must be a number of replacements.");
                a = r, r = n, n = t, t = 1 / 0
            } else if (void 0 === a) return v.create("macrocall", "The (str-replaced:) macro needs 1 more value.", "The final string seems to be missing.");
            if (b.isPrototypeOf(r)) return v.create("datatype", "The replacement value for (str-replaced:) must be a string or lambda, not ".concat(O(r)));
            if (y.isPrototypeOf(a) || y.isPrototypeOf(n)) return v.create("datatype", "The ".concat(y.isPrototypeOf(a) ? "final string" : "search pattern", " given to (str-replaced:) can't be a lambda."), "Only the replacement value (after the search pattern) can be a 'via' lambda.");
            if (n = k({
                    name: "str-replaced",
                    fullArgs: [n],
                    canContainTypedGlobals: !1
                }), v.containsError(n)) return n;
            if (!n.regExp) return a;
            for (var o, i = RegExp(n.regExp, "g"), s = y.isPrototypeOf(r) ? n.typedVars() : [], c = 1, l = 0, u = "", p = i.lastIndex; a && (o = i.exec(a)) && 0 < t && p !== i.lastIndex;) {
                for (var p = i.lastIndex, d = Object.create(e.stack.length ? e.stackTop.tempVariables : w), f = 0; f < s.length; f += 1) {
                    var h = s[f],
                        m = h.varRef.create(d, h.varRef.propertyChain);
                    if (v.containsError(m)) return m;
                    h = m.defineType(h.datatype);
                    if (v.containsError(h)) return h;
                    m.set(o[f + 1])
                }
                var g = y.isPrototypeOf(r) ? r.apply(e, {
                    loop: o[0],
                    pos: c,
                    tempVariables: d
                }) : r;
                if (v.containsError(g)) return g;
                if ("string" != typeof g) return v.create("datatype", "(str-replaced:)'s lambda must produce a string, but it produced ".concat(O(g), ' when given "').concat(o[0], '".'));
                u += a.slice(l, o.index) + g, c += 1, --t, l = o.index + o[0].length
            }
            return u += a.slice(l)
        }, [r(t, String, b), r(b, String, y.TypeSignature("via")), r(String, y.TypeSignature("via")), a(String)])
    }), define("macrolib/stylechangers", ["jquery", "macros", "utils", "utils/renderutils", "datatypes/colour", "datatypes/hookset", "datatypes/gradient", "datatypes/changercommand", "datatypes/lambda", "internaltypes/changedescriptor", "internaltypes/twineerror"], function(s, e, c, t, a, n, r, o, i, l, u) {
        var p, d, f = t.geomParse,
            h = t.geomStringRegExp,
            m = Object.assign,
            t = e.TypeSignature,
            g = t.either,
            y = t.wrapped,
            b = t.optional,
            v = t.Any,
            w = t.Everything,
            k = t.zeroOrMore,
            S = t.rest,
            T = t.insensitiveSet,
            _ = t.positiveNumber,
            x = t.positiveInteger,
            O = t.nonNegativeNumber,
            t = t.percent,
            y = [y(Boolean, 'If you gave a number, you may instead want to check that the number is not 0. If you gave a string, you may instead want to check that the string is not "".')],
            A = (c.onStartup(function() {
                return c.storyElement.on("mouseenter.hover-macro", "[hover=false]", function() {
                    var e = s(this),
                        t = e.data("hoverChanger");
                    c.options.debug && c.options.ignoreClickEvents && !e.is("tw-backdrop.eval-replay *, tw-backdrop.harlowe-crash *") || (e.data({
                        mouseoutStyle: e.attr("style") || ""
                    }), l.create({
                        target: e
                    }, t).update(), e.attr("hover", !0))
                }).on("mouseleave.hover-macro", "[hover=true]", function() {
                    var e = s(this),
                        t = e.data("mouseoutStyle");
                    e.attr("style", t).removeData("mouseoutStyle").attr("hover", !1)
                })
            }), u.on(function() {
                s("tw-expression, tw-hook", c.storyElement).each(function(e, t) {
                    ((t = s(t)).data("errorEvent") || Object)(t)
                })
            }), T("instant", "dissolve", "fade", "rumble", "shudder", "pulse", "zoom", "flicker", "slideleft", "slideright", "slideup", "slidedown", "fadeleft", "faderight", "fadeup", "fadedown", "blur")),
            C = T("dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "none");
        e.addChanger("if", function(e, t) {
            return o.create("if", [t])
        }, function(e, t) {
            return e.enabled = e.enabled && t
        }, y)("unless", function(e, t) {
            return o.create("unless", [t])
        }, function(e, t) {
            return e.enabled = e.enabled && !t
        }, y)("elseif", function(e, t) {
            return "lastHookShown" in e.stack[0] ? o.create("elseif", [!1 === e.stack[0].lastHookShown && !!t]) : u.create("macrocall", "There's no (if:) or something else before this to do (else-if:) with.")
        }, function(e, t) {
            return e.enabled = e.enabled && t
        }, y)("else", function(e) {
            return "lastHookShown" in e.stack[0] ? o.create("else", [!1 === e.stack[0].lastHookShown]) : u.create("macrocall", "There's nothing before this to do (else:) with.")
        }, function(e, t) {
            return e.enabled = e.enabled && t
        }, null)("hidden", function() {
            return o.create("hidden")
        }, function(e) {
            return e.enabled = !1
        }, null)(["verbatim", "v6m"], function() {
            return o.create("verbatim")
        }, function(e) {
            return e.verbatim = !0
        }, null)("live", function(e, t) {
            return o.create("live", t ? [t] : [])
        }, function(e, t) {
            e.enabled = !1, e.transitionDeferred = !0, e.data.live = {
                delay: t
            }
        }, b(Number))("event", function(e, t) {
            return o.create("event", [t])
        }, function(e, t) {
            e.enabled = !1, e.transitionDeferred = !0, e.data.live = {
                event: t
            }
        }, i.TypeSignature("when"))("more", function() {
            return o.create("more")
        }, function(e) {
            e.enabled = !1, e.transitionDeferred = !0, e.data.live = {
                event: {
                    when: !0,
                    filter: function(e) {
                        return 0 !== e.Identifiers.exits ? [] : [!0]
                    }
                }
            }
        }, null)("after", function(e, t, n) {
            return o.create("after", [t].concat(void 0 !== n ? [n] : []))
        }, function(e, t, n) {
            e.enabled = !1, e.transitionDeferred = !0, e.data.live = {
                event: {
                    when: !0,
                    filter: function(e) {
                        return c.anyInputDown() && n && (t -= n), e.Identifiers.time > t ? [!0] : []
                    }
                }
            }
        }, [_, b(O)])("after-error", function() {
            return o.create("after-error", [])
        }, function(n) {
            n.enabled = !1, n.transitionDeferred = !0;
            var r = n.section.stackTop.tempVariables;
            n.data.errorEvent = function(e) {
                e.removeData("errorEvent");
                var t = _objectSpread(_objectSpread({}, n), {}, {
                    enabled: !0,
                    transitionDeferred: !1
                });
                t.data && (t.data.errorEvent = void 0), n.section.whenUnblocked(function() {
                    return n.section.renderInto("", null, t, r)
                })
            }
        }, [])("hook", function(e, t) {
            var n;
            return t ? (n = c.insensitiveName(t)) ? o.create("hook", [n]) : u.create("datatype", 'The string given to (hook:), "'.concat(t, '", contained only dashes and underscores.')) : u.create("datatype", "The string given to (hook:) was empty.")
        }, function(e, t) {
            return e.attr.push({
                name: t
            })
        }, [String])(["for", "loop"], function(e, t) {
            if (!t.loop) return u.create("datatype", "The lambda provided to (for:) must refer to a temp variable, not just 'it'.");
            for (var n = arguments.length, r = new Array(2 < n ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
            return o.create("for", [t].concat(r))
        }, function(e, t) {
            for (var n = arguments.length, r = new Array(2 < n ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
            var o, i = t.filter(e.section, r);
            if (o = u.containsError(i)) return o;
            e.loopVars[t.loop.getName()] = i || []
        }, [i.TypeSignature("where"), k(v)])(["transition", "t8n"], function(e, t) {
            return o.create("transition", [c.insensitiveName(t)])
        }, function(e, t) {
            return "zoom" === (e.transition = t) && (e.transitionOrigin = function() {
                var e = s(this).offset(),
                    t = e.left,
                    e = e.top;
                return c.mouseCoords.x - t + "px " + (c.mouseCoords.y - e) + "px"
            }), e
        }, [A])(["transition-time", "t8n-time"], function(e, t) {
            return o.create("transition-time", [t])
        }, function(e, t) {
            return e.transitionTime = t, e.data.passageT8n = m(e.data.passageT8n || {}, {
                time: t
            }), e
        }, [_])(["transition-delay", "t8n-delay"], function(e, t) {
            return o.create("transition-delay", [t])
        }, function(e, t) {
            return e.transitionDelay = t, e
        }, [O])(["transition-skip", "t8n-skip"], function(e, t) {
            return o.create("transition-skip", [t])
        }, function(e, t) {
            return e.transitionSkip = t, e
        }, [_])(["transition-depart", "t8n-depart"], function(e, t) {
            return o.create("transition-depart", [c.insensitiveName(t)])
        }, function(e, t) {
            return e.data.passageT8n = m(e.data.passageT8n || {}, {
                depart: t
            }), "zoom" === t && (e.data.passageT8n.departOrigin = function() {
                var e = s(this).offset(),
                    t = e.left,
                    e = e.top;
                return c.mouseCoords.x - t + "px " + (c.mouseCoords.y - e) + "px"
            }), e
        }, [A])(["transition-arrive", "t8n-arrive"], function(e, t) {
            return o.create("transition-arrive", [c.insensitiveName(t)])
        }, function(e, t) {
            return e.data.passageT8n = m(e.data.passageT8n || {}, {
                arrive: t
            }), "zoom" === t && (e.data.passageT8n.arriveOrigin = function() {
                var e = s(this),
                    t = e.offset(),
                    n = t.left,
                    t = t.top,
                    r = e.height();
                return {
                    "transform-origin": 100 * (c.mouseCoords.x - n) / e.width() + "% " + 100 * (c.mouseCoords.y - t) / r + "%",
                    height: r + "px"
                }
            }), e
        }, [A])("button", function(e, t) {
            return void 0 === t || f(t).size ? o.create("button", t ? [t] : []) : u.create("datatype", 'The string given to (button:) should be a sizing line ("==X==", "==X", "=XXXX=" etc.), not '.concat(JSON.stringify(t), "."))
        }, function(e, t) {
            var t = f(t),
                n = t.marginLeft,
                t = t.size;
            return e.attr.push({
                class: function() {
                    return this.className + (this.classList.contains("enchantment-button") ? "" : " ".repeat(0 < this.className.length) + "enchantment-button")
                }
            }), e.styles.push({
                "margin-left": t ? n + "%" : void 0,
                width: t ? t + "%" : "100%"
            }), e
        }, [b(String)]).apply(void 0, _toConsumableArray((d = {
            click: {
                className: "enchantment-link",
                blockClassName: "enchantment-clickblock"
            },
            doubleclick: {
                className: "enchantment-dblclick",
                blockClassName: "enchantment-dblclickblock"
            },
            mouseover: {
                className: "enchantment-mouseover",
                blockClassName: "enchantment-mouseoverblock"
            },
            mouseout: {
                className: "enchantment-mouseout",
                blockClassName: "enchantment-mouseoutblock"
            }
        }, ["action", function(e, t) {
                return o.create("action", [c.insensitiveName(t)])
            }, function(e, t) {
                return e.attr.push({
                    class: function() {
                        var e = function e(t) {
                            return (t = s(t)).is("tw-story, tw-sidebar, tw-passage") || ["block", "flex"].includes(t.css("display")) || t.children().get().some(e)
                        }(this);
                        return Array.from(this.classList).filter(function(t) {
                            return !Object.keys(d).some(function(e) {
                                return d[e].className === t || d[e].blockClassName === t
                            })
                        }).concat(d[t][e ? "blockClassName" : "className"]).join(" ")
                    }
                }), e
            },
            [T.apply(void 0, _toConsumableArray(Object.keys(d)))]
        ])))(["border", "b4r"], function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return o.create("border", n.map(c.insensitiveName))
        }, function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return e.styles.push({
                display: function() {
                    var e = s(this).css("display");
                    return n.every(function(e) {
                        return "none" === e
                    }) || !e.includes("inline") ? e : "inline-block"
                },
                "border-style": n.join(" "),
                "border-width": function() {
                    return this.style.borderWidth || "2px"
                }
            }), e
        }, [C].concat(_toConsumableArray(Array(3).fill(b(C)))))(["border-size", "b4r-size"], function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return o.create("border-size", n)
        }, function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return e.styles.push({
                "border-width": n.map(function(e) {
                    return e + "px"
                }).join(" ")
            }), e
        }, [O].concat(_toConsumableArray(Array(3).fill(b(O)))))("corner-radius", function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return o.create("corner-radius", n)
        }, function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return e.styles.push({
                "border-radius": n.map(function(e) {
                    return e + "px"
                }).join(" "),
                padding: function() {
                    return this.style.padding || n.map(function(e) {
                        return e + "px"
                    }).join(" ")
                }
            }), e
        }, [O].concat(_toConsumableArray(Array(3).fill(b(O)))))(["border-colour", "b4r-colour", "border-color", "b4r-color"], function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return o.create("border-colour", n.map(function(e) {
                return a.isPrototypeOf(e) ? e.toRGBAString(e) : e
            }))
        }, function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return e.styles.push({
                "border-color": n.join(" ")
            }), e
        }, [g(String, a)].concat(_toConsumableArray(Array(3).fill(b(g(String, a))))))("opacity", function(e, t) {
            return o.create("opacity", [t])
        }, function(e, t) {
            return e.styles.push({
                opacity: t
            })
        }, [t])("font", function(e, t) {
            return o.create("font", [t])
        }, function(e, t) {
            return e.styles.push({
                "font-family": t
            }), e
        }, [String])("align", function(e, t) {
            var n = t.indexOf("><");
            return /^(==+>|<=+|=+><=+|<==+>)$/.test(t) ? ((n = ~n ? _objectSpread({
                "text-align": "center",
                "max-width": "50%"
            }, 25 === (n = Math.round(n / (t.length - 2) * 50)) ? {
                "margin-left": "auto",
                "margin-right": "auto"
            } : {
                "margin-left": n + "%"
            }) : "<" === t[0] && ">" === t.slice(-1) ? {
                "text-align": "justify",
                "max-width": "50%"
            } : t.includes(">") ? {
                "text-align": "right"
            } : {
                "text-align": "left"
            }).display = "block", o.create("align", [n])) : u.create("datatype", 'The (align:) macro requires an alignment arrow ("==>", "<==", "==><=" etc.) be provided, not "' + t + '"')
        }, function(e, t) {
            e.styles.push(t)
        }, [String])(["text-colour", "text-color", "color", "colour"], function(e, t) {
            return o.create("text-colour", [t])
        }, function(e, t) {
            return a.isPrototypeOf(t) && (t = t.toRGBAString(t)), e.styles.push({
                color: t
            }), e
        }, [g(String, a)])(["text-size", "size"], function(e, t) {
            return o.create("text-size", [t])
        }, function(e, t) {
            return e.styles.push({
                "font-size": 24 * t + "px",
                "line-height": 36 * t + "px"
            }), e
        }, [O])("text-indent", function(e, t) {
            return o.create("text-indent", [t])
        }, function(e, t) {
            return e.styles.push({
                "text-indent": t + "px",
                display: "inline-block"
            }), e
        }, [O])(["text-rotate-z", "text-rotate"], function(e, t) {
            return o.create("text-rotate-z", [t])
        }, function(e, t) {
            return e.styles.push({
                display: "inline-block",
                transform: function() {
                    var e = s(this).css("transform") || "";
                    return (e = "none" === e ? "" : e) + " rotate(" + t + "deg)"
                }
            }), e
        }, [Number])("text-rotate-y", function(e, t) {
            return o.create("text-rotate-y", [t])
        }, function(e, t) {
            return e.styles.push({
                display: "inline-block",
                transform: function() {
                    var e = s(this).css("transform") || "";
                    return (e = "none" === e ? "" : e) + " perspective(50vw) rotateY(" + t + "deg)"
                }
            }), e
        }, [Number])("text-rotate-x", function(e, t) {
            return o.create("text-rotate-x", [t])
        }, function(e, t) {
            return e.styles.push({
                display: "inline-block",
                transform: function() {
                    var e = s(this).css("transform") || "";
                    return (e = "none" === e ? "" : e) + " perspective(50vw) rotateX(" + t + "deg)"
                }
            }), e
        }, [Number])(["background", "bg"], function(e, t) {
            return o.create("background", [t])
        }, function(e, t) {
            return a.isPrototypeOf(t) ? t = t.toRGBAString() : r.isPrototypeOf(t) && (t = t.toLinearGradientString()), t = a.isHexString(t) || a.isCSS3Function(t) ? {
                "background-color": t
            } : t.startsWith("linear-gradient(") || t.startsWith("repeating-linear-gradient(") ? {
                "background-image": t
            } : {
                "background-size": "cover",
                "background-image": "url(".concat(t, ")"),
                "background-attachment": "fixed"
            }, e.styles.push(t, {
                display: function() {
                    var e = s(this);
                    return !e.children().length || c.childrenProbablyInline(e) ? s(this).css("display") : "block"
                }
            }), e
        }, [g(String, a, r)]).apply(void 0, _toConsumableArray((y = {
            color: function() {
                return "transparent"
            }
        }, p = m(Object.create(null), {
            none: {},
            bold: {
                "font-weight": "bold"
            },
            italic: {
                "font-style": "italic"
            },
            underline: {
                "text-decoration": "underline"
            },
            doubleunderline: {
                "text-decoration": "underline",
                "text-decoration-style": "double"
            },
            wavyunderline: {
                "text-decoration": "underline",
                "text-decoration-style": "wavy"
            },
            strike: {
                "text-decoration": "line-through"
            },
            doublestrike: {
                "text-decoration": "line-through",
                "text-decoration-style": "double"
            },
            wavystrike: {
                "text-decoration": "line-through",
                "text-decoration-style": "wavy"
            },
            superscript: {
                "vertical-align": "super",
                "font-size": ".83em"
            },
            subscript: {
                "vertical-align": "sub",
                "font-size": ".83em"
            },
            blink: {
                animation: "fade-in-out 1s steps(1,end) infinite alternate"
            },
            shudder: {
                animation: "shudder linear 0.1s 0s infinite"
            },
            mark: {
                "background-color": "hsla(60, 100%, 50%, 0.6)"
            },
            condense: {
                "letter-spacing": "-0.08em"
            },
            expand: {
                "letter-spacing": "0.1em"
            },
            outline: [{
                "text-shadow": function() {
                    var e = s(this).css("color");
                    return "-1px -1px 0 " + e + ", 1px -1px 0 " + e + ",-1px  1px 0 " + e + ", 1px  1px 0 " + e
                }
            }, {
                color: function() {
                    return c.parentColours(s(this)).backgroundColour
                }
            }],
            shadow: {
                "text-shadow": function() {
                    return "0.08em 0.08em 0.08em " + s(this).css("color")
                }
            },
            emboss: {
                "text-shadow": function() {
                    return "0.04em 0.04em 0em " + s(this).css("color")
                }
            },
            smear: [{
                "text-shadow": function() {
                    var e = s(this).css("color");
                    return "0em   0em 0.02em " + e + ",-0.2em 0em  0.5em " + e + ", 0.2em 0em  0.5em " + e
                }
            }, y],
            blur: [{
                "text-shadow": function() {
                    return "0em 0em 0.08em " + s(this).css("color")
                }
            }, y],
            blurrier: [{
                "text-shadow": function() {
                    return "0em 0em 0.2em " + s(this).css("color")
                },
                "user-select": "none"
            }, y],
            mirror: {
                display: "inline-block",
                transform: "scaleX(-1)"
            },
            upsidedown: {
                display: "inline-block",
                transform: "scaleY(-1)"
            },
            tall: {
                display: "inline-block",
                transform: "scaleY(1.5) translateY(-0.25ex)"
            },
            flat: {
                display: "inline-block",
                transform: "scaleY(0.5) translateY(0.25ex)"
            },
            fadeinout: {
                animation: "fade-in-out 2s ease-in-out infinite alternate"
            },
            rumble: {
                animation: "rumble linear 0.1s 0s infinite"
            },
            sway: {
                animation: "sway linear 2.5s 0s infinite"
            },
            buoy: {
                animation: "buoy linear 2.5s 0s infinite"
            },
            fidget: {
                animation: function() {
                    return "fidget step-end 60s " + 60 * -Math.random() + "s infinite" + (Math.random() < .5 ? " reverse" : "")
                }
            }
        }), ["text-style", function(e) {
                for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return o.create("text-style", n.map(c.insensitiveName))
            }, function(e) {
                for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                for (var a = 0; a < n.length; a += 1) "none" === n[a] ? e.styles = [] : e.styles = e.styles.concat(p[n[a]]);
                return e
            },
            [S(T.apply(void 0, _toConsumableArray(Object.keys(p))))]
        ])))("collapse", function() {
            return o.create("collapse")
        }, function(e) {
            return e.attr.push({
                collapsing: !0
            }), e
        }, [])("hover-style", function(e, t) {
            var n = l.create(),
                r = (t.run(n), n.summary());
            return r + "" == "styles" || r.every(function(e) {
                return "styles" === e || "attr" === e
            }) && n.attr.every(function(e) {
                return Object.keys(e) + "" == "style"
            }) ? o.create("hover-style", [t]) : u.create("datatype", "The changer given to (hover-style:) must only change the hook's style.")
        }, function(e, t) {
            return e.data.hoverChanger = t, e.attr.push({
                hover: function(e, t) {
                    return void 0 !== t && t
                }
            }), e
        }, [o])("css", function(e, t) {
            return t.trim().endsWith(";") || (t += ";"), o.create("css", [t])
        }, function(e, t) {
            return e.attr.push({
                style: function() {
                    return (s(this).attr("style") || "") + t
                }
            }), e
        }, [String])("test-true", function() {
            return o.create("test-true", [])
        }, function(e) {
            return e.enabled = !0
        }, k(w))("test-false", function() {
            return o.create("test-false", [])
        }, function(e) {
            return e.enabled = !1
        }, k(w)), e.addCommand("animate", s.noop, function(r, e, t, a, o) {
            t.forEach(e, function(e) {
                var t, n;
                "zoom" === name && (n = (t = e.offset()).left, t = t.top, n = c.mouseCoords.x - n + "px " + (c.mouseCoords.y - t) + "px"), c.transitionIn(e, a, r.transitionTime || o, r.transitionDelay, r.transitionSkip, 0, n)
            })
        }, [S(n), T.apply(void 0, _toConsumableArray(A.innerType.filter(function(e) {
            return "instant" !== e
        }))), b(_)]), ["box", "float-box"].forEach(function(i) {
            return e.addChanger(i, function(e, t, n) {
                var r = -1 === t.search(h) || 1 < t.length && !t.includes("="),
                    a = "float-box" === i && (-1 === n.search(h) || 1 < n.length && !n.includes("="));
                return r || a ? u.create("datatype", "The (" + i + ':) macro requires a sizing line("==X==", "==X", "=XXXX=" etc.) be provided, not "' + (r ? t : n) + '".') : o.create(i, [t, n].filter(function(e) {
                    return void 0 !== e
                }))
            }, function(e, t, n) {
                var r, t = f(t),
                    a = t.marginLeft,
                    t = t.size,
                    o = ("float-box" === i && (r = (o = f(n)).marginLeft, n = o.size), "box" === i ? "%" : "vw"),
                    a = (_defineProperty(t = {
                        display: "block",
                        width: t + o,
                        "max-width": t + o
                    }, "box" === i ? "margin-left" : "left", a + o), _defineProperty(t, "overflow-y", "auto"), _defineProperty(t, "padding", function() {
                        var e = s(this).css("padding");
                        return e && "0px" !== e ? e : "1em"
                    }), t);
                return void 0 !== n && (a.height = "box" === i ? 1.5 * n + 2 + "em" : n + "vh"), "float-box" === i && m(a, {
                    position: "fixed",
                    top: r + "vh",
                    "background-color": function() {
                        return c.parentColours(s(this)).backgroundColour
                    }
                }), e.styles.push(a), e
            }, [String, "box" === i ? b(x) : String])
        })
    }), define("macrolib/values", ["macros", "state", "utils", "utils/operationutils", "datatypes/colour", "datatypes/gradient", "datatypes/datatype", "datatypes/hookset", "datatypes/codehook", "internaltypes/twineerror"], function(t, r, e, n, l, c, a, o, i, f) {
        var s = e.realWhitespace,
            u = e.nth,
            p = e.anyRealLetter,
            d = e.plural,
            h = n.subset,
            m = n.objectName,
            g = n.clone,
            y = n.toSource,
            e = t.TypeSignature,
            n = e.rest,
            b = e.zeroOrMore,
            v = e.either,
            w = e.optional,
            k = e.insensitiveSet,
            S = e.numberRange,
            T = e.percent,
            _ = e.nonNegativeInteger,
            x = e.positiveInteger,
            e = e.Any,
            O = Math.max,
            A = Math.min,
            C = Math.round,
            E = Math.floor,
            N = Math.ceil;

        function j(t) {
            return function() {
                var e = t.apply(void 0, arguments);
                return "number" != typeof e || isNaN(e) ? f.create("macrocall", "This mathematical expression doesn't compute!") : e
            }
        }
        t.add(["str", "string", "text"], "String", function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return n.map(function(e) {
                return i.isPrototypeOf(e) ? e.source : e
            }).join("")
        }, [b(t.TypeSignature.either(String, Number, Boolean, Array, i))])("source", "String", function(e, t) {
            return "command" !== (null == t ? void 0 : t.TwineScript_TypeID) || t.TwineScript_ToSource ? y(t) : f.create("datatype", "I can't construct the source code of a command created by a custom macro.")
        }, [e])("substring", "String", function(e, t, n, r) {
            return h(t, n, r)
        }, [String, parseInt, parseInt])("lowercase", "String", function(e, t) {
            return t.toLowerCase()
        }, [String])("uppercase", "String", function(e, t) {
            return t.toUpperCase()
        }, [String])("lowerfirst", "String", function(e, t) {
            return t.replace(RegExp(p + "+"), function(e) {
                return (e = Array.from(e))[0].toLowerCase() + e.slice(1).join("").toLowerCase()
            })
        }, [String])("upperfirst", "String", function(e, t) {
            return t.replace(RegExp(p + "+"), function(e) {
                return (e = Array.from(e))[0].toUpperCase() + e.slice(1).join("").toLowerCase()
            })
        }, [String])("words", "Array", function(e, t) {
            return t.split(RegExp(s + "+")).filter(Boolean)
        }, [String])(["str-repeated", "string-repeated"], "String", function(e, t, n) {
            return 0 === n.length ? f.create("macrocall", "I can't repeat an empty string.") : n.repeat(t)
        }, [_, String])(["str-reversed", "string-reversed"], "String", function(e, t) {
            return _toConsumableArray(t).reverse().join("")
        }, [String])("joined", "String", function(e, t) {
            for (var n = arguments.length, r = new Array(2 < n ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
            return r.join(t)
        }, [n(String)])("plural", "String", function(e, t, n, r) {
            return n && "" !== r ? d(t, n, r) : f.create("macrocall", "The (plural:) macro can't be given empty strings.")
        }, [parseInt, String, w(String)])(["str-nth", "string-nth"], "String", function(e, t) {
            return u(t)
        }, [parseInt])("digit-format", "String", function(e, t, n) {
            if (1e21 <= Math.abs(n)) return f.create("macrocall", "The number given to (digit-format:) is too big.");
            for (var r = /([^#0])(?=[#0]*$)/g, a = (r.exec(t) || [])[1], o = (/^[#0]*([^#0])/g.exec(t) || [])[1], i = (t = _toConsumableArray(t)).length, s = (a && ("," !== a || o && "," !== o) && (i = r.lastIndex - 1), Math.abs(n).toFixed(16).replace(/(\.\d*?)0+$/, function(e, t) {
                    return t
                }).replace(/^0+/, "")), c = s.includes(".") ? s.indexOf(".") : s.length, l = 0, u = "", p = t.length - 1; 0 <= p; --p) {
                var d = t[p];
                "0" === d || "#" === d ? u = (s[c - i + p + l] || ("0" === d ? "0" : "")) + u : p < t.length - 1 && 0 < p && (u = d + u, l += p === i ? 0 : 1)
            }
            return (n < 0 ? "-" : "") + u
        }, [String, Number])(["num", "number"], "Number", function(e, t) {
            return Number.isNaN(+t) ? f.create("macrocall", "I couldn't convert " + m(t) + " to a number.") : +t
        }, [String])("datatype", "Datatype", function(e, t) {
            return a.from(t)
        }, [e])("datapattern", "Any", function(e, t) {
            return function n(e) {
                var r;
                return Array.isArray(e) ? r = e.map(n) : e instanceof Map ? (r = new Map, _toConsumableArray(e).forEach(function(e) {
                    var e = _slicedToArray(e, 2),
                        t = e[0],
                        e = e[1];
                    return r.set(t, n(e))
                })) : r = a.from(e), (e = f.containsError(r)) || r
            }(t)
        }, [e])(["rgb", "rgba"], "Colour", function(e) {
            return l.create({
                r: arguments.length <= 1 ? void 0 : arguments[1],
                g: arguments.length <= 2 ? void 0 : arguments[2],
                b: arguments.length <= 3 ? void 0 : arguments[3],
                a: arguments.length <= 4 ? void 0 : arguments[4]
            })
        }, [S(0, 255), S(0, 255), S(0, 255), w(T)])(["hsl", "hsla"], "Colour", function(e, t, n, r, a) {
            return (t = C(t) % 360) < 0 && (t += 360), l.create({
                h: t,
                s: n,
                l: r,
                a: a
            })
        }, [Number, T, T, w(T)])(["lch", "lcha"], "Colour", function(e, t, n, r, a) {
            return (r = C(r) % 360) < 0 && (r += 360), l.create({
                l: t,
                c: n,
                h: r,
                a: a
            })
        }, [T, S(0, 132), Number, w(T)])("complement", "Colour", function(e, t) {
            return t.LCHRotate(180)
        }, [l])("mix", "Colour", function(e, t, n, r, a) {
            n = n.toLCHA(), a = a.toLCHA();
            var o = 1,
                i = (t + r !== 1 && (t + r < 1 && (o = t + r), t = (i = [t / (t + r), r / (t + r)])[0], r = i[1]), n.c < 2 || n.l < .01 || .99 < n.l ? n.h = a.h : (a.c < 2 || a.l < .01 || .99 < a.l) && (a.h = n.h), n.l *= n.a, n.c *= n.a, a.l *= a.a, a.c *= a.a, 180 < a.h - n.h ? n.h += 360 : a.h - n.h < -180 && (a.h += 360), n.a * t + a.a * r),
                s = (n.l * t + a.l * r) / i,
                c = (n.c * t + a.c * r) / i,
                n = (n.h * t + a.h * r) / i;
            return l.create({
                l: s,
                c: c,
                h: n,
                a: i * o
            })
        }, [T, l, T, l])("palette", "Array", function(e, t, n) {
            var r, a = n.toLCHA(),
                o = a.l,
                a = {
                    l: o <= .75 ? .75 + o / 3 : .75 - 3 * (1 - o),
                    c: 80,
                    h: a.h,
                    a: 1
                },
                i = l.create(a);
            return a.l += o <= .75 ? -.1 : .1, a.l < .5 && (a.l *= .5 / a.l), r = l.create(a), a.l += o <= .85 ? .15 : -.15, o = l.create(a), "adjacent" === t ? (r = (i = i.LCHRotate(-30)).LCHRotate(30), o = i.LCHRotate(60)) : "triad" === t && (o = i.LCHRotate(180), r = i.LCHRotate(140), i = i.LCHRotate(-140)), [n, i, r, o]
        }, [k("mono", "adjacent", "triad"), l])("gradient", "Gradient", function(e, t) {
            (t = C(t) % 360) < 0 && (t += 360);
            for (var n, r, a, o = arguments.length, i = new Array(2 < o ? o - 2 : 0), s = 2; s < o; s++) i[s - 2] = arguments[s];
            return i.length < 4 ? f.create("datatype", "(gradient:) must be given at least 2 colour-stop pairs of numbers and colours.") : (r = [], a = i.reduce(function(e, t) {
                if (!f.containsError(e))
                    if (void 0 === n) n = t;
                    else {
                        if ("number" != typeof n || !l.isPrototypeOf(t)) return f.create("datatype", "(gradient:) colour-stops should be pairs of numbers and colours, not colours and numbers.");
                        r.push({
                            stop: n,
                            colour: g(t)
                        }), n = void 0
                    } return e
            }, !0), f.containsError(a) ? a : void 0 !== n ? f.create("macrocall", "This gradient has a colour-stop percent without a colour.") : c.create(t, r))
        }, [Number, n(v(T, l))])("stripes", "Gradient", function(e, t, n) {
            (t = C(t) % 360) < 0 && (t += 360);
            for (var r = 0, a = [], o = arguments.length, i = new Array(3 < o ? o - 3 : 0), s = 3; s < o; s++) i[s - 3] = arguments[s];
            return i.forEach(function(e) {
                a.push({
                    stop: r,
                    colour: g(e)
                }), r += n, a.push({
                    stop: r,
                    colour: g(e)
                })
            }), c.create(t, a, !0)
        }, [Number, x, l, n(l)])("hooks-named", "HookName", function(e, t) {
            return t ? o.create({
                type: "name",
                data: t
            }) : f.create("datatype", "(hooks-named:) can't be given an empty string.")
        }, [String])("cond", "Any", function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            for (var a = 0; a < n.length; a += 2) {
                var o = n[a];
                if (a === n.length - 1 || f.containsError(o)) return o;
                if ("boolean" != typeof o) return f.create("datatype", "(cond:)'s " + u(a + 1) + " value is " + m(o) + ", but should be a boolean.");
                if (o) return n[a + 1]
            }
            return f.create("macrocall", "An odd number of values must be given to (cond:), not " + n.length, "(cond:) must be given one or more pairs of booleans and values, as well as one final value.")
        }, [Boolean, e, n(e)]);
        ({
            weekday: [function() {
                return ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"][(new Date).getDay()] + "day"
            }, null],
            monthday: [function() {
                return (new Date).getDate()
            }, null],
            currenttime: [function() {
                var e = new Date,
                    t = e.getHours() < 12;
                return (e.getHours() % 12 || 12) + ":" + ((e.getMinutes() < 10 ? "0" : "") + e.getMinutes()) + " " + (t ? "A" : "P") + "M"
            }, null],
            currentdate: [function() {
                return (new Date).toDateString()
            }, null],
            min: [A, n(Number)],
            max: [O, n(Number)],
            abs: [Math.abs, Number],
            sign: [Math.sign, Number],
            sin: [Math.sin, Number],
            cos: [Math.cos, Number],
            tan: [Math.tan, Number],
            floor: [E, Number],
            round: [C, Number],
            trunc: [function(e) {
                return (0 < e ? E : N)(e)
            }, Number],
            ceil: [N, Number],
            pow: [j(Math.pow), [Number, Number]],
            exp: [Math.exp, Number],
            sqrt: [j(Math.sqrt), Number],
            log: [j(Math.log), Number],
            log10: [j(Math.log10), Number],
            log2: [j(Math.log2), Number],
            random: [function(e, t) {
                    var n, t = t ? (n = A(e, t), O(e, t)) : (n = 0, e);
                    return t += 1, ~~(r.random() * (t - n)) + n
                },
                [parseInt, t.TypeSignature.optional(parseInt)]
            ],
            "": function() {
                for (var e in this) e && hasOwnProperty.call(this, e) && t.add(e, "Number", function(a) {
                    return function(e) {
                        for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        return a.apply(void 0, n)
                    }
                }(this[e][0]), this[e][1])
            }
        })[""](), t.add("either", "Any", function(e) {
            var t = 1 + ~~(r.random() * (arguments.length <= 1 ? 0 : arguments.length - 1));
            return t < 1 || arguments.length <= t ? void 0 : arguments[t]
        }, n(e))("nth", "Any", function(e, t) {
            return t <= 0 ? f.create("datatype", "(nth:)'s first value should be a positive whole number, not " + t) : (t = (t - 1) % (arguments.length <= 2 ? 0 : arguments.length - 2) + 2) < 2 || arguments.length <= t ? void 0 : arguments[t]
        }, [parseInt, n(e)])
    }), ! function() {
        var a, k = {};

        function o(e) {
            for (var t in e) this[t] = e[t]
        }

        function i(e, t) {
            for (var n, r, a = e.innerText, o = null, i = 0, s = i, c = a.length, l = null; i < c;) {
                for (var u = a.slice(i), p = (o && o.length ? o[0] : e).innerMode, d = 0, f = p.length; d < f; d += 1) {
                    var h = k[p[d]];
                    if (!(h.constraint && !h.constraint(l) || h.cannotFollowText && ("text" === (null == (w = l) ? void 0 : w.type) || s < i)) && (h.plainCompare ? u.startsWith(h.pattern) : h.pattern.test(u))) {
                        var m = h.fn(h.plainCompare ? h.pattern : h.pattern.exec(u)),
                            g = !1,
                            y = 0;
                        if (m.matches) {
                            for (; o && y < o.length; y += 1) {
                                var b = o[y],
                                    v = b.type,
                                    b = b.aka;
                                if (v in m.matches) {
                                    g = !0;
                                    break
                                }
                                b && (v = b), -1 < (null == (b = m.cannotCross) ? void 0 : b.indexOf(v)) && (y = o.length - 1)
                            }
                            if ((!o || y >= o.length) && !m.isFront) continue
                        }
                        s < i && e.addChild({
                            type: "text",
                            text: a.slice(s, i),
                            innerMode: p
                        });
                        var s = i += (l = e.addChild(m)).text.length,
                            w = !1;
                        g && (t && S(e, l, o[y]), o = o.slice(y + 1), w = !0), !w && l.isFront && (o ? o.unshift(l) : o = [l]);
                        break
                    }
                }
                d === f && (i += 1, null === l) && (l = {
                    type: "text"
                })
            }
            for (s < i && e.addChild({
                    type: "text",
                    text: a.slice(s, i),
                    innerMode: (null != (n = o) && n.length ? o[0] : e).innerMode
                }); 0 < (null == (r = o) ? void 0 : r.length);) o.shift().demote();
            return e
        }

        function S(e, t, n) {
            var r = e.children.indexOf(t),
                a = e.children.indexOf(n);
            t.children = e.children.splice(a + 1, r - (a + 1)), t.type = t.matches[n.type], t.innerText = "";
            for (var o, i = 0, s = t.children.length; i < s; i++) t.innerText += t.children[i].text;
            for (o in t.start = n.start, t.text = n.text + t.innerText + t.text, n) hasOwnProperty.call(n, o) && !hasOwnProperty.call(t, o) && (t[o] = n[o]);
            t.isFront && (t.isFront = !1), e.children.splice(a, 1)
        }
        o.prototype = {
            constructor: o,
            addChild: function(e) {
                var t = this.lastChildEnd(),
                    n = new o(e);
                return n.start = t, n.end = e.text && t + e.text.length, n.place = this.place, n.children = [], n.innerText && i(n), this.children.push(n), n
            },
            lastChildEnd: function() {
                var e = this.children && this.children[this.children.length - 1] || null;
                return e ? e.end : this.start + Math.max(0, this.text.indexOf(this.innerText))
            },
            tokenAt: function(e) {
                if (e < this.start || e >= this.end) return null;
                if (this.children.length)
                    for (var t = 0; t < this.children.length; t += 1)
                        if (e >= this.children[t].start && e < this.children[t].end) {
                            var n = this.children[t].tokenAt(e);
                            if (n) return n
                        } return this
            },
            pathAt: function(e) {
                if (e < this.start || e >= this.end) return [];
                var t = [];
                if (this.children.length)
                    for (var n = 0; n < this.children.length; n += 1)
                        if (e >= this.children[n].start && e < this.children[n].end) {
                            var r = this.children[n].pathAt(e);
                            if (r.length) {
                                t = t.concat(r);
                                break
                            }
                        } return t.concat(this)
            },
            nearestTokenAt: function(n) {
                return n < this.start || n >= this.end ? null : this.children ? this.children.reduce(function(e, t) {
                    return e || (n >= t.start && n < t.end ? t : null)
                }, null) : this
            },
            everyLeaf: function(n) {
                return this.children && 0 !== this.children.length ? this.children.reduce(function(e, t) {
                    return e && t.everyLeaf(n)
                }, !0) : !!n(this)
            },
            demote: function() {
                this.type = "text"
            },
            error: function(e) {
                this.type = "error", this.message = e
            },
            toString: function() {
                var e = this.type + "(" + this.start + "\u2192" + this.end + ")";
                return this.children && 0 < this.children.length && (e += "[" + this.children + "]"), e
            },
            copy: function() {
                var e = new o(this);
                return e.children = e.children.slice(), e
            },
            foldChildren: function() {
                for (var e = [], t = this.children.slice(), n = 0; n < t.length; n += 1) {
                    var r = t[n],
                        a = !1;
                    if (r.matches)
                        for (var o = 0; o < e.length; o += 1) e[o].type in r.matches && (S(this, r, e[o]), e = e.slice(o + 1), a = !0);
                    !a && r.isFront && e.unshift(r)
                }
            }
        }, a = {
            lex: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                    n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "start",
                    r = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
                return i(new o({
                    type: "root",
                    place: t,
                    start: 0,
                    end: e.length,
                    text: e,
                    innerText: e,
                    children: [],
                    innerMode: a.modes[n]
                }), !r)
            },
            rules: k,
            modes: {}
        }, "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) ? module.exports = a : "function" == typeof define && define.amd ? define("lexer", [], function() {
            return a
        }) : this && null != this && this.loaded ? (this.modules || (this.modules = {}), this.modules.Lexer = a) : this.Lexer = a
    }.call(eval("this") || ("undefined" != typeof global ? global : window)), ! function() {
        Object.assign = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n, r = arguments[t];
                for (n in r) hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        var m, g = Object.keys,
            y = Object.assign;

        function t(e) {
            function t(n) {
                return n = n || "innerText",
                    function(e) {
                        var e = e.reduceRight(function(e, t, n) {
                                return e || (n ? t : "")
                            }, ""),
                            t = {};
                        return t[n] = e, t
                    }
            }

            function n(e, t) {
                var n = {};
                return n[e] = t,
                    function() {
                        return {
                            isFront: !0,
                            matches: n,
                            cannotCross: ["verbatimOpener"]
                        }
                    }
            }
            var r = Object.bind(0, null);

            function a(a, e) {
                return Object.keys(e).forEach(function(n) {
                    var r = e[n].fn;
                    e[n].fn = function(e) {
                        var t = r(e);
                        return t.text || (t.text = "string" == typeof e ? e : e[0]), t.type || (t.type = n), t.innerMode || (t.innerMode = a), t
                    }
                }), e
            }

            function o(e) {
                switch (e && e.type) {
                    case null:
                    case "br":
                    case "hr":
                    case "bulleted":
                    case "numbered":
                    case "heading":
                    case "align":
                    case "column":
                    case "escapedLine":
                        return !0
                }
                return !1
            }
            var i = [],
                s = [],
                c = [],
                l = a(i, {
                    hr: {
                        fn: r
                    },
                    bulleted: {
                        fn: function(e) {
                            return {
                                depth: e[1].length
                            }
                        }
                    },
                    numbered: {
                        fn: function(e) {
                            return {
                                depth: e[1].length / 2
                            }
                        }
                    },
                    heading: {
                        fn: function(e) {
                            return {
                                depth: e[1].length
                            }
                        }
                    },
                    align: {
                        fn: function(e) {
                            var t, e = e[1],
                                n = e.indexOf("><");
                            return ~n ? 25 === (t = Math.round(n / (e.length - 2) * 50)) && (t = "center") : "<" === e[0] && ">" === e.slice(-1) ? t = "justify" : -1 < e.indexOf(">") ? t = "right" : -1 < e.indexOf("<") && (t = "left"), {
                                align: t
                            }
                        }
                    },
                    column: {
                        fn: function(e) {
                            var t, e = e[1],
                                n = e.indexOf("|");
                            return n && n < e.length - 1 ? t = "center" : "|" === e[0] && "|" === e.slice(-1) ? t = "none" : n === e.length - 1 ? t = "right" : n || (t = "left"), {
                                column: t,
                                width: /\|+/.exec(e)[0].length,
                                marginLeft: /^=*/.exec(e)[0].length,
                                marginRight: /=*$/.exec(e)[0].length
                            }
                        }
                    }
                }),
                u = (g(l).forEach(function(e) {
                    l[e].constraint = o, l[e].cannotFollowText = !0
                }), a(i, {
                    twine1Macro: {
                        fn: function() {
                            return {
                                type: "error",
                                message: "Harlowe macros use a different syntax to Twine 1, SugarCube, and Yarn macros."
                            }
                        }
                    },
                    emBack: {
                        fn: function() {
                            return {
                                matches: {
                                    emFront: "em"
                                },
                                cannotCross: ["verbatimOpener"]
                            }
                        }
                    },
                    strongBack: {
                        fn: function() {
                            return {
                                matches: {
                                    strongFront: "strong"
                                },
                                cannotCross: ["verbatimOpener"]
                            }
                        }
                    },
                    strongFront: {
                        fn: function() {
                            return {
                                isFront: !0
                            }
                        }
                    },
                    emFront: {
                        fn: function() {
                            return {
                                isFront: !0
                            }
                        }
                    },
                    boldOpener: {
                        fn: n("boldOpener", "bold")
                    },
                    italicOpener: {
                        fn: n("italicOpener", "italic")
                    },
                    strikeOpener: {
                        fn: n("strikeOpener", "strike")
                    },
                    supOpener: {
                        fn: n("supOpener", "sup")
                    },
                    commentFront: {
                        fn: function() {
                            return {
                                isFront: !0
                            }
                        }
                    },
                    commentBack: {
                        fn: function() {
                            return {
                                matches: {
                                    commentFront: "comment"
                                }
                            }
                        }
                    },
                    scriptStyleTag: {
                        fn: r
                    },
                    tag: {
                        fn: r
                    },
                    url: {
                        fn: r
                    },
                    hookPrependedFront: {
                        fn: function(e) {
                            return {
                                name: e[1],
                                hidden: ")" === e[2],
                                isFront: !0,
                                tagPosition: "prepended"
                            }
                        }
                    },
                    hookFront: {
                        fn: function() {
                            return {
                                isFront: !0
                            }
                        }
                    },
                    hookBack: {
                        fn: function() {
                            return {
                                matches: {
                                    hookPrependedFront: "hook",
                                    hookFront: "hook"
                                },
                                cannotCross: ["verbatimOpener"]
                            }
                        }
                    },
                    hookAppendedBack: {
                        fn: function(e) {
                            return {
                                name: e[2],
                                hidden: "(" === e[1],
                                tagPosition: "appended",
                                matches: {
                                    hookFront: "hook"
                                },
                                cannotCross: ["verbatimOpener"]
                            }
                        }
                    },
                    unclosedHook: {
                        fn: r
                    },
                    unclosedHookPrepended: {
                        fn: function(e) {
                            return {
                                type: "unclosedHook",
                                name: e[1],
                                hidden: ")" === e[2]
                            }
                        }
                    },
                    verbatimOpener: {
                        fn: function(e) {
                            var e = e[0].length,
                                t = {};
                            return {
                                type: (t["verbatim" + e] = "verbatim") + e,
                                isFront: !0,
                                matches: t,
                                aka: "verbatimOpener"
                            }
                        }
                    },
                    unclosedCollapsed: {
                        fn: r
                    },
                    collapsedFront: {
                        fn: function() {
                            return {
                                isFront: !0
                            }
                        }
                    },
                    collapsedBack: {
                        fn: function() {
                            return {
                                matches: {
                                    collapsedFront: "collapsed"
                                },
                                cannotCross: ["verbatimOpener"]
                            }
                        }
                    },
                    escapedLine: {
                        fn: r
                    },
                    legacyLink: {
                        fn: function(e) {
                            return {
                                type: "twineLink",
                                innerText: e[1],
                                passage: e[2],
                                innerMode: i
                            }
                        }
                    },
                    br: {
                        fn: r
                    }
                })),
                p = y(a(s, {
                    macroFront: {
                        fn: function(e) {
                            return {
                                isFront: !0,
                                name: e[1]
                            }
                        }
                    },
                    groupingBack: {
                        fn: function() {
                            return {
                                matches: {
                                    groupingFront: "grouping",
                                    macroFront: "macro"
                                },
                                cannotCross: ["singleStringOpener", "doubleStringOpener", "hookFront"]
                            }
                        }
                    },
                    passageLink: {
                        fn: function(e) {
                            var t = e[1] || "",
                                n = e[2] || "",
                                e = e[3] || "";
                            return {
                                type: "twineLink",
                                innerText: n ? e : t,
                                passage: t ? e : n,
                                innerMode: i
                            }
                        }
                    },
                    simpleLink: {
                        fn: function(e) {
                            return {
                                type: "twineLink",
                                innerText: e[1] || "",
                                passage: e[1] || "",
                                innerMode: i
                            }
                        }
                    },
                    variable: {
                        constraint: function(e) {
                            return !e || "macroFront" !== e.type
                        },
                        fn: t("name")
                    },
                    tempVariable: {
                        constraint: function(e) {
                            return !e || "macroFront" !== e.type
                        },
                        fn: t("name")
                    }
                }), {
                    hookFront: u.hookFront,
                    hookBack: u.hookBack
                }),
                d = a(s, _objectSpread(_objectSpread({
                    commentBack: {
                        fn: function() {
                            return {
                                matches: {
                                    commentFront: "comment"
                                }
                            }
                        }
                    },
                    macroName: {
                        constraint: function(e) {
                            return e && "macroFront" === e.type
                        },
                        fn: t("name")
                    },
                    groupingFront: {
                        fn: function() {
                            return {
                                isFront: !0
                            }
                        }
                    },
                    property: {
                        fn: t("name"),
                        constraint: function(e) {
                            if (e) switch (e.type) {
                                case "variable":
                                case "hookName":
                                case "property":
                                case "tempVariable":
                                case "colour":
                                case "itsProperty":
                                case "belongingItProperty":
                                case "macro":
                                case "grouping":
                                case "string":
                                case "datatype":
                                case "hook":
                                case "boolean":
                                case "number":
                                    return !0
                            }
                        }
                    },
                    possessiveOperator: {
                        fn: r
                    },
                    itsProperty: {
                        cannotFollowText: !0,
                        fn: t("name")
                    },
                    itsOperator: {
                        cannotFollowText: !0,
                        fn: r
                    },
                    belongingItProperty: {
                        cannotFollowText: !0,
                        fn: t("name")
                    },
                    belongingItOperator: {
                        cannotFollowText: !0,
                        fn: r
                    },
                    belongingProperty: {
                        cannotFollowText: !0,
                        fn: t("name")
                    },
                    belongingOperator: {
                        cannotFollowText: !0,
                        fn: r
                    },
                    escapedStringChar: {
                        fn: function() {
                            return {
                                type: "text"
                            }
                        }
                    },
                    singleStringOpener: {
                        fn: function() {
                            return {
                                isFront: !0,
                                matches: {
                                    singleStringOpener: "string"
                                },
                                innerMode: c
                            }
                        }
                    },
                    doubleStringOpener: {
                        fn: function() {
                            return {
                                isFront: !0,
                                matches: {
                                    doubleStringOpener: "string"
                                },
                                innerMode: c
                            }
                        }
                    },
                    hookName: {
                        fn: t("name")
                    },
                    cssTime: {
                        fn: function(e) {
                            return {
                                value: +e[1] * ("s" === e[2].toLowerCase() ? 1e3 : 1)
                            }
                        }
                    },
                    datatype: {
                        cannotFollowText: !0,
                        fn: function(e) {
                            return {
                                name: e[0].toLowerCase()
                            }
                        }
                    },
                    colour: {
                        cannotFollowText: !0,
                        fn: function(e) {
                            var e = e[0].toLowerCase(),
                                t = {
                                    red: "e61919",
                                    orange: "e68019",
                                    yellow: "e5e619",
                                    lime: "80e619",
                                    green: "19e619",
                                    cyan: "19e5e6",
                                    aqua: "19e5e6",
                                    blue: "197fe6",
                                    navy: "1919e6",
                                    purple: "7f19e6",
                                    fuchsia: "e619e5",
                                    magenta: "e619e5",
                                    white: "fff",
                                    black: "000",
                                    gray: "888",
                                    grey: "888"
                                },
                                t = hasOwnProperty.call(t, e) ? "#" + t[e] : e;
                            return {
                                colour: t
                            }
                        }
                    },
                    number: {
                        fn: function(e) {
                            return {
                                value: parseFloat(e[0])
                            }
                        }
                    },
                    inequality: {
                        fn: function(e) {
                            return {
                                operator: e[2],
                                negate: -1 < e[1].indexOf("not")
                            }
                        }
                    },
                    augmentedAssign: {
                        fn: function(e) {
                            return {
                                operator: e[0][0]
                            }
                        }
                    },
                    identifier: {
                        fn: t("name"),
                        cannotFollowText: !0
                    },
                    whitespace: {
                        fn: r,
                        cannotFollowText: !0
                    },
                    incorrectOperator: {
                        fn: function(e) {
                            var t = {
                                "=>": ">=",
                                "=<": "<=",
                                gte: ">=",
                                lte: "<=",
                                gt: ">",
                                lt: "<",
                                eq: "is",
                                isnot: "is not",
                                neq: "is not",
                                isa: "is a",
                                are: "is",
                                x: "*",
                                "or a": "or"
                            } [e[0].toLowerCase().replace(/\s+/g, " ")];
                            return {
                                type: "error",
                                message: "Please say " + (t ? "'" + t + "'" : "something else") + " instead of '" + e[0] + "'.",
                                explanation: "In the interests of readability, I want certain operators to be in a specific form."
                            }
                        },
                        cannotFollowText: !0
                    }
                }, ["boolean", "is", "to", "into", "where", "when", "via", "making", "each", "and", "or", "not", "isNot", "contains", "doesNotContain", "isIn", "isA", "isNotA", "isNotIn", "matches", "doesNotMatch", "bind"].reduce(function(e, t) {
                    return e[t] = {
                        fn: r,
                        cannotFollowText: !0
                    }, e
                }, {})), ["comma", "spread", "typeSignature", "addition", "subtraction", "multiplication", "division"].reduce(function(e, t) {
                    return e[t] = {
                        fn: r
                    }, e
                }, {}))),
                f = a(c, {
                    singleStringCloser: d.singleStringOpener,
                    doubleStringCloser: d.doubleStringOpener,
                    escapedStringChar: d.escapedStringChar
                }),
                h = (i.push.apply(i, _toConsumableArray(g(l)).concat(_toConsumableArray(g(p)), _toConsumableArray(g(u)))), s.push.apply(s, _toConsumableArray(g(p)).concat(_toConsumableArray(g(d)))), c.push.apply(c, _toConsumableArray(g(f))), _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, l), u), p), d), f)),
                u = (g(h).forEach(function(e) {
                    m.PlainCompare[e] ? (h[e].pattern = m.PlainCompare[e], h[e].plainCompare = !0) : h[e].pattern = RegExp("^(?:" + m[e] + ")", "i")
                }), y(e.rules, h), e.modes);
            return u.start = u.markup = i, u.macro = s, u.string = c, e
        }

        function n(e) {
            return Object.freeze({
                lex: t(e).lex,
                Patterns: m
            })
        }
        "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) ? (m = require("./patterns"), module.exports = n(require("./lexer"))) : "function" == typeof define && define.amd ? define("markup", ["lexer", "patterns"], function(e, t) {
            return m = t, n(e)
        }) : this && this.loaded && this.modules ? (m = this.modules.Patterns, this.modules.Markup = n(this.modules.Lexer)) : (m = this.Patterns, this.Markup = n(this.Lexer))
    }.call(eval("this") || ("undefined" != typeof global ? global : window)), ! function() {
        var e;

        function n(t) {
            return t && "object" === _typeof(t) ? (Object.keys(t).forEach(function(e) {
                t[e] = n(t[e])
            }), t) : (t + "").replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
        }

        function t(e) {
            return function() {
                return "(" + e + Array.apply(0, arguments).join("|") + ")"
            }
        }
        var r = t("?:"),
            a = t("?!"),
            o = t("?="),
            i = "[ \\f\\t\\v\\u00a0\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000]*",
            s = i.replace("*", "+"),
            c = "\\b",
            l = "[\\w\\-\\u00c0-\\u00de\\u00df-\\u00ff\\u0150\\u0170\\u0151\\u0171\\uD800-\\uDFFF]",
            u = l.replace("\\-", ""),
            p = r("\\n", "$"),
            d = i + "(\\*+)" + s,
            f = i + "((?:0\\.)+)" + s,
            h = i + "-{3,}" + i + p,
            m = i + "(==+>|<=+|=+><=+|<==+>)" + i + p,
            p = i + "(=+\\|+|\\|+=+|=+\\|+=+|\\|=+\\|)" + i + p,
            g = {
                opener: "\\[\\[(?!\\[)",
                text: "(" + function() {
                    return "[^" + Array.apply(0, arguments).map(n).join("") + "]*"
                }("]") + ")",
                rightSeparator: r("\\->", "\\|"),
                leftSeparator: "<\\-",
                closer: "\\]\\]",
                legacySeparator: "\\|",
                legacyText: "(" + r("[^\\|\\]]", "\\]" + a("\\]")) + "+)"
            },
            y = u + "*" + u.replace("\\w", "a-zA-Z") + u + "*",
            b = "\\$(" + y + ")",
            v = "_(" + y + ")",
            w = "'s" + s + a("_") + "(" + y + ")",
            k = "(" + y + ")" + s + "of" + c + a("it\\b"),
            S = "'s" + s,
            T = r("it", "time", "turns?", "visits?", "exits?", "pos") + c,
            _ = "its" + s + "(" + y + ")",
            x = "(" + y + ")" + s + "of" + s + "it" + c,
            O = "of" + s + "it" + c,
            A = {
                opener: "\\(",
                name: "(" + r("\\$", "_") + "?" + l + "+):" + a("\\/"),
                closer: "\\)"
            },
            C = r("=<", "=>", "[gl]te?\\b", "n?eq\\b", "isnot\\b", "are\\b", "x\\b", "isa\\b", "or" + s + "a" + c),
            E = "[a-zA-Z][\\w\\-]*",
            N = "(?:\"[^\"]*\"|'[^']*'|[^'\">])*?",
            j = "\\|(" + l + "+)(>|\\))",
            P = "(<|\\()(" + l + "+)\\|",
            R = "((?:\\b\\d+(?:\\.\\d+)?|\\.\\d+)(?:[eE][+\\-]?\\d+)?)" + a("m?s") + c;
        g.main = g.opener + r(g.text + g.rightSeparator, g.text.replace("*", "*?") + g.leftSeparator) + g.text, e = {
            upperLetter: "[A-Z\\u00c0-\\u00de\\u0150\\u0170]",
            lowerLetter: "[a-z0-9_\\-\\u00df-\\u00ff\\u0151\\u0171]",
            anyLetter: l,
            anyLetterStrict: u,
            whitespace: s.replace("[", "[\\n\\r"),
            escapedLine: "\\\\\\n\\\\?|\\n\\\\",
            br: "\\n(?!\\\\)",
            tag: "<\\/?" + E + N + ">",
            scriptStyleTag: "<(" + r("script", "style", "textarea") + ")" + N + ">[^]*?<\\/\\1>",
            scriptStyleTagOpener: "<",
            url: "(" + r("https?", "mailto", "javascript", "ftp", "data") + ":\\/\\/[^\\s<]+[^<.,:;\"')\\]\\s])",
            bullet: "\\*",
            hr: h,
            heading: "[ \\f\\t\\v\\u00a0\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000]*(#{1,6})[ \\f\\t\\v\\u00a0\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000]*",
            align: m,
            column: p,
            bulleted: d,
            numbered: f,
            verbatimOpener: "`+",
            hookAppendedFront: "\\[" + a("=+"),
            hookPrependedFront: j + "\\[" + a("=+"),
            hookFront: "\\[" + a("=+"),
            hookBack: "\\]" + a(P),
            hookAppendedBack: "\\]" + P,
            unclosedHook: "\\[=+",
            unclosedHookPrepended: j + "\\[=+",
            unclosedCollapsed: "\\{=+",
            passageLink: g.main + g.closer,
            legacyLink: g.opener + g.legacyText + g.legacySeparator + g.legacyText + g.closer,
            simpleLink: g.opener + g.legacyText + g.closer,
            macroFront: A.opener + o(A.name),
            macroName: A.name,
            groupingFront: "\\(" + a(A.name),
            twine1Macro: "<<[^>\\s]+\\s*(?:\\\\.|'(?:[^'\\\\]*\\\\.)*[^'\\\\]*'|\"(?:[^\"\\\\]*\\\\.)*[^\"\\\\]*\"|[^'\"\\\\>]|>(?!>))*>>",
            validPropertyName: y,
            property: w,
            belongingProperty: k,
            possessiveOperator: S,
            belongingOperator: "of\\b",
            itsOperator: "its\\b",
            belongingItOperator: O,
            variable: b,
            tempVariable: v,
            hookName: "\\?(" + l + "+)\\b",
            cssTime: "(\\d+\\.?\\d*|\\d*\\.?\\d+)(m?s)\\b",
            colour: r(r("Red", "Orange", "Yellow", "Lime", "Green", "Cyan", "Aqua", "Blue", "Navy", "Purple", "Fuchsia", "Magenta", "White", "Gray", "Grey", "Black", "Transparent"), "#[\\dA-Fa-f]{3}(?:[\\dA-Fa-f]{3})?"),
            datatype: r("alnum", "alphanumeric", "any(?:case)?", "array", "bool(?:ean)?", "changer", "codehook", "colou?r", "const", "command", "dm", "data" + r("map", "type", "set"), "ds", "digit", "gradient", "empty", "even", "int" + a("o") + "(?:eger)?", "lambda", "lowercase", "macro", "linebreak", "newline", "num(?:ber)?", "odd", "str(?:ing)?", "uppercase", "whitespace") + c,
            number: R,
            boolean: r("true", "false") + c,
            identifier: T,
            itsProperty: _,
            belongingItProperty: x,
            escapedStringChar: "\\\\[^\\n]",
            singleStringOpener: "'",
            doubleStringOpener: '"',
            singleStringCloser: "'",
            doubleStringCloser: '"',
            is: "is" + a(s + "not" + c, s + "an?" + c, s + "in" + c, s + "<", s + ">") + c,
            isNot: "is" + s + "not" + a(s + r("an?", "in") + c) + c,
            isA: "is" + s + "an?" + c,
            isNotA: "is" + s + "not" + s + "an?" + c,
            matches: "matches\\b",
            doesNotMatch: "does" + s + "not" + s + "match" + c,
            and: "and\\b",
            or: "or\\b",
            not: "not\\b",
            inequality: "((?:is(?:" + s + "not)?" + i + ")*)(" + r("<(?!=)", "<=", ">(?!=)", ">=") + ")",
            isIn: "is" + s + "in" + c,
            contains: "contains\\b",
            doesNotContain: "does" + s + "not" + s + "contain" + c,
            isNotIn: "is" + s + "not" + s + "in" + c,
            addition: n("+") + a("="),
            subtraction: n("-") + a("=", "type"),
            multiplication: n("*") + a("="),
            division: r("/", "%") + a("="),
            spread: "\\.\\.\\." + a("\\."),
            to: r("to\\b", "="),
            into: "into\\b",
            making: "making\\b",
            where: "where\\b",
            when: "when\\b",
            via: "via\\b",
            each: "each\\b",
            augmentedAssign: r("\\+", "\\-", "\\*", "\\/", "%") + "=",
            bind: "2?bind\\b",
            typeSignature: n("-type") + c,
            incorrectOperator: C,
            PlainCompare: {
                comma: ",",
                commentFront: "\x3c!--",
                commentBack: "--\x3e",
                strikeOpener: "~~",
                italicOpener: "//",
                boldOpener: "''",
                supOpener: "^^",
                strongFront: "**",
                strongBack: "**",
                emFront: "*",
                emBack: "*",
                collapsedFront: "{",
                collapsedBack: "}",
                groupingBack: ")"
            }
        }, "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) ? module.exports = e : "function" == typeof define && define.amd ? define("patterns", [], function() {
            return e
        }) : this && this.loaded ? (this.modules || (this.modules = {}), this.modules.Patterns = e) : this.Patterns = e
    }.call(eval("this") || ("undefined" != typeof global ? global : window)), define("twinescript/operations", ["utils", "utils/operationutils", "datatypes/typedvar", "datatypes/datatype", "internaltypes/twineerror"], function(e, t, n, r, m) {
        var a = e.plural,
            o = t.isObject,
            i = t.collectionType,
            s = t.is,
            c = t.isA,
            l = t.clone,
            u = t.unique,
            p = t.contains,
            e = t.matches,
            g = t.objectName,
            d = t.toSource;

        function f(r, a, o, i) {
            return o = o || "do this to",
                function(e, t) {
                    var n;
                    return 1 === a.length && (t = e), (n = m.containsError(e, t)) || (_typeof(e) !== r || _typeof(t) !== r ? m.create("operation", "I can only ".concat(o, " ").concat(r, "s, not ").concat(g(_typeof(e) !== r ? e : t), "."), i) : a(e, t))
                }
        }

        function h(a) {
            return function(e, t) {
                var n, r;
                return (n = m.containsError(e, t)) || (_typeof(e) !== _typeof(t) || o(e) && "TwineScript_TypeName" in e && o(t) && "TwineScript_TypeName" in t && e.TwineScript_TypeName !== t.TwineScript_TypeName || i(e) !== i(t) ? (n = "".concat(g(e), " isn't the same type of data as ").concat(g(t)), _typeof(e) + _typeof(t) !== "stringnumber" && _typeof(e) + _typeof(t) !== "numberstring" || (r = "You might want to convert one side to a number using (num:), or to a string using (str:)."), m.create("operation", n[0].toUpperCase() + n.slice(1), r)) : a(e, t))
            }
        }

        function y(d, f, e) {
            var h = 2 < arguments.length && void 0 !== e && e;
            return function r(a, o) {
                var e;
                if (e = m.containsError(a, o)) return e;
                var t = _slicedToArray(a.determiner ? [a, o] : o.determiner ? [o, a] : [], 2),
                    i = t[0],
                    t = t[1];
                if (i) {
                    var n = i,
                        s = n.determiner,
                        n = n.determined;
                    if ("start" === s || "end" === s) {
                        if (f) return m.create("operation", "I can't use '".concat(f, "' with the 'start' or 'end' of ").concat(g(n), "."));
                        if (t.determiner) {
                            if ("start" === t.determiner || "end" === t.determiner) return m.create("operation", "I can't compare one value's 'start' or 'end' with another value's 'start' or 'end'.", "Please change one of them to use an exact range, such as '1stto4th' or '2ndlasttolast'.");
                            n = [t, i], i = n[0]
                        }
                        for (var c = i.string || i.array, l = 0; l < c.length + 1; l += 1) {
                            var u = l ? "end" === s ? c.slice(-l) : c.slice(0, l) : c.constructor(),
                                u = i === a ? r(u, o) : r(a, u);
                            if (e = m.containsError(u)) return e;
                            if (u !== h) return u
                        }
                        return h
                    }
                    var p = "all" === s;
                    return i.array.reduce(function(e, t) {
                        var n, t = i === a ? r(t, o) : r(a, t);
                        return (n = m.containsError(e, t)) || (p ? e && t : e || t)
                    }, p)
                }
                return d(a, o)
            }
        }

        function b(n, e) {
            return y(function(e, t) {
                e = n(e, t);
                return m.containsError(e) ? e : !e
            }, e, !0)
        }
        t = "If one of these values is a number, you may want to write a check that it 'is not 0'. Also, if one is a string, you may want to write a check that it 'is not \"\" '.", t = {
            and: f("boolean", h(function(e, t) {
                return e && t
            }), "use 'and' to join", t),
            or: f("boolean", h(function(e, t) {
                return e || t
            }), "use 'or' to join", t),
            not: f("boolean", function(e) {
                return !e
            }, "use 'not' to invert", t),
            "+": h(function(e, t) {
                var n;
                return Array.isArray(e) ? [].concat(_toConsumableArray(e), _toConsumableArray(t)) : e instanceof Map ? (n = new Map(e), t.forEach(function(e, t) {
                    return n.set(t, e)
                }), n) : e instanceof Set ? new Set([].concat(_toConsumableArray(e), _toConsumableArray(t)).filter(u).map(l)) : "function" == typeof e["TwineScript_+"] ? e["TwineScript_+"](t) : "string|number|boolean".includes(_typeof(e)) ? e + t : m.create("operation", "I can't use + on ".concat(g(e), "."))
            }),
            "-": h(function(e, n) {
                var r;
                return Array.isArray(e) ? e.filter(function(t) {
                    return !n.some(function(e) {
                        return s(t, e)
                    })
                }) : e instanceof Set ? (r = _toConsumableArray(n), new Set(_toConsumableArray(e).filter(function(t) {
                    return !r.some(function(e) {
                        return s(t, e)
                    })
                }))) : "string" == typeof e ? e.split(n).join("") : "number" == typeof e ? e - n : m.create("operation", "I can't use - on ".concat(g(e), "."))
            }),
            "*": f("number", h(function(e, t) {
                return e * t
            }), "multiply"),
            "/": f("number", h(function(e, t) {
                return 0 === t ? m.create("operation", "I can't divide ".concat(g(e), " by zero.")) : e / t
            }), "divide"),
            "%": f("number", h(function(e, t) {
                return 0 === t ? m.create("operation", "I can't modulo ".concat(g(e), " by zero.")) : e % t
            }), "modulus"),
            "<": y(f("number", h(function(e, t) {
                return e < t
            }), "do < to"), "<"),
            ">": y(f("number", h(function(e, t) {
                return t < e
            }), "do > to"), ">"),
            "<=": y(f("number", h(function(e, t) {
                return e <= t
            }), "do <= to"), "<="),
            ">=": y(f("number", h(function(e, t) {
                return t <= e
            }), "do >= to"), ">="),
            is: y(s),
            isNot: b(s),
            contains: y(p, "contains"),
            doesNotContain: b(p, "does not contain"),
            isIn: y(function(e, t) {
                return p(t, e)
            }, "is in"),
            isNotIn: b(function(e, t) {
                return p(t, e)
            }, "is not in"),
            isA: y(c, "is a"),
            isNotA: b(c, "is not a"),
            typifies: y(function(e, t) {
                return c(t, e)
            }),
            untypifies: b(function(e, t) {
                return c(t, e)
            }),
            matches: y(e),
            doesNotMatch: b(e),
            makeSpreader: function(e) {
                var t;
                return m.containsError(e) ? e : n.isPrototypeOf(e) || r.isPrototypeOf(e) ? (t = l(e), (n.isPrototypeOf(e) ? t.datatype : t).rest = !0, t) : {
                    value: e,
                    spreader: !0,
                    TwineScript_TypeName: "a spreaded '...' value",
                    TwineScript_ObjectName: a("string" == typeof e || Array.isArray(e) ? _toConsumableArray(e).length : 1, "spreaded '...' value"),
                    TwineScript_Unstorable: !0,
                    TwineScript_ToSource: function() {
                        return "" + _toConsumableArray(e).map(d)
                    }
                }
            }
        };
        return Object.freeze(t)
    }), define("twinescript/runner", ["macros", "state", "utils", "utils/operationutils", "twinescript/operations", "datatypes/colour", "datatypes/hookset", "datatypes/lambda", "datatypes/datatype", "datatypes/varbind", "datatypes/codehook", "datatypes/typedvar", "datatypes/assignmentrequest", "internaltypes/varref", "internaltypes/twineerror"], function(Macros, State, Utils, _ref127, Operations, Colour, HookSet, Lambda, Datatype, VarBind, CodeHook, TypedVar, AssignmentRequest, VarRef, TwineError) {
        var toSource = _ref127.toSource,
            typeName = _ref127.typeName,
            objectName = _ref127.objectName,
            insensitiveName = Utils.insensitiveName,
            impossible = Utils.impossible,
            hash = Utils.hash;

        function addFreeVariable(e, t) {
            var n, r = e.freeVariables;
            "macro" === t.type ? "current-time" === (n = insensitiveName(t.name)) || "current-date" === n || "monthday" === n || "weekday" === n || "history" === n || "visited" === n || "passage" === n ? e.freeVariables = !0 : t.blockedValue && !r.blockedValues ? r.blockedValues = e.stackTop.blockedValues.concat() : "random" !== n && "either" !== n && "shuffled" !== n || r.seed || (r.seed = State.seed, r.seedIter = State.seedIter) : "identifier" === t.type ? "time" !== (n = insensitiveName(t.text)) && "exits" !== n && "it" !== n && "visits" !== n && "turns" !== n || (e.freeVariables = !0) : "property" === t.type || "belongingProperty" === t.type ? "random" !== insensitiveName(t.name) || r.seed || (r.seed = State.seed, r.seedIter = State.seedIter) : "variable" !== t.type && "tempVariable" !== t.type || (e.freeVariables = !0)
        }
        var precedenceTable = [
            ["error", "text"],
            ["comma"],
            ["to", "into"],
            ["where", "when", "via", "making", "each"],
            ["typeSignature"],
            ["augmentedAssign"],
            ["and", "or"],
            ["is", "isNot"],
            ["contains", "doesNotContain", "isIn", "isNotIn"],
            ["isA", "isNotA", "matches", "doesNotMatch"],
            ["inequality"],
            ["addition", "subtraction"],
            ["multiplication", "division"], {
                rightAssociative: ["spread", "bind"]
            }, {
                rightAssociative: ["not", "positive", "negative"]
            }, {
                rightAssociative: ["belongingProperty", "belongingItProperty", "belongingOperator", "belongingItOperator"]
            },
            ["property", "itsProperty", "possessiveOperator", "itsOperator"],
            ["twineLink", "macro", "identifier", "variable", "tempVariable", "hookName", "number", "cssTime", "boolean", "string", "hook", "colour", "datatype", "root"],
            ["grouping"]
        ];

        function precedentToken(e, t) {
            var n, r, a, o = [];
            if (e.length)
                for ("most" === t ? (n = precedenceTable.length - 1, r = a = -1) : (n = 0, r = precedenceTable.length, a = 1); n !== r; n += a) {
                    var i = precedenceTable[n],
                        s = NaN;
                    if (i.rightAssociative) {
                        for (var c = 0; c < e.length; c += 1)
                            if (i.rightAssociative.includes(e[c].type)) {
                                s = c;
                                break
                            }
                    } else
                        for (var l = e.length - 1; 0 <= l; --l)
                            if (i.includes(e[l].type)) {
                                s = l;
                                break
                            } if (!Number.isNaN(s) && -1 < s) {
                        o = [e[s], s];
                        break
                    }
                }
            return o
        }
        var comparisonOpTypes = ["inequality", "is", "isNot", "isIn", "contains", "doesNotContain", "isNotIn", "isA", "typifies", "isNotA", "untypifies", "matches", "doesNotMatch"],
            inequalityNegator = {
                ">": "<=",
                "<": ">=",
                ">=": "<",
                "<=": ">"
            };

        function compileComparisonOperator(e) {
            return "inequality" === e.type ? e.negate ? inequalityNegator[e.operator] : e.operator : e.type
        }
        var comparisonReverser = {
            ">": "<",
            "<": ">",
            ">=": "<=",
            "<=": ">=",
            contains: "isIn",
            doesNotContain: "isNotIn",
            isIn: "contains",
            isA: "typifies",
            typifies: "isA",
            isNotA: "untypifies",
            untypifies: "isNotA"
        };

        function reverseComparisonOperator(e) {
            e = compileComparisonOperator(e);
            return comparisonReverser[e] || e
        }
        var tokenSides = {
            error: "neither",
            identifier: "neither",
            variable: "neither",
            tempVariable: "neither",
            hookName: "neither",
            number: "neither",
            boolean: "neither",
            string: "neither",
            hook: "neither",
            colour: "neither",
            datatype: "neither",
            root: "neither",
            twineLink: "neither",
            macro: "neither",
            grouping: "neither",
            itsProperty: "neither",
            belongingItProperty: "neither",
            to: "both",
            into: "both",
            typeSignature: "both",
            augmentedAssign: "both",
            and: "both",
            or: "both",
            belongingOperator: "both",
            possessiveOperator: "both",
            multiplication: "both",
            division: "both",
            spread: "after",
            bind: "after",
            not: "after",
            belongingProperty: "after",
            each: "after",
            itsOperator: "after",
            positive: "after",
            negative: "after",
            belongingItOperator: "before",
            property: "before"
        };

        function missingSideError(e, t, n) {
            return TwineError.create("syntax", "I need usable code to be ".concat(e ? "left " : "").concat(e && t ? "and " : "").concat(t ? "right " : "", "of ").concat(n.text, "."))
        }

        function wrongSideError(e, t, n) {
            return TwineError.create("syntax", "There can't be a ".concat(e && t ? e.map(function(e) {
                return e.text
            }).join("") + " or " + t.map(function(e) {
                return e.text
            }).join("") : (e || t).map(function(e) {
                return e.text
            }).join(""), " to the ").concat(e ? "left " : "").concat(e && t ? "or " : "").concat(t ? "right " : "", "of ").concat(n.text, "."), "There could be a comma missing between them.")
        }

        function makeEvalReplayFrame(e, t) {
            var n = t.val,
                r = t.fromCode,
                a = t.toCode,
                o = t.toDesc,
                i = t.reason,
                s = t.it,
                c = t.tokens,
                t = t.i;
            if (!(200 <= e.length)) {
                var l = c[t],
                    u = c.slice(0, t),
                    t = c.slice(t + 1);
                if (1 === c.length && (u = t = !1, l = c[0]), !e[e.length - 1].error) {
                    var p, d, c = TwineError.containsError(n),
                        f = e[e.length - 1].code,
                        h = e[0].basis,
                        m = (null != (p = u) && p.length && null != (p = t) && p.length && u[0].start > t[0].start && (u = (p = [t, u])[0], t = p[1]), p = a || "".concat(null != (p = u) && p.length && "whitespace" === u[u.length - 1].type ? " " : "").concat(c ? " \ud83d\udc1e " : (n && !n.TwineScript_ToSource && n.TwineScript_Unstorable ? objectName : toSource)(n)).concat(null == (p = t) || !p.length || "whitespace" !== t[0].type && "addition" !== l.type && "subtraction" !== l.type ? "" : " "), (u.length ? u[0] : l).start - h),
                        g = (t.length ? t[t.length - 1] : l).end - h,
                        y = _createForOfIteratorHelper(e);
                    try {
                        for (y.s(); !(d = y.n()).done;) {
                            var b = d.value;
                            b.start < m ? (m += b.diff, g += b.diff) : b.start < g && (g += b.diff)
                        }
                    } catch (e) {
                        y.e(e)
                    } finally {
                        y.f()
                    }!r && (r = f.slice(m, g), a) && a.trim() === r.trim() || (u = p.length - (g - m), e.push({
                        code: f.slice(0, m) + p + f.slice(g),
                        fromCode: r,
                        toCode: !c && a,
                        toDesc: !c && !a && (o || objectName(n)),
                        start: m,
                        end: g,
                        diff: u,
                        reason: i,
                        itIdentifier: void 0 !== s && objectName(s),
                        error: c && c.render(f.slice(m, g), !0)
                    }))
                }
            }
        }

        function setIt(e, t) {
            return (VarRef.isPrototypeOf(t) || TypedVar.isPrototypeOf(t)) && (e.Identifiers.it = t.get()), t
        }
        return function run(section, tokens) {
            var isVarRef = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                isTypedVar = 3 < arguments.length && void 0 !== arguments[3] && arguments[3],
                evalReplay = section.evalReplay,
                hasEvalReplay = null == evalReplay ? void 0 : evalReplay.length,
                evalReplayReason, evalReplaySkip = !1,
                evalReplayIt, ops = Operations,
                token, ret, i, before, after, _precedentToken, _precedentToken2, token, i, before, after;
            if (Array.isArray(tokens) || (tokens = [tokens]), !tokens.length || !tokens[0]) return impossible("Runner.run", "No tokens to run!"), 0;
            1 === tokens.length ? token = tokens[0] : (_precedentToken = precedentToken(tokens, "least"), _precedentToken2 = _slicedToArray(_precedentToken, 2), token = _precedentToken2[0], i = _precedentToken2[1], before = tokens.slice(0, i), after = tokens.slice(i + 1), before.length && (1 !== before.length || "whitespace" !== before[0].type) || (before = !1), after.length && (1 !== after.length || "whitespace" !== after[0].type) || (after = !1));
            var type = token.type;
            if (!type) return impossible("Runner.run", "Token has no type!"), 0;
            var sides = tokenSides[type] || "",
                VARREF = ("both" !== sides || before && after ? "neither" === sides && (before || after) ? ret = wrongSideError(before, after, token) : "before" === sides ? before ? after && (ret = wrongSideError(null, after, token)) : ret = missingSideError(!0, !1, token) : "after" === sides && (after ? before && (ret = wrongSideError(before, null, token)) : ret = missingSideError(!1, !0, token)) : ret = missingSideError(!before, !after, token), section.freeVariables && "object" === _typeof(section.freeVariables) && addFreeVariable(section, token), !0),
                TYPEDVAR = !0,
                _ret4, val, evalReplayReason, ret, source, _source4, _value4, msg;
            if (!ret) {
                if ("comma" === type) return impossible("Section.run", "a comma token was run() somehow."), 0;
                if ("root" === type) ret = run(section, token.children);
                else if ("identifier" === type) ret = isVarRef ? VarRef.create(section.Identifiers, token.text.toLowerCase()) : section.Identifiers[token.text.toLowerCase()];
                else if ("variable" === type || "tempVariable" === type) {
                    ret = VarRef.create("tempVariable" === type ? section.stackTop.tempVariables : State.variables, token.name), isTypedVar ? (ret = TypedVar.create(Datatype.create("any"), ret), evalReplayReason = hasEvalReplay && "Variables in 'to' or 'into' expressions with no -type to their left are considered to be 'any-type' variables that can store any storable value.") : isVarRef || TwineError.containsError(ret) ? evalReplaySkip = !0 : (val = ret.get(), evalReplayReason = hasEvalReplay && ((null == (_ret4 = ret) ? void 0 : _ret4.object) !== State.variables || hasOwnProperty.call(ret.object, ret.compiledPropertyChain[0]) ? "" : "This variable didn't exist; for story-wide $ variables, a default value of 0 is used if they don't exist."), ret = val)
                } else if ("hookName" === type) ret = HookSet.create({
                    type: "name",
                    data: token.name
                }), evalReplaySkip = !0;
                else if ("number" === type || "cssTime" === type) ret = token.value, evalReplayReason = hasEvalReplay && "cssTime" === type && (token.text.endsWith("ms") ? "The letters 'ms' at the end of numbers are ignored, so you can use them to indicate that a number represents milliseconds." : "The letter 's' at the end of numbers represents 'seconds'. Harlowe converts them to milliseconds (multiplies them by 1000)."), evalReplaySkip = !evalReplayReason;
                else if ("boolean" === type) ret = "true" === token.text.toLowerCase(), evalReplaySkip = !0;
                else if ("string" === type) {
                    var t = token.text.replace(/(.?)\n/g, function(e, t) {
                        return ("\\" === t ? "\\\\" : "\n" === t ? "\\n" : t) + "\\n"
                    }).replace(/(\\*)\\0/g, function(e, t) {
                        return (t ? "\\".repeat(2 * t.length) : "") + "0"
                    });
                    ret = eval(t), evalReplaySkip = !0
                } else if ("hook" === type) ret = CodeHook.create(token.children, token.text), evalReplaySkip = !0;
                else if ("colour" === type) ret = Colour.create(token.colour), evalReplaySkip = !0;
                else if ("datatype" === type) ret = Datatype.create(token.name), evalReplaySkip = !0;
                else if ("spread" === type) ret = ops.makeSpreader(run(section, after, !1, isTypedVar));
                else if ("bind" === type) ret = VarBind.create(run(section, after, VARREF), token.text.startsWith("2") ? "two way" : ""), evalReplaySkip = !0;
                else if ("to" === type || "into" === type) {
                    var dest = "to" === type ? setIt(section, run(section, before, VARREF, TYPEDVAR)) : run(section, after, VARREF, TYPEDVAR);
                    if (TwineError.containsError(dest)) ret = dest;
                    else {
                        (VarRef.isPrototypeOf(dest) && dest.propertyChain.length <= 1 || TypedVar.isPrototypeOf(dest) && dest.varRef.propertyChain.length <= 1) && (section.freeVariables = Object.create(null));
                        var src = "to" === type ? run(section, after, VARREF) : setIt(section, run(section, before, VARREF));
                        if (TwineError.containsError(src)) return src;
                        var freeVariables = section.freeVariables,
                            srcRef;
                        section.freeVariables = null, token.place && freeVariables && "object" === _typeof(freeVariables) && "boolean" != typeof src && "number" != typeof src && !Utils.options.uncompressedPureValues && (srcRef = freeVariables, srcRef.at = token.place, srcRef.from = after[0].start, srcRef.to = after[after.length - 1].end, srcRef.hash = hash(after.reduce(function(e, t) {
                            return e + t.text
                        }, "")).toString(16), JSON.stringify(srcRef).length >= toSource(src).length) && (srcRef = void 0), ret = AssignmentRequest.create(dest, src, type, srcRef), evalReplaySkip = !0, evalReplayIt = section.Identifiers.it
                    }
                } else if ("typeSignature" === type) {
                    var datatype = run(section, before),
                        free = section.freeVariables,
                        variable = (section.freeVariables = null, run(section, after, VARREF));
                    section.freeVariables = free, ret = TypedVar.create(datatype, variable), evalReplaySkip = !0
                } else if ("where" === type || "when" === type || "via" === type) {
                    after ? (source = tokens.map(function(e) {
                        return e.text
                    }).join(""), ret = Lambda.create(before ? run(section, before, VARREF) : void 0, token.type, after, source), evalReplaySkip = !0) : ret = missingSideError(!1, !0, token)
                } else if ("making" === type || "each" === type) {
                    after ? (_source4 = [].concat(tokens).map(function(e) {
                        return e.text
                    }).join(""), ret = "each" === type ? Lambda.create(run(section, after, VARREF), "each", null, _source4) : Lambda.create(before ? run(section, before, VARREF) : void 0, token.type, run(section, after, VARREF), _source4), evalReplaySkip = !0) : ret = missingSideError(!1, !0, token)
                } else if ("augmentedAssign" === type) ret = ops.makeAssignmentRequest(run(section, before, VARREF), ops[token.operator](run(section, before), run(section, after)), token.operator), evalReplaySkip = !0;
                else if ("and" === type || "or" === type) {
                    var isComparisonOp = function e(t) {
                            var n = _slicedToArray(precedentToken(t, "least"), 2),
                                r = n[0],
                                n = n[1];
                            if (r && "whitespace" !== r.type) return comparisonOpTypes.includes(r.type) ? r : r.type === type ? e(t.slice(0, n)) || e(t.slice(n + 1)) : void 0
                        },
                        leftIsComparison = isComparisonOp(before),
                        rightIsComparison = isComparisonOp(after),
                        ambiguityError = TwineError.create("operation", 'This use of "is not" and "'.concat(type, '" is grammatically ambiguous.'), 'Maybe try rewriting this as "__ is not __ '.concat(type, ' __ is not __"')),
                        operator, getElisionOperands = function e(t) {
                            var n, r = _slicedToArray(precedentToken(t, "least"), 2),
                                a = r[0],
                                r = r[1];
                            return a && "whitespace" !== a.type ? a.type === type ? [].concat(_toConsumableArray(e(t.slice(0, r))), _toConsumableArray(e(t.slice(r + 1)))) : (a = run(section, t), hasEvalReplay && "boolean" != typeof a && (n = operator.replace(/[A-Z]/g, function(e) {
                                return " " + e.toLowerCase()
                            }), makeEvalReplayFrame(evalReplay, {
                                toCode: " it ".concat(n, " ").concat(toSource(a), " "),
                                reason: "A missing 'it ".concat(n, "' was inferred to correct the '").concat(type, "' operation."),
                                tokens: t,
                                i: r
                            }), makeEvalReplayFrame(evalReplay, {
                                toCode: " ".concat(toSource(section.Identifiers.it), " ").concat(n, " ").concat(toSource(a), " "),
                                tokens: t,
                                i: r
                            })), [{
                                val: a,
                                tokens: t,
                                i: r
                            }]) : []
                        },
                        elidedComparisonOperator = function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return t.reduce(function(e, t) {
                                var n = t.val,
                                    r = t.tokens,
                                    t = t.i;
                                return "boolean" == typeof n ? n : (e = Operations[token.type](e, Operations[operator](section.Identifiers.it, n)), hasEvalReplay && makeEvalReplayFrame(evalReplay, {
                                    val: e,
                                    tokens: r,
                                    i: t
                                }), e)
                            }, "and" === token.type)
                        },
                        leftSide, evalBefore, operator, rightSide, rightIndex, swappedSides, evalAfter;
                    ret = leftIsComparison && !rightIsComparison ? (leftSide = leftIsComparison, operator = compileComparisonOperator(leftSide), "isNot" === leftSide.type || "isNotA" === leftSide.type || "untypifies" === leftSide.type ? ambiguityError : (evalBefore = run(section, before), ops[type](evalBefore, elidedComparisonOperator.apply(void 0, _toConsumableArray(getElisionOperands(after)))))) : !leftIsComparison && rightIsComparison ? (rightSide = rightIsComparison, rightIndex = tokens.indexOf(rightSide), operator = reverseComparisonOperator(rightSide), "isNot" === rightSide.type || "isNotA" === rightSide.type || "untypifies" === rightSide.type ? ambiguityError : (swappedSides = [].concat(_toConsumableArray(tokens.slice(rightIndex + 1)), [Object.assign(Object.create(rightSide), _defineProperty({}, "inequality" === rightSide.type ? "operator" : "type", reverseComparisonOperator(rightSide)))], _toConsumableArray(tokens.slice(i + 1, rightIndex))), evalAfter = run(section, swappedSides), ops[type](evalAfter, elidedComparisonOperator.apply(void 0, _toConsumableArray(getElisionOperands(before)))))) : ops[type](run(section, before), run(section, after))
                } else if (comparisonOpTypes.includes(type)) {
                    after || missingSideError(!1, !0, token);
                    var leftOp = before ? run(section, before) : section.Identifiers.it;
                    ret = ops[compileComparisonOperator(token)](leftOp, run(section, after)), section.Identifiers.it = leftOp, evalReplayIt = leftOp, evalReplayReason = hasEvalReplay && !before && "A missing 'it' was inferred to complete the operation."
                } else if ("addition" === type || "subtraction" === type) {
                    after || missingSideError(!1, !0, token);
                    var convert = !before,
                        _precedentToken7, _precedentToken8, previousPrecedentToken, _i10, _sides, pType, convert;
                    before && (_precedentToken7 = precedentToken(before, "least"), _precedentToken8 = _slicedToArray(_precedentToken7, 2), previousPrecedentToken = _precedentToken8[0], _i10 = _precedentToken8[1], _sides = tokenSides[previousPrecedentToken.type], pType = previousPrecedentToken.type, convert = ("both" === _sides || "after" === _sides || "addition" === pType || "subtraction" === pType) && (_i10 === before.length - 1 || _i10 === before.length - 2 && "whitespace" === before[before.length - 1].type)), convert ? (token.type = "addition" === type ? "positive" : "negative", ret = run(section, tokens), token.type = type, evalReplaySkip = !0) : ret = ops[token.text](run(section, before), run(section, after))
                } else if ("multiplication" === type || "division" === type) ret = ops[token.text](run(section, before), run(section, after));
                else if ("positive" === type || "negative" === type) ret = ops["*"]("negative" === type ? -1 : 1, run(section, after)), evalReplaySkip = !0;
                else if ("not" === type) ret = ops.not(run(section, after));
                else if ("belongingProperty" === type) {
                    var container = run(section, after, isVarRef),
                        isRef = (ret = VarRef.create(container, token.name), isVarRef || TwineError.containsError(ret));
                    ret = isRef ? ret : ret.get(), isRef = isVarRef || TwineError.containsError(ret), hasEvalReplay && !isRef ? makeEvalReplayFrame(evalReplay, {
                        toCode: " ".concat(token.name, " of ").concat(toSource(VarRef.isPrototypeOf(container) ? container.get() : container), " "),
                        tokens: tokens,
                        i: i
                    }) : isRef || (evalReplayReason = "The value to the right of 'of', ".concat(typeName(container), ', had a "').concat(token.name, '" data name corresponding to that data value.'))
                } else if ("belongingOperator" === type || "belongingItOperator" === type) {
                    var value = run(section, before);
                    "random" === value && section.freeVariables && "object" === _typeof(section.freeVariables) && !section.freeVariables.seed && (section.freeVariables.seed = State.seed, section.freeVariables.seedIter = State.seedIter), ret = VarRef.create("belongingItOperator" === type ? section.Identifiers.it : run(section, after, isVarRef), {
                        computed: !0,
                        value: value
                    }), ret = isVarRef || TwineError.containsError(ret) ? ret : ret.get(), "belongingItOperator" === type && hasEvalReplay && makeEvalReplayFrame(evalReplay, {
                        toCode: " ".concat(toSource(value), " of ").concat(toSource(section.Identifiers.it), " "),
                        tokens: tokens,
                        i: i
                    })
                } else if ("property" === type) {
                    var _container = run(section, before, VARREF),
                        _isRef = (ret = VarRef.create(_container, token.name), isVarRef || TwineError.containsError(ret));
                    ret = _isRef ? ret : ret.get(), _isRef = isVarRef || TwineError.containsError(ret), hasEvalReplay && VarRef.isPrototypeOf(_container) && !_isRef ? makeEvalReplayFrame(evalReplay, {
                        toCode: " ".concat(toSource(_container.get()), "'s ").concat(token.name, " "),
                        tokens: tokens,
                        i: i
                    }) : _isRef || (evalReplayReason = "The value to the left of 's, ".concat(typeName(_container), ', had a "').concat(token.name, '" data name corresponding to that data value.'))
                } else if ("itsProperty" === type || "belongingItProperty" === type) ret = VarRef.create(section.Identifiers.it, token.name), ret = isVarRef || TwineError.containsError(ret) ? ret : ret.get(), hasEvalReplay && makeEvalReplayFrame(evalReplay, {
                    toCode: "itsProperty" === type ? " ".concat(toSource(section.Identifiers.it), "'s ").concat(token.name, " ") : " ".concat(token.name, " of ").concat(toSource(section.Identifiers.it), " "),
                    tokens: tokens,
                    i: i
                });
                else if ("possessiveOperator" === type || "itsOperator" === type) {
                    !after || !before && "itsOperator" !== token.type ? ret = missingSideError(!before, !after, token) : (_value4 = run(section, after), "random" === _value4 && section.freeVariables && "object" === _typeof(section.freeVariables) && !section.freeVariables.seed && (section.freeVariables.seed = State.seed, section.freeVariables.seedIter = State.seedIter), ret = VarRef.create("itsOperator" === token.type ? section.Identifiers.it : run(section, before, isVarRef), {
                        computed: !0,
                        value: _value4
                    }), ret = isVarRef || TwineError.containsError(ret) ? ret : ret.get(), "itsOperator" === type && hasEvalReplay && makeEvalReplayFrame(evalReplay, {
                        toCode: " ".concat(toSource(section.Identifiers.it), "'s ").concat(toSource(_value4), " "),
                        tokens: tokens,
                        i: i
                    }))
                } else if ("twineLink" === type) ret = Macros.run("link-goto", section, [token.innerText, token.passage]), evalReplayReason = hasEvalReplay && "Passage links are the same as (link-goto:) macro calls.";
                else if ("macro" === type)
                    if (token.blockedValue && !section.blocked) {
                        if (ret = section.blockedValue(), void 0 === ret) return impossible("Runner.run", "section.blockedValue() returned undefined"), 0
                    } else {
                        var macroNameToken = token.children[0],
                            variableCall = "$" === macroNameToken.text[0] || "_" === macroNameToken.text[0],
                            macroRef;
                        if ("macroName" !== macroNameToken.type && !variableCall) return impossible("Runner.run", "macro token had no macroName child token"), 0;
                        variableCall ? (macroRef = VarRef.create("_" === macroNameToken.text[0] ? section.stackTop.tempVariables : State.variables, macroNameToken.text.trim().slice(1, -1)), TwineError.containsError(macroRef) || (macroRef = macroRef.get())) : macroRef = token.name, ret = Macros[variableCall ? "runCustom" : "run"](macroRef, section, token.children.slice(1).reduce(function(e, t) {
                            return "comma" === t.type ? e.push([]) : e[e.length - 1].push(t), e
                        }, [
                            []
                        ]).filter(function(e) {
                            return e.length && (1 < e.length || "whitespace" !== e[0].type)
                        }).map(function(e) {
                            return run(section, e, !1, isTypedVar)
                        })), evalReplayReason = hasEvalReplay && variableCall && "I called ".concat(objectName(macroRef), ".")
                    }
                else if ("grouping" === type) ret = run(section, token.children, isVarRef), evalReplaySkip = !0;
                else if ("error" === type) ret = TwineError.create("syntax", token.message, token.explanation || "");
                else {
                    if ("text" !== type) return impossible("Section.run", "unknown syntax token type: ".concat(type, "!!")), 0;
                    token.text.trim().match(/^\d+(?:th|nd|st|rd)(?:last)?(?:to\d+(?:nth|nd|st|rd)(?:last)?)?$/g) && (msg = 'Position data names like "'.concat(token.text, '" need to be either left of "of" or right of "\'s".')), ret = TwineError.create("syntax", msg || '"'.concat(token.text, "\" isn't valid Harlowe syntax for the inside of a macro call."), "Maybe you misspelled something? Also, as of 3.3.0, Javascript syntax is not allowed inside macro calls.")
                }
            }
            return void 0 === ret ? (impossible("Section.run", "token ".concat(type).concat(token.name ? " (".concat(token.name, ":)") : "", " produced undefined")), 0) : ret === section ? (impossible("Section.run", "token ".concat(type).concat(token.name ? " (".concat(token.name, ":)") : "", " produced the section")), 0) : (hasEvalReplay && !evalReplaySkip && makeEvalReplayFrame(evalReplay, {
                val: ret,
                reason: evalReplayReason,
                it: evalReplayIt,
                tokens: tokens,
                i: i
            }), ret)
        }
    }), define("utils/jqueryplugins", ["jquery"], function(e) {
        e.prototype.extend({
            popAttr: function(e) {
                var t = this.attr(e);
                return this.removeAttr(e), t
            },
            popData: function(e) {
                var t = this.data(e);
                return this.removeData(e), t
            },
            tag: function() {
                return this[0] && this[0].tagName && this[0].tagName.toLowerCase()
            },
            textNodes: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "*";
                return 1 === this.length && this[0] && this[0].nodeType === Node.TEXT_NODE ? [this[0]] : this.get().concat(this.contents().get(), this.find(e).contents().get()).filter(function(e, t, n) {
                    return (null == e ? void 0 : e.nodeType) === Node.TEXT_NODE && n.indexOf(e) === t
                }).sort(function(e, t) {
                    return 2 & e.compareDocumentPosition(t) ? 1 : -1
                })
            },
            findAndFilter: function(e) {
                var t = this.find(e),
                    e = this.filter(e);
                return e.length ? t.add(e) : t
            }
        })
    }), define("utils/naturalsort", [], function() {
        return function(h) {
            var m = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : String;
            return function(e, t) {
                var n, r, a, o, i = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,
                    s = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[/-]\d{1,4}[/-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
                    c = /^0x[0-9a-f]+$/i,
                    l = /^0/,
                    e = m(e).trim(),
                    t = m(t).trim(),
                    u = e.replace(i, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
                    p = t.replace(i, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
                    i = parseInt(e.match(c)) || 1 !== u.length && e.match(s) && Date.parse(e),
                    e = parseInt(t.match(c)) || i && t.match(s) && Date.parse(t) || null;
                if (h && window.Intl && window.Intl.Collator && (a = window.Intl.Collator(h)), e) {
                    if (i < e) return -1;
                    if (e < i) return 1
                }
                for (var d = 0, f = Math.max(u.length, p.length); d < f; d++) {
                    if (n = !(u[d] || "").match(l) && parseFloat(u[d]) || u[d] || 0, r = !(p[d] || "").match(l) && parseFloat(p[d]) || p[d] || 0, isNaN(n) !== isNaN(r)) return isNaN(n) ? 1 : -1;
                    if (_typeof(n) !== _typeof(r)) n += "", r += "";
                    else if ("string" == typeof n && a && 0 !== (o = a.compare(n, r))) return o;
                    if (n < r) return -1;
                    if (r < n) return 1
                }
                return 0
            }
        }
    }), define("utils/operationutils", ["utils/naturalsort", "utils", "internaltypes/twineerror", "patterns"], function(f, e, h, t) {
        var m = e.impossible,
            g = e.nth,
            u = e.permutations,
            s = e.plural,
            y = t.validPropertyName,
            r = "object",
            n = "boolean",
            b = "string",
            v = "number",
            w = "function";

        function a(e) {
            return !!e && (_typeof(e) === r || _typeof(e) === w)
        }
        var k = Array.isArray;

        function S(e) {
            return e && Object.getPrototypeOf(e) === Object.prototype
        }

        function i(e) {
            return k(e) ? "array" : e instanceof Map ? "datamap" : e instanceof Set ? "dataset" : _typeof(e) === b ? b : e && _typeof(e) === r ? r : ""
        }

        function c(e) {
            if (a(e)) {
                if (_typeof(e.TwineScript_Clone) === w) return e.TwineScript_Clone();
                if (k(e)) return _toConsumableArray(e);
                if (e instanceof Map) return new Map(e);
                if (e instanceof Set) return new Set(e);
                if (_typeof(e) === w) return Object.assign(e.bind(), e);
                switch (Object.getPrototypeOf(e)) {
                    case Object.prototype:
                        return _objectSpread({}, e);
                    case null:
                        return Object.assign(Object.create(null), e)
                }
                m("OperationUtils.clone", "The value " + e + " cannot be cloned!")
            }
            return e
        }

        function o(e, t, n, r) {
            for (var a = "", o = 0; a.length <= t && o < e.length;) {
                var i = r(e[o]);
                if (!(i.length + a.length <= t)) {
                    a += (0 < o ? " and " : "") + s(e.length - o, (0 < o ? "other " : "") + n);
                    break
                }
                a += (0 < o && o === e.length - 1 ? " and " : "") + i + (o < e.length - 1 ? ", " : ""), o += 1
            }
            return a
        }

        function l(e) {
            var t;
            return a(e) && "TwineScript_ObjectName" in e ? e.TwineScript_ObjectName : k(e) ? 0 === e.length ? "an empty array" : "an array (with " + o(e, 48, "item", l) + ")" : e instanceof Map ? 0 === e.size ? "an empty datamap" : "a datamap (with " + o(_toConsumableArray(e.keys()), 48, "dataname", _) + ")" : e instanceof Set ? 0 === e.size ? "an empty dataset" : "a dataset (with " + o(_toConsumableArray(e.values()), 48, "item", l) + ")" : _typeof(e) === b ? 0 === e.length ? "an empty string" : 48 < (t = _toConsumableArray(e)).length ? "a ".concat(t.length, "-character string starting with ").concat(JSON.stringify(t.slice(0, 48).join(""))) : "the string ".concat(JSON.stringify(e)) : _typeof(e) === n ? "the boolean value '" + e + "'" : _typeof(e) === v ? "the number " + JSON.stringify(e) : void 0 === e ? "an empty variable" : "...whatever this is"
        }

        function T(e, t) {
            return [e[0], t[0]].sort(f("en"))[0] === e[0] ? -1 : 1
        }

        function _(e, t) {
            var n = h.containsError(e);
            if (n && m("toSource", "received a TwineError: " + n.message), _typeof(e.TwineScript_ToSource) === w) return e.TwineScript_ToSource();
            if (S(e) && "first" in e && "last" in e) return (e.first < 0 ? (-1 !== e.first ? g(-e.first) : "") + "last" : g(e.first + 1)) + "to" + (e.last < 0 ? (-1 !== e.last ? g(-e.last) : "") + "last" : g(e.last + 1));
            if (k(e)) {
                var r, a = "",
                    o = _createForOfIteratorHelper(e);
                try {
                    for (o.s(); !(r = o.n()).done;) var i = r.value,
                        a = (a += a ? "," : "(a:") + ("property" === t ? i + (0 < i) : _(i))
                } catch (e) {
                    o.e(e)
                } finally {
                    o.f()
                }
                return a + (a ? ")" : "(a:)")
            }
            if (e instanceof Map) {
                var s, c = "",
                    l = _createForOfIteratorHelper(Array.from(e.entries()).sort(T));
                try {
                    for (l.s(); !(s = l.n()).done;) {
                        var u = _slicedToArray(s.value, 2),
                            p = u[0],
                            d = u[1];
                        c += (c ? "," : "(dm:") + _(p) + "," + _(d)
                    }
                } catch (e) {
                    l.e(e)
                } finally {
                    l.f()
                }
                return c + (c ? ")" : "(dm:)")
            }
            return e instanceof Set ? "(ds:" + Array.from(e).sort(f("en")).map(_) + ")" : _typeof(e) === v && "property" === t ? e < 0 ? -1 === e ? "last" : g(-e) + "last" : g(e + 1) : _typeof(e) === b && "property" === t ? RegExp(y).test(e) ? e : "(" + JSON.stringify(e) + ")" : JSON.stringify(e)
        }

        function p(t, n) {
            return _typeof(t) !== r && _typeof(n) !== r ? t === n : k(t) && k(n) ? t.length === n.length && t.every(function(e, t) {
                return p(n[t], e)
            }) : t instanceof Map && n instanceof Map ? p(Array.from(t.entries()).sort(), Array.from(n.entries()).sort()) : t instanceof Set && n instanceof Set ? p(_toConsumableArray(t), _toConsumableArray(n)) : t && _typeof(t.TwineScript_is) === w ? t.TwineScript_is(n) : t && _typeof(t) === r && n && _typeof(n) === r && S(t) && S(n) ? p(Object.getOwnPropertyNames(t).map(function(e) {
                return [e, t[e]]
            }), Object.getOwnPropertyNames(n).map(function(e) {
                return [e, n[e]]
            })) : Object.is(t, n)
        }
        return Object.freeze({
            isObject: a,
            isValidDatamapName: function(e, t) {
                var n;
                return e instanceof Map || m("isValidDatamapName", "called with non-Map"), h.containsError(t) ? t : _typeof(t) !== b && _typeof(t) !== v ? h.create("property", "Only strings and numbers can be used as data names for " + l(e) + ", not " + l(t) + ".") : (n = _typeof(t) === b ? +t : "" + t, !(!Number.isNaN(n) && e.has(n)) || h.create("property", "You mustn't use both " + l(t) + " and " + l(n) + " as data names in the same datamap."))
            },
            collectionType: i,
            isSequential: function(e) {
                return _typeof(e) === b || k(e) || _typeof(e.hooks) === w
            },
            unstorableValue: function e(t) {
                return (null == t ? void 0 : t.TwineScript_Unstorable) && t || k(t) && t.find(e) || t instanceof Map && _toConsumableArray(t.values()).find(e) || t instanceof Set && _toConsumableArray(t).find(e)
            },
            isHarloweJSValue: function e(t) {
                return _typeof(t) === b || _typeof(t) === n || _typeof(t) === v && !Number.isNaN(t) && Math.abs(t) !== 1 / 0 || Array.isArray(t) && t.every(e) || t instanceof Set && _toConsumableArray(t).every(e) || t instanceof Map && _toConsumableArray(t.values()).every(e) && _toConsumableArray(t.keys()).every(function(e) {
                    return _typeof(e) === b
                })
            },
            clone: c,
            objectName: l,
            typeName: function e(t) {
                var n, r = S(t);
                return r && t.innerType ? t.typeName || ("insensitive set" === t.pattern ? "a case-insensitive string name" : "either" === t.pattern ? (k(t.innerType) || m("typeName", '"either" pattern had non-array inner type'), t.innerType.map(e).join(" or ")) : "optional" === t.pattern ? "(optional) " + e(t.innerType) : e(t.innerType)) : r && "range" === t.pattern ? t.name || (r = t.min, n = t.max, "a" + (0 < r ? " positive" : "") + (t.integer ? " whole" : "") + " number" + (0 === r ? " between 0 and " + n : n < 1 / 0 ? " up to " + n : "")) : t === String || t === Number || t === Boolean ? "a " + _typeof(t()) : t === parseInt ? "a whole number" : t === Map ? "a datamap" : t === Set ? "a dataset" : t === Array ? "an array" : a(t) && "TwineScript_TypeName" in t ? t.TwineScript_TypeName : l(t)
            },
            typeID: function(e) {
                var t = _typeof(e);
                return [n, b, v].includes(t) ? t : k(e) ? "array" : e instanceof Map ? "datamap" : e instanceof Set ? "dataset" : e.TwineScript_TypeID || ""
            },
            toSource: _,
            is: p,
            contains: function(e, t) {
                if (e || "" === e) {
                    if (_typeof(e) === b) return _typeof(t) !== b ? h.create("operation", l(e) + " can only contain strings, not " + l(t) + ".") : e.includes(t);
                    if (k(e)) return e.some(function(e) {
                        return p(e, t)
                    });
                    if (e instanceof Set || e instanceof Map) return Array.from(e.keys()).some(function(e) {
                        return p(e, t)
                    })
                }
                return h.create("operation", l(e) + " cannot contain any values, let alone " + l(t))
            },
            isA: function(e, t) {
                return _typeof(t.TwineScript_IsTypeOf) === w ? t.TwineScript_IsTypeOf(e) : h.create("operation", '"is a" should only be used to compare type names, not ' + l(t) + ".")
            },
            matches: function t(n, e) {
                var r = !1;
                if (n && _typeof(n.TwineScript_IsTypeOf) === w) {
                    var a = n.TwineScript_IsTypeOf(e);
                    if (h.containsError(a)) return a;
                    r |= a
                }
                if (e && _typeof(e.TwineScript_IsTypeOf) === w) {
                    if (a = e.TwineScript_IsTypeOf(n), h.containsError(a)) return a;
                    r |= a
                }
                if (r) return !0;
                if (k(n) && k(e)) {
                    for (var o = 0, i = 0, s = !0; s && o < n.length && i < e.length;) {
                        var c = n[o],
                            l = e[i];
                        if (c.rest) {
                            for (; i < e.length && t(c, l);) l = e[i += 1];
                            o += 1
                        } else if (l.rest) {
                            for (; o < n.length && t(c, l);) c = n[o += 1];
                            i += 1
                        } else t(c, l) ? (o += 1, i += 1) : s = !1
                    }
                    return s && o >= n.length && i >= e.length
                }
                return n instanceof Map && e instanceof Map ? t(Array.from(n.entries()).sort(), Array.from(e.entries()).sort()) : n instanceof Set && e instanceof Set ? (n = _toConsumableArray(n), u.apply(void 0, _toConsumableArray(e)).some(function(e) {
                    return t(n, e)
                })) : p(n, e)
            },
            subset: function e(t, n, r) {
                var a, o;
                return n && r ? ((a = _typeof(t) === b) && (t = Array.from(t)), n < 0 && (n = Math.max(0, t.length + n + 1)), (r = r < 0 ? Math.max(0, t.length + r + 1) : r) < n ? e(arguments[0], r, n) : (o = t.slice(0 < n ? n - 1 : n, r).map(c), a ? o.join("") : o)) : h.create("macrocall", "The sub" + i(t) + " index value must not be " + (n && r) + ".")
            },
            range: function e(t, n) {
                if (n < t) return e(n, t);
                var r = [t];
                for (n -= t; 0 < n--;) r.push(++t);
                return r
            },
            printBuiltinValue: function r(e) {
                return h.containsError(e) ? e : e && _typeof(e.TwineScript_Print) === w ? e.TwineScript_Print() : e instanceof Map ? (e = Array.from(e.entries()), h.containsError(e) ? e : e.reduce(function(e, t) {
                    var n = (t = _slicedToArray(t, 2))[0],
                        t = t[1];
                    return e + "<tr><td>`" + r(n) + "`</td><td>`" + r(t) + "`</td></tr>"
                }, "<table class=datamap>") + "</table>") : e instanceof Set ? Array.from(e.values()).map(r) + "" : k(e) ? e.map(r) + "" : e && _typeof(e.jquery) === b ? e : a(e) ? h.create("unimplemented", "I don't know how to print this value yet.") : e + ""
            },
            unique: function(t, e, n) {
                return n.findIndex(function(e) {
                    return p(t, e)
                }) === e
            }
        })
    }), define("utils/polyfills", [], function() {
        var o = Array.prototype;
        "function" != typeof o.includes && (o.includes = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
            if (!Number.isNaN(e) && Number.isFinite(t) && void 0 !== e) return -1 < o.indexOf.call(this, e, t);
            var n = Object(this),
                r = parseInt(n.length);
            if (!(r <= 0))
                for (var a = 0 <= t ? t : Math.max(0, r + t); a < r;) {
                    if (Object.is(e, n[a])) return !0;
                    a += 1
                }
            return !1
        }), window.Symbol || (window.Symbol = {
            iterator: "_es6-shim iterator_"
        })
    }), define("utils/renderutils", ["jquery", "utils", "renderer"], function(l, u, p) {
        var n = RegExp(u.realWhitespace + "+"),
            s = RegExp(u.realWhitespace + "+", "g");

        function d(e, t, n) {
            var r, a = e.textContent.length;
            if (!(a <= t)) return r = [e = 0 === t ? e : e.splitText(t)], n && (n = n <= 0 ? a - n : n) < a && r.push(e.splitText(n - t)), r
        }
        var t, c = function() {
            var e;
            return void 0 !== t ? t : (e = l("<p>"), t = !!e[0].normalize && (e.append(document.createTextNode("0-"), document.createTextNode("2"), document.createTextNode(""))[0].normalize(), 1 === e.contents().length))
        };
        var f = "tw-collapsed,[collapsing=true]";
        var o = /^(=*)([^=]+)=*$/;
        return Object.freeze({
            dialog: function() {
                var e, t = (c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).section,
                    n = void 0 === (n = c.parent) ? u.storyElement : n,
                    r = c.cd,
                    a = void 0 === (a = c.message) ? "" : a,
                    o = c.defaultValue,
                    i = void 0 === (c = c.buttons) ? [{
                        name: "OK",
                        confirm: !0,
                        callback: Object
                    }] : c,
                    s = ("a code hook" === a.TwineScript_TypeName && (a = a.code), l("<tw-backdrop><tw-dialog>" + (o || "" === o ? "<input type=text style='display:block;margin:0 auto'></input>\n" : "") + "<tw-dialog-links>" + (i.length ? i.reduce(function(e, t, n) {
                        t = t.name;
                        return e + "<tw-link style='margin:0 " + (n === i.length - 1 ? "0 0 0.5em" : 0 === n ? "0.5em 0 0" : "0.5em") + "' tabindex=0>" + t + "</tw-link>"
                    }, "") : "<tw-link tabindex=0>" + i[0].name + "</tw-link>") + "</tw-dialog-links></tw-dialog></tw-backdrop>")),
                    c = s.find("tw-dialog");
                return n.append(s), t ? (t.renderInto(a, c, _objectSpread(_objectSpread({}, r), {}, {
                    append: "prepend"
                })), null != (n = (null == r ? void 0 : r.transition) && s.find("tw-dialog > tw-transition-container")) && n.length && n.appendTo(s).append(c.prepend(n.contents().detach()))) : c.prepend(p.exec(a)), o && ((e = s.find("input").last()).val(o).on("keypress", function(e) {
                    13 === e.which && (s.remove(), i.filter(function(e) {
                        return e.confirm
                    }).forEach(function(e) {
                        return e.callback()
                    }))
                }), setTimeout(function() {
                    return e.focus()
                }, 100)), i.reverse().forEach(function(e, t) {
                    l(s.find("tw-link").get(-t - 1)).on("click", function() {
                        u.options.debug && u.options.ignoreClickEvents && !l(s).is(".eval-replay, .harlowe-crash") || (s.remove(), e.callback())
                    })
                }), s
            },
            realWhitespace: n,
            textNodeToChars: function(r) {
                var e = _toConsumableArray(r.textContent);
                return 1 === e.length ? [r] : e.reduce(function(e, t) {
                    return t.match(n) && e.length && e[e.length - 1].match(n) ? e[e.length - 1] += t : e.push(t), e
                }, []).reduce(function(e, t) {
                    var n = r;
                    return t.length < r.textContent.length && (r = r.splitText(t.length)), e.concat(n)
                }, [])
            },
            findTextInNodes: function e(t, n) {
                var r = [],
                    a = "",
                    o = [];
                if (!t.length || !n) return o;
                for (; 0 < t.length;) {
                    r.push(t[0]), a += t[0].textContent, t.shift();
                    var i = a.indexOf(n);
                    if (-1 < i) {
                        for (var s = a.length - (i + n.length); i >= r[0].textContent.length;) i -= r[0].textContent.length, r.shift();
                        if (1 === r.length) {
                            var c = d(r[0], i, i + n.length);
                            o.push(c[0]), c[1] && t.unshift(c[1]);
                            break
                        }
                        o.push(d(r[0], i, r[0].length)[0]), o.push.apply(o, _toConsumableArray(r.slice(1, -1))), c = d(r[r.length - 1], 0, r[r.length - 1].textContent.length - s), o.push(c[0]), c[1] && t.unshift(c[1]), o = o.filter(Boolean);
                        break
                    }
                }
                return [o].concat(_toConsumableArray(e(t, n)))
            },
            collapse: function(e) {
                function n(e) {
                    return 0 === l(this || e).parentsUntil(f).filter("tw-verbatim, tw-expression, [collapsing=false]").length
                }
                var t = function e(t) {
                        var n = t[0],
                            r = t.parent();
                        return !r.length || t.findAndFilter("tw-story").length ? null : (t = (t = r.textNodes().filter(function(e) {
                            return 4 & (e = e.compareDocumentPosition(n)) && !(8 & e)
                        }))[t.length - 1]) || e(r)
                    }(e),
                    r = (l(t).parents(f).length || (t = null), function e(t) {
                        var n = t[0],
                            r = t.parent();
                        return !r.length || t.findAndFilter("tw-story").length ? null : r.textNodes().filter(function(e) {
                            return 2 & (e = e.compareDocumentPosition(n)) && !(8 & e)
                        })[0] || e(r)
                    }(e)),
                    a = (l(r).parents(f).length || (r = null), "br:not([data-raw]),tw-consecutive-br:not([data-raw])"),
                    o = (e.find(a).filter(n).replaceWith(document.createTextNode(" ")), (e = l(e.get().map(function(e) {
                        return l(e).filter(n).is(a) ? l(document.createTextNode(" ")).replaceAll(e)[0] : e
                    }))).textNodes()),
                    i = 0;
                o.reduce(function(e, t) {
                    return n(t) ? (t.textContent = t.textContent.replace(s, " "), " " !== t.textContent[0] || e && e.textContent && !(-1 < e.textContent.search(/\s$/)) || (t.textContent = t.textContent.slice(1)), t) : document.createTextNode("A")
                }, t), _toConsumableArray(o).reverse().every(function(e) {
                    return !(!n(e) || (e.textContent.match(/^\s*$/) ? (i += e.textContent.length, e.textContent = "") : (e.textContent = e.textContent.replace(/\s+$/, function(e) {
                        return i += e.length, ""
                    }), 1)))
                }), 0 < i && r && (o[o.length - 1].textContent += " "), e[0] && c() && e[0].normalize()
            },
            geomStringRegExp: o,
            geomParse: function(e) {
                var t, n, r, a;
                return !e || (t = e.length, n = (a = _slicedToArray(o.exec(e) || [], 3))[0], r = a[1], a = a[2], !n) || a === e && 1 < a.length ? {
                    marginLeft: 0,
                    size: 0
                } : {
                    marginLeft: r.length / t * 100,
                    size: a.length / t * 100
                }
            }
        })
    }), define("utils/scripttag", ["state", "utils/operationutils", "internaltypes/varref", "internaltypes/twineerror"], function(a, o, i, s) {
        return function(e, r) {
            Function("script", "scope", "with(scope){var scope=void 0,arguments=void 0;eval([script,script=void 0][0]);}")(e, Object.create(null, Object.keys(a.variables).map(function(e) {
                return !e.startsWith("TwineScript_") && "$" + e
            }).concat(Object.keys(r).map(function(e) {
                return !e.startsWith("TwineScript_") && "_" + e
            })).reduce(function(e, n) {
                return n && (e[n] = {
                    get: function() {
                        var e = ("$" === n[0] ? a.variables : r)[n.slice(1)];
                        if (o.isHarloweJSValue(e)) return o.clone(e);
                        throw s.create("", "The contents of the variable ".concat(n, ", ").concat(o.objectName(e), ", couldn't be converted to a Javascript value."), "Only booleans, strings, numbers, datamaps, datasets and arrays can be converted to Javascript values.")
                    },
                    set: function(e) {
                        var t = "$" === n[0] ? a.variables : r;
                        if (!o.isHarloweJSValue(e)) throw s.create("", "The Javascript value, ".concat(e, ", couldn't be converted to a Harlowe value and assigned to the variable ").concat(n, "."), "Only booleans, strings, numbers (except NaN and Infinity), Maps, Sets and Arrays can be converted to Harlowe values.");
                        e = o.clone(e);
                        t = i.create(t, n.slice(1)).set(e);
                        if (s.containsError(t)) throw t
                    }
                }), e
            }, {})))
        }
    }), ! function() {
        function e(t, n, r) {
            return function(e) {
                return "background-color: hsla(".concat(t, ",").concat(n, "%,").concat(r, "%,").concat(e, ");")
            }
        }
        var t = {
                boolean: "color:hsla(0,0%,30%,1.0)",
                array: "color:hsla(0,100%,30%,1.0)",
                dataset: "color:hsla(30,100%,40%,1.0)",
                number: "color:hsla(30,100%,30%,1.0)",
                datamap: "color:hsla(60,100%,30%,1.0)",
                changer: "color:hsla(90,100%,30%,1.0)",
                lambda: "color:hsla(120,100%,40%,1.0)",
                hookName: "color:hsla(160,100%,30%,1.0)",
                string: "color:hsla(180,100%,30%,1.0)",
                identifier: "color:hsla(200,80%,40%,1.0)",
                variable: "color:hsla(200,100%,30%,1.0)",
                tempVariable: "color:hsla(200,70%,20%,1.0)",
                datatype: "color:hsla(220,100%,30%,1.0)",
                colour: "color:hsla(280,100%,30%,1.0)",
                macro: "color:hsla(320,80%,30%,1.0)",
                twineLink: "color:hsla(240,100%,20%,1.0)"
            },
            o = (t.gradient = t.colour, t.command = t.twineLink, t.instant = t.metadata = t.any = t.customMacro = t.macro, Math.min),
            n = e(40, 100, 50),
            r = e(220, 100, 50),
            i = /hsla\((\d+),\s*(\d+)%,\s*(\d+)%,\s*(\d+\.\d+)\)/g,
            s = "cm-harlowe-3-",
            a = (_defineProperty(n = {
                root: "box-sizing:border-box;",
                hook: n(.05),
                "hook-2": n(.1),
                "hook-3": n(.15),
                "hook-4": n(.2),
                "hook-5": n(.25),
                "hook-6": n(.3),
                "hook-7": n(.35),
                "hook-8": n(.4),
                "^=hook , ^=hook-": "font-weight:bold;",
                unclosedHook: n(.05) + "font-weight:bold;"
            }, "error:not([class*='" + s + "string'])", "background-color: hsla(17,100%,50%,0.5) !important;"), _defineProperty(n, "^=macroName", "font-style:italic;"), _defineProperty(n, "macroName-boolean", t.boolean), _defineProperty(n, "macroName-array", t.array), _defineProperty(n, "macroName-dataset", t.dataset), _defineProperty(n, "macroName-datatype", t.datatype), _defineProperty(n, "macroName-number", t.number), _defineProperty(n, "macroName-datamap", t.datamap), _defineProperty(n, "macroName-changer", t.changer), _defineProperty(n, "macroName-string", t.string), _defineProperty(n, "macroName-colour, macroName-gradient", t.colour), _defineProperty(n, "macroName-command, macroName-instant, macroName-metadata", t.command), _defineProperty(n, "macroName-custommacro, macroName-macro, macroName-any", t.macro), _defineProperty(n, "^=macro ", "font-weight:bold;" + t.macro), _defineProperty(n, "comma, spread", t.macro), _defineProperty(n, "addition", t.any), _defineProperty(n, "subtraction, multiplication, division", t.number), _defineProperty(n, "is, and, or, not, isNot, contains, doesNotContain, isIn, isA, isNotA, isNotIn, matches, doesNotMatch", t.boolean), _defineProperty(n, "bold, strong", "font-weight:bold;"), _defineProperty(n, "italic, em", "font-style:italic;"), _defineProperty(n, "sup", "vertical-align: super;font-size:0.8em;"), _defineProperty(n, "strike", "text-decoration: line-through;"), _defineProperty(n, "verbatim", "background-color: hsla(0,0%,50%,0.1);font:var(--font-monospaced)"), _defineProperty(n, "^=bold, ^=strong, ^=italic, ^=em, ^=sup, ^=verbatim, ^=strike", "font-weight:100; color: hsla(0,0%,0%,0.5)"), _defineProperty(n, "^=collapsed", "font-weight:bold; color: hsla(201,100%,30%,1.0);"), _defineProperty(n, "unclosedCollapsed", r(.025) + "font-weight:bold; color: hsla(201,100%,30%,1.0);"), _defineProperty(n, "collapsed", r(.025)), _defineProperty(n, "collapsed.hook", r(.05)), _defineProperty(n, "collapsed.hook-2", r(.1)), _defineProperty(n, "collapsed.hook-3", r(.15)), _defineProperty(n, "collapsed.hook-4", r(.2)), _defineProperty(n, "collapsed.hook-5", r(.25)), _defineProperty(n, "collapsed.hook-6", r(.3)), _defineProperty(n, "collapsed.hook-7", r(.35)), _defineProperty(n, "collapsed.hook-8", r(.4)), _defineProperty(n, "twineLink:not(.text)", t.twineLink), _defineProperty(n, "tag, scriptStyleTag, comment", "color: hsla(240,34%,25%,1.0);"), _defineProperty(n, "boolean", t.boolean), _defineProperty(n, "string", t.string), _defineProperty(n, "number", t.number), _defineProperty(n, "variable", t.variable), _defineProperty(n, "tempVariable", t.tempVariable), _defineProperty(n, "hookName", t.hookName), _defineProperty(n, "datatype", t.datatype), _defineProperty(n, "colour", t.colour), _defineProperty(n, "cssTime", t.number), _defineProperty(n, "passageString", t.variable + ";text-decoration:underline 1px;"), _defineProperty(n, "tagString", t.variable + ";text-decoration:underline 1px dotted;"), _defineProperty(n, "variableOccurrence, hookOccurrence", "background: hsla(159,50%,75%,1.0) !important;"), _defineProperty(n, "^=where, ^=via, ^=with, ^=making, ^=each, ^=when", t.lambda + "; font-style:italic;"), _defineProperty(n, "heading", "font-weight:bold;"), _defineProperty(n, "hr", "background-image: linear-gradient(0deg, transparent, transparent 45%, hsla(0,0%,75%,1.0) 45%, transparent 55%, transparent);"), _defineProperty(n, "align", "color: hsla(14,99%,37%,1.0); background-color: hsla(14,99%,87%,0.1);"), _defineProperty(n, "column", "color: hsla(204,99%,37%,1.0); background-color: hsla(204,99%,87%,0.1);"), _defineProperty(n, "escapedLine", "font-weight:bold; color: hsla(51,100%,30%,1.0);"), _defineProperty(n, "identifier, property, belongingProperty, itsProperty, belongingItProperty, belongingItOperator, possessiveOperator, belongingOperator", t.identifier), _defineProperty(n, "toString", function() {
                var a = this;
                return Object.keys(this).reduce(function(e, n) {
                    var r;
                    return "toString" !== n && (r = n.split(", ").map(function e(t) {
                        return -1 < t.indexOf(".") ? t.split(/\./g).map(e).join("") : 0 === t.indexOf("^=") ? "[class^='" + s + t.slice(2) + "']" : "." + s + t
                    }), e += r.join(", ") + "{" + a[n] + "}", a[n].match(i)) && [".theme-dark", "[data-app-theme=dark]"].forEach(function(t) {
                        e += r.map(function(e) {
                            return t + " " + e
                        }).join(", ") + "{" + a[n].replace(i, function(e, t, n, r, a) {
                            return "hsla(" + t + "," + o(100, 1.5 * +n) + "%," + (100 - r) + "%," + a + ")"
                        }) + "}"
                    }), e
                }, "")
            }), n + "");
        "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) ? module.exports = {
            Colours: t,
            CSS: a,
            versionClass: s
        }: "function" == typeof define && define.amd && define("utils/typecolours", [], function() {
            return {
                Colours: t,
                CSS: a,
                versionClass: s
            }
        })
    }.call(void 0);;
    require("harlowe")
}());