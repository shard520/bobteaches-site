(function() {
	const tuningButtons = document.querySelectorAll('.tuner__button');
	const tuningNotes = document.querySelectorAll('.tuner__note')

	// When button is clicked, cancel previous sounds and pass button ID to playSound
	for (let i = 0; i < tuningButtons.length; i++) {
		tuningButtons[i].onclick = (function() {
			cancelSound();
			playSound(this.id)
		});	
	};

	// Pause any note currently playing
	function cancelSound() {
		for (let i = 0; i < tuningNotes.length; i++) {
			tuningNotes[i].pause();		
		};
	}

	// Check which button was pressed, reset audio to start and play note
	function playSound(btnId) {
		switch (btnId) {
			case "ukeEStringBtn":
				tuningNotes[0].currentTime = 0;
				tuningNotes[0].play();
				break;
			case "ukeAStringBtn":
				tuningNotes[1].currentTime = 0;
				tuningNotes[1].play();
				break;
			case "ukeDStringBtn":
				tuningNotes[2].currentTime = 0;
				tuningNotes[2].play();
				break;
			case "ukeGStringBtn":
				tuningNotes[3].currentTime = 0;
				tuningNotes[3].play();
				break;
			default:
				break;
		};
	}
})();