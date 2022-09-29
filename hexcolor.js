//generating hex number using Math.random
function getColor(){
    //to.String to convert number to string
    return "#" + Math.random().toString(16).slice(2,8);
    //slice() to remove 0 and . and limit result to 6
}

//background color style
function setBackground(){
    let bgColor = getColor();
    document.body.style.background = bgColor;
}

//function press space
document.body.onkeyup = function(e){
    if (e.keyCode == 32){
        setBackground();
    }
}



console.log(getColor());