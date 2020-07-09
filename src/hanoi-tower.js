module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    /* 
    Дано: 
      кол-во дисков, 
      скорость переноса дисков в час

    Фомула:
      переносы = 2 ^ кол-во дисков - 1

    Вернуть:
      мин кол-во переносов
      мин время перносов

    Решение:
      время переносов (с) = кол-во переносов (шт) / скорость переносов (шт/с)
      seconds (с) = turns (шт) / turnsSpeed (шт/ч) / 3600 
    */

    let turns = Math.pow(2, disksNumber) - 1;
    let seconds = turns / (turnsSpeed / 3600);
    let obj = {
      turns: turns,
      seconds: seconds
    };

    return obj;
}