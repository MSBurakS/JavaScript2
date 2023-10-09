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
function calculateResult(calculationType){
    const entredNumber = getUserNumberInput();
    const initialResult =currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += entredNumber;
        mathOperator = '+';
    } else {
        currentResult -= entredNumber;
        mathOperator = '-';
    }
    
    createAndWriteOutput(mathOperator, initialResult, entredNumber);
    writeToLog(calculationType,initialResult,entredNumber,currentResult);
 }
//toplama işlemi
function add(){
    calculateResult('ADD');
}
   
//çıkarma işlemi
function subtract(){
    calculateResult('SUBTRACT');
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

