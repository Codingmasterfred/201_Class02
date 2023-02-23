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
            // handle invalid input
            console.log("Invalid input, please answer yes or no.");
        }
    } CareerF(Career);
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
            // handle invalid input
            console.log("Invalid input, please answer yes or no.");
        }
    } SportF(SportsRespond);
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
            // handle invalid input
            console.log("Invalid input, please answer yes or no.");
        }
    } HobbyF(HobbyRespond);

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
            // handle invalid input
            console.log("Invalid input, please answer yes or no.");
        }
    } FoodF(FoodRespond);

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
    console.log()





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


    // console.log(favCharacters(TopTen));


    // const myArray = [];
    // let input = prompt("Enter a value to add to the array, or 'done' to exit");

    // while (input !== "done") {
    //     myArray.push(input);
    //     input = prompt("Enter another value to add to the array, or 'done' to exit");
    // }

    // console.log(myArray);


    alert("your score is " + correct + "/7")
}



//
// else if(liveAt == "tenneesee"){
//     alert("You got it right!!");
//     createImages();
//     alert("This is my house in " + live);
//     liveResponses.innerHTML = live ;
//  }//else if(liveAt != tennessee){
//     alert("Wrong Answer")
// }


// function HousePic() {
//     var div = document.getElementById("HouseImage");
//     let img = document.createElement("IMG");
//     img.width = 300;
//     img.src = "House.jpg";
//     img.classList.add("image");
//     div.appendChild(img);
// }

// function CareerPic(){
//     var div = document.getElementById("CareerPic");
//     let img = document.createElement("IMG");
//     img.width = 300;
//     img.scr = "ComputerJobPic.jpg";
//     img.classList.add("image");
//     div.appendChild(img);
// }

// function WrongPic(){
//     var div = document.getElementById("WrongPic");
//     let img = document.createElement("IMG");
//     img.width = 300;
//     img.scr = "WrongPic.webp";
//     img.classList.add("image");
//     div.appendChild(img);
// }







// showAlertForLive(live)
// function showAlert() {
//     var image = document.getElementById("alert-image");
//     image.style.display = "block";
//     alert("Alert!");
//     image.style.display = "none";
// }