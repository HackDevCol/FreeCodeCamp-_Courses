function getAverage(scores) {
  // Esta función recibe un arreglo de números llamado 'scores'.
  // Calcula la suma de todos los elementos del arreglo usando un bucle 'for...of'.
  // Luego devuelve el promedio dividiendo la suma total entre la cantidad de elementos.
  let sum = 0;

  for (const score of scores) {
    sum += score; // Acumula cada nota en 'sum'.
  }

  return sum / scores.length; // Devuelve la media (promedio) de todas las notas.
}

function getGrade(score) {
  // Esta función recibe un número 'score' que representa la nota de un estudiante.
  // Dependiendo del valor de la nota, devuelve una cadena con la calificación en letra.
  // Se usan condiciones if-else para determinar la letra según el rango de la nota.
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  // Esta función recibe una nota numérica y verifica si el estudiante pasó o no.
  // Para esto, reutiliza la función getGrade para obtener la letra.
  // Retorna true si la nota no es "F" (es decir, pasó), y false si es "F".
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  // Esta función genera un mensaje para el estudiante con el promedio de la clase y su calificación.
  // 'totalScores' es un arreglo con todas las notas de la clase.
  // 'studentScore' es la nota particular del estudiante.
  // Primero calcula el promedio de la clase usando getAverage.
  let average = getAverage(totalScores);
  // Luego obtiene la letra de la nota del estudiante con getGrade.
  let grade = getGrade(studentScore);
  // Verifica si el estudiante pasó (grade diferente a "F").
  if (grade !== "F") {
    // Si pasó, retorna el mensaje con el promedio, su nota y la frase "You passed the course."
    return "Class average: " + average + ". Your grade: " + grade + ". You passed the course.";
  } else {
    // Si no pasó, retorna el mensaje con el promedio, su nota y la frase "You failed the course."
    return "Class average: " + average + ". Your grade: " + grade + ". You failed the course.";
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
// Llamada de prueba que muestra el mensaje para un estudiante con nota 37 en una clase con esas notas.
