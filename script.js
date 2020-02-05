// test message remove for production
function startMessage() {
	console.log('Script Connected!');
}

// renders and displays the data
function displayData() {
	for (let i = 0; i < textAreaArray.length; i++) {
		$('.js-display').append(`
		<ul>
			<li>${textAreaArray[i]}</li>
		</ul>
		`);
	}
}

// grabs data from text area, stores as string
function grabText() {
	textAreaArray = $('#textData').val().trim().split(' ');
}

// handles form submit
function getForm() {
	$('form').submit((e) => {
		clearDisplay();
		e.preventDefault();
		grabText();
		console.log('Form submitted');
		console.log(textAreaArray);
		displayData();
	});
}

// clears results display
function clearDisplay() {
	$('.js-display').empty();
}

// controls app
function masterControl() {
	startMessage();
	getForm();
}

$(masterControl);
