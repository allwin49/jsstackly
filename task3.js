var a=10 
console.log(a)

a=20 
console.log(a)


var a=30 
console.log(a)

let b=40 
console.log(b)

b=50 
console.log(b)


// let b=60 Error: cannot redeclare

const c=70 
console.log(c)


// c=80 Error: cannot reassign 
// const c=90  Error: cannot redeclare 



var namee="Allwin Marshal J"
var age=22 
var programming_knowledge="python"

console.log(namee)
console.log(age);
console.log(programming_knowledge);

console.log(typeof(namee));
console.log(typeof(age));
console.log(typeof(programming_knowledge));



var fruits=["apple","pineapple","orange","pomegranate"]

console.log(fruits)
console.log(fruits[0])
console.log(fruits[fruits.length-1])


var marksheet={

    name:"Allwin Marshal J",
    Role:"Python Full Stack Developer",
    GCPA:8.9 
}

console.log(marksheet)

console.log(marksheet.name)
console.log(marksheet.Role)
console.log(marksheet.GCPA)



// var username=prompt()
// var age=prompt()

// alert(username)
// alert(age)



var a=5
var t=10 

console.log(a+t)
console.log(a-t)
console.log(a*t)
console.log(a/t)
console.log(a%t)
console.log(a**t)


var a=5
console.log(a++)
console.log(a)
console.log(++a);

// Solution
// 5
// 6
// 7

var a=10
var e=a--
var f=--a

console.log(a)
console.log(e)
console.log(f);

// Solution
// 8
// 10
// 8


var a=5
var z=10 

console.log(a+=z)
console.log(a-=z)
console.log(a*=z)
console.log(a/=z)
console.log(a%=z)




console.log(5=="5")
// output: true 

console.log(5==="5")
//output: False

console.log(10!=10)
//output:false

console.log(10!=="10")
//output:Ture 


var a=6

if(a>0 && a<5){
    console.log(true)
}
else{
    console.log(false)
}


var a=7

if(a>0 || a<5){
    console.log(true)
}
else{
    console.log(false)
}

var a=9

if(a!=9){
    console.log(true)
}
else{
    console.log(false)
}



var age=2

var result=age>=18? "eligible" : "not eligible"

console.log(result)


console.log(typeof ("hello" + 10))
console.log(typeof (10 + true))
console.log(typeof (10 + null))
console.log(typeof ("hello" + undefined))

// output
// string
// number
// number
// string


var value=prompt("enter a number: ")
var number=Number(value)
console.log(number+10)



console.log(Boolean(""))
console.log(Boolean("Hello"))
console.log(Boolean(0))
console.log(Boolean(true))


// output
// false
// true
// false
// true


var a=55 

if(a<0){
    console.log("negative")
}

else{
    console.log("positive")
}




var time = Number(prompt("enter the time in 24-hour format (0-23)"))

if (time >= 4 && time < 6) {
    console.log("early morning")


}
else if (time >= 6 && time < 12) {
    console.log("morning")


}
else if (time >= 12 && time < 16) {
    console.log("afternoon")


}
else if (time >= 16 && time < 20) {
    console.log("evening")
}


else if ((time >= 20 && time <= 23) || (time >= 0 && time < 4)) {
    console.log("night")
}


else {
    console.log("invalid time")
}




var age = 22
var height = 170
var weight = 60


if (age >= 18) {

    if (height >= 160) {

        if (weight >= 50) {


            console.log("eligible")
        }


        else {
            console.log("weight is too low")
        }
    }



    else {
        console.log("height is too low")
    }
}



else {
    console.log("age is too low")
}




var color ="green"

switch (color) {
    case "red":
        console.log("stop")
        break



    case "yellow":
        console.log("get ready")
        break



    case "green":
        console.log("go")
        break



    default:
        console.log("invalid color")


}




for (var i = 1; i <= 20; i++) {

    console.log(i)
}



for (var i = 2; i <= 20; i += 2) {

    console.log(i)
}



var i = 10

while (i >= 1) {

    console.log(i)
    i--
}



var i = 1

do {
    console.log(i)
    i++
} while (i <= 10)



var word = "JavaScript"

for (var i of word) {

    console.log(i)
}



var students = ["Priya", "Arun", "Ravi", "Kumar", "Divya"];

for (var student of students) {

    console.log(student)
}



let student = {
    name: "priya",
    role: "frontend Developer",
    cgpa: 9
}

for (let key in student) {

    console.log(key, student[key])
}



var a = Number(prompt("enter first number"))
var z = Number(prompt("enter second number"))
console.log("sum:", a + z);
console.log("difference:", a - z);
console.log("product:", a * z);
console.log("remainder:", a % z);



var numbers = [5, 12, 8, 20, 15];

for (var number of numbers) {

    if (number > 10) {

        console.log(number)
    }
}



var age = Number(prompt("enter your age"));

if (age >= 18) {
    alert("you are eligible")


}
else {
    alert("you are not eligible")
}




var choice = prompt("choose: addition, subtraction, multiplication, division");

var a = Number(prompt("enter first number"));
var z= Number(prompt("enter second number"));

switch (choice.toLowerCase()) {
    case "addition":
        alert(a + z)
        break



    case "subtraction":
        alert(a - z);
        break

    case "multiplication":
        alert(a * z);
        break



    case "division":
        if (z !== 0) {
            alert(a / z);
        }


        else {
            alert("cannot divide by zero")
        }
        break
        


    default:
        alert("invalid operation")
}

