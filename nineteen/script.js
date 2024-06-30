var css= document.querySelector("H3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");

// console.log(css); //TO CHECK
// console.log(color1);
// console.log(color2);
// console.log(body);

function setGradient()
{
	body.style.background="linear-gradient(to right, "+ color1.value+ "," + color2.value + ")";
}
color1.addEventListener("input", setGradient);
	// console.log(color1.value);
	// body.style.background="linear-gradient(to right, "+ color1.value+ "," + color2.value + ")";

color2.addEventListener("input", setGradient);
	// console.log(color2.value);
	// body.style.background="linear-gradient(to right, "+ color1.value+ "," + color2.value + ")";)

