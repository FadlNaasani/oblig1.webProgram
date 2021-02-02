
/*function bilett(tittel , antall, fornavn,etternavn, telefon, epost){
    this.tittel=tittel;
    this.antall=antall;
    this.fornavn=fornavn;
    this.telefon=telefon;
    this.epost=epost;
}
function viBillet(){
    let ut= "";
    for(let b of BilettArray){
        ut+= "filmliste"
    }
}}
// let feilTall= document.getElementById("feilAntall").innerHTML = "skriv riktig tall";
    if (antall.isEmptyObject(){
        let ut = "Du har skrevet følgende: filmnummer "+filmvalg;
        document.getElementById("visBilett").innerHTML = "<br>" + ut + "";
        document.getElementById("feilAntall").innerHTML = "skriv riktig tall";
        return false;
    }
    else if (antall.value != null || antall.value != "") {
        document.getElementById("feilAntall").innerHTML = "skriv riktig tall";
        return false;
    }*/
let BilettArray  =[];
function kjop() {
    let filmvalg =document.getElementsByName("filmliste").value;
    let antallBil=document.getElementById("antall").value;
    let fornavn = document.getElementById("forNavn").value;
    let etterNv = document.getElementById("etterNavn").value;
    let telefon = document.getElementById("telefon").value;
    let epost =   document.getElementById("epost").value;

   let bilettobijekter={
       film: filmvalg, antall1: "", fornavn1:"", etternavn1:"", telefon1:"", epost1:"", epos1:""
   }
const bilettArrayliste= [filmvalg, antallBil,fornavn,etterNv,telefon,epost];

   if(antallBil===""){
       document.getElementById("feilAntall").innerHTML= "Skriv antall".fontcolor("red") ;
   }else {
       bilettArrayliste.antall1= antallBil;
   }
   if(fornavn === ""){
       document.getElementById("feilfor").innerHTML= "Skriv riktig fornavn".fontcolor("red");
   }else {
       bilettArrayliste.fornavn1= fornavn;
      // document.getElementById("visBilett").innerHTML=fornavn;
   }
   if(etterNv===""){
       document.getElementById("feilEtter").innerHTML= "Skriv riktig etternavn".fontcolor("red");
   }else {
       bilettArrayliste.etternavn1= etterNv;
   }
   if(telefon==="") {
       document.getElementById("feilTelf").innerHTML= "Skriv riktig telefon nummer".fontcolor("red");
   }else {
       bilettArrayliste.telefon1= telefon;
   }
   if(epost===""){
       document.getElementById("feilEpost").innerHTML= "Skriv riktig Epost".fontcolor("red");
   }else {
        bilettArrayliste.epost1= epost;
   }
 let kvitering = "";

if(!(antallBil==='')&& !(fornavn==='') && !(etterNv==='') && !(telefon==='') && !(epost==='') ){
    BilettArray.push(bilettobijekter)
}
    for (let i of BilettArray){
        kvitering+= "<table>"+"<tr>" +
            "<th>Film</th>"+
            "<th>Antall</th>"+
            "<th>Fornavn</th>"+
            "<th>EtterNavn</th>"+
            "<th>Telefon Nr</th>"+
            "<th>Epost</th>"+" </tr>"+
            "<td>"+i.film+"</td>"+
            "<td>"+i.antall1+"</td>"+
            "<td>"+i.fornavn1+"</td>"+
            "<td>"+i.etternavn1+"</td>"+
            "<td>"+i.telefon1+"</td>"+
            "<td>"+i.epost1+"</td>"+"</table>";


    }
    document.getElementById("visBilett").innerHTML= kvitering;
    for  (let i =0 ; i <bilettArrayliste.length;i++){
        if(!(bilettArrayliste[i]==="")){
            document.getElementById(bilettArrayliste[i]).innerHTML='';
        }
    }

}
function deletes(){
    BilettArray=[];

    document.getElementById("feilAntall").innerHTML= " ";
    document.getElementById("feilfor").innerHTML= " ";
    document.getElementById("feilEtter").innerHTML= "";
    document.getElementById("feilTelf").innerHTML= " ";
    document.getElementById("feilEpost").innerHTML= " ";

    document.getElementById("antall").value= '';
    document.getElementById("forNavn").value= '';
    document.getElementById("etterNavn").value= '';
    document.getElementById("telefon").value= this.value='';
    document.getElementById("epost").value= this.value='';




}






























