/**
 * Created by alezana on 2/03/18.
 */

interface Person{
    name:string;
    email:string;
    salary:number;
    active:boolean;
}

var people = Array<Person>();
var validatingPerson = Array<Person>();

function createPeople():void{
    let newPerson:any;

    newPerson = {
        name: `Alexia`,
        email: `asuhdksahda`,
        salary: (283721),
        active: true
    };
    people.push(newPerson);

    for(let i =0; i<10;i++){
        newPerson = {
            name: `Israel${i}`,
            email: `i${i}@gmail.com`,
            salary: (i+1000000),
            active: i%2===0?true:false
        }
        people.push(newPerson);
    }
}

function validatingEmail():void{
    let newPerson:any;
    var expCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    for(let i =0; i<=10;i++){
        let personTemp = people[i];
        if(expCorreo.test(personTemp.email)) validatingPerson.push(personTemp);
    }
    people.push(newPerson);
}

function mostrar():void{

    for(let i=0; i<=10;i++){
        console.log(validatingPerson);
    }

}
createPeople();
validatingEmail();
console.log(validatingPerson);