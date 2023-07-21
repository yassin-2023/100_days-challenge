var yourName = prompt("inter your name");
var NameCrash = prompt("inter Your nam Crash");
var nYu = Math.random();
nYu = nYu * 1;
var nCr = Math.random();
nCr = nCr * 100;

var rez = nCr + nYu;
rez=Math.floor(rez);

if(rez > 50){
    alert(yourName+" w "+NameCrash+" = "+rez+"% yaktrtan xosh awet nera kar awa chdakait");
} else {
    
alert(yourName+" w "+NameCrash+" = "+rez+"% yaktrtan xosh awet taqriban");
}