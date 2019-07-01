const person = {
    name: 'farooq',
    greet: function () { console.log(this.name); }
}
// person.greet(); 

const greet = person.greet;
greet();

friend = {
    name: 'my f'
}

friend.greet = person.greet;
friend.greet()