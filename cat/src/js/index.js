require([
	'init',
	'stage'
], function(Init, stage){
	new Vue({
		el: '#content',
		created: function(){
			console.log(this);
		}
	});
});