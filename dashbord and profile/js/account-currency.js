
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
                     
					 setTimeout(function (){
	

					
					
				    if(mv=="BTC"){
					    document.getElementById("cv").innerHTML="BTC";
						 fcurrency.innerHTML="Miner fee";
						 fblance.innerHTML="0 BTC ≈ $0.00";
						 document.getElementById("setcoin").innerHTML = "BTC";
						
					}
				    if(mv=="LTC"){
					    document.getElementById("cv").innerHTML="LTC";
						 fcurrency.innerHTML="Miner fee";
						 fblance.innerHTML="0 LTC ≈ $0.00";
						 document.getElementById("setcoin").innerHTML = "LTC";
												


					}
					if(mv=="ETH"){
					    document.getElementById("cv").innerHTML="ETH";
						 fcurrency.innerHTML="Miner fee";
						 fblance.innerHTML="0 ETH ≈ $0.00";
						 document.getElementById("setcoin").innerHTML = "ETH";
						
					}
				    if(mv=="DASH"){
					    document.getElementById("cv").innerHTML="DASH";
						 fcurrency.innerHTML="Miner fee";
						 fblance.innerHTML="0 DASH ≈ $0.00";
						 document.getElementById("setcoin").innerHTML = "DASH";
                        
					}
				    if(mv=="BCH"){
					    document.getElementById("cv").innerHTML="BCH";
						 fcurrency.innerHTML="Miner fee";
						 fblance.innerHTML="0 BCH ≈ $0.00";
						 document.getElementById("setcoin").innerHTML = "BCH";					
                      
							 
					}
					
				    changeusd();
					changefree();
					 },500);
				}
				
				
				
				
				
				
				
				
				
				
				
				
				function changeusd(){
				
				    var cvr=document.getElementById("cv").innerHTML;
				    var mvc= document.getElementById("mv").value;
					
				    if(mvc=="BTC" && cvr=="BTC"){
					   document.getElementById("inputvalue").value=(document.getElementById("frinput").value)*11435.80;
					  

					
					}
				    if(mvc=="LTC" && cvr=="LTC"){
					    document.getElementById("inputvalue").value=( document.getElementById("frinput").value)*47.39;
			          

					}
					if(mvc=="ETH" && cvr=="ETH"){
					    document.getElementById("inputvalue").value=( document.getElementById("frinput").value)*117.39;
			          

					}
					
				    if(mvc=="DASH" && cvr=="DASH"){
					    document.getElementById("inputvalue").value=( document.getElementById("frinput").value)*67.8183 ;
	                    

					}
				    if(mvc=="BCH" && cvr=="BCH"){
					    document.getElementById("inputvalue").value=(document.getElementById("frinput").value)*69.8183;
					    					                         

					}
				
				}
		  
		  
		  
		  
		  
		  
				function changeother(){
				
				    var cvo=document.getElementById("cv").innerHTML;
				    var mvo= document.getElementById("mv").value;
					

				    if(mvo=="BTC"){
					   document.getElementById("frinput").value=(document.getElementById("inputvalue").value)*11435.80;
					
					}
				    if(mvo=="LTC"){
					    document.getElementById("frinput").value=( document.getElementById("inputvalue").value)*47.39;
					}
					if(mvo=="ETH"){
					    document.getElementById("frinput").value=( document.getElementById("inputvalue").value)*117.39;
					}
					
				    if(mvo=="DASH"){
					    document.getElementById("frinput").value=( document.getElementById("inputvalue").value)*67.8183 ;
					}
					
				    if(mvo=="BCH"){
					    document.getElementById("frinput").value=(document.getElementById("inputvalue").value)*617.8183;
					}
				
				}
		    
			
			
			
			function changefree(){
				 var cvf=document.getElementById("cv").innerHTML;
				    var mvf= document.getElementById("mv").value;

				    if(mvf=="BTC" && cvf=="BTC"){
					     document.getElementById("feevalue").value=20000000;

					}
				    if(mvf=="LTC" && cvf=="LTC"){
			            document.getElementById("feevalue").value=30000000;

					}
					if(mvf=="ETH" && cvf=="ETH"){
			            document.getElementById("feevalue").value=35000000;

					}
					
				    if(mvf=="DASH" && cvf=="DASH"){
	                     document.getElementById("feevalue").value=40000000;

					}
				    if(mvf=="BCH" && cvf=="BCH"){
			            document.getElementById("feevalue").value=50000000;

					}
			}
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			 function changeur(){
				    setTimeout(function() {
						  jQuery('.fixed').fadeOut();
						}, 0);
						 setTimeout(function() {
						  jQuery('.fixed').fadeIn();
						 
						}, 0);

				    var mvd= document.getElementById("mur").value;
					var efcurrency= document.getElementById("efcurrency");
					var efblance= document.getElementById("efblance");
                     
					
					 setTimeout(function (){
					
				    if(mvd=="EUR"){
					    document.getElementById("cur").innerHTML="EUR";
						 efcurrency.innerHTML="Miner fee";
						 efblance.innerHTML="0 EUR ≈ $0.00";
						 document.getElementById("esetcoin").innerHTML = "EUR";
						
					}
				    if(mvd=="LTC"){
					    document.getElementById("cur").innerHTML="LTC";
						 efcurrency.innerHTML="Miner fee";
						 efblance.innerHTML="0 LTC ≈ $0.00";
						 document.getElementById("esetcoin").innerHTML = "LTC";
												


					}
					if(mvd=="ETH"){
					    document.getElementById("cur").innerHTML="ETH";
						 efcurrency.innerHTML="Miner fee";
						 efblance.innerHTML="0 ETH ≈ $0.00";
						 document.getElementById("esetcoin").innerHTML = "ETH";
												


					}
					
				    if(mvd=="DASH"){
					    document.getElementById("cur").innerHTML="DASH";
						 efcurrency.innerHTML="Miner fee";
						 efblance.innerHTML="0 DASH ≈ $0.00";
						 document.getElementById("esetcoin").innerHTML = "DASH";
                        
					}
				    if(mvd=="BCH"){
					    document.getElementById("cur").innerHTML="BCH";
						 efcurrency.innerHTML="Miner fee";
						 efblance.innerHTML="0 BCH ≈ $0.00";
						 document.getElementById("esetcoin").innerHTML = "BCH";					
                      
							 
					}
					
				    changeeur();
					changefreer();
				
				
				
			 },500);
				
				}
				
				
				
				
				
				
				
				
				
				
				function changeeur(){
				
				    var cur=document.getElementById("cur").innerHTML;
				    var mur= document.getElementById("mur").value;
					
				    if(mur=="EUR" && cur=="EUR"){
					   document.getElementById("inputvalueur").value=(document.getElementById("frinputur").value)*112435.80;
					  

					
					}
				    if(mur=="LTC" && cur=="LTC"){
					    document.getElementById("inputvalueur").value=( document.getElementById("frinputur").value)*417.39;
			          

					}
					
					if(mur=="ETH" && cur=="ETH"){
					    document.getElementById("inputvalueur").value=( document.getElementById("frinputur").value)*117.39;
			          

					}
					
					
				    if(mur=="DASH" && cur=="DASH"){
					    document.getElementById("inputvalueur").value=( document.getElementById("frinputur").value)*167.8183 ;
	                    

					}
				    if(mur=="BCH" && cur=="BCH"){
					    document.getElementById("inputvalueur").value=(document.getElementById("frinputur").value)*69.8183;
					    					                         

					}
				
				}
		  
		  
		  
		  
		  
		  
				function changeotherur(){
				
				    var ecvo=document.getElementById("cur").innerHTML;
				    var emvo= document.getElementById("mur").value;
					

				    if(emvo=="BTC"){
					   document.getElementById("frinputur").value=(document.getElementById("inputvalueur").value)*11435.80;
					
					}
				    if(emvo=="LTC"){
					    document.getElementById("frinputur").value=( document.getElementById("inputvalueur").value)*47.39;
					}
					if(emvo=="ETH"){
					    document.getElementById("frinputur").value=( document.getElementById("inputvalueur").value)*117.39;
					}
					
				    if(emvo=="DASH"){
					    document.getElementById("frinputur").value=( document.getElementById("inputvalueur").value)*67.8183 ;
					}
				    if(emvo=="BCH"){
					    document.getElementById("frinputur").value=(document.getElementById("inputvalueur").value)*617.8183;
					}
				
				}
		    
			
			
			
			function changefreer(){
				 var ecvf=document.getElementById("cur").innerHTML;
				    var emvf= document.getElementById("mur").value;

				    if(emvf=="EUR" && ecvf=="EUR"){
					     document.getElementById("feevaluer").value=20000000;

					}
				    if(emvf=="LTC" && ecvf=="LTC"){
			            document.getElementById("feevaluer").value=30000000;

					}
					if(emvf=="ETH" && ecvf=="ETH"){
			            document.getElementById("feevaluer").value=35000000;

					}
					
				    if(emvf=="DASH" && ecvf=="DASH"){
	                     document.getElementById("feevaluer").value=40000000;

					}
				    if(emvf=="BCH" && ecvf=="BCH"){
			            document.getElementById("feevaluer").value=50000000;

					}
			}
			
			
			
			
			
			
			
			
			
			
			
			
			 function rchanger(){
				    setTimeout(function() {
						  jQuery('.fixed').fadeOut();
						}, 0);
						 setTimeout(function() {
						  jQuery('.fixed').fadeIn();
						 
						}, 0);
						
						var rmv= document.getElementById("mvr2").value;
							setTimeout(function (){
						   
						
			
				    
					 
					
				    if(rmv=="BTC"){
					   document.getElementById("content2").innerHTML="FF3F55CD1079758320xiyjyu889ju9une4597e46FF3F55CD1079758326...";
					    document.getElementById("requestcoin").innerHTML="Request Bitcoin";
					}
				    if(rmv=="LTC"){
					   document.getElementById("content2").innerHTML="58320xiyjyu889ju9une46FF3597e07975832F55CD10797...";
					    document.getElementById("requestcoin").innerHTML="Request Litecoin";
					}
					if(rmv=="ETH"){
					   document.getElementById("content2").innerHTML="gt666yu89ju9une46FF3597e07975832F55CD10797...";
					    document.getElementById("requestcoin").innerHTML="Request Ethereum";
					}
					
					
				    if(rmv=="DASH"){
					     document.getElementById("content2").innerHTML="iyjyu88958320xju9une46FF3F55597e46FF3F55CD107975832CD10797...";
						  document.getElementById("requestcoin").innerHTML="Request Dark Coin";
					}
				    if(rmv=="BCH"){
					     document.getElementById("content2").innerHTML="58320xiyjyu889ju9une46FF3F55C597e46797...";
						  document.getElementById("requestcoin").innerHTML="Request Bitcoin Cash";
					}
						
					},500);	
						
						
						
						
						
						
						
						
						
			 }