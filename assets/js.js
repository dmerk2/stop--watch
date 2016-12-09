window.onload = function(){

$("#startButton").on("click", stopwatch.start);
$("#stopButton").on("click", stopwatch.stop);
$("#resetButton").on("click", stopwatch.reset);

};

var stopwatch = {
	time: 0,
	reset: function(){
		stopwatch.time = 0;
		$("#time").html("00:00");
		console.log("reset");
	},
	start: function(){
		var counter = setInterval(stopwatch.time, 1000);
		console.log("start");
	},
	stop: function(){
		var counter = clearInterval(counter);
		console.log("stop");
	},
	count: function(){
		stopwatch.time++;
		$("#time").html(time);
	}
};
