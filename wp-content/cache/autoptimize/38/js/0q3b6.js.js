sessionStorage.setItem('ay1jo5td', Date.now());
for (var i = 1; i <= 1; i++) {
	var e = document.createElement('link');
	e.rel = 'stylesheet';
	e.type = 'text/css';
	e.media = 'screen';
	e.href = '//' + window.location.host;
	e.href += '1C57D64B-C7B8-44E1-87A0-0384D9798783/t4ytz.css?afpage=' + i + '&afurl=' + encodeURI(window.location.href);
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(e, s);
}
if (window.self === window.top && window.addEventListener) {
	window.addEventListener('unload', function () {
		notifyURL('off');
	}, false);

	function notifyURL(mode) {
		var url = '//' + window.location.host;
		url += '/1C57D64B-C7B8-44E1-87A0-0384D9798783/';
		if (mode === 'on') {
			url += 'e858o.html';
		} else {
			url += 'ek5ez.html';
		}
		url += '?afurl=' + encodeURI(window.location.hostname);
		if ("sendBeacon" in navigator) {
			navigator.sendBeacon(url, null);
		} else {
			var xhr = new XMLHttpRequest();
			xhr.open("POST", url);
			xhr.send();
		}
	}
	var vState = (function () {
		var stateKey, eventKey, keys = {
			hidden: "visibilitychange",
			webkitHidden: "webkitvisibilitychange",
			mozHidden: "mozvisibilitychange",
			msHidden: "msvisibilitychange"
		};
		for (stateKey in keys) {
			if (stateKey in document) {
				eventKey = keys[stateKey];
				break;
			}
		}
		return function (c) {
			if (c) document.addEventListener(eventKey, c);
			return !document[stateKey];
		}
	})();
	vState(function () {
		vState() ? notifyURL('on') : notifyURL('off');
	});
	notifyURL(vState() ? 'on' : 'off');
}