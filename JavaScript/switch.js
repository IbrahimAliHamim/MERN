// Function to calculate and return a letter grade based on a numerical grade


// function calculateLetterGrade(grade) {

//     switch (true) {
//       case grade >= 80:
//         return 'A';
//       case grade >= 70:
//         return 'B';
//       case grade >= 60:
//         return 'C';
//       case grade >= 50:
//         return 'D';
//       default:
//         return 'F';
//     }
//   }
  
//   const numericalGrade = 85;

//   const letterGrade = calculateLetterGrade(numericalGrade);
//   console.log(`Numerical Grade: ${numericalGrade}, Letter Grade: ${letterGrade}`);
  

// ---------------Minie to practise-----

// function calculateLetterGrade(grade) {
//     switch (true) {
//         case grade >= 80:
//         return 'A';
//         case grade >= 70:
//         return 'B';
//         case grade >= 60:
//         return 'C';
//         case grade >= 50:
//         return 'O';
//         default:
//         return 'F';
//     }
// }

// const letterGrade = 83;
// const numericalGrade = calculateLetterGrade(letterGrade);

// console.log(`Numerical Grade: ${numericalGrade} , Letter Grade : ${letterGrade}`);

// -----------------Function to calculate and return a letter grade based on a numerical grade-------

function calculateLetterGrade (grade){
    switch (true){
        case grade >= 80:
            return 'A';
        case grade >= 70:
            return 'B';
        case grade >= 60:
            return 'C';
        case grade >= 50:
            return 'D';
        default:
            return 'F';
    }
}

const numericalGrade = 105;
const letterGrade = calculateLetterGrade(numericalGrade);

console.log(`Letter Grade: ${letterGrade}, Numerical Grade: ${numericalGrade}`)

