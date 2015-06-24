// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	    $('#btnmenu').on('tap',function(){
		navigator.vibrate(1000);
		alert('vivro');
		
	     }); 
		
		$('#btnbiografia').on('tap',function(){
		navigator.vibrate(1000);
		});//Reinicio
		
		$('#btnalbunes').on('tap',function(){
		navigator.vibrate(1000);
		});
		
		$('#btnfotos').on('tap',function(){
		navigator.vibrate(1000);
		});//Reinicio
		
		$('#btndisco').on('tap',function(){
		navigator.vibrate(1000);
		});//Reinicio
		
		$('#btnintegrantes').on('tap',function(){
		navigator.vibrate(1000);
		
		});//Reinicio
		
		
	
}); 
});

