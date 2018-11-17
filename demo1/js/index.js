// 获取dom
var wrapper = $('#wrapper'),
bmTotalHeightTag = $('.totalHeight');
height = $(window).height(),
bmTotalHeight = $('.bm').height();

// 设置滚动
var jroll = new JRoll('#wrapper',{
	id: "scroll",
	scrollBarY: true,
	momentum: true,
	bounce: false
});
var am1 = bodymovin.loadAnimation({
	container: document.getElementById('bm1'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: '../json/1-2/data.json'
})
var am2 = bodymovin.loadAnimation({
	container: document.getElementById('bm2'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	path: '../json/3/data.json'
})
var am3 = bodymovin.loadAnimation({
	container: document.getElementById('bm3'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	path: '../json/4/data.json'
})
var am4 = bodymovin.loadAnimation({
	container: document.getElementById('bm4'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	path: '../json/5/data.json'
})
var am5 = bodymovin.loadAnimation({
	container: document.getElementById('bm5'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	path: '../json/6-7/data.json'
})
var am6 = bodymovin.loadAnimation({
	container: document.getElementById('bm6'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	path: '../json/8/data.json'
})
var am7 = bodymovin.loadAnimation({
	container: document.getElementById('bm7'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	path: '../json/9/data.json'
})
// 设置高度
wrapper.css('height',height-1);
// 刷新滚动
jroll.refresh();
// jroll.on("scroll", updata);
jroll.on("scroll", function () { 
	console.log(this.y);
})
jroll.on("scrollStart",function(){
	console.log('滑动开始:'+this.y);
});	
jroll.on("scrollEnd",function(){
	console.log('滑动结束:'+this.y);
});