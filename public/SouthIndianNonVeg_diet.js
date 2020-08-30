// Get Modal element
var modal13 = document.getElementById('simpleModal13');
var modal14 = document.getElementById('simpleModal14');
var modal15= document.getElementById('simpleModal15');
var modal16 = document.getElementById('simpleModal16');
// Get open model button
var modalBtn13 = document.getElementById('modalBtn13');
var modalBtn14= document.getElementById('modalBtn14');
var modalBtn15 = document.getElementById('modalBtn15');
var modalBtn16 = document.getElementById('modalBtn16');
// Get close button
var closeBtn13 = document.getElementsByClassName("closeBtn13")[0];
var closeBtn14 = document.getElementsByClassName("closeBtn14")[0];
var closeBtn15 = document.getElementsByClassName("closeBtn15")[0];
var closeBtn16 = document.getElementsByClassName("closeBtn16")[0];


//Listen for open click 
modalBtn13.addEventListener('click', openModal1);
modalBtn14.addEventListener('click', openModal2);
modalBtn15.addEventListener('click', openModal3);
modalBtn16.addEventListener('click', openModal4);

//Listen for close Click
closeBtn13.addEventListener('click', closeModal1);
closeBtn14.addEventListener('click', closeModal2);
closeBtn15.addEventListener('click', closeModal3);
closeBtn16.addEventListener('click', closeModal4);


	
// function to open modal
function openModal1(){
	modal13.style.display = 'block';
}
function openModal2(){
	modal14.style.display = 'block';
}
function openModal3(){
	modal15.style.display = 'block';
}
function openModal4(){
	modal16.style.display = 'block';
}

// function to close modal
function closeModal1(){
	modal13.style.display = 'none';
}
function closeModal2(){
	modal14.style.display = 'none';
}
function closeModal3(){
	modal15.style.display = 'none';
}
function closeModal4(){
	modal16.style.display = 'none';
}
	