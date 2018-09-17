/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
	function (a, b, c) {
		function d(c) {
			var d = b.console;
			f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
		}

		function e(b, c, e, f) {
			if (Object.defineProperty) try {
				return void Object.defineProperty(b, c, {
					configurable: !0,
					enumerable: !0,
					get: function () {
						return d(f), e
					},
					set: function (a) {
						d(f), e = a
					}
				})
			} catch (g) {}
			a._definePropertyBroken = !0, b[c] = e
		}
		a.migrateVersion = "1.4.1";
		var f = {};
		a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function () {
			f = {}, a.migrateWarnings.length = 0
		}, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
		var g = a("<input/>", {
				size: 1
			}).attr("size") && a.attrFn,
			h = a.attr,
			i = a.attrHooks.value && a.attrHooks.value.get || function () {
				return null
			},
			j = a.attrHooks.value && a.attrHooks.value.set || function () {
				return c
			},
			k = /^(?:input|button)$/i,
			l = /^[238]$/,
			m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
			n = /^(?:checked|selected)$/i;
		e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function (b, e, f, i) {
			var j = e.toLowerCase(),
				o = b && b.nodeType;
			return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
				get: function (b, d) {
					var e, f = a.prop(b, d);
					return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
				},
				set: function (b, c, d) {
					var e;
					return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
				}
			}, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
		}, a.attrHooks.value = {
			get: function (a, b) {
				var c = (a.nodeName || "").toLowerCase();
				return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
			},
			set: function (a, b) {
				var c = (a.nodeName || "").toLowerCase();
				return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
			}
		};
		var o, p, q = a.fn.init,
			r = a.find,
			s = a.parseJSON,
			t = /^\s*</,
			u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
			v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
			w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
		a.fn.init = function (b, e, f) {
			var g, h;
			return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
		}, a.fn.init.prototype = a.fn, a.find = function (a) {
			var b = Array.prototype.slice.call(arguments);
			if ("string" == typeof a && u.test(a)) try {
				document.querySelector(a)
			} catch (c) {
				a = a.replace(v, function (a, b, c, d) {
					return "[" + b + c + '"' + d + '"]'
				});
				try {
					document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
				} catch (e) {
					d("Attribute selector with '#' was not fixed: " + b[0])
				}
			}
			return r.apply(this, b)
		};
		var x;
		for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
		a.parseJSON = function (a) {
			return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
		}, a.uaMatch = function (a) {
			a = a.toLowerCase();
			var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
			return {
				browser: b[1] || "",
				version: b[2] || "0"
			}
		}, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function () {
			function b(a, c) {
				return new b.fn.init(a, c)
			}
			a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function (d, e) {
				var f = a.fn.init.call(this, d, e, c);
				return f instanceof b ? f : b(f)
			}, b.fn.init.prototype = b.fn;
			var c = b(document);
			return d("jQuery.sub() is deprecated"), b
		}, a.fn.size = function () {
			return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
		};
		var y = !1;
		a.swap && a.each(["height", "width", "reliableMarginRight"], function (b, c) {
			var d = a.cssHooks[c] && a.cssHooks[c].get;
			d && (a.cssHooks[c].get = function () {
				var a;
				return y = !0, a = d.apply(this, arguments), y = !1, a
			})
		}), a.swap = function (a, b, c, e) {
			var f, g, h = {};
			y || d("jQuery.swap() is undocumented and deprecated");
			for (g in b) h[g] = a.style[g], a.style[g] = b[g];
			f = c.apply(a, e || []);
			for (g in b) a.style[g] = h[g];
			return f
		}, a.ajaxSetup({
			converters: {
				"text json": a.parseJSON
			}
		});
		var z = a.fn.data;
		a.fn.data = function (b) {
			var e, f, g = this[0];
			return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
		};
		var A = /\/(java|ecma)script/i;
		a.clean || (a.clean = function (b, c, e, f) {
			c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
			var g, h, i, j, k = [];
			if (a.merge(k, a.buildFragment(b, c).childNodes), e)
				for (i = function (a) {
						return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
					}, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
			return k
		});
		var B = a.event.add,
			C = a.event.remove,
			D = a.event.trigger,
			E = a.fn.toggle,
			F = a.fn.live,
			G = a.fn.die,
			H = a.fn.load,
			I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
			J = new RegExp("\\b(?:" + I + ")\\b"),
			K = /(?:^|\s)hover(\.\S+|)\b/,
			L = function (b) {
				return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
			};
		a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function (a, b, c, e, f) {
			a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
		}, a.event.remove = function (a, b, c, d, e) {
			C.call(this, a, L(b) || "", c, d, e)
		}, a.each(["load", "unload", "error"], function (b, c) {
			a.fn[c] = function () {
				var a = Array.prototype.slice.call(arguments, 0);
				return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
			}
		}), a.fn.toggle = function (b, c) {
			if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
			d("jQuery.fn.toggle(handler, handler...) is deprecated");
			var e = arguments,
				f = b.guid || a.guid++,
				g = 0,
				h = function (c) {
					var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
					return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
				};
			for (h.guid = f; g < e.length;) e[g++].guid = f;
			return this.click(h)
		}, a.fn.live = function (b, c, e) {
			return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
		}, a.fn.die = function (b, c) {
			return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
		}, a.event.trigger = function (a, b, c, e) {
			return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
		}, a.each(I.split("|"), function (b, c) {
			a.event.special[c] = {
				setup: function () {
					var b = this;
					return b !== document && (a.event.add(document, c + "." + a.guid, function () {
						a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
					}), a._data(this, c, a.guid++)), !1
				},
				teardown: function () {
					return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
				}
			}
		}), a.event.special.ready = {
			setup: function () {
				this === document && d("'ready' event is deprecated")
			}
		};
		var M = a.fn.andSelf || a.fn.addBack,
			N = a.fn.find;
		if (a.fn.andSelf = function () {
				return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
			}, a.fn.find = function (a) {
				var b = N.apply(this, arguments);
				return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
			}, a.Callbacks) {
			var O = a.Deferred,
				P = [
					["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
					["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
					["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
				];
			a.Deferred = function (b) {
				var c = O(),
					e = c.promise();
				return c.pipe = e.pipe = function () {
					var b = arguments;
					return d("deferred.pipe() is deprecated"), a.Deferred(function (d) {
						a.each(P, function (f, g) {
							var h = a.isFunction(b[f]) && b[f];
							c[g[1]](function () {
								var b = h && h.apply(this, arguments);
								b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
							})
						}), b = null
					}).promise()
				}, c.isResolved = function () {
					return d("deferred.isResolved is deprecated"), "resolved" === c.state()
				}, c.isRejected = function () {
					return d("deferred.isRejected is deprecated"), "rejected" === c.state()
				}, b && b.call(c, c), c
			}
		}
	}(jQuery, window);
! function (a) {
	a(document).ready(function () {
		var b;
		a("#your-profile").attr("enctype", "multipart/form-data"),
			function () {
				function b() {
					c.prop("disabled", "" === d.map(function () {
						return a(this).val()
					}).get().join(""))
				}
				var c, d, e = a("#avatar-manager");
				e.length && (c = e.find('input[type="submit"]'), d = e.find('input[type="file"]'), b(), d.on("change", b))
			}(), a("#avatar-manager-choose-from-library-link").click(function (c) {
				var d = a(this);
				return c.preventDefault(), b ? void b.open() : (b = wp.media.frames.customAvatar = wp.media({
					title: d.data("choose"),
					library: {
						type: "image"
					},
					button: {
						text: d.data("update"),
						close: !1
					}
				}), b.on("select", function () {
					var a = b.state().get("selection").first(),
						c = d.data("updateLink");
					window.location = c + "&avatar_manager_attachment_id=" + a.id
				}), void b.open())
			})
	})
}(jQuery);

/*
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.9
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.skinkers.com/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 *
 * Copyright (c) 2010 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
(function (a) {
	if (typeof define === "function" && define.amd && define.amd.jQuery) {
		define(["jquery"], a)
	} else {
		a(jQuery)
	}
}(function (f) {
	var y = "1.6.9",
		p = "left",
		o = "right",
		e = "up",
		x = "down",
		c = "in",
		A = "out",
		m = "none",
		s = "auto",
		l = "swipe",
		t = "pinch",
		B = "tap",
		j = "doubletap",
		b = "longtap",
		z = "hold",
		E = "horizontal",
		u = "vertical",
		i = "all",
		r = 10,
		g = "start",
		k = "move",
		h = "end",
		q = "cancel",
		a = "ontouchstart" in window,
		v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
		d = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
		C = "TouchSwipe";
	var n = {
		fingers: 1,
		threshold: 75,
		cancelThreshold: null,
		pinchThreshold: 20,
		maxTimeThreshold: null,
		fingerReleaseThreshold: 250,
		longTapThreshold: 500,
		doubleTapThreshold: 200,
		swipe: null,
		swipeLeft: null,
		swipeRight: null,
		swipeUp: null,
		swipeDown: null,
		swipeStatus: null,
		pinchIn: null,
		pinchOut: null,
		pinchStatus: null,
		click: null,
		tap: null,
		doubleTap: null,
		longTap: null,
		hold: null,
		triggerOnTouchEnd: true,
		triggerOnTouchLeave: false,
		allowPageScroll: "auto",
		fallbackToMouseEvents: true,
		excludedElements: "label, button, input, select, textarea, a, .noSwipe",
		preventDefaultEvents: true
	};
	f.fn.swipetp = function (H) {
		var G = f(this),
			F = G.data(C);
		if (F && typeof H === "string") {
			if (F[H]) {
				return F[H].apply(this, Array.prototype.slice.call(arguments, 1))
			} else {
				f.error("Method " + H + " does not exist on jQuery.swipetp")
			}
		} else {
			if (!F && (typeof H === "object" || !H)) {
				return w.apply(this, arguments)
			}
		}
		return G
	};
	f.fn.swipetp.version = y;
	f.fn.swipetp.defaults = n;
	f.fn.swipetp.phases = {
		PHASE_START: g,
		PHASE_MOVE: k,
		PHASE_END: h,
		PHASE_CANCEL: q
	};
	f.fn.swipetp.directions = {
		LEFT: p,
		RIGHT: o,
		UP: e,
		DOWN: x,
		IN: c,
		OUT: A
	};
	f.fn.swipetp.pageScroll = {
		NONE: m,
		HORIZONTAL: E,
		VERTICAL: u,
		AUTO: s
	};
	f.fn.swipetp.fingers = {
		ONE: 1,
		TWO: 2,
		THREE: 3,
		ALL: i
	};

	function w(F) {
		if (F && (F.allowPageScroll === undefined && (F.swipe !== undefined || F.swipeStatus !== undefined))) {
			F.allowPageScroll = m
		}
		if (F.click !== undefined && F.tap === undefined) {
			F.tap = F.click
		}
		if (!F) {
			F = {}
		}
		F = f.extend({}, f.fn.swipetp.defaults, F);
		return this.each(function () {
			var H = f(this);
			var G = H.data(C);
			if (!G) {
				G = new D(this, F);
				H.data(C, G)
			}
		})
	}

	function D(a5, aw) {
		var aA = (a || d || !aw.fallbackToMouseEvents),
			K = aA ? (d ? (v ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",
			az = aA ? (d ? (v ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",
			V = aA ? (d ? (v ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
			T = aA ? null : "mouseleave",
			aE = (d ? (v ? "MSPointerCancel" : "pointercancel") : "touchcancel");
		var ah = 0,
			aQ = null,
			ac = 0,
			a2 = 0,
			a0 = 0,
			H = 1,
			ar = 0,
			aK = 0,
			N = null;
		var aS = f(a5);
		var aa = "start";
		var X = 0;
		var aR = null;
		var U = 0,
			a3 = 0,
			a6 = 0,
			ae = 0,
			O = 0;
		var aX = null,
			ag = null;
		try {
			aS.bind(K, aO);
			aS.bind(aE, ba)
		} catch (al) {
			f.error("events not supported " + K + "," + aE + " on jQuery.swipetp")
		}
		this.enable = function () {
			aS.bind(K, aO);
			aS.bind(aE, ba);
			return aS
		};
		this.disable = function () {
			aL();
			return aS
		};
		this.destroy = function () {
			aL();
			aS.data(C, null);
			aS = null
		};
		this.option = function (bd, bc) {
			if (aw[bd] !== undefined) {
				if (bc === undefined) {
					return aw[bd]
				} else {
					aw[bd] = bc
				}
			} else {
				f.error("Option " + bd + " does not exist on jQuery.swipetp.options")
			}
			return null
		};

		function aO(be) {
			if (aC()) {
				return
			}
			if (f(be.target).closest(aw.excludedElements, aS).length > 0) {
				return
			}
			var bf = be.originalEvent ? be.originalEvent : be;
			var bd, bg = bf.touches,
				bc = bg ? bg[0] : bf;
			aa = g;
			if (bg) {
				X = bg.length
			} else {
				be.preventDefault()
			}
			ah = 0;
			aQ = null;
			aK = null;
			ac = 0;
			a2 = 0;
			a0 = 0;
			H = 1;
			ar = 0;
			aR = ak();
			N = ab();
			S();
			if (!bg || (X === aw.fingers || aw.fingers === i) || aY()) {
				aj(0, bc);
				U = au();
				if (X == 2) {
					aj(1, bg[1]);
					a2 = a0 = av(aR[0].start, aR[1].start)
				}
				if (aw.swipeStatus || aw.pinchStatus) {
					bd = P(bf, aa)
				}
			} else {
				bd = false
			}
			if (bd === false) {
				aa = q;
				P(bf, aa);
				return bd
			} else {
				if (aw.hold) {
					ag = setTimeout(f.proxy(function () {
						aS.trigger("hold", [bf.target]);
						if (aw.hold) {
							bd = aw.hold.call(aS, bf, bf.target)
						}
					}, this), aw.longTapThreshold)
				}
				ap(true)
			}
			return null
		}

		function a4(bf) {
			var bi = bf.originalEvent ? bf.originalEvent : bf;
			if (aa === h || aa === q || an()) {
				return
			}
			var be, bj = bi.touches,
				bd = bj ? bj[0] : bi;
			var bg = aI(bd);
			a3 = au();
			if (bj) {
				X = bj.length
			}
			if (aw.hold) {
				clearTimeout(ag)
			}
			aa = k;
			if (X == 2) {
				if (a2 == 0) {
					aj(1, bj[1]);
					a2 = a0 = av(aR[0].start, aR[1].start)
				} else {
					aI(bj[1]);
					a0 = av(aR[0].end, aR[1].end);
					aK = at(aR[0].end, aR[1].end)
				}
				H = a8(a2, a0);
				ar = Math.abs(a2 - a0)
			}
			if ((X === aw.fingers || aw.fingers === i) || !bj || aY()) {
				aQ = aM(bg.start, bg.end);
				am(bf, aQ);
				ah = aT(bg.start, bg.end);
				ac = aN();
				aJ(aQ, ah);
				if (aw.swipeStatus || aw.pinchStatus) {
					be = P(bi, aa)
				}
				if (!aw.triggerOnTouchEnd || aw.triggerOnTouchLeave) {
					var bc = true;
					if (aw.triggerOnTouchLeave) {
						var bh = aZ(this);
						bc = F(bg.end, bh)
					}
					if (!aw.triggerOnTouchEnd && bc) {
						aa = aD(k)
					} else {
						if (aw.triggerOnTouchLeave && !bc) {
							aa = aD(h)
						}
					}
					if (aa == q || aa == h) {
						P(bi, aa)
					}
				}
			} else {
				aa = q;
				P(bi, aa)
			}
			if (be === false) {
				aa = q;
				P(bi, aa)
			}
		}

		function M(bc) {
			var bd = bc.originalEvent ? bc.originalEvent : bc,
				be = bd.touches;
			if (be) {
				if (be.length) {
					G();
					return true
				}
			}
			if (an()) {
				X = ae
			}
			a3 = au();
			ac = aN();
			if (bb() || !ao()) {
				aa = q;
				P(bd, aa)
			} else {
				if (aw.triggerOnTouchEnd || (aw.triggerOnTouchEnd == false && aa === k)) {
					bc.preventDefault();
					aa = h;
					P(bd, aa)
				} else {
					if (!aw.triggerOnTouchEnd && a7()) {
						aa = h;
						aG(bd, aa, B)
					} else {
						if (aa === k) {
							aa = q;
							P(bd, aa)
						}
					}
				}
			}
			ap(false);
			return null
		}

		function ba() {
			X = 0;
			a3 = 0;
			U = 0;
			a2 = 0;
			a0 = 0;
			H = 1;
			S();
			ap(false)
		}

		function L(bc) {
			var bd = bc.originalEvent ? bc.originalEvent : bc;
			if (aw.triggerOnTouchLeave) {
				aa = aD(h);
				P(bd, aa)
			}
		}

		function aL() {
			aS.unbind(K, aO);
			aS.unbind(aE, ba);
			aS.unbind(az, a4);
			aS.unbind(V, M);
			if (T) {
				aS.unbind(T, L)
			}
			ap(false)
		}

		function aD(bg) {
			var bf = bg;
			var be = aB();
			var bd = ao();
			var bc = bb();
			if (!be || bc) {
				bf = q
			} else {
				if (bd && bg == k && (!aw.triggerOnTouchEnd || aw.triggerOnTouchLeave)) {
					bf = h
				} else {
					if (!bd && bg == h && aw.triggerOnTouchLeave) {
						bf = q
					}
				}
			}
			return bf
		}

		function P(be, bc) {
			var bd, bf = be.touches;
			if ((J() || W()) || (Q() || aY())) {
				if (J() || W()) {
					bd = aG(be, bc, l)
				}
				if ((Q() || aY()) && bd !== false) {
					bd = aG(be, bc, t)
				}
			} else {
				if (aH() && bd !== false) {
					bd = aG(be, bc, j)
				} else {
					if (aq() && bd !== false) {
						bd = aG(be, bc, b)
					} else {
						if (ai() && bd !== false) {
							bd = aG(be, bc, B)
						}
					}
				}
			}
			if (bc === q) {
				ba(be)
			}
			if (bc === h) {
				if (bf) {
					if (!bf.length) {
						ba(be)
					}
				} else {
					ba(be)
				}
			}
			return bd
		}

		function aG(bf, bc, be) {
			var bd;
			if (be == l) {
				aS.trigger("swipeStatus", [bc, aQ || null, ah || 0, ac || 0, X, aR]);
				if (aw.swipeStatus) {
					bd = aw.swipeStatus.call(aS, bf, bc, aQ || null, ah || 0, ac || 0, X, aR);
					if (bd === false) {
						return false
					}
				}
				if (bc == h && aW()) {
					aS.trigger("swipe", [aQ, ah, ac, X, aR]);
					if (aw.swipe) {
						bd = aw.swipe.call(aS, bf, aQ, ah, ac, X, aR);
						if (bd === false) {
							return false
						}
					}
					switch (aQ) {
						case p:
							aS.trigger("swipeLeft", [aQ, ah, ac, X, aR]);
							if (aw.swipeLeft) {
								bd = aw.swipeLeft.call(aS, bf, aQ, ah, ac, X, aR)
							}
							break;
						case o:
							aS.trigger("swipeRight", [aQ, ah, ac, X, aR]);
							if (aw.swipeRight) {
								bd = aw.swipeRight.call(aS, bf, aQ, ah, ac, X, aR)
							}
							break;
						case e:
							aS.trigger("swipeUp", [aQ, ah, ac, X, aR]);
							if (aw.swipeUp) {
								bd = aw.swipeUp.call(aS, bf, aQ, ah, ac, X, aR)
							}
							break;
						case x:
							aS.trigger("swipeDown", [aQ, ah, ac, X, aR]);
							if (aw.swipeDown) {
								bd = aw.swipeDown.call(aS, bf, aQ, ah, ac, X, aR)
							}
							break
					}
				}
			}
			if (be == t) {
				aS.trigger("pinchStatus", [bc, aK || null, ar || 0, ac || 0, X, H, aR]);
				if (aw.pinchStatus) {
					bd = aw.pinchStatus.call(aS, bf, bc, aK || null, ar || 0, ac || 0, X, H, aR);
					if (bd === false) {
						return false
					}
				}
				if (bc == h && a9()) {
					switch (aK) {
						case c:
							aS.trigger("pinchIn", [aK || null, ar || 0, ac || 0, X, H, aR]);
							if (aw.pinchIn) {
								bd = aw.pinchIn.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR)
							}
							break;
						case A:
							aS.trigger("pinchOut", [aK || null, ar || 0, ac || 0, X, H, aR]);
							if (aw.pinchOut) {
								bd = aw.pinchOut.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR)
							}
							break
					}
				}
			}
			if (be == B) {
				if (bc === q || bc === h) {
					clearTimeout(aX);
					clearTimeout(ag);
					if (Z() && !I()) {
						O = au();
						aX = setTimeout(f.proxy(function () {
							O = null;
							aS.trigger("tap", [bf.target]);
							if (aw.tap) {
								bd = aw.tap.call(aS, bf, bf.target)
							}
						}, this), aw.doubleTapThreshold)
					} else {
						O = null;
						aS.trigger("tap", [bf.target]);
						if (aw.tap) {
							bd = aw.tap.call(aS, bf, bf.target)
						}
					}
				}
			} else {
				if (be == j) {
					if (bc === q || bc === h) {
						clearTimeout(aX);
						O = null;
						aS.trigger("doubletap", [bf.target]);
						if (aw.doubleTap) {
							bd = aw.doubleTap.call(aS, bf, bf.target)
						}
					}
				} else {
					if (be == b) {
						if (bc === q || bc === h) {
							clearTimeout(aX);
							O = null;
							aS.trigger("longtap", [bf.target]);
							if (aw.longTap) {
								bd = aw.longTap.call(aS, bf, bf.target)
							}
						}
					}
				}
			}
			return bd
		}

		function ao() {
			var bc = true;
			if (aw.threshold !== null) {
				bc = ah >= aw.threshold
			}
			return bc
		}

		function bb() {
			var bc = false;
			if (aw.cancelThreshold !== null && aQ !== null) {
				bc = (aU(aQ) - ah) >= aw.cancelThreshold
			}
			return bc
		}

		function af() {
			if (aw.pinchThreshold !== null) {
				return ar >= aw.pinchThreshold
			}
			return true
		}

		function aB() {
			var bc;
			if (aw.maxTimeThreshold) {
				if (ac >= aw.maxTimeThreshold) {
					bc = false
				} else {
					bc = true
				}
			} else {
				bc = true
			}
			return bc
		}

		function am(bc, bd) {
			if (aw.preventDefaultEvents === false) {
				return
			}
			if (aw.allowPageScroll === m) {
				bc.preventDefault()
			} else {
				var be = aw.allowPageScroll === s;
				switch (bd) {
					case p:
						if ((aw.swipeLeft && be) || (!be && aw.allowPageScroll != E)) {
							bc.preventDefault()
						}
						break;
					case o:
						if ((aw.swipeRight && be) || (!be && aw.allowPageScroll != E)) {
							bc.preventDefault()
						}
						break;
					case e:
						if ((aw.swipeUp && be) || (!be && aw.allowPageScroll != u)) {
							bc.preventDefault()
						}
						break;
					case x:
						if ((aw.swipeDown && be) || (!be && aw.allowPageScroll != u)) {
							bc.preventDefault()
						}
						break
				}
			}
		}

		function a9() {
			var bd = aP();
			var bc = Y();
			var be = af();
			return bd && bc && be
		}

		function aY() {
			return !!(aw.pinchStatus || aw.pinchIn || aw.pinchOut)
		}

		function Q() {
			return !!(a9() && aY())
		}

		function aW() {
			var bf = aB();
			var bh = ao();
			var be = aP();
			var bc = Y();
			var bd = bb();
			var bg = !bd && bc && be && bh && bf;
			return bg
		}

		function W() {
			return !!(aw.swipe || aw.swipeStatus || aw.swipeLeft || aw.swipeRight || aw.swipeUp || aw.swipeDown)
		}

		function J() {
			return !!(aW() && W())
		}

		function aP() {
			return ((X === aw.fingers || aw.fingers === i) || !a)
		}

		function Y() {
			return aR[0].end.x !== 0
		}

		function a7() {
			return !!(aw.tap)
		}

		function Z() {
			return !!(aw.doubleTap)
		}

		function aV() {
			return !!(aw.longTap)
		}

		function R() {
			if (O == null) {
				return false
			}
			var bc = au();
			return (Z() && ((bc - O) <= aw.doubleTapThreshold))
		}

		function I() {
			return R()
		}

		function ay() {
			return ((X === 1 || !a) && (isNaN(ah) || ah < aw.threshold))
		}

		function a1() {
			return ((ac > aw.longTapThreshold) && (ah < r))
		}

		function ai() {
			return !!(ay() && a7())
		}

		function aH() {
			return !!(R() && Z())
		}

		function aq() {
			return !!(a1() && aV())
		}

		function G() {
			a6 = au();
			ae = event.touches.length + 1
		}

		function S() {
			a6 = 0;
			ae = 0
		}

		function an() {
			var bc = false;
			if (a6) {
				var bd = au() - a6;
				if (bd <= aw.fingerReleaseThreshold) {
					bc = true
				}
			}
			return bc
		}

		function aC() {
			return !!(aS.data(C + "_intouch") === true)
		}

		function ap(bc) {
			if (bc === true) {
				aS.bind(az, a4);
				aS.bind(V, M);
				if (T) {
					aS.bind(T, L)
				}
			} else {
				aS.unbind(az, a4, false);
				aS.unbind(V, M, false);
				if (T) {
					aS.unbind(T, L, false)
				}
			}
			aS.data(C + "_intouch", bc === true)
		}

		function aj(bd, bc) {
			var be = bc.identifier !== undefined ? bc.identifier : 0;
			aR[bd].identifier = be;
			aR[bd].start.x = aR[bd].end.x = bc.pageX || bc.clientX;
			aR[bd].start.y = aR[bd].end.y = bc.pageY || bc.clientY;
			return aR[bd]
		}

		function aI(bc) {
			var be = bc.identifier !== undefined ? bc.identifier : 0;
			var bd = ad(be);
			bd.end.x = bc.pageX || bc.clientX;
			bd.end.y = bc.pageY || bc.clientY;
			return bd
		}

		function ad(bd) {
			for (var bc = 0; bc < aR.length; bc++) {
				if (aR[bc].identifier == bd) {
					return aR[bc]
				}
			}
		}

		function ak() {
			var bc = [];
			for (var bd = 0; bd <= 5; bd++) {
				bc.push({
					start: {
						x: 0,
						y: 0
					},
					end: {
						x: 0,
						y: 0
					},
					identifier: 0
				})
			}
			return bc
		}

		function aJ(bc, bd) {
			bd = Math.max(bd, aU(bc));
			N[bc].distance = bd
		}

		function aU(bc) {
			if (N[bc]) {
				return N[bc].distance
			}
			return undefined
		}

		function ab() {
			var bc = {};
			bc[p] = ax(p);
			bc[o] = ax(o);
			bc[e] = ax(e);
			bc[x] = ax(x);
			return bc
		}

		function ax(bc) {
			return {
				direction: bc,
				distance: 0
			}
		}

		function aN() {
			return a3 - U
		}

		function av(bf, be) {
			var bd = Math.abs(bf.x - be.x);
			var bc = Math.abs(bf.y - be.y);
			return Math.round(Math.sqrt(bd * bd + bc * bc))
		}

		function a8(bc, bd) {
			var be = (bd / bc) * 1;
			return be.toFixed(2)
		}

		function at() {
			if (H < 1) {
				return A
			} else {
				return c
			}
		}

		function aT(bd, bc) {
			return Math.round(Math.sqrt(Math.pow(bc.x - bd.x, 2) + Math.pow(bc.y - bd.y, 2)))
		}

		function aF(bf, bd) {
			var bc = bf.x - bd.x;
			var bh = bd.y - bf.y;
			var be = Math.atan2(bh, bc);
			var bg = Math.round(be * 180 / Math.PI);
			if (bg < 0) {
				bg = 360 - Math.abs(bg)
			}
			return bg
		}

		function aM(bd, bc) {
			var be = aF(bd, bc);
			if ((be <= 45) && (be >= 0)) {
				return p
			} else {
				if ((be <= 360) && (be >= 315)) {
					return p
				} else {
					if ((be >= 135) && (be <= 225)) {
						return o
					} else {
						if ((be > 45) && (be < 135)) {
							return x
						} else {
							return e
						}
					}
				}
			}
		}

		function au() {
			var bc = new Date();
			return bc.getTime()
		}

		function aZ(bc) {
			bc = f(bc);
			var be = bc.offset();
			var bd = {
				left: be.left,
				right: be.left + bc.outerWidth(),
				top: be.top,
				bottom: be.top + bc.outerHeight()
			};
			return bd
		}

		function F(bc, bd) {
			return (bc.x > bd.left && bc.x < bd.right && bc.y > bd.top && bc.y < bd.bottom)
		}
	}
}));
if (typeof (console) === 'undefined') {
	var console = {};
	console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function () {};
}
if (window.tplogs == true)
	try {
		console.groupCollapsed("ThemePunch GreenSocks Logs");
	} catch (e) {}
var oldgs = window.GreenSockGlobals;
oldgs_queue = window._gsQueue;
var punchgs = window.GreenSockGlobals = {};
if (window.tplogs == true)
	try {
		console.info("Build GreenSock SandBox for ThemePunch Plugins");
		console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin");
	} catch (e) {}
	/* TWEEN LITE */
	/*!
	 * VERSION: 1.19.1
	 * DATE: 2017-01-17
	 * UPDATES AND DOCS AT: http://greensock.com
	 *
	 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
	 * This work is subject to the terms at http://greensock.com/standard-license or for
	 * Club GreenSock members, the software agreement that was issued with your membership.
	 * 
	 * @author: Jack Doyle, jack@greensock.com
	 */
	! function (a, b) {
		"use strict";
		var c = {},
			d = a.document,
			e = a.GreenSockGlobals = a.GreenSockGlobals || a;
		if (!e.TweenLite) {
			var f, g, h, i, j, k = function (a) {
					var b, c = a.split("."),
						d = e;
					for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
					return d
				},
				l = k("com.greensock"),
				m = 1e-10,
				n = function (a) {
					var b, c = [],
						d = a.length;
					for (b = 0; b !== d; c.push(a[b++]));
					return c
				},
				o = function () {},
				p = function () {
					var a = Object.prototype.toString,
						b = a.call([]);
					return function (c) {
						return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
					}
				}(),
				q = {},
				r = function (d, f, g, h) {
					this.sc = q[d] ? q[d].sc : [], q[d] = this, this.gsClass = null, this.func = g;
					var i = [];
					this.check = function (j) {
						for (var l, m, n, o, p, s = f.length, t = s; --s > -1;)(l = q[f[s]] || new r(f[s], [])).gsClass ? (i[s] = l.gsClass, t--) : j && l.sc.push(this);
						if (0 === t && g) {
							if (m = ("com.greensock." + d).split("."), n = m.pop(), o = k(m.join("."))[n] = this.gsClass = g.apply(g, i), h)
								if (e[n] = c[n] = o, p = "undefined" != typeof module && module.exports, !p && "function" == typeof define && define.amd) define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function () {
									return o
								});
								else if (p)
								if (d === b) {
									module.exports = c[b] = o;
									for (s in c) o[s] = c[s]
								} else c[b] && (c[b][n] = o);
							for (s = 0; s < this.sc.length; s++) this.sc[s].check()
						}
					}, this.check(!0)
				},
				s = a._gsDefine = function (a, b, c, d) {
					return new r(a, b, c, d)
				},
				t = l._class = function (a, b, c) {
					return b = b || function () {}, s(a, [], function () {
						return b
					}, c), b
				};
			s.globals = e;
			var u = [0, 0, 1, 1],
				v = t("easing.Ease", function (a, b, c, d) {
					this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? u.concat(b) : u
				}, !0),
				w = v.map = {},
				x = v.register = function (a, b, c, d) {
					for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1;)
						for (f = i[j], e = d ? t("easing." + f, null, !0) : l.easing[f] || {}, g = k.length; --g > -1;) h = k[g], w[f + "." + h] = w[h + f] = e[h] = a.getRatio ? a : a[h] || new a
				};
			for (h = v.prototype, h._calcEnd = !1, h.getRatio = function (a) {
					if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
					var b = this._type,
						c = this._power,
						d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
					return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
				}, f = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], g = f.length; --g > -1;) h = f[g] + ",Power" + g, x(new v(null, null, 1, g), h, "easeOut", !0), x(new v(null, null, 2, g), h, "easeIn" + (0 === g ? ",easeNone" : "")), x(new v(null, null, 3, g), h, "easeInOut");
			w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut;
			var y = t("events.EventDispatcher", function (a) {
				this._listeners = {}, this._eventTarget = a || this
			});
			h = y.prototype, h.addEventListener = function (a, b, c, d, e) {
				e = e || 0;
				var f, g, h = this._listeners[a],
					k = 0;
				for (this !== i || j || i.wake(), null == h && (this._listeners[a] = h = []), g = h.length; --g > -1;) f = h[g], f.c === b && f.s === c ? h.splice(g, 1) : 0 === k && f.pr < e && (k = g + 1);
				h.splice(k, 0, {
					c: b,
					s: c,
					up: d,
					pr: e
				})
			}, h.removeEventListener = function (a, b) {
				var c, d = this._listeners[a];
				if (d)
					for (c = d.length; --c > -1;)
						if (d[c].c === b) return void d.splice(c, 1)
			}, h.dispatchEvent = function (a) {
				var b, c, d, e = this._listeners[a];
				if (e)
					for (b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1;) d = e[b], d && (d.up ? d.c.call(d.s || c, {
						type: a,
						target: c
					}) : d.c.call(d.s || c))
			};
			var z = a.requestAnimationFrame,
				A = a.cancelAnimationFrame,
				B = Date.now || function () {
					return (new Date).getTime()
				},
				C = B();
			for (f = ["ms", "moz", "webkit", "o"], g = f.length; --g > -1 && !z;) z = a[f[g] + "RequestAnimationFrame"], A = a[f[g] + "CancelAnimationFrame"] || a[f[g] + "CancelRequestAnimationFrame"];
			t("Ticker", function (a, b) {
				var c, e, f, g, h, k = this,
					l = B(),
					n = b !== !1 && z ? "auto" : !1,
					p = 500,
					q = 33,
					r = "tick",
					s = function (a) {
						var b, d, i = B() - C;
						i > p && (l += i - q), C += i, k.time = (C - l) / 1e3, b = k.time - h, (!c || b > 0 || a === !0) && (k.frame++, h += b + (b >= g ? .004 : g - b), d = !0), a !== !0 && (f = e(s)), d && k.dispatchEvent(r)
					};
				y.call(k), k.time = k.frame = 0, k.tick = function () {
					s(!0)
				}, k.lagSmoothing = function (a, b) {
					p = a || 1 / m, q = Math.min(b, p, 0)
				}, k.sleep = function () {
					null != f && (n && A ? A(f) : clearTimeout(f), e = o, f = null, k === i && (j = !1))
				}, k.wake = function (a) {
					null !== f ? k.sleep() : a ? l += -C + (C = B()) : k.frame > 10 && (C = B() - p + 5), e = 0 === c ? o : n && z ? z : function (a) {
						return setTimeout(a, 1e3 * (h - k.time) + 1 | 0)
					}, k === i && (j = !0), s(2)
				}, k.fps = function (a) {
					return arguments.length ? (c = a, g = 1 / (c || 60), h = this.time + g, void k.wake()) : c
				}, k.useRAF = function (a) {
					return arguments.length ? (k.sleep(), n = a, void k.fps(c)) : n
				}, k.fps(a), setTimeout(function () {
					"auto" === n && k.frame < 5 && "hidden" !== d.visibilityState && k.useRAF(!1)
				}, 1500)
			}), h = l.Ticker.prototype = new l.events.EventDispatcher, h.constructor = l.Ticker;
			var D = t("core.Animation", function (a, b) {
				if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, W) {
					j || i.wake();
					var c = this.vars.useFrames ? V : W;
					c.add(this, c._time), this.vars.paused && this.paused(!0)
				}
			});
			i = D.ticker = new l.Ticker, h = D.prototype, h._dirty = h._gc = h._initted = h._paused = !1, h._totalTime = h._time = 0, h._rawPrevTime = -1, h._next = h._last = h._onUpdate = h._timeline = h.timeline = null, h._paused = !1;
			var E = function () {
				j && B() - C > 2e3 && i.wake(), setTimeout(E, 2e3)
			};
			E(), h.play = function (a, b) {
				return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
			}, h.pause = function (a, b) {
				return null != a && this.seek(a, b), this.paused(!0)
			}, h.resume = function (a, b) {
				return null != a && this.seek(a, b), this.paused(!1)
			}, h.seek = function (a, b) {
				return this.totalTime(Number(a), b !== !1)
			}, h.restart = function (a, b) {
				return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
			}, h.reverse = function (a, b) {
				return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
			}, h.render = function (a, b, c) {}, h.invalidate = function () {
				return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
			}, h.isActive = function () {
				var a, b = this._timeline,
					c = this._startTime;
				return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale
			}, h._enabled = function (a, b) {
				return j || i.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
			}, h._kill = function (a, b) {
				return this._enabled(!1, !1)
			}, h.kill = function (a, b) {
				return this._kill(a, b), this
			}, h._uncache = function (a) {
				for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
				return this
			}, h._swapSelfInParams = function (a) {
				for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
				return c
			}, h._callback = function (a) {
				var b = this.vars,
					c = b[a],
					d = b[a + "Params"],
					e = b[a + "Scope"] || b.callbackScope || this,
					f = d ? d.length : 0;
				switch (f) {
					case 0:
						c.call(e);
						break;
					case 1:
						c.call(e, d[0]);
						break;
					case 2:
						c.call(e, d[0], d[1]);
						break;
					default:
						c.apply(e, d)
				}
			}, h.eventCallback = function (a, b, c, d) {
				if ("on" === (a || "").substr(0, 2)) {
					var e = this.vars;
					if (1 === arguments.length) return e[a];
					null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = p(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
				}
				return this
			}, h.delay = function (a) {
				return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
			}, h.duration = function (a) {
				return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
			}, h.totalDuration = function (a) {
				return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
			}, h.time = function (a, b) {
				return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
			}, h.totalTime = function (a, b, c) {
				if (j || i.wake(), !arguments.length) return this._totalTime;
				if (this._timeline) {
					if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
						this._dirty && this.totalDuration();
						var d = this._totalDuration,
							e = this._timeline;
						if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
							for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
					}
					this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (J.length && Y(), this.render(a, b, !1), J.length && Y())
				}
				return this
			}, h.progress = h.totalProgress = function (a, b) {
				var c = this.duration();
				return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio
			}, h.startTime = function (a) {
				return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
			}, h.endTime = function (a) {
				return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
			}, h.timeScale = function (a) {
				if (!arguments.length) return this._timeScale;
				if (a = a || m, this._timeline && this._timeline.smoothChildTiming) {
					var b = this._pauseTime,
						c = b || 0 === b ? b : this._timeline.totalTime();
					this._startTime = c - (c - this._startTime) * this._timeScale / a
				}
				return this._timeScale = a, this._uncache(!1)
			}, h.reversed = function (a) {
				return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
			}, h.paused = function (a) {
				if (!arguments.length) return this._paused;
				var b, c, d = this._timeline;
				return a != this._paused && d && (j || a || i.wake(), b = d.rawTime(), c = b - this._pauseTime, !a && d.smoothChildTiming && (this._startTime += c, this._uncache(!1)), this._pauseTime = a ? b : null, this._paused = a, this._active = this.isActive(), !a && 0 !== c && this._initted && this.duration() && (b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale, this.render(b, b === this._totalTime, !0))), this._gc && !a && this._enabled(!0, !1), this
			};
			var F = t("core.SimpleTimeline", function (a) {
				D.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
			});
			h = F.prototype = new D, h.constructor = F, h.kill()._gc = !1, h._first = h._last = h._recent = null, h._sortChildren = !1, h.add = h.insert = function (a, b, c, d) {
				var e, f;
				if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), e = this._last, this._sortChildren)
					for (f = a._startTime; e && e._startTime > f;) e = e._prev;
				return e ? (a._next = e._next, e._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = e, this._recent = a, this._timeline && this._uncache(!0), this
			}, h._remove = function (a, b) {
				return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
			}, h.render = function (a, b, c) {
				var d, e = this._first;
				for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
			}, h.rawTime = function () {
				return j || i.wake(), this._totalTime
			};
			var G = t("TweenLite", function (b, c, d) {
					if (D.call(this, c, d), this.render = G.prototype.render, null == b) throw "Cannot tween a null target.";
					this.target = b = "string" != typeof b ? b : G.selector(b) || b;
					var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
						i = this.vars.overwrite;
					if (this._overwrite = i = null == i ? U[G.defaultOverwrite] : "number" == typeof i ? i >> 0 : U[i], (h || b instanceof Array || b.push && p(b)) && "number" != typeof b[0])
						for (this._targets = g = n(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(n(f))) : (this._siblings[e] = Z(f, this, !1), 1 === i && this._siblings[e].length > 1 && _(f, this, null, 1, this._siblings[e])) : (f = g[e--] = G.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
					else this._propLookup = {}, this._siblings = Z(b, this, !1), 1 === i && this._siblings.length > 1 && _(b, this, null, 1, this._siblings);
					(this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -m, this.render(Math.min(0, -this._delay)))
				}, !0),
				H = function (b) {
					return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
				},
				I = function (a, b) {
					var c, d = {};
					for (c in a) T[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!Q[c] || Q[c] && Q[c]._autoCSS) || (d[c] = a[c], delete a[c]);
					a.css = d
				};
			h = G.prototype = new D, h.constructor = G, h.kill()._gc = !1, h.ratio = 0, h._firstPT = h._targets = h._overwrittenProps = h._startAt = null, h._notifyPluginsOfEnabled = h._lazy = !1, G.version = "1.19.1", G.defaultEase = h._ease = new v(null, null, 1, 1), G.defaultOverwrite = "auto", G.ticker = i, G.autoSleep = 120, G.lagSmoothing = function (a, b) {
				i.lagSmoothing(a, b)
			}, G.selector = a.$ || a.jQuery || function (b) {
				var c = a.$ || a.jQuery;
				return c ? (G.selector = c, c(b)) : "undefined" == typeof d ? b : d.querySelectorAll ? d.querySelectorAll(b) : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
			};
			var J = [],
				K = {},
				L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
				M = function (a) {
					for (var b, c = this._firstPT, d = 1e-6; c;) b = c.blob ? 1 === a ? this.end : a ? this.join("") : this.start : c.c * a + c.s, c.m ? b = c.m(b, this._target || c.t) : d > b && b > -d && !c.blob && (b = 0), c.f ? c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b) : c.t[c.p] = b, c = c._next
				},
				N = function (a, b, c, d) {
					var e, f, g, h, i, j, k, l = [],
						m = 0,
						n = "",
						o = 0;
					for (l.start = a, l.end = b, a = l[0] = a + "", b = l[1] = b + "", c && (c(l), a = l[0], b = l[1]), l.length = 0, e = a.match(L) || [], f = b.match(L) || [], d && (d._next = null, d.blob = 1, l._firstPT = l._applyPT = d), i = f.length, h = 0; i > h; h++) k = f[h], j = b.substr(m, b.indexOf(k, m) - m), n += j || !h ? j : ",", m += j.length, o ? o = (o + 1) % 5 : "rgba(" === j.substr(-5) && (o = 1), k === e[h] || e.length <= h ? n += k : (n && (l.push(n), n = ""), g = parseFloat(e[h]), l.push(g), l._firstPT = {
						_next: l._firstPT,
						t: l,
						p: l.length - 1,
						s: g,
						c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
						f: 0,
						m: o && 4 > o ? Math.round : 0
					}), m += k.length;
					return n += b.substr(m), n && l.push(n), l.setRatio = M, l
				},
				O = function (a, b, c, d, e, f, g, h, i) {
					"function" == typeof d && (d = d(i || 0, a));
					var j, k = typeof a[b],
						l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3),
						m = "get" !== c ? c : l ? g ? a[l](g) : a[l]() : a[b],
						n = "string" == typeof d && "=" === d.charAt(1),
						o = {
							t: a,
							p: b,
							s: m,
							f: "function" === k,
							pg: 0,
							n: e || b,
							m: f ? "function" == typeof f ? f : Math.round : 0,
							pr: 0,
							c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0
						};
					return ("number" != typeof m || "number" != typeof d && !n) && (g || isNaN(m) || !n && isNaN(d) || "boolean" == typeof m || "boolean" == typeof d ? (o.fp = g, j = N(m, n ? o.s + o.c : d, h || G.defaultStringFilter, o), o = {
						t: j,
						p: "setRatio",
						s: 0,
						c: 1,
						f: 2,
						pg: 0,
						n: e || b,
						pr: 0,
						m: 0
					}) : (o.s = parseFloat(m), n || (o.c = parseFloat(d) - o.s || 0))), o.c ? ((o._next = this._firstPT) && (o._next._prev = o), this._firstPT = o, o) : void 0
				},
				P = G._internals = {
					isArray: p,
					isSelector: H,
					lazyTweens: J,
					blobDif: N
				},
				Q = G._plugins = {},
				R = P.tweenLookup = {},
				S = 0,
				T = P.reservedProps = {
					ease: 1,
					delay: 1,
					overwrite: 1,
					onComplete: 1,
					onCompleteParams: 1,
					onCompleteScope: 1,
					useFrames: 1,
					runBackwards: 1,
					startAt: 1,
					onUpdate: 1,
					onUpdateParams: 1,
					onUpdateScope: 1,
					onStart: 1,
					onStartParams: 1,
					onStartScope: 1,
					onReverseComplete: 1,
					onReverseCompleteParams: 1,
					onReverseCompleteScope: 1,
					onRepeat: 1,
					onRepeatParams: 1,
					onRepeatScope: 1,
					easeParams: 1,
					yoyo: 1,
					immediateRender: 1,
					repeat: 1,
					repeatDelay: 1,
					data: 1,
					paused: 1,
					reversed: 1,
					autoCSS: 1,
					lazy: 1,
					onOverwrite: 1,
					callbackScope: 1,
					stringFilter: 1,
					id: 1
				},
				U = {
					none: 0,
					all: 1,
					auto: 2,
					concurrent: 3,
					allOnStart: 4,
					preexisting: 5,
					"true": 1,
					"false": 0
				},
				V = D._rootFramesTimeline = new F,
				W = D._rootTimeline = new F,
				X = 30,
				Y = P.lazyRender = function () {
					var a, b = J.length;
					for (K = {}; --b > -1;) a = J[b], a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
					J.length = 0
				};
			W._startTime = i.time, V._startTime = i.frame, W._active = V._active = !0, setTimeout(Y, 1), D._updateRoot = G.render = function () {
				var a, b, c;
				if (J.length && Y(), W.render((i.time - W._startTime) * W._timeScale, !1, !1), V.render((i.frame - V._startTime) * V._timeScale, !1, !1), J.length && Y(), i.frame >= X) {
					X = i.frame + (parseInt(G.autoSleep, 10) || 120);
					for (c in R) {
						for (b = R[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
						0 === b.length && delete R[c]
					}
					if (c = W._first, (!c || c._paused) && G.autoSleep && !V._first && 1 === i._listeners.tick.length) {
						for (; c && c._paused;) c = c._next;
						c || i.sleep()
					}
				}
			}, i.addEventListener("tick", D._updateRoot);
			var Z = function (a, b, c) {
					var d, e, f = a._gsTweenID;
					if (R[f || (a._gsTweenID = f = "t" + S++)] || (R[f] = {
							target: a,
							tweens: []
						}), b && (d = R[f].tweens, d[e = d.length] = b, c))
						for (; --e > -1;) d[e] === b && d.splice(e, 1);
					return R[f].tweens
				},
				$ = function (a, b, c, d) {
					var e, f, g = a.vars.onOverwrite;
					return g && (e = g(a, b, c, d)), g = G.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1
				},
				_ = function (a, b, c, d, e) {
					var f, g, h, i;
					if (1 === d || d >= 4) {
						for (i = e.length, f = 0; i > f; f++)
							if ((h = e[f]) !== b) h._gc || h._kill(null, a, b) && (g = !0);
							else if (5 === d) break;
						return g
					}
					var j, k = b._startTime + m,
						l = [],
						n = 0,
						o = 0 === b._duration;
					for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || aa(b, 0, o), 0 === aa(h, j, o) && (l[n++] = h)) : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && ((o || !h._initted) && k - h._startTime <= 2e-10 || (l[n++] = h)));
					for (f = n; --f > -1;)
						if (h = l[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted) {
							if (2 !== d && !$(h, b)) continue;
							h._enabled(!1, !1) && (g = !0)
						} return g
				},
				aa = function (a, b, c) {
					for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
						if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
						d = d._timeline
					}
					return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * m > f - b ? m : (f += a.totalDuration() / a._timeScale / e) > b + m ? 0 : f - b - m
				};
			h._init = function () {
				var a, b, c, d, e, f, g = this.vars,
					h = this._overwrittenProps,
					i = this._duration,
					j = !!g.immediateRender,
					k = g.ease;
				if (g.startAt) {
					this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};
					for (d in g.startAt) e[d] = g.startAt[d];
					if (e.overwrite = !1, e.immediateRender = !0, e.lazy = j && g.lazy !== !1, e.startAt = e.delay = null, this._startAt = G.to(this.target, 0, e), j)
						if (this._time > 0) this._startAt = null;
						else if (0 !== i) return
				} else if (g.runBackwards && 0 !== i)
					if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
					else {
						0 !== this._time && (j = !1), c = {};
						for (d in g) T[d] && "autoCSS" !== d || (c[d] = g[d]);
						if (c.overwrite = 0, c.data = "isFromStart", c.lazy = j && g.lazy !== !1, c.immediateRender = j, this._startAt = G.to(this.target, 0, c), j) {
							if (0 === this._time) return
						} else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
					} if (this._ease = k = k ? k instanceof v ? k : "function" == typeof k ? new v(k, g.easeParams) : w[k] || G.defaultEase : G.defaultEase, g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
					for (f = this._targets.length, a = 0; f > a; a++) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], h ? h[a] : null, a) && (b = !0);
				else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
				if (b && G._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), g.runBackwards)
					for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
				this._onUpdate = g.onUpdate, this._initted = !0
			}, h._initProps = function (b, c, d, e, f) {
				var g, h, i, j, k, l;
				if (null == b) return !1;
				K[b._gsTweenID] && Y(), this.vars.css || b.style && b !== a && b.nodeType && Q.css && this.vars.autoCSS !== !1 && I(this.vars, b);
				for (g in this.vars)
					if (l = this.vars[g], T[g]) l && (l instanceof Array || l.push && p(l)) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));
					else if (Q[g] && (j = new Q[g])._onInitTween(b, this.vars[g], this, f)) {
					for (this._firstPT = k = {
							_next: this._firstPT,
							t: j,
							p: "setRatio",
							s: 0,
							c: 1,
							f: 1,
							n: g,
							pg: 1,
							pr: j._priority,
							m: 0
						}, h = j._overwriteProps.length; --h > -1;) c[j._overwriteProps[h]] = this._firstPT;
					(j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k)
				} else c[g] = O.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
				return e && this._kill(e, b) ? this._initProps(b, c, d, e, f) : this._overwrite > 1 && this._firstPT && d.length > 1 && _(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e, f)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (K[b._gsTweenID] = !0), i)
			}, h.render = function (a, b, c) {
				var d, e, f, g, h = this._time,
					i = this._duration,
					j = this._rawPrevTime;
				if (a >= i - 1e-7 && a >= 0) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete", c = c || this._timeline.autoRemoveChildren), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 > j || 0 >= a && a >= -1e-7 || j === m && "isPause" !== this.data) && j !== a && (c = !0, j > m && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : m);
				else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== m || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : m)), this._initted || (c = !0);
				else if (this._totalTime = this._time = a, this._easeType) {
					var k = a / i,
						l = this._easeType,
						n = this._easePower;
					(1 === l || 3 === l && k >= .5) && (k = 1 - k), 3 === l && (k *= 2), 1 === n ? k *= k : 2 === n ? k *= k * k : 3 === n ? k *= k * k * k : 4 === n && (k *= k * k * k * k), 1 === l ? this.ratio = 1 - k : 2 === l ? this.ratio = k : .5 > a / i ? this.ratio = k / 2 : this.ratio = 1 - k / 2
				} else this.ratio = this._ease.getRatio(a / i);
				if (this._time !== h || c) {
					if (!this._initted) {
						if (this._init(), !this._initted || this._gc) return;
						if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, J.push(this), void(this._lazy = [a, b]);
						this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
					}
					for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
					this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, b, c), b || (this._time !== h || d || c) && this._callback("onUpdate")), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this._callback(e), 0 === i && this._rawPrevTime === m && g !== m && (this._rawPrevTime = 0))
				}
			}, h._kill = function (a, b, c) {
				if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
				b = "string" != typeof b ? b || this._targets || this.target : G.selector(b) || b;
				var d, e, f, g, h, i, j, k, l, m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
				if ((p(b) || H(b)) && "number" != typeof b[0])
					for (d = b.length; --d > -1;) this._kill(a, b[d], c) && (i = !0);
				else {
					if (this._targets) {
						for (d = this._targets.length; --d > -1;)
							if (b === this._targets[d]) {
								h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
								break
							}
					} else {
						if (b !== this.target) return !1;
						h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
					}
					if (h) {
						if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), c && (G.onOverwrite || this.vars.onOverwrite)) {
							for (f in j) h[f] && (l || (l = []), l.push(f));
							if ((l || !a) && !$(this, c, b, l)) return !1
						}
						for (f in j)(g = h[f]) && (m && (g.f ? g.t[g.p](g.s) : g.t[g.p] = g.s, i = !0), g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
						!this._firstPT && this._initted && this._enabled(!1, !1)
					}
				}
				return i
			}, h.invalidate = function () {
				return this._notifyPluginsOfEnabled && G._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], D.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -m, this.render(Math.min(0, -this._delay))), this
			}, h._enabled = function (a, b) {
				if (j || i.wake(), a && this._gc) {
					var c, d = this._targets;
					if (d)
						for (c = d.length; --c > -1;) this._siblings[c] = Z(d[c], this, !0);
					else this._siblings = Z(this.target, this, !0)
				}
				return D.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? G._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
			}, G.to = function (a, b, c) {
				return new G(a, b, c)
			}, G.from = function (a, b, c) {
				return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new G(a, b, c)
			}, G.fromTo = function (a, b, c, d) {
				return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new G(a, b, d)
			}, G.delayedCall = function (a, b, c, d, e) {
				return new G(b, 0, {
					delay: a,
					onComplete: b,
					onCompleteParams: c,
					callbackScope: d,
					onReverseComplete: b,
					onReverseCompleteParams: c,
					immediateRender: !1,
					lazy: !1,
					useFrames: e,
					overwrite: 0
				})
			}, G.set = function (a, b) {
				return new G(a, 0, b)
			}, G.getTweensOf = function (a, b) {
				if (null == a) return [];
				a = "string" != typeof a ? a : G.selector(a) || a;
				var c, d, e, f;
				if ((p(a) || H(a)) && "number" != typeof a[0]) {
					for (c = a.length, d = []; --c > -1;) d = d.concat(G.getTweensOf(a[c], b));
					for (c = d.length; --c > -1;)
						for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
				} else
					for (d = Z(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
				return d
			}, G.killTweensOf = G.killDelayedCallsTo = function (a, b, c) {
				"object" == typeof b && (c = b, b = !1);
				for (var d = G.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a)
			};
			var ba = t("plugins.TweenPlugin", function (a, b) {
				this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = ba.prototype
			}, !0);
			if (h = ba.prototype, ba.version = "1.19.0", ba.API = 2, h._firstPT = null, h._addTween = O, h.setRatio = M, h._kill = function (a) {
					var b, c = this._overwriteProps,
						d = this._firstPT;
					if (null != a[this._propName]) this._overwriteProps = [];
					else
						for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
					for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
					return !1
				}, h._mod = h._roundProps = function (a) {
					for (var b, c = this._firstPT; c;) b = a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")], b && "function" == typeof b && (2 === c.f ? c.t._applyPT.m = b : c.m = b), c = c._next
				}, G._onPluginEvent = function (a, b) {
					var c, d, e, f, g, h = b._firstPT;
					if ("_onInitAllProps" === a) {
						for (; h;) {
							for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
							(h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
						}
						h = b._firstPT = e
					}
					for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
					return c
				}, ba.activate = function (a) {
					for (var b = a.length; --b > -1;) a[b].API === ba.API && (Q[(new a[b])._propName] = a[b]);
					return !0
				}, s.plugin = function (a) {
					if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
					var b, c = a.propName,
						d = a.priority || 0,
						e = a.overwriteProps,
						f = {
							init: "_onInitTween",
							set: "setRatio",
							kill: "_kill",
							round: "_mod",
							mod: "_mod",
							initAll: "_onInitAllProps"
						},
						g = t("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function () {
							ba.call(this, c, d), this._overwriteProps = e || []
						}, a.global === !0),
						h = g.prototype = new ba(c);
					h.constructor = g, g.API = a.API;
					for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
					return g.version = a.version, ba.activate([g]), g
				}, f = a._gsQueue) {
				for (g = 0; g < f.length; g++) f[g]();
				for (h in q) q[h].func || a.console.log("GSAP encountered missing dependency: " + h)
			}
			j = !1
		}
	}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
/* TIME LINE LITE */
/*!
 * VERSION: 1.17.0
 * DATE: 2015-05-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
		"use strict";
		_gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
			var s = function (t) {
					e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
					var i, s, r = this.vars;
					for (s in r) i = r[s], h(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
					h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
				},
				r = 1e-10,
				n = i._internals,
				a = s._internals = {},
				o = n.isSelector,
				h = n.isArray,
				l = n.lazyTweens,
				_ = n.lazyRender,
				u = [],
				f = _gsScope._gsDefine.globals,
				c = function (t) {
					var e, i = {};
					for (e in t) i[e] = t[e];
					return i
				},
				p = a.pauseCallback = function (t, e, i, s) {
					var n, a = t._timeline,
						o = a._totalTime,
						h = t._startTime,
						l = 0 > t._rawPrevTime || 0 === t._rawPrevTime && a._reversed,
						_ = l ? 0 : r,
						f = l ? r : 0;
					if (e || !this._forcingPlayhead) {
						for (a.pause(h), n = t._prev; n && n._startTime === h;) n._rawPrevTime = f, n = n._prev;
						for (n = t._next; n && n._startTime === h;) n._rawPrevTime = _, n = n._next;
						e && e.apply(s || a.vars.callbackScope || a, i || u), (this._forcingPlayhead || !a._paused) && a.seek(o)
					}
				},
				m = function (t) {
					var e, i = [],
						s = t.length;
					for (e = 0; e !== s; i.push(t[e++]));
					return i
				},
				d = s.prototype = new e;
			return s.version = "1.17.0", d.constructor = s, d.kill()._gc = d._forcingPlayhead = !1, d.to = function (t, e, s, r) {
				var n = s.repeat && f.TweenMax || i;
				return e ? this.add(new n(t, e, s), r) : this.set(t, s, r)
			}, d.from = function (t, e, s, r) {
				return this.add((s.repeat && f.TweenMax || i).from(t, e, s), r)
			}, d.fromTo = function (t, e, s, r, n) {
				var a = r.repeat && f.TweenMax || i;
				return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
			}, d.staggerTo = function (t, e, r, n, a, h, l, _) {
				var u, f = new s({
					onComplete: h,
					onCompleteParams: l,
					callbackScope: _,
					smoothChildTiming: this.smoothChildTiming
				});
				for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = m(t)), n = n || 0, 0 > n && (t = m(t), t.reverse(), n *= -1), u = 0; t.length > u; u++) r.startAt && (r.startAt = c(r.startAt)), f.to(t[u], e, c(r), u * n);
				return this.add(f, a)
			}, d.staggerFrom = function (t, e, i, s, r, n, a, o) {
				return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
			}, d.staggerFromTo = function (t, e, i, s, r, n, a, o, h) {
				return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h)
			}, d.call = function (t, e, s, r) {
				return this.add(i.delayedCall(0, t, e, s), r)
			}, d.set = function (t, e, s) {
				return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
			}, s.exportRoot = function (t, e) {
				t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
				var r, n, a = new s(t),
					o = a._timeline;
				for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
				return o.add(a, 0), a
			}, d.add = function (r, n, a, o) {
				var l, _, u, f, c, p;
				if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
					if (r instanceof Array || r && r.push && h(r)) {
						for (a = a || "normal", o = o || 0, l = n, _ = r.length, u = 0; _ > u; u++) h(f = r[u]) && (f = new s({
							tweens: f
						})), this.add(f, l), "string" != typeof f && "function" != typeof f && ("sequence" === a ? l = f._startTime + f.totalDuration() / f._timeScale : "start" === a && (f._startTime -= f.delay())), l += o;
						return this._uncache(!0)
					}
					if ("string" == typeof r) return this.addLabel(r, n);
					if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
					r = i.delayedCall(0, r)
				}
				if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
					for (c = this, p = c.rawTime() > r._startTime; c._timeline;) p && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline;
				return this
			}, d.remove = function (e) {
				if (e instanceof t) return this._remove(e, !1);
				if (e instanceof Array || e && e.push && h(e)) {
					for (var i = e.length; --i > -1;) this.remove(e[i]);
					return this
				}
				return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
			}, d._remove = function (t, i) {
				e.prototype._remove.call(this, t, i);
				var s = this._last;
				return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
			}, d.append = function (t, e) {
				return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
			}, d.insert = d.insertMultiple = function (t, e, i, s) {
				return this.add(t, e || 0, i, s)
			}, d.appendMultiple = function (t, e, i, s) {
				return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
			}, d.addLabel = function (t, e) {
				return this._labels[t] = this._parseTimeOrLabel(e), this
			}, d.addPause = function (t, e, s, r) {
				var n = i.delayedCall(0, p, ["{self}", e, s, r], this);
				return n.data = "isPause", this.add(n, t)
			}, d.removeLabel = function (t) {
				return delete this._labels[t], this
			}, d.getLabelTime = function (t) {
				return null != this._labels[t] ? this._labels[t] : -1
			}, d._parseTimeOrLabel = function (e, i, s, r) {
				var n;
				if (r instanceof t && r.timeline === this) this.remove(r);
				else if (r && (r instanceof Array || r.push && h(r)))
					for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
				if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
				if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
				else {
					if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
					i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
				}
				return Number(e) + i
			}, d.seek = function (t, e) {
				return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
			}, d.stop = function () {
				return this.paused(!0)
			}, d.gotoAndPlay = function (t, e) {
				return this.play(t, e)
			}, d.gotoAndStop = function (t, e) {
				return this.pause(t, e)
			}, d.render = function (t, e, i) {
				this._gc && this._enabled(!0, !1);
				var s, n, a, o, h, u = this._dirty ? this.totalDuration() : this._totalDuration,
					f = this._time,
					c = this._startTime,
					p = this._timeScale,
					m = this._paused;
				if (t >= u) this._totalTime = this._time = u, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = u + 1e-4;
				else if (1e-7 > t)
					if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = n = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t;
					else {
						if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n)
							for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1), s = s._next;
						t = 0, this._initted || (h = !0)
					}
				else this._totalTime = this._time = this._rawPrevTime = t;
				if (this._time !== f && this._first || i || h) {
					if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= f)
						for (s = this._first; s && (a = s._next, !this._paused || m);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
					else
						for (s = this._last; s && (a = s._prev, !this._paused || m);)(s._active || f >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
					this._onUpdate && (e || (l.length && _(), this._callback("onUpdate"))), o && (this._gc || (c === this._startTime || p !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (n && (l.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
				}
			}, d._hasPausedChild = function () {
				for (var t = this._first; t;) {
					if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
					t = t._next
				}
				return !1
			}, d.getChildren = function (t, e, s, r) {
				r = r || -9999999999;
				for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
				return n
			}, d.getTweensOf = function (t, e) {
				var s, r, n = this._gc,
					a = [],
					o = 0;
				for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
				return n && this._enabled(!1, !0), a
			}, d.recent = function () {
				return this._recent
			}, d._contains = function (t) {
				for (var e = t.timeline; e;) {
					if (e === this) return !0;
					e = e.timeline
				}
				return !1
			}, d.shiftChildren = function (t, e, i) {
				i = i || 0;
				for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
				if (e)
					for (s in n) n[s] >= i && (n[s] += t);
				return this._uncache(!0)
			}, d._kill = function (t, e) {
				if (!t && !e) return this._enabled(!1, !1);
				for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
				return r
			}, d.clear = function (t) {
				var e = this.getChildren(!1, !0, !0),
					i = e.length;
				for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
				return t !== !1 && (this._labels = {}), this._uncache(!0)
			}, d.invalidate = function () {
				for (var e = this._first; e;) e.invalidate(), e = e._next;
				return t.prototype.invalidate.call(this)
			}, d._enabled = function (t, i) {
				if (t === this._gc)
					for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
				return e.prototype._enabled.call(this, t, i)
			}, d.totalTime = function () {
				this._forcingPlayhead = !0;
				var e = t.prototype.totalTime.apply(this, arguments);
				return this._forcingPlayhead = !1, e
			}, d.duration = function (t) {
				return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
			}, d.totalDuration = function (t) {
				if (!arguments.length) {
					if (this._dirty) {
						for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
						this._duration = this._totalDuration = s, this._dirty = !1
					}
					return this._totalDuration
				}
				return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
			}, d.paused = function (e) {
				if (!e)
					for (var i = this._first, s = this._time; i;) i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
				return t.prototype.paused.apply(this, arguments)
			}, d.usesFrames = function () {
				for (var e = this._timeline; e._timeline;) e = e._timeline;
				return e === t._rootFramesTimeline
			}, d.rawTime = function () {
				return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
			}, s
		}, !0)
	}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
	function (t) {
		"use strict";
		var e = function () {
			return (_gsScope.GreenSockGlobals || _gsScope)[t]
		};
		"function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = e())
	}("TimelineLite");
/* EASING PLUGIN*/
/*!
 * VERSION: 1.15.5
 * DATE: 2016-07-08
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
		"use strict";
		_gsScope._gsDefine("easing.Back", ["easing.Ease"], function (a) {
			var b, c, d, e = _gsScope.GreenSockGlobals || _gsScope,
				f = e.com.greensock,
				g = 2 * Math.PI,
				h = Math.PI / 2,
				i = f._class,
				j = function (b, c) {
					var d = i("easing." + b, function () {}, !0),
						e = d.prototype = new a;
					return e.constructor = d, e.getRatio = c, d
				},
				k = a.register || function () {},
				l = function (a, b, c, d, e) {
					var f = i("easing." + a, {
						easeOut: new b,
						easeIn: new c,
						easeInOut: new d
					}, !0);
					return k(f, a), f
				},
				m = function (a, b, c) {
					this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
				},
				n = function (b, c) {
					var d = i("easing." + b, function (a) {
							this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1
						}, !0),
						e = d.prototype = new a;
					return e.constructor = d, e.getRatio = c, e.config = function (a) {
						return new d(a)
					}, d
				},
				o = l("Back", n("BackOut", function (a) {
					return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
				}), n("BackIn", function (a) {
					return a * a * ((this._p1 + 1) * a - this._p1)
				}), n("BackInOut", function (a) {
					return (a *= 2) < 1 ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
				})),
				p = i("easing.SlowMo", function (a, b, c) {
					b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0
				}, !0),
				q = p.prototype = new a;
			return q.constructor = p, q.getRatio = function (a) {
				var b = a + (.5 - a) * this._p;
				return a < this._p1 ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
			}, p.ease = new p(.7, .7), q.config = p.config = function (a, b, c) {
				return new p(a, b, c)
			}, b = i("easing.SteppedEase", function (a) {
				a = a || 1, this._p1 = 1 / a, this._p2 = a + 1
			}, !0), q = b.prototype = new a, q.constructor = b, q.getRatio = function (a) {
				return 0 > a ? a = 0 : a >= 1 && (a = .999999999), (this._p2 * a >> 0) * this._p1
			}, q.config = b.config = function (a) {
				return new b(a)
			}, c = i("easing.RoughEase", function (b) {
				b = b || {};
				for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), n = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --n > -1;) c = o ? Math.random() : 1 / l * n, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = f * f * .5 * r) : (f = 2 * (1 - c), e = f * f * .5 * r), o ? d += Math.random() * e - .5 * e : n % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = {
					x: c,
					y: d
				};
				for (j.sort(function (a, b) {
						return a.x - b.x
					}), h = new m(1, 1, null), n = l; --n > -1;) g = j[n], h = new m(g.x, g.y, h);
				this._prev = new m(0, 0, 0 !== h.t ? h : h.next)
			}, !0), q = c.prototype = new a, q.constructor = c, q.getRatio = function (a) {
				var b = this._prev;
				if (a > b.t) {
					for (; b.next && a >= b.t;) b = b.next;
					b = b.prev
				} else
					for (; b.prev && a <= b.t;) b = b.prev;
				return this._prev = b, b.v + (a - b.t) / b.gap * b.c
			}, q.config = function (a) {
				return new c(a)
			}, c.ease = new c, l("Bounce", j("BounceOut", function (a) {
				return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
			}), j("BounceIn", function (a) {
				return (a = 1 - a) < 1 / 2.75 ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
			}), j("BounceInOut", function (a) {
				var b = .5 > a;
				return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5
			})), l("Circ", j("CircOut", function (a) {
				return Math.sqrt(1 - (a -= 1) * a)
			}), j("CircIn", function (a) {
				return -(Math.sqrt(1 - a * a) - 1)
			}), j("CircInOut", function (a) {
				return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
			})), d = function (b, c, d) {
				var e = i("easing." + b, function (a, b) {
						this._p1 = a >= 1 ? a : 1, this._p2 = (b || d) / (1 > a ? a : 1), this._p3 = this._p2 / g * (Math.asin(1 / this._p1) || 0), this._p2 = g / this._p2
					}, !0),
					f = e.prototype = new a;
				return f.constructor = e, f.getRatio = c, f.config = function (a, b) {
					return new e(a, b)
				}, e
			}, l("Elastic", d("ElasticOut", function (a) {
				return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1
			}, .3), d("ElasticIn", function (a) {
				return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2))
			}, .3), d("ElasticInOut", function (a) {
				return (a *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * .5 + 1
			}, .45)), l("Expo", j("ExpoOut", function (a) {
				return 1 - Math.pow(2, -10 * a)
			}), j("ExpoIn", function (a) {
				return Math.pow(2, 10 * (a - 1)) - .001
			}), j("ExpoInOut", function (a) {
				return (a *= 2) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
			})), l("Sine", j("SineOut", function (a) {
				return Math.sin(a * h)
			}), j("SineIn", function (a) {
				return -Math.cos(a * h) + 1
			}), j("SineInOut", function (a) {
				return -.5 * (Math.cos(Math.PI * a) - 1)
			})), i("easing.EaseLookup", {
				find: function (b) {
					return a.map[b]
				}
			}, !0), k(e.SlowMo, "SlowMo", "ease,"), k(c, "RoughEase", "ease,"), k(b, "SteppedEase", "ease,"), o
		}, !0)
	}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
	function () {
		"use strict";
		var a = function () {
			return _gsScope.GreenSockGlobals || _gsScope
		};
		"function" == typeof define && define.amd ? define(["TweenLite"], a) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = a())
	}();
/* CSS PLUGIN */
/*!
 * VERSION: 1.19.1
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
		"use strict";
		_gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (a, b) {
			var c, d, e, f, g = function () {
					a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio
				},
				h = _gsScope._gsDefine.globals,
				i = {},
				j = g.prototype = new a("css");
			j.constructor = g, g.version = "1.19.1", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", g.defaultSmoothOrigin = !0, j = "px", g.suffixMap = {
				top: j,
				right: j,
				bottom: j,
				left: j,
				width: j,
				height: j,
				fontSize: j,
				padding: j,
				margin: j,
				perspective: j,
				lineHeight: ""
			};
			var k, l, m, n, o, p, q, r, s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
				t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
				u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
				v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
				w = /(?:\d|\-|\+|=|#|\.)*/g,
				x = /opacity *= *([^)]*)/i,
				y = /opacity:([^;]*)/i,
				z = /alpha\(opacity *=.+?\)/i,
				A = /^(rgb|hsl)/,
				B = /([A-Z])/g,
				C = /-([a-z])/gi,
				D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
				E = function (a, b) {
					return b.toUpperCase()
				},
				F = /(?:Left|Right|Width)/i,
				G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
				H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
				I = /,(?=[^\)]*(?:\(|$))/gi,
				J = /[\s,\(]/i,
				K = Math.PI / 180,
				L = 180 / Math.PI,
				M = {},
				N = {
					style: {}
				},
				O = _gsScope.document || {
					createElement: function () {
						return N
					}
				},
				P = function (a, b) {
					return O.createElementNS ? O.createElementNS(b || "http://www.w3.org/1999/xhtml", a) : O.createElement(a)
				},
				Q = P("div"),
				R = P("img"),
				S = g._internals = {
					_specialProps: i
				},
				T = (_gsScope.navigator || {}).userAgent || "",
				U = function () {
					var a = T.indexOf("Android"),
						b = P("a");
					return m = -1 !== T.indexOf("Safari") && -1 === T.indexOf("Chrome") && (-1 === a || parseFloat(T.substr(a + 8, 2)) > 3), o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6, n = -1 !== T.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) && (p = parseFloat(RegExp.$1)), b ? (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity)) : !1
				}(),
				V = function (a) {
					return x.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
				},
				W = function (a) {
					_gsScope.console && console.log(a)
				},
				X = "",
				Y = "",
				Z = function (a, b) {
					b = b || Q;
					var c, d, e = b.style;
					if (void 0 !== e[a]) return a;
					for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];);
					return d >= 0 ? (Y = 3 === d ? "ms" : c[d], X = "-" + Y.toLowerCase() + "-", Y + a) : null
				},
				$ = O.defaultView ? O.defaultView.getComputedStyle : function () {},
				_ = g.getStyle = function (a, b, c, d, e) {
					var f;
					return U || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || $(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(B, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : V(a)
				},
				aa = S.convertToPixels = function (a, c, d, e, f) {
					if ("px" === e || !e) return d;
					if ("auto" === e || !d) return 0;
					var h, i, j, k = F.test(c),
						l = a,
						m = Q.style,
						n = 0 > d,
						o = 1 === d;
					if (n && (d = -d), o && (d *= 100), "%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight);
					else {
						if (m.cssText = "border:0 solid red;position:" + _(a, "position") + ";line-height:0;", "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
						else {
							if (l = a.parentNode || O.body, i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
							m[k ? "width" : "height"] = d + e
						}
						l.appendChild(Q), h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(Q), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = h / d * 100), 0 !== h || f || (h = aa(a, c, d, e, !0))
					}
					return o && (h /= 100), n ? -h : h
				},
				ba = S.calculateOffset = function (a, b, c) {
					if ("absolute" !== _(a, "position", c)) return 0;
					var d = "left" === b ? "Left" : "Top",
						e = _(a, "margin" + d, c);
					return a["offset" + d] - (aa(a, b, parseFloat(e), e.replace(w, "")) || 0)
				},
				ca = function (a, b) {
					var c, d, e, f = {};
					if (b = b || $(a, null))
						if (c = b.length)
							for (; --c > -1;) e = b[c], (-1 === e.indexOf("-transform") || Da === e) && (f[e.replace(C, E)] = b.getPropertyValue(e));
						else
							for (c in b)(-1 === c.indexOf("Transform") || Ca === c) && (f[c] = b[c]);
					else if (b = a.currentStyle || a.style)
						for (c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(C, E)] = b[c]);
					return U || (f.opacity = V(a)), d = Ra(a, b, !1), f.rotation = d.rotation, f.skewX = d.skewX, f.scaleX = d.scaleX, f.scaleY = d.scaleY, f.x = d.x, f.y = d.y, Fa && (f.z = d.z, f.rotationX = d.rotationX, f.rotationY = d.rotationY, f.scaleZ = d.scaleZ), f.filters && delete f.filters, f
				},
				da = function (a, b, c, d, e) {
					var f, g, h, i = {},
						j = a.style;
					for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(v, "") ? f : 0 : ba(a, g), void 0 !== j[g] && (h = new sa(j, g, j[g], h)));
					if (d)
						for (g in d) "className" !== g && (i[g] = d[g]);
					return {
						difs: i,
						firstMPT: h
					}
				},
				ea = {
					width: ["Left", "Right"],
					height: ["Top", "Bottom"]
				},
				fa = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
				ga = function (a, b, c) {
					if ("svg" === (a.nodeName + "").toLowerCase()) return (c || $(a))[b] || 0;
					if (a.getCTM && Oa(a)) return a.getBBox()[b] || 0;
					var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
						e = ea[b],
						f = e.length;
					for (c = c || $(a, null); --f > -1;) d -= parseFloat(_(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(_(a, "border" + e[f] + "Width", c, !0)) || 0;
					return d
				},
				ha = function (a, b) {
					if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
					(null == a || "" === a) && (a = "0 0");
					var c, d = a.split(" "),
						e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0],
						f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];
					if (d.length > 3 && !b) {
						for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++) a.push(ha(d[c]));
						return a.join(",")
					}
					return null == f ? f = "center" === e ? "50%" : "0" : "center" === f && (f = "50%"), ("center" === e || isNaN(parseFloat(e)) && -1 === (e + "").indexOf("=")) && (e = "50%"), a = e + " " + f + (d.length > 2 ? " " + d[2] : ""), b && (b.oxp = -1 !== e.indexOf("%"), b.oyp = -1 !== f.indexOf("%"), b.oxr = "=" === e.charAt(1), b.oyr = "=" === f.charAt(1), b.ox = parseFloat(e.replace(v, "")), b.oy = parseFloat(f.replace(v, "")), b.v = a), b || a
				},
				ia = function (a, b) {
					return "function" == typeof a && (a = a(r, q)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0
				},
				ja = function (a, b) {
					return "function" == typeof a && (a = a(r, q)), null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0
				},
				ka = function (a, b, c, d) {
					var e, f, g, h, i, j = 1e-6;
					return "function" == typeof a && (a = a(r, q)), null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : L) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (g / e | 0) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (g / e | 0) * e)), h = b + g), j > h && h > -j && (h = 0), h
				},
				la = {
					aqua: [0, 255, 255],
					lime: [0, 255, 0],
					silver: [192, 192, 192],
					black: [0, 0, 0],
					maroon: [128, 0, 0],
					teal: [0, 128, 128],
					blue: [0, 0, 255],
					navy: [0, 0, 128],
					white: [255, 255, 255],
					fuchsia: [255, 0, 255],
					olive: [128, 128, 0],
					yellow: [255, 255, 0],
					orange: [255, 165, 0],
					gray: [128, 128, 128],
					purple: [128, 0, 128],
					green: [0, 128, 0],
					red: [255, 0, 0],
					pink: [255, 192, 203],
					cyan: [0, 255, 255],
					transparent: [255, 255, 255, 0]
				},
				ma = function (a, b, c) {
					return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 255 * (1 > 6 * a ? b + (c - b) * a * 6 : .5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + .5 | 0
				},
				na = g.parseColor = function (a, b) {
					var c, d, e, f, g, h, i, j, k, l, m;
					if (a)
						if ("number" == typeof a) c = [a >> 16, a >> 8 & 255, 255 & a];
						else {
							if ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), la[a]) c = la[a];
							else if ("#" === a.charAt(0)) 4 === a.length && (d = a.charAt(1), e = a.charAt(2), f = a.charAt(3), a = "#" + d + d + e + e + f + f), a = parseInt(a.substr(1), 16), c = [a >> 16, a >> 8 & 255, 255 & a];
							else if ("hsl" === a.substr(0, 3))
								if (c = m = a.match(s), b) {
									if (-1 !== a.indexOf("=")) return a.match(t)
								} else g = Number(c[0]) % 360 / 360, h = Number(c[1]) / 100, i = Number(c[2]) / 100, e = .5 >= i ? i * (h + 1) : i + h - i * h, d = 2 * i - e, c.length > 3 && (c[3] = Number(a[3])), c[0] = ma(g + 1 / 3, d, e), c[1] = ma(g, d, e), c[2] = ma(g - 1 / 3, d, e);
							else c = a.match(s) || la.transparent;
							c[0] = Number(c[0]), c[1] = Number(c[1]), c[2] = Number(c[2]), c.length > 3 && (c[3] = Number(c[3]))
						}
					else c = la.black;
					return b && !m && (d = c[0] / 255, e = c[1] / 255, f = c[2] / 255, j = Math.max(d, e, f), k = Math.min(d, e, f), i = (j + k) / 2, j === k ? g = h = 0 : (l = j - k, h = i > .5 ? l / (2 - j - k) : l / (j + k), g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4, g *= 60), c[0] = g + .5 | 0, c[1] = 100 * h + .5 | 0, c[2] = 100 * i + .5 | 0), c
				},
				oa = function (a, b) {
					var c, d, e, f = a.match(pa) || [],
						g = 0,
						h = f.length ? "" : a;
					for (c = 0; c < f.length; c++) d = f[c], e = a.substr(g, a.indexOf(d, g) - g), g += e.length + d.length, d = na(d, b), 3 === d.length && d.push(1), h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")";
					return h + a.substr(g)
				},
				pa = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
			for (j in la) pa += "|" + j + "\\b";
			pa = new RegExp(pa + ")", "gi"), g.colorStringFilter = function (a) {
				var b, c = a[0] + a[1];
				pa.test(c) && (b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla("), a[0] = oa(a[0], b), a[1] = oa(a[1], b)), pa.lastIndex = 0
			}, b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
			var qa = function (a, b, c, d) {
					if (null == a) return function (a) {
						return a
					};
					var e, f = b ? (a.match(pa) || [""])[0] : "",
						g = a.split(f).join("").match(u) || [],
						h = a.substr(0, a.indexOf(g[0])),
						i = ")" === a.charAt(a.length - 1) ? ")" : "",
						j = -1 !== a.indexOf(" ") ? " " : ",",
						k = g.length,
						l = k > 0 ? g[0].replace(s, "") : "";
					return k ? e = b ? function (a) {
						var b, m, n, o;
						if ("number" == typeof a) a += l;
						else if (d && I.test(a)) {
							for (o = a.replace(I, "|").split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]);
							return o.join(",")
						}
						if (b = (a.match(pa) || [f])[0], m = a.split(b).join("").match(u) || [], n = m.length, k > n--)
							for (; ++n < k;) m[n] = c ? m[(n - 1) / 2 | 0] : g[n];
						return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
					} : function (a) {
						var b, f, m;
						if ("number" == typeof a) a += l;
						else if (d && I.test(a)) {
							for (f = a.replace(I, "|").split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]);
							return f.join(",")
						}
						if (b = a.match(u) || [], m = b.length, k > m--)
							for (; ++m < k;) b[m] = c ? b[(m - 1) / 2 | 0] : g[m];
						return h + b.join(j) + i
					} : function (a) {
						return a
					}
				},
				ra = function (a) {
					return a = a.split(","),
						function (b, c, d, e, f, g, h) {
							var i, j = (c + "").split(" ");
							for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
							return e.parse(b, h, f, g)
						}
				},
				sa = (S._setPluginRatio = function (a) {
					this.plugin.setRatio(a);
					for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i;) b = h[i.v], i.r ? b = Math.round(b) : j > b && b > -j && (b = 0), i.t[i.p] = b, i = i._next;
					if (g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod(h.rotation, this.t) : h.rotation), 1 === a || 0 === a)
						for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i;) {
							if (c = i.t, c.type) {
								if (1 === c.type) {
									for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
									c[f] = e
								}
							} else c[f] = c.s + c.xs0;
							i = i._next
						}
				}, function (a, b, c, d, e) {
					this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d)
				}),
				ta = (S._parseToProxy = function (a, b, c, d, e, f) {
					var g, h, i, j, k, l = d,
						m = {},
						n = {},
						o = c._transform,
						p = M;
					for (c._transform = null, M = b, d = k = c.parse(a, b, d, e), M = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
						if (d.type <= 1 && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new sa(d, "s", h, j, d.r), d.c = 0), 1 === d.type))
							for (g = d.l; --g > 0;) i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new sa(d, i, h, j, d.rxp[i]));
						d = d._next
					}
					return {
						proxy: m,
						end: n,
						firstMPT: j,
						pt: k
					}
				}, S.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
					this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof ta || f.push(this.n), this.r = j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this)
				}),
				ua = function (a, b, c, d, e, f) {
					var g = new ta(a, b, c, d - c, e, -1, f);
					return g.b = c, g.e = g.xs0 = d, g
				},
				va = g.parseComplex = function (a, b, c, d, e, f, h, i, j, l) {
					c = c || f || "", "function" == typeof d && (d = d(r, q)), h = new ta(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d), d += "", e && pa.test(d + c) && (d = [c, d], g.colorStringFilter(d), c = d[0], d = d[1]);
					var m, n, o, p, u, v, w, x, y, z, A, B, C, D = c.split(", ").join(",").split(" "),
						E = d.split(", ").join(",").split(" "),
						F = D.length,
						G = k !== !1;
					for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (D = D.join(" ").replace(I, ", ").split(" "), E = E.join(" ").replace(I, ", ").split(" "), F = D.length), F !== E.length && (D = (f || "").split(" "), F = D.length), h.plugin = j, h.setRatio = l, pa.lastIndex = 0, m = 0; F > m; m++)
						if (p = D[m], u = E[m], x = parseFloat(p), x || 0 === x) h.appendXtra("", x, ia(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px"), !0);
						else if (e && pa.test(p)) B = u.indexOf(")") + 1, B = ")" + (B ? u.substr(B) : ""), C = -1 !== u.indexOf("hsl") && U, p = na(p, C), u = na(u, C), y = p.length + u.length > 6, y && !U && 0 === u[3] ? (h["xs" + h.l] += h.l ? " transparent" : "transparent", h.e = h.e.split(E[m]).join("transparent")) : (U || (y = !1), C ? h.appendXtra(y ? "hsla(" : "hsl(", p[0], ia(u[0], p[0]), ",", !1, !0).appendXtra("", p[1], ia(u[1], p[1]), "%,", !1).appendXtra("", p[2], ia(u[2], p[2]), y ? "%," : "%" + B, !1) : h.appendXtra(y ? "rgba(" : "rgb(", p[0], u[0] - p[0], ",", !0, !0).appendXtra("", p[1], u[1] - p[1], ",", !0).appendXtra("", p[2], u[2] - p[2], y ? "," : B, !0), y && (p = p.length < 4 ? 1 : p[3], h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))), pa.lastIndex = 0;
					else if (v = p.match(s)) {
						if (w = u.match(t), !w || w.length !== v.length) return h;
						for (o = 0, n = 0; n < v.length; n++) A = v[n], z = p.indexOf(A, o), h.appendXtra(p.substr(o, z - o), Number(A), ia(w[n], A), "", G && "px" === p.substr(z + A.length, 2), 0 === n), o = z + A.length;
						h["xs" + h.l] += p.substr(o)
					} else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
					if (-1 !== d.indexOf("=") && h.data) {
						for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++) B += h["xs" + m] + h.data["xn" + m];
						h.e = B + h["xs" + m]
					}
					return h.l || (h.type = -1, h.xs0 = h.e), h.xfirst || h
				},
				wa = 9;
			for (j = ta.prototype, j.l = j.pr = 0; --wa > 0;) j["xn" + wa] = 0, j["xs" + wa] = "";
			j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function (a, b, c, d, e, f) {
				var g = this,
					h = g.l;
				return g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new ta(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
					s: b + c
				}, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
			};
			var xa = function (a, b) {
					b = b || {}, this.p = b.prefix ? Z(a) || a : a, i[a] = i[this.p] = this, this.format = b.formatter || qa(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0
				},
				ya = S._registerComplexSpecialProp = function (a, b, c) {
					"object" != typeof b && (b = {
						parser: c
					});
					var d, e, f = a.split(","),
						g = b.defaultValue;
					for (c = c || [g], d = 0; d < f.length; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new xa(f[d], b)
				},
				za = S._registerPluginProp = function (a) {
					if (!i[a]) {
						var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
						ya(a, {
							parser: function (a, c, d, e, f, g, j) {
								var k = h.com.greensock.plugins[b];
								return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (W("Error: " + b + " js file not loaded."), f)
							}
						})
					}
				};
			j = xa.prototype, j.parseComplex = function (a, b, c, d, e, f) {
				var g, h, i, j, k, l, m = this.keyword;
				if (this.multi && (I.test(c) || I.test(b) ? (h = b.replace(I, "|").split("|"), i = c.replace(I, "|").split("|")) : m && (h = [b], i = [c])), i) {
					for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (-1 === l ? h[g] = h[g].split(m).join("") : -1 === k && (h[g] += " " + m)));
					b = h.join(", "), c = i.join(", ")
				}
				return va(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
			}, j.parse = function (a, b, c, d, f, g, h) {
				return this.parseComplex(a.style, this.format(_(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
			}, g.registerSpecialProp = function (a, b, c) {
				ya(a, {
					parser: function (a, d, e, f, g, h, i) {
						var j = new ta(a, e, 0, 0, g, 2, e, !1, c);
						return j.plugin = h, j.setRatio = b(a, d, f._tween, e), j
					},
					priority: c
				})
			}, g.useSVGTransformAttr = !0;
			var Aa, Ba = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
				Ca = Z("transform"),
				Da = X + "transform",
				Ea = Z("transformOrigin"),
				Fa = null !== Z("perspective"),
				Ga = S.Transform = function () {
					this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = g.defaultForce3D !== !1 && Fa ? g.defaultForce3D || "auto" : !1
				},
				Ha = _gsScope.SVGElement,
				Ia = function (a, b, c) {
					var d, e = O.createElementNS("http://www.w3.org/2000/svg", a),
						f = /([a-z])([A-Z])/g;
					for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
					return b.appendChild(e), e
				},
				Ja = O.documentElement || {},
				Ka = function () {
					var a, b, c, d = p || /Android/i.test(T) && !_gsScope.chrome;
					return O.createElementNS && !d && (a = Ia("svg", Ja), b = Ia("rect", a, {
						width: 100,
						height: 50,
						x: 100
					}), c = b.getBoundingClientRect().width, b.style[Ea] = "50% 50%", b.style[Ca] = "scaleX(0.5)", d = c === b.getBoundingClientRect().width && !(n && Fa), Ja.removeChild(a)), d
				}(),
				La = function (a, b, c, d, e, f) {
					var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = a._gsTransform,
						w = Qa(a, !0);
					v && (t = v.xOrigin, u = v.yOrigin), (!d || (h = d.split(" ")).length < 2) && (n = a.getBBox(), 0 === n.x && 0 === n.y && n.width + n.height === 0 && (n = {
						x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0,
						y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0,
						width: 0,
						height: 0
					}), b = ha(b).split(" "), h = [(-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * n.height : parseFloat(b[1])) + n.y]), c.xOrigin = k = parseFloat(h[0]), c.yOrigin = l = parseFloat(h[1]), d && w !== Pa && (m = w[0], n = w[1], o = w[2], p = w[3], q = w[4], r = w[5], s = m * p - n * o, s && (i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s, j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s, k = c.xOrigin = h[0] = i, l = c.yOrigin = h[1] = j)), v && (f && (c.xOffset = v.xOffset, c.yOffset = v.yOffset, v = c), e || e !== !1 && g.defaultSmoothOrigin !== !1 ? (i = k - t, j = l - u, v.xOffset += i * w[0] + j * w[2] - i, v.yOffset += i * w[1] + j * w[3] - j) : v.xOffset = v.yOffset = 0), f || a.setAttribute("data-svg-origin", h.join(" "))
				},
				Ma = function (a) {
					var b, c = P("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
						d = this.parentNode,
						e = this.nextSibling,
						f = this.style.cssText;
					if (Ja.appendChild(c), c.appendChild(this), this.style.display = "block", a) try {
						b = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Ma
					} catch (g) {} else this._originalGetBBox && (b = this._originalGetBBox());
					return e ? d.insertBefore(this, e) : d.appendChild(this), Ja.removeChild(c), this.style.cssText = f, b
				},
				Na = function (a) {
					try {
						return a.getBBox()
					} catch (b) {
						return Ma.call(a, !0)
					}
				},
				Oa = function (a) {
					return !(!(Ha && a.getCTM && Na(a)) || a.parentNode && !a.ownerSVGElement)
				},
				Pa = [1, 0, 0, 1, 0, 0],
				Qa = function (a, b) {
					var c, d, e, f, g, h, i = a._gsTransform || new Ga,
						j = 1e5,
						k = a.style;
					if (Ca ? d = _(a, Da, null, !0) : a.currentStyle && (d = a.currentStyle.filter.match(G), d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), i.x || 0, i.y || 0].join(",") : ""), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, c && Ca && ((h = "none" === $(a).display) || !a.parentNode) && (h && (f = k.display, k.display = "block"), a.parentNode || (g = 1, Ja.appendChild(a)), d = _(a, Da, null, !0), c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d, f ? k.display = f : h && Va(k, "display"), g && Ja.removeChild(a)), (i.svg || a.getCTM && Oa(a)) && (c && -1 !== (k[Ca] + "").indexOf("matrix") && (d = k[Ca], c = 0), e = a.getAttribute("transform"), c && e && (-1 !== e.indexOf("matrix") ? (d = e, c = 0) : -1 !== e.indexOf("translate") && (d = "matrix(1,0,0,1," + e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", c = 0))), c) return Pa;
					for (e = (d || "").match(s) || [], wa = e.length; --wa > -1;) f = Number(e[wa]), e[wa] = (g = f - (f |= 0)) ? (g * j + (0 > g ? -.5 : .5) | 0) / j + f : f;
					return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e
				},
				Ra = S.getTransform = function (a, c, d, e) {
					if (a._gsTransform && d && !e) return a._gsTransform;
					var f, h, i, j, k, l, m = d ? a._gsTransform || new Ga : new Ga,
						n = m.scaleX < 0,
						o = 2e-5,
						p = 1e5,
						q = Fa ? parseFloat(_(a, Ea, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0,
						r = parseFloat(g.defaultTransformPerspective) || 0;
					if (m.svg = !(!a.getCTM || !Oa(a)), m.svg && (La(a, _(a, Ea, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), Aa = g.useSVGTransformAttr || Ka), f = Qa(a), f !== Pa) {
						if (16 === f.length) {
							var s, t, u, v, w, x = f[0],
								y = f[1],
								z = f[2],
								A = f[3],
								B = f[4],
								C = f[5],
								D = f[6],
								E = f[7],
								F = f[8],
								G = f[9],
								H = f[10],
								I = f[12],
								J = f[13],
								K = f[14],
								M = f[11],
								N = Math.atan2(D, H);
							m.zOrigin && (K = -m.zOrigin, I = F * K - f[12], J = G * K - f[13], K = H * K + m.zOrigin - f[14]), m.rotationX = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = B * v + F * w, t = C * v + G * w, u = D * v + H * w, F = B * -w + F * v, G = C * -w + G * v, H = D * -w + H * v, M = E * -w + M * v, B = s, C = t, D = u), N = Math.atan2(-z, H), m.rotationY = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), s = x * v - F * w, t = y * v - G * w, u = z * v - H * w, G = y * w + G * v, H = z * w + H * v, M = A * w + M * v, x = s, y = t, z = u), N = Math.atan2(y, x), m.rotation = N * L, N && (v = Math.cos(-N), w = Math.sin(-N), x = x * v + B * w, t = y * v + C * w, C = y * -w + C * v, D = z * -w + D * v, y = t), m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY = 180 - m.rotationY), m.scaleX = (Math.sqrt(x * x + y * y) * p + .5 | 0) / p, m.scaleY = (Math.sqrt(C * C + G * G) * p + .5 | 0) / p, m.scaleZ = (Math.sqrt(D * D + H * H) * p + .5 | 0) / p, m.rotationX || m.rotationY ? m.skewX = 0 : (m.skewX = B || C ? Math.atan2(B, C) * L + m.rotation : m.skewX || 0, Math.abs(m.skewX) > 90 && Math.abs(m.skewX) < 270 && (n ? (m.scaleX *= -1, m.skewX += m.rotation <= 0 ? 180 : -180, m.rotation += m.rotation <= 0 ? 180 : -180) : (m.scaleY *= -1, m.skewX += m.skewX <= 0 ? 180 : -180))), m.perspective = M ? 1 / (0 > M ? -M : M) : 0, m.x = I, m.y = J, m.z = K, m.svg && (m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B), m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C))
						} else if (!Fa || e || !f.length || m.x !== f[4] || m.y !== f[5] || !m.rotationX && !m.rotationY) {
							var O = f.length >= 6,
								P = O ? f[0] : 1,
								Q = f[1] || 0,
								R = f[2] || 0,
								S = O ? f[3] : 1;
							m.x = f[4] || 0, m.y = f[5] || 0, i = Math.sqrt(P * P + Q * Q), j = Math.sqrt(S * S + R * R), k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0, l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0, Math.abs(l) > 90 && Math.abs(l) < 270 && (n ? (i *= -1, l += 0 >= k ? 180 : -180, k += 0 >= k ? 180 : -180) : (j *= -1, l += 0 >= l ? 180 : -180)), m.scaleX = i, m.scaleY = j, m.rotation = k, m.skewX = l, Fa && (m.rotationX = m.rotationY = m.z = 0, m.perspective = r, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R), m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S))
						}
						m.zOrigin = q;
						for (h in m) m[h] < o && m[h] > -o && (m[h] = 0)
					}
					return d && (a._gsTransform = m, m.svg && (Aa && a.style[Ca] ? b.delayedCall(.001, function () {
						Va(a.style, Ca)
					}) : !Aa && a.getAttribute("transform") && b.delayedCall(.001, function () {
						a.removeAttribute("transform")
					}))), m
				},
				Sa = function (a) {
					var b, c, d = this.data,
						e = -d.rotation * K,
						f = e + d.skewX * K,
						g = 1e5,
						h = (Math.cos(e) * d.scaleX * g | 0) / g,
						i = (Math.sin(e) * d.scaleX * g | 0) / g,
						j = (Math.sin(f) * -d.scaleY * g | 0) / g,
						k = (Math.cos(f) * d.scaleY * g | 0) / g,
						l = this.t.style,
						m = this.t.currentStyle;
					if (m) {
						c = i, i = -j, j = -c, b = m.filter, l.filter = "";
						var n, o, q = this.t.offsetWidth,
							r = this.t.offsetHeight,
							s = "absolute" !== m.position,
							t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
							u = d.x + q * d.xPercent / 100,
							v = d.y + r * d.yPercent / 100;
						if (null != d.ox && (n = (d.oxp ? q * d.ox * .01 : d.ox) - q / 2, o = (d.oyp ? r * d.oy * .01 : d.oy) - r / 2, u += n - (n * h + o * i), v += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")") : t += ", sizingMethod='auto expand')", -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = b.replace(H, t) : l.filter = t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || x.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
							var y, z, A, B = 8 > p ? 1 : -1;
							for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v), wa = 0; 4 > wa; wa++) z = fa[wa], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : aa(this.t, z, parseFloat(y), y.replace(w, "")) || 0, A = c !== d[z] ? 2 > wa ? -d.ieOffsetX : -d.ieOffsetY : 2 > wa ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === wa || 2 === wa ? 1 : B))) + "px"
						}
					}
				},
				Ta = S.set3DTransformRatio = S.setTransformRatio = function (a) {
					var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z = this.data,
						A = this.t.style,
						B = z.rotation,
						C = z.rotationX,
						D = z.rotationY,
						E = z.scaleX,
						F = z.scaleY,
						G = z.scaleZ,
						H = z.x,
						I = z.y,
						J = z.z,
						L = z.svg,
						M = z.perspective,
						N = z.force3D,
						O = z.skewY,
						P = z.skewX;
					if (O && (P += O, B += O), ((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !N) && !J && !M && !D && !C && 1 === G || Aa && L || !Fa) return void(B || P || L ? (B *= K, x = P * K, y = 1e5, c = Math.cos(B) * E, f = Math.sin(B) * E, d = Math.sin(B - x) * -F, g = Math.cos(B - x) * F, x && "simple" === z.skewType && (b = Math.tan(x - O * K), b = Math.sqrt(1 + b * b), d *= b, g *= b, O && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b)), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset, Aa && (z.xPercent || z.yPercent) && (q = this.t.getBBox(), H += .01 * z.xPercent * q.width, I += .01 * z.yPercent * q.height), q = 1e-6, q > H && H > -q && (H = 0), q > I && I > -q && (I = 0)), u = (c * y | 0) / y + "," + (f * y | 0) / y + "," + (d * y | 0) / y + "," + (g * y | 0) / y + "," + H + "," + I + ")", L && Aa ? this.t.setAttribute("transform", "matrix(" + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u) : A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")");
					if (n && (q = 1e-4, q > E && E > -q && (E = G = 2e-5), q > F && F > -q && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || P) B *= K, r = c = Math.cos(B), s = f = Math.sin(B), P && (B -= P * K, r = Math.cos(B), s = Math.sin(B), "simple" === z.skewType && (b = Math.tan((P - O) * K), b = Math.sqrt(1 + b * b), r *= b, s *= b, z.skewY && (b = Math.tan(O * K), b = Math.sqrt(1 + b * b), c *= b, f *= b))), d = -s, g = r;
					else {
						if (!(D || C || 1 !== G || M || L)) return void(A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") + H + "px," + I + "px," + J + "px)" + (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
						c = g = 1, d = f = 0
					}
					k = 1, e = h = i = j = l = m = 0, o = M ? -1 / M : 0, p = z.zOrigin, q = 1e-6, v = ",", w = "0", B = D * K, B && (r = Math.cos(B), s = Math.sin(B), i = -s, l = o * -s, e = c * s, h = f * s, k = r, o *= r, c *= r, f *= r), B = C * K, B && (r = Math.cos(B), s = Math.sin(B), b = d * r + e * s, t = g * r + h * s, j = k * s, m = o * s, e = d * -s + e * r, h = g * -s + h * r, k *= r, o *= r, d = b, g = t), 1 !== G && (e *= G, h *= G, k *= G, o *= G), 1 !== F && (d *= F, g *= F, j *= F, m *= F), 1 !== E && (c *= E, f *= E, i *= E, l *= E), (p || L) && (p && (H += e * -p, I += h * -p, J += k * -p + p), L && (H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset, I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset), q > H && H > -q && (H = w), q > I && I > -q && (I = w), q > J && J > -q && (J = 0)), u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d(", u += (q > c && c > -q ? w : c) + v + (q > f && f > -q ? w : f) + v + (q > i && i > -q ? w : i), u += v + (q > l && l > -q ? w : l) + v + (q > d && d > -q ? w : d) + v + (q > g && g > -q ? w : g), C || D || 1 !== G ? (u += v + (q > j && j > -q ? w : j) + v + (q > m && m > -q ? w : m) + v + (q > e && e > -q ? w : e), u += v + (q > h && h > -q ? w : h) + v + (q > k && k > -q ? w : k) + v + (q > o && o > -q ? w : o) + v) : u += ",0,0,0,0,1,0,", u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")", A[Ca] = u
				};
			j = Ga.prototype, j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0, j.scaleX = j.scaleY = j.scaleZ = 1, ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
				parser: function (a, b, c, d, f, h, i) {
					if (d._lastParsedTransform === i) return f;
					d._lastParsedTransform = i;
					var j, k = i.scale && "function" == typeof i.scale ? i.scale : 0;
					"function" == typeof i[c] && (j = i[c], i[c] = b), k && (i.scale = k(r, a));
					var l, m, n, o, p, s, t, u, v, w = a._gsTransform,
						x = a.style,
						y = 1e-6,
						z = Ba.length,
						A = i,
						B = {},
						C = "transformOrigin",
						D = Ra(a, e, !0, A.parseTransform),
						E = A.transform && ("function" == typeof A.transform ? A.transform(r, q) : A.transform);
					if (d._transform = D, E && "string" == typeof E && Ca) m = Q.style, m[Ca] = E, m.display = "block", m.position = "absolute", O.body.appendChild(Q), l = Ra(Q, null, !1), D.svg && (s = D.xOrigin, t = D.yOrigin, l.x -= D.xOffset, l.y -= D.yOffset, (A.transformOrigin || A.svgOrigin) && (E = {}, La(a, ha(A.transformOrigin), E, A.svgOrigin, A.smoothOrigin, !0), s = E.xOrigin, t = E.yOrigin, l.x -= E.xOffset - D.xOffset, l.y -= E.yOffset - D.yOffset), (s || t) && (u = Qa(Q, !0), l.x -= s - (s * u[0] + t * u[2]), l.y -= t - (s * u[1] + t * u[3]))), O.body.removeChild(Q), l.perspective || (l.perspective = D.perspective), null != A.xPercent && (l.xPercent = ja(A.xPercent, D.xPercent)), null != A.yPercent && (l.yPercent = ja(A.yPercent, D.yPercent));
					else if ("object" == typeof A) {
						if (l = {
								scaleX: ja(null != A.scaleX ? A.scaleX : A.scale, D.scaleX),
								scaleY: ja(null != A.scaleY ? A.scaleY : A.scale, D.scaleY),
								scaleZ: ja(A.scaleZ, D.scaleZ),
								x: ja(A.x, D.x),
								y: ja(A.y, D.y),
								z: ja(A.z, D.z),
								xPercent: ja(A.xPercent, D.xPercent),
								yPercent: ja(A.yPercent, D.yPercent),
								perspective: ja(A.transformPerspective, D.perspective)
							}, p = A.directionalRotation, null != p)
							if ("object" == typeof p)
								for (m in p) A[m] = p[m];
							else A.rotation = p;
						"string" == typeof A.x && -1 !== A.x.indexOf("%") && (l.x = 0, l.xPercent = ja(A.x, D.xPercent)), "string" == typeof A.y && -1 !== A.y.indexOf("%") && (l.y = 0, l.yPercent = ja(A.y, D.yPercent)), l.rotation = ka("rotation" in A ? A.rotation : "shortRotation" in A ? A.shortRotation + "_short" : "rotationZ" in A ? A.rotationZ : D.rotation, D.rotation, "rotation", B), Fa && (l.rotationX = ka("rotationX" in A ? A.rotationX : "shortRotationX" in A ? A.shortRotationX + "_short" : D.rotationX || 0, D.rotationX, "rotationX", B), l.rotationY = ka("rotationY" in A ? A.rotationY : "shortRotationY" in A ? A.shortRotationY + "_short" : D.rotationY || 0, D.rotationY, "rotationY", B)), l.skewX = ka(A.skewX, D.skewX), l.skewY = ka(A.skewY, D.skewY)
					}
					for (Fa && null != A.force3D && (D.force3D = A.force3D, o = !0), D.skewType = A.skewType || D.skewType || g.defaultSkewType, n = D.force3D || D.z || D.rotationX || D.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, n || null == A.scale || (l.scaleZ = 1); --z > -1;) v = Ba[z], E = l[v] - D[v], (E > y || -y > E || null != A[v] || null != M[v]) && (o = !0, f = new ta(D, v, D[v], E, f), v in B && (f.e = B[v]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
					return E = A.transformOrigin, D.svg && (E || A.svgOrigin) && (s = D.xOffset, t = D.yOffset, La(a, ha(E), l, A.svgOrigin, A.smoothOrigin), f = ua(D, "xOrigin", (w ? D : l).xOrigin, l.xOrigin, f, C), f = ua(D, "yOrigin", (w ? D : l).yOrigin, l.yOrigin, f, C), (s !== D.xOffset || t !== D.yOffset) && (f = ua(D, "xOffset", w ? s : D.xOffset, D.xOffset, f, C), f = ua(D, "yOffset", w ? t : D.yOffset, D.yOffset, f, C)), E = "0px 0px"), (E || Fa && n && D.zOrigin) && (Ca ? (o = !0, v = Ea, E = (E || _(a, v, e, !1, "50% 50%")) + "", f = new ta(x, v, 0, 0, f, -1, C), f.b = x[v], f.plugin = h, Fa ? (m = D.zOrigin, E = E.split(" "), D.zOrigin = (E.length > 2 && (0 === m || "0px" !== E[2]) ? parseFloat(E[2]) : m) || 0, f.xs0 = f.e = E[0] + " " + (E[1] || "50%") + " 0px", f = new ta(D, "zOrigin", 0, 0, f, -1, f.n), f.b = m, f.xs0 = f.e = D.zOrigin) : f.xs0 = f.e = E) : ha(E + "", D)), o && (d._transformType = D.svg && Aa || !n && 3 !== this._transformType ? 2 : 3), j && (i[c] = j), k && (i.scale = k), f
				},
				prefix: !0
			}), ya("boxShadow", {
				defaultValue: "0px 0px 0px 0px #999",
				prefix: !0,
				color: !0,
				multi: !0,
				keyword: "inset"
			}), ya("borderRadius", {
				defaultValue: "0px",
				parser: function (a, b, c, f, g, h) {
					b = this.format(b);
					var i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
						z = a.style;
					for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++) this.p.indexOf("border") && (y[j] = Z(y[j])), m = l = _(a, y[j], e, !1, "0px"), -1 !== m.indexOf(" ") && (l = m.split(" "), m = l[0], l = l[1]), n = k = i[j], o = parseFloat(m), t = m.substr((o + "").length), u = "=" === n.charAt(1), u ? (p = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), p *= parseFloat(n), s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(n), s = n.substr((p + "").length)), "" === s && (s = d[c] || t), s !== t && (v = aa(a, "borderLeft", o, t), w = aa(a, "borderTop", o, t), "%" === s ? (m = v / q * 100 + "%", l = w / r * 100 + "%") : "em" === s ? (x = aa(a, "borderLeft", 1, "em"), m = v / x + "em", l = w / x + "em") : (m = v + "px", l = w + "px"), u && (n = parseFloat(m) + p + s, k = parseFloat(l) + p + s)), g = va(z, y[j], m + " " + l, n + " " + k, !1, "0px", g);
					return g
				},
				prefix: !0,
				formatter: qa("0px 0px 0px 0px", !1, !0)
			}), ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
				defaultValue: "0px",
				parser: function (a, b, c, d, f, g) {
					return va(a.style, c, this.format(_(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f)
				},
				prefix: !0,
				formatter: qa("0px 0px", !1, !0)
			}), ya("backgroundPosition", {
				defaultValue: "0 0",
				parser: function (a, b, c, d, f, g) {
					var h, i, j, k, l, m, n = "background-position",
						o = e || $(a, null),
						q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
						r = this.format(b);
					if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && (m = _(a, "backgroundImage").replace(D, ""), m && "none" !== m)) {
						for (h = q.split(" "), i = r.split(" "), R.setAttribute("src", m), j = 2; --j > -1;) q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - R.width : a.offsetHeight - R.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : parseFloat(q) / l * 100 + "%");
						q = h.join(" ")
					}
					return this.parseComplex(a.style, q, r, f, g)
				},
				formatter: ha
			}), ya("backgroundSize", {
				defaultValue: "0 0",
				formatter: function (a) {
					return a += "", ha(-1 === a.indexOf(" ") ? a + " " + a : a)
				}
			}), ya("perspective", {
				defaultValue: "0px",
				prefix: !0
			}), ya("perspectiveOrigin", {
				defaultValue: "50% 50%",
				prefix: !0
			}), ya("transformStyle", {
				prefix: !0
			}), ya("backfaceVisibility", {
				prefix: !0
			}), ya("userSelect", {
				prefix: !0
			}), ya("margin", {
				parser: ra("marginTop,marginRight,marginBottom,marginLeft")
			}), ya("padding", {
				parser: ra("paddingTop,paddingRight,paddingBottom,paddingLeft")
			}), ya("clip", {
				defaultValue: "rect(0px,0px,0px,0px)",
				parser: function (a, b, c, d, f, g) {
					var h, i, j;
					return 9 > p ? (i = a.currentStyle, j = 8 > p ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")",
						b = this.format(b).split(",").join(j)) : (h = this.format(_(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g)
				}
			}), ya("textShadow", {
				defaultValue: "0px 0px 0px #999",
				color: !0,
				multi: !0
			}), ya("autoRound,strictUnits", {
				parser: function (a, b, c, d, e) {
					return e
				}
			}), ya("border", {
				defaultValue: "0px solid #000",
				parser: function (a, b, c, d, f, g) {
					var h = _(a, "borderTopWidth", e, !1, "0px"),
						i = this.format(b).split(" "),
						j = i[0].replace(w, "");
					return "px" !== j && (h = parseFloat(h) / aa(a, "borderTopWidth", 1, j) + j), this.parseComplex(a.style, this.format(h + " " + _(a, "borderTopStyle", e, !1, "solid") + " " + _(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g)
				},
				color: !0,
				formatter: function (a) {
					var b = a.split(" ");
					return b[0] + " " + (b[1] || "solid") + " " + (a.match(pa) || ["#000"])[0]
				}
			}), ya("borderWidth", {
				parser: ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
			}), ya("float,cssFloat,styleFloat", {
				parser: function (a, b, c, d, e, f) {
					var g = a.style,
						h = "cssFloat" in g ? "cssFloat" : "styleFloat";
					return new ta(g, h, 0, 0, e, -1, c, !1, 0, g[h], b)
				}
			});
			var Ua = function (a) {
				var b, c = this.t,
					d = c.filter || _(this.data, "filter") || "",
					e = this.s + this.c * a | 0;
				100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !_(this.data, "filter")) : (c.filter = d.replace(z, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(x, "opacity=" + e))
			};
			ya("opacity,alpha,autoAlpha", {
				defaultValue: "1",
				parser: function (a, b, c, d, f, g) {
					var h = parseFloat(_(a, "opacity", e, !1, "1")),
						i = a.style,
						j = "autoAlpha" === c;
					return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === _(a, "visibility", e) && 0 !== b && (h = 0), U ? f = new ta(i, "opacity", h, b - h, f) : (f = new ta(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Ua), j && (f = new ta(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f
				}
			});
			var Va = function (a, b) {
					b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(B, "-$1").toLowerCase())) : a.removeAttribute(b))
				},
				Wa = function (a) {
					if (this.t._gsClassPT = this, 1 === a || 0 === a) {
						this.t.setAttribute("class", 0 === a ? this.b : this.e);
						for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : Va(c, b.p), b = b._next;
						1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
					} else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
				};
			ya("className", {
				parser: function (a, b, d, f, g, h, i) {
					var j, k, l, m, n, o = a.getAttribute("class") || "",
						p = a.style.cssText;
					if (g = f._classNamePT = new ta(a, d, 0, 0, g, 2), g.setRatio = Wa, g.pr = -11, c = !0, g.b = o, k = ca(a, e), l = a._gsClassPT) {
						for (m = {}, n = l.data; n;) m[n.p] = 1, n = n._next;
						l.setRatio(1)
					}
					return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""), a.setAttribute("class", g.e), j = da(a, k, ca(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h)
				}
			});
			var Xa = function (a) {
				if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
					var b, c, d, e, f, g = this.t.style,
						h = i.transform.parse;
					if ("all" === this.e) g.cssText = "", e = !0;
					else
						for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;) c = b[d], i[c] && (i[c].parse === h ? e = !0 : c = "transformOrigin" === c ? Ea : i[c].p), Va(g, c);
					e && (Va(g, Ca), f = this.t._gsTransform, f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
				}
			};
			for (ya("clearProps", {
					parser: function (a, b, d, e, f) {
						return f = new ta(a, d, 0, 0, f, 2), f.setRatio = Xa, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f
					}
				}), j = "bezier,throwProps,physicsProps,physics2D".split(","), wa = j.length; wa--;) za(j[wa]);
			j = g.prototype, j._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function (a, b, h, j) {
				if (!a.nodeType) return !1;
				this._target = q = a, this._tween = h, this._vars = b, r = j, k = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = $(a, ""), f = this._overwriteProps;
				var n, p, s, t, u, v, w, x, z, A = a.style;
				if (l && "" === A.zIndex && (n = _(a, "zIndex", e), ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)), "string" == typeof b && (t = A.cssText, n = ca(a, e), A.cssText = t + ";" + b, n = da(a, n, ca(a)).difs, !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)), b = n, A.cssText = t), b.className ? this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b) : this._firstPT = p = this.parse(a, b, null), this._transformType) {
					for (z = 3 === this._transformType, Ca ? m && (l = !0, "" === A.zIndex && (w = _(a, "zIndex", e), ("auto" === w || "" === w) && this._addLazySet(A, "zIndex", 0)), o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (z ? "visible" : "hidden"))) : A.zoom = 1, s = p; s && s._next;) s = s._next;
					x = new ta(a, "transform", 0, 0, null, 2), this._linkCSSP(x, null, s), x.setRatio = Ca ? Ta : Sa, x.data = this._transform || Ra(a, e, !0), x.tween = h, x.pr = -1, f.pop()
				}
				if (c) {
					for (; p;) {
						for (v = p._next, s = t; s && s.pr > p.pr;) s = s._next;
						(p._prev = s ? s._prev : u) ? p._prev._next = p: t = p, (p._next = s) ? s._prev = p : u = p, p = v
					}
					this._firstPT = t
				}
				return !0
			}, j.parse = function (a, b, c, f) {
				var g, h, j, l, m, n, o, p, s, t, u = a.style;
				for (g in b) n = b[g], "function" == typeof n && (n = n(r, q)), h = i[g], h ? c = h.parse(a, n, g, this, c, f, b) : (m = _(a, g, e) + "", s = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || s && A.test(n) ? (s || (n = na(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = va(u, g, m, n, !0, "transparent", c, 0, f)) : s && J.test(n) ? c = va(u, g, m, n, !0, null, c, 0, f) : (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ga(a, g, e), o = "px") : "left" === g || "top" === g ? (j = ba(a, g, e), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), t = s && "=" === n.charAt(1), t ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(w, "")) : (l = parseFloat(n), p = s ? n.replace(w, "") : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (t ? l + j : l) + p : b[g], o !== p && "" !== p && (l || 0 === l) && j && (j = aa(a, g, j, o), "%" === p ? (j /= aa(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = j + "%")) : "em" === p || "rem" === p || "vw" === p || "vh" === p ? j /= aa(a, g, 1, p) : "px" !== p && (l = aa(a, g, l, p), p = "px"), t && (l || 0 === l) && (n = l + j + p)), t && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== u[g] && (n || n + "" != "NaN" && null != n) ? (c = new ta(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : W("invalid " + g + " tween value: " + b[g]) : (c = new ta(u, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p))), f && c && !c.plugin && (c.plugin = f);
				return c
			}, j.setRatio = function (a) {
				var b, c, d, e = this._firstPT,
					f = 1e-6;
				if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
					if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
						for (; e;) {
							if (b = e.c * a + e.s, e.r ? b = Math.round(b) : f > b && b > -f && (b = 0), e.type)
								if (1 === e.type)
									if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
									else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
							else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
							else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
							else {
								for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
								e.t[e.p] = c
							} else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
							else e.t[e.p] = b + e.xs0;
							e = e._next
						} else
							for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
					else
						for (; e;) {
							if (2 !== e.type)
								if (e.r && -1 !== e.type)
									if (b = Math.round(e.s + e.c), e.type) {
										if (1 === e.type) {
											for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
											e.t[e.p] = c
										}
									} else e.t[e.p] = b + e.xs0;
							else e.t[e.p] = e.e;
							else e.setRatio(a);
							e = e._next
						}
			}, j._enableTransforms = function (a) {
				this._transform = this._transform || Ra(this._target, e, !0), this._transformType = this._transform.svg && Aa || !a && 3 !== this._transformType ? 2 : 3
			};
			var Ya = function (a) {
				this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
			};
			j._addLazySet = function (a, b, c) {
				var d = this._firstPT = new ta(a, b, 0, 0, this._firstPT, 2);
				d.e = c, d.setRatio = Ya, d.data = this
			}, j._linkCSSP = function (a, b, c, d) {
				return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a
			}, j._mod = function (a) {
				for (var b = this._firstPT; b;) "function" == typeof a[b.p] && a[b.p] === Math.round && (b.r = 1), b = b._next
			}, j._kill = function (b) {
				var c, d, e, f = b;
				if (b.autoAlpha || b.alpha) {
					f = {};
					for (d in b) f[d] = b[d];
					f.opacity = 1, f.autoAlpha && (f.visibility = 1)
				}
				for (b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), c = this._firstPT; c;) c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), d = c.plugin), c = c._next;
				return a.prototype._kill.call(this, f)
			};
			var Za = function (a, b, c) {
				var d, e, f, g;
				if (a.slice)
					for (e = a.length; --e > -1;) Za(a[e], b, c);
				else
					for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push(ca(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Za(f, b, c)
			};
			return g.cascadeTo = function (a, c, d) {
				var e, f, g, h, i = b.to(a, c, d),
					j = [i],
					k = [],
					l = [],
					m = [],
					n = b._internals.reservedProps;
				for (a = i._targets || i.target, Za(a, k, m), i.render(c, !0, !0), Za(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1;)
					if (f = da(m[e], k[e], l[e]), f.firstMPT) {
						f = f.difs;
						for (g in d) n[g] && (f[g] = d[g]);
						h = {};
						for (g in f) h[g] = k[e][g];
						j.push(b.fromTo(m[e], c, h, f))
					} return j
			}, a.activate([g]), g
		}, !0)
	}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
	function (a) {
		"use strict";
		var b = function () {
			return (_gsScope.GreenSockGlobals || _gsScope)[a]
		};
		"function" == typeof define && define.amd ? define(["TweenLite"], b) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = b())
	}("CSSPlugin");
/* SPLIT TEXT UTIL */
/*!
 * VERSION: 0.5.6
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
! function (a) {
	"use strict";
	var b = a.GreenSockGlobals || a,
		c = function (a) {
			var c, d = a.split("."),
				e = b;
			for (c = 0; c < d.length; c++) e[d[c]] = e = e[d[c]] || {};
			return e
		},
		d = c("com.greensock.utils"),
		e = function (a) {
			var b = a.nodeType,
				c = "";
			if (1 === b || 9 === b || 11 === b) {
				if ("string" == typeof a.textContent) return a.textContent;
				for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
			} else if (3 === b || 4 === b) return a.nodeValue;
			return c
		},
		f = document,
		g = f.defaultView ? f.defaultView.getComputedStyle : function () {},
		h = /([A-Z])/g,
		i = function (a, b, c, d) {
			var e;
			return (c = c || g(a, null)) ? (a = c.getPropertyValue(b.replace(h, "-$1").toLowerCase()), e = a || c.length ? a : c[b]) : a.currentStyle && (c = a.currentStyle, e = c[b]), d ? e : parseInt(e, 10) || 0
		},
		j = function (a) {
			return a.length && a[0] && (a[0].nodeType && a[0].style && !a.nodeType || a[0].length && a[0][0]) ? !0 : !1
		},
		k = function (a) {
			var b, c, d, e = [],
				f = a.length;
			for (b = 0; f > b; b++)
				if (c = a[b], j(c))
					for (d = c.length, d = 0; d < c.length; d++) e.push(c[d]);
				else e.push(c);
			return e
		},
		l = /(?:\r|\n|\t\t)/g,
		m = /(?:\s\s+)/g,
		n = 55296,
		o = 56319,
		p = 56320,
		q = 127462,
		r = 127487,
		s = 127995,
		t = 127999,
		u = function (a) {
			return (a.charCodeAt(0) - n << 10) + (a.charCodeAt(1) - p) + 65536
		},
		v = f.all && !f.addEventListener,
		w = " style='position:relative;display:inline-block;" + (v ? "*display:inline;*zoom:1;'" : "'"),
		x = function (a, b) {
			a = a || "";
			var c = -1 !== a.indexOf("++"),
				d = 1;
			return c && (a = a.split("++").join("")),
				function () {
					return "<" + b + w + (a ? " class='" + a + (c ? d++ : "") + "'>" : ">")
				}
		},
		y = d.SplitText = b.SplitText = function (a, b) {
			if ("string" == typeof a && (a = y.selector(a)), !a) throw "cannot split a null element.";
			this.elements = j(a) ? k(a) : [a], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = b || {}, this.split(b)
		},
		z = function (a, b, c) {
			var d = a.nodeType;
			if (1 === d || 9 === d || 11 === d)
				for (a = a.firstChild; a; a = a.nextSibling) z(a, b, c);
			else(3 === d || 4 === d) && (a.nodeValue = a.nodeValue.split(b).join(c))
		},
		A = function (a, b) {
			for (var c = b.length; --c > -1;) a.push(b[c])
		},
		B = function (a) {
			var b, c = [],
				d = a.length;
			for (b = 0; b !== d; c.push(a[b++]));
			return c
		},
		C = function (a, b, c) {
			for (var d; a && a !== b;) {
				if (d = a._next || a.nextSibling) return d.textContent.charAt(0) === c;
				a = a.parentNode || a._parent
			}
			return !1
		},
		D = function (a) {
			var b, c, d = B(a.childNodes),
				e = d.length;
			for (b = 0; e > b; b++) c = d[b], c._isSplit ? D(c) : (b && 3 === c.previousSibling.nodeType ? c.previousSibling.nodeValue += 3 === c.nodeType ? c.nodeValue : c.firstChild.nodeValue : 3 !== c.nodeType && a.insertBefore(c.firstChild, c), a.removeChild(c))
		},
		E = function (a, b, c, d, e, h, j) {
			var k, l, m, n, o, p, q, r, s, t, u, v, w = g(a),
				x = i(a, "paddingLeft", w),
				y = -999,
				B = i(a, "borderBottomWidth", w) + i(a, "borderTopWidth", w),
				E = i(a, "borderLeftWidth", w) + i(a, "borderRightWidth", w),
				F = i(a, "paddingTop", w) + i(a, "paddingBottom", w),
				G = i(a, "paddingLeft", w) + i(a, "paddingRight", w),
				H = .2 * i(a, "fontSize"),
				I = i(a, "textAlign", w, !0),
				J = [],
				K = [],
				L = [],
				M = b.wordDelimiter || " ",
				N = b.span ? "span" : "div",
				O = b.type || b.split || "chars,words,lines",
				P = e && -1 !== O.indexOf("lines") ? [] : null,
				Q = -1 !== O.indexOf("words"),
				R = -1 !== O.indexOf("chars"),
				S = "absolute" === b.position || b.absolute === !0,
				T = b.linesClass,
				U = -1 !== (T || "").indexOf("++"),
				V = [];
			for (P && 1 === a.children.length && a.children[0]._isSplit && (a = a.children[0]), U && (T = T.split("++").join("")), l = a.getElementsByTagName("*"), m = l.length, o = [], k = 0; m > k; k++) o[k] = l[k];
			if (P || S)
				for (k = 0; m > k; k++) n = o[k], p = n.parentNode === a, (p || S || R && !Q) && (v = n.offsetTop, P && p && Math.abs(v - y) > H && "BR" !== n.nodeName && (q = [], P.push(q), y = v), S && (n._x = n.offsetLeft, n._y = v, n._w = n.offsetWidth, n._h = n.offsetHeight), P && ((n._isSplit && p || !R && p || Q && p || !Q && n.parentNode.parentNode === a && !n.parentNode._isSplit) && (q.push(n), n._x -= x, C(n, a, M) && (n._wordEnd = !0)), "BR" === n.nodeName && n.nextSibling && "BR" === n.nextSibling.nodeName && P.push([])));
			for (k = 0; m > k; k++) n = o[k], p = n.parentNode === a, "BR" !== n.nodeName ? (S && (s = n.style, Q || p || (n._x += n.parentNode._x, n._y += n.parentNode._y), s.left = n._x + "px", s.top = n._y + "px", s.position = "absolute", s.display = "block", s.width = n._w + 1 + "px", s.height = n._h + "px"), !Q && R ? n._isSplit ? (n._next = n.nextSibling, n.parentNode.appendChild(n)) : n.parentNode._isSplit ? (n._parent = n.parentNode, !n.previousSibling && n.firstChild && (n.firstChild._isFirst = !0), n.nextSibling && " " === n.nextSibling.textContent && !n.nextSibling.nextSibling && V.push(n.nextSibling), n._next = n.nextSibling && n.nextSibling._isFirst ? null : n.nextSibling, n.parentNode.removeChild(n), o.splice(k--, 1), m--) : p || (v = !n.nextSibling && C(n.parentNode, a, M), n.parentNode._parent && n.parentNode._parent.appendChild(n), v && n.parentNode.appendChild(f.createTextNode(" ")), b.span && (n.style.display = "inline"), J.push(n)) : n.parentNode._isSplit && !n._isSplit && "" !== n.innerHTML ? K.push(n) : R && !n._isSplit && (b.span && (n.style.display = "inline"), J.push(n))) : P || S ? (n.parentNode && n.parentNode.removeChild(n), o.splice(k--, 1), m--) : Q || a.appendChild(n);
			for (k = V.length; --k > -1;) V[k].parentNode.removeChild(V[k]);
			if (P) {
				for (S && (t = f.createElement(N), a.appendChild(t), u = t.offsetWidth + "px", v = t.offsetParent === a ? 0 : a.offsetLeft, a.removeChild(t)), s = a.style.cssText, a.style.cssText = "display:none;"; a.firstChild;) a.removeChild(a.firstChild);
				for (r = " " === M && (!S || !Q && !R), k = 0; k < P.length; k++) {
					for (q = P[k], t = f.createElement(N), t.style.cssText = "display:block;text-align:" + I + ";position:" + (S ? "absolute;" : "relative;"), T && (t.className = T + (U ? k + 1 : "")), L.push(t), m = q.length, l = 0; m > l; l++) "BR" !== q[l].nodeName && (n = q[l], t.appendChild(n), r && n._wordEnd && t.appendChild(f.createTextNode(" ")), S && (0 === l && (t.style.top = n._y + "px", t.style.left = x + v + "px"), n.style.top = "0px", v && (n.style.left = n._x - v + "px")));
					0 === m ? t.innerHTML = "&nbsp;" : Q || R || (D(t), z(t, String.fromCharCode(160), " ")), S && (t.style.width = u, t.style.height = n._h + "px"), a.appendChild(t)
				}
				a.style.cssText = s
			}
			S && (j > a.clientHeight && (a.style.height = j - F + "px", a.clientHeight < j && (a.style.height = j + B + "px")), h > a.clientWidth && (a.style.width = h - G + "px", a.clientWidth < h && (a.style.width = h + E + "px"))), A(c, J), A(d, K), A(e, L)
		},
		F = function (a, b, c, d) {
			var g, h, i, j, k, p, v, w, x, y = b.span ? "span" : "div",
				A = b.type || b.split || "chars,words,lines",
				B = (-1 !== A.indexOf("words"), -1 !== A.indexOf("chars")),
				C = "absolute" === b.position || b.absolute === !0,
				D = b.wordDelimiter || " ",
				E = " " !== D ? "" : C ? "&#173; " : " ",
				F = b.span ? "</span>" : "</div>",
				G = !0,
				H = f.createElement("div"),
				I = a.parentNode;
			for (I.insertBefore(H, a), H.textContent = a.nodeValue, I.removeChild(a), a = H, g = e(a), v = -1 !== g.indexOf("<"), b.reduceWhiteSpace !== !1 && (g = g.replace(m, " ").replace(l, "")), v && (g = g.split("<").join("{{LT}}")), k = g.length, h = (" " === g.charAt(0) ? E : "") + c(), i = 0; k > i; i++)
				if (p = g.charAt(i), p === D && g.charAt(i - 1) !== D && i) {
					for (h += G ? F : "", G = !1; g.charAt(i + 1) === D;) h += E, i++;
					i === k - 1 ? h += E : ")" !== g.charAt(i + 1) && (h += E + c(), G = !0)
				} else "{" === p && "{{LT}}" === g.substr(i, 6) ? (h += B ? d() + "{{LT}}</" + y + ">" : "{{LT}}", i += 5) : p.charCodeAt(0) >= n && p.charCodeAt(0) <= o || g.charCodeAt(i + 1) >= 65024 && g.charCodeAt(i + 1) <= 65039 ? (w = u(g.substr(i, 2)), x = u(g.substr(i + 2, 2)), j = w >= q && r >= w && x >= q && r >= x || x >= s && t >= x ? 4 : 2, h += B && " " !== p ? d() + g.substr(i, j) + "</" + y + ">" : g.substr(i, j), i += j - 1) : h += B && " " !== p ? d() + p + "</" + y + ">" : p;
			a.outerHTML = h + (G ? F : ""), v && z(I, "{{LT}}", "<")
		},
		G = function (a, b, c, d) {
			var e, f, g = B(a.childNodes),
				h = g.length,
				j = "absolute" === b.position || b.absolute === !0;
			if (3 !== a.nodeType || h > 1) {
				for (b.absolute = !1, e = 0; h > e; e++) f = g[e], (3 !== f.nodeType || /\S+/.test(f.nodeValue)) && (j && 3 !== f.nodeType && "inline" === i(f, "display", null, !0) && (f.style.display = "inline-block", f.style.position = "relative"), f._isSplit = !0, G(f, b, c, d));
				return b.absolute = j, void(a._isSplit = !0)
			}
			F(a, b, c, d)
		},
		H = y.prototype;
	H.split = function (a) {
		this.isSplit && this.revert(), this.vars = a = a || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
		for (var b, c, d, e = this.elements.length, f = a.span ? "span" : "div", g = ("absolute" === a.position || a.absolute === !0, x(a.wordsClass, f)), h = x(a.charsClass, f); --e > -1;) d = this.elements[e], this._originals[e] = d.innerHTML, b = d.clientHeight, c = d.clientWidth, G(d, a, g, h), E(d, a, this.chars, this.words, this.lines, c, b);
		return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
	}, H.revert = function () {
		if (!this._originals) throw "revert() call wasn't scoped properly.";
		for (var a = this._originals.length; --a > -1;) this.elements[a].innerHTML = this._originals[a];
		return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
	}, y.selector = a.$ || a.jQuery || function (b) {
		var c = a.$ || a.jQuery;
		return c ? (y.selector = c, c(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
	}, y.version = "0.5.6"
}(_gsScope),
function (a) {
	"use strict";
	var b = function () {
		return (_gsScope.GreenSockGlobals || _gsScope)[a]
	};
	"function" == typeof define && define.amd ? define([], b) : "undefined" != typeof module && module.exports && (module.exports = b())
}("SplitText");
try {
	window.GreenSockGlobals = null;
	window._gsQueue = null;
	window._gsDefine = null;
	delete(window.GreenSockGlobals);
	delete(window._gsQueue);
	delete(window._gsDefine);
} catch (e) {}
try {
	window.GreenSockGlobals = oldgs;
	window._gsQueue = oldgs_queue;
} catch (e) {}
if (window.tplogs == true)
	try {
		console.groupEnd();
	} catch (e) {}
	(function (e, t) {
		e.waitForImages = {
			hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
		};
		e.expr[":"].uncached = function (t) {
			var n = document.createElement("img");
			n.src = t.src;
			return e(t).is('img[src!=""]') && !n.complete
		};
		e.fn.waitForImages = function (t, n, r) {
			if (e.isPlainObject(arguments[0])) {
				n = t.each;
				r = t.waitForAll;
				t = t.finished
			}
			t = t || e.noop;
			n = n || e.noop;
			r = !!r;
			if (!e.isFunction(t) || !e.isFunction(n)) {
				throw new TypeError("An invalid callback was supplied.")
			}
			return this.each(function () {
				var i = e(this),
					s = [];
				if (r) {
					var o = e.waitForImages.hasImageProperties || [],
						u = /url\((['"]?)(.*?)\1\)/g;
					i.find("*").each(function () {
						var t = e(this);
						if (t.is("img:uncached")) {
							s.push({
								src: t.attr("src"),
								element: t[0]
							})
						}
						e.each(o, function (e, n) {
							var r = t.css(n);
							if (!r) {
								return true
							}
							var i;
							while (i = u.exec(r)) {
								s.push({
									src: i[2],
									element: t[0]
								})
							}
						})
					})
				} else {
					i.find("img:uncached").each(function () {
						s.push({
							src: this.src,
							element: this
						})
					})
				}
				var f = s.length,
					l = 0;
				if (f == 0) {
					t.call(i[0])
				}
				e.each(s, function (r, s) {
					var o = new Image;
					e(o).bind("load error", function (e) {
						l++;
						n.call(s.element, l, f, e.type == "load");
						if (l == f) {
							t.call(i[0]);
							return false
						}
					});
					o.src = s.src
				})
			})
		};
	})(jQuery);

! function (jQuery, undefined) {
	"use strict";
	var version = {
		core: "5.4.6",
		"revolution.extensions.actions.min.js": "2.1.0",
		"revolution.extensions.carousel.min.js": "1.2.1",
		"revolution.extensions.kenburn.min.js": "1.3.1",
		"revolution.extensions.layeranimation.min.js": "3.6.1",
		"revolution.extensions.navigation.min.js": "1.3.3",
		"revolution.extensions.parallax.min.js": "2.2.0",
		"revolution.extensions.slideanims.min.js": "1.7",
		"revolution.extensions.video.min.js": "2.1.1"
	};
	jQuery.fn.extend({
		revolution: function (e) {
			var i = {
				delay: 9e3,
				responsiveLevels: 4064,
				visibilityLevels: [2048, 1024, 778, 480],
				gridwidth: 960,
				gridheight: 500,
				minHeight: 0,
				autoHeight: "off",
				sliderType: "standard",
				sliderLayout: "auto",
				fullScreenAutoWidth: "off",
				fullScreenAlignForce: "off",
				fullScreenOffsetContainer: "",
				fullScreenOffset: "0",
				hideCaptionAtLimit: 0,
				hideAllCaptionAtLimit: 0,
				hideSliderAtLimit: 0,
				disableProgressBar: "off",
				stopAtSlide: -1,
				stopAfterLoops: -1,
				shadow: 0,
				dottedOverlay: "none",
				startDelay: 0,
				lazyType: "smart",
				spinner: "spinner0",
				shuffle: "off",
				viewPort: {
					enable: !1,
					outof: "wait",
					visible_area: "60%",
					presize: !1
				},
				fallbacks: {
					isJoomla: !1,
					panZoomDisableOnMobile: "off",
					simplifyAll: "on",
					nextSlideOnWindowFocus: "off",
					disableFocusListener: !0,
					ignoreHeightChanges: "off",
					ignoreHeightChangesSize: 0,
					allowHTML5AutoPlayOnAndroid: !0
				},
				parallax: {
					type: "off",
					levels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
					origo: "enterpoint",
					speed: 400,
					bgparallax: "off",
					opacity: "on",
					disable_onmobile: "off",
					ddd_shadow: "on",
					ddd_bgfreeze: "off",
					ddd_overflow: "visible",
					ddd_layer_overflow: "visible",
					ddd_z_correction: 65,
					ddd_path: "mouse"
				},
				scrolleffect: {
					fade: "off",
					blur: "off",
					scale: "off",
					grayscale: "off",
					maxblur: 10,
					on_layers: "off",
					on_slidebg: "off",
					on_static_layers: "off",
					on_parallax_layers: "off",
					on_parallax_static_layers: "off",
					direction: "both",
					multiplicator: 1.35,
					multiplicator_layers: .5,
					tilt: 30,
					disable_on_mobile: "on"
				},
				carousel: {
					easing: punchgs.Power3.easeInOut,
					speed: 800,
					showLayersAllTime: "off",
					horizontal_align: "center",
					vertical_align: "center",
					infinity: "on",
					space: 0,
					maxVisibleItems: 3,
					stretch: "off",
					fadeout: "on",
					maxRotation: 0,
					minScale: 0,
					vary_fade: "off",
					vary_rotation: "on",
					vary_scale: "off",
					border_radius: "0px",
					padding_top: 0,
					padding_bottom: 0
				},
				navigation: {
					keyboardNavigation: "off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation: "off",
					onHoverStop: "on",
					touch: {
						touchenabled: "off",
						touchOnDesktop: "off",
						swipe_treshold: 75,
						swipe_min_touches: 1,
						drag_block_vertical: !1,
						swipe_direction: "horizontal"
					},
					arrows: {
						style: "",
						enable: !1,
						hide_onmobile: !1,
						hide_onleave: !0,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						hide_under: 0,
						hide_over: 9999,
						tmp: "",
						rtl: !1,
						left: {
							h_align: "left",
							v_align: "center",
							h_offset: 20,
							v_offset: 0,
							container: "slider"
						},
						right: {
							h_align: "right",
							v_align: "center",
							h_offset: 20,
							v_offset: 0,
							container: "slider"
						}
					},
					bullets: {
						container: "slider",
						rtl: !1,
						style: "",
						enable: !1,
						hide_onmobile: !1,
						hide_onleave: !0,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						hide_under: 0,
						hide_over: 9999,
						direction: "horizontal",
						h_align: "left",
						v_align: "center",
						space: 0,
						h_offset: 20,
						v_offset: 0,
						tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
					},
					thumbnails: {
						container: "slider",
						rtl: !1,
						style: "",
						enable: !1,
						width: 100,
						height: 50,
						min_width: 100,
						wrapper_padding: 2,
						wrapper_color: "#f5f5f5",
						wrapper_opacity: 1,
						tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',
						visibleAmount: 5,
						hide_onmobile: !1,
						hide_onleave: !0,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						hide_under: 0,
						hide_over: 9999,
						direction: "horizontal",
						span: !1,
						position: "inner",
						space: 2,
						h_align: "left",
						v_align: "center",
						h_offset: 20,
						v_offset: 0
					},
					tabs: {
						container: "slider",
						rtl: !1,
						style: "",
						enable: !1,
						width: 100,
						min_width: 100,
						height: 50,
						wrapper_padding: 10,
						wrapper_color: "#f5f5f5",
						wrapper_opacity: 1,
						tmp: '<span class="tp-tab-image"></span>',
						visibleAmount: 5,
						hide_onmobile: !1,
						hide_onleave: !0,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						hide_under: 0,
						hide_over: 9999,
						direction: "horizontal",
						span: !1,
						space: 0,
						position: "inner",
						h_align: "left",
						v_align: "center",
						h_offset: 20,
						v_offset: 0
					}
				},
				extensions: "extensions/",
				extensions_suffix: ".min.js",
				debugMode: !1
			};
			return e = jQuery.extend(!0, {}, i, e), this.each(function () {
				var i = jQuery(this);
				e.minHeight = e.minHeight != undefined ? parseInt(e.minHeight, 0) : e.minHeight, e.scrolleffect.on = "on" === e.scrolleffect.fade || "on" === e.scrolleffect.scale || "on" === e.scrolleffect.blur || "on" === e.scrolleffect.grayscale, "hero" == e.sliderType && i.find(">ul>li").each(function (e) {
					e > 0 && jQuery(this).remove()
				}), e.jsFileLocation = e.jsFileLocation || getScriptLocation("themepunch.revolution.min.js"), e.jsFileLocation = e.jsFileLocation + e.extensions, e.scriptsneeded = getNeededScripts(e, i), e.curWinRange = 0, e.rtl = !0, e.navigation != undefined && e.navigation.touch != undefined && (e.navigation.touch.swipe_min_touches = e.navigation.touch.swipe_min_touches > 5 ? 1 : e.navigation.touch.swipe_min_touches), jQuery(this).on("scriptsloaded", function () {
					if (e.modulesfailing) return i.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.' + e.errorm + "</div>").show(), !1;
					_R.migration != undefined && (e = _R.migration(i, e)), punchgs.force3D = !0, "on" !== e.simplifyAll && punchgs.TweenLite.lagSmoothing(1e3, 16), prepareOptions(i, e), initSlider(i, e)
				}), i[0].opt = e, waitForScripts(i, e)
			})
		},
		getRSVersion: function (e) {
			if (!0 === e) return jQuery("body").data("tp_rs_version");
			var i = jQuery("body").data("tp_rs_version"),
				t = "";
			t += "---------------------------------------------------------\n", t += "    Currently Loaded Slider Revolution & SR Modules :\n", t += "---------------------------------------------------------\n";
			for (var a in i) t += i[a].alias + ": " + i[a].ver + "\n";
			return t += "---------------------------------------------------------\n"
		},
		revremoveslide: function (e) {
			return this.each(function () {
				var i = jQuery(this),
					t = i[0].opt;
				if (!(e < 0 || e > t.slideamount) && i != undefined && i.length > 0 && jQuery("body").find("#" + i.attr("id")).length > 0 && t && t.li.length > 0 && (e > 0 || e <= t.li.length)) {
					var a = jQuery(t.li[e]),
						n = a.data("index"),
						r = !1;
					t.slideamount = t.slideamount - 1, t.realslideamount = t.realslideamount - 1, removeNavWithLiref(".tp-bullet", n, t), removeNavWithLiref(".tp-tab", n, t), removeNavWithLiref(".tp-thumb", n, t), a.hasClass("active-revslide") && (r = !0), a.remove(), t.li = removeArray(t.li, e), t.carousel && t.carousel.slides && (t.carousel.slides = removeArray(t.carousel.slides, e)), t.thumbs = removeArray(t.thumbs, e), _R.updateNavIndexes && _R.updateNavIndexes(t), r && i.revnext(), punchgs.TweenLite.set(t.li, {
						minWidth: "99%"
					}), punchgs.TweenLite.set(t.li, {
						minWidth: "100%"
					})
				}
			})
		},
		revaddcallback: function (e) {
			return this.each(function () {
				this.opt && (this.opt.callBackArray === undefined && (this.opt.callBackArray = new Array), this.opt.callBackArray.push(e))
			})
		},
		revgetparallaxproc: function () {
			return jQuery(this)[0].opt.scrollproc
		},
		revdebugmode: function () {
			return this.each(function () {
				var e = jQuery(this);
				e[0].opt.debugMode = !0, containerResized(e, e[0].opt)
			})
		},
		revscroll: function (e) {
			return this.each(function () {
				var i = jQuery(this);
				jQuery("body,html").animate({
					scrollTop: i.offset().top + i.height() - e + "px"
				}, {
					duration: 400
				})
			})
		},
		revredraw: function (e) {
			return this.each(function () {
				var e = jQuery(this);
				containerResized(e, e[0].opt)
			})
		},
		revkill: function (e) {
			var i = this,
				t = jQuery(this);
			if (punchgs.TweenLite.killDelayedCallsTo(_R.showHideNavElements), t != undefined && t.length > 0 && jQuery("body").find("#" + t.attr("id")).length > 0) {
				t.data("conthover", 1), t.data("conthover-changed", 1), t.trigger("revolution.slide.onpause");
				var a = t.parent().find(".tp-bannertimer"),
					n = t[0].opt;
				n.tonpause = !0, t.trigger("stoptimer");
				r = "resize.revslider-" + t.attr("id");
				jQuery(window).unbind(r), punchgs.TweenLite.killTweensOf(t.find("*"), !1), punchgs.TweenLite.killTweensOf(t, !1), t.unbind("hover, mouseover, mouseenter,mouseleave, resize");
				var r = "resize.revslider-" + t.attr("id");
				jQuery(window).off(r), t.find("*").each(function () {
					var e = jQuery(this);
					e.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), e.off("on, hover, mouseenter,mouseleave,mouseover, resize"), e.data("mySplitText", null), e.data("ctl", null), e.data("tween") != undefined && e.data("tween").kill(), e.data("kenburn") != undefined && e.data("kenburn").kill(), e.data("timeline_out") != undefined && e.data("timeline_out").kill(), e.data("timeline") != undefined && e.data("timeline").kill(), e.remove(), e.empty(), e = null
				}), punchgs.TweenLite.killTweensOf(t.find("*"), !1), punchgs.TweenLite.killTweensOf(t, !1), a.remove();
				try {
					t.closest(".forcefullwidth_wrapper_tp_banner").remove()
				} catch (e) {}
				try {
					t.closest(".rev_slider_wrapper").remove()
				} catch (e) {}
				try {
					t.remove()
				} catch (e) {}
				return t.empty(), t.html(), t = null, n = null, delete i.c, delete i.opt, delete i.container, !0
			}
			return !1
		},
		revpause: function () {
			return this.each(function () {
				var e = jQuery(this);
				e != undefined && e.length > 0 && jQuery("body").find("#" + e.attr("id")).length > 0 && (e.data("conthover", 1), e.data("conthover-changed", 1), e.trigger("revolution.slide.onpause"), e[0].opt.tonpause = !0, e.trigger("stoptimer"))
			})
		},
		revresume: function () {
			return this.each(function () {
				var e = jQuery(this);
				e != undefined && e.length > 0 && jQuery("body").find("#" + e.attr("id")).length > 0 && (e.data("conthover", 0), e.data("conthover-changed", 1), e.trigger("revolution.slide.onresume"), e[0].opt.tonpause = !1, e.trigger("starttimer"))
			})
		},
		revstart: function () {
			var e = jQuery(this);
			if (e != undefined && e.length > 0 && jQuery("body").find("#" + e.attr("id")).length > 0 && e[0].opt !== undefined) return e[0].opt.sliderisrunning ? (console.log("Slider Is Running Already"), !1) : (runSlider(e, e[0].opt), !0)
		},
		revnext: function () {
			return this.each(function () {
				var e = jQuery(this);
				e != undefined && e.length > 0 && jQuery("body").find("#" + e.attr("id")).length > 0 && _R.callingNewSlide(e, 1)
			})
		},
		revprev: function () {
			return this.each(function () {
				var e = jQuery(this);
				e != undefined && e.length > 0 && jQuery("body").find("#" + e.attr("id")).length > 0 && _R.callingNewSlide(e, -1)
			})
		},
		revmaxslide: function () {
			return jQuery(this).find(".tp-revslider-mainul >li").length
		},
		revcurrentslide: function () {
			var e = jQuery(this);
			if (e != undefined && e.length > 0 && jQuery("body").find("#" + e.attr("id")).length > 0) return parseInt(e[0].opt.act, 0) + 1
		},
		revlastslide: function () {
			return jQuery(this).find(".tp-revslider-mainul >li").length
		},
		revshowslide: function (e) {
			return this.each(function () {
				var i = jQuery(this);
				i != undefined && i.length > 0 && jQuery("body").find("#" + i.attr("id")).length > 0 && _R.callingNewSlide(i, "to" + (e - 1))
			})
		},
		revcallslidewithid: function (e) {
			return this.each(function () {
				var i = jQuery(this);
				i != undefined && i.length > 0 && jQuery("body").find("#" + i.attr("id")).length > 0 && _R.callingNewSlide(i, e)
			})
		}
	});
	var _R = jQuery.fn.revolution;
	jQuery.extend(!0, _R, {
		getversion: function () {
			return version
		},
		compare_version: function (e) {
			var i = jQuery("body").data("tp_rs_version");
			return (i = i === undefined ? new Object : i).Core === undefined && (i.Core = new Object, i.Core.alias = "Slider Revolution Core", i.Core.name = "jquery.themepunch.revolution.min.js", i.Core.ver = _R.getversion().core), "stop" != e.check && (_R.getversion().core < e.min_core ? (e.check === undefined && (console.log("%cSlider Revolution Warning (Core:" + _R.getversion().core + ")", "color:#c0392b;font-weight:bold;"), console.log("%c     Core is older than expected (" + e.min_core + ") from " + e.alias, "color:#333"), console.log("%c     Please update Slider Revolution to the latest version.", "color:#333"), console.log("%c     It might be required to purge and clear Server/Client side Caches.", "color:#333")), e.check = "stop") : _R.getversion()[e.name] != undefined && e.version < _R.getversion()[e.name] && (e.check === undefined && (console.log("%cSlider Revolution Warning (Core:" + _R.getversion().core + ")", "color:#c0392b;font-weight:bold;"), console.log("%c     " + e.alias + " (" + e.version + ") is older than requiered (" + _R.getversion()[e.name] + ")", "color:#333"), console.log("%c     Please update Slider Revolution to the latest version.", "color:#333"), console.log("%c     It might be required to purge and clear Server/Client side Caches.", "color:#333")), e.check = "stop")), i[e.alias] === undefined && (i[e.alias] = new Object, i[e.alias].alias = e.alias, i[e.alias].ver = e.version, i[e.alias].name = e.name), jQuery("body").data("tp_rs_version", i), e
		},
		currentSlideIndex: function (e) {
			var i = e.c.find(".active-revslide").index();
			return i = -1 == i ? 0 : i
		},
		simp: function (e, i, t) {
			var a = Math.abs(e) - Math.floor(Math.abs(e / i)) * i;
			return t ? a : e < 0 ? -1 * a : a
		},
		iOSVersion: function () {
			var e = !1;
			return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? navigator.userAgent.match(/OS 4_\d like Mac OS X/i) && (e = !0) : e = !1, e
		},
		isIE: function (e, i) {
			var t = jQuery('<div style="display:none;"/>').appendTo(jQuery("body"));
			t.html("\x3c!--[if " + (i || "") + " IE " + (e || "") + "]><a>&nbsp;</a><![endif]--\x3e");
			var a = t.find("a").length;
			return t.remove(), a
		},
		is_mobile: function () {
			var e = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
				i = !1;
			for (var t in e) navigator.userAgent.split(e[t]).length > 1 && (i = !0);
			return i
		},
		is_android: function () {
			var e = ["android", "Android"],
				i = !1;
			for (var t in e) navigator.userAgent.split(e[t]).length > 1 && (i = !0);
			return i
		},
		callBackHandling: function (e, i, t) {
			try {
				e.callBackArray && jQuery.each(e.callBackArray, function (e, a) {
					a && a.inmodule && a.inmodule === i && a.atposition && a.atposition === t && a.callback && a.callback.call()
				})
			} catch (e) {
				console.log("Call Back Failed")
			}
		},
		get_browser: function () {
			var e, i = navigator.appName,
				t = navigator.userAgent,
				a = t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
			return a && null != (e = t.match(/version\/([\.\d]+)/i)) && (a[2] = e[1]), (a = a ? [a[1], a[2]] : [i, navigator.appVersion, "-?"])[0]
		},
		get_browser_version: function () {
			var e, i = navigator.appName,
				t = navigator.userAgent,
				a = t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
			return a && null != (e = t.match(/version\/([\.\d]+)/i)) && (a[2] = e[1]), (a = a ? [a[1], a[2]] : [i, navigator.appVersion, "-?"])[1]
		},
		getHorizontalOffset: function (e, i) {
			var t = gWiderOut(e, ".outer-left"),
				a = gWiderOut(e, ".outer-right");
			switch (i) {
				case "left":
					return t;
				case "right":
					return a;
				case "both":
					return t + a
			}
		},
		callingNewSlide: function (e, i) {
			var t = e.find(".next-revslide").length > 0 ? e.find(".next-revslide").index() : e.find(".processing-revslide").length > 0 ? e.find(".processing-revslide").index() : e.find(".active-revslide").index(),
				a = 0,
				n = e[0].opt;
			e.find(".next-revslide").removeClass("next-revslide"), e.find(".active-revslide").hasClass("tp-invisible-slide") && (t = n.last_shown_slide), i && jQuery.isNumeric(i) || i.match(/to/g) ? (a = 1 === i || -1 === i ? (a = t + i) < 0 ? n.slideamount - 1 : a >= n.slideamount ? 0 : a : (i = jQuery.isNumeric(i) ? i : parseInt(i.split("to")[1], 0)) < 0 ? 0 : i > n.slideamount - 1 ? n.slideamount - 1 : i, e.find(".tp-revslider-slidesli:eq(" + a + ")").addClass("next-revslide")) : i && e.find(".tp-revslider-slidesli").each(function () {
				var e = jQuery(this);
				e.data("index") === i && e.addClass("next-revslide")
			}), a = e.find(".next-revslide").index(), e.trigger("revolution.nextslide.waiting"), t === a && t === n.last_shown_slide || a !== t && -1 != a ? swapSlide(e) : e.find(".next-revslide").removeClass("next-revslide")
		},
		slotSize: function (e, i) {
			i.slotw = Math.ceil(i.width / i.slots), "fullscreen" == i.sliderLayout ? i.sloth = Math.ceil(jQuery(window).height() / i.slots) : i.sloth = Math.ceil(i.height / i.slots), "on" == i.autoHeight && e !== undefined && "" !== e && (i.sloth = Math.ceil(e.height() / i.slots))
		},
		setSize: function (e) {
			var i = (e.top_outer || 0) + (e.bottom_outer || 0),
				t = parseInt(e.carousel.padding_top || 0, 0),
				a = parseInt(e.carousel.padding_bottom || 0, 0),
				n = e.gridheight[e.curWinRange],
				r = 0,
				o = -1 === e.nextSlide || e.nextSlide === undefined ? 0 : e.nextSlide;
			if (e.paddings = e.paddings === undefined ? {
					top: parseInt(e.c.parent().css("paddingTop"), 0) || 0,
					bottom: parseInt(e.c.parent().css("paddingBottom"), 0) || 0
				} : e.paddings, e.rowzones && e.rowzones.length > 0)
				for (var s = 0; s < e.rowzones[o].length; s++) r += e.rowzones[o][s][0].offsetHeight;
			if (n = n < e.minHeight ? e.minHeight : n, n = n < r ? r : n, "fullwidth" == e.sliderLayout && "off" == e.autoHeight && punchgs.TweenLite.set(e.c, {
					maxHeight: n + "px"
				}), e.c.css({
					marginTop: t,
					marginBottom: a
				}), e.width = e.ul.width(), e.height = e.ul.height(), setScale(e), e.height = Math.round(e.gridheight[e.curWinRange] * (e.width / e.gridwidth[e.curWinRange])), e.height > e.gridheight[e.curWinRange] && "on" != e.autoHeight && (e.height = e.gridheight[e.curWinRange]), "fullscreen" == e.sliderLayout || e.infullscreenmode) {
				e.height = e.bw * e.gridheight[e.curWinRange];
				e.c.parent().width();
				var l = jQuery(window).height();
				if (e.fullScreenOffsetContainer != undefined) {
					try {
						var d = e.fullScreenOffsetContainer.split(",");
						d && jQuery.each(d, function (e, i) {
							l = jQuery(i).length > 0 ? l - jQuery(i).outerHeight(!0) : l
						})
					} catch (e) {}
					try {
						e.fullScreenOffset.split("%").length > 1 && e.fullScreenOffset != undefined && e.fullScreenOffset.length > 0 ? l -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : e.fullScreenOffset != undefined && e.fullScreenOffset.length > 0 && (l -= parseInt(e.fullScreenOffset, 0))
					} catch (e) {}
				}
				l = l < e.minHeight ? e.minHeight : l, l -= i, e.c.parent().height(l), e.c.closest(".rev_slider_wrapper").height(l), e.c.css({
					height: "100%"
				}), e.height = l, e.minHeight != undefined && e.height < e.minHeight && (e.height = e.minHeight), e.height = parseInt(r, 0) > parseInt(e.height, 0) ? r : e.height
			} else e.minHeight != undefined && e.height < e.minHeight && (e.height = e.minHeight), e.height = parseInt(r, 0) > parseInt(e.height, 0) ? r : e.height, e.c.height(e.height);
			var u = {
				height: t + a + i + e.height + e.paddings.top + e.paddings.bottom
			};
			e.c.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css(u), e.c.closest(".rev_slider_wrapper").css(u), setScale(e)
		},
		enterInViewPort: function (e) {
			e.waitForCountDown && (countDown(e.c, e), e.waitForCountDown = !1), e.waitForFirstSlide && (swapSlide(e.c), e.waitForFirstSlide = !1, setTimeout(function () {
				e.c.removeClass("tp-waitforfirststart")
			}, 500)), "playing" != e.sliderlaststatus && e.sliderlaststatus != undefined || e.c.trigger("starttimer"), e.lastplayedvideos != undefined && e.lastplayedvideos.length > 0 && jQuery.each(e.lastplayedvideos, function (i, t) {
				_R.playVideo(t, e)
			})
		},
		leaveViewPort: function (e) {
			e.sliderlaststatus = e.sliderstatus, e.c.trigger("stoptimer"), e.playingvideos != undefined && e.playingvideos.length > 0 && (e.lastplayedvideos = jQuery.extend(!0, [], e.playingvideos), e.playingvideos && jQuery.each(e.playingvideos, function (i, t) {
				e.leaveViewPortBasedStop = !0, _R.stopVideo && _R.stopVideo(t, e)
			}))
		},
		unToggleState: function (e) {
			e != undefined && e.length > 0 && jQuery.each(e, function (e, i) {
				i.removeClass("rs-toggle-content-active")
			})
		},
		toggleState: function (e) {
			e != undefined && e.length > 0 && jQuery.each(e, function (e, i) {
				i.addClass("rs-toggle-content-active")
			})
		},
		swaptoggleState: function (e) {
			e != undefined && e.length > 0 && jQuery.each(e, function (e, i) {
				jQuery(i).hasClass("rs-toggle-content-active") ? jQuery(i).removeClass("rs-toggle-content-active") : jQuery(i).addClass("rs-toggle-content-active")
			})
		},
		lastToggleState: function (e) {
			var i = 0;
			return e != undefined && e.length > 0 && jQuery.each(e, function (e, t) {
				i = t.hasClass("rs-toggle-content-active")
			}), i
		}
	});
	var _ISM = _R.is_mobile(),
		_ANDROID = _R.is_android(),
		checkIDS = function (e, i) {
			if (e.anyid = e.anyid === undefined ? [] : e.anyid, -1 != jQuery.inArray(i.attr("id"), e.anyid)) {
				var t = i.attr("id") + "_" + Math.round(9999 * Math.random());
				i.attr("id", t)
			}
			e.anyid.push(i.attr("id"))
		},
		removeArray = function (e, i) {
			var t = [];
			return jQuery.each(e, function (e, a) {
				e != i && t.push(a)
			}), t
		},
		removeNavWithLiref = function (e, i, t) {
			t.c.find(e).each(function () {
				var e = jQuery(this);
				e.data("liref") === i && e.remove()
			})
		},
		lAjax = function (e, i) {
			return !jQuery("body").data(e) && (i.filesystem ? (i.errorm === undefined && (i.errorm = "<br>Local Filesystem Detected !<br>Put this to your header:"), console.warn("Local Filesystem detected !"), i.errorm = i.errorm + '<br>&lt;script type="text/javascript" src="' + i.jsFileLocation + e + i.extensions_suffix + '"&gt;&lt;/script&gt;', console.warn(i.jsFileLocation + e + i.extensions_suffix + " could not be loaded !"), console.warn("Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document."), console.log(" "), i.modulesfailing = !0, !1) : (jQuery.ajax({
				url: i.jsFileLocation + e + i.extensions_suffix + "?version=" + version.core,
				dataType: "script",
				cache: !0,
				error: function (t) {
					console.warn("Slider Revolution 5.0 Error !"), console.error("Failure at Loading:" + e + i.extensions_suffix + " on Path:" + i.jsFileLocation), console.info(t)
				}
			}), void jQuery("body").data(e, !0)))
		},
		getNeededScripts = function (e, i) {
			var t = new Object,
				a = e.navigation;
			return t.kenburns = !1, t.parallax = !1, t.carousel = !1, t.navigation = !1, t.videos = !1, t.actions = !1, t.layeranim = !1, t.migration = !1, i.data("version") && i.data("version").toString().match(/5./gi) ? (i.find("img").each(function () {
				"on" == jQuery(this).data("kenburns") && (t.kenburns = !0)
			}), ("carousel" == e.sliderType || "on" == a.keyboardNavigation || "on" == a.mouseScrollNavigation || "on" == a.touch.touchenabled || a.arrows.enable || a.bullets.enable || a.thumbnails.enable || a.tabs.enable) && (t.navigation = !0), i.find(".tp-caption, .tp-static-layer, .rs-background-video-layer").each(function () {
				var e = jQuery(this);
				(e.data("ytid") != undefined || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (t.videos = !0), (e.data("vimeoid") != undefined || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (t.videos = !0), e.data("actions") !== undefined && (t.actions = !0), t.layeranim = !0
			}), i.find("li").each(function () {
				jQuery(this).data("link") && jQuery(this).data("link") != undefined && (t.layeranim = !0, t.actions = !0)
			}), !t.videos && (i.find(".rs-background-video-layer").length > 0 || i.find(".tp-videolayer").length > 0 || i.find(".tp-audiolayer").length > 0 || i.find("iframe").length > 0 || i.find("video").length > 0) && (t.videos = !0), "carousel" == e.sliderType && (t.carousel = !0), ("off" !== e.parallax.type || e.viewPort.enable || "true" == e.viewPort.enable || "true" === e.scrolleffect.on || e.scrolleffect.on) && (t.parallax = !0)) : (t.kenburns = !0, t.parallax = !0, t.carousel = !1, t.navigation = !0, t.videos = !0, t.actions = !0, t.layeranim = !0, t.migration = !0), "hero" == e.sliderType && (t.carousel = !1, t.navigation = !1), window.location.href.match(/file:/gi) && (t.filesystem = !0, e.filesystem = !0), t.videos && void 0 === _R.isVideoPlaying && lAjax("revolution.extension.video", e), t.carousel && void 0 === _R.prepareCarousel && lAjax("revolution.extension.carousel", e), t.carousel || void 0 !== _R.animateSlide || lAjax("revolution.extension.slideanims", e), t.actions && void 0 === _R.checkActions && lAjax("revolution.extension.actions", e), t.layeranim && void 0 === _R.handleStaticLayers && lAjax("revolution.extension.layeranimation", e), t.kenburns && void 0 === _R.stopKenBurn && lAjax("revolution.extension.kenburn", e), t.navigation && void 0 === _R.createNavigation && lAjax("revolution.extension.navigation", e), t.migration && void 0 === _R.migration && lAjax("revolution.extension.migration", e), t.parallax && void 0 === _R.checkForParallax && lAjax("revolution.extension.parallax", e), e.addons != undefined && e.addons.length > 0 && jQuery.each(e.addons, function (i, t) {
				"object" == typeof t && t.fileprefix != undefined && lAjax(t.fileprefix, e)
			}), t
		},
		waitForScripts = function (e, i) {
			var t = !0,
				a = i.scriptsneeded;
			i.addons != undefined && i.addons.length > 0 && jQuery.each(i.addons, function (e, i) {
				"object" == typeof i && i.init != undefined && _R[i.init] === undefined && (t = !1)
			}), a.filesystem || "undefined" != typeof punchgs && t && (!a.kenburns || a.kenburns && void 0 !== _R.stopKenBurn) && (!a.navigation || a.navigation && void 0 !== _R.createNavigation) && (!a.carousel || a.carousel && void 0 !== _R.prepareCarousel) && (!a.videos || a.videos && void 0 !== _R.resetVideo) && (!a.actions || a.actions && void 0 !== _R.checkActions) && (!a.layeranim || a.layeranim && void 0 !== _R.handleStaticLayers) && (!a.migration || a.migration && void 0 !== _R.migration) && (!a.parallax || a.parallax && void 0 !== _R.checkForParallax) && (a.carousel || !a.carousel && void 0 !== _R.animateSlide) ? e.trigger("scriptsloaded") : setTimeout(function () {
				waitForScripts(e, i)
			}, 50)
		},
		getScriptLocation = function (e) {
			var i = new RegExp("themepunch.revolution.min.js", "gi"),
				t = "";
			return jQuery("script").each(function () {
				var e = jQuery(this).attr("src");
				e && e.match(i) && (t = e)
			}), t = t.replace("jquery.themepunch.revolution.min.js", ""), t = t.replace("jquery.themepunch.revolution.js", ""), t = t.split("?")[0]
		},
		setCurWinRange = function (e, i) {
			var t = 9999,
				a = 0,
				n = 0,
				r = 0,
				o = jQuery(window).width(),
				s = i && 9999 == e.responsiveLevels ? e.visibilityLevels : e.responsiveLevels;
			s && s.length && jQuery.each(s, function (e, i) {
				o < i && (0 == a || a > i) && (t = i, r = e, a = i), o > i && a < i && (a = i, n = e)
			}), a < t && (r = n), i ? e.forcedWinRange = r : e.curWinRange = r
		},
		prepareOptions = function (e, i) {
			i.carousel.maxVisibleItems = i.carousel.maxVisibleItems < 1 ? 999 : i.carousel.maxVisibleItems, i.carousel.vertical_align = "top" === i.carousel.vertical_align ? "0%" : "bottom" === i.carousel.vertical_align ? "100%" : "50%"
		},
		gWiderOut = function (e, i) {
			var t = 0;
			return e.find(i).each(function () {
				var e = jQuery(this);
				!e.hasClass("tp-forcenotvisible") && t < e.outerWidth() && (t = e.outerWidth())
			}), t
		},
		initSlider = function (container, opt) {
			if (container == undefined) return !1;
			container.data("aimg") != undefined && ("enabled" == container.data("aie8") && _R.isIE(8) || "enabled" == container.data("amobile") && _ISM) && container.html('<img class="tp-slider-alternative-image" src="' + container.data("aimg") + '">'), container.find(">ul").addClass("tp-revslider-mainul"), opt.c = container, opt.ul = container.find(".tp-revslider-mainul"), opt.ul.find(">li").each(function (e) {
				var i = jQuery(this);
				"on" == i.data("hideslideonmobile") && _ISM && i.remove(), (i.data("invisible") || !0 === i.data("invisible")) && (i.addClass("tp-invisible-slide"), i.appendTo(opt.ul))
			}), opt.addons != undefined && opt.addons.length > 0 && jQuery.each(opt.addons, function (i, obj) {
				"object" == typeof obj && obj.init != undefined && _R[obj.init](eval(obj.params))
			}), opt.cid = container.attr("id"), opt.ul.css({
				visibility: "visible"
			}), opt.slideamount = opt.ul.find(">li").not(".tp-invisible-slide").length, opt.realslideamount = opt.ul.find(">li").length, opt.slayers = container.find(".tp-static-layers"), opt.slayers.data("index", "staticlayers"), 1 != opt.waitForInit && (container[0].opt = opt, runSlider(container, opt))
		},
		onFullScreenChange = function () {
			jQuery("body").data("rs-fullScreenMode", !jQuery("body").data("rs-fullScreenMode")), jQuery("body").data("rs-fullScreenMode") && setTimeout(function () {
				jQuery(window).trigger("resize")
			}, 200)
		},
		runSlider = function (e, i) {
			if (i.sliderisrunning = !0, i.ul.find(">li").each(function (e) {
					jQuery(this).data("originalindex", e)
				}), i.allli = i.ul.find(">li"), jQuery.each(i.allli, function (e, i) {
					(i = jQuery(i)).data("origindex", i.index())
				}), i.li = i.ul.find(">li").not(".tp-invisible-slide"), "on" == i.shuffle) {
				var t = new Object,
					a = i.ul.find(">li:first-child");
				t.fstransition = a.data("fstransition"), t.fsmasterspeed = a.data("fsmasterspeed"), t.fsslotamount = a.data("fsslotamount");
				for (var n = 0; n < i.slideamount; n++) {
					var r = Math.round(Math.random() * i.slideamount);
					i.ul.find(">li:eq(" + r + ")").prependTo(i.ul)
				}
				var o = i.ul.find(">li:first-child");
				o.data("fstransition", t.fstransition), o.data("fsmasterspeed", t.fsmasterspeed), o.data("fsslotamount", t.fsslotamount), i.allli = i.ul.find(">li"), i.li = i.ul.find(">li").not(".tp-invisible-slide")
			}
			if (i.inli = i.ul.find(">li.tp-invisible-slide"), i.thumbs = new Array, i.slots = 4, i.act = -1, i.firststart = 1, i.loadqueue = new Array, i.syncload = 0, i.conw = e.width(), i.conh = e.height(), i.responsiveLevels.length > 1 ? i.responsiveLevels[0] = 9999 : i.responsiveLevels = 9999, jQuery.each(i.allli, function (e, t) {
					var a = (t = jQuery(t)).find(".rev-slidebg") || t.find("img").first(),
						n = 0;
					t.addClass("tp-revslider-slidesli"), t.data("index") === undefined && t.data("index", "rs-" + Math.round(999999 * Math.random()));
					var r = new Object;
					r.params = new Array, r.id = t.data("index"), r.src = t.data("thumb") !== undefined ? t.data("thumb") : a.data("lazyload") !== undefined ? a.data("lazyload") : a.attr("src"), t.data("title") !== undefined && r.params.push({
						from: RegExp("\\{\\{title\\}\\}", "g"),
						to: t.data("title")
					}), t.data("description") !== undefined && r.params.push({
						from: RegExp("\\{\\{description\\}\\}", "g"),
						to: t.data("description")
					});
					for (n = 1; n <= 10; n++) t.data("param" + n) !== undefined && r.params.push({
						from: RegExp("\\{\\{param" + n + "\\}\\}", "g"),
						to: t.data("param" + n)
					});
					if (i.thumbs.push(r), t.data("link") != undefined) {
						var o = t.data("link"),
							s = t.data("target") || "_self",
							l = "back" === t.data("slideindex") ? 0 : 60,
							d = t.data("linktoslide"),
							u = d;
						d != undefined && "next" != d && "prev" != d && i.allli.each(function () {
							var e = jQuery(this);
							e.data("origindex") + 1 == u && (d = e.data("index"))
						}), "slide" != o && (d = "no");
						var c = '<div class="tp-caption slidelink" style="cursor:pointer;width:100%;height:100%;z-index:' + l + ';" data-x="center" data-y="center" data-basealign="slide" ',
							p = "scroll_under" === d ? '[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]' : "prev" === d ? '[{"event":"click","action":"jumptoslide","slide":"prev","delay":"0.2"}]' : "next" === d ? '[{"event":"click","action":"jumptoslide","slide":"next","delay":"0.2"}]' : '[{"event":"click","action":"jumptoslide","slide":"' + d + '","delay":"0.2"}]',
							f = ' data-frames=\'[{"delay":0,"speed":100,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]\'';
						c = "no" == d ? c + f + " >" : c + "data-actions='" + p + "'" + f + " >", c += '<a style="width:100%;height:100%;display:block"', c = "slide" != o ? c + ' target="' + s + '" href="' + o + '"' : c, c += '><span style="width:100%;height:100%;display:block"></span></a></div>', t.append(c)
					}
				}), i.rle = i.responsiveLevels.length || 1, i.gridwidth = cArray(i.gridwidth, i.rle), i.gridheight = cArray(i.gridheight, i.rle), "on" == i.simplifyAll && (_R.isIE(8) || _R.iOSVersion()) && (e.find(".tp-caption").each(function () {
					var e = jQuery(this);
					e.removeClass("customin customout").addClass("fadein fadeout"), e.data("splitin", ""), e.data("speed", 400)
				}), i.allli.each(function () {
					var e = jQuery(this);
					e.data("transition", "fade"), e.data("masterspeed", 500), e.data("slotamount", 1), (e.find(".rev-slidebg") || e.find(">img").first()).data("kenburns", "off")
				})), i.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), i.autoHeight = "fullscreen" == i.sliderLayout ? "on" : i.autoHeight, "fullwidth" == i.sliderLayout && "off" == i.autoHeight && e.css({
					maxHeight: i.gridheight[i.curWinRange] + "px"
				}), "auto" != i.sliderLayout && 0 == e.closest(".forcefullwidth_wrapper_tp_banner").length && ("fullscreen" !== i.sliderLayout || "on" != i.fullScreenAutoWidth)) {
				var s = e.parent(),
					l = s.css("marginBottom"),
					d = s.css("marginTop"),
					u = e.attr("id") + "_forcefullwidth";
				l = l === undefined ? 0 : l, d = d === undefined ? 0 : d, s.wrap('<div class="forcefullwidth_wrapper_tp_banner" id="' + u + '" style="position:relative;width:100%;height:auto;margin-top:' + d + ";margin-bottom:" + l + '"></div>'), e.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + e.height() + 'px"></div>'), e.parent().css({
					marginTop: "0px",
					marginBottom: "0px"
				}), e.parent().css({
					position: "absolute"
				})
			}
			if (i.shadow !== undefined && i.shadow > 0 && (e.parent().addClass("tp-shadow" + i.shadow), e.parent().append('<div class="tp-shadowcover"></div>'), e.parent().find(".tp-shadowcover").css({
					backgroundColor: e.parent().css("backgroundColor"),
					backgroundImage: e.parent().css("backgroundImage")
				})), setCurWinRange(i), setCurWinRange(i, !0), !e.hasClass("revslider-initialised")) {
				e.addClass("revslider-initialised"), e.addClass("tp-simpleresponsive"), e.attr("id") == undefined && e.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), checkIDS(i, e), i.firefox13 = !1, i.ie = !jQuery.support.opacity, i.ie9 = 9 == document.documentMode, i.origcd = i.delay;
				var c = jQuery.fn.jquery.split("."),
					p = parseFloat(c[0]),
					f = parseFloat(c[1]);
				parseFloat(c[2] || "0");
				1 == p && f < 7 && e.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + c + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), p > 1 && (i.ie = !1);
				var h = new Object;
				h.addedyt = 0, h.addedvim = 0, h.addedvid = 0, i.scrolleffect.on && (i.scrolleffect.layers = new Array), e.find(".tp-caption, .rs-background-video-layer").each(function (e) {
					var t = jQuery(this),
						a = t.data(),
						n = a.autoplayonlyfirsttime,
						r = a.autoplay,
						o = a.videomp4 !== undefined || a.videowebm !== undefined || a.videoogv !== undefined,
						s = t.hasClass("tp-audiolayer"),
						l = a.videoloop,
						d = !0,
						u = !1;
					a.startclasses = t.attr("class"), a.isparallaxlayer = a.startclasses.indexOf("rs-parallax") >= 0, t.hasClass("tp-static-layer") && _R.handleStaticLayers && (_R.handleStaticLayers(t, i), i.scrolleffect.on && ("on" === i.scrolleffect.on_parallax_static_layers && a.isparallaxlayer || "on" === i.scrolleffect.on_static_layers && !a.isparallaxlayer) && (u = !0), d = !1);
					var c = t.data("noposteronmobile") || t.data("noPosterOnMobile") || t.data("posteronmobile") || t.data("posterOnMobile") || t.data("posterOnMObile");
					t.data("noposteronmobile", c);
					var p = 0;
					if (t.find("iframe").each(function () {
							punchgs.TweenLite.set(jQuery(this), {
								autoAlpha: 0
							}), p++
						}), p > 0 && t.data("iframes", !0), t.hasClass("tp-caption")) {
						var f = t.hasClass("slidelink") ? "width:100% !important;height:100% !important;" : "",
							g = t.data(),
							v = "",
							m = g.type,
							y = "row" === m || "column" === m ? "relative" : "absolute",
							w = "";
						"row" === m ? (t.addClass("rev_row").removeClass("tp-resizeme"), w = "rev_row_wrap") : "column" === m ? (v = g.verticalalign === undefined ? " vertical-align:bottom;" : " vertical-align:" + g.verticalalign + ";", w = "rev_column", t.addClass("rev_column_inner").removeClass("tp-resizeme"), t.data("width", "auto"), punchgs.TweenLite.set(t, {
							width: "auto"
						})) : "group" === m && t.removeClass("tp-resizeme");
						var b = "",
							_ = "";
						"row" !== m && "group" !== m && "column" !== m ? (b = "display:" + t.css("display") + ";", t.closest(".rev_column").length > 0 ? (t.addClass("rev_layer_in_column"), d = !1) : t.closest(".rev_group").length > 0 && (t.addClass("rev_layer_in_group"), d = !1)) : "column" === m && (d = !1), g.wrapper_class !== undefined && (w = w + " " + g.wrapper_class), g.wrapper_id !== undefined && (_ = 'id="' + g.wrapper_id + '"'), t.wrap("<div " + _ + ' class="tp-parallax-wrap ' + w + '" style="' + v + " " + f + "position:" + y + ";" + b + ';visibility:hidden"><div class="tp-loop-wrap" style="' + f + "position:" + y + ";" + b + ';"><div class="tp-mask-wrap" style="' + f + "position:" + y + ";" + b + ';" ></div></div></div>'), d && i.scrolleffect.on && ("on" === i.scrolleffect.on_parallax_layers && a.isparallaxlayer || "on" === i.scrolleffect.on_layers && !a.isparallaxlayer) && i.scrolleffect.layers.push(t.parent()), u && i.scrolleffect.layers.push(t.parent()), "column" === m && (t.append('<div class="rev_column_bg rev_column_bg_man_sized" style="visibility:hidden"></div>'), t.closest(".tp-parallax-wrap").append('<div class="rev_column_bg rev_column_bg_auto_sized"></div>'));
						var x = ["pendulum", "rotate", "slideloop", "pulse", "wave"],
							j = t.closest(".tp-loop-wrap");
						jQuery.each(x, function (e, i) {
							var a = t.find(".rs-" + i),
								n = a.data() || "";
							"" != n && (j.data(n), j.addClass("rs-" + i), a.children(0).unwrap(), t.data("loopanimation", "on"))
						}), t.attr("id") === undefined && t.attr("id", "layer-" + Math.round(999999999 * Math.random())), checkIDS(i, t), punchgs.TweenLite.set(t, {
							visibility: "hidden"
						})
					}
					var R = t.data("actions");
					R !== undefined && _R.checkActions(t, i, R), checkHoverDependencies(t, i), _R.checkVideoApis && (h = _R.checkVideoApis(t, i, h)), !_ISM || i.fallbacks.allowHTML5AutoPlayOnAndroid && o || (1 != n && "true" != n || (a.autoplayonlyfirsttime = !1, n = !1), 1 != r && "true" != r && "on" != r && "1sttime" != r || (a.autoplay = "off", r = "off")), s || 1 != n && "true" != n && "1sttime" != r || "loopandnoslidestop" == l || t.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-once"), s || 1 != r && "true" != r && "on" != r && "no1sttime" != r || "loopandnoslidestop" == l || t.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-always")
				}), e[0].addEventListener("mouseenter", function () {
					e.trigger("tp-mouseenter"), i.overcontainer = !0
				}, {
					passive: !0
				}), e[0].addEventListener("mouseover", function () {
					e.trigger("tp-mouseover"), i.overcontainer = !0
				}, {
					passive: !0
				}), e[0].addEventListener("mouseleave", function () {
					e.trigger("tp-mouseleft"), i.overcontainer = !1
				}, {
					passive: !0
				}), e.find(".tp-caption video").each(function (e) {
					var i = jQuery(this);
					i.removeClass("video-js vjs-default-skin"), i.attr("preload", ""), i.css({
						display: "none"
					})
				}), "standard" !== i.sliderType && (i.lazyType = "all"), loadImages(e.find(".tp-static-layers"), i, 0, !0), waitForCurrentImages(e.find(".tp-static-layers"), i, function () {
					e.find(".tp-static-layers img").each(function () {
						var e = jQuery(this),
							t = e.data("lazyload") != undefined ? e.data("lazyload") : e.attr("src"),
							a = getLoadObj(i, t);
						e.attr("src", a.src)
					})
				}), i.rowzones = [], i.allli.each(function (e) {
					var t = jQuery(this);
					i.rowzones[e] = [], t.find(".rev_row_zone").each(function () {
						i.rowzones[e].push(jQuery(this))
					}), "all" != i.lazyType && ("smart" != i.lazyType || 0 != e && 1 != e && e != i.slideamount && e != i.slideamount - 1) || (loadImages(t, i, e), waitForCurrentImages(t, i, function () {}))
				});
				var g = getUrlVars("#")[0];
				if (g.length < 9 && g.split("slide").length > 1) {
					var v = parseInt(g.split("slide")[1], 0);
					v < 1 && (v = 1), v > i.slideamount && (v = i.slideamount), i.startWithSlide = v - 1
				}
				e.append('<div class="tp-loader ' + i.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), i.loader = e.find(".tp-loader"), 0 === e.find(".tp-bannertimer").length && e.append('<div class="tp-bannertimer" style="visibility:hidden"></div>'), e.find(".tp-bannertimer").css({
					width: "0%"
				}), i.ul.css({
					display: "block"
				}), prepareSlides(e, i), ("off" !== i.parallax.type || i.scrolleffect.on) && _R.checkForParallax && _R.checkForParallax(e, i), _R.setSize(i), "hero" !== i.sliderType && _R.createNavigation && _R.createNavigation(e, i), _R.resizeThumbsTabs && _R.resizeThumbsTabs && _R.resizeThumbsTabs(i), contWidthManager(i);
				var m = i.viewPort;
				i.inviewport = !1, m != undefined && m.enable && (jQuery.isNumeric(m.visible_area) || -1 !== m.visible_area.indexOf("%") && (m.visible_area = parseInt(m.visible_area) / 100), _R.scrollTicker && _R.scrollTicker(i, e)), "carousel" === i.sliderType && _R.prepareCarousel && (punchgs.TweenLite.set(i.ul, {
					opacity: 0
				}), _R.prepareCarousel(i, new punchgs.TimelineLite, undefined, 0), i.onlyPreparedSlide = !0), setTimeout(function () {
					if (!m.enable || m.enable && i.inviewport || m.enable && !i.inviewport && "wait" == !m.outof) swapSlide(e);
					else if (i.c.addClass("tp-waitforfirststart"), i.waitForFirstSlide = !0, m.presize) {
						var t = jQuery(i.li[0]);
						loadImages(t, i, 0, !0), waitForCurrentImages(t.find(".tp-layers"), i, function () {
							_R.animateTheCaptions({
								slide: t,
								opt: i,
								preset: !0
							})
						})
					}
					_R.manageNavigation && _R.manageNavigation(i), i.slideamount > 1 && (!m.enable || m.enable && i.inviewport ? countDown(e, i) : i.waitForCountDown = !0), setTimeout(function () {
						e.trigger("revolution.slide.onloaded")
					}, 100)
				}, i.startDelay), i.startDelay = 0, jQuery("body").data("rs-fullScreenMode", !1), window.addEventListener("fullscreenchange", onFullScreenChange, {
					passive: !0
				}), window.addEventListener("mozfullscreenchange", onFullScreenChange, {
					passive: !0
				}), window.addEventListener("webkitfullscreenchange", onFullScreenChange, {
					passive: !0
				});
				var y = "resize.revslider-" + e.attr("id");
				jQuery(window).on(y, function () {
					if (e == undefined) return !1;
					0 != jQuery("body").find(e) && contWidthManager(i);
					var t = !1;
					if ("fullscreen" == i.sliderLayout) {
						var a = jQuery(window).height();
						"mobile" == i.fallbacks.ignoreHeightChanges && _ISM || "always" == i.fallbacks.ignoreHeightChanges ? (i.fallbacks.ignoreHeightChangesSize = i.fallbacks.ignoreHeightChangesSize == undefined ? 0 : i.fallbacks.ignoreHeightChangesSize, t = a != i.lastwindowheight && Math.abs(a - i.lastwindowheight) > i.fallbacks.ignoreHeightChangesSize) : t = a != i.lastwindowheight
					}(e.outerWidth(!0) != i.width || e.is(":hidden") || t) && (i.lastwindowheight = jQuery(window).height(), containerResized(e, i))
				}), hideSliderUnder(e, i), contWidthManager(i), i.fallbacks.disableFocusListener || "true" == i.fallbacks.disableFocusListener || !0 === i.fallbacks.disableFocusListener || (e.addClass("rev_redraw_on_blurfocus"), tabBlurringCheck())
			}
		},
		cArray = function (e, i) {
			if (!jQuery.isArray(e)) {
				t = e;
				(e = new Array).push(t)
			}
			if (e.length < i)
				for (var t = e[e.length - 1], a = 0; a < i - e.length + 2; a++) e.push(t);
			return e
		},
		checkHoverDependencies = function (e, i) {
			var t = e.data();
			("sliderenter" === t.start || t.frames !== undefined && t.frames[0] != undefined && "sliderenter" === t.frames[0].delay) && (i.layersonhover === undefined && (i.c.on("tp-mouseenter", function () {
				i.layersonhover && jQuery.each(i.layersonhover, function (e, t) {
					var a = t.data("closestli") || t.closest(".tp-revslider-slidesli"),
						n = t.data("staticli") || t.closest(".tp-static-layers");
					t.data("closestli") === undefined && (t.data("closestli", a), t.data("staticli", n)), (a.length > 0 && a.hasClass("active-revslide") || a.hasClass("processing-revslide") || n.length > 0) && (t.data("animdirection", "in"), _R.playAnimationFrame && _R.playAnimationFrame({
						caption: t,
						opt: i,
						frame: "frame_0",
						triggerdirection: "in",
						triggerframein: "frame_0",
						triggerframeout: "frame_999"
					}), t.data("triggerstate", "on"))
				})
			}), i.c.on("tp-mouseleft", function () {
				i.layersonhover && jQuery.each(i.layersonhover, function (e, t) {
					t.data("animdirection", "out"), t.data("triggered", !0), t.data("triggerstate", "off"), _R.stopVideo && _R.stopVideo(t, i), _R.playAnimationFrame && _R.playAnimationFrame({
						caption: t,
						opt: i,
						frame: "frame_999",
						triggerdirection: "out",
						triggerframein: "frame_0",
						triggerframeout: "frame_999"
					})
				})
			}), i.layersonhover = new Array), i.layersonhover.push(e))
		},
		contWidthManager = function (e) {
			var i = _R.getHorizontalOffset(e.c, "left");
			if ("auto" == e.sliderLayout || "fullscreen" === e.sliderLayout && "on" == e.fullScreenAutoWidth) "fullscreen" == e.sliderLayout && "on" == e.fullScreenAutoWidth ? punchgs.TweenLite.set(e.ul, {
				left: 0,
				width: e.c.width()
			}) : punchgs.TweenLite.set(e.ul, {
				left: i,
				width: e.c.width() - _R.getHorizontalOffset(e.c, "both")
			});
			else {
				var t = Math.ceil(e.c.closest(".forcefullwidth_wrapper_tp_banner").offset().left - i);
				punchgs.TweenLite.set(e.c.parent(), {
					left: 0 - t + "px",
					width: jQuery(window).width() - _R.getHorizontalOffset(e.c, "both")
				})
			}
			e.slayers && "fullwidth" != e.sliderLayout && "fullscreen" != e.sliderLayout && punchgs.TweenLite.set(e.slayers, {
				left: i
			})
		},
		cv = function (e, i) {
			return e === undefined ? i : e
		},
		hideSliderUnder = function (e, i, t) {
			var a = e.parent();
			jQuery(window).width() < i.hideSliderAtLimit ? (e.trigger("stoptimer"), "none" != a.css("display") && a.data("olddisplay", a.css("display")), a.css({
				display: "none"
			})) : e.is(":hidden") && t && (a.data("olddisplay") != undefined && "undefined" != a.data("olddisplay") && "none" != a.data("olddisplay") ? a.css({
				display: a.data("olddisplay")
			}) : a.css({
				display: "block"
			}), e.trigger("restarttimer"), setTimeout(function () {
				containerResized(e, i)
			}, 150)), _R.hideUnHideNav && _R.hideUnHideNav(i)
		},
		containerResized = function (e, i) {
			if (e.trigger("revolution.slide.beforeredraw"), 1 == i.infullscreenmode && (i.minHeight = jQuery(window).height()), setCurWinRange(i), setCurWinRange(i, !0), !_R.resizeThumbsTabs || !0 === _R.resizeThumbsTabs(i)) {
				if (hideSliderUnder(e, i, !0), contWidthManager(i), "carousel" == i.sliderType && _R.prepareCarousel(i, !0), e === undefined) return !1;
				_R.setSize(i), i.conw = i.c.width(), i.conh = i.infullscreenmode ? i.minHeight : i.c.height();
				var t = e.find(".active-revslide .slotholder"),
					a = e.find(".processing-revslide .slotholder");
				removeSlots(e, i, e, 2), "standard" === i.sliderType && (punchgs.TweenLite.set(a.find(".defaultimg"), {
					opacity: 0
				}), t.find(".defaultimg").css({
					opacity: 1
				})), "carousel" === i.sliderType && i.lastconw != i.conw && (clearTimeout(i.pcartimer), i.pcartimer = setTimeout(function () {
					_R.prepareCarousel(i, !0), "carousel" == i.sliderType && "on" === i.carousel.showLayersAllTime && jQuery.each(i.li, function (e) {
						_R.animateTheCaptions({
							slide: jQuery(i.li[e]),
							opt: i,
							recall: !0
						})
					})
				}, 100), i.lastconw = i.conw), _R.manageNavigation && _R.manageNavigation(i), _R.animateTheCaptions && e.find(".active-revslide").length > 0 && _R.animateTheCaptions({
					slide: e.find(".active-revslide"),
					opt: i,
					recall: !0
				}), "on" == a.data("kenburns") && _R.startKenBurn(a, i, a.data("kbtl") !== undefined ? a.data("kbtl").progress() : 0), "on" == t.data("kenburns") && _R.startKenBurn(t, i, t.data("kbtl") !== undefined ? t.data("kbtl").progress() : 0), _R.animateTheCaptions && e.find(".processing-revslide").length > 0 && _R.animateTheCaptions({
					slide: e.find(".processing-revslide"),
					opt: i,
					recall: !0
				}), _R.manageNavigation && _R.manageNavigation(i)
			}
			e.trigger("revolution.slide.afterdraw")
		},
		setScale = function (e) {
			e.bw = e.width / e.gridwidth[e.curWinRange], e.bh = e.height / e.gridheight[e.curWinRange], e.bh > e.bw ? e.bh = e.bw : e.bw = e.bh, (e.bh > 1 || e.bw > 1) && (e.bw = 1, e.bh = 1)
		},
		prepareSlides = function (e, i) {
			if (e.find(".tp-caption").each(function () {
					var e = jQuery(this);
					e.data("transition") !== undefined && e.addClass(e.data("transition"))
				}), i.ul.css({
					overflow: "hidden",
					width: "100%",
					height: "100%",
					maxHeight: e.parent().css("maxHeight")
				}), "on" == i.autoHeight && (i.ul.css({
					overflow: "hidden",
					width: "100%",
					height: "100%",
					maxHeight: "none"
				}), e.css({
					maxHeight: "none"
				}), e.parent().css({
					maxHeight: "none"
				})), i.allli.each(function (e) {
					var t = jQuery(this),
						a = t.data("originalindex");
					(i.startWithSlide != undefined && a == i.startWithSlide || i.startWithSlide === undefined && 0 == e) && t.addClass("next-revslide"), t.css({
						width: "100%",
						height: "100%",
						overflow: "hidden"
					})
				}), "carousel" === i.sliderType) {
				i.ul.css({
					overflow: "visible"
				}).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>');
				var t = '<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';
				i.c.parent().prepend(t), i.c.parent().append(t), _R.prepareCarousel(i)
			}
			e.parent().css({
				overflow: "visible"
			}), i.allli.find(">img").each(function (e) {
				var t = jQuery(this),
					a = t.closest("li"),
					n = a.find(".rs-background-video-layer");
				n.addClass("defaultvid").css({
					zIndex: 30
				}), t.addClass("defaultimg"), "on" == i.fallbacks.panZoomDisableOnMobile && _ISM && (t.data("kenburns", "off"), t.data("bgfit", "cover"));
				var r = a.data("mediafilter");
				r = "none" === r || r === undefined ? "" : r, t.wrap('<div class="slotholder" style="position:absolute; top:0px; left:0px; z-index:0;width:100%;height:100%;"></div>'), n.appendTo(a.find(".slotholder"));
				var o = t.data();
				t.closest(".slotholder").data(o), n.length > 0 && o.bgparallax != undefined && (n.data("bgparallax", o.bgparallax), n.data("showcoveronpause", "on")), "none" != i.dottedOverlay && i.dottedOverlay != undefined && t.closest(".slotholder").append('<div class="tp-dottedoverlay ' + i.dottedOverlay + '"></div>');
				var s = t.attr("src");
				o.src = s, o.bgfit = o.bgfit || "cover", o.bgrepeat = o.bgrepeat || "no-repeat", o.bgposition = o.bgposition || "center center";
				t.closest(".slotholder");
				var l = t.data("bgcolor"),
					d = "";
				d = l !== undefined && l.indexOf("gradient") >= 0 ? '"background:' + l + ';width:100%;height:100%;"' : '"background-color:' + l + ";background-repeat:" + o.bgrepeat + ";background-image:url(" + s + ");background-size:" + o.bgfit + ";background-position:" + o.bgposition + ';width:100%;height:100%;"', t.data("mediafilter", r), r = "on" === t.data("kenburns") ? "" : r;
				var u = jQuery('<div class="tp-bgimg defaultimg ' + r + '" data-bgcolor="' + l + '" style=' + d + "></div>");
				t.parent().append(u);
				var c = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + t.get(0).outerHTML);
				t.replaceWith(c), u.data(o), u.attr("src", s), "standard" !== i.sliderType && "undefined" !== i.sliderType || u.css({
					opacity: 0
				})
			}), i.scrolleffect.on && "on" === i.scrolleffect.on_slidebg && (i.allslotholder = new Array, i.allli.find(".slotholder").each(function () {
				jQuery(this).wrap('<div style="display:block;position:absolute;top:0px;left:0px;width:100%;height:100%" class="slotholder_fadeoutwrap"></div>')
			}), i.allslotholder = i.c.find(".slotholder_fadeoutwrap"))
		},
		removeSlots = function (e, i, t, a) {
			i.removePrepare = i.removePrepare + a, t.find(".slot, .slot-circle-wrapper").each(function () {
				jQuery(this).remove()
			}), i.transition = 0, i.removePrepare = 0
		},
		cutParams = function (e) {
			var i = e;
			return e != undefined && e.length > 0 && (i = e.split("?")[0]), i
		},
		relativeRedir = function (e) {
			return location.pathname.replace(/(.*)\/[^/]*/, "$1/" + e)
		},
		abstorel = function (e, i) {
			var t = e.split("/"),
				a = i.split("/");
			t.pop();
			for (var n = 0; n < a.length; n++) "." != a[n] && (".." == a[n] ? t.pop() : t.push(a[n]));
			return t.join("/")
		},
		imgLoaded = function (e, i, t) {
			i.syncload--, i.loadqueue && jQuery.each(i.loadqueue, function (i, a) {
				var n = a.src.replace(/\.\.\/\.\.\//gi, ""),
					r = self.location.href,
					o = document.location.origin,
					s = r.substring(0, r.length - 1) + "/" + n,
					l = o + "/" + n,
					d = abstorel(self.location.href, a.src);
				r = r.substring(0, r.length - 1) + n, (cutParams(o += n) === cutParams(decodeURIComponent(e.src)) || cutParams(r) === cutParams(decodeURIComponent(e.src)) || cutParams(d) === cutParams(decodeURIComponent(e.src)) || cutParams(l) === cutParams(decodeURIComponent(e.src)) || cutParams(s) === cutParams(decodeURIComponent(e.src)) || cutParams(a.src) === cutParams(decodeURIComponent(e.src)) || cutParams(a.src).replace(/^.*\/\/[^\/]+/, "") === cutParams(decodeURIComponent(e.src)).replace(/^.*\/\/[^\/]+/, "") || "file://" === window.location.origin && cutParams(e.src).match(new RegExp(n))) && (a.progress = t, a.width = e.width, a.height = e.height)
			}), progressImageLoad(i)
		},
		progressImageLoad = function (e) {
			3 != e.syncload && e.loadqueue && jQuery.each(e.loadqueue, function (i, t) {
				if (t.progress.match(/prepared/g) && e.syncload <= 3) {
					if (e.syncload++, "img" == t.type) {
						var a = new Image;
						a.onload = function () {
							imgLoaded(this, e, "loaded"), t.error = !1
						}, a.onerror = function () {
							imgLoaded(this, e, "failed"), t.error = !0
						}, a.src = t.src
					} else jQuery.get(t.src, function (i) {
						t.innerHTML = (new XMLSerializer).serializeToString(i.documentElement), t.progress = "loaded", e.syncload--, progressImageLoad(e)
					}).fail(function () {
						t.progress = "failed", e.syncload--, progressImageLoad(e)
					});
					t.progress = "inload"
				}
			})
		},
		addToLoadQueue = function (e, i, t, a, n) {
			var r = !1;
			if (i.loadqueue && jQuery.each(i.loadqueue, function (i, t) {
					t.src === e && (r = !0)
				}), !r) {
				var o = new Object;
				o.src = e, o.starttoload = jQuery.now(), o.type = a || "img", o.prio = t, o.progress = "prepared", o.static = n, i.loadqueue.push(o)
			}
		},
		loadImages = function (e, i, t, a) {
			e.find("img,.defaultimg, .tp-svg-layer").each(function () {
				var e = jQuery(this),
					n = e.data("lazyload") !== undefined && "undefined" !== e.data("lazyload") ? e.data("lazyload") : e.data("svg_src") != undefined ? e.data("svg_src") : e.attr("src"),
					r = e.data("svg_src") != undefined ? "svg" : "img";
				e.data("start-to-load", jQuery.now()), addToLoadQueue(n, i, t, r, a)
			}), progressImageLoad(i)
		},
		getLoadObj = function (e, i) {
			var t = new Object;
			return e.loadqueue && jQuery.each(e.loadqueue, function (e, a) {
				a.src == i && (t = a)
			}), t
		},
		waitForCurrentImages = function (e, i, t) {
			var a = !1;
			e.find("img,.defaultimg, .tp-svg-layer").each(function () {
				var t = jQuery(this),
					n = t.data("lazyload") != undefined ? t.data("lazyload") : t.data("svg_src") != undefined ? t.data("svg_src") : t.attr("src"),
					r = getLoadObj(i, n);
				if (t.data("loaded") === undefined && r !== undefined && r.progress && r.progress.match(/loaded/g)) {
					if (t.attr("src", r.src), "img" == r.type)
						if (t.hasClass("defaultimg")) _R.isIE(8) ? defimg.attr("src", r.src) : -1 == r.src.indexOf("images/transparent.png") && -1 == r.src.indexOf("assets/transparent.png") || t.data("bgcolor") === undefined ? t.css({
							backgroundImage: 'url("' + r.src + '")'
						}) : t.data("bgcolor") !== undefined && t.css({
							background: t.data("bgcolor")
						}), e.data("owidth", r.width), e.data("oheight", r.height), e.find(".slotholder").data("owidth", r.width), e.find(".slotholder").data("oheight", r.height);
						else {
							var o = t.data("ww"),
								s = t.data("hh");
							t.data("owidth", r.width), t.data("oheight", r.height), o = o == undefined || "auto" == o || "" == o ? r.width : o, s = s == undefined || "auto" == s || "" == s ? r.height : s, !jQuery.isNumeric(o) && o.indexOf("%") > 0 && (s = o), t.data("ww", o), t.data("hh", s)
						}
					else "svg" == r.type && "loaded" == r.progress && (t.append('<div class="tp-svg-innercontainer"></div>'), t.find(".tp-svg-innercontainer").append(r.innerHTML));
					t.data("loaded", !0)
				}
				if (r && r.progress && r.progress.match(/inprogress|inload|prepared/g) && (!r.error && jQuery.now() - t.data("start-to-load") < 5e3 ? a = !0 : (r.progress = "failed", r.reported_img || (r.reported_img = !0, console.warn(n + "  Could not be loaded !")))), 1 == i.youtubeapineeded && (!window.YT || YT.Player == undefined) && (a = !0, jQuery.now() - i.youtubestarttime > 5e3 && 1 != i.youtubewarning)) {
					i.youtubewarning = !0;
					l = "YouTube Api Could not be loaded !";
					"https:" === location.protocol && (l += " Please Check and Renew SSL Certificate !"), console.error(l), i.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + l + "</strong></div>")
				}
				if (1 == i.vimeoapineeded && !window.Froogaloop && (a = !0, jQuery.now() - i.vimeostarttime > 5e3 && 1 != i.vimeowarning)) {
					i.vimeowarning = !0;
					var l = "Vimeo Froogaloop Api Could not be loaded !";
					"https:" === location.protocol && (l += " Please Check and Renew SSL Certificate !"), console.error(l), i.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + l + "</strong></div>")
				}
			}), !_ISM && i.audioqueue && i.audioqueue.length > 0 && jQuery.each(i.audioqueue, function (e, i) {
				i.status && "prepared" === i.status && jQuery.now() - i.start < i.waittime && (a = !0)
			}), jQuery.each(i.loadqueue, function (e, i) {
				!0 !== i.static || "loaded" == i.progress && "failed" !== i.progress || ("failed" == i.progress ? i.reported || (i.reported = !0, console.warn("Static Image " + i.src + "  Could not be loaded in time. Error Exists:" + i.error)) : !i.error && jQuery.now() - i.starttoload < 5e3 ? a = !0 : i.reported || (i.reported = !0, console.warn("Static Image " + i.src + "  Could not be loaded within 5s! Error Exists:" + i.error)))
			}), a ? punchgs.TweenLite.delayedCall(.18, waitForCurrentImages, [e, i, t]) : punchgs.TweenLite.delayedCall(.18, t)
		},
		swapSlide = function (e) {
			var i = e[0].opt;
			if (clearTimeout(i.waitWithSwapSlide), e.find(".processing-revslide").length > 0) return i.waitWithSwapSlide = setTimeout(function () {
				swapSlide(e)
			}, 150), !1;
			var t = e.find(".active-revslide"),
				a = e.find(".next-revslide"),
				n = a.find(".defaultimg");
			if ("carousel" !== i.sliderType || i.carousel.fadein || (punchgs.TweenLite.to(i.ul, 1, {
					opacity: 1
				}), i.carousel.fadein = !0), a.index() === t.index() && !0 !== i.onlyPreparedSlide) return a.removeClass("next-revslide"), !1;
			!0 === i.onlyPreparedSlide && (i.onlyPreparedSlide = !1, jQuery(i.li[0]).addClass("processing-revslide")), a.removeClass("next-revslide").addClass("processing-revslide"), -1 === a.index() && "carousel" === i.sliderType && (a = jQuery(i.li[0])), a.data("slide_on_focus_amount", a.data("slide_on_focus_amount") + 1 || 1), "on" == i.stopLoop && a.index() == i.lastslidetoshow - 1 && (e.find(".tp-bannertimer").css({
				visibility: "hidden"
			}), e.trigger("revolution.slide.onstop"), i.noloopanymore = 1), a.index() === i.slideamount - 1 && (i.looptogo = i.looptogo - 1, i.looptogo <= 0 && (i.stopLoop = "on")), i.tonpause = !0, e.trigger("stoptimer"), i.cd = 0, "off" === i.spinner && (i.loader !== undefined ? i.loader.css({
				display: "none"
			}) : i.loadertimer = setTimeout(function () {
				i.loader !== undefined && i.loader.css({
					display: "block"
				})
			}, 50)), loadImages(a, i, 1), _R.preLoadAudio && _R.preLoadAudio(a, i, 1), waitForCurrentImages(a, i, function () {
				a.find(".rs-background-video-layer").each(function () {
					var e = jQuery(this);
					e.hasClass("HasListener") || (e.data("bgvideo", 1), _R.manageVideoLayer && _R.manageVideoLayer(e, i)), 0 == e.find(".rs-fullvideo-cover").length && e.append('<div class="rs-fullvideo-cover"></div>')
				}), swapSlideProgress(n, e)
			})
		},
		swapSlideProgress = function (e, i) {
			var t = i.find(".active-revslide"),
				a = i.find(".processing-revslide"),
				n = t.find(".slotholder"),
				r = a.find(".slotholder"),
				o = i[0].opt;
			o.tonpause = !1, o.cd = 0, clearTimeout(o.loadertimer), o.loader !== undefined && o.loader.css({
				display: "none"
			}), _R.setSize(o), _R.slotSize(e, o), _R.manageNavigation && _R.manageNavigation(o);
			var s = {};
			s.nextslide = a, s.currentslide = t, i.trigger("revolution.slide.onbeforeswap", s), o.transition = 1, o.videoplaying = !1, a.data("delay") != undefined ? (o.cd = 0, o.delay = a.data("delay")) : o.delay = o.origcd, "true" == a.data("ssop") || !0 === a.data("ssop") ? o.ssop = !0 : o.ssop = !1, i.trigger("nulltimer");
			var l = t.index(),
				d = a.index();
			o.sdir = d < l ? 1 : 0, "arrow" == o.sc_indicator && (0 == l && d == o.slideamount - 1 && (o.sdir = 1), l == o.slideamount - 1 && 0 == d && (o.sdir = 0)), o.lsdir = o.lsdir === undefined ? o.sdir : o.lsdir, o.dirc = o.lsdir != o.sdir, o.lsdir = o.sdir, t.index() != a.index() && 1 != o.firststart && _R.removeTheCaptions && _R.removeTheCaptions(t, o), a.hasClass("rs-pause-timer-once") || a.hasClass("rs-pause-timer-always") ? o.videoplaying = !0 : i.trigger("restarttimer"), a.removeClass("rs-pause-timer-once");
			var u, c;
			if (o.currentSlide = t.index(), o.nextSlide = a.index(), "carousel" == o.sliderType) c = new punchgs.TimelineLite, _R.prepareCarousel(o, c), letItFree(i, r, n, a, t, c), o.transition = 0, o.firststart = 0;
			else {
				(c = new punchgs.TimelineLite({
					onComplete: function () {
						letItFree(i, r, n, a, t, c)
					}
				})).add(punchgs.TweenLite.set(r.find(".defaultimg"), {
					opacity: 0
				})), c.pause(), _R.animateTheCaptions && _R.animateTheCaptions({
					slide: a,
					opt: o,
					preset: !0
				}), 1 == o.firststart && (punchgs.TweenLite.set(t, {
					autoAlpha: 0
				}), o.firststart = 0), punchgs.TweenLite.set(t, {
					zIndex: 18
				}), punchgs.TweenLite.set(a, {
					autoAlpha: 0,
					zIndex: 20
				}), "prepared" == a.data("differentissplayed") && (a.data("differentissplayed", "done"), a.data("transition", a.data("savedtransition")), a.data("slotamount", a.data("savedslotamount")), a.data("masterspeed", a.data("savedmasterspeed"))), a.data("fstransition") != undefined && "done" != a.data("differentissplayed") && (a.data("savedtransition", a.data("transition")), a.data("savedslotamount", a.data("slotamount")), a.data("savedmasterspeed", a.data("masterspeed")), a.data("transition", a.data("fstransition")), a.data("slotamount", a.data("fsslotamount")), a.data("masterspeed", a.data("fsmasterspeed")), a.data("differentissplayed", "prepared")), a.data("transition") == undefined && a.data("transition", "random"), u = 0;
				var p = a.data("transition") !== undefined ? a.data("transition").split(",") : "fade",
					f = a.data("nexttransid") == undefined ? -1 : a.data("nexttransid");
				"on" == a.data("randomtransition") ? f = Math.round(Math.random() * p.length) : f += 1, f == p.length && (f = 0), a.data("nexttransid", f);
				var h = p[f];
				o.ie && ("boxfade" == h && (h = "boxslide"), "slotfade-vertical" == h && (h = "slotzoom-vertical"), "slotfade-horizontal" == h && (h = "slotzoom-horizontal")), _R.isIE(8) && (h = 11), c = _R.animateSlide(u, h, i, a, t, r, n, c), "on" == r.data("kenburns") && (_R.startKenBurn(r, o), c.add(punchgs.TweenLite.set(r, {
					autoAlpha: 0
				}))), c.pause()
			}
			_R.scrollHandling && (_R.scrollHandling(o, !0, 0), c.eventCallback("onUpdate", function () {
				_R.scrollHandling(o, !0, 0)
			})), "off" != o.parallax.type && o.parallax.firstgo == undefined && _R.scrollHandling && (o.parallax.firstgo = !0, o.lastscrolltop = -999, _R.scrollHandling(o, !0, 0), setTimeout(function () {
				o.lastscrolltop = -999, _R.scrollHandling(o, !0, 0)
			}, 210), setTimeout(function () {
				o.lastscrolltop = -999, _R.scrollHandling(o, !0, 0)
			}, 420)), _R.animateTheCaptions ? "carousel" === o.sliderType && "on" === o.carousel.showLayersAllTime ? (jQuery.each(o.li, function (e) {
				o.carousel.allLayersStarted ? _R.animateTheCaptions({
					slide: jQuery(o.li[e]),
					opt: o,
					recall: !0
				}) : o.li[e] === a ? _R.animateTheCaptions({
					slide: jQuery(o.li[e]),
					maintimeline: c,
					opt: o,
					startslideanimat: 0
				}) : _R.animateTheCaptions({
					slide: jQuery(o.li[e]),
					opt: o,
					startslideanimat: 0
				})
			}), o.carousel.allLayersStarted = !0) : _R.animateTheCaptions({
				slide: a,
				opt: o,
				maintimeline: c,
				startslideanimat: 0
			}) : c != undefined && setTimeout(function () {
				c.resume()
			}, 30), punchgs.TweenLite.to(a, .001, {
				autoAlpha: 1
			})
		},
		letItFree = function (e, i, t, a, n, r) {
			var o = e[0].opt;
			"carousel" === o.sliderType || (o.removePrepare = 0, punchgs.TweenLite.to(i.find(".defaultimg"), .001, {
				zIndex: 20,
				autoAlpha: 1,
				onComplete: function () {
					removeSlots(e, o, a, 1)
				}
			}), a.index() != n.index() && punchgs.TweenLite.to(n, .2, {
				zIndex: 18,
				autoAlpha: 0,
				onComplete: function () {
					removeSlots(e, o, n, 1)
				}
			})), e.find(".active-revslide").removeClass("active-revslide"), e.find(".processing-revslide").removeClass("processing-revslide").addClass("active-revslide"), o.act = a.index(), o.c.attr("data-slideactive", e.find(".active-revslide").data("index")), "scroll" != o.parallax.type && "scroll+mouse" != o.parallax.type && "mouse+scroll" != o.parallax.type || (o.lastscrolltop = -999, _R.scrollHandling(o)), r.clear(), t.data("kbtl") != undefined && (t.data("kbtl").reverse(), t.data("kbtl").timeScale(25)), "on" == i.data("kenburns") && (i.data("kbtl") != undefined ? (i.data("kbtl").timeScale(1), i.data("kbtl").play()) : _R.startKenBurn(i, o)), a.find(".rs-background-video-layer").each(function (e) {
				if (_ISM && !o.fallbacks.allowHTML5AutoPlayOnAndroid) return !1;
				var i = jQuery(this);
				_R.resetVideo(i, o), punchgs.TweenLite.fromTo(i, 1, {
					autoAlpha: 0
				}, {
					autoAlpha: 1,
					ease: punchgs.Power3.easeInOut,
					delay: .2,
					onComplete: function () {
						_R.animcompleted && _R.animcompleted(i, o)
					}
				})
			}), n.find(".rs-background-video-layer").each(function (e) {
				if (_ISM) return !1;
				var i = jQuery(this);
				_R.stopVideo && (_R.resetVideo(i, o), _R.stopVideo(i, o)), punchgs.TweenLite.to(i, 1, {
					autoAlpha: 0,
					ease: punchgs.Power3.easeInOut,
					delay: .2
				})
			});
			var s = {};
			if (s.slideIndex = a.index() + 1, s.slideLIIndex = a.index(), s.slide = a, s.currentslide = a, s.prevslide = n, o.last_shown_slide = n.index(), e.trigger("revolution.slide.onchange", s), e.trigger("revolution.slide.onafterswap", s), o.startWithSlide !== undefined && "done" !== o.startWithSlide && "carousel" === o.sliderType) {
				for (var l = o.startWithSlide, d = 0; d <= o.li.length - 1; d++) jQuery(o.li[d]).data("originalindex") === o.startWithSlide && (l = d);
				0 !== l && _R.callingNewSlide(o.c, l), o.startWithSlide = "done"
			}
			o.duringslidechange = !1;
			var u = n.data("slide_on_focus_amount"),
				c = n.data("hideafterloop");
			0 != c && c <= u && o.c.revremoveslide(n.index());
			var p = -1 === o.nextSlide || o.nextSlide === undefined ? 0 : o.nextSlide;
			o.rowzones != undefined && (p = p > o.rowzones.length ? o.rowzones.length : p), o.rowzones != undefined && o.rowzones.length > 0 && o.rowzones[p] != undefined && p >= 0 && p <= o.rowzones.length && o.rowzones[p].length > 0 && _R.setSize(o)
		},
		removeAllListeners = function (e, i) {
			e.children().each(function () {
				try {
					jQuery(this).die("click")
				} catch (e) {}
				try {
					jQuery(this).die("mouseenter")
				} catch (e) {}
				try {
					jQuery(this).die("mouseleave")
				} catch (e) {}
				try {
					jQuery(this).unbind("hover")
				} catch (e) {}
			});
			try {
				e.die("click", "mouseenter", "mouseleave")
			} catch (e) {}
			clearInterval(i.cdint), e = null
		},
		countDown = function (e, i) {
			i.cd = 0, i.loop = 0, i.stopAfterLoops != undefined && i.stopAfterLoops > -1 ? i.looptogo = i.stopAfterLoops : i.looptogo = 9999999, i.stopAtSlide != undefined && i.stopAtSlide > -1 ? i.lastslidetoshow = i.stopAtSlide : i.lastslidetoshow = 999, i.stopLoop = "off", 0 == i.looptogo && (i.stopLoop = "on");
			var t = e.find(".tp-bannertimer");
			e.on("stoptimer", function () {
				var e = jQuery(this).find(".tp-bannertimer");
				e[0].tween.pause(), "on" == i.disableProgressBar && e.css({
					visibility: "hidden"
				}), i.sliderstatus = "paused", _R.unToggleState(i.slidertoggledby)
			}), e.on("starttimer", function () {
				i.forcepause_viatoggle || (1 != i.conthover && 1 != i.videoplaying && i.width > i.hideSliderAtLimit && 1 != i.tonpause && 1 != i.overnav && 1 != i.ssop && (1 === i.noloopanymore || i.viewPort.enable && !i.inviewport || (t.css({
					visibility: "visible"
				}), t[0].tween.resume(), i.sliderstatus = "playing")), "on" == i.disableProgressBar && t.css({
					visibility: "hidden"
				}), _R.toggleState(i.slidertoggledby))
			}), e.on("restarttimer", function () {
				if (!i.forcepause_viatoggle) {
					var e = jQuery(this).find(".tp-bannertimer");
					if (i.mouseoncontainer && "on" == i.navigation.onHoverStop && !_ISM) return !1;
					1 === i.noloopanymore || i.viewPort.enable && !i.inviewport || 1 == i.ssop || (e.css({
						visibility: "visible"
					}), e[0].tween.kill(), e[0].tween = punchgs.TweenLite.fromTo(e, i.delay / 1e3, {
						width: "0%"
					}, {
						force3D: "auto",
						width: "100%",
						ease: punchgs.Linear.easeNone,
						onComplete: a,
						delay: 1
					}), i.sliderstatus = "playing"), "on" == i.disableProgressBar && e.css({
						visibility: "hidden"
					}), _R.toggleState(i.slidertoggledby)
				}
			}), e.on("nulltimer", function () {
				t[0].tween.kill(), t[0].tween = punchgs.TweenLite.fromTo(t, i.delay / 1e3, {
					width: "0%"
				}, {
					force3D: "auto",
					width: "100%",
					ease: punchgs.Linear.easeNone,
					onComplete: a,
					delay: 1
				}), t[0].tween.pause(0), "on" == i.disableProgressBar && t.css({
					visibility: "hidden"
				}), i.sliderstatus = "paused"
			});
			var a = function () {
				0 == jQuery("body").find(e).length && (removeAllListeners(e, i), clearInterval(i.cdint)), e.trigger("revolution.slide.slideatend"), 1 == e.data("conthover-changed") && (i.conthover = e.data("conthover"), e.data("conthover-changed", 0)), _R.callingNewSlide(e, 1)
			};
			t[0].tween = punchgs.TweenLite.fromTo(t, i.delay / 1e3, {
				width: "0%"
			}, {
				force3D: "auto",
				width: "100%",
				ease: punchgs.Linear.easeNone,
				onComplete: a,
				delay: 1
			}), i.slideamount > 1 && (0 != i.stopAfterLoops || 1 != i.stopAtSlide) ? e.trigger("starttimer") : (i.noloopanymore = 1, e.trigger("nulltimer")), e.on("tp-mouseenter", function () {
				i.mouseoncontainer = !0, "on" != i.navigation.onHoverStop || _ISM || (e.trigger("stoptimer"), e.trigger("revolution.slide.onpause"))
			}), e.on("tp-mouseleft", function () {
				i.mouseoncontainer = !1, 1 != e.data("conthover") && "on" == i.navigation.onHoverStop && (1 == i.viewPort.enable && i.inviewport || 0 == i.viewPort.enable) && (e.trigger("revolution.slide.onresume"), e.trigger("starttimer"))
			})
		},
		vis = function () {
			var e, i, t = {
				hidden: "visibilitychange",
				webkitHidden: "webkitvisibilitychange",
				mozHidden: "mozvisibilitychange",
				msHidden: "msvisibilitychange"
			};
			for (e in t)
				if (e in document) {
					i = t[e];
					break
				} return function (t) {
				return t && document.addEventListener(i, t, {
					pasive: !0
				}), !document[e]
			}
		}(),
		restartOnFocus = function () {
			jQuery(".rev_redraw_on_blurfocus").each(function () {
				var e = jQuery(this)[0].opt;
				if (e == undefined || e.c == undefined || 0 === e.c.length) return !1;
				1 != e.windowfocused && (e.windowfocused = !0, punchgs.TweenLite.delayedCall(.3, function () {
					"on" == e.fallbacks.nextSlideOnWindowFocus && e.c.revnext(), e.c.revredraw(), "playing" == e.lastsliderstatus && e.c.revresume()
				}))
			})
		},
		lastStatBlur = function () {
			jQuery(".rev_redraw_on_blurfocus").each(function () {
				var e = jQuery(this)[0].opt;
				e.windowfocused = !1, e.lastsliderstatus = e.sliderstatus, e.c.revpause();
				var i = e.c.find(".active-revslide .slotholder"),
					t = e.c.find(".processing-revslide .slotholder");
				"on" == t.data("kenburns") && _R.stopKenBurn(t, e), "on" == i.data("kenburns") && _R.stopKenBurn(i, e)
			})
		},
		tabBlurringCheck = function () {
			var e = document.documentMode === undefined,
				i = window.chrome;
			1 !== jQuery("body").data("revslider_focus_blur_listener") && (jQuery("body").data("revslider_focus_blur_listener", 1), e && !i ? jQuery(window).on("focusin", function () {
				restartOnFocus()
			}).on("focusout", function () {
				lastStatBlur()
			}) : window.addEventListener ? (window.addEventListener("focus", function (e) {
				restartOnFocus()
			}, {
				capture: !1,
				passive: !0
			}), window.addEventListener("blur", function (e) {
				lastStatBlur()
			}, {
				capture: !1,
				passive: !0
			})) : (window.attachEvent("focus", function (e) {
				restartOnFocus()
			}), window.attachEvent("blur", function (e) {
				lastStatBlur()
			})))
		},
		getUrlVars = function (e) {
			for (var i, t = [], a = window.location.href.slice(window.location.href.indexOf(e) + 1).split("_"), n = 0; n < a.length; n++) a[n] = a[n].replace("%3D", "="), i = a[n].split("="), t.push(i[0]), t[i[0]] = i[1];
			return t
		}
}(jQuery);
jQuery(function (t) {
	if ("undefined" == typeof wc_add_to_cart_params) return !1;
	var a = function () {
		t(document.body).on("click", ".add_to_cart_button", this.onAddToCart).on("click", ".remove_from_cart_button", this.onRemoveFromCart).on("added_to_cart", this.updateButton).on("added_to_cart", this.updateCartPage).on("added_to_cart removed_from_cart", this.updateFragments)
	};
	a.prototype.onAddToCart = function (a) {
		var o = t(this);
		if (o.is(".ajax_add_to_cart")) {
			if (!o.attr("data-product_id")) return !0;
			a.preventDefault(), o.removeClass("added"), o.addClass("loading");
			var r = {};
			t.each(o.data(), function (t, a) {
				r[t] = a
			}), t(document.body).trigger("adding_to_cart", [o, r]), t.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "add_to_cart"), r, function (a) {
				a && (a.error && a.product_url ? window.location = a.product_url : "yes" !== wc_add_to_cart_params.cart_redirect_after_add ? t(document.body).trigger("added_to_cart", [a.fragments, a.cart_hash, o]) : window.location = wc_add_to_cart_params.cart_url)
			})
		}
	}, a.prototype.onRemoveFromCart = function (a) {
		var o = t(this),
			r = o.closest(".woocommerce-mini-cart-item");
		a.preventDefault(), r.block({
			message: null,
			overlayCSS: {
				opacity: .6
			}
		}), t.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%", "remove_from_cart"), {
			cart_item_key: o.data("cart_item_key")
		}, function (a) {
			a && a.fragments ? t(document.body).trigger("removed_from_cart", [a.fragments, a.cart_hash]) : window.location = o.attr("href")
		}).fail(function () {
			window.location = o.attr("href")
		})
	}, a.prototype.updateButton = function (a, o, r, e) {
		(e = void 0 !== e && e) && (e.removeClass("loading"), e.addClass("added"), wc_add_to_cart_params.is_cart || 0 !== e.parent().find(".added_to_cart").length || e.after(' <a href="' + wc_add_to_cart_params.cart_url + '" class="added_to_cart wc-forward" title="' + wc_add_to_cart_params.i18n_view_cart + '">' + wc_add_to_cart_params.i18n_view_cart + "</a>"), t(document.body).trigger("wc_cart_button_updated", [e]))
	}, a.prototype.updateCartPage = function () {
		var a = window.location.toString().replace("add-to-cart", "added-to-cart");
		t(".shop_table.cart").load(a + " .shop_table.cart:eq(0) > *", function () {
			t(".shop_table.cart").stop(!0).css("opacity", "1").unblock(), t(document.body).trigger("cart_page_refreshed")
		}), t(".cart_totals").load(a + " .cart_totals:eq(0) > *", function () {
			t(".cart_totals").stop(!0).css("opacity", "1").unblock(), t(document.body).trigger("cart_totals_refreshed")
		})
	}, a.prototype.updateFragments = function (a, o) {
		o && (t.each(o, function (a) {
			t(a).addClass("updating").fadeTo("400", "0.6").block({
				message: null,
				overlayCSS: {
					opacity: .6
				}
			})
		}), t.each(o, function (a, o) {
			t(a).replaceWith(o), t(a).stop(!0).css("opacity", "1").unblock()
		}), t(document.body).trigger("wc_fragments_loaded"))
	}, new a
});
/*!
 * WordPress Social Login
 *
 * http://miled.github.io/wordpress-social-login/ | https://github.com/miled/wordpress-social-login
 *  (c) 2011-2014 Mohamed Mrassi and contributors | http://wordpress.org/plugins/wordpress-social-login/
 */
(function ($) {
	$(function () {
		$(document).on('click', 'a.wp-social-login-provider', function () {
			popupurl = $('#wsl_popup_base_url').val();
			provider = $(this).attr("data-provider");
			var width = 1000;
			var height = 600;
			var top = (screen.height / 2) - (height / 2) - 50;
			var left = (screen.width / 2) - (width / 2);
			window.open(popupurl + 'provider=' + provider, 'hybridauth_social_sing_on', 'location=1,status=0,scrollbars=0,height=' + height + ',width=' + width + ',top=' + top + ',left=' + left);
		});
	});
})(jQuery);
window.wsl_wordpress_social_login = function (config) {
	jQuery('#loginform').unbind('submit.simplemodal-login');
	var form_id = '#loginform';
	if (!jQuery('#loginform').length) {
		if (jQuery('#registerform').length) {
			form_id = '#registerform';
		} else {
			var login_uri = jQuery('#wsl_login_form_uri').val();
			jQuery('body').append('<form id="loginform" method="post" action="' + login_uri + '"></form>');
			jQuery('#loginform').append('<input type="hidden" id="redirect_to" name="redirect_to" value="' + window.location.href + '">');
		}
	}
	jQuery.each(config, function (key, value) {
		jQuery('#' + key).remove();
		jQuery(form_id).append('<input type="hidden" id="' + key + '" name="' + key + '" value="' + value + '">');
	});
	if (jQuery('#simplemodal-login-form').length) {
		var current_url = window.location.href;
		jQuery('#redirect_to').remove();
		jQuery(form_id).append('<input type="hidden" id="redirect_to" name="redirect_to" value="' + current_url + '">');
	}
	jQuery(form_id).submit();
};
window.jQuery(document).ready(function ($) {
	$('body').on('adding_to_cart', function (event, $button, data) {
		$button && $button.hasClass('vc_gitem-link') && $button.addClass('vc-gitem-add-to-cart-loading-btn').parents('.vc_grid-item-mini').addClass('vc-woocommerce-add-to-cart-loading').append($('<div class="vc_wc-load-add-to-loader-wrapper"><div class="vc_wc-load-add-to-loader"></div></div>'));
	}).on('added_to_cart', function (event, fragments, cart_hash, $button) {
		if ('undefined' === typeof ($button)) {
			$button = $('.vc-gitem-add-to-cart-loading-btn');
		}
		$button && $button.hasClass('vc_gitem-link') && $button.removeClass('vc-gitem-add-to-cart-loading-btn').parents('.vc_grid-item-mini').removeClass('vc-woocommerce-add-to-cart-loading').find('.vc_wc-load-add-to-loader-wrapper').remove();
	});
});
(function ($) {
	'use strict';
	if (typeof wpcf7 === 'undefined' || wpcf7 === null) {
		return;
	}
	wpcf7 = $.extend({
		cached: 0,
		inputs: []
	}, wpcf7);
	$(function () {
		wpcf7.supportHtml5 = (function () {
			var features = {};
			var input = document.createElement('input');
			features.placeholder = 'placeholder' in input;
			var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
			$.each(inputTypes, function (index, value) {
				input.setAttribute('type', value);
				features[value] = input.type !== 'text';
			});
			return features;
		})();
		$('div.wpcf7 > form').each(function () {
			var $form = $(this);
			wpcf7.initForm($form);
			if (wpcf7.cached) {
				wpcf7.refill($form);
			}
		});
	});
	wpcf7.getId = function (form) {
		return parseInt($('input[name="_wpcf7"]', form).val(), 10);
	};
	wpcf7.initForm = function (form) {
		var $form = $(form);
		$form.submit(function (event) {
			if (typeof window.FormData !== 'function') {
				return;
			}
			wpcf7.submit($form);
			event.preventDefault();
		});
		$('.wpcf7-submit', $form).after('<span class="ajax-loader"></span>');
		wpcf7.toggleSubmit($form);
		$form.on('click', '.wpcf7-acceptance', function () {
			wpcf7.toggleSubmit($form);
		});
		$('.wpcf7-exclusive-checkbox', $form).on('click', 'input:checkbox', function () {
			var name = $(this).attr('name');
			$form.find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
		});
		$('.wpcf7-list-item.has-free-text', $form).each(function () {
			var $freetext = $(':input.wpcf7-free-text', this);
			var $wrap = $(this).closest('.wpcf7-form-control');
			if ($(':checkbox, :radio', this).is(':checked')) {
				$freetext.prop('disabled', false);
			} else {
				$freetext.prop('disabled', true);
			}
			$wrap.on('change', ':checkbox, :radio', function () {
				var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
				if ($cb.is(':checked')) {
					$freetext.prop('disabled', false).focus();
				} else {
					$freetext.prop('disabled', true);
				}
			});
		});
		if (!wpcf7.supportHtml5.placeholder) {
			$('[placeholder]', $form).each(function () {
				$(this).val($(this).attr('placeholder'));
				$(this).addClass('placeheld');
				$(this).focus(function () {
					if ($(this).hasClass('placeheld')) {
						$(this).val('').removeClass('placeheld');
					}
				});
				$(this).blur(function () {
					if ('' === $(this).val()) {
						$(this).val($(this).attr('placeholder'));
						$(this).addClass('placeheld');
					}
				});
			});
		}
		if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
			$form.find('input.wpcf7-date[type="date"]').each(function () {
				$(this).datepicker({
					dateFormat: 'yy-mm-dd',
					minDate: new Date($(this).attr('min')),
					maxDate: new Date($(this).attr('max'))
				});
			});
		}
		if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
			$form.find('input.wpcf7-number[type="number"]').each(function () {
				$(this).spinner({
					min: $(this).attr('min'),
					max: $(this).attr('max'),
					step: $(this).attr('step')
				});
			});
		}
		$('.wpcf7-character-count', $form).each(function () {
			var $count = $(this);
			var name = $count.attr('data-target-name');
			var down = $count.hasClass('down');
			var starting = parseInt($count.attr('data-starting-value'), 10);
			var maximum = parseInt($count.attr('data-maximum-value'), 10);
			var minimum = parseInt($count.attr('data-minimum-value'), 10);
			var updateCount = function (target) {
				var $target = $(target);
				var length = $target.val().length;
				var count = down ? starting - length : length;
				$count.attr('data-current-value', count);
				$count.text(count);
				if (maximum && maximum < length) {
					$count.addClass('too-long');
				} else {
					$count.removeClass('too-long');
				}
				if (minimum && length < minimum) {
					$count.addClass('too-short');
				} else {
					$count.removeClass('too-short');
				}
			};
			$(':input[name="' + name + '"]', $form).each(function () {
				updateCount(this);
				$(this).keyup(function () {
					updateCount(this);
				});
			});
		});
		$form.on('change', '.wpcf7-validates-as-url', function () {
			var val = $.trim($(this).val());
			if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== val.indexOf('.')) {
				val = val.replace(/^\/+/, '');
				val = 'http://' + val;
			}
			$(this).val(val);
		});
	};
	wpcf7.submit = function (form) {
		if (typeof window.FormData !== 'function') {
			return;
		}
		var $form = $(form);
		$('.ajax-loader', $form).addClass('is-active');
		$('[placeholder].placeheld', $form).each(function (i, n) {
			$(n).val('');
		});
		wpcf7.clearResponse($form);
		var formData = new FormData($form.get(0));
		var detail = {
			id: $form.closest('div.wpcf7').attr('id'),
			status: 'init',
			inputs: [],
			formData: formData
		};
		$.each($form.serializeArray(), function (i, field) {
			if ('_wpcf7' == field.name) {
				detail.contactFormId = field.value;
			} else if ('_wpcf7_version' == field.name) {
				detail.pluginVersion = field.value;
			} else if ('_wpcf7_locale' == field.name) {
				detail.contactFormLocale = field.value;
			} else if ('_wpcf7_unit_tag' == field.name) {
				detail.unitTag = field.value;
			} else if ('_wpcf7_container_post' == field.name) {
				detail.containerPostId = field.value;
			} else if (field.name.match(/^_wpcf7_\w+_free_text_/)) {
				var owner = field.name.replace(/^_wpcf7_\w+_free_text_/, '');
				detail.inputs.push({
					name: owner + '-free-text',
					value: field.value
				});
			} else if (field.name.match(/^_/)) {} else {
				detail.inputs.push(field);
			}
		});
		wpcf7.triggerEvent($form.closest('div.wpcf7'), 'beforesubmit', detail);
		var ajaxSuccess = function (data, status, xhr, $form) {
			detail.id = $(data.into).attr('id');
			detail.status = data.status;
			detail.apiResponse = data;
			var $message = $('.wpcf7-response-output', $form);
			switch (data.status) {
				case 'validation_failed':
					$.each(data.invalidFields, function (i, n) {
						$(n.into, $form).each(function () {
							wpcf7.notValidTip(this, n.message);
							$('.wpcf7-form-control', this).addClass('wpcf7-not-valid');
							$('[aria-invalid]', this).attr('aria-invalid', 'true');
						});
					});
					$message.addClass('wpcf7-validation-errors');
					$form.addClass('invalid');
					wpcf7.triggerEvent(data.into, 'invalid', detail);
					break;
				case 'acceptance_missing':
					$message.addClass('wpcf7-acceptance-missing');
					$form.addClass('unaccepted');
					wpcf7.triggerEvent(data.into, 'unaccepted', detail);
					break;
				case 'spam':
					$message.addClass('wpcf7-spam-blocked');
					$form.addClass('spam');
					$('[name="g-recaptcha-response"]', $form).each(function () {
						if ('' === $(this).val()) {
							var $recaptcha = $(this).closest('.wpcf7-form-control-wrap');
							wpcf7.notValidTip($recaptcha, wpcf7.recaptcha.messages.empty);
						}
					});
					wpcf7.triggerEvent(data.into, 'spam', detail);
					break;
				case 'aborted':
					$message.addClass('wpcf7-aborted');
					$form.addClass('aborted');
					wpcf7.triggerEvent(data.into, 'aborted', detail);
					break;
				case 'mail_sent':
					$message.addClass('wpcf7-mail-sent-ok');
					$form.addClass('sent');
					wpcf7.triggerEvent(data.into, 'mailsent', detail);
					break;
				case 'mail_failed':
					$message.addClass('wpcf7-mail-sent-ng');
					$form.addClass('failed');
					wpcf7.triggerEvent(data.into, 'mailfailed', detail);
					break;
				default:
					var customStatusClass = 'custom-' +
						data.status.replace(/[^0-9a-z]+/i, '-');
					$message.addClass('wpcf7-' + customStatusClass);
					$form.addClass(customStatusClass);
			}
			wpcf7.refill($form, data);
			wpcf7.triggerEvent(data.into, 'submit', detail);
			if ('mail_sent' == data.status) {
				$form.each(function () {
					this.reset();
				});
				wpcf7.toggleSubmit($form);
			}
			$form.find('[placeholder].placeheld').each(function (i, n) {
				$(n).val($(n).attr('placeholder'));
			});
			$message.html('').append(data.message).slideDown('fast');
			$message.attr('role', 'alert');
			$('.screen-reader-response', $form.closest('.wpcf7')).each(function () {
				var $response = $(this);
				$response.html('').attr('role', '').append(data.message);
				if (data.invalidFields) {
					var $invalids = $('<ul></ul>');
					$.each(data.invalidFields, function (i, n) {
						if (n.idref) {
							var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
						} else {
							var $li = $('<li></li>').append(n.message);
						}
						$invalids.append($li);
					});
					$response.append($invalids);
				}
				$response.attr('role', 'alert').focus();
			});
		};
		$.ajax({
			type: 'POST',
			url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/feedback'),
			data: formData,
			dataType: 'json',
			processData: false,
			contentType: false
		}).done(function (data, status, xhr) {
			ajaxSuccess(data, status, xhr, $form);
			$('.ajax-loader', $form).removeClass('is-active');
		}).fail(function (xhr, status, error) {
			var $e = $('<div class="ajax-error"></div>').text(error.message);
			$form.after($e);
		});
	};
	wpcf7.triggerEvent = function (target, name, detail) {
		var $target = $(target);
		var event = new CustomEvent('wpcf7' + name, {
			bubbles: true,
			detail: detail
		});
		$target.get(0).dispatchEvent(event);
		$target.trigger('wpcf7:' + name, detail);
		$target.trigger(name + '.wpcf7', detail);
	};
	wpcf7.toggleSubmit = function (form, state) {
		var $form = $(form);
		var $submit = $('input:submit', $form);
		if (typeof state !== 'undefined') {
			$submit.prop('disabled', !state);
			return;
		}
		if ($form.hasClass('wpcf7-acceptance-as-validation')) {
			return;
		}
		$submit.prop('disabled', false);
		$('.wpcf7-acceptance', $form).each(function () {
			var $span = $(this);
			var $input = $('input:checkbox', $span);
			if (!$span.hasClass('optional')) {
				if ($span.hasClass('invert') && $input.is(':checked') || !$span.hasClass('invert') && !$input.is(':checked')) {
					$submit.prop('disabled', true);
					return false;
				}
			}
		});
	};
	wpcf7.notValidTip = function (target, message) {
		var $target = $(target);
		$('.wpcf7-not-valid-tip', $target).remove();
		$('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(message).appendTo($target);
		if ($target.is('.use-floating-validation-tip *')) {
			var fadeOut = function (target) {
				$(target).not(':hidden').animate({
					opacity: 0
				}, 'fast', function () {
					$(this).css({
						'z-index': -100
					});
				});
			};
			$target.on('mouseover', '.wpcf7-not-valid-tip', function () {
				fadeOut(this);
			});
			$target.on('focus', ':input', function () {
				fadeOut($('.wpcf7-not-valid-tip', $target));
			});
		}
	};
	wpcf7.refill = function (form, data) {
		var $form = $(form);
		var refillCaptcha = function ($form, items) {
			$.each(items, function (i, n) {
				$form.find(':input[name="' + i + '"]').val('');
				$form.find('img.wpcf7-captcha-' + i).attr('src', n);
				var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
				$form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
			});
		};
		var refillQuiz = function ($form, items) {
			$.each(items, function (i, n) {
				$form.find(':input[name="' + i + '"]').val('');
				$form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
				$form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
			});
		};
		if (typeof data === 'undefined') {
			$.ajax({
				type: 'GET',
				url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/refill'),
				beforeSend: function (xhr) {
					var nonce = $form.find(':input[name="_wpnonce"]').val();
					if (nonce) {
						xhr.setRequestHeader('X-WP-Nonce', nonce);
					}
				},
				dataType: 'json'
			}).done(function (data, status, xhr) {
				if (data.captcha) {
					refillCaptcha($form, data.captcha);
				}
				if (data.quiz) {
					refillQuiz($form, data.quiz);
				}
			});
		} else {
			if (data.captcha) {
				refillCaptcha($form, data.captcha);
			}
			if (data.quiz) {
				refillQuiz($form, data.quiz);
			}
		}
	};
	wpcf7.clearResponse = function (form) {
		var $form = $(form);
		$form.removeClass('invalid spam sent failed');
		$form.siblings('.screen-reader-response').html('').attr('role', '');
		$('.wpcf7-not-valid-tip', $form).remove();
		$('[aria-invalid]', $form).attr('aria-invalid', 'false');
		$('.wpcf7-form-control', $form).removeClass('wpcf7-not-valid');
		$('.wpcf7-response-output', $form).hide().empty().removeAttr('role').removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked');
	};
	wpcf7.apiSettings.getRoute = function (path) {
		var url = wpcf7.apiSettings.root;
		url = url.replace(wpcf7.apiSettings.namespace, wpcf7.apiSettings.namespace + path);
		return url;
	};
})(jQuery);
(function () {
	if (typeof window.CustomEvent === "function") return false;

	function CustomEvent(event, params) {
		params = params || {
			bubbles: false,
			cancelable: false,
			detail: undefined
		};
		var evt = document.createEvent('CustomEvent');
		evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
		return evt;
	}
	CustomEvent.prototype = window.Event.prototype;
	window.CustomEvent = CustomEvent;
})();
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
! function () {
	"use strict";

	function e(e) {
		function t(t, n) {
			var s, h, k = t == window,
				y = n && n.message !== undefined ? n.message : undefined;
			if (!(n = e.extend({}, e.blockUI.defaults, n || {})).ignoreIfBlocked || !e(t).data("blockUI.isBlocked")) {
				if (n.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, n.overlayCSS || {}), s = e.extend({}, e.blockUI.defaults.css, n.css || {}), n.onOverlayClick && (n.overlayCSS.cursor = "pointer"), h = e.extend({}, e.blockUI.defaults.themedCSS, n.themedCSS || {}), y = y === undefined ? n.message : y, k && p && o(window, {
						fadeOut: 0
					}), y && "string" != typeof y && (y.parentNode || y.jquery)) {
					var m = y.jquery ? y[0] : y,
						g = {};
					e(t).data("blockUI.history", g), g.el = m, g.parent = m.parentNode, g.display = m.style.display, g.position = m.style.position, g.parent && g.parent.removeChild(m)
				}
				e(t).data("blockUI.onUnblock", n.onUnblock);
				var v, I, w, U, x = n.baseZ;
				v = e(r || n.forceIframe ? '<iframe class="blockUI" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + n.iframeSrc + '"></iframe>' : '<div class="blockUI" style="display:none"></div>'), I = e(n.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + x++ + ';display:none"></div>' : '<div class="blockUI blockOverlay" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), n.theme && k ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:fixed">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : n.theme ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:absolute">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : U = k ? '<div class="blockUI ' + n.blockMsgClass + ' blockPage" style="z-index:' + (x + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + n.blockMsgClass + ' blockElement" style="z-index:' + (x + 10) + ';display:none;position:absolute"></div>', w = e(U), y && (n.theme ? (w.css(h), w.addClass("ui-widget-content")) : w.css(s)), n.theme || I.css(n.overlayCSS), I.css("position", k ? "fixed" : "absolute"), (r || n.forceIframe) && v.css("opacity", 0);
				var C = [v, I, w],
					S = e(k ? "body" : t);
				e.each(C, function () {
					this.appendTo(S)
				}), n.theme && n.draggable && e.fn.draggable && w.draggable({
					handle: ".ui-dialog-titlebar",
					cancel: "li"
				});
				var O = f && (!e.support.boxModel || e("object,embed", k ? null : t).length > 0);
				if (u || O) {
					if (k && n.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !k) var E = a(t, "borderTopWidth"),
						T = a(t, "borderLeftWidth"),
						M = E ? "(0 - " + E + ")" : 0,
						B = T ? "(0 - " + T + ")" : 0;
					e.each(C, function (e, t) {
						var o = t[0].style;
						if (o.position = "absolute", e < 2) k ? o.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + n.quirksmodeOffsetHack + ') + "px"') : o.setExpression("height", 'this.parentNode.offsetHeight + "px"'), k ? o.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : o.setExpression("width", 'this.parentNode.offsetWidth + "px"'), B && o.setExpression("left", B), M && o.setExpression("top", M);
						else if (n.centerY) k && o.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), o.marginTop = 0;
						else if (!n.centerY && k) {
							var i = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + (n.css && n.css.top ? parseInt(n.css.top, 10) : 0) + ') + "px"';
							o.setExpression("top", i)
						}
					})
				}
				if (y && (n.theme ? w.find(".ui-widget-content").append(y) : w.append(y), (y.jquery || y.nodeType) && e(y).show()), (r || n.forceIframe) && n.showOverlay && v.show(), n.fadeIn) {
					var j = n.onBlock ? n.onBlock : c,
						H = n.showOverlay && !y ? j : c,
						z = y ? j : c;
					n.showOverlay && I._fadeIn(n.fadeIn, H), y && w._fadeIn(n.fadeIn, z)
				} else n.showOverlay && I.show(), y && w.show(), n.onBlock && n.onBlock.bind(w)();
				if (i(1, t, n), k ? (p = w[0], b = e(n.focusableElements, p), n.focusInput && setTimeout(l, 20)) : d(w[0], n.centerX, n.centerY), n.timeout) {
					var W = setTimeout(function () {
						k ? e.unblockUI(n) : e(t).unblock(n)
					}, n.timeout);
					e(t).data("blockUI.timeout", W)
				}
			}
		}

		function o(t, o) {
			var s, l = t == window,
				d = e(t),
				a = d.data("blockUI.history"),
				c = d.data("blockUI.timeout");
			c && (clearTimeout(c), d.removeData("blockUI.timeout")), o = e.extend({}, e.blockUI.defaults, o || {}), i(0, t, o), null === o.onUnblock && (o.onUnblock = d.data("blockUI.onUnblock"), d.removeData("blockUI.onUnblock"));
			var r;
			r = l ? e(document.body).children().filter(".blockUI").add("body > .blockUI") : d.find(">.blockUI"), o.cursorReset && (r.length > 1 && (r[1].style.cursor = o.cursorReset), r.length > 2 && (r[2].style.cursor = o.cursorReset)), l && (p = b = null), o.fadeOut ? (s = r.length, r.stop().fadeOut(o.fadeOut, function () {
				0 == --s && n(r, a, o, t)
			})) : n(r, a, o, t)
		}

		function n(t, o, n, i) {
			var s = e(i);
			if (!s.data("blockUI.isBlocked")) {
				t.each(function (e, t) {
					this.parentNode && this.parentNode.removeChild(this)
				}), o && o.el && (o.el.style.display = o.display, o.el.style.position = o.position, o.el.style.cursor = "default", o.parent && o.parent.appendChild(o.el), s.removeData("blockUI.history")), s.data("blockUI.static") && s.css("position", "static"), "function" == typeof n.onUnblock && n.onUnblock(i, n);
				var l = e(document.body),
					d = l.width(),
					a = l[0].style.width;
				l.width(d - 1).width(d), l[0].style.width = a
			}
		}

		function i(t, o, n) {
			var i = o == window,
				l = e(o);
			if ((t || (!i || p) && (i || l.data("blockUI.isBlocked"))) && (l.data("blockUI.isBlocked", t), i && n.bindEvents && (!t || n.showOverlay))) {
				var d = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
				t ? e(document).bind(d, n, s) : e(document).unbind(d, s)
			}
		}

		function s(t) {
			if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && p && t.data.constrainTabKey) {
				var o = b,
					n = !t.shiftKey && t.target === o[o.length - 1],
					i = t.shiftKey && t.target === o[0];
				if (n || i) return setTimeout(function () {
					l(i)
				}, 10), !1
			}
			var s = t.data,
				d = e(t.target);
			return d.hasClass("blockOverlay") && s.onOverlayClick && s.onOverlayClick(t), d.parents("div." + s.blockMsgClass).length > 0 || 0 === d.parents().children().filter("div.blockUI").length
		}

		function l(e) {
			if (b) {
				var t = b[!0 === e ? b.length - 1 : 0];
				t && t.focus()
			}
		}

		function d(e, t, o) {
			var n = e.parentNode,
				i = e.style,
				s = (n.offsetWidth - e.offsetWidth) / 2 - a(n, "borderLeftWidth"),
				l = (n.offsetHeight - e.offsetHeight) / 2 - a(n, "borderTopWidth");
			t && (i.left = s > 0 ? s + "px" : "0"), o && (i.top = l > 0 ? l + "px" : "0")
		}

		function a(t, o) {
			return parseInt(e.css(t, o), 10) || 0
		}
		e.fn._fadeIn = e.fn.fadeIn;
		var c = e.noop || function () {},
			r = /MSIE/.test(navigator.userAgent),
			u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
			f = (document.documentMode, e.isFunction(document.createElement("div").style.setExpression));
		e.blockUI = function (e) {
			t(window, e)
		}, e.unblockUI = function (e) {
			o(window, e)
		}, e.growlUI = function (t, o, n, i) {
			var s = e('<div class="growlUI"></div>');
			t && s.append("<h1>" + t + "</h1>"), o && s.append("<h2>" + o + "</h2>"), n === undefined && (n = 3e3);
			var l = function (t) {
				t = t || {}, e.blockUI({
					message: s,
					fadeIn: "undefined" != typeof t.fadeIn ? t.fadeIn : 700,
					fadeOut: "undefined" != typeof t.fadeOut ? t.fadeOut : 1e3,
					timeout: "undefined" != typeof t.timeout ? t.timeout : n,
					centerY: !1,
					showOverlay: !1,
					onUnblock: i,
					css: e.blockUI.defaults.growlCSS
				})
			};
			l();
			s.css("opacity");
			s.mouseover(function () {
				l({
					fadeIn: 0,
					timeout: 3e4
				});
				var t = e(".blockMsg");
				t.stop(), t.fadeTo(300, 1)
			}).mouseout(function () {
				e(".blockMsg").fadeOut(1e3)
			})
		}, e.fn.block = function (o) {
			if (this[0] === window) return e.blockUI(o), this;
			var n = e.extend({}, e.blockUI.defaults, o || {});
			return this.each(function () {
				var t = e(this);
				n.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({
					fadeOut: 0
				})
			}), this.each(function () {
				"static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)), this.style.zoom = 1, t(this, o)
			})
		}, e.fn.unblock = function (t) {
			return this[0] === window ? (e.unblockUI(t), this) : this.each(function () {
				o(this, t)
			})
		}, e.blockUI.version = 2.7, e.blockUI.defaults = {
			message: "<h1>Please wait...</h1>",
			title: null,
			draggable: !0,
			theme: !1,
			css: {
				padding: 0,
				margin: 0,
				width: "30%",
				top: "40%",
				left: "35%",
				textAlign: "center",
				color: "#000",
				border: "3px solid #aaa",
				backgroundColor: "#fff",
				cursor: "wait"
			},
			themedCSS: {
				width: "30%",
				top: "40%",
				left: "35%"
			},
			overlayCSS: {
				backgroundColor: "#000",
				opacity: .6,
				cursor: "wait"
			},
			cursorReset: "default",
			growlCSS: {
				width: "350px",
				top: "10px",
				left: "",
				right: "10px",
				border: "none",
				padding: "5px",
				opacity: .6,
				cursor: "default",
				color: "#fff",
				backgroundColor: "#000",
				"-webkit-border-radius": "10px",
				"-moz-border-radius": "10px",
				"border-radius": "10px"
			},
			iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
			forceIframe: !1,
			baseZ: 1e3,
			centerX: !0,
			centerY: !0,
			allowBodyStretch: !0,
			bindEvents: !0,
			constrainTabKey: !0,
			fadeIn: 200,
			fadeOut: 400,
			timeout: 0,
			showOverlay: !0,
			focusInput: !0,
			focusableElements: ":input:enabled:visible",
			onBlock: null,
			onUnblock: null,
			onOverlayClick: null,
			quirksmodeOffsetHack: 4,
			blockMsgClass: "blockMsg",
			ignoreIfBlocked: !1
		};
		var p = null,
			b = []
	}
	"function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
}();
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
! function (e) {
	var n = !1;
	if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
		var o = window.Cookies,
			t = window.Cookies = e();
		t.noConflict = function () {
			return window.Cookies = o, t
		}
	}
}(function () {
	function e() {
		for (var e = 0, n = {}; e < arguments.length; e++) {
			var o = arguments[e];
			for (var t in o) n[t] = o[t]
		}
		return n
	}

	function n(o) {
		function t(n, r, i) {
			var c;
			if ("undefined" != typeof document) {
				if (arguments.length > 1) {
					if ("number" == typeof (i = e({
							path: "/"
						}, t.defaults, i)).expires) {
						var a = new Date;
						a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
					}
					i.expires = i.expires ? i.expires.toUTCString() : "";
					try {
						c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c)
					} catch (m) {}
					r = o.write ? o.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = (n = (n = encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
					var f = "";
					for (var s in i) i[s] && (f += "; " + s, !0 !== i[s] && (f += "=" + i[s]));
					return document.cookie = n + "=" + r + f
				}
				n || (c = {});
				for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < p.length; u++) {
					var l = p[u].split("="),
						C = l.slice(1).join("=");
					'"' === C.charAt(0) && (C = C.slice(1, -1));
					try {
						var g = l[0].replace(d, decodeURIComponent);
						if (C = o.read ? o.read(C, g) : o(C, g) || C.replace(d, decodeURIComponent), this.json) try {
							C = JSON.parse(C)
						} catch (m) {}
						if (n === g) {
							c = C;
							break
						}
						n || (c[g] = C)
					} catch (m) {}
				}
				return c
			}
		}
		return t.set = t, t.get = function (e) {
			return t.call(t, e)
		}, t.getJSON = function () {
			return t.apply({
				json: !0
			}, [].slice.call(arguments))
		}, t.defaults = {}, t.remove = function (n, o) {
			t(n, "", e(o, {
				expires: -1
			}))
		}, t.withConverter = n, t
	}
	return n(function () {})
});
jQuery(function (o) {
	o(".woocommerce-ordering").on("change", "select.orderby", function () {
		o(this).closest("form").submit()
	}), o("input.qty:not(.product-quantity input.qty)").each(function () {
		var e = parseFloat(o(this).attr("min"));
		e >= 0 && parseFloat(o(this).val()) < e && o(this).val(e)
	}), o(".woocommerce-store-notice__dismiss-link").click(function () {
		Cookies.set("store_notice", "hidden", {
			path: "/"
		}), o(".woocommerce-store-notice").hide()
	}), "hidden" === Cookies.get("store_notice") ? o(".woocommerce-store-notice").hide() : o(".woocommerce-store-notice").show(), o(document.body).on("click", function () {
		o(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden", !0).slideUp(250)
	}), o(".woocommerce-input-wrapper").on("click", function (o) {
		o.stopPropagation()
	}), o(".woocommerce-input-wrapper :input").on("keydown", function (e) {
		var i = o(this).parent().find("span.description");
		if (27 === e.which && i.length && i.is(":visible")) return i.prop("aria-hidden", !0).slideUp(250), e.preventDefault(), !1
	}).on("click focus", function () {
		var e = o(this).parent(),
			i = e.find("span.description");
		e.addClass("currentTarget"), o(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden", !0).slideUp(250), i.length && i.is(":hidden") && i.prop("aria-hidden", !1).slideDown(250), e.removeClass("currentTarget")
	}), o.scroll_to_notices = function (e) {
		var i = "scrollBehavior" in document.documentElement.style;
		e.length && (i ? e[0].scrollIntoView({
			behavior: "smooth",
			block: "center"
		}) : o("html, body").animate({
			scrollTop: e.offset().top - 100
		}, 1e3))
	}
});
jQuery(function (e) {
	function t() {
		o && sessionStorage.setItem("wc_cart_created", (new Date).getTime())
	}

	function n(e) {
		o && (localStorage.setItem(a, e), sessionStorage.setItem(a, e))
	}

	function r() {
		e.ajax(s)
	}
	if ("undefined" == typeof wc_cart_fragments_params) return !1;
	var o = !0,
		a = wc_cart_fragments_params.cart_hash_key;
	try {
		o = "sessionStorage" in window && null !== window.sessionStorage, window.sessionStorage.setItem("wc", "test"), window.sessionStorage.removeItem("wc"), window.localStorage.setItem("wc", "test"), window.localStorage.removeItem("wc")
	} catch (w) {
		o = !1
	}
	var s = {
		url: wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%", "get_refreshed_fragments"),
		type: "POST",
		success: function (r) {
			r && r.fragments && (e.each(r.fragments, function (t, n) {
				e(t).replaceWith(n)
			}), o && (sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(r.fragments)), n(r.cart_hash), r.cart_hash && t()), e(document.body).trigger("wc_fragments_refreshed"))
		}
	};
	if (o) {
		var i = null;
		e(document.body).on("wc_fragment_refresh updated_wc_div", function () {
			r()
		}), e(document.body).on("added_to_cart removed_from_cart", function (e, r, o) {
			var s = sessionStorage.getItem(a);
			null !== s && s !== undefined && "" !== s || t(), sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(r)), n(o)
		}), e(document.body).on("wc_fragments_refreshed", function () {
			clearTimeout(i), i = setTimeout(r, 864e5)
		}), e(window).on("storage onstorage", function (e) {
			a === e.originalEvent.key && localStorage.getItem(a) !== sessionStorage.getItem(a) && r()
		}), e(window).on("pageshow", function (t) {
			t.originalEvent.persisted && (e(".widget_shopping_cart_content").empty(), e(document.body).trigger("wc_fragment_refresh"))
		});
		try {
			var c = e.parseJSON(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),
				_ = sessionStorage.getItem(a),
				g = Cookies.get("woocommerce_cart_hash"),
				m = sessionStorage.getItem("wc_cart_created");
			if (null !== _ && _ !== undefined && "" !== _ || (_ = ""), null !== g && g !== undefined && "" !== g || (g = ""), _ && (null === m || m === undefined || "" === m)) throw "No cart_created";
			if (m) {
				var d = 1 * m + 864e5,
					f = (new Date).getTime();
				if (d < f) throw "Fragment expired";
				i = setTimeout(r, d - f)
			}
			if (!c || !c["div.widget_shopping_cart_content"] || _ !== g) throw "No fragment";
			e.each(c, function (t, n) {
				e(t).replaceWith(n)
			}), e(document.body).trigger("wc_fragments_loaded")
		} catch (w) {
			r()
		}
	} else r();
	Cookies.get("woocommerce_items_in_cart") > 0 ? e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show() : e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(), e(document.body).on("adding_to_cart", function () {
		e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()
	})
});
jQuery(document).ready(function (o) {
	function e(o, e) {
		o = escape(o), e = escape(e);
		var t = document.location.search,
			a = o + "=" + e,
			r = new RegExp("(&|\\?)" + o + "=[^&]*");
		return t = t.replace(r, "$1" + a), RegExp.$1 || (t += (t.length > 0 ? "&" : "?") + a), t
	}
	o(document).on("click", ".product a.compare:not(.added)", function (e) {
		e.preventDefault();
		var t = o(this),
			a = {
				action: yith_woocompare.actionadd,
				id: t.data("product_id"),
				context: "frontend"
			},
			r = o(".yith-woocompare-widget ul.products-list");
		void 0 !== o.fn.block && (t.block({
			message: null,
			overlayCSS: {
				background: "#fff url(" + yith_woocompare.loader + ") no-repeat center",
				backgroundSize: "16px 16px",
				opacity: .6
			}
		}), r.block({
			message: null,
			overlayCSS: {
				background: "#fff url(" + yith_woocompare.loader + ") no-repeat center",
				backgroundSize: "16px 16px",
				opacity: .6
			}
		})), o.ajax({
			type: "post",
			url: yith_woocompare.ajaxurl.toString().replace("%%endpoint%%", yith_woocompare.actionadd),
			data: a,
			dataType: "json",
			success: function (e) {
				void 0 !== o.fn.block && (t.unblock(), r.unblock()), t.addClass("added").attr("href", e.table_url).text(yith_woocompare.added_label), r.html(e.widget_table), "yes" == yith_woocompare.auto_open && o("body").trigger("yith_woocompare_open_popup", {
					response: e.table_url,
					button: t
				})
			}
		})
	}), o(document).on("click", ".product a.compare.added", function (e) {
		e.preventDefault();
		var t = this.href;
		void 0 !== t && o("body").trigger("yith_woocompare_open_popup", {
			response: t,
			button: o(this)
		})
	}), o("body").on("yith_woocompare_open_popup", function (e, t) {
		var a = t.response;
		if (o(window).width() >= 768) o.colorbox({
			href: a,
			iframe: !0,
			width: "90%",
			height: "90%",
			className: "yith_woocompare_colorbox",
			close: yith_woocompare.close_label,
			onClosed: function () {
				var e = o(".yith-woocompare-widget ul.products-list"),
					t = {
						action: yith_woocompare.actionreload,
						context: "frontend"
					};
				void 0 !== o.fn.block && e.block({
					message: null,
					overlayCSS: {
						background: "#fff url(" + yith_woocompare.loader + ") no-repeat center",
						backgroundSize: "16px 16px",
						opacity: .6
					}
				}), o.ajax({
					type: "post",
					url: yith_woocompare.ajaxurl.toString().replace("%%endpoint%%", yith_woocompare.actionreload),
					data: t,
					success: function (t) {
						void 0 !== o.fn.block && e.unblock().html(t), e.html(t)
					}
				})
			}
		}), o(window).resize(function () {
			o.colorbox.resize({
				width: "90%",
				height: "90%"
			})
		});
		else {
			var r = a.split("?");
			if (r.length >= 2) {
				for (var c = encodeURIComponent("iframe") + "=", n = r[1].split(/[&;]/g), i = n.length; i-- > 0;) - 1 !== n[i].lastIndexOf(c, 0) && n.splice(i, 1);
				a = r[0] + "?" + n.join("&")
			}
			window.open(a, yith_woocompare.table_title)
		}
	}), o(document).on("click", ".remove a", function (e) {
		e.preventDefault();
		var t = o(this),
			a = {
				action: yith_woocompare.actionremove,
				id: t.data("product_id"),
				context: "frontend"
			};
		o("td.product_" + a.id + ", th.product_" + a.id);
		void 0 !== o.fn.block && t.block({
			message: null,
			overlayCSS: {
				background: "#fff url(" + yith_woocompare.loader + ") no-repeat center",
				backgroundSize: "16px 16px",
				opacity: .6
			}
		}), o.ajax({
			type: "post",
			url: yith_woocompare.ajaxurl.toString().replace("%%endpoint%%", yith_woocompare.actionremove),
			data: a,
			dataType: "html",
			success: function (e) {
				var a = o(e).filter("table.compare-list");
				o("body > table.compare-list").replaceWith(a), o('.compare[data-product_id="' + t.data("product_id") + '"]', window.parent.document).removeClass("added").html(yith_woocompare.button_text), o(window).trigger("yith_woocompare_product_removed")
			}
		})
	}), o(".yith-woocompare-open a, a.yith-woocompare-open").on("click", function (t) {
		t.preventDefault(), o("body").trigger("yith_woocompare_open_popup", {
			response: e("action", yith_woocompare.actionview) + "&iframe=true"
		})
	}), o(".yith-woocompare-widget").on("click", "a.compare", function (e) {
		e.preventDefault(), o("body").trigger("yith_woocompare_open_popup", {
			response: o(this).attr("href")
		})
	}).on("click", "li a.remove, a.clear-all", function (e) {
		e.preventDefault();
		var t = o(".yith-woocompare-widget .products-list").data("lang"),
			a = o(this),
			r = a.data("product_id"),
			c = {
				action: yith_woocompare.actionremove,
				id: r,
				context: "frontend",
				responseType: "product_list",
				lang: t
			},
			n = a.parents(".yith-woocompare-widget").find("ul.products-list");
		void 0 !== o.fn.block && n.block({
			message: null,
			overlayCSS: {
				background: "#fff url(" + yith_woocompare.loader + ") no-repeat center",
				backgroundSize: "16px 16px",
				opacity: .6
			}
		}), o.ajax({
			type: "post",
			url: yith_woocompare.ajaxurl.toString().replace("%%endpoint%%", yith_woocompare.actionremove),
			data: c,
			dataType: "html",
			success: function (e) {
				"all" == r ? o(".compare.added").removeClass("added").html(yith_woocompare.button_text) : o('.compare[data-product_id="' + r + '"]').removeClass("added").html(yith_woocompare.button_text), n.html(e), void 0 !== o.fn.block && n.unblock()
			}
		})
	}), o("body").on("added_to_cart", function (e, t, a, r) {
		o(r).closest("table.compare-list").length && r.hide()
	})
});
/*!
	Colorbox v1.5.10 - 2014-06-26
	jQuery lightbox and modal window plugin
	(c) 2014 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function (t, e, i) {
	function n(i, n, o) {
		var r = e.createElement(i);
		return n && (r.id = Z + n), o && (r.style.cssText = o), t(r)
	}

	function o() {
		return i.innerHeight ? i.innerHeight : t(i).height()
	}

	function r(e, i) {
		i !== Object(i) && (i = {}), this.cache = {}, this.el = e, this.value = function (e) {
			var n;
			return void 0 === this.cache[e] && (n = t(this.el).attr("data-cbox-" + e), void 0 !== n ? this.cache[e] = n : void 0 !== i[e] ? this.cache[e] = i[e] : void 0 !== X[e] && (this.cache[e] = X[e])), this.cache[e]
		}, this.get = function (e) {
			var i = this.value(e);
			return t.isFunction(i) ? i.call(this.el, this) : i
		}
	}

	function h(t) {
		var e = W.length,
			i = (z + t) % e;
		return 0 > i ? e + i : i
	}

	function a(t, e) {
		return Math.round((/%/.test(t) ? ("x" === e ? E.width() : o()) / 100 : 1) * parseInt(t, 10))
	}

	function s(t, e) {
		return t.get("photo") || t.get("photoRegex").test(e)
	}

	function l(t, e) {
		return t.get("retinaUrl") && i.devicePixelRatio > 1 ? e.replace(t.get("photoRegex"), t.get("retinaSuffix")) : e
	}

	function d(t) {
		"contains" in y[0] && !y[0].contains(t.target) && t.target !== v[0] && (t.stopPropagation(), y.focus())
	}

	function c(t) {
		c.str !== t && (y.add(v).removeClass(c.str).addClass(t), c.str = t)
	}

	function g(e) {
		z = 0, e && e !== !1 && "nofollow" !== e ? (W = t("." + te).filter(function () {
			var i = t.data(this, Y),
				n = new r(this, i);
			return n.get("rel") === e
		}), z = W.index(_.el), -1 === z && (W = W.add(_.el), z = W.length - 1)) : W = t(_.el)
	}

	function u(i) {
		t(e).trigger(i), ae.triggerHandler(i)
	}

	function f(i) {
		var o;
		if (!G) {
			if (o = t(i).data(Y), _ = new r(i, o), g(_.get("rel")), !$) {
				$ = q = !0, c(_.get("className")), y.css({
					visibility: "hidden",
					display: "block",
					opacity: ""
				}), L = n(se, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"), b.css({
					width: "",
					height: ""
				}).append(L), D = T.height() + k.height() + b.outerHeight(!0) - b.height(), j = C.width() + H.width() + b.outerWidth(!0) - b.width(), A = L.outerHeight(!0), N = L.outerWidth(!0);
				var h = a(_.get("initialWidth"), "x"),
					s = a(_.get("initialHeight"), "y"),
					l = _.get("maxWidth"),
					f = _.get("maxHeight");
				_.w = (l !== !1 ? Math.min(h, a(l, "x")) : h) - N - j, _.h = (f !== !1 ? Math.min(s, a(f, "y")) : s) - A - D, L.css({
					width: "",
					height: _.h
				}), J.position(), u(ee), _.get("onOpen"), O.add(I).hide(), y.focus(), _.get("trapFocus") && e.addEventListener && (e.addEventListener("focus", d, !0), ae.one(re, function () {
					e.removeEventListener("focus", d, !0)
				})), _.get("returnFocus") && ae.one(re, function () {
					t(_.el).focus()
				})
			}
			v.css({
				opacity: parseFloat(_.get("opacity")) || "",
				cursor: _.get("overlayClose") ? "pointer" : "",
				visibility: "visible"
			}).show(), _.get("closeButton") ? B.html(_.get("close")).appendTo(b) : B.appendTo("<div/>"), w()
		}
	}

	function p() {
		!y && e.body && (V = !1, E = t(i), y = n(se).attr({
			id: Y,
			"class": t.support.opacity === !1 ? Z + "IE" : "",
			role: "dialog",
			tabindex: "-1"
		}).hide(), v = n(se, "Overlay").hide(), S = t([n(se, "LoadingOverlay")[0], n(se, "LoadingGraphic")[0]]), x = n(se, "Wrapper"), b = n(se, "Content").append(I = n(se, "Title"), R = n(se, "Current"), P = t('<button type="button"/>').attr({
			id: Z + "Previous"
		}), K = t('<button type="button"/>').attr({
			id: Z + "Next"
		}), F = n("button", "Slideshow"), S), B = t('<button type="button"/>').attr({
			id: Z + "Close"
		}), x.append(n(se).append(n(se, "TopLeft"), T = n(se, "TopCenter"), n(se, "TopRight")), n(se, !1, "clear:left").append(C = n(se, "MiddleLeft"), b, H = n(se, "MiddleRight")), n(se, !1, "clear:left").append(n(se, "BottomLeft"), k = n(se, "BottomCenter"), n(se, "BottomRight"))).find("div div").css({
			"float": "left"
		}), M = n(se, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), O = K.add(P).add(R).add(F), t(e.body).append(v, y.append(x, M)))
	}

	function m() {
		function i(t) {
			t.which > 1 || t.shiftKey || t.altKey || t.metaKey || t.ctrlKey || (t.preventDefault(), f(this))
		}
		return y ? (V || (V = !0, K.click(function () {
			J.next()
		}), P.click(function () {
			J.prev()
		}), B.click(function () {
			J.close()
		}), v.click(function () {
			_.get("overlayClose") && J.close()
		}), t(e).bind("keydown." + Z, function (t) {
			var e = t.keyCode;
			$ && _.get("escKey") && 27 === e && (t.preventDefault(), J.close()), $ && _.get("arrowKey") && W[1] && !t.altKey && (37 === e ? (t.preventDefault(), P.click()) : 39 === e && (t.preventDefault(), K.click()))
		}), t.isFunction(t.fn.on) ? t(e).on("click." + Z, "." + te, i) : t("." + te).live("click." + Z, i)), !0) : !1
	}

	function w() {
		var e, o, r, h = J.prep,
			d = ++le;
		if (q = !0, U = !1, u(he), u(ie), _.get("onLoad"), _.h = _.get("height") ? a(_.get("height"), "y") - A - D : _.get("innerHeight") && a(_.get("innerHeight"), "y"), _.w = _.get("width") ? a(_.get("width"), "x") - N - j : _.get("innerWidth") && a(_.get("innerWidth"), "x"), _.mw = _.w, _.mh = _.h, _.get("maxWidth") && (_.mw = a(_.get("maxWidth"), "x") - N - j, _.mw = _.w && _.w < _.mw ? _.w : _.mw), _.get("maxHeight") && (_.mh = a(_.get("maxHeight"), "y") - A - D, _.mh = _.h && _.h < _.mh ? _.h : _.mh), e = _.get("href"), Q = setTimeout(function () {
				S.show()
			}, 100), _.get("inline")) {
			var c = t(e);
			r = t("<div>").hide().insertBefore(c), ae.one(he, function () {
				r.replaceWith(c)
			}), h(c)
		} else _.get("iframe") ? h(" ") : _.get("html") ? h(_.get("html")) : s(_, e) ? (e = l(_, e), U = new Image, t(U).addClass(Z + "Photo").bind("error", function () {
			h(n(se, "Error").html(_.get("imgError")))
		}).one("load", function () {
			d === le && setTimeout(function () {
				var e;
				t.each(["alt", "longdesc", "aria-describedby"], function (e, i) {
					var n = t(_.el).attr(i) || t(_.el).attr("data-" + i);
					n && U.setAttribute(i, n)
				}), _.get("retinaImage") && i.devicePixelRatio > 1 && (U.height = U.height / i.devicePixelRatio, U.width = U.width / i.devicePixelRatio), _.get("scalePhotos") && (o = function () {
					U.height -= U.height * e, U.width -= U.width * e
				}, _.mw && U.width > _.mw && (e = (U.width - _.mw) / U.width, o()), _.mh && U.height > _.mh && (e = (U.height - _.mh) / U.height, o())), _.h && (U.style.marginTop = Math.max(_.mh - U.height, 0) / 2 + "px"), W[1] && (_.get("loop") || W[z + 1]) && (U.style.cursor = "pointer", U.onclick = function () {
					J.next()
				}), U.style.width = U.width + "px", U.style.height = U.height + "px", h(U)
			}, 1)
		}), U.src = e) : e && M.load(e, _.get("data"), function (e, i) {
			d === le && h("error" === i ? n(se, "Error").html(_.get("xhrError")) : t(this).contents())
		})
	}
	var v, y, x, b, T, C, H, k, W, E, L, M, S, I, R, F, K, P, B, O, _, D, j, A, N, z, U, $, q, G, Q, J, V, X = {
			html: !1,
			photo: !1,
			iframe: !1,
			inline: !1,
			transition: "elastic",
			speed: 300,
			fadeOut: 300,
			width: !1,
			initialWidth: "600",
			innerWidth: !1,
			maxWidth: !1,
			height: !1,
			initialHeight: "450",
			innerHeight: !1,
			maxHeight: !1,
			scalePhotos: !0,
			scrolling: !0,
			opacity: .9,
			preloading: !0,
			className: !1,
			overlayClose: !0,
			escKey: !0,
			arrowKey: !0,
			top: !1,
			bottom: !1,
			left: !1,
			right: !1,
			fixed: !1,
			data: void 0,
			closeButton: !0,
			fastIframe: !0,
			open: !1,
			reposition: !0,
			loop: !0,
			slideshow: !1,
			slideshowAuto: !0,
			slideshowSpeed: 2500,
			slideshowStart: "start slideshow",
			slideshowStop: "stop slideshow",
			photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
			retinaImage: !1,
			retinaUrl: !1,
			retinaSuffix: "@2x.$1",
			current: "image {current} of {total}",
			previous: "previous",
			next: "next",
			close: "close",
			xhrError: "This content failed to load.",
			imgError: "This image failed to load.",
			returnFocus: !0,
			trapFocus: !0,
			onOpen: !1,
			onLoad: !1,
			onComplete: !1,
			onCleanup: !1,
			onClosed: !1,
			rel: function () {
				return this.rel
			},
			href: function () {
				return t(this).attr("href")
			},
			title: function () {
				return this.title
			}
		},
		Y = "colorbox",
		Z = "cbox",
		te = Z + "Element",
		ee = Z + "_open",
		ie = Z + "_load",
		ne = Z + "_complete",
		oe = Z + "_cleanup",
		re = Z + "_closed",
		he = Z + "_purge",
		ae = t("<a/>"),
		se = "div",
		le = 0,
		de = {},
		ce = function () {
			function t() {
				clearTimeout(h)
			}

			function e() {
				(_.get("loop") || W[z + 1]) && (t(), h = setTimeout(J.next, _.get("slideshowSpeed")))
			}

			function i() {
				F.html(_.get("slideshowStop")).unbind(s).one(s, n), ae.bind(ne, e).bind(ie, t), y.removeClass(a + "off").addClass(a + "on")
			}

			function n() {
				t(), ae.unbind(ne, e).unbind(ie, t), F.html(_.get("slideshowStart")).unbind(s).one(s, function () {
					J.next(), i()
				}), y.removeClass(a + "on").addClass(a + "off")
			}

			function o() {
				r = !1, F.hide(), t(), ae.unbind(ne, e).unbind(ie, t), y.removeClass(a + "off " + a + "on")
			}
			var r, h, a = Z + "Slideshow_",
				s = "click." + Z;
			return function () {
				r ? _.get("slideshow") || (ae.unbind(oe, o), o()) : _.get("slideshow") && W[1] && (r = !0, ae.one(oe, o), _.get("slideshowAuto") ? i() : n(), F.show())
			}
		}();
	t[Y] || (t(p), J = t.fn[Y] = t[Y] = function (e, i) {
		var n, o = this;
		if (e = e || {}, t.isFunction(o)) o = t("<a/>"), e.open = !0;
		else if (!o[0]) return o;
		return o[0] ? (p(), m() && (i && (e.onComplete = i), o.each(function () {
			var i = t.data(this, Y) || {};
			t.data(this, Y, t.extend(i, e))
		}).addClass(te), n = new r(o[0], e), n.get("open") && f(o[0])), o) : o
	}, J.position = function (e, i) {
		function n() {
			T[0].style.width = k[0].style.width = b[0].style.width = parseInt(y[0].style.width, 10) - j + "px", b[0].style.height = C[0].style.height = H[0].style.height = parseInt(y[0].style.height, 10) - D + "px"
		}
		var r, h, s, l = 0,
			d = 0,
			c = y.offset();
		if (E.unbind("resize." + Z), y.css({
				top: -9e4,
				left: -9e4
			}), h = E.scrollTop(), s = E.scrollLeft(), _.get("fixed") ? (c.top -= h, c.left -= s, y.css({
				position: "fixed"
			})) : (l = h, d = s, y.css({
				position: "absolute"
			})), d += _.get("right") !== !1 ? Math.max(E.width() - _.w - N - j - a(_.get("right"), "x"), 0) : _.get("left") !== !1 ? a(_.get("left"), "x") : Math.round(Math.max(E.width() - _.w - N - j, 0) / 2), l += _.get("bottom") !== !1 ? Math.max(o() - _.h - A - D - a(_.get("bottom"), "y"), 0) : _.get("top") !== !1 ? a(_.get("top"), "y") : Math.round(Math.max(o() - _.h - A - D, 0) / 2), y.css({
				top: c.top,
				left: c.left,
				visibility: "visible"
			}), x[0].style.width = x[0].style.height = "9999px", r = {
				width: _.w + N + j,
				height: _.h + A + D,
				top: l,
				left: d
			}, e) {
			var g = 0;
			t.each(r, function (t) {
				return r[t] !== de[t] ? (g = e, void 0) : void 0
			}), e = g
		}
		de = r, e || y.css(r), y.dequeue().animate(r, {
			duration: e || 0,
			complete: function () {
				n(), q = !1, x[0].style.width = _.w + N + j + "px", x[0].style.height = _.h + A + D + "px", _.get("reposition") && setTimeout(function () {
					E.bind("resize." + Z, J.position)
				}, 1), i && i()
			},
			step: n
		})
	}, J.resize = function (t) {
		var e;
		$ && (t = t || {}, t.width && (_.w = a(t.width, "x") - N - j), t.innerWidth && (_.w = a(t.innerWidth, "x")), L.css({
			width: _.w
		}), t.height && (_.h = a(t.height, "y") - A - D), t.innerHeight && (_.h = a(t.innerHeight, "y")), t.innerHeight || t.height || (e = L.scrollTop(), L.css({
			height: "auto"
		}), _.h = L.height()), L.css({
			height: _.h
		}), e && L.scrollTop(e), J.position("none" === _.get("transition") ? 0 : _.get("speed")))
	}, J.prep = function (i) {
		function o() {
			return _.w = _.w || L.width(), _.w = _.mw && _.mw < _.w ? _.mw : _.w, _.w
		}

		function a() {
			return _.h = _.h || L.height(), _.h = _.mh && _.mh < _.h ? _.mh : _.h, _.h
		}
		if ($) {
			var d, g = "none" === _.get("transition") ? 0 : _.get("speed");
			L.remove(), L = n(se, "LoadedContent").append(i), L.hide().appendTo(M.show()).css({
				width: o(),
				overflow: _.get("scrolling") ? "auto" : "hidden"
			}).css({
				height: a()
			}).prependTo(b), M.hide(), t(U).css({
				"float": "none"
			}), c(_.get("className")), d = function () {
				function i() {
					t.support.opacity === !1 && y[0].style.removeAttribute("filter")
				}
				var n, o, a = W.length;
				$ && (o = function () {
					clearTimeout(Q), S.hide(), u(ne), _.get("onComplete")
				}, I.html(_.get("title")).show(), L.show(), a > 1 ? ("string" == typeof _.get("current") && R.html(_.get("current").replace("{current}", z + 1).replace("{total}", a)).show(), K[_.get("loop") || a - 1 > z ? "show" : "hide"]().html(_.get("next")), P[_.get("loop") || z ? "show" : "hide"]().html(_.get("previous")), ce(), _.get("preloading") && t.each([h(-1), h(1)], function () {
					var i, n = W[this],
						o = new r(n, t.data(n, Y)),
						h = o.get("href");
					h && s(o, h) && (h = l(o, h), i = e.createElement("img"), i.src = h)
				})) : O.hide(), _.get("iframe") ? (n = e.createElement("iframe"), "frameBorder" in n && (n.frameBorder = 0), "allowTransparency" in n && (n.allowTransparency = "true"), _.get("scrolling") || (n.scrolling = "no"), t(n).attr({
					src: _.get("href"),
					name: (new Date).getTime(),
					"class": Z + "Iframe",
					allowFullScreen: !0
				}).one("load", o).appendTo(L), ae.one(he, function () {
					n.src = "//about:blank"
				}), _.get("fastIframe") && t(n).trigger("load")) : o(), "fade" === _.get("transition") ? y.fadeTo(g, 1, i) : i())
			}, "fade" === _.get("transition") ? y.fadeTo(g, 0, function () {
				J.position(0, d)
			}) : J.position(g, d)
		}
	}, J.next = function () {
		!q && W[1] && (_.get("loop") || W[z + 1]) && (z = h(1), f(W[z]))
	}, J.prev = function () {
		!q && W[1] && (_.get("loop") || z) && (z = h(-1), f(W[z]))
	}, J.close = function () {
		$ && !G && (G = !0, $ = !1, u(oe), _.get("onCleanup"), E.unbind("." + Z), v.fadeTo(_.get("fadeOut") || 0, 0), y.stop().fadeTo(_.get("fadeOut") || 0, 0, function () {
			y.hide(), v.hide(), u(he), L.remove(), setTimeout(function () {
				G = !1, u(re), _.get("onClosed")
			}, 1)
		}))
	}, J.remove = function () {
		y && (y.stop(), t[Y].close(), y.stop(!1, !0).remove(), v.remove(), G = !1, y = null, t("." + te).removeData(Y).removeClass(te), t(e).unbind("click." + Z).unbind("keydown." + Z))
	}, J.element = function () {
		return t(_.el)
	}, J.settings = X)
})(jQuery, document, window);
! function (t) {
	function e() {
		var t = location.href;
		return hashtag = -1 !== t.indexOf("#prettyPhoto") && decodeURI(t.substring(t.indexOf("#prettyPhoto") + 1, t.length)), hashtag && (hashtag = hashtag.replace(/<|>/g, "")), hashtag
	}

	function i() {
		"undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/")
	}

	function p() {
		-1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto")
	}

	function o(t, e) {
		var i = "[\\?&]" + (t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]")) + "=([^&#]*)",
			p = new RegExp(i).exec(e);
		return null == p ? "" : p[1]
	}
	t.prettyPhoto = {
		version: "3.1.6"
	}, t.fn.prettyPhoto = function (a) {
		function s() {
			t(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (I / 2 - u.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
				height: u.contentHeight,
				width: u.contentWidth
			}, settings.animation_speed), $pp_pic_holder.animate({
				top: projectedTop,
				left: j / 2 - u.containerWidth / 2 < 0 ? 0 : j / 2 - u.containerWidth / 2,
				width: u.containerWidth
			}, settings.animation_speed, function () {
				$pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(u.height).width(u.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == h(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (u.resized ? t("a.pp_expand,a.pp_contract").show() : t("a.pp_expand").hide()), !settings.autoplay_slideshow || P || v || t.prettyPhoto.startSlideshow(), settings.changepicturecallback(), v = !0
			}), m(), a.ajaxcallback()
		}

		function n(e) {
			$pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function () {
				t(".pp_loaderIcon").show(), e()
			})
		}

		function l(e) {
			e > 1 ? t(".pp_nav").show() : t(".pp_nav").hide()
		}

		function r(t, e) {
			if (resized = !1, d(t, e), imageWidth = t, imageHeight = e, (k > j || b > I) && doresize && settings.allow_resize && !$) {
				for (resized = !0, fitting = !1; !fitting;) k > j ? (imageWidth = j - 200, imageHeight = e / t * imageWidth) : b > I ? (imageHeight = I - 200, imageWidth = t / e * imageHeight) : fitting = !0, b = imageHeight, k = imageWidth;
				(k > j || b > I) && r(k, b), d(imageWidth, imageHeight)
			}
			return {
				width: Math.floor(imageWidth),
				height: Math.floor(imageHeight),
				containerHeight: Math.floor(b),
				containerWidth: Math.floor(k) + 2 * settings.horizontal_padding,
				contentHeight: Math.floor(y),
				contentWidth: Math.floor(w),
				resized: resized
			}
		}

		function d(e, i) {
			e = parseFloat(e), i = parseFloat(i), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(e), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(e).appendTo(t("body")).css({
				position: "absolute",
				top: -1e4
			}), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(e), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo(t("body")).css({
				position: "absolute",
				top: -1e4
			}), titleHeight += $pp_title.height(), $pp_title.remove(), y = i + detailsHeight, w = e, b = y + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), k = e
		}

		function h(t) {
			return t.match(/youtube\.com\/watch/i) || t.match(/youtu\.be/i) ? "youtube" : t.match(/vimeo\.com/i) ? "vimeo" : t.match(/\b.mov\b/i) ? "quicktime" : t.match(/\b.swf\b/i) ? "flash" : t.match(/\biframe=true\b/i) ? "iframe" : t.match(/\bajax=true\b/i) ? "ajax" : t.match(/\bcustom=true\b/i) ? "custom" : "#" == t.substr(0, 1) ? "inline" : "image"
		}

		function c() {
			if (doresize && "undefined" != typeof $pp_pic_holder) {
				if (scroll_pos = _(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = I / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > I) return;
				$pp_pic_holder.css({
					top: projectedTop,
					left: j / 2 + scroll_pos.scrollLeft - contentwidth / 2
				})
			}
		}

		function _() {
			return self.pageYOffset ? {
				scrollTop: self.pageYOffset,
				scrollLeft: self.pageXOffset
			} : document.documentElement && document.documentElement.scrollTop ? {
				scrollTop: document.documentElement.scrollTop,
				scrollLeft: document.documentElement.scrollLeft
			} : document.body ? {
				scrollTop: document.body.scrollTop,
				scrollLeft: document.body.scrollLeft
			} : void 0
		}

		function g() {
			I = t(window).height(), j = t(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height(t(document).height()).width(j)
		}

		function m() {
			isSet && settings.overlay_gallery && "image" == h(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((u.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, t.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
		}

		function f(e) {
			if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), t("body").append(settings.markup), $pp_pic_holder = t(".pp_pic_holder"), $ppt = t(".ppt"), $pp_overlay = t("div.pp_overlay"), isSet && settings.overlay_gallery) {
				currentGalleryPage = 0, toInject = "";
				for (var i = 0; i < pp_images.length; i++) pp_images[i].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[i]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
				toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = t(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function () {
					return t.prettyPhoto.changeGalleryPage("next"), t.prettyPhoto.stopSlideshow(), !1
				}), $pp_gallery.find(".pp_arrow_previous").click(function () {
					return t.prettyPhoto.changeGalleryPage("previous"), t.prettyPhoto.stopSlideshow(), !1
				}), $pp_pic_holder.find(".pp_content").hover(function () {
					$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
				}, function () {
					$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
				}), itemWidth = 57, $pp_gallery_li.each(function (e) {
					t(this).find("a").click(function () {
						return t.prettyPhoto.changePage(e), t.prettyPhoto.stopSlideshow(), !1
					})
				})
			}
			settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function () {
				return t.prettyPhoto.startSlideshow(), !1
			})), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
				opacity: 0,
				height: t(document).height(),
				width: t(window).width()
			}).bind("click", function () {
				settings.modal || t.prettyPhoto.close()
			}), t("a.pp_close").bind("click", function () {
				return t.prettyPhoto.close(), !1
			}), settings.allow_expand && t("a.pp_expand").bind("click", function (e) {
				return t(this).hasClass("pp_expand") ? (t(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (t(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), n(function () {
					t.prettyPhoto.open()
				}), !1
			}), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function () {
				return t.prettyPhoto.changePage("previous"), t.prettyPhoto.stopSlideshow(), !1
			}), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function () {
				return t.prettyPhoto.changePage("next"), t.prettyPhoto.stopSlideshow(), !1
			}), c()
		}
		a = jQuery.extend({
			hook: "rel",
			animation_speed: "fast",
			ajaxcallback: function () {},
			slideshow: 5e3,
			autoplay_slideshow: !1,
			opacity: .8,
			show_title: !0,
			allow_resize: !0,
			allow_expand: !0,
			default_width: 500,
			default_height: 344,
			counter_separator_label: "/",
			theme: "pp_default",
			horizontal_padding: 20,
			hideflash: !1,
			wmode: "opaque",
			autoplay: !0,
			modal: !1,
			deeplinking: !0,
			overlay_gallery: !0,
			overlay_gallery_max: 30,
			keyboard_shortcuts: !0,
			changepicturecallback: function () {},
			callback: function () {},
			ie6_fallback: !0,
			markup: '<div class="pp_pic_holder"> \t\t\t\t\t\t<div class="ppt">&nbsp;</div> \t\t\t\t\t\t<div class="pp_top"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_content_container"> \t\t\t\t\t\t\t<div class="pp_left"> \t\t\t\t\t\t\t<div class="pp_right"> \t\t\t\t\t\t\t\t<div class="pp_content"> \t\t\t\t\t\t\t\t\t<div class="pp_loaderIcon"></div> \t\t\t\t\t\t\t\t\t<div class="pp_fade"> \t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_expand" title="Expand the image">Expand</a> \t\t\t\t\t\t\t\t\t\t<div class="pp_hoverContainer"> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_next" href="#">next</a> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_previous" href="#">previous</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t<div id="pp_full_res"></div> \t\t\t\t\t\t\t\t\t\t<div class="pp_details"> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_nav"> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t\t\t\t\t<p class="currentTextHolder">0/0</p> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t<p class="pp_description"></p> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_social">{pp_social}</div> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_close" href="#">Close</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_bottom"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t</div> \t\t\t\t\t<div class="pp_overlay"></div>',
			gallery_markup: '<div class="pp_gallery"> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t<div> \t\t\t\t\t\t\t\t\t<ul> \t\t\t\t\t\t\t\t\t\t{gallery} \t\t\t\t\t\t\t\t\t</ul> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t</div>',
			image_markup: '<img id="fullResImage" src="{path}" />',
			flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
			quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="https://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="https://www.apple.com/quicktime/download/"></embed></object>',
			iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
			inline_markup: '<div class="pp_inline">{content}</div>',
			custom_markup: "",
			social_tools: '<div class="twitter"><a href="//twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="//platform.twitter.com/widgets.js"><\/script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
		}, a);
		var u, v, y, w, b, k, P, x = this,
			$ = !1,
			I = t(window).height(),
			j = t(window).width();
		return doresize = !0, scroll_pos = _(), t(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function () {
			c(), g()
		}), a.keyboard_shortcuts && t(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function (e) {
			if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (e.keyCode) {
				case 37:
					t.prettyPhoto.changePage("previous"), e.preventDefault();
					break;
				case 39:
					t.prettyPhoto.changePage("next"), e.preventDefault();
					break;
				case 27:
					settings.modal || t.prettyPhoto.close(), e.preventDefault()
			}
		}), t.prettyPhoto.initialize = function () {
			return settings = a, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = t(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = !!galleryRegExp.exec(theRel), pp_images = isSet ? jQuery.map(x, function (e, i) {
				if (-1 != t(e).attr(settings.hook).indexOf(theRel)) return t(e).attr("href")
			}) : t.makeArray(t(this).attr("href")), pp_titles = isSet ? jQuery.map(x, function (e, i) {
				if (-1 != t(e).attr(settings.hook).indexOf(theRel)) return t(e).find("img").attr("alt") ? t(e).find("img").attr("alt") : ""
			}) : t.makeArray(t(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(x, function (e, i) {
				if (-1 != t(e).attr(settings.hook).indexOf(theRel)) return t(e).attr("title") ? t(e).attr("title") : ""
			}) : t.makeArray(t(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray(t(this).attr("href"), pp_images), rel_index = isSet ? set_position : t("a[" + settings.hook + "^='" + theRel + "']").index(t(this)), f(), settings.allow_resize && t(window).bind("scroll.prettyphoto", function () {
				c()
			}), t.prettyPhoto.open(), !1
		}, t.prettyPhoto.open = function (e) {
			return "undefined" == typeof settings && (settings = a, pp_images = t.makeArray(arguments[0]), pp_titles = arguments[1] ? t.makeArray(arguments[1]) : t.makeArray(""), pp_descriptions = arguments[2] ? t.makeArray(arguments[2]) : t.makeArray(""), isSet = pp_images.length > 1, set_position = arguments[3] ? arguments[3] : 0, f(e.target)), settings.hideflash && t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), l(t(pp_images).length), t(".pp_loaderIcon").show(), settings.deeplinking && i(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + t(pp_images).length), "undefined" != typeof pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(o("width", pp_images[set_position])) ? o("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(o("height", pp_images[set_position])) ? o("height", pp_images[set_position]) : settings.default_height.toString(), $ = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat(t(window).height() * parseFloat(movie_height) / 100 - 150), $ = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat(t(window).width() * parseFloat(movie_width) / 100 - 150), $ = !0), $pp_pic_holder.fadeIn(function () {
				switch (settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html("&nbsp;"), imgPreloader = "", skipInjection = !1, h(pp_images[set_position])) {
					case "image":
						imgPreloader = new Image, nextImage = new Image, isSet && set_position < t(pp_images).length - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function () {
							u = r(imgPreloader.width, imgPreloader.height), s()
						}, imgPreloader.onerror = function () {
							alert("Image cannot be loaded. Make sure the path is correct and image exist."), t.prettyPhoto.close()
						}, imgPreloader.src = pp_images[set_position];
						break;
					case "youtube":
						u = r(movie_width, movie_height), movie_id = o("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "//www.youtube.com/embed/" + movie_id, o("rel", pp_images[set_position]) ? movie += "?rel=" + o("rel", pp_images[set_position]) : movie += "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, u.width).replace(/{height}/g, u.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
						break;
					case "vimeo":
						u = r(movie_width, movie_height), movie_id = pp_images[set_position];
						var e = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,
							i = movie_id.match(e);
						movie = "//player.vimeo.com/video/" + i[3] + "?title=0&amp;byline=0&amp;portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = u.width + "/embed/?moog_width=" + u.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, u.height).replace(/{path}/g, movie);
						break;
					case "quicktime":
						(u = r(movie_width, movie_height)).height += 15, u.contentHeight += 15, u.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, u.width).replace(/{height}/g, u.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
						break;
					case "flash":
						u = r(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, u.width).replace(/{height}/g, u.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
						break;
					case "iframe":
						u = r(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, u.width).replace(/{height}/g, u.height).replace(/{path}/g, frame_url);
						break;
					case "ajax":
						doresize = !1, u = r(movie_width, movie_height), doresize = !0, skipInjection = !0, t.get(pp_images[set_position], function (t) {
							toInject = settings.inline_markup.replace(/{content}/g, t), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s()
						});
						break;
					case "custom":
						u = r(movie_width, movie_height), toInject = settings.custom_markup;
						break;
					case "inline":
						myClone = t(pp_images[set_position]).clone().append('<br clear="all" />').css({
							width: settings.default_width
						}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(t("body")).show(), doresize = !1, u = r(t(myClone).width(), t(myClone).height()), doresize = !0, t(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, t(pp_images[set_position]).html())
				}
				imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s())
			}), !1
		}, t.prettyPhoto.changePage = function (e) {
			currentGalleryPage = 0, "previous" == e ? --set_position < 0 && (set_position = t(pp_images).length - 1) : "next" == e ? ++set_position > t(pp_images).length - 1 && (set_position = 0) : set_position = e, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && t(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), n(function () {
				t.prettyPhoto.open()
			})
		}, t.prettyPhoto.changeGalleryPage = function (t) {
			"next" == t ? ++currentGalleryPage > totalPage && (currentGalleryPage = 0) : "previous" == t ? --currentGalleryPage < 0 && (currentGalleryPage = totalPage) : currentGalleryPage = t, slide_speed = "next" == t || "previous" == t ? settings.animation_speed : 0, slide_to = currentGalleryPage * (itemsPerPage * itemWidth), $pp_gallery.find("ul").animate({
				left: -slide_to
			}, slide_speed)
		}, t.prettyPhoto.startSlideshow = function () {
			void 0 === P ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function () {
				return t.prettyPhoto.stopSlideshow(), !1
			}), P = setInterval(t.prettyPhoto.startSlideshow, settings.slideshow)) : t.prettyPhoto.changePage("next")
		}, t.prettyPhoto.stopSlideshow = function () {
			$pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function () {
				return t.prettyPhoto.startSlideshow(), !1
			}), clearInterval(P), P = undefined
		}, t.prettyPhoto.close = function () {
			$pp_overlay.is(":animated") || (t.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), t("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function () {
				t(this).remove()
			}), $pp_overlay.fadeOut(settings.animation_speed, function () {
				settings.hideflash && t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), t(this).remove(), t(window).unbind("scroll.prettyphoto"), p(), settings.callback(), doresize = !0, v = !1, delete settings
			}))
		}, !pp_alreadyInitialized && e() && (pp_alreadyInitialized = !0, hashIndex = e(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function () {
			t("a[" + a.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
		}, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", t.prettyPhoto.initialize)
	}
}(jQuery);
var pp_alreadyInitialized = !1;

(function (a) {
	var b = this.SelectBox = function (c, d) {
		if (c instanceof jQuery) {
			if (c.length > 0) {
				c = c[0]
			} else {
				return
			}
		}
		this.typeTimer = null;
		this.typeSearch = "";
		this.isMac = navigator.platform.match(/mac/i);
		d = "object" === typeof d ? d : {};
		this.selectElement = c;
		if (!d.mobile && navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i)) {
			return false
		}
		if ("select" !== c.tagName.toLowerCase()) {
			return false
		}
		this.init(d)
	};
	b.prototype.version = "1.2.0";
	b.prototype.init = function (o) {
		var j = a(this.selectElement);
		if (j.data("selectBox-control")) {
			return false
		}
		var f = a('<a class="selectBox" />'),
			h = j.attr("multiple") || parseInt(j.attr("size")) > 1,
			d = o || {},
			c = parseInt(j.prop("tabindex")) || 0,
			m = this;
		f.width(j.outerWidth()).addClass(j.attr("class")).attr("title", j.attr("title") || "").attr("tabindex", c).css("display", "inline-block").bind("focus.selectBox", function () {
			if (this !== document.activeElement && document.body !== document.activeElement) {
				a(document.activeElement).blur()
			}
			if (f.hasClass("selectBox-active")) {
				return
			}
			f.addClass("selectBox-active");
			j.trigger("focus")
		}).bind("blur.selectBox", function () {
			if (!f.hasClass("selectBox-active")) {
				return
			}
			f.removeClass("selectBox-active");
			j.trigger("blur")
		});
		if (!a(window).data("selectBox-bindings")) {
			a(window).data("selectBox-bindings", true).bind("scroll.selectBox", this.hideMenus).bind("resize.selectBox", this.hideMenus)
		}
		if (j.attr("disabled")) {
			f.addClass("selectBox-disabled")
		}
		j.bind("click.selectBox", function (p) {
			f.focus();
			p.preventDefault()
		});
		if (h) {
			o = this.getOptions("inline");
			f.append(o).data("selectBox-options", o).addClass("selectBox-inline selectBox-menuShowing").bind("keydown.selectBox", function (p) {
				m.handleKeyDown(p)
			}).bind("keypress.selectBox", function (p) {
				m.handleKeyPress(p)
			}).bind("mousedown.selectBox", function (p) {
				if (1 !== p.which) {
					return
				}
				if (a(p.target).is("A.selectBox-inline")) {
					p.preventDefault()
				}
				if (!f.hasClass("selectBox-focus")) {
					f.focus()
				}
			}).insertAfter(j);
			if (!j[0].style.height) {
				var n = j.attr("size") ? parseInt(j.attr("size")) : 5;
				var e = f.clone().removeAttr("id").css({
					position: "absolute",
					top: "-9999em"
				}).show().appendTo("body");
				e.find(".selectBox-options").html("<li><a>\u00A0</a></li>");
				var l = parseInt(e.find(".selectBox-options A:first").html("&nbsp;").outerHeight());
				e.remove();
				f.height(l * n)
			}
			this.disableSelection(f)
		} else {
			var i = a('<span class="selectBox-label" />'),
				k = a('<span class="selectBox-arrow" />');
			i.attr("class", this.getLabelClass()).text(this.getLabelText());
			o = this.getOptions("dropdown");
			o.appendTo("BODY");
			f.data("selectBox-options", o).addClass("selectBox-dropdown").append(i).append(k).bind("mousedown.selectBox", function (p) {
				if (1 === p.which) {
					if (f.hasClass("selectBox-menuShowing")) {
						m.hideMenus()
					} else {
						p.stopPropagation();
						o.data("selectBox-down-at-x", p.screenX).data("selectBox-down-at-y", p.screenY);
						m.showMenu()
					}
				}
			}).bind("keydown.selectBox", function (p) {
				m.handleKeyDown(p)
			}).bind("keypress.selectBox", function (p) {
				m.handleKeyPress(p)
			}).bind("open.selectBox", function (q, p) {
				if (p && p._selectBox === true) {
					return
				}
				m.showMenu()
			}).bind("close.selectBox", function (q, p) {
				if (p && p._selectBox === true) {
					return
				}
				m.hideMenus()
			}).insertAfter(j);
			var g = f.width() - k.outerWidth() - parseInt(i.css("paddingLeft")) || 0 - parseInt(i.css("paddingRight")) || 0;
			i.width(g);
			this.disableSelection(f)
		}
		j.addClass("selectBox").data("selectBox-control", f).data("selectBox-settings", d).hide()
	};
	b.prototype.getOptions = function (j) {
		var f;
		var c = a(this.selectElement);
		var e = this;
		var d = function (i, k) {
			i.children("OPTION, OPTGROUP").each(function () {
				if (a(this).is("OPTION")) {
					if (a(this).length > 0) {
						e.generateOptions(a(this), k)
					} else {
						k.append("<li>\u00A0</li>")
					}
				} else {
					var l = a('<li class="selectBox-optgroup" />');
					l.text(a(this).attr("label"));
					k.append(l);
					k = d(a(this), k)
				}
			});
			return k
		};
		switch (j) {
			case "inline":
				f = a('<ul class="selectBox-options" />');
				f = d(c, f);
				f.find("A").bind("mouseover.selectBox", function (i) {
					e.addHover(a(this).parent())
				}).bind("mouseout.selectBox", function (i) {
					e.removeHover(a(this).parent())
				}).bind("mousedown.selectBox", function (i) {
					if (1 !== i.which) {
						return
					}
					i.preventDefault();
					if (!c.selectBox("control").hasClass("selectBox-active")) {
						c.selectBox("control").focus()
					}
				}).bind("mouseup.selectBox", function (i) {
					if (1 !== i.which) {
						return
					}
					e.hideMenus();
					e.selectOption(a(this).parent(), i)
				});
				this.disableSelection(f);
				return f;
			case "dropdown":
				f = a('<ul class="selectBox-dropdown-menu selectBox-options" />');
				f = d(c, f);
				f.data("selectBox-select", c).css("display", "none").appendTo("BODY").find("A").bind("mousedown.selectBox", function (i) {
					if (i.which === 1) {
						i.preventDefault();
						if (i.screenX === f.data("selectBox-down-at-x") && i.screenY === f.data("selectBox-down-at-y")) {
							f.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y");
							e.hideMenus()
						}
					}
				}).bind("mouseup.selectBox", function (i) {
					if (1 !== i.which) {
						return
					}
					if (i.screenX === f.data("selectBox-down-at-x") && i.screenY === f.data("selectBox-down-at-y")) {
						return
					} else {
						f.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y")
					}
					e.selectOption(a(this).parent());
					e.hideMenus()
				}).bind("mouseover.selectBox", function (i) {
					e.addHover(a(this).parent())
				}).bind("mouseout.selectBox", function (i) {
					e.removeHover(a(this).parent())
				});
				var h = c.attr("class") || "";
				if ("" !== h) {
					h = h.split(" ");
					for (var g in h) {
						f.addClass(h[g] + "-selectBox-dropdown-menu")
					}
				}
				this.disableSelection(f);
				return f
		}
	};
	b.prototype.getLabelClass = function () {
		var c = a(this.selectElement).find("OPTION:selected");
		return ("selectBox-label " + (c.attr("class") || "")).replace(/\s+$/, "")
	};
	b.prototype.getLabelText = function () {
		var c = a(this.selectElement).find("OPTION:selected");
		return c.text() || "\u00A0"
	};
	b.prototype.setLabel = function () {
		var c = a(this.selectElement);
		var d = c.data("selectBox-control");
		if (!d) {
			return
		}
		d.find(".selectBox-label").attr("class", this.getLabelClass()).text(this.getLabelText())
	};
	b.prototype.destroy = function () {
		var c = a(this.selectElement);
		var e = c.data("selectBox-control");
		if (!e) {
			return
		}
		var d = e.data("selectBox-options");
		d.remove();
		e.remove();
		c.removeClass("selectBox").removeData("selectBox-control").data("selectBox-control", null).removeData("selectBox-settings").data("selectBox-settings", null).show()
	};
	b.prototype.refresh = function () {
		var c = a(this.selectElement),
			e = c.data("selectBox-control"),
			f = e.hasClass("selectBox-dropdown"),
			d = e.hasClass("selectBox-menuShowing");
		c.selectBox("options", c.html());
		if (f && d) {
			this.showMenu()
		}
	};
	b.prototype.showMenu = function () {
		var e = this,
			d = a(this.selectElement),
			j = d.data("selectBox-control"),
			h = d.data("selectBox-settings"),
			f = j.data("selectBox-options");
		if (j.hasClass("selectBox-disabled")) {
			return false
		}
		this.hideMenus();
		var g = parseInt(j.css("borderBottomWidth")) || 0;
		f.width(j.innerWidth()).css({
			top: j.offset().top + j.outerHeight() - g,
			left: j.offset().left
		});
		if (d.triggerHandler("beforeopen")) {
			return false
		}
		var i = function () {
			d.triggerHandler("open", {
				_selectBox: true
			})
		};
		switch (h.menuTransition) {
			case "fade":
				f.fadeIn(h.menuSpeed, i);
				break;
			case "slide":
				f.slideDown(h.menuSpeed, i);
				break;
			default:
				f.show(h.menuSpeed, i);
				break
		}
		if (!h.menuSpeed) {
			i()
		}
		var c = f.find(".selectBox-selected:first");
		this.keepOptionInView(c, true);
		this.addHover(c);
		j.addClass("selectBox-menuShowing");
		a(document).bind("mousedown.selectBox", function (k) {
			if (1 === k.which) {
				if (a(k.target).parents().andSelf().hasClass("selectBox-options")) {
					return
				}
				e.hideMenus()
			}
		})
	};
	b.prototype.hideMenus = function () {
		if (a(".selectBox-dropdown-menu:visible").length === 0) {
			return
		}
		a(document).unbind("mousedown.selectBox");
		a(".selectBox-dropdown-menu").each(function () {
			var d = a(this),
				c = d.data("selectBox-select"),
				g = c.data("selectBox-control"),
				e = c.data("selectBox-settings");
			if (c.triggerHandler("beforeclose")) {
				return false
			}
			var f = function () {
				c.triggerHandler("close", {
					_selectBox: true
				})
			};
			if (e) {
				switch (e.menuTransition) {
					case "fade":
						d.fadeOut(e.menuSpeed, f);
						break;
					case "slide":
						d.slideUp(e.menuSpeed, f);
						break;
					default:
						d.hide(e.menuSpeed, f);
						break
				}
				if (!e.menuSpeed) {
					f()
				}
				g.removeClass("selectBox-menuShowing")
			} else {
				a(this).hide();
				a(this).triggerHandler("close", {
					_selectBox: true
				});
				a(this).removeClass("selectBox-menuShowing")
			}
		})
	};
	b.prototype.selectOption = function (d, j) {
		var c = a(this.selectElement);
		d = a(d);
		var k = c.data("selectBox-control"),
			h = c.data("selectBox-settings");
		if (k.hasClass("selectBox-disabled")) {
			return false
		}
		if (0 === d.length || d.hasClass("selectBox-disabled")) {
			return false
		}
		if (c.attr("multiple")) {
			if (j.shiftKey && k.data("selectBox-last-selected")) {
				d.toggleClass("selectBox-selected");
				var e;
				if (d.index() > k.data("selectBox-last-selected").index()) {
					e = d.siblings().slice(k.data("selectBox-last-selected").index(), d.index())
				} else {
					e = d.siblings().slice(d.index(), k.data("selectBox-last-selected").index())
				}
				e = e.not(".selectBox-optgroup, .selectBox-disabled");
				if (d.hasClass("selectBox-selected")) {
					e.addClass("selectBox-selected")
				} else {
					e.removeClass("selectBox-selected")
				}
			} else {
				if ((this.isMac && j.metaKey) || (!this.isMac && j.ctrlKey)) {
					d.toggleClass("selectBox-selected")
				} else {
					d.siblings().removeClass("selectBox-selected");
					d.addClass("selectBox-selected")
				}
			}
		} else {
			d.siblings().removeClass("selectBox-selected");
			d.addClass("selectBox-selected")
		}
		if (k.hasClass("selectBox-dropdown")) {
			k.find(".selectBox-label").text(d.text())
		}
		var f = 0,
			g = [];
		if (c.attr("multiple")) {
			k.find(".selectBox-selected A").each(function () {
				g[f++] = a(this).attr("rel")
			})
		} else {
			g = d.find("A").attr("rel")
		}
		k.data("selectBox-last-selected", d);
		if (c.val() !== g) {
			c.val(g);
			this.setLabel();
			c.trigger("change")
		}
		return true
	};
	b.prototype.addHover = function (d) {
		d = a(d);
		var c = a(this.selectElement),
			f = c.data("selectBox-control"),
			e = f.data("selectBox-options");
		e.find(".selectBox-hover").removeClass("selectBox-hover");
		d.addClass("selectBox-hover")
	};
	b.prototype.getSelectElement = function () {
		return this.selectElement
	};
	b.prototype.removeHover = function (d) {
		d = a(d);
		var c = a(this.selectElement),
			f = c.data("selectBox-control"),
			e = f.data("selectBox-options");
		e.find(".selectBox-hover").removeClass("selectBox-hover")
	};
	b.prototype.keepOptionInView = function (e, d) {
		if (!e || e.length === 0) {
			return
		}
		var c = a(this.selectElement),
			j = c.data("selectBox-control"),
			g = j.data("selectBox-options"),
			h = j.hasClass("selectBox-dropdown") ? g : g.parent(),
			i = parseInt(e.offset().top - h.position().top),
			f = parseInt(i + e.outerHeight());
		if (d) {
			h.scrollTop(e.offset().top - h.offset().top + h.scrollTop() - (h.height() / 2))
		} else {
			if (i < 0) {
				h.scrollTop(e.offset().top - h.offset().top + h.scrollTop())
			}
			if (f > h.height()) {
				h.scrollTop((e.offset().top + e.outerHeight()) - h.offset().top + h.scrollTop() - h.height())
			}
		}
	};
	b.prototype.handleKeyDown = function (c) {
		var k = a(this.selectElement),
			g = k.data("selectBox-control"),
			l = g.data("selectBox-options"),
			e = k.data("selectBox-settings"),
			f = 0,
			h = 0;
		if (g.hasClass("selectBox-disabled")) {
			return
		}
		switch (c.keyCode) {
			case 8:
				c.preventDefault();
				this.typeSearch = "";
				break;
			case 9:
			case 27:
				this.hideMenus();
				this.removeHover();
				break;
			case 13:
				if (g.hasClass("selectBox-menuShowing")) {
					this.selectOption(l.find("LI.selectBox-hover:first"), c);
					if (g.hasClass("selectBox-dropdown")) {
						this.hideMenus()
					}
				} else {
					this.showMenu()
				}
				break;
			case 38:
			case 37:
				c.preventDefault();
				if (g.hasClass("selectBox-menuShowing")) {
					var d = l.find(".selectBox-hover").prev("LI");
					f = l.find("LI:not(.selectBox-optgroup)").length;
					h = 0;
					while (d.length === 0 || d.hasClass("selectBox-disabled") || d.hasClass("selectBox-optgroup")) {
						d = d.prev("LI");
						if (d.length === 0) {
							if (e.loopOptions) {
								d = l.find("LI:last")
							} else {
								d = l.find("LI:first")
							}
						}
						if (++h >= f) {
							break
						}
					}
					this.addHover(d);
					this.selectOption(d, c);
					this.keepOptionInView(d)
				} else {
					this.showMenu()
				}
				break;
			case 40:
			case 39:
				c.preventDefault();
				if (g.hasClass("selectBox-menuShowing")) {
					var j = l.find(".selectBox-hover").next("LI");
					f = l.find("LI:not(.selectBox-optgroup)").length;
					h = 0;
					while (0 === j.length || j.hasClass("selectBox-disabled") || j.hasClass("selectBox-optgroup")) {
						j = j.next("LI");
						if (j.length === 0) {
							if (e.loopOptions) {
								j = l.find("LI:first")
							} else {
								j = l.find("LI:last")
							}
						}
						if (++h >= f) {
							break
						}
					}
					this.addHover(j);
					this.selectOption(j, c);
					this.keepOptionInView(j)
				} else {
					this.showMenu()
				}
				break
		}
	};
	b.prototype.handleKeyPress = function (e) {
		var c = a(this.selectElement),
			f = c.data("selectBox-control"),
			d = f.data("selectBox-options");
		if (f.hasClass("selectBox-disabled")) {
			return
		}
		switch (e.keyCode) {
			case 9:
			case 27:
			case 13:
			case 38:
			case 37:
			case 40:
			case 39:
				break;
			default:
				if (!f.hasClass("selectBox-menuShowing")) {
					this.showMenu()
				}
				e.preventDefault();
				clearTimeout(this.typeTimer);
				this.typeSearch += String.fromCharCode(e.charCode || e.keyCode);
				d.find("A").each(function () {
					if (a(this).text().substr(0, this.typeSearch.length).toLowerCase() === this.typeSearch.toLowerCase()) {
						this.addHover(a(this).parent());
						this.selectOption(a(this).parent(), e);
						this.keepOptionInView(a(this).parent());
						return false
					}
				});
				this.typeTimer = setTimeout(function () {
					this.typeSearch = ""
				}, 1000);
				break
		}
	};
	b.prototype.enable = function () {
		var c = a(this.selectElement);
		c.prop("disabled", false);
		var d = c.data("selectBox-control");
		if (!d) {
			return
		}
		d.removeClass("selectBox-disabled")
	};
	b.prototype.disable = function () {
		var c = a(this.selectElement);
		c.prop("disabled", true);
		var d = c.data("selectBox-control");
		if (!d) {
			return
		}
		d.addClass("selectBox-disabled")
	};
	b.prototype.setValue = function (f) {
		var c = a(this.selectElement);
		c.val(f);
		f = c.val();
		if (null === f) {
			f = c.children().first().val();
			c.val(f)
		}
		var g = c.data("selectBox-control");
		if (!g) {
			return
		}
		var e = c.data("selectBox-settings"),
			d = g.data("selectBox-options");
		this.setLabel();
		d.find(".selectBox-selected").removeClass("selectBox-selected");
		d.find("A").each(function () {
			if (typeof (f) === "object") {
				for (var h = 0; h < f.length; h++) {
					if (a(this).attr("rel") == f[h]) {
						a(this).parent().addClass("selectBox-selected")
					}
				}
			} else {
				if (a(this).attr("rel") == f) {
					a(this).parent().addClass("selectBox-selected")
				}
			}
		});
		if (e.change) {
			e.change.call(c)
		}
	};
	b.prototype.setOptions = function (m) {
		var l = a(this.selectElement),
			f = l.data("selectBox-control"),
			d = l.data("selectBox-settings"),
			k;
		switch (typeof (m)) {
			case "string":
				l.html(m);
				break;
			case "object":
				l.html("");
				for (var g in m) {
					if (m[g] === null) {
						continue
					}
					if (typeof (m[g]) === "object") {
						var c = a('<optgroup label="' + g + '" />');
						for (var e in m[g]) {
							c.append('<option value="' + e + '">' + m[g][e] + "</option>")
						}
						l.append(c)
					} else {
						var h = a('<option value="' + g + '">' + m[g] + "</option>");
						l.append(h)
					}
				}
				break
		}
		if (!f) {
			return
		}
		f.data("selectBox-options").remove();
		k = f.hasClass("selectBox-dropdown") ? "dropdown" : "inline";
		m = this.getOptions(k);
		f.data("selectBox-options", m);
		switch (k) {
			case "inline":
				f.append(m);
				break;
			case "dropdown":
				this.setLabel();
				a("BODY").append(m);
				break
		}
	};
	b.prototype.disableSelection = function (c) {
		a(c).css("MozUserSelect", "none").bind("selectstart", function (d) {
			d.preventDefault()
		})
	};
	b.prototype.generateOptions = function (e, f) {
		var c = a("<li />"),
			d = a("<a />");
		c.addClass(e.attr("class"));
		c.data(e.data());
		d.attr("rel", e.val()).text(e.text());
		c.append(d);
		if (e.attr("disabled")) {
			c.addClass("selectBox-disabled")
		}
		if (e.attr("selected")) {
			c.addClass("selectBox-selected")
		}
		f.append(c)
	};
	a.extend(a.fn, {
		selectBox: function (e, c) {
			var d;
			switch (e) {
				case "control":
					return a(this).data("selectBox-control");
				case "settings":
					if (!c) {
						return a(this).data("selectBox-settings")
					}
					a(this).each(function () {
						a(this).data("selectBox-settings", a.extend(true, a(this).data("selectBox-settings"), c))
					});
					break;
				case "options":
					if (undefined === c) {
						return a(this).data("selectBox-control").data("selectBox-options")
					}
					a(this).each(function () {
						if (d = a(this).data("selectBox")) {
							d.setOptions(c)
						}
					});
					break;
				case "value":
					if (undefined === c) {
						return a(this).val()
					}
					a(this).each(function () {
						if (d = a(this).data("selectBox")) {
							d.setValue(c)
						}
					});
					break;
				case "refresh":
					a(this).each(function () {
						if (d = a(this).data("selectBox")) {
							d.refresh()
						}
					});
					break;
				case "enable":
					a(this).each(function () {
						if (d = a(this).data("selectBox")) {
							d.enable(this)
						}
					});
					break;
				case "disable":
					a(this).each(function () {
						if (d = a(this).data("selectBox")) {
							d.disable()
						}
					});
					break;
				case "destroy":
					a(this).each(function () {
						if (d = a(this).data("selectBox")) {
							d.destroy();
							a(this).data("selectBox", null)
						}
					});
					break;
				case "instance":
					return a(this).data("selectBox");
				default:
					a(this).each(function (g, f) {
						if (!a(f).data("selectBox")) {
							a(f).data("selectBox", new b(f, e))
						}
					});
					break
			}
			return a(this)
		}
	})
})(jQuery);
jQuery(document).ready(function (b) {
	function n() {
		k.off("change");
		k = b('.wishlist_table tbody input[type="checkbox"]');
		"undefined" != typeof b.fn.selectBox && b("select.selectBox").selectBox();
		p();
		l()
	}

	function u() {
		var a = b(".woocommerce-message");
		0 == a.length ? b("#yith-wcwl-form").prepend(yith_wcwl_l10n.labels.added_to_cart_message) : a.fadeOut(300, function () {
			b(this).replaceWith(yith_wcwl_l10n.labels.added_to_cart_message).fadeIn()
		})
	}

	function v(a) {
		var c = a.data("product-id"),
			d = b(".add-to-wishlist-" + c);
		c = {
			add_to_wishlist: c,
			product_type: a.data("product-type"),
			action: yith_wcwl_l10n.actions.add_to_wishlist_action
		};
		if (yith_wcwl_l10n.multi_wishlist && yith_wcwl_l10n.is_user_logged_in) {
			var e = a.parents(".yith-wcwl-popup-footer").prev(".yith-wcwl-popup-content"),
				f = e.find(".wishlist-select"),
				g = e.find(".wishlist-name");
			e = e.find(".wishlist-visibility");
			c.wishlist_id = f.val();
			c.wishlist_name = g.val();
			c.wishlist_visibility = e.val()
		}
		r() ? b.ajax({
			type: "POST",
			url: yith_wcwl_l10n.ajax_url,
			data: c,
			dataType: "json",
			beforeSend: function () {
				a.siblings(".ajax-loading").css("visibility", "visible")
			},
			complete: function () {
				a.siblings(".ajax-loading").css("visibility", "hidden")
			},
			success: function (c) {
				var e = b("#yith-wcwl-popup-message"),
					f = c.result,
					g = c.message;
				if (yith_wcwl_l10n.multi_wishlist && yith_wcwl_l10n.is_user_logged_in) {
					var h = b("select.wishlist-select");
					yith_wcwl_l10n.multi_wishlist && "undefined" != typeof b.prettyPhoto && "undefined" != typeof b.prettyPhoto.close && b.prettyPhoto.close();
					h.each(function (a) {
						a = b(this);
						var d = a.find("option");
						d = d.slice(1, d.length - 1);
						d.remove();
						if ("undefined" != typeof c.user_wishlists)
							for (d in d = 0, c.user_wishlists) "1" != c.user_wishlists[d].is_default && b("<option>").val(c.user_wishlists[d].ID).html(c.user_wishlists[d].wishlist_name).insertBefore(a.find("option:last-child"))
					})
				}
				b("#yith-wcwl-message").html(g);
				e.css("margin-left", "-" + b(e).width() + "px").fadeIn();
				window.setTimeout(function () {
					e.fadeOut()
				}, 2E3);
				"true" == f ? ((!yith_wcwl_l10n.multi_wishlist || !yith_wcwl_l10n.is_user_logged_in || yith_wcwl_l10n.multi_wishlist && yith_wcwl_l10n.is_user_logged_in && yith_wcwl_l10n.hide_add_button) && d.find(".yith-wcwl-add-button").hide().removeClass("show").addClass("hide"), d.find(".yith-wcwl-wishlistexistsbrowse").hide().removeClass("show").addClass("hide").find("a").attr("href", c.wishlist_url), d.find(".yith-wcwl-wishlistaddedbrowse").show().removeClass("hide").addClass("show").find("a").attr("href", c.wishlist_url)) : "exists" == f ? ((!yith_wcwl_l10n.multi_wishlist || !yith_wcwl_l10n.is_user_logged_in || yith_wcwl_l10n.multi_wishlist && yith_wcwl_l10n.is_user_logged_in && yith_wcwl_l10n.hide_add_button) && d.find(".yith-wcwl-add-button").hide().removeClass("show").addClass("hide"), d.find(".yith-wcwl-wishlistexistsbrowse").show().removeClass("hide").addClass("show").find("a").attr("href", c.wishlist_url), d.find(".yith-wcwl-wishlistaddedbrowse").hide().removeClass("show").addClass("hide").find("a").attr("href", c.wishlist_url)) : (d.find(".yith-wcwl-add-button").show().removeClass("hide").addClass("show"), d.find(".yith-wcwl-wishlistexistsbrowse").hide().removeClass("show").addClass("hide"), d.find(".yith-wcwl-wishlistaddedbrowse").hide().removeClass("show").addClass("hide"));
				b("body").trigger("added_to_wishlist", [a, d])
			}
		}) : alert(yith_wcwl_l10n.labels.cookie_disabled)
	}

	function x(a) {
		var c = a.parents(".cart.wishlist_table"),
			d = c.data("pagination"),
			e = c.data("per-page"),
			f = c.data("page"),
			g = a.parents("[data-row-id]");
		c.find(".pagination-row");
		var h = g.data("row-id"),
			m = c.data("id"),
			w = c.data("token");
		d = {
			action: yith_wcwl_l10n.actions.remove_from_wishlist_action,
			remove_from_wishlist: h,
			pagination: d,
			per_page: e,
			current_page: f,
			wishlist_id: m,
			wishlist_token: w
		};
		b("#yith-wcwl-message").html("&nbsp;");
		"undefined" != typeof b.fn.block && c.fadeTo("400", "0.6").block({
			message: null,
			overlayCSS: {
				background: "transparent url(" + yith_wcwl_l10n.ajax_loader_url + ") no-repeat center",
				backgroundSize: "16px 16px",
				opacity: .6
			}
		});
		b("#yith-wcwl-form").load(yith_wcwl_l10n.ajax_url + " #yith-wcwl-form", d, function () {
			"undefined" != typeof b.fn.unblock && c.stop(!0).css("opacity", "1").unblock();
			n();
			b("body").trigger("removed_from_wishlist", [a, g])
		})
	}

	function y(a, c) {
		var d = a.data("product-id"),
			e = b(document).find(".cart.wishlist_table"),
			f = e.data("pagination"),
			g = e.data("per-page"),
			h = e.data("id"),
			m = e.data("token");
		d = {
			action: yith_wcwl_l10n.actions.reload_wishlist_and_adding_elem_action,
			pagination: f,
			per_page: g,
			wishlist_id: h,
			wishlist_token: m,
			add_to_wishlist: d,
			product_type: a.data("product-type")
		};
		r() ? b.ajax({
			type: "POST",
			url: yith_wcwl_l10n.ajax_url,
			data: d,
			dataType: "html",
			beforeSend: function () {
				"undefined" != typeof b.fn.block && e.fadeTo("400", "0.6").block({
					message: null,
					overlayCSS: {
						background: "transparent url(" + yith_wcwl_l10n.ajax_loader_url + ") no-repeat center",
						backgroundSize: "16px 16px",
						opacity: .6
					}
				})
			},
			success: function (a) {
				a = b(a).find("#yith-wcwl-form");
				c.replaceWith(a);
				n()
			}
		}) : alert(yith_wcwl_l10n.labels.cookie_disabled)
	}

	function z(a) {
		var c = a.parents(".cart.wishlist_table"),
			d = c.data("token"),
			e = c.data("id"),
			f = a.parents("[data-row-id]"),
			g = f.data("row-id"),
			h = a.val(),
			m = c.data("pagination"),
			k = c.data("per-page"),
			l = c.data("page");
		d = {
			action: yith_wcwl_l10n.actions.move_to_another_wishlist_action,
			wishlist_token: d,
			wishlist_id: e,
			destination_wishlist_token: h,
			item_id: g,
			pagination: m,
			per_page: k,
			current_page: l
		};
		"" != h && ("undefined" != typeof b.fn.block && c.fadeTo("400", "0.6").block({
			message: null,
			overlayCSS: {
				background: "transparent url(" + yith_wcwl_l10n.ajax_loader_url + ") no-repeat center",
				backgroundSize: "16px 16px",
				opacity: .6
			}
		}), b("#yith-wcwl-form").load(yith_wcwl_l10n.ajax_url + " #yith-wcwl-form", d, function () {
			"undefined" != typeof b.fn.unblock && c.stop(!0).css("opacity", "1").unblock();
			n();
			b("body").trigger("moved_to_another_wishlist", [a, f])
		}))
	}

	function t(a) {
		var c = b(this);
		a.preventDefault();
		c.parents(".wishlist-title").next().show();
		c.parents(".wishlist-title").hide()
	}

	function A(a) {
		var c = b(this);
		a.preventDefault();
		c.parents(".hidden-title-form").hide();
		c.parents(".hidden-title-form").prev().show()
	}

	function r() {
		if (navigator.cookieEnabled) return !0;
		document.cookie = "cookietest=1";
		var a = -1 != document.cookie.indexOf("cookietest=");
		document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
		return a
	}

	function B() {
		if (0 != b(".yith-wcwl-add-to-wishlist").length && 0 == b("#yith-wcwl-popup-message").length) {
			var a = b("<div>").attr("id", "yith-wcwl-message");
			a = b("<div>").attr("id", "yith-wcwl-popup-message").html(a).hide();
			b("body").prepend(a)
		}
	}

	function p() {
		k.on("change", function () {
			var a = "",
				c = b(this).parents(".cart.wishlist_table"),
				d = c.data("id");
			c = c.data("token");
			var e = document.URL;
			k.filter(":checked").each(function () {
				var d = b(this);
				a += 0 != a.length ? "," : "";
				a += d.parents("[data-row-id]").data("row-id")
			});
			e = q(e, "wishlist_products_to_add_to_cart", a);
			e = q(e, "wishlist_token", c);
			e = q(e, "wishlist_id", d);
			b("#custom_add_to_cart").attr("href", e)
		})
	}

	function l() {
		"undefined" != typeof b.prettyPhoto && b('a[data-rel^="prettyPhoto[add_to_wishlist_"]').add('a[data-rel="prettyPhoto[ask_an_estimate]"]').unbind("click").prettyPhoto({
			hook: "data-rel",
			social_tools: !1,
			theme: "pp_woocommerce",
			horizontal_padding: 20,
			opacity: .8,
			deeplinking: !1
		})
	}

	function q(a, b, d) {
		d = b + "=" + d;
		a = a.replace(new RegExp("(&|\\?)" + b + "=[^&]*"), "$1" + d); - 1 < a.indexOf(b + "=") || (a = -1 < a.indexOf("?") ? a + ("&" + d) : a + ("?" + d));
		return a
	}
	var C = "undefined" !== typeof wc_add_to_cart_params && null !== wc_add_to_cart_params ? wc_add_to_cart_params.cart_redirect_after_add : "",
		k = b('.wishlist_table tbody input[type="checkbox"]:not(:disabled)');
	b(document).on("yith_wcwl_init", function () {
		var a = b(this),
			c = b('.wishlist_table tbody input[type="checkbox"]:not(:disabled)');
		a.on("click", ".add_to_wishlist", function (a) {
			var d = b(this);
			a.preventDefault();
			v(d);
			return !1
		});
		a.on("click", ".remove_from_wishlist", function (a) {
			var d = b(this);
			a.preventDefault();
			x(d);
			return !1
		});
		a.on("adding_to_cart", "body", function (a, b, c) {
			"undefined" != typeof b && "undefined" != typeof c && 0 != b.closest(".wishlist_table").length && (c.remove_from_wishlist_after_add_to_cart = b.closest("[data-row-id]").data("row-id"), c.wishlist_id = b.closest(".wishlist_table").data("id"), wc_add_to_cart_params.cart_redirect_after_add = yith_wcwl_l10n.redirect_to_cart)
		});
		a.on("added_to_cart", "body", function (a) {
			wc_add_to_cart_params.cart_redirect_after_add = C;
			a = b(".wishlist_table");
			a.find(".added").removeClass("added");
			a.find(".added_to_cart").remove()
		});
		a.on("added_to_cart", "body", u);
		a.on("cart_page_refreshed", "body", n);
		a.on("click", ".show-title-form", t);
		a.on("click", ".wishlist-title-with-form h2", t);
		a.on("click", ".hide-title-form", A);
		a.on("change", ".change-wishlist", function (a) {
			a = b(this);
			z(a);
			return !1
		});
		a.on("change", ".yith-wcwl-popup-content .wishlist-select", function (a) {
			a = b(this);
			"new" == a.val() ? a.parents(".yith-wcwl-first-row").next(".yith-wcwl-second-row").css("display", "table-row") : a.parents(".yith-wcwl-first-row").next(".yith-wcwl-second-row").hide()
		});
		a.on("change", "#bulk_add_to_cart", function () {
			b(this).is(":checked") ? c.attr("checked", "checked").change() : c.removeAttr("checked").change()
		});
		a.on("click", "#custom_add_to_cart", function (a) {
			var d = b(this),
				f = d.parents(".cart.wishlist_table");
			yith_wcwl_l10n.ajax_add_to_cart_enabled && (a.preventDefault(), "undefined" != typeof b.fn.block && f.fadeTo("400", "0.6").block({
				message: null,
				overlayCSS: {
					background: "transparent url(" + yith_wcwl_l10n.ajax_loader_url + ") no-repeat center",
					backgroundSize: "16px 16px",
					opacity: .6
				}
			}), b("#yith-wcwl-form").load(yith_wcwl_l10n.ajax_url + d.attr("href") + " #yith-wcwl-form", {
				action: yith_wcwl_l10n.actions.bulk_add_to_cart_action
			}, function () {
				"undefined" != typeof b.fn.unblock && f.stop(!0).css("opacity", "1").unblock();
				c.off("change");
				c = b('.wishlist_table tbody input[type="checkbox"]');
				"undefined" != typeof b.fn.selectBox && b("select.selectBox").selectBox();
				p();
				l()
			}))
		});
		a.on("click", ".yith-wfbt-add-wishlist", function (a) {
			a.preventDefault();
			a = b(this);
			var c = b("#yith-wcwl-form");
			b("html, body").animate({
				scrollTop: c.offset().top
			}, 500);
			y(a, c)
		});
		B();
		p();
		l()
	}).trigger("yith_wcwl_init");
	b(document).on("yith_infs_added_elem", function () {
		l()
	});
	"undefined" != typeof b.fn.selectBox && b("select.selectBox").selectBox()
});

(function () {
	function n(n) {
		function t(t, r, e, u, i, o) {
			for (; i >= 0 && o > i; i += n) {
				var a = u ? u[i] : i;
				e = r(e, t[a], a, t)
			}
			return e
		}
		return function (r, e, u, i) {
			e = b(e, i, 4);
			var o = !k(r) && m.keys(r),
				a = (o || r).length,
				c = n > 0 ? 0 : a - 1;
			return arguments.length < 3 && (u = r[o ? o[c] : c], c += n), t(r, e, u, o, c, a)
		}
	}

	function t(n) {
		return function (t, r, e) {
			r = x(r, e);
			for (var u = O(t), i = n > 0 ? 0 : u - 1; i >= 0 && u > i; i += n)
				if (r(t[i], i, t)) return i;
			return -1
		}
	}

	function r(n, t, r) {
		return function (e, u, i) {
			var o = 0,
				a = O(e);
			if ("number" == typeof i) n > 0 ? o = i >= 0 ? i : Math.max(i + a, o) : a = i >= 0 ? Math.min(i + 1, a) : i + a + 1;
			else if (r && i && a) return i = r(e, u), e[i] === u ? i : -1;
			if (u !== u) return i = t(l.call(e, o, a), m.isNaN), i >= 0 ? i + o : -1;
			for (i = n > 0 ? o : a - 1; i >= 0 && a > i; i += n)
				if (e[i] === u) return i;
			return -1
		}
	}

	function e(n, t) {
		var r = I.length,
			e = n.constructor,
			u = m.isFunction(e) && e.prototype || a,
			i = "constructor";
		for (m.has(n, i) && !m.contains(t, i) && t.push(i); r--;) i = I[r], i in n && n[i] !== u[i] && !m.contains(t, i) && t.push(i)
	}
	var u = this,
		i = u._,
		o = Array.prototype,
		a = Object.prototype,
		c = Function.prototype,
		f = o.push,
		l = o.slice,
		s = a.toString,
		p = a.hasOwnProperty,
		h = Array.isArray,
		v = Object.keys,
		g = c.bind,
		y = Object.create,
		d = function () {},
		m = function (n) {
			return n instanceof m ? n : this instanceof m ? void(this._wrapped = n) : new m(n)
		};
	"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), exports._ = m) : u._ = m, m.VERSION = "1.8.3";
	var b = function (n, t, r) {
			if (t === void 0) return n;
			switch (null == r ? 3 : r) {
				case 1:
					return function (r) {
						return n.call(t, r)
					};
				case 2:
					return function (r, e) {
						return n.call(t, r, e)
					};
				case 3:
					return function (r, e, u) {
						return n.call(t, r, e, u)
					};
				case 4:
					return function (r, e, u, i) {
						return n.call(t, r, e, u, i)
					}
			}
			return function () {
				return n.apply(t, arguments)
			}
		},
		x = function (n, t, r) {
			return null == n ? m.identity : m.isFunction(n) ? b(n, t, r) : m.isObject(n) ? m.matcher(n) : m.property(n)
		};
	m.iteratee = function (n, t) {
		return x(n, t, 1 / 0)
	};
	var _ = function (n, t) {
			return function (r) {
				var e = arguments.length;
				if (2 > e || null == r) return r;
				for (var u = 1; e > u; u++)
					for (var i = arguments[u], o = n(i), a = o.length, c = 0; a > c; c++) {
						var f = o[c];
						t && r[f] !== void 0 || (r[f] = i[f])
					}
				return r
			}
		},
		j = function (n) {
			if (!m.isObject(n)) return {};
			if (y) return y(n);
			d.prototype = n;
			var t = new d;
			return d.prototype = null, t
		},
		w = function (n) {
			return function (t) {
				return null == t ? void 0 : t[n]
			}
		},
		A = Math.pow(2, 53) - 1,
		O = w("length"),
		k = function (n) {
			var t = O(n);
			return "number" == typeof t && t >= 0 && A >= t
		};
	m.each = m.forEach = function (n, t, r) {
		t = b(t, r);
		var e, u;
		if (k(n))
			for (e = 0, u = n.length; u > e; e++) t(n[e], e, n);
		else {
			var i = m.keys(n);
			for (e = 0, u = i.length; u > e; e++) t(n[i[e]], i[e], n)
		}
		return n
	}, m.map = m.collect = function (n, t, r) {
		t = x(t, r);
		for (var e = !k(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; u > o; o++) {
			var a = e ? e[o] : o;
			i[o] = t(n[a], a, n)
		}
		return i
	}, m.reduce = m.foldl = m.inject = n(1), m.reduceRight = m.foldr = n(-1), m.find = m.detect = function (n, t, r) {
		var e;
		return e = k(n) ? m.findIndex(n, t, r) : m.findKey(n, t, r), e !== void 0 && e !== -1 ? n[e] : void 0
	}, m.filter = m.select = function (n, t, r) {
		var e = [];
		return t = x(t, r), m.each(n, function (n, r, u) {
			t(n, r, u) && e.push(n)
		}), e
	}, m.reject = function (n, t, r) {
		return m.filter(n, m.negate(x(t)), r)
	}, m.every = m.all = function (n, t, r) {
		t = x(t, r);
		for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
			var o = e ? e[i] : i;
			if (!t(n[o], o, n)) return !1
		}
		return !0
	}, m.some = m.any = function (n, t, r) {
		t = x(t, r);
		for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
			var o = e ? e[i] : i;
			if (t(n[o], o, n)) return !0
		}
		return !1
	}, m.contains = m.includes = m.include = function (n, t, r, e) {
		return k(n) || (n = m.values(n)), ("number" != typeof r || e) && (r = 0), m.indexOf(n, t, r) >= 0
	}, m.invoke = function (n, t) {
		var r = l.call(arguments, 2),
			e = m.isFunction(t);
		return m.map(n, function (n) {
			var u = e ? t : n[t];
			return null == u ? u : u.apply(n, r)
		})
	}, m.pluck = function (n, t) {
		return m.map(n, m.property(t))
	}, m.where = function (n, t) {
		return m.filter(n, m.matcher(t))
	}, m.findWhere = function (n, t) {
		return m.find(n, m.matcher(t))
	}, m.max = function (n, t, r) {
		var e, u, i = -1 / 0,
			o = -1 / 0;
		if (null == t && null != n) {
			n = k(n) ? n : m.values(n);
			for (var a = 0, c = n.length; c > a; a++) e = n[a], e > i && (i = e)
		} else t = x(t, r), m.each(n, function (n, r, e) {
			u = t(n, r, e), (u > o || u === -1 / 0 && i === -1 / 0) && (i = n, o = u)
		});
		return i
	}, m.min = function (n, t, r) {
		var e, u, i = 1 / 0,
			o = 1 / 0;
		if (null == t && null != n) {
			n = k(n) ? n : m.values(n);
			for (var a = 0, c = n.length; c > a; a++) e = n[a], i > e && (i = e)
		} else t = x(t, r), m.each(n, function (n, r, e) {
			u = t(n, r, e), (o > u || 1 / 0 === u && 1 / 0 === i) && (i = n, o = u)
		});
		return i
	}, m.shuffle = function (n) {
		for (var t, r = k(n) ? n : m.values(n), e = r.length, u = Array(e), i = 0; e > i; i++) t = m.random(0, i), t !== i && (u[i] = u[t]), u[t] = r[i];
		return u
	}, m.sample = function (n, t, r) {
		return null == t || r ? (k(n) || (n = m.values(n)), n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, t))
	}, m.sortBy = function (n, t, r) {
		return t = x(t, r), m.pluck(m.map(n, function (n, r, e) {
			return {
				value: n,
				index: r,
				criteria: t(n, r, e)
			}
		}).sort(function (n, t) {
			var r = n.criteria,
				e = t.criteria;
			if (r !== e) {
				if (r > e || r === void 0) return 1;
				if (e > r || e === void 0) return -1
			}
			return n.index - t.index
		}), "value")
	};
	var F = function (n) {
		return function (t, r, e) {
			var u = {};
			return r = x(r, e), m.each(t, function (e, i) {
				var o = r(e, i, t);
				n(u, e, o)
			}), u
		}
	};
	m.groupBy = F(function (n, t, r) {
		m.has(n, r) ? n[r].push(t) : n[r] = [t]
	}), m.indexBy = F(function (n, t, r) {
		n[r] = t
	}), m.countBy = F(function (n, t, r) {
		m.has(n, r) ? n[r]++ : n[r] = 1
	}), m.toArray = function (n) {
		return n ? m.isArray(n) ? l.call(n) : k(n) ? m.map(n, m.identity) : m.values(n) : []
	}, m.size = function (n) {
		return null == n ? 0 : k(n) ? n.length : m.keys(n).length
	}, m.partition = function (n, t, r) {
		t = x(t, r);
		var e = [],
			u = [];
		return m.each(n, function (n, r, i) {
			(t(n, r, i) ? e : u).push(n)
		}), [e, u]
	}, m.first = m.head = m.take = function (n, t, r) {
		return null == n ? void 0 : null == t || r ? n[0] : m.initial(n, n.length - t)
	}, m.initial = function (n, t, r) {
		return l.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)))
	}, m.last = function (n, t, r) {
		return null == n ? void 0 : null == t || r ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - t))
	}, m.rest = m.tail = m.drop = function (n, t, r) {
		return l.call(n, null == t || r ? 1 : t)
	}, m.compact = function (n) {
		return m.filter(n, m.identity)
	};
	var S = function (n, t, r, e) {
		for (var u = [], i = 0, o = e || 0, a = O(n); a > o; o++) {
			var c = n[o];
			if (k(c) && (m.isArray(c) || m.isArguments(c))) {
				t || (c = S(c, t, r));
				var f = 0,
					l = c.length;
				for (u.length += l; l > f;) u[i++] = c[f++]
			} else r || (u[i++] = c)
		}
		return u
	};
	m.flatten = function (n, t) {
		return S(n, t, !1)
	}, m.without = function (n) {
		return m.difference(n, l.call(arguments, 1))
	}, m.uniq = m.unique = function (n, t, r, e) {
		m.isBoolean(t) || (e = r, r = t, t = !1), null != r && (r = x(r, e));
		for (var u = [], i = [], o = 0, a = O(n); a > o; o++) {
			var c = n[o],
				f = r ? r(c, o, n) : c;
			t ? (o && i === f || u.push(c), i = f) : r ? m.contains(i, f) || (i.push(f), u.push(c)) : m.contains(u, c) || u.push(c)
		}
		return u
	}, m.union = function () {
		return m.uniq(S(arguments, !0, !0))
	}, m.intersection = function (n) {
		for (var t = [], r = arguments.length, e = 0, u = O(n); u > e; e++) {
			var i = n[e];
			if (!m.contains(t, i)) {
				for (var o = 1; r > o && m.contains(arguments[o], i); o++);
				o === r && t.push(i)
			}
		}
		return t
	}, m.difference = function (n) {
		var t = S(arguments, !0, !0, 1);
		return m.filter(n, function (n) {
			return !m.contains(t, n)
		})
	}, m.zip = function () {
		return m.unzip(arguments)
	}, m.unzip = function (n) {
		for (var t = n && m.max(n, O).length || 0, r = Array(t), e = 0; t > e; e++) r[e] = m.pluck(n, e);
		return r
	}, m.object = function (n, t) {
		for (var r = {}, e = 0, u = O(n); u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
		return r
	}, m.findIndex = t(1), m.findLastIndex = t(-1), m.sortedIndex = function (n, t, r, e) {
		r = x(r, e, 1);
		for (var u = r(t), i = 0, o = O(n); o > i;) {
			var a = Math.floor((i + o) / 2);
			r(n[a]) < u ? i = a + 1 : o = a
		}
		return i
	}, m.indexOf = r(1, m.findIndex, m.sortedIndex), m.lastIndexOf = r(-1, m.findLastIndex), m.range = function (n, t, r) {
		null == t && (t = n || 0, n = 0), r = r || 1;
		for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; e > i; i++, n += r) u[i] = n;
		return u
	};
	var E = function (n, t, r, e, u) {
		if (!(e instanceof t)) return n.apply(r, u);
		var i = j(n.prototype),
			o = n.apply(i, u);
		return m.isObject(o) ? o : i
	};
	m.bind = function (n, t) {
		if (g && n.bind === g) return g.apply(n, l.call(arguments, 1));
		if (!m.isFunction(n)) throw new TypeError("Bind must be called on a function");
		var r = l.call(arguments, 2),
			e = function () {
				return E(n, e, t, this, r.concat(l.call(arguments)))
			};
		return e
	}, m.partial = function (n) {
		var t = l.call(arguments, 1),
			r = function () {
				for (var e = 0, u = t.length, i = Array(u), o = 0; u > o; o++) i[o] = t[o] === m ? arguments[e++] : t[o];
				for (; e < arguments.length;) i.push(arguments[e++]);
				return E(n, r, this, this, i)
			};
		return r
	}, m.bindAll = function (n) {
		var t, r, e = arguments.length;
		if (1 >= e) throw new Error("bindAll must be passed function names");
		for (t = 1; e > t; t++) r = arguments[t], n[r] = m.bind(n[r], n);
		return n
	}, m.memoize = function (n, t) {
		var r = function (e) {
			var u = r.cache,
				i = "" + (t ? t.apply(this, arguments) : e);
			return m.has(u, i) || (u[i] = n.apply(this, arguments)), u[i]
		};
		return r.cache = {}, r
	}, m.delay = function (n, t) {
		var r = l.call(arguments, 2);
		return setTimeout(function () {
			return n.apply(null, r)
		}, t)
	}, m.defer = m.partial(m.delay, m, 1), m.throttle = function (n, t, r) {
		var e, u, i, o = null,
			a = 0;
		r || (r = {});
		var c = function () {
			a = r.leading === !1 ? 0 : m.now(), o = null, i = n.apply(e, u), o || (e = u = null)
		};
		return function () {
			var f = m.now();
			a || r.leading !== !1 || (a = f);
			var l = t - (f - a);
			return e = this, u = arguments, 0 >= l || l > t ? (o && (clearTimeout(o), o = null), a = f, i = n.apply(e, u), o || (e = u = null)) : o || r.trailing === !1 || (o = setTimeout(c, l)), i
		}
	}, m.debounce = function (n, t, r) {
		var e, u, i, o, a, c = function () {
			var f = m.now() - o;
			t > f && f >= 0 ? e = setTimeout(c, t - f) : (e = null, r || (a = n.apply(i, u), e || (i = u = null)))
		};
		return function () {
			i = this, u = arguments, o = m.now();
			var f = r && !e;
			return e || (e = setTimeout(c, t)), f && (a = n.apply(i, u), i = u = null), a
		}
	}, m.wrap = function (n, t) {
		return m.partial(t, n)
	}, m.negate = function (n) {
		return function () {
			return !n.apply(this, arguments)
		}
	}, m.compose = function () {
		var n = arguments,
			t = n.length - 1;
		return function () {
			for (var r = t, e = n[t].apply(this, arguments); r--;) e = n[r].call(this, e);
			return e
		}
	}, m.after = function (n, t) {
		return function () {
			return --n < 1 ? t.apply(this, arguments) : void 0
		}
	}, m.before = function (n, t) {
		var r;
		return function () {
			return --n > 0 && (r = t.apply(this, arguments)), 1 >= n && (t = null), r
		}
	}, m.once = m.partial(m.before, 2);
	var M = !{
			toString: null
		}.propertyIsEnumerable("toString"),
		I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
	m.keys = function (n) {
		if (!m.isObject(n)) return [];
		if (v) return v(n);
		var t = [];
		for (var r in n) m.has(n, r) && t.push(r);
		return M && e(n, t), t
	}, m.allKeys = function (n) {
		if (!m.isObject(n)) return [];
		var t = [];
		for (var r in n) t.push(r);
		return M && e(n, t), t
	}, m.values = function (n) {
		for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = n[t[u]];
		return e
	}, m.mapObject = function (n, t, r) {
		t = x(t, r);
		for (var e, u = m.keys(n), i = u.length, o = {}, a = 0; i > a; a++) e = u[a], o[e] = t(n[e], e, n);
		return o
	}, m.pairs = function (n) {
		for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = [t[u], n[t[u]]];
		return e
	}, m.invert = function (n) {
		for (var t = {}, r = m.keys(n), e = 0, u = r.length; u > e; e++) t[n[r[e]]] = r[e];
		return t
	}, m.functions = m.methods = function (n) {
		var t = [];
		for (var r in n) m.isFunction(n[r]) && t.push(r);
		return t.sort()
	}, m.extend = _(m.allKeys), m.extendOwn = m.assign = _(m.keys), m.findKey = function (n, t, r) {
		t = x(t, r);
		for (var e, u = m.keys(n), i = 0, o = u.length; o > i; i++)
			if (e = u[i], t(n[e], e, n)) return e
	}, m.pick = function (n, t, r) {
		var e, u, i = {},
			o = n;
		if (null == o) return i;
		m.isFunction(t) ? (u = m.allKeys(o), e = b(t, r)) : (u = S(arguments, !1, !1, 1), e = function (n, t, r) {
			return t in r
		}, o = Object(o));
		for (var a = 0, c = u.length; c > a; a++) {
			var f = u[a],
				l = o[f];
			e(l, f, o) && (i[f] = l)
		}
		return i
	}, m.omit = function (n, t, r) {
		if (m.isFunction(t)) t = m.negate(t);
		else {
			var e = m.map(S(arguments, !1, !1, 1), String);
			t = function (n, t) {
				return !m.contains(e, t)
			}
		}
		return m.pick(n, t, r)
	}, m.defaults = _(m.allKeys, !0), m.create = function (n, t) {
		var r = j(n);
		return t && m.extendOwn(r, t), r
	}, m.clone = function (n) {
		return m.isObject(n) ? m.isArray(n) ? n.slice() : m.extend({}, n) : n
	}, m.tap = function (n, t) {
		return t(n), n
	}, m.isMatch = function (n, t) {
		var r = m.keys(t),
			e = r.length;
		if (null == n) return !e;
		for (var u = Object(n), i = 0; e > i; i++) {
			var o = r[i];
			if (t[o] !== u[o] || !(o in u)) return !1
		}
		return !0
	};
	var N = function (n, t, r, e) {
		if (n === t) return 0 !== n || 1 / n === 1 / t;
		if (null == n || null == t) return n === t;
		n instanceof m && (n = n._wrapped), t instanceof m && (t = t._wrapped);
		var u = s.call(n);
		if (u !== s.call(t)) return !1;
		switch (u) {
			case "[object RegExp]":
			case "[object String]":
				return "" + n == "" + t;
			case "[object Number]":
				return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t;
			case "[object Date]":
			case "[object Boolean]":
				return +n === +t
		}
		var i = "[object Array]" === u;
		if (!i) {
			if ("object" != typeof n || "object" != typeof t) return !1;
			var o = n.constructor,
				a = t.constructor;
			if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in t) return !1
		}
		r = r || [], e = e || [];
		for (var c = r.length; c--;)
			if (r[c] === n) return e[c] === t;
		if (r.push(n), e.push(t), i) {
			if (c = n.length, c !== t.length) return !1;
			for (; c--;)
				if (!N(n[c], t[c], r, e)) return !1
		} else {
			var f, l = m.keys(n);
			if (c = l.length, m.keys(t).length !== c) return !1;
			for (; c--;)
				if (f = l[c], !m.has(t, f) || !N(n[f], t[f], r, e)) return !1
		}
		return r.pop(), e.pop(), !0
	};
	m.isEqual = function (n, t) {
		return N(n, t)
	}, m.isEmpty = function (n) {
		return null == n ? !0 : k(n) && (m.isArray(n) || m.isString(n) || m.isArguments(n)) ? 0 === n.length : 0 === m.keys(n).length
	}, m.isElement = function (n) {
		return !(!n || 1 !== n.nodeType)
	}, m.isArray = h || function (n) {
		return "[object Array]" === s.call(n)
	}, m.isObject = function (n) {
		var t = typeof n;
		return "function" === t || "object" === t && !!n
	}, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (n) {
		m["is" + n] = function (t) {
			return s.call(t) === "[object " + n + "]"
		}
	}), m.isArguments(arguments) || (m.isArguments = function (n) {
		return m.has(n, "callee")
	}), "function" != typeof /./ && "object" != typeof Int8Array && (m.isFunction = function (n) {
		return "function" == typeof n || !1
	}), m.isFinite = function (n) {
		return isFinite(n) && !isNaN(parseFloat(n))
	}, m.isNaN = function (n) {
		return m.isNumber(n) && n !== +n
	}, m.isBoolean = function (n) {
		return n === !0 || n === !1 || "[object Boolean]" === s.call(n)
	}, m.isNull = function (n) {
		return null === n
	}, m.isUndefined = function (n) {
		return n === void 0
	}, m.has = function (n, t) {
		return null != n && p.call(n, t)
	}, m.noConflict = function () {
		return u._ = i, this
	}, m.identity = function (n) {
		return n
	}, m.constant = function (n) {
		return function () {
			return n
		}
	}, m.noop = function () {}, m.property = w, m.propertyOf = function (n) {
		return null == n ? function () {} : function (t) {
			return n[t]
		}
	}, m.matcher = m.matches = function (n) {
		return n = m.extendOwn({}, n),
			function (t) {
				return m.isMatch(t, n)
			}
	}, m.times = function (n, t, r) {
		var e = Array(Math.max(0, n));
		t = b(t, r, 1);
		for (var u = 0; n > u; u++) e[u] = t(u);
		return e
	}, m.random = function (n, t) {
		return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
	}, m.now = Date.now || function () {
		return (new Date).getTime()
	};
	var B = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#x27;",
			"`": "&#x60;"
		},
		T = m.invert(B),
		R = function (n) {
			var t = function (t) {
					return n[t]
				},
				r = "(?:" + m.keys(n).join("|") + ")",
				e = RegExp(r),
				u = RegExp(r, "g");
			return function (n) {
				return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, t) : n
			}
		};
	m.escape = R(B), m.unescape = R(T), m.result = function (n, t, r) {
		var e = null == n ? void 0 : n[t];
		return e === void 0 && (e = r), m.isFunction(e) ? e.call(n) : e
	};
	var q = 0;
	m.uniqueId = function (n) {
		var t = ++q + "";
		return n ? n + t : t
	}, m.templateSettings = {
		evaluate: /<%([\s\S]+?)%>/g,
		interpolate: /<%=([\s\S]+?)%>/g,
		escape: /<%-([\s\S]+?)%>/g
	};
	var K = /(.)^/,
		z = {
			"'": "'",
			"\\": "\\",
			"\r": "r",
			"\n": "n",
			"\u2028": "u2028",
			"\u2029": "u2029"
		},
		D = /\\|'|\r|\n|\u2028|\u2029/g,
		L = function (n) {
			return "\\" + z[n]
		};
	m.template = function (n, t, r) {
		!t && r && (t = r), t = m.defaults({}, t, m.templateSettings);
		var e = RegExp([(t.escape || K).source, (t.interpolate || K).source, (t.evaluate || K).source].join("|") + "|$", "g"),
			u = 0,
			i = "__p+='";
		n.replace(e, function (t, r, e, o, a) {
			return i += n.slice(u, a).replace(D, L), u = a + t.length, r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"), t
		}), i += "';\n", t.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
		try {
			var o = new Function(t.variable || "obj", "_", i)
		} catch (a) {
			throw a.source = i, a
		}
		var c = function (n) {
				return o.call(this, n, m)
			},
			f = t.variable || "obj";
		return c.source = "function(" + f + "){\n" + i + "}", c
	}, m.chain = function (n) {
		var t = m(n);
		return t._chain = !0, t
	};
	var P = function (n, t) {
		return n._chain ? m(t).chain() : t
	};
	m.mixin = function (n) {
		m.each(m.functions(n), function (t) {
			var r = m[t] = n[t];
			m.prototype[t] = function () {
				var n = [this._wrapped];
				return f.apply(n, arguments), P(this, r.apply(m, n))
			}
		})
	}, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (n) {
		var t = o[n];
		m.prototype[n] = function () {
			var r = this._wrapped;
			return t.apply(r, arguments), "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0], P(this, r)
		}
	}), m.each(["concat", "join", "slice"], function (n) {
		var t = o[n];
		m.prototype[n] = function () {
			return P(this, t.apply(this._wrapped, arguments))
		}
	}), m.prototype.value = function () {
		return this._wrapped
	}, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function () {
		return "" + this._wrapped
	}, "function" == typeof define && define.amd && define("underscore", [], function () {
		return m
	})
}).call(this);
window.wp = window.wp || {},
	function (a) {
		var b = "undefined" == typeof _wpUtilSettings ? {} : _wpUtilSettings;
		wp.template = _.memoize(function (b) {
			var c, d = {
				evaluate: /<#([\s\S]+?)#>/g,
				interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
				escape: /\{\{([^\}]+?)\}\}(?!\})/g,
				variable: "data"
			};
			return function (e) {
				return (c = c || _.template(a("#tmpl-" + b).html(), d))(e)
			}
		}), wp.ajax = {
			settings: b.ajax || {},
			post: function (a, b) {
				return wp.ajax.send({
					data: _.isObject(a) ? a : _.extend(b || {}, {
						action: a
					})
				})
			},
			send: function (b, c) {
				var d, e;
				return _.isObject(b) ? c = b : (c = c || {}, c.data = _.extend(c.data || {}, {
					action: b
				})), c = _.defaults(c || {}, {
					type: "POST",
					url: wp.ajax.settings.url,
					context: this
				}), e = a.Deferred(function (b) {
					c.success && b.done(c.success), c.error && b.fail(c.error), delete c.success, delete c.error, b.jqXHR = a.ajax(c).done(function (a) {
						"1" !== a && 1 !== a || (a = {
							success: !0
						}), _.isObject(a) && !_.isUndefined(a.success) ? b[a.success ? "resolveWith" : "rejectWith"](this, [a.data]) : b.rejectWith(this, [a])
					}).fail(function () {
						b.rejectWith(this, arguments)
					})
				}), d = e.promise(), d.abort = function () {
					return e.jqXHR.abort(), this
				}, d
			}
		}
	}(jQuery);
! function (t, a, i, e) {
	var r = function (t) {
		this.$form = t, this.$attributeFields = t.find(".variations select"), this.$singleVariation = t.find(".single_variation"), this.$singleVariationWrap = t.find(".single_variation_wrap"), this.$resetVariations = t.find(".reset_variations"), this.$product = t.closest(".product"), this.variationData = t.data("product_variations"), this.useAjax = !1 === this.variationData, this.xhr = !1, this.loading = !0, this.$singleVariationWrap.show(), this.$form.off(".wc-variation-form"), this.getChosenAttributes = this.getChosenAttributes.bind(this), this.findMatchingVariations = this.findMatchingVariations.bind(this), this.isMatch = this.isMatch.bind(this), this.toggleResetLink = this.toggleResetLink.bind(this), t.on("click.wc-variation-form", ".reset_variations", {
			variationForm: this
		}, this.onReset), t.on("reload_product_variations", {
			variationForm: this
		}, this.onReload), t.on("hide_variation", {
			variationForm: this
		}, this.onHide), t.on("show_variation", {
			variationForm: this
		}, this.onShow), t.on("click", ".single_add_to_cart_button", {
			variationForm: this
		}, this.onAddToCart), t.on("reset_data", {
			variationForm: this
		}, this.onResetDisplayedVariation), t.on("reset_image", {
			variationForm: this
		}, this.onResetImage), t.on("change.wc-variation-form", ".variations select", {
			variationForm: this
		}, this.onChange), t.on("found_variation.wc-variation-form", {
			variationForm: this
		}, this.onFoundVariation), t.on("check_variations.wc-variation-form", {
			variationForm: this
		}, this.onFindVariation), t.on("update_variation_values.wc-variation-form", {
			variationForm: this
		}, this.onUpdateAttributes), setTimeout(function () {
			t.trigger("check_variations"), t.trigger("wc_variation_form"), t.loading = !1
		}, 100)
	};
	r.prototype.onReset = function (t) {
		t.preventDefault(), t.data.variationForm.$attributeFields.val("").change(), t.data.variationForm.$form.trigger("reset_data")
	}, r.prototype.onReload = function (t) {
		var a = t.data.variationForm;
		a.variationData = a.$form.data("product_variations"), a.useAjax = !1 === a.variationData, a.$form.trigger("check_variations")
	}, r.prototype.onHide = function (t) {
		t.preventDefault(), t.data.variationForm.$form.find(".single_add_to_cart_button").removeClass("wc-variation-is-unavailable").addClass("disabled wc-variation-selection-needed"), t.data.variationForm.$form.find(".woocommerce-variation-add-to-cart").removeClass("woocommerce-variation-add-to-cart-enabled").addClass("woocommerce-variation-add-to-cart-disabled")
	}, r.prototype.onShow = function (t, a, i) {
		t.preventDefault(), i ? (t.data.variationForm.$form.find(".single_add_to_cart_button").removeClass("disabled wc-variation-selection-needed wc-variation-is-unavailable"), t.data.variationForm.$form.find(".woocommerce-variation-add-to-cart").removeClass("woocommerce-variation-add-to-cart-disabled").addClass("woocommerce-variation-add-to-cart-enabled")) : (t.data.variationForm.$form.find(".single_add_to_cart_button").removeClass("wc-variation-selection-needed").addClass("disabled wc-variation-is-unavailable"), t.data.variationForm.$form.find(".woocommerce-variation-add-to-cart").removeClass("woocommerce-variation-add-to-cart-enabled").addClass("woocommerce-variation-add-to-cart-disabled"))
	}, r.prototype.onAddToCart = function (i) {
		t(this).is(".disabled") && (i.preventDefault(), t(this).is(".wc-variation-is-unavailable") ? a.alert(wc_add_to_cart_variation_params.i18n_unavailable_text) : t(this).is(".wc-variation-selection-needed") && a.alert(wc_add_to_cart_variation_params.i18n_make_a_selection_text))
	}, r.prototype.onResetDisplayedVariation = function (t) {
		var a = t.data.variationForm;
		a.$product.find(".product_meta").find(".sku").wc_reset_content(), a.$product.find(".product_weight").wc_reset_content(), a.$product.find(".product_dimensions").wc_reset_content(), a.$form.trigger("reset_image"), a.$singleVariation.slideUp(200).trigger("hide_variation")
	}, r.prototype.onResetImage = function (t) {
		t.data.variationForm.$form.wc_variations_image_update(!1)
	}, r.prototype.onFindVariation = function (a) {
		var i = a.data.variationForm,
			e = i.getChosenAttributes(),
			r = e.data;
		if (e.count === e.chosenCount)
			if (i.useAjax) i.xhr && i.xhr.abort(), i.$form.block({
				message: null,
				overlayCSS: {
					background: "#fff",
					opacity: .6
				}
			}), r.product_id = parseInt(i.$form.data("product_id"), 10), r.custom_data = i.$form.data("custom_data"), i.xhr = t.ajax({
				url: wc_add_to_cart_variation_params.wc_ajax_url.toString().replace("%%endpoint%%", "get_variation"),
				type: "POST",
				data: r,
				success: function (t) {
					t ? i.$form.trigger("found_variation", [t]) : (i.$form.trigger("reset_data"), e.chosenCount = 0, i.loading || (i.$form.find(".single_variation").after('<p class="wc-no-matching-variations woocommerce-info">' + wc_add_to_cart_variation_params.i18n_no_matching_variations_text + "</p>"), i.$form.find(".wc-no-matching-variations").slideDown(200)))
				},
				complete: function () {
					i.$form.unblock()
				}
			});
			else {
				i.$form.trigger("update_variation_values");
				var o = i.findMatchingVariations(i.variationData, r).shift();
				o ? i.$form.trigger("found_variation", [o]) : (i.$form.trigger("reset_data"), e.chosenCount = 0, i.loading || (i.$form.find(".single_variation").after('<p class="wc-no-matching-variations woocommerce-info">' + wc_add_to_cart_variation_params.i18n_no_matching_variations_text + "</p>"), i.$form.find(".wc-no-matching-variations").slideDown(200)))
			}
		else i.$form.trigger("update_variation_values"), i.$form.trigger("reset_data");
		i.toggleResetLink(e.chosenCount > 0)
	}, r.prototype.onFoundVariation = function (a, i) {
		var e = a.data.variationForm,
			r = e.$product.find(".product_meta").find(".sku"),
			o = e.$product.find(".product_weight"),
			n = e.$product.find(".product_dimensions"),
			s = e.$singleVariationWrap.find(".quantity"),
			_ = !0,
			c = !1,
			d = "";
		i.sku ? r.wc_set_content(i.sku) : r.wc_reset_content(), i.weight ? o.wc_set_content(i.weight_html) : o.wc_reset_content(), i.dimensions ? n.wc_set_content(i.dimensions_html) : n.wc_reset_content(), e.$form.wc_variations_image_update(i), i.variation_is_visible ? (c = wp.template("variation-template"), i.variation_id) : c = wp.template("unavailable-variation-template"), d = (d = (d = c({
			variation: i
		})).replace("/*<![CDATA[*/", "")).replace("/*]]>*/", ""), e.$singleVariation.html(d), e.$form.find('input[name="variation_id"], input.variation_id').val(i.variation_id).change(), "yes" === i.is_sold_individually ? (s.find("input.qty").val("1").attr("min", "1").attr("max", ""), s.hide()) : (s.find("input.qty").attr("min", i.min_qty).attr("max", i.max_qty), s.show()), i.is_purchasable && i.is_in_stock && i.variation_is_visible || (_ = !1), t.trim(e.$singleVariation.text()) ? e.$singleVariation.slideDown(200).trigger("show_variation", [i, _]) : e.$singleVariation.show().trigger("show_variation", [i, _])
	}, r.prototype.onChange = function (a) {
		var i = a.data.variationForm;
		i.$form.find('input[name="variation_id"], input.variation_id').val("").change(), i.$form.find(".wc-no-matching-variations").remove(), i.useAjax ? i.$form.trigger("check_variations") : (i.$form.trigger("woocommerce_variation_select_change"), i.$form.trigger("check_variations"), t(this).blur()), i.$form.trigger("woocommerce_variation_has_changed")
	}, r.prototype.addSlashes = function (t) {
		return t = t.replace(/'/g, "\\'"), t = t.replace(/"/g, '\\"')
	}, r.prototype.onUpdateAttributes = function (a) {
		var i = a.data.variationForm,
			e = i.getChosenAttributes().data;
		i.useAjax || (i.$attributeFields.each(function (a, r) {
			var o = t(r),
				n = o.data("attribute_name") || o.attr("name"),
				s = t(r).data("show_option_none"),
				_ = ":gt(0)",
				c = 0,
				d = t("<select/>"),
				m = o.val() || "",
				v = !0;
			if (!o.data("attribute_html")) {
				var l = o.clone();
				l.find("option").removeAttr("disabled attached").removeAttr("selected"), o.data("attribute_options", l.find("option" + _).get()), o.data("attribute_html", l.html())
			}
			d.html(o.data("attribute_html"));
			var g = t.extend(!0, {}, e);
			g[n] = "";
			var h = i.findMatchingVariations(i.variationData, g);
			for (var f in h)
				if ("undefined" != typeof h[f]) {
					var u = h[f].attributes;
					for (var p in u)
						if (u.hasOwnProperty(p)) {
							var w = u[p],
								b = "";
							p === n && (h[f].variation_is_active && (b = "enabled"), w ? (w = t("<div/>").html(w).text(), d.find('option[value="' + i.addSlashes(w) + '"]').addClass("attached " + b)) : d.find("option:gt(0)").addClass("attached " + b))
						}
				} c = d.find("option.attached").length, !m || 0 !== c && 0 !== d.find('option.attached.enabled[value="' + i.addSlashes(m) + '"]').length || (v = !1), c > 0 && m && v && "no" === s && (d.find("option:first").remove(), _ = ""), d.find("option" + _ + ":not(.attached)").remove(), o.html(d.html()), o.find("option" + _ + ":not(.enabled)").prop("disabled", !0), m ? v ? o.val(m) : o.val("").change() : o.val("")
		}), i.$form.trigger("woocommerce_update_variation_values"))
	}, r.prototype.getChosenAttributes = function () {
		var a = {},
			i = 0,
			e = 0;
		return this.$attributeFields.each(function () {
			var r = t(this).data("attribute_name") || t(this).attr("name"),
				o = t(this).val() || "";
			o.length > 0 && e++, i++, a[r] = o
		}), {
			count: i,
			chosenCount: e,
			data: a
		}
	}, r.prototype.findMatchingVariations = function (t, a) {
		for (var i = [], e = 0; e < t.length; e++) {
			var r = t[e];
			this.isMatch(r.attributes, a) && i.push(r)
		}
		return i
	}, r.prototype.isMatch = function (t, a) {
		var i = !0;
		for (var e in t)
			if (t.hasOwnProperty(e)) {
				var r = t[e],
					o = a[e];
				void 0 !== r && void 0 !== o && 0 !== r.length && 0 !== o.length && r !== o && (i = !1)
			} return i
	}, r.prototype.toggleResetLink = function (t) {
		t ? "hidden" === this.$resetVariations.css("visibility") && this.$resetVariations.css("visibility", "visible").hide().fadeIn() : this.$resetVariations.css("visibility", "hidden")
	}, t.fn.wc_variation_form = function () {
		return new r(this), this
	}, t.fn.wc_set_content = function (t) {
		void 0 === this.attr("data-o_content") && this.attr("data-o_content", this.text()), this.text(t)
	}, t.fn.wc_reset_content = function () {
		void 0 !== this.attr("data-o_content") && this.text(this.attr("data-o_content"))
	}, t.fn.wc_set_variation_attr = function (t, a) {
		void 0 === this.attr("data-o_" + t) && this.attr("data-o_" + t, this.attr(t) ? this.attr(t) : ""), !1 === a ? this.removeAttr(t) : this.attr(t, a)
	}, t.fn.wc_reset_variation_attr = function (t) {
		void 0 !== this.attr("data-o_" + t) && this.attr(t, this.attr("data-o_" + t))
	}, t.fn.wc_maybe_trigger_slide_position_reset = function (a) {
		var i = t(this),
			e = i.closest(".product").find(".images"),
			r = !1,
			o = a && a.image_id ? a.image_id : "";
		i.attr("current-image") !== o && (r = !0), i.attr("current-image", o), r && e.trigger("woocommerce_gallery_reset_slide_position")
	}, t.fn.wc_variations_image_update = function (i) {
		var e = this,
			r = e.closest(".product"),
			o = r.find(".images"),
			n = r.find(".flex-control-nav"),
			s = n.find("li:eq(0) img"),
			_ = o.find(".woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder").eq(0),
			c = _.find(".wp-post-image"),
			d = _.find("a").eq(0);
		if (i && i.image && i.image.src && i.image.src.length > 1) {
			n.find('li img[data-o_src="' + i.image.gallery_thumbnail_src + '"]').length > 0 && e.wc_variations_image_reset();
			var m = n.find('li img[src="' + i.image.gallery_thumbnail_src + '"]');
			if (m.length > 0) return m.trigger("click"), e.attr("current-image", i.image_id), void a.setTimeout(function () {
				t(a).trigger("resize"), o.trigger("woocommerce_gallery_init_zoom")
			}, 20);
			c.wc_set_variation_attr("src", i.image.src), c.wc_set_variation_attr("height", i.image.src_h), c.wc_set_variation_attr("width", i.image.src_w), c.wc_set_variation_attr("srcset", i.image.srcset), c.wc_set_variation_attr("sizes", i.image.sizes), c.wc_set_variation_attr("title", i.image.title), c.wc_set_variation_attr("alt", i.image.alt), c.wc_set_variation_attr("data-src", i.image.full_src), c.wc_set_variation_attr("data-large_image", i.image.full_src), c.wc_set_variation_attr("data-large_image_width", i.image.full_src_w), c.wc_set_variation_attr("data-large_image_height", i.image.full_src_h), _.wc_set_variation_attr("data-thumb", i.image.src), s.wc_set_variation_attr("src", i.image.gallery_thumbnail_src), d.wc_set_variation_attr("href", i.image.full_src)
		} else e.wc_variations_image_reset();
		a.setTimeout(function () {
			t(a).trigger("resize"), e.wc_maybe_trigger_slide_position_reset(i), o.trigger("woocommerce_gallery_init_zoom")
		}, 20)
	}, t.fn.wc_variations_image_reset = function () {
		var t = this.closest(".product"),
			a = t.find(".images"),
			i = t.find(".flex-control-nav").find("li:eq(0) img"),
			e = a.find(".woocommerce-product-gallery__image, .woocommerce-product-gallery__image--placeholder").eq(0),
			r = e.find(".wp-post-image"),
			o = e.find("a").eq(0);
		r.wc_reset_variation_attr("src"), r.wc_reset_variation_attr("width"), r.wc_reset_variation_attr("height"), r.wc_reset_variation_attr("srcset"), r.wc_reset_variation_attr("sizes"), r.wc_reset_variation_attr("title"), r.wc_reset_variation_attr("alt"), r.wc_reset_variation_attr("data-src"), r.wc_reset_variation_attr("data-large_image"), r.wc_reset_variation_attr("data-large_image_width"), r.wc_reset_variation_attr("data-large_image_height"), e.wc_reset_variation_attr("data-thumb"), i.wc_reset_variation_attr("src"), o.wc_reset_variation_attr("href")
	}, t(function () {
		"undefined" != typeof wc_add_to_cart_variation_params && t(".variations_form").each(function () {
			t(this).wc_variation_form()
		})
	})
}(jQuery, window, document);
/*! PhotoSwipe - v4.1.1 - 2015-12-24
 * http://photoswipe.com
 * Copyright (c) 2015 Dmitry Semenov; */
! function (e, t) {
	"function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t()
}(this, function () {
	"use strict";
	return function (e, t, n, i) {
		var o = {
			features: null,
			bind: function (e, t, n, i) {
				var o = (i ? "remove" : "add") + "EventListener";
				t = t.split(" ");
				for (var a = 0; a < t.length; a++) t[a] && e[o](t[a], n, !1)
			},
			isArray: function (e) {
				return e instanceof Array
			},
			createEl: function (e, t) {
				var n = document.createElement(t || "div");
				return e && (n.className = e), n
			},
			getScrollY: function () {
				var e = window.pageYOffset;
				return e !== undefined ? e : document.documentElement.scrollTop
			},
			unbind: function (e, t, n) {
				o.bind(e, t, n, !0)
			},
			removeClass: function (e, t) {
				var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
				e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
			},
			addClass: function (e, t) {
				o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
			},
			hasClass: function (e, t) {
				return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
			},
			getChildByClass: function (e, t) {
				for (var n = e.firstChild; n;) {
					if (o.hasClass(n, t)) return n;
					n = n.nextSibling
				}
			},
			arraySearch: function (e, t, n) {
				for (var i = e.length; i--;)
					if (e[i][n] === t) return i;
				return -1
			},
			extend: function (e, t, n) {
				for (var i in t)
					if (t.hasOwnProperty(i)) {
						if (n && e.hasOwnProperty(i)) continue;
						e[i] = t[i]
					}
			},
			easing: {
				sine: {
					out: function (e) {
						return Math.sin(e * (Math.PI / 2))
					},
					inOut: function (e) {
						return -(Math.cos(Math.PI * e) - 1) / 2
					}
				},
				cubic: {
					out: function (e) {
						return --e * e * e + 1
					}
				}
			},
			detectFeatures: function () {
				if (o.features) return o.features;
				var e = o.createEl().style,
					t = "",
					n = {};
				if (n.oldIE = document.all && !document.addEventListener, n.touch = "ontouchstart" in window, window.requestAnimationFrame && (n.raf = window.requestAnimationFrame, n.caf = window.cancelAnimationFrame), n.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !n.pointerEvent) {
					var i = navigator.userAgent;
					if (/iP(hone|od)/.test(navigator.platform)) {
						var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
						a && a.length > 0 && (a = parseInt(a[1], 10)) >= 1 && a < 8 && (n.isOldIOSPhone = !0)
					}
					var r = i.match(/Android\s([0-9\.]*)/),
						l = r ? r[1] : 0;
					(l = parseFloat(l)) >= 1 && (l < 4.4 && (n.isOldAndroid = !0), n.androidVersion = l), n.isMobileOpera = /opera mini|opera mobi/i.test(i)
				}
				for (var s, u, c = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], p = 0; p < 4; p++) {
					t = d[p];
					for (var m = 0; m < 3; m++) s = c[m], u = t + (t ? s.charAt(0).toUpperCase() + s.slice(1) : s), !n[s] && u in e && (n[s] = u);
					t && !n.raf && (t = t.toLowerCase(), n.raf = window[t + "RequestAnimationFrame"], n.raf && (n.caf = window[t + "CancelAnimationFrame"] || window[t + "CancelRequestAnimationFrame"]))
				}
				if (!n.raf) {
					var f = 0;
					n.raf = function (e) {
						var t = (new Date).getTime(),
							n = Math.max(0, 16 - (t - f)),
							i = window.setTimeout(function () {
								e(t + n)
							}, n);
						return f = t + n, i
					}, n.caf = function (e) {
						clearTimeout(e)
					}
				}
				return n.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = n, n
			}
		};
		o.detectFeatures(), o.features.oldIE && (o.bind = function (e, t, n, i) {
			t = t.split(" ");
			for (var o, a = (i ? "detach" : "attach") + "Event", r = 0; r < t.length; r++)
				if (o = t[r])
					if ("object" == typeof n && n.handleEvent) {
						if (i) {
							if (!n["oldIE" + o]) return !1
						} else n["oldIE" + o] = function () {
							n.handleEvent.call(n)
						};
						e[a]("on" + o, n["oldIE" + o])
					} else e[a]("on" + o, n)
		});
		var a = this,
			r = {
				allowPanToNext: !0,
				spacing: .12,
				bgOpacity: 1,
				mouseUsed: !1,
				loop: !0,
				pinchToClose: !0,
				closeOnScroll: !0,
				closeOnVerticalDrag: !0,
				verticalDragRange: .75,
				hideAnimationDuration: 333,
				showAnimationDuration: 333,
				showHideOpacity: !1,
				focus: !0,
				escKey: !0,
				arrowKeys: !0,
				mainScrollEndFriction: .35,
				panEndFriction: .35,
				isClickableElement: function (e) {
					return "A" === e.tagName
				},
				getDoubleTapZoom: function (e, t) {
					return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
				},
				maxSpreadZoom: 1.33,
				modal: !0,
				scaleMode: "fit"
			};
		o.extend(r, i);
		var l, s, u, c, d, p, m, f, h, y, x, v, g, w, b, I, C, D, M, T, S, A, E, O, k, R, Z, P, F, L, _, z, N, U, H, Y, B, W, G, X, V, K, q, $, j, J, Q, ee, te, ne, ie, oe, ae, re, le, se, ue = {
				x: 0,
				y: 0
			},
			ce = {
				x: 0,
				y: 0
			},
			de = {
				x: 0,
				y: 0
			},
			pe = {},
			me = 0,
			fe = {},
			he = {
				x: 0,
				y: 0
			},
			ye = 0,
			xe = !0,
			ve = [],
			ge = {},
			we = !1,
			be = function (e, t) {
				o.extend(a, t.publicMethods), ve.push(e)
			},
			Ie = function (e) {
				var t = Kt();
				return e > t - 1 ? e - t : e < 0 ? t + e : e
			},
			Ce = {},
			De = function (e, t) {
				return Ce[e] || (Ce[e] = []), Ce[e].push(t)
			},
			Me = function (e) {
				var t = Ce[e];
				if (t) {
					var n = Array.prototype.slice.call(arguments);
					n.shift();
					for (var i = 0; i < t.length; i++) t[i].apply(a, n)
				}
			},
			Te = function () {
				return (new Date).getTime()
			},
			Se = function (e) {
				re = e, a.bg.style.opacity = e * r.bgOpacity
			},
			Ae = function (e, t, n, i, o) {
				(!we || o && o !== a.currItem) && (i /= o ? o.fitRatio : a.currItem.fitRatio), e[A] = v + t + "px, " + n + "px" + g + " scale(" + i + ")"
			},
			Ee = function (e) {
				te && (e && (y > a.currItem.fitRatio ? we || (rn(a.currItem, !1, !0), we = !0) : we && (rn(a.currItem), we = !1)), Ae(te, de.x, de.y, y))
			},
			Oe = function (e) {
				e.container && Ae(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
			},
			ke = function (e, t) {
				t[A] = v + e + "px, 0px" + g
			},
			Re = function (e, t) {
				if (!r.loop && t) {
					var n = c + (he.x * me - e) / he.x,
						i = Math.round(e - mt.x);
					(n < 0 && i > 0 || n >= Kt() - 1 && i < 0) && (e = mt.x + i * r.mainScrollEndFriction)
				}
				mt.x = e, ke(e, d)
			},
			Ze = function (e, t) {
				var n = ft[e] - fe[e];
				return ce[e] + ue[e] + n - n * (t / x)
			},
			Pe = function (e, t) {
				e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
			},
			Fe = function (e) {
				e.x = Math.round(e.x), e.y = Math.round(e.y)
			},
			Le = null,
			_e = function () {
				Le && (o.unbind(document, "mousemove", _e), o.addClass(e, "pswp--has_mouse"), r.mouseUsed = !0, Me("mouseUsed")), Le = setTimeout(function () {
					Le = null
				}, 100)
			},
			ze = function () {
				o.bind(document, "keydown", a), _.transform && o.bind(a.scrollWrap, "click", a), r.mouseUsed || o.bind(document, "mousemove", _e), o.bind(window, "resize scroll", a), Me("bindEvents")
			},
			Ne = function () {
				o.unbind(window, "resize", a), o.unbind(window, "scroll", h.scroll), o.unbind(document, "keydown", a), o.unbind(document, "mousemove", _e), _.transform && o.unbind(a.scrollWrap, "click", a), W && o.unbind(window, m, a), Me("unbindEvents")
			},
			Ue = function (e, t) {
				var n = tn(a.currItem, pe, e);
				return t && (ee = n), n
			},
			He = function (e) {
				return e || (e = a.currItem), e.initialZoomLevel
			},
			Ye = function (e) {
				return e || (e = a.currItem), e.w > 0 ? r.maxSpreadZoom : 1
			},
			Be = function (e, t, n, i) {
				return i === a.currItem.initialZoomLevel ? (n[e] = a.currItem.initialPosition[e], !0) : (n[e] = Ze(e, i), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] && (n[e] = t.max[e], !0))
			},
			We = function () {
				if (A) {
					var t = _.perspective && !O;
					return v = "translate" + (t ? "3d(" : "("), void(g = _.perspective ? ", 0px)" : ")")
				}
				A = "left", o.addClass(e, "pswp--ie"), ke = function (e, t) {
					t.left = e + "px"
				}, Oe = function (e) {
					var t = e.fitRatio > 1 ? 1 : e.fitRatio,
						n = e.container.style,
						i = t * e.w,
						o = t * e.h;
					n.width = i + "px", n.height = o + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px"
				}, Ee = function () {
					if (te) {
						var e = te,
							t = a.currItem,
							n = t.fitRatio > 1 ? 1 : t.fitRatio,
							i = n * t.w,
							o = n * t.h;
						e.width = i + "px", e.height = o + "px", e.left = de.x + "px", e.top = de.y + "px"
					}
				}
			},
			Ge = function (e) {
				var t = "";
				r.escKey && 27 === e.keyCode ? t = "close" : r.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a[t]()))
			},
			Xe = function (e) {
				e && (V || X || ne || Y) && (e.preventDefault(), e.stopPropagation())
			},
			Ve = function () {
				a.setScrollOffset(0, o.getScrollY())
			},
			Ke = {},
			qe = 0,
			$e = function (e) {
				Ke[e] && (Ke[e].raf && R(Ke[e].raf), qe--, delete Ke[e])
			},
			je = function (e) {
				Ke[e] && $e(e), Ke[e] || (qe++, Ke[e] = {})
			},
			Je = function () {
				for (var e in Ke) Ke.hasOwnProperty(e) && $e(e)
			},
			Qe = function (e, t, n, i, o, a, r) {
				var l, s = Te();
				je(e);
				var u = function () {
					if (Ke[e]) {
						if ((l = Te() - s) >= i) return $e(e), a(n), void(r && r());
						a((n - t) * o(l / i) + t), Ke[e].raf = k(u)
					}
				};
				u()
			},
			et = {
				shout: Me,
				listen: De,
				viewportSize: pe,
				options: r,
				isMainScrollAnimating: function () {
					return ne
				},
				getZoomLevel: function () {
					return y
				},
				getCurrentIndex: function () {
					return c
				},
				isDragging: function () {
					return W
				},
				isZooming: function () {
					return j
				},
				setScrollOffset: function (e, t) {
					fe.x = e, L = fe.y = t, Me("updateScrollOffset", fe)
				},
				applyZoomPan: function (e, t, n, i) {
					de.x = t, de.y = n, y = e, Ee(i)
				},
				init: function () {
					if (!l && !s) {
						var n;
						a.framework = o, a.template = e, a.bg = o.getChildByClass(e, "pswp__bg"), Z = e.className, l = !0, _ = o.detectFeatures(), k = _.raf, R = _.caf, A = _.transform, F = _.oldIE, a.scrollWrap = o.getChildByClass(e, "pswp__scroll-wrap"), a.container = o.getChildByClass(a.scrollWrap, "pswp__container"), d = a.container.style, a.itemHolders = I = [{
							el: a.container.children[0],
							wrap: 0,
							index: -1
						}, {
							el: a.container.children[1],
							wrap: 0,
							index: -1
						}, {
							el: a.container.children[2],
							wrap: 0,
							index: -1
						}], I[0].el.style.display = I[2].el.style.display = "none", We(), h = {
							resize: a.updateSize,
							scroll: Ve,
							keydown: Ge,
							click: Xe
						};
						var i = _.isOldIOSPhone || _.isOldAndroid || _.isMobileOpera;
						for (_.animationName && _.transform && !i || (r.showAnimationDuration = r.hideAnimationDuration = 0), n = 0; n < ve.length; n++) a["init" + ve[n]]();
						t && (a.ui = new t(a, o)).init(), Me("firstUpdate"), c = c || r.index || 0, (isNaN(c) || c < 0 || c >= Kt()) && (c = 0), a.currItem = Vt(c), (_.isOldIOSPhone || _.isOldAndroid) && (xe = !1), e.setAttribute("aria-hidden", "false"), r.modal && (xe ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = o.getScrollY() + "px")), L === undefined && (Me("initialLayout"), L = P = o.getScrollY());
						var u = "pswp--open ";
						for (r.mainClass && (u += r.mainClass + " "), r.showHideOpacity && (u += "pswp--animate_opacity "), u += O ? "pswp--touch" : "pswp--notouch", u += _.animationName ? " pswp--css_animation" : "", u += _.svg ? " pswp--svg" : "", o.addClass(e, u), a.updateSize(), p = -1, ye = null, n = 0; n < 3; n++) ke((n + p) * he.x, I[n].el.style);
						F || o.bind(a.scrollWrap, f, a), De("initialZoomInEnd", function () {
							a.setContent(I[0], c - 1), a.setContent(I[2], c + 1), I[0].el.style.display = I[2].el.style.display = "block", r.focus && e.focus(), ze()
						}), a.setContent(I[1], c), a.updateCurrItem(), Me("afterInit"), xe || (w = setInterval(function () {
							qe || W || j || y !== a.currItem.initialZoomLevel || a.updateSize()
						}, 1e3)), o.addClass(e, "pswp--visible")
					}
				},
				close: function () {
					l && (l = !1, s = !0, Me("close"), Ne(), $t(a.currItem, null, !0, a.destroy))
				},
				destroy: function () {
					Me("destroy"), Bt && clearTimeout(Bt), e.setAttribute("aria-hidden", "true"), e.className = Z, w && clearInterval(w), o.unbind(a.scrollWrap, f, a), o.unbind(window, "scroll", a), gt(), Je(), Ce = null
				},
				panTo: function (e, t, n) {
					n || (e > ee.min.x ? e = ee.min.x : e < ee.max.x && (e = ee.max.x), t > ee.min.y ? t = ee.min.y : t < ee.max.y && (t = ee.max.y)), de.x = e, de.y = t, Ee()
				},
				handleEvent: function (e) {
					e = e || window.event, h[e.type] && h[e.type](e)
				},
				goTo: function (e) {
					var t = (e = Ie(e)) - c;
					ye = t, c = e, a.currItem = Vt(c), me -= t, Re(he.x * me), Je(), ne = !1, a.updateCurrItem()
				},
				next: function () {
					a.goTo(c + 1)
				},
				prev: function () {
					a.goTo(c - 1)
				},
				updateCurrZoomItem: function (e) {
					if (e && Me("beforeChange", 0), I[1].el.children.length) {
						var t = I[1].el.children[0];
						te = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null
					} else te = null;
					ee = a.currItem.bounds, x = y = a.currItem.initialZoomLevel, de.x = ee.center.x, de.y = ee.center.y, e && Me("afterChange")
				},
				invalidateCurrItems: function () {
					b = !0;
					for (var e = 0; e < 3; e++) I[e].item && (I[e].item.needsUpdate = !0)
				},
				updateCurrItem: function (e) {
					if (0 !== ye) {
						var t, n = Math.abs(ye);
						if (!(e && n < 2)) {
							a.currItem = Vt(c), we = !1, Me("beforeChange", ye), n >= 3 && (p += ye + (ye > 0 ? -3 : 3), n = 3);
							for (var i = 0; i < n; i++) ye > 0 ? (t = I.shift(), I[2] = t, ke((++p + 2) * he.x, t.el.style), a.setContent(t, c - n + i + 1 + 1)) : (t = I.pop(), I.unshift(t), ke(--p * he.x, t.el.style), a.setContent(t, c + n - i - 1 - 1));
							if (te && 1 === Math.abs(ye)) {
								var o = Vt(C);
								o.initialZoomLevel !== y && (tn(o, pe), rn(o), Oe(o))
							}
							ye = 0, a.updateCurrZoomItem(), C = c, Me("afterChange")
						}
					}
				},
				updateSize: function (t) {
					if (!xe && r.modal) {
						var n = o.getScrollY();
						if (L !== n && (e.style.top = n + "px", L = n), !t && ge.x === window.innerWidth && ge.y === window.innerHeight) return;
						ge.x = window.innerWidth, ge.y = window.innerHeight, e.style.height = ge.y + "px"
					}
					if (pe.x = a.scrollWrap.clientWidth, pe.y = a.scrollWrap.clientHeight, Ve(), he.x = pe.x + Math.round(pe.x * r.spacing), he.y = pe.y, Re(he.x * me), Me("beforeResize"), p !== undefined) {
						for (var i, l, s, u = 0; u < 3; u++) i = I[u], ke((u + p) * he.x, i.el.style), s = c + u - 1, r.loop && Kt() > 2 && (s = Ie(s)), (l = Vt(s)) && (b || l.needsUpdate || !l.bounds) ? (a.cleanSlide(l), a.setContent(i, s), 1 === u && (a.currItem = l, a.updateCurrZoomItem(!0)), l.needsUpdate = !1) : -1 === i.index && s >= 0 && a.setContent(i, s), l && l.container && (tn(l, pe), rn(l), Oe(l));
						b = !1
					}
					x = y = a.currItem.initialZoomLevel, (ee = a.currItem.bounds) && (de.x = ee.center.x, de.y = ee.center.y, Ee(!0)), Me("resize")
				},
				zoomTo: function (e, t, n, i, a) {
					t && (x = y, ft.x = Math.abs(t.x) - de.x, ft.y = Math.abs(t.y) - de.y, Pe(ce, de));
					var r = Ue(e, !1),
						l = {};
					Be("x", r, l, e), Be("y", r, l, e);
					var s = y,
						u = {
							x: de.x,
							y: de.y
						};
					Fe(l);
					var c = function (t) {
						1 === t ? (y = e, de.x = l.x, de.y = l.y) : (y = (e - s) * t + s, de.x = (l.x - u.x) * t + u.x, de.y = (l.y - u.y) * t + u.y), a && a(t), Ee(1 === t)
					};
					n ? Qe("customZoomTo", 0, 1, n, i || o.easing.sine.inOut, c) : c(1)
				}
			},
			tt = {},
			nt = {},
			it = {},
			ot = {},
			at = {},
			rt = [],
			lt = {},
			st = [],
			ut = {},
			ct = 0,
			dt = {
				x: 0,
				y: 0
			},
			pt = 0,
			mt = {
				x: 0,
				y: 0
			},
			ft = {
				x: 0,
				y: 0
			},
			ht = {
				x: 0,
				y: 0
			},
			yt = function (e, t) {
				return e.x === t.x && e.y === t.y
			},
			xt = function (e, t) {
				return Math.abs(e.x - t.x) < 25 && Math.abs(e.y - t.y) < 25
			},
			vt = function (e, t) {
				return ut.x = Math.abs(e.x - t.x), ut.y = Math.abs(e.y - t.y), Math.sqrt(ut.x * ut.x + ut.y * ut.y)
			},
			gt = function () {
				K && (R(K), K = null)
			},
			wt = function () {
				W && (K = k(wt), Lt())
			},
			bt = function () {
				return !("fit" === r.scaleMode && y === a.currItem.initialZoomLevel)
			},
			It = function (e, t) {
				return !(!e || e === document) && !(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : It(e.parentNode, t))
			},
			Ct = {},
			Dt = function (e, t) {
				return Ct.prevent = !It(e.target, r.isClickableElement), Me("preventDragEvent", e, t, Ct), Ct.prevent
			},
			Mt = function (e, t) {
				return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
			},
			Tt = function (e, t, n) {
				n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y)
			},
			St = function (e, t, n) {
				if (e - N > 50) {
					var i = st.length > 2 ? st.shift() : {};
					i.x = t, i.y = n, st.push(i), N = e
				}
			},
			At = function () {
				var e = de.y - a.currItem.initialPosition.y;
				return 1 - Math.abs(e / (pe.y / 2))
			},
			Et = {},
			Ot = {},
			kt = [],
			Rt = function (e) {
				for (; kt.length > 0;) kt.pop();
				return E ? (se = 0, rt.forEach(function (e) {
					0 === se ? kt[0] = e : 1 === se && (kt[1] = e), se++
				})) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (kt[0] = Mt(e.touches[0], Et), e.touches.length > 1 && (kt[1] = Mt(e.touches[1], Ot))) : (Et.x = e.pageX, Et.y = e.pageY, Et.id = "", kt[0] = Et), kt
			},
			Zt = function (e, t) {
				var n, i, o, l, s = de[e] + t[e],
					u = t[e] > 0,
					c = mt.x + t.x,
					d = mt.x - lt.x;
				if (n = s > ee.min[e] || s < ee.max[e] ? r.panEndFriction : 1, s = de[e] + t[e] * n, (r.allowPanToNext || y === a.currItem.initialZoomLevel) && (te ? "h" !== ie || "x" !== e || X || (u ? (s > ee.min[e] && (n = r.panEndFriction, ee.min[e], i = ee.min[e] - ce[e]), (i <= 0 || d < 0) && Kt() > 1 ? (l = c, d < 0 && c > lt.x && (l = lt.x)) : ee.min.x !== ee.max.x && (o = s)) : (s < ee.max[e] && (n = r.panEndFriction, ee.max[e], i = ce[e] - ee.max[e]), (i <= 0 || d > 0) && Kt() > 1 ? (l = c, d > 0 && c < lt.x && (l = lt.x)) : ee.min.x !== ee.max.x && (o = s))) : l = c, "x" === e)) return l !== undefined && (Re(l, !0), q = l !== lt.x), ee.min.x !== ee.max.x && (o !== undefined ? de.x = o : q || (de.x += t.x * n)), l !== undefined;
				ne || q || y > a.currItem.fitRatio && (de[e] += t[e] * n)
			},
			Pt = function (e) {
				if (!("mousedown" === e.type && e.button > 0))
					if (Xt) e.preventDefault();
					else if (!B || "mousedown" !== e.type) {
					if (Dt(e, !0) && e.preventDefault(), Me("pointerDown"), E) {
						var t = o.arraySearch(rt, e.pointerId, "id");
						t < 0 && (t = rt.length), rt[t] = {
							x: e.pageX,
							y: e.pageY,
							id: e.pointerId
						}
					}
					var n = Rt(e),
						i = n.length;
					$ = null, Je(), W && 1 !== i || (W = oe = !0, o.bind(window, m, a), H = le = ae = Y = q = V = G = X = !1, ie = null, Me("firstTouchStart", n), Pe(ce, de), ue.x = ue.y = 0, Pe(ot, n[0]), Pe(at, ot), lt.x = he.x * me, st = [{
						x: ot.x,
						y: ot.y
					}], N = z = Te(), Ue(y, !0), gt(), wt()), !j && i > 1 && !ne && !q && (x = y, X = !1, j = G = !0, ue.y = ue.x = 0, Pe(ce, de), Pe(tt, n[0]), Pe(nt, n[1]), Tt(tt, nt, ht), ft.x = Math.abs(ht.x) - de.x, ft.y = Math.abs(ht.y) - de.y, J = Q = vt(tt, nt))
				}
			},
			Ft = function (e) {
				if (e.preventDefault(), E) {
					var t = o.arraySearch(rt, e.pointerId, "id");
					if (t > -1) {
						var n = rt[t];
						n.x = e.pageX, n.y = e.pageY
					}
				}
				if (W) {
					var i = Rt(e);
					if (ie || V || j) $ = i;
					else if (mt.x !== he.x * me) ie = "h";
					else {
						var a = Math.abs(i[0].x - ot.x) - Math.abs(i[0].y - ot.y);
						Math.abs(a) >= 10 && (ie = a > 0 ? "h" : "v", $ = i)
					}
				}
			},
			Lt = function () {
				if ($) {
					var e = $.length;
					if (0 !== e)
						if (Pe(tt, $[0]), it.x = tt.x - ot.x, it.y = tt.y - ot.y, j && e > 1) {
							if (ot.x = tt.x, ot.y = tt.y, !it.x && !it.y && yt($[1], nt)) return;
							Pe(nt, $[1]), X || (X = !0, Me("zoomGestureStarted"));
							var t = vt(tt, nt),
								n = Ht(t);
							n > a.currItem.initialZoomLevel + a.currItem.initialZoomLevel / 15 && (le = !0);
							var i = 1,
								o = He(),
								l = Ye();
							if (n < o)
								if (r.pinchToClose && !le && x <= a.currItem.initialZoomLevel) {
									var s = 1 - (o - n) / (o / 1.2);
									Se(s), Me("onPinchClose", s), ae = !0
								} else(i = (o - n) / o) > 1 && (i = 1), n = o - i * (o / 3);
							else n > l && ((i = (n - l) / (6 * o)) > 1 && (i = 1), n = l + i * o);
							i < 0 && (i = 0), J = t, Tt(tt, nt, dt), ue.x += dt.x - ht.x, ue.y += dt.y - ht.y, Pe(ht, dt), de.x = Ze("x", n), de.y = Ze("y", n), H = n > y, y = n, Ee()
						} else {
							if (!ie) return;
							if (oe && (oe = !1, Math.abs(it.x) >= 10 && (it.x -= $[0].x - at.x), Math.abs(it.y) >= 10 && (it.y -= $[0].y - at.y)), ot.x = tt.x, ot.y = tt.y, 0 === it.x && 0 === it.y) return;
							if ("v" === ie && r.closeOnVerticalDrag && !bt()) {
								ue.y += it.y, de.y += it.y;
								var u = At();
								return Y = !0, Me("onVerticalDrag", u), Se(u), void Ee()
							}
							St(Te(), tt.x, tt.y), V = !0, ee = a.currItem.bounds, Zt("x", it) || (Zt("y", it), Fe(de), Ee())
						}
				}
			},
			_t = function (e) {
				if (_.isOldAndroid) {
					if (B && "mouseup" === e.type) return;
					e.type.indexOf("touch") > -1 && (clearTimeout(B), B = setTimeout(function () {
						B = 0
					}, 600))
				}
				Me("pointerUp"), Dt(e, !1) && e.preventDefault();
				var t;
				if (E) {
					var n = o.arraySearch(rt, e.pointerId, "id");
					if (n > -1)
						if (t = rt.splice(n, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse";
						else {
							var i = {
								4: "mouse",
								2: "touch",
								3: "pen"
							};
							t.type = i[e.pointerType], t.type || (t.type = e.pointerType || "mouse")
						}
				}
				var l, s = Rt(e),
					u = s.length;
				if ("mouseup" === e.type && (u = 0), 2 === u) return $ = null, !0;
				1 === u && Pe(at, s[0]), 0 !== u || ie || ne || (t || ("mouseup" === e.type ? t = {
					x: e.pageX,
					y: e.pageY,
					type: "mouse"
				} : e.changedTouches && e.changedTouches[0] && (t = {
					x: e.changedTouches[0].pageX,
					y: e.changedTouches[0].pageY,
					type: "touch"
				})), Me("touchRelease", e, t));
				var c = -1;
				if (0 === u && (W = !1, o.unbind(window, m, a), gt(), j ? c = 0 : -1 !== pt && (c = Te() - pt)), pt = 1 === u ? Te() : -1, l = -1 !== c && c < 150 ? "zoom" : "swipe", j && u < 2 && (j = !1, 1 === u && (l = "zoomPointerUp"), Me("zoomGestureEnded")), $ = null, V || X || ne || Y)
					if (Je(), U || (U = zt()), U.calculateSwipeSpeed("x"), Y)
						if (At() < r.verticalDragRange) a.close();
						else {
							var d = de.y,
								p = re;
							Qe("verticalDrag", 0, 1, 300, o.easing.cubic.out, function (e) {
								de.y = (a.currItem.initialPosition.y - d) * e + d, Se((1 - p) * e + p), Ee()
							}), Me("onVerticalDrag", 1)
						}
				else {
					if ((q || ne) && 0 === u) {
						if (Ut(l, U)) return;
						l = "zoomPointerUp"
					}
					ne || ("swipe" === l ? !q && y > a.currItem.fitRatio && Nt(U) : Yt())
				}
			},
			zt = function () {
				var e, t, n = {
					lastFlickOffset: {},
					lastFlickDist: {},
					lastFlickSpeed: {},
					slowDownRatio: {},
					slowDownRatioReverse: {},
					speedDecelerationRatio: {},
					speedDecelerationRatioAbs: {},
					distanceOffset: {},
					backAnimDestination: {},
					backAnimStarted: {},
					calculateSwipeSpeed: function (i) {
						st.length > 1 ? (e = Te() - N + 50, t = st[st.length - 2][i]) : (e = Te() - z, t = at[i]), n.lastFlickOffset[i] = ot[i] - t, n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i]), n.lastFlickDist[i] > 20 ? n.lastFlickSpeed[i] = n.lastFlickOffset[i] / e : n.lastFlickSpeed[i] = 0, Math.abs(n.lastFlickSpeed[i]) < .1 && (n.lastFlickSpeed[i] = 0), n.slowDownRatio[i] = .95, n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i], n.speedDecelerationRatio[i] = 1
					},
					calculateOverBoundsAnimOffset: function (e, t) {
						n.backAnimStarted[e] || (de[e] > ee.min[e] ? n.backAnimDestination[e] = ee.min[e] : de[e] < ee.max[e] && (n.backAnimDestination[e] = ee.max[e]), n.backAnimDestination[e] !== undefined && (n.slowDownRatio[e] = .7, n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e], n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0, n.backAnimStarted[e] = !0, Qe("bounceZoomPan" + e, de[e], n.backAnimDestination[e], t || 300, o.easing.sine.out, function (t) {
							de[e] = t, Ee()
						}))))
					},
					calculateAnimOffset: function (e) {
						n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10), n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]), n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff, de[e] += n.distanceOffset[e])
					},
					panAnimLoop: function () {
						if (Ke.zoomPan && (Ke.zoomPan.raf = k(n.panAnimLoop), n.now = Te(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), Ee(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05)) return de.x = Math.round(de.x), de.y = Math.round(de.y), Ee(), void $e("zoomPan")
					}
				};
				return n
			},
			Nt = function (e) {
				if (e.calculateSwipeSpeed("y"), ee = a.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05) return e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0;
				je("zoomPan"), e.lastNow = Te(), e.panAnimLoop()
			},
			Ut = function (e, t) {
				var n;
				ne || (ct = c);
				var i;
				if ("swipe" === e) {
					var l = ot.x - at.x,
						s = t.lastFlickDist.x < 10;
					l > 30 && (s || t.lastFlickOffset.x > 20) ? i = -1 : l < -30 && (s || t.lastFlickOffset.x < -20) && (i = 1)
				}
				var u;
				i && ((c += i) < 0 ? (c = r.loop ? Kt() - 1 : 0, u = !0) : c >= Kt() && (c = r.loop ? 0 : Kt() - 1, u = !0), u && !r.loop || (ye += i, me -= i, n = !0));
				var d, p = he.x * me,
					m = Math.abs(p - mt.x);
				return n || p > mt.x == t.lastFlickSpeed.x > 0 ? (d = Math.abs(t.lastFlickSpeed.x) > 0 ? m / Math.abs(t.lastFlickSpeed.x) : 333, d = Math.min(d, 400), d = Math.max(d, 250)) : d = 333, ct === c && (n = !1), ne = !0, Me("mainScrollAnimStart"), Qe("mainScroll", mt.x, p, d, o.easing.cubic.out, Re, function () {
					Je(), ne = !1, ct = -1, (n || ct !== c) && a.updateCurrItem(), Me("mainScrollAnimComplete")
				}), n && a.updateCurrItem(!0), n
			},
			Ht = function (e) {
				return 1 / Q * e * x
			},
			Yt = function () {
				var e = y,
					t = He(),
					n = Ye();
				y < t ? e = t : y > n && (e = n);
				var i, r = re;
				return ae && !H && !le && y < t ? (a.close(), !0) : (ae && (i = function (e) {
					Se((1 - r) * e + r)
				}), a.zoomTo(e, 0, 200, o.easing.cubic.out, i), !0)
			};
		be("Gestures", {
			publicMethods: {
				initGestures: function () {
					var e = function (e, t, n, i, o) {
						D = e + t, M = e + n, T = e + i, S = o ? e + o : ""
					};
					(E = _.pointerEvent) && _.touch && (_.touch = !1), E ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : _.touch ? (e("touch", "start", "move", "end", "cancel"), O = !0) : e("mouse", "down", "move", "up"), m = M + " " + T + " " + S, f = D, E && !O && (O = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), a.likelyTouchDevice = O, h[D] = Pt, h[M] = Ft, h[T] = _t, S && (h[S] = h[T]), _.touch && (f += " mousedown", m += " mousemove mouseup", h.mousedown = h[D], h.mousemove = h[M], h.mouseup = h[T]), O || (r.allowPanToNext = !1)
				}
			}
		});
		var Bt, Wt, Gt, Xt, Vt, Kt, qt, $t = function (t, n, i, l) {
				Bt && clearTimeout(Bt), Xt = !0, Gt = !0;
				var s;
				t.initialLayout ? (s = t.initialLayout, t.initialLayout = null) : s = r.getThumbBoundsFn && r.getThumbBoundsFn(c);
				var d = i ? r.hideAnimationDuration : r.showAnimationDuration,
					p = function () {
						$e("initialZoom"), i ? (a.template.removeAttribute("style"), a.bg.removeAttribute("style")) : (Se(1), n && (n.style.display = "block"), o.addClass(e, "pswp--animated-in"), Me("initialZoom" + (i ? "OutEnd" : "InEnd"))), l && l(), Xt = !1
					};
				if (!d || !s || s.x === undefined) return Me("initialZoom" + (i ? "Out" : "In")), y = t.initialZoomLevel, Pe(de, t.initialPosition), Ee(), e.style.opacity = i ? 0 : 1, Se(1), void(d ? setTimeout(function () {
					p()
				}, d) : p());
				! function () {
					var n = u,
						l = !a.currItem.src || a.currItem.loadError || r.showHideOpacity;
					t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), i || (y = s.w / t.w, de.x = s.x, de.y = s.y - P, a[l ? "template" : "bg"].style.opacity = .001, Ee()), je("initialZoom"), i && !n && o.removeClass(e, "pswp--animated-in"), l && (i ? o[(n ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function () {
						o.addClass(e, "pswp--animate_opacity")
					}, 30)), Bt = setTimeout(function () {
						if (Me("initialZoom" + (i ? "Out" : "In")), i) {
							var a = s.w / t.w,
								r = {
									x: de.x,
									y: de.y
								},
								u = y,
								c = re,
								m = function (t) {
									1 === t ? (y = a, de.x = s.x, de.y = s.y - L) : (y = (a - u) * t + u, de.x = (s.x - r.x) * t + r.x, de.y = (s.y - L - r.y) * t + r.y), Ee(), l ? e.style.opacity = 1 - t : Se(c - t * c)
								};
							n ? Qe("initialZoom", 0, 1, d, o.easing.cubic.out, m, p) : (m(1), Bt = setTimeout(p, d + 20))
						} else y = t.initialZoomLevel, Pe(de, t.initialPosition), Ee(), Se(1), l ? e.style.opacity = 1 : Se(1), Bt = setTimeout(p, d + 20)
					}, i ? 25 : 90)
				}()
			},
			jt = {},
			Jt = [],
			Qt = {
				index: 0,
				errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
				forceProgressiveLoading: !1,
				preload: [1, 1],
				getNumItemsFn: function () {
					return Wt.length
				}
			},
			en = function (e, t, n) {
				var i = e.bounds;
				i.center.x = Math.round((jt.x - t) / 2), i.center.y = Math.round((jt.y - n) / 2) + e.vGap.top, i.max.x = t > jt.x ? Math.round(jt.x - t) : i.center.x, i.max.y = n > jt.y ? Math.round(jt.y - n) + e.vGap.top : i.center.y, i.min.x = t > jt.x ? 0 : i.center.x, i.min.y = n > jt.y ? e.vGap.top : i.center.y
			},
			tn = function (e, t, n) {
				if (e.src && !e.loadError) {
					var i = !n;
					if (i && (e.vGap || (e.vGap = {
							top: 0,
							bottom: 0
						}), Me("parseVerticalMargin", e)), jt.x = t.x, jt.y = t.y - e.vGap.top - e.vGap.bottom, i) {
						var o = jt.x / e.w,
							a = jt.y / e.h;
						e.fitRatio = o < a ? o : a;
						var l = r.scaleMode;
						"orig" === l ? n = 1 : "fit" === l && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = {
							center: {
								x: 0,
								y: 0
							},
							max: {
								x: 0,
								y: 0
							},
							min: {
								x: 0,
								y: 0
							}
						})
					}
					if (!n) return;
					return en(e, e.w * n, e.h * n), i && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
				}
				return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = {
					center: {
						x: 0,
						y: 0
					},
					max: {
						x: 0,
						y: 0
					},
					min: {
						x: 0,
						y: 0
					}
				}, e.initialPosition = e.bounds.center, e.bounds
			},
			nn = function (e, t, n, i, o, r) {
				t.loadError || i && (t.imageAppended = !0, rn(t, i, t === a.currItem && we), n.appendChild(i), r && setTimeout(function () {
					t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
				}, 500))
			},
			on = function (e) {
				e.loading = !0, e.loaded = !1;
				var t = e.img = o.createEl("pswp__img", "img"),
					n = function () {
						e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
					};
				return t.onload = n, t.onerror = function () {
					e.loadError = !0, n()
				}, t.src = e.src, t
			},
			an = function (e, t) {
				if (e.src && e.loadError && e.container) return t && (e.container.innerHTML = ""), e.container.innerHTML = r.errorMsg.replace("%url%", e.src), !0
			},
			rn = function (e, t, n) {
				if (e.src) {
					t || (t = e.container.lastChild);
					var i = n ? e.w : Math.round(e.w * e.fitRatio),
						o = n ? e.h : Math.round(e.h * e.fitRatio);
					e.placeholder && !e.loaded && (e.placeholder.style.width = i + "px", e.placeholder.style.height = o + "px"), t.style.width = i + "px", t.style.height = o + "px"
				}
			},
			ln = function () {
				if (Jt.length) {
					for (var e, t = 0; t < Jt.length; t++)(e = Jt[t]).holder.index === e.index && nn(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
					Jt = []
				}
			};
		be("Controller", {
			publicMethods: {
				lazyLoadItem: function (e) {
					e = Ie(e);
					var t = Vt(e);
					t && (!t.loaded && !t.loading || b) && (Me("gettingData", e, t), t.src && on(t))
				},
				initController: function () {
					o.extend(r, Qt, !0), a.items = Wt = n, Vt = a.getItemAt, Kt = r.getNumItemsFn, qt = r.loop, Kt() < 3 && (r.loop = !1), De("beforeChange", function (e) {
						var t, n = r.preload,
							i = null === e || e >= 0,
							o = Math.min(n[0], Kt()),
							l = Math.min(n[1], Kt());
						for (t = 1; t <= (i ? l : o); t++) a.lazyLoadItem(c + t);
						for (t = 1; t <= (i ? o : l); t++) a.lazyLoadItem(c - t)
					}), De("initialLayout", function () {
						a.currItem.initialLayout = r.getThumbBoundsFn && r.getThumbBoundsFn(c)
					}), De("mainScrollAnimComplete", ln), De("initialZoomInEnd", ln), De("destroy", function () {
						for (var e, t = 0; t < Wt.length; t++)(e = Wt[t]).container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
						Jt = null
					})
				},
				getItemAt: function (e) {
					return e >= 0 && Wt[e] !== undefined && Wt[e]
				},
				allowProgressiveImg: function () {
					return r.forceProgressiveLoading || !O || r.mouseUsed || screen.width > 1200
				},
				setContent: function (e, t) {
					r.loop && (t = Ie(t));
					var n = a.getItemAt(e.index);
					n && (n.container = null);
					var i, s = a.getItemAt(t);
					if (s) {
						Me("gettingData", t, s), e.index = t, e.item = s;
						var u = s.container = o.createEl("pswp__zoom-wrap");
						if (!s.src && s.html && (s.html.tagName ? u.appendChild(s.html) : u.innerHTML = s.html), an(s), tn(s, pe), !s.src || s.loadError || s.loaded) s.src && !s.loadError && ((i = o.createEl("pswp__img", "img")).style.opacity = 1, i.src = s.src, rn(s, i), nn(0, s, u, i));
						else {
							if (s.loadComplete = function (n) {
									if (l) {
										if (e && e.index === t) {
											if (an(n, !0)) return n.loadComplete = n.img = null, tn(n, pe), Oe(n), void(e.index === c && a.updateCurrZoomItem());
											n.imageAppended ? !Xt && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : _.transform && (ne || Xt) ? Jt.push({
												item: n,
												baseDiv: u,
												img: n.img,
												index: t,
												holder: e,
												clearPlaceholder: !0
											}) : nn(0, n, u, n.img, 0, !0)
										}
										n.loadComplete = null, n.img = null, Me("imageLoadComplete", t, n)
									}
								}, o.features.transform) {
								var d = "pswp__img pswp__img--placeholder";
								d += s.msrc ? "" : " pswp__img--placeholder--blank";
								var p = o.createEl(d, s.msrc ? "img" : "");
								s.msrc && (p.src = s.msrc), rn(s, p), u.appendChild(p), s.placeholder = p
							}
							s.loading || on(s), a.allowProgressiveImg() && (!Gt && _.transform ? Jt.push({
								item: s,
								baseDiv: u,
								img: s.img,
								index: t,
								holder: e
							}) : nn(0, s, u, s.img, 0, !0))
						}
						Gt || t !== c ? Oe(s) : (te = u.style, $t(s, i || s.img)), e.el.innerHTML = "", e.el.appendChild(u)
					} else e.el.innerHTML = ""
				},
				cleanSlide: function (e) {
					e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
				}
			}
		});
		var sn, un = {},
			cn = function (e, t, n) {
				var i = document.createEvent("CustomEvent"),
					o = {
						origEvent: e,
						target: e.target,
						releasePoint: t,
						pointerType: n || "touch"
					};
				i.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(i)
			};
		be("Tap", {
			publicMethods: {
				initTap: function () {
					De("firstTouchStart", a.onTapStart), De("touchRelease", a.onTapRelease), De("destroy", function () {
						un = {}, sn = null
					})
				},
				onTapStart: function (e) {
					e.length > 1 && (clearTimeout(sn), sn = null)
				},
				onTapRelease: function (e, t) {
					if (t && !V && !G && !qe) {
						var n = t;
						if (sn && (clearTimeout(sn), sn = null, xt(n, un))) return void Me("doubleTap", n);
						if ("mouse" === t.type) return void cn(e, t, "mouse");
						if ("BUTTON" === e.target.tagName.toUpperCase() || o.hasClass(e.target, "pswp__single-tap")) return void cn(e, t);
						Pe(un, n), sn = setTimeout(function () {
							cn(e, t), sn = null
						}, 300)
					}
				}
			}
		});
		var dn;
		be("DesktopZoom", {
			publicMethods: {
				initDesktopZoom: function () {
					F || (O ? De("mouseUsed", function () {
						a.setupDesktopZoom()
					}) : a.setupDesktopZoom(!0))
				},
				setupDesktopZoom: function (t) {
					dn = {};
					var n = "wheel mousewheel DOMMouseScroll";
					De("bindEvents", function () {
						o.bind(e, n, a.handleMouseWheel)
					}), De("unbindEvents", function () {
						dn && o.unbind(e, n, a.handleMouseWheel)
					}), a.mouseZoomedIn = !1;
					var i, r = function () {
							a.mouseZoomedIn && (o.removeClass(e, "pswp--zoomed-in"), a.mouseZoomedIn = !1), y < 1 ? o.addClass(e, "pswp--zoom-allowed") : o.removeClass(e, "pswp--zoom-allowed"), l()
						},
						l = function () {
							i && (o.removeClass(e, "pswp--dragging"), i = !1)
						};
					De("resize", r), De("afterChange", r), De("pointerDown", function () {
						a.mouseZoomedIn && (i = !0, o.addClass(e, "pswp--dragging"))
					}), De("pointerUp", l), t || r()
				},
				handleMouseWheel: function (e) {
					if (y <= a.currItem.fitRatio) return r.modal && (!r.closeOnScroll || qe || W ? e.preventDefault() : A && Math.abs(e.deltaY) > 2 && (u = !0, a.close())), !0;
					if (e.stopPropagation(), dn.x = 0, "deltaX" in e) 1 === e.deltaMode ? (dn.x = 18 * e.deltaX, dn.y = 18 * e.deltaY) : (dn.x = e.deltaX, dn.y = e.deltaY);
					else if ("wheelDelta" in e) e.wheelDeltaX && (dn.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? dn.y = -.16 * e.wheelDeltaY : dn.y = -.16 * e.wheelDelta;
					else {
						if (!("detail" in e)) return;
						dn.y = e.detail
					}
					Ue(y, !0);
					var t = de.x - dn.x,
						n = de.y - dn.y;
					(r.modal || t <= ee.min.x && t >= ee.max.x && n <= ee.min.y && n >= ee.max.y) && e.preventDefault(), a.panTo(t, n)
				},
				toggleDesktopZoom: function (t) {
					t = t || {
						x: pe.x / 2 + fe.x,
						y: pe.y / 2 + fe.y
					};
					var n = r.getDoubleTapZoom(!0, a.currItem),
						i = y === n;
					a.mouseZoomedIn = !i, a.zoomTo(i ? a.currItem.initialZoomLevel : n, t, 333), o[(i ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
				}
			}
		});
		var pn, mn, fn, hn, yn, xn, vn, gn, wn, bn, In, Cn, Dn = {
				history: !0,
				galleryUID: 1
			},
			Mn = function () {
				return In.hash.substring(1)
			},
			Tn = function () {
				pn && clearTimeout(pn), fn && clearTimeout(fn)
			},
			Sn = function () {
				var e = Mn(),
					t = {};
				if (e.length < 5) return t;
				var n, i = e.split("&");
				for (n = 0; n < i.length; n++)
					if (i[n]) {
						var o = i[n].split("=");
						o.length < 2 || (t[o[0]] = o[1])
					} if (r.galleryPIDs) {
					var a = t.pid;
					for (t.pid = 0, n = 0; n < Wt.length; n++)
						if (Wt[n].pid === a) {
							t.pid = n;
							break
						}
				} else t.pid = parseInt(t.pid, 10) - 1;
				return t.pid < 0 && (t.pid = 0), t
			},
			An = function () {
				if (fn && clearTimeout(fn), qe || W) fn = setTimeout(An, 500);
				else {
					hn ? clearTimeout(mn) : hn = !0;
					var e = c + 1,
						t = Vt(c);
					t.hasOwnProperty("pid") && (e = t.pid);
					var n = vn + "&gid=" + r.galleryUID + "&pid=" + e;
					gn || -1 === In.hash.indexOf(n) && (bn = !0);
					var i = In.href.split("#")[0] + "#" + n;
					Cn ? "#" + n !== window.location.hash && history[gn ? "replaceState" : "pushState"]("", document.title, i) : gn ? In.replace(i) : In.hash = n, gn = !0, mn = setTimeout(function () {
						hn = !1
					}, 60)
				}
			};
		be("History", {
			publicMethods: {
				initHistory: function () {
					if (o.extend(r, Dn, !0), r.history) {
						In = window.location, bn = !1, wn = !1, gn = !1, vn = Mn(), Cn = "pushState" in history, vn.indexOf("gid=") > -1 && (vn = vn.split("&gid=")[0], vn = vn.split("?gid=")[0]), De("afterChange", a.updateURL), De("unbindEvents", function () {
							o.unbind(window, "hashchange", a.onHashChange)
						});
						var e = function () {
							xn = !0, wn || (bn ? history.back() : vn ? In.hash = vn : Cn ? history.pushState("", document.title, In.pathname + In.search) : In.hash = ""), Tn()
						};
						De("unbindEvents", function () {
							u && e()
						}), De("destroy", function () {
							xn || e()
						}), De("firstUpdate", function () {
							c = Sn().pid
						});
						var t = vn.indexOf("pid=");
						t > -1 && "&" === (vn = vn.substring(0, t)).slice(-1) && (vn = vn.slice(0, -1)), setTimeout(function () {
							l && o.bind(window, "hashchange", a.onHashChange)
						}, 40)
					}
				},
				onHashChange: function () {
					if (Mn() === vn) return wn = !0, void a.close();
					hn || (yn = !0, a.goTo(Sn().pid), yn = !1)
				},
				updateURL: function () {
					Tn(), yn || (gn ? pn = setTimeout(An, 800) : An())
				}
			}
		}), o.extend(a, et)
	}
});
/*! PhotoSwipe Default UI - 4.1.1 - 2015-12-24
 * http://photoswipe.com
 * Copyright (c) 2015 Dmitry Semenov; */
! function (a, b) {
	"function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.PhotoSwipeUI_Default = b()
}(this, function () {
	"use strict";
	var a = function (a, b) {
		var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = this,
			w = !1,
			x = !0,
			y = !0,
			z = {
				barsSize: {
					top: 44,
					bottom: "auto"
				},
				closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
				timeToIdle: 4e3,
				timeToIdleOutside: 1e3,
				loadingIndicatorDelay: 1e3,
				addCaptionHTMLFn: function (a, b) {
					return a.title ? (b.children[0].innerHTML = a.title, !0) : (b.children[0].innerHTML = "", !1)
				},
				closeEl: !0,
				captionEl: !0,
				fullscreenEl: !0,
				zoomEl: !0,
				shareEl: !0,
				counterEl: !0,
				arrowEl: !0,
				preloaderEl: !0,
				tapToClose: !1,
				tapToToggleControls: !0,
				clickToCloseNonZoomable: !0,
				shareButtons: [{
					id: "facebook",
					label: "Share on Facebook",
					url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
				}, {
					id: "twitter",
					label: "Tweet",
					url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
				}, {
					id: "pinterest",
					label: "Pin it",
					url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
				}, {
					id: "download",
					label: "Download image",
					url: "{{raw_image_url}}",
					download: !0
				}],
				getImageURLForShare: function () {
					return a.currItem.src || ""
				},
				getPageURLForShare: function () {
					return window.location.href
				},
				getTextForShare: function () {
					return a.currItem.title || ""
				},
				indexIndicatorSep: " / ",
				fitControlsWidth: 1200
			},
			A = function (a) {
				if (r) return !0;
				a = a || window.event, q.timeToIdle && q.mouseUsed && !k && K();
				for (var c, d, e = a.target || a.srcElement, f = e.getAttribute("class") || "", g = 0; g < S.length; g++) c = S[g], c.onTap && f.indexOf("pswp__" + c.name) > -1 && (c.onTap(), d = !0);
				if (d) {
					a.stopPropagation && a.stopPropagation(), r = !0;
					var h = b.features.isOldAndroid ? 600 : 30;
					s = setTimeout(function () {
						r = !1
					}, h)
				}
			},
			B = function () {
				return !a.likelyTouchDevice || q.mouseUsed || screen.width > q.fitControlsWidth
			},
			C = function (a, c, d) {
				b[(d ? "add" : "remove") + "Class"](a, "pswp__" + c)
			},
			D = function () {
				var a = 1 === q.getNumItemsFn();
				a !== p && (C(d, "ui--one-slide", a), p = a)
			},
			E = function () {
				C(i, "share-modal--hidden", y)
			},
			F = function () {
				return y = !y, y ? (b.removeClass(i, "pswp__share-modal--fade-in"), setTimeout(function () {
					y && E()
				}, 300)) : (E(), setTimeout(function () {
					y || b.addClass(i, "pswp__share-modal--fade-in")
				}, 30)), y || H(), !1
			},
			G = function (b) {
				b = b || window.event;
				var c = b.target || b.srcElement;
				return a.shout("shareLinkClick", b, c), c.href ? c.hasAttribute("download") ? !0 : (window.open(c.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), y || F(), !1) : !1
			},
			H = function () {
				for (var a, b, c, d, e, f = "", g = 0; g < q.shareButtons.length; g++) a = q.shareButtons[g], c = q.getImageURLForShare(a), d = q.getPageURLForShare(a), e = q.getTextForShare(a), b = a.url.replace("{{url}}", encodeURIComponent(d)).replace("{{image_url}}", encodeURIComponent(c)).replace("{{raw_image_url}}", c).replace("{{text}}", encodeURIComponent(e)), f += '<a href="' + b + '" target="_blank" class="pswp__share--' + a.id + '"' + (a.download ? "download" : "") + ">" + a.label + "</a>", q.parseShareButtonOut && (f = q.parseShareButtonOut(a, f));
				i.children[0].innerHTML = f, i.children[0].onclick = G
			},
			I = function (a) {
				for (var c = 0; c < q.closeElClasses.length; c++)
					if (b.hasClass(a, "pswp__" + q.closeElClasses[c])) return !0
			},
			J = 0,
			K = function () {
				clearTimeout(u), J = 0, k && v.setIdle(!1)
			},
			L = function (a) {
				a = a ? a : window.event;
				var b = a.relatedTarget || a.toElement;
				b && "HTML" !== b.nodeName || (clearTimeout(u), u = setTimeout(function () {
					v.setIdle(!0)
				}, q.timeToIdleOutside))
			},
			M = function () {
				q.fullscreenEl && !b.features.isOldAndroid && (c || (c = v.getFullscreenAPI()), c ? (b.bind(document, c.eventK, v.updateFullscreen), v.updateFullscreen(), b.addClass(a.template, "pswp--supports-fs")) : b.removeClass(a.template, "pswp--supports-fs"))
			},
			N = function () {
				q.preloaderEl && (O(!0), l("beforeChange", function () {
					clearTimeout(o), o = setTimeout(function () {
						a.currItem && a.currItem.loading ? (!a.allowProgressiveImg() || a.currItem.img && !a.currItem.img.naturalWidth) && O(!1) : O(!0)
					}, q.loadingIndicatorDelay)
				}), l("imageLoadComplete", function (b, c) {
					a.currItem === c && O(!0)
				}))
			},
			O = function (a) {
				n !== a && (C(m, "preloader--active", !a), n = a)
			},
			P = function (a) {
				var c = a.vGap;
				if (B()) {
					var g = q.barsSize;
					if (q.captionEl && "auto" === g.bottom)
						if (f || (f = b.createEl("pswp__caption pswp__caption--fake"), f.appendChild(b.createEl("pswp__caption__center")), d.insertBefore(f, e), b.addClass(d, "pswp__ui--fit")), q.addCaptionHTMLFn(a, f, !0)) {
							var h = f.clientHeight;
							c.bottom = parseInt(h, 10) || 44
						} else c.bottom = g.top;
					else c.bottom = "auto" === g.bottom ? 0 : g.bottom;
					c.top = g.top
				} else c.top = c.bottom = 0
			},
			Q = function () {
				q.timeToIdle && l("mouseUsed", function () {
					b.bind(document, "mousemove", K), b.bind(document, "mouseout", L), t = setInterval(function () {
						J++, 2 === J && v.setIdle(!0)
					}, q.timeToIdle / 2)
				})
			},
			R = function () {
				l("onVerticalDrag", function (a) {
					x && .95 > a ? v.hideControls() : !x && a >= .95 && v.showControls()
				});
				var a;
				l("onPinchClose", function (b) {
					x && .9 > b ? (v.hideControls(), a = !0) : a && !x && b > .9 && v.showControls()
				}), l("zoomGestureEnded", function () {
					a = !1, a && !x && v.showControls()
				})
			},
			S = [{
				name: "caption",
				option: "captionEl",
				onInit: function (a) {
					e = a
				}
			}, {
				name: "share-modal",
				option: "shareEl",
				onInit: function (a) {
					i = a
				},
				onTap: function () {
					F()
				}
			}, {
				name: "button--share",
				option: "shareEl",
				onInit: function (a) {
					h = a
				},
				onTap: function () {
					F()
				}
			}, {
				name: "button--zoom",
				option: "zoomEl",
				onTap: a.toggleDesktopZoom
			}, {
				name: "counter",
				option: "counterEl",
				onInit: function (a) {
					g = a
				}
			}, {
				name: "button--close",
				option: "closeEl",
				onTap: a.close
			}, {
				name: "button--arrow--left",
				option: "arrowEl",
				onTap: a.prev
			}, {
				name: "button--arrow--right",
				option: "arrowEl",
				onTap: a.next
			}, {
				name: "button--fs",
				option: "fullscreenEl",
				onTap: function () {
					c.isFullscreen() ? c.exit() : c.enter()
				}
			}, {
				name: "preloader",
				option: "preloaderEl",
				onInit: function (a) {
					m = a
				}
			}],
			T = function () {
				var a, c, e, f = function (d) {
					if (d)
						for (var f = d.length, g = 0; f > g; g++) {
							a = d[g], c = a.className;
							for (var h = 0; h < S.length; h++) e = S[h], c.indexOf("pswp__" + e.name) > -1 && (q[e.option] ? (b.removeClass(a, "pswp__element--disabled"), e.onInit && e.onInit(a)) : b.addClass(a, "pswp__element--disabled"))
						}
				};
				f(d.children);
				var g = b.getChildByClass(d, "pswp__top-bar");
				g && f(g.children)
			};
		v.init = function () {
			b.extend(a.options, z, !0), q = a.options, d = b.getChildByClass(a.scrollWrap, "pswp__ui"), l = a.listen, R(), l("beforeChange", v.update), l("doubleTap", function (b) {
				var c = a.currItem.initialZoomLevel;
				a.getZoomLevel() !== c ? a.zoomTo(c, b, 333) : a.zoomTo(q.getDoubleTapZoom(!1, a.currItem), b, 333)
			}), l("preventDragEvent", function (a, b, c) {
				var d = a.target || a.srcElement;
				d && d.getAttribute("class") && a.type.indexOf("mouse") > -1 && (d.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(d.tagName)) && (c.prevent = !1)
			}), l("bindEvents", function () {
				b.bind(d, "pswpTap click", A), b.bind(a.scrollWrap, "pswpTap", v.onGlobalTap), a.likelyTouchDevice || b.bind(a.scrollWrap, "mouseover", v.onMouseOver)
			}), l("unbindEvents", function () {
				y || F(), t && clearInterval(t), b.unbind(document, "mouseout", L), b.unbind(document, "mousemove", K), b.unbind(d, "pswpTap click", A), b.unbind(a.scrollWrap, "pswpTap", v.onGlobalTap), b.unbind(a.scrollWrap, "mouseover", v.onMouseOver), c && (b.unbind(document, c.eventK, v.updateFullscreen), c.isFullscreen() && (q.hideAnimationDuration = 0, c.exit()), c = null)
			}), l("destroy", function () {
				q.captionEl && (f && d.removeChild(f), b.removeClass(e, "pswp__caption--empty")), i && (i.children[0].onclick = null), b.removeClass(d, "pswp__ui--over-close"), b.addClass(d, "pswp__ui--hidden"), v.setIdle(!1)
			}), q.showAnimationDuration || b.removeClass(d, "pswp__ui--hidden"), l("initialZoomIn", function () {
				q.showAnimationDuration && b.removeClass(d, "pswp__ui--hidden")
			}), l("initialZoomOut", function () {
				b.addClass(d, "pswp__ui--hidden")
			}), l("parseVerticalMargin", P), T(), q.shareEl && h && i && (y = !0), D(), Q(), M(), N()
		}, v.setIdle = function (a) {
			k = a, C(d, "ui--idle", a)
		}, v.update = function () {
			x && a.currItem ? (v.updateIndexIndicator(), q.captionEl && (q.addCaptionHTMLFn(a.currItem, e), C(e, "caption--empty", !a.currItem.title)), w = !0) : w = !1, y || F(), D()
		}, v.updateFullscreen = function (d) {
			d && setTimeout(function () {
				a.setScrollOffset(0, b.getScrollY())
			}, 50), b[(c.isFullscreen() ? "add" : "remove") + "Class"](a.template, "pswp--fs")
		}, v.updateIndexIndicator = function () {
			q.counterEl && (g.innerHTML = a.getCurrentIndex() + 1 + q.indexIndicatorSep + q.getNumItemsFn())
		}, v.onGlobalTap = function (c) {
			c = c || window.event;
			var d = c.target || c.srcElement;
			if (!r)
				if (c.detail && "mouse" === c.detail.pointerType) {
					if (I(d)) return void a.close();
					b.hasClass(d, "pswp__img") && (1 === a.getZoomLevel() && a.getZoomLevel() <= a.currItem.fitRatio ? q.clickToCloseNonZoomable && a.close() : a.toggleDesktopZoom(c.detail.releasePoint))
				} else if (q.tapToToggleControls && (x ? v.hideControls() : v.showControls()), q.tapToClose && (b.hasClass(d, "pswp__img") || I(d))) return void a.close()
		}, v.onMouseOver = function (a) {
			a = a || window.event;
			var b = a.target || a.srcElement;
			C(d, "ui--over-close", I(b))
		}, v.hideControls = function () {
			b.addClass(d, "pswp__ui--hidden"), x = !1
		}, v.showControls = function () {
			x = !0, w || v.update(), b.removeClass(d, "pswp__ui--hidden")
		}, v.supportsFullscreen = function () {
			var a = document;
			return !!(a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen)
		}, v.getFullscreenAPI = function () {
			var b, c = document.documentElement,
				d = "fullscreenchange";
			return c.requestFullscreen ? b = {
				enterK: "requestFullscreen",
				exitK: "exitFullscreen",
				elementK: "fullscreenElement",
				eventK: d
			} : c.mozRequestFullScreen ? b = {
				enterK: "mozRequestFullScreen",
				exitK: "mozCancelFullScreen",
				elementK: "mozFullScreenElement",
				eventK: "moz" + d
			} : c.webkitRequestFullscreen ? b = {
				enterK: "webkitRequestFullscreen",
				exitK: "webkitExitFullscreen",
				elementK: "webkitFullscreenElement",
				eventK: "webkit" + d
			} : c.msRequestFullscreen && (b = {
				enterK: "msRequestFullscreen",
				exitK: "msExitFullscreen",
				elementK: "msFullscreenElement",
				eventK: "MSFullscreenChange"
			}), b && (b.enter = function () {
				return j = q.closeOnScroll, q.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? a.template[this.enterK]() : void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
			}, b.exit = function () {
				return q.closeOnScroll = j, document[this.exitK]()
			}, b.isFullscreen = function () {
				return document[this.elementK]
			}), b
		}
	};
	return a
});
jQuery(function (e) {
	if ("undefined" == typeof wc_single_product_params) return !1;
	e("body").on("init", ".wc-tabs-wrapper, .woocommerce-tabs", function () {
		e(".wc-tab, .woocommerce-tabs .panel:not(.panel .panel)").hide();
		var t = window.location.hash,
			i = window.location.href,
			o = e(this).find(".wc-tabs, ul.tabs").first();
		t.toLowerCase().indexOf("comment-") >= 0 || "#reviews" === t || "#tab-reviews" === t ? o.find("li.reviews_tab a").click() : i.indexOf("comment-page-") > 0 || i.indexOf("cpage=") > 0 ? o.find("li.reviews_tab a").click() : "#tab-additional_information" === t ? o.find("li.additional_information_tab a").click() : o.find("li:first a").click()
	}).on("click", ".wc-tabs li a, ul.tabs li a", function (t) {
		t.preventDefault();
		var i = e(this),
			o = i.closest(".wc-tabs-wrapper, .woocommerce-tabs");
		o.find(".wc-tabs, ul.tabs").find("li").removeClass("active"), o.find(".wc-tab, .panel:not(.panel .panel)").hide(), i.closest("li").addClass("active"), o.find(i.attr("href")).show()
	}).on("click", "a.woocommerce-review-link", function () {
		return e(".reviews_tab a").click(), !0
	}).on("init", "#rating", function () {
		e("#rating").hide().before('<p class="stars"><span><a class="star-1" href="#">1</a><a class="star-2" href="#">2</a><a class="star-3" href="#">3</a><a class="star-4" href="#">4</a><a class="star-5" href="#">5</a></span></p>')
	}).on("click", "#respond p.stars a", function () {
		var t = e(this),
			i = e(this).closest("#respond").find("#rating"),
			o = e(this).closest(".stars");
		return i.val(t.text()), t.siblings("a").removeClass("active"), t.addClass("active"), o.addClass("selected"), !1
	}).on("click", "#respond #submit", function () {
		var t = e(this).closest("#respond").find("#rating"),
			i = t.val();
		if (t.length > 0 && !i && "yes" === wc_single_product_params.review_rating_required) return window.alert(wc_single_product_params.i18n_required_rating_text), !1
	}), e(".wc-tabs-wrapper, .woocommerce-tabs, #rating").trigger("init");
	var t = function (t, i) {
		this.$target = t, this.$images = e(".woocommerce-product-gallery__image", t), 0 !== this.$images.length ? (t.data("product_gallery", this), this.flexslider_enabled = e.isFunction(e.fn.flexslider) && wc_single_product_params.flexslider_enabled, this.zoom_enabled = e.isFunction(e.fn.zoom) && wc_single_product_params.zoom_enabled, this.photoswipe_enabled = "undefined" != typeof PhotoSwipe && wc_single_product_params.photoswipe_enabled, i && (this.flexslider_enabled = !1 !== i.flexslider_enabled && this.flexslider_enabled, this.zoom_enabled = !1 !== i.zoom_enabled && this.zoom_enabled, this.photoswipe_enabled = !1 !== i.photoswipe_enabled && this.photoswipe_enabled), 1 === this.$images.length && (this.flexslider_enabled = !1), this.initFlexslider = this.initFlexslider.bind(this), this.initZoom = this.initZoom.bind(this), this.initZoomForTarget = this.initZoomForTarget.bind(this), this.initPhotoswipe = this.initPhotoswipe.bind(this), this.onResetSlidePosition = this.onResetSlidePosition.bind(this), this.getGalleryItems = this.getGalleryItems.bind(this), this.openPhotoswipe = this.openPhotoswipe.bind(this), this.flexslider_enabled ? (this.initFlexslider(), t.on("woocommerce_gallery_reset_slide_position", this.onResetSlidePosition)) : this.$target.css("opacity", 1), this.zoom_enabled && (this.initZoom(), t.on("woocommerce_gallery_init_zoom", this.initZoom)), this.photoswipe_enabled && this.initPhotoswipe()) : this.$target.css("opacity", 1)
	};
	t.prototype.initFlexslider = function () {
		var t = this.$target,
			i = this,
			o = e.extend({
				selector: ".woocommerce-product-gallery__wrapper > .woocommerce-product-gallery__image",
				start: function () {
					t.css("opacity", 1)
				},
				after: function (e) {
					i.initZoomForTarget(i.$images.eq(e.currentSlide))
				}
			}, wc_single_product_params.flexslider);
		t.flexslider(o), e(".woocommerce-product-gallery__wrapper .woocommerce-product-gallery__image:eq(0) .wp-post-image").one("load", function () {
			var t = e(this);
			t && setTimeout(function () {
				var e = t.closest(".woocommerce-product-gallery__image").height(),
					i = t.closest(".flex-viewport");
				e && i && i.height(e)
			}, 100)
		}).each(function () {
			this.complete && e(this).trigger("load")
		})
	}, t.prototype.initZoom = function () {
		this.initZoomForTarget(this.$images.first())
	}, t.prototype.initZoomForTarget = function (t) {
		if (!this.zoom_enabled) return !1;
		var i = this.$target.width(),
			o = !1;
		if (e(t).each(function (t, a) {
				if (e(a).find("img").data("large_image_width") > i) return o = !0, !1
			}), o) {
			var a = e.extend({
				touch: !1
			}, wc_single_product_params.zoom_options);
			"ontouchstart" in document.documentElement && (a.on = "click"), t.trigger("zoom.destroy"), t.zoom(a)
		}
	}, t.prototype.initPhotoswipe = function () {
		this.zoom_enabled && this.$images.length > 0 ? (this.$target.prepend('<a href="#" class="woocommerce-product-gallery__trigger">ðŸ”</a>'), this.$target.on("click", ".woocommerce-product-gallery__trigger", this.openPhotoswipe), this.$target.on("click", ".woocommerce-product-gallery__image a", function (e) {
			e.preventDefault()
		}), this.flexslider_enabled || this.$target.on("click", ".woocommerce-product-gallery__image a", this.openPhotoswipe)) : this.$target.on("click", ".woocommerce-product-gallery__image a", this.openPhotoswipe)
	}, t.prototype.onResetSlidePosition = function () {
		this.$target.flexslider(0)
	}, t.prototype.getGalleryItems = function () {
		var t = this.$images,
			i = [];
		return t.length > 0 && t.each(function (t, o) {
			var a = e(o).find("img");
			if (a.length) {
				var s = {
					src: a.attr("data-large_image"),
					w: a.attr("data-large_image_width"),
					h: a.attr("data-large_image_height"),
					title: a.attr("data-caption") ? a.attr("data-caption") : a.attr("title")
				};
				i.push(s)
			}
		}), i
	}, t.prototype.openPhotoswipe = function (t) {
		t.preventDefault();
		var i, o = e(".pswp")[0],
			a = this.getGalleryItems(),
			s = e(t.target);
		i = s.is(".woocommerce-product-gallery__trigger") || s.is(".woocommerce-product-gallery__trigger img") ? this.$target.find(".flex-active-slide") : s.closest(".woocommerce-product-gallery__image");
		var r = e.extend({
			index: e(i).index()
		}, wc_single_product_params.photoswipe_options);
		new PhotoSwipe(o, PhotoSwipeUI_Default, a, r).init()
	}, e.fn.wc_product_gallery = function (e) {
		return new t(this, e), this
	}, e(".woocommerce-product-gallery").each(function () {
		e(this).wc_product_gallery()
	})
});
/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
! function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
	function b(b, d) {
		var e, f, g, h = b.nodeName.toLowerCase();
		return "area" === h ? (e = b.parentNode, f = e.name, !(!b.href || !f || "map" !== e.nodeName.toLowerCase()) && (g = a("img[usemap='#" + f + "']")[0], !!g && c(g))) : (/^(input|select|textarea|button|object)$/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b)
	}

	function c(b) {
		return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function () {
			return "hidden" === a.css(this, "visibility")
		}).length
	}
	a.ui = a.ui || {}, a.extend(a.ui, {
		version: "1.11.4",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}), a.fn.extend({
		scrollParent: function (b) {
			var c = this.css("position"),
				d = "absolute" === c,
				e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
				f = this.parents().filter(function () {
					var b = a(this);
					return (!d || "static" !== b.css("position")) && e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
				}).eq(0);
			return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document)
		},
		uniqueId: function () {
			var a = 0;
			return function () {
				return this.each(function () {
					this.id || (this.id = "ui-id-" + ++a)
				})
			}
		}(),
		removeUniqueId: function () {
			return this.each(function () {
				/^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
			})
		}
	}), a.extend(a.expr[":"], {
		data: a.expr.createPseudo ? a.expr.createPseudo(function (b) {
			return function (c) {
				return !!a.data(c, b)
			}
		}) : function (b, c, d) {
			return !!a.data(b, d[3])
		},
		focusable: function (c) {
			return b(c, !isNaN(a.attr(c, "tabindex")))
		},
		tabbable: function (c) {
			var d = a.attr(c, "tabindex"),
				e = isNaN(d);
			return (e || d >= 0) && b(c, !e)
		}
	}), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function (b, c) {
		function d(b, c, d, f) {
			return a.each(e, function () {
				c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
			}), c
		}
		var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
			f = c.toLowerCase(),
			g = {
				innerWidth: a.fn.innerWidth,
				innerHeight: a.fn.innerHeight,
				outerWidth: a.fn.outerWidth,
				outerHeight: a.fn.outerHeight
			};
		a.fn["inner" + c] = function (b) {
			return void 0 === b ? g["inner" + c].call(this) : this.each(function () {
				a(this).css(f, d(this, b) + "px")
			})
		}, a.fn["outer" + c] = function (b, e) {
			return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function () {
				a(this).css(f, d(this, b, !0, e) + "px")
			})
		}
	}), a.fn.addBack || (a.fn.addBack = function (a) {
		return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
	}), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function (b) {
		return function (c) {
			return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
		}
	}(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.fn.extend({
		focus: function (b) {
			return function (c, d) {
				return "number" == typeof c ? this.each(function () {
					var b = this;
					setTimeout(function () {
						a(b).focus(), d && d.call(b)
					}, c)
				}) : b.apply(this, arguments)
			}
		}(a.fn.focus),
		disableSelection: function () {
			var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
			return function () {
				return this.bind(a + ".ui-disableSelection", function (a) {
					a.preventDefault()
				})
			}
		}(),
		enableSelection: function () {
			return this.unbind(".ui-disableSelection")
		},
		zIndex: function (b) {
			if (void 0 !== b) return this.css("zIndex", b);
			if (this.length)
				for (var c, d, e = a(this[0]); e.length && e[0] !== document;) {
					if (c = e.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(e.css("zIndex"), 10), !isNaN(d) && 0 !== d)) return d;
					e = e.parent()
				}
			return 0
		}
	}), a.ui.plugin = {
		add: function (b, c, d) {
			var e, f = a.ui[b].prototype;
			for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
		},
		call: function (a, b, c, d) {
			var e, f = a.plugins[b];
			if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
				for (e = 0; e < f.length; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c)
		}
	}
});
/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
! function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
	var b = 0,
		c = Array.prototype.slice;
	return a.cleanData = function (b) {
		return function (c) {
			var d, e, f;
			for (f = 0; null != (e = c[f]); f++) try {
				d = a._data(e, "events"), d && d.remove && a(e).triggerHandler("remove")
			} catch (g) {}
			b(c)
		}
	}(a.cleanData), a.widget = function (b, c, d) {
		var e, f, g, h, i = {},
			j = b.split(".")[0];
		return b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function (b) {
			return !!a.data(b, e)
		}, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function (a, b) {
			return this._createWidget ? void(arguments.length && this._createWidget(a, b)) : new g(a, b)
		}, a.extend(g, f, {
			version: d.version,
			_proto: a.extend({}, d),
			_childConstructors: []
		}), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function (b, d) {
			return a.isFunction(d) ? void(i[b] = function () {
				var a = function () {
						return c.prototype[b].apply(this, arguments)
					},
					e = function (a) {
						return c.prototype[b].apply(this, a)
					};
				return function () {
					var b, c = this._super,
						f = this._superApply;
					return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
				}
			}()) : void(i[b] = d)
		}), g.prototype = a.widget.extend(h, {
			widgetEventPrefix: f ? h.widgetEventPrefix || b : b
		}, i, {
			constructor: g,
			namespace: j,
			widgetName: b,
			widgetFullName: e
		}), f ? (a.each(f._childConstructors, function (b, c) {
			var d = c.prototype;
			a.widget(d.namespace + "." + d.widgetName, g, c._proto)
		}), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g), g
	}, a.widget.extend = function (b) {
		for (var d, e, f = c.call(arguments, 1), g = 0, h = f.length; g < h; g++)
			for (d in f[g]) e = f[g][d], f[g].hasOwnProperty(d) && void 0 !== e && (a.isPlainObject(e) ? b[d] = a.isPlainObject(b[d]) ? a.widget.extend({}, b[d], e) : a.widget.extend({}, e) : b[d] = e);
		return b
	}, a.widget.bridge = function (b, d) {
		var e = d.prototype.widgetFullName || b;
		a.fn[b] = function (f) {
			var g = "string" == typeof f,
				h = c.call(arguments, 1),
				i = this;
			return g ? this.each(function () {
				var c, d = a.data(this, e);
				return "instance" === f ? (i = d, !1) : d ? a.isFunction(d[f]) && "_" !== f.charAt(0) ? (c = d[f].apply(d, h), c !== d && void 0 !== c ? (i = c && c.jquery ? i.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + f + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + f + "'")
			}) : (h.length && (f = a.widget.extend.apply(null, [f].concat(h))), this.each(function () {
				var b = a.data(this, e);
				b ? (b.option(f || {}), b._init && b._init()) : a.data(this, e, new d(f, this))
			})), i
		}
	}, a.Widget = function () {}, a.Widget._childConstructors = [], a.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: !1,
			create: null
		},
		_createWidget: function (c, d) {
			d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = b++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
				remove: function (a) {
					a.target === d && this.destroy()
				}
			}), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this.options = a.widget.extend({}, this.options, this._getCreateOptions(), c), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
		},
		_getCreateOptions: a.noop,
		_getCreateEventData: a.noop,
		_create: a.noop,
		_init: a.noop,
		destroy: function () {
			this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
		},
		_destroy: a.noop,
		widget: function () {
			return this.element
		},
		option: function (b, c) {
			var d, e, f, g = b;
			if (0 === arguments.length) return a.widget.extend({}, this.options);
			if ("string" == typeof b)
				if (g = {}, d = b.split("."), b = d.shift(), d.length) {
					for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; f < d.length - 1; f++) e[d[f]] = e[d[f]] || {}, e = e[d[f]];
					if (b = d.pop(), 1 === arguments.length) return void 0 === e[b] ? null : e[b];
					e[b] = c
				} else {
					if (1 === arguments.length) return void 0 === this.options[b] ? null : this.options[b];
					g[b] = c
				} return this._setOptions(g), this
		},
		_setOptions: function (a) {
			var b;
			for (b in a) this._setOption(b, a[b]);
			return this
		},
		_setOption: function (a, b) {
			return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
		},
		enable: function () {
			return this._setOptions({
				disabled: !1
			})
		},
		disable: function () {
			return this._setOptions({
				disabled: !0
			})
		},
		_on: function (b, c, d) {
			var e, f = this;
			"boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function (d, g) {
				function h() {
					if (b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled")) return ("string" == typeof g ? f[g] : g).apply(f, arguments)
				}
				"string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
				var i = d.match(/^([\w:-]*)\s*(.*)$/),
					j = i[1] + f.eventNamespace,
					k = i[2];
				k ? e.delegate(k, j, h) : c.bind(j, h)
			})
		},
		_off: function (b, c) {
			c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, b.unbind(c).undelegate(c), this.bindings = a(this.bindings.not(b).get()), this.focusable = a(this.focusable.not(b).get()), this.hoverable = a(this.hoverable.not(b).get())
		},
		_delay: function (a, b) {
			function c() {
				return ("string" == typeof a ? d[a] : a).apply(d, arguments)
			}
			var d = this;
			return setTimeout(c, b || 0)
		},
		_hoverable: function (b) {
			this.hoverable = this.hoverable.add(b), this._on(b, {
				mouseenter: function (b) {
					a(b.currentTarget).addClass("ui-state-hover")
				},
				mouseleave: function (b) {
					a(b.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable: function (b) {
			this.focusable = this.focusable.add(b), this._on(b, {
				focusin: function (b) {
					a(b.currentTarget).addClass("ui-state-focus")
				},
				focusout: function (b) {
					a(b.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger: function (b, c, d) {
			var e, f, g = this.options[b];
			if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
				for (e in f) e in c || (c[e] = f[e]);
			return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
		}
	}, a.each({
		show: "fadeIn",
		hide: "fadeOut"
	}, function (b, c) {
		a.Widget.prototype["_" + b] = function (d, e, f) {
			"string" == typeof e && (e = {
				effect: e
			});
			var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
			e = e || {}, "number" == typeof e && (e = {
				duration: e
			}), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function (c) {
				a(this)[b](), f && f.call(d[0]), c()
			})
		}
	}), a.widget
});
/*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
! function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
	return function () {
		function b(a, b, c) {
			return [parseFloat(a[0]) * (n.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (n.test(a[1]) ? c / 100 : 1)]
		}

		function c(b, c) {
			return parseInt(a.css(b, c), 10) || 0
		}

		function d(b) {
			var c = b[0];
			return 9 === c.nodeType ? {
				width: b.width(),
				height: b.height(),
				offset: {
					top: 0,
					left: 0
				}
			} : a.isWindow(c) ? {
				width: b.width(),
				height: b.height(),
				offset: {
					top: b.scrollTop(),
					left: b.scrollLeft()
				}
			} : c.preventDefault ? {
				width: 0,
				height: 0,
				offset: {
					top: c.pageY,
					left: c.pageX
				}
			} : {
				width: b.outerWidth(),
				height: b.outerHeight(),
				offset: b.offset()
			}
		}
		a.ui = a.ui || {};
		var e, f, g = Math.max,
			h = Math.abs,
			i = Math.round,
			j = /left|center|right/,
			k = /top|center|bottom/,
			l = /[\+\-]\d+(\.[\d]+)?%?/,
			m = /^\w+/,
			n = /%$/,
			o = a.fn.position;
		a.position = {
				scrollbarWidth: function () {
					if (void 0 !== e) return e;
					var b, c, d = a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
						f = d.children()[0];
					return a("body").append(d), b = f.offsetWidth, d.css("overflow", "scroll"), c = f.offsetWidth, b === c && (c = d[0].clientWidth), d.remove(), e = b - c
				},
				getScrollInfo: function (b) {
					var c = b.isWindow || b.isDocument ? "" : b.element.css("overflow-x"),
						d = b.isWindow || b.isDocument ? "" : b.element.css("overflow-y"),
						e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth,
						f = "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight;
					return {
						width: f ? a.position.scrollbarWidth() : 0,
						height: e ? a.position.scrollbarWidth() : 0
					}
				},
				getWithinInfo: function (b) {
					var c = a(b || window),
						d = a.isWindow(c[0]),
						e = !!c[0] && 9 === c[0].nodeType;
					return {
						element: c,
						isWindow: d,
						isDocument: e,
						offset: c.offset() || {
							left: 0,
							top: 0
						},
						scrollLeft: c.scrollLeft(),
						scrollTop: c.scrollTop(),
						width: d || e ? c.width() : c.outerWidth(),
						height: d || e ? c.height() : c.outerHeight()
					}
				}
			}, a.fn.position = function (e) {
				if (!e || !e.of) return o.apply(this, arguments);
				e = a.extend({}, e);
				var n, p, q, r, s, t, u = a(e.of),
					v = a.position.getWithinInfo(e.within),
					w = a.position.getScrollInfo(v),
					x = (e.collision || "flip").split(" "),
					y = {};
				return t = d(u), u[0].preventDefault && (e.at = "left top"), p = t.width, q = t.height, r = t.offset, s = a.extend({}, r), a.each(["my", "at"], function () {
					var a, b, c = (e[this] || "").split(" ");
					1 === c.length && (c = j.test(c[0]) ? c.concat(["center"]) : k.test(c[0]) ? ["center"].concat(c) : ["center", "center"]), c[0] = j.test(c[0]) ? c[0] : "center", c[1] = k.test(c[1]) ? c[1] : "center", a = l.exec(c[0]), b = l.exec(c[1]), y[this] = [a ? a[0] : 0, b ? b[0] : 0], e[this] = [m.exec(c[0])[0], m.exec(c[1])[0]]
				}), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? s.left += p : "center" === e.at[0] && (s.left += p / 2), "bottom" === e.at[1] ? s.top += q : "center" === e.at[1] && (s.top += q / 2), n = b(y.at, p, q), s.left += n[0], s.top += n[1], this.each(function () {
					var d, j, k = a(this),
						l = k.outerWidth(),
						m = k.outerHeight(),
						o = c(this, "marginLeft"),
						t = c(this, "marginTop"),
						z = l + o + c(this, "marginRight") + w.width,
						A = m + t + c(this, "marginBottom") + w.height,
						B = a.extend({}, s),
						C = b(y.my, k.outerWidth(), k.outerHeight());
					"right" === e.my[0] ? B.left -= l : "center" === e.my[0] && (B.left -= l / 2), "bottom" === e.my[1] ? B.top -= m : "center" === e.my[1] && (B.top -= m / 2), B.left += C[0], B.top += C[1], f || (B.left = i(B.left), B.top = i(B.top)), d = {
						marginLeft: o,
						marginTop: t
					}, a.each(["left", "top"], function (b, c) {
						a.ui.position[x[b]] && a.ui.position[x[b]][c](B, {
							targetWidth: p,
							targetHeight: q,
							elemWidth: l,
							elemHeight: m,
							collisionPosition: d,
							collisionWidth: z,
							collisionHeight: A,
							offset: [n[0] + C[0], n[1] + C[1]],
							my: e.my,
							at: e.at,
							within: v,
							elem: k
						})
					}), e.using && (j = function (a) {
						var b = r.left - B.left,
							c = b + p - l,
							d = r.top - B.top,
							f = d + q - m,
							i = {
								target: {
									element: u,
									left: r.left,
									top: r.top,
									width: p,
									height: q
								},
								element: {
									element: k,
									left: B.left,
									top: B.top,
									width: l,
									height: m
								},
								horizontal: c < 0 ? "left" : b > 0 ? "right" : "center",
								vertical: f < 0 ? "top" : d > 0 ? "bottom" : "middle"
							};
						p < l && h(b + c) < p && (i.horizontal = "center"), q < m && h(d + f) < q && (i.vertical = "middle"), g(h(b), h(c)) > g(h(d), h(f)) ? i.important = "horizontal" : i.important = "vertical", e.using.call(this, a, i)
					}), k.offset(a.extend(B, {
						using: j
					}))
				})
			}, a.ui.position = {
				fit: {
					left: function (a, b) {
						var c, d = b.within,
							e = d.isWindow ? d.scrollLeft : d.offset.left,
							f = d.width,
							h = a.left - b.collisionPosition.marginLeft,
							i = e - h,
							j = h + b.collisionWidth - f - e;
						b.collisionWidth > f ? i > 0 && j <= 0 ? (c = a.left + i + b.collisionWidth - f - e, a.left += i - c) : j > 0 && i <= 0 ? a.left = e : i > j ? a.left = e + f - b.collisionWidth : a.left = e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = g(a.left - h, a.left)
					},
					top: function (a, b) {
						var c, d = b.within,
							e = d.isWindow ? d.scrollTop : d.offset.top,
							f = b.within.height,
							h = a.top - b.collisionPosition.marginTop,
							i = e - h,
							j = h + b.collisionHeight - f - e;
						b.collisionHeight > f ? i > 0 && j <= 0 ? (c = a.top + i + b.collisionHeight - f - e, a.top += i - c) : j > 0 && i <= 0 ? a.top = e : i > j ? a.top = e + f - b.collisionHeight : a.top = e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = g(a.top - h, a.top)
					}
				},
				flip: {
					left: function (a, b) {
						var c, d, e = b.within,
							f = e.offset.left + e.scrollLeft,
							g = e.width,
							i = e.isWindow ? e.scrollLeft : e.offset.left,
							j = a.left - b.collisionPosition.marginLeft,
							k = j - i,
							l = j + b.collisionWidth - g - i,
							m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0,
							n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0,
							o = -2 * b.offset[0];
						k < 0 ? (c = a.left + m + n + o + b.collisionWidth - g - f, (c < 0 || c < h(k)) && (a.left += m + n + o)) : l > 0 && (d = a.left - b.collisionPosition.marginLeft + m + n + o - i, (d > 0 || h(d) < l) && (a.left += m + n + o))
					},
					top: function (a, b) {
						var c, d, e = b.within,
							f = e.offset.top + e.scrollTop,
							g = e.height,
							i = e.isWindow ? e.scrollTop : e.offset.top,
							j = a.top - b.collisionPosition.marginTop,
							k = j - i,
							l = j + b.collisionHeight - g - i,
							m = "top" === b.my[1],
							n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0,
							o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0,
							p = -2 * b.offset[1];
						k < 0 ? (d = a.top + n + o + p + b.collisionHeight - g - f, (d < 0 || d < h(k)) && (a.top += n + o + p)) : l > 0 && (c = a.top - b.collisionPosition.marginTop + n + o + p - i, (c > 0 || h(c) < l) && (a.top += n + o + p))
					}
				},
				flipfit: {
					left: function () {
						a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments)
					},
					top: function () {
						a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments)
					}
				}
			},
			function () {
				var b, c, d, e, g, h = document.getElementsByTagName("body")[0],
					i = document.createElement("div");
				b = document.createElement(h ? "div" : "body"), d = {
					visibility: "hidden",
					width: 0,
					height: 0,
					border: 0,
					margin: 0,
					background: "none"
				}, h && a.extend(d, {
					position: "absolute",
					left: "-1000px",
					top: "-1000px"
				});
				for (g in d) b.style[g] = d[g];
				b.appendChild(i), c = h || document.documentElement, c.insertBefore(b, c.firstChild), i.style.cssText = "position: absolute; left: 10.7432222px;", e = a(i).offset().left, f = e > 10 && e < 11, b.innerHTML = "", c.removeChild(b)
			}()
	}(), a.ui.position
});
/*!
 * jQuery UI Tooltip 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tooltip/
 */
! function (a) {
	"function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./position"], a) : a(jQuery)
}(function (a) {
	return a.widget("ui.tooltip", {
		version: "1.11.4",
		options: {
			content: function () {
				var b = a(this).attr("title") || "";
				return a("<a>").text(b).html()
			},
			hide: !0,
			items: "[title]:not([disabled])",
			position: {
				my: "left top+15",
				at: "left bottom",
				collision: "flipfit flip"
			},
			show: !0,
			tooltipClass: null,
			track: !1,
			close: null,
			open: null
		},
		_addDescribedBy: function (b, c) {
			var d = (b.attr("aria-describedby") || "").split(/\s+/);
			d.push(c), b.data("ui-tooltip-id", c).attr("aria-describedby", a.trim(d.join(" ")))
		},
		_removeDescribedBy: function (b) {
			var c = b.data("ui-tooltip-id"),
				d = (b.attr("aria-describedby") || "").split(/\s+/),
				e = a.inArray(c, d);
			e !== -1 && d.splice(e, 1), b.removeData("ui-tooltip-id"), d = a.trim(d.join(" ")), d ? b.attr("aria-describedby", d) : b.removeAttr("aria-describedby")
		},
		_create: function () {
			this._on({
				mouseover: "open",
				focusin: "open"
			}), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = a("<div>").attr({
				role: "log",
				"aria-live": "assertive",
				"aria-relevant": "additions"
			}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
		},
		_setOption: function (b, c) {
			var d = this;
			return "disabled" === b ? (this[c ? "_disable" : "_enable"](), void(this.options[b] = c)) : (this._super(b, c), void("content" === b && a.each(this.tooltips, function (a, b) {
				d._updateContent(b.element)
			})))
		},
		_disable: function () {
			var b = this;
			a.each(this.tooltips, function (c, d) {
				var e = a.Event("blur");
				e.target = e.currentTarget = d.element[0], b.close(e, !0)
			}), this.element.find(this.options.items).addBack().each(function () {
				var b = a(this);
				b.is("[title]") && b.data("ui-tooltip-title", b.attr("title")).removeAttr("title")
			})
		},
		_enable: function () {
			this.element.find(this.options.items).addBack().each(function () {
				var b = a(this);
				b.data("ui-tooltip-title") && b.attr("title", b.data("ui-tooltip-title"))
			})
		},
		open: function (b) {
			var c = this,
				d = a(b ? b.target : this.element).closest(this.options.items);
			d.length && !d.data("ui-tooltip-id") && (d.attr("title") && d.data("ui-tooltip-title", d.attr("title")), d.data("ui-tooltip-open", !0), b && "mouseover" === b.type && d.parents().each(function () {
				var b, d = a(this);
				d.data("ui-tooltip-open") && (b = a.Event("blur"), b.target = b.currentTarget = this, c.close(b, !0)), d.attr("title") && (d.uniqueId(), c.parents[this.id] = {
					element: this,
					title: d.attr("title")
				}, d.attr("title", ""))
			}), this._registerCloseHandlers(b, d), this._updateContent(d, b))
		},
		_updateContent: function (a, b) {
			var c, d = this.options.content,
				e = this,
				f = b ? b.type : null;
			return "string" == typeof d ? this._open(b, a, d) : (c = d.call(a[0], function (c) {
				e._delay(function () {
					a.data("ui-tooltip-open") && (b && (b.type = f), this._open(b, a, c))
				})
			}), void(c && this._open(b, a, c)))
		},
		_open: function (b, c, d) {
			function e(a) {
				j.of = a, g.is(":hidden") || g.position(j)
			}
			var f, g, h, i, j = a.extend({}, this.options.position);
			if (d) {
				if (f = this._find(c)) return void f.tooltip.find(".ui-tooltip-content").html(d);
				c.is("[title]") && (b && "mouseover" === b.type ? c.attr("title", "") : c.removeAttr("title")), f = this._tooltip(c), g = f.tooltip, this._addDescribedBy(c, g.attr("id")), g.find(".ui-tooltip-content").html(d), this.liveRegion.children().hide(), d.clone ? (i = d.clone(), i.removeAttr("id").find("[id]").removeAttr("id")) : i = d, a("<div>").html(i).appendTo(this.liveRegion), this.options.track && b && /^mouse/.test(b.type) ? (this._on(this.document, {
					mousemove: e
				}), e(b)) : g.position(a.extend({ of: c
				}, this.options.position)), g.hide(), this._show(g, this.options.show), this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function () {
					g.is(":visible") && (e(j.of), clearInterval(h))
				}, a.fx.interval)), this._trigger("open", b, {
					tooltip: g
				})
			}
		},
		_registerCloseHandlers: function (b, c) {
			var d = {
				keyup: function (b) {
					if (b.keyCode === a.ui.keyCode.ESCAPE) {
						var d = a.Event(b);
						d.currentTarget = c[0], this.close(d, !0)
					}
				}
			};
			c[0] !== this.element[0] && (d.remove = function () {
				this._removeTooltip(this._find(c).tooltip)
			}), b && "mouseover" !== b.type || (d.mouseleave = "close"), b && "focusin" !== b.type || (d.focusout = "close"), this._on(!0, c, d)
		},
		close: function (b) {
			var c, d = this,
				e = a(b ? b.currentTarget : this.element),
				f = this._find(e);
			return f ? (c = f.tooltip, void(f.closing || (clearInterval(this.delayedShow), e.data("ui-tooltip-title") && !e.attr("title") && e.attr("title", e.data("ui-tooltip-title")), this._removeDescribedBy(e), f.hiding = !0, c.stop(!0), this._hide(c, this.options.hide, function () {
				d._removeTooltip(a(this))
			}), e.removeData("ui-tooltip-open"), this._off(e, "mouseleave focusout keyup"), e[0] !== this.element[0] && this._off(e, "remove"), this._off(this.document, "mousemove"), b && "mouseleave" === b.type && a.each(this.parents, function (b, c) {
				a(c.element).attr("title", c.title), delete d.parents[b]
			}), f.closing = !0, this._trigger("close", b, {
				tooltip: c
			}), f.hiding || (f.closing = !1)))) : void e.removeData("ui-tooltip-open")
		},
		_tooltip: function (b) {
			var c = a("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
				d = c.uniqueId().attr("id");
			return a("<div>").addClass("ui-tooltip-content").appendTo(c), c.appendTo(this.document[0].body), this.tooltips[d] = {
				element: b,
				tooltip: c
			}
		},
		_find: function (a) {
			var b = a.data("ui-tooltip-id");
			return b ? this.tooltips[b] : null
		},
		_removeTooltip: function (a) {
			a.remove(), delete this.tooltips[a.attr("id")]
		},
		_destroy: function () {
			var b = this;
			a.each(this.tooltips, function (c, d) {
				var e = a.Event("blur"),
					f = d.element;
				e.target = e.currentTarget = f[0], b.close(e, !0), a("#" + c).remove(), f.data("ui-tooltip-title") && (f.attr("title") || f.attr("title", f.data("ui-tooltip-title")), f.removeData("ui-tooltip-title"))
			}), this.liveRegion.remove()
		}
	})
});
(function () {
	"use strict";

	function a() {}

	function b(a, b) {
		for (var c = a.length; c--;)
			if (a[c].listener === b) return c;
		return -1
	}

	function c(a) {
		return function () {
			return this[a].apply(this, arguments)
		}
	}
	var d = a.prototype,
		e = this,
		f = e.EventEmitter;
	d.getListeners = function (a) {
		var b, c, d = this._getEvents();
		if ("object" == typeof a) {
			b = {};
			for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
		} else b = d[a] || (d[a] = []);
		return b
	}, d.flattenListeners = function (a) {
		var b, c = [];
		for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
		return c
	}, d.getListenersAsObject = function (a) {
		var b, c = this.getListeners(a);
		return c instanceof Array && (b = {}, b[a] = c), b || c
	}, d.addListener = function (a, c) {
		var d, e = this.getListenersAsObject(a),
			f = "object" == typeof c;
		for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
			listener: c,
			once: !1
		});
		return this
	}, d.on = c("addListener"), d.addOnceListener = function (a, b) {
		return this.addListener(a, {
			listener: b,
			once: !0
		})
	}, d.once = c("addOnceListener"), d.defineEvent = function (a) {
		return this.getListeners(a), this
	}, d.defineEvents = function (a) {
		for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
		return this
	}, d.removeListener = function (a, c) {
		var d, e, f = this.getListenersAsObject(a);
		for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
		return this
	}, d.off = c("removeListener"), d.addListeners = function (a, b) {
		return this.manipulateListeners(!1, a, b)
	}, d.removeListeners = function (a, b) {
		return this.manipulateListeners(!0, a, b)
	}, d.manipulateListeners = function (a, b, c) {
		var d, e, f = a ? this.removeListener : this.addListener,
			g = a ? this.removeListeners : this.addListeners;
		if ("object" != typeof b || b instanceof RegExp)
			for (d = c.length; d--;) f.call(this, b, c[d]);
		else
			for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
		return this
	}, d.removeEvent = function (a) {
		var b, c = typeof a,
			d = this._getEvents();
		if ("string" === c) delete d[a];
		else if ("object" === c)
			for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
		else delete this._events;
		return this
	}, d.removeAllListeners = c("removeEvent"), d.emitEvent = function (a, b) {
		var c, d, e, f, g = this.getListenersAsObject(a);
		for (e in g)
			if (g.hasOwnProperty(e))
				for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
		return this
	}, d.trigger = c("emitEvent"), d.emit = function (a) {
		var b = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(a, b)
	}, d.setOnceReturnValue = function (a) {
		return this._onceReturnValue = a, this
	}, d._getOnceReturnValue = function () {
		return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
	}, d._getEvents = function () {
		return this._events || (this._events = {})
	}, a.noConflict = function () {
		return e.EventEmitter = f, a
	}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
		return a
	}) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
}).call(this),
	function (a) {
		function b(b) {
			var c = a.event;
			return c.target = c.target || c.srcElement || b, c
		}
		var c = document.documentElement,
			d = function () {};
		c.addEventListener ? d = function (a, b, c) {
			a.addEventListener(b, c, !1)
		} : c.attachEvent && (d = function (a, c, d) {
			a[c + d] = d.handleEvent ? function () {
				var c = b(a);
				d.handleEvent.call(d, c)
			} : function () {
				var c = b(a);
				d.call(a, c)
			}, a.attachEvent("on" + c, a[c + d])
		});
		var e = function () {};
		c.removeEventListener ? e = function (a, b, c) {
			a.removeEventListener(b, c, !1)
		} : c.detachEvent && (e = function (a, b, c) {
			a.detachEvent("on" + b, a[b + c]);
			try {
				delete a[b + c]
			} catch (d) {
				a[b + c] = void 0
			}
		});
		var f = {
			bind: d,
			unbind: e
		};
		"function" == typeof define && define.amd ? define("eventie/eventie", f) : a.eventie = f
	}(this),
	function (a, b) {
		"use strict";
		"function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (c, d) {
			return b(a, c, d)
		}) : "object" == typeof module && module.exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("eventie")) : a.imagesLoaded = b(a, a.EventEmitter, a.eventie)
	}(window, function (a, b, c) {
		function d(a, b) {
			for (var c in b) a[c] = b[c];
			return a
		}

		function e(a) {
			return "[object Array]" == l.call(a)
		}

		function f(a) {
			var b = [];
			if (e(a)) b = a;
			else if ("number" == typeof a.length)
				for (var c = 0; c < a.length; c++) b.push(a[c]);
			else b.push(a);
			return b
		}

		function g(a, b, c) {
			if (!(this instanceof g)) return new g(a, b, c);
			"string" == typeof a && (a = document.querySelectorAll(a)), this.elements = f(a), this.options = d({}, this.options), "function" == typeof b ? c = b : d(this.options, b), c && this.on("always", c), this.getImages(), j && (this.jqDeferred = new j.Deferred);
			var e = this;
			setTimeout(function () {
				e.check()
			})
		}

		function h(a) {
			this.img = a
		}

		function i(a, b) {
			this.url = a, this.element = b, this.img = new Image
		}
		var j = a.jQuery,
			k = a.console,
			l = Object.prototype.toString;
		g.prototype = new b, g.prototype.options = {}, g.prototype.getImages = function () {
			this.images = [];
			for (var a = 0; a < this.elements.length; a++) {
				var b = this.elements[a];
				this.addElementImages(b)
			}
		}, g.prototype.addElementImages = function (a) {
			"IMG" == a.nodeName && this.addImage(a), this.options.background === !0 && this.addElementBackgroundImages(a);
			var b = a.nodeType;
			if (b && m[b]) {
				for (var c = a.querySelectorAll("img"), d = 0; d < c.length; d++) {
					var e = c[d];
					this.addImage(e)
				}
				if ("string" == typeof this.options.background) {
					var f = a.querySelectorAll(this.options.background);
					for (d = 0; d < f.length; d++) {
						var g = f[d];
						this.addElementBackgroundImages(g)
					}
				}
			}
		};
		var m = {
			1: !0,
			9: !0,
			11: !0
		};
		g.prototype.addElementBackgroundImages = function (a) {
			for (var b = n(a), c = /url\(['"]*([^'"\)]+)['"]*\)/gi, d = c.exec(b.backgroundImage); null !== d;) {
				var e = d && d[1];
				e && this.addBackground(e, a), d = c.exec(b.backgroundImage)
			}
		};
		var n = a.getComputedStyle || function (a) {
			return a.currentStyle
		};
		return g.prototype.addImage = function (a) {
			var b = new h(a);
			this.images.push(b)
		}, g.prototype.addBackground = function (a, b) {
			var c = new i(a, b);
			this.images.push(c)
		}, g.prototype.check = function () {
			function a(a, c, d) {
				setTimeout(function () {
					b.progress(a, c, d)
				})
			}
			var b = this;
			if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
			for (var c = 0; c < this.images.length; c++) {
				var d = this.images[c];
				d.once("progress", a), d.check()
			}
		}, g.prototype.progress = function (a, b, c) {
			this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded, this.emit("progress", this, a, b), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, a), this.progressedCount == this.images.length && this.complete(), this.options.debug && k && k.log("progress: " + c, a, b)
		}, g.prototype.complete = function () {
			var a = this.hasAnyBroken ? "fail" : "done";
			if (this.isComplete = !0, this.emit(a, this), this.emit("always", this), this.jqDeferred) {
				var b = this.hasAnyBroken ? "reject" : "resolve";
				this.jqDeferred[b](this)
			}
		}, h.prototype = new b, h.prototype.check = function () {
			var a = this.getIsImageComplete();
			return a ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, c.bind(this.proxyImage, "load", this), c.bind(this.proxyImage, "error", this), c.bind(this.img, "load", this), c.bind(this.img, "error", this), void(this.proxyImage.src = this.img.src))
		}, h.prototype.getIsImageComplete = function () {
			return this.img.complete && void 0 !== this.img.naturalWidth
		}, h.prototype.confirm = function (a, b) {
			this.isLoaded = a, this.emit("progress", this, this.img, b)
		}, h.prototype.handleEvent = function (a) {
			var b = "on" + a.type;
			this[b] && this[b](a)
		}, h.prototype.onload = function () {
			this.confirm(!0, "onload"), this.unbindEvents()
		}, h.prototype.onerror = function () {
			this.confirm(!1, "onerror"), this.unbindEvents()
		}, h.prototype.unbindEvents = function () {
			c.unbind(this.proxyImage, "load", this), c.unbind(this.proxyImage, "error", this), c.unbind(this.img, "load", this), c.unbind(this.img, "error", this)
		}, i.prototype = new h, i.prototype.check = function () {
			c.bind(this.img, "load", this), c.bind(this.img, "error", this), this.img.src = this.url;
			var a = this.getIsImageComplete();
			a && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
		}, i.prototype.unbindEvents = function () {
			c.unbind(this.img, "load", this), c.unbind(this.img, "error", this)
		}, i.prototype.confirm = function (a, b) {
			this.isLoaded = a, this.emit("progress", this, this.element, b)
		}, g.makeJQueryPlugin = function (b) {
			b = b || a.jQuery, b && (j = b, j.fn.imagesLoaded = function (a, b) {
				var c = new g(this, a, b);
				return c.jqDeferred.promise(j(this))
			})
		}, g.makeJQueryPlugin(), g
	});
/*! Lazy Load 1.9.7 - MIT license - Copyright 2010-2015 Mika Tuupola */
! function (a, b, c, d) {
	var e = a(b);
	a.fn.lazyload = function (f) {
		function g() {
			var b = 0;
			i.each(function () {
				var c = a(this);
				if (!j.skip_invisible || c.is(":visible"))
					if (a.abovethetop(this, j) || a.leftofbegin(this, j));
					else if (a.belowthefold(this, j) || a.rightoffold(this, j)) {
					if (++b > j.failure_limit) return !1
				} else c.trigger("appear"), b = 0
			})
		}
		var h, i = this,
			j = {
				threshold: 0,
				failure_limit: 0,
				event: "scroll",
				effect: "show",
				container: b,
				data_attribute: "original",
				skip_invisible: !1,
				appear: null,
				load: null,
				placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
			};
		return f && (d !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), d !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), a.extend(j, f)), h = j.container === d || j.container === b ? e : a(j.container), 0 === j.event.indexOf("scroll") && h.bind(j.event, function () {
			return g()
		}), this.each(function () {
			var b = this,
				c = a(b);
			b.loaded = !1, (c.attr("src") === d || c.attr("src") === !1) && c.is("img") && c.attr("src", j.placeholder), c.one("appear", function () {
				if (!this.loaded) {
					if (j.appear) {
						var d = i.length;
						j.appear.call(b, d, j)
					}
					a("<img />").bind("load", function () {
						var d = c.attr("data-" + j.data_attribute);
						c.hide(), c.is("img") ? c.attr("src", d) : c.css("background-image", "url('" + d + "')"), c[j.effect](j.effect_speed), b.loaded = !0;
						var e = a.grep(i, function (a) {
							return !a.loaded
						});
						if (i = a(e), j.load) {
							var f = i.length;
							j.load.call(b, f, j)
						}
					}).attr("src", c.attr("data-" + j.data_attribute))
				}
			}), 0 !== j.event.indexOf("scroll") && c.bind(j.event, function () {
				b.loaded || c.trigger("appear")
			})
		}), e.bind("resize", function () {
			g()
		}), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && e.bind("pageshow", function (b) {
			b.originalEvent && b.originalEvent.persisted && i.each(function () {
				a(this).trigger("appear")
			})
		}), a(c).ready(function () {
			g()
		}), this
	}, a.belowthefold = function (c, f) {
		var g;
		return g = f.container === d || f.container === b ? (b.innerHeight ? b.innerHeight : e.height()) + e.scrollTop() : a(f.container).offset().top + a(f.container).height(), g <= a(c).offset().top - f.threshold
	}, a.rightoffold = function (c, f) {
		var g;
		return g = f.container === d || f.container === b ? e.width() + e.scrollLeft() : a(f.container).offset().left + a(f.container).width(), g <= a(c).offset().left - f.threshold
	}, a.abovethetop = function (c, f) {
		var g;
		return g = f.container === d || f.container === b ? e.scrollTop() : a(f.container).offset().top, g >= a(c).offset().top + f.threshold + a(c).height()
	}, a.leftofbegin = function (c, f) {
		var g;
		return g = f.container === d || f.container === b ? e.scrollLeft() : a(f.container).offset().left, g >= a(c).offset().left + f.threshold + a(c).width()
	}, a.inviewport = function (b, c) {
		return !(a.rightoffold(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c))
	}, a.extend(a.expr[":"], {
		"below-the-fold": function (b) {
			return a.belowthefold(b, {
				threshold: 0
			})
		},
		"above-the-top": function (b) {
			return !a.belowthefold(b, {
				threshold: 0
			})
		},
		"right-of-screen": function (b) {
			return a.rightoffold(b, {
				threshold: 0
			})
		},
		"left-of-screen": function (b) {
			return !a.rightoffold(b, {
				threshold: 0
			})
		},
		"in-viewport": function (b) {
			return a.inviewport(b, {
				threshold: 0
			})
		},
		"above-the-fold": function (b) {
			return !a.belowthefold(b, {
				threshold: 0
			})
		},
		"right-of-fold": function (b) {
			return a.rightoffold(b, {
				threshold: 0
			})
		},
		"left-of-fold": function (b) {
			return !a.rightoffold(b, {
				threshold: 0
			})
		}
	})
}(jQuery, window, document);

(function () {
	var t = [].indexOf || function (t) {
			for (var e = 0, n = this.length; e < n; e++) {
				if (e in this && this[e] === t) return e
			}
			return -1
		},
		e = [].slice;
	(function (t, e) {
		if (typeof define === "function" && define.amd) {
			return define("waypoints", ["jquery"], function (n) {
				return e(n, t)
			})
		} else {
			return e(t.jQuery, t)
		}
	})(this, function (n, r) {
		var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
		i = n(r);
		c = t.call(r, "ontouchstart") >= 0;
		s = {
			horizontal: {},
			vertical: {}
		};
		f = 1;
		a = {};
		u = "waypoints-context-id";
		p = "resize.waypoints";
		y = "scroll.waypoints";
		v = 1;
		w = "waypoints-waypoint-ids";
		g = "waypoint";
		m = "waypoints";
		o = function () {
			function t(t) {
				var e = this;
				this.$element = t;
				this.element = t[0];
				this.didResize = false;
				this.didScroll = false;
				this.id = "context" + f++;
				this.oldScroll = {
					x: t.scrollLeft(),
					y: t.scrollTop()
				};
				this.waypoints = {
					horizontal: {},
					vertical: {}
				};
				t.data(u, this.id);
				a[this.id] = this;
				t.bind(y, function () {
					var t;
					if (!(e.didScroll || c)) {
						e.didScroll = true;
						t = function () {
							e.doScroll();
							return e.didScroll = false
						};
						return r.setTimeout(t, n[m].settings.scrollThrottle)
					}
				});
				t.bind(p, function () {
					var t;
					if (!e.didResize) {
						e.didResize = true;
						t = function () {
							n[m]("refresh");
							return e.didResize = false
						};
						return r.setTimeout(t, n[m].settings.resizeThrottle)
					}
				})
			}
			t.prototype.doScroll = function () {
				var t, e = this;
				t = {
					horizontal: {
						newScroll: this.$element.scrollLeft(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left"
					},
					vertical: {
						newScroll: this.$element.scrollTop(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up"
					}
				};
				if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
					n[m]("refresh")
				}
				n.each(t, function (t, r) {
					var i, o, l;
					l = [];
					o = r.newScroll > r.oldScroll;
					i = o ? r.forward : r.backward;
					n.each(e.waypoints[t], function (t, e) {
						var n, i;
						if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
							return l.push(e)
						} else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
							return l.push(e)
						}
					});
					l.sort(function (t, e) {
						return t.offset - e.offset
					});
					if (!o) {
						l.reverse()
					}
					return n.each(l, function (t, e) {
						if (e.options.continuous || t === l.length - 1) {
							return e.trigger([i])
						}
					})
				});
				return this.oldScroll = {
					x: t.horizontal.newScroll,
					y: t.vertical.newScroll
				}
			};
			t.prototype.refresh = function () {
				var t, e, r, i = this;
				r = n.isWindow(this.element);
				e = this.$element.offset();
				this.doScroll();
				t = {
					horizontal: {
						contextOffset: r ? 0 : e.left,
						contextScroll: r ? 0 : this.oldScroll.x,
						contextDimension: this.$element.width(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left",
						offsetProp: "left"
					},
					vertical: {
						contextOffset: r ? 0 : e.top,
						contextScroll: r ? 0 : this.oldScroll.y,
						contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up",
						offsetProp: "top"
					}
				};
				return n.each(t, function (t, e) {
					return n.each(i.waypoints[t], function (t, r) {
						var i, o, l, s, f;
						i = r.options.offset;
						l = r.offset;
						o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
						if (n.isFunction(i)) {
							i = i.apply(r.element)
						} else if (typeof i === "string") {
							i = parseFloat(i);
							if (r.options.offset.indexOf("%") > -1) {
								i = Math.ceil(e.contextDimension * i / 100)
							}
						}
						r.offset = o - e.contextOffset + e.contextScroll - i;
						if (r.options.onlyOnScroll && l != null || !r.enabled) {
							return
						}
						if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
							return r.trigger([e.backward])
						} else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
							return r.trigger([e.forward])
						} else if (l === null && e.oldScroll >= r.offset) {
							return r.trigger([e.forward])
						}
					})
				})
			};
			t.prototype.checkEmpty = function () {
				if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
					this.$element.unbind([p, y].join(" "));
					return delete a[this.id]
				}
			};
			return t
		}();
		l = function () {
			function t(t, e, r) {
				var i, o;
				r = n.extend({}, n.fn[g].defaults, r);
				if (r.offset === "bottom-in-view") {
					r.offset = function () {
						var t;
						t = n[m]("viewportHeight");
						if (!n.isWindow(e.element)) {
							t = e.$element.height()
						}
						return t - n(this).outerHeight()
					}
				}
				this.$element = t;
				this.element = t[0];
				this.axis = r.horizontal ? "horizontal" : "vertical";
				this.callback = r.handler;
				this.context = e;
				this.enabled = r.enabled;
				this.id = "waypoints" + v++;
				this.offset = null;
				this.options = r;
				e.waypoints[this.axis][this.id] = this;
				s[this.axis][this.id] = this;
				i = (o = t.data(w)) != null ? o : [];
				i.push(this.id);
				t.data(w, i)
			}
			t.prototype.trigger = function (t) {
				if (!this.enabled) {
					return
				}
				if (this.callback != null) {
					this.callback.apply(this.element, t)
				}
				if (this.options.triggerOnce) {
					return this.destroy()
				}
			};
			t.prototype.disable = function () {
				return this.enabled = false
			};
			t.prototype.enable = function () {
				this.context.refresh();
				return this.enabled = true
			};
			t.prototype.destroy = function () {
				delete s[this.axis][this.id];
				delete this.context.waypoints[this.axis][this.id];
				return this.context.checkEmpty()
			};
			t.getWaypointsByElement = function (t) {
				var e, r;
				r = n(t).data(w);
				if (!r) {
					return []
				}
				e = n.extend({}, s.horizontal, s.vertical);
				return n.map(r, function (t) {
					return e[t]
				})
			};
			return t
		}();
		d = {
			init: function (t, e) {
				var r;
				if (e == null) {
					e = {}
				}
				if ((r = e.handler) == null) {
					e.handler = t
				}
				this.each(function () {
					var t, r, i, s;
					t = n(this);
					i = (s = e.context) != null ? s : n.fn[g].defaults.context;
					if (!n.isWindow(i)) {
						i = t.closest(i)
					}
					i = n(i);
					r = a[i.data(u)];
					if (!r) {
						r = new o(i)
					}
					return new l(t, r, e)
				});
				n[m]("refresh");
				return this
			},
			disable: function () {
				return d._invoke(this, "disable")
			},
			enable: function () {
				return d._invoke(this, "enable")
			},
			destroy: function () {
				return d._invoke(this, "destroy")
			},
			prev: function (t, e) {
				return d._traverse.call(this, t, e, function (t, e, n) {
					if (e > 0) {
						return t.push(n[e - 1])
					}
				})
			},
			next: function (t, e) {
				return d._traverse.call(this, t, e, function (t, e, n) {
					if (e < n.length - 1) {
						return t.push(n[e + 1])
					}
				})
			},
			_traverse: function (t, e, i) {
				var o, l;
				if (t == null) {
					t = "vertical"
				}
				if (e == null) {
					e = r
				}
				l = h.aggregate(e);
				o = [];
				this.each(function () {
					var e;
					e = n.inArray(this, l[t]);
					return i(o, e, l[t])
				});
				return this.pushStack(o)
			},
			_invoke: function (t, e) {
				t.each(function () {
					var t;
					t = l.getWaypointsByElement(this);
					return n.each(t, function (t, n) {
						n[e]();
						return true
					})
				});
				return this
			}
		};
		n.fn[g] = function () {
			var t, r;
			r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
			if (d[r]) {
				return d[r].apply(this, t)
			} else if (n.isFunction(r)) {
				return d.init.apply(this, arguments)
			} else if (n.isPlainObject(r)) {
				return d.init.apply(this, [null, r])
			} else if (!r) {
				return n.error("jQuery Waypoints needs a callback function or handler option.")
			} else {
				return n.error("The " + r + " method does not exist in jQuery Waypoints.")
			}
		};
		n.fn[g].defaults = {
			context: r,
			continuous: true,
			enabled: true,
			horizontal: false,
			offset: 0,
			triggerOnce: false
		};
		h = {
			refresh: function () {
				return n.each(a, function (t, e) {
					return e.refresh()
				})
			},
			viewportHeight: function () {
				var t;
				return (t = r.innerHeight) != null ? t : i.height()
			},
			aggregate: function (t) {
				var e, r, i;
				e = s;
				if (t) {
					e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0
				}
				if (!e) {
					return []
				}
				r = {
					horizontal: [],
					vertical: []
				};
				n.each(r, function (t, i) {
					n.each(e[t], function (t, e) {
						return i.push(e)
					});
					i.sort(function (t, e) {
						return t.offset - e.offset
					});
					r[t] = n.map(i, function (t) {
						return t.element
					});
					return r[t] = n.unique(r[t])
				});
				return r
			},
			above: function (t) {
				if (t == null) {
					t = r
				}
				return h._filter(t, "vertical", function (t, e) {
					return e.offset <= t.oldScroll.y
				})
			},
			below: function (t) {
				if (t == null) {
					t = r
				}
				return h._filter(t, "vertical", function (t, e) {
					return e.offset > t.oldScroll.y
				})
			},
			left: function (t) {
				if (t == null) {
					t = r
				}
				return h._filter(t, "horizontal", function (t, e) {
					return e.offset <= t.oldScroll.x
				})
			},
			right: function (t) {
				if (t == null) {
					t = r
				}
				return h._filter(t, "horizontal", function (t, e) {
					return e.offset > t.oldScroll.x
				})
			},
			enable: function () {
				return h._invoke("enable")
			},
			disable: function () {
				return h._invoke("disable")
			},
			destroy: function () {
				return h._invoke("destroy")
			},
			extendFn: function (t, e) {
				return d[t] = e
			},
			_invoke: function (t) {
				var e;
				e = n.extend({}, s.vertical, s.horizontal);
				return n.each(e, function (e, n) {
					n[t]();
					return true
				})
			},
			_filter: function (t, e, r) {
				var i, o;
				i = a[n(t).data(u)];
				if (!i) {
					return []
				}
				o = [];
				n.each(i.waypoints[e], function (t, e) {
					if (r(i, e)) {
						return o.push(e)
					}
				});
				o.sort(function (t, e) {
					return t.offset - e.offset
				});
				return n.map(o, function (t) {
					return t.element
				})
			}
		};
		n[m] = function () {
			var t, n;
			n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
			if (h[n]) {
				return h[n].apply(null, t)
			} else {
				return h.aggregate.call(null, n)
			}
		};
		n[m].settings = {
			resizeThrottle: 100,
			scrollThrottle: 30
		};
		return i.load(function () {
			return n[m]("refresh")
		})
	})
}).call(this);

! function (a, b) {
	function c(b) {
		var c, d = a("<div></div>").css({
			width: "100%"
		});
		return b.append(d), c = b.width() - d.width(), d.remove(), c
	}

	function d(e, f) {
		var g = e.getBoundingClientRect(),
			h = g.top,
			i = g.bottom,
			j = g.left,
			k = g.right,
			l = a.extend({
				tolerance: 0,
				viewport: b
			}, f),
			m = !1,
			n = l.viewport.jquery ? l.viewport : a(l.viewport);
		n.length || (console.warn("isInViewport: The viewport selector you have provided matches no element on page."), console.warn("isInViewport: Defaulting to viewport as window"), n = a(b));
		var o = n.height(),
			p = n.width(),
			q = n[0].toString();
		if (n[0] !== b && "[object Window]" !== q && "[object DOMWindow]" !== q) {
			var r = n[0].getBoundingClientRect();
			h -= r.top, i -= r.top, j -= r.left, k -= r.left, d.scrollBarWidth = d.scrollBarWidth || c(n), p -= d.scrollBarWidth
		}
		return l.tolerance = ~~Math.round(parseFloat(l.tolerance)), l.tolerance < 0 && (l.tolerance = o + l.tolerance), 0 >= k || j >= p ? m : m = l.tolerance ? h <= l.tolerance && i >= l.tolerance : i > 0 && o >= h
	}
	String.prototype.hasOwnProperty("trim") || (String.prototype.trim = function () {
		return this.replace(/^\s*(.*?)\s*$/, "$1")
	});
	var e = function (b) {
		if (1 === arguments.length && "function" == typeof b && (b = [b]), !(b instanceof Array)) throw new SyntaxError("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions");
		for (var c = 0; c < b.length; c++)
			if ("function" == typeof b[c])
				for (var d = 0; d < this.length; d++) b[c].call(a(this[d]));
			else console.warn("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"), console.warn("isInViewport: Ignoring non-function values in array and moving on");
		return this
	};
	a.fn["do"] = function (a) {
		return console.warn("isInViewport: .do is deprecated as it causes issues in IE and some browsers since it's a reserved word. Use $.fn.run instead i.e., $(el).run(fn)."), e(a)
	}, a.fn.run = e;
	var f = function (b) {
		if (b) {
			var c = b.split(",");
			return 1 === c.length && isNaN(c[0]) && (c[1] = c[0], c[0] = void 0), {
				tolerance: c[0] ? c[0].trim() : void 0,
				viewport: c[1] ? a(c[1].trim()) : void 0
			}
		}
		return {}
	};
	a.extend(a.expr[":"], {
		"in-viewport": a.expr.createPseudo ? a.expr.createPseudo(function (a) {
			return function (b) {
				return d(b, f(a))
			}
		}) : function (a, b, c) {
			return d(a, f(c[3]))
		}
	}), a.fn.isInViewport = function (a) {
		return this.filter(function (b, c) {
			return d(c, a)
		})
	}
}(jQuery, window);
(function ($) {
	$.fn.mf_countdown = function () {
		return this.each(function () {
			var $this = $(this),
				diff = $this.data('expire');
			var updateClock = function (distance) {
				var days = Math.floor(distance / (60 * 60 * 24));
				var hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
				var minutes = Math.floor((distance % (60 * 60)) / (60));
				var seconds = Math.floor(distance % 60);
				$this.html('<span class="days timer"><span class="digits">' + (days < 10 ? '0' : '') + days + '</span><span class="text">' + martfuryData.days + '</span></span>' + '<span class="divider">:</span>' + '<span class="hours timer"><span class="digits">' + (hours < 10 ? '0' : '') + hours + '</span><span class="text">' + martfuryData.hours + '</span></span>' + '<span class="divider">:</span>' + '<span class="minutes timer"><span class="digits">' + (minutes < 10 ? '0' : '') + minutes + '</span><span class="text">' + martfuryData.minutes + '</span></span>' + '<span class="divider">:</span>' + '<span class="seconds timer"><span class="digits">' + (seconds < 10 ? '0' : '') + seconds + '</span><span class="text">' + martfuryData.seconds + '</span></span>');
			};
			updateClock(diff);
			var countdown = setInterval(function () {
				diff = diff - 1;
				updateClock(diff);
				if (diff < 0) {
					clearInterval(countdown);
				}
			}, 1000);
		});
	};
	$(function () {
		$('.martfury-countdown').mf_countdown();
	});
})(jQuery);
/*!
 * jquery.counterup.js 1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 */
(function ($) {
	"use strict";
	$.fn.counterUp = function (options) {
		var settings = $.extend({
			'time': 400,
			'delay': 10
		}, options);
		return this.each(function () {
			var $this = $(this);
			var $settings = settings;
			var counterUpper = function () {
				var nums = [];
				var divisions = $settings.time / $settings.delay;
				var num = $this.text();
				var isComma = /[0-9]+,[0-9]+/.test(num);
				num = num.replace(/,/g, '');
				var isInt = /^[0-9]+$/.test(num);
				var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
				var decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;
				for (var i = divisions; i >= 1; i--) {
					var newNum = parseInt(num / divisions * i);
					if (isFloat) {
						newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
					}
					if (isComma) {
						while (/(\d+)(\d{3})/.test(newNum.toString())) {
							newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
						}
					}
					nums.unshift(newNum);
				}
				$this.data('counterup-nums', nums);
				$this.text('0');
				var f = function () {
					$this.text($this.data('counterup-nums').shift());
					if ($this.data('counterup-nums').length) {
						setTimeout($this.data('counterup-func'), $settings.delay);
					} else {
						delete $this.data('counterup-nums');
						$this.data('counterup-nums', null);
						$this.data('counterup-func', null);
					}
				};
				$this.data('counterup-func', f);
				setTimeout($this.data('counterup-func'), $settings.delay);
			};
			$this.waypoint(counterUpper, {
				offset: '100%',
				triggerOnce: true
			});
		});
	};
})(jQuery);;
/*!
 * FitVids 1.1
 *
 * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 */
(function ($) {
	'use strict';
	$.fn.fitVids = function (options) {
		var settings = {
			customSelector: null,
			ignore: null
		};
		if (!document.getElementById('fit-vids-style')) {
			var head = document.head || document.getElementsByTagName('head')[0];
			var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
			var div = document.createElement("div");
			div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
			head.appendChild(div.childNodes[1]);
		}
		if (options) {
			$.extend(settings, options);
		}
		return this.each(function () {
			var selectors = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', 'object', 'embed'];
			if (settings.customSelector) {
				selectors.push(settings.customSelector);
			}
			var ignoreList = '.fitvidsignore';
			if (settings.ignore) {
				ignoreList = ignoreList + ', ' + settings.ignore;
			}
			var $allVideos = $(this).find(selectors.join(','));
			$allVideos = $allVideos.not('object object');
			$allVideos = $allVideos.not(ignoreList);
			$allVideos.each(function (count) {
				var $this = $(this);
				if ($this.parents(ignoreList).length > 0) {
					return;
				}
				if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) {
					return;
				}
				if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width')))) {
					$this.attr('height', 9);
					$this.attr('width', 16);
				}
				var height = (this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10)))) ? parseInt($this.attr('height'), 10) : $this.height(),
					width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
					aspectRatio = height / width;
				if (!$this.attr('id')) {
					var videoID = 'fitvid' + count;
					$this.attr('id', videoID);
				}
				$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100) + '%');
				$this.removeAttr('height').removeAttr('width');
			});
		});
	};
})(window.jQuery || window.Zepto);
(function (e) {
	var t = e(window);
	var n = t.height();
	t.resize(function () {
		n = t.height()
	});
	e.fn.parallax = function (r, i, s) {
		function l() {
			o.each(function () {
				a = o.offset().top
			});
			if (s) {
				u = function (e) {
					return e.outerHeight(true)
				}
			} else {
				u = function (e) {
					return e.height()
				}
			}
			if (arguments.length < 1 || r === null) r = "50%";
			if (arguments.length < 2 || i === null) i = .5;
			if (arguments.length < 3 || s === null) s = true;
			var f = t.scrollTop();
			o.each(function () {
				var t = e(this);
				var s = t.offset().top;
				var l = u(t);
				if (s + l < f || s > f + n) {
					return
				}
				o.css("backgroundPosition", r + " " + Math.round((a - f) * i) + "px")
			})
		}
		var o = e(this);
		var u;
		var a;
		var f = 0;
		t.bind("scroll", l).resize(l);
		l()
	}
})(jQuery);
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function ($) {
	$.fn.extend({
		slimScroll: function (options) {
			var defaults = {
				width: 'auto',
				height: '250px',
				size: '6px',
				color: '#666',
				position: 'right',
				distance: '1px',
				start: 'top',
				opacity: .4,
				alwaysVisible: true,
				disableFadeOut: false,
				railVisible: true,
				railColor: '#ccc',
				railOpacity: .2,
				railDraggable: true,
				railClass: 'slimScrollRail',
				barClass: 'slimScrollBar',
				wrapperClass: 'slimScrollDiv',
				allowPageScroll: false,
				wheelStep: 20,
				touchScrollStep: 200,
				borderRadius: '7px',
				railBorderRadius: '7px'
			};
			var o = $.extend(defaults, options);
			this.each(function () {
				var isOverPanel, isOverBar, isDragg, queueHide, touchDif, barHeight, percentScroll, lastScroll, divS = '<div></div>',
					minBarHeight = 30,
					releaseScroll = false;
				var me = $(this);
				if (me.parent().hasClass(o.wrapperClass)) {
					var offset = me.scrollTop();
					bar = me.siblings('.' + o.barClass);
					rail = me.siblings('.' + o.railClass);
					getBarHeight();
					if ($.isPlainObject(options)) {
						var h = options.height;
						me.parent().css('max-height', h);
						me.css('max-height', h);
						if ('scrollTo' in options) {
							offset = parseInt(o.scrollTo);
						} else if ('scrollBy' in options) {
							offset += parseInt(o.scrollBy);
						} else if ('destroy' in options) {
							bar.remove();
							rail.remove();
							me.unwrap();
							return;
						}
						scrollContent(offset, false, true);
					}
					return;
				} else if ($.isPlainObject(options)) {
					if ('destroy' in options) {
						return;
					}
				}
				o.height = (o.height == 'auto') ? me.parent().height() : o.height;
				var wrapper = $(divS).addClass(o.wrapperClass).css({
					position: 'relative',
					overflow: 'hidden',
					width: o.width,
					'max-height': o.height
				});
				me.css({
					overflow: 'hidden',
					width: o.width,
					'max-height': o.height
				});
				var rail = $(divS).addClass(o.railClass).css({
					width: o.size,
					height: '100%',
					position: 'absolute',
					top: 0,
					display: (o.alwaysVisible && o.railVisible) ? 'block' : 'none',
					'border-radius': o.railBorderRadius,
					background: o.railColor,
					opacity: o.railOpacity,
					zIndex: 90
				});
				var bar = $(divS).addClass(o.barClass).css({
					background: o.color,
					width: o.size,
					position: 'absolute',
					top: 0,
					opacity: o.opacity,
					display: o.alwaysVisible ? 'block' : 'none',
					'border-radius': o.borderRadius,
					BorderRadius: o.borderRadius,
					MozBorderRadius: o.borderRadius,
					WebkitBorderRadius: o.borderRadius,
					zIndex: 99
				});
				var posCss = (o.position == 'right') ? {
					right: o.distance
				} : {
					left: o.distance
				};
				rail.css(posCss);
				bar.css(posCss);
				me.wrap(wrapper);
				me.parent().append(bar);
				me.parent().append(rail);
				if (o.railDraggable) {
					bar.bind("mousedown", function (e) {
						var $doc = $(document);
						isDragg = true;
						t = parseFloat(bar.css('top'));
						pageY = e.pageY;
						$doc.bind("mousemove.slimscroll", function (e) {
							currTop = t + e.pageY - pageY;
							bar.css('top', currTop);
							scrollContent(0, bar.position().top, false);
						});
						$doc.bind("mouseup.slimscroll", function (e) {
							isDragg = false;
							hideBar();
							$doc.unbind('.slimscroll');
						});
						return false;
					}).bind("selectstart.slimscroll", function (e) {
						e.stopPropagation();
						e.preventDefault();
						return false;
					});
				}
				rail.hover(function () {
					showBar();
				}, function () {
					hideBar();
				});
				bar.hover(function () {
					isOverBar = true;
				}, function () {
					isOverBar = false;
				});
				me.hover(function () {
					isOverPanel = true;
					showBar();
					hideBar();
				}, function () {
					isOverPanel = false;
					hideBar();
				});
				me.bind('touchstart', function (e, b) {
					if (e.originalEvent.touches.length) {
						touchDif = e.originalEvent.touches[0].pageY;
					}
				});
				me.bind('touchmove', function (e) {
					if (!releaseScroll) {
						e.originalEvent.preventDefault();
					}
					if (e.originalEvent.touches.length) {
						var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep;
						scrollContent(diff, true);
						touchDif = e.originalEvent.touches[0].pageY;
					}
				});
				getBarHeight();
				if (o.start === 'bottom') {
					bar.css({
						top: me.outerHeight() - bar.outerHeight()
					});
					scrollContent(0, true);
				} else if (o.start !== 'top') {
					scrollContent($(o.start).position().top, null, true);
					if (!o.alwaysVisible) {
						bar.hide();
					}
				}
				attachWheel(this);

				function _onWheel(e) {
					if (!isOverPanel) {
						return;
					}
					var e = e || window.event;
					var delta = 0;
					if (e.wheelDelta) {
						delta = -e.wheelDelta / 120;
					}
					if (e.detail) {
						delta = e.detail / 3;
					}
					var target = e.target || e.srcTarget || e.srcElement;
					if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
						scrollContent(delta, true);
					}
					if (e.preventDefault && !releaseScroll) {
						e.preventDefault();
					}
					if (!releaseScroll) {
						e.returnValue = false;
					}
				}

				function scrollContent(y, isWheel, isJump) {
					releaseScroll = false;
					var delta = y;
					var maxTop = me.outerHeight() - bar.outerHeight();
					if (isWheel) {
						delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight();
						delta = Math.min(Math.max(delta, 0), maxTop);
						delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);
						bar.css({
							top: delta + 'px'
						});
					}
					percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
					delta = percentScroll * (me[0].scrollHeight - me.outerHeight());
					if (isJump) {
						delta = y;
						var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
						offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
						bar.css({
							top: offsetTop + 'px'
						});
					}
					me.scrollTop(delta);
					me.trigger('slimscrolling', ~~delta);
					showBar();
					hideBar();
				}

				function attachWheel(target) {
					if (window.addEventListener) {
						target.addEventListener('DOMMouseScroll', _onWheel, false);
						target.addEventListener('mousewheel', _onWheel, false);
					} else {
						document.attachEvent("onmousewheel", _onWheel)
					}
				}

				function getBarHeight() {
					barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
					bar.css({
						height: barHeight + 'px'
					});
					var display = barHeight == me.outerHeight() ? 'none' : 'block';
					bar.css({
						display: display
					});
				}

				function showBar() {
					getBarHeight();
					clearTimeout(queueHide);
					if (percentScroll == ~~percentScroll) {
						releaseScroll = o.allowPageScroll;
						if (lastScroll != percentScroll) {
							var msg = (~~percentScroll == 0) ? 'top' : 'bottom';
							me.trigger('slimscroll', msg);
						}
					} else {
						releaseScroll = false;
					}
					lastScroll = percentScroll;
					if (barHeight >= me.outerHeight()) {
						releaseScroll = true;
						return;
					}
					bar.stop(true, true).fadeIn('fast');
					if (o.railVisible) {
						rail.stop(true, true).fadeIn('fast');
					}
				}

				function hideBar() {
					if (!o.alwaysVisible) {
						queueHide = setTimeout(function () {
							if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg) {
								bar.fadeOut('slow');
								rail.fadeOut('slow');
							}
						}, 1000);
					}
				}
			});
			return this;
		}
	});
	$.fn.extend({
		slimscroll: $.fn.slimScroll
	});
})(jQuery);
(function ($) {
	$.fn.mrtabs = function () {
		return this.each(function () {
			var $element = $(this),
				$nav = $element.find('.tabs-nav'),
				$tabs = $nav.find('a'),
				$panels = $element.find('.tabs-panel');
			$tabs.filter(':first').addClass('active');
			$nav.find('li').filter(':first').addClass('active');
			$panels.filter(':first').addClass('active');
			$tabs.on('click', function (e) {
				e.preventDefault();
				var $tab = $(this),
					index = $tab.parent().index(),
					$panels = $element.find('.tabs-panel');
				if ($tab.hasClass('active')) {
					return;
				}
				$tabs.removeClass('active');
				$tab.addClass('active');
				$nav.find('li').removeClass('active');
				$tab.closest('li').addClass('active');
				$panels.removeClass('active');
				$panels.filter(':eq(' + index + ')').addClass('active');
			});
		});
	};
	$(function () {
		$('.martfury-tabs').mrtabs();
		$(document.body).on('martfury_get_tabs_ajax_success', function () {
			$('.martfury-tabs').mrtabs();
		});
	});
})(jQuery);;
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.NProgress = factory();
	}
})(this, function () {
	var NProgress = {};
	NProgress.version = '0.2.0';
	var Settings = NProgress.settings = {
		minimum: 0.08,
		easing: 'linear',
		positionUsing: '',
		speed: 200,
		trickle: true,
		trickleSpeed: 200,
		showSpinner: true,
		barSelector: '[role="bar"]',
		spinnerSelector: '[role="spinner"]',
		parent: 'body',
		template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
	};
	NProgress.configure = function (options) {
		var key, value;
		for (key in options) {
			value = options[key];
			if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
		}
		return this;
	};
	NProgress.status = null;
	NProgress.set = function (n) {
		var started = NProgress.isStarted();
		n = clamp(n, Settings.minimum, 1);
		NProgress.status = (n === 1 ? null : n);
		var progress = NProgress.render(!started),
			bar = progress.querySelector(Settings.barSelector),
			speed = Settings.speed,
			ease = Settings.easing;
		progress.offsetWidth;
		queue(function (next) {
			if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();
			css(bar, barPositionCSS(n, speed, ease));
			if (n === 1) {
				css(progress, {
					transition: 'none',
					opacity: 1
				});
				progress.offsetWidth;
				setTimeout(function () {
					css(progress, {
						transition: 'all ' + speed + 'ms linear',
						opacity: 0
					});
					setTimeout(function () {
						NProgress.remove();
						next();
					}, speed);
				}, speed);
			} else {
				setTimeout(next, speed);
			}
		});
		return this;
	};
	NProgress.isStarted = function () {
		return typeof NProgress.status === 'number';
	};
	NProgress.start = function () {
		if (!NProgress.status) NProgress.set(0);
		var work = function () {
			setTimeout(function () {
				if (!NProgress.status) return;
				NProgress.trickle();
				work();
			}, Settings.trickleSpeed);
		};
		if (Settings.trickle) work();
		return this;
	};
	NProgress.done = function (force) {
		if (!force && !NProgress.status) return this;
		return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
	};
	NProgress.inc = function (amount) {
		var n = NProgress.status;
		if (!n) {
			return NProgress.start();
		} else if (n > 1) {
			return;
		} else {
			if (typeof amount !== 'number') {
				if (n >= 0 && n < 0.2) {
					amount = 0.1;
				} else if (n >= 0.2 && n < 0.5) {
					amount = 0.04;
				} else if (n >= 0.5 && n < 0.8) {
					amount = 0.02;
				} else if (n >= 0.8 && n < 0.99) {
					amount = 0.005;
				} else {
					amount = 0;
				}
			}
			n = clamp(n + amount, 0, 0.994);
			return NProgress.set(n);
		}
	};
	NProgress.trickle = function () {
		return NProgress.inc();
	};
	(function () {
		var initial = 0,
			current = 0;
		NProgress.promise = function ($promise) {
			if (!$promise || $promise.state() === "resolved") {
				return this;
			}
			if (current === 0) {
				NProgress.start();
			}
			initial++;
			current++;
			$promise.always(function () {
				current--;
				if (current === 0) {
					initial = 0;
					NProgress.done();
				} else {
					NProgress.set((initial - current) / initial);
				}
			});
			return this;
		};
	})();
	NProgress.render = function (fromStart) {
		if (NProgress.isRendered()) return document.getElementById('nprogress');
		addClass(document.documentElement, 'nprogress-busy');
		var progress = document.createElement('div');
		progress.id = 'nprogress';
		progress.innerHTML = Settings.template;
		var bar = progress.querySelector(Settings.barSelector),
			perc = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
			parent = document.querySelector(Settings.parent),
			spinner;
		css(bar, {
			transition: 'all 0 linear',
			transform: 'translate3d(' + perc + '%,0,0)'
		});
		if (!Settings.showSpinner) {
			spinner = progress.querySelector(Settings.spinnerSelector);
			spinner && removeElement(spinner);
		}
		if (parent != document.body) {
			addClass(parent, 'nprogress-custom-parent');
		}
		parent.appendChild(progress);
		return progress;
	};
	NProgress.remove = function () {
		removeClass(document.documentElement, 'nprogress-busy');
		removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
		var progress = document.getElementById('nprogress');
		progress && removeElement(progress);
	};
	NProgress.isRendered = function () {
		return !!document.getElementById('nprogress');
	};
	NProgress.getPositioningCSS = function () {
		var bodyStyle = document.body.style;
		var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' : ('MozTransform' in bodyStyle) ? 'Moz' : ('msTransform' in bodyStyle) ? 'ms' : ('OTransform' in bodyStyle) ? 'O' : '';
		if (vendorPrefix + 'Perspective' in bodyStyle) {
			return 'translate3d';
		} else if (vendorPrefix + 'Transform' in bodyStyle) {
			return 'translate';
		} else {
			return 'margin';
		}
	};

	function clamp(n, min, max) {
		if (n < min) return min;
		if (n > max) return max;
		return n;
	}

	function toBarPerc(n) {
		return (-1 + n) * 100;
	}

	function barPositionCSS(n, speed, ease) {
		var barCSS;
		if (Settings.positionUsing === 'translate3d') {
			barCSS = {
				transform: 'translate3d(' + toBarPerc(n) + '%,0,0)'
			};
		} else if (Settings.positionUsing === 'translate') {
			barCSS = {
				transform: 'translate(' + toBarPerc(n) + '%,0)'
			};
		} else {
			barCSS = {
				'margin-left': toBarPerc(n) + '%'
			};
		}
		barCSS.transition = 'all ' + speed + 'ms ' + ease;
		return barCSS;
	}
	var queue = (function () {
		var pending = [];

		function next() {
			var fn = pending.shift();
			if (fn) {
				fn(next);
			}
		}
		return function (fn) {
			pending.push(fn);
			if (pending.length == 1) next();
		};
	})();
	var css = (function () {
		var cssPrefixes = ['Webkit', 'O', 'Moz', 'ms'],
			cssProps = {};

		function camelCase(string) {
			return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function (match, letter) {
				return letter.toUpperCase();
			});
		}

		function getVendorProp(name) {
			var style = document.body.style;
			if (name in style) return name;
			var i = cssPrefixes.length,
				capName = name.charAt(0).toUpperCase() + name.slice(1),
				vendorName;
			while (i--) {
				vendorName = cssPrefixes[i] + capName;
				if (vendorName in style) return vendorName;
			}
			return name;
		}

		function getStyleProp(name) {
			name = camelCase(name);
			return cssProps[name] || (cssProps[name] = getVendorProp(name));
		}

		function applyCss(element, prop, value) {
			prop = getStyleProp(prop);
			element.style[prop] = value;
		}
		return function (element, properties) {
			var args = arguments,
				prop, value;
			if (args.length == 2) {
				for (prop in properties) {
					value = properties[prop];
					if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
				}
			} else {
				applyCss(element, args[1], args[2]);
			}
		}
	})();

	function hasClass(element, name) {
		var list = typeof element == 'string' ? element : classList(element);
		return list.indexOf(' ' + name + ' ') >= 0;
	}

	function addClass(element, name) {
		var oldList = classList(element),
			newList = oldList + name;
		if (hasClass(oldList, name)) return;
		element.className = newList.substring(1);
	}

	function removeClass(element, name) {
		var oldList = classList(element),
			newList;
		if (!hasClass(element, name)) return;
		newList = oldList.replace(' ' + name + ' ', ' ');
		element.className = newList.substring(1, newList.length - 1);
	}

	function classList(element) {
		return (' ' + (element && element.className || '') + ' ').replace(/\s+/gi, ' ');
	}

	function removeElement(element) {
		element && element.parentNode && element.parentNode.removeChild(element);
	}
	return NProgress;
});

! function (a) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
	"use strict";
	var b = window.Slick || {};
	b = function () {
		function c(c, d) {
			var f, e = this;
			e.defaults = {
				accessibility: !0,
				adaptiveHeight: !1,
				appendArrows: a(c),
				appendDots: a(c),
				arrows: !0,
				asNavFor: null,
				prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
				nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
				autoplay: !1,
				autoplaySpeed: 3e3,
				centerMode: !1,
				centerPadding: "50px",
				cssEase: "ease",
				customPaging: function (b, c) {
					return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
				},
				dots: !1,
				dotsClass: "slick-dots",
				draggable: !0,
				easing: "linear",
				edgeFriction: .35,
				fade: !1,
				focusOnSelect: !1,
				infinite: !0,
				initialSlide: 0,
				lazyLoad: "ondemand",
				mobileFirst: !1,
				pauseOnHover: !0,
				pauseOnFocus: !0,
				pauseOnDotsHover: !1,
				respondTo: "window",
				responsive: null,
				rows: 1,
				rtl: !1,
				slide: "",
				slidesPerRow: 1,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 500,
				swipe: !0,
				swipeToSlide: !1,
				touchMove: !0,
				touchThreshold: 5,
				useCSS: !0,
				useTransform: !0,
				variableWidth: !1,
				vertical: !1,
				verticalSwiping: !1,
				waitForAnimate: !0,
				zIndex: 1e3
			}, e.initials = {
				animating: !1,
				dragging: !1,
				autoPlayTimer: null,
				currentDirection: 0,
				currentLeft: null,
				currentSlide: 0,
				direction: 1,
				$dots: null,
				listWidth: null,
				listHeight: null,
				loadIndex: 0,
				$nextArrow: null,
				$prevArrow: null,
				slideCount: null,
				slideWidth: null,
				$slideTrack: null,
				$slides: null,
				sliding: !1,
				slideOffset: 0,
				swipeLeft: null,
				$list: null,
				touchObject: {},
				transformsEnabled: !1,
				unslicked: !1
			}, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0)
		}
		var b = 0;
		return c
	}(), b.prototype.activateADA = function () {
		var a = this;
		a.$slideTrack.find(".slick-active").attr({
			"aria-hidden": "false"
		}).find("a, input, button, select").attr({
			tabindex: "0"
		})
	}, b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
		var e = this;
		if ("boolean" == typeof c) d = c, c = null;
		else if (0 > c || c >= e.slideCount) return !1;
		e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
			a(c).attr("data-slick-index", b)
		}), e.$slidesCache = e.$slides, e.reinit()
	}, b.prototype.animateHeight = function () {
		var a = this;
		if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
			var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
			a.$list.animate({
				height: b
			}, a.options.speed)
		}
	}, b.prototype.animateSlide = function (b, c) {
		var d = {},
			e = this;
		e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
			left: b
		}, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
			top: b
		}, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
			animStart: e.currentLeft
		}).animate({
			animStart: b
		}, {
			duration: e.options.speed,
			easing: e.options.easing,
			step: function (a) {
				a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
			},
			complete: function () {
				c && c.call()
			}
		})) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
			e.disableTransition(), c.call()
		}, e.options.speed))
	}, b.prototype.getNavTarget = function () {
		var b = this,
			c = b.options.asNavFor;
		return c && null !== c && (c = a(c).not(b.$slider)), c
	}, b.prototype.asNavFor = function (b) {
		var c = this,
			d = c.getNavTarget();
		null !== d && "object" == typeof d && d.each(function () {
			var c = a(this).slick("getSlick");
			c.unslicked || c.slideHandler(b, !0)
		})
	}, b.prototype.applyTransition = function (a) {
		var b = this,
			c = {};
		b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
	}, b.prototype.autoPlay = function () {
		var a = this;
		a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
	}, b.prototype.autoPlayClear = function () {
		var a = this;
		a.autoPlayTimer && clearInterval(a.autoPlayTimer)
	}, b.prototype.autoPlayIterator = function () {
		var a = this,
			b = a.currentSlide + a.options.slidesToScroll;
		a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
	}, b.prototype.buildArrows = function () {
		var b = this;
		b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
			"aria-disabled": "true",
			tabindex: "-1"
		}))
	}, b.prototype.buildDots = function () {
		var c, d, b = this;
		if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
			for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
			b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
		}
	}, b.prototype.buildOut = function () {
		var b = this;
		b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
			a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
		}), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
	}, b.prototype.buildRows = function () {
		var b, c, d, e, f, g, h, a = this;
		if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
			for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
				var i = document.createElement("div");
				for (c = 0; c < a.options.rows; c++) {
					var j = document.createElement("div");
					for (d = 0; d < a.options.slidesPerRow; d++) {
						var k = b * h + (c * a.options.slidesPerRow + d);
						g.get(k) && j.appendChild(g.get(k))
					}
					i.appendChild(j)
				}
				e.appendChild(i)
			}
			a.$slider.empty().append(e), a.$slider.children().children().children().css({
				width: 100 / a.options.slidesPerRow + "%",
				display: "inline-block"
			})
		}
	}, b.prototype.checkResponsive = function (b, c) {
		var e, f, g, d = this,
			h = !1,
			i = d.$slider.width(),
			j = window.innerWidth || a(window).width();
		if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
			f = null;
			for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
			null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
		}
	}, b.prototype.changeSlide = function (b, c) {
		var f, g, h, d = this,
			e = a(b.currentTarget);
		switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
			case "previous":
				g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
				break;
			case "next":
				g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
				break;
			case "index":
				var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
				d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
				break;
			default:
				return
		}
	}, b.prototype.checkNavigable = function (a) {
		var c, d, b = this;
		if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
		else
			for (var e in c) {
				if (a < c[e]) {
					a = d;
					break
				}
				d = c[e]
			}
		return a
	}, b.prototype.cleanUpEvents = function () {
		var b = this;
		b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
	}, b.prototype.cleanUpSlideEvents = function () {
		var b = this;
		b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
	}, b.prototype.cleanUpRows = function () {
		var b, a = this;
		a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b))
	}, b.prototype.clickHandler = function (a) {
		var b = this;
		b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
	}, b.prototype.destroy = function (b) {
		var c = this;
		c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
			a(this).attr("style", a(this).data("originalStyling"))
		}), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
	}, b.prototype.disableTransition = function (a) {
		var b = this,
			c = {};
		c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
	}, b.prototype.fadeSlide = function (a, b) {
		var c = this;
		c.cssTransitions === !1 ? (c.$slides.eq(a).css({
			zIndex: c.options.zIndex
		}), c.$slides.eq(a).animate({
			opacity: 1
		}, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
			opacity: 1,
			zIndex: c.options.zIndex
		}), b && setTimeout(function () {
			c.disableTransition(a), b.call()
		}, c.options.speed))
	}, b.prototype.fadeSlideOut = function (a) {
		var b = this;
		b.cssTransitions === !1 ? b.$slides.eq(a).animate({
			opacity: 0,
			zIndex: b.options.zIndex - 2
		}, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
			opacity: 0,
			zIndex: b.options.zIndex - 2
		}))
	}, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
		var b = this;
		null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
	}, b.prototype.focusHandler = function () {
		var b = this;
		b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
			c.stopImmediatePropagation();
			var d = a(this);
			setTimeout(function () {
				b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
			}, 0)
		})
	}, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
		var a = this;
		return a.currentSlide
	}, b.prototype.getDotCount = function () {
		var a = this,
			b = 0,
			c = 0,
			d = 0;
		if (a.options.infinite === !0)
			for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
		else if (a.options.centerMode === !0) d = a.slideCount;
		else if (a.options.asNavFor)
			for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
		else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
		return d - 1
	}, b.prototype.getLeft = function (a) {
		var c, d, f, b = this,
			e = 0;
		return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
	}, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
		var b = this;
		return b.options[a]
	}, b.prototype.getNavigableIndexes = function () {
		var e, a = this,
			b = 0,
			c = 0,
			d = [];
		for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
		return d
	}, b.prototype.getSlick = function () {
		return this
	}, b.prototype.getSlideCount = function () {
		var c, d, e, b = this;
		return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
			return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
		}), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
	}, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
		var c = this;
		c.changeSlide({
			data: {
				message: "index",
				index: parseInt(a)
			}
		}, b)
	}, b.prototype.init = function (b) {
		var c = this;
		a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
	}, b.prototype.initADA = function () {
		var b = this;
		b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
			"aria-hidden": "true",
			tabindex: "-1"
		}).find("a, input, button, select").attr({
			tabindex: "-1"
		}), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
			a(this).attr({
				role: "option",
				"aria-describedby": "slick-slide" + b.instanceUid + c
			})
		}), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
			a(this).attr({
				role: "presentation",
				"aria-selected": "false",
				"aria-controls": "navigation" + b.instanceUid + c,
				id: "slick-slide" + b.instanceUid + c
			})
		}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
	}, b.prototype.initArrowEvents = function () {
		var a = this;
		a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
			message: "previous"
		}, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
			message: "next"
		}, a.changeSlide))
	}, b.prototype.initDotEvents = function () {
		var b = this;
		b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
			message: "index"
		}, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
	}, b.prototype.initSlideEvents = function () {
		var b = this;
		b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
	}, b.prototype.initializeEvents = function () {
		var b = this;
		b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
			action: "start"
		}, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
			action: "move"
		}, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
			action: "end"
		}, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
			action: "end"
		}, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
	}, b.prototype.initUI = function () {
		var a = this;
		a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
	}, b.prototype.keyHandler = function (a) {
		var b = this;
		a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
			data: {
				message: b.options.rtl === !0 ? "next" : "previous"
			}
		}) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
			data: {
				message: b.options.rtl === !0 ? "previous" : "next"
			}
		}))
	}, b.prototype.lazyLoad = function () {
		function g(c) {
			a("img[data-lazy]", c).each(function () {
				var c = a(this),
					d = a(this).attr("data-lazy"),
					e = document.createElement("img");
				e.onload = function () {
					c.animate({
						opacity: 0
					}, 100, function () {
						c.attr("src", d).animate({
							opacity: 1
						}, 200, function () {
							c.removeAttr("data-lazy").removeClass("slick-loading")
						}), b.$slider.trigger("lazyLoaded", [b, c, d])
					})
				}, e.onerror = function () {
					c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d])
				}, e.src = d
			})
		}
		var c, d, e, f, b = this;
		b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
	}, b.prototype.loadSlider = function () {
		var a = this;
		a.setPosition(), a.$slideTrack.css({
			opacity: 1
		}), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
	}, b.prototype.next = b.prototype.slickNext = function () {
		var a = this;
		a.changeSlide({
			data: {
				message: "next"
			}
		})
	}, b.prototype.orientationChange = function () {
		var a = this;
		a.checkResponsive(), a.setPosition()
	}, b.prototype.pause = b.prototype.slickPause = function () {
		var a = this;
		a.autoPlayClear(), a.paused = !0
	}, b.prototype.play = b.prototype.slickPlay = function () {
		var a = this;
		a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
	}, b.prototype.postSlide = function (a) {
		var b = this;
		b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
	}, b.prototype.prev = b.prototype.slickPrev = function () {
		var a = this;
		a.changeSlide({
			data: {
				message: "previous"
			}
		})
	}, b.prototype.preventDefault = function (a) {
		a.preventDefault()
	}, b.prototype.progressiveLazyLoad = function (b) {
		b = b || 1;
		var e, f, g, c = this,
			d = a("img[data-lazy]", c.$slider);
		d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function () {
			e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad()
		}, g.onerror = function () {
			3 > b ? setTimeout(function () {
				c.progressiveLazyLoad(b + 1)
			}, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad())
		}, g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
	}, b.prototype.refresh = function (b) {
		var d, e, c = this;
		e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
			currentSlide: d
		}), c.init(), b || c.changeSlide({
			data: {
				message: "index",
				index: d
			}
		}, !1)
	}, b.prototype.registerBreakpoints = function () {
		var c, d, e, b = this,
			f = b.options.responsive || null;
		if ("array" === a.type(f) && f.length) {
			b.respondTo = b.options.respondTo || "window";
			for (c in f)
				if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
					for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
					b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
				} b.breakpoints.sort(function (a, c) {
				return b.options.mobileFirst ? a - c : c - a
			})
		}
	}, b.prototype.reinit = function () {
		var b = this;
		b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
	}, b.prototype.resize = function () {
		var b = this;
		a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
			b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
		}, 50))
	}, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
		var d = this;
		return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
	}, b.prototype.setCSS = function (a) {
		var d, e, b = this,
			c = {};
		b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
	}, b.prototype.setDimensions = function () {
		var a = this;
		a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
			padding: "0px " + a.options.centerPadding
		}) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
			padding: a.options.centerPadding + " 0px"
		})), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
		var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
		a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
	}, b.prototype.setFade = function () {
		var c, b = this;
		b.$slides.each(function (d, e) {
			c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
				position: "relative",
				right: c,
				top: 0,
				zIndex: b.options.zIndex - 2,
				opacity: 0
			}) : a(e).css({
				position: "relative",
				left: c,
				top: 0,
				zIndex: b.options.zIndex - 2,
				opacity: 0
			})
		}), b.$slides.eq(b.currentSlide).css({
			zIndex: b.options.zIndex - 1,
			opacity: 1
		})
	}, b.prototype.setHeight = function () {
		var a = this;
		if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
			var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
			a.$list.css("height", b)
		}
	}, b.prototype.setOption = b.prototype.slickSetOption = function () {
		var c, d, e, f, h, b = this,
			g = !1;
		if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;
		else if ("multiple" === h) a.each(e, function (a, c) {
			b.options[a] = c
		});
		else if ("responsive" === h)
			for (d in f)
				if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];
				else {
					for (c = b.options.responsive.length - 1; c >= 0;) b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
					b.options.responsive.push(f[d])
				} g && (b.unload(), b.reinit())
	}, b.prototype.setPosition = function () {
		var a = this;
		a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
	}, b.prototype.setProps = function () {
		var a = this,
			b = document.body.style;
		a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
	}, b.prototype.setSlideClasses = function (a) {
		var c, d, e, f, b = this;
		d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a,
			d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
	}, b.prototype.setupInfinite = function () {
		var c, d, e, b = this;
		if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
			for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
			for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
			b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
				a(this).attr("id", "")
			})
		}
	}, b.prototype.interrupt = function (a) {
		var b = this;
		a || b.autoPlay(), b.interrupted = a
	}, b.prototype.selectHandler = function (b) {
		var c = this,
			d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
			e = parseInt(d.attr("data-slick-index"));
		return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
	}, b.prototype.slideHandler = function (a, b, c) {
		var d, e, f, g, j, h = null,
			i = this;
		return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
			i.postSlide(d)
		}) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
			i.postSlide(d)
		}) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
			i.postSlide(e)
		})) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function () {
			i.postSlide(e)
		}) : i.postSlide(e))))
	}, b.prototype.startLoad = function () {
		var a = this;
		a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
	}, b.prototype.swipeDirection = function () {
		var a, b, c, d, e = this;
		return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
	}, b.prototype.swipeEnd = function (a) {
		var c, d, b = this;
		if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
		if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
			switch (d = b.swipeDirection()) {
				case "left":
				case "down":
					c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
					break;
				case "right":
				case "up":
					c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1
			}
			"vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]))
		} else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
	}, b.prototype.swipeHandler = function (a) {
		var b = this;
		if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
			case "start":
				b.swipeStart(a);
				break;
			case "move":
				b.swipeMove(a);
				break;
			case "end":
				b.swipeEnd(a)
		}
	}, b.prototype.swipeMove = function (a) {
		var d, e, f, g, h, b = this;
		return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
	}, b.prototype.swipeStart = function (a) {
		var c, b = this;
		return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))
	}, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
		var a = this;
		null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
	}, b.prototype.unload = function () {
		var b = this;
		a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
	}, b.prototype.unslick = function (a) {
		var b = this;
		b.$slider.trigger("unslick", [b, a]), b.destroy()
	}, b.prototype.updateArrows = function () {
		var b, a = this;
		b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
	}, b.prototype.updateDots = function () {
		var a = this;
		null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
	}, b.prototype.visibility = function () {
		var a = this;
		a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
	}, a.fn.slick = function () {
		var f, g, a = this,
			c = arguments[0],
			d = Array.prototype.slice.call(arguments, 1),
			e = a.length;
		for (f = 0; e > f; f++)
			if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
		return a
	}
});
/*!
 * Isotope PACKAGED v3.0.5
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2017 Metafizzy
 */
! function (t, e) {
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
		return e(t, i)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function (t, e) {
	"use strict";

	function i(i, s, a) {
		function u(t, e, o) {
			var n, s = "$()." + i + '("' + e + '")';
			return t.each(function (t, u) {
				var h = a.data(u, i);
				if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
				var d = h[e];
				if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
				var l = d.apply(h, o);
				n = void 0 === n ? l : n
			}), void 0 !== n ? n : t
		}

		function h(t, e) {
			t.each(function (t, o) {
				var n = a.data(o, i);
				n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n))
			})
		}
		a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
			a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
		}), a.fn[i] = function (t) {
			if ("string" == typeof t) {
				var e = n.call(arguments, 1);
				return u(this, t, e)
			}
			return h(this, t), this
		}, o(a))
	}

	function o(t) {
		!t || t && t.bridget || (t.bridget = i)
	}
	var n = Array.prototype.slice,
		s = t.console,
		r = "undefined" == typeof s ? function () {} : function (t) {
			s.error(t)
		};
	return o(e || t.jQuery), i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
	function t() {}
	var e = t.prototype;
	return e.on = function (t, e) {
		if (t && e) {
			var i = this._events = this._events || {},
				o = i[t] = i[t] || [];
			return o.indexOf(e) == -1 && o.push(e), this
		}
	}, e.once = function (t, e) {
		if (t && e) {
			this.on(t, e);
			var i = this._onceEvents = this._onceEvents || {},
				o = i[t] = i[t] || {};
			return o[e] = !0, this
		}
	}, e.off = function (t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			var o = i.indexOf(e);
			return o != -1 && i.splice(o, 1), this
		}
	}, e.emitEvent = function (t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			i = i.slice(0), e = e || [];
			for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
				var s = i[n],
					r = o && o[s];
				r && (this.off(t, s), delete o[s]), s.apply(this, e)
			}
			return this
		}
	}, e.allOff = function () {
		delete this._events, delete this._onceEvents
	}, t
}),
function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
		return e()
	}) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function () {
	"use strict";

	function t(t) {
		var e = parseFloat(t),
			i = t.indexOf("%") == -1 && !isNaN(e);
		return i && e
	}

	function e() {}

	function i() {
		for (var t = {
				width: 0,
				height: 0,
				innerWidth: 0,
				innerHeight: 0,
				outerWidth: 0,
				outerHeight: 0
			}, e = 0; e < h; e++) {
			var i = u[e];
			t[i] = 0
		}
		return t
	}

	function o(t) {
		var e = getComputedStyle(t);
		return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
	}

	function n() {
		if (!d) {
			d = !0;
			var e = document.createElement("div");
			e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
			var i = document.body || document.documentElement;
			i.appendChild(e);
			var n = o(e);
			s.isBoxSizeOuter = r = 200 == t(n.width), i.removeChild(e)
		}
	}

	function s(e) {
		if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
			var s = o(e);
			if ("none" == s.display) return i();
			var a = {};
			a.width = e.offsetWidth, a.height = e.offsetHeight;
			for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
				var f = u[l],
					c = s[f],
					m = parseFloat(c);
				a[f] = isNaN(m) ? 0 : m
			}
			var p = a.paddingLeft + a.paddingRight,
				y = a.paddingTop + a.paddingBottom,
				g = a.marginLeft + a.marginRight,
				v = a.marginTop + a.marginBottom,
				_ = a.borderLeftWidth + a.borderRightWidth,
				I = a.borderTopWidth + a.borderBottomWidth,
				z = d && r,
				x = t(s.width);
			x !== !1 && (a.width = x + (z ? 0 : p + _));
			var S = t(s.height);
			return S !== !1 && (a.height = S + (z ? 0 : y + I)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + I), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
		}
	}
	var r, a = "undefined" == typeof console ? e : function (t) {
			console.error(t)
		},
		u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
		h = u.length,
		d = !1;
	return s
}),
function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
	"use strict";
	var t = function () {
		var t = window.Element.prototype;
		if (t.matches) return "matches";
		if (t.matchesSelector) return "matchesSelector";
		for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
			var o = e[i],
				n = o + "MatchesSelector";
			if (t[n]) return n
		}
	}();
	return function (e, i) {
		return e[t](i)
	}
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
		return e(t, i)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function (t, e) {
	var i = {};
	i.extend = function (t, e) {
		for (var i in e) t[i] = e[i];
		return t
	}, i.modulo = function (t, e) {
		return (t % e + e) % e
	}, i.makeArray = function (t) {
		var e = [];
		if (Array.isArray(t)) e = t;
		else if (t && "object" == typeof t && "number" == typeof t.length)
			for (var i = 0; i < t.length; i++) e.push(t[i]);
		else e.push(t);
		return e
	}, i.removeFrom = function (t, e) {
		var i = t.indexOf(e);
		i != -1 && t.splice(i, 1)
	}, i.getParent = function (t, i) {
		for (; t.parentNode && t != document.body;)
			if (t = t.parentNode, e(t, i)) return t
	}, i.getQueryElement = function (t) {
		return "string" == typeof t ? document.querySelector(t) : t
	}, i.handleEvent = function (t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, i.filterFindElements = function (t, o) {
		t = i.makeArray(t);
		var n = [];
		return t.forEach(function (t) {
			if (t instanceof HTMLElement) {
				if (!o) return void n.push(t);
				e(t, o) && n.push(t);
				for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s])
			}
		}), n
	}, i.debounceMethod = function (t, e, i) {
		var o = t.prototype[e],
			n = e + "Timeout";
		t.prototype[e] = function () {
			var t = this[n];
			t && clearTimeout(t);
			var e = arguments,
				s = this;
			this[n] = setTimeout(function () {
				o.apply(s, e), delete s[n]
			}, i || 100)
		}
	}, i.docReady = function (t) {
		var e = document.readyState;
		"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
	}, i.toDashed = function (t) {
		return t.replace(/(.)([A-Z])/g, function (t, e, i) {
			return e + "-" + i
		}).toLowerCase()
	};
	var o = t.console;
	return i.htmlInit = function (e, n) {
		i.docReady(function () {
			var s = i.toDashed(n),
				r = "data-" + s,
				a = document.querySelectorAll("[" + r + "]"),
				u = document.querySelectorAll(".js-" + s),
				h = i.makeArray(a).concat(i.makeArray(u)),
				d = r + "-options",
				l = t.jQuery;
			h.forEach(function (t) {
				var i, s = t.getAttribute(r) || t.getAttribute(d);
				try {
					i = s && JSON.parse(s)
				} catch (a) {
					return void(o && o.error("Error parsing " + r + " on " + t.className + ": " + a))
				}
				var u = new e(t, i);
				l && l.data(t, n, u)
			})
		})
	}, i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function (t, e) {
	"use strict";

	function i(t) {
		for (var e in t) return !1;
		return e = null, !0
	}

	function o(t, e) {
		t && (this.element = t, this.layout = e, this.position = {
			x: 0,
			y: 0
		}, this._create())
	}

	function n(t) {
		return t.replace(/([A-Z])/g, function (t) {
			return "-" + t.toLowerCase()
		})
	}
	var s = document.documentElement.style,
		r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
		a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
		u = {
			WebkitTransition: "webkitTransitionEnd",
			transition: "transitionend"
		} [r],
		h = {
			transform: a,
			transition: r,
			transitionDuration: r + "Duration",
			transitionProperty: r + "Property",
			transitionDelay: r + "Delay"
		},
		d = o.prototype = Object.create(t.prototype);
	d.constructor = o, d._create = function () {
		this._transn = {
			ingProperties: {},
			clean: {},
			onEnd: {}
		}, this.css({
			position: "absolute"
		})
	}, d.handleEvent = function (t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, d.getSize = function () {
		this.size = e(this.element)
	}, d.css = function (t) {
		var e = this.element.style;
		for (var i in t) {
			var o = h[i] || i;
			e[o] = t[i]
		}
	}, d.getPosition = function () {
		var t = getComputedStyle(this.element),
			e = this.layout._getOption("originLeft"),
			i = this.layout._getOption("originTop"),
			o = t[e ? "left" : "right"],
			n = t[i ? "top" : "bottom"],
			s = this.layout.size,
			r = o.indexOf("%") != -1 ? parseFloat(o) / 100 * s.width : parseInt(o, 10),
			a = n.indexOf("%") != -1 ? parseFloat(n) / 100 * s.height : parseInt(n, 10);
		r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a
	}, d.layoutPosition = function () {
		var t = this.layout.size,
			e = {},
			i = this.layout._getOption("originLeft"),
			o = this.layout._getOption("originTop"),
			n = i ? "paddingLeft" : "paddingRight",
			s = i ? "left" : "right",
			r = i ? "right" : "left",
			a = this.position.x + t[n];
		e[s] = this.getXValue(a), e[r] = "";
		var u = o ? "paddingTop" : "paddingBottom",
			h = o ? "top" : "bottom",
			d = o ? "bottom" : "top",
			l = this.position.y + t[u];
		e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
	}, d.getXValue = function (t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
	}, d.getYValue = function (t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
	}, d._transitionTo = function (t, e) {
		this.getPosition();
		var i = this.position.x,
			o = this.position.y,
			n = parseInt(t, 10),
			s = parseInt(e, 10),
			r = n === this.position.x && s === this.position.y;
		if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
		var a = t - i,
			u = e - o,
			h = {};
		h.transform = this.getTranslate(a, u), this.transition({
			to: h,
			onTransitionEnd: {
				transform: this.layoutPosition
			},
			isCleaning: !0
		})
	}, d.getTranslate = function (t, e) {
		var i = this.layout._getOption("originLeft"),
			o = this.layout._getOption("originTop");
		return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
	}, d.goTo = function (t, e) {
		this.setPosition(t, e), this.layoutPosition()
	}, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
		this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
	}, d._nonTransition = function (t) {
		this.css(t.to), t.isCleaning && this._removeStyles(t.to);
		for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
	}, d.transition = function (t) {
		if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
		var e = this._transn;
		for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
		for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
		if (t.from) {
			this.css(t.from);
			var o = this.element.offsetHeight;
			o = null
		}
		this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
	};
	var l = "opacity," + n(a);
	d.enableTransition = function () {
		if (!this.isTransitioning) {
			var t = this.layout.options.transitionDuration;
			t = "number" == typeof t ? t + "ms" : t, this.css({
				transitionProperty: l,
				transitionDuration: t,
				transitionDelay: this.staggerDelay || 0
			}), this.element.addEventListener(u, this, !1)
		}
	}, d.onwebkitTransitionEnd = function (t) {
		this.ontransitionend(t)
	}, d.onotransitionend = function (t) {
		this.ontransitionend(t)
	};
	var f = {
		"-webkit-transform": "transform"
	};
	d.ontransitionend = function (t) {
		if (t.target === this.element) {
			var e = this._transn,
				o = f[t.propertyName] || t.propertyName;
			if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
				var n = e.onEnd[o];
				n.call(this), delete e.onEnd[o]
			}
			this.emitEvent("transitionEnd", [this])
		}
	}, d.disableTransition = function () {
		this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
	}, d._removeStyles = function (t) {
		var e = {};
		for (var i in t) e[i] = "";
		this.css(e)
	};
	var c = {
		transitionProperty: "",
		transitionDuration: "",
		transitionDelay: ""
	};
	return d.removeTransitionStyles = function () {
		this.css(c)
	}, d.stagger = function (t) {
		t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
	}, d.removeElem = function () {
		this.element.parentNode.removeChild(this.element), this.css({
			display: ""
		}), this.emitEvent("remove", [this])
	}, d.remove = function () {
		return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
			this.removeElem()
		}), void this.hide()) : void this.removeElem()
	}, d.reveal = function () {
		delete this.isHidden, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {},
			i = this.getHideRevealTransitionEndProperty("visibleStyle");
		e[i] = this.onRevealTransitionEnd, this.transition({
			from: t.hiddenStyle,
			to: t.visibleStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, d.onRevealTransitionEnd = function () {
		this.isHidden || this.emitEvent("reveal")
	}, d.getHideRevealTransitionEndProperty = function (t) {
		var e = this.layout.options[t];
		if (e.opacity) return "opacity";
		for (var i in e) return i
	}, d.hide = function () {
		this.isHidden = !0, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {},
			i = this.getHideRevealTransitionEndProperty("hiddenStyle");
		e[i] = this.onHideTransitionEnd, this.transition({
			from: t.visibleStyle,
			to: t.hiddenStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, d.onHideTransitionEnd = function () {
		this.isHidden && (this.css({
			display: "none"
		}), this.emitEvent("hide"))
	}, d.destroy = function () {
		this.css({
			position: "",
			left: "",
			right: "",
			top: "",
			bottom: "",
			transition: "",
			transform: ""
		})
	}, o
}),
function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) {
		return e(t, i, o, n, s)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, o, n) {
	"use strict";

	function s(t, e) {
		var i = o.getQueryElement(t);
		if (!i) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
		this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
		var n = ++l;
		this.element.outlayerGUID = n, f[n] = this, this._create();
		var s = this._getOption("initLayout");
		s && this.layout()
	}

	function r(t) {
		function e() {
			t.apply(this, arguments)
		}
		return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
	}

	function a(t) {
		if ("number" == typeof t) return t;
		var e = t.match(/(^\d*\.?\d*)(\w*)/),
			i = e && e[1],
			o = e && e[2];
		if (!i.length) return 0;
		i = parseFloat(i);
		var n = m[o] || 1;
		return i * n
	}
	var u = t.console,
		h = t.jQuery,
		d = function () {},
		l = 0,
		f = {};
	s.namespace = "outlayer", s.Item = n, s.defaults = {
		containerStyle: {
			position: "relative"
		},
		initLayout: !0,
		originLeft: !0,
		originTop: !0,
		resize: !0,
		resizeContainer: !0,
		transitionDuration: "0.4s",
		hiddenStyle: {
			opacity: 0,
			transform: "scale(0.001)"
		},
		visibleStyle: {
			opacity: 1,
			transform: "scale(1)"
		}
	};
	var c = s.prototype;
	o.extend(c, e.prototype), c.option = function (t) {
		o.extend(this.options, t)
	}, c._getOption = function (t) {
		var e = this.constructor.compatOptions[t];
		return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
	}, s.compatOptions = {
		initLayout: "isInitLayout",
		horizontal: "isHorizontal",
		layoutInstant: "isLayoutInstant",
		originLeft: "isOriginLeft",
		originTop: "isOriginTop",
		resize: "isResizeBound",
		resizeContainer: "isResizingContainer"
	}, c._create = function () {
		this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
		var t = this._getOption("resize");
		t && this.bindResize()
	}, c.reloadItems = function () {
		this.items = this._itemize(this.element.children)
	}, c._itemize = function (t) {
		for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
			var s = e[n],
				r = new i(s, this);
			o.push(r)
		}
		return o
	}, c._filterFindItemElements = function (t) {
		return o.filterFindElements(t, this.options.itemSelector)
	}, c.getItemElements = function () {
		return this.items.map(function (t) {
			return t.element
		})
	}, c.layout = function () {
		this._resetLayout(), this._manageStamps();
		var t = this._getOption("layoutInstant"),
			e = void 0 !== t ? t : !this._isLayoutInited;
		this.layoutItems(this.items, e), this._isLayoutInited = !0
	}, c._init = c.layout, c._resetLayout = function () {
		this.getSize()
	}, c.getSize = function () {
		this.size = i(this.element)
	}, c._getMeasurement = function (t, e) {
		var o, n = this.options[t];
		n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0
	}, c.layoutItems = function (t, e) {
		t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
	}, c._getItemsForLayout = function (t) {
		return t.filter(function (t) {
			return !t.isIgnored
		})
	}, c._layoutItems = function (t, e) {
		if (this._emitCompleteOnItems("layout", t), t && t.length) {
			var i = [];
			t.forEach(function (t) {
				var o = this._getItemLayoutPosition(t);
				o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o)
			}, this), this._processLayoutQueue(i)
		}
	}, c._getItemLayoutPosition = function () {
		return {
			x: 0,
			y: 0
		}
	}, c._processLayoutQueue = function (t) {
		this.updateStagger(), t.forEach(function (t, e) {
			this._positionItem(t.item, t.x, t.y, t.isInstant, e)
		}, this)
	}, c.updateStagger = function () {
		var t = this.options.stagger;
		return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
	}, c._positionItem = function (t, e, i, o, n) {
		o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
	}, c._postLayout = function () {
		this.resizeContainer()
	}, c.resizeContainer = function () {
		var t = this._getOption("resizeContainer");
		if (t) {
			var e = this._getContainerSize();
			e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
		}
	}, c._getContainerSize = d, c._setContainerMeasure = function (t, e) {
		if (void 0 !== t) {
			var i = this.size;
			i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
		}
	}, c._emitCompleteOnItems = function (t, e) {
		function i() {
			n.dispatchEvent(t + "Complete", null, [e])
		}

		function o() {
			r++, r == s && i()
		}
		var n = this,
			s = e.length;
		if (!e || !s) return void i();
		var r = 0;
		e.forEach(function (e) {
			e.once(t, o)
		})
	}, c.dispatchEvent = function (t, e, i) {
		var o = e ? [e].concat(i) : i;
		if (this.emitEvent(t, o), h)
			if (this.$element = this.$element || h(this.element), e) {
				var n = h.Event(e);
				n.type = t, this.$element.trigger(n, i)
			} else this.$element.trigger(t, i)
	}, c.ignore = function (t) {
		var e = this.getItem(t);
		e && (e.isIgnored = !0)
	}, c.unignore = function (t) {
		var e = this.getItem(t);
		e && delete e.isIgnored
	}, c.stamp = function (t) {
		t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
	}, c.unstamp = function (t) {
		t = this._find(t), t && t.forEach(function (t) {
			o.removeFrom(this.stamps, t), this.unignore(t)
		}, this)
	}, c._find = function (t) {
		if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
	}, c._manageStamps = function () {
		this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
	}, c._getBoundingRect = function () {
		var t = this.element.getBoundingClientRect(),
			e = this.size;
		this._boundingRect = {
			left: t.left + e.paddingLeft + e.borderLeftWidth,
			top: t.top + e.paddingTop + e.borderTopWidth,
			right: t.right - (e.paddingRight + e.borderRightWidth),
			bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
		}
	}, c._manageStamp = d, c._getElementOffset = function (t) {
		var e = t.getBoundingClientRect(),
			o = this._boundingRect,
			n = i(t),
			s = {
				left: e.left - o.left - n.marginLeft,
				top: e.top - o.top - n.marginTop,
				right: o.right - e.right - n.marginRight,
				bottom: o.bottom - e.bottom - n.marginBottom
			};
		return s
	}, c.handleEvent = o.handleEvent, c.bindResize = function () {
		t.addEventListener("resize", this), this.isResizeBound = !0
	}, c.unbindResize = function () {
		t.removeEventListener("resize", this), this.isResizeBound = !1
	}, c.onresize = function () {
		this.resize()
	}, o.debounceMethod(s, "onresize", 100), c.resize = function () {
		this.isResizeBound && this.needsResizeLayout() && this.layout()
	}, c.needsResizeLayout = function () {
		var t = i(this.element),
			e = this.size && t;
		return e && t.innerWidth !== this.size.innerWidth
	}, c.addItems = function (t) {
		var e = this._itemize(t);
		return e.length && (this.items = this.items.concat(e)), e
	}, c.appended = function (t) {
		var e = this.addItems(t);
		e.length && (this.layoutItems(e, !0), this.reveal(e))
	}, c.prepended = function (t) {
		var e = this._itemize(t);
		if (e.length) {
			var i = this.items.slice(0);
			this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
		}
	}, c.reveal = function (t) {
		if (this._emitCompleteOnItems("reveal", t), t && t.length) {
			var e = this.updateStagger();
			t.forEach(function (t, i) {
				t.stagger(i * e), t.reveal()
			})
		}
	}, c.hide = function (t) {
		if (this._emitCompleteOnItems("hide", t), t && t.length) {
			var e = this.updateStagger();
			t.forEach(function (t, i) {
				t.stagger(i * e), t.hide()
			})
		}
	}, c.revealItemElements = function (t) {
		var e = this.getItems(t);
		this.reveal(e)
	}, c.hideItemElements = function (t) {
		var e = this.getItems(t);
		this.hide(e)
	}, c.getItem = function (t) {
		for (var e = 0; e < this.items.length; e++) {
			var i = this.items[e];
			if (i.element == t) return i
		}
	}, c.getItems = function (t) {
		t = o.makeArray(t);
		var e = [];
		return t.forEach(function (t) {
			var i = this.getItem(t);
			i && e.push(i)
		}, this), e
	}, c.remove = function (t) {
		var e = this.getItems(t);
		this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
			t.remove(), o.removeFrom(this.items, t)
		}, this)
	}, c.destroy = function () {
		var t = this.element.style;
		t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
			t.destroy()
		}), this.unbindResize();
		var e = this.element.outlayerGUID;
		delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
	}, s.data = function (t) {
		t = o.getQueryElement(t);
		var e = t && t.outlayerGUID;
		return e && f[e]
	}, s.create = function (t, e) {
		var i = r(s);
		return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
	};
	var m = {
		ms: 1,
		s: 1e3
	};
	return s.Item = n, s
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function (t) {
	"use strict";

	function e() {
		t.Item.apply(this, arguments)
	}
	var i = e.prototype = Object.create(t.Item.prototype),
		o = i._create;
	i._create = function () {
		this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
	}, i.updateSortData = function () {
		if (!this.isIgnored) {
			this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
			var t = this.layout.options.getSortData,
				e = this.layout._sorters;
			for (var i in t) {
				var o = e[i];
				this.sortData[i] = o(this.element, this)
			}
		}
	};
	var n = i.destroy;
	return i.destroy = function () {
		n.apply(this, arguments), this.css({
			display: ""
		})
	}, e
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function (t, e) {
	"use strict";

	function i(t) {
		this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
	}
	var o = i.prototype,
		n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
	return n.forEach(function (t) {
		o[t] = function () {
			return e.prototype[t].apply(this.isotope, arguments)
		}
	}), o.needsVerticalResizeLayout = function () {
		var e = t(this.isotope.element),
			i = this.isotope.size && e;
		return i && e.innerHeight != this.isotope.size.innerHeight
	}, o._getMeasurement = function () {
		this.isotope._getMeasurement.apply(this, arguments)
	}, o.getColumnWidth = function () {
		this.getSegmentSize("column", "Width")
	}, o.getRowHeight = function () {
		this.getSegmentSize("row", "Height")
	}, o.getSegmentSize = function (t, e) {
		var i = t + e,
			o = "outer" + e;
		if (this._getMeasurement(i, o), !this[i]) {
			var n = this.getFirstItemSize();
			this[i] = n && n[o] || this.isotope.size["inner" + e]
		}
	}, o.getFirstItemSize = function () {
		var e = this.isotope.filteredItems[0];
		return e && e.element && t(e.element)
	}, o.layout = function () {
		this.isotope.layout.apply(this.isotope, arguments)
	}, o.getSize = function () {
		this.isotope.getSize(), this.size = this.isotope.size
	}, i.modes = {}, i.create = function (t, e) {
		function n() {
			i.apply(this, arguments)
		}
		return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
	}, i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function (t, e) {
	var i = t.create("masonry");
	i.compatOptions.fitWidth = "isFitWidth";
	var o = i.prototype;
	return o._resetLayout = function () {
		this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
		for (var t = 0; t < this.cols; t++) this.colYs.push(0);
		this.maxY = 0, this.horizontalColIndex = 0
	}, o.measureColumns = function () {
		if (this.getContainerWidth(), !this.columnWidth) {
			var t = this.items[0],
				i = t && t.element;
			this.columnWidth = i && e(i).outerWidth || this.containerWidth
		}
		var o = this.columnWidth += this.gutter,
			n = this.containerWidth + this.gutter,
			s = n / o,
			r = o - n % o,
			a = r && r < 1 ? "round" : "floor";
		s = Math[a](s), this.cols = Math.max(s, 1)
	}, o.getContainerWidth = function () {
		var t = this._getOption("fitWidth"),
			i = t ? this.element.parentNode : this.element,
			o = e(i);
		this.containerWidth = o && o.innerWidth
	}, o._getItemLayoutPosition = function (t) {
		t.getSize();
		var e = t.size.outerWidth % this.columnWidth,
			i = e && e < 1 ? "round" : "ceil",
			o = Math[i](t.size.outerWidth / this.columnWidth);
		o = Math.min(o, this.cols);
		for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
				x: this.columnWidth * s.col,
				y: s.y
			}, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
		return r
	}, o._getTopColPosition = function (t) {
		var e = this._getTopColGroup(t),
			i = Math.min.apply(Math, e);
		return {
			col: e.indexOf(i),
			y: i
		}
	}, o._getTopColGroup = function (t) {
		if (t < 2) return this.colYs;
		for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
		return e
	}, o._getColGroupY = function (t, e) {
		if (e < 2) return this.colYs[t];
		var i = this.colYs.slice(t, t + e);
		return Math.max.apply(Math, i)
	}, o._getHorizontalColPosition = function (t, e) {
		var i = this.horizontalColIndex % this.cols,
			o = t > 1 && i + t > this.cols;
		i = o ? 0 : i;
		var n = e.size.outerWidth && e.size.outerHeight;
		return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
			col: i,
			y: this._getColGroupY(i, t)
		}
	}, o._manageStamp = function (t) {
		var i = e(t),
			o = this._getElementOffset(t),
			n = this._getOption("originLeft"),
			s = n ? o.left : o.right,
			r = s + i.outerWidth,
			a = Math.floor(s / this.columnWidth);
		a = Math.max(0, a);
		var u = Math.floor(r / this.columnWidth);
		u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
		for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l])
	}, o._getContainerSize = function () {
		this.maxY = Math.max.apply(Math, this.colYs);
		var t = {
			height: this.maxY
		};
		return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
	}, o._getContainerFitWidth = function () {
		for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
		return (this.cols - t) * this.columnWidth - this.gutter
	}, o.needsResizeLayout = function () {
		var t = this.containerWidth;
		return this.getContainerWidth(), t != this.containerWidth
	}, i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function (t, e) {
	"use strict";
	var i = t.create("masonry"),
		o = i.prototype,
		n = {
			_getElementOffset: !0,
			layout: !0,
			_getMeasurement: !0
		};
	for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
	var r = o.measureColumns;
	o.measureColumns = function () {
		this.items = this.isotope.filteredItems, r.call(this)
	};
	var a = o._getOption;
	return o._getOption = function (t) {
		return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
	}, i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
	"use strict";
	var e = t.create("fitRows"),
		i = e.prototype;
	return i._resetLayout = function () {
		this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
	}, i._getItemLayoutPosition = function (t) {
		t.getSize();
		var e = t.size.outerWidth + this.gutter,
			i = this.isotope.size.innerWidth + this.gutter;
		0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
		var o = {
			x: this.x,
			y: this.y
		};
		return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
	}, i._getContainerSize = function () {
		return {
			height: this.maxY
		}
	}, e
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
	"use strict";
	var e = t.create("vertical", {
			horizontalAlignment: 0
		}),
		i = e.prototype;
	return i._resetLayout = function () {
		this.y = 0
	}, i._getItemLayoutPosition = function (t) {
		t.getSize();
		var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
			i = this.y;
		return this.y += t.size.outerHeight, {
			x: e,
			y: i
		}
	}, i._getContainerSize = function () {
		return {
			height: this.y
		}
	}, e
}),
function (t, e) {
	"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (i, o, n, s, r, a) {
		return e(t, i, o, n, s, r, a)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function (t, e, i, o, n, s, r) {
	function a(t, e) {
		return function (i, o) {
			for (var n = 0; n < t.length; n++) {
				var s = t[n],
					r = i.sortData[s],
					a = o.sortData[s];
				if (r > a || r < a) {
					var u = void 0 !== e[s] ? e[s] : e,
						h = u ? 1 : -1;
					return (r > a ? 1 : -1) * h
				}
			}
			return 0
		}
	}
	var u = t.jQuery,
		h = String.prototype.trim ? function (t) {
			return t.trim()
		} : function (t) {
			return t.replace(/^\s+|\s+$/g, "")
		},
		d = e.create("isotope", {
			layoutMode: "masonry",
			isJQueryFiltering: !0,
			sortAscending: !0
		});
	d.Item = s, d.LayoutMode = r;
	var l = d.prototype;
	l._create = function () {
		this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
		for (var t in r.modes) this._initLayoutMode(t)
	}, l.reloadItems = function () {
		this.itemGUID = 0, e.prototype.reloadItems.call(this)
	}, l._itemize = function () {
		for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
			var o = t[i];
			o.id = this.itemGUID++
		}
		return this._updateItemsSortData(t), t
	}, l._initLayoutMode = function (t) {
		var e = r.modes[t],
			i = this.options[t] || {};
		this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
	}, l.layout = function () {
		return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
	}, l._layout = function () {
		var t = this._getIsInstant();
		this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
	}, l.arrange = function (t) {
		this.option(t), this._getIsInstant();
		var e = this._filter(this.items);
		this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
	}, l._init = l.arrange, l._hideReveal = function (t) {
		this.reveal(t.needReveal), this.hide(t.needHide)
	}, l._getIsInstant = function () {
		var t = this._getOption("layoutInstant"),
			e = void 0 !== t ? t : !this._isLayoutInited;
		return this._isInstant = e, e
	}, l._bindArrangeComplete = function () {
		function t() {
			e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
		}
		var e, i, o, n = this;
		this.once("layoutComplete", function () {
			e = !0, t()
		}), this.once("hideComplete", function () {
			i = !0, t()
		}), this.once("revealComplete", function () {
			o = !0, t()
		})
	}, l._filter = function (t) {
		var e = this.options.filter;
		e = e || "*";
		for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
			var a = t[r];
			if (!a.isIgnored) {
				var u = s(a);
				u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
			}
		}
		return {
			matches: i,
			needReveal: o,
			needHide: n
		}
	}, l._getFilterTest = function (t) {
		return u && this.options.isJQueryFiltering ? function (e) {
			return u(e.element).is(t)
		} : "function" == typeof t ? function (e) {
			return t(e.element)
		} : function (e) {
			return o(e.element, t)
		}
	}, l.updateSortData = function (t) {
		var e;
		t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
	}, l._getSorters = function () {
		var t = this.options.getSortData;
		for (var e in t) {
			var i = t[e];
			this._sorters[e] = f(i)
		}
	}, l._updateItemsSortData = function (t) {
		for (var e = t && t.length, i = 0; e && i < e; i++) {
			var o = t[i];
			o.updateSortData()
		}
	};
	var f = function () {
		function t(t) {
			if ("string" != typeof t) return t;
			var i = h(t).split(" "),
				o = i[0],
				n = o.match(/^\[(.+)\]$/),
				s = n && n[1],
				r = e(s, o),
				a = d.sortDataParsers[i[1]];
			return t = a ? function (t) {
				return t && a(r(t))
			} : function (t) {
				return t && r(t)
			}
		}

		function e(t, e) {
			return t ? function (e) {
				return e.getAttribute(t)
			} : function (t) {
				var i = t.querySelector(e);
				return i && i.textContent
			}
		}
		return t
	}();
	d.sortDataParsers = {
		parseInt: function (t) {
			return parseInt(t, 10)
		},
		parseFloat: function (t) {
			return parseFloat(t)
		}
	}, l._sort = function () {
		if (this.options.sortBy) {
			var t = n.makeArray(this.options.sortBy);
			this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
			var e = a(this.sortHistory, this.options.sortAscending);
			this.filteredItems.sort(e)
		}
	}, l._getIsSameSortBy = function (t) {
		for (var e = 0; e < t.length; e++)
			if (t[e] != this.sortHistory[e]) return !1;
		return !0
	}, l._mode = function () {
		var t = this.options.layoutMode,
			e = this.modes[t];
		if (!e) throw new Error("No layout mode: " + t);
		return e.options = this.options[t], e
	}, l._resetLayout = function () {
		e.prototype._resetLayout.call(this), this._mode()._resetLayout()
	}, l._getItemLayoutPosition = function (t) {
		return this._mode()._getItemLayoutPosition(t)
	}, l._manageStamp = function (t) {
		this._mode()._manageStamp(t)
	}, l._getContainerSize = function () {
		return this._mode()._getContainerSize()
	}, l.needsResizeLayout = function () {
		return this._mode().needsResizeLayout()
	}, l.appended = function (t) {
		var e = this.addItems(t);
		if (e.length) {
			var i = this._filterRevealAdded(e);
			this.filteredItems = this.filteredItems.concat(i)
		}
	}, l.prepended = function (t) {
		var e = this._itemize(t);
		if (e.length) {
			this._resetLayout(), this._manageStamps();
			var i = this._filterRevealAdded(e);
			this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
		}
	}, l._filterRevealAdded = function (t) {
		var e = this._filter(t);
		return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
	}, l.insert = function (t) {
		var e = this.addItems(t);
		if (e.length) {
			var i, o, n = e.length;
			for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
			var s = this._filter(e).matches;
			for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
			for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
			this.reveal(s)
		}
	};
	var c = l.remove;
	return l.remove = function (t) {
		t = n.makeArray(t);
		var e = this.getItems(t);
		c.call(this, t);
		for (var i = e && e.length, o = 0; i && o < i; o++) {
			var s = e[o];
			n.removeFrom(this.filteredItems, s)
		}
	}, l.shuffle = function () {
		for (var t = 0; t < this.items.length; t++) {
			var e = this.items[t];
			e.sortData.random = Math.random()
		}
		this.options.sortBy = "random", this._sort(), this._layout()
	}, l._noTransition = function (t, e) {
		var i = this.options.transitionDuration;
		this.options.transitionDuration = 0;
		var o = t.apply(this, e);
		return this.options.transitionDuration = i, o
	}, l.getFilteredItemElements = function () {
		return this.filteredItems.map(function (t) {
			return t.element
		})
	}, d
});
(function (e) {
	typeof define == "function" && define.amd ? define(["jquery"], e) : typeof module == "object" && module.exports ? module.exports = function (t, n) {
		return n === undefined && (typeof window != "undefined" ? n = require("jquery") : n = require("jquery")(t)), e(n), n
	} : e(jQuery)
})(function (e) {
	function A(t, n, i) {
		typeof i == "string" && (i = {
			className: i
		}), this.options = E(w, e.isPlainObject(i) ? i : {}), this.loadHTML(), this.wrapper = e(h.html), this.options.clickToHide && this.wrapper.addClass(r + "-hidable"), this.wrapper.data(r, this), this.arrow = this.wrapper.find("." + r + "-arrow"), this.container = this.wrapper.find("." + r + "-container"), this.container.append(this.userContainer), t && t.length && (this.elementType = t.attr("type"), this.originalElement = t, this.elem = N(t), this.elem.data(r, this), this.elem.before(this.wrapper)), this.container.hide(), this.run(n)
	}
	var t = [].indexOf || function (e) {
			for (var t = 0, n = this.length; t < n; t++)
				if (t in this && this[t] === e) return t;
			return -1
		},
		n = "notify",
		r = n + "js",
		i = n + "!blank",
		s = {
			t: "top",
			m: "middle",
			b: "bottom",
			l: "left",
			c: "center",
			r: "right"
		},
		o = ["l", "c", "r"],
		u = ["t", "m", "b"],
		a = ["t", "b", "l", "r"],
		f = {
			t: "b",
			m: null,
			b: "t",
			l: "r",
			c: null,
			r: "l"
		},
		l = function (t) {
			var n;
			return n = [], e.each(t.split(/\W+/), function (e, t) {
				var r;
				r = t.toLowerCase().charAt(0);
				if (s[r]) return n.push(r)
			}), n
		},
		c = {},
		h = {
			name: "core",
			html: '<div class="' + r + '-wrapper">\n	<div class="' + r + '-arrow"></div>\n	<div class="' + r + '-container"></div>\n</div>',
			css: "." + r + "-corner {\n	position: fixed;\n	margin: 5px;\n	z-index: 1050;\n}\n\n." + r + "-corner ." + r + "-wrapper,\n." + r + "-corner ." + r + "-container {\n	position: relative;\n	display: block;\n	height: inherit;\n	width: inherit;\n	margin: 3px;\n}\n\n." + r + "-wrapper {\n	z-index: 1;\n	position: absolute;\n	display: inline-block;\n	height: 0;\n	width: 0;\n}\n\n." + r + "-container {\n	display: none;\n	z-index: 1;\n	position: absolute;\n}\n\n." + r + "-hidable {\n	cursor: pointer;\n}\n\n[data-notify-text],[data-notify-html] {\n	position: relative;\n}\n\n." + r + "-arrow {\n	position: absolute;\n	z-index: 2;\n	width: 0;\n	height: 0;\n}"
		},
		p = {
			"border-radius": ["-webkit-", "-moz-"]
		},
		d = function (e) {
			return c[e]
		},
		v = function (e) {
			if (!e) throw "Missing Style name";
			c[e] && delete c[e]
		},
		m = function (t, i) {
			if (!t) throw "Missing Style name";
			if (!i) throw "Missing Style definition";
			if (!i.html) throw "Missing Style HTML";
			var s = c[t];
			s && s.cssElem && (window.console && console.warn(n + ": overwriting style '" + t + "'"), c[t].cssElem.remove()), i.name = t, c[t] = i;
			var o = "";
			i.classes && e.each(i.classes, function (t, n) {
				return o += "." + r + "-" + i.name + "-" + t + " {\n", e.each(n, function (t, n) {
					return p[t] && e.each(p[t], function (e, r) {
						return o += "	" + r + t + ": " + n + ";\n"
					}), o += "	" + t + ": " + n + ";\n"
				}), o += "}\n"
			}), i.css && (o += "/* styles for " + i.name + " */\n" + i.css), o && (i.cssElem = g(o), i.cssElem.attr("id", "notify-" + i.name));
			var u = {},
				a = e(i.html);
			y("html", a, u), y("text", a, u), i.fields = u
		},
		g = function (t) {
			var n, r, i;
			r = x("style"), r.attr("type", "text/css"), e("head").append(r);
			try {
				r.html(t)
			} catch (s) {
				r[0].styleSheet.cssText = t
			}
			return r
		},
		y = function (t, n, r) {
			var s;
			return t !== "html" && (t = "text"), s = "data-notify-" + t, b(n, "[" + s + "]").each(function () {
				var n;
				n = e(this).attr(s), n || (n = i), r[n] = t
			})
		},
		b = function (e, t) {
			return e.is(t) ? e : e.find(t)
		},
		w = {
			clickToHide: !0,
			autoHide: !0,
			autoHideDelay: 5e3,
			arrowShow: !0,
			arrowSize: 5,
			breakNewLines: !0,
			elementPosition: "bottom",
			globalPosition: "top right",
			style: "bootstrap",
			className: "error",
			showAnimation: "slideDown",
			showDuration: 400,
			hideAnimation: "slideUp",
			hideDuration: 200,
			gap: 5
		},
		E = function (t, n) {
			var r;
			return r = function () {}, r.prototype = t, e.extend(!0, new r, n)
		},
		S = function (t) {
			return e.extend(w, t)
		},
		x = function (t) {
			return e("<" + t + "></" + t + ">")
		},
		T = {},
		N = function (t) {
			var n;
			return t.is("[type=radio]") && (n = t.parents("form:first").find("[type=radio]").filter(function (n, r) {
				return e(r).attr("name") === t.attr("name")
			}), t = n.first()), t
		},
		C = function (e, t, n) {
			var r, i;
			if (typeof n == "string") n = parseInt(n, 10);
			else if (typeof n != "number") return;
			if (isNaN(n)) return;
			return r = s[f[t.charAt(0)]], i = t, e[r] !== undefined && (t = s[r.charAt(0)], n = -n), e[t] === undefined ? e[t] = n : e[t] += n, null
		},
		k = function (e, t, n) {
			if (e === "l" || e === "t") return 0;
			if (e === "c" || e === "m") return n / 2 - t / 2;
			if (e === "r" || e === "b") return n - t;
			throw "Invalid alignment"
		},
		L = function (e) {
			return L.e = L.e || x("div"), L.e.text(e).html()
		};
	A.prototype.loadHTML = function () {
		var t;
		t = this.getStyle(), this.userContainer = e(t.html), this.userFields = t.fields
	}, A.prototype.show = function (e, t) {
		var n, r, i, s, o;
		r = function (n) {
			return function () {
				!e && !n.elem && n.destroy();
				if (t) return t()
			}
		}(this), o = this.container.parent().parents(":hidden").length > 0, i = this.container.add(this.arrow), n = [];
		if (o && e) s = "show";
		else if (o && !e) s = "hide";
		else if (!o && e) s = this.options.showAnimation, n.push(this.options.showDuration);
		else {
			if (!!o || !!e) return r();
			s = this.options.hideAnimation, n.push(this.options.hideDuration)
		}
		return n.push(r), i[s].apply(i, n)
	}, A.prototype.setGlobalPosition = function () {
		var t = this.getPosition(),
			n = t[0],
			i = t[1],
			o = s[n],
			u = s[i],
			a = n + "|" + i,
			f = T[a];
		if (!f || !document.body.contains(f[0])) {
			f = T[a] = x("div");
			var l = {};
			l[o] = 0, u === "middle" ? l.top = "45%" : u === "center" ? l.left = "45%" : l[u] = 0, f.css(l).addClass(r + "-corner"), e("body").append(f)
		}
		return f.prepend(this.wrapper)
	}, A.prototype.setElementPosition = function () {
		var n, r, i, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, L, A, O, M, _, D, P, H, B, j;
		H = this.getPosition(), _ = H[0], O = H[1], M = H[2], g = this.elem.position(), d = this.elem.outerHeight(), y = this.elem.outerWidth(), v = this.elem.innerHeight(), m = this.elem.innerWidth(), j = this.wrapper.position(), c = this.container.height(), h = this.container.width(), T = s[_], L = f[_], A = s[L], p = {}, p[A] = _ === "b" ? d : _ === "r" ? y : 0, C(p, "top", g.top - j.top), C(p, "left", g.left - j.left), B = ["top", "left"];
		for (w = 0, S = B.length; w < S; w++) D = B[w], N = parseInt(this.elem.css("margin-" + D), 10), N && C(p, D, N);
		b = Math.max(0, this.options.gap - (this.options.arrowShow ? i : 0)), C(p, A, b);
		if (!this.options.arrowShow) this.arrow.hide();
		else {
			i = this.options.arrowSize, r = e.extend({}, p), n = this.userContainer.css("border-color") || this.userContainer.css("border-top-color") || this.userContainer.css("background-color") || "white";
			for (E = 0, x = a.length; E < x; E++) {
				D = a[E], P = s[D];
				if (D === L) continue;
				l = P === T ? n : "transparent", r["border-" + P] = i + "px solid " + l
			}
			C(p, s[L], i), t.call(a, O) >= 0 && C(r, s[O], i * 2)
		}
		t.call(u, _) >= 0 ? (C(p, "left", k(O, h, y)), r && C(r, "left", k(O, i, m))) : t.call(o, _) >= 0 && (C(p, "top", k(O, c, d)), r && C(r, "top", k(O, i, v))), this.container.is(":visible") && (p.display = "block"), this.container.removeAttr("style").css(p);
		if (r) return this.arrow.removeAttr("style").css(r)
	}, A.prototype.getPosition = function () {
		var e, n, r, i, s, f, c, h;
		h = this.options.position || (this.elem ? this.options.elementPosition : this.options.globalPosition), e = l(h), e.length === 0 && (e[0] = "b");
		if (n = e[0], t.call(a, n) < 0) throw "Must be one of [" + a + "]";
		if (e.length === 1 || (r = e[0], t.call(u, r) >= 0) && (i = e[1], t.call(o, i) < 0) || (s = e[0], t.call(o, s) >= 0) && (f = e[1], t.call(u, f) < 0)) e[1] = (c = e[0], t.call(o, c) >= 0) ? "m" : "l";
		return e.length === 2 && (e[2] = e[1]), e
	}, A.prototype.getStyle = function (e) {
		var t;
		e || (e = this.options.style), e || (e = "default"), t = c[e];
		if (!t) throw "Missing style: " + e;
		return t
	}, A.prototype.updateClasses = function () {
		var t, n;
		return t = ["base"], e.isArray(this.options.className) ? t = t.concat(this.options.className) : this.options.className && t.push(this.options.className), n = this.getStyle(), t = e.map(t, function (e) {
			return r + "-" + n.name + "-" + e
		}).join(" "), this.userContainer.attr("class", t)
	}, A.prototype.run = function (t, n) {
		var r, s, o, u, a;
		e.isPlainObject(n) ? e.extend(this.options, n) : e.type(n) === "string" && (this.options.className = n);
		if (this.container && !t) {
			this.show(!1);
			return
		}
		if (!this.container && !t) return;
		s = {}, e.isPlainObject(t) ? s = t : s[i] = t;
		for (o in s) {
			r = s[o], u = this.userFields[o];
			if (!u) continue;
			u === "text" && (r = L(r), this.options.breakNewLines && (r = r.replace(/\n/g, "<br/>"))), a = o === i ? "" : "=" + o, b(this.userContainer, "[data-notify-" + u + a + "]").html(r)
		}
		this.updateClasses(), this.elem ? this.setElementPosition() : this.setGlobalPosition(), this.show(!0), this.options.autoHide && (clearTimeout(this.autohideTimer), this.autohideTimer = setTimeout(this.show.bind(this, !1), this.options.autoHideDelay))
	}, A.prototype.destroy = function () {
		this.wrapper.data(r, null), this.wrapper.remove()
	}, e[n] = function (t, r, i) {
		return t && t.nodeName || t.jquery ? e(t)[n](r, i) : (i = r, r = t, new A(null, r, i)), t
	}, e.fn[n] = function (t, n) {
		return e(this).each(function () {
			var i = N(e(this)).data(r);
			i && i.destroy();
			var s = new A(e(this), t, n)
		}), this
	}, e.extend(e[n], {
		defaults: S,
		addStyle: m,
		removeStyle: v,
		pluginOptions: w,
		getStyle: d,
		insertCSS: g
	}), m("bootstrap", {
		html: "<div>\n<span data-notify-text></span>\n</div>",
		classes: {
			base: {
				"font-weight": "bold",
				padding: "8px 15px 8px 14px",
				"text-shadow": "0 1px 0 rgba(255, 255, 255, 0.5)",
				"background-color": "#fcf8e3",
				border: "1px solid #fbeed5",
				"border-radius": "4px",
				"white-space": "nowrap",
				"padding-left": "25px",
				"background-repeat": "no-repeat",
				"background-position": "3px 7px"
			},
			error: {
				color: "#B94A48",
				"background-color": "#F2DEDE",
				"border-color": "#EED3D7",
				"background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtRJREFUeNqkVc1u00AQHq+dOD+0poIQfkIjalW0SEGqRMuRnHos3DjwAH0ArlyQeANOOSMeAA5VjyBxKBQhgSpVUKKQNGloFdw4cWw2jtfMOna6JOUArDTazXi/b3dm55socPqQhFka++aHBsI8GsopRJERNFlY88FCEk9Yiwf8RhgRyaHFQpPHCDmZG5oX2ui2yilkcTT1AcDsbYC1NMAyOi7zTX2Agx7A9luAl88BauiiQ/cJaZQfIpAlngDcvZZMrl8vFPK5+XktrWlx3/ehZ5r9+t6e+WVnp1pxnNIjgBe4/6dAysQc8dsmHwPcW9C0h3fW1hans1ltwJhy0GxK7XZbUlMp5Ww2eyan6+ft/f2FAqXGK4CvQk5HueFz7D6GOZtIrK+srupdx1GRBBqNBtzc2AiMr7nPplRdKhb1q6q6zjFhrklEFOUutoQ50xcX86ZlqaZpQrfbBdu2R6/G19zX6XSgh6RX5ubyHCM8nqSID6ICrGiZjGYYxojEsiw4PDwMSL5VKsC8Yf4VRYFzMzMaxwjlJSlCyAQ9l0CW44PBADzXhe7xMdi9HtTrdYjFYkDQL0cn4Xdq2/EAE+InCnvADTf2eah4Sx9vExQjkqXT6aAERICMewd/UAp/IeYANM2joxt+q5VI+ieq2i0Wg3l6DNzHwTERPgo1ko7XBXj3vdlsT2F+UuhIhYkp7u7CarkcrFOCtR3H5JiwbAIeImjT/YQKKBtGjRFCU5IUgFRe7fF4cCNVIPMYo3VKqxwjyNAXNepuopyqnld602qVsfRpEkkz+GFL1wPj6ySXBpJtWVa5xlhpcyhBNwpZHmtX8AGgfIExo0ZpzkWVTBGiXCSEaHh62/PoR0p/vHaczxXGnj4bSo+G78lELU80h1uogBwWLf5YlsPmgDEd4M236xjm+8nm4IuE/9u+/PH2JXZfbwz4zw1WbO+SQPpXfwG/BBgAhCNZiSb/pOQAAAAASUVORK5CYII=)"
			},
			success: {
				color: "#468847",
				"background-color": "#DFF0D8",
				"border-color": "#D6E9C6",
				"background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAutJREFUeNq0lctPE0Ecx38zu/RFS1EryqtgJFA08YCiMZIAQQ4eRG8eDGdPJiYeTIwHTfwPiAcvXIwXLwoXPaDxkWgQ6islKlJLSQWLUraPLTv7Gme32zoF9KSTfLO7v53vZ3d/M7/fIth+IO6INt2jjoA7bjHCJoAlzCRw59YwHYjBnfMPqAKWQYKjGkfCJqAF0xwZjipQtA3MxeSG87VhOOYegVrUCy7UZM9S6TLIdAamySTclZdYhFhRHloGYg7mgZv1Zzztvgud7V1tbQ2twYA34LJmF4p5dXF1KTufnE+SxeJtuCZNsLDCQU0+RyKTF27Unw101l8e6hns3u0PBalORVVVkcaEKBJDgV3+cGM4tKKmI+ohlIGnygKX00rSBfszz/n2uXv81wd6+rt1orsZCHRdr1Imk2F2Kob3hutSxW8thsd8AXNaln9D7CTfA6O+0UgkMuwVvEFFUbbAcrkcTA8+AtOk8E6KiQiDmMFSDqZItAzEVQviRkdDdaFgPp8HSZKAEAL5Qh7Sq2lIJBJwv2scUqkUnKoZgNhcDKhKg5aH+1IkcouCAdFGAQsuWZYhOjwFHQ96oagWgRoUov1T9kRBEODAwxM2QtEUl+Wp+Ln9VRo6BcMw4ErHRYjH4/B26AlQoQQTRdHWwcd9AH57+UAXddvDD37DmrBBV34WfqiXPl61g+vr6xA9zsGeM9gOdsNXkgpEtTwVvwOklXLKm6+/p5ezwk4B+j6droBs2CsGa/gNs6RIxazl4Tc25mpTgw/apPR1LYlNRFAzgsOxkyXYLIM1V8NMwyAkJSctD1eGVKiq5wWjSPdjmeTkiKvVW4f2YPHWl3GAVq6ymcyCTgovM3FzyRiDe2TaKcEKsLpJvNHjZgPNqEtyi6mZIm4SRFyLMUsONSSdkPeFtY1n0mczoY3BHTLhwPRy9/lzcziCw9ACI+yql0VLzcGAZbYSM5CCSZg1/9oc/nn7+i8N9p/8An4JMADxhH+xHfuiKwAAAABJRU5ErkJggg==)"
			},
			info: {
				color: "#3A87AD",
				"background-color": "#D9EDF7",
				"border-color": "#BCE8F1",
				"background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QYFAhkSsdes/QAAA8dJREFUOMvVlGtMW2UYx//POaWHXg6lLaW0ypAtw1UCgbniNOLcVOLmAjHZolOYlxmTGXVZdAnRfXQm+7SoU4mXaOaiZsEpC9FkiQs6Z6bdCnNYruM6KNBw6YWewzl9z+sHImEWv+vz7XmT95f/+3/+7wP814v+efDOV3/SoX3lHAA+6ODeUFfMfjOWMADgdk+eEKz0pF7aQdMAcOKLLjrcVMVX3xdWN29/GhYP7SvnP0cWfS8caSkfHZsPE9Fgnt02JNutQ0QYHB2dDz9/pKX8QjjuO9xUxd/66HdxTeCHZ3rojQObGQBcuNjfplkD3b19Y/6MrimSaKgSMmpGU5WevmE/swa6Oy73tQHA0Rdr2Mmv/6A1n9w9suQ7097Z9lM4FlTgTDrzZTu4StXVfpiI48rVcUDM5cmEksrFnHxfpTtU/3BFQzCQF/2bYVoNbH7zmItbSoMj40JSzmMyX5qDvriA7QdrIIpA+3cdsMpu0nXI8cV0MtKXCPZev+gCEM1S2NHPvWfP/hL+7FSr3+0p5RBEyhEN5JCKYr8XnASMT0xBNyzQGQeI8fjsGD39RMPk7se2bd5ZtTyoFYXftF6y37gx7NeUtJJOTFlAHDZLDuILU3j3+H5oOrD3yWbIztugaAzgnBKJuBLpGfQrS8wO4FZgV+c1IxaLgWVU0tMLEETCos4xMzEIv9cJXQcyagIwigDGwJgOAtHAwAhisQUjy0ORGERiELgG4iakkzo4MYAxcM5hAMi1WWG1yYCJIcMUaBkVRLdGeSU2995TLWzcUAzONJ7J6FBVBYIggMzmFbvdBV44Corg8vjhzC+EJEl8U1kJtgYrhCzgc/vvTwXKSib1paRFVRVORDAJAsw5FuTaJEhWM2SHB3mOAlhkNxwuLzeJsGwqWzf5TFNdKgtY5qHp6ZFf67Y/sAVadCaVY5YACDDb3Oi4NIjLnWMw2QthCBIsVhsUTU9tvXsjeq9+X1d75/KEs4LNOfcdf/+HthMnvwxOD0wmHaXr7ZItn2wuH2SnBzbZAbPJwpPx+VQuzcm7dgRCB57a1uBzUDRL4bfnI0RE0eaXd9W89mpjqHZnUI5Hh2l2dkZZUhOqpi2qSmpOmZ64Tuu9qlz/SEXo6MEHa3wOip46F1n7633eekV8ds8Wxjn37Wl63VVa+ej5oeEZ/82ZBETJjpJ1Rbij2D3Z/1trXUvLsblCK0XfOx0SX2kMsn9dX+d+7Kf6h8o4AIykuffjT8L20LU+w4AZd5VvEPY+XpWqLV327HR7DzXuDnD8r+ovkBehJ8i+y8YAAAAASUVORK5CYII=)"
			},
			warn: {
				color: "#C09853",
				"background-color": "#FCF8E3",
				"border-color": "#FBEED5",
				"background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAABJlBMVEXr6eb/2oD/wi7/xjr/0mP/ykf/tQD/vBj/3o7/uQ//vyL/twebhgD/4pzX1K3z8e349vK6tHCilCWbiQymn0jGworr6dXQza3HxcKkn1vWvV/5uRfk4dXZ1bD18+/52YebiAmyr5S9mhCzrWq5t6ufjRH54aLs0oS+qD751XqPhAybhwXsujG3sm+Zk0PTwG6Shg+PhhObhwOPgQL4zV2nlyrf27uLfgCPhRHu7OmLgAafkyiWkD3l49ibiAfTs0C+lgCniwD4sgDJxqOilzDWowWFfAH08uebig6qpFHBvH/aw26FfQTQzsvy8OyEfz20r3jAvaKbhgG9q0nc2LbZxXanoUu/u5WSggCtp1anpJKdmFz/zlX/1nGJiYmuq5Dx7+sAAADoPUZSAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfdBgUBGhh4aah5AAAAlklEQVQY02NgoBIIE8EUcwn1FkIXM1Tj5dDUQhPU502Mi7XXQxGz5uVIjGOJUUUW81HnYEyMi2HVcUOICQZzMMYmxrEyMylJwgUt5BljWRLjmJm4pI1hYp5SQLGYxDgmLnZOVxuooClIDKgXKMbN5ggV1ACLJcaBxNgcoiGCBiZwdWxOETBDrTyEFey0jYJ4eHjMGWgEAIpRFRCUt08qAAAAAElFTkSuQmCC)"
			}
		}
	}), e(function () {
		g(h.css).attr("id", "core-notify"), e(document).on("click", "." + r + "-hidable", function (t) {
			e(this).trigger("notify-hide")
		}), e(document).on("notify-hide", "." + r + "-wrapper", function (t) {
			var n = e(this).data(r);
			n && n.show(!1)
		})
	})
});
! function (p) {
	"use strict";
	var c = c || {};
	c.init = function () {
		c.$body = p(document.body), c.$window = p(window), c.$header = p("#site-header"), this.preLoader(), this.newLetterPopup(), this.stickyHeader(), this.productSearchLabel(), this.headerMenu(), this.megaMenu(), this.instanceSearch(), this.topPromotion(), this.mobileMenu(), this.userMobileMenu(), this.pageHeaderParallax(), this.postEntryFormat(), this.singleEntryFormat(), this.blogLoadingAjax(), this.relatedPost(), this.blogLayout(), this.lazyLoad(), this.backToTop(), this.recentlyViewedProducts(), this.catalogBanners(), this.productsTopCarousel(), this.productCategoriesWidget(), this.toolTipIcon(), this.searchLayeredNav(), this.productAttribute(), this.shopView(), this.addWishlist(), this.addCompare(), this.productQuickView(), this.variationImagesCarousel(), this.productTopCategories(), this.filterAjax(), this.catalogOpenCartMini(), this.hoverProductTabs(), this.productQuantity(), this.productThumbnail(), this.productGallery(), this.productDegree(), this.singleProductCarousel(), this.fbtProduct(), this.fbtAddToCartAjax(), this.fbtAddToWishlistAjax(), this.instagramCarousel(), this.productVatiation(), this.addToCartAjax(), this.stickyProductInfo(), this.filterOnMobile(), p(document.body).on("martfury_get_products_ajax_success", function () {
			c.toolTipIcon()
		})
	}, c.preLoader = function () {
		c.$body.hasClass("mf-preloader") && (NProgress.start(), c.$window.on("load", function () {
			NProgress.done(), p("#page").addClass("fade-in")
		}))
	}, c.stickyHeader = function () {
		if (c.$body.hasClass("sticky-header")) {
			var t = 0,
				e = c.$header.find(".header-main-wapper"),
				o = e.outerHeight() - 18,
				i = p("#top-promotion"),
				a = 0 < i.length ? i.outerHeight(!0) : 0,
				r = p("#topbar"),
				n = 0 < r.length ? r.outerHeight(!0) : 0,
				s = c.$header.outerHeight(!0);
			t = n + a + s, c.$window.on("scroll", function () {
				0 < i.length && i.hasClass("invisible") && (t = s + n), c.$window.scrollTop() > t ? (c.$header.addClass("minimized"), e.css({
					"padding-top": o
				})) : (c.$header.removeClass("minimized"), e.removeAttr("style"))
			})
		}
	}, c.topPromotion = function () {
		var e = p("#top-promotion");
		e.length < 1 || e.on("click", ".close", function (t) {
			t.preventDefault(), e.slideUp().addClass("invisible")
		})
	}, c.mobileMenu = function () {
		var t = p("#primary-mobile-nav");

		function e(t) {
			t.closest("li").siblings().find("ul").slideUp(), t.closest("li").siblings().removeClass("active"), t.closest("li").siblings().find("li").removeClass("active"), t.closest("li").children("ul").slideToggle(), t.closest("li").toggleClass("active")
		}
		c.$header.on("click", "#mf-toggle-menu", function (t) {
			t.preventDefault(), c.$body.toggleClass("display-mobile-menu")
		}), t.find(".menu .menu-item-has-children > a").prepend('<span class="toggle-menu-children"><i class="icon-plus"></i> </span>'), c.$body.hasClass("submenus-mobile-icon") ? t.on("click", ".toggle-menu-children", function (t) {
			t.preventDefault(), e(p(this))
		}) : t.on("click", ".menu-item-has-children > a", function (t) {
			t.preventDefault(), e(p(this))
		}), t.on("click", ".close-canvas-mobile-panel", function (t) {
			t.preventDefault(), c.$body.removeClass("display-mobile-menu")
		}), p("#mf-off-canvas-layer").on("click", function (t) {
			t.preventDefault(), c.$body.removeClass("display-mobile-menu mb-filter-active")
		}), c.$window.on("resize", function () {
			1200 < c.$window.width() && c.$body.removeClass("display-mobile-menu")
		})
	}, c.userMobileMenu = function () {
		var t = p("#primary-user-nav");
		t.length < 1 || (c.$window.on("resize", function () {
			c.$window.width() < 1200 ? c.$body.addClass("canvas-menu-mobile") : c.$body.removeClass("canvas-menu-mobile")
		}).trigger("resize"), c.$header.find(".menu-item-account.logined").on("click", "a", function (t) {
			c.$body.hasClass("canvas-menu-mobile") && (t.preventDefault(), c.$body.toggleClass("display-user-mobile"))
		}), t.on("click", ".close-canvas-mobile-panel", function (t) {
			t.preventDefault(), c.$body.removeClass("display-user-mobile")
		}), p("#mf-off-canvas-layer").on("click", function (t) {
			t.preventDefault(), c.$body.removeClass("display-user-mobile")
		}))
	}, c.newLetterPopup = function () {
		var e = p("#mf-newsletter-popup"),
			o = parseInt(martfuryData.nl_days),
			t = parseInt(martfuryData.nl_seconds);

		function i(t) {
			var e = new Date,
				o = e.getTime();
			e.setTime(e.getTime() + 24 * t * 60 * 60 * 1e3), document.cookie = "mf_newletter=" + o + ";expires=" + e.toGMTString() + ";path=/"
		}
		e.length < 1 || (c.$window.on("load", function () {
			setTimeout(function () {
				e.addClass("open")
			}, 1e3 * t)
		}), e.on("click", ".close-modal", function (t) {
			t.preventDefault(), i(o), e.removeClass("open"), e.fadeOut()
		}), e.on("click", ".n-close", function (t) {
			t.preventDefault(), i(30), e.removeClass("open"), e.fadeOut()
		}), e.find(".mc4wp-form").submit(function () {
			i(o)
		}))
	}, c.backToTop = function () {
		var t = p("#scroll-top");
		c.$window.scroll(function () {
			c.$window.scrollTop() > c.$window.height() ? t.addClass("show-scroll") : t.removeClass("show-scroll")
		}), t.on("click", function (t) {
			t.preventDefault(), p("html, body").stop().animate({
				scrollTop: 0
			}, 800)
		})
	}, c.headerMenu = function () {
		if (!(c.$body.hasClass("header-layout-3") || c.$body.hasClass("header-layout-1") || c.$header.find(".products-cats-menu").length < 1)) {
			var t = c.$header.find(".products-cats-menu").position().left;
			if ("true" === martfuryData.direction) {
				var e = c.$header.find(".header-logo").width() - t - c.$header.find(".products-cats-menu").width() + 15;
				c.$header.find(".toggle-product-cats").css({
					right: -1 * e
				})
			} else c.$header.find(".toggle-product-cats").css({
				left: -1 * t
			})
		}
	}, c.megaMenu = function () {
		c.$header.find(".primary-nav .menu-item.is-mega-menu").each(function () {
			var t = p(this).children(".dropdown-submenu").width(),
				e = p(this).closest(".col-header-menu").width(),
				o = p(this).outerWidth(),
				i = p(this).position().left + o / 2 - t / 2;
			e - p(this).position().left + o / 2 - t / 2 < 0 ? p(this).removeClass("has-width").addClass("align-right") : i < 0 && p(this).removeClass("has-width").addClass("align-left")
		})
	}, c.productSearchLabel = function () {
		c.$header.on("change", "#product_cat", function () {
			var t = p(this).find("option:selected").text().trim();
			c.$header.find(".product-cat-label").html(t)
		}), c.$header.find(".products-search").submit(function () {
			"0" == p(this).find("#product_cat").val() && p(this).find("#product_cat").removeAttr("name")
		})
	}, c.postEntryFormat = function () {
		c.$body.hasClass("mf-blog-page") && (p(".blog-wapper").find(".entry-format").find(".slides").not(".slick-initialized").slick({
			rtl: "true" === martfuryData.direction,
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: !1,
			prevArrow: '<span class="ion-ios-arrow-left slick-prev-arrow"></span>',
			nextArrow: '<span class="ion-ios-arrow-right slick-next-arrow"></span>'
		}), p(".blog-wapper").find(".entry-format").fitVids({
			customSelector: "iframe, video"
		}))
	}, c.toolTipIcon = function () {
		p(".catalog-sidebar").find("[data-rel=tooltip]").tooltip({
			classes: {
				"ui-tooltip": "martfury-tooltip"
			},
			tooltipClass: "martfury-tooltip",
			position: {
				my: "center bottom",
				at: "center top-13"
			},
			create: function () {
				p(".ui-helper-hidden-accessible").remove()
			}
		}), p(".mf-product-thumbnail, .mf-single-product:not(.mf-product-layout-3)").find("[data-rel=tooltip]").tooltip({
			classes: {
				"ui-tooltip": "martfury-tooltip"
			},
			tooltipClass: "martfury-tooltip",
			position: {
				my: "center bottom",
				at: "center top-13"
			},
			create: function () {
				p(".ui-helper-hidden-accessible").remove()
			}
		}), p(".mf-product-thumbnail, .mf-single-product:not(.mf-product-layout-3)").find(".compare").tooltip({
			content: function () {
				return p(this).html()
			},
			classes: {
				"ui-tooltip": "martfury-tooltip"
			},
			tooltipClass: "martfury-tooltip",
			position: {
				my: "center bottom",
				at: "center top-13"
			},
			create: function () {
				p(".ui-helper-hidden-accessible").remove()
			}
		}), p(document.body).on("added_to_cart", function () {
			p(".mf-product-thumbnail").find(".added_to_cart").tooltip({
				offsetTop: -15,
				content: function () {
					return p(this).html()
				},
				classes: {
					"ui-tooltip": "martfury-tooltip"
				},
				tooltipClass: "martfury-tooltip",
				position: {
					my: "center bottom",
					at: "center top-13"
				},
				create: function () {
					p(".ui-helper-hidden-accessible").remove()
				}
			})
		})
	}, c.variationImagesCarousel = function () {
		p(".woocommerce ul.products li.product").find(".mf-attr-swatches-slick").not(".slick-initialized").slick({
			rtl: "true" === martfuryData.direction,
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: !1,
			prevArrow: '<span class="icon-chevron-left slick-prev-arrow"></span>',
			nextArrow: '<span class="icon-chevron-right  slick-next-arrow"></span>'
		})
	}, c.addWishlist = function () {
		p("ul.products li.product .yith-wcwl-add-button").on("click", "a", function () {
			p(this).addClass("loading")
		}), c.$body.on("added_to_wishlist", function () {
			p("ul.products li.product .yith-wcwl-add-button a").removeClass("loading")
		}), c.$body.on("added_to_wishlist removed_from_wishlist", function () {
			p.ajax({
				url: martfuryData.ajax_url,
				dataType: "json",
				method: "post",
				data: {
					action: "update_wishlist_count"
				},
				success: function (t) {
					c.$header.find(".menu-item-wishlist .mini-item-counter").html(t)
				}
			})
		})
	}, c.addCompare = function () {
		c.$body.on("click", "a.compare:not(.added)", function (t) {
			t.preventDefault();
			var e = p(this);
			e.addClass("loading"), e.closest(".product-inner").find(".compare:not(.loading)").trigger("click");
			var o = !1;
			if (p(this).hasClass("added") && (o = !0), !1 === o) {
				var i = c.$header.find("#mini-compare-counter").html();
				i = parseInt(i, 10) + 1, setTimeout(function () {
					c.$header.find("#mini-compare-counter").html(i)
				}, 2e3)
			}
		}), p(document).find(".compare-list").on("click", ".remove a", function (t) {
			t.preventDefault();
			var e = p("#mini-compare-counter", window.parent.document).html();
			(e = parseInt(e, 10) - 1) < 0 && (e = 0), p("#mini-compare-counter", window.parent.document).html(e)
		}), p(".yith-woocompare-widget").on("click", "li a.remove", function (t) {
			t.preventDefault();
			var e = $header.find("#mini-compare-counter").html();
			(e = parseInt(e, 10) - 1) < 0 && (e = 0), setTimeout(function () {
				$header.find("#mini-compare-counter").html(e)
			}, 2e3)
		}), p(".yith-woocompare-widget").on("click", "a.clear-all", function (t) {
			t.preventDefault(), setTimeout(function () {
				$header.find("#mini-compare-counter").html("0")
			}, 2e3)
		})
	}, c.productQuantity = function () {
		c.$body.on("click", ".quantity .increase, .quantity .decrease", function (t) {
			t.preventDefault();
			var e = p(this),
				o = e.siblings(".qty"),
				i = parseInt(o.val(), 10),
				a = parseInt(o.attr("min"), 10),
				r = parseInt(o.attr("max"), 10);
			a = a || 1, r = r || i + 1, e.hasClass("decrease") && a < i && (o.val(i - 1), o.trigger("change")), e.hasClass("increase") && i < r && (o.val(i + 1), o.trigger("change"))
		})
	}, c.productThumbnail = function () {
		var a = p(".woocommerce-product-gallery"),
			e = a.find(".woocommerce-product-gallery__image.mf-product-video"),
			o = a.find(".flex-control-thumbs");
		if (a.imagesLoaded(function () {
				setTimeout(function () {
					if (!(o.length < 1)) {
						var t = a.data("columns");
						t < o.find("li").length ? p(".mf-single-product").hasClass("mf-product-sidebar") ? o.not(".slick-initialized").slick({
							slidesToShow: t,
							focusOnSelect: !0,
							slidesToScroll: 1,
							infinite: !1,
							prevArrow: '<span class="icon-chevron-left slick-prev-arrow"></span>',
							nextArrow: '<span class="icon-chevron-right slick-next-arrow"></span>'
						}) : (o.not(".slick-initialized").slick({
							slidesToShow: t,
							slidesToScroll: 1,
							focusOnSelect: !0,
							vertical: !0,
							infinite: !1,
							prevArrow: '<span class="icon-chevron-up slick-prev-arrow"></span>',
							nextArrow: '<span class="icon-chevron-down slick-next-arrow"></span>',
							responsive: [{
								breakpoint: 768,
								settings: {
									slidesToShow: 4
								}
							}, {
								breakpoint: 480,
								settings: {
									slidesToShow: 3
								}
							}]
						}), o.find("li.slick-current").trigger("click")) : o.addClass("no-slick"), 0 < e.length && (p(".woocommerce-product-gallery").addClass("has-video"), p(".woocommerce-product-gallery").hasClass("video-first") ? o.find("li").first().append('<i class="i-video fa fa-play"></i>') : o.find("li").last().append('<i class="i-video fa fa-play"></i>'))
					}
				}, 100)
			}), c.$window.on("load", function () {
				p(".woocommerce-product-gallery").find(".woocommerce-product-gallery__image").each(function () {
					if (p(this).find("img").hasClass("lazy")) {
						var t = p(this).find("img").data("original");
						p(this).find("img").attr("src", t)
					}
				})
			}), !(e.length < 1)) {
			var r = !1,
				n = !1;
			o.on("click", "li", function () {
				var t = a.find(".mf-product-video"),
					e = p(this).siblings().length;
				if (n = !0, p(this).index() == e && (r = n = !1), !r && n) {
					var o = t.find("iframe"),
						i = t.find("video.wp-video-shortcode");
					0 < o.length && o.attr("src", o.attr("src")), 0 < i.length && i[0].pause(), r = !0
				}
				return !1
			}), o.find("li").on("click", ".i-video", function (t) {
				t.preventDefault(), p(this).closest("li").find("img").trigger("click")
			})
		}
	}, c.productGallery = function () {
		var t = p(".woocommerce-product-gallery");
		"1" == martfuryData.product_gallery ? t.length && (t.find(".woocommerce-product-gallery__image").hover(function () {
			p(this).closest(".woocommerce-product-gallery").find(".ms-image-view").removeClass("hide"), p(this).closest(".woocommerce-product-gallery").find(".ms-image-zoom").addClass("hide")
		}, function () {
			p(this).closest(".woocommerce-product-gallery").find(".ms-image-view").addClass("hide"), p(this).closest(".woocommerce-product-gallery").find(".ms-image-zoom").removeClass("hide")
		}), t.on("click", ".woocommerce-product-gallery__image", function (t) {
			if (t.preventDefault(), p(this).hasClass("mf-product-video")) return !1;
			var e = [],
				o = p(this).closest(".woocommerce-product-gallery").find(".woocommerce-product-gallery__image");
			o.each(function () {
				var t = p(this);
				t.hasClass("mf-product-video") ? e.push({
					html: t.children("a").attr("href")
				}) : e.push({
					src: t.children("a").attr("href"),
					w: t.find("img").attr("data-large_image_width"),
					h: t.find("img").attr("data-large_image_height")
				})
			});
			var i = {
					index: o.index(p(this)),
					bgOpacity: .85,
					showHideOpacity: !0,
					mainClass: "pswp--minimal-dark",
					barsSize: {
						top: 0,
						bottom: 0
					},
					captionEl: !1,
					fullscreenEl: !1,
					shareEl: !1,
					tapToClose: !0,
					tapToToggleControls: !1
				},
				a = new PhotoSwipe(document.getElementById("pswp"), window.PhotoSwipeUI_Default, e, i);
			a.init(), a.listen("close", function () {
				p(".mf-video-wrapper").find("iframe").each(function () {
					p(this).attr("src", p(this).attr("src"))
				}), p(".mf-video-wrapper").find("video").each(function () {
					p(this)[0].pause()
				})
			})
		})) : t.on("click", ".woocommerce-product-gallery__image", function (t) {
			t.preventDefault()
		})
	}, c.productDegree = function () {
		var t = p(".woocommerce-product-gallery .product-degree-images");
		if (!(t.length < 1 || martfuryData.product_degree.length < 1)) {
			var a = "",
				r = p("#product-degree-pswp");
			t.on("click", function (t) {
				if (t.preventDefault(), c.openModal(r), !r.hasClass("init")) {
					r.addClass("init");
					for (var e = martfuryData.product_degree.split(","), o = [], i = 0; i < e.length; i++) o.push(e[i]);
					a = r.find(".mf-product-gallery-degree").ThreeSixty({
						totalFrames: o.length,
						endFrame: o.length,
						currentFrame: 1,
						imgList: r.find(".product-degree-images"),
						progress: ".mf-gallery-degree-spinner",
						imgArray: o,
						height: 500,
						width: 830,
						navigation: !1
					}), r.find(".product-degree-images").imagesLoaded(function () {
						r.find(".nav_bar").removeClass("hide")
					}), r.find(".nav_bar_previous").on("click", function () {
						a.previous()
					}), r.find(".nav_bar_next").on("click", function () {
						a.next()
					}), r.find(".nav_bar_play").on("click", function () {
						p(this).hasClass("play") ? (a.stop(), p(this).removeClass("play")) : (a.play(), p(this).addClass("play"))
					}), r.on("click", ".degree-pswp-close, .degree-pswp-bg", function () {
						a.stop(), p(this).removeClass("play")
					})
				}
			}), r.on("click", ".degree-pswp-close, .degree-pswp-bg", function () {
				c.closeModal(r)
			})
		}
	}, c.openModal = function (t) {
		t.fadeIn(), t.addClass("open")
	}, c.closeModal = function (t) {
		t.fadeOut(function () {
			p(this).removeClass("open")
		})
	}, c.hoverProductTabs = function () {
		var t, e, o, i, a, r = p(".mf-single-product .woocommerce-tabs").find("ul.wc-tabs");
		if (!(r.length < 1)) {
			r.append('<li id="tl-wc-tab" class="tl-wc-tab"></li>');
			var n = p("#tl-wc-tab");
			a = r.children("li.active").outerWidth(), n.width(a).css("left", r.children("li.active").position().left).data("origLeft", n.position().left).data("origWidth", n.width()), i = n.data("origWidth"), r.children("li").hover(function () {
				t = p(this), o = t.outerWidth(), e = t.position().left, n.stop().animate({
					left: e,
					width: o
				})
			}, function () {
				n.stop().animate({
					left: n.data("origLeft"),
					width: i
				})
			}), r.on("click", "li", function () {
				t = p(this), i = o = t.outerWidth(), e = t.position().left, n.stop().animate({
					left: e,
					width: o
				}), n.data("origLeft", e).data("origWidth", o)
			})
		}
	}, c.searchLayeredNav = function () {
		var t = p(".mf-widget-layered-nav");
		t.length < 1 || (t.find(".mf-widget-layered-nav-scroll").each(function () {
			var t = p(this).data("height");
			p(this).height() > parseInt(t) && p(this).slimScroll({
				height: t,
				railVisible: !0,
				alwaysVisible: !0,
				size: "6px",
				color: "#666",
				railColor: "#ccc",
				railOpacity: 1
			})
		}), t.on("keyup", ".mf-input-search-nav", function (t) {
			var e = !1;
			if (void 0 === t.which ? e = !0 : "number" == typeof t.which && 0 < t.which && (e = !t.ctrlKey && !t.metaKey && !t.altKey), e) {
				var o = p(this).val().toUpperCase(),
					i = p(this).closest(".mf-widget-layered-nav"),
					a = i.find(".woocommerce-widget-layered-nav-list");
				a.children(".wc-layered-nav-term").each(function () {
					-1 < p(this).find("a").data("title").toUpperCase().indexOf(o) ? p(this).show() : p(this).hide()
				});
				var r = a.data("height");
				a.height() < parseInt(r) ? i.addClass("no-scroll") : i.removeClass("no-scroll")
			}
		}))
	}, c.instanceSearch = function () {
		if ("1" == martfuryData.ajax_search) {
			var n = null,
				s = {},
				o = c.$header.find(".products-search");
			o.on("keyup", ".search-field", function (t) {
				var e = !1;
				if (void 0 === t.which ? e = !0 : "number" == typeof t.which && 0 < t.which && (e = !t.ctrlKey && !t.metaKey && !t.altKey), e) {
					n && n.abort();
					var o = p(this).closest(".products-search");
					o.find("input.search-field").val().length < 2 && o.removeClass("searching searched actived found-products found-no-product invalid-length"), i(o)
				}
			}).on("change", "#product_cat", function () {
				n && n.abort(), i(p(this).closest(".products-search"))
			}).on("focusout", ".search-field", function () {
				var t = p(this).closest(".products-search");
				t.find("input.search-field").val().length < 2 && t.removeClass("searching searched actived found-products found-no-product invalid-length")
			}), p(document).on("click", function (t) {
				if (o.hasClass("actived")) {
					var e = t.target;
					p(e).closest(".products-search").length < 1 && o.removeClass("searching searched actived found-products found-no-product invalid-length")
				}
			})
		}

		function i(o) {
			var t = o.find("input.search-field").val(),
				e = 0,
				i = o.find(".search-results");
			if (0 < o.find("#product_cat").length && (e = o.find("#product_cat").val()), t.length < 2) o.removeClass("searching found-products found-no-product").addClass("invalid-length");
			else {
				o.removeClass("found-products found-no-product").addClass("searching");
				var a = t + e;
				if (a in s) {
					var r = s[a];
					o.removeClass("searching"), o.addClass("found-products"), i.html(r.products), p(document.body).trigger("martfury_ajax_search_request_success", [i]), o.removeClass("invalid-length"), o.addClass("searched actived")
				} else n = p.ajax({
					url: martfuryData.ajax_url,
					dataType: "json",
					method: "post",
					data: {
						action: "martfury_search_products",
						nonce: martfuryData.nonce,
						term: t,
						cat: e,
						search_type: martfuryData.search_content_type
					},
					success: function (t) {
						var e = t.data;
						o.removeClass("searching"), o.addClass("found-products"), i.html(e), o.removeClass("invalid-length"), p(document.body).trigger("martfury_ajax_search_request_success", [i]), s[a] = {
							found: !0,
							products: e
						}, o.addClass("searched actived")
					}
				})
			}
		}
	}, c.singleEntryFormat = function () {
		if (c.$body.hasClass("single-post")) {
			p(".single-post-header.layout-2").find(".featured-image").parallax("50%", .6);
			var t = p("#mf-single-entry-format");
			t.find(".slides").not(".slick-initialized").slick({
				rtl: "true" === martfuryData.direction,
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: !1,
				prevArrow: '<span class="ion-ios-arrow-left slick-prev-arrow"></span>',
				nextArrow: '<span class="ion-ios-arrow-right slick-next-arrow"></span>'
			}), t.fitVids({
				customSelector: "iframe, video"
			})
		}
	}, c.blogLayout = function () {
		c.$body.hasClass("blog-layout-masonry") && c.$body.imagesLoaded(function () {
			c.$body.find(".mf-post-list").isotope({
				itemSelector: ".blog-wapper",
				layoutMode: "masonry"
			})
		})
	}, c.relatedPost = function () {
		if (c.$body.hasClass("single-post")) {
			var t = p("#mf-related-posts").find(".related-posts-list");
			t.not(".slick-initialized").slick({
				rtl: "true" === martfuryData.direction,
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: !0,
				infinite: !1,
				arrows: !1,
				responsive: [{
					breakpoint: 768,
					settings: {
						slidesToShow: 2
					}
				}, {
					breakpoint: 480,
					settings: {
						slidesToShow: 1
					}
				}]
			}), t.on("afterChange", function () {
				c.lazyLoad()
			})
		}
	}, c.blogLoadingAjax = function () {
		c.$window.on("scroll", function () {
			c.$body.find("#mf-infinite-loading").is(":in-viewport") && c.$body.find("#mf-infinite-loading").trigger("click")
		}).trigger("scroll"), c.$body.on("click", "#mf-infinite-loading", function (t) {
			if (t.preventDefault(), !p(this).data("requestRunning")) {
				p(this).data("requestRunning", !0);
				var i = c.$body.find(".mf-post-list"),
					a = p(this).parents(".navigation");
				p.get(p(this).closest(".page-numbers").attr("href"), function (t) {
					var e = p(t).find(".mf-post-list").children(".blog-wapper"),
						o = p(t).find(".navigation").html();
					a.html(o), i.append(e), a.find("a").data("requestRunning", !1), c.lazyLoad(), c.postEntryFormat()
				})
			}
		})
	}, c.pageHeaderParallax = function () {
		if (p(".page-header").hasClass("page-header-sliders")) {
			var t = p(".page-header-sliders"),
				e = t.data("speed"),
				o = t.data("auto");
			t.find("ul").not(".slick-initialized").slick({
				rtl: "true" === martfuryData.direction,
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: !0,
				autoplaySpeed: e,
				autoplay: o,
				arrows: !1
			}), t.on("click", ".slick-prev-arrow", function () {
				t.find("ul").slick("slickPrev")
			}), t.on("click", ".slick-next-arrow", function () {
				t.find("ul").slick("slickNext")
			})
		}
	}, c.lazyLoad = function () {
		c.$body.find("img.lazy").lazyload({
			load: function () {
				p(this).removeClass("lazy")
			}
		}), c.$window.on("load", function () {
			p(".mf-products-list-carousel").find("img.lazy").lazyload({
				load: function () {
					p(this).removeClass("lazy")
				}
			}).trigger("appear")
		})
	}, c.recentlyViewedProducts = function () {
		function a() {
			var e = p("#footer-recently-viewed");
			e.length <= 0 || e.hasClass("load-ajax") && (e.hasClass("loaded") || p.ajax({
				url: martfuryData.ajax_url,
				dataType: "json",
				method: "post",
				data: {
					action: "martfury_footer_recently_viewed",
					nonce: martfuryData.nonce
				},
				error: function () {
					e.addClass("no-products")
				},
				success: function (t) {
					e.html(t.data), e.find(".product-list").hasClass("no-products") && e.addClass("no-products"), c.lazyLoad(), o(e), e.addClass("loaded")
				}
			}))
		}

		function o(t) {
			if (!t.find(".product-list").hasClass("no-products")) {
				var e = parseInt(t.data("columns"));
				t.find(".product-list").not(".slick-initialized").slick({
					rtl: "true" === martfuryData.direction,
					slidesToShow: e,
					slidesToScroll: e,
					arrows: !0,
					infinite: !1,
					prevArrow: '<span class="ion-ios-arrow-left slick-prev-arrow"></span>',
					nextArrow: '<span class="ion-ios-arrow-right slick-next-arrow"></span>',
					responsive: [{
						breakpoint: 1500,
						settings: {
							slidesToShow: 8 < parseInt(e) ? 8 : e,
							slidesToScroll: 8 < parseInt(e) ? 8 : e
						}
					}, {
						breakpoint: 1200,
						settings: {
							slidesToShow: 6,
							slidesToScroll: 6
						}
					}, {
						breakpoint: 800,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 4
						}
					}, {
						breakpoint: 600,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					}]
				})
			}
		}
		a(),
			function () {
				var t = p("#footer-history-products"),
					e = !0,
					o = p("#footer-recently-viewed"),
					i = p("#mf-off-canvas-layer");
				if (t.length <= 0) return;
				t.on("click", ".recently-title", function (t) {
					t.preventDefault(), o.addClass("load-ajax"), i.toggleClass("opened"), o.slideToggle(400, function () {
						e && (a(), e = !1)
					}), p(this).toggleClass("active")
				}), i.on("click", function () {
					i.removeClass("opened"), t.find(".recently-title").removeClass("active"), o.slideUp(400)
				})
			}(),
			function () {
				var e = p("#header-recently-viewed");
				if (e.length <= 0) return;
				c.$window.on("load", function () {
					p.ajax({
						url: martfuryData.ajax_url,
						dataType: "json",
						method: "post",
						data: {
							action: "martfury_header_recently_viewed",
							nonce: martfuryData.nonce
						},
						success: function (t) {
							e.html(t.data), e.find(".product-list").hasClass("no-products") && e.addClass("no-products"), c.lazyLoad(), o(e)
						}
					})
				})
			}()
	}, c.catalogBanners = function () {
		var t = p("#mf-catalog-banners");
		if (!(t.length <= 0)) {
			t.data("columns");
			var e = t.data("autoplay"),
				o = !1,
				i = 1e3;
			e = 0 < e && (i = e, o = !0), t.not(".slick-initialized").slick({
				rtl: "true" === martfuryData.direction,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplaySpeed: i,
				autoplay: e,
				infinite: o,
				prevArrow: '<span class="icon-chevron-left slick-prev-arrow"></span>',
				nextArrow: '<span class="icon-chevron-right slick-next-arrow"></span>'
			}), t.on("afterChange", function () {
				c.lazyLoad()
			})
		}
	}, c.productsTopCarousel = function () {
		var t = p(".mf-products-top-carousel");
		t.length <= 0 || t.each(function () {
			var t = p(this).data("columns"),
				e = p(this).data("autoplay"),
				o = !1,
				i = 1e3;
			e = 0 < e && (i = e, o = !0), p(this).find("ul.products").not(".slick-initialized").slick({
				rtl: "true" === martfuryData.direction,
				slidesToShow: t,
				slidesToScroll: t,
				autoplaySpeed: i,
				autoplay: e,
				infinite: o,
				dots: !0,
				prevArrow: p(this).find(".slick-prev-arrow"),
				nextArrow: p(this).find(".slick-next-arrow"),
				responsive: [{
					breakpoint: 992,
					settings: {
						slidesToShow: 3 < parseInt(t) ? 3 : t,
						slidesToScroll: 3 < parseInt(t) ? 3 : t
					}
				}, {
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				}]
			}), p(this).on("afterChange", function () {
				c.lazyLoad()
			})
		})
	}, c.productCategoriesWidget = function () {
		var t = p(".mf_widget_product_categories, .wcv.widget_product_categories");
		t.length <= 0 || (t.find("ul.children").closest("li").prepend('<span class="cat-menu-close"><i class="icon-chevron-down"></i> </span>'), t.find("li.current-cat-parent, li.current-cat, li.current-cat-ancestor").addClass("opened").children(".children").show(), t.on("click", ".cat-menu-close", function (t) {
			t.preventDefault(), p(this).closest("li").children(".children").slideToggle(), p(this).closest("li").toggleClass("opened")
		}))
	}, c.productTopCategories = function () {
		var t = p(".mf-catalog-top-categories");
		t.length <= 0 || t.on("click", ".cat-menu-close", function (t) {
			t.preventDefault(), p(this).closest("li").children(".sub-categories").slideToggle(), p(this).closest("li").toggleClass("opened")
		})
	}, c.productAttribute = function () {
		var a = "",
			r = "";
		c.$body.on("mouseover", ".mf-swatch-image", function (t) {
			t.preventDefault();
			var e = p(this).closest("li.product").find(".mf-product-thumbnail").find("img");
			a = e.attr("src"), r = e.attr("srcset");
			var o = p(this).find("img").attr("src"),
				i = p(this).find("img").attr("srcset");
			e.attr("src", o), i && e.attr("srcset", i)
		}).on("mouseout", ".mf-swatch-image", function (t) {
			t.preventDefault();
			var e = p(this).closest("li.product").find(".mf-product-thumbnail").find("img");
			a && e.attr("src", a), r && e.attr("srcset", r)
		}), c.$body.on("mouseover", ".mf-attr-swatches", function (t) {
			t.preventDefault(), p(this).closest("li.product").find(".mf-product-thumbnail").addClass("hover-swatch")
		}).on("mouseout", ".mf-attr-swatches", function (t) {
			t.preventDefault(), p(this).closest("li.product").find(".mf-product-thumbnail").removeClass("hover-swatch")
		})
	}, c.shopView = function () {
		c.$body.on("click", ".mf-shop-view", function (t) {
			t.preventDefault();
			var e = p(this),
				o = e.data("view");
			e.hasClass("current") || (c.$body.find(".mf-shop-view").removeClass("current"), e.addClass("current"), c.$body.removeClass("shop-view-grid shop-view-list").addClass("shop-view-" + o), document.cookie = "shop_view=" + o + ";domain=" + window.location.host + ";path=/", p(document.body).trigger("martfury_shop_view_after_change"))
		}), p(document.body).on("martfury_shop_view_after_change", function () {
			c.lazyLoad()
		})
	}, c.singleProductCarousel = function () {
		var t = c.$body.find(".up-sells ul.products"),
			e = c.$body.find(".related.products ul.products");
		if (!(t.length <= 0 && e.length <= 0)) {
			var o = t.closest(".up-sells").data("columns");
			t.not(".slick-initialized").slick({
				rtl: "true" === martfuryData.direction,
				slidesToShow: parseInt(o),
				slidesToScroll: parseInt(o),
				arrows: !0,
				dots: !0,
				infinite: !1,
				prevArrow: '<span class="icon-chevron-left slick-prev-arrow"></span>',
				nextArrow: '<span class="icon-chevron-right slick-next-arrow"></span>',
				responsive: [{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4 < parseInt(o) ? 4 : parseInt(o),
						slidesToScroll: 4 < parseInt(o) ? 4 : parseInt(o)
					}
				}, {
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3
					}
				}, {
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				}]
			}), t.on("afterChange", function () {
				c.lazyLoad()
			});
			var i = e.closest(".related").data("columns");
			e.not(".slick-initialized").slick({
				rtl: "true" === martfuryData.direction,
				slidesToShow: parseInt(i),
				slidesToScroll: parseInt(i),
				arrows: !0,
				dots: !0,
				infinite: !1,
				prevArrow: '<span class="icon-chevron-left slick-prev-arrow"></span>',
				nextArrow: '<span class="icon-chevron-right slick-next-arrow"></span>',
				responsive: [{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4 < parseInt(i) ? 4 : parseInt(i),
						slidesToScroll: 4 < parseInt(i) ? 4 : parseInt(i)
					}
				}, {
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3
					}
				}, {
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				}]
			}), e.on("afterChange", function () {
				c.lazyLoad()
			})
		}
	}, c.fbtProduct = function () {
		var a = p("#mf-product-fbt");
		if (!(a.length <= 0)) {
			var r = a.find(".mf-total-price .woocommerce-Price-amount"),
				n = a.find(".mf_add_to_cart_button"),
				s = parseFloat(a.find("#mf-data_price").data("price")),
				c = martfuryData.currency_symbol,
				l = martfuryData.thousand_sep,
				d = martfuryData.decimal_sep,
				u = martfuryData.price_decimals,
				f = martfuryData.currency_pos;
			a.find(".products-list").on("click", "a", function (t) {
				t.preventDefault();
				var e = p(this).data("id");
				p(this).closest("li").toggleClass("uncheck");
				var o = parseFloat(p(this).closest("li").find(".s-price").data("price"));
				p(this).closest("li").hasClass("uncheck") ? (a.find("#fbt-product-" + e).addClass("un-active"), s -= o) : (a.find("#fbt-product-" + e).removeClass("un-active"), s += o);
				var i = "0";
				a.find(".products-list li").each(function () {
					p(this).hasClass("uncheck") || (i += "," + p(this).find("a").data("id"))
				}), n.attr("value", i), r.html(function (t) {
					var e = t;
					if (0 < parseInt(u)) {
						for (var o = (t = t.toFixed(u) + "").split("."), i = o[0], a = 1 < o.length ? d + o[1] : "", r = /(\d+)(\d{3})/; r.test(i);) i = i.replace(r, "$1" + l + "$2");
						e = i + a
					}
					switch (f) {
						case "left":
							return c + e;
						case "right":
							return e + c;
						case "left_space":
							return c + " " + e;
						case "right_space":
							return e + " " + c
					}
				}(s))
			})
		}
	}, c.fbtAddToCartAjax = function () {
		var t = p("#mf-product-fbt");
		t.length <= 0 || t.on("click", ".mf_add_to_cart_button.ajax_add_to_cart", function (t) {
			t.preventDefault();
			var o = p(this);
			o.addClass("loading");
			var e = window.location.href,
				i = "",
				a = 0;
			p("#mf-product-fbt").find(".products-list li").each(function () {
				p(this).hasClass("uncheck") || (0 < a && (i += ","), i += " " + p(this).find("a").data("title"), a++)
			}), p.ajax({
				url: martfuryData.ajax_url,
				dataType: "json",
				method: "post",
				data: {
					action: "martfury_fbt_add_to_cart",
					nonce: martfuryData.nonce,
					product_ids: o.attr("value")
				},
				error: function () {
					window.location = e
				},
				success: function (t) {
					if ("undefined" == typeof wc_add_to_cart_params || "yes" !== wc_add_to_cart_params.cart_redirect_after_add) {
						p(document.body).trigger("updated_wc_div"), p(document.body).on("wc_fragments_refreshed", function () {
							o.removeClass("loading")
						});
						var e = i + " " + martfuryData.l10n.notice_texts;
						c.addedToCartNotice("", e, !1, "success")
					} else window.location = wc_add_to_cart_params.cart_url
				}
			})
		})
	}, c.fbtAddToWishlistAjax = function () {
		var o = p("#mf-product-fbt"),
			i = 0;
		if (!(o.length <= 0)) {
			var a = r();
			0 == a.length && (o.find(".btn-view-to-wishlist").addClass("showed"), o.find(".btn-add-to-wishlist").addClass("hided")), o.on("click", ".btn-add-to-wishlist", function (t) {
				t.preventDefault();
				var e = p(this);
				0 != (a = r()).length && (e.addClass("loading"), n(a[i]), c.$body.on("added_to_wishlist", function () {
					a.length > i ? n(a[i]) : a.length == i && (o.find(".btn-view-to-wishlist").addClass("showed"), o.find(".btn-add-to-wishlist").addClass("hided"), e.removeClass("loading"))
				}))
			})
		}

		function r() {
			var t = [];
			return o.find("li.product").each(function () {
				p(this).hasClass("un-active") || p(this).hasClass("product-buttons") || p(this).find(".yith-wcwl-add-button").hasClass("hide") || -1 == t.indexOf(p(this).data("id")) && t.push(p(this).data("id"))
			}), t
		}

		function n(t) {
			return o.find(".add-to-wishlist-" + t).find(".yith-wcwl-add-button.show .add_to_wishlist").trigger("click"), ++i
		}
	}, c.instagramCarousel = function () {
		var t = c.$body.find(".mf-product-instagram ul.products"),
			e = t.data("columns"),
			o = t.data("auto"),
			i = !1,
			a = 1e3;
		t.length < 1 || (o = 0 < o && (a = o, i = !0), t.not(".slick-initialized").slick({
			rtl: "true" === martfuryData.direction,
			slidesToShow: e,
			slidesToScroll: e,
			autoplaySpeed: a,
			autoplay: o,
			infinite: i,
			dots: !0,
			prevArrow: '<span class="icon-chevron-left slick-prev-arrow"></span>',
			nextArrow: '<span class="icon-chevron-right slick-next-arrow"></span>',
			responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4 < parseInt(e) ? 4 : parseInt(e),
					slidesToScroll: 4 < parseInt(e) ? 4 : parseInt(e)
				}
			}, {
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			}, {
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}]
		}), t.on("afterChange", function () {
			c.lazyLoad()
		}))
	}, c.productQuickView = function () {
		var i = p("#mf-quick-view-modal"),
			a = i.find(".product-modal-content");
		c.$body.on("click", ".mf-product-quick-view", function (t) {
			t.preventDefault();
			var e = p(this).data("id");
			a.hide().html(""), i.addClass("loading").removeClass("loaded"), c.openModal(i), p.ajax({
				url: martfuryData.ajax_url,
				dataType: "json",
				method: "post",
				data: {
					action: "martfury_product_quick_view",
					nonce: martfuryData.nonce,
					product_id: e
				},
				success: function (t) {
					a.show().append(t.data), i.removeClass("loading").addClass("loaded");
					var e = a.find(".woocommerce-product-gallery"),
						o = p(".variations_form");
					e.removeAttr("style"), e.find("img.lazy").lazyload().trigger("appear"), e.imagesLoaded(function () {
						e.find(".woocommerce-product-gallery__wrapper").not(".slick-initialized").slick({
							slidesToShow: 1,
							slidesToScroll: 1,
							infinite: !1,
							prevArrow: '<span class="icon-chevron-left slick-prev-arrow"></span>',
							nextArrow: '<span class="icon-chevron-right slick-next-arrow"></span>'
						})
					}), e.find(".woocommerce-product-gallery__image").on("click", function (t) {
						t.preventDefault()
					}), "undefined" != typeof wc_add_to_cart_variation_params && o.each(function () {
						p(this).wc_variation_form()
					}), void 0 !== p.fn.tawcvs_variation_swatches_form && o.tawcvs_variation_swatches_form(), c.productVatiation(), "undefined" != typeof tawcvs && "yes" === tawcvs.tooltip && o.find(".swatch").tooltip({
						classes: {
							"ui-tooltip": "martfury-tooltip"
						},
						tooltipClass: "martfury-tooltip qv-tool-tip",
						position: {
							my: "center bottom",
							at: "center top-13"
						},
						create: function () {
							p(".ui-helper-hidden-accessible").remove()
						}
					}), a.find(".compare").tooltip({
						content: function () {
							return p(this).html()
						},
						classes: {
							"ui-tooltip": "martfury-tooltip"
						},
						tooltipClass: "martfury-tooltip qv-tooltip",
						position: {
							my: "center bottom",
							at: "center top-13"
						},
						create: function () {
							p(".ui-helper-hidden-accessible").remove()
						}
					}), a.find("[data-rel=tooltip]").tooltip({
						classes: {
							"ui-tooltip": "martfury-tooltip"
						},
						tooltipClass: "martfury-tooltip qv-tooltip",
						position: {
							my: "center bottom",
							at: "center top-13"
						},
						create: function () {
							p(".ui-helper-hidden-accessible").remove()
						}
					})
				}
			})
		}), i.on("click", ".close-modal, .mf-modal-overlay", function (t) {
			t.preventDefault(), c.closeModal(i)
		})
	}, c.productVatiation = function () {
		c.$body.on("tawcvs_initialized", function () {
			p(".variations_form").unbind("tawcvs_no_matching_variations"), p(".variations_form").on("tawcvs_no_matching_variations", function (t, e) {
				t.preventDefault(), p(".variations_form").find(".woocommerce-variation.single_variation").show(), "undefined" != typeof wc_add_to_cart_variation_params && p(".variations_form").find(".single_variation").slideDown(200).html("<p>" + wc_add_to_cart_variation_params.i18n_no_matching_variations_text + "</p>")
			})
		}), p(".variations_form td.value").on("change", "select", function () {
			var t = p(this).find("option:selected").text();
			p(this).closest("tr").find("td.label .mf-attr-value").html(t)
		})
	}, c.addToCartAjax = function () {
		if ("0" != martfuryData.add_to_cart_ajax) {
			var r = !1;
			c.$body.on("click", ".single_add_to_cart_button", function (t) {
				var i = p(this),
					e = i.closest("form.cart");
				if (0 < e.length && (t.preventDefault(), !i.hasClass("disabled") && (i.addClass("loading"), !r))) {
					r = !0;
					var o = e.serializeArray(),
						a = window.location.href;
					"" != i.val() && o.push({
						name: i.attr("name"),
						value: i.val()
					}), p.ajax({
						url: window.location.href,
						method: "post",
						data: o,
						error: function () {
							window.location = a
						},
						success: function (t) {
							if (t || (window.location = a), "undefined" == typeof wc_add_to_cart_params || "yes" !== wc_add_to_cart_params.cart_redirect_after_add) {
								p(document.body).trigger("updated_wc_div"), p(document.body).on("wc_fragments_refreshed", function () {
									i.removeClass("loading")
								});
								var e = "",
									o = "success";
								0 < p(t).find(".woocommerce-message").length && (e = p(t).find(".woocommerce-message").html()), 0 < p(t).find(".woocommerce-error").length && (e = p(t).find(".woocommerce-error").html(), o = "error"), 0 < p(t).find(".woocommerce-info").length && (e = p(t).find(".woocommerce-info").html()), e && c.addedToCartNotice(e, " ", !0, o), r = !1
							} else window.location = wc_add_to_cart_params.cart_url
						}
					})
				}
			})
		}
	}, c.addedToCartNotice = function (t, e, o, i) {
		"1" == martfuryData.added_to_cart_notice && p.fn.notify && (t += '<a href="' + martfuryData.l10n.cart_link + '" class="btn-button">' + martfuryData.l10n.cart_text + "</a>", o && (t = '<div class="message-box">' + t + "</div>"), p.notify.addStyle("martfury", {
			html: '<div><i class="icon-checkmark-circle message-icon"></i><span data-notify-text/>' + t + '<span class="close icon-cross2"></span> </div>'
		}), p.notify(e, {
			autoHideDelay: martfuryData.l10n.cart_notice_auto_hide,
			className: i,
			style: "martfury",
			showAnimation: "fadeIn",
			hideAnimation: "fadeOut"
		}))
	}, c.filterAjax = function () {
		c.$body.hasClass("catalog-ajax-filter") && (p("#page").addClass("fade-in"), p(document.body).on("price_slider_change", function (t, e) {
			var o = p(".price_slider").closest("form").get(0),
				i = p(o),
				a = i.attr("action") + "?" + i.serialize();
			p(document.body).trigger("martfury_catelog_filter_ajax", a, p(this))
		}), c.$body.on("click", ".mf_widget_product_categories a, .mf-widget-layered-nav a, .widget_rating_filter a, .widget_layered_nav_filters a", function (t) {
			t.preventDefault();
			var e = p(this).attr("href");
			p(document.body).trigger("martfury_catelog_filter_ajax", e, p(this))
		}), p(document.body).on("martfury_catelog_filter_ajax", function (t, e, o) {
			var i = p("#content"),
				a = p(".page-header");
			NProgress.start(), p("#page").removeClass("fade-in"), "?" == e.slice(-1) && (e = e.slice(0, -1)), e = e.replace(/%2C/g, ","), history.pushState(null, null, e), p(document.body).trigger("martfury_ajax_filter_before_send_request", [e, o]), c.ajaxXHR && c.ajaxXHR.abort(), c.ajaxXHR = p.get(e, function (t) {
				i.replaceWith(p(t).find("#content")), a.html(p(t).find(".page-header").html()), p(t).find("#primary-sidebar").length < 1 && c.$body.removeClass("mb-filter-active sidebar-content").addClass("full-content"), p(document.body).trigger("martfury_ajax_filter_request_success", [t, e])
			}, "html")
		}), p(document.body).on("martfury_ajax_filter_request_success", function () {
			c.lazyLoad(), c.toolTipIcon(), c.searchLayeredNav(), c.catalogBanners(), c.productsTopCarousel(), c.productCategoriesWidget(), c.productAttribute(), c.variationImagesCarousel(), c.productTopCategories(), c.priceSlider(), NProgress.done(), p("#page").addClass("fade-in")
		}))
	}, c.stickyProductInfo = function () {
		if (c.$body.hasClass("sticky-header-info")) {
			var o = p("#sticky-product-info-wapper"),
				i = p("div.product").find(".woocommerce-tabs"),
				a = o.outerHeight(!0),
				t = p("div.product").find(".mf-product-summary"),
				r = p("div.product").find(".entry-summary").find(".cart"),
				n = 0;
			o.find(".sc-tabs").on("click", "a", function (t) {
				t.preventDefault();
				var e = p(this).data("tab");
				if (p(this).closest(".sc-tabs").find("a").removeClass("active"), p(this).addClass("active"), c.$body.hasClass("single-product-layout-3")) {
					var o = p("#tab-" + e);
					0 < o.length && (n = o.offset().top - a - 60, p("html, body").stop().animate({
						scrollTop: n
					}, 400))
				} else 0 < i.length && (i.find("." + e + "_tab a").click(), n = i.offset().top - a - 60, p("html, body").stop().animate({
					scrollTop: n
				}, 400))
			}), i.find(".wc-tabs").on("click", "a", function (t) {
				t.preventDefault();
				var e = p(this).attr("href");
				(e = e ? e.replace("#", "") : e) && (o.find(".sc-tabs").find("a").removeClass("active"), o.find(".sc-tabs ." + e).addClass("active"))
			}), o.find(".sc-product-cart").on("click", ".button", function (t) {
				if (t.preventDefault(), 0 < r.length) {
					var e = r.offset().top - a - 50;
					p("html, body").stop().animate({
						scrollTop: e
					}, 400)
				}
			});
			c.$body.hasClass("single-product-layout-3") && c.$window.on("scroll", function () {
				o.find(".sc-tabs li a").removeClass("active"), o.find(".sc-tabs li").each(function () {
					var t = p(this).find("a"),
						e = t.attr("href");
					p(e).is(":in-viewport(150)") && t.addClass("active")
				})
			});
			var e = 0;
			c.$window.on("scroll", function () {
				0 < t.length && (e = t.offset().top - 300, c.$window.scrollTop() > e ? o.addClass("viewport") : o.removeClass("viewport"))
			})
		}
	}, c.catalogOpenCartMini = function () {
		p(document.body).on("added_to_cart", function (t, e, o, i) {
			var a = i.attr("data-title") + " " + martfuryData.l10n.notice_text;
			c.addedToCartNotice("", a, !1, "success")
		})
	}, c.filterOnMobile = function () {
		c.$body.hasClass("catalog-filter-mobile") && (c.$body.on("click", "#mf-filter-mobile", function (t) {
			t.preventDefault(), c.$body.toggleClass("mb-filter-active")
		}), c.$window.on("resize", function () {
			991 < c.$window.width() && c.$body.removeClass("mb-filter-active")
		}))
	}, c.priceSlider = function () {
		if ("undefined" == typeof woocommerce_price_slider_params) return !1;
		if (p(".catalog-sidebar").find(".widget_price_filter").length <= 0) return !1;
		p("input#min_price, input#max_price").hide(), p(".price_slider, .price_label").show();
		var t = p(".price_slider_amount #min_price").data("min"),
			e = p(".price_slider_amount #max_price").data("max"),
			o = parseInt(t, 10),
			i = parseInt(e, 10);
		"" != p(".price_slider_amount #min_price").val() && (o = parseInt(p(".price_slider_amount #min_price").val(), 10)), "" != p(".price_slider_amount #max_price").val() && (i = parseInt(p(".price_slider_amount #max_price").val(), 10)), p(document.body).bind("price_slider_create price_slider_slide", function (t, e, o) {
			"left" === woocommerce_price_slider_params.currency_pos ? (p(".price_slider_amount span.from").html(woocommerce_price_slider_params.currency_symbol + e), p(".price_slider_amount span.to").html(woocommerce_price_slider_params.currency_symbol + o)) : "left_space" === woocommerce_price_slider_params.currency_pos ? (p(".price_slider_amount span.from").html(woocommerce_price_slider_params.currency_symbol + " " + e), p(".price_slider_amount span.to").html(woocommerce_price_slider_params.currency_symbol + " " + o)) : "right" === woocommerce_price_slider_params.currency_pos ? (p(".price_slider_amount span.from").html(e + woocommerce_price_slider_params.currency_symbol), p(".price_slider_amount span.to").html(o + woocommerce_price_slider_params.currency_symbol)) : "right_space" === woocommerce_price_slider_params.currency_pos && (p(".price_slider_amount span.from").html(e + " " + woocommerce_price_slider_params.currency_symbol), p(".price_slider_amount span.to").html(o + " " + woocommerce_price_slider_params.currency_symbol)), p(document.body).trigger("price_slider_updated", [e, o])
		}), void 0 !== p.fn.slider && p(".price_slider").slider({
			range: !0,
			animate: !0,
			min: t,
			max: e,
			values: [o, i],
			create: function () {
				p(".price_slider_amount #min_price").val(o), p(".price_slider_amount #max_price").val(i), p(document.body).trigger("price_slider_create", [o, i])
			},
			slide: function (t, e) {
				p("input#min_price").val(e.values[0]), p("input#max_price").val(e.values[1]), p(document.body).trigger("price_slider_slide", [e.values[0], e.values[1]])
			},
			change: function (t, e) {
				p(document.body).trigger("price_slider_change", [e.values[0], e.values[1]])
			}
		})
	}, p(function () {
		c.init()
	})
}(jQuery);
jQuery(document).ready(function ($) {
	$('.deal-expire-countdown').each(function () {
		var $this = $(this),
			diff = $this.data('expire');
		var updateClock = function (distance) {
			var days = Math.floor(distance / (60 * 60 * 24));
			var hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
			var minutes = Math.floor((distance % (60 * 60)) / (60));
			var seconds = Math.floor(distance % 60);
			$this.html('<span class="days timer"><span class="digits">' + (days < 10 ? '0' : '') + days + '</span><span class="text">' + tawcDeals.l10n.days + '</span></span>' + '<span class="divider">:</span>' + '<span class="hours timer"><span class="digits">' + (hours < 10 ? '0' : '') + hours + '</span><span class="text">' + tawcDeals.l10n.hours + '</span></span>' + '<span class="divider">:</span>' + '<span class="minutes timer"><span class="digits">' + (minutes < 10 ? '0' : '') + minutes + '</span><span class="text">' + tawcDeals.l10n.minutes + '</span></span>' + '<span class="divider">:</span>' + '<span class="seconds timer"><span class="digits">' + (seconds < 10 ? '0' : '') + seconds + '</span><span class="text">' + tawcDeals.l10n.seconds + '</span></span>');
		};
		updateClock(diff);
		var countdown = setInterval(function () {
			diff = diff - 1;
			updateClock(diff);
			if (diff < 0) {
				clearInterval(countdown);
			}
		}, 1000);
	});
});;
(function ($) {
	'use strict';
	$.fn.tawcvs_variation_swatches_form = function () {
		return this.each(function () {
			var $form = $(this),
				clicked = null,
				selected = [];
			$form.addClass('swatches-support').on('click', '.swatch', function (e) {
				e.preventDefault();
				var $el = $(this),
					$select = $el.closest('.value').find('select'),
					attribute_name = $select.data('attribute_name') || $select.attr('name'),
					value = $el.data('value');
				$select.trigger('focusin');
				if (!$select.find('option[value="' + value + '"]').length) {
					$el.siblings('.swatch').removeClass('selected');
					$select.val('').change();
					$form.trigger('tawcvs_no_matching_variations', [$el]);
					return;
				}
				clicked = attribute_name;
				if (selected.indexOf(attribute_name) === -1) {
					selected.push(attribute_name);
				}
				if ($el.hasClass('selected')) {
					$select.val('');
					$el.removeClass('selected');
					delete selected[selected.indexOf(attribute_name)];
				} else {
					$el.addClass('selected').siblings('.selected').removeClass('selected');
					$select.val(value);
				}
				$select.change();
			}).on('click', '.reset_variations', function () {
				$(this).closest('.variations_form').find('.swatch.selected').removeClass('selected');
				selected = [];
			}).on('tawcvs_no_matching_variations', function () {
				window.alert(wc_add_to_cart_variation_params.i18n_no_matching_variations_text);
			});
		});
	};
	$(function () {
		var $form = $('.variations_form');
		$form.tawcvs_variation_swatches_form();
		if (tawcvs.tooltip === 'yes' && $.fn.tooltip) {
			$form.find('.swatch').tooltip({
				classes: {
					'ui-tooltip': 'tawcvs-tooltip'
				},
				tooltipClass: 'tawcvs-tooltip',
				position: {
					my: 'center bottom',
					at: 'center top-13'
				},
				create: function () {
					$('.ui-helper-hidden-accessible').remove();
				}
			});
		}
		$(document.body).trigger('tawcvs_initialized');
	});
})(jQuery);
(function ($) {
	'use strict';
	$(function () {
		$('#martfury-switcher-icon').on('click', function () {
			$('body').addClass('open-switcher');
			$('.martfury-switcher-demo').find('img.lazy').each(function () {
				$(this).attr('src', $(this).data('original'));
				$(this).removeClass('lazy');
			});
		});
		$('.martfury-switcher-demo').on('click', '.switcher-close', function () {
			$('body').removeClass('open-switcher');
		});
		$('.martfury-switcher-overlay').on('click', function () {
			$('body').removeClass('open-switcher');
		});
	});
})(jQuery);
! function (a, b) {
	"use strict";

	function c() {
		if (!e) {
			e = !0;
			var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
				h = !!navigator.userAgent.match(/Trident.*rv:11\./),
				i = b.querySelectorAll("iframe.wp-embedded-content");
			for (c = 0; c < i.length; c++) {
				if (d = i[c], !d.getAttribute("data-secret")) f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f);
				if (g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
			}
		}
	}
	var d = !1,
		e = !1;
	if (b.querySelector)
		if (a.addEventListener) d = !0;
	if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
		if (a.wp.receiveEmbedMessage = function (c) {
				var d = c.data;
				if (d.secret || d.message || d.value)
					if (!/[^a-zA-Z0-9]/.test(d.secret)) {
						var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
							k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
						for (e = 0; e < k.length; e++) k[e].style.display = "none";
						for (e = 0; e < j.length; e++)
							if (f = j[e], c.source === f.contentWindow) {
								if (f.removeAttribute("style"), "height" === d.message) {
									if (g = parseInt(d.value, 10), g > 1e3) g = 1e3;
									else if (~~g < 200) g = 200;
									f.height = g
								}
								if ("link" === d.message)
									if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
										if (b.activeElement === f) a.top.location.href = d.value
							} else;
					}
			}, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);
(function () {
	function aa(a, b, c) {
		return a.call.apply(a.bind, arguments)
	}

	function ba(a, b, c) {
		if (!a) throw Error();
		if (2 < arguments.length) {
			var d = Array.prototype.slice.call(arguments, 2);
			return function () {
				var c = Array.prototype.slice.call(arguments);
				Array.prototype.unshift.apply(c, d);
				return a.apply(b, c)
			}
		}
		return function () {
			return a.apply(b, arguments)
		}
	}

	function p(a, b, c) {
		p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
		return p.apply(null, arguments)
	}
	var q = Date.now || function () {
		return +new Date
	};

	function ca(a, b) {
		this.a = a;
		this.o = b || a;
		this.c = this.o.document
	}
	var da = !!window.FontFace;

	function t(a, b, c, d) {
		b = a.c.createElement(b);
		if (c)
			for (var e in c) c.hasOwnProperty(e) && ("style" == e ? b.style.cssText = c[e] : b.setAttribute(e, c[e]));
		d && b.appendChild(a.c.createTextNode(d));
		return b
	}

	function u(a, b, c) {
		a = a.c.getElementsByTagName(b)[0];
		a || (a = document.documentElement);
		a.insertBefore(c, a.lastChild)
	}

	function v(a) {
		a.parentNode && a.parentNode.removeChild(a)
	}

	function w(a, b, c) {
		b = b || [];
		c = c || [];
		for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
			for (var f = !1, g = 0; g < d.length; g += 1)
				if (b[e] === d[g]) {
					f = !0;
					break
				} f || d.push(b[e])
		}
		b = [];
		for (e = 0; e < d.length; e += 1) {
			f = !1;
			for (g = 0; g < c.length; g += 1)
				if (d[e] === c[g]) {
					f = !0;
					break
				} f || b.push(d[e])
		}
		a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
	}

	function y(a, b) {
		for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
			if (c[d] == b) return !0;
		return !1
	}

	function ea(a) {
		return a.o.location.hostname || a.a.location.hostname
	}

	function z(a, b, c) {
		function d() {
			m && e && f && (m(g), m = null)
		}
		b = t(a, "link", {
			rel: "stylesheet",
			href: b,
			media: "all"
		});
		var e = !1,
			f = !0,
			g = null,
			m = c || null;
		da ? (b.onload = function () {
			e = !0;
			d()
		}, b.onerror = function () {
			e = !0;
			g = Error("Stylesheet failed to load");
			d()
		}) : setTimeout(function () {
			e = !0;
			d()
		}, 0);
		u(a, "head", b)
	}

	function A(a, b, c, d) {
		var e = a.c.getElementsByTagName("head")[0];
		if (e) {
			var f = t(a, "script", {
					src: b
				}),
				g = !1;
			f.onload = f.onreadystatechange = function () {
				g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0, c && c(null), f.onload = f.onreadystatechange = null, "HEAD" == f.parentNode.tagName && e.removeChild(f))
			};
			e.appendChild(f);
			setTimeout(function () {
				g || (g = !0, c && c(Error("Script load timeout")))
			}, d || 5E3);
			return f
		}
		return null
	};

	function B() {
		this.a = 0;
		this.c = null
	}

	function C(a) {
		a.a++;
		return function () {
			a.a--;
			D(a)
		}
	}

	function E(a, b) {
		a.c = b;
		D(a)
	}

	function D(a) {
		0 == a.a && a.c && (a.c(), a.c = null)
	};

	function F(a) {
		this.a = a || "-"
	}
	F.prototype.c = function (a) {
		for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
		return b.join(this.a)
	};

	function G(a, b) {
		this.c = a;
		this.f = 4;
		this.a = "n";
		var c = (b || "n4").match(/^([nio])([1-9])$/i);
		c && (this.a = c[1], this.f = parseInt(c[2], 10))
	}

	function fa(a) {
		return H(a) + " " + (a.f + "00") + " 300px " + I(a.c)
	}

	function I(a) {
		var b = [];
		a = a.split(/,\s*/);
		for (var c = 0; c < a.length; c++) {
			var d = a[c].replace(/['"]/g, ""); - 1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d)
		}
		return b.join(",")
	}

	function J(a) {
		return a.a + a.f
	}

	function H(a) {
		var b = "normal";
		"o" === a.a ? b = "oblique" : "i" === a.a && (b = "italic");
		return b
	}

	function ga(a) {
		var b = 4,
			c = "n",
			d = null;
		a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
		return c + b
	};

	function ha(a, b) {
		this.c = a;
		this.f = a.o.document.documentElement;
		this.h = b;
		this.a = new F("-");
		this.j = !1 !== b.events;
		this.g = !1 !== b.classes
	}

	function ia(a) {
		a.g && w(a.f, [a.a.c("wf", "loading")]);
		K(a, "loading")
	}

	function L(a) {
		if (a.g) {
			var b = y(a.f, a.a.c("wf", "active")),
				c = [],
				d = [a.a.c("wf", "loading")];
			b || c.push(a.a.c("wf", "inactive"));
			w(a.f, c, d)
		}
		K(a, "inactive")
	}

	function K(a, b, c) {
		if (a.j && a.h[b])
			if (c) a.h[b](c.c, J(c));
			else a.h[b]()
	};

	function ja() {
		this.c = {}
	}

	function ka(a, b, c) {
		var d = [],
			e;
		for (e in b)
			if (b.hasOwnProperty(e)) {
				var f = a.c[e];
				f && d.push(f(b[e], c))
			} return d
	};

	function M(a, b) {
		this.c = a;
		this.f = b;
		this.a = t(this.c, "span", {
			"aria-hidden": "true"
		}, this.f)
	}

	function N(a) {
		u(a.c, "body", a.a)
	}

	function O(a) {
		return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + I(a.c) + ";" + ("font-style:" + H(a) + ";font-weight:" + (a.f + "00") + ";")
	};

	function P(a, b, c, d, e, f) {
		this.g = a;
		this.j = b;
		this.a = d;
		this.c = c;
		this.f = e || 3E3;
		this.h = f || void 0
	}
	P.prototype.start = function () {
		var a = this.c.o.document,
			b = this,
			c = q(),
			d = new Promise(function (d, e) {
				function f() {
					q() - c >= b.f ? e() : a.fonts.load(fa(b.a), b.h).then(function (a) {
						1 <= a.length ? d() : setTimeout(f, 25)
					}, function () {
						e()
					})
				}
				f()
			}),
			e = null,
			f = new Promise(function (a, d) {
				e = setTimeout(d, b.f)
			});
		Promise.race([f, d]).then(function () {
			e && (clearTimeout(e), e = null);
			b.g(b.a)
		}, function () {
			b.j(b.a)
		})
	};

	function Q(a, b, c, d, e, f, g) {
		this.v = a;
		this.B = b;
		this.c = c;
		this.a = d;
		this.s = g || "BESbswy";
		this.f = {};
		this.w = e || 3E3;
		this.u = f || null;
		this.m = this.j = this.h = this.g = null;
		this.g = new M(this.c, this.s);
		this.h = new M(this.c, this.s);
		this.j = new M(this.c, this.s);
		this.m = new M(this.c, this.s);
		a = new G(this.a.c + ",serif", J(this.a));
		a = O(a);
		this.g.a.style.cssText = a;
		a = new G(this.a.c + ",sans-serif", J(this.a));
		a = O(a);
		this.h.a.style.cssText = a;
		a = new G("serif", J(this.a));
		a = O(a);
		this.j.a.style.cssText = a;
		a = new G("sans-serif", J(this.a));
		a = O(a);
		this.m.a.style.cssText = a;
		N(this.g);
		N(this.h);
		N(this.j);
		N(this.m)
	}
	var R = {
			D: "serif",
			C: "sans-serif"
		},
		S = null;

	function T() {
		if (null === S) {
			var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
			S = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10))
		}
		return S
	}
	Q.prototype.start = function () {
		this.f.serif = this.j.a.offsetWidth;
		this.f["sans-serif"] = this.m.a.offsetWidth;
		this.A = q();
		U(this)
	};

	function la(a, b, c) {
		for (var d in R)
			if (R.hasOwnProperty(d) && b === a.f[R[d]] && c === a.f[R[d]]) return !0;
		return !1
	}

	function U(a) {
		var b = a.g.a.offsetWidth,
			c = a.h.a.offsetWidth,
			d;
		(d = b === a.f.serif && c === a.f["sans-serif"]) || (d = T() && la(a, b, c));
		d ? q() - a.A >= a.w ? T() && la(a, b, c) && (null === a.u || a.u.hasOwnProperty(a.a.c)) ? V(a, a.v) : V(a, a.B) : ma(a) : V(a, a.v)
	}

	function ma(a) {
		setTimeout(p(function () {
			U(this)
		}, a), 50)
	}

	function V(a, b) {
		setTimeout(p(function () {
			v(this.g.a);
			v(this.h.a);
			v(this.j.a);
			v(this.m.a);
			b(this.a)
		}, a), 0)
	};

	function W(a, b, c) {
		this.c = a;
		this.a = b;
		this.f = 0;
		this.m = this.j = !1;
		this.s = c
	}
	var X = null;
	W.prototype.g = function (a) {
		var b = this.a;
		b.g && w(b.f, [b.a.c("wf", a.c, J(a).toString(), "active")], [b.a.c("wf", a.c, J(a).toString(), "loading"), b.a.c("wf", a.c, J(a).toString(), "inactive")]);
		K(b, "fontactive", a);
		this.m = !0;
		na(this)
	};
	W.prototype.h = function (a) {
		var b = this.a;
		if (b.g) {
			var c = y(b.f, b.a.c("wf", a.c, J(a).toString(), "active")),
				d = [],
				e = [b.a.c("wf", a.c, J(a).toString(), "loading")];
			c || d.push(b.a.c("wf", a.c, J(a).toString(), "inactive"));
			w(b.f, d, e)
		}
		K(b, "fontinactive", a);
		na(this)
	};

	function na(a) {
		0 == --a.f && a.j && (a.m ? (a = a.a, a.g && w(a.f, [a.a.c("wf", "active")], [a.a.c("wf", "loading"), a.a.c("wf", "inactive")]), K(a, "active")) : L(a.a))
	};

	function oa(a) {
		this.j = a;
		this.a = new ja;
		this.h = 0;
		this.f = this.g = !0
	}
	oa.prototype.load = function (a) {
		this.c = new ca(this.j, a.context || this.j);
		this.g = !1 !== a.events;
		this.f = !1 !== a.classes;
		pa(this, new ha(this.c, a), a)
	};

	function qa(a, b, c, d, e) {
		var f = 0 == --a.h;
		(a.f || a.g) && setTimeout(function () {
			var a = e || null,
				m = d || null || {};
			if (0 === c.length && f) L(b.a);
			else {
				b.f += c.length;
				f && (b.j = f);
				var h, l = [];
				for (h = 0; h < c.length; h++) {
					var k = c[h],
						n = m[k.c],
						r = b.a,
						x = k;
					r.g && w(r.f, [r.a.c("wf", x.c, J(x).toString(), "loading")]);
					K(r, "fontloading", x);
					r = null;
					if (null === X)
						if (window.FontFace) {
							var x = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),
								xa = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
							X = x ? 42 < parseInt(x[1], 10) : xa ? !1 : !0
						} else X = !1;
					X ? r = new P(p(b.g, b), p(b.h, b), b.c, k, b.s, n) : r = new Q(p(b.g, b), p(b.h, b), b.c, k, b.s, a, n);
					l.push(r)
				}
				for (h = 0; h < l.length; h++) l[h].start()
			}
		}, 0)
	}

	function pa(a, b, c) {
		var d = [],
			e = c.timeout;
		ia(b);
		var d = ka(a.a, c, a.c),
			f = new W(a.c, b, e);
		a.h = d.length;
		b = 0;
		for (c = d.length; b < c; b++) d[b].load(function (b, d, c) {
			qa(a, f, b, d, c)
		})
	};

	function ra(a, b) {
		this.c = a;
		this.a = b
	}
	ra.prototype.load = function (a) {
		function b() {
			if (f["__mti_fntLst" + d]) {
				var c = f["__mti_fntLst" + d](),
					e = [],
					h;
				if (c)
					for (var l = 0; l < c.length; l++) {
						var k = c[l].fontfamily;
						void 0 != c[l].fontStyle && void 0 != c[l].fontWeight ? (h = c[l].fontStyle + c[l].fontWeight, e.push(new G(k, h))) : e.push(new G(k))
					}
				a(e)
			} else setTimeout(function () {
				b()
			}, 50)
		}
		var c = this,
			d = c.a.projectId,
			e = c.a.version;
		if (d) {
			var f = c.c.o;
			A(this.c, (c.a.api || "https://fast.fonts.net/jsapi") + "/" + d + ".js" + (e ? "?v=" + e : ""), function (e) {
				e ? a([]) : (f["__MonotypeConfiguration__" +
					d] = function () {
					return c.a
				}, b())
			}).id = "__MonotypeAPIScript__" + d
		} else a([])
	};

	function sa(a, b) {
		this.c = a;
		this.a = b
	}
	sa.prototype.load = function (a) {
		var b, c, d = this.a.urls || [],
			e = this.a.families || [],
			f = this.a.testStrings || {},
			g = new B;
		b = 0;
		for (c = d.length; b < c; b++) z(this.c, d[b], C(g));
		var m = [];
		b = 0;
		for (c = e.length; b < c; b++)
			if (d = e[b].split(":"), d[1])
				for (var h = d[1].split(","), l = 0; l < h.length; l += 1) m.push(new G(d[0], h[l]));
			else m.push(new G(d[0]));
		E(g, function () {
			a(m, f)
		})
	};

	function ta(a, b) {
		a ? this.c = a : this.c = ua;
		this.a = [];
		this.f = [];
		this.g = b || ""
	}
	var ua = "https://fonts.googleapis.com/css";

	function va(a, b) {
		for (var c = b.length, d = 0; d < c; d++) {
			var e = b[d].split(":");
			3 == e.length && a.f.push(e.pop());
			var f = "";
			2 == e.length && "" != e[1] && (f = ":");
			a.a.push(e.join(f))
		}
	}

	function wa(a) {
		if (0 == a.a.length) throw Error("No fonts to load!");
		if (-1 != a.c.indexOf("kit=")) return a.c;
		for (var b = a.a.length, c = [], d = 0; d < b; d++) c.push(a.a[d].replace(/ /g, "+"));
		b = a.c + "?family=" + c.join("%7C");
		0 < a.f.length && (b += "&subset=" + a.f.join(","));
		0 < a.g.length && (b += "&text=" + encodeURIComponent(a.g));
		return b
	};

	function ya(a) {
		this.f = a;
		this.a = [];
		this.c = {}
	}
	var za = {
			latin: "BESbswy",
			"latin-ext": "\u00e7\u00f6\u00fc\u011f\u015f",
			cyrillic: "\u0439\u044f\u0416",
			greek: "\u03b1\u03b2\u03a3",
			khmer: "\u1780\u1781\u1782",
			Hanuman: "\u1780\u1781\u1782"
		},
		Aa = {
			thin: "1",
			extralight: "2",
			"extra-light": "2",
			ultralight: "2",
			"ultra-light": "2",
			light: "3",
			regular: "4",
			book: "4",
			medium: "5",
			"semi-bold": "6",
			semibold: "6",
			"demi-bold": "6",
			demibold: "6",
			bold: "7",
			"extra-bold": "8",
			extrabold: "8",
			"ultra-bold": "8",
			ultrabold: "8",
			black: "9",
			heavy: "9",
			l: "3",
			r: "4",
			b: "7"
		},
		Ba = {
			i: "i",
			italic: "i",
			n: "n",
			normal: "n"
		},
		Ca = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;

	function Da(a) {
		for (var b = a.f.length, c = 0; c < b; c++) {
			var d = a.f[c].split(":"),
				e = d[0].replace(/\+/g, " "),
				f = ["n4"];
			if (2 <= d.length) {
				var g;
				var m = d[1];
				g = [];
				if (m)
					for (var m = m.split(","), h = m.length, l = 0; l < h; l++) {
						var k;
						k = m[l];
						if (k.match(/^[\w-]+$/)) {
							var n = Ca.exec(k.toLowerCase());
							if (null == n) k = "";
							else {
								k = n[2];
								k = null == k || "" == k ? "n" : Ba[k];
								n = n[1];
								if (null == n || "" == n) n = "4";
								else var r = Aa[n],
									n = r ? r : isNaN(n) ? "4" : n.substr(0, 1);
								k = [k, n].join("")
							}
						} else k = "";
						k && g.push(k)
					}
				0 < g.length && (f = g);
				3 == d.length && (d = d[2], g = [], d = d ? d.split(",") : g, 0 < d.length && (d = za[d[0]]) && (a.c[e] = d))
			}
			a.c[e] || (d = za[e]) && (a.c[e] = d);
			for (d = 0; d < f.length; d += 1) a.a.push(new G(e, f[d]))
		}
	};

	function Ea(a, b) {
		this.c = a;
		this.a = b
	}
	var Fa = {
		Arimo: !0,
		Cousine: !0,
		Tinos: !0
	};
	Ea.prototype.load = function (a) {
		var b = new B,
			c = this.c,
			d = new ta(this.a.api, this.a.text),
			e = this.a.families;
		va(d, e);
		var f = new ya(e);
		Da(f);
		z(c, wa(d), C(b));
		E(b, function () {
			a(f.a, f.c, Fa)
		})
	};

	function Ga(a, b) {
		this.c = a;
		this.a = b
	}
	Ga.prototype.load = function (a) {
		var b = this.a.id,
			c = this.c.o;
		b ? A(this.c, (this.a.api || "https://use.typekit.net") + "/" + b + ".js", function (b) {
			if (b) a([]);
			else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
				b = c.Typekit.config.fn;
				for (var e = [], f = 0; f < b.length; f += 2)
					for (var g = b[f], m = b[f + 1], h = 0; h < m.length; h++) e.push(new G(g, m[h]));
				try {
					c.Typekit.load({
						events: !1,
						classes: !1,
						async: !0
					})
				} catch (l) {}
				a(e)
			}
		}, 2E3) : a([])
	};

	function Ha(a, b) {
		this.c = a;
		this.f = b;
		this.a = []
	}
	Ha.prototype.load = function (a) {
		var b = this.f.id,
			c = this.c.o,
			d = this;
		b ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}), c.__webfontfontdeckmodule__[b] = function (b, c) {
			for (var g = 0, m = c.fonts.length; g < m; ++g) {
				var h = c.fonts[g];
				d.a.push(new G(h.name, ga("font-weight:" + h.weight + ";font-style:" + h.style)))
			}
			a(d.a)
		}, A(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + ea(this.c) + "/" + b + ".js", function (b) {
			b && a([])
		})) : a([])
	};
	var Y = new oa(window);
	Y.a.c.custom = function (a, b) {
		return new sa(b, a)
	};
	Y.a.c.fontdeck = function (a, b) {
		return new Ha(b, a)
	};
	Y.a.c.monotype = function (a, b) {
		return new ra(b, a)
	};
	Y.a.c.typekit = function (a, b) {
		return new Ga(b, a)
	};
	Y.a.c.google = function (a, b) {
		return new Ea(b, a)
	};
	var Z = {
		load: p(Y.load, Y)
	};
	"function" === typeof define && define.amd ? define(function () {
		return Z
	}) : "undefined" !== typeof module && module.exports ? module.exports = Z : (window.WebFont = Z, window.WebFontConfig && Y.load(window.WebFontConfig));
}());

function vc_js() {
	vc_toggleBehaviour(), vc_tabsBehaviour(), vc_accordionBehaviour(), vc_teaserGrid(), vc_carouselBehaviour(), vc_slidersBehaviour(), vc_prettyPhoto(), vc_googleplus(), vc_pinterest(), vc_progress_bar(), vc_plugin_flexslider(), vc_google_fonts(), vc_gridBehaviour(), vc_rowBehaviour(), vc_prepareHoverBox(), vc_googleMapsPointer(), vc_ttaActivation(), jQuery(document).trigger("vc_js"), window.setTimeout(vc_waypoints, 500)
}
document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ",
	function () {
		for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ")
	}(), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function ($parent) {
		($parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider")).each(function () {
			var this_element = jQuery(this),
				sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval")),
				sliderFx = this_element.attr("data-flex_fx"),
				slideshow = !0;
			0 === sliderTimeout && (slideshow = !1), this_element.is(":visible") && this_element.flexslider({
				animation: sliderFx,
				slideshow: slideshow,
				slideshowSpeed: sliderTimeout,
				sliderSpeed: 800,
				smoothHeight: !0
			})
		})
	}), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function () {
		0 < jQuery(".wpb_googleplus").length && function () {
			var po = document.createElement("script");
			po.type = "text/javascript", po.async = !0, po.src = "//apis.google.com/js/plusone.js";
			var s = document.getElementsByTagName("script")[0];
			s.parentNode.insertBefore(po, s)
		}()
	}), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function () {
		0 < jQuery(".wpb_pinterest").length && function () {
			var po = document.createElement("script");
			po.type = "text/javascript", po.async = !0, po.src = "//assets.pinterest.com/js/pinit.js";
			var s = document.getElementsByTagName("script")[0];
			s.parentNode.insertBefore(po, s)
		}()
	}), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function () {
		void 0 !== jQuery.fn.waypoint && jQuery(".vc_progress_bar").waypoint(function () {
			jQuery(this).find(".vc_single_bar").each(function (index) {
				var bar = jQuery(this).find(".vc_bar"),
					val = bar.data("percentage-value");
				setTimeout(function () {
					bar.css({
						width: val + "%"
					})
				}, 200 * index)
			})
		}, {
			offset: "85%"
		})
	}), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function () {
		void 0 !== jQuery.fn.waypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").waypoint(function () {
			jQuery(this).addClass("wpb_start_animation animated")
		}, {
			offset: "85%"
		})
	}), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function ($el) {
		function event(e) {
			e && e.preventDefault && e.preventDefault();
			var element = jQuery(this).closest(".vc_toggle"),
				content = element.find(".vc_toggle_content");
			element.hasClass("vc_toggle_active") ? content.slideUp({
				duration: 300,
				complete: function () {
					element.removeClass("vc_toggle_active")
				}
			}) : content.slideDown({
				duration: 300,
				complete: function () {
					element.addClass("vc_toggle_active")
				}
			})
		}
		$el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click").click(event) : $el.find(".vc_toggle_title").unbind("click").click(event) : jQuery(".vc_toggle_title").unbind("click").on("click", event)
	}), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function ($tab) {
		if (jQuery.ui) {
			var $call = $tab || jQuery(".wpb_tabs, .wpb_tour"),
				ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10",
				old_version = 1 === parseInt(ver[0]) && parseInt(ver[1]) < 9;
			$call.each(function (index) {
				var $tabs, interval = jQuery(this).attr("data-interval"),
					tabs_array = [];
				if ($tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({
						show: function (event, ui) {
							wpb_prepare_tab_content(event, ui)
						},
						beforeActivate: function (event, ui) {
							1 !== ui.newPanel.index() && ui.newPanel.find(".vc_pie_chart:not(.vc_ready)")
						},
						activate: function (event, ui) {
							wpb_prepare_tab_content(event, ui)
						}
					}), interval && 0 < interval) try {
					$tabs.tabs("rotate", 1e3 * interval)
				} catch (e) {
					window.console && window.console.warn && console.warn(e)
				}
				jQuery(this).find(".wpb_tab").each(function () {
					tabs_array.push(this.id)
				}), jQuery(this).find(".wpb_tabs_nav li").click(function (e) {
					return e.preventDefault(), old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()), !1
				}), jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").click(function (e) {
					if (e.preventDefault(), old_version) {
						var index = $tabs.tabs("option", "selected");
						jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--, index < 0 ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0), $tabs.tabs("select", index)
					} else {
						index = $tabs.tabs("option", "active");
						var length = $tabs.find(".wpb_tab").length;
						index = jQuery(this).parent().hasClass("wpb_next_slide") ? length <= index + 1 ? 0 : index + 1 : index - 1 < 0 ? length - 1 : index - 1, $tabs.tabs("option", "active", index)
					}
				})
			})
		}
	}), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function () {
		jQuery(".wpb_accordion").each(function (index) {
			var $tabs, $this = jQuery(this),
				active_tab = ($this.attr("data-interval"), !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab")) && parseInt($this.data("active-tab")) - 1),
				collapsible = !1 === active_tab || "yes" === $this.data("collapsible");
			$tabs = $this.find(".wpb_accordion_wrapper").accordion({
				header: "> div > h3",
				autoHeight: !1,
				heightStyle: "content",
				active: active_tab,
				collapsible: collapsible,
				navigation: !0,
				activate: vc_accordionActivate,
				change: function (event, ui) {
					void 0 !== jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), vc_carouselBehaviour(ui.newPanel)
				}
			}), !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function () {})
		})
	}), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function () {
		var layout_modes = {
			fitrows: "fitRows",
			masonry: "masonry"
		};
		jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function () {
			var $container = jQuery(this),
				$thumbs = $container.find(".wpb_thumbnails"),
				layout_mode = $thumbs.attr("data-layout-mode");
			$thumbs.isotope({
				itemSelector: ".isotope-item",
				layoutMode: void 0 === layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode]
			}), $container.find(".categories_filter a").data("isotope", $thumbs).click(function (e) {
				e.preventDefault();
				var $thumbs = jQuery(this).data("isotope");
				jQuery(this).parent().parent().find(".active").removeClass("active"), jQuery(this).parent().addClass("active"), $thumbs.isotope({
					filter: jQuery(this).attr("data-filter")
				})
			}), jQuery(window).bind("load resize", function () {
				$thumbs.isotope("layout")
			})
		})
	}), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function ($parent) {
		($parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel")).each(function () {
			var $this = jQuery(this);
			if (!0 !== $this.data("carousel_enabled") && $this.is(":visible")) {
				$this.data("carousel_enabled", !0);
				getColumnsCount(jQuery(this));
				jQuery(this).hasClass("columns_count_1") && 900;
				var carousele_li = jQuery(this).find(".wpb_thumbnails-fluid li");
				carousele_li.css({
					"margin-right": carousele_li.css("margin-left"),
					"margin-left": 0
				});
				var fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid");
				fluid_ul.width(fluid_ul.width() + 300), jQuery(window).resize(function () {
					screen_size != (screen_size = getSizeName()) && window.setTimeout("location.reload()", 20)
				})
			}
		})
	}), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function () {
		jQuery(".wpb_gallery_slides").each(function (index) {
			var $imagesGrid, this_element = jQuery(this);
			if (this_element.hasClass("wpb_slider_nivo")) {
				var sliderTimeout = 1e3 * this_element.attr("data-interval");
				0 === sliderTimeout && (sliderTimeout = 9999999999), this_element.find(".nivoSlider").nivoSlider({
					effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
					slices: 15,
					boxCols: 8,
					boxRows: 4,
					animSpeed: 800,
					pauseTime: sliderTimeout,
					startSlide: 0,
					directionNav: !0,
					directionNavHide: !0,
					controlNav: !0,
					keyboardNav: !1,
					pauseOnHover: !0,
					manualAdvance: !1,
					prevText: "Prev",
					nextText: "Next"
				})
			} else this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function () {
				$imagesGrid.isotope({
					itemSelector: ".isotope-item",
					layoutMode: "fitRows"
				})
			}) : this_element.find(".wpb_image_grid_ul").isotope({
				itemSelector: ".isotope-item",
				layoutMode: "fitRows"
			}))
		})
	}), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function () {
		try {
			jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
				animationSpeed: "normal",
				hook: "data-rel",
				padding: 15,
				opacity: .7,
				showTitle: !0,
				allowresize: !0,
				counter_separator_label: "/",
				hideflash: !1,
				deeplinking: !1,
				modal: !1,
				callback: function () {
					-1 < location.href.indexOf("#!prettyPhoto") && (location.hash = "")
				},
				social_tools: ""
			})
		} catch (err) {
			window.console && window.console.warn && console.warn(err)
		}
	}), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function () {
		return !1
	}), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function () {
		var vcSkrollrOptions, callSkrollInit, $ = window.jQuery;

		function fullWidthRow() {
			var $elements = $('[data-vc-full-width="true"]');
			$.each($elements, function (key, item) {
				var $el = $(this);
				$el.addClass("vc_hidden");
				var $el_full = $el.next(".vc_row-full-width");
				if ($el_full.length || ($el_full = $el.parent().next(".vc_row-full-width")), $el_full.length) {
					var padding, paddingRight, el_margin_left = parseInt($el.css("margin-left"), 10),
						el_margin_right = parseInt($el.css("margin-right"), 10),
						offset = 0 - $el_full.offset().left - el_margin_left,
						width = $(window).width();
					if ("rtl" === $el.css("direction") && (offset -= $el_full.width(), offset += width, offset += el_margin_left, offset += el_margin_right), $el.css({
							position: "relative",
							left: offset,
							"box-sizing": "border-box",
							width: width
						}), !$el.data("vcStretchContent")) "rtl" === $el.css("direction") ? ((padding = $el_full.offset().left) < 0 && (padding = 0), (paddingRight = offset) < 0 && (paddingRight = 0)) : ((padding = -1 * offset) < 0 && (padding = 0), (paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right) < 0 && (paddingRight = 0)), $el.css({
						"padding-left": padding + "px",
						"padding-right": paddingRight + "px"
					});
					$el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden"), $(document).trigger("vc-full-width-row-single", {
						el: $el,
						offset: offset,
						marginLeft: el_margin_left,
						marginRight: el_margin_right,
						elFull: $el_full,
						width: width
					})
				}
			}), $(document).trigger("vc-full-width-row", $elements)
		}

		function fullHeightRow() {
			var windowHeight, offsetTop, fullHeight, $element = $(".vc_row-o-full-height:first");
			$element.length && (windowHeight = $(window).height(), (offsetTop = $element.offset().top) < windowHeight && (fullHeight = 100 - offsetTop / (windowHeight / 100), $element.css("min-height", fullHeight + "vh")));
			$(document).trigger("vc-full-height-row", $element)
		}
		$(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow), fullWidthRow(), fullHeightRow(), (0 < window.navigator.userAgent.indexOf("MSIE ") || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function () {
			"flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
		}), vc_initVideoBackgrounds(), callSkrollInit = !1, window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(), $(".vc_parallax-inner").remove(), $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"), $("[data-vc-parallax]").each(function () {
			var skrollrSize, skrollrStart, $parallaxElement, parallaxImage, youtubeId;
			callSkrollInit = !0, "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"), skrollrSize = 100 * $(this).data("vcParallax"), ($parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrSize + "%"), (youtubeId = vcExtractYoutubeId(parallaxImage = $(this).data("vcParallaxImage"))) ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : void 0 !== parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"), skrollrStart = -(skrollrSize - 100), $parallaxElement.attr("data-bottom-top", "top: " + skrollrStart + "%;").attr("data-top-bottom", "top: 0%;")
		}), callSkrollInit && window.skrollr && (vcSkrollrOptions = {
			forceHeight: !1,
			smoothScrolling: !1,
			mobileCheck: function () {
				return !1
			}
		}, window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions), window.vcParallaxSkroll)
	}), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function () {
		jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid()
	}), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function (el) {
		for (var find = !1, i = 1; !1 === find;) {
			if (el.hasClass("columns_count_" + i)) return find = !0, i;
			i++
		}
	});
var screen_size = getSizeName();

function getSizeName() {
	var screen_w = jQuery(window).width();
	return 1170 < screen_w ? "desktop_wide" : 960 < screen_w && screen_w < 1169 ? "desktop" : 768 < screen_w && screen_w < 959 ? "tablet" : 300 < screen_w && screen_w < 767 ? "mobile" : screen_w < 300 ? "mobile_portrait" : ""
}

function loadScript(url, $obj, callback) {
	var script = document.createElement("script");
	script.type = "text/javascript", script.readyState && (script.onreadystatechange = function () {
		"loaded" !== script.readyState && "complete" !== script.readyState || (script.onreadystatechange = null, callback())
	}), script.src = url, $obj.get(0).appendChild(script)
}

function vc_ttaActivation() {
	jQuery("[data-vc-accordion]").on("show.vc.accordion", function (e) {
		var $ = window.jQuery,
			ui = {};
		ui.newPanel = $(this).data("vc.accordion").getTarget(), window.wpb_prepare_tab_content(e, ui)
	})
}

function vc_accordionActivate(event, ui) {
	if (ui.newPanel.length && ui.newHeader.length) {
		var $pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),
			$round_charts = ui.newPanel.find(".vc_round-chart"),
			$line_charts = ui.newPanel.find(".vc_line-chart"),
			$carousel = ui.newPanel.find('[data-ride="vc_carousel"]');
		void 0 !== jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
			var grid = jQuery(this).data("vcGrid");
			grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
		}), vc_carouselBehaviour(ui.newPanel), vc_plugin_flexslider(ui.newPanel), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
			reload: !1
		}), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
			reload: !1
		}), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), ui.newPanel.parents(".isotope").length && ui.newPanel.parents(".isotope").each(function () {
			jQuery(this).isotope("layout")
		})
	}
}

function initVideoBackgrounds() {
	return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"), vc_initVideoBackgrounds()
}

function vc_initVideoBackgrounds() {
	jQuery("[data-vc-video-bg]").each(function () {
		var youtubeId, $element = jQuery(this);
		$element.data("vcVideoBg") ? ((youtubeId = vcExtractYoutubeId($element.data("vcVideoBg"))) && ($element.find(".vc_video-bg").remove(), insertYoutubeVideoAsBackground($element, youtubeId)), jQuery(window).on("grid:items:added", function (event, $grid) {
			$element.has($grid).length && vcResizeVideoBackground($element)
		})) : $element.find(".vc_video-bg").remove()
	})
}

function insertYoutubeVideoAsBackground($element, youtubeId, counter) {
	if ("undefined" == typeof YT || void 0 === YT.Player) return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function () {
		insertYoutubeVideoAsBackground($element, youtubeId, counter++)
	}, 100);
	var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
	new YT.Player($container[0], {
		width: "100%",
		height: "100%",
		videoId: youtubeId,
		playerVars: {
			playlist: youtubeId,
			iv_load_policy: 3,
			enablejsapi: 1,
			disablekb: 1,
			autoplay: 1,
			controls: 0,
			showinfo: 0,
			rel: 0,
			loop: 1,
			wmode: "transparent"
		},
		events: {
			onReady: function (event) {
				event.target.mute().setLoop(!0)
			}
		}
	}), vcResizeVideoBackground($element), jQuery(window).bind("resize", function () {
		vcResizeVideoBackground($element)
	})
}

function vcResizeVideoBackground($element) {
	var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
		containerH = $element.innerHeight();
	containerW / containerH < 16 / 9 ? (iframeW = containerH * (16 / 9), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px") : (iframeH = (iframeW = containerW) * (9 / 16), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px"), iframeW += "px", iframeH += "px", $element.find(".vc_video-bg iframe").css({
		maxWidth: "1000%",
		marginLeft: marginLeft,
		marginTop: marginTop,
		width: iframeW,
		height: iframeH
	})
}

function vcExtractYoutubeId(url) {
	if (void 0 === url) return !1;
	var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
	return null !== id && id[1]
}
if ("function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function (event, ui) {
		var $ui_panel, $google_maps, panel = ui.panel || ui.newPanel,
			$pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
			$round_charts = panel.find(".vc_round-chart"),
			$line_charts = panel.find(".vc_line-chart"),
			$carousel = panel.find('[data-ride="vc_carousel"]');
		if (vc_carouselBehaviour(), vc_plugin_flexslider(panel), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
				var grid = jQuery(this).data("vcGrid");
				grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
			}), panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
				var grid = jQuery(this).data("vcGrid");
				grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
			}), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
				reload: !1
			}), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
				reload: !1
			}), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), $ui_panel = panel.find(".isotope, .wpb_image_grid_ul"), $google_maps = panel.find(".wpb_gmaps_widget"), 0 < $ui_panel.length && $ui_panel.isotope("layout"), $google_maps.length && !$google_maps.is(".map_ready")) {
			var $frame = $google_maps.find("iframe");
			$frame.attr("src", $frame.attr("src")), $google_maps.addClass("map_ready")
		}
		panel.parents(".isotope").length && panel.parents(".isotope").each(function () {
			jQuery(this).isotope("layout")
		})
	}), "function" != typeof window.vc_googleMapsPointer)
function vc_googleMapsPointer() {
	var $ = window.jQuery,
		$wpbGmapsWidget = $(".wpb_gmaps_widget");
	$wpbGmapsWidget.click(function () {
		$("iframe", this).css("pointer-events", "auto")
	}), $wpbGmapsWidget.mouseleave(function () {
		$("iframe", this).css("pointer-events", "none")
	}), $(".wpb_gmaps_widget iframe").css("pointer-events", "none")
}

function vc_setHoverBoxPerspective(hoverBox) {
	hoverBox.each(function () {
		var $this = jQuery(this),
			perspective = 4 * $this.width() + "px";
		$this.css("perspective", perspective)
	})
}

function vc_setHoverBoxHeight(hoverBox) {
	hoverBox.each(function () {
		var $this = jQuery(this),
			hoverBoxInner = $this.find(".vc-hoverbox-inner");
		hoverBoxInner.css("min-height", 0);
		var frontHeight = $this.find(".vc-hoverbox-front-inner").outerHeight(),
			backHeight = $this.find(".vc-hoverbox-back-inner").outerHeight(),
			hoverBoxHeight = backHeight < frontHeight ? frontHeight : backHeight;
		hoverBoxHeight < 250 && (hoverBoxHeight = 250), hoverBoxInner.css("min-height", hoverBoxHeight + "px")
	})
}

function vc_prepareHoverBox() {
	var hoverBox = jQuery(".vc-hoverbox");
	vc_setHoverBoxHeight(hoverBox), vc_setHoverBoxPerspective(hoverBox)
}
jQuery(document).ready(vc_prepareHoverBox), jQuery(window).resize(vc_prepareHoverBox), jQuery(document).ready(function ($) {
	window.vc_js()
});
(function ($) {
	'use strict';
	var martfury = martfury || {};
	martfury.init = function () {
		martfury.$body = $(document.body), martfury.$window = $(window), martfury.$header = $('#masthead');
		this.rowParallax();
		this.journey();
		this.testimonialSlides();
		this.partnerCarousel();
		this.gmaps();
		this.productsOfCategory();
		this.productsOfCategory2();
		this.productsTabs();
		this.categoryTabs();
		this.productsCarousel();
		this.dealsOfDay();
		this.productDealsCarousel();
		this.topSelling();
		this.productsListCarousel();
		$('.martfury-counter .counter-value').counterUp();
	};
	martfury.rowParallax = function () {
		var $parallaxsRow = $('.vc_row.parallax');
		for (var i = 0; i < $parallaxsRow.length; i++) {
			$($parallaxsRow[i]).parallax('50%', 0.6);
		}
	};
	martfury.journey = function () {
		$('.martfury-journey').each(function () {
			var $el = $(this),
				$tabs = $el.find('ul li a'),
				$first = $tabs.filter(':first'),
				$content = $el.find('.journey-wrapper'),
				width = $el.find('ul').width(),
				num = $el.attr('data-number'),
				space, pos, val;
			if (num == 1) {
				space = 0;
			} else {
				space = (width - 40) / (num - 1);
			}
			for (var i = 1; i <= num; i++) {
				var $this = $('.journey-tab-' + i);
				if (martfuryShortCode.direction === 'true') {
					if ($this.hasClass('reverse')) {
						pos = 'left';
						val = (i - num) * space * -1;
					} else {
						pos = 'right';
						val = (i - 1) * space;
					}
				} else {
					if ($this.hasClass('reverse')) {
						pos = 'right';
						val = (i - num) * space * -1;
					} else {
						pos = 'left';
						val = (i - 1) * space;
					}
				}
				$this.css(pos, val + 15);
			}
			$first.addClass('active');
			$content.filter(':first').addClass('active');
			$tabs.on('click', function (e) {
				e.preventDefault();
				var $this = $(this),
					tab_id = $this.attr('data-tab');
				if ($this.hasClass('active')) {
					return;
				}
				$tabs.removeClass('active');
				$content.removeClass('active');
				$this.addClass('active');
				$('#' + tab_id).addClass('active');
			});
		});
	};
	martfury.testimonialSlides = function () {
		if (martfuryShortCode.length === 0 || typeof martfuryShortCode.testimonial === 'undefined') {
			return;
		}
		$.each(martfuryShortCode.testimonial, function (id, testimonialData) {
			var $testimonial = $(document.getElementById(id));
			$testimonial.not('.slick-initialized').slick({
				rtl: (martfuryShortCode.direction === 'true'),
				slidesToShow: 2,
				infinite: testimonialData.autoplay,
				arrows: testimonialData.nav,
				prevArrow: '<div class="mf-left-arrow"><i class="icon-chevron-left"></i></div>',
				nextArrow: '<div class="mf-right-arrow"><i class="icon-chevron-right"></i></div>',
				autoplay: testimonialData.autoplay,
				autoplaySpeed: testimonialData.autoplay_speed,
				speed: 800,
				dots: testimonialData.dot,
				responsive: [{
					breakpoint: 1200,
					settings: {
						arrows: false,
						dots: true
					}
				}, {
					breakpoint: 768,
					settings: {
						arrows: false,
						dots: true
					}
				}, {
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						arrows: false,
						dots: true
					}
				}]
			});
		});
	};
	martfury.partnerCarousel = function () {
		$('.martfury-partner.carousel-type').each(function () {
			var $this = $(this),
				$items = $this.find('.list-item'),
				columns = $this.data('columns');
			$items.not('.slick-initialized').slick({
				rtl: (martfuryShortCode.direction === 'true'),
				slidesToShow: columns,
				infinite: false,
				arrows: false,
				dots: false,
				responsive: [{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4
					}
				}, {
					breakpoint: 768,
					settings: {
						slidesToShow: 3
					}
				}, {
					breakpoint: 480,
					settings: {
						slidesToShow: 2
					}
				}]
			});
		});
	};
	martfury.productsOfCategory = function () {
		if (martfuryShortCode.length === 0 || typeof martfuryShortCode.productsOfCategory === 'undefined') {
			return;
		}
		$.each(martfuryShortCode.productsOfCategory, function (id, productsOfCategoryData) {
			var $viewPort = $(document.getElementById(id));
			martfury.catBannerCarousel($viewPort.find('.images-list'), productsOfCategoryData);
		});
		$(window).on('scroll', function () {
			var offSet = 0;
			$.each(martfuryShortCode.productsOfCategory, function (id, productsOfCategoryData) {
				var $viewPort = $(document.getElementById(id));
				if (!$viewPort.hasClass('no-infinite')) {
					if ($viewPort.is(':in-viewport(' + offSet + ')')) {
						productsOfCatAjax($viewPort, productsOfCategoryData);
						$viewPort.addClass('no-infinite');
					}
				}
			});
		}).trigger('scroll');

		function productsOfCatAjax($viewPort, productsOfCategoryData) {
			$.ajax({
				url: martfuryData.ajax_url,
				dataType: 'json',
				method: 'post',
				data: {
					action: 'martfury_get_shortcode_ajax',
					nonce: martfuryData.nonce,
					params: productsOfCategoryData.params,
					element: 'productsOfCat'
				},
				success: function (response) {
					$viewPort.html(response.data);
					martfury.lazyLoad($viewPort);
					martfury.catBannerCarousel($viewPort.find('.images-list'), productsOfCategoryData);
					$(document.body).trigger('martfury_get_products_ajax_success');
				}
			});
		}
	};
	martfury.productsOfCategory2 = function () {
		if (martfuryShortCode.length === 0 || typeof martfuryShortCode.productsOfCategory2 === 'undefined') {
			return;
		}
		$.each(martfuryShortCode.productsOfCategory2, function (id, productsOfCategoryData) {
			var $viewPort = $(document.getElementById(id));
			martfury.catBannerCarousel($viewPort.find('.images-list'), productsOfCategoryData);
		});
		$(window).on('scroll', function () {
			var offSet = 0;
			$.each(martfuryShortCode.productsOfCategory2, function (id, productsOfCategoryData) {
				var $viewPort = $(document.getElementById(id));
				if (!$viewPort.hasClass('no-infinite')) {
					if ($viewPort.is(':in-viewport(' + offSet + ')')) {
						productsOfCatAjax($viewPort, productsOfCategoryData);
						$viewPort.addClass('no-infinite');
					}
				}
			});
		}).trigger('scroll');

		function productsOfCatAjax($viewPort, productsOfCategoryData) {
			$.ajax({
				url: martfuryData.ajax_url,
				dataType: 'json',
				method: 'post',
				data: {
					action: 'martfury_get_shortcode_ajax',
					nonce: martfuryData.nonce,
					params: productsOfCategoryData.params,
					element: 'productsOfCat2'
				},
				success: function (response) {
					$viewPort.html(response.data);
					martfury.lazyLoad($viewPort);
					martfury.catBannerCarousel($viewPort.find('.images-list'), productsOfCategoryData);
					martfury.getproductsCarousel($viewPort.find('.mf-products-tabs'), productsOfCategoryData);
					$(document.body).trigger('martfury_get_products_ajax_success');
					$(document.body).trigger('martfury_get_tabs_ajax_success');
				}
			});
		}
	};
	martfury.catBannerCarousel = function ($id, productsOfCategoryData) {
		$id.not('.slick-initialized').slick({
			rtl: (martfuryShortCode.direction === 'true'),
			slidesToShow: 1,
			arrows: productsOfCategoryData.navigation,
			prevArrow: '<span class="icon-chevron-left slick-prev-arrow"></span>',
			nextArrow: '<span class="icon-chevron-right slick-next-arrow"></span>',
			infinite: productsOfCategoryData.infinite,
			autoplay: productsOfCategoryData.autoplay,
			autoplaySpeed: productsOfCategoryData.autoplay_speed,
			dots: productsOfCategoryData.pagination
		});
		$id.on('afterChange', function () {
			martfury.lazyLoad($id);
		});
	};
	martfury.productsTabs = function () {
		if (martfuryShortCode.length === 0 || typeof martfuryShortCode.productsTabs === 'undefined') {
			return;
		}
		$.each(martfuryShortCode.productsTabs, function (id, productsTabsData) {
			var $viewPort = $(document.getElementById(id));
			martfury.getproductsCarousel($viewPort, productsTabsData);
		});
		$(window).on('scroll', function () {
			var offSet = 0;
			$.each(martfuryShortCode.productsTabs, function (id, productsTabsData) {
				var $viewPort = $(document.getElementById(id));
				if (!$viewPort.hasClass('no-infinite')) {
					if ($viewPort.is(':in-viewport(' + offSet + ')')) {
						productsTabsAjax($viewPort, productsTabsData);
						$viewPort.addClass('no-infinite');
					}
				}
			});
		}).trigger('scroll');

		function productsTabsAjax($viewPort, productsTabsData) {
			$.ajax({
				url: martfuryData.ajax_url,
				dataType: 'json',
				method: 'post',
				data: {
					action: 'martfury_get_shortcode_ajax',
					nonce: martfuryData.nonce,
					params: productsTabsData.params,
					element: 'productTabs'
				},
				success: function (response) {
					$viewPort.find('.tabs-content').html(response.data);
					martfury.lazyLoad($viewPort);
					martfury.getproductsCarousel($viewPort, productsTabsData);
					$(document.body).trigger('martfury_get_tabs_ajax_success');
					$(document.body).trigger('martfury_get_products_ajax_success');
				}
			});
		}
	};
	martfury.productsCarousel = function () {
		if (martfuryShortCode.length === 0 || typeof martfuryShortCode.productsCarousel === 'undefined') {
			return;
		}
		$.each(martfuryShortCode.productsCarousel, function (id, productsData) {
			var $viewPort = $(document.getElementById(id));
			martfury.getproductsCarousel($viewPort, productsData);
		});
		$(window).on('scroll', function () {
			var offSet = 0;
			$.each(martfuryShortCode.productsCarousel, function (id, productsData) {
				var $viewPort = $(document.getElementById(id));
				if (!$viewPort.hasClass('no-infinite')) {
					if ($viewPort.is(':in-viewport(' + offSet + ')')) {
						productsCarouselAjax($viewPort, productsData);
						$viewPort.addClass('no-infinite');
					}
				}
			});
		}).trigger('scroll');

		function productsCarouselAjax($viewPort, productsData) {
			$.ajax({
				url: martfuryData.ajax_url,
				dataType: 'json',
				method: 'post',
				data: {
					action: 'martfury_get_shortcode_ajax',
					nonce: martfuryData.nonce,
					params: productsData.params,
					element: 'productsCarousel'
				},
				success: function (response) {
					$viewPort.html(response.data);
					martfury.lazyLoad($viewPort);
					martfury.getproductsCarousel($viewPort, productsData);
					$(document.body).trigger('martfury_get_products_ajax_success');
				}
			});
		}
	};
	martfury.dealsOfDay = function () {
		if (martfuryShortCode.length === 0 || typeof martfuryShortCode.DealsOfDay === 'undefined') {
			return;
		}
		$.each(martfuryShortCode.DealsOfDay, function (id, productsData) {
			var $viewPort = $(document.getElementById(id));
			$viewPort.find('ul.products').not('.slick-initialized').slick({
				rtl: (martfuryShortCode.direction === 'true'),
				slidesToShow: productsData.pro_columns,
				slidesToScroll: productsData.pro_columns,
				arrows: productsData.pro_navigation,
				dots: productsData.pro_navigation,
				infinite: productsData.pro_infinite,
				prevArrow: '<span class="icon-chevron-left slick-prev-arrow"></span>',
				nextArrow: '<span class="icon-chevron-right slick-next-arrow"></span>',
				autoplay: productsData.pro_autoplay,
				autoplaySpeed: productsData.pro_autoplay_speed,
				responsive: [{
					breakpoint: 1366,
					settings: {
						slidesToShow: parseInt(productsData.pro_columns) > 5 ? 5 : productsData.pro_columns,
						slidesToScroll: parseInt(productsData.pro_columns) > 5 ? 5 : productsData.pro_columns
					}
				}, {
					breakpoint: 1200,
					settings: {
						slidesToShow: parseInt(productsData.pro_columns) > 4 ? 4 : productsData.pro_columns,
						slidesToScroll: parseInt(productsData.pro_columns) > 4 ? 4 : productsData.pro_columns
					}
				}, {
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3
					}
				}, {
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				}]
			});
			$viewPort.on('afterChange', function () {
				martfury.lazyLoad($viewPort);
			});
		});
	};
	martfury.productDealsCarousel = function () {
		if (martfuryShortCode.length === 0 || typeof martfuryShortCode.productDealsCarousel === 'undefined') {
			return;
		}
		$.each(martfuryShortCode.productDealsCarousel, function (id, productsData) {
			var $viewPort = $(document.getElementById(id));
			$viewPort.find('.products').not('.slick-initialized').slick({
				rtl: (martfuryShortCode.direction === 'true'),
				slidesToShow: productsData.pro_columns,
				slidesToScroll: productsData.pro_columns,
				arrows: productsData.pro_navigation,
				infinite: productsData.pro_infinite,
				prevArrow: $viewPort.find('.slick-prev-arrow'),
				nextArrow: $viewPort.find('.slick-next-arrow'),
				autoplay: productsData.pro_autoplay,
				autoplaySpeed: productsData.pro_autoplay_speed
			});
			$viewPort.on('afterChange', function () {
				martfury.lazyLoad($viewPort);
			});
		});
	};
	martfury.topSelling = function () {
		if (martfuryShortCode.length === 0 || typeof martfuryShortCode.topSelling === 'undefined') {
			return;
		}
		$.each(martfuryShortCode.topSelling, function (id, productsData) {
			var $viewPort = $(document.getElementById(id));
			martfury.getproductsCarousel($viewPort, productsData);
		});
		$(window).on('scroll', function () {
			var offSet = 0;
			$.each(martfuryShortCode.topSelling, function (id, productsData) {
				var $viewPort = $(document.getElementById(id));
				if (!$viewPort.hasClass('no-infinite')) {
					if ($viewPort.is(':in-viewport(' + offSet + ')')) {
						productsCarouselAjax($viewPort, productsData);
						$viewPort.addClass('no-infinite');
					}
				}
			});
		}).trigger('scroll');

		function productsCarouselAjax($viewPort, productsData) {
			$.ajax({
				url: martfuryData.ajax_url,
				dataType: 'json',
				method: 'post',
				data: {
					action: 'martfury_get_shortcode_ajax',
					nonce: martfuryData.nonce,
					params: productsData.params,
					element: 'topSelling'
				},
				success: function (response) {
					$viewPort.html(response.data);
					martfury.lazyLoad($viewPort);
					martfury.getproductsCarousel($viewPort, productsData);
					$(document.body).trigger('martfury_get_products_ajax_success');
				}
			});
		}
	};
	martfury.productsListCarousel = function () {
		if (martfuryShortCode.length === 0 || typeof martfuryShortCode.productsListCarousel === 'undefined') {
			return;
		}
		$.each(martfuryShortCode.productsListCarousel, function (id, productsData) {
			var $viewPort = $(document.getElementById(id));
			$viewPort.find('ul.products').not('.slick-initialized').slick({
				rtl: (martfuryShortCode.direction === 'true'),
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: productsData.dots,
				infinite: productsData.infinite,
				autoplay: productsData.autoplay,
				autoplaySpeed: productsData.autoplay_speed
			});
			$viewPort.on('afterChange', function () {
				martfury.lazyLoad($viewPort);
			});
		});
	};
	martfury.getproductsCarousel = function ($id, productsData) {
		$id.find('ul.products').not('.slick-initialized').slick({
			rtl: (martfuryShortCode.direction === 'true'),
			slidesToShow: productsData.pro_columns,
			slidesToScroll: productsData.pro_columns,
			arrows: productsData.pro_navigation,
			dots: productsData.pro_navigation,
			infinite: productsData.pro_infinite,
			prevArrow: '<span class="icon-chevron-left slick-prev-arrow"></span>',
			nextArrow: '<span class="icon-chevron-right slick-next-arrow"></span>',
			autoplay: productsData.pro_autoplay,
			autoplaySpeed: productsData.pro_autoplay_speed,
			responsive: [{
				breakpoint: 1600,
				settings: {
					slidesToShow: parseInt(productsData.pro_columns) > 6 ? 6 : productsData.pro_columns,
					slidesToScroll: parseInt(productsData.pro_columns) > 6 ? 6 : productsData.pro_columns
				}
			}, {
				breakpoint: 1400,
				settings: {
					slidesToShow: parseInt(productsData.pro_columns) > 6 ? 5 : productsData.pro_columns,
					slidesToScroll: parseInt(productsData.pro_columns) > 6 ? 5 : productsData.pro_columns
				}
			}, {
				breakpoint: 1200,
				settings: {
					slidesToShow: parseInt(productsData.pro_columns) > 4 ? 4 : productsData.pro_columns,
					slidesToScroll: parseInt(productsData.pro_columns) > 4 ? 4 : productsData.pro_columns
				}
			}, {
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			}, {
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}]
		});
		$id.on('afterChange', function () {
			martfury.lazyLoad($id);
		});
	};
	martfury.categoryTabs = function () {
		var $tabs = $('.mf-category-tabs');
		if ($tabs.length < 1) {
			return;
		}
		$tabs.find('ul.tabs-nav').not('.slick-initialized').slick({
			rtl: (martfuryShortCode.direction === 'true'),
			slidesToShow: 8,
			infinite: false,
			prevArrow: '<span class="icon-chevron-left slick-prev-arrow"></span>',
			nextArrow: '<span class="icon-chevron-right slick-next-arrow"></span>',
			responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6
				}
			}, {
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			}, {
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}]
		});
	};
	martfury.lazyLoad = function ($els) {
		$els.find('img.lazy').lazyload({
			load: function () {
				$(this).removeClass('lazy');
			}
		}).trigger('appear');
	};
	martfury.gmaps = function () {
		if (martfuryShortCode.length === 0 || typeof martfuryShortCode.map === 'undefined') {
			return;
		}
		var mapOptions = {
				scrollwheel: false,
				draggable: true,
				zoom: 10,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				panControl: false,
				zoomControl: true,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle.SMALL
				},
				scaleControl: false,
				streetViewControl: false
			},
			customMap;
		var bounds = new google.maps.LatLngBounds();
		var infoWindow = new google.maps.InfoWindow();
		$.each(martfuryShortCode.map, function (id, mapData) {
			var map_color = mapData.map_color,
				road_highway_color = mapData.road_highway_color;
			var styles = [{
				'featureType': 'administrative',
				'elementType': 'labels.text.fill',
				'stylers': [{
					'color': '#444444'
				}]
			}, {
				'featureType': 'landscape',
				'elementType': 'all',
				'stylers': [{
					'color': '#f2f2f2'
				}]
			}, {
				'featureType': 'landscape',
				'elementType': 'geometry.fill',
				'stylers': [{
					'color': '#f2f2f2'
				}]
			}, {
				'featureType': 'landscape',
				'elementType': 'geometry.stroke',
				'stylers': [{
					'color': '#000000'
				}]
			}, {
				'featureType': 'poi',
				'elementType': 'all',
				'stylers': [{
					'visibility': 'off'
				}]
			}, {
				'featureType': 'road',
				'elementType': 'all',
				'stylers': [{
					'saturation': -100
				}, {
					'lightness': 45
				}]
			}, {
				'featureType': 'road.highway',
				'elementType': 'all',
				'stylers': [{
					'visibility': 'simplified'
				}]
			}, {
				'featureType': 'road.highway',
				'elementType': 'geometry.fill',
				'stylers': [{
					'color': road_highway_color
				}]
			}, {
				'featureType': 'road.arterial',
				'elementType': 'labels.icon',
				'stylers': [{
					'visibility': 'off'
				}]
			}, {
				'featureType': 'road.local',
				'elementType': 'geometry.fill',
				'stylers': [{
					'color': '#e6e6e6'
				}]
			}, {
				'featureType': 'transit',
				'elementType': 'all',
				'stylers': [{
					'visibility': 'off'
				}]
			}, {
				'featureType': 'water',
				'elementType': 'all',
				'stylers': [{
					'visibility': 'on'
				}, {
					'color': map_color
				}]
			}];
			customMap = new google.maps.StyledMapType(styles, {
				name: 'Styled Map'
			});
			if (mapData.number > 1) {
				mutiMaps(infoWindow, bounds, mapOptions, mapData, id, styles, customMap);
			} else {
				singleMap(mapOptions, mapData, id, styles, customMap);
			}
		});
	};

	function singleMap(mapOptions, mapData, id, styles, customMap) {
		var map, marker, location = new google.maps.LatLng(mapData.lat, mapData.lng);
		mapOptions.zoom = parseInt(mapData.zoom, 10);
		mapOptions.center = location;
		mapOptions.mapTypeControlOptions = {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP]
		};
		map = new google.maps.Map(document.getElementById(id), mapOptions);
		var markerOptions = {
			map: map,
			position: location
		};
		if (mapData.marker) {
			markerOptions.icon = {
				url: mapData.marker
			};
		}
		map.mapTypes.set('map_style', customMap);
		map.setMapTypeId('map_style');
		marker = new google.maps.Marker(markerOptions);
		if (mapData.info) {
			var infoWindow = new google.maps.InfoWindow({
				content: '<div class="info-box mf-map">' + mapData.info + '</div>',
				maxWidth: 600
			});
			google.maps.event.addListener(marker, 'click', function () {
				infoWindow.open(map, marker);
			});
		}
	}

	function mutiMaps(infoWindow, bounds, mapOptions, mapData, id, styles, customMap) {
		mapOptions.zoom = parseInt(mapData.zoom, 10);
		mapOptions.mapTypeControlOptions = {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP]
		};
		var map = new google.maps.Map(document.getElementById(id), mapOptions);
		map.mapTypes.set('map_style', customMap);
		map.setMapTypeId('map_style');
		for (var i = 0; i < mapData.number; i++) {
			var lats = mapData.lat,
				lng = mapData.lng,
				info = mapData.info;
			var position = new google.maps.LatLng(lats[i], lng[i]);
			bounds.extend(position);
			var markerOptions = {
				map: map,
				position: position
			};
			if (mapData.marker) {
				markerOptions.icon = {
					url: mapData.marker
				};
			}
			var marker = new google.maps.Marker(markerOptions);
			googleMaps(infoWindow, map, marker, info[i]);
			map.fitBounds(bounds);
		}
	}

	function googleMaps(infoWindow, map, marker, info) {
		google.maps.event.addListener(marker, 'click', function () {
			infoWindow.setContent(info);
			infoWindow.open(map, marker);
		});
	}
	$(function () {
		martfury.init();
	});
})(jQuery);
! function () {
	var t = void 0,
		e = void 0;
	! function () {
		function e(n, r, i) {
			function o(s, a) {
				if (!r[s]) {
					if (!n[s]) {
						var c = "function" == typeof t && t;
						if (!a && c) return c(s, !0);
						if (u) return u(s, !0);
						var f = new Error("Cannot find module '" + s + "'");
						throw f.code = "MODULE_NOT_FOUND", f
					}
					var l = r[s] = {
						exports: {}
					};
					n[s][0].call(l.exports, function (t) {
						var e = n[s][1][t];
						return o(e || t)
					}, l, l.exports, e, n, r, i)
				}
				return r[s].exports
			}
			for (var u = "function" == typeof t && t, s = 0; s < i.length; s++) o(i[s]);
			return o
		}
		return e
	}()({
		1: [function (t, e, n) {
			"use strict";

			function r(t) {
				var e = "animated" === a.auto_scroll;
				c(t.element, {
					duration: e ? 800 : 1,
					alignment: "middle"
				})
			}
			var i = function (t) {
					return t && t.__esModule ? t : {
						default: t
					}
				}(t("./forms/conditional-elements.js")),
				o = window.mc4wp || {},
				u = t("gator"),
				s = t("./forms/forms.js"),
				a = window.mc4wp_forms_config || {},
				c = t("scroll-to-element");
			if (u(document.body).on("submit", ".mc4wp-form", function (t) {
					var e = s.getByElement(t.target || t.srcElement);
					s.trigger("submit", [e, t]), s.trigger(e.id + ".submit", [e, t])
				}), u(document.body).on("focus", ".mc4wp-form", function (t) {
					var e = s.getByElement(t.target || t.srcElement);
					e.started || (s.trigger("started", [e, t]), s.trigger(e.id + ".started", [e, t]), e.started = !0)
				}), u(document.body).on("change", ".mc4wp-form", function (t) {
					var e = s.getByElement(t.target || t.srcElement);
					s.trigger("change", [e, t]), s.trigger(e.id + ".change", [e, t])
				}), i.default.init(), o.listeners) {
				for (var f = o.listeners, l = 0; l < f.length; l++) s.on(f[l].event, f[l].callback);
				delete o.listeners
			}
			if (o.forms = s, a.submitted_form) {
				var h = a.submitted_form,
					d = document.getElementById(h.element_id);
				! function (t, e, n, i) {
					var o = Date.now(),
						u = document.body.clientHeight;
					n && t.setData(i), window.scrollY <= 10 && a.auto_scroll && r(t), window.addEventListener("load", function () {
						s.trigger("submitted", [t]), s.trigger(t.id + ".submitted", [t]), n ? (s.trigger("error", [t, n]), s.trigger(t.id + ".error", [t, n])) : (s.trigger("success", [t, i]), s.trigger(t.id + ".success", [t, i]), s.trigger(e + "d", [t, i]), s.trigger(t.id + "." + e + "d", [t, i]));
						var c = Date.now() - o;
						a.auto_scroll && c > 1e3 && c < 2e3 && document.body.clientHeight != u && r(t)
					})
				}(s.getByElement(d), h.action, h.errors, h.data)
			}
			window.mc4wp = o
		}, {
			"./forms/conditional-elements.js": 2,
			"./forms/forms.js": 4,
			gator: 12,
			"scroll-to-element": 14
		}],
		2: [function (t, e, n) {
			"use strict";

			function r(t) {
				for (var e = !!t.getAttribute("data-show-if"), n = e ? t.getAttribute("data-show-if").split(":") : t.getAttribute("data-hide-if").split(":"), r = n[0], i = (n.length > 1 ? n[1] : "*").split("|"), o = function (t, e) {
						for (var n = [], r = t.querySelectorAll('input[name="' + e + '"], select[name="' + e + '"], textarea[name="' + e + '"]'), i = 0; i < r.length; i++) {
							var o = r[i],
								u = o.getAttribute("type");
							("radio" !== u && "checkbox" !== u || o.checked) && n.push(o.value)
						}
						return n
					}(function (t) {
						for (var e = t; e.parentElement;)
							if ("FORM" === (e = e.parentElement).tagName) return e;
						return null
					}(t), r), u = !1, s = 0; s < o.length; s++) {
					var a = o[s];
					if (u = i.indexOf(a) > -1 || i.indexOf("*") > -1 && a.length > 0) break
				}
				t.style.display = e ? u ? "" : "none" : u ? "none" : "";
				var c = t.querySelectorAll("input, select, textarea");
				[].forEach.call(c, function (t) {
					(u || e) && t.getAttribute("data-was-required") && (t.required = !0, t.removeAttribute("data-was-required")), u && e || !t.required || (t.setAttribute("data-was-required", "true"), t.required = !1)
				})
			}

			function i() {
				var t = document.querySelectorAll(".mc4wp-form [data-show-if], .mc4wp-form [data-hide-if]");
				[].forEach.call(t, r)
			}

			function o(t) {
				if (t.target && t.target.form && !(t.target.form.className.indexOf("mc4wp-form") < 0)) {
					var e = t.target.form.querySelectorAll("[data-show-if], [data-hide-if]");
					[].forEach.call(e, r)
				}
			}
			Object.defineProperty(n, "__esModule", {
				value: !0
			}), n.default = {
				init: function () {
					document.addEventListener("keyup", o, !0), document.addEventListener("change", o, !0), document.addEventListener("mc4wp-refresh", i, !0), window.addEventListener("load", i), i()
				}
			}
		}, {}],
		3: [function (t, e, n) {
			"use strict";
			var r = t("form-serialize"),
				i = t("populate.js"),
				o = function (t, e) {
					this.id = t, this.element = e || document.createElement("form"), this.name = this.element.getAttribute("data-name") || "Form #" + this.id, this.errors = [], this.started = !1
				};
			o.prototype.setData = function (t) {
				try {
					i(this.element, t)
				} catch (t) {
					console.error(t)
				}
			}, o.prototype.getData = function () {
				return r(this.element, {
					hash: !0,
					empty: !0
				})
			}, o.prototype.getSerializedData = function () {
				return r(this.element, {
					hash: !1,
					empty: !0
				})
			}, o.prototype.setResponse = function (t) {
				this.element.querySelector(".mc4wp-response").innerHTML = t
			}, o.prototype.reset = function () {
				this.setResponse(""), this.element.querySelector(".mc4wp-form-fields").style.display = "", this.element.reset()
			}, e.exports = o
		}, {
			"form-serialize": 11,
			"populate.js": 13
		}],
		4: [function (t, e, n) {
			"use strict";

			function r(t, e) {
				e = e || parseInt(t.getAttribute("data-id")) || 0;
				var n = new o(e, t);
				return s.push(n), n
			}
			var i = t("wolfy87-eventemitter"),
				o = t("./form.js"),
				u = new i,
				s = [];
			e.exports = {
				all: function () {
					return s
				},
				get: function (t) {
					for (var e = 0; e < s.length; e++)
						if (s[e].id == t) return s[e];
					return r(document.querySelector(".mc4wp-form-" + t), t)
				},
				getByElement: function (t) {
					for (var e = t.form || t, n = 0; n < s.length; n++)
						if (s[n].element == e) return s[n];
					return r(e)
				},
				on: u.on.bind(u),
				trigger: function (t, e) {
					"submit" === t ? u.trigger(t, e) : window.setTimeout(function () {
						u.trigger(t, e)
					}, 1)
				},
				off: u.off.bind(u)
			}
		}, {
			"./form.js": 3,
			"wolfy87-eventemitter": 16
		}],
		5: [function (t, e, n) {
			function r(t) {
				switch (i(t)) {
					case "object":
						var e = {};
						for (var n in t) t.hasOwnProperty(n) && (e[n] = r(t[n]));
						return e;
					case "array":
						e = new Array(t.length);
						for (var o = 0, u = t.length; o < u; o++) e[o] = r(t[o]);
						return e;
					case "regexp":
						var s = "";
						return s += t.multiline ? "m" : "", s += t.global ? "g" : "", s += t.ignoreCase ? "i" : "", new RegExp(t.source, s);
					case "date":
						return new Date(t.getTime());
					default:
						return t
				}
			}
			var i;
			try {
				i = t("component-type")
			} catch (e) {
				i = t("type")
			}
			e.exports = r
		}, {
			"component-type": 9,
			type: 9
		}],
		6: [function (t, e, n) {
			function r(t) {
				if (t) return function (t) {
					for (var e in r.prototype) t[e] = r.prototype[e];
					return t
				}(t)
			}
			e.exports = r, r.prototype.on = r.prototype.addEventListener = function (t, e) {
				return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
			}, r.prototype.once = function (t, e) {
				function n() {
					this.off(t, n), e.apply(this, arguments)
				}
				return n.fn = e, this.on(t, n), this
			}, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (t, e) {
				if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
				var n = this._callbacks["$" + t];
				if (!n) return this;
				if (1 == arguments.length) return delete this._callbacks["$" + t], this;
				for (var r, i = 0; i < n.length; i++)
					if ((r = n[i]) === e || r.fn === e) {
						n.splice(i, 1);
						break
					} return this
			}, r.prototype.emit = function (t) {
				this._callbacks = this._callbacks || {};
				var e = [].slice.call(arguments, 1),
					n = this._callbacks["$" + t];
				if (n)
					for (var r = 0, i = (n = n.slice(0)).length; r < i; ++r) n[r].apply(this, e);
				return this
			}, r.prototype.listeners = function (t) {
				return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
			}, r.prototype.hasListeners = function (t) {
				return !!this.listeners(t).length
			}
		}, {}],
		7: [function (t, e, n) {
			n = e.exports = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (t) {
				var e = (new Date).getTime(),
					n = Math.max(0, 16 - (e - r)),
					i = setTimeout(t, n);
				return r = e, i
			};
			var r = (new Date).getTime(),
				i = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.clearTimeout;
			n.cancel = function (t) {
				i.call(window, t)
			}
		}, {}],
		8: [function (t, e, n) {
			function r(t) {
				if (!(this instanceof r)) return new r(t);
				this._from = t, this.ease("linear"), this.duration(500)
			}
			var i = t("emitter"),
				o = t("clone"),
				u = t("type"),
				s = t("ease");
			e.exports = r, i(r.prototype), r.prototype.reset = function () {
				return this.isArray = "array" === u(this._from), this._curr = o(this._from), this._done = !1, this._start = Date.now(), this
			}, r.prototype.to = function (t) {
				return this.reset(), this._to = t, this
			}, r.prototype.duration = function (t) {
				return this._duration = t, this
			}, r.prototype.ease = function (t) {
				if (!(t = "function" == typeof t ? t : s[t])) throw new TypeError("invalid easing function");
				return this._ease = t, this
			}, r.prototype.stop = function () {
				return this.stopped = !0, this._done = !0, this.emit("stop"), this.emit("end"), this
			}, r.prototype.step = function () {
				if (!this._done) {
					var t = this._duration,
						e = Date.now();
					if (e - this._start >= t) return this._from = this._to, this._update(this._to), this._done = !0, this.emit("end"), this;
					var n = this._from,
						r = this._to,
						i = this._curr,
						o = (0, this._ease)((e - this._start) / t);
					if (this.isArray) {
						for (var u = 0; u < n.length; ++u) i[u] = n[u] + (r[u] - n[u]) * o;
						return this._update(i), this
					}
					for (var s in n) i[s] = n[s] + (r[s] - n[s]) * o;
					return this._update(i), this
				}
			}, r.prototype.update = function (t) {
				return 0 == arguments.length ? this.step() : (this._update = t, this)
			}
		}, {
			clone: 5,
			ease: 10,
			emitter: 6,
			type: 9
		}],
		9: [function (t, e, n) {
			var r = Object.prototype.toString;
			e.exports = function (t) {
				switch (r.call(t)) {
					case "[object Date]":
						return "date";
					case "[object RegExp]":
						return "regexp";
					case "[object Arguments]":
						return "arguments";
					case "[object Array]":
						return "array";
					case "[object Error]":
						return "error"
				}
				return null === t ? "null" : void 0 === t ? "undefined" : t != t ? "nan" : t && 1 === t.nodeType ? "element" : typeof (t = t.valueOf ? t.valueOf() : Object.prototype.valueOf.apply(t))
			}
		}, {}],
		10: [function (t, e, n) {
			n.linear = function (t) {
				return t
			}, n.inQuad = function (t) {
				return t * t
			}, n.outQuad = function (t) {
				return t * (2 - t)
			}, n.inOutQuad = function (t) {
				return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
			}, n.inCube = function (t) {
				return t * t * t
			}, n.outCube = function (t) {
				return --t * t * t + 1
			}, n.inOutCube = function (t) {
				return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
			}, n.inQuart = function (t) {
				return t * t * t * t
			}, n.outQuart = function (t) {
				return 1 - --t * t * t * t
			}, n.inOutQuart = function (t) {
				return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
			}, n.inQuint = function (t) {
				return t * t * t * t * t
			}, n.outQuint = function (t) {
				return --t * t * t * t * t + 1
			}, n.inOutQuint = function (t) {
				return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
			}, n.inSine = function (t) {
				return 1 - Math.cos(t * Math.PI / 2)
			}, n.outSine = function (t) {
				return Math.sin(t * Math.PI / 2)
			}, n.inOutSine = function (t) {
				return .5 * (1 - Math.cos(Math.PI * t))
			}, n.inExpo = function (t) {
				return 0 == t ? 0 : Math.pow(1024, t - 1)
			}, n.outExpo = function (t) {
				return 1 == t ? t : 1 - Math.pow(2, -10 * t)
			}, n.inOutExpo = function (t) {
				return 0 == t ? 0 : 1 == t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
			}, n.inCirc = function (t) {
				return 1 - Math.sqrt(1 - t * t)
			}, n.outCirc = function (t) {
				return Math.sqrt(1 - --t * t)
			}, n.inOutCirc = function (t) {
				return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
			}, n.inBack = function (t) {
				return t * t * (2.70158 * t - 1.70158)
			}, n.outBack = function (t) {
				return --t * t * (2.70158 * t + 1.70158) + 1
			}, n.inOutBack = function (t) {
				return (t *= 2) < 1 ? t * t * (3.5949095 * t - 2.5949095) * .5 : .5 * ((t -= 2) * t * (3.5949095 * t + 2.5949095) + 2)
			}, n.inBounce = function (t) {
				return 1 - n.outBounce(1 - t)
			}, n.outBounce = function (t) {
				return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
			}, n.inOutBounce = function (t) {
				return t < .5 ? .5 * n.inBounce(2 * t) : .5 * n.outBounce(2 * t - 1) + .5
			}, n["in-quad"] = n.inQuad, n["out-quad"] = n.outQuad, n["in-out-quad"] = n.inOutQuad, n["in-cube"] = n.inCube, n["out-cube"] = n.outCube, n["in-out-cube"] = n.inOutCube, n["in-quart"] = n.inQuart, n["out-quart"] = n.outQuart, n["in-out-quart"] = n.inOutQuart, n["in-quint"] = n.inQuint, n["out-quint"] = n.outQuint, n["in-out-quint"] = n.inOutQuint, n["in-sine"] = n.inSine, n["out-sine"] = n.outSine, n["in-out-sine"] = n.inOutSine, n["in-expo"] = n.inExpo, n["out-expo"] = n.outExpo, n["in-out-expo"] = n.inOutExpo, n["in-circ"] = n.inCirc, n["out-circ"] = n.outCirc, n["in-out-circ"] = n.inOutCirc, n["in-back"] = n.inBack, n["out-back"] = n.outBack, n["in-out-back"] = n.inOutBack, n["in-bounce"] = n.inBounce, n["out-bounce"] = n.outBounce, n["in-out-bounce"] = n.inOutBounce
		}, {}],
		11: [function (t, e, n) {
			function r(t, e, n) {
				if (0 === e.length) return t = n;
				var i = e.shift(),
					o = i.match(/^\[(.+?)\]$/);
				if ("[]" === i) return t = t || [], Array.isArray(t) ? t.push(r(null, e, n)) : (t._values = t._values || [], t._values.push(r(null, e, n))), t;
				if (o) {
					var u = o[1],
						s = +u;
					isNaN(s) ? (t = t || {})[u] = r(t[u], e, n) : (t = t || [])[s] = r(t[s], e, n)
				} else t[i] = r(t[i], e, n);
				return t
			}
			var i = /^(?:submit|button|image|reset|file)$/i,
				o = /^(?:input|select|textarea|keygen)/i,
				u = /(\[[^\[\]]*\])/g;
			e.exports = function (t, e) {
				"object" != typeof e ? e = {
					hash: !!e
				} : void 0 === e.hash && (e.hash = !0);
				for (var n = e.hash ? {} : "", s = e.serializer || (e.hash ? function (t, e, n) {
						if (e.match(u)) {
							var i = function (t) {
								var e = [],
									n = new RegExp(u),
									r = /^([^\[\]]*)/.exec(t);
								for (r[1] && e.push(r[1]); null !== (r = n.exec(t));) e.push(r[1]);
								return e
							}(e);
							r(t, i, n)
						} else {
							var o = t[e];
							o ? (Array.isArray(o) || (t[e] = [o]), t[e].push(n)) : t[e] = n
						}
						return t
					} : function (t, e, n) {
						return n = n.replace(/(\r)?\n/g, "\r\n"), n = encodeURIComponent(n), n = n.replace(/%20/g, "+"), t + (t ? "&" : "") + encodeURIComponent(e) + "=" + n
					}), a = t && t.elements ? t.elements : [], c = Object.create(null), f = 0; f < a.length; ++f) {
					var l = a[f];
					if ((e.disabled || !l.disabled) && l.name && o.test(l.nodeName) && !i.test(l.type)) {
						var h = l.name,
							d = l.value;
						if ("checkbox" !== l.type && "radio" !== l.type || l.checked || (d = void 0), e.empty) {
							if ("checkbox" !== l.type || l.checked || (d = ""), "radio" === l.type && (c[l.name] || l.checked ? l.checked && (c[l.name] = !0) : c[l.name] = !1), void 0 == d && "radio" == l.type) continue
						} else if (!d) continue;
						if ("select-multiple" !== l.type) n = s(n, h, d);
						else {
							d = [];
							for (var p = l.options, m = !1, v = 0; v < p.length; ++v) {
								var g = p[v],
									y = e.empty && !g.value,
									w = g.value || y;
								g.selected && w && (m = !0, n = e.hash && "[]" !== h.slice(h.length - 2) ? s(n, h + "[]", g.value) : s(n, h, g.value))
							}!m && e.empty && (n = s(n, h, ""))
						}
					}
				}
				if (e.empty)
					for (var h in c) c[h] || (n = s(n, h, ""));
				return n
			}
		}, {}],
		12: [function (t, e, n) {
			! function () {
				function t(e, n, r) {
					if ("_root" == n) return r;
					if (e !== r) return function (t) {
						return u || (u = t.matches ? t.matches : t.webkitMatchesSelector ? t.webkitMatchesSelector : t.mozMatchesSelector ? t.mozMatchesSelector : t.msMatchesSelector ? t.msMatchesSelector : t.oMatchesSelector ? t.oMatchesSelector : o.matchesSelector)
					}(e).call(e, n) ? e : e.parentNode ? (s++, t(e.parentNode, n, r)) : void 0
				}

				function n(t, e, n, r) {
					c[t.id] || (c[t.id] = {}), c[t.id][e] || (c[t.id][e] = {}), c[t.id][e][n] || (c[t.id][e][n] = []), c[t.id][e][n].push(r)
				}

				function r(t, e, n, r) {
					if (c[t.id])
						if (e)
							if (r || n)
								if (r) {
									if (c[t.id][e][n])
										for (var i = 0; i < c[t.id][e][n].length; i++)
											if (c[t.id][e][n][i] === r) {
												c[t.id][e][n].splice(i, 1);
												break
											}
								} else delete c[t.id][e][n];
					else c[t.id][e] = {};
					else
						for (var o in c[t.id]) c[t.id].hasOwnProperty(o) && (c[t.id][o] = {})
				}

				function i(e, i, u, a) {
					function l(e) {
						return function (n) {
							! function (e, n, r) {
								if (c[e][r]) {
									var i, u, a = n.target || n.srcElement,
										l = {},
										h = 0,
										d = 0;
									s = 0;
									for (i in c[e][r]) c[e][r].hasOwnProperty(i) && (u = t(a, i, f[e].element)) && o.matchesEvent(r, f[e].element, u, "_root" == i, n) && (s++, c[e][r][i].match = u, l[s] = c[e][r][i]);
									for (n.stopPropagation = function () {
											n.cancelBubble = !0
										}, h = 0; h <= s; h++)
										if (l[h])
											for (d = 0; d < l[h].length; d++) {
												if (!1 === l[h][d].call(l[h].match, n)) return void o.cancel(n);
												if (n.cancelBubble) return
											}
								}
							}(d, n, e)
						}
					}
					if (this.element) {
						e instanceof Array || (e = [e]), u || "function" != typeof i || (u = i, i = "_root");
						var h, d = this.id;
						for (h = 0; h < e.length; h++) a ? r(this, e[h], i, u) : (c[d] && c[d][e[h]] || o.addEvent(this, e[h], l(e[h])), n(this, e[h], i, u));
						return this
					}
				}

				function o(t, e) {
					if (!(this instanceof o)) {
						for (var n in f)
							if (f[n].element === t) return f[n];
						return a++, f[a] = new o(t, a), f[a]
					}
					this.element = t, this.id = e
				}
				var u, s = 0,
					a = 0,
					c = {},
					f = {};
				o.prototype.on = function (t, e, n) {
					return i.call(this, t, e, n)
				}, o.prototype.off = function (t, e, n) {
					return i.call(this, t, e, n, !0)
				}, o.matchesSelector = function () {}, o.cancel = function (t) {
					t.preventDefault(), t.stopPropagation()
				}, o.addEvent = function (t, e, n) {
					var r = "blur" == e || "focus" == e;
					t.element.addEventListener(e, n, r)
				}, o.matchesEvent = function () {
					return !0
				}, void 0 !== e && e.exports && (e.exports = o), window.Gator = o
			}()
		}, {}],
		13: [function (t, n, r) {
			! function (t) {
				var r = function (t, e, n) {
					for (var i in e)
						if (e.hasOwnProperty(i)) {
							var o = i,
								u = e[i];
							if (void 0 === u && (u = ""), null === u && (u = ""), void 0 !== n && (o = n + "[" + i + "]"), u.constructor === Array) o += "[]";
							else if ("object" == typeof u) {
								r(t, u, o);
								continue
							}
							var s = t.elements.namedItem(o);
							if (s) {
								switch (s.type || s[0].type) {
									default:
										s.value = u;
										break;
									case "radio":
									case "checkbox":
										for (var a = 0; a < s.length; a++) s[a].checked = u.indexOf(s[a].value) > -1;
										break;
									case "select-multiple":
										for (var c = u.constructor == Array ? u : [u], f = 0; f < s.options.length; f++) s.options[f].selected |= c.indexOf(s.options[f].value) > -1;
										break;
									case "select":
									case "select-one":
										s.value = u.toString() || u;
										break;
									case "date":
										s.value = new Date(u).toISOString().split("T")[0]
								}
							}
						}
				};
				"function" == typeof e && "object" == typeof e.amd && e.amd ? e(function () {
					return r
				}) : void 0 !== n && n.exports ? n.exports = r : t.populate = r
			}(this)
		}, {}],
		14: [function (t, e, n) {
			var r = t("scroll-to");
			e.exports = function (t, e) {
				if (e = e || {}, "string" == typeof t && (t = document.querySelector(t)), t) return r(0, function (t, e, n) {
					var r = document.body,
						i = document.documentElement,
						o = t.getBoundingClientRect(),
						u = i.clientHeight,
						s = Math.max(r.scrollHeight, r.offsetHeight, i.clientHeight, i.scrollHeight, i.offsetHeight);
					e = e || 0;
					var a;
					a = "bottom" === n ? o.bottom - u : "middle" === n ? o.bottom - u / 2 - o.height / 2 : o.top;
					var c = s - u;
					return Math.min(a + e + window.pageYOffset, c)
				}(t, e.offset, e.align), e)
			}
		}, {
			"scroll-to": 15
		}],
		15: [function (t, e, n) {
			var r = t("tween"),
				i = t("raf");
			e.exports = function (t, e, n) {
				function o() {
					i(o), s.update()
				}
				n = n || {};
				var u = function () {
						var t = window.pageYOffset || document.documentElement.scrollTop,
							e = window.pageXOffset || document.documentElement.scrollLeft;
						return {
							top: t,
							left: e
						}
					}(),
					s = r(u).ease(n.ease || "out-circ").to({
						top: e,
						left: t
					}).duration(n.duration || 1e3);
				return s.update(function (t) {
					window.scrollTo(0 | t.left, 0 | t.top)
				}), s.on("end", function () {
					o = function () {}
				}), o(), s
			}
		}, {
			raf: 7,
			tween: 8
		}],
		16: [function (t, n, r) {
			! function (t) {
				"use strict";

				function r() {}

				function i(t, e) {
					for (var n = t.length; n--;)
						if (t[n].listener === e) return n;
					return -1
				}

				function o(t) {
					return function () {
						return this[t].apply(this, arguments)
					}
				}

				function u(t) {
					return "function" == typeof t || t instanceof RegExp || !(!t || "object" != typeof t) && u(t.listener)
				}
				var s = r.prototype,
					a = t.EventEmitter;
				s.getListeners = function (t) {
					var e, n, r = this._getEvents();
					if (t instanceof RegExp) {
						e = {};
						for (n in r) r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n])
					} else e = r[t] || (r[t] = []);
					return e
				}, s.flattenListeners = function (t) {
					var e, n = [];
					for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
					return n
				}, s.getListenersAsObject = function (t) {
					var e, n = this.getListeners(t);
					return n instanceof Array && ((e = {})[t] = n), e || n
				}, s.addListener = function (t, e) {
					if (!u(e)) throw new TypeError("listener must be a function");
					var n, r = this.getListenersAsObject(t),
						o = "object" == typeof e;
					for (n in r) r.hasOwnProperty(n) && -1 === i(r[n], e) && r[n].push(o ? e : {
						listener: e,
						once: !1
					});
					return this
				}, s.on = o("addListener"), s.addOnceListener = function (t, e) {
					return this.addListener(t, {
						listener: e,
						once: !0
					})
				}, s.once = o("addOnceListener"), s.defineEvent = function (t) {
					return this.getListeners(t), this
				}, s.defineEvents = function (t) {
					for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
					return this
				}, s.removeListener = function (t, e) {
					var n, r, o = this.getListenersAsObject(t);
					for (r in o) o.hasOwnProperty(r) && -1 !== (n = i(o[r], e)) && o[r].splice(n, 1);
					return this
				}, s.off = o("removeListener"), s.addListeners = function (t, e) {
					return this.manipulateListeners(!1, t, e)
				}, s.removeListeners = function (t, e) {
					return this.manipulateListeners(!0, t, e)
				}, s.manipulateListeners = function (t, e, n) {
					var r, i, o = t ? this.removeListener : this.addListener,
						u = t ? this.removeListeners : this.addListeners;
					if ("object" != typeof e || e instanceof RegExp)
						for (r = n.length; r--;) o.call(this, e, n[r]);
					else
						for (r in e) e.hasOwnProperty(r) && (i = e[r]) && ("function" == typeof i ? o.call(this, r, i) : u.call(this, r, i));
					return this
				}, s.removeEvent = function (t) {
					var e, n = typeof t,
						r = this._getEvents();
					if ("string" === n) delete r[t];
					else if (t instanceof RegExp)
						for (e in r) r.hasOwnProperty(e) && t.test(e) && delete r[e];
					else delete this._events;
					return this
				}, s.removeAllListeners = o("removeEvent"), s.emitEvent = function (t, e) {
					var n, r, i, o, u = this.getListenersAsObject(t);
					for (o in u)
						if (u.hasOwnProperty(o))
							for (n = u[o].slice(0), i = 0; i < n.length; i++) !0 === (r = n[i]).once && this.removeListener(t, r.listener), r.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, r.listener);
					return this
				}, s.trigger = o("emitEvent"), s.emit = function (t) {
					var e = Array.prototype.slice.call(arguments, 1);
					return this.emitEvent(t, e)
				}, s.setOnceReturnValue = function (t) {
					return this._onceReturnValue = t, this
				}, s._getOnceReturnValue = function () {
					return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
				}, s._getEvents = function () {
					return this._events || (this._events = {})
				}, r.noConflict = function () {
					return t.EventEmitter = a, r
				}, "function" == typeof e && e.amd ? e(function () {
					return r
				}) : "object" == typeof n && n.exports ? n.exports = r : t.EventEmitter = r
			}(this || {})
		}, {}]
	}, {}, [1])
}();;