const thisIsArray = [45, 67, 1, 55];
const a = "abc";
//indexes start with 0

for(let index = 0; index < thisIsArray.length; index++){
    const value = thisIsArray[index];
    console.log("index = " + index + " >> value = " + value + " >>> " + a);
}

// it is not visible outside of the scope of declaration (the loop above)
// console.log(value);


