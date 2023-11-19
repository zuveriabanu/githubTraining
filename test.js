const myMap = new Map();

const key1 = "myStr", key2 = {}, key3 = function(){}

myMap.set(key1, "this is key1");
myMap.set(key2, "this is map2");
myMap.set(key3, "this is map3");

let value1 = myMap.get(key3);
console.log(value1);

