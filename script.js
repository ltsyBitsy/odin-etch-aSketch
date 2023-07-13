const section = document.querySelector('section');

const container = document.createElement('div');
container.setAttribute('id', 'grid');
container.style.height = '100px';
container.style.aspectRatio = 1 / 1;
section.appendChild(container);

const gridNumber = 7;

const gridHeight = parseInt(container.style.height) / gridNumber + 'px';
 console.log(gridHeight);
let row = undefined;
for (let i = 0; i < gridNumber **2; i++) {
    row = document.createElement('div');
    row.style.border = 'thin dotted hsl(210, 5%, 85%)';
    row.style.height = gridHeight;
    row.style.aspectRatio = 1 / 1;
    console.log(row.style.height);
    row.setAttribute('id', 'row');
    container.appendChild(row);

}

const drawing = document.querySelector('#row');
drawing.addEventListener('mouseover', () => {
    drawing.style.backgroundColor = "hsl(280, 10%, 25%)";
    })


// for (i = 0; i < gridNumber; i++) {
//     const grid = document.createElement('div');
//     grid.style.border = 'thin dotted black';
//     grid.setAttribute('id', 'column');
//     container.appendChild(grid);
// }
