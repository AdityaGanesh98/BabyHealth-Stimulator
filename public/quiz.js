
 function q1ans(){
 	 var x = document.getElementById("temperature").value;
 	 var sug1 = document.getElementById('q1wrong');
 	 var sug2 = document.getElementById('q1right');
 	 var sug3 = document.getElementById('q1wrong2');
 	 var mycheck = document.getElementById('temp_range').checked;
 	 // console.log(x);
 	 
 	 if(x >= 102){
 	 	sug2.style.display = "none";
 	 	sug1.style.display = "block";
 	 	sug3.style.display ="none";
 	 } 
 	 if(x<102 && x>98.6){
 	 	sug1.style.display = "none";
 	 	sug2.style.display = "block";
 	 }
 	 if(mycheck){
 	 	sug3.style.display ="block";
 	 	sug1.style.display ="none";
 	 	sug2.style.display ="none";
 	 }
}


 function q2ans(){
 	 var x = document.getElementById('bp1').value;
 	 var y = document.getElementById('bp2').value;
 	 var sug1 = document.getElementById('q2wrong');
 	 var sug2 = document.getElementById('q2right');
 	 var sug3 = document.getElementById('q2wrong2');
 	 var checked = document.getElementById('q2checked');
 	 var mycheck = document.getElementById('q2types').checked;
 	 if(x >= 140 && y>= 90){
 	 	sug2.style.display = "none";
 	 	sug1.style.display = "block";
 	 	sug3.style.display = "none";

 	 } else if((x>90 && x<140) && (y>60 && y<90)){
 	 	sug1.style.display = "none";
 	 	sug2.style.display = "block";
 	 	sug3.style.display = "none";

 	 } else {
 	 	sug3.style.display = "block";
 	 	sug2.style.display = "none";
 	 	sug1.style.display = "none";

 	 }
 	 if(mycheck){
 	 	alert('cjhkaf')
 	 	checked.style.display = 'block'
 	 }
}

function q3ans(){
	var yes = document.getElementById('q3tru').checked;
	var no = document.getElementById('q3fal').checked;
	var sug1 = document.getElementById('q3wrong');
 	var sug2 = document.getElementById('q3right');
	var causes = document.getElementById('q3qn').checked;
	if(yes){
		sug1.style.display="block";
		sug2.style.display="none";

	}else if(no){
		sug1.style.display="none";
		sug2.style.display="block";
	}
	if(causes){
		sug1.style.display="block";
		sug2.style.display="none";

	}
}

function q4ans(){
	var yes = document.getElementById('q4tru').checked;
	var no = document.getElementById('q4fal').checked;
	var sug1 = document.getElementById('q4wrong');
 	var sug2 = document.getElementById('q4right');
 	var sug3 = document.getElementById('q4wrong2')
	var causes = document.getElementById('q4qn').checked;
	if(yes){
		sug1.style.display="block";
		sug2.style.display="none";
		sug3.style.display = "block"

	}else if(no){
		sug1.style.display="none";
		sug2.style.display="block";

	}
	if(causes){
		sug1.style.display="none";
		sug2.style.display="none";
		sug3.style.display = "block";

	}
}

function q5ans(){
	var yes = document.getElementById('q5tru').checked;
	var no = document.getElementById('q5fal').checked;
	var sug1 = document.getElementById('q5wrong');
 	var sug2 = document.getElementById('q5right');
 	var sug3 = document.getElementById('q5wrong2')
	var causes = document.getElementById('q5qn').checked;
	if(yes){
		sug1.style.display="block";
		sug2.style.display="none";
		sug3.style.display = "block"

	}else if(no){
		sug1.style.display="none";
		sug2.style.display="block";

	}
	if(causes){
		sug1.style.display="none";
		sug2.style.display="none";
		sug3.style.display = "block";

	}
}

