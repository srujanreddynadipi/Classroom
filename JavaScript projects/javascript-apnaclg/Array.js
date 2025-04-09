let marks = [10,2,3,4,56,7,6];
for(let i=0 ;i<marks.length;i++){
    console.log("the marks are " +marks[i]);
}

// using for of 
//do the same work of the for looop to print the array
for(let mark of marks )
console.log(mark)

let cities = ["hyderabad","mumbai","goa"];
for(let city of cities){
    console.log(city);  
}

// pratice question
//avg of marks
let mar = [85,97,44,37,76,60];
let sum=0;

// for(let i=0;i<mar.length;i++){
//      sum+=mar[i]
// }
// let avg = sum/mar.length;
// console.log(avg);

for(let val of mar){
    sum+=val
}
console.log(sum/mar.length);


// for a given array with prices of 5 items -> [250 ,645 ,300 ,900 ,50] all items have an offer 10% OFF on them .
// change the array to store final price after applying offer
let cost = [250, 645, 300 , 900, 50]
let offer ;
let total ;
// --------------->using for of <--------------------------
// for(let val of cost ){
//     offer = val*10/100;
//     total = val - offer;
//     console.log(total);
// }

let i=0;
for(let val of cost){
    console.log(`cost before offer = ${val}`)
    let offer = val /10;
    console.log(`value after the offer = ${val-offer}`)
}


// uisng for loop
// for(let i=0;i<cost.length;i++){
//     offer = cost[i]*10/100;
//     total= cost[i]-offer;
//     console.log(total);
// }


// <-----------push------------>
cost.push(1000);
console.log(cost);
// <-------------pop-------------->
cost.pop(1000);
console.log(cost);
// <---------------to string---------->
let numbers=[23,45,653,23,3];
numbers.toString();
console.log(numbers);
// <-----------------concat-------------->
// joins multiple arrays and return
let marvelHeros =["iron man", "spiderman", "thor" , "dr strange" , "captian america"]
let dcHeros = [ "batman", "superman"];
let indHeros = [ "krhis "]
let heros = marvelHeros.concat(dcHeros , indHeros);
console.log(heros)
// <----------------unshift--------------->
// used to add the Element at starting 
marvelHeros.unshift("hulk");
console.log(marvelHeros);
//<----------------shift---------------->
// used to delete the element of first 
marvelHeros.shift("hulk");
console.log(marvelHeros);
//<----------------slice---------------->
// returns the peice of array
console.log(marvelHeros.slice(2,7));
//<----------------splice---------------->
// change originnal array add remove replace
// splice(startIdx , delcount ,newEl1,...)
let num=[23,45,653,23,3];
num.splice(2,2,23,232,2332);
console.log(num);
// to add elment 
num.splice(2,0,30);
console.log(num);
// to delte element 
num.splice(3,1)
console.log(num);
//replace
num.splice(3,1,23);
console.log(num);


