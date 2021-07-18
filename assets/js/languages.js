// languages.js - Author: Shantonu Debnath*/


// Languages

$("#language_bt").click(function(){
	 $("#languagemodal").fadeIn(100);
		$('#languagemodal').animate({left:'0%'}, 200, 'swing', function() {});
  $("ul.listlanguages").animate({ scrollTop: 0 }, 100);
  return false;
});

$("#languageclose").click(function(){
 $('#languagemodal').animate({left:'+=100%'}, 200, 'swing', function() {});
});

// Reset search

$(".resetsearch").click(function() {
	$(".languagesearch").val("");
	$('.notfound').hide();
	$('.listlanguages li').fadeIn(100);
	$(".resetsearch").hide();
});


// Input reset

$(".languagesearch").keyup(function(event){
		var val = $(this).val();
		if (val.length > 0){
			$(".resetsearch").show();
			}
		else{
			$(".resetsearch").hide();
	}
});


// Search language

$('#languagesearch').bind('keyup', function() {
		var searchString = $(this).val();
		var count = 0;
		$(".listlanguages li").each(function(index, value) {
			currentName = $(value).text()
				if( currentName.toUpperCase().indexOf(searchString.toUpperCase()) > -1) {
									$(value).show();
									count++;
							}
			else{
									$(value).hide();
							}
		});
			if (count != 0)
						{
								$('.listlanguages').find('.notfound').hide();
						}
		else{
								$('.listlanguages').find('.notfound').show();
						}
});

// Save selected language

savelanguage = function () {
		$('.configuration-settings').hide();
		$('.configuration_active').addClass('configuration');
		$('.configuration').removeClass('configuration_active');
		$('body').addClass('height_auto');
		$('body').removeClass('height_500');
		$('body').removeClass('height_500_2');
	 location.reload();
};

$(document).ready(function() {

// bn - Bengali

BN = function () {
  localStorage.setItem('Language', 'bn');
		$('#selectedlanguage').text(bn);
		$('.listlanguages li a').removeClass('active');
		$('#bt_bn').addClass('active');
	 $('#list').find('#li_bn').insertBefore('li:eq(0)');
};
// en_US - English

EN_US = function () {
  localStorage.setItem('Language', 'en_US');
		$('#selectedlanguage').text(en_US);
		$('.listlanguages li a').removeClass('active');
		$('#bt_en_US').addClass('active');
	 $('#list').find('#li_en_US').insertBefore('li:eq(0)');
};


// Button language
$("#bt_bn").click(function(){localStorage.setItem('Language', 'bn'); BN(); savelanguage();});
$("#bt_en_US").click(function(){localStorage.setItem('Language', 'en_US'); EN_US(); savelanguage();});

// Check localStorage
if (localStorage.getItem('Language') == 'bn') { BN();}
if (localStorage.getItem('Language') == 'en_US') { EN_US();}
});


// languages.js - Author: Shantonu Debnath*/
