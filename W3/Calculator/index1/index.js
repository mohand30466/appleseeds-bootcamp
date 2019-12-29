// const calck = document.querySelector("#calck");
const addToscreen = (numToAd) => {
    const lcd = document.querySelector("#screen");
    if (numToAd != '=') {
        lcd.value += numToAd;
    } else {

        lcd.value = eval(lcd.value);



    }

}

//  math.evaluate
// const cls = () => {
//     const lcd = document.querySelector("#screen");
//     lcd.value = '';
// }
// const power = () => {
//     v
//     if (calck.className.includes("off")) {
//         calck.classList.remove("off");

//     } else {
//         calck.classList.add("off");
//         cls();

//     }
//     const clickcalck = () => {

//     }



// }