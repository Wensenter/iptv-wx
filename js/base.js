// 禁止页面滑动 TODO:
// var overscroll = function(el) {
//     el.addEventListener('touchstart', function() {
//       console.log(el.scrollLeft,el.offsetWidth,el.scrollWidth)
//       var top = el.scrollTop
//         , totalScrollH = el.scrollHeight
//         , currentScrollH = top + el.scrollHeight
//         ,left = el.scrollLeft
//         ,totalScrollW = el.scrollWidth
//         ,currentScrollW = left + el.offsetWidth;
//       if(top === 0) {
//         el.scrollTop = 1;
//       } else if(currentScrollH === totalScrollH) {
//         el.scrollTop = top - 1;
//       }
//       if(left === 0) {
//         el.scrollLeft = 1;
//       } else if(currentScrollW === totalScrollW) {
//         el.scrollLeft = left - 1;
//       }
//     },{passive: false});
//     el.addEventListener('touchmove', function(evt) {
//       if(el.offsetHeight < el.scrollHeight || el.offsetWidth <  el.scrollWidth )
//         evt._isScroller = true;
//     },{passive: false});
//   }
//   overscroll(document.querySelector('.scroll'));//带有scroll类名的可以滑动
//   document.body.addEventListener('touchmove', function(evt) {
//     if(!evt._isScroller) {
//       evt.preventDefault();
//     }
//   },{passive: false});
  // tabs选择
  $('.main-nav li,.sub-nav li').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
})