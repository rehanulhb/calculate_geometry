function calcualteTriangleArea() {
    //Triangle base
  const trianglebaseinput = document.getElementById("triangle-base");
  const trianglebasetext = trianglebaseinput.value;
  const base = parseFloat(trianglebasetext);
  console.log(base);


  //Triangle Height
  const triangleheightinput = document.getElementById('triangle-height');
  const triangleheighttext = triangleheightinput.value;
  const height = parseFloat(triangleheighttext);
  console.log(height);

    const area = 0.5 * base * height;
    console.log('Area of the triangle is :', area);


    //Calculate Triangle Area

    const triangleareaspan = document.getElementById('triangle-area');
    triangleareaspan.innerHTML =area;

}
