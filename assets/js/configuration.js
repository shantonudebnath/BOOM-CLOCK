// configuration.js - Author: Shantonu Debnath*/

// Open configuration

$('#open_configuration_bt').on('click', function() {
		$('.open_configuration_bt').hide();
		$('.open_themes_bt').hide();
		$('.close_configuration_bt').show();
  $('.back_bt').show();
  $('#configuration').show();
});

// Close configuration

$('#close_configuration_bt ').on('click', function() {
		$('.close_configuration_bt').hide();
		$('.open_themes_bt').show();
		$('.open_configuration_bt').show();
	 $('#configuration').hide();
});

$('.back_bt').on('click', function() {
		$('.open_configuration_bt').show();
		$('.open_themes_bt').show();
		$('.close_configuration_bt').hide();
	 $('#configuration').hide();
});

// Open Themes

$('#open_themes_bt').on('click', function() {
   $('.themes_modal').addClass('open_themes').removeClass('close_themes');
			$('.back2_bt').show();
			$('.close_themes_bt').show();
			$('#open_themes_bt').hide();
			$('.open_configuration_bt').hide();
});

// Close Themes

$('#close_themes_bt').on('click', function() {
   $('.themes_modal').addClass('close_themes').removeClass('open_themes');
			$('#close_themes_bt').hide();
			$('.open_configuration_bt').show();
			$('.open_themes_bt').show();
});

$('.back2_bt').on('click', function() {
	  $('.themes_modal').addClass('close_themes').removeClass('open_themes');
			$('.back2_bt').hide();
			$('.close_themes_bt').hide();
			$('.open_configuration_bt').show();
			$('.open_themes_bt').show();
});

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


// Time format

$("#time_format_bt").click(function(){
  $(".time_format_panel").fadeIn(100);
  $('.time_format_panel').animate({left:'0%'}, 200, 'swing', function() {});
});

$("#time_format_close_bt").click(function(){
  $('.time_format_panel').animate({left:'+=100%'}, 200, 'swing', function() {});
});

$("#24h_bt").click(function(){
		localStorage.setItem('Timeformat', true);
		$('#24h_bt').addClass('active');
		$('#12h_bt').removeClass('active');
		$('#p_time_format').text("24 h");
		window.top.location.reload();

});

$("#12h_bt").click(function(){
		localStorage.setItem('Timeformat', false);
		$('#12h_bt').addClass('active');
		$('#24h_bt').removeClass('active');
		$('#p_time_format').text("12 h");
	 window.top.location.reload();
});

if (localStorage.getItem('Timeformat') == 'true') {
		$('#24h_bt').addClass('active');
		$('#12h_bt').removeClass('active');
		$('#p_time_format').text("24 h");
}

if (localStorage.getItem('Timeformat') == 'false') {
		$('#12h_bt').addClass('active');
		$('#24h_bt').removeClass('active');
		$('#p_time_format').text("12 h");
}

if (localStorage.getItem('Timeformat') == null) {
  $('#24h_bt').addClass('active');
  $('#12h_bt').removeClass('active');
  $('#p_time_format').text("24 h");
}

// Quick command

document.getElementById("edit_bt").addEventListener('click', edit);
document.getElementById("hotkeys_bt").addEventListener('click', hotkeys);

function edit() {
  chrome.tabs.create({
    url: 'chrome://extensions/configureCommands',
    active: true
  });

}

function hotkeys() {
  chrome.tabs.create({
    url: 'chrome://extensions/configureCommands',
    active: true
  });

}


(function() {
  chrome.commands.getAll(existingKeys);

  function existingKeys(keys) {
    var i, l;
    for (i = 0, l = keys.length; i < l; ++i) {
      addHotKeyRow(
        keys[i].name,
        keys[i].description,
        keys[i].shortcut
      );
    }
  }

  function editKey(e) {
    var properties = {
      "url": "chrome://extensions/configureCommands",
      "active": true
    };
    chrome.tabs.update(null, properties);
  }

  function addHotKeyRow(name, description, shortcut) {

    var hotkeys = document.getElementById("hotkeys");
    var hotkey = document.createElement("div");
    var cellTitle = document.createElement("div");
    var cellKey = document.createElement("div");
    var cellEdit = document.createElement("div");
    var spanTitle = document.createElement("span");
    var spanKey = document.createElement("span");
    var spanEdit = document.createElement("span");
    hotkey.className = "hotkey";
    cellTitle.className = "cell title";
    cellKey.className = "cell key";
    cellEdit.className = "cell edit";
    spanTitle.textContent = description;
    spanKey.textContent = shortcut || "Alt+Z";
    spanEdit.textContent = "";
    spanEdit.addEventListener("click", editKey.bind(hotkey), false);
    cellTitle.appendChild(spanTitle);
    cellKey.appendChild(spanKey);
    cellEdit.appendChild(spanEdit);
    hotkey.appendChild(cellTitle);
    hotkey.appendChild(cellKey);
    hotkey.appendChild(cellEdit);
    hotkeys.appendChild(hotkey);
    hotkey.setAttribute("data-hotkey", name);

  }


})();
