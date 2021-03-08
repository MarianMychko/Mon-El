//1

function getRandomArray(length, min, max) {
    let result = Array.from({
      length
    });
  
    return result.map((number) => Math.floor(Math.random() * (max - min + 1) + min));
  }



  console.log(`Масив випадкових цілих чисел: `, getRandomArray(8, 3, 333))

  
//3

function getAverage(...numbers) {
    const integerArr = numbers.filter((number) => Number.isInteger(number));
    const sum = integerArr.reduce((sum, number) => {
      return sum + number;
    }, 0);
  
    return sum / integerArr.length;
  }
  

  console.log(`Cереднє арифметичне всіх переданих в неї аргументів:`, getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//5

filterEvenNumbers(...numbers){
    
}