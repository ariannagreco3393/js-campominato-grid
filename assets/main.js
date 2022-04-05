/* 
L'utente indica un livello di difficoltà in base al quale viene generata una griglia 
di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:

con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/


document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const level = document.getElementById('level').value
    console.log(level);

    if (level == 'facile') {

        generateGrid('.cells', 'div', 'cell', 100, 10) 

    } else if (level == 'medio') {

        generateGrid('.cells', 'div', 'cell', 81, 9)  

    } else if (level == 'difficile') {
        
        generateGrid('.cells', 'div', 'cell', 49, 7) 

    }

})

 




//creo una funzione generica che mi serve per creare le varie griglie
function generateGrid(selector, tag_name, class_name, limit, cols_number) {
    const cellsElement = document.querySelector(selector)
    cellsElement.innerHTML = '';
    for (let i = 1; i <= limit; i++) {
        const cellItem = document.createElement(tag_name);
        cellItem.classList.add(class_name);

        // larghezza delle celle nel css dinamica
        cellItem.style.width = `calc(100% / ${cols_number})`

        cellItem.innerHTML = i;
        cellsElement.append(cellItem)
    }
};

    




// funzione colore azzurro
function color() {
//selezionare tutte le celle
   const cells = document.querySelectorAll('.cell');
   console.log(cells);

//ciclare gli elementi della dom
   for (let i = 0; i < cells.length; i++) {
       const cellElement = cells[i];

// event listener
    cellElement.addEventListener('click', function() {
        //console.log(this);
        //colorare la cella
        this.style.backgroundColor = 'cornflowerBlue'

    });
       
   }
};




