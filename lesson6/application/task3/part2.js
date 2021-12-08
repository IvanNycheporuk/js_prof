// 2. Написать декоратор для класса, который будет преобразовывать аргументы в число,
// если они переданы строкой, и выводить ошибку если переданая переменная не
// может быть преобразована в число

class Math {
    addNumbers = (a, b) => a + b;
    multiplyNumbers = (a, b) => a * b
    minusNumbers = (a, b) => a - b
}

class CoolMath extends Math {
    addNumbers = (a, b) => { 
        if (!this.convertToInt(a, b)) {
            console.warn('params are not convering to int!');
            return;
        }

        return a + b; 
    }

    multiplyNumbers = (a, b) => { 
        if (!this.convertToInt(a, b)) {
            console.warn('params are not convering to int!');
            return;
        }

        return a * b;
    }

    minusNumbers = (a, b) => { 
        if (!this.convertToInt(a, b)) {
            console.warn('params are not convering to int!');
            return;
        }

        return a - b;
    }

    convertToInt(a, b) {
        if (isNaN(a) || isNaN(b)) {
            return false;
        }

        return true;
    }
}

export default CoolMath