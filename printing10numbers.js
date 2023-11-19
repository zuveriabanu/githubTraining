var arr=[1,2,3,4,5,6]
var oddSum=0;
var evenSum=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        evenSum=evenSum+arr[i];
    }else{
        oddSum=oddSum+arr[i];
    }
}
console.log("Even sum is ",evenSum)
console.log("Odd sum is ",oddSum)