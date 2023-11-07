import ReadNumber from "./readnumber"



export default class Play{


    Const_AnswerWaitTime = 5       // time to wait for answer
    Const_NumberOfQuestions = 5     // total question 
    Const_gameStartConter = 2       // time to start the first question 

    // option for the game  , easy , en-US , etc
    lang
    level

    gameStartCounter = this.Const_gameStartConter

    // timer for start game counter 
    startInterval

    waitAnswerCounter = this.Const_AnswerWaitTime

    // timer for waiting answer from user 
    waitAnswerInterval 

    // voice synthesier 
    readNumber

    // current randon number 
   currentRandom 

   // after start counter finsihed
   isStart = false

   // after read number then allow keyboard in 
   isKeyInputAllow = false

   // the div for displaying the user input answer 
    inputAnswerContainer 

    // number of Question shown 
    numOfQuestion = this.Const_NumberOfQuestions

    // mark 
    mark = 0;

    constructor(){

        // this.lang = option.lang
        // this.level = option.level

       
       // this.startCounter()

        //this.startGame()

        this.inputAnswerContainer = $("#inputfield")


    }


    startGame(option){

        // let rn  = new ReadNumber()
        // rn.readCallback("111",(isFinished)=>{
        //     console.log(isFinished)
        // })

        this.lang = option.lang
        this.level = option.level

        console.log(`start game ${this.lang}`)

        this.readNumber  = new ReadNumber(this.lang)

        this.startCounter()
    }

    startCounter(){

       

        var that = this

        $(".counterdowndiv").html(that.gameStartCounter)
        setTimeout(function(){

           // console.log(that.counter)

            $(".counterdowndiv").html(that.gameStartCounter)

            that.gameStartCounter--;

            //console.log(that.counter)

            if (that.gameStartCounter < 0){
                that.isStart = true
                that.startGamePlay()
            }
            else{
                that.startCounter()
            }

        },1000)

    }


    startGamePlay(){

        console.log("start game play ");

        $(".counterdowndiv").css("display","none");
        $(".inputContainer").css("opacity","1");
        // bootbox.alert({
        //     message: "I'm a vertically-centered dialog!",
        //     centerVertical: true
        // });

       this.isKeyInputAllow = true
        this.generateRandom()
    }



    handleKeyInput(input){

        if (this.isKeyInputAllow){

            console.log(`length ${this.inputAnswerContainer.html().length}`)

            if (this.inputAnswerContainer.html().length >= 5){
                return
            }

            console.log(`handlekeyinput ${input}`)

            this.inputAnswerContainer.append(input)

            console.log(`length of character ${this.inputAnswerContainer.html().length}`)

            if (input != "Back" && input != "All"){



            }

            this.checkAnswer()

        }

        else{
            console.log("not handle key input ")
        }
        


    }


    checkAnswer(){

        console.log("check answer")

        var ans = this.inputAnswerContainer.html()

        console.log(ans)


        var that = this
        if (ans == this.currentRandom){

            clearInterval(this.waitAnswerInterval);

            setTimeout(function(){

                that.isKeyInputAllow = false

                that.generateRandom()

            },500)

            

        }

    }


    endGame(){
        this.isKeyInputAllow = false
        console.log("end game")

    }


    generateRandom(){

        this.inputAnswerContainer.html("")

        this.isKeyInputAllow = true;

        this.waitAnswerCounter =  this.Const_AnswerWaitTime

        this.numOfQuestion -- 

        if (this.numOfQuestion < 0){

            // game finish

            this.endGame()

        }
        else{


            $("#timeleft").html(this.waitAnswerCounter)
    
            var max = 10000
            var min = 1000

            if (this.level == "easy"){
                max = 100
                min = 10
            }
            else if (this.level == "medium"){
                max = 1000
                min = 100
            }
    
    
            var random = Math.floor(Math.random() * (max-min) + min);
    
            this.currentRandom = random
    
            console.log(random)
    
            
    
            var that = this
            this.readNumber.readCallback(random,(isFinished)=>{
                console.log(isFinished)
                
    
                // start count down for answer 
                that.startWaitAnswerInterval()
            })

        }





    }

    startWaitAnswerInterval(){

        console.log("start wait answer interval")

        var that = this
        this.waitAnswerInterval = setInterval(function(){

            that.waitAnswerCounter -- ;

            //console.log(that.waitAnswerCounter)

            $("#timeleft").html(that.waitAnswerCounter)


            if (that.waitAnswerCounter == 0){

                clearInterval(that.waitAnswerInterval)

                // show answer 
                that.inputAnswerContainer.css("color","blue");
                that.inputAnswerContainer.html(that.currentRandom)


                setTimeout(function(){

                    that.inputAnswerContainer.css("color","black");
                    that.waitAnswerCounter = that.Const_AnswerWaitTime
                    that.generateRandom()

                },1500)



            }


        },1000)



    }


}