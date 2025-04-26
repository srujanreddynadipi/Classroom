// const fs = require('node:fs/promises');
// // // this module is used to read and write files
// // // fs.readFile('osmodule.js', 'utf-8')
// // async function readFile() {
// //     try {
// //         const data = await fs.readFile('osmodule.js', 'utf-8');
// //         console.log(data);  // this will print the content of the file
// //     } catch (err) {
// //         console.error(err); // this will print the error
// //     }
// // }
// // readFile();


// fs.writeFile('file2.txt', 'this is data written by writefile module', () => {
//     console.log('file written successfully');
// });

// console.log("finished reading file"); // This will still run immediately

//   b =fs.writeFileSync('file2.txt', 'this is data2 written by writefileSync module');
//  console.log(b);
//  console.log("finished reading file"); // This will still run immediately


const fs = require('fs');

// <-------------------------readFile--------------->   here console.log is print first
// fs.readFile('file.txt', 'utf8', (err, data) => {
//   console.log(err, data)
// })
// console.log('finish reading')

// <-----------------fs.readFileSync---------------->   here console .log is pront after the readfilesync 
// const a = fs.readFileSync('file.txt')     
// // console.log(a.toString())
// console.log('finish reading')

// <-----------------fs.writeFile---------------->
// fs.writeFile('file2.txt' , "this is a data written by writeFile" , ()=>{
//   console.log("written to the file")
// })
// console.log("finished the reading file")

// <-----------------fs.writeFileSync---------------->
// fs.writeFileSync('file2.txt' , "this is a data written by writeFile" , ()=>{
//   console.log("written to the file")
// })
// console.log("finished the reading file")