describe("Word Checker Testing", function() {

	it("There should be a function defined with the name checkWordCount", function() {
		expect(checkWordCount).toBeDefined();
	});

	it("checkWordCount should return false if a string sent to it has more than 100 words in it", function() {
		expect(checkWordCount(wordArr)).toBeFalsy();
	});

	it("There should be a function defined with the name duplicateCheck", function() {
		expect(duplicateCheck).toBeDefined();
	});

	it("duplicateCheck should return false if a string has duplicate words in it", function(){
		expect(duplicateCheck(wordArr)).toBeFalsy();
	});

	it("There should be a function defined with the name verifyAlphaNumeric", function() {
		expect(verifyAlphaNumeric).toBeDefined();
	});

	it("verifyAlphaNumeric should return false if there are any non-alphanumeric characters in a string", function(){
		expect(duplicateCheck(wordArr)).toBeFalsy();
	})
});
