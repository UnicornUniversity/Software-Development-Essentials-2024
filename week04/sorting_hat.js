const students = ["Harry", "Ron", "Draco"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function sortingHatCeremony() {
    const faculties = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"];
    const rnd = getRandomInt(100);

    let faculty = -1;
    if ((0 <= rnd) && (rnd < 25)) {
        faculty = 0;
    } else if ((25 <= rnd) && (rnd < 50)) {
        faculty = 1;
    } else if ((50 <= rnd) && (rnd < 75)) {
        faculty = 2;
    } else {
        faculty = 3;
    }

    return faculties[faculty];
}

for (let i = 0; i < students.length; i++) {
    const studentName = students[i];
    console.log(studentName + " goes to " + sortingHatCeremony());
}