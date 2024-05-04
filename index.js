//multiplication
let num = 9
for(let i=1; i<=10; i++){
    console.log(num, "x", i)
}
console.log("--------------")

//palindrome
let word = "kasur ini rusak"
let newWord = ""
for(let i = word.length -1;i >= 0; i--){
    newWord += word[i]
}
if(newWord == word){
    console.log("palindrome")
} else{
    console.log("bukan palindrome")
}
console.log("--------------")

//cm to km
let cm = 1000
let km =  cm /100000
console.log(km, "km")

console.log("--------------")

//Rp
let rp = 1000000
let Rp = rp.toLocaleString()
console.log("Rp.",Rp)

console.log("--------------")

//remove the first occurrence
let string = "hello world"
let search_string = "ell"
string = string.replace(search_string, '')
console.log(string)

console.log("--------------")

//capitalize the first letter
let kata = "jeruk asem banget"
let result1 = ""
let space = false
for(let i = 0; i < kata.length; i++){
    if(i === 0){
        result1 += kata[i].toUpperCase()
    } else if(kata[i] === " "){
        space = true
        result1 += " "
    } else if(space){
        result1 += kata[i].toUpperCase()
        space = false
    } else{
        result1 += kata[i]
    }
}
console.log(result1)

console.log("--------------")

//reverse a string
let string1 = "kartun"
let newString = ""
for(let i = string1.length - 1; i >= 0; i--){
    newString += string1[i]
}
console.log(newString)

console.log("--------------")

//swap the case of each character from string
let w = "The QuiCk BrOwN Fox"
let w1 = ""
for(let i=0;i <= w.length-1;i++){
    if(w[i] === w[i].toUpperCase()){
        w1 += w[i].toLowerCase()
    } else{
        w1 += w[i].toUpperCase()
    }
}
console.log(w1)

console.log("--------------")

//find the largest of two given integers
let num1 = -1
let num2 = 420
if(num1 > num2){
    console.log(num1)
} else if(num2 > num1){
    console.log(num2)
} else{
    console.log("angka sama")
}

console.log("--------------")

//Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.

let input2 = "jeruk"

if(typeof input2 === 'string'){
    console.log(1)
}else if(typeof input2 === 'number'){
    console.log(2)
}else{
    console.log(3)
}

console.log("--------------")

//change every letter a into * from a string of input
let str = 'an apple a day keeps the doctor away'
let newStr = ""
for(let i=0; i<str.length;i++){
    if(str[i] !== "a"){
        newStr += str[i]
    }else{
        newStr += "*"
    }
}
console.log(newStr)