//sumfuctions
// function sum(a,b){
// return a+b;
// }
// console.log(sum(1,2));

// // <--------------------arrow functions------------------>
// const arrowSum = (a,b)=>{
//     console.log(a+b);
// };

// let arrowsums = (a,b) => a+b;
// let  sums= arrowsums(1,2);
// console.log(sum);

// practice question  count the number of ovwels in a str
   function  countVowels(str){
       let count=0;
       for(const char of str)
       {  
           if(char == "a"||char=="e"||char=="i"||char=="u" ||char=="o"){
           count++;
            }
       }
       console.log(count);
   }

const countVow = (str)=>{
    let count=0;
       for(const char of str)
       {  
           if(char == "a"||char=="e"||char=="i"||char=="u" ||char=="o"){
           count++;
            }
       }
       console.log(count);
}


// <-----------------for each-------------------[>
let arr = [1,2,3,4,4,5];
arr.forEach(function printVal(val){
    console.log(val);
})

let array =["hyderabad" , "mumbai" , "goa"]
array.forEach((val)=>{
    console.log(val.toUpperCase())
});


// <---------------fitler----------------->
let arra = [1,2,3,4,5,6,7,8]

 let evenArra =  arra.filter((val) =>{
        return val%2==0;
    })
console.log(evenArra);
// <---------------reduced--------------




const output = arra.reduce((res,curr)=>{
    return res+curr;
});
console.log(output);

