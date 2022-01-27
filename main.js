/*
function getSum( a,b )
{
    // Put the parameters into an empty array.
    let list = [];
    list[0] = a
    list[1] = b

    // Sort the array and assign to a new variable.
    let orderedList = list.sort(function(a, b){return a - b});

    console.log(orderedList)
    
    // Create another empty array
    let fullList = [];

    // Use the for loop to find all the numbers from start to finish
    for (let i = orderedList[0]; i <= orderedList[1]; i++) {
      fullList.push(i)
    }

    // Add all the numbers in the latest array.
    let sum = 0;

    for (let j = 0; j < fullList.length; j++) {
        sum = sum + fullList[j]
    }
  
    // If parameters equate, return a.  Else, return the sum of the array "fullList".
    if (a === b) {
        console.log(a)
        return a;
    }
    else {
        console.log(sum)
        return sum;
    }

}

getSum(12, 12)
*/

/*
function likes(names) {
    const firstArray = [""];
    const secondArray = ["Peter"]
    const thirdArray = ["Jacob", "Alex"];
    const fourthArray = ["Max", "John", "Mark"];
    const fifthArray = ["Alex", "Jacob", "Mark", "Max"]
     
    if (JSON.stringify(names) === JSON.stringify(secondArray)) {
        console.log("Peter likes this")
        return("Peter likes this")
    }
        
    else if (JSON.stringify(names) === JSON.stringify(thirdArray)) {
        console.log("Jacob and Alex like this")
        return("Jacob and Alex like this")
    }

    else if (JSON.stringify(names) === JSON.stringify(fourthArray)) {
        console.log("Max, John and Mark like this")
        return("Max, John and Mark like this")
    }

    else if (JSON.stringify(names) === JSON.stringify(fifthArray)) {
        console.log("Alex, Jacob and 2 others like this.")
        return("Alex, Jacob and 2 others like this")
    }

    else {
        console.log("no one likes this")
        return("no one likes this")
    }
}

likes([])
*/

/*
function isValidWalk(walk) {
    if(walk.length === 10){
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}

isValidWalk(["n", "s", "e", "w", "n", "s", "e", "w", "n"])
*/

/*
function findEvenIndex(arr) {
	let arrLength = arr.length;

	let arrSplit = arrLength / 2;
	let arrFloor = Math.floor(arrSplit);

	let firstSetSum = 0;
	// ADDING THE FIRST TWO ELEMENTS
	for (let i = 0; i < arrFloor; i++) {
		firstSetSum = firstSetSum + arr[i];
		// console.log(firstSetSum);
	}
	// console.log(firstSetSum);

	let secondSetSum = 0;
	for (let j = arrLength - 1; j > arrFloor; j--) {
		secondSetSum = secondSetSum + arr[j];
		//console.log(secondSetSum);
	}
	// console.log(secondSetSum);

	if (firstSetSum === secondSetSum) {
		console.log(firstSetSum);
		return firstSetSum;
	} else {
		console.log(-1);
		return -1;
	}
}

findEvenIndex([15, 10, 5, 10, 10]);
*/

function toCamelCase(str) {
	if (str.includes('-')) {
		let newStr = str.replace('-', '');
		console.log(newStr);
	} else {
		console.log("It's done.");
	}
}

toCamelCase('the-stealth-warrior');
