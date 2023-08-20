let sideBarwidth = $(".sideBar").innerWidth();
$(".sideBar").css("left", -sideBarwidth);
$(".openbtn").css("left", 10);

$(".openbtn").click(() => {

    $(".openbtn").animate({left : 200},50);
    $(".sideBar").animate({left : 0},50);
});

$(".sideBarinner .close-btn").click(() => { 

    $(".openbtn").animate({left : 10},50);
    $(".sideBar").animate({left : -sideBarwidth},50);
});

$("a[href^='#']").click(e => { 
    let page = e.target.getAttribute("href");
    let pagescroll = $(page).offset().top;
    $("html, body").animate({scrollTop : pagescroll}, 1000)
});

$(".two-body, .three-body, .four-body").hide(0);

$(".one").click(() => {
    $(".two-body, .three-body, .four-body").slideUp(1000); 
    $(".one-body").slideToggle(1000);    
});
$(".two").click(() => {
    $(".one-body, .three-body, .four-body").slideUp(1000); 
    $(".two-body").slideToggle(1000);
});
$(".three").click(() => {
    $(".one-body, .two-body, .four-body").slideUp(1000); 
    $(".three-body").slideToggle(1000);
});
$(".four").click(() => {
    $(".one-body, .two-body, .three-body").slideUp(1000); 
    $(".four-body").slideToggle(1000);
});

window.onload = function()
{   
    getclock("10 october 2021 9:56:00");
}

let count = 0;
function getclock(countTo)
{
    count++;
    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
    let days = Math.floor( timeDifference / (24*60*60));
    let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
    let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))    

    $("#days").html(days);
    $("#hours").html(hours);
    $("#mi").html(mins);
    $("#sec").html(secs);

    let x = setInterval(() => {
        getclock(countTo);
    }, 1000);

    if (count == 100)
    {
        clearInterval(x);
    }

}
function getlength(word)
{
    let maxlength = 100;

    if (word.length > 100)
    {
        $(".number").text("your available character finished");
    }
    else
    {
        $(".number").text(maxlength-word.length);
    }
}