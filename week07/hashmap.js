const cache = {};

cache["Peter"] = 29;
cache["Mary"] = 20;

console.log("Peter's age is " + cache["Peter"]);

cache["Peter"] = 31;

console.log("Peter's age is " + cache["Peter"]);

// 20 is not index, is a key
cache[20] = "something";

console.log(cache[20]);

