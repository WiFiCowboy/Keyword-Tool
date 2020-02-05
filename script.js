function startMessage() {
	console.log('Script Connected!');
}

function displayData() {
	// display the info
}

function grabText() {
	$('#textData').val();
}

// handles form input
function getForm() {
	$('form').submit((e) => {
		clearDisplay();
		e.preventDefault();
		console.log('Form submit works');
		console.log(testString);
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
