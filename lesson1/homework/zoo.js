/*

  Задание - используя классы и (или) прототипы создать программу, которая будет
  распределять животных по зоопарку.

  Zoo ={
    name: '',
    AnimalCount: 152,
    zones: {
      mammals: [],
      birds: [],
      fishes: [],
      reptile: [],
      others: []
    },
    addAnimal: function(animalObj){
      // Добавляет животное в зоопарк в нужную зону.
      // зона берется из класса который наследует Animal
      // если у животного нету свойства zone - то добавлять в others
    },
    removeAnimal: function('animalName'){
      // удаляет животное из зоопарка
      // поиск по имени
    },
    getAnimal: function(type, value){
      // выводит информацию о животном
      // поиск по имени или типу где type = name/type
      // а value значение выбраного типа поиска
    },
    countAnimals: function(){
      // функция считает кол-во всех животных во всех зонах
      // и выводит в консоль результат
    }
  }

  Есть родительский класс Animal у которого есть методы и свойства:
  Animal {
    name: 'Rex', // имя животного для поиска
    phrase: 'woof!',
    foodType: 'herbivore' | 'carnivore', // Травоядное или Плотоядное животное
    eatSomething: function(){ ... }
  }

  Дальше будут классы, которые расширяют класс Animal - это классы:
  - mammals
  - birds
  - fishes
  - pertile

  каждый из них имеет свои свойства и методы:
  в данном примере уникальными будут run/speed. У птиц будут методы fly & speed и т.д
  Mammals = {
    zone: mamal, // дублирует название зоны, ставиться по умолчанию
    type: 'wolf', // что за животное
    run: function(){
        console.log( wolf Rex run with speed 15 km/h );
    },
    speed: 15
}

Тестирование:
    new Zoo('name');
    var Rex = new Mammal('Rex', 'woof', 'herbivore', 15 );
    your_zooName.addAnimal(Rex);
      // Добавит в your_zooName.zones.mamals новое животное.
    var Dex = new Mammal('Dex', 'woof', 'herbivore', 11 );
    your_zooName.addAnimal(Dex);
      // Добавит в your_zooName.zones.mamals еще одно новое животное.

    your_zooName.get('name', 'Rex'); -> {name:"Rex", type: 'wolf' ...}
    your_zooName.get('type', 'wolf'); -> [{RexObj},{DexObj}];

    Программу можно расширить и сделать в виде мини игры с интерфейсом и сдать
    как курсовую работу!
    Идеи:
    - Добавить ранжирование на травоядных и хищников
    - добавив какую-то функцию которая иммитирует жизнь в зоопарке. Питание, движение, сон животных и т.д
    - Условия: Если хищник и травоядный попадает в одну зону, то хищник сьедает травоядное и оно удаляется из зоопарка.
    - Графическая оболочка под программу.
*/

class Zoo {
  constructor(name) {
    this.name = name;
    this.animalCount = 0;
    this.zones = {
      mammals: [],
      birds: [],
      fishes: [],
      reptile: [],
      others: []
    }
  }

  addAnimal(obj) {
    if (Object.keys(this.zones).includes(obj.zone)) {
      this.zones[obj.zone].push(obj);
    } else {
      this.zones.others.push(obj);
    }

    this.animalCount++;
  }

  removeAnimal(name) {
    for (let item in this.zones) {
      this.zones[item] = this.zones[item].filter( x => x.name !== name);
    }
  }

  getAnimal(type, value) {
    for (let item in this.zones) {        
        this.zones[item].forEach( x => {
          if (x[type] === value) {
            console.log(x);
          } else {
            console.log('No such animal, please, try again');
          }
        })    
    }
  }

  countAnimals() {
    let animalCount = 0;

    for (let item in this.zones) {
      animalCount += this.zones[item].length;      
    }

    console.log(animalCount);
  }
}

class Animal {
  constructor(name, phrase, foodType) {
    this.name = name;
    this.phrase = phrase;
    this.foodType = foodType;
  }

  eatSomething() {
    console.log(`${this.name} could eat for sure`);
  }
}

class Mammal extends Animal{
  constructor(name, phrase, foodType, speed) {
    super(name, phrase, foodType, speed);
    this.speed = speed;
    this.zone = 'mammals';
  }

  run() {
    console.log(`${this.name} could run as it is mammal`);
  }
}

class Bird extends Animal{
  constructor(name, phrase, foodType, speed) {
    super(name, phrase, foodType, speed);
    this.speed = speed;
    this.zone = 'birds';
  }

  fly() {
    console.log(`${this.name} could fly as it is bird`);
  }
}

class Fish extends Animal{
  constructor(name, phrase, foodType, speed) {
    super(name, phrase, foodType, speed);
    this.speed = speed;
    this.zone = 'fishes';
  }

  swim() {
    console.log(`${this.name} could swim as it is fish`);
  }
}

class Reptile extends Animal{
  constructor(name, phrase, foodType, speed) {
    super(name, phrase, foodType, speed);
    this.speed = speed;
    this.zone = 'reptiles';
  }

  crawl() {
    console.log(`${this.name} could crawl as it is reptile`);
  }
}

let wolf = new Mammal('wolf', 'woof', 'carnivore', 20);
let elephant = new Mammal('elephant', 'viiii', 'herbivore', 20);
let eagle = new Bird('eagle', 'wffff', 'carnivore', 25);
let dolphin = new Fish('dolphin', 'khhha', 'carnivore', 15);
let lizzard = new Reptile('lizzard', 'shhhh', 'carnivore', 5);

let myZoo = new Zoo('myZoo');

myZoo.addAnimal(wolf);
myZoo.addAnimal(eagle);
myZoo.addAnimal(elephant);
myZoo.addAnimal(dolphin);
myZoo.addAnimal(lizzard);

