const dt1 = new Date(2024, 10, 27, 8, 45, 0);

const dt1StrIso = dt1.toISOString();
const dt1StrUtc = dt1.toUTCString();

console.log(dt1StrIso);
console.log(dt1StrUtc);

// "2024-11-27T07:45:00.000Z"

const dt2 = Date.parse(dt1StrIso);
const dt3 = Date.parse(dt1StrUtc);

console.log(dt2);
console.log(dt3);

console.log(new Date(dt2));
console.log(new Date(dt3).getFullYear());

// YYYY-MM-DDTHH:mm:ss
// YY-MM-DDTHH:mm:ss
console.log(new Date(Date.parse("2023-10-19")));
console.log(new Date(Date.parse("19/10/2023")));

// 27.11.2024
const dt4Str = "28.11.2024";
const tokens = dt4Str.split(".");
const dt4 = new Date(tokens[2], tokens[1], tokens[0]);
console.log(dt4);

// difference between dates
const dtDiff = dt4 - dt1;
console.log(dtDiff);

