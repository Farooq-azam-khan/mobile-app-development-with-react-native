function map(arr, fn) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        newArr.push(fn(val));
    }

    return newArr;
}

function addOne(num) { return num + 1; }
const x = [0, 1, 2, 3];
console.log(map(x, addOne));

function map2(arr, fn) {
    const newArr = [];
    arr.forEach(function (elem) {
        newArr.push(fn(elem));
    })
    return newArr;
}
console.log(map2(x, addOne));
