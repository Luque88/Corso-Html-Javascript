/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 
function eseguiPotenza (){
    
   let val1=document.getElementById("ins_val1").value; 
   let val2=document.getElementById("ins_val2").value;
   let ris= potenza(val1,val2);
   document.getElementById("div_risultati").innerHTML=ris;
    
   
}    
   
     
    
function eseguiSomma (valore){
    
   let val1=document.getElementById("ins_val1").value; 
   let val2=document.getElementById("ins_val2").value;
   let ris= somma(val1,val2);
   document.getElementById("div_risultati").innerHTML=ris;
   
   
   
}



