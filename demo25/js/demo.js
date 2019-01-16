
//调用插件里的懒加载功能函数
//json传参 键 : 值
var lazyload = $.noConflict();
//用在哪里
lazyload(function () {
    lazyload("img").lazyload({
        placeholder: "images/loading.png",
        effect: "fadeIn"
    });
});
