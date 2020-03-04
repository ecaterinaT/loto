function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function createNumber(n) {
    const result = {
        guid: uuidv4(),
        n
    };
    return result;
}

function sortArray(arr, prop) {
    arr.sort((a, b) => (a[prop] > b[prop]) ? 1 : -1);
}

function extrageNumere(n, numereInBoll) {
    const listNumere = [];
    for (let i = 1; i <= numereInBoll; i++) {
        const numar = createNumber(i);
        listNumere.push(numar);
    }

    // merge insa mai generic e mai jos varianta cu sortArray
    //listNumere.sort((a,b) => (a.guid > b.guid) ? 1 : -1); 

    sortArray(listNumere, 'guid');

    //aici am folosit reduce, insa se poate si cu un for simplu
    const result = listNumere.slice(0, n).reduce((acumulator, currentValue) => {
        acumulator.push(currentValue.n);
        return acumulator;
    }, []);

    return result;
}