function myEach(collection, callback) {
    for (const index in collection) {
        callback(collection[index])
    }
    return collection;
}

function myMap(collection,callback) {
    const newArr = []
    for (const num in collection) {
        newArr.push(callback(collection[num]))
    }
    return newArr;
}

function myReduce(collection,callback,acc) {
    acc = acc || 0;
    let totalSum = acc;
    let arraySum = 0;
    for (const num in collection) {
        arraySum += callback(0, collection[num], collection);
    }
    return totalSum += arraySum;
}

function myFind(collection,predicate) {
    for (const num in collection) {
        if (predicate(collection[num]) == true) {
            return collection[num];
        }
    }
}

function myFilter(collection,predicate) {
    let newArr = [];
    for (const num in collection) {
        if (predicate(collection[num]) == true) {
            newArr.push(collection[num]);
        }
    }
    return newArr;
}

function mySize(collection) {
    let i = 0;
    for (const num in collection) {
        i ++;
    }

    return i;
}

function myFirst(array, n) {
    n = n || 0;
    let newArr = [];
    if (n === 0) {
        return array[n];
    } else {
        for (let i = 0; i < n; i++) {
            newArr.push(array[i]);
        }
        return newArr;
    }
}

function myLast(array, n) {
    n = n || 0;
    const sizeArray = mySize(array)
    let newArr = [];
    if (n === 0) {
        return array[sizeArray-1];
    } else {
        for (let i = 1; i < n+1; i++) {
            newArr.unshift(array[(sizeArray - i)]);
        }
        return newArr;
    }
}

function myKeys(object) {
    let newArr = [];
    for (const key in object) {
        newArr.push(key)
    }

    return newArr;
}

function myValues(object) {
    let newArr = [];
    for (const key in object) {
        newArr.push(object[key])
    }

    return newArr;
}
