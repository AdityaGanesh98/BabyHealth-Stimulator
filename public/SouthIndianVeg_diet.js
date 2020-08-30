	// Get Modal element
var modal9 = document.getElementById('simpleModal9');
var modal10 = document.getElementById('simpleModal10');
var modal11 = document.getElementById('simpleModal11');
var modal12 = document.getElementById('simpleModal12');
// Get open model button
var modalBtn9 = document.getElementById('modalBtn9');
var modalBtn10= document.getElementById('modalBtn10');
var modalBtn11 = document.getElementById('modalBtn11');
var modalBtn12 = document.getElementById('modalBtn12');
// Get close button
var closeBtn9 = document.getElementsByClassName("closeBtn9")[0];
var closeBtn10 = document.getElementsByClassName("closeBtn10")[0];
var closeBtn11 = document.getElementsByClassName("closeBtn11")[0];
var closeBtn12 = document.getElementsByClassName("closeBtn12")[0];


//Listen for open click 
modalBtn9.addEventListener('click', openModal1);
modalBtn10.addEventListener('click', openModal2);
modalBtn11.addEventListener('click', openModal3);
modalBtn12.addEventListener('click', openModal4);

//Listen for close Click
closeBtn9.addEventListener('click', closeModal1);
closeBtn10.addEventListener('click', closeModal2);
closeBtn11.addEventListener('click', closeModal3);
closeBtn12.addEventListener('click', closeModal4);


	
// function to open modal
function openModal1(){
	modal9.style.display = 'block';
}
function openModal2(){
	modal10.style.display = 'block';
}
function openModal3(){
	modal11.style.display = 'block';
}
function openModal4(){
	modal12.style.display = 'block';
}

// function to close modal
function closeModal1(){
	modal9.style.display = 'none';
}
function closeModal2(){
	modal10.style.display = 'none';
}
function closeModal3(){
	modal11.style.display = 'none';
}
function closeModal4(){
	modal12.style.display = 'none';
}
	