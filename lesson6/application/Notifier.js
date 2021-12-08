class Notifier {
    send( msg, baseNode, block, type ){
        let target = null;
        if( type ){
            let blocks = baseNode.querySelectorAll(`.notifier__item[data-slug="${block}"]`);
            blocks.forEach( block => {
              if( block.dataset.type === type ){
                target = block;
              }
            })
        } else {
          target = baseNode.querySelector(`.notifier__item[data-slug="${block}"]`);
        }
        target.innerHTML += `<div>${msg}</div>`;
    }
  }

  export class SmsNotifier extends Notifier {
    constructor({ type }){
      super();
  
      this.type = type;
    }
  
    send( msg, baseNode, block = 'sms' ){
      if( this.type ){
        if( this.type === 'kyivstar'){
          console.log('send to kyivstar');
          super.send(msg, baseNode, block, this.type);
        }
        if( this.type === 'mts'){
          console.log('send to mts');
          super.send(msg, baseNode, block, this.type);
        }
      } else {
        super.send(msg, baseNode, block);
      }
      ///....
      // fetch('kyivstar.ua/send?...')
      
    }
  }
  
  export class ViberNotifier extends Notifier {
    send( msg, baseNode, block = 'viber'){
      //...
      // fetch('viber.com/send?...')
        super.send(msg, baseNode, block);
    }
  }
  
  export class GmailNotifier extends Notifier {
    send( msg, baseNode, block = 'mail' ){
        // fetch('gmail.com/send?...')
        super.send(msg, baseNode, block);
    }
  }
  
  export class TelegramNotifier extends Notifier {
    send( msg, baseNode, block = 'telegram' ){
        // fetch('telegram.com/send?...')
        super.send(msg, baseNode, block);
    }
  }
  
  export class SlackNotifier extends Notifier {
    send( msg, baseNode, block = 'slack' ){
        // fetch('slack.com/send?...')
        super.send(msg, baseNode, block);
    }
  }  
  
  export default Notifier;
  