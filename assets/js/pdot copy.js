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

// $(document).ready(function(){
// 	$('.navbar-toggler-icon').click(function(){
// 		$(this).toggleClass('open');
// 	});
// });

// function switcher() {
//   var e = document.getElementById('themeSwitch');
//   // var f = document.getElementsByClassName('light');
//   // console.log (e);
//   // console.log(e[0].className);
//     if (e.className == 'pd-cover dark') {
//             $(e).addClass('light');
//             $(e).removeClass('dark');
//             e.fadeOut(350, function () {
//               e.css("background", "#24262d url('../img/pd_me_bg.png') top right no-repeat;')");
//               e.fadeIn(350);
//           });
//     }
//     else {
//       $(e).addClass('dark');
//       $(e).removeClass('light');
//       // $(e).style.backgroundImage = "assets/img/pd_me_bg.png";
//       e.fadeOut(350, function () {
//         e.css("background", "#24262d url('../img/pd_me_bg_bk.png') top right no-repeat;')");
//         e.fadeIn(350);
//     });
//   }
// }
    