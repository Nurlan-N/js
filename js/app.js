
function Show(){
    document.getElementById('full_n').innerHTML = '<i>Nurlan Nazarov</i>'

}
function click_mode(){
    var body = document.body.style;
    var button = document.getElementById('mode');

    if (body.backgroundColor === 'black') {
        body.backgroundColor = 'white';
        body.color = 'black';
        button.style.color = 'black'

    }else{
        body.backgroundColor = 'black'
        body.color = 'white'
        button.style.color = 'white'

    }
}
var tarix = new Date();
var month = tarix.getMonth();
var h = tarix.getHours();
var m = tarix.getMinutes();
var local_time = (`${h}:${m}`)
var hour = tarix.getHours();



if (hour > 6 && hour <= 12) {
    alert(`${"Saat : "} ${local_time} ${"Sabahın Xeyir"}`);
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
 
} else if (hour > 12 && hour <= 17) {
    alert(`${"Saat : "} ${local_time} ${"Günortan  Xeyir"}`);
    document.body.style.backgroundColor = 'yellow'
    document.body.style.color = 'white'
 
} else if (hour > 17 && hour <= 24) {
    alert(`${"Saat : "} ${local_time} ${"Axşamin Xeyir"}`);
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}else if (hour >= 0 && hour <= 6){
    alert(`${"Saat : "} ${local_time} ${"Niyə yatmırsan"}`);

}


//////////////////////////////////////////////

var r = 8;
var s = Math.pow(r,2)*Math.PI;

console.log(s);
