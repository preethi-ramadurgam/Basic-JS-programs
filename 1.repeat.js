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