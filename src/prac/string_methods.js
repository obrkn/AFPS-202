//length property

var txtLength = "qwerty".length
// console.log(txtLength)

//String methods

// indexOf
var string1 = "Locate a string in this sentence"
var indexOfResult = string1.indexOf("a")
console.log({indexOfResult})
if(indexOfResult === -1){
    console.log("Never found....")
}

//lastIndexOf
var lastIndexOfResult = string1.lastIndexOf("a")
console.log({lastIndexOfResult})

//search
var searchResult = string1.search('string')
console.log({ searchResult })

var cake = 'Apple-Banana-Kiwi'
//slice - slice(start, end)

var piece = cake.slice(6,12) //Banana
var piece = cake.slice(6,-5) //Banana
console.log({piece})

//substring - substring(start, end)
var pieceSub = cake.substring(6,12)
console.log({ pieceSub })

//concat - concatenate
//joins two or more strings
//concat(string, string2, ......., stringX)

var text1 = "Hello"
var text2 = " "
var text3 = "Kitty"
var combinedText = text1.concat(text2, text3)
var unaryPlus = text1 + text2 + text3
console.log({ combinedText, unaryPlus });

//charAt()
var char = cake.charAt(6)
console.log({char})

//charCodeAt() - returns the unicode at a specified index in a string
var charCode = cake.charCodeAt(6)
console.log({charCode})

//split
var cakeSplit = cake.split("")
console.log({ cakeSplit })
console.log(Array.isArray(cakeSplit));
