const ages = [34, 56, 25, 98, 50, 23, 100];

for (let index = 0; index < ages.length; index++) {
    const age = ages[index];
    if (age % 25 === 0) console.log(age);
}