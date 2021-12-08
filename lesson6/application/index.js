// import Application from './BaseApp';

// const NotifierApp = new Application(
//     [
//         {name: 'sms', image: 'images/sms.svg', type: 'kyivstar'},
//         {name: 'sms', image: 'images/sms.svg', type: 'mts'},
//         {name: 'mail', image: 'images/gmail.svg'},
//         {name: 'telegram', image: 'images/telegram.svg'},
//         {name: 'viber', image: 'images/viber.svg'},
//         {name: 'slack', image: 'images/slack.svg'}
//     ]
//   );
// NotifierApp.createInterface();

import CoolMath from './task3/part2';

let test = new CoolMath();

test.addNumbers(1, 2);
let x = test.addNumbers(2, 2)
let y = test.multiplyNumbers("10", "2")
let z = test.minusNumbers(10, 2)
let q = test.minusNumbers('qwe', 2)
let p = test.minusNumbers(2, 'qwe');

console.log(x, y, z, q, p);
