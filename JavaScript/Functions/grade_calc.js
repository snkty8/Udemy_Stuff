// students score and total possible score
// 15/20 You got a C (75%)!


let grade_cal = function (score, possibleScore) {

    if (typeof score === 'number' && typeof possibleScore === 'number') {

        const percent = (score/possibleScore)*100

    
        if (percent >= 90) {
            letterGrade = 'A'
        } else if (percent <=89 && percent >= 80) {
            letterGrade = 'B'
        } else if (percent <= 79 && percent>=70) {
            letterGrade = 'C'
        } else if (percent <= 69 && percent >= 60) {
            letterGrade = 'D'
        } else {
            letterGrade = 'F'
        }

        return `Your score is ${score} out of a possible ${possibleScore}. That is ${percent}% You got a ${letterGrade}!!`
 
    } else {
        throw Error ('Arguement must be a number')
    }    
    
}

try {
    let grade = grade_cal(95, 100)
    console.log(grade)
} catch (e) {
    console.log(e.message)
}

