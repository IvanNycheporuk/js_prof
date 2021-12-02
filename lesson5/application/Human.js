export default class Human {
    constructor(name){
      this.name = name;
      this.currentTemperature = 0;
      this.minTemperature = -10;

      console.log(`new Human ${this.name} arrived!`, this);
    }

    changeTemperature(changeValue){
      console.log(
        'current', this.currentTemperature + changeValue,
        'min', this.minTemperature
      );

      let prevTemperature = this.currentTemperature;
      this.currentTemperature += changeValue;

      if( this.currentTemperature < this.minTemperature ){
        console.error(`Temperature is to low: ${this.currentTemperature}. ${this.name} died :(`);
      } else {
        if( this.currentTemperature > prevTemperature  ) {
          console.log(`Temperature is growing. Seems someone go to Odessa or drink some hot tea?`)
        } else {
          console.log(`It's cold outside (${this.currentTemperature} deg), please wear some clothes, or ${this.name} will die!`);
        }
      }
    }
  }