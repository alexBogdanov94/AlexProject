$(document).ready(function() {
$('#content').hide();

$('#open').click( function() {
$('#content').animate({
width: 'toggle'
},1000);




	

});//end click
    var close = "close me";
    var open = "open me";
$("#openMob").click(function(){
        $("#content").slideToggle("slow");
    $(this).text($(this).text() == 'open me' ? 'close me' : 'open me');
  
    });//end openMob
    var close = "close me";
    var open = "open me";
$('#door p').click(function(){
$(this).text($(this).text() == 'open me' ? 'close me' : 'open me');
 
    
});//end change text
});


var time = new Date();
var year = time.getFullYear();
document.getElementById('time').innerHTML +=(year);