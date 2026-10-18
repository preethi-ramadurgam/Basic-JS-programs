let arr=[1,2,2,3,4,4,0,-1];
/*
 Method 1: Using indexOf and lastIndexOf
let arr=[1,2,2,3,4,4,0,-1];
let repeat=[];
let nonRepeat=[];
for(let i=0;i<arr.length;i++){
    if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
        repeat.push(arr[i]);
    }
    else{
        nonRepeat.push(arr[i]);
    }
}
console.log("Repeat",repeat);
console.log("NonRepeat",nonRepeat);

*/


/*
let repeat=[];
let nonRepeat=[];
let freq = new Map();
for(let num of arr){
    freq.set(num,(freq.get(num)||0)+1);
}
for(let num of arr){
    if(freq.get(num)>1){
        repeat.push(num);
    }
    else{
        nonRepeat.push(num);
    }
}
    */

let repeat=arr.filter((num,i)=>arr.indexOf(num) !== i);
let nonRepeat=arr.filter((num)=>arr.indexOf(num) === arr.lastIndexOf(num));
console.log("Repeat",repeat);
console.log("NonRepeat",nonRepeat);