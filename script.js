'use strict'

let name = prompt("What is your name");
let WelcomeStatement = document.querySelector("#Welcome");

function DisplayUsername(UserName) {
    if (UserName === null || UserName.length == 0) {
        WelcomeStatement.innerHTML = "Welcome";
    } else {
        WelcomeStatement.innerHTML = "Welcome , " + UserName;
    }
}

DisplayUsername(name);

function StartGame() {
    // let correct = 0;
    // let Career = prompt("Do you think i want to be a web developer? (yes or no)");
    // let CareerResponse = document.getElementById("Career")
    // function CareerF(UserAnswer1) {
    //     while (UserAnswer1 != "yes" || UserAnswer1 != "no") {
    //         if (UserAnswer1.toLowerCase() == "yes") {
    //             alert("You are correct"), correct++;
    //             CareerResponse.innerHTML = UserAnswer1;
    //             console.log(UserAnswer1);
    //             break;
    //         } else if (UserAnswer1.toLowerCase() == "no") {
    //             alert("You are incorrect");
    //             console.log("Exiting...");
    //             break;
    //         } else {
    //             // handle invalid input
    //             console.log("Invalid input, please answer yes or no.");
    //         }
    //     }
    // } CareerF(Career);
    // let SportsRespond = prompt("Do i prefer to play football? (yes or no)");
    // let Sports = document.getElementById("Sports")

    // function SportF(UserAnswer2) {
    //     while (UserAnswer2 != "yes" || UserAnswer2 != "no") {
    //         if (UserAnswer2.toLowerCase() == "yes") {
    //             alert("You are incorrect");
    //             Sports.innerHTML = UserAnswer2;
    //             console.log(UserAnswer2);
    //             break;
    //         } else if (UserAnswer2.toLowerCase() == "no") {
    //             alert("You are correct"), correct++;
    //             break;
    //         } else {
    //             // handle invalid input
    //             console.log("Invalid input, please answer yes or no.");
    //         }
    //     }
    // } SportF(SportsRespond);
    // let HobbyRespond = prompt("Is Listening to music is my Hobby ? (yes or no)");
    // let hobby = document.getElementById("Hobbies")

    // function HobbyF(UserAnswer3) {
    //     while (UserAnswer3 != "yes" || UserAnswer3 != "no") {
    //         if (UserAnswer3.toLowerCase() == "yes") {
    //             alert("You are correct"), correct++;
    //             hobby.innerHTML = UserAnswer3;
    //             console.log(UserAnswer3);
    //             break;
    //         } else if (UserAnswer3.toLowerCase() == "no") {
    //             alert("You are incorrect");
    //             break;
    //         } else {
    //             // handle invalid input
    //             console.log("Invalid input, please answer yes or no.");
    //         }
    //     }
    // } HobbyF(HobbyRespond);

    // let FoodRespond = prompt("Is my favorite food a mango ? (yes or no)");
    // let Food = document.getElementById("Food")

    // function FoodF(UserAnswer4) {
    //     while (UserAnswer4 != "yes" || UserAnswer4 != "no") {
    //         if (UserAnswer4.toLowerCase() == "yes") {
    //             alert("You are correct"), correct++;
    //             Food.innerHTML = UserAnswer4;
    //             console.log(UserAnswer4);
    //             break;
    //         } else if (UserAnswer4.toLowerCase() == "no") {
    //             alert("You are incorrect");
    //             break;
    //         } else {
    //             // handle invalid input
    //             console.log("Invalid input, please answer yes or no.");
    //         }
    //     }
    // } FoodF(FoodRespond);

    const Top7 = ["Goku", "Naruto", "sasuke","kakashi", "vegeta", "ichigo", "Gohan",];
    let TopCharacter = prompt("Name one of my favorite anime character? (look at the bottom for answer choice)")
    
    

    function favCharacters(FavoriteC) {
        let wrong = true;
        for (let i = 0; i < 5 ; i++){
            if ( Top7.includes(FavoriteC) ){
                console.log(Top7.includes(FavoriteC));
                alert("You are correct!!");
                wrong = false;
                break;
            }else{
                alert("Your wrong ");
                FavoriteC = prompt("Name one of my favorite anime character? (look at the bottom for answer choice")

            }

            // if (FavoriteC != TopTen[0]){
            //     Top3 = prompt(" Wrong Answer ,What is my main anime character? (look at the bottom for answer choice)")
            //     i++;
            // }else if(i == 4 &&  FavoriteC == wrong){
            //     alert("Out of chances");
            // }else if(FavoriteC == TopTen[0]){
            //     alert("You are correct!!")//correct++;
            //    break;
               
            // }else{
            //     console.log("Here");
            // }

        }
        if(wrong ){
            alert("Out of chances");
        }
    } 
    console.log(TopTen[0])
    favCharacters(TopCharacter);
    // console.log(favCharacters(TopTen));


    // const myArray = [];
    // let input = prompt("Enter a value to add to the array, or 'done' to exit");

    // while (input !== "done") {
    //     myArray.push(input);
    //     input = prompt("Enter another value to add to the array, or 'done' to exit");
    // }

    // console.log(myArray);


    // alert("your score is " + correct + "/7")
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