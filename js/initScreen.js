export default class InitScreen{


    constructor(){




    }

    static setInitScreen(){
        this.#setGameScreen()
        this.#setStartScreen()
    }


    static #setStartScreen(){

        console.log("setstartscreen")

        console.log("sdfdsfdsf")

        var langsdata = [


            ["bg-BG","Bulgarian"],    
            ["ca-ES","Catalan (Spain)"],   
            ["zh-HK","Chinese (Cantonese)"],
["zh-CN","Chinese (Mandarin)"],
            ["da-DK","Denmark"],
 ["en-GB","English (GB)"],
["en-US","English (US)"],
["fr-FR","French (France)"],
["de-DE","German"],
["hi-IN","Hindi (India)"],
["it-IT","Italian"],
["jp-JP","Japanese"],
["ko-KR","Korean"],
["ru_RU","Russian"],

["es-ES","Spanish"],
["th-TH","Thai"],
["vi-VN","Vietnamese"]

        ]

        var langs = [];

        langsdata.forEach(ele=>{

            var code = ele[0]
            var langnameEng = ele[1]


            var data = [];
            data.langInEng = langnameEng

            langs[code] = data


        })

        console.log(langs)

        


        // var voices = [];


        // setTimeout(function(){
            
        //     console.log("show voices")

        //     var allvoices = synth.getVoices()
        //     allvoices.forEach(element => {

        //         //console.log(element)
                
        //         voices[element.lang] =  element['name']
        //     });

        //     console.log(voices)

        // },10)

        var selectlangdiv = $("#start_language_option");


        var selectlanghtml = "";

        for (const key in langs){

            selectlanghtml += `<option value='${key}'>${langs[key].langInEng}\n`

        }

        selectlangdiv.html(selectlanghtml)


        var levels = ["Easy","Medium","Difficult"];

        const selectleveldiv = $("#start_level_option");

        var selectlevelhtml = ""

        levels.forEach(ele=>{

            selectlevelhtml += `<option value='${ele}'>${ele}\n`
        })


        selectleveldiv.html(selectlevelhtml)


    }



    static #setGameScreen(){

        this.#setKeyboardScreen()

    }


     static #setKeyboardScreen(){

        console.log("set keyboard")



        $(".keyboard_key").click(e=>{

            console.log(e.currentTarget.innerText)
        })


    }

}
