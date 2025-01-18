let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice= () => {
    const options = ["rock", "paper", "scissors"];
    const randId = Math.floor(Math.random() *3);
    return options[randId];
}

const playgame = (choiceId) => {
    console.log("userChoice = ",choiceId);
    // generating comp choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(compChoice === choiceId){
        drawgame();                
    }else{
        winning(choiceId, compChoice);
    }

}

const drawgame = () => {
    console.log("game has been draw");
    msg.innerText = "Game has been draw.!";
    msg.style.backgroundColor = "darkblue";
    msg.style.color = "white";
}

const winning = (choiceId,compChoice) => {
    if(choiceId == "rock" && compChoice == "scissors" ||
        choiceId == "paper" && compChoice == "rock" ||
        choiceId == "scissors" && compChoice == "paper"){
            console.log("Congratulations.! You have won the game");
            msg.innerText = "Congratulations.! You have won the game";
            msg.style.backgroundColor = "green";
            msg.style.color = "white";
            user++;
            document.getElementById("user").innerText = user;
    }else{
        console.log("Computer has won the game.!");
        msg.innerText = "Computer has won the game.!";
        msg.style.backgroundColor = "black";
        msg.style.color = "white";
        comp++;
        document.getElementById("comp").innerText = comp;

    }
}


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener(("click"), () =>{
        let choiceId = choice.getAttribute("id");
        playgame(choiceId);

    });    
});