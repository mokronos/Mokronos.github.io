// create a message that displays to check if the script is working on load
// alert('Hello World');
// console.log('main.js loaded');

alert('Hello World');
// get root element
const root = ReactDOM.createRoot(document.getElementById('root'));
// create list of variables 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const element = <h1>Hello, world!</h1>;

// let val = "test";
// val += numbers[0];
// root.render(element);
// val += element;
// root.render(val);
// root.render(numbers[0]);
root.render(element);
