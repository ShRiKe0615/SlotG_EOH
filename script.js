const matrix = [
    [1, 11, 1, 2, 1],
    [1, 11, 1, 2, 1],
    [7, 11, 8, 9, 8]
];
const paylines = [
    [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4]], // payline 1
    [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]], // payline 2
    [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4]], // payline 3
    [[0, 0], [1, 1], [2, 2], [1, 3], [0, 4]], // payline 4
    [[2, 0], [1, 1], [0, 2], [1, 3], [2, 4]], // payline 5
    [[1, 0], [0, 1], [0, 2], [0, 3], [1, 4]], // payline 6
    [[1, 0], [2, 1], [2, 2], [2, 3], [1, 4]], // payline 7
    [[0, 0], [0, 1], [1, 2], [2, 3], [2, 4]], // payline 8
    [[2, 0], [2, 1], [1, 2], [0, 3], [0, 4]], // payline 9
    [[1, 0], [1, 1], [2, 2], [1, 3], [1, 4]], // payline 10
];

const itemcval3 = {0: 5, 1: 5, 2: 5, 3: 5, 4: 10, 5: 10, 6: 20, 7: 20, 8: 50, 9: 100, 10: 20};
const itemcval4 = {0: 20, 1: 20, 2: 20, 3: 20, 4: 50, 5: 50, 6: 100, 7: 125, 8: 200, 9: 250, 10: 200};
const itemcval5 = {0: 100, 1: 100, 2: 100, 3: 100, 4: 200, 5: 200, 6: 250, 7: 300, 8: 400, 9: 500, 10: 500};
const valuedict = {3: itemcval3, 4: itemcval4, 5: itemcval5};

// function checkbonus(matrix) //function to check scatter bonus game
// {
//     const count = matrix.flat().filter(value => value === 10).length;
//     return count >= 3 ? 1 : 0;
// }
// console.log(checkbonus(matrix));

let winamt = 0;
let finalresult = [];
let result = [];
for (let paylineIndex = 0; paylineIndex < paylines.length; paylineIndex++) 
{
    const payline = paylines[paylineIndex];
    let count = 0;
    let match = false;
    let element = 0;
    let totalpay = 0;
    element = matrix[payline[0][0]][0];
    for (let i = 0; i < payline.length; i++) 
    {
        let [row, col] = payline[i];
        if (matrix[row][col] === element || matrix[row][col] === 11) // 11 is for wild
        { 
            count++;
            if (count >= 3)
                match = true;
        } 
        else
            break;
    }
    if (match) 
    {
        totalpay = valuedict[count][String(element)];
        winamt += totalpay;
        result.push(paylineIndex+1);
        console.log(`Payline ${paylineIndex + 1} matches with element ${element} and count: ${count} and winamt: ${winamt}`);
    }
}
finalresult.push(result);
finalresult.push(winamt);
console.log(finalresult);