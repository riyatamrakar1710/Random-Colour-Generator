function newColorFind() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}
console.log(newColorFind());
document.getElementById("box1").style.backgroundColor = newColorFind();
document.getElementById("box2").style.backgroundColor = newColorFind();
document.getElementById("box3").style.backgroundColor = newColorFind();
document.getElementById("box4").style.backgroundColor = newColorFind();
document.getElementById("box5").style.backgroundColor = newColorFind();
document.getElementById("box1").style.color = newColorFind();
document.getElementById("box2").style.color = newColorFind();
document.getElementById("box3").style.color = newColorFind();
document.getElementById("box4").style.color = newColorFind();
document.getElementById("box5").style.color = newColorFind();