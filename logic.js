var hand = ["rock", "paper", "scissors"]; //cases

function rock() {
    $("#player").html("<i class='symbol far fa-hand-rock'></i>");
    rockPaperScissors();
}
function paper() {
    $("#player").html("<i class='symbol far fa-newspaper'></i>");
    rockPaperScissors();
}
function scissors() {
    $("#player").html("<i class='symbol far fa-hand-scissors'></i>");
    rockPaperScissors();
}
function rockPaperScissors() {
    var symbol = arguments.callee.caller.name;
    var comSymbol = hand[Math.floor(Math.random() * 3)]; //randomly choose what hand the computer plays
    switch (comSymbol) {
        case "rock":
            $("#computer").html("<i class='symbol far fa-hand-rock'></i>");
            console.log(symbol == "scissors" ? userLoss() : symbol == "paper" ? userWin() : tie());
            break;
        case "paper":
            $("#computer").html("<i class='symbol far fa-newspaper'></i>");
            console.log(symbol == "rock" ? userLoss() : symbol == "scissors" ? userWin() : tie())
            break;
        case "scissors":
            $("#computer").html("<i class='symbol far fa-hand-scissors'></i>");
            console.log(symbol == "paper" ? userLoss() : symbol == "rock" ? userWin() : tie())
            break;
    }
}
function userLoss() {
    $("#result").html("<h1 class ='alert alert-sucess'>You lost. :(</h1>")
}
function userWin() {
    $("#result").html("<h1 class ='alert alert-sucess'>You won! :D</h1>")
}
function tie() {
    $("#result").html("<h1 class ='alert alert-sucess'>Tie.</h1>")
}