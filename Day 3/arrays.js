// ..........Arrays...........
    // 3 ways to create an Array

// let arr = new Array(element0, element1, ...elementN );
// let arr = Array(element0, element1,...arr,elementN);
// let arr = [element0, element1, element2];

// let arr = ['hello', 'this','is','a','wolf'];
// console.log(arr);

//.........PUSH operation.........
    // adds element to the end of the Array and returns new length.

    // const arr = ['jarvis', 'Tony'];
    // arr.push("Stark");
    // console.log(arr);

//.......Slice operation...........
    // selects a part of the array and returns new array

    // const arr = ['Thor','Ragnarok','the','dark','world'];
    // res = arr.slice(1,2);       // takes from starting index and prints -1th of ending index element.
    // console.log(res);
    

//...........ToString operation.............
    //converts an array to string and returns the result
    // const arr = [1, 4, 5, 12];
    // console.log(arr.toString());


//..........Shift operation.................
    //removes the first elementof an array, and returns the element

    // const arr = ["Thor", "Ragnarok", "the", "dark", "world"];
    // res =  arr.shift(0);
    // console.log("Removed element:",res);
    // console.log("Remaining array:",arr);
    


//............MAP......................
    //creates a new array with the results of calling a function for every array element.
    
    // const arr = [1,4,9,16];
    // res = arr.map(x => x * 2);
    // console.log(res);


//...............POP..................
    //Removes the last element and returns the remaining array

//     const arr = ["Thor", "Ragnarok", "the", "dark", "world"];
//    res = arr.pop();
//    console.log(res);

//...............Filter.......................
    // filters the array on the basis of condition and creates new array.

    // const arr = [1, 4, 6, 15];
    // res = arr.filter(x => x>3)
    // console.log(res);
    

//.................find.......................
    // const arr = [1,4,5,12];
    // res = arr.find(x => x==7);
    // console.log(res);

//................findIndex...................
    // returns index of the element
    // const arr = [1, 4, 5, 12];
    // res = arr.findIndex((x) => x == 5);
    // console.log(res);


//.................includes.................
    //gives boolean values
    // const arr = [1, 4, 5, 12];
    // res = arr.includes(5);
    // console.log(res);

//..................reverse................
    // const arr = [1, 4, 5, 12];
    // console.log(arr.reverse());

//.................splice................
    // const arr = [1, 4, 5, 12];
    // res = arr.splice(1,2,20,30);
    // console.log(res);

//..................concat..............
    // const arr1 = [1,2,3];
    // console.log(arr1.concat(5,6,7));

//...............join...................
    // const arr = [1,2,3,4];
    // console.log(arr.join("-"));

//.............sort....................
    // const arr = [1,5,3,6,2];            //always work on single digit numbers
    // console.log(arr.sort());


//..............lastindexof............
    // const arr = [1,5,2,5,3];             // returns last index of an element if it is more than once in the array1.
    // console.log(arr.lastIndexOf(5));
    
// _______________________________________________________________________________________________________________________________________________________


// ****..................................Functions............................****
    // we can call a function any no of Time, it allows you to define a block of code, give it a name and executes it as many times as you want.

    // # 3 Ways to create a function:-
    // i) Regular Function 
    // ii) Arrow Function 
    // iii) Function Expression

    
    // .....Regular function......
// function without parameters
    // function func() {
    //      console.log("Regular Function");        //return is used to pass the value defined in function at some other place.
    // }
    // func()

// function with parameters
    // function func(name, age) {              //parameters always defined at the time of creation.
    //     console.log("Regular Function;", name, age);
    // }
    // func("Aman",22)         // these are the arguments, values passed for the parameters

    //....Arrow Function....
    // const greet = () => {
    //   console.log("Jay");
    // };
    // greet();

    // const func = (firstname, lastname,age) => {
    //     console.log(firstname,lastname,"is",age,"years old.");
    // }
    // func("Jay","kaushik",22)


    

     
    
    

