define([
	
], function(){
	var Stage = new Vue({
		el: '#stage',
		data:{
			// w: $el.width()
		},
		created: function(){
			console.log(this);
		}
	});
	return Stage;
});