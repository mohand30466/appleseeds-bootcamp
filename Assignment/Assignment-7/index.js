
const myCv = {};
myCv.start = () => {
    myCv.myinformation();
    myCv.photos();
    myCv.hopies();
    myCv.Knowledge();
}
let information = [
    "Name : mohand abdalmoneim",
    "age: 30 ",
    "email : mohand30466@gmail.com ",
    "address: tell aviv "
]
myCv.myinformation = () => {
    let inform = document.getElementById("myInfo");
    inform.addEventListener("click", myCv.information = () => {
        for (let i = 0; i < information.length; i++) {
            let p = document.createElement('p')
            p.innerHTML = information[i]
            document.querySelector(".show").appendChild(p);
            console.log(information[i]);
        }
    })
}

myCv.photos = () => {
    let photo = document.getElementById("photos");
    photo.addEventListener("click", myCv.photos = () => {
        let myphotos = document.createElement("div")
        myphotos.classList.add("new-imge")
        myphotos.innerHTML = '<img  id = "img"src="my-img/myimg.jpg" />'
        document.querySelector(".show").appendChild(myphotos);
    })
}
////////////////////////////////////////////////////////
let hopy =[
    "play and watch foot pall",
     "watch movies",
     "play ticondo",
     "reading books",
      "cooding"]

myCv.hopies = () => {
    let hop = document.getElementById("hopies");
    hop.addEventListener("click", myCv.hopie = () => {
        for (let i = 0; i < hopy.length; i++) {
          
        let myhopey = document.createElement("p")
        myhopey.innerHTML = hopy[i]
        document.querySelector(".show").appendChild(myhopey);
        }
    })
}
//////////////////////////////////////////////////////////
let Knowledge =[
    "Hight school in sudan",
     "comptia A+",
     "Java program languge",
     "and now in bootcamp"
      ]

myCv.Knowledge = () => {
    let knoldg = document.getElementById("Knowledge");
    knoldg.addEventListener("click", myCv.Knowledge = () => {
        for (let i = 0; i < Knowledge.length; i++) {
          
        let p = document.createElement("p")
        p.innerHTML = Knowledge[i]
        document.querySelector(".show").appendChild(p);
        }
    })
}
///////////////////////////////////////////////////////////////////



myCv.start();