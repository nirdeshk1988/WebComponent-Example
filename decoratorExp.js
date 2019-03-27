function readonlyTest(target, property, descriptor) {
    console.log('start here');
    console.log(target);
    console.log(property);
    console.log(descriptor);
    descriptor.writable = false;
    return descriptor;
}
class User {
    @readonlyTest
    myReadOnly = 'test';
    constructor(firstname, lastName) {
        this.firstname = firstname;
        this.lastName = lastName;

    }
    @readonly
    getFullName() {
        return this.firstname + ' ' + this.lastName;
    }
    getFullName1() {
        return this.firstname + ' ' + this.lastName;
    }

}
User.prototype.getFullName = function () {
    return 'HACKED!';
}
var user = new User('John', 'Doe');
user.myReadOnly = 'nirdesh';
console.log(user.myReadOnly);
console.log(user.getFullName());