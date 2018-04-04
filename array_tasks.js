var arrayTasks = {

	concat: function (arr1, arr2) {
		newArray = [];
		for (element of arr1){
			newArray.push(element);
		}
		for (element of arr2){
			newArray.push(element);
		}
		return newArray;
	},

// should insert an item in an array at any index position
	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
			return arr;
	},

	square: function (arr) {
		const newArray = [];
		for(let element of arr){
			newArray.push(element * element);
		}
		return newArray;
	},

	sum: function (arr) {
		total = 0
		for(let element of arr){
			total += element;
		}
		return total;
	},

	findDuplicates: function (arr) {

	},

	// removeAndClone: function (arr, valueToRemove) {

	// },

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
