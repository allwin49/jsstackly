


let fruits = ["grapes", "pineapple", "watermelon", "cherry", "pear"]

fruits.push("lemon", "papaya", "plum")

console.log(fruits)



let numbers1 = [12, 24, 36, 48, 60, 72]

numbers1.pop()

console.log(numbers1)




let names1 = ["Arun", "Priya", "Kavin", "Divya", "Rahul"]

names1.shift()

console.log(names1)



let numbers2 = [25, 35, 45, 55]

numbers2.unshift(5, 15)

console.log(numbers2)



let arr1 = [10, 20, 30, 40, 50]

arr1.splice(1, 2)

console.log(arr1)




let arr2 = [1, 2, 3, 4, 5]

arr2.splice(2, 1, 100)

console.log(arr2)



let numbers3 = [8, 16, 24, 32, 40]

numbers3.fill("hello", 2, 5)

console.log(numbers3)




let values1 = [11, 22, 33]
let values2 = [44, 55, 66]

console.log(values1.concat(values2))



let arr3 = [10, 20, 30, 40, 50, 60]

let slicedArray = arr3.slice(1, 5)

console.log(slicedArray)





let arr4 = [5, 10, [15, 20, [25, 30]]]

let flatValues = arr4.flat(Infinity)

console.log(flatValues)






let arr5 = [10, 20, 30, 40, 50]

let exists = arr5.includes(30)

console.log(exists)





let arr6 = [5, 10, 15, 20, 25]

let position = arr6.indexOf(20)

console.log(position)






let arr7 = [1, 2, 3, 2, 1, 2]

let lastPosition = arr7.lastIndexOf(2)

console.log(lastPosition)





let numbers4 = [42, 17, 63, 29, 81, 34, 56]

numbers4.sort((a, b) => a - b)

console.log(numbers4)





let numbers5 = [13, 26, 39, 52, 65, 78, 91]

numbers5.reverse()

console.log(numbers5)









let values3 = [2, 4, 6, 8]
let values4 = [10, 12, 14, 16]

let mergedArray = [...values3, ...values4]

console.log(mergedArray)





let studentInfo = {
    studentId: 12,
    studentName: "Arun",
    studentRole: "Trainee"
}

let jobInfo = {
    jobId: 25,
    jobTitle: "Python Developer",
    salary: 22000
}

let mergedObject = { ...studentInfo, ...jobInfo }

console.log(mergedObject)





function displayValues(a, b, ...remaining) {
    console.log(a + b)
    console.log(remaining)
}

displayValues(4, 8, 12, 16, 20, 24)





function one(a, b, ...c) {
    console.log(a + b + c[0] + c[1])
}

one(2, 4, 6, 8)






let values5 = [14, 28, 42]
let values6 = [56, 70, 84]

let copiedArray = [...values5]

console.log(copiedArray)








let arr8 = [10, 20, 30, 40]

let [n1, n2, n3, n4] = arr8

console.log(n1, n2, n3, n4)





let nestedArray = [1, 2, [3, 4, [5, 6]]]

let [d1, d2, [d3, d4, [d5, d6]]] = nestedArray

console.log(d1, d2, d3, d4, d5, d6)





let student = ["Kavin", 23, 8.6]

let [studentName, studentAge, cgpa] = student

console.log(studentName, studentAge, cgpa)









let company = {
    name: "Arun",
    role: "Web Developer",
    location: {
        mainlocation: "Madurai",
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
    name: "Priya",
    address: {
        city: "Trichy",
        state: "Tamil Nadu"
    }
}

let { address: { city, state } } = studentDetails

console.log(city, state)





let employeeDetails = {
    name: "Rahul",
    role: "Backend Developer",
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








let numbers6 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

numbers6.shift()
numbers6.pop()
numbers6.unshift(1, 5)

console.log(numbers6)



let duplicateNumbers = [7, 14, 21, 7, 28, 7]

console.log(duplicateNumbers.includes(7))
console.log(duplicateNumbers.indexOf(7))
console.log(duplicateNumbers.lastIndexOf(7))






let employee1 = {
    name: "Divya",
    age: 25
}

let employee2 = {
    role: "Software Engineer",
    salary: 30000
}

let employee = { ...employee1, ...employee2 }

let { name: finalEmployeeName, role: finalEmployeeRole } = employee

console.log(finalEmployeeName)
console.log(finalEmployeeRole)




let numbers7 = [10, 20, [30, 40, [50, 60]]]

let flatArray = numbers7.flat(Infinity)
let reversedArray = flatArray.reverse()

console.log(reversedArray)
