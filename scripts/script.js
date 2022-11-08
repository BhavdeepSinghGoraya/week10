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