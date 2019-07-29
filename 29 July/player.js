
function verify()
{
var n1 = document.getElementById("name1").value;
var n2 = document.getElementById("name2").value;
var c1 = n1.charAt(0).toUpperCase()+n1.slice(1);
var c2 = n2.charAt(0).toUpperCase()+n2.slice(1);
if(c1!="")
{   
    if(c2!="")
{
    // console.log(n1);
    // console.log(n2);
    sessionStorage.setItem("player1",c1);
    sessionStorage.setItem("player2",c2);
    window.location.href="Panzer/index.html";
}   
}

}
