window.SNIPCART_VERSION = "2.0.166-master", function (t) {
    function e(i) {
        if (n[i])return n[i].exports;
        var r = n[i] = {exports: {}, id: i, loaded: !1};
        return t[i].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
    }

    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
}([function (t, e, n) {
    (function (t, e) {
        var i, r, o, s, a, c, u, l, p = [].slice, h = [].indexOf || function (t) {
                for (var e = 0, n = this.length; e < n; e++)if (e in this && this[e] === t)return e;
                return -1
            };
        o = n(33), s = n(8), u = n(232), i = n(3), c = n(138), r = n(36), t.Backbone = i.noConflict(), l = {
            _queue: [],
            execute: function () {
                var t;
                return t = 1 <= arguments.length ? p.call(arguments, 0) : [], this._queue.push(t)
            },
            "do": function () {
                var t;
                return t = 1 <= arguments.length ? p.call(arguments, 0) : [], this.execute.apply(this, t)
            },
            locales: ["en", "fr", "fr-FR", "de", "sv", "tr", "da", "th", "es", "it", "fi", "no"],
            loadingLocale: !1,
            validators: t.Validators,
            initialize: function (t) {
                return function () {
                    var t;
                    return t = !1
                }
            }(this)
        }, window.Snipcart = new o(l), a = n(233), window.Snipcart.locales = ["en", "fr", "fr-FR", "de", "sv", "tr", "da", "th", "es", "it", "fi", "no"], window.Snipcart.loadingLocale = !1, e(function () {
            var t, n, i, o;
            return window.location.search && (o = window.location.search.substr(1, window.location.search.length - 1), t = c.parse(o), t.snipcart_token && (n = new r, n.saveCookie("snipcart_order_token", t.snipcart_token, 120))), e(".snip-layout").remove(), i = document.getElementsByTagName("html")[0].getAttribute("lang"), null != i && h.call(window.Snipcart.locales, i) >= 0 && "en" !== i && (window.Snipcart.loadingLocale = !0, jQuery.getScript("https://cdn.snipcart.com/scripts/2.0/snipcart/l10n/locales/" + i + ".js", function () {
                return null != window.Snipcart.loadingLocale && (window.Snipcart.loadingLocale = !1), null != window.Snipcart._startupApp && (window.Snipcart._startupApp.loadingLocale = !1), window.Snipcart.initialize()
            })), window.Snipcart.initialize()
        })
    }).call(e, n(2), n(7))
}, , function (t, e, n) {
    var i;
    i = n(3), i.$ = n(7), i.Wreqr = n(8), i.Syphon = n(9), t.exports = {
        Backbone: i,
        Service: n(10),
        Collection: n(12),
        PagedCollection: n(13),
        Event: n(15),
        Bus: n(11),
        Application: n(16),
        FormView: n(19),
        ListView: n(22),
        InfiniteListView: n(23),
        View: n(21),
        UploadView: n(24),
        ItemView: n(20),
        LayoutView: n(25),
        Model: n(26),
        FormDataTransportModel: n(29),
        AppRouter: n(30),
        Controller: n(31),
        HttpService: n(32),
        Validators: n(27)
    }
}, function (t, e, n) {
    var i;
    i = n(4), t.exports = i.noConflict()
}, function (t, e, n) {
    var i, r;
    (function (o) {
        !function (s) {
            var a = "object" == typeof self && self.self === self && self || "object" == typeof o && o.global === o && o;
            i = [n(5), n(7), e], r = function (t, e, n) {
                a.Backbone = s(a, n, t, e)
            }.apply(e, i), !(void 0 !== r && (t.exports = r))
        }(function (t, e, n, i) {
            var r = t.Backbone, o = Array.prototype.slice;
            e.VERSION = "1.3.3", e.$ = i, e.noConflict = function () {
                return t.Backbone = r, this
            }, e.emulateHTTP = !1, e.emulateJSON = !1;
            var s = function (t, e, i) {
                switch (t) {
                    case 1:
                        return function () {
                            return n[e](this[i])
                        };
                    case 2:
                        return function (t) {
                            return n[e](this[i], t)
                        };
                    case 3:
                        return function (t, r) {
                            return n[e](this[i], c(t, this), r)
                        };
                    case 4:
                        return function (t, r, o) {
                            return n[e](this[i], c(t, this), r, o)
                        };
                    default:
                        return function () {
                            var t = o.call(arguments);
                            return t.unshift(this[i]), n[e].apply(n, t)
                        }
                }
            }, a = function (t, e, i) {
                n.each(e, function (e, r) {
                    n[r] && (t.prototype[r] = s(e, r, i))
                })
            }, c = function (t, e) {
                return n.isFunction(t) ? t : n.isObject(t) && !e._isModel(t) ? u(t) : n.isString(t) ? function (e) {
                    return e.get(t)
                } : t
            }, u = function (t) {
                var e = n.matches(t);
                return function (t) {
                    return e(t.attributes)
                }
            }, l = e.Events = {}, p = /\s+/, h = function (t, e, i, r, o) {
                var s, a = 0;
                if (i && "object" == typeof i) {
                    void 0 !== r && "context" in o && void 0 === o.context && (o.context = r);
                    for (s = n.keys(i); a < s.length; a++)e = h(t, e, s[a], i[s[a]], o)
                } else if (i && p.test(i))for (s = i.split(p); a < s.length; a++)e = t(e, s[a], r, o); else e = t(e, i, r, o);
                return e
            };
            l.on = function (t, e, n) {
                return d(this, t, e, n)
            };
            var d = function (t, e, n, i, r) {
                if (t._events = h(f, t._events || {}, e, n, {context: i, ctx: t, listening: r}), r) {
                    var o = t._listeners || (t._listeners = {});
                    o[r.id] = r
                }
                return t
            };
            l.listenTo = function (t, e, i) {
                if (!t)return this;
                var r = t._listenId || (t._listenId = n.uniqueId("l")), o = this._listeningTo || (this._listeningTo = {}), s = o[r];
                if (!s) {
                    var a = this._listenId || (this._listenId = n.uniqueId("l"));
                    s = o[r] = {obj: t, objId: r, id: a, listeningTo: o, count: 0}
                }
                return d(t, e, i, this, s), this
            };
            var f = function (t, e, n, i) {
                if (n) {
                    var r = t[e] || (t[e] = []), o = i.context, s = i.ctx, a = i.listening;
                    a && a.count++, r.push({callback: n, context: o, ctx: o || s, listening: a})
                }
                return t
            };
            l.off = function (t, e, n) {
                return this._events ? (this._events = h(m, this._events, t, e, {
                    context: n,
                    listeners: this._listeners
                }), this) : this
            }, l.stopListening = function (t, e, i) {
                var r = this._listeningTo;
                if (!r)return this;
                for (var o = t ? [t._listenId] : n.keys(r), s = 0; s < o.length; s++) {
                    var a = r[o[s]];
                    if (!a)break;
                    a.obj.off(e, i, this)
                }
                return this
            };
            var m = function (t, e, i, r) {
                if (t) {
                    var o, s = 0, a = r.context, c = r.listeners;
                    if (e || i || a) {
                        for (var u = e ? [e] : n.keys(t); s < u.length; s++) {
                            e = u[s];
                            var l = t[e];
                            if (!l)break;
                            for (var p = [], h = 0; h < l.length; h++) {
                                var d = l[h];
                                i && i !== d.callback && i !== d.callback._callback || a && a !== d.context ? p.push(d) : (o = d.listening, o && 0 === --o.count && (delete c[o.id], delete o.listeningTo[o.objId]))
                            }
                            p.length ? t[e] = p : delete t[e]
                        }
                        return t
                    }
                    for (var f = n.keys(c); s < f.length; s++)o = c[f[s]], delete c[o.id], delete o.listeningTo[o.objId]
                }
            };
            l.once = function (t, e, i) {
                var r = h(y, {}, t, e, n.bind(this.off, this));
                return "string" == typeof t && null == i && (e = void 0), this.on(r, e, i)
            }, l.listenToOnce = function (t, e, i) {
                var r = h(y, {}, e, i, n.bind(this.stopListening, this, t));
                return this.listenTo(t, r)
            };
            var y = function (t, e, i, r) {
                if (i) {
                    var o = t[e] = n.once(function () {
                        r(e, o), i.apply(this, arguments)
                    });
                    o._callback = i
                }
                return t
            };
            l.trigger = function (t) {
                if (!this._events)return this;
                for (var e = Math.max(0, arguments.length - 1), n = Array(e), i = 0; i < e; i++)n[i] = arguments[i + 1];
                return h(g, this._events, t, void 0, n), this
            };
            var g = function (t, e, n, i) {
                if (t) {
                    var r = t[e], o = t.all;
                    r && o && (o = o.slice()), r && _(r, i), o && _(o, [e].concat(i))
                }
                return t
            }, _ = function (t, e) {
                var n, i = -1, r = t.length, o = e[0], s = e[1], a = e[2];
                switch (e.length) {
                    case 0:
                        for (; ++i < r;)(n = t[i]).callback.call(n.ctx);
                        return;
                    case 1:
                        for (; ++i < r;)(n = t[i]).callback.call(n.ctx, o);
                        return;
                    case 2:
                        for (; ++i < r;)(n = t[i]).callback.call(n.ctx, o, s);
                        return;
                    case 3:
                        for (; ++i < r;)(n = t[i]).callback.call(n.ctx, o, s, a);
                        return;
                    default:
                        for (; ++i < r;)(n = t[i]).callback.apply(n.ctx, e);
                        return
                }
            };
            l.bind = l.on, l.unbind = l.off, n.extend(e, l);
            var v = e.Model = function (t, e) {
                var i = t || {};
                e || (e = {}), this.cid = n.uniqueId(this.cidPrefix), this.attributes = {}, e.collection && (this.collection = e.collection), e.parse && (i = this.parse(i, e) || {});
                var r = n.result(this, "defaults");
                i = n.defaults(n.extend({}, r, i), r), this.set(i, e), this.changed = {}, this.initialize.apply(this, arguments)
            };
            n.extend(v.prototype, l, {
                changed: null,
                validationError: null,
                idAttribute: "id",
                cidPrefix: "c",
                initialize: function () {
                },
                toJSON: function (t) {
                    return n.clone(this.attributes)
                },
                sync: function () {
                    return e.sync.apply(this, arguments)
                },
                get: function (t) {
                    return this.attributes[t]
                },
                escape: function (t) {
                    return n.escape(this.get(t))
                },
                has: function (t) {
                    return null != this.get(t)
                },
                matches: function (t) {
                    return !!n.iteratee(t, this)(this.attributes)
                },
                set: function (t, e, i) {
                    if (null == t)return this;
                    var r;
                    if ("object" == typeof t ? (r = t, i = e) : (r = {})[t] = e, i || (i = {}), !this._validate(r, i))return !1;
                    var o = i.unset, s = i.silent, a = [], c = this._changing;
                    this._changing = !0, c || (this._previousAttributes = n.clone(this.attributes), this.changed = {});
                    var u = this.attributes, l = this.changed, p = this._previousAttributes;
                    for (var h in r)e = r[h], n.isEqual(u[h], e) || a.push(h), n.isEqual(p[h], e) ? delete l[h] : l[h] = e, o ? delete u[h] : u[h] = e;
                    if (this.idAttribute in r && (this.id = this.get(this.idAttribute)), !s) {
                        a.length && (this._pending = i);
                        for (var d = 0; d < a.length; d++)this.trigger("change:" + a[d], this, u[a[d]], i)
                    }
                    if (c)return this;
                    if (!s)for (; this._pending;)i = this._pending, this._pending = !1, this.trigger("change", this, i);
                    return this._pending = !1, this._changing = !1, this
                },
                unset: function (t, e) {
                    return this.set(t, void 0, n.extend({}, e, {unset: !0}))
                },
                clear: function (t) {
                    var e = {};
                    for (var i in this.attributes)e[i] = void 0;
                    return this.set(e, n.extend({}, t, {unset: !0}))
                },
                hasChanged: function (t) {
                    return null == t ? !n.isEmpty(this.changed) : n.has(this.changed, t)
                },
                changedAttributes: function (t) {
                    if (!t)return !!this.hasChanged() && n.clone(this.changed);
                    var e = this._changing ? this._previousAttributes : this.attributes, i = {};
                    for (var r in t) {
                        var o = t[r];
                        n.isEqual(e[r], o) || (i[r] = o)
                    }
                    return !!n.size(i) && i
                },
                previous: function (t) {
                    return null != t && this._previousAttributes ? this._previousAttributes[t] : null
                },
                previousAttributes: function () {
                    return n.clone(this._previousAttributes)
                },
                fetch: function (t) {
                    t = n.extend({parse: !0}, t);
                    var e = this, i = t.success;
                    return t.success = function (n) {
                        var r = t.parse ? e.parse(n, t) : n;
                        return !!e.set(r, t) && (i && i.call(t.context, e, n, t), void e.trigger("sync", e, n, t))
                    }, q(this, t), this.sync("read", this, t)
                },
                save: function (t, e, i) {
                    var r;
                    null == t || "object" == typeof t ? (r = t, i = e) : (r = {})[t] = e, i = n.extend({
                        validate: !0,
                        parse: !0
                    }, i);
                    var o = i.wait;
                    if (r && !o) {
                        if (!this.set(r, i))return !1
                    } else if (!this._validate(r, i))return !1;
                    var s = this, a = i.success, c = this.attributes;
                    i.success = function (t) {
                        s.attributes = c;
                        var e = i.parse ? s.parse(t, i) : t;
                        return o && (e = n.extend({}, r, e)), !(e && !s.set(e, i)) && (a && a.call(i.context, s, t, i), void s.trigger("sync", s, t, i))
                    }, q(this, i), r && o && (this.attributes = n.extend({}, c, r));
                    var u = this.isNew() ? "create" : i.patch ? "patch" : "update";
                    "patch" !== u || i.attrs || (i.attrs = r);
                    var l = this.sync(u, this, i);
                    return this.attributes = c, l
                },
                destroy: function (t) {
                    t = t ? n.clone(t) : {};
                    var e = this, i = t.success, r = t.wait, o = function () {
                        e.stopListening(), e.trigger("destroy", e, e.collection, t)
                    };
                    t.success = function (n) {
                        r && o(), i && i.call(t.context, e, n, t), e.isNew() || e.trigger("sync", e, n, t)
                    };
                    var s = !1;
                    return this.isNew() ? n.defer(t.success) : (q(this, t), s = this.sync("delete", this, t)), r || o(), s
                },
                url: function () {
                    var t = n.result(this, "urlRoot") || n.result(this.collection, "url") || z();
                    if (this.isNew())return t;
                    var e = this.get(this.idAttribute);
                    return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e)
                },
                parse: function (t, e) {
                    return t
                },
                clone: function () {
                    return new this.constructor(this.attributes)
                },
                isNew: function () {
                    return !this.has(this.idAttribute)
                },
                isValid: function (t) {
                    return this._validate({}, n.extend({}, t, {validate: !0}))
                },
                _validate: function (t, e) {
                    if (!e.validate || !this.validate)return !0;
                    t = n.extend({}, this.attributes, t);
                    var i = this.validationError = this.validate(t, e) || null;
                    return !i || (this.trigger("invalid", this, i, n.extend(e, {validationError: i})), !1)
                }
            });
            var w = {keys: 1, values: 1, pairs: 1, invert: 1, pick: 0, omit: 0, chain: 1, isEmpty: 1};
            a(v, w, "attributes");
            var b = e.Collection = function (t, e) {
                e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, n.extend({silent: !0}, e))
            }, x = {add: !0, remove: !0, merge: !0}, C = {add: !0, remove: !1}, k = function (t, e, n) {
                n = Math.min(Math.max(n, 0), t.length);
                var i, r = Array(t.length - n), o = e.length;
                for (i = 0; i < r.length; i++)r[i] = t[i + n];
                for (i = 0; i < o; i++)t[i + n] = e[i];
                for (i = 0; i < r.length; i++)t[i + o + n] = r[i]
            };
            n.extend(b.prototype, l, {
                model: v, initialize: function () {
                }, toJSON: function (t) {
                    return this.map(function (e) {
                        return e.toJSON(t)
                    })
                }, sync: function () {
                    return e.sync.apply(this, arguments)
                }, add: function (t, e) {
                    return this.set(t, n.extend({merge: !1}, e, C))
                }, remove: function (t, e) {
                    e = n.extend({}, e);
                    var i = !n.isArray(t);
                    t = i ? [t] : t.slice();
                    var r = this._removeModels(t, e);
                    return !e.silent && r.length && (e.changes = {
                        added: [],
                        merged: [],
                        removed: r
                    }, this.trigger("update", this, e)), i ? r[0] : r
                }, set: function (t, e) {
                    if (null != t) {
                        e = n.extend({}, x, e), e.parse && !this._isModel(t) && (t = this.parse(t, e) || []);
                        var i = !n.isArray(t);
                        t = i ? [t] : t.slice();
                        var r = e.at;
                        null != r && (r = +r), r > this.length && (r = this.length), r < 0 && (r += this.length + 1);
                        var o, s, a = [], c = [], u = [], l = [], p = {}, h = e.add, d = e.merge, f = e.remove, m = !1, y = this.comparator && null == r && e.sort !== !1, g = n.isString(this.comparator) ? this.comparator : null;
                        for (s = 0; s < t.length; s++) {
                            o = t[s];
                            var _ = this.get(o);
                            if (_) {
                                if (d && o !== _) {
                                    var v = this._isModel(o) ? o.attributes : o;
                                    e.parse && (v = _.parse(v, e)), _.set(v, e), u.push(_), y && !m && (m = _.hasChanged(g))
                                }
                                p[_.cid] || (p[_.cid] = !0, a.push(_)), t[s] = _
                            } else h && (o = t[s] = this._prepareModel(o, e), o && (c.push(o), this._addReference(o, e), p[o.cid] = !0, a.push(o)))
                        }
                        if (f) {
                            for (s = 0; s < this.length; s++)o = this.models[s], p[o.cid] || l.push(o);
                            l.length && this._removeModels(l, e)
                        }
                        var w = !1, b = !y && h && f;
                        if (a.length && b ? (w = this.length !== a.length || n.some(this.models, function (t, e) {
                                    return t !== a[e]
                                }), this.models.length = 0, k(this.models, a, 0), this.length = this.models.length) : c.length && (y && (m = !0), k(this.models, c, null == r ? this.length : r), this.length = this.models.length), m && this.sort({silent: !0}), !e.silent) {
                            for (s = 0; s < c.length; s++)null != r && (e.index = r + s), o = c[s], o.trigger("add", o, this, e);
                            (m || w) && this.trigger("sort", this, e), (c.length || l.length || u.length) && (e.changes = {
                                added: c,
                                removed: l,
                                merged: u
                            }, this.trigger("update", this, e))
                        }
                        return i ? t[0] : t
                    }
                }, reset: function (t, e) {
                    e = e ? n.clone(e) : {};
                    for (var i = 0; i < this.models.length; i++)this._removeReference(this.models[i], e);
                    return e.previousModels = this.models, this._reset(), t = this.add(t, n.extend({silent: !0}, e)), e.silent || this.trigger("reset", this, e), t
                }, push: function (t, e) {
                    return this.add(t, n.extend({at: this.length}, e))
                }, pop: function (t) {
                    var e = this.at(this.length - 1);
                    return this.remove(e, t)
                }, unshift: function (t, e) {
                    return this.add(t, n.extend({at: 0}, e))
                }, shift: function (t) {
                    var e = this.at(0);
                    return this.remove(e, t)
                }, slice: function () {
                    return o.apply(this.models, arguments)
                }, get: function (t) {
                    if (null != t)return this._byId[t] || this._byId[this.modelId(t.attributes || t)] || t.cid && this._byId[t.cid]
                }, has: function (t) {
                    return null != this.get(t)
                }, at: function (t) {
                    return t < 0 && (t += this.length), this.models[t]
                }, where: function (t, e) {
                    return this[e ? "find" : "filter"](t)
                }, findWhere: function (t) {
                    return this.where(t, !0)
                }, sort: function (t) {
                    var e = this.comparator;
                    if (!e)throw new Error("Cannot sort a set without a comparator");
                    t || (t = {});
                    var i = e.length;
                    return n.isFunction(e) && (e = n.bind(e, this)), 1 === i || n.isString(e) ? this.models = this.sortBy(e) : this.models.sort(e), t.silent || this.trigger("sort", this, t), this
                }, pluck: function (t) {
                    return this.map(t + "")
                }, fetch: function (t) {
                    t = n.extend({parse: !0}, t);
                    var e = t.success, i = this;
                    return t.success = function (n) {
                        var r = t.reset ? "reset" : "set";
                        i[r](n, t), e && e.call(t.context, i, n, t), i.trigger("sync", i, n, t)
                    }, q(this, t), this.sync("read", this, t)
                }, create: function (t, e) {
                    e = e ? n.clone(e) : {};
                    var i = e.wait;
                    if (t = this._prepareModel(t, e), !t)return !1;
                    i || this.add(t, e);
                    var r = this, o = e.success;
                    return e.success = function (t, e, n) {
                        i && r.add(t, n), o && o.call(n.context, t, e, n)
                    }, t.save(null, e), t
                }, parse: function (t, e) {
                    return t
                }, clone: function () {
                    return new this.constructor(this.models, {model: this.model, comparator: this.comparator})
                }, modelId: function (t) {
                    return t[this.model.prototype.idAttribute || "id"]
                }, _reset: function () {
                    this.length = 0, this.models = [], this._byId = {}
                }, _prepareModel: function (t, e) {
                    if (this._isModel(t))return t.collection || (t.collection = this), t;
                    e = e ? n.clone(e) : {}, e.collection = this;
                    var i = new this.model(t, e);
                    return i.validationError ? (this.trigger("invalid", this, i.validationError, e), !1) : i
                }, _removeModels: function (t, e) {
                    for (var n = [], i = 0; i < t.length; i++) {
                        var r = this.get(t[i]);
                        if (r) {
                            var o = this.indexOf(r);
                            this.models.splice(o, 1), this.length--, delete this._byId[r.cid];
                            var s = this.modelId(r.attributes);
                            null != s && delete this._byId[s], e.silent || (e.index = o, r.trigger("remove", r, this, e)), n.push(r), this._removeReference(r, e)
                        }
                    }
                    return n
                }, _isModel: function (t) {
                    return t instanceof v
                }, _addReference: function (t, e) {
                    this._byId[t.cid] = t;
                    var n = this.modelId(t.attributes);
                    null != n && (this._byId[n] = t), t.on("all", this._onModelEvent, this)
                }, _removeReference: function (t, e) {
                    delete this._byId[t.cid];
                    var n = this.modelId(t.attributes);
                    null != n && delete this._byId[n], this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this)
                }, _onModelEvent: function (t, e, n, i) {
                    if (e) {
                        if (("add" === t || "remove" === t) && n !== this)return;
                        if ("destroy" === t && this.remove(e, i), "change" === t) {
                            var r = this.modelId(e.previousAttributes()), o = this.modelId(e.attributes);
                            r !== o && (null != r && delete this._byId[r], null != o && (this._byId[o] = e))
                        }
                    }
                    this.trigger.apply(this, arguments)
                }
            });
            var S = {
                forEach: 3,
                each: 3,
                map: 3,
                collect: 3,
                reduce: 0,
                foldl: 0,
                inject: 0,
                reduceRight: 0,
                foldr: 0,
                find: 3,
                detect: 3,
                filter: 3,
                select: 3,
                reject: 3,
                every: 3,
                all: 3,
                some: 3,
                any: 3,
                include: 3,
                includes: 3,
                contains: 3,
                invoke: 0,
                max: 3,
                min: 3,
                toArray: 1,
                size: 1,
                first: 3,
                head: 3,
                take: 3,
                initial: 3,
                rest: 3,
                tail: 3,
                drop: 3,
                last: 3,
                without: 0,
                difference: 0,
                indexOf: 3,
                shuffle: 1,
                lastIndexOf: 3,
                isEmpty: 1,
                chain: 1,
                sample: 3,
                partition: 3,
                groupBy: 3,
                countBy: 3,
                sortBy: 3,
                indexBy: 3,
                findIndex: 3,
                findLastIndex: 3
            };
            a(b, S, "models");
            var j = e.View = function (t) {
                this.cid = n.uniqueId("view"), n.extend(this, n.pick(t, R)), this._ensureElement(), this.initialize.apply(this, arguments)
            }, T = /^(\S+)\s*(.*)$/, R = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
            n.extend(j.prototype, l, {
                tagName: "div", $: function (t) {
                    return this.$el.find(t)
                }, initialize: function () {
                }, render: function () {
                    return this
                }, remove: function () {
                    return this._removeElement(), this.stopListening(), this
                }, _removeElement: function () {
                    this.$el.remove()
                }, setElement: function (t) {
                    return this.undelegateEvents(), this._setElement(t), this.delegateEvents(), this
                }, _setElement: function (t) {
                    this.$el = t instanceof e.$ ? t : e.$(t), this.el = this.$el[0]
                }, delegateEvents: function (t) {
                    if (t || (t = n.result(this, "events")), !t)return this;
                    this.undelegateEvents();
                    for (var e in t) {
                        var i = t[e];
                        if (n.isFunction(i) || (i = this[i]), i) {
                            var r = e.match(T);
                            this.delegate(r[1], r[2], n.bind(i, this))
                        }
                    }
                    return this
                }, delegate: function (t, e, n) {
                    return this.$el.on(t + ".delegateEvents" + this.cid, e, n), this
                }, undelegateEvents: function () {
                    return this.$el && this.$el.off(".delegateEvents" + this.cid), this
                }, undelegate: function (t, e, n) {
                    return this.$el.off(t + ".delegateEvents" + this.cid, e, n), this
                }, _createElement: function (t) {
                    return document.createElement(t)
                }, _ensureElement: function () {
                    if (this.el)this.setElement(n.result(this, "el")); else {
                        var t = n.extend({}, n.result(this, "attributes"));
                        this.id && (t.id = n.result(this, "id")), this.className && (t["class"] = n.result(this, "className")), this.setElement(this._createElement(n.result(this, "tagName"))), this._setAttributes(t)
                    }
                }, _setAttributes: function (t) {
                    this.$el.attr(t)
                }
            }), e.sync = function (t, i, r) {
                var o = A[t];
                n.defaults(r || (r = {}), {emulateHTTP: e.emulateHTTP, emulateJSON: e.emulateJSON});
                var s = {type: o, dataType: "json"};
                if (r.url || (s.url = n.result(i, "url") || z()), null != r.data || !i || "create" !== t && "update" !== t && "patch" !== t || (s.contentType = "application/json", s.data = JSON.stringify(r.attrs || i.toJSON(r))), r.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? {model: s.data} : {}), r.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
                    s.type = "POST", r.emulateJSON && (s.data._method = o);
                    var a = r.beforeSend;
                    r.beforeSend = function (t) {
                        if (t.setRequestHeader("X-HTTP-Method-Override", o), a)return a.apply(this, arguments)
                    }
                }
                "GET" === s.type || r.emulateJSON || (s.processData = !1);
                var c = r.error;
                r.error = function (t, e, n) {
                    r.textStatus = e, r.errorThrown = n, c && c.call(r.context, t, e, n)
                };
                var u = r.xhr = e.ajax(n.extend(s, r));
                return i.trigger("request", i, u, r), u
            };
            var A = {create: "POST", update: "PUT", patch: "PATCH", "delete": "DELETE", read: "GET"};
            e.ajax = function () {
                return e.$.ajax.apply(e.$, arguments)
            };
            var P = e.Router = function (t) {
                t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            }, M = /\((.*?)\)/g, O = /(\(\?)?:\w+/g, E = /\*\w+/g, V = /[\-{}\[\]+?.,\\\^$|#\s]/g;
            n.extend(P.prototype, l, {
                initialize: function () {
                }, route: function (t, i, r) {
                    n.isRegExp(t) || (t = this._routeToRegExp(t)), n.isFunction(i) && (r = i, i = ""), r || (r = this[i]);
                    var o = this;
                    return e.history.route(t, function (n) {
                        var s = o._extractParameters(t, n);
                        o.execute(r, s, i) !== !1 && (o.trigger.apply(o, ["route:" + i].concat(s)), o.trigger("route", i, s), e.history.trigger("route", o, i, s))
                    }), this
                }, execute: function (t, e, n) {
                    t && t.apply(this, e)
                }, navigate: function (t, n) {
                    return e.history.navigate(t, n), this
                }, _bindRoutes: function () {
                    if (this.routes) {
                        this.routes = n.result(this, "routes");
                        for (var t, e = n.keys(this.routes); null != (t = e.pop());)this.route(t, this.routes[t])
                    }
                }, _routeToRegExp: function (t) {
                    return t = t.replace(V, "\\$&").replace(M, "(?:$1)?").replace(O, function (t, e) {
                        return e ? t : "([^/?]+)"
                    }).replace(E, "([^?]*?)"), new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
                }, _extractParameters: function (t, e) {
                    var i = t.exec(e).slice(1);
                    return n.map(i, function (t, e) {
                        return e === i.length - 1 ? t || null : t ? decodeURIComponent(t) : null
                    })
                }
            });
            var I = e.History = function () {
                this.handlers = [], this.checkUrl = n.bind(this.checkUrl, this), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            }, D = /^[#\/]|\s+$/g, N = /^\/+|\/+$/g, F = /#.*$/;
            I.started = !1, n.extend(I.prototype, l, {
                interval: 50, atRoot: function () {
                    var t = this.location.pathname.replace(/[^\/]$/, "$&/");
                    return t === this.root && !this.getSearch()
                }, matchRoot: function () {
                    var t = this.decodeFragment(this.location.pathname), e = t.slice(0, this.root.length - 1) + "/";
                    return e === this.root
                }, decodeFragment: function (t) {
                    return decodeURI(t.replace(/%25/g, "%2525"))
                }, getSearch: function () {
                    var t = this.location.href.replace(/#.*/, "").match(/\?.+/);
                    return t ? t[0] : ""
                }, getHash: function (t) {
                    var e = (t || this).location.href.match(/#(.*)$/);
                    return e ? e[1] : ""
                }, getPath: function () {
                    var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                    return "/" === t.charAt(0) ? t.slice(1) : t
                }, getFragment: function (t) {
                    return null == t && (t = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), t.replace(D, "")
                }, start: function (t) {
                    if (I.started)throw new Error("Backbone.history has already been started");
                    if (I.started = !0, this.options = n.extend({root: "/"}, this.options, t), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(N, "/"), this._wantsHashChange && this._wantsPushState) {
                        if (!this._hasPushState && !this.atRoot()) {
                            var e = this.root.slice(0, -1) || "/";
                            return this.location.replace(e + "#" + this.getPath()), !0
                        }
                        this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {replace: !0})
                    }
                    if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                        this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
                        var i = document.body, r = i.insertBefore(this.iframe, i.firstChild).contentWindow;
                        r.document.open(), r.document.close(), r.location.hash = "#" + this.fragment
                    }
                    var o = window.addEventListener || function (t, e) {
                            return attachEvent("on" + t, e)
                        };
                    if (this._usePushState ? o("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? o("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent)return this.loadUrl()
                }, stop: function () {
                    var t = window.removeEventListener || function (t, e) {
                            return detachEvent("on" + t, e)
                        };
                    this._usePushState ? t("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && t("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), I.started = !1
                }, route: function (t, e) {
                    this.handlers.unshift({route: t, callback: e})
                }, checkUrl: function (t) {
                    var e = this.getFragment();
                    return e === this.fragment && this.iframe && (e = this.getHash(this.iframe.contentWindow)), e !== this.fragment && (this.iframe && this.navigate(e), void this.loadUrl())
                }, loadUrl: function (t) {
                    return !!this.matchRoot() && (t = this.fragment = this.getFragment(t), n.some(this.handlers, function (e) {
                            if (e.route.test(t))return e.callback(t), !0
                        }))
                }, navigate: function (t, e) {
                    if (!I.started)return !1;
                    e && e !== !0 || (e = {trigger: !!e}), t = this.getFragment(t || "");
                    var n = this.root;
                    "" !== t && "?" !== t.charAt(0) || (n = n.slice(0, -1) || "/");
                    var i = n + t;
                    if (t = this.decodeFragment(t.replace(F, "")), this.fragment !== t) {
                        if (this.fragment = t, this._usePushState)this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, i); else {
                            if (!this._wantsHashChange)return this.location.assign(i);
                            if (this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getHash(this.iframe.contentWindow)) {
                                var r = this.iframe.contentWindow;
                                e.replace || (r.document.open(), r.document.close()), this._updateHash(r.location, t, e.replace)
                            }
                        }
                        return e.trigger ? this.loadUrl(t) : void 0
                    }
                }, _updateHash: function (t, e, n) {
                    if (n) {
                        var i = t.href.replace(/(javascript:|#).*$/, "");
                        t.replace(i + "#" + e)
                    } else t.hash = "#" + e
                }
            }), e.history = new I;
            var $ = function (t, e) {
                var i, r = this;
                return i = t && n.has(t, "constructor") ? t.constructor : function () {
                    return r.apply(this, arguments)
                }, n.extend(i, r, e), i.prototype = n.create(r.prototype, t), i.prototype.constructor = i, i.__super__ = r.prototype, i
            };
            v.extend = b.extend = P.extend = j.extend = I.extend = $;
            var z = function () {
                throw new Error('A "url" property or function must be specified')
            }, q = function (t, e) {
                var n = e.error;
                e.error = function (i) {
                    n && n.call(e.context, t, i, e), t.trigger("error", t, i, e)
                }
            };
            return e
        })
    }).call(e, function () {
        return this
    }())
}, function (t, e, n) {
    var i;
    (function (t, r, o) {
        (function () {
            function o(t, e) {
                if (t !== e) {
                    var n = null === t, i = t === T, r = t === t, o = null === e, s = e === T, a = e === e;
                    if (t > e && !o || !r || n && !s && a || i && a)return 1;
                    if (t < e && !n || !a || o && !i && r || s && r)return -1
                }
                return 0
            }

            function s(t, e, n) {
                for (var i = t.length, r = n ? i : -1; n ? r-- : ++r < i;)if (e(t[r], r, t))return r;
                return -1
            }

            function a(t, e, n) {
                if (e !== e)return _(t, n);
                for (var i = n - 1, r = t.length; ++i < r;)if (t[i] === e)return i;
                return -1
            }

            function c(t) {
                return "function" == typeof t || !1
            }

            function u(t) {
                return null == t ? "" : t + ""
            }

            function l(t, e) {
                for (var n = -1, i = t.length; ++n < i && e.indexOf(t.charAt(n)) > -1;);
                return n
            }

            function p(t, e) {
                for (var n = t.length; n-- && e.indexOf(t.charAt(n)) > -1;);
                return n
            }

            function h(t, e) {
                return o(t.criteria, e.criteria) || t.index - e.index
            }

            function d(t, e, n) {
                for (var i = -1, r = t.criteria, s = e.criteria, a = r.length, c = n.length; ++i < a;) {
                    var u = o(r[i], s[i]);
                    if (u) {
                        if (i >= c)return u;
                        var l = n[i];
                        return u * ("asc" === l || l === !0 ? 1 : -1)
                    }
                }
                return t.index - e.index
            }

            function f(t) {
                return Ht[t]
            }

            function m(t) {
                return Wt[t]
            }

            function y(t, e, n) {
                return e ? t = Qt[t] : n && (t = Kt[t]), "\\" + t
            }

            function g(t) {
                return "\\" + Kt[t]
            }

            function _(t, e, n) {
                for (var i = t.length, r = e + (n ? 0 : -1); n ? r-- : ++r < i;) {
                    var o = t[r];
                    if (o !== o)return r
                }
                return -1
            }

            function v(t) {
                return !!t && "object" == typeof t
            }

            function w(t) {
                return t <= 160 && t >= 9 && t <= 13 || 32 == t || 160 == t || 5760 == t || 6158 == t || t >= 8192 && (t <= 8202 || 8232 == t || 8233 == t || 8239 == t || 8287 == t || 12288 == t || 65279 == t)
            }

            function b(t, e) {
                for (var n = -1, i = t.length, r = -1, o = []; ++n < i;)t[n] === e && (t[n] = H, o[++r] = n);
                return o
            }

            function x(t, e) {
                for (var n, i = -1, r = t.length, o = -1, s = []; ++i < r;) {
                    var a = t[i], c = e ? e(a, i, t) : a;
                    i && n === c || (n = c, s[++o] = a)
                }
                return s
            }

            function C(t) {
                for (var e = -1, n = t.length; ++e < n && w(t.charCodeAt(e)););
                return e
            }

            function k(t) {
                for (var e = t.length; e-- && w(t.charCodeAt(e)););
                return e
            }

            function S(t) {
                return Jt[t]
            }

            function j(t) {
                function e(t) {
                    if (v(t) && !Aa(t) && !(t instanceof r)) {
                        if (t instanceof i)return t;
                        if (es.call(t, "__chain__") && es.call(t, "__wrapped__"))return di(t)
                    }
                    return new i(t)
                }

                function n() {
                }

                function i(t, e, n) {
                    this.__wrapped__ = t, this.__actions__ = n || [], this.__chain__ = !!e
                }

                function r(t) {
                    this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Rs, this.__views__ = []
                }

                function w() {
                    var t = new r(this.__wrapped__);
                    return t.__actions__ = te(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = te(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = te(this.__views__), t
                }

                function X() {
                    if (this.__filtered__) {
                        var t = new r(this);
                        t.__dir__ = -1, t.__filtered__ = !0
                    } else t = this.clone(), t.__dir__ *= -1;
                    return t
                }

                function it() {
                    var t = this.__wrapped__.value(), e = this.__dir__, n = Aa(t), i = e < 0, r = n ? t.length : 0, o = Hn(0, r, this.__views__), s = o.start, a = o.end, c = a - s, u = i ? a : s - 1, l = this.__iteratees__, p = l.length, h = 0, d = Cs(c, this.__takeCount__);
                    if (!n || r < L || r == c && d == c)return nn(i && n ? t.reverse() : t, this.__actions__);
                    var f = [];
                    t:for (; c-- && h < d;) {
                        u += e;
                        for (var m = -1, y = t[u]; ++m < p;) {
                            var g = l[m], _ = g.iteratee, v = g.type, w = _(y);
                            if (v == B)y = w; else if (!w) {
                                if (v == U)continue t;
                                break t
                            }
                        }
                        f[h++] = y
                    }
                    return f
                }

                function ot() {
                    this.__data__ = {}
                }

                function Ht(t) {
                    return this.has(t) && delete this.__data__[t]
                }

                function Wt(t) {
                    return "__proto__" == t ? T : this.__data__[t]
                }

                function Jt(t) {
                    return "__proto__" != t && es.call(this.__data__, t)
                }

                function Gt(t, e) {
                    return "__proto__" != t && (this.__data__[t] = e), this
                }

                function Qt(t) {
                    var e = t ? t.length : 0;
                    for (this.data = {hash: gs(null), set: new ps}; e--;)this.push(t[e])
                }

                function Kt(t, e) {
                    var n = t.data, i = "string" == typeof e || Vr(e) ? n.set.has(e) : n.hash[e];
                    return i ? 0 : -1
                }

                function Zt(t) {
                    var e = this.data;
                    "string" == typeof t || Vr(t) ? e.set.add(t) : e.hash[t] = !0
                }

                function Xt(t, e) {
                    for (var n = -1, i = t.length, r = -1, o = e.length, s = qo(i + o); ++n < i;)s[n] = t[n];
                    for (; ++r < o;)s[n++] = e[r];
                    return s
                }

                function te(t, e) {
                    var n = -1, i = t.length;
                    for (e || (e = qo(i)); ++n < i;)e[n] = t[n];
                    return e
                }

                function ee(t, e) {
                    for (var n = -1, i = t.length; ++n < i && e(t[n], n, t) !== !1;);
                    return t
                }

                function ne(t, e) {
                    for (var n = t.length; n-- && e(t[n], n, t) !== !1;);
                    return t
                }

                function oe(t, e) {
                    for (var n = -1, i = t.length; ++n < i;)if (!e(t[n], n, t))return !1;
                    return !0
                }

                function se(t, e, n, i) {
                    for (var r = -1, o = t.length, s = i, a = s; ++r < o;) {
                        var c = t[r], u = +e(c);
                        n(u, s) && (s = u, a = c)
                    }
                    return a
                }

                function ae(t, e) {
                    for (var n = -1, i = t.length, r = -1, o = []; ++n < i;) {
                        var s = t[n];
                        e(s, n, t) && (o[++r] = s)
                    }
                    return o
                }

                function ce(t, e) {
                    for (var n = -1, i = t.length, r = qo(i); ++n < i;)r[n] = e(t[n], n, t);
                    return r
                }

                function ue(t, e) {
                    for (var n = -1, i = e.length, r = t.length; ++n < i;)t[r + n] = e[n];
                    return t
                }

                function le(t, e, n, i) {
                    var r = -1, o = t.length;
                    for (i && o && (n = t[++r]); ++r < o;)n = e(n, t[r], r, t);
                    return n
                }

                function pe(t, e, n, i) {
                    var r = t.length;
                    for (i && r && (n = t[--r]); r--;)n = e(n, t[r], r, t);
                    return n
                }

                function he(t, e) {
                    for (var n = -1, i = t.length; ++n < i;)if (e(t[n], n, t))return !0;
                    return !1
                }

                function de(t, e) {
                    for (var n = t.length, i = 0; n--;)i += +e(t[n]) || 0;
                    return i
                }

                function fe(t, e) {
                    return t === T ? e : t
                }

                function me(t, e, n, i) {
                    return t !== T && es.call(i, n) ? t : e
                }

                function ye(t, e, n) {
                    for (var i = -1, r = za(e), o = r.length; ++i < o;) {
                        var s = r[i], a = t[s], c = n(a, e[s], s, t, e);
                        (c === c ? c === a : a !== a) && (a !== T || s in t) || (t[s] = c)
                    }
                    return t
                }

                function ge(t, e) {
                    return null == e ? t : ve(e, za(e), t)
                }

                function _e(t, e) {
                    for (var n = -1, i = null == t, r = !i && Kn(t), o = r ? t.length : 0, s = e.length, a = qo(s); ++n < s;) {
                        var c = e[n];
                        r ? a[n] = Zn(c, o) ? t[c] : T : a[n] = i ? T : t[c]
                    }
                    return a
                }

                function ve(t, e, n) {
                    n || (n = {});
                    for (var i = -1, r = e.length; ++i < r;) {
                        var o = e[i];
                        n[o] = t[o]
                    }
                    return n
                }

                function we(t, e, n) {
                    var i = typeof t;
                    return "function" == i ? e === T ? t : sn(t, e, n) : null == t ? Ro : "object" == i ? $e(t) : e === T ? Vo(t) : ze(t, e)
                }

                function be(t, e, n, i, r, o, s) {
                    var a;
                    if (n && (a = r ? n(t, i, r) : n(t)), a !== T)return a;
                    if (!Vr(t))return t;
                    var c = Aa(t);
                    if (c) {
                        if (a = Wn(t), !e)return te(t, a)
                    } else {
                        var u = is.call(t), l = u == Z;
                        if (u != et && u != W && (!l || r))return Yt[u] ? Gn(t, u, e) : r ? t : {};
                        if (a = Jn(l ? {} : t), !e)return ge(a, t)
                    }
                    o || (o = []), s || (s = []);
                    for (var p = o.length; p--;)if (o[p] == t)return s[p];
                    return o.push(t), s.push(a), (c ? ee : Me)(t, function (i, r) {
                        a[r] = be(i, e, n, r, t, o, s)
                    }), a
                }

                function xe(t, e, n) {
                    if ("function" != typeof t)throw new Qo(Y);
                    return hs(function () {
                        t.apply(T, n)
                    }, e)
                }

                function Ce(t, e) {
                    var n = t ? t.length : 0, i = [];
                    if (!n)return i;
                    var r = -1, o = Un(), s = o == a, c = s && e.length >= L ? mn(e) : null, u = e.length;
                    c && (o = Kt, s = !1, e = c);
                    t:for (; ++r < n;) {
                        var l = t[r];
                        if (s && l === l) {
                            for (var p = u; p--;)if (e[p] === l)continue t;
                            i.push(l)
                        } else o(e, l, 0) < 0 && i.push(l)
                    }
                    return i
                }

                function ke(t, e) {
                    var n = !0;
                    return Ds(t, function (t, i, r) {
                        return n = !!e(t, i, r)
                    }), n
                }

                function Se(t, e, n, i) {
                    var r = i, o = r;
                    return Ds(t, function (t, s, a) {
                        var c = +e(t, s, a);
                        (n(c, r) || c === i && c === o) && (r = c, o = t)
                    }), o
                }

                function je(t, e, n, i) {
                    var r = t.length;
                    for (n = null == n ? 0 : +n || 0, n < 0 && (n = -n > r ? 0 : r + n), i = i === T || i > r ? r : +i || 0, i < 0 && (i += r), r = n > i ? 0 : i >>> 0, n >>>= 0; n < r;)t[n++] = e;
                    return t
                }

                function Te(t, e) {
                    var n = [];
                    return Ds(t, function (t, i, r) {
                        e(t, i, r) && n.push(t)
                    }), n
                }

                function Re(t, e, n, i) {
                    var r;
                    return n(t, function (t, n, o) {
                        if (e(t, n, o))return r = i ? n : t, !1
                    }), r
                }

                function Ae(t, e, n, i) {
                    i || (i = []);
                    for (var r = -1, o = t.length; ++r < o;) {
                        var s = t[r];
                        v(s) && Kn(s) && (n || Aa(s) || Sr(s)) ? e ? Ae(s, e, n, i) : ue(i, s) : n || (i[i.length] = s)
                    }
                    return i
                }

                function Pe(t, e) {
                    return Fs(t, e, to)
                }

                function Me(t, e) {
                    return Fs(t, e, za)
                }

                function Oe(t, e) {
                    return $s(t, e, za)
                }

                function Ee(t, e) {
                    for (var n = -1, i = e.length, r = -1, o = []; ++n < i;) {
                        var s = e[n];
                        Er(t[s]) && (o[++r] = s)
                    }
                    return o
                }

                function Ve(t, e, n) {
                    if (null != t) {
                        n !== T && n in pi(t) && (e = [n]);
                        for (var i = 0, r = e.length; null != t && i < r;)t = t[e[i++]];
                        return i && i == r ? t : T
                    }
                }

                function Ie(t, e, n, i, r, o) {
                    return t === e || (null == t || null == e || !Vr(t) && !v(e) ? t !== t && e !== e : De(t, e, Ie, n, i, r, o))
                }

                function De(t, e, n, i, r, o, s) {
                    var a = Aa(t), c = Aa(e), u = J, l = J;
                    a || (u = is.call(t), u == W ? u = et : u != et && (a = Ur(t))), c || (l = is.call(e), l == W ? l = et : l != et && (c = Ur(e)));
                    var p = u == et, h = l == et, d = u == l;
                    if (d && !a && !p)return $n(t, e, u);
                    if (!r) {
                        var f = p && es.call(t, "__wrapped__"), m = h && es.call(e, "__wrapped__");
                        if (f || m)return n(f ? t.value() : t, m ? e.value() : e, i, r, o, s)
                    }
                    if (!d)return !1;
                    o || (o = []), s || (s = []);
                    for (var y = o.length; y--;)if (o[y] == t)return s[y] == e;
                    o.push(t), s.push(e);
                    var g = (a ? Fn : zn)(t, e, n, i, r, o, s);
                    return o.pop(), s.pop(), g
                }

                function Ne(t, e, n) {
                    var i = e.length, r = i, o = !n;
                    if (null == t)return !r;
                    for (t = pi(t); i--;) {
                        var s = e[i];
                        if (o && s[2] ? s[1] !== t[s[0]] : !(s[0] in t))return !1
                    }
                    for (; ++i < r;) {
                        s = e[i];
                        var a = s[0], c = t[a], u = s[1];
                        if (o && s[2]) {
                            if (c === T && !(a in t))return !1
                        } else {
                            var l = n ? n(c, u, a) : T;
                            if (!(l === T ? Ie(u, c, n, !0) : l))return !1
                        }
                    }
                    return !0
                }

                function Fe(t, e) {
                    var n = -1, i = Kn(t) ? qo(t.length) : [];
                    return Ds(t, function (t, r, o) {
                        i[++n] = e(t, r, o)
                    }), i
                }

                function $e(t) {
                    var e = Bn(t);
                    if (1 == e.length && e[0][2]) {
                        var n = e[0][0], i = e[0][1];
                        return function (t) {
                            return null != t && (t[n] === i && (i !== T || n in pi(t)))
                        }
                    }
                    return function (t) {
                        return Ne(t, e)
                    }
                }

                function ze(t, e) {
                    var n = Aa(t), i = ti(t) && ii(e), r = t + "";
                    return t = hi(t), function (o) {
                        if (null == o)return !1;
                        var s = r;
                        if (o = pi(o), (n || !i) && !(s in o)) {
                            if (o = 1 == t.length ? o : Ve(o, Je(t, 0, -1)), null == o)return !1;
                            s = ji(t), o = pi(o)
                        }
                        return o[s] === e ? e !== T || s in o : Ie(e, o[s], T, !0)
                    }
                }

                function qe(t, e, n, i, r) {
                    if (!Vr(t))return t;
                    var o = Kn(e) && (Aa(e) || Ur(e)), s = o ? T : za(e);
                    return ee(s || e, function (a, c) {
                        if (s && (c = a, a = e[c]), v(a))i || (i = []), r || (r = []), Le(t, e, c, qe, n, i, r); else {
                            var u = t[c], l = n ? n(u, a, c, t, e) : T, p = l === T;
                            p && (l = a), l === T && (!o || c in t) || !p && (l === l ? l === u : u !== u) || (t[c] = l)
                        }
                    }), t
                }

                function Le(t, e, n, i, r, o, s) {
                    for (var a = o.length, c = e[n]; a--;)if (o[a] == c)return void(t[n] = s[a]);
                    var u = t[n], l = r ? r(u, c, n, t, e) : T, p = l === T;
                    p && (l = c, Kn(c) && (Aa(c) || Ur(c)) ? l = Aa(u) ? u : Kn(u) ? te(u) : [] : zr(c) || Sr(c) ? l = Sr(u) ? Jr(u) : zr(u) ? u : {} : p = !1), o.push(c), s.push(l), p ? t[n] = i(l, c, r, o, s) : (l === l ? l !== u : u === u) && (t[n] = l)
                }

                function Ue(t) {
                    return function (e) {
                        return null == e ? T : e[t]
                    }
                }

                function Be(t) {
                    var e = t + "";
                    return t = hi(t), function (n) {
                        return Ve(n, t, e)
                    }
                }

                function Ye(t, e) {
                    for (var n = t ? e.length : 0; n--;) {
                        var i = e[n];
                        if (i != r && Zn(i)) {
                            var r = i;
                            ds.call(t, i, 1)
                        }
                    }
                    return t
                }

                function He(t, e) {
                    return t + _s(js() * (e - t + 1))
                }

                function We(t, e, n, i, r) {
                    return r(t, function (t, r, o) {
                        n = i ? (i = !1, t) : e(n, t, r, o)
                    }), n
                }

                function Je(t, e, n) {
                    var i = -1, r = t.length;
                    e = null == e ? 0 : +e || 0, e < 0 && (e = -e > r ? 0 : r + e), n = n === T || n > r ? r : +n || 0, n < 0 && (n += r), r = e > n ? 0 : n - e >>> 0, e >>>= 0;
                    for (var o = qo(r); ++i < r;)o[i] = t[i + e];
                    return o
                }

                function Ge(t, e) {
                    var n;
                    return Ds(t, function (t, i, r) {
                        return n = e(t, i, r), !n
                    }), !!n
                }

                function Qe(t, e) {
                    var n = t.length;
                    for (t.sort(e); n--;)t[n] = t[n].value;
                    return t
                }

                function Ke(t, e, n) {
                    var i = qn(), r = -1;
                    e = ce(e, function (t) {
                        return i(t)
                    });
                    var o = Fe(t, function (t) {
                        var n = ce(e, function (e) {
                            return e(t)
                        });
                        return {criteria: n, index: ++r, value: t}
                    });
                    return Qe(o, function (t, e) {
                        return d(t, e, n)
                    })
                }

                function Ze(t, e) {
                    var n = 0;
                    return Ds(t, function (t, i, r) {
                        n += +e(t, i, r) || 0
                    }), n
                }

                function Xe(t, e) {
                    var n = -1, i = Un(), r = t.length, o = i == a, s = o && r >= L, c = s ? mn() : null, u = [];
                    c ? (i = Kt, o = !1) : (s = !1, c = e ? [] : u);
                    t:for (; ++n < r;) {
                        var l = t[n], p = e ? e(l, n, t) : l;
                        if (o && l === l) {
                            for (var h = c.length; h--;)if (c[h] === p)continue t;
                            e && c.push(p), u.push(l)
                        } else i(c, p, 0) < 0 && ((e || s) && c.push(p), u.push(l))
                    }
                    return u
                }

                function tn(t, e) {
                    for (var n = -1, i = e.length, r = qo(i); ++n < i;)r[n] = t[e[n]];
                    return r
                }

                function en(t, e, n, i) {
                    for (var r = t.length, o = i ? r : -1; (i ? o-- : ++o < r) && e(t[o], o, t););
                    return n ? Je(t, i ? 0 : o, i ? o + 1 : r) : Je(t, i ? o + 1 : 0, i ? r : o)
                }

                function nn(t, e) {
                    var n = t;
                    n instanceof r && (n = n.value());
                    for (var i = -1, o = e.length; ++i < o;) {
                        var s = e[i];
                        n = s.func.apply(s.thisArg, ue([n], s.args))
                    }
                    return n
                }

                function rn(t, e, n) {
                    var i = 0, r = t ? t.length : i;
                    if ("number" == typeof e && e === e && r <= Ms) {
                        for (; i < r;) {
                            var o = i + r >>> 1, s = t[o];
                            (n ? s <= e : s < e) && null !== s ? i = o + 1 : r = o
                        }
                        return r
                    }
                    return on(t, e, Ro, n)
                }

                function on(t, e, n, i) {
                    e = n(e);
                    for (var r = 0, o = t ? t.length : 0, s = e !== e, a = null === e, c = e === T; r < o;) {
                        var u = _s((r + o) / 2), l = n(t[u]), p = l !== T, h = l === l;
                        if (s)var d = h || i; else d = a ? h && p && (i || null != l) : c ? h && (i || p) : null != l && (i ? l <= e : l < e);
                        d ? r = u + 1 : o = u
                    }
                    return Cs(o, Ps)
                }

                function sn(t, e, n) {
                    if ("function" != typeof t)return Ro;
                    if (e === T)return t;
                    switch (n) {
                        case 1:
                            return function (n) {
                                return t.call(e, n)
                            };
                        case 3:
                            return function (n, i, r) {
                                return t.call(e, n, i, r)
                            };
                        case 4:
                            return function (n, i, r, o) {
                                return t.call(e, n, i, r, o)
                            };
                        case 5:
                            return function (n, i, r, o, s) {
                                return t.call(e, n, i, r, o, s)
                            }
                    }
                    return function () {
                        return t.apply(e, arguments)
                    }
                }

                function an(t) {
                    var e = new ss(t.byteLength), n = new fs(e);
                    return n.set(new fs(t)), e
                }

                function cn(t, e, n) {
                    for (var i = n.length, r = -1, o = xs(t.length - i, 0), s = -1, a = e.length, c = qo(a + o); ++s < a;)c[s] = e[s];
                    for (; ++r < i;)c[n[r]] = t[r];
                    for (; o--;)c[s++] = t[r++];
                    return c
                }

                function un(t, e, n) {
                    for (var i = -1, r = n.length, o = -1, s = xs(t.length - r, 0), a = -1, c = e.length, u = qo(s + c); ++o < s;)u[o] = t[o];
                    for (var l = o; ++a < c;)u[l + a] = e[a];
                    for (; ++i < r;)u[l + n[i]] = t[o++];
                    return u
                }

                function ln(t, e) {
                    return function (n, i, r) {
                        var o = e ? e() : {};
                        if (i = qn(i, r, 3), Aa(n))for (var s = -1, a = n.length; ++s < a;) {
                            var c = n[s];
                            t(o, c, i(c, s, n), n)
                        } else Ds(n, function (e, n, r) {
                            t(o, e, i(e, n, r), r)
                        });
                        return o
                    }
                }

                function pn(t) {
                    return gr(function (e, n) {
                        var i = -1, r = null == e ? 0 : n.length, o = r > 2 ? n[r - 2] : T, s = r > 2 ? n[2] : T, a = r > 1 ? n[r - 1] : T;
                        for ("function" == typeof o ? (o = sn(o, a, 5), r -= 2) : (o = "function" == typeof a ? a : T, r -= o ? 1 : 0), s && Xn(n[0], n[1], s) && (o = r < 3 ? T : o, r = 1); ++i < r;) {
                            var c = n[i];
                            c && t(e, c, o)
                        }
                        return e
                    })
                }

                function hn(t, e) {
                    return function (n, i) {
                        var r = n ? Ls(n) : 0;
                        if (!ni(r))return t(n, i);
                        for (var o = e ? r : -1, s = pi(n); (e ? o-- : ++o < r) && i(s[o], o, s) !== !1;);
                        return n
                    }
                }

                function dn(t) {
                    return function (e, n, i) {
                        for (var r = pi(e), o = i(e), s = o.length, a = t ? s : -1; t ? a-- : ++a < s;) {
                            var c = o[a];
                            if (n(r[c], c, r) === !1)break
                        }
                        return e
                    }
                }

                function fn(t, e) {
                    function n() {
                        var r = this && this !== ie && this instanceof n ? i : t;
                        return r.apply(e, arguments)
                    }

                    var i = gn(t);
                    return n
                }

                function mn(t) {
                    return gs && ps ? new Qt(t) : null
                }

                function yn(t) {
                    return function (e) {
                        for (var n = -1, i = So(lo(e)), r = i.length, o = ""; ++n < r;)o = t(o, i[n], n);
                        return o
                    }
                }

                function gn(t) {
                    return function () {
                        var e = arguments;
                        switch (e.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e[0]);
                            case 2:
                                return new t(e[0], e[1]);
                            case 3:
                                return new t(e[0], e[1], e[2]);
                            case 4:
                                return new t(e[0], e[1], e[2], e[3]);
                            case 5:
                                return new t(e[0], e[1], e[2], e[3], e[4]);
                            case 6:
                                return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                            case 7:
                                return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                        }
                        var n = Is(t.prototype), i = t.apply(n, e);
                        return Vr(i) ? i : n
                    }
                }

                function _n(t) {
                    function e(n, i, r) {
                        r && Xn(n, i, r) && (i = T);
                        var o = Nn(n, t, T, T, T, T, T, i);
                        return o.placeholder = e.placeholder, o
                    }

                    return e
                }

                function vn(t, e) {
                    return gr(function (n) {
                        var i = n[0];
                        return null == i ? i : (n.push(e), t.apply(T, n))
                    })
                }

                function wn(t, e) {
                    return function (n, i, r) {
                        if (r && Xn(n, i, r) && (i = T), i = qn(i, r, 3), 1 == i.length) {
                            n = Aa(n) ? n : li(n);
                            var o = se(n, i, t, e);
                            if (!n.length || o !== e)return o
                        }
                        return Se(n, i, t, e)
                    }
                }

                function bn(t, e) {
                    return function (n, i, r) {
                        if (i = qn(i, r, 3), Aa(n)) {
                            var o = s(n, i, e);
                            return o > -1 ? n[o] : T
                        }
                        return Re(n, i, t)
                    }
                }

                function xn(t) {
                    return function (e, n, i) {
                        return e && e.length ? (n = qn(n, i, 3), s(e, n, t)) : -1
                    }
                }

                function Cn(t) {
                    return function (e, n, i) {
                        return n = qn(n, i, 3), Re(e, n, t, !0)
                    }
                }

                function kn(t) {
                    return function () {
                        for (var e, n = arguments.length, r = t ? n : -1, o = 0, s = qo(n); t ? r-- : ++r < n;) {
                            var a = s[o++] = arguments[r];
                            if ("function" != typeof a)throw new Qo(Y);
                            !e && i.prototype.thru && "wrapper" == Ln(a) && (e = new i([], (!0)))
                        }
                        for (r = e ? -1 : n; ++r < n;) {
                            a = s[r];
                            var c = Ln(a), u = "wrapper" == c ? qs(a) : T;
                            e = u && ei(u[0]) && u[1] == (D | O | V | N) && !u[4].length && 1 == u[9] ? e[Ln(u[0])].apply(e, u[3]) : 1 == a.length && ei(a) ? e[c]() : e.thru(a)
                        }
                        return function () {
                            var t = arguments, i = t[0];
                            if (e && 1 == t.length && Aa(i) && i.length >= L)return e.plant(i).value();
                            for (var r = 0, o = n ? s[r].apply(this, t) : i; ++r < n;)o = s[r].call(this, o);
                            return o
                        }
                    }
                }

                function Sn(t, e) {
                    return function (n, i, r) {
                        return "function" == typeof i && r === T && Aa(n) ? t(n, i) : e(n, sn(i, r, 3))
                    }
                }

                function jn(t) {
                    return function (e, n, i) {
                        return "function" == typeof n && i === T || (n = sn(n, i, 3)), t(e, n, to)
                    }
                }

                function Tn(t) {
                    return function (e, n, i) {
                        return "function" == typeof n && i === T || (n = sn(n, i, 3)), t(e, n)
                    }
                }

                function Rn(t) {
                    return function (e, n, i) {
                        var r = {};
                        return n = qn(n, i, 3), Me(e, function (e, i, o) {
                            var s = n(e, i, o);
                            i = t ? s : i, e = t ? e : s, r[i] = e
                        }), r
                    }
                }

                function An(t) {
                    return function (e, n, i) {
                        return e = u(e), (t ? e : "") + En(e, n, i) + (t ? "" : e)
                    }
                }

                function Pn(t) {
                    var e = gr(function (n, i) {
                        var r = b(i, e.placeholder);
                        return Nn(n, t, T, i, r)
                    });
                    return e
                }

                function Mn(t, e) {
                    return function (n, i, r, o) {
                        var s = arguments.length < 3;
                        return "function" == typeof i && o === T && Aa(n) ? t(n, i, r, s) : We(n, qn(i, o, 4), r, s, e)
                    }
                }

                function On(t, e, n, i, r, o, s, a, c, u) {
                    function l() {
                        for (var _ = arguments.length, v = _, w = qo(_); v--;)w[v] = arguments[v];
                        if (i && (w = cn(w, i, r)), o && (w = un(w, o, s)), f || y) {
                            var x = l.placeholder, C = b(w, x);
                            if (_ -= C.length, _ < u) {
                                var k = a ? te(a) : T, S = xs(u - _, 0), j = f ? C : T, R = f ? T : C, M = f ? w : T, O = f ? T : w;
                                e |= f ? V : I, e &= ~(f ? I : V), m || (e &= ~(A | P));
                                var E = [t, e, n, M, j, O, R, k, c, S], D = On.apply(T, E);
                                return ei(t) && Us(D, E), D.placeholder = x, D
                            }
                        }
                        var N = h ? n : this, F = d ? N[t] : t;
                        return a && (w = ci(w, a)), p && c < w.length && (w.length = c), this && this !== ie && this instanceof l && (F = g || gn(t)), F.apply(N, w)
                    }

                    var p = e & D, h = e & A, d = e & P, f = e & O, m = e & M, y = e & E, g = d ? T : gn(t);
                    return l
                }

                function En(t, e, n) {
                    var i = t.length;
                    if (e = +e, i >= e || !ws(e))return "";
                    var r = e - i;
                    return n = null == n ? " " : n + "", go(n, ys(r / n.length)).slice(0, r)
                }

                function Vn(t, e, n, i) {
                    function r() {
                        for (var e = -1, a = arguments.length, c = -1, u = i.length, l = qo(u + a); ++c < u;)l[c] = i[c];
                        for (; a--;)l[c++] = arguments[++e];
                        var p = this && this !== ie && this instanceof r ? s : t;
                        return p.apply(o ? n : this, l)
                    }

                    var o = e & A, s = gn(t);
                    return r
                }

                function In(t) {
                    var e = Yo[t];
                    return function (t, n) {
                        return n = n === T ? 0 : +n || 0, n ? (n = us(10, n), e(t * n) / n) : e(t)
                    }
                }

                function Dn(t) {
                    return function (e, n, i, r) {
                        var o = qn(i);
                        return null == i && o === we ? rn(e, n, t) : on(e, n, o(i, r, 1), t)
                    }
                }

                function Nn(t, e, n, i, r, o, s, a) {
                    var c = e & P;
                    if (!c && "function" != typeof t)throw new Qo(Y);
                    var u = i ? i.length : 0;
                    if (u || (e &= ~(V | I), i = r = T), u -= r ? r.length : 0, e & I) {
                        var l = i, p = r;
                        i = r = T
                    }
                    var h = c ? T : qs(t), d = [t, e, n, i, r, l, p, o, s, a];
                    if (h && (ri(d, h), e = d[1], a = d[9]), d[9] = null == a ? c ? 0 : t.length : xs(a - u, 0) || 0, e == A)var f = fn(d[0], d[2]); else f = e != V && e != (A | V) || d[4].length ? On.apply(T, d) : Vn.apply(T, d);
                    var m = h ? zs : Us;
                    return m(f, d)
                }

                function Fn(t, e, n, i, r, o, s) {
                    var a = -1, c = t.length, u = e.length;
                    if (c != u && !(r && u > c))return !1;
                    for (; ++a < c;) {
                        var l = t[a], p = e[a], h = i ? i(r ? p : l, r ? l : p, a) : T;
                        if (h !== T) {
                            if (h)continue;
                            return !1
                        }
                        if (r) {
                            if (!he(e, function (t) {
                                    return l === t || n(l, t, i, r, o, s)
                                }))return !1
                        } else if (l !== p && !n(l, p, i, r, o, s))return !1
                    }
                    return !0
                }

                function $n(t, e, n) {
                    switch (n) {
                        case G:
                        case Q:
                            return +t == +e;
                        case K:
                            return t.name == e.name && t.message == e.message;
                        case tt:
                            return t != +t ? e != +e : t == +e;
                        case nt:
                        case rt:
                            return t == e + ""
                    }
                    return !1
                }

                function zn(t, e, n, i, r, o, s) {
                    var a = za(t), c = a.length, u = za(e), l = u.length;
                    if (c != l && !r)return !1;
                    for (var p = c; p--;) {
                        var h = a[p];
                        if (!(r ? h in e : es.call(e, h)))return !1
                    }
                    for (var d = r; ++p < c;) {
                        h = a[p];
                        var f = t[h], m = e[h], y = i ? i(r ? m : f, r ? f : m, h) : T;
                        if (!(y === T ? n(f, m, i, r, o, s) : y))return !1;
                        d || (d = "constructor" == h)
                    }
                    if (!d) {
                        var g = t.constructor, _ = e.constructor;
                        if (g != _ && "constructor" in t && "constructor" in e && !("function" == typeof g && g instanceof g && "function" == typeof _ && _ instanceof _))return !1
                    }
                    return !0
                }

                function qn(t, n, i) {
                    var r = e.callback || jo;
                    return r = r === jo ? we : r, i ? r(t, n, i) : r
                }

                function Ln(t) {
                    for (var e = t.name, n = Vs[e], i = n ? n.length : 0; i--;) {
                        var r = n[i], o = r.func;
                        if (null == o || o == t)return r.name
                    }
                    return e
                }

                function Un(t, n, i) {
                    var r = e.indexOf || ki;
                    return r = r === ki ? a : r, t ? r(t, n, i) : r
                }

                function Bn(t) {
                    for (var e = eo(t), n = e.length; n--;)e[n][2] = ii(e[n][1]);
                    return e
                }

                function Yn(t, e) {
                    var n = null == t ? T : t[e];
                    return Nr(n) ? n : T
                }

                function Hn(t, e, n) {
                    for (var i = -1, r = n.length; ++i < r;) {
                        var o = n[i], s = o.size;
                        switch (o.type) {
                            case"drop":
                                t += s;
                                break;
                            case"dropRight":
                                e -= s;
                                break;
                            case"take":
                                e = Cs(e, t + s);
                                break;
                            case"takeRight":
                                t = xs(t, e - s)
                        }
                    }
                    return {start: t, end: e}
                }

                function Wn(t) {
                    var e = t.length, n = new t.constructor(e);
                    return e && "string" == typeof t[0] && es.call(t, "index") && (n.index = t.index, n.input = t.input), n
                }

                function Jn(t) {
                    var e = t.constructor;
                    return "function" == typeof e && e instanceof e || (e = Wo), new e
                }

                function Gn(t, e, n) {
                    var i = t.constructor;
                    switch (e) {
                        case st:
                            return an(t);
                        case G:
                        case Q:
                            return new i((+t));
                        case at:
                        case ct:
                        case ut:
                        case lt:
                        case pt:
                        case ht:
                        case dt:
                        case ft:
                        case mt:
                            var r = t.buffer;
                            return new i(n ? an(r) : r, t.byteOffset, t.length);
                        case tt:
                        case rt:
                            return new i(t);
                        case nt:
                            var o = new i(t.source, Vt.exec(t));
                            o.lastIndex = t.lastIndex
                    }
                    return o
                }

                function Qn(t, e, n) {
                    null == t || ti(e, t) || (e = hi(e), t = 1 == e.length ? t : Ve(t, Je(e, 0, -1)), e = ji(e));
                    var i = null == t ? t : t[e];
                    return null == i ? T : i.apply(t, n)
                }

                function Kn(t) {
                    return null != t && ni(Ls(t))
                }

                function Zn(t, e) {
                    return t = "number" == typeof t || Nt.test(t) ? +t : -1, e = null == e ? Os : e, t > -1 && t % 1 == 0 && t < e
                }

                function Xn(t, e, n) {
                    if (!Vr(n))return !1;
                    var i = typeof e;
                    if ("number" == i ? Kn(n) && Zn(e, n.length) : "string" == i && e in n) {
                        var r = n[e];
                        return t === t ? t === r : r !== r
                    }
                    return !1
                }

                function ti(t, e) {
                    var n = typeof t;
                    if ("string" == n && Tt.test(t) || "number" == n)return !0;
                    if (Aa(t))return !1;
                    var i = !jt.test(t);
                    return i || null != e && t in pi(e)
                }

                function ei(t) {
                    var n = Ln(t);
                    if (!(n in r.prototype))return !1;
                    var i = e[n];
                    if (t === i)return !0;
                    var o = qs(i);
                    return !!o && t === o[0]
                }

                function ni(t) {
                    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= Os
                }

                function ii(t) {
                    return t === t && !Vr(t)
                }

                function ri(t, e) {
                    var n = t[1], i = e[1], r = n | i, o = r < D, s = i == D && n == O || i == D && n == N && t[7].length <= e[8] || i == (D | N) && n == O;
                    if (!o && !s)return t;
                    i & A && (t[2] = e[2], r |= n & A ? 0 : M);
                    var a = e[3];
                    if (a) {
                        var c = t[3];
                        t[3] = c ? cn(c, a, e[4]) : te(a), t[4] = c ? b(t[3], H) : te(e[4])
                    }
                    return a = e[5], a && (c = t[5], t[5] = c ? un(c, a, e[6]) : te(a), t[6] = c ? b(t[5], H) : te(e[6])), a = e[7], a && (t[7] = te(a)), i & D && (t[8] = null == t[8] ? e[8] : Cs(t[8], e[8])), null == t[9] && (t[9] = e[9]), t[0] = e[0], t[1] = r, t
                }

                function oi(t, e) {
                    return t === T ? e : Pa(t, e, oi)
                }

                function si(t, e) {
                    t = pi(t);
                    for (var n = -1, i = e.length, r = {}; ++n < i;) {
                        var o = e[n];
                        o in t && (r[o] = t[o])
                    }
                    return r
                }

                function ai(t, e) {
                    var n = {};
                    return Pe(t, function (t, i, r) {
                        e(t, i, r) && (n[i] = t)
                    }), n
                }

                function ci(t, e) {
                    for (var n = t.length, i = Cs(e.length, n), r = te(t); i--;) {
                        var o = e[i];
                        t[i] = Zn(o, n) ? r[o] : T
                    }
                    return t
                }

                function ui(t) {
                    for (var e = to(t), n = e.length, i = n && t.length, r = !!i && ni(i) && (Aa(t) || Sr(t)), o = -1, s = []; ++o < n;) {
                        var a = e[o];
                        (r && Zn(a, i) || es.call(t, a)) && s.push(a)
                    }
                    return s
                }

                function li(t) {
                    return null == t ? [] : Kn(t) ? Vr(t) ? t : Wo(t) : oo(t)
                }

                function pi(t) {
                    return Vr(t) ? t : Wo(t)
                }

                function hi(t) {
                    if (Aa(t))return t;
                    var e = [];
                    return u(t).replace(Rt, function (t, n, i, r) {
                        e.push(i ? r.replace(Ot, "$1") : n || t)
                    }), e
                }

                function di(t) {
                    return t instanceof r ? t.clone() : new i(t.__wrapped__, t.__chain__, te(t.__actions__))
                }

                function fi(t, e, n) {
                    e = (n ? Xn(t, e, n) : null == e) ? 1 : xs(_s(e) || 1, 1);
                    for (var i = 0, r = t ? t.length : 0, o = -1, s = qo(ys(r / e)); i < r;)s[++o] = Je(t, i, i += e);
                    return s
                }

                function mi(t) {
                    for (var e = -1, n = t ? t.length : 0, i = -1, r = []; ++e < n;) {
                        var o = t[e];
                        o && (r[++i] = o)
                    }
                    return r
                }

                function yi(t, e, n) {
                    var i = t ? t.length : 0;
                    return i ? ((n ? Xn(t, e, n) : null == e) && (e = 1), Je(t, e < 0 ? 0 : e)) : []
                }

                function gi(t, e, n) {
                    var i = t ? t.length : 0;
                    return i ? ((n ? Xn(t, e, n) : null == e) && (e = 1), e = i - (+e || 0), Je(t, 0, e < 0 ? 0 : e)) : []
                }

                function _i(t, e, n) {
                    return t && t.length ? en(t, qn(e, n, 3), !0, !0) : []
                }

                function vi(t, e, n) {
                    return t && t.length ? en(t, qn(e, n, 3), !0) : []
                }

                function wi(t, e, n, i) {
                    var r = t ? t.length : 0;
                    return r ? (n && "number" != typeof n && Xn(t, e, n) && (n = 0, i = r), je(t, e, n, i)) : []
                }

                function bi(t) {
                    return t ? t[0] : T
                }

                function xi(t, e, n) {
                    var i = t ? t.length : 0;
                    return n && Xn(t, e, n) && (e = !1), i ? Ae(t, e) : []
                }

                function Ci(t) {
                    var e = t ? t.length : 0;
                    return e ? Ae(t, !0) : []
                }

                function ki(t, e, n) {
                    var i = t ? t.length : 0;
                    if (!i)return -1;
                    if ("number" == typeof n)n = n < 0 ? xs(i + n, 0) : n; else if (n) {
                        var r = rn(t, e);
                        return r < i && (e === e ? e === t[r] : t[r] !== t[r]) ? r : -1
                    }
                    return a(t, e, n || 0)
                }

                function Si(t) {
                    return gi(t, 1)
                }

                function ji(t) {
                    var e = t ? t.length : 0;
                    return e ? t[e - 1] : T
                }

                function Ti(t, e, n) {
                    var i = t ? t.length : 0;
                    if (!i)return -1;
                    var r = i;
                    if ("number" == typeof n)r = (n < 0 ? xs(i + n, 0) : Cs(n || 0, i - 1)) + 1; else if (n) {
                        r = rn(t, e, !0) - 1;
                        var o = t[r];
                        return (e === e ? e === o : o !== o) ? r : -1
                    }
                    if (e !== e)return _(t, r, !0);
                    for (; r--;)if (t[r] === e)return r;
                    return -1
                }

                function Ri() {
                    var t = arguments, e = t[0];
                    if (!e || !e.length)return e;
                    for (var n = 0, i = Un(), r = t.length; ++n < r;)for (var o = 0, s = t[n]; (o = i(e, s, o)) > -1;)ds.call(e, o, 1);
                    return e
                }

                function Ai(t, e, n) {
                    var i = [];
                    if (!t || !t.length)return i;
                    var r = -1, o = [], s = t.length;
                    for (e = qn(e, n, 3); ++r < s;) {
                        var a = t[r];
                        e(a, r, t) && (i.push(a), o.push(r))
                    }
                    return Ye(t, o), i
                }

                function Pi(t) {
                    return yi(t, 1)
                }

                function Mi(t, e, n) {
                    var i = t ? t.length : 0;
                    return i ? (n && "number" != typeof n && Xn(t, e, n) && (e = 0, n = i), Je(t, e, n)) : []
                }

                function Oi(t, e, n) {
                    var i = t ? t.length : 0;
                    return i ? ((n ? Xn(t, e, n) : null == e) && (e = 1), Je(t, 0, e < 0 ? 0 : e)) : []
                }

                function Ei(t, e, n) {
                    var i = t ? t.length : 0;
                    return i ? ((n ? Xn(t, e, n) : null == e) && (e = 1), e = i - (+e || 0), Je(t, e < 0 ? 0 : e)) : []
                }

                function Vi(t, e, n) {
                    return t && t.length ? en(t, qn(e, n, 3), !1, !0) : []
                }

                function Ii(t, e, n) {
                    return t && t.length ? en(t, qn(e, n, 3)) : []
                }

                function Di(t, e, n, i) {
                    var r = t ? t.length : 0;
                    if (!r)return [];
                    null != e && "boolean" != typeof e && (i = n, n = Xn(t, e, i) ? T : e, e = !1);
                    var o = qn();
                    return null == n && o === we || (n = o(n, i, 3)), e && Un() == a ? x(t, n) : Xe(t, n)
                }

                function Ni(t) {
                    if (!t || !t.length)return [];
                    var e = -1, n = 0;
                    t = ae(t, function (t) {
                        if (Kn(t))return n = xs(t.length, n), !0
                    });
                    for (var i = qo(n); ++e < n;)i[e] = ce(t, Ue(e));
                    return i
                }

                function Fi(t, e, n) {
                    var i = t ? t.length : 0;
                    if (!i)return [];
                    var r = Ni(t);
                    return null == e ? r : (e = sn(e, n, 4), ce(r, function (t) {
                        return le(t, e, T, !0)
                    }))
                }

                function $i() {
                    for (var t = -1, e = arguments.length; ++t < e;) {
                        var n = arguments[t];
                        if (Kn(n))var i = i ? ue(Ce(i, n), Ce(n, i)) : n
                    }
                    return i ? Xe(i) : []
                }

                function zi(t, e) {
                    var n = -1, i = t ? t.length : 0, r = {};
                    for (!i || e || Aa(t[0]) || (e = []); ++n < i;) {
                        var o = t[n];
                        e ? r[o] = e[n] : o && (r[o[0]] = o[1])
                    }
                    return r
                }

                function qi(t) {
                    var n = e(t);
                    return n.__chain__ = !0, n
                }

                function Li(t, e, n) {
                    return e.call(n, t), t
                }

                function Ui(t, e, n) {
                    return e.call(n, t)
                }

                function Bi() {
                    return qi(this)
                }

                function Yi() {
                    return new i(this.value(), this.__chain__)
                }

                function Hi(t) {
                    for (var e, i = this; i instanceof n;) {
                        var r = di(i);
                        e ? o.__wrapped__ = r : e = r;
                        var o = r;
                        i = i.__wrapped__
                    }
                    return o.__wrapped__ = t, e
                }

                function Wi() {
                    var t = this.__wrapped__, e = function (t) {
                        return n && n.__dir__ < 0 ? t : t.reverse()
                    };
                    if (t instanceof r) {
                        var n = t;
                        return this.__actions__.length && (n = new r(this)), n = n.reverse(), n.__actions__.push({
                            func: Ui,
                            args: [e],
                            thisArg: T
                        }), new i(n, this.__chain__)
                    }
                    return this.thru(e)
                }

                function Ji() {
                    return this.value() + ""
                }

                function Gi() {
                    return nn(this.__wrapped__, this.__actions__)
                }

                function Qi(t, e, n) {
                    var i = Aa(t) ? oe : ke;
                    return n && Xn(t, e, n) && (e = T), "function" == typeof e && n === T || (e = qn(e, n, 3)), i(t, e)
                }

                function Ki(t, e, n) {
                    var i = Aa(t) ? ae : Te;
                    return e = qn(e, n, 3), i(t, e)
                }

                function Zi(t, e) {
                    return ra(t, $e(e))
                }

                function Xi(t, e, n, i) {
                    var r = t ? Ls(t) : 0;
                    return ni(r) || (t = oo(t), r = t.length), n = "number" != typeof n || i && Xn(e, n, i) ? 0 : n < 0 ? xs(r + n, 0) : n || 0, "string" == typeof t || !Aa(t) && Lr(t) ? n <= r && t.indexOf(e, n) > -1 : !!r && Un(t, e, n) > -1
                }

                function tr(t, e, n) {
                    var i = Aa(t) ? ce : Fe;
                    return e = qn(e, n, 3), i(t, e)
                }

                function er(t, e) {
                    return tr(t, Vo(e))
                }

                function nr(t, e, n) {
                    var i = Aa(t) ? ae : Te;
                    return e = qn(e, n, 3), i(t, function (t, n, i) {
                        return !e(t, n, i)
                    })
                }

                function ir(t, e, n) {
                    if (n ? Xn(t, e, n) : null == e) {
                        t = li(t);
                        var i = t.length;
                        return i > 0 ? t[He(0, i - 1)] : T
                    }
                    var r = -1, o = Wr(t), i = o.length, s = i - 1;
                    for (e = Cs(e < 0 ? 0 : +e || 0, i); ++r < e;) {
                        var a = He(r, s), c = o[a];
                        o[a] = o[r], o[r] = c
                    }
                    return o.length = e, o
                }

                function rr(t) {
                    return ir(t, Rs)
                }

                function or(t) {
                    var e = t ? Ls(t) : 0;
                    return ni(e) ? e : za(t).length
                }

                function sr(t, e, n) {
                    var i = Aa(t) ? he : Ge;
                    return n && Xn(t, e, n) && (e = T), "function" == typeof e && n === T || (e = qn(e, n, 3)), i(t, e)
                }

                function ar(t, e, n) {
                    if (null == t)return [];
                    n && Xn(t, e, n) && (e = T);
                    var i = -1;
                    e = qn(e, n, 3);
                    var r = Fe(t, function (t, n, r) {
                        return {criteria: e(t, n, r), index: ++i, value: t}
                    });
                    return Qe(r, h)
                }

                function cr(t, e, n, i) {
                    return null == t ? [] : (i && Xn(e, n, i) && (n = T), Aa(e) || (e = null == e ? [] : [e]), Aa(n) || (n = null == n ? [] : [n]), Ke(t, e, n))
                }

                function ur(t, e) {
                    return Ki(t, $e(e))
                }

                function lr(t, e) {
                    if ("function" != typeof e) {
                        if ("function" != typeof t)throw new Qo(Y);
                        var n = t;
                        t = e, e = n
                    }
                    return t = ws(t = +t) ? t : 0, function () {
                        if (--t < 1)return e.apply(this, arguments)
                    }
                }

                function pr(t, e, n) {
                    return n && Xn(t, e, n) && (e = T), e = t && null == e ? t.length : xs(+e || 0, 0), Nn(t, D, T, T, T, T, e)
                }

                function hr(t, e) {
                    var n;
                    if ("function" != typeof e) {
                        if ("function" != typeof t)throw new Qo(Y);
                        var i = t;
                        t = e, e = i
                    }
                    return function () {
                        return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = T), n
                    }
                }

                function dr(t, e, n) {
                    function i() {
                        d && as(d), u && as(u), m = 0, u = d = f = T
                    }

                    function r(e, n) {
                        n && as(n), u = d = f = T, e && (m = ma(), l = t.apply(h, c), d || u || (c = h = T))
                    }

                    function o() {
                        var t = e - (ma() - p);
                        t <= 0 || t > e ? r(f, u) : d = hs(o, t)
                    }

                    function s() {
                        r(g, d)
                    }

                    function a() {
                        if (c = arguments, p = ma(), h = this, f = g && (d || !_), y === !1)var n = _ && !d; else {
                            u || _ || (m = p);
                            var i = y - (p - m), r = i <= 0 || i > y;
                            r ? (u && (u = as(u)), m = p, l = t.apply(h, c)) : u || (u = hs(s, i))
                        }
                        return r && d ? d = as(d) : d || e === y || (d = hs(o, e)), n && (r = !0, l = t.apply(h, c)), !r || d || u || (c = h = T), l
                    }

                    var c, u, l, p, h, d, f, m = 0, y = !1, g = !0;
                    if ("function" != typeof t)throw new Qo(Y);
                    if (e = e < 0 ? 0 : +e || 0, n === !0) {
                        var _ = !0;
                        g = !1
                    } else Vr(n) && (_ = !!n.leading, y = "maxWait" in n && xs(+n.maxWait || 0, e), g = "trailing" in n ? !!n.trailing : g);
                    return a.cancel = i, a
                }

                function fr(t, e) {
                    if ("function" != typeof t || e && "function" != typeof e)throw new Qo(Y);
                    var n = function () {
                        var i = arguments, r = e ? e.apply(this, i) : i[0], o = n.cache;
                        if (o.has(r))return o.get(r);
                        var s = t.apply(this, i);
                        return n.cache = o.set(r, s), s
                    };
                    return n.cache = new fr.Cache, n
                }

                function mr(t) {
                    if ("function" != typeof t)throw new Qo(Y);
                    return function () {
                        return !t.apply(this, arguments)
                    }
                }

                function yr(t) {
                    return hr(2, t)
                }

                function gr(t, e) {
                    if ("function" != typeof t)throw new Qo(Y);
                    return e = xs(e === T ? t.length - 1 : +e || 0, 0), function () {
                        for (var n = arguments, i = -1, r = xs(n.length - e, 0), o = qo(r); ++i < r;)o[i] = n[e + i];
                        switch (e) {
                            case 0:
                                return t.call(this, o);
                            case 1:
                                return t.call(this, n[0], o);
                            case 2:
                                return t.call(this, n[0], n[1], o)
                        }
                        var s = qo(e + 1);
                        for (i = -1; ++i < e;)s[i] = n[i];
                        return s[e] = o, t.apply(this, s)
                    }
                }

                function _r(t) {
                    if ("function" != typeof t)throw new Qo(Y);
                    return function (e) {
                        return t.apply(this, e)
                    }
                }

                function vr(t, e, n) {
                    var i = !0, r = !0;
                    if ("function" != typeof t)throw new Qo(Y);
                    return n === !1 ? i = !1 : Vr(n) && (i = "leading" in n ? !!n.leading : i, r = "trailing" in n ? !!n.trailing : r), dr(t, e, {
                        leading: i,
                        maxWait: +e,
                        trailing: r
                    })
                }

                function wr(t, e) {
                    return e = null == e ? Ro : e, Nn(e, V, T, [t], [])
                }

                function br(t, e, n, i) {
                    return e && "boolean" != typeof e && Xn(t, e, n) ? e = !1 : "function" == typeof e && (i = n, n = e, e = !1), "function" == typeof n ? be(t, e, sn(n, i, 1)) : be(t, e)
                }

                function xr(t, e, n) {
                    return "function" == typeof e ? be(t, !0, sn(e, n, 1)) : be(t, !0)
                }

                function Cr(t, e) {
                    return t > e
                }

                function kr(t, e) {
                    return t >= e
                }

                function Sr(t) {
                    return v(t) && Kn(t) && es.call(t, "callee") && !ls.call(t, "callee")
                }

                function jr(t) {
                    return t === !0 || t === !1 || v(t) && is.call(t) == G
                }

                function Tr(t) {
                    return v(t) && is.call(t) == Q
                }

                function Rr(t) {
                    return !!t && 1 === t.nodeType && v(t) && !zr(t)
                }

                function Ar(t) {
                    return null == t || (Kn(t) && (Aa(t) || Lr(t) || Sr(t) || v(t) && Er(t.splice)) ? !t.length : !za(t).length)
                }

                function Pr(t, e, n, i) {
                    n = "function" == typeof n ? sn(n, i, 3) : T;
                    var r = n ? n(t, e) : T;
                    return r === T ? Ie(t, e, n) : !!r
                }

                function Mr(t) {
                    return v(t) && "string" == typeof t.message && is.call(t) == K
                }

                function Or(t) {
                    return "number" == typeof t && ws(t)
                }

                function Er(t) {
                    return Vr(t) && is.call(t) == Z
                }

                function Vr(t) {
                    var e = typeof t;
                    return !!t && ("object" == e || "function" == e)
                }

                function Ir(t, e, n, i) {
                    return n = "function" == typeof n ? sn(n, i, 3) : T, Ne(t, Bn(e), n)
                }

                function Dr(t) {
                    return $r(t) && t != +t
                }

                function Nr(t) {
                    return null != t && (Er(t) ? os.test(ts.call(t)) : v(t) && Dt.test(t))
                }

                function Fr(t) {
                    return null === t
                }

                function $r(t) {
                    return "number" == typeof t || v(t) && is.call(t) == tt
                }

                function zr(t) {
                    var e;
                    if (!v(t) || is.call(t) != et || Sr(t) || !es.call(t, "constructor") && (e = t.constructor, "function" == typeof e && !(e instanceof e)))return !1;
                    var n;
                    return Pe(t, function (t, e) {
                        n = e
                    }), n === T || es.call(t, n)
                }

                function qr(t) {
                    return Vr(t) && is.call(t) == nt
                }

                function Lr(t) {
                    return "string" == typeof t || v(t) && is.call(t) == rt
                }

                function Ur(t) {
                    return v(t) && ni(t.length) && !!Bt[is.call(t)]
                }

                function Br(t) {
                    return t === T
                }

                function Yr(t, e) {
                    return t < e
                }

                function Hr(t, e) {
                    return t <= e
                }

                function Wr(t) {
                    var e = t ? Ls(t) : 0;
                    return ni(e) ? e ? te(t) : [] : oo(t)
                }

                function Jr(t) {
                    return ve(t, to(t))
                }

                function Gr(t, e, n) {
                    var i = Is(t);
                    return n && Xn(t, e, n) && (e = T), e ? ge(i, e) : i
                }

                function Qr(t) {
                    return Ee(t, to(t))
                }

                function Kr(t, e, n) {
                    var i = null == t ? T : Ve(t, hi(e), e + "");
                    return i === T ? n : i
                }

                function Zr(t, e) {
                    if (null == t)return !1;
                    var n = es.call(t, e);
                    if (!n && !ti(e)) {
                        if (e = hi(e), t = 1 == e.length ? t : Ve(t, Je(e, 0, -1)), null == t)return !1;
                        e = ji(e), n = es.call(t, e)
                    }
                    return n || ni(t.length) && Zn(e, t.length) && (Aa(t) || Sr(t))
                }

                function Xr(t, e, n) {
                    n && Xn(t, e, n) && (e = T);
                    for (var i = -1, r = za(t), o = r.length, s = {}; ++i < o;) {
                        var a = r[i], c = t[a];
                        e ? es.call(s, c) ? s[c].push(a) : s[c] = [a] : s[c] = a
                    }
                    return s
                }

                function to(t) {
                    if (null == t)return [];
                    Vr(t) || (t = Wo(t));
                    var e = t.length;
                    e = e && ni(e) && (Aa(t) || Sr(t)) && e || 0;
                    for (var n = t.constructor, i = -1, r = "function" == typeof n && n.prototype === t, o = qo(e), s = e > 0; ++i < e;)o[i] = i + "";
                    for (var a in t)s && Zn(a, e) || "constructor" == a && (r || !es.call(t, a)) || o.push(a);
                    return o
                }

                function eo(t) {
                    t = pi(t);
                    for (var e = -1, n = za(t), i = n.length, r = qo(i); ++e < i;) {
                        var o = n[e];
                        r[e] = [o, t[o]]
                    }
                    return r
                }

                function no(t, e, n) {
                    var i = null == t ? T : t[e];
                    return i === T && (null == t || ti(e, t) || (e = hi(e), t = 1 == e.length ? t : Ve(t, Je(e, 0, -1)), i = null == t ? T : t[ji(e)]), i = i === T ? n : i), Er(i) ? i.call(t) : i
                }

                function io(t, e, n) {
                    if (null == t)return t;
                    var i = e + "";
                    e = null != t[i] || ti(e, t) ? [i] : hi(e);
                    for (var r = -1, o = e.length, s = o - 1, a = t; null != a && ++r < o;) {
                        var c = e[r];
                        Vr(a) && (r == s ? a[c] = n : null == a[c] && (a[c] = Zn(e[r + 1]) ? [] : {})), a = a[c]
                    }
                    return t
                }

                function ro(t, e, n, i) {
                    var r = Aa(t) || Ur(t);
                    if (e = qn(e, i, 4), null == n)if (r || Vr(t)) {
                        var o = t.constructor;
                        n = r ? Aa(t) ? new o : [] : Is(Er(o) ? o.prototype : T)
                    } else n = {};
                    return (r ? ee : Me)(t, function (t, i, r) {
                        return e(n, t, i, r)
                    }), n
                }

                function oo(t) {
                    return tn(t, za(t))
                }

                function so(t) {
                    return tn(t, to(t))
                }

                function ao(t, e, n) {
                    return e = +e || 0, n === T ? (n = e, e = 0) : n = +n || 0, t >= Cs(e, n) && t < xs(e, n)
                }

                function co(t, e, n) {
                    n && Xn(t, e, n) && (e = n = T);
                    var i = null == t, r = null == e;
                    if (null == n && (r && "boolean" == typeof t ? (n = t, t = 1) : "boolean" == typeof e && (n = e, r = !0)), i && r && (e = 1, r = !1), t = +t || 0, r ? (e = t, t = 0) : e = +e || 0, n || t % 1 || e % 1) {
                        var o = js();
                        return Cs(t + o * (e - t + cs("1e-" + ((o + "").length - 1))), e)
                    }
                    return He(t, e)
                }

                function uo(t) {
                    return t = u(t), t && t.charAt(0).toUpperCase() + t.slice(1)
                }

                function lo(t) {
                    return t = u(t), t && t.replace(Ft, f).replace(Mt, "")
                }

                function po(t, e, n) {
                    t = u(t), e += "";
                    var i = t.length;
                    return n = n === T ? i : Cs(n < 0 ? 0 : +n || 0, i), n -= e.length, n >= 0 && t.indexOf(e, n) == n
                }

                function ho(t) {
                    return t = u(t), t && xt.test(t) ? t.replace(wt, m) : t
                }

                function fo(t) {
                    return t = u(t), t && Pt.test(t) ? t.replace(At, y) : t || "(?:)"
                }

                function mo(t, e, n) {
                    t = u(t), e = +e;
                    var i = t.length;
                    if (i >= e || !ws(e))return t;
                    var r = (e - i) / 2, o = _s(r), s = ys(r);
                    return n = En("", s, n), n.slice(0, o) + t + n
                }

                function yo(t, e, n) {
                    return (n ? Xn(t, e, n) : null == e) ? e = 0 : e && (e = +e), t = wo(t), Ss(t, e || (It.test(t) ? 16 : 10))
                }

                function go(t, e) {
                    var n = "";
                    if (t = u(t), e = +e, e < 1 || !t || !ws(e))return n;
                    do e % 2 && (n += t), e = _s(e / 2), t += t; while (e);
                    return n
                }

                function _o(t, e, n) {
                    return t = u(t), n = null == n ? 0 : Cs(n < 0 ? 0 : +n || 0, t.length), t.lastIndexOf(e, n) == n
                }

                function vo(t, n, i) {
                    var r = e.templateSettings;
                    i && Xn(t, n, i) && (n = i = T), t = u(t), n = ye(ge({}, i || n), r, me);
                    var o, s, a = ye(ge({}, n.imports), r.imports, me), c = za(a), l = tn(a, c), p = 0, h = n.interpolate || $t, d = "__p += '", f = Jo((n.escape || $t).source + "|" + h.source + "|" + (h === St ? Et : $t).source + "|" + (n.evaluate || $t).source + "|$", "g"), m = "//# sourceURL=" + ("sourceURL" in n ? n.sourceURL : "lodash.templateSources[" + ++Ut + "]") + "\n";
                    t.replace(f, function (e, n, i, r, a, c) {
                        return i || (i = r), d += t.slice(p, c).replace(zt, g), n && (o = !0, d += "' +\n__e(" + n + ") +\n'"), a && (s = !0, d += "';\n" + a + ";\n__p += '"), i && (d += "' +\n((__t = (" + i + ")) == null ? '' : __t) +\n'"), p = c + e.length, e
                    }), d += "';\n";
                    var y = n.variable;
                    y || (d = "with (obj) {\n" + d + "\n}\n"), d = (s ? d.replace(yt, "") : d).replace(gt, "$1").replace(_t, "$1;"), d = "function(" + (y || "obj") + ") {\n" + (y ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (s ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + d + "return __p\n}";
                    var _ = Ka(function () {
                        return Bo(c, m + "return " + d).apply(T, l)
                    });
                    if (_.source = d, Mr(_))throw _;
                    return _
                }

                function wo(t, e, n) {
                    var i = t;
                    return (t = u(t)) ? (n ? Xn(i, e, n) : null == e) ? t.slice(C(t), k(t) + 1) : (e += "", t.slice(l(t, e), p(t, e) + 1)) : t
                }

                function bo(t, e, n) {
                    var i = t;
                    return t = u(t), t ? (n ? Xn(i, e, n) : null == e) ? t.slice(C(t)) : t.slice(l(t, e + "")) : t
                }

                function xo(t, e, n) {
                    var i = t;
                    return t = u(t), t ? (n ? Xn(i, e, n) : null == e) ? t.slice(0, k(t) + 1) : t.slice(0, p(t, e + "") + 1) : t
                }

                function Co(t, e, n) {
                    n && Xn(t, e, n) && (e = T);
                    var i = F, r = $;
                    if (null != e)if (Vr(e)) {
                        var o = "separator" in e ? e.separator : o;
                        i = "length" in e ? +e.length || 0 : i, r = "omission" in e ? u(e.omission) : r
                    } else i = +e || 0;
                    if (t = u(t), i >= t.length)return t;
                    var s = i - r.length;
                    if (s < 1)return r;
                    var a = t.slice(0, s);
                    if (null == o)return a + r;
                    if (qr(o)) {
                        if (t.slice(s).search(o)) {
                            var c, l, p = t.slice(0, s);
                            for (o.global || (o = Jo(o.source, (Vt.exec(o) || "") + "g")), o.lastIndex = 0; c = o.exec(p);)l = c.index;
                            a = a.slice(0, null == l ? s : l)
                        }
                    } else if (t.indexOf(o, s) != s) {
                        var h = a.lastIndexOf(o);
                        h > -1 && (a = a.slice(0, h))
                    }
                    return a + r
                }

                function ko(t) {
                    return t = u(t), t && bt.test(t) ? t.replace(vt, S) : t
                }

                function So(t, e, n) {
                    return n && Xn(t, e, n) && (e = T), t = u(t), t.match(e || qt) || []
                }

                function jo(t, e, n) {
                    return n && Xn(t, e, n) && (e = T), v(t) ? Ao(t) : we(t, e)
                }

                function To(t) {
                    return function () {
                        return t
                    }
                }

                function Ro(t) {
                    return t
                }

                function Ao(t) {
                    return $e(be(t, !0))
                }

                function Po(t, e) {
                    return ze(t, be(e, !0))
                }

                function Mo(t, e, n) {
                    if (null == n) {
                        var i = Vr(e), r = i ? za(e) : T, o = r && r.length ? Ee(e, r) : T;
                        (o ? o.length : i) || (o = !1, n = e, e = t, t = this)
                    }
                    o || (o = Ee(e, za(e)));
                    var s = !0, a = -1, c = Er(t), u = o.length;
                    n === !1 ? s = !1 : Vr(n) && "chain" in n && (s = n.chain);
                    for (; ++a < u;) {
                        var l = o[a], p = e[l];
                        t[l] = p, c && (t.prototype[l] = function (e) {
                            return function () {
                                var n = this.__chain__;
                                if (s || n) {
                                    var i = t(this.__wrapped__), r = i.__actions__ = te(this.__actions__);
                                    return r.push({func: e, args: arguments, thisArg: t}), i.__chain__ = n, i
                                }
                                return e.apply(t, ue([this.value()], arguments))
                            }
                        }(p))
                    }
                    return t
                }

                function Oo() {
                    return ie._ = rs, this
                }

                function Eo() {
                }

                function Vo(t) {
                    return ti(t) ? Ue(t) : Be(t)
                }

                function Io(t) {
                    return function (e) {
                        return Ve(t, hi(e), e + "")
                    }
                }

                function Do(t, e, n) {
                    n && Xn(t, e, n) && (e = n = T), t = +t || 0, n = null == n ? 1 : +n || 0, null == e ? (e = t, t = 0) : e = +e || 0;
                    for (var i = -1, r = xs(ys((e - t) / (n || 1)), 0), o = qo(r); ++i < r;)o[i] = t, t += n;
                    return o
                }

                function No(t, e, n) {
                    if (t = _s(t), t < 1 || !ws(t))return [];
                    var i = -1, r = qo(Cs(t, As));
                    for (e = sn(e, n, 1); ++i < t;)i < As ? r[i] = e(i) : e(i);
                    return r
                }

                function Fo(t) {
                    var e = ++ns;
                    return u(t) + e
                }

                function $o(t, e) {
                    return (+t || 0) + (+e || 0)
                }

                function zo(t, e, n) {
                    return n && Xn(t, e, n) && (e = T), e = qn(e, n, 3), 1 == e.length ? de(Aa(t) ? t : li(t), e) : Ze(t, e)
                }

                t = t ? re.defaults(ie.Object(), t, re.pick(ie, Lt)) : ie;
                var qo = t.Array, Lo = t.Date, Uo = t.Error, Bo = t.Function, Yo = t.Math, Ho = t.Number, Wo = t.Object, Jo = t.RegExp, Go = t.String, Qo = t.TypeError, Ko = qo.prototype, Zo = Wo.prototype, Xo = Go.prototype, ts = Bo.prototype.toString, es = Zo.hasOwnProperty, ns = 0, is = Zo.toString, rs = ie._, os = Jo("^" + ts.call(es).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), ss = t.ArrayBuffer, as = t.clearTimeout, cs = t.parseFloat, us = Yo.pow, ls = Zo.propertyIsEnumerable, ps = Yn(t, "Set"), hs = t.setTimeout, ds = Ko.splice, fs = t.Uint8Array, ms = Yn(t, "WeakMap"), ys = Yo.ceil, gs = Yn(Wo, "create"), _s = Yo.floor, vs = Yn(qo, "isArray"), ws = t.isFinite, bs = Yn(Wo, "keys"), xs = Yo.max, Cs = Yo.min, ks = Yn(Lo, "now"), Ss = t.parseInt, js = Yo.random, Ts = Ho.NEGATIVE_INFINITY, Rs = Ho.POSITIVE_INFINITY, As = 4294967295, Ps = As - 1, Ms = As >>> 1, Os = 9007199254740991, Es = ms && new ms, Vs = {};
                e.support = {};
                e.templateSettings = {escape: Ct, evaluate: kt, interpolate: St, variable: "", imports: {_: e}};
                var Is = function () {
                    function t() {
                    }

                    return function (e) {
                        if (Vr(e)) {
                            t.prototype = e;
                            var n = new t;
                            t.prototype = T
                        }
                        return n || {}
                    }
                }(), Ds = hn(Me), Ns = hn(Oe, !0), Fs = dn(), $s = dn(!0), zs = Es ? function (t, e) {
                    return Es.set(t, e), t
                } : Ro, qs = Es ? function (t) {
                    return Es.get(t)
                } : Eo, Ls = Ue("length"), Us = function () {
                    var t = 0, e = 0;
                    return function (n, i) {
                        var r = ma(), o = q - (r - e);
                        if (e = r, o > 0) {
                            if (++t >= z)return n
                        } else t = 0;
                        return zs(n, i)
                    }
                }(), Bs = gr(function (t, e) {
                    return v(t) && Kn(t) ? Ce(t, Ae(e, !1, !0)) : []
                }), Ys = xn(), Hs = xn(!0), Ws = gr(function (t) {
                    for (var e = t.length, n = e, i = qo(p), r = Un(), o = r == a, s = []; n--;) {
                        var c = t[n] = Kn(c = t[n]) ? c : [];
                        i[n] = o && c.length >= 120 ? mn(n && c) : null
                    }
                    var u = t[0], l = -1, p = u ? u.length : 0, h = i[0];
                    t:for (; ++l < p;)if (c = u[l], (h ? Kt(h, c) : r(s, c, 0)) < 0) {
                        for (var n = e; --n;) {
                            var d = i[n];
                            if ((d ? Kt(d, c) : r(t[n], c, 0)) < 0)continue t
                        }
                        h && h.push(c), s.push(c)
                    }
                    return s
                }), Js = gr(function (t, e) {
                    e = Ae(e);
                    var n = _e(t, e);
                    return Ye(t, e.sort(o)), n
                }), Gs = Dn(), Qs = Dn(!0), Ks = gr(function (t) {
                    return Xe(Ae(t, !1, !0))
                }), Zs = gr(function (t, e) {
                    return Kn(t) ? Ce(t, e) : []
                }), Xs = gr(Ni), ta = gr(function (t) {
                    var e = t.length, n = e > 2 ? t[e - 2] : T, i = e > 1 ? t[e - 1] : T;
                    return e > 2 && "function" == typeof n ? e -= 2 : (n = e > 1 && "function" == typeof i ? (--e, i) : T, i = T), t.length = e, Fi(t, n, i)
                }), ea = gr(function (t) {
                    return t = Ae(t), this.thru(function (e) {
                        return Xt(Aa(e) ? e : [pi(e)], t)
                    })
                }), na = gr(function (t, e) {
                    return _e(t, Ae(e))
                }), ia = ln(function (t, e, n) {
                    es.call(t, n) ? ++t[n] : t[n] = 1
                }), ra = bn(Ds), oa = bn(Ns, !0), sa = Sn(ee, Ds), aa = Sn(ne, Ns), ca = ln(function (t, e, n) {
                    es.call(t, n) ? t[n].push(e) : t[n] = [e]
                }), ua = ln(function (t, e, n) {
                    t[n] = e
                }), la = gr(function (t, e, n) {
                    var i = -1, r = "function" == typeof e, o = ti(e), s = Kn(t) ? qo(t.length) : [];
                    return Ds(t, function (t) {
                        var a = r ? e : o && null != t ? t[e] : T;
                        s[++i] = a ? a.apply(t, n) : Qn(t, e, n)
                    }), s
                }), pa = ln(function (t, e, n) {
                    t[n ? 0 : 1].push(e)
                }, function () {
                    return [[], []]
                }), ha = Mn(le, Ds), da = Mn(pe, Ns), fa = gr(function (t, e) {
                    if (null == t)return [];
                    var n = e[2];
                    return n && Xn(e[0], e[1], n) && (e.length = 1), Ke(t, Ae(e), [])
                }), ma = ks || function () {
                        return (new Lo).getTime()
                    }, ya = gr(function (t, e, n) {
                    var i = A;
                    if (n.length) {
                        var r = b(n, ya.placeholder);
                        i |= V
                    }
                    return Nn(t, i, e, n, r)
                }), ga = gr(function (t, e) {
                    e = e.length ? Ae(e) : Qr(t);
                    for (var n = -1, i = e.length; ++n < i;) {
                        var r = e[n];
                        t[r] = Nn(t[r], A, t)
                    }
                    return t
                }), _a = gr(function (t, e, n) {
                    var i = A | P;
                    if (n.length) {
                        var r = b(n, _a.placeholder);
                        i |= V
                    }
                    return Nn(e, i, t, n, r)
                }), va = _n(O), wa = _n(E), ba = gr(function (t, e) {
                    return xe(t, 1, e)
                }), xa = gr(function (t, e, n) {
                    return xe(t, e, n)
                }), Ca = kn(), ka = kn(!0), Sa = gr(function (t, e) {
                    if (e = Ae(e), "function" != typeof t || !oe(e, c))throw new Qo(Y);
                    var n = e.length;
                    return gr(function (i) {
                        for (var r = Cs(i.length, n); r--;)i[r] = e[r](i[r]);
                        return t.apply(this, i)
                    })
                }), ja = Pn(V), Ta = Pn(I), Ra = gr(function (t, e) {
                    return Nn(t, N, T, T, T, Ae(e))
                }), Aa = vs || function (t) {
                        return v(t) && ni(t.length) && is.call(t) == J
                    }, Pa = pn(qe), Ma = pn(function (t, e, n) {
                    return n ? ye(t, e, n) : ge(t, e)
                }), Oa = vn(Ma, fe), Ea = vn(Pa, oi), Va = Cn(Me), Ia = Cn(Oe), Da = jn(Fs), Na = jn($s), Fa = Tn(Me), $a = Tn(Oe), za = bs ? function (t) {
                    var e = null == t ? T : t.constructor;
                    return "function" == typeof e && e.prototype === t || "function" != typeof t && Kn(t) ? ui(t) : Vr(t) ? bs(t) : []
                } : ui, qa = Rn(!0), La = Rn(), Ua = gr(function (t, e) {
                    if (null == t)return {};
                    if ("function" != typeof e[0]) {
                        var e = ce(Ae(e), Go);
                        return si(t, Ce(to(t), e))
                    }
                    var n = sn(e[0], e[1], 3);
                    return ai(t, function (t, e, i) {
                        return !n(t, e, i)
                    })
                }), Ba = gr(function (t, e) {
                    return null == t ? {} : "function" == typeof e[0] ? ai(t, sn(e[0], e[1], 3)) : si(t, Ae(e))
                }), Ya = yn(function (t, e, n) {
                    return e = e.toLowerCase(), t + (n ? e.charAt(0).toUpperCase() + e.slice(1) : e)
                }), Ha = yn(function (t, e, n) {
                    return t + (n ? "-" : "") + e.toLowerCase()
                }), Wa = An(), Ja = An(!0), Ga = yn(function (t, e, n) {
                    return t + (n ? "_" : "") + e.toLowerCase()
                }), Qa = yn(function (t, e, n) {
                    return t + (n ? " " : "") + (e.charAt(0).toUpperCase() + e.slice(1))
                }), Ka = gr(function (t, e) {
                    try {
                        return t.apply(T, e)
                    } catch (n) {
                        return Mr(n) ? n : new Uo(n)
                    }
                }), Za = gr(function (t, e) {
                    return function (n) {
                        return Qn(n, t, e)
                    }
                }), Xa = gr(function (t, e) {
                    return function (n) {
                        return Qn(t, n, e)
                    }
                }), tc = In("ceil"), ec = In("floor"), nc = wn(Cr, Ts), ic = wn(Yr, Rs), rc = In("round");
                return e.prototype = n.prototype, i.prototype = Is(n.prototype), i.prototype.constructor = i, r.prototype = Is(n.prototype), r.prototype.constructor = r, ot.prototype["delete"] = Ht, ot.prototype.get = Wt, ot.prototype.has = Jt, ot.prototype.set = Gt, Qt.prototype.push = Zt, fr.Cache = ot, e.after = lr, e.ary = pr, e.assign = Ma, e.at = na, e.before = hr, e.bind = ya, e.bindAll = ga, e.bindKey = _a, e.callback = jo, e.chain = qi, e.chunk = fi, e.compact = mi, e.constant = To, e.countBy = ia, e.create = Gr, e.curry = va, e.curryRight = wa, e.debounce = dr, e.defaults = Oa, e.defaultsDeep = Ea, e.defer = ba, e.delay = xa, e.difference = Bs, e.drop = yi, e.dropRight = gi, e.dropRightWhile = _i, e.dropWhile = vi, e.fill = wi, e.filter = Ki, e.flatten = xi, e.flattenDeep = Ci, e.flow = Ca, e.flowRight = ka, e.forEach = sa, e.forEachRight = aa, e.forIn = Da, e.forInRight = Na, e.forOwn = Fa, e.forOwnRight = $a, e.functions = Qr, e.groupBy = ca, e.indexBy = ua, e.initial = Si, e.intersection = Ws, e.invert = Xr, e.invoke = la, e.keys = za, e.keysIn = to, e.map = tr, e.mapKeys = qa, e.mapValues = La, e.matches = Ao, e.matchesProperty = Po, e.memoize = fr, e.merge = Pa, e.method = Za, e.methodOf = Xa, e.mixin = Mo, e.modArgs = Sa, e.negate = mr, e.omit = Ua, e.once = yr, e.pairs = eo, e.partial = ja, e.partialRight = Ta, e.partition = pa, e.pick = Ba, e.pluck = er, e.property = Vo, e.propertyOf = Io, e.pull = Ri, e.pullAt = Js, e.range = Do, e.rearg = Ra, e.reject = nr, e.remove = Ai, e.rest = Pi, e.restParam = gr, e.set = io, e.shuffle = rr, e.slice = Mi, e.sortBy = ar, e.sortByAll = fa, e.sortByOrder = cr, e.spread = _r, e.take = Oi, e.takeRight = Ei, e.takeRightWhile = Vi, e.takeWhile = Ii, e.tap = Li,e.throttle = vr,e.thru = Ui,e.times = No,e.toArray = Wr,e.toPlainObject = Jr,e.transform = ro,e.union = Ks,e.uniq = Di,e.unzip = Ni,e.unzipWith = Fi,e.values = oo,e.valuesIn = so,e.where = ur,e.without = Zs,e.wrap = wr,e.xor = $i,e.zip = Xs,e.zipObject = zi,e.zipWith = ta,e.backflow = ka,e.collect = tr,e.compose = ka,e.each = sa,e.eachRight = aa,e.extend = Ma,e.iteratee = jo,e.methods = Qr,e.object = zi,e.select = Ki,e.tail = Pi,e.unique = Di,Mo(e, e),e.add = $o,e.attempt = Ka,e.camelCase = Ya,e.capitalize = uo,e.ceil = tc,e.clone = br,e.cloneDeep = xr,e.deburr = lo,e.endsWith = po,e.escape = ho,e.escapeRegExp = fo,e.every = Qi,e.find = ra,e.findIndex = Ys,e.findKey = Va,e.findLast = oa,e.findLastIndex = Hs,e.findLastKey = Ia,e.findWhere = Zi,e.first = bi,e.floor = ec,e.get = Kr,e.gt = Cr,e.gte = kr,e.has = Zr,e.identity = Ro,e.includes = Xi,e.indexOf = ki,e.inRange = ao,e.isArguments = Sr,e.isArray = Aa,e.isBoolean = jr,e.isDate = Tr,e.isElement = Rr,e.isEmpty = Ar,e.isEqual = Pr,e.isError = Mr,e.isFinite = Or,e.isFunction = Er,e.isMatch = Ir,e.isNaN = Dr,e.isNative = Nr,e.isNull = Fr,e.isNumber = $r,e.isObject = Vr,e.isPlainObject = zr,e.isRegExp = qr,e.isString = Lr,e.isTypedArray = Ur,e.isUndefined = Br,e.kebabCase = Ha,e.last = ji,e.lastIndexOf = Ti,e.lt = Yr,e.lte = Hr,e.max = nc,e.min = ic,e.noConflict = Oo,e.noop = Eo,e.now = ma,e.pad = mo,e.padLeft = Wa,e.padRight = Ja,e.parseInt = yo,e.random = co,e.reduce = ha,e.reduceRight = da,e.repeat = go,e.result = no,e.round = rc,e.runInContext = j,e.size = or,e.snakeCase = Ga,e.some = sr,e.sortedIndex = Gs,e.sortedLastIndex = Qs,e.startCase = Qa,e.startsWith = _o,e.sum = zo,e.template = vo,e.trim = wo,e.trimLeft = bo,e.trimRight = xo,e.trunc = Co,e.unescape = ko,e.uniqueId = Fo,e.words = So,e.all = Qi,e.any = sr,e.contains = Xi,e.eq = Pr,e.detect = ra,e.foldl = ha,e.foldr = da,e.head = bi,e.include = Xi,e.inject = ha,Mo(e, function () {
                    var t = {};
                    return Me(e, function (n, i) {
                        e.prototype[i] || (t[i] = n)
                    }), t
                }(), !1),e.sample = ir,e.prototype.sample = function (t) {
                    return this.__chain__ || null != t ? this.thru(function (e) {
                        return ir(e, t)
                    }) : ir(this.value())
                },e.VERSION = R,ee(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (t) {
                    e[t].placeholder = e
                }),ee(["drop", "take"], function (t, e) {
                    r.prototype[t] = function (n) {
                        var i = this.__filtered__;
                        if (i && !e)return new r(this);
                        n = null == n ? 1 : xs(_s(n) || 0, 0);
                        var o = this.clone();
                        return i ? o.__takeCount__ = Cs(o.__takeCount__, n) : o.__views__.push({
                            size: n,
                            type: t + (o.__dir__ < 0 ? "Right" : "")
                        }), o
                    }, r.prototype[t + "Right"] = function (e) {
                        return this.reverse()[t](e).reverse()
                    }
                }),ee(["filter", "map", "takeWhile"], function (t, e) {
                    var n = e + 1, i = n != B;
                    r.prototype[t] = function (t, e) {
                        var r = this.clone();
                        return r.__iteratees__.push({
                            iteratee: qn(t, e, 1),
                            type: n
                        }), r.__filtered__ = r.__filtered__ || i, r
                    }
                }),ee(["first", "last"], function (t, e) {
                    var n = "take" + (e ? "Right" : "");
                    r.prototype[t] = function () {
                        return this[n](1).value()[0]
                    }
                }),ee(["initial", "rest"], function (t, e) {
                    var n = "drop" + (e ? "" : "Right");
                    r.prototype[t] = function () {
                        return this.__filtered__ ? new r(this) : this[n](1)
                    }
                }),ee(["pluck", "where"], function (t, e) {
                    var n = e ? "filter" : "map", i = e ? $e : Vo;
                    r.prototype[t] = function (t) {
                        return this[n](i(t))
                    }
                }),r.prototype.compact = function () {
                    return this.filter(Ro)
                },r.prototype.reject = function (t, e) {
                    return t = qn(t, e, 1), this.filter(function (e) {
                        return !t(e)
                    })
                },r.prototype.slice = function (t, e) {
                    t = null == t ? 0 : +t || 0;
                    var n = this;
                    return n.__filtered__ && (t > 0 || e < 0) ? new r(n) : (t < 0 ? n = n.takeRight(-t) : t && (n = n.drop(t)), e !== T && (e = +e || 0, n = e < 0 ? n.dropRight(-e) : n.take(e - t)), n)
                },r.prototype.takeRightWhile = function (t, e) {
                    return this.reverse().takeWhile(t, e).reverse()
                },r.prototype.toArray = function () {
                    return this.take(Rs)
                },Me(r.prototype, function (t, n) {
                    var o = /^(?:filter|map|reject)|While$/.test(n), s = /^(?:first|last)$/.test(n), a = e[s ? "take" + ("last" == n ? "Right" : "") : n];
                    a && (e.prototype[n] = function () {
                        var e = s ? [1] : arguments, n = this.__chain__, c = this.__wrapped__, u = !!this.__actions__.length, l = c instanceof r, p = e[0], h = l || Aa(c);
                        h && o && "function" == typeof p && 1 != p.length && (l = h = !1);
                        var d = function (t) {
                            return s && n ? a(t, 1)[0] : a.apply(T, ue([t], e))
                        }, f = {func: Ui, args: [d], thisArg: T}, m = l && !u;
                        if (s && !n)return m ? (c = c.clone(), c.__actions__.push(f), t.call(c)) : a.call(T, this.value())[0];
                        if (!s && h) {
                            c = m ? c : new r(this);
                            var y = t.apply(c, e);
                            return y.__actions__.push(f), new i(y, n)
                        }
                        return this.thru(d)
                    })
                }),ee(["join", "pop", "push", "replace", "shift", "sort", "splice", "split", "unshift"], function (t) {
                    var n = (/^(?:replace|split)$/.test(t) ? Xo : Ko)[t], i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", r = /^(?:join|pop|replace|shift)$/.test(t);
                    e.prototype[t] = function () {
                        var t = arguments;
                        return r && !this.__chain__ ? n.apply(this.value(), t) : this[i](function (e) {
                            return n.apply(e, t)
                        })
                    }
                }),Me(r.prototype, function (t, n) {
                    var i = e[n];
                    if (i) {
                        var r = i.name, o = Vs[r] || (Vs[r] = []);
                        o.push({name: n, func: i})
                    }
                }),Vs[On(T, P).name] = [{
                    name: "wrapper",
                    func: T
                }],r.prototype.clone = w,r.prototype.reverse = X,r.prototype.value = it,e.prototype.chain = Bi,e.prototype.commit = Yi,e.prototype.concat = ea,e.prototype.plant = Hi,e.prototype.reverse = Wi,e.prototype.toString = Ji,e.prototype.run = e.prototype.toJSON = e.prototype.valueOf = e.prototype.value = Gi,e.prototype.collect = e.prototype.map,e.prototype.head = e.prototype.first,e.prototype.select = e.prototype.filter,e.prototype.tail = e.prototype.rest,e
            }

            var T, R = "3.10.1", A = 1, P = 2, M = 4, O = 8, E = 16, V = 32, I = 64, D = 128, N = 256, F = 30, $ = "...", z = 150, q = 16, L = 200, U = 1, B = 2, Y = "Expected a function", H = "__lodash_placeholder__", W = "[object Arguments]", J = "[object Array]", G = "[object Boolean]", Q = "[object Date]", K = "[object Error]", Z = "[object Function]", X = "[object Map]", tt = "[object Number]", et = "[object Object]", nt = "[object RegExp]", it = "[object Set]", rt = "[object String]", ot = "[object WeakMap]", st = "[object ArrayBuffer]", at = "[object Float32Array]", ct = "[object Float64Array]", ut = "[object Int8Array]", lt = "[object Int16Array]", pt = "[object Int32Array]", ht = "[object Uint8Array]", dt = "[object Uint8ClampedArray]", ft = "[object Uint16Array]", mt = "[object Uint32Array]", yt = /\b__p \+= '';/g, gt = /\b(__p \+=) '' \+/g, _t = /(__e\(.*?\)|\b__t\)) \+\n'';/g, vt = /&(?:amp|lt|gt|quot|#39|#96);/g, wt = /[&<>"'`]/g, bt = RegExp(vt.source), xt = RegExp(wt.source), Ct = /<%-([\s\S]+?)%>/g, kt = /<%([\s\S]+?)%>/g, St = /<%=([\s\S]+?)%>/g, jt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/, Tt = /^\w*$/, Rt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g, At = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g, Pt = RegExp(At.source), Mt = /[\u0300-\u036f\ufe20-\ufe23]/g, Ot = /\\(\\)?/g, Et = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Vt = /\w*$/, It = /^0[xX]/, Dt = /^\[object .+?Constructor\]$/, Nt = /^\d+$/, Ft = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g, $t = /($^)/, zt = /['\n\r\u2028\u2029\\]/g, qt = function () {
                var t = "[A-Z\\xc0-\\xd6\\xd8-\\xde]", e = "[a-z\\xdf-\\xf6\\xf8-\\xff]+";
                return RegExp(t + "+(?=" + t + e + ")|" + t + "?" + e + "|" + t + "+|[0-9]+", "g")
            }(), Lt = ["Array", "ArrayBuffer", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Math", "Number", "Object", "RegExp", "Set", "String", "_", "clearTimeout", "isFinite", "parseFloat", "parseInt", "setTimeout", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap"], Ut = -1, Bt = {};
            Bt[at] = Bt[ct] = Bt[ut] = Bt[lt] = Bt[pt] = Bt[ht] = Bt[dt] = Bt[ft] = Bt[mt] = !0, Bt[W] = Bt[J] = Bt[st] = Bt[G] = Bt[Q] = Bt[K] = Bt[Z] = Bt[X] = Bt[tt] = Bt[et] = Bt[nt] = Bt[it] = Bt[rt] = Bt[ot] = !1;
            var Yt = {};
            Yt[W] = Yt[J] = Yt[st] = Yt[G] = Yt[Q] = Yt[at] = Yt[ct] = Yt[ut] = Yt[lt] = Yt[pt] = Yt[tt] = Yt[et] = Yt[nt] = Yt[rt] = Yt[ht] = Yt[dt] = Yt[ft] = Yt[mt] = !0, Yt[K] = Yt[Z] = Yt[X] = Yt[it] = Yt[ot] = !1;
            var Ht = {
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ã": "A",
                "Ä": "A",
                "Å": "A",
                "à": "a",
                "á": "a",
                "â": "a",
                "ã": "a",
                "ä": "a",
                "å": "a",
                "Ç": "C",
                "ç": "c",
                "Ð": "D",
                "ð": "d",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ë": "E",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ë": "e",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ï": "I",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ï": "i",
                "Ñ": "N",
                "ñ": "n",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Õ": "O",
                "Ö": "O",
                "Ø": "O",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "õ": "o",
                "ö": "o",
                "ø": "o",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ü": "U",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ü": "u",
                "Ý": "Y",
                "ý": "y",
                "ÿ": "y",
                "Æ": "Ae",
                "æ": "ae",
                "Þ": "Th",
                "þ": "th",
                "ß": "ss"
            }, Wt = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "`": "&#96;"
            }, Jt = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'",
                "&#96;": "`"
            }, Gt = {"function": !0, object: !0}, Qt = {
                0: "x30",
                1: "x31",
                2: "x32",
                3: "x33",
                4: "x34",
                5: "x35",
                6: "x36",
                7: "x37",
                8: "x38",
                9: "x39",
                A: "x41",
                B: "x42",
                C: "x43",
                D: "x44",
                E: "x45",
                F: "x46",
                a: "x61",
                b: "x62",
                c: "x63",
                d: "x64",
                e: "x65",
                f: "x66",
                n: "x6e",
                r: "x72",
                t: "x74",
                u: "x75",
                v: "x76",
                x: "x78"
            }, Kt = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }, Zt = Gt[typeof e] && e && !e.nodeType && e, Xt = Gt[typeof t] && t && !t.nodeType && t, te = Zt && Xt && "object" == typeof r && r && r.Object && r, ee = Gt[typeof self] && self && self.Object && self, ne = Gt[typeof window] && window && window.Object && window, ie = (Xt && Xt.exports === Zt && Zt, te || ne !== (this && this.window) && ne || ee || this), re = j();
            ie._ = re, i = function () {
                return re
            }.call(e, n, e, t), !(i !== T && (t.exports = i))
        }).call(this)
    }).call(e, n(6)(t), function () {
        return this
    }(), n(5))
}, function (t, e) {
    t.exports = function (t) {
        return t.webpackPolyfill || (t.deprecate = function () {
        }, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
    }
}, function (t, e) {
    t.exports = jQuery
}, function (t, e, n) {
    var i, r;
    !function (o, s) {
        i = [n(3), n(5)], r = function (t, e) {
            return s(t, e)
        }.apply(e, i), !(void 0 !== r && (t.exports = r))
    }(this, function (t, e) {
        "use strict";
        var n = t.Wreqr, i = t.Wreqr = {};
        return t.Wreqr.VERSION = "1.3.6", t.Wreqr.noConflict = function () {
            return t.Wreqr = n, this
        }, i.Handlers = function (t, e) {
            var n = function (t) {
                this.options = t, this._wreqrHandlers = {}, e.isFunction(this.initialize) && this.initialize(t)
            };
            return n.extend = t.Model.extend, e.extend(n.prototype, t.Events, {
                setHandlers: function (t) {
                    e.each(t, function (t, n) {
                        var i = null;
                        e.isObject(t) && !e.isFunction(t) && (i = t.context, t = t.callback), this.setHandler(n, t, i)
                    }, this)
                }, setHandler: function (t, e, n) {
                    var i = {callback: e, context: n};
                    this._wreqrHandlers[t] = i, this.trigger("handler:add", t, e, n)
                }, hasHandler: function (t) {
                    return !!this._wreqrHandlers[t]
                }, getHandler: function (t) {
                    var e = this._wreqrHandlers[t];
                    if (e)return function () {
                        return e.callback.apply(e.context, arguments)
                    }
                }, removeHandler: function (t) {
                    delete this._wreqrHandlers[t]
                }, removeAllHandlers: function () {
                    this._wreqrHandlers = {}
                }
            }), n
        }(t, e), i.CommandStorage = function () {
            var n = function (t) {
                this.options = t, this._commands = {}, e.isFunction(this.initialize) && this.initialize(t)
            };
            return e.extend(n.prototype, t.Events, {
                getCommands: function (t) {
                    var e = this._commands[t];
                    return e || (e = {command: t, instances: []}, this._commands[t] = e), e
                }, addCommand: function (t, e) {
                    var n = this.getCommands(t);
                    n.instances.push(e)
                }, clearCommands: function (t) {
                    var e = this.getCommands(t);
                    e.instances = []
                }
            }), n
        }(), i.Commands = function (t, e) {
            return t.Handlers.extend({
                storageType: t.CommandStorage, constructor: function (e) {
                    this.options = e || {}, this._initializeStorage(this.options), this.on("handler:add", this._executeCommands, this), t.Handlers.prototype.constructor.apply(this, arguments)
                }, execute: function (t) {
                    t = arguments[0];
                    var n = e.rest(arguments);
                    this.hasHandler(t) ? this.getHandler(t).apply(this, n) : this.storage.addCommand(t, n)
                }, _executeCommands: function (t, n, i) {
                    var r = this.storage.getCommands(t);
                    e.each(r.instances, function (t) {
                        n.apply(i, t)
                    }), this.storage.clearCommands(t)
                }, _initializeStorage: function (t) {
                    var n, i = t.storageType || this.storageType;
                    n = e.isFunction(i) ? new i : i, this.storage = n
                }
            })
        }(i, e), i.RequestResponse = function (t, e) {
            return t.Handlers.extend({
                request: function (t) {
                    if (this.hasHandler(t))return this.getHandler(t).apply(this, e.rest(arguments))
                }
            })
        }(i, e), i.EventAggregator = function (t, e) {
            var n = function () {
            };
            return n.extend = t.Model.extend, e.extend(n.prototype, t.Events), n
        }(t, e), i.Channel = function (n) {
            var i = function (e) {
                this.vent = new t.Wreqr.EventAggregator, this.reqres = new t.Wreqr.RequestResponse, this.commands = new t.Wreqr.Commands, this.channelName = e
            };
            return e.extend(i.prototype, {
                reset: function () {
                    return this.vent.off(), this.vent.stopListening(), this.reqres.removeAllHandlers(), this.commands.removeAllHandlers(), this
                }, connectEvents: function (t, e) {
                    return this._connect("vent", t, e), this
                }, connectCommands: function (t, e) {
                    return this._connect("commands", t, e), this
                }, connectRequests: function (t, e) {
                    return this._connect("reqres", t, e), this
                }, _connect: function (t, n, i) {
                    if (n) {
                        i = i || this;
                        var r = "vent" === t ? "on" : "setHandler";
                        e.each(n, function (n, o) {
                            this[t][r](o, e.bind(n, i))
                        }, this)
                    }
                }
            }), i
        }(i), i.radio = function (t, e) {
            var n = function () {
                this._channels = {}, this.vent = {}, this.commands = {}, this.reqres = {}, this._proxyMethods()
            };
            e.extend(n.prototype, {
                channel: function (t) {
                    if (!t)throw new Error("Channel must receive a name");
                    return this._getChannel(t)
                }, _getChannel: function (e) {
                    var n = this._channels[e];
                    return n || (n = new t.Channel(e), this._channels[e] = n), n
                }, _proxyMethods: function () {
                    e.each(["vent", "commands", "reqres"], function (t) {
                        e.each(i[t], function (e) {
                            this[t][e] = r(this, t, e)
                        }, this)
                    }, this)
                }
            });
            var i = {
                vent: ["on", "off", "trigger", "once", "stopListening", "listenTo", "listenToOnce"],
                commands: ["execute", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers"],
                reqres: ["request", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers"]
            }, r = function (t, n, i) {
                return function (r) {
                    var o = t._getChannel(r)[n];
                    return o[i].apply(o, e.rest(arguments))
                }
            };
            return new n
        }(i, e), t.Wreqr
    })
}, function (t, e, n) {
    var i, r;
    !function (o, s) {
        i = [n(5), n(3), n(7)], r = function (t, e, n) {
            return s(t, e, n)
        }.apply(e, i), !(void 0 !== r && (t.exports = r))
    }(this, function (t, e, n) {
        "use strict";
        var i = e.Syphon, r = e.Syphon = {};
        r.VERSION = "0.6.3", r.noConflict = function () {
            return e.Syphon = i, this
        }, r.ignoredTypes = ["button", "submit", "reset", "fieldset"], r.serialize = function (e, i) {
            var r = {}, a = c(i), l = o(e, a);
            return t.each(l, function (t) {
                var e = n(t), i = s(e), o = a.keyExtractors.get(i), c = o(e), l = a.inputReaders.get(i), p = l(e), h = a.keyAssignmentValidators.get(i);
                if (h(e, c, p)) {
                    var d = a.keySplitter(c);
                    r = u(r, d, p)
                }
            }), r
        }, r.deserialize = function (e, i, r) {
            var a = c(r), u = o(e, a), p = l(a, i);
            t.each(u, function (t) {
                var e = n(t), i = s(e), r = a.keyExtractors.get(i), o = r(e), c = a.inputWriters.get(i), u = p[o];
                c(e, u)
            })
        };
        var o = function (e, i) {
            var r = a(e);
            return r = t.reject(r, function (e) {
                var r, o = s(e), a = i.keyExtractors.get(o), c = a(n(e)), u = t.find(i.ignoredTypes, function (t) {
                    return t === o || n(e).is(t)
                }), l = t.include(i.include, c), p = t.include(i.exclude, c);
                return r = !l && (!!i.include || (p || u))
            })
        }, s = function (t) {
            var e, i = n(t), r = i[0].tagName, o = r;
            return "input" === r.toLowerCase() && (e = i.attr("type"), o = e ? e : "text"), o.toLowerCase()
        }, a = function (e) {
            return t.isUndefined(e.$el) ? n(e).find(":input") : e.$(":input")
        }, c = function (e) {
            var n = t.clone(e) || {};
            return n.ignoredTypes = t.clone(r.ignoredTypes), n.inputReaders = n.inputReaders || r.InputReaders, n.inputWriters = n.inputWriters || r.InputWriters, n.keyExtractors = n.keyExtractors || r.KeyExtractors, n.keySplitter = n.keySplitter || r.KeySplitter, n.keyJoiner = n.keyJoiner || r.KeyJoiner, n.keyAssignmentValidators = n.keyAssignmentValidators || r.KeyAssignmentValidators, n
        }, u = function (e, n, i) {
            if (!n)return e;
            var r = n.shift();
            return e[r] || (e[r] = t.isArray(r) ? [] : {}), 0 === n.length && (t.isArray(e[r]) ? e[r].push(i) : e[r] = i), n.length > 0 && u(e[r], n, i), e
        }, l = function (e, n, i) {
            var r = {};
            return t.each(n, function (n, o) {
                var s = {};
                i && (o = e.keyJoiner(i, o)), t.isArray(n) ? (o += "[]", s[o] = n) : t.isObject(n) ? s = l(e, n, o) : s[o] = n, t.extend(r, s)
            }), r
        }, p = r.TypeRegistry = function () {
            this.registeredTypes = {}
        };
        p.extend = e.Model.extend, t.extend(p.prototype, {
            get: function (e) {
                return t.has(this.registeredTypes, e) ? this.registeredTypes[e] : this.registeredTypes["default"]
            }, register: function (t, e) {
                this.registeredTypes[t] = e
            }, registerDefault: function (t) {
                this.registeredTypes["default"] = t
            }, unregister: function (e) {
                t.has(this.registeredTypes, e) && delete this.registeredTypes[e]
            }
        });
        var h = r.KeyExtractorSet = p.extend(), d = r.KeyExtractors = new h;
        d.registerDefault(function (t) {
            return t.prop("name") || ""
        });
        var f = r.InputReaderSet = p.extend(), m = r.InputReaders = new f;
        m.registerDefault(function (t) {
            return t.val()
        }), m.register("checkbox", function (t) {
            return t.prop("indeterminate") ? null : t.prop("checked")
        });
        var y = r.InputWriterSet = p.extend(), g = r.InputWriters = new y;
        g.registerDefault(function (t, e) {
            t.val(e)
        }), g.register("checkbox", function (t, e) {
            null === e ? t.prop("indeterminate", !0) : t.prop("checked", e)
        }), g.register("radio", function (t, e) {
            t.prop("checked", t.val() === e.toString())
        });
        var _ = r.KeyAssignmentValidatorSet = p.extend(), v = r.KeyAssignmentValidators = new _;
        return v.registerDefault(function () {
            return !0
        }), v.register("radio", function (t, e, n) {
            return t.prop("checked")
        }), r.KeySplitter = function (t) {
            var e, n = t.match(/[^\[\]]+/g);
            return t.length > 1 && t.indexOf("[]") === t.length - 2 && (e = n.pop(), n.push([e])), n
        }, r.KeyJoiner = function (t, e) {
            return t + "[" + e + "]"
        }, e.Syphon
    })
}, function (t, e, n) {
    var i, r, o, s;
    s = n(5), i = n(3), r = n(11), o = function () {
        function t(t) {
            s.extend(this, i.Events, t), "function" == typeof this.initialize && this.initialize(t)
        }

        return t.prototype.inject = function (t) {
            var e;
            return e = r.reqres.request("app"), t ? e.get(t) : e
        }, t
    }(), t.exports = o
}, function (t, e, n) {
    var i;
    i = n(8), t.exports = {commands: new i.Commands, reqres: new i.RequestResponse, vent: new i.EventAggregator}
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, a = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)c.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, c = {}.hasOwnProperty;
        i = n(3), r = n(11), o = function (t) {
            function n() {
                return this.hasChanged = s(this.hasChanged, this), n.__super__.constructor.apply(this, arguments)
            }

            return a(n, t), n.prototype.inject = function (t) {
                var e;
                return e = r.reqres.request("app"), t && null != e && null != e.get ? e.get(t) : e
            }, n.prototype.fetch = function (t) {
                var e;
                return this.trigger("load", this), e = n.__super__.fetch.call(this, t), e.then(function (t) {
                    return function () {
                        return t.trigger("loadComplete", t)
                    }
                }(this)), e
            }, n.prototype.hasChanged = function () {
                return e.any(this.models, function (t) {
                    return t.hasChanged()
                })
            }, n
        }(i.Collection), t.exports = o
    }).call(e, n(5))
}, function (t, e, n) {
    var i, r, o, s = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }, a = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e)c.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, c = {}.hasOwnProperty;
    r = n(14), i = n(11), o = function (t) {
        function e() {
            return this.parseRecords = s(this.parseRecords, this), e.__super__.constructor.apply(this, arguments)
        }

        return a(e, t), e.prototype.extraParams = {}, e.prototype.inject = function (t) {
            var e;
            return e = i.reqres.request("app"), t ? e.get(t) : e
        }, e.prototype.parseState = function (t) {
            return {totalRecords: t.totalItems, currentPage: t.offset / t.limit + 1}
        }, e.prototype.addParam = function (t, e) {
            return this.queryParams[t] = e
        }, e.prototype.refresh = function () {
            return this.complete = !1, this.fullCollection ? this.fullCollection.reset() : this.reset(), "infinite" === this.mode ? this.state.currentPage = 0 : this.state.currentPage = 1, this.trigger("refreshed", this), this
        }, e.prototype.parseRecords = function (t) {
            return null != t.totalItems && null != t.items ? (this.totalItems = t.totalItems, this.offset = t.offset, this.limit = t.limit, t.items.length < t.limit && (this.complete = !0), t.items) : t
        }, e.prototype.queryParams = {
            limit: function () {
                return this.state.pageSize
            }, pageSize: null, currentPage: null, totalRecords: null, totalPages: null, offset: function () {
                return (this.state.currentPage - 1) * this.state.pageSize
            }
        }, e.prototype.computeOffset = function (t) {
            return (t - 1) * this.state.pageSize
        }, e
    }(r), t.exports = o
}, function (t, e, n) {
    !function (e) {
        t.exports = e(n(5), n(3))
    }(function (t, e) {
        "use strict";
        function n(e, n) {
            if (!t.isNumber(e) || t.isNaN(e) || !t.isFinite(e) || ~~e !== e)throw new TypeError("`" + n + "` must be a finite integer");
            return e
        }

        function i(t) {
            for (var e, n, i, r, o = {}, s = decodeURIComponent, a = t.split("&"), c = 0, u = a.length; c < u; c++) {
                var l = a[c];
                e = l.split("="), n = e[0], i = e[1], null == i && (i = !0), n = s(n), i = s(i), r = o[n], f(r) ? r.push(i) : r ? o[n] = [r, i] : o[n] = i
            }
            return o
        }

        function r(t, e, n) {
            var i = t._events[e];
            if (i && i.length) {
                var r = i[i.length - 1], o = r.callback;
                r.callback = function () {
                    try {
                        o.apply(this, arguments), n()
                    } catch (t) {
                        throw t
                    } finally {
                        r.callback = o
                    }
                }
            } else n()
        }

        var o = t.extend, s = t.omit, a = t.clone, c = t.each, u = t.pick, l = t.contains, p = t.isEmpty, h = t.pairs, d = t.invert, f = t.isArray, m = t.isFunction, y = t.isObject, g = t.keys, _ = t.isUndefined, v = Math.ceil, w = Math.floor, b = Math.max, x = e.Collection.prototype, C = /[\s'"]/g, k = /[<>\s'"]/g, S = e.PageableCollection = e.Collection.extend({
            state: {
                firstPage: 1,
                lastPage: null,
                currentPage: null,
                pageSize: 25,
                totalPages: null,
                totalRecords: null,
                sortKey: null,
                order: -1
            },
            mode: "server",
            queryParams: {
                currentPage: "page",
                pageSize: "per_page",
                totalPages: "total_pages",
                totalRecords: "total_entries",
                sortKey: "sort_by",
                order: "order",
                directions: {"-1": "asc", 1: "desc"}
            },
            constructor: function (t, e) {
                x.constructor.apply(this, arguments), e = e || {};
                var n = this.mode = e.mode || this.mode || j.mode, i = o({}, j.queryParams, this.queryParams, e.queryParams || {});
                i.directions = o({}, j.queryParams.directions, this.queryParams.directions, i.directions), this.queryParams = i;
                var r = this.state = o({}, j.state, this.state, e.state);
                r.currentPage = null == r.currentPage ? r.firstPage : r.currentPage, f(t) || (t = t ? [t] : []), t = t.slice(), "server" == n || null != r.totalRecords || p(t) || (r.totalRecords = t.length), this.switchMode(n, o({
                    fetch: !1,
                    resetState: !1,
                    models: t
                }, e));
                var s = e.comparator;
                if (r.sortKey && !s && this.setSorting(r.sortKey, r.order, e), "server" != n) {
                    var c = this.fullCollection;
                    s && e.full && (this.comparator = null, c.comparator = s), e.full && c.sort(), p(t) || (this.reset(t, o({silent: !0}, e)), this.getPage(r.currentPage), t.splice.apply(t, [0, t.length].concat(this.models)))
                }
                this._initState = a(this.state)
            },
            _makeFullCollection: function (t, n) {
                var i, r, o, s = ["url", "model", "sync", "comparator"], a = this.constructor.prototype, c = {};
                for (i = 0, r = s.length; i < r; i++)o = s[i], _(a[o]) || (c[o] = a[o]);
                var u = new (e.Collection.extend(c))(t, n);
                for (i = 0, r = s.length; i < r; i++)o = s[i], this[o] !== a[o] && (u[o] = this[o]);
                return u
            },
            _makeCollectionEventHandler: function (t, e) {
                return function (n, i, s, u) {
                    var l = t._handlers;
                    c(g(l), function (n) {
                        var i = l[n];
                        t.off(n, i), e.off(n, i)
                    });
                    var p = a(t.state), h = p.firstPage, d = 0 === h ? p.currentPage : p.currentPage - 1, f = p.pageSize, m = d * f, y = m + f;
                    if ("add" == n) {
                        var w, b, x, C, u = u || {};
                        if (s == e)b = e.indexOf(i), b >= m && b < y && (C = t, w = x = b - m); else {
                            w = t.indexOf(i), b = m + w, C = e;
                            var x = _(u.at) ? b : u.at + m
                        }
                        if (u.onRemove || (++p.totalRecords, delete u.onRemove), t.state = t._checkState(p), C) {
                            C.add(i, o({}, u, {at: x}));
                            var k = w >= f ? i : !_(u.at) && x < y && t.length > f ? t.at(f) : null;
                            k && r(s, n, function () {
                                t.remove(k, {onAdd: !0})
                            })
                        }
                        u.silent || t.trigger("pageable:state:change", t.state)
                    }
                    if ("remove" == n) {
                        if (u.onAdd)delete u.onAdd; else {
                            if (--p.totalRecords) {
                                var S = p.totalPages = v(p.totalRecords / f);
                                p.lastPage = 0 === h ? S - 1 : S || h, p.currentPage > S && (p.currentPage = p.lastPage)
                            } else p.totalRecords = null, p.totalPages = null;
                            t.state = t._checkState(p);
                            var j, T = u.index;
                            s == t ? ((j = e.at(y)) ? r(t, n, function () {
                                t.push(j, {onRemove: !0})
                            }) : !t.length && p.totalRecords && t.reset(e.models.slice(m - f, y - f), o({}, u, {parse: !1})), e.remove(i)) : T >= m && T < y && ((j = e.at(y - 1)) && r(t, n, function () {
                                t.push(j, {onRemove: !0})
                            }), t.remove(i), !t.length && p.totalRecords && t.reset(e.models.slice(m - f, y - f), o({}, u, {parse: !1})))
                        }
                        u.silent || t.trigger("pageable:state:change", t.state)
                    }
                    if ("reset" == n) {
                        if (u = s, s = i, s == t && null == u.from && null == u.to) {
                            var R = e.models.slice(0, m), A = e.models.slice(m + t.models.length);
                            e.reset(R.concat(t.models).concat(A), u)
                        } else s == e && ((p.totalRecords = e.models.length) || (p.totalRecords = null, p.totalPages = null), "client" == t.mode && (h = p.lastPage = p.currentPage = p.firstPage, d = 0 === h ? p.currentPage : p.currentPage - 1, m = d * f, y = m + f), t.state = t._checkState(p), t.reset(e.models.slice(m, y), o({}, u, {parse: !1})));
                        u.silent || t.trigger("pageable:state:change", t.state)
                    }
                    "sort" == n && (u = s, s = i, s === e && t.reset(e.models.slice(m, y), o({}, u, {parse: !1}))), c(g(l), function (n) {
                        var i = l[n];
                        c([t, e], function (t) {
                            t.on(n, i);
                            var e = t._events[n] || [];
                            e.unshift(e.pop())
                        })
                    })
                }
            },
            _checkState: function (t) {
                var e = this.mode, i = this.links, r = t.totalRecords, o = t.pageSize, s = t.currentPage, a = t.firstPage, c = t.totalPages;
                if (null != r && null != o && null != s && null != a && ("infinite" != e || i)) {
                    if (r = n(r, "totalRecords"), o = n(o, "pageSize"), s = n(s, "currentPage"), a = n(a, "firstPage"), o < 1)throw new RangeError("`pageSize` must be >= 1");
                    if (c = t.totalPages = v(r / o), a < 0 || a > 1)throw new RangeError("`firstPage must be 0 or 1`");
                    if (t.lastPage = 0 === a ? b(0, c - 1) : c || a, "infinite" == e) {
                        if (!i[s + ""])throw new RangeError("No link found for page " + s)
                    } else if (s < a || c > 0 && (a ? s > c : s >= c))throw new RangeError("`currentPage` must be firstPage <= currentPage " + (a ? "<" : "<=") + " totalPages if " + a + "-based. Got " + s + ".")
                }
                return t
            },
            setPageSize: function (t, e) {
                t = n(t, "pageSize"), e = e || {first: !1};
                var i = this.state, r = v(i.totalRecords / t), a = r ? b(i.firstPage, w(r * i.currentPage / i.totalPages)) : i.firstPage;
                return i = this.state = this._checkState(o({}, i, {
                    pageSize: t,
                    currentPage: e.first ? i.firstPage : a,
                    totalPages: r
                })), this.getPage(i.currentPage, s(e, ["first"]))
            },
            switchMode: function (e, n) {
                if (!l(["server", "client", "infinite"], e))throw new TypeError('`mode` must be one of "server", "client" or "infinite"');
                n = n || {fetch: !0, resetState: !0};
                var i = this.state = n.resetState ? a(this._initState) : this._checkState(o({}, this.state));
                this.mode = e;
                var r, u = this, p = this.fullCollection, h = this._handlers = this._handlers || {};
                if ("server" == e || p)"server" == e && p && (c(g(h), function (t) {
                    r = h[t], u.off(t, r), p.off(t, r)
                }), delete this._handlers, this._fullComparator = p.comparator, delete this.fullCollection); else {
                    p = this._makeFullCollection(n.models || [], n), p.pageableCollection = this, this.fullCollection = p;
                    var d = this._makeCollectionEventHandler(this, p);
                    c(["add", "remove", "reset", "sort"], function (e) {
                        h[e] = r = t.bind(d, {}, e), u.on(e, r), p.on(e, r)
                    }), p.comparator = this._fullComparator
                }
                if ("infinite" == e)for (var f = this.links = {}, m = i.firstPage, y = v(i.totalRecords / i.pageSize), _ = 0 === m ? b(0, y - 1) : y || m, w = i.firstPage; w <= _; w++)f[w] = this.url; else this.links && delete this.links;
                return n.silent || this.trigger("pageable:state:change", i), n.fetch ? this.fetch(s(n, "fetch", "resetState")) : this
            },
            hasPreviousPage: function () {
                var t = this.state, e = t.currentPage;
                return "infinite" != this.mode ? e > t.firstPage : !!this.links[e - 1]
            },
            hasNextPage: function () {
                var t = this.state, e = this.state.currentPage;
                return "infinite" != this.mode ? e < t.lastPage : !!this.links[e + 1]
            },
            getFirstPage: function (t) {
                return this.getPage("first", t)
            },
            getPreviousPage: function (t) {
                return this.getPage("prev", t)
            },
            getNextPage: function (t) {
                return this.getPage("next", t)
            },
            getLastPage: function (t) {
                return this.getPage("last", t)
            },
            getPage: function (t, e) {
                var i = this.mode, r = this.fullCollection;
                e = e || {fetch: !1};
                var a = this.state, c = a.firstPage, u = a.currentPage, l = a.lastPage, h = a.pageSize, d = t;
                switch (t) {
                    case"first":
                        d = c;
                        break;
                    case"prev":
                        d = u - 1;
                        break;
                    case"next":
                        d = u + 1;
                        break;
                    case"last":
                        d = l;
                        break;
                    default:
                        d = n(t, "index")
                }
                this.state = this._checkState(o({}, a, {currentPage: d})), e.silent || this.trigger("pageable:state:change", this.state), e.from = u, e.to = d;
                var f = (0 === c ? d : d - 1) * h, m = r && r.length ? r.models.slice(f, f + h) : [];
                return "client" != i && ("infinite" != i || p(m)) || e.fetch ? ("infinite" == i && (e.url = this.links[d]), this.fetch(s(e, "fetch"))) : (this.reset(m, s(e, "fetch")), this)
            },
            getPageByOffset: function (t, e) {
                if (t < 0)throw new RangeError("`offset must be > 0`");
                t = n(t);
                var i = w(t / this.state.pageSize);
                return 0 !== this.state.firstPage && i++, i > this.state.lastPage && (i = this.state.lastPage), this.getPage(i, e)
            },
            sync: function (t, n, i) {
                var r = this;
                if ("infinite" == r.mode) {
                    var s = i.success, a = r.state.currentPage;
                    i.success = function (t, e, n) {
                        var c = r.links, u = r.parseLinks(t, o({xhr: n}, i));
                        u.first && (c[r.state.firstPage] = u.first), u.prev && (c[a - 1] = u.prev), u.next && (c[a + 1] = u.next), s && s(t, e, n)
                    }
                }
                return (x.sync || e.sync).call(r, t, n, i)
            },
            parseLinks: function (t, e) {
                var n = {}, i = e.xhr.getResponseHeader("Link");
                if (i) {
                    var r = ["first", "prev", "next"];
                    c(i.split(","), function (t) {
                        var e = t.split(";"), i = e[0].replace(k, ""), o = e.slice(1);
                        c(o, function (t) {
                            var e = t.split("="), o = e[0].replace(C, ""), s = e[1].replace(C, "");
                            "rel" == o && l(r, s) && (n[s] = i)
                        })
                    })
                }
                return n
            },
            parse: function (t, e) {
                var n = this.parseState(t, a(this.queryParams), a(this.state), e);
                return n && (this.state = this._checkState(o({}, this.state, n))), this.parseRecords(t, e)
            },
            parseState: function (e, n, i, r) {
                if (e && 2 === e.length && y(e[0]) && f(e[1])) {
                    var o = a(i), u = e[0];
                    return c(h(s(n, "directions")), function (e) {
                        var n = e[0], i = e[1], r = u[i];
                        _(r) || t.isNull(r) || (o[n] = u[i])
                    }), u.order && (o.order = 1 * d(n.directions)[u.order]), o
                }
            },
            parseRecords: function (t, e) {
                return t && 2 === t.length && y(t[0]) && f(t[1]) ? t[1] : t
            },
            fetch: function (e) {
                e = e || {};
                var n = this._checkState(this.state), r = this.mode;
                "infinite" != r || e.url || (e.url = this.links[n.currentPage]);
                var a = e.data || {}, c = e.url || this.url || "";
                m(c) && (c = c.call(this));
                var l = c.indexOf("?");
                l != -1 && (o(a, i(c.slice(l + 1))), c = c.slice(0, l)), e.url = c, e.data = a;
                var p = "client" == this.mode ? u(this.queryParams, "sortKey", "order") : s(u(this.queryParams, g(j.queryParams)), "directions"), d = t.clone(this);
                t.each(p, function (e, i) {
                    e = m(e) ? e.call(d) : e, null != n[i] && null != e && t.isUndefined(a[e]) && (a[e] = n[i])
                }, this);
                var y;
                if (n.sortKey && n.order) {
                    var v = m(p.order) ? p.order.call(d) : p.order;
                    if (f(n.order))for (a[v] = [], y = 0; y < n.order.length; y += 1)a[v].push(this.queryParams.directions[n.order[y]]); else a[v] = this.queryParams.directions[n.order + ""]
                } else n.sortKey || delete a[p.order];
                var w, b, C = h(s(this.queryParams, g(j.queryParams)));
                for (y = 0; y < C.length; y++)w = C[y], b = w[1], b = m(b) ? b.call(d) : b, null != b && (a[w[0]] = b);
                if ("server" != r) {
                    var k = this, S = this.fullCollection, T = e.success;
                    return e.success = function (t, n, i) {
                        i = i || {}, _(e.silent) ? delete i.silent : i.silent = e.silent;
                        var s = t.models;
                        "client" == r ? S.reset(s, i) : (S.add(s, o({at: S.length}, o(i, {parse: !1}))), k.trigger("reset", k, i)), T && T(t, n, i)
                    }, x.fetch.call(this, o({}, e, {silent: !0}))
                }
                return x.fetch.call(this, e)
            },
            _makeComparator: function (t, e, n) {
                var i = this.state;
                if (t = t || i.sortKey, e = e || i.order, t && e)return n || (n = function (t, e) {
                    return t.get(e)
                }), function (i, r) {
                    var o, s = n(i, t), a = n(r, t);
                    return 1 === e && (o = s, s = a, a = o), s === a ? 0 : s < a ? -1 : 1
                }
            },
            setSorting: function (t, e, n) {
                var i = this.state;
                i.sortKey = t, i.order = e = e || i.order;
                var r = this.fullCollection, s = !1, a = !1;
                t || (s = a = !0);
                var c = this.mode;
                n = o({side: "client" == c ? c : "server", full: !0}, n);
                var u = this._makeComparator(t, e, n.sortValue), l = n.full, p = n.side;
                return "client" == p ? l ? (r && (r.comparator = u), s = !0) : (this.comparator = u, a = !0) : "server" != p || l || (this.comparator = u), s && (this.comparator = null), a && r && (r.comparator = null), this
            }
        }), j = S.prototype;
        return S
    })
}, function (t, e) {
    var n;
    n = function () {
        function t() {
        }

        return t.prototype._isPropagationStopped = !1, t.prototype._isDefaultPrevented = !1, t.prototype.stopPropagation = function () {
            return this._isPropagationStopped = !0, this
        }, t.prototype.preventDefault = function () {
            return this._isDefaultPrevented = !0, this
        }, t.prototype.isPropagationStopped = function () {
            return this._isPropagationStopped
        }, t.prototype.isDefaultPrevented = function () {
            return this._isDefaultPrevented
        }, t
    }(), t.exports = n
}, function (t, e, n) {
    var i, r, o, s, a = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e)c.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, c = {}.hasOwnProperty;
    r = n(3), s = n(17), o = n(11), i = function (t) {
        function e() {
            return e.__super__.constructor.apply(this, arguments)
        }

        return a(e, t), e.prototype.inject = function (t) {
            var e;
            return e = o.reqres.request("app"), t ? e.get(t) : e
        }, e
    }(s.Application), t.exports = i
}, function (t, e, n) {
    var i, r;
    !function (o, s) {
        i = [n(3), n(5), n(8), n(18)], r = function (t, e) {
            return o.Marionette = o.Mn = s(o, t, e)
        }.apply(e, i), !(void 0 !== r && (t.exports = r))
    }(this, function (t, e, n) {
        "use strict";
        var i = t.Marionette, r = t.Mn, o = e.Marionette = {};
        o.VERSION = "2.4.2", o.noConflict = function () {
            return t.Marionette = i, t.Mn = r, this
        }, o.Deferred = e.$.Deferred, o.FEATURES = {}, o.isEnabled = function (t) {
            return !!o.FEATURES[t]
        }, o.extend = e.Model.extend, o.isNodeAttached = function (t) {
            return e.$.contains(document.documentElement, t)
        }, o.mergeOptions = function (t, e) {
            t && n.extend(this, n.pick(t, e))
        }, o.getOption = function (t, e) {
            if (t && e)return t.options && void 0 !== t.options[e] ? t.options[e] : t[e]
        }, o.proxyGetOption = function (t) {
            return o.getOption(this, t)
        }, o._getValue = function (t, e, i) {
            return n.isFunction(t) && (t = i ? t.apply(e, i) : t.call(e)), t
        }, o.normalizeMethods = function (t) {
            return n.reduce(t, function (t, e, i) {
                return n.isFunction(e) || (e = this[e]), e && (t[i] = e), t
            }, {}, this)
        }, o.normalizeUIString = function (t, e) {
            return t.replace(/@ui\.[a-zA-Z_$0-9]*/g, function (t) {
                return e[t.slice(4)]
            })
        }, o.normalizeUIKeys = function (t, e) {
            return n.reduce(t, function (t, n, i) {
                var r = o.normalizeUIString(i, e);
                return t[r] = n, t
            }, {})
        }, o.normalizeUIValues = function (t, e, i) {
            return n.each(t, function (r, s) {
                n.isString(r) ? t[s] = o.normalizeUIString(r, e) : n.isObject(r) && n.isArray(i) && (n.extend(r, o.normalizeUIValues(n.pick(r, i), e)), n.each(i, function (t) {
                    var i = r[t];
                    n.isString(i) && (r[t] = o.normalizeUIString(i, e))
                }))
            }), t
        }, o.actAsCollection = function (t, e) {
            var i = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
            n.each(i, function (i) {
                t[i] = function () {
                    var t = n.values(n.result(this, e)), r = [t].concat(n.toArray(arguments));
                    return n[i].apply(n, r)
                }
            })
        };
        var s = o.deprecate = function (t, e) {
            n.isObject(t) && (t = t.prev + " is going to be removed in the future. Please use " + t.next + " instead." + (t.url ? " See: " + t.url : "")), void 0 !== e && e || s._cache[t] || (s._warn("Deprecation warning: " + t), s._cache[t] = !0)
        };
        s._warn = "undefined" != typeof console && (console.warn || console.log) || function () {
            }, s._cache = {}, o._triggerMethod = function () {
            function t(t, e, n) {
                return n.toUpperCase()
            }

            var e = /(^|:)(\w)/gi;
            return function (i, r, o) {
                var s = arguments.length < 3;
                s && (o = r, r = o[0]);
                var a, c = "on" + r.replace(e, t), u = i[c];
                return n.isFunction(u) && (a = u.apply(i, s ? n.rest(o) : o)), n.isFunction(i.trigger) && (s + o.length > 1 ? i.trigger.apply(i, s ? o : [r].concat(n.drop(o, 0))) : i.trigger(r)), a
            }
        }(), o.triggerMethod = function (t) {
            return o._triggerMethod(this, arguments)
        }, o.triggerMethodOn = function (t) {
            var e = n.isFunction(t.triggerMethod) ? t.triggerMethod : o.triggerMethod;
            return e.apply(t, n.rest(arguments))
        }, o.MonitorDOMRefresh = function (t) {
            function e() {
                t._isShown = !0, r()
            }

            function i() {
                t._isRendered = !0, r()
            }

            function r() {
                t._isShown && t._isRendered && o.isNodeAttached(t.el) && n.isFunction(t.triggerMethod) && t.triggerMethod("dom:refresh")
            }

            t.on({show: e, render: i})
        }, function (t) {
            function e(e, i, r, o) {
                var s = o.split(/\s+/);
                n.each(s, function (n) {
                    var o = e[n];
                    if (!o)throw new t.Error('Method "' + n + '" was configured as an event handler, but does not exist.');
                    e.listenTo(i, r, o)
                })
            }

            function i(t, e, n, i) {
                t.listenTo(e, n, i)
            }

            function r(t, e, i, r) {
                var o = r.split(/\s+/);
                n.each(o, function (n) {
                    var r = t[n];
                    t.stopListening(e, i, r)
                })
            }

            function o(t, e, n, i) {
                t.stopListening(e, n, i)
            }

            function s(e, i, r, o, s) {
                if (i && r) {
                    if (!n.isObject(r))throw new t.Error({
                        message: "Bindings must be an object or function.",
                        url: "marionette.functions.html#marionettebindentityevents"
                    });
                    r = t._getValue(r, e), n.each(r, function (t, r) {
                        n.isFunction(t) ? o(e, i, r, t) : s(e, i, r, t)
                    })
                }
            }

            t.bindEntityEvents = function (t, n, r) {
                s(t, n, r, i, e)
            }, t.unbindEntityEvents = function (t, e, n) {
                s(t, e, n, o, r)
            }, t.proxyBindEntityEvents = function (e, n) {
                return t.bindEntityEvents(this, e, n)
            }, t.proxyUnbindEntityEvents = function (e, n) {
                return t.unbindEntityEvents(this, e, n)
            }
        }(o);
        var a = ["description", "fileName", "lineNumber", "name", "message", "number"];
        return o.Error = o.extend.call(Error, {
            urlRoot: "http://marionettejs.com/docs/v" + o.VERSION + "/",
            constructor: function (t, e) {
                n.isObject(t) ? (e = t, t = e.message) : e || (e = {});
                var i = Error.call(this, t);
                n.extend(this, n.pick(i, a), n.pick(e, a)), this.captureStackTrace(), e.url && (this.url = this.urlRoot + e.url)
            },
            captureStackTrace: function () {
                Error.captureStackTrace && Error.captureStackTrace(this, o.Error)
            },
            toString: function () {
                return this.name + ": " + this.message + (this.url ? " See: " + this.url : "")
            }
        }), o.Error.extend = o.extend, o.Callbacks = function () {
            this._deferred = o.Deferred(), this._callbacks = []
        }, n.extend(o.Callbacks.prototype, {
            add: function (t, e) {
                var i = n.result(this._deferred, "promise");
                this._callbacks.push({cb: t, ctx: e}), i.then(function (n) {
                    e && (n.context = e), t.call(n.context, n.options)
                })
            }, run: function (t, e) {
                this._deferred.resolve({options: t, context: e})
            }, reset: function () {
                var t = this._callbacks;
                this._deferred = o.Deferred(), this._callbacks = [], n.each(t, function (t) {
                    this.add(t.cb, t.ctx)
                }, this)
            }
        }), o.Controller = function (t) {
            this.options = t || {}, n.isFunction(this.initialize) && this.initialize(this.options)
        }, o.Controller.extend = o.extend, n.extend(o.Controller.prototype, e.Events, {
            destroy: function () {
                return o._triggerMethod(this, "before:destroy", arguments), o._triggerMethod(this, "destroy", arguments), this.stopListening(), this.off(), this
            }, triggerMethod: o.triggerMethod, mergeOptions: o.mergeOptions, getOption: o.proxyGetOption
        }), o.Object = function (t) {
            this.options = n.extend({}, n.result(this, "options"), t), this.initialize.apply(this, arguments)
        }, o.Object.extend = o.extend, n.extend(o.Object.prototype, e.Events, {
            initialize: function () {
            },
            destroy: function () {
                return this.triggerMethod("before:destroy"), this.triggerMethod("destroy"), this.stopListening(), this
            },
            triggerMethod: o.triggerMethod,
            mergeOptions: o.mergeOptions,
            getOption: o.proxyGetOption,
            bindEntityEvents: o.proxyBindEntityEvents,
            unbindEntityEvents: o.proxyUnbindEntityEvents
        }), o.Region = o.Object.extend({
            constructor: function (t) {
                if (this.options = t || {}, this.el = this.getOption("el"), this.el = this.el instanceof e.$ ? this.el[0] : this.el, !this.el)throw new o.Error({
                    name: "NoElError",
                    message: 'An "el" must be specified for a region.'
                });
                this.$el = this.getEl(this.el), o.Object.call(this, t)
            }, show: function (t, e) {
                if (this._ensureElement()) {
                    this._ensureViewIsIntact(t);
                    var i = e || {}, r = t !== this.currentView, s = !!i.preventDestroy, a = !!i.forceShow, c = !!this.currentView, u = r && !s, l = r || a;
                    if (c && this.triggerMethod("before:swapOut", this.currentView, this, e), this.currentView && delete this.currentView._parent, u ? this.empty() : c && l && this.currentView.off("destroy", this.empty, this), l) {
                        t.once("destroy", this.empty, this), t.render(), t._parent = this, c && this.triggerMethod("before:swap", t, this, e), this.triggerMethod("before:show", t, this, e), o.triggerMethodOn(t, "before:show", t, this, e), c && this.triggerMethod("swapOut", this.currentView, this, e);
                        var p = o.isNodeAttached(this.el), h = [], d = n.extend({
                            triggerBeforeAttach: this.triggerBeforeAttach,
                            triggerAttach: this.triggerAttach
                        }, i);
                        return p && d.triggerBeforeAttach && (h = this._displayedViews(t), this._triggerAttach(h, "before:")), this.attachHtml(t), this.currentView = t, p && d.triggerAttach && (h = this._displayedViews(t), this._triggerAttach(h)), c && this.triggerMethod("swap", t, this, e), this.triggerMethod("show", t, this, e), o.triggerMethodOn(t, "show", t, this, e), this
                    }
                    return this
                }
            }, triggerBeforeAttach: !0, triggerAttach: !0, _triggerAttach: function (t, e) {
                var i = (e || "") + "attach";
                n.each(t, function (t) {
                    o.triggerMethodOn(t, i, t, this)
                }, this)
            }, _displayedViews: function (t) {
                return n.union([t], n.result(t, "_getNestedViews") || [])
            }, _ensureElement: function () {
                if (n.isObject(this.el) || (this.$el = this.getEl(this.el), this.el = this.$el[0]), !this.$el || 0 === this.$el.length) {
                    if (this.getOption("allowMissingEl"))return !1;
                    throw new o.Error('An "el" ' + this.$el.selector + " must exist in DOM")
                }
                return !0
            }, _ensureViewIsIntact: function (t) {
                if (!t)throw new o.Error({
                    name: "ViewNotValid",
                    message: "The view passed is undefined and therefore invalid. You must pass a view instance to show."
                });
                if (t.isDestroyed)throw new o.Error({
                    name: "ViewDestroyedError",
                    message: 'View (cid: "' + t.cid + '") has already been destroyed and cannot be used.'
                })
            }, getEl: function (t) {
                return e.$(t, o._getValue(this.options.parentEl, this))
            }, attachHtml: function (t) {
                this.$el.contents().detach(), this.el.appendChild(t.el)
            }, empty: function (t) {
                var e = this.currentView, n = o._getValue(t, "preventDestroy", this);
                if (e)return e.off("destroy", this.empty, this), this.triggerMethod("before:empty", e), n || this._destroyView(), this.triggerMethod("empty", e), delete this.currentView, n && this.$el.contents().detach(), this
            }, _destroyView: function () {
                var t = this.currentView;
                t.destroy && !t.isDestroyed ? t.destroy() : t.remove && (t.remove(), t.isDestroyed = !0)
            }, attachView: function (t) {
                return this.currentView = t, this
            }, hasView: function () {
                return !!this.currentView
            }, reset: function () {
                return this.empty(), this.$el && (this.el = this.$el.selector), delete this.$el, this
            }
        }, {
            buildRegion: function (t, e) {
                if (n.isString(t))return this._buildRegionFromSelector(t, e);
                if (t.selector || t.el || t.regionClass)return this._buildRegionFromObject(t, e);
                if (n.isFunction(t))return this._buildRegionFromRegionClass(t);
                throw new o.Error({
                    message: "Improper region configuration type.",
                    url: "marionette.region.html#region-configuration-types"
                })
            }, _buildRegionFromSelector: function (t, e) {
                return new e({el: t})
            }, _buildRegionFromObject: function (t, e) {
                var i = t.regionClass || e, r = n.omit(t, "selector", "regionClass");
                return t.selector && !r.el && (r.el = t.selector), new i(r)
            }, _buildRegionFromRegionClass: function (t) {
                return new t
            }
        }), o.RegionManager = o.Controller.extend({
            constructor: function (t) {
                this._regions = {}, this.length = 0, o.Controller.call(this, t), this.addRegions(this.getOption("regions"))
            }, addRegions: function (t, e) {
                return t = o._getValue(t, this, arguments), n.reduce(t, function (t, i, r) {
                    return n.isString(i) && (i = {selector: i}), i.selector && (i = n.defaults({}, i, e)), t[r] = this.addRegion(r, i), t
                }, {}, this)
            }, addRegion: function (t, e) {
                var n;
                return n = e instanceof o.Region ? e : o.Region.buildRegion(e, o.Region), this.triggerMethod("before:add:region", t, n), n._parent = this, this._store(t, n), this.triggerMethod("add:region", t, n), n
            }, get: function (t) {
                return this._regions[t]
            }, getRegions: function () {
                return n.clone(this._regions)
            }, removeRegion: function (t) {
                var e = this._regions[t];
                return this._remove(t, e), e
            }, removeRegions: function () {
                var t = this.getRegions();
                return n.each(this._regions, function (t, e) {
                    this._remove(e, t)
                }, this), t
            }, emptyRegions: function () {
                var t = this.getRegions();
                return n.invoke(t, "empty"), t
            }, destroy: function () {
                return this.removeRegions(), o.Controller.prototype.destroy.apply(this, arguments)
            }, _store: function (t, e) {
                this._regions[t] || this.length++, this._regions[t] = e
            }, _remove: function (t, e) {
                this.triggerMethod("before:remove:region", t, e), e.empty(), e.stopListening(), delete e._parent, delete this._regions[t], this.length--, this.triggerMethod("remove:region", t, e)
            }
        }), o.actAsCollection(o.RegionManager.prototype, "_regions"), o.TemplateCache = function (t) {
            this.templateId = t
        }, n.extend(o.TemplateCache, {
            templateCaches: {}, get: function (t, e) {
                var n = this.templateCaches[t];
                return n || (n = new o.TemplateCache(t), this.templateCaches[t] = n), n.load(e)
            }, clear: function () {
                var t, e = n.toArray(arguments), i = e.length;
                if (i > 0)for (t = 0; t < i; t++)delete this.templateCaches[e[t]]; else this.templateCaches = {}
            }
        }), n.extend(o.TemplateCache.prototype, {
            load: function (t) {
                if (this.compiledTemplate)return this.compiledTemplate;
                var e = this.loadTemplate(this.templateId, t);
                return this.compiledTemplate = this.compileTemplate(e, t), this.compiledTemplate
            }, loadTemplate: function (t, n) {
                var i = e.$(t).html();
                if (!i || 0 === i.length)throw new o.Error({
                    name: "NoTemplateError",
                    message: 'Could not find template: "' + t + '"'
                });
                return i
            }, compileTemplate: function (t, e) {
                return n.template(t, e)
            }
        }), o.Renderer = {
            render: function (t, e) {
                if (!t)throw new o.Error({
                    name: "TemplateNotFoundError",
                    message: "Cannot render the template since its false, null or undefined."
                });
                var i = n.isFunction(t) ? t : o.TemplateCache.get(t);
                return i(e)
            }
        }, o.View = e.View.extend({
            isDestroyed: !1,
            constructor: function (t) {
                n.bindAll(this, "render"), t = o._getValue(t, this), this.options = n.extend({}, n.result(this, "options"), t), this._behaviors = o.Behaviors(this), e.View.call(this, this.options), o.MonitorDOMRefresh(this)
            },
            getTemplate: function () {
                return this.getOption("template")
            },
            serializeModel: function (t) {
                return t.toJSON.apply(t, n.rest(arguments))
            },
            mixinTemplateHelpers: function (t) {
                t = t || {};
                var e = this.getOption("templateHelpers");
                return e = o._getValue(e, this), n.extend(t, e)
            },
            normalizeUIKeys: function (t) {
                var e = n.result(this, "_uiBindings");
                return o.normalizeUIKeys(t, e || n.result(this, "ui"))
            },
            normalizeUIValues: function (t, e) {
                var i = n.result(this, "ui"), r = n.result(this, "_uiBindings");
                return o.normalizeUIValues(t, r || i, e)
            },
            configureTriggers: function () {
                if (this.triggers) {
                    var t = this.normalizeUIKeys(n.result(this, "triggers"));
                    return n.reduce(t, function (t, e, n) {
                        return t[n] = this._buildViewTrigger(e), t
                    }, {}, this)
                }
            },
            delegateEvents: function (t) {
                return this._delegateDOMEvents(t), this.bindEntityEvents(this.model, this.getOption("modelEvents")), this.bindEntityEvents(this.collection, this.getOption("collectionEvents")), n.each(this._behaviors, function (t) {
                    t.bindEntityEvents(this.model, t.getOption("modelEvents")), t.bindEntityEvents(this.collection, t.getOption("collectionEvents"))
                }, this), this
            },
            _delegateDOMEvents: function (t) {
                var i = o._getValue(t || this.events, this);
                i = this.normalizeUIKeys(i), n.isUndefined(t) && (this.events = i);
                var r = {}, s = n.result(this, "behaviorEvents") || {}, a = this.configureTriggers(), c = n.result(this, "behaviorTriggers") || {};
                n.extend(r, s, i, a, c), e.View.prototype.delegateEvents.call(this, r)
            },
            undelegateEvents: function () {
                return e.View.prototype.undelegateEvents.apply(this, arguments), this.unbindEntityEvents(this.model, this.getOption("modelEvents")), this.unbindEntityEvents(this.collection, this.getOption("collectionEvents")), n.each(this._behaviors, function (t) {
                    t.unbindEntityEvents(this.model, t.getOption("modelEvents")), t.unbindEntityEvents(this.collection, t.getOption("collectionEvents"))
                }, this), this
            },
            _ensureViewIsIntact: function () {
                if (this.isDestroyed)throw new o.Error({
                    name: "ViewDestroyedError",
                    message: 'View (cid: "' + this.cid + '") has already been destroyed and cannot be used.'
                })
            },
            destroy: function () {
                if (this.isDestroyed)return this;
                var t = n.toArray(arguments);
                return this.triggerMethod.apply(this, ["before:destroy"].concat(t)), this.isDestroyed = !0, this.triggerMethod.apply(this, ["destroy"].concat(t)), this.unbindUIElements(), this.isRendered = !1, this.remove(), n.invoke(this._behaviors, "destroy", t), this
            },
            bindUIElements: function () {
                this._bindUIElements(), n.invoke(this._behaviors, this._bindUIElements)
            },
            _bindUIElements: function () {
                if (this.ui) {
                    this._uiBindings || (this._uiBindings = this.ui);
                    var t = n.result(this, "_uiBindings");
                    this.ui = {}, n.each(t, function (t, e) {
                        this.ui[e] = this.$(t)
                    }, this)
                }
            },
            unbindUIElements: function () {
                this._unbindUIElements(), n.invoke(this._behaviors, this._unbindUIElements)
            },
            _unbindUIElements: function () {
                this.ui && this._uiBindings && (n.each(this.ui, function (t, e) {
                    delete this.ui[e]
                }, this), this.ui = this._uiBindings, delete this._uiBindings)
            },
            _buildViewTrigger: function (t) {
                var e = n.isObject(t), i = n.defaults({}, e ? t : {}, {
                    preventDefault: !0,
                    stopPropagation: !0
                }), r = e ? i.event : t;
                return function (t) {
                    t && (t.preventDefault && i.preventDefault && t.preventDefault(), t.stopPropagation && i.stopPropagation && t.stopPropagation());
                    var e = {view: this, model: this.model, collection: this.collection};
                    this.triggerMethod(r, e)
                }
            },
            setElement: function () {
                var t = e.View.prototype.setElement.apply(this, arguments);
                return n.invoke(this._behaviors, "proxyViewProperties", this), t
            },
            triggerMethod: function () {
                var t = o._triggerMethod(this, arguments);
                return this._triggerEventOnBehaviors(arguments), this._triggerEventOnParentLayout(arguments[0], n.rest(arguments)), t
            },
            _triggerEventOnBehaviors: function (t) {
                for (var e = o._triggerMethod, n = this._behaviors, i = 0, r = n && n.length; i < r; i++)e(n[i], t)
            },
            _triggerEventOnParentLayout: function (t, e) {
                var i = this._parentLayoutView();
                if (i) {
                    var r = o.getOption(i, "childViewEventPrefix"), s = r + ":" + t;
                    o._triggerMethod(i, [s, this].concat(e));
                    var a = o.getOption(i, "childEvents"), c = i.normalizeMethods(a);
                    c && n.isFunction(c[t]) && c[t].apply(i, [this].concat(e))
                }
            },
            _getImmediateChildren: function () {
                return []
            },
            _getNestedViews: function () {
                var t = this._getImmediateChildren();
                return t.length ? n.reduce(t, function (t, e) {
                    return e._getNestedViews ? t.concat(e._getNestedViews()) : t
                }, t) : t
            },
            _getAncestors: function () {
                for (var t = [], e = this._parent; e;)t.push(e), e = e._parent;
                return t
            },
            _parentLayoutView: function () {
                var t = this._getAncestors();
                return n.find(t, function (t) {
                    return t instanceof o.LayoutView
                })
            },
            normalizeMethods: o.normalizeMethods,
            mergeOptions: o.mergeOptions,
            getOption: o.proxyGetOption,
            bindEntityEvents: o.proxyBindEntityEvents,
            unbindEntityEvents: o.proxyUnbindEntityEvents
        }), o.ItemView = o.View.extend({
            constructor: function () {
                o.View.apply(this, arguments)
            }, serializeData: function () {
                if (!this.model && !this.collection)return {};
                var t = [this.model || this.collection];
                return arguments.length && t.push.apply(t, arguments), this.model ? this.serializeModel.apply(this, t) : {items: this.serializeCollection.apply(this, t)}
            }, serializeCollection: function (t) {
                return t.toJSON.apply(t, n.rest(arguments))
            }, render: function () {
                return this._ensureViewIsIntact(), this.triggerMethod("before:render", this), this._renderTemplate(), this.isRendered = !0, this.bindUIElements(), this.triggerMethod("render", this), this
            }, _renderTemplate: function () {
                var t = this.getTemplate();
                if (t !== !1) {
                    if (!t)throw new o.Error({
                        name: "UndefinedTemplateError",
                        message: "Cannot render the template since it is null or undefined."
                    });
                    var e = this.mixinTemplateHelpers(this.serializeData()), n = o.Renderer.render(t, e, this);
                    return this.attachElContent(n), this
                }
            }, attachElContent: function (t) {
                return this.$el.html(t), this
            }
        }), o.CollectionView = o.View.extend({
            childViewEventPrefix: "childview", sort: !0, constructor: function (t) {
                this.once("render", this._initialEvents), this._initChildViewStorage(), o.View.apply(this, arguments), this.on({
                    "before:show": this._onBeforeShowCalled,
                    show: this._onShowCalled,
                    "before:attach": this._onBeforeAttachCalled,
                    attach: this._onAttachCalled
                }), this.initRenderBuffer()
            }, initRenderBuffer: function () {
                this._bufferedChildren = []
            }, startBuffering: function () {
                this.initRenderBuffer(), this.isBuffering = !0
            }, endBuffering: function () {
                var t, e = this._isShown && o.isNodeAttached(this.el);
                this.isBuffering = !1, this._isShown && this._triggerMethodMany(this._bufferedChildren, this, "before:show"), e && this._triggerBeforeAttach && (t = this._getNestedViews(), this._triggerMethodMany(t, this, "before:attach")), this.attachBuffer(this, this._createBuffer()), e && this._triggerAttach && (t = this._getNestedViews(), this._triggerMethodMany(t, this, "attach")), this._isShown && this._triggerMethodMany(this._bufferedChildren, this, "show"), this.initRenderBuffer()
            }, _triggerMethodMany: function (t, e, i) {
                var r = n.drop(arguments, 3);
                n.each(t, function (t) {
                    o.triggerMethodOn.apply(t, [t, i, t, e].concat(r))
                })
            }, _initialEvents: function () {
                this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "remove", this._onCollectionRemove), this.listenTo(this.collection, "reset", this.render), this.getOption("sort") && this.listenTo(this.collection, "sort", this._sortViews))
            }, _onCollectionAdd: function (t, e, i) {
                var r;
                if (r = void 0 !== i.at ? i.at : n.indexOf(this._filteredSortedModels(), t), this._shouldAddChild(t, r)) {
                    this.destroyEmptyView();
                    var o = this.getChildView(t);
                    this.addChild(t, o, r)
                }
            }, _onCollectionRemove: function (t) {
                var e = this.children.findByModel(t);
                this.removeChildView(e), this.checkEmpty()
            }, _onBeforeShowCalled: function () {
                this._triggerBeforeAttach = this._triggerAttach = !1, this.children.each(function (t) {
                    o.triggerMethodOn(t, "before:show", t)
                })
            }, _onShowCalled: function () {
                this.children.each(function (t) {
                    o.triggerMethodOn(t, "show", t)
                })
            }, _onBeforeAttachCalled: function () {
                this._triggerBeforeAttach = !0
            }, _onAttachCalled: function () {
                this._triggerAttach = !0
            }, render: function () {
                return this._ensureViewIsIntact(), this.triggerMethod("before:render", this), this._renderChildren(), this.isRendered = !0, this.triggerMethod("render", this), this
            }, reorder: function () {
                var t = this.children, e = this._filteredSortedModels(), i = n.find(e, function (e) {
                    return !t.findByModel(e)
                });
                if (i)this.render(); else {
                    var r = n.map(e, function (e, n) {
                        var i = t.findByModel(e);
                        return i._index = n, i.el
                    });
                    this.triggerMethod("before:reorder"), this._appendReorderedChildren(r), this.triggerMethod("reorder")
                }
            }, resortView: function () {
                o.getOption(this, "reorderOnSort") ? this.reorder() : this.render()
            }, _sortViews: function () {
                var t = this._filteredSortedModels(), e = n.find(t, function (t, e) {
                    var n = this.children.findByModel(t);
                    return !n || n._index !== e
                }, this);
                e && this.resortView()
            }, _emptyViewIndex: -1, _appendReorderedChildren: function (t) {
                this.$el.append(t)
            }, _renderChildren: function () {
                this.destroyEmptyView(), this.destroyChildren({checkEmpty: !1}), this.isEmpty(this.collection) ? this.showEmptyView() : (this.triggerMethod("before:render:collection", this), this.startBuffering(), this.showCollection(), this.endBuffering(), this.triggerMethod("render:collection", this), this.children.isEmpty() && this.showEmptyView())
            }, showCollection: function () {
                var t, e = this._filteredSortedModels();
                n.each(e, function (e, n) {
                    t = this.getChildView(e), this.addChild(e, t, n)
                }, this)
            }, _filteredSortedModels: function () {
                var t, e = this.getViewComparator();
                return t = e ? n.isString(e) || 1 === e.length ? this.collection.sortBy(e, this) : n.clone(this.collection.models).sort(n.bind(e, this)) : this.collection.models, this.getOption("filter") && (t = n.filter(t, function (t, e) {
                    return this._shouldAddChild(t, e)
                }, this)), t
            }, showEmptyView: function () {
                var t = this.getEmptyView();
                if (t && !this._showingEmptyView) {
                    this.triggerMethod("before:render:empty"), this._showingEmptyView = !0;
                    var n = new e.Model;
                    this.addEmptyView(n, t), this.triggerMethod("render:empty")
                }
            }, destroyEmptyView: function () {
                this._showingEmptyView && (this.triggerMethod("before:remove:empty"), this.destroyChildren(), delete this._showingEmptyView, this.triggerMethod("remove:empty"))
            }, getEmptyView: function () {
                return this.getOption("emptyView")
            }, addEmptyView: function (t, e) {
                var i, r = this._isShown && !this.isBuffering && o.isNodeAttached(this.el), s = this.getOption("emptyViewOptions") || this.getOption("childViewOptions");
                n.isFunction(s) && (s = s.call(this, t, this._emptyViewIndex));
                var a = this.buildChildView(t, e, s);
                a._parent = this, this.proxyChildEvents(a), this._isShown && o.triggerMethodOn(a, "before:show", a), this.children.add(a), r && this._triggerBeforeAttach && (i = [a].concat(a._getNestedViews()), a.once("render", function () {
                    this._triggerMethodMany(i, this, "before:attach")
                }, this)), this.renderChildView(a, this._emptyViewIndex), r && this._triggerAttach && (i = [a].concat(a._getNestedViews()), this._triggerMethodMany(i, this, "attach")), this._isShown && o.triggerMethodOn(a, "show", a)
            }, getChildView: function (t) {
                var e = this.getOption("childView");
                if (!e)throw new o.Error({name: "NoChildViewError", message: 'A "childView" must be specified'});
                return e
            }, addChild: function (t, e, n) {
                var i = this.getOption("childViewOptions");
                i = o._getValue(i, this, [t, n]);
                var r = this.buildChildView(t, e, i);
                return this._updateIndices(r, !0, n), this.triggerMethod("before:add:child", r), this._addChildView(r, n), this.triggerMethod("add:child", r), r._parent = this, r
            }, _updateIndices: function (t, e, n) {
                this.getOption("sort") && (e && (t._index = n), this.children.each(function (n) {
                    n._index >= t._index && (n._index += e ? 1 : -1)
                }))
            }, _addChildView: function (t, e) {
                var n, i = this._isShown && !this.isBuffering && o.isNodeAttached(this.el);
                this.proxyChildEvents(t), this._isShown && !this.isBuffering && o.triggerMethodOn(t, "before:show", t), this.children.add(t), i && this._triggerBeforeAttach && (n = [t].concat(t._getNestedViews()), t.once("render", function () {
                    this._triggerMethodMany(n, this, "before:attach")
                }, this)), this.renderChildView(t, e), i && this._triggerAttach && (n = [t].concat(t._getNestedViews()), this._triggerMethodMany(n, this, "attach")), this._isShown && !this.isBuffering && o.triggerMethodOn(t, "show", t)
            }, renderChildView: function (t, e) {
                return t.render(), this.attachHtml(this, t, e), t
            }, buildChildView: function (t, e, i) {
                var r = n.extend({model: t}, i);
                return new e(r)
            }, removeChildView: function (t) {
                return t && (this.triggerMethod("before:remove:child", t), t.destroy ? t.destroy() : t.remove && t.remove(), delete t._parent, this.stopListening(t), this.children.remove(t), this.triggerMethod("remove:child", t), this._updateIndices(t, !1)), t
            }, isEmpty: function () {
                return !this.collection || 0 === this.collection.length
            }, checkEmpty: function () {
                this.isEmpty(this.collection) && this.showEmptyView()
            }, attachBuffer: function (t, e) {
                t.$el.append(e)
            }, _createBuffer: function () {
                var t = document.createDocumentFragment();
                return n.each(this._bufferedChildren, function (e) {
                    t.appendChild(e.el)
                }), t
            }, attachHtml: function (t, e, n) {
                t.isBuffering ? t._bufferedChildren.splice(n, 0, e) : t._insertBefore(e, n) || t._insertAfter(e)
            }, _insertBefore: function (t, e) {
                var n, i = this.getOption("sort") && e < this.children.length - 1;
                return i && (n = this.children.find(function (t) {
                    return t._index === e + 1
                })), !!n && (n.$el.before(t.el), !0)
            }, _insertAfter: function (t) {
                this.$el.append(t.el)
            }, _initChildViewStorage: function () {
                this.children = new e.ChildViewContainer
            }, destroy: function () {
                return this.isDestroyed ? this : (this.triggerMethod("before:destroy:collection"), this.destroyChildren({checkEmpty: !1}), this.triggerMethod("destroy:collection"), o.View.prototype.destroy.apply(this, arguments))
            }, destroyChildren: function (t) {
                var e = t || {}, i = !0, r = this.children.map(n.identity);
                return n.isUndefined(e.checkEmpty) || (i = e.checkEmpty), this.children.each(this.removeChildView, this), i && this.checkEmpty(), r
            }, _shouldAddChild: function (t, e) {
                var i = this.getOption("filter");
                return !n.isFunction(i) || i.call(this, t, e, this.collection)
            }, proxyChildEvents: function (t) {
                var e = this.getOption("childViewEventPrefix");
                this.listenTo(t, "all", function () {
                    var i = n.toArray(arguments), r = i[0], o = this.normalizeMethods(n.result(this, "childEvents"));
                    i[0] = e + ":" + r, i.splice(1, 0, t), "undefined" != typeof o && n.isFunction(o[r]) && o[r].apply(this, i.slice(1)), this.triggerMethod.apply(this, i)
                })
            }, _getImmediateChildren: function () {
                return n.values(this.children._views)
            }, getViewComparator: function () {
                return this.getOption("viewComparator")
            }
        }), o.CompositeView = o.CollectionView.extend({
            constructor: function () {
                o.CollectionView.apply(this, arguments)
            }, _initialEvents: function () {
                this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "remove", this._onCollectionRemove), this.listenTo(this.collection, "reset", this._renderChildren), this.getOption("sort") && this.listenTo(this.collection, "sort", this._sortViews))
            }, getChildView: function (t) {
                var e = this.getOption("childView") || this.constructor;
                return e
            }, serializeData: function () {
                var t = {};
                return this.model && (t = n.partial(this.serializeModel, this.model).apply(this, arguments)), t
            }, render: function () {
                return this._ensureViewIsIntact(), this._isRendering = !0, this.resetChildViewContainer(), this.triggerMethod("before:render", this), this._renderTemplate(), this._renderChildren(), this._isRendering = !1, this.isRendered = !0, this.triggerMethod("render", this), this
            }, _renderChildren: function () {
                (this.isRendered || this._isRendering) && o.CollectionView.prototype._renderChildren.call(this)
            }, _renderTemplate: function () {
                var t = {};
                t = this.serializeData(), t = this.mixinTemplateHelpers(t), this.triggerMethod("before:render:template");
                var e = this.getTemplate(), n = o.Renderer.render(e, t, this);
                this.attachElContent(n), this.bindUIElements(), this.triggerMethod("render:template")
            }, attachElContent: function (t) {
                return this.$el.html(t), this
            }, attachBuffer: function (t, e) {
                var n = this.getChildViewContainer(t);
                n.append(e)
            }, _insertAfter: function (t) {
                var e = this.getChildViewContainer(this, t);
                e.append(t.el)
            }, _appendReorderedChildren: function (t) {
                var e = this.getChildViewContainer(this);
                e.append(t)
            }, getChildViewContainer: function (t, e) {
                if (t.$childViewContainer)return t.$childViewContainer;
                var n, i = o.getOption(t, "childViewContainer");
                if (i) {
                    var r = o._getValue(i, t);
                    if (n = "@" === r.charAt(0) && t.ui ? t.ui[r.substr(4)] : t.$(r), n.length <= 0)throw new o.Error({
                        name: "ChildViewContainerMissingError",
                        message: 'The specified "childViewContainer" was not found: ' + t.childViewContainer
                    })
                } else n = t.$el;
                return t.$childViewContainer = n, n
            }, resetChildViewContainer: function () {
                this.$childViewContainer && (this.$childViewContainer = void 0)
            }
        }), o.LayoutView = o.ItemView.extend({
            regionClass: o.Region,
            options: {destroyImmediate: !1},
            childViewEventPrefix: "childview",
            constructor: function (t) {
                t = t || {}, this._firstRender = !0, this._initializeRegions(t), o.ItemView.call(this, t)
            },
            render: function () {
                return this._ensureViewIsIntact(), this._firstRender ? this._firstRender = !1 : this._reInitializeRegions(), o.ItemView.prototype.render.apply(this, arguments)
            },
            destroy: function () {
                return this.isDestroyed ? this : (this.getOption("destroyImmediate") === !0 && this.$el.remove(), this.regionManager.destroy(), o.ItemView.prototype.destroy.apply(this, arguments))
            },
            showChildView: function (t, e) {
                return this.getRegion(t).show(e)
            },
            getChildView: function (t) {
                return this.getRegion(t).currentView
            },
            addRegion: function (t, e) {
                var n = {};
                return n[t] = e, this._buildRegions(n)[t]
            },
            addRegions: function (t) {
                return this.regions = n.extend({}, this.regions, t), this._buildRegions(t)
            },
            removeRegion: function (t) {
                return delete this.regions[t], this.regionManager.removeRegion(t)
            },
            getRegion: function (t) {
                return this.regionManager.get(t)
            },
            getRegions: function () {
                return this.regionManager.getRegions()
            },
            _buildRegions: function (t) {
                var e = {regionClass: this.getOption("regionClass"), parentEl: n.partial(n.result, this, "el")};
                return this.regionManager.addRegions(t, e)
            },
            _initializeRegions: function (t) {
                var e;
                this._initRegionManager(), e = o._getValue(this.regions, this, [t]) || {};
                var i = this.getOption.call(t, "regions");
                i = o._getValue(i, this, [t]), n.extend(e, i), e = this.normalizeUIValues(e, ["selector", "el"]), this.addRegions(e)
            },
            _reInitializeRegions: function () {
                this.regionManager.invoke("reset")
            },
            getRegionManager: function () {
                return new o.RegionManager
            },
            _initRegionManager: function () {
                this.regionManager = this.getRegionManager(), this.regionManager._parent = this, this.listenTo(this.regionManager, "before:add:region", function (t) {
                    this.triggerMethod("before:add:region", t)
                }), this.listenTo(this.regionManager, "add:region", function (t, e) {
                    this[t] = e, this.triggerMethod("add:region", t, e)
                }), this.listenTo(this.regionManager, "before:remove:region", function (t) {
                    this.triggerMethod("before:remove:region", t)
                }), this.listenTo(this.regionManager, "remove:region", function (t, e) {
                    delete this[t], this.triggerMethod("remove:region", t, e)
                })
            },
            _getImmediateChildren: function () {
                return n.chain(this.regionManager.getRegions()).pluck("currentView").compact().value()
            }
        }), o.Behavior = o.Object.extend({
            constructor: function (t, e) {
                this.view = e, this.defaults = n.result(this, "defaults") || {}, this.options = n.extend({}, this.defaults, t), this.ui = n.extend({}, n.result(e, "ui"), n.result(this, "ui")), o.Object.apply(this, arguments)
            }, $: function () {
                return this.view.$.apply(this.view, arguments)
            }, destroy: function () {
                return this.stopListening(), this
            }, proxyViewProperties: function (t) {
                this.$el = t.$el, this.el = t.el
            }
        }), o.Behaviors = function (t, e) {
            function n(t, i) {
                return e.isObject(t.behaviors) ? (i = n.parseBehaviors(t, i || e.result(t, "behaviors")), n.wrap(t, i, e.keys(s)), i) : {}
            }

            function i(t, e) {
                this._view = t, this._behaviors = e, this._triggers = {}
            }

            function r(t) {
                return t._uiBindings || t.ui
            }

            var o = /^(\S+)\s*(.*)$/, s = {
                behaviorTriggers: function (t, e) {
                    var n = new i(this, e);
                    return n.buildBehaviorTriggers()
                }, behaviorEvents: function (n, i) {
                    var s = {};
                    return e.each(i, function (n, i) {
                        var a = {}, c = e.clone(e.result(n, "events")) || {};
                        c = t.normalizeUIKeys(c, r(n));
                        var u = 0;
                        e.each(c, function (t, r) {
                            var s = r.match(o), c = s[1] + "." + [this.cid, i, u++, " "].join(""), l = s[2], p = c + l, h = e.isFunction(t) ? t : n[t];
                            a[p] = e.bind(h, n)
                        }, this), s = e.extend(s, a)
                    }, this), s
                }
            };
            return e.extend(n, {
                behaviorsLookup: function () {
                    throw new t.Error({
                        message: "You must define where your behaviors are stored.",
                        url: "marionette.behaviors.html#behaviorslookup"
                    })
                }, getBehaviorClass: function (e, i) {
                    return e.behaviorClass ? e.behaviorClass : t._getValue(n.behaviorsLookup, this, [e, i])[i]
                }, parseBehaviors: function (t, i) {
                    return e.chain(i).map(function (i, r) {
                        var o = n.getBehaviorClass(i, r), s = new o(i, t), a = n.parseBehaviors(t, e.result(s, "behaviors"));
                        return [s].concat(a)
                    }).flatten().value()
                }, wrap: function (t, n, i) {
                    e.each(i, function (i) {
                        t[i] = e.partial(s[i], t[i], n)
                    })
                }
            }), e.extend(i.prototype, {
                buildBehaviorTriggers: function () {
                    return e.each(this._behaviors, this._buildTriggerHandlersForBehavior, this), this._triggers
                }, _buildTriggerHandlersForBehavior: function (n, i) {
                    var o = e.clone(e.result(n, "triggers")) || {};
                    o = t.normalizeUIKeys(o, r(n)), e.each(o, e.bind(this._setHandlerForBehavior, this, n, i))
                }, _setHandlerForBehavior: function (t, e, n, i) {
                    var r = i.replace(/^\S+/, function (t) {
                        return t + ".behaviortriggers" + e
                    });
                    this._triggers[r] = this._view._buildViewTrigger(n)
                }
            }), n
        }(o, n), o.AppRouter = e.Router.extend({
            constructor: function (t) {
                this.options = t || {}, e.Router.apply(this, arguments);
                var n = this.getOption("appRoutes"), i = this._getController();
                this.processAppRoutes(i, n), this.on("route", this._processOnRoute, this)
            },
            appRoute: function (t, e) {
                var n = this._getController();
                this._addAppRoute(n, t, e)
            },
            _processOnRoute: function (t, e) {
                if (n.isFunction(this.onRoute)) {
                    var i = n.invert(this.getOption("appRoutes"))[t];
                    this.onRoute(t, i, e)
                }
            },
            processAppRoutes: function (t, e) {
                if (e) {
                    var i = n.keys(e).reverse();
                    n.each(i, function (n) {
                        this._addAppRoute(t, n, e[n])
                    }, this)
                }
            },
            _getController: function () {
                return this.getOption("controller")
            },
            _addAppRoute: function (t, e, i) {
                var r = t[i];
                if (!r)throw new o.Error('Method "' + i + '" was not found on the controller');
                this.route(e, i, n.bind(r, t))
            },
            mergeOptions: o.mergeOptions,
            getOption: o.proxyGetOption,
            triggerMethod: o.triggerMethod,
            bindEntityEvents: o.proxyBindEntityEvents,
            unbindEntityEvents: o.proxyUnbindEntityEvents
        }), o.Application = o.Object.extend({
            constructor: function (t) {
                this._initializeRegions(t), this._initCallbacks = new o.Callbacks, this.submodules = {}, n.extend(this, t), this._initChannel(), o.Object.call(this, t)
            }, execute: function () {
                this.commands.execute.apply(this.commands, arguments)
            }, request: function () {
                return this.reqres.request.apply(this.reqres, arguments)
            }, addInitializer: function (t) {
                this._initCallbacks.add(t)
            }, start: function (t) {
                this.triggerMethod("before:start", t), this._initCallbacks.run(t, this), this.triggerMethod("start", t)
            }, addRegions: function (t) {
                return this._regionManager.addRegions(t)
            }, emptyRegions: function () {
                return this._regionManager.emptyRegions()
            }, removeRegion: function (t) {
                return this._regionManager.removeRegion(t)
            }, getRegion: function (t) {
                return this._regionManager.get(t)
            }, getRegions: function () {
                return this._regionManager.getRegions()
            }, module: function (t, e) {
                var i = o.Module.getClass(e), r = n.toArray(arguments);
                return r.unshift(this), i.create.apply(i, r)
            }, getRegionManager: function () {
                return new o.RegionManager
            }, _initializeRegions: function (t) {
                var e = n.isFunction(this.regions) ? this.regions(t) : this.regions || {};
                this._initRegionManager();
                var i = o.getOption(t, "regions");
                return n.isFunction(i) && (i = i.call(this, t)), n.extend(e, i), this.addRegions(e), this
            }, _initRegionManager: function () {
                this._regionManager = this.getRegionManager(), this._regionManager._parent = this, this.listenTo(this._regionManager, "before:add:region", function () {
                    o._triggerMethod(this, "before:add:region", arguments)
                }), this.listenTo(this._regionManager, "add:region", function (t, e) {
                    this[t] = e, o._triggerMethod(this, "add:region", arguments)
                }), this.listenTo(this._regionManager, "before:remove:region", function () {
                    o._triggerMethod(this, "before:remove:region", arguments)
                }), this.listenTo(this._regionManager, "remove:region", function (t) {
                    delete this[t], o._triggerMethod(this, "remove:region", arguments)
                })
            }, _initChannel: function () {
                this.channelName = n.result(this, "channelName") || "global", this.channel = n.result(this, "channel") || e.Wreqr.radio.channel(this.channelName), this.vent = n.result(this, "vent") || this.channel.vent, this.commands = n.result(this, "commands") || this.channel.commands, this.reqres = n.result(this, "reqres") || this.channel.reqres
            }
        }), o.Module = function (t, e, i) {
            this.moduleName = t, this.options = n.extend({}, this.options, i), this.initialize = i.initialize || this.initialize, this.submodules = {}, this._setupInitializersAndFinalizers(), this.app = e, n.isFunction(this.initialize) && this.initialize(t, e, this.options)
        }, o.Module.extend = o.extend, n.extend(o.Module.prototype, e.Events, {
            startWithParent: !0,
            initialize: function () {
            },
            addInitializer: function (t) {
                this._initializerCallbacks.add(t)
            },
            addFinalizer: function (t) {
                this._finalizerCallbacks.add(t)
            },
            start: function (t) {
                this._isInitialized || (n.each(this.submodules, function (e) {
                    e.startWithParent && e.start(t)
                }), this.triggerMethod("before:start", t), this._initializerCallbacks.run(t, this), this._isInitialized = !0, this.triggerMethod("start", t))
            },
            stop: function () {
                this._isInitialized && (this._isInitialized = !1, this.triggerMethod("before:stop"), n.invoke(this.submodules, "stop"), this._finalizerCallbacks.run(void 0, this), this._initializerCallbacks.reset(), this._finalizerCallbacks.reset(), this.triggerMethod("stop"))
            },
            addDefinition: function (t, e) {
                this._runModuleDefinition(t, e)
            },
            _runModuleDefinition: function (t, i) {
                if (t) {
                    var r = n.flatten([this, this.app, e, o, e.$, n, i]);
                    t.apply(this, r)
                }
            },
            _setupInitializersAndFinalizers: function () {
                this._initializerCallbacks = new o.Callbacks, this._finalizerCallbacks = new o.Callbacks
            },
            triggerMethod: o.triggerMethod
        }), n.extend(o.Module, {
            create: function (t, e, i) {
                var r = t, o = n.drop(arguments, 3);
                e = e.split(".");
                var s = e.length, a = [];
                return a[s - 1] = i, n.each(e, function (e, n) {
                    var s = r;
                    r = this._getModule(s, e, t, i), this._addModuleDefinition(s, r, a[n], o)
                }, this), r
            }, _getModule: function (t, e, i, r, o) {
                var s = n.extend({}, r), a = this.getClass(r), c = t[e];
                return c || (c = new a(e, i, s), t[e] = c, t.submodules[e] = c), c
            }, getClass: function (t) {
                var e = o.Module;
                return t ? t.prototype instanceof e ? t : t.moduleClass || e : e
            }, _addModuleDefinition: function (t, e, n, i) {
                var r = this._getDefine(n), o = this._getStartWithParent(n, e);
                r && e.addDefinition(r, i), this._addStartWithParent(t, e, o)
            }, _getStartWithParent: function (t, e) {
                var i;
                return n.isFunction(t) && t.prototype instanceof o.Module ? (i = e.constructor.prototype.startWithParent, !!n.isUndefined(i) || i) : !n.isObject(t) || (i = t.startWithParent, !!n.isUndefined(i) || i)
            }, _getDefine: function (t) {
                return !n.isFunction(t) || t.prototype instanceof o.Module ? n.isObject(t) ? t.define : null : t
            }, _addStartWithParent: function (t, e, n) {
                e.startWithParent = e.startWithParent && n, e.startWithParent && !e.startWithParentIsConfigured && (e.startWithParentIsConfigured = !0, t.addInitializer(function (t) {
                    e.startWithParent && e.start(t)
                }))
            }
        }), o
    })
}, function (t, e, n) {
    var i, r;
    !function (o, s) {
        i = [n(3), n(5)], r = function (t, e) {
            return s(t, e)
        }.apply(e, i), !(void 0 !== r && (t.exports = r))
    }(this, function (t, e) {
        "use strict";
        var n = t.ChildViewContainer;
        return t.ChildViewContainer = function (t, e) {
            var n = function (t) {
                this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), e.each(t, this.add, this)
            };
            e.extend(n.prototype, {
                add: function (t, e) {
                    var n = t.cid;
                    return this._views[n] = t, t.model && (this._indexByModel[t.model.cid] = n), e && (this._indexByCustom[e] = n), this._updateLength(), this
                }, findByModel: function (t) {
                    return this.findByModelCid(t.cid)
                }, findByModelCid: function (t) {
                    var e = this._indexByModel[t];
                    return this.findByCid(e)
                }, findByCustom: function (t) {
                    var e = this._indexByCustom[t];
                    return this.findByCid(e)
                }, findByIndex: function (t) {
                    return e.values(this._views)[t]
                }, findByCid: function (t) {
                    return this._views[t]
                }, remove: function (t) {
                    var n = t.cid;
                    return t.model && delete this._indexByModel[t.model.cid], e.any(this._indexByCustom, function (t, e) {
                        if (t === n)return delete this._indexByCustom[e], !0
                    }, this), delete this._views[n], this._updateLength(), this
                }, call: function (t) {
                    this.apply(t, e.tail(arguments))
                }, apply: function (t, n) {
                    e.each(this._views, function (i) {
                        e.isFunction(i[t]) && i[t].apply(i, n || [])
                    })
                }, _updateLength: function () {
                    this.length = e.size(this._views)
                }
            });
            var i = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck", "reduce"];
            return e.each(i, function (t) {
                n.prototype[t] = function () {
                    var n = e.values(this._views), i = [n].concat(e.toArray(arguments));
                    return e[t].apply(e, i)
                }
            }), n
        }(t, e), t.ChildViewContainer.VERSION = "0.1.11", t.ChildViewContainer.noConflict = function () {
            return t.ChildViewContainer = n, this
        }, t.ChildViewContainer
    })
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, a = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)c.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, c = {}.hasOwnProperty;
        o = n(9), r = n(20), i = function (t) {
            function n() {
                return this.persist = s(this.persist, this), this.saveModel = s(this.saveModel, this), this.updateModel = s(this.updateModel, this), this.render = s(this.render, this), this.clear = s(this.clear, this), this.save = s(this.save, this), this.getAttributes = s(this.getAttributes, this), n.__super__.constructor.apply(this, arguments)
            }

            return a(n, t), n.prototype._saving = !1, n.prototype.focus = !0, n.prototype.getAttributes = function () {
                return o.serialize(this)
            }, n.prototype.save = function (t) {
                if (t && t.preventDefault(), !this._saving)return null != this.beforeSave ? this.beforeSave() : this.persist()
            }, n.prototype.clear = function () {
                return null != this.$el.get(0).reset ? this.$el.get(0).reset() : this.$("form").get(0).reset()
            }, n.prototype.render = function () {
                var t;
                return t = n.__super__.render.call(this), focus && (this.$(":input[data-invalid]").length > 0 ? this.$(":input[data-invalid]:first").focus() : this.$(":input:first").not('[type="file"]').focus()), t
            }, n.prototype.updateModel = function () {
                return this.model.set(this.getAttributes())
            }, n.prototype.saveModel = function () {
                return this.model.save(this.getAttributes())
            }, n.prototype.persist = function () {
                var t;
                return t = new e.Deferred, this._saving = !0, window.EventBus && window.EventBus.trigger("load"), null != this.load && this.load({saving: !0}), this.model.errors = {}, this.saveModel().always(function (t) {
                    return function () {
                        return window.EventBus && window.EventBus.trigger("loadcomplete"), null != t.loadComplete && t.loadComplete({saving: !0}), t._saving = !1
                    }
                }(this)).done(function (e) {
                    return function (n, i) {
                        return null != e.success && e.success(i, n), t.resolve(e, i)
                    }
                }(this)).fail(function (e) {
                    return function (n) {
                        return 400 !== n.status && 412 !== n.status || (e.model.errors = JSON.parse(n.responseText).errors, null != e.failure && e.failure(n)), e.inject("vent").trigger("failure.syncError", {
                            type: "saving",
                            response: n,
                            view: e
                        }), t.reject(e, n)
                    }
                }(this)), t
            }, n
        }(r), t.exports = i
    }).call(e, n(7))
}, function (t, e, n) {
    var i, r, o = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }, s = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e)a.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, a = {}.hasOwnProperty, c = [].slice;
    r = n(21), i = function (t) {
        function e() {
            return this.saveModel = o(this.saveModel, this), this._loadComplete = o(this._loadComplete, this), this._load = o(this._load, this), this.reload = o(this.reload, this), this.render = o(this.render, this), e.__super__.constructor.apply(this, arguments)
        }

        return s(e, t), e.prototype._subviews = [], e.prototype._fetched = !1, e.prototype.templateArgs = {}, e.prototype.render = function () {
            return this.isRendered = !0, this.fetch && !this._fetched ? (this.isRendered = !1, this._load(), this.model.fetch().always(function (t) {
                return function () {
                    return t._loadComplete()
                }
            }(this)).done(function (t) {
                return function () {
                    return t._fetched = !0, e.__super__.render.apply(t, arguments), t.isRendered = !0
                }
            }(this)).fail(function (t) {
                return function (e) {
                    return null != t.failure && t.failure(e, {fetch: !0}), t.inject("vent").trigger("failure.syncError", {
                        type: "loading",
                        view: t,
                        response: e
                    })
                }
            }(this)), this) : e.__super__.render.apply(this, arguments)
        }, e.prototype.reload = function () {
            return this._fetched = !1, this.render()
        }, e.prototype._load = function () {
            var t;
            if (t = 1 <= arguments.length ? c.call(arguments, 0) : [], "function" == typeof this.load && this.load.apply(this, t), null != this.loading)return this.loadingView = new r({
                tagName: this.loading.tagName ? this.loading.tagName : "div",
                template: this.loading.template,
                templateArgs: {message: this.loading.message}
            }), this.$el.html(this.loadingView.render().$el.html())
        }, e.prototype._loadComplete = function () {
            if ("function" == typeof this.loadComplete && this.loadComplete(), null != this.loadingView)return this.loadingView.remove()
        }, e.prototype.saveModel = function () {
            return "function" == typeof this.load && this.load({saving: !0}), this.model.save().always(function (t) {
                return function () {
                    return t._loadComplete()
                }
            }(this)).done(function (t) {
                return function () {
                    return "function" == typeof t.success ? t.success() : void 0
                }
            }(this)).fail(function (t) {
                return function (e) {
                    if (e.status >= 500)return t.inject("vent").trigger("failure.syncError", {
                        type: "saving",
                        response: e,
                        view: t
                    })
                }
            }(this))
        }, e
    }(r), t.exports = i
}, function (t, e, n) {
    (function (e, i) {
        var r, o, s, a, c = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, u = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)l.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, l = {}.hasOwnProperty;
        r = n(11), s = n(17), o = n(15), a = function (t) {
            function n() {
                return this._renderTemplate = c(this._renderTemplate, this), this.remove = c(this.remove, this), this.getSubviews = c(this.getSubviews, this), this.clearSubviews = c(this.clearSubviews, this), this.prevent = c(this.prevent, this), this.render = c(this.render, this), this._changed = c(this._changed, this), this.initialize = c(this.initialize, this), n.__super__.constructor.apply(this, arguments)
            }

            return u(n, t), n.prototype.tagName = "div", n.prototype.isBound = !1, n.prototype.inject = function (t) {
                var e;
                return e = r.reqres.request("app"), t ? e.get(t) : e
            }, n.prototype._subviews = [], n.prototype.initialize = function (t) {
                var i;
                return "function" == typeof this.beforeInit && this.beforeInit(t), null != (i = this.model) && "function" == typeof i.on && i.on("change", this._changed), e.extend(this, t), n.__super__.initialize.call(this), "function" == typeof this.init ? this.init(t) : void 0
            }, n.prototype.templateArgs = {}, n.prototype._changed = function () {
                var t, e, n, i, r, o, s, a, c;
                if (this.isBound) {
                    t = this.model.changedAttributes(), s = [];
                    for (n in t)a = t[n], e = this.$("[data-bind='" + n + "']"), e && e.length > 0 ? (i = e.data("bind-method"), c = a, r = null != (o = "function" == typeof this.bindingMethods ? this.bindingMethods() : void 0) ? o : this.bindingMethods, i && r && (c = r[i](a)), e.is(":input") ? s.push(e.val(c)) : s.push(e.text(c))) : s.push(void 0);
                    return s
                }
            }, n.prototype.renderTo = function (t) {
                return null != t.$el ? this.render().$el.appendTo(view.$el) : this.render().$el.appendTo(i(t))
            }, n.prototype.prependTo = function (t, e) {
                if (null != t.$el)return null != e ? this.render().$el.prependTo(t.$(e)) : this.render().$el.prependTo(t.$el)
            }, n.prototype.renderIn = function (t, e) {
                if (null != t.$el)return null != e ? this.render().$el.appendTo(t.$(e)) : this.render().$el.appendTo(t.$el)
            }, n.prototype.render = function () {
                var t, n, i, r, s, a, c;
                if (null == this.beforeRender || (r = new o, n = this.beforeRender(r), !r.isDefaultPrevented()))return t = null != (a = "function" == typeof this.templateArgs ? this.templateArgs() : void 0) ? a : this.templateArgs, i = {}, null != this.model && (null != this.model.viewJSON ? i.model = this.model.viewJSON() : i.model = null != this.model.toJSON ? this.model.toJSON() : this.model), t = e.extend(i, t), null != this.template && ("string" == typeof this.template ? this.templateText = this.template : (this.templateText = null, s = this.template(t), this.$el.html(s), null != this.beforeWriteToDOM && this.beforeWriteToDOM(this))), null != this.templateText && (s = this._renderTemplate(t), null != this.beforeWriteToDOM && this.beforeWriteToDOM(this), this.$el.html(s)), null != this.afterRender && this.afterRender(), null != (c = this.inject("vent")) && c.trigger("view.rendered", this), this
            }, n.prototype.hideElement = function (t) {
                return this.$(t).hide()
            }, n.prototype.prevent = function (t) {
                return null != t && "function" == typeof t.stopPropagation && t.stopPropagation(), null != t && "function" == typeof t.preventDefault ? t.preventDefault() : void 0
            }, n.prototype.showElement = function (t) {
                return this.$(t).show()
            }, n.prototype.addSubview = function (t) {
                if (t)return this._subviews.push(t)
            }, n.prototype.clearSubviews = function () {
                var t, e, n, i;
                if (this._subviews && this._subviews.length > 0) {
                    for (n = this._subviews, t = 0, e = n.length; t < e; t++) {
                        i = n[t];
                        try {
                            null != i && "function" == typeof i.remove && i.remove()
                        } catch (r) {
                        }
                    }
                    return this._subviews = []
                }
            }, n.prototype.getSubviews = function () {
                return this._subviews
            }, n.prototype.wait = function (t, e) {
                return setTimeout(e, t)
            }, n.prototype.remove = function () {
                return null != this.beforeRemove && this.beforeRemove(), this.trigger("removed", this), n.__super__.remove.apply(this, arguments)
            }, n.prototype.selectTextOf = function (t) {
                var e;
                return document.selection ? (e = document.body.createTextRange(), e.moveToElementText(t), e.select()) : window.getSelection ? (e = document.createRange(), e.selectNode(t), window.getSelection().addRange(e)) : void 0
            }, n.prototype._renderTemplate = function (t) {
                return e.template(this.templateText)(t)
            }, n.prototype.$get = function (t) {
                return this.$(t)
            }, n.prototype.getDatePicker = function (t) {
                return this.$(t).data("kendoDatePicker")
            }, n.prototype.stopPropagationAndPrevent = function (t) {
                return t.preventDefault(), t.stopPropagation()
            }, n.prototype.addPlaceholder = function (t, e) {
                return this.$(t).attr("placeholder", e)
            }, n.prototype.removePlaceholder = function (t) {
                return this.$(t).removeAttr("placeholder")
            }, n
        }(s.View), t.exports = a
    }).call(e, n(5), n(7))
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s, a, c = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, u = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)l.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, l = {}.hasOwnProperty;
        s = n(21), r = n(20), a = n(5), i = n(3), o = function (t) {
            function n() {
                return this._writeItem = c(this._writeItem, this), this._appendItem = c(this._appendItem, this), this._prependItem = c(this._prependItem, this), this.setBody = c(this.setBody, this), this._itemRemoved = c(this._itemRemoved, this), this.empty = c(this.empty, this), this._renderItems = c(this._renderItems, this), this._loadComplete = c(this._loadComplete, this), this._load = c(this._load, this), this.setDefaultLoadingMessage = c(this.setDefaultLoadingMessage, this), this.setLoadingMessage = c(this.setLoadingMessage, this), this.renderHeader = c(this.renderHeader, this), this.setHeader = c(this.setHeader, this), this._getItemView = c(this._getItemView, this), this.renderItem = c(this.renderItem, this), this.prependItem = c(this.prependItem, this), this.fetchItems = c(this.fetchItems, this), this.setFilters = c(this.setFilters, this), this.renderItems = c(this.renderItems, this), this.reload = c(this.reload, this), this.refresh = c(this.refresh, this), this.afterRender = c(this.afterRender, this), n.__super__.constructor.apply(this, arguments)
            }

            return u(n, t), n.prototype._fetched = !1, n.prototype.tagName = "table", n.prototype.itemTagName = "tr", n.prototype.className = "table", n.prototype.emptyText = "No results", n.prototype.hasHeader = !0, n.prototype.templateText = "", n.prototype.hideHeaderWhenEmpty = !1, n.prototype.renderOnAdd = !1, n.prototype.afterRender = function () {
                return this.hideHeaderWhenEmpty || this.hasHeader && this.renderHeader(), this.renderItems(function (t) {
                    return function () {
                        return t.hideHeaderWhenEmpty && t.hasHeader && t.renderHeader(), t.renderOnAdd && t.listenTo(t.collection, "add", t.renderItem), t.trigger("rendered", t)
                    }
                }(this))
            }, n.prototype.refresh = function () {
                return null != this.collection.refresh && this.collection.refresh(), this.fetch && (this._fetched = !1), this.clearSubviews(), this.render()
            }, n.prototype.reload = function () {
                return this.refresh()
            }, n.prototype.renderItems = function (t) {
                return this.fetch && !this._fetched ? this.fetchItems().done(function (e) {
                    return function () {
                        return e._renderItems(), "function" == typeof t ? t() : void 0
                    }
                }(this)) : (this._renderItems(), "function" == typeof t ? t() : void 0)
            }, n.prototype.setFilters = function (t) {
                var e, n, i;
                n = [];
                for (e in t)i = t[e], n.push(this.collection.addParam(e, i));
                return n
            }, n.prototype.fetchItems = function () {
                var t;
                return t = new e.Deferred, this._load(), this.fetching = !0, this.collection.fetch({silent: !0}).always(function (t) {
                    return function () {
                        return t._loadComplete(), t.fetching = !1
                    }
                }(this)).done(function (e) {
                    return function () {
                        return e._fetched = !0, e._loadComplete(), e.trigger("items.fetched", e.collection), e.collection.size() <= 0 && e.trigger("empty", e), t.resolve(e.collection)
                    }
                }(this)).fail(function (e) {
                    return function (n) {
                        return t.reject(n), e.inject("vent").trigger("failure.syncError", {
                            type: "loading",
                            view: e,
                            response: n
                        })
                    }
                }(this)), t
            }, n.prototype.prependItem = function (t) {
                var e;
                return e = this._getItemView(t), this._prependItem(e)
            }, n.prototype.renderItem = function (t) {
                var e;
                return e = this._getItemView(t), this._appendItem(e)
            }, n.prototype._getItemView = function (t) {
                var e;
                return this.emptyView && this.emptyView.remove(), e = this._getView(t), e.on("removed", this._itemRemoved), t.currentView = e, this.addSubview(e), this.trigger("item.rendered", t, e), e
            }, n.prototype._getView = function (t) {
                var e, n, i, o, s, c, u;
                return null != this.itemView ? (n = new this.itemView({model: t}), n.parent = this, e = null != (i = "function" == typeof this.templateArgs ? this.templateArgs() : void 0) ? i : this.templateArgs, u = null != (o = "function" == typeof n.templateArgs ? n.templateArgs() : void 0) ? o : n.templateArgs, n.templateArgs = a.extend(e, u)) : (n = new r({
                    tagName: this.itemTagName,
                    events: this.itemEvents,
                    model: null != t.toJSON ? t.toJSON() : t,
                    template: this.itemTemplate
                }), n.parent = this, e = null != (s = "function" == typeof this.templateArgs ? this.templateArgs() : void 0) ? s : this.templateArgs, u = null != (c = "function" == typeof n.templateArgs ? n.templateArgs() : void 0) ? c : n.templateArgs, n.templateArgs = a.extend(e, u)), n
            }, n.prototype.setHeader = function (t) {
                return this.$header = t, this
            }, n.prototype.renderHeader = function () {
                var t, n, i, o, s, a;
                if (!(this.hideHeaderWhenEmpty && this.collection.size() <= 0)) {
                    if (n = this.$header ? this.$header : e("<thead>").appendTo(this.$el), this.headerClassName && n.addClass(this.headerClassName), null != this.headerTemplate)this.headerView = new r({
                        tagName: this.itemTagName,
                        template: this.headerTemplate,
                        templateArgs: null != (s = "function" == typeof this.templateArgs ? this.templateArgs() : void 0) ? s : this.templateArgs
                    }), this.addSubview(this.headerView), this.headerView.render().$el.appendTo(n); else for (a = this.headers, i = 0, o = a.length; i < o; i++)t = a[i], e("<th />").text(t).appendTo(n);
                    return this
                }
            }, n.prototype.setLoadingMessage = function (t) {
                if (!this._initialLoadMessage && this.loading && (this._initialLoadMessage = this.loading.message), t)return this.loading.message = t
            }, n.prototype.setDefaultLoadingMessage = function () {
                if (this._initialLoadMessage)return this.setLoadingMessage(this._initialLoadMessage)
            }, n.prototype._load = function () {
                var t, e, n;
                if (null != this.load && this.load(), null != this.loading)return t = null != (e = "function" == typeof this.loading ? this.loading() : void 0) ? e : this.loading, n = new r({
                    tagName: this.itemTagName,
                    template: t.template,
                    templateArgs: function (e) {
                        return function () {
                            return {colspan: t.colspan, message: t.message}
                        }
                    }(this)
                }), this.loadingView = n, this._appendItem(n)
            }, n.prototype._loadComplete = function () {
                if (this.setLoadingMessage(this._initialLoadMessage), null != this.loadComplete && this.loadComplete(), null != this.loadingView)return this.loadingView.remove()
            }, n.prototype._renderItems = function () {
                var t, e, n, i, r;
                if (this.collection.size() <= 0)return void(null != this.emptyTemplate && this.empty());
                for (this.$body && this.$body.empty(), i = this.collection.models, r = [], t = 0, n = i.length; t < n; t++)e = i[t], r.push(this.renderItem(e));
                return r
            }, n.prototype.empty = function () {
                var t, e, n;
                return this.hideHeaderWhenEmpty && (null != (t = this.headerView) && t.remove(), this.$("thead").empty()), n = new r({
                    tagName: this.itemTagName,
                    template: this.emptyTemplate,
                    templateArgs: null != (e = "function" == typeof this.templateArgs ? this.templateArgs() : void 0) ? e : this.templateArgs
                }), this.addSubview(n), this.emptyView = n, this._appendItem(n)
            }, n.prototype._itemRemoved = function () {
                if (this.collection.size() <= 0)return this.empty()
            }, n.prototype.setBody = function (t) {
                return this.$body = t, this
            }, n.prototype._prependItem = function (t) {
                return this._writeItem(t, function (e) {
                    return function (e) {
                        return t.render().$el.prependTo(e)
                    }
                }(this))
            }, n.prototype._appendItem = function (t) {
                return this._writeItem(t, function (e) {
                    return function (e) {
                        return t.render().$el.appendTo(e)
                    }
                }(this))
            }, n.prototype._writeItem = function (t, n) {
                var i;
                return "tbody" === this.tagName ? void n(this.$el) : "table" !== this.tagName ? void n(this.$el) : (this.$body ? i = this.$body : 0 === this.$el.find("tbody").length ? (i = e("<tbody />").appendTo(this.$el), this.bodyClassName && i.addClass(this.bodyClassName)) : i = this.$("tbody"), n(i))
            }, n
        }(s), t.exports = o
    }).call(e, n(7))
}, function (t, e, n) {
    var i, r, o, s = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }, a = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e)c.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, c = {}.hasOwnProperty;
    o = n(5), r = n(22), i = function (t) {
        function e() {
            return this.refresh = s(this.refresh, this), this.afterRender = s(this.afterRender, this), this.beforeRender = s(this.beforeRender, this), e.__super__.constructor.apply(this, arguments)
        }

        return a(e, t), e.prototype.initialize = function (t) {
            return e.__super__.initialize.call(this, t), this.listenTo(this, "scroll:bottom", this.fetchNextPage), this.listenTo(this.collection.fullCollection, "add", this.renderItem), this.listenTo(this, "empty", this.empty)
        }, e.prototype.beforeRender = function () {
            return this.clearSubviews()
        }, e.prototype.afterRender = function () {
            if (this.renderHeader(), !this.nextPageLoaded && this.fetch)return this.fetchItems()
        }, e.prototype.refresh = function () {
            return this.nextPageLoaded = !1, e.__super__.refresh.apply(this, arguments)
        }, e.prototype.fetchNextPage = function () {
            return this._fetchingPage || this.collection.complete || this.fetching ? void this.setDefaultLoadingMessage() : (this._fetchingPage = !0, this._load(), this.collection.getNextPage().always(function (t) {
                return function () {
                    return t._loadComplete(), t._fetchingPage = !1
                }
            }(this)))
        }, e
    }(r), t.exports = i
}, function (t, e, n) {
    (function (e) {
        var i, r, o = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, s = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)a.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, a = {}.hasOwnProperty;
        i = n(19), r = function (t) {
            function n() {
                return this._updateProgressBar = o(this._updateProgressBar, this), this._complete = o(this._complete, this), this._uploadProgress = o(this._uploadProgress, this), this.save = o(this.save, this), this.getAttributes = o(this.getAttributes, this), this.addFile = o(this.addFile, this), this.initialize = o(this.initialize, this), n.__super__.constructor.apply(this, arguments)
            }

            return s(n, t), n.prototype.files = [], n.prototype.initialize = function () {
                if (null != this.modelType)return this.model = new this.modelType, this.listenTo(this.model, "upload:progress", this._uploadProgress)
            }, n.prototype.addFile = function (t) {
                var e;
                return e = this.$(t).attr("name"), this.model.setFileField(e, this.$(t).get())
            }, n.prototype.getAttributes = function () {
                return {}
            }, n.prototype.save = function (t) {
                var e, i, r, o;
                for (o = this.files, i = 0, r = o.length; i < r; i++)e = o[i], this.addFile(e);
                return n.__super__.save.call(this, t)
            }, n.prototype._uploadProgress = function (t) {
                var e;
                if (e = {
                        percent: t.loaded / t.total * 100,
                        ev: t
                    }, this._updateProgressBar(e.percent), e.percent >= 100 && this._complete(), null != this.progress)return this.progress(e)
            }, n.prototype._complete = function () {
                return this.trigger("complete", this), this._updateProgressBar(0)
            }, n.prototype._updateProgressBar = function (t) {
                return (0 === t || t >= 100) && e(".progress").hide(), this.$(".progress .meter").css({width: "#{ percent }%"})
            }, n
        }(i), t.exports = r
    }).call(e, n(7))
}, function (t, e, n) {
    var i, r, o, s = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }, a = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e)c.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, c = {}.hasOwnProperty, u = [].slice;
    o = n(17), i = n(11), r = function (t) {
        function e() {
            return this.initialize = s(this.initialize, this), e.__super__.constructor.apply(this, arguments)
        }

        return a(e, t), e.prototype.inject = function (t) {
            var e;
            return e = i.reqres.request("app"), t ? e.get(t) : e
        }, e.prototype.initialize = function (t) {
            var n;
            return "function" == typeof this.beforeInit && this.beforeInit(t), "function" == typeof(n = e.__super__.initialize.apply(this, arguments)) && n(t), "function" == typeof this.init ? this.init(t) : void 0
        }, e.prototype.onBeforeRender = function () {
            var t;
            if (t = 1 <= arguments.length ? u.call(arguments, 0) : [], null != this.beforeRender)return this.beforeRender.apply(this, t)
        }, e.prototype.onRender = function () {
            var t;
            if (t = 1 <= arguments.length ? u.call(arguments, 0) : [], null != this.afterRender)return this.afterRender.apply(this, t)
        }, e.prototype.templateHelpers = e.templateArgs, e
    }(o.LayoutView), t.exports = r
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s, a, c = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, u = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)l.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, l = {}.hasOwnProperty, p = [].slice;
        i = n(3), r = n(11), a = n(27), s = n(28), o = function (t) {
            function n() {
                return this.isValid = c(this.isValid, this), this._modelChanged = c(this._modelChanged, this), this.setErrors = c(this.setErrors, this), this.inject = c(this.inject, this), n.__super__.constructor.apply(this, arguments)
            }

            return u(n, t), n.prototype.initialize = function () {
                var t;
                return t = 1 <= arguments.length ? p.call(arguments, 0) : [], n.__super__.initialize.apply(this, t), this.listenTo(this, "change", this._modelChanged), "function" == typeof this.init ? this.init(t) : void 0
            }, n.prototype.inject = function (t) {
                var e;
                return e = r.reqres.request("app"), t ? e.get(t) : e
            }, n.prototype.setErrors = function (t) {
                var e;
                if (400 === t.status || 412 === t.status)return e = JSON.parse(t.responseText), this.errors = null != e ? e.errors : void 0
            }, n.prototype.toJSON = function () {
                var t, i;
                return t = n.__super__.toJSON.call(this), e.extend(t, {errors: this.errors}), this.jsonMethods && e.extend(t, {methods: null != (i = "function" == typeof this.jsonMethods ? this.jsonMethods() : void 0) ? i : this.jsonMethods}), e.extend(n.__super__.toJSON.call(this), {errors: this.errors}), t
            }, n.prototype.getErrorsFromResponse = function (t) {
                return 400 !== t.status ? t.responseText : JSON.parse(t.responseText)
            }, n.prototype._modelChanged = function () {
                if (this.collection)return this.collection.trigger("model.updated", this)
            }, n.prototype.isValid = function (t) {
                var e, n, i, r, o, s, a, c;
                if (t || (t = this.toJSON()), this.errors && (this.errors = null), !this.validation)return !0;
                n = {}, a = !0, o = null != (r = "function" == typeof this.validation ? this.validation() : void 0) ? r : this.validation;
                for (i in o)s = o[i], c = t[i], e = null != s && "function" == typeof s.validation ? s.validation(c) : void 0, e && e.length > 0 && (null == n[i] && (n[i] = []), n[i].push(e), a = !1);
                return a || (this.errors = n), a
            }, n
        }(i.Model), t.exports = o
    }).call(e, n(5))
}, function (t, e, n) {
    (function (e) {
        t.exports = {
            required: function (t, n) {
                return null !== t.get(n) && void 0 !== t.get(n) && "" !== e.trim(t.get(n))
            }, isJson: function (t) {
                var e, n;
                try {
                    return JSON.parse(t), !0
                } catch (n) {
                    return e = n, !1
                }
            }
        }
    }).call(e, n(5))
}, function (t, e, n) {
    !function (e, i) {
        t.exports = i(n(3), n(5))
    }(this, function (t, e) {
        var n = t.Model, i = t.Collection;
        return t.Model.prototype.setRelation = function (t, r, o) {
            var s = this.attributes[t];
            this.idAttribute || "id";
            if (o.unset && s && delete s.parent, this.relations && e.has(this.relations, t)) {
                if (s && s instanceof i)return r = r instanceof i || r instanceof Array ? r.models || r : [r], s.set(r, o), s;
                if (s && s instanceof n)return r instanceof n && (r = r.toJSON()), s.set(r, o), s;
                o._parent = this, (r instanceof i || r instanceof n) && (r = r.toJSON()), r = new this.relations[t](r, o), r.parent = this
            }
            return r
        }, t.Model.prototype.set = function (t, n, i) {
            var r, o, s, a, c, u, l, p;
            if (null == t)return this;
            if ("object" == typeof t ? (o = t, i = n) : (o = {})[t] = n, i || (i = {}), !this._validate(o, i))return !1;
            s = i.unset, c = i.silent, a = [], u = this._changing, this._changing = !0, u || (this._previousAttributes = e.clone(this.attributes), this.changed = {}), p = this.attributes, l = this._previousAttributes, this.idAttribute in o && (this.id = o[this.idAttribute]);
            for (r in o)n = o[r], n = this.setRelation(r, n, i), e.isEqual(p[r], n) || a.push(r), e.isEqual(l[r], n) ? delete this.changed[r] : this.changed[r] = n,
                s ? delete p[r] : p[r] = n;
            if (!c) {
                a.length && (this._pending = !0);
                for (var h = 0, d = a.length; h < d; h++)this.trigger("change:" + a[h], this, p[a[h]], i)
            }
            if (u)return this;
            if (!c)for (; this._pending;)this._pending = !1, this.trigger("change", this, i);
            return this._pending = !1, this._changing = !1, this
        }, t.Model.prototype.toJSON = function (t) {
            var n = e.clone(this.attributes);
            return e.each(this.relations, function (t, i) {
                e.has(n, i) ? n[i] = n[i].toJSON() : n[i] = (new t).toJSON()
            }), n
        }, t.Model.prototype.clone = function (t) {
            return new this.constructor(this.toJSON())
        }, t.Collection.prototype.resetRelations = function (n) {
            e.each(this.models, function (i) {
                e.each(i.relations, function (e, r) {
                    i.get(r) instanceof t.Collection && i.get(r).trigger("reset", i, n)
                })
            })
        }, t.Collection.prototype.reset = function (t, n) {
            n || (n = {});
            for (var i = 0, r = this.models.length; i < r; i++)this._removeReference(this.models[i]);
            return n.previousModels = this.models, this._reset(), this.add(t, e.extend({silent: !0}, n)), n.silent || (this.trigger("reset", this, n), this.resetRelations(n)), this
        }, t
    })
}, function (t, e, n) {
    (function (e) {
        var i, r, o = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, s = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)a.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, a = {}.hasOwnProperty;
        r = n(5), null != ("undefined" != typeof e && null !== e ? e.ajaxPrefilter : void 0) && e.ajaxPrefilter(function (t, e, n) {
            if (t.multipartFormData)return "multipart-form-data"
        }), null != ("undefined" != typeof e && null !== e ? e.ajaxTransport : void 0) && e.ajaxTransport("multipart-form-data", function (t, n, i) {
            var r;
            return t.dataTypes.shift(), r = null, {
                send: function (n, i) {
                    var o, s, a, c, u, l, p, h, d, f, m, y, g, _, v, w, b, x, C, k;
                    _ = t.model, l = (null != _ ? _.files : void 0) || {}, k = new XMLHttpRequest, r = function (t, e) {
                        var n, o, s, a, c, u, l, p, h;
                        try {
                            if (r && (e || 4 === k.readyState))if (e)4 !== k.readyState && k.abort(); else {
                                l = k.status, c = k.getAllResponseHeaders(), u = {}, h = k.responseXML, h && h.documentElement && (u.xml = h);
                                try {
                                    u.text = k.responseText
                                } catch (o) {
                                    n = o, "undefined" != typeof console && null !== console
                                }
                                try {
                                    p = k.statusText
                                } catch (s) {
                                    n = s, "undefined" != typeof console && null !== console, p = ""
                                }
                            }
                        } catch (a) {
                            n = a, "undefined" != typeof console && null !== console, e || i(-1, n)
                        }
                        if (u)return i(k.status, p, u, c)
                    }, k.onreadystatechange = r, v = (null != t ? t.events : void 0) || {};
                    for (o in v)h = v[o], k.addEventListener(o, h, !1);
                    w = (null != t ? t.uploadEvents : void 0) || {};
                    for (o in w)h = w[o], k.upload.addEventListener(o, h, !1);
                    k.open(t.type, t.url, !0), k.setRequestHeader("Accept", "application/json"), k.setRequestHeader("Authorization", "Basic " + window.Preloaded.authToken), p = new FormData;
                    for (c in l)for (u = l[c], d = 0, y = u.length; d < y; d++)for (s = u[d], b = s.files, f = 0, g = b.length; f < g; f++)a = b[f], p.append(c, a);
                    "string" == typeof t.data && (t.data = e.parseJSON(t.data)), x = t.data;
                    for (m in x)C = x[m], l[m] || p.append(m, C);
                    return k.send(p), k
                }, abort: function () {
                    if (r)return r(0, 1)
                }
            }
        }), i = function (t) {
            function n() {
                return this.sync = o(this.sync, this), this.setFileField = o(this.setFileField, this), n.__super__.constructor.apply(this, arguments)
            }

            return s(n, t), n.prototype.errors = {}, n.prototype.setFileField = function (t, e) {
                return this.files = this.files || {}, this.files[t] = e
            }, n.prototype.toJSON = function () {
                return r.extend(n.__super__.toJSON.call(this), {errors: this.errors})
            }, n.prototype.sync = function (t, i, o) {
                var s, a, c, u, l, p, h, d, f, m, y, g, _, v;
                if (o.model = this, this.files) {
                    if (null != this.maxSize) {
                        _ = !0, y = this.files;
                        for (u in y)for (l = y[u], p = 0, d = l.length; p < d; p++)for (a = l[p], g = a.files, h = 0, f = g.length; h < f; h++)c = g[h], c.size / 1024 > this.maxSize && (this.errors[u] = ["error_file_is_too_large_" + this.maxSize], _ = !1);
                        if (!_)return s = new e.Deferred, s.reject({
                            responseText: JSON.stringify(i.toJSON()),
                            status: 400
                        }), s
                    }
                    o.multipartFormData = !0, o.uploadEvents = {
                        progress: function (t) {
                            return function (e) {
                                return t.trigger("upload:progress", e)
                            }
                        }(this), load: function (t) {
                            return function (e) {
                                return t.trigger("upload:load", e)
                            }
                        }(this), error: function (t) {
                            return function (e) {
                                return t.trigger("upload:error", e)
                            }
                        }(this), abort: function (t) {
                            return function (e) {
                                return t.trigger("upload:abort", e)
                            }
                        }(this)
                    }, o.events = {
                        progress: function (t) {
                            return function (e) {
                                return t.trigger("progress", e)
                            }
                        }(this), load: function (t) {
                            return function (e) {
                                return t.trigger("load", e)
                            }
                        }(this), error: function (t) {
                            return function (e) {
                                return t.trigger("error", e)
                            }
                        }(this), abort: function (t) {
                            return function (e) {
                                return t.trigger("abort", e)
                            }
                        }(this)
                    }, m = r.clone(this.files)
                }
                return v = n.__super__.sync.apply(this, arguments), m && v.done(function (t) {
                    return function () {
                        var e;
                        if (2 === Math.floor(v.status / 100))for (e in m)l = m[e], e in t.files && l === t.files[e] && delete t.files[e]
                    }
                }(this)), v
            }, n
        }(n(3).Model), t.exports = i
    }).call(e, n(7))
}, function (t, e, n) {
    var i, r, o, s = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }, a = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e)c.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, c = {}.hasOwnProperty, u = [].slice;
    o = n(17), r = n(11), i = function (t) {
        function e() {
            return this.navigate = s(this.navigate, this), e.__super__.constructor.apply(this, arguments)
        }

        return a(e, t), e.prototype.inject = function (t) {
            var e;
            return e = r.reqres.request("app"), t ? e.get(t) : e
        }, e.prototype.navigate = function () {
            var t, n;
            return n = arguments[0], t = 2 <= arguments.length ? u.call(arguments, 1) : [], this.baseFragment ? n && 0 !== n.length ? e.__super__.navigate.apply(this, [this.baseFragment + "/" + n].concat(u.call(t))) : e.__super__.navigate.apply(this, ["" + this.baseFragment].concat(u.call(t))) : e.__super__.navigate.apply(this, [n].concat(u.call(t)))
        }, e
    }(o.AppRouter), t.exports = i
}, function (t, e, n) {
    var i, r, o, s, a = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e)c.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, c = {}.hasOwnProperty;
    i = n(3), s = n(17), r = n(11), o = function (t) {
        function e() {
            return e.__super__.constructor.apply(this, arguments)
        }

        return a(e, t), e.prototype.inject = function (t) {
            var e;
            return e = r.reqres.request("app"), t ? e.get(t) : e
        }, e
    }(s.Controller), t.exports = o
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)a.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, a = {}.hasOwnProperty;
        o = n(5), r = n(10), i = function (t) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }

            return s(n, t), n.prototype.req = function (t) {
                var n, i;
                return i = {
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    headers: {Accept: "application/json"}
                }, n = o.extend(i, t), n.data && (n.data = JSON.stringify(n.data)), e.ajax(n)
            }, n
        }(r), t.exports = i
    }).call(e, n(7))
}, function (t, e, n) {
    (function (e, i, r) {
        var o, s, a, c, u, l, p, h, d, f, m, y, g, _, v, w, b, x, C, k, S, j, T, R, A, P, M, O, E, V, I, D, N = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, F = [].slice;
        u = n(34), T = n(35), m = n(66), a = n(67), x = n(50), v = n(88), j = n(54), k = n(89), I = n(142), o = n(156), S = n(157), R = n(171), O = n(173), g = n(184), p = n(213), b = n(214), f = n(36), A = n(215), C = n(39), _ = n(216), s = n(217), V = n(219), h = n(48), D = n(57), d = n(220), w = n(221), l = n(224), P = n(225), y = n(41), M = n(51), c = n(3), E = function () {
            function t(t) {
                this.read = N(this.read, this), this.reset = N(this.reset, this), this.setCurrency = N(this.setCurrency, this), this.paymentRequired = N(this.paymentRequired, this), this._checkShipping = N(this._checkShipping, this), this._shippingShouldBeEnabled = N(this._shippingShouldBeEnabled, this), this.shippingEnabled = N(this.shippingEnabled, this), this.setCurrentUser = N(this.setCurrentUser, this), this.unsetCurrentUser = N(this.unsetCurrentUser, this), this.initialize = N(this.initialize, this), this.cartIsEmpty = N(this.cartIsEmpty, this), this["do"] = N(this["do"], this), this.execute = N(this.execute, this), this.unsubscribe = N(this.unsubscribe, this), this.subscribe = N(this.subscribe, this), this.start = N(this.start, this), this._startupApp = t, this.api.config = this.config
            }

            return t.prototype.i18n = new b, t.prototype.start = function () {
                return this._startPromise.promise
            }, t.prototype.baseUrl = function () {
                var t;
                return null != (t = e("script#snipcart").data("base-url")) ? t : "https://app.snipcart.com"
            }, t.prototype.container = {}, t.prototype.get = function (t) {
                return this.container[t]
            }, t.prototype.set = function (t, e) {
                return this.container[t] = e
            }, t.prototype.events = i.Bus.vent, t.prototype.bootstrappers = {
                backbone: new u,
                preloading: new T
            }, t.prototype.hasCustomFields = function () {
                return this.collections.customFields.size() > 0
            }, t.prototype.subscribe = function (t, e) {
                return this.events.on(t, e)
            }, t.prototype.unsubscribe = function (t) {
                return this.events.off(t)
            }, t.prototype.execute = function () {
                var t;
                return t = 1 <= arguments.length ? F.call(arguments, 0) : [], "registerLocale" === t[0] ? (this.i18n.register(t[1], t[2]), this.i18n.initialize()) : this._startupApp._queue.push(t)
            }, t.prototype.api = new P, t.prototype.config = {}, t.prototype["do"] = function () {
                var t;
                return t = 1 <= arguments.length ? F.call(arguments, 0) : [], this.execute.apply(this, t)
            }, t.prototype.cartIsEmpty = function () {
                return this.collections.plans.size() <= 0 && this.collections.items.size() <= 0
            }, t.prototype.initialize = function () {
                var t, n, f, b, P, E;
                if (i.Bus.reqres.setHandler("app", function (t) {
                        return function () {
                            return t
                        }
                    }(this)), this._startPromise = M.defer(), this._defaultConfiguration(), this.set("api", this.api), this.set("validators", i.Validators), this.set("config", this.config), this.set("vent", this.events), this.set("viewhelper", D), this.set("cartService", new h), this.set("logger", C), this.set("http", new i.HttpService), this.set("flash", new w), !this._startupApp.loadingLocale && null == this._initialized)return this._initialized = !0, r.extend(this, c.Events), this.collections = {
                    items: new x,
                    discounts: r.extend(new v, {app: this}),
                    customFields: r.extend(new y, {app: this}),
                    plans: new j
                }, this.set("collections", this.collections), this.listenTo(this.events, "order.created", this.orderCreated), this.listenTo(this.events, "account:paymentrequired", this.paymentRequired), this.listenTo(this.events, "user.loggedout", this.unsetCurrentUser), this.listenTo(this.collections.items, "add", this._checkShipping), this.listenTo(this.collections.items, "remove", this._checkShipping), this.listenTo(this.events, "set.currency", this.setCurrency), b = new d, b.listen(), this.set("context", b), (new u).bootstrap(this), E = null != (P = window.SNIPCART_VERSION) ? P : "2.0", E = E.split(".")[0] + "." + E.split(".")[1], t = this.baseUrl(), f = this.get("cartService"), e.ajaxSetup({
                    beforeSend: function (n, i) {
                        var o, s;
                        if (i.url && i.url.indexOf("/api/jsonp/") === -1 && r.startsWith(i.url, "/api"))return o = null != (s = e("html").attr("lang")) ? s : "en", i.url = "" + t + i.url, n.setRequestHeader("X-Snipcart-PublicApiKey", e("#snipcart").data("api-key")), n.setRequestHeader("Api-Version", E), n.setRequestHeader("X-Snipcart-SessionToken", f.getSessionToken()), n.setRequestHeader("X-Snipcart-Lang", o), n.setRequestHeader("Content-Type", "application/json"), n.setRequestHeader("Accept", "application/json")
                    }
                }), this.appView = new a({app: this}), n = new l, n.setElement(e("body")), n.tagName = "body", this.set("mainview", this.appView), (new T).bootstrap(this, function (t) {
                    return function () {
                        return (new m).bootstrap(t, function () {
                            var n, i;
                            return t._shippingEnabled = t.shippingEnabled(), t.execute = A(t._startupApp, t.i18n), t.routers = {
                                order: r.extend(new k, {app: t}),
                                user: r.extend(new I, {app: t}),
                                account: r.extend(new o, {app: t}),
                                payment: r.extend(new S, {app: t}),
                                profile: new R,
                                shipping: new O,
                                customer: new g,
                                cart: new p
                            }, t.set("routers", t.routers), t.appView.render(), t.appView.app = t, t.currentUser && t.events.trigger("user.logged", t.currentUser), e("body").on("keyup", function (e) {
                                var n;
                                if (n = e.keyCode ? e.keyCode : e.which, 27 === n)return t.appView.close()
                            }), t.events.trigger("before.start", {order: n}), c.history.start(), (new s).listen(), (new _).listen(), (new V).listen(), n = null != (i = t.get("cart")) ? i.toJSON() : void 0, t.ready = !0, t.events.trigger("cart.ready", {order: n}), t.events.trigger("ready", n), t._readyCallback && t._readyCallback(n), t._startPromise.resolve(t), t.trigger("loaded")
                        })
                    }
                }(this))
            }, t.prototype._defaultConfiguration = function () {
                return this.config.credit_cards = [{type: "mastercard", display: "Mastercard"}, {
                    type: "visa",
                    display: "Visa"
                }, {type: "amex", display: "American Express"}]
            }, t.prototype.unsetCurrentUser = function () {
                return this.set("user", null), this.currentUser = null, this.reset()
            }, t.prototype.setCurrentUser = function (t, e) {
                var n;
                if (e = r.extend(e, {}), t.get("sessionToken") && (n = new f, n.saveCookie("snipcart_auth_cookie", t.get("sessionToken"), 240)), this.currentUser = t, this.events.trigger("user.logged", t), this.set("user", t), null == e || !e.silent)return null != (null != e ? e.redirectTo : void 0) ? c.history.loadUrl(e.redirectTo) : c.history.navigate("checkout", !0)
            }, t.prototype.shippingEnabled = function () {
                return this._shippingShouldBeEnabled() && this.settings.shippingEnabled
            }, t.prototype._shippingShouldBeEnabled = function () {
                return this.collections.items.some(function (t) {
                    return t.get("shippable")
                })
            }, t.prototype._checkShipping = function () {
                if (this.ready)return this._shippingEnabled !== this.shippingEnabled() ? (this._shippingEnabled = this.shippingEnabled(), this.events.trigger("shippingenabled:change", this.shippingEnabled())) : void 0
            }, t.prototype.paymentRequired = function () {
                return this.blocked = !0
            }, t.prototype.setCurrency = function (t) {
                var e;
                if (e = this.get("currency"), this.set("currency", t), e !== t && null !== e)return this.get("vent").trigger("currency.changed", t)
            }, t.prototype.reset = function () {
                var t;
                return t = new f, t.removeCookie("snipcart_order_token"), this.set("cart", null), this.events.trigger("cart.unset"), this.resetting = !0, this.collections.items.set([]), this.collections.discounts.set([]), this.collections.plans.set([]), this.resetting = !1, this.events.trigger("reset")
            }, t.prototype.bindEvent = function (t, e) {
                switch (t) {
                    case"app.ready":
                        return e();
                    case"order.completed":
                        return this.listenTo(this.events, "order.completed", e);
                    case"cart.opened":
                        return this.listenTo(this.events, "cart.opened", e);
                    case"cart.closed":
                        return this.listenTo(this.events, "cart.closed", e);
                    case"cart.closing":
                        return this.listenTo(this.events, "cart.closing", e);
                    case"item.added":
                        return this.listenTo(this.events, "item.added", e);
                    case"plan.added":
                        return this.listenTo(this.events, "plan.added", e);
                    case"item.adding":
                        return this.listenTo(this.events, "item.adding", e);
                    case"itme.updated":
                        return this.listenTo(this.events, "item.updated", e);
                    case"item.removed":
                        return this.listenTo(this.events, "item.removed", e);
                    case"plan.removed":
                        return this.listenTo(this.events, "plan.removed", e);
                    case"cart.ready":
                        return this.listenTo(this.events, "cart.ready", e);
                    case"currency.changed":
                        return this.listenTo(this.events, "currency.changed", e);
                    case"page.change":
                        return this.listenTo(this.events, "page.change", e);
                    case"authentication.success":
                        return this.listenTo(this.events, "authentication.success", e);
                    case"authentication.fail":
                        return this.listenTo(this.events, "authentication.fail", e);
                    case"shippingmethod.changed":
                        return this.listenTo(this.events, "shippingmethod.changed", e);
                    case"shippingaddress.changed":
                        return this.listenTo(this.events, "shippingaddress.changed", e);
                    case"billingaddress.changed":
                        return this.listenTo(this.events, "billingaddress.changed", e);
                    case"cart.resized":
                        return this.listenTo(this.events, "cart.resized", e);
                    case"registration.success":
                        return this.listenTo(this.events, "registration.success", e);
                    default:
                        return C.log(t + " is not a recognized event.")
                }
            }, t.prototype.unbindEvent = function (t) {
                switch (t) {
                    case"order.completed":
                        return this.stopListening(this.events, "order.completed");
                    case"cart.opened":
                        return this.stopListening(this.events, "cart.opened");
                    case"cart.closed":
                        return this.stopListening(this.events, "cart.closed");
                    case"item.added":
                        return this.stopListening(this.events, "item.added");
                    case"item.adding":
                        return this.stopListening(this.events, "item.adding");
                    default:
                        return C.log(t + " is not a recognized event.")
                }
            }, t.prototype.read = function (t) {
                switch (t) {
                    case"order":
                        return this.order.toJSON();
                    default:
                        return C.log(t + " is not a valid key.")
                }
            }, t
        }(), t.exports = E
    }).call(e, n(7), n(2), n(5))
}, function (t, e, n) {
    var i, r, o, s = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    };
    o = n(9), i = n(3), r = function () {
        function t() {
            this.bootstrap = s(this.bootstrap, this)
        }

        return t.prototype.bootstrap = function (t) {
            return i.history.getHash = function (t) {
                var e, n;
                return e = (null != t ? t : this).location.href.match(/#(.*)!\/(.*)$/), e && null != (n = e[2]) ? n : ""
            }, i.history._updateHash = function (t, e, n) {
                var i, r;
                if (n ? (r = t.href.replace(/(javascript:|#).*$/, ""), t.replace(r + "#" + e)) : t.hash ? (i = t.hash.replace("#", ""), i = i.replace(/!(.*)/, ""), i = i + "!/" + e, t.hash = "#" + i) : t.hash = "#!/" + e, window._gaq)return window._gaq.push(["_trackPageview", t.pathname + t.search + t.hash])
            }, o.KeyExtractors.registerDefault(function (t) {
                return t.data("name") ? t.data("name") : t.prop("name")
            })
        }, t
    }(), t.exports = r
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s, a, c, u, l, p, h = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        };
        o = n(36), c = n(39), i = n(40), a = n(44), u = n(45), p = n(46), s = n(41), r = n(48), l = function () {
            function t() {
                this.userLogged = h(this.userLogged, this), this.loadPaymentGatewayIfNeeded = h(this.loadPaymentGatewayIfNeeded, this), this.bootstrap = h(this.bootstrap, this)
            }

            return t.prototype.bootstrap = function (t, n) {
                var i, s, a, u;
                return this.app = t, t.events.on("user.logged", this.userLogged), i = new r, s = t.get("http"), a = i.getToken() ? "/api/sessions/" + i.getToken() : "/api/sessions", u = s.req({
                    url: a,
                    type: "GET"
                }), u.done(function (r) {
                    return function (s) {
                        var a, u, l, h, d;
                        if (t.settings = {}, t.set("preloaded", s), e.Bus.reqres.setHandler("preloaded", function () {
                                return s
                            }), t.settings = s.settings, t.set("currency", null != (l = Snipcart.currency) ? l : t.settings.currency), t.set("settings", s.settings), r.app.set("i18n", function (e) {
                                var n, i;
                                return n = t.settings.i18n, null != (i = n[null != e ? e : r.app.get("currency").toLowerCase()]) ? i : n
                            }), r.loadPaymentGatewayIfNeeded(), s.cart ? i.injectCart(s.cart) : (a = new o, a.saveCookie("snipcart_order_token", null, 0)), s.user && (r.app.currentUser = new p(s.user), r.app.set("user", r.app.currentUser)), 400 === s.statusCode) {
                            h = s.errors;
                            for (u in h)d = h[u], c.log(d)
                        }
                        return n(r)
                    }
                }(this))
            }, t.prototype.loadPaymentGatewayIfNeeded = function () {
                var t;
                if ("Stripe" === this.app.settings.paymentGateway && (t = document.createElement("script"), t.type = "text/javascript", t.src = "https://js.stripe.com/v2/", document.head.appendChild(t)), "Paymill" === this.app.settings.paymentGateway && (window.PAYMILL_PUBLIC_KEY = this.app.settings.gateway.publicApiKey, t = document.createElement("script"), t.type = "text/javascript", t.src = "https://bridge.paymill.com/", document.head.appendChild(t)), "Pin" === this.app.settings.paymentGateway)return t = document.createElement("script"), t.type = "text/javascript", t.src = "https://cdn.pin.net.au/pin.v2.js", document.head.appendChild(t)
            }, t.prototype.userLogged = function (t) {
            }, t
        }(), t.exports = l
    }).call(e, n(2))
}, function (t, e, n) {
    var i, r, o, s = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    };
    r = n(37), o = n(38), i = function () {
        function t() {
            this.removeCookie = s(this.removeCookie, this), this.getCookieContent = s(this.getCookieContent, this), this.saveCookie = s(this.saveCookie, this)
        }

        return t.prototype.saveCookie = function (t, e, n) {
            var i;
            return i = o().add(n, "hours").toDate(), r.set(t, e, {expires: i})
        }, t.prototype.getCookieContent = function (t) {
            return r.get(t)
        }, t.prototype.removeCookie = function (t) {
            return r.expire(t)
        }, t
    }(), t.exports = i
}, function (t, e, n) {
    var i;
    !function (r, o) {
        "use strict";
        var s = function (t) {
            if ("object" != typeof t.document)throw new Error("Cookies.js requires a `window` with a `document` object");
            var e = function (t, n, i) {
                return 1 === arguments.length ? e.get(t) : e.set(t, n, i)
            };
            return e._document = t.document, e._cacheKeyPrefix = "cookey.", e._maxExpireDate = new Date("Fri, 31 Dec 9999 23:59:59 UTC"), e.defaults = {
                path: "/",
                secure: !1
            }, e.get = function (t) {
                e._cachedDocumentCookie !== e._document.cookie && e._renewCache();
                var n = e._cache[e._cacheKeyPrefix + t];
                return n === o ? o : decodeURIComponent(n)
            }, e.set = function (t, n, i) {
                return i = e._getExtendedOptions(i), i.expires = e._getExpiresDate(n === o ? -1 : i.expires), e._document.cookie = e._generateCookieString(t, n, i), e
            }, e.expire = function (t, n) {
                return e.set(t, o, n)
            }, e._getExtendedOptions = function (t) {
                return {
                    path: t && t.path || e.defaults.path,
                    domain: t && t.domain || e.defaults.domain,
                    expires: t && t.expires || e.defaults.expires,
                    secure: t && t.secure !== o ? t.secure : e.defaults.secure
                }
            }, e._isValidDate = function (t) {
                return "[object Date]" === Object.prototype.toString.call(t) && !isNaN(t.getTime())
            }, e._getExpiresDate = function (t, n) {
                if (n = n || new Date, "number" == typeof t ? t = t === 1 / 0 ? e._maxExpireDate : new Date(n.getTime() + 1e3 * t) : "string" == typeof t && (t = new Date(t)), t && !e._isValidDate(t))throw new Error("`expires` parameter cannot be converted to a valid Date instance");
                return t
            }, e._generateCookieString = function (t, e, n) {
                t = t.replace(/[^#$&+\^`|]/g, encodeURIComponent), t = t.replace(/\(/g, "%28").replace(/\)/g, "%29"), e = (e + "").replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent), n = n || {};
                var i = t + "=" + e;
                return i += n.path ? ";path=" + n.path : "", i += n.domain ? ";domain=" + n.domain : "", i += n.expires ? ";expires=" + n.expires.toUTCString() : "", i += n.secure ? ";secure" : ""
            }, e._getCacheFromString = function (t) {
                for (var n = {}, i = t ? t.split("; ") : [], r = 0; r < i.length; r++) {
                    var s = e._getKeyValuePairFromCookieString(i[r]);
                    n[e._cacheKeyPrefix + s.key] === o && (n[e._cacheKeyPrefix + s.key] = s.value)
                }
                return n
            }, e._getKeyValuePairFromCookieString = function (t) {
                var e = t.indexOf("=");
                e = e < 0 ? t.length : e;
                var n, i = t.substr(0, e);
                try {
                    n = decodeURIComponent(i)
                } catch (r) {
                    console && "function" == typeof console.error
                }
                return {key: n, value: t.substr(e + 1)}
            }, e._renewCache = function () {
                e._cache = e._getCacheFromString(e._document.cookie), e._cachedDocumentCookie = e._document.cookie
            }, e._areEnabled = function () {
                var t = "cookies.js", n = "1" === e.set(t, 1).get(t);
                return e.expire(t), n
            }, e.enabled = e._areEnabled(), e
        }, a = "object" == typeof r.document ? s(r) : s;
        i = function () {
            return a
        }.call(e, n, e, t), !(i !== o && (t.exports = i))
    }("undefined" == typeof window ? this : window)
}, function (t, e) {
    !function (n, i) {
        "object" == typeof e && "undefined" != typeof t ? t.exports = i() : "function" == typeof define && define.amd ? define(i) : n.moment = i()
    }(this, function () {
        "use strict";
        function e() {
            return fi.apply(null, arguments)
        }

        function n(t) {
            fi = t
        }

        function i(t) {
            return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
        }

        function r(t) {
            return "[object Object]" === Object.prototype.toString.call(t)
        }

        function o(t) {
            var e;
            for (e in t)return !1;
            return !0
        }

        function s(t) {
            return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
        }

        function a(t, e) {
            var n, i = [];
            for (n = 0; n < t.length; ++n)i.push(e(t[n], n));
            return i
        }

        function c(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }

        function u(t, e) {
            for (var n in e)c(e, n) && (t[n] = e[n]);
            return c(e, "toString") && (t.toString = e.toString), c(e, "valueOf") && (t.valueOf = e.valueOf), t
        }

        function l(t, e, n, i) {
            return ge(t, e, n, i, !0).utc()
        }

        function p() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                meridiem: null
            }
        }

        function h(t) {
            return null == t._pf && (t._pf = p()), t._pf
        }

        function d(t) {
            if (null == t._isValid) {
                var e = h(t), n = mi.call(e.parsedDateParts, function (t) {
                    return null != t
                });
                t._isValid = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n), t._strict && (t._isValid = t._isValid && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour)
            }
            return t._isValid
        }

        function f(t) {
            var e = l(NaN);
            return null != t ? u(h(e), t) : h(e).userInvalidated = !0, e
        }

        function m(t) {
            return void 0 === t
        }

        function y(t, e) {
            var n, i, r;
            if (m(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), m(e._i) || (t._i = e._i), m(e._f) || (t._f = e._f), m(e._l) || (t._l = e._l), m(e._strict) || (t._strict = e._strict), m(e._tzm) || (t._tzm = e._tzm), m(e._isUTC) || (t._isUTC = e._isUTC), m(e._offset) || (t._offset = e._offset), m(e._pf) || (t._pf = h(e)), m(e._locale) || (t._locale = e._locale), yi.length > 0)for (n in yi)i = yi[n], r = e[i], m(r) || (t[i] = r);
            return t
        }

        function g(t) {
            y(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), gi === !1 && (gi = !0, e.updateOffset(this), gi = !1)
        }

        function _(t) {
            return t instanceof g || null != t && null != t._isAMomentObject
        }

        function v(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
        }

        function w(t) {
            var e = +t, n = 0;
            return 0 !== e && isFinite(e) && (n = v(e)), n
        }

        function b(t, e, n) {
            var i, r = Math.min(t.length, e.length), o = Math.abs(t.length - e.length), s = 0;
            for (i = 0; i < r; i++)(n && t[i] !== e[i] || !n && w(t[i]) !== w(e[i])) && s++;
            return s + o
        }

        function x(t) {
            e.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn
        }

        function C(t, n) {
            var i = !0;
            return u(function () {
                return null != e.deprecationHandler && e.deprecationHandler(null, t), i && (x(t + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), i = !1), n.apply(this, arguments)
            }, n)
        }

        function k(t, n) {
            null != e.deprecationHandler && e.deprecationHandler(t, n), _i[t] || (x(n), _i[t] = !0)
        }

        function S(t) {
            return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
        }

        function j(t) {
            var e, n;
            for (n in t)e = t[n], S(e) ? this[n] = e : this["_" + n] = e;
            this._config = t, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
        }

        function T(t, e) {
            var n, i = u({}, t);
            for (n in e)c(e, n) && (r(t[n]) && r(e[n]) ? (i[n] = {}, u(i[n], t[n]), u(i[n], e[n])) : null != e[n] ? i[n] = e[n] : delete i[n]);
            for (n in t)c(t, n) && !c(e, n) && r(t[n]) && (i[n] = u({}, i[n]));
            return i
        }

        function R(t) {
            null != t && this.set(t)
        }

        function A(t, e, n) {
            var i = this._calendar[t] || this._calendar.sameElse;
            return S(i) ? i.call(e, n) : i
        }

        function P(t) {
            var e = this._longDateFormat[t], n = this._longDateFormat[t.toUpperCase()];
            return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function (t) {
                return t.slice(1)
            }), this._longDateFormat[t])
        }

        function M() {
            return this._invalidDate
        }

        function O(t) {
            return this._ordinal.replace("%d", t)
        }

        function E(t, e, n, i) {
            var r = this._relativeTime[n];
            return S(r) ? r(t, e, n, i) : r.replace(/%d/i, t)
        }

        function V(t, e) {
            var n = this._relativeTime[t > 0 ? "future" : "past"];
            return S(n) ? n(e) : n.replace(/%s/i, e)
        }

        function I(t, e) {
            var n = t.toLowerCase();
            Ti[n] = Ti[n + "s"] = Ti[e] = t
        }

        function D(t) {
            return "string" == typeof t ? Ti[t] || Ti[t.toLowerCase()] : void 0
        }

        function N(t) {
            var e, n, i = {};
            for (n in t)c(t, n) && (e = D(n), e && (i[e] = t[n]));
            return i
        }

        function F(t, e) {
            Ri[t] = e
        }

        function $(t) {
            var e = [];
            for (var n in t)e.push({unit: n, priority: Ri[n]});
            return e.sort(function (t, e) {
                return t.priority - e.priority
            }), e
        }

        function z(t, n) {
            return function (i) {
                return null != i ? (L(this, t, i), e.updateOffset(this, n), this) : q(this, t)
            }
        }

        function q(t, e) {
            return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
        }

        function L(t, e, n) {
            t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
        }

        function U(t) {
            return t = D(t), S(this[t]) ? this[t]() : this
        }

        function B(t, e) {
            if ("object" == typeof t) {
                t = N(t);
                for (var n = $(t), i = 0; i < n.length; i++)this[n[i].unit](t[n[i].unit])
            } else if (t = D(t), S(this[t]))return this[t](e);
            return this
        }

        function Y(t, e, n) {
            var i = "" + Math.abs(t), r = e - i.length, o = t >= 0;
            return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
        }

        function H(t, e, n, i) {
            var r = i;
            "string" == typeof i && (r = function () {
                return this[i]()
            }), t && (Oi[t] = r), e && (Oi[e[0]] = function () {
                return Y(r.apply(this, arguments), e[1], e[2])
            }), n && (Oi[n] = function () {
                return this.localeData().ordinal(r.apply(this, arguments), t)
            })
        }

        function W(t) {
            return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
        }

        function J(t) {
            var e, n, i = t.match(Ai);
            for (e = 0, n = i.length; e < n; e++)Oi[i[e]] ? i[e] = Oi[i[e]] : i[e] = W(i[e]);
            return function (e) {
                var r, o = "";
                for (r = 0; r < n; r++)o += i[r] instanceof Function ? i[r].call(e, t) : i[r];
                return o
            }
        }

        function G(t, e) {
            return t.isValid() ? (e = Q(e, t.localeData()), Mi[e] = Mi[e] || J(e), Mi[e](t)) : t.localeData().invalidDate()
        }

        function Q(t, e) {
            function n(t) {
                return e.longDateFormat(t) || t
            }

            var i = 5;
            for (Pi.lastIndex = 0; i >= 0 && Pi.test(t);)t = t.replace(Pi, n), Pi.lastIndex = 0, i -= 1;
            return t
        }

        function K(t, e, n) {
            Qi[t] = S(e) ? e : function (t, i) {
                return t && n ? n : e
            }
        }

        function Z(t, e) {
            return c(Qi, t) ? Qi[t](e._strict, e._locale) : new RegExp(X(t))
        }

        function X(t) {
            return tt(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, n, i, r) {
                return e || n || i || r
            }))
        }

        function tt(t) {
            return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function et(t, e) {
            var n, i = e;
            for ("string" == typeof t && (t = [t]), "number" == typeof e && (i = function (t, n) {
                n[e] = w(t)
            }), n = 0; n < t.length; n++)Ki[t[n]] = i
        }

        function nt(t, e) {
            et(t, function (t, n, i, r) {
                i._w = i._w || {}, e(t, i._w, i, r)
            })
        }

        function it(t, e, n) {
            null != e && c(Ki, t) && Ki[t](e, n._a, n, t)
        }

        function rt(t, e) {
            return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
        }

        function ot(t, e) {
            return i(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || ar).test(e) ? "format" : "standalone"][t.month()]
        }

        function st(t, e) {
            return i(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[ar.test(e) ? "format" : "standalone"][t.month()]
        }

        function at(t, e, n) {
            var i, r, o, s = t.toLocaleLowerCase();
            if (!this._monthsParse)for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i)o = l([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase();
            return n ? "MMM" === e ? (r = wi.call(this._shortMonthsParse, s), r !== -1 ? r : null) : (r = wi.call(this._longMonthsParse, s), r !== -1 ? r : null) : "MMM" === e ? (r = wi.call(this._shortMonthsParse, s), r !== -1 ? r : (r = wi.call(this._longMonthsParse, s), r !== -1 ? r : null)) : (r = wi.call(this._longMonthsParse, s), r !== -1 ? r : (r = wi.call(this._shortMonthsParse, s), r !== -1 ? r : null))
        }

        function ct(t, e, n) {
            var i, r, o;
            if (this._monthsParseExact)return at.call(this, t, e, n);
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
                if (r = l([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t))return i;
                if (n && "MMM" === e && this._shortMonthsParse[i].test(t))return i;
                if (!n && this._monthsParse[i].test(t))return i
            }
        }

        function ut(t, e) {
            var n;
            if (!t.isValid())return t;
            if ("string" == typeof e)if (/^\d+$/.test(e))e = w(e); else if (e = t.localeData().monthsParse(e), "number" != typeof e)return t;
            return n = Math.min(t.date(), rt(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
        }

        function lt(t) {
            return null != t ? (ut(this, t), e.updateOffset(this, !0), this) : q(this, "Month")
        }

        function pt() {
            return rt(this.year(), this.month())
        }

        function ht(t) {
            return this._monthsParseExact ? (c(this, "_monthsRegex") || ft.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = lr), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
        }

        function dt(t) {
            return this._monthsParseExact ? (c(this, "_monthsRegex") || ft.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (c(this, "_monthsRegex") || (this._monthsRegex = pr), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
        }

        function ft() {
            function t(t, e) {
                return e.length - t.length
            }

            var e, n, i = [], r = [], o = [];
            for (e = 0; e < 12; e++)n = l([2e3, e]), i.push(this.monthsShort(n, "")), r.push(this.months(n, "")), o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
            for (i.sort(t), r.sort(t), o.sort(t), e = 0; e < 12; e++)i[e] = tt(i[e]), r[e] = tt(r[e]);
            for (e = 0; e < 24; e++)o[e] = tt(o[e]);
            this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
        }

        function mt(t) {
            return yt(t) ? 366 : 365
        }

        function yt(t) {
            return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
        }

        function gt() {
            return yt(this.year())
        }

        function _t(t, e, n, i, r, o, s) {
            var a = new Date(t, e, n, i, r, o, s);
            return t < 100 && t >= 0 && isFinite(a.getFullYear()) && a.setFullYear(t), a
        }

        function vt(t) {
            var e = new Date(Date.UTC.apply(null, arguments));
            return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
        }

        function wt(t, e, n) {
            var i = 7 + e - n, r = (7 + vt(t, 0, i).getUTCDay() - e) % 7;
            return -r + i - 1
        }

        function bt(t, e, n, i, r) {
            var o, s, a = (7 + n - i) % 7, c = wt(t, i, r), u = 1 + 7 * (e - 1) + a + c;
            return u <= 0 ? (o = t - 1, s = mt(o) + u) : u > mt(t) ? (o = t + 1, s = u - mt(t)) : (o = t, s = u), {
                year: o,
                dayOfYear: s
            }
        }

        function xt(t, e, n) {
            var i, r, o = wt(t.year(), e, n), s = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
            return s < 1 ? (r = t.year() - 1, i = s + Ct(r, e, n)) : s > Ct(t.year(), e, n) ? (i = s - Ct(t.year(), e, n), r = t.year() + 1) : (r = t.year(), i = s), {
                week: i,
                year: r
            }
        }

        function Ct(t, e, n) {
            var i = wt(t, e, n), r = wt(t + 1, e, n);
            return (mt(t) - i + r) / 7
        }

        function kt(t) {
            return xt(t, this._week.dow, this._week.doy).week
        }

        function St() {
            return this._week.dow
        }

        function jt() {
            return this._week.doy
        }

        function Tt(t) {
            var e = this.localeData().week(this);
            return null == t ? e : this.add(7 * (t - e), "d")
        }

        function Rt(t) {
            var e = xt(this, 1, 4).week;
            return null == t ? e : this.add(7 * (t - e), "d");
        }

        function At(t, e) {
            return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" == typeof t ? t : null) : parseInt(t, 10)
        }

        function Pt(t, e) {
            return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
        }

        function Mt(t, e) {
            return i(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()]
        }

        function Ot(t) {
            return this._weekdaysShort[t.day()]
        }

        function Et(t) {
            return this._weekdaysMin[t.day()]
        }

        function Vt(t, e, n) {
            var i, r, o, s = t.toLocaleLowerCase();
            if (!this._weekdaysParse)for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i)o = l([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase();
            return n ? "dddd" === e ? (r = wi.call(this._weekdaysParse, s), r !== -1 ? r : null) : "ddd" === e ? (r = wi.call(this._shortWeekdaysParse, s), r !== -1 ? r : null) : (r = wi.call(this._minWeekdaysParse, s), r !== -1 ? r : null) : "dddd" === e ? (r = wi.call(this._weekdaysParse, s), r !== -1 ? r : (r = wi.call(this._shortWeekdaysParse, s), r !== -1 ? r : (r = wi.call(this._minWeekdaysParse, s), r !== -1 ? r : null))) : "ddd" === e ? (r = wi.call(this._shortWeekdaysParse, s), r !== -1 ? r : (r = wi.call(this._weekdaysParse, s), r !== -1 ? r : (r = wi.call(this._minWeekdaysParse, s), r !== -1 ? r : null))) : (r = wi.call(this._minWeekdaysParse, s), r !== -1 ? r : (r = wi.call(this._weekdaysParse, s), r !== -1 ? r : (r = wi.call(this._shortWeekdaysParse, s), r !== -1 ? r : null)))
        }

        function It(t, e, n) {
            var i, r, o;
            if (this._weekdaysParseExact)return Vt.call(this, t, e, n);
            for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
                if (r = l([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (o = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t))return i;
                if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t))return i;
                if (n && "dd" === e && this._minWeekdaysParse[i].test(t))return i;
                if (!n && this._weekdaysParse[i].test(t))return i
            }
        }

        function Dt(t) {
            if (!this.isValid())return null != t ? this : NaN;
            var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != t ? (t = At(t, this.localeData()), this.add(t - e, "d")) : e
        }

        function Nt(t) {
            if (!this.isValid())return null != t ? this : NaN;
            var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == t ? e : this.add(t - e, "d")
        }

        function Ft(t) {
            if (!this.isValid())return null != t ? this : NaN;
            if (null != t) {
                var e = Pt(t, this.localeData());
                return this.day(this.day() % 7 ? e : e - 7)
            }
            return this.day() || 7
        }

        function $t(t) {
            return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Lt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = gr), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
        }

        function zt(t) {
            return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Lt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = _r), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        }

        function qt(t) {
            return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Lt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = vr), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        }

        function Lt() {
            function t(t, e) {
                return e.length - t.length
            }

            var e, n, i, r, o, s = [], a = [], c = [], u = [];
            for (e = 0; e < 7; e++)n = l([2e3, 1]).day(e), i = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), o = this.weekdays(n, ""), s.push(i), a.push(r), c.push(o), u.push(i), u.push(r), u.push(o);
            for (s.sort(t), a.sort(t), c.sort(t), u.sort(t), e = 0; e < 7; e++)a[e] = tt(a[e]), c[e] = tt(c[e]), u[e] = tt(u[e]);
            this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
        }

        function Ut() {
            return this.hours() % 12 || 12
        }

        function Bt() {
            return this.hours() || 24
        }

        function Yt(t, e) {
            H(t, 0, 0, function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), e)
            })
        }

        function Ht(t, e) {
            return e._meridiemParse
        }

        function Wt(t) {
            return "p" === (t + "").toLowerCase().charAt(0)
        }

        function Jt(t, e, n) {
            return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        }

        function Gt(t) {
            return t ? t.toLowerCase().replace("_", "-") : t
        }

        function Qt(t) {
            for (var e, n, i, r, o = 0; o < t.length;) {
                for (r = Gt(t[o]).split("-"), e = r.length, n = Gt(t[o + 1]), n = n ? n.split("-") : null; e > 0;) {
                    if (i = Kt(r.slice(0, e).join("-")))return i;
                    if (n && n.length >= e && b(r, n, !0) >= e - 1)break;
                    e--
                }
                o++
            }
            return null
        }

        function Kt(e) {
            var n = null;
            if (!kr[e] && "undefined" != typeof t && t && t.exports)try {
                n = wr._abbr, require("./locale/" + e), Zt(n)
            } catch (i) {
            }
            return kr[e]
        }

        function Zt(t, e) {
            var n;
            return t && (n = m(e) ? ee(t) : Xt(t, e), n && (wr = n)), wr._abbr
        }

        function Xt(t, e) {
            if (null !== e) {
                var n = Cr;
                return e.abbr = t, null != kr[t] ? (k("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = kr[t]._config) : null != e.parentLocale && (null != kr[e.parentLocale] ? n = kr[e.parentLocale]._config : k("parentLocaleUndefined", "specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")), kr[t] = new R(T(n, e)), Zt(t), kr[t]
            }
            return delete kr[t], null
        }

        function te(t, e) {
            if (null != e) {
                var n, i = Cr;
                null != kr[t] && (i = kr[t]._config), e = T(i, e), n = new R(e), n.parentLocale = kr[t], kr[t] = n, Zt(t)
            } else null != kr[t] && (null != kr[t].parentLocale ? kr[t] = kr[t].parentLocale : null != kr[t] && delete kr[t]);
            return kr[t]
        }

        function ee(t) {
            var e;
            if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t)return wr;
            if (!i(t)) {
                if (e = Kt(t))return e;
                t = [t]
            }
            return Qt(t)
        }

        function ne() {
            return vi(kr)
        }

        function ie(t) {
            var e, n = t._a;
            return n && h(t).overflow === -2 && (e = n[Xi] < 0 || n[Xi] > 11 ? Xi : n[tr] < 1 || n[tr] > rt(n[Zi], n[Xi]) ? tr : n[er] < 0 || n[er] > 24 || 24 === n[er] && (0 !== n[nr] || 0 !== n[ir] || 0 !== n[rr]) ? er : n[nr] < 0 || n[nr] > 59 ? nr : n[ir] < 0 || n[ir] > 59 ? ir : n[rr] < 0 || n[rr] > 999 ? rr : -1, h(t)._overflowDayOfYear && (e < Zi || e > tr) && (e = tr), h(t)._overflowWeeks && e === -1 && (e = or), h(t)._overflowWeekday && e === -1 && (e = sr), h(t).overflow = e), t
        }

        function re(t) {
            var e, n, i, r, o, s, a = t._i, c = Sr.exec(a) || jr.exec(a);
            if (c) {
                for (h(t).iso = !0, e = 0, n = Rr.length; e < n; e++)if (Rr[e][1].exec(c[1])) {
                    r = Rr[e][0], i = Rr[e][2] !== !1;
                    break
                }
                if (null == r)return void(t._isValid = !1);
                if (c[3]) {
                    for (e = 0, n = Ar.length; e < n; e++)if (Ar[e][1].exec(c[3])) {
                        o = (c[2] || " ") + Ar[e][0];
                        break
                    }
                    if (null == o)return void(t._isValid = !1)
                }
                if (!i && null != o)return void(t._isValid = !1);
                if (c[4]) {
                    if (!Tr.exec(c[4]))return void(t._isValid = !1);
                    s = "Z"
                }
                t._f = r + (o || "") + (s || ""), le(t)
            } else t._isValid = !1
        }

        function oe(t) {
            var n = Pr.exec(t._i);
            return null !== n ? void(t._d = new Date((+n[1]))) : (re(t), void(t._isValid === !1 && (delete t._isValid, e.createFromInputFallback(t))))
        }

        function se(t, e, n) {
            return null != t ? t : null != e ? e : n
        }

        function ae(t) {
            var n = new Date(e.now());
            return t._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
        }

        function ce(t) {
            var e, n, i, r, o = [];
            if (!t._d) {
                for (i = ae(t), t._w && null == t._a[tr] && null == t._a[Xi] && ue(t), t._dayOfYear && (r = se(t._a[Zi], i[Zi]), t._dayOfYear > mt(r) && (h(t)._overflowDayOfYear = !0), n = vt(r, 0, t._dayOfYear), t._a[Xi] = n.getUTCMonth(), t._a[tr] = n.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e)t._a[e] = o[e] = i[e];
                for (; e < 7; e++)t._a[e] = o[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                24 === t._a[er] && 0 === t._a[nr] && 0 === t._a[ir] && 0 === t._a[rr] && (t._nextDay = !0, t._a[er] = 0), t._d = (t._useUTC ? vt : _t).apply(null, o), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[er] = 24)
            }
        }

        function ue(t) {
            var e, n, i, r, o, s, a, c;
            e = t._w, null != e.GG || null != e.W || null != e.E ? (o = 1, s = 4, n = se(e.GG, t._a[Zi], xt(_e(), 1, 4).year), i = se(e.W, 1), r = se(e.E, 1), (r < 1 || r > 7) && (c = !0)) : (o = t._locale._week.dow, s = t._locale._week.doy, n = se(e.gg, t._a[Zi], xt(_e(), o, s).year), i = se(e.w, 1), null != e.d ? (r = e.d, (r < 0 || r > 6) && (c = !0)) : null != e.e ? (r = e.e + o, (e.e < 0 || e.e > 6) && (c = !0)) : r = o), i < 1 || i > Ct(n, o, s) ? h(t)._overflowWeeks = !0 : null != c ? h(t)._overflowWeekday = !0 : (a = bt(n, i, r, o, s), t._a[Zi] = a.year, t._dayOfYear = a.dayOfYear)
        }

        function le(t) {
            if (t._f === e.ISO_8601)return void re(t);
            t._a = [], h(t).empty = !0;
            var n, i, r, o, s, a = "" + t._i, c = a.length, u = 0;
            for (r = Q(t._f, t._locale).match(Ai) || [], n = 0; n < r.length; n++)o = r[n], i = (a.match(Z(o, t)) || [])[0], i && (s = a.substr(0, a.indexOf(i)), s.length > 0 && h(t).unusedInput.push(s), a = a.slice(a.indexOf(i) + i.length), u += i.length), Oi[o] ? (i ? h(t).empty = !1 : h(t).unusedTokens.push(o), it(o, i, t)) : t._strict && !i && h(t).unusedTokens.push(o);
            h(t).charsLeftOver = c - u, a.length > 0 && h(t).unusedInput.push(a), t._a[er] <= 12 && h(t).bigHour === !0 && t._a[er] > 0 && (h(t).bigHour = void 0), h(t).parsedDateParts = t._a.slice(0), h(t).meridiem = t._meridiem, t._a[er] = pe(t._locale, t._a[er], t._meridiem), ce(t), ie(t)
        }

        function pe(t, e, n) {
            var i;
            return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (i = t.isPM(n), i && e < 12 && (e += 12), i || 12 !== e || (e = 0), e) : e
        }

        function he(t) {
            var e, n, i, r, o;
            if (0 === t._f.length)return h(t).invalidFormat = !0, void(t._d = new Date(NaN));
            for (r = 0; r < t._f.length; r++)o = 0, e = y({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[r], le(e), d(e) && (o += h(e).charsLeftOver, o += 10 * h(e).unusedTokens.length, h(e).score = o, (null == i || o < i) && (i = o, n = e));
            u(t, n || e)
        }

        function de(t) {
            if (!t._d) {
                var e = N(t._i);
                t._a = a([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function (t) {
                    return t && parseInt(t, 10)
                }), ce(t)
            }
        }

        function fe(t) {
            var e = new g(ie(me(t)));
            return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
        }

        function me(t) {
            var e = t._i, n = t._f;
            return t._locale = t._locale || ee(t._l), null === e || void 0 === n && "" === e ? f({nullInput: !0}) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), _(e) ? new g(ie(e)) : (i(n) ? he(t) : s(e) ? t._d = e : n ? le(t) : ye(t), d(t) || (t._d = null), t))
        }

        function ye(t) {
            var n = t._i;
            void 0 === n ? t._d = new Date(e.now()) : s(n) ? t._d = new Date(n.valueOf()) : "string" == typeof n ? oe(t) : i(n) ? (t._a = a(n.slice(0), function (t) {
                return parseInt(t, 10)
            }), ce(t)) : "object" == typeof n ? de(t) : "number" == typeof n ? t._d = new Date(n) : e.createFromInputFallback(t)
        }

        function ge(t, e, n, s, a) {
            var c = {};
            return "boolean" == typeof n && (s = n, n = void 0), (r(t) && o(t) || i(t) && 0 === t.length) && (t = void 0), c._isAMomentObject = !0, c._useUTC = c._isUTC = a, c._l = n, c._i = t, c._f = e, c._strict = s, fe(c)
        }

        function _e(t, e, n, i) {
            return ge(t, e, n, i, !1)
        }

        function ve(t, e) {
            var n, r;
            if (1 === e.length && i(e[0]) && (e = e[0]), !e.length)return _e();
            for (n = e[0], r = 1; r < e.length; ++r)e[r].isValid() && !e[r][t](n) || (n = e[r]);
            return n
        }

        function we() {
            var t = [].slice.call(arguments, 0);
            return ve("isBefore", t)
        }

        function be() {
            var t = [].slice.call(arguments, 0);
            return ve("isAfter", t)
        }

        function xe(t) {
            var e = N(t), n = e.year || 0, i = e.quarter || 0, r = e.month || 0, o = e.week || 0, s = e.day || 0, a = e.hour || 0, c = e.minute || 0, u = e.second || 0, l = e.millisecond || 0;
            this._milliseconds = +l + 1e3 * u + 6e4 * c + 1e3 * a * 60 * 60, this._days = +s + 7 * o, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = ee(), this._bubble()
        }

        function Ce(t) {
            return t instanceof xe
        }

        function ke(t, e) {
            H(t, 0, 0, function () {
                var t = this.utcOffset(), n = "+";
                return t < 0 && (t = -t, n = "-"), n + Y(~~(t / 60), 2) + e + Y(~~t % 60, 2)
            })
        }

        function Se(t, e) {
            var n = (e || "").match(t) || [], i = n[n.length - 1] || [], r = (i + "").match(Vr) || ["-", 0, 0], o = +(60 * r[1]) + w(r[2]);
            return "+" === r[0] ? o : -o
        }

        function je(t, n) {
            var i, r;
            return n._isUTC ? (i = n.clone(), r = (_(t) || s(t) ? t.valueOf() : _e(t).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + r), e.updateOffset(i, !1), i) : _e(t).local()
        }

        function Te(t) {
            return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
        }

        function Re(t, n) {
            var i, r = this._offset || 0;
            return this.isValid() ? null != t ? ("string" == typeof t ? t = Se(Wi, t) : Math.abs(t) < 16 && (t = 60 * t), !this._isUTC && n && (i = Te(this)), this._offset = t, this._isUTC = !0, null != i && this.add(i, "m"), r !== t && (!n || this._changeInProgress ? Ye(this, $e(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? r : Te(this) : null != t ? this : NaN
        }

        function Ae(t, e) {
            return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
        }

        function Pe(t) {
            return this.utcOffset(0, t)
        }

        function Me(t) {
            return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Te(this), "m")), this
        }

        function Oe() {
            return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Se(Hi, this._i)), this
        }

        function Ee(t) {
            return !!this.isValid() && (t = t ? _e(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0)
        }

        function Ve() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }

        function Ie() {
            if (!m(this._isDSTShifted))return this._isDSTShifted;
            var t = {};
            if (y(t, this), t = me(t), t._a) {
                var e = t._isUTC ? l(t._a) : _e(t._a);
                this._isDSTShifted = this.isValid() && b(t._a, e.toArray()) > 0
            } else this._isDSTShifted = !1;
            return this._isDSTShifted
        }

        function De() {
            return !!this.isValid() && !this._isUTC
        }

        function Ne() {
            return !!this.isValid() && this._isUTC
        }

        function Fe() {
            return !!this.isValid() && (this._isUTC && 0 === this._offset)
        }

        function $e(t, e) {
            var n, i, r, o = t, s = null;
            return Ce(t) ? o = {
                ms: t._milliseconds,
                d: t._days,
                M: t._months
            } : "number" == typeof t ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (s = Ir.exec(t)) ? (n = "-" === s[1] ? -1 : 1, o = {
                y: 0,
                d: w(s[tr]) * n,
                h: w(s[er]) * n,
                m: w(s[nr]) * n,
                s: w(s[ir]) * n,
                ms: w(s[rr]) * n
            }) : (s = Dr.exec(t)) ? (n = "-" === s[1] ? -1 : 1, o = {
                y: ze(s[2], n),
                M: ze(s[3], n),
                w: ze(s[4], n),
                d: ze(s[5], n),
                h: ze(s[6], n),
                m: ze(s[7], n),
                s: ze(s[8], n)
            }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (r = Le(_e(o.from), _e(o.to)), o = {}, o.ms = r.milliseconds, o.M = r.months), i = new xe(o), Ce(t) && c(t, "_locale") && (i._locale = t._locale), i
        }

        function ze(t, e) {
            var n = t && parseFloat(t.replace(",", "."));
            return (isNaN(n) ? 0 : n) * e
        }

        function qe(t, e) {
            var n = {milliseconds: 0, months: 0};
            return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
        }

        function Le(t, e) {
            var n;
            return t.isValid() && e.isValid() ? (e = je(e, t), t.isBefore(e) ? n = qe(t, e) : (n = qe(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                milliseconds: 0,
                months: 0
            }
        }

        function Ue(t) {
            return t < 0 ? Math.round(-1 * t) * -1 : Math.round(t)
        }

        function Be(t, e) {
            return function (n, i) {
                var r, o;
                return null === i || isNaN(+i) || (k(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), o = n, n = i, i = o), n = "string" == typeof n ? +n : n, r = $e(n, i), Ye(this, r, t), this
            }
        }

        function Ye(t, n, i, r) {
            var o = n._milliseconds, s = Ue(n._days), a = Ue(n._months);
            t.isValid() && (r = null == r || r, o && t._d.setTime(t._d.valueOf() + o * i), s && L(t, "Date", q(t, "Date") + s * i), a && ut(t, q(t, "Month") + a * i), r && e.updateOffset(t, s || a))
        }

        function He(t, e) {
            var n = t.diff(e, "days", !0);
            return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
        }

        function We(t, n) {
            var i = t || _e(), r = je(i, this).startOf("day"), o = e.calendarFormat(this, r) || "sameElse", s = n && (S(n[o]) ? n[o].call(this, i) : n[o]);
            return this.format(s || this.localeData().calendar(o, this, _e(i)))
        }

        function Je() {
            return new g(this)
        }

        function Ge(t, e) {
            var n = _(t) ? t : _e(t);
            return !(!this.isValid() || !n.isValid()) && (e = D(m(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf())
        }

        function Qe(t, e) {
            var n = _(t) ? t : _e(t);
            return !(!this.isValid() || !n.isValid()) && (e = D(m(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf())
        }

        function Ke(t, e, n, i) {
            return i = i || "()", ("(" === i[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === i[1] ? this.isBefore(e, n) : !this.isAfter(e, n))
        }

        function Ze(t, e) {
            var n, i = _(t) ? t : _e(t);
            return !(!this.isValid() || !i.isValid()) && (e = D(e || "millisecond"), "millisecond" === e ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()))
        }

        function Xe(t, e) {
            return this.isSame(t, e) || this.isAfter(t, e)
        }

        function tn(t, e) {
            return this.isSame(t, e) || this.isBefore(t, e)
        }

        function en(t, e, n) {
            var i, r, o, s;
            return this.isValid() ? (i = je(t, this), i.isValid() ? (r = 6e4 * (i.utcOffset() - this.utcOffset()), e = D(e), "year" === e || "month" === e || "quarter" === e ? (s = nn(this, i), "quarter" === e ? s /= 3 : "year" === e && (s /= 12)) : (o = this - i, s = "second" === e ? o / 1e3 : "minute" === e ? o / 6e4 : "hour" === e ? o / 36e5 : "day" === e ? (o - r) / 864e5 : "week" === e ? (o - r) / 6048e5 : o), n ? s : v(s)) : NaN) : NaN
        }

        function nn(t, e) {
            var n, i, r = 12 * (e.year() - t.year()) + (e.month() - t.month()), o = t.clone().add(r, "months");
            return e - o < 0 ? (n = t.clone().add(r - 1, "months"), i = (e - o) / (o - n)) : (n = t.clone().add(r + 1, "months"), i = (e - o) / (n - o)), -(r + i) || 0
        }

        function rn() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }

        function on() {
            var t = this.clone().utc();
            return 0 < t.year() && t.year() <= 9999 ? S(Date.prototype.toISOString) ? this.toDate().toISOString() : G(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : G(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }

        function sn(t) {
            t || (t = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat);
            var n = G(this, t);
            return this.localeData().postformat(n)
        }

        function an(t, e) {
            return this.isValid() && (_(t) && t.isValid() || _e(t).isValid()) ? $e({
                to: this,
                from: t
            }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
        }

        function cn(t) {
            return this.from(_e(), t)
        }

        function un(t, e) {
            return this.isValid() && (_(t) && t.isValid() || _e(t).isValid()) ? $e({
                from: this,
                to: t
            }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
        }

        function ln(t) {
            return this.to(_e(), t)
        }

        function pn(t) {
            var e;
            return void 0 === t ? this._locale._abbr : (e = ee(t), null != e && (this._locale = e), this)
        }

        function hn() {
            return this._locale
        }

        function dn(t) {
            switch (t = D(t)) {
                case"year":
                    this.month(0);
                case"quarter":
                case"month":
                    this.date(1);
                case"week":
                case"isoWeek":
                case"day":
                case"date":
                    this.hours(0);
                case"hour":
                    this.minutes(0);
                case"minute":
                    this.seconds(0);
                case"second":
                    this.milliseconds(0)
            }
            return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
        }

        function fn(t) {
            return t = D(t), void 0 === t || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
        }

        function mn() {
            return this._d.valueOf() - 6e4 * (this._offset || 0)
        }

        function yn() {
            return Math.floor(this.valueOf() / 1e3)
        }

        function gn() {
            return new Date(this.valueOf())
        }

        function _n() {
            var t = this;
            return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
        }

        function vn() {
            var t = this;
            return {
                years: t.year(),
                months: t.month(),
                date: t.date(),
                hours: t.hours(),
                minutes: t.minutes(),
                seconds: t.seconds(),
                milliseconds: t.milliseconds()
            }
        }

        function wn() {
            return this.isValid() ? this.toISOString() : null
        }

        function bn() {
            return d(this)
        }

        function xn() {
            return u({}, h(this))
        }

        function Cn() {
            return h(this).overflow
        }

        function kn() {
            return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
        }

        function Sn(t, e) {
            H(0, [t, t.length], 0, e)
        }

        function jn(t) {
            return Pn.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }

        function Tn(t) {
            return Pn.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
        }

        function Rn() {
            return Ct(this.year(), 1, 4)
        }

        function An() {
            var t = this.localeData()._week;
            return Ct(this.year(), t.dow, t.doy)
        }

        function Pn(t, e, n, i, r) {
            var o;
            return null == t ? xt(this, i, r).year : (o = Ct(t, i, r), e > o && (e = o), Mn.call(this, t, e, n, i, r))
        }

        function Mn(t, e, n, i, r) {
            var o = bt(t, e, n, i, r), s = vt(o.year, 0, o.dayOfYear);
            return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
        }

        function On(t) {
            return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
        }

        function En(t) {
            var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == t ? e : this.add(t - e, "d")
        }

        function Vn(t, e) {
            e[rr] = w(1e3 * ("0." + t))
        }

        function In() {
            return this._isUTC ? "UTC" : ""
        }

        function Dn() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }

        function Nn(t) {
            return _e(1e3 * t)
        }

        function Fn() {
            return _e.apply(null, arguments).parseZone()
        }

        function $n(t) {
            return t
        }

        function zn(t, e, n, i) {
            var r = ee(), o = l().set(i, e);
            return r[n](o, t)
        }

        function qn(t, e, n) {
            if ("number" == typeof t && (e = t, t = void 0), t = t || "", null != e)return zn(t, e, n, "month");
            var i, r = [];
            for (i = 0; i < 12; i++)r[i] = zn(t, i, n, "month");
            return r
        }

        function Ln(t, e, n, i) {
            "boolean" == typeof t ? ("number" == typeof e && (n = e, e = void 0), e = e || "") : (e = t, n = e, t = !1, "number" == typeof e && (n = e, e = void 0), e = e || "");
            var r = ee(), o = t ? r._week.dow : 0;
            if (null != n)return zn(e, (n + o) % 7, i, "day");
            var s, a = [];
            for (s = 0; s < 7; s++)a[s] = zn(e, (s + o) % 7, i, "day");
            return a
        }

        function Un(t, e) {
            return qn(t, e, "months")
        }

        function Bn(t, e) {
            return qn(t, e, "monthsShort")
        }

        function Yn(t, e, n) {
            return Ln(t, e, n, "weekdays")
        }

        function Hn(t, e, n) {
            return Ln(t, e, n, "weekdaysShort")
        }

        function Wn(t, e, n) {
            return Ln(t, e, n, "weekdaysMin")
        }

        function Jn() {
            var t = this._data;
            return this._milliseconds = Jr(this._milliseconds), this._days = Jr(this._days), this._months = Jr(this._months), t.milliseconds = Jr(t.milliseconds), t.seconds = Jr(t.seconds), t.minutes = Jr(t.minutes), t.hours = Jr(t.hours), t.months = Jr(t.months), t.years = Jr(t.years), this
        }

        function Gn(t, e, n, i) {
            var r = $e(e, n);
            return t._milliseconds += i * r._milliseconds, t._days += i * r._days, t._months += i * r._months, t._bubble()
        }

        function Qn(t, e) {
            return Gn(this, t, e, 1)
        }

        function Kn(t, e) {
            return Gn(this, t, e, -1)
        }

        function Zn(t) {
            return t < 0 ? Math.floor(t) : Math.ceil(t)
        }

        function Xn() {
            var t, e, n, i, r, o = this._milliseconds, s = this._days, a = this._months, c = this._data;
            return o >= 0 && s >= 0 && a >= 0 || o <= 0 && s <= 0 && a <= 0 || (o += 864e5 * Zn(ei(a) + s), s = 0, a = 0), c.milliseconds = o % 1e3, t = v(o / 1e3), c.seconds = t % 60, e = v(t / 60), c.minutes = e % 60, n = v(e / 60), c.hours = n % 24, s += v(n / 24), r = v(ti(s)), a += r, s -= Zn(ei(r)), i = v(a / 12), a %= 12, c.days = s, c.months = a, c.years = i, this
        }

        function ti(t) {
            return 4800 * t / 146097
        }

        function ei(t) {
            return 146097 * t / 4800
        }

        function ni(t) {
            var e, n, i = this._milliseconds;
            if (t = D(t), "month" === t || "year" === t)return e = this._days + i / 864e5, n = this._months + ti(e), "month" === t ? n : n / 12;
            switch (e = this._days + Math.round(ei(this._months)), t) {
                case"week":
                    return e / 7 + i / 6048e5;
                case"day":
                    return e + i / 864e5;
                case"hour":
                    return 24 * e + i / 36e5;
                case"minute":
                    return 1440 * e + i / 6e4;
                case"second":
                    return 86400 * e + i / 1e3;
                case"millisecond":
                    return Math.floor(864e5 * e) + i;
                default:
                    throw new Error("Unknown unit " + t)
            }
        }

        function ii() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * w(this._months / 12)
        }

        function ri(t) {
            return function () {
                return this.as(t)
            }
        }

        function oi(t) {
            return t = D(t), this[t + "s"]()
        }

        function si(t) {
            return function () {
                return this._data[t]
            }
        }

        function ai() {
            return v(this.days() / 7)
        }

        function ci(t, e, n, i, r) {
            return r.relativeTime(e || 1, !!n, t, i)
        }

        function ui(t, e, n) {
            var i = $e(t).abs(), r = lo(i.as("s")), o = lo(i.as("m")), s = lo(i.as("h")), a = lo(i.as("d")), c = lo(i.as("M")), u = lo(i.as("y")), l = r < po.s && ["s", r] || o <= 1 && ["m"] || o < po.m && ["mm", o] || s <= 1 && ["h"] || s < po.h && ["hh", s] || a <= 1 && ["d"] || a < po.d && ["dd", a] || c <= 1 && ["M"] || c < po.M && ["MM", c] || u <= 1 && ["y"] || ["yy", u];
            return l[2] = e, l[3] = +t > 0, l[4] = n, ci.apply(null, l)
        }

        function li(t) {
            return void 0 === t ? lo : "function" == typeof t && (lo = t, !0)
        }

        function pi(t, e) {
            return void 0 !== po[t] && (void 0 === e ? po[t] : (po[t] = e, !0))
        }

        function hi(t) {
            var e = this.localeData(), n = ui(this, !t, e);
            return t && (n = e.pastFuture(+this, n)), e.postformat(n)
        }

        function di() {
            var t, e, n, i = ho(this._milliseconds) / 1e3, r = ho(this._days), o = ho(this._months);
            t = v(i / 60), e = v(t / 60), i %= 60, t %= 60, n = v(o / 12), o %= 12;
            var s = n, a = o, c = r, u = e, l = t, p = i, h = this.asSeconds();
            return h ? (h < 0 ? "-" : "") + "P" + (s ? s + "Y" : "") + (a ? a + "M" : "") + (c ? c + "D" : "") + (u || l || p ? "T" : "") + (u ? u + "H" : "") + (l ? l + "M" : "") + (p ? p + "S" : "") : "P0D"
        }

        var fi, mi;
        mi = Array.prototype.some ? Array.prototype.some : function (t) {
            for (var e = Object(this), n = e.length >>> 0, i = 0; i < n; i++)if (i in e && t.call(this, e[i], i, e))return !0;
            return !1
        };
        var yi = e.momentProperties = [], gi = !1, _i = {};
        e.suppressDeprecationWarnings = !1, e.deprecationHandler = null;
        var vi;
        vi = Object.keys ? Object.keys : function (t) {
            var e, n = [];
            for (e in t)c(t, e) && n.push(e);
            return n
        };
        var wi, bi = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        }, xi = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        }, Ci = "Invalid date", ki = "%d", Si = /\d{1,2}/, ji = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        }, Ti = {}, Ri = {}, Ai = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Pi = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Mi = {}, Oi = {}, Ei = /\d/, Vi = /\d\d/, Ii = /\d{3}/, Di = /\d{4}/, Ni = /[+-]?\d{6}/, Fi = /\d\d?/, $i = /\d\d\d\d?/, zi = /\d\d\d\d\d\d?/, qi = /\d{1,3}/, Li = /\d{1,4}/, Ui = /[+-]?\d{1,6}/, Bi = /\d+/, Yi = /[+-]?\d+/, Hi = /Z|[+-]\d\d:?\d\d/gi, Wi = /Z|[+-]\d\d(?::?\d\d)?/gi, Ji = /[+-]?\d+(\.\d{1,3})?/, Gi = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Qi = {}, Ki = {}, Zi = 0, Xi = 1, tr = 2, er = 3, nr = 4, ir = 5, rr = 6, or = 7, sr = 8;
        wi = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
            var e;
            for (e = 0; e < this.length; ++e)if (this[e] === t)return e;
            return -1
        }, H("M", ["MM", 2], "Mo", function () {
            return this.month() + 1
        }), H("MMM", 0, 0, function (t) {
            return this.localeData().monthsShort(this, t)
        }), H("MMMM", 0, 0, function (t) {
            return this.localeData().months(this, t)
        }), I("month", "M"), F("month", 8), K("M", Fi), K("MM", Fi, Vi), K("MMM", function (t, e) {
            return e.monthsShortRegex(t)
        }), K("MMMM", function (t, e) {
            return e.monthsRegex(t)
        }), et(["M", "MM"], function (t, e) {
            e[Xi] = w(t) - 1
        }), et(["MMM", "MMMM"], function (t, e, n, i) {
            var r = n._locale.monthsParse(t, i, n._strict);
            null != r ? e[Xi] = r : h(n).invalidMonth = t
        });
        var ar = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/, cr = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ur = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), lr = Gi, pr = Gi;
        H("Y", 0, 0, function () {
            var t = this.year();
            return t <= 9999 ? "" + t : "+" + t
        }), H(0, ["YY", 2], 0, function () {
            return this.year() % 100
        }), H(0, ["YYYY", 4], 0, "year"), H(0, ["YYYYY", 5], 0, "year"), H(0, ["YYYYYY", 6, !0], 0, "year"), I("year", "y"), F("year", 1), K("Y", Yi), K("YY", Fi, Vi), K("YYYY", Li, Di), K("YYYYY", Ui, Ni), K("YYYYYY", Ui, Ni), et(["YYYYY", "YYYYYY"], Zi), et("YYYY", function (t, n) {
            n[Zi] = 2 === t.length ? e.parseTwoDigitYear(t) : w(t)
        }), et("YY", function (t, n) {
            n[Zi] = e.parseTwoDigitYear(t)
        }), et("Y", function (t, e) {
            e[Zi] = parseInt(t, 10)
        }), e.parseTwoDigitYear = function (t) {
            return w(t) + (w(t) > 68 ? 1900 : 2e3)
        };
        var hr = z("FullYear", !0);
        H("w", ["ww", 2], "wo", "week"), H("W", ["WW", 2], "Wo", "isoWeek"), I("week", "w"), I("isoWeek", "W"), F("week", 5), F("isoWeek", 5), K("w", Fi), K("ww", Fi, Vi), K("W", Fi), K("WW", Fi, Vi), nt(["w", "ww", "W", "WW"], function (t, e, n, i) {
            e[i.substr(0, 1)] = w(t)
        });
        var dr = {dow: 0, doy: 6};
        H("d", 0, "do", "day"), H("dd", 0, 0, function (t) {
            return this.localeData().weekdaysMin(this, t)
        }), H("ddd", 0, 0, function (t) {
            return this.localeData().weekdaysShort(this, t)
        }), H("dddd", 0, 0, function (t) {
            return this.localeData().weekdays(this, t)
        }), H("e", 0, 0, "weekday"), H("E", 0, 0, "isoWeekday"), I("day", "d"), I("weekday", "e"), I("isoWeekday", "E"), F("day", 11), F("weekday", 11), F("isoWeekday", 11), K("d", Fi), K("e", Fi), K("E", Fi), K("dd", function (t, e) {
            return e.weekdaysMinRegex(t)
        }), K("ddd", function (t, e) {
            return e.weekdaysShortRegex(t)
        }), K("dddd", function (t, e) {
            return e.weekdaysRegex(t)
        }), nt(["dd", "ddd", "dddd"], function (t, e, n, i) {
            var r = n._locale.weekdaysParse(t, i, n._strict);
            null != r ? e.d = r : h(n).invalidWeekday = t
        }), nt(["d", "e", "E"], function (t, e, n, i) {
            e[i] = w(t)
        });
        var fr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), mr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), yr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), gr = Gi, _r = Gi, vr = Gi;
        H("H", ["HH", 2], 0, "hour"), H("h", ["hh", 2], 0, Ut), H("k", ["kk", 2], 0, Bt), H("hmm", 0, 0, function () {
            return "" + Ut.apply(this) + Y(this.minutes(), 2)
        }), H("hmmss", 0, 0, function () {
            return "" + Ut.apply(this) + Y(this.minutes(), 2) + Y(this.seconds(), 2)
        }), H("Hmm", 0, 0, function () {
            return "" + this.hours() + Y(this.minutes(), 2)
        }), H("Hmmss", 0, 0, function () {
            return "" + this.hours() + Y(this.minutes(), 2) + Y(this.seconds(), 2)
        }), Yt("a", !0), Yt("A", !1), I("hour", "h"), F("hour", 13), K("a", Ht), K("A", Ht), K("H", Fi), K("h", Fi), K("HH", Fi, Vi), K("hh", Fi, Vi), K("hmm", $i), K("hmmss", zi), K("Hmm", $i), K("Hmmss", zi), et(["H", "HH"], er), et(["a", "A"], function (t, e, n) {
            n._isPm = n._locale.isPM(t), n._meridiem = t
        }), et(["h", "hh"], function (t, e, n) {
            e[er] = w(t), h(n).bigHour = !0
        }), et("hmm", function (t, e, n) {
            var i = t.length - 2;
            e[er] = w(t.substr(0, i)), e[nr] = w(t.substr(i)), h(n).bigHour = !0
        }), et("hmmss", function (t, e, n) {
            var i = t.length - 4, r = t.length - 2;
            e[er] = w(t.substr(0, i)), e[nr] = w(t.substr(i, 2)), e[ir] = w(t.substr(r)), h(n).bigHour = !0
        }), et("Hmm", function (t, e, n) {
            var i = t.length - 2;
            e[er] = w(t.substr(0, i)), e[nr] = w(t.substr(i))
        }), et("Hmmss", function (t, e, n) {
            var i = t.length - 4, r = t.length - 2;
            e[er] = w(t.substr(0, i)), e[nr] = w(t.substr(i, 2)), e[ir] = w(t.substr(r))
        });
        var wr, br = /[ap]\.?m?\.?/i, xr = z("Hours", !0), Cr = {
            calendar: bi,
            longDateFormat: xi,
            invalidDate: Ci,
            ordinal: ki,
            ordinalParse: Si,
            relativeTime: ji,
            months: cr,
            monthsShort: ur,
            week: dr,
            weekdays: fr,
            weekdaysMin: yr,
            weekdaysShort: mr,
            meridiemParse: br
        }, kr = {}, Sr = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/, jr = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/, Tr = /Z|[+-]\d\d(?::?\d\d)?/, Rr = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]], Ar = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], Pr = /^\/?Date\((\-?\d+)/i;
        e.createFromInputFallback = C("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (t) {
            t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
        }), e.ISO_8601 = function () {
        };
        var Mr = C("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var t = _e.apply(null, arguments);
            return this.isValid() && t.isValid() ? t < this ? this : t : f()
        }), Or = C("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var t = _e.apply(null, arguments);
            return this.isValid() && t.isValid() ? t > this ? this : t : f()
        }), Er = function () {
            return Date.now ? Date.now() : +new Date
        };
        ke("Z", ":"), ke("ZZ", ""), K("Z", Wi), K("ZZ", Wi), et(["Z", "ZZ"], function (t, e, n) {
            n._useUTC = !0, n._tzm = Se(Wi, t)
        });
        var Vr = /([\+\-]|\d\d)/gi;
        e.updateOffset = function () {
        };
        var Ir = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/, Dr = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
        $e.fn = xe.prototype;
        var Nr = Be(1, "add"), Fr = Be(-1, "subtract");
        e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        var $r = C("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
            return void 0 === t ? this.localeData() : this.locale(t)
        });
        H(0, ["gg", 2], 0, function () {
            return this.weekYear() % 100
        }), H(0, ["GG", 2], 0, function () {
            return this.isoWeekYear() % 100
        }), Sn("gggg", "weekYear"), Sn("ggggg", "weekYear"), Sn("GGGG", "isoWeekYear"), Sn("GGGGG", "isoWeekYear"), I("weekYear", "gg"), I("isoWeekYear", "GG"), F("weekYear", 1), F("isoWeekYear", 1), K("G", Yi), K("g", Yi), K("GG", Fi, Vi), K("gg", Fi, Vi), K("GGGG", Li, Di), K("gggg", Li, Di), K("GGGGG", Ui, Ni), K("ggggg", Ui, Ni), nt(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, n, i) {
            e[i.substr(0, 2)] = w(t)
        }), nt(["gg", "GG"], function (t, n, i, r) {
            n[r] = e.parseTwoDigitYear(t)
        }), H("Q", 0, "Qo", "quarter"),
            I("quarter", "Q"), F("quarter", 7), K("Q", Ei), et("Q", function (t, e) {
            e[Xi] = 3 * (w(t) - 1)
        }), H("D", ["DD", 2], "Do", "date"), I("date", "D"), F("date", 9), K("D", Fi), K("DD", Fi, Vi), K("Do", function (t, e) {
            return t ? e._ordinalParse : e._ordinalParseLenient
        }), et(["D", "DD"], tr), et("Do", function (t, e) {
            e[tr] = w(t.match(Fi)[0], 10)
        });
        var zr = z("Date", !0);
        H("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), I("dayOfYear", "DDD"), F("dayOfYear", 4), K("DDD", qi), K("DDDD", Ii), et(["DDD", "DDDD"], function (t, e, n) {
            n._dayOfYear = w(t)
        }), H("m", ["mm", 2], 0, "minute"), I("minute", "m"), F("minute", 14), K("m", Fi), K("mm", Fi, Vi), et(["m", "mm"], nr);
        var qr = z("Minutes", !1);
        H("s", ["ss", 2], 0, "second"), I("second", "s"), F("second", 15), K("s", Fi), K("ss", Fi, Vi), et(["s", "ss"], ir);
        var Lr = z("Seconds", !1);
        H("S", 0, 0, function () {
            return ~~(this.millisecond() / 100)
        }), H(0, ["SS", 2], 0, function () {
            return ~~(this.millisecond() / 10)
        }), H(0, ["SSS", 3], 0, "millisecond"), H(0, ["SSSS", 4], 0, function () {
            return 10 * this.millisecond()
        }), H(0, ["SSSSS", 5], 0, function () {
            return 100 * this.millisecond()
        }), H(0, ["SSSSSS", 6], 0, function () {
            return 1e3 * this.millisecond()
        }), H(0, ["SSSSSSS", 7], 0, function () {
            return 1e4 * this.millisecond()
        }), H(0, ["SSSSSSSS", 8], 0, function () {
            return 1e5 * this.millisecond()
        }), H(0, ["SSSSSSSSS", 9], 0, function () {
            return 1e6 * this.millisecond()
        }), I("millisecond", "ms"), F("millisecond", 16), K("S", qi, Ei), K("SS", qi, Vi), K("SSS", qi, Ii);
        var Ur;
        for (Ur = "SSSS"; Ur.length <= 9; Ur += "S")K(Ur, Bi);
        for (Ur = "S"; Ur.length <= 9; Ur += "S")et(Ur, Vn);
        var Br = z("Milliseconds", !1);
        H("z", 0, 0, "zoneAbbr"), H("zz", 0, 0, "zoneName");
        var Yr = g.prototype;
        Yr.add = Nr, Yr.calendar = We, Yr.clone = Je, Yr.diff = en, Yr.endOf = fn, Yr.format = sn, Yr.from = an, Yr.fromNow = cn, Yr.to = un, Yr.toNow = ln, Yr.get = U, Yr.invalidAt = Cn, Yr.isAfter = Ge, Yr.isBefore = Qe, Yr.isBetween = Ke, Yr.isSame = Ze, Yr.isSameOrAfter = Xe, Yr.isSameOrBefore = tn, Yr.isValid = bn, Yr.lang = $r, Yr.locale = pn, Yr.localeData = hn, Yr.max = Or, Yr.min = Mr, Yr.parsingFlags = xn, Yr.set = B, Yr.startOf = dn, Yr.subtract = Fr, Yr.toArray = _n, Yr.toObject = vn, Yr.toDate = gn, Yr.toISOString = on, Yr.toJSON = wn, Yr.toString = rn, Yr.unix = yn, Yr.valueOf = mn, Yr.creationData = kn, Yr.year = hr, Yr.isLeapYear = gt, Yr.weekYear = jn, Yr.isoWeekYear = Tn, Yr.quarter = Yr.quarters = On, Yr.month = lt, Yr.daysInMonth = pt, Yr.week = Yr.weeks = Tt, Yr.isoWeek = Yr.isoWeeks = Rt, Yr.weeksInYear = An, Yr.isoWeeksInYear = Rn, Yr.date = zr, Yr.day = Yr.days = Dt, Yr.weekday = Nt, Yr.isoWeekday = Ft, Yr.dayOfYear = En, Yr.hour = Yr.hours = xr, Yr.minute = Yr.minutes = qr, Yr.second = Yr.seconds = Lr, Yr.millisecond = Yr.milliseconds = Br, Yr.utcOffset = Re, Yr.utc = Pe, Yr.local = Me, Yr.parseZone = Oe, Yr.hasAlignedHourOffset = Ee, Yr.isDST = Ve, Yr.isLocal = De, Yr.isUtcOffset = Ne, Yr.isUtc = Fe, Yr.isUTC = Fe, Yr.zoneAbbr = In, Yr.zoneName = Dn, Yr.dates = C("dates accessor is deprecated. Use date instead.", zr), Yr.months = C("months accessor is deprecated. Use month instead", lt), Yr.years = C("years accessor is deprecated. Use year instead", hr), Yr.zone = C("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ae), Yr.isDSTShifted = C("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ie);
        var Hr = Yr, Wr = R.prototype;
        Wr.calendar = A, Wr.longDateFormat = P, Wr.invalidDate = M, Wr.ordinal = O, Wr.preparse = $n, Wr.postformat = $n, Wr.relativeTime = E, Wr.pastFuture = V, Wr.set = j, Wr.months = ot, Wr.monthsShort = st, Wr.monthsParse = ct, Wr.monthsRegex = dt, Wr.monthsShortRegex = ht, Wr.week = kt, Wr.firstDayOfYear = jt, Wr.firstDayOfWeek = St, Wr.weekdays = Mt, Wr.weekdaysMin = Et, Wr.weekdaysShort = Ot, Wr.weekdaysParse = It, Wr.weekdaysRegex = $t, Wr.weekdaysShortRegex = zt, Wr.weekdaysMinRegex = qt, Wr.isPM = Wt, Wr.meridiem = Jt, Zt("en", {
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (t) {
                var e = t % 10, n = 1 === w(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                return t + n
            }
        }), e.lang = C("moment.lang is deprecated. Use moment.locale instead.", Zt), e.langData = C("moment.langData is deprecated. Use moment.localeData instead.", ee);
        var Jr = Math.abs, Gr = ri("ms"), Qr = ri("s"), Kr = ri("m"), Zr = ri("h"), Xr = ri("d"), to = ri("w"), eo = ri("M"), no = ri("y"), io = si("milliseconds"), ro = si("seconds"), oo = si("minutes"), so = si("hours"), ao = si("days"), co = si("months"), uo = si("years"), lo = Math.round, po = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        }, ho = Math.abs, fo = xe.prototype;
        fo.abs = Jn, fo.add = Qn, fo.subtract = Kn, fo.as = ni, fo.asMilliseconds = Gr, fo.asSeconds = Qr, fo.asMinutes = Kr, fo.asHours = Zr, fo.asDays = Xr, fo.asWeeks = to, fo.asMonths = eo, fo.asYears = no, fo.valueOf = ii, fo._bubble = Xn, fo.get = oi, fo.milliseconds = io, fo.seconds = ro, fo.minutes = oo, fo.hours = so, fo.days = ao, fo.weeks = ai, fo.months = co, fo.years = uo, fo.humanize = hi, fo.toISOString = di, fo.toString = di, fo.toJSON = di, fo.locale = pn, fo.localeData = hn, fo.toIsoString = C("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", di), fo.lang = $r, H("X", 0, 0, "unix"), H("x", 0, 0, "valueOf"), K("x", Yi), K("X", Ji), et("X", function (t, e, n) {
            n._d = new Date(1e3 * parseFloat(t, 10))
        }), et("x", function (t, e, n) {
            n._d = new Date(w(t))
        }), e.version = "2.14.1", n(_e), e.fn = Hr, e.min = we, e.max = be, e.now = Er, e.utc = l, e.unix = Nn, e.months = Un, e.isDate = s, e.locale = Zt, e.invalid = f, e.duration = $e, e.isMoment = _, e.weekdays = Yn, e.parseZone = Fn, e.localeData = ee, e.isDuration = Ce, e.monthsShort = Bn, e.weekdaysMin = Wn, e.defineLocale = Xt, e.updateLocale = te, e.locales = ne, e.weekdaysShort = Hn, e.normalizeUnits = D, e.relativeTimeRounding = li, e.relativeTimeThreshold = pi, e.calendarFormat = He, e.prototype = Hr;
        var mo = e;
        return mo
    })
}, function (t, e, n) {
    var i, r, o = [].slice;
    i = [], r = function () {
        var t;
        return t = function () {
            function t() {
            }

            return t.log = function () {
                var t, e;
                if (e = 1 <= arguments.length ? o.call(arguments, 0) : [], window.console)return e.splice(0, 0, "Snipcart: "), t = Function.prototype.bind.call(window.console.log, window.console), t.apply(console, e)
            }, t
        }()
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function (t, e, n) {
    (function (e) {
        var i, r, o = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, s = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)a.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, a = {}.hasOwnProperty, c = [].slice;
        r = n(41), i = function (t) {
            function n() {
                return this.toJSON = o(this.toJSON, this), this.decrementQuantity = o(this.decrementQuantity, this), this.incrementQuantity = o(this.incrementQuantity, this), this.getCustomFields = o(this.getCustomFields, this), this.init = o(this.init, this), this.urlRoot = o(this.urlRoot, this), n.__super__.constructor.apply(this, arguments)
            }

            return s(n, t), n.prototype.idAttribute = "uniqueId", n.prototype.urlRoot = function () {
                var t, e;
                return e = null != (t = this.inject("cart")) ? t.id : void 0, "/api/cart/" + e + "/items"
            }, n.prototype.defaults = {quantity: 1, stackable: !0}, n.prototype.init = function () {
                return this.get("minQuantity") && this.get("quantity") < this.get("minQuantity") && this.set("quantity", this.get("minQuantity")), this._customFields = null
            }, n.prototype.getCustomFields = function () {
                var t, e, n, i;
                if (this._customFields)return this._customFields;
                if (this.get("customFields"))for (this._customFields = new r(this.get("customFields")), i = this._customFields.models, e = 0, n = i.length; e < n; e++)t = i[e], t.item = this;
                return this._customFields
            }, n.prototype.relations = {dimensions: e.Model}, n.prototype.incrementQuantity = function () {
                var t;
                if (t = 1 <= arguments.length ? c.call(arguments, 0) : [], this.get("stackable"))return this.willBreakMaxQuantity(1) ? void this.inject("vent").trigger("item.maxquantity.reached", this) : (this.set("quantity", this.get("quantity") + 1), this.trigger("update", this))
            }, n.prototype.decrementQuantity = function () {
                var t;
                if (t = 1 <= arguments.length ? c.call(arguments, 0) : [], this.get("stackable"))return 1 === this.get("quantity") || this.get("quantity") === this.get("minQuantity") ? void this.destroy() : (this.set("quantity", this.get("quantity") - 1), this.trigger("update", this))
            }, n.prototype.parse = function (t) {
                var e, n, i, r, o, s, a, c, u, l;
                if (!t.item || !t.discounts)return t;
                for (c = t.discounts.added, n = 0, o = c.length; n < o; n++)e = c[n], this.inject("vent").trigger("discount.added", e);
                for (u = t.discounts.deleted, i = 0, s = u.length; i < s; i++)e = u[i], this.inject("vent").trigger("discount.deleted", e);
                for (l = t.discounts.updated, r = 0, a = l.length; r < a; r++)e = l[r], this.inject("vent").trigger("discount.updated", e);
                return t.item
            }, n.prototype.hasMaxQuantity = function () {
                return this.has("maxQuantity")
            }, n.prototype.willBreakMaxQuantity = function (t) {
                if (this.hasMaxQuantity())return this.collection.quantityOfItem(this.get("id")) + t > this.get("maxQuantity")
            }, n.prototype.toJSON = function () {
                var t;
                return t = n.__super__.toJSON.call(this), this.getCustomFields() && (t.customFields = this.getCustomFields().toJSON()), t
            }, n.prototype.duplicate = function () {
                var t;
                if (this.get("duplicatable") && !this.willBreakMaxQuantity(this.get("quantity")))return t = this.clone(), t.set("uniqueId", null), this.collection.addProduct(t.toJSON())
            }, n
        }(e.Model), t.exports = i
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var i, r, o = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, s = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)a.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, a = {}.hasOwnProperty;
        i = n(42), r = function (t) {
            function e() {
                return this.validate = o(this.validate, this), e.__super__.constructor.apply(this, arguments)
            }

            return s(e, t), e.prototype.model = i, e.prototype.validate = function () {
                var t, e, n, i, r;
                for (r = !0, i = this.models, e = 0, n = i.length; e < n; e++)t = i[e], t.validate() || (r = !1);
                return r
            }, e
        }(e.Collection), t.exports = r
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e, i) {
        var r, o, s = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, a = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)c.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, c = {}.hasOwnProperty;
        o = n(43), r = function (t) {
            function e() {
                return this.toJSON = s(this.toJSON, this), this.getOptions = s(this.getOptions, this), this.preValidate = s(this.preValidate, this), this.getUniqueId = s(this.getUniqueId, this), this.initialize = s(this.initialize, this), e.__super__.constructor.apply(this, arguments)
            }

            return a(e, t), e.prototype.autoSave = !0, e.prototype.errors = {}, e.prototype.required = ["name"], e.prototype.defaults = {
                name: "",
                value: "",
                options: "",
                type: "textbox",
                required: !1
            }, e.prototype.initialize = function (t) {
                var e, n, i, r, o;
                if (this.log = this.inject("logger"), null != t && "dropdown" === t.type) {
                    for (this.item = t.item, r = this.getOptions(), this.get("value") === this.defaults.value && r.length > 0 && this.set("value", r[0].value), o = [], e = 0, n = r.length; e < n; e++)i = r[e], i.value === this.get("value") && null != i.operation ? o.push(this.set("operation", i.operation)) : o.push(void 0);
                    return o
                }
            }, e.prototype.getUniqueId = function () {
                return this.item && this.set("uniqueId", this.item.get("uniqueId")), this.get("uniqueId")
            }, e.prototype.sanitizedName = function () {
                var t;
                if (this.get("name"))return t = o(this.get("name").toString()), this.get("uniqueId") ? "snipcart_" + this.getUniqueId() + "_" + t : "snipcart_custom_" + t
            }, e.prototype.validate = function () {
                var t, e, n;
                return this.errors = {}, !this.get("required") || (t = {value: ["errors_required"]}, e = this.get("type"), n = i.trim(this.get("value")), void 0 === this.get("value") ? (this.errors = t, !1) : "textbox" !== e && "textarea" !== e || "" !== n ? "checkbox" !== e || n === !0 || "true" === n || (this.errors = t, !1) : (this.errors = t, !1))
            }, e.prototype.preValidate = function (t) {
                var e, n, i, r;
                for (r = this.required, n = 0, i = r.length; n < i; n++)if (e = r[n], !this.get(e) || "" === this.get(e))return (null != t ? t.silent : void 0) || this.log.log("The " + e + " property of a custom field is required,  make sure your custom fields have '" + e + "' specified, use the following data attribute: 'data-item-custom*-" + e + '="The name"\'.'), !1;
                return !0
            }, e.prototype.getOptions = function () {
                var t, e, n, i, r, o, s;
                for (s = [], o = this.get("options").split("|"), t = 0, e = o.length; t < e; t++)i = o[t], n = i.match(/\[(.*)\]/), r = {value: i}, null != n && n.length > 0 && (r.value = r.value.replace(n[0], ""), null != n[1] && n[1].match(/(\+|-).*/) && (r.operation = n[1])), r.selected = r.value === this.get("value"), s.push(r);
                return s
            }, e.prototype.toJSON = function () {
                var t;
                return t = {
                    name: this.get("name"),
                    options: this.get("options"),
                    type: this.get("type"),
                    uniqueId: this.get("uniqueId"),
                    value: this.get("value"),
                    operation: this.get("operation"),
                    required: this.get("required"),
                    sanitizedName: this.sanitizedName()
                }
            }, e.prototype._parseFloat = function (t) {
                return isNaN(t) ? 0 : parseFloat(t)
            }, e
        }(e.Model), t.exports = r
    }).call(e, n(2), n(5))
}, function (t, e, n) {
    var i, r;
    !function (o) {
        function s(t) {
            return c ? c[t] : (c = n(!function () {
                var t = new Error('Cannot find module "unicode/category/So"');
                throw t.code = "MODULE_NOT_FOUND", t
            }()), u = ["sign", "cross", "of", "symbol", "staff", "hand", "black", "white"].map(function (t) {
                return new RegExp(t, "gi")
            }), c[t])
        }

        function a(t, e) {
            t = t.toString(), "string" == typeof e && (e = {replacement: e}), e = e || {}, e.mode = e.mode || a.defaults.mode;
            for (var n, i = a.defaults.modes[e.mode], r = ["replacement", "multicharmap", "charmap", "remove", "lower"], o = 0, c = r.length; o < c; o++)n = r[o], e[n] = n in e ? e[n] : i[n];
            "undefined" == typeof e.symbols && (e.symbols = i.symbols);
            var l = [];
            for (var n in e.multicharmap)if (e.multicharmap.hasOwnProperty(n)) {
                var p = n.length;
                l.indexOf(p) === -1 && l.push(p)
            }
            for (var h, d, f, m = "", o = 0, c = t.length; o < c; o++) {
                if (f = t[o], !l.some(function (n) {
                        var i = t.substr(o, n);
                        return !!e.multicharmap[i] && (o += n - 1, f = e.multicharmap[i], !0)
                    }) && (e.charmap[f] ? (f = e.charmap[f], h = f.charCodeAt(0)) : h = t.charCodeAt(o), e.symbols && (d = s(h)))) {
                    f = d.name.toLowerCase();
                    for (var y = 0, g = u.length; y < g; y++)f = f.replace(u[y], "");
                    f = f.replace(/^\s+|\s+$/g, "")
                }
                f = f.replace(/[^\w\s\-\.\_~]/g, ""), e.remove && (f = f.replace(e.remove, "")), m += f
            }
            return m = m.replace(/^\s+|\s+$/g, ""), m = m.replace(/[-\s]+/g, e.replacement), m = m.replace(e.replacement + "$", ""), e.lower && (m = m.toLowerCase()), m
        }

        var c, u;
        a.defaults = {mode: "pretty"}, a.multicharmap = a.defaults.multicharmap = {
            "<3": "love",
            "&&": "and",
            "||": "or",
            "w/": "with"
        }, a.charmap = a.defaults.charmap = {
            "À": "A",
            "Á": "A",
            "Â": "A",
            "Ã": "A",
            "Ä": "A",
            "Å": "A",
            "Æ": "AE",
            "Ç": "C",
            "È": "E",
            "É": "E",
            "Ê": "E",
            "Ë": "E",
            "Ì": "I",
            "Í": "I",
            "Î": "I",
            "Ï": "I",
            "Ð": "D",
            "Ñ": "N",
            "Ò": "O",
            "Ó": "O",
            "Ô": "O",
            "Õ": "O",
            "Ö": "O",
            "Ő": "O",
            "Ø": "O",
            "Ù": "U",
            "Ú": "U",
            "Û": "U",
            "Ü": "U",
            "Ű": "U",
            "Ý": "Y",
            "Þ": "TH",
            "ß": "ss",
            "à": "a",
            "á": "a",
            "â": "a",
            "ã": "a",
            "ä": "a",
            "å": "a",
            "æ": "ae",
            "ç": "c",
            "è": "e",
            "é": "e",
            "ê": "e",
            "ë": "e",
            "ì": "i",
            "í": "i",
            "î": "i",
            "ï": "i",
            "ð": "d",
            "ñ": "n",
            "ò": "o",
            "ó": "o",
            "ô": "o",
            "õ": "o",
            "ö": "o",
            "ő": "o",
            "ø": "o",
            "ù": "u",
            "ú": "u",
            "û": "u",
            "ü": "u",
            "ű": "u",
            "ý": "y",
            "þ": "th",
            "ÿ": "y",
            "ẞ": "SS",
            "α": "a",
            "β": "b",
            "γ": "g",
            "δ": "d",
            "ε": "e",
            "ζ": "z",
            "η": "h",
            "θ": "8",
            "ι": "i",
            "κ": "k",
            "λ": "l",
            "μ": "m",
            "ν": "n",
            "ξ": "3",
            "ο": "o",
            "π": "p",
            "ρ": "r",
            "σ": "s",
            "τ": "t",
            "υ": "y",
            "φ": "f",
            "χ": "x",
            "ψ": "ps",
            "ω": "w",
            "ά": "a",
            "έ": "e",
            "ί": "i",
            "ό": "o",
            "ύ": "y",
            "ή": "h",
            "ώ": "w",
            "ς": "s",
            "ϊ": "i",
            "ΰ": "y",
            "ϋ": "y",
            "ΐ": "i",
            "Α": "A",
            "Β": "B",
            "Γ": "G",
            "Δ": "D",
            "Ε": "E",
            "Ζ": "Z",
            "Η": "H",
            "Θ": "8",
            "Ι": "I",
            "Κ": "K",
            "Λ": "L",
            "Μ": "M",
            "Ν": "N",
            "Ξ": "3",
            "Ο": "O",
            "Π": "P",
            "Ρ": "R",
            "Σ": "S",
            "Τ": "T",
            "Υ": "Y",
            "Φ": "F",
            "Χ": "X",
            "Ψ": "PS",
            "Ω": "W",
            "Ά": "A",
            "Έ": "E",
            "Ί": "I",
            "Ό": "O",
            "Ύ": "Y",
            "Ή": "H",
            "Ώ": "W",
            "Ϊ": "I",
            "Ϋ": "Y",
            "ş": "s",
            "Ş": "S",
            "ı": "i",
            "İ": "I",
            "ğ": "g",
            "Ğ": "G",
            "а": "a",
            "б": "b",
            "в": "v",
            "г": "g",
            "д": "d",
            "е": "e",
            "ё": "yo",
            "ж": "zh",
            "з": "z",
            "и": "i",
            "й": "j",
            "к": "k",
            "л": "l",
            "м": "m",
            "н": "n",
            "о": "o",
            "п": "p",
            "р": "r",
            "с": "s",
            "т": "t",
            "у": "u",
            "ф": "f",
            "х": "h",
            "ц": "c",
            "ч": "ch",
            "ш": "sh",
            "щ": "sh",
            "ъ": "u",
            "ы": "y",
            "ь": "",
            "э": "e",
            "ю": "yu",
            "я": "ya",
            "А": "A",
            "Б": "B",
            "В": "V",
            "Г": "G",
            "Д": "D",
            "Е": "E",
            "Ё": "Yo",
            "Ж": "Zh",
            "З": "Z",
            "И": "I",
            "Й": "J",
            "К": "K",
            "Л": "L",
            "М": "M",
            "Н": "N",
            "О": "O",
            "П": "P",
            "Р": "R",
            "С": "S",
            "Т": "T",
            "У": "U",
            "Ф": "F",
            "Х": "H",
            "Ц": "C",
            "Ч": "Ch",
            "Ш": "Sh",
            "Щ": "Sh",
            "Ъ": "U",
            "Ы": "Y",
            "Ь": "",
            "Э": "E",
            "Ю": "Yu",
            "Я": "Ya",
            "Є": "Ye",
            "І": "I",
            "Ї": "Yi",
            "Ґ": "G",
            "є": "ye",
            "і": "i",
            "ї": "yi",
            "ґ": "g",
            "č": "c",
            "ď": "d",
            "ě": "e",
            "ň": "n",
            "ř": "r",
            "š": "s",
            "ť": "t",
            "ů": "u",
            "ž": "z",
            "Č": "C",
            "Ď": "D",
            "Ě": "E",
            "Ň": "N",
            "Ř": "R",
            "Š": "S",
            "Ť": "T",
            "Ů": "U",
            "Ž": "Z",
            "ą": "a",
            "ć": "c",
            "ę": "e",
            "ł": "l",
            "ń": "n",
            "ś": "s",
            "ź": "z",
            "ż": "z",
            "Ą": "A",
            "Ć": "C",
            "Ę": "E",
            "Ł": "L",
            "Ń": "N",
            "Ś": "S",
            "Ź": "Z",
            "Ż": "Z",
            "ā": "a",
            "ē": "e",
            "ģ": "g",
            "ī": "i",
            "ķ": "k",
            "ļ": "l",
            "ņ": "n",
            "ū": "u",
            "Ā": "A",
            "Ē": "E",
            "Ģ": "G",
            "Ī": "I",
            "Ķ": "K",
            "Ļ": "L",
            "Ņ": "N",
            "Ū": "U",
            "ė": "e",
            "į": "i",
            "ų": "u",
            "Ė": "E",
            "Į": "I",
            "Ų": "U",
            "ț": "t",
            "Ț": "T",
            "ţ": "t",
            "Ţ": "T",
            "ș": "s",
            "Ș": "S",
            "ă": "a",
            "Ă": "A",
            "Ạ": "A",
            "Ả": "A",
            "Ầ": "A",
            "Ấ": "A",
            "Ậ": "A",
            "Ẩ": "A",
            "Ẫ": "A",
            "Ằ": "A",
            "Ắ": "A",
            "Ặ": "A",
            "Ẳ": "A",
            "Ẵ": "A",
            "Ẹ": "E",
            "Ẻ": "E",
            "Ẽ": "E",
            "Ề": "E",
            "Ế": "E",
            "Ệ": "E",
            "Ể": "E",
            "Ễ": "E",
            "Ị": "I",
            "Ỉ": "I",
            "Ĩ": "I",
            "Ọ": "O",
            "Ỏ": "O",
            "Ồ": "O",
            "Ố": "O",
            "Ộ": "O",
            "Ổ": "O",
            "Ỗ": "O",
            "Ơ": "O",
            "Ờ": "O",
            "Ớ": "O",
            "Ợ": "O",
            "Ở": "O",
            "Ỡ": "O",
            "Ụ": "U",
            "Ủ": "U",
            "Ũ": "U",
            "Ư": "U",
            "Ừ": "U",
            "Ứ": "U",
            "Ự": "U",
            "Ử": "U",
            "Ữ": "U",
            "Ỳ": "Y",
            "Ỵ": "Y",
            "Ỷ": "Y",
            "Ỹ": "Y",
            "Đ": "D",
            "ạ": "a",
            "ả": "a",
            "ầ": "a",
            "ấ": "a",
            "ậ": "a",
            "ẩ": "a",
            "ẫ": "a",
            "ằ": "a",
            "ắ": "a",
            "ặ": "a",
            "ẳ": "a",
            "ẵ": "a",
            "ẹ": "e",
            "ẻ": "e",
            "ẽ": "e",
            "ề": "e",
            "ế": "e",
            "ệ": "e",
            "ể": "e",
            "ễ": "e",
            "ị": "i",
            "ỉ": "i",
            "ĩ": "i",
            "ọ": "o",
            "ỏ": "o",
            "ồ": "o",
            "ố": "o",
            "ộ": "o",
            "ổ": "o",
            "ỗ": "o",
            "ơ": "o",
            "ờ": "o",
            "ớ": "o",
            "ợ": "o",
            "ở": "o",
            "ỡ": "o",
            "ụ": "u",
            "ủ": "u",
            "ũ": "u",
            "ư": "u",
            "ừ": "u",
            "ứ": "u",
            "ự": "u",
            "ử": "u",
            "ữ": "u",
            "ỳ": "y",
            "ỵ": "y",
            "ỷ": "y",
            "ỹ": "y",
            "đ": "d",
            "€": "euro",
            "₢": "cruzeiro",
            "₣": "french franc",
            "£": "pound",
            "₤": "lira",
            "₥": "mill",
            "₦": "naira",
            "₧": "peseta",
            "₨": "rupee",
            "₩": "won",
            "₪": "new shequel",
            "₫": "dong",
            "₭": "kip",
            "₮": "tugrik",
            "₯": "drachma",
            "₰": "penny",
            "₱": "peso",
            "₲": "guarani",
            "₳": "austral",
            "₴": "hryvnia",
            "₵": "cedi",
            "¢": "cent",
            "¥": "yen",
            "元": "yuan",
            "円": "yen",
            "﷼": "rial",
            "₠": "ecu",
            "¤": "currency",
            "฿": "baht",
            $: "dollar",
            "₹": "indian rupee",
            "©": "(c)",
            "œ": "oe",
            "Œ": "OE",
            "∑": "sum",
            "®": "(r)",
            "†": "+",
            "“": '"',
            "”": '"',
            "‘": "'",
            "’": "'",
            "∂": "d",
            "ƒ": "f",
            "™": "tm",
            "℠": "sm",
            "…": "...",
            "˚": "o",
            "º": "o",
            "ª": "a",
            "•": "*",
            "∆": "delta",
            "∞": "infinity",
            "♥": "love",
            "&": "and",
            "|": "or",
            "<": "less",
            ">": "greater"
        }, a.defaults.modes = {
            rfc3986: {
                replacement: "-",
                symbols: !0,
                remove: null,
                lower: !0,
                charmap: a.defaults.charmap,
                multicharmap: a.defaults.multicharmap
            },
            pretty: {
                replacement: "-",
                symbols: !0,
                remove: /[.]/g,
                lower: !1,
                charmap: a.defaults.charmap,
                multicharmap: a.defaults.multicharmap
            }
        };
        var l;
        for (var l in a.defaults.modes)a.defaults.modes.hasOwnProperty(l) && (a.defaults.modes[l].symbols = !1);
        i = [], r = function () {
            return a
        }.apply(e, i), !(void 0 !== r && (t.exports = r))
    }(this)
}, function (t, e, n) {
    (function (e) {
        var n, i = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, r = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)o.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, o = {}.hasOwnProperty;
        n = function (t) {
            function e() {
                return this.url = i(this.url, this), e.__super__.constructor.apply(this, arguments)
            }

            return r(e, t), e.prototype.types = ["updated", "added", "deleted"], e.prototype.url = function () {
                var t;
                return t = this.inject("cart").id, "/api/cart/" + t + "/discounts"
            }, e.prototype.parse = function (t) {
                var e, n, i, r, o, s, a, c;
                if (t.discount)for (s = this.types, n = 0, r = s.length; n < r; n++) {
                    if (c = s[n], t[c])for (a = t[c], i = 0, o = a.length; i < o; i++)e = a[i], this.inject("vent").trigger("discount." + c, e);
                    return t.discount
                }
                return t
            }, e
        }(e.Model), t.exports = n
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var n, i = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, r = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)o.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, o = {}.hasOwnProperty;
        n = function (t) {
            function e() {
                return this.getCardData = i(this.getCardData, this), this.clear = i(this.clear, this), this.isValid = i(this.isValid, this), this.initialize = i(this.initialize, this), e.__super__.constructor.apply(this, arguments)
            }

            return r(e, t), e.prototype.defaults = {
                creditCardNumber: "",
                cvc: "",
                expirationMonth: 0,
                expirationYear: 0,
                cardHolderName: "",
                cardType: "",
                canfinalize: !1
            }, e.prototype.initialize = function () {
                return this.errors = {}
            }, e.prototype.getDisplayabledCreditCardNumber = function () {
                var t, e;
                if (e = this.get("creditCardNumber"))return e = e.replace(/\s/g, ""), t = e.substr(e.length - 4, 4), Array(e.length - 3).join("X") + " " + t
            }, e.prototype.getDisplayableCardType = function () {
                var t;
                return t = {mastercard: "Master Card", visa: "Visa", amex: "American Express"}, t[this.get("cardType")]
            }, e.prototype.valid = function () {
                if (this.errors = {}, !this.billLater && (void 0 !== this.get("creditCardNumber") && "" !== this.get("creditCardNumber") || (this.errors.creditCardNumber = [], this.errors.creditCardNumber.push("errors_required")), void 0 !== this.get("cvc") && "" !== this.get("cvc") || (this.errors.cvc = [], this.errors.cvc.push("errors_required")), void 0 === this.get("cardHolderName") || "" === this.get("cardHolderName")))return this.errors.cardHolderName = [], this.errors.cardHolderName.push("errors_required")
            }, e.prototype.isValid = function () {
                return !this.errors.cvc && !this.errors.creditCardNumber && !this.errors.cardHolderName
            }, e.prototype.clear = function () {
                return this.set(this.defaults)
            }, e.prototype.getCardData = function () {
                return {
                    method: "CreditCard",
                    paypalTokenId: this.get("paypalTokenId"),
                    card: {
                        number: this.get("creditCardNumber"),
                        type: this.get("cardType"),
                        cvc: this.get("cvc"),
                        holderName: this.get("cardHolderName"),
                        expirationMonth: this.get("expirationMonth"),
                        expirationYear: this.get("expirationYear")
                    }
                }
            }, e
        }(e.Model), t.exports = n
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e, i) {
        var r, o, s, a = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, c = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)u.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, u = {}.hasOwnProperty;
        s = n(36), r = n(47), o = function (t) {
            function e() {
                return this.isLogged = a(this.isLogged, this), this.noCurrentUser = a(this.noCurrentUser, this), this.logUser = a(this.logUser, this), this.resetPassword = a(this.resetPassword, this), this.sendForgotPasswordEmail = a(this.sendForgotPasswordEmail, this), this.createUserCookie = a(this.createUserCookie, this), this.getSessionToken = a(this.getSessionToken, this), this.login = a(this.login, this), this.shippingAddressChanged = a(this.shippingAddressChanged, this), this.getShippingAddress = a(this.getShippingAddress, this), this.billingAddressChanged = a(this.billingAddressChanged, this), this.getBillingAddress = a(this.getBillingAddress, this), this.create = a(this.create, this), this.initialize = a(this.initialize, this), e.__super__.constructor.apply(this, arguments)
            }

            return c(e, t), e.prototype.defaults = {
                email: "",
                sessionToken: ""
            }, e.prototype.errors = {}, e.prototype.initialize = function () {
            }, e.prototype.create = function () {
                var t, e;
                return this.errors = {}, e = new r, t = new i.Deferred, e.jsonp({
                    url: "/api/jsonp/user/post",
                    data: this.attributes,
                    success: function (e) {
                        return function (n) {
                            return e.set("password", ""), e.set("confirmPassword", ""), n.valid ? (e.set(n.content), t.resolve(e)) : (e.errors = n.errors, t.reject(e))
                        }
                    }(this)
                }), t
            }, e.prototype.getBillingAddress = function () {
                var t;
                return t = new BillingAddress({
                    email: this.get("email"),
                    firstname: this.get("billingAddressFirstName"),
                    name: this.get("billingAddressName"),
                    companyname: this.get("billingAddressCompanyName"),
                    address1: this.get("billingAddressAddress1"),
                    address2: this.get("billingAddressAddress2"),
                    province: this.get("billingAddressProvince"),
                    postalCode: this.get("billingAddressPostalCode"),
                    phone: this.get("billingAddressPhone"),
                    city: this.get("billingAddressCity"),
                    country: this.get("billingAddressCountry"),
                    complete: !0
                }), t.on("saved", this.billingAddressChanged), t
            }, e.prototype.billingAddressChanged = function (t) {
                return this.set("email", t.get("email")), this.set("billingAddressFirstName", t.get("firstname")), this.set("billingAddressName", t.get("name")), this.set("billingAddressCompanyName", t.get("companyname")), this.set("billingAddressAddress1", t.get("address1")), this.set("billingAddressAddress2", t.get("address2")), this.set("billingAddressProvince", t.get("province")), this.set("billingAddressPostalCode", t.get("postalCode")), this.set("billingAddressPhone", t.get("phone")), this.set("billingAddressCity", t.get("city")), this.set("billingAddressCountry", t.get("country"))
            }, e.prototype.getShippingAddress = function () {
                var t;
                return t = new ShippingAddress({
                    sameAsBilling: this.get("shippingAddressSameAsBilling"),
                    firstname: this.get("shippingAddressFirstName"),
                    name: this.get("shippingAddressName"),
                    companyname: this.get("shippingAddressCompanyName"),
                    address1: this.get("shippingAddressAddress1"),
                    address2: this.get("shippingAddressAddress2"),
                    province: this.get("shippingAddressProvince"),
                    postalCode: this.get("shippingAddressPostalCode"),
                    phone: this.get("shippingAddressPhone"),
                    city: this.get("shippingAddressCity"),
                    country: this.get("shippingAddressCountry"),
                    complete: !0
                }), this.listenTo(t, "saved", this.shippingAddressChanged), t
            }, e.prototype.shippingAddressChanged = function (t) {
                return this.set("shippingAddressSameAsBilling", t.get("sameAsBilling")), this.set("shippingAddressFirstName", t.get("firstname")), this.set("shippingAddressName", t.get("name")), this.set("shippingAddressCompanyName", t.get("companyname")), this.set("shippingAddressAddress1", t.get("address1")), this.set("shippingAddressAddress2", t.get("address2")), this.set("shippingAddressProvince", t.get("province")), this.set("shippingAddressPostalCode", t.get("postalCode")), this.set("shippingAddressPhone", t.get("phone")), this.set("shippingAddressCity", t.get("city")), this.set("shippingAddressCountry", t.get("country"))
            }, e.prototype.login = function () {
                var t, e;
                return e = new r, t = new i.Deferred, e.jsonp({
                    url: "/api/jsonp/user/login",
                    data: this.attributes,
                    success: function (e) {
                        return function (n) {
                            return n.valid ? (e.set(n.content), t.resolve(e)) : (e.errors = n.errors, t.reject(e))
                        }
                    }(this)
                }), t
            }, e.prototype.getSessionToken = function () {
                return this.inject("cartService").getSessionToken()
            }, e.prototype.createUserCookie = function (t) {
                var e;
                return e = new CookieHelper, e.saveCookie("snipcart_auth_cookie", t, 240), this.set("sessionToken", t)
            }, e.prototype.sendForgotPasswordEmail = function () {
                var t;
                return t = new i.Deferred, (new r).jsonp({
                    url: "/api/jsonp/user/forgotpassword",
                    data: this.attributes,
                    success: function (e) {
                        return function (n) {
                            return n.valid ? t.resolve(e) : (e.errors = n.errors, t.reject(e))
                        }
                    }(this)
                }), t
            }, e.prototype.resetPassword = function (t) {
                var e;
                return this.set(t), e = new i.Deferred, (new r).jsonp({
                    url: "/api/jsonp/user/resetpassword",
                    data: this.attributes,
                    success: function (t) {
                        return function (n) {
                            return n.valid ? e.resolve(t) : (t.errors = n.errors, e.reject(t))
                        }
                    }(this)
                }), e
            }, e.prototype.logUser = function (t) {
                return this.createUserCookie(t.sessionToken), this.set("email", t.email), this.set("sessionToken", this.getSessionToken()), this.trigger("user:currentuser", this)
            }, e.prototype.noCurrentUser = function () {
                return this.trigger("user:nocurrentuser", this)
            }, e.prototype.isLogged = function () {
                return "" !== this.get("sessionToken") && null !== this.get("sessionToken")
            }, e
        }(e.Model), t.exports = o
    }).call(e, n(2), n(7))
}, function (t, e, n) {
    (function (e, n, i) {
        var r, o = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)s.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, s = {}.hasOwnProperty;
        r = function (t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }

            return o(e, t), e.prototype.getApiUrl = function () {
                var t;
                return null != (t = n("script#snipcart").data("base-url")) ? t : "https://app.snipcart.com"
            }, e.prototype.jsonp = function (t) {
                var e, r, o;
                return e = {
                    apiKey: n("#snipcart").data("api-key"),
                    lang: null != (o = n("html").attr("lang")) ? o : "en",
                    sessionToken: this.inject("cartService").getSessionToken(),
                    orderToken: this.inject("cartService").getToken()
                }, t.data || (t.data = {}), i.extend(t.data, e), r = {
                    headers: {Accept: "application/json"},
                    contentType: "application/json; charset=utf-8",
                    dataType: "jsonp",
                    type: "get",
                    url: "" + this.getApiUrl() + t.url
                }, i.extend(t, r), n.ajax(t)
            }, e.prototype.jsonpWithToken = function (t) {
                return this.inject("cartService").ensureCart().then(function () {
                    return this.jsonp(t)
                })
            }, e
        }(e.HttpService), t.exports = r
    }).call(e, n(2), n(7), n(5))
}, function (t, e, n) {
    (function (e, i) {
        var r, o, s, a, c, u, l, p, h, d = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, f = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)m.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, m = {}.hasOwnProperty;
        r = n(49), o = n(40), u = n(44), p = n(45), h = n(46), c = n(41), a = n(36), l = n(65), a = n(36), s = function (t) {
            function e() {
                return this.validationFailed = d(this.validationFailed, this), this._cartCompleted = d(this._cartCompleted, this), this._cartCreated = d(this._cartCreated, this), this.injectCart = d(this.injectCart, this), this.ensureCart = d(this.ensureCart, this), this.retrieve = d(this.retrieve, this), this.getSessionToken = d(this.getSessionToken, this), this.getToken = d(this.getToken, this), this.initialize = d(this.initialize, this), e.__super__.constructor.apply(this, arguments)
            }

            return f(e, t), e.prototype.initialize = function () {
                return this.listenTo(this.inject("vent"), "order.created", this._cartCreated), this.listenTo(this.inject("vent"), "order.completed", this._cartCompleted)
            }, e.prototype.getToken = function () {
                var t;
                return t = new a, t.getCookieContent("snipcart_order_token")
            }, e.prototype.getSessionToken = function () {
                var t;
                return t = new a, t.getCookieContent("snipcart_auth_cookie")
            }, e.prototype.retrieve = function (t, e) {
                var n, i;
                switch (n = this.inject(), i = this.inject("logger"), t) {
                    case"order":
                        return e(n.cart.toJSON());
                    default:
                        return i.log(t + " is not a valid argument")
                }
            }, e.prototype.ensureCart = function (t) {
                return this.inject().start().then(function (e) {
                    return function () {
                        var n, o, s, a;
                        return n = e.inject("cart"), null != n ? (null != t && t(n), i.Deferred().resolve(n)) : (n = new r({currency: e.inject("currency")}), a = new l, o = i("#snipcart").data(), s = a.parse(o), s.length > 0 && n.set("customFields", new c(s)), n["new"] = !0, n.save().then(function (i) {
                            return n.set(i), e.injectCart(n), null != t && t(n), n
                        }))
                    }
                }(this))
            }, e.prototype.injectCart = function (t) {
                var e, n, i, o, s;
                return null == t.toJSON && (t = new r(t)), this.inject().set("cart", t), n = this.inject("cart").toJSON(), t.initializing = !0, this.inject().collections.items.set(n.items), this.inject().collections.plans.set(n.plans), this.inject().collections.discounts.set(n.discounts), this.listenTo(this.inject("cart"), "change:total", this.inject("mainview").updateTotal), this.listenTo(this.inject("cart"), "change:total", function () {
                    return this.inject("vent").trigger("cart.total.updated", this.inject("cart"))
                }), this.listenTo(this.inject("cart"), "validation.failed", this.validationFailed), this.inject("vent").trigger("cart.injected", t), i = this.inject("config"), s = null != i.cart_expiration_in_hours ? i.cart_expiration_in_hours : 120, o = new a, o.saveCookie("snipcart_order_token", t.id, s), t.get("currency") && this.inject("vent").trigger("set.currency", "function" == typeof(e = t.get("currency")).toLowerCase ? e.toLowerCase() : void 0), t.initializing = !1
            }, e.prototype._cartCreated = function (t) {
                return t.content.order["new"] = !0, this.injectCart(t.content.order)
            }, e.prototype._cartCompleted = function () {
                return this.inject().set("cart", null), this.inject("vent").trigger("cart.unset")
            }, e.prototype.validationFailed = function (t) {
                var e, n, i, r, o, s;
                for (r = this.inject("collections").items, this.inject("flash").showMessage({
                    type: "error",
                    delay: 1e4,
                    message: this.inject("viewhelper").getResource("order_validation_failed")
                }), s = [], n = 0, o = t.length; n < o; n++)e = t[n], i = r.get(e.uniqueId), i && (i.invalid = !0, i.invalidReason = e.status, e.message && this.inject("logger").log(e.message), "PriceDoesNotMatch" === e.status ? (i.set("invalidPrice", e.price), i.set("unitPrice", e.expectedUnitPrice), i.set("price", e.expectedPrice), s.push(i.set("totalPrice", e.expectedUnitPrice * i.get("quantity")))) : s.push(void 0));
                return s
            }, e
        }(e.Service), t.exports = s
    }).call(e, n(2), n(7))
}, function (t, e, n) {
    (function (e, i, r) {
        var o, s, a, c, u, l, p, h, d = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, f = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)m.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, m = {}.hasOwnProperty;
        u = n(41), c = n(50), h = n(54), o = n(56), p = n(39), s = n(63), l = n(64), a = function (t) {
            function n() {
                return this._callGateway = d(this._callGateway, this), this._callApi = d(this._callApi, this), this.pay = d(this.pay, this), this.hasValidShippingInformation = d(this.hasValidShippingInformation, this), this.hasShippingEnabled = d(this.hasShippingEnabled, this), this.hasValidShippingAddress = d(this.hasValidShippingAddress, this), this.hasValidCustomFields = d(this.hasValidCustomFields, this), this.hasValidBillingAddress = d(this.hasValidBillingAddress, this), this.retrieve = d(this.retrieve, this), this.init = d(this.init, this), this.clearShippingInformation = d(this.clearShippingInformation, this), this.computeSubtotal = d(this.computeSubtotal, this), this.isEmpty = d(this.isEmpty, this), this.canPlaceOrder = d(this.canPlaceOrder, this), this.hasShipping = d(this.hasShipping, this), this.parse = d(this.parse, this), this.toJSON = d(this.toJSON, this), n.__super__.constructor.apply(this, arguments)
            }

            return f(n, t), n.prototype.urlRoot = "/api/cart", n.prototype.idAttribute = "token", n.prototype.relations = {
                billingAddress: o,
                shippingAddress: o,
                shippingInformation: e.Model,
                customFields: u,
                items: c,
                taxes: e.Collection,
                discounts: e.Collection,
                plans: h,
                card: s,
                metadata: e.Model
            }, n.prototype.toJSON = function () {
                var t;
                return t = n.__super__.toJSON.call(this), delete t.summary, null == t.errors && delete t.errors, t
            }, n.prototype.parse = function (t) {
                var e;
                return t.customFields && (t.customFields = new u(t.customFields)), (null != (e = t.summary) ? e.taxes : void 0) && (t.taxes = t.summary.taxes), t
            }, n.prototype.hasShipping = function () {
                var t, e;
                return (null != (t = this.get("shippingAddress")) && null != (e = t.get("address1")) ? e.length : void 0) > 0
            }, n.prototype.canPlaceOrder = function () {
                var t;
                return t = this.get("paymentMethod"), "CreditCard" === t ? this.get("card").isValid() : "Paypal" === t || "WillBePaidLater" === t
            }, n.prototype.isEmpty = function () {
                var t;
                return "InProgress" === this.get("status") ? (t = this.inject(), 0 === t.collections.items.size() && 0 === t.collections.plans.size()) : 0 === this.get("plans").size() && 0 === this.get("items").size()
            }, n.prototype.computeSubtotal = function () {
                var t, e, n;
                if ("InProgress" === this.get("status"))return t = this.inject(), n = t.collections.items.totalPrice(), n += t.collections.plans.totalPrice(), n -= t.collections.discounts.totalAmountSaved(), (null != (e = this.get("shippingInformation")) ? e.has("fees") : void 0) && (n += this.get("shippingInformation").get("fees")), this.set("total", Math.max(0, n))
            }, n.prototype.clearShippingInformation = function () {
                return this.initializing || this.unset("shippingInformation"), this.computeSubtotal()
            }, n.prototype.init = function () {
                return this.collections = this.inject("collections"), this.listenTo(this.collections.items, "add", this.computeSubtotal), this.listenTo(this.collections.items, "change", this.computeSubtotal), this.listenTo(this.collections.plans, "change", this.computeSubtotal), this.listenTo(this.collections.items, "remove", this.computeSubtotal), this.listenTo(this.collections.plans, "remove", this.computeSubtotal), this.listenTo(this.collections.plans, "add", this.computeSubtotal), this.listenTo(this.collections.discounts, "change", this.computeSubtotal), this.listenTo(this.collections.discounts, "add", this.computeSubtotal), this.listenTo(this.collections.discounts, "remove", this.computeSubtotal), this.listenTo(this.inject("vent"), "currency.changed", function (t) {
                    return function () {
                        if (t.inject().reset(), t.inject("mainview").visible)return t.inject("mainview").showEmptyView()
                    }
                }(this))
            }, n.prototype.retrieve = function (t, e) {
                var n, i;
                switch (n = this.inject(), i = this.inject("logger"), t) {
                    case"order":
                        return e(n.order.toJSON());
                    default:
                        return i.log(t + " is not a valid argument")
                }
            }, n.prototype.hasValidBillingAddress = function () {
                var t;
                return null != (t = this.get("billingAddress")) && "function" == typeof t.isValid ? t.isValid() : void 0
            }, n.prototype.hasValidCustomFields = function () {
                var t;
                return null != (t = this.get("customFields")) ? t.validate() : void 0
            }, n.prototype.hasValidShippingAddress = function () {
                var t;
                return null != (t = this.get("shippingAddress")) && "function" == typeof t.isValid ? t.isValid() : void 0
            }, n.prototype.hasShippingEnabled = function () {
                return this.inject().shippingEnabled()
            }, n.prototype.hasValidShippingInformation = function () {
                var t;
                return null != (null != (t = this.get("shippingInformation")) && "function" == typeof t.get ? t.get("method") : void 0)
            }, n.prototype.pay = function (t) {
                var e, n, o, s;
                return n = new i.Deferred, e = {
                    paymentMethod: this.get("paymentMethod"),
                    card: null != (s = this.get("card")) ? s.toJSON() : void 0
                }, o = this._callGateway(e), o.done(function (t) {
                    return function (i) {
                        return null != i.card && (e.card = r.extend(e.card, i.card)), t._callApi(e, i, n)
                    }
                }(this)), o.fail(function (t) {
                    return function (e) {
                        return t.errors = e, n.reject(t, e)
                    }
                }(this)), n
            }, n.prototype._callApi = function (t, e, n) {
                var i;
                return i = this.inject("http").req({
                    url: this.url() + "/pay",
                    type: "POST",
                    data: t
                }), i.done(function (t) {
                    return function (e) {
                        var i;
                        return null != (i = t.get("card")) && i.clear(), t.set(e), e.redirectUrl || t.trigger("paid", t), n.resolve(t, e)
                    }
                }(this)), i.fail(function (t) {
                    return function (e) {
                        var i, r, o, s, a, c, u, l, h, d, f;
                        if (r = t.getErrorsFromResponse(e), t.errors = null != (u = null != r ? r.errors : void 0) ? u : r, (null != r ? r.validationErrors : void 0) && (t.trigger("validation.failed", r.validationErrors), t.validationFailed = !0), null != r ? r.expiredDiscounts : void 0) {
                            for (t.inject("flash").showMessage({
                                type: "error",
                                message: t.inject("viewhelper").getResource("error_discounts_have_expired")
                            }), l = null != r ? r.expiredDiscounts : void 0, o = 0, a = l.length; o < a; o++)i = l[o], t.inject("vent").trigger("discount.deleted", {id: i});
                            t.validationFailed = !0
                        }
                        if (null != (h = t.errors) ? h.taxes : void 0) {
                            for (p.log("Failed to compute taxes for current order."), d = t.errors.taxes, s = 0, c = d.length; s < c; s++)f = d[s], p.log("Tax Cloud - " + f);
                            t.inject("routers").order.shippingOrBillingAddress(), t.inject("flash").showMessage({
                                type: "error",
                                message: t.inject("viewhelper").getResource("error_impossible_to_calculate_taxes")
                            })
                        }
                        return t.validationFailed = !0, n.reject(t, e)
                    }
                }(this))
            }, n.prototype._callGateway = function (t) {
                var e, n, r;
                return e = "Paypal" === t.paymentMethod ? "PaypalExpressCheckout" : "WillBePaidLater" === t.paymentMethod ? "Deferred" : this.inject().settings.paymentGateway, (r = l[e]) ? (new r).process(this, t) : (n = new i.Deferred, n.resolve(t), n)
            }, n
        }(e.Model), t.exports = a
    }).call(e, n(2), n(7), n(5))
}, function (t, e, n) {
    (function (e, i, r) {
        var o, s, a, c = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, u = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)l.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, l = {}.hasOwnProperty, p = [].slice;
        o = n(40), a = n(51), s = function (t) {
            function n() {
                return this.isUptodate = c(this.isUptodate, this), this.itemsCount = c(this.itemsCount, this), this.totalPrice = c(this.totalPrice, this), this.destroyWhere = c(this.destroyWhere, this), this.updateItem = c(this.updateItem, this), this.modelDestroyed = c(this.modelDestroyed, this), this.changed = c(this.changed, this), this.addProduct = c(this.addProduct, this), this.initialize = c(this.initialize, this), this.url = c(this.url, this), n.__super__.constructor.apply(this, arguments)
            }

            return u(n, t), n.prototype.model = o, n.prototype.url = function () {
                var t, e;
                return e = null != (t = this.inject("cart")) ? t.id : void 0, "/api/cart/" + e + "/items"
            }, n.prototype.initialize = function () {
                return this.listenTo(this, "destroy", this.modelDestroyed), this.listenTo(this, "change", this.changed)
            }, n.prototype.addProduct = function (t) {
                var n, i, r, s;
                return n = a.defer(), i = new e.Event, r = null != (s = this.inject("collections").items) ? s.toJSON() : void 0, t.id ? (this.inject("vent").trigger("item.adding", i, t, r), i.isDefaultPrevented() ? void 0 : (this.trigger("adding", t), this.inject("cartService").ensureCart(function (e) {
                    return function (i) {
                        var r, s, a;
                        return a = e.inject("cart").id, e.inject("logger").log("Adding item " + t.id + " to cart " + a + "."), t.stackable && ("function" == typeof t.canBeStacked ? t.canBeStacked() : void 0) && (r = e.findWhere({id: t.id.toString()}), null != r && r.incrementQuantity({silent: !0})), r = r || new o(t), r.collection = e, r.isNew() && r.willBreakMaxQuantity(null != (s = t.quantity) ? s : 1) ? (e.inject("mainview").loadComplete(), e.inject("vent").trigger("item.maxquantity.reached", r), n.reject({
                            item: r,
                            reason: "max_quantity_reached"
                        }), n.promise) : r.save().always(function () {
                            return e.inject("mainview").loadComplete()
                        }).done(function () {
                            return e.inject("logger").log("Succesfully added item " + t.id + " to cart " + a + "."), e.inject("vent").trigger("item.added", r.toJSON()), e.unshift(r), n.resolve(r)
                        }).fail(function () {
                            var t;
                            return t = 1 <= arguments.length ? p.call(arguments, 0) : [], e.inject("logger").log("This item is missing some mandatory attributes. The following attributes are required: `data-item-id`, `data-item-price`, `data-item-name` and `data-item-url`. Please refer to the following part of our documentation for more information: http://docs.snipcart.com/configuration/product-definition"), n.reject.apply(n, t)
                        })
                    }
                }(this)), n.promise)) : (this.inject("logger").log("This item is missing the mandatory `data-item-id` attribute. Please refer to the following part of our documentation to see which attributes are required: http://docs.snipcart.com/configuration/product-definition"), n.reject({}), n.promise)
            }, n.prototype.changed = function (t) {
                return this.inject("vent").trigger("item.updated", t.toJSON())
            }, n.prototype.modelDestroyed = function (t, e, n) {
                return n.xhr.done(function (e) {
                    return function (n) {
                        var i, r, o, s, a, c, u, l, p, h;
                        for (l = n.added, r = 0, a = l.length; r < a; r++)i = l[r], e.inject("vent").trigger("discount.added", i);
                        for (p = n.deleted, o = 0, c = p.length; o < c; o++)i = p[o], e.inject("vent").trigger("discount.deleted", i);
                        for (h = n.updated, s = 0, u = h.length; s < u; s++)i = h[s], e.inject("vent").trigger("discount.updated", i);
                        return e.inject("vent").trigger("item.removed", t.toJSON())
                    }
                }(this))
            }, n.prototype.updateItem = function (t) {
                var e, n;
                return e = this.get(t.uniqueId), n = new i.Deferred, e ? (e.set(t), e.save().done(function (t) {
                    return function () {
                        return n.resolve(e)
                    }
                }(this)).fail(function (t) {
                    return function (t) {
                        return e.setErrors(t), n.reject(e, t)
                    }
                }(this))) : (this.inject("logger").log("Item with ID " + this.item.uniqueId + " does not exist"), n.reject({model: ["Item with ID " + this.item.uniqueId + " does not exist"]})), n
            }, n.prototype.destroyWhere = function (t) {
                var e;
                return e = this.where(t), this.remove(e)
            }, n.prototype.totalPrice = function () {
                return r.sum(this.toJSON(), function (t) {
                    return function (t) {
                        return t.totalPrice
                    }
                }(this))
            }, n.prototype.itemsCount = function () {
                return r.sum(this.toJSON(), function (t) {
                    return function (t) {
                        return t.quantity
                    }
                }(this))
            }, n.prototype.isUptodate = function () {
                return !0
            }, n.prototype.quantityOfItem = function (t) {
                var e, n, i, r, o;
                for (n = this.where({id: t.toString()}), o = 0, i = 0, r = n.length; i < r; i++)e = n[i], o += e.get("quantity");
                return o
            }, n
        }(e.Collection), t.exports = s
    }).call(e, n(2), n(7), n(5))
}, function (t, e, n) {
    (function (e, n) {
        !function (e) {
            "use strict";
            if ("function" == typeof bootstrap)bootstrap("promise", e); else {
                t.exports = e()
            }
        }(function () {
            "use strict";
            function t(t) {
                return function () {
                    return Q.apply(t, arguments)
                }
            }

            function i(t) {
                return t === Object(t)
            }

            function r(t) {
                return "[object StopIteration]" === rt(t) || t instanceof H
            }

            function o(t, e) {
                if (U && e.stack && "object" == typeof t && null !== t && t.stack && t.stack.indexOf(ot) === -1) {
                    for (var n = [], i = e; i; i = i.source)i.stack && n.unshift(i.stack);
                    n.unshift(t.stack);
                    var r = n.join("\n" + ot + "\n");
                    t.stack = s(r)
                }
            }

            function s(t) {
                for (var e = t.split("\n"), n = [], i = 0; i < e.length; ++i) {
                    var r = e[i];
                    u(r) || a(r) || !r || n.push(r)
                }
                return n.join("\n")
            }

            function a(t) {
                return t.indexOf("(module.js:") !== -1 || t.indexOf("(node.js:") !== -1
            }

            function c(t) {
                var e = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);
                if (e)return [e[1], Number(e[2])];
                var n = /at ([^ ]+):(\d+):(?:\d+)$/.exec(t);
                if (n)return [n[1], Number(n[2])];
                var i = /.*@(.+):(\d+)$/.exec(t);
                return i ? [i[1], Number(i[2])] : void 0
            }

            function u(t) {
                var e = c(t);
                if (!e)return !1;
                var n = e[0], i = e[1];
                return n === Y && i >= W && i <= lt
            }

            function l() {
                if (U)try {
                    throw new Error
                } catch (t) {
                    var e = t.stack.split("\n"), n = e[0].indexOf("@") > 0 ? e[1] : e[2], i = c(n);
                    if (!i)return;
                    return Y = i[0], i[1]
                }
            }

            function p(t, e, n) {
                return function () {
                    return "undefined" != typeof console && "function" == typeof console.warn, t.apply(t, arguments)
                }
            }

            function h(t) {
                return t instanceof y ? t : w(t) ? A(t) : R(t)
            }

            function d() {
                function t(t) {
                    e = t, o.source = t, Z(n, function (e, n) {
                        h.nextTick(function () {
                            t.promiseDispatch.apply(t, n)
                        })
                    }, void 0), n = void 0, i = void 0
                }

                var e, n = [], i = [], r = et(d.prototype), o = et(y.prototype);
                if (o.promiseDispatch = function (t, r, o) {
                        var s = K(arguments);
                        n ? (n.push(s), "when" === r && o[1] && i.push(o[1])) : h.nextTick(function () {
                            e.promiseDispatch.apply(e, s)
                        })
                    }, o.valueOf = function () {
                        if (n)return o;
                        var t = _(e);
                        return v(t) && (e = t), t
                    }, o.inspect = function () {
                        return e ? e.inspect() : {state: "pending"}
                    }, h.longStackSupport && U)try {
                    throw new Error
                } catch (s) {
                    o.stack = s.stack.substring(s.stack.indexOf("\n") + 1)
                }
                return r.promise = o, r.resolve = function (n) {
                    e || t(h(n))
                }, r.fulfill = function (n) {
                    e || t(R(n))
                }, r.reject = function (n) {
                    e || t(T(n))
                }, r.notify = function (t) {
                    e || Z(i, function (e, n) {
                        h.nextTick(function () {
                            n(t)
                        })
                    }, void 0)
                }, r
            }

            function f(t) {
                if ("function" != typeof t)throw new TypeError("resolver must be a function.");
                var e = d();
                try {
                    t(e.resolve, e.reject, e.notify)
                } catch (n) {
                    e.reject(n)
                }
                return e.promise
            }

            function m(t) {
                return f(function (e, n) {
                    for (var i = 0, r = t.length; i < r; i++)h(t[i]).then(e, n)
                })
            }

            function y(t, e, n) {
                void 0 === e && (e = function (t) {
                    return T(new Error("Promise does not support operation: " + t))
                }), void 0 === n && (n = function () {
                    return {state: "unknown"}
                });
                var i = et(y.prototype);
                if (i.promiseDispatch = function (n, r, o) {
                        var s;
                        try {
                            s = t[r] ? t[r].apply(i, o) : e.call(i, r, o)
                        } catch (a) {
                            s = T(a)
                        }
                        n && n(s)
                    }, i.inspect = n, n) {
                    var r = n();
                    "rejected" === r.state && (i.exception = r.reason), i.valueOf = function () {
                        var t = n();
                        return "pending" === t.state || "rejected" === t.state ? i : t.value
                    }
                }
                return i
            }

            function g(t, e, n, i) {
                return h(t).then(e, n, i)
            }

            function _(t) {
                if (v(t)) {
                    var e = t.inspect();
                    if ("fulfilled" === e.state)return e.value
                }
                return t
            }

            function v(t) {
                return t instanceof y
            }

            function w(t) {
                return i(t) && "function" == typeof t.then
            }

            function b(t) {
                return v(t) && "pending" === t.inspect().state
            }

            function x(t) {
                return !v(t) || "fulfilled" === t.inspect().state
            }

            function C(t) {
                return v(t) && "rejected" === t.inspect().state
            }

            function k() {
                st.length = 0, at.length = 0, ut || (ut = !0)
            }

            function S(t, n) {
                ut && ("object" == typeof e && "function" == typeof e.emit && h.nextTick.runAfter(function () {
                    X(at, t) !== -1 && (e.emit("unhandledRejection", n, t), ct.push(t))
                }), at.push(t), n && "undefined" != typeof n.stack ? st.push(n.stack) : st.push("(no stack) " + n))
            }

            function j(t) {
                if (ut) {
                    var n = X(at, t);
                    n !== -1 && ("object" == typeof e && "function" == typeof e.emit && h.nextTick.runAfter(function () {
                        var i = X(ct, t);
                        i !== -1 && (e.emit("rejectionHandled", st[n], t), ct.splice(i, 1))
                    }), at.splice(n, 1), st.splice(n, 1))
                }
            }

            function T(t) {
                var e = y({
                    when: function (e) {
                        return e && j(this), e ? e(t) : this
                    }
                }, function () {
                    return this
                }, function () {
                    return {state: "rejected", reason: t}
                });
                return S(e, t), e
            }

            function R(t) {
                return y({
                    when: function () {
                        return t
                    }, get: function (e) {
                        return t[e]
                    }, set: function (e, n) {
                        t[e] = n
                    }, "delete": function (e) {
                        delete t[e]
                    }, post: function (e, n) {
                        return null === e || void 0 === e ? t.apply(void 0, n) : t[e].apply(t, n)
                    }, apply: function (e, n) {
                        return t.apply(e, n)
                    }, keys: function () {
                        return it(t)
                    }
                }, void 0, function () {
                    return {state: "fulfilled", value: t}
                })
            }

            function A(t) {
                var e = d();
                return h.nextTick(function () {
                    try {
                        t.then(e.resolve, e.reject, e.notify)
                    } catch (n) {
                        e.reject(n)
                    }
                }), e.promise
            }

            function P(t) {
                return y({
                    isDef: function () {
                    }
                }, function (e, n) {
                    return D(t, e, n)
                }, function () {
                    return h(t).inspect()
                })
            }

            function M(t, e, n) {
                return h(t).spread(e, n)
            }

            function O(t) {
                return function () {
                    function e(t, e) {
                        var s;
                        if ("undefined" == typeof StopIteration) {
                            try {
                                s = n[t](e)
                            } catch (a) {
                                return T(a)
                            }
                            return s.done ? h(s.value) : g(s.value, i, o)
                        }
                        try {
                            s = n[t](e)
                        } catch (a) {
                            return r(a) ? h(a.value) : T(a)
                        }
                        return g(s, i, o)
                    }

                    var n = t.apply(this, arguments), i = e.bind(e, "next"), o = e.bind(e, "throw");
                    return i()
                }
            }

            function E(t) {
                h.done(h.async(t)())
            }

            function V(t) {
                throw new H(t)
            }

            function I(t) {
                return function () {
                    return M([this, N(arguments)], function (e, n) {
                        return t.apply(e, n)
                    })
                }
            }

            function D(t, e, n) {
                return h(t).dispatch(e, n)
            }

            function N(t) {
                return g(t, function (t) {
                    var e = 0, n = d();
                    return Z(t, function (i, r, o) {
                        var s;
                        v(r) && "fulfilled" === (s = r.inspect()).state ? t[o] = s.value : (++e, g(r, function (i) {
                            t[o] = i, 0 === --e && n.resolve(t)
                        }, n.reject, function (t) {
                            n.notify({index: o, value: t})
                        }))
                    }, void 0), 0 === e && n.resolve(t), n.promise
                })
            }

            function F(t) {
                if (0 === t.length)return h.resolve();
                var e = h.defer(), n = 0;
                return Z(t, function (i, r, o) {
                    function s(t) {
                        e.resolve(t)
                    }

                    function a() {
                        n--, 0 === n && e.reject(new Error("Can't get fulfillment value from any promise, all promises were rejected."))
                    }

                    function c(t) {
                        e.notify({index: o, value: t})
                    }

                    var u = t[o];
                    n++, g(u, s, a, c)
                }, void 0), e.promise
            }

            function $(t) {
                return g(t, function (t) {
                    return t = tt(t, h), g(N(tt(t, function (t) {
                        return g(t, J, J)
                    })), function () {
                        return t
                    })
                })
            }

            function z(t) {
                return h(t).allSettled()
            }

            function q(t, e) {
                return h(t).then(void 0, void 0, e)
            }

            function L(t, e) {
                return h(t).nodeify(e)
            }

            var U = !1;
            try {
                throw new Error
            } catch (B) {
                U = !!B.stack
            }
            var Y, H, W = l(), J = function () {
            }, G = function () {
                function t() {
                    for (var t, e; r.next;)r = r.next, t = r.task, r.task = void 0, e = r.domain, e && (r.domain = void 0, e.enter()), i(t, e);
                    for (; u.length;)t = u.pop(), i(t);
                    s = !1
                }

                function i(e, n) {
                    try {
                        e()
                    } catch (i) {
                        if (c)throw n && n.exit(), setTimeout(t, 0), n && n.enter(), i;
                        setTimeout(function () {
                            throw i
                        }, 0)
                    }
                    n && n.exit()
                }

                var r = {task: void 0, next: null}, o = r, s = !1, a = void 0, c = !1, u = [];
                if (G = function (t) {
                        o = o.next = {task: t, domain: c && e.domain, next: null}, s || (s = !0, a())
                    }, "object" == typeof e && "[object process]" === e.toString() && e.nextTick)c = !0, a = function () {
                    e.nextTick(t)
                }; else if ("function" == typeof n)a = "undefined" != typeof window ? n.bind(window, t) : function () {
                    n(t)
                }; else if ("undefined" != typeof MessageChannel) {
                    var l = new MessageChannel;
                    l.port1.onmessage = function () {
                        a = p, l.port1.onmessage = t, t()
                    };
                    var p = function () {
                        l.port2.postMessage(0)
                    };
                    a = function () {
                        setTimeout(t, 0), p()
                    }
                } else a = function () {
                    setTimeout(t, 0)
                };
                return G.runAfter = function (t) {
                    u.push(t), s || (s = !0, a())
                }, G
            }(), Q = Function.call, K = t(Array.prototype.slice), Z = t(Array.prototype.reduce || function (t, e) {
                    var n = 0, i = this.length;
                    if (1 === arguments.length)for (; ;) {
                        if (n in this) {
                            e = this[n++];
                            break
                        }
                        if (++n >= i)throw new TypeError
                    }
                    for (; n < i; n++)n in this && (e = t(e, this[n], n));
                    return e
                }), X = t(Array.prototype.indexOf || function (t) {
                    for (var e = 0; e < this.length; e++)if (this[e] === t)return e;
                    return -1
                }), tt = t(Array.prototype.map || function (t, e) {
                    var n = this, i = [];
                    return Z(n, function (r, o, s) {
                        i.push(t.call(e, o, s, n))
                    }, void 0), i
                }), et = Object.create || function (t) {
                    function e() {
                    }

                    return e.prototype = t, new e
                }, nt = t(Object.prototype.hasOwnProperty), it = Object.keys || function (t) {
                    var e = [];
                    for (var n in t)nt(t, n) && e.push(n);
                    return e
                }, rt = t(Object.prototype.toString);
            H = "undefined" != typeof ReturnValue ? ReturnValue : function (t) {
                this.value = t
            };
            var ot = "From previous event:";
            h.resolve = h, h.nextTick = G, h.longStackSupport = !1, "object" == typeof e && e && e.env && e.env.Q_DEBUG && (h.longStackSupport = !0), h.defer = d, d.prototype.makeNodeResolver = function () {
                var t = this;
                return function (e, n) {
                    e ? t.reject(e) : arguments.length > 2 ? t.resolve(K(arguments, 1)) : t.resolve(n)
                }
            }, h.Promise = f, h.promise = f, f.race = m, f.all = N, f.reject = T, f.resolve = h, h.passByCopy = function (t) {
                return t
            }, y.prototype.passByCopy = function () {
                return this
            }, h.join = function (t, e) {
                return h(t).join(e)
            }, y.prototype.join = function (t) {
                return h([this, t]).spread(function (t, e) {
                    if (t === e)return t;
                    throw new Error("Can't join: not the same: " + t + " " + e)
                })
            }, h.race = m, y.prototype.race = function () {
                return this.then(h.race)
            }, h.makePromise = y, y.prototype.toString = function () {
                return "[object Promise]"
            }, y.prototype.then = function (t, e, n) {
                function i(e) {
                    try {
                        return "function" == typeof t ? t(e) : e
                    } catch (n) {
                        return T(n)
                    }
                }

                function r(t) {
                    if ("function" == typeof e) {
                        o(t, a);
                        try {
                            return e(t)
                        } catch (n) {
                            return T(n)
                        }
                    }
                    return T(t)
                }

                function s(t) {
                    return "function" == typeof n ? n(t) : t
                }

                var a = this, c = d(), u = !1;
                return h.nextTick(function () {
                    a.promiseDispatch(function (t) {
                        u || (u = !0, c.resolve(i(t)))
                    }, "when", [function (t) {
                        u || (u = !0, c.resolve(r(t)))
                    }])
                }), a.promiseDispatch(void 0, "when", [void 0, function (t) {
                    var e, n = !1;
                    try {
                        e = s(t)
                    } catch (i) {
                        if (n = !0, !h.onerror)throw i;
                        h.onerror(i)
                    }
                    n || c.notify(e)
                }]), c.promise
            }, h.tap = function (t, e) {
                return h(t).tap(e)
            }, y.prototype.tap = function (t) {
                return t = h(t), this.then(function (e) {
                    return t.fcall(e).thenResolve(e)
                })
            }, h.when = g, y.prototype.thenResolve = function (t) {
                return this.then(function () {
                    return t
                })
            }, h.thenResolve = function (t, e) {
                return h(t).thenResolve(e)
            }, y.prototype.thenReject = function (t) {
                return this.then(function () {
                    throw t
                })
            }, h.thenReject = function (t, e) {
                return h(t).thenReject(e)
            }, h.nearer = _, h.isPromise = v, h.isPromiseAlike = w, h.isPending = b, y.prototype.isPending = function () {
                return "pending" === this.inspect().state
            }, h.isFulfilled = x, y.prototype.isFulfilled = function () {
                return "fulfilled" === this.inspect().state
            }, h.isRejected = C, y.prototype.isRejected = function () {
                return "rejected" === this.inspect().state
            };
            var st = [], at = [], ct = [], ut = !0;
            h.resetUnhandledRejections = k, h.getUnhandledReasons = function () {
                return st.slice()
            }, h.stopUnhandledRejectionTracking = function () {
                k(), ut = !1
            }, k(), h.reject = T, h.fulfill = R, h.master = P, h.spread = M, y.prototype.spread = function (t, e) {
                return this.all().then(function (e) {
                    return t.apply(void 0, e)
                }, e)
            }, h.async = O, h.spawn = E, h["return"] = V, h.promised = I, h.dispatch = D, y.prototype.dispatch = function (t, e) {
                var n = this, i = d();
                return h.nextTick(function () {
                    n.promiseDispatch(i.resolve, t, e)
                }), i.promise
            }, h.get = function (t, e) {
                return h(t).dispatch("get", [e])
            }, y.prototype.get = function (t) {
                return this.dispatch("get", [t])
            }, h.set = function (t, e, n) {
                return h(t).dispatch("set", [e, n])
            }, y.prototype.set = function (t, e) {
                return this.dispatch("set", [t, e])
            }, h.del = h["delete"] = function (t, e) {
                return h(t).dispatch("delete", [e])
            }, y.prototype.del = y.prototype["delete"] = function (t) {
                return this.dispatch("delete", [t])
            }, h.mapply = h.post = function (t, e, n) {
                return h(t).dispatch("post", [e, n])
            }, y.prototype.mapply = y.prototype.post = function (t, e) {
                return this.dispatch("post", [t, e])
            }, h.send = h.mcall = h.invoke = function (t, e) {
                return h(t).dispatch("post", [e, K(arguments, 2)])
            }, y.prototype.send = y.prototype.mcall = y.prototype.invoke = function (t) {
                return this.dispatch("post", [t, K(arguments, 1)])
            }, h.fapply = function (t, e) {
                return h(t).dispatch("apply", [void 0, e])
            }, y.prototype.fapply = function (t) {
                return this.dispatch("apply", [void 0, t])
            }, h["try"] = h.fcall = function (t) {
                return h(t).dispatch("apply", [void 0, K(arguments, 1)])
            }, y.prototype.fcall = function () {
                return this.dispatch("apply", [void 0, K(arguments)])
            }, h.fbind = function (t) {
                var e = h(t), n = K(arguments, 1);
                return function () {
                    return e.dispatch("apply", [this, n.concat(K(arguments))])
                }
            }, y.prototype.fbind = function () {
                var t = this, e = K(arguments);
                return function () {
                    return t.dispatch("apply", [this, e.concat(K(arguments))])
                }
            }, h.keys = function (t) {
                return h(t).dispatch("keys", [])
            }, y.prototype.keys = function () {
                return this.dispatch("keys", [])
            }, h.all = N, y.prototype.all = function () {
                return N(this)
            }, h.any = F, y.prototype.any = function () {
                return F(this)
            }, h.allResolved = p($, "allResolved", "allSettled"), y.prototype.allResolved = function () {
                return $(this)
            }, h.allSettled = z, y.prototype.allSettled = function () {
                return this.then(function (t) {
                    return N(tt(t, function (t) {
                        function e() {
                            return t.inspect()
                        }

                        return t = h(t), t.then(e, e)
                    }))
                })
            }, h.fail = h["catch"] = function (t, e) {
                return h(t).then(void 0, e)
            }, y.prototype.fail = y.prototype["catch"] = function (t) {
                return this.then(void 0, t)
            }, h.progress = q, y.prototype.progress = function (t) {
                return this.then(void 0, void 0, t)
            }, h.fin = h["finally"] = function (t, e) {
                return h(t)["finally"](e)
            }, y.prototype.fin = y.prototype["finally"] = function (t) {
                return t = h(t), this.then(function (e) {
                    return t.fcall().then(function () {
                        return e
                    })
                }, function (e) {
                    return t.fcall().then(function () {
                        throw e
                    })
                })
            }, h.done = function (t, e, n, i) {
                return h(t).done(e, n, i)
            }, y.prototype.done = function (t, n, i) {
                var r = function (t) {
                    h.nextTick(function () {
                        if (o(t, s), !h.onerror)throw t;
                        h.onerror(t)
                    })
                }, s = t || n || i ? this.then(t, n, i) : this;
                "object" == typeof e && e && e.domain && (r = e.domain.bind(r)), s.then(void 0, r)
            }, h.timeout = function (t, e, n) {
                return h(t).timeout(e, n)
            }, y.prototype.timeout = function (t, e) {
                var n = d(), i = setTimeout(function () {
                    e && "string" != typeof e || (e = new Error(e || "Timed out after " + t + " ms"), e.code = "ETIMEDOUT"), n.reject(e)
                }, t);
                return this.then(function (t) {
                    clearTimeout(i), n.resolve(t)
                }, function (t) {
                    clearTimeout(i), n.reject(t)
                }, n.notify), n.promise
            }, h.delay = function (t, e) {
                return void 0 === e && (e = t, t = void 0), h(t).delay(e)
            }, y.prototype.delay = function (t) {
                return this.then(function (e) {
                    var n = d();
                    return setTimeout(function () {
                        n.resolve(e)
                    }, t), n.promise
                })
            }, h.nfapply = function (t, e) {
                return h(t).nfapply(e)
            }, y.prototype.nfapply = function (t) {
                var e = d(), n = K(t);
                return n.push(e.makeNodeResolver()), this.fapply(n).fail(e.reject), e.promise
            }, h.nfcall = function (t) {
                var e = K(arguments, 1);
                return h(t).nfapply(e)
            }, y.prototype.nfcall = function () {
                var t = K(arguments), e = d();
                return t.push(e.makeNodeResolver()), this.fapply(t).fail(e.reject), e.promise
            }, h.nfbind = h.denodeify = function (t) {
                var e = K(arguments, 1);
                return function () {
                    var n = e.concat(K(arguments)), i = d();
                    return n.push(i.makeNodeResolver()), h(t).fapply(n).fail(i.reject), i.promise
                }
            }, y.prototype.nfbind = y.prototype.denodeify = function () {
                var t = K(arguments);
                return t.unshift(this), h.denodeify.apply(void 0, t)
            }, h.nbind = function (t, e) {
                var n = K(arguments, 2);
                return function () {
                    function i() {
                        return t.apply(e, arguments)
                    }

                    var r = n.concat(K(arguments)), o = d();
                    return r.push(o.makeNodeResolver()), h(i).fapply(r).fail(o.reject), o.promise
                }
            }, y.prototype.nbind = function () {
                var t = K(arguments, 0);
                return t.unshift(this), h.nbind.apply(void 0, t)
            }, h.nmapply = h.npost = function (t, e, n) {
                return h(t).npost(e, n)
            }, y.prototype.nmapply = y.prototype.npost = function (t, e) {
                var n = K(e || []), i = d();
                return n.push(i.makeNodeResolver()), this.dispatch("post", [t, n]).fail(i.reject), i.promise
            }, h.nsend = h.nmcall = h.ninvoke = function (t, e) {
                var n = K(arguments, 2), i = d();
                return n.push(i.makeNodeResolver()), h(t).dispatch("post", [e, n]).fail(i.reject), i.promise
            }, y.prototype.nsend = y.prototype.nmcall = y.prototype.ninvoke = function (t) {
                var e = K(arguments, 1), n = d();
                return e.push(n.makeNodeResolver()), this.dispatch("post", [t, e]).fail(n.reject), n.promise
            }, h.nodeify = L, y.prototype.nodeify = function (t) {
                return t ? void this.then(function (e) {
                    h.nextTick(function () {
                        t(null, e)
                    })
                }, function (e) {
                    h.nextTick(function () {
                        t(e)
                    })
                }) : this
            }, h.noConflict = function () {
                throw new Error("Q.noConflict only works when Q is used as a global")
            };
            var lt = l();
            return h
        })
    }).call(e, n(52), n(53).setImmediate)
}, function (t, e) {
    function n(t) {
        return c === setTimeout ? setTimeout(t, 0) : c.call(null, t, 0)
    }

    function i(t) {
        u === clearTimeout ? clearTimeout(t) : u.call(null, t)
    }

    function r() {
        d && p && (d = !1, p.length ? h = p.concat(h) : f = -1, h.length && o())
    }

    function o() {
        if (!d) {
            var t = n(r);
            d = !0;
            for (var e = h.length; e;) {
                for (p = h, h = []; ++f < e;)p && p[f].run();
                f = -1, e = h.length
            }
            p = null, d = !1, i(t)
        }
    }

    function s(t, e) {
        this.fun = t, this.array = e
    }

    function a() {
    }

    var c, u, l = t.exports = {};
    !function () {
        try {
            c = setTimeout
        } catch (t) {
            c = function () {
                throw new Error("setTimeout is not defined")
            }
        }
        try {
            u = clearTimeout
        } catch (t) {
            u = function () {
                throw new Error("clearTimeout is not defined")
            }
        }
    }();
    var p, h = [], d = !1, f = -1;
    l.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)for (var i = 1; i < arguments.length; i++)e[i - 1] = arguments[i];
        h.push(new s(t, e)), 1 !== h.length || d || n(o)
    }, s.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, l.title = "browser", l.browser = !0, l.env = {}, l.argv = [], l.version = "", l.versions = {}, l.on = a, l.addListener = a, l.once = a, l.off = a, l.removeListener = a, l.removeAllListeners = a, l.emit = a, l.binding = function (t) {
        throw new Error("process.binding is not supported")
    }, l.cwd = function () {
        return "/"
    }, l.chdir = function (t) {
        throw new Error("process.chdir is not supported")
    }, l.umask = function () {
        return 0
    }
}, function (t, e, n) {
    (function (t, i) {
        function r(t, e) {
            this._id = t, this._clearFn = e
        }

        var o = n(52).nextTick, s = Function.prototype.apply, a = Array.prototype.slice, c = {}, u = 0;
        e.setTimeout = function () {
            return new r(s.call(setTimeout, window, arguments), clearTimeout)
        }, e.setInterval = function () {
            return new r(s.call(setInterval, window, arguments), clearInterval)
        }, e.clearTimeout = e.clearInterval = function (t) {
            t.close()
        }, r.prototype.unref = r.prototype.ref = function () {
        }, r.prototype.close = function () {
            this._clearFn.call(window, this._id)
        }, e.enroll = function (t, e) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = e
        }, e.unenroll = function (t) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
        }, e._unrefActive = e.active = function (t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 && (t._idleTimeoutId = setTimeout(function () {
                t._onTimeout && t._onTimeout()
            }, e))
        }, e.setImmediate = "function" == typeof t ? t : function (t) {
            var n = u++, i = !(arguments.length < 2) && a.call(arguments, 1);
            return c[n] = !0, o(function () {
                c[n] && (i ? t.apply(null, i) : t.call(null), e.clearImmediate(n))
            }), n
        }, e.clearImmediate = "function" == typeof i ? i : function (t) {
            delete c[t]
        }
    }).call(e, n(53).setImmediate, n(53).clearImmediate)
}, function (t, e, n) {
    var i, r, o, s = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }, a = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e)c.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, c = {}.hasOwnProperty;
    i = n(2), r = n(55), o = function (t) {
        function e() {
            return this._remove = s(this._remove, this), this.totalPlans = s(this.totalPlans, this), this.totalPrice = s(this.totalPrice, this), this.addFromDom = s(this.addFromDom, this), this.initialize = s(this.initialize, this), e.__super__.constructor.apply(this, arguments)
        }

        return a(e, t), e.prototype.model = r, e.prototype.initialize = function () {
            return this.listenTo(this, "remove", this._remove)
        }, e.prototype.addFromDom = function (t) {
            return this.inject("cartService").ensureCart(function (e) {
                return function (n) {
                    var i;
                    return i = new r({orderToken: n.id}), i.mapFromData(t).save().done(function () {
                        return e.add(i), e.inject("vent").trigger("plan.added", i.toJSON())
                    }).fail(function (t) {
                        var n;
                        return n = i.getErrorsFromResponse(t), e.inject("logger").log("Failed to add plan to cart", n)
                    })
                }
            }(this))
        }, e.prototype.totalPrice = function () {
            var t, e, n, i, r;
            for (r = 0, i = this.models, t = 0, e = i.length; t < e; t++)n = i[t], r += n.get("amount") * n.get("quantity");
            return r
        }, e.prototype.totalPlans = function () {
            var t, e, n, i, r;
            for (r = 0, i = this.models, t = 0, e = i.length; t < e; t++)n = i[t], r += n.get("quantity");
            return r
        }, e.prototype._remove = function (t) {
            return this.inject("vent").trigger("plan.removed", t.toJSON())
        }, e
    }(i.Collection), t.exports = o
}, function (t, e, n) {
    (function (e) {
        var n, i = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, r = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)o.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, o = {}.hasOwnProperty;
        n = function (t) {
            function e() {
                return this.decrementQuantity = i(this.decrementQuantity, this), this.incrementQuantity = i(this.incrementQuantity, this), this.urlRoot = i(this.urlRoot, this), e.__super__.constructor.apply(this, arguments)
            }

            return r(e, t), e.prototype.defaults = {
                intervalCount: 1,
                quantity: 1
            }, e.prototype.idAttribute = "uniqueId", e.prototype.urlRoot = function () {
                return "/api/cart/" + this.inject("cart").id + "/plans"
            }, e.prototype.mapFromData = function (t) {
                var e;
                return e = {
                    name: t.planName,
                    id: t.planId,
                    interval: t.planInterval,
                    amount: t.planAmount,
                    url: t.planUrl
                }, null != t.planTrialPeriod && (e.trialPeriodInDays = t.planTrialPeriod), null != t.planIntervalCount && (e.intervalCount = t.planIntervalCount), null != t.planMetadata && (e.metadata = t.planMetadata), this.set(e), this
            }, e.prototype.incrementQuantity = function () {
                return this.set("quantity", ++this.attributes.quantity)
            }, e.prototype.decrementQuantity = function () {
                return this.set("quantity", --this.attributes.quantity)
            }, e
        }(e.Model), t.exports = n
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, a = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)c.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, c = {}.hasOwnProperty;
        o = n(57), r = n(62).validate, i = function (t) {
            function e() {
                return this.save = s(this.save, this), this.validation = s(this.validation, this), e.__super__.constructor.apply(this, arguments)
            }

            return a(e, t), e.prototype.validation = function () {
                return {
                    address1: {
                        validation: function (t) {
                            return function (t) {
                                if (!((null != t ? t.length : void 0) > 0))return o.getResource("errors_required")
                            }
                        }(this)
                    }, firstName: {
                        validation: function (t) {
                            return function (e) {
                                return t.inject("config").split_firstname_and_lastname ? (null != e ? e.length : void 0) > 0 ? void 0 : o.getResource("errors_required") : null
                            }
                        }(this)
                    }, name: {
                        validation: function (t) {
                            return function (t) {
                                if (!((null != t ? t.length : void 0) > 0))return o.getResource("errors_required")
                            }
                        }(this)
                    }, city: {
                        validation: function (t) {
                            return function (t) {
                                if (!((null != t ? t.length : void 0) > 0))return o.getResource("errors_required")
                            }
                        }(this)
                    }, postalCode: {
                        validation: function (t) {
                            return function (t) {
                                if (!((null != t ? t.length : void 0) > 0))return o.getResource("errors_required")
                            }
                        }(this)
                    }, email: {
                        validation: function (t) {
                            return function (e) {
                                if (t.has("email")) {
                                    if (!((null != e ? e.length : void 0) > 0))return o.getResource("errors_required");
                                    if (!r(e))return o.getResource("errors_email_must_be_valid")
                                }
                            }
                        }(this)
                    }
                }
            }, e.prototype.save = function () {
                var t, n;
                return null != (t = null != (n = this.parent) && "function" == typeof n.save ? n.save() : void 0) ? t : e.__super__.save.call(this)
            }, e
        }(e.Model), t.exports = i
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e, i) {
        var r, o, s, a, c, u, l = [].slice;
        o = n(58), c = n(38), a = n(59), s = n(60), u = n(61), r = function () {
            function t() {
            }

            return t.formElementdefaults = {
                wrap: !0,
                il8n: !0,
                id: null,
                klass: null,
                name: null,
                attrs: {},
                errors: {}
            }, t.inputDefaults = {type: "text"}, t.selectDefaults = {options: []}, t.textareaDefaults = {
                cols: 40,
                rows: 10
            }, t.templates = {
                inputWrapper: e.template(a),
                input: e.template(s),
                select: e.template(u)
            }, t.select = function (n, i, r) {
                var o, s, a;
                return s = {
                    id: i,
                    name: i,
                    value: n.get(i),
                    labelCssClass: ""
                }, a = e.extend({}, t.formElementdefaults, t.selectDefaults, s, r, {helper: t}), o = t.templates.select(a), a.wrap && (a.input = o,
                    o = t.templates.inputWrapper(a)), o
            }, t.formatMoney = function (t, n) {
                var i;
                return Snipcart.settings && Snipcart.get("i18n")(n) && (i = {
                    symbol: Snipcart.get("i18n")(n).currencySymbol,
                    thousand: Snipcart.get("i18n")(n).thousandSeparator,
                    decimal: Snipcart.get("i18n")(n).decimalSeparator,
                    precision: Snipcart.get("i18n")(n).precision,
                    format: {
                        neg: Snipcart.get("i18n")(n).negativeNumberFormat,
                        pos: Snipcart.get("i18n")(n).numberFormat,
                        zero: Snipcart.get("i18n")(n).numberFormat
                    }
                }, e.extend(o.settings.currency, i)), o.formatMoney(t)
            }, t.getResource = function () {
                var t, e, n;
                return t = arguments[0], n = 2 <= arguments.length ? l.call(arguments, 1) : [], (e = Snipcart.i18n).t.apply(e, [t].concat(l.call(n)))
            }, t.resourceExists = function (t) {
                return Snipcart.i18n.exists(t)
            }, t.joinErrorMessages = function (e) {
                var n, i, r, o;
                for (o = [], n = 0, i = e.length; n < i; n++)r = e[n], o.push(t.getResource(r));
                return o.join(", ")
            }, t.getImageSource = function (t) {
                var e, n;
                return e = null != (n = i("script#snipcart").data("base-url")) ? n : "https://app.snipcart.com", "" + e + t
            }, t.renderCustomField = function (t) {
            }, t.date = function (t) {
                var e, n;
                if (e = null != (n = c(t)) ? n : c("invalid"), e.isValid())return e.format("YYYY-MM-DD")
            }, t.datetime = function (t) {
                var e, n;
                if (e = null != (n = c(t)) ? n : c("invalid"), e.isValid())return e.format("YYYY-MM-DD HH:mm")
            }, t.textbox = function (t, n, i) {
                var r;
                return r = e.extend(null != i ? i : {}, {type: "text"}), this.input(t, n, r)
            }, t.input = function (n, i, r) {
                var o, s, a, c, u, l;
                return a = null != (c = "function" == typeof n.toJSON ? n.toJSON() : void 0) ? c : n, o = {
                    id: i,
                    name: i,
                    attribute: i,
                    label: "",
                    type: "text",
                    cssClass: "",
                    labelCssClass: "",
                    value: a[i],
                    errors: null != (u = n.errors) ? u : {},
                    model: n,
                    attrs: {}
                }, l = e.extend({}, t.formElementdefaults, {helper: t}, o, r), s = t.templates.input(l), l.wrap && (l.input = s, s = t.templates.inputWrapper(l)), s
            }, t.routeLink = function (t, n) {
                var i, r;
                return i = '<a href="#" class="snipcart-route-link" data-route="<%= route %>"><%= text %></a>', (r = e.template(i))({
                    route: t,
                    text: n
                })
            }, t.renderLoader = function () {
                var t;
                return t = "<div class='snipcart-loader'>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n  <div></div>\n</div>"
            }, t
        }(), t.exports = r
    }).call(e, n(5), n(7))
}, function (t, e, n) {
    !function (n, i) {
        function r(t) {
            return !!("" === t || t && t.charCodeAt && t.substr)
        }

        function o(t) {
            return d ? d(t) : "[object Array]" === f.call(t)
        }

        function s(t) {
            return t && "[object Object]" === f.call(t)
        }

        function a(t, e) {
            var n;
            t = t || {}, e = e || {};
            for (n in e)e.hasOwnProperty(n) && null == t[n] && (t[n] = e[n]);
            return t
        }

        function c(t, e, n) {
            var i, r, o = [];
            if (!t)return o;
            if (h && t.map === h)return t.map(e, n);
            for (i = 0, r = t.length; i < r; i++)o[i] = e.call(n, t[i], i, t);
            return o
        }

        function u(t, e) {
            return t = Math.round(Math.abs(t)), isNaN(t) ? e : t
        }

        function l(t) {
            var e = p.settings.currency.format;
            return "function" == typeof t && (t = t()), r(t) && t.match("%v") ? {
                pos: t,
                neg: t.replace("-", "").replace("%v", "-%v"),
                zero: t
            } : t && t.pos && t.pos.match("%v") ? t : r(e) ? p.settings.currency.format = {
                pos: e,
                neg: e.replace("%v", "-%v"),
                zero: e
            } : e
        }

        var p = {};
        p.version = "0.4.1", p.settings = {
            currency: {
                symbol: "$",
                format: "%s%v",
                decimal: ".",
                thousand: ",",
                precision: 2,
                grouping: 3
            }, number: {precision: 0, grouping: 3, thousand: ",", decimal: "."}
        };
        var h = Array.prototype.map, d = Array.isArray, f = Object.prototype.toString, m = p.unformat = p.parse = function (t, e) {
            if (o(t))return c(t, function (t) {
                return m(t, e)
            });
            if (t = t || 0, "number" == typeof t)return t;
            e = e || p.settings.number.decimal;
            var n = new RegExp("[^0-9-" + e + "]", ["g"]), i = parseFloat(("" + t).replace(/\((.*)\)/, "-$1").replace(n, "").replace(e, "."));
            return isNaN(i) ? 0 : i
        }, y = p.toFixed = function (t, e) {
            e = u(e, p.settings.number.precision);
            var n = Math.pow(10, e);
            return (Math.round(p.unformat(t) * n) / n).toFixed(e)
        }, g = p.formatNumber = p.format = function (t, e, n, i) {
            if (o(t))return c(t, function (t) {
                return g(t, e, n, i)
            });
            t = m(t);
            var r = a(s(e) ? e : {
                precision: e,
                thousand: n,
                decimal: i
            }, p.settings.number), l = u(r.precision), h = t < 0 ? "-" : "", d = parseInt(y(Math.abs(t || 0), l), 10) + "", f = d.length > 3 ? d.length % 3 : 0;
            return h + (f ? d.substr(0, f) + r.thousand : "") + d.substr(f).replace(/(\d{3})(?=\d)/g, "$1" + r.thousand) + (l ? r.decimal + y(Math.abs(t), l).split(".")[1] : "")
        }, _ = p.formatMoney = function (t, e, n, i, r, h) {
            if (o(t))return c(t, function (t) {
                return _(t, e, n, i, r, h)
            });
            t = m(t);
            var d = a(s(e) ? e : {
                symbol: e,
                precision: n,
                thousand: i,
                decimal: r,
                format: h
            }, p.settings.currency), f = l(d.format), y = t > 0 ? f.pos : t < 0 ? f.neg : f.zero;
            return y.replace("%s", d.symbol).replace("%v", g(Math.abs(t), u(d.precision), d.thousand, d.decimal))
        };
        p.formatColumn = function (t, e, n, i, h, d) {
            if (!t)return [];
            var f = a(s(e) ? e : {
                symbol: e,
                precision: n,
                thousand: i,
                decimal: h,
                format: d
            }, p.settings.currency), y = l(f.format), _ = y.pos.indexOf("%s") < y.pos.indexOf("%v"), v = 0, w = c(t, function (t, e) {
                if (o(t))return p.formatColumn(t, f);
                t = m(t);
                var n = t > 0 ? y.pos : t < 0 ? y.neg : y.zero, i = n.replace("%s", f.symbol).replace("%v", g(Math.abs(t), u(f.precision), f.thousand, f.decimal));
                return i.length > v && (v = i.length), i
            });
            return c(w, function (t, e) {
                return r(t) && t.length < v ? _ ? t.replace(f.symbol, f.symbol + new Array(v - t.length + 1).join(" ")) : new Array(v - t.length + 1).join(" ") + t : t
            })
        }, "undefined" != typeof t && t.exports && (e = t.exports = p), e.accounting = p
    }(this)
}, function (t, e) {
    t.exports = "<div class=\"<%= name in errors ? 'error' : '' %>\">\r\n    <% if (label) { %>\r\n    <label for=\"<%= id %>\" class=\"<%= labelCssClass == '' ? '' : labelCssClass %>\"><%= il8n ? helper.getResource(label) : label %></label>\r\n    <% } %>\r\n    <%= input %>\r\n</div>"
}, function (t, e) {
    t.exports = '<input type="<%= type %>"\r\n    class="<%= cssClass != null ? cssClass : \'\' %> <%= name in errors ? \'error\' : \'\' %>"\r\n\r\n    <% if (name != null) { %>\r\n        name="<%= name %>"\r\n    <% } %>\r\n\r\n    <% if (value != null) { %>\r\n        value="<%= value %>"\r\n    <% } %>\r\n\r\n    <% if (id != null) { %>\r\n        id="<%= id %>"\r\n    <% } %>\r\n\r\n    <% for (var key in attrs) { %>\r\n        <%= key %><%= attrs[key] != null ? (\'="\' + attrs[key] + \'"\') : \'\' %>\r\n    <% } %>\r\n/>\r\n\r\n<% if (name in errors) { %>\r\n    <p class="snip-form__error"><%= helper.joinErrorMessages(errors[name]) %></p>\r\n<% } %>'
}, function (t, e) {
    t.exports = '<select\n    class="<%= klass != null ? klass : \'\' %>"\n\n    <% if (name != null) { %>\n        name="<%= name %>"\n    <% } %>\n\n    <% if (id != null) { %>\n        id="<%= id %>"\n    <% } %>\n\n    <% for (var key in attrs) { %>\n        <%= key %><%= attrs[key] != null ? (\'="\' + attrs[key] + \'"\') : \'\' %>\n    <% } %>\n>\n\n    <% _.forEach(options, function(option) { %>\n\n        <option\n            <% if (option.value != null) { %>\n                value="<%= option.value %>"\n            <% } %>\n            <% if (option.value == value) { %>\n                selected\n            <% } %>\n            >\n            <%= il8n ? helper.getResource(option.text) : option.text %>\n        </option>\n\n    <% }) %>\n\n</select>\n\n<% if (name in errors) { %>\n    <span class="errors"><%= errors[name].join(\', \') %></span>\n<% } %>'
}, function (t, e) {
    "use strict";
    function n(t) {
        if (!t)return !1;
        if (t.length > 254)return !1;
        var e = i.test(t);
        if (!e)return !1;
        var n = t.split("@");
        if (n[0].length > 64)return !1;
        var r = n[1].split(".");
        return !r.some(function (t) {
            return t.length > 63
        })
    }

    var i = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    e.validate = n
}, function (t, e, n) {
    (function (e, i) {
        var r, o, s = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, a = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)c.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, c = {}.hasOwnProperty;
        o = n(57), r = function (t) {
            function e() {
                return this.toJSON = s(this.toJSON, this), this.displayType = s(this.displayType, this), this.displayLast4Digits = s(this.displayLast4Digits, this), this.displayable = s(this.displayable, this), this.validation = s(this.validation, this), e.__super__.constructor.apply(this, arguments)
            }

            return a(e, t), e.prototype.validation = function () {
                return {
                    number: {
                        validation: function (t) {
                            return function (t) {
                                if (!((null != t ? t.length : void 0) > 0))return o.getResource("errors_required")
                            }
                        }(this)
                    }, cvc: {
                        validation: function (t) {
                            return function (t) {
                                if (!((null != t ? t.length : void 0) > 0))return o.getResource("errors_required")
                            }
                        }(this)
                    }, ownerName: {
                        validation: function (t) {
                            return function (t) {
                                if (!((null != t ? t.length : void 0) > 0))return o.getResource("errors_required")
                            }
                        }(this)
                    }
                }
            }, e.prototype.displayable = function () {
                return {
                    ownerName: this.get("ownerName"),
                    last4Digits: this.displayLast4Digits(),
                    type: this.displayType()
                }
            }, e.prototype.displayLast4Digits = function () {
                var t;
                return this.get("last4Digits") ? this.get("last4Digits") : this.get("number") ? (t = this.get("number"), t.substr(t.length - 4, 4)) : void 0
            }, e.prototype.displayType = function () {
                var t, e;
                if (this.get("type"))return t = i.find(this.inject("config").credit_cards, {type: this.get("type")}), null != (e = null != t ? t.display : void 0) ? e : type
            }, e.prototype.toJSON = function () {
                var t;
                return t = e.__super__.toJSON.call(this), t.last4Digits = this.displayLast4Digits(), t
            }, e
        }(e.Model), t.exports = r
    }).call(e, n(2), n(5))
}, function (t, e, n) {
    (function (e, n, i) {
        var r, o, s, a = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, c = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)u.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, u = {}.hasOwnProperty;
        s = function (t) {
            function e() {
                return this.process = a(this.process, this), e.__super__.constructor.apply(this, arguments)
            }

            return c(e, t), e.prototype.process = function (t, e) {
                var i, r, o;
                return r = new n.Deferred, Stripe.setPublishableKey(this.inject("preloaded").settings.gateway.publicApiKey), o = {
                    number: e.card.number,
                    cvc: e.card.cvc,
                    exp_month: e.card.expirationMonth,
                    exp_year: e.card.expirationYear,
                    name: e.card.ownerName
                }, t.get("billingAddress") && (i = t.get("billingAddress").toJSON(), o.address_line1 = i.address1, o.address_line2 = i.address2, o.address_city = i.city, o.address_state = i.province, o.address_zip = i.postalCode, o.address_country = i.country), Stripe.createToken(o, function (t) {
                    return function (t, n) {
                        return n.error ? r.reject({payment: [n.error.message]}) : r.resolve({
                            card: {
                                number: n.card.last4,
                                ownerName: n.card.name,
                                type: e.card.type,
                                gatewayToken: n.id
                            }
                        })
                    }
                }(this)), r
            }, e
        }(e.Service), r = function (t) {
            function e() {
                return this.process = a(this.process, this), e.__super__.constructor.apply(this, arguments)
            }

            return c(e, t), e.prototype.process = function (t, e) {
                var i, r;
                return r = new n.Deferred, i = {
                    number: e.card.number,
                    cvc: e.card.cvc,
                    exp_month: e.card.expirationMonth,
                    exp_year: e.card.expirationYear,
                    name: e.card.ownerName,
                    currency: this.inject("cart").get("currency"),
                    amount_int: 100 * t.get("total")
                }, paymill.createToken(i, function (t) {
                    return function (t, n) {
                        return t ? r.reject({payment: [t.apierror]}) : r.resolve({
                            card: {
                                number: e.card.last4Digits,
                                ownerName: e.card.ownerName,
                                type: e.card.type,
                                gatewayToken: n.token
                            }
                        })
                    }
                }(this)), r
            }, e
        }(e.Service), o = function (t) {
            function e() {
                return this.process = a(this.process, this), e.__super__.constructor.apply(this, arguments)
            }

            return c(e, t), e.prototype.process = function (t, e) {
                var r, o, s, a, c, u, l;
                return a = new n.Deferred, l = this.inject("settings"), s = new Pin.Api(l.gateway.pinPublishableKey, l.pinMode), r = null != (c = null != (u = t.get("billingAddress")) ? u.toJSON() : void 0) ? c : {}, o = {
                    number: e.card.number,
                    name: e.card.ownerName,
                    cvc: e.card.cvc,
                    expiry_month: e.card.expirationMonth,
                    expiry_year: e.card.expirationYear,
                    address_line1: r.address1,
                    address_line2: r.address2,
                    address_city: r.city,
                    address_state: r.province,
                    address_postcode: r.postalCode,
                    address_country: r.country
                }, s.createCardToken(o).then(function (t) {
                    return function (t) {
                        return a.resolve({
                            card: {
                                number: e.card.type.last4Digits,
                                ownerName: e.card.ownerName,
                                type: e.card.type,
                                gatewayToken: t.token
                            }
                        })
                    }
                }(this), function (t) {
                    return function (t) {
                        var e;
                        return e = i.map(t.messages, function (t) {
                            return t.message
                        }), a.reject({errors: {payment: e}})
                    }
                }(this))
            }, e
        }(e.Service), t.exports = {Stripe: s, Paymill: r, Pin: o}
    }).call(e, n(2), n(7), n(5))
}, function (t, e, n) {
    (function (e, i) {
        var r, o, s = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, a = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)c.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, c = {}.hasOwnProperty;
        r = n(42), o = function (t) {
            function e() {
                return this.parse = s(this.parse, this), e.__super__.constructor.apply(this, arguments)
            }

            return a(e, t), e.prototype.parse = function (t) {
                var e, n, o, s, a, c, u;
                e = [], o = [];
                for (s in t)if (u = t[s], s.indexOf("cartCustom") !== -1)switch (c = s.replace("cartCustom", ""), c = c.replace(/(\d+)/, "$1*"), a = c.split("*")[0], n = c.split("*")[1].toLowerCase(), e[a] || (e[a] = {}, e[a].type = "textbox", e[a].name = "", e[a].value = "", e[a].required = !1), n) {
                    case"options":
                        "true|false" === u ? (e[a].type = "checkbox", e[a].options = u) : (e[a].type = "dropdown", e[a].options = u);
                        break;
                    case"required":
                        u && (e[a].required = !0);
                        break;
                    case"name":
                        e[a].name = u;
                        break;
                    case"value":
                        e[a].value = u;
                        break;
                    case"type":
                        e[a].type = u
                }
                return i.each(e, function (t) {
                    return function (t) {
                        var e;
                        if (t)return e = new r({
                            value: t.value,
                            name: t.name,
                            type: t.type,
                            options: t.options,
                            required: t.required
                        }), o.push(e)
                    }
                }(this)), o
            }, e
        }(e.Service), t.exports = o
    }).call(e, n(2), n(5))
}, function (t, e, n) {
    (function (e, i) {
        var r, o, s = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        };
        r = n(42), o = function () {
            function t() {
                this.bootstrap = s(this.bootstrap, this), this._getData = s(this._getData, this)
            }

            return t.prototype._getData = function () {
                return e("#snipcart").data()
            }, t.prototype.bootstrap = function (t, e) {
                var n, o, s, a, c, u, l;
                if (n = [], 0 === t.collections.customFields.size()) {
                    u = this._getData();
                    for (s in u)if (l = u[s], s.indexOf("cartCustom") !== -1)switch (c = s.replace("cartCustom", ""), c = c.replace(/(\d+)/, "$1*"), a = c.split("*")[0], o = c.split("*")[1].toLowerCase(), n[a] || (n[a] = {}, n[a].type = "textbox", n[a].name = "", n[a].value = "", n[a].required = !1), o) {
                        case"options":
                            "true|false" === l ? (n[a].type = "checkbox", n[a].options = l) : (n[a].type = "dropdown", n[a].options = l);
                            break;
                        case"required":
                            l && (n[a].required = !0);
                            break;
                        case"name":
                            n[a].name = l;
                            break;
                        case"value":
                            n[a].value = l;
                            break;
                        case"type":
                            n[a].type = l
                    }
                    i.each(n, function (e) {
                        return function (e) {
                            var n;
                            if (e)return n = new r({
                                value: e.value,
                                name: e.name,
                                type: e.type,
                                options: e.options,
                                required: e.required
                            }), t.collections.customFields.add(n)
                        }
                    }(this))
                }
                return e && e(this), this
            }, t
        }(), t.exports = o
    }).call(e, n(7), n(5))
}, function (t, e, n) {
    (function (e, i, r) {
        var o, s, a, c, u, l, p, h, d, f, m, y, g, _ = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, v = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)w.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, w = {}.hasOwnProperty, b = [].slice;
        h = n(39), y = n(57), m = n(68), a = n(71), f = n(73), d = n(75), l = n(77), p = n(80), c = n(82), g = n(84), u = n(87), s = n(3), o = function (t) {
            function e() {
                return this.goToRoute = _(this.goToRoute, this), this.preventClick = _(this.preventClick, this), this.clearFlashMessages = _(this.clearFlashMessages, this), this.showFlashMessage = _(this.showFlashMessage, this), this.highlightStep = _(this.highlightStep, this), this.showCart = _(this.showCart, this), this.cartItemsChanged = _(this.cartItemsChanged, this), this.addingItem = _(this.addingItem, this), this.loadComplete = _(this.loadComplete, this), this.load = _(this.load, this), this.hideLoader = _(this.hideLoader, this), this.showLoader = _(this.showLoader, this), this.setContentView = _(this.setContentView, this), this.hideTotal = _(this.hideTotal, this), this.hideSteps = _(this.hideSteps, this), this.promocodeDeletedAtCheckout = _(this.promocodeDeletedAtCheckout, this), this.show = _(this.show, this), this.hide = _(this.hide, this), this.close = _(this.close, this), this.setTotal = _(this.setTotal, this), this.planAdded = _(this.planAdded, this), this.maxed = _(this.maxed, this), this.updateTotal = _(this.updateTotal, this), this.setClasses = _(this.setClasses, this), this.userLogged = _(this.userLogged, this), this.shipToBillingAddressChanged = _(this.shipToBillingAddressChanged, this), this._getMenuViewById = _(this._getMenuViewById, this), this._renderMenuItem = _(this._renderMenuItem, this), this._renderMenu = _(this._renderMenu, this), this.getActiveStep = _(this.getActiveStep, this), this.showEmptyView = _(this.showEmptyView, this), this.showError = _(this.showError, this), this.crawlingFailed = _(this.crawlingFailed, this), this.render = _(this.render, this), this.placeOrder = _(this.placeOrder, this), this.hidePlaceOrderButton = _(this.hidePlaceOrderButton, this), this.showPlaceOrderButton = _(this.showPlaceOrderButton, this), this.cartInjected = _(this.cartInjected, this), this.initialize = _(this.initialize, this), this.clickOnContent = _(this.clickOnContent, this), e.__super__.constructor.apply(this, arguments)
            }

            return v(e, t), e.prototype.tagName = "div", e.prototype.menuSteps = [], e.prototype.events = {
                'click a:not([target="_blank"])': "preventClick",
                "click a.snipcart-route-link": "goToRoute",
                "click #snipcart-close": "close",
                "click #snipcart-steps li": "navigateToStep",
                "click #snipcart-cartitems-continue-top": "close",
                "click #snipcart-main-content": "clickOnContent",
                "click #snipcart-header-place-order": "placeOrder"
            }, e.prototype.clickOnContent = function () {
                return this.inject("vent").trigger("content.clicked")
            }, e.prototype.regions = {
                title: "#snipcart-title",
                loggedUser: "#snipcart-loggeduser-container",
                steps: "#snipcart-steps",
                content: "#snipcart-sub-content",
                total: "#snipcart-header-total",
                header: "#snipcart-header"
            }, e.prototype.initialize = function (t) {
                var e;
                return this.options = t, this.subviews = [], this.updateTotal(), e = this.options.app, this.listenTo(e.collections.items, "add", this.cartItemsChanged), this.listenTo(e.collections.items, "remove", this.updateTotal), this.listenTo(e.collections.items, "adding", this.addingItem), this.listenTo(e.collections.items, "maxed", this.maxed), this.listenTo(e.collections.discounts, "remove", this.updateTotal), this.listenTo(e.collections.plans, "add", this.planAdded), this.listenTo(e.collections.plans, "model.updated", this.planAdded), this.listenTo(e.collections.plans, "update", this.planAdded), this.listenTo(this.inject("vent"), "reset", this.updateTotal), this.listenTo(this.inject("vent"), "promocode:deletedAtCheckout", this.promocodeDeletedAtCheckout), this.listenTo(this.inject("vent"), "user.logged", this.userLogged), this.listenTo(this.inject("vent"), "shippingenabled:change", this._renderMenu), this.listenTo(this.inject("vent"), "crawlingfailed", this.crawlingFailed), this.listenTo(this.inject("vent"), "flash", this.showFlashMessage), this.listenTo(this.inject("vent"), "cart.injected", this.cartInjected), i(document).on("click", ".snipcart-add-item", function (t) {
                    var e, n;
                    return e = i(t.currentTarget), e.view ? (n = e.view, n.setElement(e), n.parseElement()) : (n = new m, n.setElement(e)), n.add(t)
                }), i(document).on("click", ".snipcart-add-plan", function (t) {
                    return function (e) {
                        var n;
                        return n = i(e.currentTarget), t.inject().execute("plan.add", n.data())
                    }
                }(this))
            }, e.prototype.cartInjected = function (t) {
                return t.on("change:shipToBillingAddress", this.shipToBillingAddressChanged)
            }, e.prototype.showPlaceOrderButton = function () {
                return this.$("#snipcart-header-place-order").show()
            }, e.prototype.hidePlaceOrderButton = function () {
                return this.$("#snipcart-header-place-order").hide()
            }, e.prototype.placeOrder = function (t) {
                return this.prevent(t), this.trigger("placeorder.clicked")
            }, e.prototype.render = function () {
                var t, e;
                return e = "https://snipcart.com/security?utm_source=cart_referral&utm_medium=powered_by&utm_campaign=powered_by_ref", this.options.app.settings.domain && (e += "&utm_term=" + this.options.app.settings.domain), t = this.templates.main({
                    helper: y,
                    hasCustomFields: this.options.app.hasCustomFields(),
                    settings: this.options.app.settings,
                    powered_by_url: e,
                    showContinueShopping: !1
                }), this.$el.html(t), this.$el.addClass("snip-layout"), this.updateTotal(), this.$el.appendTo(i("body")), this._renderMenu(), this.setClasses(), this
            }, e.prototype.crawlingFailed = function (t) {
                var e, n, i, o, s;
                for (s = !1, i = 0, o = t.length; i < o; i++)n = t[i], s || (s = "OutOfStock" === n.status);
                return s ? void this.inject("vent").trigger("items.outofstock", t) : (e = r.map(t, function (t) {
                    switch (t.status) {
                        case"Unreachable":
                            return y.getResource("error_crawling_unreachable", t.productName, t.crawledUrl);
                        case"NotFound":
                            return y.getResource("error_crawling_product_not_found", t.productName, t.crawledUrl);
                        case"PriceNotFound":
                            return y.getResource("error_crawling_price_not_found", t.productName, t.crawledUrl);
                        case"PriceDoesNotMatch":
                            return y.getResource("error_crawling_price_doesnot_match", t.productName, y.formatMoney(t.price), y.formatMoney(t.possiblePrices[0]), t.crawledUrl)
                    }
                }), this.showError({
                    errors: {errors: e},
                    title: "Live" === this.app.settings.mode ? y.getResource("error_crawlingfailed_title") : y.getResource("error_crawlingfailed_title_test"),
                    hideErrors: "Live" === this.app.settings.mode
                }))
            }, e.prototype.showError = function (t) {
                var e, n;
                return e = r.extend(t, {app: this.app}), n = new l(e), this.loadComplete(), this.setContentView(n), this.show()
            }, e.prototype.showEmptyView = function () {
                var t;
                return t = new c, this.setContentView(t), this.show()
            }, e.prototype.getActiveStep = function () {
                return this.$("#snipcart-steps li.js-active").data("navigate-to")
            }, e.prototype._renderMenu = function () {
                var t, e, n;
                return e = this.inject("cart"), n = null != e && "function" == typeof e.get ? e.get("shipToBillingAddress") : void 0, t = this.getActiveStep(), this.$("#snipcart-steps").empty(), this.menuSteps = [], this._renderMenuItem(t, new d({
                    id: "snipcart-checkout-step",
                    navigateTo: "checkout",
                    icon: "basket",
                    label: "my_cart_content"
                })), this._renderMenuItem(t, new d({
                    id: "snipcart-orderinfos-step",
                    navigateTo: "infos",
                    icon: "checklist",
                    label: "order_infos",
                    displayable: function (t) {
                        return function () {
                            return t.options.app.hasCustomFields()
                        }
                    }(this)
                })), this._renderMenuItem(t, new d({
                    id: "snipcart-billing-address-step",
                    navigateTo: "billing-address",
                    icon: "receipt",
                    label: "billing_address"
                })), this._renderMenuItem(t, new d({
                    id: "snipcart-shipping-address-step",
                    navigateTo: "shipping-address",
                    hidden: n,
                    icon: "letter",
                    label: "shipping_address",
                    displayable: function (t) {
                        return function () {
                            return t.options.app.shippingEnabled()
                        }
                    }(this)
                })), this._renderMenuItem(t, new d({
                    id: "snipcart-shipping-method-step",
                    navigateTo: "shipping-method",
                    icon: "truck",
                    label: "shipping_method",
                    displayable: function (t) {
                        return function () {
                            return t.options.app.shippingEnabled()
                        }
                    }(this)
                })), this._renderMenuItem(t, new d({
                    id: "snipcart-payment-method-step",
                    navigateTo: "payment-method",
                    icon: "credit-cart",
                    label: "payment_method"
                })), this._renderMenuItem(t, new d({
                    id: "snipcart-confirm-step",
                    navigateTo: "confirm",
                    icon: "checklist",
                    label: "confirm_order"
                })), this.setClasses()
            }, e.prototype._renderMenuItem = function (t, e) {
                if ((null == e.displayable || e.displayable()) && (this.menuSteps.push(e), e.render().$el.appendTo("#snipcart-steps"), t === e.navigateTo))return e.$el.addClass("js-active")
            }, e.prototype._getMenuViewById = function (t) {
                return r.find(this.menuSteps, function (e) {
                    return e.id === t
                })
            }, e.prototype.shipToBillingAddressChanged = function (t, e) {
                var n;
                return n = this._getMenuViewById("snipcart-shipping-address-step"), e ? null != n && n.hide() : null != n && n.show(), this.setClasses()
            }, e.prototype.userLogged = function (t) {
                return this.currentUserView = new a({
                    app: this.options.app,
                    model: t
                }), this.currentUserView.render().$el.appendTo(this.$("#snipcart-current-user"))
            }, e.prototype.setClasses = function () {
                var t, e;
                return e = r.filter(this.menuSteps, function (t) {
                    return !t.hidden
                }), this.$("#snipcart-steps").removeClass(), t = e.length, this.$("#snipcart-steps").addClass("snip-steps snip-steps--" + t)
            }, e.prototype.updateTotal = function () {
                var t, e, n;
                return (null != (t = this.inject("cart")) ? t.has("total") : void 0) && (n = y.formatMoney(null != (e = this.inject("cart")) ? e.get("total") : void 0)), this.$("#snipcart-amount").text(n)
            }, e.prototype.maxed = function (t, e) {
                if (this.inject("flash").showMessage({
                        type: "warn",
                        message: this.inject("viewhelper").getResource("notifications_item_not_added_due_to_max_quantity")
                    }), !e)return this.cartItemsChanged()
            }, e.prototype.planAdded = function () {
                return this.visible || !this.shouldAutopop() || this.inject("context").cartIsEmpty() || s.history.navigate("cart", !0), this.updateTotal()
            }, e.prototype.shouldAutopop = function () {
                var t, e;
                return e = this.inject("config"), r.has(e, "show_cart_automatically") ? e.show_cart_automatically : (t = i("script#snipcart"), null == t.data("autopop") || t.data("autopop"))
            }, e.prototype.setTotal = function (t) {
                return this.$("#snipcart-amount").text(y.formatMoney(t))
            }, e.prototype.close = function (t) {
                var e;
                return null != t && (t.preventDefault(), t.stopPropagation()), e = this.visible, e && this.inject("vent").trigger("cart.closing"), i(window).unbind("resize.app"), this.hide(), s.history.navigate("", !0)
            }, e.prototype.navigateToStep = function (t) {
                var e, n;
                if (t.preventDefault(), e = this.$(t.currentTarget), n = !0, this.currentView && null != this.currentView.validate && (n = this.currentView.validate()), n)return s.history.navigate(e.data("navigate-to"), !0)
            }, e.prototype.hide = function () {
                var t;
                if (t = this.visible, this.visible = !1, i("body").removeClass("snip-open"), i("body").children().each(function () {
                        if (i(this).hasClass("snipcart-print-no-show"))return i(this).removeClass("snipcart-print-no-show")
                    }), this.$el.hide(), this.clearFlashMessages(), t)return this.inject("vent").trigger("cart.closed")
            }, e.prototype.show = function () {
                var t;
                return t = !this.visible, this.visible = !0, this.$el.show(), i("body").addClass("snip-open"), i("body").children().each(function () {
                    if (!i(this).hasClass("snip-layout"))return i(this).addClass("snipcart-print-no-show")
                }), t && (this.cleanNotices(), this.inject("vent").trigger("cart.opened")), this
            }, e.prototype.promocodeDeletedAtCheckout = function () {
                return this.addErrorNotice(y.getResource("promocode_deleted_at_checkout"))
            }, e.prototype.addErrorNotice = function (t) {
                return this.$("#snipcart-global-notices").addClass("snipcart-error"), this.$("#snipcart-global-notices").text(t)
            }, e.prototype.cleanNotices = function () {
                return this.$("#snipcart-global-notices").text(""), this.$("#snipcart-global-notices").removeClass("snipcart-error")
            }, e.prototype.templates = {main: g}, e.prototype.setTitle = function (t) {
                return this.$(this.regions.title).text(t)
            }, e.prototype.hideSteps = function () {
                return this.$(this.regions.steps).hide()
            }, e.prototype.hideTotal = function () {
                return this.$(this.regions.header).find(".snip-header__title").addClass("js-show"), this.$(this.regions.total).hide()
            }, e.prototype.setContentView = function (t) {
                var e, n;
                return this.loadComplete(), null != this.currentView && (this.currentView.close(), this.currentView = null), this.cleanNotices(), this.currentView = t, null != this.currentView.pageName && this.inject("vent").trigger("page.change", this.currentView.pageName), null != t.pageName ? i(".snip-layout__main-container").attr("id", "snip-layout-" + t.pageName) : i(".snip-layout__main-container").removeAttr("id"), null != t.title ? this.$(this.regions.title).text(t.title) : this.$(this.regions.title).text(y.getResource("my_cart")), this.options.app.blocked && (null != this.currentView && (this.currentView.close(), this.currentView = null), this.currentView = new f, this.setTitle(y.getResource("payment_require_title")), this.show()), this.currentView.$el.addClass("snipcart-step"), e = this.inject("config"), this.currentView.showContinueShopping && e.show_continue_shopping ? (this.$("#snipcart-cartitems-continue-top").addClass("js-show"), this.$("#snipcart-close").addClass("js-hidden")) : (this.$("#snipcart-cartitems-continue-top").removeClass("js-show"), this.$("#snipcart-close").removeClass("js-hidden")), this.$("#snipcart-header-place-order").hide(), this.currentView.hideStep && this.$(this.regions.steps).hide(), this.currentView.hideStep || this.$(this.regions.steps).show(), this.currentView.hideTotal ? (this.$(this.regions.total).hide(), this.$(this.regions.header).find(".snip-header__title").addClass("js-show")) : (this.$(this.regions.total).show(), this.$(this.regions.header).find(".snip-header__title").removeClass("js-show")), this.$("#snipcart-steps li").removeClass("js-active"), this.currentView.tab && this.highlightStep(this.currentView.tab), this.currentView.app = this.options.app, null != (n = this.currentView.render()) ? n.$el.appendTo(this.regions.content) : void 0
            }, e.prototype.showLoader = function (t) {
                var e, n;
                return e = function (t, e) {
                    return setTimeout(e, t)
                }, n = {delay: 0}, r.extend(n, t), this._loaderVisible = !0, e(n.delay, function (t) {
                    return function () {
                        if (t._loaderVisible)return t.$("#snipcart-global-loader").removeClass("js-hidden")
                    }
                }(this))
            }, e.prototype.hideLoader = function () {
                return this._loaderVisible = !1, this.$("#snipcart-global-loader").addClass("js-hidden")
            }, e.prototype.load = function () {
                var t, e, n, i;
                return t = 1 <= arguments.length ? b.call(arguments, 0) : [], n = function (t, e) {
                    return setTimeout(e, t)
                }, e = {
                    hideContent: !0,
                    loadingElement: "#snipcart-loading-container",
                    waitsFor: 300
                }, r.extend(e, null != (i = null != t ? t[0] : void 0) ? i : {}), this.loading = !0, n(e.waitsFor, function (n) {
                    return function () {
                        if (n.loading)return e.hideContent && n.$("#snipcart-sub-content").hide(), n.showLoader(), n.loadingView && n.loadingView.remove(), n.loadingView = function (t, e, n) {
                            n.prototype = t.prototype;
                            var i = new n, r = t.apply(i, e);
                            return Object(r) === r ? r : i
                        }(p, t, function () {
                        }), n.loadingView.hideStep && n.hideSteps(), n.loadingView.hideTotal && n.hideTotal(), n.loadingView.render().$el.appendTo(n.$(e.loadingElement)), n.shouldAutopop() && n.show(), n.loading = !1
                    }
                }(this))
            }, e.prototype.loadComplete = function () {
                if (this.loading = !1, this.hideLoader(), this.$("#snipcart-sub-content").show(), this.loadingView)return this.loadingView.remove()
            }, e.prototype.addingItem = function () {
                return this.load({
                    message: y.getResource("item_is_being_added"),
                    hideStep: !0,
                    hideTotal: !1,
                    delay: 400
                })
            }, e.prototype.cartItemsChanged = function (t) {
                return this.inject("cart").clearShippingInformation(), this.loadComplete(), this.updateTotal(), this.showCart()
            }, e.prototype.showCart = function () {
                if (!this.visible && this.shouldAutopop() && (s.history.navigate("cart", !0), this.visible = !0), this.visible && this.preloading)return this.preloading = !1, s.history.navigate("cart", !0)
            }, e.prototype._timeout = function (t, e) {
                return setTimeout(e, t)
            }, e.prototype.highlightStep = function (t) {
                return this.$("#snipcart-steps li").removeClass("js-active"), this.$(t).addClass("js-active")
            }, e.prototype.showFlashMessage = function (t) {
                return t.renderTo("#snipcart-flash-messages")
            }, e.prototype.clearFlashMessages = function () {
                return this.$("#snipcart-flash-messages").empty()
            }, e.prototype.preventClick = function (t) {
                return t.preventDefault()
            }, e.prototype.goToRoute = function (t) {
                var e;
                return t.preventDefault(), e = i(t.currentTarget), s.history.navigate(e.data("route"), !0)
            }, e
        }(e.View), t.exports = o
    }).call(e, n(2), n(7), n(5))
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, a = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)c.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, c = {}.hasOwnProperty;
        r = n(69), i = n(70), o = function (t) {
            function e() {
                return this.add = s(this.add, this), e.__super__.constructor.apply(this, arguments)
            }

            return a(e, t), e.prototype.events = {click: "add"}, e.prototype.add = function (t) {
                var e, n;
                if (t.preventDefault(), null == t.isPropagationStopped || !t.isPropagationStopped())return t.stopPropagation(), n = new i, e = n.parse(this.$el.data()), this.inject("api").items.add(e).then(function (t) {
                    return function (e) {
                        return t.inject("mainview").visible = !1, t.inject("mainview").showCart(), t.inject("collections").items.trigger("added", e)
                    }
                }(this)).fail(function (t) {
                    return function (e) {
                        if ("max_quantity_reached" === (null != e ? e.reason : void 0))return t.inject("mainview").visible = !1, t.inject("mainview").showCart()
                    }
                }(this))
            }, e
        }(e.View), t.exports = o
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var n, i = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, r = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)o.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, o = {}.hasOwnProperty;
        n = function (t) {
            function e() {
                return this.parseDataAttributes = i(this.parseDataAttributes, this), this.setDataAttributes = i(this.setDataAttributes, this), e.__super__.constructor.apply(this, arguments)
            }

            return r(e, t), e.prototype.defaults = {
                name: "",
                id: "",
                price: 0,
                originalPrice: 0,
                url: "",
                weight: 0,
                description: "",
                image: "",
                initialData: null,
                stackable: !0,
                minQuantity: null,
                maxQuantity: null,
                quantity: 1,
                duplicatable: !1,
                taxes: []
            }, e.prototype.canBeDuplicated = function () {
                return !this.get("stackable") && this.get("duplicatable")
            }, e.prototype.setDataAttributes = function (t) {
                return this.set(this.parseDataAttributes(t))
            }, e.prototype.parseDataAttributes = function (t) {
                var e;
                return e = {
                    name: t.itemName,
                    description: t.itemDescription,
                    image: t.itemImage,
                    maxQuantity: t.itemMaxQuantity,
                    minQuantity: t.itemMinQuantity
                }, null != t.itemTaxes && (e.taxes = t.itemTaxes.split("|")), null != t.itemQuantity && (e.quantity = t.itemQuantity),
                null == this.initialData && (e.initialData = this.initialData), e
            }, e
        }(e.Model), t.exports = n
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e, i) {
        var r, o, s = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, a = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)c.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, c = {}.hasOwnProperty;
        r = n(42), o = function (t) {
            function e() {
                return this.parseCustomFields = s(this.parseCustomFields, this), this.parseAlternatePrices = s(this.parseAlternatePrices, this), this.parse = s(this.parse, this), e.__super__.constructor.apply(this, arguments)
            }

            return a(e, t), e.prototype.parse = function (t) {
                var e, n, r, o, s, a;
                return a = !0, null == t.itemStackable || t.itemStackable && "false" !== t.itemStackable || (a = !1), o = t.itemPrice, o instanceof Object ? (n = this.inject("currency"), r = null != (s = o[n]) ? s : o[Object.keys(o)[0]]) : r = parseFloat(o), e = {
                    customFields: [],
                    id: t.itemId,
                    name: t.itemName,
                    description: t.itemDescription,
                    image: t.itemImage,
                    minQuantity: t.itemMinQuantity,
                    maxQuantity: t.itemMaxQuantity,
                    stackable: a,
                    duplicatable: !a && t.itemDuplicatable === !0,
                    price: parseFloat(r),
                    originalPrice: parseFloat(r),
                    url: t.itemUrl,
                    dimensions: {
                        weight: parseFloat(t.itemWeight),
                        width: parseFloat(t.itemWidth),
                        height: parseFloat(t.itemHeight),
                        length: parseFloat(t.itemLength)
                    }
                }, null != t.itemTaxes && (e.taxes = t.itemTaxes.split("|")), null != t.itemQuantity && (e.quantity = parseFloat(t.itemQuantity)), null == t.itemShippable || t.itemShippable !== !1 && "false" !== t.itemShippable ? e.shippable = !0 : e.shippable = !1, null == t.itemTaxable || t.itemTaxable !== !1 && "false" !== t.itemTaxable ? e.taxable = !0 : e.taxable = !1, this.parseCustomFields(t, e), this.parseAlternatePrices(t, e), e.canBeStacked = function () {
                    return 0 === e.customFields.length || i.every(e.customFields, function (t) {
                            return "hidden" === t.type
                        })
                }, e
            }, e.prototype.parseAlternatePrices = function (t, e) {
                var n, i, r, o, s, a;
                s = {};
                for (i in t)a = t[i], r = i.match(/.*itemPrice.+/), r && 0 !== r.length && (o = i.replace("itemPrice", ""), n = !0, isNaN(a) || (s[o.toLowerCase()] = parseFloat(a)));
                if (n)return e.alternatePrices = s
            }, e.prototype.parseCustomFields = function (t, e) {
                var n, o, s, a, c, u, l;
                o = [];
                for (s in t)l = t[s], a = s.match(/.*itemCustom.*/), a && 0 !== a.length && (u = s.replace("itemCustom", ""), u = u.replace(/(\d+)/, "$1*"), c = u.split("*")[0], n = u.split("*")[1].toLowerCase(), o[c] || (o[c] = {}, o[c].type = "textbox", o[c].name = "", o[c].value = ""), "options" === n && ("true|false" === l ? (o[c].type = "checkbox", o[c].options = l) : (o[c].type = "dropdown", o[c].options = l)), "type" === n && (o[c].type = l), "name" === n && (o[c].name = l), "value" === n && (o[c].value = l), "required" === n && (l && l.toString() && "true" === l.toString().toLowerCase() ? o[c].required = !0 : o[c].required = !1));
                return i.each(o, function (t) {
                    return function (t) {
                        var n, i;
                        if (t)return n = new r({
                            value: t.value,
                            name: t.name,
                            type: t.type,
                            options: t.options,
                            required: t.required
                        }), n.preValidate() && ("checkbox" !== n.get("type") || n.get("value") || n.set("value", !1)), i = n.toJSON(), e.customFields.push(i)
                    }
                }(this))
            }, e
        }(e.Service), t.exports = o
    }).call(e, n(2), n(5))
}, function (t, e, n) {
    (function (e, i, r) {
        var o, s, a, c = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, u = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)l.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, l = {}.hasOwnProperty;
        s = n(57), a = n(72), o = function (t) {
            function e() {
                return this.userLogged = c(this.userLogged, this), this.toggleMenu = c(this.toggleMenu, this), this.contentClicked = c(this.contentClicked, this), this.render = c(this.render, this), this.initialize = c(this.initialize, this), e.__super__.constructor.apply(this, arguments)
            }

            return u(e, t), e.prototype.tagName = "div", e.prototype.className = "snip-header__user", e.prototype.events = {"click #snipcart-user-menu": "toggleMenu"}, e.prototype.initialize = function (t) {
                return e.__super__.initialize.call(this, t), this.listenTo(this.inject("vent"), "content.clicked", this.contentClicked), this.listenTo(this.inject("vent"), "user.loggedout", this.remove)
            }, e.prototype.render = function () {
                var t;
                return this.model && (t = this.template({model: this.model, helper: s}), this.$el.html(t)), this
            }, e.prototype.contentClicked = function () {
                return i(".snip-menu-control").hasClass("snip-control-active") && (i(".snip-menu-control").removeClass("snip-control-active"), i(".snip-user-menu").toggle()), this
            }, e.prototype.toggleMenu = function (t) {
                return i(".snip-menu-control").toggleClass("snip-control-active"), i(".snip-menu-control").hasClass("snip-control-active") && t.stopPropagation(), this.$(".snip-user-menu").toggle()
            }, e.prototype.userLogged = function (t) {
                return this.model = t, this.render()
            }, e.prototype.template = r.template(a), e
        }(e.View), t.exports = o
    }).call(e, n(2), n(7), n(5))
}, function (t, e) {
    t.exports = '<p class="snip-header__user-text">\r\n    <%= helper.getResource("welcome") %> <em class="snip-header__user-mail"><%= model.get("email") %></em>\r\n</p>'
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s, a = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, c = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)u.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, u = {}.hasOwnProperty;
        i = n(3), o = n(57), s = n(74), r = function (t) {
            function n() {
                return this.close = a(this.close, this), this.render = a(this.render, this), n.__super__.constructor.apply(this, arguments)
            }

            return c(n, t), n.prototype.tagName = "div", n.prototype.hideStep = !0, n.prototype.hideTotal = !0, n.prototype.render = function () {
                var t;
                return t = this.template, this.$el.html(t), this
            }, n.prototype.close = function () {
                return this.remove()
            }, n.prototype.template = e.template(s), n
        }(i.View), t.exports = r
    }).call(e, n(5))
}, function (t, e) {
    t.exports = '<div class="snipcart-step" id="snipcart-blocked">\n    <div class="snipcart-full-width-text snipcart-centered-text">\n        <p>\n            <%= helper.getResource("payment_required_message") %>\n        </p>\n    </div>\n</div>'
}, function (t, e, n) {
    (function (e, i) {
        var r, o, s, a = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, c = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)u.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, u = {}.hasOwnProperty;
        o = n(57), s = n(76), r = function (t) {
            function e() {
                return this.show = a(this.show, this), this.hide = a(this.hide, this), this._doRender = a(this._doRender, this), this.render = a(this.render, this), this.initialize = a(this.initialize, this), e.__super__.constructor.apply(this, arguments)
            }

            return c(e, t), e.prototype.tagName = "li", e.prototype.className = "snip-step__item", e.prototype.parent = "#snipcart-steps", e.prototype.initialize = function (t) {
                return this.options = t, this.navigateTo = t.navigateTo, this.id = t.id, this.options = t, this.displayable = t.displayable, this.hidden = t.hidden
            }, e.prototype.render = function () {
                return (null == this.displayable || this.displayable()) && this._doRender(), this
            }, e.prototype._doRender = function () {
                var t;
                return t = this.template({
                    helper: o,
                    label: this.options.label,
                    icon: this.options.icon
                }), this.$el.html(t), this.$el.data("navigate-to", this.navigateTo), this.hidden && this.$el.addClass("js-hidden"), this
            }, e.prototype.hide = function () {
                return this.hidden = !0, this.$el.addClass("js-hidden")
            }, e.prototype.show = function () {
                return this.hidden = !1, this.$el.removeClass("js-hidden")
            }, e.prototype.template = i.template(s), e
        }(e.View), t.exports = r
    }).call(e, n(2), n(5))
}, function (t, e) {
    t.exports = '<i class="snip-step__nb snip-ico snip-ico--<%= icon %>"></i>\r\n<p class="snip-step__label"><%= helper.getResource(label) %></p>'
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s, a, c = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, u = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)l.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, l = {}.hasOwnProperty;
        i = n(3), s = n(57), r = n(78), a = n(79), o = function (t) {
            function n() {
                return this.messageSent = c(this.messageSent, this), this.getComment = c(this.getComment, this), this.close = c(this.close, this), this.send = c(this.send, this), this.render = c(this.render, this), this.initialize = c(this.initialize, this), n.__super__.constructor.apply(this, arguments)
            }

            return u(n, t), n.prototype.tagName = "div", n.prototype.hideStep = !0, n.prototype.hideTotal = !0, n.prototype.initialize = function (t) {
                return this.options = t, this.model = new r({errors: this.options.errors})
            }, n.prototype.events = {"click #snipcart-send-error": "send"}, n.prototype.render = function () {
                var t;
                return t = this.template({
                    model: this.model.toJSON(),
                    helper: s,
                    title: this.options.title,
                    hideErrors: this.options.hideErrors
                }), this.$el.html(t), this.options.app.appView.setTitle(s.getResource("generic_error_title")), this
            }, n.prototype.send = function (t) {
                return t.preventDefault(), this.model.set("comment", this.getComment()), this.model.save().done(function (t) {
                    return function () {
                        return t.messageSent()
                    }
                }(this))
            }, n.prototype.close = function () {
                return this.remove()
            }, n.prototype.getComment = function () {
                return this.$("#snipcart-errors-comments").val()
            }, n.prototype.messageSent = function () {
                return this.$("#snipcart-comments-box").hide(), this.$("#snipcart-actions").hide(), this.$("#snipcart-message-sent").show()
            }, n.prototype.template = e.template(a), n
        }(i.View), t.exports = o
    }).call(e, n(5))
}, function (t, e, n) {
    (function (e, i) {
        var r, o, s = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, a = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)c.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, c = {}.hasOwnProperty;
        o = n(47), r = function (t) {
            function e() {
                return this.toJSON = s(this.toJSON, this), this.save = s(this.save, this), e.__super__.constructor.apply(this, arguments)
            }

            return a(e, t), e.prototype.defaults = {information: ""}, e.prototype.errors = {}, e.prototype.save = function (t, e) {
                var n;
                return n = new i.Deferred, this.set(t), (new o).jsonpWithToken({
                    url: "/api/jsonp/error/send",
                    data: this.toJSON(),
                    success: function (t) {
                        return function (e) {
                            return t.errors = {}, e.valid ? (t.completed = !0, t.trigger("saved", t), n.resolve(t)) : (t.completed = !1, t.errors = e.errors, n.reject(t))
                        }
                    }(this)
                }), n
            }, e.prototype.displayName = function () {
                return "" + this.get("name")
            }, e.prototype.toJSON = function () {
                var t, n, i, r, o, s, a;
                s = e.__super__.toJSON.call(this), s.errors = [], a = this.get("errors");
                for (n in a)for (o = a[n], t = 0, i = o.length; t < i; t++)r = o[t], s.errors.push(r);
                return s
            }, e
        }(e.Model), t.exports = r
    }).call(e, n(2), n(7))
}, function (t, e) {
    t.exports = '<div class="snip-error">\r\n    <h2 class="snip-error__title">\r\n        <% if (title) { %>\r\n        <%= title %>\r\n        <% } else { %>\r\n        <%= helper.getResource("configuration_problem") %>\r\n        <% } %>\r\n    </h2>\r\n    <% if (!hideErrors) { %>\r\n        <ul class="snip-error__list">\r\n            <% _.each(model.errors, function(error) { %>\r\n            <li class="snip-error__list-item"><%= error %></li>\r\n            <% }) %>\r\n        </ul>\r\n    <% } %>\r\n\r\n    <div id="snipcart-message-sent" class="snip-error__feedback" style="display: none;"><%= helper.getResource("message_sent") %></div>\r\n\r\n    <div id="snipcart-comments-box">\r\n        <label class="snip-form__label" for="snipcart-errors-comments"><%= helper.getResource("additionnal_information") %></label>\r\n        <textarea id="snipcart-errors-comments" class="snip-error__textarea" cols="40" rows="5"></textarea>\r\n    </div>\r\n    \r\n</div>\r\n\r\n<div id="snipcart-actions" class="snip-actions">\r\n    <a class="snip-btn snip-btn--highlight snip-btn--right" id="snipcart-send-error" href="#"><%= helper.getResource("send_error") %></a>\r\n</div>'
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, a = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)c.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, c = {}.hasOwnProperty;
        r = n(57), o = n(81), i = function (t) {
            function e() {
                return this._timeout = s(this._timeout, this), this.close = s(this.close, this), this.beforeRender = s(this.beforeRender, this), this.templateArgs = s(this.templateArgs, this), this.initialize = s(this.initialize, this), e.__super__.constructor.apply(this, arguments)
            }

            return a(e, t), e.prototype.tagName = "div", e.prototype.hideStep = !1, e.prototype.hideTotal = !0, e.prototype.templateText = o, e.prototype.initialize = function (t) {
                if (this.delay = 150, t && (this.app = t.app, this.title = t.title, this.message = t.message, t.delay && (this.delay = t.delay), null != t.hideStep && (this.hideStep = t.hideStep), null != t.hideTotal))return this.hideTotal = t.hideTotal
            }, e.prototype.templateArgs = function () {
                return {h: r, message: this.message}
            }, e.prototype.beforeRender = function () {
                return this.app && this.app.appView.setTitle(this.title), this._loaded = !1
            }, e.prototype.close = function () {
                return this._loaded = !0, this.remove()
            }, e.prototype._timeout = function (t, e) {
                return setTimeout(e, t)
            }, e
        }(e.View), t.exports = i
    }).call(e, n(2))
}, function (t, e) {
    t.exports = '<p class="snip-layout__loading">\r\n  <% if (message) { %>\r\n  <%= message %>\r\n  <% } %>\r\n</p>'
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s, a = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, c = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)u.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, u = {}.hasOwnProperty;
        i = n(3), o = n(57), s = n(83), r = function (t) {
            function n() {
                return this.close = a(this.close, this), this.render = a(this.render, this), n.__super__.constructor.apply(this, arguments)
            }

            return c(n, t), n.prototype.tagName = "div", n.prototype.hideStep = !0, n.prototype.hideTotal = !0, n.prototype.render = function () {
                var t;
                return t = this.template({helper: o}), this.$el.html(t), this
            }, n.prototype.close = function () {
                return this.remove()
            }, n.prototype.template = e.template(s), n
        }(i.View), t.exports = r
    }).call(e, n(5))
}, function (t, e) {
    t.exports = '<p class="snip-product__empty"><%= helper.getResource("cart_empty_text") %></p> '
}, function (t, e, n) {
    var i = n(85);
    t.exports = function (t) {
        var e, n = [], r = t || {};
        return function (t, r) {
            n.push('<div id="snipcart-main-container" class="snip-layout__main-container"><a href="#"' + i.attr("data-test", t.getResource("close"), !0, !0) + ' id="snipcart-close" class="snip-layout__close"><i class="snip-ico snip-ico--close"></i></a><div id="snipcart-main-content"><div id="snipcart-current-user"></div><div id="snipcart-header" class="snip-header"><h2 id="snipcart-title" class="snip-header__title">' + i.escape(null == (e = t.getResource("my_cart")) ? "" : e) + '</h2><div id="snipcart-header-total" class="snip-header__total"><span class="snip-header__total-label">' + i.escape(null == (e = t.getResource("subtotal")) ? "" : e) + ':</span><span id="snipcart-amount"></span></div><a id="snipcart-cartitems-continue-top" class="snip-btn snip-header__continue">' + i.escape(null == (e = t.getResource("continue_shopping")) ? "" : e) + '</a></div><div id="snipcart-global-notices"></div><div id="snipcart-global-loader" class="snip-loader--bar js-hidden"></div><ul id="snipcart-steps" class="snip-steps"></ul><ul id="snipcart-flash-messages" class="snip-flash"></ul><div id="snipcart-loading-container"></div><div id="snipcart-sub-content"></div><div id="snipcart-footer" class="snip-footer"><a' + i.attr("href", r, !0, !0) + ' target="_blank" rel="nofollow" class="js-real-link snip-footer__copyright">' + i.escape(null == (e = t.getResource("powered_by")) ? "" : e) + '<b class="snip-footer__highlight"> Snipcart</b></a></div></div></div>')
        }.call(this, "helper" in r ? r.helper : "undefined" != typeof helper ? helper : void 0, "powered_by_url" in r ? r.powered_by_url : "undefined" != typeof powered_by_url ? powered_by_url : void 0), n.join("")
    }
}, function (t, e, n) {
    "use strict";
    function i(t) {
        return null != t && "" !== t
    }

    function r(t) {
        return (Array.isArray(t) ? t.map(r) : t && "object" == typeof t ? Object.keys(t).filter(function (e) {
            return t[e]
        }) : [t]).filter(i).join(" ")
    }

    function o(t) {
        return a[t] || t
    }

    function s(t) {
        var e = String(t).replace(c, o);
        return e === "" + t ? t : e
    }

    e.merge = function u(t, e) {
        if (1 === arguments.length) {
            for (var n = t[0], r = 1; r < t.length; r++)n = u(n, t[r]);
            return n
        }
        var o = t["class"], s = e["class"];
        (o || s) && (o = o || [], s = s || [], Array.isArray(o) || (o = [o]), Array.isArray(s) || (s = [s]), t["class"] = o.concat(s).filter(i));
        for (var a in e)"class" != a && (t[a] = e[a]);
        return t
    }, e.joinClasses = r, e.cls = function (t, n) {
        for (var i = [], o = 0; o < t.length; o++)n && n[o] ? i.push(e.escape(r([t[o]]))) : i.push(r(t[o]));
        var s = r(i);
        return s.length ? ' class="' + s + '"' : ""
    }, e.style = function (t) {
        return t && "object" == typeof t ? Object.keys(t).map(function (e) {
            return e + ":" + t[e]
        }).join(";") : t
    }, e.attr = function (t, n, i, r) {
        return "style" === t && (n = e.style(n)), "boolean" == typeof n || null == n ? n ? " " + (r ? t : t + '="' + t + '"') : "" : 0 == t.indexOf("data") && "string" != typeof n ? (JSON.stringify(n).indexOf("&") !== -1, n && "function" == typeof n.toISOString, " " + t + "='" + JSON.stringify(n).replace(/'/g, "&apos;") + "'") : i ? (n && "function" == typeof n.toISOString, " " + t + '="' + e.escape(n) + '"') : (n && "function" == typeof n.toISOString, " " + t + '="' + n + '"')
    }, e.attrs = function (t, n) {
        var i = [], o = Object.keys(t);
        if (o.length)for (var s = 0; s < o.length; ++s) {
            var a = o[s], c = t[a];
            "class" == a ? (c = r(c)) && i.push(" " + a + '="' + c + '"') : i.push(e.attr(a, c, !1, n))
        }
        return i.join("")
    };
    var a = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"}, c = /[&<>"]/g;
    e.escape = s, e.rethrow = function l(t, e, i, r) {
        if (!(t instanceof Error))throw t;
        if (!("undefined" == typeof window && e || r))throw t.message += " on line " + i, t;
        try {
            r = r || n(86).readFileSync(e, "utf8")
        } catch (o) {
            l(t, null, i)
        }
        var s = 3, a = r.split("\n"), c = Math.max(i - s, 0), u = Math.min(a.length, i + s), s = a.slice(c, u).map(function (t, e) {
            var n = e + c + 1;
            return (n == i ? "  > " : "    ") + n + "| " + t
        }).join("\n");
        throw t.path = e, t.message = (e || "Jade") + ":" + i + "\n" + s + "\n\n" + t.message, t
    }, e.DebugItem = function (t, e) {
        this.lineno = t, this.filename = e
    }
}, function (t, e) {
}, function (t, e, n) {
    (function (e, n) {
        var i, r = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, o = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)s.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, s = {}.hasOwnProperty;
        i = function (t) {
            function e() {
                return this.remove = r(this.remove, this), this.afterRender = r(this.afterRender, this), this.template = r(this.template, this), this.templateArgs = r(this.templateArgs, this), e.__super__.constructor.apply(this, arguments)
            }

            return o(e, t), e.prototype.tagName = "li", e.prototype.className = "snip-flash__item", e.prototype.defaults = {
                delay: 5e3,
                type: "info",
                keep: !1
            }, e.prototype.timeout = function (t, e) {
                return setTimeout(e, t)
            }, e.prototype.init = function (t) {
                return this.options = this.defaults, n.extend(this.options, t)
            }, e.prototype.templateArgs = function () {
                return {type: this.options.type, message: this.options.message}
            }, e.prototype.template = function () {
                return this.options.message
            }, e.prototype.afterRender = function () {
                if (this.$el.addClass("snip-flash__item--" + this.options.type), !this.options.keep)return this.timeout(this.options.delay, function (t) {
                    return function () {
                        return t.remove()
                    }
                }(this))
            }, e.prototype.remove = function () {
                return this.$el.slideUp("fast", function (t) {
                    return function () {
                        return e.__super__.remove.call(t)
                    }
                }(this))
            }, e
        }(e.View), t.exports = i
    }).call(e, n(2), n(5))
}, function (t, e, n) {
    (function (e) {
        var i, r, o = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)s.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, s = {}.hasOwnProperty;
        i = n(44), r = function (t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }

            return o(e, t), e.prototype.model = i, e.prototype.url = "/api/jsonp/discounts", e.prototype.totalAmountSaved = function () {
                var t, e, n, i, r;
                for (r = 0, i = this.models, t = 0, e = i.length; t < e; t++)n = i[t], r += n.get("amountSaved");
                return r
            }, e
        }(e.Collection), t.exports = r
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s, a, c, u, l, p, h, d, f, m = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, y = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)g.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, g = {}.hasOwnProperty;
        s = n(2), r = n(90), h = n(94), a = n(82), u = n(96), p = n(112).OrderView, c = n(77), d = n(57), i = n(56), o = n(49), f = n(138), l = function (t) {
            function n() {
                return this.checkoutOrOrderInfos = m(this.checkoutOrOrderInfos, this), this.shippingOrBillingAddress = m(this.shippingOrBillingAddress, this), this.infosOrBillingAddress = m(this.infosOrBillingAddress, this), this.before = m(this.before, this), n.__super__.constructor.apply(this, arguments)
            }

            return y(n, t), n.prototype.routes = {
                "": "index",
                infos: "infos",
                "billing-address": "billingAddress",
                "shipping-address": "shippingAddress",
                empty: "empty",
                "orders/:token": "orders",
                "complete/:token": "completeOrder"
            }, n.prototype.requireItems = ["cart", "checkout", "infos", "billing-address", "shipping-address"], n.prototype.before = function (t) {
                var n;
                if (n = this.inject(), this.inject("context").cartIsEmpty() && e.contains(this.requireItems, t))return this.inject("mainview").showEmptyView(), !1
            }, n.prototype.index = function () {
                return this.app.appView.hide()
            }, n.prototype.checkout = function () {
                var t;
                return t = new CartContentView({
                    model: this.inject("cart"),
                    collection: this.app.collections.items,
                    app: this.app,
                    showContinueShopping: !1
                }), t.pageName = "cart-content", this.app.appView.setContentView(t), this.app.appView.show()
            }, n.prototype.infos = function () {
                var t;
                return this.app.hasCustomFields() ? (t = new u({app: this.app}), this.app.appView.setContentView(t), this.app.appView.show(), this) : void this.navigate("billing-address", !0)
            }, n.prototype.infosOrBillingAddress = function () {
                return this.inject("cart").get("customFields").size() > 0 ? this.navigate("infos", !0) : this.navigate("billing-address", !0)
            }, n.prototype.shippingOrBillingAddress = function () {
                return this.app.shippingEnabled() ? this.inject("cart").get("shipToBillingAddress") ? void this.navigate("billing-address", !0) : this.navigate("shipping-address", !0) : void this.navigate("billing-address", !0)
            }, n.prototype.checkoutOrOrderInfos = function () {
                return this.app.hasCustomFields() ? this.navigate("infos", !0) : this.navigate("checkout", !0)
            }, n.prototype.billingAddress = function () {
                var t;
                return this.inject("cart").hasValidCustomFields() ? (t = new r({
                    model: this.inject("cart").get("billingAddress"),
                    countries: this.app.settings.countries,
                    app: this.app
                }), this.app.appView.setContentView(t), this.app.appView.show()) : void this.navigate("infos", !0)
            }, n.prototype.shippingAddress = function () {
                var t;
                return this.inject("cart").hasValidCustomFields() ? this.inject("cart").get("billingAddress").isValid() ? this.app.shippingEnabled() ? this.inject("cart").get("shipToBillingAddress") ? void this.navigate("shipping-method", !0) : (this.inject("cart").get("shippingAddress") || this.inject("cart").set("shippingAddress", {}), t = new h({model: this.inject("cart").get("shippingAddress")}), this.app.appView.setContentView(t), this.app.appView.show()) : void this.navigate("payment-method", !0) : void this.navigate("billing-address", !0) : void this.navigate("infos", !0)
            }, n.prototype.empty = function () {
                var t;
                return t = new a, this.app.appView.setContentView(t), this.app.appView.show()
            }, n.prototype.orders = function (t) {
                var e;
                return this.app.appView.hideSteps(), this.app.appView.hideTotal(), e = new p({
                    model: new o({token: t}),
                    title: "",
                    app: this.app
                }), this.app.appView.setContentView(e), this.app.appView.show()
            }, n.prototype.completeOrder = function (t, e) {
                return e = f.parse(e), "Open" === e.status ? this.inject("flash").showMessage({
                    type: "warn",
                    message: "Your order has been completed but the payment is not fully processed yet. You should receive an order confirmation in the next minutes and a complete invoice once the payment is confirmed."
                }) : this.inject("flash").showMessage({
                    type: "success",
                    message: this.inject("viewhelper").getResource("thankyou_message")
                }), this.navigate("orders/" + t, !0)
            }, n
        }(s.AppRouter), t.exports = l
    }).call(e, n(5))
}, function (t, e, n) {
    (function (e) {
        var i, r, o = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, s = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)a.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, a = {}.hasOwnProperty;
        r = n(91), i = function (t) {
            function e() {
                return this.previous = o(this.previous, this), this.failure = o(this.failure, this), this.success = o(this.success, this), this.loadComplete = o(this.loadComplete, this), this.load = o(this.load, this), this.save = o(this.save, this), this.persist = o(this.persist, this), this.renderPickers = o(this.renderPickers, this), this.shippingSameAsBillingChanged = o(this.shippingSameAsBillingChanged, this), this.close = o(this.close, this), this.userLogged = o(this.userLogged, this), this.templateArgs = o(this.templateArgs, this), this.afterRender = o(this.afterRender, this), this.beforeRender = o(this.beforeRender, this), this.init = o(this.init, this), e.__super__.constructor.apply(this, arguments)
            }

            return s(e, t), e.prototype.pageName = "billing-address", e.prototype.tab = "#snipcart-billing-address-step", e.prototype.template = n(93), e.prototype.ui = {
                next: "#snipcart-next",
                form: "form",
                previous: "#snipcart-previous",
                shippingSameAsBilling: '[name="shippingSameAsBilling"]'
            }, e.prototype.events = {
                "click @ui.next": "save",
                "submit @ui.form": "save",
                "click @ui.previous": "previous",
                "click @ui.shippingSameAsBilling": "shippingSameAsBillingChanged"
            }, e.prototype.init = function (t) {
                return this.cart = this.inject("cart"), this.options = t, this.listenTo(this.inject("vent"), "user.logged", this.userLogged)
            }, e.prototype.beforeRender = function () {
                var t;
                return this.model.has("email") || this.model.set("email", this.cart.get("email")), this.inject("user") && ("function" == typeof(t = this.inject("user")).has ? t.has("email") : void 0) && this.model.set("email", this.inject("user").get("email")), this.model.has("shippingSameAsBilling") || this.model.set("shippingSameAsBilling", this.cart.get("shipToBillingAddress")), this.statePicker = new r({
                    countries: this.options.countries,
                    names: {country: "country", province: "province"},
                    model: this.model
                })
            }, e.prototype.afterRender = function () {
                return this.renderPickers()
            }, e.prototype.templateArgs = function () {
                return {
                    hasUser: this.inject("user"),
                    helper: this.inject("viewhelper"),
                    shippingEnabled: this.inject().shippingEnabled(),
                    splitFirstName: this.inject("config").split_firstname_and_lastname
                }
            }, e.prototype.userLogged = function () {
                if (!this.model.completed)return this.render()
            }, e.prototype.close = function () {
                return this.model.set(this.getAttributes()), this.remove()
            }, e.prototype.shippingSameAsBillingChanged = function () {
                var t;
                return t = this.getAttributes(), this.cart.set("shipToBillingAddress", t.shippingSameAsBilling)
            }, e.prototype.renderPickers = function () {
                return this.statePicker.delegateEvents(), this.statePicker.renderIn(this, "#snipcart-billing-state-picker-holder")
            }, e.prototype.persist = function () {
                return this.cart.set("email", this.model.get("email")), this.cart.set("shipToBillingAddress", this.model.get("shippingSameAsBilling")), e.__super__.persist.call(this)
            }, e.prototype.save = function (t) {
                var n, i;
                return this.prevent(t), n = this.getAttributes(), this.model.set(n), this.model.isValid() ? (i = this.model.hasChanged(), this.model.get("shippingSameAsBilling") && i && (this.cart.set("shippingAddress", this.model.attributes), i = !0), i ? e.__super__.save.call(this, t) : this.success()) : void this.render()
            }, e.prototype.load = function () {
                return this.inject("mainview").load({message: this.inject("viewhelper").getResource("saving")})
            }, e.prototype.loadComplete = function () {
                return this.inject("mainview").loadComplete()
            }, e.prototype.success = function () {
                return this.inject("vent").trigger("billingaddress.changed", this.model.toJSON()), this.model.get("shippingSameAsBilling") ? void this.inject("routers").shipping.navigate("shipping-method", !0) : this.inject("routers").order.navigate("shipping-address", !0)
            }, e.prototype.failure = function () {
                return this.render()
            }, e.prototype.previous = function (t) {
                return this.prevent(t), this.inject("routers").order.checkoutOrOrderInfos()
            }, e
        }(e.FormView), t.exports = i
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e, i) {
        var r, o, s, a = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, c = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)u.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, u = {}.hasOwnProperty, l = [].indexOf || function (t) {
                for (var e = 0, n = this.length; e < n; e++)if (e in this && this[e] === t)return e;
                return -1
            };
        o = n(57), s = n(92), r = function (t) {
            function e() {
                return this.removeErrors = a(this.removeErrors, this), this.showErrors = a(this.showErrors, this), this.setNotReadonly = a(this.setNotReadonly, this), this.setReadonly = a(this.setReadonly, this), this.buildHtml = a(this.buildHtml, this), this.filterProvinces = a(this.filterProvinces, this), this.ensureCountriesLoaded = a(this.ensureCountriesLoaded, this), this.setValues = a(this.setValues, this), this.getState = a(this.getState, this), this.getCountry = a(this.getCountry, this), this.stateChanged = a(this.stateChanged, this), this.countryChanged = a(this.countryChanged, this), this.value = a(this.value, this), e.__super__.constructor.apply(this, arguments)
            }

            return c(e, t), e.prototype.tagName = "span", e.prototype.events = {
                "change .snipcart-country": "countryChanged",
                "change .snipcart-state": "stateChanged"
            }, e.prototype.initialize = function (t) {
                return this.options = t, this.listenTo(this.model, "change", this.render), this.countries = this.options.countries, this.readonly = !1
            }, e.prototype.render = function () {
                return this.selectedCountry = this.model.get("country"), this.selectedState = this.model.get("province"), this.$el.empty(), this.ensureCountriesLoaded(function (t) {
                    return function () {
                        if (t.$el.html(t.buildHtml(t.selectedCountry, t.selectedState)), t.readonly)return t.setReadonly()
                    }
                }(this)), this
            }, e.prototype.value = function () {
                return this.$el.find("#" + this.options.id).val()
            }, e.prototype.countryChanged = function () {
                return this.selectedCountry = this.getCountry(), this.selectedState = null, this.$el.html(this.buildHtml(this.getCountry(), ""))
            }, e.prototype.stateChanged = function () {
                return this.selectedState = this.getState()
            }, e.prototype.getCountry = function () {
                return this.$el.find(".snipcart-country").val()
            }, e.prototype.getState = function () {
                return this.$el.find(".snipcart-state").val()
            }, e.prototype.setValues = function (t, e) {
                return this.ensureCountriesLoaded(function (n) {
                    return function () {
                        if (n.selectedCountry = t, n.selectedState = e, n.$el.html(n.buildHtml(t, e)), n.readonly)return n.setReadonly()
                    }
                }(this))
            }, e.prototype.ensureCountriesLoaded = function (t) {
                return null === this.countries && (this.countries = this.inject("preloaded").countries), this.filterCountries(), t()
            }, e.prototype.template = s, e.prototype.filterProvinces = function (t) {
                var e, n, r, o, s, a, c, u, l;
                if (n = this.inject("config"), o = n.provinces_for_country, r = i.findWhere(o, {country: t.code})) {
                    for (l = r.provinces, a = 0, c = l.length; a < c; a++)s = l[a], s.countryCode = t.code;
                    t.states = r.provinces
                }
                if (t.states && (u = n.allowed_provinces, u && (e = i.findWhere(u, {country: t.code}))))return t.states = i.filter(t.states, function (t) {
                    return i.includes(e.provinces, t.code)
                })
            }, e.prototype.filterCountries = function () {
                var t, e, n, r, o, s, a, c;
                if (e = this.inject("config"), t = e.allowed_countries, null != t) {
                    for (s = this.countries, c = [], r = 0, o = s.length; r < o; r++)n = s[r], a = n.code, l.call(t, a) < 0 ? c.push(this.countries = i.without(this.countries, n)) : c.push(void 0);
                    return c
                }
            }, e.prototype.buildHtml = function (t, e, n) {
                var i, r, s, a;
                return this.filterCountries(t), s = function () {
                        var e, n, r, o;
                        for (r = this.countries, o = [], e = 0, n = r.length; e < n; e++)i = r[e], i.code === t && o.push(i);
                        return o
                    }.call(this)[0] || this.countries[0], a = function () {
                        var t, n, i, o;
                        for (i = s.states, o = [], t = 0, n = i.length; t < n; t++)r = i[t], r.code === e && o.push(r);
                        return o
                    }()[0] || e, this.filterProvinces(s), this.template({
                    helper: o,
                    names: this.options.names,
                    countryInputId: this.options.countryInputId,
                    stateInputId: this.options.stateInputId,
                    countries: this.countries,
                    selectedCountry: s,
                    selectedState: a,
                    model: this.model
                })
            }, e.prototype.setReadonly = function () {
                return this.$el.find("input, select").attr("readonly", "readonly"), this.$el.find("option:not(:selected)").attr("disabled", "disabled"), this.readonly = !0
            }, e.prototype.setNotReadonly = function () {
                return this.$el.find("input, select").removeAttr("readonly"), this.$el.find("option:not(:selected)").removeAttr("disabled"), this.readonly = !1
            }, e.prototype.showErrors = function (t) {
                return this.ensureCountriesLoaded(function (e) {
                    return function () {
                        return e.$el.html(e.buildHtml(e.selectedCountry, e.selectedState, t))
                    }
                }(this))
            }, e.prototype.removeErrors = function () {
                return this.ensureCountriesLoaded(function (t) {
                    return function () {
                        return t.$el.html(t.buildHtml(t.selectedCountry, t.selectedState))
                    }
                }(this))
            }, e
        }(e.View), t.exports = r
    }).call(e, n(2), n(5))
}, function (t, e, n) {
    var i = n(85);
    t.exports = function (t) {
        var e, n = [], r = t || {};
        return function (t, r, o, s, a, c) {
            n.push('<div class="snip-form__container"><label' + i.attr("for", "snip-" + o.country, !0, !0) + ' class="snip-form__label">' + i.escape(null == (e = r.getResource("country")) ? "" : e) + "</label><select" + i.attr("id", "snip-" + o.country, !0, !0) + i.attr("name", o.country, !0, !0) + ' class="snipcart-country">'),
                function () {
                    var r = t;
                    if ("number" == typeof r.length)for (var o = 0, a = r.length; o < a; o++) {
                        var c = r[o];
                        c.code == s.code ? n.push("<option" + i.attr("value", c.code, !0, !0) + ' selected="selected">' + i.escape(null == (e = c.name) ? "" : e) + "</option>") : n.push("<option" + i.attr("value", c.code, !0, !0) + ">" + i.escape(null == (e = c.name) ? "" : e) + "</option>")
                    } else {
                        var a = 0;
                        for (var o in r) {
                            a++;
                            var c = r[o];
                            c.code == s.code ? n.push("<option" + i.attr("value", c.code, !0, !0) + ' selected="selected">' + i.escape(null == (e = c.name) ? "" : e) + "</option>") : n.push("<option" + i.attr("value", c.code, !0, !0) + ">" + i.escape(null == (e = c.name) ? "" : e) + "</option>")
                        }
                    }
                }.call(this), n.push('</select></div><div class="snip-form__container"><label' + i.attr("for", "snip-" + o.province, !0, !0) + ' class="snip-form__label">' + i.escape(null == (e = r.getResource("province_state")) ? "" : e) + "</label>"), s && s.states.length > 0 ? (n.push("<select" + i.attr("id", "snip" + o.province, !0, !0) + i.attr("name", o.province, !0, !0) + ' class="snipcart-state">'), function () {
                var t = s.states;
                if ("number" == typeof t.length)for (var r = 0, o = t.length; r < o; r++) {
                    var c = t[r];
                    a && c.code == a.code ? n.push("<option" + i.attr("value", c.code, !0, !0) + ' selected="selected">' + i.escape(null == (e = c.name) ? "" : e) + "</option>") : n.push("<option" + i.attr("value", c.code, !0, !0) + ">" + i.escape(null == (e = c.name) ? "" : e) + "</option>")
                } else {
                    var o = 0;
                    for (var r in t) {
                        o++;
                        var c = t[r];
                        a && c.code == a.code ? n.push("<option" + i.attr("value", c.code, !0, !0) + ' selected="selected">' + i.escape(null == (e = c.name) ? "" : e) + "</option>") : n.push("<option" + i.attr("value", c.code, !0, !0) + ">" + i.escape(null == (e = c.name) ? "" : e) + "</option>")
                    }
                }
            }.call(this), n.push("</select>")) : n.push('<input type="text"' + i.attr("id", "snip-" + o.province, !0, !0) + i.attr("name", o.province, !0, !0) + i.attr("value", a, !0, !0) + ' class="snipcart-state">'), n.push("</div>")
        }.call(this, "countries" in r ? r.countries : "undefined" != typeof countries ? countries : void 0, "helper" in r ? r.helper : "undefined" != typeof helper ? helper : void 0, "names" in r ? r.names : "undefined" != typeof names ? names : void 0, "selectedCountry" in r ? r.selectedCountry : "undefined" != typeof selectedCountry ? selectedCountry : void 0, "selectedState" in r ? r.selectedState : "undefined" != typeof selectedState ? selectedState : void 0, "undefined" in r ? r.undefined : void 0), n.join("")
    }
}, function (t, e, n) {
    var i = n(85);
    t.exports = function (t) {
        var e, n = [], r = {}, o = t || {};
        return function (t, o, s, a, c) {
            r.textbox = e = function (t, e) {
                var o = (this && this.block, this && this.attributes || {});
                e && e.errors && e.errors[t] ? (n.push("<input" + i.attrs(i.merge([{
                        "data-invalid": !0,
                        type: "text",
                        name: i.escape(t),
                        value: i.escape(e ? e[t] : ""),
                        id: i.escape("snip-" + t)
                    }, o]), !0) + ">"), r.showErrors(e.errors[t])) : n.push("<input" + i.attrs(i.merge([{
                        type: "text",
                        name: i.escape(t),
                        value: i.escape(e ? e[t] : ""),
                        id: i.escape("snip-" + t)
                    }, o]), !0) + ">")
            }, r.checkbox = e = function (t, e) {
                var o = (this && this.block, this && this.attributes || {});
                e[t] ? n.push("<input" + i.attrs(i.merge([{
                        type: "checkbox",
                        name: i.escape(t),
                        id: i.escape("snip-" + t),
                        checked: "checked"
                    }, o]), !0) + ">") : n.push("<input" + i.attrs(i.merge([{
                        type: "checkbox",
                        name: i.escape(t),
                        id: i.escape("snip-" + t)
                    }, o]), !0) + ">"), e.errors && e.errors[t] && r.showErrors(e.errors[t])
            }, r.option = e = function (t, r, o) {
                this && this.block, this && this.attributes || {};
                o ? n.push("<option" + i.attr("value", r, !0, !0) + ' selected="selected">' + i.escape(null == (e = t) ? "" : e) + "</option>") : n.push("<option" + i.attr("value", r, !0, !0) + ">" + i.escape(null == (e = t) ? "" : e) + "</option>")
            }, r.labelFor = e = function (t, r) {
                var o = (this && this.block, this && this.attributes || {});
                n.push("<label" + i.attrs(i.merge([{"for": i.escape("snip-" + t)}, o]), !0) + ">" + i.escape(null == (e = r) ? "" : e) + "</label>")
            }, r.showErrors = e = function (t) {
                for (var r = (this && this.block, this && this.attributes || {}, []), o = 0; o < t.length; o++)r.push(t[o]);
                var s = r.join(", ");
                n.push('<p class="snip-form__error">' + i.escape(null == (e = s) ? "" : e) + "</p>")
            }, n.push('<form id="snipcart-billingaddress-form"><div class="snip-cols snip-layout__content"><div class="snip-col">'), c ? (n.push('<div class="snip-form__container">'), r.labelFor.call({attributes: {"class": "snip-form__label"}}, "firstName", o.getResource("first_name")), r.textbox("firstName", s), n.push('</div><div class="snip-form__container">'), r.labelFor.call({attributes: {"class": "snip-form__label"}}, "name", o.getResource("last_name")), r.textbox("name", s), n.push("</div>")) : (n.push('<div class="snip-form__container">'), r.labelFor.call({attributes: {"class": "snip-form__label"}}, "name", o.getResource("name")), r.textbox("name", s), n.push('</div><div class="snip-form__container">'), r.labelFor.call({attributes: {"class": "snip-form__label"}}, "company", o.getResource("company_name")), r.textbox("company", s), n.push("</div>")), n.push('<div class="snip-form__container">'), r.labelFor.call({attributes: {"class": "snip-form__label"}}, "address1", o.getResource("address_1")), r.textbox("address1", s), n.push('</div><div class="snip-form__container">'), r.labelFor.call({attributes: {"class": "snip-form__label"}}, "address2", o.getResource("address_2")), r.textbox("address2", s), n.push('</div></div><div class="snip-col"><div class="snip-form__container">'), r.labelFor.call({attributes: {"class": "snip-form__label"}}, "city", o.getResource("city")), r.textbox("city", s), n.push('</div><div id="snipcart-billing-state-picker-holder" class="snip-form__container"></div><div class="snip-form__container">'), r.labelFor.call({attributes: {"class": "snip-form__label"}}, "postalCode", o.getResource("postal_code")), r.textbox("postalCode", s), n.push('</div></div><div class="snip-col">'), c && (n.push('<div class="snip-form__container">'), r.labelFor.call({attributes: {"class": "snip-form__label"}}, "company", o.getResource("company_name")), r.textbox("company", s), n.push("</div>")), n.push('<div class="snip-form__container">'), r.labelFor.call({attributes: {"class": "snip-form__label"}}, "phone", o.getResource("phone")), r.textbox("phone", s), n.push("</div>"), t || (n.push('<div class="snip-form__container">'), r.labelFor.call({attributes: {"class": "snip-form__label"}}, "email", o.getResource("email")), r.textbox("email", s), n.push("</div>")), a && (n.push('<div class="snip-form__container snipcart-checkbox-field">'), r.checkbox.call({attributes: {"class": "snip-product__customfields-checkbox"}}, "shippingSameAsBilling", s), r.labelFor.call({attributes: {"class": "snip-form__label"}}, "shippingSameAsBilling", o.getResource("shipping_address_same_as_billing")), n.push("</div>")), n.push('</div></div><div class="snip-actions"><a href="#" id="snipcart-previous" class="snip-btn snip-btn--left">' + i.escape(null == (e = o.getResource("previous")) ? "" : e) + '</a><a href="#" id="snipcart-next" class="snip-btn snip-btn--highlight snip-btn--right">' + i.escape(null == (e = o.getResource("next")) ? "" : e) + '</a><input type="submit" style="visibility: hidden"></div></form>')
        }.call(this, "hasUser" in o ? o.hasUser : "undefined" != typeof hasUser ? hasUser : void 0, "helper" in o ? o.helper : "undefined" != typeof helper ? helper : void 0, "model" in o ? o.model : "undefined" != typeof model ? model : void 0, "shippingEnabled" in o ? o.shippingEnabled : "undefined" != typeof shippingEnabled ? shippingEnabled : void 0, "splitFirstName" in o ? o.splitFirstName : "undefined" != typeof splitFirstName ? splitFirstName : void 0), n.join("")
    }
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s, a = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, c = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)u.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, u = {}.hasOwnProperty;
        s = n(57), o = n(91), i = n(3), r = function (t) {
            function e() {
                return this.renderPickers = a(this.renderPickers, this), this.close = a(this.close, this), this.failure = a(this.failure, this), this.success = a(this.success, this), this.loadComplete = a(this.loadComplete, this), this.load = a(this.load, this), this.save = a(this.save, this), this.previous = a(this.previous, this), this.saveModel = a(this.saveModel, this), this.userLogged = a(this.userLogged, this), this.templateArgs = a(this.templateArgs, this), this.afterRender = a(this.afterRender, this), this.beforeRender = a(this.beforeRender, this), e.__super__.constructor.apply(this, arguments)
            }

            return c(e, t), e.prototype.pageName = "shipping-address", e.prototype.tab = "#snipcart-shipping-address-step", e.prototype.template = n(95), e.prototype.events = {
                "click #snipcart-previous": "previous",
                "click #snipcart-next": "save",
                "submit form": "save"
            }, e.prototype.init = function (t) {
                return this.options = t, this.cart = this.inject("cart"), this.listenTo(this.inject("vent"), "user.logged", this.userLogged)
            }, e.prototype.beforeRender = function () {
                return this.statePicker = new o({
                    countries: this.inject("preloaded").settings.countries,
                    model: this.model,
                    names: {country: "country", province: "province"}
                })
            }, e.prototype.afterRender = function () {
                return this.renderPickers(), this.inject("vent").trigger("resized")
            }, e.prototype.templateArgs = function () {
                return {helper: s, splitFirstName: this.inject("config").split_firstname_and_lastname}
            }, e.prototype.userLogged = function () {
                if (!this.model.completed)return this.render()
            }, e.prototype.saveModel = function () {
                return this.cart.save()
            }, e.prototype.previous = function (t) {
                return t.preventDefault(), i.history.navigate("billing-address", !0)
            }, e.prototype.save = function (t) {
                var n;
                return this.prevent(t), n = this.getAttributes(), this.model.set(n), this.model.isValid() ? this.model.hasChanged() ? e.__super__.save.call(this, t) : this.success() : void this.render()
            }, e.prototype.load = function () {
                return this.inject("mainview").load({message: s.getResource("saving")})
            }, e.prototype.loadComplete = function () {
                return this.inject("mainview").loadComplete()
            }, e.prototype.success = function () {
                return this.inject("vent").trigger("shippingaddress.changed", this.model.toJSON()), this.inject("routers").order.navigate("shipping-method", !0)
            }, e.prototype.failure = function () {
                return this.render()
            }, e.prototype.close = function () {
                return this.model.set(this.getAttributes()), this.statePicker.remove(), this.remove()
            }, e.prototype.renderPickers = function () {
                return this.statePicker.delegateEvents(), this.$el.find("#snipcart-shipping-state-picker-holder").html(this.statePicker.render().$el)
            }, e
        }(e.FormView), t.exports = r
    }).call(e, n(2))
}, function (t, e, n) {
    var i = n(85);
    t.exports = function (t) {
        var e, n = [], r = {}, o = t || {};
        return function (t, o, s) {
            r.textbox = e = function (t, e) {
                var o = (this && this.block, this && this.attributes || {});
                e && e.errors && e.errors[t] ? (n.push("<input" + i.attrs(i.merge([{
                        "data-invalid": !0,
                        type: "text",
                        name: i.escape(t),
                        value: i.escape(e ? e[t] : ""),
                        id: i.escape("snip-" + t)
                    }, o]), !0) + ">"), r.showErrors(e.errors[t])) : n.push("<input" + i.attrs(i.merge([{
                        type: "text",
                        name: i.escape(t),
                        value: i.escape(e ? e[t] : ""),
                        id: i.escape("snip-" + t)
                    }, o]), !0) + ">")
            }, r.option = e = function (t, r, o) {
                this && this.block, this && this.attributes || {};
                o ? n.push("<option" + i.attr("value", r, !0, !0) + ' selected="selected">' + i.escape(null == (e = t) ? "" : e) + "</option>") : n.push("<option" + i.attr("value", r, !0, !0) + ">" + i.escape(null == (e = t) ? "" : e) + "</option>")
            }, r.labelFor = e = function (t, r) {
                var o = (this && this.block, this && this.attributes || {});
                n.push("<label" + i.attrs(i.merge([{"for": i.escape("snip-" + t)}, o]), !0) + ">" + i.escape(null == (e = r) ? "" : e) + "</label>")
            }, r.showErrors = e = function (t) {
                for (var r = (this && this.block, this && this.attributes || {}, []), o = 0; o < t.length; o++)r.push(t[o]);
                var s = r.join(", ");
                n.push('<p class="snip-form__error">' + i.escape(null == (e = s) ? "" : e) + "</p>")
            }, n.push('<form id="snipcart-shipping-address-form"><div class="snip-cols snip-layout__content"><div class="snip-col">'), s ? (n.push('<div class="snip-form__container">'), r.labelFor.call({attributes: {"class": "snip-form__label"}}, "firstName", t.getResource("first_name")), r.textbox("firstName", o), n.push('</div><div class="snip-form__container">'), r.labelFor.call({attributes: {"class": "snip-form__label"}}, "name", t.getResource("last_name")), r.textbox("name", o), n.push("</div>")) : (n.push('<div class="snip-form__container">'), r.labelFor.call({attributes: {"class": "snip-form__label"}}, "name", t.getResource("name")), r.textbox("name", o), n.push('</div><div class="snip-form__container">'), r.labelFor.call({attributes: {"class": "snip-form__label"}}, "company", t.getResource("company_name")), r.textbox("company", o), n.push("</div>")), n.push('<div class="snip-form__container">'), r.labelFor.call({attributes: {"class": "snip-form__label"}}, "address1", t.getResource("address_1")), r.textbox("address1", o), n.push('</div><div class="snip-form__container">'), r.labelFor.call({attributes: {"class": "snip-form__label"}}, "address2", t.getResource("address_2")), r.textbox("address2", o), n.push('</div></div><div class="snip-col"><div class="snip-form__container">'), r.labelFor.call({attributes: {"class": "snip-form__label"}}, "city", t.getResource("city")), r.textbox("city", o), n.push('</div><div id="snipcart-shipping-state-picker-holder" class="snip-form__container"></div><div class="snip-form__container">'), r.labelFor.call({attributes: {"class": "snip-form__label"}}, "postalCode", t.getResource("postal_code")), r.textbox("postalCode", o), n.push('</div></div><div class="snip-col">'), s && (n.push('<div class="snip-form__container">'), r.labelFor.call({attributes: {"class": "snip-form__label"}}, "company", t.getResource("company_name")), r.textbox("company", o), n.push("</div>")), n.push('<div class="snip-form__container">'), r.labelFor.call({attributes: {"class": "snip-form__label"}}, "phone", t.getResource("phone")), r.textbox("phone", o), n.push('</div></div></div><div class="snip-actions"><a href="#" id="snipcart-previous" class="snip-btn snip-btn--left">' + i.escape(null == (e = t.getResource("previous")) ? "" : e) + '</a><a href="#" id="snipcart-next" class="snip-btn snip-btn--highlight snip-btn--right">' + i.escape(null == (e = t.getResource("next")) ? "" : e) + '</a><input type="submit" style="visibility: hidden"></div></form>')
        }.call(this, "helper" in o ? o.helper : "undefined" != typeof helper ? helper : void 0, "model" in o ? o.model : "undefined" != typeof model ? model : void 0, "splitFirstName" in o ? o.splitFirstName : "undefined" != typeof splitFirstName ? splitFirstName : void 0), n.join("")
    }
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s, a = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, c = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)u.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, u = {}.hasOwnProperty;
        s = n(57), i = n(97), r = n(65), o = function (t) {
            function e() {
                return this.success = a(this.success, this), this.close = a(this.close, this), this.afterRender = a(this.afterRender, this), this.templateArgs = a(this.templateArgs, this), this.init = a(this.init, this), e.__super__.constructor.apply(this, arguments)
            }

            return c(e, t), e.prototype.pageName = "order-infos", e.prototype.template = n(111), e.prototype.events = {
                "click #snipcart-next": "next",
                "click #snipcart-previous": "previous",
                "submit #snipcart-orderinfos-form": "test"
            }, e.prototype.tab = "#snipcart-orderinfos-step", e.prototype.init = function (t) {
                return this.model = this.inject("cart"), this.collection = this.model.get("customFields")
            }, e.prototype.templateArgs = function () {
                return {helper: this.inject("viewhelper")}
            }, e.prototype.afterRender = function () {
                var t, e, n, r, o, s, a;
                for (n = 0, t = 1, s = this.collection.models, r = 0, o = s.length; r < o; r++)e = s[r], a = new i({model: e}), a.autoSave = !1, "hidden" === e.get("type") ? a.renderIn(this, this.$("#snipcart-orderinfos-form")) : (a.renderIn(this, this.$("#snipcart-orderinfos-form .snip-col").eq(n)), a.$(":input").attr("tabindex", t)), n++, t++, 3 === n && (n = 0);
                return this
            }, e.prototype.close = function () {
                return this.remove()
            }, e.prototype.next = function (t) {
                return this.prevent(t), this.collection.validate() ? this.collection.hasChanged() ? (this.inject("mainview").load({message: this.inject("viewhelper").getResource("saving")}), this.model.save().done(function (t) {
                    return function () {
                        return t.success()
                    }
                }(this)).fail(function (t) {
                    return function () {
                        return t.render()
                    }
                }(this)).always(function (t) {
                    return function () {
                        return t.inject("mainview").loadComplete()
                    }
                }(this))) : this.success() : void this.render()
            }, e.prototype.success = function () {
                return this.inject("routers").order.navigate("billing-address", !0)
            }, e.prototype.previous = function (t) {
                return t.preventDefault(), this.inject("routers").order.navigate("checkout", !0)
            }, e
        }(e.View), t.exports = o
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s, a, c, u, l, p, h = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, d = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)f.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, f = {}.hasOwnProperty;
        l = n(57), u = n(98), a = n(100), i = n(102), s = n(104), c = n(106), o = n(108), p = n(110), r = function (t) {
            function e() {
                return this.close = h(this.close, this), this.validate = h(this.validate, this), this.render = h(this.render, this), e.__super__.constructor.apply(this, arguments)
            }

            return d(e, t), e.prototype.tagName = "div", e.prototype.autoSave = !0, e.prototype.options = {readonly: !1}, e.prototype.initialize = function (t) {
                return this.options = t
            }, e.prototype.render = function () {
                var t, e, n;
                return t = {
                    dropdown: a,
                    textbox: u,
                    checkbox: i,
                    textarea: c,
                    hidden: o
                }, n = t[this.model.get("type")], this.options.readonly ? this.controlView = new s({model: this.model}) : n && (this.controlView = new n({model: this.model}), this.controlView.autoSave = this.autoSave), e = this.templates.wrapper({
                    model: this.model,
                    helper: l,
                    readonly: this.options.readonly,
                    type: this.model.get("type")
                }), this.$el.html(e), n = this.model.get("type"), this.controlView && (this.controlView.render().$el.appendTo(this.$(".snipcart-customfield-element")), "checkbox" === n && this.controlView && this.$(".snipcart-customfield-element").insertBefore(this.$el.find("label"))), this.$el.addClass("snipcart-customfield-" + n), this.$el.addClass("snip-form__container"), this
            }, e.prototype.validate = function () {
                return !!this.model.validate() || (this.render(), !1)
            }, e.prototype.close = function () {
                return this.controlView && this.controlView.remove(), this.remove()
            }, e.prototype.templates = {wrapper: p}, e
        }(e.View), t.exports = r
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s, a = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, c = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)u.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, u = {}.hasOwnProperty;
        i = n(3), o = n(57), s = n(99), r = function (t) {
            function n() {
                return this.save = a(this.save, this), this.getValue = a(this.getValue, this), this.initialize = a(this.initialize, this), n.__super__.constructor.apply(this, arguments)
            }

            return c(n, t), n.prototype.autoSave = !0, n.prototype.options = {}, n.prototype.initialize = function (t) {
                return this.options = t
            }, n.prototype.events = {change: "save"}, n.prototype.render = function () {
                var t;
                return t = this.template({helper: o, model: this.model}), this.$el.html(t), this
            }, n.prototype.getValue = function () {
                return this.$("input").val()
            }, n.prototype.save = function () {
                if (this.model.set("value", this.getValue()), this.autoSave)return this.model.save()
            }, n.prototype.template = e.template(s), n
        }(i.View), t.exports = r
    }).call(e, n(5))
}, function (t, e) {
    t.exports = '<input type="text"\r\n  id="<%= model.sanitizedName() %>"\r\n  value="<%= model.get("value") %>" \r\n  <% if (model.get("required")) { %>\r\n    class="snipcart-required"\r\n  <% } %>/>\r\n'
}, function (t, e, n) {
    (function (e, i) {
        var r, o, s = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, a = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)c.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, c = {}.hasOwnProperty;
        o = n(101), r = function (t) {
            function e() {
                return this.save = s(this.save, this), this.render = s(this.render, this), e.__super__.constructor.apply(this, arguments)
            }

            return a(e, t), e.prototype.tagName = "select", e.prototype.autoSave = !0, e.prototype.events = {change: "save"}, e.prototype.render = function () {
                var t;
                return t = this.template({model: this.model}), this.$el.html(t), this.$el.attr("id", this.model.sanitizedName()), this
            }, e.prototype.save = function () {
                var t, e;
                return t = {value: this.$el.val()}, e = this.$("option:selected").data("operation"), isNaN(e) || (t.operation = e), this.model.set(t)
            }, e.prototype.template = i.template(o), e
        }(e.View), t.exports = r
    }).call(e, n(2), n(5))
}, function (t, e) {
    t.exports = '<% _.each(model.getOptions(), function(opt) { %>\n    <option value="<%= opt.value %>" data-operation="<%= opt.operation %>"\n        <% if(opt.selected) { %> selected="selected" <% } %>>\n        <%= opt.value %>\n    </option>\n<% }) %>\n'
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s, a = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, c = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)u.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, u = {}.hasOwnProperty;
        i = n(3), o = n(57), s = n(103), r = function (t) {
            function n() {
                return this.save = a(this.save, this), this.getValue = a(this.getValue, this), this.initialize = a(this.initialize, this), n.__super__.constructor.apply(this, arguments)
            }

            return c(n, t), n.prototype.tagName = "span", n.prototype.autoSave = !0, n.prototype.options = {}, n.prototype.events = {click: "save"}, n.prototype.initialize = function (t) {
                return this.options = t
            }, n.prototype.render = function () {
                var t;
                return t = this.template({helper: o, model: this.model}), this.$el.html(t), this
            }, n.prototype.getValue = function () {
                return this.$("input").is(":checked").toString()
            }, n.prototype.save = function () {
                return this.model.set("value", this.getValue()), this.autoSave && this.model.save(), this.render()
            }, n.prototype.template = e.template(s), n
        }(i.View), t.exports = r
    }).call(e, n(5))
}, function (t, e) {
    t.exports = '<input class="snip-product__customfields-checkbox" type="checkbox" \r\n  id="<%= model.sanitizedName() %>"\r\n  <% if(model.get("required")) { %>class="snipcart-required"<% } %>\r\n  <% if(model.get("value") === "true") { %> checked="checked" <% } %>/>\r\n\r\n'
}, function (t, e, n) {
    (function (e) {
        var i, r = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)o.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, o = {}.hasOwnProperty;
        i = function (t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }

            return r(e, t), e.prototype.template = n(105), e
        }(e.View), t.exports = i
    }).call(e, n(2))
}, function (t, e) {
    t.exports = "<% if(model.type != 'hidden') { %>\r\n    <span class=\"snipcart-customfield-value\">\r\n        <%= model.value %>\r\n    </span>\r\n<% } %>"
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s, a = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, c = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)u.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, u = {}.hasOwnProperty;
        i = n(3), o = n(57), s = n(107), r = function (t) {
            function n() {
                return this.save = a(this.save, this), this.getValue = a(this.getValue, this), n.__super__.constructor.apply(this, arguments)
            }

            return c(n, t), n.prototype.tagName = "span", n.prototype.autoSave = !0, n.prototype.events = {change: "save"}, n.prototype.render = function () {
                var t;
                return t = this.template({helper: o, model: this.model}), this.$el.html(t), this
            }, n.prototype.getValue = function () {
                return this.$("textarea").val()
            }, n.prototype.save = function () {
                if (this.model.set("value", this.getValue()), this.autoSave)return this.model.save()
            }, n.prototype.template = e.template(s), n
        }(i.View), t.exports = r
    }).call(e, n(5))
}, function (t, e) {
    t.exports = '<textarea\n       id="<%= model.sanitizedName() %>"\n  <% if (model.get("required")) { %>\n    class="snipcart-required"\n  <% } %>><%= model.get("value") %></textarea>\n'
}, function (t, e, n) {
    var i, r, o = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }, s = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e)a.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, a = {}.hasOwnProperty;
    i = [n(7), n(5), n(2), n(57), n(109)], r = function (t, e, n, i, r) {
        var a;
        return a = function (t) {
            function e() {
                return this.getValue = o(this.getValue, this), this.save = o(this.save, this), this.initialize = o(this.initialize, this), e.__super__.constructor.apply(this, arguments)
            }

            return s(e, t), e.prototype.tagName = "span", e.prototype.autoSave = !0, e.prototype.templateText = r, e.prototype.initialize = function (t) {
                return this.options = t
            }, e.prototype.templateArgs = {helpers: i}, e.prototype.events = {change: "save"}, e.prototype.save = function () {
                if (this.model.set("value", this.getValue()), this.autoSave)return this.model.save()
            }, e.prototype.getValue = function () {
                return {value: this.$("input").val()}
            }, e
        }(n.View)
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function (t, e) {
    t.exports = "<%= helpers.input(model, \"value\", {\r\n    id: model.sanitizedName,\r\n    type: 'hidden'\r\n}) %>"
}, function (t, e, n) {
    var i = n(85);
    t.exports = function (t) {
        var e, n = [], r = t || {};
        return function (t, r, o, s) {
            "hidden" != s && n.push("<label" + i.attr("for", r.sanitizedName(), !0, !0) + ' class="snip-form__label">' + i.escape(null == (e = r.get("name")) ? "" : e) + "</label>"), n.push('<div class="snipcart-customfield-element"></div>'), r.errors.value && !o && n.push('<p class="snip-form__error">' + i.escape(null == (e = t.joinErrorMessages(r.errors.value)) ? "" : e) + "</p>")
        }.call(this, "helper" in r ? r.helper : "undefined" != typeof helper ? helper : void 0, "model" in r ? r.model : "undefined" != typeof model ? model : void 0, "readonly" in r ? r.readonly : "undefined" != typeof readonly ? readonly : void 0, "type" in r ? r.type : "undefined" != typeof type ? type : void 0), n.join("")
    }
}, function (t, e, n) {
    var i = n(85);
    t.exports = function (t) {
        var e, n = [], r = t || {};
        return function (t) {
            n.push('<form id="snipcart-orderinfos-form"><div class="snip-layout__content"><div class="snip-cols"><div class="snip-col"></div><div class="snip-col"></div><div class="snip-col"></div></div></div><div class="snip-actions"><a href="#" id="snipcart-previous" class="snip-btn snip-btn--left">' + i.escape(null == (e = t.getResource("previous")) ? "" : e) + '</a><a href="#" id="snipcart-next" class="snip-btn snip-btn--left snip-btn--highlight snip-btn--right">' + i.escape(null == (e = t.getResource("next")) ? "" : e) + '</a><input type="submit" style="visibility: hidden"></div></form>')
        }.call(this, "helper" in r ? r.helper : "undefined" != typeof helper ? helper : void 0), n.join("")
    }
}, function (t, e, n) {
    (function (e, i) {
        var r, o, s, a, c, u, l, p = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, h = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)d.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, d = {}.hasOwnProperty;
        o = n(113), u = n(57), l = n(137), s = n(39), r = n(63), c = function (t) {
            function e() {
                return this.afterRender = p(this.afterRender, this), this.close = p(this.close, this), this.loadComplete = p(this.loadComplete, this), this.load = p(this.load, this), this.templateArgs = p(this.templateArgs, this), this.initialize = p(this.initialize, this), e.__super__.constructor.apply(this, arguments)
            }

            return h(e, t), e.prototype.fetch = !0, e.prototype.pageName = "order-details", e.prototype.hideStep = !0, e.prototype.hideTotal = !0, e.prototype.template = n(137), e.prototype.initialize = function (t) {
                return this.options = t
            }, e.prototype.templateArgs = function () {
                var t;
                return {
                    helper: u,
                    shippingEnabled: this.model.hasShipping(),
                    card: null != (t = this.model.get("card")) ? t.toJSON() : void 0,
                    paymentMethod: this.model.get("paymentMethod")
                }
            }, e.prototype.load = function () {
                return this.inject("mainview").setTitle(""), this.inject("mainview").load({message: this.inject("viewhelper").getResource("loading")})
            }, e.prototype.loadComplete = function () {
                return this.inject("mainview").loadComplete()
            }, e.prototype.close = function () {
                return this.contentView && this.contentView.remove(), this.remove()
            }, e.prototype.afterRender = function () {
                return "InProgress" !== this.model.get("status") && this.inject("mainview").setTitle(this.model.get("invoiceNumber")), this.contentView && this.contentView.remove(), this.contentView = new o({
                    model: this.model,
                    collections: {
                        items: this.model.get("items"),
                        discounts: this.model.get("discounts"),
                        plans: this.model.get("plans")
                    },
                    shippingEnabled: this.model.hasShipping(),
                    showTotals: !0,
                    hideActions: !0,
                    readonly: !0
                }), this.contentView.renderIn(this, "#snipcart-cart-content")
            }, e
        }(e.ItemView), a = function (t) {
            function e() {
                return this.previous = p(this.previous, this), this.templateArgs = p(this.templateArgs, this), e.__super__.constructor.apply(this, arguments)
            }

            return h(e, t), e.prototype.pageName = "order-confirm", e.prototype.tab = "#snipcart-confirm-step", e.prototype.fetch = !1, e.prototype.hideStep = !1, e.prototype.hideTotal = !1, e.prototype.ui = {
                submit: ".js-submit",
                back: ".js-back"
            }, e.prototype.events = {
                "click @ui.submit": "finalize",
                "click @ui.back": "previous"
            }, e.prototype.templateArgs = function () {
                var t;
                return i.extend(e.__super__.templateArgs.call(this), {
                    card: null != (t = this.model.get("card")) ? t.displayable() : void 0,
                    collection: this.collection,
                    shippingEnabled: this.options.app.shippingEnabled()
                })
            }, e.prototype.afterRender = function () {
                var t, n;
                return t = this.inject("cart"), n = t.get("paymentMethod"), this.inject("mainview").load({
                    loadingElement: "#snipcart-load-cart-content",
                    message: this.inject("viewhelper").getResource("order_totals_computing"),
                    hideContent: !1,
                    waitsFor: 0
                }), this.model.fetch().always(function (t) {
                    return function () {
                        return t.inject("mainview").loadComplete()
                    }
                }(this)).done(function (t) {
                    return function () {
                        return t.model.set("paymentMethod", n), e.__super__.afterRender.call(t), t.contentView.applyView.on("discount.applied", t.afterRender)
                    }
                }(this)).fail(function (t) {
                    return function (e) {
                        var n, i, r, o, a;
                        if (r = JSON.parse(e.responseText), r.errors.taxes && r.errors.taxes.length > 0) {
                            for (s.log("Failed to compute taxes for current order."), o = r.errors.taxes, n = 0, i = o.length; n < i; n++)a = o[n], s.log("Tax Cloud Error - " + a);
                            return t.inject("routers").order.shippingOrBillingAddress(), t.inject("flash").showMessage({
                                type: "error",
                                message: t.inject("viewhelper").getResource("error_impossible_to_calculate_taxes")
                            })
                        }
                    }
                }(this))
            }, e.prototype.previous = function (t) {
                return t.preventDefault(), this.inject("routers").payment.navigate("payment-method", !0)
            }, e.prototype.finalize = function () {
                return this.inject("mainview").load({
                    hideStep: !0,
                    message: u.getResource("order_completing_payment")
                }), this.model.pay().always(function (t) {
                    return function () {
                        return t.inject("mainview").loadComplete()
                    }
                }(this)).done(function (t) {
                    return function (e) {
                        return t.success(e)
                    }
                }(this)).fail(function (t) {
                    return function (e) {
                        return t.model.validationFailed ? void t.inject("routers").cart.navigate("checkout", !0) : (t.model.get("card").errors = e.errors, "Paypal" === t.model.get("paymentMethod") && "10486" === e.errors.code[0] ? (t.inject("flash").showMessage({
                            type: "error",
                            message: "We had a problem processing the payment, you will be redirected to PayPal to fix the issue."
                        }), t.$("#snipcart-actions").hide(), t.redirect(e.errors.redirectUrl[0])) : "Paypal" === t.model.get("paymentMethod") ? t.inject("routers").payment.navigate("payment-failed", !0) : t.inject("routers").payment.navigate("payment-method", !0))
                    }
                }(this))
            }, e.prototype.success = function (t) {
                var e;
                return this.inject("vent").trigger("order.completed", this.model.toJSON()), this.inject("flash").showMessage({
                    type: "success",
                    message: u.getResource("thankyou_message")
                }), e = this.inject(), e.reset(), this.inject("routers").order.navigate("orders/" + this.model.get("token"), !0)
            }, e.prototype.redirect = function (t) {
                return window.location.href = t
            }, e
        }(c), t.exports = {OrderView: c, OrderConfirmView: a}
    }).call(e, n(2), n(5))
}, function (t, e, n) {
    (function (e, i) {
        var r, o, s, a, c, u, l, p, h, d = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, f = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)m.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, m = {}.hasOwnProperty;
        o = n(114), s = n(118), u = n(123), r = n(124), c = n(44), h = n(128), p = n(134), l = n(51), a = function (t) {
            function e() {
                return this.checkIfCartIsEmpty = d(this.checkIfCartIsEmpty, this), this.validate = d(this.validate, this), this._next = d(this._next, this), this.saveAndNext = d(this.saveAndNext, this), this.next = d(this.next, this), this.removed = d(this.removed, this), this.close = d(this.close, this), this.showDiscountBox = d(this.showDiscountBox, this), this.renderDiscounts = d(this.renderDiscounts, this), this.renderPlans = d(this.renderPlans, this), this.renderItems = d(this.renderItems, this), this.afterRender = d(this.afterRender, this), this.templateArgs = d(this.templateArgs, this), this.init = d(this.init, this), e.__super__.constructor.apply(this, arguments)
            }

            return f(e, t), e.prototype.template = n(136), e.prototype.hideActions = !1, e.prototype.readonly = !1, e.prototype.showTotals = !1, e.prototype.tab = "#snipcart-checkout-step", e.prototype.events = {
                "click .js-next": "_next",
                "click .js-save-n-next": "saveAndNext",
                "click #snipcart-show-discount-box": "showDiscountBox"
            }, e.prototype.init = function (t) {
                var e, n;
                return this.model = null != (e = t.model) ? e : this.inject("cart"), this.collections = null != (n = null != t ? t.collections : void 0) ? n : this.inject().collections,
                    this.excluseFooter = null != t ? t.excludeFooter : void 0, this.showTotals = null != t ? t.showTotals : void 0, this.readonly = null != t ? t.readonly : void 0, this.listenTo(this, "removed", this.removed), this.listenTo(this.collections.items, "remove", this.checkIfCartIsEmpty), this.listenTo(this.collections.plans, "remove", this.checkIfCartIsEmpty)
            }, e.prototype.templateArgs = function () {
                var t, e, n, r, o;
                return t = {
                    currency: null != (e = this.model) ? e.get("currency") : void 0,
                    helper: this.inject("viewhelper"),
                    hideActions: this.hideActions,
                    showTotals: this.showTotals,
                    payableNow: null != (n = this.model) && null != (r = n.get("summary")) ? r.payableNow : void 0,
                    summary: null != (o = this.model) ? o.get("summary") : void 0,
                    anyInvalid: i.some(this.collections.items.models, function (t) {
                        return t.invalid
                    })
                }
            }, e.prototype.afterRender = function () {
                var t, e, n;
                if (this.renderItems(), this.renderPlans(), this.renderDiscounts(), this.showTotals && (t = this.model.get("summary"), "InProgress" === this.model.get("status") && (e = new p(t.upcomingPayments), e.size() > 0)))return n = new h({collection: e}), n.renderIn(this, "#snipcart-upcoming-payments")
            }, e.prototype.renderItems = function () {
                return this.itemsView = new o({
                    model: this.model,
                    readonly: this.readonly,
                    collection: this.collections.items
                }), this.itemsView.setHeader(this.$("#snipcart-items-header")).setBody(this.$("#snipcart-items-list")), this.itemsView.render()
            }, e.prototype.renderPlans = function () {
                return this.plansView = new s({
                    model: this.model,
                    readonly: this.readonly,
                    collection: this.collections.plans
                }), this.plansView.setHeader(this.$("#snipcart-plans-header")).setBody(this.$("#snipcart-plans-list")), this.plansView.render()
            }, e.prototype.renderDiscounts = function () {
                if (this.discountsView = new u({
                        model: this.model,
                        collection: this.collections.discounts,
                        helper: this.inject("viewhelper"),
                        readonly: this.readonly
                    }), this.discountsView.setBody(this.$("#snipcart-discounts-list")).render(), "InProgress" === this.model.get("status"))return this.applyView = new r({
                    collection: this.collections.discounts,
                    model: new c({token: this.model.id})
                }), this.listenTo(this.applyView, "discount.applied", this._applyDiscount)
            }, e.prototype._applyDiscount = function (t) {
                return this.discountsView.collection.add(t)
            }, e.prototype.showDiscountBox = function (t) {
                return this.prevent(t), this.$("#snipcart-discounts").html(this.applyView.render().$el)
            }, e.prototype.close = function () {
                return this.itemsView.remove(), this.discountsView.remove(), this.plansView.remove(), this.remove()
            }, e.prototype.removed = function () {
                return this.itemsView.clearSubviews()
            }, e.prototype.next = function () {
                return this.inject("routers").order.infosOrBillingAddress()
            }, e.prototype.saveAndNext = function () {
                var t, e, n, r, o;
                for (o = i.filter(this.collections.items.models, function (t) {
                    return t.invalid
                }), t = [], e = 0, n = o.length; e < n; e++)r = o[e], "PriceDoesNotMatch" === r.invalidReason ? t.push(r.save().then(function (t) {
                    return function () {
                        return r.invalid = !1, r.invalidReason = null
                    }
                }(this))) : t.push(r.destroy());
                return l.all(t).then(function (t) {
                    return function () {
                        return t.inject("flash").clear(), t._next()
                    }
                }(this))
            }, e.prototype._next = function () {
                if (this.validate())return this.next()
            }, e.prototype.validate = function () {
                return this.itemsView.validateCustomFields()
            }, e.prototype.checkIfCartIsEmpty = function () {
                if (this.model.isEmpty() && this.inject("mainview").visible)return this.inject("mainview").showEmptyView()
            }, e
        }(e.View), t.exports = a
    }).call(e, n(2), n(5))
}, function (t, e, n) {
    (function (e) {
        var i, r = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, o = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)s.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, s = {}.hasOwnProperty;
        i = function (t) {
            function e() {
                return this.validateCustomFields = r(this.validateCustomFields, this), this.templateArgs = r(this.templateArgs, this), this.init = r(this.init, this), e.__super__.constructor.apply(this, arguments)
            }

            return o(e, t), e.prototype.id = "snipcart-items", e.prototype.className = "snip-table snip-table--small", e.prototype.headerClassName = "snip-table__header snip-table__header--large", e.prototype.bodyClassName = "snip-table__body", e.prototype.headerTemplate = n(115), e.prototype.itemView = n(116), e.prototype.hideHeaderWhenEmpty = !0, e.prototype.init = function (t) {
                if (this.listenTo(this.collection, "add", this.prependItem), t)return this.readonly = t.readonly
            }, e.prototype.templateArgs = function () {
                return {
                    currency: this.model.get("currency"),
                    readonly: this.readonly,
                    helper: this.inject("viewhelper"),
                    canBeDuplicated: function (t) {
                        return function (t) {
                            return t.duplicatable
                        }
                    }(this)
                }
            }, e.prototype.validateCustomFields = function () {
                var t, e, n, i, r;
                for (r = !0, i = this.collection.models, e = 0, n = i.length; e < n; e++)t = i[e], r = t.currentView.validate() && r;
                return r
            }, e
        }(e.ListView), t.exports = i
    }).call(e, n(2))
}, function (t, e, n) {
    var i = n(85);
    t.exports = function (t) {
        var e, n = [], r = t || {};
        return function (t, r) {
            n.push("<th>" + i.escape(null == (e = t.getResource("cart_items_table_item")) ? "" : e) + '</th><th></th><th class="snip-table__cell--center">' + i.escape(null == (e = t.getResource("cart_items_table_quantity")) ? "" : e) + '</th><th class="snip-table__cell--right">' + i.escape(null == (e = t.getResource("cart_items_table_unit_price")) ? "" : e) + '</th><th class="snip-table__cell--right">' + i.escape(null == (e = t.getResource("cart_items_table_total_price")) ? "" : e) + "</th>"), r || n.push("<th></th><th></th>")
        }.call(this, "helper" in r ? r.helper : "undefined" != typeof helper ? helper : void 0, "readonly" in r ? r.readonly : "undefined" != typeof readonly ? readonly : void 0), n.join("")
    }
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s, a = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, c = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)u.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, u = {}.hasOwnProperty;
        r = n(97), o = n(69), s = n(57), i = function (t) {
            function e() {
                return this.validate = a(this.validate, this), this.renderCustomFields = a(this.renderCustomFields, this), this.removeItem = a(this.removeItem, this), this.saveModel = a(this.saveModel, this), this.enable = a(this.enable, this), this.disable = a(this.disable, this), this.customFieldsChanged = a(this.customFieldsChanged, this), this.decrementQuantity = a(this.decrementQuantity, this), this.afterRender = a(this.afterRender, this), this.modelChanged = a(this.modelChanged, this), this.incrementQuantity = a(this.incrementQuantity, this), this.duplicateItem = a(this.duplicateItem, this), this.init = a(this.init, this), this.templateArgs = a(this.templateArgs, this), this.bindingMethods = a(this.bindingMethods, this), e.__super__.constructor.apply(this, arguments)
            }

            return c(e, t), e.prototype.isBound = !0, e.prototype.tagName = "tr", e.prototype.template = n(117), e.prototype.customFields = [], e.prototype.bindingMethods = function () {
                return s
            }, e.prototype.ui = {
                remove: ".snip-product__remove",
                addQuantity: ".snip-quantity-trigger__btn--add",
                minusQuantity: ".snip-quantity-trigger__btn--minus",
                duplicate: ".snip-quantity-trigger__btn--duplicate",
                customFields: ".snip-customfields"
            }, e.prototype.events = {
                "click @ui.remove": "removeItem",
                "click @ui.addQuantity": "incrementQuantity",
                "click @ui.minusQuantity": "decrementQuantity",
                "click @ui.duplicate": "duplicateItem"
            }, e.prototype.templateArgs = function () {
                var t;
                return t = {invalid: this.model.invalid, invalidReason: this.model.invalidReason}
            }, e.prototype.init = function () {
                var t;
                return t = this.model.getCustomFields(), t && t.on("change", this.customFieldsChanged), this.model.on("destroy", this.remove)
            }, e.prototype.duplicateItem = function (t) {
                if (this.prevent(t), !this.readonly)return this.model.duplicate()
            }, e.prototype.incrementQuantity = function (t) {
                if (this.prevent(t), !this._disabled)return this.model.get("maxQuantity") && this.model.get("quantity") >= this.model.get("maxQuantity") ? void this.inject("logger").log("Impossible to increment item quantity, the max quantity has been reached for this item.") : (this.model.incrementQuantity(), this.saveModel({silent: !0}))
            }, e.prototype.modelChanged = function () {
                return this.render()
            }, e.prototype.afterRender = function () {
                if (this.renderCustomFields(), this.model.invalid)return this.$el.addClass("snip-table__row--invalid")
            }, e.prototype.decrementQuantity = function (t) {
                if (this.prevent(t), !this._disabled)return this.model.decrementQuantity() ? this.saveModel({silent: !0}) : void 0
            }, e.prototype.customFieldsChanged = function () {
                return this.saveModel({silent: !0})
            }, e.prototype.disable = function () {
                return this._disabled = !0, setTimeout(function (t) {
                    return function () {
                        if (t._disabled)return t.$(t.ui.addQuantity).addClass("snip-quantity-trigger__btn--disabled"), t.$(t.ui.minusQuantity).addClass("snip-quantity-trigger__btn--disabled"), t.$(t.ui.remove).addClass("snip-product__remove--disabled")
                    }
                }(this), 600)
            }, e.prototype.enable = function () {
                return this._disabled = !1, this.$(this.ui.addQuantity).removeClass("snip-quantity-trigger__btn--disabled"), this.$(this.ui.minusQuantity).removeClass("snip-quantity-trigger__btn--disabled"), this.$(this.ui.minusQuantity).removeClass("snip-quantity-trigger__btn--disabled"), this.$(this.ui.remove).removeClass("snip-product__remove--disabled")
            }, e.prototype.saveModel = function (t) {
                if (!this._disabled)return this.disable(), this.inject("mainview").showLoader({delay: 500}), this.model.save().always(function (t) {
                    return function () {
                        return t.inject("mainview").hideLoader(), t.enable()
                    }
                }(this)).done(function (e) {
                    return function () {
                        if (null == t || !t.silent)return e.render()
                    }
                }(this)).fail(function (t) {
                    return function (e) {
                        return t.inject("logger").log("The item has not been modified, something went wrong"), t.render()
                    }
                }(this))
            }, e.prototype.removeItem = function (t) {
                if (this.prevent(t), !this._disabled)return this.model.destroy().fail(function (t) {
                    return function (e) {
                        return t.inject("logger").log("The item has not been removed, something went wrong.")
                    }
                }(this))
            }, e.prototype.renderCustomFields = function () {
                var t, e, n, i, o, s, a;
                for (e = this.model.getCustomFields(), o = e.models, s = [], n = 0, i = o.length; n < i; n++)t = o[n], a = new r({
                    readonly: this.parent.readonly,
                    model: t
                }), a.render().$el.appendTo(this.$(this.ui.customFields)), s.push(this.customFields.push(a));
                return s
            }, e.prototype.validate = function () {
                var t, e, n, i, r;
                if (this.readonly)return !0;
                for (r = !0, i = this.customFields, e = 0, n = i.length; e < n; e++)t = i[e], r = ("function" == typeof t.validate ? t.validate() : void 0) && r;
                return r
            }, e
        }(e.ItemView), t.exports = i
    }).call(e, n(2))
}, function (t, e, n) {
    var i = n(85);
    t.exports = function (t) {
        var e, n = [], r = t || {};
        return function (t, r, o, s, a, c, u, l, p) {
            n.push('<td class="snip-table__cell--clear">'), u.image && null != u.image && n.push('<div class="snip-product__thumbnail"><img' + i.attr("src", u.image, !0, !0) + "></div>"), n.push('<h2 class="snip-product__name">' + i.escape(null == (e = u.name) ? "" : e) + '</h2><p class="snip-product__description">' + (null == (e = u.description) ? "" : e) + "</p></td>"), l ? n.push("<td" + i.attr("colspan", r, !0, !0) + ' class="snip-table__cell--center">' + i.escape(null == (e = s.getResource("item_out_of_stock")) ? "" : e) + '<a href="#" class="snip-product__remove snip-ico snip-ico--close">' + i.escape(null == (e = s.getResource("click_here_to_remove_it")) ? "" : e) + "</a></td>") : a && "PriceDoesNotMatch" != c ? n.push('<td colspan="6" class="snip-table__cell--center"> \n' + i.escape(null == (e = s.getResource("item_invalid_must_remove")) ? "" : e) + "</td>") : (n.push('<td class="snip-customfields"></td><td class="snip-table__cell--center snip-table__small-col"><div class="snip-quantity-trigger">'), u.stackable && !p && n.push('<a href="#" class="snip-quantity-trigger__btn snip-quantity-trigger__btn--minus"></a>'), n.push('<span data-bind="quantity" class="snip-quantity-trigger__text">' + i.escape(null == (e = u.quantity) ? "" : e) + "</span>"), u.stackable && !p && n.push('<a href="#" class="snip-quantity-trigger__btn snip-quantity-trigger__btn--add"></a>'), n.push('</div></td><td class="snip-table__cell--right snip-table__cell--bold snip-table__small-col">'), a && u.invalidPrice && n.push('<span class="snip-table__cell--invalid">' + i.escape(null == (e = s.formatMoney(u.invalidPrice)) ? "" : e) + "</span>"), n.push('<span data-bind="unitPrice" data-bind-method="formatMoney">' + i.escape(null == (e = s.formatMoney(u.unitPrice, o)) ? "" : e) + '</span></td><td class="snip-table__cell--right snip-table__cell--highlight snip-table__small-col"><span data-bind="totalPrice" data-bind-method="formatMoney">' + i.escape(null == (e = s.formatMoney(u.totalPrice, o)) ? "" : e) + "</span></td>"), p || (n.push('<td><div class="snip-loader snip-loader--table"></div></td><td><a href="#" class="snip-product__remove snip-ico snip-ico--close"></a>'), t(u) && !p && n.push('<a href="#" class="snip-quantity-trigger__btn--duplicate">+</a>'), n.push("</td>")))
        }.call(this, "canBeDuplicated" in r ? r.canBeDuplicated : "undefined" != typeof canBeDuplicated ? canBeDuplicated : void 0, "colspan" in r ? r.colspan : "undefined" != typeof colspan ? colspan : void 0, "currency" in r ? r.currency : "undefined" != typeof currency ? currency : void 0, "helper" in r ? r.helper : "undefined" != typeof helper ? helper : void 0, "invalid" in r ? r.invalid : "undefined" != typeof invalid ? invalid : void 0, "invalidReason" in r ? r.invalidReason : "undefined" != typeof invalidReason ? invalidReason : void 0, "model" in r ? r.model : "undefined" != typeof model ? model : void 0, "outOfStock" in r ? r.outOfStock : "undefined" != typeof outOfStock ? outOfStock : void 0, "readonly" in r ? r.readonly : "undefined" != typeof readonly ? readonly : void 0), n.join("")
    }
}, function (t, e, n) {
    (function (e) {
        var i, r, o = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, s = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)a.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, a = {}.hasOwnProperty;
        i = n(119), r = function (t) {
            function e() {
                return this.templateArgs = o(this.templateArgs, this), this.init = o(this.init, this), e.__super__.constructor.apply(this, arguments)
            }

            return s(e, t), e.prototype.itemView = i, e.prototype.headerTemplate = n(122), e.prototype.hideHeaderWhenEmpty = !0, e.prototype.init = function (t) {
                return this.listenTo(this.collection, "add", this.renderItem), this.readonly = null != t ? t.readonly : void 0
            }, e.prototype.templateArgs = function () {
                var t;
                return {
                    currency: null != (t = this.model) ? t.get("currency") : void 0,
                    readonly: this.readonly,
                    helper: this.inject("viewhelper")
                }
            }, e
        }(e.ListView), t.exports = r
    }).call(e, n(2))
}, function (t, e, n) {
    var i, r, o, s, a = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }, c = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e)u.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, u = {}.hasOwnProperty;
    r = n(2), s = n(120), o = n(121), i = function (t) {
        function e() {
            return this.decrease = a(this.decrease, this), this.increment = a(this.increment, this), this.destroy = a(this.destroy, this), this.templateArgs = a(this.templateArgs, this), e.__super__.constructor.apply(this, arguments)
        }

        return c(e, t), e.prototype.tagName = "tr", e.prototype.template = s, e.prototype.events = {
            "click .snip-product__remove": "destroy",
            "click .snip-quantity-trigger__btn--add": "increment",
            "click .snip-quantity-trigger__btn--minus": "decrease"
        }, e.prototype.templateArgs = function () {
            return {helper: this.inject("viewhelper"), p: o, user: this.inject("user")}
        }, e.prototype.destroy = function (t) {
            return this.prevent(t), this.model.destroy().done(this.remove)
        }, e.prototype.increment = function (t) {
            return this.prevent(t), this.model.incrementQuantity(), this.model.save().done(this.render)
        }, e.prototype.decrease = function (t) {
            return this.prevent(t), this.model.decrementQuantity(), this.model.get("quantity") <= 0 ? this.model.destroy().done(this.remove) : this.model.save().done(this.render)
        }, e
    }(r.ItemView), t.exports = i
}, function (t, e, n) {
    var i = n(85);
    t.exports = function (t) {
        var e, n = [], r = t || {};
        return function (t, r, o, s, a, c) {
            n.push('<td colspan="2"><h2 class="snip-product__name">'), o.subscriptionId && c ? n.push("" + (null == (e = r.routeLink("subscriptions/" + o.subscriptionId, o.name)) ? "" : e)) : n.push("" + i.escape(null == (e = o.name) ? "" : e)), n.push('</h2></td><td class="snip-table__cell--center snip-table__small-col"><div class="snip-quantity-trigger">'), a || n.push('<a href="#" onclick="return false;" class="snip-quantity-trigger__btn snip-quantity-trigger__btn--minus"></a>'), n.push('<span class="snip-quantity-trigger__text">' + i.escape(null == (e = o.quantity) ? "" : e) + "</span>"), a || n.push('<a href="#" onclick="return false;" class="snip-quantity-trigger__btn snip-quantity-trigger__btn--add"></a>'), n.push('</div></td><td class="snip-table__cell--right snip-table__cell--bold snip-table__small-col">' + i.escape(null == (e = s.displayAmount(o, t)) ? "" : e) + '</td><td class="snip-table__cell--right snip-table__cell--highlight snip-table__small-col">' + i.escape(null == (e = s.displayTotalAmount(o, t)) ? "" : e) + "</td>"), a || n.push('<td><div class="snip-loader snip-loader--table"></div></td><td><a href="javascript:void(0)" class="snip-product__remove snip-ico snip-ico--close"></a></td>')
        }.call(this, "currency" in r ? r.currency : "undefined" != typeof currency ? currency : void 0, "helper" in r ? r.helper : "undefined" != typeof helper ? helper : void 0, "model" in r ? r.model : "undefined" != typeof model ? model : void 0, "p" in r ? r.p : "undefined" != typeof p ? p : void 0, "readonly" in r ? r.readonly : "undefined" != typeof readonly ? readonly : void 0, "user" in r ? r.user : "undefined" != typeof user ? user : void 0), n.join("")
    }
}, function (t, e, n) {
    var i, r, o, s = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e)a.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, a = {}.hasOwnProperty;
    i = n(2), o = n(57), r = function (t) {
        function e() {
            return e.__super__.constructor.apply(this, arguments)
        }

        return s(e, t), e.displayAmount = function (t, e) {
            return this._d(t, t.amount, e)
        }, e.displayTotalAmount = function (t, e) {
            return this._d(t, t.totalAmount, e)
        }, e._d = function (t, e, n) {
            var i;
            switch (i = o.formatMoney(e, n), t.interval) {
                case"Day":
                    return o.getResource("plan_amount_per_day", i);
                case"Week":
                    return o.getResource("plan_amount_per_week", i);
                case"Month":
                    return o.getResource("plan_amount_per_month", i);
                case"Year":
                    return o.getResource("plan_amount_per_year", i);
                default:
                    return i
            }
        }, e
    }(i.Service), t.exports = r
}, function (t, e, n) {
    var i = n(85);
    t.exports = function (t) {
        var e, n = [], r = t || {};
        return function (t, r) {
            n.push('<th colspan="2">' + i.escape(null == (e = t.getResource("cart_plans_name")) ? "" : e) + '</th><th class="snip-table__cell--center">' + i.escape(null == (e = t.getResource("cart_plans_quantity")) ? "" : e) + '</th><th class="snip-table__cell--right">' + i.escape(null == (e = t.getResource("cart_plans_amount")) ? "" : e) + '</th><th class="snip-table__cell--right">' + i.escape(null == (e = t.getResource("cart_plans_total")) ? "" : e) + "</th>"), r || n.push("<th></th><th></th>")
        }.call(this, "helper" in r ? r.helper : "undefined" != typeof helper ? helper : void 0, "readonly" in r ? r.readonly : "undefined" != typeof readonly ? readonly : void 0), n.join("")
    }
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s, a = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, c = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)u.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, u = {}.hasOwnProperty;
        r = n(44), i = n(124), o = n(126), s = function (t) {
            function e() {
                return this.initialize = a(this.initialize, this), e.__super__.constructor.apply(this, arguments)
            }

            return c(e, t), e.prototype.hasHeader = !1, e.prototype.itemView = o, e.prototype.initialize = function (t) {
                return this.helper = t.helper, this.readonly = t.readonly, this.collection.comparator = function (t) {
                    return "Shipping" === t.get("type") ? 5 : "AlternatePrice" === t.get("type") ? 4 : "Rate" === t.get("type") ? 3 : "RateOnItems" === t.get("type") ? 2 : "FixedAmount" === t.get("type") || "FixedAmountOnItems" === t.get("type") ? t.get("amountSaved") * -1 : 0
                }, this.listenTo(this.collection, "sort", this.render), this.collection.sort()
            }, e.prototype.templateArgs = function () {
                var t;
                return {
                    helper: this.helper,
                    readonly: this.readonly,
                    currency: null != (t = this.model) ? t.get("currency") : void 0
                }
            }, e
        }(e.ListView), t.exports = s
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s, a = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)c.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, c = {}.hasOwnProperty;
        r = n(44), o = n(57), s = n(125), i = function (t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }

            return a(e, t), e.prototype.templateText = s, e.prototype.initialize = function () {
                return this.vent = this.inject("vent")
            }, e.prototype.events = {"submit form": "save"}, e.prototype.templateArgs = function () {
                return {h: o}
            }, e.prototype.success = function (t) {
                return this.inject("vent").trigger("discount.added", this.model.toJSON()), this.trigger("discount.applied", this.model), this.model = new r, this.inject("cart").computeSubtotal(), this.render()
            }, e.prototype.failure = function () {
                return this.render()
            }, e
        }(e.FormView), t.exports = i
    }).call(e, n(2))
}, function (t, e) {
    t.exports = '<form id="snipcart-apply-discount" class="snip-actions">\r\n\r\n  <button class="snip-btn snip-btn--right" type="submit">\r\n    <%= h.getResource("apply_promo_code") %>\r\n  </button>\r\n\r\n  <div class="snip-form--discount">\r\n    <%= h.textbox(model, "code", {\r\n    id: "snipcart-discounts-code",\r\n    wrap: false\r\n    }) %>\r\n  </div>\r\n</form>'
}, function (t, e, n) {
    (function (e) {
        var i, r = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, o = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)s.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, s = {}.hasOwnProperty;
        i = function (t) {
            function e() {
                return this.init = r(this.init, this), e.__super__.constructor.apply(this, arguments)
            }

            return o(e, t), e.prototype.tagName = "tr", e.prototype.template = n(127), e.prototype.init = function (t) {
                return this.listenTo(this.model, "change", this.render), this.listenTo(this.model, "remove", this.remove)
            }, e
        }(e.View), t.exports = i
    }).call(e, n(2))
}, function (t, e) {
    t.exports = '<td colspan="4">\r\n    <h2 class="snip-product__name">\r\n        <%= model.name %>\r\n    </h2>\r\n</td>\r\n\r\n<% if (model.amountSaved && model.amountSaved > 0) { %>\r\n    <td class="snip-table__cell--right snip-table__cell--success">\r\n        <%= helper.formatMoney(model.amountSaved*-1, currency) %>\r\n    </td>\r\n<% } else { %>\r\n    <td class="snip-table__cell--right snip-table__cell--success"></td>\r\n<% } %>\r\n\r\n<% if (!readonly) { %>\r\n    <td></td>\r\n    <td></td>\r\n<% } %>'
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, a = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)c.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, c = {}.hasOwnProperty;
        r = n(129), o = n(133), i = function (t) {
            function e() {
                return this.showDetails = s(this.showDetails, this), this.afterRender = s(this.afterRender, this), this.templateArgs = s(this.templateArgs, this), e.__super__.constructor.apply(this, arguments)
            }

            return a(e, t), e.prototype.template = o, e.prototype.tagName = "div", e.prototype.className = "snip-layout__content snip-layout__content--highlight", e.prototype.templateArgs = function () {
                return {helper: this.inject("viewhelper"), hasMany: this.collection.size() > 1}
            }, e.prototype.afterRender = function () {
                var t;
                return t = new r({collection: this.collection}), t.renderIn(this, "#snipcart-upcoming-payments-list")
            }, e.prototype.showDetails = function (t) {
                return null != t && t.preventDefault(), null != t && t.stopPropagation(), this.$(".snipcart-upcomingpayment-details").is(":visible") ? this.$(".snipcart-upcomingpayment-details").hide() : this.$(".snipcart-upcomingpayment-details").show()
            }, e
        }(e.View), t.exports = i
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, a = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)c.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, c = {}.hasOwnProperty;
        i = n(130), o = n(132), r = function (t) {
            function e() {
                return this.templateArgs = s(this.templateArgs, this), e.__super__.constructor.apply(this, arguments)
            }

            return a(e, t), e.prototype.className = "snip-table", e.prototype.headerTemplate = o, e.prototype.headerClassName = "snip-table__header", e.prototype.bodyClassName = "snip-table__body", e.prototype.itemView = i, e.prototype.emptyTemplate = "<td class='snip-table__cell--center'>This is empty</td>", e.prototype.templateArgs = function () {
                return {helper: this.inject("viewhelper")}
            }, e
        }(e.ListView), t.exports = r
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var i, r, o = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, s = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)a.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, a = {}.hasOwnProperty;
        r = n(131), i = function (t) {
            function e() {
                return this.showDetails = o(this.showDetails, this), this.templateArgs = o(this.templateArgs, this), e.__super__.constructor.apply(this, arguments)
            }

            return s(e, t), e.prototype.templateText = r, e.prototype.tagName = "tr", e.prototype.events = {"click #snipcart-show-upcoming-payment-details": "showDetails"}, e.prototype.templateArgs = function () {
                return {helper: this.inject("viewhelper")}
            }, e.prototype.showDetails = function () {
                var t, e;
                return e = this.$("#snipcart-upcoming-payment-details"), t = this.$("#snipcart-show-upcoming-payment-details"), t.toggleClass("js-active"), e.is(":visible") ? e.hide() : e.show()
            }, e
        }(e.ItemView), t.exports = i
    }).call(e, n(2))
}, function (t, e) {
    t.exports = '<td>\r\n    <h2 class="snip-product__name">\r\n        <%= model.name %>\r\n    </h2>\r\n</td>\r\n\r\n<td class="snip-table__cell--center">\r\n    <%= helper.date(model.date) %>\r\n</td>\r\n\r\n<td class="snip-table__cell--right snip-table__cell--highlight">\r\n    \r\n    <div class="snip-tooltip__container">\r\n        <%= helper.formatMoney(model.total) %>\r\n        <a href="#" id="snipcart-show-upcoming-payment-details" class="snip-btn snip-btn--small snip-tooltip__toggle">\r\n        </a>\r\n\r\n        <div id="snipcart-upcoming-payment-details" class="snip-tooltip">\r\n            <dl class="snip-tooltip__list">\r\n                <dt>\r\n                    <%= helper.getResource(\'upcoming_payment_subtotal\') %>\r\n                </dt>\r\n                <dd class="snip-tooltip__item">\r\n                    <%= helper.formatMoney(model.subtotal) %>\r\n                </dd>\r\n\r\n                <% _.each (model.taxes, function (t) { %>\r\n                <dt><%= t.taxName %></dt>\r\n                <dd class="snip-tooltip__item">\r\n                    <%= helper.formatMoney(t.amount) %>\r\n                </dd>\r\n                <% }); %>\r\n\r\n                <dt><%= helper.getResource(\'upcoming_payment_amount\') %></dt>\r\n                <dd class="snip-tooltip__item">\r\n                    <%= helper.formatMoney(model.total) %>\r\n                </dd>\r\n            </dl>\r\n        </div>\r\n    </div>\r\n\r\n</td>'
}, function (t, e) {
    t.exports = "<th>\r\n    <%= helper.getResource('upcoming_payment_for') %>\r\n</th>\r\n<th class=\"snip-table__cell--center\">\r\n    <%= helper.getResource('upcoming_payment_date') %>\r\n</th>\r\n<th class=\"snip-table__cell--right\">\r\n    <%= helper.getResource('upcoming_payment_amount') %>\r\n</th>"
}, function (t, e, n) {
    var i = n(85);
    t.exports = function (t) {
        var e, n = [], r = t || {};
        return function (t) {
            n.push('<h2 class="snip-static__title snip-static__title--main">' + i.escape(null == (e = t.getResource("upcoming_payments")) ? "" : e) + '</h2><div id="snipcart-upcoming-payments-list"></div>')
        }.call(this, "helper" in r ? r.helper : "undefined" != typeof helper ? helper : void 0), n.join("")
    }
}, function (t, e, n) {
    var i, r, o = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e)s.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, s = {}.hasOwnProperty;
    i = [n(7), n(5), n(2), n(135)], r = function (t, e, n, i) {
        var r;
        return r = function (t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }

            return o(e, t), e.prototype.model = i, e
        }(n.Collection)
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function (t, e, n) {
    var i, r, o = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e)s.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, s = {}.hasOwnProperty;
    i = [n(7), n(5), n(2)], r = function (t, e, n) {
        var i;
        return i = function (t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }

            return o(e, t), e
        }(n.Model)
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function (t, e, n) {
    var i = n(85);
    t.exports = function (t) {
        var e, n = [], r = {}, o = t || {};
        return function (t, o, s, a, c, u, l, p, h) {
            r.totalRow = e = function (t, r) {
                this && this.block, this && this.attributes || {};
                n.push('<tr><td colspan="4"><h2 class="snip-static__title">' + i.escape(null == (e = t) ? "" : e) + '</h2></td><td class="snip-table__cell--right snip-table__cell--highlight">' + i.escape(null == (e = s.formatMoney(r, o)) ? "" : e) + "</td></tr>")
            }, n.push('<table id="snipcart-items" class="snip-table snip-table--small"><thead id="snipcart-items-header" class="snip-table__header snip-table__header--large"></thead><tbody id="snipcart-items-list" class="snip-table__body"></tbody><thead id="snipcart-plans-header" class="snip-table__header"></thead><tbody id="snipcart-plans-list" class="snip-table__body"></tbody><tbody id="snipcart-discounts-list" class="snip-table__body"></tbody>'), l && (n.push('<tbody id="snipcart-fees" class="snip-table__body snip-table__body--small">'), r.totalRow(s.getResource("subtotal"), p.subtotal), c.shippingInformation && c.shippingInformation.method && r.totalRow(c.shippingInformation.method, c.shippingInformation.fees), function () {
                var t = p.taxes;
                if ("number" == typeof t.length)for (var e = 0, n = t.length; e < n; e++) {
                    var i = t[e];
                    r.totalRow(i.name, i.amount)
                } else {
                    var n = 0;
                    for (var e in t) {
                        n++;
                        var i = t[e];
                        r.totalRow(i.name, i.amount)
                    }
                }
            }.call(this), n.push('</tbody><tbody id="snipcart-total" class="snip-table__body snip-table__body--big">'), u && "InProgress" == c.status ? r.totalRow(s.getResource("payable_now"), u) : r.totalRow(s.getResource("InProgress" == c.status ? "total" : "total_paid"), p.total), n.push("</tbody>")), n.push('</table><div id="snipcart-upcoming-payments"></div>'), "InProgress" == c.status && n.push('<div id="snipcart-discounts"><div class="snip-actions"><a href="#" id="snipcart-show-discount-box" class="snip-actions__link snip-actions__link--small snip-actions__link--right">' + i.escape(null == (e = s.getResource("have_a_promocode_question")) ? "" : e) + "</a></div></div>"), a || (n.push('<div id="snipcart-actions" class="snip-actions">'), t ? n.push('<a class="js-save-n-next snip-btn snip-btn--highlight snip-btn--right">' + i.escape(null == (e = s.getResource("accept_cart_changes")) ? "" : e) + "</a>") : n.push('<a class="js-next snip-btn snip-btn--highlight snip-btn--right">' + i.escape(null == (e = s.getResource("next")) ? "" : e) + "</a>"), n.push("</div>"))
        }.call(this, "anyInvalid" in o ? o.anyInvalid : "undefined" != typeof anyInvalid ? anyInvalid : void 0, "currency" in o ? o.currency : "undefined" != typeof currency ? currency : void 0, "helper" in o ? o.helper : "undefined" != typeof helper ? helper : void 0, "hideActions" in o ? o.hideActions : "undefined" != typeof hideActions ? hideActions : void 0, "model" in o ? o.model : "undefined" != typeof model ? model : void 0, "payableNow" in o ? o.payableNow : "undefined" != typeof payableNow ? payableNow : void 0, "showTotals" in o ? o.showTotals : "undefined" != typeof showTotals ? showTotals : void 0, "summary" in o ? o.summary : "undefined" != typeof summary ? summary : void 0, "undefined" in o ? o.undefined : void 0), n.join("")
    }
}, function (t, e, n) {
    var i = n(85);
    t.exports = function (t) {
        var e, n = [], r = {}, o = t || {};
        return function (t, o, s, a) {
            r.showAddress = e = function (t) {
                this && this.block, this && this.attributes || {};
                n.push("<p>"), t.firstName ? n.push("" + i.escape(null == (e = t.firstName) ? "" : e) + "\n" + i.escape(null == (e = t.name) ? "" : e)) : n.push("" + i.escape(null == (e = t.name) ? "" : e)), n.push("</p>"), t.email && n.push("<p>" + i.escape(null == (e = t.email) ? "" : e) + "</p>"), n.push("<p>" + i.escape(null == (e = t.company) ? "" : e) + "</p><p>" + i.escape(null == (e = t.address1) ? "" : e) + "</p>"), t.address2 && n.push("<p>" + i.escape(null == (e = t.address2) ? "" : e) + "</p>"), n.push("<p>" + i.escape(null == (e = t.city) ? "" : e)), t.province && n.push(", " + i.escape(null == (e = t.province) ? "" : e)), t.country && n.push(", " + i.escape(null == (e = t.country) ? "" : e)), n.push("</p><p>" + i.escape(null == (e = t.postalCode) ? "" : e) + "</p><p>" + i.escape(null == (e = t.phone) ? "" : e) + "</p>")
            }, r.paymentInfo = e = function (t, r) {
                this && this.block, this && this.attributes || {};
                n.push("<p>" + i.escape(null == (e = o.getResource(t)) ? "" : e) + " : " + i.escape(null == (e = r) ? "" : e) + "</p>")
            }, n.push('<div class="snip-cols snip-layout__content snip-layout__content--bordered"><div class="snip-col"><h2 class="snip-static__title">' + i.escape(null == (e = o.getResource("billing_address")) ? "" : e) + '</h2><div class="snip-static__content">'), r.showAddress(s.billingAddress),
                n.push("</div></div>"), a && (n.push('<div class="snip-col"><h2 class="snip-static__title">' + i.escape(null == (e = o.getResource("shipping_address")) ? "" : e) + '</h2><div class="snip-static__content">'), r.showAddress(s.shippingAddress), n.push("</div></div>")), n.push('<div class="snip-col"><h2 class="snip-static__title">' + i.escape(null == (e = o.getResource("payment_informations")) ? "" : e) + "</h2>"), "WillBePaidLater" == s.paymentMethod ? n.push('<div class="snip-static__content"><p>' + i.escape(null == (e = o.getResource("payment_informations_bill_me_later")) ? "" : e) + "</p></div>") : "None" == s.paymentMethod ? n.push('<div class="snip-static__content"><p>' + i.escape(null == (e = o.getResource("payment_informations_no_payment_required")) ? "" : e) + "</p></div>") : "Paypal" == s.paymentMethod ? n.push('<div class="snipcart-paymentsby-paypal"><a href="https://paypal.com" target="_blank" class="real-link"><img src="https://www.paypalobjects.com/webstatic/mktg/logo/bdg_payments_by_pp_2line.png" alt="Payments by PayPal"></a></div>') : "CreditCard" == s.paymentMethod ? (n.push('<div class="snip-static__content">'), r.paymentInfo("payment_method_card_holder", t.ownerName), r.paymentInfo("payment_method_card_type", t.type), r.paymentInfo("payment_method_card_number", t.last4Digits), n.push("</div>")) : (n.push('<div class="snip-static__content">'), r.paymentInfo("payment_method", o.getResource("payment_method_" + s.paymentMethod.toLowerCase()), s.paymentMethod), r.paymentInfo("payment_status", s.paymentStatus), n.push("</div>")), n.push('</div></div><div id="snipcart-load-cart-content"></div><div id="snipcart-cart-content"></div>'), "InProgress" == s.status && n.push('<div class="snip-actions"><a class="js-back snip-btn snip-btn--left">' + i.escape(null == (e = o.getResource("previous")) ? "" : e) + '</a><a class="js-submit snip-btn snip-btn--highlight snip-btn--right">' + i.escape(null == (e = o.getResource("finalize")) ? "" : e) + "</a></div>")
        }.call(this, "card" in o ? o.card : "undefined" != typeof card ? card : void 0, "helper" in o ? o.helper : "undefined" != typeof helper ? helper : void 0, "model" in o ? o.model : "undefined" != typeof model ? model : void 0, "shippingEnabled" in o ? o.shippingEnabled : "undefined" != typeof shippingEnabled ? shippingEnabled : void 0), n.join("")
    }
}, function (t, e, n) {
    "use strict";
    var i = n(139), r = n(141);
    t.exports = {stringify: i, parse: r}
}, function (t, e, n) {
    "use strict";
    var i = n(140), r = {
        brackets: function (t) {
            return t + "[]"
        }, indices: function (t, e) {
            return t + "[" + e + "]"
        }, repeat: function (t) {
            return t
        }
    }, o = {
        delimiter: "&",
        strictNullHandling: !1,
        skipNulls: !1,
        encode: !0,
        encoder: i.encode
    }, s = function a(t, e, n, r, o, s, c, u, l) {
        var p = t;
        if ("function" == typeof c)p = c(e, p); else if (p instanceof Date)p = p.toISOString(); else if (null === p) {
            if (r)return s ? s(e) : e;
            p = ""
        }
        if ("string" == typeof p || "number" == typeof p || "boolean" == typeof p || i.isBuffer(p))return s ? [s(e) + "=" + s(p)] : [e + "=" + String(p)];
        var h = [];
        if ("undefined" == typeof p)return h;
        var d;
        if (Array.isArray(c))d = c; else {
            var f = Object.keys(p);
            d = u ? f.sort(u) : f
        }
        for (var m = 0; m < d.length; ++m) {
            var y = d[m];
            o && null === p[y] || (h = Array.isArray(p) ? h.concat(a(p[y], n(e, y), n, r, o, s, c, u, l)) : h.concat(a(p[y], e + (l ? "." + y : "[" + y + "]"), n, r, o, s, c, u, l)))
        }
        return h
    };
    t.exports = function (t, e) {
        var n, i, a = t, c = e || {}, u = "undefined" == typeof c.delimiter ? o.delimiter : c.delimiter, l = "boolean" == typeof c.strictNullHandling ? c.strictNullHandling : o.strictNullHandling, p = "boolean" == typeof c.skipNulls ? c.skipNulls : o.skipNulls, h = "boolean" == typeof c.encode ? c.encode : o.encode, d = h ? "function" == typeof c.encoder ? c.encoder : o.encoder : null, f = "function" == typeof c.sort ? c.sort : null, m = "undefined" != typeof c.allowDots && c.allowDots;
        if (null !== c.encoder && void 0 !== c.encoder && "function" != typeof c.encoder)throw new TypeError("Encoder has to be a function.");
        "function" == typeof c.filter ? (i = c.filter, a = i("", a)) : Array.isArray(c.filter) && (n = i = c.filter);
        var y = [];
        if ("object" != typeof a || null === a)return "";
        var g;
        g = c.arrayFormat in r ? c.arrayFormat : "indices" in c ? c.indices ? "indices" : "repeat" : "indices";
        var _ = r[g];
        n || (n = Object.keys(a)), f && n.sort(f);
        for (var v = 0; v < n.length; ++v) {
            var w = n[v];
            p && null === a[w] || (y = y.concat(s(a[w], w, _, l, p, d, i, f, m)))
        }
        return y.join(u)
    }
}, function (t, e) {
    "use strict";
    var n = function () {
        for (var t = new Array(256), e = 0; e < 256; ++e)t[e] = "%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase();
        return t
    }();
    e.arrayToObject = function (t, e) {
        for (var n = e.plainObjects ? Object.create(null) : {}, i = 0; i < t.length; ++i)"undefined" != typeof t[i] && (n[i] = t[i]);
        return n
    }, e.merge = function (t, n, i) {
        if (!n)return t;
        if ("object" != typeof n) {
            if (Array.isArray(t))t.push(n); else {
                if ("object" != typeof t)return [t, n];
                t[n] = !0
            }
            return t
        }
        if ("object" != typeof t)return [t].concat(n);
        var r = t;
        return Array.isArray(t) && !Array.isArray(n) && (r = e.arrayToObject(t, i)), Object.keys(n).reduce(function (t, r) {
            var o = n[r];
            return Object.prototype.hasOwnProperty.call(t, r) ? t[r] = e.merge(t[r], o, i) : t[r] = o, t
        }, r)
    }, e.decode = function (t) {
        try {
            return decodeURIComponent(t.replace(/\+/g, " "))
        } catch (e) {
            return t
        }
    }, e.encode = function (t) {
        if (0 === t.length)return t;
        for (var e = "string" == typeof t ? t : String(t), i = "", r = 0; r < e.length; ++r) {
            var o = e.charCodeAt(r);
            45 === o || 46 === o || 95 === o || 126 === o || o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122 ? i += e.charAt(r) : o < 128 ? i += n[o] : o < 2048 ? i += n[192 | o >> 6] + n[128 | 63 & o] : o < 55296 || o >= 57344 ? i += n[224 | o >> 12] + n[128 | o >> 6 & 63] + n[128 | 63 & o] : (r += 1, o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(r)), i += n[240 | o >> 18] + n[128 | o >> 12 & 63] + n[128 | o >> 6 & 63] + n[128 | 63 & o])
        }
        return i
    }, e.compact = function (t, n) {
        if ("object" != typeof t || null === t)return t;
        var i = n || [], r = i.indexOf(t);
        if (r !== -1)return i[r];
        if (i.push(t), Array.isArray(t)) {
            for (var o = [], s = 0; s < t.length; ++s)t[s] && "object" == typeof t[s] ? o.push(e.compact(t[s], i)) : "undefined" != typeof t[s] && o.push(t[s]);
            return o
        }
        for (var a = Object.keys(t), c = 0; c < a.length; ++c) {
            var u = a[c];
            t[u] = e.compact(t[u], i)
        }
        return t
    }, e.isRegExp = function (t) {
        return "[object RegExp]" === Object.prototype.toString.call(t)
    }, e.isBuffer = function (t) {
        return null !== t && "undefined" != typeof t && !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
    }
}, function (t, e, n) {
    "use strict";
    var i = n(140), r = Object.prototype.hasOwnProperty, o = {
        delimiter: "&",
        depth: 5,
        arrayLimit: 20,
        parameterLimit: 1e3,
        strictNullHandling: !1,
        plainObjects: !1,
        allowPrototypes: !1,
        allowDots: !1,
        decoder: i.decode
    }, s = function (t, e) {
        for (var n = {}, i = t.split(e.delimiter, e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit), o = 0; o < i.length; ++o) {
            var s, a, c = i[o], u = c.indexOf("]=") === -1 ? c.indexOf("=") : c.indexOf("]=") + 1;
            u === -1 ? (s = e.decoder(c), a = e.strictNullHandling ? null : "") : (s = e.decoder(c.slice(0, u)), a = e.decoder(c.slice(u + 1))), r.call(n, s) ? n[s] = [].concat(n[s]).concat(a) : n[s] = a
        }
        return n
    }, a = function u(t, e, n) {
        if (!t.length)return e;
        var i, r = t.shift();
        if ("[]" === r)i = [], i = i.concat(u(t, e, n)); else {
            i = n.plainObjects ? Object.create(null) : {};
            var o = "[" === r[0] && "]" === r[r.length - 1] ? r.slice(1, r.length - 1) : r, s = parseInt(o, 10);
            !isNaN(s) && r !== o && String(s) === o && s >= 0 && n.parseArrays && s <= n.arrayLimit ? (i = [], i[s] = u(t, e, n)) : i[o] = u(t, e, n)
        }
        return i
    }, c = function (t, e, n) {
        if (t) {
            var i = n.allowDots ? t.replace(/\.([^\.\[]+)/g, "[$1]") : t, o = /^([^\[\]]*)/, s = /(\[[^\[\]]*\])/g, c = o.exec(i), u = [];
            if (c[1]) {
                if (!n.plainObjects && r.call(Object.prototype, c[1]) && !n.allowPrototypes)return;
                u.push(c[1])
            }
            for (var l = 0; null !== (c = s.exec(i)) && l < n.depth;)l += 1, (n.plainObjects || !r.call(Object.prototype, c[1].replace(/\[|\]/g, "")) || n.allowPrototypes) && u.push(c[1]);
            return c && u.push("[" + i.slice(c.index) + "]"), a(u, e, n)
        }
    };
    t.exports = function (t, e) {
        var n = e || {};
        if (null !== n.decoder && void 0 !== n.decoder && "function" != typeof n.decoder)throw new TypeError("Decoder has to be a function.");
        if (n.delimiter = "string" == typeof n.delimiter || i.isRegExp(n.delimiter) ? n.delimiter : o.delimiter, n.depth = "number" == typeof n.depth ? n.depth : o.depth, n.arrayLimit = "number" == typeof n.arrayLimit ? n.arrayLimit : o.arrayLimit, n.parseArrays = n.parseArrays !== !1, n.decoder = "function" == typeof n.decoder ? n.decoder : o.decoder, n.allowDots = "boolean" == typeof n.allowDots ? n.allowDots : o.allowDots, n.plainObjects = "boolean" == typeof n.plainObjects ? n.plainObjects : o.plainObjects, n.allowPrototypes = "boolean" == typeof n.allowPrototypes ? n.allowPrototypes : o.allowPrototypes, n.parameterLimit = "number" == typeof n.parameterLimit ? n.parameterLimit : o.parameterLimit, n.strictNullHandling = "boolean" == typeof n.strictNullHandling ? n.strictNullHandling : o.strictNullHandling, "" === t || null === t || "undefined" == typeof t)return n.plainObjects ? Object.create(null) : {};
        for (var r = "string" == typeof t ? s(t, n) : t, a = n.plainObjects ? Object.create(null) : {}, u = Object.keys(r), l = 0; l < u.length; ++l) {
            var p = u[l], h = c(p, r[p], n);
            a = i.merge(a, h, n)
        }
        return i.compact(a)
    }
}, function (t, e, n) {
    var i, r, o, s, a, c, u, l = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }, p = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e)h.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, h = {}.hasOwnProperty;
    r = n(2), c = n(46), s = n(143), o = n(150), a = n(153), i = n(3), u = function (t) {
        function e() {
            return this.resetPassword = l(this.resetPassword, this), this.forgotPassword = l(this.forgotPassword, this), this.login = l(this.login, this), e.__super__.constructor.apply(this, arguments)
        }

        return p(e, t), e.prototype.routes = {
            login: "login",
            "forgot-password": "forgotPassword",
            "reset-password/:token": "resetPassword"
        }, e.prototype.before = function (t) {
            if (this.app.currentUser || this.app.settings.onlyAllowGuests)return "login" === t ? (this.app.routers.order.infosOrBillingAddress(), !1) : (i.history.navigate("checkout", !0), !1)
        }, e.prototype.login = function () {
            var t;
            return t = new s({
                redirectRoute: this.redirectRoute,
                app: this.app
            }), this.app.appView.setContentView(t), this.app.appView.show()
        }, e.prototype.forgotPassword = function () {
            var t;
            return t = new o({app: this.app, model: new c}), this.app.appView.setContentView(t), this.app.appView.show()
        }, e.prototype.resetPassword = function (t) {
            var e;
            return e = new a({
                app: this.app,
                model: new c({resetPasswordToken: t})
            }), this.app.appView.setContentView(e), this.app.appView.show()
        }, e
    }(r.AppRouter), t.exports = u
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s, a, c, u, l = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, p = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)h.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, h = {}.hasOwnProperty;
        c = n(57), a = n(144), u = n(145), r = n(146), s = n(148), i = n(3), o = function (t) {
            function n() {
                return this.hideGuestCheckout = l(this.hideGuestCheckout, this), this.proceed = l(this.proceed, this), this.checkoutAsGuest = l(this.checkoutAsGuest, this), this.close = l(this.close, this), this.initialize = l(this.initialize, this), n.__super__.constructor.apply(this, arguments)
            }

            return p(n, t), n.prototype.pageName = "login", n.prototype.events = {"click #snipcart-guest-checkout": "checkoutAsGuest"}, n.prototype.hideStep = !0, n.prototype.initialize = function (t) {
                return this.options = t, this.hideTotal = t.hideTotal, t.title && (this.title = t.title), this.loginFormView = new r({
                    redirectTo: t.redirectTo,
                    app: this.options.app
                }), this.newAccountView = new s({
                    redirectTo: t.redirectTo,
                    app: this.options.app
                }), this.listenTo(this.loginFormView, "loginform:loginsuccess", this.proceed), this.listenTo(this.newAccountView, "newaccount:usercreated", this.proceed)
            }, n.prototype.render = function () {
                var t;
                return t = this.template({
                    noGuest: this.options.noGuest,
                    helper: c,
                    model: this.model
                }), this.$el.html(t), this.loginFormView.setElement(this.$("#snipcart-login-form-container")).render(), this.newAccountView.setElement(this.$("#snipcart-newaccount-form-container")).render(), this.options.noGuest && this.hideGuestCheckout(), this
            }, n.prototype.template = e.template(u), n.prototype.close = function () {
                return this.loginFormView.remove(), this.newAccountView.remove(), this.remove()
            }, n.prototype.checkoutAsGuest = function (t) {
                return t.preventDefault(), this.options.app.routers.order.infosOrBillingAddress()
            }, n.prototype.proceed = function () {
                return null != this.options.redirectRoute ? i.history.navigate(this.options.redirectRoute, !0) : this.options.app.routers.order.infosOrBillingAddress()
            }, n.prototype.hideGuestCheckout = function () {
                return this.$("#snipcart-guest-checkout-container").hide()
            }, n
        }(a), t.exports = o
    }).call(e, n(5))
}, function (t, e, n) {
    (function (e, n) {
        var i, r = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, o = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)s.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, s = {}.hasOwnProperty;
        i = function (t) {
            function e() {
                return this.removeErrors = r(this.removeErrors, this), this.navigateTo = r(this.navigateTo, this), this.completed = r(this.completed, this), e.__super__.constructor.apply(this, arguments)
            }

            return o(e, t), e.prototype.className = "snipcart-step", e.prototype.errors = [], e.prototype.completed = function () {
                return !0
            }, e.prototype.initialize = function (t) {
                return this.options = t
            }, e.prototype.navigateTo = function () {
                return this.parent().getRouter().navigate(this.route, !0)
            }, e.prototype.show = function () {
                var t, e, i, r;
                for (this.options.wizardPath || (this.options.wizardPath = []), i = this.options.wizardPath, t = 0, e = i.length; t < e; t++)if (r = i[t], !r.completed())return void r.navigateTo();
                return this.rendered || (n(this.parent().el).find("#snipcart-sub-content").append(this.render()), this.rendered = !0), this.parent().hideSteps(), this.parent().changeStep(this.route), this.removeErrors(), this.beforeShow && this.beforeShow(), this.parent().current = this, this.$el.show(), this.visible = !0
            }, e.prototype.hide = function () {
                return this.beforeHide && this.beforeHide(), this.visible = !1, this.$el.hide()
            }, e.prototype.parent = function () {
                return this.options.parent
            }, e.prototype.previous = function () {
                if ("" !== this.options.previous)return this.parent().getRouter().navigate(this.options.previous, !0)
            }, e.prototype.next = function () {
                if ("" !== this.options.next)return this.parent().getRouter().navigate(this.options.next, !0)
            }, e.prototype.submit = function () {
                return void 0 !== this.doSubmit ? this.doSubmit() : this.next()
            }, e.prototype.removeErrors = function () {
                return this.$el.find(".snipcart-has-errors").removeClass("snipcart-has-errors").removeAttr("data-error-message")
            }, e.prototype.transformErrors = function () {
                return this.$el.find("[data-error-message]").each(function () {
                    return n(this).tipsy({
                        trigger: "manual", gravity: "s", title: function () {
                            return n(this).data("error-message")
                        }, opacity: 1
                    }), n(this).addClass("snipcart-has-errors")
                })
            }, e
        }(e.View), t.exports = i
    }).call(e, n(2), n(7))
}, function (t, e) {
    t.exports = '<div class="snip-cols snip-layout__content">\r\n\r\n    <div id="snipcart-guest-checkout-container" class="snip-col snip-col--right snip-col--half">\r\n        <h2 class="snip-static__title">\r\n            <%= helper.getResource("login_checkout_as_guest") %>\r\n        </h2>\r\n        <p class="snip-static__content">\r\n            <%= helper.getResource("login_checkout_as_guest_notice") %>\r\n        </p>\r\n        <a id="snipcart-guest-checkout" class="snip-btn snip-btn--highlight snip-btn--full" href="#"><%= helper.getResource("checkout") %></a>\r\n    </div>\r\n\r\n  <div id="snipcart-login-form-container" class="snip-col snip-col--half"></div>\r\n\r\n  <div id="snipcart-newaccount-form-container" class="snip-col snip-col--half"></div>\r\n\r\n</div>'
}, function (t, e, n) {
    var i, r, o, s, a, c, u, l, p = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }, h = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e)d.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, d = {}.hasOwnProperty;
    i = n(7), u = n(5), r = n(3), o = n(2), a = n(46), c = n(57), l = n(147), s = function (t) {
        function e() {
            return this.login = p(this.login, this), this.getAttributes = p(this.getAttributes, this), e.__super__.constructor.apply(this, arguments)
        }

        return h(e, t), e.prototype.loginClicked = !1, e.prototype.tagName = "div", e.prototype.events = {
            "click #snipcart-login-submit": "login",
            "click #snipcart-login-forgotpassword-link": "forgotPassword"
        }, e.prototype.initialize = function (t) {
            return this.options = t, this.app = t.app, this.model = new a
        }, e.prototype.render = function () {
            var t;
            return t = this.template({helper: c, model: this.model}), this.$el.html(t), this
        }, e.prototype.getAttributes = function () {
            return {email: this.$("#snipcart-login-email").val(), password: this.$("#snipcart-login-password").val()}
        }, e.prototype.forgotPassword = function (t) {
            return t.preventDefault(), this.options.app.routers.user.navigate("forgot-password", !0)
        }, e.prototype.login = function (t) {
            if (null != t && t.preventDefault(), !this.loginClicked)return this.loginClicked = !0, this.model.set(this.getAttributes()), this.model.login().always(function (t) {
                return function () {
                    return t.loginClicked = !1
                }
            }(this)).done(function (t) {
                return function () {
                    return t.options.app.setCurrentUser(t.model, {redirectTo: t.options.redirectTo}), t.inject("vent").trigger("authentication.success", t.model.get("email"))
                }
            }(this)).fail(function (t) {
                return function () {
                    return t.inject("vent").trigger("authentication.fail", t.model.get("email")), t.render()
                }
            }(this))
        }, e.prototype.template = u.template(l), e
    }(o.View), t.exports = s
}, function (t, e) {
    t.exports = '<h2 class="snip-static__title">\r\n    <%= helper.getResource("login_form_having_an_account") %>\r\n</h2>\r\n\r\n<form class="snip-static__content">\r\n    <% if(model.errors.login) { %>\r\n        <p class="snip-error__text">\r\n            <%= helper.joinErrorMessages(model.errors.login) %>\r\n        </p>\r\n    <% } %>\r\n\r\n    <div class="snip-form__container">\r\n        <label for="snipcart-login-email" class="snip-form__label">\r\n            <%= helper.getResource("email") %>\r\n        </label>\r\n        <input type="text" id="snipcart-login-email" value="<%= model.get("email") %>" />\r\n        <% if(model.errors.email) { %>\r\n        <p class="snip-form__error">\r\n            <%= helper.joinErrorMessages(model.errors.email) %>\r\n        </p>\r\n        <% } %>\r\n    </div>\r\n    \r\n    <div class="snip-form__container">\r\n        <label for="snipcart-login-password" class="snip-form__label">\r\n            <%= helper.getResource("password") %>\r\n        </label>\r\n        <input type="password" id="snipcart-login-password" value="<%= model.get("password") %>" />\r\n        <% if(model.errors.password) { %>\r\n        <p class="snip-form__error">\r\n            <%= helper.joinErrorMessages(model.errors.password) %>\r\n        </p>\r\n        <% } %>\r\n    </div>\r\n    \r\n    <a href="#" id="snipcart-login-forgotpassword-link" class="snip-static__link">\r\n        <%= helper.getResource("login_form_forgot_password_action") %>\r\n    </a>\r\n\r\n    <a id="snipcart-login-submit" class="snip-btn snip-btn--full">\r\n        <%= helper.getResource("login_form_login_action") %>\r\n    </a>\r\n</form>'
}, function (t, e, n) {
    (function (e, i) {
        var r, o, s, a, c = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, u = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)l.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, l = {}.hasOwnProperty;
        o = n(46), s = n(57), a = n(149), r = function (t) {
            function e() {
                return this.createUser = c(this.createUser, this), this.getAttributes = c(this.getAttributes, this), e.__super__.constructor.apply(this, arguments)
            }

            return u(e, t), e.prototype.createClicked = !1, e.prototype.tagName = "div", e.prototype.events = {"click #snipcart-newaccount-submit": "createUser"}, e.prototype.initialize = function (t) {
                return this.options = null != t ? t : {}, this.model = new o
            }, e.prototype.render = function () {
                var t;
                return t = this.template({helper: s, model: this.model}), this.$el.html(t), this
            }, e.prototype.getAttributes = function () {
                return {
                    email: this.$el.find("#snipcart-newaccount-email").val(),
                    password: this.$el.find("#snipcart-newaccount-password").val(),
                    confirmPassword: this.$el.find("#snipcart-newaccount-confirm").val()
                }
            }, e.prototype.createUser = function (t) {
                var e;
                if (null != t && t.preventDefault(), !this.createClicked)return this.createClicked = !0, e = this.getAttributes(), e.password === e.confirmPassword ? (this.model.set(e), this.model.create().always(function (t) {
                    return function () {
                        return t.createClicked = !1
                    }
                }(this)).done(function (t) {
                    return function () {
                        return t.options.app.setCurrentUser(t.model, {redirectTo: t.options.redirectTo})
                    }
                }(this)).fail(function (t) {
                    return function () {
                        return t.render()
                    }
                }(this))) : void 0
            }, e.prototype.template = i.template(a), e
        }(e.View), t.exports = r
    }).call(e, n(2), n(5))
}, function (t, e) {
    t.exports = '<h2 class="snip-static__title">\r\n    <%= helper.getResource("new_account_form_create_new_account") %>\r\n</h2>\r\n\r\n<form class="snip-static__content">\r\n    <div class="snip-form__container">\r\n        <label for="snipcart-newaccount-email" class="snip-form__label"><%= helper.getResource("email") %></label>\r\n        <input type="text" id="snipcart-newaccount-email" />\r\n        <% if(model.errors.email) { %>\r\n            <p class="snip-form__error">\r\n                <%= helper.joinErrorMessages(model.errors.email) %>\r\n            </p>\r\n        <% } %>\r\n    </div>\r\n\r\n    <div class="snip-form__container">\r\n        <label for="snipcart-newaccount-password" class="snip-form__label"><%= helper.getResource("password") %></label>\r\n        <input type="password" id="snipcart-newaccount-password" />\r\n        <% if(model.errors.password) { %>\r\n            <p class="snip-form__error">\r\n                <%= helper.joinErrorMessages(model.errors.password) %>\r\n            </p>\r\n        <% } %>\r\n    </div>\r\n\r\n    <div class="snip-form__container">\r\n        <label for="snipcart-newaccount-confirm" class="snip-form__label"><%= helper.getResource("confirm_password") %></label>\r\n        <input type="password" id="snipcart-newaccount-confirm" />\r\n        <% if(model.errors.confirmPassword) { %>\r\n            <p class="snip-form__error">\r\n                <%= helper.joinErrorMessages(models.errors.confirmPassword) %>\r\n            </p>\r\n        <% } %>\r\n    </div>\r\n\r\n    <a id="snipcart-newaccount-submit" class="snip-btn snip-btn--full">\r\n        <%= helper.getResource("new_account_form_create_new_account_action") %>\r\n    </a>\r\n</form>'
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s, a, c = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, u = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)l.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, l = {}.hasOwnProperty;
        i = n(3), o = n(57), s = n(151), a = n(152), r = function (t) {
            function n() {
                return this.close = c(this.close, this), n.__super__.constructor.apply(this, arguments)
            }

            return u(n, t), n.prototype.pageName = "forgot-password", n.prototype.tagName = "div", n.prototype.events = {
                "click #snipcart-forgotpassword-btn": "sendForgotpasswordEmail",
                "click #snipcart-forgotpassword-back-btn": "backToLogin"
            }, n.prototype.hideStep = !0, n.prototype.hideTotal = !0, n.prototype.initialize = function (t) {
                return this.options = t
            }, n.prototype.render = function () {
                var t;
                return t = this.emailTemplate({
                    helper: o,
                    model: this.model
                }), this.$el.html(t), this.options.app.appView.setTitle(o.getResource("forgot_password_forgot_your_password")), this
            }, n.prototype.getAttributes = function () {
                return {email: this.$("#snipcart-forgotpassword-email").val()}
            }, n.prototype.sendForgotpasswordEmail = function () {
                return this.model.set("email", this.getAttributes().email), this.model.sendForgotPasswordEmail().done(function (t) {
                    return function () {
                        var e;
                        return e = t.successTemplate({helper: o}), t.$el.html(e)
                    }
                }(this)).fail(function (t) {
                    return function () {
                        return t.render()
                    }
                }(this))
            }, n.prototype.backToLogin = function () {
                return this.options.app.routers.user.navigate("login", !0)
            }, n.prototype.close = function () {
                return this.remove()
            }, n.prototype.emailTemplate = e.template(s), n.prototype.successTemplate = e.template(a), n
        }(i.View), t.exports = r
    }).call(e, n(5))
}, function (t, e) {
    t.exports = '<div class="snip-form--small">\r\n    <div class="snip-form__container">\r\n        <label for="snipcart-forgotpassword-email" class="snip-form__description"><%= helper.getResource("forgot_password_please_enter_email") %></label>\r\n        <input type="text" id="snipcart-forgotpassword-email" value="<%= model.get("email") %>" />\r\n        \r\n        <% if(model.errors.email) { %>\r\n            <div class="snip-form__error">\r\n                <ul>\r\n                    <% _.each(model.errors.email, function(error) { %>\r\n                    <li><%= helper.getResource(error) %></li>\r\n                    <% }) %>\r\n                </ul>\r\n            </div>\r\n        <% } %>\r\n    </div>\r\n</div>\r\n\r\n<div class="snip-actions">\r\n    <a class="snip-btn snip-btn--left" id="snipcart-forgotpassword-back-btn"><%= helper.getResource("back") %></a>\r\n    <a class="snip-btn snip-btn--right snip-btn--highlight" id="snipcart-forgotpassword-btn"><%= helper.getResource("ok") %></a>\r\n</div>\r\n'
}, function (t, e) {
    t.exports = '<div class="snip-form--small">\r\n    <p class="snip-form__description"><%= helper.getResource("forgot_password_email_sent_message") %></p>\r\n</div>'
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s, a, c = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, u = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)l.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, l = {}.hasOwnProperty;
        o = n(57), a = n(154), s = n(155), i = n(3), r = function (t) {
            function n() {
                return this.close = c(this.close, this), this.redirectToLogin = c(this.redirectToLogin, this), this.resetPassword = c(this.resetPassword, this), this.getAttributes = c(this.getAttributes, this), n.__super__.constructor.apply(this, arguments)
            }

            return u(n, t), n.prototype.tagName = "div", n.prototype.events = {
                "click #snipcart-reset-password-btn": "resetPassword",
                "click #snipcart-goto-login": "redirectToLogin"
            }, n.prototype.hideStep = !0, n.prototype.hideTotal = !0, n.prototype.initialize = function (t) {
                return this.options = t
            }, n.prototype.render = function () {
                var t;
                return t = this.templates.form({
                    helper: o,
                    model: this.model
                }), this.$el.html(t), this.options.app.appView.setTitle(o.getResource("reset_password")), this
            }, n.prototype.getAttributes = function () {
                return {
                    email: this.$("#snipcart-reset-password-email").val(),
                    password: this.$("#snipcart-reset-password-password").val(),
                    confirm: this.$("#snipcart-reset-password-confirmpassword").val()
                }
            }, n.prototype.resetPassword = function () {
                return this.model.resetPassword(this.getAttributes()).done(function (t) {
                    return function () {
                        var e;
                        return e = t.templates.success({helper: o}), t.$el.html(e)
                    }
                }(this)).fail(function (t) {
                    return function () {
                        return t.render()
                    }
                }(this))
            }, n.prototype.redirectToLogin = function (t) {
                return t.preventDefault(), i.history.navigate("login", !0)
            }, n.prototype.close = function () {
                return this.remove()
            }, n.prototype.templates = {form: e.template(a), success: e.template(s)}, n
        }(i.View), t.exports = r
    }).call(e, n(5))
}, function (t, e) {
    t.exports = '<div class="snip-layout__content">\r\n\r\n    <% if(model.errors.resetPassword) { %>\r\n        <div class="snip-error__text snip-error__text--centered">\r\n            <ul>\r\n                <% _.each(model.errors.resetPassword, function(error) { %>\r\n                    <li><%= helper.getResource(error) %> </li>\r\n                <% }) %> \r\n            </ul>\r\n        </div>\r\n    <% } %>\r\n\r\n    <div class="snip-cols">\r\n        <div class="snip-col">\r\n            <div class="snip-form__container">\r\n                <label class="snip-form__label" for="snipcart-reset-password-email"><%= helper.getResource("email") %></label>\r\n                <input type="text" id="snipcart-reset-password-email" value="<%= model.get("email") %>" />\r\n            </div>\r\n        </div>\r\n        <div class="snip-col">\r\n            <div class="snip-form__container">\r\n                <label class="snip-form__label" for="snipcart-reset-password-password"><%= helper.getResource("password") %></label>\r\n                <input type="password" id="snipcart-reset-password-password" />\r\n            </div>\r\n        </div>\r\n        <div class="snip-col">\r\n            <div class="snip-form__container">\r\n                <label class="snip-form__label" for="snipcart-reset-password-confirmpassword"><%= helper.getResource("confirm_password") %></label>\r\n                <input type="password" id="snipcart-reset-password-confirmpassword" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class="snip-actions">\r\n    <a class="snip-btn snip-btn--right snip-btn--highlight" id="snipcart-reset-password-btn"><%= helper.getResource("reset_password") %></a>\r\n</div>\r\n'
}, function (t, e) {
    t.exports = '<div class="snip-static">\r\n    <p>\r\n        <%= helper.getResource("reset_password_changed") %>\r\n    </p>\r\n</div>\r\n<div class="snip-actions">\r\n    <a href="#" id="snipcart-goto-login" class="snip-btn snip-btn--right snip-btn--highlight">\r\n        <%= helper.getResource("reset_password_click_here_to_login") %>\r\n    </a>\r\n</div>'
}, function (t, e, n) {
    var i, r, o = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e)s.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, s = {}.hasOwnProperty;
    r = n(3), i = function (t) {
        function e() {
            return e.__super__.constructor.apply(this, arguments)
        }

        return o(e, t), e
    }(r.Router), t.exports = i
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s, a, c, u = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, l = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)p.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, p = {}.hasOwnProperty;
        o = n(158), a = n(162), i = n(112).OrderConfirmView, c = n(165), r = n(45), s = function (t) {
            function e() {
                return this.before = u(this.before, this), e.__super__.constructor.apply(this, arguments)
            }

            return l(e, t), e.prototype.routes = {
                "payment-method": "paymentMethod",
                "cancel/:token": "cancelled",
                "payment-failed": "paymentFailed",
                confirm: "confirm",
                "confirm/:token": "confirmPaypalExpress",
                "thank-you": "complete"
            }, e.prototype.before = function (t) {
                var e, n, i;
                if (e = this.inject("cart"), null != e ? e.isEmpty() : void 0)return this.inject("mainview").showEmptyView(), !1;
                if (!e.hasValidBillingAddress())return this.inject("routers").order.navigate("billing-address", !0), !1;
                if (e.hasShippingEnabled()) {
                    if (!e.hasValidShippingAddress())return this.inject("routers").order.navigate("shipping-address", !0), !1;
                    if (!(null != (n = e.get("shippingInformation")) ? n.get("method") : void 0))return this.inject("routers").shipping.navigate("shipping-method", !0), !1
                }
                switch (t) {
                    case"confirm":
                        if (!e.get("paymentMethod"))return this.navigate("payment-method", !0), !1;
                        if ("CreditCard" === e.get("paymentMethod") && !(null != (i = e.get("card")) ? i.isValid() : void 0))return this.navigate("payment-method", !0), !1
                }
            }, e.prototype.paymentMethod = function () {
                var t, e, n, i, r, s, a;
                return s = this.inject("settings"), t = this.inject("cart"), n = t.get("card"), (null != n ? n.has("paypalTokenId") : void 0) ? (r = n.get("paypalTokenId"), void this.navigate("confirm/" + r, !0)) : (n || (e = {}, "Test" === t.get("mode") && (e = {
                    number: "4242424242424242",
                    cvc: "345",
                    expirationYear: 2018,
                    type: "visa"
                }), t.set("card", e), n = t.get("card")), "" !== t.get("billingAddress").get("name") && (i = t.get("billingAddress").get("name")), "" !== t.get("billingAddress").get("firstName") && this.inject("config").split_firstname_and_lastname ? n.set("ownerName", t.get("billingAddress").get("firstName") + " " + i) : n.set("ownerName", i), a = new o({
                    model: n,
                    app: this.app
                }), this.app.appView.setContentView(a), this.app.appView.show())
            }, e.prototype.confirm = function () {
                var t;
                return t = new i({
                    collection: this.app.collections.items,
                    model: this.inject("cart"),
                    app: this.app
                }), this.app.appView.setContentView(t), this.app.appView.show()
            }, e.prototype.complete = function () {
                var t;
                return this.app.reset(), t = new c({app: this.app}), this.app.appView.setContentView(t), this.app.appView.show()
            }, e.prototype.confirmPaypalExpress = function (t) {
                var e, n;
                return e = this.inject("cart"), e.set("paymentMethod", "Paypal"), e.set("card", {paypalTokenId: t}), n = new i({
                    collection: this.app.collections.items,
                    model: e,
                    paypalExpress: !0,
                    app: this.app
                }), this.app.appView.setContentView(n), this.app.appView.show()
            }, e.prototype.cancelled = function (t) {
                var e;
                return e = new a({
                    model: this.inject("cart"),
                    cancelled: !0,
                    app: this.app
                }), this.app.appView.setContentView(e), this.app.appView.show()
            }, e.prototype.paymentFailed = function () {
                var t;
                return t = new o({failed: !0}), this.app.appView.setContentView(t), this.app.appView.show()
            }, e.prototype._paypalExpressCheckout = function () {
                var t;
                return t = new a({
                    model: this.app.order,
                    app: this.app
                }), this.app.appView.setContentView(t), this.app.appView.show(), t.doCheckout()
            }, e
        }(e.AppRouter), t.exports = s
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e, i) {
        var r, o, s, a, c, u = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, l = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)p.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, p = {}.hasOwnProperty;
        r = n(2), a = n(57), s = n(144), c = n(159), o = function (t) {
            function r() {
                return this.showPaymentErrors = u(this.showPaymentErrors, this), this.paymentFailed = u(this.paymentFailed, this), this.hideCvcContent = u(this.hideCvcContent, this), this.showCvcContent = u(this.showCvcContent, this), this.close = u(this.close, this), this.previous = u(this.previous, this), this.pay = u(this.pay, this), this.templateArgs = u(this.templateArgs, this), this.afterRender = u(this.afterRender, this), this.redirectToGatewayIfNeeded = u(this.redirectToGatewayIfNeeded, this), this.beforeRender = u(this.beforeRender, this), r.__super__.constructor.apply(this, arguments)
            }

            return l(r, t), r.prototype.pageName = "payment-method", r.prototype.tab = "#snipcart-payment-method-step", r.prototype.template = n(160), r.prototype.failedTemplate = n(161), r.prototype.events = {
                "submit form": "pay",
                "click #snipcart-paymentmethod-pay": "pay",
                "click #snipcart-cvc-trigger": "showCvcContent",
                "click #snipcart-bill-me-later": "billMeLater",
                "click #snipcart-express-checkout": "paypal",
                "click #snipcart-pay-mollie": "mollie",
                "click #snipcart-previous": "previous",
                "click #snipcart-paymentmethod-pay": "pay",
                "click #snipcart-paymentfailed-retry": "redirectToGatewayIfNeeded"
            }, r.prototype.initialize = function (t) {
                return this.failed = t.failed, this.inject("vent").on("payment:failed", this.paymentFailed)
            }, r.prototype.beforeRender = function (t) {
                return this.failed ? void(this.template = this.failedTemplate) : this.redirectToGatewayIfNeeded(t)
            }, r.prototype.redirectToGatewayIfNeeded = function (t) {
                var e;
                if (e = this.inject("settings"), !e.allowDeferredPayment)return "PaypalExpressCheckout" === e.paymentGateway ? (this.paypal(), null != t ? t.preventDefault() : void 0) : "Mollie" === e.paymentGateway ? (this.mollie(), null != t ? t.preventDefault() : void 0) : void 0
            }, r.prototype.afterRender = function () {
                var t, n, i, r;
                if (!this.failed && (this.$tooltip = e(this.tooltipTemplate({helper: a})), this.model.errors)) {
                    n = this.model.errors, i = [];
                    for (t in n)r = n[t], "payment" === t ? i.push(this.inject("flash").showMessage({
                        type: "error",
                        message: r.join(", ")
                    })) : i.push(void 0);
                    return i
                }
            }, r.prototype.templateArgs = function () {
                var t, e, n;
                return n = this.inject("preloaded").settings, e = this.inject("config"), t = {
                    helper: a,
                    allowDeferredPayment: n.allowDeferredPayment,
                    onlyAllowDeferredPayment: n.onlyAllowDeferredPayment,
                    expressCheckoutEnabled: n.expressCheckoutEnabled || "PaypalExpressCheckout" === n.paymentGateway,
                    mollieEnabled: "Mollie" === n.paymentGateway,
                    creditCardEnabled: "PaypalExpressCheckout" !== n.paymentGateway && "Mollie" !== n.paymentGateway,
                    creditCards: i.map(e.credit_cards, function (t) {
                        return {value: t.type, text: t.display}
                    })
                }
            }, r.prototype.pay = function (t) {
                return this.prevent(t), this.inject("flash").clear(), this.inject("cart").set("paymentMethod", "CreditCard"), this.model.set(this.getAttributes()), this.model.isValid() ? this.inject("routers").payment.navigate("confirm", !0) : this.render()
            }, r.prototype.previous = function (t) {
                return t.preventDefault(), this.inject().shippingEnabled() ? this.inject("routers").order.navigate("shipping-method", !0) : this.inject("routers").order.navigate("billing-address", !0)
            }, r.prototype.close = function () {
                return this.remove()
            }, r.prototype.showCvcContent = function () {
                return this.$tooltip.appendTo(this.$("#snipcart-cvc-content-holder"))
            }, r.prototype.hideCvcContent = function () {
                return this.$tooltip.remove()
            }, r.prototype.paymentFailed = function (t) {
                return this.showPaymentErrors(t.errors)
            }, r.prototype.showPaymentErrors = function (t) {
                var e;
                return e = this.template({
                    helper: a,
                    model: this.model,
                    errors: t
                }), this.$el.html(e), this.transformErrors()
            }, r.prototype.billMeLater = function (t) {
                return this.prevent(t), this.inject("cart").set("paymentMethod", "WillBePaidLater"), this.inject("routers").payment.navigate("confirm", !0)
            }, r.prototype.redirect = function (t) {
                var e, n;
                return e = this.inject("cart"), n = this.inject("viewhelper"), e.set("paymentMethod", t), this.inject("mainview").load({
                    waitsFor: 0,
                    message: n.getResource("paypalexpress_loading")
                }), e.pay().then(function (t) {
                    return function (e, n) {
                        return e.get("skipCheckout") ? t.inject("routers").payment.navigate("confirm", !0) : t.doRedirect(e.get("redirectUrl"))
                    }
                }(this)).fail(function (t) {
                    return function (n) {
                        return t.inject("mainview").loadComplete(), e.validationFailed ? void t.inject("routers").cart.navigate("checkout", !0) : t.inject("routers").payment.navigate("payment-failed", !0)
                    }
                }(this))
            }, r.prototype.paypal = function (t) {
                return this.prevent(t), this.redirect("Paypal")
            }, r.prototype.mollie = function (t) {
                return this.prevent(t), this.redirect("Mollie")
            }, r.prototype.doRedirect = function (t) {
                return window.location.href = t
            }, r.prototype.tooltipTemplate = i.template(c), r
        }(r.FormView), t.exports = o
    }).call(e, n(7), n(5))
}, function (t, e) {
    t.exports = '<div class="snip-static snip-static--highlight">\r\n    <p class="snip-static__item"><%= helper.getResource("payment_method_cvc_infos") %></p>\r\n\r\n    <img src="<%=helper.getImageSource(\'/Themes/Base/img/cvc_visa.gif\') %>" class="snip-static__item">\r\n</div>\r\n'
}, function (t, e, n) {
    (function (e) {
        var i = n(85);
        t.exports = function (t) {
            var n, r = [], o = {}, s = t || {};
            return function (t, e, s, a, c, u, l, p, h, d) {
                o.dropdown = n = function (t, e, n) {
                    var s = (this && this.block, this && this.attributes || {});
                    r.push("<select" + i.attrs(i.merge([{
                            name: i.escape(t),
                            id: i.escape("snip-" + t)
                        }, s]), !0) + ">"), function () {
                        var i = n;
                        if ("number" == typeof i.length)for (var r = 0, s = i.length; r < s; r++) {
                            var a = i[r];
                            void 0 != a.value ? (d = a.value == e[t], o.option(a.text, a.value, d)) : (d = a == e[t], o.option(a, a, d))
                        } else {
                            var s = 0;
                            for (var r in i) {
                                s++;
                                var a = i[r];
                                void 0 != a.value ? (d = a.value == e[t], o.option(a.text, a.value, d)) : (d = a == e[t], o.option(a, a, d))
                            }
                        }
                    }.call(this), r.push("</select>"), e.errors && e.errors[t] && o.showErrors(e.errors[t])
                }, o.textbox = n = function (t, e) {
                    var n = (this && this.block, this && this.attributes || {});
                    e && e.errors && e.errors[t] ? (r.push("<input" + i.attrs(i.merge([{
                            "data-invalid": !0,
                            type: "text",
                            name: i.escape(t),
                            value: i.escape(e ? e[t] : ""),
                            id: i.escape("snip-" + t)
                        }, n]), !0) + ">"), o.showErrors(e.errors[t])) : r.push("<input" + i.attrs(i.merge([{
                            type: "text",
                            name: i.escape(t),
                            value: i.escape(e ? e[t] : ""),
                            id: i.escape("snip-" + t)
                        }, n]), !0) + ">")
                }, o.option = n = function (t, e, o) {
                    this && this.block, this && this.attributes || {};
                    o ? r.push("<option" + i.attr("value", e, !0, !0) + ' selected="selected">' + i.escape(null == (n = t) ? "" : n) + "</option>") : r.push("<option" + i.attr("value", e, !0, !0) + ">" + i.escape(null == (n = t) ? "" : n) + "</option>")
                }, o.labelFor = n = function (t, e) {
                    var o = (this && this.block, this && this.attributes || {});
                    r.push("<label" + i.attrs(i.merge([{"for": i.escape("snip-" + t)}, o]), !0) + ">" + i.escape(null == (n = e) ? "" : n) + "</label>")
                }, o.showErrors = n = function (t) {
                    for (var e = (this && this.block, this && this.attributes || {}, []), o = 0; o < t.length; o++)e.push(t[o]);
                    var s = e.join(", ");
                    r.push('<p class="snip-form__error">' + i.escape(null == (n = s) ? "" : n) + "</p>")
                };
                for (var f = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"], m = e.map(f, function (t, e) {
                    return {value: e + 1, text: l.getResource("months_" + t)}
                }), y = [], g = (new t).getFullYear(); g < (new t).getFullYear() + 10; g++)y.push({value: g, text: g});
                r.push("<form>"), a && (r.push('<div class="snip-cols snip-layout__content"><div class="snip-col"><div class="snip-form__container">'), o.labelFor.call({attributes: {"class": "snip-form__label"}}, "type", l.getResource("payment_method_card_type")), o.dropdown("type", p, c), r.push('</div><div class="snip-form__container">'), o.labelFor.call({attributes: {"class": "snip-form__label"}}, "ownerName", l.getResource("payment_method_card_holder")), o.textbox("ownerName", p), r.push('</div></div><div class="snip-col"><div class="snip-form__container">'), o.labelFor.call({attributes: {"class": "snip-form__label"}}, "number", l.getResource("payment_method_card_number")), o.textbox("number", p), r.push('</div><div class="snip-form__container"><a href="#" id="snipcart-cvc-trigger" class="snip-form__help">?</a>'), o.labelFor.call({attributes: {"class": "snip-form__label"}}, "cvc", l.getResource("payment_method_card_cvc")), o.textbox("cvc", p), r.push('</div></div><div class="snip-col"><div class="snip-form__container">'), o.labelFor.call({attributes: {"class": "snip-form__label"}}, "expirationMonth", l.getResource("payment_method_card_exp_month")), o.dropdown("expirationMonth", p, m), r.push('</div><div class="snip-form__container">'), o.labelFor.call({attributes: {"class": "snip-form__label"}}, "expirationYear", l.getResource("payment_method_card_exp_year")), o.dropdown("expirationYear", p, y), r.push('</div></div></div><div id="snipcart-cvc-content-holder"></div>')), h && r.push('<div class="snip-product"><a id="snipcart-pay-mollie" class="snip-btn snip-btn--right snip-btn--highlight">' + i.escape(null == (n = l.getResource("pay_now_via_mollie")) ? "" : n) + '</a><h2 class="snip-product__name">' + i.escape(null == (n = l.getResource("pay_via_mollie")) ? "" : n) + '</h2><p class="snip-product__description">' + i.escape(null == (n = l.getResource("pay_via_mollie_explanation")) ? "" : n) + "</p></div>"), s && r.push('<div class="snip-product"><a id="snipcart-bill-me-later" class="snip-btn snip-btn--right">' + i.escape(null == (n = l.getResource("bill_me_later_action")) ? "" : n) + '</a><h2 class="snip-product__name">' + i.escape(null == (n = l.getResource("bill_me_later")) ? "" : n) + '</h2><p class="snip-product__description">' + i.escape(null == (n = l.getResource("bill_me_later_explanation")) ? "" : n) + "</p></div>"), u && r.push('<div class="snip-product"><input id="snipcart-express-checkout" type="image" src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-medium.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" class="snip-btn--right"><h2 class="snip-product__name">' + i.escape(null == (n = l.getResource("paypal_express_checkout_title")) ? "" : n) + '</h2><p class="snip-product__description">' + i.escape(null == (n = l.getResource("paypal_express_checkout_explanation")) ? "" : n) + "</p></div>"), r.push('<div class="snip-actions"><a href="#" id="snipcart-previous" class="snip-btn snip-btn--left">' + i.escape(null == (n = l.getResource("previous")) ? "" : n) + "</a>"), a && r.push('<a href="#" id="snipcart-paymentmethod-pay" class="snip-btn snip-btn--highlight snip-btn--right">' + i.escape(null == (n = l.getResource("next")) ? "" : n) + '</a><input type="submit" style="visibility: hidden">'), r.push("</div></form>")
            }.call(this, "Date" in s ? s.Date : "undefined" != typeof Date ? Date : void 0, "_" in s ? s._ : "undefined" != typeof e ? e : void 0, "allowDeferredPayment" in s ? s.allowDeferredPayment : "undefined" != typeof allowDeferredPayment ? allowDeferredPayment : void 0, "creditCardEnabled" in s ? s.creditCardEnabled : "undefined" != typeof creditCardEnabled ? creditCardEnabled : void 0, "creditCards" in s ? s.creditCards : "undefined" != typeof creditCards ? creditCards : void 0, "expressCheckoutEnabled" in s ? s.expressCheckoutEnabled : "undefined" != typeof expressCheckoutEnabled ? expressCheckoutEnabled : void 0, "helper" in s ? s.helper : "undefined" != typeof helper ? helper : void 0, "model" in s ? s.model : "undefined" != typeof model ? model : void 0, "mollieEnabled" in s ? s.mollieEnabled : "undefined" != typeof mollieEnabled ? mollieEnabled : void 0, "selected" in s ? s.selected : "undefined" != typeof selected ? selected : void 0), r.join("")
        }
    }).call(e, n(5))
}, function (t, e, n) {
    var i = n(85);
    t.exports = function (t) {
        var e, n = [], r = t || {};
        return function (t) {
            n.push('<div class="snip-static">' + i.escape(null == (e = t.getResource("payment_failed_text")) ? "" : e) + '</div><div class="snip-actions"><a href="#" id="snipcart-paymentfailed-continue" class="snip-btn snip-btn--left">' + i.escape(null == (e = t.getResource("continue_shopping")) ? "" : e) + '</a><a href="#" id="snipcart-paymentfailed-retry" class="snip-btn snip-btn--highlight snip-btn--right">' + i.escape(null == (e = t.getResource("retry")) ? "" : e) + "</a></div>")
        }.call(this, "helper" in r ? r.helper : "undefined" != typeof helper ? helper : void 0), n.join("")
    }
}, function (t, e, n) {
    (function (e, i, r) {
        var o, s, a, c, u = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, l = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)p.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, p = {}.hasOwnProperty;
        s = n(57), c = n(163), a = n(164), o = function (t) {
            function e() {
                return this.close = u(this.close, this), this.setError = u(this.setError, this), this.loadComplete = u(this.loadComplete, this), this.load = u(this.load, this), this.continueShopping = u(this.continueShopping, this), this.retry = u(this.retry, this), this.doCheckout = u(this.doCheckout, this), this.cancelled = u(this.cancelled, this), this.failed = u(this.failed, this), e.__super__.constructor.apply(this, arguments)
            }

            return l(e, t), e.prototype.tab = "#snipcart-payment-method-step", e.prototype.events = {
                "click #snipcart-paypal-retry": "retry",
                "click #snipcart-paypal-continue": "continueShopping"
            }, e.prototype.initialize = function (t) {
                return this.options = t, this.app = t.app
            }, e.prototype.render = function () {
                var t;
                return t = this.template({
                    helper: s,
                    model: this.model.toJSON()
                }), this.$el.html(t), null != this.options.cancelled && this.cancelled(), null != this.options.failed && this.failed(), this
            }, e.prototype.failed = function () {
                var t;
                return this.setError(this.options.errors.payment[0]), t = this.cancelledTemplate({helper: s}), i(t).appendTo(this.$("#paypal-express-cancel"))
            }, e.prototype.cancelled = function () {
                var t;
                return this.setError(s.getResource("paypalexpress_cancelled")), t = this.cancelledTemplate({helper: s}), i(t).appendTo(this.$("#paypal-express-cancel"))
            }, e.prototype.doCheckout = function () {
                return this.app.appView.load({message: s.getResource("paypalexpress_loading")}), this.app.order.initiateExpressCheckout().done(function (t) {
                    return function (e) {
                        return e.skipCheckout ? (t.app.order.paymentMethod.completed = !0, t.app.order.paymentMethod.paypal = !0, t.app.routers.payment.navigate("confirm", !0)) : window.location.href = e.redirectUrl
                    }
                }(this)).fail(function (t) {
                    return function (e) {
                        if (t.app.appView.loadComplete(), e.errors[""])return t.setError(e.errors[""])
                    }
                }(this))
            }, e.prototype.retry = function (t) {
                return t.preventDefault(), this.options.app.routers.payment.navigate("payment-method", !0)
            }, e.prototype.continueShopping = function (t) {
                return t.preventDefault(), this.options.app.appView.close()
            }, e.prototype.load = function () {
                return this.$("#snipcart-paypal-express-loading").addClass("snipcart-loading")
            }, e.prototype.loadComplete = function () {
                return this.$("#snipcart-paypal-express-loading").removeClass("snipcart-loading")
            }, e.prototype.setError = function (t) {
                return this.$("#snipcart-paypal-express-loading").text(t), this.$("#snipcart-paypal-express-loading").addClass("snipcart-error")
            }, e.prototype.close = function () {
                return this.remove()
            }, e.prototype.template = r.template(c), e.prototype.cancelledTemplate = r.template(a), e
        }(e.View), t.exports = o
    }).call(e, n(2), n(7), n(5))
}, function (t, e) {
    t.exports = '<div id="paypal-express-cancel">\r\n    <div id="snipcart-paypal-express-loading" class="snip-static">\r\n        <%= helper.getResource("paypalexpress_loading") %>\r\n    </div>\r\n</div>'
}, function (t, e) {
    t.exports = '<div class="snip-actions">\r\n    <a class="snip-btn snip-btn--left" href="#" id="snipcart-paypal-continue">\r\n        <%= helper.getResource("continue_shopping") %>\r\n    </a>\r\n\r\n    <a class="snip-btn snip-btn--right snip-btn--highlight" href="#" id="snipcart-paypal-retry">\r\n        <%= helper.getResource("retry") %>\r\n    </a>\r\n</div>'
}, function (t, e, n) {
    (function (e, i) {
        var r, o, s, a, c, u, l = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, p = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)h.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, h = {}.hasOwnProperty;
        a = n(57), u = n(166), c = n(167), r = n(168), s = n(46), o = function (t) {
            function e() {
                return this.close = l(this.close, this), this.render = l(this.render, this), e.__super__.constructor.apply(this, arguments)
            }

            return p(e, t), e.prototype.initialize = function (t) {
                if (this.options = t, !this.options.app.currentUser)return this.createUserView = new r({model: new s})
            }, e.prototype.hideStep = !0, e.prototype.hideTotal = !0, e.prototype.render = function () {
                var t;
                return t = this.template({helper: a}), this.$el.html(t), this
            }, e.prototype.close = function () {
                return this.createUserView && this.createUserView.remove(), this.remove()
            }, e.prototype.template = i.template(u), e
        }(e.View), t.exports = o
    }).call(e, n(2), n(5))
}, function (t, e) {
    t.exports = '<div class="snipcart-step" id="snipcart-step-content-thankyou">\n    <div class="snipcart-full-width-text snipcart-centered-text">\n        <span class="snipcart-title"><%= helper.getResource("thankyou_message") %></span>\n        <span class="snipcart-subtitle"><%= helper.getResource("thankyou_submessage") %></span>\n    </div>\n</div>'
}, function (t, e) {
    t.exports = '<div class="snipcart-step" id="snipcart-step-content-thankyou">\n    <div id="snipcart-thankyou-left">\n        <span class="snipcart-title"><%= helper.getResource("thankyou_message") %></span>\n        <span class="snipcart-subtitle"><%= helper.getResource("thankyou_submessage") %></span>    \n    </div>\n    <div id="snipcart-thankyou-right">\n    </div>\n    <span class="clear"></span>\n</div>'
}, function (t, e, n) {
    (function (e, i) {
        var r, o, s, a, c, u = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, l = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)p.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, p = {}.hasOwnProperty;
        s = n(57), a = n(169), c = n(170), r = n(3), o = function (t) {
            function n() {
                return this.createAccount = u(this.createAccount, this), this.getAttributes = u(this.getAttributes, this), this.billingChanged = u(this.billingChanged, this), this.newOrderStarted = u(this.newOrderStarted, this), this.userCreationFailed = u(this.userCreationFailed, this), this.userCreated = u(this.userCreated, this), n.__super__.constructor.apply(this, arguments)
            }

            return l(n, t), n.prototype.tagName = "div", n.prototype.events = {"click #snipcart-create-account": "createAccount"}, n.prototype.initialize = function () {
                return this.inject("vent").on("neworder:started", this.newOrderStarted), this.inject("vent").on("billing:changed", this.billingChanged), this.model.on("user:currentuser", this.userCreated), this.model.on("user:create:failed", this.userCreationFailed)
            }, n.prototype.render = function () {
                var t;
                return t = this.template({helper: s, model: this.model, errors: null}), this.$el.html(t), this
            }, n.prototype.userCreated = function () {
                var t;
                return t = this.successTemplate({helper: s}), this.$el.html(t)
            }, n.prototype.userCreationFailed = function (t) {
                var n;
                return n = this.template({
                    helper: s,
                    model: this.model,
                    errors: t.errors
                }), this.$el.html(n), this.$el.find("[data-error-message]").each(function () {
                    return e(this).addClass("snipcart-has-errors"), e(this).val(e(this).data("error-message"))
                })
            }, n.prototype.newOrderStarted = function (t) {
                return this.model.set("token", t)
            }, n.prototype.billingChanged = function (t) {
                return this.model.set("email", t.get("email"))
            }, n.prototype.getAttributes = function () {
                return {
                    email: this.$el.find("#snipcart-create-account-email").val(),
                    password: this.$el.find("#snipcart-create-account-password").val(),
                    confirmPassword: this.$el.find("#snipcart-create-account-password-confirm").val()
                }
            }, n.prototype.createAccount = function () {
                var t;
                return t = this.getAttributes(), this.model.set("email", t.email), this.model.set("password", t.password), this.model.set("confirmPassword", t.confirmPassword), this.model.createNew()
            }, n.prototype.template = i.template(a), n.prototype.successTemplate = i.template(c), n
        }(r.View), t.exports = o
    }).call(e, n(7), n(5))
}, function (t, e) {
    t.exports = '<div id="snipcart-form">\n    <span class="snipcart-title"><%= helper.getResource("create_an_account") %></span>\n    <span class="snipcart-form-field">\n        <label for="snipcart-create-account-email"><%= helper.getResource("email") %></label>\n        <input type="text" id="snipcart-create-account-email" value="<%= model.get("email") %>" \n                    <% if (errors != null && errors.email) { %>data-error-message="<%= helper.joinErrorMessages(errors.email) %>"<% } %>/>\n    </span>\n    <span class="snipcart-form-field">\n        <label for="snipcart-create-account-password"><%= helper.getResource("password") %></label>\n        <input type="password" id="snipcart-create-account-password" \n                    <% if (errors != null && errors.password) { %>data-error-message="<%= helper.joinErrorMessages(errors.password) %>"<% } %>/>\n    </span>\n    <span class="snipcart-form-field">\n        <label for="snipcart-create-account-password-confirm"><%= helper.getResource("confirm_password") %></label>\n        <input type="password" id="snipcart-create-account-password-confirm" \n            <% if (errors != null && errors.confirmPassword) { %>data-error-message="<%= helper.joinErrorMessages(errors.confirmPassword) %>"<% } %>/>\n    </span>\n    <a id="snipcart-create-account" class="snipcart-btn btn-primary" href="#"><%= helper.getResource("create_an_account") %></a>\n    <p class="why"><%= helper.getResource("why_create_account") %></p>\n</div>'
}, function (t, e) {
    t.exports = '<span class="snipcart-title"><%= helper.getResource("account_created_successfully") %></span>\n<p><%= helper.getResource("account_created_successfully_message") %></p>'
}, function (t, e, n) {
    var i, r, o = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e)s.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, s = {}.hasOwnProperty;
    i = [n(7), n(5), n(3), n(2), n(172)], r = function (t, e, n, i, r) {
        var s;
        return s = function (t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }

            return o(e, t), e
        }(i.AppRouter)
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function (t, e, n) {
    var i, r, o = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e)s.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, s = {}.hasOwnProperty;
    i = [n(7), n(5), n(3), n(2)], r = function (t, e, n, i) {
        var r;
        return r = function (t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }

            return o(e, t), e
        }(i.Controller)
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function (t, e, n) {
    (function (e) {
        var i, r, o = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)s.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, s = {}.hasOwnProperty;
        i = n(174), r = function (t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }

            return o(e, t), e.prototype.controller = new i, e.prototype.appRoutes = {"shipping-method": "showShippingMethods"}, e
        }(e.AppRouter), t.exports = r
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, a = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)c.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, c = {}.hasOwnProperty;
        o = n(175), i = n(77), r = function (t) {
            function e() {
                return this.failedToRetrieveRates = s(this.failedToRetrieveRates, this), this.renderShippingMethods = s(this.renderShippingMethods, this), this.showShippingMethods = s(this.showShippingMethods, this), e.__super__.constructor.apply(this, arguments)
            }

            return a(e, t), e.prototype.showShippingMethods = function () {
                if (this.inject("cart").isEmpty())return void this.inject("mainview").showEmptyView();
                if (!this.inject("cart").hasValidCustomFields())return void this.inject().routers.order.navigate("infos", !0);
                if (this.inject().shippingEnabled()) {
                    if (!this.inject("cart").get("billingAddress").isValid())return void this.inject().routers.order.navigate("billing-address", !0);
                    if (!this.inject("cart").get("shippingAddress").isValid())return void this.inject().routers.order.navigate("shipping-address", !0)
                } else if (!this.inject("cart").get("billingAddress").isValid())return void this.inject().routers.order.navigate("billing-address", !0);
                return this.inject().shippingEnabled() ? this.renderShippingMethods() : void this.inject().routers.order.navigate("payment-method", !0)
            }, e.prototype.renderShippingMethods = function (t) {
                var e;
                return e = new o, this.inject().appView.loadComplete(), this.inject().appView.setContentView(e), this.inject().appView.show()
            }, e.prototype.failedToRetrieveRates = function (t) {
                var e;
                return e = new i({
                    errors: t,
                    app: this.inject()
                }), this.inject().appView.loadComplete(), this.inject().appView.setContentView(e), this.inject().appView.show()
            }, e
        }(e.Controller), t.exports = r
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, a = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)c.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, c = {}.hasOwnProperty;
        r = n(176), i = n(181), o = function (t) {
            function e() {
                return this.next = s(this.next, this), this.previous = s(this.previous, this), this.rateAdded = s(this.rateAdded, this), this.close = s(this.close, this), this.afterRender = s(this.afterRender, this), this.beforeRender = s(this.beforeRender, this), this.init = s(this.init, this), this.templateArgs = s(this.templateArgs, this), e.__super__.constructor.apply(this, arguments)
            }

            return a(e, t), e.prototype.template = n(183), e.prototype.pageName = "shipping-method", e.prototype.tab = "#snipcart-shipping-method-step", e.prototype.events = {
                "click #snipcart-next": "next",
                "click #snipcart-previous": "previous"
            }, e.prototype.templateArgs = function () {
                return {helper: this.inject("viewhelper")}
            }, e.prototype.init = function (t) {
                return this.collection = new i({token: this.inject("cart").id}), this.listenTo(this.collection, "add", this.rateAdded)
            }, e.prototype.beforeRender = function () {
                return this.listView = new r({collection: this.collection})
            }, e.prototype.afterRender = function () {
                return this.listView.setHeader(this.$("thead")).setBody(this.$("tbody")), this.listView.render()
            }, e.prototype.close = function () {
                return this.listView.remove(), this.remove()
            }, e.prototype.rateAdded = function (t) {
                var e, n;
                if (e = this.inject("cart"), e.get("shippingInformation") && (n = e.get("shippingInformation").get("method"), t.get("description") === n))return t.set("selected", !0)
            }, e.prototype.previous = function (t) {
                return this.prevent(t), this.inject("cart").get("shipToBillingAddress") ? this.inject("routers").order.navigate("billing-address", !0) : this.inject("routers").order.navigate("shipping-address", !0)
            }, e.prototype.next = function (t) {
                var e, n, i, r;
                return this.prevent(t), n = this.listView.collection, (i = n.findWhere({selected: !0})) ? (e = this.inject("cart"), e.get("shippingInformation") || e.set("shippingInformation", {}), r = e.get("shippingInformation"), r.set({
                    method: i.get("description"),
                    fees: i.get("cost")
                }), r.hasChanged() ? (this.inject("mainview").load({message: this.inject("viewhelper").getResource("saving")}), this.inject("cart").save().always(function (t) {
                    return function () {
                        return t.inject("mainview").loadComplete()
                    }
                }(this)).done(function (t) {
                    return function () {
                        return t.inject("cart").computeSubtotal(), t.inject("vent").trigger("shippingmethod.changed", i.toJSON()), t.inject("routers").order.navigate("payment-method", !0)
                    }
                }(this)).fail(function (t) {
                    return function () {
                        return t.inject("flash").showMessage({
                            type: "error",
                            message: t.inject("viewhelper").getResource("error_cart_saving_failed")
                        })
                    }
                }(this))) : void this.inject("routers").order.navigate("payment-method", !0)) : void this.inject("flash").showMessage({
                    type: "error",
                    message: this.inject("viewhelper").getResource("error_must_select_shipping_rate")
                })
            }, e
        }(e.View), t.exports = o
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var i, r, o = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, s = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)a.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, a = {}.hasOwnProperty;
        i = n(177), r = function (t) {
            function e() {
                return this.itemsFetched = o(this.itemsFetched, this), this.loadComplete = o(this.loadComplete, this), this.load = o(this.load, this), this.loading = o(this.loading, this), this.init = o(this.init, this), this.templateArgs = o(this.templateArgs, this), e.__super__.constructor.apply(this, arguments)
            }

            return s(e, t), e.prototype.fetch = !0, e.prototype.className = "snipcart-list", e.prototype.id = "snipcart-shipping-methods", e.prototype.templateArgs = function () {
                return {helper: this.inject("viewhelper")}
            }, e.prototype.itemView = i, e.prototype.headerTemplate = n(179), e.prototype.init = function () {
                return this.on("items.fetched", this.itemsFetched)
            }, e.prototype.loading = function () {
                return {
                    template: n(180),
                    colspan: 2,
                    message: this.inject("viewhelper").getResource("calculating_shipping_fees")
                }
            }, e.prototype.load = function () {
                return this.inject("mainview").showLoader()
            }, e.prototype.loadComplete = function () {
                return this.inject("mainview").hideLoader()
            }, e.prototype.itemsFetched = function () {
                if (!(this.collection.where({selected: !0}).length > 0))return this.collection.at(0).set("selected", !0)
            }, e
        }(e.ListView), t.exports = r
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var i, r = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, o = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)s.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, s = {}.hasOwnProperty;
        i = function (t) {
            function e() {
                return this.select = r(this.select, this), this.selectChanged = r(this.selectChanged, this), this.afterRender = r(this.afterRender, this), this.templateArgs = r(this.templateArgs, this), this.init = r(this.init, this), e.__super__.constructor.apply(this, arguments)
            }

            return o(e, t), e.prototype.tagName = "tr", e.prototype.template = n(178), e.prototype.className = "snip-product--selectable", e.prototype.events = {click: "select"}, e.prototype.init = function (t) {
                return this.listenTo(this.model, "change:selected", this.selectChanged)
            }, e.prototype.templateArgs = function () {
                return {helper: this.inject("viewhelper")}
            }, e.prototype.afterRender = function () {
                return this.selectChanged(), this.$el.addClass("snip-" + this.model.get("slug"))
            }, e.prototype.selectChanged = function () {
                return this.model.get("selected") ? this.$(".snip-product--selectable-item").addClass("js-selected") : this.$(".snip-product--selectable-item").removeClass("js-selected")
            }, e.prototype.select = function () {
                return this.model.collection.select(this.model.get("description"))
            }, e
        }(e.View), t.exports = i
    }).call(e, n(2))
}, function (t, e, n) {
    var i = n(85);
    t.exports = function (t) {
        var e, n = [], r = t || {};
        return function (t, r) {
            n.push('<td><div class="snip-product--selectable-item"><h2 class="snip-product__name">'), t.resourceExists(r.description) ? n.push("" + i.escape(null == (e = t.getResource(r.description)) ? "" : e)) : n.push("" + i.escape(null == (e = r.description) ? "" : e)), n.push('</h2><p class="snip-product__important">'), null != r.guaranteedDaysToDelivery && n.push("" + i.escape(null == (e = t.getResource(r.guaranteedDaysToDelivery > 1 ? "shipping_method_business_days" : "shipping_method_business_day", r.guaranteedDaysToDelivery)) ? "" : e)), n.push('</p></div></td><td class="snip-table__cell--right snip-table__cell--highlight">' + i.escape(null == (e = t.formatMoney(r.cost)) ? "" : e) + "</td>")
        }.call(this, "helper" in r ? r.helper : "undefined" != typeof helper ? helper : void 0, "model" in r ? r.model : "undefined" != typeof model ? model : void 0), n.join("")
    }
}, function (t, e, n) {
    var i = n(85);
    t.exports = function (t) {
        var e, n = [], r = t || {};
        return function (t) {
            n.push("<th>" + i.escape(null == (e = t.getResource("shipping_method_method_name")) ? "" : e) + '</th><th class="snip-table__cell--right">' + i.escape(null == (e = t.getResource("shipping_method_shipping_price")) ? "" : e) + "</th>")
        }.call(this, "helper" in r ? r.helper : "undefined" != typeof helper ? helper : void 0), n.join("")
    }
}, function (t, e, n) {
    var i = n(85);
    t.exports = function (t) {
        var e, n = [], r = t || {};
        return function (t, r) {
            n.push("<td" + i.attr("colspan", t, !0, !0) + ' class="snip-table__loading">' + i.escape(null == (e = r) ? "" : e) + "</td>")
        }.call(this, "colspan" in r ? r.colspan : "undefined" != typeof colspan ? colspan : void 0, "message" in r ? r.message : "undefined" != typeof message ? message : void 0), n.join("")
    }
}, function (t, e, n) {
    (function (e, i) {
        var r, o, s = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, a = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)c.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, c = {}.hasOwnProperty;
        r = n(182), o = function (t) {
            function e() {
                return this.select = s(this.select, this), this.fetched = s(this.fetched, this), this.initialize = s(this.initialize, this), this.url = s(this.url, this), e.__super__.constructor.apply(this, arguments)
            }

            return a(e, t), e.prototype.model = r, e.prototype.url = function () {
                return "/api/cart/" + this.token + "/shipping_rates";
            }, e.prototype.initialize = function (t) {
                return this.token = null != t ? t.token : void 0, this.listenTo(this, "sync", this.fetched)
            }, e.prototype.defaultHiddenMethods = ["usps-media-mail"], e.prototype.fetched = function () {
                var t, e, n, r, o, s, a, c, u, l, p;
                if (e = this.inject("config"), t = e.allowed_shipping_methods, n = null != (u = e.excluded_shipping_methods) ? u : this.defaultHiddenMethods, p = i.map(this.models, i.clone), t)for (r = 0, s = p.length; r < s; r++)c = p[r], i.contains(t, c.attributes.slug) || this.remove(c);
                if (n) {
                    for (l = [], o = 0, a = p.length; o < a; o++)c = p[o], i.contains(n, c.attributes.slug) ? l.push(this.remove(c)) : l.push(void 0);
                    return l
                }
            }, e.prototype.select = function (t) {
                var e, n, i, r, o;
                if (i = this.findWhere({description: t})) {
                    for (o = this.models, e = 0, n = o.length; e < n; e++)r = o[e], r.set("selected", !1);
                    return i.set("selected", !0)
                }
            }, e
        }(e.Collection), t.exports = o
    }).call(e, n(2), n(5))
}, function (t, e, n) {
    (function (e) {
        var n, i = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)r.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, r = {}.hasOwnProperty;
        n = function (t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }

            return i(e, t), e
        }(e.Model), t.exports = n
    }).call(e, n(2))
}, function (t, e, n) {
    var i = n(85);
    t.exports = function (t) {
        var e, n = [], r = t || {};
        return function (t) {
            n.push('<table class="snip-table"><thead class="snip-table__header"></thead><tbody id="snipcart-shippings-list" class="snip-table__body"></tbody></table><div class="snip-actions"><a href="#" id="snipcart-previous" class="snip-btn snip-btn--left">' + i.escape(null == (e = t.getResource("previous")) ? "" : e) + '</a><a href="#" id="snipcart-next" class="snip-btn snip-btn--highlight snip-btn--right">' + i.escape(null == (e = t.getResource("next")) ? "" : e) + "</a></div>")
        }.call(this, "helper" in r ? r.helper : "undefined" != typeof helper ? helper : void 0), n.join("")
    }
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s, a = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, c = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)u.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, u = {}.hasOwnProperty;
        i = n(185), o = n(143), s = n(188), r = function (t) {
            function e() {
                return this.before = a(this.before, this), e.__super__.constructor.apply(this, arguments)
            }

            return c(e, t), e.prototype.controller = new i, e.prototype.before = function (t) {
                var e, n;
                if ("login" !== t && "history/:token" !== t)return n = this.inject("user"), null == n ? (e = new o({
                    redirectTo: t,
                    noGuest: !0,
                    hideTotal: !0,
                    title: this.inject("viewhelper").getResource("login_title"),
                    app: this.inject()
                }), this.inject("mainview").setContentView(e), !1) : void 0
            }, e.prototype.appRoutes = {
                orders: "ordersHistory",
                "history/:token": "ordersHistoryForCustomer",
                subscriptions: "subscriptionsHistory",
                "subscriptions/:id": "subscriptionDetails",
                "subscriptions/:subscriptionId/invoices/:invoiceId": "invoiceDetails"
            }, e
        }(e.AppRouter), t.exports = r
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s, a, c, u, l = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)p.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, p = {}.hasOwnProperty;
        o = n(186), a = n(187), r = n(188), u = n(196), s = n(203), c = n(211), i = function (t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }

            return l(e, t), e.prototype.ordersHistory = function () {
                var t;
                return t = this.inject("mainview"), t.setContentView(new r)
            }, e.prototype.ordersHistoryForCustomer = function (t) {
                var e, n;
                return e = this.inject("mainview"), n = new r({sessionToken: t}), e.setContentView(n)
            }, e.prototype.subscriptionsHistory = function () {
                var t;
                return t = this.inject("mainview"), t.setContentView(new u)
            }, e.prototype.subscriptionDetails = function (t) {
                var e;
                return e = this.inject("mainview"), e.setContentView(new s({model: new o({id: t})}))
            }, e.prototype.invoiceDetails = function (t, e) {
                var n;
                return n = this.inject("mainview"), n.setContentView(new c({model: new a({subscriptionId: t, id: e})}))
            }, e
        }(e.Controller), t.exports = i
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var n, i = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)r.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, r = {}.hasOwnProperty;
        n = function (t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }

            return i(e, t), e.prototype.urlRoot = "/api/customer/subscriptions", e
        }(e.Model), t.exports = n
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var n, i = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)r.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, r = {}.hasOwnProperty;
        n = function (t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }

            return i(e, t), e.prototype.init = function (t) {
                return this.subscriptionId = t.subscriptionId
            }, e.prototype.urlRoot = function () {
                return "/api/customer/subscriptions/" + this.subscriptionId + "/invoices"
            }, e
        }(e.Model), t.exports = n
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s, a = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, c = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)u.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, u = {}.hasOwnProperty;
        r = n(189), i = n(193), s = n(195), o = function (t) {
            function e() {
                return this.close = a(this.close, this), this.afterRender = a(this.afterRender, this), this.initialize = a(this.initialize, this), e.__super__.constructor.apply(this, arguments)
            }

            return c(e, t), e.prototype.pageName = "customer/orders-history", e.prototype.hideStep = !0, e.prototype.hideTotal = !0, e.prototype.templateText = s, e.prototype.initialize = function (t) {
                if (t)return this.sessionToken = t.sessionToken
            }, e.prototype.afterRender = function () {
                var t, e;
                return t = this.inject("mainview"), e = this.inject("viewhelper"), t.setTitle(e.getResource("orders_history")), this.listView = new r({collection: new i({sessionToken: this.sessionToken})}), this.listView.renderTo(this.$("#snipcart-orders-history-container"))
            }, e.prototype.close = function () {
                var t;
                return null != (t = this.listView) && "function" == typeof t.remove && t.remove(), this.remove()
            }, e
        }(e.View), t.exports = o
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var i, r = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, o = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)s.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, s = {}.hasOwnProperty;
        i = function (t) {
            function e() {
                return this.loadComplete = r(this.loadComplete, this), this.load = r(this.load, this), this.templateArgs = r(this.templateArgs, this), e.__super__.constructor.apply(this, arguments)
            }

            return o(e, t), e.prototype.className = "snip-table", e.prototype.bodyClassName = "snip-table__body", e.prototype.headerClassName = "snip-table__header", e.prototype.fetch = !0, e.prototype.itemTemplate = n(190), e.prototype.headerTemplate = n(191), e.prototype.emptyTemplate = n(192), e.prototype.templateArgs = function () {
                return {helper: this.inject("viewhelper")}
            }, e.prototype.load = function () {
                var t, e;
                return t = this.inject("mainview"), e = this.inject("viewhelper"), t.load({message: e.getResource("orders_fetching_orders")})
            }, e.prototype.loadComplete = function () {
                var t;
                return t = this.inject("mainview"), t.loadComplete()
            }, e
        }(e.ListView), t.exports = i
    }).call(e, n(2))
}, function (t, e) {
    t.exports = '<td class="snip-table__cell--bold">\r\n    <a href="#" class="snipcart-route-link" data-route="orders/<%= model.token %>">\r\n        <%= model.invoiceNumber %>\r\n    </a>\r\n</td>\r\n<td class="snip-table__cell--center">\r\n    <%= helper.datetime(model.completionDate) %>\r\n</td>\r\n<td class="snip-table__cell--center">\r\n    <%= model.status %>\r\n</td>\r\n<td class="snip-table__cell--right snip-table__cell--highlight">\r\n    <%= helper.formatMoney(model.finalGrandTotal, model.currency) %>\r\n</td>'
}, function (t, e) {
    t.exports = "<th>\r\n    <%= helper.getResource('order_invoice_number') %>\r\n</th>\r\n<th class=\"snip-table__cell--center\">\r\n    <%= helper.getResource('order_date') %>\r\n</th>\r\n<th class=\"snip-table__cell--center\">\r\n    <%= helper.getResource('order_status') %>\r\n</th>\r\n<th class=\"snip-table__cell--right\">\r\n    <%= helper.getResource('order_total') %>\r\n</th>"
}, function (t, e) {
    t.exports = '<td colspan="4" class="snip-table__cell--center">\r\n    <%= helper.getResource(\'orders_history_no_orders\') %>\r\n</td>'
}, function (t, e, n) {
    (function (e) {
        var i, r, o = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, s = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)a.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, a = {}.hasOwnProperty;
        i = n(194), r = function (t) {
            function e() {
                return this.initialize = o(this.initialize, this), e.__super__.constructor.apply(this, arguments)
            }

            return s(e, t), e.prototype.model = i, e.prototype.url = function () {
                return this.sessionToken ? "/api/customer/orders/" + this.sessionToken : "/api/customer/orders"
            }, e.prototype.initialize = function (t) {
                if (t)return this.sessionToken = t.sessionToken
            }, e
        }(e.PagedCollection), t.exports = r
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var n, i = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)r.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, r = {}.hasOwnProperty;
        n = function (t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }

            return i(e, t), e.prototype.idAttribute = "token", e.prototype.urlRoot = "/api/customer/orders", e
        }(e.Model), t.exports = n
    }).call(e, n(2))
}, function (t, e) {
    t.exports = '<div id="snipcart-orders-history-container"></div>'
}, function (t, e, n) {
    var i, r, o = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }, s = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e)a.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, a = {}.hasOwnProperty;
    i = [n(7), n(5), n(2), n(197), n(201), n(202)], r = function (t, e, n, i, r, a) {
        var c;
        return c = function (t) {
            function e() {
                return this.close = o(this.close, this), this.afterRender = o(this.afterRender, this), e.__super__.constructor.apply(this, arguments)
            }

            return s(e, t), e.prototype.pageName = "customer/subscriptions", e.prototype.hideStep = !0, e.prototype.hideTotal = !0, e.prototype.templateText = a, e.prototype.afterRender = function () {
                var t, e;
                return t = this.inject("mainview"), e = this.inject("viewhelper"), t.setTitle(e.getResource("subscriptions_history")), this.listView = new i({collection: new r}), this.listView.renderTo(this.$("#snipcart-subscriptions-history-container"))
            }, e.prototype.close = function () {
                return this.remove()
            }, e
        }(n.View)
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function (t, e, n) {
    var i, r, o = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }, s = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e)a.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, a = {}.hasOwnProperty;
    i = [n(7), n(5), n(2), n(198), n(199), n(200)], r = function (t, e, n, i, r, a) {
        var c;
        return c = function (t) {
            function e() {
                return this.loadComplete = o(this.loadComplete, this), this.load = o(this.load, this), this.templateArgs = o(this.templateArgs, this), e.__super__.constructor.apply(this, arguments)
            }

            return s(e, t), e.prototype.className = "snipcart-list", e.prototype.fetch = !0, e.prototype.itemTemplate = i, e.prototype.headerTemplate = r, e.prototype.emptyTemplate = a, e.prototype.templateArgs = function () {
                return {helper: this.inject("viewhelper")}
            }, e.prototype.load = function () {
                var t, e;
                return t = this.inject("mainview"), e = this.inject("viewhelper"), t.load({message: e.getResource("subscriptions_fetching_subscriptions")})
            }, e.prototype.loadComplete = function () {
                return this.inject("mainview").loadComplete()
            }, e
        }(n.ListView)
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function (t, e) {
    t.exports = '<td class="snipcart-td-1 snipcart-td-left">\r\n    <strong>\r\n        <a href="#" class="snipcart-route-link" data-route="subscriptions/<%= model.id %>">\r\n            <%= model.plan.name %>\r\n        </a>\r\n    </strong>\r\n</td>\r\n\r\n<td class="snipcart-td-2 snipcart-td-center">\r\n    <%= model.plan.quantity %>\r\n</td>\r\n\r\n<td class="snipcart-td-3 snipcart-td-right">\r\n    <%= helper.formatMoney(model.plan.amount) %>\r\n</td>\r\n\r\n<td class="snipcart-td-4 snipcart-td-last snipcart-td-right">\r\n    <strong>\r\n        <%= helper.formatMoney(model.plan.totalAmount) %>\r\n    </strong>\r\n</td>'
}, function (t, e) {
    t.exports = "<th class=\"snipcart-th-1 snipcart-th-left\">\r\n    <%= helper.getResource('subscription_name') %>\r\n</th>\r\n\r\n<th class=\"snipcart-th-2 snipcart-th-center\">\r\n    <%= helper.getResource('subscription_quantity') %>\r\n</th>\r\n\r\n<th class=\"snipcart-th-3 snipcart-th-right\">\r\n    <%= helper.getResource('subscription_amount') %>\r\n</th>\r\n\r\n<th class=\"snipcart-td-4 snipcart-td-last snipcart-th-right\">\r\n    <%= helper.getResource('subscription_total_amount') %>\r\n</th>"
}, function (t, e) {
    t.exports = ""
}, function (t, e, n) {
    (function (e) {
        var i, r, o = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)s.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, s = {}.hasOwnProperty;
        i = n(186), r = function (t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }

            return o(e, t), e.prototype.model = i, e.prototype.url = "/api/customer/subscriptions", e
        }(e.PagedCollection), t.exports = r
    }).call(e, n(2))
}, function (t, e) {
    t.exports = '<div class="snipcart-step">\r\n    <div class="snipcart-step-container">\r\n        <div id="snipcart-subscriptions-history-container"></div>\r\n    </div>\r\n</div>'
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, a = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)c.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, c = {}.hasOwnProperty;
        o = n(204), r = n(209), i = function (t) {
            function e() {
                return this.close = s(this.close, this), this.loadComplete = s(this.loadComplete, this), this.load = s(this.load, this), this.afterRender = s(this.afterRender, this), this.templateArgs = s(this.templateArgs, this), this.init = s(this.init, this), e.__super__.constructor.apply(this, arguments)
            }

            return a(e, t), e.prototype.template = n(210), e.prototype.fetch = !0, e.prototype.pageName = "customer/subscriptions/details", e.prototype.hideStep = !0, e.prototype.hideTotal = !0, e.prototype.title = "", e.prototype.events = {"click #snipcart-cancel-subscription": "cancelSubscription"}, e.prototype.init = function (t) {
                return this.appView = this.inject("mainview")
            }, e.prototype.templateArgs = function () {
                return {h: this.inject("viewhelper"), cancelled: this.model.get("cancelledOn")}
            }, e.prototype.afterRender = function () {
                var t;
                return this.appView.setTitle(this.model.get("plan").name), t = this.inject("viewhelper"), this.model.get("cancelledOn") && this.inject("flash").showMessage({
                    type: "warn",
                    keep: !0,
                    message: t.getResource("subscription_cancelled_notice", t.date(this.model.get("cancelledOn")))
                }), this.listView || (this.listView = new o({collection: new r({subscriptionId: this.model.id})})), this.listView.renderTo(this.$(".snipcart-invoices-container"))
            }, e.prototype.cancelSubscription = function () {
                var t, e;
                return t = this.inject("flash"), e = this.inject("viewhelper"), t.confirm(e.getResource("subscription_cancel_confirmation")).done(function (t) {
                    return function () {
                        return t.model.destroy().done(function (e) {
                            return t.model.set(e), t.render()
                        })
                    }
                }(this))
            }, e.prototype.load = function () {
                var t;
                return t = this.inject("viewhelper"), this.appView.load({message: t.getResource("subscriptions_fetching_details")})
            }, e.prototype.loadComplete = function () {
                return this.appView.loadComplete()
            }, e.prototype.close = function () {
                return this.inject("flash").clear(), this.remove()
            }, e
        }(e.ItemView), t.exports = i
    }).call(e, n(2))
}, function (t, e, n) {
    var i, r, o = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }, s = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e)a.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, a = {}.hasOwnProperty;
    i = [n(7), n(5), n(2), n(205), n(206), n(207), n(208)], r = function (t, e, n, i, r, a, c) {
        var u;
        return u = function (t) {
            function e() {
                return this.templateArgs = o(this.templateArgs, this), this.loading = o(this.loading, this), e.__super__.constructor.apply(this, arguments)
            }

            return s(e, t), e.prototype.fetch = !0, e.prototype.className = "snipcart-list", e.prototype.itemTemplate = i, e.prototype.headerTemplate = r, e.prototype.emptyTemplate = a, e.prototype.loading = function () {
                return {
                    template: c,
                    message: this.inject("viewhelper").getResource("subscription_invoices_loading"),
                    colspan: 3
                }
            }, e.prototype.templateArgs = function () {
                return {h: this.inject("viewhelper")}
            }, e
        }(n.ListView)
    }.apply(e, i), !(void 0 !== r && (t.exports = r))
}, function (t, e) {
    t.exports = '<td class="snipcart-td-left">\r\n    <a href="#" class="snipcart-route-link" data-route="subscriptions/<%= model.subscription.id %>/invoices/<%= model.id %>">\r\n        <%= model.number %>\r\n    </a>\r\n</td>\r\n<td class="snipcart-td-center">\r\n    <%= h.datetime(model.creationDate) %>\r\n</td>\r\n<td class="snipcart-td-right">\r\n    <%= h.formatMoney(model.total) %>\r\n</td>'
}, function (t, e) {
    t.exports = "<th class=\"snipcart-th-left\">\r\n    <%= h.getResource('subscription_invoice_number') %>\r\n</th>\r\n<th class=\"snipcart-th-center\">\r\n    <%= h.getResource('subscription_invoice_date') %>\r\n</th>\r\n<th class=\"snipcart-th-right\">\r\n    <%= h.getResource('subscription_invoice_amount') %>\r\n</th>"
}, function (t, e) {
    t.exports = "<td class=\"snipcart-td-center\">\r\n    <%= h.getResource('subscription_no_invoices') %>\r\n</td>"
}, function (t, e) {
    t.exports = '<td colspan="<%= colspan %>" class="snipcart-list-loading">\r\n    <% if (message) { %>\r\n        <p class="snipcart-list-loading-message">\r\n            <%= message %>\r\n        </p>\r\n    <% } %>\r\n</td>'
}, function (t, e, n) {
    (function (e) {
        var i, r, o = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, s = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)a.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, a = {}.hasOwnProperty;
        i = n(187), r = function (t) {
            function e() {
                return this.url = o(this.url, this), e.__super__.constructor.apply(this, arguments)
            }

            return s(e, t), e.prototype.initialize = function (t) {
                return this.subscriptionId = t.subscriptionId
            }, e.prototype.model = i, e.prototype.url = function () {
                return "/api/customer/subscriptions/" + this.subscriptionId + "/invoices"
            }, e
        }(e.PagedCollection), t.exports = r
    }).call(e, n(2))
}, function (t, e, n) {
    var i = n(85);
    t.exports = function (t) {
        var e, n = [], r = t || {};
        return function (t, r, o) {
            n.push('<div class="snipcart-step"><div class="snipcart-step-container"><div class="snipcart-container-content"><div class="snipcart-plan-details"><div class="snipcart-subscription-actions">'), null == t && n.push('<button id="snipcart-cancel-subscription" class="snipcart-btn">' + i.escape(null == (e = r.getResource("subscription_cancel_button")) ? "" : e) + "</button>"), n.push('</div><dl class="snipcart-def-list">'), null != t && n.push("<dd>" + i.escape(null == (e = r.getResource("subscription_cancelledon")) ? "" : e) + " :</dd><dt>" + i.escape(null == (e = r.date(o.cancelledOn)) ? "" : e) + "</dt>"), n.push("<dd>" + i.escape(null == (e = r.getResource("subscription_plan_interval")) ? "" : e) + " :</dd><dt>" + i.escape(null == (e = o.plan.interval) ? "" : e) + "</dt><dd>" + i.escape(null == (e = r.getResource("subscription_amount")) ? "" : e) + " :</dd><dt>" + i.escape(null == (e = r.formatMoney(o.plan.totalAmountWithTaxes)) ? "" : e) + '</dt></dl></div><h2 class="snipcart-invoices-title">' + i.escape(null == (e = r.getResource("subscription_invoices_list")) ? "" : e) + '</h2><div class="snipcart-invoices-container snipcart-table-header-color"></div></div></div></div>')
        }.call(this, "cancelled" in r ? r.cancelled : "undefined" != typeof cancelled ? cancelled : void 0, "h" in r ? r.h : "undefined" != typeof h ? h : void 0, "model" in r ? r.model : "undefined" != typeof model ? model : void 0), n.join("")
    }
}, function (t, e, n) {
    (function (e) {
        var i, r = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, o = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)s.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, s = {}.hasOwnProperty;
        i = function (t) {
            function e() {
                return this.close = r(this.close, this), this.loadComplete = r(this.loadComplete, this), this.load = r(this.load, this), this.afterRender = r(this.afterRender, this), this.templateArgs = r(this.templateArgs, this), this.init = r(this.init, this), e.__super__.constructor.apply(this, arguments)
            }

            return o(e, t), e.prototype.fetch = !0, e.prototype.template = n(212), e.prototype.hideStep = !0, e.prototype.hideTotal = !0, e.prototype.title = "", e.prototype.init = function (t) {
                return this.appView = this.inject("mainview"), this.viewHelper = this.inject("viewhelper")
            }, e.prototype.templateArgs = function () {
                return {h: this.viewHelper}
            }, e.prototype.afterRender = function () {
                return this.appView.setTitle(this.model.get("number"))
            }, e.prototype.load = function () {
                return this.appView.load({message: this.viewHelper.getResource("subscription_invoice_fetching_details")})
            }, e.prototype.loadComplete = function () {
                return this.appView.loadComplete()
            }, e.prototype.close = function () {
                return this.remove()
            }, e
        }(e.ItemView), t.exports = i
    }).call(e, n(2))
}, function (t, e, n) {
    var i = n(85);
    t.exports = function (t) {
        var e, n = [], r = t || {};
        return function (t, r, o) {
            n.push('<div class="snipcart-step"><div class="snipcart-step-container"><div class="snipcart-container-content"><dl class="snipcart-def-list"><dd>' + i.escape(null == (e = t.getResource("subscription_invoice_date")) ? "" : e) + " :</dd><dt>" + i.escape(null == (e = t.datetime(r.creationDate)) ? "" : e) + '</dt></dl><h2 class="snipcart-invoices-title">' + i.escape(null == (e = t.getResource("subscription_invoice_details")) ? "" : e) + '</h2><table class="snipcart-list snipcart-table-header-color"><thead><tr><th class="snipcart-th-left">' + i.escape(null == (e = t.getResource("subscription_invoice_item")) ? "" : e) + '</th><th class="snipcart-th-center">' + i.escape(null == (e = t.getResource("subscription_quantity")) ? "" : e) + '</th><th class="snipcart-th-right">' + i.escape(null == (e = t.getResource("subscription_invoice_amount")) ? "" : e) + '</th></tr></thead><tbody><tr><td class="snipcart-td-left">' + i.escape(null == (e = r.subscription.plan.name) ? "" : e) + "</td><td>" + i.escape(null == (e = r.subscription.plan.quantity) ? "" : e) + '</td><td class="snipcart-td-right">' + i.escape(null == (e = t.formatMoney(r.subscription.plan.totalAmount)) ? "" : e) + "</td></tr>"), function () {
                var o = r.taxes;
                if ("number" == typeof o.length)for (var s = 0, a = o.length; s < a; s++) {
                    var c = o[s];
                    n.push('<tr><td class="snipcart-td-left">' + i.escape(null == (e = c.taxName) ? "" : e) + '</td><td></td><td class="snipcart-td-right">' + i.escape(null == (e = t.formatMoney(c.amount)) ? "" : e) + "</td></tr>")
                } else {
                    var a = 0;
                    for (var s in o) {
                        a++;
                        var c = o[s];
                        n.push('<tr><td class="snipcart-td-left">' + i.escape(null == (e = c.taxName) ? "" : e) + '</td><td></td><td class="snipcart-td-right">' + i.escape(null == (e = t.formatMoney(c.amount)) ? "" : e) + "</td></tr>")
                    }
                }
            }.call(this), n.push('<tr><td class="snipcart-td-left">' + i.escape(null == (e = t.getResource("total")) ? "" : e) + '</td><td></td><td class="snipcart-td-right snipcart-grand-total">' + i.escape(null == (e = t.formatMoney(r.total)) ? "" : e) + "</td></tr></tbody></table></div></div></div>")
        }.call(this, "h" in r ? r.h : "undefined" != typeof h ? h : void 0, "model" in r ? r.model : "undefined" != typeof model ? model : void 0, "undefined" in r ? r.undefined : void 0), n.join("")
    }
}, function (t, e, n) {
    (function (e) {
        var i, r, o = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, s = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)a.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, a = {}.hasOwnProperty;
        r = n(113), i = function (t) {
            function e() {
                return this.checkout = o(this.checkout, this), this.cart = o(this.cart, this), this.before = o(this.before, this), e.__super__.constructor.apply(this, arguments)
            }

            return s(e, t), e.prototype.routes = {
                cart: "cart",
                checkout: "checkout"
            }, e.prototype.before = function (t) {
                var e;
                return e = this.inject("cart"), null == e ? (this.inject("mainview").showEmptyView(), !1) : "function" != typeof e.isEmpty || !e.isEmpty() || (this.inject("mainview").showEmptyView(), !1)
            }, e.prototype.cart = function () {
                var t;
                return t = new r({hideStep: !0, showContinueShopping: !0}), t.next = function (t) {
                    return function () {
                        return t.inject("preloaded").settings.onlyAllowGuests || t.inject("user") ? t.inject("routers").order.infosOrBillingAddress() : t.inject("routers").user.navigate("login", !0)
                    }
                }(this), this.inject("mainview").setContentView(t), this.inject("mainview").show()
            }, e.prototype.checkout = function () {
                var t;
                return t = new r, t.pageName = "order-details", this.inject("mainview").setContentView(t), this.inject("mainview").show()
            }, e
        }(e.AppRouter), t.exports = i
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e, i) {
        var r, o, s = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, a = [].slice;
        o = n(39), r = function () {
            function t() {
                this._validateLocale = s(this._validateLocale, this), this._format = s(this._format, this), this._string = s(this._string, this), this.exists = s(this.exists, this), this.t = s(this.t, this), this.register = s(this.register, this), this.lang = s(this.lang, this), this.initialize = s(this.initialize, this), this._locales = {}
            }

            return t.prototype.initialize = function () {
                var t, n;
                return t = null != (n = e("html").attr("lang")) ? n : "en", t = t.replace("_", "-"), this.lang(t)
            }, t.prototype.lang = function (t) {
                if (null != t && (this._lang = t.replace("_", "-"), null == this._locales[this._lang] && "en" !== this._lang)) {
                    if (this._lang.indexOf("-") > 0)return t = this._lang.substr(0, 2), o.log("Locale " + this._lang + " not found, fallbing back to " + t), this.lang(t);
                    o.log("Locale " + this._lang + " not found, falling back to en"), this._lang = "en"
                }
                return this._lang
            }, t.prototype.register = function (t, e) {
                var n;
                if (this._locales[t] = null != (n = this._locales[t]) ? n : {}, i.extend(this._locales[t], e), "en" !== t)return this._validateLocale(t, this._locales[t])
            }, t.prototype.t = function () {
                var t, e;
                return t = arguments[0], e = 2 <= arguments.length ? a.call(arguments, 1) : [], this._format.apply(this, [this._string(t)].concat(a.call(e)))
            }, t.prototype.exists = function (t) {
                var e;
                return e = this.lang(), null != this._locales[e][t]
            }, t.prototype._string = function (t) {
                var e;
                return e = this.lang(), null == this._locales[e][t] && (o.log("Missing localization string " + t), "en" !== e && (e = "en"), null == this._locales[e][t]) ? (o.log("Our bad, let us know at geeks@snipcart.com"), t) : this._locales[e][t]
            }, t.prototype._format = function () {
                var t, e;
                return t = arguments[0], e = 2 <= arguments.length ? a.call(arguments, 1) : [], t.replace(/{(\d+)}/g, function (t, n) {
                    return null != e[n] ? e[n] : t
                })
            }, t.prototype._validateLocale = function (t, e) {
                var n, i, r, s;
                i = this._locales.en;
                for (n in i)s = i[n], null == e[n] && o.log("Missing localization string " + n + " for locale " + t);
                r = [];
                for (n in e)s = e[n], null == this._locales.en[n] ? r.push(o.log("Localization string " + n + " not needed for locale " + t)) : r.push(void 0);
                return r
            }, t
        }(), t.exports = r
    }).call(e, n(7), n(5))
}, function (t, e, n) {
    (function (e) {
        var i, r, o = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, s = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)a.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, a = {}.hasOwnProperty, c = [].slice;
        i = n(39), r = function (t) {
            function e(t, e) {
                this._dequeue = o(this._dequeue, this), this._do = o(this._do, this), this.execute = o(this.execute, this), this._queue = t, this._dequeue()
            }

            return s(e, t), e.prototype._dequeueing = !1, e.prototype.execute = function () {
                var t;
                return t = 1 <= arguments.length ? c.call(arguments, 0) : [], this._dequeueing ? (this._queue.push(t), this._dequeue()) : this._do.apply(this, t)
            }, e.prototype._do = function () {
                var t, e, n, r, o, s, a, u, l, p, h, d, f, m, y;
                switch (n = arguments[0], t = 2 <= arguments.length ? c.call(arguments, 1) : [], y = this.inject(), n) {
                    case"registerLocale":
                        return (u = y.i18n).register.apply(u, t), y.i18n.initialize();
                    case"authenticate":
                        return (l = y.auth).authenticate.apply(l, t);
                    case"ensureOrder":
                        return y.ensureOrder();
                    case"setBillingAddress":
                        return (p = y.order).setDefaultBilling.apply(p, t);
                    case"setShippingAddress":
                        return (h = y.order).setDefaultShipping.apply(h, t);
                    case"config":
                        return this._setConfig.apply(this, t);
                    case"setAllowedShippingMethods":
                        return this._setConfig("allowed_shipping_methods", t[0]);
                    case"item.add":
                        return y.collections.items.addProduct(t[0]);
                    case"plan.add":
                        return y.collections.plans.addFromDom(t[0]);
                    case"item.update":
                        if (t.length > 0)return s = t[0], y.collections.items.updateItem(s);
                        break;
                    case"item.destroy":
                        return y.collections.item.destroyWhere(t[0]);
                    case"bind":
                        return y.bindEvent.apply(y, t);
                    case"retrieve":
                        if (e = this.inject("cart"))return e.retrieve.apply(e, t);
                        break;
                    case"unbind":
                        return y.unbindEvent.apply(y, t);
                    case"meta.set":
                        return (d = y.order).setMetadata.apply(d, t);
                    case"customfield.set":
                        if (2 === t.length) {
                            for (r = y.collections.customFields.models, m = [], o = a = 0, f = r.length; 0 <= f ? a < f : a > f; o = 0 <= f ? ++a : --a)r[o].attributes.name === t[0] ? m.push(r[o].attributes.value = t[1]) : m.push(void 0);
                            return m
                        }
                        break;
                    default:
                        return i.log("Command " + n + " not recognized")
                }
            }, e.prototype._setConfig = function (t, e) {
                return this.inject("config")[t] = e
            }, e.prototype._dequeue = function () {
                if (!this._dequeueing) {
                    for (this._dequeueing = !0; this._queue.length > 0;)this._do.apply(this, this._queue.shift());
                    return this._dequeueing = !1
                }
            }, e
        }(e.Service), t.exports = function (t) {
            var e;
            return e = new r(t._queue), function () {
                var t, n;
                n = arguments[0], t = 2 <= arguments.length ? c.call(arguments, 1) : [], e.execute.apply(e, [n].concat(c.call(t)))
            }
        }
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var i, r, o = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, s = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)a.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, a = {}.hasOwnProperty;
        i = n(44), r = function (t) {
            function e() {
                return this.updateDiscount = o(this.updateDiscount, this), this.deleteDiscount = o(this.deleteDiscount, this), this.addDiscount = o(this.addDiscount, this), e.__super__.constructor.apply(this, arguments)
            }

            return s(e, t), e.prototype.initialize = function () {
                return this.app = this.inject()
            }, e.prototype.listen = function () {
                return this.listenTo(this.inject("vent"), "discount.added", this.addDiscount), this.listenTo(this.inject("vent"), "discount.deleted", this.deleteDiscount), this.listenTo(this.inject("vent"), "discount.updated", this.updateDiscount)
            }, e.prototype.addDiscount = function (t, e) {
                var n, r, o, s, a, c, u, l, p;
                if (l = new i(t), t.affectedItems && t.affectedItems.length > 0 && "AlternatePrice" === t.type)for (p = t.affectedItems, s = 0, c = p.length; s < c; s++)for (n = p[s], o = this.app.collections.items.where({id: n.id}), a = 0, u = o.length; a < u; a++)r = o[a], r.set("unitPrice", n.unitPrice), r.set("totalPrice", n.totalPrice);
                return this.app.collections.discounts.add(l)
            }, e.prototype.deleteDiscount = function (t, e) {
                var n, i, r, o, s, a, c, u, l;
                if (u = this.app.collections.discounts.get(t.id)) {
                    if (t.affectedItems && t.affectedItems.length > 0 && "AlternatePrice" === t.type)for (l = t.affectedItems, o = 0, a = l.length; o < a; o++)for (n = l[o], r = this.app.collections.items.where({id: n.id}), s = 0, c = r.length; s < c; s++)i = r[s], i.set("unitPrice", n.unitPrice), i.set("totalPrice", n.totalPrice);
                    return this.app.collections.discounts.remove(u)
                }
            }, e.prototype.updateDiscount = function (t, e) {
                var n;
                if (n = this.app.collections.discounts.get(t.id))return n.set(t)
            }, e
        }(e.Service), t.exports = r
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var i, r = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, o = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)s.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, s = {}.hasOwnProperty;
        i = function (t) {
            function e() {
                return this.trackCompletedOrder = r(this.trackCompletedOrder, this), this.listen = r(this.listen, this), e.__super__.constructor.apply(this, arguments)
            }

            return o(e, t), e.prototype.analytics = [n(218)], e.prototype.listen = function () {
                return this.listenTo(this.inject("vent"), "order.completed", this.trackCompletedOrder)
            }, e.prototype.trackCompletedOrder = function (t) {
                var e, n, i, r, o, s;
                for (i = this.analytics, r = [], e = 0, n = i.length; e < n; e++)o = i[e], s = new o, s.isEnabled() ? r.push(s.trackCompletedOrder(t)) : r.push(void 0);
                return r
            }, e
        }(e.Service), t.exports = i
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var n, i = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, r = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)o.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, o = {}.hasOwnProperty;
        n = function (t) {
            function e() {
                return this.formatName = i(this.formatName, this), this.trackCompletedOrder = i(this.trackCompletedOrder, this), this.isEnabled = i(this.isEnabled, this),
                    this.listen = i(this.listen, this), e.__super__.constructor.apply(this, arguments)
            }

            return r(e, t), e.prototype.listen = function () {
                return this.listenTo(this.inject("vent"), "order.completed", this.trackCompletedOrder)
            }, e.prototype.isEnabled = function () {
                var t;
                return t = this.inject("preloaded").settings, t.eCommerceAnalyticsEnabled
            }, e.prototype.trackCompletedOrder = function (t) {
                var e, n, i, r, o, s, a, c, u;
                if (this.inject("logger").log("Tracking order in Google Analytics", t), "function" == typeof window.ga) {
                    for (this.inject("logger").log("Using Universal Analytics"), window.ga("require", "ecommerce"), window.ga("ecommerce:clear"), u = {
                        id: t.token,
                        affiliation: null === t.billingAddress.companyname ? "" : t.billingAddress.companyname,
                        revenue: t.grandTotal,
                        shipping: t.shippingFees,
                        tax: t.taxesTotal
                    }, this.inject("logger").log("Sending following transaction to Google Universal Analytics:", u), window.ga("ecommerce:addTransaction", u), a = t.items, i = 0, o = a.length; i < o; i++)n = a[i], e = {
                        id: t.token,
                        name: this.formatName(n),
                        sku: n.id,
                        category: "",
                        price: n.price,
                        quantity: n.quantity
                    }, this.inject("logger").log("Sending following item to Google Universal Analytics", e), window.ga("ecommerce:addItem", e);
                    return window.ga("ecommerce:send")
                }
                if (window._gaq && "function" == typeof window._gaq.push) {
                    for (this.inject("logger").log("Using legacy analytics"), window._gaq.push(["_addTrans", t.token, null === t.billingAddress.companyname ? "" : t.billingAddress.companyname, t.grandTotal, t.taxesTotal, t.shippingFees, t.billingAddress.city, t.billingAddress.province, t.billingAddress.country]), c = t.items, r = 0, s = c.length; r < s; r++)n = c[r], window._gaq.push(["_addItem", t.token, n.id, this.formatName(n), "", n.price, n.quantity]);
                    return window._gaq.push(["_trackTrans"])
                }
                return this.inject("logger").log("Impossible to send order to Google Analytics. Looks like your `window.ga` variable is not defined. Please make sure you included Google Analytics tracking code correctly.")
            }, e.prototype.formatName = function (t) {
                var e, n, i, r, o;
                if (r = t.name, t.customFields.length)for (o = t.customFields, n = 0, i = o.length; n < i; n++)e = o[n], r += " " + e.value;
                return r
            }, e
        }(e.Service), t.exports = n
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var n, i = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)r.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, r = {}.hasOwnProperty;
        t.exports = n = function (t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }

            return i(e, t), e.prototype.listen = function () {
                return this.listenTo(this.inject("vent"), "items.outofstock", this.itemsOutOfStock), this.listenTo(this.inject("vent"), "item.maxquantity.reached", this.itemMaxQuantityReached)
            }, e.prototype.itemMaxQuantityReached = function (t) {
                return this.inject("flash").clear(), this.inject("flash").showMessage({
                    type: "warn",
                    message: this.inject("viewhelper").getResource("notifications_item_not_added_due_to_max_quantity")
                })
            }, e.prototype.itemsOutOfStock = function (t) {
                var e, n, i, r, o, s, a, c, u;
                for (e = this.inject(), u = this.inject("vent"), o = 0, a = t.length; o < a; o++)if (n = t[o], "OutOfStock" === n.status)for (r = e.collections.items.where({uniqueId: n.uniqueId}), s = 0, c = r.length; s < c; s++)i = r[s], i.set("quantity", n.maxQuantity), i.outOfStock = !0;
                return this.inject("flash").showMessage({
                    type: "error",
                    message: this.inject("viewhelper").getResource("outofstock_notification")
                }), e.routers.order.navigate("cart", !0)
            }, e
        }(e.Service)
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var i, r, o = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, s = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)a.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, a = {}.hasOwnProperty;
        r = n(36), i = function (t) {
            function e() {
                return this.logout = o(this.logout, this), this._removed = o(this._removed, this), this.cartIsEmpty = o(this.cartIsEmpty, this), this.listen = o(this.listen, this), e.__super__.constructor.apply(this, arguments)
            }

            return s(e, t), e.prototype.listen = function () {
                var t, e;
                return e = this.inject("vent"), t = this.inject(), this.listenTo(e, "item.removed", this._removed), this.listenTo(e, "plan.removed", this._removed)
            }, e.prototype.cartIsEmpty = function () {
                var t;
                return t = this.inject(), t.collections.items.size() <= 0 && t.collections.plans.size() <= 0
            }, e.prototype._removed = function () {
                var t;
                if (t = this.inject(), t.collections.items.size() <= 0 && t.collections.plans.size() <= 0 && this.inject("mainview").visible)return this.inject("mainview").showEmptyView()
            }, e.prototype.logout = function () {
                var t;
                return t = new r, t.removeCookie("snipcart_auth_cookie"), this.inject("vent").trigger("user.loggedout")
            }, e
        }(e.Service), t.exports = i
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e, i) {
        var r, o, s, a = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)c.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, c = {}.hasOwnProperty;
        o = n(87), r = n(222), s = function (t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }

            return a(e, t), e.prototype.views = [], e.prototype.showMessage = function (t) {
                var e;
                return e = new o(t), this.views.push(e), this.inject("vent").trigger("flash", e)
            }, e.prototype.confirm = function (t, e) {
                var n, o;
                return n = new i.Deferred, o = new r(t, e), o.on("confirmed", function () {
                    return n.resolve(o)
                }), o.on("unconfirmed", function () {
                    return n.reject(o)
                }), this.views.push(o), this.inject("vent").trigger("flash", o), n
            }, e.prototype.clear = function () {
                var t, e, n, i, r;
                for (n = this.views, i = [], t = 0, e = n.length; t < e; t++)r = n[t], i.push(null != r && "function" == typeof r.remove ? r.remove() : void 0);
                return i
            }, e
        }(e.Service), t.exports = s
    }).call(e, n(2), n(7))
}, function (t, e, n) {
    var i, r, o = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var i in e)s.call(e, i) && (t[i] = e[i]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, s = {}.hasOwnProperty;
    r = n(87), i = function (t) {
        function e() {
            return e.__super__.constructor.apply(this, arguments)
        }

        return o(e, t), e.prototype.template = n(223), e.prototype.defaults = {
            keep: !0,
            type: "confirm"
        }, e.prototype.init = function (t, n) {
            return n || (n = {}), n.message = t, e.__super__.init.call(this, n)
        }, e.prototype.events = {
            "click .snipcart-confirm-yes": "confirmed",
            "click .snipcart-confirm-no": "unconfirmed"
        }, e.prototype.afterRender = function () {
            return this.$el.addClass("snipcart-flash-confirm"), e.__super__.afterRender.call(this)
        }, e.prototype.confirmed = function () {
            return this.trigger("confirmed", this.opts), this.remove()
        }, e.prototype.unconfirmed = function () {
            return this.trigger("unconfirmed", this.opts), this.remove()
        }, e
    }(r), t.exports = i
}, function (t, e, n) {
    var i = n(85);
    t.exports = function (t) {
        var e, n = [], r = t || {};
        return function (t) {
            n.push('<div class="snipcart-confirm-content"><div class="snipcart-confirm-options"><a href="#" class="snipcart-btn snipcart-confirm-yes">Yes</a><a href\'# class="snipcart-btn snipcart-confirm-no">No</a></div><div class="snipcart-confirm-message">' + i.escape(null == (e = t) ? "" : e) + "</div></div>")
        }.call(this, "message" in r ? r.message : "undefined" != typeof message ? message : void 0), n.join("")
    }
}, function (t, e, n) {
    (function (e) {
        var i, r, o = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, s = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)a.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, a = {}.hasOwnProperty;
        i = n(3), r = function (t) {
            function e() {
                return this.logout = o(this.logout, this), this.showUserProfile = o(this.showUserProfile, this), this.showCart = o(this.showCart, this), e.__super__.constructor.apply(this, arguments)
            }

            return s(e, t), e.prototype.events = {
                "click .snipcart-checkout": "showCart",
                "click .snipcart-user-profile": "showUserProfile",
                "click .snipcart-user-logout": "logout"
            }, e.prototype.init = function (t) {
                return this.listenTo(this.inject("vent"), "user.logged", this.userLogged), this.listenTo(this.inject("vent"), "user.loggedout", this.userLoggedOut), this.listenTo(this.inject("vent"), "cart.total.updated", this.totalUpdated), this.listenTo(this.inject("vent"), "cart.injected", this.totalUpdated), this.listenTo(this.inject("vent"), "cart.unset", this.totalUpdated), this.listenTo(this.inject("vent"), "cart.ready", this.totalUpdated), this.listenTo(this.inject("vent"), "currency.changed", this.totalUpdated), this
            }, e.prototype.setElement = function (t) {
                var n, i, r, o, s, a;
                for (e.__super__.setElement.call(this, t), this.inject("user") ? this.$(".snipcart-user-logout").show() : this.$(".snipcart-user-logout").hide(), s = this.$(".snipcart-user-email"), a = [], r = 0, o = s.length; r < o; r++)i = s[r], n = this.$(i), a.push(n.data("default-value", n.text()));
                return a
            }, e.prototype.showCart = function (t) {
                return this.prevent(t), i.history.navigate("cart", !0)
            }, e.prototype.showUserProfile = function (t) {
                return this.prevent(t), this.inject("mainview").show(), i.history.navigate("orders", !0)
            }, e.prototype.logout = function (t) {
                return this.prevent(t), this.inject("context").logout()
            }, e.prototype.userLogged = function (t) {
                return this.$(".snipcart-user-email").text(t.get("email")), this.$(".snipcart-user-logout").show()
            }, e.prototype.userLoggedOut = function () {
                var t, e, n, i, r;
                for (r = this.$(".snipcart-user-email"), n = 0, i = r.length; n < i; n++)e = r[n], t = this.$(e), t.text(t.data("default-value"));
                return this.$(".snipcart-user-logout").hide()
            }, e.prototype.totalUpdated = function () {
                var t, e, n, i, r, o, s, a;
                return t = this.inject("cart"), n = null != (i = null != t ? t.get("total") : void 0) ? i : 0, t ? (e = null != (r = this.inject("collections").items) ? r.itemsCount() : void 0, e += null != (o = null != (s = this.inject("collections").plans) ? s.totalPlans() : void 0) ? o : 0) : e = 0, a = this.inject("viewhelper").formatMoney(n), this.$(".snipcart-summary .snipcart-total-price").text(a), this.$(".snipcart-summary .snipcart-total-items").text(e), 0 === e ? this.$(".snipcart-summary").addClass("snipcart-summary-empty") : this.$(".snipcart-summary").removeClass("snipcart-summary-empty")
            }, e
        }(e.View), t.exports = r
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s, a, c, u = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)l.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, l = {}.hasOwnProperty;
        r = n(226), o = n(227), i = n(228), c = n(229), s = n(230), a = function (t) {
            function e() {
                return e.__super__.constructor.apply(this, arguments)
            }

            return u(e, t), e.prototype.items = new r, e.prototype.modal = new o, e.prototype.cart = new i, e.prototype.user = new c, e.prototype.products = new s, e.prototype.configure = function (t, e) {
                return this.config[t] = e, this
            }, e
        }(e.Service), t.exports = a
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e, i) {
        var r, o, s = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, a = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)c.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, c = {}.hasOwnProperty, u = [].slice;
        o = n(51), r = function (t) {
            function e() {
                return this._addMultipleItems = s(this._addMultipleItems, this), this.remove = s(this.remove, this), this.clear = s(this.clear, this), this.update = s(this.update, this), this.findById = s(this.findById, this), this.add = s(this.add, this), this.count = s(this.count, this), this.all = s(this.all, this), e.__super__.constructor.apply(this, arguments)
            }

            return a(e, t), e.prototype.all = function () {
                var t;
                return t = this.inject(), t.collections.items.toJSON()
            }, e.prototype.count = function () {
                var t;
                return t = this.inject(), t.collections.items.itemsCount()
            }, e.prototype.add = function (t) {
                return i.isArray(t) ? this._addMultipleItems(t) : this.inject("collections").items.addProduct(t).then(function (t) {
                    return function (t) {
                        return t.toJSON()
                    }
                }(this))
            }, e.prototype.findById = function (t) {
                return this.inject("collections").items.where({id: t}).map(function (t) {
                    return function (t) {
                        return t.toJSON()
                    }
                }(this))
            }, e.prototype.update = function (t, e) {
                var n, i;
                return n = o.defer(), (i = this.inject("collections").items.findWhere({id: t})) ? (i.set(e), i.save().fail(function (t) {
                    return function () {
                        var t;
                        return t = 1 <= arguments.length ? u.call(arguments, 0) : [], n.reject.apply(n, t)
                    }
                }(this)).done(function (t) {
                    return function () {
                        return n.resolve(i.toJSON())
                    }
                }(this)), n.promise) : (this.inject("logger").log("Item with ID " + t + " has not been found in the cart. Consider adding it with `addItem` method instead of updating it."), n.reject("Item not found"), n.promise)
            }, e.prototype.clear = function () {
                var t, e, n, r, s;
                return r = this.inject("collections").items, n = r.models, s = [], e = function (t) {
                    return function (t, e) {
                        return t.then(function () {
                            return e.destroy().then(function (t) {
                                return s.push(e)
                            })
                        })
                    }
                }(this), t = o.defer(), n.reduce(e, o.resolve()).then(function (e) {
                    return function () {
                        return t.resolve(i.map(s, function (t) {
                            return t.toJSON()
                        }))
                    }
                }(this))["catch"](function (e) {
                    return function (e) {
                        return t.reject(e)
                    }
                }(this)), t.promise
            }, e.prototype.remove = function (t) {
                var e, n;
                return e = o.defer(), (n = this.inject("collections").items.findWhere({id: t})) ? (n.destroy().fail(function (t) {
                    return function () {
                        var t;
                        return t = 1 <= arguments.length ? u.call(arguments, 0) : [], e.reject.apply(e, t)
                    }
                }(this)).done(function (t) {
                    return function () {
                        return e.resolve(n.toJSON())
                    }
                }(this)), e.promise) : (this.inject("logger").log("Item with ID " + t + " has not been found in the cart so it can't be removed."), e.reject("Item not found"), e.promise)
            }, e.prototype._addMultipleItems = function (t) {
                var e, n, r, s, a;
                return r = this.inject("collections").items, a = [], n = function (t) {
                    return function (t, e) {
                        return t.then(function () {
                            return r.addProduct(e).then(function (t) {
                                return a.push(t)
                            })
                        })
                    }
                }(this), e = o.defer(), s = t.reduce(n, o.resolve()), s.then(function (t) {
                    return function () {
                        return e.resolve(i.map(a, function (t) {
                            return t.toJSON()
                        }))
                    }
                }(this))["catch"](function (t) {
                    return function (t) {
                        return e.reject(t)
                    }
                }(this)), e.promise
            }, e
        }(e.Service), t.exports = r
    }).call(e, n(2), n(5))
}, function (t, e, n) {
    (function (e) {
        var i, r, o = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, s = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)a.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, a = {}.hasOwnProperty;
        i = n(3), r = function (t) {
            function e() {
                return this.close = o(this.close, this), this.show = o(this.show, this), e.__super__.constructor.apply(this, arguments)
            }

            return s(e, t), e.prototype.show = function () {
                return i.history.navigate("cart", !0)
            }, e.prototype.close = function () {
                return this.inject("mainview").close()
            }, e
        }(e.Service), t.exports = r
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var i, r, o = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, s = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)a.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, a = {}.hasOwnProperty, c = [].slice;
        r = n(51), i = function (t) {
            function e() {
                return this.customField = o(this.customField, this), this.metadata = o(this.metadata, this), this.shippingAddress = o(this.shippingAddress, this), this.billingAddress = o(this.billingAddress, this), this.currency = o(this.currency, this), this.start = o(this.start, this), this.get = o(this.get, this), e.__super__.constructor.apply(this, arguments)
            }

            return s(e, t), e.prototype.get = function () {
                var t;
                return t = this.inject("cart"), t ? t.toJSON() : null
            }, e.prototype.start = function () {
                var t;
                return t = r.defer(), this.inject("cartService").ensureCart().then(function (e) {
                    return t.resolve(e.toJSON())
                }), t.promise
            }, e.prototype.currency = function (t) {
                return t ? (Snipcart.ready ? this.inject("vent").trigger("set.currency", null != t && "function" == typeof t.toLowerCase ? t.toLowerCase() : void 0) : Snipcart.currency = t, t) : this.inject("currency")
            }, e.prototype.billingAddress = function (t) {
                var e;
                return e = r.defer(), this.start().then(function (n) {
                    return function () {
                        var i;
                        return i = n.inject("cart"), i.set("billingAddress", t), t.email && i.set("email", t.email), i.save().done(function () {
                            return e.resolve(i.toJSON())
                        }).fail(function () {
                            var t;
                            return t = 1 <= arguments.length ? c.call(arguments, 0) : [], e.reject.apply(e, t)
                        }), e.promise
                    }
                }(this))
            }, e.prototype.shippingAddress = function (t) {
                var e;
                return e = r.defer(), this.start().then(function (n) {
                    return function () {
                        var i;
                        return i = n.inject("cart"), i.set("shippingAddress", t), i.save().done(function () {
                            return e.resolve(i.toJSON())
                        }).fail(function () {
                            var t;
                            return t = 1 <= arguments.length ? c.call(arguments, 0) : [], e.reject.apply(e, t)
                        }), e.promise
                    }
                }(this))
            }, e.prototype.metadata = function (t) {
                var e;
                return e = r.defer(), this.start().then(function (n) {
                    return function () {
                        var i;
                        return i = n.inject("cart"), i.set("metadata", t), i.save().done(function () {
                            return e.resolve(i.toJSON())
                        }).fail(function () {
                            var t;
                            return t = 1 <= arguments.length ? c.call(arguments, 0) : [], e.reject.apply(e, t)
                        })
                    }
                }(this)), e.promise
            }, e.prototype.customField = function (t, e) {
                var n, i, o, s;
                return i = r.defer(), (n = this.inject("cart")) ? (s = n.get("customFields")) ? (o = s.findWhere({name: t})) ? (o.set("value", e), n.save().done(function (t) {
                    return function () {
                        return i.resolve(n.toJSON())
                    }
                }(this)).fail(function (t) {
                    return function () {
                        var t;
                        return t = 1 <= arguments.length ? c.call(arguments, 0) : [], i.reject.apply(i, t)
                    }
                }(this)), i.promise) : (this.inject("logger").log("There is no custom field having the name: " + t), i.reject("Custom field not found"), i.promise) : (this.inject("logger").log("Current cart does not have any custom fields."), i.reject("No custom fields"), i.promise) : (this.inject("logger").log("There is currently no cart in progress."), i.reject("No cart in progress"), i.promise)
            }, e
        }(e.Service), t.exports = i
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var n, i = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, r = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)o.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, o = {}.hasOwnProperty;
        n = function (t) {
            function e() {
                return this.current = i(this.current, this), e.__super__.constructor.apply(this, arguments)
            }

            return r(e, t), e.prototype.current = function () {
                var t;
                if (t = this.inject("user"), null != t)return t.toJSON()
            }, e
        }(e.Service), t.exports = n
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var i, r, o, s = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, a = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)c.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, c = {}.hasOwnProperty;
        i = n(231), o = n(51), t.exports = r = function (t) {
            function e() {
                return this.metadata = s(this.metadata, this), e.__super__.constructor.apply(this, arguments)
            }

            return a(e, t), e.prototype.metadata = function (t, e) {
                var n, r;
                return n = new i({userDefinedId: t}), r = o.defer(), e ? (n.set({metadata: e}), n.save().then(function (t) {
                    return function () {
                        return r.resolve(n.toJSON())
                    }
                }(this)).fail(function (t) {
                    return function (t) {
                        return r.reject(t)
                    }
                }(this))) : n.fetch().then(function (t) {
                    return function () {
                        return r.resolve(n.toJSON())
                    }
                }(this)).fail(function (t) {
                    return function (t) {
                        return r.reject(t)
                    }
                }(this)), r.promise
            }, e
        }(e.Service)
    }).call(e, n(2))
}, function (t, e, n) {
    (function (e) {
        var n, i = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, r = function (t, e) {
            function n() {
                this.constructor = t
            }

            for (var i in e)o.call(e, i) && (t[i] = e[i]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        }, o = {}.hasOwnProperty;
        t.exports = n = function (t) {
            function e() {
                return this.toJSON = i(this.toJSON, this), this.parse = i(this.parse, this), this.url = i(this.url, this), this.isNew = i(this.isNew, this), e.__super__.constructor.apply(this, arguments)
            }

            return r(e, t), e.prototype.idAttribute = "userDefinedId", e.prototype.isNew = function () {
                return !0
            }, e.prototype.url = function () {
                return "/api/products/" + this.id + "/metadata"
            }, e.prototype.parse = function (t) {
                return {metadata: t}
            }, e.prototype.toJSON = function () {
                return this.get("metadata")
            }, e
        }(e.Model)
    }).call(e, n(2))
}, function (t, e, n) {
    var i, r, o;
    !function (s) {
        r = [n(3), n(5)], i = s, o = "function" == typeof i ? i.apply(e, r) : i, !(void 0 !== o && (t.exports = o))
    }(function (t, e) {
        var n = t.Router.prototype.route, i = function () {
        };
        e.extend(t.Router.prototype, {
            before: i, after: i, route: function (t, r, o) {
                o || (o = this[r]);
                var s = e.bind(function () {
                    var n, r = [t, e.toArray(arguments)];
                    if (n = e.isFunction(this.before) ? this.before : "undefined" != typeof this.before[t] ? this.before[t] : i, n.apply(this, r) !== !1) {
                        o && o.apply(this, arguments);
                        var s;
                        s = e.isFunction(this.after) ? this.after : "undefined" != typeof this.after[t] ? this.after[t] : i, s.apply(this, r)
                    }
                }, this);
                return n.call(this, t, r, s)
            }
        })
    })
}, function (t, e) {
    Snipcart.execute("registerLocale", "en", {
        yes: "Yes",
        no: "No",
        print: "Print",
        download_as_pdf: "Download as PDF",
        checkout: "Checkout",
        close: "Close",
        first_name: "First name",
        name: "Name",
        last_name: "Last name",
        company_name: "Company name",
        share_by_email: "Share by email",
        email: "Email",
        password: "Password",
        confirm_password: "Confirm password",
        ok: "OK",
        send: "Send",
        address_1: "Street Address",
        address_2: "Street Address 2",
        city: "City",
        postal_code: "ZIP / Postal code",
        phone: "Phone",
        previous: "Previous step",
        next: "Next step",
        finalize: "Place Order",
        country: "Country",
        subtotal: "Subtotal",
        rebate: "Rebate",
        apply_promo_code: "Apply promo code",
        my_cart: "My cart",
        my_cart_content: "My cart's content",
        shipping_method: "Shipping method",
        payment_method: "Payment method",
        confirm_order: "Confirm order",
        bill_me_later: "Bill me later",
        bill_me_later_action: "Pay later",
        bill_me_later_explanation: "An invoice will be sent to you by email.",
        pay_via_mollie: "Choose payment method",
        pay_now_via_mollie: "Pay now",
        pay_via_mollie_explanation: "You'll be redirected to a list of available payment options.",
        promo_code_applied_successfully: "Your Discount has been applied successfully.",
        promo_code_is_invalid: "The promo code is invalid.",
        promo_code_code: "Have a Discount?",
        promo_code_rate_on_order: "discount on the order",
        promo_code_alternate_price: "special price on products",
        total: "Total",
        total_paid: "Total paid",
        province_state: "State / Province",
        billing_address: "Billing address",
        shipping_address: "Shipping address",
        payment_informations: "Payment information",
        payment_informations_bill_me_later: "I will pay later",
        payment_informations_no_payment_required: "No payment required",
        payment_informations_paypalexpress: "Payment with Paypal",
        credit_card_type_mastercard: "Mastercard",
        credit_card_type_visa: "Visa",
        credit_card_type_amex: "American Express",
        months_january: "January",
        months_february: "February",
        months_march: "March",
        months_april: "April",
        months_may: "May",
        months_june: "June",
        months_july: "July",
        months_august: "August",
        months_september: "September",
        months_october: "October",
        months_november: "November",
        months_december: "December",
        cart_items_table_item: "Item",
        cart_items_table_description: "Description",
        cart_items_table_quantity: "Quantity",
        cart_items_table_unit_price: "Unit Price",
        cart_items_table_total_price: "Total Price",
        cart_empty_text: "The cart is now empty. Select some products to buy before checking out.",
        new_account_form_create_new_account: "Create a login",
        new_account_form_create_new_account_action: "Create a login",
        login_form_having_an_account: "Sign in",
        login_form_login_action: "Log in",
        login_title: "Login",
        login_form_forgot_password_action: "I forgot my password",
        forgot_password_forgot_your_password: "Forgot your password?",
        forgot_password_please_enter_email: "Please enter your email, we will send you an email containing a unique link to reset your password.",
        forgot_password_success_email_sent: "Email sent",
        forgot_password_email_sent_message: "An email has been sent to you with instructions about how to reset your password. Go check the email and follow the steps.",
        login_checkout_as_guest: "Checkout as a guest",
        login_checkout_as_guest_notice: "Checkout as a guest if you don't want to create an account for this purchase. Please note that your information won't be saved for your next orders.",
        shipping_address_same_as_billing: "Use this address for shipping",
        shipping_method_method_name: "Shipping method",
        shipping_method_shipping_price: "Shipping price",
        shipping_method_failure_message: "We have not been able to find any possible shipping method. Please make sure your shipping address is correct and try again.",
        shipping_method_failure_click_here_to_edit: "Click here to edit your shipping address",
        payment_method_card_holder: "Name on card",
        payment_method_card_type: "Card type",
        payment_method_card_number: "Card number",
        payment_method_card_cvc: "CVC",
        payment_method_card_exp_month: "Expiration month / year",
        payment_method_card_exp_year: "Expiration year",
        payment_method_cvc_infos: "The CVC is the 3 digits security number behind your credit card, usually at the right of your signature.",
        payment_status: "Payment status",
        create_an_account: "Create a login",
        why_create_account: "For a faster checkout on your next order, just enter a password to create a login.",
        reset_password: "Reset password",
        reset_password_success: "Reset password completed",
        reset_password_changed: "Your passsword has been changed.",
        reset_password_click_here_to_login: "Click here to login",
        thankyou_message: "Thank you for your order! Your invoice has been sent to you by email, you should receive it soon.",
        thankyou_submessage: "You will receive a confirmation email soon",
        account_created_successfully: "Account created successfully",
        account_created_successfully_message: "Your account has been successfully created, thank you.",
        errors_required: "This field is required",
        errors_email_must_be_unique: "An user with the same email already exists",
        errors_both_password_must_match: "Both passwords must match",
        errors_email_must_be_valid: "The email must be valid",
        errors_email_does_not_match_any_existing_user: "No user with this email exists",
        errors_email_does_not_match_reset_password_request: "User email does not match any existing reset password request.",
        errors_reset_password_token_expired: "The reset password token has expired.",
        errors_invalid_authentication_infos: "Invalid authentication informations",
        error_payment_items_empty: "It seems that your order is invalid, please reload the page. Your credit card has not been charged.",
        error_payment_items_are_invalid: "We have not been able to complete your order. It seems that one of the items in your cart has an invalid price.",
        error_crawling_failed: "We have not been able to validate your order, your credit card has not been charged, please try again in a few moments.",
        error_discounts_have_expired: "Unfortunately one of the discount you had has expired before you completed the checkout process. Please review the order below and try again.",
        powered_by: "Powered and secured by",
        promocode_rate_format: "{0}% discount on your order",
        promocode_amount_format: "{0} discount on your order",
        shipping_method_business_days: "{0} business days",
        shipping_method_business_day: "{0} business day",
        shipping_method_delivery_time: "By {0}",
        welcome: "Welcome",
        back: "Back",
        order_infos: "Order infos",
        generic_error_title: "Oops, an error occured.",
        promocode_deleted_at_checkout: "The Discount you used has reached its usage limit while you were doing your checkout. Sorry for this inconvenience.",
        continue_shopping: "Continue shopping",
        payment_required_message: "The shopping cart for this website has been disabled. If you are the owner of this website, please login into Snipcart dashboard to resolve the issue.",
        payment_require_title: "The shopping cart is disabled.",
        configuration_problem: "Configuration problem",
        additionnal_information: "Enter a message below if you want to send feedback or more information about this problem.",
        send_error: "Send this error to website's owner",
        message_sent: "Message sent, thank you",
        paypalexpress_loading: "Just a few seconds...",
        paypalexpress_cancelled: "You cancelled the transaction, you can either click on the button below to try again or simply continue to shop.",
        retry: "Try again",
        error_crawlingfailed_title: "Something went wrong when validating your order, don't worry, you have not been charged.",
        error_crawling_unreachable: "Item <strong>{0}</strong> is unreachable at <strong>{1}</strong>. Make sure the product URL is publicly available.",
        error_crawling_product_not_found: "Item <strong>{0}</strong> has not been found at <strong>{1}</strong>.",
        error_crawling_price_not_found: "Item <strong>{0}</strong> does not have any specified price at <strong>{1}</strong>, specify it with data-item-price.",
        error_crawling_price_doesnot_match: "Item <strong>{0}</strong> price at <strong>{3}</strong> is <strong>{2}</strong> but should be <strong>{1}</strong>.",
        error_crawlingfailed_title_test: "Something went wrong when validating your order, don't worry, you have not been charged. This website is currently in Test mode.",
        order_completedon: "Placed on",
        payment_method_status: "Transaction status",
        payment_method_status_approved: "Approved",
        order_reference_number: "Reference number",
        order_transaction_amount: "Transaction amount",
        order_invoice_number: "Invoice number",
        order_authorization_code: "Authorization code",
        item_is_being_added: "Adding item to the cart...",
        order_completing_payment: "Placing order...",
        calculating_shipping_fees: "Getting shipping rates...",
        saving: "Saving...",
        loading: "Loading...",
        free_shipping: "Free shipping",
        cart_plans_name: "Plan",
        cart_plans_interval: "Interval",
        cart_plans_quantity: "Quantity",
        cart_plans_amount: "Amount",
        cart_plans_total: "Total",
        payable_now: "Payable now",
        upcoming_payment_for: "Subscription",
        upcoming_payment_date: "Date",
        upcoming_payment_amount: "Total",
        upcoming_payment_subtotal: "Subtotal",
        upcoming_payments: "Next payments",
        order_date: "Date",
        order_status: "Status",
        order_total: "Total",
        orders_history: "My orders",
        orders_history_no_orders: "You don't actually have any orders.",
        orders_fetching_orders: "Loading your orders...",
        user_nav_orders: "My orders",
        user_nav_subscriptions: "My subscriptions",
        user_nav_cart: "My cart",
        subscriptions_history: "My subscriptions",
        subscription_name: "Name",
        subscription_amount: "Amount",
        subscription_quantity: "Quantity",
        subscription_total_amount: "Total",
        subscriptions_fetching_subscriptions: "Loading subscriptions...",
        subscriptions_fetching_details: "Loading subscrition details...",
        subscription_no_invoices: "This subscription does not have any invoices yet.",
        subscription_plan_name: "Plan name",
        subscription_plan_interval: "Plan interval",
        subscription_invoice_number: "Number",
        subscription_invoice_date: "Date",
        subscription_invoice_amount: "Amount",
        subscription_invoice_item: "Item",
        subscription_invoice_info: "Invoice information",
        subscription_invoice_details: "Invoice details",
        subscription_invoice_fetching_details: "Loading invoice details...",
        subscription_invoices_loading: "Loading subscription invoices...",
        subscription_invoices_list: "Invoices history",
        item_out_of_stock: "We are sorry, this item is now out of stock.",
        click_here_to_remove_it: "Click here to remove it from your cart.",
        outofstock_notification: "We are sorry, some of the items in your cart went out of stock during your checkout. Please review your order. Don't worry, your card has not been charged.",
        plan_amount_per_day: "{0} / day",
        plan_amount_per_week: "{0} / week",
        plan_amount_per_month: "{0} / month",
        plan_amount_per_year: "{0} / year",
        plan_days_of_trial: "{0} days trial",
        subscription_cancel_button: "Cancel this subscription",
        subscription_cancel_confirmation: "Are you sure you want to cancel your subscription ?",
        subscription_cancel_success: "Your subscription has been cancelled successfully.",
        subscription_cancelled_notice: "This subscription is no longer active, it has been cancelled on {0}.",
        subscription_cancelledon: "Cancelled on",
        paypal_express_checkout_link: "Pay with Paypal",
        paypal_express_checkout_title: "Pay with PayPal",
        paypal_express_checkout_explanation: "Click on this button if you prefer to process your payment directly through PayPal.",
        notifications_item_not_added_due_to_max_quantity: "The product has not been added, you already have the maximum quantity in your cart.",
        error_impossible_to_calculate_taxes: "We have not been able to calculate taxes for the order, it might be due to an invalid address, please ensure you entered a valid address with a 5 digits ZIP code.",
        have_a_promocode_question: "Promo code?",
        order_totals_computing: "Calculating taxes...",
        order_validation_failed: "We have not been able to validate your order. Looks like some product prices might have changed since you added them to the cart. Please review your order and try again.",
        item_invalid_must_remove: "It looks like this item is not available anymore. You may need to contact the merchant to get this resolved as it may be a configuration problem. By continuing this item will be removed from your cart.",
        accept_cart_changes: "Accept changes and continue",
        payment_failed_text: "Sorry; we haven’t been able to process your payment. You can continue shopping or try again using the buttons below.",
        payment_method_willbepaidlater: "Deferred",
        payment_method_paypal: "Paypal",
        payment_method_none: "None",
        payment_method_sofort: "Sofort",
        payment_method_ideal: "Ideal",
        payment_method_mistercash: "Mister Cash",
        payment_method_banktransfer: "Bank transfer",
        payment_method_directdebit: "Direct debit",
        payment_method_belfius: "Belfius",
        payment_method_bitcoin: "Bitcoin",
        payment_method_podiumcadeaukaart: "Podium Cadeau Kaart",
        payment_method_paysafecard: "PaySafe card",
        payment_method_bancontact: "Bancontact",
        payment_method_creditcard: "Credit card"
    })
}]);