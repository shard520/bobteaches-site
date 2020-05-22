// initial value to match range slider default value
audioPlayer.volume = 0.5;

function calculateTotalValue(length) {
	var minutes = Math.floor(length / 60),
	  seconds_int = length - minutes * 60,
	  seconds_str = seconds_int.toString(),
	  seconds = seconds_str.substr(0, 2),
	  time = minutes + ':' + seconds
  
	return time;
  }
  
function calculateCurrentValue(currentTime) {
	var current_hour = parseInt(currentTime / 3600) % 24,
	  current_minute = parseInt(currentTime / 60) % 60,
	  current_seconds_long = currentTime % 60,
	  current_seconds = current_seconds_long.toFixed(),
	  current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);
	
	return current_time;
}

function initProgressBar() {
	var player = document.getElementById('audioPlayer');
	var length = player.duration
	var current_time = player.currentTime;
	
	// calculate total length of value
	var totalLength = calculateTotalValue(length)
	jQuery(".end-time").html(totalLength);
	
	// calculate current value time
	var currentTime = calculateCurrentValue(current_time);
	jQuery(".start-time").html(currentTime);
	
	var progressbar = document.getElementById('seekObj');
	progressbar.value = (player.currentTime / player.duration);
	progressbar.addEventListener("click", seek);
	
	if (player.currentTime == player.duration) {
		$(playBtn).removeClass("fas fa-pause-circle");
		$(playBtn).addClass("fas fa-play-circle");
	};
	
	function seek(evt) {
		var percent = evt.offsetX / this.offsetWidth;
		player.currentTime = percent * player.duration;
		progressbar.value = percent / 100;
	}
};


$(playBtn).click(function(){
	togglePlayPause();
	initProgressBar();
});

$(backBtn).click(function(){
	audioPlayer.currentTime = 0;
});

$(volDown).click(function(){
	volBtns("down");
});

$(volUp).click(function(){
	volBtns("up");
});

function togglePlayPause() {
	if (audioPlayer.paused) {
		audioPlayer.play();
		$(playBtn).removeClass("fas fa-play-circle");
		$(playBtn).addClass("fas fa-pause-circle");

	}
	else {
		audioPlayer.pause();
		$(playBtn).removeClass("fas fa-pause-circle");
		$(playBtn).addClass("fas fa-play-circle");
	};
};

function volSlider(){
	var slideVal = $(volume)[0].value;
	audioPlayer.volume = slideVal / 100;
	$(volume).attr("value", slideVal);
	$(volume).val(slideVal);
};

function volBtns(press){
	
	if (press === "up" && audioPlayer.volume >= 0.95){
		audioPlayer.volume = 1;
		$(volume).attr("value", 100);
		$(volume).val(100);
	}
	else if (press === "down" && audioPlayer.volume <= 0.05){
		audioPlayer.volume = 0;
		$(volume).attr("value", 0);
		$(volume).val(0);
	}
	else if (press === "up" && audioPlayer.volume < 1){
		audioPlayer.volume = (audioPlayer.volume + 0.05).toFixed(2);
		$(volume).attr("value", (audioPlayer.volume * 100));
		$(volume).val((audioPlayer.volume * 100));
	}
	else if (press === "down" && audioPlayer.volume > 0){
		audioPlayer.volume = (audioPlayer.volume - 0.05).toFixed(2);
		$(volume).attr("value", (audioPlayer.volume * 100));
		$(volume).val((audioPlayer.volume * 100));
	};
};