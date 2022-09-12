"use strict";

$(".reply").click(function () {
  $(".editor-wrap").show();
  $(".edit-before").hide();
});
$(".mark").click(function () {
  $(".editor-wrap").hide();
  $(".edit-before").show();
});
$(".expand_more").click(function () {
  $(".expand_more").hide();
  $(".expand_less").show();
});
$(".expand_less").click(function () {
  $(".expand_more").show();
  $(".expand_less").hide();
});
$(document).ready(function () {
  $('.nav-link').each(function () {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
});
//# sourceMappingURL=all.js.map
