'use strict';

var button = document.getElementById('sub-btn');
var inputText;

function checkWordCount(wordArr) {
  if (wordArr.length > 100);
  return false;
};

function duplicateCheck(wordArr) {
  var counts={};
  for (var i = 0; i < wordArr.length; i++) {
    var item = wordArr[i];
    counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
    if (counts[item] === 2) {
      return false;
    }
  }
};

function verifyAlphaNumeric(wordArr) {
	for (var i = 0; i < wordArr.length; i++) {
		if (wordArr[i] !== /^[a-z0-9]+$/i) {
			return false;
		}
	}
};

button.addEventListener('click', function() {
  inputText = getElementById('some-text').value();
  let wordArr = inputText.split(' ');
  checkWordCount(wordArr);
  duplicateCheck(wordArr);
  verifyAlphaNumeric(wordArr);
};
