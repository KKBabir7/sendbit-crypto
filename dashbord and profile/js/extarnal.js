/////////////........scroll js
		   
						$(window).scroll(function(){
					$('nav').toggleClass('scrolled', $(this).scrollTop() >20);
				});
/////////////........all manu active js		
			
				var header = document.getElementById("btn");
				var btns = header.getElementsByClassName("btn");
				for (var i = 0; i < btns.length; i++) {
				  btns[i].addEventListener("click", function() {
				  var current = document.getElementsByClassName("active");
				  current[0].className = current[0].className.replace(" active", "");
				  this.className += " active";
				  });
				}
			
/////////////........mobile menu slide js
		    
				function menu(){
				var side=document.getElementById("nav-section-m");
				var sideee=document.getElementById("bg");
				   side.style.left="0px";
				   side.style.background="rgba(255,255,255,1)";
				   sideee.style.left="0px";
				   sideee.style.background="rgba(0,0,0,0.4)";
				   
				}
				function remove(){
					 document.getElementById("nav-section-m").style.left="-300px";
					 var sidi=document.getElementById("bg");
				   
				   sidi.style.left="-1200px";
				}
				
		 


		 ///////

		 function myFunction22() {
  var x = document.getElementById("myInput22").value;
   document.getElementById("demo22").innerHTML = x;

}

/////

/////////////........currancy convator js
			
		   
			/*    var gbp, usd;
				function init()
				{
					gbp = document.getElementById("GBP");
					btc = document.getElementById("BTC");
				   
				}

				function gbpfunc()
				{
					btc.value = parseFloat(gbp.value) * 0.00012;
					
				}



				function btcfunc()
				{
					gbp.value = parseFloat(btc.value) * 8152.06;
				   
				}

				init();*/
		   
/////////////........popup or modal
			
				function send(){
				var modal = document.getElementById("myModal");
				var span = document.getElementsByClassName("close")[0];
				  modal.style.display = "block";
				span.onclick = function() {
				  modal.style.display = "none";
				}
				window.onclick = function(event) {
				  if (event.target == modal) {
					modal.style.display = "none";
				  }
				}
				return false;
				}
	





	




		function send2(){
				var modal = document.getElementById("myModal2");
				var span = document.getElementsByClassName("close")[1];
				  modal.style.display = "block";
				span.onclick = function() {
				  modal.style.display = "none";
				}
				window.onclick = function(event) {
				  if (event.target == modal) {
					modal.style.display = "none";
				  }
				}
				return false;
				}
		   function send3(){
				var modal = document.getElementById("myModal3");
				var span = document.getElementsByClassName("close")[2];
				  modal.style.display = "block";
				span.onclick = function() {
				  modal.style.display = "none";
				}
				window.onclick = function(event) {
				  if (event.target == modal) {
					modal.style.display = "none";
				  }
				}
				return false;
				}
		   

          function send4(){
				var modal = document.getElementById("myModal4");
				var span = document.getElementsByClassName("close")[3];
				  modal.style.display = "block";
				span.onclick = function() {
				  modal.style.display = "none";
				}
				window.onclick = function(event) {
				  if (event.target == modal) {
					modal.style.display = "none";
				  }
				}
				return false;
				}



      function gen1(){


				var modal = document.getElementById("myModal5");
				var span = document.getElementsByClassName("close")[4];
				  modal.style.display = "block";
				span.onclick = function() {
				  modal.style.display = "none";
				}
				window.onclick = function(event) {
				  if (event.target == modal) {
					modal.style.display = "none";
				  }
				}
				return false;
				}




      function gen2(){
				var modal = document.getElementById("myModal6");
				var span = document.getElementsByClassName("close")[5];
				  modal.style.display = "block";
				span.onclick = function() {
				  modal.style.display = "none";
				}
				window.onclick = function(event) {
				  if (event.target == modal) {
					modal.style.display = "none";
				  }
				}
				return false;
				}




   function gen3(){
				var modal = document.getElementById("myModal7");
				var span = document.getElementsByClassName("close")[6];
				  modal.style.display = "block";
				span.onclick = function() {
				  modal.style.display = "none";
				}
				window.onclick = function(event) {
				  if (event.target == modal) {
					modal.style.display = "none";
				  }
				}
				return false;
				}





   function gen4(){
				var modal = document.getElementById("myModal8");
				var span = document.getElementsByClassName("close")[7];
				  modal.style.display = "block";
				span.onclick = function() {
				  modal.style.display = "none";
				}
				window.onclick = function(event) {
				  if (event.target == modal) {
					modal.style.display = "none";
				  }
				}
				return false;
				}

		   




		