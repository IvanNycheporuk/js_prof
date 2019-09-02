
/*

    Задание, написать класс, который создает объекты по модельке:
    Dog {
        name: "", -> not configurable
        breed: "", -> not configurable, not editable
        weight: "",
        isGoodBoy: true -> enumerable 
    }   

*/

class Dog {
    constructor(name, breed, weight, isGoodBoy) {
        Object.defineProperty(this, 'name', {
            value: name
        });

        Object.defineProperty(this, 'breed', {
            value: breed            
        });

        Object.defineProperty(this, 'weight', {
            value: weight            
        });

        Object.defineProperty(this, 'isGoodBoy', {
            value: isGoodBoy,
            enumerable: true            
        });
    }    
}

let test = new Dog('test', 'breed', 'weight', 'false');

console.log(test);