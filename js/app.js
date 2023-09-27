

import ReadNumber from "./readnumber"

import InitScreen from "./initScreen"



var readnumber

 window.synth = window.speechSynthesis


$(function(){

    console.log("jq start")


    readnumber = new ReadNumber()


    InitScreen.setInitScreen()
   

    $("#start").click(()=>{
        //appReadNumber()

        appReadNumberCallbacka()

       
    })

})


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


