console.log("hey")
const domController = (function(){
    const button0 = document.querySelector("#b0")
    const button1 = document.querySelector("#b1")
    const button2 = document.querySelector("#b2")
    const button3 = document.querySelector("#b3")
    const button4 = document.querySelector("#b4")
    const button5 = document.querySelector("#b5")
    const button6 = document.querySelector("#b6")
    const button7 = document.querySelector("#b7")
    const button8 = document.querySelector("#b8")
    const buttons = document.querySelectorAll(".button")
    const updateBoard = function(){
            buttons.forEach(function(current){
                current.textContent = gameboard.getBoard()[current.getAttribute("number")]
            })
    }
    
    
    return{updateBoard,buttons}
    })()
const gameboard = (function(){
    let board = ["","","","","","","","",""];
    const addThing = function(player,position){
        if (board[position] == ""){
        board[position] = player;
    }} 
    const cleanUp = function(){
      board =   board.map((current)=>"")
    }
    const getBoard = ()=>board
    
    return {getBoard,addThing,cleanUp}

    
})()
const createPlayer = function(name,type){
    let score = 0
    const addScore = ()=> score++
    const getScore = ()=> score
    return {name,type,addScore,getScore}
}


const game = (function(){
    let player1,player2;
    const newGame = function(){
        let type1 = prompt("Player 1 name:")
        let type2 = prompt("Player 2 name:")
        player1 =  createPlayer(type1,"x")
        player2 =  createPlayer(type2,"o")
        
    }
    const playGame = function(){
        gameboard.cleanUp();
        let counter = 2;
        for(let i = 9;i > 0;i--){
      if  ( game.checkWin() == true){
        player1.addScore()
            console.log(`player ${player1.name} has won! Score: ${player1.getScore()}`)
            counter = 2
            break;
      }
      else if (counter%2 == 0){
        domController.buttons.forEach(function(current){
            current.addEventListener("click",function(){
            gameboard.addThing(player1.type,current.getAttribute("number"))
        })})
       
       counter++
       domController.updateBoard()
      }
      else {
        gameboard.addThing(player2.type,prompt("where to put thing player 2"))
        counter++
        domController.updateBoard()
      }}  }
    const checkWin = function(){
        let zero = gameboard.getBoard()[0]
        let one = gameboard.getBoard()[1]
        let two = gameboard.getBoard()[2];
        let three = gameboard.getBoard()[3];
        let four = gameboard.getBoard()[4];
        let five = gameboard.getBoard()[5]
        let six = gameboard.getBoard()[6]
        let seven = gameboard.getBoard()[7]
        let eight = gameboard.getBoard()[8]    
        if (zero === one && one === two && zero !== ""){
          if (player1.type === zero){     
            return true
          }
        }
        else if (three === four && four === five && five !== ""){
        }
        else if (six === seven && seven === eight && eight !== ""){  
        }
        else if (zero === three && three === six && six !== ""){ 
        }
        else if (one === four && four === seven && seven !== ""){
            
        }
        else if (two === five && five === eight && eight !== ""){
            
        }
        else if (zero === four && four === eight && eight !== ""){
            
        }
        else if (two === four && four === six && six !== ""){
            
        }
       else{
        console.log("try again")
       }
    }

    
    return {checkWin,newGame,playGame}
})()


domController.updateBoard()
game.newGame()
game.playGame()

/* 

gameboard as an array, inside of gameboard object.
=> IIFE
players as objects
=> not IIFE

game as object
=> IIFE


WHAT> DOES PLAYER NEED

WHAT DOES GAME NEED
=> checkfor wins => check for combinations => get the value => get the relevat player => call the player stuff
 => call player functions

starting a new turn (switch to other player)  => game object
adding new symbol where needed => cant add where its already => gameboard object
checking for a win => or a draw => gtame object

cleaning the board


*/