let initialPos = {};

addEventListener('DOMContentLoaded', (event) => {
    for (let i = 1; i <= 12; i++) {
        const plantElement = document.getElementById('plant' + i);
        if (plantElement) {
            const style = window.getComputedStyle(plantElement);
            initialPos['plant' + i] = {
                top: style.getPropertyValue('top'),
                left: style.getPropertyValue('left'),
            }
        }
    }
    console.log(initialPos)
});

console.log(initialPos)
console.log("hihihii")

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }
    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        pos3 = e.clientX;
        pos4 = e.clientY;
    }
    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null; 
    }
}

function resetPositions() {
    for (let i = 1; i <= 12; i++) {
        const plantElement = document.getElementById('plant' + i);
        if (plantElement && initialPos['plant' + i]) {
            plantElement.style.top = initialPos['plant' + i].top;
            plantElement.style.left = initialPos['plant' + i].left;
            }
        }
}

const myButton = document.getElementById("reset-button")
myButton.addEventListener("click", resetPositions);

dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));