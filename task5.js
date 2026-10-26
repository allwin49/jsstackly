


let fruits = ["apple", "banana", "mango", "orange", "pomegranate"]

fruits.push("kiwi", "papaya", "guava")

console.log(fruits)


let numbers1 = [1, 2, 3, 4, 5, 6]

numbers1.pop()

console.log(numbers1)



let names1 = ["Swathi", "Resh", "Dharsh", "Saadhana", "Varun"]

names1.shift()

console.log(names1)



let numbers2 = [20, 30, 40, 50]

numbers2.unshift(0, 10)

console.log(numbers2)



let arr1 = [10, 20, 30, 40, 50]

arr1.splice(1, 2)

console.log(arr1)


let arr2 = [1, 2, 3, 4, 5]

arr2.splice(2, 1, 100)

console.log(arr2)


let numbers3 = [1, 2, 3, 4, 5]

numbers3.fill("hello", 2, 5)

console.log(numbers3)







let values1 = [1, 2, 3]
let values2 = [4, 5, 6]

console.log(values1.concat(values2))



let arr3 = [10, 20, 30, 40, 50, 60]

let slicedArray = arr3.slice(1, 5)

console.log(slicedArray)



let arr4 = [1, 2, [3, 4, [5, 6]]]

let flatValues1 = arr4.flat(Infinity)

console.log(flatValues1)



let arr5 = [10, 20, 30, 40, 50]

let exists = arr5.includes(30)

console.log(exists)



let arr6 = [5, 10, 15, 20, 25]

let position = arr6.indexOf(20)

console.log(position)



let arr7 = [1, 2, 3, 2, 1, 2]

let lastPosition = arr7.lastIndexOf(2)

console.log(lastPosition)



let numbers4 = [10, 50, 70, 27, 84, 46, 29]

numbers4.sort((a, b) => a - b)

console.log(numbers4)



let numbers5 = [10, 50, 70, 27, 84, 46, 29]

numbers5.reverse()

console.log(numbers5)




let values3 = [9, 8, 7, 6]
let values4 = [5, 4, 3, 2]

let mergedArray = [...values3, ...values4]

console.log(mergedArray)



let studentInfo = {
    Sno: 1,
    Sname: "Swathi",
    Srole: "Developer"
}

let jobInfo = {
    Jno: 2,
    Jname: "Full Stack Developer",
    Jsal: 7000
}

let mergedObject = { ...studentInfo, ...jobInfo }

console.log(mergedObject)





function value(a, b, ...c) {
    console.log(a + b)
    console.log(c)
}

value(1, 2, 3, 4, 5, 6)



function one(a, b, ...c) {
    console.log(a + b + c[0] + c[1])
}

one(1, 2, 3, 4)



let values5 = [1, 2, 3]
let values6 = [4, 5, 6]

let copiedArray = [...values5]

console.log(copiedArray)





let arr8 = [10, 20, 30, 40]

let [n1, n2, n3, n4] = arr8

console.log(n1, n2, n3, n4)





let nestedArray = [1, 2, [3, 4, [5, 6]]]

let [d1, d2, [d3, d4, [d5, d6]]] = nestedArray

console.log(d1, d2, d3, d4, d5, d6)





let student = ["Swathi", 21, 9]

let [studentName, studentAge, cgpa] = student

console.log(studentName, studentAge, cgpa)







let company = {
    name: "Swathi",
    role: "Developer",
    location: {
        mainlocation: "Chennai",
        currentlocation: "Coimbatore"
    }
}

let {
    name: companyName,
    role: companyRole,
    location: { mainlocation, currentlocation }
} = company

console.log(companyName, companyRole, mainlocation, currentlocation)





let studentDetails = {
    name: "Swathi",
    address: {
        city: "Thambikottai",
        state: "Tamil Nadu"
    }
}

let { address: { city, state } } = studentDetails

console.log(city, state)





let employeeDetails = {
    name: "Swathi",
    role: "Software Developer",
    location: {
        mainLocation: "Salem",
        currentLocation: "Chennai"
    }
}

let {
    name: employeeName1,
    role: employeeRole1,
    location: { mainLocation, currentLocation }
} = employeeDetails

console.log(employeeName1, employeeRole1, mainLocation, currentLocation)








let numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers6.shift()
numbers6.pop()
numbers6.unshift(-1, 0)

console.log(numbers6)




let duplicateNumbers = [2, 3, 4, 2, 5]

console.log(duplicateNumbers.includes(2))
console.log(duplicateNumbers.indexOf(2))
console.log(duplicateNumbers.lastIndexOf(2))






let employee1 = {
    name: "Swathi",
    age: 21
}

let employee2 = {
    role: "Full Stack Developer",
    salary: 7000
}

let employee = { ...employee1, ...employee2 }

let { name: finalEmployeeName, role: finalEmployeeRole } = employee

console.log(finalEmployeeName)
console.log(finalEmployeeRole)






let numbers7 = [1, 2, [3, 4, [5, 6]]]


let flatArray = numbers7.flat(Infinity)
let reversedArray = flatArray.reverse()

console.log(reversedArray)
