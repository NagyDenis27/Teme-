function  play(){

    var  choices = ["rock", "paper", "scissors"];

    var userInput = choices[(Math.random()3*)];

             console.log("User  chose" + ` ${userInput}`);

    var computerInput = choices[Math.floor(Math.random()*3)];
                  
             console.log("Computer chose" + ` ${computerInput}`);

    var winner =  console.log(userInput, computerInput);   
    
        
        if (userInput === 'rock' && computerInput === 'paper') {
          
            console.log('You lose! Rock beats Paper');
        } 
        
        else if (userInput === 'scissors' && computerInput === 'paper') {
          console.log('You win! Scissors beats Paper');
        }
        
        else {
          
            console.log('You lose!');
        }
      }
















