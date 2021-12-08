// 1. Используя функциональный декоратор, написать декоратор который будет показывать
// аргументы и результат выполнения функции.

const basicFunc = (func) => {
    return (...args) => {
        console.log('basicFunc', args);

        func.apply(this, args);

        return this;
    }
}

function ShowArgs(){}

ShowArgs.prototype.showArguments = basicFunc((...args) => {
    console.log(args);
} );

let test = new ShowArgs();

test.showArguments(1,2,3,4);

