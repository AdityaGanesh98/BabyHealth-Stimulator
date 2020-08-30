    // Get Modal element
var modal5 = document.getElementById('simpleModal5');
var modal6 = document.getElementById('simpleModal6');
var modal7 = document.getElementById('simpleModal7');
var modal8 = document.getElementById('simpleModal8');
// Get open model button
var modalBtn5 = document.getElementById('modalBtn5');
var modalBtn6= document.getElementById('modalBtn6');
var modalBtn7 = document.getElementById('modalBtn7');
var modalBtn8 = document.getElementById('modalBtn8');
// Get close button
var closeBtn5 = document.getElementsByClassName("closeBtn5")[0];
var closeBtn6 = document.getElementsByClassName("closeBtn6")[0];
var closeBtn7 = document.getElementsByClassName("closeBtn7")[0];
var closeBtn8 = document.getElementsByClassName("closeBtn8")[0];


//Listen for open click 
modalBtn5.addEventListener('click', openModal1);
modalBtn6.addEventListener('click', openModal2);
modalBtn7.addEventListener('click', openModal3);
modalBtn8.addEventListener('click', openModal4);

//Listen for close Click
closeBtn5.addEventListener('click', closeModal1);
closeBtn6.addEventListener('click', closeModal2);
closeBtn7.addEventListener('click', closeModal3);
closeBtn8.addEventListener('click', closeModal4);


	
// function to open modal
function openModal1(){
	modal5.style.display = 'block';
}
function openModal2(){
	modal6.style.display = 'block';
}
function openModal3(){
	modal7.style.display = 'block';
}
function openModal4(){
	modal8.style.display = 'block';
}

// function to close modal
function closeModal1(){
	modal5.style.display = 'none';
}
function closeModal2(){
	modal6.style.display = 'none';
}
function closeModal3(){
	modal7.style.display = 'none';
}
function closeModal4(){
	modal8.style.display = 'none';
}
	