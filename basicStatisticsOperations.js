function findMedian(arr){
    const middle = (arr.length+1) / 2;

    const sorted = [...arr].sort((a, b) => a-b);
    const isEven = sorted.length % 2 === 0;

    return isEven ? (sorted[middle - 1.5] + sorted[middle - 0.5]) / 2
    : sorted[middle -1];
}

function findMean(arr){
    //get the length
    var arrLength = arr.length;
    var sum = 0;
    //add up all the values
    for(var i = 0; i < arrLength; i++){
        sum += arr[i];
    }
    //console.log(sum);
    //divide the sum by the length
    return sum/arrLength;
}

function findMode(arr){
    // count amount of occurences of each number

    //create an object to track how many times we have seen each element in the array
    const obj = {};
    //loop over array
    arr.forEach(number => {
        // for each number in an array,
        // if it does not already exist as a key on the object,
        // create one and set its value to 1.
        if(!obj[number]){
            obj[number] = 1;
        } else {
            //if it already exists as a key on the object,
            // increment its corresponding value
            obj[number] += 1;
        }
    });
    // return object key with highest value
    // there will never be a value that is zero
    let highestValue = 0;
    // initialized to negative infinity 
    let highestValueKey = -Infinity; 

    // looping over the object, breaking out each key in the object
    // and grabbing its corresponding value by accessing the object at that key
    for( let key in obj){
        const value = obj[key]
        if(value > highestValue){
            // set highestValue to value
            highestValue = value;
            // set highestValueKey to the corresponding key
            highestValueKey = key;
        }
    }

    //convert key back to number since all keys in the object are strings
    return Number (highestValueKey);
}

var arr = [1, 4, 7, 9];
var arr = [ 11735, 14216, 14470, 38120, 51135, 64630, 67060, 73429, 99233, 4978];
console.log(findMedian(arr));
console.log(findMean(arr));
console.log(findMode(arr));