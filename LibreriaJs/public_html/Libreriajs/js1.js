/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ar_alunni=[];

function aggiungiNomi(){
  
 //provo la funzione cubo come parametro 5
 //alert("cubo di: 5" + cubo(5));
 //alert("quadrato di: 5" + quadrato(5));
 
 
 
 let nome = document.getElementById("in_nome").value;
  

ar_alunni.push(nome);

/*
ris="";
for(i=0; i<ar_alunni.length; i++){
ris += ris +"<br>" + ar_alunni[i];
*/

//let output=createElencoOL(ar_alunni);
//nomi_alunni.innerHTML = output;

    let mytag=document.getElementById("nomi_alunni");
    createElencoBRObj(ar_alunni,mytag);
}
 


    

  
    
 

 
   
