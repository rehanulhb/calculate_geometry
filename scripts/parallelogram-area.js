/* function calculateParallelogramArea(){

    
    const base = getParallelogramBase();
    console.log(base);

    const height = getParallelogramHeight();
    console.log(height)

    

} */


/* function getParallelogramBase(){
    const baseInput = document.getElementById('parallelogram-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    return base;
    
}


function getParallelogramHeight(){
    const heightInput = document.getElementById('parallelogram-height');
    const heightText = heightInput.value;
    const height = parseFloat(heightText);
    return height;
} */


function calculateParallelogramArea(){
    const base = getInputValueById('parallelogram-base');
    console.log('base value', base);

    const height = getInputValueById('parallelogram-height');
    console.log('height value', height);

    const area = base * height;
    console.log('The Area of the parallelogram is : ', area);

    setInnerTextById('parallelogram-area', area);

}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}


function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area; 
}

