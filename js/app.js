

import ReadNumber from "./readnumber"

import InitScreen from "./initScreen"
import Play from "./play"



var readnumber

 window.synth = window.speechSynthesis

 var playlang = "en-US"
 var playlevel = "easy"

 var isGameStart = false;


$(function(){

    console.log("jq start")


    readnumber = new ReadNumber()

    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    InitScreen.setInitScreen()

    addPlayEvent()
   

    $("#start").click(()=>{
        //appReadNumber()

        appReadNumberCallbacka()

       
    })

})



function addPlayEvent(){

    $("#start_play").click(()=>{

        console.log("start play")

        $(".startContainer").css("display","none")
        $(".gameContainer").css("display","block")

         playlang = $("#start_language_option").find(":selected").val()
         playlevel = $("#start_level_option").find(":selected").val()

        console.log(playlang)
        console.log(playlevel)

        var option = {}

        option.lang = playlang
        option.level = playlevel

        var play = Play(option)


    })
}


function appReadNumber(){

    console.log("btn read number")

    readnumber.read("11111")



}

function appReadNumberCallbacka(){

    readnumber.readCallback("111",(isFinished)=>{
        console.log(isFinished)
    });

}

// function callback(isFinished){

//     console.log(isFinished)
// }


