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
	},
	{
			username:"Sally",
			password:"kitty"
	},
	{
			username:"Andy",
			password:"tiny"
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
		{
			username:"Mitch",
			timeline:"Javascript is pretty cool!"
	}
];


function isUserValid(username,password)
{
	for(var i=0;i<database.length;i++)
	{
		if(database[i].username===username && database[i].password===password)
		{
			return true;
		}
	}
	return false;
}


function signIn(username,password)
{
	if(isUserValid(username,password))
	{
			console.log(newsFeed);
	}
	else
	{
		alert("Sorry wrong credentials!");
	}
}

var userPrompt= prompt("What is your username");
var passPrompt= prompt("What is your password");

signIn(userPrompt,passPrompt);

