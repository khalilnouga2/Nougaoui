

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

             var wn = document.getElementById('wordnames');
             var cn = document.getElementById('citiesnames');
function displayT(){
    cn.style.borderColor = "blue";
    cn.innerHTML ='Charities Around The United States &nbsp; Click Here =>';
   }
function hideT(){
       cn.style.borderColor = "";
       cn.innerHTML = "Charities Around The United States";
   }

             var wn = document.getElementById('wordnames');
             var cn = document.getElementById('citiesnames');
function displayText(){
    wn.style.borderColor = "blue";
    wn.innerHTML ='Charities Around The World &nbsp; Click Here =>';
   
   }
function hideText(){
    wn.style.borderColor = "";
       wn.innerHTML = "Charities Around The World";
   }



        function lettersOnly(input) {
            var regex = /[^a-z]/gi;
            input.value = input.value.replace(regex, "");
        }
        
        function numbersOnly(input){
            var num = /[^0-9-()]/g;
            input.value = input.value.replace(num, "");
        }
  
function send() {
              var fn = document.getElementById('first_name').value; var ln = document.getElementById('last_name').value;   var email = document.getElementById('email').value;   var co = document.getElementById('company').value;
              var cnt = document.getElementById('country').value;    var st = document.getElementById('street').value;
              var ct = document.getElementById('city').value;
              var stt = document.getElementById('state').value;
              var zp = document.getElementById('zip').value;
              var ph = document.getElementById('phone').value;
          
                var fee = document.getElementById("fee");
                var m = parseFloat(amount.value) || 0;
                var p = parseFloat(perPay.value) || 0;
                var n = parseFloat(annual.value) || 0;
                var f = parseFloat(fee) || 0;
               n = m * 12;
               t = (m*.03)+m; 
                
        document.getElementById('myModal').style = "visibility:visible";
              document.getElementById('para').innerHTML ="<p>"+"Name: "+fn+" "+ln+"</p><p>"+"Email Address: "+ email+"</p><p>"+"Company name: "+co+"</p><p>"+" Address:"+"</p><p>"+st+"<p>"+ct+" "+stt+" "+zp+"</p>"+cnt+"<p>"+"Phone number: "+ph+"</p><p>"+"The Total is $ "+t+"</p>";
              
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
     document.getElementById('myFooter').style.background = '#000';
 }

  
function check(form){
    if(form.userId.value == "khalil" && form.password.value == "123"){
        document.getElementsByTagName("div")[18].className="hide";
        document.getElementsByTagName("div")[17].className = "col-md-12";
        document.getElementsByTagName("div")[17].style.width="560";
          document.getElementById("signing").innerHTML = " <span class='glyphicon glyphicon-log-out' ></span> Logout";
        
         
   }else if (form.userId.value == "" && form.password.value == ""){
       
        alert('please fill out the signing boxes');
   }else if(form.userId.value == ""){
           alert('please enter your user name');
    }else if(form.password.value == ""){
           alert('please enter your password');
    }else {
        alert('user name or password invalid');
    }
    
}

// local Storage
if(localStorage.getItem("userlist") == null){
    userlist = [];
  } else{
    userlist = JSON.parse(localStorage.getItem("userlist"));
  }

  for (u = 0; u < userlist.length; u++){
    t1 = JSON.parse(localStorage.getItem("userlist"))[u].username;
    t2 = JSON.parse(localStorage.getItem("userlist"))[u].password;
    var table = document.getElementById("savedusers");
    var tr = document.createElement("tr");
    tr.className = "row";
    tr.innerHTML = '<td>' + u1 + '</td><td>' + u2 + '</td>';
    table.appendChild(tr);
    console.log(userlist.length,u,u1,u2);
  }

  function users( username , password ){
    this.username = username;
    this.password = password;
    var loggedins = document.getElementById("loggedins");
    var li = document.createElement("li");
    if (username == 'khalil'){
      li.innerHTML = this.password + ', ' + this.username + '<br>this an admin';
    } else if (password == 'Thor' || password == 'Captain America' || name == 'Black Widow'){
      li.innerHTML = this.password + ' is an avenger';
    } else {
      li.innerHTML = this.username+'<br>'+this.password;
    }
    loggedins.appendChild(li);

    userlog = {};
    userlog['Password'] = password;
    userlog['username'] = username;

    checklist = [];

    for (idh = 0; idh < userlist.length; ++idh){
      checklist.push(userlist[idh].hero);
    }

    if (checklist.indexOf(password) == -1){
      userlist.push(userlog);
      localStorage.setItem("userlist", JSON.stringify(userlist));

      var table = document.getElementById("savedusers");
      var tr = document.createElement("tr");
      tr.className = "row";
      tr.innerHTML = '<td>' + username + '</td>&nbsp;<td>' + password + '</td>';
      table.appendChild(tr);

      document.getElementById('password').value = '';
      document.getElementById('username').value = '';
    }

  };

  function remember(){
    n = document.getElementById('password').value;
    r = document.getElementById('username').value;
    new users(r,n);
  }

  new users('Peter Parker', 'Spider-Man');
  new users('Logan', 'Wolverine');




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
        
