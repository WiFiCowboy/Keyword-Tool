// test message remove for production
function startMessage() {
	console.log('Script Connected!');
}

// renders and displays the data
function displayTotalKeywordCount() {
	$('#js-totalCount').append(`${Object.keys(textObj).length}`);
}

function displayHighFeqWords() {
	for (let i = 0; i < sortedKeywords.length; i++) {
		// set for how many results we want
		if (i < 10) {
			$('#js-highWords').append(`<li>${sortedKeywords[i]}</li>`);
		}
		// $('#js-highWords').append(`<li>${sortedKeywords[i]}</li>`);
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
		textObj = {};
		console.log('Form submitted');
		console.log(textAreaArray);
		// textToObject();

		// console.log(keys(textCount));
		// displayData();
		clearTextArea();
		countKeywords();
		console.log(textObj);
		displayTotalKeywordCount();
		sortObj();
		displayHighFeqWords();
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

function sortObj() {
	const keywordFound = Object.keys(textObj);
	sortedKeywords = keywordFound.sort((a, b) => {
		if (textObj[a] < textObj[b]) {
			return 1;
		} else {
			return -1;
		}
	});
	console.log(sortedKeywords);
}
// changes array to obj
// function textToObject() {
// 	for (let i = 0; i < textAreaArray.length; i++) {
// 		let value = textAreaArray[i];
// 		textObj[value] = (textObj[value] || 0) + 1;
// 	}
// }

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

// controls app
function masterControl() {
	startMessage();
	getForm();
}

$(masterControl);
