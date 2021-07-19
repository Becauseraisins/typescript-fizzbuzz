// Import stylesheets
//import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// const planet: string = "Earth";
// let year: number = 2021;
// let lockdown: boolean = true;

// console.log(year);
// console.log(planet);
// console.log(lockdown);
 const button : HTMLElement = document.getElementById('custom-btn');
 button.addEventListener('click', event =>{
fizzbuzz();
})


function fizzbuzz() {
for( let i = 0; i<100; i++)
//let _i = i +1;
if (i % 3 == 0 && i % 5 == 0){
  console.log('fizzbuzz', i)
}
else if(i % 3 ==0 ){
  console.log("fizz", i)
}
else if(i % 5 == 0 ){
  console.log("buzz", i)
}

}

