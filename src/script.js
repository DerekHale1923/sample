/*
let secretNumber = Math.floor(Math.random() * 100)
console.log(secretNumber)

function CheckSecretNumber(secretNumber) {
    let left = 0
    let right = 100

    while (left <= right){
        let middle = Math.floor((left + right) / 2)

        if(middle === secretNumber) {
            console.log(`Компьютер 2: Пробую число ` + secretNumber)
            return console.log('Компьютер 1: Угадал!')

        }
        if(middle < secretNumber){
            console.log('Компьютер 2: Пробую число' + middle)
            console.log('Компьютер 1: Больше')
            left = middle + 1
        }
        if(middle > secretNumber){
            right = middle - 1
            console.log('Компьютер 2: Пробую число' + middle)
            console.log('Компьютер 1: Меньше')
        }
    }
}

CheckSecretNumber(secretNumber)*/

