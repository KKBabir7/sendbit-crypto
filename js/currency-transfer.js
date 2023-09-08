function convert(param1){
						        var factor;
						        var f= document.getElementById("from").value;
						        var t =  document.getElementById("to").value;
								/////////////...................usd to all currency
									if(f == t){
										factor = 1
									}
									else if(f == 'USD' && t == 'USD'){
										factor = 1;
										
									}
									else if(f == 'USD' && t == 'BTC'){
										factor = 0.000088;
									}
									 else if(f == 'USD' && t == 'LTC'){
										factor = 1/8;
									}
									else if(f == 'USD' && t == 'DASH'){
										factor = 1/106;
									}
									else if(f == 'USD' && t == 'BCH'){
										factor = 1/.06;
									}
                                /////////////...................btc too all currency
									else if(f == 'BTC' && t == 'BTC'){
										factor =  1;
									}
									else if(f == 'BTC' && t == 'USD'){
										factor = 11307.70;
									}
									else if(f == 'BTC' && t == 'LTC'){
										factor =  23/2;
									}
									else if(f == 'BTC' && t == 'DASH'){
										factor =  22/2;
									}
									else if(f == 'BTC' && t == 'BCH'){
										factor =  21/2;
									}
								/////////////...................ltc too all currency
									else if(f == 'LTC' && t == 'LTC'){
										factor =  20/2;
									}
									else if(f == 'LTC' && t == 'USD'){
										factor =  19/2;
									}
									else if(f == 'LTC' && t == 'BTC'){
										factor =  2/2;
									}
									else if(f == 'LTC' && t == 'DASH'){
										factor =  3/2;
									}
									else if(f == 'LTC' && t == 'BCH'){
										factor =  4/2;
									}
						        /////////////...................dash too all currency
									else if(f == 'DASH' && t == 'DASH'){
										factor =  5/2;
									}
									else if(f == 'DASH' && t == 'USD'){
										factor =  6/2;
									}	
									else if(f == 'DASH' && t == 'BTC'){
										factor =  7/2;
									}
									else if(f == 'DASH' && t == 'LTC'){
										factor =  8/2;
									}
									else if(f == 'DASH' && t == 'BCH'){
										factor =  9/2;
									}
						        /////////////...................Bch too all currency
									else if(f == 'BCH' && t == 'BCH'){
										factor =  11/2;
									}
									else if(f == 'BCH' && t == 'USD'){
										factor =  12/2;
									}
									else if(f == 'BCH' && t == 'BTC'){
										factor =  13/2;
									}
									else if(f == 'BCH' && t == 'DASH'){
										factor =  14/2;
									}
									else if(f == 'BCH' && t == 'LTC'){
										factor =  15/2;
									}
						/////////////...................second input take firstinput  value
						       if(param1 == "C"){
							        document.getElementById('secondinput').value = document.getElementById('firstinput').value * factor
							            /////////////...........1 usd ltc btc bch dash change under
										if(f == 'USD'){
											 document.getElementById("cfname").innerHTML="USD";
											}
										if(f == 'BTC'){
											 document.getElementById("cfname").innerHTML="BTC";
											}
											
										if(f == 'LTC'){
											 document.getElementById("cfname").innerHTML="LTC";
											}
											
										if(f == 'DASH'){
											 document.getElementById("cfname").innerHTML="DASH";
											}
										if(f == 'BCH'){
											 document.getElementById("cfname").innerHTML="BCH";
											}
									/////////////...................firstinput amound low code
						               var send1=document.getElementById("firstinput").value;
			                           var sendr=document.getElementById("firstinput");
										if(send1<10 || send1==""){
											document.getElementById("wrong1").innerHTML="Amount is too low for currency.";
											document.getElementById("wrong1").style.color="red";
											sendr.style.color="red";
											sendr.style.borderColor="red";	
										}
										else{
											document.getElementById("wrong1").innerHTML="";
											sendr.style.color="#66afe9";
											sendr.style.borderColor="#66afe9";
										}
								
						            }
						/////////////...................first input take secondinput  value
						       if(param1 == "F"){
							        document.getElementById('firstinput').value = document.getElementById('secondinput').value * factor
									/////////////...........1 usd ltc btc bch dash change under
								   if(t == 'USD'){
									 document.getElementById("ctname").innerHTML="USD";
									}
									if(t == 'BTC'){
									 document.getElementById("ctname").innerHTML="BTC";
									}
									
								   if(t == 'LTC'){
									 document.getElementById("ctname").innerHTML="LTC";
									}
									
								   if(t == 'DASH'){
									 document.getElementById("ctname").innerHTML="DASH";
									}
									if(t == 'BCH'){
									 document.getElementById("ctname").innerHTML="BCH";
									}
								/////////////...................firstinput amound low code
								   var send2=document.getElementById("secondinput").value;
			                       var sends=document.getElementById("secondinput");
			        			      
									if(send2<10 || send2==0){
										document.getElementById("wrong2").innerHTML="Amount is too low for currency.";
										document.getElementById("wrong2").style.color="red";
										sends.style.color="red";
										sends.style.borderColor="red";
										
									}
									else{
										document.getElementById("wrong2").innerHTML="";
										sends.style.color="#66afe9";
										sends.style.borderColor="#66afe9";
									}
								}
								/////////////...................1 usd ltc btc bch dash value change 
								var frr= document.getElementById("from").value;					var trr =  document.getElementById("to").value;
								    /////////////...................1 usd to all value change 
									if(frr == 'USD' && trr == 'USD'){
									document.getElementById("ccn").innerHTML="1";
													}
									if(frr == 'USD' && trr == 'BTC'){
									document.getElementById("ccn").innerHTML="0.000088";
													}
									if(frr == 'USD' && trr == 'LTC'){
									document.getElementById("ccn").innerHTML="0.021";
													}
									 if(frr == 'USD' && trr == 'DASH'){
									document.getElementById("ccn").innerHTML="0.02";
													}
									if(frr == 'USD' && trr == 'BCH'){
									document.getElementById("ccn").innerHTML="0.0040";
								 				    }
									/////////////...................1 btc to all value change 
										if(frr == 'BTC' && trr == 'BTC'){
										document.getElementById("ccn").innerHTML="1";
														}
										if(frr == 'BTC' && trr == 'USD'){
										document.getElementById("ccn").innerHTML="11,352.90";
														}
										if(frr == 'BTC' && trr == 'LTC'){
										document.getElementById("ccn").innerHTML="238.17";
														}
										 if(frr == 'BTC' && trr == 'DASH'){
										document.getElementById("ccn").innerHTML="159.61";
														}
										if(frr == 'BTC' && trr == 'BCH'){
										document.getElementById("ccn").innerHTML="45.32";
														}
										/////////////...................1 ltc to all value change 
										if(frr == 'LTC' && trr == 'LTC'){
										document.getElementById("ccn").innerHTML="1";
														}
										if(frr == 'LTC' && trr == 'USD'){
										document.getElementById("ccn").innerHTML="11,352.90";
														}
										if(frr == 'LTC' && trr == 'BTC'){
										document.getElementById("ccn").innerHTML="238.17";
														}
										 if(frr == 'LTC' && trr == 'DASH'){
										document.getElementById("ccn").innerHTML="159.61";
														}
										if(frr == 'LTC' && trr == 'BCH'){
										document.getElementById("ccn").innerHTML="45.32";
														}
										/////////////...................1 dash to all value change  
										if(frr == 'DASH' && trr == 'DASH'){
										document.getElementById("ccn").innerHTML="1";
														}
										if(frr == 'DASH' && trr == 'USD'){
										document.getElementById("ccn").innerHTML="1154352.90";
														}
										if(frr == 'DASH' && trr == 'BTC'){
										document.getElementById("ccn").innerHTML="2348.17";
														}
										 if(frr == 'DASH' && trr == 'LTC'){
										document.getElementById("ccn").innerHTML="41459.61";
														}
										if(frr == 'DASH' && trr == 'BCH'){
										document.getElementById("ccn").innerHTML="415.32";
														}
                                        /////////////...................1 bch to all value change 
										if(frr == 'BCH' && trr == 'BCH'){
										document.getElementById("ccn").innerHTML="1";
														}
										if(frr == 'BCH' && trr == 'USD'){
										document.getElementById("ccn").innerHTML="011,352.90";
														}
										if(frr == 'BCH' && trr == 'BTC'){
										document.getElementById("ccn").innerHTML="2368.17";
														}
										 if(frr == 'BCH' && trr == 'LTC'){
										document.getElementById("ccn").innerHTML="5159.61";
														}
										if(frr == 'BCH' && trr == 'DASH'){
										document.getElementById("ccn").innerHTML="045.32";
														}

					}