


export default class ReadNumber{


    callback 
     that = this

    constructor(){

        console.log("ReadNumber")
    }


    read(string){


        console.log(`read ${string}`)
        const synth = window.speechSynthesis

        const utterance = new SpeechSynthesisUtterance(string)

        synth.speak(utterance)
    }


    readCallback(string,callback){

        this.callback = callback


        const utterance = new SpeechSynthesisUtterance(string)
        utterance.lang = 'th-TH'

        const that  = this
        utterance.addEventListener("end",e=>{

            that.endReading(true)
        })

        synth.speak(utterance)



    }

    endReading(e){

        console.log(e)
        this.callback(e)
    }




}