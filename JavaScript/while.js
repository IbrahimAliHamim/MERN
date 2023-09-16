function calculateLetterGrade(grade){
    let letterGrade;

    while(true){
        if (grade >= 80){
            letterGrade = 'A';
            break;
        }else if(grade >= 70){
            letterGrade = 'B';
            break;
        }else if(grade >= 60){
            letterGrade = 'C';
            break;
        }else if(grade >= 50){
            letterGrade = 'D';
            break;
        }else{
            letterGrade = 'F';
            break;
        }
    }
    return letterGrade;
}

const numericalGrade = 69;
const letterGrade = calculateLetterGrade(numericalGrade);
console.log(`Letter Grade: ${letterGrade}, Numerical Grade: ${numericalGrade}`)