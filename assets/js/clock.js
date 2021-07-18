/* JS clock - Author: Takeshi Nakamoto 2020 */


// Languages localStorage

if (localStorage.getItem('Language') == 'en_US') {document.write('<script type="text/javascript" src="assets/js/languages/en.js"></script>');}
if (localStorage.getItem('Language') == 'bn') {document.write('<script type="text/javascript" src="assets/js/languages/bn.js"></script>');}

var bn = "Bengali";
var en_US = "English";
// Clock languages

var userLang = navigator.language || navigator.userLanguage;


switch (userLang) {

// Bangla
case 'bn':
// Clock date
var weekday = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহঃস্পতিবার", "শুক্রবার", "শনিবার"];
var month = ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বার", "অক্টোবার", "নভেম্বার", "ডিসেম্বার"];

// Configuration
var h2_configuration = "অপশন";
var h3_time_format = "সময়ের ধরণ";
var h3_open_clock = "বোম ঘড়ি চালু করুন";
var h3_language = "ভাষা";
var h2_themes = "পিছনের ছবি";

// Languages
var language_search = "ভাষা নির্বাচন করুন";
var language_not_found = "ভাষাটি পাওয়া যায় নি";
var en_US = "ইংরেজি";

/* Config - Default Language */
$(document).ready(function() {

 // Selected language
	$('#selectedlanguage').text(bn);
	$('#bt_bn').addClass('active');
	$('#list').find('#li_bn').insertBefore('li:eq(0)');

});
break;
// English - Default language

default:

// Clock date
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Configuration
var h2_configuration = "Configuration";
var h3_time_format = "Time format";
var h3_open_clock = "Open clock";
var h3_language = "Language";
var h2_themes = "Background";

// Languages
var language_search = "Search language";
var language_not_found = "Language not found";
var es = "Spanish";
var en_US = "English";
var ja = "Japanese";
var ru = "Russian";
var pt_BR = "Portuguese";
var no = "Norwegian";
var nl = "Dutch";
var lv = "Latvian";
var lt = "Lithuanian";
var hu = "Hungarian";
var et = "Estonian";
var da = "Danish";
var pl = "Polish";
var sv = "Swedish";
var ro = "Romanian";
var it = "Italian";
var de = "German";
var fr = "French";
var cs = "Czech";
var zh_CN = "Simplified Chinese";
var zh_TW = "Traditional Chinese";

/* Config - Default Language */
$(document).ready(function() {

 // Selected language
	$('#selectedlanguage').text(en_US);
	$('#bt_en_US').addClass('active');
	$('#list').find('#li_en_US').insertBefore('li:eq(0)');

});

break;

}

// End Languages


(function clock() {
    "use strict";
    var adjDay, twentyfour, currentTime, currentHours, currentMinutes, mnth, day, oday, year, dat;

    // Clock - Time format  - 12 (false) or 24 hours (true)


				if (localStorage.getItem('Timeformat') == 'true') {
				twentyfour = true;
				}

				if (localStorage.getItem('Timeformat') == 'false') {
				twentyfour = false;
				}

    if (localStorage.getItem('Timeformat') == null) {
    twentyfour = true;
    }

    adjDay = function (day, daynum) {
        var offset, doffset, left;
        switch (day.length) {
        case 6:
            offset = "0px";
            doffset = "1px";
            left = "-1px";
            break;
        case 7:
            offset = "0px";
            doffset = "0px";
            left = "-1px";
            break;
        case 8:
            offset = "2px";
            doffset = "0px";
            left = "-4px";
            break;
        case 9:
            offset = "3.5px";
            doffset = ".1px";
            left = "-6px";
            break;
        default:
            offset = "0px";
            doffset = "0px";
            left = "0px";
        }
        if (daynum === 1) {
            offset = "1px";
            left = "-2px";
        }
        if (daynum === 5) {
            doffset = "1.5px";
        }
        if (daynum === 6) {
            left = "-4px";
            offset = "2px";
            doffset = ".1px";
        }
        document.getElementById('year').style.letterSpacing = offset;
        document.getElementById('day').style.letterSpacing = doffset;
        document.getElementById('dates').style.left = left;
    };

    currentTime = new Date();
    currentHours = currentTime.getHours();
    currentMinutes = currentTime.getMinutes();
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    mnth = currentTime.getMonth();
    dat = currentTime.getDate();
    day = currentTime.getDay();
    oday = (dat < 10 ? "0" : "") + dat;
    year = currentTime.getFullYear();

				// Add seconds
				var newDate = new Date();
   	var seconds = new Date().getSeconds();
	   $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);



    if (!twentyfour) {
        currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
        currentHours = (currentHours === 0) ? 12 : currentHours;
    }

    document.getElementById('clock').innerHTML = currentHours + ":" + currentMinutes;
    document.getElementById('month').innerHTML = month[mnth];
    document.getElementById('date').innerHTML = oday;
    document.getElementById('day').innerHTML = weekday[day];
    document.getElementById('year').innerHTML = year;

    adjDay(weekday[day], day);
    setTimeout(function () {
        clock();
    }, 0);
				 // }, 3000);
}());
