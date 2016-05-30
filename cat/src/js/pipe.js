define([
	
], function(){
	var Pipe = new Vue({
		init: function(){
			// console.log('init');
		},
		ready: function(){
			// console.log('ready')
		},
		methods:{
			animate: function($pipe, step){
				var tl = new TimelineMax({repeat:-1});
				var $trap = $pipe.find('span');
				tl.from($trap, 5, {
					bottom: step
				}).to($trap, 5, {
					bottom: 0
				}).to($trap, 5, {
					bottom: step
				});
				return tl;
			}
		}
	});
	return Pipe;
});