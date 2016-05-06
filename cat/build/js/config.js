window.console = window.console || {};
console.log = console.log || function(){};

// 输出调试信息
require.debug = false;
require.config({
	baseUrl : require.rootUrl + 'src/js/'
});