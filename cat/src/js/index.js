require([
	'init',
	'stage'
], function(Init, stage){
	new Vue({
		el: '#content',
		ready: function(){
			// console.log('ready',this.$el);
		}
	});
});