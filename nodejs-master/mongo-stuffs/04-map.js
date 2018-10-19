const listOfEmployees = [
    {
        id: 1,
        firstName: "LP Shivan",
        lastName: "Venkat",
        city: "Trivandrum"
    },
    {
        id: 2,
        firstName: "R Raj",
        lastName: "Krishnan",
        city: "Bangalore"
    },
    {
        id: 3,
        firstName: "Easwaran",
        lastName: "Nair",
        city: "Trivandrum"
    }
]

const foundEmp = listOfEmployees.find(e => e.city === "Trivandrum")
console.log(foundEmp)

console.log("All Trivandrum employees")
const foundEmps = listOfEmployees.filter(e => e.city === "Trivandrum")
console.log(foundEmps)

const empsWithFullName = listOfEmployees.map(e => {
    e.fullName = e.firstName + ' ' + e.lastName
    return e
})
console.log(empsWithFullName)
