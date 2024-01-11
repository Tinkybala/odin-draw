//create 16x16 grid of div elements

function createGrid(size){
    let area = document.querySelector("#area");
    for (let i=0; i<size; i++){
        row = document.createElement("div");
        row.classList.add('row');
        row.classList.add(i+1)
        area.appendChild(row);
        for (let j=0; j<size; j++){
            column = document.createElement("div");
            column.classList.add('column');
            column.classList.add(j+1);
            row.appendChild(column);
        }
    }

    //add event handler to change div pixel color when mouse enters

    let divArray = Array.from(document.querySelectorAll(".column"));

    for (let i=0; i < size**2; i++){
        divArray[i].addEventListener("mouseenter", ()=>{
            divArray[i].style.backgroundColor = "black";
        })
        divArray[i].addEventListener("mouseleave", ()=>{
            divArray[i].style.backgroundColor = "white";
        })
    }
}


createGrid(16);

//button to change resolution

let button = document.querySelector("button");

button.addEventListener("click", ()=>{
    let size = prompt("Enter grid size < 100!", 16);
    while (size > 100){
        size = prompt("Exceeded size limit!");
    }
    let grid = document.querySelector("#area");
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }

    createGrid(size);
})
