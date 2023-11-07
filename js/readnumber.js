


export default class ReadNumber{


    callback 
     that = this

     lang

    constructor(lang){

        console.log("ReadNumber")
        this.lang = lang
    }


    // read(string){


    //     console.log(`read ${string}`)
    //     const synth = window.speechSynthesis

    //     const utterance = new SpeechSynthesisUtterance(string)

    //     synth.speak(utterance)
    // }


    readCallback(string,callback){

        this.callback = callback

        console.log(`read lang ${this.lang}`)
        const utterance = new SpeechSynthesisUtterance(string)
        utterance.lang = this.lang

        const that  = this

        console.log("new console")
        utterance.addEventListener("end",e=>{

            that.endReading(true)
        })

       

        utterance.addEventListener("error",e=>{
            console.log(e)
        })

        utterance.addEventListener("start",e=>{
            console.log("start")
        })

        synth.speak(utterance)



    }

    endReading(e){

        //console.log(e)
        this.callback(e)
    }




}