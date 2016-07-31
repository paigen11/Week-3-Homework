$(document).ready(function(){

	var questions = [
		"What is 2 + 2?",
		"What is 3 + 3?",
		"What is 4 + 4?",
		"What is 5 + 5?"
	];

	var answers = [
		"4",
		"6",
		"8",
		"10"
	];

	$('.answer').hide();

	$('.next').on('click' ,function(){
		$('.answer').hide();
		var randomNum = shuffle();
		var randomQ = questions[randomNum];
		var randomA = answers[randomNum];
		$('.question').text(randomQ);
		$('.answer').text(randomA);
	});

	$('.show-answer').on('click', function(){
		$('.answer').fadeIn(1500)
	});

	function shuffle(){
		var num = Math.floor(Math.random() * questions.length);
		var randomQ = questions[num];
		return num;
	}

  	$('[data-toggle="popover"]').popover();

  	$('.add').click(function () {
     $('#myModal').modal('show');  
     $('[data-toggle="popover"]').popover('hide'); //EDIT: added this line to hide popover on button click.
	});

});	
