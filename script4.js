let selectedNumber = 5;
let randomNumber = Math.floor(Math.random() * 10);

// Assignment (4/4)
function luckTester (input,generated)
{
	if(input == generated)
{
	return("You are LUCKY!")
}
else
{
	return("Not so lucky. The random number is " + randomNumber +".")
}
}


alert(luckTester(selectedNumber,randomNumber))