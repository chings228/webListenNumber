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
["de-DE","German"],
["bg-BG","Bulgarian"],
["ca-ES","Catalan (Spain)"],
["da-DK","Denmark"],
["en-GB","English (GB)"],
["en-US","English (US)"],
["hi-IN","Hindi (India)"],
["zh-HK","Chinese (Cantonese)"],
["zh-CN","Chinese (Mandarin)"],
["th-TH","Thai"],
["fr-FR","French (France)"],
["ru_RU","Russian"],
["it-IT","Italian"],
["es-ES","Spanish"],
["jp-JP","Japanese"],
["ko-KR","Korean"],
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

        


        var voices = [];


        setTimeout(function(){
            
            console.log("show voices")

            var allvoices = synth.getVoices()
            allvoices.forEach(element => {

                console.log(element)
                
                voices[element.lang] =  element['name']
            });

            console.log(voices)

        },10)



        


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
