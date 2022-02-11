var WHJR_ANALYTICS = function(n) {
    "use strict";
    var t = function() {
        return (t = Object.assign || function(n) {
            for (var t, e = 1, r = arguments.length; e < r; e++)
                for (var o in t = arguments[e]) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
            return n
        }).apply(this, arguments)
    };

    function e(n, t, e, r) {
        return new(e || (e = Promise))((function(o, i) {
            function a(n) {
                try {
                    s(r.next(n))
                } catch (n) {
                    i(n)
                }
            }

            function c(n) {
                try {
                    s(r.throw(n))
                } catch (n) {
                    i(n)
                }
            }

            function s(n) {
                var t;
                n.done ? o(n.value) : (t = n.value, t instanceof e ? t : new e((function(n) {
                    n(t)
                }))).then(a, c)
            }
            s((r = r.apply(n, t || [])).next())
        }))
    }

    function r(n, t) {
        var e, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function c(i) {
            return function(c) {
                return function(i) {
                    if (e) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (e = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(n, a)
                    } catch (n) {
                        i = [6, n], r = 0
                    } finally {
                        e = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    }
    var o, i = function(n) {
            for (var t = n + "=", e = 0, r = decodeURIComponent(document.cookie).split(";"); e < r.length; e++) {
                for (var o = r[e];
                    " " == o.charAt(0);) o = o.substring(1);
                if (0 == o.indexOf(t)) return o.substring(t.length, o.length)
            }
            return ""
        },
        a = function() {
            var n = {};
            try {
                var t = i("URLParams");
                t && (n = c(t));
                var e = i("whjrReferrer");
                e && (n.referrer = e)
            } catch (n) {}
            return n
        },
        c = function(n) {
            if ("string" == typeof n) try {
                return JSON.parse(n)
            } catch (n) {
                return console.error(n), {}
            }
            return n
        },
        s = "@whitehatjr/whjr-analytics",
        u = "2.0.1",
        l = function(n, t) {
            return e(void 0, void 0, void 0, (function() {
                var e, o;
                return r(this, (function(r) {
                    switch (r.label) {
                        case 0:
                            window.analytics._loadOptions = t, e = function(n, t) {
                                var e = n;
                                for (var r in t) {
                                    var o = new RegExp("{" + r + "}", "ig");
                                    e = e.replace(o, t[r])
                                }
                                return e
                            }("https://cdn.segment.com/analytics.js/v1/{key}/analytics.min.js", {
                                key: n
                            }), r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]), [4, (i = e, new Promise((function(n, t) {
                                var e = document.createElement("script");

                                function r(t) {
                                    n(t), a()
                                }

                                function o() {
                                    t(), a()
                                }

                                function a() {
                                    e.removeEventListener("load", r), e.removeEventListener("error", o)
                                }
                                e.type = "text/javascript", e.async = !0, e.src = i, e.addEventListener("load", r), e.addEventListener("error", o), document.head.appendChild(e)
                            })))];
                        case 2:
                            return [2, r.sent()];
                        case 3:
                            throw o = r.sent(), new Error(o);
                        case 4:
                            return [2]
                    }
                    var i
                }))
            }))
        },
        d = {
            frontend_origin: "undefined" != typeof window && (null === (o = window.location) || void 0 === o ? void 0 : o.origin)
        },
        f = {},
        w = !1,
        y = {
            sdk_name_web: s,
            sdk_version_web: u
        },
        v = function() {
            return f
        },
        h = function(n) {
            if (n && 0 !== Object.keys(n).length)
                for (var t in n) delete d[t];
            else d = {}
        },
        p = function(n) {
            if (n && 0 !== Object.keys(n).length)
                for (var t in n) delete f[t];
            else f = {}
        },
        g = function() {
            return t(t(t(t({}, y), d), v()), a())
        },
        m = function() {
            return w
        },
        b = function(n) {
            void 0 === n && (n = !1), p(null), h(null), n && j()
        },
        k = function(n) {
            if (void 0 === n && (n = {}), m()) {
                var e = n.type,
                    r = n.target;
                if (r !== window && r !== document) {
                    var o = !!r && r.closest("[data-whjr-analytics-name]"),
                        i = !(!o || !o.getAttribute) && o.getAttribute("data-whjr-analytics-props");
                    if (i || i.length) {
                        var a = i = c(i),
                            s = o.getAttribute("data-whjr-analytics-name"),
                            u = t(t(t({}, g()), a), {
                                eventType: a.eventType || e
                            });
                        try {
                            window.analytics && window.analytics.track(s, u)
                        } catch (n) {
                            console.error("Unable to send event!", n)
                        }
                    }
                }
            }
        },
        j = function() {
            for (var n = 0, t = ["error", "click", "change", "blur", "focus", "whjrClickAnalytics"]; n < t.length; n++) {
                var e = t[n];
                window.addEventListener ? window.addEventListener(e, k) : window.attachEvent && window.attachEvent("on" + e, (function(n) {
                    k(n)
                }))
            }
        };
    return n.getAmplitudeSessionId = function() {
        try {
            return "undefined" != typeof window && window.amplitude && "function" == typeof window.amplitude.getSessionId ? window.amplitude.getSessionId() : 0
        } catch (n) {
            return console.error("seg getAmplitudeSessionId err whjr", n), 0
        }
    }, n.getSegmentAnonymousId = function() {
        try {
            var n = void 0;
            return "undefined" != typeof window && void 0 !== window.analytics && void 0 !== window.analytics.user && void 0 !== window.analytics.user().anonymousId && (n = window.analytics.user().anonymousId()), n
        } catch (n) {
            return console.error("seg getSegmentAnonymousId err ", n), ""
        }
    }, n.init = function(n) {
        void 0 === n && (n = {}), b(null == n ? void 0 : n.allowDocumentEvent),
            function(n) {
                t({}, n)
            }(n), w = !0,
            function() {
                window.analytics = window.analytics || [], window.analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "addSourceMiddleware", "addIntegrationMiddleware", "setAnonymousId", "addDestinationMiddleware"], window.analytics.factory = function(n) {
                    return function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        var r = Array.prototype.slice.call(t);
                        return r.unshift(n), window.analytics.push(r), window.analytics
                    }
                };
                for (var n = 0, t = window.analytics.methods; n < t.length; n++) {
                    var e = t[n];
                    window.analytics[e] = window.analytics.factory(e)
                }
                window.analytics.SNIPPET_VERSION = u
            }()
    }, n.load = function(n, t) {
        return e(void 0, void 0, void 0, (function() {
            return r(this, (function(e) {
                switch (e.label) {
                    case 0:
                        return [4, l(n, t).then((function() {
                            console.log("%c " + s + "@" + u + " library loaded!", "color: #ff8e1b")
                        })).catch((function(n) {
                            return console.error("Error: segment library not loaded", n), Promise.reject(n)
                        }))];
                    case 1:
                        return [2, e.sent()]
                }
            }))
        }))
    }, n.setEventProps = function(n) {
        ! function(n) {
            d = t(t(t(t({}, f), d), n), a())
        }(n)
    }, n.setUserProps = function(n) {
        ! function(n) {
            void 0 === n && (n = {}), f = t(t({}, f), n)
        }(n)
    }, n.trackAPI = function(n, e) {
        if (void 0 === n && (n = ""), void 0 === e && (e = {}), m())
            if (n) {
                var r = t(t({}, g()), e);
                try {
                    window.analytics && window.analytics.track(n, r)
                } catch (n) {
                    console.error("Unable to track API!", n)
                }
            } else console.error("event name not getting ", function(n) {
                if ("object" == typeof n) try {
                    return JSON.stringify(n)
                } catch (n) {
                    return console.error(n), ""
                }
                return n
            }(e))
    }, n.trackError = function(n, e) {
        if (void 0 === n && (n = ""), void 0 === e && (e = {}), m() && n) {
            var r = t(t({}, g()), e);
            try {
                window.analytics && window.analytics.track(n, r), e.dataDogLog && console.error("trackError try catch datadog error => ", e.dataDogLog)
            } catch (n) {
                console.error("Unable to track error", n)
            }
        }
    }, n.trackEvent = function(n, e) {
        if (void 0 === n && (n = ""), void 0 === e && (e = {}), m()) {
            var r = e.type,
                o = e.target,
                i = {};
            if (o === window || o === document) {
                if (!(n = {
                        error: "ERROR"
                    } [r])) return;
                if ("error" === r) {
                    var a = e.error,
                        s = void 0 === a ? {} : a;
                    i = t(t({}, g()), {
                        errorCaptured: "uncaught",
                        eventType: s.name,
                        errorMessage: s.message
                    })
                }
            } else {
                var u = !!o && o.closest("[data-whjr-analytics-name]"),
                    l = !(!u || !u.getAttribute) && u.getAttribute("data-whjr-analytics-props");
                if (l || l.length) l = c(l);
                else {
                    if (!n) return;
                    l = e
                }
                var d = l;
                n = n || u.getAttribute("data-whjr-analytics-name"), i = t(t(t({}, g()), d), {
                    eventType: d.eventType || r
                })
            }
            try {
                window.analytics && window.analytics.track(n, i)
            } catch (n) {
                console.error("Unable to send event!", n)
            }
        }
    }, n.trackPageView = function(n, e) {
        if (void 0 === e && (e = {}), m())
            if (n) {
                var r = t(t({}, g()), e);
                try {
                    window.analytics && window.analytics.page(n, r)
                } catch (n) {
                    console.error("Unable to track page view!", n)
                }
            } else console.error("Page name not found")
    }, n.trackUser = function(n, e) {
        if (void 0 === n && (n = ""), void 0 === e && (e = {}), m()) {
            var r = t(t({}, v()), e);
            try {
                n ? window.analytics.identify(n, r) : window.analytics.identify(r)
            } catch (n) {
                console.error("Error on track user ", n)
            }
        }
    }, n.unSetEventProps = function(n) {
        h(n)
    }, n.unSetUserProps = function(n) {
        p(n)
    }, Object.defineProperty(n, "__esModule", {
        value: !0
    }), n
}({});
window.onWhjrAnalyticsLoad && window.onWhjrAnalyticsLoad();