`
mySlice(arr, [start], [end]) - делает то же самое, что и arr.slice([start], [end]) только без использования само собой
внутри себя arr.slice
И аналогично еще парочка:
myIndexOf(arr, item, from)
myIncludes(arr, item, from)
`

let array = [1,2,3,4,5,6,7,8,9,10]

function mySlice(arr, start = 0, end = arr.length) {
    let copyArr = []

    if(start < 0){
        start = arr.length + start
    }
    if(end < 0){
        end = arr.length + end
    }

    for (let i = start; i < end; i++) {
        copyArr.push(arr[i])
    }
    return copyArr
}

 console.log(mySlice(array))                        //    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 console.log(mySlice(array, 2));              //     [3, 4, 5, 6, 7, 8, 9, 10]
 console.log(mySlice(array, 0, 3));      //     [1, 2, 3]
 console.log(mySlice(array, 1, 4));      //     [2, 3, 4]
 console.log(mySlice(array, -2));             //     [9, 10]
 console.log(mySlice(array, 1, -1));     //     [2, 3, 4, 5, 6, 7, 8, 9]
 console.log(mySlice(array, -3, -1));    //     [8, 9]



function myIndexOf(arr, item, from = 0) {

    if (from < 0) {
        from =  arr.length + from
    }

    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}

console.log(myIndexOf(array, 2));                 // 1
console.log(myIndexOf(array, 5));                 // 4
console.log(myIndexOf(array, 6));                 // 5
console.log(myIndexOf(array, 2, 2));        // -1
console.log(myIndexOf(array, 2, 5));        // -1
console.log(myIndexOf(array, 2, -2));       // -1
console.log(myIndexOf(array, 2, -10));      //  1


function myIncludes(arr, item, from = 0) {

    if (from < 0) {
        from = arr.length + from
    }

    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}


console.log(myIncludes(array, 2));             // true
console.log(myIncludes(array, 5));             // true
console.log(myIncludes(array, 6));             // true
console.log(myIncludes(array, 2, 2));    // false
console.log(myIncludes(array, 2, 5));    // false
console.log(myIncludes(array, 2, -2));   // false
console.log(myIncludes(array, 2, -10));  // true



