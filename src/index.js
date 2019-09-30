module.exports = function multiply(first, second) {
  let firstArray = first.split("");   //преобразуем строки в массивы
  let secondArray = second.split("");
  let multiplyArray = [];              //массив под требуемое число

  for (let x = firstArray.length - 1; x >= 0; x--) {     // проходимся по первому массиву
    for (let y = secondArray.length - 1; y >= 0; y--) {   // и в каждом элементе первого, по второму
      let product = firstArray[x] * secondArray[y];   // получаем firstArray.length * secondArray.length значений
      
      if (multiplyArray[x+y]) {     //переносим произведения произведения всех элементов двух массивов в третий, но, учитывая то что индексы элементов слаживаются, получаются элементы с одинаковыми индексами. Значения элементов с одинаковыми индексами слаживаются.
        multiplyArray[x+y] = multiplyArray[x+y] + product;
      } else {
        multiplyArray[x+y] = product;
      };
    };
  };
  multiplyArray.unshift("0"); // добавляем в начало массива 0, так надо! иначе мы потеряем первую цифру на выходе
  for ( let z = multiplyArray.length - 1; z >= 0; z--) {  // проходимся по массиву и и разделяем каждый элемент на десятки и еденицы
    let unit = multiplyArray[z] % 10;
    let tenner =  Math.floor(multiplyArray[z] / 10);
    multiplyArray[z] =unit; // сохраняем в массив еденицы
    
    if (multiplyArray[z-1]) { // при присутствии десяток добавляем их к предыдущему элементу. Здесь как раз и нужен дополнительный 0.
      multiplyArray[z-1] = multiplyArray[z-1] + tenner;
    } else if (tenner != 0) {
      multiplyArray[z-1] = tenner;
    };  
  };
  if (multiplyArray[0] == "0") { // удаляем первый ноль там где он был не нужен
    multiplyArray.shift();
  };
  return multiplyArray.join(""); // собираем в строку и возвращаем
};

