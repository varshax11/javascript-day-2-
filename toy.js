function toy(arr){
    let count=0;
for(let i=0;i<N;i++){
    if(arr[i]!=0){
        arr[count++]=arr[i];
    }
}
let val=arr.length-count;
while(count<arr.length){
    arr[count++]=0;
}
return {arr,val};

}
N=prompt("Enter the number of toys");
const arr=[]
for(let i=0;i<N;i++){
    const v=prompt(`Enter the toy ${i+1}`);
    arr.push(v);
}
let result=toy(arr);
console.log(result.val);
console.log(result.arr);