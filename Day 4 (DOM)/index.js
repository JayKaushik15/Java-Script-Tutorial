//.....................................DOM.........................................
// function change() {
  // let el = document.getElementsByTagName("h1")  //Elements - targeting n no. of h1, so indexing has to be done so as to modify specific element.
  // el[0].innerText = "Hello India"


  // let el1 = document.getElementById("para");        // ek hi element target hoga due to unique id and sinle element
  // el1.innerText = "This is new para"


  // let el2 = document.getElementsByClassName("classy")
  // el2[0].innerText = "Namaste Bharat"
  // el2[0].style.backgroundColor = "green"


  // let el3 = document.getElementsByClassName("xyz")
  // el3[0].style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_640.jpg')"


//   let el4 = document.getElementsByClassName("abc");
//   // el4[0].style.flexDirection = "column"               // for rotating cards from default to vertical

//   if (el4[0].style.flexDirection === "row") {            //to rotate back again to default and so on..
//     el4[0].style.flexDirection = "column";
//   } else {
//     el4[0].style.flexDirection = "row";
//   }
// }


function clock() {
    let ele = document.getElementById("myclock")
    let date = new Date()

    let h = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    
    let hour = h%12;
    if(hour == 0) {
        hour = 12;
    }

    let time = h + ":" + min + ":" + sec


    setTimeout(() => {
        clock()
    }, 1000);
    ele.innerText = time 
}
clock()
