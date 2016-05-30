define([
	
], function(){
	var CatGetFish = new Vue({
		init: function(){
			// console.log('init');
		},
		ready: function(){
			// console.log('ready')
		},
		methods:{
			getFish: function($cat, $wall, from, to){
				var tl = new TimelineMax({repeat:-1});
				var wallTl = this.wallGetFish($wall);
				wallTl.stop();
				tl.from($cat, 0.4, {
					bottom: from
				}).to($cat, 0.6, {
					bottom: to,
					onComplete: function(){
						wallTl.play(0);
					}
				}).to($cat, 0.3, {
					bottom: from,
					onComplete: function(){
						wallTl.pause(0);
					}
				});
				return {"catGetFishTl":tl, "wallTl":wallTl};
			},
			wallGetFish: function($wall){
				var $fishInit = $wall.find('em');
				var cat = this;
				var tl = new TimelineMax({repeat:-1});
				tl.from($wall, 0, {
					// top: "+=0"
				}).to($wall, 0.1, {
					top: "-=20px",
					onStart: function(){
						TweenMax.to($fishInit, 0.1, {
							bottom: "100px",
							opacity: 1
						});
					}
				}).to($wall, 0.2, {
					top: "+=20px",
					onStart: function(){
						TweenMax.to($fishInit, 0.2, {
							opacity: 0,
							bottom: "50px",
							onStart: function(){
								cat.addFish();
							}
						});
					}
				});
				return tl;
			},
			addFish: function(){
				var $fish = $('#fish');
				var fish = parseInt($fish.attr('data-fish'));
				fish +=1;
				$fish.html('x '+fish);
				$fish.attr('data-fish', fish);
			},
			jump: function($cat, row){
				var frameHeight = 120;
				var frameWidth = 120;
				var numCols = 2;
				var steppedEase = new SteppedEase(numCols-1);
				var tl = new TimelineMax({repeat:-1});
				tl.add( TweenMax.fromTo($cat, 0.5, {
					backgroundPosition:'-'+(frameWidth*(numCols+5))+'px -'+((frameHeight+36*0.6)*(row-1))+'px',
					delay: '0.3'
				}, { 
					backgroundPosition: '-'+(frameWidth*(numCols+4))+'px -'+((frameHeight+36*0.6)*(row-1))+'px', 
					ease:steppedEase
				}));
				return tl;
			},
			run: function($cat, row){
				var frameHeight = 120;
				var frameWidth = 120;
				var numCols = 2;
				var steppedEase = new SteppedEase(numCols-1);
				var tl = new TimelineMax({repeat:-1});
				tl.add( TweenMax.fromTo($cat, 0.5, {
					backgroundPosition:'-'+(frameWidth*(numCols-1))+'px -'+((frameHeight+36*0.6)*(row-1))+'px'
				}, { 
					backgroundPosition: '-'+(frameWidth*(numCols))+'px -'+((frameHeight+36*0.6)*(row-1))+'px', 
					ease:steppedEase
				}));
			  	return tl;
			},
			shit: function($cat, row){
				if(row == 1){
					$cat.css('background-position', 'right top');
				}else{
					$cat.css('background-position', 'right bottom');
				}
				var tl = new TimelineMax({repeat:-1});
				tl.add(TweenMax.fromTo($cat, 0.3, {
					rotation:-5,
					opacity: 1
				},{
					rotation: 5,
					opacity:0.8
				})).add(TweenMax.fromTo($cat, 0.3, {
					rotation:5,
					opacity:0.9
				},{
					rotation: -5,
					opacity: 0.7
				}));
				return tl;
			},
			getMushroom: function($cat, row){
				if(row == 1){
					$cat.css('background-position', '-240px top');
				}else{
					$cat.css('background-position', '-240px bottom');
				}
				var tl = new TimelineMax({repeat:-1});
				tl.add(TweenMax.fromTo($cat, 0.3, {
					opacity: 1
				}, {
					opacity: 0.8
				}));
				return tl;
			}
		}
	});
	return CatGetFish;
});