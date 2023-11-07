import Commonjs from "./common"

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


        console.log("show voices")

        var      avaliableVoices = new Set()
      var allvoices = synth.getVoices()
      allvoices.forEach(element => {

          //console.log(`${element.name} ${element.lang}`)
          
          avaliableVoices.add(element.lang)
      });

      console.log(avaliableVoices)


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
["ja-JP","Japanese"],
["ko-KR","Korean"],
["ru-RU","Russian"],

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


            if (avaliableVoices.has(code)){

                langs[code] = data
            }

           


        })

        console.log(langs)

        


        var selectlangdiv = $("#start_language_option");


        var selectlanghtml = "";

        for (const key in langs){

            selectlanghtml += `<option value='${key}'`
            
            
            if (Commonjs.getCookie("lang") ==  key){
                 selectlanghtml += " selected "
            }

            selectlanghtml += `>${langs[key].langInEng}\n`

        }

        selectlangdiv.html(selectlanghtml)


        var levels = ["Easy","Medium","Difficult"];

        const selectleveldiv = $("#start_level_option");

        var selectlevelhtml = ""

        levels.forEach(ele=>{

            selectlevelhtml += `<option value='${ele}'`

            console.log(`level cookie ${Commonjs.getCookie("level")}`);

            if (Commonjs.getCookie("level") ==  ele){

                selectlevelhtml += " selected "
               
            }
            
            selectlevelhtml += `>${ele}\n`
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
            play.handleKeyInput(e.currentTarget.innerText)
            
        })


    }

}
