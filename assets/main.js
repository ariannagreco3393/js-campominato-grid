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
    cellsElement.innerHTML = '';
    for (let i = 1; i <= limit; i++) {
        const cellItem = document.createElement(tag_name);
        cellItem.classList.add(class_name);
        cellItem.innerHTML = i;
        cellsElement.append(cellItem)
    }
}  



// creo una funzione che mi permetta di selezionare ID della select
function difficultLevel() {
    let valore = document.getElementById('level_difficult').value;
    console.log(valore);
}


// al click del play attivo la funzione per selezionare uno dei value
let playButton = document.querySelector('.play');
playButton = document.addEventListener('click', difficultLevel())

generateGrid('.cells', 'div', 'cell', 100); 


