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
overscroll(document.querySelector('.scroll'));
//带有scroll类名的可以滑动
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
