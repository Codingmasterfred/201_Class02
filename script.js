'use strict'

let name1 = prompt("What is your name");
let WelcomeStatement = document.querySelector("#Welcome");

function DisplayUsername(UserName) {
    if (UserName === null || UserName.length == 0) {
        WelcomeStatement.innerHTML = "Welcome";
    } else {
        WelcomeStatement.innerHTML = "Welcome , " + UserName;
    }
}

DisplayUsername(name1);
console.log(DisplayUsername(UserName));

function StartGame() {
    let correct = 0;
    let Career = prompt("Do you think i want to be a web developer? (yes or no)");
    function CareerF(UserAnswer1) {
        while (UserAnswer1 != "yes" &&  UserAnswer1 != "no") {
            UserAnswer1 = prompt("Invalid input, please answer yes or no.")
        }
        if (UserAnswer1.toLowerCase() == "yes") {
            alert("You are correct"), correct++;
            console.log(UserAnswer1);
        } else if (UserAnswer1.toLowerCase() == "no") {
            alert("You are incorrect");
            console.log("Exiting...");
        } else {
            
            console.log("Invalid input, please answer yes or no.");
        }
    } CareerF(Career);
    console.log(CareerF(Career));


    let SportsRespond = prompt("Do i prefer to play football? (yes or no)");

    function SportF(UserAnswer2) {
        while (UserAnswer2 != "yes" && UserAnswer2 != "no") {
           UserAnswer2 = prompt("Invalid input, please answer yes or no.")

        } if (UserAnswer2.toLowerCase() == "yes") {
            alert("You are incorrect");
            
            console.log(UserAnswer2);
           
        } else if (UserAnswer2.toLowerCase() == "no") {
            alert("You are correct"), correct++;
            
        } else {
            
            console.log("Invalid input, please answer yes or no.");
        }
    } SportF(SportsRespond);
    console.log(SportF(SportsRespond));
    

    let HobbyRespond = prompt("Is Listening to music is my Hobby ? (yes or no)");

    function HobbyF(UserAnswer3) {
        while (UserAnswer3 != "yes" && UserAnswer3 != "no") {
           UserName3 = prompt("Try again")
        } if (UserAnswer3.toLowerCase() == "yes") {
            alert("You are correct"), correct++;
            console.log(UserAnswer3);
        
        } else if (UserAnswer3.toLowerCase() == "no") {
            alert("You are incorrect");
            
        } else {
            
            console.log("Invalid input, please answer yes or no.");
        }
    } HobbyF(HobbyRespond);
    console.log(HobbyF(HobbyRespond));

    let FoodRespond = prompt("Is my favorite food a mango ? (yes or no)");

    function FoodF(UserAnswer4) {
        while (UserAnswer4 != "yes" || UserAnswer4 != "no") {
            UserName4 = prompt("Invalid input, please answer yes or no.")
        }if (UserAnswer4.toLowerCase() == "yes") {
            alert("You are correct"), correct++;
            console.log(UserAnswer4);
            
        } else if (UserAnswer4.toLowerCase() == "no") {
            alert("You are incorrect");
           
        } else {
            
            console.log("Invalid input, please answer yes or no.");
        }
    } FoodF(FoodRespond);
    console.log(FoodF(FoodRespond));


    const CorrectNum = 7;
    
    
    function NumberF() {
        
        let UserWasCorrect = false;
        for(let i = 0; i < 4; i++){
            let UserNum = prompt("What is my lucky number")  
            if(UserNum == CorrectNum){
                UserWasCorrect = true;
                break;
            }else if(UserNum < 7){ 
                alert("Too Low");
                
            }else if(UserNum > 7){
                alert("Too High")
            }
        }

        if(UserWasCorrect == false){
            alert("Out of chances");
        }else{
            alert("You are correct"),correct++;
        }

    } 
    NumberF();
    console.log(NumberF())





    const Top7 = ["Goku", "Naruto", "sasuke","kakashi", "vegeta", "ichigo", "Gohan"];
    let TopCharacter = prompt("Name one of my favorite anime character? (look at the bottom for answer choice)")
    
    

    function favCharacters(FavoriteC) {
        let wrong = true;
        for (let i = 0; i < 5 ; i++) {
            for (let j = 0; j < Top7.length; j++) {
                if ( Top7[i].toLowerCase == FavoriteC ){
                    alert("You are correct!!"),correct++;
                    wrong = false;
                    break;
                }
            }
            if (wrong) {
                alert("Your wrong ");
                FavoriteC = prompt("Name one of my favorite anime character? (look at the bottom for answer choice");
            }
        }
        if (wrong) {
            alert("Out of chances");
        }
    } 
    favCharacters(TopCharacter);
    console.log(favCharacters(TopCharacter));


    alert("your score is " + correct + "/7")
}


// function WrongPic(){
//     var div = document.getElementById("WrongPic");
//     let img = document.createElement("IMG");
//     img.width = 300;
//     img.scr = "WrongPic.webp";
//     img.classList.add("image");
//     div.appendChild(img);
// }
