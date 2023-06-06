// function fullname() {
//     const firstname = 'Dixon';
//     function lastname() {
//         const lastname = 'Afreh';
//         console.log(`My name is ${firstname} ${lastname}`)
//     }
//     lastname();
    
// }

// // Path: closure.js -> closure2.js
// fullname();


// function even(num) {
//     const a = 12;
//     function add(num2) {
//         const sum =num+ num2 + a;
//         console.log(sum)
//     }
//     add(2)
// }

// const result = even(2);

// console.log(result)


students = () => {
    var student = 'Maybell';
    secondstudent = () => {
        const student = 'Dixon';
        console.log(`My name is ${student} ${student}`)
    }
    secondstudent();
    
}
const names = students();

console.log(names)

// 

for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}

