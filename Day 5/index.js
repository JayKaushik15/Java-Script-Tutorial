//................Way to create dropdown in js................

// function dataPrint() {
//     let ele = document.getElementById("color-dropdown")
//     let res = document.getElementById("result")

//     ele.addEventListener("change",(event)=>{  //data store krega and event handle krega i.e; click.
//         let selectedValue = event.target.value
//         res.textContent = `Selected data : ${selectedValue}`        //`` back ticks used to provide and fetch data dynamically.
//     })

// }
// dataPrint()

// function dataPrint() {
//     let ele = document.getElementById("dropdown-btn");
//     let res = document.getElementById("dropdown-content");

//     ele.addEventListener('click',()=> {
//         res.classList.toggle("hidden")
//     })
//     window.addEventListener('click',(event)=> {
//         if (!ele.contains(event.target)) {
//             res.classList.add('hidden')

//         }

//     })
// }
// dataPrint()

//--------------------------------------------------------------------------------------------------------------------------------------------------------

//.............First Class Function..................
    //Function which gets treated as a variable. Can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

// const foo = function () {
//   console.log("Jay Kaushik");
// };
// foo();

//............Higher Order Function................
    //Function which receives another function as an argument or returns another function.

// const foo = function () {
//     return function() {
//   console.log("Jay Kaushik..!")
// }
// }
// foo()()