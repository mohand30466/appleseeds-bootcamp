function check() {
    var ques1 = document.quez.question1.value;
    var ques2 = document.quez.question2.value;
    var ques3 = document.quez.question3.value;
    var ques4 = document.quez.question4.value;
    var correct = 0;
    if (ques1 == "Eilat") {
        correct++;

    }
    if (ques2 == "Plain") {
        correct++;

    }
    if (ques3 == "My mam") {
        correct++;

    }
    if (ques4 == "java script") {
        correct++;

    }
    var message = ["excelant", "good jop", "that is okey", "you need to be better"];
    var picture = ["win.gif", "win.gif", "middle2.gif", "good.gif", ]
    var range;
    if (correct < 1) {
        range = [3];

    }
    if (correct == 1) {
        range = [3];

    }
    if (correct == 2) {
        range = [2];

    }
    if (correct == 3) {
        range = [1];

    }
    if (correct > 3) {
        range = [0];

    }
    document.getElementById("message").innerHTML = message[range];

    document.getElementById("submit").style.visibility = "visible";
    document.getElementById("score").innerHTML = `you got ${correct} correct`;
    document.getElementById("picture").src = picture[range];


}