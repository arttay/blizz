$(document).ready(function(){
	 $(".intro").click(function(){
	 	$(".intro").addClass('currentLink');
	 	 $(".why, .resume, .qualified, .contact").removeClass('currentLink');
	 });//end click
	 	 $(".why").click(function(){
	 	$(this).addClass('currentLink');
	 	 $(".intro, .resume, .qualified, .contact").removeClass('currentLink');
	 });//end click
	 $(".resume").click(function(){
	 	$(this).addClass('currentLink');
	 	 $(".why, .intro, .qualified, .contact").removeClass('currentLink');
	 });//end click
	 $(".qualified").click(function(){
	 	$(this).addClass('currentLink');
	 	 $(".intro, .resume, .intro, .contact").removeClass('currentLink');
	 });//end click
	 $(".contact").click(function(){
	 	$(".contact").addClass('currentLink');
	 	 $(".intro, .resume, .qualified, .intro").removeClass('currentLink');
	 });//end click
});