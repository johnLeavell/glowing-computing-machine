// write a function that takes a string and returns the character that is most commonly used in the string

const countingChars = str => {
    let charCount = {}; // initalize an object
    let maxCharCount = 0;
    let maxChar = '';

    for(let i = 0; i < str.length; i++){ // map character count to that object
        charCount[str[i]] = ++charCount[str[i]] || 1;
    }

    for(let key in charCount) { // loop through the object to find the max count
        if(charCount[key] >= maxCharCount) {
            maxCharCount = charCount[key] // assign nex max count value to maxCharCount and and new max key to maxChar
            maxChar = key
        }
    }

    return maxChar //return maxChar
}