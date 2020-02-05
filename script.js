function startMessage() {
	console.log('Script Connected!');
}

function displayData() {
	// display the info
}

// handles form input
function getForm() {
	$('form').submit((e) => {
		clearDisplay();
		e.preventDefault();
		console.log('Form submit works');
	});
}

function clearDisplay() {
	$('.js-display').empty();
}

// controls app
function masterControl() {
	startMessage();
	getForm();
}

$(masterControl);
