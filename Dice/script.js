/*
    Neil Liu Web Dev P7/8
    Program allows the rolling of two separate dices and the displaying of the total.
    Each dice sum is tracked separately.
*/
function initialize(){
    one = document.getElementById("one");
    two = document.getElementById("two");
    total = document.getElementById("total");
    num1 = "0";
    num2 = "0";
    one.innerHTML = "Dice 1: " + num1;
    two.innerHTML = "Dice 2: " + num2;
    total.innerHTML = "Total: " + parseInt(parseInt(num1) + parseInt(num2));
}
//Rolls Dice 1
function rollDice1(){
    num1 = parseInt((Math.random() * 6)+1);
    one.innerHTML = "Dice 1: " + num1;
    addTotal();
}
//Rolls DIce 2
function rollDice2(){
    num2 = parseInt((Math.random() * 6)+1);
    two.innerHTML = "Dice 2: " + num2;
    addTotal();
}
//Rolls Both Dice
function rollBoth(){
    rollDice1();
    rollDice2();
    addTotal();
}
//Adds the sum of both dice together
function addTotal(){
    total.innerHTML = "Total: " + parseInt(parseInt(num1) + parseInt(num2));
}