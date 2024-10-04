function prod(m,n){
    m=Number(m);
    n=Number(n);
    if(m>n){
        return 1;
    }
    else{
        let val=1;
        for(let i=m;i<=n;i++){
            if(i%2!=0){
                val*=i;
            }
        }
        return val;
        
    }
    
}
let m=prompt("Enter value 1");
let n=prompt("Enter value 2");
let result=prod(m,n);
console.log(result);
