/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function createElencoBR (myArray){
        
    let ris="";
    for (i=0; i< myArray.length; i++){
        ris += myArray[i]  + "<br>";
        
    }
    
 return ris;   
 
  }

function createElencoBRObj (myArray,myObjTag){
        
    let ris="";
    for (i=0; i< myArray.length; i++){
        ris += myArray[i]  + "<br>";
        
    }
    
  myObjTag.innerHTML=ris;  
 //return ris;   
 
  }
  
function createElencoOL (ar){
    //devo produrre ris es: <ol><il>andrea</li><li>luca</li></ol>    
    let ris="";
    for (i=0; i< ar.length; i++){
        ris +="<li>"+ ar[i] + "</li>";
        
    }
    
  ris="<ol>"+ ris +"</ol>";
 return ris;    
 
 }
 
 
  function cubo(valore){
    
    ris=0;  
    //ris=3*3*3;  
    ris= valore*valore*valore;
        
     return ris;
  
    
}
    
function quadrato (valore){
    
    ris=0;
    //ris=3*3;
    ris= valore*valore;
    
    return ris;
}   

function potenza (valore,esponente){
    //creo variabile di ritorno
    let ris=1;
    
    //ris= 2*2*2 caso 2 alla terza   ris=v*v*v
    //ris=3*3 caso 3 alla seconda    ris=v*v
    /*
    if(esponente==2)
        ris==valore*valore;
    if(esponente==3)
        ris== valore*valore*valore;
    */
    for (i=0; i<esponente;i++){
        ris=ris*valore;
    }
    
   return ris;
    
}    
    
    
    
function somma(v1,v2){
    
    ris=0;
    v1=v1*1;
    v2=v2*1;
    
   
    ris= v1+v2;
    
    return ris;
}   
