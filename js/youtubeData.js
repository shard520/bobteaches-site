// Find video ID from div, get title and populate across the page
(function () {
	const videos = document.querySelectorAll('.video');
	
	for (i = 0; i < videos.length; i++) {
		// Get ID and construct url
		const playerID = videos[i].getAttribute('id');
		const url = 'https://www.youtube.com/watch?v=' + playerID;
		// Select button text and video thumbnail
		const btnParagraph = videos[i].children[2];
		const btnThumbnail = videos[i].children[0];
		// Select corresponding modal heading for each button
		const modals = $(".modal, .fade");
		const activeModalHeading = modals[i].querySelectorAll('.modal-heading')[0];
		
		// Get video title and populate elements selected above
		$.getJSON('https://noembed.com/embed',
			{format: 'json', url: url},
			function (data){
				const vidTitle = data.title;
				
				btnParagraph.innerText = vidTitle;
				btnThumbnail.setAttribute('src', 'https://img.youtube.com/vi/' + playerID + '/0.jpg');
				activeModalHeading.innerText = vidTitle;
			});
	};

}());

// Called on body load, populates modal dropdown menus with video titles
function modalMenuLinks () {
	// Select all elements from buttons containing video titles
	const vidTitleElement = document.querySelectorAll(".telly-text")
	// Select all dropdown menus inside modals
	const modalMenus = document.querySelectorAll('.dropup');
	const vidTitles = [];
	
	// Populate array with the text of each video title
	for (i = 0; i < vidTitleElement.length; i++) {
		const currentTitle = vidTitleElement[i].innerText;
		vidTitles.push(currentTitle);
	};

	// Select each indivdual modal dropdown and then all subsequent links inside
	for (i = 0; i < modalMenus.length; i++) {
		const modalLinks = modalMenus[i].children[1].children;

		// Apply title for each video from titles array
		for (link = 0; link < modalLinks.length; link ++) {
			modalLinks[link].innerText = vidTitles[link];
		};
	};
};