function q6ans(){
	var yes = document.getElementById('q6tru').checked;
	var no = document.getElementById('q6fal').checked;
	var sug1 = document.getElementById('q6wrong');
 	var sug2 = document.getElementById('q6right');
	var causes = document.getElementById('q6qn').checked;
	if(yes){
		sug1.style.display="block";
		sug2.style.display="none";

	}else if(no){
		sug1.style.display="none";
		sug2.style.display="block";

	}
	if(causes){
		sug1.style.display="block";
		sug2.style.display="none";
	}
}

function q7ans(){
  var yes = document.getElementById('q7tru').checked;
  var no = document.getElementById('q7fal').checked;
  var sug1 = document.getElementById('q7wrong');
  var sug2 = document.getElementById('q7right');
  var sug3 = document.getElementById('q7wrong2')
  var causes = document.getElementById('q7qn').checked;
  if(yes){
    sug1.style.display="block";
    sug2.style.display="none";
    sug3.style.display = "block"

  }else if(no){
    sug1.style.display="none";
    sug2.style.display="block";
    sug3.style.display="none";

  }
  if(causes){
    sug1.style.display="none";
    sug2.style.display="none";
    sug3.style.display = "block";

  }
}

function q8ans(){
  var yes = document.getElementById('q8tru').checked;
  var no = document.getElementById('q8fal').checked;
  var sug1 = document.getElementById('q8wrong');
  var sug2 = document.getElementById('q8right');
  var causes = document.getElementById('q8qn').checked;
  if(yes){
    sug1.style.display="block";
    sug2.style.display="none";
  

  }else if(no){
    sug1.style.display="none";
    sug2.style.display="block";

  }
  if(causes){
    sug1.style.display="block";
    sug2.style.display="none";
  

  }
}


function q9ans(){
  var yes = document.getElementById('q9tru').checked;
  var no = document.getElementById('q9fal').checked;
  var sug1 = document.getElementById('q9wrong');
  var sug2 = document.getElementById('q9right');
  var sug3 = document.getElementById('q9wrong2')
  var causes = document.getElementById('q9qn').checked;
  if(yes){
    sug1.style.display="none";
    sug2.style.display="block";
    sug3.style.display = "none"

  }else if(no){
    sug1.style.display="block";
    sug2.style.display="none";
    sug3.style.display="block";

  }
  if(causes){
    sug1.style.display="none";
    sug2.style.display="none";
    sug3.style.display = "block";

  }
}


function q10ans(){
  var yes = document.getElementById('q10tru').checked;
  var no = document.getElementById('q10fal').checked;
  var sug1 = document.getElementById('q10wrong');
  var sug2 = document.getElementById('q10right');
  if(yes){
    sug1.style.display="none";
    sug2.style.display="block";
  }else if(no){
    sug1.style.display="block";
    sug2.style.display="none";
  }
 
}

function q11ans(){
  var yes = document.getElementById('q11tru').checked;
  var no = document.getElementById('q11fal').checked;
  var sug1 = document.getElementById('q11wrong');
  var sug2 = document.getElementById('q11right');
  var causes = document.getElementById('q11qn').checked;
  if(yes){
    sug1.style.display="block";
    sug2.style.display="none";
  }else if(no){
    sug1.style.display="none";
    sug2.style.display="block";
  }
  if(causes){
  	sug1.style.display="block";
    sug2.style.display="none";
  }
 
}

function q12ans(){
  var yes = document.getElementById('q12tru').checked;
  var no = document.getElementById('q12fal').checked;
  var sug1 = document.getElementById('q12wrong');
  var sug2 = document.getElementById('q12right');
  var causes = document.getElementById('q12qn').checked;
  if(yes){
    sug1.style.display="block";
    sug2.style.display="none";
  }else if(no){
    sug1.style.display="none";
    sug2.style.display="block";
  }
  if(causes){
  	sug1.style.display="block";
    sug2.style.display="none";
  }
}


function q13ans(){
  var yes = document.getElementById('q13tru').checked;
  var no = document.getElementById('q13fal').checked;
  var sug1 = document.getElementById('q13wrong');
  var sug2 = document.getElementById('q13right');
  if(yes){
    sug1.style.display="block";
    sug2.style.display="none";
  }else if(no){
    sug1.style.display="none";
    sug2.style.display="block";
  }
}