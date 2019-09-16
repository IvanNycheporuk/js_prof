/*
  Composition:

  Задание при помощи композиции создать объекты 4х типов:

  functions:
    - MakeBackendMagic
    - MakeFrontendMagic
    - MakeItLooksBeautiful
    - DistributeTasks
    - DrinkSomeTea
    - WatchYoutube
    - Procrastinate

  BackendDeveloper = MakeBackendMagic + DrinkSomeTea + Procrastinate
  FrontendDeveloper = MakeFrontendMagic + DrinkSomeTea + WatchYoutube
  Designer = MakeItLooksBeautiful + WatchYoutube + Procrastinate
  ProjectManager = DistributeTasks + Procrastinate + DrinkSomeTea

  ProjectManager(name,gender,age) => { name, gender, age, type: 'project'}

*/


const MakeBackendMagic = (state) => ({
  makeBackEndMagic: () => {
    console.log(`${state.name} could make backend magic, ask him him to do so :)`);
  }
});

const MakeFrontendMagic = (state) => ({
  makeFrontEndMagic: () => {
    console.log(`${state.name} could make frontend magic`);
  }
});

const MakeItLooksBeautiful = (state) => ({
  makeItLooksBeautiful: () => {
    console.log(`Yes, this guy ${state.name} could make it beautiful`);
  }
});

const DistributeTasks = (state) => ({
  distributeTasks: () => {
    console.log('#################');
    console.log(`Hey ${state.name}, who is ${state.age} years old, ${state.gender} gender, please, destribute tasks on ${state.type} project`);
  }
});

const DrinkSomeTea = (state) => ({
  drinkSomeTea: () => {
    console.log(`${state.name} is drinking tea now`);
  }
});

const WatchYoutube = (state) => ({
  watchYoutube: () => {
    console.log(`${state.name} is going to watch youtube at work`);
  }
});

const Procrastinate = (state) => ({
  procrastinate: () => {
    console.log(`Yeah, this guy ${state.name} likes to procrastinate :)`);
  }
});

// Objects

const BackendDeveloper = (name) => {
  let state = {
    name: name
  }

  return Object.assign(
    {},
    state,
    MakeBackendMagic(state)
  )
} 

function FrontendDeveloper(name) {
  this.name = name;

  return Object.assign(
    this,
    MakeFrontendMagic(this),
    DrinkSomeTea(this),
    WatchYoutube(this)
  )
}

function Designer(name) {
  this.name = name;

  return Object.assign(
    this,
    MakeItLooksBeautiful(this),
    WatchYoutube(this),
    Procrastinate(this)
  )
}

function ProjectManager(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.type = 'Financial';

  return Object.assign(
    this,
    DistributeTasks(this),
    Procrastinate(this),
    DrinkSomeTea(this)
  )
}

const Back = BackendDeveloper('Back');
const Front = FrontendDeveloper('Front');
const Design = Designer('Designer');
const PM = ProjectManager('PM', 'male', 34);

Back.makeBackEndMagic();
Front.drinkSomeTea();
Design.makeItLooksBeautiful();
PM.distributeTasks();
