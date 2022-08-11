

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
    canvas.mouseReleased(classifyCanvas);
    background("white");
}

function draw()
{ check_sketch();
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed)
    {
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
       

if (drawn_sketch==sketch)
{
    
    document.getElementById("score").innerHTML=score+1;
    answer_holder="set";
    
    window.location.replace("index2.html");
    
    

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


function preload()
{
    classifier=ml5.imageClassifier('DoodleNet');
}


function classifyCanvas()
{
    classifier.classify(canvas,gotResult);
}


function gotResult(error,results)
{
    if(error)
    {console.error(error);}
    console.log(results);
    
    const str = results[0].label;
const string = str.charAt(0).toUpperCase() + str.slice(1);
drawn_sketch=string;
    document.getElementById('final').innerHTML="You've drawn - "+drawn_sketch;
}

