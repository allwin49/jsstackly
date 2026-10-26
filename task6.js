console.log("TRAVEL BOOKING MANAGEMENT SYSTEM")

let bookings = [
    {
        bookingId:101 ,
        passenger: "  Allwin Marshal J ",
        destination: "Coimbatore",
        amount: 5000,
        travelDate: new Date("2026-10-08")
    },
    {
        bookingId: 102,
        passenger: "Naveen",
        destination: "Trichy",
        amount: 4000,
        travelDate: new Date("2026-11-22")
    },
    {
        bookingId: 103,
        passenger: "Arun Kumar",
        destination: "Chennai",
        amount: 5200,
        travelDate: new Date("2026-12-4")
    },
    {
        bookingId: 104,
        passenger: "Swathika",
        destination: "Thanjavur",
        amount: 1600,
        travelDate: new Date("2026-10-22")
    }
]



let currentDate = new Date()

console.log("Current Date:", currentDate)

console.log("Date:", currentDate.getDate())
console.log("Month:", currentDate.getMonth() + 1)

console.log("Year:", currentDate.getFullYear())
console.log("Day of Week:", currentDate.getDay())
console.log("Hours:", currentDate.getHours())
console.log("Minutes:", currentDate.getMinutes())
console.log("Seconds:", currentDate.getSeconds())

console.log("Readable Date:", currentDate.toDateString())
console.log("Formatted Date:", currentDate.toLocaleDateString("en-IN"))


let journeyDate = new Date()
journeyDate.setDate(journeyDate.getDate() + 15)


console.log("Journey Reminder Date:", journeyDate.toDateString())


let returnDate = new Date(journeyDate)
returnDate.setDate(returnDate.getDate() + 5)


console.log("Return Date:", returnDate.toDateString())


let nextYearTrip = new Date(journeyDate)
nextYearTrip.setFullYear(nextYearTrip.getFullYear() + 1)


console.log("Next Year Trip:", nextYearTrip.toDateString())

console.log("\nPASSENGER NAME PROCESSING")


let passengerName = "  Allwin Marshal   "
let formattedName = passengerName.trim()

console.log("Passenger:", passengerName)
console.log("Clean Name:", formattedName)
console.log("Name Length:", formattedName.length)

console.log("First Name:", formattedName.slice(0, 7))
console.log("Uppercase:", formattedName.toUpperCase())
console.log("Lowercase:", formattedName.toLowerCase())
console.log("Contains Marshal:", formattedName.includes("Marshal"))
console.log("Name Parts:", formattedName.split(" "))
console.log("Position of Marshal:", formattedName.indexOf("Marshal"))

console.log("Updated Name:", formattedName.replace("Allwin", "Vijay"))





let destinations = ["Chennai", "Bangalore", "Hyderabad", "Coimbatore"]

console.log("All Destinations:", destinations.join(" | "))
console.log("Destination String:", destinations.toString())


console.log("\n ALL BOOKINGS")


bookings.forEach(function(booking) {
    console.log(
        booking.bookingId,
        booking.passenger.trim(),
        booking.destination,
        booking.amount,
        booking.travelDate.toDateString()
    )
})


let passengerList = bookings.map(booking =>
    booking.passenger.trim().toUpperCase()
)



console.log(passengerList)



let expensiveBookings = bookings.filter(booking =>

    booking.amount > 3000
)


console.log(expensiveBookings)


let selectedBooking = bookings.find(booking =>
    booking.bookingId === 103
)

console.log(selectedBooking)



let totalCost = bookings.reduce((total, booking) =>
    total + booking.amount, 0
)

console.log("Total Booking Amount:", totalCost)
console.log("Average Booking Amount:", totalCost / bookings.length)

console.log("\n SORT  BOOKINGS BY PRICE")

let sortedBookings = [...bookings].sort((a, b) =>
    a.amount - b.amount
)

console.log(sortedBookings)



let costlyTripExists = bookings.some(booking =>
    booking.amount > 5000
)

console.log("Any Trip Above 5000:", costlyTripExists)


let allBookingsValid = bookings.every(booking =>
    booking.amount > 0
)

console.log("All Booking Amounts Valid:", allBookingsValid)



let chennaiBookings = bookings.filter(booking =>
    booking.destination.toLowerCase().includes("chennai")
)

console.log(chennaiBookings)


let upcomingTrips = bookings.filter(booking =>
    booking.travelDate >= currentDate
)

let pastTrips = bookings.filter(booking =>
    booking.travelDate < currentDate
)

console.log("Upcoming Trips:", upcomingTrips)
console.log("Past Trips:", pastTrips)

console.log("\n FINAL TRAVEL")

console.log("Total Bookings:", bookings.length)

console.log(
    "Passenger Names:",
    bookings.map(booking => booking.passenger.trim()).join(", ")
)

console.log(
    "Most Expensive Trip:",
    Math.max(...bookings.map(booking => booking.amount))
)

console.log(
    "Cheapest Trip:",
    Math.min(...bookings.map(booking => booking.amount))
)

console.log(
    "Unique Destinations:",
    new Set(bookings.map(booking => booking.destination)).size
)