/*variables related to sec,min,hr*/
let sec = 0;
let min = 0;
let hr = 0;
let timer =false;

/*Start to stopwatch*/
function start(){
    timer =true;
    myFun();
}

/*for pause to stopwatch*/
function pause(){
    timer=false;
    myFun();
}

/*for reset */
function reset(){
    location.reload();
}
/*main function of stopwatch to excecution of timer*/
function myFun(){
    if(timer==true){
         sec=sec+1;
           
        }
        
        if(sec==60){
            min=min+1;
            sec=0;
        }
        if(min==60){
            hr=hr+1;
            min=0;
    
        }
/*this is related to put 0 after starting of timer at sec,min,hr*/
        let getSec=sec;
        let getMin=min;
        let getHr=hr;

         if(sec<10){
                getSec="0"+sec;
            }
            if(min<10){
                getMin="0"+min;
            }
            if(hr<10){
                getHr="0"+hr;
            }
                    
            setTimeout("myFun()",1000);
      
        document.getElementById("sec").innerHTML=getSec;
        document.getElementById("min").innerHTML=getMin;
        document.getElementById("hr").innerHTML=getHr;
    }
