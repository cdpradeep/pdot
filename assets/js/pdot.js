function switcher() {
  var e = document.getElementById('themeSwitch');
  var icon = document.getElementById('theme-icon');
  // console.log (e);
    if ((e.className == 'pd-cover dark') || (icon.className == 'toggle-theme'))  {
            $(e).addClass('light');
            $(e).removeClass('dark');
            $(icon).addClass('dark-icon');
            $(icon).removeClass('light-icon');
          }
    else {
      $(e).addClass('dark');
      $(e).removeClass('light');
      $(icon).addClass('light-icon');
    $(icon).removeClass('dark-icon');
    }
}

$(function () {
  $(document).scroll(function () {
    var $nav = $(".pd-header");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});