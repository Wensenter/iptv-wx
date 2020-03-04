// 禁止页面滑动
var overscroll = function(el) {
  el.addEventListener('touchstart', function() {
    var top = el.scrollTop
      , totalScroll = el.scrollHeight
      , currentScroll = top + el.offsetHeight;
    if(top === 0) {
      el.scrollTop = 1;
    } else if(currentScroll === totalScroll) {
      el.scrollTop = top - 1;
    }
  },{passive: false});
  el.addEventListener('touchmove', function(evt) {
    if(el.offsetHeight < el.scrollHeight)
      evt._isScroller = true;
  },{passive: false});
}
overscroll(document.querySelector('.scroll'));//带有scroll类名的可以滑动
document.body.addEventListener('touchmove', function(evt) {
  if(!evt._isScroller) {
    evt.preventDefault();
  }
},{passive: false});
// swiper
var mySwiper = new Swiper('.swiper-container',{
    autoplay:true,
    loop:true,
    pagination: {
        el: '.swiper-pagination',
      },
})
// 广告窗拖动
var _advertisement = document.querySelector('.advertisement');
var advertisement = $('.advertisement')
//限制最大宽高，不让滑块出去
console.log(document.body.clientWidth,_advertisement.offsetHeight)
var maxW = document.body.clientWidth - advertisement.width();
var maxH = document.body.clientHeight - _advertisement.offsetHeight;
//手指触摸开始，记录div的初始位置
_advertisement.addEventListener('touchstart', function(e) {
  var ev = e || window.event;
  var touch = ev.targetTouches[0];
  oL = touch.clientX - _advertisement.offsetLeft;
  oT = touch.clientY - _advertisement.offsetTop;
//   document.addEventListener("touchmove", defaultEvent, false);
});
 //触摸中的位置记录
_advertisement.addEventListener('touchmove', function(e) {
  var ev = e || window.event;
  var touch = ev.targetTouches[0];
  var oLeft = touch.clientX - oL;
  var oTop = touch.clientY - oT;
  if(oLeft < 0) {
  oLeft = 0;
  } else if(oLeft >= maxW) {
  oLeft = maxW;
  }
  if(oTop < 0) {
  oTop = 0;
  } else if(oTop >= maxH) {
  oTop = maxH;
  }
  _advertisement.style.left = oLeft + 'px';
  _advertisement.style.top = oTop + 'px';
 });
 //触摸结束时的处理
 _advertisement.addEventListener('touchend', function() {
  document.removeEventListener("touchmove", defaultEvent);
 });
 //阻止默认事件
 function defaultEvent(e) {
  e.preventDefault();
 }