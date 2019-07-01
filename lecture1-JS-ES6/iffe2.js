const sayHello = (function () {
    var message = 'Hello';
    function sayHello() {
        console.log(message);
    }
    return sayHello;
})();

console.log('typeof message:', typeof message);
console.log(sayHello.toString());
sayHello();

const counter = (function () {
    // not accessible in global scope
    let counter = 0;
    return {
        inc: function () { counter = counter + 1; },
        get: function () { console.log(counter); }
    }
})();

counter.get();
counter.inc();
counter.get(); 