// Get Modal element
var modal1 = document.getElementById('simpleModal1');
var modal2 = document.getElementById('simpleModal2');
var modal3 = document.getElementById('simpleModal3');
var modal4 = document.getElementById('simpleModal4');
// Get open model button
var modalBtn1 = document.getElementById('modalBtn1');
var modalBtn2= document.getElementById('modalBtn2');
var modalBtn3 = document.getElementById('modalBtn3');
var modalBtn4 = document.getElementById('modalBtn4');
// Get close button
var closeBtn1 = document.getElementsByClassName("closeBtn1")[0];
var closeBtn2 = document.getElementsByClassName("closeBtn2")[0];
var closeBtn3 = document.getElementsByClassName("closeBtn3")[0];
var closeBtn4 = document.getElementsByClassName("closeBtn4")[0];


//Listen for open click 
modalBtn1.addEventListener('click', openModal1);
modalBtn2.addEventListener('click', openModal2);
modalBtn3.addEventListener('click', openModal3);
modalBtn4.addEventListener('click', openModal4);

//Listen for close Click
closeBtn1.addEventListener('click', closeModal1);
closeBtn2.addEventListener('click', closeModal2);
closeBtn3.addEventListener('click', closeModal3);
closeBtn4.addEventListener('click', closeModal4);


	
// function to open modal
function openModal1(){
	modal1.style.display = 'block';
}
function openModal2(){
	modal2.style.display = 'block';
}
function openModal3(){
	modal3.style.display = 'block';
}
function openModal4(){
	modal4.style.display = 'block';
}




// function to close modal
function closeModal1(){
	modal1.style.display = 'none';
}
function closeModal2(){
	modal2.style.display = 'none';
}
function closeModal3(){
	modal3.style.display = 'none';
}
function closeModal4(){
	modal4.style.display = 'none';
}

//function to close modal if outside click
function clickOutside(e){
	if(e.target == modal1){
		modal1.style.display = 'none';
	}

}
