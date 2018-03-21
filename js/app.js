console.log("Yo");
// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
 var currentTurn = 'X'
  $('.box').one('click', function(){
  	$(this).text(currentTurn);
  	if (currentTurn === "X"){
      currentTurn = "O"
  }
      else {
      	currentTurn = "X"
      }

})


// $('.box').on('click', function handleClick(event){
	
// 	if (this.text(currentTurn)
// 	//write code so that if "X" has already been clicked
// 	// it cannot be clicked again to change to "O"

// });

$('button').click(function() {
    location.reload();
});

// var allClickedElements = $('div');
// $('.box').find(allClickedElements);

// $('#no-top-left').on('click', function(topLeft){
// 	console.log("Clicked!")
// })

// $('#no-top').on('click', function(){
// 	console.log("Clicked!")
// })

// $('#no-top-right').on('click', function(){
// 	console.log("Clicked!")
// })

// $('#no-left').on('click', function(){
// 	console.log("Clicked!")
// })

// $('#no-bottom-left').on('click', function(){
// 	console.log("Clicked!")
// })

// $('#no-bottom').on('click', function(){
// 	console.log("Clicked!")
// })

// $('#no-bottom-right').on('click', function(){
// 	console.log("Clicked!")
// })

// $('#no-right').on('click', function(){
// 	console.log("Clicked!")
// })

// $('#all').on('click', function(){
// 	console.log("Clicked!")
// })

//DON'T TOUCH  
})
