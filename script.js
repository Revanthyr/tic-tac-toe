console.log("hey")
const domController = (function(){
  const newGame = document.querySelector(".new-game")
  const text = document.querySelector(".text");
  newGame.addEventListener("click",()=> game.newGame())
    
    const buttons = document.querySelectorAll(".button")
    const updateBoard = function(){
            buttons.forEach(function(current){
                current.textContent = gameboard.getBoard()[current.getAttribute("number")]
            })
    }
    
    
    return{updateBoard,buttons,text}
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
        let name1 = prompt("Player 1 name:")
        let name2 = prompt("Player 2 name:")
        player1 =  createPlayer(name1,"x")
        player2 =  createPlayer(name2,"o")
        gameboard.cleanUp();
        domController.updateBoard()
        counter=2;
        console.log(counter)
        game.playGame();
  

        
    } 
    
    const playGame = function(){
      let counter = 2;
      console.log(counter)
        domController.buttons.forEach(element => {
          element.addEventListener("click",function(){
            console.log(counter)
            if (counter % 2 == 0){
              
              domController.text.textContent = "P2's turn"
              gameboard.addThing(player1.type,element.getAttribute("number"))
              
              domController.updateBoard();
              counter++
              if (game.checkWin()==true){
                console.log("p1 wins ez gg");
                counter=2
                domController.text.textContent = "p1 wins game is over"
                domController.buttons.forEach(element =>{
                  element.removeEventListener("click",function(){})
                  
                })
                player1 = {}
                  player2 = {}
              }
              
            }
            else if (counter%2 != 0){
              gameboard.addThing(player2.type,element.getAttribute("number"))
              domController.text.textContent = "P1 's turn"
              domController.updateBoard();
              counter++;
              if(game.checkWin() == true){
                console.log("p2wins gg ez")
                counter=2
                domController.text.textContent = "P2 won ez"
                domController.buttons.forEach(element =>{
                  element.removeEventListener("click",function(){})

                })
                player1 = {}
                  player2 = {}
              }
            }
            
          })
          
        })};
       
     //////////////////////////////////////////////////////////////////////////////  

      ////////////////////////////////////////////////////////////////////////////////
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
          return true
        }
        else if (three === four && four === five && five !== ""){
          return true
        }
        else if (six === seven && seven === eight && eight !== ""){  
          return true
        }
        else if (zero === three && three === six && six !== ""){ 
          return true
        }
        else if (one === four && four === seven && seven !== ""){
          return true
        }
        else if (two === five && five === eight && eight !== ""){
          return true 
        }
        else if (zero === four && four === eight && eight !== ""){
          return true
        }
        else if (two === four && four === six && six !== ""){
          return true
        }
       else{
        console.log("try again")
       }
    }

    
    return {checkWin,playGame,newGame}
})()


domController.updateBoard()


/* 
when you win a poput text appears sating who won, and the score of the player (score has tyo get update BTW )
it says whos tunr it is everyturn with text


*/