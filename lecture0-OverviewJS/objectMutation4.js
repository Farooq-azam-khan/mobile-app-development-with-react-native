const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'key'
    }
}

// shallow copy 
const o2 = Object.assign({}, o);

// o2.obj.key = 'new val';

// console.log(o.obj.key);

// deep copy 
function deepCopy(obj) {
    // check if vals are objects
    //if so deepcopy that obj
    //else return the value
    // no obj has obj 
    const keys = Object.keys(obj);
    const newObject = {};
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (typeof obj[key] === 'object') {
            newObject[key] = deepCopy(obj[key]);
        } else {
            newObject[key] = obj[key];
        }
    }
    return newObject;
}

// deep copy 
const o3 = deepCopy(o);
o.obj.key = 'new key';
console.log(o3.obj.key)