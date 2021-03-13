const students = [
  {
    name: 'Tanya',
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: 'Victor',
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: 'Anton',
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

//1

function getSubjects(student) {
  const subjectsArray = Object.keys(student.subjects)
  const newArray = subjectsArray.map((item) => {
    return (item.charAt(0).toUpperCase() + item.slice(1)).replace('_', ' ');
  });
  return newArray;
}

console.log(getSubjects(students[0]));

//2

function getAverageMark(student) {
  const allMarks = Object.values(student.subjects).flat(1);
  return (allMarks.reduce((a, b) => a + b) / allMarks.length).toFixed(2);
}

console.log(getAverageMark(students[0]));

//3

function getStudentInfo(student) {
  const result = {
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student),
  };
  return result;
}

console.log(getStudentInfo(students[0]));

//4

function getStudentsNames(students) {
    let nameArray = [];
    for (const key in students) {
      nameArray.push(students[key].name);
    }
    return nameArray.sort();
  }
  
  console.log(getStudentsNames(students));

  //5

  function getBestStudent(students) {
    let bestStudent = "";
    let bestMark = 0;
    for (const key in students) {
      if (getAverageMark(students[key]) > bestMark) {
        bestStudent = students[key].name;
      } 
    }
    return bestStudent;
  }
  
  console.log(getBestStudent(students));
  

  //6

  function calculateWordLetters(string) {
  const obj = {};
  const arrString = string.split("");
   const result = arrString.reduce((prev, current) => {
    prev[current] = (prev[current] || 0) + 1;
    return prev;
  }, obj);
  return result;
}

console.log(calculateWordLetters("тест"));