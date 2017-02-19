'use strict';

var button = document.getElementById('sub-btn');
var inputText;

function checkWordCount(words) {
  if (words.length > 100);
  return false;
};

function duplicateCheck(words) {
  var counts={};
  for (var i = 0; i < words.length; i++) {
    var item = words[i];
    counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
    if (counts[item] === 2) {
      return false;
    }
  }
};

function verifyAlphaNumeric(words) {
  function verifyAlphaNumeric(words){
	for (var i = 0; i < words.length; i++){
		if (words[i] !== /^[a-z0-9]+$/i) {
			return false;
		}
	}
};


button.addEventListener('click', function() {
  inputText = getElementById('some-text').value();
  let words = inputText.split(' ');
  checkWordCount(words);
  duplicateCheck(words);
  verifyAlphaNumeric(words);
};
