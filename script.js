function cumputerch(){
    let ch,ch1;
    ch=Math.floor(Math.random()*(3)+1);
    switch (ch){
        case 1:
            ch1="Rock";
            break;
        case 2:
            ch1="Papier";
            break;
        case 3:
            ch1="Scissors";
            break;

    }
    return ch1
}

function add(choice){
    let ch,ch1;
    switch (choice){
        case 1:
            ch="Rock";
            break;
        case 2:
            ch="Papier";
            break;
        case 3:
            ch="Scissors";
            break;

    }
    ch1=cumputerch();
    game(ch,ch1)
    

    
}
function game(ch,ch1){
    if (ch===ch1) alert("tie!");
    else if(ch==="Rock" && ch1==="Scissors")alert(`You Won \nYou Picked ${ch} and the AI picked ${ch1}`);
    else if(ch==="Rock" && ch1==="Papier") alert(`You Lost \nYou Picked ${ch} and the AI picked ${ch1}`);
    else if (ch==="Papier" && ch1==="Rock") alert(`You won \nYou Picked ${ch} and the AI picked ${ch1}`);
    else if (ch==="Papier" && ch1==="Scissors") alert(`You Lost \nYou Picked ${ch} and the AI picked ${ch1}`);
    else if(ch==="Scissors" && ch1==="Papier") alert(`You Won \nYou Picked ${ch} and the AI picked ${ch1}`);
    else alert(`You Lost \nYou Picked ${ch} and the AI picked ${ch1}`);
}