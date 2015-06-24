// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	    $('#btnmenu').on('tap',function() {
		navigator.vibrate(1000);
	   
		}); 
		
		$('#btnbiografia').on ('tap', function(){
		navigator.notification.beep(1)	
		});//Reinicio
		
		$('#btnalbunes').on ('tap', function(){
		navigator.notification.beep(1)	
		});//Reinicio
		
		
		$('#btnfotos').on ('tap', function(){
		navigator.notification.beep(1)	
		});//Reinicio
		
		$('#btndisco').on ('tap', function(){
		navigator.notification.beep(1)	
		});//Reinicio
		
		$('#btnintegrantes').on ('tap', function(){
		navigator.notification.beep(1)	
		});//Reinicio
		
		
	
}); 
});

