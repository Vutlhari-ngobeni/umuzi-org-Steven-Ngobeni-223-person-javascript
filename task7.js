function combine(arrayNum1, arrayNum2) {
    const merge = [];
    const mergeLength = Math.max(arrayNum1.length, arrayNum2.length);
    
    for (let x = 0; x < mergeLength; x++) {
        if (x < arrayNum1.length) {
            merge.push(arrayNum1[x]);
        }
        if (x < arrayNum2.length) {
            merge.push(arrayNum2[x]);
        }
    }
    
    return merge;
}

console.log(combine([11, 22, 33, 45], [1, 2, 3]));

module.exports = {combine};