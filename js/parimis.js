//SLIDER

var index = 1;
function plusIndex(n){
    index = index + n;
    showImage(index);
}
function showImage(n){

	var x = document.getElementsByClassName('slides');
	if(n > x.length){index = 1};
	if(n < 1){index = x.length};
	for(var i = 0; i < x.length; i++){

		x[i].style.display = 'none';
	}
	x[index-1].style.display = 'block';
}
showImage(1);
function autoSlide(){
    var x = document.getElementsByClassName('slides');
    for(var i = 0; i < x.length; i++){

		x[i].style.display = 'none';
	}
	if(index > x.length){index = 1};
	x[index-1].style.display = 'block';
	index++;
    setTimeout(autoSlide, 4000);
}
autoSlide();

//MENU DESKTOP

window.onload = function(){
    $(".li_menu").hover(
        function(){ $(this).find(".sous_menu").slideDown('fast');},
        function(){ $(this).find(".sous_menu").slideUp('fast');});
    $(".li_menu").hover(
        function(){ $(this).find(".sous_menu1").slideDown('fast');},
        function(){ $(this).find(".sous_menu1").slideUp('fast');});
    $(".li_menu").hover(
        function(){ $(this).find(".sous_menu2").slideDown('fast');},
        function(){ $(this).find(".sous_menu2").slideUp('fast');});
    $(".li_menu").hover(
        function(){ $(this).find(".sous_menu3").slideDown('fast');},
        function(){ $(this).find(".sous_menu3").slideUp('fast');});
}
