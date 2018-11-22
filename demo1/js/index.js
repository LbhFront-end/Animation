// 获取dom
var wrapper = $('#wrapper'),
start,
end,
direction,
time = 0,
temp = 0,
aniHeight = 1,
anitotalTime = 1,
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
// // 726 7s
var am7 = bodymovin.loadAnimation({
	container: document.getElementById('bm7'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	path: '../json/9/data.json'
})
// 设置高度
wrapper.css('height',height-1);
am1.addEventListener('data_ready', () => {
  	// 刷新滚动

  	jroll.refresh();
  	console.log('ready');
  });
am2.addEventListener('data_ready', () => {
  	// 刷新滚动	
  	jroll.refresh();
  	console.log('ready');


  });
am3.addEventListener('data_ready', () => {
  	// 刷新滚动
  	jroll.refresh();
  	console.log('ready');
  });
am4.addEventListener('data_ready', () => {
  	// 刷新滚动
  	jroll.refresh();
  	console.log('ready');
  });
am5.addEventListener('data_ready', () => {
  	// 刷新滚动
  	jroll.refresh();
  	console.log('ready');
  });
am6.addEventListener('data_ready', () => {
  	// 刷新滚动
  	jroll.refresh();
  	console.log('ready');
  });
am7.addEventListener('data_ready', () => {
  	// 刷新滚动
  	jroll.refresh();
  	console.log('ready');
  });

jroll.on('refresh',function(){
	jroll.scrollTo(0,this.maxScrollY);
});
// am1.setSpeed(0.1);

jroll.on("scroll", function () { 	
	time = -direction/aniHeight*anitotalTime;
	console.log(direction);
	console.log(this.y);
	// 第一个动画
	if(this.y < -4978 && this.y >= -5516){
		direction = start - this.y;
		anitotalTime = 350;
		aniHeight = 5516 - 4978;
		time= time + temp;
		am1.goToAndStop(time,true);
		console.log('动画1移动毫秒数：'+ time);
	}	
	// 第二个动画
	if(this.y < -4192 && this.y >= -4976){
		time = 0;
		start = 0;
		aniHeight = 4976 - 4192;
		anitotalTime = 140;		
		time= time + temp;
		am2.goToAndStop(time,true);
		console.log('动画2移动毫秒数：'+ time);
	}	
	// 第三个动画
	if(this.y < -3542 && this.y >= -3900){
		time = 0;
		start = 0;
		aniHeight = 3900 - 3542;
		time= time + temp;
		anitotalTime = 100;
		am3.goToAndStop(time,true);
		console.log('动画3移动毫秒数：'+ time);
	}	
	// 第四个动画
	if(this.y < -2584 && this.y >= -3200){
		time = 0;
		start = 0;
		aniHeight = 3200 - 2584;
		time= time + temp;
		am4.goToAndStop(time,true);
		console.log('动画4移动毫秒数：'+ time);
	}	
	// 第五个动画
	if(this.y < -1318 && this.y >= -2210){
		time = 0;
		start = 0;
		aniHeight = 2210 - 1318;
		time= time + temp;
		am5.goToAndStop(time,true);
		console.log('动画5移动毫秒数：'+ time);
	}	
	// 第六个动画
	if(this.y < -726 && this.y >= -990){
		time = 0;
		start = 0;
		aniHeight = 990 - 726;
		time= time + temp;
		am6.goToAndStop(time,true);
		console.log('动画6移动毫秒数：'+ time);
	}
	// 第七个动画
	if(this.y < 0 && this.y >= -240){
		time = 0;
		start = 0;
		aniHeight = 240 - 0;
		time= time + temp;
		am7.goToAndStop(time,true);
		console.log('动画7移动毫秒数：'+ time);
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