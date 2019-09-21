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

//   function Employee() {
//       this.render = () => {
//         let s = '';
//         s = `${this.state.name}`;

//         console.log(s);
//       }
//   }
  
  function BackendDeveloper (name) {
    this.name = name;
  
    return Object.assign(
      this,
      MakeBackendMagic(this)
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

  export {BackendDeveloper, FrontendDeveloper, Designer, ProjectManager}

