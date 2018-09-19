/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


function newGame(){
    document.getElementById('score-0').innerHTML = 0;
    document.getElementById('current-0').innerHTML = 0;
    
    document.getElementById('score-1').innerHTML = 0;
    document.getElementById('current-1').innerHTML = 0;
}

function rollDice(){
    var arrPlayer = document.getElementById('player-1-active').classList;
    var player1=0;
    if (arrPlayer[1]=="active"){
        player1=1;
    }
    var num = (Math.floor(Math.random() * 6) + 1);
    document.getElementById("imageid").src = "dice-" + num + ".png";
    if (num == 1){
        if (player1){
            document.getElementById('player-1-active').classList.remove("active");
            document.getElementById('player-2-active').classList.add("active");
        }
        else {
            document.getElementById('player-2-active').classList.remove("active");
            document.getElementById('player-1-active').classList.add("active");
        }
        return 0;
    }
    var newNum;
    if (player1){
        newNum = document.getElementById('score-0').innerHTML;
    }
    else {
        newNum = document.getElementById('score-1').innerHTML;
    }
    newNum = parseInt(newNum) + parseInt(num);
    if (newNum >=100){
        if (player1){
            document.getElementById('score-0').innerHTML = 0;
            var cur1 = document.getElementById('current-0').innerHTML ;
            cur1++;
            document.getElementById('current-0').innerHTML = cur1;
            document.getElementById('player-1-active').classList.remove("active");
            document.getElementById('player-2-active').classList.add("active");
        }
        else {
            document.getElementById('score-1').innerHTML = 0;
            cur2 = document.getElementById('current-1').innerHTML ;
            cur2++;
            document.getElementById('current-1').innerHTML = cur2;
            document.getElementById('player-2-active').classList.remove("active");
            document.getElementById('player-1-active').classList.add("active");
        }
        return 0;
    }
    else {
        if (player1){
            document.getElementById('score-0').innerHTML = newNum;

        }
        else {
            document.getElementById('score-1').innerHTML = newNum;
        }
    }
}

function nextPlayer(){
    var arrPlayer1 = document.getElementById('player-1-active').classList;
    if (arrPlayer1[1] == "active"){
        document.getElementById('player-1-active').classList.remove("active");
        document.getElementById('player-2-active').classList.add("active");
    }
    else {
        document.getElementById('player-2-active').classList.remove("active");
        document.getElementById('player-1-active').classList.add("active");
    }
}


