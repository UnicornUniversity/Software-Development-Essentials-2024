function boil(ingr) {
    console.log(ingr + " is boiled");
}

function fry(ingr) {
    console.log(ingr + " is fried");
}

// encapsulation
function cookBorsch() {
    const ingrs = ["beets", "carrots", "meat"];
    for (let i = 0; i < ingrs.length; i++) {
        const ing = ingrs[i];
        boil(ing);
        fry(ing);
    }
    console.log("Bon appetit!")
}

cookBorsch();

// pure function
function cookSoup(ingredients) {
    for (let i = 0; i < ingredients.length; i++) {
        const ing = ingredients[i];
        boil(ing);
        fry(ing);
    }
    console.log("Bon appetit!")
}

cookSoup(["beets", "carrots", "meat"]);