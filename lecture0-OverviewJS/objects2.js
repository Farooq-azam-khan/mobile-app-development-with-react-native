const o = new Object();
o.firstName = 'Farooq';
o.lastName = 'Khan';
o.isLearning = true;
o.greet = function () {
    console.log('hi');
}
const o2 = {};
o2.firstName = 'Not F';
o2['lastName'] = 'Not K';
o2.isLearning = true;
o['greet'] = function () {
    console.log('hi');
}

// inline
const o3 = {
    firstName: 'FaK',
    lastName: 'Khan',
    greet: function () {
        console.log('fak');
    }
}

// nesting
const o4 = {
    name: {
        firstName: 'Farooq',
        lastName: 'Khan'
    },
    greet: function () {
        return 'hi';
    }
}

console.log(o4['name']['firstName']);
// the name and firstName attribute get typecast into a string
console.log(o4.name.firstName);