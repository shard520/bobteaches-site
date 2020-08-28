(function(){
	const modals = $(".modal, .fade");

	for(i = 0; i < modals.length; i++){
				
		// for active modal, select matching link in modal nav
		const activeModalLink = modals[i].children[0].children[0].children[2].children[0].children[1].children[1].children[i];
		
		// for active modal, select modal nav-bar
		const activeModalNav = modals[i].children[0].children[0].children[2].children[0].children;
		
		// populate prev/next buttons with neighbouring data-targets
		const prev = i - 1;
		const next = i + 1;
		activeModalNav[0].setAttribute("data-target", "#modal-" + prev);
		activeModalNav[2].setAttribute("data-target", "#modal-" + next);

		// disable first and last prev/next buttons in modal-nav bar
		if (i === 0){
			activeModalNav[0].outerHTML = '<button class="btn telly-nav-btn-off prevBtn" disabled>Prev.</button>';
		} else if (i === (modals.length - 1)){
			activeModalNav[2].outerHTML = '<button class="btn telly-nav-btn-off nextBtn" disabled>Next</button>';
		};
		
		// deactivate link functionality and add active class
		(function (){
			activeModalLink.removeAttribute("data-target");
			activeModalLink.removeAttribute("data-toggle");
			activeModalLink.removeAttribute("data-dismiss");
			activeModalLink.classList.value="dropdown-item active telly-nav-btn-off";
		}());
	};
}());