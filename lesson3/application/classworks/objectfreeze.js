/*
  Задание: написать функцию, для глубокой заморозки обьектов.

  Обьект для работы:
  

  frozenUniverse.evil.humans = []; -> Не должен отработать.

  Методы для работы:
  1. Object.getOwnPropertyNames(obj);
      -> Получаем имена свойств из объекта obj в виде массива

  2. Проверка через typeof на обьект или !== null
  if (typeof prop == 'object' && prop !== null){...}

  Тестирование:


    // let FarGalaxy = DeepFreeze(universe);
    //   FarGalaxy.good.push('javascript'); // false
    //   FarGalaxy.something = 'Wow!'; // false
    //   FarGalaxy.evil.humans = [];   // false


*/


const work = (obj) => {

  Object.freeze(obj);
  let arrOfKeys = Object.getOwnPropertyNames(obj);
  console.log(arrOfKeys);
  arrOfKeys.forEach( item => {
    if (typeof obj[item] == 'object' && obj[item] !== null) {      
      work(obj[item]);
    } else {
      Object.freeze(obj[item]);
    }
  })
}

export default work;
