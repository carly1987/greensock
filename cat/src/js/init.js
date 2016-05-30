define([
	'stage',
	'cat'
], function(Stage, Cat){
	var percent = 0;
	function preload(cb){
		percent +=2;
		if(percent <= 98){
			setTimeout(preload(cb), 100);
		}else{
			cb(); 
		}
	}
	var Init = new Vue({
		el: '#init',
		events: {
			
		},
		ready: function(){
			var self = this;
			var $init = $(self.$el);
			var $wall = $init.find('.wall');
			var $cat = $init.find('.cat');
			var $stage = $(Stage.$el);
			var tl = Cat.getFish($cat, $wall, "0px", "100px");
			preload(function(){
				console.log('end');
				$wall.addClass('wall-enable');
				tl.catGetFishTl.stop(0);
				self.readyComplete($cat, $wall, $init,$stage);
			});
		},
		methods:{
			readyComplete: function($cat, $wall, $init,$stage){
				var tl = new TimelineMax({delay: 0.5});
				tl.to($cat, 0.5, {
					yPercent: 200,
				}).to($wall, 0.5, {
					opacity: 0,
					onStart: function(){
						$init.remove();
						TweenMax.to($stage, 0.1, {
							opacity: 1,
							onStart: function(){
								Stage.init();
							}
						});
					}
				});
			}
		}
	});
	
	return Init;
});