// 获取dom
var wrapper = $('#wrapper'),
start,
end,
direction,
time = 0,
temp = 0,
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
// 1204 12s+5s
var am1 = bodymovin.loadAnimation({
	container: document.getElementById('bm1'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: '../json/1-2/data.json'
})
// var am2 = bodymovin.loadAnimation({
// 	container: document.getElementById('bm2'),
// 	renderer: 'svg',
// 	loop: true,
// 	autoplay: false,
// 	path: '../json/3/data.json'
// })
// var am3 = bodymovin.loadAnimation({
// 	container: document.getElementById('bm3'),
// 	renderer: 'svg',
// 	loop: true,
// 	autoplay: false,
// 	path: '../json/4/data.json'
// })
// var am4 = bodymovin.loadAnimation({
// 	container: document.getElementById('bm4'),
// 	renderer: 'svg',
// 	loop: true,
// 	autoplay: false,
// 	path: '../json/5/data.json'
// })
// var am5 = bodymovin.loadAnimation({
// 	container: document.getElementById('bm5'),
// 	renderer: 'svg',
// 	loop: true,
// 	autoplay: false,
// 	path: '../json/6-7/data.json'
// })
// var am6 = bodymovin.loadAnimation({
// 	container: document.getElementById('bm6'),
// 	renderer: 'svg',
// 	loop: true,
// 	autoplay: false,
// 	path: '../json/8/data.json'
// })
// // 726 7s
// var am7 = bodymovin.loadAnimation({
// 	container: document.getElementById('bm7'),
// 	renderer: 'svg',
// 	loop: true,
// 	autoplay: false,
// 	path: '../json/9/data.json'
// })
// 设置高度
wrapper.css('height',height-1);
// 刷新滚动
jroll.refresh();
// am1.setSpeed(0.1);

jroll.on("scroll", function () { 
	direction = start - this.y;
	time = -direction/538*350;
	console.log(this.y);
	// 第一个动画
	if(this.y < 0 && this.y >= -538){
		time= time + temp;
		am1.goToAndStop(time,true);
		console.log('移动毫秒数：'+ time);
	}
	console.log('滑动距离:'+direction);
})
jroll.on("scrollStart",function(){
	temp = time>0?time:0;
	start = this.y;
	console.log('------------------');	
	console.log('滑动开始:'+ this.y);	
	console.log('temp开始时间:'+ temp);	
});	
jroll.on("scrollEnd",function(){
	end = this.y;
	temp = time>0?time:0;
	console.log('滑动结束:'+this.y);
	console.log('temp结束时间:'+temp);
	console.log('------------------');	
});


// jroll.on("scroll", function () { 
// 	if(this.y>=0 || -this.y<=265){
// 		animation1.goToAndStop(this.y*0.5, true);
// 	}else{
// 		animation1.pause();
// 	}
// })