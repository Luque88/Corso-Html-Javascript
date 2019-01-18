/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// mi serve un array per caricare tutte le valutazioni
 var ar_valutazioni=[];
 
 function addValutazione(){
     //recupero info
     let valut= document.getElementById("in_valore").value;
     
     //lavoro le info
     ar_valutazioni.push(valut*1);
 }
 


function visMedia(){
    let totale=0;
    for(let i=0; i<ar_valutazioni.length; i++){
        totale=totale + ar_valutazioni[i];
    }
    let media=totale/ar_valutazioni.length;
    document.getElementById("div_media").innerHTML=media;
}

// un metodo per aggiungere le valutazioni all'array

