//Linear Search : Complexity: O(n)

function linearSearch(arr, n) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == n) {
			return true;
		}
	}
	return false;
}

console.log(linearSearch([2, 5, 9, 5, 7, 3, 2], 5));

//Binary Search : Complexity: O(log n)

function binarySearch(arr, n) {
	var lowIndex = 0,
		highIndex = arr.length - 1;
	while (lowIndex <= highIndex) {
		var middleIndex = Math.floor((highIndex + lowIndex) / 2);
		if (arr[middleIndex] == n) {
			return middleIndex;
		} else if (n < arr[middleIndex]) {
			highIndex = middleIndex;
		} else {
			lowIndex = middleIndex;
		}
	}
	return -1;
}

console.log(binarySearch([2, 4, 6, 8, 9], 4));
