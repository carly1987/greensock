define([
	'cat',
	'pipe',
	'subStage'
], function(Cat, Pipe, SubStage){
	var Stage = new Vue({
		el: '#stage',
		ready: function(){
			var $stage = $(this.$el);
			var $tree = $stage.find('.tree');
			var $wall = $stage.find('.wall');
			var $pipe = $stage.find('.pipe');
			var $cat = $stage.find('.cat');
			var $carly = $stage.find('.carly');
			this.$tree = $tree;
			this.$wall = $wall;
			this.$stage = $stage;
			this.$pipe = $pipe;
			var stageW = $stage.width();
			var treeW = $tree.width();
			this.stageW = stageW;
			this.$data.w =  stageW + treeW;
			this.$data.h = $stage.height();
			$cat.css('left', stageW*0.5);
			$carly.css('width', stageW);
			$tree.css('left', stageW);
			$wall.css('left', stageW*1.5);
			$pipe.css('left', stageW*2.6);
			$stage.css('width', this.$data.w);
			var timeLabel = [-stageW*1.28, -stageW*(1.56), -stageW*(1.67), -stageW*(1.85), -stageW*(2.05), -stageW*(2.2), -stageW*(2.34), -stageW*(2.75), -stageW*(2.9), -stageW*(3.05), -stageW*(3.30), -stageW*(3.46), -stageW*(3.61), -stageW*(4), -stageW*(4.15)];
			this.timeLabel = timeLabel;
			console.log(stageW);
		},
		methods: {
			init: function(){
				var stage = this;
				var percent = 0;
				var timeLabel = this.timeLabel;
				var $stage = this.$stage;
				var $cat = $stage.find('.cat');
				var $carly = $stage.find('.carly');
				var $tree = this.$tree;
				var $wall = this.$wall;
				var $pipe = this.$pipe;
				var $demon = $stage.find('.demon');
				var $mushroom = $stage.find('.mushroom');
				var pipe1Tl,pipe2Tl,pipe3Tl;
				var catRunTl = Cat.run($cat, 1);
				// var catRunTlForward = Cat.run($cat, 1);
				// var catRunTlBack = Cat.run($cat, 2);
				var catJumpTl = Cat.jump($cat, 1);
				stage.catRunTl = catRunTl;
				// stage.catRunTlForward = catRunTlForward;
				stage.catJumpTl = catJumpTl;
				catRunTl.stop(0);
				// catRunTlForward.stop(0);
				// catRunTlBack.stop();
				catJumpTl.stop(0);
				var tlTemp ;
				var tl = new TimelineMax({});
				stage.tl = tl;
				tl.to($cat, 1, {
					bottom: "80px",
					onComplete: function(){
						catRunTl.play();
						// catRunTlForward.play(0);
					}
				}).to($stage, 20, {
					left: timeLabel[0],
					ease: Linear.easeIn 
				}).add(pause).to($stage, 5, {
					left: timeLabel[1],
					ease: Linear.easeIn 
				}).to($demon, 5, {
					left: "48%",
					ease: Linear.easeIn 
				}, '-=5').add(shit).to($demon, 5, {
					left: "-10%"
				}).to($stage, 5, {
					left: timeLabel[2]
				}, "-=5").add(pause).to($stage, 5, {
					left: timeLabel[3]
				}).add(jumpWall).to($cat, 1, {
					left: "-=133px",
					bottom: "+=308px"
				}).to($cat, 0.1, {
					left: "-=20px",
					bottom: "-=30px"
				}).to($cat, 5, {
					left: "-=178px"
				}).add(pause).to($cat, 2, {
					left: "+=100px"
				}).to($mushroom, 0.3, {
					bottom: '80px'
				}, '-=1').to($mushroom, 0.3, {
					left: '105%'
				}, '-=0.7').to($mushroom, 2, {
					bottom: '-110px',
					left: '220%'
				}, '-=0.5').add(woowoo).to($mushroom, 1, {
					left: '300%'
				}).to($mushroom, 2, {
					left: '320%',
					bottom: '-388px'
				}).to($mushroom, 2.5, {
					left: '965%'
				}).to($mushroom, 5, {
					left: '-400%'
				}).to($cat, 2, {
					left: "+=100px"
				}, '-=9.5').to($cat, 1, {
					bottom: "-=278px",
					left: "+=20px"
				}, '-=7.5').to($cat, 1, {
					left: stage.stageW*0.5,
					ease: Linear.easeIn
				}, '-=6.5').to($stage, 5, {
					left: timeLabel[4],
					ease: Linear.easeIn
				}, '-=5.5').to($cat, 0.5, {
					bottom: "+=280"
				},'-=0.5').to($stage, 1, {
					left: timeLabel[5]
				}, '-=0.5').to($cat, 0.5, {
					bottom: "-=280"
				}).to($stage, 0.8, {
					left: timeLabel[6],
					ease: Linear.easeIn
				}, '-=1').to($stage, 3, {
					left: timeLabel[7],
					ease: Linear.easeIn
				}).to($cat, 0.5, {
					bottom: "+=340"
				}).to($stage, 0.8, {
					left: timeLabel[8],
					ease: Linear.easeIn
				}, '-=0.5').to($cat, 0.5, {
					bottom: "-=340"
				}).to($stage, 0.8, {
					left: timeLabel[9],
					ease: Linear.easeIn
				}, '-=1').to($stage, 2, {
					left: timeLabel[10],
					ease: Linear.easeIn
				}).to($cat, 0.5, {
					bottom: '+=420'
				}).to($stage, 0.8, {
					left: timeLabel[11],
					ease: Linear.easeIn
				}, '-=0.5').to($cat, 0.5, {
					bottom: '-=420'
				}).to($stage, 0.8, {
					left: timeLabel[12],
					ease: Linear.easeIn
				}, '-=1').to($stage, 2, {
					left: timeLabel[13],
					ease: Linear.easeIn
				}).to($cat, 0.5, {
					bottom: '+=220'
				}).to($stage, 0.8, {
					left: timeLabel[14],
					ease: Linear.easeIn
				}, '-=0.5').to($cat, 0.5, {
					bottom: '-=220'
				}).add(subStage);

				tl.addLabel('design', 20);
				tl.addLabel('null', 25);
				tl.addLabel('code', 30);
				tl.addLabel('animate', 40);
				tl.addLabel('pipe2', 70);
				function getFish(wall, fish, from, to, position){
					tlTemp = Cat.getFish($cat, wall, from, to);
					if(fish == 0){
						fish = 1
					}
					fish = fish * tlTemp.catGetFishTl.duration() * 1000;

					setTimeout(function(){
						tlTemp.catGetFishTl.stop(0);
						tlTemp.wallTl.stop(0);
						tlTemp = "";
						wall.addClass('wall-enable');
						catJumpTl.stop();
						catRunTl.stop();
						catRunTl.remove();
						catRunTl = Cat.run($cat, 1);
						catRunTl.play();
						// catRunTlForward.play();
						tl.play();
					}, fish);
				}
				function pause(){
					tl.pause();
					console.log(tl.time());
					catRunTl.stop();
					// catRunTlForward.stop(0);
					// catRunTlBack.stop(0);
					catJumpTl.play(0);
					var label = tl.getLabelBefore(tl.time());
					console.log(label,tl.time());
					switch(label){
						case "design":
							var wall = $wall.find(".wall-1");
							getFish(wall, 5, "80px", "160px", "stone");
							break;
						case "null":
							var wall = $wall.find(".wall-3");
							getFish(wall, 0, "80px", "220px", "stone");
							break;
						case "code":
							var wall = $wall.find(".wall-5");
							getFish(wall, 10, "80px", "220px", "stone");
							var pipe1 = $pipe.find('.pipe-1');
							var pipe2 = $pipe.find('.pipe-2');
							var pipe3 = $pipe.find('.pipe-3');
							pipe1Tl = Pipe.animate(pipe1, 222);
							pipe2Tl = Pipe.animate(pipe2, 280);
							pipe3Tl = Pipe.animate(pipe3, 352);
							break;
						case "animate":
							var wall = $wall.find(".wall-7");
							getFish(wall, 5, "358px", "410px", "wall");
							break;
						default:
							break;

					}
				}
				function shit(){
					console.log('shit');
					tl.pause();
					catRunTl.stop();
					// catRunTlForward.stop(0);
					var catShitTl = Cat.shit($cat,1);
					setTimeout(function(){
						TweenMax.to($cat, 0.3, {
							opacity: 1,
							scale: 0.5,
							transformOrigin: "center bottom",
							onComplete: function(){
								catShitTl.stop();
								catRunTl.stop();
								// catRunTlForward.play();
								pause();
							}
						});
					},1300);
					
				}
				function woowoo(){
					console.log('woowoo');
					tl.pause();
					catRunTl.stop();
					// catRunTlForward.stop(0);
					var catGetMushroomTl = Cat.getMushroom($cat,1);
					// catGetMushroomTl.to($mushroom, 0.3, {
					// 	bottom: '-110px',
					// 	left: '200%'
					// }, '-=0.3');
					setTimeout(function(){
						TweenMax.to($cat, 0.3, {
							opacity: 1,
							scale: 1,
							transformOrigin: "center bottom",
							onComplete: function(){
								catGetMushroomTl.stop();
								catRunTl.play();
								// catRunTlForward.play();
								tl.play();
							}
						});
					},1300);
				}
				function jumpWall(){
					tl.pause();
					catRunTl.stop();
					catRunTl.remove();
					catRunTl = Cat.run($cat, 2);
					catRunTl.play();
					// catRunTlBack.play();
					tl.play();
				}
				function subStage(){
					tl.pause();
					var $subStage = $('#subStage');
					var subStageTl = SubStage.init($subStage);
				}
			}
		}
	});
	return Stage;
});