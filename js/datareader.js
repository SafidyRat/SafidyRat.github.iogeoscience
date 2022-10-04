var files=[ "./geoid/corgeoid.txt", "./geoid/EGM0825min2.txt","./geoid/wgmbouguer.txt"];


var datacor=[];
var Longcor=[];
var Latcor=[];
var Cor=[] ;
var Datab=[];
var sp=[];
var tosplit;
var locName=[];
var testData=[];
var i=0;
var addressPoints=[];

    var reader  = new XMLHttpRequest()|| new ActiveXObject('MSXML2.XMLHTTP');
    var datacorr=[];


function loadcor(){
     Datab=[];
     tosplit=null;
     sp=null;

    reader.open("get",files[i], true);
    reader.onreadystatechange=  storedata;
    reader.send(null);
   
   }

function storedata (){

    if(reader.readyState==4) {
   
          
           //READ Correction DATA
           datacor=null;
           datacorr=reader.responseText.split("\n");

           datacor=datacorr;


           if(i==0){

         
  for(let j=0; j<=datacor.length-3;j++)
  {
    sp = [];
    tosplit = String(datacor[j+1]); 
    sp = tosplit.split("\t");

    locName[j]=sp[0];
    Longcor[j] = parseFloat(sp[2]);
    Latcor[j] = parseFloat(sp[1]);
      Cor[j] =parseFloat(sp[3]);

  }

}

if(i==1){


    var l=0;
  for(let j=0; j<=datacor.length-3;j++)
    {
      sp = [];
      tosplit = String(datacor[j+1]); 
      sp = tosplit.split("\t");

  
      Longcor[j] = parseFloat(sp[0]);
     

      Latcor[j] = parseFloat(sp[1]);
      

        Cor[j] =(sp[2]);
      
      

    }

}


if(i==2){

    for(let j=0; j<=datacor.length-3;j++)
    {
      sp = [];
      tosplit = String(datacor[j+1]); 
      sp = tosplit.split("\t");

      locName[j]=sp[0];
      Longcor[j] = parseFloat(sp[1]);
      Latcor[j] = parseFloat(sp[2]);
        Cor[j] =parseFloat(sp[3]);

    }



}


  
var obj=[];
for(let f=0; f<=datacor.length-3; f++){

  obj[f]={lat: Latcor[f], lng: Longcor[f], count: Cor[f]}
  Datab.push(obj[f]);

  //leaflet-heat data format
  var txt= + Cor[f];
  //console.log(txt);
  obj[f]=[Latcor[f],Longcor[f],txt];
  addressPoints.push(obj[f]);

 

}




////

  

      testData[i] = {
    
       
        data: Datab
      };

      if (i<=2){
          i=i+1;
        loadcor();

      }

    else{
        display();
       

    }


           
        
    //return console.log(datacorr);

           
           }
      }