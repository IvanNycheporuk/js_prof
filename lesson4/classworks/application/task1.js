/*

    Используя методы для создания объектов из задания по композиции написать фабику (HeadHunt), которая будет
    расспределять и создавать сотрудников компании нужного типа.

    Данные для списка сотрудников: http://www.json-generator.com/api/json/get/cfeTmcNIXS?indent=2

    HeadHunt => {
        hire( obj ){
        ...
        }
    }

    Привязать к интерфейсу и вывести на страницу. На кнопку нанять повесить метод hire из фабрики
*/

import {BackendDeveloper, FrontendDeveloper, Designer, ProjectManager} from './Employee';

export default class App{
    constructor(el) {
        this.el = el;
        this.el.classList.add('d-flex', 'flex-wrap')

        this.render();        
    }
    render() {
        fetch('http://www.json-generator.com/api/json/get/cfeTmcNIXS?indent=2').then( response => {
            if (response.ok) {
                return response.json();
            }
        }).then( data => {
            console.log(data);

            data.forEach( item => {
                let card = document.createElement('div');


                card.innerHTML = `
                    <div class="card m-1" style="width: 18rem;">                        
                        <div class="card-body">
                            <h5 class="card-title">Name: ${item.name}</h5>
                            <p class="card-text">Gender: ${item.gender}</p>
                            <p class="card-text">Position: ${item.type}</p>
                            <p class="card-text">Email: ${item.email}</p>
                            <a href="#" class="btn btn-primary _hireBtn">Hire!</a>
                        </div>
                    </div>
                `;

                card.querySelector('._hireBtn').addEventListener('click', (e) => {
                    console.log(e.target);
                })
                this.el.appendChild(card);
            })
            
            // let factory = new HeadHunt();
            // let arr = data.map( item => {
            //     return factory.hire(item);
            // })

            // console.log(arr);
        })
    }
}

class HeadHunt {
    hire( person ){
        let Employee = null;

        switch(person.type) {
            case('backend'):
                Employee = BackendDeveloper;
                break;
            case('frontend'):
                Employee = FrontendDeveloper;
                break; 
            case('project'):
                Employee = ProjectManager;
                break;     
            case('design'):
                Employee = FrontendDeveloper;
                break;   
            default:
                return;
        }

        return new Employee( person );
    }
}

