

  /*

    Задание:

      1. Создать конструктор бургеров на прототипах, которая добавляет наш бургер в массив меню

      Дожно выглядеть так:
      new burger('Hamburger',[ ...Массив с ингредиентами ] , 20);

      Моделька для бургера:
      {
        cookingTime: 0,     // Время на готовку
        showComposition: function(){
          let {composition, name} = this;
          let compositionLength = composition.length;
          console.log(compositionLength);
          if( compositionLength !== 0){
            composition.map( function( item ){
                console.log( 'Состав бургера', name, item );
            })
          }
        }
      }

      Результатом конструктора нужно вывести массив меню c добавленными элементами.
      // menu: [ {name: "", composition: [], cookingTime:""},  {name: "", composition: [], cookingTime:""}]

        2. Создать конструктор заказов

        Моделька:
        {
          id: "",
          orderNumber: "",
          orderBurder: "",
          orderException: "",
          orderAvailability: ""
        }

          Заказ может быть 3х типов:
            1. В котором указано название бургера
              new Order('Hamburger'); -> Order 1. Бургер Hamburger, будет готов через 10 минут.
            2. В котором указано что должно быть в бургере, ищете в массиве Menu подходящий вариант
              new Order('', 'has', 'Название ингредиента') -> Order 2. Бургер Чизбургер, с сыром, будет готов через 5 минут.
            3. В котором указано чего не должно быть
              new Order('', 'except', 'Название ингредиента') ->


            Каждый их которых должен вернуть статус:
            "Заказ 1: Бургер ${Название}, будет готов через ${Время}

            Если бургера по условиям заказа не найдено предлагать случайный бургер из меню:
              new Order('', 'except', 'Булка') -> К сожалению, такого бургера у нас нет, можете попробовать "Чизбургер"
              Можно например спрашивать через Confirm подходит ли такой вариант, если да - оформлять заказ
              Если нет, предложить еще вариант из меню.

        3. Протестировать программу.
          1. Вначале добавляем наши бургеры в меню (3-4 шт);
          2. Проверяем работу прототипного наследования вызывая метод showComposition на обьект бургера с меню
          3. Формируем 3 заказа

        + Бонусные задания:
        4. Добавлять в исключения\пожелания можно несколько ингредиентов

  */

  const Ingredients = [
    'Булка',
    'Огурчик',
    'Котлетка',
    'Бекон',
    'Рыбная котлета',
    'Соус карри',
    'Кисло-сладкий соус',
    'Помидорка',
    'Маслины',
    'Острый перец',
    'Капуста',
    'Кунжут',
    'Сыр Чеддер',
    'Сыр Виолла',
    'Сыр Гауда',
    'Майонез'
  ];

  var OurMenu = [];
  var OurOrders = [];

  let hamburger = new Burger('Hamburger', ['Бекон', 'Сыр Чеддер', 'Помидорка', 'Кунжут'], 20);
  let cheeseburger = new Burger('Cheeseburger', ['Бекон', 'Сыр Чеддер', 'Помидорка', 'Кунжут', 'Сыр Виолла', 'Сыр Гауда', 'Маслины'], 35);
  let doubleCheesburger = new Burger('DoubleCheesburger', ['Сыр Чеддер', 'Сыр Чеддер', 'Помидорка', 'Кунжут', 'Сыр Виолла', 'Сыр Гауда', 'Сыр Виолла', 'Сыр Гауда', 'Капуста'], 40 );

  function Burger( name, ingredients, cookingTime){
    // {...}
    this.name = name;
    this.ingredients = ingredients;
    this.cookingTime = cookingTime;
  }

  Burger.prototype.getBurger = function() {
    return {
      name: this.name,
      ingredients: this.ingredients,
      cookingTime: this.cookingTime
    }
  }

  Burger.prototype.showComposition = function(){
    let {name, ingredients} = this;
    let compositionLength = ingredients.length;
    if( compositionLength !== 0){
      ingredients.map( function( item ){
          console.log( 'Состав бургера', name, item );
      })
    }
  }

  function Order(name, condition, value){      
    this.condition = condition || '';
    this.value = value || '';
    this.id = new Date().getTime();
    this.orderNumber = 0;
    this.orderBurger = name;
    this.orderException = "";
    this.orderAvailability;

    this.checkOrder(this.orderBurger, this.condition, this.value);
  }

  Order.prototype.getRandomBurger = function (min, max) {
    return Math.floor(min + Math.random()*(max + 1 - min))
  }

  Order.prototype.checkOrder = function(name, condition, value) {
    this.orderNumber++;

    for (let i = 0; i < menu.length; i++) {
      if (menu[i].name === name) {      
        console.log(`Заказ ${this.orderNumber}: Бургер ${menu[i].name}, будет готов через ${menu[i].cookingTime}`);  
        return;
      } 

      if (!condition) {
        let randomBurger = this.getRandomBurger(0, menu.length - 1);
        console.log(`К сожалению, такого бургера у нас нет, можете попробовать ${menu[randomBurger].name}`);
        return;
      }
      
      if (condition === 'has') {
        if (menu[i].ingredients.includes(value)) {
          console.log(`Order ${this.orderNumber}. Бургер ${menu[i].name}, с ${value}, будет готов через ${menu[i].cookingTime} минут.`)
          return; 
        } 
      }

      // use some or every + how to create global counter in class

      if (condition === 'except') {
        for( let j = 0; j < menu[i].ingredients; j++) {
          if ( menu[i].ingredients[j] === value) {            
            continue; 
          } else {
            console.log(`Order ${this.orderNumber}. Бургер ${menu[i].name}, без ${value}, будет готов через ${menu[i].cookingTime} минут.`);
            return;
          }
        }
        // menu[i].ingredients.forEach( i => {

        // })
      }
    }
    // menu.forEach( item => {

    // })
  }

  let menu = [hamburger.getBurger(), cheeseburger.getBurger(), doubleCheesburger.getBurger()];

  let order = new Order('Hamburger', '', '');

  let order2 = new Order('Hamburger', '', '');

  let order3 = new Order('', '', '');

  let order4 = new Order('', 'has', 'Капуста');

  let order5 = new Order('', 'except', 'Бекон');

  // console.log(menu);

  // console.log(order);
  // console.log(order2);


