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