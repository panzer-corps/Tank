function on()
{
    document.getElementById('click1').play();
    document.getElementById("bgaudio").play();
    document.getElementById("on").style.color="#06130e";
    document.getElementById("on").style.background="#B0B8B4FF";
    setTimeout("document.getElementById('off').style.color='#B0B8B4FF'",0);
    setTimeout("document.getElementById('off').style.background='#06130e'",0);
    document.getElementById("sound-box").close();
}

$(function () 
{
    $("#on").click(function () 
    {
      setTimeout("$('#sound-box').modal('hide')",200);
    });
});

$(function () 
{
    $("#off").click(function () 
    {
        setTimeout("$('#sound-box').modal('hide')",200);
    });
});

$(function () 
{
    $("#easy").click(function () 
    {
      setTimeout("$('#level-box').modal('hide')",200);
   });
});

$(function () 
{
    $("#hard").click(function () 
    {
        setTimeout("$('#level-box').modal('hide')",200);
    });
});
function off()
{
    document.getElementById('click1').play(); 
    document.getElementById("bgaudio").pause();
    document.getElementById("off").style.color="#06130e";
    document.getElementById("off").style.background="#B0B8B4FF";

    setTimeout("document.getElementById('on').style.color='#B0B8B4FF'",0);
    setTimeout("document.getElementById('on').style.background='#06130e'",0);
    document.getElementById("sound-box").close();

}


function play()
 {
    document.getElementById('click2').play();
 }
 function start()
 {
    document.getElementById('click1').play();
   
 }
var LevelEasy=true;
var LevelHard=false;

function easy(){
    LevelHard=false;
    LevelEasy=true;
    document.getElementById('click1').play();
    document.getElementById("easy").style.color="#06130e";
    document.getElementById("easy").style.background="#B0B8B4FF";

    setTimeout("document.getElementById('hard').style.color='#B0B8B4FF'",0);
    setTimeout("document.getElementById('hard').style.background='#06130e'",0);
    document.getElementById("level-box").close();
    console.log("easy="+LevelEasy);
    console.log("hard="+LevelHard);

}
function hard(){
    LevelHard=true;
    LevelEasy=false;
    document.getElementById('click1').play();
    document.getElementById("hard").style.color="#06130e";
    document.getElementById("hard").style.background="#B0B8B4FF";
    setTimeout("document.getElementById('easy').style.color='#B0B8B4FF'",0);
    setTimeout("document.getElementById('easy').style.background='#06130e'",0);
    document.getElementById("level-box").close();
    console.log("hard="+LevelHard);
    console.log("easy="+LevelEasy);


}
function start_game()
{
    var ply_name1 = document.getElementById("name1").value;
    var ply_name2 = document.getElementById("name2").value;

    
var ply_name1_up = ply_name1.charAt(0).toUpperCase()+ply_name1.slice(1);
var ply_name2_up= ply_name2.charAt(0).toUpperCase()+ply_name2.slice(1);

    if(ply_name1!="")
    {
        if(ply_name2!="")
        {
            sessionStorage.setItem("player1",ply_name1_up);
            sessionStorage.setItem("player2",ply_name2_up);

            if(LevelEasy==true)
            {
                document.getElementById('click1').play();
                document.getElementById("st").style.background="#B0B8B4FF";
                document.getElementById("st").style.color="#06130e";
                setTimeout("window.location.href='..//easy_landscape/easy_level.html'",500);
                console.log("Level easy");

            }
            else{
                document.getElementById('click1').play();
                document.getElementById("st").style.background="#B0B8B4FF";
                document.getElementById("st").style.color="#06130e";
                setTimeout("window.location.href='..//hard_landscape/hard_level.html'",500);
                console.log("Level Hard");


            }
           
            }
            
        }

    }
function color_change1()
{
    document.getElementById('click2').play();
}
function color_change3()
{
    document.getElementById('click2').play();
}
    function color_change5()
{
    document.getElementById('click2').play();
}
function color_change7()
{
    document.getElementById('click2').play();
}
function color_change9()
{
    document.getElementById('click2').play();
}
    

