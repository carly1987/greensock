define([
	'cat'
], function(Cat){
	var catTl;
	var SubStage = new Vue({
		init: function(){
		},
		ready: function(){
		},
		methods:{
			init: function($subStage){
				var $cat = $subStage.find('.cat');
				$cat.css('left', '200px');
				$subStage.show();
				var left = $subStage.find('.wall-3').width();
				var top = $subStage.find('.software').height();
				var height = $cat.height();
				top = top - height;
				var tl = new TimelineMax({});
				tl.to($cat, 1, {
					bottom: '82px'
				}).to($cat, 0.5, {
					bottom: '+=240',
					left: '+=50',
					onComplete: function(){
						catTl = Cat.jump($cat, 1);
					}
				}).to($cat, 10, {
					left: '+='+left,
					onStart: function(){
						catTl.add(TweenMax.fromTo($cat, 0.5, {

						},{
							bottom: '+='+top
						}));
					},
					onComplete: function(){
						catTl.stop();
					}
				});
				return tl;
			}
		}
	});
	return SubStage;
});