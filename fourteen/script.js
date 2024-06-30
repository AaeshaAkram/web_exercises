// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

// var user={
// 	username:"Zaki",
// 	password:"123"
// };

var database=[
	{
			username:"zaki",
			password:"123"
	}

];

var newsFeed=[
	{
			username:"Bobby",
			timeline:"So tired from all that learning!"
	},
	{
			username:"Koju",
			timeline:"Javascript is sooooo cool!"
	},
];

var userPrompt= prompt("What is your username");
var passPrompt= prompt("What is your password");

function signIn(username,password)
{
	if(username===database[0].username && password===database[0].password)
	{
		console.log(newsFeed);
	}
	else
	{
		alert("Sorry wrong credentials!")
	}
}
signIn(userPrompt,passPrompt);