//forEach

const names = ['Kenshiro', 'Jesus', 'Miyu', 'Susana', 'Hodaka']
const people = [
    { name: 'Kenshiro', age: 20, },
    { name: 'Jesus', age: 15 },
    { name: 'Miyu', age: 25 },
    { name: 'Susana', age: 21 },
    { name: 'Hodaka', age: 18 }
]

// for(let i = 0; i < names.length; i++){
//     console.log(names[i])
// }

function callback(element, index, theWholeArray) {
    console.log(index, ":", element, " - ", theWholeArray)
}

names.forEach(callback) //iterate through the array, and invoke the callback every iteration

console.log("=========map==========");
//map

function callbackForMap(element, index, theWholeArray) {
    return element + " 😃"
}

const mappedNames = names.map(callbackForMap)
console.log({ mappedNames })

//filter
const legalAge = []

for(let i = 0; i < people.length; i++){
    if(people[i].age >= 18){
        legalAge.push(people[i].name)
    }
}

console.log({ legalAge })

function callbackForFilter(element, index, theWholeArray){
    if(element.age < 18){
        return true
    }
    return false
}

const minorAge = people.filter(callbackForFilter)
console.log({ minorAge });

//some/every

var everyPersonCanVote = true
var onlySomePersonCanVote = false

for(let i=0; i< people.length; i++){
    if(people[i].age < 21){
        onlySomePersonCanVote = true;
        everyPersonCanVote = false
    }
}

console.log(`Every person can vote - ${everyPersonCanVote}`)
console.log(`Only some person can vote - ${onlySomePersonCanVote}`)


var x = 0
var everyResult = people.every((person) => {
    return person.age >= 20
})

console.log({ everyResult })

var someResult = people.some((person) => {
    return person.age <= 20
})

console.log({ someResult })