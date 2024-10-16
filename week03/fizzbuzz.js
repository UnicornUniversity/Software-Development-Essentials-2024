for (let i = 1; i <= 100; i++) {
    let s = i.toString() + " : ";
    s += (i % 3 === 0) ? "fizz" : "";
    s += (i % 5 === 0) ? "buzz" : "";
    /*
    if (i % 3 === 0){
        s = s + "fizz";
    }
    if (i % 5 === 0){
        s = s + "buzz";
    }
    */
    console.log(s);
}