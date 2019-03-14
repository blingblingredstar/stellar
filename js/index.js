$(function () {
  // 导航栏高亮
  $("#nav-ul>li").mouseenter(
    function () {
      $(this).siblings("li").removeClass("nav-active")
      $(this).addClass("nav-active")
    }
  ).mouseleave(
    function () {
      $(this).removeClass("nav-active")
    }
  )
  $("#nav-ul").mouseleave(
    function () {
      $(this).children().eq(0).addClass("nav-active")
    }
  )

  /*1.引入*/
  /*2.结构   data-stellar-background-ratio="0.3"  样式 bg 需要 background-attachment: fixed;*/
  /*3.初始化插件*/
  $.stellar({
    horizontalScrolling: false,
    responsive: true
  })
})