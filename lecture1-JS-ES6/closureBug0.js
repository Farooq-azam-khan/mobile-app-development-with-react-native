function makeFunctionArray() {
    const arr = [];
    // var will print 0 at line 11
    for (let i = 0; i < 5; i++) {
        arr.push(function () { console.log(i); })
    }
    return arr;
}

const functionArr = makeFunctionArray();
functionArr[0](); 