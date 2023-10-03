let allStudents = [];
allStudents.push("A");
allStudents.push("B-");
allStudents.push(1);
allStudents.push(4);
allStudents.push(5);
allStudents.push(2);

let studentsWhoPass = [];

for (let i = 0; i < allStudents.length; i++) {
  let student = allStudents[i];
  if (typeof student === "number") {
    let grade = student;
    if (grade >= 3) {
      studentsWhoPass.push(student);
    }
  } else if (typeof student === "string") {
    let grade = student;
    if (
      grade === "A" ||
      grade === "A-" ||
      grade === "B" ||
      grade === "B-" ||
      grade === "C"
    ) {
      studentsWhoPass.push(student);
    }
  }
}

console.log("Students who pass the exam:");
for (let i = 0; i < studentsWhoPass.length; i++) {
  let student = studentsWhoPass[i];
  console.log(student);
}