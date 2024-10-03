function calculaterectanglearea(){
    
    const rectanglelength = document.getElementById('rectangle-length');
    const lengthtext = rectanglelength.value;
    const length = parseFloat(lengthtext);
    console.log(length);


    const widthInput = document.getElementById('rectangle-width');
    const widthtext = widthInput.value;
    const width = parseFloat(widthtext);
    console.log(width);

    const area = length * width;

    console.log('Area of the Rectangle: ', area);

    const RectangleAreaSpan = document.getElementById('rectangle-area');
    RectangleAreaSpan.innerText = area;



}
