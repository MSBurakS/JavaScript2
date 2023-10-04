const defaultResult = 0;
let currentResult = defaultResult;
let logEntries=[];//toplanan sayıların dizisi
//hesap makinesi

function getUserNumberInput(){
    return parseInt(userInput.value);//textboxtan gelen değeri inte çevirmek
}
//hesaplama ve sonuçlandırma
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDesciription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult,calcDesciription);//vendor.js  te
}
//toplama işlemi
function add(){
    const entredNumber = getUserNumberInput();
    const initialResult =currentResult;
    currentResult += entredNumber;
    createAndWriteOutput('+', initialResult, entredNumber)
    logEntries.push(entredNumber);
    console.log(logEntries);
}
//çıkarma işlemi
function subtract(){
    const entredNumber = getUserNumberInput();
    const initialResult =currentResult;
    currentResult = currentResult - entredNumber;
    createAndWriteOutput('-', initialResult, entredNumber)
}

//çarpma işlemi
function multiply(){
    const entredNumber = getUserNumberInput();
    const initialResult =currentResult;
    currentResult *= entredNumber;
    createAndWriteOutput('*', initialResult, entredNumber)
}

function divide(){
    const entredNumber = getUserNumberInput();
    const initialResult =currentResult;
    currentResult = currentResult / entredNumber;
    createAndWriteOutput('/', initialResult, entredNumber)
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

