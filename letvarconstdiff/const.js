const name="khairu";
//name="shabeer";//neither update or redeclare//
console.log(name);

const person={
    name:"khairu",
    age:24
}
console.log(person);//output { name: 'khairu', age: 24 }
person.age=26;//even though person object is declared as const variable...we are able to update it's argument
//console.log(person)//output { name: 'khairu', age: 26 }

//to avoid above process we go for freeze
Object.freeze(person);
person.age=89;
console.log(person)