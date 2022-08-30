function replaceMultiple(valueToReplace, firstMultiple, secondMultiple){
    let replacedValue = valueToReplace;
    if(valueToReplace % firstMultiple === 0 && valueToReplace % secondMultiple === 0){
        replacedValue = "buzz";
    }else if(valueToReplace % firstMultiple === 0){
        replacedValue = "foo";
    }else if(valueToReplace % secondMultiple === 0){
        replacedValue = "mit";
    }
    return replacedValue;
};

function generateNumbers(maxNumber, step, firstMultiple, secondMultiple){
    if(step<1){
        return [];
    }
    
    const startFrom = 0;
    let generatedNumbers = Array.from({ length: (maxNumber - startFrom) / step + 1}, (_, i) => replaceMultiple(startFrom + (i * step), firstMultiple, secondMultiple));
    return generatedNumbers;
}

const N = process.argv[2];
const p = process.argv[3];
const a = process.argv[4];
const b = process.argv[5];
let result = generateNumbers(N,p,a,b);
console.log("N="+N+" p="+p+" a="+a+" b="+b);
console.log(result);