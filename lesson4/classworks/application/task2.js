/*
    Задание:  Открыть файл task1.html в папке паблик и настроить светофоры в
                соответсвии с правилавми ниже:

    1. Написать кастомные события которые будут менять статус светофора:
    - start: включает зеленый свет
    - stop: включает красный свет
    - night: включает желтый свет, который моргает с интервалом в 1с.
    И зарегистрировать каждое через addEventListener на каждом из светофоров.

    2.  Сразу после загрузки на каждом светофоре вызывать событие night, для того,
        чтобы включить режим "нерегулируемого перекрестка" (моргающий желтый).

    3.  По клику на любой из светофоров нунжо включать на нем поочередно красный (не первый клик)
        или зеленый (на второй клик) цвет соотвественно.
        Действие нужно выполнить только диспатча событие зарегистрированое в пункте 1.

    4.  + Бонус: На кнопку "Start Night" повесить сброс всех светофоров с их текущего
        статуса, на мигающий желтые.
        Двойной, тройной и более клики на кнопку не должны вызывать повторную
        инициализацию инвервала.
*/

document.addEventListener('DOMContentLoaded', () => {
    var nightBtn = document.getElementById('Do');

    let startEvent = new CustomEvent('start');
    let stopEvent = new CustomEvent('stop');
    let nightEven = new CustomEvent('night');
    
    var allLights = document.querySelectorAll('.trafficLight');

    nightBtn.addEventListener('click', () => {
        allLights.forEach(light => light.dispatchEvent(new CustomEvent('night', {
            detail: {runningFromBtn: true}
        })));
    });
    
    allLights.forEach(light => {
        light.counter = 1;
        var nightInterval = null;
        var nightMode = false;
    
        light.addEventListener('click', () => {
            console.log(`${light.dataset.traficid} was clicked!`);
            if (light.counter % 2 != 0) {
                light.dispatchEvent(startEvent);
            }

            if (light.counter % 2 == 0) {
                light.dispatchEvent(stopEvent);
            }
            
            light.counter ++;

            console.log(light.counter);        
        });
    
        light.addEventListener('start', () => {
            //debugger;
            if (nightInterval) {
                clearInterval(nightInterval);
            }
            console.log(`${light.dataset.traficid} green light!`);
            light.className = 'trafficLight green';            
        });

        light.addEventListener('stop', () => {
            console.log(`${light.dataset.traficid} red light!`);
            light.className = 'trafficLight red'
        });

        light.addEventListener('night', (event) => {
            if(nightMode) {
                return;
            }

            console.log(`${light.dataset.traficid} yellow light!`);
            light.classList.remove('green', 'red');
    
            nightInterval = setInterval(() => {
                light.classList.toggle('yellow');
            }, 1000);

            if (event.detail?.runningFromBtn) {
                nightMode = true;
            }
        });

        light.dispatchEvent(nightEven);
    });
});
