define("util/ob", ["jquery"], function(a) {
    var b = this
      , c = 0
      , d = 1
      , e = 2
      , f = 3
      , g = ""
      , h = " "
      , i = '"'
      , j = "#"
      , k = "*"
      , l = ","
      , m = "-"
      , n = "/"
      , o = "1"
      , p = "3"
      , q = "5"
      , r = ":"
      , s = "="
      , t = "A"
      , u = "D"
      , v = "F"
      , w = "G"
      , x = "I"
      , y = "J"
      , z = "M"
      , A = "N"
      , B = "O"
      , C = "P"
      , D = "S"
      , E = "T"
      , F = "U"
      , G = "["
      , H = "]"
      , I = "^"
      , J = "_"
      , K = "a"
      , L = "b"
      , M = "c"
      , N = "d"
      , O = "e"
      , P = "f"
      , Q = "g"
      , R = "h"
      , S = "i"
      , T = "j"
      , U = "k"
      , V = "l"
      , W = "m"
      , X = "n"
      , Y = "o"
      , Z = "p"
      , $ = "q"
      , _ = "r"
      , aa = "s"
      , ba = "t"
      , ca = "u"
      , da = "v"
      , ea = "w"
      , fa = "x"
      , ga = "y"
      , ha = "|"
      , ia = 1001
      , ja = 1002
      , ka = 4001
      , la = 7001
      , ma = 7002
      , na = 8001
      , oa = 8002
      , pa = 9001
      , qa = 9002
      , ra = 9003
      , sa = 9004
      , ta = 9005
      , ua = 511
      , va = 3011
      , wa = 5011
      , xa = 10111
      , ya = 20011
      , za = 50101
      , Aa = 60101
      , Ba = "makeArray"
      , Ca = "join"
      , Da = function() {
        return a.makeArray(arguments).join("")
    }
      , Ea = "length"
      , Fa = {};
    Fa["contentType"] = "application/json",
    Fa["dataType"] = "json",
    Fa["type"] = "POST";
    var Ga = function(d, e) {
        d = d || g,
        e = e || {},
        e["u"] = b["Game"]["userId"];
        var f = e["g"] !== 0 ? "gc/gc" : "ob/1";
        Fa["data"] = JSON.stringify(e),
        Fa["url"] = b["Game"]["baseUri"] + f,
        a.ajax(Fa)
    }
      , Ia = {}
      , Ja = 0
      , Ka = function(a) {
        if (Ia[a] = (Ia[a] || c) + d,
        !Ja) {
            Ja = d;
            var b = va
              , g = {};
            g["c"] = Ia,
            g["g"] = c,
            a === ja && Oa.length > c && (g[Da(Q)] = Oa,
            Na === e && (b = c),
            Na === f && (b = c)),
            setTimeout(function() {
                Ga("r", g),
                Ja = c
            }, b)
        }
    }
      , La = function(b, selector, eventName, callBack) {
        var f = a(selector)
          , g = function(evt) {
            callBack(evt) && (f["off"](eventName, g),
            Ka(b))
        }
        ;
        f["on"](eventName, g)
    }
      , Ma = function(a, b, c, d) {
        var e = function() {
            d() ? Ka(a) : (a !== ka && (b += c),
            setTimeout(e, b))
        }
        ;
        setTimeout(e, b)
    }
    ;
    //1001 点击事件检测
    !function() {
        var a = "type"
          , e = "tap"
          , f = "x"
          , g = "y"
          , k = 0
          , l = Date.now();
        La(ia, "#wrapper", "mousedown mouseup touchstart touchend tap", function(evtObj) {
            return evtObj.type === e ? k = (evtObj.x || evtObj.y) && Date.now() - l < 5011 ? 0 : k + 1 : l = Date.now(),
            k > 3
        })
    }();
    var Na = c
      , Oa = [];
    !function() {
        var b = "type"
          , c = "tap"
          , g = "x"
          , i = "y"
          , k = "target"
          , l = "className"
          , n = 10104
          , o = 20206
          , p = a("#wrapper")
          , q = "mousedown mouseup touchstart touchend tap"
          , r = function(a) {
            var h = a["target"]["className"];
            a["type"] === "tap" && h.match("btn-attack-start|sfunction (e,b3){return new bI.fn.init(e,b3,w)}-qufunction (e,b3){return new bI.fn.init(e,b3,w)}st-start|btn-function (e,b3){return new bI.fn.init(e,b3,w)}xfunction (e,b3){return new bI.fn.init(e,b3,w)}cutfunction (e,b3){return new bI.fn.init(e,b3,w)}-rfunction (e,b3){return new bI.fn.init(e,b3,w)}ady") 
            && (Na = h.match("btn-attack-start") ? 1 : h.match("sfunction (e,b3){return new bI.fn.init(e,b3,w)}-qufunction (e,b3){return new bI.fn.init(e,b3,w)}st-start") ? 2 : 3,
            Oa = [Na, n + a[g], o + a[i]],
            Ka(ja))
        }
        ;
        p["on"](q, r)
    }(),
    function() {
        var a = "createjs"
          , c = "Ticker"
          , d = "getFPS"
          , e = "35";
        Ma(la, wa, xa, function() {
            return b[a] && b[a][c] && b[a][c][d] && b[a][c][d]() > e
        });
        var f = "getInterval"
          , g = "setInterval";
        Ma(ma, wa, xa, function() {
            if (b[a] && b[a][c] && b[a][c][d] && b[a][c][f] && b[a][c][g]) {
                var e = b[a][c][d]()
                  , h = b[a][c][f]();
                b[a][c][g](h + 100);
                var i = !1;
                return b[a][c][d]() == e && (i = !0),
                b[a][c][g](h),
                i
            }
        })
    }(),
    //维拉
    function() {
        var b = 'script[src^="chrome-extension://fgpokpknehglcioijejfeebigdnbnokj"],link[href^="chrome-extension://fgpokpknehglcioijejfeebigdnbnokj"]';
        Ma(na, xa, Aa, function() {
            return a(b)[Ea]
        })
    }(),
    function() {
        var b = "[id^=mkt_],[class^=mkt_]";
        Ma(oa, xa, Aa, function() {
            return a(b)[Ea]
        })
    }(),
    function() {
        var b = "[id^=gbfTool]";
        Ma(pa, wa, ya, function() {
            return a(b)[Ea]
        })
    }(),
    function() {
        var b = "script[id^=gfe_]";
        Ma(qa, za, Aa, function() {
            return a(b)[Ea]
        })
    }(),
    function() {
        var b = "[id^=guraburu]";
        Ma(ra, wa, ya, function() {
            return a(b)[Ea]
        })
    }(),
    function() {
        var b = "script[id^=tke_]";
        Ma(sa, za, Aa, function() {
            return a(b)[Ea]
        })
    }(),
    function() {
        var b = "input[id*=boss_mode_1]";
        Ma(ta, wa, ya, function() {
            return a(b)[Ea]
        })
    }(),
    function() {
        var b = "input[id*=temporary_small]";
        Ma(ta, wa, ya, function() {
            return a(b)[Ea]
        })
    }(),
    function() {
        var a = (Math.floor,
        Math.random,
        window.location.hash.split("/")[0]);
        Ma(ka, ua, c, function() {
            return a !== Da(N, O, L, ca, Q)
        })
    }()
});