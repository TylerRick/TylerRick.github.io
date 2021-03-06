(function (e, t) { // Copyright (c) 2011-2013 Felix Gnass
  'object' == typeof module && module.exports ? module.exports = t()  : 'function' == typeof define && define.amd ? define('_iub_spinner', function () {
    e.IubSpinner = t()
  })  : e.IubSpinner = t()
}) (this, function () {
  'use strict';
  function e(e, t) {
    var i,
    n = document.createElement(e || 'div');
    for (i in t) n[i] = t[i];
    return n
  }
  function t(e) {
    for (var t = 1, i = arguments.length; i > t; t++) e.appendChild(arguments[t]);
    return e
  }
  function i(e, t, i, n) {
    var r = [
      'opacity',
      t,
      ~~(100 * e),
      i,
      n
    ].join('-'),
    o = 0.01 + 100 * (i / n),
    a = Math.max(1 - (1 - e) / t * (100 - o), e),
    l = u.substring(0, u.indexOf('Animation')).toLowerCase(),
    s = l && '-' + l + '-' || '';
    return f[r] || (p.insertRule('@' + s + 'keyframes ' + r + '{' + '0%{opacity:' + a + '}' + o + '%{opacity:' + e + '}' + (o + 0.01) + '%{opacity:1}' + (o + t) % 100 + '%{opacity:' + e + '}' + '100%{opacity:' + a + '}' + '}', p.cssRules.length), f[r] = 1),
    r
  }
  function n(e, t) {
    var i,
    n,
    r = e.style;
    for (t = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < c.length; n++) if (i = c[n] + t, r[i] !== void 0) return i;
    return r[t] !== void 0 ? t : void 0
  }
  function r(e, t) {
    for (var i in t) e.style[n(e, i) || i] = t[i];
    return e
  }
  function o(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var n in i) e[n] === void 0 && (e[n] = i[n])
    }
    return e
  }
  function a(e) {
    for (var t = {
      x: e.offsetLeft,
      y: e.offsetTop
    }; e = e.offsetParent; ) t.x += e.offsetLeft,
    t.y += e.offsetTop;
    return t
  }
  function l(e, t) {
    return 'string' == typeof e ? e : e[t % e.length]
  }
  function s(e) {
    return 'undefined' == typeof this ? new s(e)  : (this.opts = o(e || {
    }, s.defaults, h), void 0)
  }
  function d() {
    function i(t, i) {
      return e('<' + t + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', i)
    }
    p.addRule('.spin-vml', 'behavior:url(#default#VML)'),
    s.prototype.lines = function (e, n) {
      function o() {
        return r(i('group', {
          coordsize: u + ' ' + u,
          coordorigin: - d + ' ' + - d
        }), {
          width: u,
          height: u
        })
      }
      function a(e, a, s) {
        t(f, t(r(o(), {
          rotation: 360 / n.lines * e + 'deg',
          left: ~~a
        }), t(r(i('roundrect', {
          arcsize: n.corners
        }), {
          width: d,
          height: n.width,
          left: n.radius,
          top: - n.width >> 1,
          filter: s
        }), i('fill', {
          color: l(n.color, e),
          opacity: n.opacity
        }), i('stroke', {
          opacity: 0
        }))))
      }
      var s,
      d = n.length + n.width,
      u = 2 * d,
      c = - (n.width + n.length) * 2 + 'px',
      f = r(o(), {
        position: 'absolute',
        top: c,
        left: c
      });
      if (n.shadow) for (s = 1; s <= n.lines; s++) a(s, - 2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)');
      for (s = 1; s <= n.lines; s++) a(s);
      return t(e, f)
    },
    s.prototype.opacity = function (e, t, i, n) {
      var r = e.firstChild;
      n = n.shadow && n.lines || 0,
      r && t + n < r.childNodes.length && (r = r.childNodes[t + n], r = r && r.firstChild, r = r && r.firstChild, r && (r.opacity = i))
    }
  }
  var u,
  c = [
    'webkit',
    'Moz',
    'ms',
    'O'
  ],
  f = {
  },
  p = function () {
    var i = e('style', {
      type: 'text/css'
    });
    return t(document.getElementsByTagName('head') [0], i),
    i.sheet || i.styleSheet
  }(),
  h = {
    lines: 12,
    length: 7,
    width: 5,
    radius: 10,
    rotate: 0,
    corners: 1,
    color: '#000',
    direction: 1,
    speed: 1,
    trail: 100,
    opacity: 0.25,
    fps: 20,
    zIndex: 2000000000,
    className: 'spinner',
    top: 'auto',
    left: 'auto',
    position: 'relative'
  };
  s.defaults = {
  },
  o(s.prototype, {
    spin: function (t) {
      this.stop();
      var i,
      n,
      o = this,
      l = o.opts,
      s = o.el = r(e(0, {
        className: l.className
      }), {
        position: l.position,
        width: 0,
        zIndex: l.zIndex
      }),
      d = l.radius + l.length + l.width;
      if (t && (t.insertBefore(s, t.firstChild || null), n = a(t), i = a(s), r(s, {
        left: (l.left == 'auto' ? n.x - i.x + (t.offsetWidth >> 1)  : parseInt(l.left, 10) + d) + 'px',
        top: (l.top == 'auto' ? n.y - i.y + (t.offsetHeight >> 1)  : parseInt(l.top, 10) + d) + 'px'
      })), s.setAttribute('role', 'progressbar'), o.lines(s, o.opts), !u) {
        var c,
        f = 0,
        p = (l.lines - 1) * (1 - l.direction) / 2,
        h = l.fps,
        b = h / l.speed,
        g = (1 - l.opacity) / (b * l.trail / 100),
        m = b / l.lines;
        (function y() {
          f++;
          for (var e = 0; e < l.lines; e++) c = Math.max(1 - (f + (l.lines - e) * m) % b * g, l.opacity),
          o.opacity(s, e * l.direction + p, c, l);
          o.timeout = o.el && setTimeout(y, ~~(1000 / h))
        }) ()
      }
      return o
    },
    stop: function () {
      var e = this.el;
      return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = void 0),
      this
    },
    lines: function (n, o) {
      function a(t, i) {
        return r(e(), {
          position: 'absolute',
          width: o.length + o.width + 'px',
          height: o.width + 'px',
          background: t,
          boxShadow: i,
          transformOrigin: 'left',
          transform: 'rotate(' + ~~(360 / o.lines * d + o.rotate) + 'deg) translate(' + o.radius + 'px' + ',0)',
          borderRadius: (o.corners * o.width >> 1) + 'px'
        })
      }
      for (var s, d = 0, c = (o.lines - 1) * (1 - o.direction) / 2; d < o.lines; d++) s = r(e(), {
        position: 'absolute',
        top: 1 + ~(o.width / 2) + 'px',
        transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
        opacity: o.opacity,
        animation: u && i(o.opacity, o.trail, c + d * o.direction, o.lines) + ' ' + 1 / o.speed + 's linear infinite'
      }),
      o.shadow && t(s, r(a('#000', '0 0 4px #000'), {
        top: '2px'
      })),
      t(n, t(s, a(l(o.color, d), '0 0 1px rgba(0,0,0,.1)')));
      return n
    },
    opacity: function (e, t, i) {
      t < e.childNodes.length && (e.childNodes[t].style.opacity = i)
    }
  });
  var b = r(e('group'), {
    behavior: 'url(#default#VML)'
  });
  return !n(b, 'transform') && b.adj ? d()  : u = n(b, 'animation'),
  s
}),
function () {
  typeof String.prototype.trim != 'function' && (String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, '')
  })
}();
var _iub = _iub || [
];
_iub.badges = _iub.badges || [
],
_iub.embedBs = _iub.embedBs || [
],
function (e, t) {
  function i() {
    return I
  }
  function n() {
    var e = x('iubenda-embed', t);
    if (e.length == 0) {
      var i = t.getElementById('iubenda-embed');
      i && r(i)
    } else for (var n = 0; n < e.length; n++) {
      var o = e[n],
      a = {
        ppId: A(o.getAttribute('href')),
        isLegal: k(o)
      };
      m(o.className.split(' '), 'iub-body-embed') != - 1 ? B({
        linkA: o,
        embedB: !0
      }) || (a.index = Math.floor(Math.random() * 10000000000), a.linkA = r(o, a.index), _iub.embedBs.push(a))  : B({
        linkA: o
      }) || (a.linkA = r(o), _iub.badges.push(a))
    }
  }
  function r(e, t) {
    var i = e,
    n = !1,
    r = !1,
    d = !1,
    u = !1,
    c = !1,
    f = !1,
    p = 'iubenda-white',
    h = e.getAttribute('href').split('?') [0],
    g = A(h),
    x = '//',
    N = parseInt(e.getAttribute('data-iub-z-index')) || null,
    k = e.getAttribute('data-iub-overflow') || 'html',
    B = e.className.split(' ');
    v(B, 'no-brand') && (n = !0),
    v(B, 'skip-track') && (r = !0),
    v(B, 'iub-body-embed') && (d = !0),
    v(B, 'iub-legal-only') && (u = !0),
    v(B, 'iub-anchor') && (c = !0),
    v(B, 'iub-no-markup') && (f = !0),
    h.indexOf('http://') != - 1 ? x = 'http://' : h.indexOf('https://') != - 1 && (x = 'https://');
    var C = w(E, x),
    I = w(L, x),
    T = w(S, x),
    O = w(M, x);
    if (m(B, 'iubenda-no-icon') != - 1 ? p = 'iubenda-nostyle' : (p = y(['iubenda-green',
    'iubenda-green-m',
    'iubenda-green-s',
    'iubenda-green-xs',
    'iubenda-lowgray',
    'iubenda-lowgray-m',
    'iubenda-lowgray-s',
    'iubenda-lowgray-xs',
    'iubenda-midgray',
    'iubenda-midgray-m',
    'iubenda-midgray-s',
    'iubenda-midgray-xs',
    'iubenda-darkgray',
    'iubenda-darkgray-m',
    'iubenda-darkgray-s',
    'iubenda-darkgray-xs',
    'iubenda-white',
    'iubenda-black',
    'iubenda-nostyle'], B), - 1 == p && (p = 'iubenda-white')), 'iubenda-nostyle' != p && (e.style.outline = '0px', e.style.border = '0px', e.style.textDecoration = 'none', e.style.display = 'inline-block', e.style.background = 'none'), d) i = s(e, O, u, f, x, t);
     else if (m(['iubenda-white',
    'iubenda-black'], p) != - 1) i = l(e, p, null, null, g, n, C, I, T, r, u, c, x, N, k);
     else {
      if (u && (e.href = e.href + '/full-legal'), 'iubenda-nostyle' != p) {
        var j = 116,
        P = 25,
        z = '.gif';
        (p.indexOf('-m') != - 1 && p.indexOf('-mid') == - 1 || p.indexOf('midgray-m') != - 1) && (j = 81, P = 21),
        (p.indexOf('-s') != - 1 || p.indexOf('-xs') != - 1) && (j = 82, P = 17, z = '.png'),
        e.style.width = j + 'px',
        e.style.height = P + 'px',
        p += z,
        o(e, C + p, j, P)
      }
      b(I, e, {
        onLoadCallB: function () {
          var t = _(C, e.href);
          _iub.ifr.iubendaStartBadge({
            linkA: e,
            embedP: '',
            iFrUrl: e.href,
            cdnBaseUrl: t,
            useProtocol: x,
            zIndex: N,
            overflow: k
          })
        }
      }),
      r || a(e, g),
      i = e
    }
    return 'undefined' != typeof editLinkA && null != editLinkA && (editLinkA = null),
    i
  }
  function o(e, t, i, n) {
    p(e.id, t, 100, i, n)
  }
  function a() {
  }
  function l(e, i, n, r, o, l, s, d, u, c, p, h, b, g, m) {
    e.style.display = 'none';
    var s = _(s, e.href),
    y = e.innerHTML.trim() || 'Privacy Policy',
    v = e.getAttribute('title') || 'Privacy Policy',
    b = b || '//',
    x = C(y, l),
    N = r || 22,
    A = e.title || 'iubenda badge',
    k = t.createElement('IFRAME'),
    B = h ? 'iubenda-ibadge iubenda-iframe-anchor' : 'iubenda-ibadge';
    k.setAttribute('class', B),
    k.setAttribute('scrolling', 'no'),
    k.setAttribute('frameBorder', '0'),
    k.setAttribute('allowtransparency', 'true');
    var I = 'width:' + x + 'px; height:' + N + 'px;';
    h && (I += ' z-index:9998; position:fixed; bottom:0px; right:0px;'),
    f(k, I),
    k.setAttribute('title', v),
    e.parentNode.insertBefore(k, e.nextSibling),
    e.parentNode.removeChild(e);
    var iframeContentWindow = k.contentWindow
    var E = k.contentWindow.document;
    var iframeDoc = E
    E.open(),
    E.write();
    var L = e.href.split('?') [0];
    L = p ? L + '/full-legal' : L,
    L = w(L, b);
    var S = null
    /*
     * Expected result:
    <body onload="try{_iub.ifr.iubendaStartBadge({useProtocol:'https://',zIndex:'null',overflow:'html',cdnBaseUrl:'https://cdn.iubenda.com/'});}catch(exc){console.log('IUBENDA: error while loading [iubendaStartBadge]. Please contact info@iubenda.com for support and troubleshooting.')}">
      <a href="https://www.iubenda.com/privacy-policy/8207462" class="iubenda-white  " id="i_badge-link" title="Privacy Policy " target="_parent">Privacy Policy</a>
    </body>
    */
    var onload = ''//'onload="console.log(1); try{_iub.ifr.iubendaStartBadge({' + (S ? 'iFrUrl:\'' + S + '\',' : '') + 'useProtocol:\'' + b + '\',zIndex:\'' + g + '\',overflow:\'' + m + '\',cdnBaseUrl:\'' + s + '\'});}catch(exc){console.log(\'IUBENDA: error while loading [iubendaStartBadge]. Please contact info@iubenda.com for support and troubleshooting.\')}"'
    var M = '<html><head><title>' + A + '</title><meta name="viewport" content="width=device-width"><link type="text/css" rel="stylesheet" href="' + u + '" media="screen" />' + '</head>' +
      '<body ' + onload + '><a href="' + L + '" class="' + i + ' ' + (l ? 'no-brand' : '') + ' ' + (h ? 'iub-anchor' : '') + '" id="i_badge-link" title="' + v + '" target="_parent" >' + y + '</a></body></html>';

    E.write(M)
    var head = E.querySelector('head')
    var body = E.querySelector('body')
    console.log(head)
    console.log(body)

    var s = E.createElement("script")
    s.nonce = 'tqJ6pL/B6gcmPW5YwDvkTA=='
    s.src = d
    head.appendChild(s);

    var loader = function () {
      console.log('iframe loaded')
      try{
        iframeContentWindow._iub.ifr.iubendaStartBadge({useProtocol:'https://',zIndex:'null',overflow:'html',cdnBaseUrl:'https://cdn.iubenda.com/'});
      }catch(exc){console.log('IUBENDA: error while loading [iubendaStartBadge]. Please contact info@iubenda.com for support and troubleshooting.')}
    }
    if(iframeContentWindow.addEventListener){iframeContentWindow.addEventListener("load", loader);}else if(iframeContentWindow.attachEvent){iframeContentWindow.attachEvent("onload", loader);}else{iframeContentWindow.onload = loader;}

    return null,
    E.close(),
    c || a(k, o),
    k
  }
  function s(e, t, i, n, r, o) {
    var r = r || '//';
    n || d(t);
    var a = e.href.split('?') [0],
    l = a + (n ? '/embed-no-markup.json' : i ? '/embed-legal.json' : '/embed.json') + '?i=' + o;
    if (l = w(l, r), 'undefined' != typeof IubSpinner) {
      var s = {
        lines: 8,
        length: 2,
        width: 2,
        radius: 2,
        color: '#696969',
        speed: 1.2,
        trail: 60,
        shadow: !1
      },
      u = new IubSpinner(s).spin();
      u.el.className = '_iub-pp-loading-alert',
      f(u.el, 'position:relative; display:inline-block; padding: 6px;'),
      e.parentNode.insertBefore(u.el, e)
    }
    return e.style.display = 'none',
    b(l, e, {
      tries: 1
    }),
    e
  }
  function d(e) {
    var i = t.createElement('link');
    i.type = 'text/css',
    i.rel = 'stylesheet',
    i.href = e,
    t.getElementsByTagName('head') [0].appendChild(i)
  }
  function u(e) {
    try {
      var i = null;
      if (e.i && e.i != null ? (i = B({
        index: parseInt(e.i),
        embedB: !0,
        inDom: !0
      }), i || (i = B({
        ppId: parseInt(e.pp_id),
        isLegal: e.is_legal,
        embedB: !0,
        inDom: !0
      })))  : i = B({
        ppId: parseInt(e.pp_id),
        isLegal: e.is_legal,
        embedB: !0,
        inDom: !0
      }), i && i.linkA) {
        var n = i.linkA,
        r = t.createElement('div');
        r.setAttribute('id', 'iub-pp-container'),
        r.innerHTML = e.content,
        n.parentNode.insertBefore(r, n.nextSibling);
        var o = n.previousSibling;
        o.className == '_iub-pp-loading-alert' && o.parentNode.removeChild(o),
        n.parentNode.removeChild(n),
        c(r)
      }
    } catch (a) {
      console.log('IUBENDA: Error while loading [ ' + a.message + ' ]. Please contact info@iubenda.com for support and troubleshooting.')
    }
  }
  function c(e) {
    function i(e, t) {
      return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
    }
    function n(e) {
      var i = e.text || e.textContent || e.innerHTML || '',
      n = t.getElementsByTagName('head') [0] || t.documentElement,
      r = t.createElement('script');
      r.type = 'text/javascript';
      try {
        r.appendChild(t.createTextNode(i))
      } catch (o) {
        r.text = i
      }
      n.insertBefore(r, n.firstChild),
      n.removeChild(r)
    }
    function r(e, t, i) {
      var n = i + 1;
      if (n <= Math.max(1, d)) {
        t.push(e);
        for (var o = e.childNodes, a = 0; a < o.length; a++) o[a].nodeType == 1 && r(o[a], t, n)
      }
    }
    for (var o, a, l = [
    ], s = [
    ], d = 8, u = e.childNodes, c = 0; c < u.length; c++) u[c].nodeType == 1 && r(u[c], s, 1);
    for (var c = 0; s[c]; c++) a = s[c],
    !i(a, 'script') || a.type && a.type.toLowerCase() !== 'text/javascript' || l.push(a);
    for (var c = 0; l[c]; c++) o = l[c],
    o.parentNode && o.parentNode.removeChild(o),
    n(l[c])
  }
  function f(e, t) {
    var i = h();
    - 1 != i && 8 > i ? e.style.cssText = t : e.setAttribute('style', t)
  }
  function p(e, i, n, r, o) {
    if (!(0 >= n)) {
      var a = t.getElementById(e),
      l = t.createElement('img');
      l.src = i,
      l.style.width = r + 'px',
      l.style.height = o + 'px',
      l.style.border = '0px',
      a && l.width ? (l.alt = a.firstChild.nodeValue, l.title = a.firstChild.nodeValue, a.replaceChild(l, a.firstChild))  : setTimeout('_iub.imageFastReplace(\'' + e + '\',\'' + i + '\',' + --n + ',' + r + ',' + o + ');', 150)
    }
  }
  function h() {
    var e = - 1;
    if (navigator.appName == 'Microsoft Internet Explorer') {
      var t = navigator.userAgent,
      i = new RegExp('MSIE ([0-9]{1,}[.0-9]{0,})');
      i.exec(t) != null && (e = parseFloat(RegExp.$1))
    }
    return e
  }
  function b(e, i, n) {
    var n = n || {
    },
    r = e,
    o = i,
    a = n.onLoadCallB,
    l = n.tries,
    s = t.createElement('script');
    s.setAttribute('type', 'text/javascript'),
    s.setAttribute('src', e),
    i.parentNode.insertBefore(s, i.nextSibling),
    'function' == typeof a && g(s, a),
    s.onerror = function () {
      l > 0 && b(N(r, 't', l), o, {
        onLoadCallB: a,
        tries: l - 1
      })
    }
  }
  function g(e, t) {
    var i = h();
    - 1 != i && 9 > i ? e.onreadystatechange = function () {
      (this.readyState == 'loaded' || this.readyState == 'complete') && t()
    }
     : e.onload = function () {
      t()
    }
  }
  function m(e, t) {
    var i = Object(e),
    n = i.length >>> 0;
    if (0 === n) return - 1;
    var r = 0;
    if (arguments.length > 0 && (r = Number(arguments[1]), r !== r ? r = 0 : 0 !== r && r !== 1 / 0 && r !== - (1 / 0) && (r = (r > 0 || - 1) * Math.floor(Math.abs(r)))), r >= n) return - 1;
    for (var o = r >= 0 ? r : Math.max(n - Math.abs(r), 0); n > o; o++) if (o in i && i[o] === t) return o;
    return - 1
  }
  function y(e, t) {
    var i = Object(e),
    n = i.length >>> 0;
    if (0 === n) return - 1;
    for (var r = 0; r < t.length; r++) if (m(i, t[r]) != - 1) return t[r];
    return - 1
  }
  function v(e, t) {
    return m(e, t) != - 1 ? (e.splice(m(e, t), 1), !0)  : !1
  }
  function x(e, i) {
    i || (i = t.getElementsByTagName('body') [0]);
    for (var n = [
    ], r = new RegExp('\\b' + e + '\\b'), o = i.getElementsByTagName('*'), a = 0, l = o.length; l > a; a++) r.test(o[a].className) && n.push(o[a]);
    return n
  }
  function w(e, t) {
    var i = e.indexOf('//') != - 1 ? e.split('//') [1] : e;
    return t.concat(i)
  }
  function N(e, t, i) {
    if (i) {
      var n = e.split('#') [0],
      r = e.split('#') [1];
      return n += (n.indexOf('?') != - 1 ? '&' : '?') + t + '=' + i,
      r ? n + '#' + r : n
    }
    return e
  }
  function A(e) {
    for (var t = e.split('/'), i = t.length - 1; i > - 1; i--) if (!isNaN(parseInt(t[i]))) return parseInt(t[i]);
    return null
  }
  function k(e) {
    return e.getAttribute('href').indexOf('/legal') != - 1 || e.getAttribute('href').indexOf('/full-legal') != - 1 || m(e.className.split(' '), 'iub-legal-only') != - 1 || m(e.className.split(' '), 'iub-no-markup') != - 1
  }
  function B(e) {
    for (var e = e || {
    }, i = e.embedB ? _iub.embedBs : _iub.badges, n = e.inDom == 1, r = 0; r < i.length; r++) if (e.index) {
      if (i[r].index == e.index && (!n || t.body.contains(i[r].linkA))) return i[r]
    } else if (e.linkA) {
      if (i[r].linkA == e.linkA && (!n || t.body.contains(i[r].linkA))) return i[r]
    } else if (i[r].ppId == e.ppId && i[r].isLegal === e.isLegal && (!n || t.body.contains(i[r].linkA))) return i[r];
    return null
  }
  function _(e, t) {
    var i,
    n = [
      '/privacy-policy',
      '/terms-and-conditions'
    ];
    if (e) return e;
    for (var r = 0, o = n.length; o > r; r++) if (i = n[r], t.indexOf(i) > - 1) return t.split(i) [0] + '/cdn/'
  }
  function C(e, i) {
    var n = t.createElement('div');
    n.style.fontSize = '11px',
    n.style.fontWeight = 'bold',
    n.style.height = 'auto',
    n.style.width = 'auto',
    n.style.position = 'absolute',
    n.style.fontFamily = 'Helvetica,Arial,FreeSans,sans-serif',
    n.style.visibility = 'hidden',
    n.innerHTML = e,
    t.body.appendChild(n);
    var r = n.clientWidth + 40;
    return i && (r -= 18),
    t.body.removeChild(n),
    r
  }
  var I = '1.2.0',
  E = 'https://cdn.iubenda.com/',
  L = 'https://cdn.iubenda.com/iubenda_i_badge.js',
  S = 'https://cdn.iubenda.com/iubenda_i_badge.css',
  M = 'https://www.iubenda.com/assets/privacy_policy.css';
  (function () {
    try {
      n()
    } catch (e) {
      console.log('IUBENDA: Error while loading [ ' + e.message + ' ]. Please contact info@iubenda.com for support and troubleshooting.')
    }
  }) (),
  e._iub.setStyle = function (e, t) {
    f(e, t)
  },
  e._iub.onLoadCall = function (e, t) {
    g(e, t)
  },
  e._iub.imageFastReplace = function (e, t, i, n, r) {
    p(e, t, i, n, r)
  },
  e._iub.getElementsByClassName = function (e, t) {
    return x(e, t)
  },
  e._iub.loadPPContent = function (e) {
    u(e)
  },
  e._iub.version = function () {
    return i()
  }
}(window, document);
