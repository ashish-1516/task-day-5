let array = [5, 12, 32, 11, 15, 17, 19, 37, 33, 57, 55, 99, 101]

// 1.Print odd numbers in an array
let resultArray = (function (array) {

    return (array.filter((item) => {

        return item % 2 !== 0

    }))
})(array);

console.log(resultArray)


//2.Convert all the strings to title caps in a string array

let stringArray = ["ashish", 'is', 'a', 'smart', 'boy']

let resultStringArray = (function (stringArray) {

    return (stringArray.map((item) => {

        return item.toUpperCase()

    }))
})(stringArray);

console.log(resultStringArray)

//3.Sum of all numbers in an array

let resultSumArray = (function (array) {

    return (array.reduce((currentTotal, item) => {

        return currentTotal + item

    }, 0))
})(array);

console.log(resultSumArray)


//4.Return all the prime numbers in an array

let resultPrimeArray = (function (array) {

    return (array.filter((item) => {

        for (i = 2; i < item; i++) {
            if (item % i === 0)
                return false
        }

        return true

    }))
})(array);

console.log(resultPrimeArray)


//5.Return all the palindromes in an array

let resultPallindromeArray = (function (array) {

    return (array.filter((item) => {

        let temp = item + ""

        if ((temp.split('').reverse().join('')) === item + "")
            return true

        return false

    }))
})(array);

console.log(resultPallindromeArray)


//6.Return median of two sorted arrays of same size

let arr1 = [1, 2, 3, 4, 5, 8, 10]
let arr2 = [8, 9, 10, 12, 16]

let resultMedian = function (arr1, arr2) {

    let result = []

    let lenArr1 = arr1.length

    let lenArr2 = arr2.length

    if (lenArr1 % 2 === 0) {

        console.log(arr1[lenArr1 / 2])

    } else {

        console.log(arr1[(lenArr1 + 1) / 2])
    }

    if (lenArr2 % 2 === 0) {

        console.log(arr2[lenArr2 / 2])

    } else {

        console.log(arr2[(lenArr2 + 1) / 2])
    }

    return
}(arr1, arr2)


//7.Remove duplicates from an array

let d = [22, 22, 11, 10, 11, 56, 10, 9, 2, 6, 7, 56, 23, 9]

let resultArrayWoDup = ((d, index) => {

    return [...new Set(d)]

})(d)

console.log(resultArrayWoDup)


//8.Rotate an array by k times and return the rotated array

let rotation = [0, 1, 5, 6, 7, 9]
let resultArrayShifted = ((array, k) => {

    for (let i = 0; i < k; i++) {
        let temp = array.shift()
        array.push(temp)
    }
    return array

})(rotation, 3)

console.log(resultArrayShifted)