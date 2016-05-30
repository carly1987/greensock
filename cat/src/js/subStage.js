define([
	
], function(){
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
				var tl = new TimelineMax({});
				tl.to($cat, 1, {
					bottom: '82px'
				}).to($cat, 0.5, {
					bottom: '+=240'
				}).to($cat, 3, {
					left: "+=80%"
				});
				return tl;
			}
		}
	});
	return SubStage;
});