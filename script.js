const hexArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

document.body.style.backgroundImage = "linear-gradient(rgba(255,0,0,1), rgba(255,0,0,0))";

function func() {
    let firstColor = "#";
    let secondColor = "#";
    for(let i = 0; i < 6; i++) {
        let currIndex = Math.floor(Math.random() * 16);
        firstColor += hexArr[currIndex];    
    }
    for(let i = 0; i < 6; i++) {
        let currIndex = Math.floor(Math.random() * 16);
        secondColor += hexArr[currIndex];    
    }
    document.body.style.backgroundImage = `linear-gradient(${firstColor} , ${secondColor})`;
    document.querySelector("#firstColor").textContent = firstColor;
    document.querySelector("#secondColor").textContent = secondColor;
}