/*
  Задание:

    Написать синглтон, который будет создавать обьект government

    Данные:
    {
        laws: [
        {
          id: 0,
          text: '123123'
        }
      ],
        budget: 1000000
        citizensSatisfactions: 0,
    }

    У этого обьекта будут методы:
      .добавитьЗакон({id, name, description})
        -> добавляет закон в laws и понижает удовлетворенность граждан на -10

      .читатькКонституцию -> Вывести все законы на экран
      .читатьЗакон(ид)

      .показатьУровеньДовольства()
      .показатьБюджет()
      .провестиПраздник -> отнимает от бюджета 50000, повышает удовлетворенность граждан на +5
      
*/

class Government {
  constructor(budget) {
    if (Government.instance === null) {
      this.budget = 1000000;
      this.citizensSatisfactions = 0;
      this.laws = [];
    }
    
    return Government.instance;
  }

  addLaw(obj) {
    this.laws.push(obj);
  }

  readConstitution() {
    this.laws.forEach( law => {
      console.log(law);
    })
  }

  readLaw(lawId) {
    console.log(this.laws.filter( law => law.id === lawId));
  }

  showBudget() {
    console.log(this.budget);
  }

  makeCelebration() {
    this.budget -= 50000;
    this.citizensSatisfactions += 5;
  }
}

Government.instance = null;

export default Government;