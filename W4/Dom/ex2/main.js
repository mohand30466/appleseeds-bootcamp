var buttom2 = document.getElementsByClassName("btn");
min = (btn)[0];
max = (btn)[1];

function fontSize() {
    min.addEventListener("click", text);
    max.addEventListener("click", text);
    size = document.getElementById("text").value;
    size.style.fontsize = "16px";
    min = size++;
    max = size--;



}