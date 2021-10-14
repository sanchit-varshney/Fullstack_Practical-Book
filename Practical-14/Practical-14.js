var data = 0;
var btn = document.getElementById("neg");  
 
function increment() {
    btn.disabled = false;
    data = data + 1;
    document.getElementById("count").innerText = data;
}
 
function decrement() {
    data = data - 1;
    document.getElementById("count").innerText = data;
    if(data == 0){
         btn.disabled = true;
    }
}