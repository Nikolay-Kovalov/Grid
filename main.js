const a = 16;
console.log(a.toString(2))
const b = 1010001010000;
console.log(parseInt(b,2))

const numbersToAdd = document.querySelector('.grid-item1').querySelectorAll('span');
const numbersToAdd2 = document.querySelector('.grid-item4').querySelectorAll('span');
const numbersToMult = document.querySelector('.sub-grid1').querySelectorAll('span');
const numbersToMult1 = document.querySelector('.sub-grid4').querySelectorAll('span');
const resultGrid = document.querySelector('.grid-item2');
const resultGrid1 = document.querySelector('.grid-item5');
const multGrid = document.querySelector('.grid-item3');
const multGrid1 = document.querySelector('.grid-item6');




let addResult = 0;
let addResult1 = 0;
numbersToAdd.forEach(item => {
    addResult += parseInt(item.textContent, 2);
})


numbersToAdd2.forEach(item => {
    addResult1 += parseInt(item.textContent,2)
})

resultGrid.textContent = addResult.toString(2);
resultGrid1.textContent = addResult1.toString(2);



let multresult = 0;
let multresult1 = 0;

numbersToMult.forEach(item => {
    multresult += parseInt(item.textContent,2)
})
numbersToMult1.forEach(item => {
    multresult1 += parseInt(item.textContent,2)
})

let total = multresult * addResult;

let total1 = multresult1 * addResult1;


multGrid.textContent = total.toString(2)
multGrid1.textContent = total1.toString(2)
