//q1
function js_style() {
  document.querySelector("#text").style.color = "red";
}
//q2
function getFormvalue() {
  let fName = document.querySelector("[name=fname]").value;
  let lName = document.querySelector("[name=lname]").value;
  console.log(`${fName} ${lName}`);
}
//q3
//Write a JavaScript program to set the background color of a paragraph.
//q4
function getAttributes() {
  let u = document.getElementById("w3r").href;
  alert("The value of the href attribute of the link is : " + u);
  let v = document.getElementById("w3r").hreflang;
  alert("The value of the hreflang attribute of the link is : " + v);
  let w = document.getElementById("w3r").rel;
  alert("The value of the rel attribute of the link is : " + w);
  let x = document.getElementById("w3r").target;
  alert("The value of the target attribute of the link is : " + x);
  let y = document.getElementById("w3r").type;
  alert("The value of the type attribute of the link is : " + y);
}
//q5
// Write a JavaScript program to remove items from a dropdown list.
function removeColor() {
  let x = document.getElementById("colorSelect");
  console.log(x);

  x.remove(x.selectedIndex);
  // The Select selectedIndex property in HTML DOM ,it is used to set or return the index of the selected option in a drop-down list. The index of the drop-down list generally starts with 0 and returns -1 if no option is selected. This property returns the index of the first option if the drop-down list allows multiple selections.
}
//q6
//Count and display items of a dropdown list
function getOptions() {
  let x = document.getElementById("mySelect");
  let txt1 = "No. of items : ";
  l = x.length;
  txt1 += l;
  for (let i = 0; i < x.length; i++) {
    txt1 = txt1 + "\n" + x.options[i].text;
  }
  alert(txt1);
}
//q7
//Write a JavaScript program to calculate the volume of a sphere.
function volume_sphere() {
  let volume;
  let radius = document.getElementById("radius").value;
  radius = Math.abs(radius);
  volume = (4 / 3) * Math.PI * Math.pow(radius, 3); //4/3 pi r3
  volume = volume.toFixed(4);
  document.getElementById("volume").value = volume;
  return false;
}
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  volume_sphere();
});
