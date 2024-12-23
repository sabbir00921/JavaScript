
// Find falsy value from array 
// let myArray = ['mahmud', 0, 'feroz', true, false, undefined, NaN, 25, ['apple', 'banana']];

// function FilterFalse(InputeArray) {
//     for (let i = 0; i < InputeArray.length; i++) {
//         if (!InputeArray[i]) {
//             console.log(InputeArray[i])
//         }

//     }
// }
// FilterFalse(myArray)

function FilterFalse(InputeArray) {
    for (let i = 0; i < InputeArray.length - 1; i++) {
        if (!InputeArray[i]) {
            console.log(InputeArray[i])
            
        }
    }
    if (lastArray = (InputeArray[InputeArray.length - 1])) {
        for (let i = 0; i < lastArray.length; i++) {
            if (!lastArray[i]) {
                console.log(lastArray[i])
            }
        }
    }

}
FilterFalse(myArray)
