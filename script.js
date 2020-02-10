// test message remove for production
function startMessage() {
	console.log('Script Connected!');
}

// resets and renders and displays the data
function displayTotalKeywordCount() {
	$('#js-totalCount').empty();
	$('#js-totalCount').append(` = ${Object.keys(textObj).length}`);
}

function displayHighFeqWords() {
	$('#js-highWords').empty();
	for (let i = 0; i < sortedKeywords.length; i++) {
		// set for how many results we want
		// if (i < ) {
		$('#js-highWords').append(
			`<li class="orderListItem" >${sortedKeywords[i].toUpperCase()} = <span>${textObj[
				sortedKeywords[i]
			]}</span></li>`
		);
		// }
	}
}

// grabs data from text area, stores as string
function grabText() {
	textAreaArray = $('#textData').val().toLowerCase().trim().split(' ');
}

// handles form submit
function getForm() {
	$('form').submit((e) => {
		e.preventDefault();
		textObj = {};
		grabText();
		clearTextArea();
		countKeywords();
		// console.log(textObj);
		displayTotalKeywordCount();
		sortObj();
		displayHighFeqWords();
		turnOnClass();
	});
}

// clears results display
function clearDisplay() {
	$('.js-display').empty();
}

// clears text area
function clearTextArea() {
	$('#textData').val('');
}

// Sorts object
function sortObj() {
	const keywordFound = Object.keys(textObj);
	sortedKeywords = keywordFound.sort((a, b) => {
		if (textObj[a] < textObj[b]) {
			return 1;
		} else {
			return -1;
		}
	});
	// console.log('sorted key words', sortedKeywords);
}

// counts the total keywords found
function countKeywords() {
	for (let i = 0; i < textAreaArray.length; i++) {
		const word = textAreaArray[i];
		if (word in keywords) {
			if (word in textObj) {
				textObj[word]++;
			} else {
				textObj[word] = 1;
			}
		}
	}
}

function turnOnClass() {
	$('form').addClass('addClass');
	$('.js-display').removeClass('addClass');
	$('button').removeClass('removeClass');
}

function resetButton() {
	$('.js-reset').click(function() {
		$('#js-highWords').empty();
		$('#js-totalCount').empty();
		$('form').removeClass('addClass');
		$('button').addClass('removeClass');
		$('.js-display').addClass('addClass');
	});
}

// Start app on page load
function masterControl() {
	startMessage();
	getForm();
	resetButton();
}

$(masterControl);
