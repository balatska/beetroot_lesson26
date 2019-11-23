// Создать объект, описывающий время (часы, минуты, секунды), 
// и следующие функции для работы с этим объектом: 
// Функция вывода времени на экран;
// Функция изменения времени на переданное количество секунд;
// Функция изменения времени на переданное количество минут;
// Функция изменения времени на переданное количество часов. 
// Учтите, что в последних 3-х функциях, при изменении одной части времени, 
// может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, 
// то должно получиться «20:31:15», а не «20:30:75».

let time = {
    hours: +prompt("Введите часы"),
    minutes: +prompt("Введите минуты"),
    seconds: +prompt("Введите секунды"),

    showTime() {
        timeNormalize();
        for (key in this) {
            if (typeof this[key] == "function") {
                continue;
            } else if (this[key] == 0) {
                this[key] = `00`;
            } else if (this[key] < 10) {
                this[key] = `0${this[key]}`;
            } else {
                this[key];
            }
        }
        console.log(`Время - ${this.hours} : ${this.minutes} : ${this.seconds}`);
    },
    
    addSecond() {
        this.seconds = +this.seconds + Math.abs(prompt('На сколько секунд изменить время?'));
            timeNormalize();
            this.showTime();
    },

    addMinutes() {
        this.minutes = +this.minutes + Math.abs(prompt('На сколько минут изменить время?'));
            timeNormalize();
            this.showTime();
    },

    addHours() {
        this.hours = +this.hours + Math.abs(prompt('На сколько часов изменить время?'));
            timeNormalize();
            this.showTime();
    },
}

function timeNormalize() {
    time.minutes = +time.minutes + Math.floor(time.seconds / 60); 
    time.seconds%= 60;
    time.hours = +time.hours + Math.floor(time.minutes / 60); 
    time.minutes%= 60;
    time.hours%= 24;
}

time.showTime();
time.addSecond();
time.addMinutes();
time.addHours();
