
let obj =  {
    name: 'Vasya',
    friends: 5,
    likes: 19,
    projects: 7
}

function calcNumberFields(obj) {
    let res = 0
    for(let key in obj) {
        typeof obj[key] === 'number' ? res += obj[key] : ''
    }
    console.log(res)
}
calcNumberFields(obj)


function calcNumberFieldsDescending(obj) {
    let filtratedArray = []
    let result = []
    for(let key in obj) {
        if(typeof obj[key] === 'number') {
            filtratedArray.push({key:key,value: obj[key]})
        }
    }
    let sortedArray = filtratedArray.sort((a, b) => b.value - a.value)
    sortedArray.forEach(i => result.push(i.key))
    console.log(result)
}

calcNumberFieldsDescending(obj)