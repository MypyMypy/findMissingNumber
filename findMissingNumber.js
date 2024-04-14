function findMissingNumber(array) {
    const length = array.length;

    if (!Array.isArray(array)) throw new Error('argument should be numbers array');
    if (length <= 1) throw new Error('array length should be greater than 1');
    if (new Set(array).size !== length) throw new Error('array should contain only unique elements');
    if (!Number.isInteger(array[0])) throw new Error('array elements should be intenger numbers');
    for (let i = 1; i < length; i++) {
        if (!Number.isInteger(array[0])) throw new Error('array elements should be intenger numbers');
        if (array[i] < array[i - 1]) throw new Error('array elements must be in ascending order');
    }

    let leftI = 0;
    let rightI = length - 1;
    let mid;
    while (leftI < rightI) {
        mid = Math.floor((leftI + rightI) / 2);
        if (array[mid] - mid !== array[0])
            rightI = mid;
        else
            leftI = mid + 1;
    }

    const result = array[leftI - 1] + 1;
    if (result === array[0]) throw new Error('array has not a missing number');


    return result;
}

console.log(findNumber([5, 5.5]))