//                                              bubble Sort: O(n^2)

function swap(arr, index1, index2) {
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}

function bubbleSort(arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j <= i; j++) {
			if (arr[i] < arr[j]) {
				swap(arr, i, j);
			}
		}
	}
	return arr;
}

console.log(bubbleSort([2, 5, 4, 7, 9]));

//                                                Selection Sort : O(n^2)
function selectionSort(arr) {
	var min;
	for (var i = 0; i < arr.length; i++) {
		min = i;
		for (j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				j = min;
			}
		}
		if (i != min) {
			swap(arr, i, min);
		}
	}
	return arr;
}

console.log(selectionSort([2, 5, 4, 7, 9]));
