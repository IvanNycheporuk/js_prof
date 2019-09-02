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
