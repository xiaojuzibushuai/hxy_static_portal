function getValue(name){
    var str=window.location.search; 
	var pos_start=str.indexOf('?'+name+'=');
	if(pos_start<0){
		pos_start=str.indexOf('&'+name+'=');
	}
    if (pos_start>=0){
		pos_start = pos_start + name.length + 2;
        var pos_end = str.indexOf("&",pos_start);
		if(pos_end<0){
			pos_end=str.length;
		}
        return str.substring(pos_start,pos_end);
    }
}


Date.prototype.pattern = function(fmt) {
	var o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时 (12小时制)
		"H+": this.getHours(), //小时 (24小时制)
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds() //毫秒
	};
	var week = {
		"0": "/u65e5",
		"1": "/u4e00",
		"2": "/u4e8c",
		"3": "/u4e09",
		"4": "/u56db",
		"5": "/u4e94",
		"6": "/u516d"
	};
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	if (/(E+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[this.getDay() + ""]);
	}
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		}
	}
	return fmt;
}
window.addEventListener("scroll",function(){
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	if (scrollTop > 400) {
		$('.header').css({"background-color":"#333"})
	} else {
		$('.header').css({"background":"none"})
	}
})
