function success() {
  
  var tag = document.createElement("div");

  var text = document.createElement("div");

  tag.appendChild(text) ;
  

  text.setAttribute('style','background-color:  rgb(193, 253, 133); color: darkgreen; width: auto; height:40px; border : 2px solid rgb(113, 192, 77); border-radius: 7px; display: flex; justify-content: flex-start;  align-items:center; margin-left: 30%; margin-right:30%; font-size:larger ; font-weight:550 ; font-style: arial; padding:4px;',);
  

  text.innerHTML ="Thank you for contacting us";
 

  var parent = document.getElementById("pop-up");

  parent.setAttribute("style", "margin-top:20px;");

  parent.appendChild(tag) ;

  var input1 = document.getElementById("input-name").setAttribute("style","background-color: lightgreen; border-radius:5px;" )
  var input2 = document.getElementById("input-email").setAttribute("style","background-color: lightgreen;border-radius:5px; ")
  var input3 = document.getElementById("input-subject").setAttribute("style","background-color: lightgreen;border-radius:5px;")


 }



 function  error() {

  var tag = document.createElement("div");

  var text = document.createElement("div");

  tag.appendChild(text) ;

  

  text.setAttribute('style','background-color: rgb(110, 11, 0); color: white; width: auto; height:40px; border : 2px solid rgb(113, 192, 77); border-radius: 7px; display: flex; justify-content: flex-start;  align-items:center; margin-left: 30%; margin-right:30%; font-size:larger ; font-weight:550 ; font-style: arial; padding:4px;',);
  

  text.innerHTML ="Please enter your data" ;
 

  var parent = document.getElementById("pop-up");

  parent.setAttribute("style", "margin-top:20px;");

  parent.appendChild(tag) ;

  var input1 = document.getElementById("input-name").setAttribute("style","background-color: red; border-radius:5px;" )
  var input2 = document.getElementById("input-email").setAttribute("style","background-color: red;border-radius:5px; ")
  var input3 = document.getElementById("input-subject").setAttribute("style","background-color: red;border-radius:5px;")

    

  }
                   
  function validateForm() {


    var x = document.forms["form1"]["text1"].value;
    var y = document.forms["form1"]["text2"].value;
    var z =document.forms["form1"]["text3"].value;

    if (x, y, z == "") {

      
      
      document.getElementById("btn").onclick = function() {error()}; 

      return false;
    }

    else {
                   
      document.getElementById("btn").onclick = function() {success()}; 

      return;

    }
  }


  


















// const inputFeilds = document.querySelectorAll("input");

    
//if  ( input => input.value !== ""); {

 // document.getElementById("btn").onclick = function() {error()}; 

 //alert("no value");



  



    

  

    
     

  







  

  
  
  
  
  
  
  

