// developed by = gmpadron https://github.com/gmpadron

//loading gmp

$(document).ready(function() {
    setTimeout(function(){
        $( ".esperando-loading" ).css("opacity","0");
    },1000);
    setTimeout(function(){
        $( ".gmp" ).css("opacity","1");
        $( ".loading" ).css("transition","0.75s ease-out");
    },1500);
    setTimeout(function(){
        $( ".gmp" ).css("opacity","0");
    },3500);
    setTimeout(function(){
        $( ".loading" ).css("opacity","0");
    },5500);

    setTimeout(function(){
        $( ".loading" ).css("display","none");
    },6001);
});
