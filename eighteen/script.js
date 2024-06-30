// var button=document.getElementsByTagName("button")[0];

// button.addEventListener("click", function(){
// 	console.log("CLICK!!");
// })

var button= document.getElementById("enter");
var input= document.getElementById("userinput");
var ul=document.querySelector("ul");

button.addEventListener("click", function(){
	if(input.value.length>0)
	{
		var li=document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value="";
	}
	else
	{
		alert("Enter something!");
	}
})

input.addEventListener("keydown", function(event){
	if(input.value.length>0 && event.keyCode===13)
	{
		var li=document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value="";
	}
	else if(input.value.length<=0 && event.keyCode===13)
	{
		alert("Enter something!");
	}
})