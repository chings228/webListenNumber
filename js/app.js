


import InitScreen from "./initScreen"
import Play from "./play"
import Commonjs from "./common"

import ReadNumber from "./readnumber"



 //comment

 var playlang = "en-US"
 var playlevel = "easy"

 var isGameStart = false;


 window.play = new Play()

 window.synth = window.speechSynthesis



$(function(){

    

    console.log("jq start")
    console.log("xxxxxxx voice change")



        console.log("safari")

        setTimeout(function(){
            initGame()
        },500)


    


    


    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);


   



})


function initGame(){
    InitScreen.setInitScreen()
    
       
    
    addPlayEvent()

}



function addPlayEvent(){


    

    $("#start_play").click(()=>{



        console.log("start play")

        $(".startContainer").css("display","none")
        $(".playContainer").css("display","flex")

         playlang = $("#start_language_option").find(":selected").val()
         playlevel = $("#start_level_option").find(":selected").val()

        console.log(playlang)
        console.log(playlevel)

        var option = {}

        option.lang = playlang
        option.level = playlevel.toLowerCase()

        Commonjs.setCookie("level",playlevel,14);
        Commonjs.setCookie("lang",playlang,14);

        console.log(option)

        play.startGame(option)


    })
}




