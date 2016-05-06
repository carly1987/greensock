define([
	
], function(){
	var $stage = $('#stage');
	var data = {
		w: $stage.width(),
		h: $stage.height()
	}
	var Stage = new Vue({
		el: '#stage',
		data: data,
		ready: function(){
			var $el = $(this.$el);
			var w = $el.width();
			// this.$data.w = w;
			console.log(w, this.$data.w);
		}
	});
	return Stage;
});