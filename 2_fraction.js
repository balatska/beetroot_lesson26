// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, 
// и следующие функции для работы с этим объектом: 
// Функция сложения 2-х объектов-дробей;
// Функция вычитания 2-х объектов-дробей;
// Функция умножения 2-х объектов-дробей;
// Функция деления 2-х объектов-дробей;
// Функция сокращения объекта-дроби.

let fraction = {
    numerator1: +prompt("Числитель первой дроби"),
    denominator1: +prompt("Знаменатель первой дроби"),
    numerator2: +prompt("Числитель второй дроби"),
    denominator2: +prompt("Знаменатель второй дроби"),

    findCommonDivider() {
        let maxDenominator = Math.max(this.denominator1, this.denominator2);
        for (let i = 1; i >= 1; i++) {
            if ((maxDenominator*i % this.denominator1 == 0) && (maxDenominator*i % this.denominator2 == 0)) {
                return maxDenominator * i;
            }
        }
    },

    addFractions() {

    },

    subtractFractions() {

    },

    multiplyFractions() {

    },

    divideFractions() {

    },

    simplifyFractions() {
        return `${Math.floor(this.numerator1 / this.denominator1)} ${this.numerator1 % this.denominator1}/${this.denominator1}`;
    },

}
console.log(fraction.findCommonDivider());
console.log(fraction.simplifyFractions());

// let fraction = {
//     numerator: 1,
//     denominator: 3,
//     toStr: function() {
//       return `${this.numerator} / ${this.denominator}`;
//     },
//     val: function() {
//       return this.numerator / this.denominator;
//     },
  
//     show: function() {
//       for (let key in this) {
//         if (typeof this[key] == "function") {
//           continue;
//         }
//         console.log(key, this[key]);
//       }
//     }
//   }
  
//   console.log(fraction);
//   console.log(fraction.toStr());
//   console.log(fraction.val());
//   fraction.show();
  
//   console.log(window);
//   console.log(document.location);