//1. Print odd numbers in an array

let number = [1, 2, 3, 4, 5, 6, 98, 101, 467]

console.log(number.filter((item) => {

    return item % 2 !== 0

}))

//2.Convert all the strings to title caps in a string array

let a = ["Ashish", "is", "a", "handsome", "boy"]

a = a.map((item) => {

    return item.toUpperCase()

})

console.log(a)

//3.Sum of all numbers in an array
//using numArray Defined Above

let sum = number.reduce((currentTotal, item) => {

    return currentTotal + item

}, 0)

console.log(sum)

//4.Return all the prime numbers in an array

console.log(
    number.filter((item) => {

        for (let i = 2; i < item; i++) {
            if (item % i === 0)
                return false;
        }
        return item !== 1;

    }))

//5.Return all the palindromes in an array 

let arrayPallindrome = [111, 102, 505, 323, 612, 776, 707, 121]

console.log(
    arrayPallindrome.filter((item) => {

        let temp = item + "";

        if (temp.split('').reverse().join('') === item + "")
            return true

        return false

    }))