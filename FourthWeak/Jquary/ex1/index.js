
        
var newFont = $(".link");
    newFont.css({
        "text-decoration": "none",
        "font-family": "tahoma",

});
$(".container .link:nth-child(2)").attr("href", "https://www.itc.tech").click(function(){
    window.open(this.href);
    return false;
});
$(".container .link:nth-child(3)").css("color","salmon")
$("body").css("background-color","lightblue");





