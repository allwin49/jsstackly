
// Array Higher-Order Methods


let values = [12, 25, 8, 40, 17, 32, 6, 50, 21, 14]

values.forEach((num) => {
    
    console.log(num)
})




let numbers = [2, 4, 6, 8, 10]

let multiplied = numbers.map((num) => num * 5)


console.log(multiplied)


let marks = [10, 25, 35, 15, 50, 8, 28]


let greaterNumbers = marks.filter((num) => num > 20)

console.log(greaterNumbers)


let employees = [
    { name: "Arun", salary: 250000 },
    { name: "Bala", salary: 350000 },
    { name: "Kavin", salary: 200000 },

    { name: "David", salary: 450000 },
    { name: "Ravi", salary: 300000 }
]

let selectedEmployees = employees.filter((emp) => emp.salary <= 300000)


console.log(selectedEmployees)


let firstemployee = employees.find((emp) => emp.salary > 200000)


console.log(firstemployee)


let amounts = [100, 200, 300, 400, 500]

let total = amounts.reduce((sum, num) => sum + num, 0)

console.log(total)


let digits = [3, 7, 10, 15, 21]

let haseven = digits.some((num) => num % 2 === 0)

console.log(haseven)


let positivenumbers = [5, 10, 15, 20, 25]

let allPositive = positivenumbers.every((num) => num > 0)

console.log(allPositive)


let ascendingnumbers = [45, 12, 89, 23, 5, 67]

ascendingnumbers.sort((a, b) => a - b)

console.log(ascendingnumbers)


let descendingnumbers = [34, 9, 76, 21, 50, 3]

descendingnumbers.sort((a, b) => b - a)

console.log(descendingnumbers)




// String Methods
let language = "javascript"

console.log(language.charAt(4))

console.log(language.charCodeAt(2))


let message = "   Learn JavaScript   "


console.log(message.trim())


let word = "Full Stack Developer"

console.log(word.toUpperCase())
console.log(word.toLowerCase())


let sentence = "I am learning JavaScript"


console.log(sentence.includes("script"))



let text = "JavaScript is powerful"

console.log(text.startsWith("Java"))
console.log(text.endsWith("powerful"))


let sentence2 = "java is easy and java is useful"

console.log(sentence2.replaceAll("java", "python"))


let technologies = "html-css-javascript-react"

console.log(technologies.split("-"))


let names = ["Arun", "Bala", "Kavin", "Ravi"]

console.log(names.join(", "))



let course = "JavaScript Programming"



console.log(course.slice(0, 10))




// Date Methods



let currentDate = new Date()

console.log(currentDate.getFullYear())
console.log(currentDate.getMonth() + 1)
console.log(currentDate.getDate())
console.log(currentDate.getDay())


let months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
]

let today = new Date()


console.log(months[today.getMonth()])


let clock = new Date()

console.log(clock.getHours())
console.log(clock.getMinutes())
console.log(clock.getSeconds())



let birthDate = new Date()

birthDate.setFullYear(2003)
birthDate.setMonth(0)
birthDate.setDate(30)


console.log(birthDate)



// Asynchronous JavaScript
       
setTimeout(() => {
    console.log("Welcome to JavaScript")
}, 3000)


let intervalId = setInterval(() => {
    console.log("Learning JavaScript")
}, 2000)



setTimeout(() => {
    clearInterval(intervalId)
    console.log("Interval stopped")
}, 8000)



function one() {
    console.log("One")
}



function two() {
    console.log("Two")
}



function three() {

    console.log("Three")
}

one()


setTimeout(two, 0)

three()




// Promises and API Fetching

let loginPromise = new Promise((resolve) => {
    resolve("Login successful")
})


loginPromise.then((result) => {
    console.log(result)
})



let passwordPromise = new Promise((resolve, reject) => {
    reject("Invalid password")
})




passwordPromise.catch((error) => {
    console.log(error)
})



let processPromise = new Promise((resolve) => {
    resolve("Data received")
})

processPromise
    .then((result) => {
        console.log(result)
    })


    .catch((error) => {
        console.log(error)
    })


    .finally(() => {
        console.log("Process completed")
    })




fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            console.log(product.title)
        })
    })


    .catch((error) => {
        console.warn(error.message)
    })



fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        

        products.forEach((product) => {
            console.log(product.title)
            console.log(product.price)
            console.log(product.category)
        })
    })


    .catch((error) => {
        console.warn(error.message)
    })



fetch("https://fakestoreapi.com/products")
    .then((response) => {

        if (!response.ok) {
            throw new Error("Failed to fetch products")
        }

        return response.json()
    })


    .then((products) => {
        console.log(products)
    })


    .catch((error) => {
        console.warn(error.message)
    })


fetch("https://fakestoreapi.com/products")

    .then((response) => response.json())
    .then((products) => {
        console.log(products)
    })



    .catch((error) => {
        console.warn(error.message)
    })


    .finally(() => {
        console.log("API call completed")
    })





// Real-Time Mini Tasks

let staff = [
    { name: "Manoj", salary: 220000 },
    { name: "Priya", salary: 400000 },
    { name: "Ajay", salary: 280000 },
    { name: "Vijay", salary: 320000 },
    { name: "Nisha", salary: 180000 }
]

let lowSalaryStaff = staff.filter((person) => person.salary < 300000)


lowSalaryStaff.forEach((person) => {
    console.log(person.name, person.salary)
})



fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        let productDetails = products.map((product) => ({
            title: product.title,
            price: product.price
        }))


        console.log(productDetails)
    })


    .catch((error) => {
        console.warn(error.message)
    })


fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
        let filteredProducts = products.filter(
            (product) => product.category === "electronics"
        
        )


        console.log(filteredProducts)
    })



    .catch((error) => {
        console.warn(error.message)
    })




let data = [5, 12, 18, 24, 31, 40, 7]


let doubled = data.map((num) => num * 2)

let evenValues = data.filter((num) => num % 2 === 0)

let sumOfValues = data.reduce((total, num) => total + num, 0)



let containsLargeNumber = data.some((num) => num > 30)

let allAboveZero= data.every((num) => num > 0)

console.log(doubled)
console.log(evenValues)

console.log(sumOfValues)

console.log(containsLargeNumber)
console.log(allAboveZero)


fetch("https://fakestoreapi.com/products")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Unable to load product data")
        }


        return response.json()
    })


    .then((products) => {
        products.forEach((product) => {
            console.log("Title:", product.title)
            console.log("Price:", product.price)
            console.log("Category:", product.category)
        })
    })


    .catch((error) => {
        console.warn(error.message)
    })


    .finally(() => {
        console.log("Product listing completed")
    })