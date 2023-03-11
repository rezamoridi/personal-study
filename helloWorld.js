function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    return ("Current Time:")+("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}
function date(){
    var today = new Date();
    var day = today.getDay();
    var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    return ("Today is : "+daylist[day])
}
function print_current_page(){
    window.print()
}
function triangel() {
    var x = document.getElementById("searchTxt").value;
    let h = parseInt(x);
    document.getElementById("outp").innerHTML = h+2;
}

document.getElementById("pcp").onclick = print_current_page;
document.getElementById("time").innerHTML=time();
document.getElementById("date").innerHTML=date();