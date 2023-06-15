// function handleclick()
// {
    
//     // var aud1 = new Audio('sounds/crash.mp3');
//     aud.play();
//     alert("heyy");
    
// }



// document.querySelector("button").addEventListener("click",handleclick);

for(var i=0; i<document.querySelectorAll(".drum").length ;i++)
{
    // var snd="sounds/sound"+(i)+".mp3";
    // var aud=new Audio(snd);
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var btn=this.innerHTML;
        buttonpress(btn);

        switch (btn)
{
    case "w":
        {
            var aud=new Audio("sounds/sound1.mp3");
            aud.play();
            break;
        }

    case "a":
            {
                var aud=new Audio("sounds/sound2.mp3");
                aud.play();
                break;
            }
            
    case "s":
                {
                    var aud=new Audio("sounds/sound3.mp3");
                    aud.play();
                    break;
                }   
                
                
    case "d":
        {
            var aud=new Audio("sounds/sound4.mp3");
            aud.play();
            break;
        }  

    case "j":
            {
                var aud=new Audio("sounds/sound5.mp3");
                aud.play();
                break;
            }   
    case "k":
            {
                    var aud=new Audio("sounds/sound6.mp3");
                    aud.play();
                    break;
            }  
                
    case "l":
            {
                        var aud=new Audio("sounds/sound7.mp3");
                        aud.play();
                        break;
            }            



}
        
    });



    document.addEventListener('keydown', function(event) {
        buttonpress(event.key);
        if(event.key == "w") {
            var aud=new Audio("sounds/sound1.mp3");
            aud.play();
        }
        else if(event.key == "a") {
            var aud=new Audio("sounds/sound2.mp3");
                aud.play();
        }
        else if(event.key == "s") {
            var aud=new Audio("sounds/sound3.mp3");
                    aud.play();
        }
        else if(event.key == "d") {
            var aud=new Audio("sounds/sound4.mp3");
            aud.play();
        }
        else if(event.key == "j") {
            var aud=new Audio("sounds/sound5.mp3");
                aud.play();
        }
        else if(event.key == "k") {
            var aud=new Audio("sounds/sound6.mp3");
                    aud.play();
        }
        else if(event.key == "l") {
            var aud=new Audio("sounds/sound7.mp3");
            aud.play();
        }
    });
}



function buttonpress(btn)
{

    document.querySelector("."+btn).classList.add("pressed");

setTimeout(function(){
    document.querySelector("."+btn).classList.remove("pressed");
},100);


}
// for (var i=0;i<document.querySelectorAll(".drum").length ;i++)
// {

//     if(i==0)
//     {

//     }
//     else if(i==1)
//     {

//     }
//     else if(i==2)
//     {
        
//     }
//     else if(i==3)
//     {
        
//     }
//     else if(i==4)
//     {
        
//     }
//     else if(i==5)
//     {
        
//     }
//     else if(i==6)
//     {
        
//     }
// document.querySelectorAll("button")[i].addEventListener("click",handleclick);
// }