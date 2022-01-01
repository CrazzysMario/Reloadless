$(document).ready(function () {
  $(".control nav a").click(function (event) {
    event.preventDefault();
    history.pushState(null, null, event.target.href);
    $("article").load(event.target.href + " article>.content");
  });
  $(window).on("popstate", function (event) {
    $("article").load(location.href + " article>.content");
  });
});
