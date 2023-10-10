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

    if(calculationType !== 'ADD' && 
    calculationType !=='SUBTRACT' && 
    calculationType !=='MULTIPLY' &&
    calculationType !=='DIVIDE'){
    return;
    }

    //if(calculationType === 'ADD' ||
    //calculationType === 'SUBTRACT' ||
    //calculationType === 'MULTIPLY' ||
    //calculationType === 'DIVIDE'){
    const entredNumber = getUserNumberInput();
    const initialResult =currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += entredNumber;
        mathOperator = '+';
    } else if(calculationType ==='SUBTRACT') {
        currentResult -= entredNumber;
        mathOperator = '-';
    } else if(calculationType ==='MULTIPLY'){
        currentResult *= entredNumber;
        mathOperator = '*';
    } else if(calculationType ==='DIVIDE'){
        currentResult /= entredNumber;
        mathOperator = '/';
    }

   
    
    createAndWriteOutput(mathOperator, initialResult, entredNumber);
    writeToLog(calculationType,initialResult,entredNumber,currentResult);
    //}

    
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
    calculateResult('MULTIPLY');
}

function divide(){
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

