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

function writeToLog(
    operationIdentifier, 
    prevResult, 
    operationNumber, 
    newResult
    ){
        const logEntry ={
            operation:operationIdentifier,
            prevResult:prevResult,
            number: operationNumber,
            result: newResult
        };
        logEntries.push(logEntry);
        console.log(logEntries);
    }
    
//toplama işlemi
function add(){
    const entredNumber = getUserNumberInput();
    const initialResult =currentResult;
    currentResult += entredNumber;
    createAndWriteOutput('+', initialResult, entredNumber);
    writeToLog('ADD',initialResult,entredNumber,currentResult);
}
   
//çıkarma işlemi
function subtract(){
    const entredNumber = getUserNumberInput();
    const initialResult =currentResult;
    currentResult -= entredNumber;
    createAndWriteOutput('-', initialResult, entredNumber)
    writeToLog('SUBTRACT',initialResult,entredNumber,currentResult);
}

//çarpma işlemi
function multiply(){
    const entredNumber = getUserNumberInput();
    const initialResult =currentResult;
    currentResult *= entredNumber;
    createAndWriteOutput('*', initialResult, entredNumber)
    writeToLog('MULTIPLY',initialResult,entredNumber,currentResult);
}

function divide(){
    const entredNumber = getUserNumberInput();
    const initialResult =currentResult;
    currentResult = currentResult / entredNumber;
    createAndWriteOutput('/', initialResult, entredNumber)
    writeToLog('DIVIDE',initialResult,entredNumber,currentResult);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

