var $catList = $('.cat-list');
var shiftRobbyFrameTimer;
var shiftRobbyFrameTimeInterval = 200;
var pageVerticalPosition = 0;
var previousPageVerticalPosition = 0;
var differencePageVerticalPosition = 0;
var canAnimateRobbyRunSwim;
var robbyStartFrame;
var robbyStopFrame;
var robbyStaticFrame = 0;
var robbyStartRunFrame = 1;
var robbyStopRunFrame = 2;
var robbyStartSwimFrame = 3;
var robbyStopSwimFrame = 4;
var robbySwimDownFrame = 5
var robbyStartJumpFrame = 6;
var robbyStopJumpFrame = 7;
var robbyOneFrameWidth = 200;
var counter = 0;
var switcher = 1;

setRobbyStaticFrame();
enableAnimateRobbyRunSwim()

window.onscroll = function(e){
	judgePageVerticalPosition();
	afterScroll();
}

//页面滚动后执行的一些
function afterScroll(){
	pointDirectionForCat();
	animateCat();
}

//判断当前页面垂直的滚动方向
function judgePageVerticalPosition(){
	previousPageVerticalPosition = pageVerticalPosition;
	pageVerticalPosition = pageYOffset;
	differencePageVerticalPosition = pageVerticalPosition - previousPageVerticalPosition;
}

//重置喵的方向
function pointDirectionForCat(){
	if(differencePageVerticalPosition > 0){
		$catList.css("top","0px");
	}else{
		$catList.css("top","-236px");
	}
}

//喵动画的定时
function animateCat(){
	if (canAnimateRobbyRunSwim == true) {
		disableAnimateRobbyRunSwim();
		clearInterval(shiftRobbyFrameTimer);
	    shiftRobbyFrameTimer = setInterval(function() {
	        setCat()
	    }, shiftRobbyFrameTimeInterval);
	}
}

//设置喵的背景图
function setCat(){
	robbyStartFrame = robbyStartRunFrame;
    robbyStopFrame = robbyStopRunFrame;
    $catList.css('left', (-1 * robbyOneFrameWidth * (robbyStartFrame + counter)) + 'px');
    if (robbyStartFrame + counter + switcher > robbyStopFrame){
        switcher = -1 * switcher;
    }
    if (robbyStartFrame + counter + switcher == robbyStartFrame) {
        pageVerticalPositionWhenAnimateRobby1 = pageVerticalPosition;
    }
    if (robbyStartFrame + counter + switcher < robbyStartFrame) {
        pageVerticalPositionWhenAnimateRobby2 = pageVerticalPosition;
        if (pageVerticalPositionWhenAnimateRobby1 == pageVerticalPositionWhenAnimateRobby2){
            clearShiftRobbyFrameTimer();
            // if (layersMovement == "not moving 2") {
            //     robbyHandsUp();
            // }
            return;
        } else {
            switcher = -1 * switcher;
        }
    }
    counter = counter + switcher;
}
function clearShiftRobbyFrameTimer() {
    clearInterval(shiftRobbyFrameTimer);
    setRobbyStaticFrame();
    counter = 0;
    switcher = 1;
    enableAnimateRobbyRunSwim();
}
function setRobbyStaticFrame() {
    $catList.css('left', '0px');
}

function enableAnimateRobbyRunSwim() {
    canAnimateRobbyRunSwim = true;
}
function disableAnimateRobbyRunSwim() {
    canAnimateRobbyRunSwim = false;
}