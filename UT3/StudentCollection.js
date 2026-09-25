// StudentCollection.js
export default class StudentCollection {
  constructor(students = []) {
    // students es un array de objetos estudiante
    this.students = students;
  }

  addStudent(name, age, grades, isEnrolled) {
    this.students.push({ name, age, grades, isEnrolled });
  }

  getStudentByName(name) {
    return this.students.find(s => s.name === name);
  }

  removeStudentByName(name) {
    this.students = this.students.filter(s => s.name !== name);
  }

  updateStudentGrades(name, grades) {
    const student = this.getStudentByName(name);
    if (student) {
      student.grades = grades;
    }
  }

  calculateAverageGrade(name) {
    const student = this.getStudentByName(name);
    if (!student || student.grades.length === 0) return 0;
    const sum = student.grades.reduce((acc, g) => acc + g, 0);
    return sum / student.grades.length;
  }

  getEnrolledStudents() {
    return this.students.filter(s => s.isEnrolled);
  }

  getStudentsAboveAge(age) {
    return this.students.filter(s => s.age > age);
  }

  getTopStudent() {
    if (this.students.length === 0) return null;
    let top = null;
    let topAvg = -Infinity;
    for (const s of this.students) {
      const avg =
        s.grades.length === 0 ? 0 : s.grades.reduce((a, b) => a + b, 0) / s.grades.length;
      if (avg > topAvg) {
        topAvg = avg;
        top = s;
      }
    }
    return top;
  }

  getStudentSummaries() {
    return this.students.map(s => ({
      name: s.name,
      averageGrade:
        s.grades.length === 0 ? 0 : s.grades.reduce((a, b) => a + b, 0) / s.grades.length,
    }));
  }

  getTopStudents(threshold) {
    return this.students.filter(s => {
      const avg =
        s.grades.length === 0 ? 0 : s.grades.reduce((a, b) => a + b, 0) / s.grades.length;
      return avg >= threshold;
    });
  }

  getEnrolledStudentNames() {
    return this.getEnrolledStudents().map(s => s.name);
  }

  formatGrades() {
    return this.students.map(s => {
      const avg =
        s.grades.length === 0 ? 0 : s.grades.reduce((a, b) => a + b, 0) / s.grades.length;
      return `${s.name}: grades [${s.grades.join(', ')}] - average ${avg.toFixed(2)}`;
    });
  }

  getHonorRollStudents() {
    return this.students.filter(s => {
      const avg =
        s.grades.length === 0 ? 0 : s.grades.reduce((a, b) => a + b, 0) / s.grades.length;
      return avg >= 90;
    });
  }

  serializeStudents() {
    return JSON.stringify(this.students);
  }

  deserializeStudents(jsonString) {
    this.students = JSON.parse(jsonString);
  }
}