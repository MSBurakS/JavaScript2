const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function add(){
    const entredNumber = getUserNumberInput();
    const calcDesciription = `${currentResult} + ${entredNumber}`
    currentResult = currentResult + entredNumber;
    outputResult(currentResult,calcDesciription);
}

addBtn.addEventListener('click',add);

