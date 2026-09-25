// app.js
import StudentCollection from './StudentCollection.js';

const students = [
  { name: "John Doe", age: 18, grades: [88, 92, 76], isEnrolled: true },
  { name: "Jane Smith", age: 20, grades: [95, 85, 90], isEnrolled: true },
  { name: "Sam Green", age: 22, grades: [70, 75, 80], isEnrolled: false },
  { name: "Alice Brown", age: 19, grades: [90, 91, 89], isEnrolled: true },
];

const studentCollection = new StudentCollection(students);

console.log("Find student by name:", studentCollection.getStudentByName("Jane Smith"));

studentCollection.addStudent("Emily White", 21, [88, 90, 92], true);

const topStudent = studentCollection.getTopStudent();
console.log("Top student:", topStudent);


// Tests

// getStudentByName
console.log("\n--- getStudentByName ---");
console.log(studentCollection.getStudentByName("Alice Brown"));

// removeStudentByName
console.log("\n--- removeStudentByName ---");
studentCollection.removeStudentByName("Sam Green");
console.log(
  "After removing Sam Green:",
  studentCollection.students.map(s => s.name)
);

// updateStudentGrades
console.log("\n--- updateStudentGrades ---");
studentCollection.updateStudentGrades("John Doe", [95, 90, 92]);
console.log(
  "John Doe updated grades:",
  studentCollection.getStudentByName("John Doe")
);

// calculateAverageGrade
console.log("\n--- calculateAverageGrade ---");
console.log(
  "Average grade for Jane Smith:",
  studentCollection.calculateAverageGrade("Jane Smith")
);

// getEnrolledStudents
console.log("\n--- getEnrolledStudents ---");
console.log(
  "Enrolled students:",
  studentCollection.getEnrolledStudents().map(s => s.name)
);

// getStudentsAboveAge
console.log("\n--- getStudentsAboveAge ---");
console.log(
  "Students older than 19:",
  studentCollection.getStudentsAboveAge(19).map(s => s.name)
);

// getTopStudent
console.log("\n--- getTopStudent ---");
console.log("Top student:", studentCollection.getTopStudent());

// getStudentSummaries
console.log("\n--- getStudentSummaries ---");
console.log("Student summaries:", studentCollection.getStudentSummaries());

// getTopStudents
console.log("\n--- getTopStudents (threshold 90) ---");
console.log(
  "Students with average >= 90:",
  studentCollection.getTopStudents(90).map(s => s.name)
);

// getEnrolledStudentNames
console.log("\n--- getEnrolledStudentNames ---");
console.log("Enrolled student names:", studentCollection.getEnrolledStudentNames());

// formatGrades
console.log("\n--- formatGrades ---");
console.log("Formatted grades:");
studentCollection.formatGrades().forEach(line => console.log(line));

// getHonorRollStudents
console.log("\n--- getHonorRollStudents ---");
console.log(
  "Honor roll (avg >= 90):",
  studentCollection.getHonorRollStudents().map(s => s.name)
);

// serializeStudents
console.log("\n--- serializeStudents ---");
const serializedData = studentCollection.serializeStudents();
console.log("Serialized Data:", serializedData);

// deserializeStudents
console.log("\n--- deserializeStudents ---");
studentCollection.deserializeStudents(serializedData);
console.log("Deserialized Data:", studentCollection.students);