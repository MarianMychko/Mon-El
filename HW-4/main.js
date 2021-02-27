const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = [
  'Диференційне рівняння',
  'Теорія автоматів',
  'Алгоритми і структури даних',
];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(students) {
  const studentsBoys = [students[0], students[1], students[4]];
  const studentsGirls = [students[2], students[3], students[5]];
  let studentsPairs = [];
  for (let i = 0; i < studentsBoys.length; i++) {
    studentsPairs[i] = [studentsBoys[i], studentsGirls[i]];
  }

  return studentsPairs;
}

function getTasksForStudents(pairs, themes) {
  let studentsThemes = [];
  for (let i = 0; i < pairs.length; i++) {
    studentsThemes[i] = [pairs[i], themes[i]];
  }
  return studentsThemes;
}

function getStudentMarks(students, marks) {
  let studentsMarks = [];
  for (let i = 0; i < students.length; i++) {
    studentsMarks[i] = [students[i], marks[i]];
  }
  return studentsMarks;
}

function getStudentPairsMarks(studentsPairs, themes) {
  let studentPairsMarks = [];
  for (let i = 0; i < studentsPairs.length; i++) {
    mark = Math.floor(Math.random() * 5) + 1;
    studentPairsMarks[i] = [studentsPairs[i], themes[i], mark];
  }

  return studentPairsMarks;
}

const pairs = getPairs(students);
console.log(pairs);
const studentsThemes = getTasksForStudents(pairs, themes);
console.log(studentsThemes);
const markStudent = getStudentMarks(students, marks);
console.log(markStudent);
const studentsPairMarks = getStudentPairsMarks(pairs, themes);
console.log(studentsPairMarks);
