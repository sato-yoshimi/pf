$(function(){  //フェードイン
  $(window).scroll(function (){
      $('.fadein').each(function(){
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight + 200){
              $(this).css('opacity','1');
              $(this).css('transform','translateY(0)');
          }
      });
  });
});

$(function() {  //スライダー
  $('.fade').slick({
    autoplay: true, //自動再生
    dots: true, //ドットのナビゲーションを表示
    arrows: true,
    infinite: true, //スライドのループ有効化
    speed: 2000, //切り替えのスピード（小さくすると速くなる）
    fade: true, //フェードの有効化
  });
});

$(function(){
  var pagetop = $('#page_top');   //ページトップへ
  pagetop.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });
  $('a[href^="#"]').click(function(){
    var time = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" ? 'html' : href);
    var distance = target.offset().top;
    $("html, body").animate({scrollTop:distance}, time, "swing");
    return false;
  });

  $(function () {  //ハンバーガーメニュー
    $("#nav-open").on("click", function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $("#nav-content").removeClass("open").fadeOut(200);
      } else {
        $(this).addClass("active");
        $("#nav-content").fadeIn(200).addClass("open");
      }
    });
  });
});
