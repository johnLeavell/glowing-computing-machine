// write a functoin that accepts an array of strings. Return the longest string

function longestString(arr){
    let longestStr = ''; // initialize and delcare variable for longest string


    for (let i = 0; i < arr.length; i++){ // loop through the array
        if(arr[i].length > longestStr.length){ // determine if that length is the largest we have seen so far.

            longestStr = arr[i]; //replace the longest/largest variable with the arr[index] as long sa length is greater than variable.
        }
    }

    return longestStr //return longest/largest string
}

//ES6 Solution:

const longestString2 = arr => {
    let longest = '';
    arr.forEach(item => {
        if(item.length > longest.length){
            longest = item;
        }
    })
    return longest
}