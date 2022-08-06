



sketch=localStorage.getItem("sketch");
document.getElementById("sketch").innerHTML=sketch;


timer_counter=2000;
timer_check="";
drawn_sketch="";
answer_holder="";
score=0;

function exit()
{
    window.location.replace("index.html");

}


function updateCanvas()
{
    background("white");
 
    
}

function setup()
{
    canvas=createCanvas(1366,473);
    
    background("white");
}

function draw()
{
    check_sketch();
    if (drawn_sketch==sketch)
    {
        answer_holder="set";
        score=score+1;
        document.getElementById("score").innerHTML=score;
    }
    
}


function check_sketch()
{   timer_counter=timer_counter-1;
    original=+Math.round(timer_counter/100);
    document.getElementById("timer").innerHTML=""+original;

    


    console.log(original);
    if (timer_counter==0)
    {
        
      document.getElementById("timer").innerHTML=0;
      timer_counter=0;
      timer_check="completed";
      console.log("compjhgjgjhdcjhvjdvajvcjvdaj");
      document.getElementById("timer").innerHTML=0;
      
      update();
    }
    

    

    
}


function update()
{
    if (timer_check=="set"||"completed")
    {
      timer_check="";
      answer_holder="";
    }
    window.location.replace("index2.html");
}



