// 获取dom
var wrapper = $('#wrapper'),
start,
end,
direction,
time = 0,
temp = 0,
aniHeight = 1,
anTotalTime = 1,
height = $(window).height();

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
wrapper.css('height',height);
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
// am4.addEventListener('data_ready', () => {
//   	// 刷新滚动
//   	jroll.refresh();
//   	console.log('ready');
//   });
// am5.addEventListener('data_ready', () => {
//   	// 刷新滚动
//   	jroll.refresh();
//   	console.log('ready');
//   });
// am6.addEventListener('data_ready', () => {
//   	// 刷新滚动
//   	jroll.refresh();
//   	console.log('ready');
//   });
// am7.addEventListener('data_ready', () => {
//   	// 刷新滚动
//   	jroll.refresh();
//   	console.log('ready');
//   });

jroll.on('refresh',function(){
	jroll.scrollTo(0,this.maxScrollY);
});


jroll.on("scroll", function () { 		
	//3x time = -direction/126*80; 
	//4 time = -direction/291*180; 
	//5 time = -direction/603*300; 
	//6x time = -direction/291*180;  
	// 第一个动画
	if(this.y < -1436 && this.y >= -1974){	
		var startTemp = start;	
		direction = start - this.y;
		if(direction){
			direction = start > -1436 ? -1436 -this.y : startTemp - this.y;
		}else{
			direction = start < -1974 ? -1974 - this.y : startTemp -this.y;
		}
		time = -direction/537*380;
	}	
	// 第二个动画
	if(this.y < -649 && this.y >= -1436){	
		var startTemp = start;	
		direction = start - this.y;
		if(direction){
			direction = start > -649 ? -649 -this.y : startTemp - this.y;
		}else{
			direction = start < -1436 ? -1436 - this.y : startTemp -this.y;
		}
		time = -direction/787*80; 
	}	
	// 第三个动画
	if(this.y < -0 && this.y >= -649){	
		var startTemp = start;	
		direction = start - this.y;
		if(direction){
			direction = start > -0 ? -0 -this.y : startTemp - this.y;
		}else{
			direction = start < -649 ? -649 - this.y : startTemp -this.y;
		}
		time = -direction/649*100; 
	}		
	console.log(direction);
	console.log(this.y);
	// 第一个动画
	if(this.y < -1436 && this.y >= -1974){
		time= time + temp;
		time = time > 380 ? 380 : time;
		time = time < -380 ? -380 : time;
		am1.goToAndStop(time,true);
		console.log('动画1移动毫秒数：'+ time);
	}	
	// 第二个动画
	if(this.y < -649 && this.y >= -1436){	
		time= time + temp;
		time = time > 80 ? 80 : time;
		time = time < -80 ? -80 : time;		
		am2.goToAndStop(time,true);
		console.log('动画2移动毫秒数：'+ time);
	}	
	// 第三个动画
	if(this.y < -0 && this.y >= -649){
		time= time + temp;
		time = time > 100 ? 100 : time;
		time = time < -100 ? -100 : time;		
		am3.goToAndStop(time,true);
		console.log('动画3移动毫秒数：'+ time);
	}	
	// 第四个动画
	// if(this.y < -0 && this.y >= -291){
	// 	am4.goToAndStop(time,true);
	// 	console.log('动画4移动毫秒数：'+ time);
	// }	
	// // 第五个动画
	// if(this.y < -0 && this.y >= -603){
	// 	am5.goToAndStop(time,true);
	// 	console.log('动画5移动毫秒数：'+ time);
	// }	
	// // 第六个动画
	// if(this.y < -726 && this.y >= -990){
	// 	am6.goToAndStop(time,true);
	// 	console.log('动画6移动毫秒数：'+ time);
	// }
	// 第七个动画
	// if(this.y < 0 && this.y >= -60){ 
	// 	time= time + temp;
	// 	am7.goToAndStop(time,true);
	// 	console.log('动画7移动毫秒数：'+ time);
	// }
	console.log('滑动距离:'+direction);
})
jroll.on("scrollStart",function(){
	start = this.y;
	// 第一个动画
	if(this.y < -1436 && this.y >= -1974){
		temp = time>0?time<=380?time:0:0;	
	}	
	// 第二个动画
	if(this.y < -649 && this.y >= -1436){	
		temp = time>0?time<=80?time:0:0; 
	}	
	// 第三个动画
	if(this.y < -0 && this.y >= -649){	
		temp = time>0?time<=100?time:0:0; 
	}
	console.log('------------------');	
	console.log('滑动开始:'+ this.y);	
	console.log('temp开始时间:'+ temp);	
});	
jroll.on("scrollEnd",function(){
	end = this.y;
	// 第一个动画
	if(this.y < -1436 && this.y >= -1974){
		temp = time>0?time<=380?time:0:0;	
	}	
	// 第二个动画
	if(this.y < -649 && this.y >= -1436){	
		temp = time>0?time<=80?time:0:0; 
	}	
	// 第三个动画
	if(this.y < -0 && this.y >= -649){	
		temp = time>0?time<=100?time:0:0; 
	}		
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