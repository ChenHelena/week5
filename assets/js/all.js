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
//# sourceMappingURL=all.js.map
