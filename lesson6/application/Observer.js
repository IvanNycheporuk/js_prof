import Notifier from "./FabricNotifier";

let notifier = new Notifier();

class Observer {
    constructor( clients ){
      let obs = clients.map( obs => {
        return notifier.makeNotifier(obs);
      })
      this.clients = obs;
    }
    sendMessage( msg, baseNode ){
      this.clients.map( ( obs ) => {
        obs.send(msg, baseNode );
      });
    }
  
    addNotifier( notifier ){
      this.clients.push( notifier );
    }
  }
  
  
  export default Observer;