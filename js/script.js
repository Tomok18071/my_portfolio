"use strict";


/* ------------------------------------------------ */
/* ハンバーガーメニュー */
/* ------------------------------------------------ */
$(".nav_toggle").on("click", function () {
  $(".nav_toggle, .nav").toggleClass("show");
});


/* ------------------------------------------------ */
/* ページ内リンクをクリックした時のハンバーガーメニューの動作 */
/* ------------------------------------------------ */
$(function () {
  $(".nav_menu_link").on("click", function () {
    $(".nav_toggle, .nav").toggleClass("show");
  });
});


/* ------------------------------------------------ */
/* skillbar */
/* ------------------------------------------------ */
$(function () {
  $(".skillbar-html").on("inview", function () {});
});
$(function () {
  $(".skillbar").skillBars({
    from: 0,
    speed: 4000,
    interval: 100,
  });
});


/* ------------------------------------------------ */
/* b-to-top */
/* ------------------------------------------------ */
$(function () {
  // TOPに戻るボタン
  var topBtn = $("#page-top");
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    var w = $(window).width();
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  //スムーススクロールでページトップへ
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
      );
      return false;
    });
  });

  
  /* ------------------------------------------------ */
  /* AOS */
  /* ------------------------------------------------ */
  AOS.init({
    duration: 1000,
  });


/* ------------------------------------------------ */
/* loading */
/* ------------------------------------------------ */
jQuery(window).on("load", function() {
  $("#loading").show();
  setTimeout(function() {
    $("#loading").fadeOut();
  }, 2000);
});
