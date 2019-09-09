import DeepFreeze from './classworks/objectfreeze';
import Government from './classworks/singleton';

// #########################################
// DeepFreeze

let universe = {
    infinity: Infinity,
    good: ['cats', 'love', 'rock-n-roll'],
    evil: {
      bonuses: ['cookies', 'great look'],
      test: {
          test1: 'asdasdasd',
          test2: [1,2,3,4,5]
      }
    }
  };

DeepFreeze(universe);

//universe.evil.test.test2.push('asd');
//universe.test = 'asdasd';

console.log(universe);

// #########################################
// Singleton

let government = new Government();

government.addLaw({id: 1, text: 'increase taxes'});

government.readLaw(1);

government.readConstitution();

government.makeCelebration();

government.showBudget();