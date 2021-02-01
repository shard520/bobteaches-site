(function () {
	const navbar = document.querySelector('.navbar');

	navbar.innerHTML = `
	<div class="row w-100 text-center align-items-center">

		<div class="col nav-top-layer">
			<div class="nav justify-content-start">
				<button class="navbar-toggler nav-outline" type="button" data-toggle="collapse"
				data-target="#navMenu" aria-controls="navMenu" aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon d-none d-sm-inline-block"></span><h4 class="brand-text align-middle">MENU</h4>
				</button>
			</div>
		</div>

		<div class="col nav-top-layer">
			<a class="navbar-brand p-0 m-0" href="/index.html"><img class="brand-logo" alt="site logo - navigate to home" src="/images/bob-teaches-logo.svg"><h4 class="brand-text align-middle d-none d-md-inline-block">teaches.com</h4><img class="brand-logo d-none d-md-inline-block" alt="site logo - navigate to home" src="/images/bob-teaches-logo.svg"></a>
		</div>

		<div class="col nav-top-layer pr-0">
			<div class="nav justify-content-end">
				<button class="navbar-toggler nav-outline" type="button" data-toggle="collapse"
				data-target="#socialMenu" aria-controls="socialMenu" aria-expanded="false"
				aria-label="Toggle navigation">
				<h4 class="brand-text align-middle">SOCIALS</h4>
				<span class="navbar-toggler-icon d-none d-sm-inline-block"></span>
				</button>
			</div>
		</div>

	</div>

	<div class="collapse navbar-collapse nav-top-layer dropdown-flex" id="navMenu">
		<ul class="navbar-nav ml-auto">
			<li class="nav-item">
				<a class="nav-link" href="/index.html">Home</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/guitar.html">Guitar</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/bass.html">Bass</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/ukulele.html">Ukulele</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/bobteaches.html">bobteaches@Home</a>
			</li>
		</ul>
	</div>

	<div class="collapse navbar-collapse nav-top-layer pr-1 dropdown-flex" id="socialMenu">
		<ul class="navbar-nav align-items-end">
			<li class="nav-item social-link">
				<a class="nav-link p-0" target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCsVsndCsomIJSLK5Cpgh-_Q"><i class="fab fa-youtube social-icon"></i></a>
			</li>
			<li class="nav-item social-link">
				<a class="nav-link p-0" target="_blank" rel="noreferrer" href="https://www.facebook.com/bobteachesguitar"><i class="fab fa-facebook-square social-icon"></i></a>
			</li>
			<li class="nav-item social-link">
				<a class="nav-link p-0" target="_blank" rel="noreferrer" href="https://www.twitter.com/bobteaches"><i class="fab fa-twitter social-icon"></i></a>
			</li>
			<li class="nav-item social-link">
				<a class="nav-link p-0" target="_blank" rel="noreferrer" href="https://www.instagram.com/bobteaches/"><i class="fab fa-instagram social-icon"></i></a>
			</li>
			<li class="nav-item social-link">
				<a class="nav-link p-0" href="mailto:mail@bobteaches.com?subject=whats up bobteaches"><i class="fas fa-envelope social-icon"></i></a>
			</li>
		</ul>
	</div>
	`;
})();