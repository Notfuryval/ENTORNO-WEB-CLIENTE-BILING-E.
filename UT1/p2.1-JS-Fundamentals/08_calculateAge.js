// 08_calculateAge.js

// Función normal que calcula la edad a partir de una fecha de nacimiento
function calculateAge(birthdate) {
  const birth = new Date(birthdate);
  const now = new Date();

  let age = now.getFullYear() - birth.getFullYear();

  const mDiff = now.getMonth() - birth.getMonth();
  const dDiff = now.getDate() - birth.getDate();

  // Si el cumpleaños aún no ha llegado este año
  if (mDiff < 0 || (mDiff === 0 && dDiff < 0)) {
    age = age - 1;
  }

  return age;
}

// Ejemplo
const birthdate = "2000-05-20";
console.log("Age for birthdate " + birthdate + ": " + calculateAge(birthdate));