
const ukraine = {
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476
  };
  const latvia = {
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921
  };
  const litva = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114
  };
  

  //Допоміжні функції

  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  //1
  function getMyTaxes(salary) {
    return +(salary * this.tax).toFixed(2);
  }
  
  //2
  function getMiddleTaxes() {
    return +(this.tax * this.middleSalary).toFixed(2);
  }


//3
  function getTotalTaxes() {
    return +(this.tax * this.middleSalary * this.vacancies).toFixed(2);
  }
  

//4
  function getMySalary(country) {
    setInterval(() => {
      const randomSalary = getRandomInteger(1500, 2000);
      const tax = getMyTaxes.call(country, randomSalary);
      const result = {
        salary: randomSalary,
        taxes: tax,
        profit: +(randomSalary - tax).toFixed(2),
      };
  
      console.log(result);
    }, 10000);
  }
  
  console.log('1.', getMyTaxes.call(ukraine, 2500));
  console.log('2.', getMiddleTaxes.call(ukraine));
  console.log('3.', getTotalTaxes.call(ukraine));
  getMySalary(ukraine);
  