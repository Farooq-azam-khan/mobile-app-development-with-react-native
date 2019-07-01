const o = {
    a: 'a',
    b: 'b'
}

// pass by reference 
// const o2 = o;
const o2 = Object.assign({}, o);

o.a = 'new value'

console.log(o2.a); 
