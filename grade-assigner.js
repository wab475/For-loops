

function assignGrade(score) {
    if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B";
    } else if (score > 70) {
        return "C";
    } else if (score > 65) {
        return "D";
    } else {
        return "E";
    }

}


for (let score1 = 60; score1 <= 100; score1++) {
    console.log(`For scoring ${score1} points, you get an ${(assignGrade(score1))}`)

}
