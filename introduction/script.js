// const squre = function(number){
//     return number* number;
// };
// const x = squre(4);
// console.log(x);

// const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

// const a2 = a.map(function(s){
//     return s.length;
// });
// console.log("Normal way ", a2);

// const a3 = a.map((s)=>s.length);
// console.log("Using Arrow Function ", a3);

// function myFun(){
//     document.getElementById('demo').innerHTML='Rinki My Baby'
// }

// let arr = new Array("Ram", "Rinki");
// console.log(arr);
// arr.push("Baby");
// arr.unshift("Ramganga")
// console.log(arr);
// console.log(arr.length);
// for(let i= 0; i<arr.length; i++){
//     console.log(arr[i]);
// }
// const date = new Date();
// console.log(date);
// const formatedDate = new Intl.DateTimeFormat('en-US').format(date);
// console.log(formatedDate);

// let myPromise = new Promise(function(resolve,reject){
//     let sucess = true;

//     if(sucess){
//         resolve("The Ram load sussessfully!");
//     }else{
//         reject("The ram reject");
//     }
// });

// let promise = new Promise(function(resolve,reject){
//     const x ="Ram";
//     const y = "Rinki";
//     if(x===y){
//         resolve();
//     }else{
//         reject();
//     }
// });
// promise.then(function(){
//     console.log("Success");
// }).catch(function(){
//     console.log("Not same");
// })
// const gfg = ()=>{
//     console.log("Hi I am Ram");
// }
// gfg();

// const square = x=> x*x;
// console.log(square(4));
// const gfg1 = (x,y)=>{
//     console.log(x+y);
// }
// gfg1(1,2);

// const person = {
//     name: 'John',
//     age: 30,
//     greet() {
//         console.log('Hello, my name is ' +
//             this.name + ' and I am '
//             + this.age +
//             ' years old.');
//     }
// };

// person.greet(); 

// console.log(3+2+"7");

// const obj1 = { a: 1 };
// const obj2 = { a: 1 };
// console.log(obj1 == obj2);
// console.log(obj1 === obj2);

var x = 1
a();
b();
console.log(x);

function a(){
    var x = 10;
    console.log(x);
}
function b(){
    var x = 100;
    console.log(x);
}
