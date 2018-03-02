/**
 * Created by alezana on 2/03/18.
 */
var people = Array();
var validatingPerson = Array();
function createPeople() {
    var newPerson;
    newPerson = {
        name: "Alexia",
        email: "asuhdksahda",
        salary: (283721),
        active: true
    };
    people.push(newPerson);
    for (var i = 0; i < 10; i++) {
        newPerson = {
            name: "Israel" + i,
            email: "i" + i + "@gmail.com",
            salary: (i + 1000000),
            active: i % 2 === 0 ? true : false
        };
        people.push(newPerson);
    }
}
function validatingEmail() {
    var newPerson;
    var expCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    for (var i = 0; i <= 10; i++) {
        var personTemp = people[i];
        if (expCorreo.test(personTemp.email))
            validatingPerson.push(personTemp);
    }
    people.push(newPerson);
}
function mostrar() {
    for (var i = 0; i <= 10; i++) {
        console.log(validatingPerson);
    }
}
createPeople();
validatingEmail();
console.log(validatingPerson);
//# sourceMappingURL=index1.js.map