
			    function change(){
				    setTimeout(function() {
						  jQuery('.fixed').fadeOut();
						}, 0);
						 setTimeout(function() {
						  jQuery('.fixed').fadeIn();
						 
						}, 0);

				    var mv= document.getElementById("mv").value;
					var fcurrency= document.getElementById("fcurrency");
					var fblance= document.getElementById("fblance");
					
					if(mv=="USD"){
					    document.getElementById("cv").innerHTML="USD";
						fcurrency.innerHTML="Miner fee";
						fblance.innerHTML="0 USD ≈ $0.00";
					}
				    if(mv=="BTC"){
					    document.getElementById("cv").innerHTML="BTC";
						 fcurrency.innerHTML="Miner fee";
						 fblance.innerHTML="0 BTC ≈ $0.00";
					}
				    if(mv=="LTC"){
					    document.getElementById("cv").innerHTML="LTC";
						 fcurrency.innerHTML="Miner fee";
						 fblance.innerHTML="0 LTC ≈ $0.00";
					}
				    if(mv=="DASH"){
					    document.getElementById("cv").innerHTML="DASH";
						 fcurrency.innerHTML="Miner fee";
						 fblance.innerHTML="0 DASH ≈ $0.00";
					}
				    if(mv=="BCH"){
					    document.getElementById("cv").innerHTML="BCH";
						 fcurrency.innerHTML="Miner fee";
						 fblance.innerHTML="0 BCH ≈ $0.00";
					}
					
				    changeusd();
					changeother();
				}
				
				
				
				
				
				
				
				
				
				
				
				
				function changeusd(){
				
				    var cvr=document.getElementById("cv").innerHTML;
				    var mvc= document.getElementById("mv").value;
					
					if(mvc=="USD" && cvr=="USD"){
					   
					   document.getElementById("inputvalue").value=(document.getElementById("frinput").value)*1;
					   
					}
				    if(mvc=="BTC" && cvr=="BTC"){
					   document.getElementById("inputvalue").value=(document.getElementById("frinput").value)*11435.80;
					
					}
				    if(mvc=="LTC" && cvr=="LTC"){
					    document.getElementById("inputvalue").value=( document.getElementById("frinput").value)*47.39;
					}
				    if(mvc=="DASH" && cvr=="DASH"){
					    document.getElementById("inputvalue").value=( document.getElementById("frinput").value)*67.8183 ;
					}
				    if(mvc=="BCH" && cvr=="BCH"){
					    document.getElementById("inputvalue").value=(document.getElementById("frinput").value)*67.8183;
					}
				
				}
		  
		  
		  
		  
		  
		  
				function changeother(){
				
				    var cvo=document.getElementById("cv").innerHTML;
				    var mvo= document.getElementById("mv").value;
					
					if(mvo=="USD"){
					   
					   document.getElementById("frinput").value=(document.getElementById("inputvalue").value)*1;
					   
					}
				    if(mvo=="BTC"){
					   document.getElementById("frinput").value=(document.getElementById("inputvalue").value)*11435.80;
					
					}
				    if(mvo=="LTC"){
					    document.getElementById("frinput").value=( document.getElementById("inputvalue").value)*47.39;
					}
				    if(mvo=="DASH"){
					    document.getElementById("frinput").value=( document.getElementById("inputvalue").value)*67.8183 ;
					}
				    if(mvo=="BCH"){
					    document.getElementById("frinput").value=(document.getElementById("inputvalue").value)*67.8183;
					}
				
				}
		    