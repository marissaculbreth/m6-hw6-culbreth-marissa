//When a user hovers over any one of the boxes, highlight all of the boxes with a different background color

//this is not working
var boxItems = document.querySelectorAll('section box-grid h2');

function logThis() {
  for(i = 0; i < boxItems.length; i++) {
    boxItems[i].classList.toggle('hovercolor');
  }
}

for(i = 0; i < boxItems.length; i++) {
  boxItems[i].addEventListener('hover', logThis);
}




//When a user clicks on box #1, have a message appear somewhere on the page that says “Oooh - so close, but no cigar” by appending a new DOM node
document.getElementById("box-1").addEventListener("click", function() {
  document.getElementById("newPara").innerHTML = "Oooh - so close, but no cigar";
});

//I tried using the appendChild method using this code but it did not work
//newPara.innerHTML = "Oooh - so close, but no cigar";
//document.getElementById("box-1").addEventListener("click",
//  document.getElementById("box-1").appendChild(newPara);
//);




//When a user clicks on box #2, have a message appear somewhere on the page that says “DING DING DING - We have a winner” by appending a new DOM node
document.getElementById("box-2").addEventListener("click", function() {
  document.getElementById("anotherPara").innerHTML = "DING DING DING - We have a winner";
});




//When a user clicks on box #3, have a message appear somewhere on the page that says “Oops, butter luck next time” by appending a new DOM node
document.getElementById("box-3").addEventListener("click", function() {
  document.getElementById("morePara").innerHTML = "Oops, butter luck next time";
});


//When any one of the three boxes are clicked, have a button that says “Start Over” with an href of “#” appear somewhere on the page by removing a hidden class
var boxItems = document.querySelectorAll('box-grid h2');
