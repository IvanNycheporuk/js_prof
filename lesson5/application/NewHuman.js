import Human from './Human';

class NewHuman extends Human {
    constructor(name) {
        super(name);

        this.coolers = [
            {name: 'icecream', temperatureCoolRate: -5},
            {name: 'water', temperatureCoolRate: -10},
            {name: 'icetea', temperatureCoolRate: -15},
            {name: 'cooler', temperatureCoolRate: -25}
        ]
    }

    changeTemperature(changeValue){
        console.log(
          'current', this.currentTemperature + changeValue,
          'min', this.minTemperature
        );
  
        //let prevTemperature = this.currentTemperature;
        this.currentTemperature += changeValue;

        if ( this.currentTemperature < 0 ){
            console.error(`Temperature is to low: ${this.currentTemperature}. ${this.name} died :(`);
            return;
        }  

        if ( this.currentTemperature > 50 ) {
            console.error(`${this.name} зажарился на солнце :(`)
            return;
        } 

        if (this.currentTemperature > 30) {
            let overTemp = 30 - this.currentTemperature;
            let cooler = this.coolers.find(c => c.temperatureCoolRate > overTemp);

            this.currentTemperature += cooler.temperatureCoolRate;

            console.log(`Temperature is: ${this.currentTemperature}. ${this.name} was freshed with ${cooler.name}`);
            return;
        }
        
        console.log(`temp was changed on ${changeValue}, but ${this.name} is ok :)`);        
    }
}

export default NewHuman;