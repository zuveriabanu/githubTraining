let a = [1,2,3,4,5,6]
let b = 0;
let c = 1;

for(let i=1;i<=a.length;i++){
    if(i%2==0){
        b += a[i]
        console.log(b)
    }
    else{
        c *= a[i]
    }
}

console.log(b+" "+c);