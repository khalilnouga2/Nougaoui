

     var world = document.querySelectorAll(".list-group > li");
        
        	
		for (i = 0; i < world.length; i++) {

			if (world[i].parentElement.className.indexOf('li') > -1) {
				world[i].style.backgroundImage = "url('image/tru-closed.jpg')";
				world[i].style.color = "#005faf";
			} 
			world[i].onclick = function() {
				var lists = this.nextElementSibling;
				if (lists.style.display === 'none' || lists.style.display === '') {
					lists.style.display = 'block';
					var backG = this.style.backgroundImage.replace('closed', 'opened');
					this.style.backgroundImage = backG;
				} else {
					lists.style.display = 'none';
					var backG = this.style.backgroundImage.replace('opened', 'closed');
					this.style.backgroundImage = backG;
				}
			};

		}



        function lettersOnly(input) {
            var regex = /[^a-z]/gi;
            input.value = input.value.replace(regex, "");
        }
        
        function numbersOnly(input){
            var num = /[^0-9]/g;
            input.value = input.value.replace(num, "");
        }

       

     var userInput = document.querySelectorAll(".form-group > .form-control");
    
        for (a = 0; a < userInput.length; a++) {
            
            var submit = document.getElementById('submit');
            submit.onclick = function () {
              ziro =userInput[0].value;
              one =userInput[1].value;
              two =userInput[2].value;
              three =userInput[3].value;
              four =userInput[4].value;
              five =userInput[5].value;
              six =userInput[6].value;
              seven =userInput[7].value;
              eight =userInput[8].value;
              nine =userInput[9].value;
              ten =userInput[10].value;
              eleven =userInput[11].value;
              twelve =userInput[12].value;
              thirteen =userInput[13].value;
              fourteen =userInput[14].value;
              fifteen =userInput[15].value;
                var fee = document.getElementById("fee");
                var m = parseFloat(amount.value) || 0;
                var p = parseFloat(perPay.value) || 0;
                var n = parseFloat(annual.value) || 0;
                var f = parseFloat(fee) || 0;
               n = m * 12;
               t = (m*.03)+m; 
                
			  document.getElementById('myModal').style = "visibility:visible";
              document.getElementById('para').innerHTML ="<p>"+"Name: "+two+" "+three+"</p><p>"+"Email Address: "+ four+"</p><p>"+"Company name: "+five+"</p><p>"+" Address:"+"</p><p>"+seven+"<p>"+eight+" "+nine+" "+ten+"</p>"+six+"<p>"+"Phone number: "+eleven+"</p><p>"+"The Total is $ "+t+"</p>";
          		
			};
		}

function editin(){
    
    document.getElementsByTagName("div")[32].className = "hide"
}
function confirm(){
    window.close('donate.html');
    window.open('index.html');
}
function loginfo(){
     alert('By donating to one or more of our charity partners, you can be sure every dollar donated helps feed the hungry, shelter refugees, educate children and adults and strengthen families and communities.');
    window.close('index.html');
    window.open('donate.html');
    
}
function loginIn(){
    
        document.getElementsByTagName("div")[18].className="col-md-4";
        document.getElementsByTagName("input")[0].value = "";
        document.getElementsByTagName("input")[1].value = "";
        document.getElementsByTagName("div")[17].className = "col-md-8";
        document.getElementsByTagName("div")[17].style.width="400";
          document.getElementById("signing").innerHTML = " <span class='glyphicon glyphicon-log-in' ></span> Login";
}
function donate(){
    alert('By donating to one or more of our charity partners, you can be sure every dollar donated helps feed the hungry, shelter refugees, educate children and adults and strengthen families and communities.');
    
    document.getElementsByTagName("div")[11].className = "hide"
    document.getElementsByTagName("div")[21].className = "hide"
    document.getElementsByTagName("div")[60].className = "hide" 
}


        var amount = document.getElementById("amount");
        var perPay = document.getElementById("perPay");
        var annual = document.getElementById("annual");
        var fee = document.getElementById("fee");
//        var ad = document.getElementById("add");    
//            ad.addEventListener('click', adin);
             
            function adin(){
                var m = parseFloat(amount.value) || 0;
                var p = parseFloat(perPay.value) || 0;
                var n = parseFloat(annual.value) || 0;
                var f = parseFloat(fee) || 0;
               n = m * 12;
                  
                perPay.innerHTML = '$ ' + m;
                annual.innerHTML = '$ '+ n;
                fee.innerHTML = '$ '+ m;
            }
            
//            remove = document.getElementById("remove");
//            remove.addEventListener('click', erase);

             function erase(){
                amount.value = "";
                perPay.innerHTML = "";
                annual.innerHTML = "";
                fee.innerHTML  = "$ 0.00"
            }

 function tax(){
                var m = parseFloat(amount.value) || 0;
                var p = parseFloat(perPay.value) || 0;
                var n = parseFloat(annual.value) || 0;
                var f = parseFloat(fee) || 0;
               n = m * 12;
               t = (m*.03)+m;
               
     if(true){
         if(fee.innerHTML = "$ " + n){
         fee.innerHTML = "$ " + n*10;
             }if (fee.innerHTML = "$ " + m){
                 fee.innerHTML = "$ " + t;
             }
 }else if (false){
     fee.innerHTML = "$ " + m;
   }
 }

function noTax(){
                var m = parseFloat(amount.value) || 0;
                var p = parseFloat(perPay.value) || 0;
                var n = parseFloat(annual.value) || 0;
                var f = parseFloat(fee) || 0;
               n = m * 12;
               
     if(true){
       
     fee.innerHTML = "$ " + m;
   }
 }



   
 function changeColor(){
     document.getElementById('myFooter').style.background = '#7FFFD4';
     document.getElementById('wel').style.background = '#7FFFD4' 
 }

  
function check(form){
  
    if(form.userId.value == "khalil" && form.password.value == "123"){
        document.getElementsByTagName("div")[18].className="hide";
        document.getElementsByTagName("div")[17].className = "col-md-12";
        document.getElementsByTagName("div")[17].style.width="560";
          document.getElementById("signing").innerHTML = " <span class='glyphicon glyphicon-log-out' ></span> Logout";
         
        
        
    }else{
        alert('user name or password invalid')
    }
}

function nextOne(){
     document.getElementsByClassName('hide')[0].className = "show";
     document.getElementsByClassName('show')[0].className = "hide";
   
    
}
function nextTwo(){
     document.getElementsByClassName('hide')[1].className = "show";
     document.getElementsByClassName('show')[0].className = "hide";
   
   
}
function nextThree(){
    document.getElementsByClassName('hide')[2].className = "show";
    document.getElementsByClassName('show')[0].className = "hide";
    
     
}

function backTwo(){
      
    document.getElementsByClassName('show')[0].className = "hide";
    document.getElementsByClassName('hide')[0].className = "show";
   
   
}
function backThree(){
    document.getElementsByClassName('show')[0].className = "hide";
     document.getElementsByClassName('hide')[1].className = "show";
     
}
function backFour(){
   document.getElementsByClassName('show')[0].className = "hide";
    document.getElementsByClassName('hide')[2].className = "show";
    
    
    
}
        
