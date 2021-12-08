			// variables for monitoring time
			var click; var start; var react; 
		
			// generates a new red cirle and begins the timing process again
			function makeCircle() {
					var time=Math.random();
					time=time*5000;
				
				// the circle will change to green after a random amount of time
				setTimeout(function() {
					document.getElementById("circle").style.backgroundColor="green";
					start=Date.now();
				}, time); 
			}
			
			// when someone clicks the button, it will record their reaction time, change the color of the button back to red, and restart
			document.getElementById("circle").onclick=function() {
				click=Date.now();
				react=(click-start)/1000;
				document.getElementById("printReactionTime").innerHTML="Your Reaction Time is: " + react + "seconds";
				document.getElementById("circle").style.backgroundColor="red";

				// calls the make circle function to recycle the process
				makeCircle();
			}
			
			// calls the make circle function to begin the entire process
			makeCircle(); 