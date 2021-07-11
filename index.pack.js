let emailForm = document.getElementById("email-form");

emailForm.addEventListener("submit", (event) => {
	event.preventDefault();

	let ourFormData = new FormData(event.target);

	let userFristName = ourFormData.get("name");

	let updatedHtmlContent = `<h2>Congratulations ${userFristName}!</h2>
     <p>You are on your way to becoming a BBQ Master!</p>
     <p>We'll never shar eyour information without your permission</p>`;

	document.querySelector(".cto").innerHTML = updatedHtmlContent;
});
