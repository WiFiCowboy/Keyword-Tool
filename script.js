// test message remove for production
function startMessage() {
	console.log('Script Connected!');
}

// renders and displays the data
function displayData() {
	for (let i = 0; i < textAreaArray.length; i++) {
		let count = i;
		$('.js-display').append(`
		<table>
			<tr>
				<th>Productivity</th>
				<th>AIQ</th>
				<th>Attainment</th>
			</tr>
			<tr>
				<td>${count}</td>
				<td>${count}</td>
				<td>${count}</td>
			</tr>
		</table>
		`);
	}
}

// grabs data from text area, stores as string
function grabText() {
	textAreaArray = $('#textData').val().toLowerCase().trim().split(' ');
}

// handles form submit
function getForm() {
	$('form').submit((e) => {
		// clearDisplay();
		e.preventDefault();
		grabText();
		console.log('Form submitted');
		console.log(textAreaArray);
		textToObject();
		console.log(textObj);
		// console.log(keys(textCount));
		// displayData();
		clearTextArea();
	});
}

// clears results display
function clearDisplay() {
	$('.js-display').empty();
}

function clearTextArea() {
	$('#textData').val('');
}

// changes array to obj
function textToObject() {
	for (let i = 0; i < textAreaArray.length; i++) {
		let num = textAreaArray[i];
		textObj[num] = (textObj[num] || 0) + 1;
	}
}

// controls app
function masterControl() {
	startMessage();
	getForm();
}

$(masterControl);
