// //String
// // const thing = "LEE";
// // console.log(thing);

// //Array
// //const daysOfWeek =["Mon", "Tue", "Wed", "Thu","Fri","Sat","Sun"];

// //Objects
// const Leeinfo={
//     name:"ILLJIN",
//     age:26,
//     gender:"Male",
//     isHandsome:true,
//     favFood:[
//         {
//             name:"Kimchi",
//             fatty:false 
//         },
//         {
//             name : "Cheese burger",
//             fatty: true
//         }
//     ]
// }
// console.log(Leeinfo.age)

// Leeinfo.age = 25;

// console.log(Leeinfo.age)

// console.log(console)

// function sayHello(name, age){
//     console.log(`Hello ${name} you are ${age} years old`);

//     return `Hello ${name} you are ${age} years old`;
// }

// const greetLee = sayHello("Lee", 26)

// console.log(greetLee)

// const calcurator = {
//     plus : function(a, b){
//         return a+b;
//     },
//     minus : function(a, b){
//         return a-b;
//     },
//     multiply : function(a, b){
//         return a*b;
//     },
//     divide : function(a,b){
//         return a/b;
//     },
//     square : function(a){
//         return a*a;
//         //return a**;
//     }
// }

// const plus = calcurator.plus(5,5)
// const minus = calcurator.minus(5,5)
// const multiply = calcurator.multiply(5,5)
// const divide = calcurator.divide(5,5)
// const square = calcurator.square(5)
// console.log(plus)
// console.log(minus)
// console.log(multiply)
// console.log(divide)
// console.log(square)


const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked"

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);//밑의 코드와 같은 역할을 한다.
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if(hasClass){
    //     title.classList.remove(CLICKED_CLASS);
    // }else{
    //     title.classList.add(CLICKED_CLASS);
    // }

}

function init(){
    title.addEventListener("click",handleClick);
}

init();
