// Object constructor

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function () {
        return `${this.firstName} ${this.lastName} ${this.avatar}`
    }
}

var author = new User('quyen', 'coi', 'avatar');
var user = new User('vu','nguyen','Avatar');

author.title = 'chia se tai lieu';
user.comment = 'day la comment';

console.log(author.getName());
console.log(user.getName());






