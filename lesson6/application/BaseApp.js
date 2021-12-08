import Observer from "./Observer";

class BaseApp {
    constructor( notifiers ) {
        this.notifierTargets = notifiers;
        this.notifier = new Observer( this.notifierTargets );
        this.createInterface = this.createInterface.bind(this);
        this.node = null;
    }
  
    createInterface(){
        const root = document.getElementById('root');
        const AppNode = document.createElement('section');

        AppNode.className = 'notifer_app';
        AppNode.innerHTML =
        `
        <div class="notifer_app--container">
            <header>
            <input class="notifier__messanger" type="text"/>
            <button class="notifier__send">Send Message</button>
            </header>
            <div class="notifier__container">
            ${
            this.notifierTargets.map( item =>
                `
                <div class="notifier__item" data-slug="${item.name}" data-type="${item.type}">
                <header class="notifier__header">
                    <img width="25" src="${item.image}"/>
                    <span>${item.name}</span>
                </header>
                <div class="notifier__messages"></div>
                </div>
                `).join('')
            }
            </div>
        </div>
        `;
        const container = AppNode.querySelector('.notifier__container');
        const btn = AppNode.querySelector('.notifier__send');
        const input = AppNode.querySelector('.notifier__messanger');
        btn.addEventListener('click', () => {
            let value = input.value;
            this.notifier.sendMessage( value, container );
        });

        this.node = AppNode;
        root.appendChild(AppNode);
    }  
}

export default BaseApp;