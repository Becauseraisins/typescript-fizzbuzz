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
const output : HTMLElement = document.getElementById('result');
 const button : HTMLElement = document.getElementById('custom-btn');
 button.addEventListener('click', event =>{
fizzbuzz();
})


function fizzbuzz() {
  const startNumInput: HTMLInputElement = <HTMLInputElement>(     document.getElementById("start-num")
  );
  const endNumInput: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("end-num")
  )
const startNumVal : number = Number (startNumInput.value);
const endNumVal : number = Number (endNumInput.value);
for( let i = startNumVal; i<endNumVal; i++)
//let _i = i +1;
if (i % 3 == 0 && i % 5 == 0){
  output.innerHTML += '<div>fizzbuzz: ' + i + '</div>'
}
else if(i % 3 ==0 ){
  output.innerHTML += '<div>fizz: ' + i + '</div>'
}
else if(i % 5 == 0 ){
  output.innerHTML += '<div>buzz: ' + i + '</div>'
}

}

class car {
  rego: string;
  speed: number;
  maxspeed: number = 120;

  constructor(_rego: string, _speed: number){
    this.rego = _rego 
    this.speed = _speed
  }
  increasespeed(spd: number): void{
    this.speed += spd;

    if(this.speed>this.maxspeed){
      this.speed = this.maxspeed
    }
    
  }
}

const car1: car = new car('123abc',10);
console.log(car1);
car1.increasespeed(200);
console.log(car1);

