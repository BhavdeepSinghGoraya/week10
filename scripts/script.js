// for (let i = 0 ; i < 1000000; i ++)
// {
//     console.log(i)
// }

// for (let i = 2 ; i <= 1024;  i = i * 2 )
// {
//     console.log(i)
// }


// i = 2; 
// while (i <= 1024){
//     console.log(i)
//     i = i * 2;  
// }

// for ( let i = 1 ; i <= 10 ; i ++);
// {
//     console.log(2 ** i);
// }

// i = 1;
// while (i <= 10){
//     console.log( 2 **i);
//     i ++;
// }
let input = ""
do{
    input  = prompt("What is your name ?");
    // prompt always returns string 
    //convert input to number
    // console.log((input));
    console.log(Number(input));
}

while (!isNaN(Number(input)));

// alert('HELLO  ' + input)
alert(`HELLO! ${input}`)

let fruits = ['Apple','Banana'];
fruits.push('Orange');
fruits.pop();
fruits.unshift('Mango');
fruits.shift()

// let sequence = [1,1,2,3,5,8,13];

// for (let i = 0 ; i < sequence.length ; i = i+1)
// {
//      i / 2 != 0; 
//     console.log(i);
// }

const person = {
    name:['Bob', 'Smith'],
    age:32,
    gender:'male',
    hobbies :['music', 'skiing']
}

console.log(`my name is ${person.name[0]} ${person.name[1]}. I am interseted in ${person.hobbies[0]} and ${person.hobbies[1]}`);

for (let key in person){
    console.log(key);          //Returns a key and elements in the keys 
    console.log(person[key]);
}
let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
    };
let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
    };
let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
    };
let students = [student1, student2, student3];
let count = 0;   
for (let student in students){
    if (student.GPA > 3.0 && student.program == "CIT")
    {
        count ++;
    console.log(student)
}


}