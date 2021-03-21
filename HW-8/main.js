class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marksArray = [];
    this.dismissed = false;
  }

  get marks() {
    if (this.dismissed) {
      return null;
    }

    return this.marksArray;
  }

  set marks(mark) {
    if (this.dismissed) {
      return console.log(null);
    }
    this.marksArray.push(mark);
  }
  getInfo() {
    return `Студент ${this.course}-го курсу ${this.university}  ${this.fullName}`;
  }

  getAverageMark() {
    const sum = this.marksArray.reduce((sum, number) => {
      return sum + number;
    }, 0);

    return +(sum / this.marksArray.length).toFixed(2);
  }

  dismiss() {
    this.dismissed = true;
  }

  recover() {
    this.dismissed = false;
  }
}

const petro = new Student('НУ ЛП м.Львів', 3, 'Петро Ретро');
//Нові оцінки
petro.marks = 5;
petro.marks = 3;
petro.marks = 4;
petro.marks = 5;

console.log('1.', petro.getInfo());
console.log('2.', petro.marks);
console.log('3.', (petro.marks = 5));
console.log('4.', petro.marks);
console.log('5.', petro.getAverageMark());

//Вигнанно
petro.dismiss();
console.log('6.', petro.marks);

//Поновленно
petro.recover();
console.log('7.', petro.marks);
