// alert()

// let str="Allwin"
// console.log(str)
// console.log(typeof(str))


// let num=123 
// console.log(num)
// console.log(typeof(num))

// let some; 
// console.log(some)
// console.log(typeof(some))

// let every=null;
// console.log(every)

// let every=prompt()
// console.log(every)

//non primitive datatype

//array 
// let fruit=["allwin","orange","banana"]
// console.log(fruit[0])
// console.log(fruit[fruit.length-1])

//bject 

// let things={
//     fruit:["apple","orange","pineapple","giwi"],

//     Electronic:["rc car","aeroplane"],
//     vegname :["potato"]
// }

// console.log(things.fruit)
// console.log(things.Electronic[0 ])

//assignment operator 
// let num=1 
// let s=3 

// num+=s 

// console.log(num)


//relatonal (or) comparision operator 


// meaning  operator example  result 

// lessthan    <        5<5      false 

// greater then  >     5>5       false

//lesstheneq   <=    3<=5       true 

// greatertheneq  >= 10>=5     true  



//logical operator 

//And -&& 

// true &&  true && true =true 
// false && false && true =false


//or -|| 

//true || false || false =true 
//false || false || false =false


//not -! 
// !true=false
// !false=true 



//spread operator 

//array spread operator -[...]

// let arr1=[1,2,3,4]
// let arr2=[5,6,7,8]

// let totalArr=[...arr1,...arr2]

// console.log(totalArr)



// let obj1={
//     name:"allwin",
//     role:"trinee",
//     experiance:"fresher"

// }

// let obj2={
//     name1:"dheva",
//     role:"develper",
//     experinance:2
// }

// let totalObj={...obj1,...obj2}
// console.log(totalObj)



//rest operator-(...)

//function 

// function one(a,b,...c){
//     console.log(a+b)
//     console.log(c)
// }

// one(1,2,3,4,5,6)



//desstracture

// function one(a,b,...c){
//     console.log(a+b)


// // console.log(c)

//     let [a1,b1,c1,d1,e1,f1,g1]=c
//     cons
// }

// one(1,2,3,4,5,6,7,8)



// var a=10 
// let b=3
// const c=5 

// console.log(a)
// console.log(b)
// console.log(c)



// var name="aadhi"
// var role="Python Developer"
// var cgpa=8.8

// console.log(name)
// console.log(role)
// console.log(cgpa)



// var a=10 
// var b="hello"
// var c=true 
// var d=null
// var e;


// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)


// console.log(typeof(a))
// console.log(typeof(b))
// console.log(typeof(c))
// console.log(typeof(d))
// console.log(typeof(e))


// var a="100"
// a=Number(a)
// console.log(a)
// console.log(typeof(a))



// var a=10 
// var b=5 

// a=a+b 
// b=a-b 
// a=a-b 

// console.log(a)
// console.log(b)


// var a=13

// if(a%2==0){
//     console.log("even")

// }
// else{
//     console.log("odd")
// }


// var a=12
// var b=54
// var c=8 

// if(a>b && a>c ){
//     console.log(a,"is greatest number ")

// }

// else if(b>a && b>c){
//     console.log(b,"greatest number")


// }

// else if(c>a && c>b){
//     console.log(c,"greatest number ")



// }


// var a=2

// if(a>=18){
//     console.log("eligible")
// }
// else{
//     console.log("not eligible")
// }



// var a=2004 
// if( a%4==0  && a%100!=0 || a%400==0 ){
//     console.log("leap year")
// }
// else{
//     console.log("not leap year")
// }

// var a=10 
// var b=5 
// var operator="%"

// switch(operator){

//     case "+":
//         console.log("Addition",a+b)
//         break
    
//     case "-":
//         console.log("sub",a-b)
//         break
    
    
//     case "*":
//         console.log("multiplcation",a*b)
//         break 

//     case "/":
//         console.log("division",a/b)
//         break 
    
//     default:
//         console.log("Invalid operator")

// }




// for(var a=1; a<21; a++){
//     console.log(a)

// }

 

// for(var i=1; i<21; i++){
//     console.log(i,"*",2,"=",i*2)
// }

// var sum=0 

// for(var i=1; i<=100; i++){
//     sum+=i 
// }

// console.log(sum)



// for(var i=20; i>0; i--){
//     console.log(i)

// }


// var a=123
// var r=0 

// while(a!=0){

//     var b=a%10 
//     r=r*10+b 
//     a=Math.floor(a/10)

// }
// console.log(r)


// function 

// block of code 
// reusable code 
// reusable value 
// certain block code only we can call 
// easy debug 


// function some(){
//     console.log("Hello javaScript ")
// }

// some()

function one(){
    console.log("Hello")

    if(1){
        console.log("Welcome")
    }
    for(let a=1; a<=5; a++){
        console.log(a)
    }
}



function two(a){
    console.log(a)
}

two(2)

function clgform(name, age,cgpa){
    console.log("name",name)
    console.log("age",age)
    console.log("cgpa",cgpa)


}

clgform("allwin",22,9.7)
clgform("pugauzhal",77,27.4)


function form(studentfee){
    return studentfee

}

let a=form(200000)
console.log(a)


//array higher order method 

//for Each 


//Date 

let date1=Date() 

console.log(date1)



//year 
console.log(date1.getMonth())