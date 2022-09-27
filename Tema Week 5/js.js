
 document.addEventListener("DOMContentLoaded" , function(event) {
  console.log("Dom fully loaded and parsed")
 
});

 function fn() {
  
       var tag = document.createElement("div");

       var text = document.createElement("div");

       tag.appendChild(text) ;
       

       text.setAttribute('style','background-color:  rgb(193, 253, 133); color: darkgreen; width: auto; height:40px; border : 2px solid rgb(113, 192, 77); border-radius: 7px; display: flex; justify-content: flex-start;  align-items:center; margin-left: 30%; margin-right:30%; font-size:larger ; font-weight:550 ; font-style: arial; padding:4px;',);
       

       text.innerHTML ="Thank you for contacting us,Alexandra" ;
      

       var parent = document.getElementById("pop-up");

       parent.setAttribute("style", "margin-top:20px;");

       parent.appendChild(tag) ;




      
  
         
  
  
  
 


 
 
 
      }
  



  

  
   
 

  


