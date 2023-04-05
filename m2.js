console.log("-------------------------------------------");

// Importing external data
import { data, hello } from "./m1.js";

console.log("Importing external data");
console.log(data);
hello();

// -------------------------------------------------------------------
// OOP
console.log("--------------------------------------------");
console.log("OOP");

class person
{
    name = "";
    age = 0;
    token = "";

    constructor(name, age)
    {
        this.name = name;
        this.age = age;
        this.token = "First class";
    }
}

class customer extends person
{   
    section = "A1";

    constructor(name, age)
    {
        super(name, age);
        this.token = "Second class";
    }

    print_data(){
        console.log(this.name, this.age, this.section, this.token);
    }
}

let customer1 = new customer("abc", 35);
console.log(customer1);
customer1.print_data();

// --------------------------------------------------------------------
// spread and rest operator (...)
console.log("-------------------------------------------");
console.log("spread and rest operator");

// Spread operator
let list1 = ['b', 'c'];
let list2 = ['a', ...list1];

console.log(list2);

// rest operator
function print_data(...data)
{
    console.log(data);
}

print_data("Hello", "World!", 100);


// ---------------------------------------------------------------------
// Array Destructuring
console.log("-------------------------------------------");
console.log("Array Destructuring");

let list3 = [1, 2, 3, 4];
let [a, b, c, d] = list3;

console.log(list3);

// ---------------------------------------------------------------------
// Object Destructuring
console.log("-------------------------------------------");
console.log("Object Destructuring");

let person1 = {
    p_name : "abc",
    p_age : 25
}

let {p_name, p_age} = person1;
console.log(p_name, p_age);

// ---------------------------------------------------------------------
// Map function 
console.log("-------------------------------------------");
console.log("Map function");

let list4 = [1, 2, 3, 4, 5];

let list5 = list4.map(
    function(x)
    {
        console.log(x);
        return x;
        // return x*2;
    }
);

// arrow function
list5 = list4.map(x => x*2);

console.log("list5:", list5);

// ---------------------------------------------------------------------
// Filter function 
console.log("-------------------------------------------");
console.log("Filter function");

let list6 = [1, 2, 2, 10];

// filters data acording to condition, if condition is true then it stores
// that data in array

let list7 = list6.filter( x => x-1 == 0);

console.log(list7);


