/*
1.
    8
    1846

2. 
    {
        yearNeptuneDiscovered: 1846,
        yearMarsDiscovered: 1659
    }

3. 
    Your name is Alejandro and you like purple.
    Your name is Melissa and you like green.
    Your name is undefined and you like green.

4. 
    Maya
    Marissa
    Chi

5. 
    Raindrops on roses
    whiskers on kittens
    ["Bright copper kettles","warm woolen mittens", "Brown paper packages tied up with strings"]

6.
    [20, 10, 30]

*/

//Object Destructuring
let obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
//   var a = obj.numbers.a;
//   var b = obj.numbers.b;

const {a,b} = obj.numbers;


//Array Swap
var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

[arr[0], arr[1]] = [arr[1], arr[0]]

//raceResults()

const raceResults = ([first, second, third,...rest]) => {
    return {
        first, second, third, rest
    };
}