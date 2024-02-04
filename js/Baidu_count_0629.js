var _hmt = _hmt || [];
(function() {
  isPc()
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?3619f12cb1398c4b0f1964848d310993";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

function isPc () {
	var origin = window.location.origin
	var href = window.location.href
	console.log('origin==',origin)
	if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		// 如果是移动端 则在域名后面添加/mobile
		// window.location.href = href.replace(origin, origin + '/mobile')
		// window.location.href = href.replace(origin, origin)
		// window.location.href = href.replace(origin, "http://localhost/wkids_pc/mobile/index.html")

	}
}