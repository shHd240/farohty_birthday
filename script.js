var i=document.getElementById("intro"),c=document.getElementById("card");
function open_(){i.classList.add("gone");c.classList.add("show");setTimeout(function(){i.style.display="none"},800)}
i.addEventListener("click",open_);i.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" ")open_()});
document.getElementById("go").onclick=function(){document.getElementById("vid").scrollIntoView()};document.getElementById("next").onclick=function(){document.getElementById("letter").scrollIntoView()};document.getElementById("next2").onclick=function(){document.getElementById("pics").scrollIntoView()};
document.getElementById("again").onclick=function(){document.getElementById("top").scrollIntoView()};
