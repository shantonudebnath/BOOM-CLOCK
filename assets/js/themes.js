// themes.js - Author: Takeshi Nakamoto 2020 */

// Save themes

savethemes = function () {
  // window.top.location.reload();
		location.reload();
};

// List themes

$(document).ready(function() {


// Save scroll position

  var $blockList = $('.themes_modal');

  if ($blockList.length && window.localStorage) {
  $(window).on('unload', function () {
    var scrollPosition = $blockList.scrollTop();
    localStorage.setItem('Scroll_position', scrollPosition);
  });

  var position = localStorage.getItem('Scroll_position');

  if (position) {
    $blockList.scrollTop(position);
  }
}


// Theme default

$('body').css("background-image", "url(assets/images/bg/bg.gif)");  // Background default


// Theme 1

Theme1 = function () {
  $('body').css("background-image", "url(assets/images/bg/bg.gif)");  // Background image
	 $("#date").css("color","#534c98"); 	// Color date
  localStorage.setItem('Theme', '1');
  $('#themes_list img').removeClass('active');
		$('#theme_1').addClass('active');
		$('.check').remove();
		$(".theme_1").prepend("<div class='check'></div>");
};

// Theme 3

Theme3 = function () {
  $('body').css("background-image", "url(assets/images/bg/bg3.gif)");  // Background image
		$("#date").css("color","#364f6b"); 	// Color date
  localStorage.setItem('Theme', '3');
		$('#themes_list img').removeClass('active');
  $('#theme_3').addClass('active');
		$('.check').remove();
		$(".theme_3").prepend("<div class='check'></div>");
};

// Theme 4

Theme4 = function () {
 	$('body').css("background-image", "url(assets/images/bg/bg4.gif)");  // Background image
  $("#date").css("color","#373c45"); 	// Color date
  localStorage.setItem('Theme', '4');
		$('#themes_list img').removeClass('active');
  $('#theme_4').addClass('active');
		$('.check').remove();
		$(".theme_4").prepend("<div class='check'></div>");
};

// Theme 5

Theme5 = function () {
		$('body').css("background-image", "url(assets/images/bg/bg5.gif)");  // Background image
  $("#date").css("color","#102c77"); 	// Color date
  localStorage.setItem('Theme', '5');
		$('#themes_list img').removeClass('active');
  $('#theme_5').addClass('active');
		$('.check').remove();
		$(".theme_5").prepend("<div class='check'></div>");
};


// Buttons bg themes

$("#theme_1").click(function(){localStorage.setItem('Theme', '1'); Theme1(); savethemes();});
$("#theme_2").click(function(){localStorage.setItem('Theme', '2'); Theme2(); savethemes();});
$("#theme_3").click(function(){localStorage.setItem('Theme', '3'); Theme3(); savethemes();});
$("#theme_4").click(function(){localStorage.setItem('Theme', '4'); Theme4(); savethemes();});
$("#theme_5").click(function(){localStorage.setItem('Theme', '5'); Theme5(); savethemes();});
// Check localStorage

if (localStorage.getItem('Theme') == '1') { Theme1();}
if (localStorage.getItem('Theme') == '2') { Theme2();}
if (localStorage.getItem('Theme') == '3') { Theme3();}
if (localStorage.getItem('Theme') == '4') { Theme4();}
if (localStorage.getItem('Theme') == '5') { Theme5();}

});
