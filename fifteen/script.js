var todos=[
	"clean room",
	"brush",
	"exercise",
	"study JS",
	"eat healthy"
];

// // FOR LOOP:
// var todosLength=todos.length;
// for(var i=0; i<todosLength; i++)
// {
// 	// todos[i]=todos[i]+ "!";
// 	// console.log(todos[i] + "!");
// 	todos.pop();
// }

//FOR EACH:
todos.forEach(function(todo,i)
{
	console.log(todo,i);
})

// // WHILE LOOP:
// var counterOne=0;
// while(counterOne<10)
// {
// 	console.log(counterOne);
// 	counterOne++;
// }

// //DO WHILE:
// var counterTwo=10;
// do
// {
// 	console.log(counterTwo);
// 	counterTwo--;
// }
// while(counterTwo>0);