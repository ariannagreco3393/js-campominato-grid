/* 
L'utente indica un livello di difficoltà in base al quale viene generata una griglia 
di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:

con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

//creo una funzione generica che mi serve per creare le varie griglie
function generateGrid(selector, tag_name, class_name, limit) {
    const cellsElement = document.querySelector(selector)

    for (let i = 1; i <= limit; i++) {
        const cellItem = document.createElement(tag_name);
        cellItem.classList.add(class_name);
        cellsElement.append(cellItem)
    }
}  

// prendo la funzione che crea numeri random
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

//creo una funzione che generi numeri
function generateCellsNumbers(number1, number2) {
    const randomNumbers = [];

    while (randomNumbers.length !== number2) {
        const randomNumber = getRandomInteger(number1, number2)

        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber)
          }
    }
    //console.log(randomNumbers);

    return randomNumbers;
}



// creo una funzione che mi permetta di selezionare ID della select
function difficultLevel() {
    let valore = document.getElementById('level_difficult').value;
}

difficultLevel();


// al clicl del play attivo la funzione per selezionare uno dei value
let playButton = document.querySelector('play');
playButton = document.addEventListener('click', difficultLevel)

// aggiungo i numeri alle celle
function selectElements(cell) {
    const cells = document.querySelector(cell)
    const numbers = generateCellsNumbers()

    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];

        const spanElement = document.createElement('span')
        spanElement.append(numbers[i])
        cell.append(spanElement)
        
    }
}



//invoco la funzione che chiama la griglia da 100 
generateGrid('.cells', 'div', 'cell', 100);
generateCellsNumbers(1, 100)