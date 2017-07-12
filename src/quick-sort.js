'use strict';

function quickSort(input) {
	var resultArray = [];
	if(input != null && input.length > 0)
	{
		resultArray = input.sort();
	}
	return resultArray;
};
var inputArray = [1,2];
module.exports = quickSort(inputArray);