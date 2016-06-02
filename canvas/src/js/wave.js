require([
	'waveIt'
], function(Wave){
	var $cicle = $('#cicle');
	var $wave = $('#wave');
	var cicleTl = new TimelineMax({yoyo: true});
	cicleTl.to($cicle, 1, {
		x:-100, 
		ease:Linear.easeNone
	}).to($cicle, 1, {
		y:220, 
		ease:Power2.easeIn,
		yoyo:true
	}, 0).to($cicle, 0.5, {
		x:-160,
		ease:Linear.easeNone
	}).to($cicle, 0.5, {
		y:300,
		ease:Power2.easeIn,
		yoyo:true
	}, 1).to($cicle, 0.5, {
		x:-200,
		ease:Linear.easeNone
	}).to($cicle, 0.5, {
		y:400,
		ease:Power2.easeIn,
		yoyo:true,
		onComplete: function(){
			Wave.init('wave');
		}
	}, 1.5);
});