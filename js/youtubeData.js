// Find video ID from div, generate thumbnail URL
// Populate dropdown menus with video titles
(function () {
	// Select all videos on page
	const videos = document.querySelectorAll('.video');
	
	for (i = 0; i < videos.length; i++) {
		// Get ID and construct url
		const playerID = videos[i].getAttribute('id');
		
		// Select video thumbnail
		const btnThumbnail = videos[i].children[0];

		// Set video thumbnail from video ID
		btnThumbnail.setAttribute('src', 'https://img.youtube.com/vi/' + playerID + '/0.jpg');
	};

	// Select all elements from buttons containing content titles
	const contentTitleElement = document.querySelectorAll(".telly-text")
	// Select all dropdown menus inside modals
	const modalMenus = document.querySelectorAll('.dropup');
	const contentTitles = [];

	// Populate array with the text of each content item title
	for (i = 0; i < contentTitleElement.length; i++) {
		const currentTitle = contentTitleElement[i].innerText;
		contentTitles.push(currentTitle);
	};

	// Select each indivdual modal dropdown and then all subsequent links inside
	for (i = 0; i < modalMenus.length; i++) {
		const modalLinks = modalMenus[i].children[1].children;

		// Apply title for each content item from titles array
		for (link = 0; link < modalLinks.length; link ++) {
			modalLinks[link].innerText = contentTitles[link];
		};
	};

}());